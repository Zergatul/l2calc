window.l2 = window.l2 || {};
window.l2.ui = window.l2.ui || {};

l2.ui.disableValuesUpdate = false;
l2.ui.disableStorageUpdate = false;
l2.ui.disableRecalc = false;

l2.ui.modelEquipments = [
	'weapon', 'shield', 'helmet', 'bodyUpper', 'bodyLower', 'boots', 'gloves',
	'underwear', 'belt',
	'necklace', 'earring1', 'earring2', 'ring1', 'ring2'];

l2.ui.bindClasses = function () {
	$('#l2class').empty();
	$.each(l2.data.classes, function () {
		if (l2.data.subRace[this.subRace].race == l2.model.raceId && this.prof == l2.model.prof)
			l2.ui.tools.addOption('#l2class', this.id, this.name);
	});
	l2.model.classId = $('#l2class').val();
};

l2.ui.bindWeapons = function () {
	var grade = $('#weapon-grade').val();
	var type = $('#weapon-type').val();
	$('#weapon').empty();
	l2.ui.tools.addOption('#weapon', '', 'Unequipped');
	var weapons = l2.data.tools.findWeapons(grade, type);
	$.each(weapons, function () {
		l2.ui.tools.addOption('#weapon', this.id, this.name);
	});
	l2.model.weapon.id = null;
};

l2.ui.bindShields = function () {
	var grade = $('#shield-grade').val();
	var type = $('#shield-type').val();
	$('#shield').empty();
	l2.ui.tools.addOption('#shield', '', 'Unequipped');
	var shields = l2.data.tools.findShields(grade);
	$.each(shields, function () {
		var name = this.name;
		if (this.skill != null)
			name = name + ' [Rare]';
		l2.ui.tools.addOption('#shield', this.id, name);
	});	
	l2.model.shield.id = null;
};

l2.ui.bindSets = function () {
	var grade = $('#set-grade').val();
	$('#set').empty();
	l2.ui.tools.addOption('#set', '', 'Unequipped');
	l2.data.armorSets.filter(function (s) {
		return (s.grade || 'none') == grade;
	}).sort(function (s1, s2) {
		var skill1 = l2.data.tools.getSkill(s1.skill[1]);
		var skill2 = l2.data.tools.getSkill(s2.skill[1]);
		if (skill1.name < skill2.name)
			return -1;
		if (skill1.name > skill2.name)
			return 1;
		return 0;
	}).forEach(function (s) {
		var skill = l2.data.tools.getSkill(s.skill[1]);
		l2.ui.tools.addOption('#set', s.id, skill.name);
	});
};

l2.ui.applySet = function () {
	var id = $('#set').val();
	var set = l2.data.tools.getSet(id);
	if (!set)
		return;
	if (set.chest != null) {
		var armor = l2.data.tools.getItem(set.chest[0]);
		l2.model.bodyUpper.grade = armor.grade || 'none';
		l2.model.bodyUpper.id = set.chest[0];
	}
	if (set.legs != null) {
		var armor = l2.data.tools.getItem(set.legs[0]);
		l2.model.bodyLower.grade = armor.grade || 'none';
		l2.model.bodyLower.id = set.legs[0];
	}
	if (set.head != null) {
		var armor = l2.data.tools.getItem(set.head[0]);
		l2.model.helmet.grade = armor.grade || 'none';
		l2.model.helmet.id = set.head[0];
	}
	if (set.gloves != null) {
		var armor = l2.data.tools.getItem(set.gloves[0]);
		l2.model.gloves.grade = armor.grade || 'none';
		l2.model.gloves.id = set.gloves[0];
	}
	if (set.feet != null) {
		var armor = l2.data.tools.getItem(set.feet[0]);
		l2.model.boots.grade = armor.grade || 'none';
		l2.model.boots.id = set.feet[0];
	}
};

l2.ui.checkSet = function (char) {
	var helmet = parseInt($('#helmet').val());
	var bodyUpper = parseInt($('#body-upper').val());
	var bodyLower = parseInt($('#body-lower').val());
	var gloves = parseInt($('#gloves').val());
	var boots = parseInt($('#boots').val());
	var shield = parseInt($('#shield').val());

	var equipedSet = null;
	l2.data.armorSets.forEach(function (set) {
		if (set.chest.indexOf(bodyUpper) == -1)
			return;
		if (set.legs && set.legs.indexOf(bodyLower) == -1)
			return;
		if (set.head && set.head.indexOf(helmet) == -1)
			return;
		if (set.gloves && set.gloves.indexOf(gloves) == -1)
			return;
		if (set.feet && set.feet.indexOf(boots) == -1)
			return;
		equipedSet = set;
	});

	if (equipedSet == null)
		return;

	char.passives.push({ id: equipedSet.skill[1], lvl: 1});
	if (equipedSet.shield && equipedSet.shield.indexOf(shield) >= 0 && equipedSet.shieldSkill != null)
		char.passives.push({ id: equipedSet.shieldSkill, lvl: 1});

	if (equipedSet.str) char.stats.str += equipedSet.str;
	if (equipedSet.dex) char.stats.dex += equipedSet.dex;
	if (equipedSet.con) char.stats.con += equipedSet.con;
	if (equipedSet.int) char.stats.int += equipedSet.int;
	if (equipedSet.wit) char.stats.wit += equipedSet.wit;
	if (equipedSet.men) char.stats.men += equipedSet.men;
};

l2.ui.bindHelmets = function () {
	var grade = $('#helmet-grade').val();
	$('#helmet').empty();
	l2.ui.tools.addOption('#helmet', '', 'Unequipped');
	var helmets = l2.data.tools.findHelmets(grade);
	$.each(helmets, function () {
		if (this.skill)
			l2.ui.tools.addOption('#helmet', this.id, '[Rare] ' + this.name);
		else
			l2.ui.tools.addOption('#helmet', this.id, this.name);
	});
	l2.model.helmet.id = null;
};

