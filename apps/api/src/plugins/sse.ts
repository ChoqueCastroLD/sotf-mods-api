/**
 * SSE hub (PLAN §2.9 "Tiempo real", §5.3): **one** LISTEN connection (`events` channel) for the
 * whole process, fan-out to the open streams by channel, and the authenticated route
 * `GET /api/v2/stream`.
 *
 * - Channels: `user:{id}` for every signed-in user and `moderation` for moderators/admins.
 * - Frames: `id:`/`event:`/`data:` (single-line JSON); heartbeat comment `: ping` every 25 s.
 * - `Last-Event-ID`: the hub keeps the last messages of each channel for a few minutes and replays
 *   those after the given id. If the id is unknown the client simply refetches (events only
 *   notify; the client invalidates its queries).
 * - Limits: a few streams per user (the oldest is closed when exceeded); streams are closed on
 *   shutdown so the server can drain.
 */
import * as sseModule from '@fastify/sse';
import { eventsEndpoints, SSE_HEARTBEAT_SECONDS, type SseChannel, sseChannel } from '@sotf/contracts';
import {
  encodeModLiveFrame,
  PG_EVENTS_CHANNEL,
  SSE_MOD_LIVE_MAX_SECONDS,
  SSE_USER_STREAM_MAX_SECONDS,
  type SseModLiveEvent,
  SseModLivePushData,
} from '@sotf/contracts/events';
import {
  encodeKitLiveFrame,
  kitSocialEndpoints,
  SSE_KIT_LIVE_MAX_SECONDS,
  SseKitLiveData,
  type SseKitLiveEvent,
} from '@sotf/contracts/kit-social';
import { decodeRealtimeMessage, hasRole, type Logger, type PgListener, type RealtimeMessage } from '@sotf/core';
import { getModLive } from '@sotf/core/catalog/index';
import { getKitLive } from '@sotf/core/kit-social/index';
import type { FastifyInstance, FastifyReply } from 'fastify';
import { catalogConfigOf } from '../modules/catalog/index.ts';
import { httpError } from './errors.ts';

export interface SseHubOptions {
  log: Logger;
  /** Heartbeat interval (ms). Default 25 s. */
  pingMs?: number;
  /** Replay window per channel. */
  replayMaxMessages?: number;
  replayMaxAgeMs?: number;
  /** Max concurrent streams per user. */
  maxStreamsPerUser?: number;
}

interface Stream {
  id: number;
  userId: number;
  channels: readonly SseChannel[];
  write(chunk: string): boolean;
  close(): void;
}

interface Buffered {
  at: number;
  message: RealtimeMessage;
}

export function formatFrame(message: RealtimeMessage): string {
  return `id: ${message.id}\nevent: ${message.event}\ndata: ${JSON.stringify(message.data)}\n\n`;
}

export class SseHub {
  readonly #log: Logger;
  readonly #pingMs: number;
  readonly #replayMax: number;
  readonly #replayAgeMs: number;
  readonly #maxPerUser: number;
  readonly #byChannel = new Map<SseChannel, Set<Stream>>();
  readonly #byUser = new Map<number, Stream[]>();
  readonly #history = new Map<SseChannel, Buffered[]>();
  #nextId = 1;
  #ping: NodeJS.Timeout | null = null;
  #detach: (() => void) | null = null;
  #closed = false;

  constructor(options: SseHubOptions) {
    this.#log = options.log;
    this.#pingMs = options.pingMs ?? SSE_HEARTBEAT_SECONDS * 1000;
    this.#replayMax = options.replayMaxMessages ?? 50;
    this.#replayAgeMs = options.replayMaxAgeMs ?? 5 * 60_000;
    this.#maxPerUser = options.maxStreamsPerUser ?? 6;
  }

