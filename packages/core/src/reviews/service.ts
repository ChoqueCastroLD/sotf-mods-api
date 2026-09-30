/**
 * Review writes (PLAN §7.7, §6.8 "Reseñas"): create (verified email, account ≥ 24 h, one per user
 * and mod, never on your own mod), edit with history, soft delete, "Helpful?" votes (never on your
 * own review), one public reply of the mod author, the "verified download" mark and the moderation
 * visibility switch (WP-51).
 *
 * Every change of a visible rating recomputes in the same transaction (mod row locked):
 * "Mod"."averageRating" (plain mean, 0 without reviews, as the legacy UpdatesChecker expects),
 * "Mod"."reviewsCount" (visible reviews), "Mod"."ratingBayes" (`(5·m + Σ)/(5 + n)`) and, when the
 * row exists, "ModStats"."reviewsVisible"/"ratingAvg". "Mod"."updatedAt" is never touched.
 * Legacy columns are written explicitly: `title`/`message` HTML-escaped, `isHidden` = status ≠
 * visible, `modVersionString` = the reviewed version.
 */
import type { ReviewDTO } from '@sotf/contracts/reviews';
import { modReview, reviewEdit, reviewVote, type Transaction } from '@sotf/db';
import { decodeEntities } from '@sotf/markdown';
import { and, eq, sql } from 'drizzle-orm';
import { legacyText } from '../comments/rules.ts';
import {
  type CommunityConfig,
  firstRow,
  isNewAccount,
  isStaffRole,
  loadMember,
  loadThreadMod,
  lockMod,
  type Member,
  type Viewer,
  versionOfMod,
} from '../comments/shared.ts';
import type { Ctx } from '../kernel/context.ts';
import { DomainError, errors } from '../kernel/errors.ts';
import { renderUserText } from '../mentions/index.ts';
import { assertCan } from '../permissions/index.ts';
import { ratingAggregate, reviewDtoById, siteMean } from './queries.ts';
import { bayesianRating, REVIEW_RULES } from './rules.ts';

export interface CreateReviewInput {
  rating: number;
  title?: string | undefined;
  bodyMd?: string | undefined;
  modVersionId?: number | undefined;
}

export interface UpdateReviewInput {
  rating?: number | undefined;
  title?: string | null | undefined;
  bodyMd?: string | null | undefined;
  modVersionId?: number | null | undefined;
}

interface StoredReview {
  id: number;
  modId: number | null;
  userId: number | null;
  rating: number;
  title: string;
  bodyMd: string | null;
  message: string;
  status: 'visible' | 'hidden' | 'deleted';
  authorRepliedAt: unknown;
}

function viewerOfMember(member: Member): Viewer {
  return { userId: member.id, staff: isStaffRole(member.role) };
}

async function loadStored(db: Ctx['db'] | Transaction, id: number, lock = false): Promise<StoredReview> {
  const row = await firstRow<StoredReview>(
    db,
    sql`SELECT "id", "modId", "userId", "rating", "title", "bodyMd", "message", "status", "authorRepliedAt"
          FROM "ModReview" WHERE "id" = ${id}${lock ? sql` FOR UPDATE` : sql``}`,
  );
  if (!row || row.modId === null) throw errors.notFound('Review');
  return row;
}

/**
 * Recomputes the rating columns of `modId` (inside the transaction, after {@link lockMod}). The
 * prior `m` is the site mean of the visible reviews (4.0 without any).
 */
export async function refreshRatingCounters(tx: Transaction, modId: number): Promise<void> {
  const [aggregate, mean] = await Promise.all([ratingAggregate(tx, modId), siteMean(tx)]);
  const average = aggregate.count > 0 ? aggregate.sum / aggregate.count : 0;
  const bayes = bayesianRating(aggregate.sum, aggregate.count, mean);
  await tx.execute(
    sql`UPDATE "Mod" SET "averageRating" = ${average}, "reviewsCount" = ${aggregate.count}, "ratingBayes" = ${bayes}
         WHERE "id" = ${modId}`,
  );
  await tx.execute(
    sql`UPDATE "ModStats"
           SET "reviewsVisible" = ${aggregate.count},
               "ratingAvg" = ${aggregate.count > 0 ? average : null},
               "updatedAt" = now()
         WHERE "modId" = ${modId}`,
  );
}

