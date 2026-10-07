/**
 * Admin reads and the "Sync now" button of the game builds screen (`/admin/game-builds`): the
 * paged, searchable, sortable list, the state of the Steam sync and the enqueue of a forced sync.
 * 👑 admin only (the same guard as the registry writes).
 */
import type { AdminGameBuildsQuery } from '@sotf/contracts/admin';
import type { GameBuildDTO } from '@sotf/contracts/compat';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { assertRegistryAdmin, GAME_BUILD_COLUMNS, type GameBuildRow, gameBuildDto } from '../compat/shared.ts';
import { query, queryOne } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { SOTF_APP_ID } from './parse.ts';
import { readSteamState } from './sync.ts';

type ListQuery = z.output<typeof AdminGameBuildsQuery>;

/** Escapes `%`, `_` and `\` for `ILIKE ... ESCAPE '\'`. */
function likePattern(text: string): string {
  return `%${text.replace(/[\\%_]/g, (c) => `\\${c}`)}%`;
}

/** Labels in natural order: "Patch 9" before "Patch 10" (digit runs are zero-padded for the comparison). */
const NATURAL_LABEL = `(SELECT string_agg(CASE WHEN t.m[1] IS NOT NULL THEN lpad(t.m[1], 12, '0') ELSE t.m[2] END, '' ORDER BY t.n)
                         FROM regexp_matches(lower(g."label"), '(\\d+)|(\\D+)', 'g') WITH ORDINALITY AS t(m, n))`;

const ORDER: Record<ListQuery['sort'], string> = {
  released: 'g."releasedAt"',
  label: NATURAL_LABEL,
  created: 'g."createdAt"',
};

export async function listGameBuildsAdmin(ctx: Ctx, input: ListQuery) {
  await assertRegistryAdmin(ctx);
  const conditions = [sql`TRUE`];
  if (input.q) {
    const pattern = likePattern(input.q);
    conditions.push(
      sql`(g."label" ILIKE ${pattern} ESCAPE '\\' OR coalesce(g."steamBuildId", '') ILIKE ${pattern} ESCAPE '\\')`,
    );
  }
  if (input.current !== undefined) conditions.push(input.current ? sql`g."isCurrent"` : sql`NOT g."isCurrent"`);
  if (input.breaking !== undefined) conditions.push(input.breaking ? sql`g."isBreaking"` : sql`NOT g."isBreaking"`);
  if (input.source === 'steam') conditions.push(sql`g."steamBuildId" IS NOT NULL`);
  if (input.source === 'manual') conditions.push(sql`g."steamBuildId" IS NULL`);
  const where = sql.join(conditions, sql` AND `);
  const direction = sql.raw(input.dir === 'asc' ? 'ASC' : 'DESC');
  const order = sql.raw(ORDER[input.sort]);
  const count = await queryOne<{ n: number }>(ctx.db, sql`SELECT count(*)::int AS n FROM "GameBuild" g WHERE ${where}`);
  const total = count?.n ?? 0;
  const totalPages = total === 0 ? 0 : Math.ceil(total / input.pageSize);
  const page = totalPages > 0 ? Math.min(input.page, totalPages) : 1;
  const rows = await query<GameBuildRow>(
    ctx.db,
    sql`SELECT ${GAME_BUILD_COLUMNS} FROM "GameBuild" g WHERE ${where}
         ORDER BY ${order} ${direction}, g."id" ${direction}
         LIMIT ${input.pageSize} OFFSET ${(page - 1) * input.pageSize}`,
  );
  return { items: rows.map(gameBuildDto) as GameBuildDTO[], page, pageSize: input.pageSize, total, totalPages };
}

export async function getSteamSyncStatus(ctx: Ctx) {
  await assertRegistryAdmin(ctx);
  const state = await readSteamState(ctx.db);
  return {
    appId: SOTF_APP_ID,
    status: state.status,
    lastAttemptAt: state.lastAttemptAt,
    lastSuccessAt: state.lastSuccessAt,
    lastError: state.lastError,
    consecutiveFailures: state.consecutiveFailures,
    nextAttemptAt: state.nextAttemptAt,
    buildId: state.buildId,
    buildUpdatedAt: state.buildUpdatedAt,
    lastResult: state.lastResult,
    gameBuild:
      state.gameBuildId !== null && state.label !== null ? { id: state.gameBuildId, label: state.label } : null,
  };
}

/** Enqueues a sync that ignores the back-off. `queued` is false when one is already waiting. */
export async function requestSteamSync(ctx: Ctx): Promise<{ queued: boolean }> {
  await assertRegistryAdmin(ctx);
  const id = await ctx.jobs.enqueue('steam.sync', { force: true });
  return { queued: id !== null };
}
