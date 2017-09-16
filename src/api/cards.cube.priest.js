const priestCards = {"512": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/EX1_283.png", "frequency": 0.7, "name": "Frost Elemental", "dbfId": 512, "rarity": "COMMON"}, "1794": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/FP1_013.png", "frequency": 0.7, "name": "Kel'Thuzad", "dbfId": 1794, "rarity": "LEGENDARY"}, "46101": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_911.png", "frequency": 0.8, "name": "Keening Banshee", "dbfId": 46101, "rarity": "RARE"}, "46102": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_912.png", "frequency": 0.8, "name": "Corpsetaker", "dbfId": 46102, "rarity": "EPIC"}, "46103": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_913.png", "frequency": 0.8, "name": "Tainted Zealot", "dbfId": 46103, "rarity": "COMMON"}, "2073": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/GVG_105.png", "frequency": 0.7, "name": "Piloted Sky Golem", "dbfId": 2073, "rarity": "EPIC"}, "2594": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/AT_092.png", "frequency": 0.7, "name": "Ice Rager", "dbfId": 2594, "rarity": "COMMON"}, "43051": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_812.png", "frequency": 0.8, "name": "Meat Wagon", "dbfId": 43051, "rarity": "EPIC"}, "40492": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/CFM_646.png", "frequency": 0.7, "name": "Backstreet Leper", "dbfId": 40492, "rarity": "COMMON"}, "42566": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_207.png", "frequency": 1.15, "name": "Devour Mind", "dbfId": 42566, "rarity": "RARE"}, "42574": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_210.png", "frequency": 1.15, "name": "Shadow Ascendant", "dbfId": 42574, "rarity": "COMMON"}, "1109": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/CS2_181.png", "frequency": 0.7, "name": "Injured Blademaster", "dbfId": 1109, "rarity": "RARE"}, "90": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/CS2_182.png", "frequency": 0.7, "name": "Chillwind Yeti", "dbfId": 90, "rarity": "COMMON"}, "42596": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_212.png", "frequency": 1.15, "name": "Acolyte of Agony", "dbfId": 42596, "rarity": "COMMON"}, "42597": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_213.png", "frequency": 1.15, "name": "Eternal Servitude", "dbfId": 42597, "rarity": "RARE"}, "42598": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_214.png", "frequency": 1.15, "name": "Obsidian Statue", "dbfId": 42598, "rarity": "EPIC"}, "43029": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_810.png", "frequency": 0.8, "name": "Deathaxe Punisher", "dbfId": 43029, "rarity": "EPIC"}, "642": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/EX1_020.png", "frequency": 0.7, "name": "Scarlet Crusader", "dbfId": 642, "rarity": "COMMON"}, "42633": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_215.png", "frequency": 1.15, "name": "Archbishop Benedictus", "dbfId": 42633, "rarity": "LEGENDARY"}, "38538": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/OG_156.png", "frequency": 0.7, "name": "Bilefin Tidehunter", "dbfId": 38538, "rarity": "COMMON"}, "41111": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/UNG_205.png", "frequency": 0.7, "name": "Glacial Shard", "dbfId": 41111, "rarity": "COMMON"}, "1182": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/CS2_125.png", "frequency": 0.7, "name": "Ironfur Grizzly", "dbfId": 1182, "rarity": "COMMON"}, "2725": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/AT_125.png", "frequency": 0.7, "name": "Icehowl", "dbfId": 2725, "rarity": "LEGENDARY"}, "42663": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_220.png", "frequency": 0.8, "name": "Deadscale Knight", "dbfId": 42663, "rarity": "COMMON"}, "45340": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_851.png", "frequency": 0.8, "name": "Prince Keleseth", "dbfId": 45340, "rarity": "LEGENDARY"}, "45341": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_852.png", "frequency": 0.8, "name": "Prince Taldaram", "dbfId": 45341, "rarity": "LEGENDARY"}, "42782": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_099.png", "frequency": 0.8, "name": "Ticking Abomination", "dbfId": 42782, "rarity": "RARE"}, "41155": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/UNG_022.png", "frequency": 1.0, "name": "Mirage Caller", "dbfId": 41155, "rarity": "RARE"}, "41173": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/UNG_032.png", "frequency": 1.0, "name": "Crystalline Oracle", "dbfId": 41173, "rarity": "RARE"}, "42714": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_067.png", "frequency": 0.8, "name": "Vryghoul", "dbfId": 42714, "rarity": "COMMON"}, "220": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/EX1_334.png", "frequency": 1.0, "name": "Shadow Madness", "dbfId": 220, "rarity": "RARE"}, "749": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/EX1_012.png", "frequency": 0.7, "name": "Bloodmage Thalnos", "dbfId": 749, "rarity": "LEGENDARY"}, "759": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/EX1_032.png", "frequency": 0.7, "name": "Sunwalker", "dbfId": 759, "rarity": "RARE"}, "39374": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/KAR_204.png", "frequency": 1.0, "name": "Onyx Bishop", "dbfId": 39374, "rarity": "RARE"}, "251": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/EX1_096.png", "frequency": 0.7, "name": "Loot Hoarder", "dbfId": 251, "rarity": "COMMON"}, "45308": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_849.png", "frequency": 1.15, "name": "Embrace Darkness", "dbfId": 45308, "rarity": "EPIC"}, "45309": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_901.png", "frequency": 0.8, "name": "Drakkari Enchanter", "dbfId": 45309, "rarity": "EPIC"}, "1793": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/FP1_012.png", "frequency": 0.7, "name": "Sludge Belcher", "dbfId": 1793, "rarity": "RARE"}, "45314": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_902.png", "frequency": 0.8, "name": "Mindbreaker", "dbfId": 45314, "rarity": "RARE"}, "1799": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/FP1_016.png", "frequency": 0.7, "name": "Wailing Soul", "dbfId": 1799, "rarity": "RARE"}, "1807": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/FP1_023.png", "frequency": 1.0, "name": "Dark Cultist", "dbfId": 1807, "rarity": "COMMON"}, "45328": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_904.png", "frequency": 0.8, "name": "Wicked Skeleton", "dbfId": 45328, "rarity": "COMMON"}, "45329": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_905.png", "frequency": 0.8, "name": "Bloodworm", "dbfId": 45329, "rarity": "COMMON"}, "42773": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_092.png", "frequency": 0.8, "name": "Acherus Veteran", "dbfId": 42773, "rarity": "COMMON"}, "42775": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_093.png", "frequency": 0.8, "name": "Tuskarr Fisherman", "dbfId": 42775, "rarity": "COMMON"}, "42777": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_094.png", "frequency": 0.8, "name": "Fallen Sun Cleric", "dbfId": 42777, "rarity": "COMMON"}, "42779": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_096.png", "frequency": 0.8, "name": "Furnacefire Colossus", "dbfId": 42779, "rarity": "EPIC"}, "42780": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_097.png", "frequency": 0.8, "name": "Grave Shambler", "dbfId": 42780, "rarity": "COMMON"}, "42781": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_098.png", "frequency": 0.8, "name": "Tomb Lurker", "dbfId": 42781, "rarity": "EPIC"}, "45342": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_853.png", "frequency": 0.8, "name": "Prince Valanar", "dbfId": 45342, "rarity": "LEGENDARY"}, "42783": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_700.png", "frequency": 0.8, "name": "Happy Ghoul", "dbfId": 42783, "rarity": "RARE"}, "42784": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_701.png", "frequency": 0.8, "name": "Skulking Geist", "dbfId": 42784, "rarity": "EPIC"}, "42785": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_702.png", "frequency": 0.8, "name": "Shallow Gravedigger", "dbfId": 42785, "rarity": "RARE"}, "41253": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/UNG_079.png", "frequency": 0.7, "name": "Frozen Crusher", "dbfId": 41253, "rarity": "RARE"}, "42790": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_705.png", "frequency": 0.8, "name": "Bonemare", "dbfId": 42790, "rarity": "COMMON"}, "42791": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_706.png", "frequency": 0.8, "name": "Nerubian Unraveler", "dbfId": 42791, "rarity": "EPIC"}, "41259": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/UNG_083.png", "frequency": 0.7, "name": "Devilsaur Egg", "dbfId": 41259, "rarity": "RARE"}, "42804": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_235.png", "frequency": 1.15, "name": "Shadow Essence", "dbfId": 42804, "rarity": "RARE"}, "45366": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_854.png", "frequency": 0.8, "name": "Arfus", "dbfId": 45366, "rarity": "LEGENDARY"}, "2878": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/LOE_006.png", "frequency": 1.0, "name": "Museum Curator", "dbfId": 2878, "rarity": "COMMON"}, "45377": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_855.png", "frequency": 0.8, "name": "Hyldnir Frostrider", "dbfId": 45377, "rarity": "COMMON"}, "45378": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_856.png", "frequency": 0.8, "name": "Spellweaver", "dbfId": 45378, "rarity": "COMMON"}, "397": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/tt_004.png", "frequency": 0.7, "name": "Flesheating Ghoul", "dbfId": 397, "rarity": "COMMON"}, "42327": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_018.png", "frequency": 0.8, "name": "Phantom Freebooter", "dbfId": 42327, "rarity": "RARE"}, "42328": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_019.png", "frequency": 0.8, "name": "Skelemancer", "dbfId": 42328, "rarity": "COMMON"}, "42338": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_023.png", "frequency": 0.8, "name": "Snowflipper Penguin", "dbfId": 42338, "rarity": "COMMON"}, "2918": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/LOE_046.png", "frequency": 0.7, "name": "Huge Toad", "dbfId": 2918, "rarity": "COMMON"}, "363": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/EX1_562.png", "frequency": 0.7, "name": "Onyxia", "dbfId": 363, "rarity": "LEGENDARY"}, "1915": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/FP1_031.png", "frequency": 0.7, "name": "Baron Rivendare", "dbfId": 1915, "rarity": "LEGENDARY"}, "38784": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/OG_249.png", "frequency": 0.7, "name": "Infested Tauren", "dbfId": 38784, "rarity": "COMMON"}, "42818": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_314.png", "frequency": 0.8, "name": "The Lich King", "dbfId": 42818, "rarity": "LEGENDARY"}, "43408": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_830.png", "frequency": 1.15, "name": "Shadowreaper Anduin", "dbfId": 43408, "rarity": "LEGENDARY"}, "42394": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_467.png", "frequency": 0.8, "name": "Deathspeaker", "dbfId": 42394, "rarity": "COMMON"}, "42395": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_466.png", "frequency": 0.8, "name": "Saronite Chain Gang", "dbfId": 42395, "rarity": "RARE"}, "42909": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_257.png", "frequency": 0.8, "name": "Corpse Raiser", "dbfId": 42909, "rarity": "RARE"}, "42398": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_468.png", "frequency": 0.8, "name": "Wretched Tiller", "dbfId": 42398, "rarity": "COMMON"}, "2032": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/GVG_064.png", "frequency": 0.7, "name": "Puddlestomper", "dbfId": 2032, "rarity": "COMMON"}, "38833": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/OG_272.png", "frequency": 0.7, "name": "Twilight Summoner", "dbfId": 38833, "rarity": "EPIC"}, "436": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/EX1_563.png", "frequency": 0.7, "name": "Malygos", "dbfId": 436, "rarity": "LEGENDARY"}, "42422": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_025.png", "frequency": 0.8, "name": "Rattling Rascal", "dbfId": 42422, "rarity": "EPIC"}, "2490": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/AT_087.png", "frequency": 0.7, "name": "Argent Horserider", "dbfId": 2490, "rarity": "COMMON"}, "42438": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_026.png", "frequency": 0.8, "name": "Grim Necromancer", "dbfId": 42438, "rarity": "COMMON"}, "42439": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_027.png", "frequency": 0.8, "name": "Bone Drake", "dbfId": 42439, "rarity": "RARE"}, "42440": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_028.png", "frequency": 0.8, "name": "Sunborne Val'kyr", "dbfId": 42440, "rarity": "COMMON"}, "42442": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_029.png", "frequency": 0.8, "name": "Cobalt Scalebane", "dbfId": 42442, "rarity": "COMMON"}, "1783": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/FP1_004.png", "frequency": 0.7, "name": "Mad Scientist", "dbfId": 1783, "rarity": "COMMON"}, "42445": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_031.png", "frequency": 0.8, "name": "Night Howler", "dbfId": 42445, "rarity": "COMMON"}, "42446": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_032.png", "frequency": 0.8, "name": "Venomancer", "dbfId": 42446, "rarity": "COMMON"}, "45307": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_900.png", "frequency": 0.8, "name": "Necrotic Geist", "dbfId": 45307, "rarity": "COMMON"}, "42992": {"url": "https://cdn.rawgit.com/schmich/hearthstone-card-images/7af5/rel/ICC_802.png", "frequency": 1.15, "name": "Spirit Lash", "dbfId": 42992, "rarity": "COMMON"}};
export default priestCards