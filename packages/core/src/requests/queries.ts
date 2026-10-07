/**
 * Mod request reads: the page list, one request, the comments of a request (oldest first, keyset
 * cursor on the id) and the votes of a member. Public reads never return hidden or deleted items;
 * the DTO builders by id (used by the writes) do not filter, the writer already authorised.
 */
import type { ModRefDTO, UserRefDTO } from '@sotf/contracts/common';
import { totalPages } from '@sotf/contracts/pagination';
import type {
  MyRequestVotesDTO,
  RequestCommentDTO,
  RequestDTO,
  RequestListQuery,
  RequestStatus,
} from '@sotf/contracts/requests';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import {
  AUTHOR_COLUMNS,
  type AuthorColumns,
  asDate,
  authorJoins,
  type CommunityConfig,
  decodeKeyset,
  encodeKeyset,
  firstRow,
  rows,
  userRefOf,
} from '../comments/shared.ts';
import { loadModCards } from '../downloads/cards.ts';
import { errors } from '../kernel/errors.ts';
import { modRefOf } from '../stats/studio-common.ts';

interface RequestRow {
  id: number;
  title: string;
  bodyHtml: string | null;
  authorId: number | null;
  status: RequestStatus;
  voteCount: number;
  commentCount: number;
  adoptedById: number | null;
  adoptedAt: unknown;
  fulfilledModId: number | null;
  fulfilledAt: unknown;
  createdAt: unknown;
  editedAt: unknown;
  closedAt: unknown;
}

const REQUEST_COLUMNS = sql`r."id", r."title", r."bodyHtml", r."authorId", r."status", r."voteCount", r."commentCount",
  r."adoptedById", r."adoptedAt", r."fulfilledModId", r."fulfilledAt", r."createdAt", r."editedAt", r."closedAt"`;

const PUBLIC = sql`r."hiddenAt" IS NULL AND r."deletedAt" IS NULL`;

const iso = (value: unknown): string | null =>
  value === null || value === undefined ? null : asDate(value).toISOString();

/** `UserRefDTO` of several users in one round trip, keyed by user id. */
export async function loadUserRefs(
  db: Executor,
  config: CommunityConfig,
  ids: readonly (number | null)[],
): Promise<Map<number, UserRefDTO>> {
  const unique = [...new Set(ids.filter((id): id is number => id !== null))];
  const out = new Map<number, UserRefDTO>();
  if (unique.length === 0) return out;
  const list = sql.join(
    unique.map((id) => sql`(${id}::int)`),
    sql`, `,
  );
  const found = await rows<AuthorColumns>(
    db,
    sql`SELECT ${AUTHOR_COLUMNS} FROM (VALUES ${list}) AS ids("id") ${authorJoins(sql.raw('ids."id"'))}`,
  );
  for (const row of found) {
    const ref = userRefOf(config, row);
    if (ref) out.set(ref.id, ref);
  }
  return out;
}

/** `ModRefDTO` of several mods, keyed by mod id (mods without an owner are skipped). */
async function loadModRefs(
  db: Executor,
  config: CommunityConfig,
  ids: readonly (number | null)[],
): Promise<Map<number, ModRefDTO>> {
  const unique = [...new Set(ids.filter((id): id is number => id !== null))];
  const out = new Map<number, ModRefDTO>();
  if (unique.length === 0) return out;
  const cards = await loadModCards(db, unique, {
    publicBaseUrl: config.mediaBaseUrl,
    publicBucket: config.publicBucket,
  });
  for (const [id, { card }] of cards) out.set(id, modRefOf(card));
  return out;
}

async function requestDtos(db: Executor, config: CommunityConfig, found: RequestRow[]): Promise<RequestDTO[]> {
  const [users, mods] = await Promise.all([
    loadUserRefs(
      db,
      config,
      found.flatMap((r) => [r.authorId, r.adoptedById]),
    ),
    loadModRefs(
      db,
      config,
      found.map((r) => r.fulfilledModId),
    ),
  ]);
  return found.map((r) => ({
    id: r.id,
    title: r.title,
    bodyHtml: r.bodyHtml,
    author: r.authorId === null ? null : (users.get(r.authorId) ?? null),
    status: r.status,
    voteCount: r.voteCount,
    commentCount: r.commentCount,
    adopter: r.adoptedById === null ? null : (users.get(r.adoptedById) ?? null),
    adoptedAt: iso(r.adoptedAt),
    mod: r.fulfilledModId === null ? null : (mods.get(r.fulfilledModId) ?? null),
    fulfilledAt: iso(r.fulfilledAt),
    createdAt: iso(r.createdAt) as string,
    editedAt: iso(r.editedAt),
    closedAt: iso(r.closedAt),
  }));
}

const REQUEST_ORDER = {
  top: sql`r."voteCount" DESC, r."id" DESC`,
  new: sql`r."createdAt" DESC, r."id" DESC`,
  old: sql`r."createdAt" ASC, r."id" ASC`,
  comments: sql`r."commentCount" DESC, r."voteCount" DESC, r."id" DESC`,
} as const;

/** Escapes the wildcards of a `LIKE` pattern (the user's text is matched literally). */
function likeEscape(text: string): string {
  return text.replace(/[\\%_]/g, (char) => `\\${char}`);
}

