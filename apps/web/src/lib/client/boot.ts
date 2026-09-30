/**
 * The one module every public page loads (PLAN §2.5 «Vanilla TS», §8.2 JS ≤ 15 KB br).
 *
 * Immediate (tiny, needed for interaction): theme/primitives enhancement, header shortcuts,
 * mobile chrome, relogin banner, moon phase, view transitions, account hint, and for members the
 * account's display preferences (`scripts/account-settings.ts`).
 * Idle (never competes with the LCP): season + December snow, language suggestion (lazy chunk
 * with its three messages), the analytics beacon and RUM, and ads (lazy chunk, guests with ad
 * slots only).
 */
import { bindCmdkTrigger } from '../../islands/cmdk/Trigger.ts';
import { initSignalsBell } from '../../islands/signals/mount.ts';
import { initAccountHint } from '../../scripts/account-hint.ts';
import { initDisplayPreferences } from '../../scripts/account-settings.ts';
import { initBeacon } from '../../scripts/beacon.ts';
import { initReloginBanner } from '../../scripts/legacy-cleanup.ts';
import { initMoon } from '../../scripts/moon.ts';
import { initTheme } from '../../scripts/theme.ts';
import { initViewTransitions } from '../../scripts/view-transitions.ts';
import { initChrome } from './chrome.ts';

function whenIdle(task: () => void): void {
  if ('requestIdleCallback' in window) requestIdleCallback(task, { timeout: 3000 });
  else setTimeout(task, 1200);
}

/** Cheap pre-check so the language-suggestion chunk only loads when it may show something. */
function mayNeedLanguageSuggestion(): boolean {
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
  safely(() => initReloginBanner());
  safely(() => initMoon());
  safely(() => initViewTransitions());
  safely(() => initAccountHint());
  safely(() => initSignalsBell());
  safely(() => initDisplayPreferences());
  whenIdle(() => {
    safely(() => initBeacon());
    safely(() => import('../../scripts/seasonal.ts').then(({ initSeasonal }) => initSeasonal()));
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
