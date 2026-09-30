/**
 * Wire types of the reviews island (`@sotf/contracts/reviews`, type-only: no Zod ships).
 */
import type { UserReviewDTO } from '@sotf/contracts/catalog';
import type { ReviewDTO } from '@sotf/contracts/reviews';
import type { z } from 'zod';

export type Review = z.output<typeof ReviewDTO>;
export type UserReview = z.output<typeof UserReviewDTO>;

export interface ReviewPage {
  items: Review[];
  nextCursor: string | null;
}

export type ReviewSort = 'helpful' | 'new' | 'critical';

/** `REVIEW_RULES` of @sotf/contracts (literal: the island ships no Zod). */
export const REVIEW_TITLE_MAX = 80;
export const REVIEW_BODY_MAX = 2000;
export const REVIEW_REPLY_MAX = 2000;
