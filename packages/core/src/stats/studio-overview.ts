/**
 * Basecamp summary (`GET /studio/overview`, PLAN §7.5 "Resumen", T0-20).
 *
 * - KPIs with the previous period and a sparkline: downloads 7 d and 30 d (live, from the
 *   per-version daily aggregates the download flush keeps exact), followers (distinct users
 *   following any of my mods; the previous value adds back the unfollows of the period), rating
 *   (visible reviews received; previous = as of 30 days ago), share of "works" field reports on the
 *   current game build for the latest versions (weighted; `previous: null` and an empty sparkline
 *   mean "no reports yet") and views 7 d (hourly rollup).
 * - "Needs attention": rejected listings, breakage reports on the current build, unanswered
 *   questions and reviews, missing source link, a gallery below 3 images.
 * - "My mods" rows, the next download milestone closest to being reached and the next creator
 *   tier (PLAN §7.2).
 */
import { MOD_MILESTONES } from '@sotf/contracts/common';
import { nextCreatorTier } from '@sotf/contracts/gamification';
import type { KpiDTO, StudioModRowDTO, StudioOverviewDTO } from '@sotf/contracts/studio';
import type { z } from 'zod';
import { SERVER_EVENT_KINDS } from '../analytics/ingest.ts';
import type { CatalogConfig } from '../catalog/media.ts';
import { num, rows } from '../catalog/sql.ts';
import { loadModCards } from '../downloads/cards.ts';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import {
  addDays,
  cardOptionsOf,
  creatorOf,
  DAY_MS,
  daysBetween,
  listingQualityScore,
  modRefOf,
  ownedModIds,
} from './studio-common.ts';

type Overview = z.infer<typeof StudioOverviewDTO>;
type Kpi = z.infer<typeof KpiDTO>;
type ModRow = z.infer<typeof StudioModRowDTO>;
type Attention = Overview['needsAttention'][number];

/** Top-level questions older than this no longer count as "needs attention". */
export const ATTENTION_QUESTION_DAYS = 90;
/** Recommended gallery size (quality score). */
export const RECOMMENDED_GALLERY = 3;

export interface ModFacts {
  id: number;
  type: string | null;
  status: string;
  statusReason: string | null;
  qualityScore: number | null;
  sourceUrl: string | null;
  platform: string | null;
  license: string | null;
  descLength: string;
  gallery: string;
  tags: string;
  d7: string;
  total: string;
  openCompat: string;
  brokenCurrent: string;
  unansweredComments: string;
  recentQuestions: string;
  unansweredReviews: string;
}

export const MOD_FACTS_SQL = `
SELECT m."id", m."type", m."status", m."statusReason", m."qualityScore", m."sourceUrl", m."platform", m."license",
       length(coalesce(nullif(m."descriptionMd", ''), m."description")) AS "descLength",
       (SELECT count(*) FROM "ModImage" i WHERE i."modId" = m."id" AND NOT i."isThumbnail") AS "gallery",
       (SELECT count(*) FROM "_ModToTag" t WHERE t."A" = m."id") AS "tags",
       (SELECT coalesce(sum(d."downloads"), 0) FROM "ModVersionDownloadDaily" d
          JOIN "ModVersion" v ON v."id" = d."modVersionId"
         WHERE v."modId" = m."id" AND d."day" > $2::date - 7) AS "d7",
       (SELECT coalesce(sum(d."downloads"), 0) FROM "ModVersionDownloadDaily" d
          JOIN "ModVersion" v ON v."id" = d."modVersionId"
         WHERE v."modId" = m."id") AS "total",
       (SELECT count(*) FROM "CompatReport" r JOIN "ModVersion" v ON v."id" = r."modVersionId"
         WHERE v."modId" = m."id" AND r."status" = 'visible' AND r."result" IN ('broken', 'partial')
           AND r."acknowledgedAt" IS NULL AND r."fixedInVersionId" IS NULL) AS "openCompat",
       (SELECT count(*) FROM "CompatReport" r
          JOIN "ModVersion" v ON v."id" = r."modVersionId" AND v."isLatest"
          JOIN "GameBuild" g ON g."id" = r."gameBuildId" AND g."isCurrent"
         WHERE v."modId" = m."id" AND r."status" = 'visible' AND r."result" = 'broken'
           AND r."acknowledgedAt" IS NULL AND r."fixedInVersionId" IS NULL) AS "brokenCurrent",
       (SELECT count(*) FROM "Comment" c
         WHERE c."modId" = m."id" AND c."status" = 'visible' AND c."replyId" IS NULL AND NOT c."isBugReport"
           AND c."userId" IS DISTINCT FROM m."userId"
           AND NOT EXISTS (SELECT 1 FROM "Comment" r WHERE r."replyId" = c."id" AND r."userId" = m."userId"
                              AND r."status" = 'visible')) AS "unansweredComments",
       (SELECT count(*) FROM "Comment" c
         WHERE c."modId" = m."id" AND c."status" = 'visible' AND c."replyId" IS NULL AND NOT c."isBugReport"
           AND c."userId" IS DISTINCT FROM m."userId"
           AND c."createdAt" >= ($2::date - ${ATTENTION_QUESTION_DAYS})::timestamp
           AND NOT EXISTS (SELECT 1 FROM "Comment" r WHERE r."replyId" = c."id" AND r."userId" = m."userId"
                              AND r."status" = 'visible')) AS "recentQuestions",
       (SELECT count(*) FROM "ModReview" r
         WHERE r."modId" = m."id" AND r."status" = 'visible' AND r."userId" IS DISTINCT FROM m."userId"
           AND r."authorRepliedAt" IS NULL AND r."authorReplyMd" IS NULL) AS "unansweredReviews"
  FROM "Mod" m
 WHERE m."userId" = $1
 ORDER BY m."id"`;