/** Last version of `modId` the user downloaded while signed in (the "verified download"). */
async function lastDownloadedVersion(
  db: Ctx['db'],
  userId: number,
  modId: number,
): Promise<{ id: number; version: string } | null> {
  return firstRow<{ id: number; version: string }>(
    db,
    sql`SELECT v."id", v."version"
          FROM "ModDownload" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
         WHERE d."userId" = ${userId} AND v."modId" = ${modId}
         ORDER BY d."createdAt" DESC, d."id" DESC
         LIMIT 1`,
  );
}

function normaliseTitle(title: string | null | undefined): string | null {
  const value = title?.normalize('NFC').trim() ?? '';
  if (value.length > REVIEW_RULES.titleMax) {
    throw errors.validation(`The title has at most ${REVIEW_RULES.titleMax} characters`, [
      { path: 'title', code: 'too_big', message: `at most ${REVIEW_RULES.titleMax} characters` },
    ]);
  }
  return value === '' ? null : value;
}

async function renderBody(db: Ctx['db'], bodyMd: string | null | undefined, authorId: number) {
  const source = bodyMd?.normalize('NFC') ?? '';
  if (source.length > REVIEW_RULES.bodyMax) {
    throw errors.validation(`The review has at most ${REVIEW_RULES.bodyMax} characters`, [
      { path: 'bodyMd', code: 'too_big', message: `at most ${REVIEW_RULES.bodyMax} characters` },
    ]);
  }
  if (source.trim() === '') return null;
  return renderUserText(db, source, authorId);
}

function assertRating(rating: number): void {
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw errors.validation('Rate from 1 to 5 stars', [{ path: 'rating', code: 'invalid', message: '1–5' }]);
  }
}

/** `POST /mods/:id/reviews`. */
export async function createReview(
  ctx: Ctx,
  config: CommunityConfig,
  modId: number,
  input: CreateReviewInput,
): Promise<ReviewDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  assertCan(member.subject, 'review.write', undefined, now);
  if (isNewAccount(member, now)) {
    throw errors.forbidden(`Accounts can review ${REVIEW_RULES.minAccountAgeHours} h after signing up`);
  }
  const mod = await loadThreadMod(ctx.db, modId);
  if (mod.userId === member.id) throw errors.forbidden('You cannot review your own mod');
  assertRating(input.rating);
  const title = normaliseTitle(input.title);
  const body = await renderBody(ctx.db, input.bodyMd, member.id);
  const downloaded = await lastDownloadedVersion(ctx.db, member.id, mod.id);
  const version =
    input.modVersionId === undefined
      ? downloaded
      : await versionOfMod(ctx.db, mod.id, input.modVersionId, 'modVersionId');

  const id = await ctx.db.transaction(async (tx) => {
    await lockMod(tx, mod.id);
    const existing = await firstRow<{ id: number; status: string }>(
      tx,
      sql`SELECT "id", "status" FROM "ModReview" WHERE "userId" = ${member.id} AND "modId" = ${mod.id} FOR UPDATE`,
    );
    if (existing && existing.status !== 'deleted') throw errors.conflict('You already reviewed this mod');
    const values = {
      title: legacyText(title ?? ''),
      message: legacyText(body?.md ?? ''),
      rating: input.rating,
      isHidden: false,
      status: 'visible' as const,
      modVersionString: version?.version ?? null,
      bodyMd: body?.md ?? null,
      bodyHtml: body?.html ?? null,
      modVersionId: version?.id ?? null,
      isVerifiedDownload: downloaded !== null,
      editedAt: null,
      deletedAt: null,
    };
    let reviewId: number;
    if (existing) {
      // "ModReview_userId_modId_key": a deleted review is brought back as a new one.
      await tx.delete(reviewVote).where(eq(reviewVote.reviewId, existing.id));
      await tx
        .update(modReview)
        .set({
          ...values,
          createdAt: now,
          helpfulCount: 0,
          unhelpfulCount: 0,
          authorReplyMd: null,
          authorReplyHtml: null,
          authorRepliedAt: null,
        })
        .where(eq(modReview.id, existing.id));
      reviewId = existing.id;
    } else {
      const [created] = await tx
        .insert(modReview)
        .values({ ...values, userId: member.id, modId: mod.id })
        .returning({ id: modReview.id });
      if (!created) throw new Error('review insert returned no row');
      reviewId = created.id;
    }
    await refreshRatingCounters(tx, mod.id);
    await ctx.jobs.emitNew(
      tx,
      'review.created',
      {
        reviewId,
        modId: mod.id,
        modAuthorId: mod.userId ?? member.id,
        authorId: member.id,
        rating: input.rating,
        bodyLength: body?.md.length ?? 0,
      },
      { actorId: member.id },
    );
    return reviewId;
  });
  return reviewDtoById(ctx.db, config, id, viewerOfMember(member));
}

