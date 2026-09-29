// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { enhance } from '../src/enhance.ts';
import {
  appliedTheme,
  bindThemeToggles,
  DEFAULT_THEME,
  onThemeChange,
  readTheme,
  setTheme,
  THEME_CHANGE_EVENT,
  THEME_INIT_SCRIPT,
  THEME_STORAGE_KEY,
  THEMES,
  themeInitScriptHash,
} from '../src/theme.ts';
import { runScript } from './helpers/dom.ts';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.dataset.theme = 'dark';
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('theme init script', () => {
  it('fits the 200 B budget (PLAN §3.3)', () => {
    expect(new TextEncoder().encode(THEME_INIT_SCRIPT).length).toBeLessThanOrEqual(200);
  });

  it('uses the storage key and the non-default themes of the module', () => {
    expect(THEME_INIT_SCRIPT).toContain(`"${THEME_STORAGE_KEY}"`);
    for (const theme of THEMES.filter((value) => value !== DEFAULT_THEME)) {
      expect(THEME_INIT_SCRIPT).toContain(`"${theme}"`);
    }
  });

  it.each([
    [null, 'dark'],
    ['light', 'light'],
    ['system', 'system'],
    ['dark', 'dark'],
    ['<script>', 'dark'],
  ])('stored %s → data-theme=%s', (stored, expected) => {
    if (stored !== null) localStorage.setItem(THEME_STORAGE_KEY, stored);
    // jsdom does not execute inline scripts: run the exact source text instead.
    runScript(THEME_INIT_SCRIPT);
    expect(document.documentElement.dataset.theme).toBe(expected);
  });

  it('never throws when storage is unavailable', () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('SecurityError');
    });
    expect(() => runScript(THEME_INIT_SCRIPT)).not.toThrow();
    expect(readTheme()).toBe('dark');
    spy.mockRestore();
  });

  it('exposes a CSP hash of the script', async () => {
    expect(await themeInitScriptHash()).toMatch(/^'sha256-[A-Za-z0-9+/]{43}='$/);
  });
});

describe('setTheme / readTheme', () => {
  it('persists non-default themes, applies and broadcasts', () => {
    const listener = vi.fn();
    window.addEventListener(THEME_CHANGE_EVENT, listener);
    setTheme('light');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
    expect(appliedTheme()).toBe('light');
    expect(readTheme()).toBe('light');
    expect(listener).toHaveBeenCalledTimes(1);
    setTheme('dark');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBeNull();
    expect(appliedTheme()).toBe('dark');
    window.removeEventListener(THEME_CHANGE_EVENT, listener);
  });

  it('follows changes made in another tab', () => {
    const listener = vi.fn();
    const stop = onThemeChange(listener);
    window.dispatchEvent(new StorageEvent('storage', { key: THEME_STORAGE_KEY, newValue: 'system' }));
    expect(listener).toHaveBeenCalledWith('system');
    expect(appliedTheme()).toBe('system');
    stop();
  });
});

describe('bindThemeToggles (server-rendered ThemeToggle)', () => {
  function markup(name: string): string {
    return `<fieldset data-theme-toggle>${['dark', 'light', 'system']
      .map((value) => `<label><input type="radio" name="${name}" value="${value}"></label>`)
      .join('')}</fieldset>`;
  }

  it('syncs every toggle with the applied theme and switches it on change', () => {
    document.documentElement.dataset.theme = 'system';
    document.body.innerHTML = markup('a') + markup('b');
    const cleanup = enhance();
    const radios = [...document.querySelectorAll<HTMLInputElement>('input[type="radio"]')];
    expect(radios.filter((radio) => radio.checked).map((radio) => radio.value)).toEqual(['system', 'system']);

    const light = radios.find((radio) => radio.name === 'a' && radio.value === 'light');
    light?.click();
    expect(appliedTheme()).toBe('light');
    // The other toggle follows.
    expect(radios.find((radio) => radio.name === 'b' && radio.value === 'light')?.checked).toBe(true);

    // Idempotent: binding twice does not double-handle.
    const again = bindThemeToggles();
    again();
    cleanup();
  });
});
