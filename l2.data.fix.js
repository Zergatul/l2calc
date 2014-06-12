if (!window.l2 || !l2.data)
	throw 'Invalid load sequence';

l2.data.tools.getSkill(4699).levels = 3; // Blessing of Queen
l2.data.tools.getSkill(4700).levels = 3; // Gift of Queen
l2.data.tools.getSkill(4702).levels = 3; // Blessing of Seraphim
l2.data.tools.getSkill(4703).levels = 3; // Gift of Seraphim

// Sword/Blunt Weapon Mastery
l2.data.tools.getSkill(205).effects.push({
	op: 'add',
	stat: 'pAtk',
	using: 'Sword,Big Sword',
	val : Array.apply(null, new Array(22)).map(Number.prototype.valueOf, 0).concat(
		[61.3]).concat(Array.apply(null, new Array(22)).map(Number.prototype.valueOf, 0))
});
l2.data.tools.getSkill(205).effects.push({
	op: 'add',
	stat: 'pAtk',
	using: 'Blunt,Big Blunt',
	val : Array.apply(null, new Array(22)).map(Number.prototype.valueOf, 0).concat(
		[68]).concat(Array.apply(null, new Array(22)).map(Number.prototype.valueOf, 0))
});