/** `PATCH /reviews/:id`: the author edits (the previous version goes to "ReviewEdit"). */
export async function updateReview(
  ctx: Ctx,
  config: CommunityConfig,
  id: number,
  input: UpdateReviewInput,
): Promise<ReviewDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  const current = await loadStored(ctx.db, id);
  if (current.status === 'deleted') throw errors.notFound('Review');
  assertCan(member.subject, 'review.edit', { ownerId: current.userId }, now);
  const modId = current.modId as number;
  await loadThreadMod(ctx.db, modId);

  const changes: Partial<typeof modReview.$inferInsert> = {};
  if (input.rating !== undefined) {
    assertRating(input.rating);
    changes.rating = input.rating;
  }
  if (input.title !== undefined) changes.title = legacyText(normaliseTitle(input.title) ?? '');
  if (input.bodyMd !== undefined) {
    const body = await renderBody(ctx.db, input.bodyMd, member.id);
    changes.bodyMd = body?.md ?? null;
    changes.bodyHtml = body?.html ?? null;
    changes.message = legacyText(body?.md ?? '');
  }
  if (input.modVersionId !== undefined) {
    const version =
      input.modVersionId === null ? null : await versionOfMod(ctx.db, modId, input.modVersionId, 'modVersionId');
    changes.modVersionId = version?.id ?? null;
    changes.modVersionString = version?.version ?? null;
  }
  if (Object.keys(changes).length === 0) return reviewDtoById(ctx.db, config, id, viewerOfMember(member));

  await ctx.db.transaction(async (tx) => {
    await lockMod(tx, modId);
    const locked = await loadStored(tx, id, true);
    if (locked.status === 'deleted') throw errors.notFound('Review');
    await tx.insert(reviewEdit).values({
      reviewId: id,
      rating: locked.rating,
      title: decodeEntities(locked.title),
      bodyMd: locked.bodyMd ?? decodeEntities(locked.message),
      editedAt: now,
    });
    await tx
      .update(modReview)
      .set({ ...changes, editedAt: now })
      .where(eq(modReview.id, id));
    await refreshRatingCounters(tx, modId);
    const rating = changes.rating ?? locked.rating;
    const bodyLength =
      changes.bodyMd !== undefined
        ? (changes.bodyMd?.length ?? 0)
        : (locked.bodyMd ?? decodeEntities(locked.message)).length;
    await ctx.jobs.emitNew(
      tx,
      'review.updated',
      { reviewId: id, modId, authorId: member.id, rating, bodyLength },
      { actorId: member.id },
    );
  });
  return reviewDtoById(ctx.db, config, id, viewerOfMember(member));
}

/** `DELETE /reviews/:id`: soft delete by the author (or a moderator). Idempotent. */
export async function deleteReview(ctx: Ctx, id: number): Promise<void> {
  const member = await loadMember(ctx);
  const current = await loadStored(ctx.db, id);
  assertCan(member.subject, 'review.delete', { ownerId: current.userId }, ctx.clock.now());
  if (current.status === 'deleted') return;
  const modId = current.modId as number;
  await ctx.db.transaction(async (tx) => {
    await lockMod(tx, modId);
    const locked = await loadStored(tx, id, true);
    if (locked.status === 'deleted') return;
    await tx
      .update(modReview)
      .set({ status: 'deleted', isHidden: true, deletedAt: ctx.clock.now() })
      .where(eq(modReview.id, id));
    await refreshRatingCounters(tx, modId);
    await ctx.jobs.emitNew(
      tx,
      'review.deleted',
      { reviewId: id, modId, authorId: current.userId ?? member.id },
      { actorId: member.id },
    );
  });
}

async function refreshVotes(tx: Transaction, reviewId: number): Promise<void> {
  await tx.execute(
    sql`UPDATE "ModReview" SET
          "helpfulCount" = (SELECT count(*) FROM "ReviewVote" WHERE "reviewId" = ${reviewId} AND "value" = 1)::int,
          "unhelpfulCount" = (SELECT count(*) FROM "ReviewVote" WHERE "reviewId" = ${reviewId} AND "value" = -1)::int
        WHERE "id" = ${reviewId}`,
  );
}

