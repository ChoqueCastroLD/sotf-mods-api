import { describe, expect, it } from 'vitest';
import { allowedNext, homeOf, safeNext, withNext } from './next.ts';

describe('allowedNext', () => {
  it('keeps relative paths of the public site and follows the page locale', () => {
    expect(allowedNext('/mods/some-mod?tab=files#top', 'en')).toBe('/mods/some-mod?tab=files#top');
    expect(allowedNext('/mods/some-mod', 'es')).toBe('/es/mods/some-mod');
    expect(allowedNext('/fr/mods/x', 'es')).toBe('/fr/mods/x');
    expect(allowedNext('/', 'de')).toBe('/de');
  });

  it('allows console sections only without a locale prefix', () => {
    expect(allowedNext('/dashboard/mods', 'es')).toBe('/dashboard/mods');
    expect(allowedNext('/es/dashboard', 'es')).toBeNull();
    expect(allowedNext('/dashboard', 'en', { publicOnly: true })).toBeNull();
  });

  it('rejects everything that could leave the site', () => {
    for (const value of [
      'https://evil.test',
      '//evil.test',
      '/\\evil.test',
      '/%2F/evil.test',
      '/%5cevil.test',
      '/mods\\..\\evil',
      '/mods/\u0000x',
      '/mods/\r\nset-cookie:x',
      '/api/v2/me',
      '/login',
      '/_internal/cache/invalidate',
      'mods/x',
      '',
      `/mods/${'a'.repeat(1100)}`,
      null,
      undefined,
      42,
    ]) {
      expect(allowedNext(value, 'en'), String(value)).toBeNull();
    }
  });

  it('never throws and never yields a protocol-relative path for dot segments', () => {
    // These normalize to `//evil.test` (WHATWG URL parsing) and used to crash the login page.
    for (const value of [
      '/mods/..//evil.test',
      '/mods/%2e%2e//evil.test',
      '/mods/.%2e//evil.test',
      '/%2e%2e//evil.test',
      '/es//evil.test',
      '/es/..//evil.test',
    ]) {
      expect(() => allowedNext(value, 'en'), value).not.toThrow();
      expect(allowedNext(value, 'en'), value).toBeNull();
    }
    expect(safeNext('/mods/..//evil.test', 'es')).toBe(homeOf('es'));
  });

  it('keeps a nested double slash inside the allowed section', () => {
    expect(allowedNext('/mods/x/..//evil.test', 'en')).toBe('/mods//evil.test');
  });
});

describe('withNext', () => {
  it('appends an allowed destination and drops the home page', () => {
    expect(withNext('/register', '/mods/x', 'en')).toBe('/register?next=%2Fmods%2Fx');
    expect(withNext('/register?a=1', '/mods/x', 'en')).toBe('/register?a=1&next=%2Fmods%2Fx');
    expect(withNext('/register', '/', 'en')).toBe('/register');
    expect(withNext('/register', '//evil.test', 'en')).toBe('/register');
  });
});
