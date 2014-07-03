window.l2 = window.l2 || {};
window.l2.calc = window.l2.calc || {};

l2.calc.forEachBuff = function (char, stat, callback) {
	char.passives.concat(char.buffs).forEach(function (s) {
		var skill = l2.data.tools.getSkill(s.id);
		if (skill.effects == null)
			return;
		for (var j = 0; j < skill.effects.length; j++)
			if (skill.effects[j].stat == stat) {
				var val = (typeof skill.effects[j].val == 'number' ? skill.effects[j].val : skill.effects[j].val[s.lvl - 1]);
				if (l2.calc.checkConditions(char, skill.effects[j].using, skill.effects[j].hp, skill.effects[j].atkFrom))
					callback(skill.effects[j].op, val);
			}
	});
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
		case 'Crossbow': return char.weapon.weaponType == 'crossbow';
		case 'Light': return char.armorType == 'light';
		case 'Heavy': return char.armorType == 'heavy';
		case 'Magic': return char.armorType == 'magic';
		case 'not(Magic)': return char.armorType != 'magic';
		case 'Sigil': return false;
		default: throw 'Using [' + using + '] not implemented';
	}
};

l2.calc.checkConditions = function (char, usings, hp, atkFrom) {
	if (usings) {
		var ok = false;
		var parts = usings.split(',');
		for (var i = 0; i < parts.length; i++)
			ok = ok || l2.calc.checkUsing(char, parts[i]);
		if (!ok)
			return false;
	}
	if (hp && char.hpPerc > hp)
		return false;
	if (atkFrom && char.atkFrom != atkFrom)
		return false;
	return true;
};

