window.l2 = window.l2 || {};
window.l2.data = window.l2.data || {};

l2.data.races = [
	{ id: 0, name: 'Human' },
	{ id: 1, name: 'Elf' },
	{ id: 2, name: 'Dark Elf' },
	{ id: 3, name: 'Orc' },
	{ id: 4, name: 'Dwarf' },
	{ id: 5, name: 'Kamael' }
];

l2.data.subRace = [
	{ id:  0, race: 0, name: 'Human Fighter', fighter: 1, baseSpeed: 115, stats: {
		int: 21, str: 40, con: 43, men: 25, dex: 30, wit: 11 }},
	{ id:  1, race: 0, name: 'Human Mystic', mystic: 1, baseSpeed: 120, stats: {
		int: 41, str: 22, con: 27, men: 39, dex: 21, wit: 20 }},
	{ id:  2, race: 1, name: 'Elven Fighter', fighter: 1, baseSpeed: 125, stats: {
		int: 23, str: 36, con: 36, men: 26, dex: 35, wit: 14 }},
	{ id:  3, race: 1, name: 'Elven Mystic', mystic: 1, baseSpeed: 122, stats: {
		int: 37, str: 21, con: 25, men: 40, dex: 24, wit: 23 }},
	{ id:  4, race: 2, name: 'Dark Elven Fighter', fighter: 1, baseSpeed: 122, stats: {
		int: 25, str: 41, con: 32, men: 26, dex: 34, wit: 12 }},
	{ id:  5, race: 2, name: 'Dark Elven Mystic', mystic: 1, baseSpeed: 122, stats: {
		int: 44, str: 23, con: 24, men: 37, dex: 23, wit: 19 }},
	{ id:  6, race: 3, name: 'Orc Fighter', fighter: 1, baseSpeed: 117, stats: {
		int: 18, str: 40, con: 47, men: 27, dex: 26, wit: 12 }},
	{ id:  7, race: 3, name: 'Orc Mystic', mystic: 1, baseSpeed: 121, stats: {
		int: 31, str: 27, con: 31, men: 42, dex: 24, wit: 15 }},
	{ id:  8, race: 4, name: 'Dwarven Fighter', fighter: 1, baseSpeed: 115, stats: {
		int: 20, str: 39, con: 45, men: 27, dex: 29, wit: 10 }},
	{ id:  9, race: 5, name: 'Kamael Male Fighter', fighter: 1, baseSpeed: 1, stats: {
		int: 29, str: 41, con: 31, men: 25, dex: 33, wit: 11 }},
	{ id: 10, race: 5, name: 'Kamael Female Fighter', fighter: 1, baseSpeed: 1, stats: {
		int: 28, str: 39, con: 30, men: 27, dex: 35, wit: 11 }}
];

