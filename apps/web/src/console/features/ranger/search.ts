/**
 * Search-param vocabularies of the Ranger Station routes. The routes' `validateSearch` runs in the
 * eager route tree, so this module stays tiny and free of the API client and Zod (the console
 * shell budget, PLAN §12.3 WP-34); `api.ts` re-exports everything.
 */
import type { ModerationLane } from '@sotf/contracts/moderation';

/** Lanes of the main queue screen (`/ranger`); comments have their own screen (`/ranger/comments`). */
export const QUEUE_LANES = [
  'new_mods',
  'versions',
  'post_review',
  'builds',
  'reports',
] as const satisfies readonly ModerationLane[];

export const REPORT_STATUSES = ['open', 'resolved', 'dismissed', 'all'] as const;
export type ReportFilter = (typeof REPORT_STATUSES)[number];

/** Item ids are `<lane>:<targetType>:<targetId>` (`QueueItemDTO.id`). */
export const ITEM_ID = /^([a-z_]+):([a-z_]+):(\d+)$/;

export function isItemId(value: unknown): value is string {
  return typeof value === 'string' && value.length <= 80 && ITEM_ID.test(value);
}

export interface AuditFilters {
  actor?: string;
  action?: string;
  target?: string;
}

/** `target` filter of the audit endpoint: `<targetType>:<id>`. */
export const AUDIT_TARGET = /^[a-z_]+:\d+$/;
