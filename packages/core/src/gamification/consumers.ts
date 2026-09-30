/**
 * Domain-event consumers of the XP engine (PLAN §7.2 "Reglas de XP", subscribed by the worker's
 * gamification group). Each handler runs in one transaction, is idempotent (grants are unique per
 * reference, revocations and restorations are state-based) and ends with the per-user badge
 * evaluation of everyone it touched.
 *
 * | Event | Rule |
 * |---|---|
 * | `review.created/updated/deleted/visibility_changed` | +20 for a visible review with ≥ 80 characters on someone else's mod (3/day); revoked when it is shortened, hidden or deleted, restored when shown again (with its helpful votes) |
 * | `review.voted` | +5 to the review author per "helpful" vote (50/day); not own votes, not between accounts that shared an address in the last 24 h; revoked when the vote is withdrawn |
 * | `compat.report_created` | +10 per Field report (5/day); not on your own mods, not when reporter and author shared an address |
 * | `comment.pinned/solution_marked/deleted/visibility_changed` | +15 when the mod author pins it or marks it as the solution (not on your own mod); revoked when neither holds or it is hidden |
 * | `comment.bug_resolved` | +15 when the author marks your bug report as resolved |
 * | `compat.aggregate_changed` | +30 to the creator for a version working on a breaking build released ≤ 14 days before (once per build) |
 * | `follow.mod_created`, `follow.user_created` | +2 once (first follow) |
 * | `user.profile_updated {completed}` | +10 once |
 * | `user.onboarding_completed` | +10 once (+ `survived-day-one`) |
 * | `kit.created/updated` | +10 for every 10 followers; onboarding step |
 * | `mod.*`, `version.*` | badge evaluation of the author (and of the libraries it requires) |
 * | `jam.phase_changed`, `jam.changed` | badge evaluation of the entry authors of a jam with published results (`jam-*`) |
 * | `award.created` | badge evaluation of the winner's author (`mod-of-the-week`, `staff-pick`) |
 */
