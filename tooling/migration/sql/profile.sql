-- Initial profiling of a legacy database (PLAN §6.11, research/02 §14.1: Q-P0 … Q-P10).
-- Read-only; meant for a restored copy (or the read-only role). `pnpm db:profile` runs every
-- section and prints the results (--json for machine output).
--
-- Expected: TZ = UTC; pg_trgm and unaccent available; argon2id (and maybe bcrypt) hashes; 0 email
-- collisions or their list; duplicated/NULL follows; ≈ 434 orphan downloads; 0 duplicated
-- versions and 0 mods with two latest versions; the real catalogue (drift).

-- @section Q-P0a timezone
SHOW timezone;

-- @section Q-P0b extensions
SELECT name, default_version, installed_version FROM pg_available_extensions
 WHERE name IN ('pg_trgm', 'unaccent') ORDER BY name;

-- @section Q-P1 hash-formats
SELECT split_part("password", '$', 2) AS alg, substring("password" FROM 'm=(\d+)') AS m,
       substring("password" FROM 't=(\d+)') AS t, count(*)
  FROM "User" GROUP BY 1, 2, 3 ORDER BY 4 DESC;

-- @section Q-P2 email-collisions
SELECT lower(btrim("email")) AS email_normalized, array_agg("id" ORDER BY "id") AS ids
  FROM "User" GROUP BY 1 HAVING count(*) > 1 ORDER BY 1;

-- @section Q-P3a duplicate-follows
SELECT "userId", "modId", count(*) FROM "ModFavorite" GROUP BY 1, 2 HAVING count(*) > 1 ORDER BY 3 DESC, 1, 2;

-- @section Q-P3b null-follows
SELECT count(*) FILTER (WHERE "userId" IS NULL) AS user_null, count(*) FILTER (WHERE "modId" IS NULL) AS mod_null
  FROM "ModFavorite";

-- @section Q-P4 orphan-downloads
SELECT count(*) FILTER (WHERE d."modVersionId" IS NULL) AS without_version,
       count(*) FILTER (WHERE v."id" IS NOT NULL AND v."modId" IS NULL) AS version_without_mod
  FROM "ModDownload" d LEFT JOIN "ModVersion" v ON v."id" = d."modVersionId";

-- @section Q-P5 download-channels
SELECT CASE WHEN "ip" = 'undefined' THEN 'client' WHEN "ip" IN ('null', '') THEN 'unknown'
            WHEN "ip" LIKE '%,%' THEN 'multi' ELSE 'web' END AS channel, count(*)
  FROM "ModDownload" GROUP BY 1 ORDER BY 2 DESC;

-- @section Q-P6a duplicate-versions
SELECT "modId", "version", count(*) FROM "ModVersion" GROUP BY 1, 2 HAVING count(*) > 1 ORDER BY 1, 2;

-- @section Q-P6b several-latest
SELECT "modId", count(*) FROM "ModVersion" WHERE "isLatest" GROUP BY 1 HAVING count(*) > 1 ORDER BY 1;

-- @section Q-P6c versions-without-mod
SELECT count(*) FROM "ModVersion" WHERE "modId" IS NULL;

-- @section Q-P7 tokens
SELECT count(*), count(*) FILTER (WHERE "expiresAt" < now() AT TIME ZONE 'UTC') AS expired,
       count(*) FILTER (WHERE "userId" IS NULL) AS without_user, count(DISTINCT "token") AS distinct_tokens
  FROM "Token";

-- @section Q-P8 sizes
SELECT relname, pg_size_pretty(pg_total_relation_size(relid)) AS size
  FROM pg_catalog.pg_statio_user_tables ORDER BY pg_total_relation_size(relid) DESC;

-- @section Q-P9 catalogue
SELECT table_name, column_name, data_type, is_nullable, column_default
  FROM information_schema.columns WHERE table_schema = 'public' ORDER BY table_name, ordinal_position;

-- @section Q-P10 dormant-tables
SELECT (SELECT count(*) FROM "KelvinGPTMessages") AS kgpt, (SELECT count(DISTINCT "chatId") FROM "KelvinGPTMessages") AS chats,
       (SELECT count(*) FROM "ModReview") AS reviews, (SELECT count(*) FROM "Tag") AS tags,
       (SELECT count(*) FROM "LoginAttempt") AS login_attempts;
