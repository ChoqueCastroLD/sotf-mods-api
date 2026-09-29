/**
 * Comments v2 (PLAN §7.6, T0-12). Implemented by WP-41 (+ WP-70 islands).
 *
 * Full Unicode (NFC), markdown-lite (bold, italic, code, links with `rel="ugc nofollow noopener"`,
 * lists, quotes, `||spoilers||`; no headings), 2000 characters. Threads: comment → replies (the UI
 * shows 2 levels). Reactions 👍 ❤️ 😂 🎉 🙏 🔥, one per kind and user.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { Count, EntityId, IdParam, ImageDTO, IsoDateTime, UserRefDTO, Uuid, VersionString } from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';
import { CursorQuery, cursorPageOf } from './pagination.ts';

export const COMMENT_RULES = { bodyMax: 2000, imagesMax: 2, pinsMax: 3, previewMax: 20_000 } as const;

export const REACTION_KINDS = ['thumbs_up', 'heart', 'laugh', 'party', 'pray', 'fire'] as const;
export const ReactionKind = z.enum(REACTION_KINDS);
export type ReactionKind = z.infer<typeof ReactionKind>;

/** Emoji of each reaction kind (UI and emails). */
export const REACTION_EMOJI: Readonly<Record<ReactionKind, string>> = {
  thumbs_up: '👍',
  heart: '❤️',
  laugh: '😂',
  party: '🎉',
  pray: '🙏',
  fire: '🔥',
};

export const COMMENT_STATUSES = ['visible', 'hidden', 'pending', 'deleted'] as const;
export const CommentStatus = z.enum(COMMENT_STATUSES);

export const COMMENT_BADGES = ['author', 'ranger', 'verified'] as const;

const reactionCounts = z.object({
  thumbs_up: Count,
  heart: Count,
  laugh: Count,
  party: Count,
  pray: Count,
  fire: Count,
});

const commentFields = {
  id: EntityId,
  modId: EntityId,
  parentId: EntityId.nullable(),
  bodyHtml: z.string().describe('Sanitised markdown-lite; empty for deleted comments'),
  author: UserRefDTO.nullable().describe('null = deleted account'),
  badges: z.array(z.enum(COMMENT_BADGES)),
  isBugReport: z.boolean(),
  modVersion: z.object({ id: EntityId, version: VersionString }).nullable(),
  bugResolvedIn: z.object({ id: EntityId, version: VersionString }).nullable(),
  isSolution: z.boolean(),
  pinnedAt: IsoDateTime.nullable(),
  reactions: reactionCounts,
  images: z.array(ImageDTO).max(COMMENT_RULES.imagesMax),
  status: CommentStatus.describe('Public lists contain `visible`; authors and moderators also see their hidden ones'),
  hiddenReason: z.string().nullable(),
  createdAt: IsoDateTime,
  editedAt: IsoDateTime.nullable(),
};

const replyExample = {
  id: 222,
  modId: 20,
  parentId: 221,
  bodyHtml: '<p>Did you install <strong>SonsAxLib</strong>?</p>',
  author: {
    id: 12,
    handle: 'imaxel',
    displayName: 'ImAxel',
    avatarUrl: null,
    verifiedCreator: true,
    role: 'user' as const,
    creatorTier: 'fortress' as const,
    survivorRank: 'veteran' as const,
  },
  badges: ['author' as const, 'verified' as const],
  isBugReport: false,
  modVersion: null,
  bugResolvedIn: null,
  isSolution: true,
  pinnedAt: null,
  reactions: { thumbs_up: 3, heart: 0, laugh: 0, party: 0, pray: 1, fire: 0 },
  images: [],
  status: 'visible' as const,
  hiddenReason: null,
  createdAt: '2026-05-07T15:02:00.000Z',
  editedAt: null,
};

export const CommentReplyDTO = dto('CommentReplyDTO', z.object(commentFields), {
  description: 'A reply (second level).',
  examples: [replyExample],
});

export const CommentDTO = dto(
  'CommentDTO',
  z.object({
    ...commentFields,
    repliesCount: Count,
    replies: z.array(CommentReplyDTO).describe('First replies (oldest first); load more via the permalink'),
  }),
  {
    description: 'A top-level comment with its first replies.',
    examples: [
      {
        ...replyExample,
        id: 221,
        parentId: null,
        bodyHtml: '<p>I installed it through RedManager and nothing activates.</p>',
        author: {
          id: 390,
          handle: 'euribeiiro',
          displayName: 'euribeiiro',
          avatarUrl: null,
          verifiedCreator: false,
          role: 'user',
          creatorTier: null,
          survivorRank: 'castaway',
        },
        badges: [],
        isBugReport: true,
        modVersion: { id: 412, version: '1.3.8' },
        isSolution: false,
        createdAt: '2026-05-07T14:45:18.805Z',
        repliesCount: 1,
        replies: [replyExample],
      },
    ],
  },
);
export type CommentDTO = z.infer<typeof CommentDTO>;

