/**
 * Mod request board (T2). Implemented by WP-RR on the `ModRequest`, `ModRequestVote` and
 * `ModRequestComment` tables (migration 2171).
 *
 * Any member with a verified email (account ≥ 24 h) asks for a mod; everybody with a verified
 * email votes (one vote per user, never on their own request) and comments. A creator (verified
 * creator or a user with a published mod) *adopts* a request ("I am working on it") and, once the
 * mod is published, links it: the request becomes `fulfilled` and points at the mod. The author
 * or a moderator can close a request. Requests and comments can be reported and hidden.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { Count, EntityId, IdParam, IsoDateTime, ModRefDTO, UserRefDTO } from './common.ts';
import { dto, wireIntDefault } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';
import { CursorQuery, cursorPageOf, pageOf } from './pagination.ts';

export const REQUEST_RULES = {
  titleMin: 8,
  titleMax: 140,
  bodyMax: 4000,
  commentMax: 2000,
  minAccountAgeHours: 24,
  /** Open requests one member may have at the same time. */
  maxOpenPerUser: 10,
  /** Requests a member may create per day (also the `requests` rate-limit bucket). */
  perDay: 5,
} as const;

export const REQUEST_STATUSES = ['open', 'adopted', 'fulfilled', 'closed'] as const;
export const RequestStatus = z.enum(REQUEST_STATUSES);
export type RequestStatus = z.infer<typeof RequestStatus>;

export const REQUEST_LIST_STATUSES = ['all', ...REQUEST_STATUSES] as const;
export const RequestListStatus = z.enum(REQUEST_LIST_STATUSES);
export type RequestListStatus = z.infer<typeof RequestListStatus>;

export const REQUEST_SORTS = ['top', 'new'] as const;
export const RequestSort = z.enum(REQUEST_SORTS);
export type RequestSort = z.infer<typeof RequestSort>;

export const RequestCommentStatus = z.enum(['visible', 'hidden', 'deleted']);

export const RequestDTO = dto(
  'RequestDTO',
  z.object({
    id: EntityId,
    title: z.string().min(1).max(REQUEST_RULES.titleMax),
    bodyHtml: z.string().nullable().describe('Sanitised markdown-lite'),
    author: UserRefDTO.nullable().describe('null = deleted account'),
    status: RequestStatus,
    voteCount: Count,
    commentCount: Count,
    adopter: UserRefDTO.nullable().describe('Creator working on it'),
    adoptedAt: IsoDateTime.nullable(),
    mod: ModRefDTO.nullable().describe('The published mod, once fulfilled'),
    fulfilledAt: IsoDateTime.nullable(),
    createdAt: IsoDateTime,
    editedAt: IsoDateTime.nullable(),
    closedAt: IsoDateTime.nullable(),
  }),
  {
    description: 'A request for a mod on the request board.',
    examples: [
      {
        id: 31,
        title: 'A ziplines network overlay that shows stamina and distance',
        bodyHtml: '<p>Would love an in-game overlay for <strong>zipline</strong> distance.</p>',
        author: {
          id: 301,
          handle: 'cooklog',
          displayName: 'Cook Log',
          avatarUrl: null,
          verifiedCreator: false,
          role: 'user',
          creatorTier: null,
          survivorRank: 'forager',
        },
        status: 'adopted',
        voteCount: 42,
        commentCount: 6,
        adopter: {
          id: 12,
          handle: 'imaxel',
          displayName: 'ImAxel',
          avatarUrl: null,
          verifiedCreator: true,
          role: 'user',
          creatorTier: 'fortress',
          survivorRank: 'veteran',
        },
        adoptedAt: '2026-09-29T10:00:00.000Z',
        mod: null,
        fulfilledAt: null,
        createdAt: '2026-09-27T20:00:00.000Z',
        editedAt: null,
        closedAt: null,
      },
    ],
  },
);
export type RequestDTO = z.infer<typeof RequestDTO>;

export const RequestPageDTO = pageOf('RequestPageDTO', RequestDTO, 'Page of mod requests.');

export const RequestCommentDTO = dto(
  'RequestCommentDTO',
  z.object({
    id: EntityId,
    requestId: EntityId,
    bodyHtml: z.string(),
    author: UserRefDTO.nullable(),
    isAdopter: z.boolean().describe('Written by the creator who adopted the request'),
    isRequestAuthor: z.boolean(),
    status: RequestCommentStatus.describe('Public lists only contain `visible`'),
    createdAt: IsoDateTime,
    editedAt: IsoDateTime.nullable(),
  }),
  {
    description: 'A comment on a mod request.',
    examples: [
      {
        id: 210,
        requestId: 31,
        bodyHtml: '<p>I can take this one.</p>',
        author: null,
        isAdopter: true,
        isRequestAuthor: false,
        status: 'visible',
        createdAt: '2026-09-29T10:05:00.000Z',
        editedAt: null,
      },
    ],
  },
);
export type RequestCommentDTO = z.infer<typeof RequestCommentDTO>;

