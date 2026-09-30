/**
 * Mod request writes (T2): create (verified email, account ≥ 24 h, at most N open per member),
 * edit, soft delete, votes (never on your own request, only while it is open or adopted),
 * adopt/release by a creator, fulfil with an own published mod, close/reopen and comments.
 *
 * Counters (`voteCount`, `commentCount`) are recomputed inside the transaction with the request
 * row locked. Every change emits a domain event; the worker turns it into cache purges
 * (`list:requests`, `request:{id}`) and notifications.
 */
import {
  type CreateRequestBody,
  type FulfillRequestBody,
  REQUEST_RULES,
  type RequestCommentDTO,
  type RequestDTO,
  type RequestStatus,
  type UpdateRequestBody,
} from '@sotf/contracts/requests';
import type { Transaction } from '@sotf/db';
import { sql } from 'drizzle-orm';
import {
  type CommunityConfig,
  firstRow,
  isNewAccount,
  isStaffRole,
  loadMember,
  type Member,
  rows,
} from '../comments/shared.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { renderUserText } from '../mentions/index.ts';
import { assertCan } from '../permissions/index.ts';
import { requestCommentById, requestDtoById } from './queries.ts';
import { isActiveStatus, isEditableStatus, normaliseTitle } from './rules.ts';

interface StoredRequest {
  id: number;
  authorId: number | null;
  status: RequestStatus;
  adoptedById: number | null;
  hiddenAt: unknown;
  deletedAt: unknown;
}

async function loadStored(db: Ctx['db'] | Transaction, id: number, lock = false): Promise<StoredRequest> {
  const row = await firstRow<StoredRequest>(
    db,
    sql`SELECT "id", "authorId", "status", "adoptedById", "hiddenAt", "deletedAt"
          FROM "ModRequest" WHERE "id" = ${id}${lock ? sql` FOR UPDATE` : sql``}`,
  );
  if (!row || row.deletedAt !== null) throw errors.notFound('Request');
  return row;
}

/** The request of a write: hidden requests are only reachable by staff. */
function assertReachable(member: Member, stored: StoredRequest): void {
  if (stored.hiddenAt !== null && !isStaffRole(member.role)) throw errors.notFound('Request');
}

function assertAdult(member: Member, now: Date): void {
  if (isNewAccount(member, now)) {
    throw errors.forbidden(`Accounts can use the request board ${REQUEST_RULES.minAccountAgeHours} h after signing up`);
  }
}

async function renderBody(db: Ctx['db'], bodyMd: string | null | undefined, authorId: number, max: number) {
  const source = bodyMd?.normalize('NFC') ?? '';
  if (source.length > max) {
    throw errors.validation(`The text has at most ${max} characters`, [
      { path: 'bodyMd', code: 'too_big', message: `at most ${max} characters` },
    ]);
  }
  if (source.trim() === '') return null;
  return renderUserText(db, source, authorId);
}

/** True for verified creators and members with at least one published mod. */
async function isCreator(db: Ctx['db'], member: Member): Promise<boolean> {
  if (member.verifiedCreator) return true;
  const found = await firstRow<{ ok: boolean }>(
    db,
    sql`SELECT EXISTS (SELECT 1 FROM "Mod" WHERE "userId" = ${member.id} AND "status" = 'published') AS "ok"`,
  );
  return found?.ok === true;
}

async function refreshVotes(tx: Transaction, id: number): Promise<number> {
  const found = await firstRow<{ n: number }>(
    tx,
    sql`UPDATE "ModRequest" SET "voteCount" = (SELECT count(*) FROM "ModRequestVote" WHERE "requestId" = ${id})::int
         WHERE "id" = ${id} RETURNING "voteCount" AS "n"`,
  );
  return found?.n ?? 0;
}

/** Recomputes `commentCount` (also used by the report hide/restore). */
export async function refreshRequestCommentCount(tx: Transaction, id: number): Promise<void> {
  await tx.execute(
    sql`UPDATE "ModRequest" SET "commentCount" =
          (SELECT count(*) FROM "ModRequestComment" WHERE "requestId" = ${id} AND "status" = 'visible')::int
         WHERE "id" = ${id}`,
  );
}

