import { describe, expect, it } from 'vitest';
import { entryDecision, LEGACY_EXACT, legacyRule, trailingSlashTarget } from './redirects.ts';

const url = (path: string) => new URL(path, 'https://sotf-mods.com');

describe('trailing slash (PLAN §4.1: never, 301)', () => {
  it.each([
    ['/mods/', '/mods'],
    ['/builds/', '/builds'],
    ['/profile/imaxel/', '/profile/imaxel'],
    ['/mods//', '/mods'],
    ['//mods', '/mods'],
    ['/es/', '/es'],
  ])('%s → %s', (input, expected) => {
    expect(trailingSlashTarget(input)).toBe(expected);
  });

  it.each(['/', '/mods', '/es/mods/imaxel/axel'])('%s is canonical', (input) => {
    expect(trailingSlashTarget(input)).toBeNull();
  });
});

describe('entryDecision (server entry, before routing)', () => {
  it('redirects trailing slashes keeping the query and the locale prefix', () => {
    expect(entryDecision(url('/es/mods/?page=2')).redirect).toEqual({ status: 301, location: '/es/mods?page=2' });
    expect(entryDecision(url('/mods/')).redirect).toEqual({ status: 301, location: '/mods' });
  });

  it('uses 308 for non-GET methods', () => {
    expect(entryDecision(url('/mods/'), 'POST').redirect?.status).toBe(308);
    expect(entryDecision(url('/mods/'), 'HEAD').redirect?.status).toBe(301);
  });

  it('strips the locale prefix for routing and reports the locale', () => {
    expect(entryDecision(url('/es/mods/imaxel/axel?x=1'))).toEqual({ locale: 'es', path: '/mods/imaxel/axel?x=1' });
    expect(entryDecision(url('/pt'))).toEqual({ locale: 'pt', path: '/' });
    expect(entryDecision(url('/mods'))).toEqual({ locale: 'en', path: '/mods' });
    expect(entryDecision(url('/'))).toEqual({ locale: 'en', path: '/' });
  });

  it('does not treat look-alike prefixes as locales', () => {
    expect(entryDecision(url('/esx/mods'))).toEqual({ locale: 'en', path: '/esx/mods' });
    expect(entryDecision(url('/ES/mods'))).toEqual({ locale: 'en', path: '/ES/mods' });
    expect(entryDecision(url('/pt-BR/mods'))).toEqual({ locale: 'en', path: '/pt-BR/mods' });
  });

  it('redirects the explicit /en prefix to the unprefixed URL', () => {
    expect(entryDecision(url('/en')).redirect).toEqual({ status: 301, location: '/' });
    expect(entryDecision(url('/en/mods?page=3')).redirect).toEqual({ status: 301, location: '/mods?page=3' });
  });

  it('redirects prefixed unlocalized paths (console, APIs, files) to their only URL', () => {
    expect(entryDecision(url('/es/basecamp/mods')).redirect?.location).toBe('/basecamp/mods');
    expect(entryDecision(url('/de/api/v2/mods')).redirect?.location).toBe('/api/v2/mods');
    expect(entryDecision(url('/fr/sitemap.xml')).redirect?.location).toBe('/sitemap.xml');
    expect(entryDecision(url('/ja/mods/a/b/download/1.0.0')).redirect?.location).toBe('/mods/a/b/download/1.0.0');
  });
});