export const CommentPageDTO = cursorPageOf('CommentPageDTO', CommentDTO, 'Cursor page of top-level comments.');

export const CommentThreadDTO = dto(
  'CommentThreadDTO',
  z.object({ comment: CommentDTO, focusId: EntityId.describe('The requested comment (may be a reply)') }),
  {
    description: 'Permalink view: the top-level comment with all its replies.',
    examples: [{ comment: exampleOf(CommentDTO), focusId: 222 }],
  },
);

export const CreateCommentBody = dto(
  'CreateCommentBody',
  z.strictObject({
    bodyMd: z
      .string()
      .transform((value) => value.normalize('NFC'))
      .pipe(z.string().trim().min(1).max(COMMENT_RULES.bodyMax)),
    parentId: EntityId.optional(),
    isBugReport: z.boolean().default(false),
    modVersionId: EntityId.optional(),
    imageUploadIds: z.array(Uuid).max(COMMENT_RULES.imagesMax).default([]),
    turnstileToken: z.string().max(4096).optional().describe('Required for accounts younger than 24 h'),
  }),
  {
    description: 'New comment or reply (verified email).',
    examples: [
      { bodyMd: 'Crashes when riding a **zipline** with noclip on. @imaxel', isBugReport: true, modVersionId: 412 },
    ],
  },
);

export const UpdateCommentBody = dto(
  'UpdateCommentBody',
  z.strictObject({
    bodyMd: z
      .string()
      .transform((value) => value.normalize('NFC'))
      .pipe(z.string().trim().min(1).max(COMMENT_RULES.bodyMax)),
  }),
  {
    description: 'Edit an own comment (history visible to moderators).',
    examples: [{ bodyMd: 'Fixed after reinstalling SonsAxLib.' }],
  },
);

export const ReactionStateDTO = dto(
  'ReactionStateDTO',
  z.object({ commentId: EntityId, reactions: reactionCounts, mine: z.array(ReactionKind) }),
  {
    description: 'Reactions after the change.',
    examples: [
      {
        commentId: 221,
        reactions: { thumbs_up: 4, heart: 0, laugh: 0, party: 0, pray: 1, fire: 0 },
        mine: ['thumbs_up'],
      },
    ],
  },
);

export const ResolveBugBody = dto('ResolveBugBody', z.strictObject({ versionId: EntityId }), {
  description: 'Mark a bug report as resolved in a version.',
  examples: [{ versionId: 415 }],
});

export const MarkdownPreviewBody = dto(
  'MarkdownPreviewBody',
  z.strictObject({ md: z.string().max(COMMENT_RULES.previewMax), profile: z.enum(['lite', 'full']) }),
  {
    description: 'Render markdown with the server pipeline (same output as saving).',
    examples: [{ md: '**bold** ||spoiler||', profile: 'lite' }],
  },
);

export const MarkdownPreviewDTO = dto('MarkdownPreviewDTO', z.object({ html: z.string() }), {
  description: 'Sanitised HTML preview.',
  examples: [{ html: '<p><strong>bold</strong> <span class="spoiler">spoiler</span></p>' }],
});

export const CommentListQuery = CursorQuery.extend({ sort: z.enum(['top', 'new']).default('top') });

const base = API_V2_PREFIX;
const CommentIdParams = z.object({ id: IdParam });

