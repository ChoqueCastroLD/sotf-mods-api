/**
 * Signals: notifications and preferences (PLAN §7.3, T0-16). Implemented by WP-43 (+ WP-81 UI).
 *
 * Grouped by `groupKey` ("5 new comments on AmmoUi"). Preferences are a type × channel matrix:
 * `inApp` on/off, `email` instant/daily/weekly/off. Missing rows use `NOTIFICATION_DEFAULTS`.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { Count, EntityId, IsoDateTime, SitePath, UserRefDTO } from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';
import { CursorQuery, cursorPageOf } from './pagination.ts';

export const NOTIFICATION_TYPES = [
  'mod.version_published',
  'creator.mod_published',
  'comment.on_my_mod',
  'comment.reply',
  'comment.mention',
  'review.on_my_mod',
  'review.reply',
  'compat.broken_on_my_mod',
  'compat.acknowledged',
  'compat.prompt',
  'review.update_prompt',
  'kit.added_my_mod',
  'request.comment',
  'request.adopted',
  'request.fulfilled',
  'patch.breaking_build',
  'mod.status_changed',
  'milestone.reached',
  'badge.awarded',
  'award.won',
  'report.resolved',
  'system.announcement',
  'creator.weekly_report',
] as const;
export const NotificationType = z.enum(NOTIFICATION_TYPES);
export type NotificationType = z.infer<typeof NotificationType>;

export const EMAIL_FREQUENCIES = ['instant', 'daily', 'weekly', 'off'] as const;
export const EmailFrequency = z.enum(EMAIL_FREQUENCIES);
export type EmailFrequency = z.infer<typeof EmailFrequency>;

/**
 * Defaults of PLAN §7.3. `locked` channels cannot be turned off (transactional `removed` status
 * emails are enforced by core regardless of this table). `creator.weekly_report` is email-only.
 */
export const NOTIFICATION_DEFAULTS: Readonly<
  Record<NotificationType, { inApp: boolean; email: EmailFrequency; inAppAvailable: boolean }>
> = {
  'mod.version_published': { inApp: true, email: 'daily', inAppAvailable: true },
  'creator.mod_published': { inApp: true, email: 'weekly', inAppAvailable: true },
  'comment.on_my_mod': { inApp: true, email: 'instant', inAppAvailable: true },
  'comment.reply': { inApp: true, email: 'instant', inAppAvailable: true },
  'comment.mention': { inApp: true, email: 'instant', inAppAvailable: true },
  'review.on_my_mod': { inApp: true, email: 'daily', inAppAvailable: true },
  'review.reply': { inApp: true, email: 'instant', inAppAvailable: true },
  'compat.broken_on_my_mod': { inApp: true, email: 'instant', inAppAvailable: true },
  'compat.acknowledged': { inApp: true, email: 'off', inAppAvailable: true },
  'compat.prompt': { inApp: true, email: 'off', inAppAvailable: true },
  'review.update_prompt': { inApp: true, email: 'off', inAppAvailable: true },
  'kit.added_my_mod': { inApp: true, email: 'off', inAppAvailable: true },
  'request.comment': { inApp: true, email: 'off', inAppAvailable: true },
  'request.adopted': { inApp: true, email: 'off', inAppAvailable: true },
  'request.fulfilled': { inApp: true, email: 'instant', inAppAvailable: true },
  'patch.breaking_build': { inApp: true, email: 'instant', inAppAvailable: true },
  'mod.status_changed': { inApp: true, email: 'instant', inAppAvailable: true },
  'milestone.reached': { inApp: true, email: 'off', inAppAvailable: true },
  'badge.awarded': { inApp: true, email: 'off', inAppAvailable: true },
  'award.won': { inApp: true, email: 'off', inAppAvailable: true },
  'report.resolved': { inApp: true, email: 'off', inAppAvailable: true },
  'system.announcement': { inApp: true, email: 'off', inAppAvailable: true },
  'creator.weekly_report': { inApp: false, email: 'weekly', inAppAvailable: false },
};

/** Filters of `/signals` (PLAN §4.3). */
export const NOTIFICATION_FILTERS = ['all', 'mentions', 'updates', 'my_mods', 'ranger'] as const;

/** Types included by each filter. */
export const NOTIFICATION_FILTER_TYPES: Readonly<
  Record<(typeof NOTIFICATION_FILTERS)[number], readonly NotificationType[]>
> = {
  all: NOTIFICATION_TYPES,
  mentions: ['comment.mention', 'comment.reply', 'review.reply', 'request.comment'],
  updates: [
    'mod.version_published',
    'creator.mod_published',
    'patch.breaking_build',
    'review.update_prompt',
    'compat.prompt',
    'request.adopted',
    'request.fulfilled',
    'system.announcement',
  ],
  my_mods: [
    'comment.on_my_mod',
    'review.on_my_mod',
    'compat.broken_on_my_mod',
    'kit.added_my_mod',
    'milestone.reached',
    'award.won',
  ],
  ranger: ['mod.status_changed', 'report.resolved', 'compat.acknowledged', 'badge.awarded'],
};

export const NOTIFICATION_TARGET_TYPES = [
  'mod',
  'version',
  'comment',
  'review',
  'compat_report',
  'report',
  'kit',
  'request',
  'user',
  'game_build',
  'badge',
  'award',
  'announcement',
] as const;

