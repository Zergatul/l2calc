window.l2 = window.l2 || {};
window.l2.calc = window.l2.calc || {};

l2.calc.forEachBuff = function (buffs, stat, callback) {
	for (var i = 0; i < buffs.length; i++) {
		var skillId = buffs[i].id;
		var skillLvl = buffs[i].lvl;
		var skill = l2.data.tools.getSkill(skillId);
		if (skill.effects == null)
			continue;
		for (var j = 0; j < skill.effects.length; j++)
			if (skill.effects[j].stat == stat) {
				var val = (typeof skill.effects[j].val == 'number' ? skill.effects[j].val : skill.effects[j].val[skillLvl - 1]);
				callback(skill.effects[j].op, val, skill.effects[j].using);
			}
	}
};

l2.calc.checkUsing = function (char, using) {
	if (!using)
		return true;
	switch (using) {
		case 'Pole': return char.weapon.weaponType == 'pole';
		case 'Sword': return char.weapon.weaponType == 'sword';
		case 'Big Sword': return char.weapon.weaponType == 'bigsword';
		case 'Blunt': return char.weapon.weaponType == 'blunt';
		case 'Big Blunt': return char.weapon.weaponType == 'bigblunt';
		case 'Dual Fist': return char.weapon.weaponType == 'dualfist';
		default: throw 'Using [' + using + '] not implemented';
	}
};

l2.calc.checkUsings = function (char, usings) {
	if (!usings)
		return true;
	var parts = usings.split(',');
	var ok = false;
	for (var i = 0; i < parts.length; i++)
		ok = ok || l2.calc.checkUsing(char, parts[i]);
	return ok;
};

l2.calc.HP = function (char) {
	var $class = l2.data.tools.getClass(char.classId);
	if ($class.prof == 3)
		$class = l2.data.tools.getClass($class.parent);
	if ($class.prof == 2 && char.lvl < 40)
		$class = l2.data.tools.getClass($class.parent);
	if ($class.prof == 1 && char.lvl < 20)
		$class = l2.data.tools.getClass($class.parent);
	var coefs = l2.data.baseHPCoef[$class.id];
	var baseHP = coefs.a + coefs.b * char.lvl + coefs.c * char.lvl * char.lvl;
	var addHP = 0;
	l2.calc.forEachBuff(char.passives, 'maxHp', function (op, val) {
		if (op == 'add')
			addHP += val;
		else
			throw 'not implemented';
	})
	var conBonus = l2.data.statBonus['con'][char.stats.con];
	return Math.floor(baseHP * conBonus + addHP);
};

l2.calc.pAtk = function (char) {
	if (char.weapon == null)
		return 0;	
	var addPAtk = 0;
	var multPAtk = 1;
	l2.calc.forEachBuff(char.passives.concat(char.buffs), 'pAtk', function (op, val, usings) {
		if (!l2.calc.checkUsings(char, usings))
			return;
		if (op == 'add') { addPAtk += val; return; }
		if (op == 'mul') { multPAtk *= val; return; }
		throw 'not implemented';
	});
	var strBonus = l2.data.statBonus['str'][char.stats.str];
	return Math.floor(char.weapon.pAtk * char.lm * strBonus * multPAtk + addPAtk);
};

l2.calc.pCritical = function (char) {
	if (char.weapon == null)
		return 0;
	var dexBonus = l2.data.statBonus['dex'][char.stats.dex];
	var baseCritial = l2.data.tools.getBaseCritital(char.weapon.weaponType) * dexBonus;
	var addCritial = 0;
	l2.calc.forEachBuff(char.passives.concat(char.buffs), 'rCrit', function (op, val, usings) {
		if (!l2.calc.checkUsings(char, usings))
			return;
		if (op == 'basemul') { addCritial += baseCritial * val; return; }
		throw 'not implemented';
	});
	return Math.floor(baseCritial + addCritial);
};

l2.calc.pCritMultiplier = function (char) {
	var mult = 2;
	l2.calc.forEachBuff(char.passives.concat(char.buffs), 'cAtk', function (op, val, usings) {
		if (!l2.calc.checkUsings(char, usings))
			return;
		if (op == 'mul') { mult *= val; return; }
		if (op == 'add') return;
		throw 'not implemented';
	});
	return mult;
};

l2.calc.atkSpeed = function (char) {
	if (char.weapon == null)
		return 0;
	var baseWeaponAtkSpeed = l2.data.tools.getBaseAtkSpeed(char.weapon.weaponType);
	var dexBonus = l2.data.statBonus['dex'][char.stats.dex];
	var multAtkSpeed = 1;
	l2.calc.forEachBuff(char.passives.concat(char.buffs), 'pAtkSpd', function (op, val, usings) {
		if (!l2.calc.checkUsings(char, usings))
			return;
		if (op == 'mul') { multAtkSpeed *= val; return; }
		throw 'not implemented';
	});
	return Math.floor(dexBonus * baseWeaponAtkSpeed * multAtkSpeed);
};

l2.calc.pDPS = function (char) {
	return char.pAtk * ((1 - char.pCritical / 1000) + char.pCritMultiplier * char.pCritical / 1000) * char.atkSpeed / 100;
}