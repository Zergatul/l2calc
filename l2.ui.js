window.l2 = window.l2 || {};
window.l2.ui = window.l2.ui || {};

l2.ui.disableValuesUpdate = false;
l2.ui.disableStorageUpdate = false;
l2.ui.disableRecalc = false;
l2.ui.loadingProcess = false;

l2.ui.storagePrefix = 'c:';
l2.ui.savesPrefix = 'save:';
l2.ui.modelEquipments = [
	'weapon', 'shield', 'helmet', 'bodyUpper', 'bodyLower', 'boots', 'gloves',
	'cloak', 'underwear', 'belt',
	'necklace', 'earring1', 'earring2', 'ring1', 'ring2'];

l2.ui.fieldsets = [
	'equipment', 'selfBuffs', 'toggles',
	'triggers', 'commonBuffs', 'songs',
	'dances', 'clanSkills', 'subClassSkills',
	'transforms',
	'passives'];

l2.ui.bindClasses = function () {
	$('#l2class').empty();
	$.each(l2.data.classes, function () {
		if (l2.data.subRace[this.subRace].race == l2.model.raceId && this.prof == l2.model.prof)
			l2.ui.tools.addOption('#l2class', this.id, this.name);
	});
	l2.model.classId = $('#l2class').val();
};

l2.ui.createBindItemsFunction = function (elementId, model, findFunc) {
	return function () {
		var element = $('#' + elementId);
		element.empty();
		l2.ui.tools.addOption(element, '', 'Unequipped');
		var grade = l2.model[model].grade;
		var type = l2.model[model].type;
		findFunc(grade, type).forEach(function (item) {
			var opt = l2.ui.tools.addOption(element, item.id, item.name);
			if (item.skill)
				opt.css('color', '#CCCC00');
		});
		l2.model[model].id = null;
	};
};

