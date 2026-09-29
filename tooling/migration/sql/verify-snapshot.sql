-- Before/after data snapshot (PLAN §6.11, research/02 §14.2). Read-only; safe on production.
--
--   pnpm db:verify-snapshot [--out <file>] [--compare <before.json>] [--strict]
--
-- Section "legacy" works on any database with the legacy schema (also before the v2 expand):
-- row count and md5 per legacy table over the **legacy columns only** (the list below is frozen
-- from 0000_legacy_baseline), the counter sums, and "ModDownload" checksums per block of 100 000
-- ids so a difference can be located without dumping 2 M rows.
--
-- Section "v2" runs only when the v2 tables exist:
-- - "fixes": the same checksums with the audited fixes undone ("DataFixAudit" old values for Mod
--   and User; the B5 archive put back into ModFavorite). An after-snapshot whose undone checksum
--   equals the before checksum differs *only* by audited, reversible fixes.
-- - "v2": deterministic checksums of everything the backfills write (no generated ids or
--   timestamps), so two runs of `db:backfill --all` must give identical output.
--
-- Each section is one statement returning one json column. Sections are separated by
-- "-- @section <name>" lines.

-- @section legacy
WITH
t_user AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("id", "email", "password", "name", "imageUrl", "slug", "isTrusted",
         "createdAt", "updatedAt")::text), ',' ORDER BY "id"), '')) AS h FROM "User"),
t_token AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("id", "token", "expiresAt", "userId", "createdAt",
         "updatedAt")::text), ',' ORDER BY "id"), '')) AS h FROM "Token"),
t_reset AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("id", "token", "expiresAt", "userId", "createdAt",
         "updatedAt")::text), ',' ORDER BY "id"), '')) AS h FROM "PasswordResetToken"),
t_login AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("id", "ip", "userAgent", "email", "success", "createdAt",
         "updatedAt")::text), ',' ORDER BY "id"), '')) AS h FROM "LoginAttempt"),
t_mod AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("id", "name", "slug", "mod_id", "shortDescription", "description",
         "dependencies", "type", "modSide", "isNSFW", "isApproved", "isFeatured", "isMultiplayerCompatible",
         "requiresAllPlayers", "lastWeekDownloads", "downloads", "latestVersion", "latestVersionSize", "averageRating",
         "reviewsCount", "favoritesCount", "commentsCount", "sourceUrl", "imageUrl", "buildGuid", "buildShareVersion",
         "numberOfElements", "lastReleasedAt", "createdAt", "updatedAt", "userId", "categoryId")::text), ',' ORDER BY "id"),
         '')) AS h FROM "Mod"),
t_image AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("id", "url", "isPrimary", "isThumbnail", "createdAt", "updatedAt",
         "modId")::text), ',' ORDER BY "id"), '')) AS h FROM "ModImage"),
t_version AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("id", "version", "isLatest", "changelog", "downloadUrl",
         "extension", "filename", "createdAt", "updatedAt", "modId")::text), ',' ORDER BY "id"), '')) AS h FROM "ModVersion"),
t_tag AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("id", "name", "slug", "description", "createdAt",
         "updatedAt")::text), ',' ORDER BY "id"), '')) AS h FROM "Tag"),
t_category AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("id", "name", "slug", "description", "type", "createdAt",
         "updatedAt")::text), ',' ORDER BY "id"), '')) AS h FROM "Category"),
t_favorite AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("id", "createdAt", "updatedAt", "userId", "modId")::text), ','
         ORDER BY "id"), '')) AS h FROM "ModFavorite"),
t_review AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("id", "createdAt", "updatedAt", "title", "message", "rating",
         "isHidden", "modVersionString", "userId", "modId")::text), ',' ORDER BY "id"), '')) AS h FROM "ModReview"),
t_kelvin AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("id", "createdAt", "updatedAt", "chatId", "messageId", "prompt",
         "message", "role", "who")::text), ',' ORDER BY "id"), '')) AS h FROM "KelvinGPTMessages"),
