/**
 * Search-param vocabularies of the Basecamp routes. The routes' `validateSearch` runs in the eager
 * route tree, so this module stays tiny and free of the API client and Zod (the console shell
 * budget, PLAN §12.3 WP-34); `api.ts` re-exports everything.
 */
import type { ModStatus } from '@sotf/contracts/common';
import type {
  ANALYTICS_RANGES,
  ATTENTION_KINDS as ATTENTION_KINDS_CONTRACT,
  INBOX_TYPES,
} from '@sotf/contracts/studio';

export type AnalyticsRange = (typeof ANALYTICS_RANGES)[number];
export type InboxType = (typeof INBOX_TYPES)[number];

export type AttentionKind = (typeof ATTENTION_KINDS_CONTRACT)[number];
export type AttentionSort = 'urgency' | 'count' | 'name';

/** Kinds the dashboard lists, most urgent first (`ATTENTION_KINDS` of the contracts minus the retired field-report one). */
export const ATTENTION_KINDS = [
  'rejected',
  'unanswered_questions',
  'unanswered_reviews',
  'missing_source',
  'missing_gallery',
] as const satisfies readonly AttentionKind[];
export const ATTENTION_SORTS = ['urgency', 'count', 'name'] as const satisfies readonly AttentionSort[];

/** `ANALYTICS_RANGES` of the contracts, in the order of the range switch. */
export const RANGES = ['7d', '30d', '90d', 'all'] as const satisfies readonly AnalyticsRange[];
/** `INBOX_TYPES` of the contracts. */
/** Types of the inbox the UI offers (field reports left with the compatibility UI). */
export const INBOX_KINDS = ['comment', 'bug', 'review'] as const satisfies readonly InboxType[];
export const MOD_STATUS_VALUES = [
  'published',
  'pending',
  'unlisted',
  'rejected',
  'archived',
  'removed',
] as const satisfies readonly ModStatus[];

export function isRange(value: unknown): value is AnalyticsRange {
  return typeof value === 'string' && (RANGES as readonly string[]).includes(value);
}

export function isInboxType(value: unknown): value is InboxType {
  return typeof value === 'string' && (INBOX_KINDS as readonly string[]).includes(value);
}

export const INBOX_PAGE_SIZES = [10, 25, 50] as const;
export const DEFAULT_INBOX_PAGE_SIZE = 25;
