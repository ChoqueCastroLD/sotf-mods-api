/**
 * Data of Ranger Station (WP-82 on the WP-51 backend, PLAN §7.4, §5.2 «Moderación»).
 *
 * Every key lives under `['moderation', …]`, the prefix the console stream invalidates on a
 * `moderation.queue` event (`lib/stream.ts`), so lanes, counts and open items stay live:
 *
 *   ['moderation', 'queue', lane, view]     one page of a lane (filters, sort, page) + counts of all lanes
 *   ['moderation', 'item', itemId]          the item view (inspection, diffs, scan, history)
 *   ['moderation', 'reports', view]         one page of reports (status, filters, sort)
 *   ['moderation', 'users', view]           user search (filters, sort, page)
 *   ['moderation', 'user', id]              one user with sanctions
 *   ['moderation', 'audit', filters]        one page of the audit log
 *
 * Reason templates (`GET /ranger/templates`) live under `['ranger-templates']` and the review-time
 * metrics under `['ranger-metrics']`: they do not change with every queue event.
 *
 * Only `import type` from `@sotf/contracts/*`: the schema modules pull Zod, which the console
 * route chunks do not ship. Constants mirrored here are checked against the contract types.
 */
import type {
  AuditEntryDTO,
  AuditPageDTO,
  DecisionResultDTO,
  FileDiffDTO,
  HiddenStateDTO,
  ModerationLane,
  QueueItemDetailDTO,
  QueueItemDTO,
  QueuePageDTO,
  RangerUserDTO,
  RangerUserPageDTO,
  ReportDTO,
  ReportPageDTO,
  ReviewMetricsDTO,
  SanctionDTO,
} from '@sotf/contracts/moderation';
import { type QueryClient, queryOptions } from '@tanstack/react-query';
import type { z } from 'zod';
import { api } from '../../lib/api.ts';
import { queryKeys } from '../../lib/query-keys.ts';
import { type AuditFilters, QUEUE_AGE_HOURS, type QueueView, type ReportFilter } from './search.ts';

export {
  AUDIT_TARGET,
  type AuditFilters,
  isItemId,
  QUEUE_LANES,
  type QueueView,
  REPORT_STATUSES,
  type ReportFilter,
} from './search.ts';

export type Lane = ModerationLane;
export type QueueItem = z.output<typeof QueueItemDTO>;
export type QueuePage = z.output<typeof QueuePageDTO>;
export type QueueItemDetail = z.output<typeof QueueItemDetailDTO>;
export type FileDiff = z.output<typeof FileDiffDTO>;
export type DecisionResult = z.output<typeof DecisionResultDTO>;
export type HiddenState = z.output<typeof HiddenStateDTO>;
export type Report = z.output<typeof ReportDTO>;
export type ReportPage = z.output<typeof ReportPageDTO>;
export type RangerUser = z.output<typeof RangerUserDTO>;
export type RangerUserPage = z.output<typeof RangerUserPageDTO>;
export type Sanction = z.output<typeof SanctionDTO>;
export type AuditEntry = z.output<typeof AuditEntryDTO>;
export type AuditPage = z.output<typeof AuditPageDTO>;
export type ModerationAction = QueueItemDetail['allowedActions'][number];
export type Escalation = NonNullable<QueueItem['escalation']>;
export type ReviewMetrics = z.output<typeof ReviewMetricsDTO>;
export type ReportStatus = Report['status'];
export type ReportReason = Report['reason'];
export type ReportTargetType = Report['targetType'];
export type SanctionKind = Sanction['kind'];
export type Role = RangerUser['role'];
export type ScanSummary = NonNullable<QueueItemDetail['scan']>;
export type InspectionFlag = QueueItem['flags'][number];
export type Risk = QueueItem['risk'];

/** `MODERATION_LANES` of the contracts, in the order of the lane bar. */
export const LANES = [
  'new_mods',
  'versions',
  'post_review',
  'builds',
  'reports',
  'comments',
] as const satisfies readonly Lane[];

export function isLane(value: unknown): value is Lane {
  return typeof value === 'string' && (LANES as readonly string[]).includes(value);
}

/** `MODERATION_SLA_HOURS` of the contracts (PLAN §7.4: SLA < 72 h). */
export const SLA_HOURS = 72;
/** Items past this share of the SLA are shown as «due soon». */
export const SLA_WARNING_RATIO = 2 / 3;

export const SANCTION_KINDS = [
  'suspend',
  'ban',
  'comment_mute',
  'upload_mute',
] as const satisfies readonly SanctionKind[];
export const ROLES = ['user', 'moderator', 'admin'] as const satisfies readonly Role[];

/** Actions that need a reason (a template, a note, or both), as `DecisionBody` requires. */
export const REASON_ACTIONS = ['reject', 'request_changes', 'remove'] as const satisfies readonly ModerationAction[];
export type ReasonAction = (typeof REASON_ACTIONS)[number];

