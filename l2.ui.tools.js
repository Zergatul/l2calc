window.l2 = window.l2 || {};
window.l2.ui = window.l2.ui || {};
window.l2.ui.tools = window.l2.ui.tools || {};

l2.ui.tools.addOption = function (element, value, text, callback) {
	var option = $('<option>').val(value).text(text);
	$(element).append(option);
	if ($.isFunction(callback))
		callback(option);
	return option;
};

l2.ui.tools.formatNumber = function (number) {
	var str = number.toString();
	while (true) {
		var strNew = str.replace(/(\d)(\d{3})((,\d{3})*)$/g, '$1,$2$3');
		if (strNew == str)
			break;
		str = strNew;
	}
	return str;
};