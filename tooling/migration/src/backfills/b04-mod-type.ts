/**
 * B4 · `"Mod"."type" IS NULL` → `'Mod'` (PLAN §6.9, research/02 Q7). 19 mods of 2023.
 *
 * A **legacy column** is changed in place: every previous value goes to `"DataFixAudit"`
 * (`fixId = 'B4'`) in the same statement, so `pnpm db:revert-fix B4` restores it row by row.
 * `"updatedAt"` is not touched (no trigger fires on `type`). Mods whose manifest says `Library`
 * are reclassified later by the R2 pass (WP-84), which reads the zip.
 */
import type { Backfill } from './framework.ts';

export const B4_FIX_ID = 'B4';

export const b04: Backfill = {
  id: 'B4',
  title: 'type NULL → Mod (audited)',
  touchesLegacy: true,
  delta: false,
  checksumSql: `SELECT count(*)::text AS checksum FROM "Mod" WHERE "type" IS NULL`,
  async run(ctx) {
    const { client } = ctx;
    let total = 0;
    for (;;) {
      const changed = await ctx.batch(async () => {
        const { rows } = await client.query<{ n: string }>(
          `WITH target AS (
             SELECT "id" FROM "Mod" WHERE "type" IS NULL ORDER BY "id" LIMIT $1 FOR UPDATE
           ), fixed AS (
             UPDATE "Mod" m SET "type" = 'Mod' FROM target t WHERE m."id" = t."id" RETURNING m."id"
           ), audited AS (
             INSERT INTO "DataFixAudit" ("fixId", "tableName", "rowId", "columnName", "oldValue", "newValue")
             SELECT $2, 'Mod', f."id"::text, 'type', 'null'::jsonb, to_jsonb('Mod'::text) FROM fixed f
             RETURNING 1
           )
           SELECT count(*) AS n FROM audited`,
          [ctx.batchSize, B4_FIX_ID],
        );
        return Number(rows[0]?.n ?? 0);
      });
      total += changed;
      if (changed < ctx.batchSize) break;
      if (ctx.dryRun) {
        // A dry run rolls back, so the same rows would be selected again: count the rest instead.
        const { rows } = await client.query<{ n: string }>(`SELECT count(*) AS n FROM "Mod" WHERE "type" IS NULL`);
        total = Number(rows[0]?.n ?? 0);
        break;
      }
    }
    ctx.notes.fixed = total;
    return total;
  },
};
