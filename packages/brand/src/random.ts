/**
 * Seeded pseudo-random numbers for the generative artwork.
 *
 * Only integer operations (`Math.imul`, shifts) are used, so a given seed produces the
 * same sequence in every JavaScript engine: server-rendered and client-rendered artwork
 * are byte-identical.
 */

export type Seed = string | number;

/** cyrb128: hashes a string into four well-mixed 32-bit words. */
function cyrb128(input: string): [number, number, number, number] {
  let h1 = 1779033703;
  let h2 = 3144134277;
  let h3 = 1013904242;
  let h4 = 2773480762;
  for (let i = 0; i < input.length; i += 1) {
    const k = input.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
  h1 ^= h2 ^ h3 ^ h4;
  h2 ^= h1;
  h3 ^= h1;
  h4 ^= h1;
  return [h1 >>> 0, h2 >>> 0, h3 >>> 0, h4 >>> 0];
}

/** Canonical string form of a seed (numbers and their decimal strings are equivalent). */
export function seedKey(seed: Seed): string {
  if (typeof seed === 'number') {
    if (!Number.isFinite(seed)) {
      throw new RangeError(`Seed must be finite, got ${seed}`);
    }
    return String(seed);
  }
  return seed;
}

/** 32-bit unsigned hash of a seed. Stable forever: changing it would reshuffle all art. */
export function hashSeed(seed: Seed): number {
  return cyrb128(seedKey(seed))[0];
}

export interface Rng {
  /** Uniform float in [0, 1). */
  next(): number;
  /** Uniform float in [min, max). */
  range(min: number, max: number): number;
  /** Uniform integer in [min, max] (inclusive). */
  int(min: number, max: number): number;
  /** Uniformly picks one element of a non-empty array. */
  pick<T>(items: readonly T[]): T;
}

/** Small Fast Counter (sfc32) generator seeded through cyrb128. */
export function createRng(seed: Seed, stream = ''): Rng {
  let [a, b, c, d] = cyrb128(`${seedKey(seed)}\u0000${stream}`);
  const nextUint = (): number => {
    a >>>= 0;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    let t = (a + b) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    d = (d + 1) | 0;
    t = (t + d) | 0;
    c = (c + t) | 0;
    return t >>> 0;
  };
  // Discard the first outputs so similar seeds diverge immediately.
  for (let i = 0; i < 12; i += 1) {
    nextUint();
  }
  const next = (): number => nextUint() / 4294967296;
  return {
    next,
    range: (min, max) => min + (max - min) * next(),
    int: (min, max) => min + Math.floor(next() * (max - min + 1)),
    pick: <T>(items: readonly T[]): T => {
      if (items.length === 0) {
        throw new RangeError('Cannot pick from an empty array');
      }
      return items[Math.floor(next() * items.length)] as T;
    },
  };
}

/** Integer lattice hash in [0, 1) used by value noise (no floating transcendental ops). */
export function latticeHash(seed: number, x: number, y: number): number {
  let h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263) ^ Math.imul(seed | 0, 1442695041);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}
