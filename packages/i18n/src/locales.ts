/**
 * The 13 locales of SOTF Mods v2 (PLAN §4.1, §7.11) and the helpers that map between URL codes,
 * BCP-47 tags, legacy codes and user-agent preferences.
 *
 * A `Locale` is the **URL code** (`/es/...`, `/pt/...`, `/zh/...`); `en` has no prefix. It is also
 * the Paraglide locale id and the message-file name (`messages/<ns>/<locale>.json`). Anything that
 * leaves the app as a language tag (`<html lang>`, `hreflang`, `Intl`, `og:locale`) goes through
 * the mapping functions below, because two URL codes differ from their BCP-47 tag:
 * `pt` → `pt-BR` and `zh` → `zh-Hans`.
 *
 * Runtime-agnostic: no Node or DOM APIs.
 */

/** Every supported locale, in the order used by language pickers and hreflang clusters. */
export const LOCALES = ['en', 'es', 'de', 'fr', 'it', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh', 'ja'] as const;

export type Locale = (typeof LOCALES)[number];

/** The source locale: unprefixed URLs, `x-default`, and the language every message is written in first. */
export const DEFAULT_LOCALE: Locale = 'en';

/** Locales other than the default one, i.e. those that carry a `/{locale}` URL prefix. */
export const PREFIXED_LOCALES: readonly Exclude<Locale, 'en'>[] = LOCALES.filter(
  (locale): locale is Exclude<Locale, 'en'> => locale !== DEFAULT_LOCALE,
);

export interface LocaleInfo {
  /** URL code and Paraglide locale id. */
  code: Locale;
  /** BCP-47 tag for `<html lang>`, `hreflang` and `Intl`. */
  tag: string;
  /** `og:locale` value (language_TERRITORY). */
  ogLocale: string;
  /** Name of the language in the language itself, as shown by the language switcher. */
  endonym: string;
  /** English name, for logs, admin screens and accessibility descriptions. */
  englishName: string;
  /** Code the legacy site used for this language (cookie `lang`), or null if it did not exist. */
  legacyCode: string | null;
}

export const LOCALE_INFO: Readonly<Record<Locale, LocaleInfo>> = {
  en: { code: 'en', tag: 'en', ogLocale: 'en_US', endonym: 'English', englishName: 'English', legacyCode: 'en' },
  es: { code: 'es', tag: 'es', ogLocale: 'es_ES', endonym: 'Español', englishName: 'Spanish', legacyCode: 'es' },
  de: { code: 'de', tag: 'de', ogLocale: 'de_DE', endonym: 'Deutsch', englishName: 'German', legacyCode: 'de' },
  fr: { code: 'fr', tag: 'fr', ogLocale: 'fr_FR', endonym: 'Français', englishName: 'French', legacyCode: 'fr' },
  it: { code: 'it', tag: 'it', ogLocale: 'it_IT', endonym: 'Italiano', englishName: 'Italian', legacyCode: 'it' },
  nl: { code: 'nl', tag: 'nl', ogLocale: 'nl_NL', endonym: 'Nederlands', englishName: 'Dutch', legacyCode: 'nl' },
  pl: { code: 'pl', tag: 'pl', ogLocale: 'pl_PL', endonym: 'Polski', englishName: 'Polish', legacyCode: 'pl' },
  pt: {
    code: 'pt',
    tag: 'pt-BR',
    ogLocale: 'pt_BR',
    endonym: 'Português (Brasil)',
    englishName: 'Portuguese (Brazil)',
    legacyCode: 'pt',
  },
  ru: { code: 'ru', tag: 'ru', ogLocale: 'ru_RU', endonym: 'Русский', englishName: 'Russian', legacyCode: 'ru' },
  sv: { code: 'sv', tag: 'sv', ogLocale: 'sv_SE', endonym: 'Svenska', englishName: 'Swedish', legacyCode: 'se' },
  tr: { code: 'tr', tag: 'tr', ogLocale: 'tr_TR', endonym: 'Türkçe', englishName: 'Turkish', legacyCode: 'tr' },
  zh: {
    code: 'zh',
    tag: 'zh-Hans',
    ogLocale: 'zh_CN',
    endonym: '简体中文',
    englishName: 'Chinese (Simplified)',
    legacyCode: 'ch',
  },
  ja: { code: 'ja', tag: 'ja', ogLocale: 'ja_JP', endonym: '日本語', englishName: 'Japanese', legacyCode: null },
};

const LOCALE_SET: ReadonlySet<string> = new Set(LOCALES);

/** Type guard for URL codes. Exact and case-sensitive: `ES` or `pt-BR` are not locales. */
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && LOCALE_SET.has(value);
}

/** Throws a `RangeError` unless `value` is a supported locale. */
export function assertLocale(value: unknown): Locale {
  if (!isLocale(value)) throw new RangeError(`Unsupported locale: ${JSON.stringify(value)}`);
  return value;
}

