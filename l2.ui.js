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
	if (l2.ui.canChangeStorage)
		localStorage.classId = $('#l2class').val();
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
};

l2.ui.bindSets = function () {
	var grade = $('#set-grade').val();
	$('#set').empty();
	l2.ui.tools.addOption('#set', '', 'Unequipped');
	l2.data.armorSets.filter(function (s) {
		return (s.grade || 'none') == grade;
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
		$('#body-upper-grade').val(armor.grade || 'none');
		l2.ui.bindBodyUpper();
		$('#body-upper').val(set.chest[0]);
	}
	if (set.legs != null) {
		var armor = l2.data.tools.getItem(set.legs[0]);
		$('#body-lower-grade').val(armor.grade || 'none');
		l2.ui.bindBodyLower();
		$('#body-lower').val(set.legs[0]);
	}
	if (set.head != null) {
		var armor = l2.data.tools.getItem(set.head[0]);
		$('#helmet-grade').val(armor.grade || 'none');
		l2.ui.bindHelmets();
		$('#helmet').val(set.head[0]);
	}
	if (set.gloves != null) {
		var armor = l2.data.tools.getItem(set.gloves[0]);
		$('#gloves-grade').val(armor.grade || 'none');
		l2.ui.bindGloves();
		$('#gloves').val(set.gloves[0]);
	}
	if (set.feet != null) {
		var armor = l2.data.tools.getItem(set.feet[0]);
		$('#boots-grade').val(armor.grade || 'none');
		l2.ui.bindBoots();
		$('#boots').val(set.feet[0]);
	}

	$('#body-upper-grade, #body-upper, #body-lower-grade, #body-lower, #helmet-grade, #helmet, #gloves-grade, #gloves, #boots-grade, #boots').each(l2.ui.onChangeSaveToStorage);

	l2.ui.recalc();
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
		l2.ui.tools.addOption('#helmet', this.id, this.name);
	});
};

l2.ui.bindBodyUpper = function () {
	var grade = $('#body-upper-grade').val();
	$('#body-upper').empty();
	l2.ui.tools.addOption('#body-upper', '', 'Unequipped');
	var bodyUppers = l2.data.tools.findBodyUppers(grade);
	$.each(bodyUppers, function () {
		l2.ui.tools.addOption('#body-upper', this.id, this.name);
	});
};

l2.ui.bindBodyLower = function () {
	var grade = $('#body-lower-grade').val();
	$('#body-lower').empty();
	l2.ui.tools.addOption('#body-lower', '', 'Unequipped');
	var bodyLowers = l2.data.tools.findBodyLowers(grade);
	$.each(bodyLowers, function () {
		l2.ui.tools.addOption('#body-lower', this.id, this.name);
	});
};

l2.ui.bindGloves = function () {
	var grade = $('#gloves-grade').val();
	$('#gloves').empty();
	l2.ui.tools.addOption('#gloves', '', 'Unequipped');
	var gloves = l2.data.tools.findGloves(grade);
	$.each(gloves, function () {
		l2.ui.tools.addOption('#gloves', this.id, this.name);
	});
};

l2.ui.bindBoots = function () {
	var grade = $('#boots-grade').val();
	$('#boots').empty();
	l2.ui.tools.addOption('#boots', '', 'Unequipped');
	var boots = l2.data.tools.findBoots(grade);
	$.each(boots, function () {
		l2.ui.tools.addOption('#boots', this.id, this.name);
	});
};