const STATUS_ORDER: Record<string, number> = {
  rejected: 0,
  pending: 1,
  published: 2,
  unlisted: 3,
  archived: 4,
  removed: 5,
};

function kpi(value: number, previous: number | null, sparkline: number[]): Kpi {
  return { value, previous, sparkline };
}

function round(value: number, digits: number): number {
  const f = 10 ** digits;
  return Math.round(value * f) / f;
}

/** Sum of `series` over days in (`from`, `to`] (ISO days, `from` excluded). */
function sumRange(series: Map<string, number>, fromExcluded: string, toIncluded: string): number {
  let total = 0;
  for (const [day, n] of series) if (day > fromExcluded && day <= toIncluded) total += n;
  return total;
}

async function dailySeries(ctx: Ctx, text: string, values: unknown[]): Promise<Map<string, number>> {
  const found = await rows<{ day: string; n: string }>(ctx.db, text, values);
  return new Map(found.map((r) => [r.day, num(r.n)]));
}

/** What needs the creator on one mod (rejected, breakage, unanswered questions and reviews, listing gaps). */
export function attentionOf(f: ModFacts, ref: Attention['mod']): Attention[] {
  const found: Attention[] = [];
  if (f.status === 'rejected') found.push({ kind: 'rejected', mod: ref, count: 1 });
  if (f.status === 'removed') return found;
  // Field-report breakage (`broken_on_current`) is no longer listed: the compatibility reports UI is gone.
  if (num(f.recentQuestions) > 0) found.push({ kind: 'unanswered_questions', mod: ref, count: num(f.recentQuestions) });
  if (num(f.unansweredReviews) > 0) {
    found.push({ kind: 'unanswered_reviews', mod: ref, count: num(f.unansweredReviews) });
  }
  if (f.status === 'published') {
    if (f.type !== 'Build' && !f.sourceUrl?.trim()) found.push({ kind: 'missing_source', mod: ref, count: 1 });
    const gallery = num(f.gallery);
    if (gallery < RECOMMENDED_GALLERY) {
      found.push({ kind: 'missing_gallery', mod: ref, count: RECOMMENDED_GALLERY - gallery });
    }
  }
  return found;
}

const ATTENTION_ORDER: Record<Attention['kind'], number> = {
  rejected: 0,
  broken_on_current: 1,
  unanswered_questions: 2,
  unanswered_reviews: 3,
  missing_source: 4,
  missing_gallery: 5,
};

export function sortAttention(items: Attention[], sort: 'urgency' | 'count' | 'name' = 'urgency'): Attention[] {
  const byName = (a: Attention, b: Attention) => a.mod.name.localeCompare(b.mod.name, 'en', { sensitivity: 'base' });
  return [...items].sort((a, b) => {
    if (sort === 'name') return byName(a, b) || ATTENTION_ORDER[a.kind] - ATTENTION_ORDER[b.kind];
    if (sort === 'count') return b.count - a.count || ATTENTION_ORDER[a.kind] - ATTENTION_ORDER[b.kind] || byName(a, b);
    return ATTENTION_ORDER[a.kind] - ATTENTION_ORDER[b.kind] || b.count - a.count || byName(a, b);
  });
}

