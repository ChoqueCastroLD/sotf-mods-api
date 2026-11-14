/**
 * Site traffic for the owner dashboard (2026-11): `"SiteTrafficDaily"` rows per UTC day and
 * dimension, rebuilt hourly by `stats.rollup` from the raw `"AnalyticsEvent"` rows (90 days) and
 * the download tables, and the report read by `GET /admin/traffic` (only the site owner).
 *
 * Dimensions (`views` / `visitors` = rows / distinct daily visitor hashes):
 * - page views: `total`, `type` (page type from the path), `country`, `device`, `referrer`,
 *   `locale`, `auth` (`member` / `guest`), `page` (the 100 most viewed paths of the day);
 * - `event`: beacon and server events (manager clicks, download clicks, searches, modpack downloads);
 * - `manager` (`active`, `downloads`, `api_calls`) and `manager_version`: SotF Mods Manager, told
 *   apart by its `SotfModsManager/<version>` User-Agent;
 * - `downloads`: mod downloads per channel (+ `all`); `content`: new members, mods and versions.
 */
import type { Database } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { assertStaff } from '../moderation/guard.ts';
import { visitorHash } from './ingest.ts';

/** Handles that may open the owner dashboard (the site owner only). */
export const SITE_OWNER_HANDLES: readonly string[] = ['shokocc'];

/** User-Agent prefix of SotF Mods Manager (`SotfModsManager/0.7.0`). */
export const MANAGER_UA = /^SotfModsManager\/([\w.+-]{1,32})/i;

/** Beacon and server events counted per day in the `event` dimension. */
export const TRAFFIC_EVENT_KINDS = [
  'manager_download_click',
  'manager_open_click',
  'download_click',
  'search',
  'signup',
  'modpack_download',
] as const;

/**
 * Records the first request of a SotF Mods Manager install in the UTC day (`manager_active`, with
 * its version). `seen` keeps the visitor hashes already recorded by this process today, so a busy
 * launcher costs one insert a day; several API processes may each insert once (the report counts
 * distinct hashes).
 */
export async function recordManagerActive(
  ctx: Ctx,
  userAgent: string,
  seen: { day: string; hashes: Set<string> },
): Promise<boolean> {
  const version = MANAGER_UA.exec(userAgent.trim())?.[1];
  if (!version || !ctx.ip) return false;
  const now = ctx.clock.now();
  const day = utcDay(now);
  if (seen.day !== day) {
    seen.day = day;
    seen.hashes.clear();
  }
  const hash = visitorHash(ctx.appSecret, ctx.ip, userAgent.trim().slice(0, 512), day);
  if (seen.hashes.has(hash) || seen.hashes.size > 100_000) return false;
  seen.hashes.add(hash);
  await ctx.db.execute(sql`
    INSERT INTO "AnalyticsEvent" ("ts", "kind", "path", "country", "device", "visitorHash", "props")
    VALUES (${now.toISOString()}::timestamptz, 'manager_active', '/', ${ctx.country}, 'desktop', ${hash},
            ${JSON.stringify({ version })}::jsonb)`);
  return true;
}

const LOCALE_PREFIX = '^/(es|de|fr|it|pt|pl|ru|sv|nl|zh|ja|tr)(/|$)';
const TOP_PAGES = 100;
/** Days rebuilt per run on top of yesterday and today (fills the history after a deploy). */
const BACKFILL_DAYS_PER_RUN = 120;

function nextDay(day: string): string {
  const date = new Date(`${day}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
}

function addDays(day: string, delta: number): string {
  const date = new Date(`${day}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + delta);
  return date.toISOString().slice(0, 10);
}

