window.l2 = window.l2 || {};
window.l2.calc = window.l2.calc || {};

l2.calc.forEachEffect = function (char, stat, callback) {
	char.effects.forEach(function (s) {
		var skill = l2.data.tools.getSkill(s.id);
		if (!skill || !skill.effects)
			return;
		for (var j = 0; j < skill.effects.length; j++)
			if (skill.effects[j].stat == stat) {
				var val = (typeof skill.effects[j].val == 'number' ? skill.effects[j].val : skill.effects[j].val[s.lvl - 1]);
				if (l2.calc.checkConditions(char, skill.effects[j].using, skill.effects[j].hp, skill.effects[j].atkFrom, skill.effects[j].moving))
					callback(skill.effects[j].op, val, skill.effects[j].finalChange);
			}
	});
};

l2.calc.forEachEffectSummon = function (summon, stat, callback) {
	summon.effects.forEach(function (s) {
		var skill = l2.data.tools.getSkill(s.id);
		if (!skill || !skill.effects)
			return;
		for (var j = 0; j < skill.effects.length; j++)
			if (skill.effects[j].stat == stat) {
				var val = (typeof skill.effects[j].val == 'number' ? skill.effects[j].val : skill.effects[j].val[s.lvl - 1]);
				if (l2.calc.checkConditionsSummon(summon, skill.effects[j].using))
					callback(skill.effects[j].op, val);
			}
	});
	summon.passives.forEach(function (s) {
		s.effects.forEach(function (eff) {
			if (eff.stat == stat) {
				callback(eff.op, eff.val);
			}
		});
	});
};

l2.calc.checkUsing = function (char, using) {
	if (!using)
		return true;
	switch (using) {
		case 'Pole': return char.weapon && char.weapon.weaponType == 'pole';
		case 'Sword': return char.weapon && char.weapon.weaponType == 'sword';
		case 'Big Sword': return char.weapon && char.weapon.weaponType == 'bigsword';
		case 'Blunt': return char.weapon && char.weapon.weaponType == 'blunt';
		case 'Big Blunt': return char.weapon && char.weapon.weaponType == 'bigblunt';
		case 'Dual Fist': return char.weapon && char.weapon.weaponType == 'dualfist';
		case 'Bow': return char.weapon && char.weapon.weaponType == 'bow';
		case 'Dagger': return char.weapon && char.weapon.weaponType == 'dagger';
		case 'Dual Dagger': return char.weapon && char.weapon.weaponType == 'dualdagger';
		case 'Rapier': return char.weapon && char.weapon.weaponType == 'rapier';
		case 'Ancient': return char.weapon && char.weapon.weaponType == 'ancientsword';
		case 'Dual Sword': return char.weapon && char.weapon.weaponType == 'dual';
		case 'Crossbow': return char.weapon && char.weapon.weaponType == 'crossbow';
		case 'Light': return char.armorType == 'light';
		case 'Heavy': return char.armorType == 'heavy';
		case 'Magic': return char.armorType == 'magic';
		case 'not(Magic)': return char.armorType != 'magic';
		case 'Sigil': return char.shield && char.shield.armorType == 'sigil';
		default: throw 'Using [' + using + '] not implemented';
	}
};

l2.calc.checkUsingSummon = function (summon, using) {
	if (!using)
		return true;
	switch (using) {
		case 'Sword': return true;
		/*case 'Light': return char.armorType == 'light';
		case 'Heavy': return char.armorType == 'heavy';
		case 'Magic': return char.armorType == 'magic';
		case 'not(Magic)': return char.armorType != 'magic';
		case 'Sigil': return char.shield && char.shield.armorType == 'sigil';
		default: throw 'Using [' + using + '] not implemented';*/
		default: return false;
	}
};

l2.calc.checkConditions = function (char, usings, hp, atkFrom, moving) {
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
	if (moving && char.moving != moving)
		return false;
	return true;
};

l2.calc.checkConditionsSummon = function (char, usings) {
	if (usings) {
		var ok = false;
		var parts = usings.split(',');
		for (var i = 0; i < parts.length; i++)
			ok = ok || l2.calc.checkUsingSummon(char, parts[i]);
		if (!ok)
			return false;
	}
	return true;
};

l2.calc.baseStats = function (char) {
	l2.calc.forEachEffect(char, 'STR', function (op, val) {
		if (op == 'set') { return; }
		if (op == 'add') { char.baseStats.str += val; return; }
		throw 'not implemented';
	});
	l2.calc.forEachEffect(char, 'DEX', function (op, val) {
		if (op == 'set') { return; }
		if (op == 'add') { char.baseStats.dex += val; return; }
		throw 'not implemented';
	});
	l2.calc.forEachEffect(char, 'CON', function (op, val) {
		if (op == 'set') { return; }
		if (op == 'add') { char.baseStats.con += val; return; }
		throw 'not implemented';
	});
	l2.calc.forEachEffect(char, 'INT', function (op, val) {
		if (op == 'set') { return; }
		if (op == 'add') { char.baseStats.int += val; return; }
		throw 'not implemented';
	});
	l2.calc.forEachEffect(char, 'WIT', function (op, val) {
		if (op == 'set') { return; }
		if (op == 'add') { char.baseStats.wit += val; return; }
		throw 'not implemented';
	});
	l2.calc.forEachEffect(char, 'MEN', function (op, val) {
		if (op == 'set') { return; }
		if (op == 'add') { char.baseStats.men += val; return; }
		throw 'not implemented';
	});
};

