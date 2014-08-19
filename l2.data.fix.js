if (!window.l2 || !l2.data)
	throw 'Invalid load sequence';

l2.data.tools.getSkill(4699).levels = 3; // Blessing of Queen
l2.data.tools.getSkill(4700).levels = 3; // Gift of Queen
l2.data.tools.getSkill(4702).levels = 3; // Blessing of Seraphim
l2.data.tools.getSkill(4703).levels = 3; // Gift of Seraphim

// Sword/Blunt Weapon Mastery
l2.data.tools.getSkill(205).effects = [
	{ stat: 'pAtk', op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt', val: [4.5, 7.3, 8.9, 10.7, 12.8, 15.1, 17.7, 20.5, 23.7, 25.4, 27.1, 29, 30.9, 32.9, 35, 37.1, 39.4, 41.7, 44.1, 46.6, 49.2, 51.9, 54.6, 57.5, 60.4, 63.3, 66.4, 69.5, 72.7, 76, 79.3, 82.7, 86.1, 89.6, 93.1, 96.6, 100.2, 103.8, 107.5, 111.1, 114.8, 118.4, 122.1, 125.7, 129.3] },
	{ stat: 'pAtk', op: 'add', using: 'Sword,Big Sword', val: [2.7, 5.3, 8.0, 10.7, 13.3, 16, 18.7, 21.3, 24, 26.7, 29.3, 32, 34.7, 37.3, 40, 42.7, 45.3, 48, 50.7, 53.3, 56, 58.7, 61.3, 64, 66.7, 69.3, 72, 74.7, 77.3, 80, 82.7, 85.3, 88, 90.7, 93.3, 96, 98.7, 101.3, 104, 106.7, 109.3, 112, 114.7, 117.3, 120] },
	{ stat: 'pAtk', op: 'add', using: 'Blunt,Big Blunt', val: [3, 5.9, 8.9, 11.8, 14.8, 17.7, 20.7, 23.6, 26.6, 29.6, 32.5, 35.5, 38.4, 41.4, 44.3, 47.3, 50.2, 53.2, 56.2, 59.1, 62.1, 65, 68, 70.9, 73.9, 76.8, 79.8, 82.8, 85.7, 88.7, 91.6, 94.6, 97.5, 100.5, 103.4, 106.4, 109.4, 112.3, 115.3, 118.2, 121.2, 124.1, 127.1, 130, 133] }
];

// Weapon Grade Penalty, patk
l2.data.tools.getSkill(6209).effects.filter(function (e) { return e.stat == 'pAtk'; })[0].finalChange = true;