/** Rebuilds the rows of one UTC day (idempotent: delete + insert in one transaction). */
export async function rollupTrafficDay(exec: Database, day: string): Promise<void> {
  const from = `${day}T00:00:00.000Z`;
  const to = `${nextDay(day)}T00:00:00.000Z`;
  await exec.transaction(async (tx) => {
    await tx.execute(sql`DELETE FROM "SiteTrafficDaily" WHERE "day" = ${day}::date`);
    await tx.execute(sql`
      INSERT INTO "SiteTrafficDaily" ("day", "dimension", "key", "views", "visitors")
      WITH pv AS (
        SELECT "visitorHash" AS v,
               coalesce("country", '??') AS country,
               coalesce("device", 'unknown') AS device,
               coalesce("referrerDomain", 'direct') AS referrer,
               coalesce("locale", 'en') AS locale,
               CASE WHEN "props"->>'auth' = '1' THEN 'member' ELSE 'guest' END AS auth,
               regexp_replace("path", ${LOCALE_PREFIX}, '/') AS p
          FROM "AnalyticsEvent"
         WHERE "kind" = 'page_view' AND "ts" >= ${from}::timestamptz AND "ts" < ${to}::timestamptz
      ), typed AS (
        SELECT *, CASE
            WHEN p = '/' THEN 'home'
            WHEN p ~ '^/mods/?$' THEN 'mods_list'
            WHEN p ~ '^/mods/[^/]+/[^/]+' THEN 'mod'
            WHEN p ~ '^/builds/?$' THEN 'builds_list'
            WHEN p ~ '^/builds/[^/]+/[^/]+' THEN 'build'
            WHEN p ~ '^/modpacks/?$' THEN 'modpacks_list'
            WHEN p ~ '^/modpacks/' THEN 'modpack'
            WHEN p ~ '^/(categories|category)(/|$)' THEN 'category'
            WHEN p ~ '^/tags?(/|$)' THEN 'tag'
            WHEN p ~ '^/profile(/|$)' THEN 'profile'
            WHEN p ~ '^/search(/|$)' THEN 'search'
            WHEN p ~ '^/install(/|$)' THEN 'install'
            WHEN p ~ '^/(login|register|forgot-password|logout)(/|$)' THEN 'auth'
            WHEN p ~ '^/(dashboard|moderation|settings|me|notifications)(/|$)' THEN 'console'
            WHEN p ~ '^/developers(/|$)' THEN 'developers'
            WHEN p ~ '^/logs(/|$)' THEN 'logs'
            ELSE 'other' END AS type
          FROM pv
      )
      SELECT ${day}::date, d, k, n, u FROM (
        SELECT 'total' AS d, 'all' AS k, count(*) AS n, count(DISTINCT v) AS u FROM typed HAVING count(*) > 0
        UNION ALL SELECT 'type', type, count(*), count(DISTINCT v) FROM typed GROUP BY type
        UNION ALL SELECT 'country', country, count(*), count(DISTINCT v) FROM typed GROUP BY country
        UNION ALL SELECT 'device', device, count(*), count(DISTINCT v) FROM typed GROUP BY device
        UNION ALL SELECT 'referrer', referrer, count(*), count(DISTINCT v) FROM typed GROUP BY referrer
        UNION ALL SELECT 'locale', locale, count(*), count(DISTINCT v) FROM typed GROUP BY locale
        UNION ALL SELECT 'auth', auth, count(*), count(DISTINCT v) FROM typed GROUP BY auth
        UNION ALL (SELECT 'page', left(p, 200), count(*), count(DISTINCT v) FROM typed
                    GROUP BY left(p, 200) ORDER BY count(*) DESC LIMIT ${TOP_PAGES})
      ) rows`);
    await tx.execute(sql`
      INSERT INTO "SiteTrafficDaily" ("day", "dimension", "key", "views", "visitors")
      SELECT ${day}::date, d, k, sum(n)::int, sum(u)::int FROM (
        SELECT 'event' AS d, "kind" AS k, count(*) AS n, count(DISTINCT "visitorHash") AS u
          FROM "AnalyticsEvent"
         WHERE "kind" IN (${sql.join(
           TRAFFIC_EVENT_KINDS.map((kind) => sql`${kind}`),
           sql`, `,
         )})
           AND "ts" >= ${from}::timestamptz AND "ts" < ${to}::timestamptz
         GROUP BY "kind"
        UNION ALL
        SELECT 'manager', 'active', count(*), count(DISTINCT "visitorHash")
          FROM "AnalyticsEvent"
         WHERE "kind" = 'manager_active' AND "ts" >= ${from}::timestamptz AND "ts" < ${to}::timestamptz
        HAVING count(*) > 0
        UNION ALL
        SELECT 'manager_version', coalesce("props"->>'version', '?'), count(*), count(DISTINCT "visitorHash")
          FROM "AnalyticsEvent"
         WHERE "kind" = 'manager_active' AND "ts" >= ${from}::timestamptz AND "ts" < ${to}::timestamptz
         GROUP BY 2
        UNION ALL
        SELECT 'manager', 'api_calls', coalesce(sum(("props"->>'count')::int), 0), 0
          FROM "AnalyticsEvent"
         WHERE "kind" = 'legacy_call' AND "props"->>'ua' ILIKE 'SotfModsManager/%'
           AND "ts" >= ${from}::timestamptz AND "ts" < ${to}::timestamptz
        HAVING count(*) > 0
        UNION ALL
        SELECT 'manager', 'downloads', count(*), count(DISTINCT "ipHash")
          FROM "ModDownload"
         WHERE "createdAt" >= ${from}::timestamptz AND "createdAt" < ${to}::timestamptz
           AND "userAgent" ILIKE 'SotfModsManager/%'
        HAVING count(*) > 0
        UNION ALL
        SELECT 'downloads', "channel", sum("downloads"), sum("uniqueDownloads")
          FROM "ModVersionDownloadDaily" WHERE "day" = ${day}::date GROUP BY "channel"
        UNION ALL
        SELECT 'downloads', "channel", sum("downloads"), 0
          FROM "SiteDownloadDaily" WHERE "day" = ${day}::date GROUP BY "channel"
        UNION ALL
        SELECT 'content', 'members', count(*), 0 FROM "User"
         WHERE "createdAt" >= ${from}::timestamptz AND "createdAt" < ${to}::timestamptz HAVING count(*) > 0
        UNION ALL
        SELECT 'content', 'mods', count(*), 0 FROM "Mod"
         WHERE "createdAt" >= ${from}::timestamptz AND "createdAt" < ${to}::timestamptz HAVING count(*) > 0
        UNION ALL
        SELECT 'content', 'versions', count(*), 0 FROM "ModVersion"
         WHERE "createdAt" >= ${from}::timestamptz AND "createdAt" < ${to}::timestamptz HAVING count(*) > 0
      ) rows
      GROUP BY d, k`);
    await tx.execute(sql`
      INSERT INTO "SiteTrafficDaily" ("day", "dimension", "key", "views", "visitors")
      SELECT ${day}::date, 'downloads', 'all', coalesce(sum("views"), 0), coalesce(sum("visitors"), 0)
        FROM "SiteTrafficDaily" WHERE "day" = ${day}::date AND "dimension" = 'downloads'
      UNION ALL SELECT ${day}::date, 'meta', 'rolled', 1, 0`);
  });
}

