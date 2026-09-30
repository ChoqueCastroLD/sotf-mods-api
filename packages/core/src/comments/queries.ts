/**
 * Comment reads (PLAN §7.6, §5.2 "Comunidad"): the Top/New page of top-level comments with their
 * first replies, the permalink thread and the `CommentDTO` builder shared with the writes.
 *
 * Visibility: everyone sees `visible` comments; the author also sees their own `hidden` and
 * `pending` ones and moderators see every one of them (marked by `status`). A top-level comment
 * that is deleted or hidden but still has visible replies stays as an empty placeholder
 * ("Comment deleted") so the thread keeps its shape. Public lists are edge-cached and therefore
 * always read as a guest (the platform does not resolve sessions for them).
 */

import type { CommentDTO } from '@sotf/contracts/comments';
import type { ImageDTO } from '@sotf/contracts/common';
import type { Executor } from '@sotf/db';
import { decodeEntities, renderMarkdown } from '@sotf/markdown';
import { type SQL, sql } from 'drizzle-orm';
import { imageDto, type MediaRow } from '../catalog/index.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { emptyReactions, isReactionKind, REPLY_PREVIEW, THREAD_REPLIES_MAX } from './rules.ts';
import {
  AUTHOR_COLUMNS,
  type AuthorColumns,
  asDate,
  authorJoins,
  type CommunityConfig,
  decodeKeyset,
  encodeKeyset,
  loadThreadMod,
  rows,
  userRefOf,
  type Viewer,
  viewerOf,
} from './shared.ts';

type CommentReplyDTO = CommentDTO['replies'][number];

interface CommentRow extends AuthorColumns {
  id: number;
  modId: number;
  replyId: number | null;
  userId: number | null;
  bodyHtml: string | null;
  bodyMd: string | null;
  message: string;
  status: 'visible' | 'hidden' | 'pending' | 'deleted';
  hiddenReason: string | null;
  isBugReport: boolean;
  isSolution: boolean;
  pinnedAt: unknown;
  createdAt: unknown;
  editedAt: unknown;
  mvId: number | null;
  mvVersion: string | null;
  rvId: number | null;
  rvVersion: string | null;
  modOwnerId: number | null;
}

const BASE_COLUMNS = sql`c."id", c."modId", c."replyId", c."userId", c."bodyHtml", c."bodyMd", c."message",
  c."status", c."hiddenReason", c."isBugReport", c."isSolution", c."pinnedAt", c."createdAt", c."editedAt",
  mv."id" AS "mvId", mv."version" AS "mvVersion", rv."id" AS "rvId", rv."version" AS "rvVersion",
  m."userId" AS "modOwnerId", ${AUTHOR_COLUMNS}`;

const BASE_JOINS = sql`JOIN "Mod" m ON m."id" = c."modId"
  LEFT JOIN "ModVersion" mv ON mv."id" = c."modVersionId"
  LEFT JOIN "ModVersion" rv ON rv."id" = c."bugResolvedInVersionId"
  ${authorJoins(sql.raw('c."userId"'))}`;

/** Comments the viewer may read in full. */
function readable(viewer: Viewer | null, alias = 'c'): SQL {
  const a = sql.raw(alias);
  if (viewer?.staff) return sql`${a}."status" IN ('visible', 'hidden', 'pending')`;
  if (viewer) {
    return sql`(${a}."status" = 'visible' OR (${a}."userId" = ${viewer.userId} AND ${a}."status" IN ('hidden', 'pending')))`;
  }
  return sql`${a}."status" = 'visible'`;
}

function canRead(viewer: Viewer | null, row: Pick<CommentRow, 'status' | 'userId'>): boolean {
  if (row.status === 'visible') return true;
  if (row.status === 'deleted' || !viewer) return false;
  return viewer.staff || row.userId === viewer.userId;
}

interface Extras {
  reactions: Map<number, CommentDTO['reactions']>;
  images: Map<number, ImageDTO[]>;
}

