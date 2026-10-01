/**
 * Language suggestion (PLAN §4.1): never a redirect (it would break the edge cache). When the
 * legacy `lang` cookie (`ch` → `zh`, `se` → `sv`) or `navigator.languages` point to another
 * supported locale that this page is translated into (it has an hreflang alternate), a discreet
 * banner asks «¿Ver en Español?» — written in the **suggested** language. Declining is remembered.
 *
 * Loaded lazily (idle) by `lib/client/boot.ts`; only this chunk carries the three messages.
 */
import { fromLegacyLangCookie, LOCALE_INFO, type Locale, matchLocale, negotiateLocale, toHreflang } from '@sotf/i18n';
import {
  common_language_suggest,
  common_language_suggest_accept,
  common_language_suggest_decline,
} from '@sotf/i18n/messages';
import { enableSwipeDismiss } from './swipe-dismiss.ts';

export const DECLINED_KEY = 'sotf-lang-declined';

function readCookie(cookie: string, name: string): string | null {
  for (const part of cookie.split(';')) {
    const [key, ...rest] = part.trim().split('=');
    if (key === name) {
      try {
        return decodeURIComponent(rest.join('='));
      } catch {
        return rest.join('=');
      }
    }
  }
  return null;
}

/** The locale to suggest, or `null` (same language, unsupported preference or declined). */
export function suggestedLocale(input: {
  pageLocale: Locale;
  cookie: string;
  languages: readonly string[];
  declined: readonly string[];
}): Locale | null {
  const candidate = fromLegacyLangCookie(readCookie(input.cookie, 'lang')) ?? negotiateLocale(input.languages);
  if (!candidate || candidate === input.pageLocale || input.declined.includes(candidate)) return null;
  return candidate;
}

function readDeclined(): string[] {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(DECLINED_KEY) ?? '[]');
    return Array.isArray(parsed) ? parsed.filter((value): value is string => typeof value === 'string') : [];
  } catch {
    return [];
  }
}

function remember(locale: Locale): void {
  try {
    const declined = new Set(readDeclined());
    declined.add(locale);
    localStorage.setItem(DECLINED_KEY, JSON.stringify([...declined]));
  } catch {
    // Storage unavailable: the banner may come back on the next page.
  }
}

export function initLangSuggest(doc: Document = document): Locale | null {
  const banner = doc.querySelector<HTMLElement>('[data-lang-suggest]');
  const pageLocale = matchLocale(doc.documentElement.lang);
  if (!banner || !pageLocale) return null;
  const locale = suggestedLocale({
    pageLocale,
    cookie: doc.cookie,
    languages: navigator.languages ?? [navigator.language],
    declined: readDeclined(),
  });
  if (!locale) return null;
  const tag = toHreflang(locale);
  const alternate = doc.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${tag}"]`);
  if (!alternate?.href) return null;

  const target = new URL(alternate.href, doc.baseURI);
  const text = banner.querySelector<HTMLElement>('[data-lang-suggest-text]');
  const accept = banner.querySelector<HTMLAnchorElement>('[data-lang-suggest-accept]');
  const decline = banner.querySelector<HTMLButtonElement>('[data-lang-suggest-decline]');
  if (!text || !accept || !decline) return null;

  const options = { locale };
  text.textContent = common_language_suggest({ language: LOCALE_INFO[locale].endonym }, options);
  accept.textContent = common_language_suggest_accept({}, options);
  decline.textContent = common_language_suggest_decline({}, options);
  for (const element of [text, accept, decline]) element.lang = tag;
  accept.href = target.pathname + target.search + target.hash;
  accept.hreflang = tag;
  // Choosing it saves the language (`scripts/locale-pref.ts`).
  accept.dataset.locale = locale;
  decline.addEventListener(
    'click',
    () => {
      remember(locale);
      banner.hidden = true;
    },
    { once: true },
  );
  banner.hidden = false;
  // On phones it is a bottom sheet: swiping it down is «No, thanks».
  enableSwipeDismiss(banner, () => decline.click());
  return locale;
}
