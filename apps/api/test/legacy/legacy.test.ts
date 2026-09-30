/** Pure pieces of the legacy layer: Tier 3 matching, comment ids, dependency lists. */
import { LEGACY_RETIRED_ROUTES } from '@sotf/contracts/legacy';
import { describe, expect, it } from 'vitest';
import { isRetired, RETIRED_PREFIXES, RETIRED_ROUTES, retiredRouteOf } from '../../src/legacy/retired.ts';
import { dependencyList } from '../../src/legacy/serializers.ts';
import { parseCommentsModId } from '../../src/legacy/site.ts';

describe('Tier 3 matching', () => {
  it('covers every retired route of the contract plus the bare KelvinGPT path', () => {
    expect(RETIRED_ROUTES.slice(0, LEGACY_RETIRED_ROUTES.length)).toEqual(LEGACY_RETIRED_ROUTES);
    expect(RETIRED_PREFIXES).toEqual([
      '/api/auth',
      '/api/favorites',
      '/api/mods',
      '/api/files',
      '/api/builds',
      '/api/users',
      '/api/comments',
      '/api/kelvin-gpt',
    ]);
  });

  it.each([
    ['POST', '/api/auth/login', '/api/auth/*'],
    ['GET', '/api/auth/check', '/api/auth/*'],
    ['DELETE', '/api/favorites', '/api/favorites'],
    ['POST', '/api/favorites/toggle', '/api/favorites/*'],
    ['GET', '/api/mods/AxelModMenu/favorite', '/api/mods/:mod_id/favorite'],
    ['HEAD', '/api/mods/AxelModMenu/approve', '/api/mods/:mod_id/approve'],
    ['PATCH', '/api/mods/x/details', '/api/mods/:mod_id/details'],
    ['POST', '/api/comments', '/api/comments'],
    ['GET', '/api/kelvin-gpt', '/api/kelvin-gpt'],
    ['GET', '/api/kelvin-gpt/clear-history', '/api/kelvin-gpt/*'],
  ])('%s %s → %s', (method, path, route) => {
    expect(retiredRouteOf(method, path)).toBe(route);
    expect(isRetired(method, path)).toBe(true);
  });

  it.each([
    ['OPTIONS', '/api/auth/login'],
    ['GET', '/api/comments'],
    ['POST', '/api/mods/x/approve'],
    ['PUT', '/api/mods/upload'],
    ['GET', '/api/mods/x/y/favorite'],
    ['GET', '/api/authx'],
    ['GET', '/api/mods/AxelModMenu'],
  ])('%s %s is not retired', (method, path) => {
    expect(isRetired(method, path)).toBe(false);
  });
});

describe('GET /api/comments mod_id', () => {
  it.each([
    ['20', 20],
    [' 20 ', 20],
    ['0', 0],
    ['', null],
    ['abc', null],
    ['1.5', null],
    ['-1', null],
    ['99999999999', null],
    [undefined, null],
  ])('%j → %j', (raw, expected) => {
    expect(parseCommentsModId(raw)).toBe(expected);
  });
});

describe('dependencyList', () => {
  it('splits, trims and drops empty entries like the legacy list', () => {
    expect(dependencyList('SonsAxLib, Other ,,')).toEqual(['SonsAxLib', 'Other']);
    expect(dependencyList('')).toEqual([]);
  });
});
