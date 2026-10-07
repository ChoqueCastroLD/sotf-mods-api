import { describe, expect, it } from 'vitest';
import { sortChoiceValue } from './catalog.ts';
import { hasListingParams, legacyListingRedirect } from './legacy.ts';
import {
  apiQueryOf,
  defaultState,
  exploreHref,
  isFiltered,
  MODS_SCOPE,
  parseExploreState,
  queryPairsOf,
} from './state.ts';

const parse = (query: string) => parseExploreState(new URLSearchParams(query), MODS_SCOPE);
const resolveCategory = (slug: string) => {
  const map: Record<string, string> = { qol: 'quality-of-life', 'quality-of-life': 'quality-of-life', misc: 'misc' };
  const found = map[slug];
  return found ? { slug: found, kind: 'mod' as const } : null;
};
const redirect = (path: string) =>
  legacyListingRedirect(new URL(`https://sotf-mods.com${path}`), MODS_SCOPE, { resolveCategory });

describe('catalogue state', () => {
  it('lists the newest mods by default, relevance while searching', () => {
    expect(defaultState(MODS_SCOPE).sort).toBe('new');
    expect(parse('').sort).toBe('new');
    expect(parse('q=menu').sort).toBe('relevance');
    expect(parse('sort=relevance').sort).toBe('new');
  });

  it('reads sort=oldest as the newest order reversed', () => {
    const state = parse('sort=oldest');
    expect([state.sort, state.order]).toEqual(['new', 'asc']);
    expect(sortChoiceValue(state)).toBe('oldest');
    // Newest is the default sort, so «oldest» is just the reversed order.
    expect(queryPairsOf(state, MODS_SCOPE)).toEqual([['order', 'asc']]);
    expect(exploreHref(state, MODS_SCOPE)).toBe('/mods?order=asc');
    expect(sortChoiceValue(parse('sort=downloads'))).toBe('downloads');
  });

  it('keeps the unapproved flag in the URL and the API query, and marks the view as filtered', () => {
    const state = parse('unapproved=1');
    expect(state.unapproved).toBe(true);
    expect(isFiltered(state, MODS_SCOPE)).toBe(true);
    expect(exploreHref(state, MODS_SCOPE)).toBe('/mods?unapproved=1');
    expect(apiQueryOf(state).unapproved).toBe(true);
    expect(apiQueryOf(parse('')).unapproved).toBeUndefined();
    expect(isFiltered(parse(''), MODS_SCOPE)).toBe(false);
    expect(parse('unapproved=0').unapproved).toBe(false);
  });

  it('never sends the unapproved flag together with page defaults the API would reject', () => {
    const query = apiQueryOf(parse('unapproved=1&nsfw=1&page=2'));
    expect(query).toMatchObject({ unapproved: true, nsfw: true, page: 2, sort: 'new', type: 'mod' });
  });
});

describe('search page state', () => {
  it('sorts names A to Z by default and writes the order only when it is reversed', () => {
    const az = parse('sort=name');
    expect([az.sort, az.order]).toEqual(['name', 'asc']);
    expect(exploreHref(az, MODS_SCOPE)).toBe('/mods?sort=name');
    expect(apiQueryOf(az)).toMatchObject({ sort: 'name', order: 'asc' });
    const za = parse('sort=name&order=desc');
    expect(za.order).toBe('desc');
    expect(exploreHref(za, MODS_SCOPE)).toBe('/mods?sort=name&order=desc');
    // Every other sort is newest or biggest first.
    expect(parse('sort=downloads').order).toBe('desc');
    expect(parse('sort=downloads&order=asc').order).toBe('asc');
  });

  it('reads the page size and the minimum downloads, and drops them from the default URL', () => {
    const state = parse('pageSize=48&minDownloads=100');
    expect([state.pageSize, state.minDownloads]).toEqual([48, 100]);
    expect(exploreHref(state, MODS_SCOPE)).toBe('/mods?minDownloads=100&pageSize=48');
    expect(apiQueryOf(state)).toMatchObject({ pageSize: 48, minDownloads: 100 });
    expect(parse('pageSize=24').pageSize).toBe(24);
    expect(parse('pageSize=7').pageSize).toBe(24);
    expect(parse('minDownloads=0').minDownloads).toBeNull();
    expect(exploreHref(parse('pageSize=24'), MODS_SCOPE)).toBe('/mods');
  });

  it('marks another page size or the A to Z sort as filtered (noindex)', () => {
    expect(isFiltered(parse('pageSize=48'), MODS_SCOPE)).toBe(true);
    expect(isFiltered(parse('sort=name'), MODS_SCOPE)).toBe(true);
    expect(isFiltered(parse('page=3'), MODS_SCOPE)).toBe(false);
  });

  it('redirects an explicit default page size to the clean URL', () => {
    expect(redirect('/mods?pageSize=24')).toBe('/mods');
    expect(redirect('/mods?pageSize=48')).toBeNull();
    expect(redirect('/mods?minDownloads=100')).toBeNull();
    expect(hasListingParams(new URLSearchParams('pageSize=48'))).toBe(true);
  });
});

describe('legacy catalogue URLs', () => {
  it('maps the old Unapproved and NSFW checkboxes', () => {
    expect(redirect('/mods?showunapproved=true')).toBe('/mods?unapproved=1');
    expect(redirect('/mods?show_unapproved=on&nsfw=on')).toBe('/mods?nsfw=1&unapproved=1');
    expect(redirect('/mods?showunapproved=false')).toBe('/mods');
    expect(redirect('/mods?nsfw=false')).toBe('/mods');
  });

  it('keeps the old sort names and categories working', () => {
    expect(redirect('/mods?orderby=oldest')).toBe('/mods?order=asc');
    expect(redirect('/mods?order_by=most_downloaded')).toBe('/mods?sort=downloads');
    expect(redirect('/mods?orderby=most_downloaded_week')).toBe('/mods?sort=trending');
    // The hub lists mods and libraries by default; a mods listing keeps its type.
    expect(redirect('/mods?category=qol')).toBe('/categories/quality-of-life?type=mod');
    expect(redirect('/mods?search=menu')).toBe('/search?q=menu');
  });

  it('cleans what a plain GET form writes (empty values, explicit defaults)', () => {
    expect(redirect('/mods?q=&category=&type=mod&sort=new')).toBe('/mods');
    expect(redirect('/mods?q=menu&sort=relevance')).toBe('/mods?q=menu');
    expect(redirect('/mods?type=mod&sort=downloads&unapproved=1')).toBe('/mods?unapproved=1&sort=downloads');
  });

  it('leaves canonical URLs and unknown parameters alone', () => {
    expect(redirect('/mods')).toBeNull();
    expect(redirect('/mods?page=2')).toBeNull();
    expect(redirect('/mods?sort=downloads&nsfw=1')).toBeNull();
    expect(redirect('/mods?unapproved=1')).toBeNull();
    expect(redirect('/mods?utm_source=news')).toBeNull();
    expect(redirect('/mods?page=1')).toBe('/mods');
  });

  it('tells which home URLs are listing views', () => {
    expect(hasListingParams(new URLSearchParams(''))).toBe(false);
    expect(hasListingParams(new URLSearchParams('utm_source=x&ref=y'))).toBe(false);
    for (const query of [
      'page=2',
      'q=a',
      'category=qol',
      'search=a',
      'orderby=oldest',
      'showunapproved=1',
      'unapproved=1',
    ]) {
      expect(hasListingParams(new URLSearchParams(query))).toBe(true);
    }
  });
});
