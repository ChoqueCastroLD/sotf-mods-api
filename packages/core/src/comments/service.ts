/**
 * Comment writes (PLAN §7.6, §5.2 "Comunidad", T0-22): create/reply, edit with history, soft
 * delete, reactions, pin (max 3), solution, bug resolved in vX and the moderation visibility
 * switch (hide/unhide/approve held comments) used by Ranger Station (WP-51).
 *
 * Every write runs in one transaction that locks the mod row, recomputes the per-mod counters
 * ("Mod"."commentsCount" with the legacy cron's meaning = every row; "ModStats"."commentsVisible"
 * when the row exists; "Comment"."repliesCount"/"reactionsCount") and emits its domain event
 * (§7.3 consumers, CDN purge of `mod:{id}`). Legacy columns are written explicitly: `message` =
 * HTML-escaped Markdown, `isHidden` = status ≠ visible (the trigger agrees), `ip` = the hashed IP.
 */
import type { CommentDTO, ReactionKind } from '@sotf/contracts/comments';
import { comment, commentEdit, commentImage, commentReaction, type Transaction } from '@sotf/db';
import { decodeEntities, extractMentions } from '@sotf/markdown';
import { and, eq, sql } from 'drizzle-orm';
import type { Ctx } from '../kernel/context.ts';
import { DomainError, errors } from '../kernel/errors.ts';
import { loadMentions, mentionedIds, renderUserText } from '../mentions/index.ts';
import { assertCan } from '../permissions/index.ts';
import { commentDto } from './queries.ts';
import { COMMENT_RULES, emptyReactions, holdsForReview, isReactionKind, legacyText } from './rules.ts';
import {
  type CommunityConfig,
  firstRow,
  isMuted,
  isNewAccount,
  isStaffRole,
  loadMember,
  loadThreadMod,
  lockMod,
  type Member,
  rows,
  type Viewer,
  versionOfMod,
} from './shared.ts';

export interface CommentWriteDeps {
  config: CommunityConfig;
  /** Turnstile check required from accounts younger than 24 h (T0-22). Never throws. */
  verifyTurnstile(token: string | undefined, ip: string | null): Promise<boolean>;
  /** Counts one comment in the 50/day budget of the user; throws `RATE_LIMITED` when over. */
  consumeDaily(userId: number): Promise<void>;
}

export interface CreateCommentInput {
  bodyMd: string;
  parentId?: number | undefined;
  isBugReport?: boolean | undefined;
  modVersionId?: number | undefined;
  imageUploadIds?: readonly string[] | undefined;
  turnstileToken?: string | undefined;
}

interface StoredComment {
  id: number;
  modId: number;
  replyId: number | null;
  userId: number | null;
  status: 'visible' | 'hidden' | 'pending' | 'deleted';
  bodyMd: string | null;
  message: string;
  isBugReport: boolean;
  pinnedAt: unknown;
  isSolution: boolean;
}

function viewerOfMember(member: Member): Viewer {
  return { userId: member.id, staff: isStaffRole(member.role) };
}

async function loadStored(db: Ctx['db'] | Transaction, id: number, lock = false): Promise<StoredComment> {
  const row = await firstRow<StoredComment>(
    db,
    sql`SELECT "id", "modId", "replyId", "userId", "status", "bodyMd", "message", "isBugReport", "pinnedAt", "isSolution"
          FROM "Comment" WHERE "id" = ${id}${lock ? sql` FOR UPDATE` : sql``}`,
  );
  if (!row) throw errors.notFound('Comment');
  return row;
}

/** Markdown source of a stored comment (legacy rows keep entity-encoded text in `message`). */
function sourceOf(row: Pick<StoredComment, 'bodyMd' | 'message'>): string {
  return row.bodyMd ?? decodeEntities(row.message);
}

/** Root (top-level) id of a stored comment. */
async function rootIdOf(db: Ctx['db'] | Transaction, row: Pick<StoredComment, 'id' | 'replyId'>): Promise<number> {
  if (row.replyId === null) return row.id;
  const parent = await firstRow<{ replyId: number | null }>(
    db,
    sql`SELECT "replyId" FROM "Comment" WHERE "id" = ${row.replyId}`,
  );
  return parent?.replyId ?? row.replyId;
}