export function needsReason(action: ModerationAction): action is ReasonAction {
  return (REASON_ACTIONS as readonly string[]).includes(action);
}

export const rangerKeys = {
  all: queryKeys.moderation,
  /** Every cached page of a lane (any view). */
  lane: (lane: Lane) => [...queryKeys.moderation, 'queue', lane] as const,
  queue: (lane: Lane, view: QueueView) => [...queryKeys.moderation, 'queue', lane, view] as const,
  item: (itemId: string) => [...queryKeys.moderation, 'item', itemId] as const,
  reports: (view: ReportsView) => [...queryKeys.moderation, 'reports', view] as const,
  users: (view: UsersView) => [...queryKeys.moderation, 'users', view] as const,
  user: (id: number) => [...queryKeys.moderation, 'user', id] as const,
  audit: (filters: AuditFilters) => [...queryKeys.moderation, 'audit', filters] as const,
  /** Outside the `moderation` prefix: stream events must not refetch them. */
  templates: ['ranger-templates'] as const,
  metrics: (days: number) => ['ranger-metrics', days] as const,
} as const;

// -----------------------------------------------------------------------------------------------
// Queue
// -----------------------------------------------------------------------------------------------

export const QUEUE_PAGE_SIZE = 25;

/** One page of a lane (oldest first unless the view says otherwise) with the counts of every lane. */
export const laneQuery = (lane: Lane, view: QueueView = {}) =>
  queryOptions({
    queryKey: rangerKeys.queue(lane, view),
    queryFn: ({ signal }) =>
      api.moderation.queue(
        {
          query: {
            lane,
            limit: QUEUE_PAGE_SIZE,
            page: view.page ?? 1,
            sort: view.sort ?? 'oldest',
            ...(view.risk ? { risk: view.risk } : {}),
            ...(view.age ? { minAgeHours: QUEUE_AGE_HOURS[view.age] } : {}),
            ...(view.author ? { author: view.author } : {}),
            ...(view.assignee ? { assignee: view.assignee } : {}),
            ...(view.escalated ? { escalated: '1' as const } : {}),
            ...(view.q ? { q: view.q } : {}),
          },
        },
        { signal },
      ),
    staleTime: 15_000,
    placeholderData: (previous) => previous,
  });

export const itemQuery = (itemId: string) =>
  queryOptions({
    queryKey: rangerKeys.item(itemId),
    queryFn: ({ signal }) => api.moderation.item({ params: { id: itemId } }, { signal }),
    staleTime: 15_000,
  });

export interface DecisionInput {
  action: ModerationAction;
  templateKey?: string;
  note?: string;
  successorModId?: number;
}

function decisionBody(input: DecisionInput) {
  const note = input.note?.trim();
  return {
    action: input.action,
    ...(input.templateKey ? { templateKey: input.templateKey } : {}),
    ...(note ? { note } : {}),
    ...(input.successorModId ? { successorModId: input.successorModId } : {}),
  };
}

export const rangerApi = {
  decideMod: (id: number, input: DecisionInput) =>
    api.moderation.decideMod({ params: { id }, body: decisionBody(input) }),
  decideVersion: (id: number, input: DecisionInput) =>
    api.moderation.decideVersion({ params: { id }, body: decisionBody(input) }),
  hideComment: (id: number, reason: string) => api.moderation.hideComment({ params: { id }, body: { reason } }),
  unhideComment: (id: number) => api.moderation.unhideComment({ params: { id } }),
  hideReview: (id: number, reason: string) => api.moderation.hideReview({ params: { id }, body: { reason } }),
  unhideReview: (id: number) => api.moderation.unhideReview({ params: { id } }),
  resolveReport: (id: number, body: { action: 'resolve' | 'dismiss'; note?: string; hideTarget: boolean }) => {
    const note = body.note?.trim();
    return api.moderation.resolveReport({
      params: { id },
      body: { action: body.action, hideTarget: body.hideTarget, ...(note ? { note } : {}) },
    });
  },
  sanction: (id: number, body: { kind: SanctionKind; reason: string; endsAt?: string; scopeModId?: number }) =>
    api.moderation.sanction({ params: { id }, body }),
  revokeSanction: (id: number) => api.moderation.revokeSanction({ params: { id } }),
  setRole: (id: number, role: Role, reason?: string) =>
    api.moderation.setRole({ params: { id }, body: { role, ...(reason?.trim() ? { reason: reason.trim() } : {}) } }),
  setVerifiedCreator: (id: number, value: boolean, reason?: string) =>
    api.moderation.setVerifiedCreator({
      params: { id },
      body: { value, ...(reason?.trim() ? { reason: reason.trim() } : {}) },
    }),
  revokeSessions: (id: number) => api.moderation.revokeSessions({ params: { id } }),
  overrideScan: (scanId: number, verdict: 'false_positive' | 'malicious', note: string) =>
    api.moderation.overrideScan({ params: { id: scanId }, body: { verdict, note } }),
  /** «Assign to me» (`assign = false` releases the item). Resolves with the updated row. */
  assign: (itemId: string, assign: boolean) => api.moderation.assignItem({ params: { id: itemId }, body: { assign } }),
  /** Escalates to the admins with a note (`escalate = false` clears it). */
  escalate: (itemId: string, escalate: boolean, note?: string) =>
    api.moderation.escalateItem({
      params: { id: itemId },
      body: escalate ? { escalate, note: (note ?? '').trim() } : { escalate },
    }),
};

