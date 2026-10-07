/**
 * Client-facing events: the SSE stream (PLAN §5.3, §2.9) and the analytics/RUM beacon (PLAN §7.1
 * "Eventos de analítica de producto", §8.8, §9.3). Stream hub by WP-20, beacon ingestion by WP-52.
 *
 * SSE events only *notify*: the client invalidates its TanStack Query caches. Heartbeat comment
 * `: ping` every 25 s; reconnection with `Last-Event-ID`; closed on `pagehide` (bfcache).
 * The beacon is `text/plain` carrying JSON (no preflight, no cookies needed); it is dropped when
 * `Sec-GPC: 1` or DNT is set.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { EntityId, IdParam, Locale } from './common.ts';
import { dto } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';
import { SseKitLiveData } from './kit-social.ts';
import { ModerationLane } from './moderation.ts';
import { NotificationType } from './notifications.ts';

// -----------------------------------------------------------------------------------------------
// SSE
// -----------------------------------------------------------------------------------------------

export const SSE_HEARTBEAT_SECONDS = 25;
/**
 * The signed-in stream (`GET /stream`) is closed after this long and the browser's EventSource
 * reconnects with its cookie: a revoked session, a ban or a demoted ranger stops receiving signals
 * within this window instead of whenever the tab is closed.
 */
export const SSE_USER_STREAM_MAX_SECONDS = 900;
/** Polling interval of `unread-count` when SSE fails (seconds). */
export const SSE_FALLBACK_POLL_SECONDS = 60;
/** Postgres NOTIFY channel shared by API and worker. */
export const PG_EVENTS_CHANNEL = 'events';
/** Postgres NOTIFY channel that clears the API LRU. */
export const PG_CACHE_CHANNEL = 'cache';

/** SSE channels: `user:{id}`, `moderation` and `mod:{id}` (public, read-only live counters). */
export type SseChannel = `user:${number}` | 'moderation' | `mod:${number}` | `kit:${number}`;
export const sseChannel = {
  user: (id: number): SseChannel => `user:${id}`,
  moderation: 'moderation' as SseChannel,
  mod: (id: number): SseChannel => `mod:${id}`,
  kit: (id: number): SseChannel => `kit:${id}`,
} as const;

export const SseNotificationData = z.object({
  id: EntityId,
  type: NotificationType,
  unreadCount: z.number().int().nonnegative(),
});
export const SseModUpdatedData = z.object({ modId: EntityId });
/** Live total of a mod's downloads, pushed to `mod:{id}` (public stream `GET /mods/:id/live/stream`). */
export const SseModLivePushData = z.object({ modId: EntityId, downloads: z.number().int().nonnegative() });
export const SseModerationQueueData = z.object({ lane: ModerationLane, count: z.number().int().nonnegative() });

/** Every SSE event: `event:` name → `data:` JSON. */
export const SSE_EVENTS = {
  notification: SseNotificationData,
  'mod.updated': SseModUpdatedData,
  'moderation.queue': SseModerationQueueData,
  'mod.live': SseModLivePushData,
  'kit.live': SseKitLiveData,
} as const;
export type SseEventName = keyof typeof SSE_EVENTS;

/** `mod.live` on the public per-mod stream (`GET /mods/:id/live/stream`): absolute live counters. */
export const SseModLiveData = z.object({
  modId: EntityId,
  downloads: z.number().int().nonnegative(),
  downloads24h: z.number().int().nonnegative(),
  followers: z.number().int().nonnegative(),
});
export const SseModLiveEventDTO = dto(
  'SseModLiveEventDTO',
  z.object({ event: z.literal('mod.live'), id: z.string(), data: SseModLiveData }),
  {
    description: 'Live counters of the public mod stream: sent on connect and on every counted download.',
    examples: [
      { event: 'mod.live', id: '1', data: { modId: 42, downloads: 117_812, downloads24h: 203, followers: 24 } },
    ],
  },
);
export type SseModLiveEvent = z.infer<typeof SseModLiveEventDTO>;
/** A public mod stream is closed after this long; the client's EventSource reconnects. */
export const SSE_MOD_LIVE_MAX_SECONDS = 600;

