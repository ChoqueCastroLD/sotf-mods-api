/**
 * Realtime stream of the console (PLAN §2.9, §5.3): `GET /api/v2/stream` over EventSource.
 *
 * Events only *notify*; the console reacts by updating or invalidating TanStack Query caches
 * (`applyStreamEvent`). Connection policy:
 *
 * - The browser reconnects by itself after a dropped connection, sending `Last-Event-ID` (the API
 *   replays what the tab missed and sets `retry: 5000`).
 * - If the server refuses the connection (EventSource gives up: 401, 5xx, proxy error), the
 *   client reconnects with exponential backoff (1 s → 60 s, jittered).
 * - After {@link POLLING_AFTER_FAILURES} failures in a row without an open connection the status
 *   becomes `polling`: the caller polls the unread count every `SSE_FALLBACK_POLL_SECONDS` while
 *   reconnection attempts continue in the background.
 * - Every re-open after the first one calls `onReconnect` (refetch what may have been missed:
 *   the replay window of the API is short and lost on restarts).
 * - The caller closes the stream on `pagehide` (keeps the page bfcache-eligible) and starts it
 *   again on `pageshow`.
 *
 * Framework-free (the React side is `hooks/use-stream.ts`), so it can run against a fake
 * EventSource.
 */
import type { SseEvent } from '@sotf/contracts/events';
import type { QueryClient, QueryKey } from '@tanstack/react-query';
import { queryKeys } from './query-keys.ts';

export type StreamStatus = 'idle' | 'connecting' | 'open' | 'reconnecting' | 'polling';

export const POLLING_AFTER_FAILURES = 3;
export const RECONNECT_BASE_MS = 1000;
export const RECONNECT_MAX_MS = 60_000;

/** Names of the events of PLAN §5.3 (`ping` is a comment and never reaches listeners). */
export const STREAM_EVENTS = ['notification', 'mod.updated', 'moderation.queue'] as const;

/** Structural subset of `EventSource` (the browser one, or a fake in tests). */
export interface EventSourceLike {
  readonly readyState: number;
  onopen: ((event: Event) => void) | null;
  onerror: ((event: Event) => void) | null;
  addEventListener(type: string, listener: (event: MessageEvent<string>) => void): void;
  close(): void;
}

export interface StreamClientOptions {
  url: string;
  onEvent: (event: SseEvent) => void;
  onStatus?: (status: StreamStatus) => void;
  onReconnect?: () => void;
  createEventSource?: (url: string) => EventSourceLike;
  /** Timer functions (tests). */
  setTimer?: (callback: () => void, ms: number) => unknown;
  clearTimer?: (handle: unknown) => void;
  random?: () => number;
}

const CLOSED = 2;

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

const isCount = (value: unknown): value is number => typeof value === 'number' && Number.isInteger(value) && value >= 0;
const isId = (value: unknown): value is number => typeof value === 'number' && Number.isInteger(value) && value > 0;

/**
 * Parses one received message into an {@link SseEvent}; null when the name is unknown or the data
 * does not have the documented shape (structural check: the shell does not ship Zod).
 */
export function parseStreamEvent(name: string, data: string, id = ''): SseEvent | null {
  let json: unknown;
  try {
    json = JSON.parse(data);
  } catch {
    return null;
  }
  if (!isRecord(json)) return null;
  switch (name) {
    case 'notification':
      if (!isId(json.id) || typeof json.type !== 'string' || !isCount(json.unreadCount)) return null;
      return { event: 'notification', id, data: json } as SseEvent;
    case 'mod.updated':
      if (!isId(json.modId)) return null;
      return { event: 'mod.updated', id, data: { modId: json.modId } };
    case 'moderation.queue':
      if (typeof json.lane !== 'string' || !isCount(json.count)) return null;
      return { event: 'moderation.queue', id, data: json } as SseEvent;
    default:
      return null;
  }
}

/** Backoff before the n-th (1-based) manual reconnection: 1 s, 2 s, 4 s … 60 s, ±20 % jitter. */
export function reconnectDelay(attempt: number, random: () => number = Math.random): number {
  const base = Math.min(RECONNECT_MAX_MS, RECONNECT_BASE_MS * 2 ** Math.max(0, attempt - 1));
  const jitter = 0.8 + random() * 0.4;
  return Math.round(Math.min(RECONNECT_MAX_MS, base * jitter));
}

export class StreamClient {
  readonly #options: StreamClientOptions;
  #source: EventSourceLike | null = null;
  #status: StreamStatus = 'idle';
  #failures = 0;
  #attempts = 0;
  #everOpened = false;
  #timer: unknown = null;
  #running = false;

  constructor(options: StreamClientOptions) {
    this.#options = options;
  }

