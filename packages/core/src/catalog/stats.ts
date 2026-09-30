/**
 * Public figures (PLAN §5.2 `GET /site/stats`, `GET /live/pulse`, `GET /mods/:id/live`,
 * `GET /mods/:id/stats/public`; §2.7).
 *
 * Download totals come from the per-event aggregates (`ModVersionDownloadDaily` +
 * `SiteDownloadDaily` for the legacy orphan rows), so the site total never goes down and always
 * equals `count("ModDownload")`. "Live" numbers read recent `ModDownload` rows through the
 * `(modVersionId, createdAt)` and BRIN `createdAt` indexes. Only public mods are named.
 */
import type { LivePulseDTO, ModLiveDTO, ModPublicStatsDTO, SiteStatsDTO } from '@sotf/contracts/stats';
import type { z } from 'zod';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import { assertReachable } from './detail.ts';
import type { CatalogConfig } from './media.ts';
import { getSnapshot, isListable } from './snapshot.ts';
import { cached, num, row, rows } from './sql.ts';

type SiteStats = z.infer<typeof SiteStatsDTO>;
type LivePulse = z.infer<typeof LivePulseDTO>;
type ModLive = z.infer<typeof ModLiveDTO>;
type ModPublicStats = z.infer<typeof ModPublicStatsDTO>;

const DAY_MS = 86_400_000;

/**
 * An instant parameter compared with the legacy `timestamp(3)` columns, which hold UTC wall
 * time: pass `toISOString()` and convert explicitly, independent of the process time zone.
 */
const UTC_PARAM = (n: number) => `($${n}::timestamptz AT TIME ZONE 'UTC')`;

/** Site-wide figures (cached 60 s, tag `stats`). */
export function getSiteStats(ctx: Ctx, config: CatalogConfig): Promise<SiteStats> {
  return cached<SiteStats>(ctx, { name: 'site:stats', max: 1, ttlMs: 60_000 }, 'site', async () => {
    const now = ctx.clock.now();
    const since7 = utcDay(new Date(now.getTime() - 6 * DAY_MS));
    const [snapshot, figures] = await Promise.all([
      getSnapshot(ctx, config),
      row<{ users: string; downloads: string; downloads7d: string }>(
        ctx.db,
        `SELECT (SELECT count(*) FROM "User" WHERE "deletedAt" IS NULL) AS users,
                (SELECT coalesce(sum("downloads"), 0) FROM "ModVersionDownloadDaily")
                  + (SELECT coalesce(sum("downloads"), 0) FROM "SiteDownloadDaily") AS downloads,
                (SELECT coalesce(sum("downloads"), 0) FROM "ModVersionDownloadDaily" WHERE "day" >= $1::date)
                  + (SELECT coalesce(sum("downloads"), 0) FROM "SiteDownloadDaily" WHERE "day" >= $1::date) AS downloads7d`,
        [since7],
      ),
    ]);
    const listed = snapshot.entries.filter((e) => isListable(snapshot, e, true));
    return {
      value: {
        users: num(figures?.users),
        mods: listed.filter((e) => e.kind !== 'build').length,
        builds: listed.filter((e) => e.kind === 'build').length,
        creators: new Set(listed.map((e) => e.userId)).size,
        downloads: num(figures?.downloads),
        downloads7d: num(figures?.downloads7d),
        generatedAt: now.toISOString(),
      },
      tags: ['stats'],
    };
  });
}

const PULSE_RECENT = 12;

/** "The living island" readout of the landing (cached 15 s). */
export function getLivePulse(ctx: Ctx, config: CatalogConfig): Promise<LivePulse> {
  return cached<LivePulse>(ctx, { name: 'site:pulse', max: 1, ttlMs: 15_000 }, 'pulse', async () => {
    const now = ctx.clock.now();
    const midnight = new Date(`${utcDay(now)}T00:00:00.000Z`);
    const hourAgo = new Date(now.getTime() - 3_600_000);
    const [snapshot, counts, recent, releases] = await Promise.all([
      getSnapshot(ctx, config),
      row<{ today: string; hour: string }>(
        ctx.db,
        `SELECT count(*) FILTER (WHERE "createdAt" >= ${UTC_PARAM(1)}) AS today,
                count(*) FILTER (WHERE "createdAt" >= ${UTC_PARAM(2)}) AS hour
           FROM "ModDownload" WHERE "createdAt" >= least(${UTC_PARAM(1)}, ${UTC_PARAM(2)})`,
        [midnight.toISOString(), hourAgo.toISOString()],
      ),
      rows<{ modId: number; version: string; at: Date }>(
        ctx.db,
        `SELECT v."modId", v."version", d."createdAt" AS at
           FROM "ModDownload" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
          WHERE d."createdAt" >= ${UTC_PARAM(1)} AND v."modId" IS NOT NULL
          ORDER BY d."createdAt" DESC, d."id" DESC LIMIT 60`,
        [new Date(now.getTime() - DAY_MS).toISOString()],
      ),
      rows<{ modId: number; version: string; at: Date }>(
        ctx.db,
        `SELECT v."modId", v."version", coalesce(v."publishedAt", v."createdAt") AS at
           FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
          WHERE m."status" = 'published' AND NOT m."isNSFW" AND v."status" = 'active'
          ORDER BY coalesce(v."publishedAt", v."createdAt") DESC, v."id" DESC LIMIT 10`,
      ),
    ]);
    const publicEntry = (modId: number) => {
      const entry = snapshot.byId.get(modId);
      return entry && isListable(snapshot, entry) ? entry : null;
    };
    const recentItems: LivePulse['recent'] = [];
    for (const r of recent) {
      const entry = publicEntry(r.modId);
      if (!entry) continue;
      recentItems.push({ mod: entry.ref, version: r.version.slice(0, 64), at: r.at.toISOString() });
      if (recentItems.length >= PULSE_RECENT) break;
    }
    const latest = releases.map((r) => ({ r, entry: publicEntry(r.modId) })).find((x) => x.entry !== null);
    return {
      value: {
        downloadsToday: num(counts?.today),
        downloadsLastHour: num(counts?.hour),
        recent: recentItems,
        latestRelease: latest?.entry
          ? { mod: latest.entry.ref, version: latest.r.version.slice(0, 64), at: latest.r.at.toISOString() }
          : null,
        generatedAt: now.toISOString(),
      },
      tags: ['stats'],
    };
  });
}