l2.ui.bindBodyUpper = function () {
	var grade = $('#body-upper-grade').val();
	$('#body-upper').empty();
	l2.ui.tools.addOption('#body-upper', '', 'Unequipped');
	var bodyUppers = l2.data.tools.findBodyUppers(grade);
	$.each(bodyUppers, function () {
		l2.ui.tools.addOption('#body-upper', this.id, this.name);
	});
	l2.model.bodyUpper.id = null;
};

l2.ui.bindBodyLower = function () {
	var grade = $('#body-lower-grade').val();
	$('#body-lower').empty();
	l2.ui.tools.addOption('#body-lower', '', 'Unequipped');
	var bodyLowers = l2.data.tools.findBodyLowers(grade);
	$.each(bodyLowers, function () {
		l2.ui.tools.addOption('#body-lower', this.id, this.name);
	});
	l2.model.bodyLower.id = null;
};

l2.ui.bindGloves = function () {
	var grade = $('#gloves-grade').val();
	$('#gloves').empty();
	l2.ui.tools.addOption('#gloves', '', 'Unequipped');
	var gloves = l2.data.tools.findGloves(grade);
	$.each(gloves, function () {
		l2.ui.tools.addOption('#gloves', this.id, this.name);
	});
	l2.model.gloves.id = null;
};

l2.ui.bindBoots = function () {
	var grade = $('#boots-grade').val();
	$('#boots').empty();
	l2.ui.tools.addOption('#boots', '', 'Unequipped');
	var boots = l2.data.tools.findBoots(grade);
	$.each(boots, function () {
		l2.ui.tools.addOption('#boots', this.id, this.name);
	});
	l2.model.boots.id = null;
};

l2.ui.bindUnderwears = function () {
	var grade = $('#underwear-grade').val();
	$('#underwear').empty();
	l2.ui.tools.addOption('#underwear', '', 'Unequipped');
	var underwears = l2.data.tools.findUnderwears(grade);
	$.each(underwears, function () {
		l2.ui.tools.addOption('#underwear', this.id, this.name);
	});
	l2.model.underwear.id = null;
};

l2.ui.bindBelts = function () {
	var grade = $('#belt-grade').val();
	$('#belt').empty();
	l2.ui.tools.addOption('#belt', '', 'Unequipped');
	var belts = l2.data.tools.findBelts(grade);
	$.each(belts, function () {
		l2.ui.tools.addOption('#belt', this.id, this.name);
	});
	l2.model.belt.id = null;
};

l2.ui.bindNecklaces = function () {
	var grade = $('#necklace-grade').val();
	$('#necklace').empty();
	l2.ui.tools.addOption('#necklace', '', 'Unequipped');
	var necklaces = l2.data.tools.findNecklaces(grade);
	$.each(necklaces, function () {
		l2.ui.tools.addOption('#necklace', this.id, this.name);
	});
	l2.model.necklace.id = null;
};

l2.ui.bindEarrings = function (index) {
	var grade = $('#earring' + index + '-grade').val();
	$('#earring' + index).empty();
	l2.ui.tools.addOption('#earring' + index, '', 'Unequipped');
	var earrings = l2.data.tools.findEarrings(grade);
	$.each(earrings, function () {
		l2.ui.tools.addOption('#earring' + index, this.id, this.name);
	});
	l2.model['earring' + index].id = null;
};

l2.ui.bindEarrings1 = l2.ui.bindEarrings.bind(null, 1);
l2.ui.bindEarrings2 = l2.ui.bindEarrings.bind(null, 2);

l2.ui.bindRings = function (index) {
	var grade = $('#ring' + index + '-grade').val();
	$('#ring' + index).empty();
	l2.ui.tools.addOption('#ring' + index, '', 'Unequipped');
	var rings = l2.data.tools.findRings(grade);
	$.each(rings, function () {
		l2.ui.tools.addOption('#ring' + index, this.id, this.name);
	});
	l2.model['ring' + index].id = null;
};

l2.ui.bindRings1 = l2.ui.bindRings.bind(null, 1);
l2.ui.bindRings2 = l2.ui.bindRings.bind(null, 2);

l2.ui.bindPassives = function () {
	var classId = $('#l2class').val();
	var lvl = $('#lvl').val();
	var skills = {};
	var classesId = l2.data.tools.getBaseClasses(classId);
	classesId.forEach(function (classId) {
		l2.data.tools.getSkillTree(classId).forEach(function (skill) {
			if (skills[skill.id])
				skills[skill.id].push(skill);
			else
				skills[skill.id] = [skill];
		});
	});
	$('#passives > div > div.passive-skill').remove();
	for (var id in skills) {
		var skill = l2.data.tools.getSkill(id);
		skills[id].sort(function (s1, s2) {
			return s1.lvl - s2.lvl;
		});
		if (skill && skill.operateType == 'P') {
			var div = $('<div>').addClass('left passive-skill');
			var select = $('<select>').attr('data-skill-id', skill.id);
			select.change(l2.ui.recalc);
			l2.ui.tools.addOption(select, '', '---');
			for (var j = 0; j < skills[id].length; j++)
				l2.ui.tools.addOption(select, skills[id][j].lvl, skills[id][j].lvl + ' [' + skills[id][j].minLvl + ']', function (option) {
					option.attr('data-min-lvl', skills[id][j].minLvl);
				});
			if ($('#auto-select-passives').is(':checked'))
				select.attr('disabled', 'disabled');
			div.append(select);
			div.append($('<span>').text(skill.name));
			$('#passives > div').append(div);
		}
	}

	l2.ui.autoSelectPassives();
};