l2.data.classes = [
	{ id:  0, parent: null, subRace: 0, prof: 0, name: 'Human Fighter' },
	{ id:  1, parent:  0, subRace: 0, prof: 1, name: 'Warrior', forbidMen: 1 },
	{ id:  2, parent:  1, subRace: 0, prof: 2, name: 'Gladiator', forbidMen: 1 },
	{ id:  3, parent:  1, subRace: 0, prof: 2, name: 'Warlord', forbidMen: 1 },
	{ id:  4, parent:  0, subRace: 0, prof: 1, name: 'Human Knight', forbidMen: 1 },
	{ id:  5, parent:  4, subRace: 0, prof: 2, name: 'Paladin', forbidMen: 1 },
	{ id:  6, parent:  4, subRace: 0, prof: 2, name: 'Dark Avenger', forbidMen: 1 },
	{ id:  7, parent:  0, subRace: 0, prof: 1, name: 'Rogue', forbidMen: 1 },
	{ id:  8, parent:  7, subRace: 0, prof: 2, name: 'Treasure Hunter', forbidMen: 1 },
	{ id:  9, parent:  7, subRace: 0, prof: 2, name: 'Hawkeye', forbidMen: 1 },
	{ id: 10, parent: null, subRace: 1, prof: 0, name: 'Human Mystic' },
	{ id: 11, parent: 10, subRace: 1, prof: 1, name: 'Human Wizard' },
	{ id: 12, parent: 11, subRace: 1, prof: 2, name: 'Sorceror' },
	{ id: 13, parent:  11, subRace: 1, prof: 2, name: 'Necromancer' },
	{ id: 14, parent:  11, subRace: 1, prof: 2, name: 'Warlock' },
	{ id: 15, parent:  10, subRace: 1, prof: 1, name: 'Cleric', forbidInt: 1 },
	{ id: 16, parent:  15, subRace: 1, prof: 2, name: 'Bishop', forbidInt: 1 },
	{ id: 17, parent:  15, subRace: 1, prof: 2, name: 'Prophet', forbidInt: 1 },

	{ id: 18, parent: null, subRace: 2, prof: 0, name: 'Elven Fighter' },
	{ id: 19, parent:  18, subRace: 2, prof: 1, name: 'Elven Knight', forbidMen: 1 },
	{ id: 20, parent:  19, subRace: 2, prof: 2, name: 'TempleKnight', forbidMen: 1 },
	{ id: 21, parent:  19, subRace: 2, prof: 2, name: 'SwordSinger', forbidMen: 1 },
	{ id: 22, parent:  18, subRace: 2, prof: 1, name: 'Elven Scout', forbidMen: 1 },
	{ id: 23, parent:  22, subRace: 2, prof: 2, name: 'Plains Walker', forbidMen: 1 },
	{ id: 24, parent:  22, subRace: 2, prof: 2, name: 'Silver Ranger', forbidMen: 1 },
	{ id: 25, parent:  null, subRace: 3, prof: 0, name: 'Elven Mage' },
	{ id: 26, parent:  25, subRace: 3, prof: 1, name: 'Elven Wizard' },
	{ id: 27, parent:  26, subRace: 3, prof: 2, name: 'SpellSinger' },
	{ id: 28, parent:  26, subRace: 3, prof: 2, name: 'Elemental Summoner' },
	{ id: 29, parent:  25, subRace: 3, prof: 1, name: 'Elven Oracle', forbidInt: 1 },
	{ id: 30, parent:  29, subRace: 3, prof: 2, name: 'Elven Elder', forbidInt: 1 },

	{ id: 31, parent:  null, subRace: 4, prof: 0, name: 'Dark Elven Fighter' },
	{ id: 32, parent:  31, subRace: 4, prof: 1, name: 'Palus Knight', forbidMen: 1 },
	{ id: 33, parent:  32, subRace: 4, prof: 2, name: 'Shillien Knight', forbidMen: 1 },
	{ id: 34, parent:  32, subRace: 4, prof: 2, name: 'BladeDancer', forbidMen: 1 },
	{ id: 35, parent:  31, subRace: 4, prof: 1, name: 'Assasin', forbidMen: 1 },
	{ id: 36, parent:  35, subRace: 4, prof: 2, name: 'Abyss Walker', forbidMen: 1 },
	{ id: 37, parent:  35, subRace: 4, prof: 2, name: 'Phantom Ranger', forbidMen: 1 },
	{ id: 38, parent: null, subRace: 5, prof: 0, name: 'Dark Elven Mage' },
	{ id: 39, parent:  38, subRace: 5, prof: 1, name: 'Dark Elven Wizard' },
	{ id: 40, parent:  39, subRace: 5, prof: 2, name: 'Spellhowler' },
	{ id: 41, parent:  39, subRace: 5, prof: 2, name: 'Phantom Summoner' },
	{ id: 42, parent:  38, subRace: 5, prof: 1, name: 'Shillien Oracle', forbidInt: 1 },
	{ id: 43, parent:  42, subRace: 5, prof: 2, name: 'Shillien Elder', forbidInt: 1 },

	{ id: 44, parent:  null, subRace: 6, prof: 0, name: 'Orc Fighter' },
	{ id: 45, parent:  44, subRace: 6, prof: 1, name: 'Orc Raider', forbidMen: 1 },
	{ id: 46, parent:  45, subRace: 6, prof: 2, name: 'Destroyer', forbidMen: 1 },
	{ id: 47, parent:  44, subRace: 6, prof: 1, name: 'Monk', forbidMen: 1 },
	{ id: 48, parent:  47, subRace: 6, prof: 2, name: 'Tyrant', forbidMen: 1 },
	{ id: 49, parent:  null, subRace: 7, prof: 0, name: 'Orc Mage' },
	{ id: 50, parent:  49, subRace: 7, prof: 1, name: 'Orc Shaman', forbidInt: 1 },
	{ id: 51, parent:  50, subRace: 7, prof: 2, name: 'Overlord', forbidInt: 1 },
	{ id: 52, parent:  50, subRace: 7, prof: 2, name: 'Warcryer', forbidInt: 1 },

	{ id: 53, parent:  null, subRace: 8, prof: 0, name: 'Dwarven Fighter' },
	{ id: 54, parent:  53, subRace: 8, prof: 1, name: 'Scavenger', forbidMen: 1 },
	{ id: 55, parent:  54, subRace: 8, prof: 2, name: 'Bounty Hunter', forbidMen: 1 },
	{ id: 56, parent:  53, subRace: 8, prof: 1, name: 'Artisan', forbidMen: 1 },
	{ id: 57, parent:  56, subRace: 8, prof: 2, name: 'Warsmith', forbidMen: 1 },

	{ id: 123, parent: null, subRace: 9, prof: 0, name: 'Male Soldier' },
	{ id: 125, parent: 123, subRace: 9, prof: 1, name: 'Trooper' },
	{ id: 127, parent: 125, subRace: 9, prof: 2, name: 'Berserker' },
	{ id: 128, parent: 125, subRace: 9, prof: 2, name: 'Male Soul Breaker' },
	{ id: 124, parent: null, subRace: 10, prof: 0, name: 'Female Soldier' },
	{ id: 126, parent: 124, subRace: 10, prof: 1, name: 'Warder' },
	{ id: 129, parent: 126, subRace: 10, prof: 2, name: 'Female Soul Breaker' },
	{ id: 130, parent: 126, subRace: 10, prof: 2, name: 'Arbalester' },
	{ id: 135, parent: 126, subRace: 10, prof: 2, name: 'Inspector' },

	{ id: 88, parent:  2, subRace: 0, prof: 3, name: 'Duelist' },
	{ id: 89, parent:  3, subRace: 0, prof: 3, name: 'Dreadnought' },
	{ id: 90, parent:  5, subRace: 0, prof: 3, name: 'PhoenixKnight' },
	{ id: 91, parent:  6, subRace: 0, prof: 3, name: 'HellKnight' },
	{ id: 92, parent:  9, subRace: 0, prof: 3, name: 'Sagittarius' },
	{ id: 93, parent:  8, subRace: 0, prof: 3, name: 'Adventurer' },
	{ id: 94, parent:  12, subRace: 1, prof: 3, name: 'Archmage' },
	{ id: 95, parent:  13, subRace: 1, prof: 3, name: 'Soultaker' },
	{ id: 96, parent:  14, subRace: 1, prof: 3, name: 'ArcanaLord' },
	{ id: 97, parent:  16, subRace: 1, prof: 3, name: 'Cardinal' },
	{ id: 98, parent:  17, subRace: 1, prof: 3, name: 'Hierophant' },
	{ id: 99, parent:  20, subRace: 2, prof: 3, name: 'EvaTemplar' },
	{ id: 100, parent:  21, subRace: 2, prof: 3, name: 'SwordMuse' },
	{ id: 101, parent:  23, subRace: 2, prof: 3, name: 'WindRider' },
	{ id: 102, parent:  24, subRace: 2, prof: 3, name: 'MoonlightSentinel' },
	{ id: 103, parent:  27, subRace: 3, prof: 3, name: 'MysticMuse' },
	{ id: 104, parent:  28, subRace: 3, prof: 3, name: 'ElementalMaster' },
	{ id: 105, parent:  30, subRace: 3, prof: 3, name: 'EvaSaint' },
	{ id: 106, parent:  33, subRace: 4, prof: 3, name: 'ShillienTemplar' },
	{ id: 107, parent:  34, subRace: 4, prof: 3, name: 'SpectralDancer' },
	{ id: 108, parent:  36, subRace: 4, prof: 3, name: 'GhostHunter' },
	{ id: 109, parent:  37, subRace: 4, prof: 3, name: 'GhostSentinel' },
	{ id: 110, parent:  40, subRace: 5, prof: 3, name: 'StormScreamer' },
	{ id: 111, parent:  41, subRace: 5, prof: 3, name: 'SpectralMaster' },
	{ id: 112, parent:  43, subRace: 5, prof: 3, name: 'ShillienSaint' },
	{ id: 113, parent:  46, subRace: 6, prof: 3, name: 'Titan' },
	{ id: 114, parent:  48, subRace: 6, prof: 3, name: 'GrandKhauatari' },
	{ id: 115, parent:  51, subRace: 7, prof: 3, name: 'Dominator' },
	{ id: 116, parent:  52, subRace: 7, prof: 3, name: 'Doomcryer' },
	{ id: 117, parent:  55, subRace: 8, prof: 3, name: 'FortuneSeeker' },
	{ id: 118, parent:  57, subRace: 8, prof: 3, name: 'Maestro' },
	{ id: 131, parent: 127, subRace: 9, prof: 3, name: 'Doombringer' },
	{ id: 132, parent: 128, subRace: 9, prof: 3, name: 'Male Soul Hound' },
	{ id: 133, parent: 129, subRace: 10, prof: 3, name: 'Female Soul Hound' },
	{ id: 134, parent: 130, subRace: 10, prof: 3, name: 'Trickster' },
	{ id: 136, parent: 135, subRace: 10, prof: 3, name: 'Judicator' },
];

