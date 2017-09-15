import json

## A script that splits a JSON master file for a HearthCube into separate files for each HS class (Druid, Priest, etc.)

# First, load the entirety of the cube's master file into memory.
master_cards_file = open('cards.cube.master.json', 'r')
all_cards = json.load(master_cards_file)
master_cards_file.close()

# We create the file for each class separately, instead of writing to them continuously, 
# or having all the classes' data coexist as one giant dictionary.
for card_class in ['PRIEST', 'MAGE', 'WARLOCK', 'WARRIOR', 'HUNTER', 'PALADIN', 'ROGUE', 'DRUID', 'SHAMAN']:
    # We need to parse each rarity, since they're separated in this format.
    cube_class = {}
    for card in (all_cards['NEUTRAL'] + all_cards[card_class]):
        new_card = {}
        new_card['dbfId'] = card['dbfId']
        new_card['name'] = card['name']
        new_card['rarity'] = card['rarity']
        # In the class files, cards only have one frequency.
        if card_class in card['frequency']:
            new_card['frequency'] = card['frequency'][card_class]
        elif 'DEFAULT' in card['frequency']:
            new_card['frequency'] = card['frequency']['DEFAULT']
        else:
            new_card['frequency'] = 0
        new_card['url'] = card['url']
        cube_class[new_card['dbfId']] = new_card
    # Write each class' cube to another file
    cube_class_file = open('../api/card-json/cards.cube.' + card_class.lower() + '.json', 'w')
    json.dump(cube_class, cube_class_file)
    cube_class_file.close()