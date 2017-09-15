import json

master_cards_file = open('cards.cube.master.json', 'r')
all_cards = json.load(master_cards_file)
master_cards_file.close()

total_cards = 0

for card_class in ['NEUTRAL','PRIEST', 'MAGE', 'WARLOCK', 'WARRIOR', 'HUNTER', 'PALADIN', 'ROGUE', 'DRUID', 'SHAMAN']:
    cards_in_class = 0
    rarities = ['COMMON', 'RARE', 'EPIC', 'LEGENDARY']
    rarity_numbers = {
        'COMMON': 0,
        'RARE': 0,
        'EPIC': 0,
        'LEGENDARY': 0
    }
    for card in all_cards[card_class]:
        cards_in_class += 1
        rarity_numbers[card['rarity']] += 1
        total_cards += 1
    print(card_class.capitalize())
    for rarity in rarities:
        print('  ' + rarity.capitalize() + ': ' + str(rarity_numbers[rarity]))
    print('  Total: ' + str(cards_in_class))
print('total cards in cube: ' + str(total_cards))