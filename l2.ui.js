window.l2 = window.l2 || {};
window.l2.ui = window.l2.ui || {};

l2.ui.bindClasses = function () {
	$('#l2class').empty();
	var raceId = $('#race').val();
	var prof = $('#prof').val();
	$.each(l2.data.classes, function () {
		if (l2.data.subRace[this.subRace].race == raceId && this.prof == prof)
			l2.ui.tools.addOption('#l2class', this.id, this.name);
	});
	l2.ui.recalc();
};

l2.ui.bindWeapons = function () {
	var grade = $('#weapon-grade').val();
	var type = $('#weapon-type').val();
	$('#weapon').empty();
	l2.ui.tools.addOption('#weapon', '', 'Unequipped');
	var weapons = [];
	$.each(l2.data.weapons, function () {
		if (this.grade == grade && this.weaponType == type && (this.bodypart == 'rhand' || this.bodypart == 'lrhand'))
			weapons.push(this);
	});
	weapons.sort(function (w1, w2) {
		if (w1.name < w2.name) return -1;
		if (w1.name > w2.name) return 1;
		return 0;
	});
	$.each(weapons, function () {
		l2.ui.tools.addOption('#weapon', this.id, this.name);
	});
};

l2.ui.bindShields = function () {
	var grade = $('#shield-grade').val();
	var type = $('#shield-type').val();
	$('#shield').empty();
	l2.ui.tools.addOption('#shield', '', 'Unequipped');
	var shields = [];
	$.each(l2.data.weapons, function () {
		if (this.grade == grade && this.weaponType == 'none' && this.bodypart == 'lhand' && this.shieldDef > 0)
			shields.push(this);
	});
	shields.sort(function (w1, w2) {
		if (w1.name < w2.name) return -1;
		if (w1.name > w2.name) return 1;
		return 0;
	});
	$.each(shields, function () {
		l2.ui.tools.addOption('#shield', this.id, this.name);
	});	
};

l2.ui.bindSets = function () {
	var grade = $('#set-grade').val();
	$('#set').empty();
	l2.ui.tools.addOption('#set', '', 'Unequipped');
	$.each(l2.data.armorSets, function () {
		var chest = l2.ui.tools.getArmor(this.chest);
		if (chest.grade == grade)
			l2.ui.tools.addOption('#set', this.skillId, l2.ui.tools.getSkill(this.skillId).name);
	});
};

l2.ui.applySet = function () {
	var skillId = $('#set').val();
	var set;
	for (var i = 0; i < l2.data.armorSets.length; i++)
		if (l2.data.armorSets[i].skillId == skillId) {
			set = l2.data.armorSets[i];
			break;
		}
	if (!set)
		return;
	if (set.chest != 0) {
		var armor = l2.ui.tools.getArmor(set.chest);
		$('#body-upper-grade').val(armor.grade);
		l2.ui.bindBodyUpper();
		$('#body-upper').val(set.chest);
	}
	if (set.legs != 0) {
		var armor = l2.ui.tools.getArmor(set.legs);
		$('#body-lower-grade').val(armor.grade);
		l2.ui.bindBodyLower();
		$('#body-lower').val(set.legs);
	}
	if (set.head != 0) {
		var armor = l2.ui.tools.getArmor(set.head);
		$('#helmet-grade').val(armor.grade);
		l2.ui.bindHelmets();
		$('#helmet').val(set.head);
	}
	if (set.gloves != 0) {
		var armor = l2.ui.tools.getArmor(set.gloves);
		$('#gloves-grade').val(armor.grade);
		l2.ui.bindGloves();
		$('#gloves').val(set.gloves);
	}
	if (set.feet != 0) {
		var armor = l2.ui.tools.getArmor(set.feet);
		$('#boots-grade').val(armor.grade);
		l2.ui.bindBoots();
		$('#boots').val(set.feet);
	}
};

l2.ui.bindHelmets = function () {
	var grade = $('#helmet-grade').val();
	$('#helmet').empty();
	l2.ui.tools.addOption('#helmet', '', 'Unequipped');
	var helmets = [];
	$.each(l2.data.armor, function () {
		if (this.grade == grade && this.bodypart == 'head')
			helmets.push(this);
	});
	helmets.sort(function (h1, h2) {
		if (h1.name < h2.name) return -1;
		if (h1.name > h2.name) return 1;
		return 0;
	});
	$.each(helmets, function () {
		l2.ui.tools.addOption('#helmet', this.id, this.name);
	});
};

l2.ui.bindBodyUpper = function () {
	var grade = $('#body-upper-grade').val();
	$('#body-upper').empty();
	l2.ui.tools.addOption('#body-upper', '', 'Unequipped');
	var bodyUpper = [];
	$.each(l2.data.armor, function () {
		if (this.grade == grade && (this.bodypart == 'chest' || this.bodypart == 'fullarmor'))
			bodyUpper.push(this);
	});
	bodyUpper.sort(function (bu1, bu2) {
		if (bu1.name < bu2.name) return -1;
		if (bu1.name > bu2.name) return 1;
		return 0;
	});
	$.each(bodyUpper, function () {
		l2.ui.tools.addOption('#body-upper', this.id, this.name);
	});
};

