/**
 * Console locale (PLAN §4.1, §4.3; docs/backlog/WP-13.md). The console has no URL prefix: the
 * language comes from the user, in this order:
 *
 *   1. `User.settings.locale` (then the legacy `User.locale`), once `/me` has loaded;
 *   2. the last locale this browser used in the console (`localStorage`);
 *   3. `navigator.languages` negotiated against the 13 locales;
 *   4. English.
 *
 * Steps 2–4 decide the first paint; step 1 corrects it (rarely) after `/me` arrives.
 * `setLocale(locale, { reload: false })` switches Paraglide in place and updates `<html lang>`.
 */
import { isLocale, type Locale, negotiateLocale } from '@sotf/i18n';
import { setLocale } from '@sotf/i18n/runtime';
import { STORAGE_KEYS, storage } from './storage.ts';

export interface LocaleSources {
  stored?: string | null;
  languages?: readonly string[];
}

/** Locale of the first paint (before `/me`). */
export function initialLocale(sources: LocaleSources = browserSources()): Locale {
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
    stored: storage.get(STORAGE_KEYS.locale),
    languages: typeof navigator === 'undefined' ? [] : navigator.languages,
  };
}

/** Switches Paraglide (no reload), `<html lang>` and remembers the choice for the next visit. */
export function applyLocale(locale: Locale): void {
  setLocale(locale, { reload: false });
  storage.set(STORAGE_KEYS.locale, locale);
}
