// DTO of UpdatesChecker (imaxel) as extracted from the .NET metadata of its DLL
// (docs/plan/research/01-compat-contract.md §1.2). Field names, types and nullability are kept
// verbatim: value types (int, double, bool, DateTime) make Newtonsoft throw on null, on
// non-numeric strings or on another shape — which is exactly what would crash the mod in game.
using System;
using System.Collections.Generic;

namespace SotfMods.LegacyContract
{
    public class Root
    {
        public bool status { get; set; }
        public List<Mod> data { get; set; }
        public Meta meta { get; set; }
    }

    public class Meta
    {
        public int total { get; set; }
        public int page { get; set; }
        public int limit { get; set; }
        public int pages { get; set; }
        public int next_page { get; set; }
        public int prev_page { get; set; }
    }

    public class Mod
    {
        public int id { get; set; }
        public string mod_id { get; set; }
        public string name { get; set; }
        public string slug { get; set; }
        public string shortDescription { get; set; }
        public string description { get; set; }
        public string type { get; set; }
        public bool isNSFW { get; set; }
        public bool isApproved { get; set; }
        public bool isFeatured { get; set; }
        public int lastWeekDownloads { get; set; }
        public int downloads { get; set; }
        public string latestVersion { get; set; }
        public string latestVersionSize { get; set; }
        public double averageRating { get; set; }
        public int reviewsCount { get; set; }
        public int favoritesCount { get; set; }
        public string sourceUrl { get; set; }
        public string imageUrl { get; set; }
        public string buildGuid { get; set; }
        public string buildShareVersion { get; set; }
        public int? numberOfElements { get; set; }
        public DateTime lastReleasedAt { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }
        public int userId { get; set; }
        public int categoryId { get; set; }
        public List<Image> images { get; set; }
        public User user { get; set; }
        public Category category { get; set; }
        public List<Version> versions { get; set; }
        public Count _count { get; set; }
    }

    public class Image
    {
        public bool isPrimary { get; set; }
        public bool isThumbnail { get; set; }
        public string url { get; set; }
    }

    public class User
    {
        public string name { get; set; }
        public string slug { get; set; }
        public string imageUrl { get; set; }
    }

    public class Category
    {
        public string name { get; set; }
        public string slug { get; set; }
    }

    public class Version
    {
        public string version { get; set; }
        public bool isLatest { get; set; }
    }

    public class Count
    {
        public int favorites { get; set; }
    }
}