async function loadExtras(db: Executor, config: CommunityConfig, ids: number[]): Promise<Extras> {
  const reactions = new Map<number, CommentDTO['reactions']>();
  const images = new Map<number, ImageDTO[]>();
  if (ids.length === 0) return { reactions, images };
  const list = sql.join(
    ids.map((id) => sql`${id}`),
    sql`, `,
  );
  const [reactionRows, imageRows] = await Promise.all([
    rows<{ commentId: number; kind: string; n: number }>(
      db,
      sql`SELECT "commentId", "kind", count(*)::int AS "n" FROM "CommentReaction"
           WHERE "commentId" IN (${list}) GROUP BY "commentId", "kind"`,
    ),
    rows<{
      commentId: number;
      width: number | null;
      height: number | null;
      thumbhash: string | null;
      dominantColor: string | null;
      variants: MediaRow['variants'];
      sourceBucket: string | null;
      sourceKey: string | null;
    }>(
      db,
      sql`SELECT ci."commentId", med."width", med."height", med."thumbhash", med."dominantColor", med."variants",
                 med."sourceBucket", med."sourceKey"
            FROM "CommentImage" ci JOIN "Media" med ON med."id" = ci."mediaId"
           WHERE ci."commentId" IN (${list}) AND med."status" <> 'failed'
           ORDER BY ci."commentId", ci."position" NULLS LAST, ci."mediaId"`,
    ),
  ]);
  for (const r of reactionRows) {
    if (!isReactionKind(r.kind)) continue;
    const counts = reactions.get(r.commentId) ?? emptyReactions();
    counts[r.kind] = r.n;
    reactions.set(r.commentId, counts);
  }
  for (const r of imageRows) {
    const image = imageDto(config, r, null);
    if (!image) continue; // still processing: shown once `media.process` publishes the variants
    const list = images.get(r.commentId) ?? [];
    if (list.length < 2) list.push(image);
    images.set(r.commentId, list);
  }
  return { reactions, images };
}

function bodyHtmlOf(row: CommentRow): string {
  if (row.bodyHtml !== null) return row.bodyHtml;
  // Legacy rows not yet backfilled (B9): the legacy column holds entity-encoded plain text.
  return renderMarkdown(row.bodyMd ?? decodeEntities(row.message), { profile: 'lite' }).html;
}

function replyDto(config: CommunityConfig, row: CommentRow, extras: Extras, viewer: Viewer | null): CommentReplyDTO {
  const author = userRefOf(config, row);
  if (!canRead(viewer, row)) {
    // Placeholder of a removed top-level comment that still has replies.
    return {
      id: row.id,
      modId: row.modId,
      parentId: row.replyId,
      bodyHtml: '',
      author: null,
      badges: [],
      isBugReport: false,
      modVersion: null,
      bugResolvedIn: null,
      isSolution: false,
      pinnedAt: null,
      reactions: emptyReactions(),
      images: [],
      status: row.status === 'hidden' ? 'hidden' : 'deleted',
      hiddenReason: null,
      createdAt: asDate(row.createdAt).toISOString(),
      editedAt: null,
    };
  }
  const badges: CommentReplyDTO['badges'] = [];
  if (author) {
    if (row.modOwnerId !== null && row.userId === row.modOwnerId) badges.push('author');
    if (author.role === 'moderator' || author.role === 'admin') badges.push('ranger');
    if (author.verifiedCreator) badges.push('verified');
  }
  const showReason = row.status === 'hidden' && viewer !== null && (viewer.staff || viewer.userId === row.userId);
  return {
    id: row.id,
    modId: row.modId,
    parentId: row.replyId,
    bodyHtml: bodyHtmlOf(row),
    author,
    badges,
    isBugReport: row.isBugReport,
    modVersion: row.mvId !== null && row.mvVersion !== null ? { id: row.mvId, version: row.mvVersion } : null,
    bugResolvedIn: row.rvId !== null && row.rvVersion !== null ? { id: row.rvId, version: row.rvVersion } : null,
    isSolution: row.isSolution,
    pinnedAt: row.pinnedAt === null ? null : asDate(row.pinnedAt).toISOString(),
    reactions: extras.reactions.get(row.id) ?? emptyReactions(),
    images: extras.images.get(row.id) ?? [],
    status: row.status,
    hiddenReason: showReason ? row.hiddenReason : null,
    createdAt: asDate(row.createdAt).toISOString(),
    editedAt: row.editedAt === null ? null : asDate(row.editedAt).toISOString(),
  };
}