l2.data.statBonus = {
	str: [0.29, 0.3, 0.31, 0.32, 0.34, 0.35, 0.36, 0.37, 0.39, 0.4, 0.42, 0.43, 0.45, 0.46, 0.48, 0.5, 0.51, 0.53, 0.55, 0.57, 0.59, 0.61, 0.63, 0.66, 0.68, 0.71, 0.73, 0.76, 0.78, 0.81, 0.84, 0.87, 0.9, 0.94, 0.97, 1.01, 1.04, 1.08, 1.12, 1.16, 1.2, 1.24, 1.29, 1.33, 1.38, 1.43, 1.48, 1.54, 1.59, 1.65, 1.71, 1.77, 1.83, 1.9, 1.97, 2.04, 2.11, 2.19, 2.27, 2.35, 2.43, 2.52, 2.61, 2.71, 2.8, 2.91, 3.01, 3.12, 3.23, 3.35, 3.47, 3.59, 3.72, 3.86, 3.99, 4.14, 4.29, 4.44, 4.6, 4.77, 4.94, 5.12, 5.3, 5.49, 5.69, 5.89, 6.11, 6.33, 6.55, 6.79, 7.03, 7.29, 7.55, 7.82, 8.1, 8.39, 8.7, 9.01, 9.33, 9.67],
	dex: [0.84, 0.85, 0.86, 0.86, 0.87, 0.88, 0.89, 0.9, 0.9, 0.91, 0.92, 0.93, 0.94, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1.0, 1.01, 1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.2, 1.21, 1.22, 1.24, 1.25, 1.26, 1.27, 1.28, 1.29, 1.3, 1.32, 1.33, 1.34, 1.35, 1.36, 1.38, 1.39, 1.4, 1.41, 1.43, 1.44, 1.45, 1.47, 1.48, 1.49, 1.51, 1.52, 1.53, 1.55, 1.56, 1.57, 1.59, 1.6, 1.62, 1.63, 1.65, 1.66, 1.68, 1.69, 1.71, 1.72, 1.74, 1.75, 1.77, 1.78, 1.8, 1.82, 1.83, 1.85, 1.87, 1.88, 1.9, 1.92, 1.93, 1.95, 1.97, 1.99, 2.0, 2.02, 2.04],
	con: [0.44, 0.46, 0.47, 0.48, 0.5, 0.51, 0.53, 0.54, 0.56, 0.58, 0.59, 0.61, 0.63, 0.65, 0.67, 0.69, 0.71, 0.73, 0.75, 0.77, 0.8, 0.82, 0.85, 0.87, 0.9, 0.93, 0.95, 0.98, 1.01, 1.04, 1.07, 1.1, 1.14, 1.17, 1.21, 1.24, 1.28, 1.32, 1.36, 1.4, 1.44, 1.48, 1.53, 1.58, 1.62, 1.67, 1.72, 1.77, 1.83, 1.88, 1.94, 2.0, 2.06, 2.12, 2.18, 2.25, 2.31, 2.38, 2.45, 2.53, 2.6, 2.68, 2.76, 2.84, 2.93, 3.02, 3.11, 3.2, 3.3, 3.4, 3.5, 3.6, 3.71, 3.82, 3.94, 4.06, 4.18, 4.3, 4.43, 4.56, 4.7, 4.84, 4.99, 5.14, 5.29, 5.45, 5.61, 5.78, 5.96, 6.13, 6.32, 6.51, 6.7, 6.9, 7.11, 7.33, 7.54, 7.77, 8.0, 8.24],
	int: [0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.61, 0.62, 0.63, 0.64, 0.65, 0.67, 0.68, 0.69, 0.71, 0.72, 0.74, 0.75, 0.77, 0.78, 0.8, 0.81, 0.83, 0.85, 0.86, 0.88, 0.9, 0.92, 0.94, 0.95, 0.97, 0.99, 1.01, 1.03, 1.05, 1.07, 1.1, 1.12, 1.14, 1.16, 1.19, 1.21, 1.23, 1.26, 1.28, 1.31, 1.34, 1.36, 1.39, 1.42, 1.45, 1.47, 1.5, 1.53, 1.57, 1.6, 1.63, 1.66, 1.69, 1.73, 1.76, 1.8, 1.83, 1.87, 1.91, 1.95, 1.99, 2.02, 2.07, 2.11, 2.15, 2.19, 2.24, 2.28, 2.33, 2.37, 2.42, 2.47, 2.52, 2.57, 2.62, 2.67, 2.73, 2.78, 2.84, 2.89, 2.95, 3.01, 3.07, 3.13, 3.19, 3.26, 3.32, 3.39, 3.46, 3.53, 3.6, 3.67, 3.74, 3.82],
	wit: [0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.51, 0.53, 0.56, 0.58, 0.61, 0.64, 0.68, 0.71, 0.75, 0.78, 0.82, 0.86, 0.91, 0.95, 1.0, 1.05, 1.1, 1.16, 1.22, 1.28, 1.34, 1.41, 1.48, 1.55, 1.63, 1.71, 1.8, 1.89, 1.98, 2.08, 2.18, 2.29, 2.41, 2.53, 2.65, 2.79, 2.93, 3.07, 3.23, 3.39, 3.56, 3.73, 3.92, 4.12, 4.32, 4.54, 4.76, 5.0, 5.25, 5.52, 5.79, 6.08, 6.39, 6.7, 7.04, 7.39, 7.76, 8.15, 8.56, 8.99, 9.43, 9.91, 10.4, 10.92, 11.47, 12.04, 12.64, 13.27, 13.94, 14.64, 15.37, 16.14, 16.94, 17.79, 18.68, 19.61, 20.59, 21.62, 22.7, 23.84, 25.03, 26.28, 27.6, 28.98, 30.43, 31.95, 33.55, 35.22, 36.98, 38.83, 40.77, 42.81, 44.95, 47.2],
	men: [1.0, 1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.19, 1.2, 1.21, 1.22, 1.23, 1.25, 1.26, 1.27, 1.28, 1.3, 1.31, 1.32, 1.34, 1.35, 1.36, 1.38, 1.39, 1.4, 1.42, 1.43, 1.45, 1.46, 1.48, 1.49, 1.5, 1.52, 1.53, 1.55, 1.57, 1.58, 1.6, 1.61, 1.63, 1.65, 1.66, 1.68, 1.7, 1.71, 1.73, 1.75, 1.76, 1.78, 1.8, 1.82, 1.84, 1.85, 1.87, 1.89, 1.91, 1.93, 1.95, 1.97, 1.99, 2.01, 2.03, 2.05, 2.07, 2.09, 2.11, 2.13, 2.15, 2.17, 2.2, 2.22, 2.24, 2.26, 2.29, 2.31, 2.33, 2.35, 2.38, 2.4, 2.43, 2.45, 2.47, 2.5, 2.52, 2.55, 2.58, 2.6, 2.63, 2.65, 2.68]
};