  get streamCount(): number {
    let n = 0;
    for (const streams of this.#byUser.values()) n += streams.length;
    return n;
  }

  /** Subscribes the hub to the shared LISTEN connection. */
  attach(listener: PgListener): void {
    const off = listener.on(PG_EVENTS_CHANNEL, (payload) => {
      const message = decodeRealtimeMessage(payload);
      if (message) this.publish(message);
      else this.#log.warn('ignored malformed realtime message');
    });
    this.#detach = off;
  }

  start(): void {
    if (this.#ping) return;
    this.#ping = setInterval(() => this.#heartbeat(), this.#pingMs);
    this.#ping.unref();
  }

  /** Delivers a message to every stream subscribed to its channel (and keeps it for replay). */
  publish(message: RealtimeMessage): number {
    if (this.#closed) return 0;
    const now = Date.now();
    const history = this.#history.get(message.channel) ?? [];
    history.push({ at: now, message });
    while (history.length > this.#replayMax || (history[0] && now - history[0].at > this.#replayAgeMs)) history.shift();
    this.#history.set(message.channel, history);
    const streams = this.#byChannel.get(message.channel);
    if (!streams) return 0;
    const frame = formatFrame(message);
    for (const stream of streams) stream.write(frame);
    return streams.size;
  }

  /** Messages of the channels after `lastEventId` (empty when unknown or expired). */
  replay(channels: readonly SseChannel[], lastEventId: string): RealtimeMessage[] {
    const now = Date.now();
    const out: RealtimeMessage[] = [];
    for (const channel of channels) {
      const history = this.#history.get(channel);
      if (!history) continue;
      const index = history.findIndex((b) => b.message.id === lastEventId);
      if (index === -1) continue;
      for (const b of history.slice(index + 1)) if (now - b.at <= this.#replayAgeMs) out.push(b.message);
    }
    return out;
  }

  /** Registers a stream; returns the unsubscribe function. */
  add(userId: number, channels: readonly SseChannel[], io: Pick<Stream, 'write' | 'close'>): () => void {
    const stream: Stream = { id: this.#nextId++, userId, channels, ...io };
    const mine = this.#byUser.get(userId) ?? [];
    mine.push(stream);
    this.#byUser.set(userId, mine);
    for (const channel of channels) {
      let set = this.#byChannel.get(channel);
      if (!set) {
        set = new Set();
        this.#byChannel.set(channel, set);
      }
      set.add(stream);
    }
    while (mine.length > this.#maxPerUser) mine[0]?.close();
    return () => this.#remove(stream);
  }

  #remove(stream: Stream): void {
    for (const channel of stream.channels) {
      const set = this.#byChannel.get(channel);
      set?.delete(stream);
      if (set && set.size === 0) this.#byChannel.delete(channel);
    }
    const mine = this.#byUser.get(stream.userId);
    if (mine) {
      const index = mine.indexOf(stream);
      if (index >= 0) mine.splice(index, 1);
      if (mine.length === 0) this.#byUser.delete(stream.userId);
    }
  }

  #heartbeat(): void {
    for (const streams of this.#byUser.values()) for (const stream of [...streams]) stream.write(': ping\n\n');
  }

  #closeHooks: Array<() => void> = [];

  /** Runs `hook` on shutdown (streams that do not go through the hub's channels). */
  onClose(hook: () => void): void {
    this.#closeHooks.push(hook);
  }

  /** Closes every stream and stops the heartbeat (graceful shutdown). */
  close(): void {
    this.#closed = true;
    for (const hook of this.#closeHooks) hook();
    if (this.#ping) clearInterval(this.#ping);
    this.#ping = null;
    this.#detach?.();
    for (const streams of [...this.#byUser.values()]) for (const stream of [...streams]) stream.close();
  }
}

/** Channels a user may listen to. */
export function channelsFor(actor: { userId: number; role: 'user' | 'moderator' | 'admin' }): SseChannel[] {
  const channels: SseChannel[] = [`user:${actor.userId}`];
  if (hasRole({ ...actor, emailVerified: true }, 'moderator')) channels.push('moderation');
  return channels;
}

export async function setupSse(
  app: FastifyInstance,
  hub: SseHub,
  options: { maxLifetimeMs?: number } = {},
): Promise<void> {
  const maxLifetimeMs = options.maxLifetimeMs ?? SSE_USER_STREAM_MAX_SECONDS * 1000;
  // The package's default export (module.exports) is the fastify-plugin wrapped version, whose
  // onRoute hook must reach the root instance; its named `fastifySSE` export is not wrapped.
  const plugin = (sseModule as unknown as { default: typeof sseModule.fastifySSE }).default;
  await app.register(plugin, { heartbeatInterval: 0 });
  const endpoint = eventsEndpoints.stream;
  app.route({
    method: endpoint.method,
    url: endpoint.path,
    config: { endpoint },
    sse: { kind: 'manual', heartbeat: false },
    handler: async (request, reply: FastifyReply) => {
      const actor = request.actor;
      // enforceAuth already guarantees a session; this narrows the type.
      if (!actor) throw new Error('unreachable: stream without actor');
      const context = reply.sse;
      if (!context) throw new Error('@fastify/sse did not decorate the reply');
      const channels = channelsFor(actor);
      reply.header('cache-control', 'no-store');
      // Cookie-authenticated stream: same-origin only (onSend hooks do not run for raw streams).
      reply.removeHeader('access-control-allow-origin');
      reply.removeHeader('access-control-expose-headers');
      reply.header('x-accel-buffering', 'no');
      context.keepAlive();
      context.sendHeaders(200);
      const raw = reply.raw;
      let open = true;
      const write = (chunk: string) => (open ? raw.write(chunk) : false);
      const close = () => {
        if (!open) return;
        open = false;
        clearTimeout(recycle);
        unsubscribe();
        context.close();
        raw.end();
      };
      const unsubscribe = hub.add(actor.userId, channels, { write, close });
      // The session was checked once, on connect: recycle the stream so it is checked again.
      const recycle = setTimeout(close, maxLifetimeMs);
      recycle.unref();
      context.onClose(() => {
        open = false;
        clearTimeout(recycle);
        unsubscribe();
      });
      // Reconnect after 5 s by default; the first comment flushes the headers through proxies.
      write(`retry: 5000\n: connected ${channels.join(' ')}\n\n`);
      const last = request.headers['last-event-id'];
      const lastId = Array.isArray(last) ? last[0] : last;
      if (lastId) for (const message of hub.replay(channels, lastId)) write(formatFrame(message));
    },
  });
}

/** Public mod streams open at once per client IP (a mod page needs one). */
const MOD_LIVE_STREAMS_PER_IP = 4;

/**
 * `GET /api/v2/mods/:id/live/stream` (public, cookieless): the live counters of one reachable mod.
 * Event-driven: the stream subscribes to the hub's `mod:{id}` channel (published on every flushed
 * download) and, on connect and on each push, writes the full counters (downloads, downloads24h,
 * followers; the 24 h and follower figures come from the `getModLive` LRU). Streams are recycled
 * every 10 minutes and closed on shutdown; the hub heartbeat keeps proxies open.
 */
export async function setupModLiveStream(app: FastifyInstance, hub: SseHub): Promise<void> {
  const endpoint = eventsEndpoints.modLiveStream;
  const config = catalogConfigOf(app.platform.env);
  const perIp = new Map<string, number>();
  const closers = new Set<() => void>();
  // Anonymous streams get unique negative ids so the hub's per-user cap never applies to them.
  let anonymousId = 0;
  hub.onClose(() => {
    for (const close of [...closers]) close();
  });
  app.route({
    method: endpoint.method,
    url: endpoint.path,
    config: { endpoint },
    sse: { kind: 'manual', heartbeat: false },
    handler: async (request, reply: FastifyReply) => {
      const parsed = endpoint.params.safeParse(request.params);
      if (!parsed.success) throw httpError('NOT_FOUND');
      const modId = parsed.data.id;
      const ip = request.clientIp;
      if ((perIp.get(ip) ?? 0) >= MOD_LIVE_STREAMS_PER_IP) throw httpError('RATE_LIMITED');
      // Throws NOT_FOUND for an unreachable mod before any byte is streamed.
      const initial = await getModLive(request.ctx, config, modId);
      const context = reply.sse;
      if (!context) throw new Error('@fastify/sse did not decorate the reply');
      reply.header('cache-control', 'no-store');
      reply.header('x-accel-buffering', 'no');
      context.keepAlive();
      context.sendHeaders(200);
      const raw = reply.raw;
      perIp.set(ip, (perIp.get(ip) ?? 0) + 1);
      let open = true;
      let seq = 1;
      const frame = (live: typeof initial): string => {
        const event: SseModLiveEvent = {
          event: 'mod.live',
          id: String(seq++),
          data: { modId, downloads: live.downloads, downloads24h: live.downloads24h, followers: live.followers },
        };
        return encodeModLiveFrame(event);
      };
      const release = () => {
        if (!open) return;
        open = false;
        clearTimeout(recycle);
        unsubscribe();
        closers.delete(close);
        const left = (perIp.get(ip) ?? 1) - 1;
        if (left <= 0) perIp.delete(ip);
        else perIp.set(ip, left);
      };
      const close = () => {
        if (!open) return;
        release();
        context.close();
        raw.end();
      };
      // Pushes of the bus carry the fresh download total; the other counters come from the cache.
      let pending: Promise<void> = Promise.resolve();
      const onPush = (downloads: number) => {
        pending = pending.then(async () => {
          if (!open) return;
          try {
            const live = await getModLive(request.ctx, config, modId);
            if (open) raw.write(frame({ ...live, downloads: Math.max(downloads, live.downloads) }));
          } catch {
            close();
          }
        });
      };
      const unsubscribe = hub.add(--anonymousId, [sseChannel.mod(modId)], {
        write: (chunk) => {
          if (!open) return false;
          if (chunk.startsWith(': ping')) return raw.write(chunk);
          // Only `mod.live` frames of this channel reach the stream; parse the pushed total.
          const data = /\ndata: (.*)\n/.exec(chunk)?.[1];
          const pushed = data ? SseModLivePushData.safeParse(JSON.parse(data)) : null;
          if (pushed?.success) onPush(pushed.data.downloads);
          return true;
        },
        close,
      });
      const recycle = setTimeout(close, SSE_MOD_LIVE_MAX_SECONDS * 1000);
      recycle.unref();
      closers.add(close);
      context.onClose(release);
      // The first frame carries the current figures so the page can reconcile at once.
      raw.write(`retry: 10000\n${frame(initial)}`);
    },
  });
}

const KIT_LIVE_STREAMS_PER_IP = 4;

/**
 * `GET /api/v2/kits/:id/live/stream`: the public, cookieless stream of a kit page. Sends
 * `kit.live` (followers, visible comments) on connect and on every push of `kit:{id}` (published
 * inside the transaction of each follow or comment change). Same limits and recycling as the mod
 * live stream.
 */
export async function setupKitLiveStream(app: FastifyInstance, hub: SseHub): Promise<void> {
  const endpoint = kitSocialEndpoints.liveStream;
  const perIp = new Map<string, number>();
  const closers = new Set<() => void>();
  let anonymousId = 0;
  hub.onClose(() => {
    for (const close of [...closers]) close();
  });
  app.route({
    method: endpoint.method,
    url: endpoint.path,
    config: { endpoint },
    sse: { kind: 'manual', heartbeat: false },
    handler: async (request, reply: FastifyReply) => {
      const parsed = endpoint.params.safeParse(request.params);
      if (!parsed.success) throw httpError('NOT_FOUND');
      const kitId = parsed.data.id;
      const ip = request.clientIp;
      if ((perIp.get(ip) ?? 0) >= KIT_LIVE_STREAMS_PER_IP) throw httpError('RATE_LIMITED');
      // Throws NOT_FOUND for a kit the public cannot see, before any byte is streamed.
      const initial = await getKitLive(request.ctx, kitId);
      const context = reply.sse;
      if (!context) throw new Error('@fastify/sse did not decorate the reply');
      reply.header('cache-control', 'no-store');
      reply.header('x-accel-buffering', 'no');
      context.keepAlive();
      context.sendHeaders(200);
      const raw = reply.raw;
      perIp.set(ip, (perIp.get(ip) ?? 0) + 1);
      let open = true;
      let seq = 1;
      const frame = (live: { followers: number; comments: number }): string => {
        const event: SseKitLiveEvent = {
          event: 'kit.live',
          id: String(seq++),
          data: { kitId, followers: live.followers, comments: live.comments },
        };
        return encodeKitLiveFrame(event);
      };
      const release = () => {
        if (!open) return;
        open = false;
        clearTimeout(recycle);
        unsubscribe();
        closers.delete(close);
        const left = (perIp.get(ip) ?? 1) - 1;
        if (left <= 0) perIp.delete(ip);
        else perIp.set(ip, left);
      };
      const close = () => {
        if (!open) return;
        release();
        context.close();
        raw.end();
      };
      const unsubscribe = hub.add(--anonymousId, [sseChannel.kit(kitId)], {
        write: (chunk) => {
          if (!open) return false;
          if (chunk.startsWith(': ping')) return raw.write(chunk);
          // Pushed frames carry the fresh counters of the kit.
          const data = /\ndata: (.*)\n/.exec(chunk)?.[1];
          const pushed = data ? SseKitLiveData.safeParse(JSON.parse(data)) : null;
          if (pushed?.success) raw.write(frame(pushed.data));
          return true;
        },
        close,
      });
      const recycle = setTimeout(close, SSE_KIT_LIVE_MAX_SECONDS * 1000);
      recycle.unref();
      closers.add(close);
      context.onClose(release);
      raw.write(`retry: 10000\n${frame(initial)}`);
    },
  });
}
