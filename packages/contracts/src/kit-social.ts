/**
 * Kits, social layer (Kits T1-24, PLAN §7.8): follow a kit (signals when it changes, live follower
 * counts over SSE) and the comment thread of a kit. Comments reuse the `lite` markdown profile of
 * mod comments (PLAN §7.6) in their own table (`KitComment`): the legacy `Comment` table is bound
 * to a mod.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { Count, EntityId, IdParam, IsoDateTime, UserRefDTO } from './common.ts';
import { dto, exampleOf, wireList } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';
import { FollowBody } from './follows.ts';
import { KitCardDTO } from './kits.ts';
import { Cursor, CursorQuery } from './pagination.ts';

export const KIT_COMMENT_RULES = { bodyMax: 2000, repliesMax: 100 } as const;

export const KIT_COMMENT_STATUSES = ['visible', 'hidden', 'deleted'] as const;

export const KitFollowStateDTO = dto(
  'KitFollowStateDTO',
  z.object({ following: z.boolean(), notify: z.boolean(), followers: Count }),
  {
    description: 'Follow state of a kit after the change, with the new follower count.',
    examples: [{ following: true, notify: true, followers: 31 }],
  },
);
export type KitFollowStateDTO = z.infer<typeof KitFollowStateDTO>;

export const KitFollowItemDTO = dto(
  'KitFollowItemDTO',
  z.object({ kit: KitCardDTO, notify: z.boolean(), followedAt: IsoDateTime }),
  {
    description: 'A followed kit.',
    examples: [{ kit: exampleOf(KitCardDTO), notify: true, followedAt: '2026-09-21T09:30:00.000Z' }],
  },
);

export const KitFollowListDTO = dto('KitFollowListDTO', z.object({ items: z.array(KitFollowItemDTO) }), {
  description: 'Kits followed by the signed-in user, most recently followed first.',
  examples: [{ items: [exampleOf(KitFollowItemDTO)] }],
});
export type KitFollowListDTO = z.infer<typeof KitFollowListDTO>;

export const KitFollowLookupDTO = dto('KitFollowLookupDTO', z.object({ kits: z.array(EntityId) }), {
  description: 'Which of the requested kits the viewer follows.',
  examples: [{ kits: [5] }],
});
export type KitFollowLookupDTO = z.infer<typeof KitFollowLookupDTO>;

export const KitFollowLookupQuery = z.object({
  kit: wireList(z.string().regex(/^\d{1,12}$/), { max: 100, description: 'Kit ids' }),
});

const replyFields = {
  id: EntityId,
  kitId: EntityId,
  parentId: EntityId.nullable(),
  bodyHtml: z.string().describe('Sanitised markdown-lite; empty for deleted comments'),
  author: UserRefDTO.nullable().describe('null = deleted account'),
  isKitOwner: z.boolean().describe('The author curates the kit'),
  status: z.enum(KIT_COMMENT_STATUSES),
  createdAt: IsoDateTime,
  editedAt: IsoDateTime.nullable(),
};

export const KitReplyDTO = dto('KitReplyDTO', z.object(replyFields), {
  description: 'A reply to a kit comment.',
  examples: [
    {
      id: 82,
      kitId: 5,
      parentId: 81,
      bodyHtml: '<p>Thanks, added it in rev 8.</p>',
      author: exampleOf(UserRefDTO),
      isKitOwner: true,
      status: 'visible',
      createdAt: '2026-09-22T10:00:00.000Z',
      editedAt: null,
    },
  ],
});
export type KitReplyDTO = z.infer<typeof KitReplyDTO>;

export const KitCommentDTO = dto(
  'KitCommentDTO',
  z.object({ ...replyFields, replies: z.array(KitReplyDTO).max(KIT_COMMENT_RULES.repliesMax) }),
  {
    description: 'A top-level kit comment with its replies (oldest first).',
    examples: [
      {
        id: 81,
        kitId: 5,
        parentId: null,
        bodyHtml: '<p>Does this work with the latest patch?</p>',
        author: exampleOf(UserRefDTO),
        isKitOwner: false,
        status: 'visible',
        createdAt: '2026-09-22T09:00:00.000Z',
        editedAt: null,
        replies: [exampleOf(KitReplyDTO)],
      },
    ],
  },
);
export type KitCommentDTO = z.infer<typeof KitCommentDTO>;

export const KitCommentPageDTO = dto(
  'KitCommentPageDTO',
  z.object({ items: z.array(KitCommentDTO), nextCursor: Cursor.nullable(), total: Count }),
  {
    description: 'Page of kit comments (newest first) with the number of visible comments and replies.',
    examples: [{ items: [exampleOf(KitCommentDTO)], nextCursor: null, total: 2 }],
  },
);
export type KitCommentPageDTO = z.infer<typeof KitCommentPageDTO>;

export const CreateKitCommentBody = dto(
  'CreateKitCommentBody',
  z.strictObject({
    bodyMd: z.string().min(1).max(KIT_COMMENT_RULES.bodyMax),
    parentId: EntityId.optional().describe('Reply to this top-level comment'),
  }),
  { description: 'New kit comment or reply.', examples: [{ bodyMd: 'Great loadout for co-op!' }] },
);

export const UpdateKitCommentBody = dto(
  'UpdateKitCommentBody',
  z.strictObject({ bodyMd: z.string().min(1).max(KIT_COMMENT_RULES.bodyMax) }),
  { description: 'Edit own kit comment.', examples: [{ bodyMd: 'Great loadout for co-op! (edited)' }] },
);

export const KitCommentSourceDTO = dto('KitCommentSourceDTO', z.object({ bodyMd: z.string() }), {
  description: 'Markdown source of the viewer’s own kit comment (for the editor).',
  examples: [{ bodyMd: 'Great loadout for co-op!' }],
});

/** Live counters of a kit, pushed to `kit:{id}` and sent on connect by the public stream. */
export const SseKitLiveData = z.object({ kitId: EntityId, followers: Count, comments: Count });
export const SseKitLiveEventDTO = dto(
  'SseKitLiveEventDTO',
  z.object({ event: z.literal('kit.live'), id: z.string(), data: SseKitLiveData }),
  {
    description: 'Live counters of the public kit stream: sent on connect and on every follow or comment change.',
    examples: [{ event: 'kit.live', id: '1', data: { kitId: 5, followers: 31, comments: 4 } }],
  },
);
export type SseKitLiveEvent = z.infer<typeof SseKitLiveEventDTO>;
/** A public kit stream is closed after this long; the client's EventSource reconnects. */
export const SSE_KIT_LIVE_MAX_SECONDS = 600;

