window.l2 = window.l2 || {};

(function () {

	var weaponGrade = null;
	var weaponType = 'bigsword';
	var weaponId = null;

	var validateGrade = function (value) {
		value = value.toLowerCase();
		if (['d', 'c', 'b', 'a', 's', 's80', 's84'].indexOf(value) >= 0)
			return value;
		else
			if (value == 'none')
				return null;
			else
				throw 'Invalid grade';
	};

	var validateId = function (value) {
		if (value == null || value == '') {
			return null;
		} else {
			var id = parseInt(value);
			if (!isNaN(id) && id.toString() == value.toString())
				return id;
			else
				throw 'Invalid id';
		}
	};

	window.l2.model = {
		weapon: {
			get grade () { return weaponGrade; },
			set grade (value) {
				weaponGrade = validateGrade(value);
				$('#weapon-grade').val(weaponGrade);
			},
			get type () { return weaponType; },
			set type (value) {
				value = value.toLowerCase();
				if (l2.data.weaponTypes.indexOf(value) >= 0) {
					weaponGrade = value;
					$('#weapon-type').val(value);
				} else
					throw 'Invalid type';
			},
			get id () { return weaponId; },
			set id (value) {
				weaponId = validateId(value);
				$('#weapon').val(weaponId);
			},
			get item () {
				if (weaponId)
					return l2.data.tools.getItem(weaponId);
				else
					return null;
			}
		}
	};

})();