/** Writes an updated row (assignment, escalation) into the open item and every cached page of its lane. */
export function storeQueueItem(queryClient: QueryClient, item: QueueItem): void {
  queryClient.setQueryData<QueueItemDetail>(rangerKeys.item(item.id), (detail) =>
    detail ? { ...detail, item } : detail,
  );
  queryClient.setQueriesData<QueuePage>({ queryKey: rangerKeys.lane(item.lane) }, (data) =>
    data ? { ...data, items: data.items.map((entry) => (entry.id === item.id ? item : entry)) } : data,
  );
}

/** Review time of the last `days` days (`GET /ranger/metrics`, PLAN §7.4 «Métricas visibles»). */
export const metricsQuery = (days = 30) =>
  queryOptions({
    queryKey: rangerKeys.metrics(days),
    queryFn: ({ signal }) => api.moderation.metrics({ query: { days } }, { signal }),
    staleTime: 5 * 60_000,
  });

/** After any decision: every lane, count and open item may have changed. */
export function refreshModeration(queryClient: QueryClient): Promise<void> {
  return queryClient.invalidateQueries({ queryKey: rangerKeys.all });
}

/** Removes an item from the cached pages of its lane at once (the refetch confirms it). */
export function dropFromLane(queryClient: QueryClient, lane: Lane, itemId: string): void {
  queryClient.setQueriesData<QueuePage>({ queryKey: rangerKeys.lane(lane) }, (data) => {
    if (!data) return data;
    const items = data.items.filter((item) => item.id !== itemId);
    if (items.length === data.items.length) return data;
    return {
      ...data,
      items,
      total: Math.max(0, data.total - 1),
      counts: { ...data.counts, [lane]: Math.max(0, (data.counts[lane] ?? 1) - 1) },
    };
  });
}

// -----------------------------------------------------------------------------------------------
// Reports
// -----------------------------------------------------------------------------------------------

export const REPORTS_PAGE_SIZE = 25;

export interface ReportsView {
  status: ReportFilter;
  page?: number;
  sort?: 'oldest' | 'newest';
  reason?: ReportReason;
  targetType?: ReportTargetType;
  q?: string;
}

export const reportsQuery = (view: ReportsView) =>
  queryOptions({
    queryKey: rangerKeys.reports(view),
    queryFn: ({ signal }) =>
      api.moderation.reports(
        {
          query: {
            status: view.status,
            limit: REPORTS_PAGE_SIZE,
            page: view.page ?? 1,
            ...(view.sort ? { sort: view.sort } : {}),
            ...(view.reason ? { reason: view.reason } : {}),
            ...(view.targetType ? { targetType: view.targetType } : {}),
            ...(view.q ? { q: view.q } : {}),
          },
        },
        { signal },
      ),
    staleTime: 15_000,
    placeholderData: (previous) => previous,
  });

// -----------------------------------------------------------------------------------------------
// Users
// -----------------------------------------------------------------------------------------------

export interface UsersView {
  q?: string;
  page?: number;
  size?: number;
  role?: Role;
  status?: 'active' | 'suspended' | 'banned';
  verified?: '1' | '0';
  sort?: 'newest' | 'oldest' | 'name' | 'reports' | 'seen';
}

export const USERS_PAGE_SIZE = 25;

export const usersQuery = (view: UsersView) =>
  queryOptions({
    queryKey: rangerKeys.users(view),
    queryFn: ({ signal }) =>
      api.moderation.users(
        {
          query: {
            page: view.page ?? 1,
            pageSize: view.size ?? USERS_PAGE_SIZE,
            ...(view.q ? { q: view.q } : {}),
            ...(view.role ? { role: view.role } : {}),
            ...(view.status ? { status: view.status } : {}),
            ...(view.verified ? { verified: view.verified } : {}),
            ...(view.sort ? { sort: view.sort } : {}),
          },
        },
        { signal },
      ),
    staleTime: 30_000,
    placeholderData: (previous) => previous,
  });

