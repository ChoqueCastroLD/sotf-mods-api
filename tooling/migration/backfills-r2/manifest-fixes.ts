/**
 * Database fixes that need the manifests read by the R2 pass (B15 writes them to
 * `"VersionInspection".manifest` — normalised, or raw when the v2 schema refuses it — and to
 * `"ModVersion".manifest`). Both change a **legacy column**, so both are audited in
 * `"DataFixAudit"` in the same statement and reversible row by row with `pnpm db:revert-fix <id>`.
 *
 * - **B8** (PLAN §6.9, research/02 §4.1): `Mod.shortDescription` ← the manifest description, only
 *   when the legacy form + sanitiser maps that description *exactly* onto the stored value and the
 *   value lost characters (umlauts, `:`, `->`…). Every manifest of the mod is tried, oldest version
 *   first (the form was filled from the first upload). Builds are excluded (no manifest).
 * - **B4M** (PLAN §6.9 B4, research/02 Q7): the `type NULL` mods (still NULL, or set to `Mod` by B4
 *   and not reverted) whose latest manifest declares `"type": "Library"` become `Library`.
 *
 * Idempotent: a restored description no longer matches its sanitised form, a reclassified mod is
 * no longer `Mod`/NULL. `--dry-run` rolls everything back.
 */
import type { Backfill, BackfillContext } from '../src/backfills/framework.ts';
import { recoverableDescription } from './legacy-sanitize.ts';

export const B8_FIX_ID = 'B8';
export const B4M_FIX_ID = 'B4M';

/** SQL of every manifest known for a version (inspection first: it also keeps raw manifests). */
const MANIFEST_SQL = `coalesce(vi."manifest", v."manifest")`;

interface DescriptionRow {
  id: number;
  shortDescription: string;
  descriptions: string[] | null;
}

async function b08Run(ctx: BackfillContext): Promise<number> {
  const { client } = ctx;
  let cursor = 0;
  let total = 0;
  const restored: Array<{ modId: number; from: string; to: string }> = [];
  for (;;) {
    const { rows } = await client.query<DescriptionRow>(
      `SELECT m."id", m."shortDescription",
              ARRAY(SELECT ${MANIFEST_SQL} ->> 'description'
                      FROM "ModVersion" v
                      LEFT JOIN "VersionInspection" vi ON vi."modVersionId" = v."id"
                     WHERE v."modId" = m."id" AND jsonb_typeof(${MANIFEST_SQL} -> 'description') = 'string'
                     ORDER BY v."createdAt", v."id") AS "descriptions"
         FROM "Mod" m
        WHERE m."id" > $1 AND coalesce(m."type", 'Mod') <> 'Build'
        ORDER BY m."id"
        LIMIT $2`,
      [cursor, ctx.batchSize],
    );
    if (rows.length === 0) break;
    cursor = (rows[rows.length - 1] as DescriptionRow).id;
    const fixes: Array<{ id: number; from: string; to: string }> = [];
    for (const row of rows) {
      for (const description of row.descriptions ?? []) {
        const value = recoverableDescription(description, row.shortDescription);
        if (value !== null) {
          fixes.push({ id: row.id, from: row.shortDescription, to: value });
          break;
        }
      }
    }
    if (fixes.length > 0) {
      const changed = await ctx.batch(async () => {
        const res = await client.query<{ n: string }>(
          `WITH input AS (
             SELECT * FROM unnest($1::int[], $2::text[], $3::text[]) AS t("id", "from", "to")
           ), fixed AS (
             UPDATE "Mod" m SET "shortDescription" = i."to"
               FROM input i
              WHERE m."id" = i."id" AND m."shortDescription" = i."from"
             RETURNING m."id", i."from", i."to"
           ), audited AS (
             INSERT INTO "DataFixAudit" ("fixId", "tableName", "rowId", "columnName", "oldValue", "newValue")
             SELECT $4, 'Mod', f."id"::text, 'shortDescription', to_jsonb(f."from"), to_jsonb(f."to") FROM fixed f
             RETURNING 1
           )
           SELECT count(*) AS n FROM audited`,
          [fixes.map((f) => f.id), fixes.map((f) => f.from), fixes.map((f) => f.to), B8_FIX_ID],
        );
        return Number(res.rows[0]?.n ?? 0);
      });
      total += changed;
      for (const f of fixes) restored.push({ modId: f.id, from: f.from, to: f.to });
    }
    if (rows.length < ctx.batchSize) break;
  }
  ctx.notes.restored = restored;
  for (const r of restored) ctx.log.info(`  B8 mod ${r.modId}: ${JSON.stringify(r.from)} → ${JSON.stringify(r.to)}`);
  return total;
}

