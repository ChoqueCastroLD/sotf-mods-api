-- Data invariants (PLAN §6.11). Read-only; green before the cut-over and every night for 30 days.
--
--   pnpm db:invariants [--json] [--min-site-downloads <n>] [--expected-file-missing <n>]
--
-- Every "-- @section <n>-<name>" is one query returning one row: ok (boolean) and detail (jsonb).
-- Parameters are session settings (the CLI sets them; psql users can `SET sotf.… = …`):
--   sotf.min_site_downloads     invariant 7 threshold (default 1977059)
--   sotf.expected_file_missing  invariant 5 expected count (default 1; -1 = any)
-- Invariant 4 also checks the internal links of the descriptions; that part needs URL decoding
-- and runs in TypeScript (src/invariants.ts).

-- @section 1-downloads-aggregated
WITH raw AS (SELECT count(*) AS n FROM "ModDownload"),
agg AS (
  SELECT (SELECT coalesce(sum("downloads"), 0) FROM "ModVersionDownloadDaily")
       + (SELECT coalesce(sum("downloads"), 0) FROM "SiteDownloadDaily") AS n),
per_version_raw AS (
  SELECT d."modVersionId" AS id, count(*) AS n
    FROM "ModDownload" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
   WHERE v."modId" IS NOT NULL GROUP BY 1),
per_version_agg AS (SELECT "modVersionId" AS id, sum("downloads") AS n FROM "ModVersionDownloadDaily" GROUP BY 1),
mismatch AS (
  SELECT coalesce(r.id, a.id) AS id, coalesce(r.n, 0) AS raw, coalesce(a.n, 0) AS aggregated
    FROM per_version_raw r FULL JOIN per_version_agg a ON a.id = r.id
   WHERE coalesce(r.n, 0) <> coalesce(a.n, 0))
SELECT (SELECT n FROM raw) = (SELECT n FROM agg) AND NOT EXISTS (SELECT 1 FROM mismatch) AS ok,
       jsonb_build_object('rows', (SELECT n FROM raw), 'aggregated', (SELECT n FROM agg),
                          'versionMismatches', (SELECT count(*) FROM mismatch),
                          'examples', (SELECT coalesce(jsonb_agg(to_jsonb(m)), '[]'::jsonb)
                                         FROM (SELECT * FROM mismatch ORDER BY id LIMIT 10) m)) AS detail;

-- @section 2-mod-downloads-match-aggregates
WITH agg AS (
  SELECT v."modId", sum(d."downloads") AS n
    FROM "ModVersionDownloadDaily" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
   WHERE v."modId" IS NOT NULL GROUP BY 1),
mismatch AS (
  SELECT m."id", m."downloads" AS legacy, coalesce(agg.n, 0) AS aggregated
    FROM "Mod" m LEFT JOIN agg ON agg."modId" = m."id"
   WHERE m."downloads" <> coalesce(agg.n, 0))
SELECT NOT EXISTS (SELECT 1 FROM mismatch) AS ok,
       jsonb_build_object('mods', (SELECT count(*) FROM "Mod"), 'mismatches', (SELECT count(*) FROM mismatch),
                          'examples', (SELECT coalesce(jsonb_agg(to_jsonb(x)), '[]'::jsonb)
                                         FROM (SELECT * FROM mismatch ORDER BY "id" LIMIT 10) x)) AS detail;

-- @section 3-favorites-preserved
-- Rows present when B5 first ran (id <= its watermark) are either still in "ModFavorite" or in the
-- archive. Any archive reason counts, so an unfollow flow that archives instead of deleting keeps
-- this green; a plain DELETE of an old follow (the legacy toggle) turns it red on purpose.
WITH first_run AS (
  SELECT ("notes" ->> 'countBefore')::bigint AS before, ("notes" ->> 'watermark')::bigint AS watermark
    FROM "MigrationRun" WHERE "name" = 'backfill:B5' AND "notes" ? 'countBefore' ORDER BY "id" LIMIT 1),
