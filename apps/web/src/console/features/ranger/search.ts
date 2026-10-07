/**
 * Search-param vocabularies of the Ranger Station routes. The routes' `validateSearch` runs in the
 * eager route tree, so this module stays tiny and free of the API client and Zod (the console
 * shell budget, PLAN §12.3 WP-34); `api.ts` re-exports everything.
 */
import type { ModerationLane } from '@sotf/contracts/moderation';

/** Lanes of the main queue screen (`/moderation`); comments have their own screen (`/moderation/comments`). */
export const QUEUE_LANES = [
  'new_mods',
  'versions',
  'post_review',
  'builds',
  'reports',
] as const satisfies readonly ModerationLane[];

export const REPORT_STATUSES = ['open', 'resolved', 'dismissed', 'all'] as const;
export type ReportFilter = (typeof REPORT_STATUSES)[number];

// -----------------------------------------------------------------------------------------------
// List state in the URL (queue, reports, users, audit). Defaults are dropped from the URL.
// -----------------------------------------------------------------------------------------------

/** A positive integer page from a search param (page 1 is the default and is not kept). */
export function pageParam(value: unknown): number | undefined {
  const page = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : Number.NaN;
  return Number.isSafeInteger(page) && page > 1 && page <= 10_000 ? page : undefined;
}

/** Trimmed text of a search param, cut to `max` characters (empty values are dropped). */
export function textParam(value: unknown, max: number): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim().slice(0, max).trim();
  return trimmed || undefined;
}

/** One of `allowed` (anything else, and the `fallback` default, are dropped). */
export function choiceParam<T extends string>(value: unknown, allowed: readonly T[], fallback?: T): T | undefined {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value) && value !== fallback
    ? (value as T)
    : undefined;
}

/** Page sizes of the lists that offer a selector. */
export const PAGE_SIZES = [25, 50, 100] as const;
export type PageSize = (typeof PAGE_SIZES)[number];

export function sizeParam(value: unknown, fallback: PageSize): PageSize | undefined {
  const size = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : Number.NaN;
  return (PAGE_SIZES as readonly number[]).includes(size) && size !== fallback ? (size as PageSize) : undefined;
}

export const QUEUE_SORTS = ['oldest', 'newest', 'risk'] as const;
export type QueueSort = (typeof QUEUE_SORTS)[number];
export const QUEUE_RISKS = ['low', 'medium', 'high'] as const;
export const QUEUE_AGES = ['24h', '72h', '7d'] as const;
export type QueueAge = (typeof QUEUE_AGES)[number];
export const QUEUE_AGE_HOURS: Record<QueueAge, number> = { '24h': 24, '72h': 72, '7d': 168 };
export const QUEUE_ASSIGNEES = ['me', 'none', 'others'] as const;

/** Page, sort and filters of a queue lane. Every field is optional: absent = the default. */
export interface QueueView {
  page?: number;
  sort?: Exclude<QueueSort, 'oldest'>;
  risk?: (typeof QUEUE_RISKS)[number];
  age?: QueueAge;
  assignee?: (typeof QUEUE_ASSIGNEES)[number];
  escalated?: true;
  author?: string;
  q?: string;
}

export function parseQueueView(search: Record<string, unknown>): QueueView {
  const page = pageParam(search.page);
  const sort = choiceParam(search.sort, QUEUE_SORTS, 'oldest') as QueueView['sort'];
  const risk = choiceParam(search.risk, QUEUE_RISKS);
  const age = choiceParam(search.age, QUEUE_AGES);
  const assignee = choiceParam(search.assignee, QUEUE_ASSIGNEES);
  const author = textParam(search.author, 64);
  const q = textParam(search.q, 100);
  return {
    ...(page ? { page } : {}),
    ...(sort ? { sort } : {}),
    ...(risk ? { risk } : {}),
    ...(age ? { age } : {}),
    ...(assignee ? { assignee } : {}),
    ...(search.escalated === true || search.escalated === 'true' || search.escalated === '1'
      ? { escalated: true as const }
      : {}),
    ...(author ? { author } : {}),
    ...(q ? { q } : {}),
  };
}

/** Number of filters in force (the sort and the page are not filters). */
export function queueFilterCount(view: QueueView): number {
  return [view.risk, view.age, view.assignee, view.escalated, view.author, view.q].filter(Boolean).length;
}

export const REPORT_REASONS = [
  'malware',
  'broken',
  'reupload',
  'nsfw_unmarked',
  'spam',
  'harassment',
  'illegal',
  'other',
] as const;
export const REPORT_TARGETS = [
  'mod',
  'version',
  'comment',
  'review',
  'user',
  'kit',
  'compat_report',
  'request',
  'request_comment',
] as const;
export const REPORT_SORTS = ['oldest', 'newest'] as const;

export const USER_ROLES = ['user', 'moderator', 'admin'] as const;
export const USER_STATUSES = ['active', 'suspended', 'banned'] as const;
export const USER_SORTS = ['newest', 'oldest', 'name', 'reports', 'seen'] as const;
export const USER_VERIFIED = ['1', '0'] as const;

/** Item ids are `<lane>:<targetType>:<targetId>` (`QueueItemDTO.id`). */
export const ITEM_ID = /^([a-z_]+):([a-z_]+):(\d+)$/;

export function isItemId(value: unknown): value is string {
  return typeof value === 'string' && value.length <= 80 && ITEM_ID.test(value);
}

export interface AuditFilters {
  actor?: string;
  action?: string;
  target?: string;
  /** Text in the reason. */
  q?: string;
  /** `YYYY-MM-DD` (UTC). */
  from?: string;
  to?: string;
  sort?: 'oldest';
  page?: number;
  size?: PageSize;
}

export const DATE_PARAM = /^\d{4}-\d{2}-\d{2}$/;

/** `target` filter of the audit endpoint: `<targetType>:<id>`. */
export const AUDIT_TARGET = /^[a-z_]+:\d+$/;