export async function getStudioOverview(ctx: Ctx, config: CatalogConfig): Promise<Overview> {
  const userId = creatorOf(ctx);
  const now = ctx.clock.now();
  const today = utcDay(now);
  const modIds = await ownedModIds(ctx, userId);
  if (modIds.length === 0) {
    return {
      kpis: {
        downloads1d: kpi(0, 0, []),
        downloads7d: kpi(0, 0, []),
        downloads30d: kpi(0, 0, []),
        followers: kpi(0, 0, []),
        rating: kpi(0, null, []),
        compatWorksShare: kpi(0, null, []),
        views7d: kpi(0, 0, []),
      },
      needsAttention: [],
      queues: { versionsPending: 0, modsPending: 0, commentsToAnswer: 0, reviewsToAnswer: 0 },
      mods: [],
      nextMilestone: null,
      nextTier: nextCreatorTier(0),
    };
  }

  const since60 = addDays(today, -59);
  const [facts, downloads, views, follows, unfollows, reviews, compat, cards, pendingVersions] = await Promise.all([
    rows<ModFacts>(ctx.db, MOD_FACTS_SQL, [userId, today]),
    dailySeries(
      ctx,
      `SELECT d."day"::text AS day, sum(d."downloads") AS n
         FROM "ModVersionDownloadDaily" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
        WHERE v."modId" = ANY($1::int[]) AND d."day" >= $2::date GROUP BY 1`,
      [modIds, since60],
    ),
    dailySeries(
      ctx,
      `SELECT "day"::text AS day, sum("views") AS n FROM "ModStatsDaily"
        WHERE "modId" = ANY($1::int[]) AND "day" >= $2::date GROUP BY 1`,
      [modIds, addDays(today, -13)],
    ),
    rows<{ day: string | null; n: string }>(
      ctx.db,
      `SELECT CASE WHEN "createdAt" >= $2::date::timestamp THEN ("createdAt")::date::text END AS day,
              count(DISTINCT ("userId", "modId")) AS n
         FROM "ModFavorite" WHERE "modId" = ANY($1::int[]) AND "userId" IS NOT NULL GROUP BY 1`,
      [modIds, addDays(today, -13)],
    ),
    dailySeries(
      ctx,
      `SELECT ("ts" AT TIME ZONE 'UTC')::date::text AS day, count(*) AS n FROM "AnalyticsEvent"
        WHERE "kind" = $3 AND "entityType" = 'mod' AND "entityId" = ANY($1::int[])
          AND "ts" >= $2::date::timestamptz GROUP BY 1`,
      [modIds, addDays(today, -13), SERVER_EVENT_KINDS.modUnfollow],
    ),
    rows<{ rating: number; createdAt: Date }>(
      ctx.db,
      `SELECT r."rating", r."createdAt" FROM "ModReview" r
        WHERE r."modId" = ANY($1::int[]) AND r."status" = 'visible'`,
      [modIds],
    ),
    rows<{ result: string; weight: number; createdAt: Date }>(
      ctx.db,
      `SELECT r."result", r."weight", r."createdAt" FROM "CompatReport" r
         JOIN "ModVersion" v ON v."id" = r."modVersionId" AND v."isLatest"
         JOIN "GameBuild" g ON g."id" = r."gameBuildId" AND g."isCurrent"
        WHERE v."modId" = ANY($1::int[]) AND r."status" = 'visible'`,
      [modIds],
    ),
    loadModCards(ctx.db, modIds, cardOptionsOf(config)),
    rows<{ n: string }>(
      ctx.db,
      `SELECT count(*) AS n FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId"
        WHERE v."modId" = ANY($1::int[]) AND v."status" = 'pending' AND m."status" <> 'removed'`,
      [modIds],
    ),
  ]);

  // Downloads.
  const last = (n: number) => daysBetween(addDays(today, -(n - 1)), today).map((d) => downloads.get(d) ?? 0);
  const d7 = sumRange(downloads, addDays(today, -7), today);
  const prev7 = sumRange(downloads, addDays(today, -14), addDays(today, -7));
  const d30 = sumRange(downloads, addDays(today, -30), today);
  const prev30 = sumRange(downloads, addDays(today, -60), addDays(today, -30));

  // Followers: value at the end of each of the last 14 days = total − gained after + lost after.
  let followersTotal = 0;
  const gained = new Map<string, number>();
  for (const r of follows) {
    followersTotal += num(r.n);
    if (r.day) gained.set(r.day, num(r.n));
  }
  const followerDays = daysBetween(addDays(today, -13), today);
  const followersAt = (day: string) => followersTotal - sumRange(gained, day, today) + sumRange(unfollows, day, today);
  const followersSpark = followerDays.map(followersAt);

  // Rating: all visible reviews; previous = as of 30 days ago; weekly cumulative sparkline.
  const avgBefore = (cutoff: number): number | null => {
    let sum = 0;
    let n = 0;
    for (const r of reviews) {
      if (new Date(r.createdAt).getTime() < cutoff) {
        sum += Number(r.rating);
        n += 1;
      }
    }
    return n > 0 ? round(sum / n, 2) : null;
  };
  const end = now.getTime() + 1;
  const ratingNow = avgBefore(end);
  const ratingSpark: number[] = [];
  for (let week = 7; week >= 0; week -= 1) {
    const value = avgBefore(end - week * 7 * DAY_MS);
    if (value !== null) ratingSpark.push(value);
  }

  // Works share on the current build (weighted field reports on the latest versions).
  const shareBefore = (cutoff: number): number | null => {
    let works = 0;
    let total = 0;
    for (const r of compat) {
      if (new Date(r.createdAt).getTime() >= cutoff) continue;
      const w = Number(r.weight) || 0;
      total += w;
      if (r.result === 'works') works += w;
    }
    return total > 0 ? round(works / total, 3) : null;
  };
  const shareNow = shareBefore(end);
  const shareSpark: number[] = [];
  for (let week = 7; week >= 0; week -= 1) {
    const value = shareBefore(end - week * 7 * DAY_MS);
    if (value !== null) shareSpark.push(value);
  }

  // Views (hourly rollup).
  const viewDays = daysBetween(addDays(today, -6), today);
  const views7 = sumRange(views, addDays(today, -7), today);
  const viewsPrev7 = sumRange(views, addDays(today, -14), addDays(today, -7));

  // Rows, attention and milestones.
  const needsAttention: Attention[] = [];
  const mods: ModRow[] = [];
  let lifetime = 0;
  const queues = {
    versionsPending: num(pendingVersions[0]?.n ?? 0),
    modsPending: 0,
    commentsToAnswer: 0,
    reviewsToAnswer: 0,
  };
  let milestone: Overview['nextMilestone'] = null;
  let milestoneRatio = -1;
  for (const f of facts) {
    lifetime += num(f.total);
    const entry = cards.get(Number(f.id));
    if (!entry) continue;
    const { card } = entry;
    const ref = modRefOf(card);
    const gallery = num(f.gallery);
    const quality =
      f.qualityScore ??
      listingQualityScore({
        galleryImages: gallery,
        descriptionLength: num(f.descLength),
        hasSource: Boolean(f.sourceUrl?.trim()),
        hasPlatform: f.platform !== null,
        tags: num(f.tags),
        hasLicense: Boolean(f.license),
      });
    mods.push({
      mod: card,
      statusReason: f.statusReason,
      downloads7d: num(f.d7),
      openCompatReports: num(f.openCompat),
      unansweredComments: num(f.unansweredComments),
      unansweredReviews: num(f.unansweredReviews),
      qualityScore: Math.max(0, Math.min(100, Math.round(Number(quality)))),
    });

    needsAttention.push(...attentionOf(f, ref));
    if (f.status === 'pending') queues.modsPending += 1;
    if (f.status === 'removed') continue;
    queues.commentsToAnswer += num(f.unansweredComments);
    queues.reviewsToAnswer += num(f.unansweredReviews);
    if (f.status === 'published') {
      const current = num(f.total);
      const threshold = MOD_MILESTONES.find((t) => t > current);
      if (threshold !== undefined && current / threshold > milestoneRatio) {
        milestoneRatio = current / threshold;
        milestone = { mod: ref, threshold, current };
      }
    }
  }

  const sortedAttention = sortAttention(needsAttention);
  mods.sort(
    (a, b) =>
      (STATUS_ORDER[a.mod.status] ?? 9) - (STATUS_ORDER[b.mod.status] ?? 9) ||
      b.downloads7d - a.downloads7d ||
      b.mod.downloads - a.mod.downloads,
  );

  return {
    kpis: {
      downloads1d: kpi(downloads.get(today) ?? 0, downloads.get(addDays(today, -1)) ?? 0, last(14)),
      downloads7d: kpi(d7, prev7, last(7)),
      downloads30d: kpi(d30, prev30, last(30)),
      followers: kpi(followersTotal, followersAt(addDays(today, -7)), followersSpark),
      rating: kpi(ratingNow ?? 0, avgBefore(now.getTime() - 30 * DAY_MS), ratingSpark),
      compatWorksShare: kpi(shareNow ?? 0, shareBefore(now.getTime() - 7 * DAY_MS), shareSpark),
      views7d: kpi(
        views7,
        viewsPrev7,
        viewDays.map((d) => views.get(d) ?? 0),
      ),
    },
    needsAttention: sortedAttention,
    queues,
    mods,
    nextMilestone: milestone,
    nextTier: nextCreatorTier(lifetime),
  };
}
