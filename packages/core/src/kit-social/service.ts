/**
 * Kits, social layer (Kits T1-24, PLAN §7.8).
 *
 * - **Follow**: `KitFollow` (primary key `(kitId, userId)`); `Kit.followersCount` moves in the same
 *   transaction as the row (never touching `Kit.updatedAt`). `notify` = signals when the kit
 *   changes (the planner turns `kit.updated` into `kit.updated_followed`). A kit is followed only
 *   by people who can see it (never private kits of others, never your own kit).
 * - **Comments**: one thread per kit in `KitComment` (the legacy `Comment` table is bound to a
 *   mod), the `lite` markdown profile of mod comments, one reply level, soft delete by the author,
 *   the kit owner (curating their own kit) or staff. A deleted comment with visible replies stays
 *   as a tombstone so the thread keeps its shape.
 * - Every follow or comment change publishes `kit.live` (`kit:{id}`) inside the transaction: the
 *   public kit page updates its counters without polling.
 */
import type { UserRefDTO } from '@sotf/contracts/common';
import {
  type CreateKitCommentBody,
  KIT_COMMENT_RULES,
  type KitCommentDTO,
  type KitCommentPageDTO,
  type KitFollowListDTO,
  type KitFollowLookupDTO,
  type KitFollowStateDTO,
  type KitReplyDTO,
} from '@sotf/contracts/kit-social';
import { type Executor, withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { type CatalogConfig, getSnapshot } from '../catalog/index.ts';
import { at, intArray, query, queryOne, toInt } from '../follows/sql.ts';
import type { Actor, Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { buildKitCards, type KitRow, loadKitRow, loadKitRows, viewOf } from '../kits/read.ts';
import {
  AUTHOR_COLUMNS,
  type AuthorColumns,
  asDate,
  authorJoins,
  decodeKeyset,
  encodeKeyset,
  isMuted,
  loadMember,
  userRefOf,
} from '../comments/shared.ts';
import { renderUserText } from '../mentions/index.ts';
import { assertCan } from '../permissions/can.ts';
import { publishKitLive } from '../realtime/index.ts';

type CreateInput = z.output<typeof CreateKitCommentBody>;

export interface KitSocialDeps {
  /** Public media base URL and bucket (avatars, kit covers). */
  config: CatalogConfig;
  /** Counts one comment of the user against the daily limit (throws `RATE_LIMITED` when spent). */
  consumeDaily?: (userId: number) => Promise<void>;
}

function actorOf(ctx: Ctx): Actor {
  if (!ctx.actor) throw errors.unauthenticated();
  return ctx.actor;
}

// -----------------------------------------------------------------------------------------------
// Counters and live
// -----------------------------------------------------------------------------------------------

async function visibleComments(db: Executor, kitId: number): Promise<number> {
  const row = await queryOne<{ n: number }>(
    db,
    sql`SELECT count(*)::int AS n FROM "KitComment" WHERE "kitId" = ${kitId} AND "status" = 'visible'`,
  );
  return toInt(row?.n);
}

/** Pushes the live counters of a kit (delivered on commit). */
async function pushLive(ctx: Ctx, tx: Executor, kitId: number, followers: number): Promise<void> {
  const comments = await visibleComments(tx, kitId);
  await publishKitLive(tx, {
    kitId,
    followers,
    comments,
    id: `${kitId}.${ctx.clock.now().getTime()}.${followers}.${comments}`,
  });
}

/** Live counters of a kit visible to everybody (public or unlisted). 404 otherwise. */
export async function getKitLive(ctx: Ctx, kitId: number): Promise<{ followers: number; comments: number }> {
  const kit = await loadKitRow(ctx.db, kitId);
  if (!kit || viewOf(kit, null) !== 'public') throw errors.notFound('Kit');
  return { followers: kit.followersCount, comments: await visibleComments(ctx.db, kitId) };
}

// -----------------------------------------------------------------------------------------------
// Follows
// -----------------------------------------------------------------------------------------------

async function followableKit(db: Executor, kitId: number, userId: number): Promise<KitRow> {
  const kit = await loadKitRow(db, kitId);
  if (!kit || viewOf(kit, userId) === null) throw errors.notFound('Kit');
  return kit;
}

/** `PUT /kits/:id/follow`: follows a kit (idempotent; a second call only updates `notify`). */
export async function followKit(ctx: Ctx, kitId: number, notify: boolean): Promise<KitFollowStateDTO> {
  const actor = actorOf(ctx);
  const kit = await followableKit(ctx.db, kitId, actor.userId);
  if (kit.ownerId === actor.userId) throw errors.forbidden('You cannot follow your own kit');
  const now = ctx.clock.now();
  return withTx(ctx.db, async (tx) => {
    const locked = await loadKitRow(tx, kitId, true);
    if (!locked || locked.deletedAt) throw errors.notFound('Kit');
    const [row] = await query<{ inserted: boolean }>(
      tx,
      sql`INSERT INTO "KitFollow" ("kitId", "userId", "notify", "createdAt")
          VALUES (${kitId}, ${actor.userId}, ${notify}, ${at(now)})
          ON CONFLICT ("kitId", "userId") DO UPDATE SET "notify" = EXCLUDED."notify"
          RETURNING (xmax = 0) AS "inserted"`,
    );
    let followers = locked.followersCount;
    if (row?.inserted) {
      const [counter] = await query<{ n: number }>(
        tx,
        sql`UPDATE "Kit" SET "followersCount" = "followersCount" + 1 WHERE "id" = ${kitId} RETURNING "followersCount" AS n`,
      );
      followers = toInt(counter?.n);
      await ctx.jobs.emitNew(
        tx,
        'kit.followed',
        { kitId, ownerId: locked.ownerId, userId: actor.userId, notify },
        { actorId: actor.userId },
      );
      await pushLive(ctx, tx, kitId, followers);
    }
    return { following: true, notify, followers };
  });
}

/** `DELETE /kits/:id/follow`: unfollows a kit (idempotent; deleted or hidden kits can be left). */
export async function unfollowKit(ctx: Ctx, kitId: number): Promise<KitFollowStateDTO> {
  const actor = actorOf(ctx);
  const exists = await loadKitRow(ctx.db, kitId);
  if (!exists) throw errors.notFound('Kit');
  return withTx(ctx.db, async (tx) => {
    const locked = await loadKitRow(tx, kitId, true);
    if (!locked) throw errors.notFound('Kit');
    const deleted = await query<{ kitId: number }>(
      tx,
      sql`DELETE FROM "KitFollow" WHERE "kitId" = ${kitId} AND "userId" = ${actor.userId} RETURNING "kitId"`,
    );
    let followers = locked.followersCount;
    if (deleted.length > 0) {
      const [counter] = await query<{ n: number }>(
        tx,
        sql`UPDATE "Kit" SET "followersCount" = GREATEST("followersCount" - 1, 0) WHERE "id" = ${kitId}
            RETURNING "followersCount" AS n`,
      );
      followers = toInt(counter?.n);
      await ctx.jobs.emitNew(
        tx,
        'kit.unfollowed',
        { kitId, ownerId: locked.ownerId, userId: actor.userId },
        { actorId: actor.userId },
      );
      await pushLive(ctx, tx, kitId, followers);
    }
    return { following: false, notify: false, followers };
  });
}

/** Maximum kits returned by `GET /me/kit-follows`. */
export const KIT_FOLLOWS_MAX = 500;

/** `GET /me/kit-follows`: followed kits that are still visible to the user, latest follow first. */
export async function listMyKitFollows(ctx: Ctx, deps: KitSocialDeps): Promise<KitFollowListDTO> {
  const actor = actorOf(ctx);
  const follows = await query<{ kitId: number; notify: boolean; createdAt: unknown }>(
    ctx.db,
    sql`SELECT "kitId", "notify", "createdAt" FROM "KitFollow" WHERE "userId" = ${actor.userId}
        ORDER BY "createdAt" DESC, "kitId" DESC LIMIT ${KIT_FOLLOWS_MAX}`,
  );
  if (follows.length === 0) return { items: [] };
  const rows = (await loadKitRows(ctx.db, sql`k."id" = ANY(${intArray(follows.map((f) => f.kitId))})`)).filter(
    (kit) => viewOf(kit, actor.userId) !== null,
  );
  const snapshot = await getSnapshot(ctx, deps.config);
  const cards = await buildKitCards(ctx.db, deps.config, snapshot, rows);
  const cardById = new Map(cards.map((card) => [card.id, card]));
  const items: KitFollowListDTO['items'] = [];
  for (const follow of follows) {
    const kit = cardById.get(follow.kitId);
    if (kit) items.push({ kit, notify: follow.notify, followedAt: asDate(follow.createdAt).toISOString() });
  }
  return { items };
}

/** `GET /me/kit-follows/lookup`: which of the given kits the user follows. */
export async function lookupKitFollows(ctx: Ctx, kitIds: readonly number[]): Promise<KitFollowLookupDTO> {
  const actor = actorOf(ctx);
  if (kitIds.length === 0) return { kits: [] };
  const rows = await query<{ kitId: number }>(
    ctx.db,
    sql`SELECT "kitId" FROM "KitFollow" WHERE "userId" = ${actor.userId} AND "kitId" = ANY(${intArray(kitIds)})
        ORDER BY "kitId"`,
  );
  return { kits: rows.map((r) => r.kitId) };
}

// -----------------------------------------------------------------------------------------------
// Comments: reads
// -----------------------------------------------------------------------------------------------

interface CommentRow extends AuthorColumns {
  id: number;
  kitId: number;
  userId: number | null;
  parentId: number | null;
  bodyMd: string;
  bodyHtml: string;
  status: string;
  createdAt: unknown;
  editedAt: unknown;
  isKitOwner: boolean;
}

const COMMENT_SELECT = sql`
SELECT c."id", c."kitId", c."userId", c."parentId", c."bodyMd", c."bodyHtml", c."status", c."createdAt", c."editedAt",
       (c."userId" IS NOT NULL AND c."userId" = k."ownerId") AS "isKitOwner", ${AUTHOR_COLUMNS}
  FROM "KitComment" c
  JOIN "Kit" k ON k."id" = c."kitId"
  ${authorJoins(sql.raw('c."userId"'))}`;

function replyOf(deps: KitSocialDeps, row: CommentRow): KitReplyDTO {
  const gone = row.status !== 'visible';
  const author: UserRefDTO | null = gone ? null : userRefOf(deps.config, row);
  return {
    id: row.id,
    kitId: row.kitId,
    parentId: row.parentId,
    bodyHtml: gone ? '' : row.bodyHtml,
    author,
    isKitOwner: !gone && row.isKitOwner,
    status: row.status as KitReplyDTO['status'],
    createdAt: asDate(row.createdAt).toISOString(),
    editedAt: row.editedAt === null || gone ? null : asDate(row.editedAt).toISOString(),
  };
}

/** Visible replies of the given top-level comments, oldest first (at most `repliesMax` each). */
async function loadReplies(db: Executor, deps: KitSocialDeps, parentIds: readonly number[]) {
  const byParent = new Map<number, KitReplyDTO[]>();
  if (parentIds.length === 0) return byParent;
  const rows = await query<CommentRow>(
    db,
    sql`SELECT * FROM (
          SELECT r.*, row_number() OVER (PARTITION BY r."parentId" ORDER BY r."createdAt", r."id") AS "rn"
            FROM (${COMMENT_SELECT}
                  WHERE c."parentId" = ANY(${intArray(parentIds)}) AND c."status" = 'visible') r
        ) ranked WHERE "rn" <= ${KIT_COMMENT_RULES.repliesMax} ORDER BY "createdAt", "id"`,
  );
  for (const row of rows) {
    if (row.parentId === null) continue;
    byParent.set(row.parentId, [...(byParent.get(row.parentId) ?? []), replyOf(deps, row)]);
  }
  return byParent;
}

async function threadOf(db: Executor, deps: KitSocialDeps, rows: readonly CommentRow[]): Promise<KitCommentDTO[]> {
  const replies = await loadReplies(
    db,
    deps,
    rows.map((r) => r.id),
  );
  return rows.map((row) => ({ ...replyOf(deps, row), replies: replies.get(row.id) ?? [] }));
}

/**
 * `GET /kits/:id/comments`: top-level comments newest first with their replies. Public cacheable
 * read: always answers as for an anonymous visitor (private kits are 404 here).
 */
export async function listKitComments(
  ctx: Ctx,
  deps: KitSocialDeps,
  kitId: number,
  input: { cursor?: string | undefined; limit: number },
): Promise<KitCommentPageDTO> {
  const kit = await loadKitRow(ctx.db, kitId);
  if (!kit || viewOf(kit, null) !== 'public') throw errors.notFound('Kit');
  const before = input.cursor === undefined ? null : decodeKeyset(input.cursor, 1)[0];
  const rows = await query<CommentRow>(
    ctx.db,
    sql`${COMMENT_SELECT}
        WHERE c."kitId" = ${kitId} AND c."parentId" IS NULL
          AND (c."status" = 'visible'
               OR EXISTS (SELECT 1 FROM "KitComment" r WHERE r."parentId" = c."id" AND r."status" = 'visible'))
          ${before === null ? sql`` : sql`AND c."id" < ${before}`}
        ORDER BY c."id" DESC LIMIT ${input.limit + 1}`,
  );
  const page = rows.slice(0, input.limit);
  const last = page.at(-1);
  return {
    items: await threadOf(ctx.db, deps, page),
    nextCursor: rows.length > input.limit && last ? encodeKeyset([last.id]) : null,
    total: await visibleComments(ctx.db, kitId),
  };
}

async function loadComment(db: Executor, id: number, forUpdate = false): Promise<CommentRow | null> {
  const [row] = await query<CommentRow>(
    db,
    forUpdate
      ? sql`${COMMENT_SELECT} WHERE c."id" = ${id} FOR UPDATE OF c`
      : sql`${COMMENT_SELECT} WHERE c."id" = ${id}`,
  );
  return row ?? null;
}

async function commentDto(db: Executor, deps: KitSocialDeps, id: number): Promise<KitCommentDTO> {
  const row = await loadComment(db, id);
  if (!row) throw errors.notFound('Comment');
  const [dto] = await threadOf(db, deps, [row]);
  if (!dto) throw errors.notFound('Comment');
  return dto;
}

// -----------------------------------------------------------------------------------------------
// Comments: writes
// -----------------------------------------------------------------------------------------------

function assertBody(md: string): void {
  if (md.trim().length === 0 || md.length > KIT_COMMENT_RULES.bodyMax) {
    throw errors.validation(`The comment must have 1–${KIT_COMMENT_RULES.bodyMax} characters`, [
      { path: 'bodyMd', code: 'invalid', message: 'length' },
    ]);
  }
}

/** `POST /kits/:id/comments`: comment on a kit or reply to a top-level comment. */
export async function createKitComment(
  ctx: Ctx,
  deps: KitSocialDeps,
  kitId: number,
  input: CreateInput,
): Promise<KitCommentDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  assertCan(member.subject, 'comment.write', undefined, now);
  const kit = await loadKitRow(ctx.db, kitId);
  if (!kit || viewOf(kit, member.id) === null) throw errors.notFound('Kit');
  if (await isMuted(ctx.db, member.id, 0, now)) throw errors.forbidden('You cannot comment right now');
  const rendered = await renderUserText(ctx.db, input.bodyMd, member.id);
  assertBody(rendered.md);
  await deps.consumeDaily?.(member.id);

  const id = await withTx(ctx.db, async (tx) => {
    let parent: { id: number; userId: number | null } | null = null;
    if (input.parentId !== undefined) {
      parent = await queryOne<{ id: number; userId: number | null }>(
        tx,
        sql`SELECT "id", "userId" FROM "KitComment"
             WHERE "id" = ${input.parentId} AND "kitId" = ${kitId} AND "parentId" IS NULL AND "status" = 'visible'
             FOR SHARE`,
      );
      if (!parent) {
        throw errors.validation('You can only reply to a visible comment of this kit', [
          { path: 'parentId', code: 'invalid', message: 'unknown comment' },
        ]);
      }
      const [count] = await query<{ n: number }>(
        tx,
        sql`SELECT count(*)::int AS n FROM "KitComment" WHERE "parentId" = ${parent.id} AND "status" = 'visible'`,
      );
      if (toInt(count?.n) >= KIT_COMMENT_RULES.repliesMax) throw errors.conflict('This thread has too many replies');
    }
    const [created] = await query<{ id: number }>(
      tx,
      sql`INSERT INTO "KitComment" ("kitId", "userId", "parentId", "bodyMd", "bodyHtml", "createdAt")
          VALUES (${kitId}, ${member.id}, ${parent?.id ?? null}, ${rendered.md}, ${rendered.html}, ${at(now)})
          RETURNING "id"`,
    );
    if (!created) throw new Error('kit comment insert returned no row');
    await ctx.jobs.emitNew(
      tx,
      'kit.comment_created',
      {
        commentId: created.id,
        kitId,
        ownerId: kit.ownerId,
        authorId: member.id,
        parentId: parent?.id ?? null,
        parentAuthorId: parent?.userId ?? null,
      },
      { actorId: member.id },
    );
    await pushLive(ctx, tx, kitId, kit.followersCount);
    return created.id;
  });
  ctx.log.info({ commentId: id, kitId }, 'kit comment created');
  return commentDto(ctx.db, deps, id);
}

/** `PATCH /kit-comments/:id`: the author edits their own visible comment. */
export async function updateKitComment(
  ctx: Ctx,
  deps: KitSocialDeps,
  id: number,
  input: { bodyMd: string },
): Promise<KitCommentDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  const current = await loadComment(ctx.db, id);
  if (!current || current.status === 'deleted') throw errors.notFound('Comment');
  assertCan(member.subject, 'comment.edit', { ownerId: current.userId }, now);
  if (current.status === 'hidden') throw errors.forbidden('A hidden comment cannot be edited');
  const kit = await loadKitRow(ctx.db, current.kitId);
  if (!kit || viewOf(kit, member.id) === null) throw errors.notFound('Kit');
  if (await isMuted(ctx.db, member.id, 0, now)) throw errors.forbidden('You cannot comment right now');
  const rendered = await renderUserText(ctx.db, input.bodyMd, member.id);
  assertBody(rendered.md);
  if (rendered.md !== current.bodyMd) {
    const updated = await query<{ id: number }>(
      ctx.db,
      sql`UPDATE "KitComment" SET "bodyMd" = ${rendered.md}, "bodyHtml" = ${rendered.html}, "editedAt" = ${at(now)}
           WHERE "id" = ${id} AND "status" = 'visible' RETURNING "id"`,
    );
    if (updated.length === 0) throw errors.conflict('The comment changed meanwhile');
  }
  return commentDto(ctx.db, deps, id);
}

