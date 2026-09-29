/**
 * Clock (PLAN §2.6 "Tiempo"): every service reads time through a `Clock` so tests can freeze or
 * move it. Times are UTC; serialise with `toISOString()`.
 */
export interface Clock {
  now(): Date;
}

export const systemClock: Clock = { now: () => new Date() };

/** A controllable clock for tests. */
export class ManualClock implements Clock {
  #ms: number;
  constructor(start: Date | string | number = '2026-01-01T00:00:00.000Z') {
    this.#ms = new Date(start).getTime();
  }
  now(): Date {
    return new Date(this.#ms);
  }
  set(to: Date | string | number): void {
    this.#ms = new Date(to).getTime();
  }
  advance(ms: number): void {
    this.#ms += ms;
  }
}

/** `YYYY-MM-DD` of an instant in UTC. */
export function utcDay(date: Date): string {
  return date.toISOString().slice(0, 10);
}