/** `POST /requests`. */
export async function createRequest(ctx: Ctx, config: CommunityConfig, input: CreateRequestBody): Promise<RequestDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  assertCan(member.subject, 'comment.write', undefined, now);
  assertAdult(member, now);
  const title = normaliseTitle(input.title);
  if (title.length < REQUEST_RULES.titleMin || title.length > REQUEST_RULES.titleMax) {
    throw errors.validation('Invalid title', [
      { path: 'title', code: 'invalid', message: `${REQUEST_RULES.titleMin}-${REQUEST_RULES.titleMax} characters` },
    ]);
  }
  const body = await renderBody(ctx.db, input.bodyMd, member.id, REQUEST_RULES.bodyMax);
  const id = await ctx.db.transaction(async (tx) => {
    // Serialise the creations of one member so the open-requests limit holds.
    await tx.execute(sql`SELECT 1 FROM "User" WHERE "id" = ${member.id} FOR UPDATE`);
    const open = await firstRow<{ n: number }>(
      tx,
      sql`SELECT count(*)::int AS "n" FROM "ModRequest"
           WHERE "authorId" = ${member.id} AND "deletedAt" IS NULL AND "status" IN ('open', 'adopted')`,
    );
    if ((open?.n ?? 0) >= REQUEST_RULES.maxOpenPerUser) {
      throw errors.conflict(`You can have ${REQUEST_RULES.maxOpenPerUser} open requests at the same time`);
    }
    const created = await firstRow<{ id: number }>(
      tx,
      sql`INSERT INTO "ModRequest" ("authorId", "title", "bodyMd", "bodyHtml", "createdAt", "updatedAt")
          VALUES (${member.id}, ${title}, ${body?.md ?? ''}, ${body?.html ?? null}, ${now}, ${now})
          RETURNING "id"`,
    );
    if (!created) throw new Error('request insert returned no row');
    await ctx.jobs.emitNew(
      tx,
      'request.created',
      { requestId: created.id, authorId: member.id },
      { actorId: member.id },
    );
    return created.id;
  });
  return requestDtoById(ctx.db, config, id);
}

/** `PATCH /requests/:id`: the author edits until the request is fulfilled. */
export async function updateRequest(
  ctx: Ctx,
  config: CommunityConfig,
  id: number,
  input: UpdateRequestBody,
): Promise<RequestDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  const current = await loadStored(ctx.db, id);
  assertReachable(member, current);
  assertCan(member.subject, 'comment.edit', { ownerId: current.authorId }, now);
  if (!isEditableStatus(current.status)) throw errors.conflict('A fulfilled request cannot be edited');
  const title = input.title === undefined ? undefined : normaliseTitle(input.title);
  if (title !== undefined && (title.length < REQUEST_RULES.titleMin || title.length > REQUEST_RULES.titleMax)) {
    throw errors.validation('Invalid title', [
      { path: 'title', code: 'invalid', message: `${REQUEST_RULES.titleMin}-${REQUEST_RULES.titleMax} characters` },
    ]);
  }
  const body =
    input.bodyMd === undefined ? undefined : await renderBody(ctx.db, input.bodyMd, member.id, REQUEST_RULES.bodyMax);
  if (title === undefined && body === undefined) return requestDtoById(ctx.db, config, id);
  await ctx.db.transaction(async (tx) => {
    const locked = await loadStored(tx, id, true);
    if (!isEditableStatus(locked.status)) throw errors.conflict('A fulfilled request cannot be edited');
    await tx.execute(
      sql`UPDATE "ModRequest" SET
            "title" = ${title ?? sql`"title"`},
            "bodyMd" = ${body === undefined ? sql`"bodyMd"` : (body?.md ?? '')},
            "bodyHtml" = ${body === undefined ? sql`"bodyHtml"` : (body?.html ?? null)},
            "editedAt" = ${now}, "updatedAt" = ${now}
          WHERE "id" = ${id}`,
    );
    await ctx.jobs.emitNew(tx, 'request.changed', { requestId: id }, { actorId: member.id });
  });
  return requestDtoById(ctx.db, config, id);
}

