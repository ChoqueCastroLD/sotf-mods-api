/**
 * Game builds from Steam (`steam.sync` job, every 30 minutes, and the `B21` seed).
 *
 * `syncGameBuilds` reads the public branch of Sons of the Forest. When its Steam build id is not in
 * `GameBuild.steamBuildId` yet, a new build is registered (label from the closest developer
 * announcement, else `Build <id>`), becomes the current one and the previous current build stops
 * being so, with the same recomputation of the mods' compatibility the admin registry does. Builds
 * are never deleted. `isBreaking` stays false: admins flag it.
 *
 * - A build that already exists is left alone (an admin may have chosen another current build), with
 *   three exceptions: its auto-generated `Build <id>` label is replaced when an announcement for it
 *   has appeared since; the branch moving back to a build we know (a rollback) makes that build
 *   current; and a registry without any current build gets one.
 * - A seed row (label only, no Steam id) whose label is the announcement of the new build is adopted
 *   instead of creating a duplicate.
 * - Failures never throw: the status is stored (`SiteSetting` key `steamSync`, read by the admin
 *   screen) and the next runs back off (25 min × 2^n, at most 6 h, so the first retry is the next
 *   scheduled run). `force` (the "Sync now" button) ignores the back-off.
 * - No domain event is emitted: the compatibility prompts and signals of the retired Patch Radar
 *   are not wanted for automatic builds.
 */