l2.data.grades = [
	{ 'name': 'No', 'code': 'none' },
	{ 'name': 'D', 'code': 'd' },
	{ 'name': 'C', 'code': 'c' },
	{ 'name': 'B', 'code': 'b' },
	{ 'name': 'A', 'code': 'a' },
	{ 'name': 'S', 'code': 's' },
	{ 'name': 'S80', 'code': 's80' },
	{ 'name': 'S84', 'code': 's84' }
];

l2.data.weaponTypes = [
	{ name: '2H Sword', code: 'bigsword' },
	{ name: 'Sword', code: 'sword' },
	{ name: 'Etc', code: 'etc' },
	{ name: 'Dual Fist', code: 'dualfist' },
	{ name: 'None', code: 'none' },
	{ name: 'Blunt', code: 'blunt' },
	{ name: 'Rod', code: 'rod' },
	{ name: 'Dual Dagger', code: 'dualdagger' },
	{ name: 'Dual', code: 'dual' },
	{ name: 'Pole', code: 'pole' },
	{ name: 'Rapier', code: 'rapier' },
	{ name: 'Dagger', code: 'dagger' },
	{ name: 'Fist', code: 'fist' },
	{ name: '2H Blunt', code: 'bigblunt' },
	{ name: 'Bow', code: 'bow' },
	{ name: 'Crossbow', code: 'crossbow' },
	{ name: 'Ancient', code: 'ancient' },
];