async function b04mRun(ctx: BackfillContext): Promise<number> {
  const { client } = ctx;
  const { rows: candidates } = await client.query<{ id: number; type: string | null }>(
    `SELECT m."id", m."type"
       FROM "Mod" m
      WHERE (m."type" IS NULL
             OR (m."type" = 'Mod' AND EXISTS (
                   SELECT 1 FROM "DataFixAudit" a
                    WHERE a."fixId" = 'B4' AND a."tableName" = 'Mod' AND a."columnName" = 'type'
                      AND a."rowId" = m."id"::text AND a."revertedAt" IS NULL)))
        AND (SELECT ${MANIFEST_SQL} ->> 'type'
               FROM "ModVersion" v
               LEFT JOIN "VersionInspection" vi ON vi."modVersionId" = v."id"
              WHERE v."modId" = m."id" AND ${MANIFEST_SQL} ? 'type'
              ORDER BY v."createdAt" DESC, v."id" DESC
              LIMIT 1) = 'Library'
      ORDER BY m."id"`,
  );
  if (candidates.length === 0) {
    ctx.notes.reclassified = [];
    return 0;
  }
  const changed = await ctx.batch(async () => {
    const res = await client.query<{ n: string }>(
      `WITH input AS (
         SELECT * FROM unnest($1::int[], $2::text[]) AS t("id", "from")
       ), fixed AS (
         UPDATE "Mod" m SET "type" = 'Library'
           FROM input i
          WHERE m."id" = i."id" AND m."type" IS NOT DISTINCT FROM i."from"
         RETURNING m."id", i."from"
       ), audited AS (
         INSERT INTO "DataFixAudit" ("fixId", "tableName", "rowId", "columnName", "oldValue", "newValue")
         SELECT $3, 'Mod', f."id"::text, 'type', coalesce(to_jsonb(f."from"), 'null'::jsonb), to_jsonb('Library'::text)
           FROM fixed f
         RETURNING 1
       )
       SELECT count(*) AS n FROM audited`,
      [candidates.map((c) => c.id), candidates.map((c) => c.type), B4M_FIX_ID],
    );
    return Number(res.rows[0]?.n ?? 0);
  });
  ctx.notes.reclassified = candidates.map((c) => c.id);
  for (const c of candidates) ctx.log.info(`  B4M mod ${c.id}: ${c.type ?? 'NULL'} → Library`);
  return changed;
}

// These share the framework's runner, lock and "MigrationRun" conventions (`backfill:B8`,
// `backfill:B4M`).
export const b08: Backfill = {
  id: 'B8',
  title: 'shortDescription ← manifest description when the legacy sanitiser explains the loss (audited)',
  touchesLegacy: true,
  delta: false,
  checksumSql: `SELECT md5(coalesce(string_agg("id" || ':' || "shortDescription", ',' ORDER BY "id"), '')) AS checksum FROM "Mod"`,
  run: b08Run,
};

export const b04m: Backfill = {
  id: 'B4M',
  title: 'type NULL/B4 → Library when the manifest says so (audited)',
  touchesLegacy: true,
  delta: false,
  checksumSql: `SELECT count(*) FILTER (WHERE "type" = 'Library')::text AS checksum FROM "Mod"`,
  run: b04mRun,
};

export const MANIFEST_FIXES: readonly Backfill[] = [b04m, b08];