interface ReplyRow extends CommentRow {
  rootId: number;
  total: number;
}

/** Visible replies of each root (the first `perRoot`, oldest first) and their totals. */
async function loadReplies(
  db: Executor,
  rootIds: number[],
  viewer: Viewer | null,
  perRoot: number,
): Promise<ReplyRow[]> {
  if (rootIds.length === 0) return [];
  const list = sql.join(
    rootIds.map((id) => sql`${id}`),
    sql`, `,
  );
  // Legacy replies to a reply are grouped under the top-level comment (the UI shows 2 levels).
  return rows<ReplyRow>(
    db,
    sql`SELECT * FROM (
          SELECT ${BASE_COLUMNS}, coalesce(p."replyId", c."replyId") AS "rootId",
                 row_number() OVER (PARTITION BY coalesce(p."replyId", c."replyId") ORDER BY c."createdAt", c."id") AS "rn",
                 (count(*) OVER (PARTITION BY coalesce(p."replyId", c."replyId")))::int AS "total"
            FROM "Comment" c
            JOIN "Comment" p ON p."id" = c."replyId"
            ${BASE_JOINS}
           WHERE coalesce(p."replyId", c."replyId") IN (${list}) AND ${readable(viewer)}
        ) x
        WHERE x."rn" <= ${perRoot}
        ORDER BY x."rootId", x."rn"`,
  );
}

async function assemble(
  db: Executor,
  config: CommunityConfig,
  roots: CommentRow[],
  viewer: Viewer | null,
  perRoot: number,
): Promise<CommentDTO[]> {
  const replies = await loadReplies(
    db,
    roots.map((r) => r.id),
    viewer,
    perRoot,
  );
  const extras = await loadExtras(db, config, [...roots.map((r) => r.id), ...replies.map((r) => r.id)]);
  const byRoot = new Map<number, ReplyRow[]>();
  for (const reply of replies) {
    const list = byRoot.get(reply.rootId) ?? [];
    list.push(reply);
    byRoot.set(reply.rootId, list);
  }
  return roots.map((root) => {
    const own = byRoot.get(root.id) ?? [];
    return {
      ...replyDto(config, root, extras, viewer),
      parentId: null,
      repliesCount: own[0]?.total ?? 0,
      replies: own.map((reply) => ({ ...replyDto(config, reply, extras, viewer), parentId: root.id })),
    };
  });
}

export interface CommentListInput {
  sort: 'top' | 'new';
  cursor?: string | undefined;
  limit: number;
}

/**
 * `GET /mods/:id/comments`: top-level comments. `new` = newest first; `top` = pinned first, then
 * the Wilson lower bound of the positive reactions (monotonic in their number, so the keyset is
 * the stored `reactionsCount`), newest first on ties.
 */
