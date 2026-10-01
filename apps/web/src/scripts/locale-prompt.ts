/**
 * The language prompt (lazy chunk, loaded by `scripts/locale-pref.ts` only when the page locale
 * differs from the saved preference and the visitor did not ask to stop being asked).
 *
 * A non-blocking, non-modal notice filled into the hidden `[data-locale-prompt]` markup of
 * `SiteBanners.astro`, written in the visitor's **preferred** language:
 *
 *   Stay in <this page's language> · Switch to <preferred language> · View original (<language>)
 *   ☐ Remember my choice
 *
 * «Switch» and «View original» are real links (middle-click, no-JS-like semantics); «Stay» only
 * dismisses. With «Remember my choice» the answer becomes the saved `mode`, applied without a
 * question the next time (`decideLocaleAction`). Escape or ✕ is «Stay» for this tab, unremembered.
 */
import { LOCALE_INFO, type Locale, toHreflang } from '@sotf/i18n';
import {
  common_action_dismiss,
  langprompt_hint,
  langprompt_original,
  langprompt_remember,
  langprompt_remember_hint,
  langprompt_stay,
  langprompt_switch,
  langprompt_title,
} from '@sotf/i18n/messages';
import { acknowledge, type LocaleMode, readPref, writePref } from '../lib/client/locale-pref.ts';
import { localeTarget, originalLocaleOf } from './locale-pref.ts';
import { enableSwipeDismiss } from './swipe-dismiss.ts';

function query<T extends HTMLElement>(root: ParentNode, selector: string): T | null {
  return root.querySelector<T>(selector);
}

/** Shows the prompt; returns false when the markup is missing or there is nothing to offer. */
export function initLocalePrompt(pageLocale: Locale, win: Window = window): boolean {
  const doc = win.document;
  const root = query<HTMLElement>(doc, '[data-locale-prompt]');
  const pref = readPref(win);
  if (!root || !pref || pref.locale === pageLocale) return false;
  const preferred = pref.locale;
  const original = originalLocaleOf(doc);
  const showOriginal = original !== null && original !== pageLocale && original !== preferred;

  const title = query<HTMLElement>(root, '[data-locale-prompt-title]');
  const hint = query<HTMLElement>(root, '[data-locale-prompt-hint]');
  const stay = query<HTMLButtonElement>(root, '[data-locale-prompt-stay]');
  const toPreferred = query<HTMLAnchorElement>(root, '[data-locale-prompt-switch]');
  const toOriginal = query<HTMLAnchorElement>(root, '[data-locale-prompt-original]');
  const remember = query<HTMLInputElement>(root, '[data-locale-prompt-remember]');
  const rememberLabel = query<HTMLElement>(root, '[data-locale-prompt-remember-label]');
  const rememberHint = query<HTMLElement>(root, '[data-locale-prompt-remember-hint]');
  const close = query<HTMLButtonElement>(root, '[data-locale-prompt-close]');
  if (!title || !hint || !stay || !toPreferred || !toOriginal || !remember || !close) return false;

  const options = { locale: preferred };
  const name = (locale: Locale) => LOCALE_INFO[locale].endonym;
  title.textContent = langprompt_title({ language: name(pageLocale) }, options);
  hint.textContent = langprompt_hint({ language: name(preferred) }, options);
  stay.textContent = langprompt_stay({ language: name(pageLocale) }, options);
  toPreferred.textContent = langprompt_switch({ language: name(preferred) }, options);
  toPreferred.href = localeTarget(preferred, win.location);
  toPreferred.hreflang = toHreflang(preferred);
  if (rememberLabel) rememberLabel.textContent = langprompt_remember({}, options);
  if (rememberHint) rememberHint.textContent = langprompt_remember_hint({}, options);
  close.setAttribute('aria-label', common_action_dismiss({}, options));
  if (showOriginal && original) {
    toOriginal.textContent = langprompt_original({ language: name(original) }, options);
    toOriginal.href = localeTarget(original, win.location);
    toOriginal.hreflang = toHreflang(original);
    toOriginal.hidden = false;
  } else {
    toOriginal.hidden = true;
  }
  root.lang = toHreflang(preferred);

  const remembered = (mode: LocaleMode) => {
    if (remember.checked) writePref({ locale: preferred, mode }, win);
  };
  const dismiss = (focusMain: boolean) => {
    acknowledge(pageLocale, win);
    root.hidden = true;
    if (focusMain) doc.getElementById('main')?.focus({ preventScroll: true });
  };

  stay.addEventListener('click', () => {
    remembered('stay');
    dismiss(true);
  });
  close.addEventListener('click', () => dismiss(true));
  toPreferred.addEventListener('click', () => remembered('switch'));
  toOriginal.addEventListener('click', () => {
    remembered('original');
    if (original) acknowledge(original, win);
  });
  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') dismiss(true);
  });

  root.hidden = false;
  // On phones it is a bottom sheet: swiping it down is the ✕ (stay for this tab, unremembered).
  enableSwipeDismiss(root, () => close.click());
  return true;
}
