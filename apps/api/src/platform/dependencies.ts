/**
 * External dependencies of an API process: the pg-boss producer (no workers, no maintenance, no
 * schema migration: `migrate: false`; `db:migrate` installs the schema) and the shared LISTEN
 * connection. They start in the background with retries so the HTTP server answers `/healthz`
 * while the database is unreachable; `/readyz` reports them.
 */
import { ensureQueues, type Logger, type PgListener } from '@sotf/core';
import { PgBoss } from 'pg-boss';

export interface BossOptions {
  connectionString: string;
  schema: string;
  applicationName?: string;
  /** Pool of the producer (sends inside app transactions use the app pool instead). */
  max?: number;
}

/** A pg-boss instance configured as a pure producer. */
export function createProducerBoss(options: BossOptions): PgBoss {
  return new PgBoss({
    connectionString: options.connectionString,
    schema: options.schema,
    application_name: options.applicationName ?? 'sotf-api-boss',
    max: options.max ?? 2,
    migrate: false,
    createSchema: false,
    supervise: false,
    schedule: false,
    options: '-c TimeZone=UTC',
  });
}

export class Dependencies {
  readonly #boss: PgBoss | null;
  readonly #listener: PgListener | null;
  readonly #log: Logger;
  #bossReady = false;
  #stopped = false;
  #retry: NodeJS.Timeout | null = null;
  #attempt = 0;
  #starting: Promise<void> | null = null;

  constructor(boss: PgBoss | null, listener: PgListener | null, log: Logger) {
    this.#boss = boss;
    this.#listener = listener;
    this.#log = log;
    boss?.on('error', (error) => this.#log.error({ err: error }, 'pg-boss error'));
  }

  get bossReady(): boolean {
    return this.#boss === null || this.#bossReady;
  }

  get listening(): boolean {
    return this.#listener === null || this.#listener.connected;
  }

  /**
   * Starts pg-boss (and makes sure every queue exists) and the listener. `wait: true` resolves once
   * both are up or throws; otherwise failures are retried in the background.
   */
  start(options: { wait: boolean }): Promise<void> {
    this.#starting ??= this.#startOnce(options.wait);
    return this.#starting;
  }

  async #startOnce(wait: boolean): Promise<void> {
    const listening = this.#listener?.start();
    if (wait) {
      await listening;
      await this.#startBoss();
      if (this.#listener && !this.#listener.connected) throw new Error('LISTEN connection failed');
      return;
    }
    void this.#bossLoop();
  }

  async #startBoss(): Promise<void> {
    if (!this.#boss || this.#bossReady) return;
    await this.#boss.start();
    await ensureQueues(this.#boss);
    this.#bossReady = true;
    this.#log.info('pg-boss producer ready');
  }

  async #bossLoop(): Promise<void> {
    if (this.#stopped) return;
    try {
      await this.#startBoss();
      this.#attempt = 0;
    } catch (error) {
      this.#attempt += 1;
      const delay = Math.min(30_000, 500 * 2 ** (this.#attempt - 1));
      this.#log.warn({ err: error, retryInMs: delay }, 'pg-boss not ready');
      // A failed start leaves pg-boss half-initialised: stop it before retrying.
      await this.#boss?.stop({ graceful: false, close: false }).catch(() => undefined);
      this.#retry = setTimeout(() => void this.#bossLoop(), delay);
      this.#retry.unref();
    }
  }

  async stop(): Promise<void> {
    this.#stopped = true;
    if (this.#retry) clearTimeout(this.#retry);
    await this.#listener?.stop();
    if (this.#boss) await this.#boss.stop({ graceful: true, timeout: 5000 }).catch(() => undefined);
    this.#bossReady = false;
  }
}
