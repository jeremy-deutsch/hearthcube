import json

## A script to give a quick overview of the distribution of cards across classes and rarities.
## Run in the same directory as the cube master file.

master_cards_file = open('cards.cube.master.json', 'r')
all_cards = json.load(master_cards_file)
master_cards_file.close()

total_cards = 0

for card_class in ['NEUTRAL','PRIEST', 'MAGE', 'WARLOCK', 'WARRIOR', 'HUNTER', 'PALADIN', 'ROGUE', 'DRUID', 'SHAMAN']:
    total_cards += len(all_cards[card_class])
    # This list (rarities) lets us control which order the rarity counts print in
    rarities = ['COMMON', 'RARE', 'EPIC', 'LEGENDARY']
    rarity_numbers = {
        'COMMON': 0,
        'RARE': 0,
        'EPIC': 0,
        'LEGENDARY': 0
    }
    # Count the cards
    for card in all_cards[card_class]:
        rarity_numbers[card['rarity']] += 1
    print(card_class.capitalize())
    for rarity in rarities:
        print('  ' + rarity.capitalize() + ': ' + str(rarity_numbers[rarity]))
    print('  Total: ' + str(len(all_cards[card_class])))
print('total cards in cube: ' + str(total_cards))


# Example output:

# Neutral
#   Common: 41
#   Rare: 19
#   Epic: 13
#   Legendary: 11
#   Total: 84
# Priest
#   Common: 8
#   Rare: 7
#   Epic: 3
#   Legendary: 2
#   Total: 20
# Mage
#   Common: 10
#   Rare: 7
#   Epic: 3
#   Legendary: 2
#   Total: 22
# Warlock
#   Common: 7
#   Rare: 6
#   Epic: 3
#   Legendary: 2
#   Total: 18
# Warrior
#   Common: 8
#   Rare: 4
#   Epic: 4
#   Legendary: 2
#   Total: 18
# Hunter
#   Common: 6
#   Rare: 8
#   Epic: 2
#   Legendary: 2
#   Total: 18
# Paladin
#   Common: 7
#   Rare: 6
#   Epic: 3
#   Legendary: 2
#   Total: 18
# Rogue
#   Common: 8
#   Rare: 5
#   Epic: 3
#   Legendary: 2
#   Total: 18
# Druid
#   Common: 8
#   Rare: 6
#   Epic: 4
#   Legendary: 2
#   Total: 20
# Shaman
#   Common: 7
#   Rare: 6
#   Epic: 3
#   Legendary: 2
#   Total: 18
# total cards in cube: 254