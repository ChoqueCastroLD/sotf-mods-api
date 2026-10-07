// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { isPaletteShortcut } from '../../islands/cmdk/Trigger.ts';
import { hasSignedInHint, initAccountHint, initialsOf } from '../../scripts/account-hint.ts';
import { adClient, initAds, isNoAdsPage } from '../../scripts/ads.ts';
import { pageEntity, trackingAllowed } from '../../scripts/beacon.ts';
import { consentSettled, publisherId } from '../../scripts/consent.ts';
import { initLangSuggest, suggestedLocale } from '../../scripts/lang-suggest.ts';
import { initReloginBanner } from '../../scripts/legacy-cleanup.ts';

/** jsdom has no Cookie Store API; the scripts read `document.cookie`, so tests write it. */
function setCookie(value: string): void {
  // biome-ignore lint/suspicious/noDocumentCookie: test fixture for code that reads document.cookie
  document.cookie = value;
}

beforeEach(() => {
  document.head.innerHTML = '';
  document.body.innerHTML = '';
  document.documentElement.removeAttribute('data-signed-in');
  document.documentElement.removeAttribute('data-guest');
  localStorage.clear();
});

afterEach(() => {
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0]?.trim();
    if (name) setCookie(`${name}=; Max-Age=0; Path=/`);
  }
  vi.unstubAllGlobals();
});

describe('language suggestion (PLAN §4.1: never a redirect)', () => {
  it('prefers the legacy lang cookie (ch → zh, se → sv), then navigator.languages', () => {
    expect(suggestedLocale({ pageLocale: 'en', cookie: 'lang=ch', languages: ['es'], declined: [] })).toBe('zh');
    expect(suggestedLocale({ pageLocale: 'en', cookie: 'x=1; lang=se', languages: [], declined: [] })).toBe('sv');
    expect(suggestedLocale({ pageLocale: 'en', cookie: '', languages: ['pt-PT', 'en'], declined: [] })).toBe('pt');
    expect(suggestedLocale({ pageLocale: 'es', cookie: '', languages: ['es-MX'], declined: [] })).toBeNull();
    expect(suggestedLocale({ pageLocale: 'en', cookie: '', languages: ['ko', 'xx'], declined: [] })).toBeNull();
    expect(suggestedLocale({ pageLocale: 'en', cookie: '', languages: ['de'], declined: ['de'] })).toBeNull();
  });

  it('shows the banner in the suggested language with the alternate URL, and remembers a decline', () => {
    document.documentElement.lang = 'en';
    document.head.innerHTML = '<link rel="alternate" hreflang="es" href="https://sotf-mods.com/es/mods?page=2">';
    document.body.innerHTML = `<div data-lang-suggest hidden><p data-lang-suggest-text></p>
      <a data-lang-suggest-accept href="/"></a><button data-lang-suggest-decline></button></div>`;
    vi.stubGlobal('navigator', { ...navigator, languages: ['es-ES', 'en'], language: 'es-ES' });
    expect(initLangSuggest()).toBe('es');
    const banner = document.querySelector<HTMLElement>('[data-lang-suggest]');
    expect(banner?.hidden).toBe(false);
    expect(document.querySelector('[data-lang-suggest-text]')?.textContent).toBe('¿Ver esta página en Español?');
    expect(document.querySelector('[data-lang-suggest-text]')?.getAttribute('lang')).toBe('es');
    expect(document.querySelector<HTMLAnchorElement>('[data-lang-suggest-accept]')?.getAttribute('href')).toBe(
      '/es/mods?page=2',
    );
    document.querySelector<HTMLButtonElement>('[data-lang-suggest-decline]')?.click();
    expect(banner?.hidden).toBe(true);
    expect(JSON.parse(localStorage.getItem('sotf-lang-declined') ?? '[]')).toEqual(['es']);
    expect(initLangSuggest()).toBeNull();
  });

  it('stays hidden when the page has no alternate in that language', () => {
    document.documentElement.lang = 'en';
    document.body.innerHTML =
      '<div data-lang-suggest hidden><p data-lang-suggest-text></p><a data-lang-suggest-accept></a><button data-lang-suggest-decline></button></div>';
    vi.stubGlobal('navigator', { ...navigator, languages: ['fr'], language: 'fr' });
    expect(initLangSuggest()).toBeNull();
  });
});

