window.l2 = window.l2 || {};
window.l2.data = window.l2.data || {};

l2.data.skills = [
	{ id: 4, levels: 2, name: 'Dash', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up_special', effects: [
		{ stat: 'runSpd', val: [40, 66], op: 'add' } ]},
	{ id: 72, levels: 3, name: 'Iron Will', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 75, levels: 1, name: 'Detect Insect Weakness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'detect_weakness', effects: [
		{ stat: 'pAtk-insects', val: 1.3, op: 'mul' } ]},
	{ id: 76, levels: 1, name: 'Bear Spirit Totem', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'possession', effects: [
		{ stat: 'pAtk', val: 1.2, op: 'mul', using: 'Dual Fist' },
		{ stat: 'cAtk', val: 1.2, op: 'mul', using: 'Dual Fist' },
		{ stat: 'runSpd', val: 0.7, op: 'mul' } ]},
	{ id: 77, levels: 2, name: 'Attack Aura', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12], op: 'mul' } ]},
	{ id: 78, levels: 2, name: 'War Cry', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up_special', effects: [
		{ stat: 'pAtk', val: [1.2, 1.25], op: 'mul' } ]},
	{ id: 80, levels: 1, name: 'Detect Beast Weakness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'detect_weakness', effects: [
		{ stat: 'pAtk-monsters', val: 1.3, op: 'mul' } ]},
	{ id: 82, levels: 3, name: 'Majesty', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pDef', val: [1.07, 1.11, 1.15], op: 'mul' },
		{ stat: 'rEvas', val: [2, 4, 6], op: 'sub' } ]},
	{ id: 83, levels: 1, name: 'Wolf Spirit Totem', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'possession', effects: [
		{ stat: 'runSpd', val: 1.2, op: 'mul', using: 'Dual Fist' },
		{ stat: 'accCombat', val: 3, op: 'add', using: 'Dual Fist' } ]},
	{ id: 87, levels: 1, name: 'Detect Animal Weakness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'detect_weakness', effects: [
		{ stat: 'pAtk-animals', val: 1.3, op: 'mul' } ]},
	{ id: 88, levels: 1, name: 'Detect Dragon Weakness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'detect_weakness', effects: [
		{ stat: 'pAtk-dragons', val: 1.3, op: 'mul' } ]},
	{ id: 91, levels: 2, name: 'Defense Aura', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12], op: 'mul' } ]},
	{ id: 94, levels: 2, name: 'Rage', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up_special', effects: [
		{ stat: 'pAtk', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: [1.21, 1.29], op: 'mul', using: 'Sword,Big Sword,Blunt,Big Blunt,Pole' },
		{ stat: 'pAtk', val: [1.07, 1.06], op: 'mul', using: 'Big Sword,Big Blunt' },
		{ stat: 'accCombat', val: [2, 4], op: 'add', using: 'Big Sword,Big Blunt' },
		{ stat: 'pDef', val: 0.8, op: 'mul' },
		{ stat: 'rEvas', val: 3, op: 'sub' } ]},
	{ id: 99, levels: 2, name: 'Rapid Shot', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtkSpd', val: [1.08, 1.12], op: 'mul', using: 'Bow' } ]},
	{ id: 104, levels: 1, name: 'Detect Plant Weakness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'detect_weakness', effects: [
		{ stat: 'pAtk-plants', val: 1.3, op: 'mul' } ]},
	{ id: 109, levels: 1, name: 'Ogre Spirit Totem', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'possession', effects: [
		{ stat: 'pAtk', val: 1.3, op: 'mul', using: 'Dual Fist' },
		{ stat: 'pDef', val: 1.3, op: 'mul', using: 'Dual Fist' },
		{ stat: 'mDef', val: 1.3, op: 'mul', using: 'Dual Fist' },
		{ stat: 'cAtk', val: 1.1, op: 'mul', using: 'Dual Fist' } ]},
	{ id: 110, levels: 2, name: 'Ultimate Defense', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ImmobileBuff', stackType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: [1800, 3600], op: 'add' },
		{ stat: 'mDef', val: [1350, 2700], op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 111, levels: 2, name: 'Ultimate Evasion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'avoid_up_special', effects: [
		{ stat: 'pSkillEvas', val: [25, 40], op: 'add' },
		{ stat: 'rEvas', val: [20, 25], op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 112, levels: 4, name: 'Deflect Arrow', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'bowWpnVuln', val: [0.84, 0.76, 0.68, 0.6], op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: [0.92, 0.88, 0.84, 0.8], op: 'mul' } ]},
	{ id: 113, levels: 2, name: 'Long Shot', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkRange', val: [200, 400], op: 'add', using: 'Bow' } ]},
	{ id: 118, levels: 1, name: 'Magician\'s Movement', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 0.8, op: 'mul' } ]},
	{ id: 123, levels: 3, name: 'Spirit Barrier', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 130, levels: 2, name: 'Thrill Fight', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.1], op: 'mul' } ]},
	{ id: 131, levels: 3, name: 'Hawk Eye', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'HawkEye', effects: [
		{ stat: 'accCombat', val: [6, 8, 10], op: 'add' },
		{ stat: 'pDef', val: 0.9, op: 'mul' } ]},
	{ id: 134, levels: 1, name: 'Toughness', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: 20, op: 'sub' },
		{ stat: 'sleepVuln', val: 20, op: 'sub' },
		{ stat: 'poisonVuln', val: 20, op: 'sub' } ]},
	{ id: 137, levels: 4, name: 'Critical Chance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [0.2, 0.3, 0.4, 0.5], op: 'basemul' } ]},
	{ id: 139, levels: 3, name: 'Guts', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pinch', effects: [
		{ stat: 'pDef', val: [2, 2.5, 3], op: 'mul' } ]},
	{ id: 141, levels: 3, name: 'Weapon Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.085, op: 'mul' },
		{ stat: 'pAtk', val: [2, 3, 4], op: 'add' } ]},
	{ id: 142, levels: 5, name: 'Armor Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [9, 11, 12, 13, 14], op: 'add' },
		{ stat: 'rEvas', val: [0, 0, 0, 3, 3], op: 'add' } ]},
	{ id: 144, levels: 37, name: 'Dual Weapon Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [23.7, 25.4, 27.1, 29, 30.9, 32.9, 35, 37.1, 39.4, 41.7, 44.1, 46.6, 49.2, 51.9, 54.6, 57.5, 60.4, 63.3, 66.4, 69.5, 72.7, 76, 79.3, 82.7, 86.1, 89.6, 93.1, 96.6, 100.2, 103.8, 107.5, 111.1, 114.8, 118.4, 122.1, 125.7, 129.3], op: 'add', using: 'Dual Sword' } ]},
	{ id: 146, levels: 45, name: 'Anti Magic', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: [10, 12, 14, 16, 18, 20, 23, 25, 28, 30, 34, 36, 40, 42, 43, 46, 47, 49, 52, 54, 56, 59, 61, 63, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 91, 93, 95, 97, 99, 102, 104, 106, 108], op: 'add' },
		{ stat: 'magicDamVul', val: [1, 1, 0.95, 0.95, 0.95, 0.95, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7], op: 'mul' } ]},
	{ id: 147, levels: 51, name: 'Magic Resistance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: [22, 24, 26, 28, 29, 31, 32, 33, 36, 37, 39, 42, 43, 45, 48, 50, 51, 53, 55, 57, 59, 61, 62, 64, 67, 69, 71, 73, 75, 77, 79, 82, 84, 86, 89, 91, 94, 96, 98, 101, 103, 106, 109, 111, 114, 116, 119, 122, 124, 127, 130], op: 'add' },
		{ stat: 'magicDamVul', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8], op: 'mul' } ]},
	{ id: 148, levels: 8, name: 'Vital Force', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regHp', val: [1.9, 2.7, 2.9, 3.6, 4.5, 4.7, 5.6, 6.7], op: 'add' },
		{ stat: 'regMp', val: [1.9, 2.1, 2.2, 2.5, 2.7, 2.8, 3.1, 3.5], op: 'add' } ]},
	{ id: 150, levels: 3, name: 'Weight Limit', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxLoad', val: [2, 3, 4], op: 'mul' } ]},
	{ id: 153, levels: 4, name: 'Shield Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rShld', val: [1.5, 1.7, 1.85, 2], op: 'mul' },
		{ stat: 'sDef', val: [1.3, 1.4, 1.5, 1.6], op: 'mul' },
		{ stat: 'pDef', val: [1, 1, 1.1, 1.1], op: 'mul' } ]},
	{ id: 163, levels: 1, name: 'Spellcraft', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtkSpd', val: 0.5, op: 'mul' } ]},
	{ id: 164, levels: 3, name: 'Quick Recycle', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mReuse', val: [0.9, 0.85, 0.8], op: 'mul' } ]},
	{ id: 168, levels: 3, name: 'Boost Attack Speed', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: [1.05, 1.07, 1.1], op: 'mul' } ]},
	{ id: 169, levels: 2, name: 'Quick Step', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: [7, 11], op: 'add' } ]},
	{ id: 171, levels: 8, name: 'Esprit', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regHp', val: [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6], op: 'add' },
		{ stat: 'regMp', val: [1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5], op: 'add' } ]},
	{ id: 173, levels: 2, name: 'Acrobatics', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fall', val: [60, 100], op: 'sub' } ]},
	{ id: 176, levels: 3, name: 'Frenzy', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pinch', effects: [
		{ stat: 'pAtk', val: [1.3, 1.3, 1.5], op: 'mul' },
		{ stat: 'pAtk', val: [1.54, 1.92, 2.31], op: 'mul' },
		{ stat: 'pAtk', val: [1.25, 1.2, 1.16], op: 'mul' },
		{ stat: 'accCombat', val: [2, 4, 6], op: 'add' } ]},
	{ id: 191, levels: 6, name: 'Focus Mind', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: [3.1, 3.5, 3.9, 4.3, 4.7, 5.1], op: 'add' } ]},
	{ id: 193, levels: 7, name: 'Critical Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: [32, 56, 93, 177, 295, 384, 406], op: 'add' } ]},
	{ id: 195, levels: 2, name: 'Breath Boost', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'breath', val: [180, 300], op: 'add' } ]},
	{ id: 198, levels: 3, name: 'Boost Evasion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: [2, 3, 4], op: 'add' } ]},
	{ id: 205, levels: 45, name: 'Blunt Weapon Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [4.5, 7.3, 8.9, 10.7, 12.8, 15.1, 17.7, 20.5, 23.7, 25.4, 27.1, 29, 30.9, 32.9, 35, 37.1, 39.4, 41.7, 44.1, 46.6, 49.2, 51.9, 54.6, 57.5, 60.4, 63.3, 66.4, 69.5, 72.7, 76, 79.3, 82.7, 86.1, 89.6, 93.1, 96.6, 100.2, 103.8, 107.5, 111.1, 114.8, 118.4, 122.1, 125.7, 129.3], op: 'add', using: 'Blunt,Big Blunt' } ]},
	{ id: 208, levels: 52, name: 'Bow Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [10.3, 11.4, 27.6, 32.8, 35.6, 38.6, 45.2, 48.9, 52.7, 61.1, 65.6, 70.4, 80.9, 86.5, 92.4, 105.1, 111.9, 178.8, 189.9, 201.4, 213.5, 226, 239.1, 252.7, 266.7, 281.3, 296.4, 311.9, 328, 344.5, 361.6, 379.1, 397, 415.4, 434.3, 453.5, 473.2, 493.1, 513.5, 534.2, 555.1, 576.3, 597.8, 619.4, 641.2, 663.1, 685, 707.1, 729.1, 751, 772.9, 794.6], op: 'add', using: 'Bow' } ]},
	{ id: 209, levels: 45, name: 'Dagger Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [3.6, 6, 7.4, 9, 10.8, 12.8, 15.1, 17.6, 20.3, 21.8, 23.4, 25, 26.6, 28.4, 30.2, 32.1, 34.1, 36.1, 38.2, 40.4, 42.7, 45, 47.4, 49.9, 52.4, 55, 57.7, 60.4, 63.2, 66.1, 69, 71.9, 74.9, 78, 81.1, 84.2, 87.3, 90.5, 93.7, 96.8, 100, 103.2, 106.4, 109.6, 112.8], op: 'add', using: 'Dagger,Dual Dagger' } ]},
	{ id: 210, levels: 45, name: 'Fist Weapon Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [4.5, 7.3, 8.9, 10.7, 12.8, 15.1, 17.7, 20.5, 23.7, 25.4, 27.1, 29, 30.9, 32.9, 35, 37.1, 39.4, 41.7, 44.1, 46.6, 49.2, 51.9, 54.6, 57.5, 60.4, 63.3, 66.4, 69.5, 72.7, 76, 79.3, 82.7, 86.1, 89.6, 93.1, 96.6, 100.2, 103.8, 107.5, 111.1, 114.8, 118.4, 122.1, 125.7, 129.3], op: 'add', using: 'Dual Fist' } ]},
	{ id: 211, levels: 10, name: 'Boost HP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: [60, 100, 150, 200, 250, 300, 350, 400, 440, 480], op: 'add' } ]},
	{ id: 212, levels: 8, name: 'Fast HP Recovery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regHp', val: [1.1, 1.6, 1.7, 2.1, 2.6, 2.7, 3.4, 4], op: 'add' } ]},
	{ id: 213, levels: 8, name: 'Boost Mana', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: [30, 50, 70, 100, 140, 152, 180, 200], op: 'add' } ]},
	{ id: 214, levels: 1, name: 'Mana Recovery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 1.2, op: 'mul' } ]},
	{ id: 216, levels: 45, name: 'Polearm Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [4.5, 7.3, 8.9, 10.7, 12.8, 15.1, 17.7, 20.5, 23.7, 25.4, 27.1, 29, 30.9, 32.9, 35, 37.1, 39.4, 41.7, 44.1, 46.6, 49.2, 51.9, 54.6, 57.5, 60.4, 63.3, 66.4, 69.5, 72.7, 76, 79.3, 82.7, 86.1, 89.6, 93.1, 96.6, 100.2, 103.8, 107.5, 111.1, 114.8, 118.4, 122.1, 125.7, 129.3], op: 'add', using: 'Pole' },
		{ stat: 'atkCountMax', val: [10, 10, 10, 10, 10, 10, 10, 10, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15], op: 'add', using: 'Pole' } ]},
	{ id: 217, levels: 45, name: 'Sword/Blunt Weapon Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [1.5, 3.1, 4.1, 5.2, 6.5, 7.9, 9.4, 11.1, 13, 14, 15.1, 16.2, 17.3, 18.5, 19.8, 21.1, 22.4, 23.8, 25.3, 26.8, 28.3, 29.9, 31.6, 33.3, 35, 36.8, 38.6, 40.5, 42.4, 44.4, 46.4, 48.4, 50.4, 52.5, 54.6, 56.8, 58.9, 61.1, 63.3, 65.5, 67.6, 69.8, 72, 74.2, 76.4], op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt' } ]},
	{ id: 225, levels: 3, name: 'Acrobatic Move', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: [4, 5, 6], op: 'add' } ]},
	{ id: 227, levels: 50, name: 'Light Armor Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [4.2, 5.3, 6.5, 7.7, 9, 9.9, 10.8, 12.7, 13.7, 14.8, 16.9, 18, 19.1, 21.5, 22.7, 24, 25.3, 26.6, 27.9, 29.3, 30.7, 32.1, 33.6, 35, 36.5, 38.1, 39.6, 41.2, 42.8, 44.5, 46.1, 47.8, 49.5, 51.3, 53, 54.8, 56.6, 58.4, 60.2, 62.1, 64, 65.8, 67.7, 69.7, 71.6, 73.5, 75.5, 77.4, 79.4, 81.3], op: 'add' },
		{ stat: 'rEvas', val: [3, 3, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], op: 'add' } ]},
	{ id: 228, levels: 3, name: 'Fast Spell Casting', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtkSpd', val: [1.05, 1.07, 1.1], op: 'mul' } ]},
	{ id: 229, levels: 7, name: 'Fast Mana Recovery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: [1.1, 1.5, 1.9, 2.3, 2.7, 3.1, 3.4], op: 'add' } ]},
	{ id: 230, levels: 2, name: 'Sprint', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [22, 33], op: 'add' } ]},
	{ id: 231, levels: 50, name: 'Heavy Armor Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [1.9, 3.3, 4.8, 6.4, 8.1, 8.9, 9.8, 11.7, 12.7, 13.7, 15.8, 16.9, 18, 20.4, 21.6, 22.8, 24.1, 25.4, 26.7, 28, 29.4, 30.8, 32.2, 33.7, 35.2, 36.7, 38.2, 39.8, 41.4, 43, 44.6, 46.3, 48, 49.7, 51.4, 53.2, 55, 56.7, 58.6, 60.4, 62.2, 64.1, 66, 67.8, 69.7, 71.6, 73.6, 75.5, 77.4, 79.3], op: 'add' } ]},
	{ id: 232, levels: 52, name: 'Heavy Armor Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [17.7, 19.1, 20.5, 23.5, 25, 26.7, 30, 31.8, 33.6, 37.4, 39.3, 41.3, 45.6, 47.7, 50, 54.6, 57.1, 59.5, 62.1, 64.6, 67.3, 70, 72.7, 75.5, 78.4, 81.3, 84.3, 87.3, 90.4, 93.5, 96.7, 99.9, 103.2, 106.5, 109.9, 113.3, 116.8, 120.3, 123.8, 127.4, 131, 134.7, 138.4, 142.1, 145.8, 149.6, 153.4, 157.2, 161, 164.9, 168.7, 172.6], op: 'add' },
		{ stat: 'critVuln', val: [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65], op: 'mul' } ]},
	{ id: 233, levels: 47, name: 'Light Armor Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [1.3, 2.2, 3.2, 4.2, 5.3, 6.8, 8.4, 10.1, 11.9, 13.7, 15.7, 16.7, 17.8, 18.8, 19.9, 21.1, 22.2, 23.4, 24.5, 25.8, 27, 28.2, 29.5, 30.8, 32.1, 33.5, 34.8, 36.2, 37.6, 39.1, 40.5, 42, 43.5, 44.9, 46.5, 48, 49.5, 51.1, 52.7, 54.2, 55.8, 57.4, 59.1, 60.7, 62.3, 63.9, 65.6], op: 'add' },
		{ stat: 'rEvas', val: [4, 4, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], op: 'add' },
		{ stat: 'critDamEvas', val: [1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35], op: 'mul' } ]},
	{ id: 234, levels: 41, name: 'Robe Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [1.7, 2.7, 4.3, 5.4, 7.2, 8.5, 10.6, 12.1, 14.5, 15.3, 16.2, 17.9, 18.8, 19.8, 21.7, 22.7, 23.7, 25.8, 26.8, 27.9, 30.1, 31.2, 32.4, 33.5, 34.7, 35.9, 37.1, 38.4, 39.6, 40.8, 42.1, 43.4, 44.7, 45.9, 47.3, 48.6, 49.9, 51.2, 52.5, 53.9, 55.2], op: 'add' } ]},
	{ id: 235, levels: 41, name: 'Robe Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [7.2, 8.6, 11, 12.7, 15.4, 17.4, 20.5, 22.7, 26.3, 27.6, 28.8, 31.5, 32.9, 34.2, 37.1, 38.6, 40.1, 43.2, 44.8, 46.4, 49.8, 51.5, 53.2, 54.9, 56.7, 58.5, 60.3, 62.1, 64, 65.9, 67.7, 69.7, 71.6, 73.5, 75.5, 77.4, 79.4, 81.4, 83.4, 85.4, 87.4], op: 'add' } ]},
	{ id: 236, levels: 41, name: 'Light Armor Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [5.4, 6.3, 7.8, 8.8, 10.9, 12.5, 15, 16.9, 19.8, 20.8, 21.8, 24, 25.1, 26.3, 28.6, 29.8, 31, 33.6, 34.9, 36.2, 38.9, 40.3, 41.7, 43.1, 44.6, 46, 47.5, 49, 50.5, 52.1, 53.6, 55.2, 56.7, 58.3, 59.9, 61.5, 63.1, 64.7, 66.4, 68, 69.6], op: 'add' },
		{ stat: 'mAtkSpd', val: 1.91, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.25, op: 'mul' },
		{ stat: 'regMp', val: 1.2, op: 'mul' } ]},
	{ id: 244, levels: 3, name: 'Armor Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [6.7, 8, 9.2], op: 'add' } ]},
	{ id: 249, levels: 42, name: 'Weapon Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [1.5, 2.8, 4.5, 5.7, 6.7, 8.3, 9.5, 11.6, 13.3, 16, 17, 18.1, 20.4, 21.6, 22.8, 25.5, 26.9, 28.3, 31.4, 33, 34.6, 38, 39.8, 41.7, 43.5, 45.4, 47.4, 49.4, 51.4, 53.5, 55.6, 57.7, 59.9, 62, 64.1, 66.8, 68.5, 70.7, 72.9, 75.1, 77.2, 79.4], op: 'add' },
		{ stat: 'mAtk', val: [1.9, 3.5, 5.7, 7.2, 8.3, 10.3, 11.9, 14.6, 16.6, 20, 21.3, 22.6, 25.4, 26.9, 28.5, 31.8, 33.6, 35.4, 39.2, 41.2, 43.2, 47.5, 49.8, 52.1, 54.4, 56.8, 59.2, 61.7, 64.3, 66.8, 69.4, 72.1, 74.8, 77.4, 80.2, 82.9, 85.6, 88.4, 91.1, 93.8, 96.5, 99.3], op: 'add' },
		{ stat: 'pAtk', val: [1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45], op: 'mul' },
		{ stat: 'mAtk', val: [1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17], op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.7, op: 'mul', using: 'Bow,Pole' },
		{ stat: 'accCombat', val: 9, op: 'sub', using: 'Bow,Pole' } ]},
	{ id: 250, levels: 42, name: 'Weapon Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [1.5, 2.8, 4.5, 5.7, 6.7, 8.3, 9.5, 11.6, 13.3, 16, 17, 18.1, 20.4, 21.6, 22.8, 25.5, 26.9, 28.3, 31.4, 33, 34.6, 38, 39.8, 41.7, 43.5, 45.4, 47.4, 49.4, 51.4, 53.5, 55.6, 57.7, 59.9, 62, 64.1, 66.8, 68.5, 70.7, 72.9, 75.1, 77.2, 79.4], op: 'add' },
		{ stat: 'mAtk', val: [1.9, 3.5, 5.7, 7.2, 8.3, 10.3, 11.9, 14.6, 16.6, 20, 21.3, 22.6, 25.4, 26.9, 28.5, 31.8, 33.6, 35.4, 39.2, 41.2, 43.2, 47.5, 49.8, 52.1, 54.4, 56.8, 59.2, 61.7, 64.3, 66.8, 69.4, 72.1, 74.8, 77.4, 80.2, 82.9, 85.6, 88.4, 91.1, 93.8, 96.5, 99.3], op: 'add' },
		{ stat: 'pAtk', val: [1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45, 1.45], op: 'mul' },
		{ stat: 'mAtk', val: [1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17, 1.17], op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.7, op: 'mul', using: 'Bow,Pole' },
		{ stat: 'accCombat', val: 9, op: 'sub', using: 'Bow,Pole' } ]},
	{ id: 251, levels: 45, name: 'Robe Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [11.6, 13.4, 16.1, 18.4, 20.9, 23.8, 26.9, 29.1, 32.8, 35.4, 39.6, 42.6, 47.3, 49, 50.7, 54.2, 56.1, 57.9, 61.8, 63.7, 65.7, 69.9, 72, 74.2, 78.6, 80.9, 83.2, 85.5, 87.8, 90.2, 92.6, 95.1, 97.6, 100.1, 102.6, 105.1, 107.7, 110.3, 112.9, 115.5, 118.1, 120.8, 123.4, 126.1, 128.8], op: 'add' } ]},
	{ id: 252, levels: 45, name: 'Light Armor Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [12.6, 14.5, 17.5, 19.3, 21.2, 23.2, 25.5, 27, 30.1, 32.5, 36.3, 39.1, 43.5, 45, 46.6, 49.8, 51.5, 53.2, 56.7, 58.5, 60.4, 64.2, 66.1, 68.1, 72.2, 74.2, 76.3, 78.5, 80.6, 82.8, 85.1, 87.3, 89.6, 91.9, 94.2, 96.5, 98.9, 101.2, 103.6, 106, 108.5, 110.9, 113.3, 115.8, 118.2], op: 'add' },
		{ stat: 'mAtkSpd', val: 1.9, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.25, op: 'mul' },
		{ stat: 'regMp', val: 1.2, op: 'mul' } ]},
	{ id: 253, levels: 43, name: 'Heavy Armor Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [11.6, 13.3, 15.2, 17.2, 19.5, 21.1, 23.7, 25.6, 28.7, 30.8, 34.3, 35.5, 36.7, 39.3, 40.6, 41.9, 44.7, 46.1, 47.6, 50.6, 52.1, 53.7, 56.9, 58.6, 60.2, 61.9, 63.6, 65.3, 67.1, 68.9, 70.7, 72.5, 74.3, 76.1, 78, 79.9, 81.7, 83.6, 85.5, 87.5, 89.4, 91.3, 93.3], op: 'add' },
		{ stat: 'mAtkSpd', val: 1.71, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.25, op: 'mul' } ]},
	{ id: 257, levels: 45, name: 'Sword/Blunt Weapon Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [4.5, 7.3, 8.9, 10.7, 12.8, 15.1, 17.7, 20.5, 23.7, 25.4, 27.1, 29, 30.9, 32.9, 35, 37.1, 39.4, 41.7, 44.1, 46.6, 49.2, 51.9, 54.6, 57.5, 60.4, 63.3, 66.4, 69.5, 72.7, 76, 79.3, 82.7, 86.1, 89.6, 93.1, 96.6, 100.2, 103.8, 107.5, 111.1, 114.8, 118.4, 122.1, 125.7, 129.3], op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt' } ]},
	{ id: 258, levels: 33, name: 'Light Armor Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [11.1, 11.8, 12.5, 14, 14.8, 15.6, 17.3, 18.1, 19, 20.8, 21.7, 22.6, 24.5, 25.5, 26.4, 27.4, 28.4, 29.5, 30.5, 31.6, 32.6, 33.7, 34.8, 35.9, 37, 38.1, 39.2, 40.3, 41.4, 42.6, 43.7, 44.8, 46], op: 'add' },
		{ stat: 'mAtkSpd', val: 1.88, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.25, op: 'mul' },
		{ stat: 'regMp', val: 1.2, op: 'mul' } ]},
	{ id: 259, levels: 33, name: 'Heavy Armor Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [14.8, 15.6, 16.5, 18.3, 19.2, 20.2, 22.1, 23.1, 24.1, 26.2, 27.3, 28.4, 30.6, 31.8, 33, 34.1, 35.3, 36.5, 37.8, 39, 40.3, 41.5, 42.8, 44.1, 45.4, 46.7, 48, 49.4, 50.7, 52, 53.4, 54.7, 56.1], op: 'add' },
		{ stat: 'mAtkSpd', val: 1.68, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.25, op: 'mul' } ]},
	{ id: 264, levels: 1, name: 'Song of Earth', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pDef', val: 1.25, op: 'mul' } ]},
	{ id: 265, levels: 1, name: 'Song of Life', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'regHp', val: 1.2, op: 'mul' } ]},
	{ id: 266, levels: 1, name: 'Song of Water', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'song_of_water', effects: [
		{ stat: 'rEvas', val: 3, op: 'add' } ]},
	{ id: 267, levels: 1, name: 'Song of Warding', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 268, levels: 1, name: 'Song of Wind', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'song_of_wind', effects: [
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 269, levels: 1, name: 'Song of Hunter', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'rCrit', val: 1, op: 'basemul' } ]},
	{ id: 270, levels: 1, name: 'Song of Invocation', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 271, levels: 1, name: 'Dance of the Warrior', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtk', val: 1.12, op: 'mul' } ]},
	{ id: 272, levels: 1, name: 'Dance of Inspiration', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'dance_of_inspiration', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 273, levels: 1, name: 'Dance of the Mystic', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mAtk', val: 1.2, op: 'mul' } ]},
	{ id: 274, levels: 1, name: 'Dance of Fire', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 275, levels: 1, name: 'Dance of Fury', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'dance_of_fury', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 276, levels: 1, name: 'Dance of Concentration', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' },
		{ stat: 'cancel', val: 40, op: 'sub' } ]},
	{ id: 277, levels: 1, name: 'Dance of Light', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'holyPower', val: 20, op: 'add' } ]},
	{ id: 282, levels: 1, name: 'Puma Spirit Totem', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'possession', effects: [
		{ stat: 'accCombat', val: 6, op: 'add', using: 'Dual Fist' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul', using: 'Dual Fist' } ]},
	{ id: 285, levels: 27, name: 'Higher Mana Gain', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'gainMp', val: [22, 24, 28, 29, 31, 32, 38, 39, 41, 42, 48, 49, 50, 52, 53, 59, 61, 62, 64, 66, 72, 73, 75, 76, 78, 79, 81], op: 'add' } ]},
	{ id: 287, levels: 3, name: 'Lionheart', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'cancelVuln', val: 40, op: 'sub' },
		{ stat: 'stunVuln', val: [40, 60, 80], op: 'sub' },
		{ stat: 'rootVuln', val: [40, 60, 80], op: 'sub' },
		{ stat: 'sleepVuln', val: [40, 60, 80], op: 'sub' },
		{ stat: 'paralyzeVuln', val: [40, 60, 80], op: 'sub' } ]},
	{ id: 290, levels: 14, name: 'Final Frenzy', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [32.9, 39.4, 46.6, 54.6, 63.3, 72.7, 79.3, 86.1, 93.1, 100.2, 107.5, 114.8, 122.1, 129.3], op: 'add' } ]},
	{ id: 291, levels: 11, name: 'Final Fortress', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [116.875, 129, 141.625, 150.375, 159.25, 168.375, 177.625, 187, 196.5, 206.125, 215.75], op: 'add' } ]},
	{ id: 292, levels: 1, name: 'Bison Spirit Totem', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'possession', effects: [
		{ stat: 'accCombat', val: 6, op: 'add', using: 'Dual Fist' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'rCrit', val: 100, op: 'add' },
		{ stat: 'pAtk', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 300, op: 'add' } ]},
	{ id: 293, levels: 20, name: 'Two-handed Weapon Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [4.5, 7.3, 10.7, 15.1, 20.5, 27.1, 32.9, 39.4, 46.6, 54.6, 63.3, 72.7, 79.3, 86.1, 93.1, 100.2, 107.5, 114.8, 122.1, 129.3], op: 'add', using: 'Big Sword,Big Blunt' },
		{ stat: 'accCombat', val: 3, op: 'add', using: 'Big Sword,Big Blunt' } ]},
	{ id: 294, levels: 1, name: 'Shadow Sense', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 3, op: 'add' } ]},
	{ id: 295, levels: 1, name: 'Iron Body', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fall', val: 0.6, op: 'mul' } ]},
	{ id: 297, levels: 2, name: 'Duelist Spirit', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtkSpd', val: [1.08, 1.12], op: 'mul', using: 'Dual Sword' },
		{ stat: 'pvpPhysDmg', val: [1.05, 1.1], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1.05, 1.1], op: 'mul' } ]},
	{ id: 298, levels: 1, name: 'Rabbit Spirit Totem', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'possession', effects: [
		{ stat: 'pAtkSpd', val: 1.3, op: 'mul', using: 'Dual Fist' },
		{ stat: 'runSpd', val: 1.3, op: 'mul', using: 'Dual Fist' },
		{ stat: 'rEvas', val: 12, op: 'add', using: 'Dual Fist' } ]},
	{ id: 303, levels: 4, name: 'Soul of Sagittarius', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: [1.1, 1.15, 1.2, 1.25], op: 'mul' } ]},
	{ id: 304, levels: 1, name: 'Song of Vitality', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'maxHp', val: 1.3, op: 'mul' } ]},
	{ id: 305, levels: 1, name: 'Song of Vengeance', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'song_of_vengeance', effects: [
		{ stat: 'reflectDam', val: 20, op: 'add' } ]},
	{ id: 306, levels: 1, name: 'Song of Flame Guard', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'fireRes', val: 30, op: 'add' } ]},
	{ id: 307, levels: 1, name: 'Dance of Aqua Guard', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'waterRes', val: 30, op: 'add' } ]},
	{ id: 308, levels: 1, name: 'Song of Storm Guard', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'windRes', val: 30, op: 'add' } ]},
	{ id: 309, levels: 1, name: 'Dance of Earth Guard', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'earthRes', val: 30, op: 'add' } ]},
	{ id: 310, levels: 1, name: 'Dance of the Vampire', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'dance_of_vampire', effects: [
		{ stat: 'absorbDam', val: 8, op: 'add' } ]},
	{ id: 311, levels: 1, name: 'Dance of Protection', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'fall', val: 0.7, op: 'mul' } ]},
	{ id: 313, levels: 8, name: 'Snipe', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ImmobileBuff', effects: [
		{ stat: 'pAtk', val: [124, 134, 145, 155, 166, 177, 188, 199], op: 'add', using: 'Bow' },
		{ stat: 'accCombat', val: [3, 3, 4, 4, 5, 5, 6, 6], op: 'add', using: 'Bow' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul', using: 'Bow' },
		{ stat: 'pAtkRange', val: [50, 50, 100, 100, 150, 150, 200, 200], op: 'add', using: 'Bow' } ]},
	{ id: 319, levels: 2, name: 'Agile Movement', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: [5, 10], op: 'add' },
		{ stat: 'accCombat', val: [2, 3], op: 'add' } ]},
	{ id: 327, levels: 1, name: 'Wyvern Aegis', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: 7000, op: 'add' },
		{ stat: 'mDef', val: 6000, op: 'add' },
		{ stat: 'cancelVuln', val: 100, op: 'sub' } ]},
	{ id: 328, levels: 1, name: 'Wisdom', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: 20, op: 'sub' },
		{ stat: 'sleepVuln', val: 20, op: 'sub' },
		{ stat: 'derangementVuln', val: 20, op: 'sub' } ]},
	{ id: 329, levels: 1, name: 'Health', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bleedVuln', val: 20, op: 'sub' },
		{ stat: 'poisonVuln', val: 20, op: 'sub' } ]},
	{ id: 330, levels: 1, name: 'Skill Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'skillMastery', val: 2, op: 'add' } ]},
	{ id: 331, levels: 1, name: 'Skill Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'skillMastery', val: 2, op: 'add' } ]},
	{ id: 349, levels: 1, name: 'Song of Renewal', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mReuse', val: 0.8, op: 'mul' },
		{ stat: 'pReuse', val: 0.8, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 350, levels: 1, name: 'Physical Mirror', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'reflectSkillPhysic', val: 30, op: 'add', using: 'Shield' },
		{ stat: 'reflectSkillMagic', val: 10, op: 'add', using: 'Shield' } ]},
	{ id: 351, levels: 1, name: 'Magical Mirror', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'reflectSkillPhysic', val: 10, op: 'add', using: 'Shield' },
		{ stat: 'reflectSkillMagic', val: 30, op: 'add', using: 'Shield' } ]},
	{ id: 355, levels: 1, name: 'Focus Death', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'focus', effects: [
		{ stat: 'rCrit', val: -0.3, op: 'basemul' },
		{ stat: 'blowRate', val: 1.6, op: 'mul' },
		{ stat: 'cAtk', val: 0.7, op: 'mul' },
		{ stat: 'cAtk', val: 1.9, op: 'mul' } ]},
	{ id: 356, levels: 1, name: 'Focus Chance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'focus', effects: [
		{ stat: 'rCrit', val: -0.3, op: 'basemul' },
		{ stat: 'blowRate', val: 0.7, op: 'mul' },
		{ stat: 'rCrit', val: 0.3, op: 'basemul' },
		{ stat: 'blowRate', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 0.6, op: 'basemul' },
		{ stat: 'blowRate', val: 1.6, op: 'mul' } ]},
	{ id: 357, levels: 1, name: 'Focus Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'focus', effects: [
		{ stat: 'cAtk', val: 0.7, op: 'mul' },
		{ stat: 'cAtk', val: 1.3, op: 'mul' },
		{ stat: 'cAtk', val: 1.6, op: 'mul' } ]},
	{ id: 359, levels: 1, name: 'Eye of Hunter', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'detect_weakness', effects: [
		{ stat: 'pAtk-insects', val: 1.3, op: 'mul' },
		{ stat: 'pAtk-plants', val: 1.3, op: 'mul' },
		{ stat: 'pAtk-animals', val: 1.3, op: 'mul' } ]},
	{ id: 360, levels: 1, name: 'Eye of Slayer', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'detect_weakness', effects: [
		{ stat: 'pAtk-monsters', val: 1.3, op: 'mul' },
		{ stat: 'pAtk-dragons', val: 1.3, op: 'mul' },
		{ stat: 'pAtk-giants', val: 1.3, op: 'mul' },
		{ stat: 'pAtk-mcreatures', val: 1.3, op: 'mul' } ]},
	{ id: 363, levels: 1, name: 'Song of Meditation', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'regMp', val: 1.2, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 364, levels: 1, name: 'Song of Champion', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pReuse', val: 0.9, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 365, levels: 1, name: 'Siren\'s Dance', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mCritRate', val: 1, op: 'basemul' } ]},
	{ id: 366, levels: 1, name: 'Dance of Shadows', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'SilentMove', effects: [
		{ stat: 'runSpd', val: 0.5, op: 'mul' } ]},
	{ id: 370, levels: 3, name: 'Clan Body', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: [1.03, 1.05, 1.06], op: 'mul' } ]},
	{ id: 371, levels: 3, name: 'Clan Spirituality', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: [1.06, 1.1, 1.12], op: 'mul' } ]},
	{ id: 372, levels: 3, name: 'Clan Soul', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: [1.03, 1.05, 1.06], op: 'mul' } ]},
	{ id: 373, levels: 3, name: 'Clan Regeneration', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regHp', val: [1.03, 1.05, 1.06], op: 'mul' } ]},
	{ id: 374, levels: 3, name: 'Clan Morale', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regCp', val: [1.06, 1.1, 1.12], op: 'mul' } ]},
	{ id: 375, levels: 3, name: 'Clan Clarity', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: [1.03, 1.05, 1.06], op: 'mul' } ]},
	{ id: 376, levels: 3, name: 'Clan Might', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [1.03, 1.05, 1.06], op: 'mul' } ]},
	{ id: 377, levels: 3, name: 'Clan Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [1.03, 1.05, 1.06], op: 'mul' } ]},
	{ id: 378, levels: 3, name: 'Clan Empowerment', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: [1.06, 1.1, 1.12], op: 'mul' } ]},
	{ id: 379, levels: 3, name: 'Clan Magic Resistance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: [1.06, 1.1, 1.12], op: 'mul' } ]},
	{ id: 380, levels: 3, name: 'Clan Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: [1, 2, 3], op: 'add' } ]},
	{ id: 381, levels: 3, name: 'Clan Agility', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: [1, 2, 3], op: 'add' } ]},
	{ id: 382, levels: 3, name: 'Clan Shield Defence', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rShld', val: [1.12, 1.2, 1.24], op: 'mul' } ]},
	{ id: 383, levels: 3, name: 'Clan Shield Block', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sDef', val: [1.24, 1.4, 1.48], op: 'mul' } ]},
	{ id: 384, levels: 3, name: 'Clan Cyclonic Resistance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'windRes', val: [3, 5, 6], op: 'add' },
		{ stat: 'waterRes', val: [3, 5, 6], op: 'add' } ]},
	{ id: 385, levels: 3, name: 'Clan Magmatic Resistance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: [3, 5, 6], op: 'add' },
		{ stat: 'earthRes', val: [3, 5, 6], op: 'add' } ]},
	{ id: 386, levels: 3, name: 'Clan Resist Shock', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: [12, 20, 24], op: 'sub' } ]},
	{ id: 387, levels: 3, name: 'Clan Resist Hold', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: [12, 20, 24], op: 'sub' } ]},
	{ id: 388, levels: 3, name: 'Clan Resist Sleep', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sleepVuln', val: [12, 20, 24], op: 'sub' } ]},
	{ id: 389, levels: 3, name: 'Clan Wind Walk', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: [3, 5, 6], op: 'add' } ]},
	{ id: 395, levels: 1, name: 'Heroic Miracle', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hero', effects: [
		{ stat: 'pDef', val: 5400, op: 'add' },
		{ stat: 'mDef', val: 4050, op: 'add' },
		{ stat: 'runSpd', val: 5, op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 396, levels: 1, name: 'Heroic Berserker', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hero', effects: [
		{ stat: 'accCombat', val: 8, op: 'add' },
		{ stat: 'pAtk', val: 500, op: 'add' },
		{ stat: 'mAtk', val: 500, op: 'add' },
		{ stat: 'pAtkSpd', val: 100, op: 'add' },
		{ stat: 'mAtkSpd', val: 100, op: 'add' },
		{ stat: 'runSpd', val: 20, op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' },
		{ stat: 'gainHp', val: 2, op: 'mul' },
		{ stat: 'debuffVuln', val: 100, op: 'sub' },
		{ stat: 'rEvas', val: 8, op: 'sub' },
		{ stat: 'pDef', val: 0.75, op: 'mul' },
		{ stat: 'mDef', val: 0.75, op: 'mul' } ]},
	{ id: 406, levels: 3, name: 'Angelic Icon', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'tank_multi_buff', effects: [
		{ stat: 'debuffVuln', val: 40, op: 'sub' },
		{ stat: 'pDef', val: 1.5, op: 'mul' },
		{ stat: 'mDef', val: 1.5, op: 'mul' },
		{ stat: 'accCombat', val: 6, op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt' },
		{ stat: 'runSpd', val: [10, 20, 30], op: 'add' },
		{ stat: 'pAtkSpd', val: [1.1, 1.2, 1.3], op: 'mul', using: 'Sword,Big Sword,Blunt,Big Blunt' },
		{ stat: 'rCrit', val: [33, 66, 100], op: 'add', using: 'Sword,Big Sword' },
		{ stat: 'cAtk', val: [1.33, 1.66, 2], op: 'mul', using: 'Blunt,Big Blunt' },
		{ stat: 'cancelVuln', val: 40, op: 'sub' },
		{ stat: 'gainHp', val: 0.2, op: 'mul' } ]},
	{ id: 410, levels: 3, name: 'Mortal Strike', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'blowRate', val: [1.1, 1.15, 1.2], op: 'mul' } ]},
	{ id: 411, levels: 3, name: 'Stealth', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'SilentMove', effects: [
		{ stat: 'rEvas', val: [12, 8, 4], op: 'sub' },
		{ stat: 'pDef', val: [0.55, 0.7, 0.85], op: 'mul' },
		{ stat: 'mDef', val: [0.55, 0.7, 0.85], op: 'mul' },
		{ stat: 'accCombat', val: 12, op: 'sub' },
		{ stat: 'pAtk', val: 0.55, op: 'mul' } ]},
	{ id: 413, levels: 8, name: 'Rapid Fire', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtk', val: [62, 67, 73, 78, 83, 89, 94, 100], op: 'add', using: 'Bow' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul', using: 'Bow' },
		{ stat: 'pAtkRange', val: 0.5, op: 'mul', using: 'Bow' } ]},
	{ id: 414, levels: 8, name: 'Dead Eye', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtkSpd', val: 0.8, op: 'mul', using: 'Bow' },
		{ stat: 'pAtk', val: [124, 134, 155, 155, 166, 177, 188, 199], op: 'add', using: 'Bow' },
		{ stat: 'accCombat', val: [1, 1, 2, 2, 2, 3, 3, 3], op: 'add', using: 'Bow' },
		{ stat: 'cAtk', val: 1.2, op: 'mul', using: 'Bow' } ]},
	{ id: 415, levels: 3, name: 'Spirit of Sagittarius', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: [0.9, 0.8, 0.7], op: 'mul' } ]},
	{ id: 416, levels: 3, name: 'Blessing of Sagittarius', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pReuse', val: [0.9, 0.85, 0.8], op: 'mul' } ]},
	{ id: 418, levels: 3, name: 'Quiver of Holding', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxLoad', val: [1.3, 1.4, 1.5], op: 'mul' } ]},
	{ id: 420, levels: 3, name: 'Zealot', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'debuffVuln', val: 80, op: 'sub' },
		{ stat: 'cancelVuln', val: 40, op: 'sub' },
		{ stat: 'runSpd', val: [10, 20, 30], op: 'add' },
		{ stat: 'accCombat', val: 6, op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt,Pole,Dual Fist' },
		{ stat: 'pAtkSpd', val: [1.1, 1.2, 1.2], op: 'mul' },
		{ stat: 'rCrit', val: [33, 66, 100], op: 'add', using: 'Sword,Big Sword,Pole' },
		{ stat: 'cAtk', val: [1.33, 1.66, 2], op: 'mul', using: 'Blunt,Big Blunt,Dual Fist' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.5, op: 'mul' },
		{ stat: 'gainHp', val: 0.5, op: 'mul' } ]},
	{ id: 421, levels: 5, name: 'Fell Swoop', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'atkCountMax', val: [1, 2, 3, 4, 5], op: 'add', using: 'Pole' } ]},
	{ id: 423, levels: 3, name: 'Dark Form', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'firePower', val: [10, 15, 20], op: 'add' },
		{ stat: 'fireRes', val: [3, 5, 10], op: 'add' } ]},
	{ id: 425, levels: 1, name: 'Hawk Spirit Totem', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'possession', effects: [
		{ stat: 'accCombat', val: 6, op: 'add', using: 'Dual Fist' },
		{ stat: 'rCrit', val: 100, op: 'add', using: 'Dual Fist' },
		{ stat: 'cAtk', val: 1.3, op: 'mul', using: 'Dual Fist' } ]},
	{ id: 428, levels: 1, name: 'Inner Rhythm', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'DanceMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 429, levels: 1, name: 'Knighthood', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 87.1, op: 'add' },
		{ stat: 'sDef', val: 1.1, op: 'mul' } ]},
	{ id: 430, levels: 1, name: 'Master of Combat', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 80, op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt,Pole,Dual Sword,Dual Fist' },
		{ stat: 'maxCp', val: 1.05, op: 'mul', using: 'Sword,Big Sword,Blunt,Big Blunt,Pole,Dual Sword,Dual Fist' } ]},
	{ id: 431, levels: 1, name: 'Archery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 200, op: 'add', using: 'Bow' },
		{ stat: 'pAtkRange', val: 50, op: 'add', using: 'Bow' } ]},
	{ id: 432, levels: 1, name: 'Assassination', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 70, op: 'add', using: 'Dagger,Dual Dagger' },
		{ stat: 'lethalRate', val: 1.03, op: 'mul', using: 'Dagger,Dual Dagger' } ]},
	{ id: 433, levels: 1, name: 'Arcane Roar', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'mAtk', val: 1.03, op: 'mul' } ]},
	{ id: 434, levels: 1, name: 'Necromancy', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'darkRes', val: 10, op: 'add' },
		{ stat: 'mAtk', val: 1.03, op: 'mul' } ]},
	{ id: 435, levels: 1, name: 'Summon Lore', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 80, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'pDef', val: 60, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.07, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.97, op: 'mul' } ]},
	{ id: 436, levels: 1, name: 'Divine Lore', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 438, levels: 1, name: 'Soul of the Phoenix', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'PhoenixBless', stackType: 'ab_preserve_abnormal' },
	{ id: 439, levels: 1, name: 'Shield of Revenge', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vengeancePdam', val: 40, op: 'add' } ]},
	{ id: 441, levels: 1, name: 'Force Meditation', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Paralyze', effects: [
		{ stat: 'pDef', val: 0.2, op: 'mul' } ]},
	{ id: 442, levels: 1, name: 'Sonic Barrier', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Invincible', stackType: 'Instant_Shield' },
	{ id: 443, levels: 1, name: 'Force Barrier', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Invincible', stackType: 'Instant_Shield' },
	{ id: 445, levels: 1, name: 'Mirage', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger' },
	{ id: 446, levels: 1, name: 'Dodge', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pSkillEvas', val: 100, op: 'add' } ]},
	{ id: 447, levels: 1, name: 'Counterattack', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vengeancePdam', val: 100, op: 'add' } ]},
	{ id: 451, levels: 2, name: 'Sonic Move', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up_special', effects: [
		{ stat: 'runSpd', val: [40, 66], op: 'add' } ]},
	{ id: 462, levels: 1, name: 'Guilted Body', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'gainHp', val: 0.95, op: 'mul' } ]},
	{ id: 463, levels: 3, name: 'Weapon Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.085, op: 'mul' },
		{ stat: 'pAtk', val: [2, 3, 4], op: 'add' } ]},
	{ id: 464, levels: 5, name: 'Armor Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [9, 11, 12, 13, 14], op: 'add' },
		{ stat: 'regMp', val: 1.1, op: 'mul' },
		{ stat: 'rEvas', val: [0, 0, 0, 3, 3], op: 'add' } ]},
	{ id: 465, levels: 50, name: 'Light Armor Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [0.9, 2.2, 3.2, 4.2, 5.3, 6, 6.8, 8.4, 9.2, 10.1, 11.9, 12.8, 13.7, 15.7, 16.7, 17.8, 18.8, 19.9, 21.1, 22.2, 23.4, 24.5, 25.8, 27, 28.2, 29.5, 30.8, 32.1, 33.5, 34.8, 36.2, 37.6, 39.1, 40.5, 42, 43.5, 44.9, 46.5, 48, 49.5, 51.1, 52.7, 54.2, 55.8, 57.4, 59.1, 60.7, 62.3, 63.9, 65.6], op: 'add' },
		{ stat: 'rEvas', val: [3, 3, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], op: 'add' },
		{ stat: 'critDamEvas', val: 1.05, op: 'mul' } ]},
	{ id: 466, levels: 55, name: 'Magic Immunity', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: [11, 12, 13, 15, 17, 19, 20, 22, 24, 26, 27, 28, 30, 31, 32, 35, 36, 37, 40, 42, 43, 44, 46, 47, 49, 51, 52, 54, 56, 57, 59, 61, 63, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 91, 93, 95, 97, 99, 102, 104, 106, 108], op: 'add' },
		{ stat: 'magicDamVul', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75], op: 'mul' } ]},
	{ id: 469, levels: 1, name: 'Rapid Attack', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 472, levels: 45, name: 'Ancient Sword Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [5.2, 8.1, 9.9, 11.9, 14.1, 16.6, 19.4, 22.5, 25.9, 27.7, 29.6, 31.6, 33.7, 35.9, 38.1, 40.5, 42.9, 45.4, 48.1, 50.8, 53.6, 56.5, 59.4, 62.5, 65.6, 68.9, 72.2, 75.6, 79, 82.5, 86.1, 89.8, 93.5, 97.3, 101.1, 104.9, 108.8, 112.7, 116.7, 120.6, 124.6, 128.5, 132.5, 136.4, 140.3], op: 'add', using: 'Ancient' } ]},
	{ id: 473, levels: 45, name: 'Crossbow Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [12.64, 18, 21.28, 24.88, 29.04, 33.6, 38.72, 44.32, 50.56, 53.92, 86.72, 92.16, 97.84, 103.76, 109.92, 116.32, 122.96, 129.84, 136.96, 144.4, 152, 159.92, 168, 176.32, 184.96, 193.76, 202.8, 212, 221.44, 231.04, 240.88, 250.8, 260.96, 271.2, 281.6, 292.16, 302.72, 313.44, 324.16, 334.96, 345.76, 356.56, 367.28, 378, 388.72], op: 'add', using: 'Crossbow' } ]},
	{ id: 474, levels: 45, name: 'Rapier Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [3.2, 5.28, 6.48, 7.84, 9.36, 11.12, 13.04, 15.2, 17.52, 18.8, 20.08, 21.44, 22.88, 24.4, 25.92, 27.6, 29.28, 30.96, 32.8, 34.64, 36.56, 38.56, 40.64, 42.72, 44.88, 47.12, 49.44, 51.76, 54.16, 56.56, 59.04, 61.52, 64.08, 66.72, 69.36, 72, 74.64, 77.36, 80.08, 82.8, 85.52, 88.24, 90.96, 93.68, 96.4], op: 'add', using: 'Rapier' } ]},
	{ id: 482, levels: 2, name: 'Furious Soul', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'rCrit', val: [0.2, 0.3], op: 'basemul' },
		{ stat: 'cAtk', val: [1.2, 1.3], op: 'mul' },
		{ stat: 'pDef', val: 0.8, op: 'mul' } ]},
	{ id: 483, levels: 2, name: 'Sword Shield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: [1600, 3200], op: 'add' },
		{ stat: 'runSpd', val: 0.6, op: 'mul' } ]},
	{ id: 486, levels: 2, name: 'Increase Range', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkRange', val: [200, 400], op: 'add', using: 'Crossbow' } ]},
	{ id: 490, levels: 2, name: 'Fast Shot', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtkSpd', val: [1.08, 1.12], op: 'mul', using: 'Crossbow' } ]},
	{ id: 499, levels: 3, name: 'Courage', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'derangementVuln', val: [40, 60, 100], op: 'sub' } ]},
	{ id: 521, levels: 8, name: 'Sharpshooting', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ImmobileBuff', effects: [
		{ stat: 'pAtk', val: [124, 134, 145, 155, 166, 177, 188, 199], op: 'add', using: 'Crossbow' },
		{ stat: 'accCombat', val: [3, 3, 4, 4, 5, 5, 6, 6], op: 'add', using: 'Crossbow' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul', using: 'Crossbow' },
		{ stat: 'pAtkRange', val: [50, 50, 100, 100, 150, 150, 200, 200], op: 'add', using: 'Crossbow' } ]},
	{ id: 527, levels: 1, name: 'Iron Shield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger' },
	{ id: 528, levels: 1, name: 'Shield of Faith', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up_special_party', effects: [
		{ stat: 'pDef', val: 3600, op: 'add' },
		{ stat: 'mDef', val: 2700, op: 'add' } ]},
	{ id: 529, levels: 1, name: 'Song of Elemental', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'fireRes', val: 30, op: 'add' },
		{ stat: 'waterRes', val: 30, op: 'add' },
		{ stat: 'earthRes', val: 30, op: 'add' },
		{ stat: 'windRes', val: 30, op: 'add' } ]},
	{ id: 530, levels: 1, name: 'Dance of Alignment', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'darkRes', val: 30, op: 'add' },
		{ stat: 'holyRes', val: 30, op: 'add' } ]},
	{ id: 536, levels: 1, name: 'Over the Body', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' },
		{ stat: 'regHp', val: 1.15, op: 'mul' },
		{ stat: 'pAtk', val: 1.25, op: 'mul' },
		{ stat: 'pDef', val: 1.3, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.1, op: 'mul' },
		{ stat: 'runSpd', val: 1.1, op: 'mul' } ]},
	{ id: 538, levels: 1, name: 'Final Form', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'maxHp', val: 1.1, op: 'mul' },
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'maxMp', val: 1.1, op: 'mul' },
		{ stat: 'pAtk', val: 2, op: 'mul' },
		{ stat: 'pDef', val: 2, op: 'mul' },
		{ stat: 'mAtk', val: 2, op: 'mul' },
		{ stat: 'mDef', val: 2, op: 'mul' },
		{ stat: 'runSpd', val: 4, op: 'add' },
		{ stat: 'STR', val: 41, op: 'set' },
		{ stat: 'DEX', val: 33, op: 'set' },
		{ stat: 'CON', val: 31, op: 'set' },
		{ stat: 'INT', val: 29, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 541, levels: 1, name: 'Transform Grail Apostle', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 41, op: 'set' },
		{ stat: 'DEX', val: 31, op: 'set' },
		{ stat: 'CON', val: 41, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 542, levels: 1, name: 'Transform Grail Apostle', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 41, op: 'set' },
		{ stat: 'DEX', val: 31, op: 'set' },
		{ stat: 'CON', val: 41, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 543, levels: 1, name: 'Transform Grail Apostle', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 41, op: 'set' },
		{ stat: 'DEX', val: 31, op: 'set' },
		{ stat: 'CON', val: 41, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 544, levels: 1, name: 'Transform Unicorn', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 37, op: 'set' },
		{ stat: 'DEX', val: 36, op: 'set' },
		{ stat: 'CON', val: 34, op: 'set' },
		{ stat: 'INT', val: 23, op: 'set' },
		{ stat: 'WIT', val: 14, op: 'set' },
		{ stat: 'MEN', val: 26, op: 'set' } ]},
	{ id: 545, levels: 1, name: 'Transform Unicorn', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 37, op: 'set' },
		{ stat: 'DEX', val: 36, op: 'set' },
		{ stat: 'CON', val: 34, op: 'set' },
		{ stat: 'INT', val: 23, op: 'set' },
		{ stat: 'WIT', val: 14, op: 'set' },
		{ stat: 'MEN', val: 26, op: 'set' } ]},
	{ id: 546, levels: 1, name: 'Transform Unicorn', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 37, op: 'set' },
		{ stat: 'DEX', val: 36, op: 'set' },
		{ stat: 'CON', val: 34, op: 'set' },
		{ stat: 'INT', val: 23, op: 'set' },
		{ stat: 'WIT', val: 14, op: 'set' },
		{ stat: 'MEN', val: 26, op: 'set' } ]},
	{ id: 547, levels: 1, name: 'Transform Lilim Knight', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 34, op: 'set' },
		{ stat: 'CON', val: 30, op: 'set' },
		{ stat: 'INT', val: 25, op: 'set' },
		{ stat: 'WIT', val: 12, op: 'set' },
		{ stat: 'MEN', val: 26, op: 'set' } ]},
	{ id: 548, levels: 1, name: 'Transform Lilim Knight', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 34, op: 'set' },
		{ stat: 'CON', val: 30, op: 'set' },
		{ stat: 'INT', val: 25, op: 'set' },
		{ stat: 'WIT', val: 12, op: 'set' },
		{ stat: 'MEN', val: 26, op: 'set' } ]},
	{ id: 549, levels: 1, name: 'Transform Lilim Knight', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 34, op: 'set' },
		{ stat: 'CON', val: 30, op: 'set' },
		{ stat: 'INT', val: 25, op: 'set' },
		{ stat: 'WIT', val: 12, op: 'set' },
		{ stat: 'MEN', val: 26, op: 'set' } ]},
	{ id: 550, levels: 1, name: 'Transform Golem Guardian', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 20, op: 'set' },
		{ stat: 'WIT', val: 10, op: 'set' },
		{ stat: 'MEN', val: 27, op: 'set' } ]},
	{ id: 551, levels: 1, name: 'Transform Golem Guardian', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 20, op: 'set' },
		{ stat: 'WIT', val: 10, op: 'set' },
		{ stat: 'MEN', val: 27, op: 'set' } ]},
	{ id: 552, levels: 1, name: 'Transform Golem Guardian', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 20, op: 'set' },
		{ stat: 'WIT', val: 10, op: 'set' },
		{ stat: 'MEN', val: 27, op: 'set' } ]},
	{ id: 553, levels: 1, name: 'Transform Inferno Drake', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 42, op: 'set' },
		{ stat: 'DEX', val: 26, op: 'set' },
		{ stat: 'CON', val: 45, op: 'set' },
		{ stat: 'INT', val: 18, op: 'set' },
		{ stat: 'WIT', val: 12, op: 'set' },
		{ stat: 'MEN', val: 27, op: 'set' } ]},
	{ id: 554, levels: 1, name: 'Transform Inferno Drake', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 42, op: 'set' },
		{ stat: 'DEX', val: 26, op: 'set' },
		{ stat: 'CON', val: 45, op: 'set' },
		{ stat: 'INT', val: 18, op: 'set' },
		{ stat: 'WIT', val: 12, op: 'set' },
		{ stat: 'MEN', val: 27, op: 'set' } ]},
	{ id: 555, levels: 1, name: 'Transform Inferno Drake', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 42, op: 'set' },
		{ stat: 'DEX', val: 26, op: 'set' },
		{ stat: 'CON', val: 45, op: 'set' },
		{ stat: 'INT', val: 18, op: 'set' },
		{ stat: 'WIT', val: 12, op: 'set' },
		{ stat: 'MEN', val: 27, op: 'set' } ]},
	{ id: 556, levels: 1, name: 'Transform Dragon Bomber', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 33, op: 'set' },
		{ stat: 'CON', val: 29, op: 'set' },
		{ stat: 'INT', val: 29, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 557, levels: 1, name: 'Transform Dragon Bomber', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 33, op: 'set' },
		{ stat: 'CON', val: 29, op: 'set' },
		{ stat: 'INT', val: 29, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 558, levels: 1, name: 'Transform Dragon Bomber', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 33, op: 'set' },
		{ stat: 'CON', val: 29, op: 'set' },
		{ stat: 'INT', val: 29, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 561, levels: 4, name: 'Bless of Angel', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtk', val: 1.12, op: 'mul' } ]},
	{ id: 562, levels: 4, name: 'Wind of Angel', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'rEvas', val: 3, op: 'add' } ]},
	{ id: 583, levels: 4, name: 'Assimilation', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'SilentMove' },
	{ id: 585, levels: 1, name: 'Fast Moving', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'runSpd', val: 1.45, op: 'mul' } ]},
	{ id: 590, levels: 1, name: 'Residence Body', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 222, op: 'add' } ]},
	{ id: 591, levels: 1, name: 'Residence Spirit', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 444, op: 'add' } ]},
	{ id: 592, levels: 1, name: 'Residence Soul', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 168, op: 'add' } ]},
	{ id: 593, levels: 1, name: 'Residence Health', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regHp', val: 1.09, op: 'add' } ]},
	{ id: 594, levels: 1, name: 'Residence Moral', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regCp', val: 1.09, op: 'add' } ]},
	{ id: 595, levels: 1, name: 'Residence Clarity', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 0.47, op: 'add' } ]},
	{ id: 596, levels: 1, name: 'Residence Might', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 34.6, op: 'add' } ]},
	{ id: 597, levels: 1, name: 'Residence Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 54.7, op: 'add' } ]},
	{ id: 598, levels: 1, name: 'Residence Empower', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 40.4, op: 'add' } ]},
	{ id: 599, levels: 1, name: 'Residence Magic Barrier', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 44, op: 'add' } ]},
	{ id: 600, levels: 1, name: 'Residence Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 601, levels: 1, name: 'Residence Agility', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 602, levels: 1, name: 'Residence Shield Block', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rShld', val: 54.7, op: 'add' } ]},
	{ id: 603, levels: 1, name: 'Residence Shield Defense', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sDef', val: 225, op: 'add' } ]},
	{ id: 604, levels: 1, name: 'Residence Resist Typhoon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'windRes', val: 10, op: 'add' },
		{ stat: 'waterRes', val: 10, op: 'add' } ]},
	{ id: 605, levels: 1, name: 'Residence Resist Lava', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: 10, op: 'add' },
		{ stat: 'earthRes', val: 10, op: 'add' } ]},
	{ id: 606, levels: 1, name: 'Residence Fortitude', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: 10, op: 'sub' } ]},
	{ id: 607, levels: 1, name: 'Residence Freedom', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: 10, op: 'sub' } ]},
	{ id: 608, levels: 1, name: 'Residence Vigilance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sleepVuln', val: 10, op: 'sub' } ]},
	{ id: 609, levels: 1, name: 'Residence Movement', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 6, op: 'add' } ]},
	{ id: 611, levels: 3, name: 'Fire Squad', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 17.3, op: 'add' },
		{ stat: 'rCrit', val: [0, 15, 15], op: 'add' },
		{ stat: 'cAtk', val: [0, 0, 100], op: 'add' } ]},
	{ id: 612, levels: 3, name: 'Water Squad', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 27.3, op: 'add' },
		{ stat: 'mDef', val: [0, 17.6, 17.6], op: 'add' },
		{ stat: 'sDef', val: [1, 1, 1.06], op: 'mul' } ]},
	{ id: 613, levels: 3, name: 'Wind Squad', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 2, op: 'add' },
		{ stat: 'rEvas', val: [0, 2, 2], op: 'add' },
		{ stat: 'runSpd', val: [0, 0, 3], op: 'add' } ]},
	{ id: 614, levels: 3, name: 'Earth Squad', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: [17, 31.1, 44], op: 'add' } ]},
	{ id: 615, levels: 3, name: 'Holy Squad', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bonusHp', val: 20, op: 'add' },
		{ stat: 'maxMp', val: [1, 1.3, 1.3], op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: [1, 1, 0.95], op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: [1, 1, 0.95], op: 'mul' } ]},
	{ id: 616, levels: 3, name: 'Dark Squad', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: [7.17, 19.32, 19.32], op: 'add' },
		{ stat: 'mCritRate', val: [0, 0, 0.01], op: 'basemul' } ]},
	{ id: 617, levels: 1, name: 'Transform Onyx Beast', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' },
		{ stat: 'runSpd', val: 11, op: 'add' } ]},
	{ id: 618, levels: 1, name: 'Transform Death Blader', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 622, levels: 2, name: 'Ultimate Escape', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'rEvas', val: [20, 35], op: 'add' },
		{ stat: 'runSpd', val: [33, 66], op: 'add' },
		{ stat: 'pSkillEvas', val: [0, 25], op: 'add' } ]},
	{ id: 626, levels: 4, name: 'Critical Sense', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [0.1, 0.15, 0.2, 0.25], op: 'basemul' },
		{ stat: 'cAtkAdd', val: [111, 177, 253, 317], op: 'add' } ]},
	{ id: 628, levels: 1, name: 'Warp', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Warp' },
	{ id: 631, levels: 6, name: 'Emergent Ability - Attack', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [22, 42, 60, 75, 89, 99], op: 'add' } ]},
	{ id: 632, levels: 6, name: 'Emergent Ability - Defense', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [9, 18, 26, 35, 44, 53], op: 'add' } ]},
	{ id: 633, levels: 6, name: 'Emergent Ability - Empower', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: [11, 20, 29, 37, 43, 48], op: 'add' } ]},
	{ id: 634, levels: 6, name: 'Emergent Ability - Magic Defense', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: [15, 30, 45, 61, 79, 91], op: 'add' } ]},
	{ id: 637, levels: 1, name: 'Master Ability - Attack', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 35, op: 'add' } ]},
	{ id: 638, levels: 1, name: 'Master Ability - Empower', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 29, op: 'add' } ]},
	{ id: 639, levels: 1, name: 'Master Ability - Casting', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtkSpd', val: 11, op: 'add' } ]},
	{ id: 640, levels: 1, name: 'Master Ability - Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: 30, op: 'add' } ]},
	{ id: 641, levels: 1, name: 'Knight Ability - Boost HP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 1.06, op: 'mul' } ]},
	{ id: 642, levels: 1, name: 'Enchanter Ability - Boost Mana', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 148, op: 'add' } ]},
	{ id: 643, levels: 1, name: 'Summoner Ability - Boost HP/MP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 147, op: 'add' },
		{ stat: 'maxMp', val: 74, op: 'add' } ]},
	{ id: 644, levels: 1, name: 'Rogue Ability - Evasion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 645, levels: 1, name: 'Rogue Ability - Long Shot', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkRange', val: 200, op: 'add', using: 'Bow' } ]},
	{ id: 646, levels: 1, name: 'Wizard Ability - Mana Gain', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'gainMp', val: 20, op: 'add' } ]},
	{ id: 647, levels: 1, name: 'Enchanter Ability - Mana Recovery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 0.5, op: 'add' } ]},
	{ id: 648, levels: 1, name: 'Healer Ability - Prayer', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'gainHp', val: 19, op: 'add' } ]},
	{ id: 650, levels: 1, name: 'Warrior Ability - Resist Trait', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cancelVuln', val: 3, op: 'sub' },
		{ stat: 'stunVuln', val: 3, op: 'sub' },
		{ stat: 'rootVuln', val: 3, op: 'sub' },
		{ stat: 'sleepVuln', val: 3, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 3, op: 'sub' } ]},
	{ id: 656, levels: 3, name: 'Transform Divine Warrior', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 657, levels: 3, name: 'Transform Divine Knight', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 658, levels: 3, name: 'Transform Divine Rogue', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 659, levels: 3, name: 'Transform Divine Wizard', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 22, op: 'set' },
		{ stat: 'DEX', val: 21, op: 'set' },
		{ stat: 'CON', val: 27, op: 'set' },
		{ stat: 'INT', val: 41, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 39, op: 'set' } ]},
	{ id: 660, levels: 3, name: 'Transform Divine Summoner', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 22, op: 'set' },
		{ stat: 'DEX', val: 21, op: 'set' },
		{ stat: 'CON', val: 27, op: 'set' },
		{ stat: 'INT', val: 41, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 39, op: 'set' } ]},
	{ id: 661, levels: 3, name: 'Transform Divine Healer', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 22, op: 'set' },
		{ stat: 'DEX', val: 21, op: 'set' },
		{ stat: 'CON', val: 27, op: 'set' },
		{ stat: 'INT', val: 41, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 39, op: 'set' } ]},
	{ id: 662, levels: 3, name: 'Transform Divine Enchanter', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 22, op: 'set' },
		{ stat: 'DEX', val: 21, op: 'set' },
		{ stat: 'CON', val: 27, op: 'set' },
		{ stat: 'INT', val: 41, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 39, op: 'set' } ]},
	{ id: 663, levels: 1, name: 'Transform Zaken', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 48, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 52, op: 'set' },
		{ stat: 'INT', val: 45, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 45, op: 'set' } ]},
	{ id: 664, levels: 1, name: 'Transform Anakim', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 46, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 49, op: 'set' },
		{ stat: 'INT', val: 50, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 45, op: 'set' } ]},
	{ id: 665, levels: 1, name: 'Transform Venom', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 47, op: 'set' },
		{ stat: 'INT', val: 46, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 42, op: 'set' } ]},
	{ id: 666, levels: 1, name: 'Transform Gordon', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 47, op: 'set' },
		{ stat: 'INT', val: 46, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 42, op: 'set' } ]},
	{ id: 667, levels: 1, name: 'Transform Ranku', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 47, op: 'set' },
		{ stat: 'INT', val: 46, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 42, op: 'set' } ]},
	{ id: 668, levels: 1, name: 'Transform Kechi', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 47, op: 'set' },
		{ stat: 'INT', val: 46, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 42, op: 'set' } ]},
	{ id: 669, levels: 1, name: 'Transform Demon Prince', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 47, op: 'set' },
		{ stat: 'INT', val: 46, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 42, op: 'set' } ]},
	{ id: 670, levels: 1, name: 'Transform Heretic', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 22, op: 'set' },
		{ stat: 'DEX', val: 21, op: 'set' },
		{ stat: 'CON', val: 27, op: 'set' },
		{ stat: 'INT', val: 41, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 39, op: 'set' } ]},
	{ id: 671, levels: 1, name: 'Transform Vale Master', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 22, op: 'set' },
		{ stat: 'DEX', val: 21, op: 'set' },
		{ stat: 'CON', val: 27, op: 'set' },
		{ stat: 'INT', val: 41, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 39, op: 'set' } ]},
	{ id: 672, levels: 1, name: 'Transform Saber Tooth Tiger', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 28, op: 'set' },
		{ stat: 'CON', val: 45, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 673, levels: 1, name: 'Transform Oel Mahum', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 674, levels: 1, name: 'Transform Doll Blader', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 678, levels: 1, name: 'Divine Warrior War Cry', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up_special', effects: [
		{ stat: 'pAtk', val: 1.25, op: 'mul' } ]},
	{ id: 679, levels: 1, name: 'Sacrifice Warrior', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', effects: [
		{ stat: 'limitHp', val: 0.1, op: 'mul' } ]},
	{ id: 684, levels: 1, name: 'Divine Knight Ultimate Defense', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ImmobileBuff', stackType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: 3600, op: 'add' },
		{ stat: 'mDef', val: 2700, op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 685, levels: 1, name: 'Sacrifice Knight', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', effects: [
		{ stat: 'limitHp', val: 0.1, op: 'mul' } ]},
	{ id: 690, levels: 1, name: 'Divine Rogue Agility', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'rEvas', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 691, levels: 1, name: 'Sacrifice Rogue', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', effects: [
		{ stat: 'limitHp', val: 0.1, op: 'mul' } ]},
	{ id: 697, levels: 1, name: 'Sacrifice Wizard', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', effects: [
		{ stat: 'limitHp', val: 0.1, op: 'mul' } ]},
	{ id: 704, levels: 1, name: 'Divine Enchanter Water Spirit', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'mCritRate', val: 2, op: 'add' },
		{ stat: 'regMp', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 705, levels: 1, name: 'Divine Enchanter Fire Spirit', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'regHp', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' },
		{ stat: 'cAtk', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' } ]},
	{ id: 706, levels: 1, name: 'Divine Enchanter Wind Spirit', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul' },
		{ stat: 'mCritRate', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 707, levels: 1, name: 'Divine Enchanter Hero Spirit', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 1.2, op: 'mul' },
		{ stat: 'cAtk', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' },
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' } ]},
	{ id: 709, levels: 1, name: 'Sacrifice Enchanter', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', effects: [
		{ stat: 'limitHp', val: 0.1, op: 'mul' } ]},
	{ id: 714, levels: 1, name: 'Sacrifice Summoner', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', effects: [
		{ stat: 'limitHp', val: 0.1, op: 'mul' } ]},
	{ id: 719, levels: 1, name: 'Zaken Vampiric Rage', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 727, levels: 1, name: 'Venom Disillusion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.08, op: 'mul' } ]},
	{ id: 737, levels: 1, name: 'Devil Ultimate Defense', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ImmobileBuff', stackType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: 3600, op: 'add' },
		{ stat: 'mDef', val: 2700, op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 748, levels: 1, name: 'Saber Tooth Tiger Sprint', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 750, levels: 1, name: 'Oel Mahum Ultimate Defense', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ImmobileBuff', stackType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: 3600, op: 'add' },
		{ stat: 'mDef', val: 2700, op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 755, levels: 1, name: 'Protection of Rune', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.15, op: 'mul' } ]},
	{ id: 756, levels: 1, name: 'Protection of Elemental', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: 20, op: 'add' },
		{ stat: 'waterRes', val: 20, op: 'add' },
		{ stat: 'windRes', val: 20, op: 'add' },
		{ stat: 'earthRes', val: 20, op: 'add' } ]},
	{ id: 757, levels: 1, name: 'Protection of Alignment', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'holyRes', val: 20, op: 'add' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 758, levels: 1, name: 'Fighter\'s Will', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 100, op: 'add', using: 'Sword,Blunt,Dagger,Pole,Fist,Dual Sword,Dual Fist,Big Sword,Big Blunt,Ancient,Rapier,Dual Dagger' },
		{ stat: 'pAtkSpd', val: 1.1, op: 'mul', using: 'Sword,Blunt,Dagger,Pole,Fist,Dual Sword,Dual Fist,Big Sword,Big Blunt,Ancient,Rapier,Dual Dagger' } ]},
	{ id: 759, levels: 1, name: 'Archer\'s Will', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 8, op: 'add', using: 'Bow,Crossbow' },
		{ stat: 'pAtkRange', val: 50, op: 'add', using: 'Bow,Crossbow' } ]},
	{ id: 760, levels: 1, name: 'Anti Magic Armor', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up_special', effects: [
		{ stat: 'mDef', val: 5000, op: 'add' } ]},
	{ id: 761, levels: 1, name: 'Seed of Revenge', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', stackType: 'increaseTrigger', effects: [
		{ stat: 'pAtk', val: 100, op: 'add' } ]},
	{ id: 764, levels: 1, name: 'Song of Wind Storm', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'bowWpnVuln', val: 0.7, op: 'mul' } ]},
	{ id: 765, levels: 1, name: 'Dance of Blade Storm', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'bowWpnVuln', val: 0.01, op: 'mul' },
		{ stat: 'mAtk', val: 0.01, op: 'mul' } ]},
	{ id: 766, levels: 1, name: 'Sixth Sense', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 15, op: 'add' } ]},
	{ id: 768, levels: 1, name: 'Exciting Adventure', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'avoid_up_special', effects: [
		{ stat: 'runSpd', val: 20, op: 'add' },
		{ stat: 'rEvas', val: 15, op: 'add' },
		{ stat: 'blowRate', val: 1.3, op: 'mul' },
		{ stat: 'cancelVuln', val: 90, op: 'sub' },
		{ stat: 'pSkillEvas', val: 40, op: 'add' } ]},
	{ id: 769, levels: 1, name: 'Wind Riding', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'avoid_up_special', effects: [
		{ stat: 'runSpd', val: 50, op: 'add' },
		{ stat: 'rEvas', val: 20, op: 'add' },
		{ stat: 'blowRate', val: 1.2, op: 'mul' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' },
		{ stat: 'pSkillEvas', val: 75, op: 'add' } ]},
	{ id: 770, levels: 1, name: 'Ghost Walking', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'avoid_up_special', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' },
		{ stat: 'rEvas', val: 15, op: 'add' },
		{ stat: 'blowRate', val: 1.4, op: 'mul' },
		{ stat: 'cancelVuln', val: 90, op: 'sub' },
		{ stat: 'pSkillEvas', val: 60, op: 'add' } ]},
	{ id: 778, levels: 1, name: 'Golem Armor', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'maxHp', val: 1.1, op: 'mul' },
		{ stat: 'maxMp', val: 1.1, op: 'mul' },
		{ stat: 'maxCp', val: 0.72, op: 'mul' },
		{ stat: 'runSpd', val: 11, op: 'add' } ]},
	{ id: 784, levels: 1, name: 'Spirit of Phoenix', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', stackType: 'increaseTrigger', effects: [
		{ stat: 'pDef', val: 200, op: 'add' } ]},
	{ id: 785, levels: 1, name: 'Flame Icon', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'tank_multi_buff', effects: [
		{ stat: 'debuffVuln', val: 40, op: 'sub' },
		{ stat: 'pDef', val: 1.5, op: 'mul' },
		{ stat: 'mDef', val: 1.5, op: 'mul' },
		{ stat: 'accCombat', val: 6, op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt' },
		{ stat: 'runSpd', val: 30, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.3, op: 'mul', using: 'Sword,Big Sword,Blunt,Big Blunt' },
		{ stat: 'rCrit', val: 100, op: 'add', using: 'Sword,Big Sword' },
		{ stat: 'cAtk', val: 2, op: 'mul', using: 'Blunt,Big Blunt' },
		{ stat: 'cancelVuln', val: 40, op: 'sub' },
		{ stat: 'gainHp', val: 0.2, op: 'mul' } ]},
	{ id: 786, levels: 1, name: 'Eva\'s Will', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', stackType: 'increaseTrigger', effects: [
		{ stat: 'mDef', val: 200, op: 'add' } ]},
	{ id: 788, levels: 1, name: 'Pain of Shilen', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', stackType: 'increaseTrigger', effects: [
		{ stat: 'cAtk', val: 1.15, op: 'mul' } ]},
	{ id: 789, levels: 1, name: 'Spirit of Shilen', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'tank_multi_buff', effects: [
		{ stat: 'pAtk', val: 1.3, op: 'mul' },
		{ stat: 'runSpd', val: 30, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 100, op: 'add', using: 'Sword,Big Sword' },
		{ stat: 'cAtk', val: 2, op: 'mul', using: 'Blunt,Big Blunt' },
		{ stat: 'absorbDam', val: 40, op: 'add' },
		{ stat: 'gainHp', val: 0.2, op: 'mul' } ]},
	{ id: 799, levels: 3, name: 'Master Ability - Defense', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [29, 58, 87], op: 'add' } ]},
	{ id: 800, levels: 3, name: 'Master Ability - Magic Defense', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: [50, 100, 150], op: 'add' } ]},
	{ id: 801, levels: 1, name: 'Warrior Ability - Boost CP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 738, op: 'add' } ]},
	{ id: 802, levels: 1, name: 'Wizard Ability - Anti-magic', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'magicDamVul', val: 0.95, op: 'mul' } ]},
	{ id: 803, levels: 1, name: 'Healer Ability - Divine Protection', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'darkRes', val: 5, op: 'add' },
		{ stat: 'holyRes', val: 5, op: 'add' } ]},
	{ id: 804, levels: 1, name: 'Knight Ability - Resist Critical', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'critVuln', val: 0.97, op: 'mul' } ]},
	{ id: 807, levels: 1, name: 'Over-hit', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.4, op: 'mul' } ]},
	{ id: 810, levels: 1, name: 'Vanguard', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'sDef', val: 0.5, op: 'mul' } ]},
	{ id: 811, levels: 1, name: 'Vanguard', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'sDef', val: 0.5, op: 'mul' } ]},
	{ id: 812, levels: 1, name: 'Vanguard', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'sDef', val: 0.5, op: 'mul' } ]},
	{ id: 813, levels: 1, name: 'Vanguard', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'sDef', val: 0.5, op: 'mul' } ]},
	{ id: 823, levels: 3, name: 'Strengthen Golem', target: 'TARGET_SUMMON', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.03, 1.06, 1.09], op: 'mul' } ]},
	{ id: 824, levels: 3, name: 'Golem Reinforcement', target: 'TARGET_SUMMON', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' },
		{ stat: 'maxHp', val: [1.05, 1.08, 1.1], op: 'mul' } ]},
	{ id: 825, levels: 1, name: 'Sharp Edge', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ws_weapon', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul', using: 'Sword,Big Sword,Dual Sword,Ancient,Rapier,Dagger,Dual Dagger,Pole,Dual Fist' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul', using: 'Sword,Big Sword,Dual Sword,Ancient,Rapier,Dagger,Dual Dagger,Pole,Dual Fist' } ]},
	{ id: 826, levels: 1, name: 'Spike', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ws_weapon', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul', using: 'Blunt,Big Blunt' },
		{ stat: 'stunProf', val: 8, op: 'add', using: 'Blunt,Big Blunt' } ]},
	{ id: 827, levels: 1, name: 'Restring', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ws_weapon', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'pAtkRange', val: 100, op: 'add', using: 'Bow,Crossbow' } ]},
	{ id: 828, levels: 1, name: 'Case Harden', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ws_armor', effects: [
		{ stat: 'pDef', val: 1.1, op: 'mul' } ]},
	{ id: 829, levels: 1, name: 'Hard Tanning', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ws_armor', effects: [
		{ stat: 'pDef', val: 1.05, op: 'mul' },
		{ stat: 'rEvas', val: 2, op: 'add' } ]},
	{ id: 830, levels: 1, name: 'Embroider', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ws_armor', effects: [
		{ stat: 'pDef', val: 1.05, op: 'mul' },
		{ stat: 'regMp', val: 2, op: 'add' } ]},
	{ id: 832, levels: 1, name: 'Fast Recovery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regHp', val: 4, op: 'add' },
		{ stat: 'regMp', val: 3.4, op: 'add' },
		{ stat: 'regCp', val: 3.4, op: 'add' } ]},
	{ id: 834, levels: 1, name: 'Blood Pact', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'maxHp', val: 1.1, op: 'mul' },
		{ stat: 'regHp', val: 10, op: 'add' } ]},
	{ id: 837, levels: 1, name: 'Painkiller', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Invincible', stackType: 'Instant_Shield' },
	{ id: 846, levels: 1, name: 'Possess Ward', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 0.1, op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.1, op: 'mul' },
		{ stat: 'runSpd', val: 0.5, op: 'mul' } ]},
	{ id: 848, levels: 1, name: 'Gludio Territory Benefaction', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'INT', val: 1, op: 'add' } ]},
	{ id: 849, levels: 1, name: 'Dion Territory Benefaction', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'add' } ]},
	{ id: 850, levels: 1, name: 'Giran Territory Benefaction', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'MEN', val: 1, op: 'add' } ]},
	{ id: 851, levels: 1, name: 'Oren Territory Benefaction', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 1, op: 'add' },
		{ stat: 'MEN', val: 1, op: 'add' } ]},
	{ id: 852, levels: 1, name: 'Aden Territory Benefaction', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'MEN', val: 1, op: 'add' } ]},
	{ id: 853, levels: 1, name: 'Innadril Territory Benefaction', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 1, op: 'add' },
		{ stat: 'INT', val: 1, op: 'add' } ]},
	{ id: 854, levels: 1, name: 'Goddard Territory Benefaction', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'INT', val: 1, op: 'add' } ]},
	{ id: 855, levels: 1, name: 'Rune Territory Benefaction', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'add' } ]},
	{ id: 856, levels: 1, name: 'Schuttgart Territory Benefaction', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 1, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'add' } ]},
	{ id: 857, levels: 1, name: 'Human Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 858, levels: 1, name: 'Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 859, levels: 1, name: 'Dark Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 860, levels: 1, name: 'Orc Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 861, levels: 1, name: 'Dwarf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 862, levels: 1, name: 'Kamael Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 863, levels: 1, name: 'Royal Guard Captain', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 864, levels: 1, name: 'Archer Captain', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 865, levels: 1, name: 'Magic Leader', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 866, levels: 1, name: 'Kamael Guard Captain', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 867, levels: 1, name: 'Knight of Dawn', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 868, levels: 1, name: 'Fortress Captain', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 894, levels: 1, name: 'Exhilarate', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Exhilarate', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'pDef', val: 1.18, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' } ]},
	{ id: 895, levels: 1, name: 'Exhilarate', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Exhilarate', effects: [
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.16, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' } ]},
	{ id: 913, levels: 1, name: 'Deflect Magic', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'magicSuccRes', val: 2, op: 'mul' } ]},
	{ id: 914, levels: 1, name: 'Song of Purification', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'debuffVuln', val: 30, op: 'sub' },
		{ stat: 'gainHp', val: 1.3, op: 'mul' } ]},
	{ id: 915, levels: 1, name: 'Dance of Berserker', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'sub' } ]},
	{ id: 916, levels: 4, name: 'Shield Deflect Magic', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vengeanceMdam', val: [35, 40, 45, 50], op: 'add' } ]},
	{ id: 917, levels: 1, name: 'Final Secret', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pvpPhysDmg', val: 1.3, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.3, op: 'mul' } ]},
	{ id: 922, levels: 1, name: 'Hide', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Hide', effects: [
		{ stat: 'runSpd', val: 0.7, op: 'mul' } ]},
	{ id: 923, levels: 1, name: 'Dual Dagger Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 87.5, op: 'add', using: 'Dual Dagger' },
		{ stat: 'lethalRate', val: 1.05, op: 'mul', using: 'Dual Dagger' } ]},
	{ id: 925, levels: 1, name: 'Sigil Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.04, op: 'mul', using: 'Sigil' },
		{ stat: 'regMp', val: 1.17, op: 'mul', using: 'Sigil' } ]},
	{ id: 926, levels: 1, name: 'Sigil Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bonusHp', val: 30, op: 'add', using: 'Sigil' },
		{ stat: 'regMp', val: 1.17, op: 'mul', using: 'Sigil' } ]},
	{ id: 929, levels: 1, name: 'Spirit of the Cat', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 45, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 44, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 39, op: 'set' } ]},
	{ id: 930, levels: 1, name: 'Spirit of the Demon', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 45, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 47, op: 'set' },
		{ stat: 'WIT', val: 19, op: 'set' },
		{ stat: 'MEN', val: 37, op: 'set' } ]},
	{ id: 931, levels: 1, name: 'Spirit of the Unicorn', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 45, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 40, op: 'set' },
		{ stat: 'WIT', val: 25, op: 'set' },
		{ stat: 'MEN', val: 38, op: 'set' } ]},
	{ id: 934, levels: 1, name: 'Sigil Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 1.05, op: 'mul', using: 'Sigil' },
		{ stat: 'regMp', val: 1.17, op: 'mul', using: 'Sigil' } ]},
	{ id: 935, levels: 1, name: 'Sigil Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 1.05, op: 'mul', using: 'Sigil' },
		{ stat: 'regMp', val: 1.17, op: 'mul', using: 'Sigil' } ]},
	{ id: 945, levels: 1, name: 'Magician\'s Will', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.05, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'mCritRate', val: 0.05, op: 'basemul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 946, levels: 1, name: 'Silent Mind', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'BowMpConsumeRate', val: 0, op: 'mul' } ]},
	{ id: 948, levels: 1, name: 'Eye for Eye', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vengeancePdam', val: 100, op: 'add' } ]},
	{ id: 952, levels: 5, name: 'Collector\'s Experience', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [72.7, 86.1, 100.2, 114.8, 129.3], op: 'add', using: 'Blunt,Big Blunt' },
		{ stat: 'rShld', val: [1.1, 1.15, 1.2, 1.25, 1.3], op: 'mul' } ]},
	{ id: 956, levels: 3, name: 'Boost Morale', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'tank_multi_buff', effects: [
		{ stat: 'accCombat', val: [4, 6, 8], op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt,Dual Sword' },
		{ stat: 'rCrit', val: [50, 100, 150], op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt,Dual Sword' },
		{ stat: 'cAtk', val: [1.1, 1.2, 1.3], op: 'mul', using: 'Sword,Big Sword,Blunt,Big Blunt,Dual Sword' } ]},
	{ id: 959, levels: 1, name: 'Frog Jump', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 960, levels: 1, name: 'Race Running', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 961, levels: 1, name: 'Swift Dash', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 964, levels: 1, name: 'Children of Shilen', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtkSpd', val: 13, op: 'add' },
		{ stat: 'regMp', val: 1.02, op: 'mul' } ]},
	{ id: 982, levels: 3, name: 'Combat Aura', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtk', val: [1.03, 1.04, 1.05], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.03, 1.04, 1.05], op: 'mul' } ]},
	{ id: 1002, levels: 3, name: 'Flame Chant', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 1003, levels: 3, name: 'Pa\'agrian Gift', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1004, levels: 3, name: 'The Wisdom of Pa\'agrio', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 1005, levels: 3, name: 'Blessings of Pa\'agrio', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1006, levels: 3, name: 'Chant of Fire', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 1007, levels: 3, name: 'Chant of Battle', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1008, levels: 3, name: 'The Glory of Pa\'agrio', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 1009, levels: 3, name: 'Chant of Shielding', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1010, levels: 3, name: 'Soul Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1032, levels: 3, name: 'Invigor', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'bleedVuln', val: [30, 40, 50], op: 'sub' } ]},
	{ id: 1033, levels: 3, name: 'Resist Poison', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'poisonVuln', val: [30, 40, 50], op: 'sub' } ]},
	{ id: 1035, levels: 4, name: 'Mental Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MentalShield', effects: [
		{ stat: 'rootVuln', val: [20, 30, 40, 50], op: 'sub' },
		{ stat: 'sleepVuln', val: [20, 30, 40, 50], op: 'sub' },
		{ stat: 'confusionVuln', val: [20, 30, 40, 50], op: 'sub' },
		{ stat: 'derangementVuln', val: [20, 30, 40, 50], op: 'sub' } ]},
	{ id: 1036, levels: 2, name: 'Magic Barrier', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: [1.23, 1.3], op: 'mul' } ]},
	{ id: 1040, levels: 3, name: 'Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1043, levels: 1, name: 'Holy Weapon', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'holyPower', val: 20, op: 'add' } ]},
	{ id: 1044, levels: 3, name: 'Regeneration', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: [1.1, 1.15, 1.2], op: 'mul' } ]},
	{ id: 1045, levels: 6, name: 'Blessed Body', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 1047, levels: 4, name: 'Mana Regeneration', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'regMp', val: [1.72, 2.16, 2.74, 3.09], op: 'add' } ]},
	{ id: 1048, levels: 6, name: 'Blessed Soul', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 1059, levels: 3, name: 'Empower', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' } ]},
	{ id: 1062, levels: 2, name: 'Berserker Spirit', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'berserk', effects: [
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'rEvas', val: [2, 4], op: 'sub' } ]},
	{ id: 1068, levels: 3, name: 'Might', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1073, levels: 2, name: 'Kiss of Eva', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_breath_up', effects: [
		{ stat: 'breath', val: [5, 7], op: 'mul' } ]},
	{ id: 1077, levels: 3, name: 'Focus', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.2, 0.25, 0.3], op: 'basemul' } ]},
	{ id: 1078, levels: 6, name: 'Concentration', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Concentration', effects: [
		{ stat: 'cancel', val: [18, 25, 36, 42, 48, 53], op: 'sub' } ]},
	{ id: 1085, levels: 3, name: 'Acumen', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 1086, levels: 2, name: 'Haste', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 1087, levels: 3, name: 'Agility', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'rEvas', effects: [
		{ stat: 'rEvas', val: [2, 3, 4], op: 'add' } ]},
	{ id: 1139, levels: 2, name: 'Servitor Magic Shield', target: 'TARGET_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: [1.23, 1.3], op: 'mul' } ]},
	{ id: 1140, levels: 3, name: 'Servitor Physical Shield', target: 'TARGET_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1141, levels: 2, name: 'Servitor Haste', target: 'TARGET_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 1144, levels: 2, name: 'Servitor Wind Walk', target: 'TARGET_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [20, 33], op: 'add' } ]},
	{ id: 1145, levels: 3, name: 'Bright Servitor', target: 'TARGET_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' } ]},
	{ id: 1146, levels: 3, name: 'Mighty Servitor', target: 'TARGET_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1182, levels: 3, name: 'Resist Aqua', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'AquaAtr', effects: [
		{ stat: 'waterRes', val: [10, 15, 20], op: 'add' } ]},
	{ id: 1189, levels: 3, name: 'Resist Wind', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'WindAtr', effects: [
		{ stat: 'windRes', val: [10, 15, 20], op: 'add' } ]},
	{ id: 1191, levels: 3, name: 'Resist Fire', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'FireAtr', effects: [
		{ stat: 'fireRes', val: [10, 15, 20], op: 'add' } ]},
	{ id: 1204, levels: 2, name: 'Wind Walk', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [20, 33], op: 'add' } ]},
	{ id: 1240, levels: 3, name: 'Guidance', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add' } ]},
	{ id: 1242, levels: 3, name: 'Death Whisper', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 1243, levels: 6, name: 'Bless Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'shieldProbUp', effects: [
		{ stat: 'rShld', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3], op: 'mul' } ]},
	{ id: 1249, levels: 3, name: 'The Vision of Pa\'agrio', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add' } ]},
	{ id: 1250, levels: 3, name: 'Under the Protection of Pa\'agrio', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'shieldProbUp', effects: [
		{ stat: 'rShld', val: [1.3, 1.4, 1.5], op: 'mul' } ]},
	{ id: 1251, levels: 2, name: 'Chant of Fury', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 1252, levels: 3, name: 'Chant of Evasion', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'rEvas', effects: [
		{ stat: 'rEvas', val: [2, 3, 4], op: 'add' } ]},
	{ id: 1253, levels: 3, name: 'Chant of Rage', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 1257, levels: 3, name: 'Decrease Weight', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Weight', effects: [
		{ stat: 'maxLoad', val: [3000, 6000, 9000], op: 'add' } ]},
	{ id: 1259, levels: 4, name: 'Resist Shock', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ShockVuln', effects: [
		{ stat: 'stunVuln', val: [15, 20, 30, 40], op: 'sub' } ]},
	{ id: 1260, levels: 3, name: 'The Tact of Pa\'agrio', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'rEvas', effects: [
		{ stat: 'rEvas', val: [2, 3, 4], op: 'add' } ]},
	{ id: 1261, levels: 2, name: 'The Rage of Pa\'agrio', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'berserk', effects: [
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'rEvas', val: [2, 4], op: 'sub' } ]},
	{ id: 1268, levels: 4, name: 'Vampiric Rage', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: [6, 7, 8, 9], op: 'add' } ]},
	{ id: 1282, levels: 2, name: 'Pa\'agrian Haste', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [20, 33], op: 'add' } ]},
	{ id: 1284, levels: 3, name: 'Chant of Revenge', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'DmgShield', effects: [
		{ stat: 'reflectDam', val: [10, 15, 20], op: 'add' } ]},
	{ id: 1285, levels: 1, name: 'Seed of Fire', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'firePower', val: 20, op: 'add' } ]},
	{ id: 1286, levels: 1, name: 'Seed of Water', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'waterPower', val: 20, op: 'add' } ]},
	{ id: 1287, levels: 1, name: 'Seed of Wind', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'windPower', val: 20, op: 'add' } ]},
	{ id: 1297, levels: 6, name: 'Clear Mind', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: [3.2, 4, 4.3, 5.1, 5.8, 6.2], op: 'add' },
		{ stat: 'regMp', val: [2.6, 3.2, 3.5, 4.1, 4.7, 4.9], op: 'add' } ]},
	{ id: 1299, levels: 2, name: 'Servitor Empowerment', target: 'TARGET_PET', operateType: 'OP_ACTIVE', effectType: 'ImmobilePetBuff', stackType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: [1800, 3600], op: 'add' },
		{ stat: 'mDef', val: [1350, 2700], op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 1303, levels: 2, name: 'Wild Magic', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'magic_critical_up', effects: [
		{ stat: 'mCritRate', val: [1, 2], op: 'basemul' } ]},
	{ id: 1304, levels: 3, name: 'Advanced Block', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'sdef_up', effects: [
		{ stat: 'sDef', val: [1.3, 1.4, 1.5], op: 'mul' } ]},
	{ id: 1307, levels: 3, name: 'Prayer', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'gainHp', val: [1.08, 1.1, 1.12], op: 'mul' } ]},
	{ id: 1308, levels: 3, name: 'Chant of Predator', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.2, 0.25, 0.3], op: 'basemul' } ]},
	{ id: 1309, levels: 3, name: 'Chant of Eagle', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add' } ]},
	{ id: 1310, levels: 4, name: 'Chant of Vampire', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: [6, 7, 8, 9], op: 'add' } ]},
	{ id: 1323, levels: 1, name: 'Noblesse Blessing', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'NoblesseBless', stackType: 'ab_preserve_abnormal' },
	{ id: 1325, levels: 1, name: 'Fortune of Noblesse', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'CharmOfLuck', stackType: 'LuckyCharm' },
	{ id: 1326, levels: 1, name: 'Harmony of Noblesse', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Nobl', effects: [
		{ stat: 'pDef', val: 3000, op: 'add' },
		{ stat: 'runSpd', val: 1.25, op: 'mul' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' },
		{ stat: 'bowWpnVuln', val: 0.2, op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: 0.2, op: 'mul' },
		{ stat: 'maxCp', val: 0.8, op: 'mul' } ]},
	{ id: 1327, levels: 1, name: 'Symphony of Noblesse', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Nobl', effects: [
		{ stat: 'mDef', val: 4500, op: 'add' },
		{ stat: 'runSpd', val: 1.25, op: 'mul' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' },
		{ stat: 'bowWpnVuln', val: 0.2, op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: 0.2, op: 'mul' },
		{ stat: 'maxCp', val: 0.8, op: 'mul' } ]},
	{ id: 1346, levels: 1, name: 'Warrior Servitor', target: 'TARGET_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'regHp', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 0.9, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' } ]},
	{ id: 1347, levels: 1, name: 'Wizard Servitor', target: 'TARGET_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'regMp', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'basemul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' } ]},
	{ id: 1348, levels: 1, name: 'Assassin Servitor', target: 'TARGET_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' },
		{ stat: 'cAtk', val: 1.2, op: 'mul' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' } ]},
	{ id: 1352, levels: 1, name: 'Elemental Protection', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'waterRes', val: 20, op: 'add' },
		{ stat: 'fireRes', val: 20, op: 'add' },
		{ stat: 'windRes', val: 20, op: 'add' },
		{ stat: 'earthRes', val: 20, op: 'add' } ]},
	{ id: 1353, levels: 1, name: 'Divine Protection', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'darkRes', val: 30, op: 'add' },
		{ stat: 'holyRes', val: 20, op: 'add' } ]},
	{ id: 1354, levels: 1, name: 'Arcane Protection', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'resist_debuff_dispel', effects: [
		{ stat: 'cancelVuln', val: 30, op: 'sub' },
		{ stat: 'debuffVuln', val: 20, op: 'sub' } ]},
	{ id: 1355, levels: 1, name: 'Prophecy of Water', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'mCritRate', val: 2, op: 'basemul' },
		{ stat: 'regMp', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 1356, levels: 1, name: 'Prophecy of Fire', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'regHp', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'basemul' },
		{ stat: 'cAtk', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' } ]},
	{ id: 1357, levels: 1, name: 'Prophecy of Wind', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul' },
		{ stat: 'mCritRate', val: 0.2, op: 'basemul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 1362, levels: 1, name: 'Chant of Spirit', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'resist_debuff_dispel', effects: [
		{ stat: 'cancelVuln', val: 30, op: 'sub' },
		{ stat: 'debuffVuln', val: 20, op: 'sub' } ]},
	{ id: 1364, levels: 1, name: 'Eye of Pa\'agrio', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 1365, levels: 1, name: 'Soul of Pa\'agrio', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 1368, levels: 8, name: 'Expand Dwarven Craft', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'DwarfRecipeLimit', val: [6, 12, 18, 24, 30, 36, 42, 48], op: 'add' } ]},
	{ id: 1369, levels: 8, name: 'Expand Common Craft', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CommonRecipeLimit', val: [6, 12, 18, 24, 30, 36, 42, 48], op: 'add' } ]},
	{ id: 1370, levels: 8, name: 'Expand Trade', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'PrivateSellLimit', val: [1, 2, 3, 4, 5, 6, 7, 8], op: 'add' },
		{ stat: 'PrivateBuyLimit', val: [1, 2, 3, 4, 5, 6, 7, 8], op: 'add' } ]},
	{ id: 1371, levels: 8, name: 'Expand Storage', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'whLimit', val: [6, 12, 18, 24, 30, 36, 42, 48], op: 'add' },
		{ stat: 'FreightLimit', val: [6, 12, 18, 24, 30, 36, 42, 48], op: 'add' } ]},
	{ id: 1372, levels: 8, name: 'Expand Inventory', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'inventoryLimit', val: [6, 12, 18, 24, 30, 36, 42, 48], op: 'add' } ]},
	{ id: 1373, levels: 1, name: 'Strider Mastery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.25, op: 'mul' },
		{ stat: 'mAtk', val: 1.25, op: 'mul' } ]},
	{ id: 1374, levels: 1, name: 'Heroic Valor', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hero', effects: [
		{ stat: 'pAtk', val: 250, op: 'add' },
		{ stat: 'pDef', val: 500, op: 'add' },
		{ stat: 'cancelVuln', val: 40, op: 'sub' } ]},
	{ id: 1388, levels: 3, name: 'Greater Might', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Great', effects: [
		{ stat: 'pAtk', val: [1.04, 1.07, 1.1], op: 'mul' } ]},
	{ id: 1389, levels: 3, name: 'Greater Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Great', effects: [
		{ stat: 'pDef', val: [1.05, 1.1, 1.15], op: 'mul' } ]},
	{ id: 1390, levels: 3, name: 'War Chant', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Great', effects: [
		{ stat: 'pAtk', val: [1.04, 1.07, 1.1], op: 'mul' } ]},
	{ id: 1391, levels: 3, name: 'Earth Chant', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Great', effects: [
		{ stat: 'pDef', val: [1.05, 1.1, 1.15], op: 'mul' } ]},
	{ id: 1392, levels: 3, name: 'Holy Resistance', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'holyAtr', effects: [
		{ stat: 'holyRes', val: [15, 23, 30], op: 'add' } ]},
	{ id: 1393, levels: 3, name: 'Unholy Resistance', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'DarkAtr', effects: [
		{ stat: 'darkRes', val: [15, 23, 30], op: 'add' } ]},
	{ id: 1397, levels: 3, name: 'Clarity', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MPrate', effects: [
		{ stat: 'MagicalMpConsumeRate', val: [0.96, 0.93, 0.9], op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: [0.9, 0.85, 0.8], op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: [0.9, 0.85, 0.8], op: 'mul' } ]},
	{ id: 1410, levels: 1, name: 'Salvation', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'PhoenixBless', stackType: 'ab_preserve_abnormal' },
	{ id: 1411, levels: 1, name: 'Mystic Immunity', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'debuffVuln', val: 0, op: 'mul' } ]},
	{ id: 1413, levels: 1, name: 'Magnus\' Chant', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxMp', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.5, op: 'add' },
		{ stat: 'regMp', val: 4, op: 'add' },
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'mAtk', val: 1.3, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'fireRes', val: 10, op: 'add' },
		{ stat: 'waterRes', val: 10, op: 'add' },
		{ stat: 'windRes', val: 10, op: 'add' },
		{ stat: 'earthRes', val: 10, op: 'add' },
		{ stat: 'debuffVuln', val: 25, op: 'sub' },
		{ stat: 'cancelVuln', val: 40, op: 'sub' } ]},
	{ id: 1415, levels: 1, name: 'Pa\'agrio\'s Emblem', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'resist_debuff_dispel', effects: [
		{ stat: 'cancelVuln', val: 30, op: 'sub' },
		{ stat: 'debuffVuln', val: 20, op: 'sub' } ]},
	{ id: 1418, levels: 1, name: 'Celestial Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Invincible', stackType: 'Instant_Shield' },
	{ id: 1427, levels: 1, name: 'Flames of Invincibility', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Invincible', stackType: 'Instant_Shield' },
	{ id: 1430, levels: 5, name: 'Invocation', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ManaHealOverTime' },
	{ id: 1432, levels: 2, name: 'Increase Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12], op: 'mul' } ]},
	{ id: 1441, levels: 2, name: 'Soul to Empower', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65], op: 'mul' } ]},
	{ id: 1442, levels: 3, name: 'Protection from Darkness', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'DarkAtr', effects: [
		{ stat: 'darkRes', val: [15, 23, 30], op: 'add' } ]},
	{ id: 1443, levels: 1, name: 'Dark Weapon', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'darkPower', val: 20, op: 'add' } ]},
	{ id: 1444, levels: 1, name: 'Pride of Kamael', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul', using: 'Ancient,Crossbow,Rapier' },
		{ stat: 'lethalRate', val: 1.1, op: 'mul' } ]},
	{ id: 1457, levels: 1, name: 'Empowering Echo', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mAtk', val: 1.25, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 1.35, op: 'mul' } ]},
	{ id: 1459, levels: 1, name: 'Divine Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'giveHp', effects: [
		{ stat: 'bonusHp', val: 1000, op: 'add' } ]},
	{ id: 1460, levels: 1, name: 'Mana Gain', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'gainMp', effects: [
		{ stat: 'gainMp', val: 1.85, op: 'mul' } ]},
	{ id: 1461, levels: 1, name: 'Chant of Protection', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critVuln', effects: [
		{ stat: 'critVuln', val: 0.7, op: 'mul' } ]},
	{ id: 1463, levels: 1, name: 'Fire Weapon', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'firePower', val: 20, op: 'add' } ]},
	{ id: 1464, levels: 1, name: 'Ice Weapon', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'waterPower', val: 20, op: 'add' } ]},
	{ id: 1465, levels: 1, name: 'Wind Weapon', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'windPower', val: 20, op: 'add' } ]},
	{ id: 1466, levels: 1, name: 'Earth Weapon', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'earthPower', val: 20, op: 'add' } ]},
	{ id: 1470, levels: 1, name: 'Prahnah', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up_special', effects: [
		{ stat: 'mDef', val: 3000, op: 'add' } ]},
	{ id: 1474, levels: 1, name: 'Abyssal Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.1, op: 'mul' } ]},
	{ id: 1476, levels: 3, name: 'Appetite for Destruction', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'kama_rage', effects: [
		{ stat: 'pAtk', val: [1.3, 1.4, 1.5], op: 'mul' },
		{ stat: 'rCrit', val: [0.3, 0.4, 0.5], op: 'basemul' },
		{ stat: 'cAtk', val: [1.3, 1.4, 1.5], op: 'mul' } ]},
	{ id: 1477, levels: 3, name: 'Vampiric Impulse', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'kama_rage', effects: [
		{ stat: 'absorbDam', val: [60, 70, 80], op: 'add' } ]},
	{ id: 1478, levels: 2, name: 'Protection Instinct', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'kama_rage', effects: [
		{ stat: 'pDef', val: [1200, 1800], op: 'add' },
		{ stat: 'mDef', val: [900, 1350], op: 'add' } ]},
	{ id: 1479, levels: 3, name: 'Magic Impulse', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'mAtk', val: [1.75, 1.85, 1.95], op: 'mul' },
		{ stat: 'mCritRate', val: [2, 3, 4], op: 'basemul' } ]},
	{ id: 1480, levels: 1, name: 'Soul Harmony', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'ManaHealOverTime' },
	{ id: 1489, levels: 1, name: 'Summoner Ability - Resist Attribute', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'waterRes', val: 5, op: 'add' } ]},
	{ id: 1492, levels: 1, name: 'Flame Armor', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', effects: [
		{ stat: 'fireRes', val: 10, op: 'add' } ]},
	{ id: 1493, levels: 1, name: 'Frost Armor', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', effects: [
		{ stat: 'waterRes', val: 10, op: 'add' } ]},
	{ id: 1494, levels: 1, name: 'Hurricane Armor', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', effects: [
		{ stat: 'windRes', val: 10, op: 'add' } ]},
	{ id: 1496, levels: 1, name: 'Servitor Barrier', target: 'TARGET_PET', operateType: 'OP_ACTIVE', effectType: 'Invincible', stackType: 'Instant_Shield' },
	{ id: 1499, levels: 1, name: 'Improved Combat', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 1500, levels: 1, name: 'Improved Magic', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 1501, levels: 1, name: 'Improved Condition', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 1502, levels: 1, name: 'Improved Critical Attack', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 1503, levels: 1, name: 'Improved Shield Defense', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'shieldProbUp', effects: [
		{ stat: 'rShld', val: 1.3, op: 'mul' } ]},
	{ id: 1504, levels: 1, name: 'Improved Movement', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 1507, levels: 1, name: 'Lord of Vampire', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'absorbDam', val: 80, op: 'add' } ]},
	{ id: 1514, levels: 1, name: 'Soul Barrier', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'bowWpnVuln', val: 0.4, op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: 0.4, op: 'mul' },
		{ stat: 'mDef', val: 2, op: 'mul' } ]},
	{ id: 1515, levels: 1, name: 'Lightning Barrier', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger' },
	{ id: 1517, levels: 1, name: 'Chant of Combat', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 1518, levels: 1, name: 'Chant of Critical Attack', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 1519, levels: 1, name: 'Chant of Blood Awakening', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 1520, levels: 1, name: 'Inquisitor', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'pvpMagicalDmg', val: 0.4, op: 'mul' } ]},
	{ id: 1521, levels: 1, name: 'Inquisitor', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'pvpMagicalDmg', val: 0.4, op: 'mul' } ]},
	{ id: 1522, levels: 1, name: 'Inquisitor', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'pvpMagicalDmg', val: 0.4, op: 'mul' } ]},
	{ id: 1527, levels: 1, name: 'Expert Casting', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtkSpd', val: 1.1, op: 'mul' },
		{ stat: 'mReuse', val: 0.9, op: 'mul' } ]},
	{ id: 1531, levels: 7, name: 'Bless the Blood', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger' },
	{ id: 1532, levels: 1, name: 'Enlightenment', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mAtk', val: 1.4, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.5, op: 'mul' },
		{ stat: 'mCritRate', val: 0.5, op: 'basemul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.1, op: 'mul' } ]},
	{ id: 1533, levels: 1, name: 'Enlightenment', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'gainHp', val: 1.4, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.5, op: 'mul' },
		{ stat: 'mCritRate', val: 0.5, op: 'basemul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.1, op: 'mul' } ]},
	{ id: 1535, levels: 1, name: 'Chant of Movement', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 1536, levels: 1, name: 'Combat of Pa\'agrio', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 1537, levels: 1, name: 'Critical of Pa\'agrio', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 1538, levels: 1, name: 'Condition of Pa\'agrio', target: 'TARGET_PARTY_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 1540, levels: 1, name: 'Turn to Stone', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Petrification', stackType: 'turn_stone' },
	{ id: 1542, levels: 1, name: 'Counter Critical', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', stackType: 'critVuln_special', effects: [
		{ stat: 'critVuln', val: 0.7, op: 'mul' } ]},
	{ id: 2010, levels: 1, name: 'Endeavor Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 2011, levels: 1, name: 'Haste Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 2012, levels: 1, name: 'Potion of Alacrity', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 2034, levels: 1, name: 'Greater Haste Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2035, levels: 1, name: 'Greater Swift Attack Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 2050, levels: 1, name: 'Scroll of Guidance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 2051, levels: 1, name: 'Scroll of Death Whisper', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 2052, levels: 1, name: 'Scroll of Focus', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 2053, levels: 1, name: 'Scroll of Greater Acumen', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 2054, levels: 1, name: 'Scroll of Haste', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 2055, levels: 1, name: 'Scroll of Agility', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'rEvas', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 2056, levels: 1, name: 'Scroll of Mystic Empower', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 2057, levels: 1, name: 'Scroll of Might', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 2058, levels: 1, name: 'Scroll of Wind Walk', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2059, levels: 1, name: 'Scroll of Shield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 2064, levels: 1, name: 'Scroll of Mana Regeneration', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'regMp', val: 1.82, op: 'add' } ]},
	{ id: 2076, levels: 1, name: 'Bless of Eva', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_breath_up', effects: [
		{ stat: 'breath', val: 5, op: 'mul' } ]},
	{ id: 2103, levels: 1, name: 'Mystery Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'BigHead', stackType: 'big_head' },
	{ id: 2139, levels: 1, name: 'Special Tree Recovery Bonus', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: 1.4, op: 'mul' },
		{ stat: 'regMp', val: 1.2, op: 'mul' } ]},
	{ id: 2168, levels: 6, name: 'Raid Blessing', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'CharmOfLuck', stackType: 'LuckyCharm' },
	{ id: 2169, levels: 2, name: 'Magic Haste Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: [1.23, 1.3], op: 'mul' } ]},
	{ id: 21011, levels: 1, name: 'Energy Recovery', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 21012, levels: 1, name: 'Energy Recovery', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 21013, levels: 1, name: 'Energy Recovery', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 21017, levels: 1, name: 'Holiday Dream Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'rCrit', val: 15, op: 'add' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 21018, levels: 1, name: 'Holiday Dream Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'rCrit', val: 10, op: 'add' },
		{ stat: 'cAtkAdd', val: 1.1, op: 'mul' } ]},
	{ id: 21019, levels: 1, name: 'Holiday Dream Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'lethalRate', val: 1.05, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.85, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.85, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.85, op: 'mul' } ]},
	{ id: 21020, levels: 1, name: 'Holiday Dream Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'rCrit', val: 15, op: 'add' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 21021, levels: 1, name: 'Holiday Dream Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'rCrit', val: 10, op: 'add' },
		{ stat: 'cAtkAdd', val: 1.1, op: 'mul' } ]},
	{ id: 21022, levels: 1, name: 'Holiday Dream Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.07, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.85, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.85, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.85, op: 'mul' } ]},
	{ id: 21023, levels: 1, name: 'Holiday Dream Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.85, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.85, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.85, op: 'mul' } ]},
	{ id: 21024, levels: 1, name: 'Holiday Dream Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.85, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.85, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.85, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 21025, levels: 1, name: 'Holiday Dream Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'rCrit', val: 30, op: 'add' } ]},
	{ id: 21026, levels: 1, name: 'Holiday Dream Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'atkCountMax', val: 3, op: 'add' },
		{ stat: 'absorbDam', val: 10, op: 'add' } ]},
	{ id: 21027, levels: 1, name: 'Holiday Dream Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.07, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.85, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.85, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.85, op: 'mul' } ]},
	{ id: 21028, levels: 1, name: 'Holiday Dream Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'rCrit', val: 15, op: 'add' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 21029, levels: 1, name: 'Holiday Dream Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'rCrit', val: 10, op: 'add' },
		{ stat: 'cAtkAdd', val: 1.1, op: 'mul' } ]},
	{ id: 21030, levels: 1, name: 'Holiday Dream Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'pSkillEvas', val: 10, op: 'add' },
		{ stat: 'rEvas', val: 3, op: 'add' },
		{ stat: 'accCombat', val: 3, op: 'add' } ]},
	{ id: 21066, levels: 1, name: 'Energy Recovery', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 21084, levels: 1, name: 'Energy Recovery', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 21100, levels: 1, name: 'Great Wizard\'s Soul Power: Brilliance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 21103, levels: 1, name: 'Great Adventurer\'s Soul Power : Endless', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' } ]},
	{ id: 21111, levels: 1, name: 'Great Adventurer\'s Soul Power: Resilience', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' } ]},
	{ id: 21112, levels: 1, name: 'Great Warrior\'s Soul Power: Strength', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 21113, levels: 1, name: 'Great Wizard\'s Soul Power: Acuity', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 21114, levels: 1, name: 'Great Adventurer\'s Soul Power: Resilience', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' } ]},
	{ id: 21115, levels: 1, name: 'Great Warrior\'s Soul Power: Strength', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 21116, levels: 1, name: 'Great Wizard\'s Soul Power: Acuity', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 21117, levels: 1, name: 'Great Adventurer\'s Soul Power : Immortality', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 1.2, op: 'mul' },
		{ stat: 'gainHp', val: 1.2, op: 'mul' },
		{ stat: 'gainMp', val: 1.2, op: 'mul' } ]},
	{ id: 21118, levels: 1, name: 'Great Warrior\'s Soul Power: Destruction', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'cAtk', val: 1.2, op: 'mul' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul' } ]},
	{ id: 21119, levels: 1, name: 'Great Wizard\'s Soul Power: Brilliance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 0.2, op: 'basemul' } ]},
	{ id: 21122, levels: 1, name: 'Blessing of Skooldy : Protection of Darkness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21123, levels: 1, name: 'Blessing of Skooldy : Protection of Darkness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21124, levels: 1, name: 'Blessing of Skooldy : Protection of Darkness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21125, levels: 1, name: 'Blessing of Skooldy : Protection of Darkness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21126, levels: 1, name: 'Blessing of Skooldy : Protection of Darkness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21127, levels: 1, name: 'Blessing of Halloween', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21128, levels: 1, name: 'Blessing of Halloween', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'rCrit', val: 0.1, op: 'basemul' },
		{ stat: 'cAtk', val: 1.1, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21129, levels: 1, name: 'Blessing of Halloween', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'runSpd', val: 1.1, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21130, levels: 1, name: 'Blessing of Halloween', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'runSpd', val: 1.2, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21131, levels: 1, name: 'Blessing of Halloween', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 0.2, op: 'basemul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21132, levels: 1, name: 'Ability of Shadow', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'SilentMove', effects: [
		{ stat: 'runSpd', val: 0.7, op: 'mul' } ]},
	{ id: 21136, levels: 1, name: 'Authority of Golden Jack O\'Lantern Mask', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'maxCp', val: 1.4, op: 'mul' },
		{ stat: 'pDef', val: 1.3, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'runSpd', val: 1.3, op: 'mul' } ]},
	{ id: 21137, levels: 1, name: 'Blessing of Halloween', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21138, levels: 1, name: 'Blessing of Halloween', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'rCrit', val: 0.1, op: 'baemul' },
		{ stat: 'cAtk', val: 1.1, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21139, levels: 1, name: 'Blessing of Halloween', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'runSpd', val: 1.1, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21140, levels: 1, name: 'Blessing of Halloween', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'runSpd', val: 1.2, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21141, levels: 1, name: 'Blessing of Halloween', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'runSpd', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 0.2, op: 'basemul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21153, levels: 1, name: 'Blessed Body', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' } ]},
	{ id: 21154, levels: 1, name: 'Blessed Soul', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxMp', val: 1.25, op: 'mul' } ]},
	{ id: 21155, levels: 1, name: 'Scent of Flavorful Cheese', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.3, op: 'mul' },
		{ stat: 'cAtk', val: 1.2, op: 'mul' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul' } ]},
	{ id: 21156, levels: 1, name: 'Scent of Sweet Cheese', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 0.2, op: 'basemul' } ]},
	{ id: 21169, levels: 1, name: 'Transform Kadomas', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 21170, levels: 1, name: 'Blessed Soul', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.25, op: 'mul' } ]},
	{ id: 21171, levels: 1, name: 'Riding Jet Bike', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'runSpd', val: 1.5, op: 'mul' } ]},
	{ id: 2231, levels: 1, name: 'Amulet: Protection of Valakas', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'valakas_item', effects: [
		{ stat: 'valakasRes', val: 11, op: 'add' } ]},
	{ id: 2232, levels: 1, name: 'Amulet: Slay Valakas', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'valakas_item', effects: [
		{ stat: 'valakas', val: 11, op: 'add' } ]},
	{ id: 2246, levels: 1, name: 'Herb of Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 2247, levels: 1, name: 'Herb of Magic', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 2248, levels: 1, name: 'Bless of Fire', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'firePower', val: 20, op: 'add' } ]},
	{ id: 2249, levels: 1, name: 'Bless of Water', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'waterPower', val: 20, op: 'add' } ]},
	{ id: 2250, levels: 1, name: 'Bless of Wind', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'windPower', val: 20, op: 'add' } ]},
	{ id: 2251, levels: 1, name: 'Bless of Earth', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'earthPower', val: 20, op: 'add' } ]},
	{ id: 2252, levels: 1, name: 'Bless of Darkness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'darkPower', val: 20, op: 'add' } ]},
	{ id: 2253, levels: 1, name: 'Bless of Sacredness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'holyPower', val: 20, op: 'add' } ]},
	{ id: 2274, levels: 9, name: 'Fisherman\'s Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'fishPot' },
	{ id: 2280, levels: 1, name: 'Herb of Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 2281, levels: 1, name: 'Herb of Magic', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 2282, levels: 1, name: 'Herb of Atk. Spd.', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 2283, levels: 1, name: 'Herb of Casting Spd.', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 2284, levels: 1, name: 'Herb of Critical Attack', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 2285, levels: 1, name: 'Herb of Speed', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2286, levels: 6, name: 'Scroll: Recovery', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Recovery' },
	{ id: 22004, levels: 1, name: 'Energy Ginseng', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 22013, levels: 1, name: 'Holiday Festival', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'holiday_scroll', effects: [
		{ stat: 'maxHp', val: 1.1, op: 'mul' },
		{ stat: 'maxMp', val: 1.1, op: 'mul' },
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'pAtk', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.15, op: 'mul' },
		{ stat: 'runSpd', val: 1.1, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 22014, levels: 1, name: 'Holiday Festival', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'holiday_scroll', effects: [
		{ stat: 'maxHp', val: 1.1, op: 'mul' },
		{ stat: 'maxMp', val: 1.1, op: 'mul' },
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.15, op: 'mul' },
		{ stat: 'runSpd', val: 1.1, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.5, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 22015, levels: 1, name: 'Holiday Festival', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'holiday_scroll', effects: [
		{ stat: 'maxHp', val: 1.1, op: 'mul' },
		{ stat: 'maxMp', val: 1.1, op: 'mul' },
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.15, op: 'mul' },
		{ stat: 'runSpd', val: 1.1, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.5, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 22016, levels: 1, name: 'Holiday Festival', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'holiday_scroll', effects: [
		{ stat: 'maxHp', val: 1.1, op: 'mul' },
		{ stat: 'maxMp', val: 1.1, op: 'mul' },
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'mAtk', val: 1.15, op: 'mul' },
		{ stat: 'pDef', val: 1.15, op: 'mul' },
		{ stat: 'runSpd', val: 1.1, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.65, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 22029, levels: 1, name: 'Baguette Herb', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'event_herb', effects: [
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' } ]},
	{ id: 22030, levels: 1, name: 'Cream Puff Herb', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'event_herb', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 22031, levels: 1, name: 'Cheesecake Herb', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'event_herb', effects: [
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' } ]},
	{ id: 22045, levels: 1, name: 'Omen Beast Transformation Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 22046, levels: 1, name: 'Death Blader Transformation Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 22047, levels: 1, name: 'Grail Apostle Transformation Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 22048, levels: 1, name: 'Unicorn Transformation Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 22049, levels: 1, name: 'Lilim Knight Transformation Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 22050, levels: 1, name: 'Golem Guardian Transformation Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 22051, levels: 1, name: 'Inferno Drake Transformation Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 22052, levels: 1, name: 'Dragon Bomber Transformation Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 22054, levels: 1, name: 'Potion of Energy Maintenance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 0.00, op: 'mul' } ]},
	{ id: 22056, levels: 1, name: 'Wind Walk', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 22057, levels: 1, name: 'Haste', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 22058, levels: 1, name: 'Might', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 22059, levels: 1, name: 'Shield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 22060, levels: 1, name: 'Death Whisper', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 22061, levels: 1, name: 'Guidance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 22062, levels: 1, name: 'Empower', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 22063, levels: 1, name: 'Greater Acumen', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 22064, levels: 1, name: 'Vampiric Rage', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 22065, levels: 1, name: 'Bless the Body', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 22066, levels: 1, name: 'Berserker Spirit', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'berserk', effects: [
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'rEvas', val: 4, op: 'sub' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' } ]},
	{ id: 22067, levels: 1, name: 'Magic Barrier', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 22068, levels: 1, name: 'Bless the Soul', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 22069, levels: 1, name: 'Clarity', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MPrate', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 22070, levels: 1, name: 'Wild Magic', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'magic_critical_up', effects: [
		{ stat: 'mCritRate', val: 2, op: 'basemul' } ]},
	{ id: 22159, levels: 1, name: 'Vesper Super Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'event_herb', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'mAtk', val: 1.15, op: 'mul' },
		{ stat: 'runSpd', val: 10, op: 'add' } ]},
	{ id: 22160, levels: 1, name: 'Vesper Critical Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'event_herb', effects: [
		{ stat: 'rCrit', val: 15, op: 'add' },
		{ stat: 'mCritRate', val: 2, op: 'add' },
		{ stat: 'runSpd', val: 10, op: 'add' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 22161, levels: 1, name: 'Invincible Vesper', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'event_herb', effects: [
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 2310, levels: 1, name: 'Scroll of Guidance - Event Use', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 2311, levels: 1, name: 'Scroll of Death Whisper - Event Use', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 2312, levels: 1, name: 'Scroll of Focus - Event Use', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 2313, levels: 1, name: 'Scroll of Acumen - Event Use', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 2314, levels: 1, name: 'Scroll of Haste - Event Use', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 2315, levels: 1, name: 'Scroll of Agility - Event Use', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'rEvas', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 2316, levels: 1, name: 'Scroll of Empower - Event Use', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 2317, levels: 1, name: 'Scroll of Might - Event Use', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 2318, levels: 1, name: 'Scroll of Wind Walk - Event Use', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2319, levels: 1, name: 'Scroll of Shield - Event Use', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 2335, levels: 1, name: 'Fire Resist Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_potion', effects: [
		{ stat: 'fireRes', val: 30, op: 'add' } ]},
	{ id: 2336, levels: 1, name: 'Water Resist Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_potion', effects: [
		{ stat: 'waterRes', val: 30, op: 'add' } ]},
	{ id: 2337, levels: 1, name: 'Wind Resist Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_potion', effects: [
		{ stat: 'windRes', val: 30, op: 'add' } ]},
	{ id: 2338, levels: 1, name: 'Earth Resist Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_potion', effects: [
		{ stat: 'earthRes', val: 30, op: 'add' } ]},
	{ id: 2339, levels: 1, name: 'Holy Resist Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_potion', effects: [
		{ stat: 'holyRes', val: 30, op: 'add' } ]},
	{ id: 2340, levels: 1, name: 'Unholy Resist Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_potion', effects: [
		{ stat: 'darkRes', val: 30, op: 'add' } ]},
	{ id: 2341, levels: 1, name: 'Caravan\'s Secret Medicine', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff' },
	{ id: 2370, levels: 1, name: 'Scroll of Transformation - Pig', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2379, levels: 1, name: 'Wind', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2380, levels: 1, name: 'Shield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 2381, levels: 1, name: 'Magic Barrier', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 2382, levels: 1, name: 'Bless Shield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'shieldProbUp', effects: [
		{ stat: 'rShld', val: 1.3, op: 'mul' } ]},
	{ id: 2383, levels: 1, name: 'Haste', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 2384, levels: 1, name: 'Acumen', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 2385, levels: 1, name: 'Empower', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.55, op: 'mul' } ]},
	{ id: 2386, levels: 1, name: 'Divine Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'gainHp', val: 1.08, op: 'mul' } ]},
	{ id: 2387, levels: 1, name: 'Might', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 2388, levels: 1, name: 'Focus', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.2, op: 'basemul' } ]},
	{ id: 2389, levels: 1, name: 'Guidance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 2, op: 'add' } ]},
	{ id: 2390, levels: 1, name: 'Berserker Spirit', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'berserk', effects: [
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'sub' } ]},
	{ id: 2391, levels: 1, name: 'Clarity', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MPrate', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.96, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 2396, levels: 1, name: 'Mental Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MentalShield', effects: [
		{ stat: 'rootVuln', val: 30, op: 'sub' },
		{ stat: 'sleepVuln', val: 30, op: 'sub' },
		{ stat: 'confusionVuln', val: 30, op: 'sub' },
		{ stat: 'derangementVuln', val: 30, op: 'sub' } ]},
	{ id: 2398, levels: 1, name: 'Instant Haste Potion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 23004, levels: 1, name: 'Majo Agathion Special Skill - Mysterious Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'BigHead', stackType: 'big_head' },
	{ id: 23007, levels: 1, name: 'Plaipitak Agathion Special Skill - Mysterious Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'BigHead', stackType: 'big_head' },
	{ id: 23013, levels: 1, name: 'Baby Panda Agathion Special Skill - Mysterious Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'BigHead', stackType: 'big_head' },
	{ id: 23016, levels: 1, name: 'Rudolph Agathion Special Skill - Ability of Energy', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 23017, levels: 1, name: 'Holiday Festival', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'holiday', effects: [
		{ stat: 'maxHp', val: 1.1, op: 'mul' },
		{ stat: 'maxMp', val: 1.1, op: 'mul' },
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.1, op: 'mul' },
		{ stat: 'mAtk', val: 1.15, op: 'mul' },
		{ stat: 'runSpd', val: 1.1, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 23018, levels: 1, name: 'Thomas D. Turkey\'s Mistake', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'holiday', effects: [
		{ stat: 'maxHp', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 1.15, op: 'mul' },
		{ stat: 'maxCp', val: 1.15, op: 'mul' },
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'pDef', val: 1.15, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 1.15, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.6, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.6, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.6, op: 'mul' } ]},
	{ id: 23019, levels: 3, name: 'Scissors', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'ImmobileBuff' },
	{ id: 23022, levels: 10, name: 'First Win', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff' },
	{ id: 23024, levels: 1, name: 'Agathion of Love Special Skill - Energy Recovery Ability', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 23032, levels: 1, name: 'Brown Maneki Neko Agathion Special Skill - Ability of Energy Recovery', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 23034, levels: 1, name: 'One-eyed Bat Drove Agathion Special Skill - Ability of Resist Unholy', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_potion', effects: [
		{ stat: 'darkRes', val: 30, op: 'add' } ]},
	{ id: 23035, levels: 1, name: 'One-eyed Bat Drove Agathion Special Skill - Ability of Energy Recovery', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 23037, levels: 1, name: 'Pegasus Agathion Special Skill - Ability of Wind Walk', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 23044, levels: 1, name: 'Green-robed Tojigong Agathion Special Skill - Ability of Mana Regeneration', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'regMp', val: 1.03, op: 'mul' } ]},
	{ id: 23057, levels: 1, name: 'Red Sumo Wrestler Agathion Special Skill - Death Whisper Ability', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 23058, levels: 1, name: 'Blue Sumo Wrestler Agathion Special Skill - Wild Magic Ability', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'magic_critical_up', effects: [
		{ stat: 'mCritRate', val: 0.02, op: 'basemul' } ]},
	{ id: 23059, levels: 1, name: 'Great Sumo Match Agathion Special Skill - Mysterious Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'BigHead', stackType: 'big_head' },
	{ id: 23063, levels: 1, name: 'Button-Eyed Bear Doll Agathion Special Skill - Ability of Energy Recovery', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 23064, levels: 1, name: 'God of Fortune Agathion Special Skill - Energy Recovery Ability', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 23065, levels: 1, name: 'Wonboso Agathion Special Skill - Wind Walk Ability', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 23068, levels: 1, name: 'Pomona Agathion Special Skill - Mental Shield Ability', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MentalShield', effects: [
		{ stat: 'rootVuln', val: 50, op: 'sub' },
		{ stat: 'sleepVuln', val: 50, op: 'sub' },
		{ stat: 'derangementVuln', val: 50, op: 'sub' } ]},
	{ id: 23134, levels: 1, name: 'Miss Chipao Agathion Special Skill - Decrease Weight', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Weight', effects: [
		{ stat: 'maxLoad', val: 9000, op: 'add' } ]},
	{ id: 23136, levels: 1, name: 'Nepal Snow Agathion Special Skill - Snow\'s Haste', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 23138, levels: 1, name: 'Round Ball Snow Agathion Special Skill - Snow\'s Acumen', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 23140, levels: 1, name: 'Ladder Snow Agathion Special Skill - Snow\'s Wind Walk', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 23182, levels: 1, name: 'Three-headed Dragon Agathion Special Skill - Wind Walk', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 2404, levels: 1, name: 'Might', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.12, op: 'mul' } ]},
	{ id: 2405, levels: 1, name: 'Shield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.12, op: 'mul' } ]},
	{ id: 2406, levels: 1, name: 'Wind Walk', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2407, levels: 1, name: 'Focus', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.25, op: 'basemul' } ]},
	{ id: 2408, levels: 1, name: 'Death Whisper', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.3, op: 'mul' } ]},
	{ id: 2409, levels: 1, name: 'Guidance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 3, op: 'add' } ]},
	{ id: 2410, levels: 1, name: 'Bless Shield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'shieldProbUp', effects: [
		{ stat: 'rShld', val: 1.4, op: 'mul' } ]},
	{ id: 2411, levels: 1, name: 'Blessed Body', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' } ]},
	{ id: 2412, levels: 1, name: 'Haste', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 2413, levels: 1, name: 'Vampiric Rage', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: 7, op: 'add' } ]},
	{ id: 2414, levels: 1, name: 'Berserker Spirit', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'berserk', effects: [
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'pAtk', val: 1.05, op: 'mul' },
		{ stat: 'mDef', val: 0.9, op: 'mul' },
		{ stat: 'pDef', val: 0.95, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'runSpd', val: 5, op: 'add' },
		{ stat: 'rEvas', val: 2, op: 'sub' } ]},
	{ id: 2415, levels: 1, name: 'Magic Barrier', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: 1.23, op: 'mul' } ]},
	{ id: 2416, levels: 1, name: 'Blessed Soul', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.2, op: 'mul' } ]},
	{ id: 2417, levels: 1, name: 'Empower', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.65, op: 'mul' } ]},
	{ id: 2418, levels: 1, name: 'Acumen', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.23, op: 'mul' } ]},
	{ id: 2419, levels: 1, name: 'Clarity', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MPrate', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.96, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.96, op: 'mul' } ]},
	{ id: 2428, levels: 1, name: 'Scroll of Transformation - Rabbit', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2429, levels: 1, name: 'Haste Juice', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 2430, levels: 1, name: 'Accuracy Juice', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 2431, levels: 1, name: 'Critical Power Juice', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 2432, levels: 1, name: 'Critical Attack Juice', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 2433, levels: 1, name: 'Casting Speed Juice', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 2434, levels: 1, name: 'Evasion Juice', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'rEvas', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 2435, levels: 1, name: 'Magic Power Juice', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 2436, levels: 1, name: 'Power Juice', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 2437, levels: 1, name: 'Speed Juice', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2438, levels: 1, name: 'Defense Juice', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 2439, levels: 1, name: 'MP Consumption Juice', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MPrate', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 2511, levels: 1, name: 'Scroll of Transformation - Gatekeeper', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2512, levels: 1, name: 'Herb of Vampiric Rage', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 2513, levels: 1, name: 'Herb of Doubt', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'BigHead', stackType: 'big_head' },
	{ id: 2514, levels: 1, name: 'Herb of Critical Attack - Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 2577, levels: 1, name: 'Instant Defense', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Invincible', stackType: 'Instant_Shield' },
	{ id: 2580, levels: 1, name: 'Vitality Replenishing Herb', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 2631, levels: 1, name: 'Scroll of Transformation - Frog', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2632, levels: 1, name: 'Scroll of Transformation - Young Child', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2635, levels: 1, name: 'Blessing of Fire', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'firePower', val: 20, op: 'add' } ]},
	{ id: 2636, levels: 1, name: 'Blessing of Earth', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'element_attack', effects: [
		{ stat: 'earthPower', val: 20, op: 'add' } ]},
	{ id: 2672, levels: 1, name: 'Gludio Human Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2673, levels: 1, name: 'Gludio Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2674, levels: 1, name: 'Gludio Dark Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2675, levels: 1, name: 'Gludio Orc Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2676, levels: 1, name: 'Gludio Dwarf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2677, levels: 1, name: 'Gludio Kamael Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2678, levels: 1, name: 'Gludio Knight Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2679, levels: 1, name: 'Gludio Archer Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2680, levels: 1, name: 'Gludio Wizard Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2681, levels: 1, name: 'Gludio Kamael Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2682, levels: 1, name: 'Gludio Knight Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2683, levels: 1, name: 'Gludio Commander Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2684, levels: 1, name: 'Dion Human Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2685, levels: 1, name: 'Dion Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2686, levels: 1, name: 'Dion Dark Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2687, levels: 1, name: 'Dion Orc Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2688, levels: 1, name: 'Dion Dwarf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2689, levels: 1, name: 'Dion Kamael Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2690, levels: 1, name: 'Dion Knight Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2691, levels: 1, name: 'Dion Archer Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2692, levels: 1, name: 'Dion Wizard Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2693, levels: 1, name: 'Dion Kamael Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2694, levels: 1, name: 'Dion Knight Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2695, levels: 1, name: 'Dion Commander Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2696, levels: 1, name: 'Giran Human Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2697, levels: 1, name: 'Giran Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2698, levels: 1, name: 'Giran Dark Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2699, levels: 1, name: 'Giran Orc Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 26022, levels: 1, name: 'High grade potion which improves attack speed', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 26023, levels: 1, name: 'High grade potion which improves moving speed', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 26031, levels: 1, name: 'Wind Walk Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 26032, levels: 1, name: 'Haste Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 26033, levels: 1, name: 'Might Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 26034, levels: 1, name: 'Shield Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 26035, levels: 1, name: 'Death Whisper Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 26036, levels: 1, name: 'Guidance Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 26037, levels: 1, name: 'Empower Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 26038, levels: 1, name: 'Greater Acumen Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 26039, levels: 1, name: 'Vampiric Rage Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 26040, levels: 1, name: 'Bless the Body Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 26041, levels: 1, name: 'Berserker Spirit Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'berserk', effects: [
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'rEvas', val: 4, op: 'sub' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' } ]},
	{ id: 26042, levels: 1, name: 'Magic Barrier Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 26043, levels: 1, name: 'Bless the Soul Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 26044, levels: 1, name: 'Clarity Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MPrate', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 26045, levels: 1, name: 'Wild Magic Scroll', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'magic_critical_up', effects: [
		{ stat: 'mCritRate', val: 2, op: 'basemul' } ]},
	{ id: 2700, levels: 1, name: 'Giran Dwarf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2701, levels: 1, name: 'Giran Kamael Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2702, levels: 1, name: 'Giran Knight Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2703, levels: 1, name: 'Giran Archer Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2704, levels: 1, name: 'Giran Wizard Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2705, levels: 1, name: 'Giran Kamael Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2706, levels: 1, name: 'Giran Knight Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2707, levels: 1, name: 'Giran Commander Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2708, levels: 1, name: 'Oren Human Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2709, levels: 1, name: 'Oren Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2710, levels: 1, name: 'Oren Dark Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2711, levels: 1, name: 'Oren Orc Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2712, levels: 1, name: 'Oren Dwarf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2713, levels: 1, name: 'Oren Kamael Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2714, levels: 1, name: 'Oren Knight Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2715, levels: 1, name: 'Oren Archer Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2716, levels: 1, name: 'Oren Wizard Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2717, levels: 1, name: 'Oren Kamael Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2718, levels: 1, name: 'Oren Knight Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2719, levels: 1, name: 'Oren Commander Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2720, levels: 1, name: 'Aden Human Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2721, levels: 1, name: 'Aden Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2722, levels: 1, name: 'Aden Dark Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2723, levels: 1, name: 'Aden Orc Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2724, levels: 1, name: 'Aden Dwarf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2725, levels: 1, name: 'Aden Kamael Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2726, levels: 1, name: 'Aden Knight Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2727, levels: 1, name: 'Aden Archer Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2728, levels: 1, name: 'Aden Wizard Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2729, levels: 1, name: 'Aden Kamael Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2730, levels: 1, name: 'Aden Knight Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2731, levels: 1, name: 'Aden Commander Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2732, levels: 1, name: 'Innadril Human Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2733, levels: 1, name: 'Innadril Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2734, levels: 1, name: 'Innadril Dark Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2735, levels: 1, name: 'Innadril Orc Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2736, levels: 1, name: 'Innadril Dwarf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2737, levels: 1, name: 'Innadril Kamael Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2738, levels: 1, name: 'Innadril Knight Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2739, levels: 1, name: 'Innadril Archer Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2740, levels: 1, name: ',Innadril Wizard Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2741, levels: 1, name: 'Innadril Kamael Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2742, levels: 1, name: 'Innadril Knight Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2743, levels: 1, name: 'Innadril Commander Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2744, levels: 1, name: 'Goddard Human Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2745, levels: 1, name: 'Goddard Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2746, levels: 1, name: 'Goddard Dark Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2747, levels: 1, name: 'Goddard Orc Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2748, levels: 1, name: 'Goddard Dwarf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2749, levels: 1, name: 'Goddard Kamael Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2750, levels: 1, name: 'Goddard Knight Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2751, levels: 1, name: 'Goddard Archer Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2752, levels: 1, name: 'Goddard Wizard Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2753, levels: 1, name: 'Goddard Kamael Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2754, levels: 1, name: 'Goddard Knight Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2755, levels: 1, name: 'Goddard Commander Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2756, levels: 1, name: 'Rune Human Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2757, levels: 1, name: 'Rune Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2758, levels: 1, name: 'Rune Dark Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2759, levels: 1, name: 'Rune Orc Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2760, levels: 1, name: 'Rune Dwarf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2761, levels: 1, name: 'Rune Kamael Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2762, levels: 1, name: 'Rune Knight Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2763, levels: 1, name: 'Rune Archer Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2764, levels: 1, name: 'Rune Wizard Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2765, levels: 1, name: 'Rune Kamael Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2766, levels: 1, name: 'Rune Knight Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2767, levels: 1, name: 'Rune Commander Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2768, levels: 1, name: 'Schuttgart Human Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2769, levels: 1, name: 'Schuttgart Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2770, levels: 1, name: 'Schuttgart Dark Elf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2771, levels: 1, name: 'Schuttgart Orc Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2772, levels: 1, name: 'Schuttgart Dwarf Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2773, levels: 1, name: 'Schuttgart Kamael Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2774, levels: 1, name: 'Schuttgart Knight Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2775, levels: 1, name: 'Schuttgart Archer Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2776, levels: 1, name: 'Schuttgart Wizard Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2777, levels: 1, name: 'Schuttgart Kamael Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2778, levels: 1, name: 'Schuttgart Knight Captain Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2779, levels: 1, name: 'Schuttgart Commander Mercenary', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 2795, levels: 1, name: 'Stone of Destruction', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.12, op: 'mul' } ]},
	{ id: 2796, levels: 1, name: 'Stone of Invincibility', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.12, op: 'mul' } ]},
	{ id: 2797, levels: 1, name: 'Stone of Great Speed', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 2798, levels: 1, name: 'Stone of Speed', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2799, levels: 1, name: 'Stone of Concentration', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.3, op: 'mul' } ]},
	{ id: 2800, levels: 1, name: 'Stone of Ease', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' } ]},
	{ id: 2801, levels: 1, name: 'Stone of Abundance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.2, op: 'mul' } ]},
	{ id: 2900, levels: 1, name: 'Ancient Herb - Slayer', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff' },
	{ id: 2901, levels: 1, name: 'Ancient Herb - Immortal', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff' },
	{ id: 2902, levels: 1, name: 'Ancient Herb - Terminator', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mAtkSpd', val: 449, op: 'add' } ]},
	{ id: 2903, levels: 1, name: 'Ancient Herb - Guide', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'runSpd', val: 250, op: 'add' } ]},
	{ id: 2994, levels: 1, name: 'Disguised Half - Aqua Elf', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 3007, levels: 6, name: 'Special Ability: Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: [6.88, 6.07, 5.72, 5.37, 5.02, 4.68], op: 'add' } ]},
	{ id: 3008, levels: 6, name: 'Special Ability: Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: [5.42, 5.12, 4.82, 4.53, 4.24, 3.95], op: 'add' } ]},
	{ id: 3009, levels: 8, name: 'Special Ability: Evasion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: [2.95, 2.82, 2.68, 2.55, 2.41, 2.28, 5, 5], op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3010, levels: 6, name: 'Special Ability: Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [86.7, 82.2, 77.8, 73.3, 68.9, 64.5], op: 'add' } ]},
	{ id: 3011, levels: 6, name: 'Special Ability: Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [90.5, 85.9, 81.2, 76.6, 71.9, 67.3], op: 'add' } ]},
	{ id: 3012, levels: 6, name: 'Special Ability: Anger', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [20.44, 22.64, 24.77, 26.78, 28.59, 30.12], op: 'add' },
		{ stat: 'maxHp', val: 0.85, op: 'mul' } ]},
	{ id: 3013, levels: 5, name: 'Special Ability: Health', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'atkCountMax', val: [0, 5, 0, 5, 0], op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1.05, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3014, levels: 3, name: 'Special Ability: Mana Up', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3018, levels: 6, name: 'Special Ability: Back Blow', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [0.71, 0.67, 0.63, 0.6, 0.56, 0.53], op: 'basemul' } ]},
	{ id: 3019, levels: 6, name: 'Special Ability: Back Blow', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [0.5, 0.47, 0.45, 0.42, 0.4, 0.37], op: 'basemul' } ]},
	{ id: 3023, levels: 6, name: 'Special Ability: Critical Damage', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: [174.78, 194.1, 213.12, 231.29, 247.98, 262.57], op: 'add' } ]},
	{ id: 3026, levels: 6, name: 'Special Ability: Critical Anger', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: [248.56, 298.04, 352.73, 411.98, 474.82, 539.9], op: 'add' } ]},
	{ id: 3027, levels: 7, name: 'Special Ability: Rsk. Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [138.7, 130.9, 123.1, 115.4, 107.7, 99.9, 164], op: 'add' } ]},
	{ id: 3028, levels: 6, name: 'Special Ability: Rsk. Evasion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: [7.63, 7.29, 6.95, 6.6, 6.24, 5.87], op: 'add' } ]},
	{ id: 3029, levels: 6, name: 'Special Ability: Rsk. Evasion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: [4.44, 4.24, 4.04, 3.84, 3.63, 3.41], op: 'add' } ]},
	{ id: 3030, levels: 6, name: 'Special Ability: Rsk. Evasion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: [7.63, 7.29, 6.95, 6.6, 6.24, 5.87], op: 'add' } ]},
	{ id: 3031, levels: 6, name: 'Special Ability: Rsk. Evasion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: [7.63, 7.29, 6.95, 6.6, 6.24, 5.87], op: 'add' } ]},
	{ id: 3032, levels: 6, name: 'Special Ability: Rsk. Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: [1.13, 1.12, 1.12, 1.11, 1.1, 1.09], op: 'mul' } ]},
	{ id: 3033, levels: 6, name: 'Special Ability: Rsk. Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: [1.13, 1.12, 1.12, 1.11, 1.1, 1.09], op: 'mul' } ]},
	{ id: 3034, levels: 7, name: 'Special Ability: Rsk. Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: [1.13, 1.12, 1.12, 1.11, 1.1, 1.09, 1], op: 'mul' } ]},
	{ id: 3035, levels: 6, name: 'Special Ability: Mighty Mortal', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'blowRate', val: [1.5, 1.48, 1.46, 1.44, 1.42, 1.4], op: 'mul' } ]},
	{ id: 3036, levels: 6, name: 'Special Ability: Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: [1.08, 1.07, 1.07, 1.07, 1.06, 1.06], op: 'mul' } ]},
	{ id: 3037, levels: 6, name: 'Special Ability: Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: [1.08, 1.07, 1.07, 1.07, 1.06, 1.06], op: 'mul' } ]},
	{ id: 3038, levels: 6, name: 'Special Ability: Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: [1.08, 1.07, 1.07, 1.07, 1.06, 1.06], op: 'mul' } ]},
	{ id: 3042, levels: 20, name: 'Special Ability: Critical Damage', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: [81.6, 61.4, 84.14, 75.49, 66.77, 58.01, 49.42, 84.11, 166.26, 146.88, 127, 107.01, 133.97, 124.79, 275.26, 267.13, 257.98, 297.21, 331.38, 361.06], op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3043, levels: 6, name: 'Special Ability: Critical Damage', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: [106.45, 118.22, 129.81, 140.87, 151.04, 159.93], op: 'add' } ]},
	{ id: 3044, levels: 20, name: 'Special Ability: Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [53.6, 38.5, 50.4, 43.2, 36.5, 30.4, 24.8, 40.4, 76.6, 65, 54, 43.7, 52.6, 47.2, 98.7, 92.4, 86.2, 96, 103.5, 109.2], op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3045, levels: 20, name: 'Special Ability: Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: [1.05, 1.04, 1.05, 1.04, 1.03, 1.03, 1.02, 1.04, 1.07, 1.06, 1.05, 1.04, 1.05, 1.04, 1.09, 1.08, 1.08, 1.09, 1.09, 1.1], op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3046, levels: 20, name: 'Special Ability: Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: [3.9, 2.8, 3.7, 3.1, 2.6, 2.2, 1.8, 2.9, 5.7, 4.8, 3.9, 3.2, 3.8, 3.4, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5], op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3047, levels: 3, name: 'Special Ability: Acumen', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3048, levels: 3, name: 'Special Ability: Conversion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 1.6, op: 'mul' },
		{ stat: 'maxHp', val: 0.6, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3050, levels: 2, name: 'Special Ability: Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: 61.6, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3051, levels: 2, name: 'Special Ability: Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: 67.3, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3056, levels: 3, name: 'Special Ability: Rsk. Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3057, levels: 4, name: 'Special Ability: Anger', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [31.3, 32.05, 78, 1], op: 'add' },
		{ stat: 'maxHp', val: 0.85, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3058, levels: 2, name: 'Special Ability: Anger', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [38.09, 39], op: 'add' },
		{ stat: 'maxHp', val: 0.85, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3063, levels: 2, name: 'Special Ability: Back Blow', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: 0.37, op: 'basemul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3064, levels: 1, name: 'Special Ability: Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 3.95, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3065, levels: 1, name: 'Special Ability: Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 5.41, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3066, levels: 4, name: 'Special Ability: Critical Damage', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: [180.94, 200.79, 200.79, 559], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3067, levels: 2, name: 'Special Ability: Critical Damage', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: [297.68, 326.28], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3068, levels: 3, name: 'Special Ability: Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: [1.06, 1.06, 1.1], op: 'mul' },
		{ stat: 'pvpPhysDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3069, levels: 1, name: 'Special Ability: Rsk. Evasion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 6.8, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3071, levels: 2, name: 'Special Ability: Rsk. Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: 130, op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1.05], op: 'mul' } ]},
	{ id: 3072, levels: 2, name: 'Special Ability: Empower', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: [30.76, 31.38], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3073, levels: 2, name: 'Special Ability: Magic Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: [153.28, 167.02], op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 1.15, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3076, levels: 6, name: 'Special Ability: Empower', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: [20.36, 22.51, 24.59, 26.53, 28.27, 29.7], op: 'add' } ]},
	{ id: 3077, levels: 6, name: 'Special Ability: Magic Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: [75.86, 87.22, 99.39, 112.26, 125.66, 139.41], op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 1.15, op: 'mul' } ]},
	{ id: 3124, levels: 10, name: 'Item Skill: Blessed Body', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'maxHp', val: [30, 60, 90, 120, 150, 180, 210, 240, 270, 300], op: 'add' } ]},
	{ id: 3126, levels: 10, name: 'Item Skill: Prayer', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'gainHp', val: [1.08, 1.1, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19], op: 'mul' } ]},
	{ id: 3128, levels: 10, name: 'Item Skill: Blessed Soul', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'maxMp', val: [20, 40, 60, 80, 100, 120, 140, 160, 180, 200], op: 'add' } ]},
	{ id: 3129, levels: 10, name: 'Item Skill: Mana Gain', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'gainMp', val: [1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19], op: 'mul' } ]},
	{ id: 3131, levels: 10, name: 'Item Skill: Cheer', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'maxCp', val: [30, 60, 90, 120, 150, 180, 210, 240, 270, 300], op: 'add' } ]},
	{ id: 3132, levels: 10, name: 'Item Skill: Might', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'pAtk', val: [1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12], op: 'mul' } ]},
	{ id: 3133, levels: 10, name: 'Item Skill: Empower', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'mAtk', val: [1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19], op: 'mul' } ]},
	{ id: 3134, levels: 10, name: 'Item Skill: Duel Might', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'pvpPhysDmg', val: [1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12, 1.13, 1.14, 1.15], op: 'mul' } ]},
	{ id: 3135, levels: 10, name: 'Item Skill: Shield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'pDef', val: [1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12], op: 'mul' } ]},
	{ id: 3136, levels: 10, name: 'Item Skill: Magic Barrier', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'mDef', val: [1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12], op: 'mul' } ]},
	{ id: 3138, levels: 10, name: 'Item Skill: Heal Empower', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'giveHp', val: [1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19], op: 'mul' } ]},
	{ id: 3139, levels: 10, name: 'Item Skill: Agility', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'rEvas', val: [1, 1, 1, 2, 2, 2, 3, 3, 4, 4], op: 'add' } ]},
	{ id: 3140, levels: 10, name: 'Item Skill: Guidance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'accCombat', val: [1, 1, 1, 2, 2, 2, 3, 3, 4, 4], op: 'add' } ]},
	{ id: 3141, levels: 10, name: 'Item Skill: Focus', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'rCrit', val: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19], op: 'basemul' } ]},
	{ id: 3142, levels: 10, name: 'Item Skill: Wild Magic', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'mCritRate', val: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19], op: 'basemul' } ]},
	{ id: 3143, levels: 10, name: 'Item Skill: Kiss of Eva', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'breath', val: [2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4], op: 'mul' } ]},
	{ id: 3148, levels: 10, name: 'Item Skill: Vampiric Rage', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'absorbDam', val: [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5], op: 'add' } ]},
	{ id: 3158, levels: 1, name: 'Item Skill: Lesser Celestial Shield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Invincible', stackType: 'item_skill' },
	{ id: 3159, levels: 3, name: 'Item Skill: Stealth', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'SilentMove', stackType: 'item_skill', effects: [
		{ stat: 'pAtk', val: [1.2, 1.3, 1.4], op: 'div' },
		{ stat: 'accCombat', val: [1.1, 1.15, 1.2], op: 'div' },
		{ stat: 'pDef', val: [1.1, 1.2, 1.3], op: 'div' },
		{ stat: 'mDef', val: [1.15, 1.25, 1.35], op: 'div' } ]},
	{ id: 3161, levels: 3, name: 'Item Skill: Skill Clarity', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: [0.95, 0.92, 0.9], op: 'mul' } ]},
	{ id: 3162, levels: 3, name: 'Item Skill: Spell Clarity', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'MagicalMpConsumeRate', val: [0.95, 0.92, 0.9], op: 'mul' } ]},
	{ id: 3163, levels: 3, name: 'Item Skill: Music Clarity', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'DanceMpConsumeRate', val: [0.95, 0.92, 0.9], op: 'mul' } ]},
	{ id: 3164, levels: 3, name: 'Item Skill: Clarity', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: [0.95, 0.92, 0.9], op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: [0.95, 0.92, 0.9], op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: [0.95, 0.92, 0.9], op: 'mul' } ]},
	{ id: 3199, levels: 3, name: 'Item Skill: Skill Refresh', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'pReuse', val: [0.95, 0.93, 0.9], op: 'mul' } ]},
	{ id: 3200, levels: 3, name: 'Item Skill: Spell Refresh', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'mReuse', val: [0.95, 0.93, 0.9], op: 'mul' } ]},
	{ id: 3201, levels: 3, name: 'Item Skill: Music Refresh', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'pReuse', val: [0.95, 0.93, 0.9], op: 'mul' } ]},
	{ id: 3202, levels: 3, name: 'Item Skill: Refresh', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'mReuse', val: [0.95, 0.93, 0.9], op: 'mul' },
		{ stat: 'pReuse', val: [0.95, 0.93, 0.9], op: 'mul' } ]},
	{ id: 3203, levels: 1, name: 'Item Skill: Mystery Skill', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'BigHead', stackType: 'big_head' },
	{ id: 3238, levels: 10, name: 'Item Skill: Prayer', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'gainHp', val: [1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19], op: 'mul' } ]},
	{ id: 3239, levels: 10, name: 'Item Skill: Mana Gain', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'gainMp', val: [1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19], op: 'mul' } ]},
	{ id: 3240, levels: 10, name: 'Item Skill: Might', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12], op: 'mul' } ]},
	{ id: 3241, levels: 10, name: 'Item Skill: Empower', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: [1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19], op: 'mul' } ]},
	{ id: 3243, levels: 10, name: 'Item Skill: Duel Might', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pvpPhysDmg', val: [1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12, 1.13, 1.14, 1.15], op: 'mul' } ]},
	{ id: 3244, levels: 10, name: 'Item Skill: Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12], op: 'mul' } ]},
	{ id: 3245, levels: 10, name: 'Item Skill: Magic Barrier', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: [1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12], op: 'mul' } ]},
	{ id: 3246, levels: 10, name: 'Item Skill: Heal Empower', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'giveHp', val: [1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19], op: 'mul' } ]},
	{ id: 3247, levels: 10, name: 'Item Skill: Agility', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: [1, 1, 1, 2, 2, 2, 3, 3, 4, 4], op: 'add' } ]},
	{ id: 3248, levels: 10, name: 'Item Skill: Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: [1, 1, 1, 2, 2, 2, 3, 3, 4, 4], op: 'add' } ]},
	{ id: 3249, levels: 10, name: 'Item Skill: Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19], op: 'basemul' } ]},
	{ id: 3250, levels: 10, name: 'Item Skill: Wild Magic', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mCritRate', val: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19], op: 'basemul' } ]},
	{ id: 3251, levels: 10, name: 'Item Skill: Weight Limit', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxLoad', val: [1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2], op: 'mul' } ]},
	{ id: 3252, levels: 10, name: 'Item Skill: Kiss of Eva', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'breath', val: [2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4], op: 'mul' } ]},
	{ id: 3255, levels: 3, name: 'Item Skill: Skill Clarity', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: [0.95, 0.92, 0.9], op: 'mul' } ]},
	{ id: 3256, levels: 3, name: 'Item Skill: Spell Clarity', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'MagicalMpConsumeRate', val: [0.95, 0.92, 0.9], op: 'mul' } ]},
	{ id: 3257, levels: 3, name: 'Item Skill: Music Clarity', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'DanceMpConsumeRate', val: [0.95, 0.92, 0.9], op: 'mul' } ]},
	{ id: 3258, levels: 3, name: 'Item Skill: Clarity', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'MagicalMpConsumeRate', val: [0.95, 0.92, 0.9], op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: [0.95, 0.92, 0.9], op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: [0.95, 0.92, 0.9], op: 'mul' } ]},
	{ id: 3259, levels: 3, name: 'Item Skill: Reflect Damage', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'reflectDam', val: [5, 6, 7], op: 'add' } ]},
	{ id: 3265, levels: 1, name: 'Mysterious Ability', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'BigHead', stackType: 'big_head' },
	{ id: 3271, levels: 1, name: 'Blue Talisman of Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'pAtk', val: 60, op: 'add' } ]},
	{ id: 3272, levels: 1, name: 'Blue Talisman of Defense', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'pDef', val: 70, op: 'add' } ]},
	{ id: 3273, levels: 1, name: 'Red Talisman of Recovery', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'HealOverTime' },
	{ id: 3274, levels: 1, name: 'Blue Talisman of Protection', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'sDef', val: 225, op: 'add' } ]},
	{ id: 3275, levels: 1, name: 'Blue Talisman of Protection', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'rShld', val: 54.7, op: 'add' } ]},
	{ id: 3276, levels: 1, name: 'Blue Talisman - Magic Resistance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'mDef', val: 100, op: 'add' } ]},
	{ id: 3277, levels: 1, name: 'Blue Talisman of Wild Magic', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'mCritRate', val: 0.1, op: 'basemul' } ]},
	{ id: 3278, levels: 1, name: 'Red Talisman of Mental Regeneration', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_red', effects: [
		{ stat: 'regMp', val: 1.05, op: 'mul' } ]},
	{ id: 3279, levels: 1, name: 'Red Talisman of Meditation', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ManaHealOverTime' },
	{ id: 3280, levels: 1, name: 'Blue Talisman of Invisibility', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'SilentMove', stackType: 'talisman_blue' },
	{ id: 3281, levels: 1, name: 'Red Talisman of Minimum Clarity', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_red', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.96, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 3282, levels: 1, name: 'Red Talisman of Maximum Clarity', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_red', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.5, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 3283, levels: 1, name: 'Blue Talisman of Healing', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'gainHp', val: 1.1, op: 'mul' } ]},
	{ id: 3284, levels: 1, name: 'Blue Talisman - Divine Protection', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'pDef', val: 3600, op: 'add' },
		{ stat: 'mDef', val: 2700, op: 'add' } ]},
	{ id: 3293, levels: 1, name: 'Yellow Talisman of Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 20, op: 'add' } ]},
	{ id: 3294, levels: 1, name: 'Yellow Talisman of Arcane Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 25, op: 'add' } ]},
	{ id: 3295, levels: 1, name: 'Yellow Talisman of Defense', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 32, op: 'add' } ]},
	{ id: 3296, levels: 1, name: 'Yellow Talisman - Magic Resistance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 25, op: 'add' } ]},
	{ id: 3297, levels: 1, name: 'Yellow Talisman of Accuracy', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 2, op: 'add' } ]},
	{ id: 3298, levels: 1, name: 'Yellow Talisman of Evasion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 2, op: 'add' } ]},
	{ id: 3299, levels: 1, name: 'Yellow Talisman of Critical Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: 50, op: 'add' } ]},
	{ id: 3300, levels: 1, name: 'Yellow Talisman of Speed', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 5, op: 'add' } ]},
	{ id: 3301, levels: 1, name: 'Yellow Talisman of Violent Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 10, op: 'add' } ]},
	{ id: 3302, levels: 1, name: 'Yellow Talisman of Arcane Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtkSpd', val: 8, op: 'add' } ]},
	{ id: 3303, levels: 1, name: 'White Talisman of Bandages', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bleedVuln', val: 5, op: 'sub' } ]},
	{ id: 3304, levels: 1, name: 'White Talisman of Attention', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sleepVuln', val: 5, op: 'sub' } ]},
	{ id: 3305, levels: 1, name: 'White Talisman of Grounding', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: 5, op: 'sub' } ]},
	{ id: 3306, levels: 1, name: 'White Talisman of Bravery', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'derangementVuln', val: 5, op: 'sub' } ]},
	{ id: 3307, levels: 1, name: 'White Talisman of Motion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' } ]},
	{ id: 3308, levels: 1, name: 'White Talisman of Freedom', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: 5, op: 'sub' } ]},
	{ id: 3309, levels: 1, name: 'White Talisman of Protection', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cancelVuln', val: 5, op: 'sub' } ]},
	{ id: 3310, levels: 1, name: 'Yellow Talisman of Physical Regeneration', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regHp', val: 1.09, op: 'add' } ]},
	{ id: 3311, levels: 1, name: 'Yellow Talisman of CP Regeneration', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regCp', val: 1.09, op: 'add' } ]},
	{ id: 3312, levels: 1, name: 'Yellow Talisman of Healing', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'gainHp', val: 8, op: 'add' } ]},
	{ id: 3313, levels: 1, name: 'Yellow Talisman of Alacrity', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 3, op: 'add' },
		{ stat: 'mAtkSpd', val: 4, op: 'add' },
		{ stat: 'pAtkSpd', val: 5, op: 'add' } ]},
	{ id: 3314, levels: 1, name: 'Grey Talisman of Weight Training', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxLoad', val: 6210, op: 'add' } ]},
	{ id: 3320, levels: 1, name: 'Yellow Talisman of Mental Regeneration', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 0.47, op: 'add' } ]},
	{ id: 3321, levels: 1, name: 'Blue Talisman of Evasion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'rEvas', val: 2, op: 'add' },
		{ stat: 'critDamEvas', val: 1.2, op: 'mul' } ]},
	{ id: 3335, levels: 1, name: 'Transform Yeti', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 3336, levels: 1, name: 'Transform Buffalo', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 3337, levels: 1, name: 'Transform Cutie Pig', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 3348, levels: 1, name: 'Dynasty Breast Plate - Shield Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 2, op: 'sub' },
		{ stat: 'CON', val: 2, op: 'add' },
		{ stat: 'pDef', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'gainHp', val: 1.03, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3349, levels: 1, name: 'Dynasty Breast Plate - Weapon Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'pAtk', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'rCrit', val: 0.0246, op: 'basemul' },
		{ stat: 'cAtkAdd', val: 234, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3350, levels: 1, name: 'Dynasty Breast Plate - Force Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3351, levels: 1, name: 'Dynasty Breast Plate - Bard', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'pDef', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3352, levels: 1, name: 'Dynasty Leather Armor - Dagger Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'add' },
		{ stat: 'rEvas', val: 4.3, op: 'add' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'rootVuln', val: 13, op: 'sub' },
		{ stat: 'pAtkSpd', val: 1.0266, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3353, levels: 1, name: 'Dynasty Leather Armor - Bow Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'add' },
		{ stat: 'accCombat', val: 4.3, op: 'add' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0266, op: 'mul' },
		{ stat: 'regMp', val: 1.72, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3354, levels: 1, name: 'Dynasty Tunic - Healer', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'giveHp', val: 1.2, op: 'mul' },
		{ stat: 'cancel', val: 15, op: 'sub' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3355, levels: 1, name: 'Dynasty Tunic - Enchanter', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'WIT', val: 2, op: 'sub' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'cancel', val: 15, op: 'sub' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3356, levels: 1, name: 'Dynasty Tunic - Summoner', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'pAtk', val: 1.026, op: 'mul' },
		{ stat: 'pDef', val: 1.026, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3357, levels: 1, name: 'Dynasty Tunic - Wizard', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 1, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'add' },
		{ stat: 'MEN', val: 2, op: 'sub' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'mAtk', val: 1.054, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3358, levels: 1, name: 'Flag Equip', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 0.5, op: 'mul' } ]},
	{ id: 3365, levels: 1, name: 'Dynasty Resistance Necklace', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: 18, op: 'sub' } ]},
	{ id: 3366, levels: 1, name: 'Dynasty Resistance Ring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: 8, op: 'sub' } ]},
	{ id: 3367, levels: 1, name: 'Dynasty Resistance Earring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: 12, op: 'sub' } ]},
	{ id: 3371, levels: 1, name: 'Dynasty Resistance Necklace', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bleedVuln', val: 11, op: 'sub' } ]},
	{ id: 3372, levels: 1, name: 'Dynasty Resistance Ring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bleedVuln', val: 5, op: 'sub' } ]},
	{ id: 3373, levels: 1, name: 'Dynasty Resistance Earring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bleedVuln', val: 8, op: 'sub' } ]},
	{ id: 3377, levels: 1, name: 'Dynasty Resistance Necklace', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poisonVuln', val: 16, op: 'sub' } ]},
	{ id: 3378, levels: 1, name: 'Dynasty Resistance Ring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poisonVuln', val: 7, op: 'sub' } ]},
	{ id: 3379, levels: 1, name: 'Dynasty Resistance Earring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poisonVuln', val: 11, op: 'sub' } ]},
	{ id: 3383, levels: 1, name: 'Dynasty Resistance Necklace', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'paralyzeVuln', val: 9, op: 'sub' } ]},
	{ id: 3384, levels: 1, name: 'Dynasty Resistance Ring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'paralyzeVuln', val: 4, op: 'sub' } ]},
	{ id: 3385, levels: 1, name: 'Dynasty Resistance Earring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'paralyzeVuln', val: 6, op: 'sub' } ]},
	{ id: 3389, levels: 1, name: 'Dynasty Resistance Necklace', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: 18, op: 'sub' } ]},
	{ id: 3390, levels: 1, name: 'Dynasty Resistance Ring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: 8, op: 'sub' } ]},
	{ id: 3391, levels: 1, name: 'Dynasty Resistance Earring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: 12, op: 'sub' } ]},
	{ id: 3395, levels: 1, name: 'Dynasty Resistance Necklace', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sleepVuln', val: 18, op: 'sub' } ]},
	{ id: 3396, levels: 1, name: 'Dynasty Resistance Ring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sleepVuln', val: 8, op: 'sub' } ]},
	{ id: 3397, levels: 1, name: 'Dynasty Resistance Earring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sleepVuln', val: 12, op: 'sub' } ]},
	{ id: 3401, levels: 1, name: 'Dynasty Resistance Necklace', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'derangementVuln', val: 9, op: 'sub' } ]},
	{ id: 3402, levels: 1, name: 'Dynasty Resistance Ring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'derangementVuln', val: 4, op: 'sub' } ]},
	{ id: 3403, levels: 1, name: 'Dynasty Resistance Earring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'derangementVuln', val: 6, op: 'sub' } ]},
	{ id: 3410, levels: 1, name: 'Blue Talisman of Reflection', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'reflectDam', val: 5, op: 'add' } ]},
	{ id: 3411, levels: 1, name: 'Special Ability: Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: 109, op: 'add' },
		{ stat: 'maxHp', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3412, levels: 1, name: 'Dynasty Breast Plate', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 1, op: 'sub' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'pDef', val: 1.046, op: 'mul' },
		{ stat: 'maxHp', val: 418, op: 'add' },
		{ stat: 'darkRes', val: 6, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3413, levels: 1, name: 'Dynasty Leather Armor', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 1, op: 'sub' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'accCombat', val: 1.72, op: 'add' },
		{ stat: 'rEvas', val: 1.72, op: 'add' },
		{ stat: 'maxHp', val: 418, op: 'add' },
		{ stat: 'darkRes', val: 6, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3414, levels: 1, name: 'Dynasty Leather Armor - Force Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'pAtk', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3415, levels: 1, name: 'Dynasty Leather Armor - Weapon Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cAtkAdd', val: 234, op: 'add' },
		{ stat: 'rCrit', val: 0.0246, op: 'basemul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3416, levels: 1, name: 'Dynasty Tunic', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 1, op: 'sub' },
		{ stat: 'MEN', val: 1, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.12, op: 'mul' },
		{ stat: 'maxMp', val: 257, op: 'add' },
		{ stat: 'darkRes', val: 6, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3417, levels: 1, name: 'Equipped with Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sDef', val: 1.05, op: 'mul' } ]},
	{ id: 3418, levels: 1, name: 'Active Skill: Transform Pig', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 3420, levels: 1, name: 'Dynasty Leather Armor - Summoner', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 2, op: 'sub' },
		{ stat: 'CON', val: 2, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'pAtk', val: 1.0266, op: 'mul' },
		{ stat: 'pDef', val: 1.0266, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3427, levels: 1, name: 'Special Ability: Infinity Rapier', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'sDef', val: 1.33, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'reflectDam', val: 9, op: 'add' } ]},
	{ id: 3428, levels: 1, name: 'Blue Talisman - Explosion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 3430, levels: 1, name: 'White Talisman - Darkness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talismanElementRes', effects: [
		{ stat: 'darkRes', val: 50, op: 'add' } ]},
	{ id: 3431, levels: 1, name: 'White Talisman - Storm', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talismanElementRes', effects: [
		{ stat: 'windRes', val: 50, op: 'add' } ]},
	{ id: 3432, levels: 1, name: 'White Talisman - Water', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talismanElementRes', effects: [
		{ stat: 'waterRes', val: 50, op: 'add' } ]},
	{ id: 3433, levels: 1, name: 'White Talisman - Fire', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talismanElementRes', effects: [
		{ stat: 'fireRes', val: 50, op: 'add' } ]},
	{ id: 3434, levels: 1, name: 'White Talisman - Earth', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talismanElementRes', effects: [
		{ stat: 'earthRes', val: 50, op: 'add' } ]},
	{ id: 3435, levels: 1, name: 'White Talisman - Light', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talismanElementRes', effects: [
		{ stat: 'holyRes', val: 50, op: 'add' } ]},
	{ id: 3437, levels: 1, name: 'Blue Talisman - Magic Explosive Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'mAtk', val: 1.15, op: 'mul' },
		{ stat: 'mCritRate', val: 1.15, op: 'mul' } ]},
	{ id: 3438, levels: 1, name: 'Blue Talisman - Great Healing', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'gainHp', val: 1.3, op: 'mul' } ]},
	{ id: 3439, levels: 1, name: 'Silk Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 118, op: 'add' } ]},
	{ id: 3440, levels: 1, name: 'Silk Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 51, op: 'add' } ]},
	{ id: 3441, levels: 1, name: 'Silk Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 354, op: 'add' } ]},
	{ id: 3442, levels: 1, name: 'Silk Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 118, op: 'add' },
		{ stat: 'maxMp', val: 51, op: 'add' } ]},
	{ id: 3443, levels: 1, name: 'Silk Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 118, op: 'add' },
		{ stat: 'maxCp', val: 354, op: 'add' } ]},
	{ id: 3444, levels: 1, name: 'Silk Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 51, op: 'add' },
		{ stat: 'maxCp', val: 354, op: 'add' } ]},
	{ id: 3445, levels: 1, name: 'Thin Leather Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 147, op: 'add' } ]},
	{ id: 3446, levels: 1, name: 'Thin Leather Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 72, op: 'add' } ]},
	{ id: 3447, levels: 1, name: 'Thin Leather Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 441, op: 'add' } ]},
	{ id: 3448, levels: 1, name: 'Thin Leather Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 147, op: 'add' },
		{ stat: 'maxMp', val: 72, op: 'add' } ]},
	{ id: 3449, levels: 1, name: 'Thin Leather Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 147, op: 'add' },
		{ stat: 'maxCp', val: 441, op: 'add' } ]},
	{ id: 3450, levels: 1, name: 'Thin Leather Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 72, op: 'add' },
		{ stat: 'maxCp', val: 441, op: 'add' } ]},
	{ id: 3451, levels: 1, name: 'Scale Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 172, op: 'add' } ]},
	{ id: 3452, levels: 1, name: 'Scale Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 85, op: 'add' } ]},
	{ id: 3453, levels: 1, name: 'Scale Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 516, op: 'add' } ]},
	{ id: 3454, levels: 1, name: 'Scale Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 172, op: 'add' },
		{ stat: 'maxMp', val: 85, op: 'add' } ]},
	{ id: 3455, levels: 1, name: 'Scale Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 172, op: 'add' },
		{ stat: 'maxCp', val: 515, op: 'add' } ]},
	{ id: 3456, levels: 1, name: 'Scale Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 85, op: 'add' },
		{ stat: 'maxCp', val: 516, op: 'add' } ]},
	{ id: 3457, levels: 1, name: 'Mithril Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 224, op: 'add' } ]},
	{ id: 3458, levels: 1, name: 'Mithril Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 111, op: 'add' } ]},
	{ id: 3459, levels: 1, name: 'Mithril Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 672, op: 'add' } ]},
	{ id: 3460, levels: 1, name: 'Mithril Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 224, op: 'add' },
		{ stat: 'maxMp', val: 111, op: 'add' } ]},
	{ id: 3461, levels: 1, name: 'Mithril Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 224, op: 'add' },
		{ stat: 'maxCp', val: 672, op: 'add' } ]},
	{ id: 3462, levels: 1, name: 'Mithril Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 111, op: 'add' },
		{ stat: 'maxCp', val: 672, op: 'add' } ]},
	{ id: 3463, levels: 1, name: 'Striped Silk Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 135, op: 'add' } ]},
	{ id: 3464, levels: 1, name: 'Striped Silk Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 66, op: 'add' } ]},
	{ id: 3465, levels: 1, name: 'Striped Silk Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 405, op: 'add' } ]},
	{ id: 3466, levels: 1, name: 'Striped Silk Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 135, op: 'add' },
		{ stat: 'maxMp', val: 66, op: 'add' } ]},
	{ id: 3467, levels: 1, name: 'Striped Silk Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 135, op: 'add' },
		{ stat: 'maxCp', val: 405, op: 'add' } ]},
	{ id: 3468, levels: 1, name: 'Striped Silk Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 66, op: 'add' },
		{ stat: 'maxCp', val: 354, op: 'add' } ]},
	{ id: 3469, levels: 1, name: 'Thin Stripe Leather Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 160, op: 'add' } ]},
	{ id: 3470, levels: 1, name: 'Thin Stripe Leather Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 78, op: 'add' } ]},
	{ id: 3471, levels: 1, name: 'Thin Stripe Leather Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 480, op: 'add' } ]},
	{ id: 3472, levels: 1, name: 'Thin Stripe Leather Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 160, op: 'add' },
		{ stat: 'maxMp', val: 78, op: 'add' } ]},
	{ id: 3473, levels: 1, name: 'Thin Stripe Leather Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 147, op: 'add' },
		{ stat: 'maxCp', val: 480, op: 'add' } ]},
	{ id: 3474, levels: 1, name: 'Thin Stripe Leather Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 78, op: 'add' },
		{ stat: 'maxCp', val: 480, op: 'add' } ]},
	{ id: 3475, levels: 1, name: 'Striped Scale Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 186, op: 'add' } ]},
	{ id: 3476, levels: 1, name: 'Striped Scale Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 92, op: 'add' } ]},
	{ id: 3477, levels: 1, name: 'Striped Scale Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 564, op: 'add' } ]},
	{ id: 3478, levels: 1, name: 'Striped Scale Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 186, op: 'add' },
		{ stat: 'maxMp', val: 92, op: 'add' } ]},
	{ id: 3479, levels: 1, name: 'Striped Scale Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 186, op: 'add' },
		{ stat: 'maxCp', val: 564, op: 'add' } ]},
	{ id: 3480, levels: 1, name: 'Striped Scale Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 92, op: 'add' },
		{ stat: 'maxCp', val: 564, op: 'add' } ]},
	{ id: 3481, levels: 1, name: 'Striped Mithril Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 246, op: 'add' } ]},
	{ id: 3482, levels: 1, name: 'Striped Mithril Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 122, op: 'add' } ]},
	{ id: 3483, levels: 1, name: 'Striped Mithril Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 744, op: 'add' } ]},
	{ id: 3484, levels: 1, name: 'Striped Mithril Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 246, op: 'add' },
		{ stat: 'maxMp', val: 122, op: 'add' } ]},
	{ id: 3485, levels: 1, name: 'Striped Mithril Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 246, op: 'add' },
		{ stat: 'maxCp', val: 744, op: 'add' } ]},
	{ id: 3486, levels: 1, name: 'Striped Mithril Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 122, op: 'add' },
		{ stat: 'maxCp', val: 744, op: 'add' } ]},
	{ id: 3487, levels: 1, name: 'Blue Talisman of Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'pAtk', val: 1.02, op: 'mul' } ]},
	{ id: 3488, levels: 1, name: 'Blue Talisman of Protection', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_blue', effects: [
		{ stat: 'sDef', val: 1.02, op: 'mul' } ]},
	{ id: 3489, levels: 1, name: 'Yellow Talisman of Arcane Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.02, op: 'mul' } ]},
	{ id: 3490, levels: 1, name: 'Yellow Talisman of Defense', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.02, op: 'mul' } ]},
	{ id: 3491, levels: 1, name: 'Yellow Talisman of Evasion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 1, op: 'add' } ]},
	{ id: 3492, levels: 1, name: 'Yellow Talisman of Speed', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 3, op: 'add' } ]},
	{ id: 3493, levels: 1, name: 'Yellow Talisman of Regeneration', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regHp', val: 1.02, op: 'mul' } ]},
	{ id: 3494, levels: 1, name: 'Yellow Talisman of CP Regeneration', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regCp', val: 1.02, op: 'mul' } ]},
	{ id: 3495, levels: 1, name: 'Yellow Talisman of Healing', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'gainHp', val: 8, op: 'add' } ]},
	{ id: 3496, levels: 1, name: 'Red Talisman of Recovery', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'HealOverTime' },
	{ id: 3497, levels: 1, name: 'Yellow Talisman of MP Regeneration', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 1.02, op: 'mul' } ]},
	{ id: 3498, levels: 1, name: 'Special Ability: Light', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxLoad', val: 1.2, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3500, levels: 1, name: 'Wooden Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.02, op: 'mul' },
		{ stat: 'maxHp', val: 41, op: 'add' } ]},
	{ id: 3501, levels: 1, name: 'Devotion Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 3502, levels: 1, name: 'Mithril Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poisonVuln', val: 20, op: 'sub' } ]},
	{ id: 3503, levels: 1, name: 'Reinforced Leather Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 80, op: 'add' } ]},
	{ id: 3504, levels: 1, name: 'Knowledge Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'regMp', val: 0.95, op: 'mul' } ]},
	{ id: 3505, levels: 1, name: 'Manticore Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 92, op: 'add' } ]},
	{ id: 3506, levels: 1, name: 'Brigandine Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.05, op: 'mul' },
		{ stat: 'maxHp', val: 153, op: 'add' } ]},
	{ id: 3507, levels: 1, name: 'Mithril Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 7, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'add' },
		{ stat: 'INT', val: 1, op: 'sub' } ]},
	{ id: 3508, levels: 1, name: 'Mithril Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 3509, levels: 1, name: 'Chain Mail Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'daggerWpnVuln', val: 0.9476, op: 'mul' } ]},
	{ id: 3510, levels: 1, name: 'Karmian Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.0524, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 3511, levels: 1, name: 'Plated Leather Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 4, op: 'add' },
		{ stat: 'CON', val: 1, op: 'sub' } ]},
	{ id: 3512, levels: 1, name: 'Composite Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxLoad', val: 5795, op: 'add' } ]},
	{ id: 3513, levels: 1, name: 'Demon\'s Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 270, op: 'sub' },
		{ stat: 'INT', val: 4, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'sub' } ]},
	{ id: 3514, levels: 1, name: 'Theca Leather Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.0524, op: 'mul' } ]},
	{ id: 3515, levels: 1, name: 'Drake Leather Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.0524, op: 'mul' } ]},
	{ id: 3516, levels: 1, name: 'Full Plate Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 270, op: 'add' } ]},
	{ id: 3517, levels: 1, name: 'Divine Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.0524, op: 'mul' },
		{ stat: 'maxMp', val: 171, op: 'add' },
		{ stat: 'INT', val: 1, op: 'sub' },
		{ stat: 'WIT', val: 1, op: 'add' } ]},
	{ id: 3518, levels: 1, name: 'Zubei\'s Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.0524, op: 'mul' },
		{ stat: 'maxHp', val: 294, op: 'add' } ]},
	{ id: 3519, levels: 1, name: 'Avadon Breastplate Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 294, op: 'add' } ]},
	{ id: 3520, levels: 1, name: 'Zubei\'s Leather Shirt Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 3521, levels: 1, name: 'Avadon Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.0525, op: 'mul' },
		{ stat: 'maxLoad', val: 5795, op: 'add' } ]},
	{ id: 3522, levels: 1, name: 'Tunic of Zubei Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'regMp', val: 0.95, op: 'mul' } ]},
	{ id: 3523, levels: 1, name: 'Avadon Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.0547, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 3524, levels: 1, name: 'Blue Wolf Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 7, op: 'add' },
		{ stat: 'regHp', val: 1.0524, op: 'mul' },
		{ stat: 'STR', val: 3, op: 'add' },
		{ stat: 'CON', val: 1, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'sub' } ]},
	{ id: 3525, levels: 1, name: 'Doom Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 320, op: 'add' },
		{ stat: 'breath', val: 200, op: 'add' },
		{ stat: 'STR', val: 3, op: 'sub' },
		{ stat: 'CON', val: 3, op: 'add' } ]},
	{ id: 3526, levels: 1, name: 'Blue Wolf Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.0524, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 3, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'sub' } ]},
	{ id: 3527, levels: 1, name: 'Doom Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'breath', val: 200, op: 'add' },
		{ stat: 'pAtk', val: 1.027, op: 'mul' },
		{ stat: 'regMp', val: 1.025, op: 'mul' },
		{ stat: 'STR', val: 1, op: 'sub' },
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 3, op: 'add' },
		{ stat: 'poisonVuln', val: 20, op: 'sub' } ]},
	{ id: 3528, levels: 1, name: 'Blue Wolf Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 206, op: 'add' },
		{ stat: 'regMp', val: 1.0524, op: 'mul' },
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 1, op: 'sub' },
		{ stat: 'WIT', val: 3, op: 'add' } ]},
	{ id: 3529, levels: 1, name: 'Doom Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 7, op: 'add' },
		{ stat: 'breath', val: 200, op: 'add' },
		{ stat: 'regMp', val: 1.0524, op: 'mul' },
		{ stat: 'INT', val: 2, op: 'add' },
		{ stat: 'MEN', val: 1, op: 'add' },
		{ stat: 'WIT', val: 3, op: 'sub' } ]},
	{ id: 3530, levels: 1, name: 'Dark Crystal Breastplate Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'gainHp', val: 1.04, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 50, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'sub' },
		{ stat: 'CON', val: 2, op: 'add' } ]},
	{ id: 3531, levels: 1, name: 'Tallum Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'maxLoad', val: 5759, op: 'add' },
		{ stat: 'poisonVuln', val: 80, op: 'sub' },
		{ stat: 'bleedVuln', val: 80, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'CON', val: 2, op: 'sub' } ]},
	{ id: 3532, levels: 1, name: 'Dark Crystal Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'pAtk', val: 1.04, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 50, op: 'sub' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'CON', val: 1, op: 'sub' } ]},
	{ id: 3533, levels: 1, name: 'Tallum Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 1.08, op: 'mul' },
		{ stat: 'maxMp', val: 222, op: 'add' },
		{ stat: 'poisonVuln', val: 80, op: 'sub' },
		{ stat: 'bleedVuln', val: 80, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'WIT', val: 2, op: 'sub' } ]},
	{ id: 3534, levels: 1, name: 'Tallum Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'mDef', val: 1.08, op: 'mul' },
		{ stat: 'poisonVuln', val: 80, op: 'sub' },
		{ stat: 'bleedVuln', val: 80, op: 'sub' },
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'WIT', val: 2, op: 'add' } ]},
	{ id: 3535, levels: 1, name: 'Dark Crystal Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.08, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'runSpd', val: 7, op: 'add' },
		{ stat: 'cancel', val: 50, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 50, op: 'sub' },
		{ stat: 'WIT', val: 2, op: 'add' },
		{ stat: 'MEN', val: 2, op: 'sub' } ]},
	{ id: 3536, levels: 1, name: 'Nightmare Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.04, op: 'mul' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' },
		{ stat: 'CON', val: 2, op: 'add' },
		{ stat: 'DEX', val: 2, op: 'sub' } ]},
	{ id: 3537, levels: 1, name: 'Majestic Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.04, op: 'mul' },
		{ stat: 'accCombat', val: 3, op: 'add' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'CON', val: 2, op: 'sub' } ]},
	{ id: 3538, levels: 1, name: 'Nightmarish Leather Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.04, op: 'mul' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' },
		{ stat: 'absorbDam', val: 3, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'CON', val: 1, op: 'sub' } ]},
	{ id: 3539, levels: 1, name: 'Majestic Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.08, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'maxMp', val: 240, op: 'add' },
		{ stat: 'maxLoad', val: 5759, op: 'add' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'CON', val: 1, op: 'sub' } ]},
	{ id: 3540, levels: 1, name: 'Nightmare Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 1.04, op: 'mul' },
		{ stat: 'mAtk', val: 1.08, op: 'mul' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' },
		{ stat: 'INT', val: 2, op: 'add' },
		{ stat: 'WIT', val: 2, op: 'sub' } ]},
	{ id: 3541, levels: 1, name: 'Majestic Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 240, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.08, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'MEN', val: 1, op: 'add' },
		{ stat: 'INT', val: 1, op: 'sub' } ]},
	{ id: 3542, levels: 6, name: 'Special Ability: Critical Damage', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: [203.97, 226.51, 248.71, 269.91, 289.4, 306.42], op: 'add' } ]},
	{ id: 3543, levels: 1, name: 'Equipped with Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 126, op: 'add' } ]},
	{ id: 3544, levels: 1, name: 'Equipped with Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 20, op: 'add' } ]},
	{ id: 3545, levels: 1, name: 'Equipped with Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 198, op: 'add' } ]},
	{ id: 3546, levels: 1, name: 'Equipped with Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.0526, op: 'mul' } ]},
	{ id: 3547, levels: 1, name: 'Equipped with Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rShld', val: 1.0525, op: 'mul' } ]},
	{ id: 3548, levels: 1, name: 'Equipped with Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rShld', val: 1.24, op: 'mul' } ]},
	{ id: 3549, levels: 1, name: 'Equipped with Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rShld', val: 1.24, op: 'mul' } ]},
	{ id: 3550, levels: 1, name: 'Equipped with Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rShld', val: 1.18, op: 'mul' } ]},
	{ id: 3551, levels: 1, name: 'Equipped with Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'reflectDam', val: 5, op: 'add' } ]},
	{ id: 3552, levels: 4, name: 'Special Ability: PvP Damage', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'atkCountMax', val: [0, 4, 0, 4], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3553, levels: 1, name: 'Imperial Crusader Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.08, op: 'mul' },
		{ stat: 'maxHp', val: 445, op: 'add' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' } ]},
	{ id: 3554, levels: 1, name: 'Equipped with Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poisonVuln', val: 80, op: 'sub' },
		{ stat: 'bleedVuln', val: 80, op: 'sub' } ]},
	{ id: 3555, levels: 1, name: 'Draconic Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'pAtk', val: 1.04, op: 'mul' },
		{ stat: 'maxMp', val: 289, op: 'add' },
		{ stat: 'maxLoad', val: 5759, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'CON', val: 2, op: 'sub' } ]},
	{ id: 3556, levels: 1, name: 'Major Arcana Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.17, op: 'mul' },
		{ stat: 'runSpd', val: 7, op: 'add' },
		{ stat: 'cancel', val: 50, op: 'sub' },
		{ stat: 'maxLoad', val: 5759, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'add' },
		{ stat: 'INT', val: 1, op: 'add' },
		{ stat: 'MEN', val: 2, op: 'sub' },
		{ stat: 'stunVuln', val: 50, op: 'sub' } ]},
	{ id: 3557, levels: 1, name: 'Necklace of Valakas', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 445, op: 'add' },
		{ stat: 'pAtk', val: 1.04, op: 'mul' },
		{ stat: 'mAtk', val: 1.08, op: 'mul' },
		{ stat: 'mCritRate', val: 0.2, op: 'basemul' },
		{ stat: 'fireRes', val: 15, op: 'add' },
		{ stat: 'sleepVuln', val: 40, op: 'sub' },
		{ stat: 'sleepProf', val: 40, op: 'add' },
		{ stat: 'mReuse', val: 0.9, op: 'mul' },
		{ stat: 'pReuse', val: 0.9, op: 'mul' },
		{ stat: 'reflectDam', val: 5, op: 'add' } ]},
	{ id: 3558, levels: 1, name: 'Earring of Antharas', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bleedVuln', val: 40, op: 'sub' },
		{ stat: 'earthRes', val: 15, op: 'add' },
		{ stat: 'stunVuln', val: 30, op: 'sub' },
		{ stat: 'derangementVuln', val: 30, op: 'sub' },
		{ stat: 'bleedProf', val: 40, op: 'add' },
		{ stat: 'stunProf', val: 30, op: 'add' },
		{ stat: 'derangementProf', val: 30, op: 'add' },
		{ stat: 'gainHp', val: 1.1, op: 'mul' },
		{ stat: 'absorbDam', val: 4, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 3559, levels: 1, name: 'Earring of Zaken', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: 20, op: 'sub' },
		{ stat: 'derangementVuln', val: 20, op: 'sub' },
		{ stat: 'bleedVuln', val: 30, op: 'sub' },
		{ stat: 'bleedProf', val: 30, op: 'add' },
		{ stat: 'stunProf', val: 20, op: 'add' },
		{ stat: 'derangementProf', val: 20, op: 'add' },
		{ stat: 'gainHp', val: 1.1, op: 'mul' },
		{ stat: 'absorbDam', val: 4, op: 'add' } ]},
	{ id: 3560, levels: 1, name: 'Earring of Orfen', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bleedVuln', val: 20, op: 'sub' },
		{ stat: 'bleedProf', val: 20, op: 'add' },
		{ stat: 'gainHp', val: 1.06, op: 'mul' } ]},
	{ id: 3561, levels: 1, name: 'Ring of Baium', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: 30, op: 'sub' },
		{ stat: 'poisonVuln', val: 40, op: 'sub' },
		{ stat: 'poisonProf', val: 40, op: 'add' },
		{ stat: 'rootProf', val: 30, op: 'add' },
		{ stat: 'accCombat', val: 2, op: 'add' },
		{ stat: 'cAtk', val: 1.15, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.04, op: 'mul' } ]},
	{ id: 3562, levels: 1, name: 'Ring of Ant Queen', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poisonVuln', val: 30, op: 'sub' },
		{ stat: 'rootVuln', val: 20, op: 'sub' },
		{ stat: 'poisonProf', val: 30, op: 'add' },
		{ stat: 'rootProf', val: 20, op: 'add' },
		{ stat: 'accCombat', val: 2, op: 'add' },
		{ stat: 'cAtk', val: 1.15, op: 'mul' } ]},
	{ id: 3563, levels: 1, name: 'Ring of Core', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poisonVuln', val: 20, op: 'sub' },
		{ stat: 'poisonProf', val: 20, op: 'add' },
		{ stat: 'accCombat', val: 1, op: 'add' } ]},
	{ id: 3564, levels: 3, name: 'Special Ability: Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: [1.07, 1.06, 1.09], op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3565, levels: 5, name: 'Special Ability: Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [80.6, 106, 106, 134, 134], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3566, levels: 5, name: 'Special Ability: Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [84.3, 111, 134, 134, 134], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3567, levels: 5, name: 'Special Ability: Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [88.1, 116, 116, 139, 139], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3568, levels: 2, name: 'Special Ability: HP Drain', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'absorbDam', val: [3, 4], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3569, levels: 4, name: 'Special Ability: HP Regeneration', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regHp', val: [2.04, 2.04, 2.04, 2.04], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3570, levels: 1, name: 'Special Ability: Robust Health', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3572, levels: 4, name: 'Special Ability: Critical Damage', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: [265, 665, 1000, 1000], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3573, levels: 3, name: 'Special Ability: Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: [5.27, 5.32, 0], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3575, levels: 4, name: 'Special Ability: Empower', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: [60.09, 117, 167, 177], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3576, levels: 4, name: 'Special Ability: MP Regeneration', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: [0.54, 0.72, 0.76, 0.8], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3578, levels: 1, name: 'Special Ability: Infinity Blade', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'sDef', val: 1.33, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'reflectDam', val: 9, op: 'add' } ]},
	{ id: 3580, levels: 1, name: 'Special Ability: Infinity Axe', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'rShld', val: 1.39, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'reflectDam', val: 9, op: 'add' } ]},
	{ id: 3582, levels: 1, name: 'Special Ability: Infinity Cleaver', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: 504, op: 'add' },
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'rCrit', val: 78.7, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'reflectSkillPhysic', val: 10, op: 'add' },
		{ stat: 'reflectSkillMagic', val: 10, op: 'add' } ]},
	{ id: 3583, levels: 1, name: 'Special Ability: Infinity Crusher', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.07, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'reflectSkillPhysic', val: 10, op: 'add' },
		{ stat: 'reflectSkillMagic', val: 10, op: 'add' } ]},
	{ id: 3585, levels: 1, name: 'Special Ability: Infinity Wing', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'rCrit', val: 78.7, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'reflectSkillPhysic', val: 10, op: 'add' },
		{ stat: 'reflectSkillMagic', val: 10, op: 'add' } ]},
	{ id: 3587, levels: 1, name: 'Special Ability: Infinity Fang', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'rEvas', val: 3.15, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'reflectSkillPhysic', val: 10, op: 'add' },
		{ stat: 'reflectSkillMagic', val: 10, op: 'add' } ]},
	{ id: 3589, levels: 1, name: 'Special Ability: Infinity Stinger', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.03, op: 'mul' },
		{ stat: 'regMp', val: 0.51, op: 'add' },
		{ stat: 'rCrit', val: 220, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'absorbDam', val: 2, op: 'add' } ]},
	{ id: 3591, levels: 1, name: 'Special Ability: Infinity Spear', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'atkCountMax', val: 5, op: 'add' },
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.07, op: 'mul' },
		{ stat: 'accCombat', val: 4.89, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'reflectSkillPhysic', val: 10, op: 'add' },
		{ stat: 'reflectSkillMagic', val: 10, op: 'add' } ]},
	{ id: 3593, levels: 1, name: 'Special Ability: Infinity Bow', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'atkReuse', val: 0.81, op: 'mul' } ]},
	{ id: 3595, levels: 1, name: 'Special Ability: Infinity Scepter', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'mAtk', val: 29.67, op: 'add' },
		{ stat: 'mCritRate', val: 0.054, op: 'basemul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.96, op: 'mul' },
		{ stat: 'cancel', val: 106, op: 'sub' } ]},
	{ id: 3597, levels: 1, name: 'Special Ability: Infinity Rod', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 0.51, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3599, levels: 1, name: 'Polearm Multi-attack', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'atkCountMax', val: 5, op: 'add' } ]},
	{ id: 3600, levels: 10, name: 'Special Ability: Anger', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [20.44, 22.64, 24.77, 26.78, 28.59, 30.12, 31.30, 39, 45, 78], op: 'add' },
		{ stat: 'maxHp', val: 0.85, op: 'mul' },
		{ stat: 'atkCountMax', val: 5, op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3601, levels: 10, name: 'Special Ability: Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: [1.08, 1.07, 1.07, 1.07, 1.06, 1.06, 1.06, 1.06, 1.07, 1.09], op: 'mul' },
		{ stat: 'atkCountMax', val: 5, op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3602, levels: 10, name: 'Special Ability: Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: [6.88, 6.07, 5.72, 5.37, 5.02, 4.68, 4.34, 3.95, 5.27, 7.5], op: 'add' },
		{ stat: 'atkCountMax', val: 5, op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3603, levels: 10, name: 'Demon Sword Zariche', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: [12, 13, 14, 15, 17, 19, 21, 23, 25, 27], op: 'mul' },
		{ stat: 'pAtk', val: [3, 4.5, 6, 7.5, 9, 10.5, 11, 11.5, 12, 12.5], op: 'mul' },
		{ stat: 'mAtk', val: [3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 5, 5.5, 5.75], op: 'mul' },
		{ stat: 'pDef', val: [2.5, 2.6, 2.7, 2.8, 2.9, 3, 3.25, 3.5, 3.75, 4], op: 'mul' },
		{ stat: 'mDef', val: [3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.75, 4, 4.25, 4.5], op: 'mul' },
		{ stat: 'accCombat', val: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60], op: 'add' },
		{ stat: 'runSpd', val: [4, 6, 8, 10, 12, 14, 16, 18, 19, 20], op: 'add' },
		{ stat: 'absorbDam', val: 100, op: 'add' },
		{ stat: 'regCp', val: 20, op: 'mul' },
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 15, op: 'set' },
		{ stat: 'MEN', val: 21, op: 'set' } ]},
	{ id: 3604, levels: 1, name: 'Frintezza\'s Necklace', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sleepVuln', val: 15, op: 'sub' },
		{ stat: 'poisonVuln', val: 25, op: 'sub' },
		{ stat: 'bleedVuln', val: 25, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 15, op: 'sub' },
		{ stat: 'stunVuln', val: 15, op: 'sub' },
		{ stat: 'darkRes', val: 15, op: 'add' },
		{ stat: 'bleedProf', val: 25, op: 'add' },
		{ stat: 'poisonProf', val: 25, op: 'add' },
		{ stat: 'sleepProf', val: 15, op: 'add' },
		{ stat: 'paralyzeProf', val: 15, op: 'add' },
		{ stat: 'stunProf', val: 15, op: 'add' },
		{ stat: 'reflectDam', val: 5, op: 'add' },
		{ stat: 'mReuse', val: 0.9, op: 'mul' },
		{ stat: 'pReuse', val: 0.9, op: 'mul' } ]},
	{ id: 3605, levels: 1, name: 'Clan Oath Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.05, op: 'mul' },
		{ stat: 'maxHp', val: 85, op: 'add' } ]},
	{ id: 3606, levels: 1, name: 'Clan Oath Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.05, op: 'mul' },
		{ stat: 'rEvas', val: 3, op: 'add' } ]},
	{ id: 3607, levels: 1, name: 'Clan Oath Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.05, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.05, op: 'mul' } ]},
	{ id: 3608, levels: 2, name: 'Apella Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: [1035, 1116], op: 'add' },
		{ stat: 'regCp', val: 1.4, op: 'mul' } ]},
	{ id: 3609, levels: 2, name: 'Apella Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: [1035, 1116], op: 'add' },
		{ stat: 'regCp', val: 1.4, op: 'mul' } ]},
	{ id: 3610, levels: 2, name: 'Apella Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: [1035, 1116], op: 'add' },
		{ stat: 'regCp', val: 1.4, op: 'mul' } ]},
	{ id: 3611, levels: 1, name: 'Enchant Heavy Armor (Grade D)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 25, op: 'add' },
		{ stat: 'regMp', val: 2, op: 'add' } ]},
	{ id: 3612, levels: 1, name: 'Enchant Light Armor (Grade D)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 2, op: 'add' },
		{ stat: 'mDef', val: 12, op: 'add' } ]},
	{ id: 3613, levels: 1, name: 'Enchant Robe (Grade D)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 16, op: 'add' },
		{ stat: 'maxLoad', val: 1.3, op: 'mul' } ]},
	{ id: 3614, levels: 1, name: 'Enchant Heavy Armor (Grade C)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 38, op: 'add' },
		{ stat: 'regMp', val: 2, op: 'add' } ]},
	{ id: 3615, levels: 1, name: 'Enchant Light Armor (Grade C)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 2, op: 'add' },
		{ stat: 'mDef', val: 20, op: 'add' } ]},
	{ id: 3616, levels: 1, name: 'Enchant Robe (Grade C)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 24, op: 'add' },
		{ stat: 'maxLoad', val: 1.3, op: 'mul' } ]},
	{ id: 3617, levels: 1, name: 'Enchant Heavy Armor (Grade B)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 44, op: 'add' },
		{ stat: 'regMp', val: 2, op: 'add' } ]},
	{ id: 3618, levels: 1, name: 'Enchant Light Armor (Grade B)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 2, op: 'add' },
		{ stat: 'mDef', val: 24, op: 'add' } ]},
	{ id: 3619, levels: 1, name: 'Enchant Robe (Grade B)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 28, op: 'add' },
		{ stat: 'maxLoad', val: 1.3, op: 'mul' } ]},
	{ id: 3620, levels: 1, name: 'Enchant Heavy Armor (Grade A)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 50, op: 'add' },
		{ stat: 'regMp', val: 2, op: 'add' } ]},
	{ id: 3621, levels: 1, name: 'Enchant Light Armor (Grade A)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 2, op: 'add' },
		{ stat: 'mDef', val: 28, op: 'add' } ]},
	{ id: 3622, levels: 1, name: 'Enchant Robe (Grade A)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 32, op: 'add' },
		{ stat: 'maxLoad', val: 1.3, op: 'mul' } ]},
	{ id: 3623, levels: 1, name: 'Enchant Heavy Armor (Grade S)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 56, op: 'add' },
		{ stat: 'regMp', val: 2, op: 'add' } ]},
	{ id: 3624, levels: 1, name: 'Enchant Light Armor (Grade S)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 2, op: 'add' },
		{ stat: 'mDef', val: 32, op: 'add' } ]},
	{ id: 3625, levels: 1, name: 'Enchant Robe (Grade S)', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 36, op: 'add' },
		{ stat: 'maxLoad', val: 1.3, op: 'mul' } ]},
	{ id: 3629, levels: 10, name: 'Blood Sword Akamanah', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: [12, 13, 14, 15, 17, 19, 21, 23, 25, 27], op: 'mul' },
		{ stat: 'pAtk', val: [3, 4.5, 6, 7.5, 9, 10.5, 11, 11.5, 12, 12.5], op: 'mul' },
		{ stat: 'mAtk', val: [3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 5, 5.5, 5.75], op: 'mul' },
		{ stat: 'pDef', val: [2.5, 2.6, 2.7, 2.8, 2.9, 3, 3.25, 3.5, 3.75, 4], op: 'mul' },
		{ stat: 'mDef', val: [3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.75, 4, 4.25, 4.5], op: 'mul' },
		{ stat: 'accCombat', val: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60], op: 'add' },
		{ stat: 'runSpd', val: [4, 6, 8, 10, 12, 14, 16, 18, 19, 20], op: 'add' },
		{ stat: 'absorbDam', val: 100, op: 'add' },
		{ stat: 'regCp', val: 20, op: 'mul' },
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 15, op: 'set' },
		{ stat: 'MEN', val: 21, op: 'set' } ]},
	{ id: 3632, levels: 1, name: 'Clan Gate', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ClanGate' },
	{ id: 3633, levels: 2, name: 'Residential Shock Immunity', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ShockVuln', effects: [
		{ stat: 'stunVuln', val: [50, 100], op: 'sub' } ]},
	{ id: 3634, levels: 1, name: 'Special Ability Infinity Sword', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: 504, op: 'add' },
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'rCrit', val: 78.7, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'reflectSkillPhysic', val: 10, op: 'add' },
		{ stat: 'reflectSkillMagic', val: 10, op: 'add' } ]},
	{ id: 3635, levels: 1, name: 'Special Ability Infinity Shooter', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'atkReuse', val: 0.81, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.88, op: 'mul' } ]},
	{ id: 3636, levels: 1, name: 'Dynasty Platinum Plate - Shield Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 2, op: 'sub' },
		{ stat: 'CON', val: 2, op: 'add' },
		{ stat: 'pDef', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'gainHp', val: 1.04, op: 'mul' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'stunVuln', val: 15, op: 'sub' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3637, levels: 1, name: 'Dynasty Platinum Plate - Weapon Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'pAtk', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cAtkAdd', val: 282, op: 'add' },
		{ stat: 'rCrit', val: 0.0295, op: 'basemul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3638, levels: 1, name: 'Dynasty Platinum Plate - Bard', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'pDef', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'DanceMpConsumeRate', val: 0.94, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3639, levels: 1, name: 'Dynasty Platinum Plate - Force Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.94, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3640, levels: 1, name: 'Dynasty Jewel Leather Mail Dagger Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'add' },
		{ stat: 'rEvas', val: 5.3, op: 'add' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'rootVuln', val: 15, op: 'sub' },
		{ stat: 'pAtkSpd', val: 1.0324, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3641, levels: 1, name: 'Dynasty Jewel Leather Mail Bow Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'add' },
		{ stat: 'accCombat', val: 5.3, op: 'add' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0324, op: 'mul' },
		{ stat: 'regMp', val: 1.066, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3642, levels: 1, name: 'Dynasty Jeweled Leather Armor Force Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.94, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3643, levels: 1, name: 'Dynasty Jeweled Leather Armor Weapon Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cAtkAdd', val: 282, op: 'add' },
		{ stat: 'rCrit', val: 0.0295, op: 'basemul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3644, levels: 1, name: 'Dynasty Jeweled Leather Armor Summoner', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 2, op: 'sub' },
		{ stat: 'CON', val: 2, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'pAtk', val: 1.0266, op: 'mul' },
		{ stat: 'pDef', val: 1.0266, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3645, levels: 1, name: 'Dynasty Silver Satin Tunic Healer', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'giveHp', val: 1.22, op: 'mul' },
		{ stat: 'cancel', val: 15, op: 'sub' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3646, levels: 1, name: 'Dynasty Silver Satin Tunic Enchanter', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.94, op: 'mul' },
		{ stat: 'cancel', val: 15, op: 'sub' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3647, levels: 1, name: 'Dynasty Silver Satin Tunic Summoner', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'pAtk', val: 1.033, op: 'mul' },
		{ stat: 'pDef', val: 1.033, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3648, levels: 1, name: 'Dynasty Silver Satin Tunic Human Wizard', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 1, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'add' },
		{ stat: 'MEN', val: 2, op: 'sub' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'mAtk', val: 1.066, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3649, levels: 1, name: 'Beleth\'s Ring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'magicSuccRes', val: 1.12, op: 'mul' },
		{ stat: 'maxHp', val: 105, op: 'add' },
		{ stat: 'derangementProf', val: 10, op: 'add' },
		{ stat: 'derangementVuln', val: 10, op: 'sub' },
		{ stat: 'maxMp', val: 38, op: 'add' },
		{ stat: 'regMp', val: 0.23, op: 'add' },
		{ stat: 'darkRes', val: 30, op: 'add' } ]},
	{ id: 3664, levels: 1, name: 'Red Talisman - Max. CP', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_red', effects: [
		{ stat: 'maxCp', val: 500, op: 'add' } ]},
	{ id: 3665, levels: 2, name: 'Red Talisman - CP Regeneration', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talisman_red', effects: [
		{ stat: 'regCp', val: 1.2, op: 'mul' } ]},
	{ id: 3667, levels: 1, name: 'Yellow Talisman - Damage Transition', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'transDam', val: 10, op: 'add' } ]},
	{ id: 3668, levels: 1, name: 'Zubei\'s Leather Gaiters', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 0.5, op: 'add' } ]},
	{ id: 3670, levels: 1, name: 'Zubei\'s Gauntlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 0.5, op: 'add' } ]},
	{ id: 3671, levels: 1, name: 'Zubei\'s Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 0.5, op: 'add' } ]},
	{ id: 3672, levels: 1, name: 'Zubei\'s Gaiters', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.00655, op: 'mul' },
		{ stat: 'maxHp', val: 36.75, op: 'add' } ]},
	{ id: 3673, levels: 1, name: 'Zubei\'s Gauntlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.00655, op: 'mul' },
		{ stat: 'maxHp', val: 36.75, op: 'add' } ]},
	{ id: 3674, levels: 1, name: 'Zubei\'s Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.00655, op: 'mul' },
		{ stat: 'maxHp', val: 36.75, op: 'add' } ]},
	{ id: 3675, levels: 1, name: 'Zubei\'s Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.00655, op: 'mul' },
		{ stat: 'maxHp', val: 36.75, op: 'add' } ]},
	{ id: 3678, levels: 1, name: 'Stockings of Zubei', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0125, op: 'mul' } ]},
	{ id: 3679, levels: 1, name: 'Zubei\'s Gauntlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0125, op: 'mul' } ]},
	{ id: 3680, levels: 1, name: 'Zubei\'s Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0125, op: 'mul' } ]},
	{ id: 3681, levels: 1, name: 'Zubei\'s Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.01, op: 'mul' } ]},
	{ id: 3682, levels: 1, name: 'Avadon Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 36.75, op: 'add' } ]},
	{ id: 3683, levels: 1, name: 'Avadon Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 36.75, op: 'add' } ]},
	{ id: 3684, levels: 1, name: 'Avadon Circlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 36.75, op: 'add' } ]},
	{ id: 3685, levels: 1, name: 'Avadon Gaiters', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 36.75, op: 'add' } ]},
	{ id: 3687, levels: 1, name: 'Avadon Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.01, op: 'mul' } ]},
	{ id: 3688, levels: 1, name: 'Avadon Circlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.00875, op: 'mul' },
		{ stat: 'maxLoad', val: 965.83, op: 'add' } ]},
	{ id: 3689, levels: 1, name: 'Avadon Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.00875, op: 'mul' },
		{ stat: 'maxLoad', val: 965.83, op: 'add' } ]},
	{ id: 3691, levels: 1, name: 'Avadon Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.00875, op: 'mul' },
		{ stat: 'maxLoad', val: 965.83, op: 'add' } ]},
	{ id: 3692, levels: 1, name: 'Avadon Circlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.008745, op: 'mul' } ]},
	{ id: 3693, levels: 1, name: 'Avadon Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.008745, op: 'mul' } ]},
	{ id: 3695, levels: 1, name: 'Avadon Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.008745, op: 'mul' } ]},
	{ id: 3696, levels: 1, name: 'Doom Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 53.33, op: 'add' },
		{ stat: 'breath', val: 33.33, op: 'add' } ]},
	{ id: 3697, levels: 1, name: 'Doom Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 53.33, op: 'add' },
		{ stat: 'breath', val: 33.33, op: 'add' } ]},
	{ id: 3699, levels: 1, name: 'Doom Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 53.33, op: 'add' },
		{ stat: 'breath', val: 33.33, op: 'add' } ]},
	{ id: 3700, levels: 1, name: 'Doom Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.015, op: 'mul' } ]},
	{ id: 3702, levels: 1, name: 'Doom Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'breath', val: 33.33, op: 'add' },
		{ stat: 'pAtk', val: 1.0045, op: 'mul' },
		{ stat: 'regMp', val: 1.004167, op: 'mul' },
		{ stat: 'poisonVuln', val: 3, op: 'sub' } ]},
	{ id: 3703, levels: 1, name: 'Doom Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'breath', val: 33.33, op: 'add' },
		{ stat: 'pAtk', val: 1.0045, op: 'mul' },
		{ stat: 'regMp', val: 1.004167, op: 'mul' },
		{ stat: 'poisonVuln', val: 3, op: 'sub' } ]},
	{ id: 3704, levels: 1, name: 'Doom Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'breath', val: 33.33, op: 'add' },
		{ stat: 'pAtk', val: 1.0045, op: 'mul' },
		{ stat: 'regMp', val: 1.004167, op: 'mul' },
		{ stat: 'poisonVuln', val: 3, op: 'sub' } ]},
	{ id: 3705, levels: 1, name: 'Doom Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 0.875, op: 'add' },
		{ stat: 'breath', val: 25, op: 'add' },
		{ stat: 'regMp', val: 1.00655, op: 'mul' } ]},
	{ id: 3706, levels: 1, name: 'Doom Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 0.875, op: 'add' },
		{ stat: 'breath', val: 25, op: 'add' },
		{ stat: 'regMp', val: 1.00655, op: 'mul' } ]},
	{ id: 3708, levels: 1, name: 'Stockings of Doom', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 0.875, op: 'add' },
		{ stat: 'breath', val: 25, op: 'add' },
		{ stat: 'regMp', val: 1.00655, op: 'mul' } ]},
	{ id: 3709, levels: 1, name: 'Doom Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 0.875, op: 'add' },
		{ stat: 'breath', val: 25, op: 'add' },
		{ stat: 'regMp', val: 1.00655, op: 'mul' } ]},
	{ id: 3711, levels: 1, name: 'Blue Wolf Gaiters', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 0.875, op: 'add' },
		{ stat: 'regHp', val: 1.00655, op: 'mul' } ]},
	{ id: 3712, levels: 1, name: 'Blue Wolf Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 0.875, op: 'add' },
		{ stat: 'regHp', val: 1.00655, op: 'mul' } ]},
	{ id: 3713, levels: 1, name: 'Blue Wolf Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 0.875, op: 'add' },
		{ stat: 'regHp', val: 1.00655, op: 'mul' } ]},
	{ id: 3714, levels: 1, name: 'Blue Wolf Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'runSpd', val: 0.875, op: 'add' },
		{ stat: 'regHp', val: 1.00655, op: 'mul' } ]},
	{ id: 3716, levels: 1, name: 'Blue Wolf Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.008733, op: 'mul' } ]},
	{ id: 3717, levels: 1, name: 'Blue Wolf Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.008733, op: 'mul' } ]},
	{ id: 3718, levels: 1, name: 'Blue Wolf Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.008733, op: 'mul' } ]},
	{ id: 3719, levels: 1, name: 'Blue Wolf Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 25.75, op: 'add' },
		{ stat: 'regMp', val: 1.00655, op: 'mul' } ]},
	{ id: 3720, levels: 1, name: 'Blue Wolf Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 25.75, op: 'add' },
		{ stat: 'regMp', val: 1.00655, op: 'mul' } ]},
	{ id: 3722, levels: 1, name: 'Blue Wolf Stockings', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 25.75, op: 'add' },
		{ stat: 'regMp', val: 1.00655, op: 'mul' } ]},
	{ id: 3723, levels: 1, name: 'Blue Wolf Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 25.75, op: 'add' },
		{ stat: 'regMp', val: 1.00655, op: 'mul' } ]},
	{ id: 3724, levels: 1, name: 'Dark Crystal Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'gainHp', val: 1.005, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 6, op: 'sub' } ]},
	{ id: 3726, levels: 1, name: 'Dark Crystal Gaiters', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'gainHp', val: 1.005, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 6, op: 'sub' } ]},
	{ id: 3727, levels: 1, name: 'Dark Crystal Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'gainHp', val: 1.005, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 6, op: 'sub' } ]},
	{ id: 3728, levels: 1, name: 'Dark Crystal Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'gainHp', val: 1.005, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 6, op: 'sub' } ]},
	{ id: 3729, levels: 1, name: 'Dark Crystal Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.02, op: 'mul' } ]},
	{ id: 3731, levels: 1, name: 'Dark Crystal Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.005, op: 'mul' },
		{ stat: 'pAtk', val: 1.005, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 6, op: 'sub' } ]},
	{ id: 3732, levels: 1, name: 'Dark Crystal Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.005, op: 'mul' },
		{ stat: 'pAtk', val: 1.005, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 6, op: 'sub' } ]},
	{ id: 3733, levels: 1, name: 'Dark Crystal Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.005, op: 'mul' },
		{ stat: 'pAtk', val: 1.005, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 6, op: 'sub' } ]},
	{ id: 3734, levels: 1, name: 'Dark Crystal Leggings', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.005, op: 'mul' },
		{ stat: 'pAtk', val: 1.005, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 6, op: 'sub' } ]},
	{ id: 3735, levels: 1, name: 'Dark Crystal Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.0133, op: 'mul' },
		{ stat: 'runSpd', val: 1.167, op: 'add' },
		{ stat: 'cancel', val: 8.33, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 6, op: 'sub' } ]},
	{ id: 3737, levels: 1, name: 'Dark Crystal Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.0133, op: 'mul' },
		{ stat: 'runSpd', val: 1.167, op: 'add' },
		{ stat: 'cancel', val: 8.33, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 10, op: 'sub' } ]},
	{ id: 3738, levels: 1, name: 'Dark Crystal Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.0133, op: 'mul' },
		{ stat: 'runSpd', val: 1.167, op: 'add' },
		{ stat: 'cancel', val: 8.33, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 10, op: 'sub' } ]},
	{ id: 3739, levels: 1, name: 'Tallum Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.0133, op: 'mul' },
		{ stat: 'maxLoad', val: 959.83, op: 'add' },
		{ stat: 'poisonVuln', val: 13, op: 'sub' },
		{ stat: 'bleedVuln', val: 13, op: 'sub' } ]},
	{ id: 3740, levels: 1, name: 'Tallum Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.0133, op: 'mul' },
		{ stat: 'maxLoad', val: 959.83, op: 'add' },
		{ stat: 'poisonVuln', val: 13, op: 'sub' },
		{ stat: 'bleedVuln', val: 13, op: 'sub' } ]},
	{ id: 3742, levels: 1, name: 'Tallum Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.0133, op: 'mul' },
		{ stat: 'maxLoad', val: 959.83, op: 'add' },
		{ stat: 'poisonVuln', val: 13, op: 'sub' },
		{ stat: 'bleedVuln', val: 13, op: 'sub' } ]},
	{ id: 3744, levels: 1, name: 'Tallum Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 1.0133, op: 'mul' },
		{ stat: 'maxMp', val: 37, op: 'add' },
		{ stat: 'poisonVuln', val: 13, op: 'sub' },
		{ stat: 'bleedVuln', val: 13, op: 'sub' } ]},
	{ id: 3745, levels: 1, name: 'Tallum Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 1.0133, op: 'mul' },
		{ stat: 'maxMp', val: 37, op: 'add' },
		{ stat: 'poisonVuln', val: 13, op: 'sub' },
		{ stat: 'bleedVuln', val: 13, op: 'sub' } ]},
	{ id: 3746, levels: 1, name: 'Tallum Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 1.0133, op: 'mul' },
		{ stat: 'maxMp', val: 37, op: 'add' },
		{ stat: 'poisonVuln', val: 13, op: 'sub' },
		{ stat: 'bleedVuln', val: 13, op: 'sub' } ]},
	{ id: 3747, levels: 1, name: 'Tallum Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.01, op: 'mul' },
		{ stat: 'poisonVuln', val: 10, op: 'sub' },
		{ stat: 'bleedVuln', val: 10, op: 'sub' } ]},
	{ id: 3748, levels: 1, name: 'Tallum Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.01, op: 'mul' },
		{ stat: 'poisonVuln', val: 10, op: 'sub' },
		{ stat: 'bleedVuln', val: 10, op: 'sub' } ]},
	{ id: 3750, levels: 1, name: 'Tallum Stockings', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.01, op: 'mul' },
		{ stat: 'poisonVuln', val: 10, op: 'sub' },
		{ stat: 'bleedVuln', val: 10, op: 'sub' } ]},
	{ id: 3751, levels: 1, name: 'Tallum Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.01, op: 'mul' },
		{ stat: 'poisonVuln', val: 10, op: 'sub' },
		{ stat: 'bleedVuln', val: 10, op: 'sub' } ]},
	{ id: 3752, levels: 1, name: 'Majestic Gauntlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0067, op: 'mul' },
		{ stat: 'accCombat', val: 0.5, op: 'add' },
		{ stat: 'stunVuln', val: 9, op: 'sub' } ]},
	{ id: 3753, levels: 1, name: 'Majestic Circlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0067, op: 'mul' },
		{ stat: 'accCombat', val: 0.5, op: 'add' },
		{ stat: 'stunVuln', val: 9, op: 'sub' } ]},
	{ id: 3755, levels: 1, name: 'Majestic Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0067, op: 'mul' },
		{ stat: 'accCombat', val: 0.5, op: 'add' },
		{ stat: 'stunVuln', val: 9, op: 'sub' } ]},
	{ id: 3756, levels: 1, name: 'Majestic Gauntlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0133, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'maxMp', val: 40, op: 'add' },
		{ stat: 'maxLoad', val: 959.83, op: 'add' },
		{ stat: 'stunVuln', val: 9, op: 'sub' } ]},
	{ id: 3758, levels: 1, name: 'Majestic Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0133, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'maxMp', val: 40, op: 'add' },
		{ stat: 'maxLoad', val: 959.83, op: 'add' },
		{ stat: 'stunVuln', val: 9, op: 'sub' } ]},
	{ id: 3759, levels: 1, name: 'Majestic Circlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0133, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'maxMp', val: 40, op: 'add' },
		{ stat: 'maxLoad', val: 959.83, op: 'add' },
		{ stat: 'stunVuln', val: 9, op: 'sub' } ]},
	{ id: 3760, levels: 1, name: 'Majestic Gauntlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 40, op: 'add' },
		{ stat: 'regMp', val: 1.0133, op: 'mul' },
		{ stat: 'stunVuln', val: 9, op: 'sub' } ]},
	{ id: 3762, levels: 1, name: 'Majestic Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 40, op: 'add' },
		{ stat: 'regMp', val: 1.0133, op: 'mul' },
		{ stat: 'stunVuln', val: 9, op: 'sub' } ]},
	{ id: 3763, levels: 1, name: 'Majestic Circlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 40, op: 'add' },
		{ stat: 'regMp', val: 1.0133, op: 'mul' },
		{ stat: 'stunVuln', val: 9, op: 'sub' } ]},
	{ id: 3765, levels: 1, name: 'Gauntlet of Nightmare', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0067, op: 'mul' },
		{ stat: 'sleepVuln', val: 12, op: 'sub' },
		{ stat: 'rootVuln', val: 12, op: 'sub' } ]},
	{ id: 3766, levels: 1, name: 'Boots of Nightmare', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0067, op: 'mul' },
		{ stat: 'sleepVuln', val: 12, op: 'sub' },
		{ stat: 'rootVuln', val: 12, op: 'sub' } ]},
	{ id: 3767, levels: 1, name: 'Helm of Nightmare', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0067, op: 'mul' },
		{ stat: 'sleepVuln', val: 12, op: 'sub' },
		{ stat: 'rootVuln', val: 12, op: 'sub' } ]},
	{ id: 3769, levels: 1, name: 'Gauntlet of Nightmare', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0067, op: 'mul' },
		{ stat: 'sleepVuln', val: 12, op: 'sub' },
		{ stat: 'rootVuln', val: 12, op: 'sub' } ]},
	{ id: 3770, levels: 1, name: 'Boots of Nightmare', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0067, op: 'mul' },
		{ stat: 'sleepVuln', val: 12, op: 'sub' },
		{ stat: 'rootVuln', val: 12, op: 'sub' } ]},
	{ id: 3771, levels: 1, name: 'Gauntlet of Nightmare', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 1.0067, op: 'mul' },
		{ stat: 'mAtk', val: 1.0133, op: 'mul' },
		{ stat: 'sleepVuln', val: 12, op: 'sub' },
		{ stat: 'rootVuln', val: 12, op: 'sub' } ]},
	{ id: 3773, levels: 1, name: 'Boots of Nightmare', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 1.0067, op: 'mul' },
		{ stat: 'mAtk', val: 1.0133, op: 'mul' },
		{ stat: 'sleepVuln', val: 12, op: 'sub' },
		{ stat: 'rootVuln', val: 12, op: 'sub' } ]},
	{ id: 3774, levels: 1, name: 'Shield of Nightmare', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.025, op: 'mul' } ]},
	{ id: 3775, levels: 1, name: 'Draconic Leather Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.0067, op: 'mul' },
		{ stat: 'pAtk', val: 1.0067, op: 'mul' },
		{ stat: 'maxMp', val: 48.17, op: 'add' },
		{ stat: 'maxLoad', val: 959.83, op: 'add' } ]},
	{ id: 3776, levels: 1, name: 'Draconic Leather Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.0067, op: 'mul' },
		{ stat: 'pAtk', val: 1.0067, op: 'mul' },
		{ stat: 'maxMp', val: 48.17, op: 'add' },
		{ stat: 'maxLoad', val: 959.83, op: 'add' } ]},
	{ id: 3778, levels: 1, name: 'Draconic Leather Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.0067, op: 'mul' },
		{ stat: 'pAtk', val: 1.0067, op: 'mul' },
		{ stat: 'maxMp', val: 48.17, op: 'add' },
		{ stat: 'maxLoad', val: 959.83, op: 'add' } ]},
	{ id: 3779, levels: 1, name: 'Major Arcana Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0283, op: 'mul' },
		{ stat: 'runSpd', val: 1.167, op: 'add' },
		{ stat: 'cancel', val: 8.33, op: 'sub' },
		{ stat: 'maxLoad', val: 959.83, op: 'add' },
		{ stat: 'stunVuln', val: 9, op: 'sub' } ]},
	{ id: 3781, levels: 1, name: 'Major Arcana Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0283, op: 'mul' },
		{ stat: 'runSpd', val: 1.167, op: 'add' },
		{ stat: 'cancel', val: 8.33, op: 'sub' },
		{ stat: 'maxLoad', val: 959.83, op: 'add' },
		{ stat: 'stunVuln', val: 9, op: 'sub' } ]},
	{ id: 3782, levels: 1, name: 'Major Arcana Circlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0283, op: 'mul' },
		{ stat: 'runSpd', val: 1.167, op: 'add' },
		{ stat: 'cancel', val: 8.33, op: 'sub' },
		{ stat: 'maxLoad', val: 959.83, op: 'add' },
		{ stat: 'stunVuln', val: 9, op: 'sub' } ]},
	{ id: 3783, levels: 1, name: 'Imperial Crusader Gaiters', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.01, op: 'mul' },
		{ stat: 'maxHp', val: 55.63, op: 'add' },
		{ stat: 'sleepVuln', val: 9, op: 'sub' },
		{ stat: 'rootVuln', val: 9, op: 'sub' } ]},
	{ id: 3784, levels: 1, name: 'Imperial Crusader Gauntlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.01, op: 'mul' },
		{ stat: 'maxHp', val: 55.63, op: 'add' },
		{ stat: 'sleepVuln', val: 9, op: 'sub' },
		{ stat: 'rootVuln', val: 9, op: 'sub' } ]},
	{ id: 3785, levels: 1, name: 'Imperial Crusader Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.01, op: 'mul' },
		{ stat: 'maxHp', val: 55.63, op: 'add' },
		{ stat: 'sleepVuln', val: 9, op: 'sub' },
		{ stat: 'rootVuln', val: 9, op: 'sub' } ]},
	{ id: 3786, levels: 1, name: 'Imperial Crusader Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.03, op: 'mul' } ]},
	{ id: 3787, levels: 1, name: 'Imperial Crusader Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.01, op: 'mul' },
		{ stat: 'maxHp', val: 55.63, op: 'add' },
		{ stat: 'sleepVuln', val: 9, op: 'sub' },
		{ stat: 'rootVuln', val: 9, op: 'sub' } ]},
	{ id: 3790, levels: 1, name: 'Dynasty Gaiters', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.00575, op: 'mul' },
		{ stat: 'maxHp', val: 52.25, op: 'add' },
		{ stat: 'darkRes', val: 0.75, op: 'add' } ]},
	{ id: 3791, levels: 1, name: 'Dynasty Gauntlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.00575, op: 'mul' },
		{ stat: 'maxHp', val: 52.25, op: 'add' },
		{ stat: 'darkRes', val: 0.75, op: 'add' } ]},
	{ id: 3792, levels: 1, name: 'Dynasty Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.00575, op: 'mul' },
		{ stat: 'maxHp', val: 52.25, op: 'add' },
		{ stat: 'darkRes', val: 0.75, op: 'add' } ]},
	{ id: 3793, levels: 1, name: 'Dynasty Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'magicDamVul', val: 0.95, op: 'mul' } ]},
	{ id: 3794, levels: 1, name: 'Dynasty Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.00575, op: 'mul' },
		{ stat: 'maxHp', val: 52.25, op: 'add' },
		{ stat: 'darkRes', val: 0.75, op: 'add' } ]},
	{ id: 3796, levels: 1, name: 'Dynasty Leather Leggings', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 0.215, op: 'add' },
		{ stat: 'rEvas', val: 0.215, op: 'add' },
		{ stat: 'maxHp', val: 52.25, op: 'add' },
		{ stat: 'darkRes', val: 0.75, op: 'add' } ]},
	{ id: 3797, levels: 1, name: 'Dynasty Leather Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 0.215, op: 'add' },
		{ stat: 'rEvas', val: 0.215, op: 'add' },
		{ stat: 'maxHp', val: 52.25, op: 'add' },
		{ stat: 'darkRes', val: 0.75, op: 'add' } ]},
	{ id: 3798, levels: 1, name: 'Dynasty Leather Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 0.215, op: 'add' },
		{ stat: 'rEvas', val: 0.215, op: 'add' },
		{ stat: 'maxHp', val: 52.25, op: 'add' },
		{ stat: 'darkRes', val: 0.75, op: 'add' } ]},
	{ id: 3800, levels: 1, name: 'Dynasty Stockings', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 32.125, op: 'add' },
		{ stat: 'darkRes', val: 0.75, op: 'add' } ]},
	{ id: 3801, levels: 1, name: 'Dynasty Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 32.125, op: 'add' },
		{ stat: 'darkRes', val: 0.75, op: 'add' } ]},
	{ id: 3802, levels: 1, name: 'Dynasty Shoes', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 32.125, op: 'add' },
		{ stat: 'darkRes', val: 0.75, op: 'add' } ]},
	{ id: 3803, levels: 1, name: 'Dynasty Circlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 32.125, op: 'add' },
		{ stat: 'darkRes', val: 0.75, op: 'add' } ]},
	{ id: 3807, levels: 1, name: 'Adamantite Earring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 11, op: 'add' } ]},
	{ id: 3808, levels: 1, name: 'Adamantite Necklace', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: 2, op: 'sub' } ]},
	{ id: 3809, levels: 1, name: 'Adamantite Ring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 1.0040, op: 'mul' } ]},
	{ id: 3810, levels: 1, name: 'Earring of Black Ore', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'darkRes', val: 40, op: 'add' } ]},
	{ id: 3811, levels: 1, name: 'Necklace of Black Ore', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: 4, op: 'sub' } ]},
	{ id: 3812, levels: 1, name: 'Ring of Black Ore', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 7, op: 'add' } ]},
	{ id: 3813, levels: 1, name: 'Phoenix Necklace', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 21, op: 'add' } ]},
	{ id: 3814, levels: 1, name: 'Phoenix Ring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 1.0071, op: 'mul' } ]},
	{ id: 3815, levels: 1, name: 'Phoenix Earring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.01, op: 'mul' } ]},
	{ id: 3816, levels: 1, name: 'Majestic Necklace', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.01, op: 'mul' } ]},
	{ id: 3817, levels: 1, name: 'Majestic Ring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 11, op: 'add' } ]},
	{ id: 3818, levels: 1, name: 'Majestic Earring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poisonVuln', val: 6, op: 'sub' } ]},
	{ id: 3819, levels: 1, name: 'Tateossian Necklace', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bleedVuln', val: 8, op: 'sub' } ]},
	{ id: 3820, levels: 1, name: 'Tateossian Ring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'earthRes', val: 1.14, op: 'add' } ]},
	{ id: 3821, levels: 1, name: 'Tateossian Earring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 20, op: 'add' } ]},
	{ id: 3822, levels: 1, name: 'Dynasty Necklace', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 30, op: 'add' } ]},
	{ id: 3823, levels: 1, name: 'Dynasty Ring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'darkRes', val: 1.14, op: 'add' } ]},
	{ id: 3824, levels: 1, name: 'Dynasty Earring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sleepVuln', val: 5, op: 'sub' } ]},
	{ id: 3825, levels: 3, name: 'Sword of Might', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [60, 70, 80], op: 'add' } ]},
	{ id: 3826, levels: 2, name: 'Sword of Boost HP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: [319, 444], op: 'add' } ]},
	{ id: 3827, levels: 1, name: 'Sword of Critical Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: 54, op: 'add' } ]},
	{ id: 3828, levels: 1, name: 'Sword of Critical Chance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: 55, op: 'add' } ]},
	{ id: 3830, levels: 3, name: 'Rapier of Might', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [60, 70, 80], op: 'add' } ]},
	{ id: 3831, levels: 2, name: 'Rapier of Boost HP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: [319, 444], op: 'add' } ]},
	{ id: 3832, levels: 1, name: 'Rapier of Critical Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: 100, op: 'add' } ]},
	{ id: 3833, levels: 1, name: 'Rapier of Critical Chance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: 55, op: 'add' } ]},
	{ id: 3835, levels: 3, name: 'Dual-Blade Weapon of Might', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [60, 70, 80], op: 'add' } ]},
	{ id: 3836, levels: 2, name: 'Dual-Blade Weapon of Boost HP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: [319, 444], op: 'add' } ]},
	{ id: 3837, levels: 1, name: 'Dual-Blade Weapon of Critical Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: 100, op: 'add' } ]},
	{ id: 3838, levels: 1, name: 'Dual-Blade Weapon of Critical Chance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: 55, op: 'add' } ]},
	{ id: 3840, levels: 2, name: 'Two-handed Sword of Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 19, op: 'add' } ]},
	{ id: 3841, levels: 1, name: 'Two-handed Sword of Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 2, op: 'add' } ]},
	{ id: 3842, levels: 1, name: 'Two-handed Sword of Vampiric Rage', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'absorbDam', val: 2, op: 'add' } ]},
	{ id: 3843, levels: 1, name: 'Two-handed Sword of Boost HP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 319, op: 'add' } ]},
	{ id: 3844, levels: 1, name: 'Two-handed Sword of Critical Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: 200, op: 'add' } ]},
	{ id: 3847, levels: 1, name: 'Ancient Sword of Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 2, op: 'add' } ]},
	{ id: 3848, levels: 1, name: 'Ancient Sword of Vampiric Rage', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'absorbDam', val: 2, op: 'add' } ]},
	{ id: 3849, levels: 1, name: 'Ancient Sword of Boost HP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 319, op: 'add' } ]},
	{ id: 3850, levels: 1, name: 'Ancient Sword of Critical Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: 200, op: 'add' } ]},
	{ id: 3851, levels: 2, name: 'Ancient Sword of Critical Chance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [10, 30], op: 'add' } ]},
	{ id: 3852, levels: 3, name: 'Sword of Mana Boost', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: [100, 200, 300], op: 'add' } ]},
	{ id: 3853, levels: 2, name: 'Sword of Mana Regeneration', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: [1.05, 1.1], op: 'mul' } ]},
	{ id: 3854, levels: 1, name: 'Sword of Empower', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 100, op: 'add' } ]},
	{ id: 3856, levels: 1, name: 'Sword of Divine Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'giveHp', val: 1.15, op: 'mul' } ]},
	{ id: 3858, levels: 3, name: 'Dagger of Avoid', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: [3, 4, 5], op: 'add' } ]},
	{ id: 3860, levels: 1, name: 'Dagger of Regeneration', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regHp', val: 1.1, op: 'mul' } ]},
	{ id: 3862, levels: 1, name: 'Dagger of Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 3, op: 'add' } ]},
	{ id: 3863, levels: 4, name: 'Bow of Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: [1, 2, 3, 4], op: 'add' } ]},
	{ id: 3865, levels: 1, name: 'Bow of Long Shot', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkRange', val: 100, op: 'add', using: 'Bow' } ]},
	{ id: 3866, levels: 1, name: 'Dynasty Leather Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 0.215, op: 'add' },
		{ stat: 'rEvas', val: 0.215, op: 'add' },
		{ stat: 'maxHp', val: 52.25, op: 'add' },
		{ stat: 'darkRes', val: 0.75, op: 'add' } ]},
	{ id: 3867, levels: 1, name: 'Bow of Boost HP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 319, op: 'add' } ]},
	{ id: 3868, levels: 4, name: 'Crossbow of Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: [1, 2, 3, 4], op: 'add' } ]},
	{ id: 3870, levels: 1, name: 'Crossbow of Long Shot', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkRange', val: 100, op: 'add', using: 'Crossbow' } ]},
	{ id: 3872, levels: 1, name: 'Crossbow of Boost HP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 319, op: 'add' } ]},
	{ id: 3874, levels: 1, name: 'Polearm of Critical Chance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: 45, op: 'add' } ]},
	{ id: 3877, levels: 2, name: 'Polearm of Boost HP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: [319, 444], op: 'add' } ]},
	{ id: 3878, levels: 1, name: 'Polearm of Might', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 75, op: 'add' } ]},
	{ id: 3879, levels: 3, name: 'Fist Weapon of Might', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [60, 70, 80], op: 'add' } ]},
	{ id: 3881, levels: 1, name: 'Fist Weapon of Boost HP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 319, op: 'add' } ]},
	{ id: 3883, levels: 1, name: 'Fist Weapon of Critical Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: 75, op: 'add' } ]},
	{ id: 3884, levels: 3, name: 'Blunt Weapon of Boost HP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: [319, 444, 539], op: 'add' } ]},
	{ id: 3886, levels: 1, name: 'Blunt Weapon of Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 60, op: 'add' } ]},
	{ id: 3887, levels: 1, name: 'Blunt Weapon of Regeneration', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regHp', val: 1.1, op: 'mul' } ]},
	{ id: 3888, levels: 1, name: 'Blunt Weapon of Guidance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 3, op: 'add' } ]},
	{ id: 3889, levels: 3, name: 'Blunt Weapon of Empower', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: [100, 120, 140], op: 'add' } ]},
	{ id: 3890, levels: 1, name: 'Blunt Weapon of Mana Boost', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 300, op: 'add' } ]},
	{ id: 3892, levels: 1, name: 'Blunt Weapon of Clarity', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 3893, levels: 1, name: 'Blunt Weapon of Mana Regeneration', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 1.1, op: 'mul' } ]},
	{ id: 3894, levels: 1, name: 'Two-handed Blunt Weapon of Critical Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtkAdd', val: 615, op: 'add' } ]},
	{ id: 3895, levels: 3, name: 'Two-handed Blunt Weapon of Critical Chance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [35, 45, 55], op: 'add' } ]},
	{ id: 3897, levels: 1, name: 'Two-handed Blunt Weapon of Might', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 60, op: 'add' } ]},
	{ id: 3899, levels: 3, name: 'Staff of Empower', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: [100, 120, 140], op: 'add' } ]},
	{ id: 3901, levels: 2, name: 'Staff of Mana Boost', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: [200, 300], op: 'add' } ]},
	{ id: 4003, levels: 1, name: 'Golem Body', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bowWpnVuln', val: 0.2, op: 'mul' },
		{ stat: 'daggerWpnVuln', val: 0.7, op: 'mul' },
		{ stat: 'bluntWpnVuln', val: 1.1, op: 'mul' } ]},
	{ id: 4004, levels: 1, name: 'Fragile Skull', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bluntWpnVuln', val: 1.1, op: 'mul' } ]},
	{ id: 4005, levels: 1, name: 'Floating Target', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'windRes', val: 15, op: 'sub' },
		{ stat: 'bowWpnVuln', val: 1.1, op: 'mul' } ]},
	{ id: 4006, levels: 1, name: 'Burning Wood', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: 15, op: 'sub' },
		{ stat: 'poisonVuln', val: 50, op: 'sub' } ]},
	{ id: 4007, levels: 1, name: 'Immortal Life', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'holyRes', val: 20, op: 'add' },
		{ stat: 'holyPower', val: 20, op: 'add' } ]},
	{ id: 4008, levels: 1, name: 'Insect Skin', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: 15, op: 'sub' } ]},
	{ id: 4009, levels: 6, name: 'Resist Fire', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: [15, 30, 50, 70, 90, 100], op: 'add' } ]},
	{ id: 4010, levels: 6, name: 'Resist Water', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'waterRes', val: [15, 30, 50, 70, 90, 100], op: 'add' } ]},
	{ id: 4011, levels: 6, name: 'Resist Wind', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'windRes', val: [15, 30, 50, 70, 90, 100], op: 'add' } ]},
	{ id: 4012, levels: 1, name: 'Resist Earth', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'earthRes', val: [15, 30, 50, 70, 90, 100], op: 'add' } ]},
	{ id: 4013, levels: 1, name: 'Resistance To Fire, Vulnerable To Water', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: 50, op: 'add' },
		{ stat: 'waterRes', val: 15, op: 'sub' } ]},
	{ id: 4014, levels: 1, name: 'Resistance To Water, Vulnerable To Fire', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'waterRes', val: 50, op: 'add' },
		{ stat: 'fireRes', val: 15, op: 'sub' } ]},
	{ id: 4015, levels: 1, name: 'Resistance To Wind, Vulnerable To Earth', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'windRes', val: 50, op: 'add' },
		{ stat: 'earthRes', val: 15, op: 'sub' } ]},
	{ id: 4016, levels: 1, name: 'Resistance To Earth, Vulnerable To Wind', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'earthRes', val: 50, op: 'add' },
		{ stat: 'windRes', val: 15, op: 'sub' } ]},
	{ id: 4021, levels: 1, name: 'Queen Ant', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: 50, op: 'sub' },
		{ stat: 'bowWpnVuln', val: 0.2, op: 'mul' } ]},
	{ id: 4028, levels: 3, name: 'NPC Might', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4029, levels: 3, name: 'NPC Shield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4030, levels: 3, name: 'NPC Clan Might', target: 'TARGET_CLAN_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4031, levels: 3, name: 'NPC Clan Aegis', target: 'TARGET_CLAN_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4045, levels: 1, name: 'Resist Full Magic Attack', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: 90, op: 'sub' },
		{ stat: 'sleepVuln', val: 90, op: 'sub' },
		{ stat: 'stunVuln', val: 90, op: 'sub' },
		{ stat: 'confusionVuln', val: 100, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 90, op: 'sub' },
		{ stat: 'derangementVuln', val: 100, op: 'sub' } ]},
	{ id: 4048, levels: 3, name: 'NPC Dash', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up_special', effects: [
		{ stat: 'runSpd', val: [1.5, 1.8, 2], op: 'mul' } ]},
	{ id: 4057, levels: 1, name: 'Insect Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef-insects', val: 1.15, op: 'mul' } ]},
	{ id: 4058, levels: 1, name: 'Plant Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef-animals', val: 1.15, op: 'mul' } ]},
	{ id: 4059, levels: 1, name: 'Animal Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef-plants', val: 1.15, op: 'mul' } ]},
	{ id: 4060, levels: 1, name: 'Beast Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef-monsters', val: 1.15, op: 'mul' } ]},
	{ id: 4061, levels: 1, name: 'Dragon Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef-dragons', val: 1.15, op: 'mul' } ]},
	{ id: 4062, levels: 1, name: 'Orfen', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: 100, op: 'sub' },
		{ stat: 'bowWpnVuln', val: 0.2, op: 'mul' } ]},
	{ id: 4071, levels: 6, name: 'Resist Bow/Crossbow Weapons', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bowWpnVuln', val: [0.85, 0.7, 0.5, 0.3, 0.1, 0], op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: [0.85, 0.7, 0.5, 0.3, 0.1, 0], op: 'mul' } ]},
	{ id: 4074, levels: 2, name: 'NPC Haste', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 4084, levels: 10, name: 'Resist Physical Attack', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [1.05, 1.11, 1.17, 1.25, 1.33, 1.43, 1.67, 2, 3.33, 10], op: 'mul' } ]},
	{ id: 4085, levels: 1, name: 'Critical Power', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'cAtk', val: 1.25, op: 'mul' } ]},
	{ id: 4086, levels: 1, name: 'Critical Chance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: 0.5, op: 'basemul' } ]},
	{ id: 4089, levels: 1, name: 'NPC Bear Spirit Totem', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'possession', effects: [
		{ stat: 'pAtk', val: 1.2, op: 'mul' },
		{ stat: 'cAtk', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 0.7, op: 'mul' } ]},
	{ id: 4090, levels: 1, name: 'NPC Wolf Spirit Totem', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'possession', effects: [
		{ stat: 'runSpd', val: 1.2, op: 'mul' },
		{ stat: 'accCombat', val: 3, op: 'add' } ]},
	{ id: 4091, levels: 1, name: 'NPC Ogre Spirit Totem', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Grow', stackType: 'possession', effects: [
		{ stat: 'pAtk', val: 1.3, op: 'mul' },
		{ stat: 'pDef', val: 1.3, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'cAtk', val: 1.1, op: 'mul' } ]},
	{ id: 4092, levels: 1, name: 'NPC Puma Spirit Totem', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Grow', stackType: 'possession', effects: [
		{ stat: 'accCombat', val: 6, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' } ]},
	{ id: 4093, levels: 1, name: 'Evasion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 4096, levels: 3, name: 'NPC Hawkeye', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'HawkEye', effects: [
		{ stat: 'accCombat', val: [6, 8, 10], op: 'add' },
		{ stat: 'pDef', val: [0.9, 0.9, 0.9], op: 'mul' } ]},
	{ id: 4099, levels: 2, name: 'NPC Berserk', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'berserk', effects: [
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' } ]},
	{ id: 4103, levels: 2, name: 'NPC Ultimate Evasion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'avoid_up_special', effects: [
		{ stat: 'rEvas', val: [20, 25], op: 'add' } ]},
	{ id: 4116, levels: 10, name: 'Resist M. Atk.', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: [1.05, 1.11, 1.17, 1.25, 1.33, 1.43, 1.67, 2, 3.33, 10], op: 'mul' } ]},
	{ id: 4121, levels: 12, name: 'Summoned Monster Magic Protection', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'derangementVuln', val: 100, op: 'sub' } ]},
	{ id: 4122, levels: 1, name: 'Antharas', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'windRes', val: 50, op: 'sub' },
		{ stat: 'earthRes', val: 95, op: 'add' } ]},
	{ id: 4125, levels: 1, name: 'Antharas Regeneration', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'regHp', val: 0.05, op: 'mul' } ]},
	{ id: 4126, levels: 1, name: 'Reduction in recovery time', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'public_slot', effects: [
		{ stat: 'pReuse', val: 0.01, op: 'mul' } ]},
	{ id: 4163, levels: 12, name: 'NPC Self-Damage Shield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'DmgShield', effects: [
		{ stat: 'reflectDam', val: 20, op: 'add' } ]},
	{ id: 4173, levels: 12, name: 'BOSS Might', target: 'TARGET_CLAN_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.5, op: 'mul' } ]},
	{ id: 4174, levels: 12, name: 'BOSS Shield', target: 'TARGET_CLAN_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.5, op: 'mul' } ]},
	{ id: 4175, levels: 12, name: 'BOSS Haste', target: 'TARGET_CLAN_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.5, op: 'mul' } ]},
	{ id: 4211, levels: 12, name: 'BOSS Might', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.5, op: 'mul' } ]},
	{ id: 4212, levels: 12, name: 'BOSS Shield', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.5, op: 'mul' } ]},
	{ id: 4213, levels: 12, name: 'BOSS Haste', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.5, op: 'mul' } ]},
	{ id: 4223, levels: 1, name: 'Face Chance: Night to Day', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff' },
	{ id: 4225, levels: 6, name: 'Resist Stun Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: [15, 30, 50, 70, 90, 100], op: 'sub' } ]},
	{ id: 4226, levels: 1, name: 'Ban Heal', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'gainHp', val: 0, op: 'mul' } ]},
	{ id: 4227, levels: 1, name: 'Zaken Regeneration', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: 20, op: 'mul' } ]},
	{ id: 4233, levels: 1, name: 'Vampiric Attack', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'absorbDam', val: 15, op: 'add' } ]},
	{ id: 4239, levels: 1, name: 'Antharas Regeneration', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'regHp', val: 0.4, op: 'mul' } ]},
	{ id: 4240, levels: 1, name: 'Antharas Regeneration', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'regHp', val: 0.7, op: 'mul' } ]},
	{ id: 4241, levels: 1, name: 'Antharas Regeneration', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'regHp', val: 1, op: 'mul' } ]},
	{ id: 4245, levels: 1, name: 'Mimic of Wrath', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'public_slot', effects: [
		{ stat: 'pAtkSpd', val: 1.42, op: 'mul' },
		{ stat: 'pDef', val: 1.76, op: 'mul' },
		{ stat: 'mDef', val: 1.76, op: 'mul' } ]},
	{ id: 4246, levels: 1, name: 'Strong in \'nan\' activity magic DOT', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bowWpnVuln', val: 0.5, op: 'mul' },
		{ stat: 'mDef', val: 2, op: 'mul' },
		{ stat: 'bleedVuln', val: 50, op: 'sub' } ]},
	{ id: 4256, levels: 1, name: '100% Stun Resistance.', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: 100, op: 'sub' } ]},
	{ id: 4262, levels: 1, name: 'Holiday Wind Walk', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 4263, levels: 1, name: 'Holiday Haste', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 4264, levels: 1, name: 'Holiday Empower', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.55, op: 'mul' } ]},
	{ id: 4265, levels: 1, name: 'Holiday Might', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 4266, levels: 1, name: 'Holiday Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 4270, levels: 4, name: 'Weight Penalty', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regHp', val: [0.5, 0.5, 0.5, 0.5], op: 'mul' },
		{ stat: 'regMp', val: [0.5, 0.5, 0.5, 0.5], op: 'mul' },
		{ stat: 'runSpd', val: [1, 0.5, 0.5, 0], op: 'mul' } ]},
	{ id: 4272, levels: 1, name: 'Higher Resist Bow/Crossbow Weapons', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bowWpnVuln', val: 0.3, op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: 0.3, op: 'mul' } ]},
	{ id: 4273, levels: 6, name: 'Resist Daggers/Rapier Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'daggerWpnVuln', val: [0.85, 0.7, 0.5, 0.3, 0.1, 0], op: 'mul' },
		{ stat: 'rapierWpnVuln', val: [0.85, 0.7, 0.5, 0.3, 0.1, 0], op: 'mul' } ]},
	{ id: 4274, levels: 5, name: 'Blunt Weapon Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bluntWpnVuln', val: [1.1, 1.15, 1.2, 1.3, 1.5], op: 'mul' } ]},
	{ id: 4275, levels: 5, name: 'Sacred Attack Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'holyRes', val: [10, 15, 20, 30, 50], op: 'sub' } ]},
	{ id: 4276, levels: 5, name: 'Weak Point against Bow/Crossbow Weapons', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bowWpnVuln', val: [1.1, 1.15, 1.2, 1.3, 1.5], op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: [1.1, 1.15, 1.2, 1.3, 1.5], op: 'mul' } ]},
	{ id: 4277, levels: 6, name: 'Resist Poison Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poisonVuln', val: [15, 30, 50, 70, 90, 100], op: 'sub' } ]},
	{ id: 4278, levels: 1, name: 'Dark Attack', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'darkPower', val: 10, op: 'add' } ]},
	{ id: 4279, levels: 5, name: 'Fire Attack Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: [10, 15, 20, 30, 50], op: 'sub' } ]},
	{ id: 4280, levels: 5, name: 'Water Attack Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'waterRes', val: [10, 15, 20, 30, 50], op: 'sub' } ]},
	{ id: 4281, levels: 5, name: 'Wind Attack Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'windRes', val: [10, 15, 20, 30, 50], op: 'sub' } ]},
	{ id: 4282, levels: 5, name: 'Earth Attack Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'earthRes', val: [10, 15, 20, 30, 50], op: 'sub' } ]},
	{ id: 4283, levels: 1, name: 'Greater Resist Magic Attack', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 2, op: 'mul' } ]},
	{ id: 4284, levels: 6, name: 'Resist Bleed Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bleedVuln', val: [15, 30, 50, 70, 90, 100], op: 'sub' } ]},
	{ id: 4285, levels: 6, name: 'Resist Sleep Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sleepVuln', val: [15, 30, 50, 70, 90, 100], op: 'sub' } ]},
	{ id: 4286, levels: 1, name: 'Greater Resist Sleep', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sleepVuln', val: 50, op: 'sub' } ]},
	{ id: 4287, levels: 6, name: 'Resist Hold Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: [15, 30, 50, 70, 90, 100], op: 'sub' } ]},
	{ id: 4288, levels: 1, name: 'Greater Resist Hold', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: 50, op: 'sub' } ]},
	{ id: 4303, levels: 1, name: 'Strong Type', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 2, op: 'mul' } ]},
	{ id: 4304, levels: 1, name: 'Strong Type', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 3, op: 'mul' } ]},
	{ id: 4305, levels: 1, name: 'Strong Type', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 4, op: 'mul' } ]},
	{ id: 4306, levels: 1, name: 'Strong Type', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 5, op: 'mul' } ]},
	{ id: 4307, levels: 1, name: 'Strong Type', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 6, op: 'mul' } ]},
	{ id: 4308, levels: 1, name: 'Strong Type', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 7, op: 'mul' } ]},
	{ id: 4309, levels: 1, name: 'Strong Type', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 8, op: 'mul' } ]},
	{ id: 4310, levels: 1, name: 'Strong Type', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 9, op: 'mul' } ]},
	{ id: 4311, levels: 1, name: 'Feeble Type', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: 0.5, op: 'mul' } ]},
	{ id: 4312, levels: 1, name: 'Heavy Armor', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 20, op: 'add' } ]},
	{ id: 4313, levels: 1, name: 'Light Armor', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 20, op: 'add' } ]},
	{ id: 4317, levels: 5, name: 'Increase Rage Might', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4318, levels: 1, name: 'Ultimate Buff', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Grow', effects: [
		{ stat: 'pAtk', val: 1.83, op: 'mul' },
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'add' },
		{ stat: 'pDef', val: 1.83, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' },
		{ stat: 'rCrit', val: 0.3, op: 'basemul' },
		{ stat: 'mDef', val: 5, op: 'mul' } ]},
	{ id: 4322, levels: 1, name: 'Adventurer\'s Wind Walk', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 4323, levels: 1, name: 'Adventurer\'s Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 4324, levels: 1, name: 'Adventurer\'s Bless the Body', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 4325, levels: 1, name: 'Adventurer\'s Vampiric Rage', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 4326, levels: 1, name: 'Adventurer\'s Regeneration', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: 1.2, op: 'mul' } ]},
	{ id: 4327, levels: 1, name: 'Adventurer\'s Haste', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 4328, levels: 1, name: 'Adventurer\'s Bless the Soul', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 4329, levels: 1, name: 'Adventurer\'s Acumen', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 4330, levels: 1, name: 'Adventurer\'s Concentration', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Concentration', effects: [
		{ stat: 'cancel', val: 18, op: 'sub' } ]},
	{ id: 4331, levels: 1, name: 'Adventurer\'s Empower', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.55, op: 'mul' } ]},
	{ id: 4332, levels: 1, name: 'Mental Aegis', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: 100, op: 'sub' },
		{ stat: 'sleepVuln', val: 100, op: 'sub' },
		{ stat: 'confusionVuln', val: 100, op: 'sub' } ]},
	{ id: 4333, levels: 6, name: 'Resist Dark Attack', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'darkRes', val: [15, 30, 50, 70, 90, 100], op: 'add' } ]},
	{ id: 4335, levels: 1, name: 'Sacred Attack', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'holyPower', val: 10, op: 'add' } ]},
	{ id: 4336, levels: 5, name: 'Dark Attack Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'darkRes', val: [10, 15, 20, 30, 50], op: 'sub' } ]},
	{ id: 4337, levels: 6, name: 'Resist Sacred Attack', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'holyRes', val: [15, 30, 50, 70, 90, 100], op: 'add' } ]},
	{ id: 4340, levels: 1, name: 'Ultimate Buff, 2nd', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Grow', effects: [
		{ stat: 'pAtk', val: 5, op: 'mul' } ]},
	{ id: 4341, levels: 1, name: 'Ultimate Buff, 3rd', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Grow', effects: [
		{ stat: 'pDef', val: 5, op: 'mul' } ]},
	{ id: 4342, levels: 2, name: 'Clan Hall: Wind Walk', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [20, 33], op: 'add' } ]},
	{ id: 4343, levels: 3, name: 'Clan Hall: Decrease Weight', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Weight', effects: [
		{ stat: 'maxLoad', val: [3000, 6000, 9000], op: 'add' } ]},
	{ id: 4344, levels: 3, name: 'Clan Hall: Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4345, levels: 3, name: 'Clan Hall: Might', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4346, levels: 4, name: 'Clan Hall: Mental Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MentalShield', effects: [
		{ stat: 'rootVuln', val: [20, 30, 40, 50], op: 'sub' },
		{ stat: 'sleepVuln', val: [20, 30, 40, 50], op: 'sub' },
		{ stat: 'confusionVuln', val: [20, 30, 40, 50], op: 'sub' },
		{ stat: 'derangementVuln', val: [20, 30, 40, 50], op: 'sub' } ]},
	{ id: 4347, levels: 6, name: 'Clan Hall: Blessed Body', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4348, levels: 6, name: 'Clan Hall: Blessed Soul', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4349, levels: 2, name: 'Clan Hall: Magic Barrier', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: [1.23, 1.3], op: 'mul' } ]},
	{ id: 4350, levels: 4, name: 'Clan Hall: Resist Shock', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ShockVuln', effects: [
		{ stat: 'stunVuln', val: [15, 20, 30, 40], op: 'sub' } ]},
	{ id: 4351, levels: 6, name: 'Clan Hall: Concentration', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Concentration', effects: [
		{ stat: 'cancel', val: [18, 25, 36, 42, 48, 53], op: 'sub' } ]},
	{ id: 4352, levels: 2, name: 'Clan Hall: Berserker Spirit', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'berserk', effects: [
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'rEvas', val: [2, 4], op: 'sub' } ]},
	{ id: 4353, levels: 6, name: 'Clan Hall: Bless Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'shieldProbUp', effects: [
		{ stat: 'rShld', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3], op: 'mul' } ]},
	{ id: 4354, levels: 4, name: 'Clan Hall: Vampiric Rage', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: [6, 7, 8, 9], op: 'add' } ]},
	{ id: 4355, levels: 3, name: 'Clan Hall: Acumen', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 4356, levels: 3, name: 'Clan Hall: Empower', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' } ]},
	{ id: 4357, levels: 2, name: 'Clan Hall: Haste', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 4358, levels: 3, name: 'Clan Hall: Guidance', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add' } ]},
	{ id: 4359, levels: 3, name: 'Clan Hall: Focus', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.2, 0.25, 0.3], op: 'basemul' } ]},
	{ id: 4360, levels: 3, name: 'Clan Hall: Death Whisper', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4364, levels: 2, name: 'Blessing of Revelations', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'maxLoad', val: 1.25, op: 'mul' },
		{ stat: 'poisonVuln', val: 25, op: 'sub' },
		{ stat: 'bleedVuln', val: 25, op: 'sub' },
		{ stat: 'rootVuln', val: [0, 25], op: 'sub' },
		{ stat: 'stunVuln', val: [0, 25], op: 'sub' },
		{ stat: 'paralyzeVuln', val: [0, 25], op: 'sub' } ]},
	{ id: 4365, levels: 2, name: 'Blessing of Revelations', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'cancel', val: 25, op: 'sub' },
		{ stat: 'rootVuln', val: 25, op: 'sub' },
		{ stat: 'derangementVuln', val: 25, op: 'sub' },
		{ stat: 'stunVuln', val: [0, 25], op: 'sub' },
		{ stat: 'paralyzeVuln', val: [0, 25], op: 'sub' } ]},
	{ id: 4366, levels: 1, name: 'Blessing of Prophecy', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Weight', effects: [
		{ stat: 'maxLoad', val: 1.25, op: 'mul' },
		{ stat: 'poisonVuln', val: 25, op: 'sub' },
		{ stat: 'bleedVuln', val: 25, op: 'sub' } ]},
	{ id: 4376, levels: 1, name: 'Strong Resistance to P. Atk.', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 3, op: 'mul' } ]},
	{ id: 4379, levels: 6, name: 'Resist Spear Weapons', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poleWpnVuln', val: [0.85, 0.7, 0.5, 0.3, 0.1, 0], op: 'mul' } ]},
	{ id: 4384, levels: 1, name: 'Scapegoat\'s Grace', target: 'TARGET_AREA', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_down' },
	{ id: 4385, levels: 1, name: 'Scapegoat\'s Grace', target: 'TARGET_AREA', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_up' },
	{ id: 4386, levels: 1, name: 'Scapegoat\'s Grace', target: 'TARGET_AREA', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'poison' },
	{ id: 4387, levels: 1, name: 'Scapegoat\'s Grace', target: 'TARGET_AREA', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'heal_effect_down' },
	{ id: 4388, levels: 6, name: 'Resist Paralysis Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'paralyzeVuln', val: [15, 30, 50, 70, 90, 100], op: 'sub' } ]},
	{ id: 4389, levels: 6, name: 'Resist Mental Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'confusionVuln', val: [15, 30, 50, 70, 90, 100], op: 'sub' } ]},
	{ id: 4390, levels: 1, name: 'NPC Abnormal Immunity', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'buffVuln', val: 0, op: 'mul' },
		{ stat: 'debuffVuln', val: 0, op: 'mul' } ]},
	{ id: 4391, levels: 2, name: 'Wind Walk', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [20, 33], op: 'add' } ]},
	{ id: 4392, levels: 3, name: 'Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4393, levels: 3, name: 'Might', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4394, levels: 6, name: 'Blessed Body', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4395, levels: 6, name: 'Blessed Soul', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4396, levels: 2, name: 'Magic Barrier', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: [1.23, 1.3], op: 'mul' } ]},
	{ id: 4397, levels: 2, name: 'Berserker Spirit', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'berserk', effects: [
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'rEvas', val: [2, 4], op: 'sub' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' } ]},
	{ id: 4398, levels: 6, name: 'Bless Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'shieldProbUp', effects: [
		{ stat: 'rShld', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3], op: 'mul' } ]},
	{ id: 4399, levels: 4, name: 'Vampiric Rage', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: [6, 7, 8, 9], op: 'add' } ]},
	{ id: 4400, levels: 3, name: 'Acumen', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 4401, levels: 3, name: 'Empower', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' } ]},
	{ id: 4402, levels: 2, name: 'Haste', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 4403, levels: 3, name: 'Guidance', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add' } ]},
	{ id: 4404, levels: 3, name: 'Focus', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.2, 0.25, 0.3], op: 'basemul' } ]},
	{ id: 4405, levels: 3, name: 'Death Whisper', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4406, levels: 3, name: 'Agility', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'avoid_up', effects: [
		{ stat: 'rEvas', val: [2, 3, 4], op: 'add' } ]},
	{ id: 4408, levels: 20, name: 'HP Modifiers', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxHp', val: [1, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 0.25, 0.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], op: 'mul' } ]},
	{ id: 4409, levels: 20, name: 'MP Modifiers', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: [1, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 0.25, 0.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], op: 'mul' } ]},
	{ id: 4410, levels: 22, name: 'P. Atk. Modifiers', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [0.75, 0.77, 0.8, 0.83, 0.85, 0.88, 0.9, 0.93, 0.95, 0.98, 1, 1.02, 1.05, 1.07, 1.1, 1.12, 1.15, 1.17, 1.2, 1.23, 1.25, 1.27], op: 'mul' } ]},
	{ id: 4411, levels: 22, name: 'M. Atk. Modifiers', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: [0.835, 0.85, 0.865, 0.88, 0.92, 0.93, 0.94, 0.96, 0.97, 0.985, 1, 1.05, 1.03, 1.045, 1.06, 1.075, 1.09, 1.105, 1.12, 1.135, 1.15, 1.165], op: 'mul' } ]},
	{ id: 4412, levels: 22, name: 'P. Def. Modifiers', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [0.75, 0.775, 0.8, 0.825, 0.85, 0.875, 0.9, 0.925, 0.95, 0.975, 1, 1.025, 1.05, 1.075, 1.1, 1.125, 1.15, 1.175, 1.2, 1.225, 1.25, 1.275], op: 'mul' } ]},
	{ id: 4413, levels: 22, name: 'M. Def. Modifiers', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: [0.85, 0.865, 0.88, 0.9, 0.92, 0.93, 0.94, 0.96, 0.97, 0.985, 1, 1.015, 1.03, 1.04, 1.06, 1.07, 1.08, 1.1, 1.12, 1.135, 1.15, 1.165], op: 'mul' } ]},
	{ id: 4414, levels: 3, name: 'Light Armor Type', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: [1.1, 1, 0.9], op: 'mul' },
		{ stat: 'rEvas', val: [5, 0, 0], op: 'add' },
		{ stat: 'rEvas', val: [0, 0, 5], op: 'sub' } ]},
	{ id: 4418, levels: 5, name: 'Fire Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: [15, 30, 50, 70, 90], op: 'sub' } ]},
	{ id: 4419, levels: 5, name: 'Water Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'waterRes', val: [15, 30, 50, 70, 90], op: 'sub' } ]},
	{ id: 4420, levels: 5, name: 'Wind Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'windRes', val: [15, 30, 50, 70, 90], op: 'sub' } ]},
	{ id: 4421, levels: 5, name: 'Earth Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'earthRes', val: [15, 30, 50, 70, 90], op: 'sub' } ]},
	{ id: 4422, levels: 5, name: 'Dark Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'darkRes', val: [15, 30, 50, 70, 90], op: 'sub' } ]},
	{ id: 4423, levels: 5, name: 'Sacred Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'holyRes', val: [15, 30, 50, 70, 90], op: 'sub' } ]},
	{ id: 4424, levels: 5, name: 'Resist Hand-to-hand Weapons', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'dualFistWpnVuln', val: [0.9, 0.85, 0.8, 0.7, 0.5], op: 'mul' } ]},
	{ id: 4425, levels: 5, name: 'Resist Blunt Weapons', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bluntWpnVuln', val: [0.9, 0.85, 0.8, 0.7, 0.5], op: 'mul' } ]},
	{ id: 4426, levels: 5, name: 'Resist Dual-Sword Weapons', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'dualWpnVuln', val: [0.9, 0.85, 0.8, 0.7, 0.5], op: 'mul' } ]},
	{ id: 4427, levels: 5, name: 'Resist Swords', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'swordWpnVuln', val: [0.9, 0.85, 0.8, 0.7, 0.5], op: 'mul' } ]},
	{ id: 4428, levels: 5, name: 'Resist Two-handed Weapons', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bigSwordWpnVuln', val: [0.9, 0.85, 0.8, 0.7, 0.5], op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: [0.9, 0.85, 0.8, 0.7, 0.5], op: 'mul' },
		{ stat: 'ancientWpnVuln', val: [0.9, 0.85, 0.8, 0.7, 0.5], op: 'mul' } ]},
	{ id: 4429, levels: 5, name: 'Greater Resist Fire Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: [60, 70, 80, 90, 100], op: 'add' } ]},
	{ id: 4430, levels: 5, name: 'Greater Resist Water Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'waterRes', val: [60, 70, 80, 90, 100], op: 'add' } ]},
	{ id: 4431, levels: 5, name: 'Greater Resist Wind Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'windRes', val: [60, 70, 80, 90, 100], op: 'add' } ]},
	{ id: 4432, levels: 5, name: 'Greater Resist Earth Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'earthRes', val: [60, 70, 80, 90, 100], op: 'add' } ]},
	{ id: 4433, levels: 5, name: 'Greater Resist Sacred Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'holyRes', val: [60, 70, 80, 90, 100], op: 'add' } ]},
	{ id: 4434, levels: 5, name: 'Greater Resist Dark Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'darkRes', val: [60, 70, 80, 90, 100], op: 'add' } ]},
	{ id: 4435, levels: 5, name: 'Greater Resist Stun', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: [60, 70, 80, 90, 100], op: 'sub' } ]},
	{ id: 4436, levels: 5, name: 'Greater Resist Poison', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poisonVuln', val: [60, 70, 80, 90, 100], op: 'sub' } ]},
	{ id: 4437, levels: 5, name: 'Greater Resist Bleeding', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bleedVuln', val: [60, 70, 80, 90, 100], op: 'sub' } ]},
	{ id: 4438, levels: 5, name: 'Greater Resist Sleep', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sleepVuln', val: [60, 70, 80, 90, 100], op: 'sub' } ]},
	{ id: 4439, levels: 5, name: 'Greater Resist Hold', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: [60, 70, 80, 90, 100], op: 'sub' } ]},
	{ id: 4440, levels: 5, name: 'Greater Resist Paralysis', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'paralyzeVuln', val: [60, 70, 80, 90, 100], op: 'sub' } ]},
	{ id: 4441, levels: 5, name: 'Greater Resist Mental Derangement', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'derangementVuln', val: [60, 70, 80, 90, 100], op: 'sub' } ]},
	{ id: 4442, levels: 5, name: 'Greater Resist Hand-to-hand Weapons', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'dualFistWpnVuln', val: [0.5, 0.4, 0.3, 0.2, 0.1], op: 'mul' } ]},
	{ id: 4443, levels: 5, name: 'Greater Resist Blunt Weapons', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bluntWpnVuln', val: [0.5, 0.4, 0.3, 0.2, 0.1], op: 'mul' } ]},
	{ id: 4444, levels: 5, name: 'Higher Resist Bow/Crossbow Weapons', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bowWpnVuln', val: [0.5, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: [0.5, 0.4, 0.3, 0.2, 0.1], op: 'mul' } ]},
	{ id: 4445, levels: 5, name: 'Greater Resist Spear Weapons', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poleWpnVuln', val: [0.5, 0.4, 0.3, 0.2, 0.1], op: 'mul' } ]},
	{ id: 4446, levels: 5, name: 'Greater Resist Dual-Sword Weapons', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'dualWpnVuln', val: [0.5, 0.4, 0.3, 0.2, 0.1], op: 'mul' } ]},
	{ id: 4447, levels: 5, name: 'Greater Resist Swords', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'swordWpnVuln', val: [0.5, 0.4, 0.3, 0.2, 0.1], op: 'mul' } ]},
	{ id: 4448, levels: 5, name: 'Higher resist Daggers/Rapier Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'daggerWpnVuln', val: [0.5, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'rapierWpnVuln', val: [0.5, 0.4, 0.3, 0.2, 0.1], op: 'mul' } ]},
	{ id: 4449, levels: 5, name: 'Greater Resist Two-handed Weapons', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bigSwordWpnVuln', val: [0.5, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: [0.5, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'ancientWpnVuln', val: [0.5, 0.4, 0.3, 0.2, 0.1], op: 'mul' } ]},
	{ id: 4450, levels: 5, name: 'Stun Attack Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: [15, 20, 25, 30, 35], op: 'add' } ]},
	{ id: 4451, levels: 5, name: 'Poison Attack Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poisonVuln', val: [15, 20, 25, 30, 35], op: 'add' } ]},
	{ id: 4452, levels: 5, name: 'Bleed Attack Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bleedVuln', val: [15, 20, 25, 30, 35], op: 'add' } ]},
	{ id: 4453, levels: 5, name: 'Sleep Attack Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sleepVuln', val: [15, 20, 25, 30, 35], op: 'add' } ]},
	{ id: 4454, levels: 5, name: 'Hold Attack Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: [15, 20, 25, 30, 35], op: 'add' } ]},
	{ id: 4455, levels: 5, name: 'Paralysis Attack Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'paralyzeVuln', val: [15, 20, 25, 30, 35], op: 'add' } ]},
	{ id: 4456, levels: 5, name: 'Mental Attack Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'derangementVuln', val: [15, 20, 25, 30, 35], op: 'add' } ]},
	{ id: 4457, levels: 5, name: 'Hand-to-hand Weapon Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'dualFistWpnVuln', val: [1.5, 1.6, 1.7, 1.8, 1.9], op: 'mul' } ]},
	{ id: 4458, levels: 5, name: 'Spear Weapon Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poleWpnVuln', val: [1.5, 1.6, 1.7, 1.8, 1.9], op: 'mul' } ]},
	{ id: 4459, levels: 5, name: 'Dual-Sword Weapon Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'dualWpnVuln', val: [1.1, 1.15, 1.2, 1.3, 1.5], op: 'mul' } ]},
	{ id: 4460, levels: 5, name: 'Sword Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'swordWpnVuln', val: [1.5, 1.6, 1.7, 1.8, 1.9], op: 'mul' } ]},
	{ id: 4461, levels: 5, name: 'Dagger Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'daggerWpnVuln', val: [1.5, 1.6, 1.7, 1.8, 1.9], op: 'mul' } ]},
	{ id: 4462, levels: 5, name: 'Two-handed Weapon Weak Point', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bigSwordWpnVuln', val: [1.1, 1.15, 1.2, 1.3, 1.5], op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: [1.1, 1.15, 1.2, 1.3, 1.5], op: 'mul' },
		{ stat: 'ancientWpnVuln', val: [1.1, 1.15, 1.2, 1.3, 1.5], op: 'mul' } ]},
	{ id: 4471, levels: 12, name: 'NPC Anger', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pDef', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55, 1.6], op: 'mul' },
		{ stat: 'pAtk', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55, 1.6], op: 'mul' } ]},
	{ id: 4475, levels: 1, name: 'Perfect Resist Bleeding', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effects: [
		{ stat: 'bleedVuln', val: 100, op: 'sub' } ]},
	{ id: 4492, levels: 12, name: 'Enlarging Head Curse', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'BigHead', stackType: 'big_head' },
	{ id: 4521, levels: 1, name: 'Quest - BOSS Resist non Bow Weapon', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'swordWpnVuln', val: 0, op: 'mul' },
		{ stat: 'bluntWpnVuln', val: 0, op: 'mul' },
		{ stat: 'daggerWpnVuln', val: 0, op: 'mul' },
		{ stat: 'poleWpnVuln', val: 0, op: 'mul' },
		{ stat: 'dualFistWpnVuln', val: 0, op: 'mul' },
		{ stat: 'dualWpnVuln', val: 0, op: 'mul' } ]},
	{ id: 4522, levels: 1, name: 'Eye of Assassin', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'rCrit', val: 1, op: 'basemul' } ]},
	{ id: 4523, levels: 1, name: 'Quest - BOSS Evasion', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'accCombat', val: 30, op: 'add' } ]},
	{ id: 4524, levels: 1, name: 'Quest - BOSS Bluff', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff' },
	{ id: 4528, levels: 1, name: 'Quest - BOSS Movement to Summoned', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 4542, levels: 1, name: 'Quest - Henchman 90% Sleep Stun Weakness', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sleepVuln', val: 90, op: 'add' },
		{ stat: 'stunVuln', val: 90, op: 'add' } ]},
	{ id: 4543, levels: 1, name: 'Quest - BOSS Stun Weakness', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: 10, op: 'add' } ]},
	{ id: 4544, levels: 3, name: 'Quest - BOSS Weakness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pDef', val: [0.8, 0.6, 0.7], op: 'mul' },
		{ stat: 'pAtkSpd', val: [0.9, 0.8, 0.6], op: 'mul' },
		{ stat: 'pAtk', val: [0.7, 0.6, 0.5], op: 'mul' } ]},
	{ id: 4555, levels: 1, name: 'NPC Resist Mutant', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poisonVuln', val: 20, op: 'sub' },
		{ stat: 'bleedVuln', val: 20, op: 'sub' },
		{ stat: 'rootVuln', val: 20, op: 'sub' },
		{ stat: 'stunVuln', val: 20, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 20, op: 'sub' } ]},
	{ id: 4575, levels: 2, name: 'NPC Clan Buff - Haste', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 4585, levels: 3, name: 'NPC Clan Buff - Berserk Might', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Grow', stackType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.13, 1.18, 1.24], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.1, 1.16], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.9, 0.84], op: 'mul' } ]},
	{ id: 4588, levels: 2, name: 'NPC Clan Buff - Berserk Haste', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.2, 1.44], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' } ]},
	{ id: 4595, levels: 3, name: 'NPC Clan Buff - Acumen Shield', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' },
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4601, levels: 3, name: 'NPC Clan Buff - Acumen Focus', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'rCrit', val: [0.2, 0.25, 0.3], op: 'basemul' },
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 4608, levels: 2, name: 'NPC Clan Buff - Berserk', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' } ]},
	{ id: 4609, levels: 4, name: 'NPC Clan Buff - Vampiric Rage', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: [6, 7, 8, 9], op: 'add' } ]},
	{ id: 4610, levels: 3, name: 'NPC Clan Buff - Focus', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.2, 0.25, 0.3], op: 'basemul' } ]},
	{ id: 4611, levels: 3, name: 'NPC Clan Buff - Death Whisper', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4618, levels: 1, name: 'NPC Cancel PC Target', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'RemoveTarget' },
	{ id: 4626, levels: 12, name: 'NPC Buff - Physical Barrier', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.05, 1.11, 1.17, 1.25, 1.33, 1.43, 1.67, 2, 2.33, 2.67, 3, 3.33], op: 'mul' } ]},
	{ id: 4627, levels: 12, name: 'NPC Buff - Magical Barrier', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: [1.05, 1.11, 1.17, 1.25, 1.33, 1.43, 1.67, 2, 2.33, 2.67, 3, 3.33], op: 'mul' } ]},
	{ id: 4631, levels: 3, name: 'NPC Buff - Acumen Shield WildMagic', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'pDef', val: [1.8, 1.12, 1.15], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' },
		{ stat: 'mCritRate', val: [0.3, 0.4, 0.4], op: 'basemul' } ]},
	{ id: 4632, levels: 3, name: 'NPC Buff - Acumen Empower WildMagic', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' },
		{ stat: 'mCritRate', val: [0.3, 0.4, 0.4], op: 'basemul' } ]},
	{ id: 4633, levels: 3, name: 'NPC Buff - Acumen Empower Berserk', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.71, 1.82, 2.03], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.21, 1.29, 1.4], op: 'mul' },
		{ stat: 'runSpd', val: [5, 5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.9, 0.84], op: 'mul' } ]},
	{ id: 4634, levels: 3, name: 'NPC Buff - Acumen Empower DamageShield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' },
		{ stat: 'reflectDam', val: [10, 15, 20], op: 'add' } ]},
	{ id: 4635, levels: 3, name: 'NPC Buff - Acumen Berserk WildMagic', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.1, 1.16], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.21, 1.29, 1.4], op: 'mul' },
		{ stat: 'runSpd', val: [5, 5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.9, 0.84], op: 'mul' },
		{ stat: 'mCritRate', val: [0.3, 0.4, 0.4], op: 'basemul' } ]},
	{ id: 4636, levels: 3, name: 'NPC Buff - Acumen Berserk DamageShield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.1, 1.16], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.21, 1.29, 1.4], op: 'mul' },
		{ stat: 'runSpd', val: [5, 5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.9, 0.84], op: 'mul' },
		{ stat: 'reflectDam', val: [10, 15, 20], op: 'add' } ]},
	{ id: 4637, levels: 3, name: 'NPC Buff - Acumen WildMagic DamageShield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' },
		{ stat: 'mCritRate', val: [0.3, 0.4, 0.4], op: 'basemul' },
		{ stat: 'reflectDam', val: [10, 15, 20], op: 'add' } ]},
	{ id: 4638, levels: 3, name: 'NPC Clan Buff - Acumen Empower WildMagic', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' },
		{ stat: 'mCritRate', val: [0.3, 0.4, 0.4], op: 'basemul' } ]},
	{ id: 4639, levels: 3, name: 'NPC Clan Buff - Acumen Empower Berserk', target: 'TARGET_CLAN', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.71, 1.82, 2.03], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.21, 1.29, 1.4], op: 'mul' },
		{ stat: 'runSpd', val: [5, 5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.9, 0.84], op: 'mul' } ]},
	{ id: 4642, levels: 9, name: 'NPC Fast Spell Casting', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtkSpd', val: [1.05, 1.07, 1.1, 1.11, 1.13, 1.15, 1.17, 1.19, 1.21], op: 'mul' } ]},
	{ id: 4644, levels: 2, name: 'Area Buff - Haste', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 4645, levels: 3, name: 'Area Buff - Focus', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.15, 0.25, 0.3], op: 'basemul' } ]},
	{ id: 4646, levels: 3, name: 'Area Buff - Death Whisper', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4647, levels: 3, name: 'Area Buff - Might', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4648, levels: 3, name: 'Area Buff - Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4679, levels: 1, name: 'Valakas', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'waterRes', val: 30, op: 'sub' },
		{ stat: 'fireRes', val: 30, op: 'add' },
		{ stat: 'valakasRes', val: 8, op: 'sub' } ]},
	{ id: 4680, levels: 1, name: 'Valakas Lava Skin', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: 900, op: 'mul' },
		{ stat: 'mDef', val: 900, op: 'mul' } ]},
	{ id: 4691, levels: 5, name: 'Valakas Regeneration', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'regHp', val: [0.15, 0.5, 0.8, 1, 1.2], op: 'mul' } ]},
	{ id: 4692, levels: 1, name: 'Quest BOSS Big Body', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Grow', stackType: 'big_body' },
	{ id: 4699, levels: 13, name: 'Blessing of Queen', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'QueenBuff', effects: [
		{ stat: 'rCrit', val: [0.25, 0.27, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3], op: 'basemul' },
		{ stat: 'cAtk', val: [1.2, 1.22, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25], op: 'mul' } ]},
	{ id: 4700, levels: 13, name: 'Gift of Queen', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'QueenBuff', effects: [
		{ stat: 'pAtk', val: [1.06, 1.08, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1], op: 'mul' },
		{ stat: 'accCombat', val: [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], op: 'add' } ]},
	{ id: 4702, levels: 13, name: 'Blessing of Seraphim', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'SeraphimBuff', effects: [
		{ stat: 'regMp', val: [1.3, 1.32, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35], op: 'mul' } ]},
	{ id: 4703, levels: 13, name: 'Gift of Seraphim', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'SeraphimBuff', effects: [
		{ stat: 'mReuse', val: [0.7, 0.68, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65], op: 'mul' } ]},
	{ id: 4711, levels: 12, name: 'Wild Defense', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ImmobileBuff', effects: [
		{ stat: 'mDef', val: 5, op: 'mul' },
		{ stat: 'pDef', val: 5, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.3, op: 'mul' },
		{ stat: 'runSpd', val: 0.1, op: 'mul' } ]},
	{ id: 4789, levels: 10, name: 'NPC High Level', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], op: 'add' },
		{ stat: 'mDef', val: [1.03, 1.06, 1.09, 1.1, 1.12, 1.15, 1.18, 1.21, 1.24, 1.27, 1.3], op: 'mul' } ]},
	{ id: 5008, levels: 5, name: 'Frintezza\'s Songs', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'regHp', val: [10000, 0, 0, 0, 0], op: 'add' },
		{ stat: 'runSpd', val: [1, 80, 1, 1, 1], op: 'add' },
		{ stat: 'pAtk', val: [1, 1, 1.3, 1, 1], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1, 1, 1.3, 1, 1], op: 'mul' },
		{ stat: 'gainHp', val: [1, 1, 1, 0.5, 1], op: 'mul' },
		{ stat: 'pDef', val: [1, 1, 1, 1, 0.5], op: 'mul' },
		{ stat: 'mDef', val: [1, 1, 1, 1, 0.5], op: 'mul' },
		{ stat: 'rEvas', val: [1, 1, 1, 1, 0.5], op: 'mul' } ]},
	{ id: 5017, levels: 1, name: 'Frintezza\'s Daemon Morph', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtk', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' } ]},
	{ id: 5041, levels: 1, name: 'Charm of Courage', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'CharmOfCourage' },
	{ id: 5074, levels: 1, name: 'The Victor of War', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' } ]},
	{ id: 5075, levels: 1, name: 'The Vanquished of War', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 0.9, op: 'mul' } ]},
	{ id: 5076, levels: 15, name: 'Death Penalty', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: [1, 0.958, 0.907, 0.856, 0.805, 0.754, 0.703, 0.652, 0.601, 0.550, 0.499, 0.448, 0.397, 0.356, 0.305, 0.254], op: 'mul' },
		{ stat: 'mAtk', val: [1, 0.949, 0.898, 0.847, 0.796, 0.745, 0.694, 0.643, 0.592, 0.591, 0.540, 0.489, 0.438, 0.387, 0.336, 0.285], op: 'mul' },
		{ stat: 'pDef', val: [1, 0.969, 0.942, 0.915, 0.888, 0.861, 0.834, 0.807, 0.780, 0.753, 0.726, 0.699, 0.672, 0.645, 0.618, 0.591], op: 'mul' },
		{ stat: 'mDef', val: [1, 0.965, 0.929, 0.893, 0.857, 0.821, 0.785, 0.749, 0.713, 0.677, 0.641, 0.605, 0.569, 0.553, 0.497, 0.461], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1, 0.949, 0.898, 0.847, 0.796, 0.745, 0.694, 0.643, 0.592, 0.591, 0.540, 0.489, 0.438, 0.387, 0.336, 0.285], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1, 0.949, 0.898, 0.847, 0.796, 0.745, 0.694, 0.643, 0.592, 0.591, 0.540, 0.489, 0.438, 0.387, 0.336, 0.285], op: 'mul' },
		{ stat: 'runSpd', val: [1, 0.949, 0.898, 0.847, 0.796, 0.745, 0.694, 0.643, 0.592, 0.591, 0.540, 0.489, 0.438, 0.387, 0.336, 0.285], op: 'mul' },
		{ stat: 'rEvas', val: [1, 0.949, 0.898, 0.847, 0.796, 0.745, 0.694, 0.643, 0.592, 0.591, 0.540, 0.489, 0.438, 0.387, 0.336, 0.285], op: 'mul' },
		{ stat: 'cAtk', val: [1, 0.949, 0.898, 0.847, 0.796, 0.745, 0.694, 0.643, 0.592, 0.591, 0.540, 0.489, 0.438, 0.387, 0.336, 0.285], op: 'mul' },
		{ stat: 'accCombat', val: [1, 0.949, 0.898, 0.847, 0.796, 0.745, 0.694, 0.643, 0.592, 0.591, 0.540, 0.489, 0.438, 0.387, 0.336, 0.285], op: 'mul' } ]},
	{ id: 5080, levels: 1, name: 'NPC Mighty Haste', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 5147, levels: 10, name: 'Blessed Body', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'maxHp', val: [30, 60, 90, 120, 150, 180, 210, 240, 270, 300], op: 'add' } ]},
	{ id: 5148, levels: 10, name: 'Prayer', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'gainHp', val: [1.08, 1.1, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19], op: 'mul' } ]},
	{ id: 5150, levels: 10, name: 'Blessed Soul', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'maxMp', val: [16, 32, 48, 68, 80, 96, 112, 128, 144, 160], op: 'add' } ]},
	{ id: 5151, levels: 10, name: 'Mana Gain', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'gainMp', val: [1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19], op: 'mul' } ]},
	{ id: 5153, levels: 10, name: 'Cheer', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'maxCp', val: [24, 48, 72, 96, 120, 144, 168, 192, 216, 240], op: 'add' } ]},
	{ id: 5154, levels: 10, name: 'Might', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'pAtk', val: [1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12], op: 'mul' } ]},
	{ id: 5156, levels: 10, name: 'Empower', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'mAtk', val: [1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19], op: 'mul' } ]},
	{ id: 5157, levels: 10, name: 'Duel Might', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'pvpPhysDmg', val: [1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12, 1.13, 1.14, 1.15], op: 'mul' } ]},
	{ id: 5158, levels: 10, name: 'Shield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'pDef', val: [1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12], op: 'mul' } ]},
	{ id: 5159, levels: 10, name: 'Magic Barrier', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'mDef', val: [1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12], op: 'mul' } ]},
	{ id: 5161, levels: 10, name: 'Agility', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'rEvas', val: [1, 1, 1, 2, 2, 2, 3, 3, 4, 4], op: 'add' } ]},
	{ id: 5162, levels: 10, name: 'Guidance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'accCombat', val: [1, 1, 1, 2, 2, 2, 3, 3, 4, 4], op: 'add' } ]},
	{ id: 5163, levels: 10, name: 'Focus', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'rCrit', val: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19], op: 'basemul' } ]},
	{ id: 5164, levels: 10, name: 'Wild Magic', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'item_skill', effects: [
		{ stat: 'mCritRate', val: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19], op: 'basemul' } ]},
	{ id: 5182, levels: 1, name: 'Blessing of Protection', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'ProtectionBlessing' },
	{ id: 5183, levels: 1, name: 'Production: Dimensional Stun', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'StunSelf', stackType: 'Stun' },
	{ id: 5186, levels: 2, name: 'Pet Haste', target: 'TARGET_OWNER_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 5187, levels: 4, name: 'Pet Vampiric Rage', target: 'TARGET_OWNER_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: [6, 7, 8, 9], op: 'add' } ]},
	{ id: 5188, levels: 3, name: 'Pet Regeneration', target: 'TARGET_OWNER_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: [1.1, 1.15, 1.2], op: 'mul' } ]},
	{ id: 5189, levels: 6, name: 'Pet Blessed Body', target: 'TARGET_OWNER_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 5190, levels: 6, name: 'Pet Blessed Soul', target: 'TARGET_OWNER_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 5191, levels: 3, name: 'Pet Guidance', target: 'TARGET_OWNER_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add' } ]},
	{ id: 5192, levels: 2, name: 'Pet Wind Walk', target: 'TARGET_OWNER_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [20, 33], op: 'add' } ]},
	{ id: 5193, levels: 3, name: 'Pet Acumen', target: 'TARGET_OWNER_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 5194, levels: 3, name: 'Pet Empower', target: 'TARGET_OWNER_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' } ]},
	{ id: 5201, levels: 6, name: 'Pet Concentration', target: 'TARGET_OWNER_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Concentration', effects: [
		{ stat: 'cancel', val: [18, 25, 36, 42, 48, 53], op: 'sub' } ]},
	{ id: 5208, levels: 1, name: 'Event Wind walk', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 5209, levels: 1, name: 'Event Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 5210, levels: 1, name: 'Event Bless the body', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 5211, levels: 1, name: 'Event Vampiric rage', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 5212, levels: 1, name: 'Event Regeneration', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: 1.2, op: 'mul' } ]},
	{ id: 5213, levels: 1, name: 'Event Haste', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 5214, levels: 1, name: 'Event Bless the soul', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 5215, levels: 1, name: 'Event Acumen', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 5216, levels: 1, name: 'Event Concentration', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Concentration', effects: [
		{ stat: 'cancel', val: 18, op: 'sub' } ]},
	{ id: 5217, levels: 1, name: 'Event Empower', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.55, op: 'mul' } ]},
	{ id: 5224, levels: 1, name: 'Berserk', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'sub' } ]},
	{ id: 5225, levels: 1, name: 'Invincible', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Invincible' },
	{ id: 5239, levels: 5, name: 'Event Timer', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff' },
	{ id: 5244, levels: 1, name: 'Physical Up', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 2, op: 'mul' } ]},
	{ id: 5245, levels: 1, name: 'Magical Up', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 2, op: 'mul' } ]},
	{ id: 5425, levels: 1, name: 'Iron Shield', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'sDef', val: 1.3, op: 'mul', using: 'Shield' } ]},
	{ id: 5426, levels: 1, name: 'Counter Chance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pReuse', val: 0.85, op: 'mul', using: 'Bow' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul', using: 'Bow' } ]},
	{ id: 5427, levels: 1, name: 'Counter Rapid Shot', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul', using: 'Bow,Crossbow' } ]},
	{ id: 5428, levels: 1, name: 'Counter Dash', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'runSpd', val: 40, op: 'add' } ]},
	{ id: 5437, levels: 2, name: 'Dissonance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 0.95, op: 'mul' },
		{ stat: 'mAtk', val: 0.95, op: 'mul' },
		{ stat: 'accCombat', val: 50, op: 'sub' },
		{ stat: 'runSpd', val: 5, op: 'add' } ]},
	{ id: 5445, levels: 1, name: 'Awakening', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'berserk', effects: [
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'sub' } ]},
	{ id: 5462, levels: 1, name: 'Fire Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'firePower', val: 50, op: 'add' } ]},
	{ id: 5463, levels: 1, name: 'Water Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'waterPower', val: 50, op: 'add' } ]},
	{ id: 5464, levels: 1, name: 'Wind Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'windPower', val: 50, op: 'add' } ]},
	{ id: 5465, levels: 1, name: 'Earth Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'earthPower', val: 50, op: 'add' } ]},
	{ id: 5466, levels: 1, name: 'Holy Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'holyPower', val: 50, op: 'add' } ]},
	{ id: 5467, levels: 1, name: 'Dark Attacks', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'darkPower', val: 50, op: 'add' } ]},
	{ id: 5491, levels: 1, name: 'Decrease Bow/Crossbow Atk. Spd.', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 0.5, op: 'mul', using: 'Bow,Crossbow' } ]},
	{ id: 5539, levels: 1, name: 'Little Angel Agathion Special Skill - Mysterious Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'BigHead', stackType: 'big_head' },
	{ id: 5543, levels: 1, name: 'Little Devil Agathion Special Skill - Mysterious Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'BigHead', stackType: 'big_head' },
	{ id: 5547, levels: 1, name: 'Maximum Ability', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0, op: 'mul' },
		{ stat: 'gainHp', val: 1.1, op: 'mul' } ]},
	{ id: 5556, levels: 1, name: 'Protection Power', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mDef', val: 1000, op: 'add' },
		{ stat: 'fireRes', val: 20, op: 'add' },
		{ stat: 'waterRes', val: 20, op: 'add' },
		{ stat: 'windRes', val: 20, op: 'add' },
		{ stat: 'earthRes', val: 20, op: 'add' },
		{ stat: 'holyRes', val: 20, op: 'add' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 5559, levels: 1, name: 'Physical Pose', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'physicalSkillPower', val: 1.2, op: 'mul' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul' } ]},
	{ id: 5561, levels: 3, name: 'Seed of Revenge', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', stackType: 'increaseTrigger', effects: [
		{ stat: 'pAtk', val: 300, op: 'add' },
		{ stat: 'rCrit', val: [0.1, 0.3, 0.3], op: 'basemul' },
		{ stat: 'cAtk', val: [1, 1, 1.35], op: 'mul' } ]},
	{ id: 5562, levels: 3, name: 'Spirit of Phoenix', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', stackType: 'increaseTrigger', effects: [
		{ stat: 'pDef', val: 500, op: 'add' },
		{ stat: 'fireRes', val: [0, 30, 30], op: 'add' },
		{ stat: 'darkRes', val: [0, 30, 30], op: 'add' },
		{ stat: 'gainHp', val: [1, 1, 1.3], op: 'mul' } ]},
	{ id: 5563, levels: 3, name: 'Eva\'s Will', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', stackType: 'increaseTrigger', effects: [
		{ stat: 'mDef', val: 400, op: 'add' },
		{ stat: 'waterPower', val: [0, 20, 20], op: 'add' },
		{ stat: 'rCrit', val: [0.1, 0.1, 0.2], op: 'basemul' } ]},
	{ id: 5564, levels: 3, name: 'Pain of Shilen', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'ChanceSkillTrigger', stackType: 'increaseTrigger', effects: [
		{ stat: 'cAtk', val: [1.35, 1.35, 1.35], op: 'mul' },
		{ stat: 'windPower', val: [0, 20, 20], op: 'add' },
		{ stat: 'absorbDam', val: [0, 0, 4], op: 'add' } ]},
	{ id: 5570, levels: 1, name: 'Excessive Loyalty', target: 'TARGET_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'mAtk', val: 1.75, op: 'mul' },
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 5572, levels: 1, name: 'Warrior Ability - Haste', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 5573, levels: 1, name: 'Knight Ability - Defense', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' } ]},
	{ id: 5574, levels: 1, name: 'Log Ability - Critical Chance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 5576, levels: 1, name: 'Enchanter Ability - Barrier', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Invincible', stackType: 'Instant_Shield' },
	{ id: 5578, levels: 1, name: 'Summoner Ability - Spirit', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtk', val: 1.07, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'mAtk', val: 1.07, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' } ]},
	{ id: 5586, levels: 3, name: 'Pet Might', target: 'TARGET_OWNER_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 5587, levels: 3, name: 'Pet Shield', target: 'TARGET_OWNER_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 5588, levels: 3, name: 'Pet Focus', target: 'TARGET_OWNER_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.2, 0.25, 0.3], op: 'basemul' } ]},
	{ id: 5589, levels: 3, name: 'Pet Death Whisper', target: 'TARGET_OWNER_PET', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 5601, levels: 12, name: 'Short-Range Physical Attack Resistance', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'swordWpnVuln', val: [0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'bigSwordWpnVuln', val: [0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'bluntWpnVuln', val: [0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: [0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'daggerWpnVuln', val: [0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'dualDaggerWpnVuln', val: [0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'poleWpnVuln', val: [0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'fistWpnVuln', val: [0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'dualFistWpnVuln', val: [0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'dualWpnVuln', val: [0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'rapierWpnVuln', val: [0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'ancientWpnVuln', val: [0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.3, 0.2, 0.1], op: 'mul' },
		{ stat: 'petWpnVuln', val: [0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.3, 0.2, 0.1], op: 'mul' } ]},
	{ id: 5603, levels: 1, name: 'Dagger Mastery', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: 0.33, op: 'mul' },
		{ stat: 'blowRate', val: 1.1, op: 'mul' } ]},
	{ id: 5604, levels: 1, name: 'Blunt Mastery', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: 0.33, op: 'mul' },
		{ stat: 'stunProf', val: 100, op: 'add' } ]},
	{ id: 5605, levels: 2, name: 'Power of Apella', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mDef', val: 1.05, op: 'mul' },
		{ stat: 'rCrit', val: [0, 0.02621], op: 'basemul' },
		{ stat: 'cAtkAdd', val: 3, op: 'sub' } ]},
	{ id: 5607, levels: 2, name: 'Power of Apella', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'rEvas', val: 2, op: 'add' },
		{ stat: 'cAtkAdd', val: 86, op: 'sub' },
		{ stat: 'pAtkSpd', val: [1, 1.025], op: 'mul' } ]},
	{ id: 5608, levels: 2, name: 'Power of Apella', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'runSpd', val: 10, op: 'add' },
		{ stat: 'pDef', val: 1.05, op: 'mul' },
		{ stat: 'mAtk', val: [0, 6], op: 'add' } ]},
	{ id: 5620, levels: 12, name: 'Short-Range Physical Attack Weakness', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'swordWpnVuln', val: [1.05, 1.08, 1.1, 1.13, 1.15, 1.17, 1.2, 1.25, 1.3, 1.35, 1.4, 1.5], op: 'mul' },
		{ stat: 'bigSwordWpnVuln', val: [1.05, 1.08, 1.1, 1.13, 1.15, 1.17, 1.2, 1.25, 1.3, 1.35, 1.4, 1.5], op: 'mul' },
		{ stat: 'bluntWpnVuln', val: [1.05, 1.08, 1.1, 1.13, 1.15, 1.17, 1.2, 1.25, 1.3, 1.35, 1.4, 1.5], op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: [1.05, 1.08, 1.1, 1.13, 1.15, 1.17, 1.2, 1.25, 1.3, 1.35, 1.4, 1.5], op: 'mul' },
		{ stat: 'daggerWpnVuln', val: [1.05, 1.08, 1.1, 1.13, 1.15, 1.17, 1.2, 1.25, 1.3, 1.35, 1.4, 1.5], op: 'mul' },
		{ stat: 'dualDaggerWpnVuln', val: [1.05, 1.08, 1.1, 1.13, 1.15, 1.17, 1.2, 1.25, 1.3, 1.35, 1.4, 1.5], op: 'mul' },
		{ stat: 'poleWpnVuln', val: [1.05, 1.08, 1.1, 1.13, 1.15, 1.17, 1.2, 1.25, 1.3, 1.35, 1.4, 1.5], op: 'mul' },
		{ stat: 'fistWpnVuln', val: [1.05, 1.08, 1.1, 1.13, 1.15, 1.17, 1.2, 1.25, 1.3, 1.35, 1.4, 1.5], op: 'mul' },
		{ stat: 'dualFistWpnVuln', val: [1.05, 1.08, 1.1, 1.13, 1.15, 1.17, 1.2, 1.25, 1.3, 1.35, 1.4, 1.5], op: 'mul' },
		{ stat: 'dualWpnVuln', val: [1.05, 1.08, 1.1, 1.13, 1.15, 1.17, 1.2, 1.25, 1.3, 1.35, 1.4, 1.5], op: 'mul' },
		{ stat: 'rapierWpnVuln', val: [1.05, 1.08, 1.1, 1.13, 1.15, 1.17, 1.2, 1.25, 1.3, 1.35, 1.4, 1.5], op: 'mul' },
		{ stat: 'ancientWpnVuln', val: [1.05, 1.08, 1.1, 1.13, 1.15, 1.17, 1.2, 1.25, 1.3, 1.35, 1.4, 1.5], op: 'mul' } ]},
	{ id: 5627, levels: 1, name: 'Adventurer\'s Wind Walk', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 5628, levels: 1, name: 'Adventurer\'s Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 5629, levels: 1, name: 'Adventurer\'s Bless the Body', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 5630, levels: 1, name: 'Adventurer\'s Vampiric Rage', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 5631, levels: 1, name: 'Adventurer\'s Regeneration', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: 1.2, op: 'mul' } ]},
	{ id: 5632, levels: 1, name: 'Adventurer\'s Haste', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 5633, levels: 1, name: 'Adventurer\'s Bless the Soul', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 5634, levels: 1, name: 'Adventurer\'s Acumen', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 5635, levels: 1, name: 'Adventurer\'s Concentration', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Concentration', effects: [
		{ stat: 'cancel', val: 18, op: 'sub' } ]},
	{ id: 5636, levels: 1, name: 'Adventurer\'s Empower', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.55, op: 'mul' } ]},
	{ id: 5637, levels: 1, name: 'Adventurer\'s Magic Barrier', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 5638, levels: 4, name: 'Feline Queen - Bless the Body', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: [1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 5639, levels: 4, name: 'Feline Queen - Bless the Soul', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: [1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 5640, levels: 2, name: 'Feline Queen - Haste', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 5643, levels: 1, name: 'Unicorn Seraphim - Acumen', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 5646, levels: 2, name: 'Unicorn Seraphim - Wild Magic', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'magic_critical_up', effects: [
		{ stat: 'mCritRate', val: [0.3, 0.4], op: 'basemul' } ]},
	{ id: 5647, levels: 3, name: 'Unicorn Seraphim - Clarity', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MPrate', effects: [
		{ stat: 'MagicalMpConsumeRate', val: [0.96, 0.92, 0.9], op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: [0.96, 0.92, 0.9], op: 'mul' } ]},
	{ id: 5648, levels: 2, name: 'Unicorn Seraphim - Empower', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: [1.65, 1.75], op: 'mul' } ]},
	{ id: 5652, levels: 3, name: 'Nightshade - Death Whisper', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 5653, levels: 2, name: 'Nightshade - Focus', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.25, 0.3], op: 'basemul' } ]},
	{ id: 5654, levels: 3, name: 'Nightshade - Guidance', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add' } ]},
	{ id: 5655, levels: 1, name: 'Transform Gatekeeper', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 5659, levels: 2, name: 'Gatekeeper Berserker Spirit', target: 'TARGET_PARTY_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'berserk', effects: [
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'rEvas', val: [2, 4], op: 'sub' } ]},
	{ id: 5663, levels: 5, name: 'Resistance to Ancient Sword', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'ancientWpnVuln', val: [0.5, 0.4, 0.3, 0.2, 0.1], op: 'mul' } ]},
	{ id: 5664, levels: 5, name: 'Weakness to Ancient Sword', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'ancientWpnVuln', val: [1.1, 1.15, 1.2, 1.3, 1.5], op: 'mul' } ]},
	{ id: 5674, levels: 1, name: 'Evasion Chance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'lethalRate', val: 1.1, op: 'mul' } ]},
	{ id: 5675, levels: 1, name: 'Evasion Haste', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 5685, levels: 1, name: 'PvP Weapon - Casting', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 5686, levels: 1, name: 'PvP Weapon - Rapid Fire', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtkSpd', val: 100, op: 'add', using: 'Bow,Crossbow' } ]},
	{ id: 5690, levels: 1, name: 'PvP Armor - Damage Down', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pvpPhysDef', val: 1.2, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.2, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.2, op: 'mul' } ]},
	{ id: 5691, levels: 1, name: 'PvP Armor - Critical Down', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'critDamEvas', val: 1.2, op: 'mul' },
		{ stat: 'critVuln', val: 0.8, op: 'mul' } ]},
	{ id: 5696, levels: 1, name: 'Dizziness', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.8, op: 'mul' } ]},
	{ id: 5699, levels: 7, name: 'Decrease P. Def', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pDef', val: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], op: 'mul' } ]},
	{ id: 5700, levels: 7, name: 'Magic Resistance Decrease', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'mDef', val: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], op: 'mul' } ]},
	{ id: 5701, levels: 7, name: 'Decrease P. Atk', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtk', val: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], op: 'mul' } ]},
	{ id: 5771, levels: 1, name: 'Buff Control', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff' },
	{ id: 5950, levels: 1, name: 'Birthday Cake', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 6035, levels: 1, name: 'Red Team Transformation', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 6036, levels: 1, name: 'Blue Team Transformation', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 6059, levels: 1, name: 'Counter Critical', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'cAtk', val: 2, op: 'mul' } ]},
	{ id: 6060, levels: 1, name: 'Great Fury', target: 'TARGET_PARTY', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtkSpd', val: 1.5, op: 'mul' } ]},
	{ id: 6171, levels: 1, name: 'Full Authority', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'stakato_buff', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul' },
		{ stat: 'mAtk', val: 1.05, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.05, op: 'mul' } ]},
	{ id: 6201, levels: 1, name: 'Transformation Condition - Frog', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Transformation', stackType: 'speed_up', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 13, op: 'set' },
		{ stat: 'MEN', val: 23, op: 'set' } ]},
	{ id: 6202, levels: 1, name: 'Transformation Condition - Young Child', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Transformation', stackType: 'speed_up', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 13, op: 'set' },
		{ stat: 'MEN', val: 23, op: 'set' } ]},
	{ id: 6203, levels: 1, name: 'Transformed Condition - Native', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Transformation', stackType: 'speed_up', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 13, op: 'set' },
		{ stat: 'MEN', val: 23, op: 'set' } ]},
	{ id: 6209, levels: 4, name: 'Weapon Grade Penalty', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'accCombat', val: 16, op: 'sub' },
		{ stat: 'rCrit', val: [-0.1, -0.2, -0.3, -0.4], op: 'basemul' },
		{ stat: 'cAtk', val: [0.9, 0.8, 0.7, 0.6], op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.9, op: 'mul' },
		{ stat: 'pAtk', val: 0.9, op: 'mul' },
		{ stat: 'magicFailureRate', val: [2000, 4000, 6000, 8000], op: 'add' } ]},
	{ id: 6213, levels: 4, name: 'Armor Grade Penalty', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: [2.5, 5, 7.5, 10], op: 'sub' },
		{ stat: 'pAtkSpd', val: [0.8333, 0.6944, 0.5787, 0.4823], op: 'mul' },
		{ stat: 'mAtkSpd', val: [0.8333, 0.6944, 0.5787, 0.4823], op: 'mul' },
		{ stat: 'runSpd', val: [0.8333, 0.6944, 0.5787, 0.4823], op: 'mul' } ]},
	{ id: 6408, levels: 1, name: 'Soul Weakness', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff' },
	{ id: 6429, levels: 1, name: 'Cozy Mucus', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'regHp', val: 5, op: 'mul' } ]},
	{ id: 6431, levels: 1, name: 'Feral Might', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.19, op: 'mul' } ]},
	{ id: 6432, levels: 1, name: 'Feral Focus', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.35, op: 'basemul' } ]},
	{ id: 6433, levels: 1, name: 'Feral Guidance', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 7, op: 'add' } ]},
	{ id: 6434, levels: 1, name: 'Feral Haste', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.38, op: 'mul' } ]},
	{ id: 6435, levels: 3, name: 'Curse of the Plains', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'DamOverTime', effects: [
		{ stat: 'cAtk', val: [1.2, 1.3, 1.4], op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'rCrit', val: [0.2, 0.5, 0.75], op: 'basemul', using: 'Bow,Crossbow' } ]},
	{ id: 6436, levels: 1, name: 'Curse of the Dark Abyss', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'DamOverTime', effects: [
		{ stat: 'cAtk', val: 1.5, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'rCrit', val: 0.9, op: 'basemul', using: 'Bow,Crossbow' } ]},
	{ id: 6442, levels: 1, name: 'Efficacy of Wisdom', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pveMagicalDmg', val: 2.0, op: 'mul' } ]},
	{ id: 6443, levels: 1, name: 'Efficacy of Strength', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pvePhysDmg', val: 2.0, op: 'mul' },
		{ stat: 'pvePhysSkillsDmg', val: 2.0, op: 'mul' } ]},
	{ id: 6444, levels: 1, name: 'Efficacy of Agility', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'pveBowDmg', val: 2.0, op: 'mul' },
		{ stat: 'pveBowSkillsDmg', val: 2.0, op: 'mul' } ]},
	{ id: 6649, levels: 1, name: 'Treykan Transformation', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 13, op: 'set' },
		{ stat: 'MEN', val: 23, op: 'set' } ]},
	{ id: 6666, levels: 1, name: 'Feral Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.18, op: 'mul' } ]},
	{ id: 6667, levels: 1, name: 'Feral Wind Walk', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 6668, levels: 1, name: 'Feral Death Whisper', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 6669, levels: 1, name: 'Feral Body Bless', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 6670, levels: 1, name: 'Feral Vampiric Rage', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 6671, levels: 1, name: 'Feral Berserker Spirit', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'berserk', effects: [
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'sub' } ]},
	{ id: 6672, levels: 1, name: 'Feral Bless Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'shieldProbUp', effects: [
		{ stat: 'rShld', val: 1.05, op: 'mul' } ]},
	{ id: 6687, levels: 1, name: 'Patience', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'physicalSkillPower', val: 1.2, op: 'mul' } ]},
	{ id: 7005, levels: 4, name: 'Greater Chant of Vampire', target: 'TARGET_CLAN_MEMBER', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 7029, levels: 4, name: 'Super Haste', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [2, 3, 3, 2], op: 'mul' },
		{ stat: 'runSpd', val: [2, 3, 3, 1], op: 'mul' },
		{ stat: 'mAtkSpd', val: [2, 3, 3, 2], op: 'mul' },
		{ stat: 'pAtk', val: [1, 1, 10000, 1], op: 'mul' },
		{ stat: 'pReuse', val: [0.01, 0.01, 0.01, 1], op: 'mul' },
		{ stat: 'mReuse', val: [0.01, 0.01, 0.01, 1], op: 'mul' },
		{ stat: 'regMp', val: [1, 1, 1, 2], op: 'mul' },
		{ stat: 'regMp', val: [1, 1, 1, 2], op: 'mul' },
		{ stat: 'maxMp', val: [1, 1, 1, 2], op: 'mul' },
		{ stat: 'maxLoad', val: [1, 1, 1, 2], op: 'mul' } ]},
	{ id: 7041, levels: 1, name: 'Master\'s Blessing - Focus', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 7042, levels: 1, name: 'Master\'s Blessing - Death Whisper', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 7043, levels: 1, name: 'Master\'s Blessing - Haste', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 7044, levels: 1, name: 'Master\'s Blessing - Guidance', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 7045, levels: 1, name: 'Master\'s Blessing - Blessed Body', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 7046, levels: 1, name: 'Master\'s Blessing - Blessed Soul', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 7047, levels: 1, name: 'Master\'s Blessing - Agility', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'rEvas', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 7048, levels: 1, name: 'Master\'s Blessing - Acumen', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 7049, levels: 1, name: 'Master\'s Blessing - Decrease Weight', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Weight', effects: [
		{ stat: 'maxLoad', val: 9000, op: 'add' } ]},
	{ id: 7050, levels: 1, name: 'Master\'s Blessing - Might', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 7051, levels: 1, name: 'Master\'s Blessing - Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 7052, levels: 1, name: 'Master\'s Blessing - Magic Barrier', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MagicDefUp', effects: [
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 7053, levels: 1, name: 'Master\'s Blessing - Vampiric Rage', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'vampRage', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 7054, levels: 1, name: 'Master\'s Blessing - Empower', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 7055, levels: 1, name: 'Master\'s Blessing - Wind Walk', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 7056, levels: 1, name: 'Master\'s Blessing - Berserker Spirit', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'berserk', effects: [
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'sub' } ]},
	{ id: 7057, levels: 1, name: 'Master\'s Blessing - Greater Might', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Great', effects: [
		{ stat: 'pAtk', val: 1.1, op: 'mul' } ]},
	{ id: 7058, levels: 1, name: 'Master\'s Blessing - Greater Shield', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'Great', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 7059, levels: 1, name: 'Master\'s Blessing - Wild Magic', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'magic_critical_up', effects: [
		{ stat: 'mCritRate', val: 2, op: 'basemul' } ]},
	{ id: 7060, levels: 1, name: 'Master\'s Blessing - Clarity', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'MPrate', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 7061, levels: 1, name: 'Master\'s Blessing - Prophecy of Water', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'mCritRate', val: 2, op: 'basemul' },
		{ stat: 'regMp', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 7062, levels: 1, name: 'Master\'s Blessing - Prophecy of Fire', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'regHp', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'basemul' },
		{ stat: 'cAtk', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' } ]},
	{ id: 7063, levels: 1, name: 'Master\'s Blessing - Prophecy of Wind', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul' },
		{ stat: 'mCritRate', val: 0.2, op: 'basemul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 7088, levels: 1, name: 'Master\'s Blessing - Improve Combat', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 7089, levels: 1, name: 'Master\'s Blessing - Improve Magic', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 7090, levels: 1, name: 'Master\'s Blessing - Improve Condition', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 7091, levels: 1, name: 'Master\'s Blessing - Improve Critical', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 7092, levels: 1, name: 'Master\'s Blessing - Improve Shield Defense', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'shieldProbUp', effects: [
		{ stat: 'rShld', val: 1.3, op: 'mul' } ]},
	{ id: 7093, levels: 1, name: 'Master\'s Blessing - Improve Movement', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 7094, levels: 1, name: 'Master\'s Blessing - Sharpen Edge', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ws_weapon', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul', using: 'Sword,Big Sword,Dual Sword,Ancient,Rapier,Dagger,Dual Dagger,Pole,Dual Fist' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul', using: 'Sword,Big Sword,Dual Sword,Ancient,Rapier,Dagger,Dual Dagger,Pole,Dual Fist' } ]},
	{ id: 7095, levels: 1, name: 'Master\'s Blessing - Face Harden', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'ws_armor', effects: [
		{ stat: 'pDef', val: 1.1, op: 'mul' } ]},
	{ id: 7096, levels: 1, name: 'Master\'s Blessing - Blessing of Noblesse', target: 'TARGET_ONE', operateType: 'OP_ACTIVE', effectType: 'NoblesseBless', stackType: 'ab_preserve_abnormal' },
	{ id: 8193, levels: 1, name: 'Heavy Armor of Nightmare Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.04, op: 'mul' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' },
		{ stat: 'CON', val: 2, op: 'add' },
		{ stat: 'DEX', val: 2, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' } ]},
	{ id: 8194, levels: 1, name: 'Heavy Majestic Plate Armor Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.04, op: 'mul' },
		{ stat: 'accCombat', val: 3, op: 'add' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' } ]},
	{ id: 8195, levels: 1, name: 'Light Nightmarish Leather Armor Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.04, op: 'mul' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' },
		{ stat: 'absorbDam', val: 3, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'CON', val: 1, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' } ]},
	{ id: 8196, levels: 1, name: 'Light Majestic Leather Armor Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.08, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'maxMp', val: 240, op: 'add' },
		{ stat: 'maxLoad', val: 5759, op: 'add' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'CON', val: 1, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' } ]},
	{ id: 8197, levels: 1, name: 'Nightmare Robe Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 1.04, op: 'mul' },
		{ stat: 'mAtk', val: 1.08, op: 'mul' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' },
		{ stat: 'INT', val: 2, op: 'add' },
		{ stat: 'WIT', val: 2, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' } ]},
	{ id: 8198, levels: 1, name: 'Majestic Robe Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxMp', val: 240, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.08, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'MEN', val: 1, op: 'add' },
		{ stat: 'INT', val: 1, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' } ]},
	{ id: 8199, levels: 1, name: 'Heavy Imperial Crusader Breastplate Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pDef', val: 1.08, op: 'mul' },
		{ stat: 'maxHp', val: 445, op: 'add' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' } ]},
	{ id: 8200, levels: 1, name: 'Light Draconic Leather Armor Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'pAtk', val: 1.04, op: 'mul' },
		{ stat: 'maxMp', val: 289, op: 'add' },
		{ stat: 'maxLoad', val: 5759, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' } ]},
	{ id: 8201, levels: 1, name: 'Major Arcana Robe Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.17, op: 'mul' },
		{ stat: 'runSpd', val: 7, op: 'add' },
		{ stat: 'cancel', val: 50, op: 'sub' },
		{ stat: 'maxLoad', val: 5759, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'add' },
		{ stat: 'INT', val: 1, op: 'add' },
		{ stat: 'MEN', val: 2, op: 'sub' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' } ]},
	{ id: 8202, levels: 1, name: 'Dynasty Breastplate - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 1, op: 'sub' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'pDef', val: 1.046, op: 'mul' },
		{ stat: 'maxHp', val: 418, op: 'add' },
		{ stat: 'darkRes', val: 6, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8203, levels: 1, name: 'Dynasty Breastplate - PvP Shield Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 2, op: 'sub' },
		{ stat: 'CON', val: 2, op: 'add' },
		{ stat: 'pDef', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'gainHp', val: 1.03, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8204, levels: 1, name: 'Dynasty Breastplate - PvP Weapon Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'pAtk', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'rCrit', val: 0.0246, op: 'basemul' },
		{ stat: 'cAtkAdd', val: 234, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8205, levels: 1, name: 'Dynasty Breastplate - PvP Force Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8206, levels: 1, name: 'Dynasty Breastplate - PvP Bard', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'pDef', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8207, levels: 1, name: 'Dynasty Leather Armor - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 1, op: 'sub' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'accCombat', val: 1.72, op: 'add' },
		{ stat: 'rEvas', val: 1.72, op: 'add' },
		{ stat: 'maxHp', val: 418, op: 'add' },
		{ stat: 'darkRes', val: 6, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8208, levels: 1, name: 'Dynasty Leather Armor - PvP Dagger Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'add' },
		{ stat: 'rEvas', val: 4.3, op: 'add' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'rootVuln', val: 13, op: 'sub' },
		{ stat: 'pAtkSpd', val: 1.0266, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8209, levels: 1, name: 'Dynasty Leather Armor - PvP Bow Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'add' },
		{ stat: 'accCombat', val: 4.3, op: 'add' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0266, op: 'mul' },
		{ stat: 'regMp', val: 1.72, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8210, levels: 1, name: 'Dynasty Tunic - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 1, op: 'sub' },
		{ stat: 'MEN', val: 1, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.12, op: 'mul' },
		{ stat: 'maxMp', val: 257, op: 'add' },
		{ stat: 'darkRes', val: 6, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8211, levels: 1, name: 'Dynasty Tunic - PvP Healer', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'giveHp', val: 1.2, op: 'mul' },
		{ stat: 'cancel', val: 15, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8212, levels: 1, name: 'Dynasty Tunic - PvP Enchanter', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'cancel', val: 15, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8213, levels: 1, name: 'Dynasty Tunic - PvP Summoner', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'pAtk', val: 1.026, op: 'mul' },
		{ stat: 'pDef', val: 1.026, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8214, levels: 1, name: 'Dynasty Tunic - PvP Wizard', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 1, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'add' },
		{ stat: 'MEN', val: 2, op: 'sub' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'mAtk', val: 1.054, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8215, levels: 1, name: 'Dynasty Leather Armor - PvP Force Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'pAtk', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8216, levels: 1, name: 'Dynasty Leather Armor - PvP Weapon Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'pAtk', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cAtkAdd', val: 234, op: 'add' },
		{ stat: 'rCrit', val: 0.0246, op: 'basemul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8217, levels: 1, name: 'Dynasty Leather Armor - PvP Enchanter', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'sub' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'cancel', val: 15, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8218, levels: 1, name: 'Dynasty Leather Armor - PvP Summoner', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 2, op: 'sub' },
		{ stat: 'CON', val: 2, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'pAtk', val: 1.0266, op: 'mul' },
		{ stat: 'pDef', val: 1.0266, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8219, levels: 1, name: 'Dynasty Platinum Breastplate - PvP Shield Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 2, op: 'sub' },
		{ stat: 'CON', val: 2, op: 'add' },
		{ stat: 'pDef', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'gainHp', val: 1.04, op: 'mul' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'stunVuln', val: 15, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8220, levels: 1, name: 'Dynasty Platinum Breastplate - PvP Weapon Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'pAtk', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cAtkAdd', val: 282, op: 'add' },
		{ stat: 'rCrit', val: 0.0295, op: 'basemul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8221, levels: 1, name: 'Dynasty Platinum Breastplate - PvP Bard', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'pDef', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'DanceMpConsumeRate', val: 0.94, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8222, levels: 1, name: 'Dynasty Platinum Breastplate - PvP Force Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.94, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8223, levels: 1, name: 'Dynasty Jewel Leather Armor - PvP Dagger Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'add' },
		{ stat: 'rEvas', val: 5.3, op: 'add' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'rootVuln', val: 15, op: 'sub' },
		{ stat: 'pAtkSpd', val: 1.0324, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8224, levels: 1, name: 'Dynasty Jewel Leather Armor - PvP Bow Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'add' },
		{ stat: 'accCombat', val: 5.3, op: 'add' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0324, op: 'mul' },
		{ stat: 'regMp', val: 1.066, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8225, levels: 1, name: 'Dynasty Jewel Leather Armor - PvP Force Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.94, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8226, levels: 1, name: 'Dynasty Jewel Leather Armor - PvP Weapon Master', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cAtkAdd', val: 282, op: 'add' },
		{ stat: 'rCrit', val: 0.0295, op: 'basemul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8227, levels: 1, name: 'Dynasty Jewel Leather Armor - PvP Summoner', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 2, op: 'sub' },
		{ stat: 'CON', val: 2, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'pAtk', val: 1.0266, op: 'mul' },
		{ stat: 'pDef', val: 1.0266, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8228, levels: 1, name: 'Dynasty Jewel Leather Armor - PvP Enchanter', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'sub' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.94, op: 'mul' },
		{ stat: 'cancel', val: 15, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8229, levels: 1, name: 'Dynasty Silver Satin Tunic - PvP Healer', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'giveHp', val: 1.22, op: 'mul' },
		{ stat: 'cancel', val: 15, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8230, levels: 1, name: 'Dynasty Silver Satin Tunic - PvP Enchanter', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.94, op: 'mul' },
		{ stat: 'cancel', val: 15, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8231, levels: 1, name: 'Dynasty Silver Satin Tunic - PvP Summoner', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 2, op: 'sub' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'pAtk', val: 1.033, op: 'mul' },
		{ stat: 'pDef', val: 1.033, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8232, levels: 1, name: 'Dynasty Silver Satin Tunic - PvP Wizard', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 1, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'add' },
		{ stat: 'MEN', val: 2, op: 'sub' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'mAtk', val: 1.066, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8233, levels: 1, name: 'Zubei\'s Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rEvas', val: 0.5, op: 'add' } ]},
	{ id: 8234, levels: 1, name: 'Zubei\'s Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0125, op: 'mul' } ]},
	{ id: 8235, levels: 1, name: 'Nightmare Helm', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mDef', val: 1.0067, op: 'mul' },
		{ stat: 'sleepVuln', val: 12, op: 'sub' },
		{ stat: 'rootVuln', val: 12, op: 'sub' } ]},
	{ id: 8236, levels: 1, name: 'Nightmare Helm', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 1.0067, op: 'mul' },
		{ stat: 'mAtk', val: 1.0133, op: 'mul' },
		{ stat: 'sleepVuln', val: 12, op: 'sub' },
		{ stat: 'rootVuln', val: 12, op: 'sub' } ]},
	{ id: 8244, levels: 1, name: 'Transform Gatekeeper', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 8246, levels: 1, name: 'Transform Pumpkin Ghost', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 8247, levels: 1, name: 'Mount Light Purple Maned Horse', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'runSpd', val: 1.5, op: 'mul' } ]},
	{ id: 8261, levels: 1, name: 'Steam Beatle Mount', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'runSpd', val: 1.5, op: 'mul' } ]},
	{ id: 8262, levels: 1, name: 'Tawny Maned Lion Mount', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'runSpd', val: 1.5, op: 'mul' } ]},
	{ id: 8263, levels: 1, name: 'Transform Snow King', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 8264, levels: 1, name: 'Transform Scarecrow Jack', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 8265, levels: 1, name: 'Transform Tin Golem', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 8277, levels: 1, name: 'Transform Native', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 8278, levels: 1, name: 'Transform Guard of Dawn', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation' },
	{ id: 8283, levels: 1, name: 'Vesper Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'DEX', val: 2, op: 'sub' },
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pDef', val: 1.0557, op: 'mul' },
		{ stat: 'maxHp', val: 531, op: 'add' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' } ]},
	{ id: 8284, levels: 1, name: 'Vesper Noble Heavy Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'DEX', val: 2, op: 'sub' },
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pDef', val: 1.0557, op: 'mul' },
		{ stat: 'maxHp', val: 541, op: 'add' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8285, levels: 1, name: 'Vesper Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0557, op: 'mul' },
		{ stat: 'regMp', val: 1.0557, op: 'mul' },
		{ stat: 'maxMp', val: 347.4, op: 'add' } ]},
	{ id: 8286, levels: 1, name: 'Vesper Noble Light Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0557, op: 'mul' },
		{ stat: 'regMp', val: 1.0557, op: 'mul' },
		{ stat: 'maxMp', val: 354.1, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8287, levels: 1, name: 'Vesper Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 1, op: 'add' },
		{ stat: 'MEN', val: 2, op: 'sub' },
		{ stat: 'WIT', val: 1, op: 'add' },
		{ stat: 'mAtk', val: 1.0847, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.0557, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'cancel', val: 30, op: 'sub' } ]},
	{ id: 8288, levels: 1, name: 'Vesper Noble Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 1, op: 'add' },
		{ stat: 'MEN', val: 2, op: 'sub' },
		{ stat: 'WIT', val: 1, op: 'add' },
		{ stat: 'mAtk', val: 1.0847, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.0557, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'cancel', val: 30, op: 'sub' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8289, levels: 3, name: 'Special Ability Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: [96, 139, 139], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 8290, levels: 12, name: 'Add Belt Inventory Slot', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'inventoryLimit', val: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], op: 'add' } ]},
	{ id: 8291, levels: 12, name: 'Add Belt Weight Gauge', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxLoad', val: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000], op: 'add' } ]},
	{ id: 8292, levels: 1, name: 'Olympiad Warrior\'s Ring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootVuln', val: 30, op: 'sub' },
		{ stat: 'rootProf', val: 30, op: 'add' },
		{ stat: 'cAtk', val: 1.15, op: 'mul' },
		{ stat: 'accCombat', val: 2, op: 'add' } ]},
	{ id: 8293, levels: 1, name: 'Olympiad Warrior\'s Earring', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunVuln', val: 20, op: 'sub' },
		{ stat: 'derangementVuln', val: 20, op: 'sub' },
		{ stat: 'stunProf', val: 20, op: 'add' },
		{ stat: 'derangementProf', val: 20, op: 'add' },
		{ stat: 'absorbDam', val: 4, op: 'add' } ]},
	{ id: 8294, levels: 1, name: 'Olympiad Warrior\'s Necklace', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'paralyzeVuln', val: 15, op: 'sub' },
		{ stat: 'stunVuln', val: 15, op: 'sub' },
		{ stat: 'sleepVuln', val: 15, op: 'sub' },
		{ stat: 'paralyzeProf', val: 15, op: 'add' },
		{ stat: 'stunProf', val: 15, op: 'add' },
		{ stat: 'sleepProf', val: 15, op: 'add' },
		{ stat: 'pReuse', val: 0.95, op: 'mul' },
		{ stat: 'mReuse', val: 0.95, op: 'mul' },
		{ stat: 'reflectDam', val: 4, op: 'add' } ]},
	{ id: 8295, levels: 1, name: 'Special Ability Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: 100, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 8296, levels: 1, name: 'Special Ability Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: 102, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 8297, levels: 1, name: 'Special Ability Haste', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtkSpd', val: 1.09, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 8298, levels: 1, name: 'Special Ability Focus', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rCrit', val: 104, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 8301, levels: 1, name: 'Vesper Heavy Armor Set for Adults', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'DEX', val: 2, op: 'sub' },
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pDef', val: 1.0557, op: 'mul' },
		{ stat: 'maxHp', val: 531, op: 'add' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' } ]},
	{ id: 8302, levels: 1, name: 'Vesper Noble Heavy Armor Set for Adults', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'DEX', val: 2, op: 'sub' },
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pDef', val: 1.0557, op: 'mul' },
		{ stat: 'maxHp', val: 540, op: 'add' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8303, levels: 1, name: 'Vesper Light Armor Set for Adults', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0557, op: 'mul' },
		{ stat: 'regMp', val: 1.0557, op: 'mul' },
		{ stat: 'maxMp', val: 347.4, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' } ]},
	{ id: 8304, levels: 1, name: 'Vesper Noble Light Armor Set for Adults', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0557, op: 'mul' },
		{ stat: 'regMp', val: 1.0557, op: 'mul' },
		{ stat: 'maxMp', val: 354, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8305, levels: 1, name: 'Vesper Robe Set for Adults', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 1, op: 'add' },
		{ stat: 'MEN', val: 2, op: 'sub' },
		{ stat: 'WIT', val: 1, op: 'add' },
		{ stat: 'mAtk', val: 1.0847, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.0557, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'cancel', val: 30, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' } ]},
	{ id: 8306, levels: 1, name: 'Vesper Noble Robe Set for Adults', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'INT', val: 1, op: 'add' },
		{ stat: 'MEN', val: 2, op: 'sub' },
		{ stat: 'WIT', val: 1, op: 'add' },
		{ stat: 'mAtk', val: 1.0847, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.0557, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'cancel', val: 30, op: 'sub' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8310, levels: 1, name: 'Arcana Sigil', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' },
		{ stat: 'cancel', val: 13, op: 'sub' } ]},
	{ id: 8311, levels: 1, name: 'Dynasty Sigil', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' },
		{ stat: 'darkRes', val: 2, op: 'add' } ]},
	{ id: 8324, levels: 1, name: 'Warrior\'s Shirt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxCp', val: 672, op: 'add' } ]},
	{ id: 8335, levels: 1, name: 'White Talisman - Attribute Resistance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', stackType: 'talismanElementRes', effects: [
		{ stat: 'fireRes', val: 15, op: 'add' },
		{ stat: 'windRes', val: 15, op: 'add' },
		{ stat: 'waterRes', val: 15, op: 'add' },
		{ stat: 'earthRes', val: 15, op: 'add' },
		{ stat: 'holyRes', val: 15, op: 'add' },
		{ stat: 'darkRes', val: 15, op: 'add' } ]},
	{ id: 8337, levels: 1, name: 'Weight Up', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'maxLoad', val: 5000, op: 'add' } ]},
	{ id: 8338, levels: 4, name: 'Low-grade Magic Rune Clip Iron Belt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regHp', val: [1.01, 1.02, 1.03, 1.04], op: 'mul' } ]},
	{ id: 8339, levels: 4, name: 'Low-grade Magic Rune Clip Mithril Belt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regHp', val: [1.02, 1.03, 1.04, 1.05], op: 'mul' } ]},
	{ id: 8340, levels: 4, name: 'Low-grade Magic Rune Clip Iron Belt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: [1.01, 1.02, 1.03, 1.04], op: 'mul' } ]},
	{ id: 8341, levels: 4, name: 'Low-grade Magic Rune Clip Mithril Belt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: [1.02, 1.03, 1.04, 1.05], op: 'mul' } ]},
	{ id: 8342, levels: 4, name: 'Low-grade Magic Ornament Iron Belt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pvpPhysDmg', val: [1.01, 1.02, 1.03, 1.04], op: 'mul' } ]},
	{ id: 8343, levels: 4, name: 'Low-grade Magic Ornament Iron Belt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pvpPhysSkillsDmg', val: [1.01, 1.02, 1.03, 1.04], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1.01, 1.02, 1.03, 1.04], op: 'mul' } ]},
	{ id: 8344, levels: 4, name: 'Low-grade Magic Ornament Iron Belt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pvpPhysDef', val: [1.01, 1.02, 1.03, 1.04], op: 'mul' },
		{ stat: 'pvpMagicalDef', val: [1.01, 1.02, 1.03, 1.04], op: 'mul' } ]},
	{ id: 8345, levels: 4, name: 'Low-grade Magic Ornament Mithril Belt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pvpPhysDmg', val: [1.02, 1.03, 1.04, 1.05], op: 'mul' } ]},
	{ id: 8346, levels: 4, name: 'Low-grade Magic Ornament Mithril Belt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pvpPhysSkillsDmg', val: [1.02, 1.03, 1.04, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1.02, 1.03, 1.04, 1.05], op: 'mul' } ]},
	{ id: 8347, levels: 4, name: 'Low-grade Magic Ornament Mithril Belt', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pvpPhysDef', val: [1.02, 1.03, 1.04, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDef', val: [1.02, 1.03, 1.04, 1.05], op: 'mul' } ]},
	{ id: 8348, levels: 2, name: 'Royal Guard Earring - Gludio', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunProf', val: 15, op: 'add' },
		{ stat: 'bleedVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8349, levels: 2, name: 'Royal Guard Earring - Dion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootProf', val: 15, op: 'add' },
		{ stat: 'poisonVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8350, levels: 2, name: 'Royal Guard Earring - Giran', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'bleedProf', val: 15, op: 'add' },
		{ stat: 'paralyzeVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8351, levels: 2, name: 'Royal Guard Earring - Oren', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'paralyzeProf', val: 15, op: 'add' },
		{ stat: 'rootVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8352, levels: 2, name: 'Royal Guard Earring - Aden', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'derangementProf', val: 15, op: 'add' },
		{ stat: 'stunVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8353, levels: 2, name: 'Royal Guard Earring - Innadril', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'sleepProf', val: 15, op: 'add' },
		{ stat: 'stunVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8354, levels: 2, name: 'Royal Guard Earring - Goddard', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'stunProf', val: 15, op: 'add' },
		{ stat: 'sleepVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8355, levels: 2, name: 'Royal Guard Earring - Rune', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'poisonProf', val: 15, op: 'add' },
		{ stat: 'rootVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8356, levels: 2, name: 'Royal Guard Earring - Schuttgart', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'rootProf', val: 15, op: 'add' },
		{ stat: 'derangementVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8379, levels: 2, name: 'Royal Guard Ring - Gludio', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'earthRes', val: [12, 15], op: 'add' } ]},
	{ id: 8380, levels: 2, name: 'Royal Guard Ring - Dion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'waterRes', val: [12, 15], op: 'add' } ]},
	{ id: 8381, levels: 2, name: 'Royal Guard Ring - Giran', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: [12, 15], op: 'add' } ]},
	{ id: 8382, levels: 2, name: 'Royal Guard Ring - Oren', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'earthRes', val: [12, 15], op: 'add' } ]},
	{ id: 8383, levels: 2, name: 'Royal Guard Ring - Aden', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'holyRes', val: [12, 15], op: 'add' } ]},
	{ id: 8384, levels: 2, name: 'Royal Guard Ring - Innadril', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'holyRes', val: [12, 15], op: 'add' } ]},
	{ id: 8385, levels: 2, name: 'Royal Guard Ring - Goddard', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'darkRes', val: [12, 15], op: 'add' } ]},
	{ id: 8386, levels: 2, name: 'Royal Guard Ring - Rune', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'windRes', val: [12, 15], op: 'add' } ]},
	{ id: 8387, levels: 2, name: 'Royal Guard Ring - Schuttgart', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'darkRes', val: [12, 15], op: 'add' } ]},
	{ id: 8388, levels: 2, name: 'Royal Guard Necklace - Gludio', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'waterRes', val: [26, 30], op: 'add' } ]},
	{ id: 8389, levels: 2, name: 'Royal Guard Necklace - Dion', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'holyRes', val: [26, 30], op: 'add' } ]},
	{ id: 8390, levels: 2, name: 'Royal Guard Necklace - Giran', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'windRes', val: [26, 30], op: 'add' } ]},
	{ id: 8391, levels: 2, name: 'Royal Guard Necklace - Oren', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'darkRes', val: [26, 30], op: 'add' } ]},
	{ id: 8392, levels: 2, name: 'Royal Guard Necklace - Aden', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'earthRes', val: [26, 30], op: 'add' } ]},
	{ id: 8393, levels: 2, name: 'Royal Guard Necklace - Innadril', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'waterRes', val: [26, 30], op: 'add' } ]},
	{ id: 8394, levels: 2, name: 'Royal Guard Necklace - Goddard', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: [26, 30], op: 'add' } ]},
	{ id: 8395, levels: 2, name: 'Royal Guard Necklace - Rune', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'fireRes', val: [26, 30], op: 'add' } ]},
	{ id: 8396, levels: 2, name: 'Royal Guard Necklace - Schuttgart', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'windRes', val: [26, 30], op: 'add' } ]},
	{ id: 8397, levels: 1, name: 'Moirai Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'pAtk', val: 1.0426, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' },
		{ stat: 'waterRes', val: 3, op: 'add' },
		{ stat: 'fireRes', val: 3, op: 'add' },
		{ stat: 'windRes', val: 3, op: 'add' },
		{ stat: 'earthRes', val: 3, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8398, levels: 1, name: 'Moirai Leather Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'add' },
		{ stat: 'pAtk', val: 1.0426, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'rootVuln', val: 50, op: 'sub' },
		{ stat: 'runSpd', val: 1.03, op: 'mul' },
		{ stat: 'waterRes', val: 3, op: 'add' },
		{ stat: 'fireRes', val: 3, op: 'add' },
		{ stat: 'windRes', val: 3, op: 'add' },
		{ stat: 'earthRes', val: 3, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8399, levels: 1, name: 'Moirai Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'MEN', val: 2, op: 'sub' },
		{ stat: 'WIT', val: 2, op: 'add' },
		{ stat: 'mAtk', val: 1.0811, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 50, op: 'sub' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8400, levels: 1, name: 'Vorpal Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'add' },
		{ stat: 'STR', val: 2, op: 'sub' },
		{ stat: 'pDef', val: 1.0847, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0557, op: 'mul' },
		{ stat: 'maxHp', val: 541, op: 'add' },
		{ stat: 'bleedVuln', val: 50, op: 'sub' },
		{ stat: 'sleepVuln', val: 50, op: 'sub' },
		{ stat: 'rootVuln', val: 50, op: 'sub' },
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8401, levels: 1, name: 'Vorpal Leather Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 3, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'add' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 50, op: 'sub' },
		{ stat: 'pDef', val: 1.0557, op: 'mul' },
		{ stat: 'runSpd', val: 1.03, op: 'mul' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8402, levels: 1, name: 'Vorpal Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'MEN', val: 1, op: 'sub' },
		{ stat: 'INT', val: 1, op: 'sub' },
		{ stat: 'WIT', val: 2, op: 'add' },
		{ stat: 'mAtk', val: 1.087, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.05, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8403, levels: 1, name: 'Elegia Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 3, op: 'add' },
		{ stat: 'pAtk', val: 1.0659, op: 'mul' },
		{ stat: 'rCrit', val: 12.74, op: 'add' },
		{ stat: 'maxHp', val: 550, op: 'add' },
		{ stat: 'bleedVuln', val: 50, op: 'sub' },
		{ stat: 'sleepVuln', val: 50, op: 'sub' },
		{ stat: 'rootVuln', val: 50, op: 'sub' },
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' },
		{ stat: 'absorbDam', val: 3, op: 'add' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8404, levels: 1, name: 'Elegia Leather Armor Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'add' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.0659, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.06, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 50, op: 'sub' },
		{ stat: 'rCrit', val: 17.02, op: 'add' },
		{ stat: 'runSpd', val: 1.03, op: 'mul' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8405, levels: 1, name: 'Elegia Robe Set', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'MEN', val: 2, op: 'sub' },
		{ stat: 'WIT', val: 2, op: 'add' },
		{ stat: 'INT', val: 1, op: 'add' },
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.05, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8406, levels: 1, name: 'Moirai Leather Armor Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 2, op: 'add' },
		{ stat: 'pAtk', val: 1.0426, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' },
		{ stat: 'waterRes', val: 3, op: 'add' },
		{ stat: 'fireRes', val: 3, op: 'add' },
		{ stat: 'windRes', val: 3, op: 'add' },
		{ stat: 'earthRes', val: 3, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8407, levels: 1, name: 'Moirai Leather Armor Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'add' },
		{ stat: 'pAtk', val: 1.0426, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'rootVuln', val: 50, op: 'sub' },
		{ stat: 'runSpd', val: 1.03, op: 'mul' },
		{ stat: 'waterRes', val: 3, op: 'add' },
		{ stat: 'fireRes', val: 3, op: 'add' },
		{ stat: 'windRes', val: 3, op: 'add' },
		{ stat: 'earthRes', val: 3, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8408, levels: 1, name: 'Moirai Robe Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'MEN', val: 2, op: 'sub' },
		{ stat: 'WIT', val: 2, op: 'add' },
		{ stat: 'mAtk', val: 1.0811, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 50, op: 'sub' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8409, levels: 1, name: 'Vorpal Armor Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'add' },
		{ stat: 'STR', val: 2, op: 'sub' },
		{ stat: 'pDef', val: 1.0847, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0557, op: 'mul' },
		{ stat: 'maxHp', val: 541, op: 'add' },
		{ stat: 'bleedVuln', val: 50, op: 'sub' },
		{ stat: 'sleepVuln', val: 50, op: 'sub' },
		{ stat: 'rootVuln', val: 50, op: 'sub' },
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8410, levels: 1, name: 'Vorpal Leather Armor Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 3, op: 'sub' },
		{ stat: 'DEX', val: 2, op: 'add' },
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 50, op: 'sub' },
		{ stat: 'pDef', val: 1.0557, op: 'mul' },
		{ stat: 'runSpd', val: 1.03, op: 'mul' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8411, levels: 1, name: 'Vorpal Robe Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'MEN', val: 1, op: 'sub' },
		{ stat: 'INT', val: 1, op: 'sub' },
		{ stat: 'WIT', val: 2, op: 'add' },
		{ stat: 'mAtk', val: 1.087, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.05, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8412, levels: 1, name: 'Elegia Armor Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 3, op: 'add' },
		{ stat: 'pAtk', val: 1.0659, op: 'mul' },
		{ stat: 'rCrit', val: 12.74, op: 'add' },
		{ stat: 'maxHp', val: 550, op: 'add' },
		{ stat: 'bleedVuln', val: 50, op: 'sub' },
		{ stat: 'sleepVuln', val: 50, op: 'sub' },
		{ stat: 'rootVuln', val: 50, op: 'sub' },
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' },
		{ stat: 'absorbDam', val: 3, op: 'add' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8413, levels: 1, name: 'Elegia Leather Armor Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'CON', val: 2, op: 'sub' },
		{ stat: 'STR', val: 3, op: 'add' },
		{ stat: 'pAtk', val: 1.0659, op: 'mul' },
		{ stat: 'rCrit', val: 12.74, op: 'add' },
		{ stat: 'maxHp', val: 550, op: 'add' },
		{ stat: 'bleedVuln', val: 50, op: 'sub' },
		{ stat: 'sleepVuln', val: 50, op: 'sub' },
		{ stat: 'rootVuln', val: 50, op: 'sub' },
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' },
		{ stat: 'absorbDam', val: 3, op: 'add' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8414, levels: 1, name: 'Elegia Robe Set - PvP', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'MEN', val: 2, op: 'sub' },
		{ stat: 'WIT', val: 2, op: 'add' },
		{ stat: 'INT', val: 1, op: 'add' },
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.05, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'pvpPhysDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDef', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.05, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8418, levels: 1, name: 'Moirai Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0125, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.01, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'fireRes', val: 3, op: 'add' } ]},
	{ id: 8419, levels: 1, name: 'Moirai Cuirass', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0426, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'waterRes', val: 1, op: 'add' },
		{ stat: 'fireRes', val: 1, op: 'add' },
		{ stat: 'windRes', val: 1, op: 'add' },
		{ stat: 'earthRes', val: 1, op: 'add' } ]},
	{ id: 8420, levels: 1, name: 'Moirai Gaiter', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0208, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0167, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'waterRes', val: 3, op: 'add' } ]},
	{ id: 8421, levels: 1, name: 'Moirai Gauntlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0083, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0067, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'windRes', val: 3, op: 'add' } ]},
	{ id: 8422, levels: 1, name: 'Moirai Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0083, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0067, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'earthRes', val: 3, op: 'add' } ]},
	{ id: 8423, levels: 1, name: 'Moirai Shield', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' } ]},
	{ id: 8424, levels: 1, name: 'Moirai Leather Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0125, op: 'mul' },
		{ stat: 'rootVuln', val: 5, op: 'sub' },
		{ stat: 'regMp', val: 1.01, op: 'mul' },
		{ stat: 'fireRes', val: 3, op: 'add' } ]},
	{ id: 8425, levels: 1, name: 'Moirai Leather Hauberk', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0426, op: 'mul' },
		{ stat: 'rootVuln', val: 5, op: 'sub' },
		{ stat: 'regMp', val: 1.04, op: 'mul' },
		{ stat: 'waterRes', val: 3, op: 'add' } ]},
	{ id: 8426, levels: 1, name: 'Moirai Leather Legging', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0208, op: 'mul' },
		{ stat: 'rootVuln', val: 5, op: 'sub' },
		{ stat: 'regMp', val: 1.0167, op: 'mul' },
		{ stat: 'waterRes', val: 3, op: 'add' } ]},
	{ id: 8427, levels: 1, name: 'Moirai Leather Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0083, op: 'mul' },
		{ stat: 'rootVuln', val: 5, op: 'sub' },
		{ stat: 'regMp', val: 1.0067, op: 'mul' },
		{ stat: 'windRes', val: 3, op: 'add' } ]},
	{ id: 8428, levels: 1, name: 'Moirai Leather Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0083, op: 'mul' },
		{ stat: 'rootVuln', val: 5, op: 'sub' },
		{ stat: 'regMp', val: 1.0067, op: 'mul' },
		{ stat: 'earthRes', val: 3, op: 'add' } ]},
	{ id: 8429, levels: 1, name: 'Moirai Circlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0062, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' },
		{ stat: 'fireRes', val: 5, op: 'add' } ]},
	{ id: 8430, levels: 1, name: 'Moirai Jacket', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0811, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' },
		{ stat: 'waterRes', val: 1, op: 'add' },
		{ stat: 'fireRes', val: 1, op: 'add' },
		{ stat: 'windRes', val: 1, op: 'add' },
		{ stat: 'earthRes', val: 1, op: 'add' } ]},
	{ id: 8431, levels: 1, name: 'Moirai Hose', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0103, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' },
		{ stat: 'waterRes', val: 5, op: 'add' } ]},
	{ id: 8432, levels: 1, name: 'Moirai Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0041, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' },
		{ stat: 'windRes', val: 5, op: 'add' } ]},
	{ id: 8433, levels: 1, name: 'Moirai Shoes', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0041, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' },
		{ stat: 'earthRes', val: 5, op: 'add' } ]},
	{ id: 8434, levels: 1, name: 'Moirai Sigil', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' } ]},
	{ id: 8435, levels: 1, name: 'Vesper Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0062, op: 'mul' },
		{ stat: 'pDef', val: 1.0062, op: 'mul' },
		{ stat: 'maxHp', val: 133, op: 'add' },
		{ stat: 'sleepVuln', val: 1, op: 'sub' },
		{ stat: 'rootVuln', val: 1, op: 'sub' } ]},
	{ id: 8436, levels: 1, name: 'Vesper Cuirass', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pDef', val: 1.0557, op: 'mul' },
		{ stat: 'maxHp', val: 531, op: 'add' },
		{ stat: 'sleepVuln', val: 28, op: 'sub' },
		{ stat: 'rootVuln', val: 28, op: 'sub' } ]},
	{ id: 8437, levels: 1, name: 'Vesper Gaiter', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0103, op: 'mul' },
		{ stat: 'pDef', val: 1.0103, op: 'mul' },
		{ stat: 'maxHp', val: 55, op: 'add' },
		{ stat: 'sleepVuln', val: 18, op: 'sub' },
		{ stat: 'rootVuln', val: 18, op: 'sub' } ]},
	{ id: 8438, levels: 1, name: 'Vesper Gauntlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'pDef', val: 1.0041, op: 'mul' },
		{ stat: 'maxHp', val: 22, op: 'add' },
		{ stat: 'sleepVuln', val: 7, op: 'sub' },
		{ stat: 'rootVuln', val: 7, op: 'sub' } ]},
	{ id: 8439, levels: 1, name: 'Vesper Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'pDef', val: 1.0041, op: 'mul' },
		{ stat: 'maxHp', val: 22, op: 'add' },
		{ stat: 'sleepVuln', val: 7, op: 'sub' },
		{ stat: 'rootVuln', val: 7, op: 'sub' } ]},
	{ id: 8440, levels: 1, name: 'Vesper Verteidiger', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' } ]},
	{ id: 8441, levels: 1, name: 'Vesper Leather Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0041, op: 'mul' },
		{ stat: 'regMp', val: 1.0041, op: 'mul' },
		{ stat: 'maxMp', val: 87, op: 'add' } ]},
	{ id: 8442, levels: 1, name: 'Vesper Leather Hauberk', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'regMp', val: 1.05, op: 'mul' },
		{ stat: 'maxMp', val: 347, op: 'add' } ]},
	{ id: 8443, levels: 1, name: 'Vesper Leather Legging', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0068, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0068, op: 'mul' },
		{ stat: 'regMp', val: 1.0068, op: 'mul' },
		{ stat: 'maxMp', val: 145, op: 'add' } ]},
	{ id: 8444, levels: 1, name: 'Vesper Leather Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0027, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'maxMp', val: 58, op: 'add' } ]},
	{ id: 8445, levels: 1, name: 'Vesper Leather Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0027, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'maxMp', val: 58, op: 'add' } ]},
	{ id: 8446, levels: 1, name: 'Vesper Circlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0041, op: 'mul' },
		{ stat: 'regMp', val: 1.0041, op: 'mul' },
		{ stat: 'stunVuln', val: 8, op: 'sub' },
		{ stat: 'cancel', val: 4.5, op: 'sub' } ]},
	{ id: 8447, levels: 1, name: 'Vesper Jacket', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0847, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.05, op: 'mul' },
		{ stat: 'stunVuln', val: 20, op: 'sub' },
		{ stat: 'cancel', val: 12, op: 'sub' } ]},
	{ id: 8448, levels: 1, name: 'Vesper Hose', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0068, op: 'mul' },
		{ stat: 'regMp', val: 1.0068, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'cancel', val: 7.5, op: 'sub' } ]},
	{ id: 8449, levels: 1, name: 'Vesper Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'cancel', val: 3, op: 'sub' } ]},
	{ id: 8450, levels: 1, name: 'Vesper Shoes', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'cancel', val: 3, op: 'sub' } ]},
	{ id: 8451, levels: 1, name: 'Vesper Sigil', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' } ]},
	{ id: 8459, levels: 1, name: 'Necklace of Freya', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 0.23, op: 'add' },
		{ stat: 'maxMp', val: 50, op: 'add' },
		{ stat: 'bleedVuln', val: 20, op: 'sub' },
		{ stat: 'sleepVuln', val: 15, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 15, op: 'sub' },
		{ stat: 'stunVuln', val: 15, op: 'sub' },
		{ stat: 'derangementVuln', val: 10, op: 'sub' },
		{ stat: 'waterRes', val: 10, op: 'add' },
		{ stat: 'mReuse', val: 0.95, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'reflectDam', val: 4, op: 'add' } ]},
	{ id: 8460, levels: 1, name: 'Blessed Necklace of Freya', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'regMp', val: 0.46, op: 'add' },
		{ stat: 'maxMp', val: 50, op: 'add' },
		{ stat: 'bleedVuln', val: 25, op: 'sub' },
		{ stat: 'sleepVuln', val: 20, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 20, op: 'sub' },
		{ stat: 'stunVuln', val: 20, op: 'sub' },
		{ stat: 'derangementVuln', val: 10, op: 'sub' },
		{ stat: 'waterRes', val: 15, op: 'add' },
		{ stat: 'bonusHp', val: 15, op: 'add' },
		{ stat: 'mReuse', val: 0.95, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'reflectDam', val: 4, op: 'add' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'STR', val: 1, op: 'sub' },
		{ stat: 'CON', val: 1, op: 'add' } ]},
	{ id: 8481, levels: 1, name: 'Vesper Noble Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0062, op: 'mul' },
		{ stat: 'pDef', val: 1.0062, op: 'mul' },
		{ stat: 'maxHp', val: 133, op: 'add' },
		{ stat: 'sleepVuln', val: 11, op: 'sub' },
		{ stat: 'rootVuln', val: 11, op: 'sub' } ]},
	{ id: 8482, levels: 1, name: 'Vesper Noble Gaiter', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0103, op: 'mul' },
		{ stat: 'pDef', val: 1.0103, op: 'mul' },
		{ stat: 'maxHp', val: 55, op: 'add' },
		{ stat: 'sleepVuln', val: 18, op: 'sub' },
		{ stat: 'rootVuln', val: 18, op: 'sub' } ]},
	{ id: 8483, levels: 1, name: 'Vesper Noble Gauntlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'pDef', val: 1.0041, op: 'mul' },
		{ stat: 'maxHp', val: 22, op: 'add' },
		{ stat: 'sleepVuln', val: 7, op: 'sub' },
		{ stat: 'rootVuln', val: 7, op: 'sub' } ]},
	{ id: 8484, levels: 1, name: 'Vesper Noble Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'pDef', val: 1.0041, op: 'mul' },
		{ stat: 'maxHp', val: 22, op: 'add' },
		{ stat: 'sleepVuln', val: 7, op: 'sub' },
		{ stat: 'rootVuln', val: 7, op: 'sub' } ]},
	{ id: 8485, levels: 1, name: 'Vesper Noble Leather Helmet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0041, op: 'mul' },
		{ stat: 'regMp', val: 1.0041, op: 'mul' },
		{ stat: 'maxMp', val: 87, op: 'add' } ]},
	{ id: 8486, levels: 1, name: 'Vesper Noble Leather Legging', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0068, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0068, op: 'mul' },
		{ stat: 'regMp', val: 1.0068, op: 'mul' },
		{ stat: 'maxMp', val: 145, op: 'add' } ]},
	{ id: 8487, levels: 1, name: 'Vesper Noble Leather Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0027, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'maxMp', val: 58, op: 'add' } ]},
	{ id: 8488, levels: 1, name: 'Vesper Noble Leather Boots', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'pAtk', val: 1.0027, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'maxMp', val: 58, op: 'add' } ]},
	{ id: 8489, levels: 1, name: 'Vesper Noble Circlet', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0041, op: 'mul' },
		{ stat: 'regMp', val: 1.0041, op: 'mul' },
		{ stat: 'stunVuln', val: 8, op: 'sub' },
		{ stat: 'cancel', val: 4.5, op: 'sub' } ]},
	{ id: 8490, levels: 1, name: 'Vesper Noble Hose', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0068, op: 'mul' },
		{ stat: 'regMp', val: 1.0068, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'cancel', val: 7.5, op: 'sub' } ]},
	{ id: 8491, levels: 1, name: 'Vesper Noble Gloves', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'cancel', val: 3, op: 'sub' } ]},
	{ id: 8492, levels: 1, name: 'Vesper Noble Shoes', target: 'TARGET_SELF', operateType: 'OP_PASSIVE', effects: [
		{ stat: 'mAtk', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'cancel', val: 3, op: 'sub' } ]},
	{ id: 9067, levels: 1, name: 'Potion of Vitality Maintenance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 0.00, op: 'mul' } ]},
	{ id: 9068, levels: 2, name: 'Potion of Vitality Maintenance', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Buff', effects: [
		{ stat: 'vitalityConsumeRate', val: 0.00, op: 'mul' } ]},
	{ id: 9159, levels: 1, name: 'Transformation Scroll - Anakim', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 46, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 49, op: 'set' },
		{ stat: 'INT', val: 50, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 45, op: 'set' } ]},
	{ id: 9160, levels: 1, name: 'Transformation Scroll - Zaken', target: 'TARGET_SELF', operateType: 'OP_ACTIVE', effectType: 'Transformation', effects: [
		{ stat: 'STR', val: 48, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 52, op: 'set' },
		{ stat: 'INT', val: 45, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 45, op: 'set' } ]}];