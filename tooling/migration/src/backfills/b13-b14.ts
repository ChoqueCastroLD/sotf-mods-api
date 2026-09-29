/**
 * B13 · Declared compatibility from the legacy flags, and B14 · inherited email verification
 * (PLAN §6.9).
 */
import type { Backfill } from './framework.ts';

/**
 * B13: `modSide` → `platform` (`client` → `Client`, `server` → `Server`, `both` → `Universal`);
 * `requiresAllPlayers` → `multiplayerRole = 'all_players'`, `isMultiplayerCompatible` alone →
 * `host_only`, anything else → `unknown`.
 */
export const b13: Backfill = {
  id: 'B13',
  title: 'declared compatibility (platform, multiplayer role)',
  touchesLegacy: false,
  delta: false,
  checksumSql: `SELECT md5(coalesce(string_agg("id"::text || ':' || coalesce("platform", '~') || ':' || coalesce("multiplayerRole", '~'), ',' ORDER BY "id"), '')) AS checksum FROM "Mod"`,
  async run(ctx) {
    const { client } = ctx;
    const platform = await ctx.batch(() =>
      client.query(
        `UPDATE "Mod" SET "platform" = CASE lower(btrim("modSide"))
             WHEN 'client' THEN 'Client' WHEN 'server' THEN 'Server' WHEN 'both' THEN 'Universal' END
          WHERE "platform" IS NULL AND lower(btrim("modSide")) IN ('client', 'server', 'both')`,
      ),
    );
    const role = await ctx.batch(() =>
      client.query(
        `UPDATE "Mod" SET "multiplayerRole" = CASE
             WHEN "requiresAllPlayers" THEN 'all_players'
             WHEN "isMultiplayerCompatible" THEN 'host_only'
             ELSE 'unknown' END
          WHERE "multiplayerRole" IS NULL`,
      ),
    );
    ctx.notes.platform = platform.rowCount ?? 0;
    ctx.notes.multiplayerRole = role.rowCount ?? 0;
    return (platform.rowCount ?? 0) + (role.rowCount ?? 0);
  },
};

/**
 * B14: accounts that already published a mod or wrote a comment proved their address in practice
 * (≈ 192): `emailVerifiedAt := createdAt`. Everyone else verifies on their first write action.
 */
export const b14: Backfill = {
  id: 'B14',
  title: 'inherited email verification (authors and commenters)',
  touchesLegacy: false,
  delta: true,
  checksumSql: `SELECT count(*)::text AS checksum FROM "User" WHERE "emailVerifiedAt" IS NOT NULL`,
  async run(ctx) {
    const { client } = ctx;
    let total = 0;
    let cursor = 0;
    for (;;) {
      const { rows } = await client.query<{ id: number }>(
        `SELECT u."id" FROM "User" u
          WHERE u."id" > $1 AND u."emailVerifiedAt" IS NULL
            AND (EXISTS (SELECT 1 FROM "Mod" m WHERE m."userId" = u."id")
                 OR EXISTS (SELECT 1 FROM "Comment" c WHERE c."userId" = u."id"))
          ORDER BY u."id" LIMIT $2`,
        [cursor, ctx.batchSize],
      );
      if (rows.length === 0) break;
      cursor = rows[rows.length - 1]?.id as number;
      const updated = await ctx.batch(() =>
        client.query(
          `UPDATE "User" SET "emailVerifiedAt" = "createdAt" WHERE "id" = ANY($1::int[]) AND "emailVerifiedAt" IS NULL`,
          [rows.map((r) => r.id)],
        ),
      );
      total += updated.rowCount ?? 0;
    }
    return total;
  },
};