describe('account hint (PLAN §5.1)', () => {
  it('detects the sotf_li hint exactly', () => {
    expect(hasSignedInHint('sotf_li=1')).toBe(true);
    expect(hasSignedInHint('a=b; sotf_li=1; c=d')).toBe(true);
    expect(hasSignedInHint('sotf_li=0')).toBe(false);
    expect(hasSignedInHint('xsotf_li=1')).toBe(false);
    expect(initialsOf('Axel Menu')).toBe('AM');
    expect(initialsOf('imaxel')).toBe('IM');
  });

  it('guests never call the API', async () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    expect(await initAccountHint()).toBeNull();
    expect(fetch).not.toHaveBeenCalled();
    expect(document.documentElement.hasAttribute('data-guest')).toBe(true);
  });

  it('signed-in hint: fetches the summary and upgrades the slot', async () => {
    setCookie('sotf_li=1; Path=/');
    document.body.innerHTML = `<div data-account-slot><a data-account-guest href="/login">Sign in</a>
      <a data-account-user hidden href="/dashboard"><span data-account-name></span><span data-account-initials></span></a></div>`;
    const summary = {
      id: 1,
      handle: 'imaxel',
      displayName: 'ImAxel',
      avatarUrl: null,
      role: 'user',
      emailVerified: true,
      unreadNotifications: 2,
    };
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(JSON.stringify(summary), { status: 200 })),
    );
    const events: unknown[] = [];
    window.addEventListener('sotf:account', (event) => events.push((event as CustomEvent).detail));
    expect(await initAccountHint()).toEqual(summary);
    expect(document.querySelector<HTMLElement>('[data-account-guest]')?.hidden).toBe(true);
    const user = document.querySelector<HTMLElement>('[data-account-user]');
    expect(user?.hidden).toBe(false);
    expect(user?.querySelector('[data-account-name]')?.textContent).toBe('ImAxel (@imaxel)');
    expect(user?.querySelector('[data-account-initials]')?.textContent).toBe('IM');
    expect(events).toEqual([summary]);
  });

  it('a stale hint (401) falls back to guest', async () => {
    setCookie('sotf_li=1; Path=/');
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('', { status: 401 })),
    );
    expect(await initAccountHint()).toBeNull();
    expect(document.documentElement.hasAttribute('data-guest')).toBe(true);
    expect(document.documentElement.hasAttribute('data-signed-in')).toBe(false);
  });
});

describe('ads (PLAN §8.5)', () => {
  it('reads the publisher only from a well-formed meta', () => {
    expect(adClient()).toBeNull();
    document.head.innerHTML = '<meta name="google-adsense-account" content="ca-pub-2799839819522052">';
    expect(adClient()).toBe('ca-pub-2799839819522052');
    expect(publisherId('ca-pub-2799839819522052')).toBe('pub-2799839819522052');
    expect(publisherId('x')).toBeNull();
  });

  it('does nothing without a publisher, on NSFW content or on screens without publisher content', async () => {
    document.body.innerHTML = '<ins class="adsbygoogle" data-ad-slot="1"></ins>';
    expect(await initAds()).toBe(0);
    document.head.innerHTML = '<meta name="google-adsense-account" content="ca-pub-2799839819522052">';
    document.body.innerHTML = '<div data-nsfw></div><ins class="adsbygoogle" data-ad-slot="1"></ins>';
    expect(await initAds()).toBe(0);
    document.body.innerHTML = '<ins class="adsbygoogle" data-ad-slot="1"></ins>';
    document.body.setAttribute('data-no-ads', '');
    expect(await initAds()).toBe(0);
    document.body.removeAttribute('data-no-ads');
    expect(isNoAdsPage()).toBe(false);
    expect(document.querySelector('script')).toBeNull();
  });

  it('waits for the CMP to settle', () => {
    expect(consentSettled({ gdprApplies: false })).toBe(true);
    expect(consentSettled({ gdprApplies: true, eventStatus: 'cmpuishown' })).toBe(false);
    expect(consentSettled({ gdprApplies: true, eventStatus: 'useractioncomplete' })).toBe(true);
    expect(consentSettled({ gdprApplies: true, eventStatus: 'tcloaded' })).toBe(true);
  });
});

describe('beacon (PLAN §9.3)', () => {
  it('respects Global Privacy Control and Do Not Track', () => {
    expect(trackingAllowed({ doNotTrack: null } as Navigator)).toBe(true);
    expect(trackingAllowed({ doNotTrack: '1' } as Navigator)).toBe(false);
    expect(trackingAllowed({ doNotTrack: null, globalPrivacyControl: true } as unknown as Navigator)).toBe(false);
  });

  it('reads the page entity from <html>', () => {
    const root = document.createElement('html');
    root.dataset.entityType = 'mod';
    root.dataset.entityId = '20';
    expect(pageEntity(root)).toEqual({ entityType: 'mod', entityId: 20 });
    root.dataset.entityType = 'nope';
    expect(pageEntity(root)).toEqual({});
  });
});

describe('relogin, shortcuts', () => {
  it('dismisses the relogin banner', () => {
    document.documentElement.dataset.relogin = '1';
    document.body.innerHTML = '<div data-relogin-banner><button data-relogin-dismiss>x</button></div>';
    initReloginBanner();
    document.querySelector<HTMLButtonElement>('[data-relogin-dismiss]')?.click();
    expect(document.documentElement.hasAttribute('data-relogin')).toBe(false);
  });

  it('opens the palette with ⌘K / Ctrl+K and / (not while typing)', () => {
    const input = document.createElement('input');
    expect(isPaletteShortcut({ key: 'k', metaKey: true, ctrlKey: false, altKey: false, target: document.body })).toBe(
      true,
    );
    expect(isPaletteShortcut({ key: 'K', metaKey: false, ctrlKey: true, altKey: false, target: input })).toBe(true);
    expect(isPaletteShortcut({ key: '/', metaKey: false, ctrlKey: false, altKey: false, target: document.body })).toBe(
      true,
    );
    expect(isPaletteShortcut({ key: '/', metaKey: false, ctrlKey: false, altKey: false, target: input })).toBe(false);
    expect(isPaletteShortcut({ key: 'k', metaKey: false, ctrlKey: false, altKey: false, target: document.body })).toBe(
      false,
    );
  });
});