now_counts AS (
  SELECT (SELECT count(*) FROM "ModFavorite" f WHERE f."id" <= r.watermark) AS kept,
         (SELECT count(*) FROM "ModFavoriteArchive" a
           WHERE a."id" <= r.watermark) AS archived,
         r.before
    FROM first_run r)
SELECT coalesce((SELECT kept + archived = before FROM now_counts), false) AS ok,
       coalesce((SELECT jsonb_build_object('before', before, 'kept', kept, 'archived', archived) FROM now_counts),
                jsonb_build_object('error', 'backfill B5 has not run')) AS detail;

-- @section 4-slugs-resolve
WITH missing AS (SELECT count(*) AS n FROM "Mod" WHERE "canonicalSlug" IS NULL),
dup_canonical AS (
  SELECT "userId", "canonicalSlug", count(*) AS n FROM "Mod" WHERE "canonicalSlug" IS NOT NULL
   GROUP BY 1, 2 HAVING count(*) > 1),
no_legacy_path AS (
  SELECT m."id" FROM "Mod" m JOIN "User" u ON u."id" = m."userId"
   WHERE NOT EXISTS (SELECT 1 FROM "ModSlugHistory" h WHERE h."modId" = m."id"
                       AND lower(h."userSlug") = lower(u."slug") AND lower(h."slug") = lower(m."slug"))),
ambiguous AS (
  SELECT lower("userSlug") AS u, lower("slug") AS s FROM "ModSlugHistory"
   GROUP BY 1, 2 HAVING count(DISTINCT "modId") > 1)
SELECT (SELECT n FROM missing) = 0 AND NOT EXISTS (SELECT 1 FROM dup_canonical)
       AND NOT EXISTS (SELECT 1 FROM no_legacy_path) AND NOT EXISTS (SELECT 1 FROM ambiguous) AS ok,
       jsonb_build_object('withoutCanonicalSlug', (SELECT n FROM missing),
                          'duplicateCanonicalSlugs', (SELECT count(*) FROM dup_canonical),
                          'modsWithoutLegacyPath', (SELECT coalesce(jsonb_agg("id"), '[]'::jsonb) FROM no_legacy_path),
                          'ambiguousPaths', (SELECT count(*) FROM ambiguous),
                          'historyRows', (SELECT count(*) FROM "ModSlugHistory")) AS detail;

-- @section 5-versions-have-storage
WITH lacking AS (SELECT "id" FROM "ModVersion" WHERE "storageKey" IS NULL AND "status" <> 'file_missing'),
missing AS (SELECT "id" FROM "ModVersion" WHERE "status" = 'file_missing'),
expected AS (SELECT coalesce(nullif(current_setting('sotf.expected_file_missing', true), ''), '1')::int AS n)
SELECT NOT EXISTS (SELECT 1 FROM lacking)
       AND ((SELECT n FROM expected) < 0 OR (SELECT count(*) FROM missing) = (SELECT n FROM expected)) AS ok,
       jsonb_build_object('withoutStorageKey', (SELECT coalesce(jsonb_agg("id"), '[]'::jsonb) FROM lacking),
                          'fileMissing', (SELECT coalesce(jsonb_agg("id"), '[]'::jsonb) FROM missing),
                          'expectedFileMissing', (SELECT n FROM expected)) AS detail;

-- @section 6-password-hashes-verifiable
WITH bad AS (
  SELECT "id", split_part("password", '$', 2) AS alg FROM "User"
   WHERE "password" !~ '^\$argon2(id|i|d)\$' AND "password" !~ '^\$2[aby]\$')
