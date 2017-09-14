import json

## A script that takes the JSON of every collectible Hearthstone card, and turns it into a useful format
## for a HearthCube master JSON file.

# First, load the HS card master set into memory.
all_cards_file = open('cards.collectible.json', 'r')
all_cards = json.load(all_cards_file)
all_cards_file.close()

cube_master = {}

# Parse all the cards, and add the fields we care about to our new set.
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
        if new_card['cardClass'] == 'NEUTRAL':
            new_card['frequency'] = {'DEFAULT': 0.75}
        else:
            new_card['frequency'] = {}
            new_card['frequency'][new_card['cardClass']] = 1.0
        cube_master[new_card['dbfId']] = new_card

# Create a new JSON file, with indents for easy reading
cube_master_file = open('cards.cube.all.json', 'w')
json.dump(cube_master, cube_master_file, indent=1)
cube_master_file.close()