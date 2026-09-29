/**
 * One dedicated Postgres connection for `LISTEN` (PLAN §2.9): the API listens on `events` (SSE hub)
 * and `cache` (LRU invalidation) with a single connection and fans notifications out to in-process
 * handlers. The connection reconnects with exponential backoff; `onReconnect` handlers run after
 * every re-subscription so consumers can recover from notifications missed while disconnected.
 */
import pg from 'pg';
import type { Logger } from './logger.ts';

export type NotificationHandler = (payload: string) => void;

export interface PgListenerOptions {
  connectionString: string;
  applicationName?: string;
  log?: Logger;
  /** Backoff bounds (ms). */
  minDelayMs?: number;
  maxDelayMs?: number;
}

const CHANNEL = /^[a-z_][a-z0-9_]{0,62}$/;

export class PgListener {
  readonly #options: Required<Omit<PgListenerOptions, 'log'>> & { log?: Logger };
  readonly #handlers = new Map<string, Set<NotificationHandler>>();
  readonly #reconnectHandlers = new Set<() => void>();
  #client: pg.Client | null = null;
  #connected = false;
  #stopped = true;
  #attempt = 0;
  #timer: NodeJS.Timeout | null = null;
  #connecting: Promise<void> | null = null;

  constructor(options: PgListenerOptions) {
    this.#options = {
      applicationName: 'sotf-listen',
      minDelayMs: 500,
      maxDelayMs: 30_000,
      ...options,
    };
  }

  /** True while the connection is up and every channel is subscribed. */
  get connected(): boolean {
    return this.#connected;
  }

  /** Subscribes a handler; returns an unsubscribe function. */
  on(channel: string, handler: NotificationHandler): () => void {
    if (!CHANNEL.test(channel)) throw new TypeError(`invalid channel "${channel}"`);
    let set = this.#handlers.get(channel);
    if (!set) {
      set = new Set();
      this.#handlers.set(channel, set);
      if (this.#connected && this.#client) {
        this.#client.query(`LISTEN ${channel}`).catch((error: unknown) => this.#fail(error));
      }
    }
    set.add(handler);
    return () => {
      set.delete(handler);
    };
  }

  /** Runs after every successful (re)connection except the first one. */
  onReconnect(handler: () => void): () => void {
    this.#reconnectHandlers.add(handler);
    return () => this.#reconnectHandlers.delete(handler);
  }

  /** Connects (retrying in the background on failure). Resolves after the first attempt. */
  async start(): Promise<void> {
    if (!this.#stopped) return this.#connecting ?? undefined;
    this.#stopped = false;
    this.#connecting = this.#connect();
    await this.#connecting;
  }

  async stop(): Promise<void> {
    this.#stopped = true;
    if (this.#timer) clearTimeout(this.#timer);
    this.#timer = null;
    this.#connected = false;
    const client = this.#client;
    this.#client = null;
    if (client) await client.end().catch(() => undefined);
  }

  async #connect(): Promise<void> {
    const client = new pg.Client({
      connectionString: this.#options.connectionString,
      application_name: this.#options.applicationName,
      options: '-c TimeZone=UTC',
      keepAlive: true,
    });
    client.on('notification', (message) => {
      const set = this.#handlers.get(message.channel);
      if (!set) return;
      for (const handler of set) {
        try {
          handler(message.payload ?? '');
        } catch (error) {
          this.#options.log?.error({ err: error, channel: message.channel }, 'listener handler failed');
        }
      }
    });
    client.on('error', (error) => this.#fail(error));
    client.on('end', () => {
      if (this.#client === client) this.#fail(new Error('listener connection ended'));
    });
    try {
      await client.connect();
      for (const channel of this.#handlers.keys()) await client.query(`LISTEN ${channel}`);
      if (this.#stopped) {
        await client.end().catch(() => undefined);
        return;
      }
      this.#client = client;
      const reconnected = this.#attempt > 0;
      this.#attempt = 0;
      this.#connected = true;
      this.#options.log?.info({ channels: [...this.#handlers.keys()] }, 'listener connected');
      if (reconnected) for (const handler of this.#reconnectHandlers) handler();
    } catch (error) {
      await client.end().catch(() => undefined);
      this.#fail(error);
    }
  }

  #fail(error: unknown): void {
    if (this.#stopped) return;
    const client = this.#client;
    this.#client = null;
    this.#connected = false;
    if (client) client.end().catch(() => undefined);
    if (this.#timer) return;
    this.#attempt += 1;
    const delay = Math.min(this.#options.maxDelayMs, this.#options.minDelayMs * 2 ** (this.#attempt - 1));
    this.#options.log?.warn({ err: error, retryInMs: delay }, 'listener disconnected');
    this.#timer = setTimeout(() => {
      this.#timer = null;
      if (!this.#stopped) this.#connecting = this.#connect();
    }, delay);
    this.#timer.unref();
  }
}