/**
 * Recomputes the counters touched by a change in `modId` (call inside the transaction, after
 * {@link lockMod}). Never touches "Mod"."updatedAt" (PLAN §6.8).
 */
export async function refreshCommentCounters(tx: Transaction, modId: number, rootIds: readonly number[] = []) {
  await tx.execute(
    sql`UPDATE "Mod" SET "commentsCount" = (SELECT count(*) FROM "Comment" WHERE "modId" = ${modId})::int
         WHERE "id" = ${modId}`,
  );
  await tx.execute(
    sql`UPDATE "ModStats"
           SET "commentsVisible" = (SELECT count(*) FROM "Comment" WHERE "modId" = ${modId} AND "status" = 'visible')::int,
               "updatedAt" = now()
         WHERE "modId" = ${modId}`,
  );
  const roots = [...new Set(rootIds)];
  if (roots.length > 0) {
    await tx.execute(
      sql`UPDATE "Comment" r
             SET "repliesCount" = (
               SELECT count(*) FROM "Comment" c LEFT JOIN "Comment" p ON p."id" = c."replyId"
                WHERE coalesce(p."replyId", c."replyId") = r."id" AND c."status" = 'visible')::int
           WHERE r."id" IN (${sql.join(
             roots.map((id) => sql`${id}`),
             sql`, `,
           )})`,
    );
  }
}

async function refreshReactions(tx: Transaction, commentId: number): Promise<void> {
  await tx.execute(
    sql`UPDATE "Comment" SET "reactionsCount" =
          (SELECT count(*) FROM "CommentReaction" WHERE "commentId" = ${commentId})::int
         WHERE "id" = ${commentId}`,
  );
}

/** Media of the comment-image uploads of `userId` (≤ 2), validated for attaching. */
async function mediaOfUploads(db: Ctx['db'], userId: number, uploadIds: readonly string[]): Promise<string[]> {
  const ids = [...new Set(uploadIds)];
  if (ids.length === 0) return [];
  if (ids.length > COMMENT_RULES.imagesMax) {
    throw errors.validation(`At most ${COMMENT_RULES.imagesMax} images`, [
      { path: 'imageUploadIds', code: 'too_big', message: `at most ${COMMENT_RULES.imagesMax} images` },
    ]);
  }
  const found = await rows<{ id: string; mediaId: string | null; attached: boolean; mediaStatus: string | null }>(
    db,
    sql`SELECT up."id", up."resultRef"->>'mediaId' AS "mediaId", med."status" AS "mediaStatus",
               EXISTS (SELECT 1 FROM "CommentImage" ci WHERE ci."mediaId"::text = up."resultRef"->>'mediaId') AS "attached"
          FROM "Upload" up
          LEFT JOIN "Media" med ON med."id"::text = up."resultRef"->>'mediaId'
         WHERE up."id" IN (${sql.join(
           ids.map((id) => sql`${id}::uuid`),
           sql`, `,
         )})
           AND up."userId" = ${userId} AND up."purpose" = 'comment_image'
           AND up."status" IN ('processing', 'ready')`,
  );
  const byId = new Map(found.map((r) => [r.id, r]));
  return ids.map((id, index) => {
    const row = byId.get(id);
    if (!row?.mediaId || row.mediaStatus === null || row.mediaStatus === 'failed' || row.attached) {
      throw errors.validation('That image cannot be attached', [
        { path: `imageUploadIds.${index}`, code: 'invalid', message: 'unknown, unfinished or already used upload' },
      ]);
    }
    return row.mediaId;
  });
}