describe('legacy redirect table (PLAN §4.6)', () => {
  const cases: Array<[string, string]> = [
    ['/loader', '/install'],
    ['/upload', '/basecamp/new/mod'],
    ['/upload-build', '/basecamp/new/build'],
    ['/user/login', '/login'],
    ['/user/register', '/register'],
    ['/user/logout', '/logout'],
    ['/user/upload', '/basecamp/new/mod'],
    ['/mods/upload', '/basecamp/new/mod'],
    ['/artifacts', '/'],
    ['/static/downloads/sotfmodsoneclick-setup1.0.0.exe', '/install#oneclick'],
    ['/static/images/hd_thumbnail.png', '/brand/og-default.png'],
    ['/static/images/logo.png', '/brand/logo-horizontal-night.png'],
    ['/static/images/logo-dark.png', '/brand/logo-horizontal-night.png'],
    ['/static/images/favicon.ico', '/favicon.svg'],
    ['/static/images/favicon-32x32.png', '/favicon.svg'],
    ['/@imaxel', '/profile/imaxel'],
  ];

  it.each(cases)('%s → 301 %s', (from, to) => {
    expect(legacyRule(from, '', 'en')).toEqual({ kind: 'redirect', status: 301, location: to });
  });

  it('covers every exact rule', () => {
    const tested = new Set(cases.map(([from]) => from));
    for (const from of Object.keys(LEGACY_EXACT)) expect(tested.has(from)).toBe(true);
  });

  it('localizes page targets but never console, logout or asset targets', () => {
    expect(legacyRule('/loader', '', 'es')).toMatchObject({ location: '/es/install' });
    expect(legacyRule('/user/login', '', 'de')).toMatchObject({ location: '/de/login' });
    expect(legacyRule('/artifacts', '', 'ja')).toMatchObject({ location: '/ja' });
    expect(legacyRule('/@imaxel', '', 'pt')).toMatchObject({ location: '/pt/profile/imaxel' });
    expect(legacyRule('/upload', '', 'es')).toMatchObject({ location: '/basecamp/new/mod' });
    expect(legacyRule('/user/logout', '', 'es')).toMatchObject({ location: '/logout' });
    expect(legacyRule('/static/images/logo.png', '', 'es')).toMatchObject({
      location: '/brand/logo-horizontal-night.png',
    });
    expect(legacyRule('/static/downloads/sotfmodsoneclick-setup1.0.0.exe', '', 'es')).toMatchObject({
      location: '/es/install#oneclick',
    });
  });

  it('keeps the query on page redirects and drops it on asset redirects', () => {
    expect(legacyRule('/loader', '?utm_source=discord', 'en')).toMatchObject({
      location: '/install?utm_source=discord',
    });
    expect(legacyRule('/static/images/hd_thumbnail.png', '?v=2', 'en')).toMatchObject({
      location: '/brand/og-default.png',
    });
  });

  it('answers 410 for the 2023 uploads', () => {
    expect(legacyRule('/images/1690000000_mod.png', '', 'en')).toEqual({ kind: 'gone' });
    expect(legacyRule('/images/1690000000_mod.png/preview', '', 'en')).toEqual({ kind: 'gone' });
    expect(legacyRule('/images', '', 'en')).toEqual({ kind: 'pass' });
    expect(legacyRule('/images/a/b/c', '', 'en')).toEqual({ kind: 'pass' });
  });

  it('encodes /@handle safely and ignores malformed handles', () => {
    expect(legacyRule('/@Ax%C3%ABl', '', 'en')).toMatchObject({ location: '/profile/Ax%C3%ABl' });
    expect(legacyRule('/@%E0%A4%A', '', 'en')).toEqual({ kind: 'pass' });
    expect(legacyRule('/@a%2Fb', '', 'en')).toEqual({ kind: 'pass' });
    expect(legacyRule('/@', '', 'en')).toEqual({ kind: 'pass' });
  });

  it('passes through everything else (mods, profiles, the 404 page, logout itself)', () => {
    for (const path of ['/', '/mods', '/mods/imaxel/axel', '/404', '/logout', '/install', '/profile/imaxel']) {
      expect(legacyRule(path, '', 'en')).toEqual({ kind: 'pass' });
    }
  });

  it('uses 308 when the method is not GET/HEAD', () => {
    expect(legacyRule('/loader', '', 'en', 'POST')).toMatchObject({ status: 308 });
  });
});
