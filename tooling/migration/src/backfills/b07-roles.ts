/**
 * B7 · Roles from the legacy `isTrusted` (PLAN §6.9 as amended by §14.2: the moderators are the
 * current trusted users).
 *
 * `legacyTrusted := isTrusted`, `verifiedCreator := isTrusted` and `role := 'moderator'` for
 * trusted users (never downgrading a role granted since, e.g. the admin). `legacyTrusted` doubles
 * as the "already done" marker. `isTrusted` itself is only read.
 */
import type { Backfill } from './framework.ts';

export const b07: Backfill = {
  id: 'B7',
  title: 'roles from isTrusted (trusted → moderator)',
  touchesLegacy: false,
  delta: false,
  checksumSql: `SELECT md5(coalesce(string_agg("id"::text || ':' || "role" || ':' || coalesce("legacyTrusted"::text, '~'), ',' ORDER BY "id"), '')) AS checksum FROM "User"`,
  async run(ctx) {
    const { client } = ctx;
    let total = 0;
    let moderators = 0;
    let cursor = 0;
    for (;;) {
      const { rows } = await client.query<{ id: number }>(
        `SELECT "id" FROM "User" WHERE "id" > $1 AND "legacyTrusted" IS NULL ORDER BY "id" LIMIT $2`,
        [cursor, ctx.batchSize],
      );
      if (rows.length === 0) break;
      cursor = rows[rows.length - 1]?.id as number;
      const result = await ctx.batch(async () => {
        const { rows: changed } = await client.query<{ role: string }>(
          `UPDATE "User" SET
             "legacyTrusted" = "isTrusted",
             "verifiedCreator" = "verifiedCreator" OR "isTrusted",
             "role" = CASE WHEN "isTrusted" AND "role" = 'user' THEN 'moderator' ELSE "role" END
           WHERE "id" = ANY($1::int[]) AND "legacyTrusted" IS NULL
           RETURNING "role"`,
          [rows.map((r) => r.id)],
        );
        return changed;
      });
      total += result.length;
      moderators += result.filter((r) => r.role === 'moderator').length;
    }
    ctx.notes.moderators = moderators;
    return total;
  },
};
