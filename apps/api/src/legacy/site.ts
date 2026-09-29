/**
 * Tier 2 routes of the legacy layer (PLAN §5.5, frozen and deprecated): `/api/stats`,
 * `/api/stats/builds`, `/api/categories`, `/api/users/:userSlug`, `/api/users/:userSlug/stats`,
 * `GET /api/comments` and `/api/mods/:mod_id/download-stats`.
 */
import { legacyEndpoints } from '@sotf/contracts/legacy';
import { errors } from '@sotf/core';
import {
  type LegacyDownloadPeriod,
  legacyBuildStats,
  legacyCategories,
  legacyComments,
  legacyDownloadStats,
  legacySiteStats,
  legacyUserBySlug,
  legacyUserStats,
  resolveLegacyStatsMod,
} from '@sotf/core/legacy/index';
import type { LegacyContext } from './context.ts';
import {
  serializeCategory,
  serializeComment,
  serializeStats,
  serializeUser,
  serializeUserStats,
} from './serializers.ts';

const PERIODS: ReadonlySet<string> = new Set<LegacyDownloadPeriod>(['week', 'month', 'all']);

/** `mod_id` of `GET /api/comments`: the numeric id (Elysia `t.Number` after `Number()`). */
export function parseCommentsModId(raw: unknown): number | null {
  if (typeof raw !== 'string' || raw.trim() === '') return null;
  const n = Number(raw);
  return Number.isInteger(n) && n >= 0 && n <= 2_147_483_647 ? n : null;
}

export function registerSiteRoutes(ctx: LegacyContext): void {
  const { db } = ctx.platform;
  const now = () => ctx.clock.now();

  ctx.route(legacyEndpoints.stats, async () => ({
    json: { status: true, data: serializeStats(await legacySiteStats(db)) },
  }));

  ctx.route(legacyEndpoints.statsBuilds, async () => ({
    json: { status: true, data: serializeStats(await legacyBuildStats(db)) },
  }));

  ctx.route(legacyEndpoints.categories, async ({ query }) => {
    const type = typeof query.type === 'string' ? query.type : undefined;
    const rows = await legacyCategories(db, type);
    return { json: { status: true, data: rows.map(serializeCategory) } };
  });

  ctx.route(legacyEndpoints.user, async ({ params }) => {
    const user = await legacyUserBySlug(db, params.userSlug ?? '');
    if (!user) throw errors.notFound('User');
    return { json: { status: true, data: serializeUser(user) }, cacheValues: { id: user.id } };
  });

  ctx.route(legacyEndpoints.userStats, async ({ params }) => {
    const user = await legacyUserBySlug(db, params.userSlug ?? '');
    if (!user) throw errors.notFound('User');
    const stats = await legacyUserStats(db, user.id, now());
    return { json: { status: true, data: serializeUserStats(stats) }, cacheValues: { id: user.id } };
  });

  ctx.route(legacyEndpoints.comments, async ({ query }) => {
    const modId = parseCommentsModId(query.mod_id);
    if (modId === null) throw errors.validation('mod_id must be the numeric id of a mod');
    const threads = await legacyComments(db, modId);
    return { json: { status: true, data: threads.map(serializeComment) }, cacheValues: { id: modId } };
  });

  ctx.route(legacyEndpoints.downloadStats, async ({ params, query }) => {
    const rawPeriod = query.period;
    if (rawPeriod !== undefined && (typeof rawPeriod !== 'string' || !PERIODS.has(rawPeriod))) {
      throw errors.validation('period must be week, month or all');
    }
    const period = (rawPeriod ?? 'week') as LegacyDownloadPeriod;
    const modId = await resolveLegacyStatsMod(db, params.mod_id ?? '');
    // Legacy quirk: an unknown mod answers 200 with `{status:false,message:"Mod not found"}`.
    if (modId === null) return { json: { status: false, message: 'Mod not found' } };
    const data = await legacyDownloadStats(db, modId, period, now());
    return { json: { status: true, data }, cacheValues: { id: modId } };
  });
}
