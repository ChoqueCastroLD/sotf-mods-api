/**
 * The one module every public page loads (PLAN §2.5 «Vanilla TS», §8.2 JS ≤ 15 KB br).
 *
 * Immediate (tiny, needed for interaction): theme/primitives enhancement, header shortcuts,
 * mobile chrome (scroll-aware bars, bottom sheets, install prompt, pull-to-refresh in the app),
 * relogin banner, view transitions, account hint, and for members the account's
 * display preferences (`scripts/account-settings.ts`) and the remembered language
 * (`scripts/locale-pref.ts`: saves the choice, auto-applies or asks when the URL's language
 * differs).
 * Idle (never competes with the LCP): service worker (offline page, install guide), the sheet
 * module, language suggestion (lazy chunk with its three messages), the
 * analytics beacon and RUM, and ads (lazy chunk, guests with ad slots only).
 */
import { bindCmdkTrigger } from '../../islands/cmdk/Trigger.ts';
import { initSignalsBell } from '../../islands/signals/mount.ts';
import { initAccountHint } from '../../scripts/account-hint.ts';
import { initDisplayPreferences } from '../../scripts/account-settings.ts';
import { initBeacon } from '../../scripts/beacon.ts';
import { initReloginBanner } from '../../scripts/legacy-cleanup.ts';
import { initLocalePreference } from '../../scripts/locale-pref.ts';
import { initPullToRefresh } from '../../scripts/pull-to-refresh.ts';
import { initServiceWorker } from '../../scripts/service-worker.ts';
import { initTheme } from '../../scripts/theme.ts';
import { initViewTransitions } from '../../scripts/view-transitions.ts';
import { initChrome } from './chrome.ts';
import { initInstall } from './install.ts';
import { initSheets, preloadSheets } from './sheet-loader.ts';

function whenIdle(task: () => void): void {
  if ('requestIdleCallback' in window) requestIdleCallback(task, { timeout: 3000 });
  else setTimeout(task, 1200);
}

/** Cheap pre-check so the language-suggestion chunk only loads when it may show something. */
function mayNeedLanguageSuggestion(): boolean {
  // Someone who chose a language already has the preference flow (`scripts/locale-pref.ts`).
  if (/(?:^|;\s*)sotf_locale=/.test(document.cookie)) return false;
  if (/(?:^|;\s*)lang=/.test(document.cookie)) return true;
  const page = document.documentElement.lang.slice(0, 2).toLowerCase();
  const preferred = (navigator.languages?.[0] ?? navigator.language ?? '').slice(0, 2).toLowerCase();
  return preferred !== '' && preferred !== page;
}

function safely(task: () => unknown): void {
  try {
    const result = task();
    if (result instanceof Promise) result.catch(() => {});
  } catch {
    // A decorative script must never break the page.
  }
}

let booted = false;

export function boot(): void {
  if (booted) return;
  booted = true;
  safely(() => initTheme());
  safely(() => bindCmdkTrigger());
  safely(() => initChrome());
  safely(() => initSheets());
  safely(() => initInstall());
  safely(() => initPullToRefresh());
  safely(() => initReloginBanner());
  safely(() => initViewTransitions());
  safely(() => initAccountHint());
  safely(() => initSignalsBell());
  safely(() => initDisplayPreferences());
  safely(() => initLocalePreference());
  whenIdle(() => {
    safely(() => initBeacon());
    safely(() => preloadSheets());
    safely(() => initServiceWorker());
    if (mayNeedLanguageSuggestion()) {
      safely(() => import('../../scripts/lang-suggest.ts').then(({ initLangSuggest }) => initLangSuggest()));
    }
    // Spoilers and YouTube facades of stored Markdown outside the mod page (builds, kits,
    // profiles, news, comment islands rendered later bind through the same delegation).
    if (document.querySelector('.md-spoiler, .md-youtube-link')) {
      safely(() => import('../../scripts/mod/prose.ts').then(({ initProse }) => initProse(null)));
    }
    if (document.querySelector('ins.adsbygoogle[data-ad-slot]')) {
      safely(() => import('../../scripts/ads.ts').then(({ initAds }) => initAds()));
    }
  });
}