l2.ui.autoSelectPassives = function () {
	if (!$('#auto-select-passives').is(':checked'))
		return;
	var classId = $('#l2class').val();
	var lvl = $('#lvl').val();
	var classesId = l2.data.tools.getBaseClasses(classId);
	$('#passives select').each(function () {
		var skillId = parseInt($(this).attr('data-skill-id'));
		var skillLevel = 0;
		$(this).children('option').each(function () {
			var minLvl = $(this).attr('data-min-lvl');
			if (!minLvl)
				return;
			minLvl = parseInt(minLvl);
			if (minLvl <= lvl)
				skillLevel = $(this).val();
		});
		if (skillLevel == 0)
			$(this).val('');
		else
			$(this).val(skillLevel);
	})
};

l2.ui.checkAbnormalType = function () {
	var select = $(this);
	if (select.val() == '')
		return;
	var abnormal = select.attr('data-abnormal');
	$('#selfbuffs > div > div.self-skill > select, #commonbuffs > div > div > div.common-skill > select').each(function () {
		if (this == select[0])
			return;
		if ($(this).attr('data-abnormal') == abnormal && $(this).val() != '') {
			$(this).val('');
			if ($(this).attr('data-storage'))
				l2.ui.onChangeSaveToStorage.call(this);
		}
	});
};

l2.ui.bindSelfBuffs = function () {
	var classId = $('#l2class').val();
	var skills = {};
	var classesId = l2.data.tools.getBaseClasses(classId);
	classesId.forEach(function (classId) {
		l2.data.tools.getSkillTree(classId).forEach(function (skill) {
			if (skills[skill.id])
				skills[skill.id].push(skill);
			else
				skills[skill.id] = [skill];
		});
	});
	$('#selfbuffs > div > div.self-skill').remove();
	for (var id in skills) {
		var skill = l2.data.tools.getSkill(id);
		skills[id].sort(function (s1, s2) {
			return s1.lvl - s2.lvl;
		});
		if (skill && skill.operateType.charAt(0) == 'A' && (skill.target == 'SELF' || skill.target == 'AURA') && skill.effects && skill.effectType != 'Debuff' && skill.effectType != 'Transformation') {
			var div = $('<div>').addClass('left self-skill');
			var select = $('<select>');
			select.attr('data-skill-id', skill.id);
			select.attr('data-abnormal', skill.abnormalType);
			select.attr('data-storage', 'self-' + skill.id);
			select.change(l2.ui.checkAbnormalType);
			select.change(l2.ui.onChangeSaveToStorage);
			select.change(l2.ui.recalc);
			l2.ui.tools.addOption(select, '', '---');
			for (var j = 0; j < skills[id].length; j++)
				l2.ui.tools.addOption(select, skills[id][j].lvl, skills[id][j].lvl + ' [' + skills[id][j].minLvl + ']');
			div.append(select);
			div.append($('<span>').text(skill.name));
			$('#selfbuffs > div').append(div);
		}
	}
};

l2.ui.bindToggles = function () {
	var classId = $('#l2class').val();
	var skills = {};
	var classesId = l2.data.tools.getBaseClasses(classId);
	classesId.forEach(function (classId) {
		l2.data.tools.getSkillTree(classId).forEach(function (skill) {
			if (skills[skill.id])
				skills[skill.id].push(skill);
			else
				skills[skill.id] = [skill];
		});
	});
	$('#toggles > div > div.toggle-skill').remove();
	for (var id in skills) {
		var skill = l2.data.tools.getSkill(id);
		skills[id].sort(function (s1, s2) {
			return s1.lvl - s2.lvl;
		});
		if (skill && skill.operateType == 'T') {
			var div = $('<div>').addClass('left toggle-skill');
			var select = $('<select>').attr('data-skill-id', skill.id);
			select.attr('data-storage', 'toggle-' + skill.id);
			select.change(l2.ui.onChangeSaveToStorage);
			select.change(l2.ui.recalc);
			l2.ui.tools.addOption(select, '', '---');
			for (var j = 0; j < skills[id].length; j++)
				l2.ui.tools.addOption(select, skills[id][j].lvl, skills[id][j].lvl + ' [' + skills[id][j].minLvl + ']');
			div.append(select);
			div.append($('<span>').text(skill.name));
			$('#toggles > div').append(div);
		}
	}
};

l2.ui.bindClassSkills = function () {
	l2.ui.bindPassives();
	l2.ui.bindSelfBuffs();
	l2.ui.bindToggles();
	l2.ui.autoSelectPassives();
	l2.ui.recalc();
};

l2.ui.bindClassTattos = function () {
	var _class = l2.data.tools.getClass(l2.model.classId);
	l2.model.tatto1.enabled = _class.prof > 0;
	l2.model.tatto2.enabled = _class.prof > 0;
	l2.model.tatto3.enabled = _class.prof > 1;
	/*if (_class.prof == 3)
		_class = l2.data.tools.getClass(_class.parent);
	if (l2.model.tatto1.enabled) {
		l2.model.tatto1.add.enableInt = true;
	}*/
};

l2.ui.bindCommonBuffs = function () {
	l2.data.commonBuffs.forEach(function (group) {
		var stacks = {};
		var groupDiv = $('<div>').addClass('common-skill-group');
		groupDiv.append($('<div>').addClass('left common-skill-group-header').text(group.group));
		$('#commonbuffs > div').append(groupDiv);
		group.ids.forEach(function (id) {
			id = parseInt(id);
			var skill = l2.data.tools.getSkill(id);
			if (skill.abnormalType == null)
				throw 'not implemented';

			if (stacks[skill.abnormalType] == undefined) {
				var div = $('<div>').addClass('left common-skill');
				var select = $('<select>');
				select.attr('data-skill-id', skill.id);
				select.attr('data-abnormal', skill.abnormalType);
				select.attr('data-storage', 'selfbuff-' + skill.id);
				select.change(l2.ui.checkAbnormalType);
				select.change(l2.ui.recalc);
				l2.ui.tools.addOption(select, '', '---');
				if (skill.levels > 1)
					for (var j = 0; j < skill.levels; j++)
						l2.ui.tools.addOption(select, skill.id + ':' + (j + 1), skill.name + ' ' + (j + 1));
				else
					l2.ui.tools.addOption(select, skill.id + ':' + (j + 1), skill.name);
				div.append(select);
				groupDiv.append(div);
				stacks[skill.abnormalType] = { select: select };
			} else {
				if (skill.levels > 1)
					for (var j = 0; j < skill.levels; j++)
						l2.ui.tools.addOption(stacks[skill.abnormalType].select, skill.id + ':' + (j + 1), skill.name + ' ' + (j + 1));
				else
					l2.ui.tools.addOption(stacks[skill.abnormalType].select, skill.id + ':' + (j + 1), skill.name);
			}		
		});
		groupDiv.append($('<div>').addClass('clear'));
	});
};