export const RequestCommentPageDTO = cursorPageOf(
  'RequestCommentPageDTO',
  RequestCommentDTO,
  'Cursor page of the comments of a request (oldest first).',
);

export const RequestVoteDTO = dto(
  'RequestVoteDTO',
  z.object({ requestId: EntityId, voted: z.boolean(), voteCount: Count }),
  { description: 'Result of a vote change.', examples: [{ requestId: 31, voted: true, voteCount: 43 }] },
);

export const MyRequestVotesDTO = dto(
  'MyRequestVotesDTO',
  z.object({ requestIds: z.array(EntityId).max(1000).describe('Requests the signed-in user voted for') }),
  { description: 'Votes of the signed-in user.', examples: [{ requestIds: [31, 12] }] },
);

const Title = z.string().trim().min(REQUEST_RULES.titleMin).max(REQUEST_RULES.titleMax);
const Body = z.string().max(REQUEST_RULES.bodyMax);

export const CreateRequestBody = dto('CreateRequestBody', z.strictObject({ title: Title, bodyMd: Body.optional() }), {
  description: 'New mod request (verified email, account ≥ 24 h).',
  examples: [
    { title: 'A ziplines network overlay with distance', bodyMd: 'An overlay with **distance** and stamina.' },
  ],
});

export const UpdateRequestBody = dto(
  'UpdateRequestBody',
  z.strictObject({ title: Title.optional(), bodyMd: Body.nullable().optional() }),
  { description: 'Edit an own request (while it is not fulfilled).', examples: [{ title: 'A zipline overlay mod' }] },
);

export const FulfillRequestBody = dto('FulfillRequestBody', z.strictObject({ modId: EntityId }), {
  description: 'Links the published mod that fulfils a request (a mod of the caller).',
  examples: [{ modId: 20 }],
});

export const RequestCommentBody = dto(
  'RequestCommentBody',
  z.strictObject({ bodyMd: z.string().trim().min(1).max(REQUEST_RULES.commentMax) }),
  { description: 'Comment on a request.', examples: [{ bodyMd: 'I can take this one.' }] },
);

export const RequestListQuery = z.object({
  status: RequestListStatus.default('open'),
  sort: RequestSort.default('top'),
  page: wireIntDefault(1, { min: 1, max: 10_000, description: '1-based page number' }),
  pageSize: wireIntDefault(20, { min: 1, max: 50, description: 'Items per page' }),
});
export type RequestListQuery = z.output<typeof RequestListQuery>;

export const RequestCommentsQuery = CursorQuery;

const base = API_V2_PREFIX;

