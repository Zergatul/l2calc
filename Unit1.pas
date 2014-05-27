//профиксить бонусы СА в хиро вепонах
//профиксить голіх файтеров
// katana sls +4 SA ????
// hell knife
// SA Magic... у ашніх вепонах і у есних
// siletto - dagger C grade .... SA ?????
// ecliptic axe, sword - //-//
// mystrerious sword, stick of earth
// paagrian sword
// робе мастери у профетов клериков
// duelist spirit
// mp за робы
// augs stop on max hp

unit Unit1;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls, Spin, ComCtrls, TabNotBk, Buttons;

const

  ProfaGoBack : array [0..57] of Integer =
    ( 2,12, 8, 6,34,40,25,24,-1,-1, 9,30,-1,20,18,-1,15,-1,17,15,17,55,39,-1,23,-1,28,57,-1,-1,28,
     29,31,24, 8, 2,10,19, 6,23,12,43,34, 9,19,57,10,20,16,16,39,26,31,57,55,23, 2,25);

  WeaponMasteryMystic : array [1..42] of Integer =
    (7,14,20,25,25,30,30,35,35,40,40,40,44,44,44,48,48,48,52,52,52,56,56,56,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  WeaponMasteryFighter : array [1..3] of Integer =
    (5,10,15);
  Blunt_Mastery : array [1..45] of Integer =
    (20,24,28,28,32,32,36,36,40,40,40,43,43,43,46,46,46,49,49,49,52,52,52,55,55,55,58,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  Dagger_Mastery : array [1..45] of Integer =
    (20,24,28,28,32,32,36,36,40,40,40,43,43,43,46,46,46,49,49,49,52,52,52,55,55,55,58,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  Bow_Mastery : array [1..52] of Integer =
    (20,20,20,24,24,24,28,28,28,32,32,32,36,36,36,40,40,40,43,43,43,46,46,46,49,49,49,52,52,52,55,55,55,58,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  Sword_Mastery : array [1..45] of Integer =
    (20,24,28,28,32,32,36,36,40,40,40,43,43,43,46,46,46,49,49,49,52,52,52,55,55,55,58,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  Polearm_Mastery : array [1..45] of Integer =
    (20,24,28,28,32,32,36,36,40,40,40,43,43,43,46,46,46,49,49,49,52,52,52,55,55,55,58,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  DualSword_Mastery : array [1..37] of Integer =
    (40,40,40,43,43,43,46,46,46,49,49,49,52,52,52,55,55,55,58,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  TwoHands_Mastery : array [1..20] of Integer =
    (20,24,28,32,36,40,43,46,49,52,55,58,60,62,64,66,68,70,72,74);
  Fist_Mastery : array [1..45] of Integer =
    (20,24,28,28,32,32,36,36,40,40,40,43,43,43,46,46,46,49,49,49,52,52,52,55,55,55,58,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  ArmorMasteryMystic : array [1..3] of Integer =
    (7,14,14);
  ArmorMasteryFighter : array [1..5] of Integer =
    (5,10,10,15,15);
  HvArmorMasteryFighter : array [1..52] of Integer =
    (20,20,20,24,24,24,28,28,28,32,32,32,36,36,36,40,40,40,43,43,43,46,46,46,49,49,49,52,52,52,55,55,55,58,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  HvArmorMasteryGnom : array [1..50] of Integer =
    (20,20,24,24,28,28,28,32,32,32,36,36,36,40,40,40,43,43,43,46,46,46,49,49,49,52,52,52,55,55,55,58,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  HvArmorMasteryProphet : array [1..33] of Integer =
    (40,40,40,44,44,44,48,48,48,52,52,52,56,56,56,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  HvArmorMasteryOrcMystic : array [1..43] of Integer =
    (14,14,20,20,25,25,30,30,35,35,40,40,40,44,44,44,48,48,48,52,52,52,56,56,56,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  LgArmorMasteryFighter : array [1..47] of Integer =
    (20,20,24,24,28,28,32,32,36,36,40,40,40,43,43,43,46,46,46,49,49,49,52,52,52,55,55,55,58,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  LgArmorMasteryGnom : array [1..45] of Integer =
    (20,24,28,28,32,32,36,36,40,40,40,43,43,43,46,46,46,49,49,49,52,52,52,55,55,55,58,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  LgArmorMasteryBuffer : array [1..41] of Integer =
    (20,20,25,25,30,30,35,35,40,40,40,44,44,44,48,48,48,52,52,52,56,56,56,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  LgArmorMasteryOrcMystic : array [1..45] of Integer =
    (7,7,14,14,20,20,25,25,30,30,35,35,40,40,40,44,44,44,48,48,48,52,52,52,56,56,56,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  LgArmorMasterySummoner : array [1..33] of Integer =
    (40,40,40,44,44,44,48,48,48,52,52,52,56,56,56,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  RobeMasteryMystic : array [1..41] of Integer =
    (20,20,25,25,30,30,35,35,40,40,40,44,44,44,48,48,48,52,52,52,56,56,56,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  RobeMasteryOrcMystic : array [1..45] of Integer =
    (7,7,14,14,20,20,25,25,30,30,35,35,40,40,40,44,44,44,48,48,48,52,52,52,56,56,56,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  Anti_Magic : array [1..45] of Integer =
    (7,7,14,14,20,20,25,25,30,30,35,35,40,40,40,44,44,44,48,48,48,52,52,52,56,56,56,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  Magic_Resistance : array [1..51] of Integer =
    (20,20,24,24,24,28,28,28,32,32,32,36,36,36,40,40,40,43,43,43,46,46,46,49,49,49,52,52,52,55,55,55,58,58,58,60,60,62,62,64,64,66,66,68,68,70,70,72,72,74,74);
  Clear_Mind : array [1..6] of Integer =
    (40,48,56,62,68,74);
  Boost_Mana : array [1..8] of Integer =
    (20,30,40,48,56,60,66,72);
  FastSpell_Casting : array [1..3] of Integer =
    (25,40,56);
  FastHP_RecoveryMystic : array [1..6] of Integer =
    (35,44,52,58,64,74);
  FastHP_RecoveryFighter : array [1..8] of Integer =
    (24,32,40,43,52,58,68,74);
  FastMana_Recovery : array [1..7] of Integer =
    (25,35,44,52,60,68,74);
  Quick_Step : array [1..2] of Integer =
    (28,43);
  Boost_Evasion : array [1..3] of Integer =
    (24,46,58);
  Esprit_ : array [1..8] of Integer =
    (36,43,46,49,52,62,68,74);
  Critical_Power : array [1..6] of Integer =
    (24,32,40,52,64,72);
  Acrobatic_Move : array [1..3] of Integer =
    (28,43,55);
  Critical_Chance : array [1..3] of Integer =
    (28,40,49);
  Weight_Limit : array [1..3] of Integer =
    (10,28,46);
  Vital_Force : array [1..8] of Integer =
    (24,32,40,46,52,58,64,72);
  Final_Fortress : array [1..11] of Integer =
    (52,55,58,60,62,64,66,68,70,72,74);
  Shield_Mastery : array [1..4] of Integer =
    (20,28,40,52);
  Focus_Mind : array [1..6] of Integer =
    (36,43,49,55,64,72);
  Agile_Movement : array [1..2] of Integer =
    (20,40);
  BoostHPFighter : array [1..10] of Integer =
    (20,28,36,43,49,55,62,66,70,74);
  BoostHPMystic : array [1..7] of Integer =
    (40,44,48,52,56,62,70);
  Final_Frenzy : array [1..14] of Integer =
    (43,46,49,52,55,58,60,62,64,66,68,70,72,74);
  BoostAtk_Speed : array [1..3] of Integer =
    (36,46,58);
  QuiverOf_Holding : array [1..3] of Integer =
    (58,66,74);

type
  SAType = (SA_Empower,SA_MagicParalize,SA_MagicPower,SA_Focus,SA_Haste,SA_Health,
            SA_Anger,SA_BackBlow,SA_CritBleed,SA_Acumen,SA_Conversion,SA_MagicDamage,
            SA_MagicSilence,SA_ManaUp,SA_Light,SA_MagicMS,SA_CritDamage,SA_RskFocus,
            SA_CritDrain,SA_RskHaste,SA_Guidance,SA_RskEvasion,SA_CritStun,SA_WideBlow,
            SA_CheapShot,SA_QRecovery,SA_MagicPoison,SA_MagicFocus,SA_ToweringBlow,
            SA_HPDrain,SA_MPRegen,SA_HPRegen,SA_CritSlow,SA_MagicHold,SA_MPHPCP,
            SA_BodilyBlessing,SA_MagicRegen,SA_MagicChaos,SA_MagicWeakness,SA_Rod,
            SA_Scepter,SA_Axe,SA_Blade,SA_Bow,SA_Cleaver,SA_Crusher,SA_Fang,SA_Spear,
            SA_Stinger,SA_Wing,SA_CritPoison,SA_Evasion,SA_Miser,SA_LongBlow,
            SA_CritAnger,SA_BackBlowPerCent);

const
  HeroWeapons : set of SAType = [SA_Rod,SA_Scepter,SA_Axe,SA_Blade,SA_Bow,SA_Cleaver,SA_Crusher,SA_Fang,SA_Spear,SA_Stinger,SA_Wing];
  HeroWeaponsHP : set of SAType = [SA_Axe,SA_Blade,SA_Cleaver,SA_Crusher,SA_Fang,SA_Spear,SA_Wing];
  HeroWeaponsMP : set of SAType = [SA_Rod,SA_Scepter,SA_Axe,SA_Blade,SA_Bow,SA_Cleaver,SA_Fang,SA_Stinger,SA_Wing];

type
  SAWeapon = record
    SA : SAType;
    Power : Extended;
    Tag : Extended;
  end;

  WeaponType = (NonW,Dagger,Sword,Fist,DualSword,BowFast,BowSlow,Blunt1,Blunt2,Sword2,Polearm,Book);

  Equip = (Robe,Light,Heavy,Non,RFull,HFull,LFull);

  Sets = (None,Drac,Arcana,Imperial,DC_Heavy,DC_Heavy_WS,DC_Light,DC_Robe,Maj_Heavy,Maj_Light,Maj_Rob,Night_Light,
          Night_Heavy,Night_Heavy_WS,Night_Robe,Tal_Heavy,Tal_Light,Tal_Robe,Ava_Heavy,Ava_Heavy_WS,Ava_Light,Ava_robe,
          Zub_Heavy,Zub_Light,Zub_Rob,BW_Heavy,BW_Light,BW_Robe,Doom_Heavy,Doom_Heavy_WS,Doom_Light,Doom_Robe,
          Mith_Light,Chain,Chain_WS,Karmian,Plated,Composite,Composite_WS,Demon,Theca,Drake,FullPlate,
          FullPlate_WS,Divine,Mith_Heavy,Mith_Heavy_WS,Reinforced,Knowledge,Manticore,Brigantine,
          Brigantine_WS,Mith_Robe,Wooden,Devotion);

  TForm1 = class(TForm)
    GroupBox2: TGroupBox;
    Label9: TLabel;
    Label10: TLabel;
    Label11: TLabel;
    GroupBox5: TGroupBox;
    ComboBox2: TComboBox;
    Label12: TLabel;
    Label13: TLabel;
    Label14: TLabel;
    TabbedNotebook1: TTabbedNotebook;
    GroupBox10: TGroupBox;
    Label15: TLabel;
    Label16: TLabel;
    Label17: TLabel;
    Label18: TLabel;
    Label19: TLabel;
    Label20: TLabel;
    Label21: TLabel;
    Label22: TLabel;
    Label23: TLabel;
    Label24: TLabel;
    Label25: TLabel;
    Label26: TLabel;
    Label27: TLabel;
    Label28: TLabel;
    Label29: TLabel;
    Label30: TLabel;
    Label31: TLabel;
    Label32: TLabel;
    Label33: TLabel;
    IsAcumen: TCheckBox;
    AcumenLvl: TComboBox;
    IsBlessTB: TCheckBox;
    BlessTBLvl: TComboBox;
    IsVitality: TCheckBox;
    IsBlessTS: TCheckBox;
    BlessTSLvl: TComboBox;
    IsMight: TCheckBox;
    MightLvl: TComboBox;
    IsWarrior: TCheckBox;
    IsGrMight: TCheckBox;
    GrMightLvl: TComboBox;
    IsEmpower: TCheckBox;
    EmpowerLvl: TComboBox;
    IsMystic: TCheckBox;
    IsShield: TCheckBox;
    ShieldLvl: TComboBox;
    IsEarth: TCheckBox;
    IsGrShield: TCheckBox;
    GrShieldLvl: TComboBox;
    IsBarrier: TCheckBox;
    BarrierLvl: TComboBox;
    IsWarding: TCheckBox;
    IsGuidance: TCheckBox;
    GuidanceLvl: TComboBox;
    IsIspiration: TCheckBox;
    IsAgility: TCheckBox;
    AgilityLvl: TComboBox;
    IsWater: TCheckBox;
    IsFocus: TCheckBox;
    FocusLvl: TComboBox;
    IsHunter: TCheckBox;
    IsWindWalk: TCheckBox;
    WindWalkLvl: TComboBox;
    IsWind: TCheckBox;
    IsShadow: TCheckBox;
    IsHaste: TCheckBox;
    HasteLvl: TComboBox;
    IsFury: TCheckBox;
    IsConcentration: TCheckBox;
    IsWhisper: TCheckBox;
    WhisperLvl: TComboBox;
    IsFire: TCheckBox;
    IsVamp: TCheckBox;
    VampLvl: TComboBox;
    IsVampire: TCheckBox;
    IsBShield: TCheckBox;
    BShieldLvl: TComboBox;
    IsAdvBlock: TCheckBox;
    AdvBlockLvl: TComboBox;
    IsRegen: TCheckBox;
    RegenLvl: TComboBox;
    IsLife: TCheckBox;
    IsMedit: TCheckBox;
    IsSeraph: TCheckBox;
    IsSkin: TCheckBox;
    SkinLvl: TComboBox;
    IsVeng: TCheckBox;
    IsBers: TCheckBox;
    BersLvl: TComboBox;
    ProphecyLvl: TComboBox;
    IsProphecy: TCheckBox;
    IsBQueen: TCheckBox;
    BQueenLvl: TComboBox;
    GroupBox6: TGroupBox;
    SeraphLvl: TComboBox;
    WeaponEn: TGroupBox;
    Label34: TLabel;
    ComboBox3: TComboBox;
    ComboBox6: TComboBox;
    ComboBox7: TComboBox;
    ComboBox8: TComboBox;
    Label35: TLabel;
    ComboBox9: TComboBox;
    Label36: TLabel;
    ComboBox10: TComboBox;
    ComboBox11: TComboBox;
    ComboBox12: TComboBox;
    Label37: TLabel;
    ComboBox13: TComboBox;
    ComboBox14: TComboBox;
    ComboBox15: TComboBox;
    Label38: TLabel;
    ComboBox16: TComboBox;
    ComboBox17: TComboBox;
    ComboBox18: TComboBox;
    Label39: TLabel;
    ComboBox19: TComboBox;
    ComboBox20: TComboBox;
    ComboBox21: TComboBox;
    Label40: TLabel;
    ComboBox22: TComboBox;
    ComboBox23: TComboBox;
    ComboBox24: TComboBox;
    Label41: TLabel;
    ComboBox25: TComboBox;
    ComboBox26: TComboBox;
    ComboBox27: TComboBox;
    Label42: TLabel;
    ComboBox28: TComboBox;
    Label43: TLabel;
    ComboBox29: TComboBox;
    ComboBox30: TComboBox;
    ComboBox31: TComboBox;
    Label44: TLabel;
    GroupBox3: TGroupBox;
    Label45: TLabel;
    Label46: TLabel;
    Label47: TLabel;
    Label48: TLabel;
    Label49: TLabel;
    Label50: TLabel;
    Label51: TLabel;
    Label52: TLabel;
    Label53: TLabel;
    Label54: TLabel;
    Label55: TLabel;
    ComboBox32: TComboBox;
    ComboBox33: TComboBox;
    ComboBox34: TComboBox;
    ComboBox35: TComboBox;
    ComboBox36: TComboBox;
    ComboBox37: TComboBox;
    ComboBox38: TComboBox;
    ComboBox39: TComboBox;
    ComboBox40: TComboBox;
    ComboBox41: TComboBox;
    ComboBox42: TComboBox;
    ComboBox43: TComboBox;
    ComboBox44: TComboBox;
    ComboBox45: TComboBox;
    ComboBox46: TComboBox;
    ComboBox47: TComboBox;
    ComboBox48: TComboBox;
    ComboBox49: TComboBox;
    ComboBox50: TComboBox;
    ComboBox51: TComboBox;
    ComboBox52: TComboBox;
    ComboBox53: TComboBox;
    ComboBox54: TComboBox;
    ComboBox55: TComboBox;
    ComboBox56: TComboBox;
    ComboBox57: TComboBox;
    ComboBox58: TComboBox;
    GroupBox4: TGroupBox;
    Label56: TLabel;
    Label57: TLabel;
    Label58: TLabel;
    Label59: TLabel;
    Label60: TLabel;
    Label61: TLabel;
    Label62: TLabel;
    Label63: TLabel;
    Label64: TLabel;
    Label65: TLabel;
    Label66: TLabel;
    ComboBox59: TComboBox;
    ComboBox60: TComboBox;
    ComboBox61: TComboBox;
    ComboBox62: TComboBox;
    ComboBox63: TComboBox;
    ComboBox64: TComboBox;
    ComboBox65: TComboBox;
    ComboBox66: TComboBox;
    ComboBox67: TComboBox;
    ComboBox68: TComboBox;
    ComboBox69: TComboBox;
    ComboBox70: TComboBox;
    ComboBox71: TComboBox;
    ComboBox72: TComboBox;
    ComboBox73: TComboBox;
    ComboBox74: TComboBox;
    ComboBox75: TComboBox;
    ComboBox76: TComboBox;
    ComboBox77: TComboBox;
    ComboBox78: TComboBox;
    ComboBox79: TComboBox;
    ComboBox80: TComboBox;
    ComboBox81: TComboBox;
    ComboBox82: TComboBox;
    ComboBox83: TComboBox;
    ComboBox84: TComboBox;
    ComboBox85: TComboBox;
    ComboBox86: TComboBox;
    ComboBox87: TComboBox;
    ComboBox88: TComboBox;
    Label67: TLabel;
    ComboBox89: TComboBox;
    ComboBox90: TComboBox;
    ComboBox91: TComboBox;
    Label68: TLabel;
    ComboBox92: TComboBox;
    ComboBox93: TComboBox;
    ComboBox94: TComboBox;
    ComboBox95: TComboBox;
    ComboBox96: TComboBox;
    ComboBox97: TComboBox;
    Label69: TLabel;
    Label70: TLabel;
    ComboBox98: TComboBox;
    ComboBox99: TComboBox;
    Label71: TLabel;
    ComboBox100: TComboBox;
    ComboBox4: TComboBox;
    Label72: TLabel;
    ComboBox5: TComboBox;
    ComboBox101: TComboBox;
    Label73: TLabel;
    ComboBox102: TComboBox;
    ComboBox103: TComboBox;
    Label74: TLabel;
    ComboBox104: TComboBox;
    ComboBox105: TComboBox;
    Label75: TLabel;
    ComboBox106: TComboBox;
    IsTatoo1: TCheckBox;
    IsTatoo2: TCheckBox;
    IsTatoo3: TCheckBox;
    Label1: TLabel;
    Label2: TLabel;
    Label3: TLabel;
    Label6: TLabel;
    Label5: TLabel;
    Label4: TLabel;
    Label76: TLabel;
    Label77: TLabel;
    Label78: TLabel;
    Label79: TLabel;
    Label80: TLabel;
    Label81: TLabel;
    Label82: TLabel;
    Label83: TLabel;
    Label84: TLabel;
    Label85: TLabel;
    Label86: TLabel;
    Label87: TLabel;
    GroupBox1: TGroupBox;
    Label7: TLabel;
    SpinEdit1: TSpinEdit;
    ComboBox1: TComboBox;
    Label8: TLabel;
    Label88: TLabel;
    Label89: TLabel;
    Label90: TLabel;
    Label91: TLabel;
    Label92: TLabel;
    Label93: TLabel;
    Label94: TLabel;
    Label95: TLabel;
    Label96: TLabel;
    GroupBox7: TGroupBox;
    GroupBox8: TGroupBox;
    WeaponMastery: TComboBox;
    IsWeaponMastery: TCheckBox;
    IsSwordMastery: TCheckBox;
    SwordMastery: TComboBox;
    DaggerMastery: TComboBox;
    PolearmMastery: TComboBox;
    IsDaggerMastery: TCheckBox;
    IsPolearmMastery: TCheckBox;
    IsBowMastery: TCheckBox;
    BowMastery: TComboBox;
    DualSwordMastery: TComboBox;
    TwoHandsMastery: TComboBox;
    IsTwoHandsMastery: TCheckBox;
    IsDualSwordMastery: TCheckBox;
    AutoSelect: TCheckBox;
    ArmorMastery: TComboBox;
    IsArmorMastery: TCheckBox;
    IsHvArmorMastery: TCheckBox;
    HvArmorMastery: TComboBox;
    GroupBox: TGroupBox;
    IsLgArmorMastery: TCheckBox;
    LgArmorMastery: TComboBox;
    IsRobeMastery: TCheckBox;
    RobeMastery: TComboBox;
    GroupBox9: TGroupBox;
    IsClearMind: TCheckBox;
    IsAcrobaticMove: TCheckBox;
    IsBoostMana: TCheckBox;
    IsFastSpellCasting: TCheckBox;
    IsFastHPRecovery: TCheckBox;
    IsFastManaRecovery: TCheckBox;
    IsQuickStep: TCheckBox;
    IsBoostEvasion: TCheckBox;
    IsShadowSence: TCheckBox;
    IsEsprit: TCheckBox;
    IsCriticalPower: TCheckBox;
    ClearMind: TComboBox;
    BoostMana: TComboBox;
    FastSpellCasting: TComboBox;
    FastHPRecovery: TComboBox;
    FastManaRecovery: TComboBox;
    QuickStep: TComboBox;
    BoostEvasion: TComboBox;
    ShadowSence: TComboBox;
    Esprit: TComboBox;
    CriticalPower: TComboBox;
    AcrobaticMove: TComboBox;
    IsBoostHP: TCheckBox;
    BoostHP: TComboBox;
    WeightLimit: TComboBox;
    IsWeightLimit: TCheckBox;
    VitalForce: TComboBox;
    IsVitalForce: TCheckBox;
    FinalFortress: TComboBox;
    IsFinalFortress: TCheckBox;
    ShieldMastery: TComboBox;
    IsShieldMastery: TCheckBox;
    FocusMind: TComboBox;
    IsFocusMind: TCheckBox;
    CriticalChance: TComboBox;
    IsCriticalChance: TCheckBox;
    FinalFrenzy: TComboBox;
    IsFinalFrenzy: TCheckBox;
    IsAntiMagic: TCheckBox;
    AntiMagic: TComboBox;
    IsMagicResistance: TCheckBox;
    MagicResistance: TComboBox;
    BoostAtkSpeed: TComboBox;
    IsBoostAtkSpeed: TCheckBox;
    IsQuiverOfHolding: TCheckBox;
    QuiverOfHolding: TComboBox;
    IsAgileMovement: TCheckBox;
    AgileMovement: TComboBox;
    IsBluntMastery: TCheckBox;
    BluntMastery: TComboBox;
    FistMastery: TComboBox;
    IsFistMastery: TCheckBox;
    Label97: TLabel;
    Label98: TLabel;
    Label99: TLabel;
    Label100: TLabel;
    Label101: TLabel;
    Label102: TLabel;
    Label103: TLabel;
    Label104: TLabel;
    Label105: TLabel;
    Label106: TLabel;
    Label107: TLabel;
    IsWeakness: TCheckBox;
    WeaknessLvl: TComboBox;
    CheckBox1: TCheckBox;
    ComboBox107: TComboBox;
    IsScourge: TCheckBox;
    ScourgeLvl: TComboBox;
    IsJudgment: TCheckBox;
    JudgmentLvl: TComboBox;
    IsDisruption: TCheckBox;
    DisruptionLvl: TComboBox;
    IsHex: TCheckBox;
    ComboBox111: TComboBox;
    IsChaos: TCheckBox;
    ChaosLvl: TComboBox;
    IsTribunal: TCheckBox;
    TribunalLvl: TComboBox;
    IsWindShakle: TCheckBox;
    WindShakleLvl: TComboBox;
    IsGloom: TCheckBox;
    IsSlow: TCheckBox;
    SlowLvl: TComboBox;
    GloomLvl: TComboBox;
    BlockShieldLvl: TComboBox;
    IsBlockShield: TCheckBox;
    IsSandBomb: TCheckBox;
    SandBombLvl: TComboBox;
    IsBlockWW: TCheckBox;
    BlockWWLvl: TComboBox;
    Label108: TLabel;
    Label109: TLabel;
    Label110: TLabel;
    Label111: TLabel;
    Label112: TLabel;
    IsWildMagic: TCheckBox;
    WildMagicLvl: TComboBox;
    IsSiren: TCheckBox;
    Label113: TLabel;
    Label114: TLabel;
    GroupBox11: TGroupBox;
    Lifon: TCheckBox;
    ComboBox108: TComboBox;
    GroupBox12: TGroupBox;
    Label115: TLabel;
    Label116: TLabel;
    Label117: TLabel;
    Label118: TLabel;
    Label119: TLabel;
    Label120: TLabel;
    Label121: TLabel;
    Label122: TLabel;
    MovementMode: TComboBox;
    Label123: TLabel;
    Label124: TLabel;
    Label125: TLabel;
    Label126: TLabel;
    Label127: TLabel;
    Label128: TLabel;
    Label129: TLabel;
    Label130: TLabel;
    Label131: TLabel;
    Label132: TLabel;
    Label133: TLabel;
    Label134: TLabel;
    Label135: TLabel;
    Label137: TLabel;
    Label138: TLabel;
    Label140: TLabel;
    Label141: TLabel;
    IsBindingBlow: TCheckBox;
    BindingBlow: TComboBox;
    IsRapidShot: TCheckBox;
    RapidShot: TComboBox;
    SoulOfSaggitarius: TComboBox;
    IsSoulOfSaggitarius: TCheckBox;
    IsManaRegeneration: TCheckBox;
    ManaRegeneration: TComboBox;
    SpiritBarrier: TComboBox;
    IsUltEvasion: TCheckBox;
    IsSpiritBarrier: TCheckBox;
    UltEvasion: TComboBox;
    Hawkeye: TComboBox;
    IsHawkeye: TCheckBox;
    Dash: TComboBox;
    IsDash: TCheckBox;
    Snipe: TComboBox;
    IsSnipe: TCheckBox;
    FocusDagger: TComboBox;
    IsFocusDagger: TCheckBox;
    Invocation: TComboBox;
    IsInvocation: TCheckBox;
    DefenceAura: TComboBox;
    IsDefenceAura: TCheckBox;
    AttackAura: TComboBox;
    IsAttackAura: TCheckBox;
    UltDefense: TComboBox;
    IsUltDefense: TCheckBox;
    DeflectArrow: TComboBox;
    IsDeflectArrow: TCheckBox;
    IsAccuracy: TCheckBox;
    IsSilentMove: TCheckBox;
    IsArcaneWisdom: TCheckBox;
    Label136: TLabel;
    IsParryStance: TCheckBox;
    IsRiposteStance: TCheckBox;
    PolearmAccuracy: TComboBox;
    IsPolearmAccuracy: TCheckBox;
    Majesty: TComboBox;
    IsMajesty: TCheckBox;
    ShieldFortress: TComboBox;
    IsShieldFortress: TCheckBox;
    Rage: TComboBox;
    IsRage: TCheckBox;
    Frenzy: TComboBox;
    IsFrenzy: TCheckBox;
    Guts: TComboBox;
    IsGuts: TCheckBox;
    Zealot: TComboBox;
    IsZealot: TCheckBox;
    IsArcaneAgility: TCheckBox;
    WarCry: TComboBox;
    IsWarCry: TCheckBox;
    DuelistSpirit: TComboBox;
    IsDuelistSpirit: TCheckBox;
    IsArcanePower: TCheckBox;
    ViciousStance: TComboBox;
    IsViciousStance: TCheckBox;
    SoulCry: TComboBox;
    IsSoulCry: TCheckBox;
    SoulGuard: TComboBox;
    IsSoulGuard: TCheckBox;
    AngelicIcon: TComboBox;
    IsAngelicIcon: TCheckBox;
    IsAegisStance: TCheckBox;
    DeadEye: TComboBox;
    IsDeadEye: TCheckBox;
    GuardStance: TComboBox;
    IsGuardStance: TCheckBox;
    ReflectDamage: TComboBox;
    IsReflectDamage: TCheckBox;
    Totem: TComboBox;
    IsTotem: TCheckBox;
    IsFistFury: TCheckBox;
    FocusAttack: TComboBox;
    IsFocusAttack: TCheckBox;
    ThrillFight: TComboBox;
    IsThrillFight: TCheckBox;
    Label139: TLabel;
    Label142: TLabel;
    Label143: TLabel;
    Label144: TLabel;
    IsEvasionShot: TCheckBox;
    EvasionShot: TComboBox;
    IsSprint: TCheckBox;
    Sprint: TComboBox;
    IsRapidFire: TCheckBox;
    RapidFire: TComboBox;
    Label145: TLabel;
    Label146: TLabel;
    GroupBox13: TGroupBox;
    Aug1: TComboBox;
    Aug2: TComboBox;
    Aug3: TComboBox;
    Aug4: TComboBox;
    Label147: TLabel;
    Label148: TLabel;
    Label149: TLabel;
    Label150: TLabel;
    AugB1: TSpeedButton;
    AugB2: TSpeedButton;
    AugB3: TSpeedButton;
    AugB4: TSpeedButton;
    AugE1: TEdit;
    AugE2: TEdit;
    AugE3: TEdit;
    AugE4: TEdit;
    procedure ComboBox1Change(Sender: TObject);
    procedure ReDrawStats;
    procedure ReCalc;
    procedure SpinEdit1Change(Sender: TObject);
    procedure ComboBox3Change(Sender: TObject);
    procedure ComboBox6Change(Sender: TObject);
    procedure IsAcumenClick(Sender: TObject);
    procedure AcumenLvlChange(Sender: TObject);
    procedure ComboBox7Change(Sender: TObject);
    procedure ComboBox62Change(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure IsTatoo1Click(Sender: TObject);
    procedure IsTatoo2Click(Sender: TObject);
    procedure IsTatoo3Click(Sender: TObject);
    procedure CalcPAtk;
    procedure CalcCastSpeed;
    procedure CalcAtkSpeed;
    procedure CalcMAtk;
    procedure CalcSpeed;
    procedure CalcEvasion;
    procedure CalcCritical;
    procedure CalcAccuracy;
    procedure CalcPDef;
    procedure CalcMDef;
    procedure CalcHP;
    procedure CalcMP;
    procedure CalcCP;
    procedure CalcMagCrit;
    procedure CalcShieldDefRate;
    procedure CalcHits;
    procedure CalcHPRegen;
    procedure CalcMPRegen;
    procedure CalcCPRegen;
    procedure CalcMDPS;
    procedure CalcCritPAtk;
    procedure CalcPDPS;
    procedure CalcMiddlePAtk;
    procedure IsConcentrationClick(Sender: TObject);
    procedure IsBersClick(Sender: TObject);
    procedure BersLvlChange(Sender: TObject);
    procedure IsMysticClick(Sender: TObject);
    procedure IsEmpowerClick(Sender: TObject);
    procedure EmpowerLvlChange(Sender: TObject);
    procedure IsHasteClick(Sender: TObject);
    procedure HasteLvlChange(Sender: TObject);
    procedure IsFuryClick(Sender: TObject);
    procedure IsProphecyClick(Sender: TObject);
    procedure ProphecyLvlChange(Sender: TObject);
    procedure ComboBox59Change(Sender: TObject);
    procedure IsWindWalkClick(Sender: TObject);
    procedure WindWalkLvlChange(Sender: TObject);
    procedure IsWindClick(Sender: TObject);
    procedure IsShadowClick(Sender: TObject);
    procedure IsBQueenClick(Sender: TObject);
    procedure BQueenLvlChange(Sender: TObject);
    procedure IsFocusClick(Sender: TObject);
    procedure FocusLvlChange(Sender: TObject);
    procedure IsHunterClick(Sender: TObject);
    procedure IsGuidanceClick(Sender: TObject);
    procedure GuidanceLvlChange(Sender: TObject);
    procedure IsIspirationClick(Sender: TObject);
    procedure IsAgilityClick(Sender: TObject);
    procedure AgilityLvlChange(Sender: TObject);
    procedure IsWaterClick(Sender: TObject);
    procedure ComboBox65Change(Sender: TObject);
    procedure ComboBox68Change(Sender: TObject);
    procedure ComboBox71Change(Sender: TObject);
    procedure ComboBox74Change(Sender: TObject);
    procedure ComboBox77Change(Sender: TObject);
    procedure ComboBox80Change(Sender: TObject);
    procedure ComboBox84Change(Sender: TObject);
    procedure ComboBox87Change(Sender: TObject);
    procedure ComboBox90Change(Sender: TObject);
    procedure ComboBox94Change(Sender: TObject);
    procedure ComboBox95Change(Sender: TObject);
    procedure SBoots(Grade, Number : Integer);
    procedure SGloves(Grade, Number : Integer);
    procedure SBodyL(Grade, Number : Integer);
    procedure SBodyU(Grade, Number : Integer);
    procedure SHelmet(Grade, Number : Integer);
    procedure SShield(Grade, Number : Integer);
    procedure ComboBox63Change(Sender: TObject);
    procedure ComboBox66Change(Sender: TObject);
    procedure CheckSet;
    function SumPDef : Integer;
    procedure ComboBox69Change(Sender: TObject);
    procedure ComboBox72Change(Sender: TObject);
    procedure ComboBox75Change(Sender: TObject);
    procedure ComboBox78Change(Sender: TObject);
    procedure ComboBox81Change(Sender: TObject);
    function CShield(Grade, Number : Integer) : Boolean;
    function CHelmet(Grade, Number : Integer) : Boolean;
    function CBodyU(Grade, Number : Integer) : Boolean;
    function CBodyL(Grade, Number : Integer) : Boolean;
    function CGloves(Grade, Number : Integer) : Boolean;
    function CBoots(Grade, Number : Integer) : Boolean;
    procedure IsShieldClick(Sender: TObject);
    procedure ShieldLvlChange(Sender: TObject);
    procedure IsEarthClick(Sender: TObject);
    procedure IsGrShieldClick(Sender: TObject);
    procedure IsGrMightClick(Sender: TObject);
    procedure GrShieldLvlChange(Sender: TObject);
    procedure IsMightClick(Sender: TObject);
    procedure MightLvlChange(Sender: TObject);
    procedure IsWarriorClick(Sender: TObject);
    procedure GrMightLvlChange(Sender: TObject);
    procedure SetTatooType;
    procedure ComboBox2Change(Sender: TObject);
    procedure ComboBox4Change(Sender: TObject);
    procedure CalcTatooBonus;
    procedure ComboBox98Change(Sender: TObject);
    procedure ComboBox99Change(Sender: TObject);
    procedure ComboBox100Change(Sender: TObject);
    procedure ComboBox5Change(Sender: TObject);
    procedure ComboBox101Change(Sender: TObject);
    procedure ComboBox102Change(Sender: TObject);
    procedure ComboBox103Change(Sender: TObject);
    procedure ComboBox104Change(Sender: TObject);
    procedure Label12Click(Sender: TObject);
    procedure Label13Click(Sender: TObject);
    procedure Label14Click(Sender: TObject);
    procedure ComboBox106Change(Sender: TObject);
    procedure Jewelry;
    procedure ComboBox85Change(Sender: TObject);
    procedure ComboBox88Change(Sender: TObject);
    procedure ComboBox89Change(Sender: TObject);
    procedure ComboBox96Change(Sender: TObject);
    procedure ComboBox97Change(Sender: TObject);
    procedure IsBarrierClick(Sender: TObject);
    procedure BarrierLvlChange(Sender: TObject);
    procedure IsWardingClick(Sender: TObject);
    procedure ClearPassives;
    procedure SetPassives;
    procedure ShowWeaponMastery(Max : Integer);
    procedure ShowDaggerMastery(Max : Integer);
    procedure ShowSwordMastery(Max : Integer);
    procedure ShowPolearmMastery(Max : Integer);
    procedure ShowDualSwordMastery(Max : Integer);
    procedure ShowBowMastery(Max : Integer);
    procedure Show2HSwordMastery(Max : Integer);
    procedure ShowClearMind(Max : Integer);
    procedure ShowBoostMana(Max : Integer);
    procedure ShowFastSpellCasting(Max : Integer);
    procedure ShowFastHPRecovery(Max : Integer);
    procedure ShowFastManaRecovery(Max : Integer);
    procedure ShowQuickStep(Max : Integer);
    procedure ShowBoostEvasion(Max : Integer);
    procedure ShowShadowSense;
    procedure ShowEsprit(Max : Integer);
    procedure ShowCriticalPower(Max : Integer);
    procedure ShowAcrobaticMove(Max : Integer);
    procedure ShowCriticalChance(Max : Integer);
    procedure ShowWeightLimit(Max : Integer);
    procedure ShowVitalForce(Max : Integer);
    procedure ShowFinallFortress(Max : Integer);
    procedure ShowShieldMastery(Max : Integer);
    procedure ShowFocusMind(Max : Integer);
    procedure ShowAgileMovement(Max : Integer);
    procedure ShowBoostHP(Max : Integer);
    procedure ShowFinalFrenzy(Max : Integer);
    procedure ShowBoostAtkSpeed(Max : Integer);
    procedure ShowQuiverOfHolding(Max : Integer);
    procedure ShowArmorMastery(Max : Integer);
    procedure ShowHvArmorMastery(Max : Integer);
    procedure ShowLgArmorMastery(Max : Integer);
    procedure ShowRobeMastery(Max : Integer);
    procedure ShowAntiMagic(Max : Integer);
    procedure ShowMagicResistance(Max : Integer);
    procedure ShowBluntMastery(Max : Integer);
    procedure ShowFistMastery(Max : Integer);
    procedure ClearSelfBuffs;
    procedure ShowSelfBuffs;
    procedure SAttackAura(Max : Integer);
    procedure SSoulOfSagittarius;
    procedure SRage(Max : Integer);
    procedure SViciousStance(Max : Integer);
    procedure SSprint(Max : Integer);
    procedure SFrenzy(Max : Integer);
    procedure SWarCry(Max : Integer);
    procedure SSoulCry(Max : Integer);
    procedure SArcanePower;
    procedure SDefenceAura(Max : Integer);
    procedure SSoulGuard(Max : Integer);
    procedure SMajesty(Max : Integer);
    procedure SGuts(Max : Integer);
    procedure SGuardStance(Max : Integer);
    procedure SSpiritBarrier;
    procedure SHawkEye;
    procedure SUltEvasion(Max : Integer);
    procedure SAccuracy;
    procedure SRapidFire;
    procedure SPolearmAccuracy;
    procedure SEvasionShot;
    procedure SBindingBlow;
    procedure SDash(Max : Integer);
    procedure SSilentMove;
    procedure SRapidShot(Max : Integer);
    procedure SDuelistSpirit;
    procedure SThrillFight;
    procedure SFistFury;
    procedure SArcaneAgility;
    procedure SArcaneWisdom;
    procedure SShieldFortress;
    procedure SAegisStance;
    procedure SManaRegeneration;
    procedure SReflectDamage;
    procedure SDeflectArrow(Max : Integer);
    procedure SDeadEye;
    procedure SSnipe;
    procedure SInvocation;
    procedure STotem(Max : Integer);
    procedure SAngelicIcon;
    procedure SZealot;
    procedure SFocusDagger(Max : Integer);
    procedure SUltDefence(Max : Integer);
    procedure SFocusAttack;
    procedure SParryStance;
    procedure SRiposteStance;
    procedure SetPS(a : TCheckBox; b : TComboBox; c : array of Integer);
    procedure ChangePS(Sender : TObject);
    procedure IsWeaponMasteryClick(Sender: TObject);
    procedure IsSwordMasteryClick(Sender: TObject);
    procedure IsFistMasteryClick(Sender: TObject);
    procedure IsDaggerMasteryClick(Sender: TObject);
    procedure IsBluntMasteryClick(Sender: TObject);
    procedure IsPolearmMasteryClick(Sender: TObject);
    procedure IsBowMasteryClick(Sender: TObject);
    procedure IsTwoHandsMasteryClick(Sender: TObject);
    procedure IsDualSwordMasteryClick(Sender: TObject);
    procedure IsArmorMasteryClick(Sender: TObject);
    procedure IsRobeMasteryClick(Sender: TObject);
    procedure IsHvArmorMasteryClick(Sender: TObject);
    procedure IsAntiMagicClick(Sender: TObject);
    procedure IsLgArmorMasteryClick(Sender: TObject);
    procedure IsMagicResistanceClick(Sender: TObject);
    procedure IsClearMindClick(Sender: TObject);
    procedure IsBoostManaClick(Sender: TObject);
    procedure IsFastSpellCastingClick(Sender: TObject);
    procedure IsFastHPRecoveryClick(Sender: TObject);
    procedure IsFastManaRecoveryClick(Sender: TObject);
    procedure IsQuickStepClick(Sender: TObject);
    procedure IsBoostEvasionClick(Sender: TObject);
    procedure IsShadowSenceClick(Sender: TObject);
    procedure IsEspritClick(Sender: TObject);
    procedure IsCriticalPowerClick(Sender: TObject);
    procedure IsAcrobaticMoveClick(Sender: TObject);
    procedure IsCriticalChanceClick(Sender: TObject);
    procedure IsWeightLimitClick(Sender: TObject);
    procedure IsVitalForceClick(Sender: TObject);
    procedure IsFinalFortressClick(Sender: TObject);
    procedure IsShieldMasteryClick(Sender: TObject);
    procedure IsFocusMindClick(Sender: TObject);
    procedure IsAgileMovementClick(Sender: TObject);
    procedure IsBoostHPClick(Sender: TObject);
    procedure IsQuiverOfHoldingClick(Sender: TObject);
    procedure IsFinalFrenzyClick(Sender: TObject);
    procedure IsBoostAtkSpeedClick(Sender: TObject);
    procedure AutoSelectClick(Sender: TObject);
    procedure ShadowSenceChange(Sender: TObject);
    procedure IncMDef(Ench,Jewel : TComboBox);
    procedure ComboBox83Change(Sender: TObject);
    procedure ComboBox86Change(Sender: TObject);
    procedure ComboBox91Change(Sender: TObject);
    procedure ComboBox92Change(Sender: TObject);
    procedure ComboBox93Change(Sender: TObject);
    procedure IncPDef(Ench,Armor : TComboBox);
    procedure ComboBox67Change(Sender: TObject);
    procedure ComboBox70Change(Sender: TObject);
    procedure ComboBox73Change(Sender: TObject);
    procedure ComboBox76Change(Sender: TObject);
    procedure ComboBox79Change(Sender: TObject);
    procedure IsBlessTBClick(Sender: TObject);
    procedure IsVitalityClick(Sender: TObject);
    procedure IsBlessTSClick(Sender: TObject);
    procedure WildMagicLvlChange(Sender: TObject);
    procedure IsWildMagicClick(Sender: TObject);
    procedure IsSirenClick(Sender: TObject);
    procedure IsBShieldClick(Sender: TObject);
    procedure BShieldLvlChange(Sender: TObject);
    procedure IsWhisperClick(Sender: TObject);
    procedure WhisperLvlChange(Sender: TObject);
    procedure IsFireClick(Sender: TObject);
    procedure IsVampireClick(Sender: TObject);
    procedure VampLvlChange(Sender: TObject);
    procedure IsVampClick(Sender: TObject);
    procedure IsAdvBlockClick(Sender: TObject);
    procedure AdvBlockLvlChange(Sender: TObject);
    procedure SkinLvlChange(Sender: TObject);
    procedure IsSkinClick(Sender: TObject);
    procedure IsVengClick(Sender: TObject);
    procedure IsLifeClick(Sender: TObject);
    procedure IsMeditClick(Sender: TObject);
    procedure IsRegenClick(Sender: TObject);
    procedure RegenLvlChange(Sender: TObject);
    procedure IsSeraphClick(Sender: TObject);
    procedure MovementModeChange(Sender: TObject);
    procedure LifonClick(Sender: TObject);
    procedure ComboBox108Change(Sender: TObject);
    procedure SeraphLvlChange(Sender: TObject);
    procedure IsSoulOfSaggitariusClick(Sender: TObject);
    procedure SoulOfSaggitariusChange(Sender: TObject);
    procedure IsAttackAuraClick(Sender: TObject);
    procedure AttackAuraChange(Sender: TObject);
    procedure IsFrenzyClick(Sender: TObject);
    procedure FrenzyChange(Sender: TObject);
    procedure IsSoulCryClick(Sender: TObject);
    procedure SoulCryChange(Sender: TObject);
    procedure IsRageClick(Sender: TObject);
    procedure RageChange(Sender: TObject);
    procedure IsWarCryClick(Sender: TObject);
    procedure WarCryChange(Sender: TObject);
    procedure IsArcanePowerClick(Sender: TObject);
    procedure IsDefenceAuraClick(Sender: TObject);
    procedure DefenceAuraChange(Sender: TObject);
    procedure SoulGuardChange(Sender: TObject);
    procedure IsSoulGuardClick(Sender: TObject);
    procedure IsMajestyClick(Sender: TObject);
    procedure MajestyChange(Sender: TObject);
    procedure IsGutsClick(Sender: TObject);
    procedure IsGuardStanceClick(Sender: TObject);
    procedure GuardStanceChange(Sender: TObject);
    procedure IsSpiritBarrierClick(Sender: TObject);
    procedure SpiritBarrierChange(Sender: TObject);
    procedure IsHawkeyeClick(Sender: TObject);
    procedure HawkeyeChange(Sender: TObject);
    procedure IsAccuracyClick(Sender: TObject);
    procedure IsPolearmAccuracyClick(Sender: TObject);
    procedure IsUltEvasionClick(Sender: TObject);
    procedure UltEvasionChange(Sender: TObject);
    procedure IsEvasionShotClick(Sender: TObject);
    procedure IsBindingBlowClick(Sender: TObject);
    procedure IsDashClick(Sender: TObject);
    procedure DashChange(Sender: TObject);
    procedure IsSprintClick(Sender: TObject);
    procedure SprintChange(Sender: TObject);
    procedure IsSilentMoveClick(Sender: TObject);
    procedure IsRapidShotClick(Sender: TObject);
    procedure RapidShotChange(Sender: TObject);
    procedure IsDuelistSpiritClick(Sender: TObject);
    procedure DuelistSpiritChange(Sender: TObject);
    procedure IsThrillFightClick(Sender: TObject);
    procedure ThrillFightChange(Sender: TObject);
    procedure IsFistFuryClick(Sender: TObject);
    procedure IsArcaneAgilityClick(Sender: TObject);
    procedure IsViciousStanceClick(Sender: TObject);
    procedure ViciousStanceChange(Sender: TObject);
    procedure IsArcaneWisdomClick(Sender: TObject);
    procedure IsShieldFortressClick(Sender: TObject);
    procedure ShieldFortressChange(Sender: TObject);
    procedure IsAegisStanceClick(Sender: TObject);
    procedure IsManaRegenerationClick(Sender: TObject);
    procedure ManaRegenerationChange(Sender: TObject);
    procedure IsReflectDamageClick(Sender: TObject);
    procedure ReflectDamageChange(Sender: TObject);
    procedure IsDeflectArrowClick(Sender: TObject);
    procedure DeflectArrowChange(Sender: TObject);
    procedure IsDeadEyeClick(Sender: TObject);
    procedure DeadEyeChange(Sender: TObject);
    procedure IsRapidFireClick(Sender: TObject);
    procedure RapidFireChange(Sender: TObject);
    procedure IsAngelicIconClick(Sender: TObject);
    procedure AngelicIconChange(Sender: TObject);
    procedure IsZealotClick(Sender: TObject);
    procedure ZealotChange(Sender: TObject);
    procedure IsParryStanceClick(Sender: TObject);
    procedure IsRiposteStanceClick(Sender: TObject);
    procedure IsSnipeClick(Sender: TObject);
    procedure SnipeChange(Sender: TObject);
    procedure IsInvocationClick(Sender: TObject);
    procedure InvocationChange(Sender: TObject);
    procedure IsTotemClick(Sender: TObject);
    procedure TotemChange(Sender: TObject);
    procedure IsFocusDaggerClick(Sender: TObject);
    procedure FocusDaggerChange(Sender: TObject);
    procedure IsUltDefenseClick(Sender: TObject);
    procedure UltDefenseChange(Sender: TObject);
    procedure IsFocusAttackClick(Sender: TObject);
    procedure FocusAttackChange(Sender: TObject);
    procedure BlessTBLvlChange(Sender: TObject);
    procedure BlessTSLvlChange(Sender: TObject);
    procedure GutsChange(Sender: TObject);
    procedure AUG1Click(Sender: TObject);
    procedure Aug1Change(Sender: TObject);
    procedure AugB1Click(Sender: TObject);
    procedure AugE1Exit(Sender: TObject);
    procedure AugE1KeyPress(Sender: TObject; var Key: Char);
    procedure AugB2Click(Sender: TObject);
    procedure AugE2Exit(Sender: TObject);
    procedure AugE2KeyPress(Sender: TObject; var Key: Char);
    procedure Aug2Change(Sender: TObject);
    procedure Aug3Change(Sender: TObject);
    procedure Aug4Change(Sender: TObject);
    procedure AugB3Click(Sender: TObject);
    procedure AugB4Click(Sender: TObject);
    procedure AugE3Exit(Sender: TObject);
    procedure AugE4Exit(Sender: TObject);
    procedure AugE3KeyPress(Sender: TObject; var Key: Char);
    procedure AugE4KeyPress(Sender: TObject; var Key: Char);
    function CheckDigit(s : String; var f : Extended) : String;
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;
  STR,CON,DEX,MEN,INT,WIT : Integer;
  tSTR,tDEX,tCON,tINT,tWIT,tMEN : Integer;
  _Str,_Con,_Dex,_Men,_Wit,_Int : Extended;
  Lvl,WMA,WPA,dWMA,dWPA : Integer;
  IsSA : Boolean;
  WSA : SAWeapon;
  WeaponDuals : Boolean;
  MA,CS,PA,AtkS,Speed,Evasion,Critical,Accuracy,PDef,MDef,MaxHP,MaxCP,MaxMP,MagCrit,ShDefRate,HPS,HPRegen,MPRegen,CPRegen,MDPS,PDPS,CritPAtk,MiddlePAtk : Extended;
  Fighter,Mystic,Buffer,Summoner,OrcMystic,Gnom : Boolean;
  WType : WeaponType;
  BodyL,BodyU : Equip;
  CurS : Sets;
  P_H,P_B,P_BU,P_BL,P_G,P_S : Integer;
  OldDuals : Boolean;
  WeaponEnch : Integer;
  BaseS : Integer;
  Set_STR,Set_DEX,Set_CON,Set_INT,Set_WIT,Set_MEN,Aug_CON,Aug_STR,Aug_INT,Aug_MEN : Integer;
  Profa : Integer;
  Bonus_MP : Integer;
  SumMDEF,dMDef,dPDef : Integer;
  J_Valakas,J_Orfen,J_Antharas,J_Zaken,J_Core,J_AntQueen,J_Baium : Boolean;
  NotChangeAutoSelect : Boolean;
  AugCB : array [1..4] of TComboBox;
  Augs : array [1..4] of Extended;

implementation

uses Math;

{$R *.dfm}

procedure TForm1.ComboBox1Change(Sender: TObject);
begin
  NotChangeAutoSelect := AutoSelect.Checked;
  Fighter := False;
  Mystic := False;
  Buffer := False;
  Summoner := False;
  OrcMystic := False;
  Gnom := False;
  ClearSelfBuffs;
  ShowSelfBuffs;
  ClearPassives;
  if ComboBox1.ItemIndex = 0 then // abyss walker
    begin
      STR := 41;
      DEX := 34;
      CON := 32;
      INT := 25;
      WIT := 12;
      MEN := 26;
      Fighter := True;
      BaseS := 122;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowDaggerMastery(45);
      ShowBowMastery(15);
      ShowArmorMastery(5);
      ShowLgArmorMastery(47);
      ShowQuickStep(2);
      ShowBoostEvasion(3);
      ShowShadowSense;
      ShowEsprit(8);
      ShowCriticalPower(6);
      ShowAcrobaticMove(3);
    end;
  if ComboBox1.ItemIndex = 1 then // artisan
    begin
      STR := 39;
      DEX := 29;
      CON := 45;
      INT := 20;
      WIT := 10;
      MEN := 27;
      Fighter := True;
      Gnom := True;
      BaseS := 115;
      Profa := 1;
      ShowWeaponMastery(3);
      ShowBluntMastery(8);
      ShowPolearmMastery(8);
      ShowArmorMastery(5);
      ShowHvArmorMastery(13);
      ShowLgArmorMastery(13);
      ShowBoostHP(3);
      ShowWeightLimit(2);
      ShowFastHPRecovery(2);
      ShowVitalForce(2);
    end;
  if ComboBox1.ItemIndex = 2 then //  assassin
    begin
      STR := 41;
      DEX := 34;
      CON := 32;
      INT := 25;
      WIT := 12;
      MEN := 26;
      Fighter := True;
      BaseS := 122;
      Profa := 1;
      ShowWeaponMastery(3);
      ShowDaggerMastery(8);
      ShowBowMastery(15);
      ShowArmorMastery(5);
      ShowLgArmorMastery(10);
      ShowQuickStep(1);
      ShowBoostEvasion(1);
      ShowShadowSense;
      ShowEsprit(1);
      ShowCriticalPower(2);
      ShowAcrobaticMove(1);
    end;
  if ComboBox1.ItemIndex = 3 then //  bishop
    begin
      STR := 22;
      DEX := 21;
      CON := 27;
      INT := 41;
      WIT := 20;
      MEN := 39;
      Buffer := True;
      BaseS := 120;
      Profa := 2;
      ShowWeaponMastery(42);
      ShowArmorMastery(3);
      ShowLgArmorMastery(41);
      ShowRobeMastery(41);
      ShowAntiMagic(45);
      ShowBoostMana(8);
      ShowFastSpellCasting(3);
      ShowFastHPRecovery(6);
      ShowFastManaRecovery(7);
    end;
  if ComboBox1.ItemIndex = 4 then // bladedancer
    begin
      STR := 41;
      DEX := 34;
      CON := 32;
      INT := 25;
      WIT := 12;
      MEN := 26;
      Fighter := True;
      BaseS := 122;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowSwordMastery(8);
      ShowDualSwordMastery(37);
      ShowArmorMastery(5);
      ShowHvArmorMastery(15);
      ShowMagicResistance(51);
      ShowShieldMastery(2);
      ShowFocusMind(6);
      ShowShadowSense;
    end;
  if ComboBox1.ItemIndex = 5 then // bounty hunter
    begin
      STR := 39;
      DEX := 29;
      CON := 45;
      INT := 20;
      WIT := 10;
      MEN := 27;
      Fighter := True;
      Gnom := True;
      BaseS := 115;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowBluntMastery(45);
      ShowPolearmMastery(45);
      ShowArmorMastery(5);
      ShowHvArmorMastery(50);
      ShowLgArmorMastery(50);
      ShowBoostHP(10);
      ShowWeightLimit(3);
      ShowFastHPRecovery(8);
      ShowVitalForce(8);
    end;
  if ComboBox1.ItemIndex = 6 then // cleric
    begin
      STR := 22;
      DEX := 21;
      CON := 27;
      INT := 41;
      WIT := 20;
      MEN := 39;
      Mystic := True;
      BaseS := 120;
      Profa := 1;
      ShowWeaponMastery(9);
      ShowArmorMastery(3);
      ShowLgArmorMastery(8);
      ShowRobeMastery(8);
      ShowAntiMagic(12);
      ShowBoostMana(2);
      ShowFastSpellCasting(1);
      ShowFastHPRecovery(1);
      ShowFastManaRecovery(2);
    end;
  if ComboBox1.ItemIndex = 7 then // dark avenger
    begin
      STR := 40;
      DEX := 30;
      CON := 43;
      INT := 21;
      WIT := 11;
      MEN := 25;
      Fighter := True;
      BaseS := 115;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowSwordMastery(45);
      ShowArmorMastery(5);
      ShowHvArmorMastery(52);
      ShowMagicResistance(51);
      ShowFinallFortress(11);
      ShowShieldMastery(4);
      ShowFocusMind(6);
    end;
  if ComboBox1.ItemIndex = 8 then //     dark fighter
    begin
      STR := 41;
      DEX := 34;
      CON := 32;
      INT := 25;
      WIT := 12;
      MEN := 26;
      Fighter := True;
      BaseS := 122;
      Profa := 0;
      ShowWeaponMastery(3);
      ShowArmorMastery(5);
      ShowShadowSense;
    end;
  if ComboBox1.ItemIndex = 9 then // Dark Elven Mystic
    begin
      STR := 23;
      DEX := 23;
      CON := 24;
      INT := 44;
      WIT := 19;
      MEN := 37;
      Mystic := True;
      BaseS := 122;
      Profa := 0;
      ShowWeaponMastery(2);
      ShowArmorMastery(3);
      ShowAntiMagic(4);
    end;
  if ComboBox1.ItemIndex = 10 then // dark wizard
    begin
      STR := 23;
      DEX := 23;
      CON := 24;
      INT := 44;
      WIT := 19;
      MEN := 37;
      Mystic := True;
      BaseS := 122;
      Profa := 1;
      ShowWeaponMastery(9);
      ShowArmorMastery(3);
      ShowRobeMastery(8);
      ShowAntiMagic(12);
      ShowBoostMana(2);
      ShowFastSpellCasting(1);
      ShowFastHPRecovery(1);
      ShowFastManaRecovery(2);
    end;
  if ComboBox1.ItemIndex = 11 then //  destroyer
    begin
      STR := 40;
      DEX := 26;
      CON := 47;
      INT := 18;
      WIT := 12;
      MEN := 27;
      Fighter := True;
      Gnom := True;
      BaseS := 117;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowSwordMastery(45);
      ShowPolearmMastery(45);
      Show2HSwordMastery(20);
      ShowArmorMastery(5);
      ShowHvArmorMastery(50);
      ShowLgArmorMastery(50);
      ShowBoostHP(10);
      ShowFastHPRecovery(8);
      ShowVitalForce(8);
    end;
  if ComboBox1.ItemIndex = 12 then //    dwarven fighter
    begin
      STR := 39;
      DEX := 29;
      CON := 45;
      INT := 20;
      WIT := 10;
      MEN := 27;
      Fighter := True;
      Gnom := True;
      BaseS := 115;
      Profa := 0;
      ShowWeaponMastery(3);
      ShowArmorMastery(5);
      ShowWeightLimit(1);
    end;
  if ComboBox1.ItemIndex = 13 then //    es
    begin
      STR := 21;
      DEX := 24;
      CON := 25;
      INT := 37;
      WIT := 23;
      MEN := 40;
      Mystic := True;
      Summoner := True;
      BaseS := 122;
      Profa := 2;
      ShowWeaponMastery(42);
      ShowArmorMastery(3);
      ShowLgArmorMastery(33);
      ShowRobeMastery(41);
      ShowAntiMagic(45);
      ShowBoostMana(8);
      ShowFastSpellCasting(3);
      ShowFastHPRecovery(6);
      ShowFastManaRecovery(7);
    end;
  if ComboBox1.ItemIndex = 14 then //  ee
    begin
      STR := 21;
      DEX := 24;
      CON := 25;
      INT := 37;
      WIT := 23;
      MEN := 40;
      Buffer := True;
      BaseS := 122;
      Profa := 2;
      ShowWeaponMastery(42);
      ShowArmorMastery(3);
      ShowLgArmorMastery(41);
      ShowRobeMastery(41);
      ShowAntiMagic(45);
      ShowBoostMana(8);
      ShowFastSpellCasting(3);
      ShowFastHPRecovery(6);
      ShowFastManaRecovery(7);
    end;
  if ComboBox1.ItemIndex = 15 then //  elven fighter
    begin
      STR := 36;
      DEX := 35;
      CON := 36;
      INT := 23;
      WIT := 14;
      MEN := 26;
      Fighter := True;
      BaseS := 125;
      Profa := 0;
      ShowWeaponMastery(3);
      ShowArmorMastery(5);
    end;
  if ComboBox1.ItemIndex = 16 then //  elven knight
    begin
      STR := 36;
      DEX := 35;
      CON := 36;
      INT := 23;
      WIT := 14;
      MEN := 26;
      Fighter := True;
      BaseS := 125;
      Profa := 1;
      ShowWeaponMastery(3);
      ShowSwordMastery(8);
      ShowArmorMastery(5);
      ShowHvArmorMastery(15);
      ShowMagicResistance(14);
      ShowShieldMastery(2);
      ShowFocusMind(1);
    end;
  if ComboBox1.ItemIndex = 17 then //Elven Mystic
    begin
      STR := 21;
      DEX := 24;
      CON := 25;
      INT := 37;
      WIT := 23;
      MEN := 40;
      Mystic := True;
      BaseS := 122;
      Profa := 0;
      ShowWeaponMastery(2);
      ShowArmorMastery(3);
      ShowAntiMagic(4);
    end;
  if ComboBox1.ItemIndex = 18 then //  elven oracle
    begin
      STR := 21;
      DEX := 24;
      CON := 25;
      INT := 37;
      WIT := 23;
      MEN := 40;
      Mystic := True;
      BaseS := 122;
      Profa := 1;
      ShowWeaponMastery(9);
      ShowArmorMastery(3);
      ShowLgArmorMastery(8);
      ShowRobeMastery(8);
      ShowAntiMagic(12);
      ShowBoostMana(2);
      ShowFastSpellCasting(1);
      ShowFastHPRecovery(1);
      ShowFastManaRecovery(2);
    end;
  if ComboBox1.ItemIndex = 19 then //  elven scout
    begin
      STR := 36;
      DEX := 35;
      CON := 36;
      INT := 23;
      WIT := 14;
      MEN := 26;
      Fighter := True;
      BaseS := 125;
      Profa := 1;
      ShowWeaponMastery(3);
      ShowDaggerMastery(8);
      ShowBowMastery(15);
      ShowArmorMastery(5);
      ShowLgArmorMastery(10);
      ShowQuickStep(1);
      ShowBoostEvasion(1);
      ShowEsprit(1);
      ShowCriticalChance(1);
      ShowAcrobaticMove(1);
    end;
  if ComboBox1.ItemIndex = 20 then //    elven wizard
    begin
      STR := 21;
      DEX := 24;
      CON := 25;
      INT := 37;
      WIT := 23;
      MEN := 40;
      Mystic := True;
      BaseS := 122;
      Profa := 1;
      ShowWeaponMastery(9);
      ShowArmorMastery(3);
      ShowRobeMastery(8);
      ShowAntiMagic(12);
      ShowBoostMana(2);
      ShowFastSpellCasting(1);
      ShowFastHPRecovery(1);
      ShowFastManaRecovery(2);
    end;
  if ComboBox1.ItemIndex = 21 then //  gladiator
    begin
      STR := 40;
      DEX := 30;
      CON := 43;
      INT := 21;
      WIT := 11;
      MEN := 25;
      Fighter := True;
      Gnom := True;
      BaseS := 115;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowSwordMastery(45);
      ShowPolearmMastery(8);
      ShowDualSwordMastery(37);
      ShowArmorMastery(5);
      ShowHvArmorMastery(50);
      ShowLgArmorMastery(50);
      ShowBoostHP(3);
      ShowFinalFrenzy(14);
      ShowFastHPRecovery(8);
      ShowVitalForce(8);
    end;
  if ComboBox1.ItemIndex = 22 then // hawk
    begin
      STR := 40;
      DEX := 30;
      CON := 43;
      INT := 21;
      WIT := 11;
      MEN := 25;
      Fighter := True;
      BaseS := 115;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowDaggerMastery(8);
      ShowBowMastery(52);
      ShowArmorMastery(5);
      ShowLgArmorMastery(47);
      ShowQuickStep(2);
      ShowBoostEvasion(1);
      ShowCriticalChance(1);
      ShowBoostAtkSpeed(1);
      ShowEsprit(8);
      ShowVitalForce(8);
      ShowCriticalPower(2);
      ShowAcrobaticMove(3);
      ShowQuiverOfHolding(3);
    end;
  if ComboBox1.ItemIndex = 23 then //Human Fighter
    begin
      STR := 40;
      DEX := 30;
      CON := 43;
      INT := 21;
      WIT := 11;
      MEN := 25;
      Fighter := True;
      BaseS := 115;
      Profa := 0;
      ShowWeaponMastery(3);
      ShowArmorMastery(5);
    end;
  if ComboBox1.ItemIndex = 24 then // human knight
    begin
      STR := 40;
      DEX := 30;
      CON := 43;
      INT := 21;
      WIT := 11;
      MEN := 25;
      Fighter := True;
      BaseS := 115;
      Profa := 1;
      ShowWeaponMastery(3);
      ShowSwordMastery(8);
      ShowArmorMastery(5);
      ShowHvArmorMastery(15);
      ShowMagicResistance(14);
      ShowShieldMastery(2);
      ShowFocusMind(1);
    end;
  if ComboBox1.ItemIndex = 25 then //Human Mystic
    begin
      STR := 22;
      DEX := 21;
      CON := 27;
      INT := 41;
      WIT := 20;
      MEN := 39;
      Mystic := True;
      BaseS := 120;
      Profa := 0;
      ShowWeaponMastery(2);
      ShowArmorMastery(3);
      ShowAntiMagic(4);
    end;
  if ComboBox1.ItemIndex = 26 then // monk
    begin
      STR := 40;
      DEX := 26;
      CON := 47;
      INT := 18;
      WIT := 12;
      MEN := 27;
      Fighter := True;
      BaseS := 117;
      Profa := 1;
      ShowWeaponMastery(3);
      ShowFistMastery(8);
      ShowArmorMastery(5);
      ShowLgArmorMastery(10);
      ShowAgileMovement(1);
      ShowBoostAtkSpeed(1);
    end;
  if ComboBox1.ItemIndex = 27 then // necr
    begin
      STR := 22;
      DEX := 21;
      CON := 27;
      INT := 41;
      WIT := 20;
      MEN := 39;
      Mystic := True;
      BaseS := 120;
      Profa := 2;
      ShowWeaponMastery(42);
      ShowArmorMastery(3);
      ShowRobeMastery(41);
      ShowAntiMagic(45);
      ShowBoostMana(8);
      ShowFastSpellCasting(3);
      ShowFastHPRecovery(6);
      ShowFastManaRecovery(7);
    end;
  if ComboBox1.ItemIndex = 28 then //   orc fighter
    begin
      STR := 40;
      DEX := 26;
      CON := 47;
      INT := 18;
      WIT := 12;
      MEN := 27;
      Fighter := True;
      BaseS := 117;
      Profa := 0;
      ShowWeaponMastery(3);
      ShowArmorMastery(5);
    end;
  if ComboBox1.ItemIndex = 29 then //  orc mystic
    begin
      STR := 27;
      DEX := 24;
      CON := 31;
      INT := 31;
      WIT := 15;
      MEN := 42;
      Mystic := True;
      OrcMystic := True;
      BaseS := 121;
      Profa := 0;
      ShowWeaponMastery(2);
      ShowHvArmorMastery(2);
      ShowLgArmorMastery(4);
      ShowRobeMastery(4);
      ShowAntiMagic(4);
    end;
  if ComboBox1.ItemIndex = 30 then //  orc raider
    begin
      STR := 40;
      DEX := 26;
      CON := 47;
      INT := 18;
      WIT := 12;
      MEN := 27;
      Fighter := True;
      Gnom := True;
      BaseS := 117;
      Profa := 1;
      ShowWeaponMastery(3);
      ShowSwordMastery(8);
      ShowPolearmMastery(8);
      Show2HSwordMastery(5);
      ShowArmorMastery(5);
      ShowHvArmorMastery(13);
      ShowLgArmorMastery(13);
      ShowBoostHP(3);
      ShowFastHPRecovery(2);
      ShowVitalForce(2);
    end;
  if ComboBox1.ItemIndex = 31 then //   orc shaman
    begin
      STR := 27;
      DEX := 24;
      CON := 31;
      INT := 31;
      WIT := 15;
      MEN := 42;
      Mystic := True;
      OrcMystic := True;
      BaseS := 121;
      Profa := 1;
      ShowWeaponMastery(9);
      ShowHvArmorMastery(10);
      ShowLgArmorMastery(12);
      ShowRobeMastery(12);
      ShowAntiMagic(12);
      ShowBoostMana(2);
      ShowFastSpellCasting(1);
      ShowFastHPRecovery(1);
      ShowFastManaRecovery(2);
    end;
  if ComboBox1.ItemIndex = 32 then // overlord
    begin
      STR := 27;
      DEX := 24;
      CON := 31;
      INT := 31;
      WIT := 15;
      MEN := 42;
      Buffer := True;
      OrcMystic := True;
      BaseS := 121;
      Profa := 2;
      ShowWeaponMastery(42);
      ShowHvArmorMastery(43);
      ShowLgArmorMastery(45);
      ShowRobeMastery(45);
      ShowAntiMagic(45);
      ShowBoostHP(7);
      ShowBoostMana(8);
      ShowFastSpellCasting(3);
      ShowFastHPRecovery(6);
      ShowFastManaRecovery(7);
    end;
  if ComboBox1.ItemIndex = 33 then //   paladin
    begin
      STR := 40;
      DEX := 30;
      CON := 43;
      INT := 21;
      WIT := 11;
      MEN := 25;
      Fighter := True;
      BaseS := 115;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowSwordMastery(45);
      ShowArmorMastery(5);
      ShowHvArmorMastery(52);
      ShowMagicResistance(51);
      ShowFinallFortress(11);
      ShowShieldMastery(4);
      ShowFocusMind(6);
    end;
  if ComboBox1.ItemIndex = 34 then //  palus knight
    begin
      STR := 41;
      DEX := 34;
      CON := 32;
      INT := 25;
      WIT := 12;
      MEN := 26;
      Fighter := True;
      BaseS := 122;
      Profa := 1;
      ShowWeaponMastery(3);
      ShowSwordMastery(8);
      ShowArmorMastery(5);
      ShowHvArmorMastery(15);
      ShowMagicResistance(14);
      ShowShieldMastery(2);
      ShowFocusMind(1);
      ShowShadowSense;
    end;
  if ComboBox1.ItemIndex = 35 then //  phantom ranger
    begin
      STR := 41;
      DEX := 34;
      CON := 32;
      INT := 25;
      WIT := 12;
      MEN := 26;
      Fighter := True;
      BaseS := 122;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowDaggerMastery(8);
      ShowBowMastery(52);
      ShowArmorMastery(5);
      ShowLgArmorMastery(47);
      ShowQuickStep(2);
      ShowBoostEvasion(1);
      ShowShadowSense;
      ShowCriticalPower(2);
      ShowEsprit(8);
      ShowAcrobaticMove(3);
    end;
  if ComboBox1.ItemIndex = 36 then // phantom summoner
    begin
      STR := 23;
      DEX := 23;
      CON := 24;
      INT := 44;
      WIT := 19;
      MEN := 37;
      Mystic := True;
      Summoner := True;
      BaseS := 122;
      Profa := 2;
      ShowWeaponMastery(42);
      ShowArmorMastery(3);
      ShowLgArmorMastery(33);
      ShowRobeMastery(41);
      ShowAntiMagic(45);
      ShowBoostMana(8);
      ShowFastSpellCasting(3);
      ShowFastHPRecovery(6);
      ShowFastManaRecovery(7);
    end;
  if ComboBox1.ItemIndex = 37 then //  plainswalker
    begin
      STR := 36;
      DEX := 35;
      CON := 36;
      INT := 23;
      WIT := 14;
      MEN := 26;
      Fighter := True;
      BaseS := 125;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowDaggerMastery(45);
      ShowBowMastery(15);
      ShowArmorMastery(5);
      ShowLgArmorMastery(47);
      ShowQuickStep(2);
      ShowBoostEvasion(3);
      ShowCriticalChance(3);
      ShowEsprit(8);
      ShowAcrobaticMove(3);
    end;
  if ComboBox1.ItemIndex = 38 then //   prophet
    begin
      STR := 22;
      DEX := 21;
      CON := 27;
      INT := 41;
      WIT := 20;
      MEN := 39;
      Buffer := True;
      BaseS := 120;
      Profa := 2;
      ShowWeaponMastery(42);
      ShowArmorMastery(3);
      ShowHvArmorMastery(33);
      ShowLgArmorMastery(41);
      ShowRobeMastery(41);
      ShowAntiMagic(45);
      ShowBoostHP(7);
      ShowBoostMana(8);
      ShowFastSpellCasting(3);
      ShowFastHPRecovery(6);
      ShowFastManaRecovery(7);
    end;
  if ComboBox1.ItemIndex = 39 then //   rogue
    begin
      STR := 40;
      DEX := 30;
      CON := 43;
      INT := 21;
      WIT := 11;
      MEN := 25;
      Fighter := True;
      BaseS := 115;
      Profa := 1;
      ShowWeaponMastery(3);
      ShowDaggerMastery(8);
      ShowBowMastery(15);
      ShowArmorMastery(5);
      ShowLgArmorMastery(10);
      ShowQuickStep(1);
      ShowBoostEvasion(1);
      ShowCriticalChance(1);
      ShowBoostAtkSpeed(1);
      ShowEsprit(1);
      ShowVitalForce(2);
      ShowCriticalPower(2);
      ShowAcrobaticMove(1);
    end;
  if ComboBox1.ItemIndex = 40 then // scavenger
    begin
      STR := 39;
      DEX := 29;
      CON := 45;
      INT := 20;
      WIT := 10;
      MEN := 27;
      Fighter := True;
      Gnom := True;
      BaseS := 115;
      Profa := 1;
      ShowWeaponMastery(3);
      ShowBluntMastery(8);
      ShowPolearmMastery(8);
      ShowArmorMastery(5);
      ShowHvArmorMastery(13);
      ShowLgArmorMastery(13);
      ShowBoostHP(3);
      ShowWeightLimit(2);
      ShowFastHPRecovery(2);
      ShowVitalForce(2);
    end;
  if ComboBox1.ItemIndex = 41 then // se
    begin
      STR := 23;
      DEX := 23;
      CON := 24;
      INT := 44;
      WIT := 19;
      MEN := 37;
      Buffer := True;
      BaseS := 122;
      Profa := 2;
      ShowWeaponMastery(42);
      ShowArmorMastery(3);
      ShowLgArmorMastery(41);
      ShowRobeMastery(41);
      ShowAntiMagic(45);
      ShowBoostMana(8);
      ShowFastSpellCasting(3);
      ShowFastHPRecovery(6);
      ShowFastManaRecovery(7);
    end;
  if ComboBox1.ItemIndex = 42 then //   sk
    begin
      STR := 41;
      DEX := 34;
      CON := 32;
      INT := 25;
      WIT := 12;
      MEN := 26;
      Fighter := True;
      BaseS := 122;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowSwordMastery(45);
      ShowArmorMastery(5);
      ShowHvArmorMastery(52);
      ShowMagicResistance(51);
      ShowFinallFortress(11);
      ShowShieldMastery(4);
      ShowFocusMind(6);
      ShowShadowSense;
    end;
  if ComboBox1.ItemIndex = 43 then //   shillien oracle
    begin
      STR := 23;
      DEX := 23;
      CON := 24;
      INT := 44;
      WIT := 19;
      MEN := 37;
      Mystic := True;
      BaseS := 122;
      Profa := 1;
      ShowWeaponMastery(9);
      ShowArmorMastery(3);
      ShowLgArmorMastery(8);
      ShowRobeMastery(8);
      ShowAntiMagic(12);
      ShowBoostMana(2);
      ShowFastSpellCasting(1);
      ShowFastHPRecovery(1);
      ShowFastManaRecovery(2);
    end;
  if ComboBox1.ItemIndex = 44 then //  silver ranger
    begin
      STR := 36;
      DEX := 35;
      CON := 36;
      INT := 23;
      WIT := 14;
      MEN := 26;
      Fighter := True;
      BaseS := 125;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowDaggerMastery(8);
      ShowBowMastery(52);
      ShowArmorMastery(5);
      ShowLgArmorMastery(47);
      ShowQuickStep(2);
      ShowBoostEvasion(1);
      ShowCriticalChance(1);
      ShowEsprit(8);
      ShowAcrobaticMove(3);
    end;
  if ComboBox1.ItemIndex = 45 then //   sorcerer
    begin
      STR := 22;
      DEX := 21;
      CON := 27;
      INT := 41;
      WIT := 20;
      MEN := 39;
      Mystic := True;
      BaseS := 120;
      Profa := 2;
      ShowWeaponMastery(42);
      ShowArmorMastery(3);
      ShowRobeMastery(41);
      ShowAntiMagic(45);
      ShowClearMind(6);
      ShowBoostMana(8);
      ShowFastSpellCasting(3);
      ShowFastHPRecovery(6);
      ShowFastManaRecovery(7);
    end;
  if ComboBox1.ItemIndex = 46 then // spellhowler
    begin
      STR := 23;
      DEX := 23;
      CON := 24;
      INT := 44;
      WIT := 19;
      MEN := 37;
      Mystic := True;
      BaseS := 122;
      Profa := 2;
      ShowWeaponMastery(42);
      ShowArmorMastery(3);
      ShowRobeMastery(41);
      ShowAntiMagic(45);
      ShowClearMind(6);
      ShowBoostMana(8);
      ShowFastSpellCasting(3);
      ShowFastHPRecovery(6);
      ShowFastManaRecovery(7);
    end;
  if ComboBox1.ItemIndex = 47 then // spelsingir
    begin
      STR := 21;
      DEX := 24;
      CON := 25;
      INT := 37;
      WIT := 23;
      MEN := 40;
      Mystic := True;
      BaseS := 122;
      Profa := 2;
      ShowWeaponMastery(42);
      ShowArmorMastery(3);
      ShowRobeMastery(41);
      ShowAntiMagic(45);
      ShowClearMind(6);
      ShowBoostMana(8);
      ShowFastSpellCasting(3);
      ShowFastHPRecovery(6);
      ShowFastManaRecovery(7);
    end;
  if ComboBox1.ItemIndex = 48 then //  sws
    begin
      STR := 36;
      DEX := 35;
      CON := 36;
      INT := 23;
      WIT := 14;
      MEN := 26;
      Fighter := True;
      BaseS := 125;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowSwordMastery(45);
      ShowArmorMastery(5);
      ShowHvArmorMastery(15);
      ShowMagicResistance(51);
      ShowShieldMastery(2);
      ShowFocusMind(6);
    end;
  if ComboBox1.ItemIndex = 49 then //  temple knight
    begin
      STR := 36;
      DEX := 35;
      CON := 36;
      INT := 23;
      WIT := 14;
      MEN := 26;
      Fighter := True;
      BaseS := 125;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowSwordMastery(45);
      ShowArmorMastery(5);
      ShowHvArmorMastery(52);
      ShowMagicResistance(51);
      ShowFinallFortress(11);
      ShowShieldMastery(4);
      ShowFocusMind(6);
    end;
  if ComboBox1.ItemIndex = 50 then //   th
    begin
      STR := 40;
      DEX := 30;
      CON := 43;
      INT := 21;
      WIT := 11;
      MEN := 25;
      Fighter := True;
      BaseS := 115;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowDaggerMastery(45);
      ShowBowMastery(15);
      ShowArmorMastery(5);
      ShowLgArmorMastery(47);
      ShowQuickStep(2);
      ShowBoostEvasion(3);
      ShowCriticalChance(3);
      ShowBoostAtkSpeed(3);
      ShowEsprit(8);
      ShowVitalForce(8);
      ShowCriticalPower(6);
      ShowAcrobaticMove(3);
    end;
  if ComboBox1.ItemIndex = 51 then //  tyrant
    begin
      STR := 40;
      DEX := 26;
      CON := 47;
      INT := 18;
      WIT := 12;
      MEN := 27;
      Fighter := True;
      BaseS := 117;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowFistMastery(45);
      ShowArmorMastery(5);
      ShowLgArmorMastery(47);
      ShowAgileMovement(2);
      ShowBoostAtkSpeed(3);
    end;
  if ComboBox1.ItemIndex = 52 then //  warc
    begin
      STR := 27;
      DEX := 24;
      CON := 31;
      INT := 31;
      WIT := 15;
      MEN := 42;
      Buffer := True;
      OrcMystic := True;
      BaseS := 121;
      Profa := 2;
      ShowWeaponMastery(42);
      ShowHvArmorMastery(43);
      ShowLgArmorMastery(45);
      ShowRobeMastery(45);
      ShowAntiMagic(45);
      ShowBoostHP(7);
      ShowBoostMana(8);
      ShowFastSpellCasting(3);
      ShowFastHPRecovery(6);
      ShowFastManaRecovery(7);
    end;
  if ComboBox1.ItemIndex = 53 then //   warlock
    begin
      STR := 22;
      DEX := 21;
      CON := 27;
      INT := 41;
      WIT := 20;
      MEN := 39;
      Mystic := True;
      Summoner := True;
      BaseS := 120;
      Profa := 2;
      ShowWeaponMastery(42);
      ShowArmorMastery(3);
      ShowLgArmorMastery(33);
      ShowRobeMastery(41);
      ShowAntiMagic(45);
      ShowBoostMana(8);
      ShowFastSpellCasting(3);
      ShowFastHPRecovery(6);
      ShowFastManaRecovery(7);
    end;
  if ComboBox1.ItemIndex = 54 then // warlord
    begin
      STR := 40;
      DEX := 30;
      CON := 43;
      INT := 21;
      WIT := 11;
      MEN := 25;
      Fighter := True;
      Gnom := True;
      BaseS := 115;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowSwordMastery(8);
      ShowPolearmMastery(45);
      ShowArmorMastery(5);
      ShowHvArmorMastery(50);
      ShowLgArmorMastery(50);
      ShowBoostHP(10);
      ShowFinalFrenzy(14);
      ShowFastHPRecovery(8);
      ShowVitalForce(8);
    end;
  if ComboBox1.ItemIndex = 55 then // warrior
    begin
      STR := 40;
      DEX := 30;
      CON := 43;
      INT := 21;
      WIT := 11;
      MEN := 25;
      Fighter := True;
      Gnom := True;
      BaseS := 115;
      Profa := 1;
      ShowWeaponMastery(3);
      ShowSwordMastery(8);
      ShowPolearmMastery(8);
      ShowArmorMastery(5);
      ShowHvArmorMastery(13);
      ShowLgArmorMastery(13);
      ShowBoostHP(3);
      ShowFastHPRecovery(2);
      ShowVitalForce(2);
    end;
  if ComboBox1.ItemIndex = 56 then //  warsmith
    begin
      STR := 39;
      DEX := 29;
      CON := 45;
      INT := 20;
      WIT := 10;
      MEN := 27;
      Fighter := True;
      Gnom := True;
      BaseS := 115;
      Profa := 2;
      ShowWeaponMastery(3);
      ShowBluntMastery(45);
      ShowPolearmMastery(45);
      ShowArmorMastery(5);
      ShowHvArmorMastery(50);
      ShowLgArmorMastery(50);
      ShowBoostHP(10);
      ShowWeightLimit(3);
      ShowFastHPRecovery(8);
      ShowVitalForce(8);
    end;
  if ComboBox1.ItemIndex = 57 then //   wizard
    begin
      STR := 22;
      DEX := 21;
      CON := 27;
      INT := 41;
      WIT := 20;
      MEN := 39;
      Mystic := True;
      BaseS := 120;
      Profa := 1;
      ShowWeaponMastery(9);
      ShowArmorMastery(3);
      ShowRobeMastery(8);
      ShowAntiMagic(12);
      ShowBoostMana(2);
      ShowFastSpellCasting(1);
      ShowFastHPRecovery(1);
      ShowFastManaRecovery(2);
    end;
  SetPassives;  
  SetTatooType;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ReDrawStats;
begin
  Label1.Caption := 'STR   ' + IntToStr(STR + Set_STR + tSTR + Aug_STR);
  Label2.Caption := 'DEX   ' + IntToStr(DEX + Set_DEX + tDEX);
  Label3.Caption := 'CON   ' + IntToStr(CON + Set_CON + tCON + Aug_CON);
  Label4.Caption := 'INT   ' + IntToStr(INT + Set_INT + tINT + Aug_INT);
  Label5.Caption := 'WIT   ' + IntToStr(WIT + Set_WIT + tWIT);
  Label6.Caption := 'MEN   ' + IntToStr(MEN + Set_MEN + tMEN + Aug_MEN);
  Label87.Caption := IntToStr(Trunc(CS));
  Label87.Left := 232 - Label87.Width;
  Label88.Caption := IntToStr(Trunc(PA));
  Label88.Left := 104 - Label88.Width;
  Label89.Caption := IntToStr(Trunc(AtkS));
  Label89.Left := 104 - Label89.Width;
  Label90.Caption := IntToStr(Trunc(MA));
  Label90.Left := 232 - Label90.Width;
  label91.Caption := IntToStr(Trunc(Speed));
  Label91.Left := 232 - Label91.Width;
  Label92.Caption := IntToStr(Trunc(Evasion));
  Label92.Left := 232 - Label92.Width;
  Label93.Caption := IntToStr(Trunc(Critical));
  Label93.Left := 104 - Label93.Width;
  Label94.Caption := IntToStr(Trunc(Accuracy));
  Label94.Left := 104 - Label94.Width;
  Label95.Caption := IntToStr(Trunc(PDef));
  Label95.Left := 104 - Label95.Width;
  Label96.Caption := IntToStr(Trunc(MDef));
  Label96.Left := 232 - Label96.Width;
  Label108.Caption := IntToStr(Trunc(MaxHP));
  Label108.Left := 104 - Label108.Width;
  Label109.Caption := IntToStr(Trunc(MaxMP));
  Label109.Left := 104 - Label109.Width;
  Label110.Caption := IntToStr(Trunc(MaxCP));
  Label110.Left := 232 - Label110.Width;
  if MagCrit < 100 then
    if Round(Frac(MagCrit)*100) < 10 then
      Label112.Caption := IntToStr(Trunc(MagCrit)) + '.0' + IntToStr(Round(Frac(MagCrit)*100)) + '%'
    else
      Label112.Caption := IntToStr(Trunc(MagCrit)) + '.' + IntToStr(Round(Frac(MagCrit)*100)) + '%'
  else
    label112.Caption := '100%';
  Label112.Left := 104 - Label112.Width;
  Label114.Caption := IntToStr(Trunc(ShDefRate)) + '.' + IntToStr(Round(Frac(ShDefRate)*10)) + '%';
  Label114.Left := 232 - Label114.Width;
  Label122.Caption := IntToStr(Trunc(HPS)) + '.' + IntToStr(Round(Frac(HPS)*10));
  Label122.Left := 162 - Label122.Width;
  Label118.Caption := IntToStr(Trunc(HPRegen)) + '.' + IntToStr(Trunc(Frac(HPRegen)*10));
  Label118.Left := 162 - Label118.Width;
  Label119.Caption := IntToStr(Trunc(MPRegen)) + '.' + IntToStr(Trunc(Frac(MPRegen)*10));
  Label119.Left := 162 - Label119.Width;
  Label120.Caption := IntToStr(Trunc(CPRegen)) + '.' + IntToStr(Trunc(Frac(CPRegen)*10));
  Label120.Left := 162 - Label120.Width;
  Label146.Caption := IntToStr(Round(MiddlePAtk));
  Label146.Left := 162 - Label146.Width;
  Label143.Caption := IntToStr(Round(MDPS/100));
  Label143.Left := 104 - Label143.Width;
  Label144.Caption := IntToStr(Round(PDPS/500));
  Label144.Left := 232 - Label144.Width;
end;

procedure TForm1.ReCalc;
var
  i : Integer;
begin
  Aug_CON := 0;
  Aug_STR := 0;
  Aug_INT := 0;
  Aug_MEN := 0;
  for i := 1 to 4 do
    if AugCB[i].ItemIndex = 2 then
      Inc(Aug_CON,Round(Augs[i]));
  CalcTatooBonus;
  CalcCastSpeed;
  CalcPAtk;
  CalcAtkSpeed;
  CalcMAtk;
  CalcSpeed;
  CalcEvasion;
  CalcCritical;
  CalcAccuracy;
  CalcPDef;
  CalcMDef;
  CalcHP;
  CalcMP;
  CalcCP;
  CalcMagCrit;
  CalcShieldDefRate;
  CalcHits;
  CalcHPRegen;
  CalcMpRegen;
  CalcCPRegen;
  CalcMDPS;
  CalcCritPAtk;
  CalcPDPS;
  CalcMiddlePAtk;
end;

procedure TForm1.SpinEdit1Change(Sender: TObject);
begin
  if SpinEdit1.Text <> '' then
    Lvl := SpinEdit1.Value;
  SetPassives;  
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ComboBox3Change(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ComboBox6Change(Sender: TObject);
begin
  case ComboBox60.ItemIndex of
    0 : begin
          ComboBox59.Visible := False;
          ComboBox61.Items.Clear;
          ComboBox61.Items.Add('Unequipped');
          ComboBox61.Items.Add('Infinity Axe');
          ComboBox61.Items.Add('Infinity Blade');
          ComboBox61.Items.Add('Infinity Bow');
          ComboBox61.Items.Add('Infinity Cleaver');
          ComboBox61.Items.Add('Infinity Crusher');
          ComboBox61.Items.Add('Infinity Fang');
          ComboBox61.Items.Add('Infinity Rod');
          ComboBox61.Items.Add('Infinity Scepter');
          ComboBox61.Items.Add('Infinity Spear');
          ComboBox61.Items.Add('Infinity Stinger');
          ComboBox61.Items.Add('Infinity Wing');
          ComboBox61.ItemIndex := 0;
          ComboBox62.Visible := False;
        end;
    1 : begin
          ComboBox59.Visible := True;
          ComboBox61.Items.Clear;
          ComboBox61.Items.Add('Unequipped');
          ComboBox61.Items.Add('Angel Slayer');
          ComboBox61.Items.Add('Arcana Mace');
          ComboBox61.Items.Add('Basalt Battlehammer');
          ComboBox61.Items.Add('Demon Splinter');
          ComboBox61.Items.Add('Draconic Bow');
          ComboBox61.Items.Add('Dragon Hunter Axe');
          ComboBox61.Items.Add('Forgotten Blade');
          ComboBox61.Items.Add('Heavens Divider');
          ComboBox61.Items.Add('Imperial Staff');
          ComboBox61.Items.Add('Saint Spear');
          ComboBox61.Items.Add('Tallum Blade*Dark Legion''s Edge');
          ComboBox61.ItemIndex := 0;
          ComboBox62.Visible := False;
        end;
    2 : begin
          ComboBox59.Visible := True;
          ComboBox61.Items.Clear;
          ComboBox61.Items.Add('Unquipped');
          ComboBox61.Items.Add('Blood Tornado');
          ComboBox61.Items.Add('Bloody Orchid');
          ComboBox61.Items.Add('Branch of the Mother Tree');
          ComboBox61.Items.Add('Carnage Bow');
          ComboBox61.Items.Add('Damascus*Damascus');
          ComboBox61.Items.Add('Dark Legion''s Edge');
          ComboBox61.Items.Add('Dasparion''s Staff');
          ComboBox61.Items.Add('Dragon Grinder');
          ComboBox61.Items.Add('Dragon Slayer');
          ComboBox61.Items.Add('Elemental Sword');
          ComboBox61.Items.Add('Elysian Axe');
          ComboBox61.Items.Add('Infernal Master');
          ComboBox61.Items.Add('Halberd');
          ComboBox61.Items.Add('Keshanberk*Damascus');
          ComboBox61.Items.Add('Keshanberk*Keshanberk');
          ComboBox61.Items.Add('Meteor Shower');
          ComboBox61.Items.Add('Soul Bow');
          ComboBox61.Items.Add('Soul Separator');
          ComboBox61.Items.Add('Sword of Miracle');
          ComboBox61.Items.Add('Tallum Blade');
          ComboBox61.Items.Add('Tallum Glaive');
          ComboBox61.ItemIndex := 0;
          ComboBox62.Visible := False;
        end;
    3 : begin
          ComboBox59.Visible := True;
          ComboBox61.Items.Clear;
          ComboBox61.Items.Add('Unequipped');
          ComboBox61.Items.Add('Art of Battle Axe');
          ComboBox61.Items.Add('Arthro Nail');
          ComboBox61.Items.Add('Bellion Cestus');
          ComboBox61.Items.Add('Bow of Peril');
          ComboBox61.Items.Add('Dark Elven Long Bow');
          ComboBox61.Items.Add('Deadman''s Glory');
          ComboBox61.Items.Add('Demon''s Sword');
          ComboBox61.Items.Add('Great Axe');
          ComboBox61.Items.Add('Great Sword');
          ComboBox61.Items.Add('Heavy War Axe');
          ComboBox61.Items.Add('Hell Knife');
          ComboBox61.Items.Add('Keshanberk');
          ComboBox61.Items.Add('Kris');
          ComboBox61.Items.Add('Lance');
          ComboBox61.Items.Add('Sprite''s Staff');
          ComboBox61.Items.Add('Staff of Evil Spirit');
          ComboBox61.Items.Add('Sword of Damascus');
          ComboBox61.Items.Add('Sword of Valhalla');
          ComboBox61.Items.Add('236/99 Samurai Long Sword*Samurai Long Sword');
          ComboBox61.Items.Add('228/97 Caliburs*Samurai Long Sword');
          ComboBox61.Items.Add('228/97 Sword of Delusion*Samurai Long Sword');
          ComboBox61.Items.Add('228/97 Sword of Limit*Samurai Long Sword');
          ComboBox61.Items.Add('228/97 Sword of Nightmare*Samurai Long Sword');
          ComboBox61.Items.Add('228/97 Tsurugi*Samurai Long Sword');
          ComboBox61.Items.Add('220/94 Katana*Samurai Long Sword');
          ComboBox61.Items.Add('220/94 Raid Sword*Samurai Long Sword');
          ComboBox61.Items.Add('220/94 Shamsir*Samurai Long Sword');
          ComboBox61.Items.Add('220/94 Spirit Sword*Samurai Long Sword');
          ComboBox61.Items.Add('213/91 Caliburs*Caliburs');
          ComboBox61.Items.Add('213/91 Caliburs*Sword of Delusion');
          ComboBox61.Items.Add('213/91 Caliburs*Sword of Limit');
          ComboBox61.Items.Add('213/91 Caliburs*Sword of Nightmare');
          ComboBox61.Items.Add('213/91 Caliburs*Tsurugi');
          ComboBox61.Items.Add('213/91 Stormbringer*Samurai Long Sword');
          ComboBox61.Items.Add('213/91 Sword of Delusion*Sword of Delusion');
          ComboBox61.Items.Add('213/91 Sword of Delusion*Sword of Nightmare');
          ComboBox61.Items.Add('213/91 Sword of Delusion*Tsurugi');
          ComboBox61.Items.Add('213/91 Sword of Limit*Sword of Delusion');
          ComboBox61.Items.Add('213/91 Sword of Limit*Sword of Limit');
          ComboBox61.Items.Add('213/91 Sword of Limit*Sword of Nightmare');
          ComboBox61.Items.Add('213/91 Sword of Limit*Tsurugi');
          ComboBox61.Items.Add('213/91 Sword of Nightmare*Sword of Nightmare');
          ComboBox61.Items.Add('213/91 Sword of Nightmare*Tsurugi');
          ComboBox61.Items.Add('213/91 Tsurugi*Tsurugi');
          ComboBox61.Items.Add('204/89 Katana*Caliburs');
          ComboBox61.Items.Add('204/89 Katana*Sword of Delusion');
          ComboBox61.Items.Add('204/89 Katana*Sword of Limit');
          ComboBox61.Items.Add('204/89 Katana*Sword of Nightmare');
          ComboBox61.Items.Add('204/89 Katana*Tsurugi');
          ComboBox61.Items.Add('204/89 Raid Sword*Caliburs');
          ComboBox61.Items.Add('204/89 Raid Sword*Sword of Delusion');
          ComboBox61.Items.Add('204/89 Raid Sword*Sword of Limit');
          ComboBox61.Items.Add('204/89 Raid Sword*Sword of Nightmare');
          ComboBox61.Items.Add('204/89 Raid Sword*Tsurugi');
          ComboBox61.Items.Add('204/89 Shamshir*Caliburs');
          ComboBox61.Items.Add('204/89 Shamshir*Sword of Delusion');
          ComboBox61.Items.Add('204/89 Shamshir*Sword of Limit');
          ComboBox61.Items.Add('204/89 Shamshir*Sword of Nightmare');
          ComboBox61.Items.Add('204/89 Shamshir*Tsurugi');
          ComboBox61.Items.Add('204/89 Spirit Sword*Caliburs');
          ComboBox61.Items.Add('204/89 Spirit Sword*Sword of Delusion');
          ComboBox61.Items.Add('204/89 Spirit Sword*Sword of Limit');
          ComboBox61.Items.Add('204/89 Spirit Sword*Sword of Nightmare');
          ComboBox61.Items.Add('204/89 Spirit Sword*Tsurugi');
          ComboBox61.Items.Add('197/86 Stormbringer*Caliburs');
          ComboBox61.Items.Add('197/86 Stormbringer*Sword of Delusion');
          ComboBox61.Items.Add('197/86 Stormbringer*Sword of Limit');
          ComboBox61.Items.Add('197/86 Stormbringer*Sword of Nightmare');
          ComboBox61.Items.Add('197/86 Stormbringer*Tsurugi');
          ComboBox61.ItemIndex := 0;
          ComboBox62.Visible := False;
        end;
    4 : begin
          ComboBox59.Visible := True;
          ComboBox61.Items.Clear;
          ComboBox61.Items.Add('Unequipped');
          ComboBox61.Items.Add('---=== BLUNT ===---');
          ComboBox61.Items.Add('156/83 Yaksa Mace');
          ComboBox61.Items.Add('139/76 War Axe');
          ComboBox61.Items.Add('122/68 Dwarver War Hammer');
          ComboBox61.Items.Add('107/61 Battle Axe');
          ComboBox61.Items.Add('107/61 Big Hammer');
          ComboBox61.Items.Add('107/61 Silver Axe');
          ComboBox61.Items.Add('107/61 Skull Graver');
          ComboBox61.Items.Add('---=== BOW ===---');
          ComboBox61.Items.Add('323/83 Eminence Bow');
          ComboBox61.Items.Add('316/84 Akat Long Bow');
          ComboBox61.Items.Add('277/75 Elemental Bow');
          ComboBox61.Items.Add('252/68 Noble Elven Bow');
          ComboBox61.Items.Add('220/61 Crystallized Ice Bow');
          ComboBox61.Items.Add('---=== DAGGER ===---');
          ComboBox61.Items.Add('136/83 Crystal Dagger');
          ComboBox61.Items.Add('122/76 Dark Screamer');
          ComboBox61.Items.Add('122/76 Grace Dagger');
          ComboBox61.Items.Add('107/68 Stiletto');
          ComboBox61.Items.Add('94/61 Cursed Dagger');
          ComboBox61.Items.Add('94/61 Dark Elven Dagger');
          ComboBox61.Items.Add('---=== FIST ===---');
          ComboBox61.Items.Add('190/83 Great Pata');
          ComboBox61.Items.Add('169/76 Fist Blade');
          ComboBox61.Items.Add('148/68 Knuckle Duster');
          ComboBox61.Items.Add('130/61 Chakram');
          ComboBox61.Items.Add('---=== MYSTIC WEAPON (1 hand) ===---');
          ComboBox61.Items.Add('125/111 Ecliptic Axe');
          ComboBox61.Items.Add('125/111 Ecliptic Sword');
          ComboBox61.Items.Add('111/101 Club of Nature');
          ComboBox61.Items.Add('111/101 Heathen''s Book');
          ComboBox61.Items.Add('111/101 Homunculus Sword');
          ComboBox61.Items.Add('111/101 Mace of Underworld');
          ComboBox61.Items.Add('111/101 Nirvana Axe');
          ComboBox61.Items.Add('111/101 Stick of Eternity');
          ComboBox61.Items.Add('111/101 Sword of Whispering Death');
          ComboBox61.Items.Add('98/91 Horn of Glory');
          ComboBox61.Items.Add('86/91 Soulfire Dirk');
          ComboBox61.Items.Add('85/81 Mysterious Sword');
          ComboBox61.Items.Add('85/81 Stick of Faith');
          ComboBox61.Items.Add('---=== MYSTIC WEAPON (2 hands) ===---');
          ComboBox61.Items.Add('152/111 Deadman''s Staff');
          ComboBox61.Items.Add('152/111 Demon''s Staff');
          ComboBox61.Items.Add('152/111 Ghoul''s Staff');
          ComboBox61.Items.Add('141/104 Pa''agrio Axe');
          ComboBox61.Items.Add('135/101 Pa''agrio Hammer');
          ComboBox61.Items.Add('135/101 Paradia Staff');
          ComboBox61.Items.Add('135/101 Sage''s Staff');
          ComboBox61.Items.Add('119/91 Cursed Staff');
          ComboBox61.Items.Add('103/81 Crystal Staff');
          ComboBox61.Items.Add('103/81 Heavy Doom Axe');
          ComboBox61.Items.Add('103/81 Heavy Doom Hammer');
          ComboBox61.Items.Add('---=== POLEARM ===---');
          ComboBox61.Items.Add('156/83 Orcish Poleaxe');
          ComboBox61.Items.Add('144/78 Scorpion');
          ComboBox61.Items.Add('144/78 Widow Maker');
          ComboBox61.Items.Add('139/76 Poleaxe');
          ComboBox61.Items.Add('122/68 Bec de Corbin');
          ComboBox61.Items.Add('107/61 Body Slasher');
          ComboBox61.Items.Add('107/61 Orcish Glaive');
          ComboBox61.Items.Add('107/61 Scythe');
          ComboBox61.Items.Add('---=== SWORD ===---');
          ComboBox61.Items.Add('156/83 Samurai Long Sword');
          ComboBox61.Items.Add('139/76 Caliburs');
          ComboBox61.Items.Add('139/76 Sword of Delusion');
          ComboBox61.Items.Add('139/76 Sword of Limit');
          ComboBox61.Items.Add('139/76 Sword of Nightmare');
          ComboBox61.Items.Add('139/76 Tsurugi');
          ComboBox61.Items.Add('122/68 Katana');
          ComboBox61.Items.Add('122/68 Raid Sword');
          ComboBox61.Items.Add('122/68 Shamsir');
          ComboBox61.Items.Add('122/68 Spirit Sword');
          ComboBox61.Items.Add('107/61 Stormbringer');
          ComboBox61.Items.Add('---=== TWO-HANDED SWORD ===---');
          ComboBox61.Items.Add('190/83 Berseker Blade');
          ComboBox61.Items.Add('169/76 Pa''agrian Sword');
          ComboBox61.Items.Add('130/61 Flamberge');
          ComboBox61.Items.Add('---=== DUAL SWORD ===---');
          ComboBox61.Items.Add('190/83 Katana*Katana');
          ComboBox61.Items.Add('190/83 Katana*Raid Sword');
          ComboBox61.Items.Add('190/83 Katana*Spirit Sword');
          ComboBox61.Items.Add('190/83 Raid Sword*Raid Sword');
          ComboBox61.Items.Add('190/83 Shamshir*Katana');
          ComboBox61.Items.Add('190/83 Shamshir*Raid Sword');
          ComboBox61.Items.Add('190/83 Shamshir*Shamshir');
          ComboBox61.Items.Add('190/83 Shamshir*Spirit Sword');
          ComboBox61.Items.Add('190/83 Spirit Sword*Raid Sword');
          ComboBox61.Items.Add('190/83 Spirit Sword*Spirit Sword');
          ComboBox61.Items.Add('183/81 Stormbringer*Katana');
          ComboBox61.Items.Add('183/81 Stormbringer*Raid Sword');
          ComboBox61.Items.Add('183/81 Stormbringer*Shamshir');
          ComboBox61.Items.Add('183/81 Stormbringer*Spirit Sword');
          ComboBox61.Items.Add('175/78 Stormbringer*Stormbringer');
          ComboBox61.Items.Add('162/73 Elven Long Sword*Elven Long Sword');
          ComboBox61.Items.Add('155/70 Sword of Revolution*Elven Long Sword');
          ComboBox61.Items.Add('148/68 Crimson Sword*Elven Long Sword');
          ComboBox61.Items.Add('148/68 Elven Sword*Elven Long Sword');
          ComboBox61.Items.Add('148/68 Sword of Revolution*Sword of Revolution');
          ComboBox61.Items.Add('136/63 Artisan''s Sword*Elven Long Sword');
          ComboBox61.Items.Add('136/63 Bastard Sword*Elven Long Sword');
          ComboBox61.Items.Add('136/63 Crimson Sword*Sword of Revolution');
          ComboBox61.Items.Add('136/63 Elven Sword*Sword of Revolution');
          ComboBox61.Items.Add('136/63 Knight''s Sword*Elven Long Sword');
          ComboBox61.Items.Add('136/63 Spinebone Sword*Elven Long Sword');
          ComboBox61.Items.Add('130/61 Saber*Elven Long Sword');
          ComboBox61.Items.Add('124/58 Artisan''s Sword*Sword of Revolution');
          ComboBox61.Items.Add('124/58 Bastard Sword*Sword of Revolution');
          ComboBox61.Items.Add('124/58 Knight''s Sword*Elven Long Sword');
          ComboBox61.Items.Add('124/58 Spinebone Sword*Sword of Revolution');
          ComboBox61.Items.Add('118/56 Crimson Sword*Crimson Sword');
          ComboBox61.Items.Add('118/56 Crimson Sword*Elven Sword');
          ComboBox61.Items.Add('118/56 Elven Sword*Elven Sword');
          ComboBox61.Items.Add('118/56 Saber*Sword of Revolution');
          ComboBox61.ItemIndex := 0;
          ComboBox62.Visible := False;
        end;
    5 : begin
          ComboBox59.Visible := True;
          ComboBox61.Items.Clear;
          ComboBox61.Items.Add('Unequipped');
          ComboBox61.Items.Add('---=== BLUNT ===---');
          ComboBox61.Items.Add('92/54 Bonebreaker');
          ComboBox61.Items.Add('79/47 Heavy Bone Club');
          ComboBox61.Items.Add('79/47 Morning Star');
          ComboBox61.Items.Add('79/47 Skull Breaker');
          ComboBox61.Items.Add('79/47 Tarbar');
          ComboBox61.Items.Add('64/39 Spiked Club');
          ComboBox61.Items.Add('51/32 Tomahawk');
          ComboBox61.Items.Add('51/32 Traveler''s Tomahawk');
          ComboBox61.Items.Add('40/26 Hand Axe');
          ComboBox61.Items.Add('40/26 Heavy Mace');
          ComboBox61.Items.Add('40/26 Scalpel');
          ComboBox61.Items.Add('40/26 Work Hammer');
          ComboBox61.Items.Add('---=== BOW ====---');
          ComboBox61.Items.Add('191/54 Light Crossbow');
          ComboBox61.Items.Add('179/51 Strengthened Long Bow');
          ComboBox61.Items.Add('132/39 Gastraphetes');
          ComboBox61.Items.Add('114/35 Long Bow');
          ComboBox61.Items.Add('114/35 Traveler''s Long Bow');
          ComboBox61.Items.Add('105/32 Dark Elven Bow');
          ComboBox61.Items.Add('105/32 Elven Bow');
          ComboBox61.Items.Add('105/32 Traveler''s Dark Elven Bow');
          ComboBox61.Items.Add('82/26 Strengthened Bow');
          ComboBox61.Items.Add('---=== DAGGER ===---');
          ComboBox61.Items.Add('80/54 Mithril Dagger');
          ComboBox61.Items.Add('69/47 Maingauche');
          ComboBox61.Items.Add('62/42 Cursed Maingauche');
          ComboBox61.Items.Add('56/39 Kukuri');
          ComboBox61.Items.Add('45/32 Poniard Dagger');
          ComboBox61.Items.Add('45/32 Traveler''s Poniard Dagger');
          ComboBox61.Items.Add('35/26 Assassin Knife');
          ComboBox61.Items.Add('35/26 Crafted Dagger');
          ComboBox61.Items.Add('---===FIST===---');
          ComboBox61.Items.Add('112/54 Scallop Jamadhar');
          ComboBox61.Items.Add('96/47 Bich''Hwa');
          ComboBox61.Items.Add('78/39 Triple-Edged Jamadhar');
          ComboBox61.Items.Add('62/32 Single-Edged Jamadhar');
          ComboBox61.Items.Add('62/32 Traveler''s Jamadhar');
          ComboBox61.Items.Add('49/26 Bagh-Nakh');
          ComboBox61.Items.Add('---=== MYSTIC WEAPON (1 hand) ===---');
          ComboBox61.Items.Add('74/72 Staff of Life');
          ComboBox61.Items.Add('67/66 Demon Fangs');
          ComboBox61.Items.Add('63/63 Crucifix of Blood');
          ComboBox61.Items.Add('63/63 Priest Mace');
          ComboBox61.Items.Add('51/52 Blood of Saints');
          ComboBox61.Items.Add('45/52 Conjurer''s Knife');
          ComboBox61.Items.Add('45/52 Dagger of Mana');
          ComboBox61.Items.Add('45/52 Mystic Knife');
          ComboBox61.Items.Add('45/52 Shillien Knife');
          ComboBox61.Items.Add('51/52 Tome of Blood');
          ComboBox61.Items.Add('43/45 Sword of Magic');
          ComboBox61.Items.Add('43/45 Sword of Mystic');
          ComboBox61.Items.Add('43/45 Sword of Occult');
          ComboBox61.Items.Add('41/43 Divine Tome');
          ComboBox61.Items.Add('41/43 Doom Hammer');
          ComboBox61.Items.Add('41/43 Mace of Judgment');
          ComboBox61.Items.Add('41/43 Mace of Miracle');
          ComboBox61.Items.Add('41/43 Mace of Prayer');
          ComboBox61.Items.Add('41/43 Traveler''s Mace');
          ComboBox61.Items.Add('41/43 Traveler''s Spellbook');
          ComboBox61.Items.Add('32/35 Branch of Life');
          ComboBox61.Items.Add('32/35 Priest Sword');
          ComboBox61.Items.Add('32/35 Proof of Revenge');
          ComboBox61.Items.Add('32/35 Scroll of Wisdom');
          ComboBox61.Items.Add('32/35 Tempation of Abyss');
          ComboBox61.Items.Add('---=== MYSTIC WEAPON (2 hands) ===---');
          ComboBox61.Items.Add('90/72 Atuba Hammer');
          ComboBox61.Items.Add('90/72 Atuba Mace');
          ComboBox61.Items.Add('90/72 Ghost Staff');
          ComboBox61.Items.Add('77/63 Goat Head Staff');
          ComboBox61.Items.Add('62/52 Staff of Magic');
          ComboBox61.Items.Add('50/43 Conjuror''s Staff');
          ComboBox61.Items.Add('50/43 Mystic Staff');
          ComboBox61.Items.Add('50/43 Staff of Mana');
          ComboBox61.Items.Add('50/43 Traveler''s Staff');
          ComboBox61.Items.Add('39/35 Bone Staff');
          ComboBox61.Items.Add('---=== POLEARM ===---');
          ComboBox61.Items.Add('92/54 Glaive');
          ComboBox61.Items.Add('79/47 War Pick');
          ComboBox61.Items.Add('79/47 Winged Spear');
          ComboBox61.Items.Add('64/39 Dwarven Pike');
          ComboBox61.Items.Add('64/39 War Hammer');
          ComboBox61.Items.Add('51/32 Dwarven Trident');
          ComboBox61.Items.Add('51/32 Pike');
          ComboBox61.Items.Add('51/32 Traveler''s Pike');
          ComboBox61.Items.Add('40/26 Trident');
          ComboBox61.Items.Add('---=== SWORD ===---');
          ComboBox61.Items.Add('92/54 Elven Long Sword');
          ComboBox61.Items.Add('79/47 Sword of Revolution');
          ComboBox61.Items.Add('64/39 Crimson Sword');
          ComboBox61.Items.Add('64/39 Elven Sword');
          ComboBox61.Items.Add('51/32 Artisan''s Sword');
          ComboBox61.Items.Add('51/32 Bastard Sword');
          ComboBox61.Items.Add('51/32 Knight''s Sword');
          ComboBox61.Items.Add('51/32 Spinebone Sword');
          ComboBox61.Items.Add('51/32 Traveler''s Bastard Sword');
          ComboBox61.Items.Add('40/26 Saber');
          ComboBox61.Items.Add('---=== TWO-HANDED BLUNT ===---');
          ComboBox61.Items.Add('96/47 Titan Hammer');
          ComboBox61.Items.Add('---=== TWO-HANDED SWORD ===---');
          ComboBox61.Items.Add('112/54 Claymore');
          ComboBox61.Items.Add('96/47 Titan Sword');
          ComboBox61.Items.Add('78/39 Two-Handed Sword');
          ComboBox61.Items.Add('49/26 Heavy Sword');
          ComboBox61.Items.Add('---=== DUAL SWORD ===---');
          ComboBox61.Items.Add('107/51 Artisan''s Sword*Crimson Sword');
          ComboBox61.Items.Add('107/51 Artisan''s Sword*Elven Sword');
          ComboBox61.Items.Add('107/51 Bastard Sword*Crimson Sword');
          ComboBox61.Items.Add('107/51 Bastard Sword*Elven Sword');
          ComboBox61.Items.Add('107/51 Knight''s Sword*Crimson Sword');
          ComboBox61.Items.Add('107/51 Knight''s Sword*Elven Sword');
          ComboBox61.Items.Add('107/51 Spinebone Sword*Crimson Sword');
          ComboBox61.Items.Add('107/51 Spinebone Sword*Elven Sword');
          ComboBox61.Items.Add('96/47 Artisan''s Sword*Artisan''s Sword');
          ComboBox61.Items.Add('96/47 Artisan''s Sword*Knight''s Sword');
          ComboBox61.Items.Add('96/47 Bastard Sword*Artisan''s Sword');
          ComboBox61.Items.Add('96/47 Bastard Sword*Bastard Sword');
          ComboBox61.Items.Add('96/47 Bastard Sword*Knight''s Sword');
          ComboBox61.Items.Add('96/47 Bastard Sword*Spinebone Sword');
          ComboBox61.Items.Add('96/47 Knight''s Sword*Knight''s Sword');
          ComboBox61.Items.Add('96/47 Saber*Crimson Sword');
          ComboBox61.Items.Add('96/47 Saber*Elven Sword');
          ComboBox61.Items.Add('96/47 Spinebone*Artisan''s Sword');
          ComboBox61.Items.Add('96/47 Spinebone Sword*Knight''s Sword');
          ComboBox61.Items.Add('96/47 Spinebone Sword*Spinebone Sword');
          ComboBox61.Items.Add('96/47 Saber*Artisan''s Sword');
          ComboBox61.Items.Add('96/47 Saber*Bastard Sword');
          ComboBox61.Items.Add('96/47 Saber*Knight''s Sword');
          ComboBox61.Items.Add('96/47 Saber*Spinebone Sword');
          ComboBox61.Items.Add('73/37 Saber*Saber');
          ComboBox61.ItemIndex := 0;
          ComboBox62.Visible := False;
        end;
    6 : begin
          ComboBox59.Visible := False;
          ComboBox61.Items.Clear;
          ComboBox61.Items.Add('Unequipped');
          ComboBox61.Items.Add('---=== BLUNT ===---');
          ComboBox61.Items.Add('31/21 Buzdygan');
          ComboBox61.Items.Add('31/21 Iron Hammer');
          ComboBox61.Items.Add('24/17 Apprentice Adventurer''s Bone Club');
          ComboBox61.Items.Add('24/17 Bone Club');
          ComboBox61.Items.Add('17/12 Dwarven Mace');
          ComboBox61.Items.Add('13/10 Silversmith Hammer');
          ComboBox61.Items.Add('12/9 Sickle');
          ComboBox61.Items.Add('10/9 Mace');
          ComboBox61.Items.Add('10/8 Heavy Chisel');
          ComboBox61.Items.Add('6/6 Club');
          ComboBox61.Items.Add('6/5 Guild Member''s Club');
          ComboBox61.Items.Add('---=== BOW ===---');
          ComboBox61.Items.Add('64/21 Composition Bow');
          ComboBox61.Items.Add('49/17 Apprentice Adventurer''s Bow');
          ComboBox61.Items.Add('49/17 Forest Bow');
          ComboBox61.Items.Add('45/16 Neti''s Bow');
          ComboBox61.Items.Add('34/12 Hunting Bow');
          ComboBox61.Items.Add('23/9 Bow');
          ComboBox61.Items.Add('16/6 Short Bow');
          ComboBox61.Items.Add('---=== DAGGER ===---');
          ComboBox61.Items.Add('27/21 Sword Breaker');
          ComboBox61.Items.Add('21/17 Apprentice Adventurer''s Knife');
          ComboBox61.Items.Add('21/17 Shining Knife');
          ComboBox61.Items.Add('21/17 Throwing Knife');
          ComboBox61.Items.Add('19/16 Neti''s Dagger');
          ComboBox61.Items.Add('15/12 Dirk');
          ComboBox61.Items.Add('11/10 Eldritch Dagger');
          ComboBox61.Items.Add('10/9 Cybellin''s Dagger');
          ComboBox61.Items.Add('10/9 Knife');
          ComboBox61.Items.Add('10/9 Pipette Knife');
          ComboBox61.Items.Add('7/6 Bone Dagger');
          ComboBox61.Items.Add('5/5 Dagger');
          ComboBox61.Items.Add('---=== FIST ===---');
          ComboBox61.Items.Add('38/21 Viper''s Fang');
          ComboBox61.Items.Add('29/17 Apprentice Adventurer''s Cestus');
          ComboBox61.Items.Add('29/17 Cestus');
          ComboBox61.Items.Add('21/12 Fox Claw Gloves');
          ComboBox61.Items.Add('16/10 Fist of Butcher');
          ComboBox61.Items.Add('13/9 Iron Gloves');
          ComboBox61.Items.Add('10/6 Spiked Gloves');
          ComboBox61.Items.Add('7/5 Training Gloves');
          ComboBox61.Items.Add('1/1 Chrono Unitus');
          ComboBox61.Items.Add('---=== MYSTIC WEAPON (1 hand) ===---');
          ComboBox61.Items.Add('25/28 Crucifix of Blessing');
          ComboBox61.Items.Add('25/28 Voodoo Doll');
          ComboBox61.Items.Add('19/22 Relic of the Saints');
          ComboBox61.Items.Add('19/22 Tears of Eva');
          ComboBox61.Items.Add('11/13 Wand of Adept');
          ComboBox61.Items.Add('9/12 Apprentice''s Spellbook');
          ComboBox61.Items.Add('6/8 Apprentice''s Rod');
          ComboBox61.Items.Add('6/8 Buffalo''s Horn');
          ComboBox61.Items.Add('5/7 Apprentice''s Wand');
          ComboBox61.Items.Add('---=== MYSTIC WEAPON (2 hands) ===---');
          ComboBox61.Items.Add('30/28 Mage Staff');
          ComboBox61.Items.Add('23/22 Apprentice''s Advenmturer''s Staff');
          ComboBox61.Items.Add('23/22 Journeyman''s Staff');
          ComboBox61.Items.Add('16/16 Cedar Staff');
          ComboBox61.Items.Add('13/14 Staff of Sentinel');
          ComboBox61.Items.Add('11/12 Willow Staff');
          ComboBox61.Items.Add('10/10 Gallint''s Oak Wand');
          ComboBox61.Items.Add('1/1 Chrono Darbuka');
          ComboBox61.Items.Add('---=== POLEARM ===---');
          ComboBox61.Items.Add('31/21 Long Spear');
          ComboBox61.Items.Add('24/17 Talins Spear');
          ComboBox61.Items.Add('24/17 Short Spear');
          ComboBox61.Items.Add('1/1 Chrono Campana');
          ComboBox61.Items.Add('---=== SWORD ===---');
          ComboBox61.Items.Add('31/21 Falchion');
          ComboBox61.Items.Add('24/17 Apprentice Adventurer''s Long Sword');
          ComboBox61.Items.Add('24/17 Long Sword');
          ComboBox61.Items.Add('24/17 Sword of Reflection');
          ComboBox61.Items.Add('24/17 Sword of Watershadow');
          ComboBox61.Items.Add('18/21 Rusted Bronze Sword');
          ComboBox61.Items.Add('17/12 Gladius');
          ComboBox61.Items.Add('17/12 Handmade Sword');
          ComboBox61.Items.Add('17/12 Orcish Sword');
          ComboBox61.Items.Add('17/12 Sword of Binding');
          ComboBox61.Items.Add('14/11 Blood Saber');
          ComboBox61.Items.Add('14/11 Sword of Sentinel');
          ComboBox61.Items.Add('13/10 Butcher''s Sword');
          ComboBox61.Items.Add('12/9 Sword of Solidarity');
          ComboBox61.Items.Add('11/9 Broadsword');
          ComboBox61.Items.Add('8/6 Short Sword');
          ComboBox61.Items.Add('6/5 Squire''s Sword');
          ComboBox61.Items.Add('1/1 Chrono Cithara');
          ComboBox61.Items.Add('---=== TWO-HANDED SWORD ===---');
          ComboBox61.Items.Add('38/21 Zweihander');
          ComboBox61.Items.Add('29/17 Old Knight''s Sword');
          ComboBox61.Items.Add('21/12 Brandish');
          ComboBox61.Items.Add('16/10 Red Sunset Sword');
          ComboBox61.Items.Add('---=== DUALS ===---');
          ComboBox61.Items.Add('1/1 Chrono Maracas');
          ComboBox61.ItemIndex := 0;
          ComboBox62.Visible := False;
        end;
  end;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsAcumenClick(Sender: TObject);
begin
  AcumenLvl.Enabled := IsAcumen.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.AcumenLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ComboBox7Change(Sender: TObject);
var
  s : String[10];
  i : Integer;
begin
  if OldDuals then
    begin
      OldDuals := False;
      ComboBox62.Enabled := True;
    end;
  if ComboBox60.ItemIndex = 4 then
    case ComboBox61.ItemIndex of
      1,9,15,22,27,41,53,62,74,78 : ComboBox61.ItemIndex := 0;
    end;
  if ComboBox60.ItemIndex = 5 then
    case ComboBox61.ItemIndex of
      1,14,24,33,40,66,77,87,98,100,105 : ComboBox61.ItemIndex := 0;
    end;
  if ComboBox60.ItemIndex = 6 then
    case ComboBox61.ItemIndex of
      1,13,21,34,44,54,63,68,87,92 : ComboBox61.ItemIndex := 0;
    end;
  case ComboBox60.ItemIndex of
    0 : case ComboBox61.ItemIndex of
          1 : begin
                IsSA := True;
                WSA.SA := SA_Axe;
                WType := Blunt1;
                WPA := 297;
                WMA := 137;
              end;
          2 : begin
                IsSA := True;
                WSA.SA := SA_Blade;
                WType := Sword;
                WPA := 297;
                WMA := 137;
              end;
          3 : begin
                IsSA := True;
                WSA.SA := SA_Bow;
                WType := BowFast;
                WPA := 614;
                WMA := 137;
              end;
          4 : begin
                IsSA := True;
                WSA.SA := SA_Cleaver;
                WType := Sword2;
                WPA := 361;
                WMA := 137;
              end;
          5 : begin
                IsSA := True;
                WSA.SA := SA_Crusher;
                WType := Blunt2;
                WPA := 361;
                WMA := 137;
              end;
          6 : begin
                IsSA := True;
                WSA.SA := SA_Fang;
                WType := Fist;
                WPA := 361;
                WMA := 137;
              end;
          7 : begin
                IsSA := True;
                WSA.SA := SA_Rod;
                WType := Blunt1;
                WPA := 238;
                WMA := 182;
              end;
          8 : begin
                IsSA := True;
                WSA.SA := SA_Scepter;
                WType := Blunt2;
                WPA := 290;
                WMA := 182;
              end;
          9 : begin
                IsSA := True;
                WSA.SA := SA_Spear;
                WType := Polearm;
                WPA := 297;
                WMA := 137;
              end;
          10: begin
                IsSA := True;
                WSA.SA := SA_Stinger;
                WType := Dagger;
                WPA := 260;
                WMA := 137;
              end;
          11: begin
                IsSA := True;
                WSA.SA := SA_Wing;
                WType := DualSword;
                WPA := 361;
                WMA := 137;
              end;
        end;
    1 : case ComboBox61.ItemIndex of
          0 : ComboBox62.Visible := False;
          1 : begin
                ComboBox62.Items.Clear;
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damge');
                ComboBox62.Items.Add('Haste');
                ComboBox62.Items.Add('HP Drain');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Dagger;
                WPA := 246;
                WMA := 132;
              end;
          2 : begin
                ComboBox62.Items.Clear;
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Acumen');
                ComboBox62.Items.Add('Mana Up');
                ComboBox62.Items.Add('MP Regeneration');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 225;
                WMA := 175;
              end;
          3 : begin
                ComboBox62.Items.Clear;
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.Items.Add('HP Drain');
                ComboBox62.Items.Add('HP Regeneration');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 281;
                WMA := 132;
              end;
          4 : begin
                ComboBox62.Items.Clear;
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Stun');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Fist;
                WPA := 342;
                WMA := 132;
              end;
          5 : begin
                ComboBox62.Items.Clear;
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Cheap Shot');
                ComboBox62.Items.Add('Critical Slow');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := BowFast;
                WPA := 581;
                WMA := 132;
              end;
          6 : begin
                ComboBox62.Items.Clear;
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.Items.Add('HP Drain');
                ComboBox62.Items.Add('HP Regeneration');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Polearm;
                WPA := 342;
                WMA := 132;
              end;
          7 : begin
                ComboBox62.Items.Clear;
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Haste');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 281;
                WMA := 132;
              end;
          8 : begin
                ComboBox62.Items.Clear;
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Haste');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword2;
                WPA := 342;
                WMA := 132;
              end;
          9 : begin
                ComboBox62.Items.Clear;
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Empower');
                ComboBox62.Items.Add('Magic Hold');
                ComboBox62.Items.Add('MP Regeneration');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 274;
                WMA := 175;
              end;
          10: begin
                ComboBox62.Items.Clear;
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.Items.Add('Haste');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Polearm;
                WPA := 281;
                WMA := 132;
              end;
          11: begin
                ComboBox62.Items.Clear;
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('CP/HP/MP');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 342;
                WMA := 132;
              end;
        end;
    2 : case ComboBox61.ItemIndex of
          0 : ComboBox62.Visible := False;
          1 : begin
                ComboBox62.Items.Clear;         // Blood Tornado
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Fist;
                WPA := 259;
                WMA := 107;
              end;
          2 : begin
                ComboBox62.Items.Clear;   //Bloody Orchid
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Back Blow');
                ComboBox62.Items.Add('Critical Bleed');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Dagger;
                WPA := 186;
                WMA := 107;
              end;
          3 : begin
                ComboBox62.Items.Clear;   //BoMT
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Acumen');
                ComboBox62.Items.Add('Conversion');
                ComboBox62.Items.Add('Magic Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 226;
                WMA := 152;
              end;
          4 : begin
                ComboBox62.Items.Clear;     //carnaga
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Bleed');
                ComboBox62.Items.Add('Light');
                ComboBox62.Items.Add('Mana Up');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := BowFast;
                WPA := 440;
                WMA := 107;
              end;
          5 : begin
                ComboBox62.Items.Clear;      //dam*dam
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 282;
                WMA := 114;
              end;
          6 : begin
                ComboBox62.Items.Clear;  //dle
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.Items.Add('Health');
                ComboBox62.Items.Add('Rsk. Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 232;
                WMA := 114;
              end;
          7 : begin
                ComboBox62.Items.Clear;    //daspar
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Acumen');
                ComboBox62.Items.Add('Conversion');
                ComboBox62.Items.Add('Mana Up');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 207;
                WMA := 143;
              end;
          8 : begin
                ComboBox62.Items.Clear;  // dragon grinder
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.Items.Add('Health');
                ComboBox62.Items.Add('Rsk. Evasion');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Fist;
                WPA := 282;
                WMA := 114;
              end;
          9 : begin
                ComboBox62.Items.Clear;  // dragon slayer
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Bleed');
                ComboBox62.Items.Add('Critical Drain');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword2;
                WPA := 282;
                WMA := 114;
              end;
          10: begin
                ComboBox62.Items.Clear;    // elemental
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Empower');
                ComboBox62.Items.Add('Magic Paralyze');
                ComboBox62.Items.Add('Magic Power');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 170;
                WMA := 143;
              end;
          11: begin
                ComboBox62.Items.Clear;    // elysian
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Critical Drain');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 232;
                WMA := 114;
              end;
          12: begin
                ComboBox62.Items.Clear;    // infernal
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword2;
                WPA := 259;
                WMA := 107;
              end;
          13: begin
                ComboBox62.Items.Clear;        // halberd
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Stun');
                ComboBox62.Items.Add('Haste');
                ComboBox62.Items.Add('Wide Blow');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Polearm;
                WPA := 213;
                WMA := 107;
              end;
          14: begin
                ComboBox62.Items.Clear;    //  kesh*dam
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 275;
                WMA := 112;
              end;
          15: begin
                ComboBox62.Items.Clear;    // kesh*kesh
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 259;
                WMA := 107;
              end;
          16: begin
                ComboBox62.Items.Clear;    // meteor
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Bleed');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Rsk. Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 213;
                WMA := 107;
              end;
          17: begin
                ComboBox62.Items.Clear;       // soul bow
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Cheap Shot');
                ComboBox62.Items.Add('Critical Poison');
                ComboBox62.Items.Add('Quick Recovery');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := BowSlow;
                WPA := 528;
                WMA := 125;
              end;
          18: begin
                ComboBox62.Items.Clear;   // soul separ
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.Items.Add('Rsk. Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Dagger;
                WPA := 203;
                WMA := 114;
              end;
          19: begin
                ComboBox62.Items.Clear;  // SOM
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Acumen');
                ComboBox62.Items.Add('Magic Power');
                ComboBox62.Items.Add('Magic Silence');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 186;
                WMA := 152;
              end;
          20: begin
                ComboBox62.Items.Clear;       // tallum blaide
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Critical Poison');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 213;
                WMA := 107;
              end;
          21: begin
                ComboBox62.Items.Clear;       // tallum glaive
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.Items.Add('Health');
                ComboBox62.Items.Add('Wide Blow');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Polearm;
                WPA := 232;
                WMA := 114;
              end;
        end;
    3 : case ComboBox61.ItemIndex of
          0 : ComboBox62.Visible := False;
          1 : begin
                ComboBox62.Items.Clear;       //  aoba
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.Items.Add('Health');
                ComboBox62.Items.Add('Rsk. Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 194;
                WMA := 99;
              end;
          2 : begin
                ComboBox62.Items.Clear;       // artho nail
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Poison');
                ComboBox62.Items.Add('Rsk. Evasion');
                ComboBox62.Items.Add('Rsk. Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Fist;
                WPA := 213;
                WMA := 91;
              end;
          3 : begin
                ComboBox62.Items.Clear;       //      bellinion
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Drain');
                ComboBox62.Items.Add('Critical Poison');
                ComboBox62.Items.Add('Rsk. Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Fist;
                WPA := 236;
                WMA := 99;
              end;
          4 : begin
                ComboBox62.Items.Clear;       //   peril
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Cheap Shot');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.Items.Add('Quick Recovery');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := BowFast;
                WPA := 400;
                WMA := 99;
              end;
          5 : begin
                ComboBox62.Items.Clear;       //  delb
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Bleed');
                ComboBox62.Items.Add('Evasion');
                ComboBox62.Items.Add('Miser');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := BowSlow;
                WPA := 397;
                WMA := 100;
              end;
          6 : begin
                ComboBox62.Items.Clear;       //  dedmans glory
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Haste');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 194;
                WMA := 99;
              end;
          7 : begin
                ComboBox62.Items.Clear;       // demons sword
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Bleed');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.Items.Add('Critical Poison');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Dagger;
                WPA := 170;
                WMA := 99;
              end;
          8 : begin
                ComboBox62.Items.Clear;       //       great axe
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Critical Stun');
                ComboBox62.Items.Add('Light');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 175;
                WMA := 91;
              end;
          9 : begin
                ComboBox62.Items.Clear;       //     great sword
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword2;
                WPA := 213;
                WMA := 91;
              end;
          10: begin
                ComboBox62.Items.Clear;       //   heavy war axe
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Health');
                ComboBox62.Items.Add('Rsk. Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 175;
                WMA := 91;
              end;
          11: begin
                ComboBox62.Items.Clear;       //   hell knife
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Magic Regeneration');
                ComboBox62.Items.Add('Magic Weakness');
                ComboBox62.Items.Add('Mental Shield');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Dagger;
                WPA := 122;
                WMA := 122;
              end;
          12: begin
                ComboBox62.Items.Clear;       // kesh
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Back Blow');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 175;
                WMA := 91;
              end;
          13: begin
                ComboBox62.Items.Clear;       //    kris
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Back Blow');
                ComboBox62.Items.Add('Evasion');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Dagger;
                WPA := 153;
                WMA := 91;
              end;
          14: begin
                ComboBox62.Items.Clear;       //        Lance
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Critical Stun');
                ComboBox62.Items.Add('Long Blow');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Polearm;
                WPA := 194;
                WMA := 99;
              end;
          15: begin
                ComboBox62.Items.Clear;       //         sprite staff
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Magic Hold');
                ComboBox62.Items.Add('Magic Regeneration');
                ComboBox62.Items.Add('Mental Shield');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 180;
                WMA := 122;
              end;
          16: begin
                ComboBox62.Items.Clear;       //       soes
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Bodily Blessing');
                ComboBox62.Items.Add('Magic Focus');
                ComboBox62.Items.Add('Magic Poison');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 189;
                WMA := 132;
              end;
          17: begin
                ComboBox62.Items.Clear;       //   dam
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 194;
                WMA := 99;
              end;
          18: begin
                ComboBox62.Items.Clear;       //  valhala
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Acumen');
                ComboBox62.Items.Add('Magic Regeneration');
                ComboBox62.Items.Add('Magic Weakness');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 140;
                WMA := 122;
              end;
          19: begin
                ComboBox62.Items.Clear;       //  SLS SLS
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 236;
                WMA := 99;
              end;
          20: begin
                ComboBox62.Items.Clear;       // calib SLS
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 228;
                WMA := 97;
              end;
          21: begin
                ComboBox62.Items.Clear;       // delus SLS
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 228;
                WMA := 97;
              end;
          22: begin
                ComboBox62.Items.Clear;       //  limit SLS
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 228;
                WMA := 97;
              end;
          23: begin
                ComboBox62.Items.Clear;       //  night sls
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 228;
                WMA := 97;
              end;
          24: begin
                ComboBox62.Items.Clear;       //   tsur sls
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 228;
                WMA := 97;
              end;
          25: begin
                ComboBox62.Items.Clear;       //    katana sls
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 220;
                WMA := 94;
              end;
          26: begin
                ComboBox62.Items.Clear;       //  raid sls
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 220;
                WMA := 94;
              end;
          27: begin
                ComboBox62.Items.Clear;       //    shamsir sls
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 220;
                WMA := 94;
              end;
          28: begin
                ComboBox62.Items.Clear;       // spirit sls
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 220;
                WMA := 94;
              end;
          29: begin
                ComboBox62.Items.Clear;       //     calib calib
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          30: begin
                ComboBox62.Items.Clear;       //  calib delus
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          31: begin
                ComboBox62.Items.Clear;       //  calib limit
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          32: begin
                ComboBox62.Items.Clear;       //  calib night
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          33: begin
                ComboBox62.Items.Clear;       //  calib tsur
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          34: begin
                ComboBox62.Items.Clear;       //   storm sls
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          35: begin
                ComboBox62.Items.Clear;       //  del del
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          36: begin
                ComboBox62.Items.Clear;       //  del night
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          37: begin
                ComboBox62.Items.Clear;       //  del tsur
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          38: begin
                ComboBox62.Items.Clear;       // limit del
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          39: begin
                ComboBox62.Items.Clear;       //   limit limit
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          40: begin
                ComboBox62.Items.Clear;       //    limit night
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          41: begin
                ComboBox62.Items.Clear;       //   limit tsur
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          42: begin
                ComboBox62.Items.Clear;       //   night night
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          43: begin
                ComboBox62.Items.Clear;       //       night tsur
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          44: begin
                ComboBox62.Items.Clear;       //     tsur tsur
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 213;
                WMA := 91;
              end;
          45: begin
                ComboBox62.Items.Clear;       //    katana calib
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          46: begin
                ComboBox62.Items.Clear;       //   katana del
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          47: begin
                ComboBox62.Items.Clear;       //   katana limit
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          48: begin
                ComboBox62.Items.Clear;       //   katana night
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          49: begin
                ComboBox62.Items.Clear;       //    katana tsur
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          50: begin
                ComboBox62.Items.Clear;       //   raid calib
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          51: begin
                ComboBox62.Items.Clear;       //   raid del
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          52: begin
                ComboBox62.Items.Clear;       //      raid limit
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          53: begin
                ComboBox62.Items.Clear;       //      raid night
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          54: begin
                ComboBox62.Items.Clear;       //  raid tsur
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          55: begin
                ComboBox62.Items.Clear;       //    sham calib
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          56: begin
                ComboBox62.Items.Clear;       //    sham del
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          57: begin
                ComboBox62.Items.Clear;       //    sham limit
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          58: begin
                ComboBox62.Items.Clear;       //   sham night
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          59: begin
                ComboBox62.Items.Clear;       //    sham tsur
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          60: begin
                ComboBox62.Items.Clear;       //      spir calib
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          61: begin
                ComboBox62.Items.Clear;       //   spir del
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          62: begin
                ComboBox62.Items.Clear;       //  spir limit
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          63: begin
                ComboBox62.Items.Clear;       //  spir night
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 98;
              end;
          64: begin
                ComboBox62.Items.Clear;       // spir tsur
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 204;
                WMA := 89;
              end;
          65: begin
                ComboBox62.Items.Clear;       //  storm calib
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 197;
                WMA := 86;
              end;
          66: begin
                ComboBox62.Items.Clear;       //    storm del
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 197;
                WMA := 86;
              end;
          67: begin
                ComboBox62.Items.Clear;       //   storm limit
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 197;
                WMA := 86;
              end;
          68: begin
                ComboBox62.Items.Clear;       //      storm night
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 197;
                WMA := 86;
              end;
          69: begin
                ComboBox62.Items.Clear;       //    storm tsur
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                OldDuals := True;
                ComboBox62.Enabled := False;
                IsSA := False;
                WType := DualSword;
                WPA := 197;
                WMA := 86;
              end;
        end;
    4 : case ComboBox61.ItemIndex of
          0 : ComboBox62.Visible := False;
          2 : begin
                ComboBox62.Items.Clear;       //   yaksa
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Health');
                ComboBox62.Items.Add('Rsk. Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 156;
                WMA := 83;
              end;
          3 : begin
                ComboBox62.Items.Clear;       //  war axe
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Haste');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 139;
                WMA := 76;
              end;
          4 : begin
                ComboBox62.Items.Clear;       // dwarven war hammer
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Haste');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 122;
                WMA := 68;
              end;
          5 : begin
                ComboBox62.Items.Clear;       // batle axe
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Haste');
                ComboBox62.Items.Add('Rsk. Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 107;
                WMA := 61;
              end;
          6 : begin
                ComboBox62.Items.Clear;       //   big hammer
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.Items.Add('Health');
                ComboBox62.Items.Add('Rsk. Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 107;
                WMA := 61;
              end;
          7 : begin
                ComboBox62.Items.Clear;       // silver axe
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Haste');
                ComboBox62.Items.Add('Rsk. Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 107;
                WMA := 61;
              end;
          8 : begin
                ComboBox62.Items.Clear;       //  skull graver
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Health');
                ComboBox62.Items.Add('Rsk. Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 107;
                WMA := 61;
              end;
          10: begin
                ComboBox62.Items.Clear;       //  emik
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Cheap Shot');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.Items.Add('Miser');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := BowFast;
                WPA := 323;
                WMA := 83;
              end;
          11: begin
                ComboBox62.Items.Clear;       //  akat
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Evasion');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.Items.Add('Miser');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := BowSlow;
                WPA := 316;
                WMA := 84;
              end;
          12: begin
                ComboBox62.Items.Clear;       //    elemental bow
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.Items.Add('Miser');
                ComboBox62.Items.Add('Quick Recovery');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := BowSlow;
                WPA := 277;
                WMA := 75;
              end;
          13: begin
                ComboBox62.Items.Clear;       // noble elven bow
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Cheap Shot');
                ComboBox62.Items.Add('Evasion');
                ComboBox62.Items.Add('Miser');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := BowFast;
                WPA := 252;
                WMA := 68;
              end;
          14: begin
                ComboBox62.Items.Clear;       // crystalize bow
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Evasion');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.Items.Add('Quick Recovery');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := BowFast;
                WPA := 220;
                WMA := 61;
              end;
          16: begin
                ComboBox62.Items.Clear;       //  crystal dager
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Bleed');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.Items.Add('Critical Poison');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Dagger;
                WPA := 136;
                WMA := 83;
              end;
          17: begin
                ComboBox62.Items.Clear;       // dark screemer
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Bleed');
                ComboBox62.Items.Add('Evasion');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Dagger;
                WPA := 122;
                WMA := 76;
              end;
          18: begin
                ComboBox62.Items.Clear;       //  grace dagger
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Back Blow');
                ComboBox62.Items.Add('Evasion');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Dagger;
                WPA := 122;
                WMA := 76;
              end;
          19: begin
                ComboBox62.Items.Clear;       //  stiletto
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Bleed');
                ComboBox62.Items.Add('Critical Poison');
                ComboBox62.Items.Add('Rsk. Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Dagger;
                WPA := 107;
                WMA := 68;
              end;
          20: begin
                ComboBox62.Items.Clear;       //   cursed dagger
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Bleed');
                ComboBox62.Items.Add('Critical Poison');
                ComboBox62.Items.Add('Rsk. Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Dagger;
                WPA := 94;
                WMA := 61;
              end;
          21: begin
                ComboBox62.Items.Clear;       // dark elven dager
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Back Blow');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Rsk. Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Dagger;
                WPA := 94;
                WMA := 61;
              end;
          23: begin
                ComboBox62.Items.Clear;       // great pata
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Drain');
                ComboBox62.Items.Add('Critical Poison');
                ComboBox62.Items.Add('Rsk. Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Fist;
                WPA := 190;
                WMA := 83;
              end;
          24: begin
                ComboBox62.Items.Clear;       // fist blade
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.Items.Add('Rsk. Evasion');
                ComboBox62.Items.Add('Rsk. Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Fist;
                WPA := 169;
                WMA := 76;
              end;
          25: begin
                ComboBox62.Items.Clear;       //   kunckle duster
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.Items.Add('Rsk. Evasion');
                ComboBox62.Items.Add('Rsk. Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Fist;
                WPA := 148;
                WMA := 68;
              end;
          26: begin
                ComboBox62.Items.Clear;       //   chakram
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Drain');
                ComboBox62.Items.Add('Critical Poison');
                ComboBox62.Items.Add('Rsk. Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Fist;
                WPA := 130;
                WMA := 61;
              end;
          28: begin
                ComboBox62.Items.Clear;       // ecliptic axe
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Conversion');
                ComboBox62.Items.Add('Magic Hold');
                ComboBox62.Items.Add('Magic Power');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := False; // <<<<<<<<-------- there hz
                IsSA := False;
                WType := Blunt1;
                WPA := 125;
                WMA := 111;
              end;
          29: begin
                ComboBox62.Items.Clear;       //  ecliptic sword
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Empower');
                ComboBox62.Items.Add('Magic Power');
                ComboBox62.Items.Add('Magic Silence');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := False;  // <<<<<<<<<---------- there hz
                IsSA := False;
                WType := Sword;
                WPA := 125;
                WMA := 111;
              end;
          30: begin
                ComboBox62.Items.Clear;       // club of nature
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Acumen');
                ComboBox62.Items.Add('Magic Hold');
                ComboBox62.Items.Add('Mental Shield');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 111;
                WMA := 101;
              end;
          31: begin
                ComboBox62.Items.Clear;       // heathens book
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Book;
                WPA := 111;
                WMA := 101;
              end;
          32: begin
                ComboBox62.Items.Clear;       //  homka
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Acumen');
                ComboBox62.Items.Add('Conversion');
                ComboBox62.Items.Add('Magic Paralyze');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 111;
                WMA := 101;
              end;
          33: begin
                ComboBox62.Items.Clear;       // mace of under
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Conversion');
                ComboBox62.Items.Add('Magic Silence');
                ComboBox62.Items.Add('Mana Up');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 111;
                WMA := 101;
              end;
          34: begin
                ComboBox62.Items.Clear;       // nirvana axe
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Magic Poison');
                ComboBox62.Items.Add('Magic Power');
                ComboBox62.Items.Add('Magic Weakness');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 111;
                WMA := 101;
              end;
           35: begin
                ComboBox62.Items.Clear;       //   stick of eternity
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Bless the Body');
                ComboBox62.Items.Add('Empower');
                ComboBox62.Items.Add('Rsk. Evasion');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 111;
                WMA := 101;
              end;
          36: begin
                ComboBox62.Items.Clear;       // sowd
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Empower');
                ComboBox62.Items.Add('Magic Power');
                ComboBox62.Items.Add('Magic Silence');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 111;
                WMA := 101;
              end;
          37: begin
                ComboBox62.Items.Clear;       //  horn of glory
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Book;
                WPA := 98;
                WMA := 91;
              end;
          38: begin
                ComboBox62.Items.Clear;       // soulfire dirk
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Magic Hold');
                ComboBox62.Items.Add('Magic Silence');
                ComboBox62.Items.Add('Mana Up');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Dagger;
                WPA := 86;
                WMA := 91;
              end;
          39: begin
                ComboBox62.Items.Clear;       //   mysterious sword
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Acumen');
                ComboBox62.Items.Add('Magic Power');
                ComboBox62.Items.Add('Magic Weakness');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 85;
                WMA := 81;
              end;
          40: begin
                ComboBox62.Items.Clear;       //   stick of earth
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Magic Hold');
                ComboBox62.Items.Add('Mental Shield');
                ComboBox62.Items.Add('Mana Up');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt1;
                WPA := 85;
                WMA := 81;
              end;
          42: begin
                ComboBox62.Items.Clear;       // deadman staff
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Magic Hold');
                ComboBox62.Items.Add('Magic Regeneration');
                ComboBox62.Items.Add('Mental Shield');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 152;
                WMA := 111;
              end;
          43: begin
                ComboBox62.Items.Clear;       // demons staf
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Magic Chaos');
                ComboBox62.Items.Add('Magic Poison');
                ComboBox62.Items.Add('Magic Weakness');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 152;
                WMA := 111;
              end;
          44: begin
                ComboBox62.Items.Clear;       //  ghoul staf
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Bodily Blessing');
                ComboBox62.Items.Add('Mana Up');
                ComboBox62.Items.Add('Rsk. Evasion');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 152;
                WMA := 111;
              end;
          45: begin
                ComboBox62.Items.Clear;       //  paagrio axe
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Magic Chaos');
                ComboBox62.Items.Add('Magic Weakness');
                ComboBox62.Items.Add('Mana Up');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 141;
                WMA := 104;
              end;
          46: begin
                ComboBox62.Items.Clear;       // paagrio hammer
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Magic Poison');
                ComboBox62.Items.Add('Magic Weakness');
                ComboBox62.Items.Add('Rsk. Evasion');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 135;
                WMA := 101;
              end;
          47: begin
                ComboBox62.Items.Clear;       //   paradia staff
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Magic Hold');
                ComboBox62.Items.Add('Magic Regeneration');
                ComboBox62.Items.Add('Mental Shield');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 135;
                WMA := 101;
              end;
          48: begin
                ComboBox62.Items.Clear;       // sages staff
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Magic Hold');
                ComboBox62.Items.Add('Magic Poison');
                ComboBox62.Items.Add('Magic Weakness');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 135;
                WMA := 101;
              end;
          49: begin
                ComboBox62.Items.Clear;       // cursed staff
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Magic Hold');
                ComboBox62.Items.Add('Magic Poison');
                ComboBox62.Items.Add('Magic Weakness');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 119;
                WMA := 91;
              end;
          50: begin
                ComboBox62.Items.Clear;       // crystal staff
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Bodily Blessing');
                ComboBox62.Items.Add('Mana Up');
                ComboBox62.Items.Add('Rsk. Evasion');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 103;
                WMA := 81;
              end;
          51: begin
                ComboBox62.Items.Clear;       // heavy doom axe
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Magic Chaos');
                ComboBox62.Items.Add('Magic Poison');
                ComboBox62.Items.Add('Magic Weakness');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 103;
                WMA := 81;
              end;
          52: begin
                ComboBox62.Items.Clear;       // heavy doom hammer
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Magic Hold');
                ComboBox62.Items.Add('Magic Regeneration');
                ComboBox62.Items.Add('Mental Shield');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Blunt2;
                WPA := 103;
                WMA := 81;
              end;
          54: begin
                ComboBox62.Items.Clear;       //   orcish poleaxe
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Stun');
                ComboBox62.Items.Add('Long Blow');
                ComboBox62.Items.Add('Wide Blow');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Polearm;
                WPA := 156;
                WMA := 83;
              end;
          55: begin
                ComboBox62.Items.Clear;       //   scorpion
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Critical Stun');
                ComboBox62.Items.Add('Long Blow');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Polearm;
                WPA := 144;
                WMA := 78;
              end;
          56: begin
                ComboBox62.Items.Clear;       // widow maker
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Stun');
                ComboBox62.Items.Add('Long Blow');
                ComboBox62.Items.Add('Wide Blow');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Polearm;
                WPA := 144;
                WMA := 78;
              end;
          57: begin
                ComboBox62.Items.Clear;       // poleaxe
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Stun');
                ComboBox62.Items.Add('Long Blow');
                ComboBox62.Items.Add('Wide Blow');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Polearm;
                WPA := 139;
                WMA := 76;
              end;
          58: begin
                ComboBox62.Items.Clear;       // bec de corbin
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Stun');
                ComboBox62.Items.Add('Light');
                ComboBox62.Items.Add('Long Blow');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Polearm;
                WPA := 122;
                WMA := 68;
              end;
          59: begin
                ComboBox62.Items.Clear;       // body slasher
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Stun');
                ComboBox62.Items.Add('Long Blow');
                ComboBox62.Items.Add('Wide Blow');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Polearm;
                WPA := 107;
                WMA := 61;
              end;
          60: begin
                ComboBox62.Items.Clear;       //   orcish glaive
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Critical Stun');
                ComboBox62.Items.Add('Long Blow');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Polearm;
                WPA := 107;
                WMA := 61;
              end;
          61: begin
                ComboBox62.Items.Clear;       //   scythe
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Anger');
                ComboBox62.Items.Add('Critical Stun');
                ComboBox62.Items.Add('Light');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Polearm;
                WPA := 107;
                WMA := 61;
              end;
          63: begin
                ComboBox62.Items.Clear;       //  sls
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 156;
                WMA := 83;
              end;
          64: begin
                ComboBox62.Items.Clear;       //  caliburs
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 139;
                WMA := 76;
              end;
          65: begin
                ComboBox62.Items.Clear;       //  deluga
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Health');
                ComboBox62.Items.Add('Rsk. Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 139;
                WMA := 76;
              end;
          66: begin
                ComboBox62.Items.Clear;       //    limit
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Drain');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 139;
                WMA := 76;
              end;
          67: begin
                ComboBox62.Items.Clear;       // night
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Health');
                ComboBox62.Items.Add('Light');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 139;
                WMA := 76;
              end;
          68: begin
                ComboBox62.Items.Clear;       // tsur
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 139;
                WMA := 76;
              end;
          69: begin
                ComboBox62.Items.Clear;       // katana
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 122;
                WMA := 68;
              end;
          70: begin
                ComboBox62.Items.Clear;       // raid
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Drain');
                ComboBox62.Items.Add('Critical Poison');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 122;
                WMA := 68;
              end;
          71: begin
                ComboBox62.Items.Clear;       // shams
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Back Blow');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.Items.Add('Rsk. Evasion');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 122;
                WMA := 68;
              end;
          72: begin
                ComboBox62.Items.Clear;       // spirit
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.Items.Add('Critical Poison');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 122;
                WMA := 68;
              end;
          73: begin
                ComboBox62.Items.Clear;       //  storm
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Anger');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Light');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword;
                WPA := 107;
                WMA := 61;
              end;
          75: begin
                ComboBox62.Items.Clear;       // bers blade
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword2;
                WPA := 190;
                WMA := 83;
              end;
          76: begin
                ComboBox62.Items.Clear;       //  paagrian sword
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Drain');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := False; //<<<<------------ there hz
                IsSA := False;
                WType := Sword2;
                WPA := 169;
                WMA := 76;
              end;
          77: begin
                ComboBox62.Items.Clear;       // flamberge
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.Items.Add('Focus');
                ComboBox62.Items.Add('Light');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                IsSA := False;
                WType := Sword2;
                WPA := 130;
                WMA := 61;
              end;
          79: begin
                ComboBox62.Items.Clear;      // kat*kat
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 190;
                WMA := 83;
              end;
          80: begin
                ComboBox62.Items.Clear;      // kat*raid
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 190;
                WMA := 83;
              end;
          81: begin
                ComboBox62.Items.Clear;      // kat spirit
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 190;
                WMA := 83;
              end;
          82: begin
                ComboBox62.Items.Clear;      //  raid raid
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 190;
                WMA := 83;
              end;
          83: begin
                ComboBox62.Items.Clear;      // sham kat
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 190;
                WMA := 83;
              end;
          84: begin
                ComboBox62.Items.Clear;      //  sham raid
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 190;
                WMA := 83;
              end;
          85: begin
                ComboBox62.Items.Clear;      //  sham sham
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 190;
                WMA := 83;
              end;
          86: begin
                ComboBox62.Items.Clear;      //  sham spirit
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 190;
                WMA := 83;
              end;
          87: begin
                ComboBox62.Items.Clear;      //  spirita raid
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 190;
                WMA := 83;
              end;
          88: begin
                ComboBox62.Items.Clear;      //  spir spir
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 190;
                WMA := 83;
              end;
          89: begin
                ComboBox62.Items.Clear;      // storm kat
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 183;
                WMA := 81;
              end;
          90: begin
                ComboBox62.Items.Clear;      // storm raid
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 183;
                WMA := 81;
              end;
          91: begin
                ComboBox62.Items.Clear;      //   storm sham
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 183;
                WMA := 81;
              end;
          92: begin
                ComboBox62.Items.Clear;      // storm spirit
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 183;
                WMA := 81;
              end;
          93: begin
                ComboBox62.Items.Clear;      // storm storm
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 175;
                WMA := 78;
              end;
          94: begin
                ComboBox62.Items.Clear;      // els els
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Haste');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 162 ;
                WMA := 73;
              end;
          95: begin
                ComboBox62.Items.Clear;      // revol els
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Focus');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 155;
                WMA := 70;
              end;
          96: begin
                ComboBox62.Items.Clear;      //  crim els
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Guidance');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 148;
                WMA := 68;
              end;
          97: begin
                ComboBox62.Items.Clear;      // es els
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Critical Damage');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 148;
                WMA := 68;
              end;
          98: begin
                ComboBox62.Items.Clear;      // revol revol
                ComboBox62.Items.Add('no SA');
                ComboBox62.Items.Add('Health');
                ComboBox62.ItemIndex := 0;
                ComboBox62.Visible := True;
                ComboBox62.Enabled := False;
                OldDuals := True;
                IsSA := False;
                WType := DualSword;
                WPA := 148;
                WMA := 68;
              end;
          99..104 : begin
                      ComboBox62.Visible := False;
                      IsSA := False;
                      WType := DualSword;
                      WPA := 136;
                      WMA := 63;
                    end;
          105 : begin
                  ComboBox62.Visible := False;
                  IsSA := False;
                  WType := DualSword;
                  WPA := 130;
                  WMA := 61;
                end;
          106..109: begin
                      ComboBox62.Visible := False;
                      IsSA := False;
                      WType := DualSword;
                      WPA := 124;
                      WMA := 58;
                    end;
          110..113: begin
                      ComboBox62.Visible := False;
                      IsSA := False;
                      WType := DualSword;
                      WPA := 118;
                      WMA := 26;
                    end;
        end;
    5 : case ComboBox61.ItemIndex of
          0 : ComboBox62.Visible := False;
          2 : begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 92;
                WMA := 54;
              end;
          3 : begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 79;
                WMA := 47;
              end;
          4 : begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 79;
                WMA := 47;
              end;
          5 : begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 79;
                WMA := 47;
              end;
          6 : begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 79;
                WMA := 47;
              end;
          7 : begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 64;
                WMA := 39;
              end;
          8 : begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 51;
                WMA := 32;
              end;
          9 : begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 51;
                WMA := 32;
              end;
          10: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 40;
                WMA := 26;
              end;
          11: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 40;
                WMA := 26;
              end;
          12: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 40;
                WMA := 26;
              end;
          13: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 40;
                WMA := 26;
              end;
          15: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := BowFast;
                WPA := 191;
                WMA := 54;
              end;
          16: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := BowSlow;
                WPA := 179;
                WMA := 51;
              end;
          17: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := BowFast;
                WPA := 132;
                WMA := 39;
              end;
          18: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := BowSlow;
                WPA := 114;
                WMA := 35;
              end;
          19: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := BowSlow;
                WPA := 114;
                WMA := 35;
              end;
          20: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := BowFast;
                WPA := 105;
                WMA := 32;
              end;
          21: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := BowFast;
                WPA := 105;
                WMA := 32;
              end;
          22: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := BowFast;
                WPA := 105;
                WMA := 32;
              end;
          23: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := BowFast;
                WPA := 82;
                WMA := 26;
              end;
          25: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Dagger;
                WPA := 80;
                WMA := 54;
              end;
          26: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Dagger;
                WPA := 69;
                WMA := 47;
              end;
          27: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Dagger;
                WPA := 62;
                WMA := 42;
              end;
          28: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Dagger;
                WPA := 56;
                WMA := 39;
              end;
          29: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Dagger;
                WPA := 45;
                WMA := 32;
              end;
          30: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Dagger;
                WPA := 45;
                WMA := 32;
              end;
          31: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Dagger;
                WPA := 35;
                WMA := 26;
              end;
          32: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Dagger;
                WPA := 35;
                WMA := 26;
              end;
          34: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Fist;
                WPA := 112;
                WMA := 54;
              end;
          35: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Fist;
                WPA := 96;
                WMA := 47;
              end;
          36: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Fist;
                WPA := 78;
                WMA := 39;
              end;
          37: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Fist;
                WPA := 62;
                WMA := 32;
              end;
          38: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Fist;
                WPA := 62;
                WMA := 32;
              end;
          39: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Fist;
                WPA := 49;
                WMA := 26;
              end;
          41: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 74;
                WMA := 72;
              end;
          42: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Book;
                WPA := 67;
                WMA := 66;
              end;
          43: begin
                ComboBox62.Visible := False;   // Crucifix of Blood
                IsSA := False;
                WType := Book;
                WPA := 63;
                WMA := 63;
              end;
          44: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 63;
                WMA := 63;
              end;
          45: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Book;
                WPA := 51;
                WMA := 52;
              end;
          46: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Dagger;
                WPA := 45;
                WMA := 52;
              end;
          47: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Dagger;
                WPA := 45;
                WMA := 52;
              end;
          48: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Dagger;
                WPA := 45;
                WMA := 52;
              end;
          49: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Dagger;
                WPA := 45;
                WMA := 52;
              end;
          50: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Book;
                WPA := 51;
                WMA := 52;
              end;
          51: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword;
                WPA := 43;
                WMA := 45;
              end;
          52: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword;
                WPA := 43;
                WMA := 45;
              end;
          53: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword;
                WPA := 43;
                WMA := 45;
              end;
          54: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Book;
                WPA := 41;
                WMA := 43;
              end;
          55: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 41;
                WMA := 43;
              end;
          56: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 41;
                WMA := 43;
              end;
          57: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 41;
                WMA := 43;
              end;
          58: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 41;
                WMA := 43;
              end;
          59: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt1;
                WPA := 41;
                WMA := 43;
              end;
          60: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Book;
                WPA := 41;
                WMA := 43;
              end;
          61: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Book;
                WPA := 32;
                WMA := 35;
              end;
          62: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword;
                WPA := 32;
                WMA := 35;
              end;
          63: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Book;
                WPA := 32;
                WMA := 35;
              end;
          64: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Book;
                WPA := 32;
                WMA := 35;
              end;
          65: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Book;
                WPA := 32;
                WMA := 35;
              end;
          67: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt2;
                WPA := 90;
                WMA := 72;
              end;
          68: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt2;
                WPA := 90;
                WMA := 72;
              end;
          69: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt2;
                WPA := 90;
                WMA := 72;
              end;
          70: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt2;
                WPA := 77;
                WMA := 63;
              end;
          71: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt2;
                WPA := 62;
                WMA := 52;
              end;
          72: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt2;
                WPA := 50;
                WMA := 43;
              end;
          73: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt2;
                WPA := 50;
                WMA := 43;
              end;
          74: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt2;
                WPA := 50;
                WMA := 43;
              end;
          75: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt2;
                WPA := 50;
                WMA := 43;
              end;
          76: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt2;
                WPA := 39;
                WMA := 35;
              end;
          78: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Polearm;
                WPA := 92;
                WMA := 54;
              end;
          79: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Polearm;
                WPA := 79;
                WMA := 47;
              end;
          80: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Polearm;
                WPA := 79;
                WMA := 47;
              end;
          81: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Polearm;
                WPA := 64;
                WMA := 39;
              end;
          82: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Polearm;
                WPA := 64;
                WMA := 39;
              end;
          83: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Polearm;
                WPA := 51;
                WMA := 32;
              end;
          84: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Polearm;
                WPA := 51;
                WMA := 32;
              end;
          85: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Polearm;
                WPA := 51;
                WMA := 32;
              end;
          86: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Polearm;
                WPA := 40;
                WMA := 26;
              end;
          88: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword;
                WPA := 92;
                WMA := 54;
              end;
          89: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword;
                WPA := 79;
                WMA := 47;
              end;
          90: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword;
                WPA := 64;
                WMA := 39;
              end;
          91: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword;
                WPA := 64;
                WMA := 39;
              end;
          92: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword;
                WPA := 51;
                WMA := 32;
              end;
          93: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword;
                WPA := 51;
                WMA := 32;
              end;
          94: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword;
                WPA := 51;
                WMA := 32;
              end;
          95: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword;
                WPA := 51;
                WMA := 32;
              end;
          96: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword;
                WPA := 51;
                WMA := 32;
              end;
          97: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword;
                WPA := 40;
                WMA := 26;
              end;
          99: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Blunt2;
                WPA := 96;
                WMA := 47;
              end;
         101: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword2;
                WPA := 112;
                WMA := 54;
              end;
         102: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword2;
                WPA := 96;
                WMA := 47;
              end;
         103: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword2;
                WPA := 78;
                WMA := 39;
              end;
         104: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := Sword2;
                WPA := 49;
                WMA := 26;
              end;
    106..113: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := DualSword;
                WPA := 107;
                WMA := 51;
              end;
    114..129: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := DualSword;
                WPA := 96;
                WMA := 47;
              end;
         130: begin
                ComboBox62.Visible := False;
                IsSA := False;
                WType := DualSword;
                WPA := 73;
                WMA := 37;
              end;
        end;
    6 : begin
          case ComboBox61.ItemIndex of
            0 : ComboBox62.Visible := False;
            2..12,49,51,53 : WType := Blunt1;
            14..20 : WType := BowFast;
            22..33 : WType := Dagger;
            35..43 : WType := Dagger;
            45..48,50,52 : WType := Book;
            55..62 : WType := Blunt2;
            64..67 : WType := Polearm;
            69..86 : WType := Sword;
            88..91 : WType := Sword2;
            93 : WType := DualSword;
          end;
          if ComboBox61.ItemIndex <> 0 then
            begin
              s := '';
              i := 1;
              while ComboBox61.Text[i] in ['0'..'9'] do
                begin
                  s := s + ComboBox61.Text[i];
                  Inc(i)
                end;
              WPA := StrToInt(s);
              Inc(i);
              s := '';
              while ComboBox61.Text[i] in ['0'..'9'] do
                begin
                  s := s + ComboBox61.Text[i];
                  Inc(i)
                end;
              WMA := StrToInt(s);
            end;
        end;
  end;
  if OldDuals then
    ComboBox59Change(Sender);   // заточеги
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ComboBox62Change(Sender: TObject);
begin
  if ComboBox62.ItemIndex <= 0 then
    begin
      IsSA := False;
      ReCalc;
      ReDrawStats;
      Exit
    end;
  IsSA := True;
  case ComboBox60.ItemIndex of
    1 : case ComboBox61.ItemIndex of
          1 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 265; end;
                2 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.07; end;
                3 : begin IsSA := True; WSA.SA := SA_HPDrain; WSA.Power := 0.03; end;
              end;
          2 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Acumen; end;
                2 : begin IsSA := True; WSA.SA := SA_ManaUp; end;
                3 : begin IsSA := True; WSA.SA := SA_MPRegen; end;
              end;
          3 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
                2 : begin IsSA := True; WSA.SA := SA_HPDrain; WSA.Power := 0.03; end;
                3 : begin IsSA := True; WSA.SA := SA_HPRegen; end;
             end;
          4 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritStun; WSA.Power := 0.25; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 80.6; end;
                3 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          5 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CheapShot; WSA.Power := 1; WSA.Tag := 0.26; end;
                2 : begin IsSA := True; WSA.SA := SA_CritSlow; end;
                3 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 88.1; end;
              end;
          6 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
                2 : begin IsSA := True; WSA.SA := SA_HPDrain; WSA.Power := 0.03; end;
                3 : begin IsSA := True; WSA.SA := SA_HPRegen; end;
              end;
          7 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 84.3; end;
                2 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.07; end;
                3 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          8 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 84.3; end;
                2 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.07; end;
                3 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          9 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Empower; WSA.Power := 60.09; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicHold; WSA.Power := 0.2; end;
                3 : begin IsSA := True; WSA.SA := SA_MPRegen; end;
              end;
          10: case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 5; end;
                2 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.07; end;
                3 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          11: case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_MPHPCP; end;
              end;
        end;
    2 : case ComboBox61.ItemIndex of
          1 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 38.09; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 61.6; end;
                3 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.06; end;
              end;
          2 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_BackBlowPerCent; WSA.Power := 1.37; end;
                2 : begin IsSA := True; WSA.SA := SA_CritBleed; WSA.Power := 0.12; end;
                3 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 67.3; end;
              end;
          3 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Acumen; end;
                2 : begin IsSA := True; WSA.SA := SA_Conversion; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicDamage; WSA.Power := 8; WSA.Tag := 0.3; end;
              end;
          4 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritBleed; WSA.Power := 0.35; end;
                2 : begin IsSA := True; WSA.SA := SA_Light; WSA.Power := 0.7; end;
                3 : begin IsSA := True; WSA.SA := SA_ManaUp; end;
              end;
          5 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 6.5; end;
              end;
          6 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 326.28; end;
                2 : begin IsSA := True; WSA.SA := SA_Health; end;
                3 : begin IsSA := True; WSA.SA := SA_RskFocus; WSA.Power := 130.9; end;
              end;
          7 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Acumen; end;
                2 : begin IsSA := True; WSA.SA := SA_Conversion; end;
                3 : begin IsSA := True; WSA.SA := SA_ManaUp; end;
              end;
          8 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 5.41; end;
                2 : begin IsSA := True; WSA.SA := SA_Health; end;
                3 : begin IsSA := True; WSA.SA := SA_RskEvasion; WSA.Power := 6.8; end;
              end;
          9 : case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritBleed; WSA.Power := 7; WSA.Tag := 0.24;  end;
                2 : begin IsSA := True; WSA.SA := SA_CritDrain; WSA.Power := 11; end;
                3 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          10: case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Empower; WSA.Power := 30.76; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicParalize; WSA.Power := 0.05; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicPower; WSA.Power := 153.28; end;
              end;
          11: case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 32.05; end;
                2 : begin IsSA := True; WSA.SA := SA_CritDrain; WSA.Power := 19; end;
                3 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          12: case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 297; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 61; end;
                3 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.06; end;
              end;
          13: case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritStun; WSA.Power := 0.25; end;
                2 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.06; end;
                3 : begin IsSA := True; WSA.SA := SA_WideBlow; end;
              end;
          14: case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          15: case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.08; end;
              end;
          16: case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritBleed; WSA.Power := 7; WSA.Tag := 0.42; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 61.6; end;
                3 : begin IsSA := True; WSA.SA := SA_RskHaste; WSA.Power := 1.11; end;
              end;
          17: case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CheapShot; WSA.Power := 2; WSA.Tag := 0.38 end;
                2 : begin IsSA := True; WSA.SA := SA_CritPoison; WSA.Power := 7; WSA.Tag := 0.18; end;
                3 : begin IsSA := True; WSA.SA := SA_QRecovery; WSA.Power := 0.85; end;
              end;
          18: case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 200.79; end;
                2 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 3.95; end;
                3 : begin IsSA := True; WSA.SA := SA_RskHaste; WSA.Power := 1.11; end;
              end;
          19: case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Acumen; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicPower; WSA.Power := 167.02; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicSilence; WSA.Power := 1; WSA.Tag := 0.1; end;
              end;
          20: case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 31.3; end;
                2 : begin IsSA := True; WSA.SA := SA_CritPoison; WSA.Power := 7; WSA.Tag := 0.1; end;
                3 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.06; end;
              end;
          21: case ComboBox62.ItemIndex of
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 3.95; end;
                2 : begin IsSA := True; WSA.SA := SA_Health; end;
                3 : begin IsSA := True; WSA.SA := SA_WideBlow; end;
              end;
        end;
    3 : case ComboBox61.ItemIndex of
          1 : case ComboBox62.ItemIndex of // AOBA
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.06; end;
                2 : begin IsSA := True; WSA.SA := SA_Health; end;
                3 : begin IsSA := True; WSA.SA := SA_RskFocus; WSA.Power := 99.9; end; 
              end;
          2 : case ComboBox62.ItemIndex of //  artho nail
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritPoison; WSA.Power := 6; WSA.Tag := 0.07; end;
                2 : begin IsSA := True; WSA.SA := SA_RskEvasion; WSA.Power := 6.24; end;
                3 : begin IsSA := True; WSA.SA := SA_RskHaste; WSA.Power := 1.1; end;
              end;
          3 : case ComboBox62.ItemIndex of // bellinion
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDrain; WSA.Power := 14; end;
                2 : begin IsSA := True; WSA.SA := SA_CritPoison; WSA.Power := 7; WSA.Tag := 0.06; end;
                3 : begin IsSA := True; WSA.SA := SA_RskHaste; WSA.Power := 1.09; end;
              end;
          4 : case ComboBox62.ItemIndex of // bop
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CheapShot; WSA.Power := 2; WSA.Tag := 0.42; end;
                2 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 3.95; end;
                3 : begin IsSA := True; WSA.SA := SA_QRecovery; WSA.Power := 0.87; end;
              end;
          5 : case ComboBox62.ItemIndex of // delb
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritBleed; WSA.Power := 6; WSA.Tag := 0.3; end;
                2 : begin IsSA := True; WSA.SA := SA_Evasion; WSA.Power := 2.41; end;
                3 : begin IsSA := True; WSA.SA := SA_Miser; WSA.Power := 2; WSA.Tag := 0.3; end;
              end;
          6 : case ComboBox62.ItemIndex of // deadmans glor
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 30.12; end;
                2 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.06; end;
                3 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          7 : case ComboBox62.ItemIndex of // demons sword
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritBleed; WSA.Power := 6; WSA.Tag := 0.1; end;
                2 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 159.93; end;
                3 : begin IsSA := True; WSA.SA := SA_CritPoison; WSA.Power := 6; WSA.Tag := 0.03; end;
              end;
          8 : case ComboBox62.ItemIndex of //  great axe
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 28.59; end;
                2 : begin IsSA := True; WSA.SA := SA_CritStun; WSA.Power := 0.14; end;
                3 : begin IsSA := True; WSA.SA := SA_Light; end;
              end;
          9 : case ComboBox62.ItemIndex of // great sword
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 247.98; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 68.9; end;
                3 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          10: case ComboBox62.ItemIndex of // heavy war axe
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 28.59; end;
                2 : begin IsSA := True; WSA.SA := SA_Health; end;
                3 : begin IsSA := True; WSA.SA := SA_RskFocus; WSA.Power := 107.7; end;
              end;
          11: case ComboBox62.ItemIndex of // hell knife
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_MagicRegen; WSA.Power := 999999; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicWeakness; WSA.Power := 999999; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicMS; WSA.Power := 4; end;
              end;
          12: case ComboBox62.ItemIndex of //   kesh
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_BackBlow; WSA.Power := 56; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 68.9; end;
                3 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 5.02; end;
              end;
          13: case ComboBox62.ItemIndex of //      kris
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_BackBlow; WSA.Power := 86; end;
                2 : begin IsSA := True; WSA.SA := SA_Evasion; WSA.Power := 2.41; end;
                3 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 71.9; end;
              end;
          14: case ComboBox62.ItemIndex of //   lance
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 24.77; end;
                2 : begin IsSA := True; WSA.SA := SA_CritStun; WSA.Power := 0.13; end;
                3 : begin IsSA := True; WSA.SA := SA_LongBlow; end;
              end;
          15: case ComboBox62.ItemIndex of //  sprite staff
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_MagicHold; WSA.Power := 0.1; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicRegen; WSA.Power := 3; WSA.Tag := 0.3; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicMS; WSA.Power := 4; WSA.Tag := 0.5; end;
              end;
          16: case ComboBox62.ItemIndex of //  soes
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_BodilyBlessing; WSA.Power := 5; WSA.Tag := 0.2; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicFocus; WSA.Power := 3; WSA.Tag := 0.2; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicPoison; WSA.Power := 7; WSA.Tag := 0.06; end;
              end;
          17: case ComboBox62.ItemIndex of // damascus
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 262.57; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 64.5; end;
                3 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.06; end;
              end;
          18 : case ComboBox62.ItemIndex of //  valhala
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Acumen; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicRegen; WSA.Power := 3; WSA.Tag := 0.3; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicWeakness; WSA.Power := 3; WSA.Tag := 0.07; end;
              end;
          19: case ComboBox62.ItemIndex of // sls sls
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.04; end;
              end;
          20: case ComboBox62.ItemIndex of // calib sls
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.05; end;
              end;
          21: case ComboBox62.ItemIndex of // del sls
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 133.97; end;
              end;
          22: case ComboBox62.ItemIndex of // limit sls
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 3.8; end;
              end;
          23: case ComboBox62.ItemIndex of // night sls
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          24: case ComboBox62.ItemIndex of // tsur sls
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 52.6; end;
              end;
          25: case ComboBox62.ItemIndex of //   katana sls
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 9999999; end;
              end;
          26: case ComboBox62.ItemIndex of //  raid sls
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 43.7; end;
              end;
          27: case ComboBox62.ItemIndex of //   sham sls
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 3.2; end;
              end;
          28: case ComboBox62.ItemIndex of //   spir sls
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          29: case ComboBox62.ItemIndex of //  calib calib
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 127.0; end;
              end;
          30: case ComboBox62.ItemIndex of //   calib del
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 54.0; end;
              end;
          31: case ComboBox62.ItemIndex of // calib limit
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          32: case ComboBox62.ItemIndex of // calib night
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.05; end;
              end;
          33: case ComboBox62.ItemIndex of // calib tsur
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 3.9; end;
              end;
          34: case ComboBox62.ItemIndex of // storm sls
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 3.9; end;
              end;
          35: case ComboBox62.ItemIndex of //  del del
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 3.9; end;
              end;
          36: case ComboBox62.ItemIndex of // del night
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 127.0; end;
              end;
          37: case ComboBox62.ItemIndex of // del tsur
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          38: case ComboBox62.ItemIndex of //  limit del
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          39: case ComboBox62.ItemIndex of // limit limit
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 127.0; end;
              end;
          40: case ComboBox62.ItemIndex of //  limit night
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 54.0; end;
              end;
          41: case ComboBox62.ItemIndex of // limit tsur
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.05; end;
              end;
          42: case ComboBox62.ItemIndex of // night night
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 54.0; end;
              end;
          43: case ComboBox62.ItemIndex of // night tsur
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.05; end;
              end;
          44: case ComboBox62.ItemIndex of // tsur tsur
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 54.0; end;
              end;
          45: case ComboBox62.ItemIndex of //   kat calib
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 4.8; end;
              end;
          46: case ComboBox62.ItemIndex of // katana del
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          47: case ComboBox62.ItemIndex of // katana limit
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 146.88; end;
              end;
          48: case ComboBox62.ItemIndex of // katana night
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 65.0; end;
              end;
          49: case ComboBox62.ItemIndex of //  kat tsur
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.06; end;
              end;
          50: case ComboBox62.ItemIndex of // raid calib
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 4.8; end;
              end;
          51: case ComboBox62.ItemIndex of //  raid del
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          52: case ComboBox62.ItemIndex of // raid limit
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 146.88; end;
              end;
          53: case ComboBox62.ItemIndex of // raid night
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 65.0; end;
              end;
          54: case ComboBox62.ItemIndex of //    raid tsur
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.06; end;
              end;
          55: case ComboBox62.ItemIndex of //    sham calib
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 4.80; end;
              end;
          56: case ComboBox62.ItemIndex of //    sham del
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          57: case ComboBox62.ItemIndex of // sham limit
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 146.88; end;
              end;
          58: case ComboBox62.ItemIndex of //    sham night
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 65.0; end;
              end;
          59: case ComboBox62.ItemIndex of //  sham tsur
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.06; end;
              end;
          60: case ComboBox62.ItemIndex of // spir calib
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 4.80; end;
              end;
          61: case ComboBox62.ItemIndex of // spir del
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          62: case ComboBox62.ItemIndex of // spir limit
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 146.88; end;
              end;
          63: case ComboBox62.ItemIndex of // spir night
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 65.0; end;
              end;
          64: case ComboBox62.ItemIndex of // spir tsur
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.06; end;
              end;
          65: case ComboBox62.ItemIndex of // storm calib
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 5.7; end;
              end;
          66: case ComboBox62.ItemIndex of //   storm del
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          67: case ComboBox62.ItemIndex of // storm limit
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 166.26; end;
              end;
          68: case ComboBox62.ItemIndex of // storm night
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 76.6; end;
              end;
          69: case ComboBox62.ItemIndex of //  storm tsur
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.07; end;
              end;
        end;
    4 : case ComboBox61.ItemIndex of
          2 : case ComboBox62.ItemIndex of //  yaksa
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 26.78; end;
                2 : begin IsSA := True; WSA.SA := SA_Health; end;
                3 : begin IsSA := True; WSA.SA := SA_RskFocus; WSA.Power := 115.4; end;
              end;
          3 : case ComboBox62.ItemIndex of // war axe
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 24.77; end;
                2 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.07; end;
                3 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          4 : case ComboBox62.ItemIndex of // dwarven war ham
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 22.64; end;
                2 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.07; end;
                3 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          5 : case ComboBox62.ItemIndex of // batle axe
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 20.44; end;
                2 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.08; end;
                3 : begin IsSA := True; WSA.SA := SA_RskFocus; WSA.Power := 138.7; end;
              end;
          6 : case ComboBox62.ItemIndex of // big hammer
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 20.44; end;
                2 : begin IsSA := True; WSA.SA := SA_Health; end;
                3 : begin IsSA := True; WSA.SA := SA_RskFocus; WSA.Power := 138.7; end;
              end;
          7 : case ComboBox62.ItemIndex of //  silver axe
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 20.44; end;
                2 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.08; end;
                3 : begin IsSA := True; WSA.SA := SA_RskFocus; WSA.Power := 138.7; end;
              end;
          8 : case ComboBox62.ItemIndex of //    skull graver
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 20.44; end;
                2 : begin IsSA := True; WSA.SA := SA_Health; end;
                3 : begin IsSA := True; WSA.SA := SA_RskFocus; WSA.Power := 138.7; end;
              end;
          10: case ComboBox62.ItemIndex of // emik
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CheapShot; WSA.Power := 1; WSA.Tag := 0.34; end;
                2 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 4.53; end;
                3 : begin IsSA := True; WSA.SA := SA_Miser; WSA.Power := 9; WSA.Tag := 0.3; end;
              end;
          11: case ComboBox62.ItemIndex of // akat
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Evasion; WSA.Power := 2.68; end;
                2 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 4.82; end;
                3 : begin IsSA := True; WSA.SA := SA_Miser; WSA.Power := 8; WSA.Tag := 0.3; end;
              end;
          12: case ComboBox62.ItemIndex of //  elemental bow
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 5.12; end;
                2 : begin IsSA := True; WSA.SA := SA_Miser; WSA.Power := 7; WSA.Tag := 0.3; end;
                3 : begin IsSA := True; WSA.SA := SA_QRecovery; WSA.Power := 0.78; end;
              end;
          13: case ComboBox62.ItemIndex of //   noble elven bow
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CheapShot; WSA.Power := 2; WSA.Tag := 0.46; end;
                2 : begin IsSA := True; WSA.SA := SA_Evasion; WSA.Power := 2.82; end;
                3 : begin IsSA := True; WSA.SA := SA_Miser; WSA.Power := 7; WSA.Tag := 0.3; end;
              end;
          14: case ComboBox62.ItemIndex of // crystalize bow
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Evasion; WSA.Power := 2.95; end;
                2 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 5.42; end;
                3 : begin IsSA := True; WSA.SA := SA_QRecovery; WSA.Power := 0.83; end;
              end;
          16: case ComboBox62.ItemIndex of // crystal dager
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritBleed; WSA.Power := 6; WSA.Tag := 0.1; end;
                2 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 140.87; end;
                3 : begin IsSA := True; WSA.SA := SA_CritPoison; WSA.Power := 6; WSA.Tag := 0.03; end;
              end;
          17: case ComboBox62.ItemIndex of // dark scremer
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritBleed; WSA.Power := 6; WSA.Tag := 0.1; end;
                2 : begin IsSA := True; WSA.SA := SA_Evasion; WSA.Power := 2.68; end;
                3 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 81.2; end;
              end;
          18: case ComboBox62.ItemIndex of //  grace dagger
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_BackBlow; WSA.Power := 97; end;
                2 : begin IsSA := True; WSA.SA := SA_Evasion; WSA.Power := 2.68; end;
                3 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 81.2; end;
              end;
          19: case ComboBox62.ItemIndex of //        siletto
                0 : IsSA := False;
{                1 : begin IsSA := True; WSA.SA := SA_CritBleed; WSA.Power := ; end;
                2 : begin IsSA := True; WSA.SA := SA_CritPoison; WSA.Power := ; end;}
                3 : begin IsSA := True; WSA.SA := SA_RskHaste; WSA.Power := 1.12; end;
              end;
          20: case ComboBox62.ItemIndex of //  cursed dagger
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritBleed; WSA.Power := 5; WSA.Tag := 0.12; end;
                2 : begin IsSA := True; WSA.SA := SA_CritPoison; WSA.Power := 5; WSA.Tag := 0.04; end;
                3 : begin IsSA := True; WSA.SA := SA_RskHaste; WSA.Power := 1.13; end;
              end;
          21: case ComboBox62.ItemIndex of //     dark elv dagger
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_BackBlow; WSA.Power := 109; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 90.5; end;
                3 : begin IsSA := True; WSA.SA := SA_RskHaste; WSA.Power := 1.13; end;
              end;
          23: case ComboBox62.ItemIndex of // great pata
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDrain; WSA.Power := 10; end;
                2 : begin IsSA := True; WSA.SA := SA_CritPoison; WSA.Power := 6; WSA.Tag := 0.07; end;
                3 : begin IsSA := True; WSA.SA := SA_RskHaste; WSA.Power := 1.11; end;
              end;
          24: case ComboBox62.ItemIndex of // fist blade
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.07; end;
                2 : begin IsSA := True; WSA.SA := SA_RskEvasion; WSA.Power := 6.95; end;
                3 : begin IsSA := True; WSA.SA := SA_RskHaste; WSA.Power := 1.12; end;
              end;
          25: case ComboBox62.ItemIndex of // kunckle duster
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.07; end;
                2 : begin IsSA := True; WSA.SA := SA_RskEvasion; WSA.Power := 7.29; end;
                3 : begin IsSA := True; WSA.SA := SA_RskHaste; WSA.Power := 1.12; end;
              end;
          26: case ComboBox62.ItemIndex of // charkasm
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDrain; WSA.Power := 6; end;
                2 : begin IsSA := True; WSA.SA := SA_CritPoison; WSA.Power := 5; WSA.Tag := 0.08; end;
                3 : begin IsSA := True; WSA.SA := SA_RskHaste; WSA.Power := 1.13; end;
              end;
          28: case ComboBox62.ItemIndex of // ecliptic axe
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Conversion; end;
{                2 : begin IsSA := True; WSA.SA := SA_MagicHold; WSA.Power := ; end;}
                3 : begin IsSA := True; WSA.SA := SA_MagicPower; WSA.Power := 112; end;
              end;
          29: case ComboBox62.ItemIndex of //        ecliptic sword
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Empower; WSA.Power := 26; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicPower; WSA.Power := 112; end;
//                3 : begin IsSA := True; WSA.SA := SA_MagicSilence; WSA.Power := ; end;
              end;
          30: case ComboBox62.ItemIndex of //     club of nature
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Acumen; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicHold; WSA.Power := 1; WSA.Tag := 0.1; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicMS; WSA.Power := 3; WSA.Tag := 0.5; end;
              end;
          32: case ComboBox62.ItemIndex of //  homka
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Acumen; end;
                2 : begin IsSA := True; WSA.SA := SA_Conversion;  end;
                3 : begin IsSA := True; WSA.SA := SA_MagicParalize; WSA.Power := 1; WSA.Tag := 0.05; end;
              end;
          33: case ComboBox62.ItemIndex of //  mace of under
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Conversion;  end;
                2 : begin IsSA := True; WSA.SA := SA_MagicSilence; WSA.Power := 1; WSA.Tag := 0.1; end;
                3 : begin IsSA := True; WSA.SA := SA_ManaUp; end;
              end;
          34: case ComboBox62.ItemIndex of //   nirvana axe
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_MagicPoison; WSA.Power := 7; WSA.Tag := 0.07; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicPower; WSA.Power := 99.39; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicWeakness; WSA.Power := 3; WSA.Tag := 0.07; end;
              end;
          35: case ComboBox62.ItemIndex of //  stick of etermity
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_BodilyBlessing; WSA.Power := 3; WSA.Tag := 0.2; end;
                2 : begin IsSA := True; WSA.SA := SA_Empower; WSA.Power := 24.59; end;
                3 : begin IsSA := True; WSA.SA := SA_RskEvasion; WSA.Power := 6.95; end;
              end;
          36: case ComboBox62.ItemIndex of //  sowd
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Empower; WSA.Power := 24.59; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicPower; WSA.Power := 99.39; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicSilence; WSA.Power := 1; WSA.Tag := 0.1; end;
              end;
          38: case ComboBox62.ItemIndex of // soulfire dirk
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_MagicHold; WSA.Power := 1; WSA.Tag := 0.1; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicSilence; WSA.Power := 1; WSA.Tag := 0.1; end;
                3 : begin IsSA := True; WSA.SA := SA_ManaUp; end;
              end;
          39: case ComboBox62.ItemIndex of //  mysterious sword
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Acumen; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicPower; WSA.Power := 75; end;
//                3 : begin IsSA := True; WSA.SA := SA_MagicWeakness; WSA.Power := ; end;
              end;
          40: case ComboBox62.ItemIndex of // stick of earth
                0 : IsSA := False;
{                1 : begin IsSA := True; WSA.SA := SA_MagicHold; WSA.Power := ; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicRegen; WSA.Power := ; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicMS; WSA.Power := ; end;}
              end;
          42: case ComboBox62.ItemIndex of // deadmans staff
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_MagicHold; WSA.Power := 1; WSA.Tag := 0.1; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicRegen; WSA.Power := 2; WSA.Tag := 0.3; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicMS; WSA.Power := 3; WSA.Tag := 0.5; end;
              end;
          43: case ComboBox62.ItemIndex of //  demons staff
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_MagicChaos; WSA.Power := 3; WSA.Tag := 0.07; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicPoison; WSA.Power := 7; WSA.Tag := 0.07; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicWeakness; WSA.Power := 3; WSA.Tag := 0.07; end;
              end;
          44: case ComboBox62.ItemIndex of //    ghoul staff
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_BodilyBlessing; WSA.Power := 4; WSA.Tag := 0.2; end;
                2 : begin IsSA := True; WSA.SA := SA_ManaUp; end;
                3 : begin IsSA := True; WSA.SA := SA_RskEvasion; WSA.Power := 6.60; end;
              end;
          45: case ComboBox62.ItemIndex of //        paagrio axe
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_MagicChaos; WSA.Power := 3; WSA.Tag := 0.07; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicWeakness; WSA.Power := 3; WSA.Tag := 0.07; end;
                3 : begin IsSA := True; WSA.SA := SA_ManaUp; end;
              end;
          46: case ComboBox62.ItemIndex of //      paagrio hammer
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_MagicPoison; WSA.Power := 7; WSA.Tag := 0.07; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicWeakness; WSA.Power := 3; WSA.Tag := 0.07; end;
                3 : begin IsSA := True; WSA.SA := SA_RskEvasion; WSA.Power := 6.95; end;
              end;
          47: case ComboBox62.ItemIndex of // paradia staff
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_MagicHold; WSA.Power := 1; WSA.Tag := 0.1; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicRegen; WSA.Power := 3; WSA.Tag := 0.3; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicMS; WSA.Power := 3; WSA.Tag := 0.5; end;
              end;
          48: case ComboBox62.ItemIndex of //  sages staff
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_MagicHold; WSA.Power := 1; WSA.Tag := 0.1; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicPoison; WSA.Power := 7; WSA.Tag := 0.07; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicWeakness; WSA.Power := 3; WSA.Tag := 0.07; end;
              end;
          49: case ComboBox62.ItemIndex of //   cursed staff
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_MagicHold; WSA.Power := 1; WSA.Tag := 0.1; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicPoison; WSA.Power := 7; WSA.Tag := 0.08; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicWeakness; WSA.Power := 3; WSA.Tag := 0.08; end;
              end;
          50: case ComboBox62.ItemIndex of // crystal staff
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_BodilyBlessing; WSA.Power := 2; WSA.Tag := 0.2; end;
                2 : begin IsSA := True; WSA.SA := SA_ManaUp; end;
                3 : begin IsSA := True; WSA.SA := SA_RskEvasion; WSA.Power := 7.63; end;
              end;
          51: case ComboBox62.ItemIndex of // heavy doom axe
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_MagicChaos; WSA.Power := 3; WSA.Tag := 0.08; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicPoison; WSA.Power := 7; WSA.Tag := 0.08; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicWeakness; WSA.Power := 3; WSA.Tag := 0.08; end;
              end;
          52: case ComboBox62.ItemIndex of // heavy doom hammer
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_MagicHold; WSA.Power := 1; WSA.Tag := 0.1; end;
                2 : begin IsSA := True; WSA.SA := SA_MagicRegen; WSA.Power := 1; WSA.Tag := 0.3; end;
                3 : begin IsSA := True; WSA.SA := SA_MagicMS; WSA.Power := 2; WSA.Tag := 0.5; end;
              end;
          54: case ComboBox62.ItemIndex of // orcish poleaxe
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritStun; WSA.Power := 0.15; end;
                2 : begin IsSA := True; WSA.SA := SA_LongBlow; end;
                3 : begin IsSA := True; WSA.SA := SA_WideBlow; end;
              end;
          55: case ComboBox62.ItemIndex of //   scoprpion
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 24.77; end;
                2 : begin IsSA := True; WSA.SA := SA_CritStun; WSA.Power := 0.16; end;
                3 : begin IsSA := True; WSA.SA := SA_LongBlow; end;
              end;
          56: case ComboBox62.ItemIndex of //  widow maker
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritStun; WSA.Power := 0.16; end;
                2 : begin IsSA := True; WSA.SA := SA_LongBlow; end;
                3 : begin IsSA := True; WSA.SA := SA_WideBlow; end;
              end;
          57: case ComboBox62.ItemIndex of //   poleaxe
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritStun; WSA.Power := 0.25; end;
                2 : begin IsSA := True; WSA.SA := SA_LongBlow; end;
                3 : begin IsSA := True; WSA.SA := SA_WideBlow; end;
              end;
          58: case ComboBox62.ItemIndex of // bec de corbin
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritStun; WSA.Power := 0.17; end;
                2 : begin IsSA := True; WSA.SA := SA_Light; end;
                3 : begin IsSA := True; WSA.SA := SA_LongBlow; end;
              end;
          59: case ComboBox62.ItemIndex of // body slasher
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritStun; WSA.Power := 0.18; end;
                2 : begin IsSA := True; WSA.SA := SA_LongBlow; end;
                3 : begin IsSA := True; WSA.SA := SA_WideBlow; end;
              end;
          60: case ComboBox62.ItemIndex of // orcish glaive
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 20.44; end;
                2 : begin IsSA := True; WSA.SA := SA_CritStun; end;
                3 : begin IsSA := True; WSA.SA := SA_LongBlow; end;
              end;
          61: case ComboBox62.ItemIndex of //   scythe
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Anger; WSA.Power := 24.77; end;
                2 : begin IsSA := True; WSA.SA := SA_CritStun; WSA.Power := 0.18; end;
                3 : begin IsSA := True; WSA.SA := SA_Light; end;
              end;
          63: case ComboBox62.ItemIndex of //    sls
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 231.29; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 73.3; end;
                3 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.07; end;
              end;
          64: case ComboBox62.ItemIndex of //  calib
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 213.12; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 77.8; end;
                3 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 5.72; end;
              end;
          65: case ComboBox62.ItemIndex of // deluga
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 77.8; end;
                2 : begin IsSA := True; WSA.SA := SA_Health; end;
                3 : begin IsSA := True; WSA.SA := SA_RskHaste; WSA.Power := 1.12; end;
              end;
          66: case ComboBox62.ItemIndex of //  limit
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDrain; WSA.Power := 9; end;
                2 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 5.72; end;
                3 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          67: case ComboBox62.ItemIndex of // night
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 77.8; end;
                2 : begin IsSA := True; WSA.SA := SA_Health; end;
                3 : begin IsSA := True; WSA.SA := SA_Light; end;
              end;
          68: case ComboBox62.ItemIndex of //   tsur
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 213.12; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 77.8; end;
                3 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.07; end;
              end;
          69: case ComboBox62.ItemIndex of //    katana
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 194.10; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 82.2; end;
                3 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.07; end;
              end;
          70: case ComboBox62.ItemIndex of // raid
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDrain; WSA.Power := 9; end;
                2 : begin IsSA := True; WSA.SA := SA_CritPoison; WSA.Power := 5; WSA.Tag := 0.15; end;
                3 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 82.2; end;
              end;
          71: case ComboBox62.ItemIndex of // sham
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_BackBlow; WSA.Power := 67; end;
                2 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 6.07; end;
                3 : begin IsSA := True; WSA.SA := SA_RskEvasion; WSA.Power := 7.29; end;
              end;
          72: case ComboBox62.ItemIndex of //  spirit
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 194.10; end;
                2 : begin IsSA := True; WSA.SA := SA_CritPoison; WSA.Power := 5; WSA.Tag := 0.15; end;
                3 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.07; end;
              end;
          73: case ComboBox62.ItemIndex of // storm
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritAnger; WSA.Power := 248.56; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 86.7; end;
                3 : begin IsSA := True; WSA.SA := SA_Light; end;
              end;
          75: case ComboBox62.ItemIndex of //  bers blade
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 269.91; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 73.3; end;
                3 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.07; end;
              end;
          76: case ComboBox62.ItemIndex of //  paagrian sword
                0 : IsSA := False;
//                1 : begin IsSA := True; WSA.SA := SA_CritDrain; WSA.Power := ; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 77; end;
                3 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          77: case ComboBox62.ItemIndex of // flamberge
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 174.78; end;
                2 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 86.7; end;
                3 : begin IsSA := True; WSA.SA := SA_Light; end;
              end;
          79: case ComboBox62.ItemIndex of // kAT KAT
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.04; end;
              end;
          80: case ComboBox62.ItemIndex of // kat raid
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 84.11; end;
              end;
          81: case ComboBox62.ItemIndex of // kat spirit
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 2.90; end;
              end;
          82: case ComboBox62.ItemIndex of // raid raid
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.04; end;
              end;
          83: case ComboBox62.ItemIndex of // sham kat
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 84.11; end;
              end;
          84: case ComboBox62.ItemIndex of // sham raid
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 40.4; end;
              end;
          85: case ComboBox62.ItemIndex of // sham sham
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 2.90; end;
              end;
          86: case ComboBox62.ItemIndex of // sham spirit
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          87: case ComboBox62.ItemIndex of // spirit raid
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 40.4; end;
              end;
          88: case ComboBox62.ItemIndex of // spir spir
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          89: case ComboBox62.ItemIndex of //  storm kat
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
          90: case ComboBox62.ItemIndex of // storm raid
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.02; end;
              end;
          91: case ComboBox62.ItemIndex of // storm sham
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 49.42; end;
              end;
          92: case ComboBox62.ItemIndex of // storm spir
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 24.8; end;
              end;
          93: case ComboBox62.ItemIndex of // storm storm
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 2.20; end;
              end;
          94: case ComboBox62.ItemIndex of // els els
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Haste; WSA.Power := 1.04; end;
              end;
          95: case ComboBox62.ItemIndex of // revol els
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Focus; WSA.Power := 50.4; end;
              end;
          96: case ComboBox62.ItemIndex of // crim els
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Guidance; WSA.Power := 2.80; end;
              end;
          97: case ComboBox62.ItemIndex of //  es els
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_CritDamage; WSA.Power := 61.40; end;
              end;
          98: case ComboBox62.ItemIndex of //revol revol
                0 : IsSA := False;
                1 : begin IsSA := True; WSA.SA := SA_Health; end;
              end;
        end;
  end;
  ComboBox59Change(Sender);
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.FormShow(Sender: TObject);
begin
  Lvl := 1;
  BodyU := Non;
  BodyL := Non;
  OldDuals := False;
  AugCB[1] := Aug1;
  AugCB[2] := Aug2;
  AugCB[3] := Aug3;
  AugCB[4] := Aug4;
  ComboBox6Change(Sender);
  ComboBox1Change(Sender);
  ComboBox65Change(Sender);
  ComboBox68Change(Sender);
  ComboBox71Change(Sender);
  ComboBox74Change(Sender);
  ComboBox77Change(Sender);
  ComboBox80Change(Sender);
  ComboBox84Change(Sender);
  ComboBox87Change(Sender);
  ComboBox90Change(Sender);
  ComboBox94Change(Sender);
  ComboBox95Change(Sender);
  ComboBox67.Items := ComboBox64.Items;
  ComboBox67.ItemIndex := 0;
  ComboBox70.Items := ComboBox64.Items;
  ComboBox70.ItemIndex := 0;
  ComboBox73.Items := ComboBox64.Items;
  ComboBox73.ItemIndex := 0;
  ComboBox76.Items := ComboBox64.Items;
  ComboBox76.ItemIndex := 0;
  ComboBox79.Items := ComboBox64.Items;
  ComboBox79.ItemIndex := 0;
  ComboBox83.Items := ComboBox64.Items;
  ComboBox83.ItemIndex := 0;
  ComboBox86.Items := ComboBox64.Items;
  ComboBox86.ItemIndex := 0;
  ComboBox91.Items := ComboBox64.Items;
  ComboBox91.ItemIndex := 0;
  ComboBox92.Items := ComboBox64.Items;
  ComboBox92.ItemIndex := 0;
  ComboBox93.Items := ComboBox64.Items;
  ComboBox93.ItemIndex := 0;
  Jewelry;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsTatoo1Click(Sender: TObject);
begin
  ComboBox2.Enabled := IsTatoo1.Checked;
  ComboBox98.Enabled := IsTatoo1.Checked;
  ComboBox99.Enabled := IsTatoo1.Checked;
  ComboBox100.Enabled := IsTatoo1.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsTatoo2Click(Sender: TObject);
begin
  ComboBox4.Enabled := IsTatoo2.Checked;
  ComboBox5.Enabled := IsTatoo2.Checked;
  ComboBox101.Enabled := IsTatoo2.Checked;
  ComboBox102.Enabled := IsTatoo2.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsTatoo3Click(Sender: TObject);
begin
  ComboBox103.Enabled := IsTatoo3.Checked;
  ComboBox104.Enabled := IsTatoo3.Checked;
  ComboBox105.Enabled := IsTatoo3.Checked;
  ComboBox106.Enabled := IsTatoo3.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsConcentrationClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.CalcCastSpeed;
var
  FSC : Extended;
  AM : Extended;
  WB : Extended;
  AB : Extended;
  JB : Extended;
  B : Extended;
  WP : Extended;
  HerBers : Extended;
begin
  case WIT + Set_WIT + tWIT of
     1 : _Wit := 0.40;
     2 : _Wit := 0.42;
     3 : _Wit := 0.44;
     4 : _Wit := 0.46;
     5 : _Wit := 0.48;
     6 : _Wit := 0.51;
     7 : _Wit := 0.53;
     8 : _Wit := 0.56;
     9 : _Wit := 0.58;
    10 : _Wit := 0.61;
    11 : _Wit := 0.64;
    12 : _Wit := 0.68;
    13 : _Wit := 0.72;
    14 : _Wit := 0.75;
    15 : _Wit := 0.78;
    16 : _Wit := 0.82;
    17 : _Wit := 0.86;
    18 : _Wit := 0.91;
    19 : _Wit := 0.95;
    20 : _Wit := 1.00;
    21 : _Wit := 1.05;
    22 : _Wit := 1.10;
    23 : _Wit := 1.16;
    24 : _Wit := 1.22;
    25 : _Wit := 1.28;
    26 : _Wit := 1.34;
    27 : _Wit := 1.41;
    28 : _Wit := 1.48;
    29 : _Wit := 1.55;
    30 : _Wit := 1.63;
    31 : _Wit := 1.71;
  end;
  FSC := 1;
  if IsFastSpellCasting.Checked and IsFastSpellCasting.Visible then
    case FastSpellCasting.ItemIndex of
      0 : FSC := 1.05;
      1 : FSC := 1.07;
      2 : FSC := 1.1;
    end;  
  AM := 1;
  if Mystic or Buffer then
    begin
      if ((BodyU = Robe) and (BodyL = Robe)) or (BodyU = RFull) then
        AM := 1
      else
        AM := 0.5;  
      if (((BodyU = Light) and (BodyL = Light)) or (BodyU = LFull)) and (IsLgArmorMastery.Checked and IsLgArmorMastery.Visible) then
        begin
          if (Buffer and not OrcMystic) or (ComboBox1.ItemIndex = 6) or (ComboBox1.ItemIndex = 18) or (ComboBox1.ItemIndex = 43) then
            AM := 0.955;
          if OrcMystic then
            AM := 0.950;
          if Summoner then
            AM := 0.94;
        end;
      if (((BodyU = Heavy) and (BodyL = Heavy)) or (BodyU = HFull)) and (IsHvArmorMastery.Checked and IsHvArmorMastery.Visible) then
        begin
          if Buffer and not OrcMystic then
            AM := 0.84;
          if OrcMystic then
            AM := 0.855;  
        end;
    end;
  WB := 1;
  if IsSA and ((WSA.SA = SA_Acumen) or (WSA.SA = SA_Rod)) then
    WB := 1.15;
  AB := 1;
  case CurS of
    Devotion,Karmian,Ava_robe,BW_Light,DC_Robe,Tal_Robe,Maj_Rob : AB := 1.15;
  end;  
  JB := 1;
  if J_Baium then
    JB := 1.04;
  B := 1;
  WP := 1;
  HerBers := 0;
  if IsAcumen.Checked then
    case AcumenLvl.ItemIndex of
      0 : B := B*1.15;
      1 : B := B*1.23;
      2 : B := B*1.3;
    end;
  if IsConcentration.Checked then
    B := B*1.3;
  if IsBers.Checked then
    case BersLvl.ItemIndex of
      0 : B := B*1.05;
      1 : B := B*1.08;
    end;
  if IsProphecy.Checked then
    case ProphecyLvl.ItemIndex of
      0,2 : B := B*1.2;
    end;
  if IsArcaneAgility.Checked and IsArcaneAgility.Visible then
    B := B*1.2;
  if IsArcaneWisdom.Checked and IsArcaneWisdom.Visible then
    B := B*0.9;
  CS := 333*_Wit*FSC*AM*AB*WB*JB*B*WP + HerBers;
end;

procedure TForm1.CalcPAtk;
const
  WMF : array [1..3] of Extended =
    (2.0,3.0,4.0);
  WMM : array [1..42] of Extended =
    (1.5,2.8,4.5,5.7,6.7,8.3,9.5,11.6,13.3,16.0,17.0,18.1,20.4,21.6,22.8,25.5,26.9,28.3,31.4,33.0,
     34.6,38.0,39.8,41.7,43.5,45.4,47.4,49.4,51.4,53.5,55.6,57.7,59.8,62.0,64.1,66.3,68.5,70.7,72.9,75.1,77.2,79.4);
  Warr : array [1..45] of Extended =
    (4.5,7.3,8.9,10.7,12.8,15.1,17.7,20.5,23.7,25.4,27.1,29.0,30.9,32.9,35.0,37.1,39.4,41.7,44.1,
     46.6,49.2,51.9,54.9,57.5,60.4,63.3,66.4,69.5,72.7,76.0,79.3,82.7,86.1,89.6,93.1,96.6,100.2,
     103.8,107.5,111.1,114.8,118.4,122.1,125.7,129.3);
  SwB : array [1..45] of Extended =
    (1.5,3.1,4.1,5.2,6.5,7.9,9.4,11.1,13.0,14.0,15.1,16.2,17.3,18.5,19.8,21.1,22.4,23.8,25.3,26.8,
     28.3,29.9,31.6,33.3,35.0,36.8,38.6,40.5,42.4,44.4,46.4,48.4,50.4,52.5,54.6,56.8,58.9,61.1,63.3,
     65.5,67.6,69.8,72.0,74.2,76.4);
  Dag : array [1..45] of Extended =
    (3.6,6.0,7.4,9.0,10.8,12.8,15.1,17.6,20.3,21.8,23.4,25.0,26.6,28.4,30.2,32.1,34.1,36.1,38.2,
     40.4,42.7,45.0,47.4,49.9,52.4,55.0,57.7,60.4,63.2,66.1,69.0,71.9,74.9,78.0,81.1,84.2,87.3,90.5,
     93.7,96.8,100.0,103.2,106.4,109.6,112.8);
  _Bow : array [1..52] of Extended =
    (10.3,11.4,27.6,32.8,35.6,38.6,45.2,48.9,52.7,61.1,65.6,70.4,80.9,86.5,92.4,105.1,111.9,178.8,
     189.9,201.4,213.5,226.0,239.1,252.7,266.7,281.3,296.4,311.9,328.0,344.5,361.6,379.1,397.0,
     415.4,434.3,453.5,473.2,493.1,513.5,534.2,555.1,576.3,597.8,619.4,641.2,663.1,685.0,707.1,729.1,751.0,772.9,794.6);
  Dual : array [1..37] of Extended =
    (23.7,25.4,27.1,29.0,30.9,32.9,35.0,37.1,39.4,41.7,44.1,46.6,49.2,51.9,54.6,57.5,60.4,63.3,66.4,
     69.5,72.7,76.0,79.3,82.7,86.1,89.6,93.1,96.6,100.2,103.8,107.5,111.1,114.8,118.4,122.1,125.7,129.3);
  _2H : array [1..20] of Extended =
    (4.5,7.3,10.7,15.1,20.5,27.1,32.9,39.4,46.6,54.6,63.3,72.7,79.3,86.1,93.1,100.2,107.5,114.8,122.1,129.3);
var
  LM,MM,AB,JB,B1,B2,WM,WB : Extended;
  WMlvl : Integer;
begin
  case STR + Set_STR + tSTR of
    1 : _Str := 0.30;
    2 : _Str := 0.31;
    3 : _Str := 0.32;
    4 : _Str := 0.34;
    5 : _Str := 0.35;
    6 : _Str := 0.36;
    7 : _Str := 0.37;
    8 : _Str := 0.39;
    9 : _Str := 0.40;
   10 : _Str := 0.42;
   11 : _Str := 0.43;
   12 : _Str := 0.45;
   13 : _Str := 0.46;
   14 : _Str := 0.48;
   15 : _Str := 0.50;
   16 : _Str := 0.51;
   17 : _Str := 0.53;
   18 : _Str := 0.55;
   19 : _Str := 0.57;
   20 : _Str := 0.59;
   21 : _Str := 0.61;
   22 : _Str := 0.63;
   23 : _Str := 0.66;
   24 : _Str := 0.68;
   25 : _Str := 0.71;
   26 : _Str := 0.73;
   27 : _Str := 0.76;
   28 : _Str := 0.78;
   29 : _Str := 0.81;
   30 : _Str := 0.84;
   31 : _Str := 0.87;
   32 : _Str := 0.90;
   33 : _Str := 0.94;
   34 : _Str := 0.97;
   35 : _Str := 1.01;
   36 : _Str := 1.04;
   37 : _Str := 1.08;
   38 : _Str := 1.12;
   39 : _Str := 1.16;
   40 : _Str := 1.20;
   41 : _Str := 1.24;
   42 : _Str := 1.29;
   43 : _Str := 1.33;
   44 : _Str := 1.38;
   45 : _Str := 1.43;
   46 : _Str := 1.48;
   47 : _Str := 1.54;
   48 : _Str := 1.59;
   49 : _Str := 1.65;
   50 : _Str := 1.71;
  end;
  LM := (Lvl + 89)/100;
  MM := 1;
  if IsWeaponMastery.Visible and IsWeaponMastery.Checked then
    if Fighter then
      MM := 1.085
    else
      MM := 1.450;
  AB := 1;
  case CurS of
    Doom_Light : AB := 1.027;
    Night_Heavy,Night_Heavy_WS,Maj_Heavy,DC_Light,Drac : AB := 1.04;
    Maj_Light : if (WType = BowFast) or (WType = BowSlow) then
                  AB := 1.08;
  end;
  JB := 1;
  if J_Valakas then
    JB := 1.04;
  B1 := 1;
  if IsBers.Checked then
    case BersLvl.ItemIndex of
      0 : B1 := B1*1.05;
      1 : B1 := B1*1.08;
    end;
  if IsMight.Checked then
    case MightLvl.ItemIndex of
      0 : B1 := B1*1.08;
      1 : B1 := B1*1.12;
      2 : B1 := B1*1.15;
    end;
  if IsAttackAura.Visible and IsAttackAura.Checked then
    case AttackAura.ItemIndex of
      0 : B1 := B1*1.08;
      1 : B1 := B1*1.12;
    end;
  if IsWarrior.Checked then
    B1 := B1*1.12;
  if IsGrMight.Checked then
    case MightLvl.ItemIndex of
      0 : B1 := B1*1.04;
      1 : B1 := B1*1.07;
      2 : B1 := B1*1.10;
    end;
  if IsProphecy.Checked then
    case ProphecyLvl.ItemIndex of
      0,1 : B1 := B1*1.1;
    end;
  if IsFrenzy.Visible and IsFrenzy.Checked then
    case Frenzy.ItemIndex of
      0 : case WType of
            Sword2,Blunt2 : B1 := B1*2.5026;
            Sword,Blunt1,Polearm : B1 := B1*2.00;
          else
            B1 := B1*1.3;
          end;
      1 : case WType of
            Sword2,Blunt2 : B1 := B1*2.9955;
            Sword,Blunt1,Polearm : B1 := B1*2.4976;
          else
            B1 := B1*1.3;
          end;
      2 : case WType of
            Sword2,Blunt2 : B1 := B1*4.0195;
            Sword,Blunt1,Polearm : B1 := B1*3.4638;
          else
            B1 := B1*1.5;
          end;
    end;
  if IsRage.Visible and IsRage.Checked then
    case Rage.ItemIndex of
      0 : case WType of
            Sword2,Blunt2 : B1 := B1*1.5536;
            Sword,Blunt1,Polearm : B1 := B1*1.4520;
          else
            B1 := B1*1.2;
          end;
      1 : case WType of
            Sword2,Blunt2 : B1 := B1*1.64085;
            Sword,Blunt1,Polearm : B1 := B1*1.5486;
          else
            B1 := B1*1.2;
          end;
    end;
  if IsWarCry.Visible and IsWarCry.Checked then
    case WarCry.ItemIndex of
      0 : B1 := B1*1.2;
      1 : B1 := B1*1.25;
    end;
  WM := 0;
  if IsWeaponMastery.Visible and IsWeaponMastery.Checked then
    begin
      WMlvl := WeaponMastery.ItemIndex + 1;
      if not Fighter then
        WM := WM + WMM[WMlvl]
      else
        WM := WM + WMF[WMlvl]
    end;
  if IsDaggerMastery.Visible and IsDaggerMastery.Checked then
    begin
      WMlvl := DaggerMastery.ItemIndex + 1;
      if WType = Dagger then
        WM := WM + Dag[WMlvl]
    end;
  if IsBowMastery.Visible and IsBowMastery.Checked then
    begin
      WMlvl := BowMastery.ItemIndex + 1;
      if (WType = BowFast) or (WType = BowSlow) then
        WM := WM + _Bow[WMlvl]
    end;
  if IsDualSwordMastery.Visible and IsDualSwordMastery.Checked then
    begin
      WMlvl := DualSwordMastery.ItemIndex + 1;
      if WType = DualSword then
        WM := WM + Dual[WMlvl]
    end;
  if IsTwoHandsMastery.Visible and IsTwoHandsMastery.Checked then
    begin
      WMlvl := TwoHandsMastery.ItemIndex + 1;
      if (WType = Sword2) or (WType = Blunt2) then
        WM := WM + _2H[WMlvl]
    end;
  if IsBluntMastery.Visible and IsBluntMastery.Checked then
    begin
      WMlvl := BluntMastery.ItemIndex + 1;
      if (WType = Blunt1) or (WType = Blunt2) then
        WM := WM + Warr[WMlvl]
    end;
  if IsSwordMastery.Visible and IsSwordMastery.Checked and Gnom then
    begin
      WMlvl := SwordMastery.ItemIndex + 1;
      if (WType = Sword) or (WType = Sword2) then
        WM := WM + Warr[WMlvl]
    end;
  if IsSwordMastery.Visible and IsSwordMastery.Checked and not Gnom then
    begin
      WMlvl := SwordMastery.ItemIndex + 1;
      if (WType = Sword) or (WType = Sword2) or (WType = Blunt1) or (WType = Blunt2) then
        WM := WM + SwB[WMlvl]
    end;
  if IsPolearmMastery.Visible and IsPolearmMastery.Checked then
    begin
      WMlvl := PolearmMastery.ItemIndex + 1;
      if WType = Polearm then
        WM := WM + Warr[WMlvl]
    end;
  if IsFistMastery.Visible and IsFistMastery.Checked then
    begin
      WMlvl := FistMastery.ItemIndex + 1;
      if WType = Fist then
        WM := WM + Warr[WMlvl]
    end;
  B2 := 0;
  if IsSoulCry.Visible and IsSoulCry.Checked then
    case SoulCry.ItemIndex of
      0 : B2 := B2 + 4.5;
      1 : B2 := B2 + 14.0;
      2 : B2 := B2 + 33.5;
      3 : B2 := B2 + 66.5;
      4 : B2 := B2 + 90.5;
      5 : B2 := B2 + 141.5;
      6 : B2 := B2 + 208.5;
      7 : B2 := B2 + 247.0;
      8 : B2 := B2 + 310.0;
      9 : B2 := B2 + 375.5;
    end;
  if IsDeadEye.Visible and IsDeadEye.Checked then
    case DeadEye.ItemIndex of
      0 : B2 := B2 + 124;
      1 : B2 := B2 + 134;
      2 : B2 := B2 + 145;
      3 : B2 := B2 + 155;
      4 : B2 := B2 + 166;
      5 : B2 := B2 + 177;
      6 : B2 := B2 + 188;
      7 : B2 := B2 + 199;
    end;
  if IsRapidFire.Visible and IsRapidFire.Checked then
    case RapidFire.ItemIndex of
      0 : B2 := B2 + 62;
      1 : B2 := B2 + 67;
      2 : B2 := B2 + 73;
      3 : B2 := B2 + 78;
      4 : B2 := B2 + 83;
      5 : B2 := B2 + 89;
      6 : B2 := B2 + 94;
      7 : B2 := B2 + 100
    end;
  if IsSnipe.Checked and IsSnipe.Visible then
    case Snipe.ItemIndex of
      0 : B2 := B2 + 124;
      1 : B2 := B2 + 134;
      2 : B2 := B2 + 145;
      3 : B2 := B2 + 155;
      4 : B2 := B2 + 166;
      5 : B2 := B2 + 177;
      6 : B2 := B2 + 188;
      7 : B2 := B2 + 199;
    end;
  WB := 0;
  if ComboBox61.ItemIndex = 0 then
    if Fighter then
      WPA := 4
    else
      WPA := 3;  
  PA := (WPA + dWPA)*LM*_Str*MM*AB*JB*B1 + WM + B2 + WB;
end;

procedure TForm1.CalcAtkSpeed;
var
  WAS : Integer;
  Pass,B,AB,WB,JB,HerBers : Extended;
begin
  case DEX + Set_DEX + tDEX of
     1 : _Dex := 0.85;
     2 : _Dex := 0.86;
     3 : _Dex := 0.86;
     4 : _Dex := 0.87;
     5 : _Dex := 0.88;
     6 : _Dex := 0.89;
     7 : _Dex := 0.90;
     8 : _Dex := 0.90;
     9 : _Dex := 0.91;
    10 : _Dex := 0.92;
    11 : _Dex := 0.93;
    12 : _Dex := 0.94;
    13 : _Dex := 0.94;
    14 : _Dex := 0.95;
    15 : _Dex := 0.96;
    16 : _Dex := 0.97;
    17 : _Dex := 0.98;
    18 : _Dex := 0.99;
    19 : _Dex := 1.00;
    20 : _Dex := 1.01;
    21 : _Dex := 1.01;
    22 : _Dex := 1.02;
    23 : _Dex := 1.03;
    24 : _Dex := 1.04;
    25 : _Dex := 1.05;
    26 : _Dex := 1.06;
    27 : _Dex := 1.07;
    28 : _Dex := 1.08;
    29 : _Dex := 1.09;
    30 : _Dex := 1.10;
    31 : _Dex := 1.11;
    32 : _Dex := 1.12;
    33 : _Dex := 1.13;
    34 : _Dex := 1.14;
    35 : _Dex := 1.15;
    36 : _Dex := 1.16;
    37 : _Dex := 1.17;
    38 : _Dex := 1.18;
    39 : _Dex := 1.19;
    40 : _Dex := 1.20;
    41 : _Dex := 1.21;
    42 : _Dex := 1.22;
    43 : _Dex := 1.24;
    44 : _Dex := 1.25;
    45 : _Dex := 1.26;
    46 : _Dex := 1.27;
    47 : _Dex := 1.28;
    48 : _Dex := 1.29;
    49 : _Dex := 1.30;
    50 : _Dex := 1.32;
  end;
  WAS := 0;
  case WType of
    Dagger : WAS := 433;
    NonW : WAS := 300;
    Blunt1,Sword : WAS := 379;
    Blunt2,Fist,DualSword,Polearm,Sword2 : WAS := 325;
    BowFast : WAS := 293;
    BowSlow : WAS := 227;
  end;
  Pass := 1;
  if Mystic or Buffer then
    begin
      Pass := 0.8;
      if (((BodyU = Robe) and (BodyL = Robe)) or (BodyU = RFull)) then
        Pass := 1;
      if (Buffer or OrcMystic) and IsHvArmorMastery.Checked and IsHvArmorMastery.Visible then
        if (((BodyU = Heavy) and (BodyL = Heavy)) or (BodyU = HFull)) then
          Pass := 1;
      if (Mystic or Buffer or OrcMystic or Summoner) and IsLgArmorMastery.Checked and IsLgArmorMastery.Visible then
        if (((BodyU = Light) and (BodyL = Light)) or (BodyU = LFull)) then
          Pass := 1;
    end;
  if IsBoostAtkSpeed.Checked and IsBoostAtkSpeed.Visible then
    case BoostAtkSpeed.ItemIndex of
      0 : Pass := Pass*1.05;
      1 : Pass := Pass*1.07;
      2 : Pass := Pass*1.10;
    end;  
  B := 1;
  if IsBers.Checked then
    case BersLvl.ItemIndex of
      0 : B := B*1.05;
      1 : B := B*1.08;
    end;
  if IsFury.Checked then
    B := B*1.15;
  if IsHaste.Checked then
    case HasteLvl.ItemIndex of
      0 : B := B*1.15;
      1 : B := B*1.33;
    end;
  if IsProphecy.Checked then
    case ProphecyLvl.ItemIndex of
      0,1,3 : B := B*1.2;
    end;
  if IsRapidShot.Visible and IsRapidShot.Checked then
    if (WType = BowFast) or (WType = BowSlow) then
      case RapidShot.ItemIndex of
        0 : B := B*1.08;
        1 : B := B*1.12;
      end;
  if IsDuelistSpirit.Visible and IsDuelistSpirit.Checked then
    case DuelistSpirit.ItemIndex of
      0 : B := B*1.08;
      1 : B := B*1.12;
    end;
  if IsThrillFight.Visible and IsThrillFight.Checked then
    case ThrillFight.ItemIndex of
      0 : B := B*1.05;
      1 : B := B*1.1;
    end;
  if IsFistFury.Visible and IsFistFury.Checked then
    B := B*1.25;
  if IsDeadEye.Visible and IsDeadEye.Checked then
    B := B*0.8;
  if IsRapidFire.Visible and IsRapidFire.Checked then
    B := B*1.2;
  if IsAngelicIcon.Visible and IsAngelicIcon.Checked then
    case AngelicIcon.ItemIndex of
      0 : B := B*1.1;
      1 : B := B*1.2;
      2 : B := B*1.3;
    end;
  if IsParryStance.Checked and IsParryStance.Visible then
    B := B*0.8;
  if IsRiposteStance.Checked and IsRiposteStance.Visible then
    B := B*0.8;
  if IsZealot.Checked and IsZealot.Visible then
    if WType in [Sword,Fist,DualSword,Blunt1,Blunt2,Sword2,Polearm] then
      case Zealot.ItemIndex of
        0 : B := B*1.1;
        1 : B := B*1.2;
        2 : B := B*1.3;
      end;

  AB := 1;
  case CurS of
    Tal_Heavy : AB := 1.08;
    DC_Light,Drac : AB := 1.04;
  end;
  WB := 1;
  if IsSA and (WSA.SA = SA_Haste) then
    WB := WSA.Power;
  if IsSA then
    begin
      if WSA.SA = SA_Stinger then
        WB := 1.03;
      if WSA.SA = SA_Crusher then
        WB := 1.07;
      if WSA.SA = SA_Spear then
        WB := 1.07;  
    end;
  JB := 1;
  if J_Baium then
    JB := 1.04;
  HerBers := 0;
  AtkS := _Dex*WAS*Pass*B*AB*WB*JB + HerBers;
end;

procedure TForm1.CalcMAtk;
const
  WMM : array [1..42] of Extended =
    (1.9,3.5,5.7,7.2,8.3,10.3,11.9,14.6,16.6,20.0,21.3,22.6,25.4,26.9,28.5,31.8,33.8,
     35.4,39.2,41.2,43.2,47.5,49.8,52.1,54.4,56.8,59.2,61.7,64.3,66.8,69.4,72.1,
     74.8,77.4,80.2,82.9,85.6,88.4,91.1,93.8,96.5,99.3);
var
  LM,MM,WM,WB,AB,JB,B : Extended;
  HerBers,WMlvl : Integer;
begin
  case INT + Set_INT + tINT of
     1 : _Int := 0.55;
     2 : _Int := 0.56;
     3 : _Int := 0.57;
     4 : _Int := 0.58;
     5 : _Int := 0.59;
     6 : _Int := 0.61;
     7 : _Int := 0.62;
     8 : _Int := 0.63;
     9 : _Int := 0.64;
    10 : _Int := 0.65;
    11 : _Int := 0.67;
    12 : _Int := 0.68;
    13 : _Int := 0.69;
    14 : _Int := 0.71;
    15 : _Int := 0.72;
    16 : _Int := 0.74;
    17 : _Int := 0.75;
    18 : _Int := 0.77;
    19 : _Int := 0.78;
    20 : _Int := 0.80;
    21 : _Int := 0.81;
    22 : _Int := 0.83;
    23 : _Int := 0.85;
    24 : _Int := 0.86;
    25 : _Int := 0.88;
    26 : _Int := 0.90;
    27 : _Int := 0.92;
    28 : _Int := 0.94;
    29 : _Int := 0.95;
    30 : _Int := 0.97;
    31 : _Int := 0.99;
    32 : _Int := 1.01;
    33 : _Int := 1.03;
    34 : _Int := 1.05;
    35 : _Int := 1.07;
    36 : _Int := 1.10;
    37 : _Int := 1.12;
    38 : _Int := 1.14;
    39 : _Int := 1.16;
    40 : _Int := 1.19;
    41 : _Int := 1.21;
    42 : _Int := 1.23;
    43 : _Int := 1.26;
    44 : _Int := 1.28;
    45 : _Int := 1.31;
    46 : _Int := 1.34;
    47 : _Int := 1.36;
    48 : _Int := 1.39;
    49 : _Int := 1.42;
    50 : _Int := 1.45;
    51 : _Int := 1.47;
    52 : _Int := 1.50;
    53 : _Int := 1.53;
    54 : _Int := 1.57;
    55 : _Int := 1.60;
    56 : _Int := 1.63;
    57 : _Int := 1.66;
    58 : _Int := 1.69;
    59 : _Int := 1.73;
    60 : _Int := 1.76
  end;
  LM := (Lvl + 89)/100;
  WB := 0;
  if IsSa then
    begin
      if (WSA.SA = SA_Empower) or (WSA.SA = SA_MagicPower) then
        WB := WSA.Power;
      if WSA.SA = SA_Scepter then
        WB := 29.67;
    end;
  AB := 1;
  case CurS of
    Knowledge,Zub_Rob : AB := 1.1025;
    Night_Robe : AB := 1.08;
    Arcana : AB := 1.17;
  end;  
  JB := 1;
  if J_Valakas then
    JB := 1.08;
  B := 1;
  if IsEmpower.Checked then
    case EmpowerLvl.ItemIndex of
      0 : B := B*1.55;
      1 : B := B*1.65;
      2 : B := B*1.75;
    end;
  if IsBers.Checked then
    case BersLvl.ItemIndex of
      0 : B := B*1.1;
      1 : B := B*1.16;
    end;
  if IsMystic.Checked then
    B := B*1.2;
  if IsProphecy.Checked then
    case ProphecyLvl.ItemIndex of
      0,2 : B := B*1.2;
    end;
  if IsArcanePower.Checked and IsArcanePower.Visible then
    B := B*1.3;  
  MM := 0;
  WM := 0;
  if IsWeaponMastery.Visible and IsWeaponMastery.Checked and not Fighter then
    begin
      MM := 0.17*LM*LM*_Int*_Int*(WMA + dWMA)*B*AB*JB;
      WMlvl := WeaponMastery.ItemIndex + 1;
      WM := WM + WMM[WMlvl]
    end;
  HerBers := 0;
  if ComboBox61.ItemIndex = 0 then
    WMA := 6;
  MA := (WMA + dWMA)*LM*LM*_Int*_Int*AB*JB*B + MM + WM + WB + HerBers;
end;

procedure TForm1.CalcSpeed;
var
  B1,B2,AB,Pass : Extended;
begin
  case DEX + Set_DEX + tDEX of
     1 : _Dex := 0.85;
     2 : _Dex := 0.86;
     3 : _Dex := 0.86;
     4 : _Dex := 0.87;
     5 : _Dex := 0.88;
     6 : _Dex := 0.89;
     7 : _Dex := 0.90;
     8 : _Dex := 0.90;
     9 : _Dex := 0.91;
    10 : _Dex := 0.92;
    11 : _Dex := 0.93;
    12 : _Dex := 0.94;
    13 : _Dex := 0.94;
    14 : _Dex := 0.95;
    15 : _Dex := 0.96;
    16 : _Dex := 0.97;
    17 : _Dex := 0.98;
    18 : _Dex := 0.99;
    19 : _Dex := 1.00;
    20 : _Dex := 1.01;
    21 : _Dex := 1.01;
    22 : _Dex := 1.02;
    23 : _Dex := 1.03;
    24 : _Dex := 1.04;
    25 : _Dex := 1.05;
    26 : _Dex := 1.06;
    27 : _Dex := 1.07;
    28 : _Dex := 1.08;
    29 : _Dex := 1.09;
    30 : _Dex := 1.10;
    31 : _Dex := 1.11;
    32 : _Dex := 1.12;
    33 : _Dex := 1.13;
    34 : _Dex := 1.14;
    35 : _Dex := 1.15;
    36 : _Dex := 1.16;
    37 : _Dex := 1.17;
    38 : _Dex := 1.18;
    39 : _Dex := 1.19;
    40 : _Dex := 1.20;
    41 : _Dex := 1.21;
    42 : _Dex := 1.22;
    43 : _Dex := 1.24;
    44 : _Dex := 1.25;
    45 : _Dex := 1.26;
    46 : _Dex := 1.27;
    47 : _Dex := 1.28;
    48 : _Dex := 1.29;
    49 : _Dex := 1.30;
    50 : _Dex := 1.32;
  end;
  B1 := 1;
  B2 := 0;
  if IsProphecy.Checked then
    case ProphecyLvl.ItemIndex of
      0,2 : B1 := B1*0.8;
      1 : B1 := B1*0.9;
    end;  
  if IsBers.Checked then
    case BersLvl.ItemIndex of
      0 : B2 := B2 + 5;
      1 : B2 := B2 + 8;
    end;
  if IsWindWalk.Checked then
    case WindWalkLvl.ItemIndex of
      0 : B2 := B2 + 20;
      1 : B2 := B2 + 33;
    end;
  if IsSprint.Visible and IsSprint.Checked then
    case Sprint.ItemIndex of
      0 : B2 := B2 + 20;
      1 : B2 := B2 + 33;
    end;
  if IsWind.Checked then
    B2 := B2 + 20;
  if IsShadow.Checked then
    B1 := B1*0.5;
  if IsBindingBlow.Visible and IsBindingBlow.Checked then
    B1 := B1*1.4;
  if IsDash.Visible and IsDash.Checked then
    case Dash.ItemIndex of
      0 : B1 := B1*1.4;
      1 : B1 := B1*1.66;
    end;
  if IsSilentMove.Visible and IsSilentMove.Checked then
    B1 := B1*0.6;
  if IsThrillFight.Visible and IsThrillFight.Checked then
    B1 := B1*0.8;  
  AB := 0;
  case CurS of
    Mith_Robe,BW_Heavy,Doom_Robe,DC_Robe : AB := 7;
  end;  
  Pass := 0;
  if IsQuickStep.Checked and IsQuickStep.Visible then
    case QuickStep.ItemIndex of
      0 : Pass := Pass + 7;
      1 : Pass := Pass + 11;
    end;
  if IsAgileMovement.Checked and IsAgileMovement.Visible then
    case AgileMovement.ItemIndex of
      0 : Pass := Pass + 5;
      1 : Pass := Pass + 10;
    end;
  if Lifon.Checked then
    Pass := Pass + 30;
  if IsAngelicIcon.Visible and IsAngelicIcon.Checked then
    case AngelicIcon.ItemIndex of
      0 : B2 := B2 + 10;
      1 : B2 := B2 + 20;
      2 : B2 := B2 + 30;
    end;
  if IsParryStance.Checked and IsParryStance.Visible then
    B1 := B1*0.9;
  if IsRiposteStance.Checked and IsRiposteStance.Visible then
    B1 := B1*0.9;
  if IsZealot.Checked and IsZealot.Visible then
    case Zealot.ItemIndex of
      0 : B2 := B2 + 10;
      1 : B2 := B2 + 20;
      2 : B2 := B2 + 30;
    end;  
  Speed := BaseS*_Dex*B1 + B2 + AB + Pass;

  if IsSnipe.Checked and IsSnipe.Visible then
    Speed := 0;
end;

procedure TForm1.IsBersClick(Sender: TObject);
begin
  BersLvl.Enabled := IsBers.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.BersLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsMysticClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsEmpowerClick(Sender: TObject);
begin
  EmpowerLvl.Enabled := IsEmpower.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.EmpowerLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsHasteClick(Sender: TObject);
begin
  HasteLvl.Enabled := IsHaste.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.HasteLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsFuryClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsProphecyClick(Sender: TObject);
begin
  ProphecyLvl.Enabled := IsProphecy.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ProphecyLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.CalcEvasion;
var
  Pass,AB,B,i : Integer;
  WB : Extended;
begin
  Pass := 0;
  if IsBoostEvasion.Checked and IsBoostEvasion.Visible then
    case BoostEvasion.ItemIndex of
      0 : Pass := Pass + 2;
      1 : Pass := Pass + 3;
      2 : Pass := Pass + 4;
    end;
  if IsLgArmorMastery.Checked and IsLgArmorMastery.Visible and (((BodyU = Light) and (BodyL = Light)) or (BodyU = LFull)) then
    if Fighter then
      if Gnom then
        case LgArmorMastery.ItemIndex of
          0,1 : Pass := Pass + 3;
          2,3 : Pass := Pass + 5;
        else Pass := Pass + 6
        end
      else
        case LgArmorMastery.ItemIndex of
          0,1 : Pass := Pass + 4;
          2,3 : Pass := Pass + 6;
        else Pass := Pass + 7
        end;
  if ComboBox66.Enabled and (ComboBox66.ItemIndex <> 0) then
    Pass := Pass - 8;      
  AB := 0;
  case CurS of
    Mith_Light,Zub_Light : AB := 4;
  end;  
  WB := 0;
  B := 0;
  if IsBers.Checked then
    case BersLvl.ItemIndex of
      0 : B := B - 2;
      1 : B := B - 4;
    end;
  if IsAgility.Checked then
    case AgilityLvl.ItemIndex of
      0 : B := B + 2;
      1 : B := B + 3;
      2 : B := B + 4;
    end;
  if IsWater.Checked then
    B := B + 3;
  if IsMajesty.Visible and IsMajesty.Checked then
    case Majesty.ItemIndex of
      0 : B := B - 2;
      1 : B := B - 4;
      2 : B := B - 6;
    end;
  if IsRage.Checked and IsRage.Visible then
    B := B - 3;
  if IsUltEvasion.Visible and IsUltEvasion.Checked then
    case UltEvasion.ItemIndex of
      0 : B := B + 20;
      1 : B := B + 25;
    end;
  if IsEvasionShot.Visible and IsEvasionShot.Checked then
    B := B + 6;    
  if IsSA then
    begin
      if WSA.SA = SA_Evasion then
        WB := WSA.Power;
      if WSA.SA = SA_Fang then
        WB := 3.15;
    end;
  Evasion := Sqrt(DEX + Set_DEX + tDEX)*6 + Lvl + Pass + WB + AB + B;
  for i := 1 to 4 do
    if AugCB[i].ItemIndex = 6 then
      Evasion := Evasion + Augs[i];
end;

procedure TForm1.CalcCritical;
var
  WCM,i : Integer;
  BC,Pass,B,WB : Extended;
begin
  case DEX + Set_DEX + tDEX of
     1 : _Dex := 0.85;
     2 : _Dex := 0.86;
     3 : _Dex := 0.86;
     4 : _Dex := 0.87;
     5 : _Dex := 0.88;
     6 : _Dex := 0.89;
     7 : _Dex := 0.90;
     8 : _Dex := 0.90;
     9 : _Dex := 0.91;
    10 : _Dex := 0.92;
    11 : _Dex := 0.93;
    12 : _Dex := 0.94;
    13 : _Dex := 0.94;
    14 : _Dex := 0.95;
    15 : _Dex := 0.96;
    16 : _Dex := 0.97;
    17 : _Dex := 0.98;
    18 : _Dex := 0.99;
    19 : _Dex := 1.00;
    20 : _Dex := 1.01;
    21 : _Dex := 1.01;
    22 : _Dex := 1.02;
    23 : _Dex := 1.03;
    24 : _Dex := 1.04;
    25 : _Dex := 1.05;
    26 : _Dex := 1.06;
    27 : _Dex := 1.07;
    28 : _Dex := 1.08;
    29 : _Dex := 1.09;
    30 : _Dex := 1.10;
    31 : _Dex := 1.11;
    32 : _Dex := 1.12;
    33 : _Dex := 1.13;
    34 : _Dex := 1.14;
    35 : _Dex := 1.15;
    36 : _Dex := 1.16;
    37 : _Dex := 1.17;
    38 : _Dex := 1.18;
    39 : _Dex := 1.19;
    40 : _Dex := 1.20;
    41 : _Dex := 1.21;
    42 : _Dex := 1.22;
    43 : _Dex := 1.24;
    44 : _Dex := 1.25;
    45 : _Dex := 1.26;
    46 : _Dex := 1.27;
    47 : _Dex := 1.28;
    48 : _Dex := 1.29;
    49 : _Dex := 1.30;
    50 : _Dex := 1.32;
  end;
  WCM := 0;
  case WType of
    BowFast,BowSlow,Dagger : WCM := 120;
    Polearm,Sword,Sword2,DualSword : WCM := 80;
    Blunt1,Blunt2,Fist,NonW : WCM := 40;
  end;
  BC := _Dex*WCM;
  Pass := 0;
  if IsCriticalChance.Visible and IsCriticalChance.Checked then
    case CriticalChance.ItemIndex of
      0 : Pass := BC*0.2;
      1 : Pass := BC*0.3;
      2 : Pass := BC*0.4;
    end;  
  B := 0;
  if IsFocus.Checked then
    case FocusLvl.ItemIndex of
      0 : B := B + BC*0.2;
      1 : B := B + BC*0.25;
      2 : B := B + BC*0.3;
    end;
  if IsHunter.Checked then
    B := B + BC;
  if IsBQueen.Checked then
    case BQueenLvl.ItemIndex of
      0 : B := B + BC*0.2;
      1 : B := B + BC*0.25;
      2 : B := B + BC*0.3;
    end;
  if IsProphecy.Checked then
    if ProphecyLvl.ItemIndex = 0 then
      B := B + BC*0.2;
  if IsAngelicIcon.Visible and IsAngelicIcon.Checked then
    if (WType = Polearm) or (WType = Sword) or (WType = Sword2) then
      case AngelicIcon.ItemIndex of
        0 : B := B + 33;
        1 : B := B + 66;
        2 : B := B + 100;
      end;
  if IsZealot.Checked and IsZealot.Visible then
    if WType in [Sword,DualSword,Sword2,Polearm] then
      case Zealot.ItemIndex of
        0 : B := B + 33;
        1 : B := B + 66;
        2 : B := B + 100;
      end;
  if IsSnipe.Checked and IsSnipe.Visible then
    B := B + BC*0.2;
  WB := 0;
  if IsSA and (WSA.SA = SA_Focus) then
    WB := WSA.Power;
  if IsSA then
    begin
      if WSA.SA = SA_Wing then
        WB := 78.7;
      if WSA.SA = SA_Cleaver then
        WB := 78.7;
    end;
  Critical := BC + Pass + B + WB;
  for i := 1 to 4 do
    if AugCB[i].ItemIndex = 5 then
      Critical := Critical + Augs[i];

  if Critical > 500 then
    Critical := 500;
end;

procedure TForm1.ComboBox59Change(Sender: TObject);
begin
  WeaponEnch := ComboBox59.ItemIndex;
  if (WeaponEnch >= 4) and OldDuals then
    begin
      ComboBox62.ItemIndex := 1;
      ComboBox62.Enabled := False;
    end
  else
    if OldDuals then
      ComboBox62.ItemIndex := 0;
  dWPA := 0;
  dWMA := 0;    
  if WeaponEnch > 0 then
    case ComboBox60.ItemIndex of
      1 : begin   // s grade
            if WeaponEnch <= 3 then
              dWMA := WeaponEnch*4
            else
              dWMA := 12 + (WeaponEnch - 3)*8;
            if (WType = BowFast) or (WType = BowSlow) then
              if WeaponEnch <= 3 then
                dWPA := WeaponEnch*10
              else
                dWPA := 30 + (WeaponEnch - 3)*20
            else
              if (WType = Sword) or (WType = Blunt1) or (WType = Polearm) or (WType = Book) or (WType = Dagger) then
                if WeaponEnch <= 3 then
                  dWPA := WeaponEnch*5
                else
                  dWPA := 15 + (WeaponEnch - 3)*10
              else
                if WeaponEnch <= 3 then
                  dWPA := WeaponEnch*6
                else
                  dWPA := 18 + (WeaponEnch - 3)*12
          end;
      2 : begin // a grade
            if WeaponEnch <= 3 then
              dWMA := WeaponEnch*3
            else
              dWMA := 9 + (WeaponEnch - 3)*6;
            if (WType = BowFast) or (WType = BowSlow) then
              if WeaponEnch <= 3 then
                dWPA := WeaponEnch*8
              else
                dWPA := 24 + (WeaponEnch - 3)*16
            else
              if (WType = Sword) or (WType = Blunt1) or (WType = Polearm) or (WType = Book) or (WType = Dagger) then
                if WeaponEnch <= 3 then
                  dWPA := WeaponEnch*4
                else
                  dWPA := 12 + (WeaponEnch - 3)*8
              else
                if WeaponEnch <= 3 then
                  dWPA := WeaponEnch*5
                else
                  dWPA := 15 + (WeaponEnch - 3)*10
          end;
      3 : begin
            if WeaponEnch <= 3 then
              dWMA := WeaponEnch*3
            else
              dWMA := 9 + (WeaponEnch - 3)*6;
            if (WType = BowFast) or (WType = BowSlow) then
              if WeaponEnch <= 3 then
                dWPA := WeaponEnch*6
              else
                dWPA := 18 + (WeaponEnch - 3)*12
            else
              if (WType = Sword) or (WType = Blunt1) or (WType = Polearm) or (WType = Book) or (WType = Dagger) then
                if WeaponEnch <= 3 then
                  dWPA := WeaponEnch*3
                else
                  dWPA := 9 + (WeaponEnch - 3)*6
              else
                if WeaponEnch <= 3 then
                  dWPA := WeaponEnch*4
                else
                  dWPA := 12 + (WeaponEnch - 3)*8
          end;
      4 : begin
            if WeaponEnch <= 3 then
              dWMA := WeaponEnch*3
            else
              dWMA := 9 + (WeaponEnch - 3)*6;
            if (WType = BowFast) or (WType = BowSlow) then
              if WeaponEnch <= 3 then
                dWPA := WeaponEnch*6
              else
                dWPA := 18 + (WeaponEnch - 3)*12
            else
              if (WType = Sword) or (WType = Blunt1) or (WType = Polearm) or (WType = Book) or (WType = Dagger) then
                if WeaponEnch <= 3 then
                  dWPA := WeaponEnch*3
                else
                  dWPA := 9 + (WeaponEnch - 3)*6
              else
                if WeaponEnch <= 3 then
                  dWPA := WeaponEnch*4
                else
                  dWPA := 12 + (WeaponEnch - 3)*8
          end;
      5 : begin
            if WeaponEnch <= 3 then
              dWMA := WeaponEnch*2
            else
              dWMA := 6 + (WeaponEnch - 3)*4;
            if (WType = BowFast) or (WType = BowSlow) then
              if WeaponEnch <= 3 then
                dWPA := WeaponEnch*4
              else
                dWPA := 12 + (WeaponEnch - 3)*8
            else
              if WeaponEnch <= 3 then
                dWPA := WeaponEnch*2
              else
                dWPA := 6 + (WeaponEnch - 3)*4
          end;
    end;
  ReCalc;
  ReDrawStats;  
end;

procedure TForm1.IsWindWalkClick(Sender: TObject);
begin
  WindWalkLvl.Enabled := IsWindWalk.Checked;
  if IsWindWalk.Checked then
    IsSprint.Checked := False;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.WindWalkLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsWindClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsShadowClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsBQueenClick(Sender: TObject);
begin
  BQueenLvl.Enabled := IsBQueen.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.BQueenLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsFocusClick(Sender: TObject);
begin
  FocusLvl.Enabled := IsFocus.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.FocusLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsHunterClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.CalcAccuracy;
var
  WA : Extended;
  Pass,B,AB,JB,i : Integer;
  SAG : Extended;
begin
  WA := 0;
  case WType of
    Dagger,BowFast,BowSlow,Polearm : WA := -3.75;
    Blunt1,Blunt2,Fist : WA := 4.75;
  end;
  Pass := 0;
  if IsAgileMovement.Visible and IsAgileMovement.Checked and (((BodyU = Light) and (BodyL = Light)) or (BodyU = LFull)) then
    case AgileMovement.ItemIndex of
      0 : Pass := Pass + 2;
      1 : Pass := Pass + 3;
    end;
  if IsTwoHandsMastery.Visible and IsTwoHandsMastery.Checked and ((WType = Sword2) or (WType = Blunt2)) then
    Pass := Pass + 3;
  if IsShadowSence.Visible and IsShadowSence.Checked then
    Pass := Pass + 3;       
  AB := 0;
  case CurS of
    Maj_Heavy : AB := 3;
  end;  
  SAG := 0;
  if IsSA and (WSA.SA = SA_Guidance) then
    SAG := WSA.Power;
  if IsSA and (WSA.SA = SA_Spear) then
    SAG := 4.89;   
  JB := 0;
  if J_Baium then
    Inc(JB,2);
  if J_Core then
    Inc(JB,1);
  if J_AntQueen then
    Inc(JB,2);    
  B := 0;
  if IsGuidance.Checked then
    case GuidanceLvl.ItemIndex of
      0 : B := B + 2;
      1 : B := B + 3;
      2 : B := B + 4;
    end;
  if IsIspiration.Checked then
     B := B + 4;
  if IsProphecy.Checked then
    case ProphecyLvl.ItemIndex of
      0,1,3 : B := B + 4;
    end;
  if IsRage.Visible and IsRage.Checked then
    case Rage.ItemIndex of
      0 : B := B + 2;
      1 : B := B + 4;
    end;
  if IsFrenzy.Visible and IsFrenzy.Checked then
    if (WType = Blunt2) or (WType = Sword2) then
      case Frenzy.ItemIndex of
        0,1 : B := B + 4;
        2 : B := B + 6;
      end;
  if IsHawkeye.Visible and IsHawkeye.Checked then
    case Hawkeye.ItemIndex of
      0 : B := B + 6;
      1 : B := B + 8;
      2 : B := B + 10;
    end;
  if IsAccuracy.Checked then
    B := B + 3;
  if IsPolearmAccuracy.Checked and IsPolearmAccuracy.Visible then
    if WType = Polearm then
      case PolearmAccuracy.ItemIndex of
        0 : B := B + 2;
        1 : B := B + 3;
        2 : B := B + 4;
      end;
  if IsDeadEye.Visible and IsDeadEye.Checked then
    case DeadEye.ItemIndex of
      0..1 : B := B + 1;
      2..4 : B := B + 2;
      5..7 : B := B + 3;
    end;
  if IsAngelicIcon.Visible and IsAngelicIcon.Checked then
    B := B + 6;
  if IsParryStance.Checked and IsParryStance.Visible then
    B := B - 4;
  if IsRiposteStance.Checked and IsRiposteStance.Visible then
    B := B - 4;
  if IsZealot.Checked and IsZealot.Visible then
    if WType in [Sword,Fist,DualSword,Blunt1,Blunt2,Sword2,Polearm] then
      B := B + 6;
  if IsSnipe.Checked and IsSnipe.Visible then
    case Snipe.ItemIndex of
      0 : B := B + 1;
      1 : B := B + 3;
      2 : B := B + 4;
      3 : B := B + 4;
      4 : B := B + 5;
      5 : B := B + 5;
      6 : B := B + 6;
      7 : B := B + 6;
    end;

  Accuracy := Sqrt(DEX + Set_DEX + tDEX)*6 + Lvl + WA + Pass + AB + SAG + JB + B;
  for i := 1 to 4 do
    if AugCB[i].ItemIndex = 1 then
      Accuracy := Accuracy + Augs[i];
end;

procedure TForm1.IsGuidanceClick(Sender: TObject);
begin
  GuidanceLvl.Enabled := IsGuidance.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.GuidanceLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsIspirationClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsAgilityClick(Sender: TObject);
begin
  AgilityLvl.Enabled := IsAgility.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.AgilityLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsWaterClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ComboBox65Change(Sender: TObject);
begin
  case ComboBox65.ItemIndex of
    0 : begin  // bl Grade
          ComboBox66.Items.Clear;
          ComboBox66.Items.Add('Unequipped');
          ComboBox66.Items.Add('Imperial Crusader Shield');
          ComboBox66.ItemIndex := 0;
        end;
    1 : begin   // A grade
          ComboBox66.Items.Clear;
          ComboBox66.Items.Add('Unequipped');
          ComboBox66.Items.Add('Dark Crystal Shield');
          ComboBox66.Items.Add('Shield of Nightmare');
          ComboBox66.ItemIndex := 0;
        end;
    2 : begin     // B grade
          ComboBox66.Items.Clear;
          ComboBox66.Items.Add('Unequipped');
          ComboBox66.Items.Add('Avadon Shield');
          ComboBox66.Items.Add('Doom Shield');
          ComboBox66.Items.Add('Zubei''s Shield');
          ComboBox66.ItemIndex := 0;
        end;
    3 : begin   // C grade
          ComboBox66.Items.Clear;
          ComboBox66.Items.Add('Unequipped');
          ComboBox66.Items.Add('Chain Shield');
          ComboBox66.Items.Add('Composite Shield');
          ComboBox66.Items.Add('Dwarven Chain Shield');
          ComboBox66.Items.Add('Eldarake');
          ComboBox66.Items.Add('Knight Shield');
          ComboBox66.Items.Add('Full Pate Shield');
          ComboBox66.Items.Add('Tower Shiled');
          ComboBox66.ItemIndex := 0;
        end;
    4 : begin             // d grade
          ComboBox66.Items.Clear;
          ComboBox66.Items.Add('Unequipped');
          ComboBox66.Items.Add('Aspis');
          ComboBox66.Items.Add('Brigandine Shield');
          ComboBox66.Items.Add('Bronze Shield');
          ComboBox66.Items.Add('Hoplon');
          ComboBox66.Items.Add('Kite Shield');
          ComboBox66.Items.Add('Plate Shield');
          ComboBox66.Items.Add('Square Shield');
          ComboBox66.ItemIndex := 0;
        end;
    5 : begin         // non grade
          ComboBox66.Items.Clear;
          ComboBox66.Items.Add('Unequipped');
          ComboBox66.Items.Add('Bone Shield');
          ComboBox66.Items.Add('Buckler');
          ComboBox66.Items.Add('Leather Shield');
          ComboBox66.Items.Add('Pledge Shield');
          ComboBox66.Items.Add('Round Shield');
          ComboBox66.Items.Add('Shield of Castle Siege');
          ComboBox66.Items.Add('Skeleton Buckler');
          ComboBox66.Items.Add('Small Shield');
          ComboBox66.ItemIndex := 0;
        end;
  end;
end;

procedure TForm1.ComboBox68Change(Sender: TObject);
begin
  case ComboBox68.ItemIndex of
    0 : begin  // bl Grade
          ComboBox69.Items.Clear;
          ComboBox69.Items.Add('Unequipped');
          ComboBox69.Items.Add('Draconic Leather Helmet');
          ComboBox69.Items.Add('Imperial Crusader Helmet');
          ComboBox69.Items.Add('Major Arcana Circlet');
          ComboBox69.ItemIndex := 0;
        end;
    1 : begin   // A grade
          ComboBox69.Items.Clear;
          ComboBox69.Items.Add('Unequipped');
          ComboBox69.Items.Add('Dark Crystal Helmet');
          ComboBox69.Items.Add('Helm of Nightmare');
          ComboBox69.Items.Add('Majestic Circlet');
          ComboBox69.Items.Add('Tallum Helmet');
          ComboBox69.ItemIndex := 0;
        end;
    2 : begin     // B grade
          ComboBox69.Items.Clear;
          ComboBox69.Items.Add('Unequipped');
          ComboBox69.Items.Add('Avadon Circlet');
          ComboBox69.Items.Add('Blue Wolf Helmet');
          ComboBox69.Items.Add('Doom Helmet');
          ComboBox69.Items.Add('Zubei''s Helmet');
          ComboBox69.ItemIndex := 0;
        end;
    3 : begin   // C grade
          ComboBox69.Items.Clear;
          ComboBox69.Items.Add('Unequipped');
          ComboBox69.Items.Add('Chain Hood');
          ComboBox69.Items.Add('Composite Helmet');
          ComboBox69.Items.Add('Full Plate Helmet');
          ComboBox69.Items.Add('Great Helmet');
          ComboBox69.Items.Add('Shining Circlet');
          ComboBox69.ItemIndex := 0;
        end;
    4 : begin             // d grade
          ComboBox69.Items.Clear;
          ComboBox69.Items.Add('Unequipped');
          ComboBox69.Items.Add('Bone Helmet');
          ComboBox69.Items.Add('Brigandine Helmet');
          ComboBox69.Items.Add('Bronze Helmet');
          ComboBox69.Items.Add('Helmet');
          ComboBox69.Items.Add('Plate Helmet');
          ComboBox69.ItemIndex := 0;
        end;
    5 : begin         // non grade
          ComboBox69.Items.Clear;
          ComboBox69.Items.Add('Unequipped');
          ComboBox69.Items.Add('Cloth Cap');
          ComboBox69.Items.Add('Hard Leather Helmet');
          ComboBox69.Items.Add('Lether Cap');
          ComboBox69.Items.Add('Leather Helmet');
          ComboBox69.Items.Add('Wooden Helmet');
          ComboBox69.ItemIndex := 0;
        end;
  end;
end;

procedure TForm1.ComboBox71Change(Sender: TObject);
begin
  case ComboBox71.ItemIndex of
    0 : begin  // bl Grade
          ComboBox72.Items.Clear;
          ComboBox72.Items.Add('Unequipped');
          ComboBox72.Items.Add('Draconic Leather Armor');
          ComboBox72.Items.Add('Imperial Crusader Breastplate');
          ComboBox72.Items.Add('Major Arcana Robe');
          ComboBox72.ItemIndex := 0;
        end;
    1 : begin   // A grade
          ComboBox72.Items.Clear;
          ComboBox72.Items.Add('Unequipped');
          ComboBox72.Items.Add('Armor of Nightmare');
          ComboBox72.Items.Add('Dark Crystal Leather Armor');
          ComboBox72.Items.Add('Dark Crystal Breatplate');
          ComboBox72.Items.Add('Dark Crystal Robe');
          ComboBox72.Items.Add('Majestic Leather Armor');
          ComboBox72.Items.Add('Majestic Plate Armor');
          ComboBox72.Items.Add('Majestic Robe');
          ComboBox72.Items.Add('Nightmarish Leather Armor');
          ComboBox72.Items.Add('Robe of Nightmare');
          ComboBox72.Items.Add('Tallum Leather Armor');
          ComboBox72.Items.Add('Tallum Plate Armor');
          ComboBox72.Items.Add('Tallum Tunic');
          ComboBox72.ItemIndex := 0;
        end;
    2 : begin     // B grade
          ComboBox72.Items.Clear;
          ComboBox72.Items.Add('Unequipped');
          ComboBox72.Items.Add('Avadon Breastplate');
          ComboBox72.Items.Add('Avadon Leather Armor');
          ComboBox72.Items.Add('Avadon Robe');
          ComboBox72.Items.Add('Blue Wolf Breastplate');
          ComboBox72.Items.Add('Blue Wolf Leather Armor');
          ComboBox72.Items.Add('Blue Wolf Tunic');
          ComboBox72.Items.Add('Doom Plate Armor');
          ComboBox72.Items.Add('Leather Armor of Doom');
          ComboBox72.Items.Add('Tunic of Doom');
          ComboBox72.Items.Add('Tunic of Zubei');
          ComboBox72.Items.Add('Zubei''s Breastplate');
          ComboBox72.Items.Add('Zubei''s Leather Shirt');
          ComboBox72.ItemIndex := 0;
        end;
    3 : begin   // C grade
          ComboBox72.Items.Clear;
          ComboBox72.Items.Add('Unequipped');
          ComboBox72.Items.Add('Chain Mail Shirt');
          ComboBox72.Items.Add('Composite Armor');
          ComboBox72.Items.Add('Demon''s Tunic');
          ComboBox72.Items.Add('Divine Tunic');
          ComboBox72.Items.Add('Drake Leather Armor');
          ComboBox72.Items.Add('Dwarven Chain Mail Shirt');
          ComboBox72.Items.Add('Full Plate Armor');
          ComboBox72.Items.Add('Karmian Tunic');
          ComboBox72.Items.Add('Mithril Shirt');
          ComboBox72.Items.Add('Plated Leather');
          ComboBox72.Items.Add('Robe of Seal');
          ComboBox72.Items.Add('Rind Leather Armor');
          ComboBox72.Items.Add('Theca Leather Armor');
          ComboBox72.ItemIndex := 0;
        end;
    4 : begin             // d grade
          ComboBox72.Items.Clear;
          ComboBox72.Items.Add('Unequipped');
          ComboBox72.Items.Add('Blast Plate');
          ComboBox72.Items.Add('Brigandine Tunic');
          ComboBox72.Items.Add('Compound Scale Mail');
          ComboBox72.Items.Add('Cursed Tunic');
          ComboBox72.Items.Add('Dwarven Scale Mail');
          ComboBox72.Items.Add('Elven Tunic');
          ComboBox72.Items.Add('Half Plate Armor');
          ComboBox72.Items.Add('Lion Skin Shirt');
          ComboBox72.Items.Add('Manticore Skin Shirt');
          ComboBox72.Items.Add('Mithril Banded Mail');
          ComboBox72.Items.Add('Mithril Breastplate');
          ComboBox72.Items.Add('Mithril Tunic');
          ComboBox72.Items.Add('Mystic''s Tunic');
          ComboBox72.Items.Add('Puma Skin Shirt');
          ComboBox72.Items.Add('Reinforced Leather Shirt');
          ComboBox72.Items.Add('Ring Mail Breastplate');
          ComboBox72.Items.Add('Sage''s Rag');
          ComboBox72.Items.Add('Salamander Skin Mail');
          ComboBox72.Items.Add('Scale Mail');
          ComboBox72.Items.Add('Tunic of Knowledge');
          ComboBox72.Items.Add('White Tunic');
          ComboBox72.ItemIndex := 0;
        end;
    5 : begin         // non grade
          ComboBox72.Items.Clear;
          ComboBox72.Items.Add('Unequipped');
          ComboBox72.Items.Add('Apprentice''s Tunic');
          ComboBox72.Items.Add('Bone Breastplate');
          ComboBox72.Items.Add('Bronze Breastplate');
          ComboBox72.Items.Add('Cotton Shirt');
          ComboBox72.Items.Add('Cotton Tunic');
          ComboBox72.Items.Add('Feriotic Tunic');
          ComboBox72.Items.Add('Hard Leather Shirt');
          ComboBox72.Items.Add('Leather Shirt');
          ComboBox72.Items.Add('Leather Tunic');
          ComboBox72.Items.Add('Piece Bone Breastplate');
          ComboBox72.Items.Add('Shirt');
          ComboBox72.Items.Add('Squire''s Shirt');
          ComboBox72.Items.Add('Tunic');
          ComboBox72.Items.Add('Tunic of Devotion');
          ComboBox72.Items.Add('Tunic of Magic');
          ComboBox72.Items.Add('Wooden Breastplate');
          ComboBox72.ItemIndex := 0;
        end;
  end;
end;

procedure TForm1.ComboBox74Change(Sender: TObject);
begin
  case ComboBox74.ItemIndex of
    0 : begin  // bl Grade
          ComboBox75.Items.Clear;
          ComboBox75.Items.Add('Unequipped');
          ComboBox75.Items.Add('Imperial Crusader Gaiters');
          ComboBox75.ItemIndex := 0;
        end;
    1 : begin   // A grade
          ComboBox75.Items.Clear;
          ComboBox75.Items.Add('Unequipped');
          ComboBox75.Items.Add('Dark Crystal Gaiters');
          ComboBox75.Items.Add('Dark Crystalline Leggins');
          ComboBox75.Items.Add('Tallum Stokings');
          ComboBox75.ItemIndex := 0;
        end;
    2 : begin     // B grade
          ComboBox75.Items.Clear;
          ComboBox75.Items.Add('Unequipped');
          ComboBox75.Items.Add('Avadon Gaiters');
          ComboBox75.Items.Add('Blue Wolf Gaiters');
          ComboBox75.Items.Add('Blue Wolf Stokings');
          ComboBox75.Items.Add('Stokings of Doom');
          ComboBox75.Items.Add('Stokings of Zubei');
          ComboBox75.Items.Add('Zubei''s Gaiters');
          ComboBox75.Items.Add('Zubei''s Leather Gaiters');
          ComboBox75.ItemIndex := 0;
        end;
    3 : begin   // C grade
          ComboBox75.Items.Clear;
          ComboBox75.Items.Add('Unequipped');
          ComboBox75.Items.Add('Chain Gaiters');
          ComboBox75.Items.Add('Demon''s Stokings');
          ComboBox75.Items.Add('Divine Stokings');
          ComboBox75.Items.Add('Dwarven Chain Gaiters');
          ComboBox75.Items.Add('Karmian Stokings');
          ComboBox75.Items.Add('Plated Leather Gaiters');
          ComboBox75.Items.Add('Rind Leather Gaiters');
          ComboBox75.Items.Add('Tempered Mithril Gaiters');
          ComboBox75.Items.Add('Theca Leather Gaiters');
          ComboBox75.ItemIndex := 0;
        end;
    4 : begin             // d grade
          ComboBox75.Items.Clear;
          ComboBox75.Items.Add('Unequipped');
          ComboBox75.Items.Add('Brigandine Gaiters');
          ComboBox75.Items.Add('Compound Scale Gaiters');
          ComboBox75.Items.Add('Cursed Stokings');
          ComboBox75.Items.Add('Dark Stokings');
          ComboBox75.Items.Add('Dwarven Scale Gaiters');
          ComboBox75.Items.Add('Elven Stokings');
          ComboBox75.Items.Add('Iron Plate Gaiters');
          ComboBox75.Items.Add('Lion Skin Gaiters');
          ComboBox75.Items.Add('Manticore Skin Gaiters');
          ComboBox75.Items.Add('Mithril Banded Gaiters');
          ComboBox75.Items.Add('Mithril Gaiters');
          ComboBox75.Items.Add('Mithril Scale Gaiters');
          ComboBox75.Items.Add('Mithril Stokings');
          ComboBox75.Items.Add('Mystic''s Stokings');
          ComboBox75.Items.Add('Plate Gaiters');
          ComboBox75.Items.Add('Puma Skin Gaiters');
          ComboBox75.Items.Add('Reinforced Leather Gaiters');
          ComboBox75.Items.Add('Scale Gaiters');
          ComboBox75.Items.Add('Stokings of Knowledge');
          ComboBox75.ItemIndex := 0;
        end;
    5 : begin         // non grade
          ComboBox75.Items.Clear;
          ComboBox75.Items.Add('Unequipped');
          ComboBox75.Items.Add('Apprentice''s Stokings');
          ComboBox75.Items.Add('Bone Gaiters');
          ComboBox75.Items.Add('Bronze Gaiters');
          ComboBox75.Items.Add('Cotton Pants');
          ComboBox75.Items.Add('Cotton Stokings');
          ComboBox75.Items.Add('Feriotic Stokings');
          ComboBox75.Items.Add('Hard Leather Gaiters');
          ComboBox75.Items.Add('Hard leather Pants');
          ComboBox75.Items.Add('Leather Pants');
          ComboBox75.Items.Add('Pants');
          ComboBox75.Items.Add('Piece Bone Gaiters');
          ComboBox75.Items.Add('Squire''s Pants');
          ComboBox75.Items.Add('Stokings');
          ComboBox75.Items.Add('Stokings of Devotion');
          ComboBox75.Items.Add('Stokings of Magic');
          ComboBox75.Items.Add('Wooden Gaiters');
          ComboBox75.ItemIndex := 0;
        end;
  end;
end;

procedure TForm1.ComboBox77Change(Sender: TObject);
begin
  case ComboBox77.ItemIndex of
    0 : begin  // bl Grade
          ComboBox78.Items.Clear;
          ComboBox78.Items.Add('Unequipped');
          ComboBox78.Items.Add('Draconic Leather Gloves');
          ComboBox78.Items.Add('Imperial Crusader Gauntlets');
          ComboBox78.Items.Add('Major Arcana Gloves');
          ComboBox78.ItemIndex := 0;
        end;
    1 : begin   // A grade
          ComboBox78.Items.Clear;
          ComboBox78.Items.Add('Unequipped');
          ComboBox78.Items.Add('Dark Crystal Gloves [Heavy Armor]');
          ComboBox78.Items.Add('Dark Crystal Gloves [Light Armor]');
          ComboBox78.Items.Add('Dark Crystal Gloves [Robe]');
          ComboBox78.Items.Add('Gloves of Nightmare [Heavy Armor]');
          ComboBox78.Items.Add('Gloves of Nightmare [Light Armor]');
          ComboBox78.Items.Add('Gloves of Nightmare [Robe]');
          ComboBox78.Items.Add('Majestic Gloves [Heavy Armor]');
          ComboBox78.Items.Add('Majestic Gloves [Light Armor]');
          ComboBox78.Items.Add('Majestic Gloves [Robe]');
          ComboBox78.Items.Add('Tallum Gloves [Heavy Armor]');
          ComboBox78.Items.Add('Tallum Gloves [Light Armor]');
          ComboBox78.Items.Add('Tallum Gloves [Robe]');
          ComboBox78.ItemIndex := 0;
        end;
    2 : begin     // B grade
          ComboBox78.Items.Clear;
          ComboBox78.Items.Add('Unequipped');
          ComboBox78.Items.Add('Avadon Gloves [Heavy Armor]');
          ComboBox78.Items.Add('Avadon Gloves [Light Armor]');
          ComboBox78.Items.Add('Avadon Gloves [Robe]');
          ComboBox78.Items.Add('Blue Wolf Gloves [Heavy Armor]');
          ComboBox78.Items.Add('Blue Wolf Gloves [Light Armor]');
          ComboBox78.Items.Add('Blue Wolf Gloves [Robe]');
          ComboBox78.Items.Add('Doom Gloves [Heavy Armor]');
          ComboBox78.Items.Add('Doom Gloves [Light Armor]');
          ComboBox78.Items.Add('Doom Gloves [Robe]');
          ComboBox78.Items.Add('Zubei''s Gauntlets [Heavy Armor]');
          ComboBox78.Items.Add('Zubei''s Gauntlets [Light Armor]');
          ComboBox78.Items.Add('Zubei''s Gauntlets [Robe]');
          ComboBox78.ItemIndex := 0;
        end;
    3 : begin   // C grade
          ComboBox78.Items.Clear;
          ComboBox78.Items.Add('Unequipped');
          ComboBox78.Items.Add('Chain Gloves');
          ComboBox78.Items.Add('Demon''s Gloves');
          ComboBox78.Items.Add('Divine Gloves');
          ComboBox78.Items.Add('Drake Leather Gloves');
          ComboBox78.Items.Add('Dwarven Chain Gloves');
          ComboBox78.Items.Add('Full Plate Gauntlets');
          ComboBox78.Items.Add('Gloves of Seal');
          ComboBox78.Items.Add('Karmian Gloves');
          ComboBox78.Items.Add('Mithril Gauntlets');
          ComboBox78.Items.Add('Plated Leather Gloves');
          ComboBox78.Items.Add('Reinforced Mithril Gloves');
          ComboBox78.Items.Add('Rind Leather Gloves');
          ComboBox78.Items.Add('Theca Leather Gloves');
          ComboBox78.ItemIndex := 0;
        end;
    4 : begin             // d grade
          ComboBox78.Items.Clear;
          ComboBox78.Items.Add('Unequipped');
          ComboBox78.Items.Add('Brigandine Gauntlets');
          ComboBox78.Items.Add('Elven Mithril Gloves');
          ComboBox78.Items.Add('Excellent Leather Gloves');
          ComboBox78.Items.Add('Gauntlets');
          ComboBox78.Items.Add('Gloves of Knowledge');
          ComboBox78.Items.Add('Leather Gauntlets');
          ComboBox78.Items.Add('Manticore Skin Gloves');
          ComboBox78.Items.Add('Mithril Gloves');
          ComboBox78.Items.Add('Ogre Power Gauntlets');
          ComboBox78.Items.Add('Reinforced Leather Gloves');
          ComboBox78.Items.Add('Rip Gauntlets');
          ComboBox78.Items.Add('Sage''s Worn Gloves');
          ComboBox78.ItemIndex := 0;
        end;
    5 : begin         // non grade
          ComboBox78.Items.Clear;
          ComboBox78.Items.Add('Unequipped');
          ComboBox78.Items.Add('Bracer');
          ComboBox78.Items.Add('Gloves');
          ComboBox78.Items.Add('Leather Gloves');
          ComboBox78.Items.Add('Short Gloves');
          ComboBox78.Items.Add('Short Leather Gloves');
          ComboBox78.ItemIndex := 0;
        end;
  end;
end;

procedure TForm1.ComboBox80Change(Sender: TObject);
begin
  case ComboBox80.ItemIndex of
    0 : begin  // bl Grade
          ComboBox81.Items.Clear;
          ComboBox81.Items.Add('Unequipped');
          ComboBox81.Items.Add('Draconic Leather Boots');
          ComboBox81.Items.Add('Imperial Crusader Boots');
          ComboBox81.Items.Add('Major Arcana Boots');
          ComboBox81.ItemIndex := 0;
        end;
    1 : begin  // a Grade
          ComboBox81.Items.Clear;
          ComboBox81.Items.Add('Unequipped');
          ComboBox81.Items.Add('Boots of Nightmare [Heavy Armor]');
          ComboBox81.Items.Add('Boots of Nightmare [Light Armor]');
          ComboBox81.Items.Add('Boots of Nightmare [Robe]');
          ComboBox81.Items.Add('Dark Crystal Boots [Heavy Armor]');
          ComboBox81.Items.Add('Dark Crystal Boots [Light Armor]');
          ComboBox81.Items.Add('Dark Crystal Boots [Robe]');
          ComboBox81.Items.Add('Majestic Boots [Heavy Armor]');
          ComboBox81.Items.Add('Majestic Boots [Light Armor]');
          ComboBox81.Items.Add('Majestic Boots [Robe]');
          ComboBox81.Items.Add('Tallum Boots [Heavy Armor]');
          ComboBox81.Items.Add('Tallum Boots [Light Armor]');
          ComboBox81.Items.Add('Tallum Boots [Robe]');
          ComboBox81.ItemIndex := 0;
        end;
    2 : begin  // b Grade
          ComboBox81.Items.Clear;
          ComboBox81.Items.Add('Unequipped');
          ComboBox81.Items.Add('Avadon Boots [Heavy Armor]');
          ComboBox81.Items.Add('Avadon Boots [Light Armor]');
          ComboBox81.Items.Add('Avadon Boots [Robe]');
          ComboBox81.Items.Add('Blue Wolf Boots [Heavy Armor]');
          ComboBox81.Items.Add('Blue Wolf Boots [Light Armor]');
          ComboBox81.Items.Add('Blue Wolf Boots [Robe]');
          ComboBox81.Items.Add('Doom Boots [Heavy Armor]');
          ComboBox81.Items.Add('Doom Boots [Light Armor]');
          ComboBox81.Items.Add('Doom Boots [Robe]');
          ComboBox81.Items.Add('Zubei''s Boots [Heavy Armor]');
          ComboBox81.Items.Add('Zubei''s Boots [Light Armor]');
          ComboBox81.Items.Add('Zubei''s Boots [Robe]');
          ComboBox81.ItemIndex := 0;
        end;
    3 : begin  // c Grade
          ComboBox81.Items.Clear;
          ComboBox81.Items.Add('Unequipped');
          ComboBox81.Items.Add('Boots of Seal');
          ComboBox81.Items.Add('Chain Boots');
          ComboBox81.Items.Add('Composite Boots');
          ComboBox81.Items.Add('Crimson Boots');
          ComboBox81.Items.Add('Demon''s Boots');
          ComboBox81.Items.Add('Divine Boots');
          ComboBox81.Items.Add('Drake Leather Boots');
          ComboBox81.Items.Add('Dwarven Chain Boots');
          ComboBox81.Items.Add('Full Plate Boots');
          ComboBox81.Items.Add('Karmian Boots');
          ComboBox81.Items.Add('Mithril Boots');
          ComboBox81.Items.Add('Plated Leather Boots');
          ComboBox81.Items.Add('Rind Leather Boots');
          ComboBox81.Items.Add('Theca Leather Boots');
          ComboBox81.ItemIndex := 0;
        end;
    4 : begin  // d Grade
          ComboBox81.Items.Clear;
          ComboBox81.Items.Add('Unequipped');
          ComboBox81.Items.Add('Assault Boots');
          ComboBox81.Items.Add('Blue Buckskin Boots');
          ComboBox81.Items.Add('Boots of Knowledge');
          ComboBox81.Items.Add('Boots of Power');
          ComboBox81.Items.Add('Brigandine Boots');
          ComboBox81.Items.Add('Elven Mithril Boots');
          ComboBox81.Items.Add('Iron Boots');
          ComboBox81.Items.Add('Leather Boots');
          ComboBox81.Items.Add('Manticore Boots');
          ComboBox81.Items.Add('Plate Boots');
          ComboBox81.Items.Add('Reinforced Learther Boots');
          ComboBox81.Items.Add('Salamander Skin Boots');
          ComboBox81.ItemIndex := 0;
        end;
    5 : begin  // non Grade
          ComboBox81.Items.Clear;
          ComboBox81.Items.Add('Unequipped');
          ComboBox81.Items.Add('Apprentice''s Shoes');
          ComboBox81.Items.Add('Boots');
          ComboBox81.Items.Add('Cloth Shoes');
          ComboBox81.Items.Add('Cotton Shoes');
          ComboBox81.Items.Add('Crude Leather Shoes');
          ComboBox81.Items.Add('Leather Sandals');
          ComboBox81.Items.Add('Leather Shoes');
          ComboBox81.Items.Add('Low Boots');
          ComboBox81.Items.Add('Squeaking Shoes');
          ComboBox81.ItemIndex := 0;
        end;
  end;
end;

procedure TForm1.ComboBox84Change(Sender : TObject);
begin
  ComboBox83.Visible := True;
  ComboBox83.ItemIndex := 0;
  case ComboBox84.ItemIndex of
    0 : begin  // bl Grade
          ComboBox85.Items.Clear;
          ComboBox85.Items.Add('Unequipped');
          ComboBox85.Items.Add('Necklace of Valakas');
          ComboBox85.Items.Add('Sealed Tateossian Necklave');
          ComboBox85.Items.Add('Tateossian Necklace');
          ComboBox85.ItemIndex := 0;
        end;
    1 : begin  // a Grade
          ComboBox85.Items.Clear;
          ComboBox85.Items.Add('Unequipped');
          ComboBox85.Items.Add('Majestic Necklace');
          ComboBox85.Items.Add('Phoenix Necklace');
          ComboBox85.Items.Add('Sealed Majestic Necklace');
          ComboBox85.Items.Add('Sealed Phoenix Necklace');
          ComboBox85.ItemIndex := 0;
        end;
    2 : begin  // b Grade
          ComboBox85.Items.Clear;
          ComboBox85.Items.Add('Unequipped');
          ComboBox85.Items.Add('Adamantite Necklace');
          ComboBox85.Items.Add('Necklace of Black Ore');
          ComboBox85.Items.Add('Necklace of Blessing');
          ComboBox85.Items.Add('Necklace of Grace');
          ComboBox85.ItemIndex := 0;
        end;
    3 : begin  // c Grade
          ComboBox85.Items.Clear;
          ComboBox85.Items.Add('Unequipped');
          ComboBox85.Items.Add('Aquastone Necklace');
          ComboBox85.Items.Add('Necklace of Binding');
          ComboBox85.Items.Add('Necklace of Mermaid');
          ComboBox85.Items.Add('Necklace of Protection');
          ComboBox85.ItemIndex := 0;
        end;
    4 : begin  // d Grade
          ComboBox85.Items.Clear;
          ComboBox85.Items.Add('Unequipped');
          ComboBox85.Items.Add('Elven Necklace');
          ComboBox85.Items.Add('Enchanted Necklace');
          ComboBox85.Items.Add('Near Forest Necklace');
          ComboBox85.Items.Add('Necklace of Darkness');
          ComboBox85.Items.Add('Necklace of Devotion');
          ComboBox85.ItemIndex := 0;
        end;
    5 : begin  // non Grade
          ComboBox83.Visible := False;
          ComboBox85.Items.Clear;
          ComboBox85.Items.Add('Unequipped');
          ComboBox85.Items.Add('Blue Diamond Necklace');
          ComboBox85.Items.Add('Necklace of Anguish');
          ComboBox85.Items.Add('Necklace of Courage');
          ComboBox85.Items.Add('Necklace of Magic');
          ComboBox85.Items.Add('Necklace of Knowledge');
          ComboBox85.Items.Add('Necklace of Valor');
          ComboBox85.Items.Add('Necklace of Wisdom');
          ComboBox85.ItemIndex := 0;
        end;
  end;
  Jewelry;
end;

procedure TForm1.ComboBox87Change(Sender: TObject);
begin
  ComboBox86.Visible := True;
  ComboBox86.ItemIndex := 0;
  case ComboBox87.ItemIndex of
    0 : begin  // bl Grade
          ComboBox88.Items.Clear;
          ComboBox88.Items.Add('Unequipped');
          ComboBox88.Items.Add('Earring of Antharas');
          ComboBox88.Items.Add('Sealed Tateossian Necklace');
          ComboBox88.Items.Add('Tateossian Earring');
          ComboBox88.Items.Add('Zaken''s Earring');
          ComboBox88.ItemIndex := 0;
        end;
    1 : begin  // a Grade
          ComboBox88.Items.Clear;
          ComboBox88.Items.Add('Unequipped');
          ComboBox88.Items.Add('Earring of Orfen');
          ComboBox88.Items.Add('Majestic Earring');
          ComboBox88.Items.Add('Phoenix Earring');
          ComboBox88.Items.Add('Sealed Majestic Earring');
          ComboBox88.Items.Add('Sealed Phoenix Earring');
          ComboBox88.ItemIndex := 0;
        end;
    2 : begin  // b Grade
          ComboBox88.Items.Clear;
          ComboBox88.Items.Add('Unequipped');
          ComboBox88.Items.Add('Adamantite Earring');
          ComboBox88.Items.Add('Earring of Black Ore');
          ComboBox88.Items.Add('Earring of Blessing');
          ComboBox88.ItemIndex := 0;
        end;
    3 : begin  // c Grade
          ComboBox88.Items.Clear;
          ComboBox88.Items.Add('Unequipped');
          ComboBox88.Items.Add('Earring of Binding');
          ComboBox88.Items.Add('Earring of Protection');
          ComboBox88.Items.Add('Moonstone Earring');
          ComboBox88.Items.Add('Nassen''s Earring');
          ComboBox88.ItemIndex := 0;
        end;
    4 : begin  // d Grade
          ComboBox88.Items.Clear;
          ComboBox88.Items.Add('Unequipped');
          ComboBox88.Items.Add('Elven Earring');
          ComboBox88.Items.Add('Enchanted Earring');
          ComboBox88.Items.Add('Omen Beats''s Eye Earring');
          ComboBox88.Items.Add('Red Crescent Earring');
          ComboBox88.Items.Add('Tiger''s Eye Earring');
          ComboBox88.ItemIndex := 0;
        end;
    5 : begin  // non Grade
          ComboBox86.Visible := False;
          ComboBox88.Items.Clear;
          ComboBox88.Items.Add('Unequipped');
          ComboBox88.Items.Add('Apprentice''s Earring');
          ComboBox88.Items.Add('Cat''s Eye Earring');
          ComboBox88.Items.Add('Coral Earring');
          ComboBox88.Items.Add('Earring of Strength');
          ComboBox88.Items.Add('Earring of Wisdom');
          ComboBox88.Items.Add('Mystic''s Earring');
          ComboBox88.ItemIndex := 0;
        end;
  end;
  Jewelry;
end;

procedure TForm1.ComboBox90Change(Sender: TObject);
begin
  ComboBox91.Visible := True;
  ComboBox91.ItemIndex := 0;
  case ComboBox90.ItemIndex of
    0 : begin  // bl Grade
          ComboBox89.Items.Clear;
          ComboBox89.Items.Add('Unequipped');
          ComboBox89.Items.Add('Earring of Antharas');
          ComboBox89.Items.Add('Sealed Tateossian Earring');
          ComboBox89.Items.Add('Tateossian Earring');
          ComboBox89.Items.Add('Zaken''s Earring');
          ComboBox89.ItemIndex := 0;
        end;
    1 : begin  // a Grade
          ComboBox89.Items.Clear;
          ComboBox89.Items.Add('Unequipped');
          ComboBox89.Items.Add('Earring of Orfen');
          ComboBox89.Items.Add('Majestic Earring');
          ComboBox89.Items.Add('Phoenix Earring');
          ComboBox89.Items.Add('Sealed Majestic Earring');
          ComboBox89.Items.Add('Sealed Phoenix Earring');
          ComboBox89.ItemIndex := 0;
        end;
    2 : begin  // b Grade
          ComboBox89.Items.Clear;
          ComboBox89.Items.Add('Unequipped');
          ComboBox89.Items.Add('Adamantite Earring');
          ComboBox89.Items.Add('Earring of Black Ore');
          ComboBox89.Items.Add('Earring of Blessing');
          ComboBox89.ItemIndex := 0;
        end;
    3 : begin  // c Grade
          ComboBox89.Items.Clear;
          ComboBox89.Items.Add('Unequipped');
          ComboBox89.Items.Add('Earring of Binding');
          ComboBox89.Items.Add('Earring of Protection');
          ComboBox89.Items.Add('Moonstone Earring');
          ComboBox89.Items.Add('Nassen''s Earring');
          ComboBox89.ItemIndex := 0;
        end;
    4 : begin  // d Grade
          ComboBox89.Items.Clear;
          ComboBox89.Items.Add('Unequipped');
          ComboBox89.Items.Add('Elven Earring');
          ComboBox89.Items.Add('Enchanted Earring');
          ComboBox89.Items.Add('Omen Beats''s Eye Earring');
          ComboBox89.Items.Add('Red Crescent Earring');
          ComboBox89.Items.Add('Tiger''s Eye Earring');
          ComboBox89.ItemIndex := 0;
        end;
    5 : begin  // non Grade
          ComboBox91.Visible := False;
          ComboBox89.Items.Clear;
          ComboBox89.Items.Add('Unequipped');
          ComboBox89.Items.Add('Apprentice''s Earring');
          ComboBox89.Items.Add('Cat''s Eye Earring');
          ComboBox89.Items.Add('Coral Earring');
          ComboBox89.Items.Add('Earring of Strength');
          ComboBox89.Items.Add('Earring of Wisdom');
          ComboBox89.Items.Add('Mystic''s Earring');
          ComboBox89.ItemIndex := 0;
        end;
  end;
  Jewelry;
end;

procedure TForm1.ComboBox94Change(Sender: TObject);
begin
  ComboBox92.Visible := True;
  ComboBox92.ItemIndex := 0;
  case ComboBox94.ItemIndex of
    0 : begin  // bl Grade
          ComboBox96.Items.Clear;
          ComboBox96.Items.Add('Unequipped');
          ComboBox96.Items.Add('Ring of Baium');
          ComboBox96.Items.Add('Sealed Tateossian Ring');
          ComboBox96.Items.Add('Tateossian Ring');
          ComboBox96.ItemIndex := 0;
        end;
    1 : begin  // a Grade
          ComboBox96.Items.Clear;
          ComboBox96.Items.Add('Unequipped');
          ComboBox96.Items.Add('Majestic Ring');
          ComboBox96.Items.Add('Phoenix Ring');
          ComboBox96.Items.Add('Ring of Core');
          ComboBox96.Items.Add('Sealed Majestic Ring');
          ComboBox96.Items.Add('Sealed Phoenix Ring');
          ComboBox96.ItemIndex := 0;
        end;
    2 : begin  // b Grade
          ComboBox96.Items.Clear;
          ComboBox96.Items.Add('Unequipped');
          ComboBox96.Items.Add('Adamantite Ring');
          ComboBox96.Items.Add('Ring of Black Ore');
          ComboBox96.Items.Add('Ring of Blessing');
          ComboBox96.Items.Add('Ring of Queen Ant');
          ComboBox96.ItemIndex := 0;
        end;
    3 : begin  // c Grade
          ComboBox96.Items.Clear;
          ComboBox96.Items.Add('Unequipped');
          ComboBox96.Items.Add('Aquastone Ring');
          ComboBox96.Items.Add('Ring of Ages');
          ComboBox96.Items.Add('Ring of Binding');
          ComboBox96.Items.Add('Ring of Protection');
          ComboBox96.ItemIndex := 0;
        end;
    4 : begin  // d Grade
          ComboBox96.Items.Clear;
          ComboBox96.Items.Add('Unequipped');
          ComboBox96.Items.Add('Black Pearl Ring');
          ComboBox96.Items.Add('Elven Ring');
          ComboBox96.Items.Add('Enchanted Ring');
          ComboBox96.Items.Add('Mithril Ring');
          ComboBox96.Items.Add('Ring of Devotion');
          ComboBox96.ItemIndex := 0;
        end;
    5 : begin  // non Grade
          ComboBox92.Visible := False;
          ComboBox96.Items.Clear;
          ComboBox96.Items.Add('Unequipped');
          ComboBox96.Items.Add('Blue Coral Ring');
          ComboBox96.Items.Add('Magic Ring');
          ComboBox96.Items.Add('Ring of Anguish');
          ComboBox96.Items.Add('Ring of Firefly');
          ComboBox96.Items.Add('Ring of Knowledge');
          ComboBox96.Items.Add('Ring of Racoon');
          ComboBox96.Items.Add('Ring of Wisdom');
          ComboBox96.ItemIndex := 0;
        end;
  end;
  Jewelry;
end;

procedure TForm1.ComboBox95Change(Sender: TObject);
begin
  ComboBox93.Visible := True;
  ComboBox93.ItemIndex := 0;
  case ComboBox95.ItemIndex of
    0 : begin  // bl Grade
          ComboBox97.Items.Clear;
          ComboBox97.Items.Add('Unequipped');
          ComboBox97.Items.Add('Ring of Baium');
          ComboBox97.Items.Add('Sealed Tateossian Ring');
          ComboBox97.Items.Add('Tateossian Ring');
          ComboBox97.ItemIndex := 0;
        end;
    1 : begin  // a Grade
          ComboBox97.Items.Clear;
          ComboBox97.Items.Add('Unequipped');
          ComboBox97.Items.Add('Majestic Ring');
          ComboBox97.Items.Add('Phoenix Ring');
          ComboBox97.Items.Add('Ring of Core');
          ComboBox97.Items.Add('Sealed Majestic Ring');
          ComboBox97.Items.Add('Sealed Phoenix Ring');
          ComboBox97.ItemIndex := 0;
        end;
    2 : begin  // b Grade
          ComboBox97.Items.Clear;
          ComboBox97.Items.Add('Unequipped');
          ComboBox97.Items.Add('Adamantite Ring');
          ComboBox97.Items.Add('Ring of Black Ore');
          ComboBox97.Items.Add('Ring of Blessing');
          ComboBox97.Items.Add('Ring of Queen Ant');
          ComboBox97.ItemIndex := 0;
        end;
    3 : begin  // c Grade
          ComboBox97.Items.Clear;
          ComboBox97.Items.Add('Unequipped');
          ComboBox97.Items.Add('Aquastone Ring');
          ComboBox97.Items.Add('Ring of Ages');
          ComboBox97.Items.Add('Ring of Binding');
          ComboBox97.Items.Add('Ring of Protection');
          ComboBox97.ItemIndex := 0;
        end;
    4 : begin  // d Grade
          ComboBox97.Items.Clear;
          ComboBox97.Items.Add('Unequipped');
          ComboBox97.Items.Add('Black Pearl Ring');
          ComboBox97.Items.Add('Elven Ring');
          ComboBox97.Items.Add('Enchanted Ring');
          ComboBox97.Items.Add('Mithril Ring');
          ComboBox97.Items.Add('Ring of Devotion');
          ComboBox97.ItemIndex := 0;
        end;
    5 : begin  // non Grade
          ComboBox93.Visible := False;
          ComboBox97.Items.Clear;
          ComboBox97.Items.Add('Unequipped');
          ComboBox97.Items.Add('Blue Coral Ring');
          ComboBox97.Items.Add('Magic Ring');
          ComboBox97.Items.Add('Ring of Anguish');
          ComboBox97.Items.Add('Ring of Firefly');
          ComboBox97.Items.Add('Ring of Knowledge');
          ComboBox97.Items.Add('Ring of Racoon');
          ComboBox97.Items.Add('Ring of Wisdom');
          ComboBox97.ItemIndex := 0;
        end;
  end;
  Jewelry;
end;

procedure TForm1.SBoots(Grade, Number : Integer);
var
  Sender : TObject;
begin
  Sender := nil;
  ComboBox80.ItemIndex := Grade;
  ComboBox80Change(Sender);
  ComboBox81.ItemIndex := Number;
end;

procedure TForm1.SGloves(Grade, Number : Integer);
var
  Sender : TObject;
begin
  Sender := nil;
  ComboBox77.ItemIndex := Grade;
  ComboBox77Change(Sender);
  ComboBox78.ItemIndex := Number;
end;

procedure TForm1.SShield(Grade, Number : Integer);
var
  Sender : TObject;
begin
  Sender := nil;
  ComboBox65.ItemIndex := Grade;
  ComboBox65Change(Sender);
  ComboBox66.ItemIndex := Number;
end;

procedure TForm1.SHelmet(Grade, Number : Integer);
var
  Sender : TObject;
begin
  Sender := nil;
  ComboBox68.ItemIndex := Grade;
  ComboBox68Change(Sender);
  ComboBox69.ItemIndex := Number;
end;

procedure TForm1.SBodyU(Grade, Number : Integer);
var
  Sender : TObject;
begin
  Sender := nil;
  ComboBox71.ItemIndex := Grade;
  ComboBox71Change(Sender);
  ComboBox72.ItemIndex := Number;
end;

procedure TForm1.SBodyL(Grade, Number : Integer);
var
  Sender : TObject;
begin
  Sender := nil;
  ComboBox74.ItemIndex := Grade;
  ComboBox74Change(Sender);
  ComboBox75.ItemIndex := Number;
end;

procedure TForm1.ComboBox63Change(Sender: TObject);
begin
  case ComboBox63.ItemIndex of
    1 : begin SHelmet(0,1); SBodyU(0,1); SBoots(0,1); SGloves(0,1); end;
    2 : begin SHelmet(0,2); SShield(0,1); SBodyU(0,2); SBodyL(0,1); SBoots(0,2); SGloves(0,2); end;
    3 : begin SHelmet(0,3); SBodyU(0,3); SBoots(0,3); SGloves(0,3); end;
    5 : begin SHelmet(1,1); SShield(1,1); SBodyU(1,3); SBodyL(1,1); SBoots(1,4); SGloves(1,1); end;
    6 : begin SHelmet(1,1); SBodyU(1,2); SBodyL(1,2); SGloves(1,2); SBoots(1,2); end;
    7 : begin SShield(1,1); SHelmet(1,1); SBodyU(1,4); SGloves(1,3); SBoots(1,6); end;
    8 : begin SHelmet(1,3); SBodyU(1,6); SGloves(1,7); SBoots(1,7); end;
    9 : begin SHelmet(1,3); SBodyU(1,5); SGloves(1,8); SBoots(1,8); end;
   10 : begin SHelmet(1,3); SBodyU(1,7); SGloves(1,9); SBoots(1,9); end;
   11 : begin SShield(1,2); SHelmet(1,2); SBodyU(1,1); SGloves(1,4); SBoots(1,1); end;
   12 : begin SHelmet(1,2); SBodyU(1,8); SGloves(1,5); SBoots(1,2); end;
   13 : begin SShield(1,2); SHelmet(1,2); SBodyU(1,9); SGloves(1,6); SBoots(1,3); end;
   14 : begin SHelmet(1,4); SBodyU(1,11); SGloves(1,10); SBoots(1,10); end;
   15 : begin SHelmet(1,4); SBodyU(1,10); SGloves(1,11); SBoots(1,11); end;
   16 : begin SHelmet(1,4); SBodyU(1,12); SBodyL(1,3); SGloves(1,12); SBoots(1,12); end;
   18 : begin SShield(2,1); SHelmet(2,1); SBodyU(2,1); SBodyL(2,1); SGloves(2,1); SBoots(2,1); end;
   19 : begin SHelmet(2,1); SBodyU(2,2); SGloves(2,2); SBoots(2,2); end;
   20 : begin SShield(2,1); SHelmet(2,1); SBodyU(2,3); SGloves(2,3); SBoots(2,3); end;
   21 : begin SHelmet(2,2); SBodyU(2,4); SBodyL(2,2); SGloves(2,4); SBoots(2,4); end;
   22 : begin SHelmet(2,2); SBodyU(2,5); SGloves(2,5); SBoots(2,5); end;
   23 : begin SHelmet(2,2); SBodyU(2,6); SBodyL(2,3); SGloves(2,6); SBoots(2,6); end;
   24 : begin SShield(2,2); SHelmet(2,3); SBodyU(2,7); SGloves(2,7); SBoots(2,7); end;
   25 : begin SHelmet(2,3); SBodyU(2,8); SGloves(2,8); SBoots(2,8); end;
   26 : begin SShield(2,2); SHelmet(2,3); SBodyU(2,9); SBodyL(2,4); SGloves(2,9); SBoots(2,9); end;
   27 : begin SShield(2,3); SHelmet(2,4); SBodyU(2,11); SBodyL(2,6); SGloves(2,10); SBoots(2,10); end;
   28 : begin SHelmet(2,4); SBodyU(2,12); SBodyL(2,7); SGloves(2,11); SBoots(2,11); end;
   29 : begin SShield(2,3); SHelmet(2,4); SBodyU(2,10); SBodyL(2,5); SGloves(2,12); SBoots(2,12); end;
   31 : begin SShield(3,1); SHelmet(3,1); SBodyU(3,1); SBodyL(3,1); end;
   32 : begin SShield(3,2); SHelmet(3,2); SBodyU(3,2); end;
   33 : begin SBodyU(3,3); SBodyL(3,2); SGloves(3,2); end;
   34 : begin SBodyU(3,4); SBodyL(3,3); SGloves(3,3); end;
   35 : begin SBodyU(3,5); SBoots(3,7); end;
   36 : begin SShield(3,6); SHelmet(3,3); SBodyU(3,7); end;
   37 : begin SBodyU(3,8); SBodyL(3,5); SGloves(3,8); end;
   38 : begin SBodyU(3,9); SBodyL(3,8); SBoots(3,11); end;
   39 : begin SBodyU(3,10); SBodyL(3,6); SBoots(3,12); end;
   40 : begin SBodyU(3,13); SBodyL(3,9); SBoots(3,14); end;
   42 : begin SShield(4,2); SHelmet(4,2); SBodyU(4,2); SBodyL(4,1); end;
   43 : begin SBodyU(4,12); SBodyL(4,13); SGloves(4,2); end;
   44 : begin SBodyU(4,20); SBodyL(4,19); SGloves(4,5); end;
   45 : begin SBodyU(4,9); SBodyL(4,9); SBoots(4,9); end;
   46 : begin SShield(4,4); SHelmet(4,4); SBodyU(4,11); SBodyL(4,11); end;
   47 : begin SBodyU(4,15); SBodyL(4,17); SBoots(4,11); end;
   49 : begin SHelmet(5,4); SBodyU(5,14); SBodyL(5,14); end;
   50 : begin SHelmet(5,5); SBodyU(5,16); SBodyL(5,16); end;
  end;
  ComboBox72Change(Sender);
  ComboBox75Change(Sender);
  ComboBox66Change(Sender);
end;

procedure TForm1.ComboBox66Change(Sender: TObject);
begin
  if ComboBox66.ItemIndex <> 0 then
    begin
      Label113.Font.Color := clBlack;
      Label114.Visible := True;
    end
  else
    begin
      Label113.Font.Color := clGray;
      Label114.Visible := False;
    end;
  CheckSet;
end;

procedure TForm1.CheckSet;
begin
  Set_STR := 0;
  Set_DEX := 0;
  Set_CON := 0;
  Set_INT := 0;
  Set_WIT := 0;
  Set_MEN := 0;
  if CHelmet(0,1) and CBodyU(0,1) and CBoots(0,1) and CGloves(0,1) then
    begin CurS := Drac; Set_DEX := 1; Set_STR := 1; Set_CON := -2; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(0,2) and CShield(0,1) and CBodyU(0,2) and CBodyL(0,1) and CBoots(0,2) and CGloves(0,2) then
    begin CurS := Imperial; Set_STR := 2; Set_Dex := -2; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(0,3) and CBodyU(0,3) and CBoots(0,3) and CGloves(0,3) then
    begin CurS := Arcana; Set_WIT := 1; Set_INT := 1; Set_MEN := -2; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(1,1) and CBodyU(1,3) and CBodyL(1,1) and CBoots(1,4) and CGloves(1,1) then
    begin CurS := DC_Heavy; if CShield(1,1) then CurS := DC_Heavy_WS; Set_STR := -2; Set_CON := 2; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(1,1) and CBodyU(1,2) and CBodyL(1,2) and CGloves(1,2) and CBoots(1,2) then
    begin CurS := DC_Light; Set_STR := 1; Set_CON := -1; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(1,1) and CBodyU(1,4) and CGloves(1,3) and CBoots(1,6) then
    begin CurS := DC_Robe; Set_WIT := 2; Set_MEN := -2; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(1,3) and CBodyU(1,6) and CGloves(1,7) and CBoots(1,7) then
    begin CurS := Maj_Heavy; Set_STR := 2; Set_CON := -2; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(1,3) and CBodyU(1,5) and CGloves(1,8) and CBoots(1,8) then
    begin CurS := Maj_Light; Set_DEX := 1; Set_CON := -1; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(1,3) and CBodyU(1,7) and CGloves(1,9) and CBoots(1,9) then
    begin CurS := Maj_Rob; Set_MEN := 1; Set_INT := -1; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(1,2) and CBodyU(1,1) and CGloves(1,4) and CBoots(1,1) then
    begin CurS := Night_Heavy; if CShield(1,2) then CurS := Night_Heavy_WS; Set_CON := 2; Set_DEX := -2; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(1,2) and CBodyU(1,8) and CGloves(1,5) and CBoots(1,2) then
    begin CurS := Night_Light; Set_DEX := 1; Set_CON := -1; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(1,2) and CBodyU(1,9) and CGloves(1,6) and CBoots(1,3) then
    begin CurS := Night_Robe; Set_INT := 2; Set_WIT := -2; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(1,4) and CBodyU(1,11) and CGloves(1,10) and CBoots(1,10) then
    begin CurS := Tal_Heavy; Set_STR := 2; Set_CON := -2; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(1,4) and CBodyU(1,10) and CGloves(1,11) and CBoots(1,11) then
    begin CurS := Tal_Light; Set_MEN := 2; Set_WIT := -2; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(1,4) and CBodyU(1,12) and CBodyL(1,3) and CGloves(1,12) and CBoots(1,12) then
    begin CurS := Tal_Robe; Set_Int := -2; Set_WIT := 2; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(2,1) and CBodyU(2,1) and CBodyL(2,1) and CGloves(2,1) and CBoots(2,1) then
    begin CurS := Ava_Heavy; if CShield(2,1) then CurS := Ava_Heavy_WS; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(2,1) and CBodyU(2,2) and CGloves(2,2) and CBoots(2,2) then
    begin CurS := Ava_Light; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(2,1) and CBodyU(2,3) and CGloves(2,3) and CBoots(2,3) then
    begin CurS := Ava_robe; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(2,2) and CBodyU(2,4) and CBodyL(2,2) and CGloves(2,4) and CBoots(2,4) then
    begin CurS := BW_Heavy; Set_STR := 3; Set_CON := -1; Set_DEX := -2; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(2,2) and CBodyU(2,5) and CGloves(2,5) and CBoots(2,5) then
    begin CurS := BW_Light; Set_INT := -2; Set_MEN := 3; Set_WIT := -1; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(2,2) and CBodyU(2,6) and CBodyL(2,3) and CGloves(2,6) and CBoots(2,6) then
    begin CurS := BW_Robe; Set_INT := -2; Set_MEN := -1; Set_WIT := 3; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(2,3) and CBodyU(2,7) and CGloves(2,7) and CBoots(2,7) then
    begin CurS := Doom_Heavy; if CShield(2,2) then CurS := Doom_Heavy_WS; Set_Str := -3; Set_Con := 3; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(2,3) and CBodyU(2,8) and CGloves(2,8) and CBoots(2,8) then
    begin CurS := Doom_Light; Set_STR := -1; Set_CON := -2; Set_DEX := 3; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(2,3) and CBodyU(2,9) and CBodyL(2,4) and CGloves(2,9) and CBoots(2,9) then
    begin CurS := Doom_Robe; Set_INT := 2; Set_MEN := 1; Set_WIT := -3; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(2,4) and CBodyU(2,11) and CBodyL(2,6) and CGloves(2,10) and CBoots(2,10) then
    begin CurS := Zub_Heavy; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(2,4) and CBodyU(2,12) and CBodyL(2,7) and CGloves(2,11) and CBoots(2,11) then
    begin CurS := Zub_Light; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(2,4) and CBodyU(2,10) and CBodyL(2,5) and CGloves(2,12) and CBoots(2,12) then
    begin CurS := Zub_Rob; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(3,1) and CBodyU(3,1) and CBodyL(3,1) then
    begin CurS := Chain; if CShield(3,1) then CurS := Chain_WS; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(3,2) and CBodyU(3,2) then
    begin CurS := Composite; if CShield(3,2) then CurS := Composite_WS; ReCalc; ReDrawStats; Exit; end;
  if CBodyU(3,3) and CBodyL(3,2) and CGloves(3,2) then
    begin CurS := Demon; Set_INT := 4; Set_WIT := -1; ReCalc; ReDrawStats; Exit; end;
  if CBodyU(3,4) and CBodyL(3,3) and CGloves(3,3) then
    begin CurS := Divine; Set_INT := -1; Set_WIT := 1; ReCalc; ReDrawStats; Exit; end;
  if CBodyU(3,5) and CBoots(3,7) then
    begin CurS := Drake; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(3,3) and CBodyU(3,7) then
    begin CurS := FullPlate; if CShield(3,6) then CurS := FullPlate_WS; ReCalc; ReDrawStats; Exit; end;
  if CBodyU(3,8) and CBodyL(3,5) and CGloves(3,8) then
    begin CurS := Karmian; ReCalc; ReDrawStats; Exit; end;
  if CBodyU(3,9) and CBodyL(3,8) and CBoots(3,11) then
    begin CurS := Mith_Light; ReCalc; ReDrawStats; Exit; end;
  if CBodyU(3,10) and CBodyL(3,6) and CBoots(3,12) then
    begin CurS := Plated; Set_STR := 4; Set_CON := -1; ReCalc; ReDrawStats; Exit; end;
  if CBodyU(3,13) and CBodyL(3,9) and CBoots(3,14) then
    begin CurS := Theca; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(4,2) and CBodyU(4,2) and CBodyL(4,1) then
    begin CurS := Brigantine; if CShield(4,2) then CurS := Brigantine_WS; ReCalc; ReDrawStats; Exit; end;
  if CBodyU(4,12) and CBodyL(4,13) and CGloves(4,2) then
    begin CurS := Mith_Robe; Set_INT := -1; Set_Wit := 1; ReCalc; ReDrawStats; Exit; end;
  if CBodyU(4,20) and CBodyL(4,19) and CGloves(4,5) then
    begin CurS := Knowledge; ReCalc; ReDrawStats; Exit; end;
  if CBodyU(4,9) and CBodyL(4,9) and CBoots(4,9) then
    begin CurS := Manticore; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(4,4) and CBodyU(4,11) and CBodyL(4,11) then
    begin CurS := Mith_Heavy; if CShield(4,4) then CurS := Mith_Heavy_WS; ReCalc; ReDrawStats; Exit; end;
  if CBodyU(4,15) and CBodyL(4,17) and CBoots(4,11) then
    begin CurS := Reinforced; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(5,4) and CBodyU(5,14) and CBodyL(5,14) then
    begin CurS := Devotion; ReCalc; ReDrawStats; Exit; end;
  if CHelmet(5,5) and CBodyU(5,16) and CBodyL(5,16) then
    begin CurS := Wooden; ReCalc; ReDrawStats; Exit; end;
  CurS := None;
  ReCalc;
  ReDrawStats;  
end;

procedure TForm1.ComboBox69Change(Sender: TObject);
begin
  CheckSet;
end;

procedure TForm1.ComboBox72Change(Sender: TObject);
const
  B : array [0..5,0..21] of Equip =
    ((Non,LFull,Heavy,RFull,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non),
     (Non,HFull,Light,Heavy,RFull,LFull,HFull,RFull,LFull,RFull,LFull,HFull, Robe,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non),
     (Non,Heavy,LFull,RFull,Heavy,LFull, Robe,HFull,LFull, Robe, Robe,Heavy,Light,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non),
     (Non,Heavy,HFull, Robe, Robe,LFull,Heavy,HFull, Robe,Light,Light,RFull,Light,Light,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non),
     (Non,Heavy,Heavy,Heavy, Robe,Heavy, Robe,Heavy,Light,Light,Light,Heavy, Robe, Robe,Light,Light,Heavy,RFull,LFull,Heavy, Robe, Robe),
     (Non, Robe,Light,Heavy,Light, Robe, Robe,Light,Light, Robe,Heavy,Light,Light, Robe, Robe, Robe,Light,  Non,  Non,  Non,  Non,  Non));
begin
  BodyU := B[ComboBox71.ItemIndex,ComboBox72.ItemIndex];
  CheckSet;
end;

procedure TForm1.ComboBox75Change(Sender: TObject);
const
  B : array [0..5,0..19] of Equip =
    ((Non,Heavy,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non),
     (Non,Heavy,Light, Robe,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non),
     (Non,Heavy,Heavy, Robe, Robe, Robe,Heavy,Light,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non),
     (Non,Heavy, Robe, Robe,Heavy, Robe,Light,Light,Light,Light,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non,  Non),
     (Non,Heavy,Heavy, Robe, Robe,Heavy, Robe,Heavy,Light,Light,Light,Heavy,Heavy, Robe, Robe,Heavy,Light,Light,Heavy, Robe),
     (Non, Robe,Light,Heavy,Light, Robe, Robe,Light,Light,Light,Light,Light,Heavy,Light, Robe, Robe, Robe,Light,  Non,  Non));
begin
  BodyL := B[ComboBox74.ItemIndex,ComboBox75.ItemIndex];
  CheckSet;
end;

procedure TForm1.ComboBox78Change(Sender: TObject);
begin
  CheckSet;
end;

procedure TForm1.ComboBox81Change(Sender: TObject);
begin
  CheckSet;
end;

function TForm1.CShield(Grade, Number : Integer) : Boolean;
begin
  result := (ComboBox65.ItemIndex = Grade) and (ComboBox66.ItemIndex = Number);
end;

function TForm1.CHelmet(Grade, Number : Integer) : Boolean;
begin
  result := (ComboBox68.ItemIndex = Grade) and (ComboBox69.ItemIndex = Number);
end;

function TForm1.CBodyU(Grade, Number : Integer) : Boolean;
begin
  result := (ComboBox71.ItemIndex = Grade) and (ComboBox72.ItemIndex = Number);
end;

function TForm1.CBodyL(Grade, Number : Integer) : Boolean;
begin
  result := (ComboBox74.ItemIndex = Grade) and (ComboBox75.ItemIndex = Number); 
end;

function TForm1.CGloves(Grade, Number : Integer) : Boolean;
begin
  result := (ComboBox77.ItemIndex = Grade) and (ComboBox78.ItemIndex = Number);
end;

function TForm1.CBoots(Grade, Number : Integer) : Boolean;
begin
  result := (ComboBox80.ItemIndex = Grade) and (ComboBox81.ItemIndex = Number); 
end;

function TForm1.SumPDef : Integer;
const
  PShield : array [0..5,0..8] of Integer =
    ((  0,290,  0,  0,  0,  0,  0,  0,  0),
     (  0,243,256,  0,  0,  0,  0,  0,  0),
     (  0,216,230,216,  0,  0,  0,  0,  0),
     (  0,166,190,174,166,178,203,190,  0),
     (  0,114,142,101,128,142,154,154,  0),
     (  0, 90, 67, 47, 90, 79, 90, 69, 56));
  PHelmet : array [0..5,0..5] of Integer =
    ((12,83,83,83, 0, 0),
     (12,69,73,73,69, 0),
     (12,62,66,66,62, 0),
     (12,47,54,58,51,54),
     (12,29,41,33,37,44),
     (12,13,26,16,23,19));
  PBodyU : array [0..5,0..21] of Integer =
    (( 15,249,205,166,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0),
     ( 15,293,128,171,139,220,293,147,220,147,209,278, 86,  0,  0,  0,  0,  0,  0,  0,  0,  0),
     ( 15,157,191,127,166,202, 83,270,202, 83, 78,157,117,  0,  0,  0,  0,  0,  0,  0,  0,  0),
     ( 15,120,224, 69, 74,179,129,239, 60, 90, 94,105, 97,106,  0,  0,  0,  0,  0,  0,  0,  0),
     ( 15, 97,103, 95, 39, 95, 43,111, 65, 77, 73, 95, 52, 43, 58, 73, 77, 90,136, 87, 49, 43),
     ( 15, 17, 50, 68, 50, 21, 21, 53, 43, 25, 62, 36, 33, 18, 30, 34, 47,  0,  0,  0,  0,  0));
  PBodyL : array [0..5,0..19] of Integer =
    ((  8,128,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0),
     (  8,107, 80, 53,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0),
     (  8, 98,104, 52, 52, 49, 98, 73,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0),
     (  8, 75, 43, 46, 80, 37, 59, 60, 56, 66,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0),
     (  8, 64, 61, 24, 27, 61, 27, 48, 41, 48, 46, 61, 64, 32, 27, 70, 36, 46, 54, 30),
     (  8, 10, 32, 43, 32, 13, 13, 33, 29, 27, 22, 39, 20, 11, 19, 21, 29,  0,  0,  0));
  PGloves : array [0..5,0..13] of Integer =
    (( 8,55,55,55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
     ( 8,46,46,46,49,49,49,49,49,49,46,46,46, 0),
     ( 8,41,41,41,44,44,44,44,44,44,41,41,41, 0),
     ( 8,32,36,39,39,34,39,34,32,36,33,32,34,37),
     ( 8,27,27,19,24,24,22,27,29,29,24,27,29, 0),
     ( 8,17,13,15, 9,11, 0, 0, 0, 0, 0, 0, 0, 0));
  PBoots : array [0..5,0..14] of Integer =
    (( 7,55,55,55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
     ( 7,49,49,49,46,46,46,49,49,49,46,46,46, 0, 0),
     ( 7,41,41,41,44,44,44,44,44,44,41,41,41, 0, 0),
     ( 7,32,32,36,34,36,39,39,32,39,32,32,32,34,37),
     ( 7,29,22,24,27,27,27,24,19,27,29,24,29, 0, 0),
     ( 7, 8,17, 9,11,11, 9,13,15, 0, 0, 0, 0, 0, 0));
  IsFull : array [0..5,0..21] of Integer =
    ((0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
     (0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0),
     (0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
     (0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0),
     (0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0),
     (0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0));
var
  res : Integer;     
begin
  res := 0;
  if IsFull[ComboBox71.ItemIndex,ComboBox72.ItemIndex] = 1 then
    begin
      ComboBox73.Visible := False;
      ComboBox74.Visible := False;
      ComboBox75.Visible := False;
      Label61.Visible := False;
    end
  else
    begin
      ComboBox73.Visible := True;
      ComboBox74.Visible := True;
      ComboBox75.Visible := True;
      Label61.Visible := True;
    end;
  Inc(res,PHelmet[ComboBox68.ItemIndex,ComboBox69.ItemIndex]);
  Inc(res,PBodyU[ComboBox71.ItemIndex,ComboBox72.ItemIndex]);
  if (ComboBox72.ItemIndex = 0) and Fighter then
    Inc(res,16);
  if ComboBox72.Visible and (ComboBox72.ItemIndex = 0) and Fighter then
    Inc(res,7);
  if ComboBox73.Visible then
    begin
      Inc(res,PBodyL[ComboBox74.ItemIndex,ComboBox75.ItemIndex]);
      if (ComboBox75.ItemIndex = 0) and Fighter then
        Inc(res,10);
    end;
  Inc(res,PGloves[ComboBox77.ItemIndex,ComboBox78.ItemIndex]);
  Inc(res,PBoots[ComboBox80.ItemIndex,ComboBox81.ItemIndex]);
  dPDef := 0;
  IncPDef(ComboBox67,ComboBox69);
  IncPDef(ComboBox70,ComboBox72);
  IncPDef(ComboBox73,ComboBox75);
  IncPDef(ComboBox76,ComboBox78);
  IncPDef(ComboBox79,ComboBox81);
  if Lifon.Checked then
    begin
      res := res + 26;
      if ComboBox108.ItemIndex <= 3 then
        Inc(res,ComboBox108.ItemIndex)
      else
        Inc(res,3*(ComboBox108.ItemIndex - 3) + 3);  
    end;
  result := res + dPDef;
end;

procedure TForm1.CalcPDef;
const
  AMF : array [1..5] of Extended =
    (9.0,11.0,12.0,13.0,14.0);
  AMM : array [1..3] of Extended =
    (6.7,8.0,9.2);
  HvK : array [1..52] of Extended =
    (17.7,19.1,20.5,23.5,25.0,26.7,30.0,31.8,33.6,37.4,39.3,41.3,45.6,47.7,50.0,54.6,57.1,
     59.5,62.1,64.6,67.3,70.0,72.7,75.5,78.4,81.3,84.3,87.3,90.4,93.5,96.7,99.9,103.2,106.5,
     109.9,113.3,116.8,120.3,123.8,127.4,131.0,134.7,138.4,142.1,145.8,149.6,153.4,157.2,161.0,164.9,168.7,172.6);
  HvW : array [1..50] of Extended =
    (1.9,3.3,4.8,6.4,8.1,8.9,9.8,11.7,12.7,13.7,15.8,16.9,18.0,20.4,21.6,22.8,24.1,25.4,26.7,28.0,29.4,30.8,32.2,33.7,35.2,36.7,38.2,
     39.8,41.4,43.0,44.6,46.3,48.0,49.7,51.4,53.2,55.0,56.7,58.6,60.4,62.2,64.1,66.0,67.8,69.7,71.6,73.6,75.5,77.4,79.3);
  HvOrc : array [1..43] of Extended =
    (11.6,13.3,15.2,17.2,19.5,21.1,23.7,25.6,28.7,30.8,34.3,35.5,36.7,39.3,40.6,41.9,44.7,46.1,47.6,
     50.6,52.1,53.7,56.9,58.6,60.2,61.9,63.6,65.3,67.1,68.9,70.7,72.5,74.3,76.1,78.0,79.9,81.7,83.6,
     85.5,87.5,89.4,91.3,93.3);
  HvProf : array [1..33] of Extended =
    (14.8,15.6,16.5,18.3,19.2,20.2,22.1,23.1,24.1,26.2,27.3,28.4,30.6,31.8,33.0,34.1,35.3,36.5,37.8,39.0,
     40.3,41.5,42.8,44.1,45.4,46.7,48.0,49.4,50.7,52.0,53.4,54.7,56.1);
  LgWarr : array [1..50] of Extended =
    (4.2,5.3,6.5,7.7,9.0,9.9,10.8,12.7,13.7,14.8,16.9,18.0,19.1,21.5,22.7,24.0,25.3,26.6,27.9,29.3,30.7,
     32.1,33.6,35.0,36.5,38.1,39.6,41.2,42.8,44.5,46.1,47.8,49.5,51.3,53.0,54.8,56.6,58.4,60.2,62.1,
     64.0,65.8,67.7,69.7,71.6,73.5,75.5,77.4,79.4,81.3);
  LgArch : array [1..47] of Extended =
    (1.3,2.2,3.2,4.2,5.3,6.8,8.4,10.1,11.9,13.7,15.7,16.7,17.8,18.8,19.9,21.1,22.2,23.4,24.5,25.8,27.0,
     28.2,29.5,30.8,32.1,33.5,34.8,36.2,37.6,39.1,40.5,42.0,43.5,44.9,46.5,48.0,49.5,51.1,52.7,54.2,55.8,
     57.4,59.1,60.7,62.3,63.9,65.6);
  LgOrc : array [1..45] of Extended =
    (12.6,14.5,17.5,19.3,21.2,23.2,25.5,27.0,30.1,32.5,36.3,39.1,43.5,45.0,46.6,49.8,51.5,53.2,56.7,58.5,
     60.4,64.2,66.1,68.1,72.2,74.2,76.3,78.5,80.6,82.8,85.1,87.3,89.6,91.9,94.2,96.5,98.9,101.2,
     103.6,106.0,108.5,110.9,113.3,115.8,118.2);
  LgHeal : array [1..41] of Extended =
    (5.4,6.3,7.8,8.8,10.9,12.5,15.0,16.9,19.8,20.8,21.8,24.0,25.1,26.3,28.6,29.8,31.0,33.6,34.9,
     36.2,38.9,40.3,41.7,43.1,44.6,46.0,47.5,49.0,50.5,52.1,53.6,55.2,56.7,58.3,59.9,61.5,63.1,
     64.7,66.4,68.0,69.6);
  LgSumm : array [1..33] of Extended =
    (11.1,11.8,12.5,14.0,14.8,15.6,17.3,18.1,19.0,20.8,21.7,22.6,24.5,25.5,26.4,27.4,28.4,29.5,30.5,31.6,32.6,33.7,34.8,35.9,37.0,38.1,39.2,40.3,41.4,42.6,43.7,44.8,46.0);
  RbMystic : array [1..41] of Extended =
    (1.7,2.7,4.3,5.4,7.2,8.5,10.6,12.1,14.5,15.3,16.2,17.9,18.8,19.8,21.7,22.7,23.7,25.8,26.8,27.9,
     30.1,31.2,32.4,33.5,34.7,35.9,37.1,38.4,39.6,40.8,42.1,43.4,44.7,45.9,47.3,48.6,49.9,51.2,52.5,53.9,55.2);
  RbHeal : array [1..41] of Extended =
    (7.2,8.6,11.0,12.7,15.4,17.4,20.5,22.7,26.3,27.6,28.8,31.5,32.9,34.2,37.1,38.6,40.1,43.2,44.8,46.4,
     49.8,51.5,53.2,54.9,56.7,58.5,60.3,62.1,64.0,65.9,67.7,69.7,71.6,73.5,75.5,77.4,79.4,81.4,83.4,85.4,87.4);
  RbOrc : array [1..45] of Extended =
    (11.6,13.4,16.1,18.4,20.9,23.8,26.9,29.1,32.8,35.4,39.6,42.6,47.3,49.0,50.7,
    54.2,56.1,57.9,61.8,63.7,65.7,69.9,72.0,74.2,78.6,80.9,83.2,85.5,87.8,90.2,
    92.6,95.1,97.6,100.1,102.6,105.1,107.7,110.3,112.9,115.5,118.1,120.8,123.4,126.1,128.8);
var
  LM,AB,B1,AM,B2 : Extended;
  AMlvl : Integer;
begin
  LM := (Lvl + 89)/100;
  AB := 1;
  case CurS of
    Ava_robe,BW_Light,Divine,Karmian,Theca,Zub_Heavy : AB := 1.0526;
    Brigantine : AB := 1.05;
    DC_Robe,Imperial : AB := 1.08;
    Wooden : AB := 1.02;
  end;
  B1 := 1;
  if IsBers.Checked then
    case BersLvl.ItemIndex of
      0 : B1 := B1*0.95;
      1 : B1 := B1*0.92;
    end;
  if IsProphecy.Checked then
    case ProphecyLvl.ItemIndex of
      0,1 : B1 := B1*1.2;
    end;
  if IsGrShield.Checked then
    case GrShieldLvl.ItemIndex of
      0 : B1 := B1*1.05;
      1 : B1 := B1*1.1;
      2 : B1 := B1*1.15;
    end;
  if IsShield.Checked then
    case ShieldLvl.ItemIndex of
      0 : B1 := B1*1.08;
      1 : B1 := B1*1.12;
      2 : B1 := B1*1.15;
    end;
  if IsDefenceAura.Checked and IsDefenceAura.Visible then
    case DefenceAura.ItemIndex of
      0 : B1 := B1*1.08;
      1 : B1 := B1*1.12;
    end;
  if IsEarth.Checked then
    B1 := B1*1.25;
  if IsRage.Visible and IsRage.Checked then
     B1 := B1*0.8;
  if IsMajesty.Visible and IsMajesty.Checked then
    case Majesty.ItemIndex of
      0 : B1 := B1*1.07;
      1 : B1 := B1*1.11;
      2 : B1 := B1*1.15;
    end;
  if IsGuts.Checked and IsGuts.Visible then
    case Guts.ItemIndex of
      0 : B1 := B1*2;
      1 : B1 := B1*2.5;
      2 : B1 := B1*3;
    end;
  if IsHawkeye.Visible and IsHawkeye.Checked then
    B1 := B1*0.9;
  if IsAngelicIcon.Visible and IsAngelicIcon.Checked then
    B1 := B1*1.5;
  AM := 0;
  if IsArmorMastery.Checked and IsArmorMastery.Visible then
    begin
      AMlvl := ArmorMastery.ItemIndex + 1;
      if Fighter then
        AM := AM + AMF[AMlvl]
      else
        AM := AM + AMM[AMlvl]
    end;
  if IsHvArmorMastery.Checked and IsHvArmorMastery.Visible and (((BodyU = Heavy) and (BodyL = Heavy)) or (BodyU = HFull)) then
    begin
      AMlvl := HvArmorMastery.ItemIndex + 1;
      if Fighter and Gnom then
        AM := AM + HvW[AMlvl];
      if Fighter and not Gnom then
        AM := AM + HvK[AMlvl];
      if Buffer and not OrcMystic then
        AM := AM + HvProf[AMlvl];
      if Buffer and OrcMystic then
        AM := AM + HvOrc[AMlvl];
    end;
  if IsLgArmorMastery.Checked and IsLgArmorMastery.Visible and (((BodyU = Light) and (BodyL = Light)) or (BodyU = LFull)) then
    begin
      AMlvl := LgArmorMastery.ItemIndex + 1;
      if Fighter and Gnom then
        AM := AM + LgWarr[AMlvl];
      if Fighter and not Gnom then
        AM := AM + LgArch[AMlvl];
      if Buffer and not OrcMystic and not Summoner then
        AM := AM + LgHeal[AMlvl];
      if OrcMystic then
        AM := AM + LgOrc[AMlvl];
      if Buffer and Summoner then
        AM := AM + LgSumm[AMlvl];
    end;
  if IsRobeMastery.Checked and IsRobeMastery.Visible and (((BodyU = Robe) and (BodyL = Robe)) or (BodyU = RFull))then
    begin
      AMlvl := RobeMastery.ItemIndex + 1;
      if Mystic and not OrcMystic then
        AM := AM + RbMystic[AMlvl];
      if Buffer and not OrcMystic then
        AM := AM + RbHeal[AMlvl];
      if OrcMystic then
        AM := AM + RbOrc[AMlvl];
    end;
  B2 := 0;
  if IsSoulGuard.Checked and IsSoulGuard.Visible then
    case SoulGuard.ItemIndex of
      0 : B2 := B2 + 293.3;
      1 : B2 := B2 + 333.2;
      2 : B2 := B2 + 375.9;
      3 : B2 := B2 + 421.4;
      4 : B2 := B2 + 445.2;
      5 : B2 := B2 + 469.7;
      6 : B2 := B2 + 494.9;
      7 : B2 := B2 + 520.1;
      8 : B2 := B2 + 546.0;
      9 : B2 := B2 + 571.9;
      10: B2 := B2 + 598.5;
      11: B2 := B2 + 625.8;
      12: B2 := B2 + 653.1;
    end;
  if IsGuardStance.Checked and IsGuardStance.Visible then
    case GuardStance.ItemIndex of
      0 : B2 := B2 + 121.8;
      1 : B2 := B2 + 161.1;
      2 : B2 := B2 + 212.1;
      3 : B2 := B2 + 256.5;
    end;
  if IsParryStance.Checked and IsParryStance.Visible then
    B1 := B1*1.25;
  PDef := (4 + SumPDef)*LM*AB*B1 + AM + B2;
end;

procedure TForm1.IsShieldClick(Sender: TObject);
begin
  ShieldLvl.Enabled := IsShield.Checked;
  if IsShield.Checked then
    IsDefenceAura.Checked := False;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ShieldLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsEarthClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsGrShieldClick(Sender: TObject);
begin
  GrShieldLvl.Enabled := IsGrShield.Checked;
  if IsGrShield.Checked and IsGrMight.Checked then
    begin
      IsGrMight.Checked := False;
      IsGrMightClick(Sender);
    end;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsGrMightClick(Sender: TObject);
begin
  GrMightLvl.Enabled := IsGrMight.Checked;
  if IsGrShield.Checked and IsGrMight.Checked then
    begin
      IsGrShield.Checked := False;
      IsGrShieldClick(Sender);
    end;  
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.GrShieldLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsMightClick(Sender: TObject);
begin
  MightLvl.Enabled := IsMight.Checked;
  if IsMight.Checked then
    IsAttackAura.Checked := False;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.MightLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsWarriorClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.GrMightLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.SetTatooType;
var
  Sender : TObject;
begin
  Sender := nil;
  IsTatoo1.Checked := False;
  IsTatoo2.Checked := False;
  IsTatoo3.Checked := False;
  case Profa of
    0 : begin
          IsTatoo2.Visible := False;
          Label13.Visible := False;
          ComboBox4.Visible := False;
          Label72.Visible := False;
          ComboBox5.Visible := False;
          ComboBox101.Visible := False;
          Label73.Visible := False;
          ComboBox102.Visible := False;
          IsTatoo3.Visible := False;
          Label14.Visible := False;
          ComboBox103.Visible := False;
          Label74.Visible := False;
          ComboBox104.Visible := False;
          ComboBox105.Visible := False;
          Label75.Visible := False;
          ComboBox106.Visible := False;
          ComboBox98.Items.Clear;
          ComboBox98.Items.Add('1');
          ComboBox98.ItemIndex := 0;
          ComboBox100.Items.Clear;
          ComboBox100.Items.Add('1');
          ComboBox100.Items.Add('2');
          ComboBox100.Items.Add('3');
          ComboBox100.ItemIndex := 0;
          ComboBox2.Items.Clear;
          ComboBox2.Items.Add('STR');
          ComboBox2.Items.Add('DEX');
          ComboBox2.Items.Add('CON');
          ComboBox2.Items.Add('INT');
          ComboBox2.Items.Add('WIT');
          ComboBox2.Items.Add('MEN');
          ComboBox2.ItemIndex := 0;
          ComboBox2Change(Sender);
        end;
    1 : begin
          IsTatoo2.Visible := True;
          Label13.Visible := True;
          ComboBox4.Visible := True;
          Label72.Visible := True;
          ComboBox5.Visible := True;
          ComboBox101.Visible := True;
          Label73.Visible := True;
          ComboBox102.Visible := True;
          IsTatoo3.Visible := False;
          Label14.Visible := False;
          ComboBox103.Visible := False;
          Label74.Visible := False;
          ComboBox104.Visible := False;
          ComboBox105.Visible := False;
          Label75.Visible := False;
          ComboBox106.Visible := False;
          ComboBox98.Items.Clear;
          ComboBox98.Items.Add('1');
          ComboBox98.ItemIndex := 0;
          ComboBox100.Items.Clear;
          ComboBox100.Items.Add('1');
          ComboBox100.Items.Add('2');
          ComboBox100.Items.Add('3');
          ComboBox100.ItemIndex := 0;
          ComboBox2.Items.Clear;
          ComboBox2.Items.Add('STR');
          ComboBox2.Items.Add('DEX');
          ComboBox2.Items.Add('CON');
          ComboBox2.Items.Add('INT');
          ComboBox2.Items.Add('WIT');
          ComboBox2.Items.Add('MEN');
          ComboBox2.ItemIndex := 0;
          ComboBox4.Items.Clear;
          ComboBox4.Items.Add('STR');
          ComboBox4.Items.Add('DEX');
          ComboBox4.Items.Add('CON');
          ComboBox4.Items.Add('INT');
          ComboBox4.Items.Add('WIT');
          ComboBox4.Items.Add('MEN');
          ComboBox4.ItemIndex := 0;
          ComboBox5.Items.Clear;
          ComboBox5.Items.Add('1');
          ComboBox5.ItemIndex := 0;
          ComboBox102.Items.Clear;
          ComboBox102.Items.Add('1');
          ComboBox102.Items.Add('2');
          ComboBox102.Items.Add('3');
          ComboBox102.ItemIndex := 0;
          ComboBox2Change(Sender);
          ComboBox4Change(Sender);
        end;
    2 : begin
          IsTatoo2.Visible := True;
          Label13.Visible := True;
          ComboBox4.Visible := True;
          Label72.Visible := True;
          ComboBox5.Visible := True;
          ComboBox101.Visible := True;
          Label73.Visible := True;
          ComboBox102.Visible := True;
          IsTatoo3.Visible := True;
          Label14.Visible := True;
          ComboBox103.Visible := True;
          Label74.Visible := True;
          ComboBox104.Visible := True;
          ComboBox105.Visible := True;
          Label75.Visible := True;
          ComboBox106.Visible := True;
          ComboBox98.Items.Clear;
          ComboBox98.Items.Add('1');
          ComboBox98.Items.Add('2');
          ComboBox98.Items.Add('3');
          ComboBox98.Items.Add('4');
          ComboBox98.ItemIndex := 0;
          ComboBox5.Items.Clear;
          ComboBox5.Items.Add('1');
          ComboBox5.Items.Add('2');
          ComboBox5.Items.Add('3');
          ComboBox5.Items.Add('4');
          ComboBox5.ItemIndex := 0;
          ComboBox100.Items.Clear;
          ComboBox100.Items.Add('1');
          ComboBox100.Items.Add('2');
          ComboBox100.Items.Add('3');
          ComboBox100.Items.Add('4');
          ComboBox100.Items.Add('5');
          ComboBox100.Items.Add('6');
          ComboBox100.ItemIndex := 0;
          ComboBox2.Items.Clear;
          ComboBox2.Items.Add('STR');
          ComboBox2.Items.Add('DEX');
          ComboBox2.Items.Add('CON');
          if not Buffer then
            ComboBox2.Items.Add('INT');
          ComboBox2.Items.Add('WIT');
          if not Fighter then
            ComboBox2.Items.Add('MEN');
          ComboBox2.ItemIndex := 0;
          ComboBox4.Items.Clear;
          ComboBox4.Items.Add('STR');
          ComboBox4.Items.Add('DEX');
          ComboBox4.Items.Add('CON');
          if not Buffer then
            ComboBox4.Items.Add('INT');
          ComboBox4.Items.Add('WIT');
          if not Fighter then
            ComboBox4.Items.Add('MEN');
          ComboBox4.ItemIndex := 0;
          ComboBox103.Items.Clear;
          ComboBox103.Items.Add('STR');
          ComboBox103.Items.Add('DEX');
          ComboBox103.Items.Add('CON');
          if not Buffer then
            ComboBox103.Items.Add('INT');
          ComboBox103.Items.Add('WIT');
          if not Fighter then
            ComboBox103.Items.Add('MEN');
          ComboBox104.ItemIndex := 0;
          ComboBox103.ItemIndex := 0;
          ComboBox2Change(Sender);
          ComboBox4Change(Sender);
          ComboBox103Change(Sender);
          ComboBox98Change(Sender);
          ComboBox104Change(Sender);
          ComboBox5Change(Sender);
        end;
  end      
end;

procedure TForm1.ComboBox2Change(Sender: TObject);
begin
  if Profa <= 1 then
    begin
      if ComboBox2.Text = 'STR' then
        begin
          ComboBox99.Items.Clear;
          ComboBox99.Items.Add('DEX');
          ComboBox99.Items.Add('CON');
          ComboBox99.ItemIndex := 0;
        end;
      if ComboBox2.Text = 'DEX' then
        begin
          ComboBox99.Items.Clear;
          ComboBox99.Items.Add('STR');
          ComboBox99.Items.Add('CON');
          ComboBox99.ItemIndex := 0;
        end;
      if ComboBox2.Text = 'CON' then
        begin
          ComboBox99.Items.Clear;
          ComboBox99.Items.Add('STR');
          ComboBox99.Items.Add('DEX');
          ComboBox99.ItemIndex := 0;
        end;
      if ComboBox2.Text = 'INT' then
        begin
          ComboBox99.Items.Clear;
          ComboBox99.Items.Add('WIT');
          ComboBox99.Items.Add('MEN');
          ComboBox99.ItemIndex := 0;
        end;
      if ComboBox2.Text = 'WIT' then
        begin
          ComboBox99.Items.Clear;
          ComboBox99.Items.Add('INT');
          ComboBox99.Items.Add('MEN');
          ComboBox99.ItemIndex := 0;
        end;
      if ComboBox2.Text = 'MEN' then
        begin
          ComboBox99.Items.Clear;
          ComboBox99.Items.Add('INT');
          ComboBox99.Items.Add('WIT');
          ComboBox99.ItemIndex := 0;
        end;
    end
  else
    begin
      if ComboBox2.Text = 'STR' then
        begin
          ComboBox99.Items.Clear;
          ComboBox99.Items.Add('DEX');
          ComboBox99.Items.Add('CON');
          ComboBox99.ItemIndex := 0;
        end;
      if ComboBox2.Text = 'DEX' then
        begin
          ComboBox99.Items.Clear;
          ComboBox99.Items.Add('STR');
          ComboBox99.Items.Add('CON');
          ComboBox99.ItemIndex := 0;
        end;
      if ComboBox2.Text = 'CON' then
        begin
          ComboBox99.Items.Clear;
          ComboBox99.Items.Add('STR');
          ComboBox99.Items.Add('DEX');
          ComboBox99.ItemIndex := 0;
        end;
      if ComboBox2.Text = 'INT' then
        begin
          ComboBox99.Items.Clear;
          ComboBox99.Items.Add('WIT');
          if not Fighter then
            ComboBox99.Items.Add('MEN');
          ComboBox99.ItemIndex := 0;
        end;
      if ComboBox2.Text = 'WIT' then
        begin
          ComboBox99.Items.Clear;
          if not Buffer then
            ComboBox99.Items.Add('INT');
          if not Fighter then
            ComboBox99.Items.Add('MEN');
          ComboBox99.ItemIndex := 0;
        end;
      if ComboBox2.Text = 'MEN' then
        begin
          ComboBox99.Items.Clear;
          if not Buffer then
            ComboBox99.Items.Add('INT');
          ComboBox99.Items.Add('WIT');
          ComboBox99.ItemIndex := 0;
        end;
    end;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ComboBox4Change(Sender: TObject);
begin
  if Profa <= 1 then
    begin
      if ComboBox4.Text = 'STR' then
        begin
          ComboBox101.Items.Clear;
          ComboBox101.Items.Add('DEX');
          ComboBox101.Items.Add('CON');
          ComboBox101.ItemIndex := 0;
        end;
      if ComboBox4.Text = 'DEX' then
        begin
          ComboBox101.Items.Clear;
          ComboBox101.Items.Add('STR');
          ComboBox101.Items.Add('CON');
          ComboBox101.ItemIndex := 0;
        end;
      if ComboBox4.Text = 'CON' then
        begin
          ComboBox101.Items.Clear;
          ComboBox101.Items.Add('STR');
          ComboBox101.Items.Add('DEX');
          ComboBox101.ItemIndex := 0;
        end;
      if ComboBox4.Text = 'INT' then
        begin
          ComboBox101.Items.Clear;
          ComboBox101.Items.Add('WIT');
          ComboBox101.Items.Add('MEN');
          ComboBox101.ItemIndex := 0;
        end;
      if ComboBox4.Text = 'WIT' then
        begin
          ComboBox101.Items.Clear;
          ComboBox101.Items.Add('INT');
          ComboBox101.Items.Add('MEN');
          ComboBox101.ItemIndex := 0;
        end;
      if ComboBox4.Text = 'MEN' then
        begin
          ComboBox101.Items.Clear;
          ComboBox101.Items.Add('INT');
          ComboBox101.Items.Add('WIT');
          ComboBox101.ItemIndex := 0;
        end;
    end
  else
    begin
      if ComboBox4.Text = 'STR' then
        begin
          ComboBox101.Items.Clear;
          ComboBox101.Items.Add('DEX');
          ComboBox101.Items.Add('CON');
          ComboBox101.ItemIndex := 0;
        end;
      if ComboBox4.Text = 'DEX' then
        begin
          ComboBox101.Items.Clear;
          ComboBox101.Items.Add('STR');
          ComboBox101.Items.Add('CON');
          ComboBox101.ItemIndex := 0;
        end;
      if ComboBox4.Text = 'CON' then
        begin
          ComboBox101.Items.Clear;
          ComboBox101.Items.Add('STR');
          ComboBox101.Items.Add('DEX');
          ComboBox101.ItemIndex := 0;
        end;
      if ComboBox4.Text = 'INT' then
        begin
          ComboBox101.Items.Clear;
          ComboBox101.Items.Add('WIT');
          if not Fighter then
            ComboBox101.Items.Add('MEN');
          ComboBox101.ItemIndex := 0;
        end;
      if ComboBox4.Text = 'WIT' then
        begin
          ComboBox101.Items.Clear;
          if not Buffer then
            ComboBox101.Items.Add('INT');
          if not Fighter then
            ComboBox101.Items.Add('MEN');
          ComboBox101.ItemIndex := 0;
        end;
      if ComboBox4.Text = 'MEN' then
        begin
          ComboBox101.Items.Clear;
          if not Buffer then
            ComboBox101.Items.Add('INT');
          ComboBox101.Items.Add('WIT');
          ComboBox101.ItemIndex := 0;
        end;
    end;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.CalcTatooBonus;
begin
  tSTR := 0;
  tDEX := 0;
  tCON := 0;
  tINT := 0;
  tWIT := 0;
  tMEN := 0;
  if IsTatoo1.Visible and IsTatoo1.Checked then
    begin
      if ComboBox2.Text = 'STR' then
        Inc(tSTR,StrToInt(ComboBox98.Text));
      if ComboBox2.Text = 'DEX' then
        Inc(tDEX,StrToInt(ComboBox98.Text));
      if ComboBox2.Text = 'CON' then
        Inc(tCON,StrToInt(ComboBox98.Text));
      if ComboBox2.Text = 'INT' then
        Inc(tINT,StrToInt(ComboBox98.Text));
      if ComboBox2.Text = 'WIT' then
        Inc(tWIT,StrToInt(ComboBox98.Text));
      if ComboBox2.Text = 'MEN' then
        Inc(tMEN,StrToInt(ComboBox98.Text));
      if ComboBox99.Text = 'STR' then
        Dec(tSTR,StrToInt(ComboBox100.Text));
      if ComboBox99.Text = 'DEX' then
        Dec(tDEX,StrToInt(ComboBox100.Text));
      if ComboBox99.Text = 'CON' then
        Dec(tCON,StrToInt(ComboBox100.Text));
      if ComboBox99.Text = 'INT' then
        Dec(tINT,StrToInt(ComboBox100.Text));
      if ComboBox99.Text = 'WIT' then
        Dec(tWIT,StrToInt(ComboBox100.Text));
      if ComboBox99.Text = 'MEN' then
        Dec(tMEN,StrToInt(ComboBox100.Text));
    end;
  if IsTatoo2.Visible and IsTatoo2.Checked then
    begin
      if ComboBox4.Text = 'STR' then
        Inc(tSTR,StrToInt(ComboBox5.Text));
      if ComboBox4.Text = 'DEX' then
        Inc(tDEX,StrToInt(ComboBox5.Text));
      if ComboBox4.Text = 'CON' then
        Inc(tCON,StrToInt(ComboBox5.Text));
      if ComboBox4.Text = 'INT' then
        Inc(tINT,StrToInt(ComboBox5.Text));
      if ComboBox4.Text = 'WIT' then
        Inc(tWIT,StrToInt(ComboBox5.Text));
      if ComboBox4.Text = 'MEN' then
        Inc(tMEN,StrToInt(ComboBox5.Text));
      if ComboBox101.Text = 'STR' then
        Dec(tSTR,StrToInt(ComboBox102.Text));
      if ComboBox101.Text = 'DEX' then
        Dec(tDEX,StrToInt(ComboBox102.Text));
      if ComboBox101.Text = 'CON' then
        Dec(tCON,StrToInt(ComboBox102.Text));
      if ComboBox101.Text = 'INT' then
        Dec(tINT,StrToInt(ComboBox102.Text));
      if ComboBox101.Text = 'WIT' then
        Dec(tWIT,StrToInt(ComboBox102.Text));
      if ComboBox101.Text = 'MEN' then
        Dec(tMEN,StrToInt(ComboBox102.Text));
    end;
  if IsTatoo3.Visible and IsTatoo3.Checked then
    begin
      if ComboBox103.Text = 'STR' then
        Inc(tSTR,StrToInt(ComboBox104.Text));
      if ComboBox103.Text = 'DEX' then
        Inc(tDEX,StrToInt(ComboBox104.Text));
      if ComboBox103.Text = 'CON' then
        Inc(tCON,StrToInt(ComboBox104.Text));
      if ComboBox103.Text = 'INT' then
        Inc(tINT,StrToInt(ComboBox104.Text));
      if ComboBox103.Text = 'WIT' then
        Inc(tWIT,StrToInt(ComboBox104.Text));
      if ComboBox103.Text = 'MEN' then
        Inc(tMEN,StrToInt(ComboBox104.Text));
      if ComboBox105.Text = 'STR' then
        Dec(tSTR,StrToInt(ComboBox106.Text));
      if ComboBox105.Text = 'DEX' then
        Dec(tDEX,StrToInt(ComboBox106.Text));
      if ComboBox105.Text = 'CON' then
        Dec(tCON,StrToInt(ComboBox106.Text));
      if ComboBox105.Text = 'INT' then
        Dec(tINT,StrToInt(ComboBox106.Text));
      if ComboBox105.Text = 'WIT' then
        Dec(tWIT,StrToInt(ComboBox106.Text));
      if ComboBox105.Text = 'MEN' then
        Dec(tMEN,StrToInt(ComboBox106.Text));
    end;
  if tSTR > 5 then
    tSTR := 5;
  if tDEX > 5 then
    tDEX := 5;
  if tCON > 5 then
    tCON := 5;
  if tINT > 5 then
    tINT := 5;
  if tWIT > 5 then
    tWIT := 5;
  if tMEN > 5 then
    tMEN := 5;
  if STR + Set_STR + tSTR <= 0 then
    tSTR := 1 - STR - Set_STR;
  if DEX + Set_DEX + tDEX <= 0 then
    tDEX := 1 - DEX - Set_DEX;
  if CON + Set_CON + tCON <= 0 then
    tCON := 1 - CON - Set_CON;
  if INT + Set_INT + tINT <= 0 then
    tINT := 1 - INT - Set_INT;
  if WIT + Set_WIT + tWIT <= 0 then
    tWIT := 1 - WIT - Set_WIT;
  if MEN + Set_MEN + tMEN <= 0 then
    tMEN := 1 - MEN - Set_MEN;
end;

procedure TForm1.ComboBox98Change(Sender: TObject);
var
  t,i : Integer;
begin
  t := StrToInt(ComboBox98.Text);
  ComboBox100.Items.Clear;
  for i := t to t + 2 do
    ComboBox100.Items.Add(IntToStr(i));
  ComboBox100.ItemIndex := 0;  
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ComboBox99Change(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ComboBox100Change(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ComboBox5Change(Sender: TObject);
var
  t,i : Integer;
begin
  t := StrToInt(ComboBox5.Text);
  ComboBox102.Items.Clear;
  for i := t to t + 2 do
    ComboBox102.Items.Add(IntToStr(i));
  ComboBox102.ItemIndex := 0;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ComboBox101Change(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ComboBox102Change(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ComboBox103Change(Sender: TObject);
begin
  if ComboBox103.Text = 'STR' then
    begin
      ComboBox105.Items.Clear;
      ComboBox105.Items.Add('DEX');
      ComboBox105.Items.Add('CON');
      ComboBox105.ItemIndex := 0;
    end;
  if ComboBox103.Text = 'DEX' then
    begin
      ComboBox105.Items.Clear;
      ComboBox105.Items.Add('STR');
      ComboBox105.Items.Add('CON');
      ComboBox105.ItemIndex := 0;
    end;
  if ComboBox103.Text = 'CON' then
    begin
      ComboBox105.Items.Clear;
      ComboBox105.Items.Add('STR');
      ComboBox105.Items.Add('DEX');
      ComboBox105.ItemIndex := 0;
    end;
  if ComboBox103.Text = 'INT' then
    begin
      ComboBox105.Items.Clear;
      ComboBox105.Items.Add('WIT');
      if not Fighter then
        ComboBox105.Items.Add('MEN');
      ComboBox105.ItemIndex := 0;
    end;
  if ComboBox103.Text = 'WIT' then
    begin
      ComboBox105.Items.Clear;
      if not Buffer then
        ComboBox105.Items.Add('INT');
      if not Fighter then
        ComboBox105.Items.Add('MEN');
      ComboBox105.ItemIndex := 0;
    end;
  if ComboBox103.Text = 'MEN' then
    begin
      ComboBox105.Items.Clear;
      if not Buffer then
        ComboBox105.Items.Add('INT');
      ComboBox105.Items.Add('WIT');
      ComboBox105.ItemIndex := 0;
    end;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ComboBox104Change(Sender: TObject);
var
  t,i : Integer;
begin
  t := StrToInt(ComboBox104.Text);
  ComboBox106.Items.Clear;
  for i := t to t + 2 do
    ComboBox106.Items.Add(IntToStr(i));
  ComboBox106.ItemIndex := 0;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.Label12Click(Sender: TObject);
begin
  IsTatoo1.Checked := not IsTatoo1.Checked; 
  IsTatoo1Click(Sender);
end;

procedure TForm1.Label13Click(Sender: TObject);
begin
  IsTatoo2.Checked := not IsTatoo2.Checked;
  IsTatoo2Click(Sender);
end;

procedure TForm1.Label14Click(Sender: TObject);
begin
  IsTatoo3.Checked := not IsTatoo3.Checked;
  IsTatoo3Click(Sender);
end;

procedure TForm1.ComboBox106Change(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.Jewelry;
const
  MNeck : array [0..5,0..7] of Integer =
    ((13,95,91,95, 0, 0, 0, 0),
     (13,85,80,80,76, 0, 0, 0),
     (13,68,72,68,68, 0, 0, 0),
     (13,52,64,60,56, 0, 0, 0),
     (13,45,36,40,48,32, 0, 0),
     (13,28,21,15,15,18,21,25));
  MPNeck : array [0..5,0..7] of Integer =
    (( 0,42, 0,42, 0, 0, 0, 0),
     ( 0,33,26, 0, 0, 0, 0, 0),
     ( 0, 0, 0, 0, 0, 0, 0, 0),
     ( 0, 0, 0, 0, 0, 0, 0, 0),
     ( 0, 0, 0, 0, 0, 0, 0, 0),
     ( 0, 0, 0, 0, 0, 0, 0, 0));
  MEar : array [0..5,0..6] of Integer =
    (( 9,71,68,71,71, 0, 0),
     ( 9,71,63,60,60,57, 0),
     ( 9,51,54,51, 0, 0, 0),
     ( 9,45,42,39,48, 0, 0),
     ( 9,34,27,36,24,30, 0),
     ( 9,11,19,21,16,16,13));
  MPEar : array [0..5,0..6] of Integer =
    (( 0,31, 0,31,31, 0, 0),
     ( 0,31,25,20, 0, 0, 0),
     ( 0, 0, 0, 0, 0, 0, 0),
     ( 0, 0, 0, 0, 0, 0, 0),
     ( 0, 0, 0, 0, 0, 0, 0),
     ( 0, 0, 0, 0, 0, 0, 0));
  MRing : array [0..5,0..7] of Integer =
    (( 5,48,46,48, 0, 0, 0, 0),
     ( 5,42,40,48,40,38, 0, 0),
     ( 5,34,36,34,48, 0, 0, 0),
     ( 5,26,30,32,28, 0, 0, 0),
     ( 5,20,22,18,24,16, 0, 0),
     ( 5,14, 7,11,11, 9,11,12));
  MPRing : array [0..5,0..7] of Integer =
    (( 0,21, 0,21, 0, 0, 0, 0),
     ( 0,17,13,21, 0, 0, 0, 0),
     ( 0, 0, 0, 0,21, 0, 0, 0),
     ( 0, 0, 0, 0, 0, 0, 0, 0),
     ( 0, 0, 0, 0, 0, 0, 0, 0),
     ( 0, 0, 0, 0, 0, 0, 0, 0));
begin
  dMDef := 0;
  IncMDef(ComboBox83,ComboBox85);
  IncMDef(ComboBox86,ComboBox88);
  IncMDef(ComboBox91,ComboBox89);
  IncMDef(ComboBox92,ComboBox96);
  IncMDef(ComboBox93,ComboBox97);
  SumMDEF := MNeck[ComboBox84.ItemIndex,ComboBox85.ItemIndex] + MEar[ComboBox87.ItemIndex,ComboBox88.ItemIndex] +
            + MEar[ComboBox90.ItemIndex,ComboBox89.ItemIndex] + MRing[ComboBox94.ItemIndex,ComboBox96.ItemIndex] +
            + MRing[ComboBox95.ItemIndex,ComboBox97.ItemIndex] + dMDef;
  Bonus_MP := MPNeck[ComboBox84.ItemIndex,ComboBox85.ItemIndex] + MPEar[ComboBox87.ItemIndex,ComboBox88.ItemIndex] +
            + MPEar[ComboBox90.ItemIndex,ComboBox89.ItemIndex] + MPRing[ComboBox94.ItemIndex,ComboBox96.ItemIndex] +
            + MPRing[ComboBox95.ItemIndex,ComboBox97.ItemIndex];
  J_Valakas := (ComboBox84.ItemIndex = 0) and (ComboBox85.ItemIndex = 1);
  J_Antharas := ((ComboBox87.ItemIndex = 0) and (ComboBox88.ItemIndex = 1)) or
                ((ComboBox90.ItemIndex = 0) and (ComboBox89.ItemIndex = 1));
  J_Zaken := ((ComboBox87.ItemIndex = 0) and (ComboBox88.ItemIndex = 4)) or
             ((ComboBox90.ItemIndex = 0) and (ComboBox89.ItemIndex = 4));
  J_Orfen := ((ComboBox87.ItemIndex = 1) and (ComboBox88.ItemIndex = 1)) or
             ((ComboBox90.ItemIndex = 1) and (ComboBox89.ItemIndex = 1));
  J_Baium := ((ComboBox94.ItemIndex = 0) and (ComboBox96.ItemIndex = 1)) or
             ((ComboBox95.ItemIndex = 0) and (ComboBox97.ItemIndex = 1));
  J_Core := ((ComboBox94.ItemIndex = 1) and (ComboBox96.ItemIndex = 3)) or
            ((ComboBox95.ItemIndex = 1) and (ComboBox97.ItemIndex = 3));
  J_AntQueen := ((ComboBox94.ItemIndex = 2) and (ComboBox96.ItemIndex = 4)) or
                ((ComboBox95.ItemIndex = 2) and (ComboBox97.ItemIndex = 4));
  ReCalc;
  ReDrawStats;          
end;

procedure TForm1.ComboBox85Change(Sender: TObject);
begin
  Jewelry;
end;

procedure TForm1.ComboBox88Change(Sender: TObject);
begin
  Jewelry;
end;

procedure TForm1.ComboBox89Change(Sender: TObject);
begin
  Jewelry;
end;

procedure TForm1.ComboBox96Change(Sender: TObject);
begin
  Jewelry;
end;

procedure TForm1.ComboBox97Change(Sender: TObject);
begin
  Jewelry;
end;

procedure TForm1.CalcMDef;
const
  MR : array [1..51] of Integer =
    (19,20,22,23,24,26,27,28,30,31,32,35,36,37,40,42,43,44,46,47,49,51,52,54,56,
     57,59,61,63,64,66,68,70,72,74,76,78,80,82,84,86,88,91,93,95,97,99,102,104,106,108);
  AM : array [1..45] of Integer =
    (10,12,14,16,18,20,23,25,28,30,34,36,40,42,43,46,47,49,52,54,56,59,61,63,66,68,
     70,72,74,76,78,80,82,84,86,88,91,93,95,97,99,102,104,106,108);

var
  LM,AB,MDM,B1 : Extended;
  B2 : Integer;
begin
  case MEN + Set_MEN + tMEN of
     1 : _Men := 1.01;
     2 : _Men := 1.02;
     3 : _Men := 1.03;
     4 : _Men := 1.04;
     5 : _Men := 1.05;
     6 : _Men := 1.06;
     7 : _Men := 1.07;
     8 : _Men := 1.08;
     9 : _Men := 1.09;
    10 : _Men := 1.11;
    11 : _Men := 1.12;
    12 : _Men := 1.13;
    13 : _Men := 1.14;
    14 : _Men := 1.15;
    15 : _Men := 1.16;
    16 : _Men := 1.17;
    17 : _Men := 1.19;
    18 : _Men := 1.20;
    19 : _Men := 1.21;
    20 : _Men := 1.22;
    21 : _Men := 1.23;
    22 : _Men := 1.25;
    23 : _Men := 1.26;
    24 : _Men := 1.27;
    25 : _Men := 1.28;
    26 : _Men := 1.30;
    27 : _Men := 1.31;
    28 : _Men := 1.32;
    29 : _Men := 1.34;
    30 : _Men := 1.35;
    31 : _Men := 1.36;
    32 : _Men := 1.38;
    33 : _Men := 1.39;
    34 : _Men := 1.40;
    35 : _Men := 1.42;
    36 : _Men := 1.43;
    37 : _Men := 1.45;
    38 : _Men := 1.46;
    39 : _Men := 1.48;
    40 : _Men := 1.49;
    41 : _Men := 1.50;
    42 : _Men := 1.52;
    43 : _Men := 1.53;
    44 : _Men := 1.55;
    45 : _Men := 1.57;
    46 : _Men := 1.58;
    47 : _Men := 1.60;
    48 : _Men := 1.61;
    49 : _Men := 1.63;
    50 : _Men := 1.65;
  end;
  LM := (Lvl + 89)/100;
  AB := 1;
  case CurS of
    Composite_WS : AB := 1.0526;
    Ava_Light : AB := 1.0525;
    Drake : AB := 1.0524;
    Night_Light : AB := 1.04;
    Tal_Robe : AB := 1.08;
  end;
  MDM := 0;
  if IsAntiMagic.Visible and IsAntiMagic.Checked then
    MDM := MDM + AM[AntiMagic.ItemIndex + 1];
  if IsMagicResistance.Visible and IsMagicResistance.Checked then
    MDM := MDM + MR[MagicResistance.ItemIndex + 1];
  B1 := 1;
  if IsBers.Checked then
    case BersLvl.ItemIndex of
      0 : B1 := B1*0.9;
      1 : B1 := B1*0.84;
    end;
  if IsProphecy.Checked then
    case ProphecyLvl.ItemIndex of
      0,2 : B1 := B1*1.2;
    end;
  if IsBarrier.Checked then
    case BarrierLvl.ItemIndex of
      0 : B1 := B1*1.23;
      1 : B1 := B1*1.30;
    end;
  if IsSpiritBarrier.Visible and IsSpiritBarrier.Checked then
    case SpiritBarrier.ItemIndex of
      0 : B1 := B1*1.15;
      1 : B1 := B1*1.23;
      2 : B1 := B1*1.30;
    end;
  if IsWarding.Checked then
    B1 := B1*1.3;
  if IsAngelicIcon.Visible and IsAngelicIcon.Checked then
    B1 := B1*1.5;
  if IsParryStance.Checked and IsParryStance.Visible then
    B1 := B1*1.25;  
  B2 := 0;
  MDef := SumMDEF*LM*_Men*AB*B1 + MDM + B2;
end;

procedure TForm1.IsBarrierClick(Sender: TObject);
begin
  BarrierLvl.Enabled := IsBarrier.Checked;
  if IsBarrier.Checked then
    IsSpiritBarrier.Checked := False;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.BarrierLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsWardingClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ClearPassives;
begin
  IsWeaponMastery.Visible := False;
  WeaponMastery.Visible := False;
  IsBluntMastery.Visible := False;
  BluntMastery.Visible := False;
  IsDaggerMastery.Visible := False;
  DaggerMastery.Visible := False;
  IsBowMastery.Visible := False;
  BowMastery.Visible := False;
  IsSwordMastery.Visible := False;
  SwordMastery.Visible := False;
  IsPolearmMastery.Visible := False;
  PolearmMastery.Visible := False;
  IsDualSwordMastery.Visible := False;
  DualSwordMastery.Visible := False;
  IsFistMastery.Visible := False;
  FistMastery.Visible := False;
  IsTwoHandsMastery.Visible := False;
  TwoHandsMastery.Visible := False;
  IsArmorMastery.Visible := False;
  ArmorMastery.Visible := False;
  IsHvArmorMastery.Visible := False;
  HvArmorMastery.Visible := False;
  IsLgArmorMastery.Visible := False;
  LgArmorMastery.Visible := False;
  IsRobeMastery.Visible := False;
  RobeMastery.Visible := False;
  IsAntiMagic.Visible := False;
  AntiMagic.Visible := False;
  IsMagicResistance.Visible := False;
  MagicResistance.Visible := False;
  IsClearMind.Visible := False;
  ClearMind.Visible := False;
  IsBoostMana.Visible := False;
  BoostMana.Visible := False;
  IsFastSpellCasting.Visible := False;
  FastSpellCasting.Visible := False;
  IsFastHPRecovery.Visible := False;
  FastHPRecovery.Visible := False;
  IsFastManaRecovery.Visible := False;
  FastManaRecovery.Visible := False;
  IsQuickStep.Visible := False;
  QuickStep.Visible := False;
  IsBoostEvasion.Visible := False;
  BoostEvasion.Visible := False;
  IsShadowSence.Visible := False;
  ShadowSence.Visible := False;
  IsEsprit.Visible := False;
  Esprit.Visible := False;
  IsCriticalPower.Visible := False;
  CriticalPower.Visible := False;
  IsAcrobaticMove.Visible := False;
  AcrobaticMove.Visible := False;
  IsCriticalChance.Visible := False;
  CriticalChance.Visible := False;
  IsWeightLimit.Visible := False;
  WeightLimit.Visible := False;
  IsVitalForce.Visible := False;
  VitalForce.Visible := False;
  IsFinalFortress.Visible := False;
  FinalFortress.Visible := False;
  IsShieldMastery.Visible := False;
  ShieldMastery.Visible := False;
  IsFocusMind.Visible := False;
  FocusMind.Visible := False;
  IsBoostHP.Visible := False;
  BoostHP.Visible := False;
  IsQuiverOfHolding.Visible := False;
  QuiverOfHolding.Visible := False;
  IsFinalFrenzy.Visible := False;
  FinalFrenzy.Visible := False;
  IsAgileMovement.Visible := False;
  AgileMovement.Visible := False;
  IsBoostAtkSpeed.Visible := False;
  BoostAtkSpeed.Visible := False;
end;

procedure TForm1.SetPassives;
begin
  NotChangeAutoSelect := True;
  if not AutoSelect.Checked then
    Exit;
  if IsWeaponMastery.Visible then
    if not Fighter then
      SetPS(IsWeaponMastery,WeaponMastery,WeaponMasteryMystic)
    else
      SetPS(IsWeaponMastery,WeaponMastery,WeaponMasteryFighter);
  if IsDaggerMastery.Visible then
    SetPS(IsDaggerMastery,DaggerMastery,Dagger_Mastery);
  if IsBluntMastery.Visible then
    SetPS(IsBluntMastery,BluntMastery,Blunt_Mastery);
  if IsBowMastery.Visible then
    SetPS(IsBowMastery,BowMastery,Bow_Mastery);
  if IsFistMastery.Visible then
    SetPS(IsFistMastery,FistMastery,Fist_Mastery);
  if IsSwordMastery.Visible then
    SetPS(IsSwordMastery,SwordMastery,Sword_Mastery);
  if IsPolearmMastery.Visible then
    SetPS(IsPolearmMastery,PolearmMastery,Polearm_Mastery);
  if IsTwoHandsMastery.Visible then
    SetPS(IsTwoHandsMastery,TwoHandsMastery,TwoHands_Mastery);
  if IsDualSwordMastery.Visible then
    SetPS(IsDualSwordMastery,DualSwordMastery,DualSword_Mastery);
  if IsArmorMastery.Visible then
    if not Fighter then
      SetPS(IsArmorMastery,ArmorMastery,ArmorMasteryMystic)
    else
      SetPS(IsArmorMastery,ArmorMastery,ArmorMasteryFighter);
  if IsHvArmorMastery.Visible then
    begin
      if Fighter and not Gnom then
        SetPS(IsHvArmorMastery,HvArmorMastery,HvArmorMasteryFighter);
      if Fighter and Gnom then
        SetPS(IsHvArmorMastery,HvArmorMastery,HvArmorMasteryGnom);
      if Buffer and not OrcMystic then
        SetPS(IsHvArmorMastery,HvArmorMastery,HvArmorMasteryProphet);
      if OrcMystic then
        SetPS(IsHvArmorMastery,HvArmorMastery,HvArmorMasteryOrcMystic);
    end;
  if IsLgArmorMastery.Visible then
    begin
      if Fighter and not Gnom then
        SetPS(IsLgArmorMastery,LgArmorMastery,LgArmorMasteryFighter);
      if Fighter and Gnom then
        SetPS(IsLgArmorMastery,LgArmorMastery,LgArmorMasteryGnom);
      if Buffer and not Summoner and not OrcMystic then
        SetPS(IsLgArmorMastery,LgArmorMastery,LgArmorMasteryBuffer);
      if Summoner then
        SetPS(IsLgArmorMastery,LgArmorMastery,LgArmorMasterySummoner);
      if OrcMystic then
        SetPS(IsLgArmorMastery,LgArmorMastery,LgArmorMasteryOrcMystic);
      if (Profa = 1) and Mystic then
        SetPS(IsLgArmorMastery,LgArmorMastery,LgArmorMasteryBuffer);
    end;
  if IsRobeMastery.Visible then
    if not OrcMystic then
      SetPS(IsRobeMastery,RobeMastery,RobeMasteryMystic)
    else
      SetPS(IsRobeMastery,RobeMastery,RobeMasteryOrcMystic);
  if IsAntiMagic.Visible then
    SetPS(IsAntiMagic,AntiMagic,Anti_Magic);
  if IsMagicResistance.Visible then
    SetPS(IsMagicResistance,MagicResistance,Magic_Resistance);
  if IsClearMind.Visible then
    SetPS(IsClearMind,ClearMind,Clear_Mind);
  if IsBoostMana.Visible then
    SetPS(IsBoostMana,BoostMana,Boost_Mana);
  if IsFastSpellCasting.Visible then
    SetPS(IsFastSpellCasting,FastSpellCasting,FastSpell_Casting);
  if IsFastHPRecovery.Visible then
    if not Fighter then
      SetPS(IsFastHPRecovery,FastHPRecovery,FastHP_RecoveryMystic)
    else
      SetPS(IsFastHPRecovery,FastHPRecovery,FastHP_RecoveryFighter);
  if IsFastManaRecovery.Visible then
    SetPS(IsFastManaRecovery,FastManaRecovery,FastMana_Recovery);
  if IsQuickStep.Visible then
    SetPS(IsQuickStep,QuickStep,Quick_Step);
  if IsBoostEvasion.Visible then
    SetPS(IsBoostEvasion,BoostEvasion,Boost_Evasion);
  if IsEsprit.Visible then
    SetPS(IsEsprit,Esprit,Esprit_);
  if IsCriticalPower.Visible then
    SetPS(IsCriticalPower,CriticalPower,Critical_Power);
  if IsAcrobaticMove.Visible then
    SetPS(IsAcrobaticMove,AcrobaticMove,Acrobatic_Move);
  if IsCriticalChance.Visible then
    SetPS(IsCriticalChance,CriticalChance,Critical_Chance);
  if IsWeightLimit.Visible then
    SetPS(IsWeightLimit,WeightLimit,Weight_Limit);
  if IsVitalForce.Visible then
    SetPS(IsVitalForce,VitalForce,Vital_Force);
  if IsFinalFortress.Visible then
    SetPS(IsFinalFortress,FinalFortress,Final_Fortress);
  if IsShieldMastery.Visible then
    SetPS(IsShieldMastery,ShieldMastery,Shield_Mastery);
  if IsFocusMind.Visible then
    SetPS(IsFocusMind,FocusMind,Focus_Mind);
  if IsAgileMovement.Visible then
    SetPS(IsAgileMovement,AgileMovement,Agile_Movement);
  if IsQuiverOfHolding.Visible then
    SetPS(IsQuiverOfHolding,QuiverOfHolding,QuiverOf_Holding);
  if IsBoostHP.Visible then
    if Fighter then
      SetPS(IsBoostHP,BoostHP,BoostHPFighter)
    else
      SetPS(IsBoostHP,BoostHP,BoostHPMystic);
  if IsFinalFrenzy.Visible then
    SetPS(IsFinalFrenzy,FinalFrenzy,Final_Frenzy);
  if IsBoostAtkSpeed.Visible then
    SetPS(IsBoostAtkSpeed,BoostAtkSpeed,BoostAtk_Speed);
  NotChangeAutoSelect := False;  
end;

procedure TForm1.ShowWeaponMastery(Max : Integer);
var
  i : Integer;
begin
  WeaponMastery.Visible := True;
  WeaponMastery.Enabled := False;
  IsWeaponMastery.Visible := True;
  IsWeaponMastery.Checked := False;
  WeaponMastery.Items.Clear;
  if Fighter then
    for i := 1 to Max do
      WeaponMastery.Items.Add('Weapon Mastery ' + IntToStr(i) + ' (' + IntToStr(WeaponMasteryFighter[i]) + ')')
  else
    for i := 1 to Max do
      WeaponMastery.Items.Add('Weapon Mastery ' + IntToStr(i) + ' (' + IntToStr(WeaponMasteryMystic[i]) + ')');
  WeaponMastery.ItemIndex := 0;    
end;

procedure TForm1.ShowDaggerMastery(Max : Integer);
var
  i : Integer;
begin
  DaggerMastery.Visible := True;
  DaggerMastery.Enabled := False;
  IsDaggerMastery.Visible := True;
  IsDaggerMastery.Checked := False;
  DaggerMastery.Items.Clear;
  for i := 1 to Max do
    DaggerMastery.Items.Add('Dagger Mastery ' + IntToStr(i) + ' (' + IntToStr(Dagger_Mastery[i]) + ')');
  DaggerMastery.ItemIndex := 0;
end;

procedure TForm1.ShowBowMastery(Max : Integer);
var
  i : Integer;
begin
  BowMastery.Visible := True;
  BowMastery.Enabled := False;
  IsBowMastery.Visible := True;
  IsBowMastery.Checked := False;
  BowMastery.Items.Clear;
  for i := 1 to Max do
    BowMastery.Items.Add('Bow Mastery ' + IntToStr(i) + ' (' + IntToStr(Bow_Mastery[i]) + ')');
  BowMastery.ItemIndex := 0;
end;

procedure TForm1.ShowSwordMastery(Max : Integer);
var
  i : Integer;
begin
  SwordMastery.Visible := True;
  SwordMastery.Enabled := False;
  IsSwordMastery.Visible := True;
  IsSwordMastery.Checked := False;
  SwordMastery.Items.Clear;
  for i := 1 to Max do
    SwordMastery.Items.Add('Sword/Blunt Mastery ' + IntToStr(i) + ' (' + IntToStr(Sword_Mastery[i]) + ')');
  SwordMastery.ItemIndex := 0;
end;

procedure TForm1.ShowPolearmMastery(Max : Integer);
var
  i : Integer;
begin
  PolearmMastery.Visible := True;
  PolearmMastery.Enabled := False;
  IsPolearmMastery.Visible := True;
  IsPolearmMastery.Checked := False;
  PolearmMastery.Items.Clear;
  for i := 1 to Max do
    PolearmMastery.Items.Add('Polearm Mastery ' + IntToStr(i) + ' (' + IntToStr(Polearm_Mastery[i]) + ')');
  PolearmMastery.ItemIndex := 0;
end;

procedure TForm1.ShowDualSwordMastery(Max : Integer);
var
  i : Integer;
begin
  DualSwordMastery.Visible := True;
  DualSwordMastery.Enabled := False;
  IsDualSwordMastery.Visible := True;
  IsDualSwordMastery.Checked := False;
  DualSwordMastery.Items.Clear;
  for i := 1 to Max do
    DualSwordMastery.Items.Add('DualSword Mastery ' + IntToStr(i) + ' (' + IntToStr(DualSword_Mastery[i]) + ')');
  DualSwordMastery.ItemIndex := 0;
end;

procedure TForm1.Show2HSwordMastery(Max : Integer);
var
  i : Integer;
begin
  TwoHandsMastery.Visible := True;
  TwoHandsMastery.Enabled := False;
  IsTwoHandsMastery.Visible := True;
  IsTwoHandsMastery.Checked := False;
  TwoHandsMastery.Items.Clear;
  for i := 1 to Max do
    TwoHandsMastery.Items.Add('Two Hands Sword Mastery ' + IntToStr(i) + ' (' + IntToStr(TwoHands_Mastery[i]) + ')');
  TwoHandsMastery.ItemIndex := 0;
end;

procedure TForm1.ShowClearMind(Max : Integer);
var
  i : Integer;
begin
  ClearMind.Visible := True;
  ClearMind.Enabled := False;
  IsClearMind.Visible := True;
  IsClearMind.Checked := False;
  ClearMind.Items.Clear;
  for i := 1 to Max do
    ClearMind.Items.Add('Clear Mind ' + IntToStr(i) + ' (' + IntToStr(Clear_Mind[i]) + ')');
  ClearMind.ItemIndex := 0;
end;

procedure TForm1.ShowBoostMana(Max : Integer);
var
  i : Integer;
begin
  BoostMana.Visible := True;
  BoostMana.Enabled := False;
  IsBoostMana.Visible := True;
  IsBoostMana.Checked := False;
  BoostMana.Items.Clear;
  for i := 1 to Max do
    BoostMana.Items.Add('Boost Mana ' + IntToStr(i) + ' (' + IntToStr(Boost_Mana[i]) + ')');
  BoostMana.ItemIndex := 0;
end;

procedure TForm1.ShowFastSpellCasting(Max : Integer);
var
  i : Integer;
begin
  FastSpellCasting.Visible := True;
  FastSpellCasting.Enabled := False;
  IsFastSpellCasting.Visible := True;
  IsFastSpellCasting.Checked := False;
  FastSpellCasting.Items.Clear;
  for i := 1 to Max do
    FastSpellCasting.Items.Add('Fast Spell Casting ' + IntToStr(i) + ' (' + IntToStr(FastSpell_Casting[i]) + ')');
  FastSpellCasting.ItemIndex := 0;
end;

procedure TForm1.ShowFastHPRecovery(Max : Integer);
var
  i : Integer;
begin
  FastHPRecovery.Visible := True;
  FastHPRecovery.Enabled := False;
  IsFastHPRecovery.Visible := True;
  IsFastHPRecovery.Checked := False;
  FastHPRecovery.Items.Clear;
  if Fighter then
    for i := 1 to Max do
      FastHPRecovery.Items.Add('Fast HP Recovery ' + IntToStr(i) + ' (' + IntToStr(FastHP_RecoveryFighter[i]) + ')')
  else
    for i := 1 to Max do
      FastHPRecovery.Items.Add('Fast HP Recovery ' + IntToStr(i) + ' (' + IntToStr(FastHP_RecoveryMystic[i]) + ')');
  FastHPRecovery.ItemIndex := 0;
end;

procedure TForm1.ShowFastManaRecovery(Max : Integer);
var
  i : Integer;
begin
  FastManaRecovery.Visible := True;
  FastManaRecovery.Enabled := False;
  IsFastManaRecovery.Visible := True;
  IsFastManaRecovery.Checked := False;
  FastManaRecovery.Items.Clear;
  for i := 1 to Max do
    FastManaRecovery.Items.Add('Fast Mana Recovery ' + IntToStr(i) + ' (' + IntToStr(FastMana_Recovery[i]) + ')');
  FastManaRecovery.ItemIndex := 0;
end;

procedure TForm1.ShowQuickStep(Max : Integer);
var
  i : Integer;
begin
  QuickStep.Visible := True;
  QuickStep.Enabled := False;
  IsQuickStep.Visible := True;
  IsQuickStep.Checked := False;
  QuickStep.Items.Clear;
  for i := 1 to Max do
    QuickStep.Items.Add('Quick Step ' + IntToStr(i) + ' (' + IntToStr(Quick_Step[i]) + ')');
  QuickStep.ItemIndex := 0;
end;

procedure TForm1.ShowBoostEvasion(Max : Integer);
var
  i : Integer;
begin
  BoostEvasion.Visible := True;
  BoostEvasion.Enabled := False;
  IsBoostEvasion.Visible := True;
  IsBoostEvasion.Checked := False;
  BoostEvasion.Items.Clear;
  for i := 1 to Max do
    BoostEvasion.Items.Add('Boost Evasion ' + IntToStr(i) + ' (' + IntToStr(Boost_Evasion[i]) + ')');
  BoostEvasion.ItemIndex := 0;
end;

procedure TForm1.ShowShadowSense;
begin
  ShadowSence.Visible := True;
  ShadowSence.Enabled := False;
  IsShadowSence.Visible := True;
  IsShadowSence.Checked := False;
end;

procedure TForm1.ShowEsprit(Max : Integer);
var
  i : Integer;
begin
  Esprit.Visible := True;
  Esprit.Enabled := False;
  IsEsprit.Visible := True;
  IsEsprit.Checked := False;
  Esprit.Items.Clear;
  for i := 1 to Max do
    Esprit.Items.Add('Esprit ' + IntToStr(i) + ' (' + IntToStr(Esprit_[i]) + ')');
  Esprit.ItemIndex := 0;
end;

procedure TForm1.ShowCriticalPower(Max : Integer);
var
  i : Integer;
begin
  CriticalPower.Visible := True;
  CriticalPower.Enabled := False;
  IsCriticalPower.Visible := True;
  IsCriticalPower.Checked := False;
  CriticalPower.Items.Clear;
  for i := 1 to Max do
    CriticalPower.Items.Add('Critical Power ' + IntToStr(i) + ' (' + IntToStr(Critical_Power[i]) + ')');
  CriticalPower.ItemIndex := 0;
end;

procedure TForm1.ShowAcrobaticMove(Max : Integer);
var
  i : Integer;
begin
  AcrobaticMove.Visible := True;
  AcrobaticMove.Enabled := False;
  IsAcrobaticMove.Visible := True;
  IsAcrobaticMove.Checked := False;
  AcrobaticMove.Items.Clear;
  for i := 1 to Max do
    AcrobaticMove.Items.Add('Acrobatic Move ' + IntToStr(i) + ' (' + IntToStr(Acrobatic_Move[i]) + ')');
  AcrobaticMove.ItemIndex := 0;
end;

procedure TForm1.ShowCriticalChance(Max : Integer);
var
  i : Integer;
begin
  CriticalChance.Visible := True;
  CriticalChance.Enabled := False;
  IsCriticalChance.Visible := True;
  IsCriticalChance.Checked := False;
  CriticalChance.Items.Clear;
  for i := 1 to Max do
    CriticalChance.Items.Add('Critical Chance ' + IntToStr(i) + ' (' + IntToStr(Critical_Chance[i]) + ')');
  CriticalChance.ItemIndex := 0;
end;

procedure TForm1.ShowWeightLimit(Max : Integer);
var
  i : Integer;
begin
  WeightLimit.Visible := True;
  WeightLimit.Enabled := False;
  IsWeightLimit.Visible := True;
  IsWeightLimit.Checked := False;
  WeightLimit.Items.Clear;
  for i := 1 to Max do
    WeightLimit.Items.Add('Weight Limit ' + IntToStr(i) + ' (' + IntToStr(Weight_Limit[i]) + ')');
  WeightLimit.ItemIndex := 0;
end;

procedure TForm1.ShowVitalForce(Max : Integer);
var
  i : Integer;
begin
  VitalForce.Visible := True;
  VitalForce.Enabled := False;
  IsVitalForce.Visible := True;
  IsVitalForce.Checked := False;
  VitalForce.Items.Clear;
  for i := 1 to Max do
    VitalForce.Items.Add('Vital Force ' + IntToStr(i) + ' (' + IntToStr(Vital_Force[i]) + ')');
  VitalForce.ItemIndex := 0;
end;

procedure TForm1.ShowFinallFortress(Max : Integer);
var
  i : Integer;
begin
  FinalFortress.Visible := True;
  FinalFortress.Enabled := False;
  IsFinalFortress.Visible := True;
  IsFinalFortress.Checked := False;
  FinalFortress.Items.Clear;
  for i := 1 to Max do
    FinalFortress.Items.Add('Final Fortress ' + IntToStr(i) + ' (' + IntToStr(Final_Fortress[i]) + ')');
  FinalFortress.ItemIndex := 0;
end;

procedure TForm1.ShowShieldMastery(Max : Integer);
var
  i : Integer;
begin
  ShieldMastery.Visible := True;
  ShieldMastery.Enabled := False;
  IsShieldMastery.Visible := True;
  IsShieldMastery.Checked := False;
  ShieldMastery.Items.Clear;
  for i := 1 to Max do
    ShieldMastery.Items.Add('Shield Mastery ' + IntToStr(i) + ' (' + IntToStr(Shield_Mastery[i]) + ')');
  ShieldMastery.ItemIndex := 0;
end;

procedure TForm1.ShowFocusMind(Max : Integer);
var
  i : Integer;
begin
  FocusMind.Visible := True;
  FocusMind.Enabled := False;
  IsFocusMind.Visible := True;
  IsFocusMind.Checked := False;
  FocusMind.Items.Clear;
  for i := 1 to Max do
    FocusMind.Items.Add('Focus Mind ' + IntToStr(i) + ' (' + IntToStr(Focus_Mind[i]) + ')');
  FocusMind.ItemIndex := 0;
end;

procedure TForm1.ShowAgileMovement(Max : Integer);
var
  i : Integer;
begin
  AgileMovement.Visible := True;
  AgileMovement.Enabled := False;
  IsAgileMovement.Visible := True;
  IsAgileMovement.Checked := False;
  AgileMovement.Items.Clear;
  for i := 1 to Max do
    AgileMovement.Items.Add('Agile Movement ' + IntToStr(i) + ' (' + IntToStr(Agile_Movement[i]) + ')');
  AgileMovement.ItemIndex := 0;
end;

procedure TForm1.ShowBoostHP(Max : Integer);
var
  i : Integer;
begin
  BoostHP.Visible := True;
  BoostHP.Enabled := False;
  IsBoostHP.Visible := True;
  IsBoostHP.Checked := False;
  BoostHP.Items.Clear;
  if Fighter then
    for i := 1 to Max do
      BoostHP.Items.Add('Boost HP ' + IntToStr(i) + ' (' + IntToStr(BoostHPFighter[i]) + ')')
  else
    for i := 1 to Max do
      BoostHP.Items.Add('Boost HP ' + IntToStr(i) + ' (' + IntToStr(BoostHPMystic[i]) + ')');
  BoostHP.ItemIndex := 0;
end;

procedure TForm1.ShowFinalFrenzy(Max : Integer);
var
  i : Integer;
begin
  FinalFrenzy.Visible := True;
  FinalFrenzy.Enabled := False;
  IsFinalFrenzy.Visible := True;
  IsFinalFrenzy.Checked := False;
  FinalFrenzy.Items.Clear;
  for i := 1 to Max do
    FinalFrenzy.Items.Add('Final Frenzy ' + IntToStr(i) + ' (' + IntToStr(Final_Frenzy[i]) + ')');
  FinalFrenzy.ItemIndex := 0;
end;

procedure TForm1.ShowBoostAtkSpeed(Max : Integer);
var
  i : Integer;
begin
  BoostAtkSpeed.Visible := True;
  BoostAtkSpeed.Enabled := False;
  IsBoostAtkSpeed.Visible := True;
  IsBoostAtkSpeed.Checked := False;
  BoostAtkSpeed.Items.Clear;
  for i := 1 to Max do
    BoostAtkSpeed.Items.Add('Boost Atk. Speed ' + IntToStr(i) + ' (' + IntToStr(BoostAtk_Speed[i]) + ')');
  BoostAtkSpeed.ItemIndex := 0;
end;

procedure TForm1.ShowQuiverOfHolding(Max : Integer);
var
  i : Integer;
begin
  QuiverOfHolding.Visible := True;
  QuiverOfHolding.Enabled := False;
  IsQuiverOfHolding.Visible := True;
  IsQuiverOfHolding.Checked := False;
  QuiverOfHolding.Items.Clear;
  for i := 1 to Max do
    QuiverOfHolding.Items.Add('Quiver of Holding ' + IntToStr(i) + ' (' + IntToStr(QuiverOf_Holding[i]) + ')');
  QuiverOfHolding.ItemIndex := 0;
end;

procedure TForm1.ShowArmorMastery(Max : Integer);
var
  i : Integer;
begin
  ArmorMastery.Visible := True;
  ArmorMastery.Enabled := False;
  IsArmorMastery.Visible := True;
  IsArmorMastery.Checked := False;
  ArmorMastery.Items.Clear; 
  if Fighter then
    for i := 1 to Max do
      ArmorMastery.Items.Add('Armor Mastery ' + IntToStr(i) + ' (' + IntToStr(ArmorMasteryFighter[i]) + ')')
  else
    for i := 1 to Max do
      ArmorMastery.Items.Add('Armor Mastery ' + IntToStr(i) + ' (' + IntToStr(ArmorMasteryMystic[i]) + ')');
  ArmorMastery.ItemIndex := 0;
end;

procedure TForm1.ShowHvArmorMastery(Max : Integer);
var
  i : Integer;
begin
  HvArmorMastery.Visible := True;
  HvArmorMastery.Enabled := False;
  IsHvArmorMastery.Visible := True;
  IsHvArmorMastery.Checked := False;
  HvArmorMastery.Items.Clear;
  if Fighter and not Gnom then
    for i := 1 to Max do
      HvArmorMastery.Items.Add('Heavy Armor Mastery ' + IntToStr(i) + ' (' + IntToStr(HvArmorMasteryFighter[i]) + ')');
  if Fighter and Gnom then
    for i := 1 to Max do
      HvArmorMastery.Items.Add('Heavy Armor Mastery ' + IntToStr(i) + ' (' + IntToStr(HvArmorMasteryGnom[i]) + ')');
  if Buffer and not OrcMystic then
    for i := 1 to Max do
      HvArmorMastery.Items.Add('Heavy Armor Mastery ' + IntToStr(i) + ' (' + IntToStr(HvArmorMasteryProphet[i]) + ')');
  if OrcMystic then
    for i := 1 to Max do
      HvArmorMastery.Items.Add('Heavy Armor Mastery ' + IntToStr(i) + ' (' + IntToStr(HvArmorMasteryOrcMystic[i]) + ')');
  HvArmorMastery.ItemIndex := 0;
end;

procedure TForm1.ShowLgArmorMastery(Max : Integer);
var
  i : Integer;
begin
  LgArmorMastery.Visible := True;
  LgArmorMastery.Enabled := False;
  IsLgArmorMastery.Visible := True;
  IsLgArmorMastery.Checked := False;
  LgArmorMastery.Items.Clear;
  if Fighter and not Gnom then
    for i := 1 to Max do
      LgArmorMastery.Items.Add('Light Armor Mastery ' + IntToStr(i) + ' (' + IntToStr(LgArmorMasteryFighter[i]) + ')');
  if Fighter and Gnom then
    for i := 1 to Max do
      LgArmorMastery.Items.Add('Light Armor Mastery ' + IntToStr(i) + ' (' + IntToStr(LgArmorMasteryGnom[i]) + ')');
  if Buffer and not Summoner and not OrcMystic then
    for i := 1 to Max do
      LgArmorMastery.Items.Add('Light Armor Mastery ' + IntToStr(i) + ' (' + IntToStr(LgArmorMasteryBuffer[i]) + ')');
  if Summoner then
    for i := 1 to Max do
      LgArmorMastery.Items.Add('Light Armor Mastery ' + IntToStr(i) + ' (' + IntToStr(LgArmorMasterySummoner[i]) + ')');
  if OrcMystic then
    for i := 1 to Max do
      LgArmorMastery.Items.Add('Light Armor Mastery ' + IntToStr(i) + ' (' + IntToStr(LgArmorMasteryOrcMystic[i]) + ')');
  if (Profa = 1) and Mystic then
    for i := 1 to Max do
      LgArmorMastery.Items.Add('Light Armor Mastery ' + IntToStr(i) + ' (' + IntToStr(LgArmorMasteryBuffer[i]) + ')');
  LgArmorMastery.ItemIndex := 0;
end;

procedure TForm1.ShowRobeMastery(Max : Integer);
var
  i : Integer;
begin
  RobeMastery.Visible := True;
  RobeMastery.Enabled := False;
  IsRobeMastery.Visible := True;
  IsRobeMastery.Checked := False;
  RobeMastery.Items.Clear;
  if not OrcMystic then
    for i := 1 to Max do
      RobeMastery.Items.Add('Robe Mastery ' + IntToStr(i) + ' (' + IntToStr(RobeMasteryMystic[i]) + ')')
  else
    for i := 1 to Max do
      RobeMastery.Items.Add('Robe Mastery ' + IntToStr(i) + ' (' + IntToStr(RobeMasteryOrcMystic[i]) + ')');
  RobeMastery.ItemIndex := 0;
end;

procedure TForm1.ShowAntiMagic(Max : Integer);
var
  i : Integer;
begin
  AntiMagic.Visible := True;
  AntiMagic.Enabled := False;
  IsAntiMagic.Visible := True;
  IsAntiMagic.Checked := False;
  AntiMagic.Items.Clear;
  for i := 1 to Max do
    AntiMagic.Items.Add('Anti Magic ' + IntToStr(i) + ' (' + IntToStr(Anti_Magic[i]) + ')');
  AntiMagic.ItemIndex := 0;
end;

procedure TForm1.ShowMagicResistance(Max : Integer);
var
  i : Integer;
begin
  MagicResistance.Visible := True;
  MagicResistance.Enabled := False;
  IsMagicResistance.Visible := True;
  IsMagicResistance.Checked := False;
  MagicResistance.Items.Clear;
  for i := 1 to Max do
    MagicResistance.Items.Add('Magic Resistance ' + IntToStr(i) + ' (' + IntToStr(Magic_Resistance[i]) + ')');
  MagicResistance.ItemIndex := 0;
end;

procedure TForm1.ShowBluntMastery(Max : Integer);
var
  i : Integer;
begin
  BluntMastery.Visible := True;
  BluntMastery.Enabled := False;
  IsBluntMastery.Visible := True;
  IsBluntMastery.Checked := False;
  BluntMastery.Items.Clear;
  for i := 1 to Max do
    BluntMastery.Items.Add('Blunt Mastery ' + IntToStr(i) + ' (' + IntToStr(Blunt_Mastery[i]) + ')');
  BluntMastery.ItemIndex := 0;
end;

procedure TForm1.ShowFistMastery(Max : Integer);
var
  i : Integer;
begin
  FistMastery.Visible := True;
  FistMastery.Enabled := False;
  IsFistMastery.Visible := True;
  IsFistMastery.Checked := False;
  FistMastery.Items.Clear;
  for i := 1 to Max do
    FistMastery.Items.Add('Fist Mastery ' + IntToStr(i) + ' (' + IntToStr(Fist_Mastery[i]) + ')');
  FistMastery.ItemIndex := 0;
end;

procedure TForm1.SetPS(a : TCheckBox; b : TComboBox; c : array of Integer);
var
  i,l,r : Integer;
begin
  if Lvl < c[0] then
    begin
      a.Checked := False;
      b.Enabled := False;
      Exit;
    end
  else
    begin
      a.Checked := True;
      b.Enabled := True;
    end;
  l := SizeOf(c) div SizeOf(Integer);
  if (l - 1) > b.Items.Count then
    l := b.Items.Count;
  r := 0;
  for i := 0 to l - 1 do
    begin
      if c[i] > Lvl then
        begin
          r := i;
          Break
        end;
      if i = (l - 1) then
        r := l
    end;
  b.ItemIndex := r - 1;  
end;

procedure TForm1.ChangePS(Sender : TObject);
begin
  if not NotChangeAutoSelect then
    AutoSelect.Checked := False;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsWeaponMasteryClick(Sender: TObject);
begin
  WeaponMastery.Enabled := IsWeaponMastery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsSwordMasteryClick(Sender: TObject);
begin
  SwordMastery.Enabled := IsSwordMastery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsFistMasteryClick(Sender: TObject);
begin
  FistMastery.Enabled := IsFistMastery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsDaggerMasteryClick(Sender: TObject);
begin
  DaggerMastery.Enabled := IsDaggerMastery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsBluntMasteryClick(Sender: TObject);
begin
  BluntMastery.Enabled := IsBluntMastery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsPolearmMasteryClick(Sender: TObject);
begin
  PolearmMastery.Enabled := IsPolearmMastery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsBowMasteryClick(Sender: TObject);
begin
  BowMastery.Enabled := IsBowMastery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsTwoHandsMasteryClick(Sender: TObject);
begin
  TwoHandsMastery.Enabled := IsTwoHandsMastery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsDualSwordMasteryClick(Sender: TObject);
begin
  DualSwordMastery.Enabled := IsDualSwordMastery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsArmorMasteryClick(Sender: TObject);
begin
  ArmorMastery.Enabled := IsArmorMastery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsRobeMasteryClick(Sender: TObject);
begin
  RobeMastery.Enabled := IsRobeMastery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsHvArmorMasteryClick(Sender: TObject);
begin
  HvArmorMastery.Enabled := IsHvArmorMastery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsAntiMagicClick(Sender: TObject);
begin
  AntiMagic.Enabled := IsAntiMagic.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsLgArmorMasteryClick(Sender: TObject);
begin
  LgArmorMastery.Enabled := IsLgArmorMastery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsMagicResistanceClick(Sender: TObject);
begin
  MagicResistance.Enabled := IsMagicResistance.Checked;
  ChangePS(Sender);
end;



procedure TForm1.IsClearMindClick(Sender: TObject);
begin
  ClearMind.Enabled := IsClearMind.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsBoostManaClick(Sender: TObject);
begin
  BoostMana.Enabled := IsBoostMana.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsFastSpellCastingClick(Sender: TObject);
begin
  FastSpellCasting.Enabled := IsFastSpellCasting.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsFastHPRecoveryClick(Sender: TObject);
begin
  FastHPRecovery.Enabled := IsFastHPRecovery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsFastManaRecoveryClick(Sender: TObject);
begin
  FastManaRecovery.Enabled := IsFastManaRecovery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsQuickStepClick(Sender: TObject);
begin
  QuickStep.Enabled := IsQuickStep.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsBoostEvasionClick(Sender: TObject);
begin
  BoostEvasion.Enabled := IsBoostEvasion.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsShadowSenceClick(Sender: TObject);
begin
  ShadowSence.Enabled := IsShadowSence.Checked;
end;

procedure TForm1.IsEspritClick(Sender: TObject);
begin
  Esprit.Enabled := IsEsprit.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsCriticalPowerClick(Sender: TObject);
begin
  CriticalPower.Enabled := IsCriticalPower.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsAcrobaticMoveClick(Sender: TObject);
begin
  AcrobaticMove.Enabled := IsAcrobaticMove.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsCriticalChanceClick(Sender: TObject);
begin
  CriticalChance.Enabled := IsCriticalChance.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsWeightLimitClick(Sender: TObject);
begin
  WeightLimit.Enabled := IsWeightLimit.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsVitalForceClick(Sender: TObject);
begin
  VitalForce.Enabled := IsVitalForce.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsFinalFortressClick(Sender: TObject);
begin
  FinalFortress.Enabled := IsFinalFortress.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsShieldMasteryClick(Sender: TObject);
begin
  ShieldMastery.Enabled := IsShieldMastery.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsFocusMindClick(Sender: TObject);
begin
  FocusMind.Enabled := IsFocusMind.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsAgileMovementClick(Sender: TObject);
begin
  AgileMovement.Enabled := IsAgileMovement.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsBoostHPClick(Sender: TObject);
begin
  BoostHP.Enabled := IsBoostHP.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsQuiverOfHoldingClick(Sender: TObject);
begin
  QuiverOfHolding.Enabled := IsQuiverOfHolding.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsFinalFrenzyClick(Sender: TObject);
begin
  FinalFrenzy.Enabled := IsFinalFrenzy.Checked;
  ChangePS(Sender);
end;

procedure TForm1.IsBoostAtkSpeedClick(Sender: TObject);
begin
  BoostAtkSpeed.Enabled := IsBoostAtkSpeed.Checked;
  ChangePS(Sender);
end;

procedure TForm1.AutoSelectClick(Sender: TObject);
begin
  SetPassives;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ShadowSenceChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IncMDef(Ench,Jewel : TComboBox);
begin
  if Jewel.ItemIndex = 0 then
    Exit;
  if Ench.ItemIndex <= 3 then
    Inc(dMDef,Ench.ItemIndex)
  else
    Inc(dMDef,3 + (Ench.ItemIndex - 3)*3)
end;

procedure TForm1.ComboBox83Change(Sender: TObject);
begin
  Jewelry;
end;

procedure TForm1.ComboBox86Change(Sender: TObject);
begin
  Jewelry;
end;

procedure TForm1.ComboBox91Change(Sender: TObject);
begin
  Jewelry;
end;

procedure TForm1.ComboBox92Change(Sender: TObject);
begin
  Jewelry;
end;

procedure TForm1.ComboBox93Change(Sender: TObject);
begin
  Jewelry;
end;

procedure TForm1.IncPDef(Ench,Armor : TComboBox);
begin
  if Armor.ItemIndex = 0 then
    Exit;
  if Ench.ItemIndex <= 3 then
    Inc(dPDef,Ench.ItemIndex)
  else
    Inc(dPDef,3 + (Ench.ItemIndex - 3)*3)
end;

procedure TForm1.ComboBox67Change(Sender: TObject);
begin
  CheckSet;
end;

procedure TForm1.ComboBox70Change(Sender: TObject);
begin
  CheckSet; 
end;

procedure TForm1.ComboBox73Change(Sender: TObject);
begin
  CheckSet;
end;

procedure TForm1.ComboBox76Change(Sender: TObject);
begin
  CheckSet;
end;

procedure TForm1.ComboBox79Change(Sender: TObject);
begin
  CheckSet;
end;

procedure TForm1.CalcHP;
var
  BaseHP,B,WB,Boost,AB,JB : Extended;
  n,p,pr,i : Integer;
begin
  BaseHP := 0;
  n := Lvl - 1;
  p := ComboBox1.ItemIndex;
  pr := Profa;
  if (pr = 2) and (Lvl <= 40) then
    begin
      pr := 1;
      p := ProfaGoBack[p];
    end;
  if (pr = 1) and (Lvl <= 20) then
    p := ProfaGoBack[p];
  case p of
    0 : BaseHP := -534.2 + (34.58*n + 0.38*n*(n - 1)/2);
    1 : BaseHP := -224 + (27.3*n + 0.3*n*(n - 1)/2);
    2 : BaseHP := -191 + (27.3*n + 0.3*n*(n - 1)/2);
    3 : BaseHP := -465.3 + (34.58*n + 0.38*n*(n - 1)/2);
    4 : BaseHP := -786.7 + (40.95*n + 0.45*n*(n - 1)/2);
    5 : BaseHP := -776.8 + (40.04*n + 0.44*n*(n - 1)/2);
    6 : BaseHP := -165 + (28.21*n + 0.31*n*(n - 1)/2);
    7 : BaseHP := -572.1 + (32.76*n + 0.36*n*(n - 1)/2);
    8 : BaseHP := 94 + (13.65*n + 0.15*n*(n - 1)/2);
    9 : BaseHP := 106 + (15.47*n + 0.17*n*(n - 1)/2);
    10: BaseHP := -84 + (24.57*n + 0.27*n*(n - 1)/2);
    11: BaseHP := -776.8 + (40.04*n + 0.44*n*(n - 1)/2);
    12: BaseHP := 80 + (12.74*n + 0.14*n*(n - 1)/2);
    13: BaseHP := -624.7 + (35.49*n + 0.39*n*(n - 1)/2);
    14: BaseHP := -610 + (38.22*n + 0.42*n*(n - 1)/2);
    15: BaseHP := 89 + (12.74*n + 0.14*n*(n - 1)/2);
    16: BaseHP := -215 + (27.3*n + 0.3*n*(n - 1)/2);
    17: BaseHP := 104 + (15.47*n + 0.17*n*(n - 1)/2);
    18: BaseHP := -181 + (29.12*n + 0.32*n*(n - 1)/2);
    19: BaseHP := -177 + (25.48*n + 0.28*n*(n - 1)/2);
    20: BaseHP := -67 + (23.66*n + 0.26*n*(n - 1)/2);
    21: BaseHP := -586.2 + (34.58*n + 0.38*n*(n - 1)/2);
    22: BaseHP := -534.1 + (30.94*n + 0.34*n*(n - 1)/2);
    23: BaseHP := 80 + (11.83*n + 0.13*n*(n - 1)/2);
    24: BaseHP := -186 + (24.57*n + 0.27*n*(n - 1)/2);
    25: BaseHP := 101 + (15.47*n + 0.17*n*(n - 1)/2);
    26: BaseHP := -224 + (27.3*n + 0.3*n*(n - 1)/2);
    27: BaseHP := -480 + (31.85*n + 0.35*n*(n - 1)/2);
    28: BaseHP := 80 + (12.74*n + 0.14*n*(n - 1)/2);
    29: BaseHP := 95 + (15.47*n + 0.17*n*(n - 1)/2);
    30: BaseHP := -262 + (29.12*n + 0.32*n*(n - 1)/2);
    31: BaseHP := -190 + (29.12*n + 0.32*n*(n - 1)/2);
    32: BaseHP := -576.1 + (37.31*n + 0.41*n*(n - 1)/2);
    33: BaseHP := -572.1 + (32.76*n + 0.36*n*(n - 1)/2);
    34: BaseHP := -229 + (29.12*n + 0.32*n*(n - 1)/2);
    35: BaseHP := -620 + (36.4*n + 0.4*n*(n - 1)/2);
    36: BaseHP := -641.7 + (36.4*n + 0.4*n*(n - 1)/2);
    37: BaseHP := -520.2 + (32.76*n + 0.36*n*(n - 1)/2);
    38: BaseHP := -594 + (37.31*n + 0.41*n*(n - 1)/2);
    39: BaseHP := -148 + (22.75*n + 0.25*n*(n - 1)/2);
    40: BaseHP := -262 + (29.12*n + 0.32*n*(n - 1)/2);
    41: BaseHP := -584.1 + (38.22*n + 0.42*n*(n - 1)/2);
    42: BaseHP := -658 + (38.22*n + 0.42*n*(n - 1)/2);
    43: BaseHP := -198 + (30.03*n + 0.33*n*(n - 1)/2);
    44: BaseHP := -606 + (34.58*n + 0.38*n*(n - 1)/2);
    45: BaseHP := -480 + (31.85*n + 0.35*n*(n - 1)/2);
    46: BaseHP := -513 + (33.67*n + 0.37*n*(n - 1)/2);
    47: BaseHP := -538.9 + (33.67*n + 0.37*n*(n - 1)/2);
    48: BaseHP := -729.8 + (38.22*n + 0.42*n*(n - 1)/2);
    49: BaseHP := -644 + (36.4*n + 0.4*n*(n - 1)/2);
    50: BaseHP := -448.3 + (29.12*n + 0.32*n*(n - 1)/2);
    51: BaseHP := -738.8 + (38.22*n + 0.42*n*(n - 1)/2);
    52: BaseHP := -576.1 + (37.31*n + 0.41*n*(n - 1)/2);
    53: BaseHP := -608.7 + (34.58*n + 0.38*n*(n - 1)/2);
    54: BaseHP := -757.8 + (38.22*n + 0.42*n*(n - 1)/2);
    55: BaseHP := -243 + (27.3*n + 0.3*n*(n - 1)/2);
    56: BaseHP := -738.8 + (38.22*n + 0.42*n*(n - 1)/2);
    57: BaseHP := -51 + (22.75*n + 0.25*n*(n - 1)/2);
  end;
  case CON + tCON + Set_CON + Aug_CON of
    1 : _Con := 0.46;
    2 : _Con := 0.47;
    3 : _Con := 0.48;
    4 : _Con := 0.50;
    5 : _Con := 0.51;
    6 : _Con := 0.53;
    7 : _Con := 0.54;
    8 : _Con := 0.56;
    9 : _Con := 0.58;
    10: _Con := 0.59;
    11: _Con := 0.61;
    12: _Con := 0.63;
    13: _Con := 0.65;
    14: _Con := 0.67;
    15: _Con := 0.69;
    16: _Con := 0.71;
    17: _Con := 0.73;
    18: _Con := 0.75;
    19: _Con := 0.77;
    20: _Con := 0.80;
    21: _Con := 0.82;
    22: _Con := 0.85;
    23: _Con := 0.87;
    24: _Con := 0.90;
    25: _Con := 0.93;
    26: _Con := 0.95;
    27: _Con := 0.98;
    28: _Con := 1.01;
    29: _Con := 1.04;
    30: _Con := 1.07;
    31: _Con := 1.10;
    32: _Con := 1.14;
    33: _Con := 1.17;
    34: _Con := 1.21;
    35: _Con := 1.24;
    36: _Con := 1.28;
    37: _Con := 1.32;
    38: _Con := 1.36;
    39: _Con := 1.40;
    40: _Con := 1.44;
    41: _Con := 1.48;
    42: _Con := 1.53;
    43: _Con := 1.58;
    44: _Con := 1.62;
    45: _Con := 1.67;
    46: _Con := 1.72;
    47: _Con := 1.77;
    48: _Con := 1.83;
    49: _Con := 1.88;
    50: _Con := 1.94;
    51: _Con := 2.00;
    52: _Con := 2.06;
    53: _Con := 2.12;
    54: _Con := 2.18;
    55: _Con := 2.25;
    56: _Con := 2.31;
    57: _Con := 2.38;
    58: _Con := 2.45;
    59: _Con := 2.53;
    60: _Con := 2.60;
  end;
  B := 1;
  if IsBlessTB.Checked then
    case BlessTBLvl.ItemIndex of
      0 : B := B*1.1;
      1 : B := B*1.15;
      2 : B := B*1.2;
      3 : B := B*1.25;
      4 : B := B*1.3;
      5 : B := B*1.35;
    end;
  if IsProphecy.Checked then
    case ProphecyLvl.ItemIndex of
      0,1 : B := B*1.2;
    end;
  if IsVitality.Checked then
    B := B*1.3;
  Boost := 0;
  if IsBoostHP.Visible and IsBoostHP.Checked then
    case BoostHP.ItemIndex of
      1 : Boost := 60;
      2 : Boost := 100;
      3 : Boost := 150;
      4 : Boost := 200;
      5 : Boost := 250;
      6 : Boost := 300;
      7 : Boost := 350;
      8 : Boost := 400;
      9 : Boost := 440;
      10: Boost := 480;
    end;
  WB := 1;
  if IsSA then
    begin
      if WSA.SA = SA_Health then
        WB := 1.25;
      if (WSA.SA = SA_Anger) or (WSA.SA = SA_CritAnger) then
        WB := 0.85;
      if WSA.SA = SA_Conversion then
        WB := 0.6;
      if WSA.SA = SA_MPHPCP then
        WB := 1.15;
      if WSA.SA in HeroWeaponsHP then
        WB := 1.25;
    end;    
  AB := 0;
  if (CurS = Ava_Heavy) or (CurS = Ava_Heavy_WS) then
    AB := 294.49;
  if CurS = Brigantine then
    AB := 153;
  if CurS = Brigantine_WS then
    AB := 173;
  if CurS = Chain_WS then
    AB := 198.21;
  if (CurS = Doom_Heavy) or (CurS = Doom_Heavy_WS) then
    AB := 320;
  if CurS = Demon then
    AB := -269.65;
  if (CurS = FullPlate) or (CurS = FullPlate_WS) then
    AB := 269.65;
  if CurS = Imperial then
    AB := 445;
  if CurS = Mith_Heavy_WS then
    AB := 126.13;
  if CurS = Wooden then
    AB := 41;
  if CurS = Zub_Heavy then
    AB := 294;
  JB := 0;
  if J_Valakas then
    JB := 445;
  MaxHP := BaseHP*_Con*B*WB + Boost + AB + JB;
  for i := 1 to 4 do
    if AugCB[i].ItemIndex = 7 then
      MaxHP := MaxHP + Augs[i];
end;

procedure TForm1.CalcMP;
const
  Fig0 : array [1..80] of Extended = (30.00,35.46,40.98,46.56,52.20,57.90,63.66,69.48,75.36,81.30,87.30,93.36,99.48,105.66,111.90,118.20,124.56,130.98,137.46,144.00,150.60,157.26,163.98,170.76,177.60,184.50,191.46,198.48,205.56,212.70,219.90,227.16,234.48,241.86,249.30,256.80,264.36,271.98,279.66,287.40,295.20,303.06,310.98,318.96,327.00,335.10,343.26,351.48,359.76,368.10,376.50,384.96,393.48,402.06,410.70,419.40,428.16,436.98,445.86,454.80,463.80,472.86,481.98,491.16,500.40,509.70,519.06,528.48,537.96,547.50,557.10,566.76,576.48,586.26,596.10,606.00,615.96,625.98,636.06,646.20);
  Fig1 : array [1..80] of Extended = (30.00,35.46,40.98,46.56,52.20,57.90,63.66,69.48,75.36,81.30,87.30,93.36,99.48,105.66,111.90,118.20,124.56,130.98,137.46,144.00,153.90,163.89,173.97,184.14,194.40,204.75,215.19,225.72,236.34,247.05,257.85,268.74,279.72,290.79,301.95,313.20,324.54,335.97,347.49,359.10,370.80,382.59,394.47,406.44,418.50,430.65,442.89,455.22,467.64,480.15,492.75,505.44,518.22,531.09,544.05,557.10,570.24,583.47,596.79,610.20,623.70,637.29,650.97,664.74,678.60,692.55,706.59,720.72,734.94,749.25,763.65,778.14,792.72,807.39,822.15,837.00,851.94,866.97,882.09,897.30);
  Fig2 : array [1..80] of Extended = (30.00,35.46,40.98,46.56,52.20,57.90,63.66,69.48,75.36,81.30,87.30,93.36,99.48,105.66,111.90,118.20,124.56,130.98,137.46,144.00,153.90,163.89,173.97,184.14,194.40,204.75,215.19,225.72,236.34,247.05,257.85,268.74,279.72,290.79,301.95,313.20,324.54,335.97,347.49,359.10,378.60,398.25,418.05,438.00,458.10,478.35,498.75,519.30,540.00,560.85,581.85,603.00,624.30,645.75,667.35,689.10,711.00,733.05,755.25,777.60,800.10,822.75,845.55,868.50,891.60,914.85,938.25,961.80,985.50,1009.35,1033.35,1057.50,1081.80,1106.25,1130.85,1155.60,1180.50,1205.55,1230.75,1256.10);
  Mys0 : array [1..80] of Extended = (40.00,47.28,54.64,62.08,69.60,77.20,84.88,92.64,100.48,108.40,116.40,124.48,132.64,140.88,149.20,157.60,166.08,174.64,183.28,192.00,200.80,209.68,218.64,227.68,236.80,246.00,255.28,264.64,274.08,283.60,293.20,302.88,312.64,322.48,332.40,342.40,352.48,362.64,372.88,383.20,393.60,404.08,414.64,425.28,436.00,446.80,457.68,468.64,479.68,490.80,502.00,513.28,524.64,536.08,547.60,559.20,570.88,582.64,594.48,606.40,618.40,630.48,642.64,654.88,667.20,679.60,692.08,704.64,717.28,730.00,742.80,755.68,768.64,781.68,794.80,808.00,821.28,834.64,848.08,861.60);
  Mys1 : array [1..80] of Extended = (40.00,47.28,54.64,62.08,69.60,77.20,84.88,92.64,100.48,108.40,116.40,124.48,132.64,140.88,149.20,157.60,166.08,174.64,183.28,192.00,205.20,218.52,231.96,245.52,259.20,273.00,286.92,300.96,315.12,329.40,343.80,358.32,372.96,387.72,402.60,417.60,432.72,447.96,463.32,478.80,494.40,510.12,525.96,541.92,558.00,574.20,590.52,606.96,623.52,640.20,657.00,673.92,690.96,708.12,725.40,742.80,760.32,777.96,795.72,813.60,831.60,849.72,867.96,886.32,904.80,923.40,942.12,960.96,979.92,999.00,1018.20,1037.52,1056.96,1076.52,1096.20,1116.00,1135.92,1155.96,1176.12,1196.40);
  Mys2 : array [1..80] of Extended = (40.00,47.28,54.64,62.08,69.60,77.20,84.88,92.64,100.48,108.40,116.40,124.48,132.64,140.88,149.20,157.60,166.08,174.64,183.28,192.00,205.20,218.52,231.96,245.52,259.20,273.00,286.92,300.96,315.12,329.40,343.80,358.32,372.96,387.72,402.60,417.60,432.72,447.96,463.32,478.80,504.80,531.00,557.40,584.00,610.80,637.80,665.00,692.40,720.00,747.80,775.80,804.00,832.40,861.00,889.80,918.80,948.00,977.40,1007.00,1036.80,1066.80,1097.00,1127.40,1158.00,1188.80,1219.80,1251.00,1282.40,1314.00,1345.80,1377.80,1410.00,1442.40,1475.00,1507.80,1540.80,1574.00,1607.40,1641.00,1674.80);
var
  BaseMP,B,WB,BM,RB,SB : Extended;
begin
  BaseMP := 0;
  if Fighter then
    case Profa of
      0 : BaseMP := Fig0[Lvl];
      1 : BaseMP := Fig1[Lvl];
      2 : BaseMP := Fig2[Lvl];
    end;
  if Mystic or Buffer then
    case Profa of
      0 : BaseMP := Mys0[Lvl];
      1 : BaseMP := Mys1[Lvl];
      2 : BaseMP := Mys2[Lvl];
    end;
  case MEN + Set_MEN + tMEN of
     1 : _Men := 1.01;
     2 : _Men := 1.02;
     3 : _Men := 1.03;
     4 : _Men := 1.04;
     5 : _Men := 1.05;
     6 : _Men := 1.06;
     7 : _Men := 1.07;
     8 : _Men := 1.08;
     9 : _Men := 1.09;
    10 : _Men := 1.11;
    11 : _Men := 1.12;
    12 : _Men := 1.13;
    13 : _Men := 1.14;
    14 : _Men := 1.15;
    15 : _Men := 1.16;
    16 : _Men := 1.17;
    17 : _Men := 1.19;
    18 : _Men := 1.20;
    19 : _Men := 1.21;
    20 : _Men := 1.22;
    21 : _Men := 1.23;
    22 : _Men := 1.25;
    23 : _Men := 1.26;
    24 : _Men := 1.27;
    25 : _Men := 1.28;
    26 : _Men := 1.30;
    27 : _Men := 1.31;
    28 : _Men := 1.32;
    29 : _Men := 1.34;
    30 : _Men := 1.35;
    31 : _Men := 1.36;
    32 : _Men := 1.38;
    33 : _Men := 1.39;
    34 : _Men := 1.40;
    35 : _Men := 1.42;
    36 : _Men := 1.43;
    37 : _Men := 1.45;
    38 : _Men := 1.46;
    39 : _Men := 1.48;
    40 : _Men := 1.49;
    41 : _Men := 1.50;
    42 : _Men := 1.52;
    43 : _Men := 1.53;
    44 : _Men := 1.55;
    45 : _Men := 1.57;
    46 : _Men := 1.58;
    47 : _Men := 1.60;
    48 : _Men := 1.61;
    49 : _Men := 1.63;
    50 : _Men := 1.65;
  end;
  B := 1;
  if IsBlessTS.Checked then
    case BlessTSLvl.ItemIndex of
      0 : B := B*1.1;
      1 : B := B*1.15;
      2 : B := B*1.2;
      3 : B := B*1.25;
      4 : B := B*1.3;
      5 : B := B*1.35;
    end;
  if IsSoulOfSaggitarius.Checked and IsSoulOfSaggitarius.Visible then
    case SoulOfSaggitarius.ItemIndex of
      0 : B := B*1.1;
      1 : B := B*1.15;
      2 : B := B*1.2;
      3 : B := B*1.25;
    end;
  WB := 1;
  if IsSA then
    begin
      if WSA.SA = SA_ManaUp then
        WB := 1.3;
      if WSA.SA = SA_Conversion then
        WB := 1.6;
      if WSA.SA = SA_MPHPCP then
        WB := 1.2;
      if WSA.SA in HeroWeapons then
        WB := 1.3;
    end;    
  BM := 0;
  if IsBoostMana.Checked and IsBoostMana.Visible then
    case BoostMana.ItemIndex of
      0 : BM := 30;
      1 : BM := 50;
      2 : BM := 70;
      3 : BM := 100;
      4 : BM := 140;
      5 : BM := 152;
      6 : BM := 180;
      7 : BM := 200;
    end;
  RB := 0;
  SB := 0;
  if CurS = Reinforced then
    SB := 80;
  if CurS = Manticore then
    SB := 91.81;
  if CurS = Divine then
    SB := 170.62;
  if CurS = BW_Robe then
    SB := 206;
  if CurS = Tal_Light then
    SB := 222;
  if CurS = Maj_Light then
    SB := 240;
  if CurS = Maj_Rob then
    SB := 240;
  if CurS = Drac then
    SB := 289;
  MaxMP := BaseMP*_Men*B*WB + BM + RB + SB + Bonus_MP;
end;

procedure TForm1.CalcCP;
const
  DwF : array [1..80] of Extended = (56.00,64.91,73.93,83.04,92.26,101.57,110.97,120.48,130.08,139.79,149.59,159.48,169.48,179.57,189.77,200.06,210.44,220.93,231.51,242.20,252.98,263.85,274.83,285.90,297.08,308.35,319.71,331.18,342.74,354.41,366.17,378.02,389.98,402.03,414.19,426.44,438.78,451.23,463.77,476.42,489.16,501.99,514.93,527.96,541.10,554.33,567.65,581.08,594.60,608.23,621.95,635.76,649.68,663.69,677.81,692.02,706.32,720.73,735.23,749.84,764.54,779.33,794.23,809.22,824.32,839.51,854.79,870.18,885.66,901.25,916.93,932.70,948.58,964.55,980.63,996.80,1013.06,1029.43,1045.89,1062.46);
  Sca : array [1..80] of Extended = (56.00,64.91,73.93,83.04,92.26,101.57,110.97,120.48,130.08,139.79,149.59,159.48,169.48,179.57,189.77,200.06,210.44,220.93,231.51,242.20,266.84,291.70,316.79,342.10,367.64,393.40,419.38,445.59,472.02,498.68,525.56,552.66,579.99,607.54,635.32,663.32,691.54,719.99,748.66,777.56,806.68,836.02,865.59,895.38,925.40,955.64,986.10,1016.79,1047.70,1078.84,1110.20,1141.78,1173.59,1205.62,1237.88,1270.36,1303.06,1335.99,1369.14,1402.52,1436.12,1469.94,1503.99,1538.26,1572.76,1607.48,1642.42,1677.59,1712.98,1748.60,1784.44,1820.50,1856.79,1893.30,1930.04,1967.00,2004.18,2041.59,2079.22,2117.08);
  Art : array [1..80] of Extended = (64.00,74.19,84.49,94.91,105.44,116.08,126.83,137.69,148.67,159.76,170.96,182.27,193.69,205.23,216.88,228.64,240.51,252.49,264.59,276.80,303.20,329.84,356.72,383.84,411.20,438.80,466.64,494.72,523.04,551.60,580.40,609.44,638.72,668.24,698.00,728.00,758.24,788.72,819.44,850.40,881.60,913.04,944.72,976.64,1008.80,1041.20,1073.84,1106.72,1139.84,1173.20,1206.80,1240.64,1274.72,1309.04,1343.60,1378.40,1413.44,1448.72,1484.24,1520.00,1556.00,1592.24,1628.72,1665.44,1702.40,1739.60,1777.04,1814.72,1852.64,1890.80,1929.20,1967.84,2006.72,2045.84,2085.20,2124.80,2164.64,2204.72,2245.04,2285.60);
  Bou : array [1..80] of Extended = (56.00,64.91,73.93,83.04,92.26,101.57,110.97,120.48,130.08,139.79,149.59,159.48,169.48,179.57,189.77,200.06,210.44,220.93,231.51,242.20,266.84,291.70,316.79,342.10,367.64,393.40,419.38,445.59,472.02,498.68,525.56,552.66,579.99,607.54,635.32,663.32,691.54,719.99,748.66,777.56,817.60,857.94,898.60,939.56,980.84,1022.42,1064.30,1106.50,1149.00,1191.82,1234.94,1278.36,1322.10,1366.14,1410.50,1455.16,1500.12,1545.40,1590.98,1636.88,1683.08,1729.58,1776.40,1823.52,1870.96,1918.70,1966.74,2015.10,2063.76,2112.74,2162.02,2211.60,2261.50,2311.70,2362.22,2413.04,2464.16,2515.60,2567.34,2619.40);
  Wrs : array [1..80] of Extended = (64.00,74.19,84.49,94.91,105.44,116.08,126.83,137.69,148.67,159.76,170.96,182.27,193.69,205.23,216.88,228.64,240.51,252.49,264.59,276.80,303.20,329.84,356.72,383.84,411.20,438.80,466.64,494.72,523.04,551.60,580.40,609.44,638.72,668.24,698.00,728.00,758.24,788.72,819.44,850.40,894.08,938.09,982.44,1027.13,1072.16,1117.52,1163.21,1209.24,1255.61,1302.32,1349.36,1396.73,1444.44,1492.49,1540.88,1589.60,1638.65,1688.04,1737.77,1787.84,1838.24,1888.97,1940.04,1991.45,2043.20,2095.28,2147.69,2200.44,2253.53,2306.96,2360.72,2414.81,2469.24,2524.01,2579.12,2634.56,2690.33,2746.44,2802.89,2859.68);
  OrF : array [1..80] of Extended = (40.00,46.37,52.81,59.32,65.90,72.55,79.27,86.06,92.92,99.85,106.85,113.92,121.06,128.27,135.55,142.90,150.32,157.81,165.37,173.00,180.70,188.47,196.31,204.22,212.20,220.25,228.37,236.56,244.82,253.15,261.55,270.02,278.56,287.17,295.85,304.60,313.42,322.31,331.27,340.30,349.40,358.57,367.81,377.12,386.50,395.95,405.47,415.06,424.72,434.45,444.25,454.12,464.06,474.07,484.15,494.30,504.52,514.81,525.17,535.60,546.10,556.67,567.31,578.02,588.80,599.65,610.57,621.56,632.62,643.75,654.95,666.22,677.56,688.97,700.45,712.00,723.62,735.31,747.07,758.90);
  OrR : array [1..80] of Extended = (56.00,64.91,73.93,83.04,92.26,101.57,110.97,120.48,130.08,139.79,149.59,159.48,169.48,179.57,189.77,200.06,210.44,220.93,231.51,242.20,266.84,291.70,316.79,342.10,367.64,393.40,419.38,445.59,472.02,498.68,525.56,552.66,579.99,607.54,635.32,663.32,691.54,719.99,748.66,777.56,806.68,836.02,865.59,895.38,925.40,955.64,986.10,1016.79,1047.70,1078.84,1110.20,1141.78,1173.59,1205.62,1237.88,1270.36,1303.06,1335.99,1369.14,1402.52,1436.12,1469.94,1503.99,1538.26,1572.76,1607.48,1642.42,1677.59,1712.98,1748.60,1784.44,1820.50,1856.79,1893.30,1930.04,1967.00,2004.18,2041.59,2079.22,2117.08);
  OMo : array [1..80] of Extended = (40.00,46.37,52.81,59.32,65.90,72.55,79.27,86.06,92.92,99.85,106.85,113.92,121.06,128.27,135.55,142.90,150.32,157.81,165.37,173.00,189.50,206.15,222.95,239.90,257.00,274.25,291.65,309.20,326.90,344.75,362.75,380.90,399.20,417.65,436.25,455.00,473.90,492.95,512.15,531.50,551.00,570.65,590.45,610.40,630.50,650.75,671.15,691.70,712.40,733.25,754.25,775.40,796.70,818.15,839.75,861.50,883.40,905.45,927.65,950.00,972.50,995.15,1017.95,1040.90,1064.00,1087.25,1110.65,1134.20,1157.90,1181.75,1205.75,1229.90,1254.20,1278.65,1303.25,1328.00,1352.90,1377.95,1403.15,1428.50);
  Des : array [1..80] of Extended = (56.00,64.91,73.93,83.04,92.26,101.57,110.97,120.48,130.08,139.79,149.59,159.48,169.48,179.57,189.77,200.06,210.44,220.93,231.51,242.20,266.84,291.70,316.79,342.10,367.64,393.40,419.38,445.59,472.02,498.68,525.56,552.66,579.99,607.54,635.32,663.32,691.54,719.99,748.66,777.56,817.60,857.94,898.60,939.56,980.84,1022.42,1064.30,1106.50,1149.00,1191.82,1234.94,1278.36,1322.10,1366.14,1410.50,1455.16,1500.12,1545.40,1590.98,1636.88,1683.08,1729.58,1776.40,1823.52,1870.96,1918.70,1966.74,2015.10,2063.76,2112.74,2162.02,2211.60,2261.50,2311.70,2362.22,2413.04,2464.16,2515.60,2567.34,2619.40);
  Tyr : array [1..80] of Extended = (40.00,46.37,52.81,59.32,65.90,72.55,79.27,86.06,92.92,99.85,106.85,113.92,121.06,128.27,135.55,142.90,150.32,157.81,165.37,173.00,189.50,206.15,222.95,239.90,257.00,274.25,291.65,309.20,326.90,344.75,362.75,380.90,399.20,417.65,436.25,455.00,473.90,492.95,512.15,531.50,558.80,586.31,614.03,641.96,670.10,698.45,727.01,755.78,784.76,813.95,843.35,872.96,902.78,932.81,963.05,993.50,1024.16,1055.03,1086.11,1117.40,1148.90,1180.61,1212.53,1244.66,1277.00,1309.55,1342.31,1375.28,1408.46,1441.85,1475.45,1509.26,1543.28,1577.51,1611.95,1646.60,1681.46,1716.53,1751.81,1787.30);
  OMy : array [1..80] of Extended = (47.50,55.23,63.05,70.96,78.95,87.02,95.18,103.43,111.76,120.17,128.67,137.26,145.93,154.68,163.52,172.45,181.46,190.55,199.73,209.00,218.35,227.78,237.30,246.91,256.60,266.37,276.23,286.18,296.21,306.32,316.52,326.81,337.18,347.63,358.17,368.80,379.51,390.30,401.18,412.15,423.20,434.33,445.55,456.86,468.25,479.72,491.28,502.93,514.66,526.47,538.37,550.36,562.43,574.58,586.82,599.15,611.56,624.05,636.63,649.30,662.05,674.88,687.80,700.81,713.90,727.07,740.33,753.68,767.11,780.62,794.22,807.91,821.68,835.53,849.47,863.50,877.61,891.80,906.08,920.45);
  OSh : array [1..80] of Extended = (47.50,55.23,63.05,70.96,78.95,87.02,95.18,103.43,111.76,120.17,128.67,137.26,145.93,154.68,163.52,172.45,181.46,190.55,199.73,209.00,226.60,244.36,262.28,280.36,298.60,317.00,335.56,354.28,373.16,392.20,411.40,430.76,450.28,469.96,489.80,509.80,529.96,550.28,570.76,591.40,612.20,633.16,654.28,675.56,697.00,718.60,740.36,762.28,784.36,806.60,829.00,851.56,874.28,897.16,920.20,943.40,966.76,990.28,1013.96,1037.80,1061.80,1085.96,1110.28,1134.76,1159.40,1184.20,1209.16,1234.28,1259.56,1285.00,1310.60,1336.36,1362.28,1388.36,1414.60,1441.00,1467.56,1494.28,1521.16,1548.20);
  Ove : array [1..80] of Extended = (76.00,88.37,100.88,113.53,126.32,139.24,152.29,165.48,178.81,192.28,205.88,219.61,233.48,247.49,261.64,275.92,290.93,304.88,319.57,334.40,362.56,390.97,419.64,448.57,477.76,507.20,536.89,566.84,597.05,627.52,658.24,689.21,720.44,751.93,783.68,815.68,847.93,880.44,913.21,946.24,988.88,1031.84,1075.14,1118.76,1162.72,1207.00,1251.60,1296.54,1341.80,1387.40,1433.32,1479.56,1526.14,1573.04,1620.28,1667.84,1715.72,1763.94,1812.48,1861.36,1910.56,1960.08,2009.94,2060.12,2110.64,2161.48,2212.64,2264.14,2315.96,2368.12,2420.60,2473.40,2526.64,2580.00,2633.80,2687.92,2742.36,2797.14,2852.24,2907.68);
  Wrc : array [1..80] of Extended = (47.50,55.23,63.05,70.96,78.95,87.02,95.18,103.43,111.76,120.17,128.67,137.26,145.93,154.68,163.52,172.45,181.46,190.55,199.73,209.00,226.60,244.36,262.28,280.36,298.60,317.00,335.56,354.28,373.16,392.20,411.40,430.76,450.28,469.96,489.80,509.80,529.96,550.28,570.76,591.40,618.05,644.90,671.96,699.23,726.70,754.37,782.25,810.34,838.63,867.12,895.82,924.73,953.84,983.15,1012.67,1042.40,1072.33,1102.46,1132.80,1163.35,1194.10,1225.05,1256.21,1287.58,1319.15,1350.92,1382.90,1415.09,1447.48,1480.07,1512.87,1545.88,1579.09,1612.50,1646.12,1679.95,1713.98,1748.21,1782.65,1817.30);
  DMy : array [1..80] of Extended = (53.00,60.73,68.55,76.46,84.45,92.52,100.68,108.93,117.26,125.67,134.17,142.76,151.43,160.18,169.02,177.95,186.96,196.05,205.23,214.50,223.85,233.28,242.80,252.41,262.10,271.87,281.73,291.68,301.71,311.82,322.02,332.31,342.68,353.13,363.67,374.30,385.01,395.80,406.68,417.65,428.70,439.83,451.05,462.36,473.75,485.22,496.78,508.43,520.16,531.97,543.87,555.86,567.93,580.08,592.32,604.65,617.06,629.55,642.13,654.80,667.55,680.38,693.30,706.31,719.40,732.57,745.83,759.18,772.61,786.12,799.72,813.41,827.18,841.03,854.97,869.00,883.11,897.30,911.58,925.95);
  DWi : array [1..80] of Extended = (53.00,60.73,68.55,76.46,84.45,92.52,100.68,108.93,117.26,125.67,134.17,142.76,151.43,160.18,169.02,177.95,186.96,196.05,205.23,214.50,229.35,244.33,259.45,274.71,290.10,305.62,321.28,337.08,353.01,369.07,385.27,401.61,418.08,434.68,451.42,468.30,485.31,502.45,519.73,537.15,554.70,572.38,590.20,608.16,626.25,644.47,662.83,681.33,699.96,718.72,737.62,756.66,775.83,795.13,814.57,834.15,853.86,873.70,893.68,913.80,934.05,954.43,974.95,995.61,1016.40,1037.32,1058.38,1079.58,1100.91,1122.37,1143.97,1165.71,1187.58,1209.58,1231.72,1254.00,1276.41,1298.95,1321.63,1344.45);
  ShO : array [1..80] of Extended = (53.00,60.73,68.55,76.46,84.45,92.52,100.68,108.93,117.26,125.67,134.17,142.76,151.43,160.18,169.02,177.95,186.96,196.05,205.23,214.50,232.65,250.96,269.44,288.09,306.90,325.87,345.01,364.32,383.79,403.42,423.22,443.19,463.32,483.61,504.07,524.70,545.49,566.44,587.56,608.85,630.30,651.91,673.69,695.64,717.75,740.02,762.46,785.07,807.84,830.77,853.87,877.14,900.57,924.16,947.92,971.85,995.94,1020.19,1044.61,1069.20,1093.95,1118.86,1143.94,1169.19,1194.60,1220.17,1245.91,1271.82,1297.89,1324.12,1350.52,1377.09,1403.82,1430.71,1457.77,1485.00,1512.39,1539.94,1567.66,1595.55);
  SpH : array [1..80] of Extended = (53.00,60.73,68.55,76.46,84.45,92.52,100.68,108.93,117.26,125.67,134.17,142.76,151.43,160.18,169.02,177.95,186.96,196.05,205.23,214.50,229.35,244.33,259.45,274.71,290.10,305.62,321.28,337.08,353.01,369.07,385.27,401.61,418.08,434.68,451.42,468.30,485.31,502.45,519.73,537.15,561.20,585.43,609.85,634.46,659.25,684.22,709.38,734.73,760.26,785.97,811.87,837.96,864.23,890.68,917.32,944.15,971.16,998.35,1025.73,1053.30,1081.05,1108.98,1137.10,1165.41,1193.90,1222.57,1251.43,1280.48,1309.71,1339.12,1368.72,1398.51,1428.48,1458.63,1488.97,1519.50,1550.21,1581.10,1612.18,1643.45);
  PhS : array [1..80] of Extended = (63.60,72.88,82.26,91.75,101.34,111.03,120.82,130.71,140.71,150.81,161.01,171.31,181.71,192.22,202.83,213.54,224.35,235.26,246.28,257.40,275.22,293.20,311.34,329.65,348.12,366.75,385.54,404.49,423.61,442.89,462.33,481.93,501.69,521.62,541.71,561.96,582.37,602.94,623.68,644.58,675.78,707.22,738.90,770.82,802.98,835.38,868.02,900.90,934.02,967.38,1000.98,1034.82,1068.90,1103.22,1137.78,1172.58,1207.62,1242.90,1278.42,1314.18,1350.18,1386.42,1422.90,1459.62,1496.58,1533.78,1571.22,1608.90,1646.82,1684.98,1723.38,1762.02,1800.90,1840.02,1879.38,1918.98,1958.82,1998.90,2039.22,2079.78);
  ShE : array [1..80] of Extended = (53.00,60.73,68.55,76.46,84.45,92.52,100.68,108.93,117.26,125.67,134.17,142.76,151.43,160.18,169.02,177.95,186.96,196.05,205.23,214.50,232.65,250.96,269.44,288.09,306.90,325.87,345.01,364.32,383.79,403.42,423.22,443.19,463.32,483.61,504.07,524.70,545.49,566.44,587.56,608.85,636.15,663.66,691.38,719.31,747.45,775.80,804.36,833.13,862.11,891.30,920.70,950.31,980.13,1010.16,1040.40,1070.85,1101.51,1132.38,1163.46,1194.75,1226.25,1257.96,1289.88,1322.01,1354.35,1386.90,1419.66,1452.63,1485.81,1519.20,1552.80,1586.61,1620.63,1654.86,1689.30,1723.95,1758.81,1793.88,1829.16,1864.65);
  DFi : array [1..80] of Extended = (37.60,43.06,48.58,54.16,59.80,65.50,71.26,77.08,82.96,88.90,94.90,100.96,107.08,113.26,119.50,125.80,132.16,138.58,145.06,151.60,158.20,164.86,171.58,178.36,185.20,192.10,199.06,206.08,213.16,220.30,227.50,234.76,242.08,249.46,256.90,264.40,271.96,279.58,287.26,295.00,302.80,310.66,318.58,326.56,334.60,342.70,350.86,359.08,367.36,375.70,384.10,392.56,401.08,409.66,418.30,427.00,435.76,444.58,453.46,462.40,471.40,480.46,489.58,498.76,508.00,517.30,526.66,536.08,545.56,555.10,564.70,574.36,584.08,593.86,603.70,613.60,623.56,633.58,643.66,653.80);
  PaK : array [1..80] of Extended = (47.00,53.82,60.72,67.70,74.75,81.87,89.07,96.35,103.70,111.12,118.62,126.20,133.85,141.57,149.37,157.25,165.20,173.22,181.32,189.50,207.10,224.86,242.78,260.86,279.10,297.50,316.06,334.78,353.66,372.70,391.90,411.26,430.78,450.46,470.30,490.30,510.46,530.78,551.26,571.90,592.70,613.66,634.78,656.06,677.50,699.10,720.86,742.78,764.86,787.10,809.50,832.06,854.78,877.66,900.70,923.90,947.26,970.78,994.46,1018.30,1042.30,1066.46,1090.78,1115.26,1139.90,1164.70,1189.66,1214.78,1240.06,1265.50,1291.10,1316.86,1342.78,1368.86,1395.10,1421.50,1448.06,1474.78,1501.66,1528.70);
  Ass : array [1..80] of Extended = (37.60,43.06,48.58,54.16,59.80,65.50,71.26,77.08,82.96,88.90,94.90,100.96,107.08,113.26,119.50,125.80,132.16,138.58,145.06,151.60,164.80,178.12,191.56,205.12,218.80,232.60,246.52,260.56,274.72,289.00,303.40,317.92,332.56,347.32,362.20,377.20,392.32,407.56,422.92,438.40,454.00,469.72,485.56,501.52,517.60,533.80,550.12,566.56,583.12,599.80,616.60,633.52,650.56,667.72,685.00,702.40,719.92,737.56,755.32,773.20,791.20,809.32,827.56,845.92,864.40,883.00,901.72,920.56,939.52,958.60,977.80,997.12,1016.56,1036.12,1055.80,1075.60,1095.52,1115.56,1135.72,1156.00);
  ShK : array [1..80] of Extended = (56.40,64.59,72.87,81.24,89.70,98.25,106.89,115.62,124.44,133.35,142.35,151.44,160.62,169.89,179.25,188.70,198.24,207.87,217.59,227.40,248.52,269.83,291.33,313.03,334.92,357.00,379.27,401.73,424.39,447.24,470.28,493.51,516.93,540.55,564.36,588.36,612.55,636.93,661.51,686.28,719.04,752.05,785.31,818.83,852.60,886.62,920.89,955.41,990.19,1025.22,1060.50,1096.03,1131.81,1167.85,1204.14,1240.68,1277.47,1314.51,1351.81,1389.36,1427.16,1465.21,1503.51,1542.07,1580.88,1619.94,1659.25,1698.81,1738.63,1778.70,1819.02,1859.59,1900.41,1941.49,1982.82,2024.40,2066.23,2108.31,2150.65,2193.24);
  BlD : array [1..80] of Extended = (47.00,53.82,60.72,67.70,74.75,81.87,89.07,96.35,103.70,111.12,118.62,126.20,133.85,141.57,149.37,157.25,165.20,173.22,181.32,189.50,207.10,224.86,242.78,260.86,279.10,297.50,316.06,334.78,353.66,372.70,391.90,411.26,430.78,450.46,470.30,490.30,510.46,530.78,551.26,571.90,601.15,630.62,660.32,690.25,720.40,750.77,781.37,812.20,843.25,874.52,906.02,937.75,969.70,1001.87,1034.27,1066.90,1099.75,1132.82,1166.12,1199.65,1233.40,1267.37,1301.57,1336.00,1370.65,1405.52,1440.62,1475.95,1511.50,1547.27,1583.27,1619.50,1655.95,1692.62,1729.52,1766.65,1804.00,1841.57,1879.37,1917.40);
  AbW : array [1..80] of Extended = (37.60,43.06,48.58,54.16,59.80,65.50,71.26,77.08,82.96,88.90,94.90,100.96,107.08,113.26,119.50,125.80,132.16,138.58,145.06,151.60,164.80,178.12,191.56,205.12,218.80,232.60,246.52,260.56,274.72,289.00,303.40,317.92,332.56,347.32,362.20,377.20,392.32,407.56,422.92,438.40,458.16,478.07,498.13,518.35,538.72,559.24,579.91,600.73,621.71,642.84,664.12,685.55,707.13,728.87,750.76,772.80,794.99,817.33,839.83,862.48,885.28,908.23,931.33,954.59,978.00,1001.56,1025.27,1049.13,1073.15,1097.32,1121.64,1146.11,1170.73,1195.51,1220.44,1245.52,1270.75,1296.13,1321.67,1347.36);
  PhR : array [1..80] of Extended = (47.00,53.82,60.72,67.70,74.75,81.87,89.07,96.35,103.70,111.12,118.62,126.20,133.85,141.57,149.37,157.25,165.20,173.22,181.32,189.50,206.00,222.65,239.45,256.40,273.50,290.75,308.15,325.70,343.40,361.25,379.25,397.40,415.70,434.15,452.75,471.50,490.40,509.45,528.65,548.00,574.00,600.20,626.60,653.20,680.00,707.00,734.20,761.60,789.20,817.00,845.00,873.20,901.60,930.20,959.00,988.00,1017.20,1046.60,1076.20,1106.00,1136.00,1166.20,1196.60,1227.20,1258.00,1289.00,1320.20,1351.60,1383.20,1415.00,1447.00,1479.20,1511.60,1544.20,1577.00,1610.00,1643.20,1676.60,1710.20,1744.00);
  EMy : array [1..80] of Extended = (52.00,59.73,67.55,75.46,83.45,91.52,99.68,107.93,116.26,124.67,133.17,141.76,150.43,159.18,168.02,176.95,185.96,195.05,204.23,213.50,222.85,232.28,241.80,251.41,261.10,270.87,280.73,290.68,300.71,310.82,321.02,331.31,341.68,352.13,362.67,373.30,384.01,394.80,405.68,416.65,427.70,438.83,450.05,461.36,472.75,484.22,495.78,507.43,519.16,530.97,542.87,554.86,566.93,579.08,591.32,603.65,616.06,628.55,641.13,653.80,666.55,679.38,692.30,705.31,718.40,731.57,744.83,758.18,771.61,785.12,798.72,812.41,826.18,840.03,853.97,868.00,882.11,896.30,910.58,924.95);
  EWi : array [1..80] of Extended = (52.00,59.73,67.55,75.46,83.45,91.52,99.68,107.93,116.26,124.67,133.17,141.76,150.43,159.18,168.02,176.95,185.96,195.05,204.23,213.50,227.80,242.23,256.79,271.48,286.30,301.25,316.33,331.54,346.88,362.35,377.95,393.68,409.54,425.53,441.65,457.90,474.28,490.79,507.43,524.20,541.10,558.13,575.29,592.58,610.00,627.55,645.23,663.04,680.98,699.05,717.25,735.58,754.04,772.63,791.35,810.20,829.18,848.29,867.53,886.90,906.40,926.03,945.79,965.68,985.70,1005.85,1026.13,1046.54,1067.08,1087.75,1108.55,1129.48,1150.54,1171.73,1193.05,1214.50,1236.08,1257.79,1279.63,1301.60);
  EOr : array [1..80] of Extended = (52.00,59.73,67.55,75.46,83.45,91.52,99.68,107.93,116.26,124.67,133.17,141.76,150.43,159.18,168.02,176.95,185.96,195.05,204.23,213.50,231.10,248.86,266.78,284.86,303.10,321.50,340.06,358.78,377.66,396.70,415.90,435.26,454.78,474.46,494.30,514.30,534.46,554.78,575.26,595.90,616.70,637.66,658.78,680.06,701.50,723.10,744.86,766.78,788.86,811.10,833.50,856.06,878.78,901.66,924.70,947.90,971.26,994.78,1018.46,1042.30,1066.30,1090.46,1114.78,1139.26,1163.90,1188.70,1213.66,1238.78,1264.06,1289.50,1315.10,1340.86,1366.78,1392.86,1419.10,1445.50,1472.06,1498.78,1525.66,1552.70);
  SpS : array [1..80] of Extended = (52.00,59.73,67.55,75.46,83.45,91.52,99.68,107.93,116.26,124.67,133.17,141.76,150.43,159.18,168.02,176.95,185.96,195.05,204.23,213.50,227.80,242.23,256.79,271.48,286.30,301.25,316.33,331.54,346.88,362.35,377.95,393.68,409.54,425.53,441.65,457.90,474.28,490.79,507.43,524.20,548.25,572.48,596.90,621.51,646.30,671.27,696.43,721.78,747.31,773.02,798.92,825.01,851.28,877.73,904.37,931.20,958.21,985.40,1012.78,1040.35,1068.10,1096.03,1124.15,1152.46,1180.95,1209.62,1238.48,1267.53,1296.76,1326.17,1355.77,1385.56,1415.53,1445.68,1476.02,1506.55,1537.26,1568.15,1599.23,1630.50);
  ElS : array [1..80] of Extended = (62.40,71.68,81.06,90.55,100.14,109.83,119.62,129.51,139.51,149.61,159.81,170.11,180.51,191.02,201.63,212.34,223.15,234.06,245.08,256.20,273.36,290.67,308.14,325.77,343.56,361.50,379.59,397.84,416.25,434.82,453.54,472.41,491.44,510.63,529.98,549.48,569.13,588.94,608.91,629.04,659.46,690.11,721.00,752.12,783.48,815.07,846.89,878.95,911.24,943.77,976.53,1009.52,1042.75,1076.21,1109.91,1143.84,1178.00,1212.40,1247.03,1281.90,1317.00,1352.33,1387.90,1423.70,1459.74,1496.01,1532.51,1569.25,1606.22,1643.43,1680.87,1718.54,1756.45,1794.59,1832.97,1871.58,1910.42,1949.50,1988.81,2028.36);
  ElE : array [1..80] of Extended = (52.00,59.73,67.55,75.46,83.45,91.52,99.68,107.93,116.26,124.67,133.17,141.76,150.43,159.18,168.02,176.95,185.96,195.05,204.23,213.50,231.10,248.86,266.78,284.86,303.10,321.50,340.06,358.78,377.66,396.70,415.90,435.26,454.78,474.46,494.30,514.30,534.46,554.78,575.26,595.90,623.20,650.71,678.43,706.36,734.50,762.85,791.41,820.18,849.16,878.35,907.75,937.36,967.18,997.21,1027.45,1057.90,1088.56,1119.43,1150.51,1181.80,1213.30,1245.01,1276.93,1309.06,1341.40,1373.95,1406.71,1439.68,1472.86,1506.25,1539.85,1573.66,1607.68,1641.91,1676.35,1711.00,1745.86,1780.93,1816.21,1851.70);
  EFi : array [1..80] of Extended = (35.60,40.69,45.84,51.05,56.32,61.64,67.01,72.44,77.93,83.48,89.08,94.73,100.44,106.21,112.04,117.92,123.85,129.84,135.89,142.00,148.16,154.37,160.64,166.97,173.36,179.80,186.29,192.84,199.45,206.12,212.84,219.61,226.44,233.33,240.28,247.28,254.33,261.44,268.61,275.84,283.12,290.45,297.84,305.29,312.80,320.36,327.97,335.64,343.37,351.16,359.00,366.89,374.84,382.85,390.92,399.04,407.21,415.44,423.73,432.08,440.48,448.93,457.44,466.01,474.64,483.32,492.05,500.84,509.69,518.60,527.56,536.57,545.64,554.77,563.96,573.20,582.49,591.84,601.25,610.72);
  EKn : array [1..80] of Extended = (44.50,50.87,57.31,63.82,70.40,77.05,83.77,90.56,97.42,104.35,111.35,118.42,125.56,132.77,140.05,147.40,154.82,162.31,169.87,177.50,194.00,210.65,227.45,244.40,261.50,278.75,296.15,313.70,331.40,349.25,367.25,385.40,403.70,422.15,440.75,459.50,478.40,497.45,516.65,536.00,555.50,575.15,594.95,614.90,635.00,655.25,675.65,696.20,716.90,737.75,758.75,779.90,801.20,822.65,844.25,866.00,887.90,909.95,932.15,954.50,977.00,999.65,1022.45,1045.40,1068.50,1091.75,1115.15,1138.70,1162.40,1186.25,1210.25,1234.40,1258.70,1283.15,1307.75,1332.50,1357.40,1382.45,1407.65,1433.00);
  ESc : array [1..80] of Extended = (35.60,40.69,45.84,51.05,56.32,61.64,67.01,72.44,77.93,83.48,89.08,94.73,100.44,106.21,112.04,117.92,123.85,129.84,135.89,142.00,154.32,166.75,179.29,191.95,204.72,217.60,230.59,243.69,256.91,270.24,283.68,297.23,310.89,324.67,338.56,352.56,366.67,380.89,395.23,409.68,424.24,438.91,453.69,468.59,483.60,498.72,513.95,529.29,544.75,560.32,576.00,591.79,607.69,623.71,639.84,656.08,672.43,688.89,705.47,722.16,738.96,755.87,772.89,790.03,807.28,824.64,842.11,859.69,877.39,895.20,913.12,931.15,949.29,967.55,985.92,1004.40,1022.99,1041.69,1060.51,1079.44);
  TKn : array [1..80] of Extended = (53.40,61.04,68.77,76.58,84.48,92.46,100.52,108.67,116.90,125.22,133.62,142.10,150.67,159.32,168.06,176.88,185.78,194.77,203.84,213.00,232.80,252.78,272.94,293.28,313.80,334.50,355.38,376.44,397.68,419.10,440.70,462.48,484.44,506.58,528.90,551.40,574.08,596.94,619.98,643.20,674.40,705.84,737.52,769.44,801.60,834.00,866.64,899.52,932.64,966.00,999.60,1033.44,1067.52,1101.84,1136.40,1171.20,1206.24,1241.52,1277.04,1312.80,1348.80,1385.04,1421.52,1458.24,1495.20,1532.40,1569.84,1607.52,1645.44,1683.60,1722.00,1760.64,1799.52,1838.64,1878.00,1917.60,1957.44,1997.52,2037.84,2078.40);
  SwS : array [1..80] of Extended = (44.50,50.87,57.31,63.82,70.40,77.05,83.77,90.56,97.42,104.35,111.35,118.42,125.56,132.77,140.05,147.40,154.82,162.31,169.87,177.50,194.00,210.65,227.45,244.40,261.50,278.75,296.15,313.70,331.40,349.25,367.25,385.40,403.70,422.15,440.75,459.50,478.40,497.45,516.65,536.00,563.30,590.81,618.53,646.46,674.60,702.95,731.51,760.28,789.26,818.45,847.85,877.46,907.28,937.31,967.55,998.00,1028.66,1059.53,1090.61,1121.90,1153.40,1185.11,1217.03,1249.16,1281.50,1314.05,1346.81,1379.78,1412.96,1446.35,1479.95,1513.76,1547.78,1582.01,1616.45,1651.10,1685.96,1721.03,1756.31,1791.80);
  PlW : array [1..80] of Extended = (35.60,40.69,45.84,51.05,56.32,61.64,67.01,72.44,77.93,83.48,89.08,94.73,100.44,106.21,112.04,117.92,123.85,129.84,135.89,142.00,154.32,166.75,179.29,191.95,204.72,217.60,230.59,243.69,256.91,270.24,283.68,297.23,310.89,324.67,338.56,352.56,366.67,380.89,395.23,409.68,428.40,447.26,466.27,485.42,504.72,524.16,543.74,563.47,583.34,603.36,623.52,643.82,664.27,684.86,705.60,726.48,747.50,768.67,789.98,811.44,833.04,854.78,876.67,898.70,920.88,943.20,965.66,988.27,1011.02,1033.92,1056.96,1080.14,1103.47,1126.94,1150.56,1174.32,1198.22,1222.27,1246.46,1270.80);
  Sil : array [1..80] of Extended = (44.50,50.87,57.31,63.82,70.40,77.05,83.77,90.56,97.42,104.35,111.35,118.42,125.56,132.77,140.05,147.40,154.82,162.31,169.87,177.50,192.90,208.44,224.12,239.94,255.90,272.00,288.24,304.62,321.14,337.80,354.60,371.54,388.62,405.84,423.20,440.70,458.34,476.12,494.04,512.10,536.80,561.69,586.77,612.04,637.50,663.15,688.99,715.02,741.24,767.65,794.25,821.04,848.02,875.19,902.55,930.10,957.84,985.77,1013.89,1042.20,1070.70,1099.39,1128.27,1157.34,1186.60,1216.05,1245.69,1275.52,1305.54,1335.75,1366.15,1396.74,1427.52,1458.49,1489.65,1521.00,1552.54,1584.27,1616.19,1648.30);
  HMy : array [1..80] of Extended = (50.50,58.23,66.05,73.96,81.95,90.02,98.18,106.43,114.76,123.17,131.67,140.26,148.93,157.68,166.52,175.45,184.46,193.55,202.73,212.00,221.35,230.78,240.30,249.91,259.60,269.37,279.23,289.18,299.21,309.32,319.52,329.81,340.18,350.63,361.17,371.80,382.51,393.30,404.18,415.15,426.20,437.33,448.55,459.86,471.25,482.72,494.28,505.93,517.66,529.47,541.37,553.36,565.43,577.58,589.82,602.15,614.56,627.05,639.63,652.30,665.05,677.88,690.80,703.81,716.90,730.07,743.33,756.68,770.11,783.62,797.22,810.91,824.68,838.53,852.47,866.50,880.61,894.80,909.08,923.45);
  HWi : array [1..80] of Extended = (50.50,58.23,66.05,73.96,81.95,90.02,98.18,106.43,114.76,123.17,131.67,140.26,148.93,157.68,166.52,175.45,184.46,193.55,202.73,212.00,225.75,239.62,253.62,267.75,282.00,296.37,310.87,325.50,340.25,355.12,370.12,385.25,400.50,415.87,431.37,447.00,462.75,478.62,494.62,510.75,527.00,543.37,559.87,576.50,593.25,610.12,627.12,644.25,661.50,678.87,696.37,714.00,731.75,749.62,767.62,785.75,804.00,822.37,840.87,859.50,878.25,897.12,916.12,935.25,954.50,973.87,993.37,1013.00,1032.75,1052.62,1072.62,1092.75,1113.00,1133.37,1153.87,1174.50,1195.25,1216.12,1237.12,1258.25);
  Cle : array [1..80] of Extended = (50.50,58.23,66.05,73.96,81.95,90.02,98.18,106.43,114.76,123.17,131.67,140.26,148.93,157.68,166.52,175.45,184.46,193.55,202.73,212.00,229.05,246.25,263.61,281.13,298.80,316.62,334.60,352.74,371.03,389.47,408.07,426.83,445.74,464.80,484.02,503.40,522.93,542.61,562.45,582.45,602.60,622.90,643.36,663.98,684.75,705.67,726.75,747.99,769.38,790.92,812.62,834.48,856.49,878.65,900.97,923.45,946.08,968.86,991.80,1014.90,1038.15,1061.55,1085.11,1108.83,1132.70,1156.72,1180.90,1205.24,1229.73,1254.37,1279.17,1304.13,1329.24,1354.50,1379.92,1405.50,1431.23,1457.11,1483.15,1509.35);
  Sor : array [1..80] of Extended = (50.50,58.23,66.05,73.96,81.95,90.02,98.18,106.43,114.76,123.17,131.67,140.26,148.93,157.68,166.52,175.45,184.46,193.55,202.73,212.00,225.75,239.62,253.62,267.75,282.00,296.37,310.87,325.50,340.25,355.12,370.12,385.25,400.50,415.87,431.37,447.00,462.75,478.62,494.62,510.75,533.50,556.42,579.52,602.80,626.25,649.87,673.67,697.65,721.80,746.12,770.62,795.30,820.15,845.17,870.37,895.75,921.30,947.02,972.92,999.00,1025.25,1051.67,1078.27,1105.05,1132.00,1159.12,1186.42,1213.90,1241.55,1269.37,1297.37,1325.55,1353.90,1382.42,1411.12,1440.00,1469.05,1498.27,1527.67,1557.25);
  Wrl : array [1..80] of Extended = (60.60,69.88,79.26,88.75,98.34,108.03,117.82,127.71,137.71,147.81,158.01,168.31,178.71,189.22,199.83,210.54,221.35,232.26,243.28,254.40,270.90,287.55,304.35,321.30,338.40,355.65,373.05,390.60,408.30,426.15,444.15,462.30,480.60,499.05,517.65,536.40,555.30,574.35,593.55,612.90,642.54,672.40,702.50,732.82,763.38,794.16,825.16,856.40,887.86,919.56,951.48,983.62,1016.00,1048.60,1081.44,1114.50,1147.78,1181.30,1215.04,1249.02,1283.22,1317.64,1352.30,1387.18,1422.30,1457.64,1493.20,1529.00,1565.02,1601.28,1637.76,1674.46,1711.40,1748.56,1785.96,1823.58,1861.42,1899.50,1937.80,1976.34);
  Bis : array [1..80] of Extended = (70.70,81.52,92.47,103.54,114.73,126.03,137.45,149.00,160.66,172.44,184.34,196.36,208.50,220.75,233.13,245.63,258.24,270.97,283.82,296.80,320.67,344.75,369.06,393.58,418.32,443.27,468.44,493.83,519.44,545.26,571.30,597.56,624.03,650.72,677.63,704.76,732.10,759.66,787.43,815.43,850.01,884.85,919.96,955.34,990.99,1026.90,1063.07,1099.51,1136.22,1173.20,1210.44,1247.94,1285.71,1323.75,1362.06,1400.63,1439.46,1478.56,1517.93,1557.57,1597.47,1637.63,1678.06,1718.76,1759.73,1800.96,1842.45,1884.21,1926.24,1968.54,2011.10,2053.92,2097.01,2140.37,2184.00,2227.89,2272.04,2316.46,2361.15,2406.11);
  Pro : array [1..80] of Extended = (50.50,58.23,66.05,73.96,81.95,90.02,98.18,106.43,114.76,123.17,131.67,140.26,148.93,157.68,166.52,175.45,184.46,193.55,202.73,212.00,229.05,246.25,263.61,281.13,298.80,316.62,334.60,352.74,371.03,389.47,408.07,426.83,445.74,464.80,484.02,503.40,522.93,542.61,562.45,582.45,609.10,635.95,663.01,690.28,717.75,745.42,773.30,801.39,829.68,858.17,886.87,915.78,944.89,974.20,1003.72,1033.45,1063.38,1093.51,1123.85,1154.40,1185.15,1216.10,1247.26,1278.63,1310.20,1341.97,1373.95,1406.14,1438.53,1471.12,1503.92,1536.93,1570.14,1603.55,1637.17,1671.00,1705.03,1739.26,1773.70,1808.35);
  HFi : array [1..80] of Extended = (32.00,36.73,41.51,46.35,51.24,56.18,61.17,66.21,71.31,76.46,81.66,86.91,92.21,97.57,102.98,108.44,113.95,119.51,125.13,130.80,136.52,142.29,148.11,153.99,159.92,165.90,171.93,178.01,184.15,190.34,196.58,202.87,209.21,215.61,222.06,228.56,235.11,241.71,248.37,255.08,261.84,268.65,275.51,282.43,289.40,296.42,303.49,310.61,317.79,325.02,332.30,339.63,347.01,354.45,361.94,369.48,377.07,384.71,392.41,400.16,407.96,415.81,423.71,431.67,439.68,447.74,455.85,464.01,472.23,480.50,488.82,497.19,505.61,514.09,522.62,531.20,539.83,548.51,557.25,566.04);
  HWa : array [1..80] of Extended = (64.00,73.46,83.03,92.70,102.48,112.36,122.34,132.43,142.62,152.92,163.32,173.82,184.43,195.14,205.96,216.88,227.90,239.03,250.26,261.60,288.00,314.64,341.52,368.64,396.00,423.60,451.44,479.52,507.84,536.40,565.20,594.24,623.52,653.04,682.80,712.80,743.04,773.52,804.24,835.20,866.40,897.84,929.52,961.44,993.60,1026.00,1058.64,1091.52,1124.64,1158.00,1191.60,1225.44,1259.52,1293.84,1328.40,1363.20,1398.24,1433.52,1469.04,1504.80,1540.80,1577.04,1613.52,1650.24,1687.20,1724.40,1761.84,1799.52,1837.44,1875.60,1914.00,1952.64,1991.52,2030.64,2070.00,2109.60,2149.44,2189.52,2229.84,2270.40);
  HKn : array [1..80] of Extended = (48.00,55.09,62.27,69.52,76.86,84.27,91.75,99.32,106.96,114.69,122.49,130.36,138.32,146.35,154.47,162.66,170.92,179.27,187.69,196.20,214.02,232.00,250.14,268.45,286.92,305.55,324.34,343.29,362.41,381.69,401.13,420.73,440.49,460.42,480.51,500.76,521.17,541.74,562.48,583.38,604.44,625.66,647.04,668.59,690.30,712.17,734.20,756.39,778.75,801.27,823.95,846.79,869.79,892.96,916.29,939.78,963.43,987.24,1011.22,1035.36,1059.66,1084.12,1108.74,1133.53,1158.48,1183.59,1208.86,1234.29,1259.89,1285.65,1311.57,1337.65,1363.89,1390.30,1416.87,1443.60,1470.49,1497.54,1524.76,1552.14);
  Rog : array [1..80] of Extended = (32.00,36.73,41.51,46.35,51.24,56.18,61.17,66.21,71.31,76.46,81.66,86.91,92.21,97.57,102.98,108.44,113.95,119.51,125.13,130.80,141.80,152.90,164.10,175.40,186.80,198.30,209.90,221.60,233.40,245.30,257.30,269.40,281.60,293.90,306.30,318.80,331.40,344.10,356.90,369.80,382.80,395.90,409.10,422.40,435.80,449.30,462.90,476.60,490.40,504.30,518.30,532.40,546.60,560.90,575.30,589.80,604.40,619.10,633.90,648.80,663.80,678.90,694.10,709.40,724.80,740.30,755.90,771.60,787.40,803.30,819.30,835.40,851.60,867.90,884.30,900.80,917.40,934.10,950.90,967.80);
  War : array [1..80] of Extended = (64.00,73.46,83.03,92.70,102.48,112.36,122.34,132.43,142.62,152.92,163.32,173.82,184.43,195.14,205.96,216.88,227.90,239.03,250.26,261.60,288.00,314.64,341.52,368.64,396.00,423.60,451.44,479.52,507.84,536.40,565.20,594.24,623.52,653.04,682.80,712.80,743.04,773.52,804.24,835.20,878.88,922.89,967.24,1011.93,1056.96,1102.32,1148.01,1194.04,1240.41,1287.12,1334.16,1381.53,1429.24,1477.29,1525.68,1574.40,1623.45,1672.84,1722.57,1772.64,1823.04,1873.77,1924.84,1976.25,2028.00,2080.08,2132.49,2185.24,2238.33,2291.76,2345.52,2399.61,2454.04,2508.81,2563.92,2619.36,2675.13,2731.24,2787.69,2844.48);
  Gla : array [1..80] of Extended = (72.00,82.64,93.41,104.29,115.29,126.40,137.63,148.98,160.45,172.03,183.73,195.55,207.48,219.53,231.70,243.99,256.39,268.91,281.54,294.30,324.00,353.97,384.21,414.72,445.50,476.55,507.87,539.46,571.32,603.45,635.85,668.52,701.46,734.67,768.15,801.90,835.92,870.21,904.77,939.60,984.06,1028.86,1074.00,1119.49,1165.32,1211.49,1258.00,1304.85,1352.05,1399.59,1447.47,1495.69,1544.25,1593.16,1642.41,1692.00,1741.93,1792.20,1842.82,1893.78,1945.08,1996.72,2048.70,2101.03,2153.70,2206.71,2260.06,2313.75,2367.79,2422.17,2476.89,2531.95,2587.35,2643.10,2699.19,2755.62,2812.39,2869.50,2926.96,2984.76);
  Pal : array [1..80] of Extended = (48.00,55.09,62.27,69.52,76.86,84.27,91.75,99.32,106.96,114.69,122.49,130.36,138.32,146.35,154.47,162.66,170.92,179.27,187.69,196.20,214.02,232.00,250.14,268.45,286.92,305.55,324.34,343.29,362.41,381.69,401.13,420.73,440.49,460.42,480.51,500.76,521.17,541.74,562.48,583.38,611.46,639.75,668.26,696.99,725.94,755.10,784.47,814.06,843.87,873.90,904.14,934.59,965.26,996.15,1027.26,1058.58,1090.11,1121.86,1153.83,1186.02,1218.42,1251.03,1283.86,1316.91,1350.18,1383.66,1417.35,1451.26,1485.39,1519.74,1554.30,1589.07,1624.06,1659.27,1694.70,1730.34,1766.19,1802.26,1838.55,1875.06);
  TrH : array [1..80] of Extended = (32.00,36.73,41.51,46.35,51.24,56.18,61.17,66.21,71.31,76.46,81.66,86.91,92.21,97.57,102.98,108.44,113.95,119.51,125.13,130.80,141.80,152.90,164.10,175.40,186.80,198.30,209.90,221.60,233.40,245.30,257.30,269.40,281.60,293.90,306.30,318.80,331.40,344.10,356.90,369.80,386.44,403.20,420.10,437.12,454.28,471.56,488.96,506.50,524.16,541.96,559.88,577.92,596.10,614.40,632.84,651.40,670.08,688.90,707.84,726.92,746.12,765.44,784.90,804.48,824.20,844.04,864.00,884.10,904.32,924.68,945.16,965.76,986.50,1007.36,1028.36,1049.48,1070.72,1092.10,1113.60,1135.24);
  Haw : array [1..80] of Extended = (56.00,64.28,72.65,81.11,89.67,98.31,107.05,115.87,124.79,133.80,142.90,152.09,161.37,170.75,180.21,189.77,199.41,209.15,218.98,228.90,248.15,267.57,287.17,306.95,326.90,347.02,367.32,387.80,408.45,429.27,450.27,471.45,492.80,514.32,536.02,557.90,579.95,602.17,624.57,647.15,678.09,709.26,740.68,772.33,804.23,836.36,868.72,901.33,934.17,967.26,1000.58,1034.13,1067.93,1101.96,1136.24,1170.75,1205.49,1240.48,1275.70,1311.17,1346.87,1382.80,1418.98,1455.39,1492.05,1528.94,1566.06,1603.43,1641.03,1678.88,1716.96,1755.27,1793.83,1832.62,1871.66,1910.93,1950.43,1990.18,2030.16,2070.39);
var
  BaseCP,B,WB,Boost,AB : Extended;
  n,p,i : Integer;
begin
  BaseCP := 0;
  n := Lvl;
  p := ComboBox1.ItemIndex;
  case p of
    0 : BaseCP := AbW[n];
    1 : BaseCP := Art[n];
    2 : BaseCP := Ass[n];
    3 : BaseCP := Bis[n];
    4 : BaseCP := BlD[n];
    5 : BaseCP := Bou[n];
    6 : BaseCP := Cle[n];
    7 : BaseCP := Pal[n];
    8 : BaseCP := DFi[n];
    9 : BaseCP := DMy[n];
    10: BaseCP := DWi[n];
    11: BaseCP := Des[n];
    12: BaseCP := DwF[n];
    13: BaseCP := ElS[n];
    14: BaseCP := ElE[n];
    15: BaseCP := EFi[n];
    16: BaseCP := EKn[n];
    17: BaseCP := EMy[n];
    18: BaseCP := EOr[n];
    19: BaseCP := ESc[n];
    20: BaseCP := EWi[n];
    21: BaseCP := Gla[n];
    22: BaseCP := Haw[n];
    23: BaseCP := HFi[n];
    24: BaseCP := HKn[n];
    25: BaseCP := HMy[n];
    26: BaseCP := OMo[n];
    27: BaseCP := Sor[n];
    28: BaseCP := OrF[n];
    29: BaseCP := OMy[n];
    30: BaseCP := OrR[n];
    31: BaseCP := OSh[n];
    32: BaseCP := Ove[n];
    33: BaseCP := Pal[n];
    34: BaseCP := PaK[n];
    35: BaseCP := PhR[n];
    36: BaseCP := PhS[n];
    37: BaseCP := PlW[n];
    38: BaseCP := Pro[n];
    39: BaseCP := Rog[n];
    40: BaseCP := Sca[n];
    41: BaseCP := ShE[n];
    42: BaseCP := ShK[n];
    43: BaseCP := ShO[n];
    44: BaseCP := Sil[n];
    45: BaseCP := Sor[n];
    46: BaseCP := SpH[n];
    47: BaseCP := SpS[n];
    48: BaseCP := SwS[n];
    49: BaseCP := TKn[n];
    50: BaseCP := TrH[n];
    51: BaseCP := Tyr[n];
    52: BaseCP := Wrc[n];
    53: BaseCP := Wrl[n];
    54: BaseCP := War[n];
    55: BaseCP := HWa[n];
    56: BaseCP := Wrs[n];
    57: BaseCP := HWi[n];
  end;
  case CON + tCON + Set_CON + Aug_CON of
    1 : _Con := 0.46;
    2 : _Con := 0.47;
    3 : _Con := 0.48;
    4 : _Con := 0.50;
    5 : _Con := 0.51;
    6 : _Con := 0.53;
    7 : _Con := 0.54;
    8 : _Con := 0.56;
    9 : _Con := 0.58;
    10: _Con := 0.59;
    11: _Con := 0.61;
    12: _Con := 0.63;
    13: _Con := 0.65;
    14: _Con := 0.67;
    15: _Con := 0.69;
    16: _Con := 0.71;
    17: _Con := 0.73;
    18: _Con := 0.75;
    19: _Con := 0.77;
    20: _Con := 0.80;
    21: _Con := 0.82;
    22: _Con := 0.85;
    23: _Con := 0.87;
    24: _Con := 0.90;
    25: _Con := 0.93;
    26: _Con := 0.95;
    27: _Con := 0.98;
    28: _Con := 1.01;
    29: _Con := 1.04;
    30: _Con := 1.07;
    31: _Con := 1.10;
    32: _Con := 1.14;
    33: _Con := 1.17;
    34: _Con := 1.21;
    35: _Con := 1.24;
    36: _Con := 1.28;
    37: _Con := 1.32;
    38: _Con := 1.36;
    39: _Con := 1.40;
    40: _Con := 1.44;
    41: _Con := 1.48;
    42: _Con := 1.53;
    43: _Con := 1.58;
    44: _Con := 1.62;
    45: _Con := 1.67;
    46: _Con := 1.72;
    47: _Con := 1.77;
    48: _Con := 1.83;
    49: _Con := 1.88;
    50: _Con := 1.94;
    51: _Con := 2.00;
    52: _Con := 2.06;
    53: _Con := 2.12;
    54: _Con := 2.18;
    55: _Con := 2.25;
    56: _Con := 2.31;
    57: _Con := 2.38;
    58: _Con := 2.45;
    59: _Con := 2.53;
    60: _Con := 2.60;
  end;
  B := 1;
  Boost := 0;
  WB := 1;
  if WSA.SA = SA_MPHPCP then
    WB := 1.3;
  if WSA.SA in HeroWeapons then
    WB := 1.5;
  AB := 0;
  MaxCP := BaseCP*_Con*B*WB + Boost + AB;
  for i := 1 to 4 do
    if AugCB[i].ItemIndex = 3 then
      MaxCP := MaxCP + Augs[i];
end;

procedure TForm1.CalcMagCrit;
const
  _ : array [1..31] of Extended = (0.40,0.42,0.44,0.46,0.48,0.51,0.53,0.56,0.58,0.61,0.64,0.68,0.72,0.75,0.78,0.82,0.86,0.91,0.95,1.00,1.05,1.10,1.16,1.22,1.28,1.34,1.41,1.48,1.55,1.63,1.71);
var
  _wit_,WMM : Extended;
begin
  _wit_ := 0;
  case WIT + tWIT + Set_WIT of
    1..31 : _wit_ := _[WIT + tWIT + Set_WIT];
  end;
  WMM := 1;
  if IsWildMagic.Checked then
    case WildMagicLvl.ItemIndex of
      0 : WMM := 3;
      1 : WMM := 4;
    end;
  if IsProphecy.Checked then
    if ProphecyLvl.ItemIndex = 2 then
      WMM := WMM*2;
  if J_Valakas then
    WMM := WMM*2;
  if IsSiren.Checked then
    WMM := WMM*3;
  if IsSA and (WSA.SA = SA_Scepter) then
    WMM := WMM*1.54;
  MagCrit := 0.8*_wit_*WMM;
  if MagCrit > 50 then
    MagCrit := 50;
end;

procedure TForm1.IsBlessTBClick(Sender: TObject);
begin
  BlessTBLvl.Enabled := IsBlessTB.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsVitalityClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsBlessTSClick(Sender: TObject);
begin
  BlessTSLvl.Enabled := IsBlessTS.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.CalcShieldDefRate;
var
  SM,B,SB,WB : Extended;
begin
  case DEX + Set_DEX + tDEX of
     1 : _Dex := 0.85;
     2 : _Dex := 0.86;
     3 : _Dex := 0.86;
     4 : _Dex := 0.87;
     5 : _Dex := 0.88;
     6 : _Dex := 0.89;
     7 : _Dex := 0.90;
     8 : _Dex := 0.90;
     9 : _Dex := 0.91;
    10 : _Dex := 0.92;
    11 : _Dex := 0.93;
    12 : _Dex := 0.94;
    13 : _Dex := 0.94;
    14 : _Dex := 0.95;
    15 : _Dex := 0.96;
    16 : _Dex := 0.97;
    17 : _Dex := 0.98;
    18 : _Dex := 0.99;
    19 : _Dex := 1.00;
    20 : _Dex := 1.01;
    21 : _Dex := 1.01;
    22 : _Dex := 1.02;
    23 : _Dex := 1.03;
    24 : _Dex := 1.04;
    25 : _Dex := 1.05;
    26 : _Dex := 1.06;
    27 : _Dex := 1.07;
    28 : _Dex := 1.08;
    29 : _Dex := 1.09;
    30 : _Dex := 1.10;
    31 : _Dex := 1.11;
    32 : _Dex := 1.12;
    33 : _Dex := 1.13;
    34 : _Dex := 1.14;
    35 : _Dex := 1.15;
    36 : _Dex := 1.16;
    37 : _Dex := 1.17;
    38 : _Dex := 1.18;
    39 : _Dex := 1.19;
    40 : _Dex := 1.20;
    41 : _Dex := 1.21;
    42 : _Dex := 1.22;
    43 : _Dex := 1.24;
    44 : _Dex := 1.25;
    45 : _Dex := 1.26;
    46 : _Dex := 1.27;
    47 : _Dex := 1.28;
    48 : _Dex := 1.29;
    49 : _Dex := 1.30;
    50 : _Dex := 1.32;
  end;
  SM := 1;
  if IsShieldMastery.Visible and IsShieldMastery.Checked then
    case ShieldMastery.ItemIndex of
      0 : SM := 1.5;
      1 : SM := 1.7;
      2 : SM := 1.85;
      3 : SM := 2;
    end;
  B := 1;
  if IsBShield.Checked then
    case BShieldLvl.ItemIndex of
      0 : B := B*1.3;
      1 : B := B*1.4;
      2 : B := B*1.5;
      3 : B := B*1.6;
      4 : B := B*1.7;
      5 : B := B*1.8;
    end;
  if IsGuardStance.Visible and IsGuardStance.Checked then
    B := B*1.5;
  SB := 1;
  if CurS = Ava_Heavy_WS then
    SB := 1.24;
  if CurS = DC_Heavy_WS then
    SB := 1.18;
  if CurS = Doom_Heavy_WS then
    SB := 1.24;
  if CurS = FullPlate_WS then
    SB := 1.0526;
  WB := 1;
  if IsSA then
    if WSA.SA = SA_Axe then
      WB := 1.39;
  ShDefRate := 20*_Dex*SM*B*SB*WB;    
end;

procedure TForm1.WildMagicLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsWildMagicClick(Sender: TObject);
begin
  WildMagicLvl.Enabled := IsWildMagic.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsSirenClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsBShieldClick(Sender: TObject);
begin
  BShieldLvl.Enabled := IsBShield.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.BShieldLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsWhisperClick(Sender: TObject);
begin
  WhisperLvl.Enabled := IsWhisper.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.WhisperLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsFireClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsVampireClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.VampLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsVampClick(Sender: TObject);
begin
  VampLvl.Enabled := IsVamp.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsAdvBlockClick(Sender: TObject);
begin
  AdvBlockLvl.Enabled := IsAdvBlock.Checked; 
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.AdvBlockLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.SkinLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsSkinClick(Sender: TObject);
begin
  SkinLvl.Enabled := IsSkin.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsVengClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsLifeClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsMeditClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsRegenClick(Sender: TObject);
begin
  RegenLvl.Enabled := IsRegen.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.RegenLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsSeraphClick(Sender: TObject);
begin
  SeraphLvl.Enabled := IsSeraph.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.CalcHits;
var
  BowDelay : Extended;
begin
  if (WType <> BowFast) and (WType <> BowSlow) then
    begin
      HPS := 60*AtkS/500;
      Exit
    end;
  BowDelay := 1500;
  if IsSA and (WSA.SA = SA_Bow) then
    BowDelay := BowDelay*0.932;
  if WType = BowSlow then
    BowDelay := BowDelay*0.5466;
  if WType = BowFast then
    begin
      if IsSA and (WSA.SA = SA_QRecovery) then
        HPS := 60*(AtkS/1000)*(1500/(BowDelay*WSA.Power))
      else
        HPS := 60*(AtkS/1000)*(1500/BowDelay)
    end;
  if WType = BowSlow then
    begin
      if IsSA and (WSA.SA = SA_QRecovery) then
        HPS := 60*(AtkS/1000)*(1500/(BowDelay*WSA.Power))
      else
        HPS := 60*(AtkS/1000)*(1500/(BowDelay*1.4166))
    end;
end;

procedure TForm1.CalcHPRegen;
var
  BaseHPRegen,LM,B1,B2,MM,Add1 : Extended;
begin
  if Lvl < 11 then
    BaseHPRegen := 1.95 + (Lvl/20)
  else
    BaseHPRegen := 1.4 + (Lvl/10);
  case CON + tCON + Set_CON + Aug_CON of
    1 : _Con := 0.46;
    2 : _Con := 0.47;
    3 : _Con := 0.48;
    4 : _Con := 0.50;
    5 : _Con := 0.51;
    6 : _Con := 0.53;
    7 : _Con := 0.54;
    8 : _Con := 0.56;
    9 : _Con := 0.58;
    10: _Con := 0.59;
    11: _Con := 0.61;
    12: _Con := 0.63;
    13: _Con := 0.65;
    14: _Con := 0.67;
    15: _Con := 0.69;
    16: _Con := 0.71;
    17: _Con := 0.73;
    18: _Con := 0.75;
    19: _Con := 0.77;
    20: _Con := 0.80;
    21: _Con := 0.82;
    22: _Con := 0.85;
    23: _Con := 0.87;
    24: _Con := 0.90;
    25: _Con := 0.93;
    26: _Con := 0.95;
    27: _Con := 0.98;
    28: _Con := 1.01;
    29: _Con := 1.04;
    30: _Con := 1.07;
    31: _Con := 1.10;
    32: _Con := 1.14;
    33: _Con := 1.17;
    34: _Con := 1.21;
    35: _Con := 1.24;
    36: _Con := 1.28;
    37: _Con := 1.32;
    38: _Con := 1.36;
    39: _Con := 1.40;
    40: _Con := 1.44;
    41: _Con := 1.48;
    42: _Con := 1.53;
    43: _Con := 1.58;
    44: _Con := 1.62;
    45: _Con := 1.67;
    46: _Con := 1.72;
    47: _Con := 1.77;
    48: _Con := 1.83;
    49: _Con := 1.88;
    50: _Con := 1.94;
    51: _Con := 2.00;
    52: _Con := 2.06;
    53: _Con := 2.12;
    54: _Con := 2.18;
    55: _Con := 2.25;
    56: _Con := 2.31;
    57: _Con := 2.38;
    58: _Con := 2.45;
    59: _Con := 2.53;
    60: _Con := 2.60;
  end;
  LM := (Lvl + 89)/100;
  B1 := 1;
  if CurS = BW_Heavy then
    B1 := B1*1.0524;
  if IsProphecy.Checked and (ProphecyLvl.ItemIndex = 1) then
    B1 := B1*1.2;
  if IsRegen.Checked then
    case RegenLvl.ItemIndex of
      0 : B1 := B1*1.1;
      1 : B1 := B1*1.15;
      2 : B1 := B1*1.2;
    end;
  if IsLife.Checked then
    B1 := B1*1.2;
  MM := 0;
  case MovementMode.ItemIndex of
    0 : MM := 1.1;
    1 : MM := 1.5;
    2 : MM := 0.7;
    3 : MM := 1;
  end;
  Add1 := 0;
  if IsSA and (WSA.SA = SA_HPRegen) then
    Add1 := Add1 + 2.04*MM;
  if MM = 0.7 then
    if IsEsprit.Visible and IsEsprit.Checked then
      case Esprit.ItemIndex of
        0 : Add1 := Add1 + 2.5;
        1 : Add1 := Add1 + 3;
        2 : Add1 := Add1 + 3.5;
        3 : Add1 := Add1 + 4;
        4 : Add1 := Add1 + 4.5;
        5 : Add1 := Add1 + 5;
        6 : Add1 := Add1 + 5.5;
        7 : Add1 := Add1 + 6;
      end;
  if IsFastHPRecovery.Visible and IsFastHPRecovery.Checked then
    case FastHPRecovery.ItemIndex of
      0 : Add1 := Add1 + MM*1.1;
      1 : Add1 := Add1 + MM*1.6;
      2 : Add1 := Add1 + MM*1.7;
      3 : Add1 := Add1 + MM*2.1;
      4 : Add1 := Add1 + MM*2.6;
      5 : Add1 := Add1 + MM*2.7;
      6 : Add1 := Add1 + MM*3.4;
      7 : Add1 := Add1 + MM*4;
    end;
  if MM = 1.5 then
    if IsVitalForce.Visible and IsVitalForce.Checked then
      case VitalForce.ItemIndex of
        0 : Add1 := Add1 + _Con*1.9;
        1 : Add1 := Add1 + _Con*2.7;
        2 : Add1 := Add1 + _Con*2.9;
        3 : Add1 := Add1 + _Con*3.6;
        4 : Add1 := Add1 + _Con*4.5;
        5 : Add1 := Add1 + _Con*4.7;
        6 : Add1 := Add1 + _Con*5.6;
        7 : Add1 := Add1 + _Con*6.7;
      end;
  B2 := 1;
//  if seal of scourge then b2 := 0;
  HPRegen := (BaseHPRegen*_Con*LM*B1*MM + Add1)*B2;
end;

procedure TForm1.MovementModeChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.CalcMPRegen;
var
  BaseMPRegen,LM,B1,B2,Add1,Add2,MM : Extended;
begin
  case Lvl of
     1..10 : BaseMPRegen := 0.9;
    11..20 : BaseMPRegen := 1.2;
    21..30 : BaseMPRegen := 1.5;
    31..40 : BaseMPRegen := 1.8;
    41..50 : BaseMPRegen := 2.1;
    51..60 : BaseMPRegen := 2.4;
    61..70 : BaseMPRegen := 2.7;
    71..80 : BaseMPRegen := 3;
  else
    BaseMPRegen := 0.9 + ((Lvl - 1) div 10)*0.3;
  end;
  case MEN + Set_MEN + tMEN of
     1 : _Men := 1.01;
     2 : _Men := 1.02;
     3 : _Men := 1.03;
     4 : _Men := 1.04;
     5 : _Men := 1.05;
     6 : _Men := 1.06;
     7 : _Men := 1.07;
     8 : _Men := 1.08;
     9 : _Men := 1.09;
    10 : _Men := 1.11;
    11 : _Men := 1.12;
    12 : _Men := 1.13;
    13 : _Men := 1.14;
    14 : _Men := 1.15;
    15 : _Men := 1.16;
    16 : _Men := 1.17;
    17 : _Men := 1.19;
    18 : _Men := 1.20;
    19 : _Men := 1.21;
    20 : _Men := 1.22;
    21 : _Men := 1.23;
    22 : _Men := 1.25;
    23 : _Men := 1.26;
    24 : _Men := 1.27;
    25 : _Men := 1.28;
    26 : _Men := 1.30;
    27 : _Men := 1.31;
    28 : _Men := 1.32;
    29 : _Men := 1.34;
    30 : _Men := 1.35;
    31 : _Men := 1.36;
    32 : _Men := 1.38;
    33 : _Men := 1.39;
    34 : _Men := 1.40;
    35 : _Men := 1.42;
    36 : _Men := 1.43;
    37 : _Men := 1.45;
    38 : _Men := 1.46;
    39 : _Men := 1.48;
    40 : _Men := 1.49;
    41 : _Men := 1.50;
    42 : _Men := 1.52;
    43 : _Men := 1.53;
    44 : _Men := 1.55;
    45 : _Men := 1.57;
    46 : _Men := 1.58;
    47 : _Men := 1.60;
    48 : _Men := 1.61;
    49 : _Men := 1.63;
    50 : _Men := 1.65;
  end;
  LM := (Lvl + 89)/100;
  B1 := 1;
  if (CurS = BW_Robe) or (CurS = Doom_Robe) then
    B1 := B1*1.0524;
  if CurS = Doom_Light then
    B1 := B1*1.025;
  if (CurS = Knowledge) or (CurS = Zub_Rob) then
    B1 := B1*0.95;
  if (CurS = Maj_Rob) or (CurS = Tal_Light) then
    B1 := B1*1.08;
  if CurS = Night_Robe then
    B1 := B1*1.04;
  if IsSeraph.Checked then
    case SeraphLvl.ItemIndex of
      0 : B1 := B1*1.3;
      1 : B1 := B1*1.32;
      2 : B1 := B1*1.35;
    end;
  if IsProphecy.Checked and (ProphecyLvl.ItemIndex = 2) then
    B1 := B1*1.2;
  if IsMedit.Checked then
    B1 := B1*1.2;
  if (((BodyU = Robe) and (BodyL = Robe)) or (BodyU = RFull)) and (Mystic or Buffer) then
    B1 := B1*1.2;
  if (((BodyU = Light) and (BodyL = Light)) or (BodyU = LFull)) and (OrcMystic or Buffer or Summoner) and IsLgArmorMastery.Visible and IsLgArmorMastery.Checked then
    B1 := B1*1.2;
  MM := 0;
  case MovementMode.ItemIndex of
    0 : MM := 1.1;
    1 : MM := 1.5;
    2 : MM := 0.7;
    3 : MM := 1;
  end;
  Add1 := 0;
  if IsSA and (WSA.SA = SA_MPRegen) then
    Add1 := Add1 + MM*0.54;
//  if +6 heavy armor bonus then Add1=Add1+(2*mm)
  if IsClearMind.Visible and IsClearMind.Checked then
    begin
      if MM = 1.1 then
        case ClearMind.ItemIndex of
          0 : Add1 := Add1 + 2.6;
          1 : Add1 := Add1 + 3.2;
          2 : Add1 := Add1 + 3.5;
          3 : Add1 := Add1 + 4.1;
          4 : Add1 := Add1 + 4.7;
          5 : Add1 := Add1 + 4.9;
        end;
      if MM = 1 then
        case ClearMind.ItemIndex of
          0 : Add1 := Add1 + 3.2;
          1 : Add1 := Add1 + 4;
          2 : Add1 := Add1 + 4.3;
          3 : Add1 := Add1 + 5.1;
          4 : Add1 := Add1 + 5.8;
          5 : Add1 := Add1 + 6.2;
        end;
    end;
  if IsEsprit.Checked and IsEsprit.Visible and (MM = 0.7) then
    case Esprit.ItemIndex of
      0 : Add1 := Add1 + 0.8;
      1 : Add1 := Add1 + 0.9;
      2 : Add1 := Add1 + 1;
      3 : Add1 := Add1 + 1.1;
      4 : Add1 := Add1 + 1.2;
      5 : Add1 := Add1 + 1.3;
      6 : Add1 := Add1 + 1.4;
      7 : Add1 := Add1 + 1.5;
    end;
  if IsFastManaRecovery.Visible and IsFastManaRecovery.Checked then
    case FastManaRecovery.ItemIndex of
      0 : Add1 := Add1 + MM*1.1;
      1 : Add1 := Add1 + MM*1.5;
      2 : Add1 := Add1 + MM*1.9;
      3 : Add1 := Add1 + MM*2.3;
      4 : Add1 := Add1 + MM*2.7;
      5 : Add1 := Add1 + MM*3.1;
      6 : Add1 := Add1 + MM*3.4;
    end;
  if IsFocusMind.Checked and IsFocusMind.Visible then
    case FocusMind.ItemIndex of
      0 : Add1 := Add1 + MM*1.1;
      1 : Add1 := Add1 + MM*1.5;
      2 : Add1 := Add1 + MM*1.9;
      3 : Add1 := Add1 + MM*2.3;
      4 : Add1 := Add1 + MM*2.7;
      5 : Add1 := Add1 + MM*3.1;
    end;
  if (MM = 1.5) and IsVitalForce.Visible and IsVitalForce.Checked then
    case VitalForce.ItemIndex of
      0 : Add1 := Add1 + 0.9;
      1 : Add1 := Add1 + 1.1;
      2 : Add1 := Add1 + 1.2;
      3 : Add1 := Add1 + 1.5;
      4 : Add1 := Add1 + 1.7;
      5 : Add1 := Add1 + 1.8;
      6 : Add1 := Add1 + 2.1;
      7 : Add1 := Add1 + 2.5;
    end;
  if IsManaRegeneration.Visible and IsManaRegeneration.Checked then
    case ManaRegeneration.ItemIndex of
      0 : Add1 := Add1 + 1.72;
      1 : Add1 := Add1 + 2.16;
      2 : Add1 := Add1 + 2.74;
      3 : Add1 := Add1 + 3.09;
    end;
  Add2 := 0; // vortexes
  B2 := 1;
  MPRegen := (BaseMPRegen*_Men*LM*B1*MM + Add1)*B2 + Add2;
end;

procedure TForm1.CalcCPRegen;
var
  BaseCPRegen,LM,MM,B,Add : Extended;
  i : Integer;
begin
  case Lvl of
     1..10 : BaseCPRegen := 2;
    11..20 : BaseCPRegen := 2.5;
    21..30 : BaseCPRegen := 3.5;
    31..40 : BaseCPRegen := 4.5;
    41..50 : BaseCPRegen := 5.5;
    51..60 : BaseCPRegen := 6.5;
    61..70 : BaseCPRegen := 7.5;
    71..80 : BaseCPRegen := 8.5;
  else
    BaseCPRegen := 2.5 + (Lvl - 11) div 10  
  end;
  case CON + tCON + Set_CON + Aug_CON of
    1 : _Con := 0.46;
    2 : _Con := 0.47;
    3 : _Con := 0.48;
    4 : _Con := 0.50;
    5 : _Con := 0.51;
    6 : _Con := 0.53;
    7 : _Con := 0.54;
    8 : _Con := 0.56;
    9 : _Con := 0.58;
    10: _Con := 0.59;
    11: _Con := 0.61;
    12: _Con := 0.63;
    13: _Con := 0.65;
    14: _Con := 0.67;
    15: _Con := 0.69;
    16: _Con := 0.71;
    17: _Con := 0.73;
    18: _Con := 0.75;
    19: _Con := 0.77;
    20: _Con := 0.80;
    21: _Con := 0.82;
    22: _Con := 0.85;
    23: _Con := 0.87;
    24: _Con := 0.90;
    25: _Con := 0.93;
    26: _Con := 0.95;
    27: _Con := 0.98;
    28: _Con := 1.01;
    29: _Con := 1.04;
    30: _Con := 1.07;
    31: _Con := 1.10;
    32: _Con := 1.14;
    33: _Con := 1.17;
    34: _Con := 1.21;
    35: _Con := 1.24;
    36: _Con := 1.28;
    37: _Con := 1.32;
    38: _Con := 1.36;
    39: _Con := 1.40;
    40: _Con := 1.44;
    41: _Con := 1.48;
    42: _Con := 1.53;
    43: _Con := 1.58;
    44: _Con := 1.62;
    45: _Con := 1.67;
    46: _Con := 1.72;
    47: _Con := 1.77;
    48: _Con := 1.83;
    49: _Con := 1.88;
    50: _Con := 1.94;
    51: _Con := 2.00;
    52: _Con := 2.06;
    53: _Con := 2.12;
    54: _Con := 2.18;
    55: _Con := 2.25;
    56: _Con := 2.31;
    57: _Con := 2.38;
    58: _Con := 2.45;
    59: _Con := 2.53;
    60: _Con := 2.60;
  end;
  LM := (Lvl + 89)/100;
  MM := 0;
  case MovementMode.ItemIndex of
    0 : MM := 1.1;
    1 : MM := 1.5;
    2 : MM := 0.7;
    3 : MM := 1;
  end;
  B := 1;
  Add := 0;
  CPRegen := BaseCPRegen*_Con*LM*B*MM + Add;
  for i := 1 to 4 do
    if AugCB[i].ItemIndex = 4 then
      CPRegen := CPRegen + Augs[i];
end;

procedure TForm1.CalcMDPS;
begin
  MDPS := CS*Sqrt(MA)*(1 + 3*MagCrit/100);
end;

procedure TForm1.LifonClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ComboBox108Change(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ClearSelfBuffs;
begin
  IsSoulOfSaggitarius.Visible := False;
  SoulOfSaggitarius.Visible := False;
  IsAttackAura.Visible := False;
  AttackAura.Visible := False;
  IsFrenzy.Visible := False;
  Frenzy.Visible := False;
  IsSoulCry.Visible := False;
  SoulCry.Visible := False;
  IsRage.Visible := False;
  Rage.Visible := False;
  IsWarCry.Visible := False;
  WarCry.Visible := False;
  IsViciousStance.Visible := False;
  ViciousStance.Visible := False;
  IsArcanePower.Visible := False;
  IsDefenceAura.Visible := False;
  DefenceAura.Visible := False;
  IsMajesty.Visible := False;
  Majesty.Visible := False;
  IsGuardStance.Visible := False;
  GuardStance.Visible := False;
  IsSoulGuard.Visible := False;
  SoulGuard.Visible := False;
  IsGuts.Visible := False;
  Guts.Visible := False;
  IsSpiritBarrier.Visible := False;
  IsHawkeye.Visible := False;
  Hawkeye.Visible := False;
  IsAccuracy.Visible := False;
  IsPolearmAccuracy.Visible := False;
  PolearmAccuracy.Visible := False;
  IsUltEvasion.Visible := False;
  UltEvasion.Visible := False;
  IsSpiritBarrier.Visible := False;
  SpiritBarrier.Visible := False;
  IsEvasionShot.Visible := False;
  EvasionShot.Visible := False;
  IsBindingBlow.Visible := False;
  BindingBlow.Visible := False;
  IsDash.Visible := False;
  Dash.Visible := False;
  IsSilentMove.Visible := False;
  RapidShot.Visible := False;
  IsRapidShot.Visible := False;
  DuelistSpirit.Visible := False;
  IsDuelistSpirit.Visible := False;
  IsFistFury.Visible := False;
  IsThrillFight.Visible := False;
  ThrillFight.Visible := False;
  IsArcaneAgility.Visible := False;
  IsArcaneWisdom.Visible := False;
  IsShieldFortress.Visible := False;
  ShieldFortress.Visible := False;
  IsAegisStance.Visible := False;
  IsManaRegeneration.Visible := False;
  ManaRegeneration.Visible := False;
  IsReflectDamage.Visible := False;
  ReflectDamage.Visible := False;
  IsDeflectArrow.Visible := False;
  DeflectArrow.Visible := False;
  IsDeadEye.Visible := False;
  DeadEye.Visible := False;
  IsZealot.Visible := False;
  Zealot.Visible := False;
  IsParryStance.Visible := False;
  IsRiposteStance.Visible := False;
  IsAngelicIcon.Visible := False;
  IsSnipe.Visible := False;
  Snipe.Visible := False;
  IsInvocation.Visible := False;
  Invocation.Visible := False;
  IsTotem.Visible := False;
  Totem.Visible := False;
  IsFocusDagger.Visible := False;
  FocusDagger.Visible := False;
  IsUltDefense.Visible := False;
  UltDefense.Visible := False;
  IsFocusAttack.Visible := False;
  FocusAttack.Visible := False;
  IsAngelicIcon.Visible := False;
  AngelicIcon.Visible := False;
  IsRapidFire.Visible := False;
  RapidFire.Visible := False;
  IsSprint.Visible := False;
  Sprint.Visible := False;
end;

procedure TForm1.ShowSelfBuffs;
begin
  if ComboBox1.ItemIndex = 0 then // abyss walker
    begin
      SDefenceAura(2);
      SAttackAura(2);
      SBindingBlow;
      SFocusDagger(2);
      SAccuracy;
      SSilentMove;
      SViciousStance(20);
      SUltEvasion(2);
      SRapidShot(1);
    end;
  if ComboBox1.ItemIndex = 1 then // artisan
    begin
    end;
  if ComboBox1.ItemIndex = 2 then //  assassin
    begin
      SDefenceAura(2);
      SAttackAura(2);
      SAccuracy;
    end;
  if ComboBox1.ItemIndex = 3 then //  bishop
    begin
      SArcaneWisdom;
    end;
  if ComboBox1.ItemIndex = 4 then // bladedancer
    begin
      SAttackAura(2);
      SDefenceAura(2);
      SDeflectArrow(2);
      SUltDefence(1);
    end;
  if ComboBox1.ItemIndex = 5 then // bounty hunter
    begin
      SParryStance;
      SRiposteStance;
      SPolearmAccuracy;
    end;
  if ComboBox1.ItemIndex = 6 then // cleric
    begin
    end;
  if ComboBox1.ItemIndex = 7 then // dark avenger
    begin
      SMajesty(3);
      SReflectDamage;
    end;
  if ComboBox1.ItemIndex = 8 then //     dark fighter
    begin
      SDefenceAura(1);
      SAttackAura(1);
    end;
  if ComboBox1.ItemIndex = 9 then // Dark Elven Mystic
    begin
    end;
  if ComboBox1.ItemIndex = 10 then // dark wizard
    begin
    end;
  if ComboBox1.ItemIndex = 11 then //  destroyer
    begin
      SFrenzy(3);
      SGuts(3);
      SRage(2);
      SZealot;
    end;
  if ComboBox1.ItemIndex = 12 then //    dwarven fighter
    begin
    end;
  if ComboBox1.ItemIndex = 13 then //    es
    begin
      SArcaneAgility;
    end;
  if ComboBox1.ItemIndex = 14 then //  ee
    begin
      SArcaneWisdom;
    end;
  if ComboBox1.ItemIndex = 15 then //  elven fighter
    begin
      SDefenceAura(1);
      SAttackAura(1);
    end;
  if ComboBox1.ItemIndex = 16 then //  elven knight
    begin
      SDefenceAura(2);
      SDeflectArrow(2);
      SAttackAura(2);
      SSprint(1);
    end;
  if ComboBox1.ItemIndex = 17 then //Elven Mystic
    begin
    end;
  if ComboBox1.ItemIndex = 18 then //  elven oracle
    begin
    end;
  if ComboBox1.ItemIndex = 19 then //  elven scout
    begin
      SSprint(1);
      SAccuracy;
      SDefenceAura(2);
      SAttackAura(2);
      SViciousStance(5);
    end;
  if ComboBox1.ItemIndex = 20 then //    elven wizard
    begin
    end;
  if ComboBox1.ItemIndex = 21 then //  gladiator
    begin
      SWarCry(2);
      SDuelistSpirit;
      SAccuracy;
      SRiposteStance;
      SViciousStance(20);
    end;
  if ComboBox1.ItemIndex = 22 then // hawk
    begin
      SSoulOfSagittarius;
      SDash(1);
      SUltEvasion(1);
      SRapidShot(2);
      SSnipe;
      SAccuracy;
      SViciousStance(20);
    end;
  if ComboBox1.ItemIndex = 23 then //Human Fighter
    begin
    end;
  if ComboBox1.ItemIndex = 24 then // human knight
    begin
    end;
  if ComboBox1.ItemIndex = 25 then //Human Mystic
    begin
    end;
  if ComboBox1.ItemIndex = 26 then // monk
    begin
      STotem(2);
    end;
  if ComboBox1.ItemIndex = 27 then // necr
    begin
      SArcanePower;
    end;
  if ComboBox1.ItemIndex = 28 then //   orc fighter
    begin
    end;
  if ComboBox1.ItemIndex = 29 then //  orc mystic
    begin
    end;
  if ComboBox1.ItemIndex = 30 then //  orc raider
    begin
      SFrenzy(1);
      SGuts(1);
      SViciousStance(5);
    end;
  if ComboBox1.ItemIndex = 31 then //   orc shaman
    begin
      SSoulCry(4);
    end;
  if ComboBox1.ItemIndex = 32 then // overlord
    begin
      SSoulCry(10);
      SArcanePower;
      SSoulGuard(13);
    end;
  if ComboBox1.ItemIndex = 33 then //   paladin
    begin
      SMajesty(3);
      SUltDefence(2);
      SAngelicIcon;
      SAegisStance;
      SShieldFortress;
      SDeflectArrow(4);
    end;
  if ComboBox1.ItemIndex = 34 then //  palus knight
    begin
      SUltDefence(1);
      SDeflectArrow(2); 
    end;
  if ComboBox1.ItemIndex = 35 then //  phantom ranger
    begin
      SUltEvasion(1);
      SEvasionShot;
      SRapidShot(2);
      SDeadEye;
      SAccuracy;
      SViciousStance(20);
    end;
  if ComboBox1.ItemIndex = 36 then // phantom summoner
    begin
      SArcaneAgility;
    end;
  if ComboBox1.ItemIndex = 37 then //  plainswalker
    begin
      SAttackAura(2);
      SDefenceAura(2);
      SUltEvasion(2);
      SBindingBlow;
      SFocusDagger(3);
      SSprint(2);
      SAccuracy;
      SSilentMove;
      SViciousStance(20);
      SRapidShot(1);
      SSpiritBarrier;
    end;
  if ComboBox1.ItemIndex = 38 then //   prophet
    begin
      SArcaneWisdom;
    end;
  if ComboBox1.ItemIndex = 39 then //   rogue
    begin
      SAccuracy;
      SViciousStance(5);
    end;
  if ComboBox1.ItemIndex = 40 then // scavenger
    begin
    end;
  if ComboBox1.ItemIndex = 41 then // se
    begin
      SArcaneWisdom;
    end;
  if ComboBox1.ItemIndex = 42 then //   sk
    begin
      SAttackAura(2);
      SDefenceAura(2);
      SDeflectArrow(4);
      SUltDefence(2);
      SShieldFortress;
      SGuardStance(4);
    end;
  if ComboBox1.ItemIndex = 43 then //   shillien oracle
    begin
    end;
  if ComboBox1.ItemIndex = 44 then //  silver ranger
    begin
      SAttackAura(2);
      SDefenceAura(2);
      SUltEvasion(1);
      SSprint(2);
      SAccuracy;
      SViciousStance(20);
      SRapidShot(2);
      SEvasionShot;
      SRapidFire;
      SSpiritBarrier;
      SSoulOfSagittarius;
    end;
  if ComboBox1.ItemIndex = 45 then //   sorcerer
    begin
      SArcanePower;
    end;
  if ComboBox1.ItemIndex = 46 then // spellhowler
    begin
      SArcanePower;
    end;
  if ComboBox1.ItemIndex = 47 then // spelsingir
    begin
      SArcanePower;
    end;
  if ComboBox1.ItemIndex = 48 then //  sws
    begin
      SAttackAura(2);
      SDefenceAura(2);
      SDeflectArrow(2);
      SSprint(2);
      SSpiritBarrier;
      SUltDefence(1);
    end;
  if ComboBox1.ItemIndex = 49 then //  temple knight
    begin
      SAttackAura(2);
      SDefenceAura(2);
      SDeflectArrow(4);
      SSprint(2);
      SSpiritBarrier;
      SUltDefence(2);
      SGuardStance(4);
      SShieldFortress;
    end;
  if ComboBox1.ItemIndex = 50 then //   th
    begin
      SDash(2);
      SUltEvasion(2);
      SRapidShot(1);
      SFocusDagger(1);
      SAccuracy;
      SSilentMove;
      SViciousStance(20);
    end;
  if ComboBox1.ItemIndex = 51 then //  tyrant
    begin
      STotem(7);
      SZealot;
      SFistFury;
      SRiposteStance;
    end;
  if ComboBox1.ItemIndex = 52 then //  warc
    begin
      SArcaneWisdom;
      SSoulCry(10);
    end;
  if ComboBox1.ItemIndex = 53 then //   warlock
    begin
      SArcaneAgility;
    end;
  if ComboBox1.ItemIndex = 54 then // warlord
    begin
      SFocusAttack;
      SParryStance;
      SPolearmAccuracy;
      SViciousStance(20);
      SAccuracy;
      SWarCry(1);
      SThrillFight;
    end;
  if ComboBox1.ItemIndex = 55 then // warrior
    begin
      SAccuracy;
      SViciousStance(5);
    end;
  if ComboBox1.ItemIndex = 56 then //  warsmith
    begin
      SParryStance;
      SRiposteStance;
      SPolearmAccuracy;
    end;
  if ComboBox1.ItemIndex = 57 then //   wizard
    begin
    end;
end;

procedure TForm1.SeraphLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.SSoulOfSagittarius;
begin
  IsSoulOfSaggitarius.Visible := True;
  SoulOfSaggitarius.Visible := True;
end;

procedure TForm1.SAttackAura(Max : Integer);
var
  i : Integer;
begin
  AttackAura.Visible := True;
  IsAttackAura.Visible := True;
  AttackAura.Items.Clear;
  for i := 1 to Max do
    AttackAura.Items.Add('Attack Aura ' + IntToStr(i));
  AttackAura.ItemIndex := 0;  
end;

procedure TForm1.SRage(Max : Integer);
var
  i : Integer;
begin
  Rage.Visible := True;
  IsRage.Visible := True;
  Rage.Items.Clear;
  for i := 1 to Max do
    Rage.Items.Add('Rage ' + IntToStr(i));
  Rage.ItemIndex := 0;
end;

procedure TForm1.SViciousStance(Max : Integer);
var
  i : Integer;
begin
  ViciousStance.Visible := True;
  IsViciousStance.Visible := True;
  ViciousStance.Items.Clear;
  for i := 1 to Max do
    ViciousStance.Items.Add('Vicious Stance ' + IntToStr(i));
  ViciousStance.ItemIndex := 0;
end;

procedure TForm1.SFrenzy(Max : Integer);
var
  i : Integer;
begin
  Frenzy.Visible := True;
  IsFrenzy.Visible := True;
  Frenzy.Items.Clear;
  for i := 1 to Max do
    Frenzy.Items.Add('Frenzy ' + IntToStr(i));
  Frenzy.ItemIndex := 0;
end;

procedure TForm1.SWarCry(Max : Integer);
var
  i : Integer;
begin
  WarCry.Visible := True;
  IsWarCry.Visible := True;
  WarCry.Items.Clear;
  for i := 1 to Max do
    WarCry.Items.Add('War Cry ' + IntToStr(i));
  WarCry.ItemIndex := 0;
end;

procedure TForm1.SSoulCry(Max : Integer);
var
  i : Integer;
begin
  SoulCry.Visible := True;
  IsSoulCry.Visible := True;
  SoulCry.Items.Clear;
  for i := 1 to Max do
    SoulCry.Items.Add('Soul Cry ' + IntToStr(i));
  SoulCry.ItemIndex := 0;
end;

procedure TForm1.SDefenceAura(Max : Integer);
var
  i : Integer;
begin
  DefenceAura.Visible := True;
  IsDefenceAura.Visible := True;
  DefenceAura.Items.Clear;
  for i := 1 to Max do
    DefenceAura.Items.Add('Defence Aura ' + IntToStr(i));
  DefenceAura.ItemIndex := 0;
end;

procedure TForm1.SSoulGuard(Max : Integer);
var
  i : Integer;
begin
  SoulGuard.Visible := True;
  IsSoulGuard.Visible := True;
  SoulGuard.Items.Clear;
  for i := 1 to Max do
    SoulGuard.Items.Add('Soul Guard ' + IntToStr(i));
  SoulGuard.ItemIndex := 0;
end;

procedure TForm1.SMajesty(Max : Integer);
var
  i : Integer;
begin
  Majesty.Visible := True;
  IsMajesty.Visible := True;
  Majesty.Items.Clear;
  for i := 1 to Max do
    Majesty.Items.Add('Majesty ' + IntToStr(i));
  Majesty.ItemIndex := 0;
end;

procedure TForm1.SGuts(Max : Integer);
var
  i : Integer;
begin
  Guts.Visible := True;
  IsGuts.Visible := True;
  Guts.Items.Clear;
  for i := 1 to Max do
    Guts.Items.Add('Guts ' + IntToStr(i));
  Guts.ItemIndex := 0;
end;

procedure TForm1.SGuardStance(Max : Integer);
var
  i : Integer;
begin
  GuardStance.Visible := True;
  IsGuardStance.Visible := True;
  GuardStance.Items.Clear;
  for i := 1 to Max do
    GuardStance.Items.Add('Guard Stance ' + IntToStr(i));
  GuardStance.ItemIndex := 0;
end;

procedure TForm1.SUltEvasion(Max : Integer);
var
  i : Integer;
begin
  UltEvasion.Visible := True;
  IsUltEvasion.Visible := True;
  UltEvasion.Items.Clear;
  for i := 1 to Max do
    UltEvasion.Items.Add('Ultimate Evasion ' + IntToStr(i));
  UltEvasion.ItemIndex := 0;
end;

procedure TForm1.SDash(Max : Integer);
var
  i : Integer;
begin
  Dash.Visible := True;
  IsDash.Visible := True;
  Dash.Items.Clear;
  for i := 1 to Max do
    Dash.Items.Add('Dash ' + IntToStr(i));
  Dash.ItemIndex := 0;
end;

procedure TForm1.SRapidShot(Max : Integer);
var
  i : Integer;
begin
  RapidShot.Visible := True;
  IsRapidShot.Visible := True;
  RapidShot.Items.Clear;
  for i := 1 to Max do
    RapidShot.Items.Add('Rapid Shot ' + IntToStr(i));
  RapidShot.ItemIndex := 0;
end;

procedure TForm1.SDeflectArrow(Max : Integer);
var
  i : Integer;
begin
  DeflectArrow.Visible := True;
  IsDeflectArrow.Visible := True;
  DeflectArrow.Items.Clear;
  for i := 1 to Max do
    DeflectArrow.Items.Add('DeflectArrow ' + IntToStr(i));
  DeflectArrow.ItemIndex := 0;
end;

procedure TForm1.STotem(Max : Integer);
var
  i : Integer;
begin
  Totem.Visible := True;
  IsTotem.Visible := True;
  Totem.Items.Clear;
  for i := 1 to Max do
    case i of
      1 : Totem.Items.Add('Wolf Spirit Totem');
      2 : Totem.Items.Add('Bear Spirit Totem');
      3 : Totem.Items.Add('Puma Spirit Totem');
      4 : Totem.Items.Add('Ogre Spirit Totem');
      5 : Totem.Items.Add('Rabbit Spirit Totem');
      6 : Totem.Items.Add('Bison Spirit Totem');
      7 : Totem.Items.Add('Hawk Spirit Totem');
    end;
  Totem.ItemIndex := 0;
end;

procedure TForm1.SFocusDagger(Max : Integer);
begin
  FocusDagger.Visible := True;
  IsFocusDagger.Visible := True;
  FocusDagger.Items.Clear;
  if Max <> 1 then FocusDagger.Items.Add('Focus Death');
  if Max <> 2 then FocusDagger.Items.Add('Focus Chance');
  if Max <> 3 then FocusDagger.Items.Add('Focus Power');
  FocusDagger.ItemIndex := 0;
end;

procedure TForm1.SUltDefence(Max : Integer);
var
  i : Integer;
begin
  UltDefense.Visible := True;
  IsUltDefense.Visible := True;
  UltDefense.Items.Clear;
  for i := 1 to Max do
    UltDefense.Items.Add('Ultimate Defense ' + IntToStr(i));
  if Max = 2 then
    UltDefense.Items.Add('Vengeance');
  UltDefense.ItemIndex := 0;
end;

procedure TForm1.SArcanePower;
begin
  IsArcanePower.Visible := True;
end;

procedure TForm1.SSpiritBarrier;
begin
  SpiritBarrier.Visible := True;
  IsSpiritBarrier.Visible := True;
end;

procedure TForm1.SHawkEye;
begin
  Hawkeye.Visible := True;
  IsHawkeye.Visible := True;
end;

procedure TForm1.SAccuracy;
begin
  IsAccuracy.Visible := True;
end;

procedure TForm1.SPolearmAccuracy;
begin
  IsPolearmAccuracy.Visible := True;
  PolearmAccuracy.Visible := True;
end;

procedure TForm1.SEvasionShot;
begin
  IsEvasionShot.Visible := True;
  EvasionShot.Visible := True;
end;

procedure TForm1.SBindingBlow;
begin
  IsBindingBlow.Visible := True;
  BindingBlow.Visible := True;
end;

procedure TForm1.SSilentMove;
begin
  IsSilentMove.Visible := True;
end;

procedure TForm1.SDuelistSpirit;
begin
  IsDuelistSpirit.Visible := True;
  DuelistSpirit.Visible := True;
end;

procedure TForm1.SThrillFight;
begin
  IsThrillFight.Visible := True;
  ThrillFight.Visible := True;
end;

procedure TForm1.SFistFury;
begin
  IsFistFury.Visible := True;
end;

procedure TForm1.SArcaneAgility;
begin
  IsArcaneAgility.Visible := True;
end;

procedure TForm1.SArcaneWisdom;
begin
  IsArcaneWisdom.Visible := True;
end;

procedure TForm1.SShieldFortress;
begin
  IsShieldFortress.Visible := True;
  ShieldFortress.Visible := True;
end;

procedure TForm1.SAegisStance;
begin
  IsAegisStance.Visible := True;
end;

procedure TForm1.SManaRegeneration;
begin
  IsManaRegeneration.Visible := True;
  ManaRegeneration.Visible := True;
end;

procedure TForm1.SReflectDamage;
begin
  IsReflectDamage.Visible := True;
  ReflectDamage.Visible := True;
end;

procedure TForm1.SDeadEye;
begin
  IsDeadEye.Visible := True;
  DeadEye.Visible := True;
end;

procedure TForm1.SSnipe;
begin
  IsSnipe.Visible := True;
  Snipe.Visible := True;
end;

procedure TForm1.SInvocation;
begin
  IsInvocation.Visible := True;
  Invocation.Visible := True;
end;

procedure TForm1.SAngelicIcon;
begin
  IsAngelicIcon.Visible := True;
  AngelicIcon.Visible := True;
end;

procedure TForm1.SZealot;
begin
  Zealot.Visible := True;
  IsZealot.Visible := True;
end;

procedure TForm1.SFocusAttack;
begin
  IsFocusAttack.Visible := True;
  FocusAttack.Visible := True;
end;

procedure TForm1.SParryStance;
begin
  IsParryStance.Visible := True;
end;

procedure TForm1.SRiposteStance;
begin
  IsRiposteStance.Visible := True;
end;

procedure TForm1.SSprint(Max : Integer);
var
  I : Integer;
begin
  IsSprint.Visible := True;
  Sprint.Visible := True;
  Sprint.Items.Clear;
  for i := 1 to Max do
    Sprint.Items.Add('Sprint ' + IntToStr(i));
  Sprint.ItemIndex := 0;
end;

procedure TForm1.SRapidFire;
begin
  IsRapidFire.Visible := True;
  RapidFire.Visible := True;
end;

procedure TForm1.IsSoulOfSaggitariusClick(Sender: TObject);
begin
  SoulOfSaggitarius.Enabled := IsSoulOfSaggitarius.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.SoulOfSaggitariusChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsAttackAuraClick(Sender: TObject);
begin
  AttackAura.Enabled := IsAttackAura.Checked;
  if IsAttackAura.Checked then
    IsMight.Checked := False;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.AttackAuraChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsFrenzyClick(Sender: TObject);
begin
  Frenzy.Enabled := IsFrenzy.Checked;
  if IsFrenzy.Checked then
    IsGuts.Checked := False;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.FrenzyChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsSoulCryClick(Sender: TObject);
begin
  SoulCry.Enabled := IsSoulCry.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.SoulCryChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsRageClick(Sender: TObject);
begin
  Rage.Enabled := IsRage.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.RageChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsWarCryClick(Sender: TObject);
begin
  WarCry.Enabled := IsWarCry.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.WarCryChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsArcanePowerClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsDefenceAuraClick(Sender: TObject);
begin
  DefenceAura.Enabled := IsDefenceAura.Checked;
  if IsDefenceAura.Checked then
    IsShield.Checked := False;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.DefenceAuraChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.SoulGuardChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsSoulGuardClick(Sender: TObject);
begin
  SoulGuard.Enabled := IsSoulGuard.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsMajestyClick(Sender: TObject);
begin
  Majesty.Enabled := IsMajesty.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.MajestyChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsGutsClick(Sender: TObject);
begin
  Guts.Enabled := IsGuts.Checked;
  if IsGuts.Checked then
    IsFrenzy.Checked := False;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsGuardStanceClick(Sender: TObject);
begin
  GuardStance.Enabled := IsGuardStance.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.GuardStanceChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsSpiritBarrierClick(Sender: TObject);
begin
  SpiritBarrier.Enabled := IsSpiritBarrier.Checked;
  if IsSpiritBarrier.Checked then
    IsBarrier.Checked := False;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.SpiritBarrierChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsHawkeyeClick(Sender: TObject);
begin
  Hawkeye.Enabled := IsHawkeye.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.HawkeyeChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsAccuracyClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsPolearmAccuracyClick(Sender: TObject);
begin
  PolearmAccuracy.Enabled := IsPolearmAccuracy.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsUltEvasionClick(Sender: TObject);
begin
  UltEvasion.Enabled := IsUltEvasion.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.UltEvasionChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsEvasionShotClick(Sender: TObject);
begin
  EvasionShot.Enabled := IsEvasionShot.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsBindingBlowClick(Sender: TObject);
begin
  BindingBlow.Enabled := IsBindingBlow.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsDashClick(Sender: TObject);
begin
  Dash.Enabled := IsDash.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.DashChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsSprintClick(Sender: TObject);
begin
  Sprint.Enabled := IsSprint.Checked;
  if IsSprint.Checked then
    IsWindWalk.Checked := False;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.SprintChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsSilentMoveClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsRapidShotClick(Sender: TObject);
begin
  RapidShot.Enabled := IsRapidShot.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.RapidShotChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsDuelistSpiritClick(Sender: TObject);
begin
  DuelistSpirit.Enabled := IsDuelistSpirit.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.DuelistSpiritChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsThrillFightClick(Sender: TObject);
begin
  ThrillFight.Enabled := IsThrillFight.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ThrillFightChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsFistFuryClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsArcaneAgilityClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsViciousStanceClick(Sender: TObject);
begin
  ViciousStance.Enabled := IsViciousStance.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ViciousStanceChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsArcaneWisdomClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsShieldFortressClick(Sender: TObject);
begin
  ShieldFortress.Enabled := IsShieldFortress.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ShieldFortressChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsAegisStanceClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsManaRegenerationClick(Sender: TObject);
begin
  ManaRegeneration.Enabled := IsManaRegeneration.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ManaRegenerationChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsReflectDamageClick(Sender: TObject);
begin
  ReflectDamage.Enabled := IsReflectDamage.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ReflectDamageChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.CalcCritPAtk;
var
  B1,B2 : Extended;
begin
  B1 := 1;
  if IsWhisper.Checked then
    case WhisperLvl.ItemIndex of
      0 : B1 := B1*1.3;
      1 : B1 := B1*1.325;
      2 : B1 := B1*1.35;
    end;
  if IsFire.Checked then
    B1 := B1*1.35;
  if IsProphecy.Checked then
    if ProphecyLvl.ItemIndex = 0 then
      B1 := B1*1.2;
  if IsBQueen.Checked then
    case BQueenLvl.ItemIndex of
      0 : B1 := B1*1.2;
      1 : B1 := B1*1.22;
      2 : B1 := B1*1.25;
    end;
  if IsDeadEye.Visible and IsDeadEye.Checked then
    B1 := B1*1.2;
  if IsAngelicIcon.Visible and IsAngelicIcon.Checked then
    if (WType = Fist) or (WType = Blunt1) or (WType = Blunt2) then
      case AngelicIcon.ItemIndex of
        0 : B1 := B1*1.33;
        1 : B1 := B1*1.66;
        2 : B1 := B1*2;
      end;
  if J_AntQueen then
    B1 := B1*1.15;
  if J_Baium then
    B1 := B1*1.15;
  B2 := 0;
  if IsSA and (WSA.SA = SA_CritDamage) then
    B2 := B2 + WSA.Power;
  if IsSA and (WSA.SA = SA_Cleaver) then
    B2 := B2 + 504;
  if IsViciousStance.Visible and IsViciousStance.Checked then
    case ViciousStance.ItemIndex of
      0 : B2 := B2 + 35;
      1 : B2 := B2 + 48;
      2 : B2 := B2 + 64;
      3 : B2 := B2 + 84;
      4 : B2 := B2 + 109;
      5 : B2 := B2 + 139;
      6 : B2 := B2 + 166;
      7 : B2 := B2 + 196;
      8 : B2 := B2 + 229;
      9 : B2 := B2 + 266;
      10: B2 := B2 + 306;
      11: B2 := B2 + 349;
      12: B2 := B2 + 379;
      13: B2 := B2 + 410;
      14: B2 := B2 + 443;
      15: B2 := B2 + 475;
      16: B2 := B2 + 509;
      17: B2 := B2 + 542;
      18: B2 := B2 + 576;
      19: B2 := B2 + 609;
      20: B2 := B2 + 615;
      21: B2 := B2 + 620;
      22: B2 := B2 + 626;
      23: B2 := B2 + 631;
      24: B2 := B2 + 637;
      25: B2 := B2 + 642;
      26: B2 := B2 + 648;
      27: B2 := B2 + 653;
      28: B2 := B2 + 659;
      29: B2 := B2 + 664;
      30: B2 := B2 + 670;
      31: B2 := B2 + 675;
      32: B2 := B2 + 681;
//      686,692,697,702,708,713,719,724,730,735,741,746,752,757,763,768,774)
  end;
  if IsCriticalPower.Visible and IsCriticalPower.Checked then
    case CriticalPower.ItemIndex of
      0 : B2 := B2 + 32;
      1 : B2 := B2 + 56;
      2 : B2 := B2 + 93;
      3 : B2 := B2 + 177;
      4 : B2 := B2 + 295;
      5 : B2 := B2 + 384;
    end;
  if IsZealot.Checked and IsZealot.Visible then
    if WType in [Fist,Blunt1,Blunt2] then
      case Zealot.ItemIndex of
        0 : B1 := B1*1.33;
        1 : B1 := B1*1.66;
        2 : B1 := B1*2.00;
      end;
  CritPAtk := PA*2*B1 + B2;
end;

procedure TForm1.CalcPDPS;
begin
  PDPS := AtkS*(PA*(1 - Critical/1000) + CritPAtk*Critical/1000);
end;

procedure TForm1.IsDeflectArrowClick(Sender: TObject);
begin
  DeflectArrow.Enabled := IsDeflectArrow.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.DeflectArrowChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsDeadEyeClick(Sender: TObject);
begin
  DeadEye.Enabled := IsDeadEye.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.DeadEyeChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsRapidFireClick(Sender: TObject);
begin
  RapidFire.Enabled := IsRapidFire.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.RapidFireChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsAngelicIconClick(Sender: TObject);
begin
  AngelicIcon.Enabled := IsAngelicIcon.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.AngelicIconChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsZealotClick(Sender: TObject);
begin
  Zealot.Enabled := IsZealot.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.ZealotChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsParryStanceClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsRiposteStanceClick(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsSnipeClick(Sender: TObject);
begin
  Snipe.Enabled := IsSnipe.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.SnipeChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsInvocationClick(Sender: TObject);
begin
  Invocation.Enabled := IsInvocation.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.InvocationChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsTotemClick(Sender: TObject);
begin
  Totem.Enabled := IsTotem.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.TotemChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsFocusDaggerClick(Sender: TObject);
begin
  FocusDagger.Enabled := IsFocusDagger.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.FocusDaggerChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsUltDefenseClick(Sender: TObject);
begin
  UltDefense.Enabled := IsUltDefense.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.UltDefenseChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.IsFocusAttackClick(Sender: TObject);
begin
  FocusAttack.Enabled := IsFocusAttack.Checked;
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.FocusAttackChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.BlessTBLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.BlessTSLvlChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.GutsChange(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.CalcMiddlePAtk;
begin
  MiddlePAtk := PA*(1 - Critical/1000) + CritPAtk*Critical/1000;
end;

procedure TForm1.AUG1Click(Sender: TObject);
begin
  ReCalc;
  ReDrawStats;
end;

procedure TForm1.Aug1Change(Sender: TObject);
begin
  if Aug1.ItemIndex = 0 then
    begin
      AugB1.Enabled := False;
      AugB1.Caption := '';
    end
  else
    begin
      AugB1.Enabled := True;
      AugB1.Caption := '0 ';
    end;
end;

procedure TForm1.AugB1Click(Sender: TObject);
begin
  AugB1.Visible := False;
  AugE1.Text := Copy(AugB1.Caption,1,Length(AugB1.Caption) - 1);
  AugE1.Visible := True;
  AugE1.SetFocus;
end;

procedure TForm1.AugE1Exit(Sender: TObject);
begin
  AugE1.Visible := False;
  AugB1.Caption := CheckDigit(AugE1.Text,Augs[1]) + ' ';
  AugB1.Visible := True;
end;

procedure TForm1.AugE1KeyPress(Sender: TObject; var Key: Char);
begin
  if Key = #13 then
    AugE1Exit(nil);
end;

procedure TForm1.AugB2Click(Sender: TObject);
begin
  AugB2.Visible := False;
  AugE2.Text := Copy(AugB2.Caption,1,Length(AugB2.Caption) - 1);
  AugE2.Visible := True;
  AugE2.SetFocus;
end;

procedure TForm1.AugE2Exit(Sender: TObject);
begin
  AugE2.Visible := False;
  AugB2.Caption := CheckDigit(AugE2.Text,Augs[2]) + ' ';
  AugB2.Visible := True;
end;

procedure TForm1.AugE2KeyPress(Sender: TObject; var Key: Char);
begin
  if Key = #13 then
    AugE2Exit(nil);
end;

procedure TForm1.Aug2Change(Sender: TObject);
begin
  if Aug2.ItemIndex = 0 then
    begin
      AugB2.Enabled := False;
      AugB2.Caption := '';
    end
  else
    begin
      AugB2.Enabled := True;
      AugB2.Caption := '0 ';
    end;
end;

procedure TForm1.Aug3Change(Sender: TObject);
begin
  if Aug3.ItemIndex = 0 then
    begin
      AugB3.Enabled := False;
      AugB3.Caption := '';
    end
  else
    begin
      AugB3.Enabled := True;
      AugB3.Caption := '0 ';
    end;
end;

procedure TForm1.Aug4Change(Sender: TObject);
begin
  if Aug4.ItemIndex = 0 then
    begin
      AugB4.Enabled := False;
      AugB4.Caption := '';
    end
  else
    begin
      AugB4.Enabled := True;
      AugB4.Caption := '0 ';
    end;
end;

procedure TForm1.AugB3Click(Sender: TObject);
begin
  AugB3.Visible := False;
  AugE3.Text := Copy(AugB3.Caption,1,Length(AugB3.Caption) - 1);
  AugE3.Visible := True;
  AugE3.SetFocus;
end;

procedure TForm1.AugB4Click(Sender: TObject);
begin
  AugB4.Visible := False;
  AugE4.Text := Copy(AugB4.Caption,1,Length(AugB4.Caption) - 1);
  AugE4.Visible := True;
  AugE4.SetFocus;
end;

procedure TForm1.AugE3Exit(Sender: TObject);
begin
  AugE3.Visible := False;
  AugB3.Caption := CheckDigit(AugE3.Text,Augs[3]) + ' ';
  AugB3.Visible := True;
end;

procedure TForm1.AugE4Exit(Sender: TObject);
begin
  AugE4.Visible := False;
  AugB4.Caption := CheckDigit(AugE4.Text,Augs[4]) + ' ';
  AugB4.Visible := True;
end;

procedure TForm1.AugE3KeyPress(Sender: TObject; var Key: Char);
begin
  if Key = #13 then
    AugE3Exit(nil);
end;

procedure TForm1.AugE4KeyPress(Sender: TObject; var Key: Char);
begin
  if Key = #13 then
    AugE4Exit(nil);
end;

function TForm1.CheckDigit(s : String; var f : Extended) : String;
var
  i : Integer;
begin
  result := s;
  for i := 1 to Length(result) do
    if result[i] = ',' then
      result[i] := '.';
  Val(result,f,i);
  if i <> 0 then
    f := 0;
  result := FloatToStr(f);
  for i := 1 to Length(result) do
    if result[i] = ',' then
      result[i] := '.';
end;

end.
