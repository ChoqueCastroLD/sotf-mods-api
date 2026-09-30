import { describe, expect, it } from 'vitest';
import { hreflangAlternates, isLocalizedPath, LOCALES, localizePath, stripLocale } from '../src/index.ts';

describe('stripLocale', () => {
  it('splits a non-default locale prefix off', () => {
    expect(stripLocale("/es/mods/imaxel/axel's-mod-menu")).toEqual({
      locale: 'es',
      path: "/mods/imaxel/axel's-mod-menu",
      prefixed: true,
    });
    expect(stripLocale('/de')).toEqual({ locale: 'de', path: '/', prefixed: true });
    expect(stripLocale('/zh/')).toEqual({ locale: 'zh', path: '/', prefixed: true });
    expect(stripLocale('/pt/mods?page=2#top')).toEqual({ locale: 'pt', path: '/mods?page=2#top', prefixed: true });
    expect(stripLocale('/ja?q=1')).toEqual({ locale: 'ja', path: '/?q=1', prefixed: true });
  });

  it('treats everything else as unprefixed English', () => {
    for (const path of ['/', '/mods', '/en/mods', '/ES/mods', '/esx', '/espanol', '/ch/mods', '/se']) {
      expect(stripLocale(path)).toEqual({ locale: 'en', path, prefixed: false });
    }
  });

  it('rejects anything that is not a same-origin absolute path', () => {
    for (const path of ['mods', '', '//evil.example/x', '/\\evil.example', 'https://sotf-mods.com/']) {
      expect(() => stripLocale(path)).toThrow(TypeError);
    }
  });
});

describe('localizePath', () => {
  it('adds, replaces or removes the prefix', () => {
    expect(localizePath('/mods/imaxel/axels-mod-menu', 'es')).toBe('/es/mods/imaxel/axels-mod-menu');
    expect(localizePath('/es/install', 'de')).toBe('/de/install');
    expect(localizePath('/es/install', 'en')).toBe('/install');
    expect(localizePath('/', 'ja')).toBe('/ja');
    expect(localizePath('/', 'en')).toBe('/');
    expect(localizePath('/fr', 'en')).toBe('/');
  });

  it('keeps query and hash, drops trailing slashes', () => {
    expect(localizePath('/mods?page=2&sort=new#list', 'pt')).toBe('/pt/mods?page=2&sort=new#list');
    expect(localizePath('/mods/', 'ru')).toBe('/ru/mods');
    expect(localizePath('/de/mods/', 'en')).toBe('/mods');
    expect(localizePath('/?q=kelvin', 'sv')).toBe('/sv?q=kelvin');
  });

  it('never prefixes the console, APIs, assets, downloads or machine endpoints', () => {
    const unlocalized = [
      '/basecamp',
      '/basecamp/mods/12/analytics',
      '/ranger/queue/3',
      '/settings/profile',
      '/signals',
      '/me/backpack',
      '/api/v2/mods',
      '/_astro/app.1234.js',
      '/_internal/cache/invalidate',
      '/brand/logo.svg',
      '/brand/sotf-mods-wordmark.png',
      '/.well-known/security.txt',
      '/mods/imaxel/axels-mod-menu/download/1.2.0',
      '/builds/bob/cabin/download/1.0.0',
      '/sitemap.xml',
      '/sitemaps/mods.xml',
      '/robots.txt',
      '/llms-full.txt',
      '/feed.xml',
      '/builds/feed.xml',
      '/mods/imaxel/axels-mod-menu.md',
      '/manifest.webmanifest',
      '/favicon.ico',
      '/logout',
      '/oembed',
      '/healthz',
    ];
    for (const path of unlocalized) {
      expect(isLocalizedPath(path), path).toBe(false);
      expect(localizePath(path, 'es'), path).toBe(path);
      // A stray prefix is removed from unlocalized paths.
      expect(localizePath(`/es${path}`, 'de'), path).toBe(path);
    }
    for (const path of [
      '/',
      '/mods',
      '/mods/imaxel/axels-mod-menu',
      '/mods/a/b/versions/1.2.0',
      '/profile/imaxel',
      '/k/abc123',
      '/brand',
    ]) {
      expect(isLocalizedPath(path), path).toBe(true);
    }
  });

  it('localizes the /brand page while its assets stay unprefixed', () => {
    expect(localizePath('/brand', 'es')).toBe('/es/brand');
    expect(localizePath('/fr/brand', 'en')).toBe('/brand');
    expect(isLocalizedPath('/brand/logo.svg')).toBe(false);
    expect(localizePath('/brand/logo.svg', 'es')).toBe('/brand/logo.svg');
    const hrefs = hreflangAlternates('/brand', 'https://sotf-mods.com').map((a) => a.href);
    expect(new Set(hrefs).size).toBe(LOCALES.length);
    expect(hrefs).toContain('https://sotf-mods.com/ja/brand');
  });

  it('accepts a custom predicate', () => {
    expect(localizePath('/embed/mods/a/b', 'es', { isLocalized: (p) => !p.startsWith('/embed') })).toBe(
      '/embed/mods/a/b',
    );
  });
});

describe('hreflangAlternates', () => {
  it('lists the 13 locales plus x-default with absolute URLs', () => {
    const alternates = hreflangAlternates('/es/mods?page=2#x', 'https://sotf-mods.com/');
    expect(alternates).toHaveLength(LOCALES.length + 1);
    expect(alternates[0]).toEqual({ hreflang: 'en', href: 'https://sotf-mods.com/mods?page=2', locale: 'en' });
    expect(alternates.find((a) => a.hreflang === 'pt-BR')?.href).toBe('https://sotf-mods.com/pt/mods?page=2');
    expect(alternates.find((a) => a.hreflang === 'zh-Hans')?.href).toBe('https://sotf-mods.com/zh/mods?page=2');
    expect(alternates.at(-1)).toEqual({
      hreflang: 'x-default',
      href: 'https://sotf-mods.com/mods?page=2',
      locale: 'en',
    });
    expect(new Set(alternates.map((a) => a.hreflang)).size).toBe(alternates.length);
  });

  it('supports a subset of locales and relative hrefs', () => {
    expect(hreflangAlternates('/install', '', ['en', 'es'])).toEqual([
      { hreflang: 'en', href: '/install', locale: 'en' },
      { hreflang: 'es', href: '/es/install', locale: 'es' },
      { hreflang: 'x-default', href: '/install', locale: 'en' },
    ]);
  });
});
