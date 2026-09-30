import { describe, expect, it } from 'vitest';
import { completeToken, hasFilters, parseFilters, removeToken } from './operators.ts';

describe('parseFilters', () => {
  it('splits operators from the text, anywhere in the query', () => {
    const parsed = parseFilters('stack by:terroducky mod sort:new type:library mp:yes cat:quality-of-life');
    expect(parsed.text).toBe('stack mod');
    expect(parsed.filters).toEqual({
      by: 'terroducky',
      sort: 'new',
      type: 'library',
      mp: 'yes',
      cat: 'quality-of-life',
    });
    expect(hasFilters(parsed.filters)).toBe(true);
  });

  it('ignores unknown enum values and keeps them as pending while typed', () => {
    const parsed = parseFilters('menu sort:dow');
    expect(parsed.filters).toEqual({});
    expect(parsed.pending?.op).toBe('sort');
    expect(parsed.text).toBe('menu');
  });

  it('does not treat a complete enum value as pending', () => {
    expect(parseFilters('sort:rating').pending).toBeNull();
  });

  it('completes and removes tokens', () => {
    const raw = 'menu cat:qu';
    const token = parseFilters(raw).pending;
    expect(token).not.toBeNull();
    if (!token) return;
    expect(completeToken(raw, token, 'quality-of-life')).toBe('menu cat:quality-of-life ');
    expect(removeToken(raw, token)).toBe('menu');
  });
});