/**
 * Hourly: yesterday and today, then up to {@link BACKFILL_DAYS_PER_RUN} older days that have
 * events or downloads but were never rolled up (the year before the first run fills in a few runs).
 */
export async function rollupSiteTraffic(exec: Database, now: Date): Promise<{ days: number }> {
  const today = now.toISOString().slice(0, 10);
  const since = addDays(today, -365);
  const missing = await exec.execute<{ day: string }>(sql`
    SELECT to_char(day, 'YYYY-MM-DD') AS day FROM (
      SELECT DISTINCT ("ts" AT TIME ZONE 'UTC')::date AS day FROM "AnalyticsEvent"
       WHERE "kind" = 'page_view' AND "ts" >= ${since}::date
      UNION
      SELECT DISTINCT "day" FROM "ModVersionDownloadDaily" WHERE "day" >= ${since}::date
    ) candidates
    WHERE day < ${addDays(today, -1)}::date
      AND NOT EXISTS (SELECT 1 FROM "SiteTrafficDaily" s
                       WHERE s."day" = candidates.day AND s."dimension" = 'meta' AND s."key" = 'rolled')
    ORDER BY day DESC
    LIMIT ${BACKFILL_DAYS_PER_RUN}`);
  const days = [today, addDays(today, -1), ...missing.rows.map((row) => row.day)];
  for (const day of days) await rollupTrafficDay(exec, day);
  return { days: days.length };
}

