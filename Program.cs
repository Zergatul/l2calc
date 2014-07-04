using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.Xml.XPath;
using System.Text.RegularExpressions;
using System.Windows.Forms;

namespace l2calc
{
    static class Program
    {
        static string _folder = @"c:\Users\Igor_Budzhak\Documents\l2calc\";

        [STAThread]
        static void Main(string[] args)
        {
            /*r = new Regex(@"^.+?(\d[0-9.]+).+?(\d[0-9.]+).+?(\d[0-9.]+).+?$");
            ParseSkillNameDat(250, 42, ParsingCallback);*/
            Items();
        }

        static void Items()
        {
            var sb = new StringBuilder();
            sb.AppendLine("window.l2 = window.l2 || {};");
            sb.AppendLine("window.l2.data = window.l2.data || {};");
            sb.AppendLine();
            sb.AppendLine("l2.data.items = [");

            var files = Directory.EnumerateFiles(@"C:\Users\Igor_Budzhak\Dropbox\l2\hfdata\items\", "*.xml");
            foreach (string file in files)
            {
                var doc = XDocument.Load(file);
                foreach (var item in doc.Root.Elements("item"))
                {
                    Func<string, string> readAttr = attr => item.Attribute(attr).Value;
                    Func<string, string> readSet = setName =>
                    {
                        var el = item.Elements("set").SingleOrDefault(e => e.Attribute("name").Value == setName);
                        if (el == null)
                            return null;
                        return el.Attribute("val").Value;
                    };
                    Func<string, string> readForSet = forName =>
                    {
                        var el = item.Element("for").Elements("set").SingleOrDefault(e => e.Attribute("stat").Value == forName);
                        if (el == null)
                            return null;
                        return el.Attribute("val").Value;
                    };
                    Func<string, string> readForAdd = forName =>
                    {
                        var el = item.Element("for").Elements("add").SingleOrDefault(e => e.Attribute("stat").Value == forName);
                        if (el == null)
                            return null;
                        return el.Attribute("val").Value;
                    };

                    var id = readAttr("id");
                    var type = readAttr("type");
                    var name = readAttr("name").Replace("'", @"\'");

                    if (item.Element("for") == null)
                        continue;
                    if (name.ToLower().Contains("Exclusive to Monsters".ToLower()))
                        continue;
                    if (name.ToLower().Contains("for NPC".ToLower()))
                        continue;
                    if (name.ToLower().Contains("Monster Only".ToLower()))
                        continue;
                    if (name.ToLower().Contains("For Monsters Only".ToLower()))
                        continue;
                    if (name.ToLower().Contains("Event".ToLower()))
                        continue;
                    if (name.ToLower().Contains("Not In Use".ToLower()))
                        continue;

                    if (type == "Weapon")
                    {
                        if (readSet("duration") != null)
                            continue;
                        if (readSet("time") != null)
                            continue;

                        var weaponType = readSet("weapon_type");
                        var grade = readSet("crystal_type");
                        var ench4 = readSet("enchant4_skill");
                        var skill = readSet("item_skill");
                        var element = readSet("element_enabled");
                        var enchant = readSet("enchant_enabled");

                        var pAtk = readForSet("pAtk");
                        var mAtk = readForSet("mAtk");
                        var pAtkSpd = readForSet("pAtkSpd");

                        if (pAtk == null)
                            continue;

                        sb.AppendFormat("\t{{ id: {0}, name: '{1}', weaponType: '{2}', pAtk: {3}, mAtk: {4}", id, name, weaponType, pAtk, mAtk);
                        if (weaponType == "bow" && pAtkSpd == "293")
                            sb.Append(", bowFast: 1");
                        if (grade != null)
                            sb.AppendFormat(", grade: '{0}'", grade);
                        if (ench4 != null)
                            sb.AppendFormat(", ench4: '{0}'", ench4);
                        if (skill != null)
                            sb.AppendFormat(", skill: '{0}'", skill);
                        if (element == "true")
                            sb.AppendFormat(", canElement: 1");
                        if (enchant == "1")
                            sb.AppendFormat(", canEnchant: 1");
                        sb.AppendLine(" },");
                    }
                    if (type == "Armor")
                    {
                        if (readSet("duration") != null)
                            continue;
                        if (readSet("time") != null)
                            continue;

                        var bodypart = readSet("bodypart");
                        var armorType = readSet("armor_type");
                        var grade = readSet("crystal_type");
                        var skill = readSet("item_skill");
                        var ench4 = readSet("enchant4_skill");
                        var element = readSet("element_enabled");
                        var enchant = readSet("enchant_enabled");

                        var sDef = readForSet("sDef");
                        var pDef = readForAdd("pDef");
                        var mDef = readForAdd("mDef");
                        var maxMp = readForAdd("maxMp");

                        sb.AppendFormat("\t{{ id: {0}, name: '{1}', bodyPart: '{2}'", id, name, bodypart);
                        if (armorType != null)
                            sb.AppendFormat(", armorType: '{0}'", armorType);
                        if (sDef != null)
                            sb.AppendFormat(", sDef: {0}", sDef);
                        if (pDef != null)
                            sb.AppendFormat(", pDef: {0}", pDef);
                        if (mDef != null)
                            sb.AppendFormat(", mDef: {0}", mDef);
                        if (maxMp != null)
                            sb.AppendFormat(", maxMp: {0}", maxMp);
                        if (grade != null)
                            sb.AppendFormat(", grade: '{0}'", grade);
                        if (skill != null)
                            sb.AppendFormat(", skill: '{0}'", skill);
                        if (ench4 != null)
                            sb.AppendFormat(", ench4: '{0}'", ench4);
                        if (element == "true")
                            sb.AppendFormat(", canElement: 1");
                        if (enchant == "1")
                            sb.AppendFormat(", canEnchant: 1");
                        sb.AppendLine(" },");
                    }
                }
            }

            sb.Remove(sb.Length - 3, 3);
            sb.AppendLine();
            sb.Append("];");

            File.WriteAllText(_folder + "l2.data.items.js", sb.ToString());
        }

        static void ArmorSets()
        {
            var sb = new StringBuilder();
            sb.AppendLine("window.l2 = window.l2 || {};");
            sb.AppendLine("window.l2.data = window.l2.data || {};");
            sb.AppendLine();
            sb.AppendLine("l2.data.armorSets = [");

            var files = Directory.EnumerateFiles(@"C:\Users\Igor_Budzhak\Dropbox\l2\hfdata\armorsets\", "*.xml");
            foreach (string file in files)
            {
                var fn = Path.GetFileNameWithoutExtension(file);
                string grade = null;
                switch (fn)
                {
                    case "no_grade": grade = null; break;
                    case "d_grade": grade = "d"; break;
                    case "c_grade": grade = "c"; break;
                    case "b_grade": grade = "b"; break;
                    case "a_grade":
                    case "a_grade_pvp": grade = "a"; break;
                    case "s_grade":
                    case "s_grade_pvp": grade = "s"; break;
                    case "s80_dynasty":
                    case "s80_dynasty_pvp":
                    case "s80_moirai":
                    case "s80_moirai_pvp": grade = "s80"; break;
                    case "s84_elegia":
                    case "s84_elegia_pvp":
                    case "s84_vesper":
                    case "s84_vesper_pvp":
                    case "s84_vorpal":
                    case "s84_vorpal_pvp": grade = "s84"; break;
                    default: grade = "x"; break;
                }
                if (grade == "x")
                    continue;
                var doc = XDocument.Load(file);
                foreach (var set in doc.Root.Elements("set"))
                {
                    var id = set.Attribute("id").Value;
                    var chest = set.Elements("chest").Select(e => e.GetAttr("id")).ToJson();
                    var legs = set.Elements("legs").Select(e => e.GetAttr("id")).ToJson();
                    var head = set.Elements("head").Select(e => e.GetAttr("id")).ToJson();
                    var gloves = set.Elements("gloves").Select(e => e.GetAttr("id")).ToJson();
                    var feet = set.Elements("feet").Select(e => e.GetAttr("id")).ToJson();
                    var shield = set.Elements("shield").Select(e => e.GetAttr("id")).ToJson();
                    var skill = set.Elements("skill").Select(e => e.GetAttr("id")).ToJson();
                    var shieldSkill = set.GetInner("shield_skill", "id");
                    var ench6 = set.GetInner("enchant6skill", "id");
                    var str = set.GetInner("str", "val");
                    var dex = set.GetInner("dex", "val");
                    var con = set.GetInner("con", "val");
                    var @int = set.GetInner("int", "val");
                    var wit = set.GetInner("wit", "val");
                    var men = set.GetInner("men", "val");

                    sb.AppendFormat("\t{{ id: {0},{1} chest: {2}", id, grade == null ? "" : " grade: '" + grade + "',", chest);
                    if (legs != null)
                        sb.AppendFormat(", legs: {0}", legs);
                    if (head != null)
                        sb.AppendFormat(", head: {0}", head);
                    if (gloves != null)
                        sb.AppendFormat(", gloves: {0}", gloves);
                    if (feet != null)
                        sb.AppendFormat(", feet: {0}", feet);
                    if (gloves != null)
                        sb.AppendFormat(", gloves: {0}", gloves);
                    if (shield != null)
                        sb.AppendFormat(", shield: {0}", shield);

                    if (skill != null)
                        sb.AppendFormat(", skill: {0}", skill);
                    if (shieldSkill != null)
                        sb.AppendFormat(", shieldSkill: {0}", shieldSkill);
                    if (str != null)
                        sb.AppendFormat(", str: {0}", str);
                    if (dex != null)
                        sb.AppendFormat(", dex: {0}", dex);
                    if (con != null)
                        sb.AppendFormat(", con: {0}", con);
                    if (@int != null)
                        sb.AppendFormat(", int: {0}", @int);
                    if (wit != null)
                        sb.AppendFormat(", wit: {0}", wit);
                    if (men != null)
                        sb.AppendFormat(", men: {0}", men);

                    sb.AppendLine(" },");
                }
            }

            sb.Remove(sb.Length - 3, 3);
            sb.AppendLine();
            sb.Append("];");

            File.WriteAllText(_folder + "l2.data.armorsets.js", sb.ToString());
        }

        static void Skills()
        {
            var sb = new StringBuilder();
            sb.AppendLine("window.l2 = window.l2 || {};");
            sb.AppendLine("window.l2.data = window.l2.data || {};");
            sb.AppendLine();
            sb.AppendLine("l2.data.skills = [");

            var files = Directory.EnumerateFiles(@"C:\Users\Igor_Budzhak\Dropbox\l2\hfdata\skills", "*.xml");
            foreach (string file in files)
            {
                var doc = XDocument.Load(file);
                foreach (var skill in doc.Root.Elements("skill"))
                {
                    var id = skill.GetAttr("id");
                    var name = skill.GetAttr("name");
                    int levels = int.Parse(skill.GetAttr("levels"));

                    var type = skill.GetInnerFilter("set", "name", "skillType", "val");
                    var target = skill.GetInnerFilter("set", "name", "targetType", "val");
                    var operateType = skill.GetInnerFilter("set", "name", "operateType", "val");

                    if (type == "BUFF" || type == "CONT" || operateType == "P" || operateType == "T" || target == "AURA")
                    {
                        if (skill.Elements("for").Count() == 0 && id != "3511")
                            continue;
                        sb.AppendFormat("\t{{ id: {0}, levels: {1}, name: '{2}', target: '{3}', operateType: '{4}'",
                            id,
                            levels,
                            name.Replace("'", @"\'"),
                            target,
                            operateType);

                        var triggeredId = skill.GetInnerFilter("set", "name", "triggeredId", "val");
                        if (triggeredId != null)
                        {
                            if (triggeredId.StartsWith("#"))
                            {
                                var table = skill.Elements("table").Single(e => e.Attribute("name").Value == triggeredId);
                                triggeredId = "[" + Environment.NewLine + "\t\t" + table.Value.Trim().Replace(" ", ", ") + "]";
                            }
                            sb.AppendFormat(", trigger: {0}", triggeredId);
                        }
                        
                        var @for = skill.Element("for");

                        if (@for == null)
                        {
                            sb.AppendLine(" },");
                            continue;
                        }

                        var buf = @for.Element("effect");

                        if (buf != null)
                        {
                            sb.Append(", effectType: '" + buf.GetAttr("name") + "'");
                            var abnormalType = buf.GetAttr("abnormalType");
                            if (abnormalType != null)
                                sb.Append(", abnormalType: '" + abnormalType + "'");
                        }

                        var effElements = buf != null ? buf.Elements() : skill.Element("for").Elements();
                        if (effElements.Count() > 0)
                            sb.AppendLine(", effects: [");

                        foreach (var eff in effElements)
                        {
                            if (eff.Elements("using").Count() > 1)
                                throw new Exception();
                            if (eff.Elements("player").Count() > 1)
                                throw new Exception();
                            string usingKind = eff.GetInner("using", "kind");
                            string playerHp = eff.GetInner("player", "hp");
                            bool playerFront = eff.GetInner("player", "front") == "true";
                            var tmp = eff.GetInnerCombo("and", "player", "front", "behind");
                            bool playerSide = tmp == null ? false : (tmp[0] == "false" && tmp[1] == "false");
                            bool playerBehind = eff.GetInner("player", "behind") == "true";
                            var value = eff.GetAttr("val");
                            if (value.StartsWith("#"))
                            {
                                var table = skill.Elements("table").Single(e => e.Attribute("name").Value == value);
                                value = "[" + table.Value.Trim().Replace(" ", ", ") + "]";
                            }
                            sb.AppendFormat("\t\t{{ stat: '{0}', val: {1}, op: '{2}'{3}{4}{5} }},",
                                eff.Attribute("stat").Value,
                                value,
                                eff.Name,
                                usingKind != null ? ", using: '" + usingKind + "'" : "",
                                playerHp != null ? ", hp: " + playerHp + "" : "",
                                playerFront || playerSide || playerBehind ? (playerFront ? ", atkFrom: 'front'" : (playerSide ? ", atkFrom: 'side'" : ", atkFrom: 'behind'")) : "");
                            sb.AppendLine();
                        }

                        if (effElements.Count() > 0)
                        {
                            sb.Remove(sb.Length - 3, 3);
                            sb.AppendLine(" ]},");
                        }
                        else
                            sb.AppendLine(" },");
                    }
                }
            }

            sb.Remove(sb.Length - 3, 3);
            sb.AppendLine();
            sb.Append("];");

            File.WriteAllText(_folder + "l2.data.skills.js", sb.ToString());
        }

        static void SkillTree()
        {
            var sb = new StringBuilder();
            sb.AppendLine("window.l2 = window.l2 || {};");
            sb.AppendLine("window.l2.data = window.l2.data || {};");
            sb.AppendLine();
            sb.AppendLine("l2.data.skillTree = [");

            var doc1 = XDocument.Load(@"C:\Users\Igor_Budzhak\Dropbox\l2\hfdata\skillTrees\classSkillTree.xml");
            var doc2 = XDocument.Load(@"C:\Users\Igor_Budzhak\Dropbox\l2\hfdata\skillTrees\highFiveNewClassSkillTree.xml");
            var doc3 = XDocument.Load(@"C:\Users\Igor_Budzhak\Dropbox\l2\hfdata\skillTrees\forgottenSkillTree.xml");

            foreach (var item in doc1.Root.Elements("skillTree"))
            {
                var classId = item.GetAttr("classId");
                sb.AppendFormat("\t{{ classId: {0}, skills: [", classId);
                sb.AppendLine();
                var skills = item.Elements("skill");
                var item2 = doc2.XPathSelectElement("list/skillTree[@classId=" + classId + "]");
                if (item2 != null)
                    skills = skills.Concat(item2.Elements("skill"));
                var item3 = doc3.XPathSelectElement("list/skillTree[@classId=" + classId + "]");
                if (item3 != null)
                    skills = skills.Concat(item3.Elements("skill"));
                foreach (var skill in skills)
                {
                    sb.AppendFormat("\t\t{{ id: {0}, lvl: {1}, minLvl: {2} }},",
                        skill.GetAttr("skillId"),
                        skill.GetAttr("skillLvl"),
                        skill.GetAttr("getLevel"));
                    sb.AppendLine();
                }
                sb.AppendLine("\t]},");
            }

            sb.Remove(sb.Length - 3, 3);
            sb.AppendLine();
            sb.Append("];");

            File.WriteAllText(_folder + "l2.data.skilltree.js", sb.ToString());
        }

        static void ParseSkillNameDat(int skillId, int maxLvl, Func<string, string> callback)
        {
            var lines = File.ReadAllLines(@"c:\Users\Igor_Budzhak\Dropbox\l2\hfdata\SkillName-ru.txt");
            List<string> data = new List<string>();
            foreach (string line in lines.Skip(1))
            {
                var parts = line.Split('\t');
                if (int.Parse(parts[0]) == skillId && int.Parse(parts[1]) <= maxLvl)
                    line.Max();//data.Add(callback(parts[3]));
            }
            string result = "[" + string.Join(", ", data) + "]";
            Console.WriteLine(result);
            Clipboard.SetText(result);
        }

        static Regex r;

        static string ParsingCallback(string desc)
        {
            var match = r.Match(desc);
            if (!match.Success)
                throw new Exception("Invalid regex");
            string result = match.Groups[3].Value;
            if (result.EndsWith("."))
                result = result.Substring(0, result.Length - 1);
            return result;
        }

        #region extensions

        public static string GetAttr(this XElement el, string name)
        {
            if (el.Attribute(name) == null)
                return null;
            else
                return el.Attribute(name).Value;
        }

        public static string GetInner(this XElement el, string tag, string attr)
        {
            if (el.Elements(tag).Count() == 0)
                return null;
            if (el.Elements(tag).Count() > 1)
                throw new Exception();
            return el.Element(tag).GetAttr(attr);
        }

        public static string[] GetInnerCombo(this XElement el, string tag1, string tag2, params string[] attrs)
        {
            if (el.Elements(tag1).Count() == 0)
                return null;
            if (el.Elements(tag1).Count() > 1)
                throw new Exception();
            return attrs.Select(attr => new
                {
                    element = el.Element(tag1).Elements(tag2).SingleOrDefault(e => e.Attribute(attr) != null),
                    attr = attr
                })
                .Select(_ => _.element == null ? null : _.element.GetAttr(_.attr))
                .ToArray();
        }

        public static string GetInnerFilter(this XElement el, string tag, string filterAttr, string filterValue, string attr)
        {
            var elements = el.Elements(tag).Where(e => e.GetAttr(filterAttr) == filterValue);
            if (elements.Count() == 0)
                return null;
            if (elements.Count() > 1)
                throw new Exception();
            return elements.Single().GetAttr(attr);
        }

        public static string ToJson(this IEnumerable<string> ss)
        {
            if (!ss.Any())
                return null;
            return "[" + string.Join(", ", ss.ToArray()) + "]";
        }

        #endregion
    }
}