/** `POST /mods/:id/comments`. */
export async function createComment(
  ctx: Ctx,
  deps: CommentWriteDeps,
  modId: number,
  input: CreateCommentInput,
): Promise<CommentDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  assertCan(member.subject, 'comment.write', undefined, now);
  const mod = await loadThreadMod(ctx.db, modId);
  if (mod.commentsLockedAt !== null && !isStaffRole(member.role)) {
    throw errors.forbidden('This comment thread is locked');
  }
  if (await isMuted(ctx.db, member.id, mod.id, now)) throw errors.forbidden('You cannot comment here right now');

  const newAccount = isNewAccount(member, now);
  // The creator answering on their own mod (Basecamp inbox, which has no widget) is not a bot risk.
  const ownMod = mod.userId !== null && mod.userId === member.id;
  if (newAccount && !ownMod && !(await deps.verifyTurnstile(input.turnstileToken, ctx.ip))) {
    throw new DomainError('TURNSTILE_REQUIRED', undefined, 'Complete the human check');
  }

  let parent: StoredComment | null = null;
  if (input.parentId !== undefined) {
    parent = await loadStored(ctx.db, input.parentId).catch(() => null);
    if (!parent || parent.modId !== mod.id || parent.status !== 'visible') {
      throw errors.validation('You can only reply to a visible comment of this mod', [
        { path: 'parentId', code: 'invalid', message: 'unknown comment' },
      ]);
    }
  }
  const isBugReport = input.isBugReport === true;
  if (isBugReport && parent) {
    throw errors.validation('Bug reports start a thread', [
      { path: 'isBugReport', code: 'invalid', message: 'a reply cannot be a bug report' },
    ]);
  }
  const version =
    input.modVersionId === undefined ? null : await versionOfMod(ctx.db, mod.id, input.modVersionId, 'modVersionId');
  const mediaIds = await mediaOfUploads(ctx.db, member.id, input.imageUploadIds ?? []);
  const rendered = await renderUserText(ctx.db, input.bodyMd, member.id);
  if (rendered.md.trim().length === 0 || rendered.md.length > COMMENT_RULES.bodyMax) {
    throw errors.validation('The comment must have 1–2000 characters', [
      { path: 'bodyMd', code: 'invalid', message: 'length' },
    ]);
  }
  const held = holdsForReview(rendered.externalLinks, {
    trustLevel: member.trustLevel,
    staff: isStaffRole(member.role),
    verifiedCreator: member.verifiedCreator,
    newAccount,
  });
  await deps.consumeDaily(member.id);

  const rootId = parent ? await rootIdOf(ctx.db, parent) : null;
  const status = held ? 'pending' : 'visible';
  const id = await ctx.db.transaction(async (tx) => {
    await lockMod(tx, mod.id);
    const [created] = await tx
      .insert(comment)
      .values({
        message: legacyText(rendered.md),
        isHidden: status !== 'visible',
        ip: ctx.ipHash ?? '',
        ipHash: ctx.ipHash,
        userId: member.id,
        modId: mod.id,
        replyId: rootId,
        bodyMd: rendered.md,
        bodyHtml: rendered.html,
        status,
        isBugReport,
        modVersionId: version?.id ?? null,
      })
      .returning({ id: comment.id });
    if (!created) throw new Error('comment insert returned no row');
    if (mediaIds.length > 0) {
      await tx
        .insert(commentImage)
        .values(mediaIds.map((mediaId, position) => ({ commentId: created.id, mediaId, position })));
    }
    await refreshCommentCounters(tx, mod.id, rootId === null ? [] : [rootId]);
    if (status === 'visible') {
      await ctx.jobs.emitNew(
        tx,
        'comment.created',
        {
          commentId: created.id,
          modId: mod.id,
          modAuthorId: mod.userId ?? member.id,
          authorId: member.id,
          parentId: parent?.id ?? null,
          parentAuthorId: parent?.userId ?? null,
          mentionedUserIds: rendered.mentionedUserIds,
          isBugReport,
        },
        { actorId: member.id },
      );
    }
    return created.id;
  });
  ctx.log.info({ commentId: id, modId: mod.id, status }, 'comment created');
  return commentDto(ctx.db, deps.config, id, viewerOfMember(member));
}

