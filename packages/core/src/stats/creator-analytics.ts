/**
 * Creator analytics (`GET /studio/analytics`, `GET /studio/analytics.csv`, PLAN §7.5 "Analíticas por
 * mod", T0-20).
 *
 * - Downloads and unique downloads come from `ModVersionDownloadDaily`: exact and live (the flush
 *   writes it every 2 s) and with the **complete legacy history since 2023** (B1). Unique
 *   downloads exist since v2 (legacy rows have none).
 * - Views, referrers and visitor locales and countries come from the hourly `ModStatsDaily` rollup.
 * - Follows gained per day from `ModFavorite.createdAt`; ratings from the visible reviews.
 * - Every series is zero-filled and bucketed by day, ISO week (Monday) or month; a bucket is
 *   labelled with its first day inside the range.
 * - `byVersion`: the 8 versions with most downloads in the range, the rest as `other`. With several
 *   mods the label is prefixed with the mod name.
 * - Conversion = downloads from the site (`web` channel) ÷ views: mod managers and the in-game
 *   checker download without a page view, so counting them would inflate it.
 */
import type { AnalyticsDTO, AnalyticsQuery } from '@sotf/contracts/studio';
import type { z } from 'zod';
import { num, rows } from '../catalog/sql.ts';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { toCsv } from './csv.ts';
import { addDays, analyticsScope, daysBetween } from './studio-common.ts';

type Analytics = z.infer<typeof AnalyticsDTO>;
type Query = z.output<typeof AnalyticsQuery>;
type Granularity = Query['granularity'];

/** First day of the "all" range when a mod has no data at all (the site's legacy history). */
export const HISTORY_START = '2023-01-01';
export const MAX_VERSIONS = 8;
export const MAX_REFERRERS = 20;
export const MAX_LOCALES = 20;
export const MAX_COUNTRIES = 50;
export const MAX_VERSION_MARKERS = 200;

/** Longest custom range (days). */
export const MAX_CUSTOM_DAYS = 1100;

const RANGE_DAYS: Record<Exclude<Query['range'], 'all'>, number> = { '7d': 7, '30d': 30, '90d': 90 };

/** Start of the bucket containing `day`. */
export function bucketOf(day: string, granularity: Granularity): string {
  if (granularity === 'day') return day;
  if (granularity === 'month') return `${day.slice(0, 7)}-01`;
  const date = new Date(`${day}T00:00:00.000Z`);
  const weekday = (date.getUTCDay() + 6) % 7; // Monday = 0
  return addDays(day, -weekday);
}

/** Label of a bucket: its start, clamped to the range start. */
function labelOf(day: string, granularity: Granularity, from: string): string {
  const start = bucketOf(day, granularity);
  return start < from ? from : start;
}

/** Ordered bucket labels covering [from, to]. */
export function bucketLabels(from: string, to: string, granularity: Granularity): string[] {
  const labels: string[] = [];
  for (const day of daysBetween(from, to)) {
    const label = labelOf(day, granularity, from);
    if (labels[labels.length - 1] !== label) labels.push(label);
  }
  return labels;
}

interface Scope {
  modIds: number[];
  from: string;
  to: string;
  multi: boolean;
  custom: boolean;
}

async function scopeOf(ctx: Ctx, query: Query): Promise<Scope> {
  const modIds = await analyticsScope(ctx, query.modId);
  const today = utcDay(ctx.clock.now());
  if (query.from !== undefined || query.to !== undefined) {
    const customTo = query.to ?? today;
    const customFrom = query.from ?? addDays(customTo, -29);
    if (customFrom > customTo || customTo > today || daysBetween(customFrom, customTo).length > MAX_CUSTOM_DAYS) {
      throw errors.validation('Invalid date range', [
        {
          path: 'from',
          code: 'invalid',
          message: `from must not be after to, to not after today, at most ${MAX_CUSTOM_DAYS} days`,
        },
      ]);
    }
    return { modIds, from: customFrom, to: customTo, multi: query.modId === undefined, custom: true };
  }
  const to = today;
  let from: string;
  if (query.range === 'all') {
    const first = await rows<{ day: string | null }>(
      ctx.db,
      `SELECT least(
                (SELECT min(d."day") FROM "ModVersionDownloadDaily" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
                  WHERE v."modId" = ANY($1::int[])),
                (SELECT min("createdAt")::date FROM "Mod" WHERE "id" = ANY($1::int[])))::text AS day`,
      [modIds],
    );
    const day = first[0]?.day ?? null;
    from = day && day < to ? (day < HISTORY_START ? HISTORY_START : day) : to;
  } else {
    from = addDays(to, -(RANGE_DAYS[query.range] - 1));
  }
  return { modIds, from, to, multi: query.modId === undefined, custom: false };
}