/** `PUT /reviews/:id/vote` (value 1 or -1) and `DELETE` (value 0). Never on your own review. */
export async function voteReview(ctx: Ctx, config: CommunityConfig, id: number, value: 1 | -1 | 0): Promise<ReviewDTO> {
  const member = await loadMember(ctx);
  assertCan(member.subject, 'review.write', undefined, ctx.clock.now());
  const current = await loadStored(ctx.db, id);
  if (current.status !== 'visible') throw errors.notFound('Review');
  const modId = current.modId as number;
  await loadThreadMod(ctx.db, modId);
  if (current.userId === member.id) throw errors.forbidden('You cannot vote on your own review');
  await ctx.db.transaction(async (tx) => {
    const previous = await firstRow<{ value: number }>(
      tx,
      sql`SELECT "value" FROM "ReviewVote" WHERE "reviewId" = ${id} AND "userId" = ${member.id} FOR UPDATE`,
    );
    if ((previous?.value ?? 0) === value) return;
    if (value === 0) {
      await tx.delete(reviewVote).where(and(eq(reviewVote.reviewId, id), eq(reviewVote.userId, member.id)));
    } else {
      await tx
        .insert(reviewVote)
        .values({ reviewId: id, userId: member.id, value })
        .onConflictDoUpdate({
          target: [reviewVote.reviewId, reviewVote.userId],
          set: { value, createdAt: new Date() },
        });
    }
    await refreshVotes(tx, id);
    if (current.userId !== null) {
      await ctx.jobs.emitNew(
        tx,
        'review.voted',
        { reviewId: id, modId, reviewAuthorId: current.userId, voterId: member.id, value },
        { actorId: member.id },
      );
    }
  });
  return reviewDtoById(ctx.db, config, id, viewerOfMember(member));
}

/** `PUT /reviews/:id/reply` (one public reply of the mod author, editable) and `DELETE`. */
export async function replyToReview(
  ctx: Ctx,
  config: CommunityConfig,
  id: number,
  bodyMd: string | null,
): Promise<ReviewDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  const current = await loadStored(ctx.db, id);
  if (current.status !== 'visible') throw errors.notFound('Review');
  const modId = current.modId as number;
  const mod = await loadThreadMod(ctx.db, modId);
  if (mod.userId === null || mod.userId !== member.id) throw errors.forbidden('Only the author of the mod can reply');
  if (member.subject.suspendedUntil && member.subject.suspendedUntil.getTime() > now.getTime()) {
    throw new DomainError('SUSPENDED', undefined, 'Your account is suspended');
  }
  const body = bodyMd === null ? null : await renderBody(ctx.db, bodyMd, member.id);
  if (bodyMd !== null && body === null) {
    throw errors.validation('The reply cannot be empty', [{ path: 'bodyMd', code: 'too_small', message: 'empty' }]);
  }
  await ctx.db.transaction(async (tx) => {
    const locked = await loadStored(tx, id, true);
    await tx
      .update(modReview)
      .set(
        body
          ? {
              authorReplyMd: body.md,
              authorReplyHtml: body.html,
              authorRepliedAt: locked.authorRepliedAt === null ? now : undefined,
            }
          : { authorReplyMd: null, authorReplyHtml: null, authorRepliedAt: null },
      )
      .where(eq(modReview.id, id));
    // The reviewer is told once, when the first reply appears (edits are silent).
    if (body && locked.authorRepliedAt === null && current.userId !== null) {
      await ctx.jobs.emitNew(
        tx,
        'review.replied',
        { reviewId: id, modId, reviewAuthorId: current.userId, modAuthorId: member.id },
        { actorId: member.id },
      );
    }
  });
  return reviewDtoById(ctx.db, config, id, viewerOfMember(member));
}

/** Moderation (Ranger Station, WP-51): hide a review or show it again; the rating counters follow. */
export async function setReviewVisibility(
  ctx: Ctx,
  config: CommunityConfig,
  id: number,
  hidden: boolean,
): Promise<ReviewDTO> {
  const member = await loadMember(ctx);
  assertCan(member.subject, 'moderation.hide_content', undefined, ctx.clock.now());
  const current = await loadStored(ctx.db, id);
  if (current.status === 'deleted') throw errors.notFound('Review');
  const modId = current.modId as number;
  const target = hidden ? 'hidden' : 'visible';
  if (current.status !== target) {
    await ctx.db.transaction(async (tx) => {
      await lockMod(tx, modId);
      await tx.update(modReview).set({ status: target, isHidden: hidden }).where(eq(modReview.id, id));
      await refreshRatingCounters(tx, modId);
      await ctx.jobs.emitNew(
        tx,
        'review.visibility_changed',
        { reviewId: id, modId, authorId: current.userId, hidden },
        { actorId: member.id },
      );
    });
  }
  return reviewDtoById(ctx.db, config, id, viewerOfMember(member));
}
