/**
 * Console locale (PLAN §4.1, §4.3; docs/backlog/WP-13.md). The console has no URL prefix: the
 * language comes from the user, in this order:
 *
 *   1. `User.settings.locale` (then the legacy `User.locale`), once `/me` has loaded;
 *   2. the language saved for the whole site in this browser (`lib/client/locale-pref.ts`: the
 *      switcher and the language prompt of the public pages), then the last locale used in the
 *      console (`localStorage`);
 *   3. `navigator.languages` negotiated against the 13 locales;
 *   4. English.
 *
 * Steps 2–4 decide the first paint; step 1 corrects it (rarely) after `/me` arrives.
 * `setLocale(locale, { reload: false })` switches Paraglide in place and updates `<html lang>`.
 */
import { isLocale, type Locale, negotiateLocale } from '@sotf/i18n';
import { setLocale } from '@sotf/i18n/runtime';
import { readPref, setPreferredLocale } from '../../lib/client/locale-pref.ts';
import { STORAGE_KEYS, storage } from './storage.ts';

export interface LocaleSources {
  /** Language saved for the whole site (public pages and console). */
  saved?: string | null;
  stored?: string | null;
  languages?: readonly string[];
}

/** Locale of the first paint (before `/me`). */
export function initialLocale(sources: LocaleSources = browserSources()): Locale {
  if (sources.saved && isLocale(sources.saved)) return sources.saved;
  if (sources.stored && isLocale(sources.stored)) return sources.stored;
  return negotiateLocale(sources.languages ?? []) ?? 'en';
}

/** The user's saved preference, or null to keep the browser-derived locale. */
export function userLocale(me: {
  settings: { locale: string | null };
  user: { locale: string | null };
}): Locale | null {
  const preferred = me.settings.locale ?? me.user.locale;
  return preferred && isLocale(preferred) ? preferred : null;
}

function browserSources(): LocaleSources {
  return {
    saved: typeof window === 'undefined' ? null : (readPref()?.locale ?? null),
    stored: storage.get(STORAGE_KEYS.locale),
    languages: typeof navigator === 'undefined' ? [] : navigator.languages,
  };
}

/** Switches Paraglide (no reload), `<html lang>` and remembers the choice for the next visit, console and public pages. */
export function applyLocale(locale: Locale): void {
  setLocale(locale, { reload: false });
  storage.set(STORAGE_KEYS.locale, locale);
  setPreferredLocale(locale);
}