l2.ui.bindSets = function () {
	$('#set').empty();
	l2.ui.tools.addOption('#set', '', 'Unequipped');
	var grade = l2.model.setGrade;
	l2.data.armorSets.filter(function (set) {
		return set.grade == grade;
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
	l2.ui.disableRecalc = true;
	if (set.chest != null) {
		var armor = l2.data.tools.getItem(set.chest[0]);
		l2.model.bodyUpper.grade = armor.grade;
		l2.model.bodyUpper.id = set.chest[0];
	}
	if (set.legs != null) {
		var armor = l2.data.tools.getItem(set.legs[0]);
		l2.model.bodyLower.grade = armor.grade;
		l2.model.bodyLower.id = set.legs[0];
	}
	if (set.head != null) {
		var armor = l2.data.tools.getItem(set.head[0]);
		l2.model.helmet.grade = armor.grade;
		l2.model.helmet.id = set.head[0];
	}
	if (set.gloves != null) {
		var armor = l2.data.tools.getItem(set.gloves[0]);
		l2.model.gloves.grade = armor.grade;
		l2.model.gloves.id = set.gloves[0];
	}
	if (set.feet != null) {
		var armor = l2.data.tools.getItem(set.feet[0]);
		l2.model.boots.grade = armor.grade;
		l2.model.boots.id = set.feet[0];
	}
	l2.ui.disableRecalc = false;
	l2.ui.recalc();
};

l2.ui.bindPassives = function () {
	var skills = {};
	var classesId = l2.data.tools.getBaseClasses(l2.model.classId);
	classesId.forEach(function (classId) {
		l2.data.tools.getSkillTree(classId).forEach(function (skill) {
			if (skills[skill.id])
				skills[skill.id].push(skill);
			else
				skills[skill.id] = [skill];
		});
	});
	l2.model.passives.clear();
	for (var id in skills) {
		var skill = l2.data.tools.getSkill(id);
		skills[id].sort(function (s1, s2) {
			return s1.lvl - s2.lvl;
		});
		if (skill && skill.operateType == 'P')
			l2.model.passives.add(skill.id, skills[id]);
	}

	$('#passives > div > div.passive-skill').remove();
	l2.model.passives.forEach(function (ps) {
		var skill = ps.skill;
		var div = $('<div>').addClass('left passive-skill');
		var select = $('<select>').attr('data-skill-id', skill.id);
		select.change(l2.ui.createChangeSkillListHandler('passives', skill.id));
		l2.ui.tools.addOption(select, '', '---');
		for (var i = 0; i < ps.data.length; i++)
			l2.ui.tools.addOption(select, ps.data[i].lvl, ps.data[i].lvl + ' [' + ps.data[i].minLvl + ']');
		if (l2.model.autoSelectPassives)
			select.attr('disabled', true);
		div.append(select);
		div.append($('<span>').text(skill.name));
		$('#passives > div').append(div);
	});

	l2.ui.autoSelectPassives();
};

l2.ui.autoSelectPassives = function () {
	if (!l2.model.autoSelectPassives)
		return;

	var prev = l2.ui.disableRecalc;
	l2.ui.disableRecalc = true;
	var classesId = l2.data.tools.getBaseClasses(l2.model.classId);
	l2.model.passives.forEach(function (ps) {
		var skillLevel = 0;
		for (var i = 0; i < ps.data.length; i++)
			if (ps.data[i].minLvl <= l2.model.level && skillLevel < ps.data[i].lvl)
				skillLevel = ps.data[i].lvl;
		ps.level = skillLevel;
	});
	l2.ui.disableRecalc = prev;
	l2.ui.recalc();
};

l2.ui.autoSelectTransformPassives = function () {
	l2.model.transformPassives.forEach(function (s) {
		var tpInfo = l2.data.transformPassives[s.id];
		if (tpInfo == null)
			console.log('Transform passive skill no info!');
		else {
			s.level = tpInfo.getLevel(l2.model.level);
		}
	});
};

l2.ui.createChangeSkillListHandler = function (type, id) {
	return function () {
		l2.ui.disableValuesUpdate = true;
		if ($(this).is('select'))
			l2.model[type].findById(id).level = $(this).val();
		if ($(this).is('input[type=checkbox]'))
			l2.model[type].findById(id).level = $(this).is(':checked') ? 1 : 0;
		l2.ui.disableValuesUpdate = false;
	};
};

l2.ui.bindSelfBuffs = function () {
	var skills = {};
	var classesId = l2.data.tools.getBaseClasses(l2.model.classId);
	classesId.forEach(function (classId) {
		l2.data.tools.getSkillTree(classId).forEach(function (skill) {
			if (skills[skill.id])
				skills[skill.id].push(skill);
			else
				skills[skill.id] = [skill];
		});
	});
	l2.model.selfBuffs.clear();
	for (var id in skills) {
		var skill = l2.data.tools.getSkill(id);
		skills[id].sort(function (s1, s2) {
			return s1.lvl - s2.lvl;
		});
		if (skill && skill.operateType.charAt(0) == 'A' && (skill.target == 'SELF' || skill.target == 'AURA') && skill.effects && skill.effectType != 'Debuff' && skill.effectType != 'Transformation')
			l2.model.selfBuffs.add(skill.id, skills[id]);
	}

	$('#selfbuffs > div > div.self-skill').remove();
	l2.model.selfBuffs.forEach(function (sb) {
		var skill = sb.skill;
		var div = $('<div>').addClass('left self-skill');
		var select = $('<select>');
		select.attr('data-skill-id', skill.id);
		select.change(l2.ui.createChangeSkillListHandler('selfBuffs', skill.id));
		l2.ui.tools.addOption(select, '', '---');
		for (var i = 0; i < sb.data.length; i++)
			l2.ui.tools.addOption(select, sb.data[i].lvl, sb.data[i].lvl + ' [' + sb.data[i].minLvl + ']');
		div.append(select);
		div.append($('<span>').text(skill.name));
		$('#selfbuffs > div').append(div);
	});
};

l2.ui.clearSelfTriggers = function () {
	var selfTogglesIds = [];
	l2.model.triggers.forEach(function (t) {
		if (l2.data.commonTriggers.indexOf(t.id) == -1)
			selfTogglesIds.push(t.id);
	});
	for (var i = 0; i < selfTogglesIds.length; i++)
		l2.model.triggers.removeById(selfTogglesIds[i]);
};

l2.ui.bindToggles = function () {
	var skills = {};
	var classesId = l2.data.tools.getBaseClasses(l2.model.classId);
	classesId.forEach(function (classId) {
		l2.data.tools.getSkillTree(classId).forEach(function (skill) {
			if (skills[skill.id])
				skills[skill.id].push(skill);
			else
				skills[skill.id] = [skill];
		});
	});
	l2.model.toggles.clear();	
	for (var id in skills) {
		var skill = l2.data.tools.getSkill(id);
		skills[id].sort(function (s1, s2) {
			return s1.lvl - s2.lvl;
		});
		if (skill && skill.operateType == 'T')
			l2.model.toggles.add(skill.id, skills[id]);
	}

	$('#toggles > div > div.toggle-skill').remove();
	l2.model.toggles.forEach(function (t) {
		var skill = t.skill;
		var div = $('<div>').addClass('left toggle-skill');
		var select = $('<select>');
		select.attr('data-skill-id', skill.id);
		select.change(l2.ui.createChangeSkillListHandler('toggles', skill.id));
		l2.ui.tools.addOption(select, '', '---');
		for (var j = 0; j < t.data.length; j++)
			l2.ui.tools.addOption(select, t.data[j].lvl, t.data[j].lvl + ' [' + t.data[j].minLvl + ']');
		div.append(select);
		div.append($('<span>').text(skill.name));
		$('#toggles > div').append(div);
	});
};

l2.ui.bindSelfTransforms = function () {
	var skills = {};
	var classesId = l2.data.tools.getBaseClasses(l2.model.classId);
	classesId.forEach(function (classId) {
		l2.data.tools.getSkillTree(classId).forEach(function (skill) {
			if (skills[skill.id])
				skills[skill.id].push(skill);
			else
				skills[skill.id] = [skill];
		});
	});
	l2.model.transforms.clear();
	for (var id in skills) {
		var skill = l2.data.tools.getSkill(id);
		skills[id].sort(function (s1, s2) {
			return s1.lvl - s2.lvl;
		});
		if (skill && skill.effectType == 'Transformation' && skill.abnormalType == 'transform')
			l2.model.transforms.add(skill.id, skills[id]);
	}

	if ($('#trans-main input[type=checkbox]:checked')) {
		l2.ui.disableValuesUpdate = true;
		l2.model.transformId = null;
		l2.ui.disableValuesUpdate = false;
	}
	$('#trans-main > div.trans-skill:gt(0)').remove();
	l2.model.transforms.forEach(function (sb) {
		var skill = sb.skill;
		if (l2.data.skipTransformations.indexOf(skill.id) >= 0)
			return;
		var div = $('<div>').addClass('left trans-skill');
		var label = $('<label>');
		var input = $('<input>').attr('type', 'checkbox')
			.attr('data-skill-id', skill.id)
		input.change(function () {
			l2.ui.disableValuesUpdate = true;
			if (input.is(':checked')) {
				l2.model.transformId = skill.id;
				$('#trans-main select').val('');
				$('#trans-main input[type=checkbox]').each(function () {
					if (this == input[0])
						return;
					this.checked = false;
				});
			} else
				l2.model.transformId = null;
			l2.ui.disableValuesUpdate = false;
			l2.ui.bindTransformSkills();
		});
		label.append(input);
		label.append(skill.name);
		div.append(label);
		$('#trans-main').append(div);
	});
};

l2.ui.bindTransformSkills = function () {
	l2.model.transformBuffs.clear();
	l2.model.transformPassives.clear();
	$('#trans-passives').empty();
	$('#trans-self-buffs').empty();

	if (l2.model.transformId != null) {
		var transInfo = l2.data.transforms[l2.model.transformId];
		if (transInfo != null) {
			if (transInfo.passives)
				transInfo.passives.forEach(function (id) {
					var skill = l2.data.tools.getSkill(id);
					var select = $('<select>')
						.attr('disabled', true)
						.attr('data-skill-id', id);
					l2.ui.tools.addOption(select, '---', '');
					for (var i = 0; i < skill.levels; i++)
						l2.ui.tools.addOption(select, i + 1, i + 1);
					var div = $('<div>').addClass('left trans-skill');
					div.append(select).append($('<span>').text(skill.name));
					$('#trans-passives').append(div);

					l2.model.transformPassives.add(id);
				});
			l2.ui.autoSelectTransformPassives();
			if (transInfo.buffs)
				transInfo.buffs.forEach(function (id) {
					var skill = l2.data.tools.getSkill(id);
					var select = $('<select>')
						.attr('data-skill-id', id);
					select.change(l2.ui.createChangeSkillListHandler('transformBuffs', skill.id));
					l2.ui.tools.addOption(select, '---', '');
					for (var i = 0; i < skill.levels; i++)
						l2.ui.tools.addOption(select, i + 1, i + 1);
					var div = $('<div>').addClass('left trans-skill');
					div.append(select).append($('<span>').text(skill.name));
					$('#trans-self-buffs').append(div);

					l2.model.transformBuffs.add(id);
				});
		}
	}
};

l2.ui.bindClassSkillsAndTatoo = function () {
	l2.ui.disableRecalc = true;
	l2.ui.clearSelfTriggers();
	l2.ui.bindPassives();
	l2.ui.bindSelfBuffs();
	l2.ui.bindToggles();
	l2.ui.bindSelfTransforms();
	l2.ui.autoSelectPassives();
	l2.ui.bindClassTatoos();
	l2.ui.disableRecalc = false;
};

l2.ui.isForbidMen = function () {
	var _class = l2.data.tools.getClass(l2.model.classId);
	if (_class.prof == 3)
		_class = l2.data.tools.getClass(_class.parent);
	return _class.forbidMen;
};

l2.ui.isForbidInt = function () {
	var _class = l2.data.tools.getClass(l2.model.classId);
	if (_class.prof == 3)
		_class = l2.data.tools.getClass(_class.parent);
	return _class.forbidInt;
};

l2.ui.bindClassTatoos = function () {
	var _class = l2.data.tools.getClass(l2.model.classId);
	l2.model.tatoo1.enabled = _class.prof > 0;
	l2.model.tatoo2.enabled = _class.prof > 0;
	l2.model.tatoo3.enabled = _class.prof > 1;
	if (_class.prof == 3)
		_class = l2.data.tools.getClass(_class.parent);
	for (var i = 1; i <= 3; i++) {
		var slot = l2.model['tatoo' + i];
		slot.add.maxValue = _class.prof <= 1 ? 1 : 4;
		if (slot.enabled) {
			slot.add.enableAll();
			if (_class.forbidMen)
				slot.add.enableMen = false;
			if (_class.forbidInt)
				slot.add.enableInt = false;
			slot.add.stat = slot.add.stat;
		}
	}
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
				select.change(function () {
					l2.ui.disableValuesUpdate = true;
					if ($(this).val() != '') // disable recalc when we check other value from select
						l2.ui.disableRecalc = true;
					$(this).children().each(function () {
						if (this.value == '')
							return;
						var id = parseInt(this.value.split(':')[0]);
						l2.model.commonBuffs.removeById(id);
					});
					l2.ui.disableRecalc = false;
					if ($(this).val() != '') {
						var ss = $(this).val().split(':');
						var id = parseInt(ss[0]);
						var level = parseInt(ss[1]);
						l2.model.commonBuffs.add(id, null, level);
					}
					l2.ui.disableValuesUpdate = false;
				});
				l2.ui.tools.addOption(select, '', '---');
				if (skill.levels > 1)
					for (var j = 0; j < skill.levels; j++)
						l2.ui.tools.addOption(select, skill.id + ':' + (j + 1), skill.name + ' ' + (j + 1));
				else
					l2.ui.tools.addOption(select, skill.id + ':1', skill.name);
				div.append(select);
				groupDiv.append(div);
				stacks[skill.abnormalType] = { select: select };
			} else {
				if (skill.levels > 1)
					for (var j = 0; j < skill.levels; j++)
						l2.ui.tools.addOption(stacks[skill.abnormalType].select, skill.id + ':' + (j + 1), skill.name + ' ' + (j + 1));
				else
					l2.ui.tools.addOption(stacks[skill.abnormalType].select, skill.id + ':1', skill.name);
			}		
		});
		groupDiv.append($('<div>').addClass('clear'));
	});
};