/** Live counters of a reachable mod (cached 15 s). */
export async function getModLive(ctx: Ctx, config: CatalogConfig, id: number): Promise<ModLive> {
  const snapshot = await getSnapshot(ctx, config);
  const entry = assertReachable(snapshot, snapshot.byId.get(id));
  return cached<ModLive>(ctx, { name: 'site:mod-live', max: 500, ttlMs: 15_000 }, String(entry.id), async () => {
    const now = ctx.clock.now();
    const figures = await row<{ downloads: string; day: string; followers: string }>(
      ctx.db,
      `SELECT (SELECT coalesce(sum(a."downloads"), 0) FROM "ModVersionDownloadDaily" a
                 JOIN "ModVersion" v ON v."id" = a."modVersionId" WHERE v."modId" = $1) AS downloads,
              (SELECT count(*) FROM "ModDownload" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
                WHERE v."modId" = $1 AND d."createdAt" >= ${UTC_PARAM(2)}) AS day,
              (SELECT count(*) FROM "ModFavorite" WHERE "modId" = $1) AS followers`,
      [entry.id, new Date(now.getTime() - DAY_MS).toISOString()],
    );
    return {
      value: {
        // The aggregates start with the legacy history; never show less than the card figure.
        downloads: Math.max(num(figures?.downloads), entry.downloads),
        downloads24h: num(figures?.day),
        followers: num(figures?.followers),
        generatedAt: now.toISOString(),
      },
      tags: [`mod:${entry.id}`, 'stats'],
    };
  });
}

function addDays(day: string, n: number): string {
  return utcDay(new Date(Date.parse(`${day}T00:00:00.000Z`) + n * DAY_MS));
}

/** Monday of the ISO week of `day`. */
function weekStart(day: string): string {
  const d = new Date(`${day}T00:00:00.000Z`);
  const offset = (d.getUTCDay() + 6) % 7;
  return addDays(day, -offset);
}

/** Zero-filled daily (30 d, 1 y) or weekly (all) download series of a reachable mod. */
export async function getModPublicStats(
  ctx: Ctx,
  config: CatalogConfig,
  id: number,
  range: ModPublicStats['range'],
): Promise<ModPublicStats> {
  const snapshot = await getSnapshot(ctx, config);
  const entry = assertReachable(snapshot, snapshot.byId.get(id));
  return cached<ModPublicStats>(
    ctx,
    { name: 'site:mod-series', max: 500, ttlMs: 60_000 },
    `${entry.id}:${range}`,
    async () => {
      const to = utcDay(ctx.clock.now());
      let from: string;
      let granularity: ModPublicStats['granularity'] = 'day';
      if (range === '30d') from = addDays(to, -29);
      else if (range === '1y') from = addDays(to, -364);
      else {
        granularity = 'week';
        const first = await row<{ day: string | null }>(
          ctx.db,
          `SELECT least(
                  (SELECT min(a."day") FROM "ModVersionDownloadDaily" a JOIN "ModVersion" v ON v."id" = a."modVersionId"
                    WHERE v."modId" = $1),
                  (SELECT "createdAt"::date FROM "Mod" WHERE "id" = $1))::text AS day`,
          [entry.id],
        );
        from = weekStart(first?.day && first.day < to ? first.day : to);
      }
      const found = await rows<{ day: string; downloads: string }>(
        ctx.db,
        `SELECT ${granularity === 'week' ? `date_trunc('week', a."day")::date::text` : `a."day"::text`} AS day,
              sum(a."downloads") AS downloads
         FROM "ModVersionDownloadDaily" a JOIN "ModVersion" v ON v."id" = a."modVersionId"
        WHERE v."modId" = $1 AND a."day" BETWEEN $2::date AND $3::date
        GROUP BY 1 ORDER BY 1`,
        [entry.id, from, to],
      );
      const byDay = new Map(found.map((r) => [r.day, num(r.downloads)]));
      const series: ModPublicStats['series'] = [];
      const step = granularity === 'week' ? 7 : 1;
      for (let day = from; day <= to; day = addDays(day, step)) series.push({ day, downloads: byDay.get(day) ?? 0 });
      return { value: { range, from, to, granularity, series }, tags: [`mod:${entry.id}`, 'stats'] };
    },
  );
}