l2.calc.HP = function (char) {
	var _class = char._class;
	if (_class.prof == 3)
		_class = l2.data.tools.getClass(_class.parent);
	if (_class.prof == 2 && char.lvl < 40)
		_class = l2.data.tools.getClass(_class.parent);
	if (_class.prof == 1 && char.lvl < 20)
		_class = l2.data.tools.getClass(_class.parent);
	
	var coefs = l2.data.tools.getBaseHPCoefs(_class.id);
	var baseHP = coefs.a + coefs.b * char.lvl + coefs.c * char.lvl * char.lvl;
	var addHP = 0;
	var multHP = 1;
	l2.calc.forEachEffect(char, 'maxHp', function (op, val) {
		if (op == 'add') { addHP += val; return; }
		if (op == 'sub') { addHP -= val; return; }
		if (op == 'mul') { multHP *= val; return; }
		throw 'not implemented';
	});
	['shield', 'helmet', 'bodyUpper', 'bodyLower', 'gloves', 'boots', 'underwear', 'belt'].forEach(function (part) {
		if (char[part] && char[part].grade) {
			if (char[part].enchant >= 4) {
				var grade = char[part].grade.charAt(0);
				var index = Math.min(12, char[part].enchant) - 4;
				if (char[part].bodyPart == 'onepiece')
					addHP += Math.floor(1.5 * l2.data.oeArmorHPBonus[grade][index]);
				else
					addHP += l2.data.oeArmorHPBonus[grade][index];
			}
		}
	});
	var conBonus = l2.data.statBonus['con'][char.baseStats.con];
	return Math.floor(baseHP * conBonus * multHP + addHP);
};

l2.calc.MP = function (char) {
	var coefs = l2.data.baseMP[l2.data.subRace[char._class.subRace].fighter ? 'fighter' : 'mystic'];
	var coef;
	if (char.lvl > 40 && char._class.prof >= 2)
		coef = coefs[2];
	else if (char.lvl > 20 && char._class.prof >= 1)
		coef = coefs[1];
	else
		coef = coefs[0];
	var lvlDelta = char.lvl - coef.baseLvl;
	var baseMP = coef.base + coef.baseAdd * lvlDelta + coef.acc * lvlDelta * (lvlDelta - 1) / 2;

	var addMP = 0;
	var multMP = 1;
	l2.calc.forEachEffect(char, 'maxMp', function (op, val) {
		if (op == 'add') { addMP += val; return; }
		if (op == 'sub') { addMP -= val; return; }
		if (op == 'mul') { multMP *= val; return; }
		throw 'not implemented';
	});

	['bodyUpper', 'bodyLower', 'underwear', 'ring1', 'ring2', 'earring1', 'earring2', 'necklace'].forEach(function (part) {
		if (char[part] && char[part].maxMp)
			addMP += char[part].maxMp;
	});

	var menBonus = l2.data.statBonus['men'][char.baseStats.men];
	return Math.floor(baseMP * menBonus * multMP + addMP);
};

l2.calc.CP = function (char) {
	var _class = char._class;
	if (_class.prof == 3)
		_class = l2.data.tools.getClass(_class.parent);
	if (_class.prof == 2 && char.lvl < 40)
		_class = l2.data.tools.getClass(_class.parent);
	if (_class.prof == 1 && char.lvl < 20)
		_class = l2.data.tools.getClass(_class.parent);
	var coefs = l2.data.tools.getBaseHPCoefs(_class.id);
	var baseHP = coefs.a + coefs.b * char.lvl + coefs.c * char.lvl * char.lvl;
	var addCP = 0;
	var multCP = 1;
	l2.calc.forEachEffect(char, 'maxCp', function (op, val) {
		if (op == 'add') { addCP += val; return; }
		if (op == 'mul') { multCP *= val; return; }
		throw 'not implemented';
	});
	var conBonus = l2.data.statBonus['con'][char.baseStats.con];
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
		return l2.calc.applyArmorEnchant(char.helmet.pDef, char.helmet.grade, char.helmet.enchant);
	else
		return 12;
};

l2.calc.bodyUpperPdef = function (char) {
	if (char.bodyUpper)
		return l2.calc.applyArmorEnchant(char.bodyUpper.pDef, char.bodyUpper.grade, char.bodyUpper.enchant);
	else
		return l2.data.tools.isMystic(char._class.id) ? 15 : 31;
};

l2.calc.bodyLowerPDef = function (char) {
	if (char.bodyUpper == null || char.bodyUpper.bodyPart != 'onepiece') {
		if (char.bodyLower)
			return l2.calc.applyArmorEnchant(char.bodyLower.pDef, char.bodyLower.grade, char.bodyLower.enchant);
		else
			return l2.data.tools.isMystic(char._class.id) ? 8 : 18;
	} else
		return 0;
};

l2.calc.glovesPDef = function (char) {
	if (char.gloves)
		return l2.calc.applyArmorEnchant(char.gloves.pDef, char.gloves.grade, char.gloves.enchant);
	else
		return 8;
};

l2.calc.bootsPDef = function (char) {
	if (char.boots)
		return l2.calc.applyArmorEnchant(char.boots.pDef, char.boots.grade, char.boots.enchant);
	else
		return 7;
};

