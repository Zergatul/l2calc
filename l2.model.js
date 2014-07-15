window.l2 = window.l2 || {};

(function () {

	var handlers = {};
	var globalHandlers = [];

	var notifyPropertyChanged = function (property, value) {
		if (handlers[property])
			handlers[property].forEach(function (handler) {
				handler(value);
			});
		globalHandlers.forEach(function (handler) {
			handler();
		});
	};

	var addHandler = function (property, handler) {
		if (!handlers[property])
			handlers[property] = [];
		handlers[property].push(handler);
	};

	var addGlobalHandler = function (handler) {
		globalHandlers.push(handler);
	};

	var getValue = function (model) {

	};

	var setValue = function (model, value) {
		var obj = l2.model;
		var parts = model.split('.');
		for (var i = 0; i < parts.length - 1; i++)
			obj = obj[parts[i]];
		obj[parts[parts.length - 1]] = value;
	};

	var L2Item = function (itemType) {
		var grade = null;
		Object.defineProperty(this, 'grade', {
			get: function () { return grade; },
			set: function (value) {
				value = value.toLowerCase();
				if (['d', 'c', 'b', 'a', 's', 's80', 's84'].indexOf(value) >= 0)
					grade = value;
				else
					if (value == 'none')
						grade = null;
					else
						throw 'Invalid grade';
				notifyPropertyChanged(itemType + '.grade', grade);
			}
		});
		var enchant = 0;
		Object.defineProperty(this, 'enchant', {
			get: function () { return enchant; },
			set: function (value) {
				if (value == null || value == '')
					enchant = 0;
				else {
					var intVal = parseInt(value);
					if (!isNaN(intVal) && intVal.toString() == value.toString() && intVal >= 0)
						enchant = intVal;
					else
						throw 'Invalid enchant';
				}
				notifyPropertyChanged(itemType + '.enchant', enchant);
			}
		});
		var id = null;
		Object.defineProperty(this, 'id', {
			get: function () { return id; },
			set: function (value) {
				if (value == null || value == '')
					id = null;
				else {
					var intVal = parseInt(value);
					if (!isNaN(intVal) && intVal.toString() == value.toString())
						id = intVal;
					else
						throw 'Invalid id';
				}
				notifyPropertyChanged(itemType + '.id', id);
			}
		});
	};

	var L2Weapon = function () {
		L2Item.call(this, 'weapon');

		var type = 'bigsword';
		Object.defineProperty(this, 'type', {
			get: function () { return type; },
			set: function (value) {
				type = value.toLowerCase();
				notifyPropertyChanged('weapon.type', type);
			}
		});
	};

	window.l2.model = {
		addHandler: addHandler,
		addGlobalHandler: addGlobalHandler,
		getValue: getValue,
		setValue: setValue,
		weapon: new L2Weapon(),
		shield: new L2Item('shield'),
		helmet: new L2Item('helmet'),
		bodyUpper: new L2Item('bodyUpper'),
		bodyLower: new L2Item('bodyLower'),
		gloves: new L2Item('gloves'),
		boots: new L2Item('boots'),
		underwear: new L2Item('underwear'),
		belt: new L2Item('belt'),
		necklace: new L2Item('necklace'),
		earring1: new L2Item('earring1'),
		earring2: new L2Item('earring2'),
		ring1: new L2Item('ring1'),
		ring2: new L2Item('ring2')
	};

})();