l2.calc.HP = function (char) {
	var $class = l2.data.tools.getClass(char.classId);
	if ($class.prof == 3)
		$class = l2.data.tools.getClass($class.parent);
	if ($class.prof == 2 && char.lvl < 40)
		$class = l2.data.tools.getClass($class.parent);
	if ($class.prof == 1 && char.lvl < 20)
		$class = l2.data.tools.getClass($class.parent);
	var coefs = l2.data.tools.getBaseHPCoefs($class.id);
	var baseHP = coefs.a + coefs.b * char.lvl + coefs.c * char.lvl * char.lvl;
	var addHP = 0;
	var multHP = 1;
	l2.calc.forEachBuff(char, 'maxHp', function (op, val) {
		if (op == 'add') { addHP += val; return; }
		if (op == 'sub') { addHP -= val; return; }
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
	var coefs = l2.data.tools.getBaseHPCoefs($class.id);
	var baseHP = coefs.a + coefs.b * char.lvl + coefs.c * char.lvl * char.lvl;
	var addCP = 0;
	var multCP = 1;
	l2.calc.forEachBuff(char, 'maxCp', function (op, val) {
		if (op == 'add') { addCP += val; return; }
		if (op == 'mul') { multCP *= val; return; }
		throw 'not implemented';
	});
	var conBonus = l2.data.statBonus['con'][char.stats.con];
	return Math.floor(baseHP * conBonus * coefs.cpMod * multCP + addCP);
};

l2.calc.applyArmorEnchant = function (pDef, grade, enchant) {
	if (!grade)
		return pDef;
	else {
		var delta = 0;
		delta += Math.min(3, enchant) * 1;
		delta += Math.max(0, enchant - 3) * 3;
		return pDef + delta;
	}
};

l2.calc.helmetPDef = function (char) {
	if (char.helmet)
		return l2.calc.applyArmorEnchant(char.helmet.pDef, char.helmet.grade, char.enchants.helmet);
	else
		return 12;
};

l2.calc.bodyUpperPdef = function (char) {
	if (char.bodyUpper)
		return l2.calc.applyArmorEnchant(char.bodyUpper.pDef, char.bodyUpper.grade, char.enchants.bodyUpper);
	else
		return l2.data.tools.isMystic(char.$class.id) ? 15 : 31;
};

l2.calc.bodyLowerPDef = function (char) {
	if (char.bodyUpper == null || char.bodyUpper.bodyPart != 'onepiece') {
		if (char.bodyLower)
			return l2.calc.applyArmorEnchant(char.bodyLower.pDef, char.bodyLower.grade, char.enchants.bodyLower);
		else
			return l2.data.tools.isMystic(char.$class.id) ? 8 : 18;
	} else
		return 0;
};

l2.calc.glovesPDef = function (char) {
	if (char.gloves)
		return l2.calc.applyArmorEnchant(char.gloves.pDef, char.gloves.grade, char.enchants.gloves);
	else
		return 8;
};

l2.calc.bootsPDef = function (char) {
	if (char.boots)
		return l2.calc.applyArmorEnchant(char.boots.pDef, char.boots.grade, char.enchants.boots);
	else
		return 7;
};

l2.calc.pDef = function (char) {
	var armorPdef = 0;
	armorPdef += l2.calc.helmetPDef(char);
	armorPdef += l2.calc.bodyUpperPdef(char);
	armorPdef += l2.calc.bodyLowerPDef(char);
	armorPdef += l2.calc.glovesPDef(char);
	armorPdef += l2.calc.bootsPDef(char);
	var addPdef = 0;
	var multPdef = 1;
	l2.calc.forEachBuff(char, 'pDef', function (op, val) {
		if (op == 'add') { addPdef += val; return; }
		if (op == 'mul') { multPdef *= val; return; }
		throw 'not implemented';
	});
	return Math.floor((4 + armorPdef) * char.lm * multPdef + addPdef);
};

l2.calc.weaponPAtk = function (char) {
	if (char.weapon) {
		var enchant = char.enchants.weapon;
		var delta = 0;
		if (char.weapon.grade) {
			var d = 0;
			if (['bow', 'crossbow'].indexOf(char.weapon.weaponType) >= 0)
				d = l2.data.weaponEnchant[char.weapon.grade].bow;
			if (['bigsword', 'bigblunt', 'dualsword', 'dualfist'].indexOf(char.weapon.weaponType) >= 0)
				d = l2.data.weaponEnchant[char.weapon.grade].twoHand;
			if (d == 0)
				d = l2.data.weaponEnchant[char.weapon.grade].oneHand;
			delta += Math.min(3, enchant) * d;
			delta += Math.max(0, enchant - 3) * 2 * d;
		};
		return char.weapon.pAtk + delta;
	} else
		if (l2.data.subRace[char.$class.subRace].fighter)
			return 4;
		else
			return 3;
};

l2.calc.pAtk = function (char) {
	var addPAtk = 0;
	var multPAtk = 1;
	l2.calc.forEachBuff(char, 'pAtk', function (op, val) {
		if (op == 'add') { addPAtk += val; return; }
		if (op == 'mul') { multPAtk *= val; return; }
		throw 'not implemented';
	});
	var strBonus = l2.data.statBonus['str'][char.stats.str];
	return Math.floor(l2.calc.weaponPAtk(char) * char.lm * strBonus * multPAtk + addPAtk);
};

l2.calc.pCritical = function (char) {
	if (char.weapon == null)
		return 0;
	var dexBonus = l2.data.statBonus['dex'][char.stats.dex];
	var baseCritial = l2.data.tools.getBaseCritital(char.weapon.weaponType) * dexBonus;
	var addCritial = 0;
	l2.calc.forEachBuff(char, 'rCrit', function (op, val) {
		if (op == 'basemul') { addCritial += baseCritial * val; return; }
		if (op == 'add') { addCritial += val; return; }
		throw 'not implemented';
	});
	return Math.min(Math.round(baseCritial + addCritial), 500);
};

l2.calc.pCritMultiplier = function (char) {
	var mult = 2;
	l2.calc.forEachBuff(char, 'cAtk', function (op, val) {
		if (op == 'mul') { mult *= val; return; }
		throw 'not implemented';
	});
	return mult;
};

l2.calc.pCritAtk = function (char) {
	var addCritPAtk = 0;
	l2.calc.forEachBuff(char, 'cAtkAdd', function (op, val) {
		if (op == 'add') { addCritPAtk += val; return; };
		throw 'not implemented';
	});
	return Math.floor(char.pAtk * char.pCritMultiplier + addCritPAtk);
};

l2.calc.atkSpeed = function (char) {
	if (char.weapon == null)
		return 0;
	var baseWeaponAtkSpeed = l2.data.tools.getBaseAtkSpeed(char.weapon.weaponType);
	var dexBonus = l2.data.statBonus['dex'][char.stats.dex];
	var multAtkSpeed = 1;
	l2.calc.forEachBuff(char, 'pAtkSpd', function (op, val) {
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
	l2.calc.forEachBuff(char, 'accCombat', function (op, val) {
		if (op == 'add') { addAcc += val; return; }
		if (op == 'sub') { addAcc -= val; return; }
		throw 'not implemented';
	});
	return Math.floor(Math.sqrt(char.stats.dex) * 6 + char.lvl + addAcc) + l2.data.accuracyFix[char.lvl];
};

l2.calc.pDPS = function (char) {
	return (char.pAtk * (1 - char.pCritical / 1000) + char.pCritAtk * char.pCritical / 1000) * char.atkSpeed / 100;
};

l2.calc.mAtk = function (char) {
	if (char.weapon == null)
		return 0;	
	var addMAtk = 0;
	var multMAtk = 1;
	l2.calc.forEachBuff(char, 'mAtk', function (op, val) {
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
	l2.calc.forEachBuff(char, 'mAtkSpd', function (op, val) {
		if (op == 'add') { addCSpeed += val; return; }
		if (op == 'mul') { multCSpeed *= val; return; }
		throw 'not implemented';
	});
	var witBonus = l2.data.statBonus['wit'][char.stats.wit];
	return Math.floor(333 * witBonus * multCSpeed + addCSpeed);
};

l2.calc.speed = function (char) {
	var addSpeed = 0;
	var multSpeed = 1;
	l2.calc.forEachBuff(char, 'runSpd', function (op, val) {
		if (op == 'add') { addSpeed += val; return; }
		if (op == 'mul') { multSpeed *= val; return; }
		throw 'not implemented';
	});
	var dexBonus = l2.data.statBonus['dex'][char.stats.dex];
	return Math.floor(l2.data.subRace[char.$class.subRace].baseSpeed * dexBonus * multSpeed + addSpeed);
};

l2.calc.evasion = function (char) {
	var addEva = 0;
	l2.calc.forEachBuff(char, 'rEvas', function (op, val) {
		if (op == 'add') { addEva += val; return; }
		if (op == 'sub') { addEva -= val; return; }
		throw 'not implemented';
	});
	return Math.floor(Math.sqrt(char.stats.dex) * 6 + char.lvl + addEva);
};