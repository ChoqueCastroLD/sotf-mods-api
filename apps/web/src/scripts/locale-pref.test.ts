// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from 'vitest';
import {
  ACK_KEY,
  acknowledge,
  isBot,
  PREF_KEY,
  readPref,
  setPreferredLocale,
  writePref,
} from '../lib/client/locale-pref.ts';
import { decideLocaleAction, initLocalePreference, localeTarget, originalLocaleOf } from './locale-pref.ts';
import { initLocalePrompt } from './locale-prompt.ts';

const base = { pageLocale: 'de', acknowledged: [], original: null, bot: false } as const;
const pref = (mode: 'ask' | 'stay' | 'switch' | 'original') => ({ locale: 'es', mode }) as const;

function clear() {
  localStorage.clear();
  sessionStorage.clear();
  document.cookie = 'sotf_locale=; Max-Age=0; Path=/';
  document.head.innerHTML = '';
  document.body.innerHTML = '';
}

describe('decideLocaleAction', () => {
  it('does nothing without a preference, on the preferred locale, for bots and acknowledged locales', () => {
    expect(decideLocaleAction({ ...base, pref: null })).toEqual({ kind: 'none' });
    expect(decideLocaleAction({ ...base, pageLocale: 'es', pref: pref('ask') })).toEqual({ kind: 'none' });
    expect(decideLocaleAction({ ...base, pref: pref('switch'), bot: true })).toEqual({ kind: 'none' });
    expect(decideLocaleAction({ ...base, pref: pref('ask'), acknowledged: ['de'] })).toEqual({ kind: 'none' });
  });

  it('asks in «ask» mode, stays in «stay», redirects in «switch»', () => {
    expect(decideLocaleAction({ ...base, pref: pref('ask') })).toEqual({ kind: 'prompt' });
    expect(decideLocaleAction({ ...base, pref: pref('stay') })).toEqual({ kind: 'none' });
    expect(decideLocaleAction({ ...base, pref: pref('switch') })).toEqual({ kind: 'redirect', locale: 'es' });
  });

  it('«original» goes to the content language, stays when already there, asks when unknown', () => {
    expect(decideLocaleAction({ ...base, pref: pref('original'), original: 'en' })).toEqual({
      kind: 'redirect',
      locale: 'en',
    });
    expect(decideLocaleAction({ ...base, pref: pref('original'), original: 'de' })).toEqual({ kind: 'none' });
    expect(decideLocaleAction({ ...base, pref: pref('original') })).toEqual({ kind: 'prompt' });
  });
});

