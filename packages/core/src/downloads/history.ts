/**
 * "My downloads" (T0-17, `GET|DELETE /api/v2/me/downloads`, `DELETE /api/v2/me/downloads/:modId`): one row per mod the signed-in user
 * downloaded with the web session, with the last downloaded version against the current one, the
 * compatibility summary and how many times they downloaded it.
 *
 * - `User.settings.downloadHistory === false` disables the history: nothing new is recorded with
 *   the user id (see the counter) and the list is empty with `enabled: false`.
 * - Clearing detaches the user from their download rows (`ModDownload.userId := NULL`, a v2 column):
 *   the downloads keep counting in every total, only the personal link is removed. Raw SQL so the
 *   legacy `updatedAt` never moves.
 */
import type { DownloadHistoryDTO as DownloadHistorySchema } from '@sotf/contracts/downloads';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { type CardOptions, loadModCards } from './cards.ts';

type DownloadHistoryDTO = z.infer<typeof DownloadHistorySchema>;

/** Max mods listed (most recent first). */
export const DOWNLOAD_HISTORY_LIMIT = 200;

type Row = Record<string, unknown>;

function requireUser(ctx: Ctx): number {
  if (!ctx.actor) throw errors.unauthenticated();
  return ctx.actor.userId;
}

export async function isDownloadHistoryEnabled(ctx: Ctx, userId: number): Promise<boolean> {
  const res = await ctx.db.execute<Row>(
    sql`SELECT ("settings"->>'downloadHistory') AS "flag" FROM "User" WHERE "id" = ${userId}`,
  );
  return res.rows[0]?.flag !== 'false';
}

export async function getDownloadHistory(ctx: Ctx, options: CardOptions): Promise<DownloadHistoryDTO> {
  const userId = requireUser(ctx);
  if (!(await isDownloadHistoryEnabled(ctx, userId))) return { enabled: false, updatesAvailable: 0, items: [] };

  const rows = await ctx.db.execute<Row>(sql`
    WITH mine AS (
      SELECT v."modId", d."modVersionId", v."version", v."createdAt" AS "versionCreatedAt", d."createdAt", d."id"
        FROM "ModDownload" d
        JOIN "ModVersion" v ON v."id" = d."modVersionId"
       WHERE d."userId" = ${userId} AND v."modId" IS NOT NULL
    ), last AS (
      SELECT DISTINCT ON ("modId") "modId", "modVersionId", "version", "versionCreatedAt", "createdAt"
        FROM mine ORDER BY "modId", "createdAt" DESC, "id" DESC
    ), counts AS (
      SELECT "modId", count(*)::int AS "n" FROM mine GROUP BY "modId"
    )
    SELECT l."modId", l."modVersionId", l."version", l."versionCreatedAt", l."createdAt", c."n",
           cur."id" AS "currentId", cur."version" AS "currentVersion", cur."createdAt" AS "currentCreatedAt"
      FROM last l
      JOIN counts c ON c."modId" = l."modId"
      JOIN "Mod" m ON m."id" = l."modId" AND m."status" NOT IN ('removed', 'rejected')
      LEFT JOIN LATERAL (
        SELECT v."id", v."version", v."createdAt" FROM "ModVersion" v
         WHERE v."modId" = l."modId" AND v."status" IN ('active', 'yanked')
         ORDER BY v."isLatest" DESC, v."createdAt" DESC, v."id" DESC LIMIT 1) cur ON true
     ORDER BY l."createdAt" DESC
     LIMIT ${DOWNLOAD_HISTORY_LIMIT}`);

  const cards = await loadModCards(
    ctx.db,
    rows.rows.map((r) => Number(r.modId)),
    options,
  );
  const items: DownloadHistoryDTO['items'] = [];
  for (const r of rows.rows) {
    const found = cards.get(Number(r.modId));
    if (!found) continue;
    const lastId = Number(r.modVersionId);
    const current =
      r.currentId === null || r.currentId === undefined
        ? null
        : { versionId: Number(r.currentId), version: String(r.currentVersion) };
    const hasUpdate =
      current !== null &&
      current.versionId !== lastId &&
      new Date(String(r.currentCreatedAt)).getTime() >= new Date(String(r.versionCreatedAt)).getTime();
    items.push({
      mod: found.card,
      lastDownloaded: {
        versionId: lastId,
        version: String(r.version),
        at: new Date(r.createdAt instanceof Date ? r.createdAt : String(r.createdAt)).toISOString(),
      },
      current,
      hasUpdate,
      compat: found.compat,
      downloadsCount: Number(r.n),
    });
  }
  return { enabled: true, updatesAvailable: items.filter((i) => i.hasUpdate).length, items };
}

/** Detaches every download row from the user. Returns how many rows were detached. */
export async function clearDownloadHistory(ctx: Ctx): Promise<number> {
  const userId = requireUser(ctx);
  const res = await ctx.db.execute(sql`UPDATE "ModDownload" SET "userId" = NULL WHERE "userId" = ${userId}`);
  return res.rowCount ?? 0;
}

/**
 * Detaches the user's download rows of every version of one mod ("Remove from the list"). Returns
 * how many rows were detached (0 when there was nothing to remove).
 */
export async function removeDownloadFromHistory(ctx: Ctx, modId: number): Promise<number> {
  const userId = requireUser(ctx);
  const res = await ctx.db.execute(
    sql`UPDATE "ModDownload" d SET "userId" = NULL
          FROM "ModVersion" v
         WHERE v."id" = d."modVersionId" AND v."modId" = ${modId} AND d."userId" = ${userId}`,
  );
  return res.rowCount ?? 0;
}
