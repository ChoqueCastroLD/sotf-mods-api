import { describe, expect, it } from 'vitest';
import { Route } from './inbox.tsx';

const validate = Route.options.validateSearch as (search: Record<string, unknown>) => unknown;

describe('/dashboard/inbox search params', () => {
  it('keeps a known kind, the «all» state and a positive mod id', () => {
    expect(validate({ type: 'comment', state: 'all', mod: '12' })).toEqual({ type: 'comment', state: 'all', mod: 12 });
  });

  it('drops unknown or malformed values', () => {
    expect(validate({ type: 'spam', state: 'open', mod: '-3' })).toEqual({});
    expect(validate({ mod: 'abc' })).toEqual({});
  });

  it('keeps the order, the page and a known page size, and drops the defaults', () => {
    expect(validate({ sort: 'oldest', page: '3', size: '50' })).toEqual({ sort: 'oldest', page: 3, size: 50 });
    expect(validate({ sort: 'newest', page: '1', size: '25' })).toEqual({});
    expect(validate({ page: '0', size: '7' })).toEqual({});
  });
});
