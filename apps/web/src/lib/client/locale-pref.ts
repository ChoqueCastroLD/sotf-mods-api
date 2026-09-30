/**
 * The visitor's remembered language (localStorage + a first-party cookie), shared by the public
 * pages (`scripts/locale-pref.ts`, `scripts/locale-prompt.ts`) and the console.
 *
 * - `localStorage['sotf-locale-pref']` = `{ locale, mode }` is the source of truth in this browser;
 * - the cookie `sotf_locale=<locale>` (1 year, `SameSite=Lax`, readable by the server and the API)
 *   mirrors the locale only. Public HTML is cached per URL at the edge, so the server never
 *   redirects on it (it would poison the cache and confuse crawlers): the browser applies it;
 * - `mode` is what the visitor asked for when they landed on a URL of another language and ticked
 *   «Remember my choice»: `ask` (default), `stay`, `switch` or `original`;
 * - `sessionStorage['sotf-locale-ack']` lists the locales already acknowledged in this tab
 *   (answered «Stay» or dismissed), so the question is asked once per language and tab.
 *
 * Imports only `@sotf/i18n/locales` (tiny): this module is part of the boot bundle.
 */
import { isLocale, type Locale } from '@sotf/i18n/locales';

export const PREF_KEY = 'sotf-locale-pref';
export const PREF_COOKIE = 'sotf_locale';
export const ACK_KEY = 'sotf-locale-ack';
export const PREF_MAX_AGE = 60 * 60 * 24 * 365;

export type LocaleMode = 'ask' | 'stay' | 'switch' | 'original';
const MODES: readonly LocaleMode[] = ['ask', 'stay', 'switch', 'original'];

export interface LocalePref {
  locale: Locale;
  mode: LocaleMode;
}

function store(win: Window, kind: 'localStorage' | 'sessionStorage'): Storage | null {
  try {
    return win[kind];
  } catch {
    return null;
  }
}

function cookieValue(cookie: string, name: string): string | null {
  for (const part of cookie.split(';')) {
    const [key, ...rest] = part.trim().split('=');
    if (key === name) return rest.join('=');
  }
  return null;
}

/** The saved preference, or null when the visitor never chose a language. */
export function readPref(win: Window = window): LocalePref | null {
  const text = store(win, 'localStorage')?.getItem(PREF_KEY);
  if (text) {
    try {
      const raw = JSON.parse(text) as { locale?: unknown; mode?: unknown };
      if (isLocale(raw.locale)) {
        const mode = MODES.find((candidate) => candidate === raw.mode) ?? 'ask';
        return { locale: raw.locale, mode };
      }
    } catch {
      // Corrupt entry: fall through to the cookie.
    }
  }
  const fromCookie = cookieValue(win.document.cookie, PREF_COOKIE);
  return isLocale(fromCookie) ? { locale: fromCookie, mode: 'ask' } : null;
}

/** Saves the preference in both places. Never throws (storage may be disabled). */
export function writePref(pref: LocalePref, win: Window = window): void {
  try {
    store(win, 'localStorage')?.setItem(PREF_KEY, JSON.stringify(pref));
  } catch {
    // Quota or privacy mode: the cookie still carries the locale.
  }
  try {
    const secure = win.location.protocol === 'https:' ? '; Secure' : '';
    win.document.cookie = `${PREF_COOKIE}=${pref.locale}; Path=/; Max-Age=${PREF_MAX_AGE}; SameSite=Lax${secure}`;
  } catch {
    // Cookies disabled.
  }
}

/** Sets the language, keeping the «remember my choice» mode chosen earlier. */
export function setPreferredLocale(locale: Locale, win: Window = window): LocalePref {
  const pref: LocalePref = { locale, mode: readPref(win)?.mode ?? 'ask' };
  writePref(pref, win);
  return pref;
}

export function readAcknowledged(win: Window = window): string[] {
  try {
    const parsed: unknown = JSON.parse(store(win, 'sessionStorage')?.getItem(ACK_KEY) ?? '[]');
    return Array.isArray(parsed) ? parsed.filter((value): value is string => typeof value === 'string') : [];
  } catch {
    return [];
  }
}

export function acknowledge(locale: Locale, win: Window = window): void {
  try {
    const next = new Set(readAcknowledged(win));
    next.add(locale);
    store(win, 'sessionStorage')?.setItem(ACK_KEY, JSON.stringify([...next]));
  } catch {
    // Without session storage the question may be asked again on the next page.
  }
}

/** Crawlers and headless fetchers are never redirected or prompted. */
export const BOT_PATTERN =
  /bot|crawl|spider|slurp|mediapartners|facebookexternalhit|bingpreview|lighthouse|headless|prerender|httrack|wget|curl|python-requests|go-http-client/i;

export function isBot(win: Window = window): boolean {
  const nav = win.navigator;
  return nav.webdriver === true || BOT_PATTERN.test(nav.userAgent ?? '');
}
