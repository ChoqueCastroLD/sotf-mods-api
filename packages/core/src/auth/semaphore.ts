/**
 * Counting semaphore with a bounded wait (PLAN §6.10): at most `limit` argon2/bcrypt operations run
 * at once (each argon2id hash holds 64 MiB), and a caller that waits longer than `timeoutMs` gets
 * `UNAVAILABLE` (503) instead of piling up behind a login storm.
 */
import { errors } from '../kernel/errors.ts';

interface Waiter {
  resolve: () => void;
  timer: NodeJS.Timeout;
}

export class Semaphore {
  readonly limit: number;
  readonly timeoutMs: number;
  #active = 0;
  readonly #queue: Waiter[] = [];

  constructor(limit: number, timeoutMs = 5000) {
    if (!Number.isInteger(limit) || limit < 1) throw new TypeError(`invalid semaphore limit ${limit}`);
    this.limit = limit;
    this.timeoutMs = timeoutMs;
  }

  /** Operations running right now. */
  get active(): number {
    return this.#active;
  }

  /** Callers waiting for a slot. */
  get waiting(): number {
    return this.#queue.length;
  }

  async #acquire(): Promise<void> {
    if (this.#active < this.limit) {
      this.#active += 1;
      return;
    }
    await new Promise<void>((resolve, reject) => {
      const waiter: Waiter = {
        resolve,
        timer: setTimeout(() => {
          const index = this.#queue.indexOf(waiter);
          if (index >= 0) this.#queue.splice(index, 1);
          reject(errors.unavailable('Too many sign-ins at once, try again in a few seconds', 5));
        }, this.timeoutMs),
      };
      this.#queue.push(waiter);
    });
  }

  #release(): void {
    const next = this.#queue.shift();
    if (next) {
      clearTimeout(next.timer);
      // The slot passes directly to the next waiter (`#active` stays the same).
      next.resolve();
      return;
    }
    this.#active -= 1;
  }

  /** Runs `fn` inside a slot. */
  async run<T>(fn: () => Promise<T>): Promise<T> {
    await this.#acquire();
    try {
      return await fn();
    } finally {
      this.#release();
    }
  }
}
