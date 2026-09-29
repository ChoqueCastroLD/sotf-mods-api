// UpdatesChecker contract checker. Usage: UpdatesCheckerContract <file-or-directory>...
// Every *.json body is deserialised with JsonConvert.DeserializeObject<Root> (default settings,
// like the mod) and the collections the mod iterates are walked. One JSON line per file:
//   {"file":"…","ok":true,"mods":10}  or  {"file":"…","ok":false,"error":"…"}
// Exit code: 0 when every file passes, 1 when any fails, 2 on usage errors.
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;

namespace SotfMods.LegacyContract
{
    public static class Program
    {
        public static int Main(string[] args)
        {
            if (args.Length == 0)
            {
                Console.Error.WriteLine("usage: UpdatesCheckerContract <file-or-directory>...");
                return 2;
            }
            var files = new List<string>();
            foreach (var arg in args)
            {
                if (Directory.Exists(arg)) files.AddRange(Directory.GetFiles(arg, "*.json").OrderBy(f => f, StringComparer.Ordinal));
                else if (File.Exists(arg)) files.Add(arg);
                else
                {
                    Console.Error.WriteLine("not found: " + arg);
                    return 2;
                }
            }
            if (files.Count == 0)
            {
                Console.Error.WriteLine("no *.json file to check");
                return 2;
            }
            var failed = 0;
            foreach (var file in files)
            {
                var name = Path.GetFileName(file);
                try
                {
                    var mods = Check(File.ReadAllText(file));
                    Console.WriteLine(JsonConvert.SerializeObject(new { file = name, ok = true, mods }));
                }
                catch (Exception ex)
                {
                    failed++;
                    Console.WriteLine(JsonConvert.SerializeObject(new { file = name, ok = false, error = ex.GetType().Name + ": " + ex.Message }));
                }
            }
            return failed == 0 ? 0 : 1;
        }

        /// <summary>Deserialises like UpdatesChecker and walks what it reads; throws on any break.</summary>
        public static int Check(string json)
        {
            var root = JsonConvert.DeserializeObject<Root>(json);
            if (root == null) throw new InvalidDataException("body deserialised to null");
            if (!root.status) throw new InvalidDataException("status is false");
            if (root.meta == null) throw new InvalidDataException("meta is null");
            if (root.data == null) throw new InvalidDataException("data is null");
            foreach (var mod in root.data)
            {
                if (mod == null) throw new InvalidDataException("data contains null");
                if (string.IsNullOrEmpty(mod.mod_id)) throw new InvalidDataException("mod " + mod.id + " has no mod_id");
                if (mod.latestVersion == null) throw new InvalidDataException(mod.mod_id + ": latestVersion is null");
                if (mod.versions != null && mod.versions.Any(v => v == null)) throw new InvalidDataException(mod.mod_id + ": versions contains null");
                if (mod.images != null && mod.images.Any(i => i == null)) throw new InvalidDataException(mod.mod_id + ": images contains null");
            }
            return root.data.Count;
        }
    }
}