// -----------------------------------------------------------------------------------------------
// Report
// -----------------------------------------------------------------------------------------------

export const TRAFFIC_RANGES = { '7d': 7, '30d': 30, '90d': 90, '365d': 365 } as const;
export type TrafficRange = keyof typeof TRAFFIC_RANGES;

export interface TrafficDay {
  day: string;
  views: number;
  visitors: number;
  memberViews: number;
  downloads: number;
  managerActive: number;
  managerDownloads: number;
  managerClicks: number;
  members: number;
  mods: number;
  versions: number;
}

export interface TrafficRow {
  key: string;
  views: number;
  visitors: number;
}

export interface TrafficTotals {
  views: number;
  visitors: number;
  downloads: number;
  managerActive: number;
  managerDownloads: number;
  managerClicks: number;
  members: number;
  mods: number;
}

export interface TrafficReport {
  range: TrafficRange;
  from: string;
  to: string;
  days: TrafficDay[];
  totals: TrafficTotals;
  previous: TrafficTotals;
  breakdowns: Record<string, TrafficRow[]>;
  topMods: Array<{ id: number; name: string; kind: 'mod' | 'build'; path: string; views: number; downloads: number }>;
  updatedAt: string;
}

const BREAKDOWNS = [
  'type',
  'country',
  'device',
  'referrer',
  'locale',
  'auth',
  'page',
  'event',
  'downloads',
  'manager_version',
];

/** Only the site owner (an admin whose handle is in {@link SITE_OWNER_HANDLES}). */
export async function assertSiteOwner(ctx: Ctx): Promise<void> {
  const staff = await assertStaff(ctx, 'admin.rum');
  const result = await ctx.db.execute<{ handle: string }>(
    sql`SELECT "slug" AS handle FROM "User" WHERE "id" = ${staff.userId}`,
  );
  const handle = (result.rows[0]?.handle ?? '').toLowerCase();
  if (!SITE_OWNER_HANDLES.includes(handle)) throw errors.forbidden();
}

function emptyTotals(): TrafficTotals {
  return {
    views: 0,
    visitors: 0,
    downloads: 0,
    managerActive: 0,
    managerDownloads: 0,
    managerClicks: 0,
    members: 0,
    mods: 0,
  };
}

function totalsOf(days: readonly TrafficDay[]): TrafficTotals {
  const out = emptyTotals();
  for (const d of days) {
    out.views += d.views;
    out.visitors += d.visitors;
    out.downloads += d.downloads;
    out.managerActive += d.managerActive;
    out.managerDownloads += d.managerDownloads;
    out.managerClicks += d.managerClicks;
    out.members += d.members;
    out.mods += d.mods;
  }
  return out;
}

type Row = {
  day: string;
  dimension: string;
  key: string;
  views: number;
  visitors: number;
};