l2.ui.bindPassives = function () {
	var classId = $('#l2class').val();
	var lvl = $('#lvl').val();
	var skills = [];
	var classesId = l2.data.tools.getBaseClasses(classId);	
	for (var i = 0; i < l2.data.skillTree.length; i++) {
		var st = l2.data.skillTree[i];
		if (classesId.indexOf(st.classId) >= 0)
			if (skills.indexOf(st.skillId) == -1)
				skills.push(st.skillId);
	}
	$('#passives > div > div.passive-skill').remove();
	for (var i = 0; i < skills.length; i++) {
		var skill = l2.data.tools.getSkill(skills[i]);
		if (skill && skill.operateType == 'P') {
			var div = $('<div>').addClass('left passive-skill');
			var skillLevels = l2.data.tools.getSkillLevels(skill.id, classesId);
			var select = $('<select>').data('skill-id', skill.id);
			l2.ui.tools.addOption(select, '', '---');
			for (var j = 0; j < skillLevels.length; j++)
				l2.ui.tools.addOption(select, skillLevels[j].skillLvl, skillLevels[j].skillLvl + ' [' + skillLevels[j].minLvl + ']');
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
		var skillId = $(this).data('skill-id');
		var skillLevels = l2.data.tools.getSkillLevels(skillId, classesId);
		var skillLvl = 0;
		for (var i = 0; i < skillLevels.length; i++)
			if (skillLevels[i].minLvl <= lvl)
				skillLvl = skillLevels[i].skillLvl;
			else
				break;
		if (skillLvl == 0)
			$(this).val('');
		else
			$(this).val(skillLvl);
	})
};

l2.ui.bindSelfBuffs = function () {
	var classId = $('#l2class').val();
	var classesId = l2.data.tools.getBaseClasses(classId);
	var skills = [];
	for (var i = 0; i < l2.data.skillTree.length; i++) {
		var st = l2.data.skillTree[i];
		if (classesId.indexOf(st.classId) >= 0)
			if (skills.indexOf(st.skillId) == -1)
				skills.push(st.skillId);
	}
	$('#selfbuffs > div > div.self-skill').remove();
	for (var i = 0; i < skills.length; i++) {
		var skill = l2.data.tools.getSkill(skills[i]);
		if (skill && skill.operateType.charAt(0) == 'A' && skill.target == 'SELF') {
			var div = $('<div>').addClass('left self-skill');
			var skillLevels = l2.data.tools.getSkillLevels(skill.id, classesId);
			var select = $('<select>').data('skill-id', skill.id);
			select.change(l2.ui.recalc);
			l2.ui.tools.addOption(select, '', '---');
			for (var j = 0; j < skillLevels.length; j++)
				l2.ui.tools.addOption(select, skillLevels[j].skillLvl, skillLevels[j].skillLvl + ' [' + skillLevels[j].minLvl + ']');
			div.append(select);
			div.append($('<span>').text(skill.name));
			$('#selfbuffs > div').append(div);
		}
	}
};

l2.ui.bindToggles = function () {
	var classId = $('#l2class').val();
	var classesId = l2.data.tools.getBaseClasses(classId);
	var skills = [];
	for (var i = 0; i < l2.data.skillTree.length; i++) {
		var st = l2.data.skillTree[i];
		if (classesId.indexOf(st.classId) >= 0)
			if (skills.indexOf(st.skillId) == -1)
				skills.push(st.skillId);
	}
	$('#toggles > div > div.toggle-skill').remove();
	for (var i = 0; i < skills.length; i++) {
		var skill = l2.data.tools.getSkill(skills[i]);
		if (skill && skill.operateType == 'T') {
			var div = $('<div>').addClass('left toggle-skill');
			var skillLevels = l2.data.tools.getSkillLevels(skill.id, classesId);
			var select = $('<select>').data('skill-id', skill.id);
			select.change(l2.ui.recalc);
			l2.ui.tools.addOption(select, '', '---');
			for (var j = 0; j < skillLevels.length; j++)
				l2.ui.tools.addOption(select, skillLevels[j].skillLvl, skillLevels[j].skillLvl + ' [' + skillLevels[j].minLvl + ']');
			div.append(select);
			div.append($('<span>').text(skill.name));
			$('#toggles > div').append(div);
		}
	}
};

