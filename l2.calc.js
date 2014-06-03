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
				callback(skill.effects[j].op, val, skill.effects[j].using, skill.effects[j].hp);
			}
	}
};

l2.calc.checkUsing = function (char, using) {
	if (!using)
		return true;
	if (!char.weapon)
		return false;
	switch (using) {
		case 'Pole': return char.weapon.weaponType == 'pole';
		case 'Sword': return char.weapon.weaponType == 'sword';
		case 'Big Sword': return char.weapon.weaponType == 'bigsword';
		case 'Blunt': return char.weapon.weaponType == 'blunt';
		case 'Big Blunt': return char.weapon.weaponType == 'bigblunt';
		case 'Dual Fist': return char.weapon.weaponType == 'dualfist';
		case 'Bow': return char.weapon.weaponType == 'bow';
		case 'Dagger': return char.weapon.weaponType == 'dagger';
		case 'Dual Dagger': return char.weapon.weaponType == 'dualdagger';
		case 'Rapier': return char.weapon.weaponType == 'rapier';
		case 'Ancient': return char.weapon.weaponType == 'ancientsword';
		case 'Dual Sword': return char.weapon.weaponType == 'dual';
		case 'Light': return char.armorType == 'light';
		case 'Heavy': return char.armorType == 'heavy';
		case 'Magic': return char.armorType == 'magic';
		case 'Sigil': return false;
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

l2.calc.checkHP = function (char, hp) {
	if (!hp)
		return true;
	return char.hpPerc <= hp;
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
	var multHP = 1;
	l2.calc.forEachBuff(char.passives, 'maxHp', function (op, val, usings, hp) {
		if (!l2.calc.checkUsings(char, usings) || !l2.calc.checkHP(char, hp))
			return;
		if (op == 'add') { addHP += val; return; }
		if (op == 'mul') { multHP *= val; return; }
		throw 'not implemented';
	})
	var conBonus = l2.data.statBonus['con'][char.stats.con];
	return Math.floor(baseHP * conBonus * multHP + addHP);
};

l2.calc.CP = function (char) {
	var $class = l2.data.tools.getClass(char.classId);
	if ($class.prof == 3)
		$class = l2.data.tools.getClass($class.parent);
	if ($class.prof == 2 && char.lvl < 40)
		$class = l2.data.tools.getClass($class.parent);
	if ($class.prof == 1 && char.lvl < 20)
		$class = l2.data.tools.getClass($class.parent);
	var coefs = l2.data.baseHPCoef[$class.id];
	var baseHP = coefs.a + coefs.b * char.lvl + coefs.c * char.lvl * char.lvl;
	var addCP = 0;
	var multCP = 1;
	l2.calc.forEachBuff(char.passives, 'maxCp', function (op, val, usings, hp) {
		if (!l2.calc.checkUsings(char, usings) || !l2.calc.checkHP(char, hp))
			return;
		if (op == 'add') { addCP += val; return; }
		if (op == 'mul') { multCP *= val; return; }
		throw 'not implemented';
	});
	var conBonus = l2.data.statBonus['con'][char.stats.con];
	return Math.floor(baseHP * conBonus * coefs.cpMod * multCP + addCP);
};

l2.calc.pDef = function (char) {
	var armorPdef = 0;
	if (char.helmet)
		armorPdef += char.helmet.pDef;
	else
		armorPdef += 12;
	if (char.bodyUpper)
		armorPdef += char.bodyUpper.pDef;
	else
		armorPdef += (l2.data.tools.isMystic(char.$class.id) ? 15 : 31);
	if (char.bodyLower)
		armorPdef += char.bodyLower.pDef;
	else
		armorPdef += (l2.data.tools.isMystic(char.$class.id) ? 8 : 18);
	if (char.gloves)
		armorPdef += char.gloves.pDef;
	else
		armorPdef += 8;
	if (char.boots)
		armorPdef += char.boots.pDef;
	else
		armorPdef += 7;
	var addPdef = 0;
	var multPdef = 1;
	l2.calc.forEachBuff(char.passives.concat(char.buffs), 'pDef', function (op, val, usings, hp) {
		if (!l2.calc.checkUsings(char, usings) || !l2.calc.checkHP(char, hp))
			return;
		if (op == 'add') { addPdef += val; return; }
		if (op == 'mul') { multPdef *= val; return; }
		throw 'not implemented';
	});
	return Math.floor((4 + armorPdef) * char.lm * multPdef + addPdef);
};

l2.calc.pAtk = function (char) {
	if (char.weapon == null)
		return 0;	
	var addPAtk = 0;
	var multPAtk = 1;
	l2.calc.forEachBuff(char.passives.concat(char.buffs), 'pAtk', function (op, val, usings, hp) {
		if (!l2.calc.checkUsings(char, usings) || !l2.calc.checkHP(char, hp))
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
	l2.calc.forEachBuff(char.passives.concat(char.buffs), 'rCrit', function (op, val, usings, hp) {
		if (!l2.calc.checkUsings(char, usings) || !l2.calc.checkHP(char, hp))
			return;
		if (op == 'basemul') { addCritial += baseCritial * val; return; }
		if (op == 'add') { addCritial += val; return; }
		throw 'not implemented';
	});
	return Math.min(Math.floor(baseCritial + addCritial), 500);
};

l2.calc.pCritMultiplier = function (char) {
	var mult = 2;
	l2.calc.forEachBuff(char.passives.concat(char.buffs), 'cAtk', function (op, val, usings, hp) {
		if (!l2.calc.checkUsings(char, usings) || !l2.calc.checkHP(char, hp))
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
	l2.calc.forEachBuff(char.passives.concat(char.buffs), 'pAtkSpd', function (op, val, usings, hp) {
		if (!l2.calc.checkUsings(char, usings) || !l2.calc.checkHP(char, hp))
			return;
		if (op == 'mul') { multAtkSpeed *= val; return; }
		throw 'not implemented';
	});
	return Math.min(Math.floor(dexBonus * baseWeaponAtkSpeed * multAtkSpeed), 1500);
};

l2.calc.accuracy = function (char) {
	var addAcc = 0;
	if (char.weapon) {
		if (['dagger', 'bow', 'pole', 'dualdagger'].indexOf(char.weapon.weaponType) >= 0)
			addAcc -= 3.75;
		if (['blunt', 'bigblunt', 'dualfist'].indexOf(char.weapon.weaponType) >= 0)
			addAcc += 4.75;
	}
	l2.calc.forEachBuff(char.passives.concat(char.buffs), 'accCombat', function (op, val, usings, hp) {
		if (!l2.calc.checkUsings(char, usings) || !l2.calc.checkHP(char, hp))
			return;
		if (op == 'add') { addAcc += val; return; }
		throw 'not implemented';
	});
	return Math.floor(Math.sqrt(char.stats.dex) * 6 + char.lvl + addAcc) + l2.data.accuracyFix[char.lvl];
};

l2.calc.pDPS = function (char) {
	return char.pAtk * ((1 - char.pCritical / 1000) + char.pCritMultiplier * char.pCritical / 1000) * char.atkSpeed / 100;
};

l2.calc.mAtk = function (char) {
	if (char.weapon == null)
		return 0;	
	var addMAtk = 0;
	var multMAtk = 1;
	l2.calc.forEachBuff(char.passives.concat(char.buffs), 'mAtk', function (op, val, usings) {
		if (!l2.calc.checkUsings(char, usings))
			return;
		if (op == 'add') { addMAtk += val; return; }
		if (op == 'mul') { multMAtk *= val; return; }
		throw 'not implemented';
	});
	var intBonus = l2.data.statBonus['int'][char.stats.int];
	return Math.floor(char.weapon.mAtk * char.lm * char.lm * intBonus * intBonus * multMAtk + addMAtk);
};

l2.calc.castSpeed = function (char) {
	var addCSpeed = 0;
	var multCSpeed = 1;
	l2.calc.forEachBuff(char.passives.concat(char.buffs), 'mAtkSpd', function (op, val, usings) {
		if (!l2.calc.checkUsings(char, usings))
			return;
		if (op == 'add') { addCSpeed += val; return; }
		if (op == 'mul') { multCSpeed *= val; return; }
		throw 'not implemented';
	});
	var witBonus = l2.data.statBonus['wit'][char.stats.wit];
	return Math.floor(333 * witBonus * multCSpeed + addCSpeed);
};