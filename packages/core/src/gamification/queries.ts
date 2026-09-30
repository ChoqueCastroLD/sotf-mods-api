/**
 * Public reads (PLAN §5.2): the badge catalog of `/achievements` (`GET /badges`), a user's field
 * notebook (`GET /users/:handle/badges`) and the tier/rank lookup other domains embed in
 * `UserRefDTO` (`gamificationRefs`).
 *
 * - `earnedShare` is the share of active (not deleted, not banned) accounts that hold the badge.
 * - The notebook lists earned badges (featured first) and the locked ones with progress; secret
 *   badges stay hidden until earned, retired ones are never offered as locked.
 * - `hideRank` (privacy) hides the survivor rank from the embedded references.
 */

import type { CreatorTierKey, SurvivorRankKey } from '@sotf/contracts/common';
import {
  BADGES,
  type BadgeCatalogDTO,
  CREATOR_TIERS,
  SURVIVOR_RANKS,
  type UserBadgesDTO,
} from '@sotf/contracts/gamification';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { rankOf, tierOf } from '../catalog/snapshot.ts';
import { resolveUserId } from '../catalog/users.ts';
import { intArray, query, queryOne, toDate, toInt } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { BADGE_CRITERIA, badgeIds, REVIEW_TEXT_MIN } from './catalog.ts';

type BadgeCatalog = z.infer<typeof BadgeCatalogDTO>;
type UserBadges = z.infer<typeof UserBadgesDTO>;

/** `GET /badges`. */
export async function getBadgeCatalog(ctx: Ctx): Promise<BadgeCatalog> {
  await badgeIds(ctx.db);
  const rows = await query<{
    key: string;
    group: string;
    tier: number;
    icon: string;
    isSecret: boolean;
    isRepeatable: boolean;
    earned: number;
  }>(
    ctx.db,
    sql`SELECT b."key", b."group", b."tier", b."icon", b."isSecret", b."isRepeatable",
               (SELECT count(DISTINCT ub."userId") FROM "UserBadge" ub
                  JOIN "User" u ON u."id" = ub."userId" AND u."deletedAt" IS NULL AND u."bannedAt" IS NULL
                 WHERE ub."badgeId" = b."id") AS "earned"
          FROM "Badge" b
         WHERE b."retiredAt" IS NULL
         ORDER BY b."sortOrder", b."id"`,
  );
  const active = await queryOne<{ n: number }>(
    ctx.db,
    sql`SELECT count(*) AS "n" FROM "User" WHERE "deletedAt" IS NULL AND "bannedAt" IS NULL`,
  );
  const total = Math.max(1, toInt(active?.n));
  const groups = new Set<string>(BADGES.map((b) => b.group));
  return {
    badges: rows
      .filter((r) => groups.has(r.group))
      .map((r) => ({
        key: r.key,
        group: r.group as BadgeCatalog['badges'][number]['group'],
        tier: Math.max(1, toInt(r.tier)),
        icon: r.icon,
        isSecret: r.isSecret,
        isRepeatable: r.isRepeatable,
        earnedCount: toInt(r.earned),
        earnedShare: Math.min(1, Math.round((toInt(r.earned) / total) * 10_000) / 10_000),
      })),
    survivorRanks: SURVIVOR_RANKS.map((r) => ({ key: r.key, minXp: r.minXp })),
    creatorTiers: CREATOR_TIERS.map((t) => ({ key: t.key, minDownloads: t.minDownloads })),
  };
}

/** Counters behind the progress of the locked badges of one user. */
async function progressCounters(exec: Executor, userId: number): Promise<Record<string, number>> {
  const row = await queryOne<Record<string, number | string | null>>(
    exec,
    sql`
      SELECT
        (SELECT count(*) FROM "Mod" m WHERE m."userId" = ${userId} AND m."status" IN ('published', 'unlisted', 'archived')
            AND coalesce(m."type", 'Mod') <> 'Build') AS "published_mods",
        (SELECT count(*) FROM "Mod" m WHERE m."userId" = ${userId} AND m."status" IN ('published', 'unlisted', 'archived')
            AND m."type" = 'Build') AS "published_builds",
        (SELECT coalesce(max(n), 0) FROM (
           SELECT count(DISTINCT m."id") AS n
             FROM "Mod" lib
             JOIN "ModDependency" d ON d."depModId" = lib."id" AND d."kind" = 'required'
             JOIN "ModVersion" v ON v."id" = d."modVersionId" AND v."isLatest"
             JOIN "Mod" m ON m."id" = v."modId" AND m."status" = 'published' AND m."userId" <> lib."userId"
            WHERE lib."userId" = ${userId}
            GROUP BY lib."id") x) AS "library_dependents_other_authors",
        (SELECT coalesce(max(m."qualityScore"), 0) FROM "Mod" m
          WHERE m."userId" = ${userId} AND m."status" = 'published') AS "mod_quality_score",
        (SELECT coalesce(max(n), 0) FROM (
           SELECT count(*) AS n FROM "ModReview" r JOIN "Mod" m ON m."id" = r."modId"
            WHERE m."userId" = ${userId} AND m."status" = 'published' AND r."status" = 'visible'
            GROUP BY m."id" HAVING avg(r."rating") >= 4.5) x) AS "mod_rating_4_5_with_reviews",
        (SELECT count(*) FROM "CompatReport" c WHERE c."userId" = ${userId} AND c."status" = 'visible') AS "field_reports",
        (SELECT count(*) FROM "XpEvent" e WHERE e."userId" = ${userId} AND e."kind" = 'compat_report_consensus'
            AND e."revokedAt" IS NULL) AS "field_reports_matching_consensus",
        (SELECT count(*) FROM "Comment" c JOIN "Mod" m ON m."id" = c."modId"
          WHERE c."userId" = ${userId} AND c."isBugReport" AND c."bugResolvedInVersionId" IS NOT NULL
            AND c."status" = 'visible' AND m."userId" IS DISTINCT FROM c."userId") AS "bug_reports_resolved",
        (SELECT count(*) FROM "ModReview" r JOIN "Mod" m ON m."id" = r."modId"
          WHERE r."userId" = ${userId} AND r."status" = 'visible' AND m."userId" IS DISTINCT FROM r."userId"
            AND char_length(coalesce(nullif(btrim(r."bodyMd"), ''), btrim(r."message"))) >= ${REVIEW_TEXT_MIN})
          AS "reviews_with_text",
        (SELECT count(*) FROM "ReviewVote" v JOIN "ModReview" r ON r."id" = v."reviewId"
          WHERE r."userId" = ${userId} AND v."value" = 1 AND v."userId" <> r."userId") AS "helpful_votes_received",
        (SELECT count(*) FROM "Comment" c JOIN "Mod" m ON m."id" = c."modId"
          WHERE c."userId" = ${userId} AND c."status" = 'visible' AND m."userId" IS DISTINCT FROM c."userId"
            AND (c."isSolution" OR (c."pinnedById" IS NOT NULL AND c."pinnedById" = m."userId")))
          AS "comments_solution_or_pinned",
        (SELECT coalesce(max(k."followersCount"), 0) FROM "Kit" k
          WHERE k."ownerId" = ${userId} AND k."visibility" = 'public' AND k."deletedAt" IS NULL) AS "public_kit_followers"`,
  );
  const out: Record<string, number> = {};
  for (const [key, value] of Object.entries(row ?? {})) out[key] = toInt(value);
  return out;
}

