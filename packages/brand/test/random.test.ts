import { describe, expect, it } from 'vitest';
import { createRng, hashSeed, latticeHash, seedKey } from '../src/random.ts';

describe('seeded randomness', () => {
  it('is stable forever (changing these values reshuffles every generated artwork)', () => {
    expect(hashSeed('sotf-mods')).toMatchSnapshot();
    const rng = createRng('sotf-mods');
    expect([rng.next(), rng.next(), rng.next()].map((value) => value.toFixed(12))).toMatchSnapshot();
    expect(latticeHash(1, 2, 3)).toMatchSnapshot();
  });

  it('treats numeric seeds and their decimal strings as the same seed', () => {
    expect(seedKey(42)).toBe('42');
    expect(createRng(42).next()).toBe(createRng('42').next());
    expect(() => seedKey(Number.NaN)).toThrow(RangeError);
  });

  it('separates streams and similar seeds', () => {
    expect(createRng('a').next()).not.toBe(createRng('b').next());
    expect(createRng('a', 'x').next()).not.toBe(createRng('a', 'y').next());
  });

  it('produces values in range with a sane distribution', () => {
    const rng = createRng('distribution');
    const buckets = new Array(10).fill(0);
    for (let i = 0; i < 20_000; i += 1) {
      const value = rng.next();
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(1);
      buckets[Math.floor(value * 10)] += 1;
    }
    for (const count of buckets) {
      expect(count).toBeGreaterThan(1_800);
      expect(count).toBeLessThan(2_200);
    }
    for (let i = 0; i < 1_000; i += 1) {
      const n = rng.int(3, 5);
      expect([3, 4, 5]).toContain(n);
    }
    expect(() => rng.pick([])).toThrow(RangeError);
    expect(rng.pick(['only'])).toBe('only');
  });
});