export const commentsEndpoints = {
  list: defineEndpoint({
    id: 'comments.list',
    owner: 'WP-41',
    method: 'GET',
    path: `${base}/mods/:id/comments`,
    summary: 'Comments of a mod (Top = Wilson on positive reactions, or New)',
    auth: 'public',
    params: z.object({ id: IdParam }),
    query: CommentListQuery,
    response: CommentPageDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['mod:{id}']),
    rateLimit: 'anonymousRead',
  }),
  get: defineEndpoint({
    id: 'comments.get',
    owner: 'WP-41',
    method: 'GET',
    path: `${base}/comments/:id`,
    summary: 'Permalink with the whole thread',
    auth: 'public',
    params: CommentIdParams,
    response: CommentThreadDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['mod:{id}']),
    rateLimit: 'anonymousRead',
  }),
  create: defineEndpoint({
    id: 'comments.create',
    owner: 'WP-41',
    method: 'POST',
    path: `${base}/mods/:id/comments`,
    summary: 'Comment or reply',
    auth: 'verified',
    params: z.object({ id: IdParam }),
    body: CreateCommentBody,
    status: 201,
    response: CommentDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'EMAIL_NOT_VERIFIED', 'TURNSTILE_REQUIRED', 'SUSPENDED'],
    cache: cache.noStore,
    rateLimit: 'comments',
  }),
  update: defineEndpoint({
    id: 'comments.update',
    owner: 'WP-41',
    method: 'PATCH',
    path: `${base}/comments/:id`,
    summary: 'Edit an own comment',
    auth: 'verified',
    requires: ['comment_author'],
    params: CommentIdParams,
    body: UpdateCommentBody,
    response: CommentDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'comments',
  }),
  delete: defineEndpoint({
    id: 'comments.delete',
    owner: 'WP-41',
    method: 'DELETE',
    path: `${base}/comments/:id`,
    summary: 'Delete an own comment (soft: "Comment deleted" when it has replies)',
    auth: 'session',
    requires: ['comment_author'],
    params: CommentIdParams,
    responseKind: 'empty',
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
  }),
  react: defineEndpoint({
    id: 'comments.react',
    owner: 'WP-41',
    method: 'PUT',
    path: `${base}/comments/:id/reactions/:kind`,
    summary: 'Add a reaction',
    auth: 'verified',
    params: z.object({ id: IdParam, kind: ReactionKind }),
    response: ReactionStateDTO,
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  unreact: defineEndpoint({
    id: 'comments.unreact',
    owner: 'WP-41',
    method: 'DELETE',
    path: `${base}/comments/:id/reactions/:kind`,
    summary: 'Remove a reaction',
    auth: 'verified',
    params: z.object({ id: IdParam, kind: ReactionKind }),
    response: ReactionStateDTO,
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  pin: defineEndpoint({
    id: 'comments.pin',
    owner: 'WP-41',
    method: 'POST',
    path: `${base}/comments/:id/pin`,
    summary: 'Pin a comment (mod author; max 3)',
    auth: 'session',
    requires: ['mod_owner'],
    params: CommentIdParams,
    response: CommentDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT'],
    cache: cache.noStore,
  }),
  unpin: defineEndpoint({
    id: 'comments.unpin',
    owner: 'WP-41',
    method: 'DELETE',
    path: `${base}/comments/:id/pin`,
    summary: 'Unpin a comment',
    auth: 'session',
    requires: ['mod_owner'],
    params: CommentIdParams,
    response: CommentDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
  }),
  markSolution: defineEndpoint({
    id: 'comments.markSolution',
    owner: 'WP-41',
    method: 'POST',
    path: `${base}/comments/:id/solution`,
    summary: 'Mark a reply as the solution (mod author)',
    auth: 'session',
    requires: ['mod_owner'],
    params: CommentIdParams,
    response: CommentDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
  }),
  unmarkSolution: defineEndpoint({
    id: 'comments.unmarkSolution',
    owner: 'WP-41',
    method: 'DELETE',
    path: `${base}/comments/:id/solution`,
    summary: 'Remove the solution mark',
    auth: 'session',
    requires: ['mod_owner'],
    params: CommentIdParams,
    response: CommentDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
  }),
  resolveBug: defineEndpoint({
    id: 'comments.resolveBug',
    owner: 'WP-41',
    method: 'POST',
    path: `${base}/comments/:id/resolve`,
    summary: 'Mark a bug report as resolved in a version (mod author)',
    auth: 'session',
    requires: ['mod_owner'],
    params: CommentIdParams,
    body: ResolveBugBody,
    response: CommentDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
  }),
  previewMarkdown: defineEndpoint({
    id: 'comments.previewMarkdown',
    owner: 'WP-70',
    method: 'POST',
    path: `${base}/markdown/preview`,
    summary: 'Render a markdown preview with the server pipeline',
    auth: 'verified',
    body: MarkdownPreviewBody,
    response: MarkdownPreviewDTO,
    errors: ['EMAIL_NOT_VERIFIED'],
    cache: cache.noStore,
    rateLimit: 'markdownPreview',
  }),
} as const;
