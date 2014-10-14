window.l2 = window.l2 || {};
window.l2.data = window.l2.data || {};
window.l2.data.tools = window.l2.data.tools || {};

l2.data.tools.getItem = function (id) {
	return l2.data.items[id] || null;
};
l2.data.tools.getSkill = function (id) {
	for (var i = 0; i < l2.data.skills.length; i++)
		if (l2.data.skills[i].id == id)
			return l2.data.skills[i];
	return null;
};
l2.data.tools.getSet = function (id) {
	for (var i = 0; i < l2.data.armorSets.length; i++)
		if (l2.data.armorSets[i].id == id)
			return l2.data.armorSets[i];
	return null;	
};
l2.data.tools.getClass = function (id) {
	for (var i = 0; i < l2.data.classes.length; i++)
		if (l2.data.classes[i].id == id)
			return l2.data.classes[i];
	return null;
};
l2.data.tools.getBaseClasses = function (classId) {
	var classesId = [];
	var currClassId = parseInt(classId);
	while (currClassId != null) {
		var _class = l2.data.tools.getClass(currClassId);
		classesId.push(_class.id);
		currClassId = _class.parent;
	}
	return classesId;
};
l2.data.tools.getSkillTree = function (classId) {
	for (var i = 0; i < l2.data.skillTree.length; i++)
		if (l2.data.skillTree[i].classId == classId)
			return l2.data.skillTree[i].skills;
	return null;
};
l2.data.tools.getBaseHPCoefs = function (classId) {
	for (var i = 0; i < l2.data.baseHPCoef.length; i++)
		if (l2.data.baseHPCoef[i].id == classId)
			return l2.data.baseHPCoef[i];
	return null;
};
l2.data.tools.isMystic = function (classId) {
	var base = l2.data.tools.getBaseClasses(classId);
	var baseClassId = base[base.length - 1];
	return [10, 25, 38, 49].indexOf(baseClassId) >= 0;
};
l2.data.tools.getBaseCritical = function (weaponType) {
	for (var i = 0; i < l2.data.weaponBaseData.length; i++)
		if (l2.data.weaponBaseData[i].name == weaponType)
			return l2.data.weaponBaseData[i].baseCritical;
	throw 'Unknown weapon type';
};
l2.data.tools.getBaseAtkSpeed = function (weaponType, bowFast) {
	if (weaponType == 'bow')
		return bowFast ? l2.data.bowAtkSpeed.fast : l2.data.bowAtkSpeed.slow;
	for (var i = 0; i < l2.data.weaponBaseData.length; i++)
		if (l2.data.weaponBaseData[i].name == weaponType)
			return l2.data.weaponBaseData[i].baseAtkSpeed;
	throw 'Unknown weapon type';
};
l2.data.tools.sortItems = function (items) {
	items.sort(function (i1, i2) {
		if (i1.name < i2.name) return -1;
		if (i1.name > i2.name) return 1;
		return 0;
	});
};
l2.data.tools.findItems = function (grade, filter) {
	var items = [];
	for (var id in l2.data.items) {
		var item = l2.data.items[id];
		if (filter(item) && item.grade == grade)
			items.push(item);
	}
	l2.data.tools.sortItems(items);
	return items;
};
l2.data.tools.findWeapons = function (grade, type) {
	return l2.data.tools.findItems(grade, function (item) {
		return item.weaponType == type;
	});
};
l2.data.tools.findShields = function (grade) {
	return l2.data.tools.findItems(grade, function (item) {
		return item.bodyPart == 'lhand' && (item.sDef != null || item.armorType == 'sigil');
	});
};
l2.data.tools.findBodyUppers = function (grade) {
	return l2.data.tools.findItems(grade, function (item) {
		return item.bodyPart == 'chest' || item.bodyPart == 'onepiece';
	});
};
l2.data.tools.findBodyLowers = function (grade) {
	return l2.data.tools.findItems(grade, function (item) {
		return item.bodyPart == 'legs';
	});
};
l2.data.tools.findHelmets = function (grade) {
	return l2.data.tools.findItems(grade, function (item) {
		return item.bodyPart == 'head';
	});
};
l2.data.tools.findGloves = function (grade) {
	return l2.data.tools.findItems(grade, function (item) {
		return item.bodyPart == 'gloves';
	});
};
l2.data.tools.findBoots = function (grade) {
	return l2.data.tools.findItems(grade, function (item) {
		return item.bodyPart == 'feet';
	});
};
l2.data.tools.findNecklaces = function (grade) {
	return l2.data.tools.findItems(grade, function (item) {
		return item.bodyPart == 'neck';
	});
};
l2.data.tools.findEarrings = function (grade) {
	return l2.data.tools.findItems(grade, function (item) {
		return item.bodyPart == 'rear;lear';
	});
};
l2.data.tools.findRings = function (grade) {
	return l2.data.tools.findItems(grade, function (item) {
		return item.bodyPart == 'rfinger;lfinger';
	});
};
l2.data.tools.findCloaks = function (grade) {
	return l2.data.tools.findItems(grade, function (item) {
		return item.bodyPart == 'back';
	});
};
l2.data.tools.findUnderwears = function (grade) {
	return l2.data.tools.findItems(grade, function (item) {
		return item.bodyPart == 'underwear';
	});
};
l2.data.tools.findBelts = function (grade) {
	return l2.data.tools.findItems(grade, function (item) {
		return item.bodyPart == 'waist';
	});
};
l2.data.tools.compareAbnormal = function (oldAbn, newAbn) {
	if (oldAbn == newAbn)
		return true;
	if (l2.data.comboBuffs[oldAbn])
		return l2.data.comboBuffs[oldAbn].indexOf(newAbn) >= 0;
	if (l2.data.comboBuffs[newAbn])
		return l2.data.comboBuffs[newAbn].indexOf(oldAbn) >= 0;
	return false;
};