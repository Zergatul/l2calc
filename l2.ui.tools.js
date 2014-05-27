window.l2 = window.l2 || {};
window.l2.ui = window.l2.ui || {};
window.l2.ui.tools = window.l2.ui.tools || {};

l2.ui.tools.addOption = function (element, value, text) {
	$(element).append($('<option>').val(value).text(text));
};

l2.ui.tools.storageChange = function (key) {
	return function () {
		localStorage[key] = $(this).val();
	};
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