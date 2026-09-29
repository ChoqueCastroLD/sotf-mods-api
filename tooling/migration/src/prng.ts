/**
 * Deterministic pseudo-random numbers for the synthetic data (PLAN §6.12: fixed seed).
 * `sfc32` seeded through `splitmix32`: fast, good enough for test data, identical on every run.
 */

function splitmix32(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x9e3779b9) >>> 0;
    let z = state;
    z = Math.imul(z ^ (z >>> 16), 0x85ebca6b) >>> 0;
    z = Math.imul(z ^ (z >>> 13), 0xc2b2ae35) >>> 0;
    return (z ^ (z >>> 16)) >>> 0;
  };
}

export interface Rng {
  /** Uniform float in [0, 1). */
  next(): number;
  /** Uniform integer in [min, max] (inclusive). */
  int(min: number, max: number): number;
  /** One element of a non-empty array. */
  pick<T>(items: readonly T[]): T;
  /** `true` with probability `p`. */
  chance(p: number): boolean;
  /** A new independent generator derived from this generator's seed and a label. */
  fork(label: string): Rng;
}

function hashLabel(label: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < label.length; i += 1) {
    h ^= label.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

export function createRng(seed: number): Rng {
  const mix = splitmix32(seed);
  let a = mix();
  let b = mix();
  let c = mix();
  let d = mix();
  const nextU32 = () => {
    const t = (((a + b) >>> 0) + d) >>> 0;
    d = (d + 1) >>> 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) >>> 0;
    c = ((c << 21) | (c >>> 11)) >>> 0;
    c = (c + t) >>> 0;
    return t;
  };
  for (let i = 0; i < 12; i += 1) nextU32();
  const rng: Rng = {
    next: () => nextU32() / 4_294_967_296,
    int: (min, max) => min + Math.floor(rng.next() * (max - min + 1)),
    pick: (items) => {
      if (items.length === 0) throw new Error('pick() needs a non-empty array');
      return items[Math.floor(rng.next() * items.length)] as (typeof items)[number];
    },
    chance: (p) => rng.next() < p,
    // Derived from the seed only (not from the state): adding draws to one stream never shifts
    // the values of another.
    fork: (label) => createRng((Math.imul(seed ^ hashLabel(label), 0x9e3779b1) ^ hashLabel(`${label}#`)) >>> 0),
  };
  return rng;
}
