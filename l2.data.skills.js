window.l2 = window.l2 || {};
window.l2.data = window.l2.data || {};

l2.data.skills = [
	{ id: 4, levels: 2, name: 'Dash', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up_special', effects: [
		{ stat: 'runSpd', val: [40, 66], op: 'add' } ]},
	{ id: 18, levels: 37, name: 'Aura of Hate', target: 'AURA', operateType: 'A2', effectType: 'TargetMe', abnormalType: 'lock' },
	{ id: 48, levels: 37, name: 'Thunder Storm', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 60, levels: 1, name: 'Fake Death', target: 'SELF', operateType: 'T', effectType: 'FakeDeath' },
	{ id: 72, levels: 3, name: 'Iron Will', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 75, levels: 1, name: 'Detect Insect Weakness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'detect_weakness', effects: [
		{ stat: 'pAtk-insects', val: 1.3, op: 'mul' } ]},
	{ id: 76, levels: 1, name: 'Bear Spirit Totem', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'possession', effects: [
		{ stat: 'pAtk', val: 1.2, op: 'mul', using: 'Dual Fist' },
		{ stat: 'cAtk', val: 1.2, op: 'mul', using: 'Dual Fist' },
		{ stat: 'runSpd', val: 0.7, op: 'mul' } ]},
	{ id: 77, levels: 2, name: 'Attack Aura', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12], op: 'mul' } ]},
	{ id: 78, levels: 2, name: 'War Cry', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up_special', effects: [
		{ stat: 'pAtk', val: [1.2, 1.25], op: 'mul' } ]},
	{ id: 80, levels: 1, name: 'Detect Beast Weakness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'detect_weakness', effects: [
		{ stat: 'pAtk-monsters', val: 1.3, op: 'mul' } ]},
	{ id: 82, levels: 3, name: 'Majesty', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'majesty', effects: [
		{ stat: 'pDef', val: [1.07, 1.11, 1.15], op: 'mul' },
		{ stat: 'rEvas', val: [2, 4, 6], op: 'sub' } ]},
	{ id: 83, levels: 1, name: 'Wolf Spirit Totem', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'possession', effects: [
		{ stat: 'runSpd', val: 1.2, op: 'mul', using: 'Dual Fist' },
		{ stat: 'accCombat', val: 3, op: 'add', using: 'Dual Fist' } ]},
	{ id: 84, levels: 3, name: 'Poison Blade Dance', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'poison' },
	{ id: 86, levels: 3, name: 'Reflect Damage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'dmg_shield', effects: [
		{ stat: 'reflectDam', val: [10, 15, 20], op: 'add' } ]},
	{ id: 87, levels: 1, name: 'Detect Animal Weakness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'detect_weakness', effects: [
		{ stat: 'pAtk-animals', val: 1.3, op: 'mul' } ]},
	{ id: 88, levels: 1, name: 'Detect Dragon Weakness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'detect_weakness', effects: [
		{ stat: 'pAtk-dragons', val: 1.3, op: 'mul' } ]},
	{ id: 91, levels: 2, name: 'Defense Aura', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12], op: 'mul' } ]},
	{ id: 94, levels: 2, name: 'Rage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up_special', effects: [
		{ stat: 'pAtk', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: [1.21, 1.29], op: 'mul', using: 'Sword,Big Sword,Blunt,Big Blunt,Pole' },
		{ stat: 'pAtk', val: [1.07, 1.06], op: 'mul', using: 'Big Sword,Big Blunt' },
		{ stat: 'accCombat', val: [2, 4], op: 'add', using: 'Big Sword,Big Blunt' },
		{ stat: 'pDef', val: 0.8, op: 'mul' },
		{ stat: 'rEvas', val: 3, op: 'sub' } ]},
	{ id: 99, levels: 2, name: 'Rapid Shot', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_speed_up_bow', effects: [
		{ stat: 'pAtkSpd', val: [1.08, 1.12], op: 'mul', using: 'Bow' } ]},
	{ id: 104, levels: 1, name: 'Detect Plant Weakness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'detect_weakness', effects: [
		{ stat: 'pAtk-plants', val: 1.3, op: 'mul' } ]},
	{ id: 109, levels: 1, name: 'Ogre Spirit Totem', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'possession', effects: [
		{ stat: 'pAtk', val: 1.3, op: 'mul', using: 'Dual Fist' },
		{ stat: 'pDef', val: 1.3, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'cAtk', val: 1.1, op: 'mul', using: 'Dual Fist' } ]},
	{ id: 110, levels: 2, name: 'Ultimate Defense', target: 'SELF', operateType: 'A2', effectType: 'ImmobileBuff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: [1800, 3600], op: 'add' },
		{ stat: 'mDef', val: [1620, 3240], op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 111, levels: 2, name: 'Ultimate Evasion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up_special', effects: [
		{ stat: 'pSkillEvas', val: [25, 40], op: 'add' },
		{ stat: 'rEvas', val: [20, 25], op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 112, levels: 4, name: 'Deflect Arrow', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up_bow', effects: [
		{ stat: 'bowWpnVuln', val: [0.84, 0.76, 0.68, 0.6], op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: [0.92, 0.88, 0.84, 0.8], op: 'mul' } ]},
	{ id: 113, levels: 2, name: 'Long Shot', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkRange', val: [200, 400], op: 'add', using: 'Bow' } ]},
	{ id: 116, levels: 14, name: 'Howl', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'pa_down', effects: [
		{ stat: 'pAtk', val: 0.77, op: 'mul' } ]},
	{ id: 118, levels: 1, name: 'Magician\'s Movement', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 0.8, op: 'mul' } ]},
	{ id: 121, levels: 6, name: 'Battle Roar', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 123, levels: 3, name: 'Spirit Barrier', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 130, levels: 2, name: 'Thrill Fight', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'thrill_fight', effects: [
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.1], op: 'mul' } ]},
	{ id: 131, levels: 3, name: 'Hawk Eye', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'ab_hawk_eye', effects: [
		{ stat: 'accCombat', val: [6, 8, 10], op: 'add' },
		{ stat: 'pDef', val: 0.9, op: 'mul' } ]},
	{ id: 134, levels: 1, name: 'Toughness', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: 20, op: 'sub' },
		{ stat: 'sleepVuln', val: 20, op: 'sub' },
		{ stat: 'poisonVuln', val: 20, op: 'sub' } ]},
	{ id: 137, levels: 4, name: 'Critical Chance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: [0.2, 0.3, 0.4, 0.5], op: 'basemul' } ]},
	{ id: 139, levels: 3, name: 'Guts', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pinch', effects: [
		{ stat: 'pDef', val: [2, 2.5, 3], op: 'mul' } ]},
	{ id: 141, levels: 3, name: 'Weapon Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.085, op: 'mul' },
		{ stat: 'pAtk', val: [2, 3, 4], op: 'add' } ]},
	{ id: 142, levels: 5, name: 'Armor Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [9, 11, 12, 13, 14], op: 'add' },
		{ stat: 'rEvas', val: [0, 0, 0, 3, 3], op: 'add', using: 'Light' } ]},
	{ id: 144, levels: 37, name: 'Dual Weapon Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [23.7, 25.4, 27.1, 29, 30.9, 32.9, 35, 37.1, 39.4, 41.7, 44.1, 46.6, 49.2, 51.9, 54.6, 57.5, 60.4, 63.3, 66.4, 69.5, 72.7, 76, 79.3, 82.7, 86.1, 89.6, 93.1, 96.6, 100.2, 103.8, 107.5, 111.1, 114.8, 118.4, 122.1, 125.7, 129.3], op: 'add', using: 'Dual Sword' } ]},
	{ id: 146, levels: 45, name: 'Anti Magic', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: [10, 12, 14, 16, 18, 20, 23, 25, 28, 30, 34, 36, 40, 42, 43, 46, 47, 49, 52, 54, 56, 59, 61, 63, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 91, 93, 95, 97, 99, 102, 104, 106, 108], op: 'add' },
		{ stat: 'magicDamVul', val: [1, 1, 0.95, 0.95, 0.95, 0.95, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7], op: 'mul' } ]},
	{ id: 147, levels: 51, name: 'Magic Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: [22, 24, 26, 28, 29, 31, 32, 33, 36, 37, 39, 42, 43, 45, 48, 50, 51, 53, 55, 57, 59, 61, 62, 64, 67, 69, 71, 73, 75, 77, 79, 82, 84, 86, 89, 91, 94, 96, 98, 101, 103, 106, 109, 111, 114, 116, 119, 122, 124, 127, 130], op: 'add' },
		{ stat: 'magicDamVul', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8], op: 'mul' } ]},
	{ id: 148, levels: 8, name: 'Vital Force', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: [1.9, 2.7, 2.9, 3.6, 4.5, 4.7, 5.6, 6.7], op: 'add' },
		{ stat: 'regMp', val: [1.9, 2.1, 2.2, 2.5, 2.7, 2.8, 3.1, 3.5], op: 'add' } ]},
	{ id: 150, levels: 3, name: 'Weight Limit', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'weightLimit', val: [2, 3, 4], op: 'mul' } ]},
	{ id: 153, levels: 4, name: 'Shield Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rShld', val: [1.5, 1.7, 1.85, 2], op: 'mul' },
		{ stat: 'sDef', val: [1.3, 1.4, 1.5, 1.6], op: 'mul' },
		{ stat: 'pDef', val: [1, 1, 1.1, 1.1], op: 'mul', using: 'Heavy' } ]},
	{ id: 163, levels: 1, name: 'Spellcraft', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 0.5, op: 'mul' } ]},
	{ id: 164, levels: 3, name: 'Quick Recycle', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mReuse', val: [0.9, 0.85, 0.8], op: 'mul' } ]},
	{ id: 168, levels: 3, name: 'Boost Attack Speed', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: [1.05, 1.07, 1.1], op: 'mul' } ]},
	{ id: 169, levels: 2, name: 'Quick Step', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: [7, 11], op: 'add' } ]},
	{ id: 171, levels: 8, name: 'Esprit', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6], op: 'add' },
		{ stat: 'regMp', val: [1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5], op: 'add' },
		{ stat: 'rootVuln', val: 11, op: 'sub' } ]},
	{ id: 173, levels: 2, name: 'Acrobatics', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fall', val: [60, 100], op: 'sub' } ]},
	{ id: 176, levels: 3, name: 'Frenzy', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pinch', effects: [
		{ stat: 'pAtk', val: [1.1, 1.12, 1.15], op: 'mul' },
		{ stat: 'pAtk', val: [1.2, 1.3, 1.4], op: 'mul', using: 'Sword,Big Sword,Blunt,Big Blunt', hp: 60 },
		{ stat: 'pAtk', val: [1.05, 1.07, 1.1], op: 'mul', using: 'Big Sword,Big Blunt', hp: 60 },
		{ stat: 'accCombat', val: [2, 4, 6], op: 'add', using: 'Big Sword,Big Blunt', hp: 60 } ]},
	{ id: 191, levels: 6, name: 'Focus Mind', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: [3.1, 3.5, 3.9, 4.3, 4.7, 5.1], op: 'add' } ]},
	{ id: 193, levels: 7, name: 'Critical Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: [32, 56, 93, 177, 295, 384, 406], op: 'add' } ]},
	{ id: 194, levels: 1, name: 'Lucky', target: 'SELF', operateType: 'P', effectType: 'Lucky' },
	{ id: 195, levels: 2, name: 'Breath Boost', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'breath', val: [180, 300], op: 'add' } ]},
	{ id: 196, levels: 1, name: 'Holy Blade', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'holyPower', val: 10, op: 'add' } ]},
	{ id: 197, levels: 2, name: 'Holy Armor', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'darkRes', val: [7, 10], op: 'add' } ]},
	{ id: 198, levels: 3, name: 'Boost Evasion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: [2, 3, 4], op: 'add' } ]},
	{ id: 205, levels: 45, name: 'Sword/Blunt Weapon Mastery', target: 'SELF', operateType: 'P', trigger: [
		0, 0, 0, 0, 0, 0, 0, 0, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604, 5604], effects: [
		{ stat: 'pAtk', val: [4.5, 7.3, 8.9, 10.7, 12.8, 15.1, 17.7, 20.5, 23.7, 25.4, 27.1, 29, 30.9, 32.9, 35, 37.1, 39.4, 41.7, 44.1, 46.6, 49.2, 51.9, 54.6, 57.5, 60.4, 63.3, 66.4, 69.5, 72.7, 76, 79.3, 82.7, 86.1, 89.6, 93.1, 96.6, 100.2, 103.8, 107.5, 111.1, 114.8, 118.4, 122.1, 125.7, 129.3], op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt' } ]},
	{ id: 208, levels: 52, name: 'Bow Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [10.3, 11.4, 27.6, 32.8, 35.6, 38.6, 45.2, 48.9, 52.7, 61.1, 65.6, 70.4, 80.9, 86.5, 92.4, 105.1, 111.9, 178.8, 189.9, 201.4, 213.5, 226, 239.1, 252.7, 266.7, 281.3, 296.4, 311.9, 328, 344.5, 361.6, 379.1, 397, 415.4, 434.3, 453.5, 473.2, 493.1, 513.5, 534.2, 555.1, 576.3, 597.8, 619.4, 641.2, 663.1, 685, 707.1, 729.1, 751, 772.9, 794.6], op: 'add', using: 'Bow' } ]},
	{ id: 209, levels: 45, name: 'Dagger Mastery', target: 'SELF', operateType: 'P', trigger: [
		0, 0, 0, 0, 0, 0, 0, 0, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603, 5603], effects: [
		{ stat: 'pAtk', val: [3.6, 6, 7.4, 9, 10.8, 12.8, 15.1, 17.6, 20.3, 21.8, 23.4, 25, 26.6, 28.4, 30.2, 32.1, 34.1, 36.1, 38.2, 40.4, 42.7, 45, 47.4, 49.9, 52.4, 55, 57.7, 60.4, 63.2, 66.1, 69, 71.9, 74.9, 78, 81.1, 84.2, 87.3, 90.5, 93.7, 96.8, 100, 103.2, 106.4, 109.6, 112.8], op: 'add', using: 'Dagger,Dual Dagger' } ]},
	{ id: 210, levels: 45, name: 'Fist Weapon Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [4.5, 7.3, 8.9, 10.7, 12.8, 15.1, 17.7, 20.5, 23.7, 25.4, 27.1, 29, 30.9, 32.9, 35, 37.1, 39.4, 41.7, 44.1, 46.6, 49.2, 51.9, 54.6, 57.5, 60.4, 63.3, 66.4, 69.5, 72.7, 76, 79.3, 82.7, 86.1, 89.6, 93.1, 96.6, 100.2, 103.8, 107.5, 111.1, 114.8, 118.4, 122.1, 125.7, 129.3], op: 'add', using: 'Dual Fist' } ]},
	{ id: 211, levels: 10, name: 'Boost HP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: [60, 100, 150, 200, 250, 300, 350, 400, 440, 480], op: 'add' } ]},
	{ id: 212, levels: 8, name: 'Fast HP Recovery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: [1.1, 1.6, 1.7, 2.1, 2.6, 2.7, 3.4, 4], op: 'add' } ]},
	{ id: 213, levels: 8, name: 'Boost Mana', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: [30, 50, 70, 100, 140, 152, 180, 200], op: 'add' } ]},
	{ id: 214, levels: 1, name: 'Mana Recovery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.2, op: 'mul', using: 'Magic' } ]},
	{ id: 216, levels: 45, name: 'Polearm Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [4.5, 7.3, 8.9, 10.7, 12.8, 15.1, 17.7, 20.5, 23.7, 25.4, 27.1, 29, 30.9, 32.9, 35, 37.1, 39.4, 41.7, 44.1, 46.6, 49.2, 51.9, 54.6, 57.5, 60.4, 63.3, 66.4, 69.5, 72.7, 76, 79.3, 82.7, 86.1, 89.6, 93.1, 96.6, 100.2, 103.8, 107.5, 111.1, 114.8, 118.4, 122.1, 125.7, 129.3], op: 'add', using: 'Pole' },
		{ stat: 'atkCountMax', val: [5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], op: 'add', using: 'Pole' } ]},
	{ id: 217, levels: 45, name: 'Sword/Blunt Weapon Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [1.5, 3.1, 4.1, 5.2, 6.5, 7.9, 9.4, 11.1, 13, 14, 15.1, 16.2, 17.3, 18.5, 19.8, 21.1, 22.4, 23.8, 25.3, 26.8, 28.3, 29.9, 31.6, 33.3, 35, 36.8, 38.6, 40.5, 42.4, 44.4, 46.4, 48.4, 50.4, 52.5, 54.6, 56.8, 58.9, 61.1, 63.3, 65.5, 67.6, 69.8, 72, 74.2, 76.4], op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt' },
		{ stat: 'aggression', val: [20, 20, 20, 20, 20, 20, 20, 20, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60], op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt' } ]},
	{ id: 221, levels: 1, name: 'Silent Move', target: 'SELF', operateType: 'T', effectType: 'SilentMove', effects: [
		{ stat: 'runSpd', val: 0.6, op: 'mul' } ]},
	{ id: 222, levels: 1, name: 'Fury Fists', target: 'SELF', operateType: 'T', effectType: 'DamOverTime', effects: [
		{ stat: 'pAtkSpd', val: 1.25, op: 'mul' } ]},
	{ id: 225, levels: 3, name: 'Acrobatic Move', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: [4, 5, 6], op: 'add' },
		{ stat: 'stunVuln', val: 11, op: 'add' } ]},
	{ id: 226, levels: 1, name: 'Relax', target: 'SELF', operateType: 'T', effectType: 'Relax', effects: [
		{ stat: 'regHp', val: 5, op: 'add' } ]},
	{ id: 227, levels: 50, name: 'Light Armor Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [4.2, 5.3, 6.5, 7.7, 9, 9.9, 10.8, 12.7, 13.7, 14.8, 16.9, 18, 19.1, 21.5, 22.7, 24, 25.3, 26.6, 27.9, 29.3, 30.7, 32.1, 33.6, 35, 36.5, 38.1, 39.6, 41.2, 42.8, 44.5, 46.1, 47.8, 49.5, 51.3, 53, 54.8, 56.6, 58.4, 60.2, 62.1, 64, 65.8, 67.7, 69.7, 71.6, 73.5, 75.5, 77.4, 79.4, 81.3], op: 'add', using: 'Light' },
		{ stat: 'rEvas', val: [3, 3, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], op: 'add', using: 'Light' } ]},
	{ id: 228, levels: 3, name: 'Fast Spell Casting', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: [1.05, 1.07, 1.1], op: 'mul' } ]},
	{ id: 229, levels: 7, name: 'Fast Mana Recovery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: [1.1, 1.5, 1.9, 2.3, 2.7, 3.1, 3.4], op: 'add' } ]},
	{ id: 230, levels: 2, name: 'Sprint', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [22, 33], op: 'add' } ]},
	{ id: 231, levels: 50, name: 'Heavy Armor Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [1.9, 3.3, 4.8, 6.4, 8.1, 8.9, 9.8, 11.7, 12.7, 13.7, 15.8, 16.9, 18, 20.4, 21.6, 22.8, 24.1, 25.4, 26.7, 28, 29.4, 30.8, 32.2, 33.7, 35.2, 36.7, 38.2, 39.8, 41.4, 43, 44.6, 46.3, 48, 49.7, 51.4, 53.2, 55, 56.7, 58.6, 60.4, 62.2, 64.1, 66, 67.8, 69.7, 71.6, 73.6, 75.5, 77.4, 79.3], op: 'add', using: 'Heavy' } ]},
	{ id: 232, levels: 52, name: 'Heavy Armor Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [17.7, 19.1, 20.5, 23.5, 25, 26.7, 30, 31.8, 33.6, 37.4, 39.3, 41.3, 45.6, 47.7, 50, 54.6, 57.1, 59.5, 62.1, 64.6, 67.3, 70, 72.7, 75.5, 78.4, 81.3, 84.3, 87.3, 90.4, 93.5, 96.7, 99.9, 103.2, 106.5, 109.9, 113.3, 116.8, 120.3, 123.8, 127.4, 131, 134.7, 138.4, 142.1, 145.8, 149.6, 153.4, 157.2, 161, 164.9, 168.7, 172.6], op: 'add', using: 'Heavy' },
		{ stat: 'critVuln', val: [0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65], op: 'mul', using: 'Heavy' } ]},
	{ id: 233, levels: 47, name: 'Light Armor Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [1.3, 2.2, 3.2, 4.2, 5.3, 6.8, 8.4, 10.1, 11.9, 13.7, 15.7, 16.7, 17.8, 18.8, 19.9, 21.1, 22.2, 23.4, 24.5, 25.8, 27, 28.2, 29.5, 30.8, 32.1, 33.5, 34.8, 36.2, 37.6, 39.1, 40.5, 42, 43.5, 44.9, 46.5, 48, 49.5, 51.1, 52.7, 54.2, 55.8, 57.4, 59.1, 60.7, 62.3, 63.9, 65.6], op: 'add', using: 'Light' },
		{ stat: 'rEvas', val: [4, 4, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], op: 'add', using: 'Light' },
		{ stat: 'critDamEvas', val: [1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35], op: 'mul', using: 'Light' } ]},
	{ id: 234, levels: 41, name: 'Robe Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [1.7, 2.7, 4.3, 5.4, 7.2, 8.5, 10.6, 12.1, 14.5, 15.3, 16.2, 17.9, 18.8, 19.8, 21.7, 22.7, 23.7, 25.8, 26.8, 27.9, 30.1, 31.2, 32.4, 33.5, 34.7, 35.9, 37.1, 38.4, 39.6, 40.8, 42.1, 43.4, 44.7, 45.9, 47.3, 48.6, 49.9, 51.2, 52.5, 53.9, 55.2], op: 'add', using: 'Magic' } ]},
	{ id: 235, levels: 41, name: 'Robe Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [7.2, 8.6, 11, 12.7, 15.4, 17.4, 20.5, 22.7, 26.3, 27.6, 28.8, 31.5, 32.9, 34.2, 37.1, 38.6, 40.1, 43.2, 44.8, 46.4, 49.8, 51.5, 53.2, 54.9, 56.7, 58.5, 60.3, 62.1, 64, 65.9, 67.7, 69.7, 71.6, 73.5, 75.5, 77.4, 79.4, 81.4, 83.4, 85.4, 87.4], op: 'add', using: 'Magic' } ]},
	{ id: 236, levels: 41, name: 'Light Armor Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [5.4, 6.3, 7.8, 8.8, 10.9, 12.5, 15, 16.9, 19.8, 20.8, 21.8, 24, 25.1, 26.3, 28.6, 29.8, 31, 33.6, 34.9, 36.2, 38.9, 40.3, 41.7, 43.1, 44.6, 46, 47.5, 49, 50.5, 52.1, 53.6, 55.2, 56.7, 58.3, 59.9, 61.5, 63.1, 64.7, 66.4, 68, 69.6], op: 'add', using: 'Light' },
		{ stat: 'mAtkSpd', val: 1.91, op: 'mul', using: 'Light' },
		{ stat: 'pAtkSpd', val: 1.25, op: 'mul', using: 'Light' },
		{ stat: 'regMp', val: 1.2, op: 'mul', using: 'Light' } ]},
	{ id: 244, levels: 3, name: 'Armor Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [6.7, 8, 9.2], op: 'add' } ]},
	{ id: 249, levels: 42, name: 'Weapon Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [1.5, 2.8, 4.5, 5.7, 6.7, 8.3, 9.5, 11.6, 13.3, 16, 17, 18.1, 20.4, 21.6, 22.8, 25.5, 26.9, 28.3, 31.4, 33, 34.6, 38, 39.8, 41.7, 43.5, 45.4, 47.4, 49.4, 51.4, 53.5, 55.6, 57.7, 59.9, 62, 64.1, 66.8, 68.5, 70.7, 72.9, 75.1, 77.2, 79.4], op: 'add' },
		{ stat: 'mAtk', val: [1.9, 3.5, 5.7, 7.2, 8.3, 10.3, 11.9, 14.6, 16.6, 20, 21.3, 22.6, 25.4, 26.9, 28.5, 31.8, 33.6, 35.4, 39.2, 41.2, 43.2, 47.5, 49.8, 52.1, 54.4, 56.8, 59.2, 61.7, 64.3, 66.8, 69.4, 72.1, 74.8, 77.4, 80.2, 82.9, 85.6, 88.4, 91.1, 93.8, 96.5, 99.3], op: 'add' },
		{ stat: 'pAtk', val: 1.45, op: 'mul' },
		{ stat: 'mAtk', val: 1.17, op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.7, op: 'mul', using: 'Bow,Pole' },
		{ stat: 'accCombat', val: 8, op: 'sub', using: 'Bow,Pole' } ]},
	{ id: 250, levels: 42, name: 'Weapon Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [1.5, 2.8, 4.5, 5.7, 6.7, 8.3, 9.5, 11.6, 13.3, 16, 17, 18.1, 20.4, 21.6, 22.8, 25.5, 26.9, 28.3, 31.4, 33, 34.6, 38, 39.8, 41.7, 43.5, 45.4, 47.4, 49.4, 51.4, 53.5, 55.6, 57.7, 59.9, 62, 64.1, 66.8, 68.5, 70.7, 72.9, 75.1, 77.2, 79.4], op: 'add' },
		{ stat: 'mAtk', val: [1.9, 3.5, 5.7, 7.2, 8.3, 10.3, 11.9, 14.6, 16.6, 20, 21.3, 22.6, 25.4, 26.9, 28.5, 31.8, 33.6, 35.4, 39.2, 41.2, 43.2, 47.5, 49.8, 52.1, 54.4, 56.8, 59.2, 61.7, 64.3, 66.8, 69.4, 72.1, 74.8, 77.4, 80.2, 82.9, 85.6, 88.4, 91.1, 93.8, 96.5, 99.3], op: 'add' },
		{ stat: 'pAtk', val: 1.45, op: 'mul' },
		{ stat: 'mAtk', val: 1.17, op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.7, op: 'mul', using: 'Bow,Pole' },
		{ stat: 'accCombat', val: 8, op: 'sub', using: 'Bow,Pole' },
		{ stat: 'absorbDamMana', val: 10, op: 'add' } ]},
	{ id: 251, levels: 45, name: 'Robe Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [11.6, 13.4, 16.1, 18.4, 20.9, 23.8, 26.9, 29.1, 32.8, 35.4, 39.6, 42.6, 47.3, 49, 50.7, 54.2, 56.1, 57.9, 61.8, 63.7, 65.7, 69.9, 72, 74.2, 78.6, 80.9, 83.2, 85.5, 87.8, 90.2, 92.6, 95.1, 97.6, 100.1, 102.6, 105.1, 107.7, 110.3, 112.9, 115.5, 118.1, 120.8, 123.4, 126.1, 128.8], op: 'add', using: 'Magic' } ]},
	{ id: 252, levels: 45, name: 'Light Armor Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [12.6, 14.5, 17.5, 19.3, 21.2, 23.2, 25.5, 27, 30.1, 32.5, 36.3, 39.1, 43.5, 45, 46.6, 49.8, 51.5, 53.2, 56.7, 58.5, 60.4, 64.2, 66.1, 68.1, 72.2, 74.2, 76.3, 78.5, 80.6, 82.8, 85.1, 87.3, 89.6, 91.9, 94.2, 96.5, 98.9, 101.2, 103.6, 106, 108.5, 110.9, 113.3, 115.8, 118.2], op: 'add', using: 'Light' },
		{ stat: 'mAtkSpd', val: 1.9, op: 'mul', using: 'Light' },
		{ stat: 'pAtkSpd', val: 1.25, op: 'mul', using: 'Light' },
		{ stat: 'regMp', val: 1.2, op: 'mul', using: 'Light' } ]},
	{ id: 253, levels: 43, name: 'Heavy Armor Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [11.6, 13.3, 15.2, 17.2, 19.5, 21.1, 23.7, 25.6, 28.7, 30.8, 34.3, 35.5, 36.7, 39.3, 40.6, 41.9, 44.7, 46.1, 47.6, 50.6, 52.1, 53.7, 56.9, 58.6, 60.2, 61.9, 63.6, 65.3, 67.1, 68.9, 70.7, 72.5, 74.3, 76.1, 78, 79.9, 81.7, 83.6, 85.5, 87.5, 89.4, 91.3, 93.3], op: 'add', using: 'Heavy' },
		{ stat: 'mAtkSpd', val: 1.71, op: 'mul', using: 'Heavy' },
		{ stat: 'pAtkSpd', val: 1.25, op: 'mul', using: 'Heavy' } ]},
	{ id: 256, levels: 1, name: 'Accuracy', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'accCombat', val: 3, op: 'add' } ]},
	{ id: 257, levels: 45, name: 'Sword/Blunt Weapon Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [4.5, 7.3, 8.9, 10.7, 12.8, 15.1, 17.7, 20.5, 23.7, 25.4, 27.1, 29, 30.9, 32.9, 35, 37.1, 39.4, 41.7, 44.1, 46.6, 49.2, 51.9, 54.6, 57.5, 60.4, 63.3, 66.4, 69.5, 72.7, 76, 79.3, 82.7, 86.1, 89.6, 93.1, 96.6, 100.2, 103.8, 107.5, 111.1, 114.8, 118.4, 122.1, 125.7, 129.3], op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt' } ]},
	{ id: 258, levels: 33, name: 'Light Armor Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [11.1, 11.8, 12.5, 14, 14.8, 15.6, 17.3, 18.1, 19, 20.8, 21.7, 22.6, 24.5, 25.5, 26.4, 27.4, 28.4, 29.5, 30.5, 31.6, 32.6, 33.7, 34.8, 35.9, 37, 38.1, 39.2, 40.3, 41.4, 42.6, 43.7, 44.8, 46], op: 'add', using: 'Light' },
		{ stat: 'mAtkSpd', val: 1.88, op: 'mul', using: 'Light' },
		{ stat: 'pAtkSpd', val: 1.25, op: 'mul', using: 'Light' },
		{ stat: 'regMp', val: 1.2, op: 'mul', using: 'Light' } ]},
	{ id: 259, levels: 33, name: 'Heavy Armor Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [14.8, 15.6, 16.5, 18.3, 19.2, 20.2, 22.1, 23.1, 24.1, 26.2, 27.3, 28.4, 30.6, 31.8, 33, 34.1, 35.3, 36.5, 37.8, 39, 40.3, 41.5, 42.8, 44.1, 45.4, 46.7, 48, 49.4, 50.7, 52, 53.4, 54.7, 56.1], op: 'add', using: 'Heavy' },
		{ stat: 'mAtkSpd', val: 1.68, op: 'mul', using: 'Heavy' },
		{ stat: 'pAtkSpd', val: 1.25, op: 'mul', using: 'Heavy' } ]},
	{ id: 264, levels: 1, name: 'Song of Earth', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_earth', effects: [
		{ stat: 'pDef', val: 1.25, op: 'mul' } ]},
	{ id: 265, levels: 1, name: 'Song of Life', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_life', effects: [
		{ stat: 'regHp', val: 1.2, op: 'mul' } ]},
	{ id: 266, levels: 1, name: 'Song of Water', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_water', effects: [
		{ stat: 'rEvas', val: 3, op: 'add' } ]},
	{ id: 267, levels: 1, name: 'Song of Warding', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_warding', effects: [
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 268, levels: 1, name: 'Song of Wind', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_wind', effects: [
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 269, levels: 1, name: 'Song of Hunter', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_hunter', effects: [
		{ stat: 'rCrit', val: 1, op: 'basemul' } ]},
	{ id: 270, levels: 1, name: 'Song of Invocation', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_invocation', effects: [
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 271, levels: 1, name: 'Dance of the Warrior', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_warrior', effects: [
		{ stat: 'pAtk', val: 1.12, op: 'mul' } ]},
	{ id: 272, levels: 1, name: 'Dance of Inspiration', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_inspiration', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 273, levels: 1, name: 'Dance of the Mystic', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_mystic', effects: [
		{ stat: 'mAtk', val: 1.2, op: 'mul' } ]},
	{ id: 274, levels: 1, name: 'Dance of Fire', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_fire', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 275, levels: 1, name: 'Dance of Fury', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_fury', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 276, levels: 1, name: 'Dance of Concentration', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_concentration', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' },
		{ stat: 'cancel', val: 40, op: 'sub' } ]},
	{ id: 277, levels: 1, name: 'Dance of Light', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_light', effects: [
		{ stat: 'holyPower', val: 20, op: 'add' } ]},
	{ id: 282, levels: 1, name: 'Puma Spirit Totem', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'possession', effects: [
		{ stat: 'accCombat', val: 6, op: 'add', using: 'Dual Fist' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul', using: 'Dual Fist' } ]},
	{ id: 285, levels: 27, name: 'Higher Mana Gain', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'manaCharge', val: [22, 24, 28, 29, 31, 32, 38, 39, 41, 42, 48, 49, 50, 52, 53, 59, 61, 62, 64, 66, 72, 73, 75, 76, 78, 79, 81], op: 'add' } ]},
	{ id: 286, levels: 3, name: 'Provoke', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'real_target', effects: [
		{ stat: 'poleWpnVuln', val: [1.1, 1.15, 1.2], op: 'mul' } ]},
	{ id: 287, levels: 3, name: 'Lionheart', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'resist_spiritless', effects: [
		{ stat: 'cancelVuln', val: 40, op: 'sub' },
		{ stat: 'stunVuln', val: [40, 60, 80], op: 'sub' },
		{ stat: 'rootVuln', val: [40, 60, 80], op: 'sub' },
		{ stat: 'sleepVuln', val: [40, 60, 80], op: 'sub' },
		{ stat: 'paralyzeVuln', val: [40, 60, 80], op: 'sub' } ]},
	{ id: 288, levels: 4, name: 'Guard Stance', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'pDef', val: [121.8, 161.1, 212.1, 256.5], op: 'add' },
		{ stat: 'rShld', val: 1.5, op: 'mul' } ]},
	{ id: 290, levels: 14, name: 'Final Frenzy', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [32.9, 39.4, 46.6, 54.6, 63.3, 72.7, 79.3, 86.1, 93.1, 100.2, 107.5, 114.8, 122.1, 129.3], op: 'add', hp: 30 } ]},
	{ id: 291, levels: 11, name: 'Final Fortress', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [116.875, 129, 141.625, 150.375, 159.25, 168.375, 177.625, 187, 196.5, 206.125, 215.75], op: 'add', hp: 30 } ]},
	{ id: 292, levels: 1, name: 'Bison Spirit Totem', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'possession', effects: [
		{ stat: 'accCombat', val: 6, op: 'add', using: 'Dual Fist' },
		{ stat: 'pAtk', val: 1.1, op: 'mul', hp: 60 },
		{ stat: 'rCrit', val: 100, op: 'add', hp: 60 },
		{ stat: 'pAtk', val: 1.3, op: 'mul', hp: 30 },
		{ stat: 'rCrit', val: 300, op: 'add', hp: 30 } ]},
	{ id: 293, levels: 20, name: 'Two-handed Weapon Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [4.5, 7.3, 10.7, 15.1, 20.5, 27.1, 32.9, 39.4, 46.6, 54.6, 63.3, 72.7, 79.3, 86.1, 93.1, 100.2, 107.5, 114.8, 122.1, 129.3], op: 'add', using: 'Big Sword,Big Blunt' },
		{ stat: 'accCombat', val: 3, op: 'add', using: 'Big Sword,Big Blunt' } ]},
	{ id: 294, levels: 1, name: 'Shadow Sense', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 3, op: 'add' } ]},
	{ id: 295, levels: 1, name: 'Iron Body', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'damageZoneVuln', val: 40, op: 'sub' } ]},
	{ id: 296, levels: 1, name: 'Chameleon Rest', target: 'SELF', operateType: 'T', effectType: 'ChameleonRest' },
	{ id: 297, levels: 2, name: 'Duelist Spirit', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'duelist_spirit', effects: [
		{ stat: 'pAtkSpd', val: [1.08, 1.12], op: 'mul', using: 'Dual Sword' },
		{ stat: 'pvpPhysDmg', val: [1.05, 1.1], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1.05, 1.1], op: 'mul' } ]},
	{ id: 298, levels: 1, name: 'Rabbit Spirit Totem', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'possession', effects: [
		{ stat: 'pAtkSpd', val: 1.3, op: 'mul', using: 'Dual Fist' },
		{ stat: 'runSpd', val: 1.3, op: 'mul' },
		{ stat: 'rEvas', val: 12, op: 'add' } ]},
	{ id: 303, levels: 4, name: 'Soul of Sagittarius', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: [1.1, 1.15, 1.2, 1.25], op: 'mul' } ]},
	{ id: 304, levels: 1, name: 'Song of Vitality', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_vitality', effects: [
		{ stat: 'maxHp', val: 1.3, op: 'mul' } ]},
	{ id: 305, levels: 1, name: 'Song of Vengeance', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_vengeance', effects: [
		{ stat: 'reflectDam', val: 20, op: 'add' } ]},
	{ id: 306, levels: 1, name: 'Song of Flame Guard', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_flame_guard', effects: [
		{ stat: 'fireRes', val: 30, op: 'add' } ]},
	{ id: 307, levels: 1, name: 'Dance of Aqua Guard', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_aqua_guard', effects: [
		{ stat: 'waterRes', val: 30, op: 'add' } ]},
	{ id: 308, levels: 1, name: 'Song of Storm Guard', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_storm_guard', effects: [
		{ stat: 'windRes', val: 30, op: 'add' } ]},
	{ id: 309, levels: 1, name: 'Dance of Earth Guard', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_earth_guard', effects: [
		{ stat: 'earthRes', val: 30, op: 'add' } ]},
	{ id: 310, levels: 1, name: 'Dance of the Vampire', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_vampire', effects: [
		{ stat: 'absorbDam', val: 8, op: 'add' } ]},
	{ id: 311, levels: 1, name: 'Dance of Protection', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_protection', effects: [
		{ stat: 'damageZoneVuln', val: 30, op: 'sub' } ]},
	{ id: 312, levels: 20, name: 'Vicious Stance', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'cAtkAdd', val: [35, 48, 64, 84, 109, 139, 166, 196, 229, 266, 306, 349, 379, 410, 443, 475, 509, 542, 576, 609], op: 'add' } ]},
	{ id: 313, levels: 8, name: 'Snipe', target: 'SELF', operateType: 'A2', effectType: 'ImmobileBuff', abnormalType: 'snipe', effects: [
		{ stat: 'pAtk', val: [124, 134, 145, 155, 166, 177, 188, 199], op: 'add', using: 'Bow' },
		{ stat: 'accCombat', val: [3, 3, 4, 4, 5, 5, 6, 6], op: 'add', using: 'Bow' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul', using: 'Bow' },
		{ stat: 'pAtkRange', val: [50, 50, 100, 100, 150, 150, 200, 200], op: 'add', using: 'Bow' } ]},
	{ id: 316, levels: 1, name: 'Aegis', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'shieldDefAngle', val: 360, op: 'set' } ]},
	{ id: 317, levels: 5, name: 'Focus Attack', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'cAtk', val: [1.1, 1.15, 1.2, 1.25, 1.3], op: 'mul', using: 'Pole' },
		{ stat: 'accCombat', val: [2, 3, 4, 5, 6], op: 'add', using: 'Pole' },
		{ stat: 'atkCountMax', val: 1, op: 'set', using: 'Pole' } ]},
	{ id: 318, levels: 1, name: 'Aegis Stance', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'sDef', val: 0.7, op: 'mul' },
		{ stat: 'shieldDefAngle', val: 360, op: 'set' } ]},
	{ id: 319, levels: 2, name: 'Agile Movement', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: [5, 10], op: 'add', using: 'Light' },
		{ stat: 'accCombat', val: [2, 3], op: 'add', using: 'Light' } ]},
	{ id: 322, levels: 6, name: 'Shield Fortress', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'sDef', val: [446, 469, 491, 514, 537, 560], op: 'add' } ]},
	{ id: 327, levels: 1, name: 'Wyvern Aegis', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: 7000, op: 'add' },
		{ stat: 'mDef', val: 6000, op: 'add' },
		{ stat: 'cancelVuln', val: 100, op: 'sub' } ]},
	{ id: 328, levels: 1, name: 'Wisdom', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: 20, op: 'sub' },
		{ stat: 'sleepVuln', val: 20, op: 'sub' },
		{ stat: 'derangementVuln', val: 20, op: 'sub' } ]},
	{ id: 329, levels: 1, name: 'Health', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 20, op: 'sub' },
		{ stat: 'poisonVuln', val: 20, op: 'sub' } ]},
	{ id: 330, levels: 1, name: 'Skill Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'skillMastery', val: 2, op: 'add' } ]},
	{ id: 331, levels: 1, name: 'Skill Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'skillMastery', val: 2, op: 'add' } ]},
	{ id: 332, levels: 1, name: 'Extra Inventory', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'inventoryLimit', val: 1, op: 'add' } ]},
	{ id: 333, levels: 1, name: 'Extra Sales Slots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'PrivateBuyLimit', val: 1, op: 'add' },
		{ stat: 'PrivateSellLimit', val: 1, op: 'add' } ]},
	{ id: 334, levels: 1, name: 'Focus Skill Mastery', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'skillMastery', val: 2, op: 'mul' } ]},
	{ id: 335, levels: 1, name: 'Fortitude', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'paralyzeVuln', val: 30, op: 'sub' },
		{ stat: 'stunVuln', val: 30, op: 'sub' } ]},
	{ id: 336, levels: 1, name: 'Arcane Wisdom', target: 'SELF', operateType: 'T', effectType: 'DamOverTime', effects: [
		{ stat: 'mAtkSpd', val: 0.9, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.7, op: 'mul' } ]},
	{ id: 337, levels: 1, name: 'Arcane Power', target: 'SELF', operateType: 'T', effectType: 'DamOverTime', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 1.1, op: 'mul' },
		{ stat: 'mAtk', val: 1.3, op: 'mul' } ]},
	{ id: 338, levels: 1, name: 'Arcane Agility', target: 'SELF', operateType: 'T', effectType: 'DamOverTime', effects: [
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mReuse', val: 0.9, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 1.1, op: 'mul' } ]},
	{ id: 339, levels: 1, name: 'Parry Stance', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'pDef', val: 1.25, op: 'mul' },
		{ stat: 'mDef', val: 1.25, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.8, op: 'mul' },
		{ stat: 'runSpd', val: 0.9, op: 'mul' },
		{ stat: 'accCombat', val: 4, op: 'sub' } ]},
	{ id: 340, levels: 1, name: 'Riposte Stance', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'reflectDam', val: 30, op: 'add' },
		{ stat: 'reflectSkillPhysic', val: 30, op: 'add' },
		{ stat: 'reflectSkillMagic', val: 30, op: 'add' },
		{ stat: 'pAtkSpd', val: 0.8, op: 'mul' },
		{ stat: 'runSpd', val: 0.9, op: 'mul' },
		{ stat: 'accCombat', val: 4, op: 'sub' } ]},
	{ id: 341, levels: 1, name: 'Touch of Life', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'touch_of_life', effects: [
		{ stat: 'cancelVuln', val: 100, op: 'sub' },
		{ stat: 'debuffVuln', val: 30, op: 'sub' },
		{ stat: 'healEffect', val: 1.3, op: 'mul' } ]},
	{ id: 347, levels: 1, name: 'Earthquake', target: 'AURA', operateType: 'A1', effectType: 'RemoveTarget' },
	{ id: 349, levels: 1, name: 'Song of Renewal', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_renewal', effects: [
		{ stat: 'mReuse', val: 0.8, op: 'mul' },
		{ stat: 'pReuse', val: 0.8, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 350, levels: 1, name: 'Physical Mirror', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'reflect_abnormal', effects: [
		{ stat: 'reflectSkillPhysic', val: 30, op: 'add', using: 'Shield' },
		{ stat: 'reflectSkillMagic', val: 10, op: 'add', using: 'Shield' } ]},
	{ id: 351, levels: 1, name: 'Magical Mirror', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'reflect_abnormal', effects: [
		{ stat: 'reflectSkillPhysic', val: 10, op: 'add', using: 'Shield' },
		{ stat: 'reflectSkillMagic', val: 30, op: 'add', using: 'Shield' } ]},
	{ id: 355, levels: 1, name: 'Focus Death', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'focus_dagger', effects: [
		{ stat: 'rCrit', val: -0.3, op: 'basemul' },
		{ stat: 'blowRate', val: 1.6, op: 'mul' },
		{ stat: 'cAtk', val: 0.7, op: 'mul', atkFrom: 'front' },
		{ stat: 'cAtk', val: 1.9, op: 'mul', atkFrom: 'behind' } ]},
	{ id: 356, levels: 1, name: 'Focus Chance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'focus_dagger', effects: [
		{ stat: 'rCrit', val: -0.3, op: 'basemul', atkFrom: 'front' },
		{ stat: 'rCrit', val: 0.3, op: 'basemul', atkFrom: 'side' },
		{ stat: 'rCrit', val: 0.6, op: 'basemul', atkFrom: 'behind' } ]},
	{ id: 357, levels: 1, name: 'Focus Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'focus_dagger', effects: [
		{ stat: 'cAtk', val: 0.7, op: 'mul', atkFrom: 'front' },
		{ stat: 'cAtk', val: 1.3, op: 'mul', atkFrom: 'side' },
		{ stat: 'cAtk', val: 1.6, op: 'mul', atkFrom: 'behind' } ]},
	{ id: 359, levels: 1, name: 'Eye of Hunter', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'detect_weakness', effects: [
		{ stat: 'pAtk-insects', val: 1.3, op: 'mul' },
		{ stat: 'pAtk-plants', val: 1.3, op: 'mul' },
		{ stat: 'pAtk-animals', val: 1.3, op: 'mul' } ]},
	{ id: 360, levels: 1, name: 'Eye of Slayer', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'detect_weakness', effects: [
		{ stat: 'pAtk-monsters', val: 1.3, op: 'mul' },
		{ stat: 'pAtk-dragons', val: 1.3, op: 'mul' },
		{ stat: 'pAtk-giants', val: 1.3, op: 'mul' },
		{ stat: 'pAtk-magicCreature', val: 1.3, op: 'mul' } ]},
	{ id: 363, levels: 1, name: 'Song of Meditation', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_meditation', effects: [
		{ stat: 'regMp', val: 1.2, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 364, levels: 1, name: 'Song of Champion', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_champion', effects: [
		{ stat: 'pReuse', val: 0.9, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 365, levels: 1, name: 'Siren\'s Dance', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_siren', effects: [
		{ stat: 'mCritRate', val: 1, op: 'basemul' } ]},
	{ id: 366, levels: 1, name: 'Dance of Shadows', target: 'PARTY', operateType: 'A2', effectType: 'SilentMove', abnormalType: 'dance_of_shadow', effects: [
		{ stat: 'runSpd', val: 0.5, op: 'mul' } ]},
	{ id: 367, levels: 1, name: 'Dance of Medusa', target: 'AURA', operateType: 'A2', effectType: 'Petrification', abnormalType: 'turn_stone' },
	{ id: 368, levels: 1, name: 'Vengeance', target: 'AURA', operateType: 'A3', effectType: 'ImmobileBuff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: 5400, op: 'add' },
		{ stat: 'mDef', val: 4050, op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 370, levels: 3, name: 'Clan Body', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: [1.03, 1.05, 1.06], op: 'mul' } ]},
	{ id: 371, levels: 3, name: 'Clan Spirituality', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: [1.06, 1.1, 1.12], op: 'mul' } ]},
	{ id: 372, levels: 3, name: 'Clan Soul', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: [1.03, 1.05, 1.06], op: 'mul' } ]},
	{ id: 373, levels: 3, name: 'Clan Regeneration', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: [1.03, 1.05, 1.06], op: 'mul' } ]},
	{ id: 374, levels: 3, name: 'Clan Morale', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regCp', val: [1.06, 1.1, 1.12], op: 'mul' } ]},
	{ id: 375, levels: 3, name: 'Clan Clarity', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: [1.03, 1.05, 1.06], op: 'mul' } ]},
	{ id: 376, levels: 3, name: 'Clan Might', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [1.03, 1.05, 1.06], op: 'mul' } ]},
	{ id: 377, levels: 3, name: 'Clan Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [1.03, 1.05, 1.06], op: 'mul' } ]},
	{ id: 378, levels: 3, name: 'Clan Empower', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: [1.06, 1.1, 1.12], op: 'mul' } ]},
	{ id: 379, levels: 3, name: 'Clan Magic Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: [1.06, 1.1, 1.12], op: 'mul' } ]},
	{ id: 380, levels: 3, name: 'Clan Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: [1, 2, 3], op: 'add' } ]},
	{ id: 381, levels: 3, name: 'Clan Agility', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: [1, 2, 3], op: 'add' } ]},
	{ id: 382, levels: 3, name: 'Clan Shield Defence', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rShld', val: [1.12, 1.2, 1.24], op: 'mul' } ]},
	{ id: 383, levels: 3, name: 'Clan Shield Block', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sDef', val: [1.24, 1.4, 1.48], op: 'mul' } ]},
	{ id: 384, levels: 3, name: 'Clan Cyclonic Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: [3, 5, 6], op: 'add' },
		{ stat: 'waterRes', val: [3, 5, 6], op: 'add' } ]},
	{ id: 385, levels: 3, name: 'Clan Magmatic Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: [3, 5, 6], op: 'add' },
		{ stat: 'earthRes', val: [3, 5, 6], op: 'add' } ]},
	{ id: 386, levels: 3, name: 'Clan Resist Shock', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: [12, 20, 24], op: 'sub' } ]},
	{ id: 387, levels: 3, name: 'Clan Resist Hold', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: [12, 20, 24], op: 'sub' } ]},
	{ id: 388, levels: 3, name: 'Clan Resist Sleep', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: [12, 20, 24], op: 'sub' } ]},
	{ id: 389, levels: 3, name: 'Clan Wind Walk', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: [3, 5, 6], op: 'add' } ]},
	{ id: 395, levels: 1, name: 'Heroic Miracle', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hero_buff', effects: [
		{ stat: 'cancelVuln', val: 80, op: 'sub' },
		{ stat: 'mDef', val: 4050, op: 'add' },
		{ stat: 'pDef', val: 5400, op: 'add' },
		{ stat: 'runSpd', val: 5, op: 'add' } ]},
	{ id: 396, levels: 1, name: 'Heroic Berserker', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hero_buff', effects: [
		{ stat: 'accCombat', val: 8, op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' },
		{ stat: 'debuffImmunity', val: 1, op: 'set' },
		{ stat: 'healEffect', val: 2, op: 'mul' },
		{ stat: 'mAtk', val: 500, op: 'add' },
		{ stat: 'mAtkSpd', val: 100, op: 'add' },
		{ stat: 'mDef', val: 25, op: 'sub' },
		{ stat: 'pAtk', val: 500, op: 'add' },
		{ stat: 'pAtkSpd', val: 100, op: 'add' },
		{ stat: 'pDef', val: 0.75, op: 'mul' },
		{ stat: 'rEvas', val: 8, op: 'sub' },
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 404, levels: 5, name: 'Mass Shackling', target: 'AURA', operateType: 'A2', effectType: 'Root', abnormalType: 'root_physically' },
	{ id: 406, levels: 3, name: 'Angelic Icon', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'possession', effects: [
		{ stat: 'debuffVuln', val: 40, op: 'sub' },
		{ stat: 'pDef', val: 1.5, op: 'mul' },
		{ stat: 'mDef', val: 1.5, op: 'mul' },
		{ stat: 'accCombat', val: 6, op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt' },
		{ stat: 'runSpd', val: [10, 20, 30], op: 'add' },
		{ stat: 'pAtkSpd', val: [1.1, 1.2, 1.3], op: 'mul', using: 'Sword,Big Sword,Blunt,Big Blunt' },
		{ stat: 'rCrit', val: [33, 66, 100], op: 'add', using: 'Sword,Big Sword' },
		{ stat: 'cAtk', val: [1.33, 1.66, 2], op: 'mul', using: 'Blunt,Big Blunt' },
		{ stat: 'cancelVuln', val: 40, op: 'sub' },
		{ stat: 'healEffect', val: 0.2, op: 'mul' } ]},
	{ id: 407, levels: 10, name: 'Psycho Symphony', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'all_speed_down', effects: [
		{ stat: 'runSpd', val: [0.9, 0.9, 0.9, 0.85, 0.85, 0.8, 0.8, 0.75, 0.75, 0.7], op: 'mul' },
		{ stat: 'pAtkSpd', val: [0.9, 0.9, 0.9, 0.85, 0.85, 0.8, 0.8, 0.75, 0.75, 0.7], op: 'mul' },
		{ stat: 'mAtkSpd', val: [0.9, 0.9, 0.9, 0.85, 0.85, 0.8, 0.8, 0.75, 0.75, 0.7], op: 'mul' } ]},
	{ id: 408, levels: 10, name: 'Demonic Blade Dance', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'all_attack_down', effects: [
		{ stat: 'mAtk', val: [0.9, 0.9, 0.9, 0.85, 0.85, 0.8, 0.8, 0.75, 0.75, 0.7], op: 'mul' },
		{ stat: 'pAtk', val: [0.9, 0.9, 0.9, 0.85, 0.85, 0.8, 0.8, 0.75, 0.75, 0.7], op: 'mul' } ]},
	{ id: 410, levels: 3, name: 'Mortal Strike', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'might_mortal', effects: [
		{ stat: 'blowRate', val: [1.1, 1.15, 1.2], op: 'mul' } ]},
	{ id: 411, levels: 3, name: 'Stealth', target: 'SELF', operateType: 'A2', effectType: 'SilentMove', abnormalType: 'stealth', effects: [
		{ stat: 'rEvas', val: [12, 8, 4], op: 'sub' },
		{ stat: 'pDef', val: [0.55, 0.7, 0.85], op: 'mul' },
		{ stat: 'mDef', val: [0.55, 0.7, 0.85], op: 'mul' },
		{ stat: 'accCombat', val: 12, op: 'sub' },
		{ stat: 'pAtk', val: 0.55, op: 'mul' } ]},
	{ id: 413, levels: 8, name: 'Rapid Fire', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'snipe', effects: [
		{ stat: 'pAtk', val: [62, 67, 73, 78, 83, 89, 94, 100], op: 'add', using: 'Bow' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul', using: 'Bow' },
		{ stat: 'pAtkRange', val: 0.5, op: 'mul', using: 'Bow' } ]},
	{ id: 414, levels: 8, name: 'Dead Eye', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'snipe', effects: [
		{ stat: 'pAtkSpd', val: 0.9, op: 'mul', using: 'Bow' },
		{ stat: 'pAtk', val: [124, 134, 155, 155, 166, 177, 188, 199], op: 'add', using: 'Bow' },
		{ stat: 'accCombat', val: [1, 1, 2, 2, 2, 3, 3, 3], op: 'add', using: 'Bow' },
		{ stat: 'cAtk', val: 1.2, op: 'mul', using: 'Bow' } ]},
	{ id: 415, levels: 3, name: 'Spirit of Sagittarius', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'mp_cost_down', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: [0.9, 0.8, 0.7], op: 'mul' } ]},
	{ id: 416, levels: 3, name: 'Blessing of Sagittarius', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'reuse_delay_down', effects: [
		{ stat: 'pReuse', val: [0.9, 0.85, 0.8], op: 'mul' } ]},
	{ id: 418, levels: 3, name: 'Quiver of Holding', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'weightLimit', val: [1.3, 1.4, 1.5], op: 'mul' } ]},
	{ id: 420, levels: 3, name: 'Zealot', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'debuffVuln', val: 80, op: 'sub' },
		{ stat: 'cancelVuln', val: 40, op: 'sub' },
		{ stat: 'runSpd', val: [10, 20, 30], op: 'add' },
		{ stat: 'accCombat', val: 6, op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt,Pole,Dual Fist' },
		{ stat: 'pAtkSpd', val: [1.1, 1.2, 1.3], op: 'mul', using: 'Sword,Big Sword,Blunt,Big Blunt,Pole,Dual Fist' },
		{ stat: 'rCrit', val: [33, 66, 100], op: 'add', using: 'Sword,Big Sword,Pole' },
		{ stat: 'cAtk', val: [1.33, 1.66, 2], op: 'mul', using: 'Blunt,Big Blunt,Dual Fist' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.5, op: 'mul' },
		{ stat: 'healEffect', val: 0.5, op: 'mul' } ]},
	{ id: 421, levels: 5, name: 'Fell Swoop', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'polearm_attack', effects: [
		{ stat: 'atkCountMax', val: [1, 2, 3, 4, 5], op: 'add' } ]},
	{ id: 422, levels: 3, name: 'Polearm Accuracy', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add', using: 'Pole' } ]},
	{ id: 423, levels: 3, name: 'Dark Form', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'firePower', val: [10, 15, 20], op: 'add' },
		{ stat: 'fireRes', val: [3, 5, 10], op: 'add' } ]},
	{ id: 424, levels: 3, name: 'War Frenzy', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'stunVuln', val: [5, 10, 15], op: 'sub' },
		{ stat: 'sleepVuln', val: [10, 20, 30], op: 'sub' } ]},
	{ id: 425, levels: 1, name: 'Hawk Spirit Totem', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'possession', effects: [
		{ stat: 'accCombat', val: 6, op: 'add', using: 'Dual Fist' },
		{ stat: 'rCrit', val: 100, op: 'add', using: 'Dual Fist' },
		{ stat: 'cAtk', val: 1.3, op: 'mul', using: 'Dual Fist' } ]},
	{ id: 428, levels: 1, name: 'Inner Rhythm', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'DanceMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 429, levels: 1, name: 'Knighthood', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 87.1, op: 'add', using: 'Heavy' },
		{ stat: 'sDef', val: 1.1, op: 'mul' } ]},
	{ id: 430, levels: 1, name: 'Master of Combat', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 80, op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt,Pole,Dual Sword,Dual Fist' },
		{ stat: 'maxCp', val: 1.05, op: 'mul' } ]},
	{ id: 431, levels: 1, name: 'Archery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 200, op: 'add', using: 'Bow' },
		{ stat: 'pAtkRange', val: 50, op: 'add', using: 'Bow' } ]},
	{ id: 432, levels: 1, name: 'Assassination', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 70, op: 'add', using: 'Dagger,Dual Dagger' },
		{ stat: 'blowRate', val: 1.03, op: 'mul' } ]},
	{ id: 433, levels: 1, name: 'Arcane Roar', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'mAtk', val: 1.03, op: 'mul' } ]},
	{ id: 434, levels: 1, name: 'Necromancy', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 10, op: 'add' },
		{ stat: 'mAtk', val: 1.03, op: 'mul' } ]},
	{ id: 435, levels: 1, name: 'Summon Lore', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 80, op: 'add', using: 'Light' },
		{ stat: 'mAtkSpd', val: 1.05, op: 'mul', using: 'Light' },
		{ stat: 'pDef', val: 60, op: 'add', using: 'Magic' },
		{ stat: 'mAtkSpd', val: 1.07, op: 'mul', using: 'Magic' },
		{ stat: 'MagicalMpConsumeRate', val: 0.97, op: 'mul', using: 'Magic' } ]},
	{ id: 436, levels: 1, name: 'Divine Lore', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 437, levels: 1, name: 'Song of Silence', target: 'AURA', operateType: 'A2', effectType: 'Mute', abnormalType: 'silence_all' },
	{ id: 438, levels: 1, name: 'Soul of the Phoenix', target: 'SELF', operateType: 'A2', effectType: 'PhoenixBless', abnormalType: 'resurrection_special' },
	{ id: 439, levels: 1, name: 'Shield of Revenge', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'counter_skill', effects: [
		{ stat: 'vengeancePdam', val: 20, op: 'add' } ]},
	{ id: 441, levels: 1, name: 'Force Meditation', target: 'SELF', operateType: 'A2', effectType: 'Paralyze', abnormalType: 'force_meditation', effects: [
		{ stat: 'pDef', val: 0.2, op: 'mul' } ]},
	{ id: 442, levels: 1, name: 'Sonic Barrier', target: 'SELF', operateType: 'A2', effectType: 'Invincible', abnormalType: 'invincibility' },
	{ id: 443, levels: 1, name: 'Force Barrier', target: 'SELF', operateType: 'A2', effectType: 'Invincible', abnormalType: 'invincibility' },
	{ id: 445, levels: 1, name: 'Mirage', target: 'SELF', operateType: 'A2', trigger: 5144, effectType: 'ChanceSkillTrigger', abnormalType: 'mirage' },
	{ id: 446, levels: 1, name: 'Dodge', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_skill', effects: [
		{ stat: 'pSkillEvas', val: 90, op: 'add' } ]},
	{ id: 447, levels: 1, name: 'Counterattack', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'counter_skill', effects: [
		{ stat: 'vengeancePdam', val: 90, op: 'add' } ]},
	{ id: 451, levels: 2, name: 'Sonic Move', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up_special', effects: [
		{ stat: 'runSpd', val: [40, 66], op: 'add' } ]},
	{ id: 452, levels: 5, name: 'Shock Stomp', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 462, levels: 1, name: 'Guilted Body', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 0.95, op: 'mul' },
		{ stat: 'weightLimit', val: 1.25, op: 'mul' } ]},
	{ id: 463, levels: 3, name: 'Weapon Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.085, op: 'mul' },
		{ stat: 'pAtk', val: [2, 3, 4], op: 'add' } ]},
	{ id: 464, levels: 5, name: 'Armor Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [9, 11, 12, 13, 14], op: 'add' },
		{ stat: 'regMp', val: 1.1, op: 'mul' },
		{ stat: 'rEvas', val: [0, 0, 0, 3, 3], op: 'add' } ]},
	{ id: 465, levels: 50, name: 'Light Armor Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [0.9, 2.2, 3.2, 4.2, 5.3, 6, 6.8, 8.4, 9.2, 10.1, 11.9, 12.8, 13.7, 15.7, 16.7, 17.8, 18.8, 19.9, 21.1, 22.2, 23.4, 24.5, 25.8, 27, 28.2, 29.5, 30.8, 32.1, 33.5, 34.8, 36.2, 37.6, 39.1, 40.5, 42, 43.5, 44.9, 46.5, 48, 49.5, 51.1, 52.7, 54.2, 55.8, 57.4, 59.1, 60.7, 62.3, 63.9, 65.6], op: 'add', using: 'Light' },
		{ stat: 'rEvas', val: [3, 3, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], op: 'add', using: 'Light' },
		{ stat: 'critDamEvas', val: 1.05, op: 'mul', using: 'Light' } ]},
	{ id: 466, levels: 55, name: 'Magic Immunity', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: [11, 12, 13, 15, 17, 19, 20, 22, 24, 26, 27, 28, 30, 31, 32, 35, 36, 37, 40, 42, 43, 44, 46, 47, 49, 51, 52, 54, 56, 57, 59, 61, 63, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 91, 93, 95, 97, 99, 102, 104, 106, 108], op: 'add' },
		{ stat: 'magicDamVul', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75], op: 'mul' } ]},
	{ id: 467, levels: 23, name: 'Soul Mastery', target: 'SELF', operateType: 'P', trigger: 5548, effectType: 'ChanceSkillTrigger' },
	{ id: 469, levels: 1, name: 'Rapid Attack', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 472, levels: 45, name: 'Ancient Sword Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [5.2, 8.1, 9.9, 11.9, 14.1, 16.6, 19.4, 22.5, 25.9, 27.7, 29.6, 31.6, 33.7, 35.9, 38.1, 40.5, 42.9, 45.4, 48.1, 50.8, 53.6, 56.5, 59.4, 62.5, 65.6, 68.9, 72.2, 75.6, 79, 82.5, 86.1, 89.8, 93.5, 97.3, 101.1, 104.9, 108.8, 112.7, 116.7, 120.6, 124.6, 128.5, 132.5, 136.4, 140.3], op: 'add', using: 'Ancient' } ]},
	{ id: 473, levels: 45, name: 'Crossbow Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [12.64, 18, 21.28, 24.88, 29.04, 33.6, 38.72, 44.32, 50.56, 53.92, 86.72, 92.16, 97.84, 103.76, 109.92, 116.32, 122.96, 129.84, 136.96, 144.4, 152, 159.92, 168, 176.32, 184.96, 193.76, 202.8, 212, 221.44, 231.04, 240.88, 250.8, 260.96, 271.2, 281.6, 292.16, 302.72, 313.44, 324.16, 334.96, 345.76, 356.56, 367.28, 378, 388.72], op: 'add', using: 'Crossbow' } ]},
	{ id: 474, levels: 45, name: 'Rapier Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [3.2, 5.28, 6.48, 7.84, 9.36, 11.12, 13.04, 15.2, 17.52, 18.8, 20.08, 21.44, 22.88, 24.4, 25.92, 27.6, 29.28, 30.96, 32.8, 34.64, 36.56, 38.56, 40.64, 42.72, 44.88, 47.12, 49.44, 51.76, 54.16, 56.56, 59.04, 61.52, 64.08, 66.72, 69.36, 72, 74.64, 77.36, 80.08, 82.8, 85.52, 88.24, 90.96, 93.68, 96.4], op: 'add', using: 'Rapier' },
		{ stat: 'mAtkSpd', val: [1, 1, 1, 1, 1, 1, 1, 1, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15], op: 'mul', using: 'Rapier' } ]},
	{ id: 475, levels: 1, name: 'Strike Back', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'vengeancePdam', val: 3, op: 'add' } ]},
	{ id: 479, levels: 1, name: 'Hard March', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 480, levels: 1, name: 'Dark Blade', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'darkPower', val: 10, op: 'add' } ]},
	{ id: 481, levels: 2, name: 'Dark Armor', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'darkRes', val: [7, 10], op: 'add' } ]},
	{ id: 482, levels: 2, name: 'Furious Soul', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up_special', effects: [
		{ stat: 'rCrit', val: [0.2, 0.3], op: 'basemul' },
		{ stat: 'cAtk', val: [1.25, 1.3], op: 'mul' },
		{ stat: 'pDef', val: 0.95, op: 'mul' } ]},
	{ id: 483, levels: 2, name: 'Sword Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: [1600, 3200], op: 'add' },
		{ stat: 'runSpd', val: 0.6, op: 'mul' } ]},
	{ id: 486, levels: 2, name: 'Increase Range', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkRange', val: [200, 400], op: 'add', using: 'Crossbow' } ]},
	{ id: 490, levels: 2, name: 'Fast Shot', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_speed_up_bow', effects: [
		{ stat: 'pAtkSpd', val: [1.08, 1.12], op: 'mul', using: 'Crossbow' } ]},
	{ id: 499, levels: 3, name: 'Courage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'resist_spiritless', effects: [
		{ stat: 'derangementVuln', val: [40, 60, 100], op: 'sub' } ]},
	{ id: 500, levels: 2, name: 'True Berserker', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'accCombat', val: [2, 4], op: 'add' },
		{ stat: 'pDef', val: 0.9, op: 'mul' },
		{ stat: 'rEvas', val: [2, 4], op: 'sub' } ]},
	{ id: 521, levels: 8, name: 'Sharpshooting', target: 'SELF', operateType: 'A2', effectType: 'ImmobileBuff', abnormalType: 'snipe', effects: [
		{ stat: 'pAtk', val: [124, 134, 145, 155, 166, 177, 188, 199], op: 'add', using: 'Crossbow' },
		{ stat: 'accCombat', val: [3, 3, 4, 4, 5, 5, 6, 6], op: 'add', using: 'Crossbow' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul', using: 'Crossbow' },
		{ stat: 'pAtkRange', val: [50, 50, 100, 100, 150, 150, 200, 200], op: 'add', using: 'Crossbow' } ]},
	{ id: 527, levels: 1, name: 'Iron Shield', target: 'SELF', operateType: 'A2', trigger: 5425, effectType: 'ChanceSkillTrigger', abnormalType: 'iron_shield' },
	{ id: 528, levels: 1, name: 'Shield of Faith', target: 'PARTY', operateType: 'A2', effectType: 'TransferDamage', abnormalType: 'transfer_damage', effects: [
		{ stat: 'transDamToPlayer', val: 90, op: 'add' },
		{ stat: 'pDef', val: 3600, op: 'add' },
		{ stat: 'mDef', val: 2700, op: 'add' } ]},
	{ id: 529, levels: 1, name: 'Song of Elemental', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_elemental', effects: [
		{ stat: 'fireRes', val: 30, op: 'add' },
		{ stat: 'waterRes', val: 30, op: 'add' },
		{ stat: 'earthRes', val: 30, op: 'add' },
		{ stat: 'windRes', val: 30, op: 'add' } ]},
	{ id: 530, levels: 1, name: 'Dance of Alignment', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_alignment', effects: [
		{ stat: 'darkRes', val: 30, op: 'add' },
		{ stat: 'holyRes', val: 30, op: 'add' } ]},
	{ id: 532, levels: 1, name: 'Counter Chance', target: 'SELF', operateType: 'P', trigger: 5426, effectType: 'ChanceSkillTrigger' },
	{ id: 533, levels: 1, name: 'Counter Rapid Shot', target: 'SELF', operateType: 'P', trigger: 5427, effectType: 'ChanceSkillTrigger' },
	{ id: 534, levels: 1, name: 'Counter Dash', target: 'SELF', operateType: 'P', trigger: 5428, effectType: 'ChanceSkillTrigger' },
	{ id: 535, levels: 1, name: 'Counter Mind', target: 'SELF', operateType: 'P', trigger: 5429, effectType: 'ChanceSkillTrigger' },
	{ id: 536, levels: 1, name: 'Over the Body', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' },
		{ stat: 'regHp', val: 1.15, op: 'mul' },
		{ stat: 'pAtk', val: 1.25, op: 'mul' },
		{ stat: 'pDef', val: 1.3, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.1, op: 'mul' },
		{ stat: 'runSpd', val: 1.1, op: 'mul' } ]},
	{ id: 538, levels: 1, name: 'Final Form', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'pAtk', val: 2, op: 'mul' },
		{ stat: 'pDef', val: 2, op: 'mul' },
		{ stat: 'mAtk', val: 2, op: 'mul' },
		{ stat: 'mDef', val: 2, op: 'mul' },
		{ stat: 'STR', val: 41, op: 'set' },
		{ stat: 'INT', val: 29, op: 'set' },
		{ stat: 'CON', val: 31, op: 'set' },
		{ stat: 'DEX', val: 33, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 541, levels: 1, name: 'Transform Grail Apostle', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 542, levels: 1, name: 'Transform Grail Apostle', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 543, levels: 1, name: 'Transform Grail Apostle', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 544, levels: 1, name: 'Transform Unicorn', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 36, op: 'set' },
		{ stat: 'INT', val: 23, op: 'set' },
		{ stat: 'CON', val: 36, op: 'set' },
		{ stat: 'DEX', val: 35, op: 'set' },
		{ stat: 'WIT', val: 14, op: 'set' },
		{ stat: 'MEN', val: 26, op: 'set' } ]},
	{ id: 545, levels: 1, name: 'Transform Unicorn', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 36, op: 'set' },
		{ stat: 'INT', val: 23, op: 'set' },
		{ stat: 'CON', val: 36, op: 'set' },
		{ stat: 'DEX', val: 35, op: 'set' },
		{ stat: 'WIT', val: 14, op: 'set' },
		{ stat: 'MEN', val: 26, op: 'set' } ]},
	{ id: 546, levels: 1, name: 'Transform Unicorn', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 36, op: 'set' },
		{ stat: 'INT', val: 23, op: 'set' },
		{ stat: 'CON', val: 36, op: 'set' },
		{ stat: 'DEX', val: 35, op: 'set' },
		{ stat: 'WIT', val: 14, op: 'set' },
		{ stat: 'MEN', val: 26, op: 'set' } ]},
	{ id: 547, levels: 1, name: 'Transform Lilim Knight', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 41, op: 'set' },
		{ stat: 'INT', val: 25, op: 'set' },
		{ stat: 'CON', val: 32, op: 'set' },
		{ stat: 'DEX', val: 34, op: 'set' },
		{ stat: 'WIT', val: 12, op: 'set' },
		{ stat: 'MEN', val: 26, op: 'set' } ]},
	{ id: 548, levels: 1, name: 'Transform Lilim Knight', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 41, op: 'set' },
		{ stat: 'INT', val: 25, op: 'set' },
		{ stat: 'CON', val: 32, op: 'set' },
		{ stat: 'DEX', val: 34, op: 'set' },
		{ stat: 'WIT', val: 12, op: 'set' },
		{ stat: 'MEN', val: 26, op: 'set' } ]},
	{ id: 549, levels: 1, name: 'Transform Lilim Knight', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 41, op: 'set' },
		{ stat: 'INT', val: 25, op: 'set' },
		{ stat: 'CON', val: 32, op: 'set' },
		{ stat: 'DEX', val: 34, op: 'set' },
		{ stat: 'WIT', val: 12, op: 'set' },
		{ stat: 'MEN', val: 26, op: 'set' } ]},
	{ id: 550, levels: 1, name: 'Transform Golem Guardian', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 39, op: 'set' },
		{ stat: 'INT', val: 20, op: 'set' },
		{ stat: 'CON', val: 45, op: 'set' },
		{ stat: 'DEX', val: 29, op: 'set' },
		{ stat: 'WIT', val: 10, op: 'set' },
		{ stat: 'MEN', val: 27, op: 'set' } ]},
	{ id: 551, levels: 1, name: 'Transform Golem Guardian', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 39, op: 'set' },
		{ stat: 'INT', val: 20, op: 'set' },
		{ stat: 'CON', val: 45, op: 'set' },
		{ stat: 'DEX', val: 29, op: 'set' },
		{ stat: 'WIT', val: 10, op: 'set' },
		{ stat: 'MEN', val: 27, op: 'set' } ]},
	{ id: 552, levels: 1, name: 'Transform Golem Guardian', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 39, op: 'set' },
		{ stat: 'INT', val: 20, op: 'set' },
		{ stat: 'CON', val: 45, op: 'set' },
		{ stat: 'DEX', val: 29, op: 'set' },
		{ stat: 'WIT', val: 10, op: 'set' },
		{ stat: 'MEN', val: 27, op: 'set' } ]},
	{ id: 553, levels: 1, name: 'Transform Inferno Drake', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'INT', val: 18, op: 'set' },
		{ stat: 'CON', val: 47, op: 'set' },
		{ stat: 'DEX', val: 26, op: 'set' },
		{ stat: 'WIT', val: 12, op: 'set' },
		{ stat: 'MEN', val: 27, op: 'set' } ]},
	{ id: 554, levels: 1, name: 'Transform Inferno Drake', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'INT', val: 18, op: 'set' },
		{ stat: 'CON', val: 47, op: 'set' },
		{ stat: 'DEX', val: 26, op: 'set' },
		{ stat: 'WIT', val: 12, op: 'set' },
		{ stat: 'MEN', val: 27, op: 'set' } ]},
	{ id: 555, levels: 1, name: 'Transform Inferno Drake', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'INT', val: 18, op: 'set' },
		{ stat: 'CON', val: 47, op: 'set' },
		{ stat: 'DEX', val: 26, op: 'set' },
		{ stat: 'WIT', val: 12, op: 'set' },
		{ stat: 'MEN', val: 27, op: 'set' } ]},
	{ id: 556, levels: 1, name: 'Transform Dragon Bomber', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 41, op: 'set' },
		{ stat: 'INT', val: 29, op: 'set' },
		{ stat: 'CON', val: 31, op: 'set' },
		{ stat: 'DEX', val: 33, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 557, levels: 1, name: 'Transform Dragon Bomber', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 41, op: 'set' },
		{ stat: 'INT', val: 29, op: 'set' },
		{ stat: 'CON', val: 31, op: 'set' },
		{ stat: 'DEX', val: 33, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 558, levels: 1, name: 'Transform Dragon Bomber', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 41, op: 'set' },
		{ stat: 'INT', val: 29, op: 'set' },
		{ stat: 'CON', val: 31, op: 'set' },
		{ stat: 'DEX', val: 33, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 561, levels: 4, name: 'Bless of Angel', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_warrior', effects: [
		{ stat: 'pAtk', val: 1.12, op: 'mul' } ]},
	{ id: 562, levels: 4, name: 'Wind of Angel', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_water', effects: [
		{ stat: 'rEvas', val: 3, op: 'add' } ]},
	{ id: 564, levels: 4, name: 'Gravity Control', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'speed_down', effects: [
		{ stat: 'pAtkSpd', val: [0.9, 0.85, 0.8, 0.75], op: 'mul' },
		{ stat: 'runSpd', val: [0.8, 0.7, 0.65, 0.6], op: 'mul' } ]},
	{ id: 573, levels: 4, name: 'Earthquake', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 578, levels: 4, name: 'Blaze Quake', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'dot_attr' },
	{ id: 579, levels: 4, name: 'Fire Armor', target: 'SELF', operateType: 'A2', effectType: 'ImmobileBuff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: [1000, 1100, 1200, 1300], op: 'add' },
		{ stat: 'mDef', val: [800, 900, 1000, 1100], op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 583, levels: 4, name: 'Assimilation', target: 'SELF', operateType: 'A2', effectType: 'SilentMove', abnormalType: 'stealth' },
	{ id: 585, levels: 1, name: 'Fast Moving', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up_special', effects: [
		{ stat: 'runSpd', val: 1.45, op: 'mul' } ]},
	{ id: 590, levels: 1, name: 'Residence Body', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 222, op: 'add' } ]},
	{ id: 591, levels: 1, name: 'Residence Spirit', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 444, op: 'add' } ]},
	{ id: 592, levels: 1, name: 'Residence Soul', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 168, op: 'add' } ]},
	{ id: 593, levels: 1, name: 'Residence Health', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: 1.09, op: 'add' } ]},
	{ id: 594, levels: 1, name: 'Residence Moral', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regCp', val: 1.09, op: 'add' } ]},
	{ id: 595, levels: 1, name: 'Residence Clarity', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 0.47, op: 'add' } ]},
	{ id: 596, levels: 1, name: 'Residence Might', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 34.6, op: 'add' } ]},
	{ id: 597, levels: 1, name: 'Residence Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 54.7, op: 'add' } ]},
	{ id: 598, levels: 1, name: 'Residence Empower', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 40.4, op: 'add' } ]},
	{ id: 599, levels: 1, name: 'Residence Magic Barrier', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 44, op: 'add' } ]},
	{ id: 600, levels: 1, name: 'Residence Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 601, levels: 1, name: 'Residence Agility', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 602, levels: 1, name: 'Residence Shield Block', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rShld', val: 20, op: 'add' } ]},
	{ id: 603, levels: 1, name: 'Residence Shield Defense', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sDef', val: 225, op: 'add' } ]},
	{ id: 604, levels: 1, name: 'Residence Resist Typhoon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: 10, op: 'add' },
		{ stat: 'windRes', val: 10, op: 'add' } ]},
	{ id: 605, levels: 1, name: 'Residence Resist Lava', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 10, op: 'add' },
		{ stat: 'earthRes', val: 10, op: 'add' } ]},
	{ id: 606, levels: 1, name: 'Residence Fortitude', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 10, op: 'sub' } ]},
	{ id: 607, levels: 1, name: 'Residence Freedom', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: 10, op: 'sub' } ]},
	{ id: 608, levels: 1, name: 'Residence Vigilance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 10, op: 'sub' } ]},
	{ id: 609, levels: 1, name: 'Residence Movement', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 6, op: 'add' } ]},
	{ id: 611, levels: 3, name: 'Fire Squad', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 17.3, op: 'add' },
		{ stat: 'rCrit', val: [0, 15, 15], op: 'add' },
		{ stat: 'cAtkAdd', val: [0, 0, 100], op: 'add' } ]},
	{ id: 612, levels: 3, name: 'Water Squad', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 27.3, op: 'add' },
		{ stat: 'mDef', val: [0, 17.6, 17.6], op: 'add' },
		{ stat: 'sDef', val: [1, 1, 1.06], op: 'mul' } ]},
	{ id: 613, levels: 3, name: 'Wind Squad', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 2, op: 'add' },
		{ stat: 'rEvas', val: [0, 2, 2], op: 'add' },
		{ stat: 'runSpd', val: [0, 0, 3], op: 'add' } ]},
	{ id: 614, levels: 3, name: 'Earth Squad', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: [17, 31.1, 44], op: 'add' } ]},
	{ id: 615, levels: 3, name: 'Holy Squad', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 20, op: 'add' },
		{ stat: 'maxMp', val: [1, 1.3, 1.3], op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: [1, 1, 0.95], op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: [1, 1, 0.95], op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: [1, 1, 0.95], op: 'mul' } ]},
	{ id: 616, levels: 3, name: 'Dark Squad', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: [7.17, 19.32, 19.32], op: 'add' },
		{ stat: 'mCritRate', val: [0, 0, 0.01], op: 'basemul' } ]},
	{ id: 617, levels: 1, name: 'Transform Onyx Beast', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' },
		{ stat: 'runSpd', val: 11, op: 'add' } ]},
	{ id: 618, levels: 1, name: 'Transform Death Blader', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 622, levels: 2, name: 'Ultimate Escape', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up_special', effects: [
		{ stat: 'rEvas', val: [20, 35], op: 'add' },
		{ stat: 'runSpd', val: [33, 66], op: 'add' },
		{ stat: 'pSkillEvas', val: [0, 25], op: 'add' } ]},
	{ id: 626, levels: 4, name: 'Critical Sense', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: [0.1, 0.15, 0.2, 0.25], op: 'basemul' },
		{ stat: 'cAtkAdd', val: [111, 177, 253, 317], op: 'add' } ]},
	{ id: 628, levels: 1, name: 'Warp', target: 'SELF', operateType: 'A1', effectType: 'Warp' },
	{ id: 631, levels: 6, name: 'Emergent Ability - Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [8.4, 16, 22.9, 29, 34.4, 38.2], op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt,Pole' } ]},
	{ id: 632, levels: 6, name: 'Emergent Ability - Defense', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [17.9, 35.7, 53.6, 71.4, 89.3, 107.1], op: 'add', using: 'Heavy' } ]},
	{ id: 633, levels: 6, name: 'Emergent Ability - Empower', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: [10.5, 20.1, 28.7, 36.3, 43, 47.8], op: 'add' } ]},
	{ id: 634, levels: 6, name: 'Emergent Ability - Magic Defense', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: [15.1, 30.2, 45.4, 60.5, 75.6, 90.7], op: 'add' } ]},
	{ id: 637, levels: 1, name: 'Master Ability - Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 22.9, op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt,Pole' },
		{ stat: 'pAtk', val: 27.9, op: 'add', using: 'Dual Sword,Dual Fist' },
		{ stat: 'pAtk', val: 20.1, op: 'add', using: 'Dagger,Dual Dagger' },
		{ stat: 'pAtk', val: 59.2, op: 'add', using: 'Bow' },
		{ stat: 'pAtk', val: 36.3, op: 'add', using: 'Crossbow' },
		{ stat: 'pAtk', val: 5, op: 'add', using: 'Big Sword' },
		{ stat: 'pAtk', val: 21.4, op: 'add', using: 'Rapier' },
		{ stat: 'pAtk', val: 24.8, op: 'add', using: 'Ancient' } ]},
	{ id: 638, levels: 1, name: 'Master Ability - Empower', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 28.65, op: 'add' } ]},
	{ id: 639, levels: 1, name: 'Master Ability - Casting', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 11, op: 'add' } ]},
	{ id: 640, levels: 1, name: 'Master Ability - Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 30, op: 'add' } ]},
	{ id: 641, levels: 1, name: 'Knight Ability - Boost HP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 295.32, op: 'add' } ]},
	{ id: 642, levels: 1, name: 'Enchanter Ability - Boost Mana', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 148.2, op: 'add' } ]},
	{ id: 643, levels: 1, name: 'Summoner Ability - Boost HP/MP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 147.66, op: 'add' },
		{ stat: 'maxMp', val: 74.1, op: 'add' } ]},
	{ id: 644, levels: 1, name: 'Rogue Ability - Evasion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 645, levels: 1, name: 'Rogue Ability - Long Shot', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkRange', val: 100, op: 'add', using: 'Bow' } ]},
	{ id: 646, levels: 1, name: 'Wizard Ability - Mana Gain', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'manaCharge', val: 20, op: 'add' } ]},
	{ id: 647, levels: 1, name: 'Enchanter Ability - Mana Recovery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.1, op: 'mul' } ]},
	{ id: 648, levels: 1, name: 'Healer Ability - Prayer', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 1.06, op: 'mul' } ]},
	{ id: 650, levels: 1, name: 'Warrior Ability - Resist Trait', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cancelVuln', val: 5, op: 'sub' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'rootVuln', val: 5, op: 'sub' },
		{ stat: 'sleepVuln', val: 5, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' } ]},
	{ id: 651, levels: 1, name: 'Warrior Ability - Haste', target: 'SELF', operateType: 'P', trigger: 5572, effectType: 'ChanceSkillTrigger' },
	{ id: 652, levels: 1, name: 'Knight Ability - Defense', target: 'SELF', operateType: 'P', trigger: 5573, effectType: 'ChanceSkillTrigger' },
	{ id: 653, levels: 1, name: 'Rogue Ability - Critical Chance', target: 'SELF', operateType: 'P', trigger: 5574, effectType: 'ChanceSkillTrigger' },
	{ id: 654, levels: 1, name: 'Wizard Ability - Mana Steal', target: 'SELF', operateType: 'P', trigger: 5575, effectType: 'ChanceSkillTrigger' },
	{ id: 655, levels: 1, name: 'Enchanter Ability - Barrier', target: 'SELF', operateType: 'P', trigger: 5576, effectType: 'ChanceSkillTrigger' },
	{ id: 656, levels: 3, name: 'Transform Divine Warrior', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 657, levels: 3, name: 'Transform Divine Knight', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 658, levels: 3, name: 'Transform Divine Rogue', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 659, levels: 3, name: 'Transform Divine Wizard', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 22, op: 'set' },
		{ stat: 'DEX', val: 21, op: 'set' },
		{ stat: 'CON', val: 27, op: 'set' },
		{ stat: 'INT', val: 41, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 39, op: 'set' } ]},
	{ id: 660, levels: 3, name: 'Transform Divine Summoner', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 22, op: 'set' },
		{ stat: 'DEX', val: 21, op: 'set' },
		{ stat: 'CON', val: 27, op: 'set' },
		{ stat: 'INT', val: 41, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 39, op: 'set' } ]},
	{ id: 661, levels: 3, name: 'Transform Divine Healer', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 22, op: 'set' },
		{ stat: 'DEX', val: 21, op: 'set' },
		{ stat: 'CON', val: 27, op: 'set' },
		{ stat: 'INT', val: 41, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 39, op: 'set' } ]},
	{ id: 662, levels: 3, name: 'Transform Divine Enchanter', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 22, op: 'set' },
		{ stat: 'DEX', val: 21, op: 'set' },
		{ stat: 'CON', val: 27, op: 'set' },
		{ stat: 'INT', val: 41, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 39, op: 'set' } ]},
	{ id: 663, levels: 1, name: 'Transform Zaken', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 48, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 52, op: 'set' },
		{ stat: 'INT', val: 45, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 45, op: 'set' } ]},
	{ id: 664, levels: 1, name: 'Transform Anakim', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 46, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 49, op: 'set' },
		{ stat: 'INT', val: 50, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 45, op: 'set' } ]},
	{ id: 665, levels: 1, name: 'Transform Venom', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 47, op: 'set' },
		{ stat: 'INT', val: 46, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 42, op: 'set' } ]},
	{ id: 666, levels: 1, name: 'Transform Gordon', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 47, op: 'set' },
		{ stat: 'INT', val: 46, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 42, op: 'set' } ]},
	{ id: 667, levels: 1, name: 'Transform Ranku', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 47, op: 'set' },
		{ stat: 'INT', val: 46, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 42, op: 'set' } ]},
	{ id: 668, levels: 1, name: 'Transform Kechi', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 47, op: 'set' },
		{ stat: 'INT', val: 46, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 42, op: 'set' } ]},
	{ id: 669, levels: 1, name: 'Transform Demon Prince', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 47, op: 'set' },
		{ stat: 'INT', val: 46, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 42, op: 'set' } ]},
	{ id: 670, levels: 1, name: 'Transform Heretic', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 22, op: 'set' },
		{ stat: 'DEX', val: 21, op: 'set' },
		{ stat: 'CON', val: 27, op: 'set' },
		{ stat: 'INT', val: 41, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 39, op: 'set' } ]},
	{ id: 671, levels: 1, name: 'Transform Vale Master', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 22, op: 'set' },
		{ stat: 'DEX', val: 21, op: 'set' },
		{ stat: 'CON', val: 27, op: 'set' },
		{ stat: 'INT', val: 41, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 39, op: 'set' } ]},
	{ id: 672, levels: 1, name: 'Transform Saber Tooth Tiger', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 28, op: 'set' },
		{ stat: 'CON', val: 45, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 673, levels: 1, name: 'Transform Oel Mahum', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 674, levels: 1, name: 'Transform Doll Blader', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 678, levels: 1, name: 'Divine Warrior War Cry', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up_special', effects: [
		{ stat: 'pAtk', val: 1.25, op: 'mul' } ]},
	{ id: 679, levels: 1, name: 'Sacrifice Warrior', target: 'PARTY', operateType: 'A2', trigger: 5602, effectType: 'Buff', abnormalType: 'transform_sacrifice', effects: [
		{ stat: 'pAtk', val: 1.2, op: 'mul' } ]},
	{ id: 681, levels: 1, name: 'Divine Knight Hate Aura', target: 'AURA', operateType: 'A2', effectType: 'TargetMe', abnormalType: 'lock' },
	{ id: 683, levels: 1, name: 'Divine Knight Thunder Storm', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 684, levels: 1, name: 'Divine Knight Ultimate Defense', target: 'SELF', operateType: 'A2', effectType: 'ImmobileBuff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: 3600, op: 'add' },
		{ stat: 'mDef', val: 2700, op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 685, levels: 1, name: 'Sacrifice Knight', target: 'PARTY', operateType: 'A2', trigger: 5602, effectType: 'Buff', abnormalType: 'transform_sacrifice', effects: [
		{ stat: 'pDef', val: 1.2, op: 'mul' } ]},
	{ id: 690, levels: 1, name: 'Divine Rogue Agility', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 691, levels: 1, name: 'Sacrifice Rogue', target: 'PARTY', operateType: 'A2', trigger: 5602, effectType: 'Buff', abnormalType: 'transform_sacrifice', effects: [
		{ stat: 'rEvas', val: 10, op: 'add' } ]},
	{ id: 697, levels: 1, name: 'Sacrifice Wizard', target: 'PARTY', operateType: 'A2', trigger: 5602, effectType: 'Buff', abnormalType: 'transform_sacrifice', effects: [
		{ stat: 'mAtk', val: 1.2, op: 'mul' } ]},
	{ id: 700, levels: 1, name: 'Divine Healer Group Heal', target: 'PARTY', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_others' },
	{ id: 703, levels: 1, name: 'Sacrifice Healer', target: 'PARTY', operateType: 'A1', trigger: 5602, effectType: 'ChanceSkillTrigger' },
	{ id: 704, levels: 1, name: 'Divine Enchanter Water Spirit', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
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
	{ id: 705, levels: 1, name: 'Divine Enchanter Fire Spirit', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
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
	{ id: 706, levels: 1, name: 'Divine Enchanter Wind Spirit', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
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
	{ id: 707, levels: 1, name: 'Divine Enchanter Hero Spirit', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' },
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
	{ id: 708, levels: 1, name: 'Divine Enchanter Mass Binding', target: 'AURA', operateType: 'A2', effectType: 'Root', abnormalType: 'root_magically' },
	{ id: 709, levels: 1, name: 'Sacrifice Enchanter', target: 'PARTY', operateType: 'A2', trigger: 5602, effectType: 'Buff', abnormalType: 'transform_sacrifice', effects: [
		{ stat: 'runSpd', val: 10, op: 'add' },
		{ stat: 'accCombat', val: 2, op: 'add' },
		{ stat: 'pDef', val: 1.1, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.1, op: 'mul' },
		{ stat: 'rCrit', val: 0.1, op: 'basemul' },
		{ stat: 'cAtk', val: 1.1, op: 'mul' },
		{ stat: 'mDef', val: 1.1, op: 'mul' },
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.1, op: 'mul' } ]},
	{ id: 711, levels: 1, name: 'Divine Summoner Transfer Pain', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'transDam', val: 50, op: 'add' } ]},
	{ id: 714, levels: 1, name: 'Sacrifice Summoner', target: 'PARTY', operateType: 'A2', trigger: 5602, effectType: 'Buff', abnormalType: 'transform_sacrifice', effects: [
		{ stat: 'rCrit', val: 0.2, op: 'basemul' },
		{ stat: 'cAtk', val: 1.2, op: 'mul' } ]},
	{ id: 719, levels: 1, name: 'Zaken Vampiric Rage', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 727, levels: 1, name: 'Venom Disillusion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.08, op: 'mul' } ]},
	{ id: 730, levels: 1, name: 'Gordon Press', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'attack_time_up', effects: [
		{ stat: 'runSpd', val: 0.77, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.77, op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.77, op: 'mul' } ]},
	{ id: 737, levels: 1, name: 'Devil Ultimate Defense', target: 'SELF', operateType: 'A2', effectType: 'ImmobileBuff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: 1800, op: 'add' },
		{ stat: 'mDef', val: 1350, op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 747, levels: 3, name: 'Saber Tooth Tiger Fear', target: 'AURA', operateType: 'A2', effectType: 'Fear', abnormalType: 'turn_flee' },
	{ id: 748, levels: 1, name: 'Saber Tooth Tiger Sprint', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 750, levels: 1, name: 'Oel Mahum Ultimate Defense', target: 'SELF', operateType: 'A2', effectType: 'ImmobileBuff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: 1800, op: 'add' },
		{ stat: 'mDef', val: 1350, op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 754, levels: 1, name: 'Doll Blader Clairvoyance', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 755, levels: 1, name: 'Protection of Rune', target: 'SELF', operateType: 'P', trigger: 5556, effectType: 'ChanceSkillTrigger' },
	{ id: 756, levels: 1, name: 'Protection of Elemental', target: 'SELF', operateType: 'P', trigger: 5556, effectType: 'ChanceSkillTrigger' },
	{ id: 757, levels: 1, name: 'Protection of Alignment', target: 'SELF', operateType: 'P', trigger: 5556, effectType: 'ChanceSkillTrigger' },
	{ id: 758, levels: 1, name: 'Fighter\'s Will', target: 'SELF', operateType: 'P', trigger: 5559, effects: [
		{ stat: 'pAtk', val: 100, op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt,Dual Sword,Dual Fist,Dagger,Dual Dagger,Pole,Ancient,Rapier' },
		{ stat: 'pAtkSpd', val: 1.1, op: 'mul', using: 'Sword,Big Sword,Blunt,Big Blunt,Dual Sword,Dual Fist,Dagger,Dual Dagger,Pole,Ancient,Rapier' } ]},
	{ id: 759, levels: 1, name: 'Archer\'s Will', target: 'SELF', operateType: 'P', trigger: 5559, effects: [
		{ stat: 'accCombat', val: 8, op: 'add', using: 'Crossbow,Bow' },
		{ stat: 'pAtkRange', val: 50, op: 'add', using: 'Crossbow,Bow' } ]},
	{ id: 760, levels: 1, name: 'Anti Magic Armor', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'mDef', val: 5000, op: 'add' } ]},
	{ id: 761, levels: 1, name: 'Seed of Revenge', target: 'SELF', operateType: 'A2', trigger: 5561, effectType: 'ChanceSkillTrigger', abnormalType: 'seed_of_knight', effects: [
		{ stat: 'pAtk', val: 100, op: 'add' } ]},
	{ id: 762, levels: 1, name: 'Insane Crusher', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'touch_of_death', effects: [
		{ stat: 'maxCp', val: 0.1, op: 'mul' },
		{ stat: 'debuffVuln', val: 30, op: 'add' },
		{ stat: 'healEffect', val: 0.7, op: 'mul' } ]},
	{ id: 763, levels: 1, name: 'Hell Scream', target: 'AURA', operateType: 'A2', effectType: 'Fear', abnormalType: 'turn_flee', effects: [
		{ stat: 'mDef', val: 0.7, op: 'mul' },
		{ stat: 'pDef', val: 0.7, op: 'mul' },
		{ stat: 'runSpd', val: 0.7, op: 'mul' } ]},
	{ id: 764, levels: 1, name: 'Song of Wind Storm', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_windstorm', effects: [
		{ stat: 'bowWpnVuln', val: 0.9, op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: 0.95, op: 'mul' } ]},
	{ id: 765, levels: 1, name: 'Dance of Blade Storm', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_bladestorm', effects: [
		{ stat: 'bowWpnVuln', val: 0.55, op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: 0.75, op: 'mul' },
		{ stat: 'mAtk', val: 0.01, op: 'mul' } ]},
	{ id: 766, levels: 1, name: 'Sixth Sense', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 15, op: 'add', hp: 30 } ]},
	{ id: 767, levels: 1, name: 'Expose Weak Point', target: 'SELF', operateType: 'P', trigger: 5565, effectType: 'ChanceSkillTrigger' },
	{ id: 768, levels: 1, name: 'Exciting Adventure', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up_special', effects: [
		{ stat: 'runSpd', val: 20, op: 'add' },
		{ stat: 'rEvas', val: 15, op: 'add' },
		{ stat: 'blowRate', val: 1.3, op: 'mul' },
		{ stat: 'cancelVuln', val: 90, op: 'sub' },
		{ stat: 'pSkillEvas', val: 40, op: 'add' } ]},
	{ id: 769, levels: 1, name: 'Wind Riding', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up_special', effects: [
		{ stat: 'runSpd', val: 50, op: 'add' },
		{ stat: 'rEvas', val: 20, op: 'add' },
		{ stat: 'blowRate', val: 1.2, op: 'mul' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' },
		{ stat: 'pSkillEvas', val: 75, op: 'add' } ]},
	{ id: 770, levels: 1, name: 'Ghost Walking', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up_special', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' },
		{ stat: 'rEvas', val: 15, op: 'add' },
		{ stat: 'blowRate', val: 1.4, op: 'mul' },
		{ stat: 'cancelVuln', val: 90, op: 'sub' },
		{ stat: 'pSkillEvas', val: 60, op: 'add' } ]},
	{ id: 774, levels: 1, name: 'Dread Pool', target: 'AURA', operateType: 'A2', effectType: 'Fear', abnormalType: 'turn_flee', effects: [
		{ stat: 'runSpd', val: 0.67, op: 'mul' },
		{ stat: 'pDef', val: 0.67, op: 'mul' },
		{ stat: 'rEvas', val: 10, op: 'sub' } ]},
	{ id: 778, levels: 1, name: 'Golem Armor', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 39, op: 'set' },
		{ stat: 'INT', val: 20, op: 'set' },
		{ stat: 'CON', val: 45, op: 'set' },
		{ stat: 'DEX', val: 29, op: 'set' },
		{ stat: 'WIT', val: 10, op: 'set' },
		{ stat: 'MEN', val: 27, op: 'set' } ]},
	{ id: 784, levels: 1, name: 'Spirit of Phoenix', target: 'SELF', operateType: 'A2', trigger: 5562, effectType: 'ChanceSkillTrigger', abnormalType: 'seed_of_knight', effects: [
		{ stat: 'pDef', val: 200, op: 'add' } ]},
	{ id: 785, levels: 1, name: 'Flame Icon', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'possession_special', effects: [
		{ stat: 'debuffVuln', val: 40, op: 'sub' },
		{ stat: 'pDef', val: 1.5, op: 'mul' },
		{ stat: 'mDef', val: 1.5, op: 'mul' },
		{ stat: 'accCombat', val: 6, op: 'add' },
		{ stat: 'runSpd', val: 30, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 100, op: 'add', using: 'Sword,Big Sword' },
		{ stat: 'cAtk', val: 2, op: 'mul', using: 'Blunt,Big Blunt' },
		{ stat: 'cancelVuln', val: 40, op: 'sub' },
		{ stat: 'healEffect', val: 0.2, op: 'mul' } ]},
	{ id: 786, levels: 1, name: 'Eva\'s Will', target: 'SELF', operateType: 'A2', trigger: 5563, effectType: 'ChanceSkillTrigger', abnormalType: 'seed_of_knight', effects: [
		{ stat: 'mDef', val: 200, op: 'add' } ]},
	{ id: 787, levels: 1, name: 'Touch of Eva', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'touch_of_life', effects: [
		{ stat: 'cancelVuln', val: 100, op: 'sub' },
		{ stat: 'debuffVuln', val: 30, op: 'sub' },
		{ stat: 'healEffect', val: 1.3, op: 'mul' } ]},
	{ id: 788, levels: 1, name: 'Pain of Shilen', target: 'SELF', operateType: 'A2', trigger: 5564, effectType: 'ChanceSkillTrigger', abnormalType: 'seed_of_knight', effects: [
		{ stat: 'cAtk', val: 1.1, op: 'mul' } ]},
	{ id: 789, levels: 1, name: 'Spirit of Shilen', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'possession_special', effects: [
		{ stat: 'pAtk', val: 1.3, op: 'mul' },
		{ stat: 'mAtk', val: 1.3, op: 'mul' },
		{ stat: 'runSpd', val: 30, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 100, op: 'add', using: 'Sword,Big Sword' },
		{ stat: 'cAtk', val: 2, op: 'mul', using: 'Blunt,Big Blunt' },
		{ stat: 'absorbDam', val: 40, op: 'add' },
		{ stat: 'healEffect', val: 0.2, op: 'mul' } ]},
	{ id: 791, levels: 1, name: 'Lightning Shock', target: 'AURA', operateType: 'A2', trigger: 6092, effectType: 'ChanceSkillTrigger', abnormalType: 'paralyze', effects: [
		{ stat: 'pAtkSpd', val: 0.5, op: 'mul' },
		{ stat: 'runSpd', val: 0.5, op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.5, op: 'mul' } ]},
	{ id: 794, levels: 1, name: 'Mass Disarm', target: 'AURA', operateType: 'A2', effectType: 'Disarm', abnormalType: 'disarm', effects: [
		{ stat: 'pAtk', val: 0.6, op: 'mul' } ]},
	{ id: 799, levels: 3, name: 'Master Ability - Defense', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [59.5, 119, 178.5], op: 'add', using: 'Heavy' },
		{ stat: 'pDef', val: [44.625, 89.25, 133.875], op: 'add', using: 'Light' },
		{ stat: 'pDef', val: [29.75, 59.5, 89.25], op: 'add', using: 'Magic' } ]},
	{ id: 800, levels: 3, name: 'Master Ability - Magic Defense', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: [50.4, 100.8, 151.2], op: 'add' } ]},
	{ id: 801, levels: 1, name: 'Warrior Ability - Boost CP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 738.3, op: 'add' } ]},
	{ id: 802, levels: 1, name: 'Wizard Ability - Anti-magic', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'magicDamVul', val: 0.95, op: 'mul' } ]},
	{ id: 803, levels: 1, name: 'Healer Ability - Divine Protection', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 5, op: 'add' },
		{ stat: 'holyRes', val: 5, op: 'add' } ]},
	{ id: 804, levels: 1, name: 'Knight Ability - Resist Critical', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'critVuln', val: 0.95, op: 'mul' } ]},
	{ id: 806, levels: 1, name: 'Magic Obstacle', target: 'AURA', operateType: 'A1', effectType: 'Cancel' },
	{ id: 807, levels: 1, name: 'Over-hit', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.4, op: 'mul' } ]},
	{ id: 810, levels: 1, name: 'Vanguard', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'sDef', val: 0.5, op: 'mul' },
		{ stat: 'accCombat', val: 1, op: 'add', using: 'Big Sword' } ]},
	{ id: 811, levels: 1, name: 'Vanguard', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'sDef', val: 0.5, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul', using: 'Dual Sword' } ]},
	{ id: 812, levels: 1, name: 'Vanguard', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'sDef', val: 0.5, op: 'mul' },
		{ stat: 'accCombat', val: 1, op: 'add', using: 'Big Sword' } ]},
	{ id: 813, levels: 1, name: 'Vanguard', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'sDef', val: 0.5, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul', using: 'Dual Sword' } ]},
	{ id: 818, levels: 1, name: 'Evasion Counter', target: 'SELF', operateType: 'P', trigger: 5673, effectType: 'ChanceSkillTrigger' },
	{ id: 819, levels: 1, name: 'Evasion Chance', target: 'SELF', operateType: 'P', trigger: 5674, effectType: 'ChanceSkillTrigger' },
	{ id: 820, levels: 1, name: 'Evasion Haste', target: 'SELF', operateType: 'P', trigger: 5675, effectType: 'ChanceSkillTrigger' },
	{ id: 823, levels: 3, name: 'Strengthen Golem', target: 'SUMMON', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.03, 1.06, 1.09], op: 'mul' } ]},
	{ id: 824, levels: 3, name: 'Golem Reinforcement', target: 'SUMMON', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' },
		{ stat: 'maxHp', val: [1.05, 1.08, 1.1], op: 'mul' } ]},
	{ id: 825, levels: 1, name: 'Sharp Edge', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'dwarf_attack_buff', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul', using: 'Sword,Big Sword,Dagger,Dual Dagger,Pole,Rapier,Ancient,Dual Sword,Dual Fist' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul', using: 'Sword,Big Sword,Dagger,Dual Dagger,Pole,Rapier,Ancient,Dual Sword,Dual Fist' } ]},
	{ id: 826, levels: 1, name: 'Spike', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'dwarf_attack_buff', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul', using: 'Blunt,Big Blunt' },
		{ stat: 'stunProf', val: 8, op: 'add' } ]},
	{ id: 827, levels: 1, name: 'Restring', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'dwarf_attack_buff', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'pAtkRange', val: 100, op: 'add', using: 'Bow,Crossbow' } ]},
	{ id: 828, levels: 1, name: 'Case Harden', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'dwarf_defence_buff', effects: [
		{ stat: 'pDef', val: 1.1, op: 'mul', using: 'Heavy' } ]},
	{ id: 829, levels: 1, name: 'Hard Tanning', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'dwarf_defence_buff', effects: [
		{ stat: 'pDef', val: 1.05, op: 'mul', using: 'Light' },
		{ stat: 'rEvas', val: 2, op: 'add', using: 'Light' } ]},
	{ id: 830, levels: 1, name: 'Embroider', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'dwarf_defence_buff', effects: [
		{ stat: 'pDef', val: 1.05, op: 'mul', using: 'Magic' },
		{ stat: 'regMp', val: 2, op: 'add', using: 'Magic' } ]},
	{ id: 832, levels: 2, name: 'Fast Recovery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: [4, 6], op: 'add' },
		{ stat: 'regMp', val: [2, 4], op: 'add' },
		{ stat: 'regCp', val: [4, 6], op: 'add' } ]},
	{ id: 834, levels: 1, name: 'Blood Pact', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'blood_constract', effects: [
		{ stat: 'maxHp', val: 1.1, op: 'mul' },
		{ stat: 'regHp', val: 10, op: 'add' } ]},
	{ id: 837, levels: 1, name: 'Painkiller', target: 'SELF', operateType: 'A2', effectType: 'Invincible', abnormalType: 'invincibility' },
	{ id: 840, levels: 1, name: 'Final Flying Form', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 41, op: 'set' },
		{ stat: 'INT', val: 29, op: 'set' },
		{ stat: 'CON', val: 31, op: 'set' },
		{ stat: 'DEX', val: 33, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' },
		{ stat: 'pDef', val: 0.7, op: 'mul' },
		{ stat: 'mDef', val: 0.7, op: 'mul' } ]},
	{ id: 841, levels: 1, name: 'Aura Bird - Falcon', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 41, op: 'set' },
		{ stat: 'INT', val: 29, op: 'set' },
		{ stat: 'CON', val: 31, op: 'set' },
		{ stat: 'DEX', val: 33, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' },
		{ stat: 'pDef', val: 0.7, op: 'mul' },
		{ stat: 'mDef', val: 0.7, op: 'mul' } ]},
	{ id: 842, levels: 1, name: 'Aura Bird - Owl', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 41, op: 'set' },
		{ stat: 'INT', val: 29, op: 'set' },
		{ stat: 'CON', val: 31, op: 'set' },
		{ stat: 'DEX', val: 33, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' },
		{ stat: 'pDef', val: 0.7, op: 'mul' },
		{ stat: 'mDef', val: 0.7, op: 'mul' } ]},
	{ id: 846, levels: 1, name: 'Possess Ward', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 0.2, op: 'mul' },
		{ stat: 'mAtk', val: 0.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.2, op: 'mul' },
		{ stat: 'runSpd', val: 0.2, op: 'mul' } ]},
	{ id: 848, levels: 1, name: 'Gludio Territory Benefaction', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'INT', val: 1, op: 'add' } ]},
	{ id: 849, levels: 1, name: 'Dion Territory Benefaction', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'add' } ]},
	{ id: 850, levels: 1, name: 'Giran Territory Benefaction', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'MEN', val: 1, op: 'add' } ]},
	{ id: 851, levels: 1, name: 'Oren Territory Benefaction', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'CON', val: 1, op: 'add' },
		{ stat: 'MEN', val: 1, op: 'add' } ]},
	{ id: 852, levels: 1, name: 'Aden Territory Benefaction', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'MEN', val: 1, op: 'add' } ]},
	{ id: 853, levels: 1, name: 'Innadril Territory Benefaction', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'CON', val: 1, op: 'add' },
		{ stat: 'INT', val: 1, op: 'add' } ]},
	{ id: 854, levels: 1, name: 'Goddard Territory Benefaction', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'INT', val: 1, op: 'add' } ]},
	{ id: 855, levels: 1, name: 'Rune Territory Benefaction', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'add' } ]},
	{ id: 856, levels: 1, name: 'Schuttgart Territory Benefaction', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'CON', val: 1, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'add' } ]},
	{ id: 857, levels: 1, name: 'Human Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 858, levels: 1, name: 'Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 859, levels: 1, name: 'Dark Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 860, levels: 1, name: 'Orc Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 861, levels: 1, name: 'Dwarf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 862, levels: 1, name: 'Kamael Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 863, levels: 1, name: 'Royal Guard Captain', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 864, levels: 1, name: 'Archer Captain', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 865, levels: 1, name: 'Magic Leader', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 866, levels: 1, name: 'Kamael Guard Captain', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 867, levels: 1, name: 'Knight of Dawn', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 868, levels: 1, name: 'Fortress Captain', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 871, levels: 1, name: 'Might', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 873, levels: 1, name: 'Rapid Shot', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_speed_up_bow', effects: [
		{ stat: 'pAtkSpd', val: 1.12, op: 'mul', using: 'Bow' } ]},
	{ id: 875, levels: 1, name: 'Empower', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 880, levels: 1, name: 'Knight Captain Mercenary Ultimate Defense', target: 'SELF', operateType: 'A2', effectType: 'ImmobileBuff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: 3600, op: 'add' },
		{ stat: 'mDef', val: 2700, op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 883, levels: 7, name: 'Commander Mercenary Seal of Binding', target: 'AURA', operateType: 'A2', effectType: 'Root', abnormalType: 'root_magically' },
	{ id: 885, levels: 1, name: 'Air Blink', target: 'AURA', operateType: 'A1', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 894, levels: 1, name: 'Exhilarate', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'pDef', val: 1.18, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' } ]},
	{ id: 895, levels: 1, name: 'Exhilarate', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'regMp', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' } ]},
	{ id: 899, levels: 6, name: 'Cat Roar', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'multi_debuff', effects: [
		{ stat: 'pDef', val: 0.6, op: 'mul' },
		{ stat: 'mDef', val: 0.6, op: 'mul' },
		{ stat: 'runSpd', val: 0.6, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.6, op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.6, op: 'mul' } ]},
	{ id: 905, levels: 6, name: 'Dark Detonation', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 909, levels: 6, name: 'Ice Focus', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'poison', effects: [
		{ stat: 'runSpd', val: 0.3, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.8, op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.8, op: 'mul' } ]},
	{ id: 913, levels: 1, name: 'Deflect Magic', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'dd_resist', effects: [
		{ stat: 'magicSuccRes', val: 2, op: 'mul' } ]},
	{ id: 914, levels: 1, name: 'Song of Purification', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'song_of_purification', effects: [
		{ stat: 'debuffVuln', val: 30, op: 'sub' },
		{ stat: 'healEffect', val: 1.3, op: 'mul' } ]},
	{ id: 915, levels: 1, name: 'Dance of Berserker', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dance_of_berserker', effects: [
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'rEvas', val: 4, op: 'sub' } ]},
	{ id: 916, levels: 4, name: 'Shield Deflect Magic', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'reflect_magic_dd', effects: [
		{ stat: 'vengeanceMdam', val: [20, 30, 40, 50], op: 'add' } ]},
	{ id: 917, levels: 1, name: 'Final Secret', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'final_secret', effects: [
		{ stat: 'pvpPhysDmg', val: 1.3, op: 'mul' },
		{ stat: 'physicalSkillPower', val: 1.3, op: 'mul' } ]},
	{ id: 922, levels: 1, name: 'Hide', target: 'SELF', operateType: 'A2', effectType: 'Hide', abnormalType: 'hide', effects: [
		{ stat: 'runSpd', val: 0.7, op: 'mul' } ]},
	{ id: 923, levels: 1, name: 'Dual Dagger Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 87.5, op: 'add', using: 'Dual Dagger' },
		{ stat: 'blowRate', val: 1.05, op: 'mul' } ]},
	{ id: 925, levels: 1, name: 'Sigil Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.05, op: 'mul', using: 'Sigil' },
		{ stat: 'regMp', val: 1.17, op: 'mul', using: 'Sigil' } ]},
	{ id: 926, levels: 1, name: 'Sigil Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 30, op: 'add', using: 'Sigil' },
		{ stat: 'regMp', val: 1.17, op: 'mul', using: 'Sigil' } ]},
	{ id: 929, levels: 1, name: 'Spirit of the Cat', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'pAtk', val: 1.4, op: 'mul' },
		{ stat: 'mAtk', val: 1.4, op: 'mul' },
		{ stat: 'pDef', val: 1.3, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'STR', val: 45, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 44, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 39, op: 'set' } ]},
	{ id: 930, levels: 1, name: 'Spirit of the Demon', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'pAtk', val: 1.4, op: 'mul' },
		{ stat: 'mAtk', val: 1.4, op: 'mul' },
		{ stat: 'pDef', val: 1.3, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'STR', val: 45, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 47, op: 'set' },
		{ stat: 'WIT', val: 19, op: 'set' },
		{ stat: 'MEN', val: 37, op: 'set' } ]},
	{ id: 931, levels: 1, name: 'Spirit of the Unicorn', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'pAtk', val: 1.4, op: 'mul' },
		{ stat: 'mAtk', val: 1.4, op: 'mul' },
		{ stat: 'pDef', val: 1.3, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'STR', val: 45, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 40, op: 'set' },
		{ stat: 'WIT', val: 25, op: 'set' },
		{ stat: 'MEN', val: 38, op: 'set' } ]},
	{ id: 934, levels: 1, name: 'Sigil Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 1.05, op: 'mul', using: 'Sigil' },
		{ stat: 'regMp', val: 1.17, op: 'mul', using: 'Sigil' } ]},
	{ id: 935, levels: 1, name: 'Sigil Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 1.05, op: 'mul', using: 'Sigil' },
		{ stat: 'regMp', val: 1.17, op: 'mul', using: 'Sigil' } ]},
	{ id: 936, levels: 47, name: 'Ordinary Mercenary', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: [707.24, 718.68, 729.65, 740.16, 750.2, 759.76, 768.84, 777.44, 785.56, 793.2, 800.37, 807.06, 813.29, 819.06, 824.38, 829.26, 833.72, 837.78, 841.44, 844.73, 847.67, 850.28, 852.58, 854.61, 856.4, 857.97, 859.35, 860.59, 861.71, 862.76, 863.77, 864.79, 865.85, 867.01, 868.3, 869.77, 868.34, 862.19, 850.88, 829.58, 806.11, 702.08, 737.18, 774.04, 812.74, 857.44, 0.0], op: 'add' },
		{ stat: 'mDef', val: [549.56, 549.89, 549.87, 549.5, 548.78, 547.72, 546.33, 544.61, 542.56, 540.2, 537.53, 534.55, 531.26, 527.69, 523.83, 519.68, 515.27, 510.58, 505.64, 500.45, 495.02, 489.35, 483.46, 477.35, 471.04, 464.53, 457.83, 450.96, 443.92, 436.73, 429.39, 421.92, 414.34, 406.64, 398.85, 390.98, 379.99, 364.12, 342.98, 311.93, 278.52, 291.7, 305.68, 320.53, 336.29, 354.71, 0.0], op: 'add' },
		{ stat: 'pAtk', val: [565.79, 566.08, 565.89, 565.23, 564.09, 562.48, 560.39, 557.82, 554.79, 551.28, 547.32, 542.9, 538.03, 532.72, 526.98, 520.82, 514.25, 507.29, 499.95, 492.25, 484.21, 475.84, 467.18, 458.24, 449.04, 439.62, 429.99, 420.2, 410.26, 400.22, 390.1, 379.93, 369.76, 359.61, 349.53, 339.54, 327.2, 311.03, 290.7, 262.33, 232.18, 243.79, 255.98, 268.78, 282.22, 294.92, 0.0], op: 'add' },
		{ stat: 'pDef', val: [693.67, 693.41, 692.68, 691.47, 689.81, 687.68, 685.11, 682.09, 678.64, 674.76, 670.46, 665.75, 660.63, 655.12, 649.22, 642.95, 636.3, 629.3, 621.95, 614.26, 606.25, 597.92, 589.29, 580.37, 571.18, 561.71, 552.0, 542.06, 531.89, 521.51, 510.94, 500.2, 489.29, 478.24, 467.07, 455.79, 443.26, 428.04, 410.53, 386.66, 361.72, 372.57, 383.75, 395.26, 407.12, 418.52, 0.0], op: 'add' },
		{ stat: 'darkRes', val: 20, op: 'add' },
		{ stat: 'earthRes', val: 20, op: 'add' },
		{ stat: 'fireRes', val: 20, op: 'add' },
		{ stat: 'holyRes', val: 20, op: 'add' },
		{ stat: 'waterRes', val: 20, op: 'add' },
		{ stat: 'windRes', val: 20, op: 'add' } ]},
	{ id: 937, levels: 47, name: 'Elite Mercenary', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: [732.77, 744.85, 756.46, 767.61, 778.28, 788.48, 798.2, 807.44, 816.2, 824.48, 832.28, 839.61, 846.48, 852.89, 858.85, 864.37, 869.47, 874.16, 878.46, 882.39, 885.96, 889.21, 892.16, 894.83, 897.25, 899.46, 901.48, 903.35, 905.11, 906.8, 908.45, 910.11, 911.81, 913.6, 915.53, 917.64, 916.85, 911.34, 900.67, 880.0, 857.17, 802.38, 842.49, 884.62, 928.85, 979.94, 0.0], op: 'add' },
		{ stat: 'mDef', val: [574.06, 574.7, 574.97, 574.9, 574.47, 573.71, 572.6, 571.17, 569.4, 567.32, 564.92, 562.21, 559.2, 555.89, 552.29, 548.41, 544.26, 539.83, 535.15, 530.21, 525.02, 519.61, 513.96, 508.1, 502.03, 495.76, 489.3, 482.67, 475.86, 468.91, 461.8, 454.57, 447.21, 439.74, 432.18, 424.53, 413.76, 398.11, 377.2, 346.37, 313.17, 327.99, 343.71, 360.4, 378.13, 398.84, 0.0], op: 'add' },
		{ stat: 'pAtk', val: [586.22, 586.76, 586.82, 586.41, 585.51, 584.14, 582.29, 579.96, 577.16, 573.89, 570.16, 565.96, 561.32, 556.23, 550.71, 544.77, 538.42, 531.67, 524.54, 517.06, 509.22, 501.07, 492.61, 483.87, 474.88, 465.65, 456.23, 446.63, 436.89, 427.04, 417.12, 407.14, 397.16, 387.2, 377.31, 367.51, 355.35, 339.37, 319.22, 291.03, 261.07, 274.12, 287.83, 302.22, 317.33, 331.61, 0.0], op: 'add' },
		{ stat: 'pAtkRange', val: 200, op: 'add', using: 'Bow' },
		{ stat: 'pDef', val: [725.49, 725.63, 725.29, 724.47, 723.18, 721.43, 719.23, 716.58, 713.5, 709.98, 706.04, 701.68, 696.91, 691.75, 686.19, 680.26, 673.95, 667.29, 660.27, 652.91, 645.22, 637.22, 628.91, 620.31, 611.43, 602.28, 592.88, 583.24, 573.37, 563.3, 553.03, 542.59, 531.98, 521.23, 510.35, 499.36, 487.12, 472.19, 454.97, 431.38, 406.72, 418.92, 431.49, 444.43, 457.77, 470.58, 0.0], op: 'add' },
		{ stat: 'darkRes', val: 50, op: 'add' },
		{ stat: 'earthRes', val: 50, op: 'add' },
		{ stat: 'fireRes', val: 50, op: 'add' },
		{ stat: 'holyRes', val: 50, op: 'add' },
		{ stat: 'waterRes', val: 50, op: 'add' },
		{ stat: 'windRes', val: 50, op: 'add' } ]},
	{ id: 938, levels: 47, name: 'Top Elite Mercenary', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: [781.79, 795.09, 807.93, 820.3, 832.2, 843.63, 854.57, 865.04, 875.02, 884.53, 893.55, 902.11, 910.2, 917.84, 925.02, 931.77, 938.09, 944.01, 949.54, 954.69, 959.49, 963.96, 968.14, 972.03, 975.68, 979.11, 982.36, 985.46, 988.45, 991.36, 994.23, 997.11, 1000.04, 1003.06, 1006.22, 1009.55, 1009.99, 1005.7, 996.25, 976.81, 955.21, 1002.97, 1053.12, 1105.77, 1161.06, 1224.92, 0.0], op: 'add' },
		{ stat: 'mDef', val: [621.1, 622.32, 623.18, 623.67, 623.81, 623.6, 623.05, 622.16, 620.93, 619.38, 617.51, 615.33, 612.83, 610.04, 606.95, 603.57, 599.91, 595.98, 591.79, 587.34, 582.64, 577.7, 572.53, 567.13, 561.53, 555.72, 549.73, 543.55, 537.2, 530.69, 524.03, 517.24, 510.32, 503.29, 496.16, 488.94, 478.6, 463.38, 442.89, 412.47, 379.69, 397.66, 416.73, 436.96, 458.45, 483.57, 0.0], op: 'add' },
		{ stat: 'pAtk', val: [625.43, 626.46, 627.01, 627.07, 626.64, 625.74, 624.34, 622.47, 620.12, 617.29, 614.0, 610.24, 606.03, 601.37, 596.27, 590.75, 584.82, 578.48, 571.77, 564.68, 557.25, 549.49, 541.43, 533.08, 524.48, 515.64, 506.6, 497.39, 488.02, 478.55, 468.99, 459.39, 449.77, 440.18, 430.64, 421.21, 409.41, 393.78, 373.98, 346.14, 316.53, 332.35, 348.97, 366.42, 384.74, 402.06, 0.0], op: 'add' },
		{ stat: 'pDef', val: [786.59, 787.48, 787.89, 787.81, 787.25, 786.23, 784.75, 782.81, 780.42, 777.6, 774.34, 770.66, 766.57, 762.07, 757.18, 751.9, 746.24, 740.21, 733.83, 727.1, 720.04, 712.66, 704.97, 696.98, 688.7, 680.16, 671.35, 662.3, 653.03, 643.54, 633.85, 623.98, 613.95, 603.76, 593.44, 583.01, 571.33, 556.95, 540.28, 517.23, 493.12, 507.91, 523.15, 538.84, 555.01, 570.55, 0.0], op: 'add' },
		{ stat: 'darkRes', val: 80, op: 'add' },
		{ stat: 'earthRes', val: 80, op: 'add' },
		{ stat: 'fireRes', val: 80, op: 'add' },
		{ stat: 'holyRes', val: 80, op: 'add' },
		{ stat: 'waterRes', val: 80, op: 'add' },
		{ stat: 'windRes', val: 80, op: 'add' } ]},
	{ id: 945, levels: 1, name: 'Magician\'s Will', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.05, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'mCritRate', val: 0.05, op: 'basemul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 946, levels: 1, name: 'Silent Mind', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'BowMpConsumeRate', val: 0, op: 'mul' } ]},
	{ id: 948, levels: 1, name: 'Eye for Eye', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'counter_skill', effects: [
		{ stat: 'vengeancePdam', val: 90, op: 'add' },
		{ stat: 'reflectDam', val: 90, op: 'add' } ]},
	{ id: 952, levels: 5, name: 'Collector\'s Experience', target: 'SELF', operateType: 'P', trigger: 6920, effectType: 'ChanceSkillTrigger' },
	{ id: 955, levels: 1, name: 'Strider Dash', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up_special', effects: [
		{ stat: 'runSpd', val: 66, op: 'add' } ]},
	{ id: 956, levels: 3, name: 'Boost Morale', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'possession', effects: [
		{ stat: 'accCombat', val: [4, 6, 8], op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt,Dual Sword' },
		{ stat: 'rCrit', val: [50, 100, 150], op: 'add', using: 'Sword,Big Sword,Blunt,Big Blunt,Dual Sword' },
		{ stat: 'cAtk', val: [1.1, 1.2, 1.3], op: 'mul', using: 'Sword,Big Sword,Blunt,Big Blunt,Dual Sword' } ]},
	{ id: 959, levels: 1, name: 'Frog Jump', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_a', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 960, levels: 1, name: 'Race Running', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_a', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 961, levels: 1, name: 'Swift Dash', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_a', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 962, levels: 1, name: 'Guard\'s March', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_a', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 963, levels: 1, name: 'Guard\'s Ambush', target: 'SELF', operateType: 'A2', effectType: 'SilentMove', abnormalType: 'stealth', effects: [
		{ stat: 'runSpd', val: 0.7, op: 'mul' } ]},
	{ id: 964, levels: 1, name: 'Children of Shilen', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 13, op: 'add' },
		{ stat: 'regMp', val: 1.02, op: 'mul' } ]},
	{ id: 969, levels: 1, name: 'Treykan Dash', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up_special', effects: [
		{ stat: 'runSpd', val: 2, op: 'mul' } ]},
	{ id: 970, levels: 1, name: 'Dash', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up_special', effects: [
		{ stat: 'runSpd', val: 66, op: 'add' } ]},
	{ id: 971, levels: 1, name: 'Acumen', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 972, levels: 1, name: 'Snipe', target: 'SELF', operateType: 'A2', effectType: 'ImmobileBuff', abnormalType: 'snipe', effects: [
		{ stat: 'pAtk', val: 199, op: 'add', using: 'Bow' },
		{ stat: 'accCombat', val: 6, op: 'add', using: 'Bow' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul', using: 'Bow' },
		{ stat: 'pAtkRange', val: 200, op: 'add', using: 'Bow' } ]},
	{ id: 980, levels: 6, name: 'Hate Aura', target: 'AURA', operateType: 'A2', effectType: 'TargetMe', abnormalType: 'lock' },
	{ id: 982, levels: 3, name: 'Combat Aura', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'knight_aura', effects: [
		{ stat: 'pAtk', val: [1.03, 1.04, 1.05], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.03, 1.04, 1.05], op: 'mul' } ]},
	{ id: 983, levels: 1, name: 'Patience', target: 'SELF', operateType: 'P', trigger: 6687, effectType: 'ChanceSkillTrigger' },
	{ id: 988, levels: 3, name: 'Battle Whisper', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'battle_whisper', effects: [
		{ stat: 'pAtk', val: [1.05, 1.1, 1.15], op: 'mul' },
		{ stat: 'cAtk', val: [1.05, 1.07, 1.1], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.07, 1.1], op: 'mul' } ]},
	{ id: 989, levels: 1, name: 'Defense Motion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'defense_motion', effects: [
		{ stat: 'pDef', val: 1.25, op: 'mul' },
		{ stat: 'rEvas', val: 3, op: 'add' },
		{ stat: 'mDef', val: 1.1, op: 'mul' } ]},
	{ id: 1001, levels: 10, name: 'Soul Cry', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'pAtk', val: [4.5, 14, 33.5, 66.5, 90.5, 141.5, 208.5, 247, 310, 375.5], op: 'add' } ]},
	{ id: 1002, levels: 3, name: 'Flame Chant', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 1003, levels: 3, name: 'Pa\'agrian Gift', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1004, levels: 3, name: 'The Wisdom of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 1005, levels: 3, name: 'Blessings of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1006, levels: 3, name: 'Chant of Fire', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 1007, levels: 3, name: 'Chant of Battle', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1008, levels: 3, name: 'The Glory of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 1009, levels: 3, name: 'Chant of Shielding', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1010, levels: 3, name: 'Soul Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1032, levels: 3, name: 'Invigor', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'resist_bleeding', effects: [
		{ stat: 'bleedVuln', val: [30, 40, 50], op: 'sub' } ]},
	{ id: 1033, levels: 3, name: 'Resist Poison', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'resist_poison', effects: [
		{ stat: 'poisonVuln', val: [30, 40, 50], op: 'sub' } ]},
	{ id: 1035, levels: 4, name: 'Mental Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'resist_derangement', effects: [
		{ stat: 'rootVuln', val: [20, 30, 40, 50], op: 'sub' },
		{ stat: 'sleepVuln', val: [20, 30, 40, 50], op: 'sub' },
		{ stat: 'derangementVuln', val: [20, 30, 40, 50], op: 'sub' } ]},
	{ id: 1036, levels: 2, name: 'Magic Barrier', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: [1.23, 1.3], op: 'mul' } ]},
	{ id: 1040, levels: 3, name: 'Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1043, levels: 1, name: 'Holy Weapon', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'holyPower', val: 20, op: 'add' } ]},
	{ id: 1044, levels: 3, name: 'Regeneration', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: [1.1, 1.15, 1.2], op: 'mul' } ]},
	{ id: 1045, levels: 6, name: 'Blessed Body', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 1047, levels: 4, name: 'Mana Regeneration', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'mp_regen_up', effects: [
		{ stat: 'regMp', val: [1.72, 2.16, 2.74, 3.09], op: 'add' } ]},
	{ id: 1048, levels: 6, name: 'Blessed Soul', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 1059, levels: 3, name: 'Empower', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' } ]},
	{ id: 1062, levels: 2, name: 'Berserker Spirit', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'rEvas', val: [2, 4], op: 'sub' } ]},
	{ id: 1068, levels: 3, name: 'Might', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1073, levels: 2, name: 'Kiss of Eva', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_breath_up', effects: [
		{ stat: 'breath', val: [5, 7], op: 'mul' } ]},
	{ id: 1077, levels: 3, name: 'Focus', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.2, 0.25, 0.3], op: 'basemul' } ]},
	{ id: 1078, levels: 6, name: 'Concentration', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'cancel_prob_down', effects: [
		{ stat: 'cancel', val: [18, 25, 36, 42, 48, 53], op: 'sub' } ]},
	{ id: 1085, levels: 3, name: 'Acumen', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 1086, levels: 2, name: 'Haste', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 1087, levels: 3, name: 'Agility', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up', effects: [
		{ stat: 'rEvas', val: [2, 3, 4], op: 'add' } ]},
	{ id: 1096, levels: 16, name: 'Seal of Chaos', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'hit_down', effects: [
		{ stat: 'accCombat', val: [9, 9, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], op: 'sub' } ]},
	{ id: 1099, levels: 15, name: 'Seal of Slow', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'speed_down', effects: [
		{ stat: 'runSpd', val: [0.8, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7], op: 'mul' } ]},
	{ id: 1101, levels: 2, name: 'Blaze Quake', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'dot_attr' },
	{ id: 1104, levels: 14, name: 'Seal of Winter', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'attack_time_up', effects: [
		{ stat: 'pAtkSpd', val: 0.77, op: 'mul' } ]},
	{ id: 1108, levels: 4, name: 'Seal of Flame', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'dot_attr' },
	{ id: 1139, levels: 2, name: 'Servitor Magic Shield', target: 'PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: [1.23, 1.3], op: 'mul' } ]},
	{ id: 1140, levels: 3, name: 'Servitor Physical Shield', target: 'PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1141, levels: 2, name: 'Servitor Haste', target: 'PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 1144, levels: 2, name: 'Servitor Wind Walk', target: 'PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [20, 33], op: 'add' } ]},
	{ id: 1145, levels: 3, name: 'Bright Servitor', target: 'PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' } ]},
	{ id: 1146, levels: 3, name: 'Mighty Servitor', target: 'PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 1182, levels: 3, name: 'Resist Aqua', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'armor_water', effects: [
		{ stat: 'waterRes', val: [10, 15, 20], op: 'add' } ]},
	{ id: 1189, levels: 3, name: 'Resist Wind', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'armor_wind', effects: [
		{ stat: 'windRes', val: [10, 15, 20], op: 'add' } ]},
	{ id: 1191, levels: 3, name: 'Resist Fire', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'armor_fire', effects: [
		{ stat: 'fireRes', val: [10, 15, 20], op: 'add' } ]},
	{ id: 1204, levels: 2, name: 'Wind Walk', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [20, 33], op: 'add' } ]},
	{ id: 1208, levels: 17, name: 'Seal of Binding', target: 'AURA', operateType: 'A2', effectType: 'Root', abnormalType: 'root_magically' },
	{ id: 1209, levels: 6, name: 'Seal of Poison', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'poison' },
	{ id: 1210, levels: 4, name: 'Seal of Gloom', target: 'AURA', operateType: 'A2', effectType: 'ManaDamOverTime', abnormalType: 'dot_mp' },
	{ id: 1213, levels: 13, name: 'Seal of Mirage', target: 'AURA', operateType: 'A1', effectType: 'Confusion' },
	{ id: 1217, levels: 33, name: 'Greater Heal', target: 'ONE', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_others' },
	{ id: 1219, levels: 33, name: 'Greater Group Heal', target: 'PARTY', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_others' },
	{ id: 1229, levels: 18, name: 'Chant of Life', target: 'PARTY', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_orc' },
	{ id: 1232, levels: 3, name: 'Blazing Skin', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'dmg_shield', effects: [
		{ stat: 'reflectDam', val: [10, 15, 20], op: 'add' } ]},
	{ id: 1238, levels: 3, name: 'Freezing Skin', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'dmg_shield', effects: [
		{ stat: 'reflectDam', val: [10, 15, 20], op: 'add' } ]},
	{ id: 1240, levels: 3, name: 'Guidance', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add' } ]},
	{ id: 1242, levels: 3, name: 'Death Whisper', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 1243, levels: 6, name: 'Bless Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'shield_prob_up', effects: [
		{ stat: 'rShld', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3], op: 'mul' } ]},
	{ id: 1246, levels: 12, name: 'Seal of Silence', target: 'AURA', operateType: 'A2', effectType: 'Mute', abnormalType: 'silence' },
	{ id: 1247, levels: 14, name: 'Seal of Scourge', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'hp_regen_down', effects: [
		{ stat: 'regHp', val: 0, op: 'mul' } ]},
	{ id: 1248, levels: 12, name: 'Seal of Suspension', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'reuse_delay_up', effects: [
		{ stat: 'mReuse', val: 3, op: 'mul' },
		{ stat: 'pReuse', val: 3, op: 'mul' } ]},
	{ id: 1249, levels: 3, name: 'The Vision of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add' } ]},
	{ id: 1250, levels: 3, name: 'Under the Protection of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'shield_prob_up', effects: [
		{ stat: 'rShld', val: [1.3, 1.4, 1.5], op: 'mul' } ]},
	{ id: 1251, levels: 2, name: 'Chant of Fury', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 1252, levels: 3, name: 'Chant of Evasion', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up', effects: [
		{ stat: 'rEvas', val: [2, 3, 4], op: 'add' } ]},
	{ id: 1253, levels: 3, name: 'Chant of Rage', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 1256, levels: 13, name: 'The Heart of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_orc' },
	{ id: 1257, levels: 3, name: 'Decrease Weight', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'decrease_weight_penalty', effects: [
		{ stat: 'weightPenalty', val: [3000, 6000, 9000], op: 'add' } ]},
	{ id: 1259, levels: 4, name: 'Resist Shock', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'resist_shock', effects: [
		{ stat: 'stunVuln', val: [15, 20, 30, 40], op: 'sub' } ]},
	{ id: 1260, levels: 3, name: 'The Tact of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up', effects: [
		{ stat: 'rEvas', val: [2, 3, 4], op: 'add' } ]},
	{ id: 1261, levels: 2, name: 'The Rage of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'rEvas', val: [2, 4], op: 'sub' } ]},
	{ id: 1262, levels: 5, name: 'Transfer Pain', target: 'SELF', operateType: 'T', effectType: 'MpConsumePerLevel', effects: [
		{ stat: 'transDam', val: [10, 20, 30, 40, 50], op: 'add' } ]},
	{ id: 1268, levels: 4, name: 'Vampiric Rage', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: [6, 7, 8, 9], op: 'add' } ]},
	{ id: 1272, levels: 13, name: 'Word of Fear', target: 'AURA', operateType: 'A2', effectType: 'Fear', abnormalType: 'turn_flee' },
	{ id: 1282, levels: 2, name: 'Pa\'agrian Haste', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [20, 33], op: 'add' } ]},
	{ id: 1283, levels: 13, name: 'Soul Guard', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'pDef', val: [293.3, 333.2, 375.9, 421.4, 445.2, 469.7, 494.9, 520.1, 546, 571.9, 598.5, 625.8, 653.1], op: 'add' } ]},
	{ id: 1284, levels: 3, name: 'Chant of Revenge', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dmg_shield', effects: [
		{ stat: 'reflectDam', val: [10, 15, 20], op: 'add' } ]},
	{ id: 1285, levels: 1, name: 'Seed of Fire', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'firePower', val: 20, op: 'add' } ]},
	{ id: 1286, levels: 1, name: 'Seed of Water', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'waterPower', val: 20, op: 'add' } ]},
	{ id: 1287, levels: 1, name: 'Seed of Wind', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'windPower', val: 20, op: 'add' } ]},
	{ id: 1297, levels: 6, name: 'Clear Mind', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: [3.2, 4, 4.3, 5.1, 5.8, 6.2], op: 'add' },
		{ stat: 'regMp', val: [2.6, 3.2, 3.5, 4.1, 4.7, 4.9], op: 'add' } ]},
	{ id: 1299, levels: 2, name: 'Servitor Empowerment', target: 'PET', operateType: 'A2', effectType: 'ImmobilePetBuff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: [1800, 3600], op: 'add' },
		{ stat: 'mDef', val: [1350, 2700], op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 1303, levels: 2, name: 'Wild Magic', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'magic_critical_up', effects: [
		{ stat: 'mCritRate', val: [1, 2], op: 'add' } ]},
	{ id: 1304, levels: 3, name: 'Advanced Block', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'shield_defence_up', effects: [
		{ stat: 'sDef', val: [1.3, 1.4, 1.5], op: 'mul' } ]},
	{ id: 1307, levels: 3, name: 'Prayer', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'heal_effect_up', effects: [
		{ stat: 'healEffect', val: [1.08, 1.1, 1.12], op: 'mul' } ]},
	{ id: 1308, levels: 3, name: 'Chant of Predator', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.2, 0.25, 0.3], op: 'basemul' } ]},
	{ id: 1309, levels: 3, name: 'Chant of Eagle', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add' } ]},
	{ id: 1310, levels: 4, name: 'Chant of Vampire', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: [6, 7, 8, 9], op: 'add' } ]},
	{ id: 1311, levels: 6, name: 'Body Of Avatar', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 1323, levels: 1, name: 'Noblesse Blessing', target: 'ONE', operateType: 'A2', effectType: 'NoblesseBless', abnormalType: 'preserve_abnormal' },
	{ id: 1325, levels: 1, name: 'Fortune of Noblesse', target: 'PARTY', operateType: 'A2', effectType: 'CharmOfLuck', abnormalType: 'reduce_drop_penalty' },
	{ id: 1326, levels: 1, name: 'Harmony of Noblesse', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: 3000, op: 'add' },
		{ stat: 'runSpd', val: 1.25, op: 'mul' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' },
		{ stat: 'bowWpnVuln', val: 0.9, op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: 0.94, op: 'mul' },
		{ stat: 'maxCp', val: 0.8, op: 'mul' },
		{ stat: 'maxRecoverableCp', val: 0.6, op: 'mul' },
		{ stat: 'maxRecoverableHp', val: 0.7, op: 'mul' } ]},
	{ id: 1327, levels: 1, name: 'Symphony of Noblesse', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'mDef', val: 4500, op: 'add' },
		{ stat: 'runSpd', val: 1.25, op: 'mul' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' },
		{ stat: 'bowWpnVuln', val: 0.9, op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: 0.94, op: 'mul' },
		{ stat: 'maxCp', val: 0.8, op: 'mul' },
		{ stat: 'maxRecoverableCp', val: 0.6, op: 'mul' },
		{ stat: 'maxRecoverableHp', val: 0.7, op: 'mul' } ]},
	{ id: 1344, levels: 1, name: 'Mass Warrior Bane', target: 'AURA', operateType: 'A1', effectType: 'Cancel' },
	{ id: 1345, levels: 1, name: 'Mass Mage Bane', target: 'AURA', operateType: 'A1', effectType: 'Cancel' },
	{ id: 1346, levels: 1, name: 'Warrior Servitor', target: 'PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'regHp', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 0.9, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' } ]},
	{ id: 1347, levels: 1, name: 'Wizard Servitor', target: 'PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'regMp', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' } ]},
	{ id: 1348, levels: 1, name: 'Assassin Servitor', target: 'PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' },
		{ stat: 'cAtk', val: 1.2, op: 'mul', atkFrom: 'behind' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul', atkFrom: 'behind' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' } ]},
	{ id: 1352, levels: 1, name: 'Elemental Protection', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up_attr', effects: [
		{ stat: 'waterRes', val: 20, op: 'add' },
		{ stat: 'fireRes', val: 20, op: 'add' },
		{ stat: 'windRes', val: 20, op: 'add' },
		{ stat: 'earthRes', val: 20, op: 'add' } ]},
	{ id: 1353, levels: 1, name: 'Divine Protection', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'resist_holy_unholy', effects: [
		{ stat: 'darkRes', val: 30, op: 'add' },
		{ stat: 'holyRes', val: 20, op: 'add' } ]},
	{ id: 1354, levels: 1, name: 'Arcane Protection', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'resist_debuff_dispel', effects: [
		{ stat: 'cancelVuln', val: 30, op: 'sub' },
		{ stat: 'debuffVuln', val: 20, op: 'sub' } ]},
	{ id: 1355, levels: 1, name: 'Prophecy of Water', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
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
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 1356, levels: 1, name: 'Prophecy of Fire', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
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
	{ id: 1357, levels: 1, name: 'Prophecy of Wind', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul' },
		{ stat: 'mCritPower', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 1360, levels: 1, name: 'Mass Block Shield', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'block_shield_up', effects: [
		{ stat: 'pDef', val: 0.9, op: 'mul' } ]},
	{ id: 1361, levels: 1, name: 'Mass Block Wind Walk', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'block_speed_up', effects: [
		{ stat: 'runSpd', val: 0.9, op: 'mul' } ]},
	{ id: 1362, levels: 1, name: 'Chant of Spirit', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'resist_debuff_dispel', effects: [
		{ stat: 'cancelVuln', val: 30, op: 'sub' },
		{ stat: 'debuffVuln', val: 20, op: 'sub' } ]},
	{ id: 1363, levels: 1, name: 'Chant of Victory', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' },
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
	{ id: 1364, levels: 1, name: 'Eye of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_hit_defence_crt_rate_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'critDamEvas', val: 1.3, op: 'mul' } ]},
	{ id: 1365, levels: 1, name: 'Soul of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_ma_md_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 1366, levels: 1, name: 'Seal of Despair', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'ultimate_debuff', effects: [
		{ stat: 'pAtk', val: 0.9, op: 'mul' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'mDef', val: 0.7, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.7, op: 'mul' },
		{ stat: 'rCrit', val: -0.3, op: 'basemul' },
		{ stat: 'cAtk', val: 0.7, op: 'mul' },
		{ stat: 'accCombat', val: 6, op: 'sub' } ]},
	{ id: 1368, levels: 8, name: 'Expand Dwarven Craft', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'DwarfRecipeLimit', val: [6, 12, 18, 24, 30, 36, 42, 48], op: 'add' } ]},
	{ id: 1369, levels: 8, name: 'Expand Common Craft', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'CommonRecipeLimit', val: [6, 12, 18, 24, 30, 36, 42, 48], op: 'add' } ]},
	{ id: 1370, levels: 8, name: 'Expand Trade', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'PrivateSellLimit', val: [1, 2, 3, 4, 5, 6, 7, 8], op: 'add' },
		{ stat: 'PrivateBuyLimit', val: [1, 2, 3, 4, 5, 6, 7, 8], op: 'add' } ]},
	{ id: 1371, levels: 8, name: 'Expand Storage', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'whLimit', val: [6, 12, 18, 24, 30, 36, 42, 48], op: 'add' },
		{ stat: 'FreightLimit', val: [6, 12, 18, 24, 30, 36, 42, 48], op: 'add' } ]},
	{ id: 1372, levels: 8, name: 'Expand Inventory', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'inventoryLimit', val: [6, 12, 18, 24, 30, 36, 42, 48], op: 'add' } ]},
	{ id: 1373, levels: 1, name: 'Strider Mastery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.25, op: 'mul' },
		{ stat: 'mAtk', val: 1.25, op: 'mul' } ]},
	{ id: 1374, levels: 1, name: 'Heroic Valor', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'hero_buff', effects: [
		{ stat: 'cancelVuln', val: 40, op: 'sub' },
		{ stat: 'pAtk', val: 250, op: 'add' },
		{ stat: 'pDef', val: 500, op: 'add' } ]},
	{ id: 1375, levels: 1, name: 'Heroic Grandeur', target: 'AURA', operateType: 'A2', effectType: 'Mute', abnormalType: 'hero_debuff', effects: [
		{ stat: 'cancel', val: 100, op: 'add' },
		{ stat: 'mDef', val: 0.5, op: 'mul' },
		{ stat: 'pDef', val: 0.5, op: 'mul' },
		{ stat: 'rEvas', val: 16, op: 'sub' },
		{ stat: 'rShld', val: 0.5, op: 'mul' } ]},
	{ id: 1376, levels: 1, name: 'Heroic Dread', target: 'AURA', operateType: 'A2', effectType: 'Fear', abnormalType: 'hero_debuff', effects: [
		{ stat: 'runSpd', val: 66, op: 'add' } ]},
	{ id: 1388, levels: 3, name: 'Greater Might', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_pd_up', effects: [
		{ stat: 'pAtk', val: [1.04, 1.07, 1.1], op: 'mul' } ]},
	{ id: 1389, levels: 3, name: 'Greater Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_pd_up', effects: [
		{ stat: 'pDef', val: [1.05, 1.1, 1.15], op: 'mul' } ]},
	{ id: 1390, levels: 3, name: 'War Chant', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_pd_up', effects: [
		{ stat: 'pAtk', val: [1.04, 1.07, 1.1], op: 'mul' } ]},
	{ id: 1391, levels: 3, name: 'Earth Chant', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_pd_up', effects: [
		{ stat: 'pDef', val: [1.05, 1.1, 1.15], op: 'mul' } ]},
	{ id: 1392, levels: 3, name: 'Holy Resistance', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'armor_holy', effects: [
		{ stat: 'holyRes', val: [15, 23, 30], op: 'add' } ]},
	{ id: 1393, levels: 3, name: 'Unholy Resistance', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'armor_unholy', effects: [
		{ stat: 'darkRes', val: [15, 23, 30], op: 'add' } ]},
	{ id: 1397, levels: 3, name: 'Clarity', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'cheap_magic', effects: [
		{ stat: 'MagicalMpConsumeRate', val: [0.96, 0.93, 0.9], op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: [0.9, 0.85, 0.8], op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: [0.9, 0.85, 0.8], op: 'mul' } ]},
	{ id: 1405, levels: 4, name: 'Divine Inspiration', target: 'SELF', operateType: 'P', effectType: 'EnlargeAbnormalSlot' },
	{ id: 1410, levels: 1, name: 'Salvation', target: 'ONE', operateType: 'A2', effectType: 'PhoenixBless', abnormalType: 'resurrection_special' },
	{ id: 1411, levels: 1, name: 'Mystic Immunity', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_invincibility', effects: [
		{ stat: 'debuffImmunity', val: 1, op: 'set' } ]},
	{ id: 1412, levels: 1, name: 'Spell Turning', target: 'ONE', operateType: 'A1', effectType: 'AbortCast' },
	{ id: 1413, levels: 1, name: 'Magnus\' Chant', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxMp', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.5, op: 'add', using: 'Heavy,Light' },
		{ stat: 'regMp', val: 4, op: 'add', using: 'Magic' },
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'mAtk', val: 1.3, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'fireRes', val: 10, op: 'add' },
		{ stat: 'waterRes', val: 10, op: 'add' },
		{ stat: 'windRes', val: 10, op: 'add' },
		{ stat: 'earthRes', val: 10, op: 'add' },
		{ stat: 'debuffVuln', val: 25, op: 'sub' },
		{ stat: 'cancelVuln', val: 40, op: 'sub' } ]},
	{ id: 1414, levels: 1, name: 'Victory of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxCp', val: 1.2, op: 'mul' },
		{ stat: 'regCp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul' },
		{ stat: 'mCritPower', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' } ]},
	{ id: 1415, levels: 1, name: 'Pa\'agrio\'s Emblem', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'resist_debuff_dispel', effects: [
		{ stat: 'cancelVuln', val: 30, op: 'sub' },
		{ stat: 'debuffVuln', val: 20, op: 'sub' } ]},
	{ id: 1416, levels: 1, name: 'Pa\'agrio\'s Fist', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'cp_up', effects: [
		{ stat: 'maxCp', val: 800, op: 'add' } ]},
	{ id: 1417, levels: 5, name: 'Aura Flash', target: 'AURA', operateType: 'A1', effectType: 'RemoveTarget' },
	{ id: 1418, levels: 1, name: 'Celestial Shield', target: 'ONE', operateType: 'A2', effectType: 'Invincible', abnormalType: 'invincibility' },
	{ id: 1427, levels: 1, name: 'Flames of Invincibility', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Invincible', abnormalType: 'invincibility' },
	{ id: 1430, levels: 5, name: 'Invocation', target: 'SELF', operateType: 'A2', effectType: 'Paralyze', abnormalType: 'force_meditation', effects: [
		{ stat: 'pDef', val: 0.1, op: 'mul' } ]},
	{ id: 1432, levels: 2, name: 'Increase Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12], op: 'mul' } ]},
	{ id: 1441, levels: 3, name: 'Soul to Empower', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' } ]},
	{ id: 1442, levels: 3, name: 'Protection from Darkness', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'armor_unholy', effects: [
		{ stat: 'darkRes', val: [15, 23, 30], op: 'add' } ]},
	{ id: 1443, levels: 1, name: 'Dark Weapon', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'darkPower', val: 20, op: 'add' } ]},
	{ id: 1444, levels: 1, name: 'Pride of Kamael', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'kamael_special', effects: [
		{ stat: 'pAtk', val: 1.1, op: 'mul', using: 'Ancient,Crossbow,Rapier' },
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'blowRate', val: 1.1, op: 'mul' } ]},
	{ id: 1448, levels: 1, name: 'Blink', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 1454, levels: 1, name: 'Diamond Dust', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'speed_down', effects: [
		{ stat: 'runSpd', val: 0.6, op: 'mul' } ]},
	{ id: 1457, levels: 1, name: 'Empowering Echo', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up_special', effects: [
		{ stat: 'mAtk', val: 1.25, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 1.35, op: 'mul' } ]},
	{ id: 1459, levels: 1, name: 'Divine Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'heal_power_up', effects: [
		{ stat: 'healEffect', val: 1000, op: 'add' } ]},
	{ id: 1460, levels: 1, name: 'Mana Gain', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'recharge_up', effects: [
		{ stat: 'manaCharge', val: 85, op: 'add' } ]},
	{ id: 1461, levels: 1, name: 'Chant of Protection', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 't_crt_dmg_down', effects: [
		{ stat: 'critVuln', val: 0.7, op: 'mul' } ]},
	{ id: 1462, levels: 1, name: 'Seal of Blockade', target: 'AURA', operateType: 'A2', effectType: 'PhysicalAttackMute', abnormalType: 'normal_attack_block' },
	{ id: 1463, levels: 1, name: 'Fire Weapon', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'firePower', val: 20, op: 'add' } ]},
	{ id: 1464, levels: 1, name: 'Ice Weapon', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'waterPower', val: 20, op: 'add' } ]},
	{ id: 1465, levels: 1, name: 'Wind Weapon', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'windPower', val: 20, op: 'add' } ]},
	{ id: 1466, levels: 1, name: 'Earth Weapon', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'earthPower', val: 20, op: 'add' } ]},
	{ id: 1470, levels: 1, name: 'Prahnah', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'mDef', val: 3000, op: 'add' } ]},
	{ id: 1474, levels: 1, name: 'Abyssal Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.1, op: 'mul' } ]},
	{ id: 1476, levels: 3, name: 'Appetite for Destruction', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'instinct', effects: [
		{ stat: 'pAtk', val: [1.3, 1.4, 1.5], op: 'mul' },
		{ stat: 'rCrit', val: [0.3, 0.4, 0.5], op: 'basemul' },
		{ stat: 'cAtk', val: [1.3, 1.4, 1.5], op: 'mul' } ]},
	{ id: 1477, levels: 3, name: 'Vampiric Impulse', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'instinct', effects: [
		{ stat: 'absorbDam', val: [60, 70, 80], op: 'add' } ]},
	{ id: 1478, levels: 2, name: 'Protection Instinct', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'instinct', effects: [
		{ stat: 'pDef', val: [1200, 1800], op: 'add' },
		{ stat: 'mDef', val: [900, 1350], op: 'add' } ]},
	{ id: 1479, levels: 3, name: 'Magic Impulse', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'instinct', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'mAtk', val: [1.75, 1.85, 1.95], op: 'mul' },
		{ stat: 'mCritRate', val: [1, 2, 3], op: 'basemul' } ]},
	{ id: 1480, levels: 1, name: 'Soul Harmony', target: 'PARTY', operateType: 'A2', effectType: 'ManaHealOverTime', abnormalType: 'instinct' },
	{ id: 1487, levels: 8, name: 'Restoration', target: 'ONE', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_kamael' },
	{ id: 1489, levels: 1, name: 'Summoner Ability - Resist Attribute', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'waterRes', val: 5, op: 'add' } ]},
	{ id: 1490, levels: 1, name: 'Healer Ability - Heal', target: 'SELF', operateType: 'P', trigger: 5577, effectType: 'ChanceSkillTrigger' },
	{ id: 1491, levels: 1, name: 'Summoner Ability - Spirit', target: 'SELF', operateType: 'P', trigger: 5578, effectType: 'ChanceSkillTrigger' },
	{ id: 1492, levels: 1, name: 'Flame Armor', target: 'SELF', operateType: 'A2', trigger: 5567, effectType: 'ChanceSkillTrigger', abnormalType: 'elemental_armor', effects: [
		{ stat: 'fireRes', val: 60, op: 'add' } ]},
	{ id: 1493, levels: 1, name: 'Frost Armor', target: 'SELF', operateType: 'A2', trigger: 5568, effectType: 'ChanceSkillTrigger', abnormalType: 'elemental_armor', effects: [
		{ stat: 'waterRes', val: 60, op: 'add' } ]},
	{ id: 1494, levels: 1, name: 'Hurricane Armor', target: 'SELF', operateType: 'A2', trigger: 5569, effectType: 'ChanceSkillTrigger', abnormalType: 'elemental_armor', effects: [
		{ stat: 'windRes', val: 60, op: 'add' } ]},
	{ id: 1495, levels: 1, name: 'Vampiric Mist', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'ultimate_debuff', effects: [
		{ stat: 'pAtk', val: 0.5, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.5, op: 'mul' },
		{ stat: 'runSpd', val: 0.5, op: 'mul' },
		{ stat: 'accCombat', val: 12, op: 'sub' } ]},
	{ id: 1496, levels: 1, name: 'Servitor Barrier', target: 'PET', operateType: 'A2', effectType: 'Invincible', abnormalType: 'invincibility' },
	{ id: 1497, levels: 1, name: 'Excessive Loyalty', target: 'SELF', operateType: 'P', trigger: 5570, effectType: 'ChanceSkillTrigger' },
	{ id: 1498, levels: 1, name: 'Mutual Response', target: 'SELF', operateType: 'P', trigger: 5571, effectType: 'ChanceSkillTrigger' },
	{ id: 1499, levels: 1, name: 'Improved Combat', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_pa_pd_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 1500, levels: 1, name: 'Improved Magic', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_ma_md_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 1501, levels: 1, name: 'Improved Condition', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_hp_mp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' },
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 1502, levels: 1, name: 'Improved Critical Attack', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_crt_rate_dmg_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' },
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 1503, levels: 1, name: 'Improved Shield Defense', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_shield_rate_defence_up', effects: [
		{ stat: 'rShld', val: 1.3, op: 'mul' },
		{ stat: 'sDef', val: 1.5, op: 'mul' } ]},
	{ id: 1504, levels: 1, name: 'Improved Movement', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_speed_avoid_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 1505, levels: 1, name: 'Sublime Self-Sacrifice', target: 'PARTY_NOTME', operateType: 'A2', effectType: 'Invincible', abnormalType: 'invincibility' },
	{ id: 1507, levels: 1, name: 'Lord of Vampire', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack_special', effects: [
		{ stat: 'absorbDam', val: 80, op: 'add' } ]},
	{ id: 1508, levels: 1, name: 'Throne Root', target: 'AURA', operateType: 'A2', effectType: 'Root', abnormalType: 'root_magically', effects: [
		{ stat: 'rootVuln', val: 100, op: 'sub' } ]},
	{ id: 1509, levels: 1, name: 'Seal of Limit', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'limit', effects: [
		{ stat: 'maxRecoverableHp', val: 0.3, op: 'mul' },
		{ stat: 'maxRecoverableMp', val: 0.3, op: 'mul' },
		{ stat: 'maxRecoverableCp', val: 0.3, op: 'mul' } ]},
	{ id: 1514, levels: 1, name: 'Soul Barrier', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up_bow', effects: [
		{ stat: 'bowWpnVuln', val: 0.9, op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: 0.94, op: 'mul' },
		{ stat: 'mDef', val: 2, op: 'mul' } ]},
	{ id: 1515, levels: 1, name: 'Lightning Barrier', target: 'SELF', operateType: 'A2', trigger: 5592, effectType: 'ChanceSkillTrigger', abnormalType: 'elemental_armor' },
	{ id: 1517, levels: 1, name: 'Chant of Combat', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_pa_pd_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 1518, levels: 1, name: 'Chant of Critical Attack', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_crt_rate_dmg_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' },
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 1519, levels: 1, name: 'Chant of Blood Awakening', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_vampiric_haste', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 1520, levels: 1, name: 'Inquisitor', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 1521, levels: 1, name: 'Inquisitor', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 1522, levels: 1, name: 'Inquisitor', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 1526, levels: 3, name: 'Steal Mana', target: 'SELF', operateType: 'P', trigger: [
		5676, 5677, 5678], effectType: 'ChanceSkillTrigger' },
	{ id: 1527, levels: 3, name: 'Expert Casting', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.1, op: 'mul' },
		{ stat: 'mReuse', val: [0.9, 0.85, 0.8], op: 'mul' } ]},
	{ id: 1531, levels: 7, name: 'Bless the Blood', target: 'PARTY_MEMBER', operateType: 'A2', trigger: 5698, effectType: 'ChanceSkillTrigger', abnormalType: 'bless_the_blood' },
	{ id: 1532, levels: 1, name: 'Enlightenment', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'final_secret', effects: [
		{ stat: 'mAtk', val: 1.4, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.5, op: 'mul' },
		{ stat: 'mCritRate', val: 0.5, op: 'basemul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.1, op: 'mul' } ]},
	{ id: 1533, levels: 1, name: 'Enlightenment', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'final_secret', effects: [
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'healEffect', val: 1.4, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.5, op: 'mul' },
		{ stat: 'mCritRate', val: 0.5, op: 'basemul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.1, op: 'mul' } ]},
	{ id: 1534, levels: 1, name: 'Courage of Pa\'agrio', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' } ]},
	{ id: 1535, levels: 1, name: 'Chant of Movement', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_speed_avoid_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 1536, levels: 1, name: 'Combat of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_pa_pd_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 1537, levels: 1, name: 'Critical of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_crt_rate_dmg_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' },
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 1538, levels: 1, name: 'Condition of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_hp_mp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' },
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 1540, levels: 1, name: 'Turn to Stone', target: 'SELF', operateType: 'A2', effectType: 'Petrification', abnormalType: 'turn_stone' },
	{ id: 1542, levels: 1, name: 'Counter Critical', target: 'ONE', operateType: 'A2', trigger: 6059, effectType: 'ChanceSkillTrigger', abnormalType: 'counter_critical', effects: [
		{ stat: 'critVuln', val: 0.7, op: 'mul' } ]},
	{ id: 1543, levels: 1, name: 'Great Fury', target: 'SELF', operateType: 'P', trigger: 6060, effectType: 'ChanceSkillTrigger' },
	{ id: 1547, levels: 3, name: 'Spirit Sharing', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'public_slot', effects: [
		{ stat: 'pAtk', val: [1.03, 1.04, 1.05], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.02, 1.05, 1.07], op: 'mul' },
		{ stat: 'mAtk', val: [1.03, 1.04, 1.05], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.01, 1.03, 1.05], op: 'mul' },
		{ stat: 'physicalSkillPower', val: [1.05, 1.07, 1.1], op: 'mul' },
		{ stat: 'rCrit', val: [0.05, 0.07, 0.1], op: 'basemul' } ]},
	{ id: 1548, levels: 3, name: 'Resist Earth', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'armor_earth', effects: [
		{ stat: 'earthRes', val: [10, 15, 20], op: 'add' } ]},
	{ id: 1549, levels: 1, name: 'Chant of Elements', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up_attr', effects: [
		{ stat: 'fireRes', val: 20, op: 'add' },
		{ stat: 'waterRes', val: 20, op: 'add' },
		{ stat: 'windRes', val: 20, op: 'add' },
		{ stat: 'earthRes', val: 20, op: 'add' } ]},
	{ id: 1556, levels: 1, name: 'Arcane Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'mana_shield', effects: [
		{ stat: 'manaShield', val: 70, op: 'add' } ]},
	{ id: 1557, levels: 1, name: 'Servitor Share', target: 'PET', operateType: 'A2', effectType: 'ServitorShare' },
	{ id: 1559, levels: 3, name: 'Potential Ability', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: [0.2, 0.3, 0.4], op: 'basemul', using: 'Dagger,Dual Dagger,Light' },
		{ stat: 'cAtkAdd', val: [177, 295, 384], op: 'add', using: 'Dagger,Dual Dagger,Light' } ]},
	{ id: 1561, levels: 5, name: 'Battle Cry', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: [1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 1562, levels: 2, name: 'Chant of Berserker', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' },
		{ stat: 'rEvas', val: [2, 4], op: 'sub' },
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' } ]},
	{ id: 1563, levels: 2, name: 'Fury of Pa\'agrio', target: 'PARTY_CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 1564, levels: 1, name: 'Piercing Attack', target: 'SELF', operateType: 'P', trigger: 6706, effectType: 'ChanceSkillTrigger' },
	{ id: 1565, levels: 6, name: 'Mana Pump', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: [70, 100, 140, 150, 180, 200], op: 'add' } ]},
	{ id: 2001, levels: 1, name: 'Red Potion', target: 'SELF', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'hp_recover' },
	{ id: 2002, levels: 1, name: 'Healing Drug', target: 'SELF', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'hp_recover' },
	{ id: 2010, levels: 1, name: 'Endeavor Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 2011, levels: 1, name: 'Haste Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 2012, levels: 1, name: 'Potion of Alacrity', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 2031, levels: 1, name: 'Lesser Healing Potion', target: 'SELF', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'hp_recover' },
	{ id: 2032, levels: 1, name: 'Healing potion', target: 'SELF', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'hp_recover' },
	{ id: 2034, levels: 1, name: 'Greater Haste Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2035, levels: 1, name: 'Greater Swift Attack Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 2037, levels: 1, name: 'Greater Healing Potion', target: 'SELF', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'hp_recover' },
	{ id: 2050, levels: 1, name: 'Scroll of Guidance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 2051, levels: 1, name: 'Scroll of Death Whisper', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 2052, levels: 1, name: 'Scroll of Focus', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 2053, levels: 1, name: 'Scroll of Greater Acumen', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 2054, levels: 1, name: 'Scroll of Haste', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 2055, levels: 1, name: 'Scroll of Agility', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 2056, levels: 1, name: 'Scroll of Mystic Empower', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 2057, levels: 1, name: 'Scroll of Might', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 2058, levels: 1, name: 'Scroll of Wind Walk', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2059, levels: 1, name: 'Scroll of Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 2064, levels: 1, name: 'Scroll of Mana Regeneration', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'mp_regen_up', effects: [
		{ stat: 'regMp', val: 1.82, op: 'add' } ]},
	{ id: 2076, levels: 1, name: 'Bless of Eva', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_breath_up', effects: [
		{ stat: 'breath', val: 5, op: 'mul' } ]},
	{ id: 2077, levels: 1, name: 'Potion of Revenge', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'dmg_shield', effects: [
		{ stat: 'pDef', val: 0.83, op: 'mul' },
		{ stat: 'reflectDam', val: 20, op: 'add' } ]},
	{ id: 2103, levels: 1, name: 'Mystery Potion', target: 'SELF', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head' },
	{ id: 2139, levels: 1, name: 'Special Tree Recovery Bonus', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_up', effects: [
		{ stat: 'regMp', val: 1.2, op: 'mul' },
		{ stat: 'regHp', val: 1.4, op: 'mul' } ]},
	{ id: 2168, levels: 6, name: 'Raid Blessing', target: 'SELF', operateType: 'A2', effectType: 'CharmOfLuck', abnormalType: 'reduce_drop_penalty' },
	{ id: 2169, levels: 2, name: 'Magic Haste Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: [1.23, 1.3], op: 'mul' } ]},
	{ id: 2231, levels: 1, name: 'Amulet: Protection of Valakas', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'valakas_item', effects: [
		{ stat: 'valakasVuln', val: 11, op: 'sub' } ]},
	{ id: 2232, levels: 1, name: 'Amulet: Slay Valakas', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'valakas_item', effects: [
		{ stat: 'valakasProf', val: 20, op: 'add' } ]},
	{ id: 2239, levels: 1, name: 'Petrification Scroll', target: 'PARTY', operateType: 'A2', effectType: 'Petrification', abnormalType: 'turn_stone' },
	{ id: 2246, levels: 1, name: 'Herb of Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up_herb', effects: [
		{ stat: 'pAtk', val: 1.25, op: 'mul', using: 'Fist,Sword,Big Sword,Dagger,Dual Dagger,Dual Fist,Dual Sword,Blunt,Big Blunt,Ancient,Rapier,Etc' },
		{ stat: 'pAtk', val: 1.15, op: 'mul', using: 'Bow,Pole,Crossbow' } ]},
	{ id: 2247, levels: 1, name: 'Herb of Magic', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up_herb', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 2248, levels: 1, name: 'Bless of Fire', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'firePower', val: 20, op: 'add' } ]},
	{ id: 2249, levels: 1, name: 'Bless of Water', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'waterPower', val: 20, op: 'add' } ]},
	{ id: 2250, levels: 1, name: 'Bless of Wind', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'windPower', val: 20, op: 'add' } ]},
	{ id: 2251, levels: 1, name: 'Bless of Earth', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'earthPower', val: 20, op: 'add' } ]},
	{ id: 2252, levels: 1, name: 'Bless of Darkness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'darkPower', val: 20, op: 'add' } ]},
	{ id: 2253, levels: 1, name: 'Bless of Sacredness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'holyPower', val: 20, op: 'add' } ]},
	{ id: 2274, levels: 9, name: 'Fisherman\'s Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'fishing_mastery_down' },
	{ id: 2280, levels: 1, name: 'Herb of Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 2281, levels: 1, name: 'Herb of Magic', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 2282, levels: 1, name: 'Herb of Atk. Spd.', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 2283, levels: 1, name: 'Herb of Casting Spd.', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 2284, levels: 1, name: 'Herb of Critical Attack', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 2285, levels: 1, name: 'Herb of Speed', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2286, levels: 6, name: 'Scroll: Recovery', target: 'SELF', operateType: 'A1', effectType: 'Recovery' },
	{ id: 2305, levels: 1, name: 'Primeval Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'potion_of_genesis', effects: [
		{ stat: 'stunVuln', val: 15, op: 'sub' } ]},
	{ id: 2310, levels: 1, name: 'Scroll of Guidance - Event Use', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 2311, levels: 1, name: 'Scroll of Death Whisper - Event Use', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 2312, levels: 1, name: 'Scroll of Focus - Event Use', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 2313, levels: 1, name: 'Scroll of Acumen - Event Use', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 2314, levels: 1, name: 'Scroll of Haste - Event Use', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 2315, levels: 1, name: 'Scroll of Agility - Event Use', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 2316, levels: 1, name: 'Scroll of Empower - Event Use', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 2317, levels: 1, name: 'Scroll of Might - Event Use', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 2318, levels: 1, name: 'Scroll of Wind Walk - Event Use', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2319, levels: 1, name: 'Scroll of Shield - Event Use', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 2335, levels: 1, name: 'Fire Resist Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attribute_potion', effects: [
		{ stat: 'fireRes', val: 30, op: 'add' } ]},
	{ id: 2336, levels: 1, name: 'Water Resist Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attribute_potion', effects: [
		{ stat: 'waterRes', val: 30, op: 'add' } ]},
	{ id: 2337, levels: 1, name: 'Wind Resist Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attribute_potion', effects: [
		{ stat: 'windRes', val: 30, op: 'add' } ]},
	{ id: 2338, levels: 1, name: 'Earth Resist Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attribute_potion', effects: [
		{ stat: 'earthRes', val: 30, op: 'add' } ]},
	{ id: 2339, levels: 1, name: 'Holy Resist Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attribute_potion', effects: [
		{ stat: 'holyRes', val: 30, op: 'add' } ]},
	{ id: 2340, levels: 1, name: 'Unholy Resist Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attribute_potion', effects: [
		{ stat: 'darkRes', val: 30, op: 'add' } ]},
	{ id: 2341, levels: 1, name: 'Caravan\'s Secret Medicine', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hot_ground' },
	{ id: 2357, levels: 1, name: 'Fiery Demon Blood', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'evil_blood' },
	{ id: 2370, levels: 1, name: 'Scroll of Transformation - Pig', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2371, levels: 1, name: 'Transform Sealbook - Onyx Beast', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2372, levels: 1, name: 'Transform Sealbook - Death Blader', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2373, levels: 1, name: 'Transform Sealbook - Grail Apostle', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2374, levels: 1, name: 'Transform Sealbook - Unicorn', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2375, levels: 1, name: 'Transform Sealbook - Lilim Knight', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2376, levels: 1, name: 'Transform Sealbook - Golem Guardian', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2377, levels: 1, name: 'Transform Sealbook - Inferno Drake', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2378, levels: 1, name: 'Transform Sealbook - Dragon Bomber', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2379, levels: 1, name: 'Wind', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2380, levels: 1, name: 'Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 2381, levels: 1, name: 'Magic Barrier', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: 1.23, op: 'mul' } ]},
	{ id: 2382, levels: 1, name: 'Bless Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'shield_prob_up', effects: [
		{ stat: 'rShld', val: 1.35, op: 'mul' } ]},
	{ id: 2383, levels: 1, name: 'Haste', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 2384, levels: 1, name: 'Acumen', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 2385, levels: 1, name: 'Empower', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.55, op: 'mul' } ]},
	{ id: 2386, levels: 1, name: 'Divine Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'heal_power_up', effects: [
		{ stat: 'healEffect', val: 100, op: 'add' } ]},
	{ id: 2387, levels: 1, name: 'Might', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 2388, levels: 1, name: 'Focus', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.15, op: 'basemul' } ]},
	{ id: 2389, levels: 1, name: 'Guidance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 2, op: 'add' } ]},
	{ id: 2390, levels: 1, name: 'Berserker Spirit', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'sub' } ]},
	{ id: 2391, levels: 1, name: 'Clarity', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'cheap_magic', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.96, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 2396, levels: 1, name: 'Mental Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'rootVuln', val: 20, op: 'sub' },
		{ stat: 'sleepVuln', val: 20, op: 'sub' },
		{ stat: 'derangementVuln', val: 20, op: 'sub' } ]},
	{ id: 2397, levels: 1, name: 'Medusa Potion', target: 'SELF', operateType: 'A2', effectType: 'Petrification', abnormalType: 'turn_stone' },
	{ id: 2398, levels: 1, name: 'Instant Haste Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up_special', effects: [
		{ stat: 'runSpd', val: 66, op: 'add' } ]},
	{ id: 2404, levels: 1, name: 'Might', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.12, op: 'mul' } ]},
	{ id: 2405, levels: 1, name: 'Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.12, op: 'mul' } ]},
	{ id: 2406, levels: 1, name: 'Wind Walk', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2407, levels: 1, name: 'Focus', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.25, op: 'basemul' } ]},
	{ id: 2408, levels: 1, name: 'Death Whisper', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.3, op: 'mul' } ]},
	{ id: 2409, levels: 1, name: 'Guidance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 3, op: 'add' } ]},
	{ id: 2410, levels: 1, name: 'Bless Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'shield_prob_up', effects: [
		{ stat: 'rShld', val: 1.1, op: 'mul' } ]},
	{ id: 2411, levels: 1, name: 'Blessed Body', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' } ]},
	{ id: 2412, levels: 1, name: 'Haste', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 2413, levels: 1, name: 'Vampiric Rage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 7, op: 'add' } ]},
	{ id: 2414, levels: 1, name: 'Berserker Spirit', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'pAtk', val: 1.05, op: 'mul' },
		{ stat: 'mDef', val: 0.9, op: 'mul' },
		{ stat: 'pDef', val: 0.95, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'runSpd', val: 5, op: 'add' },
		{ stat: 'rEvas', val: 2, op: 'sub' } ]},
	{ id: 2415, levels: 1, name: 'Magic Barrier', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: 1.23, op: 'mul' } ]},
	{ id: 2416, levels: 1, name: 'Blessed Soul', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.2, op: 'mul' } ]},
	{ id: 2417, levels: 1, name: 'Empower', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.65, op: 'mul' } ]},
	{ id: 2418, levels: 1, name: 'Acumen', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.23, op: 'mul' } ]},
	{ id: 2419, levels: 1, name: 'Clarity', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'cheap_magic', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.96, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 2428, levels: 1, name: 'Scroll of Transformation - Rabbit', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2429, levels: 1, name: 'Haste Juice', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 2430, levels: 1, name: 'Accuracy Juice', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 2431, levels: 1, name: 'Critical Power Juice', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 2432, levels: 1, name: 'Critical Attack Juice', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 2433, levels: 1, name: 'Casting Speed Juice', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 2434, levels: 1, name: 'Evasion Juice', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 2435, levels: 1, name: 'Magic Power Juice', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 2436, levels: 1, name: 'Power Juice', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 2437, levels: 1, name: 'Speed Juice', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2438, levels: 1, name: 'Defense Juice', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 2439, levels: 1, name: 'MP Consumption Juice', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'cheap_magic', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.96, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 2511, levels: 1, name: 'Scroll of Transformation - Gatekeeper', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2512, levels: 1, name: 'Herb of Vampiric Rage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 2513, levels: 1, name: 'Herb of Doubt', target: 'SELF', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head', effects: [
		{ stat: 'regHp', val: 2, op: 'mul' },
		{ stat: 'regMp', val: 2, op: 'mul' } ]},
	{ id: 2514, levels: 1, name: 'Herb of Critical Attack - Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 2577, levels: 1, name: 'Instant Defense', target: 'SELF', operateType: 'A2', effectType: 'Invincible', abnormalType: 'invincibility' },
	{ id: 2580, levels: 1, name: 'Vitality Replenishing Herb', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 2593, levels: 1, name: 'Bow/Crossbow Attack Resistance Potion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up_bow', effects: [
		{ stat: 'bowWpnVuln', val: 0.8, op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: 0.8, op: 'mul' } ]},
	{ id: 2631, levels: 1, name: 'Scroll of Transformation - Frog', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2632, levels: 1, name: 'Scroll of Transformation - Young Child', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2635, levels: 1, name: 'Blessing of Fire', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'firePower', val: 20, op: 'add' } ]},
	{ id: 2636, levels: 1, name: 'Blessing of Earth', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'holy_attack', effects: [
		{ stat: 'earthPower', val: 20, op: 'add' } ]},
	{ id: 2670, levels: 1, name: 'Scroll of Transformation - Red', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2671, levels: 1, name: 'Scroll of Transformation - Blue', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2672, levels: 1, name: 'Gludio Human Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2673, levels: 1, name: 'Gludio Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2674, levels: 1, name: 'Gludio Dark Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2675, levels: 1, name: 'Gludio Orc Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2676, levels: 1, name: 'Gludio Dwarf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2677, levels: 1, name: 'Gludio Kamael Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2678, levels: 1, name: 'Gludio Knight Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2679, levels: 1, name: 'Gludio Archer Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2680, levels: 1, name: 'Gludio Wizard Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2681, levels: 1, name: 'Gludio Kamael Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2682, levels: 1, name: 'Gludio Knight Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2683, levels: 1, name: 'Gludio Commander Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2684, levels: 1, name: 'Dion Human Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2685, levels: 1, name: 'Dion Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2686, levels: 1, name: 'Dion Dark Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2687, levels: 1, name: 'Dion Orc Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2688, levels: 1, name: 'Dion Dwarf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2689, levels: 1, name: 'Dion Kamael Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2690, levels: 1, name: 'Dion Knight Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2691, levels: 1, name: 'Dion Archer Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2692, levels: 1, name: 'Dion Wizard Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2693, levels: 1, name: 'Dion Kamael Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2694, levels: 1, name: 'Dion Knight Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2695, levels: 1, name: 'Dion Commander Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2696, levels: 1, name: 'Giran Human Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2697, levels: 1, name: 'Giran Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2698, levels: 1, name: 'Giran Dark Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2699, levels: 1, name: 'Giran Orc Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2700, levels: 1, name: 'Giran Dwarf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2701, levels: 1, name: 'Giran Kamael Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2702, levels: 1, name: 'Giran Knight Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2703, levels: 1, name: 'Giran Archer Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2704, levels: 1, name: 'Giran Wizard Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2705, levels: 1, name: 'Giran Kamael Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2706, levels: 1, name: 'Giran Knight Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2707, levels: 1, name: 'Giran Commander Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2708, levels: 1, name: 'Oren Human Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2709, levels: 1, name: 'Oren Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2710, levels: 1, name: 'Oren Dark Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2711, levels: 1, name: 'Oren Orc Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2712, levels: 1, name: 'Oren Dwarf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2713, levels: 1, name: 'Oren Kamael Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2714, levels: 1, name: 'Oren Knight Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2715, levels: 1, name: 'Oren Archer Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2716, levels: 1, name: 'Oren Wizard Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2717, levels: 1, name: 'Oren Kamael Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2718, levels: 1, name: 'Oren Knight Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2719, levels: 1, name: 'Oren Commander Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2720, levels: 1, name: 'Aden Human Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2721, levels: 1, name: 'Aden Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2722, levels: 1, name: 'Aden Dark Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2723, levels: 1, name: 'Aden Orc Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2724, levels: 1, name: 'Aden Dwarf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2725, levels: 1, name: 'Aden Kamael Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2726, levels: 1, name: 'Aden Knight Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2727, levels: 1, name: 'Aden Archer Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2728, levels: 1, name: 'Aden Wizard Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2729, levels: 1, name: 'Aden Kamael Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2730, levels: 1, name: 'Aden Knight Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2731, levels: 1, name: 'Aden Commander Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2732, levels: 1, name: 'Innadril Human Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2733, levels: 1, name: 'Innadril Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2734, levels: 1, name: 'Innadril Dark Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2735, levels: 1, name: 'Innadril Orc Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2736, levels: 1, name: 'Innadril Dwarf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2737, levels: 1, name: 'Innadril Kamael Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2738, levels: 1, name: 'Innadril Knight Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2739, levels: 1, name: 'Innadril Archer Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2740, levels: 1, name: 'Innadril Wizard Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2741, levels: 1, name: 'Innadril Kamael Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2742, levels: 1, name: 'Innadril Knight Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2743, levels: 1, name: 'Innadril Commander Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2744, levels: 1, name: 'Goddard Human Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2745, levels: 1, name: 'Goddard Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2746, levels: 1, name: 'Goddard Dark Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2747, levels: 1, name: 'Goddard Orc Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2748, levels: 1, name: 'Goddard Dwarf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2749, levels: 1, name: 'Goddard Kamael Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2750, levels: 1, name: 'Goddard Knight Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2751, levels: 1, name: 'Goddard Archer Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2752, levels: 1, name: 'Goddard Wizard Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2753, levels: 1, name: 'Goddard Kamael Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2754, levels: 1, name: 'Goddard Knight Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2755, levels: 1, name: 'Goddard Commander Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2756, levels: 1, name: 'Rune Human Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2757, levels: 1, name: 'Rune Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2758, levels: 1, name: 'Rune Dark Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2759, levels: 1, name: 'Rune Orc Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2760, levels: 1, name: 'Rune Dwarf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2761, levels: 1, name: 'Rune Kamael Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2762, levels: 1, name: 'Rune Knight Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2763, levels: 1, name: 'Rune Archer Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2764, levels: 1, name: 'Rune Wizard Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2765, levels: 1, name: 'Rune Kamael Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2766, levels: 1, name: 'Rune Knight Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2767, levels: 1, name: 'Rune Commander Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2768, levels: 1, name: 'Schuttgart Human Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2769, levels: 1, name: 'Schuttgart Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2770, levels: 1, name: 'Schuttgart Dark Elf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2771, levels: 1, name: 'Schuttgart Orc Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2772, levels: 1, name: 'Schuttgart Dwarf Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2773, levels: 1, name: 'Schuttgart Kamael Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2774, levels: 1, name: 'Schuttgart Knight Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2775, levels: 1, name: 'Schuttgart Archer Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2776, levels: 1, name: 'Schuttgart Wizard Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2777, levels: 1, name: 'Schuttgart Kamael Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2778, levels: 1, name: 'Schuttgart Knight Captain Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2779, levels: 1, name: 'Schuttgart Commander Mercenary', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 2795, levels: 1, name: 'Stone of Destruction', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.12, op: 'mul' } ]},
	{ id: 2796, levels: 1, name: 'Stone of Invincibility', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.12, op: 'mul' } ]},
	{ id: 2797, levels: 1, name: 'Stone of Great Speed', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 2798, levels: 1, name: 'Stone of Speed', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 2799, levels: 1, name: 'Stone of Concentration', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'cAtk', val: 1.3, op: 'mul' } ]},
	{ id: 2800, levels: 1, name: 'Stone of Ease', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' } ]},
	{ id: 2801, levels: 1, name: 'Stone of Abundance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.2, op: 'mul' } ]},
	{ id: 2856, levels: 1, name: 'Santa\'s Buff Gift Set', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'cAtk', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'regHp', val: 1.2, op: 'mul' },
		{ stat: 'regMp', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' } ]},
	{ id: 2857, levels: 1, name: 'Christmas Event - Magic Use Enhancement Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'debuffVuln', val: 10, op: 'sub' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'regMp', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 0.8, op: 'mul' } ]},
	{ id: 2897, levels: 1, name: 'Baguette\'s Herb', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'wp_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.1, op: 'mul' },
		{ stat: 'regHp', val: 1.2, op: 'mul' } ]},
	{ id: 2898, levels: 1, name: 'Fresh Cream Herb', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'wp_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.1, op: 'mul' },
		{ stat: 'maxMp', val: 1.1, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.1, op: 'mul' },
		{ stat: 'mDef', val: 1.1, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'runSpd', val: 10, op: 'add' } ]},
	{ id: 2899, levels: 1, name: 'Cheesecake Herb', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'wp_event_buf1', effects: [
		{ stat: 'maxMp', val: 1.1, op: 'mul' },
		{ stat: 'regMp', val: 1.2, op: 'mul' } ]},
	{ id: 2900, levels: 1, name: 'Ancient Herb - Slayer', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_c' },
	{ id: 2901, levels: 1, name: 'Ancient Herb - Immortal', target: 'SELF', operateType: 'A2', effectType: 'Invincible', abnormalType: 'pd_up_special' },
	{ id: 2902, levels: 1, name: 'Ancient Herb - Terminator', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.7, op: 'mul' } ]},
	{ id: 2903, levels: 1, name: 'Ancient Herb - Guide', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up_special', effects: [
		{ stat: 'runSpd', val: 250, op: 'add' } ]},
	{ id: 2994, levels: 1, name: 'Disguised Half - Aqua Elf', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 3007, levels: 6, name: 'Special Ability: Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: [6.88, 6.07, 5.72, 5.37, 5.02, 4.68], op: 'add' } ]},
	{ id: 3008, levels: 6, name: 'Special Ability: Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: [5.42, 5.12, 4.82, 4.53, 4.24, 3.95], op: 'add' } ]},
	{ id: 3009, levels: 8, name: 'Special Ability: Evasion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: [2.95, 2.82, 2.68, 2.55, 2.41, 2.28, 7.5, 5.31], op: 'add' } ]},
	{ id: 3010, levels: 6, name: 'Special Ability: Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: [86.7, 82.2, 77.8, 73.3, 68.9, 64.5], op: 'add' } ]},
	{ id: 3011, levels: 6, name: 'Special Ability: Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: [90.5, 85.9, 81.2, 76.6, 71.9, 67.3], op: 'add' } ]},
	{ id: 3012, levels: 6, name: 'Special Ability: Anger', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [20.44, 22.64, 24.77, 26.78, 28.59, 30.12], op: 'add' },
		{ stat: 'maxHp', val: 0.85, op: 'mul' } ]},
	{ id: 3013, levels: 5, name: 'Special Ability: Health', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'atkCountMax', val: [0, 4, 0, 4, 0], op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1.05, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3014, levels: 3, name: 'Special Ability: Mana Up', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3018, levels: 6, name: 'Special Ability: Back Blow', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: [0.71, 0.67, 0.63, 0.6, 0.56, 0.53], op: 'basemul', atkFrom: 'behind' } ]},
	{ id: 3019, levels: 6, name: 'Special Ability: Back Blow', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: [0.5, 0.47, 0.45, 0.42, 0.4, 0.37], op: 'basemul', atkFrom: 'behind' } ]},
	{ id: 3023, levels: 6, name: 'Special Ability: Critical Damage', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: [174.78, 194.1, 213.12, 231.29, 247.98, 262.57], op: 'add' } ]},
	{ id: 3026, levels: 6, name: 'Special Ability: Critical Anger', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: [248.56, 298.04, 352.73, 411.98, 474.82, 539.9], op: 'add' } ]},
	{ id: 3027, levels: 7, name: 'Special Ability: Rsk. Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: [138.7, 130.9, 123.1, 115.4, 107.7, 99.9, 164], op: 'add', hp: 60 },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1, 1, 1, 1, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1.05], op: 'mul' } ]},
	{ id: 3028, levels: 6, name: 'Special Ability: Rsk. Evasion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: [7.63, 7.29, 6.95, 6.6, 6.24, 5.87], op: 'add', hp: 60 } ]},
	{ id: 3029, levels: 6, name: 'Special Ability: Rsk. Evasion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: [4.44, 4.24, 4.04, 3.84, 3.63, 3.41], op: 'add', hp: 60 } ]},
	{ id: 3030, levels: 6, name: 'Special Ability: Rsk. Evasion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: [7.63, 7.29, 6.95, 6.6, 6.24, 5.87], op: 'add', hp: 60 } ]},
	{ id: 3031, levels: 6, name: 'Special Ability: Rsk. Evasion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: [7.63, 7.29, 6.95, 6.6, 6.24, 5.87], op: 'add', hp: 60 } ]},
	{ id: 3032, levels: 6, name: 'Special Ability: Rsk. Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: [1.13, 1.12, 1.12, 1.11, 1.1, 1.09], op: 'mul', hp: 60 } ]},
	{ id: 3033, levels: 6, name: 'Special Ability: Rsk. Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: [1.13, 1.12, 1.12, 1.11, 1.1, 1.09], op: 'mul', hp: 60 } ]},
	{ id: 3034, levels: 7, name: 'Special Ability: Rsk. Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: [1.13, 1.12, 1.12, 1.11, 1.1, 1.09, 1.09], op: 'mul', hp: 60 },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1, 1, 1, 1, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1.05], op: 'mul' } ]},
	{ id: 3035, levels: 6, name: 'Special Ability: Mighty Mortal', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'blowRate', val: [1.5, 1.48, 1.46, 1.44, 1.42, 1.4], op: 'mul' } ]},
	{ id: 3036, levels: 6, name: 'Special Ability: Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: [1.08, 1.07, 1.07, 1.07, 1.06, 1.06], op: 'mul' } ]},
	{ id: 3037, levels: 6, name: 'Special Ability: Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: [1.08, 1.07, 1.07, 1.07, 1.06, 1.06], op: 'mul' } ]},
	{ id: 3038, levels: 6, name: 'Special Ability: Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: [1.08, 1.07, 1.07, 1.07, 1.06, 1.06], op: 'mul' } ]},
	{ id: 3042, levels: 20, name: 'Special Ability: Critical Damage', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: [81.6, 61.4, 84.14, 75.49, 66.77, 58.01, 49.42, 84.11, 166.26, 146.88, 127, 107.01, 133.97, 124.79, 275.26, 267.13, 257.98, 297.21, 331.38, 361.06], op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3043, levels: 6, name: 'Special Ability: Critical Damage', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: [106.45, 118.22, 129.81, 140.87, 151.04, 159.93], op: 'add' } ]},
	{ id: 3044, levels: 20, name: 'Special Ability: Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: [53.6, 38.5, 50.4, 43.2, 36.5, 30.4, 24.8, 40.4, 76.6, 65, 54, 43.7, 52.6, 47.2, 98.7, 92.4, 86.2, 96, 103.5, 109.2], op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3045, levels: 20, name: 'Special Ability: Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: [1.05, 1.04, 1.05, 1.04, 1.03, 1.03, 1.02, 1.04, 1.07, 1.06, 1.05, 1.04, 1.05, 1.04, 1.09, 1.08, 1.08, 1.09, 1.09, 1.1], op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3046, levels: 20, name: 'Special Ability: Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: [3.9, 2.8, 3.7, 3.1, 2.6, 2.2, 1.8, 2.9, 5.7, 4.8, 3.9, 3.2, 3.8, 3.4, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5], op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3047, levels: 3, name: 'Special Ability: Acumen', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3048, levels: 3, name: 'Special Ability: Conversion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 1.6, op: 'mul' },
		{ stat: 'maxHp', val: 0.6, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3050, levels: 2, name: 'Special Ability: Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 61.6, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3051, levels: 2, name: 'Special Ability: Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 67.3, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3056, levels: 3, name: 'Special Ability: Rsk. Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.11, op: 'mul', hp: 60 },
		{ stat: 'pvpPhysDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3057, levels: 4, name: 'Special Ability: Anger', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [31.3, 32.05, 32.05, 78.33], op: 'add' },
		{ stat: 'maxHp', val: 0.85, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3058, levels: 2, name: 'Special Ability: Anger', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [38.09, 39], op: 'add' },
		{ stat: 'maxHp', val: 0.85, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3063, levels: 2, name: 'Special Ability: Back Blow', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 0.37, op: 'basemul', atkFrom: 'behind' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3064, levels: 1, name: 'Special Ability: Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 3.95, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3065, levels: 1, name: 'Special Ability: Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 5.41, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3066, levels: 4, name: 'Special Ability: Critical Damage', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: [180.94, 200.79, 200.79, 559], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3067, levels: 2, name: 'Special Ability: Critical Damage', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: [297.68, 326.28], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3068, levels: 3, name: 'Special Ability: Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: [1.06, 1.06, 1.06], op: 'mul' },
		{ stat: 'pvpPhysDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3069, levels: 1, name: 'Special Ability: Rsk. Evasion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 6.8, op: 'add', hp: 60 } ]},
	{ id: 3071, levels: 2, name: 'Special Ability: Rsk. Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 130, op: 'add', hp: 60 },
		{ stat: 'pvpPhysDmg', val: [1, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1.05], op: 'mul' } ]},
	{ id: 3072, levels: 2, name: 'Special Ability: Empower', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: [30.76, 31.38], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3073, levels: 2, name: 'Special Ability: Magic Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: [153.28, 167.02], op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 1.15, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3076, levels: 6, name: 'Special Ability: Empower', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: [20.36, 22.51, 24.59, 26.53, 28.27, 29.7], op: 'add' } ]},
	{ id: 3077, levels: 6, name: 'Special Ability: Magic Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: [75.86, 87.22, 99.39, 112.26, 125.66, 139.41], op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 1.15, op: 'mul' } ]},
	{ id: 3124, levels: 10, name: 'Item Skill: Blessed Body', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'maxHp', val: [30, 60, 90, 120, 150, 180, 210, 240, 270, 300], op: 'add' } ]},
	{ id: 3125, levels: 10, name: 'Item Skill: Battle Roar', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'maxHp', val: 1.03, op: 'mul' } ]},
	{ id: 3126, levels: 10, name: 'Item Skill: Prayer', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'healEffect', val: [1.04, 1.04, 1.04, 1.05, 1.05, 1.05, 1.06, 1.06, 1.06, 1.07], op: 'mul' } ]},
	{ id: 3128, levels: 10, name: 'Item Skill: Blessed Soul', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'maxMp', val: [20, 40, 60, 80, 100, 120, 140, 160, 180, 200], op: 'add' } ]},
	{ id: 3129, levels: 10, name: 'Item Skill: Mana Gain', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'manaCharge', val: [25, 27, 30, 31, 32, 36, 37, 38, 39, 41], op: 'add' } ]},
	{ id: 3131, levels: 10, name: 'Item Skill: Cheer', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'maxCp', val: [30, 60, 90, 120, 150, 180, 210, 240, 270, 300], op: 'add' } ]},
	{ id: 3132, levels: 10, name: 'Item Skill: Might', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'pAtk', val: [23.64, 27.96, 32.76, 37.98, 43.62, 49.62, 55.86, 62.28, 68.88, 79.74], op: 'add' } ]},
	{ id: 3133, levels: 10, name: 'Item Skill: Empower', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'mAtk', val: [15.9, 18.65, 21.6, 24.9, 28.4, 32.15, 36.05, 40.1, 44.2, 50.95], op: 'add' } ]},
	{ id: 3134, levels: 10, name: 'Item Skill: Duel Might', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3135, levels: 10, name: 'Item Skill: Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'pDef', val: [30.2, 33.72, 37.4, 41.28, 45.32, 49.52, 53.88, 58.32, 62.88, 70.6], op: 'add' } ]},
	{ id: 3136, levels: 10, name: 'Item Skill: Magic Barrier', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'mDef', val: [37, 40, 44, 48, 52, 56, 61, 65, 70, 77], op: 'add' } ]},
	{ id: 3138, levels: 10, name: 'Item Skill: Heal Empower', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'healEffect', val: [44, 49, 53, 57, 61, 64, 68, 72, 75, 79], op: 'add' } ]},
	{ id: 3139, levels: 10, name: 'Item Skill: Agility', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'rEvas', val: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4], op: 'add' } ]},
	{ id: 3140, levels: 10, name: 'Item Skill: Guidance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'accCombat', val: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4], op: 'add' } ]},
	{ id: 3141, levels: 10, name: 'Item Skill: Focus', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'rCrit', val: [0.05, 0.05, 0.05, 0.1, 0.1, 0.1, 0.15, 0.15, 0.15, 0.2], op: 'basemul' } ]},
	{ id: 3142, levels: 10, name: 'Item Skill: Wild Magic', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'mCritRate', val: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4], op: 'add' } ]},
	{ id: 3143, levels: 10, name: 'Item Skill: Kiss of Eva', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'breath', val: 6, op: 'mul' } ]},
	{ id: 3144, levels: 10, name: 'Item Skill: Acrobatics', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'fall', val: 100, op: 'sub' } ]},
	{ id: 3145, levels: 10, name: 'Item Skill: Iron Body', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'damageZoneVuln', val: [10, 10, 10, 20, 20, 20, 30, 30, 30, 40], op: 'sub' } ]},
	{ id: 3148, levels: 10, name: 'Item Skill: Vampiric Rage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'absorbDam', val: [3, 3, 3, 4, 4, 4, 5, 5, 5, 6], op: 'add' } ]},
	{ id: 3158, levels: 1, name: 'Item Skill: Lesser Celestial Shield', target: 'SELF', operateType: 'A2', effectType: 'Invincible', abnormalType: 'invincibility' },
	{ id: 3159, levels: 3, name: 'Item Skill: Stealth', target: 'SELF', operateType: 'A2', effectType: 'SilentMove', abnormalType: 'abnormal_item', effects: [
		{ stat: 'rEvas', val: [12, 8, 4], op: 'sub' },
		{ stat: 'pDef', val: [0.55, 0.7, 0.85], op: 'mul' },
		{ stat: 'mDef', val: [0.55, 0.7, 0.85], op: 'mul' },
		{ stat: 'accCombat', val: 12, op: 'sub' },
		{ stat: 'pAtk', val: 0.55, op: 'mul' } ]},
	{ id: 3161, levels: 3, name: 'Item Skill: Skill Clarity', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: [0.96, 0.93, 0.9], op: 'mul' } ]},
	{ id: 3162, levels: 3, name: 'Item Skill: Spell Clarity', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'MagicalMpConsumeRate', val: [0.9, 0.85, 0.8], op: 'mul' } ]},
	{ id: 3163, levels: 3, name: 'Item Skill: Music Clarity', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'DanceMpConsumeRate', val: [0.96, 0.93, 0.9], op: 'mul' } ]},
	{ id: 3164, levels: 3, name: 'Item Skill: Clarity', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: [0.9, 0.85, 0.8], op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: [0.96, 0.93, 0.9], op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 3199, levels: 3, name: 'Item Skill: Skill Refresh', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'pReuse', val: 0.85, op: 'mul' } ]},
	{ id: 3200, levels: 3, name: 'Item Skill: Spell Refresh', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'mReuse', val: 0.85, op: 'mul' } ]},
	{ id: 3201, levels: 3, name: 'Item Skill: Music Refresh', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'pReuse', val: 0.85, op: 'mul' } ]},
	{ id: 3202, levels: 3, name: 'Item Skill: Refresh', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'mReuse', val: 0.85, op: 'mul' },
		{ stat: 'pReuse', val: 0.85, op: 'mul' } ]},
	{ id: 3203, levels: 1, name: 'Item Skill: Mystery Skill', target: 'SELF', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head' },
	{ id: 3204, levels: 3, name: 'Item Skill: Reflect Damage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'reflectDam', val: [10, 15, 20], op: 'add' } ]},
	{ id: 3238, levels: 10, name: 'Item Skill: Prayer', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 1.01, op: 'mul' } ]},
	{ id: 3239, levels: 10, name: 'Item Skill: Mana Gain', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'manaCharge', val: 1, op: 'add' } ]},
	{ id: 3240, levels: 10, name: 'Item Skill: Might', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [10.26, 11.22, 11.94, 12.94, 13.55, 14.44, 14.85, 15.92, 16.68, 17.84], op: 'add' } ]},
	{ id: 3241, levels: 10, name: 'Item Skill: Empower', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 55, op: 'add' } ]},
	{ id: 3243, levels: 10, name: 'Item Skill: Duel Might', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3244, levels: 10, name: 'Item Skill: Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [12.78, 13.73, 14.14, 15.13, 16.46, 17.43, 17.69, 18.63, 19.77, 20.3], op: 'add' } ]},
	{ id: 3245, levels: 10, name: 'Item Skill: Magic Barrier', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: [10.8, 11.62, 11.96, 12.66, 13.01, 13.08, 14, 14.99, 15.88, 16.32], op: 'add' } ]},
	{ id: 3246, levels: 10, name: 'Item Skill: Heal Empower', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: [10, 11, 12, 13, 14, 16, 17, 18, 19, 20], op: 'add' } ]},
	{ id: 3247, levels: 10, name: 'Item Skill: Agility', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 2, op: 'add' } ]},
	{ id: 3248, levels: 10, name: 'Item Skill: Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 2, op: 'add' } ]},
	{ id: 3249, levels: 10, name: 'Item Skill: Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 0.2, op: 'basemul' } ]},
	{ id: 3250, levels: 10, name: 'Item Skill: Wild Magic', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mCritRate', val: 4, op: 'add' } ]},
	{ id: 3251, levels: 10, name: 'Item Skill: Weight Limit', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'weightLimit', val: 2, op: 'mul' } ]},
	{ id: 3252, levels: 10, name: 'Item Skill: Kiss of Eva', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'breath', val: 6, op: 'mul' } ]},
	{ id: 3253, levels: 10, name: 'Item Skill: Acrobatics', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fall', val: 100, op: 'sub' } ]},
	{ id: 3254, levels: 10, name: 'Item Skill: Iron Body', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'damageZoneVuln', val: 40, op: 'sub' } ]},
	{ id: 3255, levels: 3, name: 'Item Skill: Skill Clarity', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: [0.96, 0.93, 0.9], op: 'mul' } ]},
	{ id: 3256, levels: 3, name: 'Item Skill: Spell Clarity', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'MagicalMpConsumeRate', val: [0.9, 0.85, 0.8], op: 'mul' } ]},
	{ id: 3257, levels: 3, name: 'Item Skill: Music Clarity', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'DanceMpConsumeRate', val: [0.96, 0.93, 0.9], op: 'mul' } ]},
	{ id: 3258, levels: 3, name: 'Item Skill: Clarity', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'MagicalMpConsumeRate', val: [0.96, 0.93, 0.9], op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: [0.9, 0.85, 0.8], op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 3259, levels: 3, name: 'Item Skill: Reflect Damage', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'reflectDam', val: [10, 15, 20], op: 'add' } ]},
	{ id: 3265, levels: 1, name: 'Mysterious Ability', target: 'SELF', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head' },
	{ id: 3271, levels: 1, name: 'Blue Talisman of Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'pAtk', val: 63, op: 'add' } ]},
	{ id: 3272, levels: 1, name: 'Blue Talisman of Defense', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'pDef', val: 72, op: 'add' } ]},
	{ id: 3274, levels: 1, name: 'Blue Talisman of Protection', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'sDef', val: 220, op: 'add' } ]},
	{ id: 3275, levels: 1, name: 'Blue Talisman of Protection', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'rShld', val: 1.3, op: 'mul' } ]},
	{ id: 3276, levels: 1, name: 'Blue Talisman - Magic Resistance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'mDef', val: 100, op: 'add' } ]},
	{ id: 3277, levels: 1, name: 'Blue Talisman of Wild Magic', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'mCritRate', val: 2, op: 'add' } ]},
	{ id: 3278, levels: 1, name: 'Red Talisman of Mental Regeneration', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'regMp', val: 1.1, op: 'mul' } ]},
	{ id: 3279, levels: 1, name: 'Red Talisman of Meditation', target: 'SELF', operateType: 'A2', effectType: 'Paralyze', abnormalType: 'talisman', effects: [
		{ stat: 'pDef', val: 0.1, op: 'mul' } ]},
	{ id: 3280, levels: 1, name: 'Blue Talisman of Invisibility', target: 'SELF', operateType: 'A2', effectType: 'SilentMove', abnormalType: 'talisman', effects: [
		{ stat: 'runSpd', val: 0.6, op: 'mul' } ]},
	{ id: 3281, levels: 1, name: 'Red Talisman of Minimum Clarity', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.96, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 3282, levels: 1, name: 'Red Talisman of Maximum Clarity', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0, op: 'mul' } ]},
	{ id: 3283, levels: 1, name: 'Blue Talisman of Healing', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'healEffect', val: 100, op: 'add' } ]},
	{ id: 3284, levels: 1, name: 'Blue Talisman - Divine Protection', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'pDef', val: 3600, op: 'add' },
		{ stat: 'mDef', val: 2700, op: 'add' } ]},
	{ id: 3285, levels: 1, name: 'Blue Talisman of Defense', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'pAtk', val: 8.7, op: 'add' },
		{ stat: 'pAtkSpd', val: 4, op: 'add' },
		{ stat: 'mAtk', val: 10.1, op: 'add' },
		{ stat: 'mAtkSpd', val: 3, op: 'add' },
		{ stat: 'runSpd', val: 3, op: 'add' },
		{ stat: 'pDef', val: 13.6, op: 'sub' },
		{ stat: 'mDef', val: 11, op: 'sub' },
		{ stat: 'rEvas', val: 1, op: 'sub' } ]},
	{ id: 3293, levels: 1, name: 'Yellow Talisman of Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 20.8, op: 'add' } ]},
	{ id: 3294, levels: 1, name: 'Yellow Talisman of Arcane Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 24.3, op: 'add' } ]},
	{ id: 3295, levels: 1, name: 'Yellow Talisman of Defense', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 32.8, op: 'add' } ]},
	{ id: 3296, levels: 1, name: 'Yellow Talisman - Magic Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 26.4, op: 'add' } ]},
	{ id: 3297, levels: 1, name: 'Yellow Talisman of Accuracy', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 2, op: 'add' } ]},
	{ id: 3298, levels: 1, name: 'Yellow Talisman of Evasion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 2, op: 'add' } ]},
	{ id: 3299, levels: 1, name: 'Yellow Talisman of Critical Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: 30, op: 'add' } ]},
	{ id: 3300, levels: 1, name: 'Yellow Talisman of Speed', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 5, op: 'add' } ]},
	{ id: 3301, levels: 1, name: 'Yellow Talisman of Violent Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 10, op: 'add' } ]},
	{ id: 3302, levels: 1, name: 'Yellow Talisman of Arcane Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 8, op: 'add' } ]},
	{ id: 3303, levels: 1, name: 'White Talisman of Bandages', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 10, op: 'sub' } ]},
	{ id: 3304, levels: 1, name: 'White Talisman of Attention', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 10, op: 'sub' } ]},
	{ id: 3305, levels: 1, name: 'White Talisman of Grounding', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 10, op: 'sub' } ]},
	{ id: 3306, levels: 1, name: 'White Talisman of Bravery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 10, op: 'sub' } ]},
	{ id: 3307, levels: 1, name: 'White Talisman of Motion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 10, op: 'sub' } ]},
	{ id: 3308, levels: 1, name: 'White Talisman of Freedom', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: 10, op: 'sub' } ]},
	{ id: 3309, levels: 1, name: 'White Talisman of Protection', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cancelVuln', val: 100, op: 'sub' } ]},
	{ id: 3310, levels: 1, name: 'Yellow Talisman of Physical Regeneration', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: 1.03, op: 'mul' } ]},
	{ id: 3311, levels: 1, name: 'Yellow Talisman of CP Regeneration', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regCp', val: 1.03, op: 'mul' } ]},
	{ id: 3312, levels: 1, name: 'Yellow Talisman of Healing', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 40, op: 'add' } ]},
	{ id: 3313, levels: 1, name: 'Yellow Talisman of Alacrity', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 5, op: 'add' },
		{ stat: 'mAtkSpd', val: 4, op: 'add' },
		{ stat: 'runSpd', val: 3, op: 'add' } ]},
	{ id: 3314, levels: 1, name: 'Grey Talisman of Weight Training', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'weightLimit', val: 1.1, op: 'mul' } ]},
	{ id: 3316, levels: 1, name: 'Yellow Talisman of Critical Dodging', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'critDamEvas', val: 1.03, op: 'mul' } ]},
	{ id: 3317, levels: 1, name: 'Yellow Talisman of Critical Reduction', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'critAddVuln', val: 100, op: 'sub' } ]},
	{ id: 3319, levels: 1, name: 'Divine Protection of Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'gustVuln', val: 100, op: 'sub' } ]},
	{ id: 3320, levels: 1, name: 'Yellow Talisman of Mental Regeneration', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.03, op: 'mul' } ]},
	{ id: 3321, levels: 1, name: 'Blue Talisman of Evasion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'rEvas', val: 2, op: 'add' },
		{ stat: 'critDamEvas', val: 1.05, op: 'mul' } ]},
	{ id: 3322, levels: 1, name: 'Brass Bracelet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'talisman', val: 1, op: 'set' } ]},
	{ id: 3323, levels: 1, name: 'Bronze Bracelet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'talisman', val: 2, op: 'set' } ]},
	{ id: 3324, levels: 1, name: 'Steel Bracelet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'talisman', val: 3, op: 'set' } ]},
	{ id: 3325, levels: 1, name: 'Mithril Bracelet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'talisman', val: 4, op: 'set' } ]},
	{ id: 3326, levels: 1, name: 'Jewelry Bracelet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'talisman', val: 5, op: 'set' } ]},
	{ id: 3327, levels: 1, name: 'Oriharukon Bracelet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'talisman', val: 6, op: 'set' } ]},
	{ id: 3335, levels: 1, name: 'Transform Yeti', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 3336, levels: 1, name: 'Transform Buffalo', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 3337, levels: 1, name: 'Transform Cutie Pig', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 3348, levels: 1, name: 'Dynasty Breast Plate - Shield Master', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'healEffect', val: 1.03, op: 'mul' },
		{ stat: 'stunVuln', val: 13, op: 'sub' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3349, levels: 1, name: 'Dynasty Breast Plate - Weapon Master', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'rCrit', val: 24.6, op: 'add' },
		{ stat: 'cAtkAdd', val: 234, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3350, levels: 1, name: 'Dynasty Breast Plate - Force Master', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3351, levels: 1, name: 'Dynasty Breast Plate - Bard', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3352, levels: 1, name: 'Dynasty Leather Armor - Dagger Master', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 4.3, op: 'add' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0266, op: 'mul' },
		{ stat: 'rootVuln', val: 13, op: 'sub' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3353, levels: 1, name: 'Dynasty Leather Armor - Bow Master', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 4.3, op: 'add' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0266, op: 'mul' },
		{ stat: 'regMp', val: 1.72, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3354, levels: 1, name: 'Dynasty Tunic - Healer', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'healEffect', val: 20, op: 'add' },
		{ stat: 'cancel', val: 15, op: 'sub' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3355, levels: 1, name: 'Dynasty Tunic - Enchanter', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'cancel', val: 15, op: 'sub' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3356, levels: 1, name: 'Dynasty Tunic - Summoner', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'pDef', val: 1.026, op: 'mul' },
		{ stat: 'pAtk', val: 1.026, op: 'mul' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3357, levels: 1, name: 'Dynasty Tunic - Wizard', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'mAtk', val: 1.054, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3358, levels: 1, name: 'Flag Equip', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 0.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.2, op: 'mul' },
		{ stat: 'pAtk', val: 0.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.2, op: 'mul' },
		{ stat: 'mAtk', val: 0.2, op: 'mul' } ]},
	{ id: 3359, levels: 1, name: 'Transform Native', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 3360, levels: 1, name: 'Cheap Shot', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: 0.88, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.88, op: 'mul' } ]},
	{ id: 3365, levels: 1, name: 'Dynasty Resistance Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 18, op: 'sub' } ]},
	{ id: 3366, levels: 1, name: 'Dynasty Resistance Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 8, op: 'sub' } ]},
	{ id: 3367, levels: 1, name: 'Dynasty Resistance Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 12, op: 'sub' } ]},
	{ id: 3371, levels: 1, name: 'Dynasty Resistance Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 11, op: 'sub' } ]},
	{ id: 3372, levels: 1, name: 'Dynasty Resistance Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 5, op: 'sub' } ]},
	{ id: 3373, levels: 1, name: 'Dynasty Resistance Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 8, op: 'sub' } ]},
	{ id: 3377, levels: 1, name: 'Dynasty Resistance Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 16, op: 'sub' } ]},
	{ id: 3378, levels: 1, name: 'Dynasty Resistance Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 7, op: 'sub' } ]},
	{ id: 3379, levels: 1, name: 'Dynasty Resistance Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 11, op: 'sub' } ]},
	{ id: 3383, levels: 1, name: 'Dynasty Resistance Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 9, op: 'sub' } ]},
	{ id: 3384, levels: 1, name: 'Dynasty Resistance Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 4, op: 'sub' } ]},
	{ id: 3385, levels: 1, name: 'Dynasty Resistance Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 6, op: 'sub' } ]},
	{ id: 3389, levels: 1, name: 'Dynasty Resistance Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: 18, op: 'sub' } ]},
	{ id: 3390, levels: 1, name: 'Dynasty Resistance Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: 8, op: 'sub' } ]},
	{ id: 3391, levels: 1, name: 'Dynasty Resistance Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: 12, op: 'sub' } ]},
	{ id: 3395, levels: 1, name: 'Dynasty Resistance Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 18, op: 'sub' } ]},
	{ id: 3396, levels: 1, name: 'Dynasty Resistance Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 8, op: 'sub' } ]},
	{ id: 3397, levels: 1, name: 'Dynasty Resistance Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 12, op: 'sub' } ]},
	{ id: 3400, levels: 1, name: 'Traits Strengthen Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementProf', val: 6, op: 'add' } ]},
	{ id: 3401, levels: 1, name: 'Dynasty Resistance Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 9, op: 'sub' } ]},
	{ id: 3402, levels: 1, name: 'Dynasty Resistance Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 4, op: 'sub' } ]},
	{ id: 3403, levels: 1, name: 'Dynasty Resistance Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 6, op: 'sub' } ]},
	{ id: 3404, levels: 1, name: 'Mystery Effect', target: 'SELF', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head' },
	{ id: 3406, levels: 1, name: 'Weight Decrease Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'weightPenalty', val: 9000, op: 'add' } ]},
	{ id: 3407, levels: 1, name: 'Stealth Ring', target: 'SELF', operateType: 'A2', effectType: 'SilentMove', abnormalType: 'stealth', effects: [
		{ stat: 'runSpd', val: 0.6, op: 'mul' } ]},
	{ id: 3410, levels: 1, name: 'Blue Talisman of Reflection', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'reflectDam', val: 10, op: 'add' } ]},
	{ id: 3411, levels: 1, name: 'Special Ability: Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 109.2, op: 'add' },
		{ stat: 'maxHp', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3412, levels: 1, name: 'Dynasty Breast Plate', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.046, op: 'mul' },
		{ stat: 'maxHp', val: 418, op: 'add' },
		{ stat: 'darkRes', val: 6, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3413, levels: 1, name: 'Dynasty Leather Armor', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 1.72, op: 'add' },
		{ stat: 'accCombat', val: 1.72, op: 'add' },
		{ stat: 'maxHp', val: 418, op: 'add' },
		{ stat: 'darkRes', val: 6, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3414, levels: 1, name: 'Dynasty Leather Armor - Force Master', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3415, levels: 1, name: 'Dynasty Leather Armor - Weapon Master', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.054, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'rCrit', val: 24.6, op: 'add' },
		{ stat: 'cAtkAdd', val: 234, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3416, levels: 1, name: 'Dynasty Tunic', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.12, op: 'mul' },
		{ stat: 'maxMp', val: 257, op: 'add' },
		{ stat: 'darkRes', val: 6, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3417, levels: 1, name: 'Equipped with Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rShld', val: 1.05, op: 'mul' } ]},
	{ id: 3418, levels: 1, name: 'Active Skill: Transform Pig', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 3420, levels: 1, name: 'Dynasty Leather Armor - Summoner', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.054, op: 'mul' },
		{ stat: 'pAtk', val: 1.0266, op: 'mul' },
		{ stat: 'pDef', val: 1.0266, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3426, levels: 1, name: 'Maximum Ability', target: 'SELF', operateType: 'P', trigger: 5547, effectType: 'ChanceSkillTrigger' },
	{ id: 3427, levels: 1, name: 'Special Ability: Infinity Rapier', target: 'SELF', operateType: 'P', trigger: 5547, effectType: 'ChanceSkillTrigger' },
	{ id: 3428, levels: 1, name: 'Blue Talisman - Explosion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'pAtk', val: 1.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.1, op: 'mul' } ]},
	{ id: 3430, levels: 1, name: 'White Talisman - Darkness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'darkRes', val: 50, op: 'add' } ]},
	{ id: 3431, levels: 1, name: 'White Talisman - Storm', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'windRes', val: 50, op: 'add' } ]},
	{ id: 3432, levels: 1, name: 'White Talisman - Water', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'waterRes', val: 50, op: 'add' } ]},
	{ id: 3433, levels: 1, name: 'White Talisman - Fire', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'fireRes', val: 50, op: 'add' } ]},
	{ id: 3434, levels: 1, name: 'White Talisman - Earth', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'earthRes', val: 50, op: 'add' } ]},
	{ id: 3435, levels: 1, name: 'White Talisman - Light', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'holyRes', val: 50, op: 'add' } ]},
	{ id: 3437, levels: 1, name: 'Blue Talisman - Magic Explosive Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'mCritRate', val: 4, op: 'add' },
		{ stat: 'mAtk', val: 1.55, op: 'mul' } ]},
	{ id: 3438, levels: 1, name: 'Blue Talisman - Great Healing', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'healEffect', val: 1000, op: 'add' } ]},
	{ id: 3439, levels: 1, name: 'Silk Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 118, op: 'add' } ]},
	{ id: 3440, levels: 1, name: 'Silk Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 51, op: 'add' } ]},
	{ id: 3441, levels: 1, name: 'Silk Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 354, op: 'add' } ]},
	{ id: 3442, levels: 1, name: 'Silk Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 59, op: 'add' },
		{ stat: 'maxMp', val: 26, op: 'add' } ]},
	{ id: 3443, levels: 1, name: 'Silk Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 59, op: 'add' },
		{ stat: 'maxCp', val: 117, op: 'add' } ]},
	{ id: 3444, levels: 1, name: 'Silk Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 26, op: 'add' },
		{ stat: 'maxCp', val: 117, op: 'add' } ]},
	{ id: 3445, levels: 1, name: 'Thin Leather Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 147, op: 'add' } ]},
	{ id: 3446, levels: 1, name: 'Thin Leather Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 72, op: 'add' } ]},
	{ id: 3447, levels: 1, name: 'Thin Leather Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 441, op: 'add' } ]},
	{ id: 3448, levels: 1, name: 'Thin Leather Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 74, op: 'add' },
		{ stat: 'maxMp', val: 36, op: 'add' } ]},
	{ id: 3449, levels: 1, name: 'Thin Leather Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 74, op: 'add' },
		{ stat: 'maxCp', val: 222, op: 'add' } ]},
	{ id: 3450, levels: 1, name: 'Thin Leather Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 36, op: 'add' },
		{ stat: 'maxCp', val: 222, op: 'add' } ]},
	{ id: 3451, levels: 1, name: 'Scale Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 172, op: 'add' } ]},
	{ id: 3452, levels: 1, name: 'Scale Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 85, op: 'add' } ]},
	{ id: 3453, levels: 1, name: 'Scale Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 516, op: 'add' } ]},
	{ id: 3454, levels: 1, name: 'Scale Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 86, op: 'add' },
		{ stat: 'maxMp', val: 43, op: 'add' } ]},
	{ id: 3455, levels: 1, name: 'Scale Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 86, op: 'add' },
		{ stat: 'maxCp', val: 258, op: 'add' } ]},
	{ id: 3456, levels: 1, name: 'Scale Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 43, op: 'add' },
		{ stat: 'maxCp', val: 258, op: 'add' } ]},
	{ id: 3457, levels: 1, name: 'Mithril Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 224, op: 'add' } ]},
	{ id: 3458, levels: 1, name: 'Mithril Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 111, op: 'add' } ]},
	{ id: 3459, levels: 1, name: 'Mithril Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 672, op: 'add' } ]},
	{ id: 3460, levels: 1, name: 'Mithril Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 112, op: 'add' },
		{ stat: 'maxMp', val: 56, op: 'add' } ]},
	{ id: 3461, levels: 1, name: 'Mithril Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 112, op: 'add' },
		{ stat: 'maxCp', val: 336, op: 'add' } ]},
	{ id: 3462, levels: 1, name: 'Mithril Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 56, op: 'add' },
		{ stat: 'maxCp', val: 336, op: 'add' } ]},
	{ id: 3463, levels: 1, name: 'Striped Silk Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 135, op: 'add' } ]},
	{ id: 3464, levels: 1, name: 'Striped Silk Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 66, op: 'add' } ]},
	{ id: 3465, levels: 1, name: 'Striped Silk Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 405, op: 'add' } ]},
	{ id: 3466, levels: 1, name: 'Striped Silk Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 68, op: 'add' },
		{ stat: 'maxMp', val: 33, op: 'add' } ]},
	{ id: 3467, levels: 1, name: 'Striped Silk Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 68, op: 'add' },
		{ stat: 'maxCp', val: 203, op: 'add' } ]},
	{ id: 3468, levels: 1, name: 'Striped Silk Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 33, op: 'add' },
		{ stat: 'maxCp', val: 203, op: 'add' } ]},
	{ id: 3469, levels: 1, name: 'Thin Stripe Leather Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 160, op: 'add' } ]},
	{ id: 3470, levels: 1, name: 'Thin Stripe Leather Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 78, op: 'add' } ]},
	{ id: 3471, levels: 1, name: 'Thin Stripe Leather Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 480, op: 'add' } ]},
	{ id: 3472, levels: 1, name: 'Thin Stripe Leather Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 80, op: 'add' },
		{ stat: 'maxMp', val: 39, op: 'add' } ]},
	{ id: 3473, levels: 1, name: 'Thin Stripe Leather Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 80, op: 'add' },
		{ stat: 'maxCp', val: 240, op: 'add' } ]},
	{ id: 3474, levels: 1, name: 'Thin Stripe Leather Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 39, op: 'add' },
		{ stat: 'maxCp', val: 240, op: 'add' } ]},
	{ id: 3475, levels: 1, name: 'Striped Scale Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 186, op: 'add' } ]},
	{ id: 3476, levels: 1, name: 'Striped Scale Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 92, op: 'add' } ]},
	{ id: 3477, levels: 1, name: 'Striped Scale Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 564, op: 'add' } ]},
	{ id: 3478, levels: 1, name: 'Striped Scale Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 93, op: 'add' },
		{ stat: 'maxMp', val: 46, op: 'add' } ]},
	{ id: 3479, levels: 1, name: 'Striped Scale Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 93, op: 'add' },
		{ stat: 'maxCp', val: 282, op: 'add' } ]},
	{ id: 3480, levels: 1, name: 'Striped Scale Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 46, op: 'add' },
		{ stat: 'maxCp', val: 282, op: 'add' } ]},
	{ id: 3481, levels: 1, name: 'Striped Mithril Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 246, op: 'add' } ]},
	{ id: 3482, levels: 1, name: 'Striped Mithril Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 122, op: 'add' } ]},
	{ id: 3483, levels: 1, name: 'Striped Mithril Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 744, op: 'add' } ]},
	{ id: 3484, levels: 1, name: 'Striped Mithril Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 123, op: 'add' },
		{ stat: 'maxMp', val: 61, op: 'add' } ]},
	{ id: 3485, levels: 1, name: 'Striped Mithril Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 123, op: 'add' },
		{ stat: 'maxCp', val: 372, op: 'add' } ]},
	{ id: 3486, levels: 1, name: 'Striped Mithril Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 61, op: 'add' },
		{ stat: 'maxCp', val: 372, op: 'add' } ]},
	{ id: 3487, levels: 1, name: 'Blue Talisman of Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'pAtk', val: 9.4, op: 'add' } ]},
	{ id: 3488, levels: 1, name: 'Blue Talisman of Protection', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'sDef', val: 63, op: 'add' } ]},
	{ id: 3489, levels: 1, name: 'Yellow Talisman of Arcane Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 11.7, op: 'add' } ]},
	{ id: 3490, levels: 1, name: 'Yellow Talisman of Defense', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 18.3, op: 'add' } ]},
	{ id: 3491, levels: 1, name: 'Yellow Talisman of Evasion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 1.1, op: 'add' } ]},
	{ id: 3492, levels: 1, name: 'Yellow Talisman of Speed', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 3, op: 'add' } ]},
	{ id: 3493, levels: 1, name: 'Yellow Talisman of Regeneration', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: 1.01, op: 'mul' } ]},
	{ id: 3494, levels: 1, name: 'Yellow Talisman of CP Regeneration', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regCp', val: 1.01, op: 'mul' } ]},
	{ id: 3495, levels: 1, name: 'Yellow Talisman of Healing', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 8, op: 'add' } ]},
	{ id: 3497, levels: 1, name: 'Yellow Talisman of MP Regeneration', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.01, op: 'mul' } ]},
	{ id: 3498, levels: 1, name: 'Special Ability: Light', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'weightLimit', val: 1.2, op: 'mul' } ]},
	{ id: 3500, levels: 1, name: 'Wooden Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.022, op: 'mul' },
		{ stat: 'maxHp', val: 41, op: 'add' } ]},
	{ id: 3501, levels: 1, name: 'Devotion Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 3502, levels: 1, name: 'Mithril Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 20, op: 'sub' } ]},
	{ id: 3503, levels: 1, name: 'Reinforced Leather Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 80, op: 'add' } ]},
	{ id: 3504, levels: 1, name: 'Knowledge Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.1025, op: 'mul' },
		{ stat: 'regMp', val: 0.95, op: 'mul' } ]},
	{ id: 3505, levels: 1, name: 'Manticore Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 91.81, op: 'add' } ]},
	{ id: 3506, levels: 1, name: 'Brigandine Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.05, op: 'mul' },
		{ stat: 'maxHp', val: 153, op: 'add' } ]},
	{ id: 3507, levels: 1, name: 'Mithril Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 7, op: 'add' } ]},
	{ id: 3508, levels: 1, name: 'Mithril Light Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 3509, levels: 1, name: 'Chain Mail Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'daggerWpnVuln', val: 0.94, op: 'mul' },
		{ stat: 'dualDaggerWpnVuln', val: 0.94, op: 'mul' } ]},
	{ id: 3510, levels: 1, name: 'Karmian Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0526, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 3511, levels: 1, name: 'Plated Leather Set', target: 'SELF', operateType: 'P' },
	{ id: 3512, levels: 1, name: 'Composite Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'weightPenalty', val: 5795, op: 'add' } ]},
	{ id: 3513, levels: 1, name: 'Demon\'s Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 269.65, op: 'sub' } ]},
	{ id: 3514, levels: 1, name: 'Theca Leather Light Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0526, op: 'mul' } ]},
	{ id: 3515, levels: 1, name: 'Drake Leather Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.0526, op: 'mul' } ]},
	{ id: 3516, levels: 1, name: 'Full Plate Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 269.65, op: 'add' } ]},
	{ id: 3517, levels: 1, name: 'Divine Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0526, op: 'mul' },
		{ stat: 'maxMp', val: 170.62, op: 'add' } ]},
	{ id: 3518, levels: 1, name: 'Zubei\'s Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0526, op: 'mul' },
		{ stat: 'maxHp', val: 294.49, op: 'add' } ]},
	{ id: 3519, levels: 1, name: 'Avadon Breastplate Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 294.49, op: 'add' } ]},
	{ id: 3520, levels: 1, name: 'Zubei\'s Leather Shirt Light Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 3521, levels: 1, name: 'Avadon Light Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.0525, op: 'mul' },
		{ stat: 'weightPenalty', val: 5795, op: 'add' } ]},
	{ id: 3522, levels: 1, name: 'Tunic of Zubei Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.1025, op: 'mul' },
		{ stat: 'regMp', val: 0.95, op: 'mul' } ]},
	{ id: 3523, levels: 1, name: 'Avadon Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0526, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 3524, levels: 1, name: 'Blue Wolf Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 7, op: 'add' },
		{ stat: 'regHp', val: 1.0526, op: 'mul' } ]},
	{ id: 3525, levels: 1, name: 'Doom Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 320, op: 'add' },
		{ stat: 'breath', val: 200, op: 'add' } ]},
	{ id: 3526, levels: 1, name: 'Blue Wolf Light Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0526, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 3527, levels: 1, name: 'Doom Light Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'breath', val: 200, op: 'add' },
		{ stat: 'pAtk', val: 1.027, op: 'mul' },
		{ stat: 'regMp', val: 1.025, op: 'mul' },
		{ stat: 'poisonVuln', val: 20, op: 'sub' } ]},
	{ id: 3528, levels: 1, name: 'Blue Wolf Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 206, op: 'add' },
		{ stat: 'regMp', val: 1.0524, op: 'mul' } ]},
	{ id: 3529, levels: 1, name: 'Doom Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 7, op: 'add' },
		{ stat: 'breath', val: 200, op: 'add' },
		{ stat: 'regMp', val: 1.0526, op: 'mul' } ]},
	{ id: 3530, levels: 1, name: 'Dark Crystal Breastplate Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 1.04, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 50, op: 'sub' } ]},
	{ id: 3531, levels: 1, name: 'Tallum Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'weightPenalty', val: 5759, op: 'add' },
		{ stat: 'poisonVuln', val: 80, op: 'sub' },
		{ stat: 'bleedVuln', val: 80, op: 'sub' } ]},
	{ id: 3532, levels: 1, name: 'Dark Crystal Light Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'pAtk', val: 1.04, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 50, op: 'sub' } ]},
	{ id: 3533, levels: 1, name: 'Tallum Light Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.08, op: 'mul' },
		{ stat: 'maxMp', val: 222, op: 'add' },
		{ stat: 'poisonVuln', val: 80, op: 'sub' },
		{ stat: 'bleedVuln', val: 80, op: 'sub' } ]},
	{ id: 3534, levels: 1, name: 'Tallum Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'mDef', val: 1.08, op: 'mul' },
		{ stat: 'poisonVuln', val: 80, op: 'sub' },
		{ stat: 'bleedVuln', val: 80, op: 'sub' } ]},
	{ id: 3535, levels: 1, name: 'Dark Crystal Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.08, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'runSpd', val: 7, op: 'add' },
		{ stat: 'cancel', val: 50, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 50, op: 'sub' } ]},
	{ id: 3536, levels: 1, name: 'Nightmare Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.04, op: 'mul' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' } ]},
	{ id: 3537, levels: 1, name: 'Majestic Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.04, op: 'mul' },
		{ stat: 'accCombat', val: 3.1, op: 'add' },
		{ stat: 'stunVuln', val: 50, op: 'sub' } ]},
	{ id: 3538, levels: 1, name: 'Nightmarish Leather Light Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.04, op: 'mul' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' },
		{ stat: 'absorbDam', val: 3, op: 'add' } ]},
	{ id: 3539, levels: 1, name: 'Majestic Light Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.08, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'maxMp', val: 240, op: 'add' },
		{ stat: 'weightPenalty', val: 5759, op: 'add' },
		{ stat: 'stunVuln', val: 50, op: 'sub' } ]},
	{ id: 3540, levels: 1, name: 'Nightmare Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.04, op: 'mul' },
		{ stat: 'mAtk', val: 1.08, op: 'mul' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' } ]},
	{ id: 3541, levels: 1, name: 'Majestic Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 240, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.08, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' } ]},
	{ id: 3542, levels: 6, name: 'Special Ability: Critical Damage', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: [203.97, 226.51, 248.71, 269.91, 289.4, 306.42], op: 'add' } ]},
	{ id: 3543, levels: 1, name: 'Equipped with Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 126.13, op: 'add' } ]},
	{ id: 3544, levels: 1, name: 'Equipped with Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 20, op: 'add' } ]},
	{ id: 3545, levels: 1, name: 'Equipped with Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 198.21, op: 'add' } ]},
	{ id: 3546, levels: 1, name: 'Equipped with Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.0526, op: 'mul' } ]},
	{ id: 3547, levels: 1, name: 'Equipped with Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rShld', val: 1.0526, op: 'mul' } ]},
	{ id: 3548, levels: 1, name: 'Equipped with Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rShld', val: 1.24, op: 'mul' } ]},
	{ id: 3549, levels: 1, name: 'Equipped with Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rShld', val: 1.24, op: 'mul' } ]},
	{ id: 3550, levels: 1, name: 'Equipped with Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rShld', val: 1.18, op: 'mul' } ]},
	{ id: 3551, levels: 1, name: 'Equipped with Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'reflectDam', val: 5, op: 'add' } ]},
	{ id: 3552, levels: 4, name: 'Special Ability: PvP Damage', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'atkCountMax', val: [0, 4, 0, 4], op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1.05, 1.05, 1.1, 1.1], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1.05, 1.05, 1.1, 1.1], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1.05, 1.05, 1.1, 1.1], op: 'mul' } ]},
	{ id: 3553, levels: 1, name: 'Imperial Crusader Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.08, op: 'mul' },
		{ stat: 'maxHp', val: 445, op: 'add' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'rootVuln', val: 70, op: 'sub' } ]},
	{ id: 3554, levels: 1, name: 'Equipped with Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 80, op: 'sub' },
		{ stat: 'bleedVuln', val: 80, op: 'sub' } ]},
	{ id: 3555, levels: 1, name: 'Draconic Light Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'pAtk', val: 1.04, op: 'mul' },
		{ stat: 'maxMp', val: 289, op: 'add' },
		{ stat: 'weightPenalty', val: 5759, op: 'add' } ]},
	{ id: 3556, levels: 1, name: 'Major Arcana Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.17, op: 'mul' },
		{ stat: 'runSpd', val: 7, op: 'add' },
		{ stat: 'cancel', val: 50, op: 'sub' },
		{ stat: 'weightPenalty', val: 5759, op: 'add' },
		{ stat: 'stunVuln', val: 50, op: 'sub' } ]},
	{ id: 3557, levels: 1, name: 'Necklace of Valakas', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 15, op: 'add' },
		{ stat: 'sleepVuln', val: 40, op: 'sub' },
		{ stat: 'sleepProf', val: 40, op: 'add' },
		{ stat: 'maxHp', val: 445, op: 'add' },
		{ stat: 'pAtk', val: 1.04, op: 'mul' },
		{ stat: 'mAtk', val: 1.08, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' },
		{ stat: 'pReuse', val: 0.9, op: 'mul' },
		{ stat: 'mReuse', val: 0.9, op: 'mul' },
		{ stat: 'reflectDam', val: 5, op: 'add' } ]},
	{ id: 3558, levels: 1, name: 'Earring of Antharas', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: 15, op: 'add' },
		{ stat: 'bleedVuln', val: 40, op: 'sub' },
		{ stat: 'bleedProf', val: 40, op: 'add' },
		{ stat: 'stunVuln', val: 30, op: 'sub' },
		{ stat: 'stunProf', val: 30, op: 'add' },
		{ stat: 'derangementVuln', val: 30, op: 'sub' },
		{ stat: 'derangementProf', val: 30, op: 'add' },
		{ stat: 'healEffect', val: 1.1, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'absorbDam', val: 4, op: 'add' } ]},
	{ id: 3559, levels: 2, name: 'Earring of Zaken', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 30, op: 'sub' },
		{ stat: 'stunVuln', val: [20, 30], op: 'sub' },
		{ stat: 'derangementVuln', val: [20, 30], op: 'sub' },
		{ stat: 'bleedProf', val: 30, op: 'add' },
		{ stat: 'stunProf', val: [20, 30], op: 'add' },
		{ stat: 'derangementProf', val: [20, 30], op: 'add' },
		{ stat: 'healEffect', val: [1.1, 1.15], op: 'mul' },
		{ stat: 'absorbDam', val: 4, op: 'add' },
		{ stat: 'darkRes', val: [0, 15], op: 'add' } ]},
	{ id: 3560, levels: 1, name: 'Earring of Orfen', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 20, op: 'sub' },
		{ stat: 'bleedProf', val: 20, op: 'add' },
		{ stat: 'healEffect', val: 1.06, op: 'mul' } ]},
	{ id: 3561, levels: 1, name: 'Ring of Baium', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 40, op: 'sub' },
		{ stat: 'rootVuln', val: 30, op: 'sub' },
		{ stat: 'poisonProf', val: 40, op: 'add' },
		{ stat: 'rootProf', val: 30, op: 'add' },
		{ stat: 'accCombat', val: 2, op: 'add' },
		{ stat: 'cAtk', val: 1.15, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.04, op: 'mul' } ]},
	{ id: 3562, levels: 1, name: 'Ring of Ant Queen', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 30, op: 'sub' },
		{ stat: 'rootVuln', val: 20, op: 'sub' },
		{ stat: 'poisonProf', val: 30, op: 'add' },
		{ stat: 'rootProf', val: 20, op: 'add' },
		{ stat: 'accCombat', val: 2, op: 'add' },
		{ stat: 'cAtk', val: 1.15, op: 'mul' } ]},
	{ id: 3563, levels: 1, name: 'Ring of Core', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 20, op: 'sub' },
		{ stat: 'poisonProf', val: 20, op: 'add' },
		{ stat: 'accCombat', val: 1, op: 'add' } ]},
	{ id: 3564, levels: 3, name: 'Special Ability: Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: [1.07, 1.1, 1.11], op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3565, levels: 5, name: 'Special Ability: Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: [80.6, 107, 123.5, 129, 129], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3566, levels: 5, name: 'Special Ability: Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: [84.3, 111.5, 133.3, 134.4, 134.4], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3567, levels: 5, name: 'Special Ability: Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: [88.1, 116, 133.9, 139.9, 139.9], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3568, levels: 2, name: 'Special Ability: HP Drain', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'absorbDam', val: [3, 4], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3569, levels: 4, name: 'Special Ability: HP Regeneration', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: [2.04, 4.92, 5.15, 5.18], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3570, levels: 1, name: 'Special Ability: Robust Health', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3572, levels: 4, name: 'Special Ability: Critical Damage', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: [265, 906, 999, 1059], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3573, levels: 3, name: 'Special Ability: Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: [5.27, 5.32, 7.5], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3575, levels: 4, name: 'Special Ability: Empower', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: [60.09, 151.09, 166.54, 176.53], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3576, levels: 4, name: 'Special Ability: MP Regeneration', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: [0.54, 1.95, 2.04, 2.05], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 3578, levels: 1, name: 'Special Ability: Infinity Blade', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'sDef', val: 1.33, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.1, op: 'mul' },
		{ stat: 'reflectDam', val: 9, op: 'add' } ]},
	{ id: 3580, levels: 1, name: 'Special Ability: Infinity Axe', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'rShld', val: 1.39, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.1, op: 'mul' },
		{ stat: 'reflectDam', val: 9, op: 'add' } ]},
	{ id: 3582, levels: 1, name: 'Special Ability: Infinity Cleaver', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: 504, op: 'add' },
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'rCrit', val: 78.7, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.1, op: 'mul' },
		{ stat: 'reflectSkillPhysic', val: 10, op: 'add' },
		{ stat: 'reflectSkillMagic', val: 10, op: 'add' } ]},
	{ id: 3583, levels: 1, name: 'Special Ability: Infinity Crusher', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.07, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.1, op: 'mul' },
		{ stat: 'reflectSkillPhysic', val: 10, op: 'add' },
		{ stat: 'reflectSkillMagic', val: 10, op: 'add' } ]},
	{ id: 3585, levels: 1, name: 'Special Ability: Infinity Wing', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'rCrit', val: 78.7, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.1, op: 'mul' },
		{ stat: 'reflectSkillPhysic', val: 10, op: 'add' },
		{ stat: 'reflectSkillMagic', val: 10, op: 'add' } ]},
	{ id: 3587, levels: 1, name: 'Special Ability: Infinity Fang', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'rEvas', val: 3.15, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.1, op: 'mul' },
		{ stat: 'reflectSkillPhysic', val: 10, op: 'add' },
		{ stat: 'reflectSkillMagic', val: 10, op: 'add' } ]},
	{ id: 3589, levels: 1, name: 'Special Ability: Infinity Stinger', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.03, op: 'mul' },
		{ stat: 'regMp', val: 0.51, op: 'add' },
		{ stat: 'rCrit', val: 0.22, op: 'basemul', atkFrom: 'behind' },
		{ stat: 'pvpPhysDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.1, op: 'mul' },
		{ stat: 'absorbDam', val: 2, op: 'add' } ]},
	{ id: 3591, levels: 1, name: 'Special Ability: Infinity Spear', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.07, op: 'mul' },
		{ stat: 'accCombat', val: 4.89, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.1, op: 'mul' },
		{ stat: 'reflectSkillPhysic', val: 20, op: 'add' },
		{ stat: 'reflectSkillMagic', val: 20, op: 'add' },
		{ stat: 'atkCountMax', val: 5, op: 'add' } ]},
	{ id: 3593, levels: 1, name: 'Special Ability: Infinity Bow', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.1, op: 'mul' } ]},
	{ id: 3595, levels: 1, name: 'Special Ability: Infinity Scepter', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'mAtk', val: 29.67, op: 'add' },
		{ stat: 'mCritRate', val: 1, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.1, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.96, op: 'mul' },
		{ stat: 'cancel', val: 106, op: 'sub' } ]},
	{ id: 3597, levels: 1, name: 'Special Ability: Infinity Rod', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 0.51, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.1, op: 'mul' } ]},
	{ id: 3599, levels: 1, name: 'Polearm Multi-attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'atkCountMax', val: 2, op: 'add' } ]},
	{ id: 3600, levels: 10, name: 'Special Ability: Anger', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [20.44, 22.64, 24.77, 26.78, 28.59, 30.12, 31.30, 39, 45, 78.33], op: 'add' },
		{ stat: 'maxHp', val: 0.85, op: 'mul' },
		{ stat: 'atkCountMax', val: 4, op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3601, levels: 10, name: 'Special Ability: Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: [1.08, 1.07, 1.07, 1.07, 1.06, 1.06, 1.06, 1.06, 1.07, 1.11], op: 'mul' },
		{ stat: 'atkCountMax', val: 4, op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3602, levels: 10, name: 'Special Ability: Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: [6.88, 6.07, 5.72, 5.37, 5.02, 4.68, 4.34, 3.95, 5.27, 7.5], op: 'add' },
		{ stat: 'atkCountMax', val: 4, op: 'add' },
		{ stat: 'pvpPhysDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.05, 1.05], op: 'mul' } ]},
	{ id: 3603, levels: 10, name: 'Demon Sword Zariche', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [3.2, 3.42, 3.66, 3.92, 4.22, 4.54, 4.89, 5.28, 5.71, 6.18], op: 'mul' },
		{ stat: 'pAtk', val: [600, 720, 864, 1036, 1244, 1492, 1791, 2149, 2579, 3095], op: 'add' },
		{ stat: 'mAtk', val: [3.1, 3.2, 3.31, 3.43, 3.55, 3.68, 3.81, 3.95, 4.1, 4.25], op: 'mul' },
		{ stat: 'mAtk', val: [600, 720, 864, 1036, 1244, 1492, 1791, 2149, 2579, 3095], op: 'add' },
		{ stat: 'pDef', val: [3.04, 3.08, 3.12, 3.16, 3.2, 3.25, 3.29, 3.34, 3.39, 3.43], op: 'mul' },
		{ stat: 'pDef', val: [510, 520, 530, 541, 552, 563, 574, 585, 597, 609], op: 'add' },
		{ stat: 'mDef', val: [3.06, 3.12, 3.18, 3.25, 3.31, 3.38, 3.45, 3.53, 3.6, 3.68], op: 'mul' },
		{ stat: 'mDef', val: [515, 530, 546, 562, 579, 597, 614, 633, 652, 671], op: 'add' },
		{ stat: 'runSpd', val: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], op: 'add' },
		{ stat: 'maxCp', val: [11.5, 12.02, 12.57, 13.15, 13.76, 14.4, 15.07, 15.77, 16.51, 17.28], op: 'mul' },
		{ stat: 'maxCp', val: [1300, 1690, 2197, 2856, 3712, 4826, 6274, 8157, 10604, 13785], op: 'add' },
		{ stat: 'regCp', val: [12, 13.1, 14.31, 15.64, 17.1, 18.71, 20.48, 22.43, 24.57, 26.93], op: 'mul' },
		{ stat: 'debuffVuln', val: [85, 86, 87, 88, 89, 90, 91, 92, 93, 94], op: 'sub' },
		{ stat: 'accCombat', val: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100], op: 'add' },
		{ stat: 'absorbDam', val: [22, 24, 26, 29, 32, 35, 38, 42, 47, 50], op: 'add' },
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 15, op: 'set' },
		{ stat: 'MEN', val: 21, op: 'set' } ]},
	{ id: 3604, levels: 1, name: 'Frintezza\'s Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 15, op: 'add' },
		{ stat: 'poisonVuln', val: 25, op: 'sub' },
		{ stat: 'bleedVuln', val: 25, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 15, op: 'sub' },
		{ stat: 'stunVuln', val: 15, op: 'sub' },
		{ stat: 'sleepVuln', val: 15, op: 'sub' },
		{ stat: 'poisonProf', val: 25, op: 'add' },
		{ stat: 'bleedProf', val: 25, op: 'add' },
		{ stat: 'paralyzeProf', val: 15, op: 'add' },
		{ stat: 'stunProf', val: 15, op: 'add' },
		{ stat: 'sleepProf', val: 15, op: 'add' },
		{ stat: 'mReuse', val: 0.95, op: 'mul' },
		{ stat: 'pReuse', val: 0.95, op: 'mul' },
		{ stat: 'reflectDam', val: 4, op: 'add' } ]},
	{ id: 3605, levels: 1, name: 'Clan Oath Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'pAtk', val: 1.05, op: 'mul' } ]},
	{ id: 3606, levels: 1, name: 'Clan Oath Light Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'cAtk', val: 1.05, op: 'mul' } ]},
	{ id: 3607, levels: 1, name: 'Clan Oath Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.05, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.05, op: 'mul' } ]},
	{ id: 3608, levels: 3, name: 'Apella Heavy Armor Set', target: 'SELF', operateType: 'P', trigger: 5605, effectType: 'ChanceSkillTrigger' },
	{ id: 3609, levels: 3, name: 'Apella Light Armor Set', target: 'SELF', operateType: 'P', trigger: 5607, effectType: 'ChanceSkillTrigger' },
	{ id: 3610, levels: 3, name: 'Apella Robe Set', target: 'SELF', operateType: 'P', trigger: 5608, effectType: 'ChanceSkillTrigger' },
	{ id: 3611, levels: 1, name: 'Enchant Heavy Armor (Grade D)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 25, op: 'add', using: 'Heavy' },
		{ stat: 'regMp', val: 1.518, op: 'add' } ]},
	{ id: 3612, levels: 1, name: 'Enchant Light Armor (Grade D)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 2, op: 'add', using: 'Light' },
		{ stat: 'mDef', val: 14, op: 'add', using: 'Light' } ]},
	{ id: 3613, levels: 1, name: 'Enchant Robe (Grade D)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 16, op: 'add', using: 'Magic' },
		{ stat: 'weightLimit', val: 1.3, op: 'mul' } ]},
	{ id: 3614, levels: 1, name: 'Enchant Heavy Armor (Grade C)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 38, op: 'add', using: 'Heavy' },
		{ stat: 'regMp', val: 2.019, op: 'add' } ]},
	{ id: 3615, levels: 1, name: 'Enchant Light Armor (Grade C)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 2, op: 'add', using: 'Light' },
		{ stat: 'mDef', val: 20, op: 'add', using: 'Light' } ]},
	{ id: 3616, levels: 1, name: 'Enchant Robe (Grade C)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 24, op: 'add', using: 'Magic' },
		{ stat: 'weightLimit', val: 1.3, op: 'mul' } ]},
	{ id: 3617, levels: 1, name: 'Enchant Heavy Armor (Grade B)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 44, op: 'add', using: 'Heavy' },
		{ stat: 'regMp', val: 2.25, op: 'add' } ]},
	{ id: 3618, levels: 1, name: 'Enchant Light Armor (Grade B)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 2, op: 'add', using: 'Light' },
		{ stat: 'mDef', val: 24, op: 'add', using: 'Light' } ]},
	{ id: 3619, levels: 1, name: 'Enchant Robe (Grade B)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 28, op: 'add', using: 'Magic' },
		{ stat: 'weightLimit', val: 1.3, op: 'mul' } ]},
	{ id: 3620, levels: 1, name: 'Enchant Heavy Armor (Grade A)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 50, op: 'add', using: 'Heavy' },
		{ stat: 'regMp', val: 2.43, op: 'add' } ]},
	{ id: 3621, levels: 1, name: 'Enchant Light Armor (Grade A)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 2, op: 'add', using: 'Light' },
		{ stat: 'mDef', val: 27, op: 'add', using: 'Light' } ]},
	{ id: 3622, levels: 1, name: 'Enchant Robe (Grade A)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 32, op: 'add', using: 'Magic' },
		{ stat: 'weightLimit', val: 1.3, op: 'mul' } ]},
	{ id: 3623, levels: 1, name: 'Enchant Heavy Armor (Grade S)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 59, op: 'add', using: 'Heavy' },
		{ stat: 'regMp', val: 2.823, op: 'add' } ]},
	{ id: 3624, levels: 1, name: 'Enchant Light Armor (Grade S)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 2, op: 'add', using: 'Light' },
		{ stat: 'mDef', val: 33, op: 'add', using: 'Light' } ]},
	{ id: 3625, levels: 1, name: 'Enchant Robe (Grade S)', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 38, op: 'add', using: 'Magic' },
		{ stat: 'weightLimit', val: 1.3, op: 'mul' } ]},
	{ id: 3629, levels: 10, name: 'Blood Sword Akamanah', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [3.2, 3.42, 3.66, 3.92, 4.22, 4.54, 4.89, 5.28, 5.71, 6.18], op: 'mul' },
		{ stat: 'pAtk', val: [600, 720, 864, 1036, 1244, 1492, 1791, 2149, 2579, 3095], op: 'add' },
		{ stat: 'mAtk', val: [3.1, 3.2, 3.31, 3.43, 3.55, 3.68, 3.81, 3.95, 4.1, 4.25], op: 'mul' },
		{ stat: 'mAtk', val: [600, 720, 864, 1036, 1244, 1492, 1791, 2149, 2579, 3095], op: 'add' },
		{ stat: 'pDef', val: [3.04, 3.08, 3.12, 3.16, 3.2, 3.25, 3.29, 3.34, 3.39, 3.43], op: 'mul' },
		{ stat: 'pDef', val: [510, 520, 530, 541, 552, 563, 574, 585, 597, 609], op: 'add' },
		{ stat: 'mDef', val: [3.06, 3.12, 3.18, 3.25, 3.31, 3.38, 3.45, 3.53, 3.6, 3.68], op: 'mul' },
		{ stat: 'mDef', val: [515, 530, 546, 562, 579, 597, 614, 633, 652, 671], op: 'add' },
		{ stat: 'runSpd', val: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], op: 'add' },
		{ stat: 'maxCp', val: [11.5, 12.02, 12.57, 13.15, 13.76, 14.4, 15.07, 15.77, 16.51, 17.28], op: 'mul' },
		{ stat: 'maxCp', val: [1300, 1690, 2197, 2856, 3712, 4826, 6274, 8157, 10604, 13785], op: 'add' },
		{ stat: 'regCp', val: [12, 13.1, 14.31, 15.64, 17.1, 18.71, 20.48, 22.43, 24.57, 26.93], op: 'mul' },
		{ stat: 'debuffVuln', val: [85, 86, 87, 88, 89, 90, 91, 92, 93, 94], op: 'sub' },
		{ stat: 'accCombat', val: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100], op: 'add' },
		{ stat: 'absorbDam', val: [22, 24, 26, 29, 32, 35, 38, 42, 47, 50], op: 'add' },
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 15, op: 'set' },
		{ stat: 'MEN', val: 21, op: 'set' } ]},
	{ id: 3632, levels: 1, name: 'Clan Gate', target: 'SELF', operateType: 'A2', effectType: 'ClanGate', abnormalType: 'abnormal_item' },
	{ id: 3633, levels: 2, name: 'Residential Shock Immunity', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'stunVuln', val: [80, 100], op: 'sub' } ]},
	{ id: 3634, levels: 1, name: 'Special Ability: Infinity Sword', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: 504, op: 'add' },
		{ stat: 'maxHp', val: 1.25, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'rCrit', val: 78.7, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.1, op: 'mul' },
		{ stat: 'reflectSkillPhysic', val: 10, op: 'add' },
		{ stat: 'reflectSkillMagic', val: 10, op: 'add' } ]},
	{ id: 3635, levels: 1, name: 'Special Ability: Infinity Shooter', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 1.3, op: 'mul' },
		{ stat: 'maxCp', val: 1.5, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.1, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.1, op: 'mul' } ]},
	{ id: 3636, levels: 1, name: 'Dynasty Platinum Plate - Shield Master', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'healEffect', val: 1.04, op: 'mul' },
		{ stat: 'stunVuln', val: 15, op: 'sub' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3637, levels: 1, name: 'Dynasty Platinum Plate - Weapon Master', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'rCrit', val: 29.5, op: 'add' },
		{ stat: 'cAtkAdd', val: 282, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3638, levels: 1, name: 'Dynasty Platinum Plate - Bard', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'DanceMpConsumeRate', val: 0.94, op: 'mul' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3639, levels: 1, name: 'Dynasty Platinum Plate - Force Master', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.94, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3640, levels: 1, name: 'Dynasty Jewel Leather Mail Dagger Master', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 5.3, op: 'add' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0324, op: 'mul' },
		{ stat: 'rootVuln', val: 15, op: 'sub' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3641, levels: 1, name: 'Dynasty Jewel Leather Mail Bow Master', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 5.3, op: 'add' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0324, op: 'mul' },
		{ stat: 'regMp', val: 1.066, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3642, levels: 1, name: 'Dynasty Jeweled Leather Armor Force Master', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.94, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3643, levels: 1, name: 'Dynasty Jeweled Leather Armor Weapon Master', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.066, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'rCrit', val: 29.5, op: 'add' },
		{ stat: 'cAtkAdd', val: 282, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3644, levels: 1, name: 'Dynasty Jeweled Leather Armor Summoner', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.066, op: 'mul' },
		{ stat: 'pAtk', val: 1.0266, op: 'mul' },
		{ stat: 'pDef', val: 1.0266, op: 'mul' },
		{ stat: 'maxHp', val: 492, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3645, levels: 1, name: 'Dynasty Silver Satin Tunic Healer', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'healEffect', val: 22, op: 'add' },
		{ stat: 'cancel', val: 15, op: 'sub' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3646, levels: 1, name: 'Dynasty Silver Satin Tunic Enchanter', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'cancel', val: 15, op: 'sub' },
		{ stat: 'MagicalMpConsumeRate', val: 0.94, op: 'mul' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3647, levels: 1, name: 'Dynasty Silver Satin Tunic Summoner', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'pDef', val: 1.033, op: 'mul' },
		{ stat: 'pAtk', val: 1.033, op: 'mul' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3648, levels: 1, name: 'Dynasty Silver Satin Tunic Human Wizard', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'mAtk', val: 1.066, op: 'mul' },
		{ stat: 'maxMp', val: 321, op: 'add' },
		{ stat: 'darkRes', val: 8, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 3649, levels: 1, name: 'Beleth\'s Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.12, op: 'mul' },
		{ stat: 'derangementVuln', val: 10, op: 'sub' },
		{ stat: 'derangementProf', val: 10, op: 'add' },
		{ stat: 'maxMp', val: 38, op: 'add' },
		{ stat: 'darkRes', val: 30, op: 'add' },
		{ stat: 'maxHp', val: 105, op: 'add' },
		{ stat: 'regMp', val: 0.23, op: 'add' } ]},
	{ id: 3650, levels: 1, name: 'PvP Weapon - CP Drain', target: 'SELF', operateType: 'P', trigger: 5681, effectType: 'ChanceSkillTrigger' },
	{ id: 3651, levels: 1, name: 'PvP Weapon - Cancel', target: 'SELF', operateType: 'P', trigger: 5682, effectType: 'ChanceSkillTrigger' },
	{ id: 3652, levels: 1, name: 'PvP Weapon - Ignore Shield Defense', target: 'SELF', operateType: 'P', trigger: 5683, effectType: 'ChanceSkillTrigger' },
	{ id: 3653, levels: 1, name: 'PvP Weapon - Attack Chance', target: 'SELF', operateType: 'P', trigger: 5684, effectType: 'ChanceSkillTrigger' },
	{ id: 3654, levels: 1, name: 'PvP Weapon - Casting', target: 'SELF', operateType: 'P', trigger: 5685, effectType: 'ChanceSkillTrigger' },
	{ id: 3655, levels: 1, name: 'PvP Weapon - Rapid Fire', target: 'SELF', operateType: 'P', trigger: 5686, effectType: 'ChanceSkillTrigger' },
	{ id: 3656, levels: 1, name: 'PvP Weapon - Decrease Range', target: 'SELF', operateType: 'P', trigger: 5687, effectType: 'ChanceSkillTrigger' },
	{ id: 3657, levels: 1, name: 'PvP Weapon - Decrease Resist', target: 'SELF', operateType: 'P', trigger: 5688, effectType: 'ChanceSkillTrigger' },
	{ id: 3658, levels: 1, name: 'PvP Shield - Reflect Damage', target: 'SELF', operateType: 'P', trigger: 5689, effectType: 'ChanceSkillTrigger' },
	{ id: 3659, levels: 1, name: 'PvP Armor - Damage Down', target: 'SELF', operateType: 'P', trigger: 5690, effectType: 'ChanceSkillTrigger' },
	{ id: 3660, levels: 1, name: 'PvP Armor - Critical Down', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 3661, levels: 1, name: 'PvP Armor - Heal', target: 'SELF', operateType: 'P', trigger: 5692, effectType: 'ChanceSkillTrigger' },
	{ id: 3662, levels: 1, name: 'PvP Armor - Speed Down', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 3663, levels: 1, name: 'PvP Armor - Mirage', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 3664, levels: 1, name: 'Red Talisman - Max. CP', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' } ]},
	{ id: 3665, levels: 2, name: 'Red Talisman - CP Regeneration', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'regCp', val: 1.3, op: 'mul' } ]},
	{ id: 3666, levels: 1, name: 'Yellow Talisman - Increase Force', target: 'SELF', operateType: 'P', trigger: 5695, effectType: 'ChanceSkillTrigger' },
	{ id: 3667, levels: 1, name: 'Yellow Talisman - Damage Transition', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'transDam', val: 10, op: 'add' } ]},
	{ id: 3668, levels: 1, name: 'Zubei\'s Leather Gaiters', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 1.47, op: 'add' } ]},
	{ id: 3669, levels: 1, name: 'Zubei\'s Leather Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 9.55, op: 'add' } ]},
	{ id: 3670, levels: 1, name: 'Zubei\'s Gauntlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 0.59, op: 'add' } ]},
	{ id: 3671, levels: 1, name: 'Zubei\'s Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 0.59, op: 'add' } ]},
	{ id: 3672, levels: 1, name: 'Zubei\'s Gaiters', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0208, op: 'mul' },
		{ stat: 'maxHp', val: 123, op: 'add' } ]},
	{ id: 3673, levels: 1, name: 'Zubei\'s Gauntlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0083, op: 'mul' },
		{ stat: 'maxHp', val: 49, op: 'add' } ]},
	{ id: 3674, levels: 1, name: 'Zubei\'s Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0083, op: 'mul' },
		{ stat: 'maxHp', val: 49, op: 'add' } ]},
	{ id: 3675, levels: 1, name: 'Zubei\'s Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0125, op: 'mul' },
		{ stat: 'maxHp', val: 74, op: 'add' } ]},
	{ id: 3676, levels: 1, name: 'Zubei\'s Breastplate', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 294, op: 'add' },
		{ stat: 'pDef', val: 1.0724, op: 'mul' } ]},
	{ id: 3677, levels: 1, name: 'Tunic of Zubei', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.15, op: 'mul' } ]},
	{ id: 3678, levels: 1, name: 'Stockings of Zubei', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0208, op: 'mul' } ]},
	{ id: 3679, levels: 1, name: 'Zubei\'s Gauntlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0083, op: 'mul' } ]},
	{ id: 3680, levels: 1, name: 'Zubei\'s Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0083, op: 'mul' } ]},
	{ id: 3681, levels: 1, name: 'Zubei\'s Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.02, op: 'mul' } ]},
	{ id: 3682, levels: 1, name: 'Avadon Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 49, op: 'add' } ]},
	{ id: 3683, levels: 1, name: 'Avadon Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 49, op: 'add' } ]},
	{ id: 3684, levels: 1, name: 'Avadon Circlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 73, op: 'add' } ]},
	{ id: 3685, levels: 1, name: 'Avadon Gaiters', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 122, op: 'add' } ]},
	{ id: 3686, levels: 1, name: 'Avadon Breastplate', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 833, op: 'add' } ]},
	{ id: 3687, levels: 1, name: 'Avadon Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.01, op: 'mul' } ]},
	{ id: 3688, levels: 1, name: 'Avadon Circlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.0125, op: 'mul' },
		{ stat: 'weightPenalty', val: 1440, op: 'add' } ]},
	{ id: 3689, levels: 1, name: 'Avadon Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.0083, op: 'mul' },
		{ stat: 'weightPenalty', val: 960, op: 'add' } ]},
	{ id: 3690, levels: 1, name: 'Avadon Leather Armor', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'weightPenalty', val: 11038, op: 'add' },
		{ stat: 'mDef', val: 1.1708, op: 'mul' } ]},
	{ id: 3691, levels: 1, name: 'Avadon Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.0083, op: 'mul' },
		{ stat: 'weightPenalty', val: 960, op: 'add' } ]},
	{ id: 3692, levels: 1, name: 'Avadon Circlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0125, op: 'mul' } ]},
	{ id: 3693, levels: 1, name: 'Avadon Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0083, op: 'mul' } ]},
	{ id: 3694, levels: 1, name: 'Avadon Robe', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'mDef', val: 1.1708, op: 'mul' } ]},
	{ id: 3695, levels: 1, name: 'Avadon Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0083, op: 'mul' } ]},
	{ id: 3696, levels: 1, name: 'Doom Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 53, op: 'add' },
		{ stat: 'breath', val: 33, op: 'add' } ]},
	{ id: 3697, levels: 1, name: 'Doom Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 53, op: 'add' },
		{ stat: 'breath', val: 33, op: 'add' } ]},
	{ id: 3698, levels: 1, name: 'Doom Plate Armor', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'breath', val: 383, op: 'add' },
		{ stat: 'maxHp', val: 1093, op: 'add' } ]},
	{ id: 3699, levels: 1, name: 'Doom Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 80, op: 'add' },
		{ stat: 'breath', val: 50, op: 'add' } ]},
	{ id: 3700, levels: 1, name: 'Doom Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.02, op: 'mul' } ]},
	{ id: 3701, levels: 1, name: 'Leather Armor of Doom', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'breath', val: 383, op: 'add' },
		{ stat: 'pAtk', val: 1.0827, op: 'mul' },
		{ stat: 'poisonVuln', val: 13, op: 'sub' },
		{ stat: 'regMp', val: 1.0827, op: 'mul' } ]},
	{ id: 3702, levels: 1, name: 'Doom Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'breath', val: 33, op: 'add' },
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'regMp', val: 1.0041, op: 'mul' },
		{ stat: 'poisonVuln', val: 2, op: 'sub' } ]},
	{ id: 3703, levels: 1, name: 'Doom Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'breath', val: 33, op: 'add' },
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'regMp', val: 1.0041, op: 'mul' },
		{ stat: 'poisonVuln', val: 3, op: 'sub' } ]},
	{ id: 3704, levels: 1, name: 'Doom Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'breath', val: 50, op: 'add' },
		{ stat: 'pAtk', val: 1.0062, op: 'mul' },
		{ stat: 'regMp', val: 1.0062, op: 'mul' },
		{ stat: 'poisonVuln', val: 2, op: 'sub' } ]},
	{ id: 3705, levels: 1, name: 'Doom Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 1.16, op: 'add' },
		{ stat: 'breath', val: 33, op: 'add' },
		{ stat: 'regMp', val: 1.0083, op: 'mul' } ]},
	{ id: 3706, levels: 1, name: 'Doom Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 1.16, op: 'add' },
		{ stat: 'breath', val: 33, op: 'add' },
		{ stat: 'regMp', val: 1.0083, op: 'mul' } ]},
	{ id: 3707, levels: 1, name: 'Tunic of Doom', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'breath', val: 200, op: 'add' },
		{ stat: 'regMp', val: 1.0724, op: 'mul' },
		{ stat: 'runSpd', val: 7, op: 'add' } ]},
	{ id: 3708, levels: 1, name: 'Stockings of Doom', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 2.91, op: 'add' },
		{ stat: 'breath', val: 88, op: 'add' },
		{ stat: 'regMp', val: 1.0208, op: 'mul' } ]},
	{ id: 3709, levels: 1, name: 'Doom Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 1.75, op: 'add' },
		{ stat: 'breath', val: 50, op: 'add' },
		{ stat: 'regMp', val: 1.0125, op: 'mul' } ]},
	{ id: 3710, levels: 1, name: 'Blue Wolf Breastplate', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: 1.0724, op: 'mul' },
		{ stat: 'runSpd', val: 7, op: 'add' } ]},
	{ id: 3711, levels: 1, name: 'Blue Wolf Gaiters', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 2.91, op: 'add' },
		{ stat: 'regHp', val: 1.0208, op: 'mul' } ]},
	{ id: 3712, levels: 1, name: 'Blue Wolf Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 1.16, op: 'add' },
		{ stat: 'regHp', val: 1.0083, op: 'mul' } ]},
	{ id: 3713, levels: 1, name: 'Blue Wolf Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 1.16, op: 'add' },
		{ stat: 'regHp', val: 1.0083, op: 'mul' } ]},
	{ id: 3714, levels: 1, name: 'Blue Wolf Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 1.75, op: 'add' },
		{ stat: 'regHp', val: 1.0125, op: 'mul' } ]},
	{ id: 3715, levels: 1, name: 'Blue Wolf Leather Armor', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'pDef', val: 1.0219, op: 'mul' } ]},
	{ id: 3716, levels: 1, name: 'Blue Wolf Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0088, op: 'mul' } ]},
	{ id: 3717, levels: 1, name: 'Blue Wolf Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0088, op: 'mul' } ]},
	{ id: 3718, levels: 1, name: 'Blue Wolf Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0132, op: 'mul' } ]},
	{ id: 3719, levels: 1, name: 'Blue Wolf Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 34, op: 'add' },
		{ stat: 'regMp', val: 1.0083, op: 'mul' } ]},
	{ id: 3720, levels: 1, name: 'Blue Wolf Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 34, op: 'add' },
		{ stat: 'regMp', val: 1.0083, op: 'mul' } ]},
	{ id: 3721, levels: 1, name: 'Blue Wolf Tunic', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 205, op: 'add' },
		{ stat: 'regMp', val: 1.0724, op: 'mul' } ]},
	{ id: 3722, levels: 1, name: 'Blue Wolf Stockings', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 85, op: 'add' },
		{ stat: 'regMp', val: 1.0208, op: 'mul' } ]},
	{ id: 3723, levels: 1, name: 'Blue Wolf Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 51, op: 'add' },
		{ stat: 'regMp', val: 1.0125, op: 'mul' } ]},
	{ id: 3724, levels: 1, name: 'Dark Crystal Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 1.01, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 7.5, op: 'sub' } ]},
	{ id: 3725, levels: 1, name: 'Dark Crystal Breastplate', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 1.12, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 20, op: 'add' } ]},
	{ id: 3726, levels: 1, name: 'Dark Crystal Gaiters', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 1.02, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 12.5, op: 'sub' } ]},
	{ id: 3727, levels: 1, name: 'Dark Crystal Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 1.01, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' } ]},
	{ id: 3728, levels: 1, name: 'Dark Crystal Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 1.01, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' } ]},
	{ id: 3729, levels: 1, name: 'Dark Crystal Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.02, op: 'mul' } ]},
	{ id: 3730, levels: 1, name: 'Dark Crystal Leather Armor', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 20, op: 'sub' },
		{ stat: 'pAtkSpd', val: 1.0724, op: 'mul' },
		{ stat: 'pAtk', val: 1.0724, op: 'mul' } ]},
	{ id: 3731, levels: 1, name: 'Dark Crystal Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.0041, op: 'mul' },
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' } ]},
	{ id: 3732, levels: 1, name: 'Dark Crystal Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.0041, op: 'mul' },
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' } ]},
	{ id: 3733, levels: 1, name: 'Dark Crystal Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.0062, op: 'mul' },
		{ stat: 'pAtk', val: 1.0062, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 7.5, op: 'sub' } ]},
	{ id: 3734, levels: 1, name: 'Dark Crystal Leggings', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.0103, op: 'mul' },
		{ stat: 'pAtk', val: 1.0103, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 12.5, op: 'sub' } ]},
	{ id: 3735, levels: 1, name: 'Dark Crystal Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0133, op: 'mul' },
		{ stat: 'runSpd', val: 1.16, op: 'add' },
		{ stat: 'cancel', val: 8, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 8.33, op: 'sub' } ]},
	{ id: 3736, levels: 1, name: 'Dark Crystal Robe', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cancelVuln', val: 8.33, op: 'add' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 20, op: 'add' },
		{ stat: 'pDef', val: 1.0333, op: 'mul' },
		{ stat: 'runSpd', val: 2.91, op: 'add' } ]},
	{ id: 3737, levels: 1, name: 'Dark Crystal Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0133, op: 'mul' },
		{ stat: 'runSpd', val: 1.16, op: 'add' },
		{ stat: 'cancel', val: 8, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 8.33, op: 'sub' } ]},
	{ id: 3738, levels: 1, name: 'Dark Crystal Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.02, op: 'mul' },
		{ stat: 'runSpd', val: 1.75, op: 'add' },
		{ stat: 'cancel', val: 13, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 12.5, op: 'sub' } ]},
	{ id: 3739, levels: 1, name: 'Tallum Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.0083, op: 'mul' },
		{ stat: 'weightPenalty', val: 960, op: 'add' },
		{ stat: 'poisonVuln', val: 8, op: 'sub' },
		{ stat: 'bleedVuln', val: 8, op: 'sub' } ]},
	{ id: 3740, levels: 1, name: 'Tallum Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.0083, op: 'mul' },
		{ stat: 'weightPenalty', val: 960, op: 'add' },
		{ stat: 'poisonVuln', val: 8, op: 'sub' },
		{ stat: 'bleedVuln', val: 8, op: 'sub' } ]},
	{ id: 3741, levels: 1, name: 'Tallum Plate Armor', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 52, op: 'add' },
		{ stat: 'weightPenalty', val: 8159, op: 'add' },
		{ stat: 'poisonVuln', val: 52, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0932, op: 'mul' } ]},
	{ id: 3742, levels: 1, name: 'Tallum Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.0125, op: 'mul' },
		{ stat: 'weightPenalty', val: 1440, op: 'add' },
		{ stat: 'poisonVuln', val: 12, op: 'sub' },
		{ stat: 'bleedVuln', val: 12, op: 'sub' } ]},
	{ id: 3743, levels: 1, name: 'Tallum Leather Armor', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 52, op: 'add' },
		{ stat: 'maxMp', val: 315, op: 'add' },
		{ stat: 'poisonVuln', val: 52, op: 'add' },
		{ stat: 'regMp', val: 1.0932, op: 'mul' } ]},
	{ id: 3744, levels: 1, name: 'Tallum Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.0083, op: 'mul' },
		{ stat: 'maxMp', val: 37, op: 'add' },
		{ stat: 'poisonVuln', val: 8, op: 'sub' },
		{ stat: 'bleedVuln', val: 8, op: 'sub' } ]},
	{ id: 3745, levels: 1, name: 'Tallum Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.0083, op: 'mul' },
		{ stat: 'maxMp', val: 37, op: 'add' },
		{ stat: 'poisonVuln', val: 8, op: 'sub' },
		{ stat: 'bleedVuln', val: 8, op: 'sub' } ]},
	{ id: 3746, levels: 1, name: 'Tallum Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.0125, op: 'mul' },
		{ stat: 'maxMp', val: 56, op: 'add' },
		{ stat: 'poisonVuln', val: 12, op: 'sub' },
		{ stat: 'bleedVuln', val: 12, op: 'sub' } ]},
	{ id: 3747, levels: 1, name: 'Tallum Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.0133, op: 'mul' },
		{ stat: 'poisonVuln', val: 13.33, op: 'sub' },
		{ stat: 'bleedVuln', val: 13.33, op: 'sub' } ]},
	{ id: 3748, levels: 1, name: 'Tallum Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.0133, op: 'mul' },
		{ stat: 'poisonVuln', val: 13.33, op: 'sub' },
		{ stat: 'bleedVuln', val: 13.33, op: 'sub' } ]},
	{ id: 3749, levels: 1, name: 'Tallum Tunic', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 3750, levels: 1, name: 'Tallum Stockings', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.0333, op: 'mul' },
		{ stat: 'poisonVuln', val: 33.33, op: 'sub' },
		{ stat: 'bleedVuln', val: 33.33, op: 'sub' } ]},
	{ id: 3751, levels: 1, name: 'Tallum Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.02, op: 'mul' },
		{ stat: 'poisonVuln', val: 20, op: 'sub' },
		{ stat: 'bleedVuln', val: 20, op: 'sub' } ]},
	{ id: 3752, levels: 1, name: 'Majestic Gauntlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'accCombat', val: 0.31, op: 'add' },
		{ stat: 'stunVuln', val: 8.33, op: 'sub' } ]},
	{ id: 3753, levels: 1, name: 'Majestic Circlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0062, op: 'mul' },
		{ stat: 'accCombat', val: 0.47, op: 'add' },
		{ stat: 'stunVuln', val: 12.5, op: 'sub' } ]},
	{ id: 3754, levels: 1, name: 'Majestic Plate Armor', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 0.579, op: 'add' },
		{ stat: 'pAtk', val: 1.0827, op: 'mul' },
		{ stat: 'stunVuln', val: 20.83, op: 'add' } ]},
	{ id: 3755, levels: 1, name: 'Majestic Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0062, op: 'mul' },
		{ stat: 'accCombat', val: 0.47, op: 'add' },
		{ stat: 'stunVuln', val: 8.33, op: 'sub' } ]},
	{ id: 3756, levels: 1, name: 'Majestic Gauntlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0083, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'maxMp', val: 40, op: 'add' },
		{ stat: 'weightPenalty', val: 960, op: 'add' },
		{ stat: 'stunVuln', val: 8.33, op: 'sub' } ]},
	{ id: 3757, levels: 1, name: 'Majestic Leather Armor', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'weightPenalty', val: 8159, op: 'add' },
		{ stat: 'maxMp', val: 340, op: 'add' },
		{ stat: 'pAtk', val: 1.0932, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'stunVuln', val: 20.83, op: 'add' } ]},
	{ id: 3758, levels: 1, name: 'Majestic Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0083, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'maxMp', val: 40, op: 'add' },
		{ stat: 'weightPenalty', val: 960, op: 'add' },
		{ stat: 'stunVuln', val: 8.33, op: 'sub' } ]},
	{ id: 3759, levels: 1, name: 'Majestic Circlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0125, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'maxMp', val: 60, op: 'add' },
		{ stat: 'weightPenalty', val: 1440, op: 'add' },
		{ stat: 'stunVuln', val: 12.5, op: 'sub' } ]},
	{ id: 3760, levels: 1, name: 'Majestic Gauntlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 40, op: 'add' },
		{ stat: 'regMp', val: 1.0133, op: 'mul' },
		{ stat: 'stunVuln', val: 8.33, op: 'sub' } ]},
	{ id: 3761, levels: 1, name: 'Majestic Robe', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.0333, op: 'mul' },
		{ stat: 'stunVuln', val: 20.83, op: 'add' } ]},
	{ id: 3762, levels: 1, name: 'Majestic Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 40, op: 'add' },
		{ stat: 'regMp', val: 1.0133, op: 'mul' },
		{ stat: 'stunVuln', val: 8.33, op: 'sub' } ]},
	{ id: 3763, levels: 1, name: 'Majestic Circlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 60, op: 'add' },
		{ stat: 'regMp', val: 1.02, op: 'mul' },
		{ stat: 'stunVuln', val: 12.5, op: 'sub' } ]},
	{ id: 3764, levels: 1, name: 'Armor of Nightmare', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.1708, op: 'mul' },
		{ stat: 'rootVuln', val: 29.16, op: 'sub' },
		{ stat: 'sleepVuln', val: 29.16, op: 'sub' } ]},
	{ id: 3765, levels: 1, name: 'Gauntlet of Nightmare', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0083, op: 'mul' },
		{ stat: 'sleepVuln', val: 11.66, op: 'sub' },
		{ stat: 'rootVuln', val: 11.66, op: 'sub' } ]},
	{ id: 3766, levels: 1, name: 'Boots of Nightmare', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0083, op: 'mul' },
		{ stat: 'sleepVuln', val: 11.66, op: 'sub' },
		{ stat: 'rootVuln', val: 11.66, op: 'sub' } ]},
	{ id: 3767, levels: 1, name: 'Helm of Nightmare', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0125, op: 'mul' },
		{ stat: 'sleepVuln', val: 17.5, op: 'sub' },
		{ stat: 'rootVuln', val: 17.5, op: 'sub' } ]},
	{ id: 3768, levels: 1, name: 'Nightmarish Leather Armor', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'absorbDam', val: 3, op: 'add' },
		{ stat: 'mDef', val: 1.0827, op: 'mul' },
		{ stat: 'rootVuln', val: 29.16, op: 'sub' },
		{ stat: 'sleepVuln', val: 29.16, op: 'sub' } ]},
	{ id: 3769, levels: 1, name: 'Gauntlet of Nightmare', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'sleepVuln', val: 11.66, op: 'sub' },
		{ stat: 'rootVuln', val: 11.66, op: 'sub' } ]},
	{ id: 3770, levels: 1, name: 'Boots of Nightmare', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'sleepVuln', val: 11.66, op: 'sub' },
		{ stat: 'rootVuln', val: 11.66, op: 'sub' } ]},
	{ id: 3771, levels: 1, name: 'Gauntlet of Nightmare', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.0041, op: 'mul' },
		{ stat: 'mAtk', val: 1.0041, op: 'mul' },
		{ stat: 'sleepVuln', val: 11.66, op: 'sub' },
		{ stat: 'rootVuln', val: 11.66, op: 'sub' } ]},
	{ id: 3772, levels: 1, name: 'Nightmare Robe', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0827, op: 'mul' },
		{ stat: 'regMp', val: 1.0827, op: 'mul' },
		{ stat: 'rootVuln', val: 29.16, op: 'sub' },
		{ stat: 'sleepVuln', val: 29.16, op: 'sub' } ]},
	{ id: 3773, levels: 1, name: 'Boots of Nightmare', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.0041, op: 'mul' },
		{ stat: 'mAtk', val: 1.0041, op: 'mul' },
		{ stat: 'sleepVuln', val: 11.66, op: 'sub' },
		{ stat: 'rootVuln', val: 11.66, op: 'sub' } ]},
	{ id: 3774, levels: 1, name: 'Shield of Nightmare', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.02, op: 'mul' } ]},
	{ id: 3775, levels: 1, name: 'Draconic Leather Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.0041, op: 'mul' },
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'maxMp', val: 74, op: 'add' },
		{ stat: 'weightPenalty', val: 960, op: 'add' } ]},
	{ id: 3776, levels: 1, name: 'Draconic Leather Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.0041, op: 'mul' },
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'maxMp', val: 74, op: 'add' },
		{ stat: 'weightPenalty', val: 960, op: 'add' } ]},
	{ id: 3777, levels: 1, name: 'Draconic Leather Armor', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'weightPenalty', val: 8159, op: 'add' },
		{ stat: 'maxMp', val: 630, op: 'add' },
		{ stat: 'pAtk', val: 1.058, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.058, op: 'mul' } ]},
	{ id: 3778, levels: 1, name: 'Draconic Leather Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.0062, op: 'mul' },
		{ stat: 'pAtk', val: 1.0062, op: 'mul' },
		{ stat: 'maxMp', val: 111, op: 'add' },
		{ stat: 'weightPenalty', val: 1440, op: 'add' } ]},
	{ id: 3779, levels: 1, name: 'Major Arcana Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0041, op: 'mul' },
		{ stat: 'runSpd', val: 1.16, op: 'add' },
		{ stat: 'cancel', val: 8, op: 'sub' },
		{ stat: 'weightPenalty', val: 960, op: 'add' },
		{ stat: 'stunVuln', val: 8.3, op: 'sub' } ]},
	{ id: 3780, levels: 1, name: 'Major Arcana Robe', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cancel', val: 21, op: 'sub' },
		{ stat: 'weightPenalty', val: 8159, op: 'add' },
		{ stat: 'mAtk', val: 1.1603, op: 'mul' },
		{ stat: 'runSpd', val: 1.0991, op: 'mul' },
		{ stat: 'stunVuln', val: 20.83, op: 'sub' } ]},
	{ id: 3781, levels: 1, name: 'Major Arcana Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0041, op: 'mul' },
		{ stat: 'runSpd', val: 1.16, op: 'add' },
		{ stat: 'cancel', val: 8, op: 'sub' },
		{ stat: 'weightPenalty', val: 960, op: 'add' },
		{ stat: 'stunVuln', val: 8.3, op: 'sub' } ]},
	{ id: 3782, levels: 1, name: 'Major Arcana Circlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0062, op: 'mul' },
		{ stat: 'runSpd', val: 1.175, op: 'add' },
		{ stat: 'cancel', val: 13, op: 'sub' },
		{ stat: 'weightPenalty', val: 1440, op: 'add' },
		{ stat: 'stunVuln', val: 12.5, op: 'sub' } ]},
	{ id: 3783, levels: 1, name: 'Imperial Crusader Gaiters', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0208, op: 'mul' },
		{ stat: 'maxHp', val: 185, op: 'add' },
		{ stat: 'sleepVuln', val: 17.5, op: 'sub' },
		{ stat: 'rootVuln', val: 17.5, op: 'sub' } ]},
	{ id: 3784, levels: 1, name: 'Imperial Crusader Gauntlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0083, op: 'mul' },
		{ stat: 'maxHp', val: 74, op: 'add' },
		{ stat: 'sleepVuln', val: 7, op: 'sub' },
		{ stat: 'rootVuln', val: 7, op: 'sub' } ]},
	{ id: 3785, levels: 1, name: 'Imperial Crusader Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0083, op: 'mul' },
		{ stat: 'maxHp', val: 74, op: 'add' },
		{ stat: 'sleepVuln', val: 7, op: 'sub' },
		{ stat: 'rootVuln', val: 7, op: 'sub' } ]},
	{ id: 3786, levels: 1, name: 'Imperial Crusader Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.02, op: 'mul' } ]},
	{ id: 3787, levels: 1, name: 'Imperial Crusader Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0125, op: 'mul' },
		{ stat: 'maxHp', val: 111, op: 'add' },
		{ stat: 'sleepVuln', val: 10.5, op: 'sub' },
		{ stat: 'rootVuln', val: 10.5, op: 'sub' } ]},
	{ id: 3788, levels: 1, name: 'Imperial Crusader Breastplate', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 889, op: 'add' },
		{ stat: 'pDef', val: 1.0724, op: 'mul' },
		{ stat: 'rootVuln', val: 28, op: 'sub' },
		{ stat: 'sleepVuln', val: 28, op: 'sub' } ]},
	{ id: 3789, levels: 1, name: 'Dynasty Breastplate', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 3.2, op: 'add' },
		{ stat: 'maxHp', val: 984, op: 'add' },
		{ stat: 'pDef', val: 1.0724, op: 'mul' } ]},
	{ id: 3790, levels: 1, name: 'Dynasty Gaiters', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0208, op: 'mul' },
		{ stat: 'maxHp', val: 205, op: 'add' },
		{ stat: 'darkRes', val: 2, op: 'add' } ]},
	{ id: 3791, levels: 1, name: 'Dynasty Gauntlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0083, op: 'mul' },
		{ stat: 'maxHp', val: 82, op: 'add' },
		{ stat: 'darkRes', val: 0.8, op: 'add' } ]},
	{ id: 3792, levels: 1, name: 'Dynasty Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0083, op: 'mul' },
		{ stat: 'maxHp', val: 82, op: 'add' },
		{ stat: 'darkRes', val: 0.8, op: 'add' } ]},
	{ id: 3793, levels: 1, name: 'Dynasty Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.02, op: 'mul' } ]},
	{ id: 3794, levels: 1, name: 'Dynasty Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0125, op: 'mul' },
		{ stat: 'maxHp', val: 123, op: 'add' },
		{ stat: 'darkRes', val: 1.2, op: 'add' } ]},
	{ id: 3795, levels: 1, name: 'Dynasty Leather Armor', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 3.4, op: 'add' },
		{ stat: 'darkRes', val: 3.2, op: 'add' },
		{ stat: 'maxMp', val: 492, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0477, op: 'mul' },
		{ stat: 'rEvas', val: 3.4, op: 'add' } ]},
	{ id: 3796, levels: 1, name: 'Dynasty Leather Leggings', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 0.79, op: 'add' },
		{ stat: 'rEvas', val: 0.79, op: 'add' },
		{ stat: 'maxHp', val: 205, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0068, op: 'mul' },
		{ stat: 'darkRes', val: 2, op: 'add' } ]},
	{ id: 3797, levels: 1, name: 'Dynasty Leather Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 0.31, op: 'add' },
		{ stat: 'rEvas', val: 0.31, op: 'add' },
		{ stat: 'maxHp', val: 82, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0027, op: 'mul' },
		{ stat: 'darkRes', val: 0.8, op: 'add' } ]},
	{ id: 3798, levels: 1, name: 'Dynasty Leather Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 0.47, op: 'add' },
		{ stat: 'rEvas', val: 0.47, op: 'add' },
		{ stat: 'maxHp', val: 123, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0041, op: 'mul' },
		{ stat: 'darkRes', val: 1.2, op: 'add' } ]},
	{ id: 3799, levels: 1, name: 'Dynasty Tunic', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 3800, levels: 1, name: 'Dynasty Stockings', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0208, op: 'mul' },
		{ stat: 'maxMp', val: 133, op: 'add' },
		{ stat: 'darkRes', val: 3.33, op: 'add' } ]},
	{ id: 3801, levels: 1, name: 'Dynasty Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0083, op: 'mul' },
		{ stat: 'maxMp', val: 53, op: 'add' },
		{ stat: 'darkRes', val: 1.33, op: 'add' } ]},
	{ id: 3802, levels: 1, name: 'Dynasty Shoes', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0083, op: 'mul' },
		{ stat: 'maxMp', val: 53, op: 'add' },
		{ stat: 'darkRes', val: 1.33, op: 'add' } ]},
	{ id: 3803, levels: 1, name: 'Dynasty Circlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0125, op: 'mul' },
		{ stat: 'maxMp', val: 80, op: 'add' },
		{ stat: 'darkRes', val: 2, op: 'add' } ]},
	{ id: 3804, levels: 1, name: 'Dynasty Silver Satin Tunic', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 3805, levels: 1, name: 'Dynasty Jewel Leather Mail', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 3.4, op: 'add' },
		{ stat: 'darkRes', val: 3.2, op: 'add' },
		{ stat: 'maxMp', val: 492, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0477, op: 'mul' },
		{ stat: 'rEvas', val: 3.4, op: 'add' } ]},
	{ id: 3806, levels: 1, name: 'Dynasty Platinum Plate', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 3.2, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'maxHp', val: 1023, op: 'add' },
		{ stat: 'pDef', val: 1.0724, op: 'mul' } ]},
	{ id: 3807, levels: 1, name: 'Adamantite Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 17, op: 'add' } ]},
	{ id: 3808, levels: 1, name: 'Adamantite Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 3.57, op: 'sub' } ]},
	{ id: 3809, levels: 1, name: 'Adamantite Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.0071, op: 'mul' } ]},
	{ id: 3810, levels: 1, name: 'Earring of Black Ore', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 1.71, op: 'add' } ]},
	{ id: 3811, levels: 1, name: 'Necklace of Black Ore', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 4.76, op: 'sub' } ]},
	{ id: 3812, levels: 1, name: 'Ring of Black Ore', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 9, op: 'add' } ]},
	{ id: 3813, levels: 1, name: 'Phoenix Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 21, op: 'add' } ]},
	{ id: 3814, levels: 1, name: 'Phoenix Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.0071, op: 'mul' } ]},
	{ id: 3815, levels: 1, name: 'Phoenix Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.01, op: 'mul' } ]},
	{ id: 3816, levels: 1, name: 'Majestic Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.01, op: 'mul' } ]},
	{ id: 3817, levels: 1, name: 'Majestic Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 11, op: 'add' } ]},
	{ id: 3818, levels: 1, name: 'Majestic Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 5.71, op: 'sub' } ]},
	{ id: 3819, levels: 1, name: 'Tateossian Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 7.61, op: 'sub' } ]},
	{ id: 3820, levels: 1, name: 'Tateossian Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: 1.14, op: 'add' } ]},
	{ id: 3821, levels: 1, name: 'Tateossian Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 20, op: 'add' } ]},
	{ id: 3822, levels: 1, name: 'Dynasty Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 30, op: 'add' } ]},
	{ id: 3823, levels: 1, name: 'Dynasty Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 1.14, op: 'add' } ]},
	{ id: 3824, levels: 1, name: 'Dynasty Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 5, op: 'sub' } ]},
	{ id: 3825, levels: 3, name: 'Sword of Might', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [17.42, 22.1, 42.12], op: 'add' } ]},
	{ id: 3826, levels: 2, name: 'Sword of Boost HP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: [319, 492], op: 'add' } ]},
	{ id: 3827, levels: 1, name: 'Sword of Critical Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: 220, op: 'add' } ]},
	{ id: 3828, levels: 1, name: 'Sword of Critical Chance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 54.4, op: 'add' } ]},
	{ id: 3829, levels: 1, name: 'Sword of Stun', target: 'SELF', operateType: 'P', trigger: 5665, effectType: 'ChanceSkillTrigger' },
	{ id: 3830, levels: 3, name: 'Rapier of Might', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [16.25, 20.62, 39.3], op: 'add' } ]},
	{ id: 3831, levels: 2, name: 'Rapier of Boost HP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: [319, 444], op: 'add' } ]},
	{ id: 3832, levels: 1, name: 'Rapier of Critical Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: 169, op: 'add' } ]},
	{ id: 3833, levels: 1, name: 'Rapier of Critical Chance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 54.4, op: 'add' } ]},
	{ id: 3834, levels: 1, name: 'Rapier of Stun', target: 'SELF', operateType: 'P', trigger: 5666, effectType: 'ChanceSkillTrigger' },
	{ id: 3835, levels: 3, name: 'Dual-Blade Weapon of Might', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [21.2, 26.9, 51.26], op: 'add' } ]},
	{ id: 3836, levels: 2, name: 'Dual-Blade Weapon of Boost HP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: [319, 444], op: 'add' } ]},
	{ id: 3837, levels: 1, name: 'Dual-Blade Weapon of Critical Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: 268, op: 'add' } ]},
	{ id: 3838, levels: 1, name: 'Dual-Blade Weapon of Critical Chance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 54.4, op: 'add' } ]},
	{ id: 3839, levels: 1, name: 'Dual-Blade Weapon of Stun', target: 'SELF', operateType: 'P', trigger: 5667, effectType: 'ChanceSkillTrigger' },
	{ id: 3840, levels: 2, name: 'Two-handed Sword of Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' } ]},
	{ id: 3841, levels: 1, name: 'Two-handed Sword of Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 3.9, op: 'add' } ]},
	{ id: 3842, levels: 1, name: 'Two-handed Sword of Vampiric Rage', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'absorbDam', val: 3, op: 'add' } ]},
	{ id: 3843, levels: 1, name: 'Two-handed Sword of Boost HP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 398, op: 'add' } ]},
	{ id: 3844, levels: 1, name: 'Two-handed Sword of Critical Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: 340, op: 'add' } ]},
	{ id: 3845, levels: 2, name: 'Two-handed Sword of Critical Chance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 54.4, op: 'add' } ]},
	{ id: 3846, levels: 2, name: 'Ancient Sword of Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' } ]},
	{ id: 3847, levels: 1, name: 'Ancient Sword of Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 3.9, op: 'add' } ]},
	{ id: 3848, levels: 1, name: 'Ancient Sword of Vampiric Rage', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'absorbDam', val: 3, op: 'add' } ]},
	{ id: 3849, levels: 1, name: 'Ancient Sword of Boost HP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 398, op: 'add' } ]},
	{ id: 3850, levels: 1, name: 'Ancient Sword of Critical Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: 303, op: 'add' } ]},
	{ id: 3851, levels: 2, name: 'Ancient Sword of Critical Chance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 54.4, op: 'add' } ]},
	{ id: 3852, levels: 3, name: 'Sword of Mana Boost', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: [187, 289, 334], op: 'add' } ]},
	{ id: 3853, levels: 2, name: 'Sword of Mana Regeneration', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.05, op: 'mul' } ]},
	{ id: 3854, levels: 1, name: 'Sword of Empower', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 21.77, op: 'add' } ]},
	{ id: 3856, levels: 1, name: 'Sword of Divine Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 37, op: 'add' } ]},
	{ id: 3857, levels: 1, name: 'Sword of Clarity', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 3858, levels: 3, name: 'Dagger of Avoid', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 3.3 , op: 'add' } ]},
	{ id: 3859, levels: 2, name: 'Dagger of Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' } ]},
	{ id: 3860, levels: 1, name: 'Dagger of Regeneration', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: 1.05, op: 'mul' } ]},
	{ id: 3861, levels: 1, name: 'Dagger of Poison', target: 'SELF', operateType: 'P', trigger: 5668, effectType: 'ChanceSkillTrigger' },
	{ id: 3862, levels: 1, name: 'Dagger of Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 3.3, op: 'add' } ]},
	{ id: 3863, levels: 4, name: 'Bow of Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 3.3, op: 'add' } ]},
	{ id: 3864, levels: 2, name: 'Bow of Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' } ]},
	{ id: 3865, levels: 1, name: 'Bow of Long Shot', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkRange', val: 100, op: 'add', using: 'Bow' } ]},
	{ id: 3866, levels: 1, name: 'Dynasty Leather Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 0.31, op: 'add' },
		{ stat: 'accCombat', val: 0.31, op: 'add' },
		{ stat: 'maxHp', val: 82, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.0027, op: 'mul' },
		{ stat: 'darkRes', val: 0.8, op: 'add' } ]},
	{ id: 3867, levels: 1, name: 'Bow of Boost HP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 444, op: 'add' } ]},
	{ id: 3868, levels: 4, name: 'Crossbow of Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 3.7, op: 'add' } ]},
	{ id: 3869, levels: 2, name: 'Crossbow of Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' } ]},
	{ id: 3870, levels: 1, name: 'Crossbow of Long Shot', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkRange', val: 100, op: 'add', using: 'Crossbow' } ]},
	{ id: 3872, levels: 1, name: 'Crossbow of Boost HP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 444, op: 'add' } ]},
	{ id: 3873, levels: 2, name: 'Polearm of Critical Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: [156, 377], op: 'add' } ]},
	{ id: 3874, levels: 1, name: 'Polearm of Critical Chance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 54.4, op: 'add' } ]},
	{ id: 3875, levels: 1, name: 'Polearm of Regeneration', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: 1.05, op: 'mul' } ]},
	{ id: 3876, levels: 1, name: 'Polearm of Stun', target: 'SELF', operateType: 'P', trigger: 5669, effectType: 'ChanceSkillTrigger' },
	{ id: 3877, levels: 2, name: 'Polearm of Boost HP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: [319, 492], op: 'add' } ]},
	{ id: 3878, levels: 1, name: 'Polearm of Might', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 31.25, op: 'add' } ]},
	{ id: 3879, levels: 3, name: 'Fist Weapon of Might', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [21.2, 26.9, 51.26], op: 'add' } ]},
	{ id: 3880, levels: 2, name: 'Fist Weapon of Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' } ]},
	{ id: 3881, levels: 1, name: 'Fist Weapon of Boost HP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: 372, op: 'add' } ]},
	{ id: 3882, levels: 1, name: 'Fist Weapon of Stun', target: 'SELF', operateType: 'P', trigger: 5670, effectType: 'ChanceSkillTrigger' },
	{ id: 3883, levels: 1, name: 'Fist Weapon of Critical Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: 528, op: 'add' } ]},
	{ id: 3884, levels: 3, name: 'Blunt Weapon of Boost HP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: [294, 345, 511], op: 'add' } ]},
	{ id: 3885, levels: 2, name: 'Blunt Weapon of Stun', target: 'SELF', operateType: 'P', trigger: [
		5671, 5672], effectType: 'ChanceSkillTrigger' },
	{ id: 3886, levels: 1, name: 'Blunt Weapon of Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' } ]},
	{ id: 3887, levels: 1, name: 'Blunt Weapon of Regeneration', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: 1.05, op: 'mul' } ]},
	{ id: 3888, levels: 1, name: 'Blunt Weapon of Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 4.2, op: 'add' } ]},
	{ id: 3889, levels: 3, name: 'Blunt Weapon of Empower', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: [21.77, 27.63, 45.81], op: 'add' } ]},
	{ id: 3890, levels: 1, name: 'Blunt Weapon of Mana Boost', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 289, op: 'add' } ]},
	{ id: 3891, levels: 2, name: 'Blunt Weapon of Boost HP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: [319, 492], op: 'add' } ]},
	{ id: 3892, levels: 1, name: 'Blunt Weapon of Clarity', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 3893, levels: 1, name: 'Blunt Weapon of Mana Regeneration', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.05, op: 'mul' } ]},
	{ id: 3894, levels: 1, name: 'Two-handed Blunt Weapon of Critical Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtkAdd', val: 415, op: 'add' } ]},
	{ id: 3895, levels: 3, name: 'Two-handed Blunt Weapon of Critical Chance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 52.2, op: 'add' } ]},
	{ id: 3896, levels: 2, name: 'Two-handed Blunt Weapon of Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' } ]},
	{ id: 3897, levels: 1, name: 'Two-handed Blunt Weapon of Might', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 32.97, op: 'add' } ]},
	{ id: 3898, levels: 1, name: 'Two-handed Blunt Weapon of Guidance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 4.2, op: 'add' } ]},
	{ id: 3899, levels: 3, name: 'Staff of Empower', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: [21.77, 27.63, 45.81], op: 'add' } ]},
	{ id: 3900, levels: 2, name: 'Staff of Divine Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: [33, 43], op: 'add' } ]},
	{ id: 3901, levels: 2, name: 'Staff of Mana Boost', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: [239, 289], op: 'add' } ]},
	{ id: 3902, levels: 1, name: 'Staff of Clarity', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 3904, levels: 1, name: 'Augment Option - Divine Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyPower', val: 8.57, op: 'add' } ]},
	{ id: 3905, levels: 1, name: 'Augment Option - Dark Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkPower', val: 8.57, op: 'add' } ]},
	{ id: 3906, levels: 1, name: 'Augment Option - Fire Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'firePower', val: 8.57, op: 'add' } ]},
	{ id: 3907, levels: 1, name: 'Augment Option - Water Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterPower', val: 8.57, op: 'add' } ]},
	{ id: 3908, levels: 1, name: 'Augment Option - Wind Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windPower', val: 8.57, op: 'add' } ]},
	{ id: 3909, levels: 1, name: 'Augment Option - Earth Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthPower', val: 8.57, op: 'add' } ]},
	{ id: 3910, levels: 1, name: 'Augment Option - Divine Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: 8.57, op: 'add' } ]},
	{ id: 3911, levels: 1, name: 'Augment Option - Dark Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 8.57, op: 'add' } ]},
	{ id: 3912, levels: 1, name: 'Augment Option - Fire Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 8.57, op: 'add' } ]},
	{ id: 3913, levels: 1, name: 'Augment Option - Water Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: 8.57, op: 'add' } ]},
	{ id: 3914, levels: 1, name: 'Augment Option - Wind Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: 8.57, op: 'add' } ]},
	{ id: 3915, levels: 1, name: 'Augment Option - Earth Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: 8.57, op: 'add' } ]},
	{ id: 3916, levels: 1, name: 'Augment Option - Divine Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyPower', val: 8.57, op: 'add' } ]},
	{ id: 3917, levels: 1, name: 'Augment Option - Dark Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkPower', val: 8.57, op: 'add' } ]},
	{ id: 3918, levels: 1, name: 'Augment Option - Fire Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'firePower', val: 8.57, op: 'add' } ]},
	{ id: 3919, levels: 1, name: 'Augment Option - Water Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterPower', val: 8.57, op: 'add' } ]},
	{ id: 3920, levels: 1, name: 'Augment Option - Wind Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windPower', val: 8.57, op: 'add' } ]},
	{ id: 3921, levels: 1, name: 'Augment Option - Earth Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthPower', val: 8.57, op: 'add' } ]},
	{ id: 3922, levels: 1, name: 'Augment Option - Divine Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: 8.57, op: 'add' } ]},
	{ id: 3923, levels: 1, name: 'Augment Option - Dark Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 8.57, op: 'add' } ]},
	{ id: 3924, levels: 1, name: 'Augment Option - Fire Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 8.57, op: 'add' } ]},
	{ id: 3925, levels: 1, name: 'Augment Option - Water Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: 8.57, op: 'add' } ]},
	{ id: 3926, levels: 1, name: 'Augment Option - Wind Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: 8.57, op: 'add' } ]},
	{ id: 3927, levels: 1, name: 'Augment Option - Earth Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: 8.57, op: 'add' } ]},
	{ id: 3928, levels: 1, name: 'Augment Option - Divine Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyPower', val: 8.57, op: 'add' } ]},
	{ id: 3929, levels: 1, name: 'Augment Option - Dark Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkPower', val: 8.57, op: 'add' } ]},
	{ id: 3930, levels: 1, name: 'Augment Option - Fire Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'firePower', val: 8.57, op: 'add' } ]},
	{ id: 3931, levels: 1, name: 'Augment Option - Water Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterPower', val: 8.57, op: 'add' } ]},
	{ id: 3932, levels: 1, name: 'Augment Option - Wind Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windPower', val: 8.57, op: 'add' } ]},
	{ id: 3933, levels: 1, name: 'Augment Option - Earth Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthPower', val: 8.57, op: 'add' } ]},
	{ id: 3934, levels: 1, name: 'Augment Option - Divine Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: 8.57, op: 'add' } ]},
	{ id: 3935, levels: 1, name: 'Augment Option - Dark Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 8.57, op: 'add' } ]},
	{ id: 3936, levels: 1, name: 'Augment Option - Fire Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 8.57, op: 'add' } ]},
	{ id: 3937, levels: 1, name: 'Augment Option - Water Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: 8.57, op: 'add' } ]},
	{ id: 3938, levels: 1, name: 'Augment Option - Wind Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: 8.57, op: 'add' } ]},
	{ id: 3939, levels: 1, name: 'Augment Option - Earth Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: 8.57, op: 'add' } ]},
	{ id: 3940, levels: 1, name: 'Augment Option - Divine Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyPower', val: 8.57, op: 'add' } ]},
	{ id: 3941, levels: 1, name: 'Augment Option - Dark Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkPower', val: 8.57, op: 'add' } ]},
	{ id: 3942, levels: 1, name: 'Augment Option - Fire Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'firePower', val: 8.57, op: 'add' } ]},
	{ id: 3943, levels: 1, name: 'Augment Option - Water Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterPower', val: 8.57, op: 'add' } ]},
	{ id: 3944, levels: 1, name: 'Augment Option - Wind Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windPower', val: 8.57, op: 'add' } ]},
	{ id: 3945, levels: 1, name: 'Augment Option - Earth Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthPower', val: 8.57, op: 'add' } ]},
	{ id: 3946, levels: 1, name: 'Augment Option - Divine Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: 8.57, op: 'add' } ]},
	{ id: 3947, levels: 1, name: 'Augment Option - Dark Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 8.57, op: 'add' } ]},
	{ id: 3948, levels: 1, name: 'Augment Option - Fire Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 8.57, op: 'add' } ]},
	{ id: 3949, levels: 1, name: 'Augment Option - Water Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: 8.57, op: 'add' } ]},
	{ id: 3950, levels: 1, name: 'Augment Option - Wind Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: 8.57, op: 'add' } ]},
	{ id: 3951, levels: 1, name: 'Augment Option - Earth Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: 8.57, op: 'add' } ]},
	{ id: 3952, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunProf', val: 1.71, op: 'add' } ]},
	{ id: 3953, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedProf', val: 1.71, op: 'add' } ]},
	{ id: 3954, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonProf', val: 1.71, op: 'add' } ]},
	{ id: 3955, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepProf', val: 1.71, op: 'add' } ]},
	{ id: 3956, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeProf', val: 1.71, op: 'add' } ]},
	{ id: 3957, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementProf', val: 1.71, op: 'add' } ]},
	{ id: 3958, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 1.71, op: 'sub' } ]},
	{ id: 3959, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 1.71, op: 'sub' } ]},
	{ id: 3960, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 1.71, op: 'sub' } ]},
	{ id: 3961, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 1.71, op: 'sub' } ]},
	{ id: 3962, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 1.71, op: 'sub' } ]},
	{ id: 3963, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 1.71, op: 'sub' } ]},
	{ id: 3964, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunProf', val: 2.14, op: 'add' } ]},
	{ id: 3965, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedProf', val: 2.14, op: 'add' } ]},
	{ id: 3966, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonProf', val: 2.14, op: 'add' } ]},
	{ id: 3967, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepProf', val: 2.14, op: 'add' } ]},
	{ id: 3968, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeProf', val: 2.14, op: 'add' } ]},
	{ id: 3969, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementProf', val: 2.14, op: 'add' } ]},
	{ id: 3970, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 2.14, op: 'sub' } ]},
	{ id: 3971, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 2.14, op: 'sub' } ]},
	{ id: 3972, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 2.14, op: 'sub' } ]},
	{ id: 3973, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 2.14, op: 'sub' } ]},
	{ id: 3974, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 2.14, op: 'sub' } ]},
	{ id: 3975, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 2.14, op: 'sub' } ]},
	{ id: 3976, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunProf', val: 3, op: 'add' } ]},
	{ id: 3977, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedProf', val: 3, op: 'add' } ]},
	{ id: 3978, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonProf', val: 3, op: 'add' } ]},
	{ id: 3979, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepProf', val: 3, op: 'add' } ]},
	{ id: 3980, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeProf', val: 3, op: 'add' } ]},
	{ id: 3981, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementProf', val: 3, op: 'add' } ]},
	{ id: 3982, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 3, op: 'sub' } ]},
	{ id: 3983, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 3, op: 'sub' } ]},
	{ id: 3984, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 3, op: 'sub' } ]},
	{ id: 3985, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 3, op: 'sub' } ]},
	{ id: 3986, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 3, op: 'sub' } ]},
	{ id: 3987, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 3, op: 'sub' } ]},
	{ id: 3988, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunProf', val: 3.42, op: 'add' } ]},
	{ id: 3989, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedProf', val: 3.42, op: 'add' } ]},
	{ id: 3990, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonProf', val: 3.42, op: 'add' } ]},
	{ id: 3991, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepProf', val: 3.42, op: 'add' } ]},
	{ id: 3992, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeProf', val: 3.42, op: 'add' } ]},
	{ id: 3993, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementProf', val: 3.42, op: 'add' } ]},
	{ id: 3994, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 3.42, op: 'sub' } ]},
	{ id: 3995, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 3.42, op: 'sub' } ]},
	{ id: 3996, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 3.42, op: 'sub' } ]},
	{ id: 3997, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 3.42, op: 'sub' } ]},
	{ id: 3998, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 3.42, op: 'sub' } ]},
	{ id: 3999, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 3.42, op: 'sub' } ]},
	{ id: 4003, levels: 1, name: 'Golem Body', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bowWpnVuln', val: 0.3, op: 'mul' },
		{ stat: 'daggerWpnVuln', val: 0.7, op: 'mul' },
		{ stat: 'dualDaggerWpnVuln', val: 0.7, op: 'mul' },
		{ stat: 'bluntWpnVuln', val: 1.1, op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: 1.1, op: 'mul' } ]},
	{ id: 4004, levels: 1, name: 'Fragile Skull', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bluntWpnVuln', val: 1.1, op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: 1.1, op: 'mul' } ]},
	{ id: 4005, levels: 1, name: 'Floating Target', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: 15, op: 'sub' },
		{ stat: 'bowWpnVuln', val: 1.1, op: 'mul' } ]},
	{ id: 4006, levels: 1, name: 'Blazing Log', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 15, op: 'sub' },
		{ stat: 'poisonVuln', val: 50, op: 'sub' } ]},
	{ id: 4007, levels: 1, name: 'Immortal Life', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: 20, op: 'add' },
		{ stat: 'darkPower', val: 20, op: 'sub' } ]},
	{ id: 4008, levels: 1, name: 'Insect Skin', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 15, op: 'sub' } ]},
	{ id: 4021, levels: 1, name: 'Queen Ant', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bowWpnVuln', val: 0.2, op: 'mul' } ]},
	{ id: 4028, levels: 3, name: 'NPC Might', target: 'SELF', operateType: 'A2', effectType: 'Grow', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4029, levels: 3, name: 'NPC Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4030, levels: 3, name: 'NPC Clan Might', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4031, levels: 3, name: 'NPC Clan Aegis', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4045, levels: 1, name: 'Resist Full Magic Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: 100, op: 'sub' },
		{ stat: 'sleepVuln', val: 100, op: 'sub' },
		{ stat: 'stunVuln', val: 100, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 100, op: 'sub' },
		{ stat: 'derangementVuln', val: 100, op: 'sub' },
		{ stat: 'bossVuln', val: 100, op: 'sub' },
		{ stat: 'physicalBlockadeVuln', val: 100, op: 'sub' } ]},
	{ id: 4048, levels: 3, name: 'NPC Dash', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up_special', effects: [
		{ stat: 'runSpd', val: [1.5, 1.8, 2], op: 'mul' } ]},
	{ id: 4057, levels: 1, name: 'Insect Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef-insects', val: 1.15, op: 'mul' } ]},
	{ id: 4058, levels: 1, name: 'Plant Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef-animals', val: 1.15, op: 'mul' } ]},
	{ id: 4059, levels: 1, name: 'Animal Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef-plants', val: 1.15, op: 'mul' } ]},
	{ id: 4060, levels: 1, name: 'Beast Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef-monsters', val: 1.15, op: 'mul' } ]},
	{ id: 4061, levels: 1, name: 'Dragon Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef-dragons', val: 1.15, op: 'mul' } ]},
	{ id: 4062, levels: 1, name: 'Orfen', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bowWpnVuln', val: 0.2, op: 'mul' } ]},
	{ id: 4071, levels: 5, name: 'Resist Archery', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bowWpnVuln', val: [0.9, 0.8, 0.7, 0.6, 0.5], op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: [0.9, 0.8, 0.7, 0.6, 0.5], op: 'mul' } ]},
	{ id: 4072, levels: 12, name: 'Shock', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 4074, levels: 2, name: 'NPC Haste', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 4084, levels: 11, name: 'Resist Physical Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [1.05, 1.11, 1.17, 1.25, 1.33, 1.43, 1.67, 2.0, 3.33, 10, 1001], op: 'mul' } ]},
	{ id: 4085, levels: 1, name: 'Critical Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtk', val: 1.25, op: 'mul' } ]},
	{ id: 4086, levels: 1, name: 'Critical Chance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 0.5, op: 'basemul' } ]},
	{ id: 4089, levels: 1, name: 'NPC Bear Spirit Totem', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'possession', effects: [
		{ stat: 'runSpd', val: 0.85, op: 'mul' },
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 4090, levels: 1, name: 'NPC Wolf Spirit Totem', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'possession', effects: [
		{ stat: 'runSpd', val: 1.4, op: 'mul' } ]},
	{ id: 4091, levels: 3, name: 'NPC Ogre Spirit Totem', target: 'SELF', operateType: 'A2', effectType: 'Grow', abnormalType: 'possession', effects: [
		{ stat: 'runSpd', val: [0.85, 0.85, 0.9], op: 'mul' },
		{ stat: 'pAtk', val: [1.05, 1.15, 1.15], op: 'mul' },
		{ stat: 'pDef', val: [1.1, 1.3, 1.3], op: 'mul' },
		{ stat: 'maxHp', val: [1.14, 1.21, 1.21], op: 'mul' },
		{ stat: 'rEvas', val: [10, 10, 5], op: 'sub' },
		{ stat: 'accCombat', val: [3, 7, 7], op: 'add' } ]},
	{ id: 4092, levels: 1, name: 'NPC Puma Spirit Totem', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'possession', effects: [
		{ stat: 'pAtkSpd', val: 1.3, op: 'mul' },
		{ stat: 'rEvas', val: 4, op: 'add' },
		{ stat: 'pDef', val: 0.8, op: 'mul' } ]},
	{ id: 4093, levels: 1, name: 'Evasion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 4095, levels: 1, name: 'Damage Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'reflectDam', val: 20, op: 'add' } ]},
	{ id: 4096, levels: 3, name: 'NPC Hawkeye', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'ab_hawk_eye', effects: [
		{ stat: 'accCombat', val: [6, 8, 10], op: 'add' },
		{ stat: 'pDef', val: 0.9, op: 'mul' } ]},
	{ id: 4097, levels: 12, name: 'NPC Chant of Life', target: 'ONE', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_others' },
	{ id: 4099, levels: 2, name: 'NPC Berserk', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' },
		{ stat: 'rEvas', val: [5, 8], op: 'sub' } ]},
	{ id: 4103, levels: 2, name: 'NPC Ultimate Evasion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up_special', effects: [
		{ stat: 'rEvas', val: [20, 25], op: 'add' } ]},
	{ id: 4109, levels: 1, name: 'Curse of Antharas', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'antaras_debuff', effects: [
		{ stat: 'pAtk', val: 0.85, op: 'mul' },
		{ stat: 'mAtk', val: 0.85, op: 'mul' },
		{ stat: 'pDef', val: 0.6, op: 'mul' },
		{ stat: 'mDef', val: 0.6, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.75, op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.75, op: 'mul' },
		{ stat: 'runSpd', val: 0.5, op: 'mul' },
		{ stat: 'accCombat', val: 19, op: 'sub' },
		{ stat: 'rEvas', val: 19, op: 'sub' },
		{ stat: 'rCrit', val: 0.1, op: 'mul' } ]},
	{ id: 4116, levels: 10, name: 'Resist M.Atk', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: [1.05, 1.11, 1.17, 1.25, 1.33, 1.43, 1.67, 2, 3.33, 10], op: 'mul' } ]},
	{ id: 4121, levels: 12, name: 'Summoned Monster Magic Protection', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75, 100], op: 'sub' } ]},
	{ id: 4122, levels: 1, name: 'Antharas', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 80, op: 'sub' },
		{ stat: 'debuffImmunity', val: 1, op: 'set' } ]},
	{ id: 4125, levels: 1, name: 'Antharas Regeneration', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_down', effects: [
		{ stat: 'regHp', val: 0.05, op: 'mul' } ]},
	{ id: 4126, levels: 1, name: 'Reduction in recovery time', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'public_slot', effects: [
		{ stat: 'pReuse', val: 0.01, op: 'mul' } ]},
	{ id: 4163, levels: 12, name: 'NPC Self Damage Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'dmg_shield', effects: [
		{ stat: 'reflectDam', val: 20, op: 'add' } ]},
	{ id: 4172, levels: 12, name: 'Stun', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 4173, levels: 12, name: 'BOSS Might', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.5, op: 'mul' } ]},
	{ id: 4174, levels: 12, name: 'BOSS Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.5, op: 'mul' } ]},
	{ id: 4175, levels: 12, name: 'BOSS Haste', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.5, op: 'mul' } ]},
	{ id: 4176, levels: 12, name: 'BOSS Reflect Damage', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'dmg_shield', effects: [
		{ stat: 'reflectDam', val: 20, op: 'add' } ]},
	{ id: 4177, levels: 12, name: 'BOSS Cancel Magic', target: 'AURA', operateType: 'A1', effectType: 'CancelAll' },
	{ id: 4182, levels: 12, name: 'Poison', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'poison' },
	{ id: 4183, levels: 12, name: 'Decrease P. Atk.', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_down', effects: [
		{ stat: 'pAtk', val: [0.83, 0.8, 0.8, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77], op: 'mul' } ]},
	{ id: 4184, levels: 12, name: 'Decrease Atk. Spd.', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'attack_time_up', effects: [
		{ stat: 'pAtkSpd', val: [0.83, 0.8, 0.8, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77], op: 'mul' } ]},
	{ id: 4185, levels: 12, name: 'Sleep', target: 'AURA', operateType: 'A2', effectType: 'Sleep', abnormalType: 'sleep' },
	{ id: 4186, levels: 12, name: 'Hold', target: 'AURA', operateType: 'A2', effectType: 'Root', abnormalType: 'root_magically' },
	{ id: 4187, levels: 12, name: 'Decrease Speed', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'speed_down', effects: [
		{ stat: 'runSpd', val: [0.9, 0.8, 0.8, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7], op: 'mul' } ]},
	{ id: 4188, levels: 12, name: 'Bleed', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'bleeding' },
	{ id: 4189, levels: 12, name: 'Paralysis', target: 'AURA', operateType: 'A2', effectType: 'Paralyze', abnormalType: 'paralyze' },
	{ id: 4190, levels: 12, name: 'Decrease MP', target: 'AURA', operateType: 'A2', effectType: 'ManaDamOverTime', abnormalType: 'dot_mp' },
	{ id: 4210, levels: 12, name: 'Life Chant', target: 'ONE', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_others' },
	{ id: 4211, levels: 12, name: 'BOSS Might', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.5, op: 'mul' } ]},
	{ id: 4212, levels: 12, name: 'BOSS Shield', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.5, op: 'mul' } ]},
	{ id: 4213, levels: 12, name: 'BOSS Haste', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.5, op: 'mul' } ]},
	{ id: 4214, levels: 12, name: 'BOSS Reflect Damage', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'dmg_shield', effects: [
		{ stat: 'reflectDam', val: 20, op: 'add' } ]},
	{ id: 4223, levels: 1, name: 'Face Chance: Night to Day', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'public_slot' },
	{ id: 4224, levels: 1, name: 'Face Chance: Day to Night', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'public_slot' },
	{ id: 4225, levels: 5, name: 'Resist Shock', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: [10, 20, 30, 40, 50], op: 'sub' } ]},
	{ id: 4226, levels: 1, name: 'Ban Heal', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: 0, op: 'mul' } ]},
	{ id: 4227, levels: 1, name: 'Zaken Regeneration', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: 20, op: 'mul' } ]},
	{ id: 4233, levels: 1, name: 'Vampiric Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'absorbDam', val: 15, op: 'add' } ]},
	{ id: 4238, levels: 1, name: 'Increase Re-use Time', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'reuse_delay_up', effects: [
		{ stat: 'pReuse', val: 3.0, op: 'mul' },
		{ stat: 'mReuse', val: 3.0, op: 'mul' } ]},
	{ id: 4239, levels: 1, name: 'Antharas Regeneration', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_down', effects: [
		{ stat: 'regHp', val: 0.4, op: 'mul' } ]},
	{ id: 4240, levels: 1, name: 'Antharas Regeneration', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_down', effects: [
		{ stat: 'regHp', val: 0.7, op: 'mul' } ]},
	{ id: 4241, levels: 1, name: 'Antharas Regeneration', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_down', effects: [
		{ stat: 'regHp', val: 1, op: 'mul' } ]},
	{ id: 4242, levels: 1, name: 'Zaken Regeneration', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_up' },
	{ id: 4245, levels: 1, name: 'Mimic of Wrath', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'public_slot', effects: [
		{ stat: 'pAtkSpd', val: 1.42, op: 'mul' },
		{ stat: 'pDef', val: 1.76, op: 'mul' },
		{ stat: 'mDef', val: 1.76, op: 'mul' } ]},
	{ id: 4246, levels: 1, name: 'Strong in \'nan\' activity magic DOT', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bowWpnVuln', val: 0.5, op: 'mul' },
		{ stat: 'mDef', val: 2.0, op: 'mul' },
		{ stat: 'bleedVuln', val: 50, op: 'sub' } ]},
	{ id: 4256, levels: 1, name: '100% Stun Resistance.', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 100, op: 'sub' } ]},
	{ id: 4262, levels: 2, name: 'Holiday Wind Walk', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 4263, levels: 1, name: 'Holiday Haste', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 4264, levels: 1, name: 'Holiday Empower', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.55, op: 'mul' } ]},
	{ id: 4265, levels: 3, name: 'Holiday Might', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 4266, levels: 3, name: 'Holiday Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 4270, levels: 4, name: 'Weight Penalty', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: [0.5, 0.5, 0.5, 0.5], op: 'mul' },
		{ stat: 'regMp', val: [0.5, 0.5, 0.5, 0.5], op: 'mul' },
		{ stat: 'runSpd', val: [1, 0.5, 0.5, 0], op: 'mul' } ]},
	{ id: 4272, levels: 1, name: 'Greater Resist Archery Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bowWpnVuln', val: 0.3, op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: 0.3, op: 'mul' } ]},
	{ id: 4273, levels: 5, name: 'Resist Dagger', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'daggerWpnVuln', val: [0.9, 0.8, 0.7, 0.6, 0.5], op: 'mul' },
		{ stat: 'dualDaggerWpnVuln', val: [0.9, 0.8, 0.7, 0.6, 0.5], op: 'mul' },
		{ stat: 'rapierWpnVuln', val: [0.9, 0.8, 0.7, 0.6, 0.5], op: 'mul' } ]},
	{ id: 4274, levels: 5, name: 'Blunt Attack Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bluntWpnVuln', val: [1.11, 1.25, 1.43, 1.67, 2], op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: [1.11, 1.25, 1.43, 1.67, 2], op: 'mul' } ]},
	{ id: 4276, levels: 5, name: 'Archery Attack Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bowWpnVuln', val: [1.11, 1.25, 1.43, 1.67, 2], op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: [1.11, 1.25, 1.43, 1.67, 2], op: 'mul' } ]},
	{ id: 4277, levels: 5, name: 'Resist Poison', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: [10, 20, 30, 40, 50], op: 'sub' } ]},
	{ id: 4278, levels: 1, name: 'Dark Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkPower', val: 20, op: 'add' } ]},
	{ id: 4283, levels: 1, name: 'Greater Resist Magic Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 2, op: 'mul' } ]},
	{ id: 4284, levels: 5, name: 'Resist Bleeding', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: [10, 20, 30, 40, 50], op: 'sub' } ]},
	{ id: 4285, levels: 5, name: 'Resist Sleep', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: [10, 20, 30, 40, 50], op: 'sub' } ]},
	{ id: 4286, levels: 1, name: 'Greater Resist Sleep', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 95, op: 'sub' } ]},
	{ id: 4287, levels: 5, name: 'Resist Hold', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: [10, 20, 30, 40, 50], op: 'sub' } ]},
	{ id: 4288, levels: 1, name: 'Greater Resist Hold', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: 95, op: 'sub' } ]},
	{ id: 4317, levels: 5, name: 'Increase Rage Might', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'rage_might', effects: [
		{ stat: 'pAtk', val: [1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4318, levels: 1, name: 'Ultimate Buff', target: 'SELF', operateType: 'A2', effectType: 'Grow', abnormalType: 'ultimate_buff', effects: [
		{ stat: 'pAtk', val: 1.83, op: 'mul' },
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'add' },
		{ stat: 'pDef', val: 1.83, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' },
		{ stat: 'rCrit', val: 0.3, op: 'basemul' },
		{ stat: 'mDef', val: 5, op: 'mul' } ]},
	{ id: 4322, levels: 1, name: 'Wind Walk for Beginners', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 4323, levels: 1, name: 'Shield for Beginners', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 4324, levels: 1, name: 'Bless the Body for Beginners', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 4325, levels: 1, name: 'Vampiric Rage for Beginners', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 4326, levels: 1, name: 'Regeneration for Beginners', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: 1.2, op: 'mul' } ]},
	{ id: 4327, levels: 1, name: 'Haste for Beginners', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 4328, levels: 1, name: 'Bless the Soul for Beginners', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 4329, levels: 1, name: 'Acumen for Beginners', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 4330, levels: 1, name: 'Concentration for Beginners', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'cancel_prob_down', effects: [
		{ stat: 'cancel', val: 18, op: 'sub' } ]},
	{ id: 4331, levels: 1, name: 'Empower for Beginners', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.55, op: 'mul' } ]},
	{ id: 4332, levels: 1, name: 'Mental Aegis', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: 100, op: 'sub' },
		{ stat: 'sleepVuln', val: 100, op: 'sub' },
		{ stat: 'derangementVuln', val: 100, op: 'sub' } ]},
	{ id: 4333, levels: 5, name: 'Resist Dark Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: [10, 20, 30, 40, 50], op: 'add' } ]},
	{ id: 4335, levels: 1, name: 'Sacred Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyPower', val: 20, op: 'add' } ]},
	{ id: 4336, levels: 5, name: 'Dark Attack Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: [11, 25, 43, 67, 100], op: 'sub' } ]},
	{ id: 4337, levels: 5, name: 'Resist Sacred Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: [10, 20, 30, 40, 50], op: 'add' } ]},
	{ id: 4340, levels: 1, name: 'Ultimate Buff, 2nd', target: 'SELF', operateType: 'A2', effectType: 'Grow', abnormalType: 'ultimate_buff', effects: [
		{ stat: 'pAtk', val: 5, op: 'mul' } ]},
	{ id: 4341, levels: 1, name: 'Ultimate Buff, 3rd', target: 'SELF', operateType: 'A2', effectType: 'Grow', abnormalType: 'ultimate_buff', effects: [
		{ stat: 'pDef', val: 5, op: 'mul' },
		{ stat: 'mDef', val: 5, op: 'mul' } ]},
	{ id: 4342, levels: 2, name: 'Clan Hall: Wind Walk', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [20, 33], op: 'add' } ]},
	{ id: 4343, levels: 3, name: 'Clan Hall: Decrease Weight', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'decrease_weight_penalty', effects: [
		{ stat: 'weightPenalty', val: [3000, 6000, 9000], op: 'add' } ]},
	{ id: 4344, levels: 3, name: 'Clan Hall: Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4345, levels: 3, name: 'Clan Hall: Might', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4346, levels: 4, name: 'Clan Hall: Mental Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'resist_derangement', effects: [
		{ stat: 'rootVuln', val: [20, 30, 40, 50], op: 'sub' },
		{ stat: 'sleepVuln', val: [20, 30, 40, 50], op: 'sub' },
		{ stat: 'derangementVuln', val: [20, 30, 40, 50], op: 'sub' } ]},
	{ id: 4347, levels: 6, name: 'Clan Hall: Blessed Body', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4348, levels: 6, name: 'Clan Hall: Blessed Soul', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4349, levels: 2, name: 'Clan Hall: Magic Barrier', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: [1.23, 1.3], op: 'mul' } ]},
	{ id: 4350, levels: 4, name: 'Clan Hall: Resist Shock', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'resist_shock', effects: [
		{ stat: 'stunVuln', val: [15, 20, 30, 40], op: 'sub' } ]},
	{ id: 4351, levels: 6, name: 'Clan Hall: Concentration', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'cancel_prob_down', effects: [
		{ stat: 'cancel', val: [18, 25, 36, 42, 48, 53], op: 'sub' } ]},
	{ id: 4352, levels: 2, name: 'Clan Hall: Berserker Spirit', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'rEvas', val: [2, 4], op: 'sub' } ]},
	{ id: 4353, levels: 6, name: 'Clan Hall: Bless Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'shield_prob_up', effects: [
		{ stat: 'rShld', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3], op: 'mul' } ]},
	{ id: 4354, levels: 4, name: 'Clan Hall: Vampiric Rage', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: [6, 7, 8, 9], op: 'add' } ]},
	{ id: 4355, levels: 3, name: 'Clan Hall: Acumen', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 4356, levels: 3, name: 'Clan Hall: Empower', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' } ]},
	{ id: 4357, levels: 2, name: 'Clan Hall: Haste', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 4358, levels: 3, name: 'Clan Hall: Guidance', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add' } ]},
	{ id: 4359, levels: 3, name: 'Clan Hall: Focus', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.2, 0.25, 0.3], op: 'basemul' } ]},
	{ id: 4360, levels: 3, name: 'Clan Hall: Death Whisper', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4364, levels: 2, name: 'Blessing of Revelations', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ssq_town_blessing', effects: [
		{ stat: 'weightLimit', val: 1.25, op: 'mul' },
		{ stat: 'poisonVuln', val: 25, op: 'sub' },
		{ stat: 'bleedVuln', val: 25, op: 'sub' },
		{ stat: 'rootVuln', val: [0, 25], op: 'sub' },
		{ stat: 'stunVuln', val: [0, 25], op: 'sub' },
		{ stat: 'paralyzeVuln', val: [0, 25], op: 'sub' } ]},
	{ id: 4365, levels: 2, name: 'Blessing of Revelations', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ssq_town_blessing', effects: [
		{ stat: 'cancel', val: 25, op: 'sub' },
		{ stat: 'rootVuln', val: 25, op: 'sub' },
		{ stat: 'derangementVuln', val: 25, op: 'sub' },
		{ stat: 'stunVuln', val: [0, 25], op: 'sub' },
		{ stat: 'paralyzeVuln', val: [0, 25], op: 'sub' } ]},
	{ id: 4366, levels: 1, name: 'Blessing of Prophecy', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'decrease_weight_penalty', effects: [
		{ stat: 'weightLimit', val: 1.25, op: 'mul' },
		{ stat: 'poisonVuln', val: 25, op: 'sub' },
		{ stat: 'bleedVuln', val: 25, op: 'sub' } ]},
	{ id: 4367, levels: 1, name: 'Clan Hall Manager Buff', target: 'ONE', operateType: 'A2', effectType: 'ManaHealOverTime', abnormalType: 'public_slot' },
	{ id: 4368, levels: 1, name: 'Clan Hall Manager Buff', target: 'ONE', operateType: 'A2', effectType: 'ManaHealOverTime', abnormalType: 'public_slot', effects: [
		{ stat: 'maxMp', val: 5000, op: 'add' } ]},
	{ id: 4369, levels: 1, name: 'Clan Hall Manager Buff', target: 'ONE', operateType: 'A2', effectType: 'ManaHealOverTime', abnormalType: 'public_slot', effects: [
		{ stat: 'maxMp', val: 10000, op: 'add' } ]},
	{ id: 4370, levels: 1, name: 'Clan Hall Manager Buff', target: 'ONE', operateType: 'A2', effectType: 'ManaHealOverTime', abnormalType: 'public_slot', effects: [
		{ stat: 'maxMp', val: 28000, op: 'add' } ]},
	{ id: 4371, levels: 1, name: 'Clan Hall Manager Buff', target: 'ONE', operateType: 'A2', effectType: 'ManaHealOverTime', abnormalType: 'public_slot', effects: [
		{ stat: 'maxMp', val: 58000, op: 'add' } ]},
	{ id: 4372, levels: 1, name: 'Clan Hall Manager Buff', target: 'ONE', operateType: 'A2', effectType: 'ManaHealOverTime', abnormalType: 'public_slot', effects: [
		{ stat: 'maxMp', val: 103000, op: 'add' } ]},
	{ id: 4373, levels: 1, name: 'Clan Hall Manager Buff', target: 'ONE', operateType: 'A2', effectType: 'ManaHealOverTime', abnormalType: 'public_slot', effects: [
		{ stat: 'maxMp', val: 106000, op: 'add' } ]},
	{ id: 4374, levels: 1, name: 'Clan Hall Manager Buff', target: 'ONE', operateType: 'A2', effectType: 'ManaHealOverTime', abnormalType: 'public_slot', effects: [
		{ stat: 'maxMp', val: 151000, op: 'add' } ]},
	{ id: 4375, levels: 1, name: 'Clan Hall Manager Buff', target: 'ONE', operateType: 'A2', effectType: 'ManaHealOverTime', abnormalType: 'public_slot', effects: [
		{ stat: 'maxMp', val: 196000, op: 'add' } ]},
	{ id: 4376, levels: 1, name: 'Strong Resistance to P.Atk.', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 3, op: 'mul' } ]},
	{ id: 4378, levels: 12, name: 'Self Damage Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'dmg_shield', effects: [
		{ stat: 'reflectDam', val: 20, op: 'add' } ]},
	{ id: 4379, levels: 5, name: 'Resist Pole Arm', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poleWpnVuln', val: [0.9, 0.8, 0.7, 0.6, 0.5], op: 'mul' } ]},
	{ id: 4383, levels: 1, name: 'NPC Hate Stone', target: 'AURA', operateType: 'A3', effectType: 'Petrification', abnormalType: 'turn_stone' },
	{ id: 4384, levels: 1, name: 'Scapegoat\'s Grace', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_down' },
	{ id: 4385, levels: 1, name: 'Scapegoat\'s Grace', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_up' },
	{ id: 4386, levels: 1, name: 'Scapegoat\'s Grace', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'poison' },
	{ id: 4387, levels: 1, name: 'Scapegoat\'s Grace', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'heal_effect_down' },
	{ id: 4388, levels: 5, name: 'Resist Paralysis', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: [10, 20, 30, 40, 50], op: 'sub' } ]},
	{ id: 4389, levels: 5, name: 'Resist Mental Derangement', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: [10, 20, 30, 40, 50], op: 'sub' } ]},
	{ id: 4390, levels: 1, name: 'NPC Abnormal Immunity', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'debuffImmunity', val: 1, op: 'set' } ]},
	{ id: 4391, levels: 2, name: 'Wind Walk', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [20, 33], op: 'add' } ]},
	{ id: 4392, levels: 3, name: 'Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4393, levels: 3, name: 'Might', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4394, levels: 6, name: 'Blessed Body', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4395, levels: 6, name: 'Blessed Soul', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4396, levels: 2, name: 'Magic Barrier', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: [1.23, 1.3], op: 'mul' } ]},
	{ id: 4397, levels: 2, name: 'Berserker Spirit', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'rEvas', val: [2, 4], op: 'sub' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' } ]},
	{ id: 4398, levels: 6, name: 'Bless Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'shield_prob_up', effects: [
		{ stat: 'rShld', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3], op: 'mul' } ]},
	{ id: 4399, levels: 4, name: 'Vampiric Rage', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: [6, 7, 8, 9], op: 'add' } ]},
	{ id: 4400, levels: 3, name: 'Acumen', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 4401, levels: 3, name: 'Empower', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' } ]},
	{ id: 4402, levels: 2, name: 'Haste', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 4403, levels: 3, name: 'Guidance', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add' } ]},
	{ id: 4404, levels: 3, name: 'Focus', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.2, 0.25, 0.3], op: 'basemul' } ]},
	{ id: 4405, levels: 3, name: 'Death Whisper', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4406, levels: 3, name: 'Agility', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up', effects: [
		{ stat: 'rEvas', val: [2, 3, 4], op: 'add' } ]},
	{ id: 4408, levels: 20, name: 'HP Modifiers', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxHp', val: [1, 1.1, 1.21, 1.33, 1.46, 1.61, 1.77, 0.25, 0.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], op: 'mul' },
		{ stat: 'regHp', val: [1, 1.1, 1.21, 1.33, 1.46, 1.61, 1.77, 0.25, 0.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], op: 'mul' } ]},
	{ id: 4409, levels: 20, name: 'MP Modifiers', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: [1, 1.1, 1.21, 1.33, 1.46, 1.61, 1.77, 0.25, 0.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], op: 'mul' },
		{ stat: 'regMp', val: [1, 1.1, 1.21, 1.33, 1.46, 1.61, 1.77, 0.25, 0.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], op: 'mul' } ]},
	{ id: 4410, levels: 22, name: 'P. Atk. Modifiers', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [0.39, 0.43, 0.47, 0.52, 0.57, 0.63, 0.69, 0.76, 0.83, 0.91, 1, 1.1, 1.21, 1.33, 1.46, 1.61, 1.77, 1.94, 2.14, 2.35, 2.59, 10], op: 'mul' } ]},
	{ id: 4411, levels: 22, name: 'M. Atk. Modifiers', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: [0.15, 0.18, 0.22, 0.27, 0.32, 0.39, 0.47, 0.57, 0.69, 0.83, 1, 1.21, 1.46, 1.77, 2.14, 2.59, 3.13, 3.79, 4.59, 5.55, 6.72, 100], op: 'mul' } ]},
	{ id: 4412, levels: 22, name: 'P. Def. Modifiers', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: [0.39, 0.43, 0.47, 0.52, 0.57, 0.63, 0.69, 0.76, 0.83, 0.91, 1, 1.1, 1.21, 1.33, 1.46, 1.61, 1.77, 1.94, 2.14, 2.35, 2.59, 10], op: 'mul' } ]},
	{ id: 4413, levels: 22, name: 'M. Def. Modifiers', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: [0.39, 0.43, 0.47, 0.52, 0.57, 0.63, 0.69, 0.76, 0.83, 0.91, 1, 1.1, 1.21, 1.33, 1.46, 1.61, 1.77, 1.94, 2.14, 2.35, 2.59, 10], op: 'mul' } ]},
	{ id: 4414, levels: 3, name: 'Armor Type', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: [-10, 0, 10], op: 'add' },
		{ stat: 'pDef', val: [1.15, 1, 0.85], op: 'mul' } ]},
	{ id: 4415, levels: 26, name: 'Weapon Type', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [1, 1.38, 1, 1.38, 1, 1.38, 0.87, 1.21, 2.22, 2.5, 1, 1.38, 1.16, 1.62, 1.16, 1.62, 1.16, 1.62, 1.16, 1.62, 1.08, 1.62, 0.93, 1.62, 1.38, 1.62], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1, 0.71, 1, 0.71, 1, 0.71, 1.14, 0.82, 0.89, 0.64, 1, 0.71, 0.85, 0.61, 0.85, 0.61, 0.85, 0.61, 0.85, 0.61, 0.92, 0.61, 1.07, 0.61, 0.62, 0.61], op: 'mul' } ]},
	{ id: 4416, levels: 25, name: 'Races', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef-magicCreature', val: [1, 0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], op: 'mul' },
		{ stat: 'pDef-monsters', val: [1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], op: 'mul' },
		{ stat: 'pDef-animals', val: [1, 1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], op: 'mul' },
		{ stat: 'pDef-plants', val: [1, 1, 1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], op: 'mul' },
		{ stat: 'pDef-dragons', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], op: 'mul' },
		{ stat: 'pDef-giants', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], op: 'mul' },
		{ stat: 'pDef-insects', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], op: 'mul' },
		{ stat: 'bowWpnVuln', val: [1, 1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], op: 'mul' },
		{ stat: 'bluntWpnVuln', val: [1, 1, 1, 1, 1, 1, 1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: [1, 1, 1, 1, 1, 1, 1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], op: 'mul' },
		{ stat: 'swordWpnVuln', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], op: 'mul' },
		{ stat: 'bigSwordWpnVuln', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], op: 'mul' },
		{ stat: 'dualWpnVuln', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], op: 'mul' },
		{ stat: 'stunVuln', val: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], op: 'sub' } ]},
	{ id: 4417, levels: 38, name: 'Race Types', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bowWpnVuln', val: [1, 1, 0.85, 0.85, 0.85, 1, 1, 0.85, 1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.15, 1, 1], op: 'mul' },
		{ stat: 'bluntWpnVuln', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.85, 1, 1], op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.85, 1, 1, 1, 1, 1, 1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.85, 1, 1], op: 'mul' },
		{ stat: 'daggerWpnVuln', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.15, 1, 1], op: 'mul' },
		{ stat: 'dualDaggerWpnVuln', val: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.15, 1, 1], op: 'mul' },
		{ stat: 'poisonVuln', val: [0, 0, 0, 0, 0, 0, 15, 15, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0], op: 'sub' },
		{ stat: 'bleedVuln', val: [0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0], op: 'sub' },
		{ stat: 'sleepVuln', val: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15], op: 'sub' },
		{ stat: 'rootVuln', val: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0], op: 'sub' } ]},
	{ id: 4418, levels: 5, name: 'Fire Attacks', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'firePower', val: 10, op: 'add' },
		{ stat: 'fireRes', val: [10, 20, 30, 40, 50], op: 'add' } ]},
	{ id: 4419, levels: 5, name: 'Water Attacks', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterPower', val: 10, op: 'add' },
		{ stat: 'waterRes', val: [10, 20, 30, 40, 50], op: 'add' } ]},
	{ id: 4420, levels: 5, name: 'Wind Attacks', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windPower', val: 10, op: 'add' },
		{ stat: 'windRes', val: [10, 20, 30, 40, 50], op: 'add' } ]},
	{ id: 4421, levels: 5, name: 'Earth Attacks', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthPower', val: 10, op: 'add' },
		{ stat: 'earthRes', val: [10, 20, 30, 40, 50], op: 'add' } ]},
	{ id: 4422, levels: 5, name: 'Dark Attacks', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkPower', val: 10, op: 'add' },
		{ stat: 'darkRes', val: [10, 20, 30, 40, 50], op: 'add' } ]},
	{ id: 4423, levels: 5, name: 'Sacred Attacks', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyPower', val: 10, op: 'add' },
		{ stat: 'holyRes', val: [10, 20, 30, 40, 50], op: 'add' } ]},
	{ id: 4424, levels: 5, name: 'Resist Hand-to-hand Weapons', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'dualFistWpnVuln', val: [0.9, 0.8, 0.7, 0.6, 0.5], op: 'mul' } ]},
	{ id: 4425, levels: 5, name: 'Resist Blunt Weapons', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bluntWpnVuln', val: [0.9, 0.8, 0.7, 0.6, 0.5], op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: [0.9, 0.8, 0.7, 0.6, 0.5], op: 'mul' } ]},
	{ id: 4426, levels: 5, name: 'Resist Dual-Sword Weapons', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'dualWpnVuln', val: [0.9, 0.8, 0.7, 0.6, 0.5], op: 'mul' } ]},
	{ id: 4427, levels: 5, name: 'Resist Swords', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'swordWpnVuln', val: [0.9, 0.8, 0.7, 0.6, 0.5], op: 'mul' },
		{ stat: 'bigSwordWpnVuln', val: [0.9, 0.8, 0.7, 0.6, 0.5], op: 'mul' } ]},
	{ id: 4429, levels: 5, name: 'Greater Resist Fire Attacks', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: [60, 70, 80, 90, 100], op: 'add' } ]},
	{ id: 4430, levels: 5, name: 'Greater Resist Water Attacks', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: [60, 70, 80, 90, 100], op: 'add' } ]},
	{ id: 4431, levels: 5, name: 'Greater Resist Wind Attacks', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: [60, 70, 80, 90, 100], op: 'add' } ]},
	{ id: 4432, levels: 5, name: 'Greater Resist Earth Attacks', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: [60, 70, 80, 90, 100], op: 'add' } ]},
	{ id: 4433, levels: 5, name: 'Greater Resist Sacred Attacks', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: [60, 70, 80, 90, 100], op: 'add' } ]},
	{ id: 4434, levels: 5, name: 'Greater Resist Dark Attacks', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: [60, 70, 80, 90, 100], op: 'add' } ]},
	{ id: 4435, levels: 5, name: 'Greater Resist Stun', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: [60, 70, 80, 90, 100], op: 'sub' } ]},
	{ id: 4436, levels: 5, name: 'Greater Resist Poison', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: [60, 70, 80, 90, 100], op: 'sub' } ]},
	{ id: 4437, levels: 5, name: 'Greater Resist Bleeding', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: [60, 70, 80, 90, 100], op: 'sub' } ]},
	{ id: 4438, levels: 5, name: 'Greater Resist Sleep', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: [60, 70, 80, 90, 100], op: 'sub' } ]},
	{ id: 4439, levels: 5, name: 'Greater Resist Hold', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: [60, 70, 80, 90, 100], op: 'sub' } ]},
	{ id: 4440, levels: 5, name: 'Greater Resist Paralysis', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: [60, 70, 80, 90, 100], op: 'sub' } ]},
	{ id: 4441, levels: 5, name: 'Greater Resist Mental Derangement', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: [60, 70, 80, 90, 100], op: 'sub' } ]},
	{ id: 4442, levels: 5, name: 'Greater Resist Hand-to-hand Weapons', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'dualFistWpnVuln', val: [0.4, 0.3, 0.2, 0.1, 0], op: 'mul' } ]},
	{ id: 4443, levels: 5, name: 'Greater Resist Blunt Weapons', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bluntWpnVuln', val: [0.4, 0.3, 0.2, 0.1, 0], op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: [0.4, 0.3, 0.2, 0.1, 0], op: 'mul' } ]},
	{ id: 4444, levels: 5, name: 'Higher Resist Bow/Crossbow Weapons', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bowWpnVuln', val: [0.4, 0.3, 0.2, 0.1, 0], op: 'mul' },
		{ stat: 'crossbowWpnVuln', val: [0.4, 0.3, 0.2, 0.1, 0], op: 'mul' } ]},
	{ id: 4445, levels: 5, name: 'Greater Resist Spear Weapons', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poleWpnVuln', val: [0.4, 0.3, 0.2, 0.1, 0], op: 'mul' } ]},
	{ id: 4446, levels: 5, name: 'Greater Resist Dual-Sword Weapons', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'dualWpnVuln', val: [0.4, 0.3, 0.2, 0.1, 0], op: 'mul' } ]},
	{ id: 4447, levels: 5, name: 'Greater Resist Swords', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'swordWpnVuln', val: [0.4, 0.3, 0.2, 0.1, 0], op: 'mul' },
		{ stat: 'bigSwordWpnVuln', val: [0.4, 0.3, 0.2, 0.1, 0], op: 'mul' } ]},
	{ id: 4448, levels: 5, name: 'Greater Resist Daggers', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'daggerWpnVuln', val: [0.4, 0.3, 0.2, 0.1, 0], op: 'mul' },
		{ stat: 'dualDaggerWpnVuln', val: [0.4, 0.3, 0.2, 0.1, 0], op: 'mul' },
		{ stat: 'rapierWpnVuln', val: [0.4, 0.3, 0.2, 0.1, 0], op: 'mul' } ]},
	{ id: 4450, levels: 5, name: 'Stun Attack Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: [11, 25, 43, 67, 100], op: 'add' } ]},
	{ id: 4451, levels: 5, name: 'Poison Attack Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: [11, 25, 43, 67, 100], op: 'add' } ]},
	{ id: 4452, levels: 5, name: 'Bleed Attack Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: [11, 25, 43, 67, 100], op: 'add' } ]},
	{ id: 4453, levels: 5, name: 'Sleep Attack Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: [11, 25, 43, 67, 100], op: 'add' } ]},
	{ id: 4454, levels: 5, name: 'Hold Attack Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: [11, 25, 43, 67, 100], op: 'add' } ]},
	{ id: 4455, levels: 5, name: 'Paralysis Attack Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: [11, 25, 43, 67, 100], op: 'add' } ]},
	{ id: 4456, levels: 5, name: 'Mental Attack Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: [11, 25, 43, 67, 100], op: 'add' } ]},
	{ id: 4457, levels: 5, name: 'Hand-to-hand Weapon Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'dualFistWpnVuln', val: [1.11, 1.25, 1.43, 1.67, 2], op: 'mul' } ]},
	{ id: 4458, levels: 5, name: 'Spear Weapon Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poleWpnVuln', val: [1.11, 1.25, 1.43, 1.67, 2], op: 'mul' } ]},
	{ id: 4459, levels: 5, name: 'Dual-Sword Weapon Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'dualWpnVuln', val: [1.11, 1.25, 1.43, 1.67, 2], op: 'mul' } ]},
	{ id: 4460, levels: 5, name: 'Sword Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'swordWpnVuln', val: [1.11, 1.25, 1.43, 1.67, 2], op: 'mul' },
		{ stat: 'bigSwordWpnVuln', val: [1.11, 1.25, 1.43, 1.67, 2], op: 'mul' } ]},
	{ id: 4461, levels: 5, name: 'Dagger Weak Point', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'daggerWpnVuln', val: [1.11, 1.25, 1.43, 1.67, 2], op: 'mul' },
		{ stat: 'dualDaggerWpnVuln', val: [1.11, 1.25, 1.43, 1.67, 2], op: 'mul' },
		{ stat: 'rapierWpnVuln', val: [1.11, 1.25, 1.43, 1.67, 2], op: 'mul' } ]},
	{ id: 4468, levels: 2, name: 'Area Buff - Wind Walk', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [20, 33], op: 'add' } ]},
	{ id: 4471, levels: 12, name: 'NPC Anger', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_pd_up', effects: [
		{ stat: 'pAtk', val: [1.15, 1.3, 1.45, 1.6, 1.9, 2.2, 2.5, 2.8, 3.1, 3.4, 3.7, 4], op: 'mul' },
		{ stat: 'pDef', val: [1.15, 1.3, 1.45, 1.6, 1.9, 2.2, 2.5, 2.8, 3.1, 3.4, 3.7, 4], op: 'mul' } ]},
	{ id: 4475, levels: 1, name: 'Perfect Resist Bleeding', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'bleeding', effects: [
		{ stat: 'bleedVuln', val: 100, op: 'sub' } ]},
	{ id: 4476, levels: 5, name: 'Silent Move', target: 'ONE', operateType: 'A2', effectType: 'SilentMove', abnormalType: 'stealth' },
	{ id: 4479, levels: 1, name: 'Ice Fairy Resist Cold', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'armor_water', effects: [
		{ stat: 'waterRes', val: 50, op: 'add' } ]},
	{ id: 4483, levels: 12, name: 'Hold', target: 'AURA', operateType: 'A2', effectType: 'Root', abnormalType: 'root_magically' },
	{ id: 4488, levels: 12, name: 'Hold', target: 'AURA', operateType: 'A2', effectType: 'Root', abnormalType: 'root_magically' },
	{ id: 4493, levels: 12, name: 'NPC Debuff Shield Slow', target: 'ONE', operateType: 'A2', trigger: 5520, effectType: 'ChanceSkillTrigger', abnormalType: 'debuff_shield' },
	{ id: 4517, levels: 1, name: 'Quest - BOSS Defend', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'runSpd', val: 0.5, op: 'mul' },
		{ stat: 'pAtk', val: 0.5, op: 'mul' },
		{ stat: 'pDef', val: 10, op: 'mul' } ]},
	{ id: 4518, levels: 1, name: 'Quest - BOSS Rampage', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'pAtkSpd', val: 1.3, op: 'mul' },
		{ stat: 'pAtk', val: 1.3, op: 'mul' },
		{ stat: 'pDef', val: 0.5, op: 'mul' } ]},
	{ id: 4519, levels: 1, name: 'Quest - BOSS Defend', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'runSpd', val: 0.5, op: 'mul' },
		{ stat: 'bowWpnVuln', val: 0.1, op: 'mul' } ]},
	{ id: 4520, levels: 1, name: 'Quest - BOSS Rampage', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'runSpd', val: 0.7, op: 'mul' },
		{ stat: 'bowWpnVuln', val: 1.1, op: 'mul' } ]},
	{ id: 4521, levels: 1, name: 'Quest - BOSS Resist non Bow Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'swordWpnVuln', val: 0, op: 'mul' },
		{ stat: 'bigSwordWpnVuln', val: 0, op: 'mul' },
		{ stat: 'bluntWpnVuln', val: 0, op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: 0, op: 'mul' },
		{ stat: 'daggerWpnVuln', val: 0, op: 'mul' },
		{ stat: 'poleWpnVuln', val: 0, op: 'mul' },
		{ stat: 'dualFistWpnVuln', val: 0, op: 'mul' },
		{ stat: 'dualWpnVuln', val: 0, op: 'mul' } ]},
	{ id: 4522, levels: 1, name: 'Eye of Assassin', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'public_slot', effects: [
		{ stat: 'rCrit', val: 1, op: 'basemul', atkFrom: 'behind' } ]},
	{ id: 4523, levels: 1, name: 'Quest - BOSS Evasion', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'public_slot', effects: [
		{ stat: 'accCombat', val: 30, op: 'add' } ]},
	{ id: 4525, levels: 1, name: 'Quest - BOSS Defend', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'pDef', val: 10, op: 'mul' },
		{ stat: 'mDef', val: 10, op: 'mul' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' } ]},
	{ id: 4527, levels: 1, name: 'Quest - BOSS Inc HP to Summoned', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'public_slot', effects: [
		{ stat: 'maxHp', val: 1.3, op: 'mul' } ]},
	{ id: 4528, levels: 1, name: 'Quest - BOSS Movement to Summoned', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'public_slot', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 4530, levels: 1, name: 'Quest - Summoned HP Heal', target: 'AURA', operateType: 'A1', effectType: 'HealPercent' },
	{ id: 4531, levels: 1, name: 'Quest - Summoned MP Heal', target: 'AURA', operateType: 'A1', effectType: 'ManaHealPercent' },
	{ id: 4532, levels: 1, name: 'Quest - BOSS Reflect', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'reflectDam', val: 100, op: 'add' },
		{ stat: 'mDef', val: 10, op: 'mul' } ]},
	{ id: 4542, levels: 1, name: 'Quest - Henchman 90% Sleep Stun Weakness', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 90, op: 'add' },
		{ stat: 'stunVuln', val: 90, op: 'add' } ]},
	{ id: 4543, levels: 1, name: 'Quest - BOSS Stun Weakness', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 10, op: 'add' } ]},
	{ id: 4544, levels: 3, name: 'Quest - BOSS Weakness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'public_slot', effects: [
		{ stat: 'pDef', val: [0.8, 0.6, 0.7], op: 'mul' },
		{ stat: 'pAtkSpd', val: [0.9, 0.8, 0.6], op: 'mul' },
		{ stat: 'pAtk', val: [0.7, 0.6, 0.5], op: 'mul' } ]},
	{ id: 4545, levels: 1, name: 'Quest - BOSS Reflect', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'reflectDam', val: 100, op: 'add' },
		{ stat: 'pDef', val: 10, op: 'mul' },
		{ stat: 'runSpd', val: 0.7, op: 'mul' } ]},
	{ id: 4555, levels: 1, name: 'NPC Resist Mutant', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 20, op: 'sub' },
		{ stat: 'bleedVuln', val: 20, op: 'sub' },
		{ stat: 'rootVuln', val: 20, op: 'sub' },
		{ stat: 'stunVuln', val: 20, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 20, op: 'sub' } ]},
	{ id: 4559, levels: 1, name: 'Hot Spring Illusion', target: 'ONE', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head' },
	{ id: 4575, levels: 2, name: 'NPC Clan Buff - Haste', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 4576, levels: 3, name: 'NPC Clan Buff - Damage Shield', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'dmg_shield', effects: [
		{ stat: 'reflectDam', val: [10, 15, 20], op: 'add' } ]},
	{ id: 4585, levels: 3, name: 'NPC Clan Buff - Berserk Might', target: 'CLAN', operateType: 'A2', effectType: 'Grow', abnormalType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.13, 1.18, 1.24], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.1, 1.16], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.9, 0.84], op: 'mul' } ]},
	{ id: 4588, levels: 2, name: 'NPC Clan Buff - Berserk Haste', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.2, 1.44], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' } ]},
	{ id: 4595, levels: 3, name: 'NPC Clan Buff - Acumen Shield', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' },
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4600, levels: 12, name: 'Reducing P. Def Stun', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun', effects: [
		{ stat: 'pDef', val: [0.83, 0.8, 0.8, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77], op: 'mul' } ]},
	{ id: 4601, levels: 3, name: 'NPC Clan Buff - Acumen Focus', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'rCrit', val: [0.2, 0.25, 0.3], op: 'basemul' },
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 4608, levels: 2, name: 'NPC Clan Buff - Berserk', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' } ]},
	{ id: 4609, levels: 4, name: 'NPC Clan Buff - Vampiric Rage', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: [6, 7, 8, 9], op: 'add' } ]},
	{ id: 4610, levels: 3, name: 'NPC Clan Buff - Focus', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.2, 0.25, 0.3], op: 'basemul' } ]},
	{ id: 4611, levels: 3, name: 'NPC Clan Buff - Death Whisper', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4618, levels: 1, name: 'NPC Cancel PC Target', target: 'ONE', operateType: 'A1', effectType: 'RemoveTarget' },
	{ id: 4626, levels: 12, name: 'NPC Buff - Physical Barrier', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.05, 1.11, 1.17, 1.25, 1.33, 1.43, 1.67, 2, 2.33, 2.67, 3, 3.33], op: 'mul' } ]},
	{ id: 4627, levels: 12, name: 'NPC Buff - Magical Barrier', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: [1.05, 1.11, 1.17, 1.25, 1.33, 1.43, 1.67, 2, 2.33, 2.67, 3, 3.33], op: 'mul' } ]},
	{ id: 4631, levels: 3, name: 'NPC Buff - Acumen Shield WildMagic', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'pDef', val: [1.8, 1.12, 1.15], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' },
		{ stat: 'mCritRate', val: [2, 3, 3], op: 'basemul' } ]},
	{ id: 4632, levels: 3, name: 'NPC Buff - Acumen Empower WildMagic', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' },
		{ stat: 'mCritRate', val: [2, 3, 3], op: 'basemul' } ]},
	{ id: 4633, levels: 3, name: 'NPC Buff - Acumen Empower Berserk', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.71, 1.82, 2.03], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.21, 1.29, 1.4], op: 'mul' },
		{ stat: 'runSpd', val: [5, 5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.9, 0.84], op: 'mul' } ]},
	{ id: 4634, levels: 3, name: 'NPC Buff - Acumen Empower DamageShield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' },
		{ stat: 'reflectDam', val: [10, 15, 20], op: 'add' } ]},
	{ id: 4635, levels: 3, name: 'NPC Buff - Acumen Berserk WildMagic', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.1, 1.16], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.21, 1.29, 1.4], op: 'mul' },
		{ stat: 'runSpd', val: [5, 5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.9, 0.84], op: 'mul' },
		{ stat: 'mCritRate', val: [2, 3, 3], op: 'basemul' } ]},
	{ id: 4636, levels: 3, name: 'NPC Buff - Acumen Berserk DamageShield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.1, 1.1, 1.16], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.21, 1.29, 1.4], op: 'mul' },
		{ stat: 'runSpd', val: [5, 5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.9, 0.84], op: 'mul' },
		{ stat: 'reflectDam', val: [10, 15, 20], op: 'add' } ]},
	{ id: 4637, levels: 3, name: 'NPC Buff - Acumen WildMagic DamageShield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' },
		{ stat: 'mCritRate', val: [2, 3, 3], op: 'basemul' },
		{ stat: 'reflectDam', val: [10, 15, 20], op: 'add' } ]},
	{ id: 4638, levels: 3, name: 'NPC Clan Buff - Acumen Empower WildMagic', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' },
		{ stat: 'mCritRate', val: [2, 3, 3], op: 'basemul' } ]},
	{ id: 4639, levels: 3, name: 'NPC Clan Buff - Acumen Empower Berserk', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.05, 1.08], op: 'mul' },
		{ stat: 'mAtk', val: [1.71, 1.82, 2.03], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.21, 1.29, 1.4], op: 'mul' },
		{ stat: 'runSpd', val: [5, 5, 8], op: 'add' },
		{ stat: 'pDef', val: [0.95, 0.95, 0.92], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.9, 0.84], op: 'mul' } ]},
	{ id: 4642, levels: 9, name: 'NPC Fast Spell Casting', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtkSpd', val: [1.05, 1.07, 1.1, 1.12, 1.15, 1.17, 1.2, 1.22, 1.25], op: 'mul' } ]},
	{ id: 4644, levels: 2, name: 'Area Buff - Haste', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 4645, levels: 3, name: 'Area Buff - Focus', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.15, 0.25, 0.3], op: 'basemul' } ]},
	{ id: 4646, levels: 3, name: 'Area Buff - Death Whisper', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 4647, levels: 3, name: 'Area Buff - Might', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4648, levels: 3, name: 'Area Buff - Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 4649, levels: 12, name: 'Poison', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'poison' },
	{ id: 4650, levels: 1, name: 'NPC AE - Dispel Hold', target: 'AURA', operateType: 'A1', effectType: 'Negate' },
	{ id: 4651, levels: 3, name: 'NPC AE - Dispel Slow', target: 'AURA', operateType: 'A1', effectType: 'Negate' },
	{ id: 4652, levels: 1, name: 'NPC AE - Dispel Silence', target: 'AURA', operateType: 'A1', effectType: 'Negate' },
	{ id: 4679, levels: 1, name: 'Valakas', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'valakasVuln', val: 8, op: 'add' },
		{ stat: 'debuffImmunity', val: 1, op: 'set' } ]},
	{ id: 4680, levels: 1, name: 'Valakas Lava Skin', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: 10, op: 'mul' },
		{ stat: 'mDef', val: 10, op: 'mul' } ]},
	{ id: 4691, levels: 5, name: 'Valakas Regeneration', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_down', effects: [
		{ stat: 'regHp', val: [0.15, 0.3, 0.5, 0.8, 1], op: 'mul' } ]},
	{ id: 4692, levels: 1, name: 'Quest BOSS Big Body', target: 'SELF', operateType: 'A2', effectType: 'Grow', abnormalType: 'big_body' },
	{ id: 4698, levels: 12, name: 'Area Buff - HP Regeneration', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: [1.2, 1.3, 1.4, 1.5, 1.75, 2, 3, 4, 5, 6, 8.5, 11], op: 'mul' } ]},
	{ id: 4699, levels: 13, name: 'Blessing of Queen', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'buff_queen_of_cat', effects: [
		{ stat: 'rCrit', val: [0.25, 0.27, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3], op: 'basemul' },
		{ stat: 'cAtk', val: [1.2, 1.22, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25], op: 'mul' } ]},
	{ id: 4700, levels: 13, name: 'Gift of Queen', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'buff_queen_of_cat', effects: [
		{ stat: 'pAtk', val: [1.06, 1.08, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1], op: 'mul' },
		{ stat: 'accCombat', val: [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], op: 'add' } ]},
	{ id: 4702, levels: 13, name: 'Blessing of Seraphim', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'buff_unicorn_seraphim', effects: [
		{ stat: 'regMp', val: [1.3, 1.32, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35, 1.35], op: 'mul' } ]},
	{ id: 4703, levels: 13, name: 'Gift of Seraphim', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'buff_unicorn_seraphim', effects: [
		{ stat: 'mReuse', val: [0.7, 0.68, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65], op: 'mul' } ]},
	{ id: 4706, levels: 13, name: 'Mass Curse of Shade', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'debuff_nightshade', effects: [
		{ stat: 'mDef', val: [0.94, 0.92, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9], op: 'mul' },
		{ stat: 'pDef', val: [0.94, 0.92, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9], op: 'mul' } ]},
	{ id: 4711, levels: 12, name: 'Wild Defense', target: 'SELF', operateType: 'A2', effectType: 'ImmobileBuff', abnormalType: 'ultimate_buff', effects: [
		{ stat: 'mDef', val: 5, op: 'mul' },
		{ stat: 'pDef', val: 5, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.3, op: 'mul' },
		{ stat: 'runSpd', val: 0.1, op: 'mul' } ]},
	{ id: 4784, levels: 12, name: 'BOSS Chant of Life', target: 'CLAN_MEMBER', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_others' },
	{ id: 4785, levels: 12, name: 'BOSS Chant of Life', target: 'CLAN_MEMBER', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_others' },
	{ id: 4786, levels: 12, name: 'BOSS Chant of Life', target: 'CLAN_MEMBER', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_others' },
	{ id: 4787, levels: 12, name: 'BOSS Chant of Life', target: 'CLAN_MEMBER', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_others' },
	{ id: 4788, levels: 12, name: 'BOSS Chant of Life', target: 'CLAN_MEMBER', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_others' },
	{ id: 4789, levels: 10, name: 'NPC High Level', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], op: 'add' },
		{ stat: 'mDef', val: [1.03, 1.06, 1.09, 1.12, 1.15, 1.18, 1.21, 1.24, 1.27, 1.3], op: 'mul' } ]},
	{ id: 5002, levels: 1, name: 'Giselle - Vampiric Rage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 5004, levels: 1, name: 'Dimensional Stun', target: 'AURA', operateType: 'A2', effectType: 'ThrowUp', abnormalType: 'fly_away' },
	{ id: 5017, levels: 1, name: 'Frintezza\'s Daemon Morph', target: 'SELF', operateType: 'A2', effectType: 'Grow', abnormalType: 'big_body', effects: [
		{ stat: 'runSpd', val: 1.22, op: 'mul' } ]},
	{ id: 5038, levels: 16, name: 'Summon PVP Penalty', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pvpMagicalDmg', val: [0.98, 0.96, 0.94, 0.92, 0.9, 0.88, 0.86, 0.84, 0.82, 0.8, 0.78, 0.76, 0.74, 0.72, 0.7, 0.5], op: 'mul' },
		{ stat: 'pvpPhysDmg', val: [0.98, 0.96, 0.94, 0.92, 0.9, 0.88, 0.86, 0.84, 0.82, 0.8, 0.78, 0.76, 0.74, 0.72, 0.7, 0.5], op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: [0.98, 0.96, 0.94, 0.92, 0.9, 0.88, 0.86, 0.84, 0.82, 0.8, 0.78, 0.76, 0.74, 0.72, 0.7, 0.5], op: 'mul' } ]},
	{ id: 5040, levels: 12, name: 'NPC - Healing Potion', target: 'ONE', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_others' },
	{ id: 5041, levels: 1, name: 'Charm of Courage', target: 'SELF', operateType: 'P', effectType: 'CharmOfCourage' },
	{ id: 5042, levels: 12, name: 'NPC Dispel Bomb', target: 'AURA', operateType: 'A1', effectType: 'Cancel' },
	{ id: 5044, levels: 3, name: 'NPC Ultimate Defense', target: 'SELF', operateType: 'A2', effectType: 'ImmobileBuff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: [1800, 3600, 9000], op: 'add' },
		{ stat: 'mDef', val: [1350, 2700, 9000], op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 5074, levels: 1, name: 'The Victor of War', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.1, op: 'mul' } ]},
	{ id: 5075, levels: 1, name: 'The Vanquished of War', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 0.9, op: 'mul' } ]},
	{ id: 5076, levels: 15, name: 'Death Penalty', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: [0.9, 0.81, 0.73, 0.66, 0.6, 0.55, 0.51, 0.47, 0.44, 0.41, 0.38, 0.35, 0.32, 0.28, 0.25], op: 'mul' },
		{ stat: 'pAtkSpd', val: [0.9, 0.81, 0.73, 0.66, 0.6, 0.55, 0.51, 0.47, 0.44, 0.41, 0.38, 0.35, 0.32, 0.28, 0.25], op: 'mul' },
		{ stat: 'mAtk', val: [0.9, 0.81, 0.73, 0.66, 0.6, 0.55, 0.51, 0.47, 0.44, 0.41, 0.38, 0.35, 0.32, 0.28, 0.25], op: 'mul' },
		{ stat: 'mAtkSpd', val: [0.9, 0.81, 0.73, 0.66, 0.6, 0.55, 0.51, 0.47, 0.44, 0.41, 0.38, 0.35, 0.32, 0.28, 0.25], op: 'mul' },
		{ stat: 'accCombat', val: [5, 9, 13, 17, 21, 25, 29, 33, 37, 40, 42, 44, 46, 48, 50], op: 'sub' },
		{ stat: 'rEvas', val: [5, 9, 13, 17, 21, 25, 29, 33, 37, 40, 42, 44, 46, 48, 50], op: 'sub' },
		{ stat: 'pDef', val: [0.91, 0.83, 0.77, 0.72, 0.68, 0.65, 0.62, 0.59, 0.56, 0.53, 0.5, 0.47, 0.44, 0.42, 0.4], op: 'mul' },
		{ stat: 'mDef', val: [0.91, 0.83, 0.77, 0.72, 0.68, 0.65, 0.62, 0.59, 0.56, 0.53, 0.5, 0.47, 0.44, 0.42, 0.4], op: 'mul' },
		{ stat: 'runSpd', val: [0.95, 0.9, 0.87, 0.83, 0.8, 0.77, 0.74, 0.71, 0.68, 0.66, 0.64, 0.63, 0.62, 0.61, 0.6], op: 'mul' } ]},
	{ id: 5078, levels: 1, name: 'Frintezza Critical Power', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cAtk', val: 1.5, op: 'mul' } ]},
	{ id: 5079, levels: 1, name: 'NPC Focused Haste', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' },
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 5080, levels: 1, name: 'NPC Mighty Haste', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' },
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 5087, levels: 2, name: 'Berserk', target: 'SELF', operateType: 'T', effectType: 'Buff', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' },
		{ stat: 'pAtk', val: [1.9, 2.8], op: 'mul' },
		{ stat: 'pDef', val: [1, 2.8], op: 'mul' } ]},
	{ id: 5106, levels: 4, name: 'Capture A State', target: 'ONE', operateType: 'A2', effectType: 'Fusion', abnormalType: 'seizure_a', effects: [
		{ stat: 'runSpd', val: 0.7, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.7, op: 'mul' } ]},
	{ id: 5107, levels: 4, name: 'Capture B State', target: 'ONE', operateType: 'A2', effectType: 'Fusion', abnormalType: 'seizure_b', effects: [
		{ stat: 'runSpd', val: 0.7, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.7, op: 'mul' } ]},
	{ id: 5108, levels: 4, name: 'Capture C State', target: 'ONE', operateType: 'A2', effectType: 'Fusion', abnormalType: 'seizure_c', effects: [
		{ stat: 'runSpd', val: 0.7, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.7, op: 'mul' } ]},
	{ id: 5112, levels: 12, name: 'Stun', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 5113, levels: 12, name: 'Castle Self AE Dispell Buff', target: 'AURA', operateType: 'A1', effectType: 'Cancel' },
	{ id: 5114, levels: 12, name: 'Hold', target: 'AURA', operateType: 'A2', effectType: 'Root', abnormalType: 'root_magically' },
	{ id: 5117, levels: 1, name: 'Stun', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 5118, levels: 1, name: 'Cancel Sailren Use', target: 'AURA', operateType: 'A1', effectType: 'Cancel' },
	{ id: 5122, levels: 1, name: 'Sailren Use Might', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.5, op: 'mul' } ]},
	{ id: 5123, levels: 1, name: 'Maximum Defense', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'combination', effects: [
		{ stat: 'pDef', val: 1000, op: 'add' },
		{ stat: 'mDef', val: 800, op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' } ]},
	{ id: 5125, levels: 1, name: 'Maximum Resist Status', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'combination', effects: [
		{ stat: 'debuffVuln', val: 60, op: 'sub' } ]},
	{ id: 5126, levels: 1, name: 'Maximum Recovery', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'combination', effects: [
		{ stat: 'regHp', val: 1.4, op: 'mul' },
		{ stat: 'regCp', val: 1.4, op: 'mul' } ]},
	{ id: 5127, levels: 1, name: 'Recover Force', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'combination', effects: [
		{ stat: 'pAtk', val: 1.2, op: 'mul' } ]},
	{ id: 5128, levels: 1, name: 'Maximize long-range weapon use', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'combination', effects: [
		{ stat: 'pAtk', val: 1.2, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'accCombat', val: 10, op: 'add', using: 'Bow,Crossbow' } ]},
	{ id: 5129, levels: 1, name: 'Smokescreen', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'combination', effects: [
		{ stat: 'rEvas', val: 15, op: 'add' },
		{ stat: 'blowRate', val: 1.2, op: 'mul' } ]},
	{ id: 5137, levels: 1, name: 'Hold of King', target: 'AURA', operateType: 'A2', effectType: 'Root', abnormalType: 'root_magically' },
	{ id: 5140, levels: 1, name: 'Dark Curse', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'attack_time_up', effects: [
		{ stat: 'pAtkSpd', val: 0.77, op: 'mul' } ]},
	{ id: 5147, levels: 10, name: 'Blessed Body', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'maxHp', val: [24, 48, 72, 96, 120, 144, 168, 192, 216, 240], op: 'add' } ]},
	{ id: 5148, levels: 10, name: 'Prayer', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'healEffect', val: [1.04, 1.04, 1.04, 1.05, 1.05, 1.05, 1.06, 1.06, 1.06, 1.07], op: 'mul' } ]},
	{ id: 5150, levels: 10, name: 'Blessed Soul', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'maxMp', val: [16, 32, 48, 68, 80, 96, 112, 128, 144, 160], op: 'add' } ]},
	{ id: 5151, levels: 10, name: 'Mana Gain', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'manaCharge', val: 1, op: 'add' } ]},
	{ id: 5153, levels: 10, name: 'Cheer', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'maxCp', val: [24, 48, 72, 96, 120, 144, 168, 192, 216, 240], op: 'add' } ]},
	{ id: 5154, levels: 10, name: 'Might', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'pAtk', val: [23.64, 27.96, 32.76, 37.98, 43.62, 49.62, 55.86, 62.28, 68.88, 79.74], op: 'add' } ]},
	{ id: 5156, levels: 10, name: 'Empower', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'mAtk', val: [15.9, 18.65, 21.6, 24.9, 28.4, 32.15, 36.05, 40.1, 44.2, 50.95], op: 'add' } ]},
	{ id: 5157, levels: 10, name: 'Duel Might', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' } ]},
	{ id: 5158, levels: 10, name: 'Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'pDef', val: [30.2, 33.72, 37.4, 41.28, 45.32, 49.52, 53.88, 58.32, 62.88, 70.6], op: 'add' } ]},
	{ id: 5159, levels: 10, name: 'Magic Barrier', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'mDef', val: [37, 40, 44, 48, 52, 56, 61, 65, 70, 77], op: 'add' } ]},
	{ id: 5161, levels: 10, name: 'Agility', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'rEvas', val: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4], op: 'add' } ]},
	{ id: 5162, levels: 10, name: 'Guidance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'accCombat', val: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4], op: 'add' } ]},
	{ id: 5163, levels: 10, name: 'Focus', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'rCrit', val: [0.05, 0.05, 0.05, 0.1, 0.1, 0.1, 0.15, 0.15, 0.15, 0.2], op: 'basemul' } ]},
	{ id: 5164, levels: 10, name: 'Wild Magic', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'abnormal_item', effects: [
		{ stat: 'mCritRate', val: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4], op: 'add' } ]},
	{ id: 5182, levels: 1, name: 'Blessing of Protection', target: 'ONE', operateType: 'A2', effectType: 'ProtectionBlessing', abnormalType: 'pk_protect' },
	{ id: 5183, levels: 1, name: 'Production: Dimensional Stun', target: 'AURA', operateType: 'A1', effectType: 'ThrowUp' },
	{ id: 5186, levels: 2, name: 'Pet Haste', target: 'OWNER_PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 5187, levels: 4, name: 'Pet Vampiric Rage', target: 'OWNER_PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: [6, 7, 8, 9], op: 'add' } ]},
	{ id: 5188, levels: 3, name: 'Pet Regeneration', target: 'OWNER_PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: [1.1, 1.15, 1.2], op: 'mul' } ]},
	{ id: 5189, levels: 6, name: 'Pet Blessed Body', target: 'OWNER_PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 5190, levels: 6, name: 'Pet Blessed Soul', target: 'OWNER_PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: [1.1, 1.15, 1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 5191, levels: 3, name: 'Pet Guidance', target: 'OWNER_PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add' } ]},
	{ id: 5192, levels: 2, name: 'Pet Wind Walk', target: 'OWNER_PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: [20, 33], op: 'add' } ]},
	{ id: 5193, levels: 3, name: 'Pet Acumen', target: 'OWNER_PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: [1.15, 1.23, 1.3], op: 'mul' } ]},
	{ id: 5194, levels: 3, name: 'Pet Empower', target: 'OWNER_PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: [1.55, 1.65, 1.75], op: 'mul' } ]},
	{ id: 5201, levels: 6, name: 'Pet Concentration', target: 'OWNER_PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'cancel_prob_down', effects: [
		{ stat: 'cancel', val: [18, 25, 36, 42, 48, 53], op: 'sub' } ]},
	{ id: 5202, levels: 12, name: 'Stun', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 5203, levels: 12, name: 'Fear', target: 'AURA', operateType: 'A2', effectType: 'Fear', abnormalType: 'turn_flee' },
	{ id: 5208, levels: 1, name: 'Event Wind walk', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 5209, levels: 1, name: 'Event Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 5210, levels: 1, name: 'Event Bless the body', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 5211, levels: 1, name: 'Event Vampiric rage', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 5212, levels: 1, name: 'Event Regeneration', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: 1.2, op: 'mul' } ]},
	{ id: 5213, levels: 1, name: 'Event Haste', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 5214, levels: 1, name: 'Event Bless the soul', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 5215, levels: 1, name: 'Event Acumen', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 5216, levels: 1, name: 'Event Concentration', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'cancel_prob_down', effects: [
		{ stat: 'cancel', val: 18, op: 'sub' } ]},
	{ id: 5217, levels: 1, name: 'Event Empower', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.55, op: 'mul' } ]},
	{ id: 5221, levels: 1, name: 'Balor - Physical Close Range Weak Point', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'bluntWpnVuln', val: 1.7, op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: 1.7, op: 'mul' },
		{ stat: 'daggerWpnVuln', val: 1.7, op: 'mul' },
		{ stat: 'swordWpnVuln', val: 1.7, op: 'mul' },
		{ stat: 'bigSwordWpnVuln', val: 1.7, op: 'mul' },
		{ stat: 'dualFistWpnVuln', val: 1.7, op: 'mul' },
		{ stat: 'dualWpnVuln', val: 1.7, op: 'mul' },
		{ stat: 'poleWpnVuln', val: 1.7, op: 'mul' },
		{ stat: 'dualDaggerWpnVuln', val: 1.7, op: 'mul' } ]},
	{ id: 5222, levels: 1, name: 'Balor - Physical Long Range Weak Point', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'bowWpnVuln', val: 1.7, op: 'mul' } ]},
	{ id: 5223, levels: 1, name: 'Balor - Magic Weak Point', target: 'SELF', operateType: 'T', effectType: 'ManaDamOverTime', effects: [
		{ stat: 'mDef', val: 0.3, op: 'mul' } ]},
	{ id: 5224, levels: 1, name: 'Berserk', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'pAtk', val: 1.5, op: 'mul' },
		{ stat: 'pDef', val: 1.5, op: 'mul' } ]},
	{ id: 5225, levels: 1, name: 'Invincible', target: 'SELF', operateType: 'A2', effectType: 'Invincible', abnormalType: 'pd_up_special' },
	{ id: 5230, levels: 1, name: 'Stun', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 5231, levels: 1, name: 'Stun', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 5232, levels: 1, name: 'Stun', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 5236, levels: 1, name: 'Speed Up', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 5237, levels: 1, name: 'Speed Down', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_down', effects: [
		{ stat: 'runSpd', val: 0.8, op: 'mul' } ]},
	{ id: 5239, levels: 5, name: 'Event Timer', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'time_check' },
	{ id: 5244, levels: 1, name: 'Physical Up', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 5245, levels: 1, name: 'Magical Up', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.15, op: 'mul' } ]},
	{ id: 5259, levels: 12, name: 'Fear', target: 'AURA', operateType: 'A2', effectType: 'Fear', abnormalType: 'turn_flee' },
	{ id: 5261, levels: 1, name: 'Zombie', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 43, op: 'set' },
		{ stat: 'DEX', val: 33, op: 'set' },
		{ stat: 'CON', val: 29, op: 'set' },
		{ stat: 'INT', val: 29, op: 'set' },
		{ stat: 'WIT', val: 11, op: 'set' },
		{ stat: 'MEN', val: 25, op: 'set' } ]},
	{ id: 5268, levels: 17, name: 'Poison', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'poison' },
	{ id: 5269, levels: 17, name: 'Slow Trap', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'all_speed_down', effects: [
		{ stat: 'runSpd', val: 0.7, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.77, op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.7, op: 'mul' } ]},
	{ id: 5270, levels: 16, name: 'Flash Trap', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 5272, levels: 17, name: 'Decoy Provocation', target: 'AURA', operateType: 'A1', effectType: 'TargetMe' },
	{ id: 5306, levels: 9, name: 'Paralysis', target: 'AURA', operateType: 'A2', effectType: 'Paralyze', abnormalType: 'paralyze' },
	{ id: 5366, levels: 9, name: 'Poison', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'poison' },
	{ id: 5367, levels: 9, name: 'Paralysis', target: 'AURA', operateType: 'A2', effectType: 'Paralyze', abnormalType: 'paralyze' },
	{ id: 5395, levels: 3, name: 'NPC Clan Buff - Super Might Haste', target: 'CLAN', operateType: 'A2', effectType: 'Grow', abnormalType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.5, 2.0, 3.0], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.33, 1.33, 1.5], op: 'mul' } ]},
	{ id: 5401, levels: 1, name: 'Stun', target: 'AURA', operateType: 'A2', effectType: 'ThrowUp', abnormalType: 'fly_away' },
	{ id: 5422, levels: 12, name: 'Flame', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'fire_dot', effects: [
		{ stat: 'mAtk', val: [9.16, 15.36, 27.82, 41.49, 61.66, 84.61, 111.26, 126.31, 142.73, 160.7, 180.46, 201.65], op: 'add' },
		{ stat: 'runSpd', val: 0.7, op: 'mul' } ]},
	{ id: 5423, levels: 12, name: 'Poison', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'speed_down', effects: [
		{ stat: 'runSpd', val: 0.7, op: 'mul' } ]},
	{ id: 5424, levels: 12, name: 'Bleed', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'bleeding', effects: [
		{ stat: 'runSpd', val: 0.7, op: 'mul' } ]},
	{ id: 5425, levels: 1, name: 'Iron Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'iron_shield_i', effects: [
		{ stat: 'sDef', val: 1.3, op: 'mul' } ]},
	{ id: 5426, levels: 1, name: 'Counter Chance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'archer_special', effects: [
		{ stat: 'pReuse', val: 0.85, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 5427, levels: 1, name: 'Counter Rapid Shot', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'archer_special', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul', using: 'Bow,Crossbow' } ]},
	{ id: 5428, levels: 1, name: 'Counter Dash', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'archer_special_i', effects: [
		{ stat: 'runSpd', val: 40, op: 'add' } ]},
	{ id: 5434, levels: 1, name: 'Gust', target: 'AURA', operateType: 'A2', trigger: 5494, effectType: 'Stun', abnormalType: 'stun' },
	{ id: 5437, levels: 2, name: 'Dissonance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 0.95, op: 'mul' },
		{ stat: 'mAtk', val: 0.95, op: 'mul' },
		{ stat: 'accCombat', val: 50, op: 'sub' },
		{ stat: 'runSpd', val: 5, op: 'add' },
		{ stat: 'pDef', val: [0.6, 1], op: 'mul' },
		{ stat: 'mDef', val: [0.6, 1], op: 'mul' },
		{ stat: 'rEvas', val: [50, 0], op: 'sub' } ]},
	{ id: 5443, levels: 4, name: 'Cry of the Wolf', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'pa_down', effects: [
		{ stat: 'pAtkSpd', val: 0.77, op: 'mul' } ]},
	{ id: 5445, levels: 1, name: 'Awakening', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pinch', effects: [
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'rEvas', val: 4, op: 'sub' } ]},
	{ id: 5451, levels: 1, name: 'Enervation', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'all_speed_down', effects: [
		{ stat: 'runSpd', val: 0.7, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.77, op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.7, op: 'mul' } ]},
	{ id: 5452, levels: 3, name: 'Spite', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 't_crt_dmg_up', effects: [
		{ stat: 'critVuln', val: [1.4, 1.5, 1.6], op: 'mul' } ]},
	{ id: 5491, levels: 1, name: 'Decrease Bow/Crossbow Atk. Spd.', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 0.5, op: 'mul', using: 'Bow,Crossbow' } ]},
	{ id: 5495, levels: 1, name: 'Bleed', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'bleeding' },
	{ id: 5498, levels: 1, name: 'Self-Destruct', target: 'AURA', operateType: 'A1', effectType: 'TargetMe' },
	{ id: 5502, levels: 1, name: 'Stuns', target: 'AURA', operateType: 'A2', effectType: 'Stun', abnormalType: 'stun' },
	{ id: 5503, levels: 1, name: 'Ultimate Guard', target: 'SELF', operateType: 'A2', effectType: 'ImmobileBuff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'pDef', val: 1800, op: 'add' },
		{ stat: 'mDef', val: 1350, op: 'add' },
		{ stat: 'cancelVuln', val: 80, op: 'sub' },
		{ stat: 'regHp', val: 1.8, op: 'mul' } ]},
	{ id: 5504, levels: 1, name: 'Shield Defense', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rShld', val: 1.9, op: 'mul' } ]},
	{ id: 5509, levels: 1, name: 'Fire Power', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'armor_fire', effects: [
		{ stat: 'fireRes', val: 50, op: 'sub' } ]},
	{ id: 5510, levels: 1, name: 'Water Power', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'armor_water', effects: [
		{ stat: 'waterRes', val: 50, op: 'sub' } ]},
	{ id: 5511, levels: 1, name: 'Wind Power', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'armor_wind', effects: [
		{ stat: 'windRes', val: 50, op: 'sub' } ]},
	{ id: 5512, levels: 1, name: 'Earth Power', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'armor_earth', effects: [
		{ stat: 'earthRes', val: 50, op: 'sub' } ]},
	{ id: 5517, levels: 1, name: 'Nurture', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: 10, op: 'mul' } ]},
	{ id: 5519, levels: 1, name: 'Chain Buff - Power Up', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'mAtk', val: 1.75, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' },
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 5520, levels: 1, name: 'Chain Buff - Vampiric Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' },
		{ stat: 'reflectDam', val: 60, op: 'add' } ]},
	{ id: 5521, levels: 1, name: 'Chain Buff - Critical Sense', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' },
		{ stat: 'rCrit', val: 0.3, op: 'basemul' },
		{ stat: 'mCritRate', val: 3, op: 'basemul' } ]},
	{ id: 5524, levels: 1, name: 'Chain Buff - Resistance to Bow and Magic attacks', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'cancelVuln', val: 100, op: 'sub' },
		{ stat: 'bowWpnVuln', val: 0.6, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 5525, levels: 1, name: 'Chain Buff - Resistance to Melee Attacks', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' },
		{ stat: 'swordWpnVuln', val: 0.75, op: 'mul' },
		{ stat: 'bigSwordWpnVuln', val: 0.75, op: 'mul' },
		{ stat: 'poleWpnVuln', val: 0.75, op: 'mul' },
		{ stat: 'bluntWpnVuln', val: 0.75, op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: 0.75, op: 'mul' },
		{ stat: 'daggerWpnVuln', val: 0.75, op: 'mul' },
		{ stat: 'fistWpnVuln', val: 0.75, op: 'mul' },
		{ stat: 'dualWpnVuln', val: 0.75, op: 'mul' },
		{ stat: 'dualFistWpnVuln', val: 0.75, op: 'mul' },
		{ stat: 'dualDaggerWpnVuln', val: 0.75, op: 'mul' } ]},
	{ id: 5526, levels: 1, name: 'Challenger\'s Blessing', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'shield_prob_up', effects: [
		{ stat: 'rShld', val: 1.9, op: 'mul' },
		{ stat: 'pDef', val: 1000, op: 'add' },
		{ stat: 'darkRes', val: 50, op: 'add' } ]},
	{ id: 5539, levels: 1, name: 'Little Angel Agathion Special Skill - Mysterious Power', target: 'SELF', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head' },
	{ id: 5543, levels: 1, name: 'Little Devil Agathion Special Skill - Mysterious Power', target: 'SELF', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head' },
	{ id: 5547, levels: 1, name: 'Maximum Ability', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'maximum_ability', effects: [
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0, op: 'mul' },
		{ stat: 'healEffect', val: 1.1, op: 'mul' } ]},
	{ id: 5552, levels: 12, name: 'NPC Hill Up', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'healEffect', val: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], op: 'add' } ]},
	{ id: 5553, levels: 12, name: 'NPC HP Region', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: [1.2, 1.3, 1.4, 1.5, 1.75, 2, 3, 4, 5, 6, 8.5, 11], op: 'mul' } ]},
	{ id: 5554, levels: 12, name: 'NPC Silence Resistance enhanced', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75, 100], op: 'add' } ]},
	{ id: 5555, levels: 12, name: 'NPC Silence Resistance weakened', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75, 100], op: 'sub' } ]},
	{ id: 5556, levels: 1, name: 'Protection Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'protection', effects: [
		{ stat: 'mDef', val: 1000, op: 'add' },
		{ stat: 'fireRes', val: 20, op: 'add' },
		{ stat: 'waterRes', val: 20, op: 'add' },
		{ stat: 'windRes', val: 20, op: 'add' },
		{ stat: 'earthRes', val: 20, op: 'add' },
		{ stat: 'holyRes', val: 20, op: 'add' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 5559, levels: 1, name: 'Physical Pose', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'will', effects: [
		{ stat: 'physicalSkillPower', val: 1.2, op: 'mul' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul' } ]},
	{ id: 5561, levels: 3, name: 'Seed of Revenge', target: 'SELF', operateType: 'A2', trigger: 5561, effectType: 'ChanceSkillTrigger', abnormalType: 'seed_of_knight', effects: [
		{ stat: 'pAtk', val: 300, op: 'add' },
		{ stat: 'rCrit', val: [0, 0.3, 0.3], op: 'basemul' },
		{ stat: 'cAtk', val: [1, 1, 1.25], op: 'mul' } ]},
	{ id: 5562, levels: 3, name: 'Spirit of Phoenix', target: 'SELF', operateType: 'A2', trigger: 5562, effectType: 'ChanceSkillTrigger', abnormalType: 'seed_of_knight', effects: [
		{ stat: 'pDef', val: 500, op: 'add' },
		{ stat: 'fireRes', val: [0, 30, 30], op: 'add' },
		{ stat: 'darkRes', val: [0, 30, 30], op: 'add' },
		{ stat: 'healEffect', val: [1, 1, 1.3], op: 'mul' } ]},
	{ id: 5563, levels: 3, name: 'Eva\'s Will', target: 'SELF', operateType: 'A2', trigger: 5563, effectType: 'ChanceSkillTrigger', abnormalType: 'seed_of_knight', effects: [
		{ stat: 'mDef', val: 400, op: 'add' },
		{ stat: 'waterPower', val: [0, 20, 20], op: 'add' },
		{ stat: 'rCrit', val: [0, 0, 0.2], op: 'basemul' } ]},
	{ id: 5564, levels: 3, name: 'Pain of Shilen', target: 'SELF', operateType: 'A2', trigger: 5564, effectType: 'ChanceSkillTrigger', abnormalType: 'seed_of_knight', effects: [
		{ stat: 'cAtk', val: 1.2, op: 'mul' },
		{ stat: 'windPower', val: [0, 20, 20], op: 'add' },
		{ stat: 'absorbDam', val: [0, 0, 8], op: 'add' } ]},
	{ id: 5570, levels: 1, name: 'Excessive Loyalty', target: 'PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'summon_condition', effects: [
		{ stat: 'pAtk', val: 1.35, op: 'mul' },
		{ stat: 'mAtk', val: 1.75, op: 'mul' },
		{ stat: 'cAtk', val: 1.35, op: 'mul' },
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 5572, levels: 1, name: 'Warrior Ability - Haste', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'sub_trigger_haste', effects: [
		{ stat: 'pAtkSpd', val: 1.32, op: 'mul' } ]},
	{ id: 5573, levels: 1, name: 'Knight Ability - Defense', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'sub_trigger_defence', effects: [
		{ stat: 'pDef', val: 1.24, op: 'mul' },
		{ stat: 'mDef', val: 1.24, op: 'mul' } ]},
	{ id: 5574, levels: 1, name: 'Log Ability - Critical Chance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'sub_trigger_crt_rate_up', effects: [
		{ stat: 'rCrit', val: 0.32, op: 'basemul' } ]},
	{ id: 5576, levels: 1, name: 'Enchanter Ability - Barrier', target: 'SELF', operateType: 'A2', effectType: 'Invincible', abnormalType: 'sub_trigger_defence' },
	{ id: 5578, levels: 1, name: 'Summoner Ability - Spirit', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'sub_trigger_spirit', effects: [
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'mAtk', val: 1.08, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' } ]},
	{ id: 5583, levels: 1, name: 'Divine Beast Roar', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'pa_down', effects: [
		{ stat: 'pAtk', val: 0.77, op: 'mul' } ]},
	{ id: 5586, levels: 3, name: 'Pet Might', target: 'OWNER_PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 5587, levels: 3, name: 'Pet Shield', target: 'OWNER_PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: [1.08, 1.12, 1.15], op: 'mul' } ]},
	{ id: 5588, levels: 3, name: 'Pet Focus', target: 'OWNER_PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.2, 0.25, 0.3], op: 'basemul' } ]},
	{ id: 5589, levels: 3, name: 'Pet Death Whisper', target: 'OWNER_PET', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 5597, levels: 1, name: 'Invalid Skill cancel', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'cancel', val: 10000, op: 'sub' } ]},
	{ id: 5599, levels: 12, name: 'Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75, 100], op: 'sub' } ]},
	{ id: 5601, levels: 12, name: 'Short-Range Physical Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'swordWpnVuln', val: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.45, 0.3, 0], op: 'mul' },
		{ stat: 'bigSwordWpnVuln', val: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.45, 0.3, 0], op: 'mul' },
		{ stat: 'bluntWpnVuln', val: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.45, 0.3, 0], op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.45, 0.3, 0], op: 'mul' },
		{ stat: 'daggerWpnVuln', val: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.45, 0.3, 0], op: 'mul' },
		{ stat: 'dualDaggerWpnVuln', val: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.45, 0.3, 0], op: 'mul' },
		{ stat: 'poleWpnVuln', val: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.45, 0.3, 0], op: 'mul' },
		{ stat: 'fistWpnVuln', val: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.45, 0.3, 0], op: 'mul' },
		{ stat: 'dualFistWpnVuln', val: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.45, 0.3, 0], op: 'mul' },
		{ stat: 'dualWpnVuln', val: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.45, 0.3, 0], op: 'mul' },
		{ stat: 'rapierWpnVuln', val: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.45, 0.3, 0], op: 'mul' },
		{ stat: 'ancientWpnVuln', val: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.45, 0.3, 0], op: 'mul' },
		{ stat: 'petWpnVuln', val: [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.45, 0.3, 0], op: 'mul' } ]},
	{ id: 5603, levels: 1, name: 'Dagger Mastery', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'weapon_mastery', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: 0.4, op: 'mul' },
		{ stat: 'blowRate', val: 1.1, op: 'mul' } ]},
	{ id: 5604, levels: 1, name: 'Blunt Mastery', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'weapon_mastery', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: 0.4, op: 'mul' },
		{ stat: 'stunProf', val: 20, op: 'add' } ]},
	{ id: 5605, levels: 2, name: 'Power of Apella', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'apella', effects: [
		{ stat: 'mDef', val: 1.05, op: 'mul', using: 'Heavy' },
		{ stat: 'critAddVuln', val: 3, op: 'sub', using: 'Heavy' },
		{ stat: 'rCrit', val: [0, 30], op: 'add' } ]},
	{ id: 5607, levels: 2, name: 'Power of Apella', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'apella', effects: [
		{ stat: 'rEvas', val: 2, op: 'add', using: 'Light' },
		{ stat: 'critAddVuln', val: 86, op: 'sub', using: 'Light' },
		{ stat: 'pAtkSpd', val: [1, 1.025], op: 'mul' } ]},
	{ id: 5608, levels: 2, name: 'Power of Apella', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'apella', effects: [
		{ stat: 'pDef', val: 1.05, op: 'mul', using: 'Magic' },
		{ stat: 'runSpd', val: 10, op: 'add' },
		{ stat: 'mAtk', val: [1, 1.0625], op: 'mul' } ]},
	{ id: 5620, levels: 12, name: 'Short-Range Physical Attack Weakness', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'swordWpnVuln', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.55, 1.7, 2], op: 'mul' },
		{ stat: 'bigSwordWpnVuln', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.55, 1.7, 2], op: 'mul' },
		{ stat: 'bluntWpnVuln', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.55, 1.7, 2], op: 'mul' },
		{ stat: 'bigBluntWpnVuln', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.55, 1.7, 2], op: 'mul' },
		{ stat: 'daggerWpnVuln', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.55, 1.7, 2], op: 'mul' },
		{ stat: 'dualDaggerWpnVuln', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.55, 1.7, 2], op: 'mul' },
		{ stat: 'poleWpnVuln', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.55, 1.7, 2], op: 'mul' },
		{ stat: 'fistWpnVuln', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.55, 1.7, 2], op: 'mul' },
		{ stat: 'dualFistWpnVuln', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.55, 1.7, 2], op: 'mul' },
		{ stat: 'dualWpnVuln', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.55, 1.7, 2], op: 'mul' },
		{ stat: 'rapierWpnVuln', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.55, 1.7, 2], op: 'mul' },
		{ stat: 'ancientWpnVuln', val: [1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.55, 1.7, 2], op: 'mul' } ]},
	{ id: 5627, levels: 1, name: 'Adventurer\'s Wind Walk', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 5628, levels: 1, name: 'Adventurer\'s Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 5629, levels: 1, name: 'Adventurer\'s Bless the Body', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 5630, levels: 1, name: 'Adventurer\'s Vampiric Rage', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 5631, levels: 1, name: 'Adventurer\'s Regeneration', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_up', effects: [
		{ stat: 'regHp', val: 1.2, op: 'mul' } ]},
	{ id: 5632, levels: 1, name: 'Adventurer\'s Haste', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 5633, levels: 1, name: 'Adventurer\'s Bless the Soul', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 5634, levels: 1, name: 'Adventurer\'s Acumen', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 5635, levels: 1, name: 'Adventurer\'s Concentration', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'cancel_prob_down', effects: [
		{ stat: 'cancel', val: 18, op: 'sub' } ]},
	{ id: 5636, levels: 1, name: 'Adventurer\'s Empower', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.55, op: 'mul' } ]},
	{ id: 5637, levels: 1, name: 'Adventurer\'s Magic Barrier', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 5638, levels: 4, name: 'Feline Queen - Bless the Body', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: [1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 5639, levels: 4, name: 'Feline Queen - Bless the Soul', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: [1.2, 1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 5640, levels: 2, name: 'Feline Queen - Haste', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [1.15, 1.33], op: 'mul' } ]},
	{ id: 5643, levels: 1, name: 'Unicorn Seraphim - Acumen', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 5646, levels: 2, name: 'Unicorn Seraphim - Wild Magic', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'magic_critical_up', effects: [
		{ stat: 'mCritRate', val: [2, 3], op: 'add' } ]},
	{ id: 5647, levels: 3, name: 'Unicorn Seraphim - Clarity', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'cheap_magic', effects: [
		{ stat: 'MagicalMpConsumeRate', val: [0.9, 0.85, 0.8], op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: [0.96, 0.93, 0.9], op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: [0.96, 0.93, 0.9], op: 'mul' } ]},
	{ id: 5648, levels: 2, name: 'Unicorn Seraphim - Empower', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: [1.65, 1.75], op: 'mul' } ]},
	{ id: 5652, levels: 3, name: 'Nightshade - Death Whisper', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: [1.25, 1.3, 1.35], op: 'mul' } ]},
	{ id: 5653, levels: 2, name: 'Nightshade - Focus', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: [0.25, 0.3], op: 'basemul' } ]},
	{ id: 5654, levels: 3, name: 'Nightshade - Guidance', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: [2, 3, 4], op: 'add' } ]},
	{ id: 5655, levels: 1, name: 'Transform Gatekeeper', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 5659, levels: 2, name: 'Gatekeeper Berserker Spirit', target: 'PARTY_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'mAtk', val: [1.1, 1.16], op: 'mul' },
		{ stat: 'pAtk', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'mDef', val: [0.9, 0.84], op: 'mul' },
		{ stat: 'pDef', val: [0.95, 0.92], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.05, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 8], op: 'add' },
		{ stat: 'rEvas', val: [2, 4], op: 'sub' } ]},
	{ id: 5663, levels: 5, name: 'Resistance to Ancient Sword', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'ancientWpnVuln', val: [0.9, 0.8, 0.7, 0.6, 0.5], op: 'mul' } ]},
	{ id: 5664, levels: 5, name: 'Weakness to Ancient Sword', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'ancientWpnVuln', val: [1.11, 1.25, 1.43, 1.67, 2], op: 'mul' } ]},
	{ id: 5674, levels: 1, name: 'Evasion Chance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'evasion_buff', effects: [
		{ stat: 'blowRate', val: 1.1, op: 'mul' } ]},
	{ id: 5675, levels: 1, name: 'Evasion Haste', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'evasion_buff', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 5679, levels: 3, name: 'Oblivion Trap', target: 'AURA', operateType: 'A2', trigger: 5680, effectType: 'ChanceSkillTrigger', abnormalType: 'mirage_trap' },
	{ id: 5685, levels: 1, name: 'PvP Weapon - Casting', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pvp_weapon_buff', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 5686, levels: 1, name: 'PvP Weapon - Rapid Fire', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pvp_weapon_buff', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 5689, levels: 1, name: 'PvP Shield - Reflect Damage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pvp_weapon_buff', effects: [
		{ stat: 'reflectDam', val: 50, op: 'add' } ]},
	{ id: 5690, levels: 1, name: 'PvP Armor - Damage Down', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pvp_weapon_buff', effects: [
		{ stat: 'pvpMagicalDef', val: 1.3, op: 'mul' },
		{ stat: 'pvpPhysSkillsDef', val: 1.3, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.3, op: 'mul' } ]},
	{ id: 5691, levels: 1, name: 'PvP Armor - Critical Down', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pvp_weapon_buff', effects: [
		{ stat: 'critDamEvas', val: 1.15, op: 'mul' },
		{ stat: 'critVuln', val: 0.85, op: 'mul' } ]},
	{ id: 5696, levels: 1, name: 'Dizziness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'invincibility', effects: [
		{ stat: 'runSpd', val: 0.8, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.8, op: 'mul' } ]},
	{ id: 5699, levels: 7, name: 'Decrease P. Def', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_down', effects: [
		{ stat: 'pDef', val: 0.34, op: 'mul' } ]},
	{ id: 5700, levels: 7, name: 'Magic Resistance Decrease', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_down', effects: [
		{ stat: 'mDef', val: 0.34, op: 'mul' } ]},
	{ id: 5701, levels: 7, name: 'Decrease P. Atk', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_down', effects: [
		{ stat: 'pAtk', val: 0.34, op: 'mul' } ]},
	{ id: 5711, levels: 1, name: 'Power of Rage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up' },
	{ id: 5715, levels: 1, name: 'Electric Flame', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'fire_dot', effects: [
		{ stat: 'runSpd', val: 0.77, op: 'mul' } ]},
	{ id: 5739, levels: 1, name: 'Invincible', target: 'CLAN', operateType: 'A2', effectType: 'Invincible', abnormalType: 'invincibility' },
	{ id: 5753, levels: 1, name: 'Awakening', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'public_slot' },
	{ id: 5771, levels: 1, name: 'Buff Control', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'magical_stance' },
	{ id: 5831, levels: 1, name: 'Polearm Swing', target: 'AURA', operateType: 'A1', effectType: 'DamOverTime', abnormalType: 'bleeding' },
	{ id: 5832, levels: 1, name: 'Hate Aura', target: 'AURA', operateType: 'A2', effectType: 'TargetMe', abnormalType: 'lock' },
	{ id: 5833, levels: 1, name: 'Shield', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 5834, levels: 1, name: 'Magic Barrier', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: 1.33, op: 'mul' } ]},
	{ id: 5836, levels: 1, name: 'Greater Heal', target: 'CLAN', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_others' },
	{ id: 5841, levels: 1, name: 'Multi Defense', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'instinct', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' },
		{ stat: 'mDef', val: 1.33, op: 'mul' } ]},
	{ id: 5843, levels: 1, name: 'Terror', target: 'AURA', operateType: 'A2', effectType: 'Fear', abnormalType: 'turn_flee' },
	{ id: 5902, levels: 1, name: 'NPC Trigger Target Cancel', target: 'SELF', operateType: 'A1', effectType: 'RemoveTarget' },
	{ id: 5931, levels: 1, name: 'Ultimate Shield', target: 'SELF', operateType: 'T', effectType: 'Invincible' },
	{ id: 5950, levels: 1, name: 'Birthday Cake', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 5982, levels: 1, name: 'Aura Bird - Falcon', target: 'ONE', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 5983, levels: 1, name: 'Aura Bird - Owl', target: 'ONE', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 5987, levels: 1, name: 'Weapon Maintenance', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dwarf_attack_buff', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul', using: 'Sword,Big Sword,Dagger,Dual Dagger,Pole,Rapier,Ancient,Dual Sword,Dual Fist,Blunt,Big Blunt,Bow,Crossbow' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul', using: 'Sword,Big Sword,Dagger,Dual Dagger,Pole,Rapier,Ancient,Dual Sword,Dual Fist' },
		{ stat: 'pAtkRange', val: 100, op: 'add', using: 'Bow,Crossbow' },
		{ stat: 'stunProf', val: 8, op: 'add' } ]},
	{ id: 5988, levels: 1, name: 'Armor Maintenance', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'dwarf_defence_buff', effects: [
		{ stat: 'pDef', val: 1.1, op: 'mul', using: 'Heavy' },
		{ stat: 'pDef', val: 1.05, op: 'mul', using: 'Light' },
		{ stat: 'rEvas', val: 2, op: 'add', using: 'Light' },
		{ stat: 'pDef', val: 1.05, op: 'mul', using: 'Magic' },
		{ stat: 'regMp', val: 2.0, op: 'add', using: 'Magic' } ]},
	{ id: 5993, levels: 1, name: 'Command of Anger', target: 'AURA', operateType: 'A2', trigger: 5902, effectType: 'ChanceSkillTrigger', abnormalType: 'oblivion' },
	{ id: 6034, levels: 1, name: 'Freeze', target: 'ONE', operateType: 'A2', effectType: 'Invincible', abnormalType: 'invincibility' },
	{ id: 6035, levels: 1, name: 'Red Team Transformation', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 6036, levels: 1, name: 'Blue Team Transformation', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 6049, levels: 4, name: 'Battle Cry', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.05, 1.1, 1.2, 1.3], op: 'mul' },
		{ stat: 'pDef', val: [1.05, 1.1, 1.2, 1.3], op: 'mul' },
		{ stat: 'mDef', val: [1.05, 1.1, 1.2, 1.3], op: 'mul' } ]},
	{ id: 6053, levels: 4, name: 'Howl', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: [1.05, 1.1, 1.2, 1.3], op: 'mul' },
		{ stat: 'pDef', val: [1.05, 1.1, 1.2, 1.3], op: 'mul' },
		{ stat: 'mAtk', val: [1.05, 1.1, 1.2, 1.3], op: 'mul' },
		{ stat: 'mDef', val: [1.05, 1.1, 1.2, 1.3], op: 'mul' } ]},
	{ id: 6059, levels: 1, name: 'Counter Critical', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'counter_critical_trigger', effects: [
		{ stat: 'cAtk', val: 2, op: 'mul', using: 'Sword,Big Sword,Blunt,Big Blunt,Dagger,Dual Dagger,Dual Sword,Dual Fist,Pole,Ancient,Rapier' } ]},
	{ id: 6060, levels: 1, name: 'Great Fury', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down_special', effects: [
		{ stat: 'pAtkSpd', val: 1.5, op: 'mul' } ]},
	{ id: 6093, levels: 1, name: 'Panther Hide', target: 'SELF', operateType: 'A2', effectType: 'Hide', abnormalType: 'hide', effects: [
		{ stat: 'runSpd', val: 0.9, op: 'mul' } ]},
	{ id: 6120, levels: 1, name: 'Santa Claus\' Reward', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'event_santa_reward', effects: [
		{ stat: 'maxHp', val: 1.1, op: 'mul' },
		{ stat: 'maxMp', val: 1.1, op: 'mul' },
		{ stat: 'maxCp', val: 1.1, op: 'mul' },
		{ stat: 'runSpd', val: 15, op: 'add' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'mAtk', val: 1.15, op: 'mul' },
		{ stat: 'rCrit', val: 50, op: 'add' },
		{ stat: 'cAtk', val: 1.15, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' } ]},
	{ id: 6127, levels: 1, name: 'Anti-limit', target: 'SELF', operateType: 'P', effectType: 'Buff', abnormalType: 'limit' },
	{ id: 6147, levels: 1, name: 'Kasha\'s Divine Protection', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'dmg_shield', effects: [
		{ stat: 'vengeancePdam', val: 70, op: 'add' },
		{ stat: 'reflectSkillPhysic', val: 70, op: 'add' },
		{ stat: 'reflectDam', val: 70, op: 'add' } ]},
	{ id: 6170, levels: 1, name: 'Shyeed\'s Fury', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul' },
		{ stat: 'mAtk', val: 1.05, op: 'mul' },
		{ stat: 'mCritPower', val: 1.05, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.05, op: 'mul' } ]},
	{ id: 6171, levels: 1, name: 'Full Authority', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ultimate_buff', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul' },
		{ stat: 'mAtk', val: 1.05, op: 'mul' },
		{ stat: 'mCritPower', val: 1.05, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.05, op: 'mul' } ]},
	{ id: 6201, levels: 1, name: 'Transformation Condition - Frog', target: 'ONE', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'weightLimit', val: 11, op: 'mul' },
		{ stat: 'weightPenalty', val: 9000, op: 'add' },
		{ stat: 'inventoryLimit', val: 8, op: 'add' } ]},
	{ id: 6202, levels: 1, name: 'Transformation Condition - Young Child', target: 'ONE', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'weightLimit', val: 11, op: 'mul' },
		{ stat: 'weightPenalty', val: 9000, op: 'add' },
		{ stat: 'inventoryLimit', val: 8, op: 'add' } ]},
	{ id: 6203, levels: 1, name: 'Transformed Condition - Native', target: 'ONE', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'weightLimit', val: 11, op: 'mul' },
		{ stat: 'weightPenalty', val: 9000, op: 'add' },
		{ stat: 'inventoryLimit', val: 8, op: 'add' } ]},
	{ id: 6204, levels: 1, name: 'Transformed Condition - Guards of the Dawn', target: 'ONE', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'weightLimit', val: 11, op: 'mul' },
		{ stat: 'weightPenalty', val: 9000, op: 'add' },
		{ stat: 'inventoryLimit', val: 8, op: 'add' } ]},
	{ id: 6206, levels: 19, name: 'Strider Fear', target: 'AURA', operateType: 'A2', effectType: 'Fear', abnormalType: 'turn_flee' },
	{ id: 6207, levels: 1, name: 'Strider Dash', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up_special', effects: [
		{ stat: 'runSpd', val: 66, op: 'add' } ]},
	{ id: 6209, levels: 4, name: 'Weapon Grade Penalty', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'accCombat', val: 16, op: 'sub' },
		{ stat: 'rCrit', val: [-0.1, -0.2, -0.3, -0.4], op: 'basemul' },
		{ stat: 'cAtk', val: [0.9, 0.8, 0.7, 0.6], op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.9, op: 'mul' },
		{ stat: 'pAtk', val: 0.9, op: 'mul' },
		{ stat: 'magicFailureRate', val: [2000, 4000, 6000, 8000], op: 'add' } ]},
	{ id: 6213, levels: 4, name: 'Armor Grade Penalty', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: [2.5, 5, 7.5, 10], op: 'sub' },
		{ stat: 'pAtkSpd', val: [0.8333, 0.6944, 0.5787, 0.4823], op: 'mul' },
		{ stat: 'mAtkSpd', val: [0.8333, 0.6944, 0.5787, 0.4823], op: 'mul' },
		{ stat: 'runSpd', val: [0.8333, 0.6944, 0.5787, 0.4823], op: 'mul' } ]},
	{ id: 6237, levels: 1, name: 'Moving Speed Decrease', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'speed_down', effects: [
		{ stat: 'runSpd', val: 0.2, op: 'mul' } ]},
	{ id: 6238, levels: 1, name: 'Moving Speed Decrease', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'speed_down', effects: [
		{ stat: 'runSpd', val: 0.5, op: 'mul' },
		{ stat: 'pAtkSpd', val: 0.5, op: 'mul' },
		{ stat: 'mAtkSpd', val: 0.5, op: 'mul' } ]},
	{ id: 6274, levels: 1, name: 'Eternal Blizzard', target: 'AURA', operateType: 'A1', trigger: 6662, effectType: 'ChanceSkillTrigger' },
	{ id: 6275, levels: 1, name: 'Eternal Blizzard', target: 'AURA', operateType: 'A1', trigger: 6662, effectType: 'ChanceSkillTrigger' },
	{ id: 6282, levels: 1, name: 'Reflect Magic', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'reflect_magic_dd', effects: [
		{ stat: 'vengeanceMdam', val: 20, op: 'add' } ]},
	{ id: 6284, levels: 1, name: 'Freya\'s Bless', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' },
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'runSpd', val: 1.15, op: 'mul' } ]},
	{ id: 6285, levels: 1, name: 'Rage of Ice', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' } ]},
	{ id: 6286, levels: 1, name: 'Bless of Sword', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.1, op: 'mul' },
		{ stat: 'regHp', val: 1.15, op: 'mul' } ]},
	{ id: 6287, levels: 1, name: 'Bless of Sword', target: 'AURA', operateType: 'A1', effectType: 'CpHealPercent' },
	{ id: 6288, levels: 1, name: 'Jinia\'s Prayer', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_a', effects: [
		{ stat: 'pDef', val: 4, op: 'mul' },
		{ stat: 'mDef', val: 4, op: 'mul' } ]},
	{ id: 6289, levels: 1, name: 'Kegor\'s Courage', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_b', effects: [
		{ stat: 'pAtk', val: 3, op: 'mul' },
		{ stat: 'mAtk', val: 3, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.25, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.25, op: 'mul' } ]},
	{ id: 6294, levels: 1, name: 'Leader\'s Roar', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 6299, levels: 1, name: 'Breath of Ice Palace - Ice Storm', target: 'AURA', operateType: 'A1', trigger: 6662, effectType: 'ChanceSkillTrigger' },
	{ id: 6300, levels: 1, name: 'Self-Destruction', target: 'AURA', operateType: 'A1', trigger: 6662, effectType: 'ChanceSkillTrigger' },
	{ id: 6301, levels: 2, name: 'Cold Mana\'s Fragment', target: 'AURA', operateType: 'A2', effectType: 'ManaDamOverTime', abnormalType: 'force_meditation' },
	{ id: 6302, levels: 1, name: 'Cold Air', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' },
		{ stat: 'mDef', val: 1.15, op: 'mul' } ]},
	{ id: 6313, levels: 1, name: 'Solina Bless', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up_special', effects: [
		{ stat: 'physicalSkillPower', val: 2, op: 'mul' } ]},
	{ id: 6318, levels: 1, name: 'Divine Shield Protection', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.1, op: 'mul' } ]},
	{ id: 6319, levels: 1, name: 'Sacred Magic Protection', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: 1.1, op: 'mul' } ]},
	{ id: 6320, levels: 1, name: 'Summon Sacred Magic Force', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'pd_down', effects: [
		{ stat: 'pDef', val: 0.77, op: 'mul' },
		{ stat: 'mDef', val: 0.77, op: 'mul' } ]},
	{ id: 6343, levels: 2, name: 'Maguen Plasma - Power', target: 'AREA', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_b', effects: [
		{ stat: 'mAtk', val: [1.08, 1.15], op: 'mul' },
		{ stat: 'pAtk', val: [1.02, 1.03], op: 'mul' } ]},
	{ id: 6365, levels: 2, name: 'Maguen Plasma - Speed', target: 'AREA', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_b', effects: [
		{ stat: 'mAtkSpd', val: [1.04, 1.08], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.04, 1.08], op: 'mul' },
		{ stat: 'runSpd', val: [5, 10], op: 'add' } ]},
	{ id: 6366, levels: 2, name: 'Maguen Plasma - Critical', target: 'AREA', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_b', effects: [
		{ stat: 'rCrit', val: [0.04, 0.08], op: 'basemul' },
		{ stat: 'mCritRate', val: [0.02, 0.04], op: 'basemul' },
		{ stat: 'cAtk', val: [1.05, 1.1], op: 'mul' } ]},
	{ id: 6380, levels: 1, name: 'Bistakon Roar', target: 'AURA', operateType: 'A2', effectType: 'Mute', abnormalType: 'silence_all' },
	{ id: 6382, levels: 1, name: 'Bistakon Rolling Claw', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'bleeding' },
	{ id: 6387, levels: 1, name: 'Bistakon Earthquake', target: 'AURA', operateType: 'A1', effectType: 'RemoveTarget' },
	{ id: 6390, levels: 1, name: 'Cokrakon Sonic Explosion', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'casting_time_up', effects: [
		{ stat: 'mAtkSpd', val: 0.5, op: 'mul' } ]},
	{ id: 6392, levels: 1, name: 'Cokrakon Sonic Shot', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'attack_time_up', effects: [
		{ stat: 'pAtkSpd', val: 0.5, op: 'mul' } ]},
	{ id: 6398, levels: 1, name: 'Cokrakon Sonic Shout', target: 'AURA', operateType: 'A2', effectType: 'Fear', abnormalType: 'turn_flee' },
	{ id: 6404, levels: 1, name: 'Torumba Poison Swing', target: 'AURA', operateType: 'A2', effectType: 'Debuff', abnormalType: 'speed_down', effects: [
		{ stat: 'runSpd', val: 0.3, op: 'mul' } ]},
	{ id: 6417, levels: 1, name: 'Reptilikon Poison Shot', target: 'AURA', operateType: 'A2', effectType: 'ManaDamOverTime', abnormalType: 'dot_mp' },
	{ id: 6418, levels: 1, name: 'Reptilikon Fury Poison Bomb', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'dot_mp' },
	{ id: 6425, levels: 1, name: 'Demotivation Hex', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_down', effects: [
		{ stat: 'pDef', val: 0.1, op: 'mul' } ]},
	{ id: 6429, levels: 1, name: 'Cozy Mucus', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_a', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'regHp', val: 5, op: 'mul' } ]},
	{ id: 6431, levels: 1, name: 'Feral Might', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.19, op: 'mul' } ]},
	{ id: 6432, levels: 1, name: 'Feral Focus', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.35, op: 'basemul' } ]},
	{ id: 6433, levels: 1, name: 'Feral Guidance', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 7, op: 'add' } ]},
	{ id: 6434, levels: 1, name: 'Feral Haste', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.38, op: 'mul' } ]},
	{ id: 6442, levels: 1, name: 'Efficacy of Wisdom', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_e', effects: [
		{ stat: 'pveMagicalDmg', val: 2.0, op: 'mul' } ]},
	{ id: 6443, levels: 1, name: 'Efficacy of Strength', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_e', effects: [
		{ stat: 'pvePhysDmg', val: 2.0, op: 'mul' },
		{ stat: 'pvePhysSkillsDmg', val: 2.0, op: 'mul' } ]},
	{ id: 6444, levels: 1, name: 'Efficacy of Agility', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_e', effects: [
		{ stat: 'pveBowDmg', val: 2.0, op: 'mul' },
		{ stat: 'pveBowSkillsDmg', val: 2.0, op: 'mul' } ]},
	{ id: 6620, levels: 7, name: 'Maguen Plasma', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [100, 150, 200, 250, 300, 350, 400], op: 'add' } ]},
	{ id: 6621, levels: 7, name: 'Maguen Plasma', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [200, 250, 300, 350, 400, 450, 500], op: 'add' } ]},
	{ id: 6631, levels: 1, name: 'Energy of Power', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 6633, levels: 1, name: 'Energy of Attack Speed', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 6635, levels: 1, name: 'Energy of Crt Rate', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 1.3, op: 'mul' } ]},
	{ id: 6636, levels: 1, name: 'Energy of Moving Speed', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 6637, levels: 1, name: 'Vampiric Aura', target: 'ONE', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head', effects: [
		{ stat: 'regHp', val: 2, op: 'mul' },
		{ stat: 'regMp', val: 2, op: 'mul' } ]},
	{ id: 6638, levels: 1, name: 'Aura of Mystery', target: 'ONE', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head', effects: [
		{ stat: 'regHp', val: 2, op: 'mul' },
		{ stat: 'regMp', val: 2, op: 'mul' } ]},
	{ id: 6639, levels: 1, name: 'Bane of Auras - Damage', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 6640, levels: 1, name: 'Energizing Aura', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 6649, levels: 1, name: 'Treykan Transformation', target: 'ONE', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 40, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 43, op: 'set' },
		{ stat: 'INT', val: 21, op: 'set' },
		{ stat: 'WIT', val: 13, op: 'set' },
		{ stat: 'MEN', val: 23, op: 'set' } ]},
	{ id: 6666, levels: 1, name: 'Feral Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.18, op: 'mul' } ]},
	{ id: 6667, levels: 1, name: 'Feral Wind Walk', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 6668, levels: 1, name: 'Feral Death Whisper', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 6669, levels: 1, name: 'Feral Body Bless', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 6670, levels: 1, name: 'Feral Vampiric Rage', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 6671, levels: 1, name: 'Feral Berserker Spirit', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'sub' } ]},
	{ id: 6672, levels: 1, name: 'Feral Bless Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'shield_prob_up', effects: [
		{ stat: 'rShld', val: 1.05, op: 'mul' } ]},
	{ id: 6674, levels: 1, name: 'Energy of Range Increment', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'signal_b', effects: [
		{ stat: 'pAtkRange', val: 50, op: 'add', using: 'Bow, Crossbow' } ]},
	{ id: 6681, levels: 1, name: 'Maguen Speed Walk', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 40, op: 'add' } ]},
	{ id: 6682, levels: 1, name: 'Elite Maguen Speed Walk', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 45, op: 'add' } ]},
	{ id: 6687, levels: 1, name: 'Patience', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'patience', effects: [
		{ stat: 'physicalSkillPower', val: 1.2, op: 'mul' } ]},
	{ id: 6697, levels: 1, name: 'Eternal Blizzard', target: 'AURA', operateType: 'A1', trigger: 6698, effectType: 'ChanceSkillTrigger' },
	{ id: 6698, levels: 1, name: 'Pillar of Frozen - Eternal Ice', target: 'AURA', operateType: 'A2', trigger: 6302, effectType: 'Paralyze', abnormalType: 'freezing' },
	{ id: 6714, levels: 1, name: 'Wind Walk of Elcadia', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 6715, levels: 1, name: 'Haste of Elcadia', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 6716, levels: 1, name: 'Might of Elcadia', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 6717, levels: 1, name: 'Berserker Spirit of Elcadia', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mDef', val: 1.16, op: 'mul' },
		{ stat: 'pDef', val: 1.08, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.16, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'sub' } ]},
	{ id: 6718, levels: 1, name: 'Death Whisper of Elcadia', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 6719, levels: 1, name: 'Guidance of Elcadia', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 6720, levels: 1, name: 'Focus of Elcadia', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 6721, levels: 1, name: 'Empower of Elcadia', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 6722, levels: 1, name: 'Acumen of Elcadia', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 6723, levels: 1, name: 'Concentration of Elcadia', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'cancel_prob_down', effects: [
		{ stat: 'cancel', val: 53, op: 'sub' } ]},
	{ id: 6724, levels: 1, name: 'Greater Heal of Elcadia', target: 'ONE', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'life_force_others' },
	{ id: 6725, levels: 1, name: 'Bless the Blood of Elcadia', target: 'PARTY_MEMBER', operateType: 'A2', trigger: 6726, effectType: 'ChanceSkillTrigger', abnormalType: 'bless_the_blood' },
	{ id: 6727, levels: 1, name: 'Vampiric Rage of Elcadia', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 6729, levels: 1, name: 'Resist Holy of Elcadia', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'armor_unholy', effects: [
		{ stat: 'darkRes', val: 30, op: 'add' } ]},
	{ id: 6732, levels: 1, name: 'Mirage', target: 'AURA', operateType: 'A1', effectType: 'RemoveTarget' },
	{ id: 6754, levels: 1, name: 'Bleed', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'bleeding' },
	{ id: 6758, levels: 1, name: 'Rage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 0.3, op: 'basemul' },
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 6762, levels: 1, name: 'Rage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 0.3, op: 'basemul' },
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 6773, levels: 1, name: 'Rage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 0.3, op: 'basemul' },
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 6777, levels: 1, name: 'Bleeding Gash', target: 'AURA', operateType: 'A2', effectType: 'DamOverTime', abnormalType: 'bleeding', effects: [
		{ stat: 'runSpd', val: 0.8, op: 'mul' } ]},
	{ id: 6803, levels: 1, name: 'Arena Haste', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 6804, levels: 1, name: 'Arena Wind Walk', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 6805, levels: 1, name: 'Arena Empower', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 6806, levels: 1, name: 'Arena Acumen', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 6807, levels: 1, name: 'Arena Concentration', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'cancel_prob_down', effects: [
		{ stat: 'cancel', val: 53, op: 'sub' } ]},
	{ id: 6808, levels: 1, name: 'Arena Might', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 6809, levels: 1, name: 'Arena Guidance', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 6810, levels: 1, name: 'Arena Focus', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 6811, levels: 1, name: 'Arena Death Whisper', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 6812, levels: 1, name: 'Arena Berserker Spirit', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'sub' } ]},
	{ id: 6818, levels: 1, name: 'Powerful Rage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 0.3, op: 'basemul' },
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 6820, levels: 1, name: 'P. Def. Enhance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.2, op: 'mul' } ]},
	{ id: 6842, levels: 2, name: 'Enhance', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: [1.12, 1], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1.15, 1.4], op: 'mul' } ]},
	{ id: 6861, levels: 1, name: 'Enhance', target: 'CLAN', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.2, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 6885, levels: 3, name: 'Morale Boost', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'dragon_valley_effect', effects: [
		{ stat: 'stunVuln', val: [50, 80, 90], op: 'sub' },
		{ stat: 'bleedVuln', val: [50, 80, 90], op: 'sub' },
		{ stat: 'poisonVuln', val: [50, 80, 90], op: 'sub' },
		{ stat: 'paralyzeVuln', val: [50, 80, 90], op: 'sub' },
		{ stat: 'rCrit', val: [0.1, 0.3, 0.5], op: 'basemul' },
		{ stat: 'cAtk', val: [1.1, 1.15, 1.15], op: 'mul' },
		{ stat: 'pAtk', val: [1, 1.15, 1.15], op: 'mul' },
		{ stat: 'mAtk', val: [1, 1.15, 1.15], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1, 1, 1.15], op: 'mul' },
		{ stat: 'pAtkSpd', val: [1, 1, 1.15], op: 'mul' },
		{ stat: 'bonusExp', val: [1, 1, 1.2], op: 'mul' } ]},
	{ id: 6908, levels: 1, name: 'Transform Master', target: 'SELF', operateType: 'A1', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 6913, levels: 1, name: 'Challenge of Faith', target: 'SELF', operateType: 'A1', effectType: 'Buff', effects: [
		{ stat: 'pDef', val: 360, op: 'add' },
		{ stat: 'mDef', val: 270, op: 'add' } ]},
	{ id: 6920, levels: 1, name: 'Collector\'s Fortune', target: 'SELF', operateType: 'A1', effectType: 'Buff', abnormalType: 'fortune', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'rCrit', val: 0.1, op: 'basemul' },
		{ stat: 'cAtk', val: 1.1, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.03, op: 'mul' },
		{ stat: 'runSpd', val: 5, op: 'add' } ]},
	{ id: 7005, levels: 4, name: 'Greater Chant of Vampire', target: 'CLAN_MEMBER', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 7029, levels: 4, name: 'Super Haste', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: [2, 3, 3, 2], op: 'mul' },
		{ stat: 'runSpd', val: [2, 3, 3, 1], op: 'mul' },
		{ stat: 'mAtkSpd', val: [2, 3, 3, 2], op: 'mul' },
		{ stat: 'pAtk', val: [1, 1, 10000, 1], op: 'mul' },
		{ stat: 'pReuse', val: [0.01, 0.01, 0.01, 1], op: 'mul' },
		{ stat: 'mReuse', val: [0.01, 0.01, 0.01, 1], op: 'mul' },
		{ stat: 'regMp', val: [1, 1, 1, 2], op: 'mul' },
		{ stat: 'regMp', val: [1, 1, 1, 2], op: 'mul' },
		{ stat: 'maxMp', val: [1, 1, 1, 2], op: 'mul' },
		{ stat: 'weightLimit', val: [1, 1, 1, 2], op: 'mul' } ]},
	{ id: 7041, levels: 1, name: 'Master\'s Blessing - Focus', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 7042, levels: 1, name: 'Master\'s Blessing - Death Whisper', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 7043, levels: 1, name: 'Master\'s Blessing - Haste', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 7044, levels: 1, name: 'Master\'s Blessing - Guidance', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 7045, levels: 1, name: 'Master\'s Blessing - Blessed Body', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 7046, levels: 1, name: 'Master\'s Blessing - Blessed Soul', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 7047, levels: 1, name: 'Master\'s Blessing - Agility', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 7048, levels: 1, name: 'Master\'s Blessing - Acumen', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 7049, levels: 1, name: 'Master\'s Blessing - Decrease Weight', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'decrease_weight_penalty', effects: [
		{ stat: 'weightPenalty', val: 9000, op: 'add' } ]},
	{ id: 7050, levels: 1, name: 'Master\'s Blessing - Might', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 7051, levels: 1, name: 'Master\'s Blessing - Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 7052, levels: 1, name: 'Master\'s Blessing - Magic Barrier', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 7053, levels: 1, name: 'Master\'s Blessing - Vampiric Rage', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 7054, levels: 1, name: 'Master\'s Blessing - Empower', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 7055, levels: 1, name: 'Master\'s Blessing - Wind Walk', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 7056, levels: 1, name: 'Master\'s Blessing - Berserker Spirit', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'sub' } ]},
	{ id: 7057, levels: 1, name: 'Master\'s Blessing - Greater Might', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_pd_up', effects: [
		{ stat: 'pAtk', val: 1.1, op: 'mul' } ]},
	{ id: 7058, levels: 1, name: 'Master\'s Blessing - Greater Shield', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 7059, levels: 1, name: 'Master\'s Blessing - Wild Magic', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'magic_critical_up', effects: [
		{ stat: 'mCritRate', val: 2, op: 'add' } ]},
	{ id: 7060, levels: 1, name: 'Master\'s Blessing - Clarity', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'cheap_magic', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 7061, levels: 1, name: 'Master\'s Blessing - Prophecy of Water', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
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
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 7062, levels: 1, name: 'Master\'s Blessing - Prophecy of Fire', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
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
	{ id: 7063, levels: 1, name: 'Master\'s Blessing - Prophecy of Wind', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
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
	{ id: 7064, levels: 1, name: 'Master\'s Blessing - Chant of Victory', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' },
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
	{ id: 7088, levels: 1, name: 'Master\'s Blessing - Improve Combat', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_pa_pd_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 7089, levels: 1, name: 'Master\'s Blessing - Improve Magic', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_ma_md_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 7090, levels: 1, name: 'Master\'s Blessing - Improve Condition', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_hp_mp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' },
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 7091, levels: 1, name: 'Master\'s Blessing - Improve Critical', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_crt_rate_dmg_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' },
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 7092, levels: 1, name: 'Master\'s Blessing - Improve Shield Defense', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_shield_rate_defence_up', effects: [
		{ stat: 'rShld', val: 1.3, op: 'mul' },
		{ stat: 'sDef', val: 1.5, op: 'mul' } ]},
	{ id: 7093, levels: 1, name: 'Master\'s Blessing - Improve Movement', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_speed_avoid_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 7094, levels: 1, name: 'Master\'s Blessing - Sharpen Edge', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'dwarf_attack_buff', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul', using: 'Sword,Big Sword,Dual Sword,Ancient,Rapier,Dagger,Dual Dagger,Pole,Dual Fist' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul', using: 'Sword,Big Sword,Dual Sword,Ancient,Rapier,Dagger,Dual Dagger,Pole,Dual Fist' } ]},
	{ id: 7095, levels: 1, name: 'Master\'s Blessing - Face Harden', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'dwarf_attack_buff', effects: [
		{ stat: 'pDef', val: 1.1, op: 'mul', using: 'Heavy' } ]},
	{ id: 7096, levels: 1, name: 'Master\'s Blessing - Blessing of Noblesse', target: 'ONE', operateType: 'A2', effectType: 'NoblesseBless', abnormalType: 'preserve_abnormal' },
	{ id: 8001, levels: 1, name: 'Augment Option - Divine Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyPower', val: 4.28, op: 'add' } ]},
	{ id: 8002, levels: 1, name: 'Augment Option - Dark Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkPower', val: 4.28, op: 'add' } ]},
	{ id: 8003, levels: 1, name: 'Augment Option - Fire Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'firePower', val: 4.28, op: 'add' } ]},
	{ id: 8004, levels: 1, name: 'Augment Option - Water Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterPower', val: 4.28, op: 'add' } ]},
	{ id: 8005, levels: 1, name: 'Augment Option - Wind Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windPower', val: 4.28, op: 'add' } ]},
	{ id: 8006, levels: 1, name: 'Augment Option - Earth Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthPower', val: 4.28, op: 'add' } ]},
	{ id: 8007, levels: 1, name: 'Augment Option - Divine Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: 4.28, op: 'add' } ]},
	{ id: 8008, levels: 1, name: 'Augment Option - Dark Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 4.28, op: 'add' } ]},
	{ id: 8009, levels: 1, name: 'Augment Option - Fire Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 4.28, op: 'add' } ]},
	{ id: 8010, levels: 1, name: 'Augment Option - Water Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: 4.28, op: 'add' } ]},
	{ id: 8011, levels: 1, name: 'Augment Option - Wind Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: 4.28, op: 'add' } ]},
	{ id: 8012, levels: 1, name: 'Augment Option - Earth Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: 4.28, op: 'add' } ]},
	{ id: 8013, levels: 1, name: 'Augment Option - Divine Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyPower', val: 4.28, op: 'add' } ]},
	{ id: 8014, levels: 1, name: 'Augment Option - Dark Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkPower', val: 4.28, op: 'add' } ]},
	{ id: 8015, levels: 1, name: 'Augment Option - Fire Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'firePower', val: 4.28, op: 'add' } ]},
	{ id: 8016, levels: 1, name: 'Augment Option - Water Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterPower', val: 4.28, op: 'add' } ]},
	{ id: 8017, levels: 1, name: 'Augment Option - Wind Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windPower', val: 4.28, op: 'add' } ]},
	{ id: 8018, levels: 1, name: 'Augment Option - Earth Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthPower', val: 4.28, op: 'add' } ]},
	{ id: 8019, levels: 1, name: 'Augment Option - Divine Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: 4.28, op: 'add' } ]},
	{ id: 8020, levels: 1, name: 'Augment Option - Dark Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 4.28, op: 'add' } ]},
	{ id: 8021, levels: 1, name: 'Augment Option - Fire Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 4.28, op: 'add' } ]},
	{ id: 8022, levels: 1, name: 'Augment Option - Water Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: 4.28, op: 'add' } ]},
	{ id: 8023, levels: 1, name: 'Augment Option - Wind Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: 4.28, op: 'add' } ]},
	{ id: 8024, levels: 1, name: 'Augment Option - Earth Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: 4.28, op: 'add' } ]},
	{ id: 8025, levels: 1, name: 'Augment Option - Divine Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyPower', val: 4.28, op: 'add' } ]},
	{ id: 8026, levels: 1, name: 'Augment Option - Dark Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkPower', val: 4.28, op: 'add' } ]},
	{ id: 8027, levels: 1, name: 'Augment Option - Fire Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'firePower', val: 4.28, op: 'add' } ]},
	{ id: 8028, levels: 1, name: 'Augment Option - Water Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterPower', val: 4.28, op: 'add' } ]},
	{ id: 8029, levels: 1, name: 'Augment Option - Wind Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windPower', val: 4.28, op: 'add' } ]},
	{ id: 8030, levels: 1, name: 'Augment Option - Earth Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthPower', val: 4.28, op: 'add' } ]},
	{ id: 8031, levels: 1, name: 'Augment Option - Divine Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: 4.28, op: 'add' } ]},
	{ id: 8032, levels: 1, name: 'Augment Option - Dark Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 4.28, op: 'add' } ]},
	{ id: 8033, levels: 1, name: 'Augment Option - Fire Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 4.28, op: 'add' } ]},
	{ id: 8034, levels: 1, name: 'Augment Option - Water Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: 4.28, op: 'add' } ]},
	{ id: 8035, levels: 1, name: 'Augment Option - Wind Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: 4.28, op: 'add' } ]},
	{ id: 8036, levels: 1, name: 'Augment Option - Earth Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: 4.28, op: 'add' } ]},
	{ id: 8037, levels: 1, name: 'Augment Option - Divine Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyPower', val: 4.28, op: 'add' } ]},
	{ id: 8038, levels: 1, name: 'Augment Option - Dark Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkPower', val: 4.28, op: 'add' } ]},
	{ id: 8039, levels: 1, name: 'Augment Option - Fire Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'firePower', val: 4.28, op: 'add' } ]},
	{ id: 8040, levels: 1, name: 'Augment Option - Water Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterPower', val: 4.28, op: 'add' } ]},
	{ id: 8041, levels: 1, name: 'Augment Option - Wind Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windPower', val: 4.28, op: 'add' } ]},
	{ id: 8042, levels: 1, name: 'Augment Option - Earth Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthPower', val: 4.28, op: 'add' } ]},
	{ id: 8043, levels: 1, name: 'Augment Option - Divine Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: 4.28, op: 'add' } ]},
	{ id: 8044, levels: 1, name: 'Augment Option - Dark Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 4.28, op: 'add' } ]},
	{ id: 8045, levels: 1, name: 'Augment Option - Fire Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 4.28, op: 'add' } ]},
	{ id: 8046, levels: 1, name: 'Augment Option - Water Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: 4.28, op: 'add' } ]},
	{ id: 8047, levels: 1, name: 'Augment Option - Wind Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: 4.28, op: 'add' } ]},
	{ id: 8048, levels: 1, name: 'Augment Option - Earth Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: 4.28, op: 'add' } ]},
	{ id: 8049, levels: 1, name: 'Augment Option - Enhance Shock', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunProf', val: 0.85, op: 'add' } ]},
	{ id: 8050, levels: 1, name: 'Augment Option - Enhance Bleed', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedProf', val: 0.85, op: 'add' } ]},
	{ id: 8051, levels: 1, name: 'Augment Option - Enhance Poison', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonProf', val: 0.85, op: 'add' } ]},
	{ id: 8052, levels: 1, name: 'Augment Option - Enhance Sleep', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepProf', val: 0.85, op: 'add' } ]},
	{ id: 8053, levels: 1, name: 'Augment Option - Enhance Paralysis', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeProf', val: 0.85, op: 'add' } ]},
	{ id: 8054, levels: 1, name: 'Augment Option - Enhance Mental Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementProf', val: 0.85, op: 'add' } ]},
	{ id: 8055, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 0.85, op: 'sub' } ]},
	{ id: 8056, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 0.85, op: 'sub' } ]},
	{ id: 8057, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 0.85, op: 'sub' } ]},
	{ id: 8058, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 0.85, op: 'sub' } ]},
	{ id: 8059, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 0.85, op: 'sub' } ]},
	{ id: 8060, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 0.85, op: 'sub' } ]},
	{ id: 8061, levels: 1, name: 'Augment Option - Enhance Shock', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunProf', val: 1.07, op: 'add' } ]},
	{ id: 8062, levels: 1, name: 'Augment Option - Enhance Bleed', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedProf', val: 1.07, op: 'add' } ]},
	{ id: 8063, levels: 1, name: 'Augment Option - Enhance Poison', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonProf', val: 1.07, op: 'add' } ]},
	{ id: 8064, levels: 1, name: 'Augment Option - Enhance Sleep', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepProf', val: 1.07, op: 'add' } ]},
	{ id: 8065, levels: 1, name: 'Augment Option - Enhance Paralysis', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeProf', val: 1.07, op: 'add' } ]},
	{ id: 8066, levels: 1, name: 'Augment Option - Enhance Mental Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementProf', val: 1.07, op: 'add' } ]},
	{ id: 8067, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 1.07, op: 'sub' } ]},
	{ id: 8068, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 1.07, op: 'sub' } ]},
	{ id: 8069, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 1.07, op: 'sub' } ]},
	{ id: 8070, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 1.07, op: 'sub' } ]},
	{ id: 8071, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 1.07, op: 'sub' } ]},
	{ id: 8072, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 1.07, op: 'sub' } ]},
	{ id: 8073, levels: 1, name: 'Augment Option - Enhance Shock', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunProf', val: 1.5, op: 'add' } ]},
	{ id: 8074, levels: 1, name: 'Augment Option - Enhance Bleed', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedProf', val: 1.5, op: 'add' } ]},
	{ id: 8075, levels: 1, name: 'Augment Option - Enhance Poison', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonProf', val: 1.5, op: 'add' } ]},
	{ id: 8076, levels: 1, name: 'Augment Option - Enhance Sleep', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepProf', val: 1.5, op: 'add' } ]},
	{ id: 8077, levels: 1, name: 'Augment Option - Enhance Paralysis', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeProf', val: 1.5, op: 'add' } ]},
	{ id: 8078, levels: 1, name: 'Augment Option - Enhance Mental Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementProf', val: 1.5, op: 'add' } ]},
	{ id: 8079, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 1.5, op: 'sub' } ]},
	{ id: 8080, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 1.5, op: 'sub' } ]},
	{ id: 8081, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 1.5, op: 'sub' } ]},
	{ id: 8082, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 1.5, op: 'sub' } ]},
	{ id: 8083, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 1.5, op: 'sub' } ]},
	{ id: 8084, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 1.5, op: 'sub' } ]},
	{ id: 8085, levels: 1, name: 'Augment Option - Enhance Shock', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunProf', val: 1.71, op: 'add' } ]},
	{ id: 8086, levels: 1, name: 'Augment Option - Enhance Bleed', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedProf', val: 1.71, op: 'add' } ]},
	{ id: 8087, levels: 1, name: 'Augment Option - Enhance Poison', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonProf', val: 1.71, op: 'add' } ]},
	{ id: 8088, levels: 1, name: 'Augment Option - Enhance Sleep', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepProf', val: 1.71, op: 'add' } ]},
	{ id: 8089, levels: 1, name: 'Augment Option - Enhance Paralysis', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeProf', val: 1.71, op: 'add' } ]},
	{ id: 8090, levels: 1, name: 'Augment Option - Enhance Mental Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementProf', val: 1.71, op: 'add' } ]},
	{ id: 8091, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 1.71, op: 'sub' } ]},
	{ id: 8092, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 1.71, op: 'sub' } ]},
	{ id: 8093, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 1.71, op: 'sub' } ]},
	{ id: 8094, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 1.71, op: 'sub' } ]},
	{ id: 8095, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 1.71, op: 'sub' } ]},
	{ id: 8096, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 1.71, op: 'sub' } ]},
	{ id: 8097, levels: 1, name: 'Augment Option - Divine Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyPower', val: 6.42, op: 'add' } ]},
	{ id: 8098, levels: 1, name: 'Augment Option - Dark Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkPower', val: 6.42, op: 'add' } ]},
	{ id: 8099, levels: 1, name: 'Augment Option - Fire Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'firePower', val: 6.42, op: 'add' } ]},
	{ id: 8100, levels: 1, name: 'Augment Option - Water Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterPower', val: 6.42, op: 'add' } ]},
	{ id: 8101, levels: 1, name: 'Augment Option - Wind Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windPower', val: 6.42, op: 'add' } ]},
	{ id: 8102, levels: 1, name: 'Augment Option - Earth Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthPower', val: 6.42, op: 'add' } ]},
	{ id: 8103, levels: 1, name: 'Augment Option - Divine Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: 6.42, op: 'add' } ]},
	{ id: 8104, levels: 1, name: 'Augment Option - Dark Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 6.42, op: 'add' } ]},
	{ id: 8105, levels: 1, name: 'Augment Option - Fire Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 6.42, op: 'add' } ]},
	{ id: 8106, levels: 1, name: 'Augment Option - Water Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: 6.42, op: 'add' } ]},
	{ id: 8107, levels: 1, name: 'Augment Option - Wind Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: 6.42, op: 'add' } ]},
	{ id: 8108, levels: 1, name: 'Augment Option - Earth Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: 6.42, op: 'add' } ]},
	{ id: 8109, levels: 1, name: 'Augment Option - Divine Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyPower', val: 6.42, op: 'add' } ]},
	{ id: 8110, levels: 1, name: 'Augment Option - Dark Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkPower', val: 6.42, op: 'add' } ]},
	{ id: 8111, levels: 1, name: 'Augment Option - Fire Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'firePower', val: 6.42, op: 'add' } ]},
	{ id: 8112, levels: 1, name: 'Augment Option - Water Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterPower', val: 6.42, op: 'add' } ]},
	{ id: 8113, levels: 1, name: 'Augment Option - Wind Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windPower', val: 6.42, op: 'add' } ]},
	{ id: 8114, levels: 1, name: 'Augment Option - Earth Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthPower', val: 6.42, op: 'add' } ]},
	{ id: 8115, levels: 1, name: 'Augment Option - Divine Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: 6.42, op: 'add' } ]},
	{ id: 8116, levels: 1, name: 'Augment Option - Dark Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 6.42, op: 'add' } ]},
	{ id: 8117, levels: 1, name: 'Augment Option - Fire Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 6.42, op: 'add' } ]},
	{ id: 8118, levels: 1, name: 'Augment Option - Water Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: 6.42, op: 'add' } ]},
	{ id: 8119, levels: 1, name: 'Augment Option - Wind Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: 6.42, op: 'add' } ]},
	{ id: 8120, levels: 1, name: 'Augment Option - Earth Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: 6.42, op: 'add' } ]},
	{ id: 8121, levels: 1, name: 'Augment Option - Divine Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyPower', val: 6.42, op: 'add' } ]},
	{ id: 8122, levels: 1, name: 'Augment Option - Dark Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkPower', val: 6.42, op: 'add' } ]},
	{ id: 8123, levels: 1, name: 'Augment Option - Fire Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'firePower', val: 6.42, op: 'add' } ]},
	{ id: 8124, levels: 1, name: 'Augment Option - Water Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterPower', val: 6.42, op: 'add' } ]},
	{ id: 8125, levels: 1, name: 'Augment Option - Wind Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windPower', val: 6.42, op: 'add' } ]},
	{ id: 8126, levels: 1, name: 'Augment Option - Earth Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthPower', val: 6.42, op: 'add' } ]},
	{ id: 8127, levels: 1, name: 'Augment Option - Divine Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: 6.42, op: 'add' } ]},
	{ id: 8128, levels: 1, name: 'Augment Option - Dark Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 6.42, op: 'add' } ]},
	{ id: 8129, levels: 1, name: 'Augment Option - Fire Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 6.42, op: 'add' } ]},
	{ id: 8130, levels: 1, name: 'Augment Option - Water Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: 6.42, op: 'add' } ]},
	{ id: 8131, levels: 1, name: 'Augment Option - Wind Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: 6.42, op: 'add' } ]},
	{ id: 8132, levels: 1, name: 'Augment Option - Earth Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: 6.42, op: 'add' } ]},
	{ id: 8133, levels: 1, name: 'Augment Option - Divine Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyPower', val: 6.42, op: 'add' } ]},
	{ id: 8134, levels: 1, name: 'Augment Option - Dark Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkPower', val: 6.42, op: 'add' } ]},
	{ id: 8135, levels: 1, name: 'Augment Option - Fire Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'firePower', val: 6.42, op: 'add' } ]},
	{ id: 8136, levels: 1, name: 'Augment Option - Water Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterPower', val: 6.42, op: 'add' } ]},
	{ id: 8137, levels: 1, name: 'Augment Option - Wind Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windPower', val: 6.42, op: 'add' } ]},
	{ id: 8138, levels: 1, name: 'Augment Option - Earth Attack', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthPower', val: 6.42, op: 'add' } ]},
	{ id: 8139, levels: 1, name: 'Augment Option - Divine Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: 6.42, op: 'add' } ]},
	{ id: 8140, levels: 1, name: 'Augment Option - Dark Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: 6.42, op: 'add' } ]},
	{ id: 8141, levels: 1, name: 'Augment Option - Fire Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: 6.42, op: 'add' } ]},
	{ id: 8142, levels: 1, name: 'Augment Option - Water Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: 6.42, op: 'add' } ]},
	{ id: 8143, levels: 1, name: 'Augment Option - Wind Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: 6.42, op: 'add' } ]},
	{ id: 8144, levels: 1, name: 'Augment Option - Earth Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: 6.42, op: 'add' } ]},
	{ id: 8145, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunProf', val: 1.28, op: 'add' } ]},
	{ id: 8146, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedProf', val: 1.28, op: 'add' } ]},
	{ id: 8147, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonProf', val: 1.28, op: 'add' } ]},
	{ id: 8148, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepProf', val: 1.28, op: 'add' } ]},
	{ id: 8149, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeProf', val: 1.28, op: 'add' } ]},
	{ id: 8150, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementProf', val: 1.28, op: 'add' } ]},
	{ id: 8151, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 1.28, op: 'sub' } ]},
	{ id: 8152, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 1.28, op: 'sub' } ]},
	{ id: 8153, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 1.28, op: 'sub' } ]},
	{ id: 8154, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 1.28, op: 'sub' } ]},
	{ id: 8155, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 1.28, op: 'sub' } ]},
	{ id: 8156, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 1.28, op: 'sub' } ]},
	{ id: 8157, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunProf', val: 1.6, op: 'add' } ]},
	{ id: 8158, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedProf', val: 1.6, op: 'add' } ]},
	{ id: 8159, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonProf', val: 1.6, op: 'add' } ]},
	{ id: 8160, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepProf', val: 1.6, op: 'add' } ]},
	{ id: 8161, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeProf', val: 1.6, op: 'add' } ]},
	{ id: 8162, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementProf', val: 1.6, op: 'add' } ]},
	{ id: 8163, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 1.6, op: 'sub' } ]},
	{ id: 8164, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 1.6, op: 'sub' } ]},
	{ id: 8165, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 1.6, op: 'sub' } ]},
	{ id: 8166, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 1.6, op: 'sub' } ]},
	{ id: 8167, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 1.6, op: 'sub' } ]},
	{ id: 8168, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 1.6, op: 'sub' } ]},
	{ id: 8169, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunProf', val: 2.25, op: 'add' } ]},
	{ id: 8170, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedProf', val: 2.25, op: 'add' } ]},
	{ id: 8171, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonProf', val: 2.25, op: 'add' } ]},
	{ id: 8172, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepProf', val: 2.25, op: 'add' } ]},
	{ id: 8173, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeProf', val: 2.25, op: 'add' } ]},
	{ id: 8174, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementProf', val: 2.25, op: 'add' } ]},
	{ id: 8175, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 2.25, op: 'sub' } ]},
	{ id: 8176, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 2.25, op: 'sub' } ]},
	{ id: 8177, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 2.25, op: 'sub' } ]},
	{ id: 8178, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 2.25, op: 'sub' } ]},
	{ id: 8179, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 2.25, op: 'sub' } ]},
	{ id: 8180, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 2.25, op: 'sub' } ]},
	{ id: 8181, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunProf', val: 2.57, op: 'add' } ]},
	{ id: 8182, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedProf', val: 2.57, op: 'add' } ]},
	{ id: 8183, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonProf', val: 2.57, op: 'add' } ]},
	{ id: 8184, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepProf', val: 2.57, op: 'add' } ]},
	{ id: 8185, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeProf', val: 2.57, op: 'add' } ]},
	{ id: 8186, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementProf', val: 2.57, op: 'add' } ]},
	{ id: 8187, levels: 1, name: 'Augment Option - Stun Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 2.57, op: 'sub' } ]},
	{ id: 8188, levels: 1, name: 'Augment Option - Bleed Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 2.57, op: 'sub' } ]},
	{ id: 8189, levels: 1, name: 'Augment Option - Poison Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 2.57, op: 'sub' } ]},
	{ id: 8190, levels: 1, name: 'Augment Option - Sleep Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 2.57, op: 'sub' } ]},
	{ id: 8191, levels: 1, name: 'Augment Option - Paralysis Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 2.57, op: 'sub' } ]},
	{ id: 8192, levels: 1, name: 'Augment Option - Mental Attack Resistance', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementVuln', val: 2.57, op: 'sub' } ]},
	{ id: 8193, levels: 1, name: 'Heavy Armor of Nightmare Set - PvP', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8194, levels: 1, name: 'Heavy Majestic Plate Armor Set - PvP', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8195, levels: 1, name: 'Light Nightmarish Leather Armor Set - PvP', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8196, levels: 1, name: 'Light Majestic Leather Armor Set - PvP', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8197, levels: 1, name: 'Nightmare Robe Set - PvP', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8198, levels: 1, name: 'Majestic Robe Set - PvP', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8199, levels: 1, name: 'Heavy Imperial Crusader Breastplate Set - PvP', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8200, levels: 1, name: 'Light Draconic Leather Armor Set - PvP', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8201, levels: 1, name: 'Major Arcana Robe Set - PvP', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8202, levels: 1, name: 'Dynasty Breastplate - PvP', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8203, levels: 1, name: 'Dynasty Breastplate - PvP Shield Master', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8204, levels: 1, name: 'Dynasty Breastplate - PvP Weapon Master', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8205, levels: 1, name: 'Dynasty Breastplate - PvP Force Master', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8206, levels: 1, name: 'Dynasty Breastplate - PvP Bard', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8207, levels: 1, name: 'Dynasty Leather Armor - PvP', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8208, levels: 1, name: 'Dynasty Leather Armor - PvP Dagger Master', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8209, levels: 1, name: 'Dynasty Leather Armor - PvP Bow Master', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8210, levels: 1, name: 'Dynasty Tunic - PvP', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8211, levels: 1, name: 'Dynasty Tunic - PvP Healer', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8212, levels: 1, name: 'Dynasty Tunic - PvP Enchanter', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8213, levels: 1, name: 'Dynasty Tunic - PvP Summoner', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8214, levels: 1, name: 'Dynasty Tunic - PvP Wizard', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8215, levels: 1, name: 'Dynasty Leather Armor - PvP Force Master', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8216, levels: 1, name: 'Dynasty Leather Armor - PvP Weapon Master', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8217, levels: 1, name: 'Dynasty Leather Armor - PvP Enchanter', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8218, levels: 1, name: 'Dynasty Leather Armor - PvP Summoner', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8219, levels: 1, name: 'Dynasty Platinum Breastplate - PvP Shield Master', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8220, levels: 1, name: 'Dynasty Platinum Breastplate - PvP Weapon Master', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8221, levels: 1, name: 'Dynasty Platinum Breastplate - PvP Bard', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8222, levels: 1, name: 'Dynasty Platinum Breastplate - PvP Force Master', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8223, levels: 1, name: 'Dynasty Jewel Leather Armor - PvP Dagger Master', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8224, levels: 1, name: 'Dynasty Jewel Leather Armor - PvP Bow Master', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8225, levels: 1, name: 'Dynasty Jewel Leather Armor - PvP Force Master', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8226, levels: 1, name: 'Dynasty Jewel Leather Armor - PvP Weapon Master', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8227, levels: 1, name: 'Dynasty Jewel Leather Armor - PvP Summoner', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8228, levels: 1, name: 'Dynasty Jewel Leather Armor - PvP Enchanter', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8229, levels: 1, name: 'Dynasty Silver Satin Tunic - PvP Healer', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8230, levels: 1, name: 'Dynasty Silver Satin Tunic - PvP Enchanter', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8231, levels: 1, name: 'Dynasty Silver Satin Tunic - PvP Summoner', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8232, levels: 1, name: 'Dynasty Silver Satin Tunic - PvP Wizard', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8233, levels: 1, name: 'Zubei\'s Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 0.88, op: 'add' } ]},
	{ id: 8234, levels: 1, name: 'Zubei\'s Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0125, op: 'mul' } ]},
	{ id: 8235, levels: 1, name: 'Nightmare Helm', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mDef', val: 1.0062, op: 'mul' },
		{ stat: 'sleepVuln', val: 17.5, op: 'sub' },
		{ stat: 'rootVuln', val: 17.5, op: 'sub' } ]},
	{ id: 8236, levels: 1, name: 'Nightmare Helm', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: 1.0062, op: 'mul' },
		{ stat: 'mAtk', val: 1.0062, op: 'mul' },
		{ stat: 'sleepVuln', val: 17.5, op: 'sub' },
		{ stat: 'rootVuln', val: 17.5, op: 'sub' } ]},
	{ id: 8244, levels: 1, name: 'Transform Gatekeeper', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 8246, levels: 1, name: 'Transform Pumpkin Ghost', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 8247, levels: 1, name: 'Mount Darkmane Pacer', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 8261, levels: 1, name: 'Steam Beatle Mount', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 8262, levels: 1, name: 'Tawny Maned Lion Mount', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 8263, levels: 1, name: 'Transform Snow King', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 8264, levels: 1, name: 'Transform Scarecrow Jack', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 8265, levels: 1, name: 'Transform Tin Golem', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 8277, levels: 1, name: 'Transform Native', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 8278, levels: 1, name: 'Transform Guard of Dawn', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 8283, levels: 1, name: 'Vesper Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pDef', val: 1.0557, op: 'mul' },
		{ stat: 'maxHp', val: 531, op: 'add' },
		{ stat: 'rootVuln', val: 70, op: 'sub' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' } ]},
	{ id: 8284, levels: 1, name: 'Vesper Noble Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pDef', val: 1.0557, op: 'mul' },
		{ stat: 'maxHp', val: 540, op: 'add' },
		{ stat: 'rootVuln', val: 70, op: 'sub' },
		{ stat: 'sleepVuln', val: 70, op: 'sub' },
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'runSpd', val: 5, op: 'add' },
		{ stat: 'magicDamVul', val: 0.99, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8285, levels: 1, name: 'Vesper Light Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'regMp', val: 1.05, op: 'mul' },
		{ stat: 'maxMp', val: 347, op: 'add' } ]},
	{ id: 8286, levels: 1, name: 'Vesper Noble Light Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'regMp', val: 1.05, op: 'mul' },
		{ stat: 'maxMp', val: 354, op: 'add' },
		{ stat: 'rEvas', val: 3, op: 'add' },
		{ stat: 'cAtkAdd', val: 172, op: 'add' },
		{ stat: 'paralyzeVuln', val: 50, op: 'sub' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8287, levels: 1, name: 'Vesper Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0847, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.0557, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'cancel', val: 30, op: 'sub' } ]},
	{ id: 8288, levels: 1, name: 'Vesper Noble Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0847, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.0557, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'cancel', val: 30, op: 'sub' },
		{ stat: 'runSpd', val: 7, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.97, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8289, levels: 3, name: 'Special Ability Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: [128.7, 137.1, 137.1], op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 8290, levels: 12, name: 'Add Belt Inventory Slot', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'inventoryLimit', val: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], op: 'add' } ]},
	{ id: 8291, levels: 12, name: 'Add Belt Weight Gauge', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'weightPenalty', val: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000], op: 'add' } ]},
	{ id: 8292, levels: 1, name: 'Olympiad Warrior\'s Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: 30, op: 'sub' },
		{ stat: 'rootProf', val: 30, op: 'add' },
		{ stat: 'cAtk', val: 1.15, op: 'mul' },
		{ stat: 'accCombat', val: 2, op: 'add' } ]},
	{ id: 8293, levels: 1, name: 'Olympiad Warrior\'s Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 20, op: 'sub' },
		{ stat: 'derangementVuln', val: 20, op: 'sub' },
		{ stat: 'stunProf', val: 20, op: 'add' },
		{ stat: 'derangementProf', val: 20, op: 'add' },
		{ stat: 'absorbDam', val: 4, op: 'add' } ]},
	{ id: 8294, levels: 1, name: 'Olympiad Warrior\'s Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 15, op: 'sub' },
		{ stat: 'stunVuln', val: 15, op: 'sub' },
		{ stat: 'sleepVuln', val: 15, op: 'sub' },
		{ stat: 'paralyzeProf', val: 15, op: 'add' },
		{ stat: 'stunProf', val: 15, op: 'add' },
		{ stat: 'sleepProf', val: 15, op: 'add' },
		{ stat: 'pReuse', val: 0.95, op: 'mul' },
		{ stat: 'mReuse', val: 0.95, op: 'mul' },
		{ stat: 'reflectDam', val: 4, op: 'add' } ]},
	{ id: 8295, levels: 1, name: 'Special Ability Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 109.2, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 8296, levels: 1, name: 'Special Ability Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 109.2, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 8297, levels: 1, name: 'Special Ability Haste', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 8298, levels: 1, name: 'Special Ability Focus', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rCrit', val: 109.2, op: 'add' },
		{ stat: 'pvpPhysDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpPhysSkillsDmg', val: 1.05, op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: 1.05, op: 'mul' } ]},
	{ id: 8300, levels: 1, name: 'Dynasty Sigil', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 1.05, op: 'mul' } ]},
	{ id: 8301, levels: 1, name: 'Vesper Heavy Armor Set for Adults', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8302, levels: 1, name: 'Vesper Noble Heavy Armor Set for Adults', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8303, levels: 1, name: 'Vesper Light Armor Set for Adults', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8304, levels: 1, name: 'Vesper Noble Light Armor Set for Adults', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8305, levels: 1, name: 'Vesper Robe Set for Adults', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8306, levels: 1, name: 'Vesper Noble Robe Set for Adults', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8307, levels: 1, name: 'Boing Hammer\'s Effect of Doubt', target: 'SELF', operateType: 'P', trigger: 21007, effectType: 'ChanceSkillTrigger' },
	{ id: 8308, levels: 1, name: 'Red Talisman - Guardian of the Territory', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'maxCp', val: 1200, op: 'add' } ]},
	{ id: 8309, levels: 1, name: 'Red Talisman - Territory Convoy', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'maxCp', val: 800, op: 'add' } ]},
	{ id: 8310, levels: 1, name: 'Arcana Sigil', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' },
		{ stat: 'cancel', val: 13, op: 'sub' } ]},
	{ id: 8311, levels: 1, name: 'Dynasty Sigil', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' },
		{ stat: 'darkRes', val: 2, op: 'add' } ]},
	{ id: 8312, levels: 2, name: 'Special Ability Cheap Shot', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'MagicalMpConsumeRate', val: [0.96, 0.92], op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: [0.96, 0.92], op: 'mul' } ]},
	{ id: 8324, levels: 1, name: 'Warrior\'s Shirt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 672, op: 'add' } ]},
	{ id: 8331, levels: 1, name: 'Blue Talisman - Buff Cancel', target: 'AURA', operateType: 'A1', effectType: 'Cancel' },
	{ id: 8333, levels: 1, name: 'Red Talisman - Territory Guard', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'maxCp', val: 1500, op: 'add' } ]},
	{ id: 8334, levels: 1, name: 'Blue Talisman - Lord\'s Divine Protection', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'pvpMagicalDef', val: 1.75, op: 'mul' },
		{ stat: 'pvpPhysDef', val: 1.75, op: 'mul' } ]},
	{ id: 8335, levels: 1, name: 'White Talisman - Attribute Resistance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'talisman', effects: [
		{ stat: 'earthRes', val: 15, op: 'add' },
		{ stat: 'waterRes', val: 15, op: 'add' },
		{ stat: 'windRes', val: 15, op: 'add' },
		{ stat: 'fireRes', val: 15, op: 'add' },
		{ stat: 'holyRes', val: 15, op: 'add' },
		{ stat: 'darkRes', val: 15, op: 'add' } ]},
	{ id: 8337, levels: 1, name: 'Weight Up', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'weightPenalty', val: 5000, op: 'add' } ]},
	{ id: 8338, levels: 4, name: 'Low-grade Magic Rune Clip Iron Belt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: [0.4, 1, 1.4, 2], op: 'add' },
		{ stat: 'regHp', val: [0.3, 0.75, 1.05, 1.5], op: 'add' } ]},
	{ id: 8339, levels: 4, name: 'Low-grade Magic Rune Clip Mithril Belt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regHp', val: [0.78, 1.95, 2.73, 3.9], op: 'add' },
		{ stat: 'regHp', val: [0.6, 1.5, 2.1, 3], op: 'add' } ]},
	{ id: 8340, levels: 4, name: 'Low-grade Magic Rune Clip Iron Belt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: [0.14, 0.35, 0.49, 0.7], op: 'add' },
		{ stat: 'regMp', val: [0.16, 0.4, 0.56, 0.8], op: 'add' } ]},
	{ id: 8341, levels: 4, name: 'Low-grade Magic Rune Clip Mithril Belt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'regMp', val: [0.3, 0.75, 1.05, 1.5], op: 'add' },
		{ stat: 'regMp', val: [0.3, 0.75, 1.05, 1.5], op: 'add' } ]},
	{ id: 8342, levels: 4, name: 'Low-grade Magic Ornament Iron Belt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pvpPhysDmg', val: [1.006, 1.015, 1.021, 1.03], op: 'mul' } ]},
	{ id: 8343, levels: 4, name: 'Low-grade Magic Ornament Iron Belt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pvpPhysSkillsDmg', val: [1.006, 1.015, 1.021, 1.03], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1.006, 1.015, 1.021, 1.03], op: 'mul' } ]},
	{ id: 8344, levels: 4, name: 'Low-grade Magic Ornament Iron Belt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pvpPhysDef', val: [1.006, 1.015, 1.021, 1.03], op: 'mul' },
		{ stat: 'pvpMagicalDef', val: [1.006, 1.015, 1.021, 1.03], op: 'mul' } ]},
	{ id: 8345, levels: 4, name: 'Low-grade Magic Ornament Mithril Belt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pvpPhysDmg', val: [1.01, 1.025, 1.035, 1.05], op: 'mul' } ]},
	{ id: 8346, levels: 4, name: 'Low-grade Magic Ornament Mithril Belt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pvpPhysSkillsDmg', val: [1.01, 1.025, 1.035, 1.05], op: 'mul' },
		{ stat: 'pvpMagicalDmg', val: [1.01, 1.025, 1.035, 1.05], op: 'mul' } ]},
	{ id: 8347, levels: 4, name: 'Low-grade Magic Ornament Mithril Belt', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pvpPhysDef', val: [1.012, 1.03, 1.042, 1.06], op: 'mul' },
		{ stat: 'pvpMagicalDef', val: [1.012, 1.03, 1.042, 1.06], op: 'mul' } ]},
	{ id: 8348, levels: 2, name: 'Royal Guard Earring - Gludio', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunProf', val: 15, op: 'add' },
		{ stat: 'bleedVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8349, levels: 2, name: 'Royal Guard Earring - Dion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootProf', val: 15, op: 'add' },
		{ stat: 'poisonVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8350, levels: 2, name: 'Royal Guard Earring - Giran', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedProf', val: 15, op: 'add' },
		{ stat: 'paralyzeVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8351, levels: 2, name: 'Royal Guard Earring - Oren', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeProf', val: 15, op: 'add' },
		{ stat: 'rootVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8352, levels: 2, name: 'Royal Guard Earring - Aden', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'derangementProf', val: 15, op: 'add' },
		{ stat: 'stunVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8353, levels: 2, name: 'Royal Guard Earring - Innadril', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepProf', val: 15, op: 'add' },
		{ stat: 'stunVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8354, levels: 2, name: 'Royal Guard Earring - Goddard', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunProf', val: 15, op: 'add' },
		{ stat: 'sleepVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8355, levels: 2, name: 'Royal Guard Earring - Rune', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonProf', val: 15, op: 'add' },
		{ stat: 'rootVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8356, levels: 2, name: 'Royal Guard Earring - Schuttgart', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootProf', val: 15, op: 'add' },
		{ stat: 'derangementVuln', val: 15, op: 'sub' },
		{ stat: 'maxCp', val: [1, 1.05], op: 'mul' } ]},
	{ id: 8360, levels: 1, name: 'Energy Maintenance Effect', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_keep', effects: [
		{ stat: 'vitalityConsumeRate', val: 0, op: 'mul' } ]},
	{ id: 8379, levels: 2, name: 'Royal Guard Ring - Gludio', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: [12, 15], op: 'add' } ]},
	{ id: 8380, levels: 2, name: 'Royal Guard Ring - Dion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: [12, 15], op: 'add' } ]},
	{ id: 8381, levels: 2, name: 'Royal Guard Ring - Giran', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: [12, 15], op: 'add' } ]},
	{ id: 8382, levels: 2, name: 'Royal Guard Ring - Oren', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: [12, 15], op: 'add' } ]},
	{ id: 8383, levels: 2, name: 'Royal Guard Ring - Aden', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: [12, 15], op: 'add' } ]},
	{ id: 8384, levels: 2, name: 'Royal Guard Ring - Innadril', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: [12, 15], op: 'add' } ]},
	{ id: 8385, levels: 2, name: 'Royal Guard Ring - Goddard', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: [12, 15], op: 'add' } ]},
	{ id: 8386, levels: 2, name: 'Royal Guard Ring - Rune', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: [12, 15], op: 'add' } ]},
	{ id: 8387, levels: 2, name: 'Royal Guard Ring - Schuttgart', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: [12, 15], op: 'add' } ]},
	{ id: 8388, levels: 2, name: 'Royal Guard Necklace - Gludio', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: [26, 30], op: 'add' } ]},
	{ id: 8389, levels: 2, name: 'Royal Guard Necklace - Dion', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'holyRes', val: [26, 30], op: 'add' } ]},
	{ id: 8390, levels: 2, name: 'Royal Guard Necklace - Giran', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: [26, 30], op: 'add' } ]},
	{ id: 8391, levels: 2, name: 'Royal Guard Necklace - Oren', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'darkRes', val: [26, 30], op: 'add' } ]},
	{ id: 8392, levels: 2, name: 'Royal Guard Necklace - Aden', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'earthRes', val: [26, 30], op: 'add' } ]},
	{ id: 8393, levels: 2, name: 'Royal Guard Necklace - Innadril', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'waterRes', val: [26, 30], op: 'add' } ]},
	{ id: 8394, levels: 2, name: 'Royal Guard Necklace - Goddard', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: [26, 30], op: 'add' } ]},
	{ id: 8395, levels: 2, name: 'Royal Guard Necklace - Rune', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'fireRes', val: [26, 30], op: 'add' } ]},
	{ id: 8396, levels: 2, name: 'Royal Guard Necklace - Schuttgart', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'windRes', val: [26, 30], op: 'add' } ]},
	{ id: 8397, levels: 1, name: 'Moirai Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0426, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'fireRes', val: 3, op: 'add' },
		{ stat: 'waterRes', val: 3, op: 'add' },
		{ stat: 'windRes', val: 3, op: 'add' },
		{ stat: 'earthRes', val: 3, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8398, levels: 1, name: 'Moirai Leather Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0426, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'runSpd', val: 1.03, op: 'mul' },
		{ stat: 'rootVuln', val: 50, op: 'sub' },
		{ stat: 'fireRes', val: 3, op: 'add' },
		{ stat: 'waterRes', val: 3, op: 'add' },
		{ stat: 'windRes', val: 3, op: 'add' },
		{ stat: 'earthRes', val: 3, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8399, levels: 1, name: 'Moirai Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0811, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 50, op: 'sub' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8400, levels: 1, name: 'Vorpal Heavy Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 1.0847, op: 'mul' },
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' },
		{ stat: 'maxHp', val: 541, op: 'add' },
		{ stat: 'bleedVuln', val: 50, op: 'sub' },
		{ stat: 'rootVuln', val: 50, op: 'sub' },
		{ stat: 'sleepVuln', val: 50, op: 'sub' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'runSpd', val: 7, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8401, levels: 1, name: 'Vorpal Leather Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pDef', val: 1.0557, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'runSpd', val: 1.03, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'cAtkAdd', val: 182, op: 'add' },
		{ stat: 'maxMp', val: 360, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8402, levels: 1, name: 'Vorpal Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.087, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.05, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'runSpd', val: 7, op: 'add' },
		{ stat: 'maxMp', val: 92, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8403, levels: 1, name: 'Elegia Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0659, op: 'mul' },
		{ stat: 'rCrit', val: 127.4, op: 'add' },
		{ stat: 'bleedVuln', val: 50, op: 'sub' },
		{ stat: 'rootVuln', val: 50, op: 'sub' },
		{ stat: 'sleepVuln', val: 50, op: 'sub' },
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' },
		{ stat: 'maxHp', val: 550, op: 'add' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'absorbDam', val: 3, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8404, levels: 1, name: 'Elegia Leather Armor Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0659, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.06, op: 'mul' },
		{ stat: 'rCrit', val: 170.5, op: 'add' },
		{ stat: 'paralyzeVuln', val: 50, op: 'sub' },
		{ stat: 'runSpd', val: 1.03, op: 'mul' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8405, levels: 1, name: 'Elegia Robe Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.05, op: 'mul' },
		{ stat: 'stunVuln', val: 50, op: 'sub' },
		{ stat: 'fireRes', val: 5, op: 'add' },
		{ stat: 'waterRes', val: 5, op: 'add' },
		{ stat: 'windRes', val: 5, op: 'add' },
		{ stat: 'earthRes', val: 5, op: 'add' },
		{ stat: 'runSpd', val: 7, op: 'add' },
		{ stat: 'maxMp', val: 92, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.97, op: 'mul' },
		{ stat: 'cloak', val: 1, op: 'add' } ]},
	{ id: 8406, levels: 1, name: 'Moirai Armor Set - PvP', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8407, levels: 1, name: 'Moirai Leather Armor Set - PvP', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8408, levels: 1, name: 'Moirai Robe Set - PvP', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8409, levels: 1, name: 'Vorpal Heavy Armor Set - PvP', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8410, levels: 1, name: 'Vorpal Leather Armor Set - PvP', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8411, levels: 1, name: 'Vorpal Robe Set - PvP', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8412, levels: 1, name: 'Elegia Armor Set - PvP', target: 'SELF', operateType: 'P', trigger: 5693, effectType: 'ChanceSkillTrigger' },
	{ id: 8413, levels: 1, name: 'Elegia Leather Armor Set - PvP', target: 'SELF', operateType: 'P', trigger: 5694, effectType: 'ChanceSkillTrigger' },
	{ id: 8414, levels: 1, name: 'Elegia Robe Set - PvP', target: 'SELF', operateType: 'P', trigger: 5691, effectType: 'ChanceSkillTrigger' },
	{ id: 8418, levels: 1, name: 'Moirai Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0125, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.01, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'fireRes', val: 3, op: 'add' } ]},
	{ id: 8419, levels: 1, name: 'Moirai Cuirass', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0426, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.04, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'waterRes', val: 1, op: 'add' },
		{ stat: 'fireRes', val: 1, op: 'add' },
		{ stat: 'windRes', val: 1, op: 'add' },
		{ stat: 'earthRes', val: 1, op: 'add' } ]},
	{ id: 8420, levels: 1, name: 'Moirai Gaiter', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0208, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0167, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'waterRes', val: 3, op: 'add' } ]},
	{ id: 8421, levels: 1, name: 'Moirai Gauntlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0083, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0067, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'windRes', val: 3, op: 'add' } ]},
	{ id: 8422, levels: 1, name: 'Moirai Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0083, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0067, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'earthRes', val: 3, op: 'add' } ]},
	{ id: 8423, levels: 1, name: 'Moirai Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' } ]},
	{ id: 8424, levels: 1, name: 'Moirai Leather Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0125, op: 'mul' },
		{ stat: 'rootVuln', val: 5, op: 'sub' },
		{ stat: 'regMp', val: 1.01, op: 'mul' },
		{ stat: 'fireRes', val: 3, op: 'add' } ]},
	{ id: 8425, levels: 1, name: 'Moirai Leather Hauberk', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0426, op: 'mul' },
		{ stat: 'rootVuln', val: 5, op: 'sub' },
		{ stat: 'regMp', val: 1.04, op: 'mul' },
		{ stat: 'waterRes', val: 3, op: 'add' } ]},
	{ id: 8426, levels: 1, name: 'Moirai Leather Legging', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0208, op: 'mul' },
		{ stat: 'rootVuln', val: 5, op: 'sub' },
		{ stat: 'regMp', val: 1.0167, op: 'mul' },
		{ stat: 'waterRes', val: 3, op: 'add' } ]},
	{ id: 8427, levels: 1, name: 'Moirai Leather Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0083, op: 'mul' },
		{ stat: 'rootVuln', val: 5, op: 'sub' },
		{ stat: 'regMp', val: 1.0067, op: 'mul' },
		{ stat: 'windRes', val: 3, op: 'add' } ]},
	{ id: 8428, levels: 1, name: 'Moirai Leather Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0083, op: 'mul' },
		{ stat: 'rootVuln', val: 5, op: 'sub' },
		{ stat: 'regMp', val: 1.0067, op: 'mul' },
		{ stat: 'earthRes', val: 3, op: 'add' } ]},
	{ id: 8429, levels: 1, name: 'Moirai Circlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0062, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' },
		{ stat: 'fireRes', val: 5, op: 'add' } ]},
	{ id: 8430, levels: 1, name: 'Moirai Jacket', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0811, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' },
		{ stat: 'waterRes', val: 1, op: 'add' },
		{ stat: 'fireRes', val: 1, op: 'add' },
		{ stat: 'windRes', val: 1, op: 'add' },
		{ stat: 'earthRes', val: 1, op: 'add' } ]},
	{ id: 8431, levels: 1, name: 'Moirai Hose', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0103, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' },
		{ stat: 'waterRes', val: 5, op: 'add' } ]},
	{ id: 8432, levels: 1, name: 'Moirai Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0041, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' },
		{ stat: 'windRes', val: 5, op: 'add' } ]},
	{ id: 8433, levels: 1, name: 'Moirai Shoes', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0041, op: 'mul' },
		{ stat: 'paralyzeVuln', val: 5, op: 'sub' },
		{ stat: 'earthRes', val: 5, op: 'add' } ]},
	{ id: 8434, levels: 1, name: 'Moirai Sigil', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' } ]},
	{ id: 8435, levels: 1, name: 'Vesper Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0062, op: 'mul' },
		{ stat: 'pDef', val: 1.0062, op: 'mul' },
		{ stat: 'maxHp', val: 133, op: 'add' },
		{ stat: 'sleepVuln', val: 1, op: 'sub' },
		{ stat: 'rootVuln', val: 1, op: 'sub' } ]},
	{ id: 8436, levels: 1, name: 'Vesper Cuirass', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pDef', val: 1.0557, op: 'mul' },
		{ stat: 'maxHp', val: 531, op: 'add' },
		{ stat: 'sleepVuln', val: 28, op: 'sub' },
		{ stat: 'rootVuln', val: 28, op: 'sub' } ]},
	{ id: 8437, levels: 1, name: 'Vesper Gaiter', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0103, op: 'mul' },
		{ stat: 'pDef', val: 1.0103, op: 'mul' },
		{ stat: 'maxHp', val: 55, op: 'add' },
		{ stat: 'sleepVuln', val: 18, op: 'sub' },
		{ stat: 'rootVuln', val: 18, op: 'sub' } ]},
	{ id: 8438, levels: 1, name: 'Vesper Gauntlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'pDef', val: 1.0041, op: 'mul' },
		{ stat: 'maxHp', val: 22, op: 'add' },
		{ stat: 'sleepVuln', val: 7, op: 'sub' },
		{ stat: 'rootVuln', val: 7, op: 'sub' } ]},
	{ id: 8439, levels: 1, name: 'Vesper Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'pDef', val: 1.0041, op: 'mul' },
		{ stat: 'maxHp', val: 22, op: 'add' },
		{ stat: 'sleepVuln', val: 7, op: 'sub' },
		{ stat: 'rootVuln', val: 7, op: 'sub' } ]},
	{ id: 8440, levels: 1, name: 'Vesper Verteidiger', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' } ]},
	{ id: 8441, levels: 1, name: 'Vesper Leather Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0041, op: 'mul' },
		{ stat: 'regMp', val: 1.0041, op: 'mul' },
		{ stat: 'maxMp', val: 87, op: 'add' } ]},
	{ id: 8442, levels: 1, name: 'Vesper Leather Hauberk', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0557, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.05, op: 'mul' },
		{ stat: 'regMp', val: 1.05, op: 'mul' },
		{ stat: 'maxMp', val: 347, op: 'add' } ]},
	{ id: 8443, levels: 1, name: 'Vesper Leather Legging', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0068, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0068, op: 'mul' },
		{ stat: 'regMp', val: 1.0068, op: 'mul' },
		{ stat: 'maxMp', val: 145, op: 'add' } ]},
	{ id: 8444, levels: 1, name: 'Vesper Leather Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0027, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'maxMp', val: 58, op: 'add' } ]},
	{ id: 8445, levels: 1, name: 'Vesper Leather Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0027, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'maxMp', val: 58, op: 'add' } ]},
	{ id: 8446, levels: 1, name: 'Vesper Circlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0041, op: 'mul' },
		{ stat: 'regMp', val: 1.0041, op: 'mul' },
		{ stat: 'stunVuln', val: 8, op: 'sub' },
		{ stat: 'cancel', val: 4.5, op: 'sub' } ]},
	{ id: 8447, levels: 1, name: 'Vesper Jacket', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0847, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.05, op: 'mul' },
		{ stat: 'stunVuln', val: 20, op: 'sub' },
		{ stat: 'cancel', val: 12, op: 'sub' } ]},
	{ id: 8448, levels: 1, name: 'Vesper Hose', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0068, op: 'mul' },
		{ stat: 'regMp', val: 1.0068, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'cancel', val: 7.5, op: 'sub' } ]},
	{ id: 8449, levels: 1, name: 'Vesper Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'cancel', val: 3, op: 'sub' } ]},
	{ id: 8450, levels: 1, name: 'Vesper Shoes', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'cancel', val: 3, op: 'sub' } ]},
	{ id: 8451, levels: 1, name: 'Vesper Sigil', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'magicDamVul', val: 0.98, op: 'mul' } ]},
	{ id: 8452, levels: 1, name: 'Moirai Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bleedVuln', val: 7.62, op: 'sub' } ]},
	{ id: 8453, levels: 1, name: 'Moirai Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'poisonVuln', val: 6, op: 'sub' } ]},
	{ id: 8454, levels: 1, name: 'Moirai Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 16, op: 'add' } ]},
	{ id: 8455, levels: 1, name: 'Vesper Earring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 5, op: 'sub' },
		{ stat: 'rootVuln', val: 5, op: 'sub' } ]},
	{ id: 8456, levels: 1, name: 'Vesper Necklace', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 33, op: 'add' } ]},
	{ id: 8457, levels: 1, name: 'Vesper Ring', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 4.76, op: 'sub' } ]},
	{ id: 8458, levels: 1, name: 'Bracelet Weight Gauge Add', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'weightPenalty', val: 3000, op: 'add' } ]},
	{ id: 8459, levels: 1, name: 'Necklace of Freya', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 50, op: 'add' },
		{ stat: 'regMp', val: 0.23, op: 'add' },
		{ stat: 'bleedVuln', val: 20, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 15, op: 'sub' },
		{ stat: 'stunVuln', val: 15, op: 'sub' },
		{ stat: 'sleepVuln', val: 15, op: 'sub' },
		{ stat: 'waterRes', val: 10, op: 'add' },
		{ stat: 'mReuse', val: 0.95, op: 'mul' },
		{ stat: 'reflectDam', val: 4, op: 'add' },
		{ stat: 'derangementVuln', val: 10, op: 'sub' } ]},
	{ id: 8460, levels: 1, name: 'Blessed Necklace of Freya', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxMp', val: 50, op: 'add' },
		{ stat: 'regMp', val: 0.46, op: 'add' },
		{ stat: 'bleedVuln', val: 25, op: 'sub' },
		{ stat: 'paralyzeVuln', val: 20, op: 'sub' },
		{ stat: 'stunVuln', val: 20, op: 'sub' },
		{ stat: 'sleepVuln', val: 20, op: 'sub' },
		{ stat: 'waterRes', val: 15, op: 'add' },
		{ stat: 'mReuse', val: 0.95, op: 'mul' },
		{ stat: 'reflectDam', val: 4, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'derangementVuln', val: 10, op: 'sub' },
		{ stat: 'healEffect', val: 15, op: 'add' },
		{ stat: 'MEN', val: 2, op: 'add' },
		{ stat: 'CON', val: 1, op: 'add' },
		{ stat: 'STR', val: 1, op: 'sub' } ]},
	{ id: 8461, levels: 1, name: 'Heavy Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 70, op: 'add', using: 'Heavy' },
		{ stat: 'regMp', val: 32, op: 'add' } ]},
	{ id: 8462, levels: 1, name: 'Light Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rEvas', val: 2, op: 'add', using: 'Light' },
		{ stat: 'mDef', val: 39, op: 'add', using: 'Light' } ]},
	{ id: 8463, levels: 1, name: 'Magic Set', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pDef', val: 45, op: 'add', using: 'Magic' },
		{ stat: 'weightLimit', val: 1.3, op: 'mul' } ]},
	{ id: 8481, levels: 1, name: 'Vesper Noble Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0062, op: 'mul' },
		{ stat: 'pDef', val: 1.0062, op: 'mul' },
		{ stat: 'maxHp', val: 133, op: 'add' },
		{ stat: 'sleepVuln', val: 11, op: 'sub' },
		{ stat: 'rootVuln', val: 11, op: 'sub' } ]},
	{ id: 8482, levels: 1, name: 'Vesper Noble Gaiter', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0103, op: 'mul' },
		{ stat: 'pDef', val: 1.0103, op: 'mul' },
		{ stat: 'maxHp', val: 55, op: 'add' },
		{ stat: 'sleepVuln', val: 18, op: 'sub' },
		{ stat: 'rootVuln', val: 18, op: 'sub' } ]},
	{ id: 8483, levels: 1, name: 'Vesper Noble Gauntlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'pDef', val: 1.0041, op: 'mul' },
		{ stat: 'maxHp', val: 22, op: 'add' },
		{ stat: 'sleepVuln', val: 7, op: 'sub' },
		{ stat: 'rootVuln', val: 7, op: 'sub' } ]},
	{ id: 8484, levels: 1, name: 'Vesper Noble Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'pDef', val: 1.0041, op: 'mul' },
		{ stat: 'maxHp', val: 22, op: 'add' },
		{ stat: 'sleepVuln', val: 7, op: 'sub' },
		{ stat: 'rootVuln', val: 7, op: 'sub' } ]},
	{ id: 8485, levels: 1, name: 'Vesper Noble Leather Helmet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0041, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0041, op: 'mul' },
		{ stat: 'regMp', val: 1.0041, op: 'mul' },
		{ stat: 'maxMp', val: 87, op: 'add' } ]},
	{ id: 8486, levels: 1, name: 'Vesper Noble Leather Legging', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0068, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0068, op: 'mul' },
		{ stat: 'regMp', val: 1.0068, op: 'mul' },
		{ stat: 'maxMp', val: 145, op: 'add' } ]},
	{ id: 8487, levels: 1, name: 'Vesper Noble Leather Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0027, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'maxMp', val: 58, op: 'add' } ]},
	{ id: 8488, levels: 1, name: 'Vesper Noble Leather Boots', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'pAtk', val: 1.0027, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'maxMp', val: 58, op: 'add' } ]},
	{ id: 8489, levels: 1, name: 'Vesper Noble Circlet', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0041, op: 'mul' },
		{ stat: 'regMp', val: 1.0041, op: 'mul' },
		{ stat: 'stunVuln', val: 8, op: 'sub' },
		{ stat: 'cancel', val: 4.5, op: 'sub' } ]},
	{ id: 8490, levels: 1, name: 'Vesper Noble Hose', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0068, op: 'mul' },
		{ stat: 'regMp', val: 1.0068, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'cancel', val: 7.5, op: 'sub' } ]},
	{ id: 8491, levels: 1, name: 'Vesper Noble Gloves', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'cancel', val: 3, op: 'sub' } ]},
	{ id: 8492, levels: 1, name: 'Vesper Noble Shoes', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'mAtk', val: 1.0027, op: 'mul' },
		{ stat: 'regMp', val: 1.0027, op: 'mul' },
		{ stat: 'stunVuln', val: 5, op: 'sub' },
		{ stat: 'cancel', val: 3, op: 'sub' } ]},
	{ id: 8493, levels: 1, name: 'Moirai Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rShld', val: 1.05, op: 'mul' } ]},
	{ id: 8494, levels: 1, name: 'Vesper Verteidiger', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rShld', val: 1.05, op: 'mul' } ]},
	{ id: 8495, levels: 1, name: 'Vorpal Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rShld', val: 1.05, op: 'mul' } ]},
	{ id: 8496, levels: 1, name: 'Elegia Shield', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rShld', val: 1.05, op: 'mul' } ]},
	{ id: 8498, levels: 1, name: 'Pink Talisman - STR', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'STR', val: 2, op: 'add' } ]},
	{ id: 8499, levels: 1, name: 'Pink Talisman - DEX', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'DEX', val: 2, op: 'add' } ]},
	{ id: 8500, levels: 1, name: 'Pink Talisman - CON', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'CON', val: 2, op: 'add' } ]},
	{ id: 8501, levels: 1, name: 'Pink Talisman - INT', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'INT', val: 2, op: 'add' } ]},
	{ id: 8502, levels: 1, name: 'Pink Talisman - WIT', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'WIT', val: 2, op: 'add' } ]},
	{ id: 8503, levels: 1, name: 'Pink Talisman - MEN', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'MEN', val: 2, op: 'add' } ]},
	{ id: 8504, levels: 1, name: 'Pink Talisman - Stun Resist', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'stunVuln', val: 15, op: 'sub' } ]},
	{ id: 8505, levels: 1, name: 'Pink Talisman - Sleep Resist', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'sleepVuln', val: 15, op: 'sub' } ]},
	{ id: 8506, levels: 1, name: 'Pink Talisman - Hold Resist', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'rootVuln', val: 15, op: 'sub' } ]},
	{ id: 8507, levels: 1, name: 'Pink Talisman - Paralyze Resist', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'paralyzeVuln', val: 15, op: 'sub' } ]},
	{ id: 8508, levels: 1, name: 'Pink Talisman - All STAT', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'CON', val: 1, op: 'add' },
		{ stat: 'INT', val: 1, op: 'add' },
		{ stat: 'WIT', val: 1, op: 'add' },
		{ stat: 'MEN', val: 1, op: 'add' } ]},
	{ id: 9067, levels: 1, name: 'Potion of Vitality Maintenance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_keep', effects: [
		{ stat: 'vitalityConsumeRate', val: 0, op: 'mul' } ]},
	{ id: 9068, levels: 2, name: 'Potion of Vitality Maintenance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_keep', effects: [
		{ stat: 'vitalityConsumeRate', val: 0, op: 'mul' } ]},
	{ id: 9159, levels: 1, name: 'Transformation Scroll - Anakim', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 46, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 49, op: 'set' },
		{ stat: 'INT', val: 50, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 45, op: 'set' } ]},
	{ id: 9160, levels: 1, name: 'Transformation Scroll - Zaken', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'STR', val: 48, op: 'set' },
		{ stat: 'DEX', val: 30, op: 'set' },
		{ stat: 'CON', val: 52, op: 'set' },
		{ stat: 'INT', val: 45, op: 'set' },
		{ stat: 'WIT', val: 20, op: 'set' },
		{ stat: 'MEN', val: 45, op: 'set' } ]},
	{ id: 9161, levels: 1, name: 'Vesper\'s Mighty Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'wp_event_buf1', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 10, op: 'add' } ]},
	{ id: 9162, levels: 1, name: 'Vesper\'s Critical Attack Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'wp_event_buf1', effects: [
		{ stat: 'rCrit', val: 15, op: 'add' },
		{ stat: 'mCritRate', val: 2, op: 'add' },
		{ stat: 'runSpd', val: 10, op: 'add' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 9163, levels: 1, name: 'Invincible Vesper', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'wp_event_buf1', effects: [
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 20004, levels: 1, name: 'Dragon Dash', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up_special', effects: [
		{ stat: 'runSpd', val: 2, op: 'mul' } ]},
	{ id: 20005, levels: 1, name: 'Dragon Aura', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 20006, levels: 1, name: 'Soul Roar', target: 'SELF', operateType: 'A2', effectType: 'Buff', effects: [
		{ stat: 'maxHp', val: 1.15, op: 'mul' },
		{ stat: 'maxCp', val: 1.15, op: 'mul' } ]},
	{ id: 21004, levels: 1, name: 'Wind Walk', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 21005, levels: 1, name: 'Agility', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 21007, levels: 1, name: 'Ability of Doubt', target: 'SELF', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head' },
	{ id: 21011, levels: 1, name: 'Energy Recovery', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 21012, levels: 1, name: 'Energy Recovery', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 21013, levels: 1, name: 'Energy Recovery', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 21017, levels: 1, name: 'Holiday Dream Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 100, op: 'add' },
		{ stat: 'absorbDam', val: 10, op: 'add' } ]},
	{ id: 21018, levels: 1, name: 'Holiday Dream Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 100, op: 'add' },
		{ stat: 'cAtk', val: 1.25, op: 'mul' } ]},
	{ id: 21019, levels: 1, name: 'Holiday Dream Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'blowRate', val: 1.25, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 21020, levels: 1, name: 'Holiday Dream Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 100, op: 'add' },
		{ stat: 'absorbDam', val: 10, op: 'add' } ]},
	{ id: 21021, levels: 1, name: 'Holiday Dream Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 100, op: 'add' },
		{ stat: 'cAtk', val: 1.25, op: 'mul' } ]},
	{ id: 21022, levels: 1, name: 'Holiday Dream Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.25, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 21023, levels: 1, name: 'Holiday Dream Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'mAtk', val: 1.5, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 21024, levels: 1, name: 'Holiday Dream Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'absorbDam', val: 10, op: 'add' } ]},
	{ id: 21025, levels: 1, name: 'Holiday Dream Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'pAtkRange', val: 1.25, op: 'mul' },
		{ stat: 'rCrit', val: 0.25, op: 'basemul' } ]},
	{ id: 21026, levels: 1, name: 'Holiday Dream Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'atkCountMax', val: 10, op: 'add' },
		{ stat: 'absorbDam', val: 10, op: 'add' } ]},
	{ id: 21027, levels: 1, name: 'Holiday Dream Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.25, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 21028, levels: 1, name: 'Holiday Dream Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 100, op: 'add' },
		{ stat: 'absorbDam', val: 10, op: 'add' } ]},
	{ id: 21029, levels: 1, name: 'Holiday Dream Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'rCrit', val: 100, op: 'add' },
		{ stat: 'cAtk', val: 1.25, op: 'mul' } ]},
	{ id: 21030, levels: 1, name: 'Holiday Dream Weapon', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'maxCp', val: 1.3, op: 'mul' },
		{ stat: 'rEvas', val: 5, op: 'add' },
		{ stat: 'accCombat', val: 5, op: 'add' } ]},
	{ id: 21051, levels: 1, name: 'Steam Beatle Mount', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 21066, levels: 1, name: 'Energy Recovery', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 21084, levels: 1, name: 'Energy Recovery', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 21100, levels: 1, name: 'Great Wizard\'s Soul Power: Brilliance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 21103, levels: 1, name: 'Great Adventurer\'s Soul Power : Endless', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' } ]},
	{ id: 21111, levels: 1, name: 'Great Adventurer\'s Soul Power: Resilience', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' } ]},
	{ id: 21112, levels: 1, name: 'Great Warrior\'s Soul Power: Strength', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 21113, levels: 1, name: 'Great Wizard\'s Soul Power: Acuity', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 21114, levels: 1, name: 'Great Adventurer\'s Soul Power: Resilience', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 1.2, op: 'mul' },
		{ stat: 'debuffVuln', val: 10, op: 'sub' } ]},
	{ id: 21115, levels: 1, name: 'Great Warrior\'s Soul Power: Strength', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 21116, levels: 1, name: 'Great Wizard\'s Soul Power: Acuity', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 21117, levels: 1, name: 'Great Adventurer\'s Soul Power : Immortality', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 1.2, op: 'mul' },
		{ stat: 'regHp', val: 1.2, op: 'mul' },
		{ stat: 'regMp', val: 1.2, op: 'mul' } ]},
	{ id: 21118, levels: 1, name: 'Great Warrior\'s Soul Power: Destruction', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'cAtk', val: 1.2, op: 'mul' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul' } ]},
	{ id: 21119, levels: 1, name: 'Great Wizard\'s Soul Power: Brilliance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' } ]},
	{ id: 21122, levels: 1, name: 'Blessing of Skooldy : Protection of Darkness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21123, levels: 1, name: 'Blessing of Skooldy : Protection of Darkness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21124, levels: 1, name: 'Blessing of Skooldy : Protection of Darkness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21125, levels: 1, name: 'Blessing of Skooldy : Protection of Darkness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21126, levels: 1, name: 'Blessing of Skooldy : Protection of Darkness', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'maxMp', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21127, levels: 1, name: 'Blessing of Halloween', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21128, levels: 1, name: 'Blessing of Halloween', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'rCrit', val: 0.1, op: 'basemul' },
		{ stat: 'cAtk', val: 1.1, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21129, levels: 1, name: 'Blessing of Halloween', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'runSpd', val: 1.1, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21130, levels: 1, name: 'Blessing of Halloween', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'runSpd', val: 1.2, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21131, levels: 1, name: 'Blessing of Halloween', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21132, levels: 1, name: 'Ability of Shadow', target: 'SELF', operateType: 'A2', effectType: 'SilentMove', abnormalType: 'stealth', effects: [
		{ stat: 'runSpd', val: 0.7, op: 'mul' } ]},
	{ id: 21136, levels: 1, name: 'Authority of Golden Jack O\'Lantern Mask', target: 'PARTY', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'maxCp', val: 1.4, op: 'mul' },
		{ stat: 'pDef', val: 1.3, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'runSpd', val: 1.3, op: 'mul' } ]},
	{ id: 21137, levels: 1, name: 'Blessing of Halloween', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21138, levels: 1, name: 'Blessing of Halloween', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'rCrit', val: 0.1, op: 'basemul' },
		{ stat: 'cAtk', val: 1.1, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21139, levels: 1, name: 'Blessing of Halloween', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'runSpd', val: 1.1, op: 'mul' },
		{ stat: 'absorbDam', val: 5, op: 'add' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21140, levels: 1, name: 'Blessing of Halloween', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'runSpd', val: 1.2, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21141, levels: 1, name: 'Blessing of Halloween', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' },
		{ stat: 'darkRes', val: 20, op: 'add' } ]},
	{ id: 21153, levels: 1, name: 'Blessed Body', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.25, op: 'mul' } ]},
	{ id: 21154, levels: 1, name: 'Blessed Soul', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxMp', val: 1.25, op: 'mul' } ]},
	{ id: 21155, levels: 1, name: 'Scent of Flavorful Cheese', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.3, op: 'mul' },
		{ stat: 'cAtk', val: 1.2, op: 'mul' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul' } ]},
	{ id: 21156, levels: 1, name: 'Scent of Sweet Cheese', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.1, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' } ]},
	{ id: 21169, levels: 1, name: 'Transform Kadomas', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 21170, levels: 1, name: 'Blessed Soul', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.25, op: 'mul' } ]},
	{ id: 21171, levels: 1, name: 'Riding Jet Bike', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 21192, levels: 1, name: 'Silent Move', target: 'SELF', operateType: 'A2', effectType: 'SilentMove', abnormalType: 'stealth', effects: [
		{ stat: 'runSpd', val: 0.6, op: 'mul' } ]},
	{ id: 21232, levels: 1, name: 'Shiny Lit Platform', target: 'SELF', operateType: 'A1', effectType: 'Transformation', abnormalType: 'transform', effects: [
		{ stat: 'runSpd', val: 1.5, op: 'mul' } ]},
	{ id: 21235, levels: 1, name: '7th Anniversary T-shirt: Speed', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'runSpd', val: 7, op: 'add' } ]},
	{ id: 21237, levels: 1, name: '7th Anniversary T-shirt: Blessed Protection Ability', target: 'SELF', operateType: 'A2', effectType: 'Invincible', abnormalType: 'invincibility' },
	{ id: 21252, levels: 1, name: 'Hellblade', target: 'SELF', operateType: 'P', trigger: 23319, effectType: 'ChanceSkillTrigger' },
	{ id: 21253, levels: 1, name: 'Butcher Blades', target: 'SELF', operateType: 'P', trigger: 23320, effectType: 'ChanceSkillTrigger' },
	{ id: 21254, levels: 1, name: 'Claw of Destruction', target: 'SELF', operateType: 'P', trigger: 23321, effectType: 'ChanceSkillTrigger' },
	{ id: 21255, levels: 1, name: 'Blades of Delusion', target: 'SELF', operateType: 'P', trigger: 23322, effectType: 'ChanceSkillTrigger' },
	{ id: 21256, levels: 1, name: 'Blood Brother', target: 'SELF', operateType: 'P', trigger: 23323, effectType: 'ChanceSkillTrigger' },
	{ id: 21257, levels: 1, name: 'Mardil', target: 'SELF', operateType: 'P', trigger: 23324, effectType: 'ChanceSkillTrigger' },
	{ id: 21258, levels: 1, name: 'Rocking Horse Mount', target: 'SELF', operateType: 'A1', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 22004, levels: 1, name: 'Energy Ginseng', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf2', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 22013, levels: 1, name: 'Holiday Festival', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.6, op: 'mul' },
		{ stat: 'maxMp', val: 1.6, op: 'mul' },
		{ stat: 'maxCp', val: 1.6, op: 'mul' },
		{ stat: 'pAtk', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.3, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'runSpd', val: 30, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 22014, levels: 1, name: 'Holiday Festival', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'maxCp', val: 1.4, op: 'mul' },
		{ stat: 'pAtk', val: 1.3, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 20, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.85, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.85, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.85, op: 'mul' } ]},
	{ id: 22015, levels: 1, name: 'Holiday Festival', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.6, op: 'mul' },
		{ stat: 'maxMp', val: 1.6, op: 'mul' },
		{ stat: 'maxCp', val: 1.6, op: 'mul' },
		{ stat: 'pDef', val: 1.3, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'runSpd', val: 20, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.7, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 22016, levels: 1, name: 'Holiday Festival', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'maxCp', val: 1.4, op: 'mul' },
		{ stat: 'mAtk', val: 1.45, op: 'mul' },
		{ stat: 'pDef', val: 1.3, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'runSpd', val: 20, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.85, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 22029, levels: 1, name: 'Baguette Herb', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' } ]},
	{ id: 22030, levels: 1, name: 'Cream Puff Herb', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 22031, levels: 1, name: 'Cheesecake Herb', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' } ]},
	{ id: 22035, levels: 1, name: 'Birthday Cake Effect', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 22039, levels: 2, name: 'Rune of Experience Points', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bonusExp', val: [30, 50], op: 'add' } ]},
	{ id: 22040, levels: 2, name: 'Rune of SP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bonusSp', val: [30, 50], op: 'add' } ]},
	{ id: 22041, levels: 2, name: 'Rune of Crystal Form Level', target: 'SELF', operateType: 'P', effectType: 'CrystalGradeModify' },
	{ id: 22045, levels: 1, name: 'Omen Beast Transformation Scroll', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 22046, levels: 1, name: 'Death Blader Transformation Scroll', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 22047, levels: 1, name: 'Grail Apostle Transformation Scroll', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 22048, levels: 1, name: 'Unicorn Transformation Scroll', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 22049, levels: 1, name: 'Lilim Knight Transformation Scroll', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 22050, levels: 1, name: 'Golem Guardian Transformation Scroll', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 22051, levels: 1, name: 'Inferno Drake Transformation Scroll', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 22052, levels: 1, name: 'Dragon Bomber Transformation Scroll', target: 'SELF', operateType: 'A2', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 22054, levels: 1, name: 'Potion of Energy Maintenance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 0, op: 'mul' } ]},
	{ id: 22056, levels: 1, name: 'Wind Walk', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 22057, levels: 1, name: 'Haste', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 22058, levels: 1, name: 'Might', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 22059, levels: 1, name: 'Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 22060, levels: 1, name: 'Death Whisper', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 22061, levels: 1, name: 'Guidance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 22062, levels: 1, name: 'Empower', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 22063, levels: 1, name: 'Greater Acumen', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 22064, levels: 1, name: 'Vampiric Rage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 22065, levels: 1, name: 'Bless the Body', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 22066, levels: 1, name: 'Berserker Spirit', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'rEvas', val: 4, op: 'sub' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' } ]},
	{ id: 22067, levels: 1, name: 'Magic Barrier', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 22068, levels: 1, name: 'Bless the Soul', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 22069, levels: 1, name: 'Clarity', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'cheap_magic', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 22070, levels: 1, name: 'Wild Magic', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'magic_critical_up', effects: [
		{ stat: 'mCritRate', val: 2, op: 'add' } ]},
	{ id: 22118, levels: 1, name: 'Warmth of Kotatz', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'hp_regen_up', effects: [
		{ stat: 'regCp', val: 1.3, op: 'mul' },
		{ stat: 'regHp', val: 1.4, op: 'mul' },
		{ stat: 'regMp', val: 1.2, op: 'mul' } ]},
	{ id: 22119, levels: 1, name: 'Love for All Seasons', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' } ]},
	{ id: 22120, levels: 1, name: 'Happy New Year', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' },
		{ stat: 'rCrit', val: 1.3, op: 'mul' },
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 22121, levels: 1, name: 'Female Aniruddha', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'pDef', val: 1.15, op: 'mul' },
		{ stat: 'sDef', val: 15, op: 'add' } ]},
	{ id: 22122, levels: 1, name: 'Kung Hei Fat Choy', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'rEvas', val: 4, op: 'sub' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 22123, levels: 1, name: 'Chinese Feast', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' },
		{ stat: 'maxHp', val: 1.35, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 22124, levels: 1, name: 'Hwa Gei Bu Gwi', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'weightPenalty', val: 9000, op: 'add' },
		{ stat: 'pAtkSpd', val: 33, op: 'add' } ]},
	{ id: 22125, levels: 1, name: 'Fire Stamp', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' },
		{ stat: 'rEvas', val: 4, op: 'add' },
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 22128, levels: 3, name: 'Rudolph\'s Joy', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf2', effects: [
		{ stat: 'pAtkSpd', val: [1.1, 1.15, 1.2], op: 'mul' },
		{ stat: 'mAtkSpd', val: [1.1, 1.15, 1.2], op: 'mul' } ]},
	{ id: 22131, levels: 1, name: 'Red Firework Flames', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf10', effects: [
		{ stat: 'STR', val: 1, op: 'add' },
		{ stat: 'waterRes', val: 30, op: 'add' } ]},
	{ id: 22132, levels: 1, name: 'Gold Firework Flames', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf10', effects: [
		{ stat: 'CON', val: 1, op: 'add' },
		{ stat: 'holyRes', val: 30, op: 'add' } ]},
	{ id: 22133, levels: 1, name: 'Blue Firework Flames', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf10', effects: [
		{ stat: 'DEX', val: 1, op: 'add' },
		{ stat: 'fireRes', val: 30, op: 'add' } ]},
	{ id: 22134, levels: 1, name: 'Pink Firework Flames', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf10', effects: [
		{ stat: 'MEN', val: 1, op: 'add' },
		{ stat: 'earthRes', val: 30, op: 'add' } ]},
	{ id: 22135, levels: 1, name: 'White Firework Flames', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf10', effects: [
		{ stat: 'WIT', val: 1, op: 'add' },
		{ stat: 'windRes', val: 30, op: 'add' } ]},
	{ id: 22136, levels: 1, name: 'Silver Firework Flames', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf10', effects: [
		{ stat: 'INT', val: 1, op: 'add' },
		{ stat: 'darkRes', val: 30, op: 'add' } ]},
	{ id: 22139, levels: 1, name: 'Branding Wind Walk', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 22140, levels: 1, name: 'Hwa Gei Bu Gwi Haste', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 22141, levels: 1, name: 'Branding Agility', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'avoid_up', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 22142, levels: 1, name: 'Female Aniruddha\'s Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 22143, levels: 1, name: 'Happy New Year Death Whisper', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'rCrit', val: 1.35, op: 'mul' } ]},
	{ id: 22144, levels: 1, name: 'Happy New Year Guidance', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 22145, levels: 1, name: 'Love for All Seasons Empower', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 22146, levels: 1, name: 'Chinese Feast Greater Acumen', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 22147, levels: 1, name: 'Kung Hei Fat Choy Vampiric Rage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 22148, levels: 1, name: 'Branding Blessed Body', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 22149, levels: 1, name: 'Kung Hei Fat Choy Berserker Spirit', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'rEvas', val: 4, op: 'sub' },
		{ stat: 'runSpd', val: 8, op: 'add' } ]},
	{ id: 22150, levels: 1, name: 'Female Aniruddha\'s Magic Barrier', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 22151, levels: 1, name: 'Chinese Feast Blessed Soul', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 22152, levels: 1, name: 'Chinese Feast Clarity', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'cheap_magic', effects: [
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 22153, levels: 1, name: 'Love for All Seasons Wild Magic', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'magic_critical_up', effects: [
		{ stat: 'mCritRate', val: 2, op: 'add' } ]},
	{ id: 22154, levels: 1, name: 'Happy New Year Focus', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 1.3, op: 'mul' } ]},
	{ id: 22155, levels: 1, name: 'Female Aniruddha\'s Blessed Shield', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'shield_prob_up', effects: [
		{ stat: 'rShld', val: 15, op: 'add' } ]},
	{ id: 22156, levels: 1, name: 'Hwa Gei Bu Gwi Decrease Weight', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'decrease_weight_penalty', effects: [
		{ stat: 'weightPenalty', val: 9000, op: 'add' } ]},
	{ id: 22157, levels: 1, name: 'Kung Hei Fat Choy Might', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 22158, levels: 10, name: 'Rose Petal', target: 'SELF', operateType: 'A4', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'regHp', val: 1.2, op: 'mul' },
		{ stat: 'regMp', val: 1.2, op: 'mul' } ]},
	{ id: 22159, levels: 1, name: 'Vesper Super Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'mAtk', val: 1.15, op: 'mul' },
		{ stat: 'runSpd', val: 10, op: 'add' } ]},
	{ id: 22160, levels: 1, name: 'Vesper Critical Power', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'rCrit', val: 15, op: 'add' },
		{ stat: 'mCritRate', val: 2, op: 'add' },
		{ stat: 'runSpd', val: 10, op: 'add' },
		{ stat: 'absorbDam', val: 5, op: 'add' } ]},
	{ id: 22161, levels: 1, name: 'Invincible Vesper', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'pAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 22162, levels: 1, name: 'Mt. Fuji Herb', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 22163, levels: 1, name: 'Hawk Herb', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'pAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'rCrit', val: 0.1, op: 'basemul' } ]},
	{ id: 22164, levels: 1, name: 'Eggplant Herb', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'mAtkSpd', val: 1.1, op: 'mul' },
		{ stat: 'mCritRate', val: 2, op: 'add' } ]},
	{ id: 22175, levels: 1, name: 'Rune of Life', target: 'SELF', operateType: 'P', trigger: 23214, effectType: 'ChanceSkillTrigger' },
	{ id: 22176, levels: 1, name: 'Rune of Spirit', target: 'SELF', operateType: 'P', trigger: 23215, effectType: 'ChanceSkillTrigger' },
	{ id: 22182, levels: 1, name: 'Birthday Joy', target: 'SELF', operateType: 'A1', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 22183, levels: 1, name: 'Dragon Master Lee Transformation Scroll', target: 'SELF', operateType: 'A1', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 22184, levels: 1, name: 'Dragon Master Karin Transformation Scroll', target: 'SELF', operateType: 'A1', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 22190, levels: 1, name: 'Transformation Scroll - Blue Block Checker', target: 'SELF', operateType: 'A1', effectType: 'Transformation', abnormalType: 'transform' },
	{ id: 22250, levels: 1, name: 'Birthday Cake Effect', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'vp_keep', effects: [
		{ stat: 'vitalityConsumeRate', val: 0, op: 'mul' } ]},
	{ id: 22312, levels: 1, name: 'Birthday Joy', target: 'SELF', operateType: 'A1', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 23004, levels: 1, name: 'Majo Agathion Special Skill - Mysterious Power', target: 'SELF', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head' },
	{ id: 23007, levels: 1, name: 'Plaipitak Agathion Special Skill - Mysterious Power', target: 'SELF', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head' },
	{ id: 23013, levels: 1, name: 'Baby Panda Agathion Special Skill - Mysterious Power', target: 'SELF', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head' },
	{ id: 23016, levels: 1, name: 'Rudolph Agathion Special Skill - Ability of Energy', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 23017, levels: 1, name: 'Holiday Festival', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'maxCp', val: 1.4, op: 'mul' },
		{ stat: 'pAtk', val: 1.1, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.15, op: 'mul' },
		{ stat: 'runSpd', val: 20, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 23018, levels: 1, name: 'Thomas D. Turkey\'s Mistake', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf1', effects: [
		{ stat: 'maxHp', val: 1.4, op: 'mul' },
		{ stat: 'maxMp', val: 1.4, op: 'mul' },
		{ stat: 'maxCp', val: 1.4, op: 'mul' },
		{ stat: 'pAtk', val: 1.2, op: 'mul' },
		{ stat: 'pDef', val: 1.2, op: 'mul' },
		{ stat: 'mDef', val: 1.2, op: 'mul' },
		{ stat: 'mAtk', val: 1.3, op: 'mul' },
		{ stat: 'runSpd', val: 20, op: 'add' },
		{ stat: 'MagicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.9, op: 'mul' } ]},
	{ id: 23019, levels: 3, name: 'Scissors', target: 'ONE', operateType: 'A2', effectType: 'ImmobileBuff', abnormalType: 'br_event_buf2' },
	{ id: 23022, levels: 10, name: 'First Win', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf3' },
	{ id: 23024, levels: 1, name: 'Agathion of Love Special Skill - Energy Recovery Ability', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 23032, levels: 1, name: 'Brown Maneki Neko Agathion Special Skill - Ability of Energy Recovery', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 23034, levels: 1, name: 'One-eyed Bat Drove Agathion Special Skill - Ability of Resist Unholy', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'darkRes', val: 30, op: 'add' } ]},
	{ id: 23035, levels: 1, name: 'One-eyed Bat Drove Agathion Special Skill - Ability of Energy Recovery', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 23037, levels: 1, name: 'Pegasus Agathion Special Skill - Ability of Wind Walk', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 23042, levels: 1, name: 'Yellow-robed Tojigong Agathion Special Skill - Ability of Greater Heal', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'life_force_others', effects: [
		{ stat: 'regHp', val: 1.3, op: 'mul' } ]},
	{ id: 23043, levels: 1, name: 'Blue-robed Tojigong Agathion Special Skill - Ability of Reflect Damage', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'dmg_shield', effects: [
		{ stat: 'reflectDam', val: 20, op: 'add' } ]},
	{ id: 23044, levels: 1, name: 'Green-robed Tojigong Agathion Special Skill - Ability of Mana Regeneration', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'mp_regen_up', effects: [
		{ stat: 'regMp', val: 1.03, op: 'mul' } ]},
	{ id: 23057, levels: 1, name: 'Red Sumo Wrestler Agathion Special Skill - Death Whisper Ability', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 23058, levels: 1, name: 'Blue Sumo Wrestler Agathion Special Skill - Wild Magic Ability', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'magic_critical_up', effects: [
		{ stat: 'mCritRate', val: 2, op: 'add' } ]},
	{ id: 23059, levels: 1, name: 'Great Sumo Match Agathion Special Skill - Mysterious Power', target: 'SELF', operateType: 'A2', effectType: 'BigHead', abnormalType: 'big_head' },
	{ id: 23063, levels: 1, name: 'Button-Eyed Bear Doll Agathion Special Skill - Ability of Energy Recovery', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 23064, levels: 1, name: 'God of Fortune Agathion Special Skill - Energy Recovery Ability', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vp_up', effects: [
		{ stat: 'vitalityConsumeRate', val: 10, op: 'sub' } ]},
	{ id: 23065, levels: 1, name: 'Wonboso Agathion Special Skill - Wind Walk Ability', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 23068, levels: 1, name: 'Pomona Agathion Special Skill - Mental Shield Ability', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'resist_derangement', effects: [
		{ stat: 'rootVuln', val: 50, op: 'sub' },
		{ stat: 'sleepVuln', val: 50, op: 'sub' },
		{ stat: 'derangementVuln', val: 50, op: 'sub' } ]},
	{ id: 23072, levels: 1, name: 'Eva\'s Wrath', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'br_event_buf2' },
	{ id: 23134, levels: 1, name: 'Miss Chipao Agathion Special Skill - Decrease Weight', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'decrease_weight_penalty', effects: [
		{ stat: 'weightPenalty', val: 9000, op: 'add' } ]},
	{ id: 23136, levels: 1, name: 'Nepal Snow Agathion Special Skill - Snow\'s Haste', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 23138, levels: 1, name: 'Round Ball Snow Agathion Special Skill - Snow\'s Acumen', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 23140, levels: 1, name: 'Ladder Snow Agathion Special Skill - Snow\'s Wind Walk', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 23172, levels: 1, name: 'Phoenix Agathion Special Skill - Nirvana Rebirth', target: 'SELF', operateType: 'A2', effectType: 'Invincible', abnormalType: 'invincibility' },
	{ id: 23182, levels: 1, name: 'Three-headed Dragon Agathion Special Skill - Wind Walk', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 20, op: 'add' } ]},
	{ id: 23238, levels: 1, name: 'Master\'s Blessing - Eye of Pa\'agrio', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_hit_defence_crt_rate_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'critDamEvas', val: 1.3, op: 'mul' } ]},
	{ id: 23239, levels: 1, name: 'Master\'s Blessing - Soul of Pa\'agrio', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_ma_md_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 23240, levels: 1, name: 'Master\'s Blessing - Chant of Magnus', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxMp', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.5, op: 'add', using: 'Heavy,Light' },
		{ stat: 'regMp', val: 4, op: 'add', using: 'Magic' },
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'mAtk', val: 1.3, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'fireRes', val: 10, op: 'add' },
		{ stat: 'waterRes', val: 10, op: 'add' },
		{ stat: 'windRes', val: 10, op: 'add' },
		{ stat: 'earthRes', val: 10, op: 'add' },
		{ stat: 'debuffVuln', val: 25, op: 'sub' },
		{ stat: 'cancelVuln', val: 40, op: 'sub' } ]},
	{ id: 23241, levels: 1, name: 'Master\'s Blessing - Chant of Blood Awakening', target: 'ONE', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_vampiric_haste', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 23242, levels: 1, name: 'Master\'s Blessing - Spike', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'dwarf_attack_buff', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul', using: 'Blunt,Big Blunt' },
		{ stat: 'stunProf', val: 8, op: 'add', using: 'Blunt,Big Blunt' } ]},
	{ id: 23243, levels: 1, name: 'Master\'s Blessing - Bowstring', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'dwarf_attack_buff', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'pAtkRange', val: 100, op: 'add', using: 'Bow,Crossbow' } ]},
	{ id: 23244, levels: 1, name: 'Master\'s Blessing - Hard Tanning', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'dwarf_defence_buff', effects: [
		{ stat: 'pDef', val: 1.05, op: 'mul', using: 'Light' },
		{ stat: 'rEvas', val: 2, op: 'add', using: 'Light' } ]},
	{ id: 23245, levels: 1, name: 'Master\'s Blessing - Embroider', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'dwarf_defence_buff', effects: [
		{ stat: 'pDef', val: 1.05, op: 'mul', using: 'Magic' },
		{ stat: 'regMp', val: 2, op: 'add', using: 'Magic' } ]},
	{ id: 23246, levels: 1, name: 'Master\'s Blessing - Counter Critical', target: 'ONE', operateType: 'A1', trigger: 6059, effectType: 'ChanceSkillTrigger', abnormalType: 'counter_critical', effects: [
		{ stat: 'critVuln', val: 0.7, op: 'mul' } ]},
	{ id: 23247, levels: 1, name: 'Master\'s Blessing - Elemental Protection', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'md_up_attr', effects: [
		{ stat: 'waterRes', val: 20, op: 'add' },
		{ stat: 'fireRes', val: 20, op: 'add' },
		{ stat: 'windRes', val: 20, op: 'add' },
		{ stat: 'earthRes', val: 20, op: 'add' } ]},
	{ id: 23248, levels: 1, name: 'Master\'s Blessing - Arcane Protection', target: 'ONE', operateType: 'A1', effectType: 'Buff', abnormalType: 'resist_debuff_dispel', effects: [
		{ stat: 'cancelVuln', val: 30, op: 'sub' },
		{ stat: 'debuffVuln', val: 20, op: 'sub' } ]},
	{ id: 23253, levels: 1, name: 'Master\'s Blessing - Focus', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'critical_prob_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' } ]},
	{ id: 23254, levels: 1, name: 'Master\'s Blessing - Death Whisper', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 23255, levels: 1, name: 'Master\'s Blessing - Haste', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 23256, levels: 1, name: 'Master\'s Blessing - Guidance', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 23257, levels: 1, name: 'Master\'s Blessing - Blessed Body', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 23258, levels: 1, name: 'Master\'s Blessing - Blessed Soul', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 23259, levels: 1, name: 'Master\'s Blessing - Agility', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'avoid_up', effects: [
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 23260, levels: 1, name: 'Master\'s Blessing - Acumen', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 23261, levels: 1, name: 'Master\'s Blessing - Decrease Weight', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'decrease_weight_penalty', effects: [
		{ stat: 'weightPenalty', val: 9000, op: 'add' } ]},
	{ id: 23262, levels: 1, name: 'Master\'s Blessing - Might', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 23263, levels: 1, name: 'Master\'s Blessing - Shield', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 23264, levels: 1, name: 'Master\'s Blessing - Magic Barrier', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 23265, levels: 1, name: 'Master\'s Blessing - Vampiric Rage', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 23266, levels: 1, name: 'Master\'s Blessing - Empower', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 23267, levels: 1, name: 'Master\'s Blessing - Wind Walk', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 23268, levels: 1, name: 'Master\'s Blessing - Berserker Spirit', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'sub' } ]},
	{ id: 23269, levels: 1, name: 'Master\'s Blessing - Greater Might', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'pa_pd_up', effects: [
		{ stat: 'pAtk', val: 1.1, op: 'mul' } ]},
	{ id: 23270, levels: 1, name: 'Master\'s Blessing - Greater Shield', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'pa_pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 23271, levels: 1, name: 'Master\'s Blessing - Wild Magic', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'magic_critical_up', effects: [
		{ stat: 'mCritRate', val: 2, op: 'basemul' } ]},
	{ id: 23272, levels: 1, name: 'Master\'s Blessing - Clarity', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'cheap_magic', effects: [
		{ stat: 'MagicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 23273, levels: 1, name: 'Master\'s Blessing - Prophecy of Water', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
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
		{ stat: 'MagicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'PhysicalMpConsumeRate', val: 0.95, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.95, op: 'mul' } ]},
	{ id: 23274, levels: 1, name: 'Master\'s Blessing - Prophecy of Fire', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
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
	{ id: 23275, levels: 1, name: 'Master\'s Blessing - Prophecy of Wind', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
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
	{ id: 23276, levels: 1, name: 'Master\'s Blessing - Chant of Victory', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxHp', val: 1.2, op: 'mul' },
		{ stat: 'mCritRate', val: 0.2, op: 'basemul' },
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
	{ id: 23277, levels: 1, name: 'Master\'s Blessing - Improve Combat', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_pa_pd_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' },
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 23278, levels: 1, name: 'Master\'s Blessing - Improve Magic', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_ma_md_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 23279, levels: 1, name: 'Master\'s Blessing - Improve Condition', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_hp_mp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' },
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 23280, levels: 1, name: 'Master\'s Blessing - Improve Critical', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_crt_rate_dmg_up', effects: [
		{ stat: 'rCrit', val: 0.3, op: 'basemul' },
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 23281, levels: 1, name: 'Master\'s Blessing - Improve Shield Defense', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_shield_rate_defence_up', effects: [
		{ stat: 'rShld', val: 1.3, op: 'mul' },
		{ stat: 'sDef', val: 1.5, op: 'mul' } ]},
	{ id: 23282, levels: 1, name: 'Master\'s Blessing - Improve Movement', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_speed_avoid_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' },
		{ stat: 'rEvas', val: 4, op: 'add' } ]},
	{ id: 23283, levels: 1, name: 'Master\'s Blessing - Sharpen Edge', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'dwarf_attack_buff', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul', using: 'Sword,Big Sword,Dual Sword,Ancient,Rapier,Dagger,Dual Dagger,Pole,Dual Fist' },
		{ stat: 'rCrit', val: 0.2, op: 'basemul', using: 'Sword,Big Sword,Dual Sword,Ancient,Rapier,Dagger,Dual Dagger,Pole,Dual Fist' } ]},
	{ id: 23284, levels: 1, name: 'Master\'s Blessing - Face Harden', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'dwarf_attack_buff', effects: [
		{ stat: 'pDef', val: 1.1, op: 'mul', using: 'Heavy' } ]},
	{ id: 23285, levels: 1, name: 'Master\'s Blessing - Blessing of Noblesse', target: 'AURA', operateType: 'A1', effectType: 'NoblesseBless', abnormalType: 'preserve_abnormal' },
	{ id: 23286, levels: 1, name: 'Master\'s Blessing - Eye of Pa\'agrio', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_hit_defence_crt_rate_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' },
		{ stat: 'critDamEvas', val: 1.3, op: 'mul' } ]},
	{ id: 23287, levels: 1, name: 'Master\'s Blessing - Soul of Pa\'agrio', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_ma_md_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' },
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 23288, levels: 1, name: 'Master\'s Blessing - Chant of Magnus', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'multi_buff', effects: [
		{ stat: 'maxMp', val: 1.15, op: 'mul' },
		{ stat: 'regMp', val: 1.5, op: 'add', using: 'Heavy,Light' },
		{ stat: 'regMp', val: 4, op: 'add', using: 'Magic' },
		{ stat: 'mDef', val: 1.3, op: 'mul' },
		{ stat: 'mAtk', val: 1.3, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.2, op: 'mul' },
		{ stat: 'fireRes', val: 10, op: 'add' },
		{ stat: 'waterRes', val: 10, op: 'add' },
		{ stat: 'windRes', val: 10, op: 'add' },
		{ stat: 'earthRes', val: 10, op: 'add' },
		{ stat: 'debuffVuln', val: 25, op: 'sub' },
		{ stat: 'cancelVuln', val: 40, op: 'sub' } ]},
	{ id: 23289, levels: 1, name: 'Master\'s Blessing - Chant of Blood Awakening', target: 'AURA', operateType: 'A2', effectType: 'Buff', abnormalType: 'improve_vampiric_haste', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' },
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 23290, levels: 1, name: 'Master\'s Blessing - Spike', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'dwarf_attack_buff', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul', using: 'Blunt,Big Blunt' },
		{ stat: 'stunProf', val: 8, op: 'add', using: 'Blunt,Big Blunt' } ]},
	{ id: 23291, levels: 1, name: 'Master\'s Blessing - Bowstring', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'dwarf_attack_buff', effects: [
		{ stat: 'pAtk', val: 1.05, op: 'mul', using: 'Bow,Crossbow' },
		{ stat: 'pAtkRange', val: 100, op: 'add', using: 'Bow,Crossbow' } ]},
	{ id: 23292, levels: 1, name: 'Master\'s Blessing - Hard Tanning', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'dwarf_defence_buff', effects: [
		{ stat: 'pDef', val: 1.05, op: 'mul', using: 'Light' },
		{ stat: 'rEvas', val: 2, op: 'add', using: 'Light' } ]},
	{ id: 23293, levels: 1, name: 'Master\'s Blessing - Embroider', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'dwarf_defence_buff', effects: [
		{ stat: 'pDef', val: 1.05, op: 'mul', using: 'Magic' },
		{ stat: 'regMp', val: 2, op: 'add', using: 'Magic' } ]},
	{ id: 23294, levels: 1, name: 'Master\'s Blessing - Counter Critical', target: 'AURA', operateType: 'A1', trigger: 6059, effectType: 'ChanceSkillTrigger', abnormalType: 'counter_critical', effects: [
		{ stat: 'critVuln', val: 0.7, op: 'mul' } ]},
	{ id: 23295, levels: 1, name: 'Master\'s Blessing - Elemental Protection', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'md_up_attr', effects: [
		{ stat: 'waterRes', val: 20, op: 'add' },
		{ stat: 'fireRes', val: 20, op: 'add' },
		{ stat: 'windRes', val: 20, op: 'add' },
		{ stat: 'earthRes', val: 20, op: 'add' } ]},
	{ id: 23296, levels: 1, name: 'Master\'s Blessing - Arcane Protection', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'resist_debuff_dispel', effects: [
		{ stat: 'cancelVuln', val: 30, op: 'sub' },
		{ stat: 'debuffVuln', val: 20, op: 'sub' } ]},
	{ id: 23308, levels: 1, name: 'Totem\'s Energy - Body', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'totem_energy', effects: [
		{ stat: 'regHp', val: 1.3, op: 'mul' },
		{ stat: 'damageZoneVuln', val: 80, op: 'mul' } ]},
	{ id: 23309, levels: 1, name: 'Totem\'s Energy - Spirit', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'totem_energy', effects: [
		{ stat: 'regMp', val: 1.3, op: 'mul' } ]},
	{ id: 23310, levels: 1, name: 'Totem\'s Energy - Courage', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'totem_energy', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 23311, levels: 1, name: 'Totem\'s Energy - Fortitude', target: 'AURA', operateType: 'A1', effectType: 'Buff', abnormalType: 'totem_energy', effects: [
		{ stat: 'mDef', val: 1.25, op: 'mul' } ]},
	{ id: 23324, levels: 1, name: 'Jet Black Typhoon', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'raid_weapon', effects: [
		{ stat: 'mAtkSpd', val: 1.15, op: 'mul' },
		{ stat: 'windPower', val: 30, op: 'add' } ]},
	{ id: 26022, levels: 1, name: 'High grade potion which improves attack speed', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 26023, levels: 1, name: 'High grade potion which improves moving speed', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 26025, levels: 1, name: 'Powerful Healing Potion', target: 'SELF', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'hp_recover' },
	{ id: 26026, levels: 1, name: 'High-grade Healing Potion', target: 'SELF', operateType: 'A2', effectType: 'HealOverTime', abnormalType: 'hp_recover' },
	{ id: 26031, levels: 1, name: 'Wind Walk Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'speed_up', effects: [
		{ stat: 'runSpd', val: 33, op: 'add' } ]},
	{ id: 26032, levels: 1, name: 'Haste Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'attack_time_down', effects: [
		{ stat: 'pAtkSpd', val: 1.33, op: 'mul' } ]},
	{ id: 26033, levels: 1, name: 'Might Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pa_up', effects: [
		{ stat: 'pAtk', val: 1.15, op: 'mul' } ]},
	{ id: 26034, levels: 1, name: 'Shield Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'pd_up', effects: [
		{ stat: 'pDef', val: 1.15, op: 'mul' } ]},
	{ id: 26035, levels: 1, name: 'Death Whisper Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'critical_dmg_up', effects: [
		{ stat: 'cAtk', val: 1.35, op: 'mul' } ]},
	{ id: 26036, levels: 1, name: 'Guidance Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'hit_up', effects: [
		{ stat: 'accCombat', val: 4, op: 'add' } ]},
	{ id: 26037, levels: 1, name: 'Empower Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'ma_up', effects: [
		{ stat: 'mAtk', val: 1.75, op: 'mul' } ]},
	{ id: 26038, levels: 1, name: 'Greater Acumen Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'casting_time_down', effects: [
		{ stat: 'mAtkSpd', val: 1.3, op: 'mul' } ]},
	{ id: 26039, levels: 1, name: 'Vampiric Rage Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'vampiric_attack', effects: [
		{ stat: 'absorbDam', val: 9, op: 'add' } ]},
	{ id: 26040, levels: 1, name: 'Bless the Body Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_hp_up', effects: [
		{ stat: 'maxHp', val: 1.35, op: 'mul' } ]},
	{ id: 26041, levels: 1, name: 'Berserker Spirit Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'berserker', effects: [
		{ stat: 'pDef', val: 0.92, op: 'mul' },
		{ stat: 'mDef', val: 0.84, op: 'mul' },
		{ stat: 'rEvas', val: 4, op: 'sub' },
		{ stat: 'pAtk', val: 1.08, op: 'mul' },
		{ stat: 'mAtk', val: 1.16, op: 'mul' },
		{ stat: 'pAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'mAtkSpd', val: 1.08, op: 'mul' },
		{ stat: 'runSpd', val: 8, op: 'add' } ]},
	{ id: 26042, levels: 1, name: 'Magic Barrier Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'md_up', effects: [
		{ stat: 'mDef', val: 1.3, op: 'mul' } ]},
	{ id: 26043, levels: 1, name: 'Bless the Soul Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'max_mp_up', effects: [
		{ stat: 'maxMp', val: 1.35, op: 'mul' } ]},
	{ id: 26044, levels: 1, name: 'Clarity Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'cheap_magic', effects: [
		{ stat: 'PhysicalMpConsumeRate', val: 0.8, op: 'mul' },
		{ stat: 'MagicalMpConsumeRate', val: 0.9, op: 'mul' },
		{ stat: 'DanceMpConsumeRate', val: 0.8, op: 'mul' } ]},
	{ id: 26045, levels: 1, name: 'Wild Magic Scroll', target: 'SELF', operateType: 'A2', effectType: 'Buff', abnormalType: 'magic_critical_up', effects: [
		{ stat: 'mCritRate', val: 2, op: 'add' } ]},
	{ id: 26046, levels: 5, name: 'Rune of Experience Points', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bonusExp', val: [10, 20, 30, 40, 50], op: 'add' } ]},
	{ id: 26047, levels: 5, name: 'Rune of SP', target: 'SELF', operateType: 'P', effects: [
		{ stat: 'bonusSp', val: [10, 20, 30, 40, 50], op: 'add' } ]},
	{ id: 26048, levels: 5, name: 'Rune of Crystal Form', target: 'SELF', operateType: 'P', effectType: 'CrystalGradeModify' }
];