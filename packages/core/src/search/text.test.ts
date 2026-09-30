import { describe, expect, it } from 'vitest';
import { trigramSimilarity } from './search.ts';
import { highlight, normalizeQuery, queryTerms } from './text.ts';

describe('search text helpers', () => {
  it('normalises queries (lowercase, accents, spaces, length)', () => {
    expect(normalizeQuery('  Über   Kelvin MOD ')).toBe('uber kelvin mod');
    expect(normalizeQuery('x'.repeat(150))).toHaveLength(100);
  });

  it('extracts highlight terms longest first', () => {
    expect(queryTerms('stak mod a')).toEqual(['stak', 'mod']);
  });

  it('wraps matches in «» keeping the original text', () => {
    expect(highlight('StackMod: bigger stacks', 'stack')).toBe('«Stack»Mod: bigger stacks');
    expect(highlight('Élan Mod', 'elan')).toBe('«Élan» Mod');
    expect(highlight('Axel’s Mod Menu', 'menu mod')).toBe('Axel’s «Mod» «Menu»');
    expect(highlight('Restless Kelvin', 'kelvn')).toBeNull();
  });

  it('computes pg_trgm-compatible similarity', () => {
    expect(trigramSimilarity('stakmod', 'stackmod')).toBeCloseTo(6 / 11, 5);
    expect(trigramSimilarity('abc', 'abc')).toBe(1);
    expect(trigramSimilarity('', 'abc')).toBe(0);
  });
});