describe('preference store', () => {
  beforeEach(clear);

  it('writes localStorage and the cookie, and reads them back', () => {
    writePref({ locale: 'ja', mode: 'switch' });
    expect(readPref()).toEqual({ locale: 'ja', mode: 'switch' });
    expect(document.cookie).toContain('sotf_locale=ja');
  });

  it('falls back to the cookie and ignores garbage', () => {
    localStorage.setItem(PREF_KEY, '{oops');
    document.cookie = 'sotf_locale=de; Path=/';
    expect(readPref()).toEqual({ locale: 'de', mode: 'ask' });
    localStorage.setItem(PREF_KEY, JSON.stringify({ locale: 'xx', mode: 'switch' }));
    document.cookie = 'sotf_locale=; Max-Age=0; Path=/';
    expect(readPref()).toBeNull();
  });

  it('keeps the remembered mode when the language changes', () => {
    writePref({ locale: 'es', mode: 'stay' });
    expect(setPreferredLocale('fr')).toEqual({ locale: 'fr', mode: 'stay' });
  });

  it('acknowledges per tab session', () => {
    acknowledge('de');
    acknowledge('fr');
    expect(JSON.parse(sessionStorage.getItem(ACK_KEY) ?? '[]')).toEqual(['de', 'fr']);
  });

  it('detects bots', () => {
    expect(isBot({ navigator: { userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1)' } } as Window)).toBe(true);
    expect(isBot({ navigator: { userAgent: 'Mozilla/5.0 Firefox/130.0', webdriver: true } } as Window)).toBe(true);
    expect(isBot({ navigator: { userAgent: 'Mozilla/5.0 Firefox/130.0' } } as Window)).toBe(false);
  });
});

describe('targets', () => {
  it('keeps query and hash and swaps the prefix', () => {
    const loc = { pathname: '/de/mods/a/b', search: '?x=1', hash: '#t' };
    expect(localeTarget('es', loc)).toBe('/es/mods/a/b?x=1#t');
    expect(localeTarget('en', loc)).toBe('/mods/a/b?x=1#t');
  });

  it('reads the original language of the content', () => {
    clear();
    expect(originalLocaleOf(document)).toBeNull();
    document.head.innerHTML = '<meta name="sotf:content-lang" content="en">';
    expect(originalLocaleOf(document)).toBe('en');
    document.head.innerHTML = '<meta name="sotf:content-lang" content="ko">';
    expect(originalLocaleOf(document)).toBeNull();
  });
});

const MARKUP = `<main id="main" tabindex="-1"></main>
<div data-locale-prompt hidden>
  <p data-locale-prompt-title></p><p data-locale-prompt-hint></p>
  <button data-locale-prompt-stay></button>
  <a data-locale-prompt-switch href="/"></a><a data-locale-prompt-original href="/" hidden></a>
  <input type="checkbox" data-locale-prompt-remember><span data-locale-prompt-remember-label></span>
  <span data-locale-prompt-remember-hint></span>
  <button data-locale-prompt-close></button>
</div>`;

describe('prompt', () => {
  beforeEach(() => {
    clear();
    document.body.innerHTML = MARKUP;
    document.documentElement.lang = 'de';
    window.history.replaceState(null, '', '/de/mods/a/b?x=1');
  });

  it('offers stay, switch and the original, in the preferred language', () => {
    document.head.innerHTML = '<meta name="sotf:content-lang" content="en">';
    writePref({ locale: 'es', mode: 'ask' });
    expect(initLocalePrompt('de')).toBe(true);
    const root = document.querySelector<HTMLElement>('[data-locale-prompt]');
    expect(root?.hidden).toBe(false);
    expect(root?.lang).toBe('es');
    expect(document.querySelector('[data-locale-prompt-stay]')?.textContent).toContain('Deutsch');
    const sw = document.querySelector<HTMLAnchorElement>('[data-locale-prompt-switch]');
    expect(sw?.textContent).toContain('Español');
    expect(sw?.getAttribute('href')).toBe('/es/mods/a/b?x=1');
    const original = document.querySelector<HTMLAnchorElement>('[data-locale-prompt-original]');
    expect(original?.hidden).toBe(false);
    expect(original?.getAttribute('href')).toBe('/mods/a/b?x=1');
  });

  it('hides the original when it is the page or the preferred language', () => {
    document.head.innerHTML = '<meta name="sotf:content-lang" content="es">';
    writePref({ locale: 'es', mode: 'ask' });
    initLocalePrompt('de');
    expect(document.querySelector<HTMLElement>('[data-locale-prompt-original]')?.hidden).toBe(true);
  });

  it('«Stay» + remember saves the mode, acknowledges and hides', () => {
    writePref({ locale: 'es', mode: 'ask' });
    initLocalePrompt('de');
    document.querySelector<HTMLInputElement>('[data-locale-prompt-remember]')?.click();
    document.querySelector<HTMLButtonElement>('[data-locale-prompt-stay]')?.click();
    expect(readPref()).toEqual({ locale: 'es', mode: 'stay' });
    expect(document.querySelector<HTMLElement>('[data-locale-prompt]')?.hidden).toBe(true);
    expect(JSON.parse(sessionStorage.getItem(ACK_KEY) ?? '[]')).toContain('de');
  });

  it('«Switch» without remember keeps «ask» and Escape dismisses without remembering', () => {
    writePref({ locale: 'es', mode: 'ask' });
    initLocalePrompt('de');
    const root = document.querySelector<HTMLElement>('[data-locale-prompt]');
    root?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(root?.hidden).toBe(true);
    expect(readPref()?.mode).toBe('ask');
  });
});

describe('initLocalePreference', () => {
  beforeEach(() => {
    clear();
    document.body.innerHTML = `${MARKUP}<a data-locale="fr" href="/fr">Français</a>`;
    document.documentElement.lang = 'de';
  });

  it('saves the language when a switcher link is clicked', () => {
    initLocalePreference(window);
    const link = document.querySelector<HTMLAnchorElement>('a[data-locale]');
    link?.addEventListener('click', (event) => event.preventDefault());
    link?.click();
    expect(readPref()).toEqual({ locale: 'fr', mode: 'ask' });
  });

  it('shows the prompt for a saved preference different from the page', async () => {
    writePref({ locale: 'es', mode: 'ask' });
    initLocalePreference(window);
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(document.querySelector<HTMLElement>('[data-locale-prompt]')?.hidden).toBe(false);
  });

  it('never prompts without a preference', async () => {
    initLocalePreference(window);
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(document.querySelector<HTMLElement>('[data-locale-prompt]')?.hidden).toBe(true);
  });
});