export const requestsEndpoints = {
  list: defineEndpoint({
    id: 'requests.list',
    owner: 'WP-RR',
    method: 'GET',
    path: `${base}/requests`,
    summary: 'Mod requests (top voted or newest)',
    auth: 'public',
    query: RequestListQuery,
    response: RequestPageDTO,
    cache: cache.publicApi(['list:requests']),
    rateLimit: 'anonymousRead',
  }),
  get: defineEndpoint({
    id: 'requests.get',
    owner: 'WP-RR',
    method: 'GET',
    path: `${base}/requests/:id`,
    summary: 'A mod request',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: RequestDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['request:{id}']),
    rateLimit: 'anonymousRead',
  }),
  comments: defineEndpoint({
    id: 'requests.comments',
    owner: 'WP-RR',
    method: 'GET',
    path: `${base}/requests/:id/comments`,
    summary: 'Comments of a request, oldest first',
    auth: 'public',
    params: z.object({ id: IdParam }),
    query: RequestCommentsQuery,
    response: RequestCommentPageDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['request:{id}']),
    rateLimit: 'anonymousRead',
  }),
  myVotes: defineEndpoint({
    id: 'requests.myVotes',
    owner: 'WP-RR',
    method: 'GET',
    path: `${base}/me/request-votes`,
    summary: 'Requests the signed-in user voted for',
    auth: 'session',
    response: MyRequestVotesDTO,
    cache: cache.private,
  }),
  create: defineEndpoint({
    id: 'requests.create',
    owner: 'WP-RR',
    method: 'POST',
    path: `${base}/requests`,
    summary: 'Ask for a mod',
    auth: 'verified',
    requires: ['account_age_24h'],
    body: CreateRequestBody,
    status: 201,
    response: RequestDTO,
    errors: ['CONFLICT', 'FORBIDDEN', 'EMAIL_NOT_VERIFIED'],
    cache: cache.noStore,
    rateLimit: 'requests',
  }),
  update: defineEndpoint({
    id: 'requests.update',
    owner: 'WP-RR',
    method: 'PATCH',
    path: `${base}/requests/:id`,
    summary: 'Edit an own request',
    auth: 'verified',
    params: z.object({ id: IdParam }),
    body: UpdateRequestBody,
    response: RequestDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  delete: defineEndpoint({
    id: 'requests.delete',
    owner: 'WP-RR',
    method: 'DELETE',
    path: `${base}/requests/:id`,
    summary: 'Delete an own request (soft delete)',
    auth: 'session',
    params: z.object({ id: IdParam }),
    responseKind: 'empty',
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
  }),
  vote: defineEndpoint({
    id: 'requests.vote',
    owner: 'WP-RR',
    method: 'PUT',
    path: `${base}/requests/:id/vote`,
    summary: 'Vote for a request',
    auth: 'verified',
    params: z.object({ id: IdParam }),
    response: RequestVoteDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  unvote: defineEndpoint({
    id: 'requests.unvote',
    owner: 'WP-RR',
    method: 'DELETE',
    path: `${base}/requests/:id/vote`,
    summary: 'Remove your vote',
    auth: 'verified',
    params: z.object({ id: IdParam }),
    response: RequestVoteDTO,
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  adopt: defineEndpoint({
    id: 'requests.adopt',
    owner: 'WP-RR',
    method: 'PUT',
    path: `${base}/requests/:id/adopt`,
    summary: 'Adopt a request (creators: "I am working on it")',
    auth: 'verified',
    params: z.object({ id: IdParam }),
    response: RequestDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  release: defineEndpoint({
    id: 'requests.release',
    owner: 'WP-RR',
    method: 'DELETE',
    path: `${base}/requests/:id/adopt`,
    summary: 'Give an adopted request back (the adopter or staff)',
    auth: 'session',
    params: z.object({ id: IdParam }),
    response: RequestDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  fulfill: defineEndpoint({
    id: 'requests.fulfill',
    owner: 'WP-RR',
    method: 'PUT',
    path: `${base}/requests/:id/fulfill`,
    summary: 'Link the published mod that fulfils the request',
    auth: 'verified',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam }),
    body: FulfillRequestBody,
    response: RequestDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  close: defineEndpoint({
    id: 'requests.close',
    owner: 'WP-RR',
    method: 'POST',
    path: `${base}/requests/:id/close`,
    summary: 'Close a request (author or staff)',
    auth: 'session',
    params: z.object({ id: IdParam }),
    response: RequestDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  reopen: defineEndpoint({
    id: 'requests.reopen',
    owner: 'WP-RR',
    method: 'POST',
    path: `${base}/requests/:id/reopen`,
    summary: 'Reopen a closed request (author or staff)',
    auth: 'session',
    params: z.object({ id: IdParam }),
    response: RequestDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  createComment: defineEndpoint({
    id: 'requests.createComment',
    owner: 'WP-RR',
    method: 'POST',
    path: `${base}/requests/:id/comments`,
    summary: 'Comment on a request',
    auth: 'verified',
    params: z.object({ id: IdParam }),
    body: RequestCommentBody,
    status: 201,
    response: RequestCommentDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'EMAIL_NOT_VERIFIED'],
    cache: cache.noStore,
    rateLimit: 'comments',
  }),
  updateComment: defineEndpoint({
    id: 'requests.updateComment',
    owner: 'WP-RR',
    method: 'PATCH',
    path: `${base}/request-comments/:id`,
    summary: 'Edit an own comment',
    auth: 'verified',
    params: z.object({ id: IdParam }),
    body: RequestCommentBody,
    response: RequestCommentDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'comments',
  }),
  deleteComment: defineEndpoint({
    id: 'requests.deleteComment',
    owner: 'WP-RR',
    method: 'DELETE',
    path: `${base}/request-comments/:id`,
    summary: 'Delete an own comment (soft delete; staff may delete any)',
    auth: 'session',
    params: z.object({ id: IdParam }),
    responseKind: 'empty',
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
  }),
} as const;

export type MyRequestVotesDTO = z.infer<typeof MyRequestVotesDTO>;
export type CreateRequestBody = z.infer<typeof CreateRequestBody>;
export type UpdateRequestBody = z.infer<typeof UpdateRequestBody>;
export type FulfillRequestBody = z.infer<typeof FulfillRequestBody>;
