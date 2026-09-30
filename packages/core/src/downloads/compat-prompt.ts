/**
 * Compat prompt for later downloaders (T0-19 follow-up): `compat.prompt` fires once when a build
 * becomes current (see `notifications/rules.ts`), which only reaches people who had already
 * downloaded. People who download **after** that moment, still under the current build, get the
 * same signal (same dedupe key, so nobody is asked twice) from the flush of the download counter.
 */
import { sql } from 'drizzle-orm';
import { COMPAT_PROMPT_LIMIT, COMPAT_PROMPT_WINDOW_DAYS } from '../compat/read.ts';
import { GAME_BUILD_COLUMNS, type GameBuildRow } from '../compat/shared.ts';
import type { Clock } from '../kernel/clock.ts';
import type { Jobs } from '../kernel/jobs.ts';
import { createNotifications } from '../notifications/service.ts';
import type { Database } from '@sotf/db';

const REMEMBERED = 20_000;

export interface LaterDownloaderDeps {
  db: Database;
  jobs: Jobs;
  clock: Clock;
}

/**
 * Creates the prompt for the signed-in `userIds` that downloaded since the current build was
 * released and have not been prompted for it. Returns how many signals were created.
 */
export function createCompatPromptForLaterDownloaders(deps: LaterDownloaderDeps) {
  /** `${buildId}:${userId}` already handled by this process (skips the query on the hot path). */
  const handled = new Set<string>();
  return async (userIds: readonly number[]): Promise<number> => {
    if (userIds.length === 0) return 0;
    const current = (
      await deps.db.execute<GameBuildRow & Record<string, unknown>>(
        sql`SELECT ${GAME_BUILD_COLUMNS} FROM "GameBuild" g WHERE g."isCurrent" ORDER BY g."id" DESC LIMIT 1`,
      )
    ).rows[0];
    if (!current) return 0;
    const pending = [...new Set(userIds)].filter((id) => !handled.has(`${current.id}:${id}`));
    if (pending.length === 0) return 0;
    const windowStart = new Date(deps.clock.now().getTime() - COMPAT_PROMPT_WINDOW_DAYS * 86_400_000);
    const rows = await deps.db.execute<{ userId: number; count: number }>(
      sql`SELECT d."userId" AS "userId", COUNT(DISTINCT v."modId")::int AS "count"
            FROM "ModDownload" d
            JOIN "ModVersion" v ON v."id" = d."modVersionId"
            JOIN "Mod" m ON m."id" = v."modId"
            JOIN "User" u ON u."id" = d."userId"
           WHERE d."userId" = ANY(${sql.param(pending)}::int[])
             AND d."createdAt" >= GREATEST(${current.releasedAt}::date::timestamp, (${windowStart.toISOString()}::timestamptz AT TIME ZONE 'UTC'))
             AND m."userId" IS DISTINCT FROM d."userId"
             AND m."status" = 'published'
             AND (u."settings"->>'compatPrompts') IS DISTINCT FROM 'false'
           GROUP BY d."userId"`,
    );
    for (const id of pending) handled.add(`${current.id}:${id}`);
    if (handled.size > REMEMBERED) for (const key of [...handled].slice(0, REMEMBERED / 2)) handled.delete(key);
    const result = await createNotifications(
      deps,
      rows.rows.map((r) => ({
        userId: r.userId,
        type: 'compat.prompt' as const,
        actorId: null,
        target: { type: 'game_build' as const, id: current.id, title: current.label, path: '/me/downloads' },
        groupKey: null,
        data: { build: current.label, count: Math.min(r.count, COMPAT_PROMPT_LIMIT) },
        dedupeKey: `compat.prompt:${current.id}`,
      })),
      `compat.prompt.late:${current.id}`,
    );
    return result.created;
  };
}
