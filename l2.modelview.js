window.l2.modelView = {};

l2.modelView.isCorrectView = function (isSummon) {
	if (l2.ui.summonView && !isSummon)
		return false;
	if (!l2.ui.summonView && isSummon)
		return false;
	return true;
};

l2.modelView.addTrigger = function (s, sender, isSummon) {
	if (l2.ui.disableValuesUpdate)
		return;
	if (!l2.modelView.isCorrectView(isSummon))
		return;
	var skill = s.skill;
	if (skill == null)
		return;
	var div = $('<div>').addClass('left trigger-skill');
	var label = $('<label>');
	var input = $('<input>').attr('type', 'checkbox')
		.attr('data-skill-id', skill.id);
	if (s.level)
		input[0].checked = true;
	input.change(l2.ui.createChangeSkillListHandler('triggers', skill.id));
	label.append(input);
	label.append(skill.name);
	div.append(label);
	$('#triggers > div').append(div);
};

l2.modelView.addSelfBuff = function (sb, isSummon) {
	if (!l2.modelView.isCorrectView(isSummon))
		return;
	var skill = sb.skill;
	var div = $('<div>').addClass('left self-skill');
	var select = $('<select>');
	select.attr('data-skill-id', skill.id);
	select.change(l2.ui.createChangeSkillListHandler('selfBuffs', skill.id));
	l2.ui.tools.addOption(select, '', '---');
	for (var i = 0; i < sb.data.length; i++)
		l2.ui.tools.addOption(select, sb.data[i].lvl, sb.data[i].lvl + ' [' + sb.data[i].minLvl + ']');
	if (sb.level)
		select.val(sb.level);
	div.append(select);
	div.append($('<span>').text(skill.name));
	$('#selfbuffs > div').append(div);
};