/**
 * Reviews (PLAN §7.7, T0-11). Implemented by WP-41 on the legacy `ModReview` table.
 *
 * One review per user and mod, stars 1–5, optional title (80) and markdown-lite body (2000).
 * Public stars (and JSON-LD `aggregateRating`) only with ≥ 3 visible reviews. Listings sort by the
 * Bayesian mean `(5·m + Σ)/(5 + n)` with `m` = site mean (4.0 by default).
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { Count, EntityId, IdParam, IsoDateTime, UserRefDTO, VersionString } from './common.ts';
import { dto } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';
import { CursorQuery, cursorPageOf } from './pagination.ts';

export const REVIEW_RULES = {
  titleMax: 80,
  bodyMax: 2000,
  replyMax: 2000,
  minAccountAgeHours: 24,
  publicStarsMinReviews: 3,
  bayesPriorWeight: 5,
  defaultSiteMean: 4.0,
  /** Minimum body length that earns XP (PLAN §7.2). */
  xpBodyMinLength: 80,
} as const;

/** Bayesian mean used to sort listings (PLAN §7.7). */
export function bayesianRating(sum: number, count: number, siteMean: number = REVIEW_RULES.defaultSiteMean): number {
  const c = REVIEW_RULES.bayesPriorWeight;
  return (c * siteMean + sum) / (c + count);
}

export const Rating = z.number().int().min(1).max(5);

export const REVIEW_STATUSES = ['visible', 'hidden', 'deleted'] as const;
export const ReviewStatus = z.enum(REVIEW_STATUSES);

export const REVIEW_SORTS = ['helpful', 'new', 'critical'] as const;
export const ReviewSort = z.enum(REVIEW_SORTS);

export const ReviewDTO = dto(
  'ReviewDTO',
  z.object({
    id: EntityId,
    modId: EntityId,
    rating: Rating,
    title: z.string().max(REVIEW_RULES.titleMax).nullable(),
    bodyHtml: z.string().nullable().describe('Sanitised markdown-lite'),
    author: UserRefDTO.nullable().describe('null = deleted account ("Deleted user")'),
    modVersion: z.object({ id: EntityId, version: VersionString }).nullable(),
    isVerifiedDownload: z.boolean(),
    helpfulCount: Count,
    unhelpfulCount: Count,
    authorReply: z.object({ bodyHtml: z.string(), repliedAt: IsoDateTime }).nullable(),
    status: ReviewStatus.describe('Public lists only contain `visible`'),
    createdAt: IsoDateTime,
    editedAt: IsoDateTime.nullable(),
  }),
  {
    description: 'A review of a mod.',
    examples: [
      {
        id: 77,
        modId: 20,
        rating: 5,
        title: 'Essential',
        bodyHtml: '<p>Works on 1.0.4 with <strong>zero</strong> issues. Noclip is great for building.</p>',
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
        modVersion: { id: 412, version: '1.3.8' },
        isVerifiedDownload: true,
        helpfulCount: 12,
        unhelpfulCount: 1,
        authorReply: { bodyHtml: '<p>Thanks!</p>', repliedAt: '2026-09-28T09:00:00.000Z' },
        status: 'visible',
        createdAt: '2026-09-27T20:00:00.000Z',
        editedAt: null,
      },
    ],
  },
);
export type ReviewDTO = z.infer<typeof ReviewDTO>;

export const ReviewPageDTO = cursorPageOf('ReviewPageDTO', ReviewDTO, 'Cursor page of reviews.');

export const ReviewsSummaryDTO = dto(
  'ReviewsSummaryDTO',
  z.object({
    count: Count.describe('Visible reviews'),
    average: z.number().min(0).max(5).nullable().describe('Plain mean; null without reviews'),
    bayes: z.number().min(0).max(5),
    showStars: z.boolean().describe(`true when count ≥ ${REVIEW_RULES.publicStarsMinReviews}`),
    histogram: z.object({ '1': Count, '2': Count, '3': Count, '4': Count, '5': Count }),
  }),
  {
    description: 'Histogram, mean and Bayesian mean of the visible reviews of a mod.',
    examples: [
      {
        count: 14,
        average: 4.64,
        bayes: 4.47,
        showStars: true,
        histogram: { '1': 0, '2': 1, '3': 0, '4': 2, '5': 11 },
      },
    ],
  },
);
export type ReviewsSummaryDTO = z.infer<typeof ReviewsSummaryDTO>;

export const CreateReviewBody = dto(
  'CreateReviewBody',
  z.strictObject({
    rating: Rating,
    title: z.string().trim().max(REVIEW_RULES.titleMax).optional(),
    bodyMd: z.string().max(REVIEW_RULES.bodyMax).optional(),
    modVersionId: EntityId.optional().describe('Defaults to the last version you downloaded'),
  }),
  {
    description: 'New review (verified email, account ≥ 24 h, one per user and mod).',
    examples: [
      { rating: 4, title: 'Great, one bug', bodyMd: 'Great mod. **Noclip** crashes on ziplines.', modVersionId: 412 },
    ],
  },
);

