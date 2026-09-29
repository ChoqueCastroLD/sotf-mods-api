import { readFileSync } from 'node:fs';
import { describe, expect, expectTypeOf, it } from 'vitest';
import {
  assertLocale,
  DEFAULT_LOCALE,
  fromLegacyLangCookie,
  isLocale,
  LOCALE_INFO,
  LOCALES,
  type Locale,
  matchLocale,
  negotiateLocale,
  PREFIXED_LOCALES,
  parseAcceptLanguage,
  toHreflang,
  toOgLocale,
} from '../src/index.ts';
import { type ParaglideLocale, runtimeLocales } from '../src/runtime.ts';

describe('locales', () => {
  it('has the 13 locales of PLAN §4.1 in order, English first', () => {
    expect(LOCALES).toEqual(['en', 'es', 'de', 'fr', 'it', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh', 'ja']);
    expect(DEFAULT_LOCALE).toBe('en');
    expect(PREFIXED_LOCALES).toEqual(LOCALES.slice(1));
    for (const locale of LOCALES) expect(LOCALE_INFO[locale].code).toBe(locale);
  });

  it('matches the Paraglide project and runtime', () => {
    const settings = JSON.parse(readFileSync('project.inlang/settings.json', 'utf8')) as {
      baseLocale: string;
      locales: string[];
    };
    expect(settings.baseLocale).toBe(DEFAULT_LOCALE);
    expect(settings.locales).toEqual([...LOCALES]);
    expect([...runtimeLocales]).toEqual([...LOCALES]);
    expectTypeOf<ParaglideLocale>().toEqualTypeOf<Locale>();
  });

  it('maps URL codes to BCP-47 for hreflang, Intl and og:locale', () => {
    expect(toHreflang('pt')).toBe('pt-BR');
    expect(toHreflang('zh')).toBe('zh-Hans');
    expect(toHreflang('sv')).toBe('sv');
    expect(toHreflang('en')).toBe('en');
    expect(toOgLocale('pt')).toBe('pt_BR');
    expect(toOgLocale('zh')).toBe('zh_CN');
    expect(toOgLocale('ja')).toBe('ja_JP');
    for (const locale of LOCALES) {
      // Every tag is a valid, canonical BCP-47 tag that Intl understands as-is.
      expect(Intl.getCanonicalLocales(toHreflang(locale))).toEqual([toHreflang(locale)]);
    }
  });

  it('validates locales strictly', () => {
    expect(isLocale('es')).toBe(true);
    expect(isLocale('ES')).toBe(false);
    expect(isLocale('pt-BR')).toBe(false);
    expect(isLocale('ch')).toBe(false);
    expect(isLocale(undefined)).toBe(false);
    expect(assertLocale('ja')).toBe('ja');
    expect(() => assertLocale('xx')).toThrow(RangeError);
  });

  it('maps the legacy lang cookie (ch→zh, se→sv, pt→pt)', () => {
    expect(fromLegacyLangCookie('ch')).toBe('zh');
    expect(fromLegacyLangCookie('se')).toBe('sv');
    expect(fromLegacyLangCookie('pt')).toBe('pt');
    for (const code of ['de', 'en', 'es', 'fr', 'it', 'nl', 'pl', 'ru', 'tr']) {
      expect(fromLegacyLangCookie(code)).toBe(code);
    }
    expect(fromLegacyLangCookie(' SE ')).toBe('sv');
    // Codes the legacy site never wrote are ignored, including v2-only ones.
    for (const value of ['', 'zh', 'sv', 'ja', 'xx', 'toString', '__proto__', null, undefined]) {
      expect(fromLegacyLangCookie(value)).toBeNull();
    }
    // Every locale that existed in the legacy site maps back from its legacy code.
    for (const info of Object.values(LOCALE_INFO)) {
      if (info.legacyCode) expect(fromLegacyLangCookie(info.legacyCode)).toBe(info.code);
    }
  });

  it('matches BCP-47 tags from browsers and headers', () => {
    expect(matchLocale('es-MX')).toBe('es');
    expect(matchLocale('pt-PT')).toBe('pt');
    expect(matchLocale('zh-CN')).toBe('zh');
    expect(matchLocale('zh-Hant-TW')).toBe('zh');
    expect(matchLocale('EN_gb')).toBe('en');
    expect(matchLocale('sv-FI')).toBe('sv');
    expect(matchLocale('ja')).toBe('ja');
    expect(matchLocale('ch')).toBeNull();
    expect(matchLocale('se')).toBeNull();
    expect(matchLocale('uk-UA')).toBeNull();
    expect(matchLocale('*')).toBeNull();
    expect(matchLocale('')).toBeNull();
    expect(negotiateLocale(['uk-UA', 'ru-RU', 'en'])).toBe('ru');
    expect(negotiateLocale(['ko', 'ar'])).toBeNull();
    expect(negotiateLocale([])).toBeNull();
  });

  it('parses Accept-Language by quality, stable for ties', () => {
    expect(parseAcceptLanguage('de-CH,de;q=0.9,en;q=0.8,fr;q=0.8,*;q=0.5')).toEqual(['de-CH', 'de', 'en', 'fr']);
    expect(parseAcceptLanguage('es;q=0, pt-BR')).toEqual(['pt-BR']);
    expect(parseAcceptLanguage('en;q=abc, ja;q=0.5')).toEqual(['en', 'ja']);
    expect(parseAcceptLanguage('<script>, ru')).toEqual(['ru']);
    expect(parseAcceptLanguage(undefined)).toEqual([]);
    expect(parseAcceptLanguage(`${'x-a,'.repeat(1000)}en`)).toHaveLength(32);
    expect(negotiateLocale(parseAcceptLanguage('ko;q=0.9, pt-PT;q=0.8'))).toBe('pt');
  });
});