l2.data.twoHand = ['bow', 'pole', 'bigsword', 'bigblunt', 'dual', 'dualfist', 'dualdagger', 'crossbow', 'ancient'];

l2.data.weaponBaseData = [
	{ name: 'bigsword', baseCritical: 80, baseAtkSpeed: 325 },
	{ name: 'sword', baseCritical: 80, baseAtkSpeed: 379 },
	{ name: 'pole', baseCritical: 80, baseAtkSpeed: 325 },
	{ name: 'dual', baseCritical: 80, baseAtkSpeed: 325 },
	{ name: 'bigblunt', baseCritical: 40, baseAtkSpeed: 325 },
	{ name: 'blunt', baseCritical: 40, baseAtkSpeed: 379 },
	{ name: 'fist', baseCritical: 40, baseAtkSpeed: 325 },
	{ name: 'dualfist', baseCritical: 40, baseAtkSpeed: 325 },
	{ name: 'dagger', baseCritical: 120, baseAtkSpeed: 433 },
	{ name: 'bow', baseCritical: 120, baseAtkSpeed: 293 },
	{ name: 'crossbow', baseCritical: 100, baseAtkSpeed: 1 },
	{ name: 'etc', baseCritical: 40, baseAtkSpeed: 379 },
];

l2.data.weaponEnchant = {
	'd': { bow: 4, twoHand: 2, oneHand: 2, mAtk: 2 },
	'c': { bow: 6, twoHand: 4, oneHand: 3, mAtk: 3 },
	'b': { bow: 6, twoHand: 4, oneHand: 3, mAtk: 3 },
	'a': { bow: 8, twoHand: 5, oneHand: 4, mAtk: 3 },
	's': { bow: 10, twoHand: 6, oneHand: 5, mAtk: 4 }
};
l2.data.weaponEnchant.s80 = l2.data.weaponEnchant.s;
l2.data.weaponEnchant.s84 = l2.data.weaponEnchant.s;

