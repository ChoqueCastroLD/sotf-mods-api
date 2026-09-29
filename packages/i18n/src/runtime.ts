/**
 * The Paraglide runtime, configured for SOTF Mods (see README "Runtime").
 *
 * How `getLocale()` resolves, in order:
 * 1. Server: the per-request value set by `withLocale()` (`@sotf/i18n/server`, AsyncLocalStorage).
 * 2. Browser: the locale last passed to `setLocale()` (console SPA, `globalVariable` strategy).
 * 3. Browser: the page language, `<html lang>` (strategy `custom-html`, registered below), so
 *    islands hydrated on `/es/...` render Spanish without any configuration.
 * 4. English.
 *
 * Messages also accept an explicit locale: `m.common_action_save({}, { locale: 'de' })`.
 *
 * Importing this module registers the `custom-html` strategy (a side effect that
 * `@sotf/i18n/messages` triggers too). Runtime-agnostic: DOM access is guarded.
 */
import { defineCustomClientStrategy } from '../.generated/paraglide/runtime.js';
import { type Locale, matchLocale, toHtmlLang } from './locales.ts';

export type { Locale as ParaglideLocale } from '../.generated/paraglide/runtime.js';
export {
  baseLocale,
  getLocale,
  isLocale as isRuntimeLocale,
  locales as runtimeLocales,
  overwriteGetLocale,
  overwriteSetLocale,
  setLocale,
} from '../.generated/paraglide/runtime.js';

interface DocumentLike {
  documentElement?: { lang?: string };
}

function currentDocument(): DocumentLike | undefined {
  return (globalThis as { document?: DocumentLike }).document;
}

/** Locale of the current page from `<html lang>` (BCP-47), or undefined outside a browser. */
export function localeFromDocument(): Locale | undefined {
  const lang = currentDocument()?.documentElement?.lang;
  return lang ? (matchLocale(lang) ?? undefined) : undefined;
}

defineCustomClientStrategy('custom-html', {
  getLocale: () => localeFromDocument(),
  setLocale: (locale) => {
    const root = currentDocument()?.documentElement;
    const match = matchLocale(locale);
    // Keep `<html lang>` in sync so assistive technology and later `getLocale()` calls agree.
    if (root && match) root.lang = toHtmlLang(match);
  },
});
