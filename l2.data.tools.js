window.l2 = window.l2 || {};
window.l2.data = window.l2.data || {};
window.l2.data.tools = window.l2.data.tools || {};

l2.data.tools.getItem = function (id) {
	for (var i = 0; i < l2.data.items.length; i++)
		if (l2.data.items[i].id == id)
			return l2.data.items[i];
	return null;
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
l2.data.tools.getSkillLevels = function (id, classesId) {
	var skillLevels = [];
	for (var i = 0; i < l2.data.skillTree.length; i++) {
		var st = l2.data.skillTree[i];
		if (classesId.indexOf(st.classId) >= 0 && st.skillId == id)
			skillLevels.push(st);
	}
	skillLevels.sort(function (st1, st2) {
		return st1.skillLvl - st2.skillLvl;
	});
	return skillLevels;
};
l2.data.tools.getSkillCurrentLvl = function (id, classesId, lvl) {
	var currLvl = 0;
	for (var i = 0; i < l2.data.skillTree.length; i++) {
		var st = l2.data.skillTree[i];
		if (classesId.indexOf(st.classId) >= 0 && st.skillId == id && st.minLvl <= lvl)
			currLvl = st.skillLvl;
	}
	return currLvl;
};
l2.data.tools.getBaseClasses = function (classId) {
	var classesId = [];
	var currClassId = classId;
	while (currClassId != null) {
		var _class = l2.data.tools.getClass(currClassId);
		classesId.push(_class.id);
		currClassId = _class.parent;
	}
	return classesId;
};
l2.data.tools.getBaseCritital = function (weaponType) {
	for (var i = 0; i < l2.data.weaponBaseData.length; i++)
		if (l2.data.weaponBaseData[i].name == weaponType)
			return l2.data.weaponBaseData[i].baseCritical;
	throw 'Unknown weapon type';
};
l2.data.tools.getBaseAtkSpeed = function (weaponType) {
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
l2.data.tools.findWeapons = function (grade, type) {
	var weapons = l2.data.items.filter(function (item) {
		if (item.weaponType != type)
			return false;
		return (item.grade || 'none') == grade;
	});
	l2.data.tools.sortItems(weapons);
	return weapons;
};
l2.data.tools.findShields = function (grade) {
	var shields = l2.data.items.filter(function (item) {
		if (item.bodyPart != 'lhand' || item.sDef == null)
			return false;
		return (item.grade || 'none') == grade;
	});
	l2.data.tools.sortItems(shields);
	return shields;
};
l2.data.tools.findBodyUppers = function (grade) {
	var bu = l2.data.items.filter(function (item) {
		if (item.bodyPart != 'chest' && item.bodyPart != 'onepiece')
			return false;
		return (item.grade || 'none') == grade;
	});
	l2.data.tools.sortItems(bu);
	return bu;
};
l2.data.tools.findBodyLowers = function (grade) {
	var bl = l2.data.items.filter(function (item) {
		if (item.bodyPart != 'legs')
			return false;
		return (item.grade || 'none') == grade;
	});
	l2.data.tools.sortItems(bl);
	return bl;
};
l2.data.tools.findHelmets = function (grade) {
	var helmets = l2.data.items.filter(function (item) {
		if (item.bodyPart != 'head')
			return false;
		return (item.grade || 'none') == grade;
	});
	l2.data.tools.sortItems(helmets);
	return helmets;
};
l2.data.tools.findGloves = function (grade) {
	var gloves = l2.data.items.filter(function (item) {
		if (item.bodyPart != 'gloves')
			return false;
		return (item.grade || 'none') == grade;
	});
	l2.data.tools.sortItems(gloves);
	return gloves;
};
l2.data.tools.findBoots = function (grade) {
	var boots = l2.data.items.filter(function (item) {
		if (item.bodyPart != 'feet')
			return false;
		return (item.grade || 'none') == grade;
	});
	l2.data.tools.sortItems(boots);
	return boots;
};