t_comment AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("id", "createdAt", "updatedAt", "message", "imageUrl", "isHidden",
         "ip", "userId", "modId", "replyId")::text), ',' ORDER BY "id"), '')) AS h FROM "Comment"),
t_mention AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("id", "targetUserId", "fromUserId", "modId", "commentMessage",
         "type", "createdAt")::text), ',' ORDER BY "id"), '')) AS h FROM "PendingMention"),
t_mod_tag AS (
  SELECT count(*) AS n, md5(coalesce(string_agg(md5(ROW("A", "B")::text), ',' ORDER BY "A", "B"), '')) AS h
    FROM "_ModToTag"),
download_blocks AS (
  SELECT "id" / 100000 AS block, count(*) AS n,
         md5(string_agg(md5(ROW("id", "ip", "userAgent", "createdAt", "updatedAt", "modVersionId")::text), ','
             ORDER BY "id")) AS h
    FROM "ModDownload" GROUP BY 1),
t_download AS (
  SELECT coalesce(sum(n), 0) AS n, md5(coalesce(string_agg(h, ',' ORDER BY block), '')) AS h FROM download_blocks),
sums AS (
  SELECT coalesce(sum("downloads"), 0) AS downloads, coalesce(sum("favoritesCount"), 0) AS favorites,
         coalesce(sum("commentsCount"), 0) AS comments, coalesce(sum("lastWeekDownloads"), 0) AS last_week
    FROM "Mod")
SELECT jsonb_build_object(
  'format', 1,
  'tables', jsonb_build_object(
    'User', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_user),
    'Token', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_token),
    'PasswordResetToken', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_reset),
    'LoginAttempt', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_login),
    'Mod', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_mod),
    'ModImage', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_image),
    'ModVersion', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_version),
    'Tag', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_tag),
    'Category', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_category),
    'ModDownload', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_download),
    'ModFavorite', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_favorite),
    'ModReview', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_review),
    'KelvinGPTMessages', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_kelvin),
    'Comment', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_comment),
    'PendingMention', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_mention),
    '_ModToTag', (SELECT jsonb_build_object('count', n, 'md5', h) FROM t_mod_tag)
  ),
  'sums', (SELECT jsonb_build_object('downloads', downloads, 'favoritesCount', favorites, 'commentsCount', comments,
                                     'lastWeekDownloads', last_week) FROM sums),
  'modDownloadBlocks', (SELECT coalesce(jsonb_agg(jsonb_build_object('block', block, 'count', n, 'md5', h) ORDER BY block),
                               '[]'::jsonb) FROM download_blocks)
) AS snapshot;

-- @section v2
WITH
audit AS (
  SELECT DISTINCT ON ("tableName", "rowId", "columnName") "tableName", "rowId", "columnName", "oldValue"
    FROM "DataFixAudit" WHERE "revertedAt" IS NULL AND "columnName" <> '*'
   ORDER BY "tableName", "rowId", "columnName", "id"),
mod_unfixed AS (
  SELECT m."id", ROW(m."id", m."name", m."slug", m."mod_id",
           CASE WHEN sd."rowId" IS NOT NULL THEN sd."oldValue" #>> '{}' ELSE m."shortDescription" END,
           m."description", m."dependencies",
           CASE WHEN ty."rowId" IS NOT NULL THEN ty."oldValue" #>> '{}' ELSE m."type" END,
           m."modSide", m."isNSFW", m."isApproved", m."isFeatured", m."isMultiplayerCompatible", m."requiresAllPlayers",
           m."lastWeekDownloads", m."downloads", m."latestVersion", m."latestVersionSize", m."averageRating",
           m."reviewsCount", m."favoritesCount", m."commentsCount", m."sourceUrl", m."imageUrl", m."buildGuid",
           m."buildShareVersion", m."numberOfElements", m."lastReleasedAt", m."createdAt", m."updatedAt", m."userId",
           m."categoryId")::text AS r
    FROM "Mod" m
    LEFT JOIN audit ty ON ty."tableName" = 'Mod' AND ty."columnName" = 'type' AND ty."rowId" = m."id"::text
    LEFT JOIN audit sd ON sd."tableName" = 'Mod' AND sd."columnName" = 'shortDescription' AND sd."rowId" = m."id"::text),