  get status(): StreamStatus {
    return this.#status;
  }

  /** Opens the stream (no-op while running). */
  start(): void {
    if (this.#running) return;
    this.#running = true;
    this.#failures = 0;
    this.#attempts = 0;
    this.#setStatus(this.#everOpened ? 'reconnecting' : 'connecting');
    this.#connect();
  }

  /** Closes the stream and cancels pending reconnections. */
  stop(): void {
    this.#running = false;
    this.#clearTimer();
    this.#source?.close();
    this.#source = null;
    this.#setStatus('idle');
  }

  /** Forces an immediate reconnection attempt (the browser came back online). */
  retryNow(): void {
    if (!this.#running || this.#status === 'open') return;
    this.#clearTimer();
    this.#source?.close();
    this.#source = null;
    this.#connect();
  }

  #connect(): void {
    const create = this.#options.createEventSource ?? ((url: string) => new EventSource(url) as EventSourceLike);
    let source: EventSourceLike;
    try {
      source = create(this.#options.url);
    } catch {
      this.#fail(true);
      return;
    }
    this.#source = source;
    source.onopen = () => {
      if (this.#source !== source) return;
      const reopened = this.#everOpened;
      this.#everOpened = true;
      this.#failures = 0;
      this.#attempts = 0;
      this.#setStatus('open');
      if (reopened) this.#options.onReconnect?.();
    };
    source.onerror = () => {
      if (this.#source !== source) return;
      // CONNECTING: the browser is retrying by itself (with Last-Event-ID). CLOSED: it gave up.
      const gaveUp = source.readyState === CLOSED;
      if (gaveUp) {
        source.close();
        this.#source = null;
      }
      this.#fail(gaveUp);
    };
    for (const name of STREAM_EVENTS) {
      source.addEventListener(name, (message) => {
        if (this.#source !== source) return;
        const event = parseStreamEvent(name, message.data, message.lastEventId);
        if (event) this.#options.onEvent(event);
      });
    }
  }

  #fail(scheduleReconnect: boolean): void {
    if (!this.#running) return;
    this.#failures += 1;
    this.#setStatus(this.#failures >= POLLING_AFTER_FAILURES ? 'polling' : 'reconnecting');
    if (!scheduleReconnect) return;
    this.#attempts += 1;
    const delay = reconnectDelay(this.#attempts, this.#options.random);
    const setTimer = this.#options.setTimer ?? ((callback: () => void, ms: number) => setTimeout(callback, ms));
    this.#clearTimer();
    this.#timer = setTimer(() => {
      this.#timer = null;
      if (this.#running && !this.#source) this.#connect();
    }, delay);
  }

  #clearTimer(): void {
    if (this.#timer === null) return;
    const clearTimer = this.#options.clearTimer ?? ((handle: unknown) => clearTimeout(handle as number));
    clearTimer(this.#timer);
    this.#timer = null;
  }

  #setStatus(status: StreamStatus): void {
    if (status === this.#status) return;
    this.#status = status;
    this.#options.onStatus?.(status);
  }
}

// -----------------------------------------------------------------------------------------------
// Cache reactions
// -----------------------------------------------------------------------------------------------

interface MeLike {
  unreadNotifications: number;
}

const isUnreadCountKey = (key: QueryKey) => key[0] === 'notifications' && key[1] === 'unread-count';

/** Applies the new unread count everywhere it is shown (`/me` and the unread-count query). */
export function setUnreadCount(queryClient: QueryClient, count: number): void {
  queryClient.setQueryData<MeLike>(queryKeys.me, (me) => (me ? { ...me, unreadNotifications: count } : me));
  queryClient.setQueryData(queryKeys.unreadCount, { count });
}

/** Updates or invalidates the caches an event concerns. */
export function applyStreamEvent(queryClient: QueryClient, event: SseEvent): void {
  switch (event.event) {
    case 'notification':
      setUnreadCount(queryClient, event.data.unreadCount);
      void queryClient.invalidateQueries({
        queryKey: queryKeys.notifications,
        predicate: (query) => !isUnreadCountKey(query.queryKey),
      });
      break;
    case 'mod.updated':
      // The mod itself and every list it appears in (lists key their filters under the prefix).
      void queryClient.invalidateQueries({ queryKey: queryKeys.studioMods });
      break;
    case 'moderation.queue':
      void queryClient.invalidateQueries({ queryKey: queryKeys.moderation });
      break;
  }
}

/** After a reconnection: refetch everything an event could have changed while disconnected. */
export function invalidateLiveQueries(queryClient: QueryClient): void {
  for (const queryKey of [queryKeys.me, queryKeys.notifications, queryKeys.studioMods, queryKeys.moderation]) {
    void queryClient.invalidateQueries({ queryKey });
  }
}
