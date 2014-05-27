window.l2 = window.l2 || {};
window.l2.data = window.l2.data || {};
window.l2.data.tools = window.l2.data.tools || {};

l2.data.tools.getArmor = function (id) {
	for (var i = 0; i < l2.data.armor.length; i++)
		if (l2.data.armor[i].id == id)
			return l2.data.armor[i];
	return null;
};
l2.data.tools.getWeapon = function (id) {
	for (var i = 0; i < l2.data.weapons.length; i++)
		if (l2.data.weapons[i].id == id)
			return l2.data.weapons[i];
	return null;
};
l2.data.tools.getSkill = function (id) {
	for (var i = 0; i < l2.data.skills.length; i++)
		if (l2.data.skills[i].id == id)
			return l2.data.skills[i];
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