export async function listComments(
  ctx: Ctx,
  config: CommunityConfig,
  modId: number,
  input: CommentListInput,
  viewer: Viewer | null = viewerOf(ctx),
): Promise<{ items: CommentDTO[]; nextCursor: string | null }> {
  await loadThreadMod(ctx.db, modId);
  const pinned = sql`(CASE WHEN c."pinnedAt" IS NOT NULL THEN 1 ELSE 0 END)`;
  let after: SQL = sql`TRUE`;
  if (input.cursor) {
    if (input.sort === 'new') {
      const [id] = decodeKeyset(input.cursor, 1);
      after = sql`c."id" < ${id}`;
    } else {
      const [p, r, id] = decodeKeyset(input.cursor, 3);
      after = sql`(${pinned}, c."reactionsCount", c."id") < (${p}, ${r}, ${id})`;
    }
  }
  const order = input.sort === 'new' ? sql`c."id" DESC` : sql`${pinned} DESC, c."reactionsCount" DESC, c."id" DESC`;
  const found = await rows<CommentRow & { pinnedFlag: number; reactionsCount: number }>(
    ctx.db,
    sql`SELECT ${BASE_COLUMNS}, ${pinned} AS "pinnedFlag", c."reactionsCount"
          FROM "Comment" c ${BASE_JOINS}
         WHERE c."modId" = ${modId} AND c."replyId" IS NULL
           AND (${readable(viewer)}
                OR (c."status" IN ('deleted', 'hidden') AND EXISTS (
                      SELECT 1 FROM "Comment" r WHERE r."replyId" = c."id" AND r."status" = 'visible')))
           AND ${after}
         ORDER BY ${order}
         LIMIT ${input.limit + 1}`,
  );
  const page = found.slice(0, input.limit);
  const last = page[page.length - 1];
  const nextCursor =
    found.length > input.limit && last
      ? input.sort === 'new'
        ? encodeKeyset([last.id])
        : encodeKeyset([Number(last.pinnedFlag), Number(last.reactionsCount), last.id])
      : null;
  return { items: await assemble(ctx.db, config, page, viewer, REPLY_PREVIEW), nextCursor };
}

async function loadRow(db: Executor, id: number): Promise<CommentRow | null> {
  const [row] = await rows<CommentRow>(
    db,
    sql`SELECT ${BASE_COLUMNS} FROM "Comment" c ${BASE_JOINS} WHERE c."id" = ${id}`,
  );
  return row ?? null;
}

/**
 * `GET /comments/:id`: the top-level comment of the thread with all its replies (up to
 * {@link THREAD_REPLIES_MAX}) and the requested id as `focusId`. 404 when the viewer may not read
 * the comment (hidden, pending, deleted) or its mod.
 */
export async function getCommentThread(
  ctx: Ctx,
  config: CommunityConfig,
  id: number,
  viewer: Viewer | null = viewerOf(ctx),
): Promise<{ comment: CommentDTO; focusId: number; modId: number }> {
  const focus = await loadRow(ctx.db, id);
  if (!focus) throw errors.notFound('Comment');
  await loadThreadMod(ctx.db, focus.modId);
  let root = focus;
  if (focus.replyId !== null) {
    const parent = await loadRow(ctx.db, focus.replyId);
    const loaded = parent && parent.replyId !== null ? await loadRow(ctx.db, parent.replyId) : parent;
    if (!loaded) throw errors.notFound('Comment');
    root = loaded;
  }
  if (!canRead(viewer, focus)) {
    // A removed top-level comment can still be the anchor of its visible replies.
    const isAnchor = focus.id === root.id && focus.status !== 'pending';
    if (!isAnchor) throw errors.notFound('Comment');
  }
  const [dto] = await assemble(ctx.db, config, [root], viewer, THREAD_REPLIES_MAX);
  if (!dto) throw errors.notFound('Comment');
  if (!canRead(viewer, root) && dto.replies.length === 0) throw errors.notFound('Comment');
  return { comment: dto, focusId: focus.id, modId: focus.modId };
}

/** `CommentDTO` of one comment as `viewer` sees it (used by the writes). A reply comes with its root. */
export async function commentDto(
  db: Executor,
  config: CommunityConfig,
  id: number,
  viewer: Viewer | null,
): Promise<CommentDTO> {
  const row = await loadRow(db, id);
  if (!row) throw errors.notFound('Comment');
  const [dto] = await assemble(db, config, [row], viewer, REPLY_PREVIEW);
  if (!dto) throw errors.notFound('Comment');
  // A reply is returned as itself (parentId set, no replies of its own).
  return row.replyId === null ? dto : { ...dto, parentId: row.replyId, repliesCount: 0, replies: [] };
}