l2.ui.bindSongs = function () {
	for (var i = 0; i < l2.data.songs.length; i++) {
		var skill = l2.data.tools.getSkill(l2.data.songs[i]);
		var div = $('<div>').addClass('left song-skill');
		var label = $('<label>');
		var input = $('<input>').attr('type', 'checkbox')
			.attr('data-skill-id', skill.id)
		input.change(l2.ui.createChangeSkillListHandler('songs', skill.id));
		l2.model.songs.add(skill.id);
		label.append(input);
		label.append(skill.name);
		div.append(label);
		$('#songs > div').append(div);
	}
};

l2.ui.bindDances = function () {
	for (var i = 0; i < l2.data.dances.length; i++) {
		var skill = l2.data.tools.getSkill(l2.data.dances[i]);
		var div = $('<div>').addClass('left dance-skill');
		var label = $('<label>');
		var input = $('<input>').attr('type', 'checkbox')
			.attr('data-skill-id', skill.id);
		input.change(l2.ui.createChangeSkillListHandler('dances', skill.id));
		l2.model.dances.add(skill.id);
		label.append(input);
		label.append(skill.name);
		div.append(label);
		$('#dances > div').append(div);
	}
};

l2.ui.bindClanSkils = function () {
	l2.data.clanSkills.forEach(function (id) {
		var skill = l2.data.tools.getSkill(id);
		var div = $('<div>').addClass('left clan-skill');
		var select = $('<select>')
			.attr('data-skill-id', id)
			.change(l2.ui.createChangeSkillListHandler('clanSkills', id));
		l2.model.clanSkills.add(id);
		l2.ui.tools.addOption(select, '', '---');
		for (var i = 0; i < skill.levels; i++)
			l2.ui.tools.addOption(select, i + 1, i + 1);
		div.append(select);
		div.append($('<span>').text(skill.name));
		$('#clanskills > div:first').append(div);
	});
	l2.data.squadSkills.forEach(function (id) {
		var skill = l2.data.tools.getSkill(id);
		var div = $('<div>').addClass('left clan-skill');
		var select = $('<select>')
			.attr('data-skill-id', id)
			.change(l2.ui.createChangeSkillListHandler('clanSkills', id));
		l2.model.clanSkills.add(id);
		l2.ui.tools.addOption(select, '', '---');
		for (var i = 0; i < skill.levels; i++)
			l2.ui.tools.addOption(select, i + 1, i + 1);
		div.append(select);
		div.append($('<span>').text(skill.name));
		$('#clanskills > div:not(.clear):eq(1)').append(div);
	});
	/* residences */
	var select = $('#clanskills > div:not(.clear):eq(2) > select');
	l2.ui.tools.addOption(select, '', '---');
	for (var id in l2.data.residences)
		l2.ui.tools.addOption(select, id, l2.data.residences[id]);
	l2.model.addHandler('residence', function (id) {
		l2.ui.disableRecalc = true;
		l2.data.residenceSkills.forEach(function (rs) {
			var model = l2.model.clanSkills.findById(rs.id);
			if (!model)
				return;
			model.level = rs.residenceId.indexOf(id) >= 0 ? 1 : 0;
		});
		l2.ui.disableRecalc = false;
	});
	l2.data.residenceSkills.forEach(function (rs) {
		var skill = l2.data.tools.getSkill(rs.id);
		if (!skill)
			return;
		var div = $('<div>').addClass('left clan-skill');
		var label = $('<label>');
		var input = $('<input>')
			.attr('type', 'checkbox')
			.attr('disabled', true)
			.attr('data-skill-id', rs.id);
		l2.model.clanSkills.add(rs.id);
		label.append(input);
		label.append(skill.name);
		div.append(label);
		$('#clanskills > div:not(.clear):eq(2)').append(div);
	});
	/* territory wars */
	l2.data.territorySkills.forEach(function (id) {
		var skill = l2.data.tools.getSkill(id);
		var div = $('<div>').addClass('left clan-skill');
		var label = $('<label>');
		var input = $('<input>')
			.attr('type', 'checkbox')
			.attr('data-skill-id', id)
			.click(l2.ui.createChangeSkillListHandler('clanSkills', id));
		l2.model.clanSkills.add(id);
		label.append(input);
		label.append(skill.name);
		div.append(label);
		$('#clanskills > div:last').append(div);
	});
};