/** `PATCH /comments/:id`: the author edits (history for moderators, "edited" mark). */
export async function updateComment(
  ctx: Ctx,
  deps: Pick<CommentWriteDeps, 'config'>,
  id: number,
  input: { bodyMd: string },
): Promise<CommentDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  const current = await loadStored(ctx.db, id);
  if (current.status === 'deleted') throw errors.notFound('Comment');
  assertCan(member.subject, 'comment.edit', { ownerId: current.userId }, now);
  if (current.status === 'hidden') throw errors.forbidden('A hidden comment cannot be edited');
  await loadThreadMod(ctx.db, current.modId);
  if (await isMuted(ctx.db, member.id, current.modId, now)) throw errors.forbidden('You cannot comment here right now');

  const rendered = await renderUserText(ctx.db, input.bodyMd, member.id);
  const previous = sourceOf(current);
  if (rendered.md === previous) return commentDto(ctx.db, deps.config, id, viewerOfMember(member));
  // Only people the edit newly mentions are signalled.
  const before = await loadMentions(ctx.db, previous);
  const already = new Set(mentionedIds(before, extractMentions(previous), member.id));
  const newlyMentioned = rendered.mentionedUserIds.filter((userId) => !already.has(userId));
  const held =
    current.status === 'pending' ||
    holdsForReview(rendered.externalLinks, {
      trustLevel: member.trustLevel,
      staff: isStaffRole(member.role),
      verifiedCreator: member.verifiedCreator,
      newAccount: isNewAccount(member, now),
    });
  const status = held ? 'pending' : 'visible';

  await ctx.db.transaction(async (tx) => {
    await lockMod(tx, current.modId);
    const locked = await loadStored(tx, id, true);
    if (locked.status === 'deleted' || locked.status === 'hidden')
      throw errors.conflict('The comment changed meanwhile');
    await tx.insert(commentEdit).values({ commentId: id, bodyMd: sourceOf(locked), editedAt: now });
    await tx
      .update(comment)
      .set({
        bodyMd: rendered.md,
        bodyHtml: rendered.html,
        message: legacyText(rendered.md),
        status,
        isHidden: status !== 'visible',
        editedAt: now,
        ...(status === 'pending' ? { pinnedAt: null, pinnedById: null } : {}),
      })
      .where(eq(comment.id, id));
    if (status !== locked.status) {
      await refreshCommentCounters(tx, current.modId, [await rootIdOf(tx, locked)]);
    }
    if (status === 'visible') {
      await ctx.jobs.emitNew(
        tx,
        'comment.updated',
        { commentId: id, modId: current.modId, authorId: member.id, mentionedUserIds: newlyMentioned },
        { actorId: member.id },
      );
    }
  });
  return commentDto(ctx.db, deps.config, id, viewerOfMember(member));
}

/**
 * `DELETE /comments/:id`: soft delete by the author (or a moderator). A top-level comment with
 * replies stays as "Comment deleted"; the body is kept for moderation. Idempotent.
 */
export async function deleteComment(ctx: Ctx, id: number): Promise<void> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  const current = await loadStored(ctx.db, id);
  assertCan(member.subject, 'comment.delete', { ownerId: current.userId }, now);
  if (current.status === 'deleted') return;
  await ctx.db.transaction(async (tx) => {
    await lockMod(tx, current.modId);
    const locked = await loadStored(tx, id, true);
    if (locked.status === 'deleted') return;
    await tx
      .update(comment)
      .set({
        status: 'deleted',
        isHidden: true,
        deletedAt: now,
        deletedById: member.id,
        pinnedAt: null,
        pinnedById: null,
        isSolution: false,
      })
      .where(eq(comment.id, id));
    await refreshCommentCounters(tx, current.modId, [await rootIdOf(tx, locked)]);
    await ctx.jobs.emitNew(
      tx,
      'comment.deleted',
      { commentId: id, modId: current.modId, authorId: current.userId ?? member.id },
      { actorId: member.id },
    );
  });
}

export interface ReactionState {
  commentId: number;
  reactions: CommentDTO['reactions'];
  mine: ReactionKind[];
}

async function reactionState(db: Ctx['db'], commentId: number, userId: number): Promise<ReactionState> {
  const found = await rows<{ kind: string; n: number; mine: boolean }>(
    db,
    sql`SELECT "kind", count(*)::int AS "n", bool_or("userId" = ${userId}) AS "mine"
          FROM "CommentReaction" WHERE "commentId" = ${commentId} GROUP BY "kind"`,
  );
  const reactions = emptyReactions();
  const mine: ReactionKind[] = [];
  for (const r of found) {
    if (!isReactionKind(r.kind)) continue;
    reactions[r.kind] = r.n;
    if (r.mine) mine.push(r.kind);
  }
  return { commentId, reactions, mine };
}