l2.ui.bindCommonTriggers = function () {
	l2.data.commonTriggers.forEach(function (id) {
		var skill = l2.data.tools.getSkill(id);
		var div = $('<div>').addClass('left trigger-skill');
		var label = $('<label>');
		var input = $('<input>').attr('type', 'checkbox').attr('data-skill-id', id);
		input.change(l2.ui.recalc);
		label.append(input);
		label.append(skill.name);
		div.append(label);
		var select = $('<select>');
		[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].forEach(function (perc) {
			l2.ui.tools.addOption(select, perc, perc + '% of time');
		});
		select.val(100);
		select.change(l2.ui.recalc);
		div.append(select);
		$('#commontriggers > div').append(div);
	});
};

l2.ui.bindSongs = function () {
	for (var i = 0; i < l2.data.songs.length; i++) {
		var skill = l2.data.tools.getSkill(l2.data.songs[i]);
		var div = $('<div>').addClass('left song-skill');
		var label = $('<label>');
		var input = $('<input>').attr('type', 'checkbox')
			.attr('data-skill-id', skill.id)
			.attr('data-storage', 'song-' + skill.id);
		input.change(l2.ui.recalc);
		label.append(input);
		label.append(skill.name);
		div.append(label);
		$('#songbuffs > div').append(div);
	}
};

l2.ui.bindDances = function () {
	for (var i = 0; i < l2.data.dances.length; i++) {
		var skill = l2.data.tools.getSkill(l2.data.dances[i]);
		var div = $('<div>').addClass('left dance-skill');
		var label = $('<label>');
		var input = $('<input>').attr('type', 'checkbox')
			.attr('data-skill-id', skill.id)
			.attr('data-storage', 'dance-' + skill.id);
		input.change(l2.ui.recalc);
		label.append(input);
		label.append(skill.name);
		div.append(label);
		$('#dancebuffs > div').append(div);
	}
};

l2.ui.bindClanSkils = function () {
	l2.data.clanSkills.forEach(function (id) {
		var skill = l2.data.tools.getSkill(id);
		var div = $('<div>').addClass('left clan-skill');
		var select = $('<select>')
			.attr('data-skill-id', id)
			.attr('data-storage', 'clan-' + skill.id)
			.change(l2.ui.recalc);
		l2.ui.tools.addOption(select, '', '---');
		for (var i = 0; i < skill.levels; i++)
			l2.ui.tools.addOption(select, i + 1, i + 1);
		div.append(select);
		div.append($('<span>').text(skill.name));
		$('#clanskills > div:first').append(div);
	});
	l2.data.territorySkills.forEach(function (id) {
		var skill = l2.data.tools.getSkill(id);
		var div = $('<div>').addClass('left clan-skill');
		var label = $('<label>');
		var input = $('<input>')
			.attr('type', 'checkbox')
			.attr('data-skill-id', id)
			.attr('data-storage', 'clan-' + skill.id)
			.click(l2.ui.recalc);		
		label.append(input);
		label.append(skill.name);
		div.append(label);
		$('#clanskills > div:last').append(div);
	});
};

l2.ui.bindBuffs = function () {
	l2.ui.bindCommonBuffs();
	l2.ui.bindCommonTriggers();
	l2.ui.bindSongs();
	l2.ui.bindDances();
	l2.ui.bindClanSkils();
};

l2.ui.canShowDelta = false;
l2.ui.prevStats = null;

l2.ui.consoleTime = function () {
	var date = new Date();
	console.log(date.getSeconds() + ':' + date.getMilliseconds());
};

l2.ui.toggleFieldSet = function () {
	var div = $(this).closest('fieldset').children('div');
	var btn = $(this).closest('label').next('span');
	if ($(this).is(':checked'))
		div.add(btn).show();
	else
		div.add(btn).hide();
};

l2.ui.clearEquipment = function () {
	l2.ui.consoleTime();
	l2.ui.disableRecalc = true;
	l2.ui.modelEquipments.forEach(function (eq) {
		l2.model[eq].id = null;
	});
	l2.ui.disableRecalc = false;
	l2.ui.recalc();
	l2.ui.consoleTime();
};

l2.ui.clearSelfBuffs = function () {
	$('#selfbuffs > div > div.self-skill > select').val('');
	l2.ui.saveAllToStorage();
	l2.ui.recalc();
};

l2.ui.clearToggles = function () {
	$('#toggles > div > div.toggle-skill > select').val('');
	l2.ui.saveAllToStorage();
	l2.ui.recalc();
};

l2.ui.clearCommonBuffs = function () {
	$('#commonbuffs > div > div > div.common-skill > select').val('');
	l2.ui.saveAllToStorage();
	l2.ui.recalc();
};

l2.ui.clearCommonTriggers = function () {
	$('#commontriggers > div > div.trigger-skill > label > input').prop('checked', false);
	l2.ui.saveAllToStorage();
	l2.ui.recalc();
};

l2.ui.clearSongs = function () {
	$('#songbuffs > div > div.song-skill > label > input').prop('checked', false);
	l2.ui.saveAllToStorage();
	l2.ui.recalc();
};