/** `GET /requests`. */
export async function listRequests(
  db: Executor,
  config: CommunityConfig,
  query: Pick<RequestListQuery, 'status' | 'sort' | 'page' | 'pageSize'> & Pick<Partial<RequestListQuery>, 'q'>,
) {
  const status = query.status === 'all' ? sql`TRUE` : sql`r."status" = ${query.status}`;
  const order = REQUEST_ORDER[query.sort];
  const text = query.q?.trim() ? sql`r."title" ILIKE ${`%${likeEscape(query.q.trim())}%`} ESCAPE '\\'` : sql`TRUE`;
  const [count, found] = await Promise.all([
    firstRow<{ n: number }>(
      db,
      sql`SELECT count(*)::int AS "n" FROM "ModRequest" r WHERE ${PUBLIC} AND ${status} AND ${text}`,
    ),
    rows<RequestRow>(
      db,
      sql`SELECT ${REQUEST_COLUMNS} FROM "ModRequest" r WHERE ${PUBLIC} AND ${status} AND ${text}
           ORDER BY ${order} LIMIT ${query.pageSize} OFFSET ${(query.page - 1) * query.pageSize}`,
    ),
  ]);
  const total = count?.n ?? 0;
  return {
    items: await requestDtos(db, config, found),
    page: query.page,
    pageSize: query.pageSize,
    total,
    totalPages: totalPages(total, query.pageSize),
  };
}

/** One request by id, without visibility filter (for the writers). */
export async function requestDtoById(db: Executor, config: CommunityConfig, id: number): Promise<RequestDTO> {
  const row = await firstRow<RequestRow>(
    db,
    sql`SELECT ${REQUEST_COLUMNS} FROM "ModRequest" r WHERE r."id" = ${id} AND r."deletedAt" IS NULL`,
  );
  if (!row) throw errors.notFound('Request');
  const [dto] = await requestDtos(db, config, [row]);
  return dto as RequestDTO;
}

/** `GET /requests/:id`: hidden and deleted requests are 404 for everybody (the response is cached). */
export async function getRequest(db: Executor, config: CommunityConfig, id: number): Promise<RequestDTO> {
  const row = await firstRow<RequestRow>(
    db,
    sql`SELECT ${REQUEST_COLUMNS} FROM "ModRequest" r WHERE r."id" = ${id} AND ${PUBLIC}`,
  );
  if (!row) throw errors.notFound('Request');
  const [dto] = await requestDtos(db, config, [row]);
  return dto as RequestDTO;
}

interface CommentRow extends AuthorColumns {
  id: number;
  requestId: number;
  bodyHtml: string;
  authorId: number | null;
  status: 'visible' | 'hidden' | 'deleted';
  createdAt: unknown;
  editedAt: unknown;
  requestAuthorId: number | null;
  adoptedById: number | null;
}

function commentDto(config: CommunityConfig, row: CommentRow): RequestCommentDTO {
  return {
    id: row.id,
    requestId: row.requestId,
    bodyHtml: row.bodyHtml,
    author: userRefOf(config, row),
    isAdopter: row.authorId !== null && row.authorId === row.adoptedById,
    isRequestAuthor: row.authorId !== null && row.authorId === row.requestAuthorId,
    status: row.status,
    createdAt: iso(row.createdAt) as string,
    editedAt: iso(row.editedAt),
  };
}

const COMMENT_BASE = sql`SELECT c."id", c."requestId", c."bodyHtml", c."authorId", c."status", c."createdAt", c."editedAt",
    r."authorId" AS "requestAuthorId", r."adoptedById", ${AUTHOR_COLUMNS}
  FROM "ModRequestComment" c
  JOIN "ModRequest" r ON r."id" = c."requestId"
  ${authorJoins(sql.raw('c."authorId"'))}`;

/** `GET /requests/:id/comments`: visible comments, oldest first, keyset cursor on the id. */
export async function listRequestComments(
  db: Executor,
  config: CommunityConfig,
  requestId: number,
  page: { cursor?: string | undefined; limit: number },
) {
  const exists = await firstRow<{ id: number }>(
    db,
    sql`SELECT r."id" FROM "ModRequest" r WHERE r."id" = ${requestId} AND ${PUBLIC}`,
  );
  if (!exists) throw errors.notFound('Request');
  const after = page.cursor ? (decodeKeyset(page.cursor, 1)[0] as number) : 0;
  const found = await rows<CommentRow>(
    db,
    sql`${COMMENT_BASE} WHERE c."requestId" = ${requestId} AND c."status" = 'visible' AND c."id" > ${after}
         ORDER BY c."id" ASC LIMIT ${page.limit + 1}`,
  );
  const more = found.length > page.limit;
  const items = found.slice(0, page.limit);
  const last = items[items.length - 1];
  return {
    items: items.map((row) => commentDto(config, row)),
    nextCursor: more && last ? encodeKeyset([last.id]) : null,
  };
}

/** One comment by id (for the writers; no visibility filter). */
export async function requestCommentById(
  db: Executor,
  config: CommunityConfig,
  id: number,
): Promise<RequestCommentDTO> {
  const row = await firstRow<CommentRow>(db, sql`${COMMENT_BASE} WHERE c."id" = ${id}`);
  if (!row) throw errors.notFound('Comment');
  return commentDto(config, row);
}

/** `GET /me/request-votes`. */
export async function myRequestVotes(db: Executor, userId: number): Promise<MyRequestVotesDTO> {
  const found = await rows<{ requestId: number }>(
    db,
    sql`SELECT v."requestId" FROM "ModRequestVote" v JOIN "ModRequest" r ON r."id" = v."requestId"
         WHERE v."userId" = ${userId} AND r."deletedAt" IS NULL ORDER BY v."createdAt" DESC LIMIT 1000`,
  );
  return { requestIds: found.map((r) => r.requestId) };
}