export const NotificationDTO = dto(
  'NotificationDTO',
  z.object({
    id: EntityId,
    type: NotificationType,
    actor: UserRefDTO.nullable(),
    target: z
      .object({ type: z.enum(NOTIFICATION_TARGET_TYPES), id: EntityId, title: z.string(), path: SitePath.nullable() })
      .nullable(),
    groupKey: z.string().nullable(),
    groupCount: z.number().int().min(1).describe('Notifications folded into this one'),
    data: z.record(z.string(), z.unknown()).describe('Type-specific values for the i18n message (version, count…)'),
    readAt: IsoDateTime.nullable(),
    createdAt: IsoDateTime,
  }),
  {
    description: 'A signal (grouped notification).',
    examples: [
      {
        id: 5001,
        type: 'comment.on_my_mod',
        actor: exampleOf(UserRefDTO),
        target: { type: 'mod', id: 20, title: "Axel's Mod Menu", path: "/mods/imaxel/axel's-mod-menu#c-221" },
        groupKey: 'comment.on_my_mod:20',
        groupCount: 5,
        data: { count: 5 },
        readAt: null,
        createdAt: '2026-09-29T09:00:00.000Z',
      },
    ],
  },
);
export type NotificationDTO = z.infer<typeof NotificationDTO>;

export const NotificationPageDTO = cursorPageOf('NotificationPageDTO', NotificationDTO, 'Cursor page of signals.');

export const UnreadCountDTO = dto('UnreadCountDTO', z.object({ count: Count }), {
  description: 'Unread signals.',
  examples: [{ count: 3 }],
});

export const MarkReadBody = dto(
  'MarkReadBody',
  z.union([z.strictObject({ ids: z.array(EntityId).min(1).max(200) }), z.strictObject({ all: z.literal(true) })]),
  { description: 'Mark some or all signals as read.', examples: [{ ids: [5001, 5002] }, { all: true }] },
);

export const NotificationPreferenceDTO = dto(
  'NotificationPreferenceDTO',
  z.object({
    type: NotificationType,
    inApp: z.boolean(),
    email: EmailFrequency,
    inAppAvailable: z.boolean(),
    isDefault: z.boolean(),
  }),
  {
    description: 'Preference of one notification type.',
    examples: [{ type: 'comment.on_my_mod', inApp: true, email: 'instant', inAppAvailable: true, isDefault: true }],
  },
);

export const NotificationPreferencesDTO = dto(
  'NotificationPreferencesDTO',
  z.object({ items: z.array(NotificationPreferenceDTO) }),
  {
    description: 'Full preference matrix (defaults filled in).',
    examples: [{ items: [exampleOf(NotificationPreferenceDTO)] }],
  },
);

export const UpdateNotificationPreferencesBody = dto(
  'UpdateNotificationPreferencesBody',
  z.strictObject({
    items: z
      .array(z.strictObject({ type: NotificationType, inApp: z.boolean(), email: EmailFrequency }))
      .min(1)
      .max(NOTIFICATION_TYPES.length),
  }),
  {
    description: 'Change some rows of the matrix.',
    examples: [{ items: [{ type: 'mod.version_published', inApp: true, email: 'weekly' }] }],
  },
);

export const NotificationListQuery = CursorQuery.extend({ filter: z.enum(NOTIFICATION_FILTERS).default('all') });

const base = API_V2_PREFIX;

export const notificationsEndpoints = {
  list: defineEndpoint({
    id: 'notifications.list',
    owner: 'WP-43',
    method: 'GET',
    path: `${base}/notifications`,
    summary: 'My signals',
    auth: 'session',
    query: NotificationListQuery,
    response: NotificationPageDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  unreadCount: defineEndpoint({
    id: 'notifications.unreadCount',
    owner: 'WP-43',
    method: 'GET',
    path: `${base}/notifications/unread-count`,
    summary: 'Unread count (polling fallback when SSE fails)',
    auth: 'session',
    response: UnreadCountDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  markRead: defineEndpoint({
    id: 'notifications.markRead',
    owner: 'WP-43',
    method: 'POST',
    path: `${base}/notifications/read`,
    summary: 'Mark signals as read',
    auth: 'session',
    body: MarkReadBody,
    response: UnreadCountDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.noStore,
  }),
  preferences: defineEndpoint({
    id: 'notifications.preferences',
    owner: 'WP-43',
    method: 'GET',
    path: `${base}/notification-preferences`,
    summary: 'Preference matrix',
    auth: 'session',
    response: NotificationPreferencesDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  updatePreferences: defineEndpoint({
    id: 'notifications.updatePreferences',
    owner: 'WP-43',
    method: 'PUT',
    path: `${base}/notification-preferences`,
    summary: 'Change preferences',
    auth: 'session',
    body: UpdateNotificationPreferencesBody,
    response: NotificationPreferencesDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.noStore,
  }),
  unsubscribe: defineEndpoint({
    id: 'notifications.unsubscribe',
    owner: 'WP-43',
    method: 'POST',
    path: `${base}/unsubscribe`,
    summary: 'One-click unsubscribe (RFC 8058)',
    description:
      'Target of `List-Unsubscribe-Post: List-Unsubscribe=One-Click`. The signed token identifies user and type; any body ' +
      '(form-encoded `List-Unsubscribe=One-Click`) is accepted and ignored, and the CSRF check does not apply.',
    auth: 'public',
    requires: ['signed_token'],
    query: z.object({ token: z.string().min(16).max(1024) }),
    responseKind: 'empty',
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.noStore,
  }),
} as const;