l2.ui.clearDances = function () {
	$('#dancebuffs > div > div.dance-skill > label > input').prop('checked', false);
	l2.ui.saveAllToStorage();
	l2.ui.recalc();
};

l2.ui.clearClanSkills = function () {
	$('#clanskills select').val('');
	$('#clanskills > div > div.clan-skill input').prop('checked', false);
	l2.ui.saveAllToStorage();
	l2.ui.recalc();
};

l2.ui.onGradeChange = function (id, bindFunc) {
	bindFunc();
	id = '#' + id;
	var gradeId = id + '-grade';
	var enchId = id + '-ench';
	$(enchId).val(0).attr('disabled', true);	
	l2.ui.onChangeSaveToStorage.call($(id));
	l2.ui.onChangeSaveToStorage.call($(enchId));
	l2.ui.recalc();
};

l2.ui.onWeaponGradeChange = function () {
	l2.ui.onGradeChange('weapon', l2.ui.bindWeapons);
};

l2.ui.onWeaponTypeChange = function () {
	l2.ui.bindWeapons();
	l2.ui.setupEnchantInput.call($('#weapon')[0]);
	l2.ui.onChangeSaveToStorage.call($('#weapon'));
	l2.ui.recalc();
};

l2.ui.onShieldGradeChange = function () {
	l2.ui.onGradeChange('shield', l2.ui.bindShields);
};

l2.ui.onHelmetGradeChange = function () {
	l2.ui.onGradeChange('helmet', l2.ui.bindHelmets);
};

l2.ui.onBodyUpperGradeChange = function () {
	l2.ui.onGradeChange('body-upper', l2.ui.bindBodyUpper);
};

l2.ui.onBodyLowerGradeChange = function () {
	l2.ui.onGradeChange('body-lower', l2.ui.bindBodyLower);
};

l2.ui.onGlovesGradeChange = function () {
	l2.ui.onGradeChange('gloves', l2.ui.bindGloves);
};

l2.ui.onBootsGradeChange = function () {
	l2.ui.onGradeChange('boots', l2.ui.bindBoots);
};

l2.ui.onUnderwearGradeChange = function () {
	l2.ui.onGradeChange('underwear', l2.ui.bindUnderwears);
};

l2.ui.onBeltGradeChange = function () {
	l2.ui.onGradeChange('belt', l2.ui.bindBelts);
};

l2.ui.onNecklaceGradeChange = function () {
	l2.ui.onGradeChange('necklace', l2.ui.bindNecklaces);
};

l2.ui.onEarring1GradeChange = function () {
	l2.ui.onGradeChange('earring1', l2.ui.bindEarrings1);
};

l2.ui.onEarring2GradeChange = function () {
	l2.ui.onGradeChange('earring2', l2.ui.bindEarrings2);
};

l2.ui.onRing1GradeChange = function () {
	l2.ui.onGradeChange('ring1', l2.ui.bindRings1);
};

l2.ui.onRing2GradeChange = function () {
	l2.ui.onGradeChange('ring2', l2.ui.bindRings2);
};

l2.ui.setupEnchantInput = function () {
	var id = this.id;
	var enchInput = $('#' + id + '-ench');
	if (this.value == '')
		enchInput.attr('disabled', true).val(0);
	else {
		var item = l2.data.tools.getItem(this.value);
		enchInput.attr('disabled', !item.canEnchant);
		if (!item.canEnchant)
			enchInput.val(0);
	}
	l2.ui.onChangeSaveToStorage.call(enchInput);
};

l2.ui.formatPercent = function (val) {
	if (val >= 10)
		return Math.round(val).toString();
	if (val >= 1)
		return val.toFixed(1);
	return val.toFixed(2);
};

l2.ui.highlightStat = function (oldStats, newStats, key, div, mult) {
	div.removeClass('stat-plus stat-minus stat-equal');
	if (oldStats[key] == 0 && newStats[key] == 0)
		div.addClass('stat-equal').text('');
	else
		if (oldStats[key] == 0)
			div.addClass('stat-plus').text(mult ? '+Inf' : '+' + newStats[key]);
		else
			if (oldStats[key] == newStats[key])
				div.addClass('stat-equal').text('');
			else
				if (oldStats[key] < newStats[key])
					div.addClass('stat-plus').text(mult ?
						'+' + l2.ui.formatPercent(100 * (newStats[key] - oldStats[key]) / oldStats[key]) + '%' :
						'+' + (newStats[key] - oldStats[key]));
				else
					div.addClass('stat-minus').text(mult ?
						'-' + l2.ui.formatPercent(100 * (oldStats[key] - newStats[key]) / oldStats[key]) + '%' :
						'-' + (oldStats[key] - newStats[key]));
	div.css({ opacity: 1 }).stop().animate({ opacity: 0 }, 3000);
};

l2.ui.parseSkills = function (array, str) {
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
			array.push({ id: id, lvl: lvl });
		else
			if (prevSkill[0].lvl < lvl)
				prevSkill[0].lvl = lvl;
	})
};