l2.data.baseHPCoef = [
	{ id:  0, a: 100, b: 100, c: 100, cpMod: 0.9, name: 'Human Fighter' },
	{ id:  1, a: 100, b: 100, c: 100, cpMod: 0.9, name: 'Warrior' },
	{ id:  2, a: -620.4, b: 34.01, c: 0.19, cpMod: 0.9, name: 'Gladiator' },
	{ id:  3, a: -795.6, b: 37.59, c: 0.21, cpMod: 0.8, name: 'Warlord' },
	{ id:  4, a: 100, b: 100, c: 100, cpMod: 0.9, name: 'Human Knight' },
	{ id:  5, a: -604.5, b: 32.22, c: 0.18, cpMod: 0.6, name: 'Paladin' },
	{ id:  6, a: -604.5, b: 32.22, c: 0.18, cpMod: 0.6, name: 'Dark Avenger' },
	{ id:  7, a: 100, b: 100, c: 100, cpMod: 0.9, name: 'Rogue' },
	{ id:  8, a: -477.1, b: 28.64, c: 0.16, cpMod: 0.5, name: 'Treasure Hunter' },
	{ id:  9, a: -564.7, b: 30.43, c: 0.17, cpMod: 0.7, name: 'Hawkeye' },
	{ id: 10, a: 85.7, b: 15.215, c: 0.085, cpMod: 0.5, name: 'Human Mystic' },
	{ id: 11, a: -73.5, b: 22.375, c: 0.125, cpMod: 0.5, name: 'Human Wizard' },
	{ id: 12, a: -511.5, b: 31.325, c: 0.175, cpMod: 0.5, name: 'Sorceror' },
	{ id: 13, a: -511.5, b: 31.325, c: 0.175, cpMod: 0.5, name: 'Necromancer' },
	{ id: 14, a: -642.9, b: 34.01, c: 0.19, cpMod: 0.6, name: 'Warlock' },
	{ id: 15, a: -192.9, b: 27.745, c: 0.155, cpMod: 0.5, name: 'Cleric' },
	{ id: 16, a: -499.5, b: 34.01, c: 0.19, cpMod: 0.7, name: 'Bishop' },
	{ id: 17, a: -630.9, b: 36.695, c: 0.205, cpMod: 0.5, name: 'Prophet' },

	{ id: 18, a: 76.4, b: 12.53, c: 0.07, cpMod: 0.4, name: 'Elven Fighter' },
	{ id: 19, a: -242, b: 26.85, c: 0.15, cpMod: 0.5, name: 'Elven Knight' },
	{ id: 20, a: -680, b: 35.8, c: 0.2, cpMod: 0.6, name: 'TempleKnight' },
	{ id: 21, a: -767.6, b: 37.59, c: 0.21, cpMod: 0.5, name: 'SwordSinger' },
	{ id: 22, a: -202.2, b: 25.06, c: 0.14, cpMod: 0.4, name: 'Elven Scout' },
	{ id: 23, a: -552.6, b: 32.22, c: 0.18, cpMod: 0.5, name: 'Plains Walker' },
	{ id: 24, a: -640.2, b: 34.01, c: 0.19, cpMod: 0.5, name: 'Silver Ranger' },
	{ id: 25, a: 88.7, b: 15.215, c: 0.085, cpMod: 0.5, name: 'Elven Mage' },
	{ id: 26, a: -90.4, b: 23.27, c: 0.13, cpMod: 0.5, name: 'Elven Wizard' },
	{ id: 27, a: -572.2, b: 33.115, c: 0.185, cpMod: 0.5, name: 'SpellSinger' },
	{ id: 28, a: -659.8, b: 34.905, c: 0.195, cpMod: 0.6, name: 'Elemental Summoner' },
	{ id: 29, a: -209.8, b: 28.64, c: 0.16, cpMod: 0.5, name: 'Elven Oracle' },
	{ id: 30, a: -647.8, b: 37.59, c: 0.21, cpMod: 0.5, name: 'Elven Elder' },

	{ id: 31, a: 80.5, b: 13.425, c: 0.075, cpMod: 0.4, name: 'Dark Fighter' },
	{ id: 32, a: -257.8, b: 28.64, c: 0.16, cpMod: 0.5, name: 'Palus Knight' },
	{ id: 33, a: -695.8, b: 37.59, c: 0.21, cpMod: 0.6, name: 'Shillien Knight' },
	{ id: 34, a: -827.2, b: 40.275, c: 0.225, cpMod: 0.5, name: 'BladeDancer' },
	{ id: 35, a: -218, b: 26.85, c: 0.15, cpMod: 0.4, name: 'Assasin' },
	{ id: 36, a: -568.4, b: 34.01, c: 0.19, cpMod: 0.5, name: 'Abyss Walker' },
	{ id: 37, a: -656, b: 35.8, c: 0.2, cpMod: 0.5, name: 'Phantom Ranger' },
	{ id: 38, a: 90.7, b: 15.215, c: 0.085, cpMod: 0.5, name: 'Dark Elven Mage' },
	{ id: 39, a: -108.3, b: 24.165, c: 0.135, cpMod: 0.5, name: 'Dark Elven Wizard' },
	{ id: 40, a: -546.3, b: 33.115, c: 0.185, cpMod: 0.5, name: 'Spellhowler' },
	{ id: 41, a: -656, b: 35.8, c: 0.2, cpMod: 0.6, name: 'Phantom Summoner' },
	{ id: 42, a: -227.7, b: 29.535, c: 0.165, cpMod: 0.5, name: 'Shillien Oracle' },
	{ id: 43, a: -621.9, b: 37.59, c: 0.21, cpMod: 0.5, name: 'Shillien Elder' },

	{ id: 44, a: 67.4, b: 12.53, c: 0.07, cpMod: 0.5, name: 'Orc Fighter' },
	{ id: 45, a: -290.8, b: 28.64, c: 0.16, cpMod: 0.7, name: 'Orc Raider' },
	{ id: 46, a: -816.4, b: 39.38, c: 0.22, cpMod: 0.7, name: 'Destroyer' },
	{ id: 47, a: -251, b: 26.85, c: 0.15, cpMod: 0.5, name: 'Monk' },
	{ id: 48, a: -776.6, b: 37.59, c: 0.21, cpMod: 0.5, name: 'Tyrant' },
	{ id: 49, a: 79.7, b: 15.215, c: 0.085, cpMod: 0.5, name: 'Orc Mage' },
	{ id: 50, a: -218.8, b: 28.64, c: 0.16, cpMod: 0.5, name: 'Orc Shaman' },
	{ id: 51, a: -613, b: 36.695, c: 0.205, cpMod: 0.8, name: 'Overlord' },
	{ id: 52, a: -613, b: 36.695, c: 0.205, cpMod: 0.5, name: 'Warcryer' },

	{ id: 53, a: 67.4, b: 12.53, c: 0.07, cpMod: 0.8, name: 'Dwarven Fighter' },
	{ id: 54, a: -290.8, b: 28.64, c: 0.16, cpMod: 0.7, name: 'Scavenger' },
	{ id: 55, a: -816.4, b: 39.38, c: 0.22, cpMod: 0.7, name: 'Bounty Hunter' },
	{ id: 56, a: -251, b: 26.85, c: 0.15, cpMod: 0.8, name: 'Artisan' },
	{ id: 57, a: -776.6, b: 37.59, c: 0.21, cpMod: 0.8, name: 'Warsmith' },

	{ id: 123, a: 1, b: 1, c: 1, cpMod: 0.5, name: 'Male Soldier' },
	{ id: 125, a: 1, b: 1, c: 1, cpMod: 0.5, name: 'Trooper' },
	{ id: 127, a: 1, b: 1, c: 1, cpMod: 0.5, name: 'Berserker' },
	{ id: 128, a: 1, b: 1, c: 1, cpMod: 0.5, name: 'Male Soul Breaker' },
	{ id: 124, a: 1, b: 1, c: 1, cpMod: 0.5, name: 'Female Soldier' },
	{ id: 126, a: 1, b: 1, c: 1, cpMod: 0.5, name: 'Warder' },
	{ id: 129, a: 1, b: 1, c: 1, cpMod: 0.5, name: 'Female Soul Breaker' },
	{ id: 130, a: 1, b: 1, c: 1, cpMod: 0.5, name: 'Arbalester' },
	{ id: 135, a: 1, b: 1, c: 1, cpMod: 0.5, name: 'Inspector' },
];

