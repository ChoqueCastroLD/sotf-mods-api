import { describe, expect, it } from 'vitest';
import { Route } from './mods/index.tsx';

const validate = Route.options.validateSearch as (search: Record<string, unknown>) => unknown;

describe('/dashboard/mods search params', () => {
  it('keeps a status, a category, a name, a non default sort, the page and a known page size', () => {
    expect(
      validate({ status: 'pending', category: 'ui-tools', q: 'ammo', sort: 'name', page: '3', size: '50' }),
    ).toEqual({ status: 'pending', category: 'ui-tools', q: 'ammo', sort: 'name', page: 3, size: 50 });
  });

  it('drops defaults and malformed values', () => {
    expect(validate({ sort: 'updated', page: '1', size: '20', q: '   ' })).toEqual({});
    expect(validate({ status: 'bogus', category: 'Bad Value!', sort: 'bogus', page: 'x', size: '7' })).toEqual({});
  });
});
