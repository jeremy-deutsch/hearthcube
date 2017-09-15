import json
import sys

## A script that takes the JSON of every collectible Hearthstone card, and turns it into a useful format
## for a HearthCube master JSON file.

# Step 1: Load all the images
images_file = open('images.json', 'r')
images_old = json.load(images_file)
images_file.close()

images_master = {}

# Parse all the images, and load their URLs to add to the master
for image in images_old:
    images_master[image['id']] = image['url']

# I hope python has a good garbage collector!
images_old = []

# First, load the HS card master set into memory.
all_cards_file = open('cards.collectible.json', 'r')
all_cards = json.load(all_cards_file)
all_cards_file.close()

cube_master = {
    'NEUTRAL': [],
    'PRIEST': [],
    'MAGE': [], 
    'WARLOCK': [], 
    'WARRIOR': [], 
    'HUNTER': [], 
    'PALADIN': [], 
    'ROGUE': [], 
    'DRUID': [], 
    'SHAMAN': []
}

result_type = ""

if len(sys.argv) == 1:
    # Parse all the cards, and add the fields we care about to our new set.
    result_type = 'all'
    for card in all_cards:
        if (card['type'] != 'HERO' or card['set'] == 'ICECROWN'):
            new_card = {}
            new_card['dbfId'] = card['dbfId']
            new_card['name'] = card['name']
            if card['rarity'] == 'FREE':
                new_card['rarity'] = 'COMMON'
            else:
                new_card['rarity'] = card['rarity']
            new_card['cardClass'] = card['cardClass']
            new_card['set'] = card['set']
            if 'text' in card:
                new_card['text'] = card['text']
            if new_card['cardClass'] == 'NEUTRAL':
                new_card['frequency'] = {'DEFAULT': 0.7}
            else:
                new_card['frequency'] = {}
                new_card['frequency'][new_card['cardClass']] = 1.0
            new_card['url'] = images_master[card['id']]
            cube_master[new_card['cardClass']].append(new_card)
elif sys.argv[1].lower() == "set":
    if len(sys.argv) < 3:
        print("error: must specify one or more sets", file=sys.stderr)
        sys.exit()
    else:
        if len(sys.argv) == 3:
            result_type = sys.argv[2]
        else:
            result_type = 'set_search'
        for set_name in sys.argv[2:]:
            found_set = False
            for card in all_cards:
                if (card['type'] != 'HERO' or card['set'] == 'ICECROWN') and card['set'] == set_name.upper():
                    found_set = True
                    new_card = {}
                    new_card['dbfId'] = card['dbfId']
                    new_card['name'] = card['name']
                    if card['rarity'] == 'FREE':
                        new_card['rarity'] = 'COMMON'
                    else:
                        new_card['rarity'] = card['rarity']
                    new_card['cardClass'] = card['cardClass']
                    new_card['set'] = card['set']
                    if 'text' in card:
                        new_card['text'] = card['text']
                    if new_card['cardClass'] == 'NEUTRAL':
                        new_card['frequency'] = {'DEFAULT': 0.7}
                    else:
                        new_card['frequency'] = {}
                        new_card['frequency'][new_card['cardClass']] = 1.0
                    new_card['url'] = images_master[card['id']]
                    cube_master[new_card['cardClass']].append(new_card)
            if not found_set:
                print('no set with name "' + set_name + ' found', file=sys.stderr)

# Create a new JSON file, with indents for easy reading
cube_master_file = open('cards.cube.' + result_type + '.json', 'w')
json.dump(cube_master, cube_master_file, indent=1)
cube_master_file.close()