function daysOf(rows: readonly Row[], from: string, to: string): TrafficDay[] {
  const byDay = new Map<string, TrafficDay>();
  for (let day = from; day <= to; day = nextDay(day)) {
    byDay.set(day, {
      day,
      views: 0,
      visitors: 0,
      memberViews: 0,
      downloads: 0,
      managerActive: 0,
      managerDownloads: 0,
      managerClicks: 0,
      members: 0,
      mods: 0,
      versions: 0,
    });
  }
  for (const r of rows) {
    const d = byDay.get(r.day);
    if (!d) continue;
    const k = `${r.dimension}:${r.key}`;
    if (k === 'total:all') {
      d.views = r.views;
      d.visitors = r.visitors;
    } else if (k === 'auth:member') d.memberViews = r.views;
    else if (k === 'downloads:all') d.downloads = r.views;
    else if (k === 'manager:active') d.managerActive = r.visitors;
    else if (k === 'manager:downloads') d.managerDownloads = r.views;
    else if (k === 'event:manager_download_click') d.managerClicks = r.views;
    else if (k === 'content:members') d.members = r.views;
    else if (k === 'content:mods') d.mods = r.views;
    else if (k === 'content:versions') d.versions = r.views;
  }
  return [...byDay.values()];
}

/** `GET /admin/traffic`: the owner dashboard for a range ending today (UTC). */
export async function getTrafficReport(ctx: Ctx, range: TrafficRange): Promise<TrafficReport> {
  await assertSiteOwner(ctx);
  const now = ctx.clock.now();
  const to = now.toISOString().slice(0, 10);
  const span = TRAFFIC_RANGES[range];
  const from = addDays(to, -(span - 1));
  const prevFrom = addDays(from, -span);
  const result = await ctx.db.execute<Row>(sql`
    SELECT to_char("day", 'YYYY-MM-DD') AS day, "dimension", "key", "views", "visitors"
      FROM "SiteTrafficDaily"
     WHERE "day" >= ${prevFrom}::date AND "day" <= ${to}::date AND "dimension" <> 'meta'`);
  const rows = result.rows.map((r) => ({ ...r, views: Number(r.views), visitors: Number(r.visitors) }));
  const current = rows.filter((r) => r.day >= from);
  const days = daysOf(current, from, to);
  const previous = totalsOf(
    daysOf(
      rows.filter((r) => r.day < from),
      prevFrom,
      addDays(from, -1),
    ),
  );

  const breakdowns: Record<string, TrafficRow[]> = {};
  for (const dimension of BREAKDOWNS) {
    const sums = new Map<string, TrafficRow>();
    for (const r of current) {
      if (r.dimension !== dimension) continue;
      const row = sums.get(r.key) ?? { key: r.key, views: 0, visitors: 0 };
      row.views += r.views;
      row.visitors += r.visitors;
      sums.set(r.key, row);
    }
    breakdowns[dimension] = [...sums.values()].sort((a, b) => b.views - a.views).slice(0, 50);
  }

  const top = await ctx.db.execute<{
    id: number;
    name: string;
    kind: string;
    handle: string;
    slug: string;
    views: number;
    downloads: number;
  }>(sql`
    SELECT m."id", m."name", coalesce(m."type", 'Mod') AS kind, u."slug" AS handle, m."slug",
           sum(s."views")::int AS views, sum(s."downloads")::int AS downloads
      FROM "ModStatsDaily" s JOIN "Mod" m ON m."id" = s."modId" JOIN "User" u ON u."id" = m."userId"
     WHERE s."day" >= ${from}::date AND s."day" <= ${to}::date
     GROUP BY m."id", u."slug"
     ORDER BY sum(s."downloads") DESC, sum(s."views") DESC
     LIMIT 20`);

  return {
    range,
    from,
    to,
    days,
    totals: totalsOf(days),
    previous,
    breakdowns,
    topMods: top.rows.map((r) => ({
      id: Number(r.id),
      name: r.name,
      kind: String(r.kind).toLowerCase() === 'build' ? ('build' as const) : ('mod' as const),
      path: `/${String(r.kind).toLowerCase() === 'build' ? 'builds' : 'mods'}/${r.handle}/${r.slug}`,
      views: Number(r.views),
      downloads: Number(r.downloads),
    })),
    updatedAt: now.toISOString(),
  };
}