export const UpdateReviewBody = dto(
  'UpdateReviewBody',
  z.strictObject({
    rating: Rating.optional(),
    title: z.string().trim().max(REVIEW_RULES.titleMax).nullable().optional(),
    bodyMd: z.string().max(REVIEW_RULES.bodyMax).nullable().optional(),
    modVersionId: EntityId.nullable().optional(),
  }),
  { description: 'Edit an own review (history is kept).', examples: [{ rating: 5, title: 'Fixed in 1.3.9' }] },
);

export const ReviewVoteBody = dto('ReviewVoteBody', z.strictObject({ value: z.union([z.literal(1), z.literal(-1)]) }), {
  description: '"Helpful?" vote (never on your own review).',
  examples: [{ value: 1 }],
});

export const ReviewReplyBody = dto(
  'ReviewReplyBody',
  z.strictObject({ bodyMd: z.string().trim().min(1).max(REVIEW_RULES.replyMax) }),
  {
    description: 'Public reply of the mod author (one per review).',
    examples: [{ bodyMd: 'Thanks! Fixed in 1.3.9.' }],
  },
);

export const ReviewListQuery = CursorQuery.extend({ sort: ReviewSort.default('helpful') });

const base = API_V2_PREFIX;

export const reviewsEndpoints = {
  list: defineEndpoint({
    id: 'reviews.list',
    owner: 'WP-41',
    method: 'GET',
    path: `${base}/mods/:id/reviews`,
    summary: 'Reviews of a mod',
    auth: 'public',
    params: z.object({ id: IdParam }),
    query: ReviewListQuery,
    response: ReviewPageDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['mod:{id}']),
    rateLimit: 'anonymousRead',
  }),
  summary: defineEndpoint({
    id: 'reviews.summary',
    owner: 'WP-41',
    method: 'GET',
    path: `${base}/mods/:id/reviews/summary`,
    summary: 'Histogram, mean and Bayesian mean of a mod',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: ReviewsSummaryDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['mod:{id}']),
    rateLimit: 'anonymousRead',
  }),
  create: defineEndpoint({
    id: 'reviews.create',
    owner: 'WP-41',
    method: 'POST',
    path: `${base}/mods/:id/reviews`,
    summary: 'Review a mod',
    auth: 'verified',
    requires: ['account_age_24h', 'not_own_content'],
    params: z.object({ id: IdParam }),
    body: CreateReviewBody,
    status: 201,
    response: ReviewDTO,
    errors: ['NOT_FOUND', 'CONFLICT', 'FORBIDDEN', 'EMAIL_NOT_VERIFIED', 'TURNSTILE_REQUIRED'],
    cache: cache.noStore,
    rateLimit: 'reviews',
  }),
  update: defineEndpoint({
    id: 'reviews.update',
    owner: 'WP-41',
    method: 'PATCH',
    path: `${base}/reviews/:id`,
    summary: 'Edit an own review',
    auth: 'verified',
    requires: ['review_author'],
    params: z.object({ id: IdParam }),
    body: UpdateReviewBody,
    response: ReviewDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'reviews',
  }),
  delete: defineEndpoint({
    id: 'reviews.delete',
    owner: 'WP-41',
    method: 'DELETE',
    path: `${base}/reviews/:id`,
    summary: 'Delete an own review (soft delete)',
    auth: 'session',
    requires: ['review_author'],
    params: z.object({ id: IdParam }),
    responseKind: 'empty',
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
  }),
  vote: defineEndpoint({
    id: 'reviews.vote',
    owner: 'WP-41',
    method: 'PUT',
    path: `${base}/reviews/:id/vote`,
    summary: 'Vote a review as helpful (1) or not (-1)',
    auth: 'verified',
    requires: ['not_own_content'],
    params: z.object({ id: IdParam }),
    body: ReviewVoteBody,
    response: ReviewDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  unvote: defineEndpoint({
    id: 'reviews.unvote',
    owner: 'WP-41',
    method: 'DELETE',
    path: `${base}/reviews/:id/vote`,
    summary: 'Remove your vote',
    auth: 'verified',
    params: z.object({ id: IdParam }),
    response: ReviewDTO,
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  reply: defineEndpoint({
    id: 'reviews.reply',
    owner: 'WP-41',
    method: 'PUT',
    path: `${base}/reviews/:id/reply`,
    summary: 'Reply publicly as the mod author',
    auth: 'session',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam }),
    body: ReviewReplyBody,
    response: ReviewDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  deleteReply: defineEndpoint({
    id: 'reviews.deleteReply',
    owner: 'WP-41',
    method: 'DELETE',
    path: `${base}/reviews/:id/reply`,
    summary: 'Delete the author reply',
    auth: 'session',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam }),
    response: ReviewDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
  }),
} as const;