l2.data.accuracyFix = Array.apply(null, new Array(70)).map(Number.prototype.valueOf, 0).concat(
	[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 18, 20, 22, 24]);

l2.data.oeArmorHPBonus = {
	'd': [9, 26, 52, 86, 130, 181, 242, 311, 389],
	'c': [12, 36, 71, 118, 178, 249, 332, 426, 533],
	'b': [14, 42, 84, 139, 209, 293, 390, 502, 627],
	'a': [16, 47, 94, 157, 235, 329, 439, 564, 705],
	's': [17, 52, 104, 173, 259, 363, 484, 623, 778]
};

l2.data.set6Bonus = {
	'd': { 'heavy': 3611, 'light': 3612, 'magic': 3613 },
	'c': { 'heavy': 3614, 'light': 3615, 'magic': 3616 },
	'b': { 'heavy': 3617, 'light': 3618, 'magic': 3619 },
	'a': { 'heavy': 3620, 'light': 3621, 'magic': 3622 },
	's': { 'heavy': 3623, 'light': 3624, 'magic': 3625 }
};

l2.data.songs = [269, 267, 268, 270, 265, 264, 266, 306, 304, 308, 305, 764, 349, 363, 364, 529, 914];
l2.data.dances = [274, 277, 272, 273, 276, 271, 275, 309, 311, 307, 310, 765, 366, 365, 530, 915];