import { type Executor, withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { recordAudit } from '../audit/audit.ts';
import { afterRegistryChange, lockRegistry } from '../compat/registry.ts';
import { query, queryOne, sqlState } from '../follows/sql.ts';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import type { SteamClient } from './client.ts';
import {
  fallbackLabel,
  isFallbackLabel,
  isoDay,
  labelCandidates,
  planSeed,
  type SteamBranchInfo,
  type SteamNewsItem,
} from './parse.ts';

export const STEAM_STATE_KEY = 'steamSync';
const UNIQUE_VIOLATION = '23505';
const BACKOFF_BASE_MS = 25 * 60_000;
const BACKOFF_MAX_MS = 6 * 3_600_000;
const SYSTEM_REASON = 'Steam sync';

export type SteamSyncResult = 'created' | 'adopted' | 'relabelled' | 'switched' | 'unchanged';

export interface SteamSyncState {
  status: 'never' | 'ok' | 'failed';
  lastAttemptAt: string | null;
  lastSuccessAt: string | null;
  lastError: string | null;
  consecutiveFailures: number;
  nextAttemptAt: string | null;
  /** Build id of the public branch at the last successful check. */
  buildId: string | null;
  buildUpdatedAt: string | null;
  lastResult: SteamSyncResult | null;
  gameBuildId: number | null;
  label: string | null;
}

export const EMPTY_STEAM_STATE: SteamSyncState = {
  status: 'never',
  lastAttemptAt: null,
  lastSuccessAt: null,
  lastError: null,
  consecutiveFailures: 0,
  nextAttemptAt: null,
  buildId: null,
  buildUpdatedAt: null,
  lastResult: null,
  gameBuildId: null,
  label: null,
};

export async function readSteamState(db: Executor): Promise<SteamSyncState> {
  const row = await queryOne<{ value: Partial<SteamSyncState> | null }>(
    db,
    sql`SELECT "value" FROM "SiteSetting" WHERE "key" = ${STEAM_STATE_KEY}`,
  );
  return { ...EMPTY_STEAM_STATE, ...(row?.value ?? {}) };
}

async function writeSteamState(db: Executor, state: SteamSyncState): Promise<void> {
  await db.execute(
    sql`INSERT INTO "SiteSetting" ("key", "value", "updatedAt") VALUES (${STEAM_STATE_KEY}, ${JSON.stringify(state)}::jsonb, now())
        ON CONFLICT ("key") DO UPDATE SET "value" = EXCLUDED."value", "updatedAt" = EXCLUDED."updatedAt"`,
  );
}

/** Wait before the next attempt after `failures` consecutive failures. */
export function backoffMs(failures: number): number {
  if (failures <= 0) return 0;
  return Math.min(BACKOFF_MAX_MS, BACKOFF_BASE_MS * 2 ** (failures - 1));
}

export type SteamSyncOutcome =
  | { status: 'skipped'; reason: 'backoff'; nextAttemptAt: string }
  | { status: 'failed'; error: string; consecutiveFailures: number; nextAttemptAt: string }
  | { status: 'ok'; result: SteamSyncResult; gameBuildId: number; label: string; buildId: string };

interface BuildRow {
  id: number;
  label: string;
  steamBuildId: string | null;
  releasedAt: string;
  isCurrent: boolean;
}

const BUILD_COLUMNS = sql.raw(
  `g."id", g."label", g."steamBuildId", g."releasedAt"::text AS "releasedAt", g."isCurrent"`,
);

async function loadBuild(db: Executor, where: ReturnType<typeof sql>): Promise<BuildRow | null> {
  return queryOne<BuildRow>(db, sql`SELECT ${BUILD_COLUMNS} FROM "GameBuild" g WHERE ${where} ORDER BY g."id" LIMIT 1`);
}

/** Announcements, or none when Steam news is down (a build is then named `Build <id>`). */
async function newsOrEmpty(ctx: Ctx, steam: SteamClient): Promise<SteamNewsItem[]> {
  try {
    return await steam.getNews({ count: 20 });
  } catch (error) {
    ctx.log.warn({ err: error }, 'steam news unavailable; naming the build from its id');
    return [];
  }
}

async function makeCurrent(tx: Executor, id: number): Promise<void> {
  await tx.execute(sql`UPDATE "GameBuild" SET "isCurrent" = false WHERE "isCurrent" AND "id" <> ${id}`);
  await tx.execute(sql`UPDATE "GameBuild" SET "isCurrent" = true WHERE "id" = ${id}`);
}

async function registerNewBuild(
  ctx: Ctx,
  branch: SteamBranchInfo,
  news: readonly SteamNewsItem[],
): Promise<{ result: 'created' | 'adopted'; row: BuildRow }> {
  const candidates = labelCandidates(news, branch.timeUpdated).map((c) => c.label);
  return withTx(ctx.db, async (tx) => {
    await lockRegistry(tx);
    let adopted: BuildRow | null = null;
    let label = fallbackLabel(branch.buildId);
    for (const candidate of candidates) {
      const taken = await loadBuild(tx, sql`g."label" = ${candidate}`);
      if (!taken) {
        label = candidate;
        break;
      }
      if (taken.steamBuildId === null) {
        adopted = taken;
        break;
      }
    }
    if (adopted) {
      await tx.execute(sql`UPDATE "GameBuild" SET "steamBuildId" = ${branch.buildId} WHERE "id" = ${adopted.id}`);
      await makeCurrent(tx, adopted.id);
      await recordAudit(tx, ctx, {
        action: 'game_build.update',
        targetType: 'game_build',
        targetId: adopted.id,
        before: { steamBuildId: null, isCurrent: adopted.isCurrent },
        after: { steamBuildId: branch.buildId, isCurrent: true },
        reason: SYSTEM_REASON,
        actorId: null,
      });
      await afterRegistryChange(ctx, tx, 'game build synced from Steam');
      return { result: 'adopted' as const, row: { ...adopted, steamBuildId: branch.buildId, isCurrent: true } };
    }
    await tx.execute(sql`UPDATE "GameBuild" SET "isCurrent" = false WHERE "isCurrent"`);
    const created = await queryOne<BuildRow>(
      tx,
      sql`INSERT INTO "GameBuild" AS g ("label", "steamBuildId", "releasedAt", "isBreaking", "isCurrent")
          VALUES (${label}, ${branch.buildId}, ${isoDay(branch.timeUpdated)}::date, false, true)
          RETURNING ${BUILD_COLUMNS}`,
    );
    if (!created) throw new Error('GameBuild insert returned no row');
    await recordAudit(tx, ctx, {
      action: 'game_build.create',
      targetType: 'game_build',
      targetId: created.id,
      after: {
        label: created.label,
        steamBuildId: created.steamBuildId,
        releasedAt: created.releasedAt,
        isBreaking: false,
        isCurrent: true,
      },
      reason: SYSTEM_REASON,
      actorId: null,
    });
    await afterRegistryChange(ctx, tx, 'game build synced from Steam');
    return { result: 'created' as const, row: created };
  });
}

async function relabel(ctx: Ctx, row: BuildRow, branch: SteamBranchInfo, steam: SteamClient): Promise<string | null> {
  const news = await newsOrEmpty(ctx, steam);
  for (const candidate of labelCandidates(news, branch.timeUpdated)) {
    const taken = await loadBuild(ctx.db, sql`g."label" = ${candidate.label}`);
    if (taken) continue;
    return withTx(ctx.db, async (tx) => {
      await lockRegistry(tx);
      const updated = await queryOne<{ id: number }>(
        tx,
        sql`UPDATE "GameBuild" SET "label" = ${candidate.label} WHERE "id" = ${row.id} AND "label" = ${row.label} RETURNING "id"`,
      );
      if (!updated) return null;
      await recordAudit(tx, ctx, {
        action: 'game_build.update',
        targetType: 'game_build',
        targetId: row.id,
        before: { label: row.label },
        after: { label: candidate.label },
        reason: SYSTEM_REASON,
        actorId: null,
      });
      await purge(ctx.jobs, ['compat'], 'game build renamed from Steam news', { tx });
      return candidate.label;
    });
  }
  return null;
}

async function syncOnce(
  ctx: Ctx,
  steam: SteamClient,
  state: SteamSyncState,
): Promise<{ result: SteamSyncResult; row: BuildRow; branch: SteamBranchInfo }> {
  const branch = await steam.getBranch();
  const known = await loadBuild(ctx.db, sql`g."steamBuildId" = ${branch.buildId}`);
  if (!known) {
    const { result, row } = await registerNewBuild(ctx, branch, await newsOrEmpty(ctx, steam));
    return { result, row, branch };
  }
  let row = known;
  let result: SteamSyncResult = 'unchanged';
  if (isFallbackLabel(row.label, row.steamBuildId)) {
    const label = await relabel(ctx, row, branch, steam);
    if (label) {
      row = { ...row, label };
      result = 'relabelled';
    }
  }
  const anyCurrent = await loadBuild(ctx.db, sql`g."isCurrent"`);
  const moved = state.buildId !== null && state.buildId !== branch.buildId;
  if (!row.isCurrent && (moved || !anyCurrent)) {
    await withTx(ctx.db, async (tx) => {
      await lockRegistry(tx);
      const before = await loadBuild(tx, sql`g."isCurrent"`);
      await makeCurrent(tx, row.id);
      await recordAudit(tx, ctx, {
        action: 'game_build.update',
        targetType: 'game_build',
        targetId: row.id,
        before: { isCurrent: false, previousCurrentId: before?.id ?? null },
        after: { isCurrent: true },
        reason: SYSTEM_REASON,
        actorId: null,
      });
      await afterRegistryChange(ctx, tx, 'game build made current from Steam');
    });
    row = { ...row, isCurrent: true };
    result = 'switched';
  }
  return { result, row, branch };
}

/** One check of the public branch. Never throws on Steam or sync failures (see the module comment). */
export async function syncGameBuilds(
  ctx: Ctx,
  deps: { steam: SteamClient },
  options: { force?: boolean } = {},
): Promise<SteamSyncOutcome> {
  const now = ctx.clock.now();
  const state = await readSteamState(ctx.db);
  if (!options.force && state.nextAttemptAt && new Date(state.nextAttemptAt).getTime() > now.getTime()) {
    return { status: 'skipped', reason: 'backoff', nextAttemptAt: state.nextAttemptAt };
  }
  try {
    const { result, row, branch } = await syncOnce(ctx, deps.steam, state);
    await writeSteamState(ctx.db, {
      status: 'ok',
      lastAttemptAt: now.toISOString(),
      lastSuccessAt: now.toISOString(),
      lastError: null,
      consecutiveFailures: 0,
      nextAttemptAt: null,
      buildId: branch.buildId,
      buildUpdatedAt: branch.timeUpdated.toISOString(),
      lastResult: result,
      gameBuildId: row.id,
      label: row.label,
    });
    if (result !== 'unchanged') {
      ctx.log.info({ result, gameBuildId: row.id, label: row.label, buildId: branch.buildId }, 'game build synced');
    }
    return { status: 'ok', result, gameBuildId: row.id, label: row.label, buildId: branch.buildId };
  } catch (error) {
    const message = (
      sqlState(error) === UNIQUE_VIOLATION
        ? 'a game build with this label or Steam id already exists'
        : String(error instanceof Error ? error.message : error)
    ).slice(0, 300);
    const failures = state.consecutiveFailures + 1;
    const nextAttemptAt = new Date(now.getTime() + backoffMs(failures)).toISOString();
    ctx.log.warn({ err: error, failures, nextAttemptAt }, 'game build sync failed');
    await writeSteamState(ctx.db, {
      ...state,
      status: 'failed',
      lastAttemptAt: now.toISOString(),
      lastError: message,
      consecutiveFailures: failures,
      nextAttemptAt,
    }).catch((writeError: unknown) => ctx.log.error({ err: writeError }, 'could not store the steam sync status'));
    return { status: 'failed', error: message, consecutiveFailures: failures, nextAttemptAt };
  }
}

// -----------------------------------------------------------------------------------------------
// Seed
// -----------------------------------------------------------------------------------------------

/** The announcement title as notes when it says more than the label does. */
function notesOf(title: string, label: string): string | null {
  const text = title.trim();
  return text === '' || label.toLowerCase().includes(text.toLowerCase())
    ? null
    : `Steam announcement: ${text}`.slice(0, 5000);
}

export interface SteamSeedReport {
  dryRun: boolean;
  fetched: number;
  candidates: number;
  created: number;
  skippedExisting: number;
  skippedSteamBuild: number;
  oldest: string | null;
  newest: string | null;
  /** First labels that were (or would be) created. */
  sample: string[];
}

/**
 * Imports the past patches, hotfixes and updates of the developer's announcements, so the list
 * is not empty. De-duplicated by label and by the day of a build the sync registered (those have
 * a Steam id). Never marks anything current and never touches existing rows. A dry run reports
 * what would be created.
 */
export async function seedGameBuilds(
  ctx: Ctx,
  deps: { steam: SteamClient },
  options: { dryRun?: boolean } = {},
): Promise<SteamSeedReport> {
  const dryRun = options.dryRun === true;
  const news = await deps.steam.getNews({ count: 500, officialOnly: true });
  const plan = planSeed(news);
  const report: SteamSeedReport = {
    dryRun,
    fetched: news.length,
    candidates: plan.length,
    created: 0,
    skippedExisting: 0,
    skippedSteamBuild: 0,
    oldest: plan.at(-1)?.releasedAt ?? null,
    newest: plan[0]?.releasedAt ?? null,
    sample: [],
  };
  await withTx(ctx.db, async (tx) => {
    await lockRegistry(tx);
    const existing = await query<{ label: string; releasedAt: string; steamBuildId: string | null }>(
      tx,
      sql`SELECT "label", "releasedAt"::text AS "releasedAt", "steamBuildId" FROM "GameBuild"`,
    );
    const labels = new Set(existing.map((row) => row.label));
    const steamDays = new Set(existing.filter((row) => row.steamBuildId !== null).map((row) => row.releasedAt));
    // Oldest first: ids grow with the dates, so id order matches release order.
    for (const item of [...plan].reverse()) {
      if (labels.has(item.label)) {
        report.skippedExisting += 1;
        continue;
      }
      if (steamDays.has(item.releasedAt)) {
        report.skippedSteamBuild += 1;
        continue;
      }
      report.created += 1;
      if (report.sample.length < 10) report.sample.push(`${item.releasedAt} ${item.label}`);
      if (dryRun) continue;
      await tx.execute(
        sql`INSERT INTO "GameBuild" ("label", "releasedAt", "isBreaking", "isCurrent", "notesMd")
            VALUES (${item.label}, ${item.releasedAt}::date, false, false, ${notesOf(item.title, item.label)})
            ON CONFLICT ("label") DO NOTHING`,
      );
    }
    if (!dryRun && report.created > 0) {
      await recordAudit(tx, ctx, {
        action: 'game_build.seed',
        targetType: 'game_build',
        targetId: null,
        after: { created: report.created, oldest: report.oldest, newest: report.newest },
        reason: 'Steam news seed',
        actorId: null,
      });
      await purge(ctx.jobs, ['compat'], 'game builds seeded from Steam news', { tx });
    }
  });
  return report;
}