export const userQuery = (id: number) =>
  queryOptions({
    queryKey: rangerKeys.user(id),
    queryFn: ({ signal }) => api.moderation.user({ params: { id } }, { signal }),
    staleTime: 15_000,
  });

/** Puts a fresh user card in the cache and refreshes the search pages. */
export function storeUser(queryClient: QueryClient, user: RangerUser): void {
  queryClient.setQueryData(rangerKeys.user(user.user.id), user);
  void queryClient.invalidateQueries({ queryKey: [...rangerKeys.all, 'users'] });
}

// -----------------------------------------------------------------------------------------------
// Audit
// -----------------------------------------------------------------------------------------------

export const AUDIT_PAGE_SIZE = 50;

/** Day boundaries of `from`/`to` (`YYYY-MM-DD`, UTC); `to` is inclusive, the API takes an exclusive instant. */
function dayStart(date: string): string {
  return `${date}T00:00:00.000Z`;
}
function dayAfter(date: string): string {
  return new Date(Date.parse(`${date}T00:00:00.000Z`) + 86_400_000).toISOString();
}

export const auditQuery = (filters: AuditFilters) =>
  queryOptions({
    queryKey: rangerKeys.audit(filters),
    queryFn: ({ signal }) =>
      api.moderation.audit(
        {
          query: {
            limit: filters.size ?? AUDIT_PAGE_SIZE,
            page: filters.page ?? 1,
            ...(filters.sort ? { sort: filters.sort } : {}),
            ...(filters.actor ? { actor: filters.actor } : {}),
            ...(filters.action ? { action: filters.action } : {}),
            ...(filters.target ? { target: filters.target } : {}),
            ...(filters.q ? { q: filters.q } : {}),
            ...(filters.from ? { from: dayStart(filters.from) } : {}),
            ...(filters.to ? { to: dayAfter(filters.to) } : {}),
          },
        },
        { signal },
      ),
    staleTime: 30_000,
    placeholderData: (previous) => previous,
  });

// -----------------------------------------------------------------------------------------------
// Reason templates
// -----------------------------------------------------------------------------------------------

export interface ReasonTemplate {
  key: string;
  action: ModerationAction;
  /** Wording per locale (templates saved by an admin); built-ins use the `ranger` catalog (13 locales). */
  messages: Partial<Record<string, string>> | null;
}

/**
 * The built-in templates of `@sotf/core/settings/templates` (`DEFAULT_MODERATION_TEMPLATES`), in
 * force until an admin saves their own. Their wording is translated in `ranger_template_*`. Also
 * the fallback when `GET /ranger/templates` cannot be read.
 */
export const BUILT_IN_TEMPLATES: readonly ReasonTemplate[] = [
  { key: 'reupload_without_permission', action: 'reject', messages: null },
  { key: 'malware_detected', action: 'reject', messages: null },
  { key: 'broken_or_empty', action: 'reject', messages: null },
  { key: 'not_a_mod', action: 'reject', messages: null },
  { key: 'duplicate', action: 'reject', messages: null },
  { key: 'spam', action: 'reject', messages: null },
  { key: 'missing_description', action: 'request_changes', messages: null },
  { key: 'missing_screenshots', action: 'request_changes', messages: null },
  { key: 'wrong_category', action: 'request_changes', messages: null },
  { key: 'nsfw_unmarked', action: 'request_changes', messages: null },
  { key: 'credit_original_author', action: 'request_changes', messages: null },
  { key: 'rules_violation', action: 'remove', messages: null },
  { key: 'malware_confirmed', action: 'remove', messages: null },
  { key: 'copyright_claim', action: 'remove', messages: null },
];

/**
 * Templates of `GET /ranger/templates` as the dialog shows them: the built-in list keeps the
 * catalog translations (`messages: null`), saved templates carry their own wording.
 */
export function templatesFromApi(list: {
  source: 'setting' | 'built_in';
  items: ReadonlyArray<{ key: string; action: ModerationAction; messages: Partial<Record<string, string>> }>;
}): ReasonTemplate[] {
  return list.items.map((item) => ({
    key: item.key,
    action: item.action,
    messages: list.source === 'built_in' ? null : item.messages,
  }));
}

/** The templates in force for every ranger (moderators and admins). */
export const templatesQuery = () =>
  queryOptions({
    queryKey: rangerKeys.templates,
    queryFn: async ({ signal }): Promise<readonly ReasonTemplate[]> => {
      try {
        const list = templatesFromApi(await api.moderation.templates({}, { signal }));
        return list.length > 0 ? list : BUILT_IN_TEMPLATES;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') throw error;
        // Unreadable (network, re-auth pending): the built-ins are what the API applies by default.
        return BUILT_IN_TEMPLATES;
      }
    },
    staleTime: 10 * 60_000,
  });