l2.data.commonBuffs = [
	{ group: 'P. Atk/Def', ids: [
		1068, // Might
		1007, // Chant of Battle
		1040, // Shield
		1009, // Chant Of Shielding
		1010, // Soul Shield
		1388, // Greater Might
		1389, // Greater Shield		
	]},
	{ group: 'Tank Buff', ids: [
		982
	]},
	{ group: 'Accuracy', ids: [
		1240, // Guidance
	]},
	{ group: 'P. Critical', ids: [
		1077, // Focus
		1242, // Death Whisper
		1253, // Chant of Rage
	]},
	{ group: 'M. Atk/Def', ids: [
		1059, // Empower
		1006, // Chant of Fire
		1008, // The Glory of Pa'agrio
	]},
	{ group: 'Atk/Cast Speed', ids: [
		1086, // Haste
		1251, // Chant of Fury
		1085, // Acumen
	]},
	{ group: 'Bers', ids: [
		1062, // Bers Spirit
		1261, // The Rage of Pa'agrio
	]},
	{ group: 'Speed/Agility', ids: [
		1204, // Wind Walk
		1282, // Pa'agrian Haste
		1087, // Agility
		1252, // Chant of Evasion
		1260, // The Tact of Pa'agrio
	]},
	{ group: 'Max HP/MP', ids: [
		1045, // Bless Body
		1048, // Bless Soul
	]},
	{ group: 'Prophecy', ids: [
		1363, // COV
		1355, // Water
		1356, // Fire
		1357, // Wind
		1413, // Magnus
		1414, // Victory of Paagio
	]},
	{ group: 'Cat/Horse', ids: [
		4699, // Bless of Queen
		4700, // Gift of Queen
		4702, // Blessing of Seraphim
		4703, // Gift of Seraphim
	]},
	{ group: 'Crafter Buffs', ids: [
		825, // Sharp Edge
		826, // Spike
		827, // Restring
		828,
		829,
		830
	]},
	{ group: 'Tank 83 buff', ids: [
		785, // Paladin
		789, // SK
	]},
	{ group: '80 lvl field buff', ids: [
		5123, // Maximum Defense - Phoenix Knight
		5125, // Maximum Resist Status - Titan
		5126, // Maximum Recovery - Dreadnought
		5127, // Recover Force - Gladiator
		5128, // Maximize long-range weapon use - Sagittarius
		5129, // Smokescreen - Adventurer
	]},
	{ group: 'Inspector', ids: [
		1476, // Appetite for Destruction
		1477, // Vampiric Impulse
		1478, // Protection Instinct
		1479, // Magic Impulse
		1480, // Soul Harmony
	]},
	{ group: 'Subclass 80', ids: [
		679, // warrior
		685, // knight
		691, // rogue
		697, // wizard
		709, // enchanter
		714, // summoner
	]},
];

l2.data.commonTriggers = [6059, 6060];

l2.data.clanSkills = [
	370, // Clan Body
	371, // Clan Spirituality
	372, // Clan Soul
	373, // Clan Regeneration
	374, // Clan Morale
	375, // Clan Clarity
	376, // Clan Might
	377, // Clan Shield
	378, // Clan Empower
	379, // Clan Magic Resistance
	380, // Clan Guidance
	381, // Clan Agility
	382, // Clan Shield Defense
	383, // Clan Shield Block
	384, // Clan Cyclonic Resistance
	385, // Clan Magmatic Resistance
	386, // Clan Resist Shock
	387, // Clan Resist Hold
	388, // Clan Resist Sleep
	389, // Clan Wind Walk
];

l2.data.territorySkills = [848, 849, 850, 851, 852, 853, 854, 855, 856];

l2.data.subClassSkills = [
	631, // Emergent Ability - Attack
	632, // Emergent Ability - Defense
	633, // Emergent Ability - Empower
	634, // Emergent Ability - Magic Defense
	637, // Master Ability - Attack
	638, // Master Ability - Empower
	639, // Master Ability - Casting
	640, // Master Ability - Focus
	641, // Knight Ability - Boost HP
	642, // Enchanter Ability - Boost Mana
	643, // Summoner Ability - Boost HP/MP
	644, // Rogue Ability - Evasion
	645, // Rogue Ability - Long Shot
	646, // Wizard Ability - Mana Gain
	647, // Enchanter Ability - Mana Recovery
	648, // Healer Ability - Prayer
	650, // Warrior Ability - Resist Trait
	651, // Warrior Ability - Haste
	652, // Knight Ability - Defense
	653, // Rogue Ability - Critical Chance
	654, // Wizard Ability - Mana Steal
	655, // Enchanter Ability - Barrier
	799, // Master Ability - Defense
	800, // Master Ability - Magic Defense
	801, // Warrior Ability - Boost CP
	802, // Wizard Ability - Anti-magic
	803, // Healer Ability - Divine Protection
	804, // Knight Ability - Resist Critical
	1489, // Summoner Ability - Resist Attribute
	1490, // Healer Ability - Heal
	1491, // Summoner Ability - Spirit
];