l2.calc.cloakPDef = function (char) {
	if (char.cloak)
		return char.cloak.pDef;
	else
		return 0;
};

l2.calc.underwearPDef = function (char) {
	if (char.underwear)
		return l2.calc.applyArmorEnchant(char.underwear.pDef, char.underwear.grade, char.underwear.enchant);
	else
		return 0;
};

l2.calc.beltPDef = function (char) {
	if (char.belt)
		return l2.calc.applyArmorEnchant(char.belt.pDef, char.belt.grade, char.belt.enchant);
	else
		return 0;
};

l2.calc.pDef = function (char) {
	var armorPdef = 0;
	armorPdef += l2.calc.helmetPDef(char);
	armorPdef += l2.calc.bodyUpperPdef(char);
	armorPdef += l2.calc.bodyLowerPDef(char);
	armorPdef += l2.calc.glovesPDef(char);
	armorPdef += l2.calc.bootsPDef(char);
	var othersPdef = 0;
	othersPdef += l2.calc.cloakPDef(char);
	othersPdef += l2.calc.underwearPDef(char);
	othersPdef += l2.calc.beltPDef(char);
	var addPdef = 0;
	var multPdef = 1;
	l2.calc.forEachEffect(char, 'pDef', function (op, val) {
		if (op == 'add') { addPdef += val; return; }
		if (op == 'mul') { multPdef *= val; return; }
		throw 'not implemented';
	});
	return Math.floor((4 + armorPdef + othersPdef) * char.lm * multPdef + addPdef/* + othersPdef * char.lm*/);
};