/** `DELETE /kit-comments/:id`: the author, the kit owner or staff remove a comment (soft delete). */
export async function deleteKitComment(ctx: Ctx, id: number): Promise<void> {
  const actor = actorOf(ctx);
  const current = await loadComment(ctx.db, id);
  if (!current || current.status === 'deleted') throw errors.notFound('Comment');
  const kit = await loadKitRow(ctx.db, current.kitId);
  if (!kit) throw errors.notFound('Comment');
  const isAuthor = current.userId === actor.userId;
  const isOwner = kit.ownerId === actor.userId && kit.deletedAt === null;
  if (!isAuthor && !isOwner) assertCan(actor, 'comment.delete', { ownerId: current.userId }, ctx.clock.now());
  const now = ctx.clock.now();
  await withTx(ctx.db, async (tx) => {
    const locked = await loadComment(tx, id, true);
    if (!locked || locked.status === 'deleted') return;
    await tx.execute(
      sql`UPDATE "KitComment" SET "status" = 'deleted', "bodyMd" = '', "bodyHtml" = '',
                 "deletedAt" = ${at(now)}, "deletedById" = ${actor.userId}
           WHERE "id" = ${id}`,
    );
    await ctx.jobs.emitNew(
      tx,
      'kit.comment_deleted',
      { commentId: id, kitId: kit.id, ownerId: kit.ownerId, authorId: locked.userId },
      { actorId: actor.userId },
    );
    await pushLive(ctx, tx, kit.id, kit.followersCount);
  });
  ctx.log.info({ commentId: id, kitId: kit.id }, 'kit comment deleted');
}

/** `GET /kit-comments/:id/source`: the Markdown of the viewer's own comment (for the editor). */
export async function getKitCommentSource(ctx: Ctx, id: number): Promise<{ bodyMd: string }> {
  const actor = actorOf(ctx);
  const current = await loadComment(ctx.db, id);
  if (!current || current.status === 'deleted') throw errors.notFound('Comment');
  if (current.userId !== actor.userId) throw errors.forbidden('Only the author can read the source');
  return { bodyMd: current.bodyMd };
}