user_unfixed AS (
  SELECT u."id", ROW(u."id", u."email", u."password", u."name", u."imageUrl", u."slug",
           CASE WHEN tr."rowId" IS NOT NULL THEN (tr."oldValue" #>> '{}')::boolean ELSE u."isTrusted" END,
           u."createdAt", u."updatedAt")::text AS r
    FROM "User" u
    LEFT JOIN audit tr ON tr."tableName" = 'User' AND tr."columnName" = 'isTrusted' AND tr."rowId" = u."id"::text),
favorites_restored AS (
  SELECT "id", "createdAt", "updatedAt", "userId", "modId" FROM "ModFavorite"
  UNION ALL
  SELECT "id", "createdAt", "updatedAt", "userId", "modId" FROM "ModFavoriteArchive"
   WHERE "reason" IN ('dedupe', 'null_ref')
     AND NOT EXISTS (SELECT 1 FROM "ModFavorite" f WHERE f."id" = "ModFavoriteArchive"."id"))
SELECT jsonb_build_object(
  'fixes', jsonb_build_object(
    'Mod', (SELECT jsonb_build_object('count', count(*), 'md5', md5(coalesce(string_agg(md5(r), ',' ORDER BY "id"), '')))
              FROM mod_unfixed),
    'User', (SELECT jsonb_build_object('count', count(*), 'md5', md5(coalesce(string_agg(md5(r), ',' ORDER BY "id"), '')))
               FROM user_unfixed),
    'ModFavorite', (SELECT jsonb_build_object('count', count(*), 'md5', md5(coalesce(string_agg(md5(ROW("id", "createdAt",
                      "updatedAt", "userId", "modId")::text), ',' ORDER BY "id"), ''))) FROM favorites_restored),
    'audit', (SELECT coalesce(jsonb_object_agg(k, n), '{}'::jsonb) FROM (
                SELECT "fixId" || ':' || "tableName" || '.' || "columnName" AS k, count(*) AS n
                  FROM "DataFixAudit" WHERE "revertedAt" IS NULL GROUP BY 1) a),
    'archive', (SELECT coalesce(jsonb_object_agg("reason", n), '{}'::jsonb) FROM (
                  SELECT "reason", count(*) AS n FROM "ModFavoriteArchive" GROUP BY 1) a)
  ),
  'v2', jsonb_build_object(
    'User', (SELECT md5(coalesce(string_agg(md5(ROW("id", "emailNormalized", "role", "verifiedCreator", "legacyTrusted",
               "emailVerifiedAt", "avatarMediaId" IS NOT NULL)::text), ',' ORDER BY "id"), '')) FROM "User"),
    'Mod', (SELECT md5(coalesce(string_agg(md5(ROW("id", "status", "isApproved", "publishedAt", "approvedAt",
              "statusChangedAt", "canonicalSlug", md5(coalesce("descriptionMd", '~')), md5(coalesce("descriptionHtml", '~')),
              "renderVersion", "platform", "multiplayerRole", "thumbnailMediaId" IS NOT NULL)::text), ',' ORDER BY "id"),
              '')) FROM "Mod"),
    'ModVersion', (SELECT md5(coalesce(string_agg(md5(ROW("id", "storageKey", "status", "statusReason",
                     md5(coalesce("changelogMd", '~')), md5(coalesce("changelogHtml", '~')), "checksStatus",
                     "downloadsCount", "uniqueDownloadsCount", "semverMajor", "semverMinor", "semverPatch",
                     "semverPre")::text), ',' ORDER BY "id"), '')) FROM "ModVersion"),
    'ModImage', (SELECT md5(coalesce(string_agg(md5(ROW("id", "storageKey", "mediaId" IS NOT NULL)::text), ','
                   ORDER BY "id"), '')) FROM "ModImage"),
    'Comment', (SELECT md5(coalesce(string_agg(md5(ROW("id", "status", md5(coalesce("bodyMd", '~')),
                  md5(coalesce("bodyHtml", '~')))::text), ',' ORDER BY "id"), '')) FROM "Comment"),
    'Media', (SELECT jsonb_build_object('count', count(*), 'md5', md5(coalesce(string_agg(md5(ROW("sourceBucket",
                "sourceKey", "purpose", "ownerId", "status")::text), ',' ORDER BY "sourceBucket", "sourceKey"), '')))
                FROM "Media"),
    'ModSlugHistory', (SELECT jsonb_build_object('count', count(*), 'md5', md5(coalesce(string_agg(md5(ROW("modId",
                         "userSlug", "slug", "reason")::text), ',' ORDER BY "modId", "reason", "slug"), '')))
                         FROM "ModSlugHistory"),
    'UserSlugHistory', (SELECT jsonb_build_object('count', count(*), 'md5', md5(coalesce(string_agg(md5(ROW("userId",
                          "slug")::text), ',' ORDER BY "slug"), ''))) FROM "UserSlugHistory"),
    'ModDependency', (SELECT jsonb_build_object('count', count(*), 'md5', md5(coalesce(string_agg(md5(ROW("modVersionId",
                        "depManifestId", "depModId", "kind")::text), ',' ORDER BY "modVersionId", "depManifestId"), '')))
                        FROM "ModDependency"),
    'ModVersionDownloadDaily', (SELECT jsonb_build_object('count', count(*), 'downloads', coalesce(sum("downloads"), 0),
                                  'md5', md5(coalesce(string_agg(md5(ROW("modVersionId", "day", "channel", "downloads",
                                  "uniqueDownloads")::text), ',' ORDER BY "modVersionId", "day", "channel"), '')))
                                  FROM "ModVersionDownloadDaily"),
    'SiteDownloadDaily', (SELECT jsonb_build_object('count', count(*), 'downloads', coalesce(sum("downloads"), 0),
                            'md5', md5(coalesce(string_agg(md5(ROW("day", "channel", "downloads")::text), ','
                            ORDER BY "day", "channel"), ''))) FROM "SiteDownloadDaily"),
    'ModStats', (SELECT md5(coalesce(string_agg(md5(ROW("modId", "downloadsTotal", "uniqueDownloadsTotal", "followers",
                   "commentsVisible", "reviewsVisible", "ratingAvg")::text), ',' ORDER BY "modId"), '')) FROM "ModStats"),
    'UserStats', (SELECT md5(coalesce(string_agg(md5(ROW("userId", "modsCount", "buildsCount", "downloadsTotal",
                    "followersCount", "followingCount", "ratingAvg", "reviewsCount", "helpfulVotes",
                    "compatReportsCount")::text), ',' ORDER BY "userId"), '')) FROM "UserStats"),
    'SiteStat', (SELECT coalesce(jsonb_object_agg("key", "value"), '{}'::jsonb) FROM "SiteStat"),
    'ModFavoriteArchive', (SELECT jsonb_build_object('count', count(*), 'md5', md5(coalesce(string_agg(md5(ROW("id",
                             "reason")::text), ',' ORDER BY "id"), ''))) FROM "ModFavoriteArchive"),
    'DataFixAudit', (SELECT jsonb_build_object('count', count(*), 'md5', md5(coalesce(string_agg(md5(ROW("fixId",
                       "tableName", "rowId", "columnName", "oldValue", "newValue", "revertedAt" IS NULL)::text), ','
                       ORDER BY "fixId", "tableName", "rowId", "columnName", "id"), ''))) FROM "DataFixAudit")
  )
) AS snapshot;