/** `DELETE /requests/:id`: soft delete by the author or staff. Idempotent. */
export async function deleteRequest(ctx: Ctx, id: number): Promise<void> {
  const member = await loadMember(ctx);
  const found = await firstRow<StoredRequest>(
    ctx.db,
    sql`SELECT "id", "authorId", "status", "adoptedById", "hiddenAt", "deletedAt" FROM "ModRequest" WHERE "id" = ${id}`,
  );
  if (!found) throw errors.notFound('Request');
  assertCan(member.subject, 'comment.delete', { ownerId: found.authorId }, ctx.clock.now());
  if (found.deletedAt !== null) return;
  await ctx.db.transaction(async (tx) => {
    await tx.execute(
      sql`UPDATE "ModRequest" SET "deletedAt" = ${ctx.clock.now()}, "updatedAt" = ${ctx.clock.now()}
           WHERE "id" = ${id} AND "deletedAt" IS NULL`,
    );
    await ctx.jobs.emitNew(tx, 'request.changed', { requestId: id }, { actorId: member.id });
  });
}

/** `PUT|DELETE /requests/:id/vote`: one vote per member (idempotent). */
export async function voteRequest(
  ctx: Ctx,
  id: number,
  on: boolean,
): Promise<{ requestId: number; voted: boolean; voteCount: number }> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  if (on) {
    assertCan(member.subject, 'comment.write', undefined, now);
    assertAdult(member, now);
  }
  const current = await loadStored(ctx.db, id);
  assertReachable(member, current);
  if (on) {
    if (current.authorId === member.id) throw errors.forbidden('You cannot vote for your own request');
    if (!isActiveStatus(current.status)) throw errors.conflict('This request no longer takes votes');
  }
  const voteCount = await ctx.db.transaction(async (tx) => {
    const locked = await loadStored(tx, id, true);
    if (on && !isActiveStatus(locked.status)) throw errors.conflict('This request no longer takes votes');
    const changed = on
      ? await rows(
          tx,
          sql`INSERT INTO "ModRequestVote" ("requestId", "userId", "createdAt") VALUES (${id}, ${member.id}, ${now})
              ON CONFLICT DO NOTHING RETURNING "userId"`,
        )
      : await rows(
          tx,
          sql`DELETE FROM "ModRequestVote" WHERE "requestId" = ${id} AND "userId" = ${member.id} RETURNING "userId"`,
        );
    const count = await refreshVotes(tx, id);
    if (changed.length > 0) await ctx.jobs.emitNew(tx, 'request.changed', { requestId: id }, { actorId: member.id });
    return count;
  });
  return { requestId: id, voted: on, voteCount };
}

/** `PUT /requests/:id/adopt`: a creator says "I am working on it". */
export async function adoptRequest(ctx: Ctx, config: CommunityConfig, id: number): Promise<RequestDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  assertCan(member.subject, 'comment.write', undefined, now);
  assertAdult(member, now);
  if (!(await isCreator(ctx.db, member))) {
    throw errors.forbidden('Only creators (verified creators or authors of a published mod) can adopt a request');
  }
  assertReachable(member, await loadStored(ctx.db, id));
  await ctx.db.transaction(async (tx) => {
    const locked = await loadStored(tx, id, true);
    if (locked.status === 'adopted' && locked.adoptedById === member.id) return;
    if (locked.status !== 'open') throw errors.conflict('This request cannot be adopted now');
    await tx.execute(
      sql`UPDATE "ModRequest" SET "status" = 'adopted', "adoptedById" = ${member.id}, "adoptedAt" = ${now},
                 "updatedAt" = ${now} WHERE "id" = ${id}`,
    );
    await ctx.jobs.emitNew(
      tx,
      'request.adopted',
      { requestId: id, requestAuthorId: locked.authorId, adopterId: member.id },
      { actorId: member.id },
    );
  });
  return requestDtoById(ctx.db, config, id);
}