l2.ui.bindBodyLower = function () {
	var grade = $('#body-lower-grade').val();
	$('#body-lower').empty();
	l2.ui.tools.addOption('#body-lower', '', 'Unequipped');
	var bodyLower = [];
	$.each(l2.data.armor, function () {
		if (this.grade == grade && this.bodypart == 'legs')
			bodyLower.push(this);
	});
	bodyLower.sort(function (bl1, bl2) {
		if (bl1.name < bl2.name) return -1;
		if (bl1.name > bl2.name) return 1;
		return 0;
	});
	$.each(bodyLower, function () {
		l2.ui.tools.addOption('#body-lower', this.id, this.name);
	});
};

l2.ui.bindGloves = function () {
	var grade = $('#gloves-grade').val();
	$('#gloves').empty();
	l2.ui.tools.addOption('#gloves', '', 'Unequipped');
	var gloves = [];
	$.each(l2.data.armor, function () {
		if (this.grade == grade && this.bodypart == 'gloves')
			gloves.push(this);
	});
	gloves.sort(function (g1, g2) {
		if (g1.name < g2.name) return -1;
		if (g1.name > g2.name) return 1;
		return 0;
	});
	$.each(gloves, function () {
		l2.ui.tools.addOption('#gloves', this.id, this.name);
	});
};

l2.ui.bindBoots = function () {
	var grade = $('#boots-grade').val();
	$('#boots').empty();
	l2.ui.tools.addOption('#boots', '', 'Unequipped');
	var boots = [];
	$.each(l2.data.armor, function () {
		if (this.grade == grade && this.bodypart == 'feet')
			boots.push(this);
	});
	boots.sort(function (b1, b2) {
		if (b1.name < b2.name) return -1;
		if (b1.name > b2.name) return 1;
		return 0;
	});
	$.each(boots, function () {
		l2.ui.tools.addOption('#boots', this.id, this.name);
	});
};

l2.ui.bindPassives = function () {
	var classId = $('#l2class').val();
	var lvl = $('#lvl').val();
	var skills = [];
	var classes = [];
	var currClassId = classId;
	while (currClassId != null) {
		var _class = l2.ui.tools.getClass(currClassId);
		classes.push(_class.id);
		currClassId = _class.parent;
	}
	for (var i = 0; i < l2.data.skillTree.length; i++) {
		var st = l2.data.skillTree[i];
		if (classes.indexOf(st.classId) >= 0 && st.minLvl <= lvl)
			if (skills.indexOf(st.skillId) == -1)
				skills.push(st.skillId);
	}
	$('#passives > div.passive-skill').remove();
	for (var i = 0; i < skills.length; i++) {
		var skill = l2.ui.tools.getSkill(skills[i]);
		if (skill && skill.operateType == 'OP_PASSIVE')
			$('#passives').append($('<div>').addClass('left passive-skill').text(skill.name));
	}
};

l2.ui.recalc = function () {

};

$(function () {

	l2.ui.tools = {};
	l2.ui.tools.addOption = function (element, value, text) {
		$(element).append($('<option>').val(value).text(text));
	};
	l2.ui.tools.getArmor = function (id) {
		for (var i = 0; i < l2.data.armor.length; i++)
			if (l2.data.armor[i].id == id)
				return l2.data.armor[i];
		return null;
	};
	l2.ui.tools.getSkill = function (id) {
		for (var i = 0; i < l2.data.skills.length; i++)
			if (l2.data.skills[i].id == id)
				return l2.data.skills[i];
		return null;
	};
	l2.ui.tools.getClass = function (id) {
		for (var i = 0; i < l2.data.classes.length; i++)
			if (l2.data.classes[i].id == id)
				return l2.data.classes[i];
		return null;
	};

	$.each(l2.data.races, function () {
		l2.ui.tools.addOption('#race', this.id, this.name);
	});

	for (var i = 0; i <= 3; i++)
		l2.ui.tools.addOption('#prof', i, i);

	for (var i = 1; i <= 85; i++)
		l2.ui.tools.addOption('#lvl', i, i);

	$('#race').change(l2.ui.bindClasses);
	$('#prof').change(l2.ui.bindClasses);
	l2.ui.bindClasses();
	$('#l2class').change(l2.ui.bindPassives);
	$('#lvl').change(l2.ui.bindPassives);
	l2.ui.bindPassives();

	$.each(l2.data.grades, function () {
		l2.ui.tools.addOption('.grade', this.code, this.name);
	});

	$.each(l2.data.weaponTypes, function () {
		l2.ui.tools.addOption('#weapon-type', this.code, this.name);
	});
	
	$('#weapon-grade').change(l2.ui.bindWeapons);
	$('#weapon-type').change(l2.ui.bindWeapons);
	l2.ui.bindWeapons();
	$('#shield-grade').change(l2.ui.bindShields);
	$('#shield-type').change(l2.ui.bindShields);
	l2.ui.bindShields();
	$('#set-grade').change(l2.ui.bindSets);
	l2.ui.bindSets();
	$('#set').change(l2.ui.applySet);
	$('#helmet-grade').change(l2.ui.bindHelmets);
	l2.ui.bindHelmets();
	$('#body-upper-grade').change(l2.ui.bindBodyUpper);
	l2.ui.bindBodyUpper();
	$('#body-lower-grade').change(l2.ui.bindBodyLower);
	l2.ui.bindBodyLower();
	$('#gloves-grade').change(l2.ui.bindGloves);
	l2.ui.bindGloves();
	$('#boots-grade').change(l2.ui.bindBoots);
	l2.ui.bindBoots();
});
