-- Audit of the legacy file host in the data (PLAN §2.8 "Limpieza total", step 2). READ ONLY: it
-- runs inside a read-only transaction and never changes anything, so it is safe to run against
-- a production copy (the user runs it; agents never connect to production).
--
--   psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f ops/sql/audit-files-host.sql
--
-- Expected result (research/02): exactly one row, mod 168 `virginia-wardrobe-18+` v0.0.3,
-- "ModVersion"."downloadUrl". Remediation is not done here: backfill B2 (WP-14) sets that version
-- to status 'file_missing' with an audit trail; anything else found is rewritten to the R2 host
-- or marked the same way.

BEGIN READ ONLY;

-- 1. Every text-like column of every table in public, with the number of rows mentioning the host.
--    query_to_xml runs one dynamic count per column without creating any function.
WITH text_columns AS (
  SELECT c.table_name, c.column_name
    FROM information_schema.columns AS c
    JOIN information_schema.tables AS t
      ON t.table_schema = c.table_schema AND t.table_name = c.table_name AND t.table_type = 'BASE TABLE'
   WHERE c.table_schema = 'public'
     AND c.data_type IN ('text', 'character varying', 'character', 'json', 'jsonb', 'ARRAY')
)
SELECT table_name AS "table",
       column_name AS "column",
       (xpath('/row/n/text()', query_to_xml(
          format('SELECT count(*) AS n FROM public.%I WHERE %I::text ILIKE %L',
                 table_name, column_name, '%files.sotf-mods.com%'),
          false, true, '')))[1]::text::bigint AS "rows"
  FROM text_columns
 ORDER BY "rows" DESC, table_name, column_name;

-- 2. The affected rows of the URL and rich-text columns, with enough context to fix them.
SELECT 'ModVersion' AS "table", v."id" AS "rowId", 'downloadUrl' AS "column", v."modId", m."slug" AS "modSlug",
       v."version", v."downloadUrl" AS "value"
  FROM "ModVersion" AS v LEFT JOIN "Mod" AS m ON m."id" = v."modId"
 WHERE v."downloadUrl" ILIKE '%files.sotf-mods.com%'
UNION ALL
SELECT 'ModVersion', v."id", 'changelog', v."modId", m."slug", v."version", left(v."changelog", 200)
  FROM "ModVersion" AS v LEFT JOIN "Mod" AS m ON m."id" = v."modId"
 WHERE v."changelog" ILIKE '%files.sotf-mods.com%'
UNION ALL
SELECT 'ModImage', i."id", 'url', i."modId", m."slug", NULL, i."url"
  FROM "ModImage" AS i LEFT JOIN "Mod" AS m ON m."id" = i."modId"
 WHERE i."url" ILIKE '%files.sotf-mods.com%'
UNION ALL
SELECT 'Mod', m."id", 'imageUrl', m."id", m."slug", NULL, m."imageUrl"
  FROM "Mod" AS m WHERE m."imageUrl" ILIKE '%files.sotf-mods.com%'
UNION ALL
SELECT 'Mod', m."id", 'sourceUrl', m."id", m."slug", NULL, m."sourceUrl"
  FROM "Mod" AS m WHERE m."sourceUrl" ILIKE '%files.sotf-mods.com%'
UNION ALL
SELECT 'Mod', m."id", 'description', m."id", m."slug", NULL, left(m."description", 200)
  FROM "Mod" AS m WHERE m."description" ILIKE '%files.sotf-mods.com%'
UNION ALL
SELECT 'User', u."id", 'imageUrl', NULL, u."slug", NULL, u."imageUrl"
  FROM "User" AS u WHERE u."imageUrl" ILIKE '%files.sotf-mods.com%'
UNION ALL
SELECT 'Comment', c."id", 'imageUrl', c."modId", m."slug", NULL, c."imageUrl"
  FROM "Comment" AS c LEFT JOIN "Mod" AS m ON m."id" = c."modId"
 WHERE c."imageUrl" ILIKE '%files.sotf-mods.com%'
UNION ALL
SELECT 'Comment', c."id", 'message', c."modId", m."slug", NULL, left(c."message", 200)
  FROM "Comment" AS c LEFT JOIN "Mod" AS m ON m."id" = c."modId"
 WHERE c."message" ILIKE '%files.sotf-mods.com%'
 ORDER BY 1, 2;

ROLLBACK;
