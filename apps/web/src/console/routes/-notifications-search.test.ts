import { describe, expect, it } from 'vitest';
import { Route } from './notifications/index.tsx';

const validate = Route.options.validateSearch as (search: Record<string, unknown>) => unknown;

describe('/notifications search params', () => {
  it('keeps the filter, the unread flag, the page and a known page size', () => {
    expect(validate({ filter: 'mentions', unread: '1', page: '3', size: '50' })).toEqual({
      filter: 'mentions',
      unread: 1,
      page: 3,
      size: 50,
    });
  });

  it('drops defaults and malformed values', () => {
    expect(validate({ filter: 'all', unread: '0', page: '1', size: '20' })).toEqual({});
    expect(validate({ filter: 'x', page: '-2', size: '7' })).toEqual({});
  });
});
