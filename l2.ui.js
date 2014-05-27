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
	l2.ui.recalc();
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
		var chest = l2.data.tools.getArmor(this.chest);
		if (chest.grade == grade)
			l2.ui.tools.addOption('#set', this.skillId, l2.data.tools.getSkill(this.skillId).name);
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
		var armor = l2.data.tools.getArmor(set.chest);
		$('#body-upper-grade').val(armor.grade);
		l2.ui.bindBodyUpper();
		$('#body-upper').val(set.chest);
	}
	if (set.legs != 0) {
		var armor = l2.data.tools.getArmor(set.legs);
		$('#body-lower-grade').val(armor.grade);
		l2.ui.bindBodyLower();
		$('#body-lower').val(set.legs);
	}
	if (set.head != 0) {
		var armor = l2.data.tools.getArmor(set.head);
		$('#helmet-grade').val(armor.grade);
		l2.ui.bindHelmets();
		$('#helmet').val(set.head);
	}
	if (set.gloves != 0) {
		var armor = l2.data.tools.getArmor(set.gloves);
		$('#gloves-grade').val(armor.grade);
		l2.ui.bindGloves();
		$('#gloves').val(set.gloves);
	}
	if (set.feet != 0) {
		var armor = l2.data.tools.getArmor(set.feet);
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
	var classesId = l2.data.tools.getBaseClasses(classId);	
	for (var i = 0; i < l2.data.skillTree.length; i++) {
		var st = l2.data.skillTree[i];
		if (classesId.indexOf(st.classId) >= 0)
			if (skills.indexOf(st.skillId) == -1)
				skills.push(st.skillId);
	}
	$('#passives > div.passive-skill').remove();
	for (var i = 0; i < skills.length; i++) {
		var skill = l2.data.tools.getSkill(skills[i]);
		if (skill && skill.operateType == 'OP_PASSIVE') {
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
			$('#passives').append(div);
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

l2.ui.bindCommonBuffs = function () {
	var stacks = {};
	for (var i = 0; i < l2.data.commonBuffs.length; i++) {
		var skill = l2.data.tools.getSkill(l2.data.commonBuffs[i]);
		if (skill.stackType == null) {
			throw 'not implemented';
		} else
			if (stacks[skill.stackType] == undefined) {
				var div = $('<div>').addClass('left common-skill');
				var select = $('<select>').data('skill-id', skill.id);
				select.attr('data-stack', skill.stackType);
				select.change(l2.ui.recalc);
				l2.ui.tools.addOption(select, '', '---');
				for (var j = 0; j < skill.levels; j++)
					l2.ui.tools.addOption(select, skill.id + ':' + (j + 1), skill.name + ' ' + (j + 1));
				div.append(select);
				$('#commonbuffs').append(div);
				stacks[skill.stackType] = { select: select };
			} else {
				for (var j = 0; j < skill.levels; j++)
					l2.ui.tools.addOption(stacks[skill.stackType].select, skill.id + ':' + (j + 1), skill.name + ' ' + (j + 1));
			}
		
	}
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
		$('#songbuffs').append(div);
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
		$('#dancebuffs').append(div);
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

l2.ui.restoreFromStorage = function () {
	$('#race').val(localStorage.race);
	$('#prof').val(localStorage.prof);
	l2.ui.bindClasses();

	$('#l2class').val(localStorage.classId);
	l2.ui.bindPassives();

	$('#lvl').val(localStorage.lvl);
	l2.ui.autoSelectPassives();

	$('#weapon-grade').val(localStorage.weaponGrade);
	$('#weapon-type').val(localStorage.weaponType);
	l2.ui.bindWeapons();
	$('#weapon').val(localStorage.weaponId);

	l2.ui.recalc();

	l2.ui.canChangeStorage = true;
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
					div.addClass('stat-plus').text('+' + Math.round(100 * (newStats[key] - oldStats[key]) / oldStats[key]) + '%');
				else
					div.addClass('stat-minus').text('-' + Math.round(100 * (oldStats[key] - newStats[key]) / oldStats[key]) + '%');
	div.css({ opacity: 1 }).stop().animate({ opacity: 0 }, 3000);
};

l2.ui.recalc = function () {
	var classId = parseInt($('#l2class').val());
	var $class = l2.data.tools.getClass(classId);
	var baseStats = l2.data.subRace[$class.subRace];
	var stats = $.extend({}, baseStats.stats);

	var char = {
		classId: classId,
		$class: $class,
		stats: stats,
		lvl: parseInt($('#lvl').val()),
		passives: [],
		buffs: []
	};
	char.lm = (char.lvl + 89) / 100;

	if ($('#weapon').val() != '')
		char.weapon = l2.data.tools.getWeapon($('#weapon').val());
	else
		char.weapon = null;

	$('#passives > div.passive-skill').each(function () {
		var select = $(this).find('select');
		if (select.val() != '')
			char.passives.push({ id: select.data('skill-id'), lvl: parseInt(select.val()) })
	});

	$('#commonbuffs > div.common-skill').each(function () {
		var select = $(this).find('select');
		if (select.val() != '') {
			var ss = select.val().split(':');
			char.buffs.push({ id: parseInt(ss[0]), lvl: parseInt(ss[1]) })
		}
	});
	$('#songbuffs > div.song-skill').each(function () {
		var input = $(this).find('input');
		if (input.is(':checked'))
			char.buffs.push({ id : input.data('skill-id'), lvl: 1 });
	});
	$('#dancebuffs > div.dance-skill').each(function () {
		var input = $(this).find('input');
		if (input.is(':checked'))
			char.buffs.push({ id : input.data('skill-id'), lvl: 1 });
	});

	$('#str').text(stats.str);
	$('#dex').text(stats.dex);
	$('#con').text(stats.con);
	$('#int').text(stats.int);
	$('#wit').text(stats.wit);
	$('#men').text(stats.men);

	char.hp = l2.calc.HP(char);
	char.pAtk = l2.calc.pAtk(char);
	char.pCritical = l2.calc.pCritical(char);
	char.pCritMultiplier = l2.calc.pCritMultiplier(char);
	char.atkSpeed = l2.calc.atkSpeed(char);
	char.pDPS = l2.calc.pDPS(char);
	$('#hp').text(char.hp);
	$('#patk').text(char.pAtk);
	$('#pcritical').text(char.pCritical);
	$('#pcritmult').text(char.pCritMultiplier.toFixed(5));
	$('#atkspd').text(char.atkSpeed);
	$('#pdps').text(l2.ui.tools.formatNumber(Math.round(char.pDPS)));

	var prevStats = l2.ui.prevStats;
	l2.ui.prevStats = char;

	if (l2.ui.canShowDelta && prevStats) {
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

	$('#race').change(l2.ui.bindClasses);
	$('#prof').change(l2.ui.bindClasses);
	l2.ui.bindClasses();
	$('#l2class').change(l2.ui.bindPassives);
	$('#lvl').change(l2.ui.autoSelectPassives);
	$('#lvl').change(l2.ui.recalc);
	l2.ui.bindPassives();

	$.each(l2.data.grades, function () {
		l2.ui.tools.addOption('.grade', this.code, this.name);
	});

	$.each(l2.data.weaponTypes, function () {
		l2.ui.tools.addOption('#weapon-type', this.code, this.name);
	});
	
	$('#weapon-grade').change(l2.ui.bindWeapons);
	$('#weapon-type').change(l2.ui.bindWeapons);
	$('#weapon').change(l2.ui.recalc);
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

	l2.ui.bindBuffs();

	$('#race').change(l2.ui.tools.storageChange('race'));
	$('#prof').change(l2.ui.tools.storageChange('prof'));
	$('#l2class').change(l2.ui.tools.storageChange('classId'));
	$('#lvl').change(l2.ui.tools.storageChange('lvl'));
	$('#weapon-grade').change(l2.ui.tools.storageChange('weaponGrade'));
	$('#weapon-type').change(l2.ui.tools.storageChange('weaponType'));
	$('#weapon').change(l2.ui.tools.storageChange('weaponId'));

	if (localStorage.length == 0) {
		localStorage.race = $('#race').val();
		localStorage.prof = $('#prof').val();
		localStorage.classId = $('#l2class').val();
		localStorage.lvl = $('#lvl').val();
		localStorage.weaponGrade = $('#weapon-grade').val();
		localStorage.weaponType = $('#weapon-type').val();
		localStorage.weaponId = $('#weapon').val();
	}
	l2.ui.restoreFromStorage();

	l2.ui.canShowDelta = true;
});
