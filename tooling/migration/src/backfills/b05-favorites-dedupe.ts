/**
 * B5 · Deduplicate follows (PLAN §6.9, research/02 Q12).
 *
 * The legacy toggle is find-then-create without a unique index, so a `(userId, modId)` pair can
 * appear twice. The oldest row of each pair stays; the others (`reason = 'dedupe'`) and rows with
 * a NULL user or mod (`'null_ref'`) are **moved** to `"ModFavoriteArchive"` with their ids, and
 * every moved row is also recorded in `"DataFixAudit"` (`columnName = '*'`, the whole legacy row),
 * so `pnpm db:revert-fix B5` can put them back. Afterwards `0038` creates the unique index.
 *
 * The count and the highest id before the first run are stored in the run's notes: invariant 3
 * (`count(ModFavorite) + archived = count before`) is checked against them.
 */
import type { Backfill } from './framework.ts';

export const B5_FIX_ID = 'B5';

export const b05: Backfill = {
  id: 'B5',
  title: 'deduplicate follows (moved to the archive, audited)',
  touchesLegacy: true,
  delta: false,
  checksumSql: `SELECT count(*)::text AS checksum FROM "ModFavorite"`,
  async run(ctx) {
    const { client } = ctx;
    const { rows: before } = await client.query<{ n: string; max: number | null }>(
      'SELECT count(*) AS n, max("id") AS max FROM "ModFavorite"',
    );
    ctx.notes.countBefore = Number(before[0]?.n ?? 0);
    ctx.notes.watermark = Number(before[0]?.max ?? 0);
    let total = 0;
    const reasons: Record<string, number> = {};
    for (;;) {
      const batch = await ctx.batch(async () => {
        const { rows } = await client.query<{ reason: string; n: string }>(
          `WITH ranked AS (
             SELECT "id", row_number() OVER (PARTITION BY "userId", "modId" ORDER BY "createdAt", "id") AS rn
               FROM "ModFavorite" WHERE "userId" IS NOT NULL AND "modId" IS NOT NULL
           ), victims AS (
             SELECT f."id", f."createdAt", f."updatedAt", f."userId", f."modId", f."notify",
                    CASE WHEN f."userId" IS NULL OR f."modId" IS NULL THEN 'null_ref' ELSE 'dedupe' END AS reason
               FROM "ModFavorite" f LEFT JOIN ranked r ON r."id" = f."id"
              WHERE r.rn > 1 OR f."userId" IS NULL OR f."modId" IS NULL
              ORDER BY f."id" LIMIT $1
                FOR UPDATE OF f
           ), archived AS (
             INSERT INTO "ModFavoriteArchive" ("id", "createdAt", "updatedAt", "userId", "modId", "notify", "reason")
             SELECT "id", "createdAt", "updatedAt", "userId", "modId", "notify", reason FROM victims
             ON CONFLICT ("id") DO NOTHING
             RETURNING "id"
           ), audited AS (
             INSERT INTO "DataFixAudit" ("fixId", "tableName", "rowId", "columnName", "oldValue", "newValue")
             SELECT $2, 'ModFavorite', v."id"::text, '*',
                    jsonb_build_object('id', v."id", 'createdAt', v."createdAt", 'updatedAt', v."updatedAt",
                                       'userId', v."userId", 'modId', v."modId", 'notify', v."notify"),
                    jsonb_build_object('archivedTo', 'ModFavoriteArchive', 'reason', v.reason)
               FROM victims v
             RETURNING 1
           ), deleted AS (
             DELETE FROM "ModFavorite" f USING victims v WHERE f."id" = v."id" RETURNING v.reason
           )
           SELECT reason, count(*) AS n FROM deleted GROUP BY reason`,
          [ctx.batchSize, B5_FIX_ID],
        );
        return rows;
      });
      let moved = 0;
      for (const r of batch) {
        reasons[r.reason] = (reasons[r.reason] ?? 0) + Number(r.n);
        moved += Number(r.n);
      }
      total += moved;
      if (moved < ctx.batchSize || ctx.dryRun) break;
    }
    ctx.notes.moved = reasons;
    return total;
  },
};