l2.ui.bindSubClassSkills = function () {
	l2.data.subClassSkills.forEach(function (id) {
		var skill = l2.data.tools.getSkill(id);
		if (skill.levels == 1) {
			var div = $('<div>').addClass('left subclass-skill');
			var label = $('<label>');
			var input = $('<input>')
				.attr('type', 'checkbox')
				.attr('data-skill-id', id)
				.click(l2.ui.createChangeSkillListHandler('subClassSkills', id));
			l2.model.subClassSkills.add(id);
			label.append(input);
			label.append(skill.name);
			div.append(label);
			$('#subclassskills > div:last').append(div);
		} else {
			var div = $('<div>').addClass('left subclass-skill');
			var select = $('<select>')
				.attr('data-skill-id', id)
				.change(l2.ui.createChangeSkillListHandler('subClassSkills', id));
			l2.model.subClassSkills.add(id);
			l2.ui.tools.addOption(select, '', '---');
			for (var i = 0; i < skill.levels; i++)
				l2.ui.tools.addOption(select, i + 1, i + 1);
			div.append(select);
			div.append($('<span>').text(skill.name));
			$('#subclassskills > div:first').append(div);
		}
	});
};

l2.ui.bindTransforms = function () {
	var select = $('#trans-main select').change(function() {
		$('#trans-main input[type=checkbox]').attr('checked', false);
		l2.ui.disableValuesUpdate = true;
		l2.model.transformId = this.value;
		l2.ui.bindTransformSkills();
		l2.ui.disableValuesUpdate = false;
	});
	l2.ui.tools.addOption(select, '', '---');
	l2.data.commonTransforms.forEach(function (id) {
		var skill = l2.data.tools.getSkill(id);
		l2.ui.tools.addOption(select, id, skill.name);
	});
};

l2.ui.bindCommonTriggers = function () {
	l2.data.commonTriggers.forEach(function (id) {
		l2.model.triggers.add(id);
	});	
};

l2.ui.bindBuffs = function () {
	l2.ui.bindCommonBuffs();
	l2.ui.bindSongs();
	l2.ui.bindDances();
	l2.ui.bindClanSkils();
	l2.ui.bindSubClassSkills();
	l2.ui.bindTransforms();
	l2.ui.bindCommonTriggers();
};

l2.ui.canShowDelta = false;
l2.ui.prevStats = null;

l2.ui.consoleTime = function () {
	var date = new Date();
	console.log(date.getSeconds() + ':' + date.getMilliseconds());
};

l2.ui.toggleFieldSet = function () {
	var elements = $(this).closest('fieldset').children(':not(legend)');
	var btn = $(this).closest('label').next('span');
	if ($(this).is(':checked'))
		elements.add(btn).show();
	else
		elements.add(btn).hide();
};

l2.ui.clearEquipment = function () {
	l2.ui.disableRecalc = true;
	l2.ui.modelEquipments.forEach(function (eq) {
		l2.model[eq].id = null;
	});
	l2.ui.disableRecalc = false;
	l2.ui.recalc();
};

l2.ui.clearSelfBuffs = function () {
	l2.ui.disableRecalc = true;
	l2.model.selfBuffs.forEach(function (sb) { sb.level = 0; });
	l2.ui.disableRecalc = false;
	l2.ui.recalc();
};

l2.ui.clearToggles = function () {
	l2.ui.disableRecalc = true;
	l2.model.toggles.forEach(function (t) { t.level = 0; });
	l2.ui.disableRecalc = false;
	l2.ui.recalc();	
};

l2.ui.clearTriggers = function () {
	l2.ui.disableRecalc = true;
	l2.model.triggers.forEach(function (t) { t.level = 0; });
	l2.ui.disableRecalc = false;
	l2.ui.recalc();	
};

l2.ui.clearCommonBuffs = function () {
	l2.ui.disableRecalc = true;
	l2.model.commonBuffs.clear();
	l2.ui.disableRecalc = false;
	l2.ui.recalc();
};

l2.ui.clearSongs = function () {
	l2.ui.disableRecalc = true;
	l2.model.songs.forEach(function (s) { s.level = 0; });
	l2.ui.disableRecalc = false;
	l2.ui.recalc();	
};

l2.ui.clearDances = function () {
	l2.ui.disableRecalc = true;
	l2.model.dances.forEach(function (d) { d.level = 0; });
	l2.ui.disableRecalc = false;
	l2.ui.recalc();	
};

l2.ui.clearClanSkills = function () {
	l2.ui.disableRecalc = true;
	l2.model.clanSkills.forEach(function (cs) { cs.level = 0; });
	l2.ui.disableRecalc = false;
	l2.ui.recalc();	
};

l2.ui.clearSubClassSkills = function () {
	l2.ui.disableRecalc = true;
	l2.model.subClassSkills.forEach(function (scs) { scs.level = 0; });
	l2.ui.disableRecalc = false;
	l2.ui.recalc();
};

