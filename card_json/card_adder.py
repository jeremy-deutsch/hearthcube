import json
import sys

## A script to add more cards to the cube. Takes in the names of the cards to add as commmand-line arguments.
## Uses the cube.all and cube.master files.

if len(sys.argv) == 1:
    print("error: must specify one or more cards to move", file=sys.stderr)
    sys.exit()

all_cards_file = open('cards.cube.all.json', 'r')
all_cards = json.load(all_cards_file)
all_cards_file.close()

cube_cards_file = open('cards.cube.master.json', 'r')
cube_cards = json.load(cube_cards_file)
cube_cards_file.close()

cards_to_move = sys.argv[1:]

# Make sure the list doesn't contain any cards already in the cube
for card_class in ['NEUTRAL', 'PRIEST', 'MAGE', 'WARLOCK', 'WARRIOR', 'HUNTER', 'PALADIN', 'ROGUE', 'DRUID', 'SHAMAN']:
    for card in cube_cards[card_class]:
        if card['name'] in cards_to_move:
            cards_to_move.remove(card['name'])

# Find the card information in the list of all cards, and put that information into the cube file
for card_class in ['NEUTRAL', 'PRIEST', 'MAGE', 'WARLOCK', 'WARRIOR', 'HUNTER', 'PALADIN', 'ROGUE', 'DRUID', 'SHAMAN']:
    for card in all_cards[card_class]:
        if card['name'] in cards_to_move:
            cube_cards[card_class].append(card)
            cards_to_move.remove(card['name'])

# Notify the user of any cards not found
if cards_to_move:
    print('Not found: ' + str(cards_to_move))

# Write the new cube file
new_cube_master_file = open('cards.cube.master.json', 'w')
json.dump(cube_cards, new_cube_master_file, indent=1)
new_cube_master_file.close()