/** BCP-47 tag for `hreflang` (`pt` → `pt-BR`, `zh` → `zh-Hans`). */
export function toHreflang(locale: Locale): string {
  return LOCALE_INFO[locale].tag;
}

/** BCP-47 tag for the `lang` attribute of `<html>` and user-content containers. */
export const toHtmlLang: (locale: Locale) => string = toHreflang;

/** BCP-47 tag handed to `Intl.*` constructors. */
export const toIntlLocale: (locale: Locale) => string = toHreflang;

/** `og:locale` value (`es_ES`, `pt_BR`, `zh_CN`…). */
export function toOgLocale(locale: Locale): string {
  return LOCALE_INFO[locale].ogLocale;
}

/** Legacy `lang` cookie code → v2 locale. The legacy site used `ch` for Chinese and `se` for Swedish. */
const LEGACY_CODES: Readonly<Record<string, Locale>> = {
  ch: 'zh',
  de: 'de',
  en: 'en',
  es: 'es',
  fr: 'fr',
  it: 'it',
  nl: 'nl',
  pl: 'pl',
  pt: 'pt',
  ru: 'ru',
  se: 'sv',
  tr: 'tr',
};

/**
 * Maps the value of the legacy `lang` cookie (PLAN §4.1) to a v2 locale: `ch` → `zh`, `se` → `sv`,
 * `pt` → `pt` and the other legacy codes to themselves. Values written by the legacy site are
 * lowercase two-letter codes; surrounding whitespace and case are tolerated. Anything else,
 * including an empty cookie, returns `null` (the caller keeps the page locale).
 */
export function fromLegacyLangCookie(value: string | null | undefined): Locale | null {
  if (typeof value !== 'string') return null;
  const code = value.trim().toLowerCase();
  return Object.hasOwn(LEGACY_CODES, code) ? (LEGACY_CODES[code] ?? null) : null;
}

/**
 * Best v2 locale for a BCP-47 language tag (from `navigator.languages`, `Accept-Language`,
 * `<html lang>` or a user setting), or `null` when the language is not supported.
 *
 * Matching is by primary language subtag, case-insensitive, and accepts `_` as separator:
 * `pt-PT` → `pt`, `zh-CN`/`zh-Hant-TW` → `zh`, `sv-FI` → `sv`, `EN_gb` → `en`. The legacy codes
 * `ch` and `se` are *not* accepted here: they are not ISO 639 codes of those languages (use
 * {@link fromLegacyLangCookie} for the legacy cookie).
 */
export function matchLocale(tag: string | null | undefined): Locale | null {
  if (typeof tag !== 'string') return null;
  const primary = tag.trim().toLowerCase().split(/[-_]/, 1)[0] ?? '';
  if (!/^[a-z]{2,3}$/.test(primary)) return null;
  // ISO 639-2/3 aliases that browsers occasionally send.
  const aliases: Readonly<Record<string, Locale>> = { cmn: 'zh', jpn: 'ja', swe: 'sv', por: 'pt', spa: 'es' };
  if (Object.hasOwn(aliases, primary)) return aliases[primary] ?? null;
  return isLocale(primary) ? primary : null;
}

/**
 * First supported locale in a preference list (most preferred first), e.g. `navigator.languages`.
 * Returns `null` if none is supported; never falls back silently, so callers decide what to do.
 */
export function negotiateLocale(preferences: Iterable<string | null | undefined>): Locale | null {
  for (const tag of preferences) {
    const locale = matchLocale(tag);
    if (locale) return locale;
  }
  return null;
}

/**
 * Parses an `Accept-Language` header into language tags ordered by quality (stable for equal
 * weights). Entries with `q=0`, wildcards and malformed items are dropped. The header is capped at
 * 1 KiB and 32 entries to bound the work on hostile input.
 *
 * Public pages never redirect on this header (PLAN §4.1); it is meant for emails, API responses
 * and the language suggestion.
 */
export function parseAcceptLanguage(header: string | null | undefined): string[] {
  if (typeof header !== 'string' || header.length === 0) return [];
  const entries: Array<{ tag: string; q: number; index: number }> = [];
  const items = header.slice(0, 1024).split(',').slice(0, 32);
  for (const [index, item] of items.entries()) {
    const [rawTag, ...params] = item.trim().split(';');
    const tag = rawTag?.trim() ?? '';
    if (!/^[A-Za-z]{1,8}(?:-[A-Za-z0-9]{1,8})*$/.test(tag)) continue;
    let q = 1;
    for (const param of params) {
      const match = /^\s*q\s*=\s*([01](?:\.\d{0,3})?)\s*$/i.exec(param);
      if (match?.[1] !== undefined) q = Number(match[1]);
    }
    if (q > 0 && q <= 1) entries.push({ tag, q, index });
  }
  return entries.sort((a, b) => b.q - a.q || a.index - b.index).map((entry) => entry.tag);
}