/** `PUT|DELETE /comments/:id/reactions/:kind`: one reaction per kind and user (idempotent). */
export async function setReaction(ctx: Ctx, id: number, kind: ReactionKind, on: boolean): Promise<ReactionState> {
  const member = await loadMember(ctx);
  assertCan(member.subject, 'comment.write', undefined, ctx.clock.now());
  const current = await loadStored(ctx.db, id);
  if (current.status !== 'visible') throw errors.notFound('Comment');
  await loadThreadMod(ctx.db, current.modId);
  await ctx.db.transaction(async (tx) => {
    const changed = on
      ? await tx
          .insert(commentReaction)
          .values({ commentId: id, userId: member.id, kind })
          .onConflictDoNothing()
          .returning({ kind: commentReaction.kind })
      : await tx
          .delete(commentReaction)
          .where(
            and(
              eq(commentReaction.commentId, id),
              eq(commentReaction.userId, member.id),
              eq(commentReaction.kind, kind),
            ),
          )
          .returning({ kind: commentReaction.kind });
    if (changed.length > 0) await refreshReactions(tx, id);
  });
  return reactionState(ctx.db, id, member.id);
}

/** The mod-author actions: the signed-in user must own the comment's mod. */
async function ownerAction(ctx: Ctx, id: number) {
  const member = await loadMember(ctx);
  const current = await loadStored(ctx.db, id);
  if (current.status === 'deleted') throw errors.notFound('Comment');
  const mod = await loadThreadMod(ctx.db, current.modId);
  if (mod.userId === null || mod.userId !== member.id) throw errors.forbidden('Only the author of the mod can do this');
  if (member.subject.suspendedUntil && member.subject.suspendedUntil.getTime() > ctx.clock.now().getTime()) {
    throw new DomainError('SUSPENDED', undefined, 'Your account is suspended');
  }
  return { member, current, mod };
}

/** `POST|DELETE /comments/:id/pin`: the mod author pins up to 3 visible top-level comments. */
export async function setPinned(
  ctx: Ctx,
  deps: Pick<CommentWriteDeps, 'config'>,
  id: number,
  pinned: boolean,
): Promise<CommentDTO> {
  const { member, current, mod } = await ownerAction(ctx, id);
  if (pinned && (current.status !== 'visible' || current.replyId !== null)) {
    throw errors.validation('Only visible top-level comments can be pinned');
  }
  await ctx.db.transaction(async (tx) => {
    await lockMod(tx, mod.id);
    const locked = await loadStored(tx, id, true);
    const isPinned = locked.pinnedAt !== null;
    if (isPinned === pinned) return;
    if (pinned) {
      const count = await firstRow<{ n: number }>(
        tx,
        sql`SELECT count(*)::int AS "n" FROM "Comment"
             WHERE "modId" = ${mod.id} AND "pinnedAt" IS NOT NULL AND "status" = 'visible'`,
      );
      if ((count?.n ?? 0) >= COMMENT_RULES.pinsMax) {
        throw errors.conflict(`At most ${COMMENT_RULES.pinsMax} comments can be pinned`);
      }
    }
    await tx
      .update(comment)
      .set(pinned ? { pinnedAt: ctx.clock.now(), pinnedById: member.id } : { pinnedAt: null, pinnedById: null })
      .where(eq(comment.id, id));
    await ctx.jobs.emitNew(
      tx,
      'comment.pinned',
      { commentId: id, modId: mod.id, authorId: current.userId ?? member.id, pinned },
      { actorId: member.id },
    );
  });
  return commentDto(ctx.db, deps.config, id, viewerOfMember(member));
}

/**
 * `POST|DELETE /comments/:id/solution`: the mod author marks a visible reply as the solution of
 * its thread (one per thread: marking another moves the mark).
 */
export async function setSolution(
  ctx: Ctx,
  deps: Pick<CommentWriteDeps, 'config'>,
  id: number,
  marked: boolean,
): Promise<CommentDTO> {
  const { member, current, mod } = await ownerAction(ctx, id);
  if (marked && (current.status !== 'visible' || current.replyId === null)) {
    throw errors.validation('Only a visible reply can be the solution');
  }
  await ctx.db.transaction(async (tx) => {
    await lockMod(tx, mod.id);
    const locked = await loadStored(tx, id, true);
    if (locked.isSolution === marked) return;
    if (marked) {
      const rootId = await rootIdOf(tx, locked);
      await tx.execute(
        sql`UPDATE "Comment" c SET "isSolution" = false
             WHERE c."isSolution" AND c."id" <> ${id}
               AND (c."replyId" = ${rootId}
                    OR c."replyId" IN (SELECT "id" FROM "Comment" WHERE "replyId" = ${rootId}))`,
      );
    }
    await tx.update(comment).set({ isSolution: marked }).where(eq(comment.id, id));
    await ctx.jobs.emitNew(
      tx,
      'comment.solution_marked',
      { commentId: id, modId: mod.id, authorId: current.userId ?? member.id, marked },
      { actorId: member.id },
    );
  });
  return commentDto(ctx.db, deps.config, id, viewerOfMember(member));
}

