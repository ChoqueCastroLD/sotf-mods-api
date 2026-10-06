import { describe, expect, it } from 'vitest';
import { entryDecision, LEGACY_EXACT, legacyRule, REMOVED_FEATURES, removedFeatureTarget, trailingSlashTarget } from './redirects.ts';

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
    expect(entryDecision(url('/xx/mods'))).toEqual({ locale: 'en', path: '/xx/mods' });
    expect(entryDecision(url('/Mods'))).toEqual({ locale: 'en', path: '/Mods' });
  });

  it('redirects capitalised and regional locale prefixes to the canonical one', () => {
    expect(entryDecision(url('/ES/mods?page=2')).redirect).toEqual({ status: 301, location: '/es/mods?page=2' });
    expect(entryDecision(url('/pt-BR/mods')).redirect?.location).toBe('/pt/mods');
    expect(entryDecision(url('/es-ES')).redirect?.location).toBe('/es');
    expect(entryDecision(url('/zh_CN/mods')).redirect?.location).toBe('/zh/mods');
    expect(entryDecision(url('/EN/mods')).redirect?.location).toBe('/mods');
    expect(entryDecision(url('/en-US')).redirect?.location).toBe('/');
  });

  it('answers 400 to URLs with a NUL byte instead of reaching the database', () => {
    expect(entryDecision(url('/mods/a%00b/c')).reject).toEqual({ status: 400 });
    expect(entryDecision(url('/search?q=a%00b')).reject).toEqual({ status: 400 });
    expect(entryDecision(url('/search?q=a%2500b')).reject).toBeUndefined();
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

  describe('removed features (CLASSIC.md)', () => {
    const removed: Array<[string, string]> = [
      ['/kits', '/mods'],
      ['/kits/imaxel/starter', '/mods'],
      ['/k', '/mods'],
      ['/k/abc123', '/mods'],
      ['/patch-radar', '/mods'],
      ['/patch-radar/1.0.4', '/mods'],
      ['/best/mods', '/mods'],
      ['/compare', '/mods'],
      ['/creators', '/mods'],
      ['/news', '/'],
      ['/news/feed.xml', '/'],
      ['/news/some-post', '/'],
      ['/achievements', '/'],
      ['/badges', '/'],
      ['/brand', '/'],
    ];

    it.each(removed)('%s → 301 %s', (from, to) => {
      expect(legacyRule(from, '', 'en')).toEqual({ kind: 'redirect', status: 301, location: to });
    });

    it('covers every removed feature segment', () => {
      const tested = new Set(removed.map(([from]) => from.split('/')[1]));
      for (const segment of Object.keys(REMOVED_FEATURES)) expect(tested.has(segment)).toBe(true);
    });

    it('keeps the locale prefix of the request and drops the query', () => {
      expect(legacyRule('/kits', '?sort=popular', 'es')).toMatchObject({ location: '/es/mods' });
      expect(legacyRule('/news/post', '', 'de')).toMatchObject({ location: '/de' });
      expect(legacyRule('/creators', '?page=2', 'ja')).toMatchObject({ location: '/ja/mods' });
      expect(entryDecision(url('/es/kits')).path).toBe('/kits');
    });

    it('keeps the README badges for mods and the static brand files', () => {
      expect(removedFeatureTarget('/badges/mods/imaxel/axel/downloads.svg')).toBeNull();
      expect(removedFeatureTarget('/brand/logo-horizontal-night.png')).toBeNull();
      expect(removedFeatureTarget('/kitsune')).toBeNull();
      expect(removedFeatureTarget('/mods/imaxel/axel/versions/compare')).toBeNull();
      expect(removedFeatureTarget('/mods')).toBeNull();
    });

    it('uses 308 when the method is not GET/HEAD', () => {
      expect(legacyRule('/news', '', 'en', 'POST')).toMatchObject({ status: 308 });
    });
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