/** `DELETE /requests/:id/adopt`: the adopter (or staff) gives the request back. */
export async function releaseRequest(ctx: Ctx, config: CommunityConfig, id: number): Promise<RequestDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  await ctx.db.transaction(async (tx) => {
    const locked = await loadStored(tx, id, true);
    if (locked.status !== 'adopted') throw errors.conflict('This request is not adopted');
    if (locked.adoptedById !== member.id && !isStaffRole(member.role)) {
      throw errors.forbidden('Only the creator who adopted it can give it back');
    }
    await tx.execute(
      sql`UPDATE "ModRequest" SET "status" = 'open', "adoptedById" = NULL, "adoptedAt" = NULL, "updatedAt" = ${now}
           WHERE "id" = ${id}`,
    );
    await ctx.jobs.emitNew(tx, 'request.changed', { requestId: id }, { actorId: member.id });
  });
  return requestDtoById(ctx.db, config, id);
}

/** `PUT /requests/:id/fulfill`: links a published mod of the caller; tells the author and the voters. */
export async function fulfillRequest(
  ctx: Ctx,
  config: CommunityConfig,
  id: number,
  input: FulfillRequestBody,
): Promise<RequestDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  assertCan(member.subject, 'comment.write', undefined, now);
  const mod = await firstRow<{ userId: number | null; status: string }>(
    ctx.db,
    sql`SELECT "userId", "status" FROM "Mod" WHERE "id" = ${input.modId}`,
  );
  if (!mod) throw errors.notFound('Mod');
  if (mod.userId !== member.id) throw errors.forbidden('This is not your mod');
  if (mod.status !== 'published') throw errors.conflict('Publish the mod before linking it to a request');
  assertReachable(member, await loadStored(ctx.db, id));
  await ctx.db.transaction(async (tx) => {
    const locked = await loadStored(tx, id, true);
    if (!isActiveStatus(locked.status)) throw errors.conflict('This request cannot be fulfilled now');
    if (locked.adoptedById !== null && locked.adoptedById !== member.id) {
      throw errors.conflict('Another creator is working on this request');
    }
    const voters = await rows<{ userId: number }>(
      tx,
      sql`SELECT "userId" FROM "ModRequestVote" WHERE "requestId" = ${id} ORDER BY "createdAt" LIMIT 200`,
    );
    await tx.execute(
      sql`UPDATE "ModRequest" SET "status" = 'fulfilled', "fulfilledModId" = ${input.modId},
                 "fulfilledById" = ${member.id}, "fulfilledAt" = ${now},
                 "adoptedById" = coalesce("adoptedById", ${member.id}), "adoptedAt" = coalesce("adoptedAt", ${now}),
                 "updatedAt" = ${now}
           WHERE "id" = ${id}`,
    );
    await ctx.jobs.emitNew(
      tx,
      'request.fulfilled',
      {
        requestId: id,
        modId: input.modId,
        requestAuthorId: locked.authorId,
        fulfillerId: member.id,
        voterIds: voters.map((v) => v.userId),
      },
      { actorId: member.id },
    );
  });
  return requestDtoById(ctx.db, config, id);
}

/** `POST /requests/:id/close` and `POST /requests/:id/reopen` (author or staff). */
export async function setRequestClosed(
  ctx: Ctx,
  config: CommunityConfig,
  id: number,
  closed: boolean,
): Promise<RequestDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  const current = await loadStored(ctx.db, id);
  assertReachable(member, current);
  assertCan(member.subject, 'comment.delete', { ownerId: current.authorId }, now);
  await ctx.db.transaction(async (tx) => {
    const locked = await loadStored(tx, id, true);
    if (closed) {
      if (!isActiveStatus(locked.status)) throw errors.conflict('Only open requests can be closed');
      await tx.execute(
        sql`UPDATE "ModRequest" SET "status" = 'closed', "closedAt" = ${now}, "adoptedById" = NULL, "adoptedAt" = NULL,
                   "updatedAt" = ${now} WHERE "id" = ${id}`,
      );
    } else {
      if (locked.status !== 'closed') throw errors.conflict('This request is not closed');
      await tx.execute(
        sql`UPDATE "ModRequest" SET "status" = 'open', "closedAt" = NULL, "updatedAt" = ${now} WHERE "id" = ${id}`,
      );
    }
    await ctx.jobs.emitNew(tx, 'request.changed', { requestId: id }, { actorId: member.id });
  });
  return requestDtoById(ctx.db, config, id);
}