/** Encodes a `mod.live` frame. */
export function encodeModLiveFrame(event: SseModLiveEvent): string {
  return `id: ${event.id}\nevent: ${event.event}\ndata: ${JSON.stringify(event.data)}\n\n`;
}

export const SseEventDTO = dto(
  'SseEventDTO',
  z.discriminatedUnion('event', [
    z.object({ event: z.literal('notification'), id: z.string(), data: SseNotificationData }),
    z.object({ event: z.literal('mod.updated'), id: z.string(), data: SseModUpdatedData }),
    z.object({ event: z.literal('moderation.queue'), id: z.string(), data: SseModerationQueueData }),
    z.object({ event: z.literal('mod.live'), id: z.string(), data: SseModLivePushData }),
    z.object({ event: z.literal('kit.live'), id: z.string(), data: SseKitLiveData }),
  ]),
  {
    description: 'One server-sent event (`id:` enables `Last-Event-ID` resumption).',
    examples: [
      { event: 'notification', id: '5001', data: { id: 5001, type: 'comment.on_my_mod', unreadCount: 3 } },
      { event: 'moderation.queue', id: '9', data: { lane: 'versions', count: 1 } },
    ],
  },
);
export type SseEvent = z.infer<typeof SseEventDTO>;

/** Encodes an SSE frame (`id`, `event`, `data`; data is single-line JSON). */
export function encodeSseFrame(event: SseEvent): string {
  return `id: ${event.id}\nevent: ${event.event}\ndata: ${JSON.stringify(event.data)}\n\n`;
}

/** Parses the `event`/`data` of a received SSE message; null when unknown or invalid. */
export function parseSseMessage(eventName: string, data: string, id = ''): SseEvent | null {
  let json: unknown;
  try {
    json = JSON.parse(data);
  } catch {
    return null;
  }
  const parsed = SseEventDTO.safeParse({ event: eventName, id, data: json });
  return parsed.success ? parsed.data : null;
}

// -----------------------------------------------------------------------------------------------
// Beacon (product analytics, PLAN §7.1)
// -----------------------------------------------------------------------------------------------

export const ANALYTICS_EVENT_KINDS = [
  'page_view',
  'search',
  'filter_apply',
  'mod_view',
  'download_click',
  'download_redirect',
  'install_modal_open',
  'compat_prompt_shown',
  'compat_prompt_answered',
  'review_submit',
  'comment_submit',
  'follow',
  'kit_create',
  'notification_open',
  'signup',
  'email_verified',
  'publish_step_1',
  'publish_step_2',
  'publish_step_3',
  'publish_step_4',
  'publish_step_5',
  'publish_step_6',
  'version_publish',
  'cmdk_open',
  'cmdk_select',
  /** `window.onerror` / unhandled rejections of public pages (props: `message`, `source`, `line`). */
  'client_error',
] as const;
export const AnalyticsEventKind = z.enum(ANALYTICS_EVENT_KINDS);
export type AnalyticsEventKind = z.infer<typeof AnalyticsEventKind>;

/** Kinds recorded by the server itself (never accepted from the beacon). */
export const SERVER_ONLY_EVENT_KINDS: readonly AnalyticsEventKind[] = [
  'download_redirect',
  'signup',
  'email_verified',
  'version_publish',
];