/** Progress of a locked badge (`null` = no meaningful counter). */
function progressOf(key: string, counters: Record<string, number>): { current: number; target: number } | null {
  const criteria = BADGE_CRITERIA[key as keyof typeof BADGE_CRITERIA];
  if (!criteria || criteria.manual) return null;
  const current = counters[criteria.metric];
  if (current === undefined) return null;
  return { current: Math.max(0, Math.min(current, criteria.target)), target: criteria.target };
}

/** `GET /users/:handle/badges`: the field notebook. */
export async function getUserBadges(ctx: Ctx, handle: string): Promise<UserBadges> {
  const user = await resolveUserId(ctx, handle);
  await badgeIds(ctx.db);
  const earnedRows = await query<{ key: string; awardedAt: Date | string; contextKey: string; isFeatured: boolean }>(
    ctx.db,
    sql`SELECT b."key", ub."awardedAt", ub."contextKey", ub."isFeatured"
          FROM "UserBadge" ub JOIN "Badge" b ON b."id" = ub."badgeId"
         WHERE ub."userId" = ${user.id} AND b."retiredAt" IS NULL
         ORDER BY ub."isFeatured" DESC, b."sortOrder", ub."awardedAt" DESC, ub."id" DESC`,
  );
  const earnedKeys = new Set(earnedRows.map((r) => r.key));
  const counters = await progressCounters(ctx.db, user.id);
  const locked = BADGES.filter((b) => !b.secret && !b.repeatable && !earnedKeys.has(b.key))
    // Original-survivor badges can no longer be earned by accounts that do not have them.
    .filter((b) => !b.key.startsWith('original-survivor-'))
    .map((b) => ({ key: b.key, progress: progressOf(b.key, counters) }));
  // Repeatable badges not earned yet are shown locked without a counter.
  for (const b of BADGES) {
    if (b.repeatable && !b.secret && !earnedKeys.has(b.key)) locked.push({ key: b.key, progress: null });
  }
  return {
    earned: earnedRows.map((r) => ({
      key: r.key,
      awardedAt: (toDate(r.awardedAt) ?? new Date(0)).toISOString(),
      contextKey: r.contextKey,
      isFeatured: r.isFeatured,
    })),
    locked,
  };
}

export interface GamificationRef {
  creatorTier: CreatorTierKey | null;
  survivorRank: SurvivorRankKey | null;
}

/**
 * Tier and rank of users for `UserRefDTO` (other domains embed them in cards, comments and
 * signals). The rank is `null` when the user hides it.
 */
export async function gamificationRefs(
  exec: Executor,
  userIds: Iterable<number>,
): Promise<Map<number, GamificationRef>> {
  const ids = [...new Set(userIds)].filter((id) => Number.isSafeInteger(id));
  const out = new Map<number, GamificationRef>();
  if (ids.length === 0) return out;
  const rows = await query<{ id: number; tier: string | null; rank: string | null; hideRank: boolean | null }>(
    exec,
    sql`SELECT u."id", s."creatorTier" AS "tier", s."survivorRank" AS "rank",
               (u."privacy"->>'hideRank')::boolean AS "hideRank"
          FROM "User" u LEFT JOIN "UserStats" s ON s."userId" = u."id"
         WHERE u."id" = ANY(${intArray(ids)})`,
  );
  for (const r of rows) {
    out.set(Number(r.id), {
      creatorTier: tierOf(r.tier),
      survivorRank: r.hideRank === true ? null : rankOf(r.rank),
    });
  }
  return out;
}