l2.calc.weaponPAtk = function (char) {
	if (char.weapon) {
		var enchant = l2.model.weapon.enchant;
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
		if (l2.data.subRace[char._class.subRace].fighter)
			return 4;
		else
			return 3;
};

l2.calc.pAtk = function (char) {
	var addPAtk = 0;
	var multPAtk = 1;
	var multFinalPAtk = 1;
	l2.calc.forEachEffect(char, 'pAtk', function (op, val, fc) {
		if (op == 'add') { addPAtk += val; return; }
		if (op == 'mul') {
			if (fc)	multFinalPAtk *= val;
			else multPAtk *= val;
			return;
		}
		throw 'not implemented';
	});
	var strBonus = l2.data.statBonus['str'][char.baseStats.str];
	return Math.floor(multFinalPAtk * (l2.calc.weaponPAtk(char) * char.lm * strBonus * multPAtk + addPAtk));
};

l2.calc.pCritical = function (char) {
	var weaponBaseCritical = char.weapon == null ? 40 : l2.data.tools.getBaseCritical(char.weapon.weaponType);
	var dexBonus = l2.data.statBonus['dex'][char.baseStats.dex];
	var baseCritical = weaponBaseCritical * dexBonus;
	var addCritial = 0;
	l2.calc.forEachEffect(char, 'rCrit', function (op, val) {
		if (op == 'basemul') { addCritial += baseCritical * val; return; }
		if (op == 'add') { addCritial += val; return; }
		throw 'not implemented';
	});
	return Math.min(Math.round(baseCritical + addCritial), 500);
};

l2.calc.pCritMultiplier = function (char) {
	var mult = 2;
	l2.calc.forEachEffect(char, 'cAtk', function (op, val) {
		if (op == 'mul') { mult *= val; return; }
		throw 'not implemented';
	});
	return mult;
};

l2.calc.pCritAtk = function (char, stats) {
	var addCritPAtk = 0;
	l2.calc.forEachEffect(char, 'cAtkAdd', function (op, val) {
		if (op == 'add') { addCritPAtk += val; return; };
		throw 'not implemented';
	});
	return Math.floor(stats.pAtk * stats.pCritMultiplier + addCritPAtk);
};

l2.calc.mCritical = function (char) {
	var baseCritical = 80 * l2.data.statBonus['wit'][char.baseStats.wit];
	var addCritial = 0;
	l2.calc.forEachEffect(char, 'mCritRate', function (op, val) {
		if (op == 'basemul') { addCritial += baseCritical * val; return; }
		if (op == 'add') { addCritial += val * 10; return; }
		throw 'not implemented';
	});
	return Math.min(Math.floor(baseCritical + addCritial), 300);
};

l2.calc.mCritMultiplier = function (char) {
	var mult = 2.5;
	l2.calc.forEachEffect(char, 'mCritPower', function (op, val) {
		if (op == 'mul') { mult *= val; return; }
		throw 'not implemented';
	});
	return mult;
};

l2.calc.atkSpeed = function (char) {
	var baseWeaponAtkSpeed = char.weapon == null ? l2.data.noWeaponAtkSpeed : l2.data.tools.getBaseAtkSpeed(char.weapon.weaponType, char.weapon.bowFast);
	var dexBonus = l2.data.statBonus['dex'][char.baseStats.dex];
	var multAtkSpeed = 1;
	l2.calc.forEachEffect(char, 'pAtkSpd', function (op, val) {
		if (op == 'mul') { multAtkSpeed *= val; return; }
		throw 'not implemented';
	});
	return Math.min(Math.floor(dexBonus * baseWeaponAtkSpeed * multAtkSpeed), 1500);
};

l2.calc.accuracy = function (char) {
	var addAcc = 0;
	if (char.weapon)
		addAcc += l2.data.tools.getBaseAccuracy(char.weapon.weaponType);
	l2.calc.forEachEffect(char, 'accCombat', function (op, val) {
		if (op == 'add') { addAcc += val; return; }
		if (op == 'sub') { addAcc -= val; return; }
		throw 'not implemented';
	});
	return Math.floor(Math.sqrt(char.baseStats.dex) * 6 + char.lvl + addAcc) + l2.data.accuracyFix[char.lvl];
};

l2.calc.realAtkSpeed = function (char, stats) {
	if (!char.weapon || !(char.weapon.weaponType == 'bow' || char.weapon.weaponType == 'crossbow') || char.inTrueTransformation)
		return stats.atkSpeed;
	var reuse = char.weapon.reuse || (char.weapon.weaponType == 'bow' ? (char.weapon.bowFast ? 1500 : 820) : 400);
	return Math.round(500000 * stats.atkSpeed / (500000 + reuse * 329.2));
};

l2.calc.pDPS = function (char) {
	return (char.pAtk * (1 - char.pCritical / 1000) + char.pCritAtk * char.pCritical / 1000) * char.realAtkSpeed / 100;
};

l2.calc.mDPS = function (char) {
	var mPower = Math.sqrt(char.mAtk);
	return (mPower * (1 - char.mCritical / 1000) + mPower * char.mCritMultiplier * char.mCritical / 1000) * char.castSpeed / 100;
};

l2.calc.weaponMAtk = function (char) {
	if (char.weapon) {
		var enchant = l2.model.weapon.enchant;
		var delta = 0;
		if (char.weapon.grade) {
			var d = l2.data.weaponEnchant[char.weapon.grade].mAtk;
			delta += Math.min(3, enchant) * d;
			delta += Math.max(0, enchant - 3) * 2 * d;
		};
		return char.weapon.mAtk + delta;
	} else
		return 6;
};

l2.calc.mAtk = function (char) {
	var addMAtk = 0;
	var multMAtk = 1;
	l2.calc.forEachEffect(char, 'mAtk', function (op, val) {
		if (op == 'add') { addMAtk += val; return; }
		if (op == 'mul') { multMAtk *= val; return; }
		throw 'not implemented';
	});
	var intBonus = l2.data.statBonus['int'][char.baseStats.int];
	return Math.floor(l2.calc.weaponMAtk(char) * char.lm * char.lm * intBonus * intBonus * multMAtk + addMAtk);
};

l2.calc.castSpeed = function (char) {
	var addCSpeed = 0;
	var multCSpeed = 1;
	l2.calc.forEachEffect(char, 'mAtkSpd', function (op, val) {
		if (op == 'add') { addCSpeed += val; return; }
		if (op == 'mul') { multCSpeed *= val; return; }
		throw 'not implemented';
	});
	var witBonus = l2.data.statBonus['wit'][char.baseStats.wit];
	return Math.floor(333 * witBonus * multCSpeed + addCSpeed);
};

l2.calc.speed = function (char) {
	var addSpeed = 0;
	var multSpeed = 1;
	l2.calc.forEachEffect(char, 'runSpd', function (op, val) {
		if (op == 'add') { addSpeed += val; return; }
		if (op == 'mul') { multSpeed *= val; return; }
		throw 'not implemented';
	});
	var dexBonus = l2.data.statBonus['dex'][char.baseStats.dex];
	return Math.floor(l2.data.subRace[char._class.subRace].baseSpeed * dexBonus * multSpeed + addSpeed);
};

l2.calc.evasion = function (char) {
	var addEva = 0;
	l2.calc.forEachEffect(char, 'rEvas', function (op, val) {
		if (op == 'add') { addEva += val; return; }
		if (op == 'sub') { addEva -= val; return; }
		throw 'not implemented';
	});
	return Math.floor(Math.sqrt(char.baseStats.dex) * 6 + char.lvl + addEva);
};

l2.calc.necklaceMDef = function (char) {
	if (char.necklace)
		return l2.calc.applyArmorEnchant(char.necklace.mDef, char.necklace.grade, char.necklace.enchant);
	else
		return 13;
};

l2.calc.earring1MDef = function (char) {
	if (char.earring1)
		return l2.calc.applyArmorEnchant(char.earring1.mDef, char.earring1.grade, char.earring1.enchant);
	else
		return 9;
};

l2.calc.earring2MDef = function (char) {
	if (char.earring2)
		return l2.calc.applyArmorEnchant(char.earring2.mDef, char.earring2.grade, char.earring2.enchant);
	else
		return 9;
};

l2.calc.ring1MDef = function (char) {
	if (char.ring1)
		return l2.calc.applyArmorEnchant(char.ring1.mDef, char.ring1.grade, char.ring1.enchant);
	else
		return 5;
};

l2.calc.ring2MDef = function (char) {
	if (char.ring2)
		return l2.calc.applyArmorEnchant(char.ring2.mDef, char.ring2.grade, char.ring2.enchant);
	else
		return 5;
};

l2.calc.mDef = function (char) {
	var jewelryMdef = 0;
	jewelryMdef += l2.calc.necklaceMDef(char);
	jewelryMdef += l2.calc.earring1MDef(char);
	jewelryMdef += l2.calc.earring2MDef(char);
	jewelryMdef += l2.calc.ring1MDef(char);
	jewelryMdef += l2.calc.ring2MDef(char);
	var addMdef = 0;
	var multMdef = 1;
	l2.calc.forEachEffect(char, 'mDef', function (op, val) {
		if (op == 'add') { addMdef += val; return; }
		if (op == 'mul') { multMdef *= val; return; }
		throw 'not implemented';
	});
	var menBonus = l2.data.statBonus['men'][char.baseStats.men];
	return Math.floor(jewelryMdef * char.lm * menBonus * multMdef + addMdef);
};

l2.calc.mpRegen = function (char) {
	var baseMPRegen;
	if (char.lvl <= 10)
		baseMPRegen = 0.9;
	else if (char.lvl <= 20)
		baseMPRegen = 1.2;
	else if (char.lvl <= 30)
		baseMPRegen = 1.5;
	else if (char.lvl <= 40)
		baseMPRegen = 1.8;
	else if (char.lvl <= 50)
		baseMPRegen = 2.1;
	else if (char.lvl <= 60)
		baseMPRegen = 2.4;
	else if (char.lvl <= 70)
		baseMPRegen = 2.7;
	else
		baseMPRegen = 3.0;
	var moveMult;
	switch (char.moving) {
		case 'staying': moveMult = 1.5; break;
		case 'running': moveMult = 0.7; break;
		case 'walking': moveMult = 1.1; break;
		case 'sitting': moveMult = 2.5; break;
		default:
			throw 'Invalid moving';
	}
	var addMPRegen = 0;
	var multMPRegen = 1;
	l2.calc.forEachEffect(char, 'regMp', function (op, val) {
		if (op == 'add') { addMPRegen += val; return; }
		if (op == 'mul') { multMPRegen *= val; return; }
		throw 'not implemented';
	});
	var menBonus = l2.data.statBonus['men'][char.baseStats.men];
	var mpRegen = baseMPRegen * menBonus * char.lm * multMPRegen * moveMult + addMPRegen;
	return Math.floor(mpRegen * 10) / 10;
};

l2.calc.checkSet = function (char) {
	var equipedSet = null;
	var enchant6 = false;
	l2.data.armorSets.forEach(function (set) {
		if (!char.bodyUpper || set.chest.indexOf(char.bodyUpper.id) == -1)
			return;
		if (set.legs && (!char.bodyLower || set.legs.indexOf(char.bodyLower.id) == -1))
			return;
		if (set.head && (!char.helmet || set.head.indexOf(char.helmet.id) == -1))
			return;
		if (set.gloves && (!char.gloves || set.gloves.indexOf(char.gloves.id) == -1))
			return;
		if (set.feet && (!char.boots || set.feet.indexOf(char.boots.id) == -1))
			return;
		enchant6 =
			(char.bodyUpper.enchant >= 6) &&
			(!set.legs || char.bodyLower.enchant >= 6) &&
			(!set.head || char.helmet.enchant >= 6) &&
			(!set.gloves || char.gloves.enchant >= 6) &&
			(!set.feet || char.boots.enchant >= 6);
		equipedSet = set;
	});

	if (equipedSet == null)
		return;

	char.effects.push({ id: equipedSet.skill[1], lvl: 1, skill: l2.data.tools.getSkill(equipedSet.skill[1]) });
	if (equipedSet.shield && char.shield && equipedSet.shield.indexOf(char.shield.id) >= 0 && equipedSet.shieldSkill != null)
		char.passives.push({ id: equipedSet.shieldSkill, lvl: 1, skill: l2.data.tools.getSkill(equipedSet.shieldSkill) });
	if (enchant6)
		if (char.bodyUpper.grade) {
			var ench6id = l2.data.set6Bonus[char.bodyUpper.grade.charAt(0)][char.bodyUpper.armorType];
			char.effects.push({
				id: ench6id,
				lvl: 1,
				skill: l2.data.tools.getSkill(ench6id)
			});
		}

	if (equipedSet.str) char.baseStats.str += equipedSet.str;
	if (equipedSet.dex) char.baseStats.dex += equipedSet.dex;
	if (equipedSet.con) char.baseStats.con += equipedSet.con;
	if (equipedSet.int) char.baseStats.int += equipedSet.int;
	if (equipedSet.wit) char.baseStats.wit += equipedSet.wit;
	if (equipedSet.men) char.baseStats.men += equipedSet.men;
};

l2.calc.convertGrade = function (grade) {
	switch (grade) {
		case 'd': return 1;
		case 'c': return 2;
		case 'b': return 3;
		case 'a': return 4;
		case 's': return 5;
		case 's80': return 6;
		case 's84': return 7;
		default:
			throw 'Invalid grade';
	}
};

l2.calc.charGrade = function (char) {
	if (char.lvl < 20)
		return 0;
	if (char.lvl < 40)
		return 1;
	if (char.lvl < 52)
		return 2;
	if (char.lvl < 61)
		return 3;
	if (char.lvl < 76)
		return 4;
	if (char.lvl < 80)
		return 5;
	if (char.lvl < 84)
		return 6;
	return 7;
};

l2.calc.checkWeaponPenalty = function (char) {
	if (!char.weapon)
		return;
	if (!char.weapon.grade)
		return;
	var charGrade = l2.calc.charGrade(char);
	var weaponGrade = l2.calc.convertGrade(char.weapon.grade);
	if (charGrade < weaponGrade) {
		char.effects.push({
			id: 6209,
			lvl: Math.min(4, weaponGrade - charGrade),
			skill: l2.data.tools.getSkill(6209)
		});
		char.weapon.skill = null;
	}
};

l2.calc.parseSkills = function (array, str) {
	if (!str)
		return;
	str.split(';').forEach(function (s) {
		var ss = s.split('-');
		var id = parseInt(ss[0]);
		var lvl = parseInt(ss[1]);
		var prevSkill = array.filter(function (skill) {
			return skill.id == id;
		});
		if (prevSkill.length == 0)
			array.push({ id: id, lvl: lvl, skill: l2.data.tools.getSkill(id) });
		else
			if (prevSkill[0].lvl < lvl)
				prevSkill[0].lvl = lvl;
	})
};

l2.calc.stats = function () {
	var _class = l2.data.tools.getClass(l2.model.classId);
	var baseStats = l2.data.subRace[_class.subRace];
	var char = {
		classId: l2.model.classId,
		_class: _class,
		baseStats: $.extend({}, baseStats.stats),
		lvl: l2.model.level,
		lm: (l2.model.level + 89) / 100,
		hpPerc: l2.model.hpPercent,
		atkFrom: l2.model.position,
		moving: l2.model.moving,
		effects: [],
		transformId: l2.model.transformId
	};

	l2.ui.modelEquipments.forEach(function (model) {
		if (l2.model[model].id) {
			char[model] = $.extend({}, l2.model[model].item);
			char[model].enchant = l2.model[model].enchant;

			var item = l2.model[model].item;
			if (item.ench4 && l2.model[model].enchant >= 4)
				l2.calc.parseSkills(char.effects, item.ench4);
			l2.calc.parseSkills(char.effects, item.skill);
		}
	});

	if (char.bodyUpper)
		if (char.bodyUpper.bodyPart == 'onepiece')
			char.armorType = char.bodyUpper.armorType;
		else
			if (char.bodyLower && char.bodyUpper.armorType == char.bodyLower.armorType)
				char.armorType = char.bodyUpper.armorType;

	l2.calc.checkWeaponPenalty(char);

	l2.calc.checkSet(char);

	if (char.transformId) {
		var trans = l2.data.tools.getSkill(char.transformId);
		if (trans.effects)
			trans.effects.forEach(function (eff) {
				if (eff.op != 'set')
					return;
				if (['STR', 'DEX', 'CON', 'INT', 'WIT', 'MEN'].indexOf(eff.stat) < 0)
					return;
				char.baseStats[eff.stat.toLowerCase()] = eff.val;
			});

		var transInfo = l2.data.transforms[char.transformId];

		if (!transInfo.light) {
			char.effects.push({
				id: l2.data.transformHiddenPassiveId,
				lvl: 1,
				skill: l2.data.tools.getSkill(l2.data.transformHiddenPassiveId)
			});

			char.inTrueTransformation = true;
		}

		char.effects.push({
			id: char.transformId,
			lvl: trans.levels,
			skill: trans
		});
	}

	var skillCallback = function (s) {
		if (s.level > 0)
			char.effects.push({
				id: s.id,
				lvl: s.level,
				skill: s.skill
			});
	};

	l2.model.selfBuffs.forEach(skillCallback);
	l2.model.toggles.forEach(skillCallback);
	l2.model.commonBuffs.forEach(skillCallback);
	l2.model.triggers.forEach(skillCallback);
	l2.model.songs.forEach(skillCallback);
	l2.model.dances.forEach(skillCallback);
	l2.model.clanSkills.forEach(skillCallback);
	l2.model.subClassSkills.forEach(skillCallback);
	l2.model.passives.forEach(skillCallback);
	l2.model.transformPassives.forEach(skillCallback);
	l2.model.transformBuffs.forEach(skillCallback);

	l2.calc.baseStats(char);

	var delta = { str: 0, dex: 0, con: 0, int: 0, wit: 0, men: 0 };
	for (var i = 1; i <= 3; i++) {
		var slot = l2.model['tatoo' + i];
		if (slot.checked) {
			delta[slot.add.stat] += slot.add.value;
			delta[slot.sub.stat] -= slot.sub.value;
		}
	}

	for (var stat in delta) {
		if (delta[stat] > 5)
			delta[stat] = 5;
		char.baseStats[stat] += delta[stat];
		if (char.baseStats[stat] <= 0)
			char.baseStats[stat] = 1;
	}

	var stats = {
		baseStats: char.baseStats,
		hp: l2.calc.HP(char),
		mp: l2.calc.MP(char),
		cp: l2.calc.CP(char),
		pDef: l2.calc.pDef(char),
		pAtk: l2.calc.pAtk(char),
		mAtk: l2.calc.mAtk(char),
		accuracy: l2.calc.accuracy(char),
		pCritical: l2.calc.pCritical(char),
		pCritMultiplier: l2.calc.pCritMultiplier(char),
		mCritical: l2.calc.mCritical(char),
		mCritMultiplier: l2.calc.mCritMultiplier(char),
		atkSpeed: l2.calc.atkSpeed(char),
		castSpeed: l2.calc.castSpeed(char),
		speed: l2.calc.speed(char),
		evasion: l2.calc.evasion(char),
		mDef: l2.calc.mDef(char),
		mpRegen: l2.calc.mpRegen(char)
	};

	stats.realAtkSpeed = l2.calc.realAtkSpeed(char, stats);
	stats.pCritAtk = l2.calc.pCritAtk(char, stats);
	stats.pDPS = l2.calc.pDPS(stats);
	stats.mDPS = l2.calc.mDPS(stats);

	return stats;
};

l2.calc.summonHP = function (summon) {
	var addHP = 0;
	var multHP = 1;
	l2.calc.forEachEffectSummon(summon, 'maxHp', function (op, val) {
		if (op == 'add') { addHP += val; return; }
		if (op == 'sub') { addHP -= val; return; }
		if (op == 'mul') { multHP *= val; return; }
		if (op == 'addPercForSummon') { addHP += l2.ui.characterPrevStats.hp * val / 100; return; }
		throw 'not implemented';
	});
	var conBonus = l2.data.statBonus['con'][summon.baseStats.con];
	return Math.floor(summon.info.hp * conBonus * multHP + addHP);
};

l2.calc.summonMP = function (summon) {
	var addMP = 0;
	var multMP = 1;
	l2.calc.forEachEffectSummon(summon, 'maxMp', function (op, val) {
		if (op == 'add') { addMP += val; return; }
		if (op == 'sub') { addMP -= val; return; }
		if (op == 'mul') { multMP *= val; return; }
		if (op == 'addPercForSummon') { addMP += l2.ui.characterPrevStats.mp * val / 100; return; }
		throw 'not implemented';
	});
	var menBonus = l2.data.statBonus['men'][summon.baseStats.men];
	return Math.floor(summon.info.mp * menBonus * multMP + addMP);
};

l2.calc.summonPDef = function (summon) {
	var addPdef = 0;
	var multPdef = 1;
	l2.calc.forEachEffectSummon(summon, 'pDef', function (op, val) {
		if (op == 'add') { addPdef += val; return; }
		if (op == 'mul') { multPdef *= val; return; }
		if (op == 'addPercForSummon') { addPdef += l2.ui.characterPrevStats.pDef * val / 100; return; }
		throw 'not implemented';
	});
	return Math.floor(summon.info.pDef * summon.lm * multPdef + addPdef);
};

l2.calc.summonMDef = function (summon) {
	var addMdef = 0;
	var multMdef = 1;
	l2.calc.forEachEffectSummon(summon, 'pDef', function (op, val) {
		if (op == 'add') { addMdef += val; return; }
		if (op == 'mul') { multMdef *= val; return; }
		if (op == 'addPercForSummon') { addMdef += l2.ui.characterPrevStats.mDef * val / 100; return; }
		throw 'not implemented';
	});
	var menBonus = l2.data.statBonus['men'][summon.baseStats.men];
	return Math.floor(summon.info.mDef * menBonus * summon.lm * multMdef + addMdef);
};

l2.calc.summonPAtk = function (summon) {
	var addPatk = 0;
	var multPatk = 1;
	l2.calc.forEachEffectSummon(summon, 'pAtk', function (op, val) {
		if (op == 'add') { addPatk += val; return; }
		if (op == 'mul') { multPatk *= val; return; }
		if (op == 'addPercForSummon') { addPatk += l2.ui.characterPrevStats.pAtk * val / 100; return; }
		throw 'not implemented';
	});
	var strBonus = l2.data.statBonus['str'][summon.baseStats.str];
	return Math.floor(summon.info.pAtk * strBonus * summon.lm * multPatk + addPatk);
};

l2.calc.summonMAtk = function (summon) {
	var addMatk = 0;
	var multMatk = 1;
	l2.calc.forEachEffectSummon(summon, 'mAtk', function (op, val) {
		if (op == 'add') { addMatk += val; return; }
		if (op == 'mul') { multMatk *= val; return; }
		if (op == 'addPercForSummon') { addMatk += l2.ui.characterPrevStats.mAtk * val / 100; return; }
		throw 'not implemented';
	});
	var intBonus = l2.data.statBonus['int'][summon.baseStats.int];
	return Math.floor(summon.info.mAtk * intBonus * intBonus * summon.lm * summon.lm * multMatk + addMatk);
};

l2.calc.summonAccuracy = function (summon) {
	var addAcc = 0;
	l2.calc.forEachEffectSummon(summon, 'accCombat', function (op, val) {
		if (op == 'add') { addAcc += val; return; }
		if (op == 'sub') { addAcc -= val; return; }
		throw 'not implemented';
	});
	return Math.floor(Math.sqrt(summon.baseStats.dex) * 6 + summon.lvl + addAcc + summon.info.acc) + l2.data.accuracyFix[summon.lvl];
};

l2.calc.summonEvasion = function (summon) {
	var addEva = 0;
	l2.calc.forEachEffectSummon(summon, 'rEvas', function (op, val) {
		if (op == 'add') { addEva += val; return; }
		if (op == 'sub') { addEva -= val; return; }
		throw 'not implemented';
	});
	return Math.floor(Math.sqrt(summon.baseStats.dex) * 6 + summon.lvl + addEva + summon.info.eva);
};

l2.calc.summonPCritical = function (summon) {
	var dexBonus = l2.data.statBonus['dex'][summon.baseStats.dex];
	var baseCritical = summon.info.crit * dexBonus;
	var addCritial = 0;
	l2.calc.forEachEffectSummon(summon, 'rCrit', function (op, val) {
		if (op == 'basemul') { addCritial += baseCritical * val; return; }
		if (op == 'add') { addCritial += val; return; }
		if (op == 'addPercForSummon') { addCritial += l2.ui.characterPrevStats.pCritical * val / 100; return; }
		throw 'not implemented';
	});
	return Math.min(Math.round(baseCritical + addCritial), 500);
};

l2.calc.summonAtkSpeed = function (summon) {
	var dexBonus = l2.data.statBonus['dex'][summon.baseStats.dex];
	var multAtkSpeed = 1;
	var addAtkSpeed = 0;
	l2.calc.forEachEffectSummon(summon, 'pAtkSpd', function (op, val) {
		if (op == 'mul') { multAtkSpeed *= val; return; }
		if (op == 'addPercForSummon') { addAtkSpeed += l2.ui.characterPrevStats.atkSpeed * val / 100; return; }
		throw 'not implemented';
	});
	return Math.min(Math.floor(dexBonus * summon.info.pSpd * multAtkSpeed + addAtkSpeed), 1500);
};

l2.calc.summonCastSpeed = function (summon) {
	var addCSpeed = 0;
	var multCSpeed = 1;
	l2.calc.forEachEffectSummon(summon, 'mAtkSpd', function (op, val) {
		if (op == 'add') { addCSpeed += val; return; }
		if (op == 'mul') { multCSpeed *= val; return; }
		if (op == 'addPercForSummon') { addCSpeed += l2.ui.characterPrevStats.castSpeed * val / 100; return; }
		throw 'not implemented';
	});
	var witBonus = l2.data.statBonus['wit'][summon.baseStats.wit];
	return Math.floor(333 * witBonus * multCSpeed + addCSpeed);
};

l2.calc.summonPCritMultiplier = function (summon) {
	var mult = 2;
	l2.calc.forEachEffectSummon(summon, 'cAtk', function (op, val) {
		if (op == 'mul') { mult *= val; return; }
		throw 'not implemented';
	});
	return mult;
};

l2.calc.summonPCritAtk = function (summon, stats) {
	var addCritPAtk = 0;
	l2.calc.forEachEffectSummon(summon, 'cAtkAdd', function (op, val) {
		if (op == 'add') { addCritPAtk += val; return; };
		throw 'not implemented';
	});
	return Math.floor(stats.pAtk * stats.pCritMultiplier + addCritPAtk);
};

l2.calc.summonStats = function () {
	var summonId = l2.model.characterModel.summonId;
	var summonLevel = l2.model.characterModel.summonLevel;
	if (summonLevel < 100) {
		var npcIds = [];
		for (var id in l2.data.summons[summonId].stats)
			npcIds.push(id);
		npcIds.sort(function (id1, id2) { return id1 - id2; });
		var summonInfo = l2.data.summons[summonId].stats[npcIds[summonLevel - 1]];
	} else {
		var e = summonLevel - 100;
		for (var id in l2.data.summons[summonId].stats)
			if (l2.data.summons[summonId].stats[id].name.indexOf('_ep_' + (e < 10 ? '0' + e : e)) > 0) {
				var summonInfo = l2.data.summons[summonId].stats[id];
				break;
			}
	}

	var summon = {
		baseStats: { int: summonInfo.int, str: summonInfo.str, con: summonInfo.con, men: summonInfo.men, dex: summonInfo.dex, wit: summonInfo.wit },
		info: summonInfo,
		lvl: summonInfo.lvl,
		lm: (summonInfo.lvl + 89) / 100,
		hpPerc: 100,
		atkFrom: 'behind',
		moving: 'staying',
		effects: [],
		passives: []
	};

	var skillCallback = function (s) {
		if (s.level > 0)
			summon.effects.push({
				id: s.id,
				lvl: s.level,
				skill: s.skill
			});
	};

	l2.model.summonModel.selfBuffs.forEach(skillCallback);
	l2.model.summonModel.commonBuffs.forEach(skillCallback);
	l2.model.summonModel.triggers.forEach(skillCallback);
	l2.model.summonModel.songs.forEach(skillCallback);
	l2.model.summonModel.dances.forEach(skillCallback);

	summonInfo.skills.forEach(function (sn) {
		summon.passives.push(l2.data.npcSkills[sn]);
	});

	var stats = {
		level: summon.lvl,
		baseStats: summon.baseStats,
		hp: l2.calc.summonHP(summon),
		mp: l2.calc.summonMP(summon),
		cp: 0,
		pDef: l2.calc.summonPDef(summon),
		pAtk: l2.calc.summonPAtk(summon),
		mAtk: l2.calc.summonMAtk(summon),
		accuracy: l2.calc.summonAccuracy(summon),
		evasion: l2.calc.summonEvasion(summon),
		pCritical: l2.calc.summonPCritical(summon),
		pCritMultiplier: l2.calc.summonPCritMultiplier(summon),
		mCritical: 1,
		mCritMultiplier: 1,
		atkSpeed: l2.calc.summonAtkSpeed(summon),
		castSpeed: l2.calc.summonCastSpeed(summon),
		speed: 1,		
		mDef: l2.calc.summonMDef(summon),
		mpRegen: 1
	};

	stats.realAtkSpeed = stats.atkSpeed;
	stats.pCritAtk = l2.calc.summonPCritAtk(summon, stats);
	stats.pDPS = l2.calc.pDPS(stats);
	stats.mDPS = l2.calc.mDPS(stats);

	return stats;
};