l2.ui.recalc = function () {
	if (l2.ui.disableRecalc)
		return;

	var classId = parseInt($('#l2class').val());
	if (isNaN(classId))
		return;
	var $class = l2.data.tools.getClass(classId);
	var baseStats = l2.data.subRace[$class.subRace];
	var stats = $.extend({}, baseStats.stats);
	var hpPerc = parseInt($('#hpperc').val());

	var char = {
		classId: classId,
		$class: $class,
		stats: stats,
		lvl: parseInt($('#lvl').val()),
		hpPerc: hpPerc,
		atkFrom: $('#atkfrom').val(),
		passives: [],
		buffs: []
	};
	char.lm = (char.lvl + 89) / 100;

	char.enchants = {};
	var processEquip = function (id, name) {
		if (!name)
			name = id;
		if ($('#' + id).val()) {
			char[name] = l2.data.tools.getItem($('#' + id).val());
			char.enchants[name] = parseInt($('#' + id + '-ench').val());
			if (char[name].ench4 && char.enchants[name] >= 4)
				l2.ui.parseSkills(char.passives, char[name].ench4);	
			l2.ui.parseSkills(char.passives, char[name].skill);
		} else
			char[name] = null;
	};
	processEquip('weapon');
	processEquip('shield');
	processEquip('helmet');
	processEquip('body-upper', 'bodyUpper');
	processEquip('body-lower', 'bodyLower');
	processEquip('gloves');
	processEquip('boots');
	processEquip('underwear');
	processEquip('belt');
	processEquip('necklace');
	processEquip('earring1');
	processEquip('earring2');
	processEquip('ring1');
	processEquip('ring2');

	if (char.bodyUpper)
		if (char.bodyUpper.bodyPart == 'onepiece')
			char.armorType = char.bodyUpper.armorType;
		else
			if (char.bodyLower && char.bodyUpper.armorType == char.bodyLower.armorType)
				char.armorType = char.bodyUpper.armorType;

	$('#passives > div > div.passive-skill').each(function () {
		var select = $(this).find('select');
		if (select.val() != '')
			char.passives.push({ id: parseInt(select.attr('data-skill-id')), lvl: parseInt(select.val()) })
	});

	$('#selfbuffs > div > div.self-skill').each(function () {
		var select = $(this).find('select');
		if (select.val() != '')
			char.passives.push({ id: parseInt(select.attr('data-skill-id')), lvl: parseInt(select.val()) })
	});
	$('#toggles > div > div.toggle-skill').each(function () {
		var select = $(this).find('select');
		if (select.val() != '')
			char.passives.push({ id: parseInt(select.attr('data-skill-id')), lvl: parseInt(select.val()) })
	});
	$('#commonbuffs > div > div > div.common-skill').each(function () {
		var select = $(this).find('select');
		if (select.val() != '') {
			var ss = select.val().split(':');
			char.buffs.push({ id: parseInt(ss[0]), lvl: parseInt(ss[1]) })
		}
	});
	$('#commontriggers > div > div.trigger-skill').each(function () {
		var input = $(this).find('input');
		var select = $(this).find('select');
		if (input.is(':checked') && select.val() == '100')
			char.buffs.push({ id : parseInt(input.attr('data-skill-id')), lvl: 1 });
	});
	$('#songbuffs > div > div.song-skill').each(function () {
		var input = $(this).find('input');
		if (input.is(':checked'))
			char.buffs.push({ id : parseInt(input.attr('data-skill-id')), lvl: 1 });
	});
	$('#dancebuffs > div > div.dance-skill').each(function () {
		var input = $(this).find('input');
		if (input.is(':checked'))
			char.buffs.push({ id : parseInt(input.attr('data-skill-id')), lvl: 1 });
	});
	$('#clanskills > div:first > div.clan-skill').each(function () {
		var select = $(this).find('select');
		if (select.val() != '')
			char.passives.push({ id: parseInt(select.attr('data-skill-id')), lvl: parseInt(select.val()) })
	});
	$('#clanskills > div:last > div.clan-skill').each(function () {
		var input = $(this).find('input');
		if (input.is(':checked'))
			char.buffs.push({ id : parseInt(input.attr('data-skill-id')), lvl: 1 });
	});

	l2.ui.checkSet(char);

	l2.calc.stats(char);

	for (var i = 1; i <= 3; i++) {
		var div = $('#tatoo-slot-' + i);
		if (div.find('input[type=checkbox]').is(':checked')) {
			stats[div.find('select:eq(0)').val()] += parseInt(div.find('select:eq(1)').val());
			stats[div.find('select:eq(2)').val()] += parseInt(div.find('select:eq(3)').val());
		}
	}

	for (var stat in stats)
		if (stats[stat] < 0)
			stats[stat] = 0;

	$('#str').text(stats.str);
	$('#dex').text(stats.dex);
	$('#con').text(stats.con);
	$('#int').text(stats.int);
	$('#wit').text(stats.wit);
	$('#men').text(stats.men);

	char.hp = l2.calc.HP(char);
	char.cp = l2.calc.CP(char);
	char.pDef = l2.calc.pDef(char);
	char.pAtk = l2.calc.pAtk(char);
	char.mAtk = l2.calc.mAtk(char);
	char.accuracy = l2.calc.accuracy(char);
	char.pCritical = l2.calc.pCritical(char);
	char.pCritMultiplier = l2.calc.pCritMultiplier(char);
	char.pCritAtk = l2.calc.pCritAtk(char);
	char.atkSpeed = l2.calc.atkSpeed(char);
	char.castSpeed = l2.calc.castSpeed(char);
	char.speed = l2.calc.speed(char);
	char.evasion = l2.calc.evasion(char);
	char.mDef = l2.calc.mDef(char);
	char.pDPS = l2.calc.pDPS(char);
	$('#hp').text(char.hp);
	$('#cp').text(char.cp);
	$('#pdef').text(char.pDef);
	$('#patk').text(char.pAtk);
	$('#matk').text(char.mAtk);
	$('#accuracy').text(char.accuracy);
	$('#pcritical').text(char.pCritical);
	$('#pcritmult').text(char.pCritMultiplier.toFixed(5));
	$('#atkspd').text(char.atkSpeed);
	$('#castspd').text(char.castSpeed);
	$('#speed').text(char.speed);
	$('#evasion').text(char.evasion);
	$('#mdef').text(char.mDef);
	$('#pdps').text(l2.ui.tools.formatNumber(Math.round(char.pDPS)));
	$('#patkcrit').text(char.pCritAtk);

	var prevStats = l2.ui.prevStats;
	l2.ui.prevStats = char;

	if (l2.ui.canShowDelta && prevStats) {
		l2.ui.highlightStat(prevStats, char, 'hp', $('#hp').next(), 1);
		l2.ui.highlightStat(prevStats, char, 'cp', $('#cp').next(), 1);
		l2.ui.highlightStat(prevStats, char, 'pDef', $('#pdef').next(), 1);
		l2.ui.highlightStat(prevStats, char, 'pAtk', $('#patk').next(), 1);
		l2.ui.highlightStat(prevStats, char, 'atkSpeed', $('#atkspd').next(), 1);
		l2.ui.highlightStat(prevStats, char, 'pDPS', $('#pdps').next(), 1);
		l2.ui.highlightStat(prevStats, char, 'mAtk', $('#matk').next(), 1);
		l2.ui.highlightStat(prevStats, char, 'castSpeed', $('#castspd').next(), 1);
		l2.ui.highlightStat(prevStats, char, 'mDef', $('#mdef').next(), 1);
		l2.ui.highlightStat(prevStats, char, 'accuracy', $('#accuracy').next(), 0);
		l2.ui.highlightStat(prevStats, char, 'pCritical', $('#pcritical').next(), 0);
		l2.ui.highlightStat(prevStats, char, 'evasion', $('#evasion').next(), 0);
		l2.ui.highlightStat(prevStats, char, 'speed', $('#speed').next(), 0);
	}
};

