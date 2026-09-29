/**
 * B12 · v2 statuses from the legacy flags (PLAN §6.9 as amended by §14.1).
 *
 * `ADD COLUMN "status" … DEFAULT` gave every pre-existing row the default, so rows the triggers
 * never saw are recognised by `"statusChangedAt" IS NULL` (mods) or by a status that disagrees
 * with the legacy flag (comments, reviews):
 * - `"Mod"`: approved → `published` (`publishedAt = approvedAt = statusChangedAt = createdAt`);
 *   **not approved → stays `pending`** in the moderation queue (§14.1: never archived, rejected
 *   or deleted by a script). `"isApproved"` is never changed (the trigger keeps it in sync).
 * - `"ModVersion"."checksStatus"`: `passed` for versions of approved mods, `pending` otherwise
 *   (the inspection pass decides later).
 * - `"Comment"` / `"ModReview"`: `hidden` where the legacy `isHidden` is set.
 */
import type { Backfill } from './framework.ts';

export const b12: Backfill = {
  id: 'B12',
  title: 'statuses from isApproved / isHidden (unapproved stay pending)',
  touchesLegacy: false,
  delta: true,
  checksumSql: `SELECT md5(coalesce(string_agg("id"::text || ':' || "status", ',' ORDER BY "id"), '')) AS checksum FROM "Mod"`,
  async run(ctx) {
    const { client } = ctx;
    let total = 0;

    let cursor = 0;
    let published = 0;
    let pending = 0;
    for (;;) {
      const { rows } = await client.query<{ id: number }>(
        `SELECT "id" FROM "Mod" WHERE "id" > $1 AND "statusChangedAt" IS NULL ORDER BY "id" LIMIT $2`,
        [cursor, ctx.batchSize],
      );
      if (rows.length === 0) break;
      cursor = rows[rows.length - 1]?.id as number;
      const changed = await ctx.batch(async () => {
        const { rows: updated } = await client.query<{ status: string }>(
          `UPDATE "Mod" SET
             "status" = CASE WHEN "isApproved" THEN 'published' ELSE 'pending' END,
             "statusChangedAt" = "createdAt",
             "publishedAt" = CASE WHEN "isApproved" THEN coalesce("publishedAt", "createdAt") ELSE "publishedAt" END,
             "approvedAt" = CASE WHEN "isApproved" THEN coalesce("approvedAt", "createdAt") ELSE "approvedAt" END
           WHERE "id" = ANY($1::int[]) AND "statusChangedAt" IS NULL
           RETURNING "status"`,
          [rows.map((r) => r.id)],
        );
        return updated;
      });
      published += changed.filter((r) => r.status === 'published').length;
      pending += changed.filter((r) => r.status === 'pending').length;
      total += changed.length;
    }
    ctx.notes.mods = { published, pending };

    cursor = 0;
    let checks = 0;
    for (;;) {
      const { rows } = await client.query<{ id: number }>(
        `SELECT "id" FROM "ModVersion" WHERE "id" > $1 AND "checksStatus" IS NULL ORDER BY "id" LIMIT $2`,
        [cursor, ctx.batchSize],
      );
      if (rows.length === 0) break;
      cursor = rows[rows.length - 1]?.id as number;
      const updated = await ctx.batch(() =>
        client.query(
          `UPDATE "ModVersion" v SET "checksStatus" = CASE WHEN m."isApproved" THEN 'passed' ELSE 'pending' END
             FROM "ModVersion" src LEFT JOIN "Mod" m ON m."id" = src."modId"
            WHERE v."id" = src."id" AND v."id" = ANY($1::int[]) AND v."checksStatus" IS NULL`,
          [rows.map((r) => r.id)],
        ),
      );
      checks += updated.rowCount ?? 0;
    }
    ctx.notes.versionChecks = checks;
    total += checks;

    for (const [table, hidden] of [
      ['Comment', `"isHidden" AND "status" = 'visible'`],
      ['ModReview', `"isHidden" AND "status" = 'visible'`],
    ] as const) {
      const updated = await ctx.batch(() => client.query(`UPDATE "${table}" SET "status" = 'hidden' WHERE ${hidden}`));
      ctx.notes[`${table}Hidden`] = updated.rowCount ?? 0;
      total += updated.rowCount ?? 0;
    }
    return total;
  },
};
