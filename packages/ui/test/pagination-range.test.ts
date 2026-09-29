import { describe, expect, it } from 'vitest';
import { paginationRange } from '../src/pagination-range.ts';

describe('paginationRange', () => {
  it('lists every page when they fit', () => {
    expect(paginationRange(1, 1)).toEqual([1]);
    expect(paginationRange(3, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('collapses the far side near the edges', () => {
    expect(paginationRange(1, 20)).toEqual([1, 2, 3, 4, 5, 'ellipsis-end', 20]);
    expect(paginationRange(4, 20)).toEqual([1, 2, 3, 4, 5, 'ellipsis-end', 20]);
    expect(paginationRange(20, 20)).toEqual([1, 'ellipsis-start', 16, 17, 18, 19, 20]);
  });

  it('collapses both sides in the middle', () => {
    expect(paginationRange(10, 20)).toEqual([1, 'ellipsis-start', 9, 10, 11, 'ellipsis-end', 20]);
    expect(paginationRange(10, 20, 2)).toEqual([1, 'ellipsis-start', 8, 9, 10, 11, 12, 'ellipsis-end', 20]);
  });

  it('keeps a constant length and always includes the current page', () => {
    for (let page = 1; page <= 30; page++) {
      const tokens = paginationRange(page, 30);
      expect(tokens).toHaveLength(7);
      expect(tokens).toContain(page);
      expect(tokens[0]).toBe(1);
      expect(tokens.at(-1)).toBe(30);
    }
  });

  it('clamps out-of-range input', () => {
    expect(paginationRange(99, 3)).toEqual([1, 2, 3]);
    expect(paginationRange(-5, 0)).toEqual([1]);
  });
});
