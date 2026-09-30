/**
 * i18n glue for Astro pages and components (PLAN §4.1, §7.11).
 *
 * The server entry decides the locale from the URL prefix; the middleware stores it in
 * `Astro.locals.locale` and runs the request inside `withLocale()`, so every `m.*()` call during
 * the render resolves to it. Pages never read `Astro.currentLocale` (the rewritten URL has no
 * prefix): use `Astro.locals.locale`.
 */
import {
  DEFAULT_LOCALE,
  hreflangAlternates,
  LOCALE_INFO,
  LOCALES,
  type Locale,
  localizePath,
  toHreflang,
  toHtmlLang,
  toOgLocale,
} from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { configureUiTranslate, type UiMessageKey, type UiMessageParams } from '@sotf/ui/labels';

type MessageFn = (inputs?: Record<string, unknown>, options?: { locale?: Locale }) => string;

let uiConfigured = false;

/**
 * Makes `@sotf/ui` primitives rendered on the server speak the request locale (their `ui_*`
 * keys are Paraglide messages; the request locale comes from AsyncLocalStorage). Idempotent.
 */
export function configureUiMessages(): void {
  if (uiConfigured) return;
  uiConfigured = true;
  const messages = m as unknown as Record<string, MessageFn | undefined>;
  configureUiTranslate((key: UiMessageKey, params?: UiMessageParams) => {
    const message = messages[key];
    return message ? message(params ?? {}) : key;
  });
}

export interface LanguageLink {
  code: Locale;
  nativeName: string;
  href: string;
  hreflang: string;
}

/** The current page in every locale (language switcher, in `LOCALES` order). */
export function languageLinks(path: string): LanguageLink[] {
  return LOCALES.map((code) => ({
    code,
    nativeName: LOCALE_INFO[code].endonym,
    href: localizePath(path, code),
    hreflang: toHreflang(code),
  }));
}

export { DEFAULT_LOCALE, hreflangAlternates, localizePath, toHtmlLang, toOgLocale };

/** Shorthand used by components: the locale-aware href of an internal page. */
export function href(path: string, locale: Locale): string {
  return localizePath(path, locale);
}