l2.ui.clearTransform = function () {
	l2.ui.disableRecalc = true;
	l2.model.transformId = null;
	l2.ui.disableRecalc = false;
	l2.ui.recalc();
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
	if (l2.ui.disableRecalc || l2.ui.loadingProcess)
		return;

	console.log('recalc ' + new Date().getMilliseconds());

	var stats = l2.calc.stats();

	$('#str').text(stats.baseStats.str);
	$('#dex').text(stats.baseStats.dex);
	$('#con').text(stats.baseStats.con);
	$('#int').text(stats.baseStats.int);
	$('#wit').text(stats.baseStats.wit);
	$('#men').text(stats.baseStats.men);

	$('#hp').text(stats.hp);
	$('#mp').text(stats.mp);
	$('#cp').text(stats.cp);
	$('#pdef').text(stats.pDef);
	$('#patk').text(stats.pAtk);
	$('#matk').text(stats.mAtk);
	$('#accuracy').text(stats.accuracy);
	$('#pcritical').text(stats.pCritical);
	$('#pcritmult').text(stats.pCritMultiplier.toFixed(5));
	$('#mcritical').text(stats.mCritical);
	$('#mcritmult').text(stats.mCritMultiplier.toFixed(5));
	$('#atkspd').text(stats.atkSpeed);
	$('#castspd').text(stats.castSpeed);
	$('#speed').text(stats.speed);
	$('#evasion').text(stats.evasion);
	$('#mdef').text(stats.mDef);

	$('#realatkspeed').text(stats.realAtkSpeed);
	$('#pdps').text(l2.ui.tools.formatNumber(Math.round(stats.pDPS)));
	$('#patkcrit').text(stats.pCritAtk);
	$('#mdps').text(l2.ui.tools.formatNumber(Math.round(stats.mDPS)));

	$('#mpregen').text(stats.mpRegen);

	var prevStats = l2.ui.prevStats;
	l2.ui.prevStats = stats;

	if (l2.ui.canShowDelta && prevStats) {
		l2.ui.highlightStat(prevStats, stats, 'hp', $('#hp').next(), 1);
		l2.ui.highlightStat(prevStats, stats, 'cp', $('#cp').next(), 1);
		l2.ui.highlightStat(prevStats, stats, 'pDef', $('#pdef').next(), 1);
		l2.ui.highlightStat(prevStats, stats, 'pAtk', $('#patk').next(), 1);
		l2.ui.highlightStat(prevStats, stats, 'atkSpeed', $('#atkspd').next(), 1);
		l2.ui.highlightStat(prevStats, stats, 'pDPS', $('#pdps').next(), 1);
		l2.ui.highlightStat(prevStats, stats, 'mAtk', $('#matk').next(), 1);
		l2.ui.highlightStat(prevStats, stats, 'castSpeed', $('#castspd').next(), 1);
		l2.ui.highlightStat(prevStats, stats, 'mDef', $('#mdef').next(), 1);
		l2.ui.highlightStat(prevStats, stats, 'accuracy', $('#accuracy').next(), 0);
		l2.ui.highlightStat(prevStats, stats, 'pCritical', $('#pcritical').next(), 0);
		l2.ui.highlightStat(prevStats, stats, 'evasion', $('#evasion').next(), 0);
		l2.ui.highlightStat(prevStats, stats, 'speed', $('#speed').next(), 0);
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

	['staying', 'running', 'walking', 'sitting'].forEach(function (moving) {
		l2.ui.tools.addOption('#moving', moving, moving);
	});
};

l2.ui.bindBaseStatsFieldSet = function () {
	$.each(['str', 'dex', 'con', 'int', 'wit', 'men'], function () {
		l2.ui.tools.addOption('.tatoo-stat', this, this.toUpperCase());
	});
	for (var i = 1; i <= 4; i++)
		l2.ui.tools.addOption('.tatoo-add', i, '+' + i);
	for (var i = 1; i <= 6; i++)
		l2.ui.tools.addOption('.tatoo-sub', i, '-' + i);
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
				localStorage[l2.ui.storagePrefix + model] = value == null ? '' : value;
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
	l2.model.addHandler('classId', l2.ui.bindClassSkillsAndTatoo);
	l2.model.addHandler('level', l2.ui.autoSelectPassives);
	l2.model.addHandler('level', l2.ui.autoSelectTransformPassives);

	l2.ui.fieldsets.forEach(function (fs) {
		$('#' + fs.toLowerCase() + '-chb').click(function () {
			l2.ui.disableValuesUpdate = true;
			l2.model[fs + 'Visible'] = $(this).is(':checked');
			l2.ui.disableValuesUpdate = false;
		});
	});

	var capStat = function (stat) {
		return stat.charAt(0).toUpperCase() + stat.substring(1);
	};

	for (var i = 1; i <= 3; i++) {
		(function (slot, div) {
			l2.model.addHandler(slot + '.enabled', function (value) {
				div.find('input, select').attr('disabled', !value);
			});
			['add', 'sub'].forEach(function (dir) {
				var statPos = dir == 'add' ? 'first' : 'last';
				l2.model.addHandler(slot + '.' + dir + '.stat', function (value) {
					div.find('select.tatoo-stat:' + statPos).val(value);
					if (dir == 'add') {
						l2.model[slot].sub.enableAll();
						if (l2.ui.isForbidInt())
							l2.model[slot].sub.enableInt = false;
						if (l2.ui.isForbidMen())
							l2.model[slot].sub.enableMen = false;
						l2.model[slot].sub['enable' + capStat(value)] = false;
						if (['str', 'dex', 'con'].indexOf(value) >= 0) {
							l2.model[slot].sub.enableInt = false;
							l2.model[slot].sub.enableWit = false;
							l2.model[slot].sub.enableMen = false;
						} else {
							l2.model[slot].sub.enableStr = false;
							l2.model[slot].sub.enableDex = false;
							l2.model[slot].sub.enableCon = false;
						}
					}
				});
				l2.model.addHandler(slot + '.' + dir + '.minValue', function (value) {
					var select = div.find('select.tatoo-' + dir);
					select.children().hide();
					for (var i = value; i <= l2.model[slot][dir].maxValue; i++)
						select.children('[value=' + i + ']').show();
					if (l2.model[slot][dir].value < value)
						l2.model[slot][dir].value = value;
				});
				l2.model.addHandler(slot + '.' + dir + '.maxValue', function (value) {
					var select = div.find('select.tatoo-' + dir);
					select.children().hide();
					for (var i = l2.model[slot][dir].minValue; i <= value; i++)
						select.children('[value=' + i + ']').show();
					if (l2.model[slot][dir].value > value)
						l2.model[slot][dir].value = value;
				});
				['str', 'dex', 'con', 'int', 'wit', 'men'].forEach(function (stat) {
					var prop = 'enable' + capStat(stat);
					l2.model.addHandler(slot + '.' + dir + '.' + prop, function (value) {
						var option = div.find('select.tatoo-stat:' + statPos + ' > option[value=' + stat + ']');
						if (value)
							option.show();
						else {
							option.hide();
							if (l2.model[slot][dir].stat == stat) {
								if (l2.model[slot][dir].enableStr)
									l2.model[slot][dir].stat = 'str';
								else if (l2.model[slot][dir].enableDex)
									l2.model[slot][dir].stat = 'dex';
								else if (l2.model[slot][dir].enableCon)
									l2.model[slot][dir].stat = 'con';
								else if (l2.model[slot][dir].enableInt)
									l2.model[slot][dir].stat = 'int';
								else if (l2.model[slot][dir].enableWit)
									l2.model[slot][dir].stat = 'wit';
								else if (l2.model[slot][dir].enableMen)
									l2.model[slot][dir].stat = 'men';
							}
						}
					});
				});
			});
			l2.model.addHandler(slot + '.add.value', function (value) {
				div.find('select.tatoo-add').val(value);
				l2.model[slot].sub.minValue = value;
				l2.model[slot].sub.maxValue = value + 2;
			});
		})('tatoo' + i, $('#tatoo-slot-' + i));
	}

	l2.model.addHandler('weapon.type', l2.ui.createBindItemsFunction('weapon', 'weapon', l2.data.tools.findWeapons));
	l2.model.addHandler('weapon.grade', l2.ui.createBindItemsFunction('weapon', 'weapon', l2.data.tools.findWeapons));
	l2.model.addHandler('shield.grade', l2.ui.createBindItemsFunction('shield', 'shield', l2.data.tools.findShields));
	l2.model.addHandler('helmet.grade', l2.ui.createBindItemsFunction('helmet', 'helmet', l2.data.tools.findHelmets));
	l2.model.addHandler('bodyUpper.grade', l2.ui.createBindItemsFunction('body-upper', 'bodyUpper', l2.data.tools.findBodyUppers));
	l2.model.addHandler('bodyLower.grade', l2.ui.createBindItemsFunction('body-lower', 'bodyLower', l2.data.tools.findBodyLowers));
	l2.model.addHandler('gloves.grade', l2.ui.createBindItemsFunction('gloves', 'gloves', l2.data.tools.findGloves));
	l2.model.addHandler('boots.grade', l2.ui.createBindItemsFunction('boots', 'boots', l2.data.tools.findBoots));
	l2.model.addHandler('cloak.grade', l2.ui.createBindItemsFunction('cloak', 'cloak', l2.data.tools.findCloaks));
	l2.model.addHandler('underwear.grade', l2.ui.createBindItemsFunction('underwear', 'underwear', l2.data.tools.findUnderwears));
	l2.model.addHandler('belt.grade', l2.ui.createBindItemsFunction('belt', 'belt', l2.data.tools.findBelts));
	l2.model.addHandler('necklace.grade', l2.ui.createBindItemsFunction('necklace', 'necklace', l2.data.tools.findNecklaces));
	l2.model.addHandler('earring1.grade', l2.ui.createBindItemsFunction('earring1', 'earring1', l2.data.tools.findEarrings));
	l2.model.addHandler('earring2.grade', l2.ui.createBindItemsFunction('earring2', 'earring2', l2.data.tools.findEarrings));
	l2.model.addHandler('ring1.grade', l2.ui.createBindItemsFunction('ring1', 'ring1', l2.data.tools.findRings));
	l2.model.addHandler('ring2.grade', l2.ui.createBindItemsFunction('ring2', 'ring2', l2.data.tools.findRings));

	l2.model.addHandler('weapon.id', function () {
		var item = l2.model.weapon.item;
		l2.model.shield.disabled = item && l2.data.twoHand.indexOf(item.weaponType) >= 0;
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

	['selfBuffs', 'toggles', 'triggers', 'songs', 'dances', 'clanSkills', 'subClassSkills', 'passives'].forEach(function (type) {
		l2.model.addHandler(type + '[].level', function (value, skill) {
			if (!l2.ui.disableValuesUpdate) {
				var element = $('[data-skill-id=' + skill.id + ']');
				if (element.is('select'))
					element.val(value || '');
				else
					element[0].checked = !!value;
			} else
				l2.ui.disableValuesUpdate = false;
			if (!l2.ui.disableStorageUpdate)
				localStorage[l2.ui.storagePrefix + type] = l2.model[type].toJSON();
		});
		l2.model.addHandler(type + '.clear', function () {
			if (!l2.ui.disableStorageUpdate)
				localStorage[l2.ui.storagePrefix + type] = l2.model[type].toJSON();
		});
	});

	l2.model.addHandler('triggers.add', function (s) {
		var skill = s.skill;
		if (skill == null)
			return;
		var div = $('<div>').addClass('left trigger-skill');
		var label = $('<label>');
		var input = $('<input>').attr('type', 'checkbox')
			.attr('data-skill-id', skill.id);
		input.change(l2.ui.createChangeSkillListHandler('triggers', skill.id));
		label.append(input);
		label.append(skill.name);
		div.append(label);
		$('#triggers > div').append(div);
	});
	l2.model.addHandler('triggers.remove', function (s) {
		var skill = s.skill;
		$('#triggers input[data-skill-id=' + skill.id + ']').closest('div.trigger-skill').remove();
	});

	l2.model.addHandler('commonBuffs.add', function (s) {
		if (!l2.ui.disableValuesUpdate) {
			var value = s.id + ':' + s.level;
			var option = $('#commonbuffs select > option[value="' + value + '"]');
			if (option.length)
				option.parent().val(value);
		} else
			l2.ui.disableValuesUpdate = false;
		if (!l2.ui.disableStorageUpdate)
			localStorage[l2.ui.storagePrefix + 'commonBuffs'] = l2.model.commonBuffs.toJSON();
	});
	l2.model.addHandler('commonBuffs.remove', function (s) {
		if (!l2.ui.disableValuesUpdate) {
			var value = s.id + ':' + s.level;
			var option = $('#commonbuffs select > option[value="' + value + '"]');
			if (option.length)
				option.parent().val('');
		} else
			l2.ui.disableValuesUpdate = false;
		if (!l2.ui.disableStorageUpdate)
			localStorage[l2.ui.storagePrefix + 'commonBuffs'] = l2.model.commonBuffs.toJSON();
	});
	l2.model.addHandler('commonBuffs.clear', function () {
		localStorage[l2.ui.storagePrefix + 'commonBuffs'] = '[]';
	});
	l2.model.addHandler('autoSelectPassives', function (val) {
		if (!l2.ui.disableValuesUpdate) {
			$('#auto-select-passives').attr('checked', val);
		} else
			l2.ui.disableValuesUpdate = false;
		$('#passives select').attr('disabled', val);
		if (val)
			l2.ui.autoSelectPassives();
	});

	l2.model.addHandler('clanSkills[].level', function (level, s) {
		if (level && l2.data.squadSkills.indexOf(s.id) >= 0) {
			l2.ui.disableRecalc = true;
			l2.model.clanSkills.forEach(function (_s) {
				if (_s.id == s.id)
					return;
				if (l2.data.squadSkills.indexOf(_s.id) >= 0 && _s.level > 0)
					_s.level = 0;
			});
			l2.ui.disableRecalc = false;
		}
	});

	var checkForTrigger = function (value, s) {
		var skill = s.skill;
		if (l2.data.skipTriggers.indexOf(s.id) >= 0)
			return;
		var triggerId = skill.trigger instanceof Array ? skill.trigger[s.level] : skill.trigger;
		if (triggerId == 5565) // Expose Weak Point - debuff
			return;
		if (triggerId && l2.data.commonTriggers.indexOf(triggerId) == -1) {
			var modelTrigger = l2.model.triggers.findById(triggerId);
			if (value) {					
				if (modelTrigger)
					modelTrigger.data.push(skill.id);
				else
					l2.model.triggers.add(triggerId, [skill.id]);
			} else
				if (modelTrigger) {
					modelTrigger.data = modelTrigger.data.filter(function (id) { return id != skill.id });
					if (modelTrigger.data.length == 0)
						l2.model.triggers.removeById(triggerId);
				}
		}
	};
	l2.model.addHandler('subClassSkills[].level', checkForTrigger);
	l2.model.addHandler('passives[].level', checkForTrigger);
	l2.model.addHandler('commonBuffs.add', function (s) { checkForTrigger(s.level, s); });
	l2.model.addHandler('commonBuffs.remove', function (s) { checkForTrigger(0, s); });

	var checkAbnormalType = function (level, s) {
		if (level) {
			var skill = s.skill;
			l2.ui.disableRecalc = true;

			var disableValuesUpdate = l2.ui.disableValuesUpdate;
			l2.ui.disableValuesUpdate = false;

			l2.model.selfBuffs.forEach(function (s) {
				if (s.id == skill.id)
					return;
				if (l2.data.tools.compareAbnormal(s.skill.abnormalType, skill.abnormalType))
					s.level = 0;
			});

			l2.model.triggers.forEach(function (s) {
				if (s.id == skill.id)
					return;
				if (l2.data.tools.compareAbnormal(s.skill.abnormalType, skill.abnormalType))
					s.level = 0;
			});

			l2.model.transformBuffs.forEach(function (s) {
				if (s.id == skill.id)
					return;
				if (l2.data.tools.compareAbnormal(s.skill.abnormalType, skill.abnormalType))
					s.level = 0;
			});

			var idsToRemove = [];
			l2.model.commonBuffs.forEach(function (s) {
				if (s.id == skill.id)
					return;
				if (l2.data.tools.compareAbnormal(s.skill.abnormalType, skill.abnormalType))
					idsToRemove.push(s.id);
			});
			idsToRemove.forEach(function (id) { l2.model.commonBuffs.removeById(id); });
			
			l2.ui.disableRecalc = false;
			l2.ui.disableValuesUpdate = disableValuesUpdate;
		}
	};
	l2.model.addHandler('selfBuffs[].level', checkAbnormalType);
	l2.model.addHandler('triggers[].level', checkAbnormalType);
	l2.model.addHandler('commonBuffs.add', function (s) { checkAbnormalType(s.level, s); });
	l2.model.addHandler('transformBuffs[].level', checkAbnormalType);

	l2.model.addHandler('transformId', function (id) {
		var select = $('#trans-main select');
		if (id == null) {
			select.val('');
			$('#trans-main input[type=checkbox]').attr('checked', false);
		} else {
			var option = select.children('option[value=' + id + ']');
			if (option.length)
				option.attr('selected', true);
			else {
				var input = $('#trans-main > div input[type=checkbox][data-skill-id=' + id + ']');
				if (input.length)
					input.attr('checked', true);
				else {
					console.log('Cannot set transform');
					id = null;
				}
			}
		}
		if (!l2.ui.disableValuesUpdate)
			l2.ui.bindTransformSkills();
		l2.ui.autoSelectTransformPassives();
		if (!l2.ui.disableStorageUpdate)
			localStorage[l2.ui.storagePrefix + 'transformId'] = id == null ? '' : id;
	});

	l2.model.addHandler('transformPassives[].level', function (level, s) {
		if (!l2.ui.disableValuesUpdate) {
			var select = $('#trans-passives select[data-skill-id=' + s.id + ']');
			if (level == 0)
				select.val('');
			else
				select.val(level);
		}
	});

	l2.model.addHandler('transformBuffs[].level', function (level, s) {
		if (!l2.ui.disableValuesUpdate) {
			var select = $('#trans-self-buffs select[data-skill-id=' + s.id + ']');
			if (level == 0)
				select.val('');
			else
				select.val(level);
		}
	});

	l2.ui.fieldsets.forEach(function (fs) {
		l2.model.addHandler(fs + 'Visible', function (value) {
			if (!l2.ui.disableStorageUpdate)
				localStorage[l2.ui.storagePrefix + fs + 'Visible'] = value;
		});
	});

	l2.model.addGlobalHandler(function (property) {
		if (property == 'setGrade')
			return;
		if (property == 'autoSelectPassives')
			return;
		// for tatto
		if (property.indexOf('.add.enable') > 0)
			return;
		if (property.indexOf('.sub.enable') > 0)
			return;
		if (property.indexOf('.add.minValue') > 0)
			return;
		if (property.indexOf('.add.maxValue') > 0)
			return;
		if (property.indexOf('.sub.minValue') > 0)
			return;
		if (property.indexOf('.sub.maxValue') > 0)
			return;
		if (property.indexOf('.canEnchant') > 0)
			return;
		if (property.indexOf('.disabled') > 0)
			return;
		if (property.indexOf('.grade') > 0)
			return;
		if (property.indexOf('Visible') > 0)
			return;
		if (!l2.ui.disableRecalc && !l2.ui.loadingProcess)
			console.log(property);
		l2.ui.recalc();
	});
};

l2.ui.loadFromStorage = function (showDeltas) {
	l2.ui.disableStorageUpdate = true;
	l2.ui.loadingProcess = true;
	if (!showDeltas)
		l2.ui.canShowDelta = false;

	var saved = [];
	for (var property in localStorage)
		if (property.indexOf(l2.ui.storagePrefix) == 0)
			saved.push({
				model: property.substring(2)
			});
	saved.forEach(function (m) {
		m.elements = $('[data-model="' + m.model + '"]');
	});
	saved = saved.filter(function (m) {
		return m.elements.length > 0;
	});
	saved.sort(function (m1, m2) {
		var lo1 = parseInt(m1.elements.attr('data-load-order')) || 0;
		var lo2 = parseInt(m2.elements.attr('data-load-order')) || 0;
		return lo2 - lo1;
	});
	saved.forEach(function (m) {
		l2.model.setValue(m.model, localStorage[l2.ui.storagePrefix + m.model]);
	});

	['selfBuffs', 'toggles', 'dances', 'songs', 'clanSkills', 'subClassSkills', 'passives'].forEach(function (type) {
		if (localStorage[l2.ui.storagePrefix + type])
			JSON.parse(localStorage[l2.ui.storagePrefix + type]).forEach(function (s) {
				var m = l2.model[type].findById(s.id);
				if (m)
					m.level = s.level;
				else
					console.log('possible error');
			});
	});

	if (localStorage[l2.ui.storagePrefix + 'commonBuffs'])
		JSON.parse(localStorage[l2.ui.storagePrefix + 'commonBuffs']).forEach(function (cb) {
			l2.model.commonBuffs.add(cb.id, null, cb.level);
		});

	if (localStorage[l2.ui.storagePrefix + 'transformId'])
		l2.model.transformId = localStorage[l2.ui.storagePrefix + 'transformId'];

	l2.ui.fieldsets.forEach(function (fs) {
		var value = localStorage[l2.ui.storagePrefix + fs + 'Visible'];
		if (value == 'false')
			value = false;
		$('#' + fs.toLowerCase() + '-chb').attr('checked', !!value).each(l2.ui.toggleFieldSet);
	});

	l2.ui.disableStorageUpdate = false;
	l2.ui.loadingProcess = false;
	l2.ui.recalc();
	if (!showDeltas)
		l2.ui.canShowDelta = true;
};

$(function () {

	window.onerror = function (msg) {
		alert(msg);
	};

	l2.ui.disableStorageUpdate = true;
	l2.ui.loadingProcess = true;

	l2.ui.prepareModel();

	l2.ui.bindProfessionFieldSet();
	l2.ui.bindBaseStatsFieldSet();
	l2.ui.bindEquipmentFieldSet();

	l2.model.tatoo1.add.stat = 'str';
	l2.model.tatoo1.add.value = 1;
	l2.model.tatoo1.add.maxValue = 1;
	l2.model.tatoo1.sub.stat = 'dex';
	l2.model.tatoo1.sub.value = 1;
	l2.model.tatoo2.add.stat = 'str';
	l2.model.tatoo2.add.value = 1;
	l2.model.tatoo2.add.maxValue = 1;
	l2.model.tatoo2.sub.stat = 'dex';
	l2.model.tatoo2.sub.value = 1;
	l2.model.tatoo3.add.stat = 'str';
	l2.model.tatoo3.add.value = 1;
	l2.model.tatoo3.add.maxValue = 1;
	l2.model.tatoo3.sub.stat = 'dex';
	l2.model.tatoo3.sub.value = 1;

	l2.model.raceId = 0;
	l2.model.prof = 0;
	l2.model.classId = 0;
	l2.model.level = 1;
	l2.model.hpPercent = 100;
	l2.model.position = 'front';

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
	$('#triggers-chb').click(l2.ui.toggleFieldSet);
	$('#commonbuffs-chb').click(l2.ui.toggleFieldSet);
	$('#songs-chb').click(l2.ui.toggleFieldSet);
	$('#dances-chb').click(l2.ui.toggleFieldSet);
	$('#clanskills-chb').click(l2.ui.toggleFieldSet);
	$('#subclassskills-chb').click(l2.ui.toggleFieldSet);
	$('#transforms-chb').click(l2.ui.toggleFieldSet);
	$('#passives-chb').click(l2.ui.toggleFieldSet);

	$('#equipment span.clear-btn').click(l2.ui.clearEquipment);
	$('#selfbuffs span.clear-btn').click(l2.ui.clearSelfBuffs);
	$('#toggles span.clear-btn').click(l2.ui.clearToggles);
	$('#triggers span.clear-btn').click(l2.ui.clearTriggers);
	$('#commonbuffs span.clear-btn').click(l2.ui.clearCommonBuffs);
	$('#songs span.clear-btn').click(l2.ui.clearSongs);
	$('#dances span.clear-btn').click(l2.ui.clearDances);
	$('#clanskills span.clear-btn').click(l2.ui.clearClanSkills);
	$('#subclassskills span.clear-btn').click(l2.ui.clearSubClassSkills);
	$('#transforms span.clear-btn').click(l2.ui.clearTransform);

	$(window).resize(l2.ui.adjustContainer);
	l2.ui.adjustContainer();

	l2.ui.loadFromStorage();

	//
	for (var property in localStorage)
		if (property.indexOf(l2.ui.savesPrefix) == 0) {
			var save = property.substring(l2.ui.savesPrefix.length);
			l2.ui.tools.addOption($('#saves'), save, save);
		}

	$('#savebtn').click(function () {
		var obj = {};
		var prefixLength = l2.ui.storagePrefix.length;
		for (var property in localStorage)
			if (property.indexOf(l2.ui.storagePrefix) == 0)
				obj[property.substring(prefixLength)] = localStorage[property].charAt(0) == '[' ?
					JSON.parse(localStorage[property]) : localStorage[property];
		var name = prompt('Save name:');
		if (name != null) {
			if (name == '') {
				alert('Name cannot be empty');
				return;
			}
			var over = false;
			if (localStorage[l2.ui.savesPrefix + name]) {
				if (!confirm('Save with name "' + name + '" already exists. Overwrite?'))
					return;
				over = true;
			}
			localStorage[l2.ui.savesPrefix + name] = JSON.stringify(obj);
			if (!over)
				l2.ui.tools.addOption($('#saves'), name, name);
		}
	});
	$('#loadbtn').click(function () {
		var save = $('#saves').val();
		if (!save)
			return;
		var obj = JSON.parse(localStorage[l2.ui.savesPrefix + save]);
		for (var prop in localStorage)
			if (prop.indexOf(l2.ui.storagePrefix) == 0)
				delete localStorage[prop];
		for (var prop in obj)
			if (obj[prop] instanceof Array)
				localStorage[l2.ui.storagePrefix + prop] = JSON.stringify(obj[prop]);
			else
				localStorage[l2.ui.storagePrefix + prop] = obj[prop];
		l2.ui.loadFromStorage(true);
	});
	$('#deletebtn').click(function () {
		var save = $('#saves').val();
		if (!save)
			return;
		if (confirm('Do you really want to delete ' + save + ' save?')) {
			delete localStorage[l2.ui.savesPrefix + save];
			var option;
			$('#saves > option').each(function () {
				if (this.value == save)
					option = this;
			});
			if (option)
				$(option).remove();
		}
	});
	// load share code
	/*var json = prompt('Insert code here');
	if (json != null) {
		var obj = JSON.parse(json);
		for (var property in obj)
			localStorage[l2.ui.storagePrefix + property] = obj[property] instanceof Array ?
				JSON.stringify(obj[property]) : obj[property];
		l2.ui.loadFromStorage();
	}*/
});