export const BeaconEvent = z.strictObject({
  kind: AnalyticsEventKind.refine((kind) => !SERVER_ONLY_EVENT_KINDS.includes(kind), 'server-only event'),
  path: z.string().max(512).regex(/^\//),
  entityType: z.enum(['mod', 'build', 'kit', 'user', 'category', 'tag']).optional(),
  entityId: EntityId.optional(),
  locale: Locale.optional(),
  referrer: z.string().max(512).optional().describe('document.referrer; only the domain is stored'),
  props: z.record(z.string().max(40), z.union([z.string().max(200), z.number(), z.boolean()])).optional(),
});

export const BeaconBody = dto('BeaconBody', z.strictObject({ events: z.array(BeaconEvent).min(1).max(20) }), {
  description: 'Batch of product analytics events (sent as text/plain JSON with sendBeacon).',
  examples: [
    {
      events: [
        {
          kind: 'page_view',
          path: "/mods/imaxel/axel's-mod-menu",
          entityType: 'mod',
          entityId: 20,
          locale: 'en',
          referrer: 'https://www.google.com/',
        },
        {
          kind: 'download_click',
          path: "/mods/imaxel/axel's-mod-menu",
          entityType: 'mod',
          entityId: 20,
          props: { version: '1.3.8' },
        },
      ],
    },
  ],
});

export const WEB_VITAL_NAMES = ['LCP', 'INP', 'CLS', 'FCP', 'TTFB'] as const;

export const VitalsBody = dto(
  'VitalsBody',
  z.strictObject({
    template: z.string().max(40).describe('Page template (home, mod, explore…)'),
    path: z.string().max(512).regex(/^\//),
    metrics: z
      .array(
        z.strictObject({
          name: z.enum(WEB_VITAL_NAMES),
          value: z.number().nonnegative(),
          rating: z.enum(['good', 'needs-improvement', 'poor']),
          id: z.string().max(80),
          navigationType: z.string().max(40).optional(),
          attribution: z.record(z.string().max(40), z.union([z.string().max(300), z.number()])).optional(),
        }),
      )
      .min(1)
      .max(10),
  }),
  {
    description: 'Real-user Web Vitals (web-vitals with attribution).',
    examples: [
      {
        template: 'mod',
        path: "/mods/imaxel/axel's-mod-menu",
        metrics: [{ name: 'LCP', value: 1180, rating: 'good', id: 'v4-1727600000000-123' }],
      },
    ],
  },
);

export const eventsEndpoints = {
  modLiveStream: defineEndpoint({
    id: 'events.modLiveStream',
    owner: 'WP-20',
    method: 'GET',
    path: `${API_V2_PREFIX}/mods/:id/live/stream`,
    summary: 'Live counters of a mod over server-sent events',
    description:
      'Public, cookieless stream of `mod.live` events (downloads, downloads in 24 h, followers) for one reachable mod. ' +
      'Sent on connect and pushed whenever downloads of the mod are counted (event-driven), always with the full counters; the stream is recycled every 10 min.',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: SseModLiveEventDTO,
    responseKind: 'event-stream',
    errors: ['NOT_FOUND', 'RATE_LIMITED'],
    cache: cache.noStore,
  }),
  stream: defineEndpoint({
    id: 'events.stream',
    owner: 'WP-20',
    method: 'GET',
    path: `${API_V2_PREFIX}/stream`,
    summary: 'Server-sent events for the signed-in user',
    description: 'Channels: `user:{id}` (signals, counters) and `moderation` for rangers. Guests never open SSE.',
    auth: 'session',
    response: SseEventDTO,
    responseKind: 'event-stream',
    errors: ['UNAUTHENTICATED'],
    cache: cache.noStore,
  }),
  beacon: defineEndpoint({
    id: 'events.beacon',
    owner: 'WP-52',
    method: 'POST',
    path: `${API_V2_PREFIX}/e`,
    summary: 'Product analytics beacon',
    description:
      'Only exception to the JSON content-type CSRF rule (no account side effects). Excess traffic is dropped silently.',
    auth: 'public',
    body: BeaconBody,
    bodyKind: 'text',
    responseKind: 'empty',
    cache: cache.noStore,
    rateLimit: 'beacon',
  }),
  vitals: defineEndpoint({
    id: 'events.vitals',
    owner: 'WP-52',
    method: 'POST',
    path: `${API_V2_PREFIX}/e/vitals`,
    summary: 'Real-user Web Vitals beacon',
    auth: 'public',
    body: VitalsBody,
    bodyKind: 'text',
    responseKind: 'empty',
    cache: cache.noStore,
    rateLimit: 'beacon',
  }),
} as const;
