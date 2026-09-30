/**
 * Persistent language preference on public pages (boot bundle, immediate).
 *
 * 1. Choosing a language (language switcher, language suggestion: any `a[data-locale]`) saves it
 *    (`lib/client/locale-pref.ts`) and, for members, `User.settings.locale`, so it follows them to
 *    other browsers. Internal links are already locale-prefixed by the server, so navigating
 *    keeps the language; this makes the choice survive a visit to a URL of another language.
 * 2. Landing on a URL of another locale than the saved one decides between nothing, an automatic
 *    redirect (the visitor ticked «Remember my choice» on «Switch» or «View original») and the
 *    non-blocking prompt (`scripts/locale-prompt.ts`, a lazy chunk with its messages).
 *
 * Nothing here runs on the server: HTML is cached per URL, crawlers and visitors without JS just
 * get the locale of the URL they asked for. Bots (user agent, `navigator.webdriver`) are skipped.
 */
import { isLocale, type Locale, matchLocale } from '@sotf/i18n/locales';
import { localizePath } from '@sotf/i18n/paths';
import {
  acknowledge,
  isBot,
  type LocaleMode,
  type LocalePref,
  readAcknowledged,
  readPref,
  setPreferredLocale,
} from '../lib/client/locale-pref.ts';
import { hasSignedInHint } from './account-hint.ts';

export type LocaleAction = { kind: 'none' } | { kind: 'redirect'; locale: Locale } | { kind: 'prompt' };

export interface LocaleDecisionInput {
  pageLocale: Locale;
  pref: LocalePref | null;
  /** Locales already answered in this tab. */
  acknowledged: readonly string[];
  /** Language the content was written in (mods, builds), when it is one of the 13. */
  original: Locale | null;
  bot: boolean;
}

/** What to do on a page whose locale may differ from the saved preference. */
export function decideLocaleAction(input: LocaleDecisionInput): LocaleAction {
  const { pageLocale, pref, acknowledged, original, bot } = input;
  if (bot || !pref || pref.locale === pageLocale || acknowledged.includes(pageLocale)) return { kind: 'none' };
  const mode: LocaleMode = pref.mode;
  if (mode === 'stay') return { kind: 'none' };
  if (mode === 'switch') return { kind: 'redirect', locale: pref.locale };
  if (mode === 'original' && original) {
    return original === pageLocale ? { kind: 'none' } : { kind: 'redirect', locale: original };
  }
  return { kind: 'prompt' };
}

/** The language a page's content was written in (`<meta name="sotf:content-lang">`), or null. */
export function originalLocaleOf(doc: Document): Locale | null {
  const value = doc.querySelector<HTMLMetaElement>('meta[name="sotf:content-lang"]')?.content;
  return isLocale(value) ? value : null;
}

/** The current page (path, query and hash) in another locale. */
export function localeTarget(locale: Locale, location: Pick<Location, 'pathname' | 'search' | 'hash'>): string {
  return localizePath(location.pathname + location.search + location.hash, locale);
}

/** Saves the choice for the account (members only); `keepalive` lets it outlive the navigation. */
function saveToAccount(locale: Locale, win: Window): void {
  if (!hasSignedInHint(win.document.cookie)) return;
  void win
    .fetch('/api/v2/me/settings', {
      method: 'PATCH',
      credentials: 'same-origin',
      keepalive: true,
      headers: { accept: 'application/json', 'content-type': 'application/json' },
      body: JSON.stringify({ locale }),
    })
    .catch(() => {});
}

export function initLocalePreference(win: Window = window): void {
  const doc = win.document;
  // Capture: runs before the browser follows the link, whatever the handlers of the menu do.
  doc.addEventListener(
    'click',
    (event) => {
      const link = event.target instanceof Element ? event.target.closest<HTMLElement>('a[data-locale]') : null;
      const locale = link?.dataset.locale;
      if (!isLocale(locale)) return;
      setPreferredLocale(locale, win);
      saveToAccount(locale, win);
    },
    true,
  );

  const pageLocale = matchLocale(doc.documentElement.lang);
  if (!pageLocale) return;
  const action = decideLocaleAction({
    pageLocale,
    pref: readPref(win),
    acknowledged: readAcknowledged(win),
    original: originalLocaleOf(doc),
    bot: isBot(win),
  });
  if (action.kind === 'redirect') {
    const target = localeTarget(action.locale, win.location);
    if (target !== win.location.pathname + win.location.search + win.location.hash) {
      acknowledge(action.locale, win);
      win.location.replace(target);
    }
  } else if (action.kind === 'prompt') {
    void import('./locale-prompt.ts').then(({ initLocalePrompt }) => initLocalePrompt(pageLocale, win));
  }
}