import type { DomainEvent } from '@sotf/contracts/domain-events';
import { type Executor, withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { query, queryOne, toInt } from '../follows/sql.ts';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import { sharedIpRecently } from './abuse.ts';
import { REVIEW_TEXT_MIN } from './catalog.ts';
import { evaluateUsers, grantKitFollowerXp, grantPatchDayXp } from './evaluate.ts';
import { syncOnboarding } from './onboarding.ts';
import { grantXp, onceGrant, restoreReviewVoteXp, revokeXp } from './xp.ts';

/** Event types the gamification consumer subscribes to. */
export const GAMIFICATION_EVENT_TYPES = [
  'mod.published',
  'mod.updated',
  'mod.status_changed',
  'version.published',
  'version.status_changed',
  'review.created',
  'review.updated',
  'review.deleted',
  'review.visibility_changed',
  'review.voted',
  'comment.created',
  'comment.pinned',
  'comment.solution_marked',
  'comment.bug_resolved',
  'comment.deleted',
  'comment.visibility_changed',
  'compat.report_created',
  'compat.aggregate_changed',
  'follow.mod_created',
  'follow.user_created',
  'kit.created',
  'kit.updated',
  'kit.deleted',
  'user.profile_updated',
  'user.onboarding_completed',
  'user.email_verified',
  'award.created',
  'jam.phase_changed',
  'jam.changed',
] as const satisfies ReadonlyArray<DomainEvent['type']>;

export type GamificationEventType = (typeof GAMIFICATION_EVENT_TYPES)[number];

export interface ConsumeResult {
  /** Users whose XP or badges were (re)evaluated. */
  users: number[];
}

// -----------------------------------------------------------------------------------------------
// Reviews
// -----------------------------------------------------------------------------------------------

interface ReviewState {
  id: number;
  userId: number | null;
  modAuthorId: number | null;
  status: string;
  textLength: number;
}

async function loadReview(tx: Executor, reviewId: number): Promise<ReviewState | null> {
  const row = await queryOne<ReviewState>(
    tx,
    sql`SELECT r."id", r."userId", m."userId" AS "modAuthorId", r."status",
               char_length(coalesce(nullif(btrim(r."bodyMd"), ''), btrim(r."message"))) AS "textLength"
          FROM "ModReview" r LEFT JOIN "Mod" m ON m."id" = r."modId"
         WHERE r."id" = ${reviewId}`,
  );
  return row
    ? {
        ...row,
        userId: row.userId === null ? null : Number(row.userId),
        modAuthorId: row.modAuthorId === null ? null : Number(row.modAuthorId),
        textLength: toInt(row.textLength),
      }
    : null;
}

/** Grants or revokes the review XP according to the review's current state. */
async function syncReviewXp(tx: Executor, reviewId: number, when: Date): Promise<number[]> {
  const review = await loadReview(tx, reviewId);
  if (!review) {
    const revoked = await revokeXp(tx, { kind: 'review_with_text', refType: 'review', refId: reviewId }, when);
    const votes = await revokeXp(
      tx,
      { kind: 'review_helpful_vote', refType: 'review_vote', refIdPrefix: String(reviewId) },
      when,
    );
    return [...revoked, ...votes];
  }
  const visible = review.status === 'visible';
  const touched: number[] = [];
  if (review.userId !== null) {
    const eligible = visible && review.userId !== review.modAuthorId && review.textLength >= REVIEW_TEXT_MIN;
    if (eligible) {
      await grantXp(tx, {
        userId: review.userId,
        kind: 'review_with_text',
        refType: 'review',
        refId: reviewId,
        at: when,
      });
    } else {
      await revokeXp(tx, { kind: 'review_with_text', refType: 'review', refId: reviewId }, when);
    }
    touched.push(review.userId);
  }
  if (visible) {
    touched.push(...(await restoreReviewVoteXp(tx, reviewId)));
  } else {
    touched.push(
      ...(await revokeXp(
        tx,
        { kind: 'review_helpful_vote', refType: 'review_vote', refIdPrefix: String(reviewId) },
        when,
      )),
    );
  }
  if (review.modAuthorId !== null) touched.push(review.modAuthorId);
  return touched;
}

async function onReviewVote(
  tx: Executor,
  p: { reviewId: number; reviewAuthorId: number; voterId: number; value: number },
  when: Date,
): Promise<number[]> {
  const refId = `${p.reviewId}:${p.voterId}`;
  if (p.value !== 1) {
    return revokeXp(tx, { kind: 'review_helpful_vote', refType: 'review_vote', refId }, when);
  }
  if (p.voterId === p.reviewAuthorId) return [];
  const review = await loadReview(tx, p.reviewId);
  if (review?.status !== 'visible' || review.userId !== p.reviewAuthorId) return [];
  if (await sharedIpRecently(tx, p.voterId, p.reviewAuthorId, when)) return [];
  await grantXp(tx, { userId: p.reviewAuthorId, kind: 'review_helpful_vote', refType: 'review_vote', refId, at: when });
  return [p.reviewAuthorId];
}

// -----------------------------------------------------------------------------------------------
// Comments
// -----------------------------------------------------------------------------------------------

/** Grants or revokes the two comment rules according to the comment's current state. */
async function syncCommentXp(tx: Executor, commentId: number, when: Date): Promise<number[]> {
  const c = await queryOne<{
    userId: number | null;
    status: string;
    isSolution: boolean;
    pinnedById: number | null;
    isBugReport: boolean;
    bugResolvedInVersionId: number | null;
    modAuthorId: number | null;
  }>(
    tx,
    sql`SELECT c."userId", c."status", c."isSolution", c."pinnedById", c."isBugReport", c."bugResolvedInVersionId",
               m."userId" AS "modAuthorId"
          FROM "Comment" c LEFT JOIN "Mod" m ON m."id" = c."modId"
         WHERE c."id" = ${commentId}`,
  );
  if (!c || c.userId === null) {
    return [
      ...(await revokeXp(tx, { kind: 'comment_solution_or_pinned', refType: 'comment', refId: commentId }, when)),
      ...(await revokeXp(tx, { kind: 'bug_report_resolved', refType: 'comment', refId: commentId }, when)),
    ];
  }
  const userId = Number(c.userId);
  const modAuthorId = c.modAuthorId === null ? null : Number(c.modAuthorId);
  const visibleOther = c.status === 'visible' && userId !== modAuthorId;
  const helped =
    visibleOther &&
    (c.isSolution || (c.pinnedById !== null && modAuthorId !== null && Number(c.pinnedById) === modAuthorId));
  if (helped) {
    await grantXp(tx, { userId, kind: 'comment_solution_or_pinned', refType: 'comment', refId: commentId, at: when });
  } else {
    await revokeXp(tx, { kind: 'comment_solution_or_pinned', refType: 'comment', refId: commentId }, when);
  }
  const resolved = visibleOther && c.isBugReport && c.bugResolvedInVersionId !== null;
  if (resolved) {
    await grantXp(tx, { userId, kind: 'bug_report_resolved', refType: 'comment', refId: commentId, at: when });
  } else {
    await revokeXp(tx, { kind: 'bug_report_resolved', refType: 'comment', refId: commentId }, when);
  }
  return [userId];
}

// -----------------------------------------------------------------------------------------------
// Dispatcher
// -----------------------------------------------------------------------------------------------

/** Authors of the mods a version requires (pillar-of-the-island). */
async function requiredLibraryAuthors(tx: Executor, versionId: number): Promise<number[]> {
  const rows = await query<{ userId: number }>(
    tx,
    sql`SELECT DISTINCT lib."userId" FROM "ModDependency" d JOIN "Mod" lib ON lib."id" = d."depModId"
         WHERE d."modVersionId" = ${versionId} AND d."kind" = 'required' AND lib."userId" IS NOT NULL`,
  );
  return rows.map((r) => Number(r.userId));
}

async function modAuthor(tx: Executor, modId: number): Promise<number | null> {
  const row = await queryOne<{ userId: number | null }>(tx, sql`SELECT "userId" FROM "Mod" WHERE "id" = ${modId}`);
  return row?.userId === null || row?.userId === undefined ? null : Number(row.userId);
}

async function onboardingStep(tx: Executor, ctx: Ctx, userId: number, when: Date): Promise<void> {
  await syncOnboarding(tx, ctx.jobs, userId, when);
}

/** Applies the rules of one event inside `tx`; returns the users to re-evaluate. */
async function applyEvent(tx: Executor, ctx: Ctx, event: DomainEvent): Promise<number[]> {
  const when = new Date(event.occurredAt);
  switch (event.type) {
    case 'review.created':
    case 'review.updated':
    case 'review.deleted':
    case 'review.visibility_changed':
      return syncReviewXp(tx, event.payload.reviewId, when);
    case 'review.voted':
      return onReviewVote(tx, event.payload, when);
    case 'comment.created':
      // Night-owl counts comments: only the author's badges need a look.
      return [event.payload.authorId];
    case 'comment.pinned':
    case 'comment.solution_marked':
    case 'comment.bug_resolved':
    case 'comment.deleted':
    case 'comment.visibility_changed':
      return syncCommentXp(tx, event.payload.commentId, when);
    case 'compat.report_created': {
      const p = event.payload;
      await onboardingStep(tx, ctx, p.userId, when);
      const author = await modAuthor(tx, p.modId);
      if (author !== null && author !== p.userId && !(await sharedIpRecently(tx, p.userId, author, when))) {
        await grantXp(tx, {
          userId: p.userId,
          kind: 'compat_report',
          refType: 'compat_report',
          refId: p.reportId,
          at: when,
        });
      }
      return [p.userId];
    }
    case 'compat.aggregate_changed': {
      const p = event.payload;
      if (p.to !== 'works') return [];
      await grantPatchDayXp(tx, when, { gameBuildId: p.gameBuildId, modVersionId: p.modVersionId });
      return [p.modAuthorId];
    }
    case 'follow.mod_created':
      await grantXp(tx, onceGrant(event.payload.userId, 'first_follow', when));
      await onboardingStep(tx, ctx, event.payload.userId, when);
      return [event.payload.userId];
    case 'follow.user_created':
      await grantXp(tx, onceGrant(event.payload.followerId, 'first_follow', when));
      return [event.payload.followerId];
    case 'kit.created':
    case 'kit.updated':
      await onboardingStep(tx, ctx, event.payload.ownerId, when);
      await grantKitFollowerXp(tx, when, event.payload.kitId);
      return [event.payload.ownerId];
    case 'kit.deleted':
      return [event.payload.ownerId];
    case 'user.profile_updated':
      if (event.payload.completed) await grantXp(tx, onceGrant(event.payload.userId, 'profile_completed', when));
      return [event.payload.userId];
    case 'user.onboarding_completed':
      await grantXp(tx, onceGrant(event.payload.userId, 'onboarding_completed', when));
      return [event.payload.userId];
    case 'user.email_verified':
      return [event.payload.userId];
    case 'award.created':
      // Mod of the Week / staff pick badge of the winner's author (derived from the award rows).
      return [event.payload.authorId];
    case 'jam.phase_changed':
    case 'jam.changed': {
      // Jam badges exist once the results are published: evaluate every entry author of that jam.
      const authors = await query<{ userId: number }>(
        tx,
        sql`SELECT DISTINCT a."userId" FROM "JamEntry" e JOIN "JamEntryAuthor" a ON a."entryId" = e."id"
             JOIN "Jam" j ON j."id" = e."jamId" AND j."resultsPublishedAt" IS NOT NULL
            WHERE e."jamId" = ${event.payload.jamId}`,
      );
      return authors.map((r) => Number(r.userId));
    }
    case 'mod.published':
    case 'mod.updated':
    case 'mod.status_changed':
      return [event.payload.authorId];
    case 'version.published':
    case 'version.status_changed':
      return [event.payload.authorId, ...(await requiredLibraryAuthors(tx, event.payload.versionId))];
    default:
      return [];
  }
}

/** Consumes one domain event: XP rules, onboarding steps and the badge evaluation of those touched. */
export async function consumeGamificationEvent(ctx: Ctx, event: DomainEvent): Promise<ConsumeResult> {
  return withTx(ctx.db, async (tx) => {
    const users = [...new Set(await applyEvent(tx, ctx, event))];
    if (users.length === 0) return { users };
    await evaluateUsers(tx, ctx, users);
    // XP totals and ranks are shown on profiles, cards and comments.
    await purge(
      ctx.jobs,
      users.map((id) => `user:${id}`),
      `event:${event.type}`,
      { tx },
    );
    return { users };
  });
}
