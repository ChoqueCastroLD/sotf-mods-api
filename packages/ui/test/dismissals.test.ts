// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';
import {
  BANNER_INIT_SCRIPT,
  DISMISSED_STORAGE_KEY,
  isDismissed,
  readDismissed,
  rememberDismissal,
} from '../src/dismissals.ts';
import { bindBanners } from '../src/enhance.ts';
import { runScript } from './helpers/dom.ts';

describe('banner dismissals', () => {
  it('persists ids, ignores unsafe ones and caps the list', () => {
    localStorage.clear();
    rememberDismissal('patch-1.0.4');
    rememberDismissal('"]{}*{display:none');
    expect(readDismissed()).toEqual(['patch-1.0.4']);
    expect(isDismissed('patch-1.0.4')).toBe(true);
    for (let i = 0; i < 60; i++) rememberDismissal(`b${i}`);
    expect(readDismissed()).toHaveLength(50);
  });

  it('the init script hides dismissed banners before paint and survives garbage', () => {
    localStorage.setItem(DISMISSED_STORAGE_KEY, JSON.stringify(['winter-2026', 'x"]{}']));
    document.body.innerHTML = '<div data-banner-id="winter-2026">snow</div><div data-banner-id="other">x</div>';
    runScript(BANNER_INIT_SCRIPT);
    const style = document.head.querySelector('style');
    expect(style?.textContent).toBe('[data-banner-id="winter-2026"]{display:none!important}');
    style?.remove();
    localStorage.setItem(DISMISSED_STORAGE_KEY, '{not json');
    expect(() => runScript(BANNER_INIT_SCRIPT)).not.toThrow();
  });

  it('bindBanners hides and remembers server-rendered banners', () => {
    localStorage.clear();
    document.body.innerHTML =
      '<div data-banner-id="patch-2"><p>New patch</p><button data-banner-dismiss>×</button></div>';
    const cleanup = bindBanners();
    document.querySelector<HTMLButtonElement>('[data-banner-dismiss]')?.click();
    expect(document.querySelector<HTMLElement>('[data-banner-id]')?.hidden).toBe(true);
    expect(isDismissed('patch-2')).toBe(true);
    cleanup();
  });
});