SELECT NOT EXISTS (SELECT 1 FROM bad) AS ok,
       jsonb_build_object('unverifiable', (SELECT count(*) FROM bad),
                          'formats', (SELECT coalesce(jsonb_object_agg(alg, n), '{}'::jsonb) FROM (
                            SELECT CASE WHEN "password" ~ '^\$argon2' THEN split_part("password", '$', 2)
                                        WHEN "password" ~ '^\$2[aby]\$' THEN 'bcrypt-' || split_part("password", '$', 2)
                                        ELSE 'other' END AS alg, count(*) AS n
                              FROM "User" GROUP BY 1) f),
                          'examples', (SELECT coalesce(jsonb_agg("id"), '[]'::jsonb) FROM (SELECT "id" FROM bad LIMIT 10) b))
       AS detail;

-- @section 7-site-downloads-total
WITH total AS (
  SELECT (SELECT coalesce(sum("downloads"), 0) FROM "ModVersionDownloadDaily")
       + (SELECT coalesce(sum("downloads"), 0) FROM "SiteDownloadDaily") AS n),
threshold AS (SELECT coalesce(nullif(current_setting('sotf.min_site_downloads', true), ''), '1977059')::bigint AS n)
SELECT (SELECT n FROM total) >= (SELECT n FROM threshold) AS ok,
       jsonb_build_object('total', (SELECT n FROM total), 'minimum', (SELECT n FROM threshold),
                          'siteStat', (SELECT "value" FROM "SiteStat" WHERE "key" = 'downloads')) AS detail;

-- @section 8-latest-version-matches
WITH mismatch AS (
  SELECT m."id", m."latestVersion", v."version"
    FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
   WHERE v."isLatest" AND v."version" IS DISTINCT FROM m."latestVersion")
SELECT NOT EXISTS (SELECT 1 FROM mismatch) AS ok,
       jsonb_build_object('mismatches', (SELECT count(*) FROM mismatch),
                          'examples', (SELECT coalesce(jsonb_agg(to_jsonb(x)), '[]'::jsonb)
                                         FROM (SELECT * FROM mismatch ORDER BY "id" LIMIT 10) x)) AS detail;

-- @section 9-approval-in-sync
WITH mismatch AS (SELECT "id", "status", "isApproved" FROM "Mod" WHERE "isApproved" IS DISTINCT FROM ("status" = 'published'))
SELECT NOT EXISTS (SELECT 1 FROM mismatch) AS ok,
       jsonb_build_object('mismatches', (SELECT count(*) FROM mismatch),
                          'statuses', (SELECT coalesce(jsonb_object_agg("status", n), '{}'::jsonb) FROM (
                            SELECT "status", count(*) AS n FROM "Mod" GROUP BY 1) s),
                          'examples', (SELECT coalesce(jsonb_agg(to_jsonb(x)), '[]'::jsonb)
                                         FROM (SELECT * FROM mismatch ORDER BY "id" LIMIT 10) x)) AS detail;

-- @section 10-no-legacy-file-host
WITH host AS (SELECT '%://files.sotf-mods.com/%' AS pattern), -- check-forbidden-allow: legacy-files-host the invariant searches for it
refs AS (
  SELECT 'ModVersion.downloadUrl' AS col, "id" FROM "ModVersion", host
   WHERE "downloadUrl" ILIKE host.pattern AND "status" <> 'file_missing'
  UNION ALL SELECT 'ModImage.url', "id" FROM "ModImage", host WHERE "url" ILIKE host.pattern
  UNION ALL SELECT 'Mod.imageUrl', "id" FROM "Mod", host WHERE "imageUrl" ILIKE host.pattern
  UNION ALL SELECT 'User.imageUrl', "id" FROM "User", host WHERE "imageUrl" ILIKE host.pattern
  UNION ALL SELECT 'Comment.imageUrl', "id" FROM "Comment", host WHERE "imageUrl" ILIKE host.pattern)
SELECT NOT EXISTS (SELECT 1 FROM refs) AS ok,
       jsonb_build_object('references', (SELECT coalesce(jsonb_agg(to_jsonb(r)), '[]'::jsonb) FROM refs r)) AS detail;