/** `POST /requests/:id/comments`. */
export async function createRequestComment(
  ctx: Ctx,
  config: CommunityConfig,
  requestId: number,
  bodyMd: string,
): Promise<RequestCommentDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  assertCan(member.subject, 'comment.write', undefined, now);
  assertAdult(member, now);
  const current = await loadStored(ctx.db, requestId);
  assertReachable(member, current);
  if (current.status === 'closed') throw errors.conflict('This request is closed');
  const body = await renderBody(ctx.db, bodyMd, member.id, REQUEST_RULES.commentMax);
  if (!body) throw errors.validation('Write something', [{ path: 'bodyMd', code: 'too_small', message: 'required' }]);
  const id = await ctx.db.transaction(async (tx) => {
    const locked = await loadStored(tx, requestId, true);
    if (locked.status === 'closed') throw errors.conflict('This request is closed');
    const created = await firstRow<{ id: number }>(
      tx,
      sql`INSERT INTO "ModRequestComment" ("requestId", "authorId", "bodyMd", "bodyHtml", "createdAt")
          VALUES (${requestId}, ${member.id}, ${body.md}, ${body.html}, ${now}) RETURNING "id"`,
    );
    if (!created) throw new Error('comment insert returned no row');
    await refreshRequestCommentCount(tx, requestId);
    await ctx.jobs.emitNew(
      tx,
      'request.commented',
      {
        requestId,
        commentId: created.id,
        requestAuthorId: locked.authorId,
        adopterId: locked.adoptedById,
        authorId: member.id,
      },
      { actorId: member.id },
    );
    return created.id;
  });
  return requestCommentById(ctx.db, config, id);
}

async function loadStoredComment(db: Ctx['db'] | Transaction, id: number, lock = false) {
  const row = await firstRow<{ id: number; requestId: number; authorId: number | null; status: string }>(
    db,
    sql`SELECT "id", "requestId", "authorId", "status" FROM "ModRequestComment" WHERE "id" = ${id}${lock ? sql` FOR UPDATE` : sql``}`,
  );
  if (!row) throw errors.notFound('Comment');
  return row;
}

/** `PATCH /request-comments/:id`. */
export async function updateRequestComment(
  ctx: Ctx,
  config: CommunityConfig,
  id: number,
  bodyMd: string,
): Promise<RequestCommentDTO> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  const current = await loadStoredComment(ctx.db, id);
  if (current.status === 'deleted') throw errors.notFound('Comment');
  assertCan(member.subject, 'comment.edit', { ownerId: current.authorId }, now);
  const body = await renderBody(ctx.db, bodyMd, member.id, REQUEST_RULES.commentMax);
  if (!body) throw errors.validation('Write something', [{ path: 'bodyMd', code: 'too_small', message: 'required' }]);
  await ctx.db.transaction(async (tx) => {
    const locked = await loadStoredComment(tx, id, true);
    if (locked.status === 'deleted') throw errors.notFound('Comment');
    await tx.execute(
      sql`UPDATE "ModRequestComment" SET "bodyMd" = ${body.md}, "bodyHtml" = ${body.html}, "editedAt" = ${now}
           WHERE "id" = ${id}`,
    );
    await ctx.jobs.emitNew(tx, 'request.changed', { requestId: current.requestId }, { actorId: member.id });
  });
  return requestCommentById(ctx.db, config, id);
}

/** `DELETE /request-comments/:id`: soft delete by the author or staff. Idempotent. */
export async function deleteRequestComment(ctx: Ctx, id: number): Promise<void> {
  const member = await loadMember(ctx);
  const now = ctx.clock.now();
  const current = await loadStoredComment(ctx.db, id);
  assertCan(member.subject, 'comment.delete', { ownerId: current.authorId }, now);
  if (current.status === 'deleted') return;
  await ctx.db.transaction(async (tx) => {
    const locked = await loadStoredComment(tx, id, true);
    if (locked.status === 'deleted') return;
    await tx.execute(sql`UPDATE "ModRequestComment" SET "status" = 'deleted', "deletedAt" = ${now} WHERE "id" = ${id}`);
    await refreshRequestCommentCount(tx, current.requestId);
    await ctx.jobs.emitNew(tx, 'request.changed', { requestId: current.requestId }, { actorId: member.id });
  });
}