interface DownloadRow {
  day: string;
  modId: number;
  modName: string;
  versionId: number;
  version: string;
  channel: string;
  downloads: string;
  uniq: string;
}

async function downloadRows(ctx: Ctx, scope: Scope): Promise<DownloadRow[]> {
  if (scope.modIds.length === 0) return [];
  return rows<DownloadRow>(
    ctx.db,
    `SELECT d."day"::text AS day, v."modId", m."name" AS "modName", v."id" AS "versionId", v."version",
            d."channel", d."downloads", d."uniqueDownloads" AS uniq
       FROM "ModVersionDownloadDaily" d
       JOIN "ModVersion" v ON v."id" = d."modVersionId"
       JOIN "Mod" m ON m."id" = v."modId"
      WHERE v."modId" = ANY($1::int[]) AND d."day" BETWEEN $2::date AND $3::date
      ORDER BY d."day", v."modId", v."id", d."channel"`,
    [scope.modIds, scope.from, scope.to],
  );
}

interface ViewRow {
  day: string;
  modId: number;
  modName: string;
  views: number;
}

async function viewRows(ctx: Ctx, scope: Scope): Promise<ViewRow[]> {
  if (scope.modIds.length === 0) return [];
  return rows<ViewRow>(
    ctx.db,
    `SELECT s."day"::text AS day, s."modId", m."name" AS "modName", s."views"
       FROM "ModStatsDaily" s JOIN "Mod" m ON m."id" = s."modId"
      WHERE s."modId" = ANY($1::int[]) AND s."day" BETWEEN $2::date AND $3::date AND s."views" > 0
      ORDER BY s."day", s."modId"`,
    [scope.modIds, scope.from, scope.to],
  );
}

function topEntries(found: Array<{ key: string; n: string }>, max: number): Array<{ key: string; n: number }> {
  return found
    .map((r) => ({ key: r.key, n: num(r.n) }))
    .filter((r) => r.n > 0)
    .sort((a, b) => b.n - a.n || (a.key < b.key ? -1 : 1))
    .slice(0, max);
}

