import { describe, expect, it } from 'vitest';
import { paginate, searchOf, stateOf, validateMeSearch } from './search.ts';

describe('«You» list search params', () => {
  it('keeps known values and drops defaults and junk', () => {
    expect(validateMeSearch({ q: ' ammo ', filter: 'updates', sort: 'name', page: '2', size: '50' })).toEqual({
      q: ' ammo ',
      filter: 'updates',
      sort: 'name',
      page: 2,
      size: 50,
    });
    expect(validateMeSearch({ q: '  ', filter: 'all', sort: 'recent', page: '1', size: '20' })).toEqual({});
    expect(validateMeSearch({ filter: 'x', sort: 'x', page: '-4', size: '7' })).toEqual({});
  });

  it('round-trips a state through the URL form', () => {
    const state = { q: 'x', filter: 'updates', sort: 'times', page: 3, size: 10 } as const;
    expect(stateOf(searchOf(state))).toEqual(state);
    expect(searchOf(stateOf({}))).toEqual({});
  });

  it('paginates and clamps the page', () => {
    const items = Array.from({ length: 45 }, (_, index) => index);
    expect(paginate(items, 1, 20)).toMatchObject({ page: 1, pages: 3, rows: items.slice(0, 20) });
    expect(paginate(items, 9, 20)).toMatchObject({ page: 3, pages: 3, rows: items.slice(40) });
    expect(paginate([], 4, 20)).toEqual({ rows: [], page: 1, pages: 1 });
  });
});