l2.ui.classChanged = function () {
	l2.ui.bindPassives();
	l2.ui.bindSelfBuffs();
	l2.ui.bindToggles();
	l2.ui.autoSelectPassives();
	l2.ui.recalc();
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
				var select = $('<select>').data('skill-id', skill.id);
				select.attr('data-stack', skill.abnormalType);
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

l2.ui.bindSongs = function () {
	for (var i = 0; i < l2.data.songs.length; i++) {
		var skill = l2.data.tools.getSkill(l2.data.songs[i]);
		var div = $('<div>').addClass('left song-skill');
		var label = $('<label>');
		var input = $('<input>').attr('type', 'checkbox').data('skill-id', skill.id);
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
		var input = $('<input>').attr('type', 'checkbox').data('skill-id', skill.id);
		input.change(l2.ui.recalc);
		label.append(input);
		label.append(skill.name);
		div.append(label);
		$('#dancebuffs > div').append(div);
	}
};

l2.ui.bindBuffs = function () {
	l2.ui.bindCommonBuffs();
	l2.ui.bindSongs();
	l2.ui.bindDances();
};

l2.ui.canChangeStorage = false;
l2.ui.canShowDelta = false;
l2.ui.prevStats = null;

l2.ui.restoreSingleItem = function (element) {
	if ($(element).is('select'))
		$(element).val(localStorage[$(element).attr('data-storage')]);
	if ($(element).is('input[type=checkbox]'))
		if (localStorage[$(element).attr('data-storage')] == '1')
			$(element).prop('checked', true);
		else
			$(element).removeProp('checked');
};

l2.ui.onChangeSaveToStorage = function () {
	if ($(this).is('select'))
		localStorage[$(this).attr('data-storage')] = $(this).val();
	if ($(this).is('input[type=checkbox]'))
		localStorage[$(this).attr('data-storage')] = $(this).is(':checked') ? 1 : 0;
};

l2.ui.restoreFromStorage = function () {
	l2.ui.restoreSingleItem('#race');
	l2.ui.restoreSingleItem('#prof');
	l2.ui.bindClasses();

	l2.ui.restoreSingleItem('#l2class');
	l2.ui.restoreSingleItem('#lvl');
	l2.ui.classChanged();

	$('.tatoo-chb, .tatoo-stat, .tatoo-plus, .tatoo-minus').each(function () {
		l2.ui.restoreSingleItem(this);
	});

	l2.ui.restoreSingleItem('#weapon-grade');
	l2.ui.restoreSingleItem('#weapon-type');
	l2.ui.bindWeapons();
	l2.ui.restoreSingleItem('#weapon');

	l2.ui.restoreSingleItem('#shield-grade');
	l2.ui.bindShields();
	l2.ui.restoreSingleItem('#shield');

	l2.ui.restoreSingleItem('#set-grade');

	l2.ui.restoreSingleItem('#helmet-grade');
	l2.ui.bindHelmets();
	l2.ui.restoreSingleItem('#helmet');

	l2.ui.restoreSingleItem('#body-upper-grade');
	l2.ui.bindBodyUpper();
	l2.ui.restoreSingleItem('#body-upper');

	l2.ui.restoreSingleItem('#body-lower-grade');
	l2.ui.bindBodyLower();
	l2.ui.restoreSingleItem('#body-lower')

	l2.ui.restoreSingleItem('#gloves-grade');
	l2.ui.bindGloves();
	l2.ui.restoreSingleItem('#gloves');

	l2.ui.restoreSingleItem('#boots-grade');
	l2.ui.bindBoots();
	l2.ui.restoreSingleItem('#boots');

	l2.ui.recalc();

	l2.ui.canChangeStorage = true;
};


l2.ui.toggleFieldSet = function () {
	var div = $(this).closest('fieldset').children('div');
	if ($(this).is(':checked'))
		div.show();
	else
		div.hide();
};

l2.ui.formatPercent = function (val) {
	if (val >= 10)
		return Math.round(val).toString();
	if (val >= 1)
		return val.toFixed(1);
	return val.toFixed(2);
};

l2.ui.highlightStat = function (oldStats, newStats, key, div) {
	var plus;
	div.removeClass('stat-plus stat-minus stat-equal');
	if (oldStats[key] == 0 && newStats[key] == 0)
		div.addClass('stat-equal').text('');
	else
		if (oldStats[key] == 0)
			div.addClass('stat-plus').text('+ Inf');
		else
			if (oldStats[key] == newStats[key])
				div.addClass('stat-equal').text('');
			else
				if (oldStats[key] < newStats[key])
					div.addClass('stat-plus').text('+' + l2.ui.formatPercent(100 * (newStats[key] - oldStats[key]) / oldStats[key]) + '%');
				else
					div.addClass('stat-minus').text('-' + l2.ui.formatPercent(100 * (oldStats[key] - newStats[key]) / oldStats[key]) + '%');
	div.css({ opacity: 1 }).stop().animate({ opacity: 0 }, 3000);
};

l2.ui.recalc = function () {
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
		passives: [],
		buffs: []
	};
	char.lm = (char.lvl + 89) / 100;

	if ($('#weapon').val() != '')
		char.weapon = l2.data.tools.getItem($('#weapon').val());
	else
		char.weapon = null;
	if (char.weapon && char.weapon.skill != null) {
		var skills = char.weapon.skill.split(';');
		skills.forEach(function (str) {
			var ss = str.split('-');
			char.passives.push({ id: parseInt(ss[0]), lvl: parseInt(ss[1]) });
		});
	}

	if ($('#helmet').val() != '')
		char.helmet = l2.data.tools.getItem($('#helmet').val());
	if ($('#body-upper').val() != '')
		char.bodyUpper = l2.data.tools.getItem($('#body-upper').val());
	if ($('#body-lower').val() != '')
		char.bodyLower = l2.data.tools.getItem($('#body-lower').val());
	if ($('#gloves').val() != '')
		char.gloves = l2.data.tools.getItem($('#gloves').val());
	if ($('#boots').val() != '')
		char.boots = l2.data.tools.getItem($('#boots').val());

	if (char.bodyUpper)
		if (char.bodyUpper.bodyPart == 'onepiece')
			char.armorType = char.bodyUpper.bodyPart;
		else
			if (char.bodyUpper.bodyPart == char.bodyLower.bodyPart)
				char.armorType = char.bodyUpper.bodyPart;

	$('#passives > div > div.passive-skill').each(function () {
		var select = $(this).find('select');
		if (select.val() != '')
			char.passives.push({ id: select.data('skill-id'), lvl: parseInt(select.val()) })
	});

	$('#selfbuffs > div > div.self-skill').each(function () {
		var select = $(this).find('select');
		if (select.val() != '')
			char.passives.push({ id: select.data('skill-id'), lvl: parseInt(select.val()) })
	});
	$('#toggles > div > div.toggle-skill').each(function () {
		var select = $(this).find('select');
		if (select.val() != '')
			char.passives.push({ id: select.data('skill-id'), lvl: parseInt(select.val()) })
	});

	$('#commonbuffs > div > div > div.common-skill').each(function () {
		var select = $(this).find('select');
		if (select.val() != '') {
			var ss = select.val().split(':');
			char.buffs.push({ id: parseInt(ss[0]), lvl: parseInt(ss[1]) })
		}
	});
	$('#songbuffs > div > div.song-skill').each(function () {
		var input = $(this).find('input');
		if (input.is(':checked'))
			char.buffs.push({ id : input.data('skill-id'), lvl: 1 });
	});
	$('#dancebuffs > div > div.dance-skill').each(function () {
		var input = $(this).find('input');
		if (input.is(':checked'))
			char.buffs.push({ id : input.data('skill-id'), lvl: 1 });
	});

	l2.ui.checkSet(char);

	for (var i = 1; i <= 3; i++) {
		var div = $('#tatoo-slot-' + i);
		if (div.find('input[type=checkbox]').is(':checked')) {
			stats[div.find('select:eq(0)').val()] += parseInt(div.find('select:eq(1)').val());
			stats[div.find('select:eq(2)').val()] += parseInt(div.find('select:eq(3)').val());
		}
	}

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
	char.atkSpeed = l2.calc.atkSpeed(char);
	char.castSpeed = l2.calc.castSpeed(char);
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
	$('#pdps').text(l2.ui.tools.formatNumber(Math.round(char.pDPS)));

	var prevStats = l2.ui.prevStats;
	l2.ui.prevStats = char;

	if (l2.ui.canShowDelta && prevStats) {
		l2.ui.highlightStat(prevStats, char, 'hp', $('#hp').next());
		l2.ui.highlightStat(prevStats, char, 'cp', $('#cp').next());
		l2.ui.highlightStat(prevStats, char, 'pDef', $('#pdef').next());
		l2.ui.highlightStat(prevStats, char, 'pAtk', $('#patk').next());
		l2.ui.highlightStat(prevStats, char, 'atkSpeed', $('#atkspd').next());
		l2.ui.highlightStat(prevStats, char, 'pDPS', $('#pdps').next());
	}
};