export async function getCreatorAnalytics(ctx: Ctx, query: Query): Promise<Analytics> {
  const scope = await scopeOf(ctx, query);
  const { modIds, from, to } = scope;
  const g = query.granularity;
  const labels = bucketLabels(from, to, g);
  const empty = () => new Map(labels.map((l) => [l, 0]));

  const [dl, views, follows, referrers, locales, countries, ratings, versionMarkers, buildMarkers] = await Promise.all([
    downloadRows(ctx, scope),
    viewRows(ctx, scope),
    rows<{ day: string; n: string }>(
      ctx.db,
      `SELECT ("createdAt")::date::text AS day, count(*) AS n FROM "ModFavorite"
        WHERE "modId" = ANY($1::int[]) AND "createdAt" >= $2::date::timestamp AND "createdAt" < ($3::date + 1)::timestamp
        GROUP BY 1`,
      [modIds, from, to],
    ),
    rows<{ key: string; n: string }>(
      ctx.db,
      `SELECT e.key, sum(e.value::bigint) AS n
         FROM "ModStatsDaily" s, jsonb_each_text(s."byReferrer") e
        WHERE s."modId" = ANY($1::int[]) AND s."day" BETWEEN $2::date AND $3::date GROUP BY 1`,
      [modIds, from, to],
    ),
    rows<{ key: string; n: string }>(
      ctx.db,
      `SELECT e.key, sum(e.value::bigint) AS n
         FROM "ModStatsDaily" s, jsonb_each_text(s."byLocale") e
        WHERE s."modId" = ANY($1::int[]) AND s."day" BETWEEN $2::date AND $3::date GROUP BY 1`,
      [modIds, from, to],
    ),
    rows<{ key: string; n: string }>(
      ctx.db,
      `SELECT upper(e.key) AS key, sum(e.value::bigint) AS n
         FROM "ModStatsDaily" s, jsonb_each_text(s."byCountry") e
        WHERE s."modId" = ANY($1::int[]) AND s."day" BETWEEN $2::date AND $3::date AND e.key ~ '^[A-Za-z]{2}$' GROUP BY 1`,
      [modIds, from, to],
    ),
    rows<{ day: string; total: string; n: string }>(
      ctx.db,
      `SELECT ("createdAt")::date::text AS day, sum("rating") AS total, count(*) AS n FROM "ModReview"
        WHERE "modId" = ANY($1::int[]) AND "status" = 'visible'
          AND "createdAt" >= $2::date::timestamp AND "createdAt" < ($3::date + 1)::timestamp
        GROUP BY 1`,
      [modIds, from, to],
    ),
    rows<{ day: string; version: string; modName: string }>(
      ctx.db,
      `SELECT coalesce(v."publishedAt", v."createdAt")::date::text AS day, v."version", m."name" AS "modName"
         FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
        WHERE v."modId" = ANY($1::int[]) AND v."status" IN ('active', 'yanked')
          AND coalesce(v."publishedAt", v."createdAt") >= $2::date::timestamp
          AND coalesce(v."publishedAt", v."createdAt") < ($3::date + 1)::timestamp
        ORDER BY 1, v."id" LIMIT ${MAX_VERSION_MARKERS}`,
      [modIds, from, to],
    ),
    rows<{ day: string; label: string }>(
      ctx.db,
      `SELECT "releasedAt"::text AS day, "label" FROM "GameBuild"
        WHERE "releasedAt" BETWEEN $1::date AND $2::date ORDER BY "releasedAt", "id"`,
      [from, to],
    ),
  ]);

  const downloads = empty();
  const unique = empty();
  const webDownloads = { n: 0 };
  const perVersion = new Map<number, { label: string; n: number }>();
  /** `${bucket}\n${versionId}` → downloads. */
  const perBucketVersion = new Map<string, number>();
  const byChannel: Analytics['byChannel'] = {};
  for (const r of dl) {
    const label = labelOf(r.day, g, from);
    const n = num(r.downloads);
    downloads.set(label, (downloads.get(label) ?? 0) + n);
    unique.set(label, (unique.get(label) ?? 0) + num(r.uniq));
    const version = perVersion.get(r.versionId) ?? {
      label: scope.multi ? `${r.modName} ${r.version}` : r.version,
      n: 0,
    };
    version.n += n;
    perVersion.set(r.versionId, version);
    const key = `${label}\n${r.versionId}`;
    perBucketVersion.set(key, (perBucketVersion.get(key) ?? 0) + n);
    const channel = r.channel as keyof Analytics['byChannel'];
    byChannel[channel] = (byChannel[channel] ?? 0) + n;
    if (r.channel === 'web') webDownloads.n += n;
  }
  const viewSeries = empty();
  for (const r of views) {
    const label = labelOf(r.day, g, from);
    viewSeries.set(label, (viewSeries.get(label) ?? 0) + num(r.views));
  }
  const followSeries = empty();
  for (const r of follows) {
    const label = labelOf(r.day, g, from);
    followSeries.set(label, (followSeries.get(label) ?? 0) + num(r.n));
  }
  const ratingSum = empty();
  const ratingCount = empty();
  for (const r of ratings) {
    const label = labelOf(r.day, g, from);
    ratingSum.set(label, (ratingSum.get(label) ?? 0) + num(r.total));
    ratingCount.set(label, (ratingCount.get(label) ?? 0) + num(r.n));
  }

  const versions = [...perVersion.entries()]
    .map(([id, v]) => ({ id, ...v }))
    .filter((v) => v.n > 0)
    .sort((a, b) => b.n - a.n || a.id - b.id);
  const byVersion = versions.slice(0, MAX_VERSIONS).map((v) => ({ version: v.label, downloads: v.n }));
  const others = versions.slice(MAX_VERSIONS).reduce((sum, v) => sum + v.n, 0);
  if (others > 0) byVersion.push({ version: 'other', downloads: others });
  // Stacked daily bars: the same top versions per bucket, the rest summed as "other".
  const top = new Map(versions.slice(0, MAX_VERSIONS).map((v) => [v.id, v.label]));
  const seriesByVersion: Analytics['seriesByVersion'] = [];
  for (const day of labels) {
    let other = 0;
    for (const v of versions) {
      const n = perBucketVersion.get(`${day}\n${v.id}`) ?? 0;
      if (n === 0) continue;
      const label = top.get(v.id);
      if (label === undefined) other += n;
      else seriesByVersion.push({ day, version: label, downloads: n });
    }
    if (other > 0) seriesByVersion.push({ day, version: 'other', downloads: other });
  }

  const totalDownloads = [...downloads.values()].reduce((a, b) => a + b, 0);
  const totalUnique = [...unique.values()].reduce((a, b) => a + b, 0);
  const totalViews = [...viewSeries.values()].reduce((a, b) => a + b, 0);

  return {
    range: scope.custom ? 'custom' : query.range,
    granularity: g,
    from,
    to,
    series: labels.map((day) => ({
      day,
      downloads: downloads.get(day) ?? 0,
      uniqueDownloads: unique.get(day) ?? 0,
      views: viewSeries.get(day) ?? 0,
      follows: followSeries.get(day) ?? 0,
    })),
    byVersion,
    seriesByVersion,
    byChannel,
    referrers: topEntries(referrers, MAX_REFERRERS).map((r) => ({ domain: r.key, visits: r.n })),
    locales: topEntries(locales, MAX_LOCALES).map((r) => ({ locale: r.key, visits: r.n })),
    countries: topEntries(countries, MAX_COUNTRIES).map((r) => ({ country: r.key, visits: r.n })),
    ratings: labels.map((day) => {
      const count = ratingCount.get(day) ?? 0;
      return { day, average: count > 0 ? Math.round(((ratingSum.get(day) ?? 0) / count) * 100) / 100 : null, count };
    }),
    markers: {
      versions: versionMarkers.map((v) => ({
        day: v.day,
        version: (scope.multi ? `${v.modName} ${v.version}` : v.version).slice(0, 64) || '?',
      })),
      gameBuilds: buildMarkers.map((b) => ({ day: b.day, label: b.label })),
    },
    totals: {
      downloads: totalDownloads,
      uniqueDownloads: totalUnique,
      views: totalViews,
      conversion: totalViews > 0 ? Math.round((webDownloads.n / totalViews) * 10_000) / 10_000 : null,
    },
  };
}

