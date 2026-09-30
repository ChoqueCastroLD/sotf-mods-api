/**
 * Search-param vocabularies of the Basecamp routes. The routes' `validateSearch` runs in the eager
 * route tree, so this module stays tiny and free of the API client and Zod (the console shell
 * budget, PLAN §12.3 WP-34); `api.ts` re-exports everything.
 */
import type { ModStatus } from '@sotf/contracts/common';
import type { ANALYTICS_RANGES, INBOX_TYPES } from '@sotf/contracts/studio';

export type AnalyticsRange = (typeof ANALYTICS_RANGES)[number];
export type InboxType = (typeof INBOX_TYPES)[number];

/** `ANALYTICS_RANGES` of the contracts, in the order of the range switch. */
export const RANGES = ['7d', '30d', '90d', 'all'] as const satisfies readonly AnalyticsRange[];
/** `INBOX_TYPES` of the contracts. */
export const INBOX_KINDS = ['comment', 'bug', 'review', 'compat'] as const satisfies readonly InboxType[];
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