/** Encodes a `kit.live` frame. */
export function encodeKitLiveFrame(event: SseKitLiveEvent): string {
  return `id: ${event.id}\nevent: ${event.event}\ndata: ${JSON.stringify(event.data)}\n\n`;
}

const base = `${API_V2_PREFIX}/kits`;

export const kitSocialEndpoints = {
  follow: defineEndpoint({
    id: 'kitSocial.follow',
    owner: 'WP-42',
    method: 'PUT',
    path: `${base}/:id/follow`,
    summary: 'Follow a kit (signals when it changes)',
    auth: 'session',
    params: z.object({ id: IdParam }),
    body: FollowBody,
    response: KitFollowStateDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  unfollow: defineEndpoint({
    id: 'kitSocial.unfollow',
    owner: 'WP-42',
    method: 'DELETE',
    path: `${base}/:id/follow`,
    summary: 'Unfollow a kit',
    auth: 'session',
    params: z.object({ id: IdParam }),
    response: KitFollowStateDTO,
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  myFollows: defineEndpoint({
    id: 'kitSocial.myFollows',
    owner: 'WP-42',
    method: 'GET',
    path: `${API_V2_PREFIX}/me/kit-follows`,
    summary: 'Kits I follow',
    auth: 'session',
    response: KitFollowListDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  lookup: defineEndpoint({
    id: 'kitSocial.lookup',
    owner: 'WP-42',
    method: 'GET',
    path: `${API_V2_PREFIX}/me/kit-follows/lookup`,
    summary: 'Follow state of several kits (for the follow buttons of cached pages)',
    auth: 'session',
    query: KitFollowLookupQuery,
    response: KitFollowLookupDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  liveStream: defineEndpoint({
    id: 'kitSocial.liveStream',
    owner: 'WP-20',
    method: 'GET',
    path: `${base}/:id/live/stream`,
    summary: 'Live follower and comment counts of a kit over server-sent events',
    description:
      'Public, cookieless stream of `kit.live` events for one public or unlisted kit. Sent on connect and pushed whenever the followers or comments of the kit change; the stream is recycled every 10 min.',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: SseKitLiveEventDTO,
    responseKind: 'event-stream',
    errors: ['NOT_FOUND', 'RATE_LIMITED'],
    cache: cache.noStore,
  }),
  listComments: defineEndpoint({
    id: 'kitSocial.listComments',
    owner: 'WP-41',
    method: 'GET',
    path: `${base}/:id/comments`,
    summary: 'Comments of a kit (newest first, replies embedded)',
    auth: 'public',
    params: z.object({ id: IdParam }),
    query: CursorQuery,
    response: KitCommentPageDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['kit:{id}']),
    rateLimit: 'anonymousRead',
  }),
  createComment: defineEndpoint({
    id: 'kitSocial.createComment',
    owner: 'WP-41',
    method: 'POST',
    path: `${base}/:id/comments`,
    summary: 'Comment on a kit or reply to a comment',
    auth: 'verified',
    params: z.object({ id: IdParam }),
    body: CreateKitCommentBody,
    status: 201,
    response: KitCommentDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'EMAIL_NOT_VERIFIED', 'SUSPENDED'],
    cache: cache.noStore,
    rateLimit: 'comments',
  }),
  updateComment: defineEndpoint({
    id: 'kitSocial.updateComment',
    owner: 'WP-41',
    method: 'PATCH',
    path: `${API_V2_PREFIX}/kit-comments/:id`,
    summary: 'Edit my kit comment',
    auth: 'verified',
    params: z.object({ id: IdParam }),
    body: UpdateKitCommentBody,
    response: KitCommentDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'SUSPENDED'],
    cache: cache.noStore,
    rateLimit: 'comments',
  }),
  deleteComment: defineEndpoint({
    id: 'kitSocial.deleteComment',
    owner: 'WP-41',
    method: 'DELETE',
    path: `${API_V2_PREFIX}/kit-comments/:id`,
    summary: 'Delete a kit comment (author, kit owner or moderator)',
    auth: 'session',
    params: z.object({ id: IdParam }),
    responseKind: 'empty',
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  commentSource: defineEndpoint({
    id: 'kitSocial.commentSource',
    owner: 'WP-41',
    method: 'GET',
    path: `${API_V2_PREFIX}/kit-comments/:id/source`,
    summary: 'Markdown source of my kit comment',
    auth: 'session',
    params: z.object({ id: IdParam }),
    response: KitCommentSourceDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.private,
  }),
} as const;