export interface AnalyticsCsv {
  filename: string;
  body: string;
}

/**
 * CSV export (RFC 4180, UTF-8 with BOM for spreadsheet apps): one row per bucket, mod, version and
 * channel with downloads, plus one row per bucket and mod with its views (empty version/channel).
 * Summing any numeric column gives the totals.
 */
export async function getCreatorAnalyticsCsv(ctx: Ctx, query: Query): Promise<AnalyticsCsv> {
  const scope = await scopeOf(ctx, query);
  const g = query.granularity;
  const [dl, views] = await Promise.all([downloadRows(ctx, scope), viewRows(ctx, scope)]);

  type Line = { day: string; mod: string; version: string; channel: string; d: number; u: number; v: number };
  const lines = new Map<string, Line>();
  for (const r of dl) {
    const day = labelOf(r.day, g, scope.from);
    const key = `${day}|${r.modId}|${r.versionId}|${r.channel}`;
    const line = lines.get(key) ?? { day, mod: r.modName, version: r.version, channel: r.channel, d: 0, u: 0, v: 0 };
    line.d += num(r.downloads);
    line.u += num(r.uniq);
    lines.set(key, line);
  }
  for (const r of views) {
    const day = labelOf(r.day, g, scope.from);
    const key = `${day}|${r.modId}|views`;
    const line = lines.get(key) ?? { day, mod: r.modName, version: '', channel: '', d: 0, u: 0, v: 0 };
    line.v += num(r.views);
    lines.set(key, line);
  }
  const sorted = [...lines.values()]
    .filter((l) => l.d > 0 || l.u > 0 || l.v > 0)
    .sort(
      (a, b) =>
        (a.day < b.day ? -1 : a.day > b.day ? 1 : 0) ||
        a.mod.localeCompare(b.mod) ||
        a.version.localeCompare(b.version, undefined, { numeric: true }) ||
        a.channel.localeCompare(b.channel),
    );
  const body = toCsv(
    ['day', 'mod', 'version', 'channel', 'downloads', 'unique_downloads', 'views'],
    sorted.map((l) => [l.day, l.mod, l.version, l.channel, l.d, l.u, l.v]),
  );

  let subject = 'all-mods';
  if (query.modId !== undefined) {
    const [found] = await rows<{ slug: string }>(ctx.db, `SELECT "slug" FROM "Mod" WHERE "id" = $1`, [query.modId]);
    subject =
      (found?.slug ?? String(query.modId)).replace(/[^\w.-]+/g, '-').replace(/^-+|-+$/g, '') || String(query.modId);
  }
  return {
    filename: `sotf-mods-analytics-${subject}-${scope.custom ? `${scope.from}_${scope.to}` : query.range}-${scope.to}.csv`,
    body,
  };
}