l2.ui.adjustContainer = function () {
	var height = $(window).height() - Math.round($('#container').position().top) - 28;
	$('#container').height(Math.max(200, height));
	var width = $('#equipment').outerWidth() + 32;
	$('#container').width(width);
};

l2.ui.bindProfessionFieldSet = function () {
	$.each(l2.data.races, function () {
		l2.ui.tools.addOption('#race', this.id, this.name);
	});

	for (var i = 0; i <= 3; i++)
		l2.ui.tools.addOption('#prof', i, i);

	for (var i = 1; i <= 85; i++)
		l2.ui.tools.addOption('#lvl', i, i);

	[100, 60, 30].forEach(function (hp) {
		l2.ui.tools.addOption('#hpperc', hp, hp + ' %');
	});

	['front', 'side', 'behind'].forEach(function (from) {
		l2.ui.tools.addOption('#atkfrom', from, from);
	});
};

l2.ui.bindBaseStatsFieldSet = function () {
	$.each(['str', 'dex', 'con', 'int', 'wit', 'men'], function () {
		l2.ui.tools.addOption('.tatoo-stat', this, this.toUpperCase());
	});
	for (var i = 1; i <= 4; i++)
		l2.ui.tools.addOption('.tatoo-plus', i, '+' + i);
	for (var i = 1; i <= 6; i++)
		l2.ui.tools.addOption('.tatoo-minus', -i, '-' + i);
};

l2.ui.bindEquipmentFieldSet = function () {
	$.each(l2.data.grades, function () {
		l2.ui.tools.addOption('.grade', this.code, this.name);
	});

	$.each(l2.data.weaponTypes, function () {
		l2.ui.tools.addOption('#weapon-type', this.code, this.name);
	});

	$('#set').change(l2.ui.applySet);
};

l2.ui.prepareModel = function () {
	$('[data-model]').each(function () {
		var element = $(this);
		var model = element.attr('data-model');
		l2.model.addHandler(model, function (value) {
			if (!l2.ui.disableValuesUpdate)
				if (model.indexOf('.grade') > 0 || model == 'setGrade')
					element.val(value || 'none');
				else
					if (element.is('input[type=checkbox]'))
						element.attr('checked', value);
					else
						element.val(value);
			else
				l2.ui.disableValuesUpdate = false;
		});
		l2.model.addHandler(model, function (value) {
			if (!l2.ui.disableStorageUpdate)
				localStorage['c:' + model] = value == null ? '' : value;
		});
	}).change(function () {
		l2.ui.disableValuesUpdate = true;
		if ($(this).is('input[type=checkbox]'))
			l2.model.setValue($(this).attr('data-model'), $(this).is(':checked'));
		else
			l2.model.setValue($(this).attr('data-model'), $(this).val());
		l2.ui.disableValuesUpdate = false;
	});

	l2.model.addHandler('raceId', l2.ui.bindClasses);
	l2.model.addHandler('prof', l2.ui.bindClasses);
	l2.model.addHandler('classId', l2.ui.bindClassSkills);
	l2.model.addHandler('classId', l2.ui.bindClassTattos);
	l2.model.addHandler('level', l2.ui.autoSelectPassives);

	l2.model.addHandler('tatto1.enabled', function (value) {
		$('#tatoo-slot-1 input, #tatoo-slot-1 select').attr('disabled', !value);
	});
	l2.model.addHandler('tatto2.enabled', function (value) {
		$('#tatoo-slot-2 input, #tatoo-slot-2 select').attr('disabled', !value);
	});
	l2.model.addHandler('tatto3.enabled', function (value) {
		$('#tatoo-slot-3 input, #tatoo-slot-3 select').attr('disabled', !value);
	});

	l2.model.addHandler('weapon.type', l2.ui.bindWeapons);
	l2.model.addHandler('weapon.grade', l2.ui.bindWeapons);
	l2.model.addHandler('shield.grade', l2.ui.bindShields);
	l2.model.addHandler('helmet.grade', l2.ui.bindHelmets);
	l2.model.addHandler('bodyUpper.grade', l2.ui.bindBodyUpper);
	l2.model.addHandler('bodyLower.grade', l2.ui.bindBodyLower);
	l2.model.addHandler('gloves.grade', l2.ui.bindGloves);
	l2.model.addHandler('boots.grade', l2.ui.bindBoots);
	l2.model.addHandler('underwear.grade', l2.ui.bindUnderwears);
	l2.model.addHandler('belt.grade', l2.ui.bindBelts);
	l2.model.addHandler('necklace.grade', l2.ui.bindNecklaces);
	l2.model.addHandler('earring1.grade', l2.ui.bindEarrings1);
	l2.model.addHandler('earring2.grade', l2.ui.bindEarrings2);
	l2.model.addHandler('ring1.grade', l2.ui.bindRings1);
	l2.model.addHandler('ring2.grade', l2.ui.bindRings2);

	l2.model.addHandler('weapon.id', function () {
		var item = l2.model.weapon.item;
		l2.model.shield.disabled = item && ['bow', 'pole', 'bigsword', 'bigblunt'].indexOf(item.weaponType) >= 0;
	});

	l2.model.addHandler('bodyUpper.id', function () {
		var item = l2.model.bodyUpper.item;
		l2.model.bodyLower.disabled = item && item.bodyPart == 'onepiece';
	});

	l2.ui.modelEquipments.forEach(function (eq) {
		l2.model.addHandler(eq + '.canEnchant', function (value) {
			$('[data-model="' + eq + '.enchant"]').attr('disabled', !value);
		});
		l2.model.addHandler(eq + '.disabled', function (value) {
			$('[data-model="' + eq + '.grade"]').attr('disabled', value);
			$('[data-model="' + eq + '.enchant"]').attr('disabled', value || !l2.model[eq].canEnchant);
			$('[data-model="' + eq + '.id"]').attr('disabled', value);
		});
		l2.model.addHandler(eq + '.id', function () {
			var item = l2.model[eq].item;
			l2.model[eq].canEnchant = item && item.canEnchant;
		});
	});

	l2.model.addHandler('setGrade', l2.ui.bindSets);

	l2.model.addGlobalHandler(l2.ui.recalc);
};