$(function () {

	$.each(l2.data.races, function () {
		l2.ui.tools.addOption('#race', this.id, this.name);
	});

	for (var i = 0; i <= 3; i++)
		l2.ui.tools.addOption('#prof', i, i);

	for (var i = 1; i <= 85; i++)
		l2.ui.tools.addOption('#lvl', i, i);

	[100, 60, 30].forEach(function (hp) {
		l2.ui.tools.addOption('#hpperc', hp, hp);
	})

	$('#race').change(l2.ui.bindClasses);
	$('#race').change(l2.ui.classChanged);
	$('#prof').change(l2.ui.bindClasses);
	$('#prof').change(l2.ui.classChanged);
	l2.ui.bindClasses();
	$('#l2class').change(l2.ui.classChanged);
	$('#lvl').change(l2.ui.classChanged);
	l2.ui.classChanged();
	$('#hpperc').change(l2.ui.recalc);

	$.each(['str', 'dex', 'con', 'int', 'wit', 'men'], function () {
		l2.ui.tools.addOption('.tatoo-stat', this, this.toUpperCase());
	});
	for (var i = 1; i <= 4; i++)
		l2.ui.tools.addOption('.tatoo-plus', i, '+' + i);
	for (var i = 1; i <= 6; i++)
		l2.ui.tools.addOption('.tatoo-minus', -i, '-' + i);
	$('.tatoo-chb').click(l2.ui.recalc);
	$('.tatoo-stat').change(l2.ui.recalc);
	$('.tatoo-plus').change(l2.ui.recalc);
	$('.tatoo-minus').change(l2.ui.recalc);

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

	$('#weapon').change(l2.ui.recalc);
	$('#shield').change(l2.ui.recalc);
	$('#helmet').change(l2.ui.recalc);
	$('#body-upper').change(l2.ui.recalc);
	$('#body-lower').change(l2.ui.recalc);
	$('#boots').change(l2.ui.recalc);
	$('#gloves').change(l2.ui.recalc);

	l2.ui.bindBuffs();

	$('#equipment-chb').click(l2.ui.toggleFieldSet);
	$('#selfbuffs-chb').click(l2.ui.toggleFieldSet);
	$('#toggles-chb').click(l2.ui.toggleFieldSet);
	$('#commonbuffs-chb').click(l2.ui.toggleFieldSet);
	$('#songbuffs-chb').click(l2.ui.toggleFieldSet);
	$('#dancebuffs-chb').click(l2.ui.toggleFieldSet);
	$('#passives-chb').click(l2.ui.toggleFieldSet);

	$('select[data-storage]').change(l2.ui.onChangeSaveToStorage);
	$('input[type=checkbox][data-storage]').click(l2.ui.onChangeSaveToStorage);

	if (localStorage.length == 0) {
		$('select[data-storage], input[type=checkbox][data-storage]').each(l2.ui.onChangeSaveToStorage);
	} else
		l2.ui.restoreFromStorage();

	l2.ui.canShowDelta = true;
});