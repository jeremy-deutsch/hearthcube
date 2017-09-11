import json

all_cards_file = open('cards.collectible.json', 'r')
all_cards = json.load(all_cards_file)
all_cards_file.close()
cube_master = {
    'COMMON': [],
    'RARE': [],
    'EPIC': [],
    'LEGENDARY': []
}
for card in all_cards:
    new_card = {}
    new_card['id'] = card['id']
    new_card['dbfId'] = card['dbfId']
    new_card['name'] = card['name']
    if card['rarity'] == 'FREE':
        new_card['rarity'] = 'COMMON'
    else:
        new_card['rarity'] = card['rarity']
    new_card['cardClass'] = card['cardClass']
    if new_card['cardClass'] == 'NEUTRAL':
        new_card['frequency'] = {'DEFAULT': 1.0}
    else:
        new_card['frequency'] = {}
        new_card['frequency'][new_card['cardClass']] = 1.0
    cube_master[new_card['rarity']].append(new_card)

cube_master_file = open('cards.cube.all.json', 'w')
json.dump(cube_master, cube_master_file)
cube_master_file.close()