$(function () {

	window.onerror = function (msg) {
		alert(msg);
	};

	l2.ui.disableStorageUpdate = true;

	l2.ui.prepareModel();

	l2.ui.bindProfessionFieldSet();
	l2.ui.bindBaseStatsFieldSet();
	l2.ui.bindEquipmentFieldSet();

	l2.model.raceId = 0;
	l2.model.prof = 0;
	l2.model.classId = 0;
	l2.model.level = 1;
	l2.model.hpPercent = 100;
	l2.model.position = 'front';

	l2.model.tatto1.add.stat = 'str';
	l2.model.tatto1.add.val = 1;
	l2.model.tatto1.sub.stat = 'str';
	l2.model.tatto1.sub.val = -1;
	l2.model.tatto2.add.stat = 'str';
	l2.model.tatto2.add.val = 1;
	l2.model.tatto2.sub.stat = 'str';
	l2.model.tatto2.sub.val = -1;
	l2.model.tatto3.add.stat = 'str';
	l2.model.tatto3.add.val = 1;
	l2.model.tatto3.sub.stat = 'str';
	l2.model.tatto3.sub.val = -1;

	l2.model.weapon.type = 'bigsword';
	l2.ui.modelEquipments.forEach(function (eq) {
		l2.model[eq].grade = 'none';
		l2.model[eq].id = null;
	});
	l2.model.setGrade = 'none';

	l2.ui.bindBuffs();

	$('#equipment-chb').click(l2.ui.toggleFieldSet);
	$('#selfbuffs-chb').click(l2.ui.toggleFieldSet);
	$('#toggles-chb').click(l2.ui.toggleFieldSet);
	$('#commonbuffs-chb').click(l2.ui.toggleFieldSet);
	$('#songbuffs-chb').click(l2.ui.toggleFieldSet);
	$('#dancebuffs-chb').click(l2.ui.toggleFieldSet);
	$('#passives-chb').click(l2.ui.toggleFieldSet);
	$('#commontriggers-chb').click(l2.ui.toggleFieldSet);
	$('#clanskills-chb').click(l2.ui.toggleFieldSet);

	$('#equipment span.clear-btn').click(l2.ui.clearEquipment);
	$('#selfbuffs span.clear-btn').click(l2.ui.clearSelfBuffs);
	$('#toggles span.clear-btn').click(l2.ui.clearToggles);
	$('#commonbuffs span.clear-btn').click(l2.ui.clearCommonBuffs);
	$('#commontriggers span.clear-btn').click(l2.ui.clearCommonTriggers);
	$('#songbuffs span.clear-btn').click(l2.ui.clearSongs);
	$('#dancebuffs span.clear-btn').click(l2.ui.clearDances);
	$('#clanskills span.clear-btn').click(l2.ui.clearClanSkills);

	$('#auto-select-passives').click(function () {
		if ($(this).is(':checked')) {
			$('#passives > div > div.passive-skill > select').attr('disabled', true);
			l2.ui.autoSelectPassives();
		} else
			$('#passives > div > div.passive-skill > select').attr('disabled', false);
		l2.ui.recalc();
	});

	$('.eq-enchant > input').val('0').attr('disabled', true).change(function () {
		var val = parseInt($(this).val());
		if (isNaN(val) || val < 0)
			val = 0;
		if ($(this).val() != val.toString())
			$(this).val(val);
		l2.ui.recalc();
	});

	$(window).resize(l2.ui.adjustContainer);
	l2.ui.adjustContainer();

	// new !!!

	var saved = [];
	for (var property in localStorage)
		if (property.indexOf('c:') == 0)
			saved.push({
				model: property.substring(2)
			});
	saved.forEach(function (m) {
		m.elements = $('[data-model="' + m.model + '"]');
	});
	saved.sort(function (m1, m2) {
		var lo1 = parseInt(m1.elements.attr('data-load-order')) || 0;
		var lo2 = parseInt(m2.elements.attr('data-load-order')) || 0;
		return lo2 - lo1;
	});
	saved.forEach(function (m) {
		l2.model.setValue(m.model, localStorage['c:' + m.model]);
	});

	l2.ui.disableStorageUpdate = false;

	// end new !!!

	l2.ui.canShowDelta = true;
});