/** `POST /comments/:id/resolve {versionId}`: a bug report is marked as resolved in vX. */
export async function resolveBug(
  ctx: Ctx,
  deps: Pick<CommentWriteDeps, 'config'>,
  id: number,
  versionId: number,
): Promise<CommentDTO> {
  const { member, current, mod } = await ownerAction(ctx, id);
  if (!current.isBugReport || current.status !== 'visible') {
    throw errors.validation('Only visible bug reports can be marked as resolved');
  }
  const version = await versionOfMod(ctx.db, mod.id, versionId, 'versionId');
  await ctx.db.transaction(async (tx) => {
    await lockMod(tx, mod.id);
    await tx.update(comment).set({ bugResolvedInVersionId: version.id }).where(eq(comment.id, id));
    if (current.userId !== null) {
      await ctx.jobs.emitNew(
        tx,
        'comment.bug_resolved',
        { commentId: id, modId: mod.id, authorId: current.userId, versionId: version.id },
        { actorId: member.id },
      );
    }
  });
  return commentDto(ctx.db, deps.config, id, viewerOfMember(member));
}

/**
 * Moderation (Ranger Station, WP-51): hide a comment with a reason, show it again, or approve a
 * held (`pending`) one. Approving a held comment publishes it like a new one (`comment.created`
 * with its mentions). The caller also enforces the fresh-session rule (`assertFreshSession`) and
 * writes the audit log.
 */
export async function setCommentVisibility(
  ctx: Ctx,
  deps: Pick<CommentWriteDeps, 'config'>,
  id: number,
  input: { hidden: boolean; reason?: string | null },
): Promise<CommentDTO> {
  const member = await loadMember(ctx);
  assertCan(member.subject, 'moderation.hide_content', undefined, ctx.clock.now());
  const current = await loadStored(ctx.db, id);
  if (current.status === 'deleted') throw errors.notFound('Comment');
  const target = input.hidden ? 'hidden' : 'visible';
  if (current.status !== target) {
    const wasPending = current.status === 'pending';
    await ctx.db.transaction(async (tx) => {
      await lockMod(tx, current.modId);
      await tx
        .update(comment)
        .set({
          status: target,
          isHidden: target !== 'visible',
          hiddenReason: input.hidden ? input.reason?.trim() || null : null,
          ...(input.hidden ? { pinnedAt: null, pinnedById: null } : {}),
        })
        .where(eq(comment.id, id));
      await refreshCommentCounters(tx, current.modId, [await rootIdOf(tx, current)]);
      await ctx.jobs.emitNew(
        tx,
        'comment.visibility_changed',
        { commentId: id, modId: current.modId, authorId: current.userId, hidden: input.hidden },
        { actorId: member.id },
      );
      if (wasPending && !input.hidden && current.userId !== null) {
        const mod = await loadThreadMod(tx, current.modId);
        const source = sourceOf(current);
        const map = await loadMentions(tx, source);
        let parent: { id: number; userId: number | null } | null = null;
        if (current.replyId !== null) {
          parent = await firstRow<{ id: number; userId: number | null }>(
            tx,
            sql`SELECT "id", "userId" FROM "Comment" WHERE "id" = ${current.replyId}`,
          );
        }
        await ctx.jobs.emitNew(
          tx,
          'comment.created',
          {
            commentId: id,
            modId: current.modId,
            modAuthorId: mod.userId ?? current.userId,
            authorId: current.userId,
            parentId: parent?.id ?? null,
            parentAuthorId: parent?.userId ?? null,
            mentionedUserIds: mentionedIds(map, extractMentions(source), current.userId),
            isBugReport: current.isBugReport,
          },
          { actorId: member.id },
        );
      }
    });
  }
  return commentDto(ctx.db, deps.config, id, viewerOfMember(member));
}
