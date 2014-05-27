object Form1: TForm1
  Left = 368
  Top = 170
  Width = 809
  Height = 740
  AutoSize = True
  BorderIcons = [biSystemMenu, biMinimize]
  Caption = 'Form1'
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = False
  OnShow = FormShow
  PixelsPerInch = 96
  TextHeight = 13
  object GroupBox2: TGroupBox
    Left = 224
    Top = 0
    Width = 249
    Height = 185
    Caption = 'Status'
    TabOrder = 0
    object Label9: TLabel
      Left = 128
      Top = 64
      Width = 34
      Height = 13
      Caption = 'M. Atk.'
    end
    object Label10: TLabel
      Left = 128
      Top = 128
      Width = 60
      Height = 13
      Caption = 'Casting Spd.'
    end
    object Label11: TLabel
      Left = 16
      Top = 64
      Width = 32
      Height = 13
      Caption = 'P. Atk.'
    end
    object Label77: TLabel
      Left = 16
      Top = 80
      Width = 33
      Height = 13
      Caption = 'P. Def.'
    end
    object Label78: TLabel
      Left = 16
      Top = 24
      Width = 15
      Height = 13
      Caption = 'HP'
    end
    object Label79: TLabel
      Left = 16
      Top = 40
      Width = 16
      Height = 13
      Caption = 'MP'
    end
    object Label80: TLabel
      Left = 128
      Top = 24
      Width = 14
      Height = 13
      Caption = 'CP'
    end
    object Label81: TLabel
      Left = 16
      Top = 96
      Width = 45
      Height = 13
      Caption = 'Accuracy'
    end
    object Label82: TLabel
      Left = 16
      Top = 112
      Width = 31
      Height = 13
      Caption = 'Critical'
    end
    object Label83: TLabel
      Left = 16
      Top = 128
      Width = 44
      Height = 13
      Caption = 'Atk. Spd.'
    end
    object Label84: TLabel
      Left = 128
      Top = 80
      Width = 35
      Height = 13
      Caption = 'M. Def.'
    end
    object Label85: TLabel
      Left = 128
      Top = 96
      Width = 38
      Height = 13
      Caption = 'Evasion'
    end
    object Label86: TLabel
      Left = 128
      Top = 112
      Width = 31
      Height = 13
      Caption = 'Speed'
    end
    object Label87: TLabel
      Left = 208
      Top = 128
      Width = 24
      Height = 13
      Caption = '2500'
    end
    object Label88: TLabel
      Left = 80
      Top = 64
      Width = 24
      Height = 13
      Caption = '5000'
    end
    object Label89: TLabel
      Left = 80
      Top = 128
      Width = 24
      Height = 13
      Caption = '1500'
    end
    object Label90: TLabel
      Left = 200
      Top = 64
      Width = 30
      Height = 13
      Caption = '20000'
    end
    object Label91: TLabel
      Left = 216
      Top = 112
      Width = 18
      Height = 13
      Caption = '250'
    end
    object Label92: TLabel
      Left = 216
      Top = 96
      Width = 18
      Height = 13
      Caption = '200'
    end
    object Label93: TLabel
      Left = 88
      Top = 112
      Width = 18
      Height = 13
      Caption = '500'
    end
    object Label94: TLabel
      Left = 88
      Top = 96
      Width = 18
      Height = 13
      Caption = '500'
    end
    object Label95: TLabel
      Left = 80
      Top = 80
      Width = 24
      Height = 13
      Caption = '2000'
    end
    object Label96: TLabel
      Left = 208
      Top = 80
      Width = 24
      Height = 13
      Caption = '3000'
    end
    object Label108: TLabel
      Left = 72
      Top = 24
      Width = 30
      Height = 13
      Caption = '50000'
    end
    object Label109: TLabel
      Left = 72
      Top = 40
      Width = 30
      Height = 13
      Caption = '10000'
    end
    object Label110: TLabel
      Left = 200
      Top = 24
      Width = 30
      Height = 13
      Caption = '30000'
    end
    object Label111: TLabel
      Left = 16
      Top = 144
      Width = 45
      Height = 13
      Caption = 'Mag. Crit.'
    end
    object Label112: TLabel
      Left = 80
      Top = 144
      Width = 26
      Height = 13
      Caption = '100%'
    end
    object Label113: TLabel
      Left = 128
      Top = 144
      Width = 54
      Height = 13
      Caption = 'Shield D.R.'
      Color = clBtnFace
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clGray
      Font.Height = -11
      Font.Name = 'MS Sans Serif'
      Font.Style = []
      ParentColor = False
      ParentFont = False
    end
    object Label114: TLabel
      Left = 208
      Top = 144
      Width = 26
      Height = 13
      Caption = '100%'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'MS Sans Serif'
      Font.Style = []
      ParentFont = False
      Visible = False
    end
    object Label139: TLabel
      Left = 16
      Top = 160
      Width = 34
      Height = 13
      Caption = 'M.DPS'
    end
    object Label142: TLabel
      Left = 128
      Top = 160
      Width = 32
      Height = 13
      Caption = 'P.DPS'
    end
    object Label143: TLabel
      Left = 88
      Top = 160
      Width = 18
      Height = 13
      Caption = '100'
    end
    object Label144: TLabel
      Left = 216
      Top = 160
      Width = 18
      Height = 13
      Caption = '100'
    end
  end
  object GroupBox5: TGroupBox
    Left = 480
    Top = 0
    Width = 321
    Height = 185
    Caption = 'Tatoo'
    TabOrder = 1
    object Label12: TLabel
      Left = 32
      Top = 96
      Width = 56
      Height = 13
      Caption = 'Tatoo slot 1'
      OnClick = Label12Click
    end
    object Label13: TLabel
      Left = 32
      Top = 120
      Width = 56
      Height = 13
      Caption = 'Tatoo slot 2'
      OnClick = Label13Click
    end
    object Label14: TLabel
      Left = 32
      Top = 144
      Width = 56
      Height = 13
      Caption = 'Tatoo slot 3'
      OnClick = Label14Click
    end
    object Label70: TLabel
      Left = 160
      Top = 88
      Width = 11
      Height = 20
      Caption = '+'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -16
      Font.Name = 'MS Sans Serif'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object Label71: TLabel
      Left = 274
      Top = 88
      Width = 7
      Height = 20
      Caption = '-'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -16
      Font.Name = 'MS Sans Serif'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object Label72: TLabel
      Left = 160
      Top = 112
      Width = 11
      Height = 20
      Caption = '+'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -16
      Font.Name = 'MS Sans Serif'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object Label73: TLabel
      Left = 274
      Top = 112
      Width = 7
      Height = 20
      Caption = '-'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -16
      Font.Name = 'MS Sans Serif'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object Label74: TLabel
      Left = 160
      Top = 136
      Width = 11
      Height = 20
      Caption = '+'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -16
      Font.Name = 'MS Sans Serif'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object Label75: TLabel
      Left = 274
      Top = 136
      Width = 7
      Height = 20
      Caption = '-'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -16
      Font.Name = 'MS Sans Serif'
      Font.Style = [fsBold]
      ParentFont = False
    end
    object Label1: TLabel
      Left = 16
      Top = 16
      Width = 22
      Height = 13
      Caption = 'STR'
    end
    object Label2: TLabel
      Left = 112
      Top = 16
      Width = 22
      Height = 13
      Caption = 'DEX'
    end
    object Label3: TLabel
      Left = 216
      Top = 16
      Width = 23
      Height = 13
      Caption = 'CON'
    end
    object Label6: TLabel
      Left = 216
      Top = 48
      Width = 24
      Height = 13
      Caption = 'MEN'
    end
    object Label5: TLabel
      Left = 112
      Top = 48
      Width = 21
      Height = 13
      Caption = 'WIT'
    end
    object Label4: TLabel
      Left = 16
      Top = 48
      Width = 18
      Height = 13
      Caption = 'INT'
    end
    object Label76: TLabel
      Left = 6
      Top = 64
      Width = 306
      Height = 13
      Caption = 
        '----------------------------------------------------------------' +
        '--------------------------------------'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clGray
      Font.Height = -11
      Font.Name = 'MS Sans Serif'
      Font.Style = []
      ParentFont = False
    end
    object ComboBox2: TComboBox
      Left = 112
      Top = 88
      Width = 49
      Height = 21
      Style = csDropDownList
      Enabled = False
      ItemHeight = 13
      ItemIndex = 0
      TabOrder = 0
      Text = 'STR'
      OnChange = ComboBox2Change
      Items.Strings = (
        'STR'
        'DEX'
        'CON'
        'INT'
        'WIT'
        'MEN')
    end
    object ComboBox98: TComboBox
      Left = 170
      Top = 88
      Width = 33
      Height = 21
      Style = csDropDownList
      Enabled = False
      ItemHeight = 13
      ItemIndex = 0
      TabOrder = 1
      Text = '1'
      OnChange = ComboBox98Change
      Items.Strings = (
        '1'
        '2'
        '3'
        '4')
    end
    object ComboBox99: TComboBox
      Left = 224
      Top = 88
      Width = 49
      Height = 21
      Style = csDropDownList
      Enabled = False
      ItemHeight = 13
      ItemIndex = 0
      TabOrder = 2
      Text = 'STR'
      OnChange = ComboBox99Change
      Items.Strings = (
        'STR'
        'DEX'
        'CON'
        'INT'
        'WIT'
        'MEN')
    end
    object ComboBox100: TComboBox
      Left = 282
      Top = 88
      Width = 33
      Height = 21
      Style = csDropDownList
      Enabled = False
      ItemHeight = 13
      ItemIndex = 0
      TabOrder = 3
      Text = '1'
      OnChange = ComboBox100Change
      Items.Strings = (
        '1'
        '2'
        '3'
        '4'
        '5'
        '6')
    end
    object ComboBox4: TComboBox
      Left = 112
      Top = 112
      Width = 49
      Height = 21
      Style = csDropDownList
      Enabled = False
      ItemHeight = 13
      ItemIndex = 0
      TabOrder = 4
      Text = 'STR'
      OnChange = ComboBox4Change
      Items.Strings = (
        'STR'
        'DEX'
        'CON'
        'INT'
        'WIT'
        'MEN')
    end
    object ComboBox5: TComboBox
      Left = 170
      Top = 112
      Width = 33
      Height = 21
      Style = csDropDownList
      Enabled = False
      ItemHeight = 13
      ItemIndex = 0
      TabOrder = 5
      Text = '1'
      OnChange = ComboBox5Change
      Items.Strings = (
        '1'
        '2'
        '3'
        '4')
    end
    object ComboBox101: TComboBox
      Left = 224
      Top = 112
      Width = 49
      Height = 21
      Style = csDropDownList
      Enabled = False
      ItemHeight = 13
      ItemIndex = 0
      TabOrder = 6
      Text = 'STR'
      OnChange = ComboBox101Change
      Items.Strings = (
        'STR'
        'DEX'
        'CON'
        'INT'
        'WIT'
        'MEN')
    end
    object ComboBox102: TComboBox
      Left = 282
      Top = 112
      Width = 33
      Height = 21
      Style = csDropDownList
      Enabled = False
      ItemHeight = 13
      ItemIndex = 0
      TabOrder = 7
      Text = '1'
      OnChange = ComboBox102Change
      Items.Strings = (
        '1'
        '2'
        '3'
        '4'
        '5'
        '6')
    end
    object ComboBox103: TComboBox
      Left = 112
      Top = 136
      Width = 49
      Height = 21
      Style = csDropDownList
      Enabled = False
      ItemHeight = 13
      ItemIndex = 0
      TabOrder = 8
      Text = 'STR'
      OnChange = ComboBox103Change
      Items.Strings = (
        'STR'
        'DEX'
        'CON'
        'INT'
        'WIT'
        'MEN')
    end
    object ComboBox104: TComboBox
      Left = 170
      Top = 136
      Width = 33
      Height = 21
      Style = csDropDownList
      Enabled = False
      ItemHeight = 13
      ItemIndex = 0
      TabOrder = 9
      Text = '1'
      OnChange = ComboBox104Change
      Items.Strings = (
        '1'
        '2'
        '3'
        '4')
    end
    object ComboBox105: TComboBox
      Left = 224
      Top = 136
      Width = 49
      Height = 21
      Style = csDropDownList
      Enabled = False
      ItemHeight = 13
      ItemIndex = 0
      TabOrder = 10
      Text = 'STR'
      Items.Strings = (
        'STR'
        'DEX'
        'CON'
        'INT'
        'WIT'
        'MEN')
    end
    object ComboBox106: TComboBox
      Left = 282
      Top = 136
      Width = 33
      Height = 21
      Style = csDropDownList
      Enabled = False
      ItemHeight = 13
      ItemIndex = 0
      TabOrder = 11
      Text = '1'
      OnChange = ComboBox106Change
      Items.Strings = (
        '1'
        '2'
        '3'
        '4'
        '5'
        '6')
    end
    object IsTatoo1: TCheckBox
      Left = 8
      Top = 96
      Width = 17
      Height = 17
      TabOrder = 12
      OnClick = IsTatoo1Click
    end
    object IsTatoo2: TCheckBox
      Left = 8
      Top = 120
      Width = 17
      Height = 17
      TabOrder = 13
      OnClick = IsTatoo2Click
    end
    object IsTatoo3: TCheckBox
      Left = 8
      Top = 144
      Width = 17
      Height = 17
      TabOrder = 14
      OnClick = IsTatoo3Click
    end
  end
  object TabbedNotebook1: TTabbedNotebook
    Left = 0
    Top = 192
    Width = 801
    Height = 521
    PageIndex = 2
    TabFont.Charset = RUSSIAN_CHARSET
    TabFont.Color = clBtnText
    TabFont.Height = -11
    TabFont.Name = 'Microsoft Sans Serif'
    TabFont.Style = []
    TabOrder = 2
    object TTabPage
      Left = 4
      Top = 24
      Caption = 'Equipment'
      object WeaponEn: TGroupBox
        Left = 0
        Top = 0
        Width = 793
        Height = 489
        TabOrder = 0
        object Label34: TLabel
          Left = 16
          Top = 24
          Width = 41
          Height = 13
          Caption = 'Weapon'
        end
        object Label35: TLabel
          Left = 104
          Top = 56
          Width = 120
          Height = 13
          Caption = 'Quickselect an armor set:'
        end
        object Label36: TLabel
          Left = 16
          Top = 88
          Width = 29
          Height = 13
          Caption = 'Shield'
        end
        object Label37: TLabel
          Left = 16
          Top = 120
          Width = 33
          Height = 13
          Caption = 'Helmet'
        end
        object Label38: TLabel
          Left = 16
          Top = 152
          Width = 62
          Height = 13
          Caption = 'Body - Upper'
        end
        object Label39: TLabel
          Left = 16
          Top = 184
          Width = 62
          Height = 13
          Caption = 'Body - Lower'
        end
        object Label40: TLabel
          Left = 16
          Top = 216
          Width = 33
          Height = 13
          Caption = 'Gloves'
        end
        object Label41: TLabel
          Left = 16
          Top = 248
          Width = 27
          Height = 13
          Caption = 'Boots'
        end
        object Label42: TLabel
          Left = 104
          Top = 280
          Width = 126
          Height = 13
          Caption = 'Quickselect an jewelry set:'
        end
        object Label43: TLabel
          Left = 16
          Top = 320
          Width = 46
          Height = 13
          Caption = 'Necklace'
        end
        object Label44: TLabel
          Left = 16
          Top = 344
          Width = 33
          Height = 13
          Caption = 'Earring'
        end
        object ComboBox3: TComboBox
          Left = 104
          Top = 16
          Width = 41
          Height = 21
          Style = csDropDownList
          ImeMode = imHanguel
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 0
          Text = '+0'
          OnChange = ComboBox3Change
          Items.Strings = (
            '+0'
            '+1'
            '+2'
            '+3')
        end
        object ComboBox6: TComboBox
          Left = 152
          Top = 16
          Width = 81
          Height = 21
          Style = csDropDownList
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 1
          Text = 'Hero'
          OnChange = ComboBox6Change
          Items.Strings = (
            'Hero'
            'S Grade'
            'A Grade'
            'B Grade'
            'C Grade'
            'D Grade'
            'Non Grade')
        end
        object ComboBox7: TComboBox
          Left = 240
          Top = 16
          Width = 313
          Height = 21
          Style = csDropDownList
          DropDownCount = 50
          ItemHeight = 13
          TabOrder = 2
          OnChange = ComboBox7Change
        end
        object ComboBox8: TComboBox
          Left = 560
          Top = 16
          Width = 113
          Height = 21
          ItemHeight = 13
          TabOrder = 3
          Text = 'ComboBox8'
          OnChange = ComboBox62Change
        end
        object ComboBox9: TComboBox
          Left = 240
          Top = 48
          Width = 145
          Height = 21
          Style = csDropDownList
          ItemHeight = 13
          TabOrder = 4
        end
        object ComboBox10: TComboBox
          Left = 104
          Top = 80
          Width = 41
          Height = 21
          Style = csDropDownList
          ImeMode = imHanguel
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 5
          Text = '+0'
          OnChange = ComboBox3Change
          Items.Strings = (
            '+0'
            '+1'
            '+2'
            '+3')
        end
        object ComboBox11: TComboBox
          Left = 152
          Top = 80
          Width = 81
          Height = 21
          Style = csDropDownList
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 6
          Text = 'S Grade'
          Items.Strings = (
            'S Grade'
            'A Grade'
            'B Grade'
            'C Grade'
            'D Grade'
            'Non Grade')
        end
        object ComboBox12: TComboBox
          Left = 240
          Top = 80
          Width = 313
          Height = 21
          Style = csDropDownList
          DropDownCount = 50
          ItemHeight = 13
          TabOrder = 7
        end
        object ComboBox13: TComboBox
          Left = 104
          Top = 112
          Width = 41
          Height = 21
          Style = csDropDownList
          ImeMode = imHanguel
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 8
          Text = '+0'
          OnChange = ComboBox3Change
          Items.Strings = (
            '+0'
            '+1'
            '+2'
            '+3')
        end
        object ComboBox14: TComboBox
          Left = 152
          Top = 112
          Width = 81
          Height = 21
          Style = csDropDownList
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 9
          Text = 'S Grade'
          Items.Strings = (
            'S Grade'
            'A Grade'
            'B Grade'
            'C Grade'
            'D Grade'
            'Non Grade')
        end
        object ComboBox15: TComboBox
          Left = 240
          Top = 112
          Width = 313
          Height = 21
          Style = csDropDownList
          DropDownCount = 50
          ItemHeight = 13
          TabOrder = 10
        end
        object ComboBox16: TComboBox
          Left = 104
          Top = 144
          Width = 41
          Height = 21
          Style = csDropDownList
          ImeMode = imHanguel
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 11
          Text = '+0'
          OnChange = ComboBox3Change
          Items.Strings = (
            '+0'
            '+1'
            '+2'
            '+3')
        end
        object ComboBox17: TComboBox
          Left = 152
          Top = 144
          Width = 81
          Height = 21
          Style = csDropDownList
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 12
          Text = 'S Grade'
          Items.Strings = (
            'S Grade'
            'A Grade'
            'B Grade'
            'C Grade'
            'D Grade'
            'Non Grade')
        end
        object ComboBox18: TComboBox
          Left = 240
          Top = 144
          Width = 313
          Height = 21
          Style = csDropDownList
          DropDownCount = 50
          ItemHeight = 13
          TabOrder = 13
        end
        object ComboBox19: TComboBox
          Left = 104
          Top = 176
          Width = 41
          Height = 21
          Style = csDropDownList
          ImeMode = imHanguel
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 14
          Text = '+0'
          OnChange = ComboBox3Change
          Items.Strings = (
            '+0'
            '+1'
            '+2'
            '+3')
        end
        object ComboBox20: TComboBox
          Left = 152
          Top = 176
          Width = 81
          Height = 21
          Style = csDropDownList
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 15
          Text = 'S Grade'
          Items.Strings = (
            'S Grade'
            'A Grade'
            'B Grade'
            'C Grade'
            'D Grade'
            'Non Grade')
        end
        object ComboBox21: TComboBox
          Left = 240
          Top = 176
          Width = 313
          Height = 21
          Style = csDropDownList
          DropDownCount = 50
          ItemHeight = 13
          TabOrder = 16
        end
        object ComboBox22: TComboBox
          Left = 104
          Top = 208
          Width = 41
          Height = 21
          Style = csDropDownList
          ImeMode = imHanguel
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 17
          Text = '+0'
          OnChange = ComboBox3Change
          Items.Strings = (
            '+0'
            '+1'
            '+2'
            '+3')
        end
        object ComboBox23: TComboBox
          Left = 152
          Top = 208
          Width = 81
          Height = 21
          Style = csDropDownList
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 18
          Text = 'S Grade'
          Items.Strings = (
            'S Grade'
            'A Grade'
            'B Grade'
            'C Grade'
            'D Grade'
            'Non Grade')
        end
        object ComboBox24: TComboBox
          Left = 240
          Top = 208
          Width = 313
          Height = 21
          Style = csDropDownList
          DropDownCount = 50
          ItemHeight = 13
          TabOrder = 19
        end
        object ComboBox25: TComboBox
          Left = 104
          Top = 240
          Width = 41
          Height = 21
          Style = csDropDownList
          ImeMode = imHanguel
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 20
          Text = '+0'
          OnChange = ComboBox3Change
          Items.Strings = (
            '+0'
            '+1'
            '+2'
            '+3')
        end
        object ComboBox26: TComboBox
          Left = 152
          Top = 240
          Width = 81
          Height = 21
          Style = csDropDownList
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 21
          Text = 'S Grade'
          Items.Strings = (
            'S Grade'
            'A Grade'
            'B Grade'
            'C Grade'
            'D Grade'
            'Non Grade')
        end
        object ComboBox27: TComboBox
          Left = 240
          Top = 240
          Width = 313
          Height = 21
          Style = csDropDownList
          DropDownCount = 50
          ItemHeight = 13
          TabOrder = 22
        end
        object ComboBox28: TComboBox
          Left = 240
          Top = 272
          Width = 201
          Height = 21
          Style = csDropDownList
          ItemHeight = 13
          TabOrder = 23
        end
        object ComboBox29: TComboBox
          Left = 104
          Top = 312
          Width = 41
          Height = 21
          Style = csDropDownList
          ImeMode = imHanguel
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 24
          Text = '+0'
          OnChange = ComboBox3Change
          Items.Strings = (
            '+0'
            '+1'
            '+2'
            '+3')
        end
        object ComboBox30: TComboBox
          Left = 152
          Top = 312
          Width = 81
          Height = 21
          Style = csDropDownList
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 25
          Text = 'S Grade'
          Items.Strings = (
            'S Grade'
            'A Grade'
            'B Grade'
            'C Grade'
            'D Grade'
            'Non Grade')
        end
        object ComboBox31: TComboBox
          Left = 240
          Top = 312
          Width = 233
          Height = 21
          Style = csDropDownList
          DropDownCount = 50
          ItemHeight = 13
          TabOrder = 26
        end
        object GroupBox3: TGroupBox
          Left = 0
          Top = 0
          Width = 793
          Height = 489
          TabOrder = 27
          object Label45: TLabel
            Left = 16
            Top = 24
            Width = 41
            Height = 13
            Caption = 'Weapon'
          end
          object Label46: TLabel
            Left = 104
            Top = 56
            Width = 120
            Height = 13
            Caption = 'Quickselect an armor set:'
          end
          object Label47: TLabel
            Left = 16
            Top = 88
            Width = 29
            Height = 13
            Caption = 'Shield'
          end
          object Label48: TLabel
            Left = 16
            Top = 120
            Width = 33
            Height = 13
            Caption = 'Helmet'
          end
          object Label49: TLabel
            Left = 16
            Top = 152
            Width = 62
            Height = 13
            Caption = 'Body - Upper'
          end
          object Label50: TLabel
            Left = 16
            Top = 184
            Width = 62
            Height = 13
            Caption = 'Body - Lower'
          end
          object Label51: TLabel
            Left = 16
            Top = 216
            Width = 33
            Height = 13
            Caption = 'Gloves'
          end
          object Label52: TLabel
            Left = 16
            Top = 248
            Width = 27
            Height = 13
            Caption = 'Boots'
          end
          object Label53: TLabel
            Left = 104
            Top = 280
            Width = 126
            Height = 13
            Caption = 'Quickselect an jewelry set:'
          end
          object Label54: TLabel
            Left = 16
            Top = 320
            Width = 46
            Height = 13
            Caption = 'Necklace'
          end
          object Label55: TLabel
            Left = 16
            Top = 344
            Width = 33
            Height = 13
            Caption = 'Earring'
          end
          object ComboBox32: TComboBox
            Left = 104
            Top = 16
            Width = 41
            Height = 21
            Style = csDropDownList
            ImeMode = imHanguel
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 0
            Text = '+0'
            OnChange = ComboBox3Change
            Items.Strings = (
              '+0'
              '+1'
              '+2'
              '+3')
          end
          object ComboBox33: TComboBox
            Left = 152
            Top = 16
            Width = 81
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 1
            Text = 'Hero'
            OnChange = ComboBox6Change
            Items.Strings = (
              'Hero'
              'S Grade'
              'A Grade'
              'B Grade'
              'C Grade'
              'D Grade'
              'Non Grade')
          end
          object ComboBox34: TComboBox
            Left = 240
            Top = 16
            Width = 313
            Height = 21
            Style = csDropDownList
            DropDownCount = 50
            ItemHeight = 13
            TabOrder = 2
            OnChange = ComboBox7Change
          end
          object ComboBox35: TComboBox
            Left = 560
            Top = 16
            Width = 113
            Height = 21
            ItemHeight = 13
            TabOrder = 3
            Text = 'ComboBox8'
            OnChange = ComboBox62Change
          end
          object ComboBox36: TComboBox
            Left = 240
            Top = 48
            Width = 145
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 4
          end
          object ComboBox37: TComboBox
            Left = 104
            Top = 80
            Width = 41
            Height = 21
            Style = csDropDownList
            ImeMode = imHanguel
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 5
            Text = '+0'
            OnChange = ComboBox3Change
            Items.Strings = (
              '+0'
              '+1'
              '+2'
              '+3')
          end
          object ComboBox38: TComboBox
            Left = 152
            Top = 80
            Width = 81
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 6
            Text = 'S Grade'
            Items.Strings = (
              'S Grade'
              'A Grade'
              'B Grade'
              'C Grade'
              'D Grade'
              'Non Grade')
          end
          object ComboBox39: TComboBox
            Left = 240
            Top = 80
            Width = 313
            Height = 21
            Style = csDropDownList
            DropDownCount = 50
            ItemHeight = 13
            TabOrder = 7
          end
          object ComboBox40: TComboBox
            Left = 104
            Top = 112
            Width = 41
            Height = 21
            Style = csDropDownList
            ImeMode = imHanguel
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 8
            Text = '+0'
            OnChange = ComboBox3Change
            Items.Strings = (
              '+0'
              '+1'
              '+2'
              '+3')
          end
          object ComboBox41: TComboBox
            Left = 152
            Top = 112
            Width = 81
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 9
            Text = 'S Grade'
            Items.Strings = (
              'S Grade'
              'A Grade'
              'B Grade'
              'C Grade'
              'D Grade'
              'Non Grade')
          end
          object ComboBox42: TComboBox
            Left = 240
            Top = 112
            Width = 313
            Height = 21
            Style = csDropDownList
            DropDownCount = 50
            ItemHeight = 13
            TabOrder = 10
          end
          object ComboBox43: TComboBox
            Left = 104
            Top = 144
            Width = 41
            Height = 21
            Style = csDropDownList
            ImeMode = imHanguel
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 11
            Text = '+0'
            OnChange = ComboBox3Change
            Items.Strings = (
              '+0'
              '+1'
              '+2'
              '+3')
          end
          object ComboBox44: TComboBox
            Left = 152
            Top = 144
            Width = 81
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 12
            Text = 'S Grade'
            Items.Strings = (
              'S Grade'
              'A Grade'
              'B Grade'
              'C Grade'
              'D Grade'
              'Non Grade')
          end
          object ComboBox45: TComboBox
            Left = 240
            Top = 144
            Width = 313
            Height = 21
            Style = csDropDownList
            DropDownCount = 50
            ItemHeight = 13
            TabOrder = 13
          end
          object ComboBox46: TComboBox
            Left = 104
            Top = 176
            Width = 41
            Height = 21
            Style = csDropDownList
            ImeMode = imHanguel
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 14
            Text = '+0'
            OnChange = ComboBox3Change
            Items.Strings = (
              '+0'
              '+1'
              '+2'
              '+3')
          end
          object ComboBox47: TComboBox
            Left = 152
            Top = 176
            Width = 81
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 15
            Text = 'S Grade'
            Items.Strings = (
              'S Grade'
              'A Grade'
              'B Grade'
              'C Grade'
              'D Grade'
              'Non Grade')
          end
          object ComboBox48: TComboBox
            Left = 240
            Top = 176
            Width = 313
            Height = 21
            Style = csDropDownList
            DropDownCount = 50
            ItemHeight = 13
            TabOrder = 16
          end
          object ComboBox49: TComboBox
            Left = 104
            Top = 208
            Width = 41
            Height = 21
            Style = csDropDownList
            ImeMode = imHanguel
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 17
            Text = '+0'
            OnChange = ComboBox3Change
            Items.Strings = (
              '+0'
              '+1'
              '+2'
              '+3')
          end
          object ComboBox50: TComboBox
            Left = 152
            Top = 208
            Width = 81
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 18
            Text = 'S Grade'
            Items.Strings = (
              'S Grade'
              'A Grade'
              'B Grade'
              'C Grade'
              'D Grade'
              'Non Grade')
          end
          object ComboBox51: TComboBox
            Left = 240
            Top = 208
            Width = 313
            Height = 21
            Style = csDropDownList
            DropDownCount = 50
            ItemHeight = 13
            TabOrder = 19
          end
          object ComboBox52: TComboBox
            Left = 104
            Top = 240
            Width = 41
            Height = 21
            Style = csDropDownList
            ImeMode = imHanguel
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 20
            Text = '+0'
            OnChange = ComboBox3Change
            Items.Strings = (
              '+0'
              '+1'
              '+2'
              '+3')
          end
          object ComboBox53: TComboBox
            Left = 152
            Top = 240
            Width = 81
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 21
            Text = 'S Grade'
            Items.Strings = (
              'S Grade'
              'A Grade'
              'B Grade'
              'C Grade'
              'D Grade'
              'Non Grade')
          end
          object ComboBox54: TComboBox
            Left = 240
            Top = 240
            Width = 313
            Height = 21
            Style = csDropDownList
            DropDownCount = 50
            ItemHeight = 13
            TabOrder = 22
          end
          object ComboBox55: TComboBox
            Left = 240
            Top = 272
            Width = 201
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 23
          end
          object ComboBox56: TComboBox
            Left = 104
            Top = 312
            Width = 41
            Height = 21
            Style = csDropDownList
            ImeMode = imHanguel
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 24
            Text = '+0'
            OnChange = ComboBox3Change
            Items.Strings = (
              '+0'
              '+1'
              '+2'
              '+3')
          end
          object ComboBox57: TComboBox
            Left = 152
            Top = 312
            Width = 81
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 25
            Text = 'S Grade'
            Items.Strings = (
              'S Grade'
              'A Grade'
              'B Grade'
              'C Grade'
              'D Grade'
              'Non Grade')
          end
          object ComboBox58: TComboBox
            Left = 240
            Top = 312
            Width = 233
            Height = 21
            Style = csDropDownList
            DropDownCount = 50
            ItemHeight = 13
            TabOrder = 26
          end
          object GroupBox4: TGroupBox
            Left = 0
            Top = 0
            Width = 793
            Height = 489
            TabOrder = 27
            object Label56: TLabel
              Left = 16
              Top = 24
              Width = 41
              Height = 13
              Caption = 'Weapon'
            end
            object Label57: TLabel
              Left = 104
              Top = 56
              Width = 120
              Height = 13
              Caption = 'Quickselect an armor set:'
            end
            object Label58: TLabel
              Left = 16
              Top = 88
              Width = 29
              Height = 13
              Caption = 'Shield'
            end
            object Label59: TLabel
              Left = 16
              Top = 120
              Width = 33
              Height = 13
              Caption = 'Helmet'
            end
            object Label60: TLabel
              Left = 16
              Top = 152
              Width = 62
              Height = 13
              Caption = 'Body - Upper'
            end
            object Label61: TLabel
              Left = 16
              Top = 184
              Width = 62
              Height = 13
              Caption = 'Body - Lower'
            end
            object Label62: TLabel
              Left = 16
              Top = 216
              Width = 33
              Height = 13
              Caption = 'Gloves'
            end
            object Label63: TLabel
              Left = 16
              Top = 248
              Width = 27
              Height = 13
              Caption = 'Boots'
            end
            object Label64: TLabel
              Left = 104
              Top = 280
              Width = 126
              Height = 13
              Caption = 'Quickselect an jewelry set:'
            end
            object Label65: TLabel
              Left = 16
              Top = 320
              Width = 46
              Height = 13
              Caption = 'Necklace'
            end
            object Label66: TLabel
              Left = 16
              Top = 352
              Width = 33
              Height = 13
              Caption = 'Earring'
            end
            object Label67: TLabel
              Left = 16
              Top = 384
              Width = 33
              Height = 13
              Caption = 'Earring'
            end
            object Label68: TLabel
              Left = 16
              Top = 416
              Width = 22
              Height = 13
              Caption = 'Ring'
            end
            object Label69: TLabel
              Left = 16
              Top = 448
              Width = 22
              Height = 13
              Caption = 'Ring'
            end
            object ComboBox59: TComboBox
              Left = 104
              Top = 16
              Width = 41
              Height = 21
              Style = csDropDownList
              ImeMode = imHanguel
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 0
              Text = '+0'
              OnChange = ComboBox59Change
              Items.Strings = (
                '+0'
                '+1'
                '+2'
                '+3'
                '+4'
                '+5'
                '+6'
                '+7'
                '+8'
                '+9'
                '+10'
                '+11'
                '+12'
                '+13'
                '+14'
                '+15'
                '+16'
                '+17'
                '+18'
                '+19'
                '+20')
            end
            object ComboBox60: TComboBox
              Left = 152
              Top = 16
              Width = 81
              Height = 21
              Style = csDropDownList
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 1
              Text = 'Hero'
              OnChange = ComboBox6Change
              Items.Strings = (
                'Hero'
                'S Grade'
                'A Grade'
                'B Grade'
                'C Grade'
                'D Grade'
                'Non Grade')
            end
            object ComboBox61: TComboBox
              Left = 240
              Top = 16
              Width = 313
              Height = 21
              Style = csDropDownList
              DropDownCount = 35
              ItemHeight = 13
              TabOrder = 2
              OnChange = ComboBox7Change
            end
            object ComboBox62: TComboBox
              Left = 560
              Top = 16
              Width = 113
              Height = 21
              Style = csDropDownList
              ItemHeight = 13
              TabOrder = 3
              OnChange = ComboBox62Change
            end
            object ComboBox63: TComboBox
              Left = 240
              Top = 48
              Width = 145
              Height = 21
              Style = csDropDownList
              DropDownCount = 32
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 4
              Text = '---===  S GRADE  ===---'
              OnChange = ComboBox63Change
              Items.Strings = (
                '---===  S GRADE  ===---'
                'Draconic Leather'
                'Imperial Crusader'
                'Major Arcana'
                '---===  A GRADE  ===---'
                '(Hv) Dark Crystall'
                '(Lg) Dark Crystall'
                '(Rb) Dark Crystall'
                '(Hv) Majestic'
                '(Lg) Majestic'
                '(Rb) Majestic'
                '(Hv) Nightmare'
                '(Lg) Nightmare'
                '(Rb) Nightmare'
                '(Hv) Tallum'
                '(Lg) Tallum'
                '(Rb) Tallum'
                '---===  B GRADE  ===---'
                '(Hv) Avadon'
                '(Lg) Avadon'
                '(Rb) Avadon'
                '(Hv) Blue Wolf'
                '(Lg) Blue Wolf'
                '(Rb) Blue Wolf'
                '(Hv) Doom'
                '(Lg) Doom'
                '(Rb) Doom'
                '(Hv) Zubei'
                '(Lg) Zubei'
                '(Rb) Zubei'
                '---===  C GRADE  ===---'
                'Chain Mail'
                'Composite'
                'Demon'
                'Divine'
                'Drake'
                'Full Plate'
                'Karmian'
                'Mithril (Light)'
                'Plated Leather'
                'Theca'
                '---===  D GRADE  ===---'
                'Brigandine'
                'Elven Mithril'
                'Knowledge'
                'Manticore'
                'Mithril (Heavy)'
                'Reinforced Leather'
                '---===  NO GRADE  ===---'
                'Devotion'
                'Wooden')
            end
            object ComboBox64: TComboBox
              Left = 104
              Top = 80
              Width = 41
              Height = 21
              Style = csDropDownList
              ImeMode = imHanguel
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 5
              Text = '+0'
              Items.Strings = (
                '+0'
                '+1'
                '+2'
                '+3'
                '+4'
                '+5'
                '+6'
                '+7'
                '+8'
                '+9'
                '+10')
            end
            object ComboBox65: TComboBox
              Left = 152
              Top = 80
              Width = 81
              Height = 21
              Style = csDropDownList
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 6
              Text = 'S Grade'
              OnChange = ComboBox65Change
              Items.Strings = (
                'S Grade'
                'A Grade'
                'B Grade'
                'C Grade'
                'D Grade'
                'Non Grade')
            end
            object ComboBox66: TComboBox
              Left = 240
              Top = 80
              Width = 313
              Height = 21
              Style = csDropDownList
              DropDownCount = 50
              ItemHeight = 13
              TabOrder = 7
              OnChange = ComboBox66Change
            end
            object ComboBox67: TComboBox
              Left = 104
              Top = 112
              Width = 41
              Height = 21
              Style = csDropDownList
              ImeMode = imHanguel
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 8
              Text = '+0'
              OnChange = ComboBox67Change
              Items.Strings = (
                '+0'
                '+1'
                '+2'
                '+3')
            end
            object ComboBox68: TComboBox
              Left = 152
              Top = 112
              Width = 81
              Height = 21
              Style = csDropDownList
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 9
              Text = 'S Grade'
              OnChange = ComboBox68Change
              Items.Strings = (
                'S Grade'
                'A Grade'
                'B Grade'
                'C Grade'
                'D Grade'
                'Non Grade')
            end
            object ComboBox69: TComboBox
              Left = 240
              Top = 112
              Width = 313
              Height = 21
              Style = csDropDownList
              DropDownCount = 50
              ItemHeight = 13
              TabOrder = 10
              OnChange = ComboBox69Change
            end
            object ComboBox70: TComboBox
              Left = 104
              Top = 144
              Width = 41
              Height = 21
              Style = csDropDownList
              ImeMode = imHanguel
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 11
              Text = '+0'
              OnChange = ComboBox70Change
              Items.Strings = (
                '+0'
                '+1'
                '+2'
                '+3')
            end
            object ComboBox71: TComboBox
              Left = 152
              Top = 144
              Width = 81
              Height = 21
              Style = csDropDownList
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 12
              Text = 'S Grade'
              OnChange = ComboBox71Change
              Items.Strings = (
                'S Grade'
                'A Grade'
                'B Grade'
                'C Grade'
                'D Grade'
                'Non Grade')
            end
            object ComboBox72: TComboBox
              Left = 240
              Top = 144
              Width = 313
              Height = 21
              Style = csDropDownList
              DropDownCount = 50
              ItemHeight = 13
              TabOrder = 13
              OnChange = ComboBox72Change
            end
            object ComboBox73: TComboBox
              Left = 104
              Top = 176
              Width = 41
              Height = 21
              Style = csDropDownList
              ImeMode = imHanguel
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 14
              Text = '+0'
              OnChange = ComboBox73Change
              Items.Strings = (
                '+0'
                '+1'
                '+2'
                '+3')
            end
            object ComboBox74: TComboBox
              Left = 152
              Top = 176
              Width = 81
              Height = 21
              Style = csDropDownList
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 15
              Text = 'S Grade'
              OnChange = ComboBox74Change
              Items.Strings = (
                'S Grade'
                'A Grade'
                'B Grade'
                'C Grade'
                'D Grade'
                'Non Grade')
            end
            object ComboBox75: TComboBox
              Left = 240
              Top = 176
              Width = 313
              Height = 21
              Style = csDropDownList
              DropDownCount = 50
              ItemHeight = 13
              TabOrder = 16
              OnChange = ComboBox75Change
            end
            object ComboBox76: TComboBox
              Left = 104
              Top = 208
              Width = 41
              Height = 21
              Style = csDropDownList
              ImeMode = imHanguel
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 17
              Text = '+0'
              OnChange = ComboBox76Change
              Items.Strings = (
                '+0'
                '+1'
                '+2'
                '+3')
            end
            object ComboBox77: TComboBox
              Left = 152
              Top = 208
              Width = 81
              Height = 21
              Style = csDropDownList
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 18
              Text = 'S Grade'
              OnChange = ComboBox77Change
              Items.Strings = (
                'S Grade'
                'A Grade'
                'B Grade'
                'C Grade'
                'D Grade'
                'Non Grade')
            end
            object ComboBox78: TComboBox
              Left = 240
              Top = 208
              Width = 313
              Height = 21
              Style = csDropDownList
              DropDownCount = 50
              ItemHeight = 13
              TabOrder = 19
              OnChange = ComboBox78Change
            end
            object ComboBox79: TComboBox
              Left = 104
              Top = 240
              Width = 41
              Height = 21
              Style = csDropDownList
              ImeMode = imHanguel
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 20
              Text = '+0'
              OnChange = ComboBox79Change
              Items.Strings = (
                '+0'
                '+1'
                '+2'
                '+3')
            end
            object ComboBox80: TComboBox
              Left = 152
              Top = 240
              Width = 81
              Height = 21
              Style = csDropDownList
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 21
              Text = 'S Grade'
              OnChange = ComboBox80Change
              Items.Strings = (
                'S Grade'
                'A Grade'
                'B Grade'
                'C Grade'
                'D Grade'
                'Non Grade')
            end
            object ComboBox81: TComboBox
              Left = 240
              Top = 240
              Width = 313
              Height = 21
              Style = csDropDownList
              DropDownCount = 50
              ItemHeight = 13
              TabOrder = 22
              OnChange = ComboBox81Change
            end
            object ComboBox82: TComboBox
              Left = 240
              Top = 272
              Width = 201
              Height = 21
              Style = csDropDownList
              ItemHeight = 13
              TabOrder = 23
            end
            object ComboBox83: TComboBox
              Left = 104
              Top = 312
              Width = 41
              Height = 21
              Style = csDropDownList
              ImeMode = imHanguel
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 24
              Text = '+0'
              OnChange = ComboBox83Change
              Items.Strings = (
                '+0'
                '+1'
                '+2'
                '+3')
            end
            object ComboBox84: TComboBox
              Left = 152
              Top = 312
              Width = 81
              Height = 21
              Style = csDropDownList
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 25
              Text = 'S Grade'
              OnChange = ComboBox84Change
              Items.Strings = (
                'S Grade'
                'A Grade'
                'B Grade'
                'C Grade'
                'D Grade'
                'Non Grade')
            end
            object ComboBox85: TComboBox
              Left = 240
              Top = 312
              Width = 233
              Height = 21
              Style = csDropDownList
              DropDownCount = 50
              ItemHeight = 13
              TabOrder = 26
              OnChange = ComboBox85Change
            end
            object ComboBox86: TComboBox
              Left = 104
              Top = 344
              Width = 41
              Height = 21
              Style = csDropDownList
              ImeMode = imHanguel
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 27
              Text = '+0'
              OnChange = ComboBox86Change
              Items.Strings = (
                '+0'
                '+1'
                '+2'
                '+3')
            end
            object ComboBox87: TComboBox
              Left = 152
              Top = 344
              Width = 81
              Height = 21
              Style = csDropDownList
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 28
              Text = 'S Grade'
              OnChange = ComboBox87Change
              Items.Strings = (
                'S Grade'
                'A Grade'
                'B Grade'
                'C Grade'
                'D Grade'
                'Non Grade')
            end
            object ComboBox88: TComboBox
              Left = 240
              Top = 344
              Width = 233
              Height = 21
              Style = csDropDownList
              DropDownCount = 50
              ItemHeight = 13
              TabOrder = 29
              OnChange = ComboBox88Change
            end
            object ComboBox89: TComboBox
              Left = 240
              Top = 376
              Width = 233
              Height = 21
              Style = csDropDownList
              DropDownCount = 50
              ItemHeight = 13
              TabOrder = 30
              OnChange = ComboBox89Change
            end
            object ComboBox90: TComboBox
              Left = 152
              Top = 376
              Width = 81
              Height = 21
              Style = csDropDownList
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 31
              Text = 'S Grade'
              OnChange = ComboBox90Change
              Items.Strings = (
                'S Grade'
                'A Grade'
                'B Grade'
                'C Grade'
                'D Grade'
                'Non Grade')
            end
            object ComboBox91: TComboBox
              Left = 104
              Top = 376
              Width = 41
              Height = 21
              Style = csDropDownList
              ImeMode = imHanguel
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 32
              Text = '+0'
              OnChange = ComboBox91Change
              Items.Strings = (
                '+0'
                '+1'
                '+2'
                '+3')
            end
            object ComboBox92: TComboBox
              Left = 104
              Top = 408
              Width = 41
              Height = 21
              Style = csDropDownList
              ImeMode = imHanguel
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 33
              Text = '+0'
              OnChange = ComboBox92Change
              Items.Strings = (
                '+0'
                '+1'
                '+2'
                '+3')
            end
            object ComboBox93: TComboBox
              Left = 104
              Top = 440
              Width = 41
              Height = 21
              Style = csDropDownList
              ImeMode = imHanguel
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 34
              Text = '+0'
              OnChange = ComboBox93Change
              Items.Strings = (
                '+0'
                '+1'
                '+2'
                '+3')
            end
            object ComboBox94: TComboBox
              Left = 152
              Top = 408
              Width = 81
              Height = 21
              Style = csDropDownList
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 35
              Text = 'S Grade'
              OnChange = ComboBox94Change
              Items.Strings = (
                'S Grade'
                'A Grade'
                'B Grade'
                'C Grade'
                'D Grade'
                'Non Grade')
            end
            object ComboBox95: TComboBox
              Left = 152
              Top = 440
              Width = 81
              Height = 21
              Style = csDropDownList
              ItemHeight = 13
              ItemIndex = 0
              TabOrder = 36
              Text = 'S Grade'
              OnChange = ComboBox95Change
              Items.Strings = (
                'S Grade'
                'A Grade'
                'B Grade'
                'C Grade'
                'D Grade'
                'Non Grade')
            end
            object ComboBox96: TComboBox
              Left = 240
              Top = 408
              Width = 233
              Height = 21
              Style = csDropDownList
              DropDownCount = 50
              ItemHeight = 13
              TabOrder = 37
              OnChange = ComboBox96Change
            end
            object ComboBox97: TComboBox
              Left = 240
              Top = 440
              Width = 233
              Height = 21
              Style = csDropDownList
              DropDownCount = 50
              ItemHeight = 13
              TabOrder = 38
              OnChange = ComboBox97Change
            end
            object GroupBox11: TGroupBox
              Left = 488
              Top = 312
              Width = 297
              Height = 145
              Caption = 'Other'
              TabOrder = 39
              object Lifon: TCheckBox
                Left = 80
                Top = 26
                Width = 121
                Height = 17
                Caption = 'Crystal Swimsuit Set'
                TabOrder = 0
                OnClick = LifonClick
              end
              object ComboBox108: TComboBox
                Left = 24
                Top = 24
                Width = 41
                Height = 21
                Style = csDropDownList
                ImeMode = imHanguel
                ItemHeight = 13
                ItemIndex = 0
                TabOrder = 1
                Text = '+0'
                OnChange = ComboBox108Change
                Items.Strings = (
                  '+0'
                  '+1'
                  '+2'
                  '+3'
                  '+4'
                  '+5'
                  '+6'
                  '+7'
                  '+8'
                  '+9'
                  '+10')
              end
            end
            object GroupBox13: TGroupBox
              Left = 568
              Top = 48
              Width = 217
              Height = 217
              Caption = 'Augmentation'
              TabOrder = 40
              object Label147: TLabel
                Left = 147
                Top = 24
                Width = 11
                Height = 20
                Caption = '+'
                Font.Charset = DEFAULT_CHARSET
                Font.Color = clWindowText
                Font.Height = -16
                Font.Name = 'MS Sans Serif'
                Font.Style = [fsBold]
                ParentFont = False
              end
              object Label148: TLabel
                Left = 147
                Top = 48
                Width = 11
                Height = 20
                Caption = '+'
                Font.Charset = DEFAULT_CHARSET
                Font.Color = clWindowText
                Font.Height = -16
                Font.Name = 'MS Sans Serif'
                Font.Style = [fsBold]
                ParentFont = False
              end
              object Label149: TLabel
                Left = 147
                Top = 72
                Width = 11
                Height = 20
                Caption = '+'
                Font.Charset = DEFAULT_CHARSET
                Font.Color = clWindowText
                Font.Height = -16
                Font.Name = 'MS Sans Serif'
                Font.Style = [fsBold]
                ParentFont = False
              end
              object Label150: TLabel
                Left = 147
                Top = 96
                Width = 11
                Height = 20
                Caption = '+'
                Font.Charset = DEFAULT_CHARSET
                Font.Color = clWindowText
                Font.Height = -16
                Font.Name = 'MS Sans Serif'
                Font.Style = [fsBold]
                ParentFont = False
              end
              object AugB1: TSpeedButton
                Left = 160
                Top = 24
                Width = 49
                Height = 22
                Enabled = False
                Flat = True
                Font.Charset = DEFAULT_CHARSET
                Font.Color = clWindowText
                Font.Height = -13
                Font.Name = 'MS Sans Serif'
                Font.Style = [fsBold]
                Layout = blGlyphTop
                ParentFont = False
                Spacing = 0
                OnClick = AugB1Click
              end
              object AugB2: TSpeedButton
                Left = 160
                Top = 48
                Width = 49
                Height = 22
                Enabled = False
                Flat = True
                Font.Charset = DEFAULT_CHARSET
                Font.Color = clWindowText
                Font.Height = -13
                Font.Name = 'MS Sans Serif'
                Font.Style = [fsBold]
                ParentFont = False
                Spacing = 0
                OnClick = AugB2Click
              end
              object AugB3: TSpeedButton
                Left = 160
                Top = 72
                Width = 49
                Height = 22
                Enabled = False
                Flat = True
                Font.Charset = DEFAULT_CHARSET
                Font.Color = clWindowText
                Font.Height = -13
                Font.Name = 'MS Sans Serif'
                Font.Style = [fsBold]
                ParentFont = False
                Spacing = 0
                OnClick = AugB3Click
              end
              object AugB4: TSpeedButton
                Left = 160
                Top = 96
                Width = 49
                Height = 22
                Enabled = False
                Flat = True
                Font.Charset = DEFAULT_CHARSET
                Font.Color = clWindowText
                Font.Height = -13
                Font.Name = 'MS Sans Serif'
                Font.Style = [fsBold]
                ParentFont = False
                Spacing = 0
                OnClick = AugB4Click
              end
              object Aug1: TComboBox
                Left = 16
                Top = 24
                Width = 129
                Height = 21
                Style = csDropDownList
                DropDownCount = 20
                ItemHeight = 13
                ItemIndex = 0
                TabOrder = 0
                Text = '-'
                OnChange = Aug1Change
                Items.Strings = (
                  '-'
                  'Accuracy'
                  'CON'
                  'CP'
                  'CP Recovery'
                  'Critical'
                  'Evasion'
                  'HP'
                  'HP Recovery'
                  'INT'
                  'M. Atk.'
                  'M. Def.'
                  'MEN'
                  'MP'
                  'MP Recovery'
                  'P. Atk.'
                  'P. Def.'
                  'STR')
              end
              object Aug2: TComboBox
                Left = 16
                Top = 48
                Width = 129
                Height = 21
                Style = csDropDownList
                DropDownCount = 20
                ItemHeight = 13
                ItemIndex = 0
                TabOrder = 1
                Text = '-'
                OnChange = Aug2Change
                Items.Strings = (
                  '-'
                  'Accuracy'
                  'CON'
                  'CP'
                  'CP Recovery'
                  'Critical'
                  'Evasion'
                  'HP'
                  'HP Recovery'
                  'INT'
                  'M. Atk.'
                  'M. Def.'
                  'MEN'
                  'MP'
                  'MP Recovery'
                  'P. Atk.'
                  'P. Def.'
                  'STR')
              end
              object Aug3: TComboBox
                Left = 16
                Top = 72
                Width = 129
                Height = 21
                Style = csDropDownList
                DropDownCount = 20
                ItemHeight = 13
                ItemIndex = 0
                TabOrder = 2
                Text = '-'
                OnChange = Aug3Change
                Items.Strings = (
                  '-'
                  'Accuracy'
                  'CON'
                  'CP'
                  'CP Recovery'
                  'Critical'
                  'Evasion'
                  'HP'
                  'HP Recovery'
                  'INT'
                  'M. Atk.'
                  'M. Def.'
                  'MEN'
                  'MP'
                  'MP Recovery'
                  'P. Atk.'
                  'P. Def.'
                  'STR')
              end
              object Aug4: TComboBox
                Left = 16
                Top = 96
                Width = 129
                Height = 21
                Style = csDropDownList
                DropDownCount = 20
                ItemHeight = 13
                ItemIndex = 0
                TabOrder = 3
                Text = '-'
                OnChange = Aug4Change
                Items.Strings = (
                  '-'
                  'Accuracy'
                  'CON'
                  'CP'
                  'CP Recovery'
                  'Critical'
                  'Evasion'
                  'HP'
                  'HP Recovery'
                  'INT'
                  'M. Atk.'
                  'M. Def.'
                  'MEN'
                  'MP'
                  'MP Recovery'
                  'P. Atk.'
                  'P. Def.'
                  'STR')
              end
              object AugE1: TEdit
                Left = 168
                Top = 27
                Width = 33
                Height = 15
                BorderStyle = bsNone
                TabOrder = 4
                Text = '12'
                Visible = False
                OnExit = AugE1Exit
                OnKeyPress = AugE1KeyPress
              end
              object AugE2: TEdit
                Left = 168
                Top = 51
                Width = 33
                Height = 15
                BorderStyle = bsNone
                TabOrder = 5
                Text = '12'
                Visible = False
                OnExit = AugE2Exit
                OnKeyPress = AugE2KeyPress
              end
              object AugE3: TEdit
                Left = 168
                Top = 75
                Width = 33
                Height = 15
                BorderStyle = bsNone
                TabOrder = 6
                Text = '12'
                Visible = False
                OnExit = AugE3Exit
                OnKeyPress = AugE3KeyPress
              end
              object AugE4: TEdit
                Left = 168
                Top = 99
                Width = 33
                Height = 15
                BorderStyle = bsNone
                TabOrder = 7
                Text = '12'
                Visible = False
                OnExit = AugE4Exit
                OnKeyPress = AugE4KeyPress
              end
            end
          end
        end
      end
    end
    object TTabPage
      Left = 4
      Top = 24
      Caption = 'Passive Skills'
      object GroupBox7: TGroupBox
        Left = 0
        Top = 0
        Width = 793
        Height = 489
        TabOrder = 0
        object GroupBox8: TGroupBox
          Left = 8
          Top = 64
          Width = 761
          Height = 81
          Caption = 'Weapon Mastery'
          TabOrder = 0
          object WeaponMastery: TComboBox
            Left = 48
            Top = 16
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 0
            OnChange = ChangePS
          end
          object IsWeaponMastery: TCheckBox
            Left = 24
            Top = 16
            Width = 17
            Height = 17
            TabOrder = 1
            OnClick = IsWeaponMasteryClick
          end
          object IsSwordMastery: TCheckBox
            Left = 24
            Top = 48
            Width = 17
            Height = 17
            TabOrder = 2
            OnClick = IsSwordMasteryClick
          end
          object SwordMastery: TComboBox
            Left = 48
            Top = 48
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 3
            OnChange = ChangePS
          end
          object DaggerMastery: TComboBox
            Left = 296
            Top = 16
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 4
            OnChange = ChangePS
          end
          object PolearmMastery: TComboBox
            Left = 296
            Top = 48
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 5
            OnChange = ChangePS
          end
          object IsDaggerMastery: TCheckBox
            Left = 272
            Top = 16
            Width = 17
            Height = 17
            TabOrder = 6
            OnClick = IsDaggerMasteryClick
          end
          object IsPolearmMastery: TCheckBox
            Left = 272
            Top = 48
            Width = 17
            Height = 17
            TabOrder = 7
            OnClick = IsPolearmMasteryClick
          end
          object IsBowMastery: TCheckBox
            Left = 520
            Top = 16
            Width = 17
            Height = 17
            TabOrder = 8
            OnClick = IsBowMasteryClick
          end
          object BowMastery: TComboBox
            Left = 544
            Top = 16
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 9
            OnChange = ChangePS
          end
          object DualSwordMastery: TComboBox
            Left = 544
            Top = 48
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 10
            OnChange = ChangePS
          end
          object TwoHandsMastery: TComboBox
            Left = 544
            Top = 48
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 11
            OnChange = ChangePS
          end
          object IsTwoHandsMastery: TCheckBox
            Left = 520
            Top = 48
            Width = 17
            Height = 17
            TabOrder = 12
            OnClick = IsTwoHandsMasteryClick
          end
          object IsDualSwordMastery: TCheckBox
            Left = 520
            Top = 48
            Width = 17
            Height = 17
            TabOrder = 13
            OnClick = IsDualSwordMasteryClick
          end
          object IsBluntMastery: TCheckBox
            Left = 272
            Top = 16
            Width = 17
            Height = 17
            TabOrder = 14
            OnClick = IsBluntMasteryClick
          end
          object BluntMastery: TComboBox
            Left = 296
            Top = 16
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 15
            OnChange = ChangePS
          end
          object FistMastery: TComboBox
            Left = 48
            Top = 48
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 16
            OnChange = ChangePS
          end
          object IsFistMastery: TCheckBox
            Left = 24
            Top = 48
            Width = 17
            Height = 17
            TabOrder = 17
            OnClick = IsFistMasteryClick
          end
        end
        object AutoSelect: TCheckBox
          Left = 24
          Top = 24
          Width = 321
          Height = 25
          Caption = 'Auto-select my passives'
          Checked = True
          State = cbChecked
          TabOrder = 1
          OnClick = AutoSelectClick
        end
        object GroupBox: TGroupBox
          Left = 8
          Top = 152
          Width = 761
          Height = 81
          Caption = 'Defense'
          TabOrder = 2
          object ArmorMastery: TComboBox
            Left = 48
            Top = 16
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 0
            OnChange = ChangePS
          end
          object IsArmorMastery: TCheckBox
            Left = 24
            Top = 16
            Width = 17
            Height = 17
            TabOrder = 1
            OnClick = IsArmorMasteryClick
          end
          object IsHvArmorMastery: TCheckBox
            Left = 272
            Top = 16
            Width = 17
            Height = 17
            TabOrder = 2
            OnClick = IsHvArmorMasteryClick
          end
          object HvArmorMastery: TComboBox
            Left = 296
            Top = 16
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 3
            OnChange = ChangePS
          end
          object IsLgArmorMastery: TCheckBox
            Left = 520
            Top = 16
            Width = 17
            Height = 17
            TabOrder = 4
            OnClick = IsLgArmorMasteryClick
          end
          object LgArmorMastery: TComboBox
            Left = 544
            Top = 16
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 5
            OnChange = ChangePS
          end
          object IsRobeMastery: TCheckBox
            Left = 24
            Top = 48
            Width = 17
            Height = 17
            TabOrder = 6
            OnClick = IsRobeMasteryClick
          end
          object RobeMastery: TComboBox
            Left = 48
            Top = 48
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 7
            OnChange = ChangePS
          end
          object IsAntiMagic: TCheckBox
            Left = 272
            Top = 48
            Width = 17
            Height = 17
            TabOrder = 8
            OnClick = IsAntiMagicClick
          end
          object AntiMagic: TComboBox
            Left = 296
            Top = 44
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 9
            OnChange = ChangePS
          end
          object IsMagicResistance: TCheckBox
            Left = 520
            Top = 48
            Width = 17
            Height = 17
            TabOrder = 10
            OnClick = IsMagicResistanceClick
          end
          object MagicResistance: TComboBox
            Left = 544
            Top = 44
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 11
            OnChange = ChangePS
          end
        end
        object GroupBox9: TGroupBox
          Left = 8
          Top = 240
          Width = 761
          Height = 241
          Caption = 'Misc.'
          TabOrder = 3
          object IsClearMind: TCheckBox
            Left = 24
            Top = 16
            Width = 17
            Height = 17
            TabOrder = 0
            OnClick = IsClearMindClick
          end
          object IsAcrobaticMove: TCheckBox
            Left = 272
            Top = 112
            Width = 17
            Height = 17
            TabOrder = 1
            OnClick = IsAcrobaticMoveClick
          end
          object IsBoostMana: TCheckBox
            Left = 272
            Top = 16
            Width = 17
            Height = 17
            TabOrder = 2
            OnClick = IsBoostManaClick
          end
          object IsFastSpellCasting: TCheckBox
            Left = 520
            Top = 16
            Width = 17
            Height = 17
            TabOrder = 3
            OnClick = IsFastSpellCastingClick
          end
          object IsFastHPRecovery: TCheckBox
            Left = 24
            Top = 48
            Width = 17
            Height = 17
            TabOrder = 4
            OnClick = IsFastHPRecoveryClick
          end
          object IsFastManaRecovery: TCheckBox
            Left = 272
            Top = 48
            Width = 17
            Height = 17
            TabOrder = 5
            OnClick = IsFastManaRecoveryClick
          end
          object IsQuickStep: TCheckBox
            Left = 520
            Top = 48
            Width = 17
            Height = 17
            TabOrder = 6
            OnClick = IsQuickStepClick
          end
          object IsBoostEvasion: TCheckBox
            Left = 24
            Top = 80
            Width = 17
            Height = 17
            TabOrder = 7
            OnClick = IsBoostEvasionClick
          end
          object IsShadowSence: TCheckBox
            Left = 272
            Top = 80
            Width = 17
            Height = 17
            TabOrder = 8
            OnClick = IsShadowSenceClick
          end
          object IsEsprit: TCheckBox
            Left = 520
            Top = 80
            Width = 17
            Height = 17
            TabOrder = 9
            OnClick = IsEspritClick
          end
          object IsCriticalPower: TCheckBox
            Left = 24
            Top = 112
            Width = 17
            Height = 17
            TabOrder = 10
            OnClick = IsCriticalPowerClick
          end
          object ClearMind: TComboBox
            Left = 48
            Top = 16
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 11
            OnChange = ChangePS
          end
          object BoostMana: TComboBox
            Left = 296
            Top = 16
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 12
            OnChange = ChangePS
          end
          object FastSpellCasting: TComboBox
            Left = 544
            Top = 16
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 13
            OnChange = ChangePS
          end
          object FastHPRecovery: TComboBox
            Left = 48
            Top = 48
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 14
            OnChange = ChangePS
          end
          object FastManaRecovery: TComboBox
            Left = 296
            Top = 48
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 15
            OnChange = ChangePS
          end
          object QuickStep: TComboBox
            Left = 544
            Top = 48
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 16
            OnChange = ChangePS
          end
          object BoostEvasion: TComboBox
            Left = 48
            Top = 80
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 17
            OnChange = ChangePS
          end
          object ShadowSence: TComboBox
            Left = 296
            Top = 80
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            ItemIndex = 0
            TabOrder = 18
            Text = 'Shadow Sense'
            OnChange = ShadowSenceChange
            Items.Strings = (
              'Shadow Sense')
          end
          object Esprit: TComboBox
            Left = 544
            Top = 80
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 19
            OnChange = ChangePS
          end
          object CriticalPower: TComboBox
            Left = 48
            Top = 112
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 20
            OnChange = ChangePS
          end
          object AcrobaticMove: TComboBox
            Left = 296
            Top = 112
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 21
            OnChange = ChangePS
          end
          object IsBoostHP: TCheckBox
            Left = 24
            Top = 208
            Width = 17
            Height = 17
            TabOrder = 22
            OnClick = IsBoostHPClick
          end
          object BoostHP: TComboBox
            Left = 48
            Top = 208
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 23
            OnChange = ChangePS
          end
          object WeightLimit: TComboBox
            Left = 48
            Top = 144
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 24
            OnChange = ChangePS
          end
          object IsWeightLimit: TCheckBox
            Left = 24
            Top = 144
            Width = 17
            Height = 17
            TabOrder = 25
            OnClick = IsWeightLimitClick
          end
          object VitalForce: TComboBox
            Left = 296
            Top = 144
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 26
            OnChange = ChangePS
          end
          object IsVitalForce: TCheckBox
            Left = 272
            Top = 144
            Width = 17
            Height = 17
            TabOrder = 27
            OnClick = IsVitalForceClick
          end
          object FinalFortress: TComboBox
            Left = 544
            Top = 144
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 28
            OnChange = ChangePS
          end
          object IsFinalFortress: TCheckBox
            Left = 520
            Top = 144
            Width = 17
            Height = 17
            TabOrder = 29
            OnClick = IsFinalFortressClick
          end
          object ShieldMastery: TComboBox
            Left = 48
            Top = 176
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 30
            OnChange = ChangePS
          end
          object IsShieldMastery: TCheckBox
            Left = 24
            Top = 176
            Width = 17
            Height = 17
            TabOrder = 31
            OnClick = IsShieldMasteryClick
          end
          object FocusMind: TComboBox
            Left = 296
            Top = 176
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 32
            OnChange = ChangePS
          end
          object IsFocusMind: TCheckBox
            Left = 272
            Top = 176
            Width = 17
            Height = 17
            TabOrder = 33
            OnClick = IsFocusMindClick
          end
          object CriticalChance: TComboBox
            Left = 544
            Top = 112
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 34
            OnChange = ChangePS
          end
          object IsCriticalChance: TCheckBox
            Left = 520
            Top = 112
            Width = 17
            Height = 17
            TabOrder = 35
            OnClick = IsCriticalChanceClick
          end
          object FinalFrenzy: TComboBox
            Left = 296
            Top = 208
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 36
            OnChange = ChangePS
          end
          object IsFinalFrenzy: TCheckBox
            Left = 272
            Top = 208
            Width = 17
            Height = 17
            TabOrder = 37
            OnClick = IsFinalFrenzyClick
          end
          object BoostAtkSpeed: TComboBox
            Left = 544
            Top = 208
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 38
            OnChange = ChangePS
          end
          object IsBoostAtkSpeed: TCheckBox
            Left = 520
            Top = 208
            Width = 17
            Height = 17
            TabOrder = 39
            OnClick = IsBoostAtkSpeedClick
          end
          object IsQuiverOfHolding: TCheckBox
            Left = 24
            Top = 208
            Width = 17
            Height = 17
            TabOrder = 40
            OnClick = IsQuiverOfHoldingClick
          end
          object QuiverOfHolding: TComboBox
            Left = 48
            Top = 208
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 41
            OnChange = ChangePS
          end
          object IsAgileMovement: TCheckBox
            Left = 520
            Top = 176
            Width = 17
            Height = 17
            TabOrder = 42
            OnClick = IsAgileMovementClick
          end
          object AgileMovement: TComboBox
            Left = 544
            Top = 176
            Width = 185
            Height = 21
            Style = csDropDownList
            ItemHeight = 13
            TabOrder = 43
            OnChange = ChangePS
          end
        end
      end
    end
    object TTabPage
      Left = 4
      Top = 24
      Caption = 'Self Buffs, Toggles'
      object GroupBox12: TGroupBox
        Left = 0
        Top = 0
        Width = 793
        Height = 489
        TabOrder = 0
        object Label123: TLabel
          Left = 8
          Top = 24
          Width = 15
          Height = 13
          Caption = 'HP'
        end
        object Label124: TLabel
          Left = 8
          Top = 48
          Width = 16
          Height = 13
          Caption = 'MP'
        end
        object Label125: TLabel
          Left = 8
          Top = 72
          Width = 32
          Height = 13
          Caption = 'P. Atk.'
        end
        object Label126: TLabel
          Left = 8
          Top = 96
          Width = 34
          Height = 13
          Caption = 'M. Atk.'
        end
        object Label127: TLabel
          Left = 8
          Top = 120
          Width = 33
          Height = 13
          Caption = 'P. Def.'
        end
        object Label128: TLabel
          Left = 8
          Top = 144
          Width = 35
          Height = 13
          Caption = 'M. Def.'
        end
        object Label129: TLabel
          Left = 8
          Top = 168
          Width = 45
          Height = 13
          Caption = 'Accuracy'
        end
        object Label130: TLabel
          Left = 8
          Top = 192
          Width = 38
          Height = 13
          Caption = 'Evasion'
        end
        object Label131: TLabel
          Left = 8
          Top = 216
          Width = 31
          Height = 13
          Caption = 'Critical'
        end
        object Label132: TLabel
          Left = 8
          Top = 240
          Width = 31
          Height = 13
          Caption = 'Speed'
        end
        object Label133: TLabel
          Left = 8
          Top = 264
          Width = 53
          Height = 13
          Caption = 'Atk. Speed'
        end
        object Label134: TLabel
          Left = 8
          Top = 288
          Width = 58
          Height = 13
          Caption = 'Cast. Speed'
        end
        object Label135: TLabel
          Left = 8
          Top = 312
          Width = 46
          Height = 13
          Caption = 'Crit. Dmg.'
        end
        object Label137: TLabel
          Left = 8
          Top = 360
          Width = 29
          Height = 13
          Caption = 'Shield'
        end
        object Label138: TLabel
          Left = 8
          Top = 384
          Width = 32
          Height = 13
          Caption = 'Regen'
        end
        object Label140: TLabel
          Left = 8
          Top = 408
          Width = 50
          Height = 13
          Caption = 'Refl. Dmg.'
        end
        object Label141: TLabel
          Left = 8
          Top = 432
          Width = 25
          Height = 13
          Caption = 'Misc.'
        end
        object Label136: TLabel
          Left = 8
          Top = 336
          Width = 60
          Height = 13
          Caption = 'MP Consum.'
        end
        object IsBindingBlow: TCheckBox
          Left = 80
          Top = 240
          Width = 17
          Height = 17
          TabOrder = 0
          OnClick = IsBindingBlowClick
        end
        object BindingBlow: TComboBox
          Left = 104
          Top = 240
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 1
          Text = 'Binding Blow'
          Items.Strings = (
            'Binding Blow')
        end
        object IsRapidShot: TCheckBox
          Left = 80
          Top = 264
          Width = 17
          Height = 17
          TabOrder = 2
          OnClick = IsRapidShotClick
        end
        object RapidShot: TComboBox
          Left = 104
          Top = 264
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 3
          Text = 'Rapid Shot 1'
          OnChange = RapidShotChange
          Items.Strings = (
            'Rapid Shot 1'
            'Rapid Shot 2')
        end
        object SoulOfSaggitarius: TComboBox
          Left = 104
          Top = 48
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 4
          Text = 'Soul of Saggitarius 1'
          OnChange = SoulOfSaggitariusChange
          Items.Strings = (
            'Soul of Saggitarius 1'
            'Soul of Saggitarius 2'
            'Soul of Saggitarius 3'
            'Soul of Saggitarius 4')
        end
        object IsSoulOfSaggitarius: TCheckBox
          Left = 80
          Top = 48
          Width = 17
          Height = 17
          TabOrder = 5
          OnClick = IsSoulOfSaggitariusClick
        end
        object IsManaRegeneration: TCheckBox
          Left = 80
          Top = 384
          Width = 17
          Height = 17
          TabOrder = 6
          OnClick = IsManaRegenerationClick
        end
        object ManaRegeneration: TComboBox
          Left = 104
          Top = 384
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 7
          Text = 'Mana Regeneration 1'
          OnChange = ManaRegenerationChange
          Items.Strings = (
            'Mana Regeneration 1'
            'Mana Regeneration 2'
            'Mana Regeneration 3'
            'Mana Regeneration 4')
        end
        object SpiritBarrier: TComboBox
          Left = 104
          Top = 144
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 8
          Text = 'Spirit Barrier 1'
          OnChange = SpiritBarrierChange
          Items.Strings = (
            'Spirit Barrier 1'
            'Spirit Barrier 2'
            'Spirit Barrier 3'
            '')
        end
        object IsUltEvasion: TCheckBox
          Left = 80
          Top = 192
          Width = 17
          Height = 17
          TabOrder = 9
          OnClick = IsUltEvasionClick
        end
        object IsSpiritBarrier: TCheckBox
          Left = 80
          Top = 144
          Width = 17
          Height = 17
          TabOrder = 10
          OnClick = IsSpiritBarrierClick
        end
        object UltEvasion: TComboBox
          Left = 104
          Top = 192
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 11
          Text = 'Ultimate Evasion 1'
          OnChange = UltEvasionChange
          Items.Strings = (
            'Ultimate Evasion 1'
            'Ultimate Evasion 2')
        end
        object Hawkeye: TComboBox
          Left = 104
          Top = 168
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 12
          Text = 'Hawk Eye 1'
          OnChange = HawkeyeChange
          Items.Strings = (
            'Hawk Eye 1'
            'Hawk Eye 2'
            'Hawk Eye 3')
        end
        object IsHawkeye: TCheckBox
          Left = 80
          Top = 168
          Width = 17
          Height = 17
          TabOrder = 13
          OnClick = IsHawkeyeClick
        end
        object Dash: TComboBox
          Left = 280
          Top = 240
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 14
          Text = 'Dash 1'
          OnChange = DashChange
          Items.Strings = (
            'Dash 1'
            'Dash 2')
        end
        object IsDash: TCheckBox
          Left = 256
          Top = 240
          Width = 17
          Height = 17
          TabOrder = 15
          OnClick = IsDashClick
        end
        object Snipe: TComboBox
          Left = 104
          Top = 456
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 16
          Text = 'Snipe 1'
          OnChange = SnipeChange
          Items.Strings = (
            'Snipe 1'
            'Snipe 2'
            'Snipe 3'
            'Snipe 4'
            'Snipe 5'
            'Snipe 6'
            'Snipe 7'
            'Snipe 8')
        end
        object IsSnipe: TCheckBox
          Left = 80
          Top = 456
          Width = 17
          Height = 17
          TabOrder = 17
          OnClick = IsSnipeClick
        end
        object FocusDagger: TComboBox
          Left = 280
          Top = 456
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          TabOrder = 18
          OnChange = FocusDaggerChange
          Items.Strings = (
            'Focus Death'
            'Focus Power'
            'Focus Chance')
        end
        object IsFocusDagger: TCheckBox
          Left = 256
          Top = 456
          Width = 17
          Height = 17
          TabOrder = 19
          OnClick = IsFocusDaggerClick
        end
        object Invocation: TComboBox
          Left = 632
          Top = 464
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 20
          Text = 'Invocation'
          OnChange = InvocationChange
          Items.Strings = (
            'Invocation')
        end
        object IsInvocation: TCheckBox
          Left = 80
          Top = 456
          Width = 17
          Height = 17
          TabOrder = 21
          OnClick = IsInvocationClick
        end
        object DefenceAura: TComboBox
          Left = 104
          Top = 120
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 22
          Text = 'Defense Aura 1'
          OnChange = DefenceAuraChange
          Items.Strings = (
            'Defense Aura 1'
            'Defense Aura 2')
        end
        object IsDefenceAura: TCheckBox
          Left = 80
          Top = 120
          Width = 17
          Height = 17
          TabOrder = 23
          OnClick = IsDefenceAuraClick
        end
        object AttackAura: TComboBox
          Left = 104
          Top = 72
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 24
          Text = 'Attack Aura 1'
          OnChange = AttackAuraChange
          Items.Strings = (
            'Attack Aura 1'
            'Attack Aura 2')
        end
        object IsAttackAura: TCheckBox
          Left = 80
          Top = 72
          Width = 17
          Height = 17
          TabOrder = 25
          OnClick = IsAttackAuraClick
        end
        object UltDefense: TComboBox
          Left = 280
          Top = 464
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 26
          Text = 'Ultimate Defense 1'
          OnChange = UltDefenseChange
          Items.Strings = (
            'Ultimate Defense 1'
            'Ultimate Defense 2'
            'Vengeance')
        end
        object IsUltDefense: TCheckBox
          Left = 256
          Top = 464
          Width = 17
          Height = 17
          TabOrder = 27
          OnClick = IsUltDefenseClick
        end
        object DeflectArrow: TComboBox
          Left = 104
          Top = 432
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 28
          Text = 'Deflect Arrow 1'
          OnChange = DeflectArrowChange
          Items.Strings = (
            'Deflect Arrow 1'
            'Deflect Arrow 2'
            'Deflect Arrow 3'
            'Deflect Arrow 4')
        end
        object IsDeflectArrow: TCheckBox
          Left = 80
          Top = 432
          Width = 17
          Height = 17
          TabOrder = 29
          OnClick = IsDeflectArrowClick
        end
        object IsAccuracy: TCheckBox
          Left = 432
          Top = 168
          Width = 97
          Height = 17
          Caption = 'Accuracy'
          TabOrder = 30
          OnClick = IsAccuracyClick
        end
        object IsSilentMove: TCheckBox
          Left = 432
          Top = 240
          Width = 97
          Height = 17
          Caption = 'Silent Move'
          TabOrder = 31
          OnClick = IsSilentMoveClick
        end
        object IsArcaneWisdom: TCheckBox
          Left = 432
          Top = 336
          Width = 97
          Height = 17
          Caption = 'Arcane Wisdom'
          TabOrder = 32
          OnClick = IsArcaneWisdomClick
        end
        object IsParryStance: TCheckBox
          Left = 432
          Top = 432
          Width = 97
          Height = 17
          Caption = 'Parry Stance'
          TabOrder = 33
          OnClick = IsParryStanceClick
        end
        object IsRiposteStance: TCheckBox
          Left = 608
          Top = 432
          Width = 97
          Height = 17
          Caption = 'Riposte Stance'
          TabOrder = 34
          OnClick = IsRiposteStanceClick
        end
        object PolearmAccuracy: TComboBox
          Left = 632
          Top = 168
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 35
          Text = 'Polearm Accuracy 1'
          Items.Strings = (
            'Polearm Accuracy 1'
            'Polearm Accuracy 2'
            'Polearm Accuracy 3')
        end
        object IsPolearmAccuracy: TCheckBox
          Left = 608
          Top = 168
          Width = 17
          Height = 17
          TabOrder = 36
          OnClick = IsPolearmAccuracyClick
        end
        object Majesty: TComboBox
          Left = 280
          Top = 120
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 37
          Text = 'Majesty 1'
          OnChange = MajestyChange
          Items.Strings = (
            'Majesty 1'
            'Majesty 2'
            'Majesty 3')
        end
        object IsMajesty: TCheckBox
          Left = 256
          Top = 120
          Width = 17
          Height = 17
          TabOrder = 38
          OnClick = IsMajestyClick
        end
        object ShieldFortress: TComboBox
          Left = 456
          Top = 360
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 39
          Text = 'Shield Fortress 1'
          OnChange = ShieldFortressChange
          Items.Strings = (
            'Shield Fortress 1'
            'Shield Fortress 2'
            'Shield Fortress 3'
            'Shield Fortress 4'
            'Shield Fortress 5'
            'Shield Fortress 6')
        end
        object IsShieldFortress: TCheckBox
          Left = 432
          Top = 360
          Width = 17
          Height = 17
          TabOrder = 40
          OnClick = IsShieldFortressClick
        end
        object Rage: TComboBox
          Left = 280
          Top = 72
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 41
          Text = 'Rage 1'
          OnChange = RageChange
          Items.Strings = (
            'Rage 1'
            'Rage 2')
        end
        object IsRage: TCheckBox
          Left = 256
          Top = 72
          Width = 17
          Height = 17
          TabOrder = 42
          OnClick = IsRageClick
        end
        object Frenzy: TComboBox
          Left = 104
          Top = 72
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 43
          Text = 'Frenzy 1'
          OnChange = FrenzyChange
          Items.Strings = (
            'Frenzy 1'
            'Frenzy 2'
            'Frenzy 3')
        end
        object IsFrenzy: TCheckBox
          Left = 80
          Top = 72
          Width = 17
          Height = 17
          TabOrder = 44
          OnClick = IsFrenzyClick
        end
        object Guts: TComboBox
          Left = 280
          Top = 120
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 45
          Text = 'Guts 1'
          OnChange = GutsChange
          Items.Strings = (
            'Guts 1'
            'Guts 2'
            'Guts 3')
        end
        object IsGuts: TCheckBox
          Left = 256
          Top = 120
          Width = 17
          Height = 17
          TabOrder = 46
          OnClick = IsGutsClick
        end
        object Zealot: TComboBox
          Left = 280
          Top = 432
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 47
          Text = 'Zealot 1'
          OnChange = ZealotChange
          Items.Strings = (
            'Zealot 1'
            'Zealot 2'
            'Zealot 3')
        end
        object IsZealot: TCheckBox
          Left = 256
          Top = 432
          Width = 17
          Height = 17
          TabOrder = 48
          OnClick = IsZealotClick
        end
        object IsArcaneAgility: TCheckBox
          Left = 432
          Top = 288
          Width = 97
          Height = 17
          Caption = 'Arcane Agility'
          TabOrder = 49
          OnClick = IsArcaneAgilityClick
        end
        object WarCry: TComboBox
          Left = 280
          Top = 72
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 50
          Text = 'War Cry 1'
          OnChange = WarCryChange
          Items.Strings = (
            'War Cry 1'
            'War Cry 2')
        end
        object IsWarCry: TCheckBox
          Left = 256
          Top = 72
          Width = 17
          Height = 17
          TabOrder = 51
          OnClick = IsWarCryClick
        end
        object DuelistSpirit: TComboBox
          Left = 280
          Top = 264
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 52
          Text = 'Duelist Spirit 1'
          OnChange = DuelistSpiritChange
          Items.Strings = (
            'Duelist Spirit 1'
            'Duelist Spirit 2')
        end
        object IsDuelistSpirit: TCheckBox
          Left = 256
          Top = 264
          Width = 17
          Height = 17
          TabOrder = 53
          OnClick = IsDuelistSpiritClick
        end
        object IsArcanePower: TCheckBox
          Left = 432
          Top = 96
          Width = 97
          Height = 17
          Caption = 'Arcane Power'
          TabOrder = 54
          OnClick = IsArcanePowerClick
        end
        object ViciousStance: TComboBox
          Left = 456
          Top = 312
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 55
          Text = 'Vicious Stance 1'
          OnChange = ViciousStanceChange
          Items.Strings = (
            'Vicious Stance 1'
            'Vicious Stance 2'
            'Vicious Stance 3'
            'Vicious Stance 4'
            'Vicious Stance 5'
            'Vicious Stance 6'
            'Vicious Stance 7'
            'Vicious Stance 8'
            'Vicious Stance 9'
            'Vicious Stance 10'
            'Vicious Stance 11'
            'Vicious Stance 12'
            'Vicious Stance 13'
            'Vicious Stance 14'
            'Vicious Stance 15'
            'Vicious Stance 16'
            'Vicious Stance 17'
            'Vicious Stance 18'
            'Vicious Stance 19'
            'Vicious Stance 20')
        end
        object IsViciousStance: TCheckBox
          Left = 432
          Top = 312
          Width = 17
          Height = 17
          TabOrder = 56
          OnClick = IsViciousStanceClick
        end
        object SoulCry: TComboBox
          Left = 104
          Top = 72
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 57
          Text = 'Soul Cry 1'
          OnChange = SoulCryChange
          Items.Strings = (
            'Soul Cry 1'
            'Soul Cry 2'
            'Soul Cry 3'
            'Soul Cry 4'
            'Soul Cry 5'
            'Soul Cry 6'
            'Soul Cry 7'
            'Soul Cry 8'
            'Soul Cry 9'
            'Soul Cry 10')
        end
        object IsSoulCry: TCheckBox
          Left = 80
          Top = 72
          Width = 17
          Height = 17
          TabOrder = 58
          OnClick = IsSoulCryClick
        end
        object SoulGuard: TComboBox
          Left = 104
          Top = 120
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 59
          Text = 'Soul Guard 1'
          OnChange = SoulGuardChange
          Items.Strings = (
            'Soul Guard 1'
            'Soul Guard 2'
            'Soul Guard 3'
            'Soul Guard 4'
            'Soul Guard 5'
            'Soul Guard 6'
            'Soul Guard 7'
            'Soul Guard 8'
            'Soul Guard 9'
            'Soul Guard 10'
            'Soul Guard 11'
            'Soul Guard 12'
            'Soul Guard 13')
        end
        object IsSoulGuard: TCheckBox
          Left = 80
          Top = 120
          Width = 17
          Height = 17
          TabOrder = 60
          OnClick = IsSoulGuardClick
        end
        object AngelicIcon: TComboBox
          Left = 280
          Top = 432
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 61
          Text = 'Angelic Icon 1'
          OnChange = AngelicIconChange
          Items.Strings = (
            'Angelic Icon 1'
            'Angelic Icon 2'
            'Angelic Icon 3')
        end
        object IsAngelicIcon: TCheckBox
          Left = 256
          Top = 432
          Width = 17
          Height = 17
          TabOrder = 62
          OnClick = IsAngelicIconClick
        end
        object IsAegisStance: TCheckBox
          Left = 608
          Top = 360
          Width = 97
          Height = 17
          Caption = 'Aegis Stance'
          TabOrder = 63
          OnClick = IsAegisStanceClick
        end
        object DeadEye: TComboBox
          Left = 104
          Top = 432
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 64
          Text = 'Dead Eye 1'
          OnChange = DeadEyeChange
          Items.Strings = (
            'Dead Eye 1'
            'Dead Eye 2'
            'Dead Eye 3'
            'Dead Eye 4'
            'Dead Eye 5'
            'Dead Eye 6'
            'Dead Eye 7'
            'Dead Eye 8')
        end
        object IsDeadEye: TCheckBox
          Left = 80
          Top = 432
          Width = 17
          Height = 17
          TabOrder = 65
          OnClick = IsDeadEyeClick
        end
        object GuardStance: TComboBox
          Left = 456
          Top = 120
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 66
          Text = 'Guard Stance 1'
          OnChange = GuardStanceChange
          Items.Strings = (
            'Guard Stance 1'
            'Guard Stance 2'
            'Guard Stance 3'
            'Guard Stance 4')
        end
        object IsGuardStance: TCheckBox
          Left = 432
          Top = 120
          Width = 17
          Height = 17
          TabOrder = 67
          OnClick = IsGuardStanceClick
        end
        object ReflectDamage: TComboBox
          Left = 104
          Top = 408
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 68
          Text = 'Reflect Damage 1'
          OnChange = ReflectDamageChange
          Items.Strings = (
            'Reflect Damage 1'
            'Reflect Damage 2'
            'Reflect Damage 3')
        end
        object IsReflectDamage: TCheckBox
          Left = 80
          Top = 408
          Width = 17
          Height = 17
          TabOrder = 69
          OnClick = IsReflectDamageClick
        end
        object Totem: TComboBox
          Left = 504
          Top = 464
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 70
          Text = 'Bear Spirit Totem'
          OnChange = TotemChange
          Items.Strings = (
            'Bear Spirit Totem'
            'Bison Spirit Totem'
            'Hawk Spirit Totem'
            'Ogre Spirit Totem'
            'Puma Spirit Totem'
            'Rabbit Spirit Totem'
            'Wolf Spirit Totem')
        end
        object IsTotem: TCheckBox
          Left = 80
          Top = 456
          Width = 17
          Height = 17
          TabOrder = 71
          OnClick = IsTotemClick
        end
        object IsFistFury: TCheckBox
          Left = 432
          Top = 264
          Width = 97
          Height = 17
          Caption = 'Fist Fury'
          TabOrder = 72
          OnClick = IsFistFuryClick
        end
        object FocusAttack: TComboBox
          Left = 280
          Top = 460
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 73
          Text = 'Focus Attack 1'
          OnChange = FocusAttackChange
          Items.Strings = (
            'Focus Attack 1'
            'Focus Attack 2'
            'Focus Attack 3'
            'Focus Attack 4')
        end
        object IsFocusAttack: TCheckBox
          Left = 256
          Top = 472
          Width = 17
          Height = 17
          TabOrder = 74
          OnClick = IsFocusAttackClick
        end
        object ThrillFight: TComboBox
          Left = 280
          Top = 264
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 75
          Text = 'Thrill Fight 1'
          OnChange = ThrillFightChange
          Items.Strings = (
            'Thrill Fight 1'
            'Thrill Fight 2')
        end
        object IsThrillFight: TCheckBox
          Left = 256
          Top = 264
          Width = 17
          Height = 17
          TabOrder = 76
          OnClick = IsThrillFightClick
        end
        object IsEvasionShot: TCheckBox
          Left = 256
          Top = 192
          Width = 17
          Height = 17
          TabOrder = 77
          OnClick = IsEvasionShotClick
        end
        object EvasionShot: TComboBox
          Left = 280
          Top = 192
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 78
          Text = 'Evasion Shot'
          Items.Strings = (
            'Evasion Shot')
        end
        object IsSprint: TCheckBox
          Left = 256
          Top = 240
          Width = 17
          Height = 17
          TabOrder = 79
          OnClick = IsSprintClick
        end
        object Sprint: TComboBox
          Left = 280
          Top = 240
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 80
          Text = 'Sprint 1'
          OnChange = SprintChange
          Items.Strings = (
            'Sprint 1'
            'Sprint 2')
        end
        object IsRapidFire: TCheckBox
          Left = 256
          Top = 432
          Width = 17
          Height = 17
          TabOrder = 81
          OnClick = IsRapidFireClick
        end
        object RapidFire: TComboBox
          Left = 280
          Top = 432
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 82
          Text = 'Rapid Fire 1'
          OnChange = RapidFireChange
          Items.Strings = (
            'Rapid Fire 1'
            'Rapid Fire 2'
            'Rapid Fire 3'
            'Rapid Fire 4'
            'Rapid Fire 5'
            'Rapid Fire 6'
            'Rapid Fire 7'
            'Rapid Fire 8')
        end
      end
    end
    object TTabPage
      Left = 4
      Top = 24
      Caption = 'Buffs'
      object GroupBox10: TGroupBox
        Left = 0
        Top = -3
        Width = 793
        Height = 492
        TabOrder = 0
        object Label15: TLabel
          Left = 8
          Top = 288
          Width = 58
          Height = 13
          Caption = 'Cast. Speed'
        end
        object Label16: TLabel
          Left = 8
          Top = 24
          Width = 15
          Height = 13
          Caption = 'HP'
        end
        object Label17: TLabel
          Left = 8
          Top = 48
          Width = 16
          Height = 13
          Caption = 'MP'
        end
        object Label18: TLabel
          Left = 8
          Top = 72
          Width = 32
          Height = 13
          Caption = 'P. Atk.'
        end
        object Label19: TLabel
          Left = 8
          Top = 96
          Width = 34
          Height = 13
          Caption = 'M. Atk.'
        end
        object Label20: TLabel
          Left = 8
          Top = 120
          Width = 33
          Height = 13
          Caption = 'P. Def.'
        end
        object Label21: TLabel
          Left = 8
          Top = 144
          Width = 35
          Height = 13
          Caption = 'M. Def.'
        end
        object Label22: TLabel
          Left = 8
          Top = 168
          Width = 45
          Height = 13
          Caption = 'Accuracy'
        end
        object Label23: TLabel
          Left = 8
          Top = 192
          Width = 38
          Height = 13
          Caption = 'Evasion'
        end
        object Label24: TLabel
          Left = 8
          Top = 216
          Width = 31
          Height = 13
          Caption = 'Critical'
        end
        object Label25: TLabel
          Left = 8
          Top = 240
          Width = 31
          Height = 13
          Caption = 'Speed'
        end
        object Label26: TLabel
          Left = 8
          Top = 264
          Width = 53
          Height = 13
          Caption = 'Atk. Speed'
        end
        object Label27: TLabel
          Left = 8
          Top = 312
          Width = 46
          Height = 13
          Caption = 'Crit. Dmg.'
        end
        object Label28: TLabel
          Left = 8
          Top = 336
          Width = 59
          Height = 13
          Caption = 'Vamp. Rage'
        end
        object Label29: TLabel
          Left = 8
          Top = 360
          Width = 29
          Height = 13
          Caption = 'Shield'
        end
        object Label30: TLabel
          Left = 8
          Top = 384
          Width = 32
          Height = 13
          Caption = 'Regen'
        end
        object Label31: TLabel
          Left = 8
          Top = 408
          Width = 50
          Height = 13
          Caption = 'Magic Crit.'
        end
        object Label32: TLabel
          Left = 8
          Top = 432
          Width = 50
          Height = 13
          Caption = 'Refl. Dmg.'
        end
        object Label33: TLabel
          Left = 8
          Top = 456
          Width = 25
          Height = 13
          Caption = 'Misc.'
        end
        object IsAcumen: TCheckBox
          Left = 80
          Top = 288
          Width = 17
          Height = 17
          TabOrder = 0
          OnClick = IsAcumenClick
        end
        object AcumenLvl: TComboBox
          Left = 104
          Top = 288
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 1
          Text = 'Acumen 1'
          OnChange = AcumenLvlChange
          Items.Strings = (
            'Acumen 1'
            'Acumen 2'
            'Acumen 3')
        end
        object IsBlessTB: TCheckBox
          Left = 80
          Top = 24
          Width = 17
          Height = 17
          TabOrder = 2
          OnClick = IsBlessTBClick
        end
        object BlessTBLvl: TComboBox
          Left = 104
          Top = 24
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 3
          Text = 'Bless the Body 1'
          OnChange = BlessTBLvlChange
          Items.Strings = (
            'Bless the Body 1'
            'Bless the Body 2'
            'Bless the Body 3'
            'Bless the Body 4'
            'Bless the Body 5'
            'Bless the Body 6')
        end
        object IsVitality: TCheckBox
          Left = 272
          Top = 24
          Width = 137
          Height = 17
          Caption = 'Song of Vitality'
          TabOrder = 4
          OnClick = IsVitalityClick
        end
        object IsBlessTS: TCheckBox
          Left = 80
          Top = 48
          Width = 17
          Height = 17
          TabOrder = 5
          OnClick = IsBlessTSClick
        end
        object BlessTSLvl: TComboBox
          Left = 104
          Top = 48
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 6
          Text = 'Bless the Soul 1'
          OnChange = BlessTSLvlChange
          Items.Strings = (
            'Bless the Soul 1'
            'Bless the Soul 2'
            'Bless the Soul 3'
            'Bless the Soul 4'
            'Bless the Soul 5'
            'Bless the Soul 6')
        end
        object IsMight: TCheckBox
          Left = 80
          Top = 72
          Width = 17
          Height = 17
          TabOrder = 7
          OnClick = IsMightClick
        end
        object MightLvl: TComboBox
          Left = 104
          Top = 72
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 8
          Text = 'Might 1'
          OnChange = MightLvlChange
          Items.Strings = (
            'Might 1'
            'Might 2'
            'Might 3')
        end
        object IsWarrior: TCheckBox
          Left = 272
          Top = 72
          Width = 105
          Height = 17
          Caption = 'Dance of Warrior'
          TabOrder = 9
          OnClick = IsWarriorClick
        end
        object IsGrMight: TCheckBox
          Left = 416
          Top = 72
          Width = 17
          Height = 17
          TabOrder = 10
          OnClick = IsGrMightClick
        end
        object GrMightLvl: TComboBox
          Left = 440
          Top = 72
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 11
          Text = 'Greater Might 1'
          OnChange = GrMightLvlChange
          Items.Strings = (
            'Greater Might 1'
            'Greater Might 2'
            'Greater Might 3')
        end
        object IsEmpower: TCheckBox
          Left = 80
          Top = 96
          Width = 17
          Height = 17
          TabOrder = 12
          OnClick = IsEmpowerClick
        end
        object EmpowerLvl: TComboBox
          Left = 104
          Top = 96
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 13
          Text = 'Empower 1'
          OnChange = EmpowerLvlChange
          Items.Strings = (
            'Empower 1'
            'Empower 2'
            'Greater Empower 3')
        end
        object IsMystic: TCheckBox
          Left = 272
          Top = 96
          Width = 97
          Height = 17
          Caption = 'Dance of Mystic'
          TabOrder = 14
          OnClick = IsMysticClick
        end
        object IsShield: TCheckBox
          Left = 80
          Top = 120
          Width = 17
          Height = 17
          TabOrder = 15
          OnClick = IsShieldClick
        end
        object ShieldLvl: TComboBox
          Left = 104
          Top = 120
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 16
          Text = 'Shield 1'
          OnChange = ShieldLvlChange
          Items.Strings = (
            'Shield 1'
            'Shield 2'
            'Shield 3')
        end
        object IsEarth: TCheckBox
          Left = 272
          Top = 120
          Width = 97
          Height = 17
          Caption = 'Song of Earth'
          TabOrder = 17
          OnClick = IsEarthClick
        end
        object IsGrShield: TCheckBox
          Left = 416
          Top = 120
          Width = 17
          Height = 17
          TabOrder = 18
          OnClick = IsGrShieldClick
        end
        object GrShieldLvl: TComboBox
          Left = 440
          Top = 120
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 19
          Text = 'Greater Shield 1'
          OnChange = GrShieldLvlChange
          Items.Strings = (
            'Greater Shield 1'
            'Greater Shield 2'
            'Greater Shield 3')
        end
        object IsBarrier: TCheckBox
          Left = 80
          Top = 144
          Width = 17
          Height = 17
          TabOrder = 20
          OnClick = IsBarrierClick
        end
        object BarrierLvl: TComboBox
          Left = 104
          Top = 144
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 21
          Text = 'Magic Barrier 1'
          OnChange = BarrierLvlChange
          Items.Strings = (
            'Magic Barrier 1'
            'Magic Barrier 2')
        end
        object IsWarding: TCheckBox
          Left = 272
          Top = 144
          Width = 105
          Height = 17
          Caption = 'Song of Warding'
          TabOrder = 22
          OnClick = IsWardingClick
        end
        object IsGuidance: TCheckBox
          Left = 80
          Top = 168
          Width = 17
          Height = 17
          TabOrder = 23
          OnClick = IsGuidanceClick
        end
        object GuidanceLvl: TComboBox
          Left = 104
          Top = 168
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 24
          Text = 'Guidance 1'
          OnChange = GuidanceLvlChange
          Items.Strings = (
            'Guidance 1'
            'Guidance 2'
            'Guidance 3')
        end
        object IsIspiration: TCheckBox
          Left = 272
          Top = 168
          Width = 121
          Height = 17
          Caption = 'Dance of Inspiration'
          TabOrder = 25
          OnClick = IsIspirationClick
        end
        object IsAgility: TCheckBox
          Left = 80
          Top = 192
          Width = 17
          Height = 17
          TabOrder = 26
          OnClick = IsAgilityClick
        end
        object AgilityLvl: TComboBox
          Left = 104
          Top = 192
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 27
          Text = 'Agility 1'
          OnChange = AgilityLvlChange
          Items.Strings = (
            'Agility 1'
            'Agility 2'
            'Agility 3')
        end
        object IsWater: TCheckBox
          Left = 272
          Top = 192
          Width = 97
          Height = 17
          Caption = 'Song of Water'
          TabOrder = 28
          OnClick = IsWaterClick
        end
        object IsFocus: TCheckBox
          Left = 80
          Top = 216
          Width = 17
          Height = 17
          TabOrder = 29
          OnClick = IsFocusClick
        end
        object FocusLvl: TComboBox
          Left = 104
          Top = 216
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 30
          Text = 'Focus 1'
          OnChange = FocusLvlChange
          Items.Strings = (
            'Focus 1'
            'Focus 2'
            'Focus 3')
        end
        object IsHunter: TCheckBox
          Left = 272
          Top = 216
          Width = 97
          Height = 17
          Caption = 'Song of Hunter'
          TabOrder = 31
          OnClick = IsHunterClick
        end
        object IsWindWalk: TCheckBox
          Left = 80
          Top = 240
          Width = 17
          Height = 17
          TabOrder = 32
          OnClick = IsWindWalkClick
        end
        object WindWalkLvl: TComboBox
          Left = 104
          Top = 240
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 33
          Text = 'Wind Walk 1'
          OnChange = WindWalkLvlChange
          Items.Strings = (
            'Wind Walk 1'
            'Wind Walk 2')
        end
        object IsWind: TCheckBox
          Left = 272
          Top = 240
          Width = 97
          Height = 17
          Caption = 'Song of Wind'
          TabOrder = 34
          OnClick = IsWindClick
        end
        object IsShadow: TCheckBox
          Left = 416
          Top = 240
          Width = 121
          Height = 17
          Caption = 'Dance of Shadow'
          TabOrder = 35
          OnClick = IsShadowClick
        end
        object IsHaste: TCheckBox
          Left = 80
          Top = 264
          Width = 17
          Height = 17
          TabOrder = 36
          OnClick = IsHasteClick
        end
        object HasteLvl: TComboBox
          Left = 104
          Top = 264
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 37
          Text = 'Haste 1'
          OnChange = HasteLvlChange
          Items.Strings = (
            'Haste 1'
            'Haste 2')
        end
        object IsFury: TCheckBox
          Left = 272
          Top = 264
          Width = 97
          Height = 17
          Caption = 'Dance of Fury'
          TabOrder = 38
          OnClick = IsFuryClick
        end
        object IsConcentration: TCheckBox
          Left = 272
          Top = 288
          Width = 137
          Height = 17
          Caption = 'Dance of Concentration'
          TabOrder = 39
          OnClick = IsConcentrationClick
        end
        object IsWhisper: TCheckBox
          Left = 80
          Top = 312
          Width = 17
          Height = 17
          TabOrder = 40
          OnClick = IsWhisperClick
        end
        object WhisperLvl: TComboBox
          Left = 104
          Top = 312
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 41
          Text = 'Death Whisper 1'
          OnChange = WhisperLvlChange
          Items.Strings = (
            'Death Whisper 1'
            'Death Whisper 2'
            'Death Whisper 3')
        end
        object IsFire: TCheckBox
          Left = 272
          Top = 312
          Width = 97
          Height = 17
          Caption = 'Dance of Fire'
          TabOrder = 42
          OnClick = IsFireClick
        end
        object IsVamp: TCheckBox
          Left = 80
          Top = 336
          Width = 17
          Height = 17
          TabOrder = 43
          OnClick = IsVampClick
        end
        object VampLvl: TComboBox
          Left = 104
          Top = 336
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 44
          Text = 'Vampiric Rage 1'
          OnChange = VampLvlChange
          Items.Strings = (
            'Vampiric Rage 1'
            'Vampiric Rage 2'
            'Vampiric Rage 3'
            'Vampiric Rage 4')
        end
        object IsVampire: TCheckBox
          Left = 272
          Top = 336
          Width = 113
          Height = 17
          Caption = 'Dance of Vampire'
          TabOrder = 45
          OnClick = IsVampireClick
        end
        object IsBShield: TCheckBox
          Left = 80
          Top = 360
          Width = 17
          Height = 17
          TabOrder = 46
          OnClick = IsBShieldClick
        end
        object BShieldLvl: TComboBox
          Left = 104
          Top = 360
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 47
          Text = 'Bless Shield 1'
          OnChange = BShieldLvlChange
          Items.Strings = (
            'Bless Shield 1'
            'Bless Shield 2'
            'Bless Shield 3'
            'Bless Shield 4'
            'Bless Shield 5'
            'Bless Shield 6')
        end
        object IsAdvBlock: TCheckBox
          Left = 416
          Top = 360
          Width = 17
          Height = 17
          TabOrder = 48
          OnClick = IsAdvBlockClick
        end
        object AdvBlockLvl: TComboBox
          Left = 440
          Top = 360
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 49
          Text = 'Advanced Block 1'
          OnChange = AdvBlockLvlChange
          Items.Strings = (
            'Advanced Block 1'
            'Advanced Block 2'
            'Advanced Block 3')
        end
        object IsRegen: TCheckBox
          Left = 80
          Top = 384
          Width = 17
          Height = 17
          TabOrder = 50
          OnClick = IsRegenClick
        end
        object RegenLvl: TComboBox
          Left = 104
          Top = 384
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 51
          Text = 'Regeneration 1'
          OnChange = RegenLvlChange
          Items.Strings = (
            'Regeneration 1'
            'Regeneration 2'
            'Regeneration 3')
        end
        object IsLife: TCheckBox
          Left = 272
          Top = 384
          Width = 97
          Height = 17
          Caption = 'Song of Life'
          TabOrder = 52
          OnClick = IsLifeClick
        end
        object IsMedit: TCheckBox
          Left = 608
          Top = 384
          Width = 121
          Height = 17
          Caption = 'Song of Meditation'
          TabOrder = 53
          OnClick = IsMeditClick
        end
        object IsSeraph: TCheckBox
          Left = 416
          Top = 384
          Width = 17
          Height = 17
          TabOrder = 54
          OnClick = IsSeraphClick
        end
        object IsSkin: TCheckBox
          Left = 80
          Top = 432
          Width = 17
          Height = 17
          TabOrder = 55
          OnClick = IsSkinClick
        end
        object SkinLvl: TComboBox
          Left = 104
          Top = 432
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 56
          Text = 'Freezing Skin 1'
          OnChange = SkinLvlChange
          Items.Strings = (
            'Freezing Skin 1'
            'Freezing Skin 2'
            'Freezing Skin 3')
        end
        object IsVeng: TCheckBox
          Left = 272
          Top = 432
          Width = 129
          Height = 17
          Caption = 'Song of Vengeance'
          TabOrder = 57
          OnClick = IsVengClick
        end
        object IsBers: TCheckBox
          Left = 80
          Top = 456
          Width = 17
          Height = 17
          TabOrder = 58
          OnClick = IsBersClick
        end
        object BersLvl: TComboBox
          Left = 104
          Top = 456
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 59
          Text = 'Berseker Spirit 1'
          OnChange = BersLvlChange
          Items.Strings = (
            'Berseker Spirit 1'
            'Berseker Spirit 2')
        end
        object ProphecyLvl: TComboBox
          Left = 440
          Top = 456
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 60
          Text = 'Chant of Victory'
          OnChange = ProphecyLvlChange
          Items.Strings = (
            'Chant of Victory'
            'Prophecy of Fire'
            'Propecy of Water'
            'Prophecy of Wind')
        end
        object IsProphecy: TCheckBox
          Left = 416
          Top = 456
          Width = 17
          Height = 17
          TabOrder = 61
          OnClick = IsProphecyClick
        end
        object IsBQueen: TCheckBox
          Left = 608
          Top = 456
          Width = 17
          Height = 17
          TabOrder = 62
          OnClick = IsBQueenClick
        end
        object BQueenLvl: TComboBox
          Left = 632
          Top = 456
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 63
          Text = 'Blessing of Queen 1'
          OnChange = BQueenLvlChange
          Items.Strings = (
            'Blessing of Queen 1'
            'Blessing of Queen 2'
            'Blessing of Queen 3')
        end
        object SeraphLvl: TComboBox
          Left = 440
          Top = 384
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 64
          Text = 'Blessing of Seraphim 1'
          OnChange = SeraphLvlChange
          Items.Strings = (
            'Blessing of Seraphim 1'
            'Blessing of Seraphim 2'
            'Blessing of Seraphim 3')
        end
        object IsWildMagic: TCheckBox
          Left = 80
          Top = 408
          Width = 17
          Height = 17
          TabOrder = 65
          OnClick = IsWildMagicClick
        end
        object WildMagicLvl: TComboBox
          Left = 104
          Top = 408
          Width = 145
          Height = 21
          Style = csDropDownList
          Enabled = False
          ItemHeight = 13
          ItemIndex = 0
          TabOrder = 66
          Text = 'Wild Magic 1'
          OnChange = WildMagicLvlChange
          Items.Strings = (
            'Wild Magic 1'
            'Wild Magic 2')
        end
        object IsSiren: TCheckBox
          Left = 272
          Top = 408
          Width = 97
          Height = 17
          Caption = 'Dance of Siren'
          TabOrder = 67
          OnClick = IsSirenClick
        end
      end
    end
    object TTabPage
      Left = 4
      Top = 24
      Caption = 'Debuffs'
      object GroupBox6: TGroupBox
        Left = 0
        Top = -4
        Width = 793
        Height = 493
        TabOrder = 0
        object Label97: TLabel
          Left = 16
          Top = 72
          Width = 32
          Height = 13
          Caption = 'P. Atk.'
        end
        object Label98: TLabel
          Left = 16
          Top = 96
          Width = 33
          Height = 13
          Caption = 'P. Def.'
        end
        object Label99: TLabel
          Left = 16
          Top = 120
          Width = 35
          Height = 13
          Caption = 'M. Def.'
        end
        object Label100: TLabel
          Left = 16
          Top = 144
          Width = 45
          Height = 13
          Caption = 'Accuracy'
        end
        object Label101: TLabel
          Left = 16
          Top = 168
          Width = 31
          Height = 13
          Caption = 'Critical'
        end
        object Label102: TLabel
          Left = 16
          Top = 192
          Width = 31
          Height = 13
          Caption = 'Speed'
        end
        object Label103: TLabel
          Left = 16
          Top = 216
          Width = 53
          Height = 13
          Caption = 'Atk. Speed'
        end
        object Label104: TLabel
          Left = 16
          Top = 240
          Width = 58
          Height = 13
          Caption = 'Cast. Speed'
        end
        object Label105: TLabel
          Left = 16
          Top = 264
          Width = 46
          Height = 13
          Caption = 'Crit. Dmg.'
        end
        object Label106: TLabel
          Left = 16
          Top = 288
          Width = 32
          Height = 13
          Caption = 'Regen'
        end
        object Label107: TLabel
          Left = 16
          Top = 312
          Width = 25
          Height = 13
          Caption = 'Misc.'
        end
        object IsWeakness: TCheckBox
          Left = 88
          Top = 72
          Width = 17
          Height = 17
          TabOrder = 0
        end
        object WeaknessLvl: TComboBox
          Left = 112
          Top = 72
          Width = 145
          Height = 21
          ItemHeight = 13
          TabOrder = 1
          Text = 'WeaknessLvl'
        end
        object CheckBox1: TCheckBox
          Left = 88
          Top = 312
          Width = 17
          Height = 17
          TabOrder = 2
        end
        object ComboBox107: TComboBox
          Left = 112
          Top = 312
          Width = 145
          Height = 21
          ItemHeight = 13
          TabOrder = 3
          Text = 'WeaknessLvl'
        end
        object IsScourge: TCheckBox
          Left = 88
          Top = 288
          Width = 17
          Height = 17
          TabOrder = 4
        end
        object ScourgeLvl: TComboBox
          Left = 112
          Top = 288
          Width = 145
          Height = 21
          ItemHeight = 13
          TabOrder = 5
          Text = 'WeaknessLvl'
        end
        object IsJudgment: TCheckBox
          Left = 88
          Top = 264
          Width = 17
          Height = 17
          TabOrder = 6
        end
        object JudgmentLvl: TComboBox
          Left = 112
          Top = 264
          Width = 145
          Height = 21
          ItemHeight = 13
          TabOrder = 7
          Text = 'WeaknessLvl'
        end
        object IsDisruption: TCheckBox
          Left = 88
          Top = 240
          Width = 17
          Height = 17
          TabOrder = 8
        end
        object DisruptionLvl: TComboBox
          Left = 112
          Top = 240
          Width = 145
          Height = 21
          ItemHeight = 13
          TabOrder = 9
          Text = 'WeaknessLvl'
        end
        object IsHex: TCheckBox
          Left = 88
          Top = 96
          Width = 17
          Height = 17
          TabOrder = 10
        end
        object ComboBox111: TComboBox
          Left = 112
          Top = 96
          Width = 145
          Height = 21
          ItemHeight = 13
          TabOrder = 11
          Text = 'HexLvl'
        end
        object IsChaos: TCheckBox
          Left = 88
          Top = 144
          Width = 17
          Height = 17
          TabOrder = 12
        end
        object ChaosLvl: TComboBox
          Left = 112
          Top = 144
          Width = 145
          Height = 21
          ItemHeight = 13
          TabOrder = 13
          Text = 'WeaknessLvl'
        end
        object IsTribunal: TCheckBox
          Left = 88
          Top = 168
          Width = 17
          Height = 17
          TabOrder = 14
        end
        object TribunalLvl: TComboBox
          Left = 112
          Top = 168
          Width = 145
          Height = 21
          ItemHeight = 13
          TabOrder = 15
          Text = 'WeaknessLvl'
        end
        object IsWindShakle: TCheckBox
          Left = 88
          Top = 216
          Width = 17
          Height = 17
          TabOrder = 16
        end
        object WindShakleLvl: TComboBox
          Left = 112
          Top = 216
          Width = 145
          Height = 21
          ItemHeight = 13
          TabOrder = 17
          Text = 'WeaknessLvl'
        end
        object IsGloom: TCheckBox
          Left = 88
          Top = 120
          Width = 17
          Height = 17
          TabOrder = 18
        end
        object IsSlow: TCheckBox
          Left = 88
          Top = 192
          Width = 17
          Height = 17
          TabOrder = 19
        end
        object SlowLvl: TComboBox
          Left = 112
          Top = 192
          Width = 145
          Height = 21
          ItemHeight = 13
          TabOrder = 20
          Text = 'WeaknessLvl'
        end
        object GloomLvl: TComboBox
          Left = 112
          Top = 120
          Width = 145
          Height = 21
          ItemHeight = 13
          TabOrder = 21
        end
        object BlockShieldLvl: TComboBox
          Left = 320
          Top = 96
          Width = 145
          Height = 21
          ItemHeight = 13
          TabOrder = 22
          Text = 'WeaknessLvl'
        end
        object IsBlockShield: TCheckBox
          Left = 296
          Top = 96
          Width = 17
          Height = 17
          TabOrder = 23
        end
        object IsSandBomb: TCheckBox
          Left = 296
          Top = 144
          Width = 17
          Height = 17
          TabOrder = 24
        end
        object SandBombLvl: TComboBox
          Left = 320
          Top = 144
          Width = 145
          Height = 21
          ItemHeight = 13
          TabOrder = 25
          Text = 'WeaknessLvl'
        end
        object IsBlockWW: TCheckBox
          Left = 296
          Top = 192
          Width = 17
          Height = 17
          TabOrder = 26
        end
        object BlockWWLvl: TComboBox
          Left = 320
          Top = 192
          Width = 145
          Height = 21
          ItemHeight = 13
          TabOrder = 27
          Text = 'WeaknessLvl'
        end
      end
    end
  end
  object GroupBox1: TGroupBox
    Left = 0
    Top = 0
    Width = 217
    Height = 185
    Caption = 'Professional'
    TabOrder = 3
    object Label7: TLabel
      Left = 16
      Top = 24
      Width = 26
      Height = 13
      Caption = 'Level'
    end
    object Label8: TLabel
      Left = 16
      Top = 48
      Width = 25
      Height = 13
      Caption = 'Class'
    end
    object Label115: TLabel
      Left = 32
      Top = 72
      Width = 83
      Height = 13
      Caption = 'HP regen per tick'
    end
    object Label116: TLabel
      Left = 32
      Top = 88
      Width = 84
      Height = 13
      Caption = 'MP regen per tick'
    end
    object Label117: TLabel
      Left = 32
      Top = 104
      Width = 82
      Height = 13
      Caption = 'CP regen per tick'
    end
    object Label118: TLabel
      Left = 144
      Top = 72
      Width = 18
      Height = 13
      Caption = '100'
    end
    object Label119: TLabel
      Left = 144
      Top = 88
      Width = 18
      Height = 13
      Caption = '100'
    end
    object Label120: TLabel
      Left = 144
      Top = 104
      Width = 18
      Height = 13
      Caption = '100'
    end
    object Label121: TLabel
      Left = 32
      Top = 128
      Width = 70
      Height = 13
      Caption = 'Hits per minute'
    end
    object Label122: TLabel
      Left = 144
      Top = 128
      Width = 18
      Height = 13
      Caption = '500'
    end
    object Label145: TLabel
      Left = 32
      Top = 152
      Width = 63
      Height = 13
      Caption = 'Middle P.Atk.'
    end
    object Label146: TLabel
      Left = 144
      Top = 152
      Width = 18
      Height = 13
      Caption = '100'
    end
    object SpinEdit1: TSpinEdit
      Left = 56
      Top = 16
      Width = 41
      Height = 22
      MaxValue = 80
      MinValue = 1
      TabOrder = 0
      Value = 1
      OnChange = SpinEdit1Change
    end
    object ComboBox1: TComboBox
      Left = 56
      Top = 40
      Width = 153
      Height = 21
      Style = csDropDownList
      DropDownCount = 48
      ImeMode = imHanguel
      ItemHeight = 13
      ItemIndex = 0
      TabOrder = 1
      Text = 'Abyss Walker'
      OnChange = ComboBox1Change
      Items.Strings = (
        'Abyss Walker'
        'Artisan'
        'Assasin'
        'Bishop'
        'Bladedancer'
        'Bounty Hunter'
        'Cleric'
        'Dark Avenger'
        'Dark Fighter'
        'Dark Mystic'
        'Dark Wizard'
        'Destroyer'
        'Dwarven Fighter'
        'Elemental Summoner'
        'Elven Elder'
        'Elven Fighter'
        'Elven Knight'
        'Elven Mystic'
        'Elven Oracle'
        'Elven Scout'
        'Elven Wizard'
        'Gladiator'
        'Hawkeye'
        'Human Fighter'
        'Human Knight'
        'Human Mystic'
        'Monk'
        'Necromancer'
        'Orc Fighter'
        'Orc Mystic'
        'Orc Raider'
        'Orc Shaman'
        'Overlord'
        'Paladin'
        'Palus Knight'
        'Phantom Ranger'
        'Phantom Summoner'
        'Plainswalker'
        'Prophet'
        'Rogue'
        'Scavenger'
        'Shillien Elder'
        'Shillien Knight'
        'Shillien Oracle'
        'Silver Ranger'
        'Sorcerer'
        'Spellhowler'
        'Spellsinger'
        'Swordsinger'
        'Temple Knight'
        'Treasure Hunter'
        'Tyrant'
        'Warcryer'
        'Warlock'
        'Warlord'
        'Warrior'
        'Warsmith'
        'Wizard')
    end
    object MovementMode: TComboBox
      Left = 104
      Top = 16
      Width = 105
      Height = 21
      Style = csDropDownList
      ItemHeight = 13
      ItemIndex = 0
      TabOrder = 2
      Text = 'Standing'
      OnChange = MovementModeChange
      Items.Strings = (
        'Standing'
        'Sitting'
        'Running'
        'Walking')
    end
  end
end
