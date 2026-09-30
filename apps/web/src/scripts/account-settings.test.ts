// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const session = vi.hoisted(() => ({ summary: null as { id: number } | null }));
const api = vi.hoisted(() => ({
  apiCall: vi.fn(async (): Promise<unknown> => ({ ok: false, status: 500, reason: 'error' })),
}));

vi.mock('./mod/session.ts', () => ({ whenSession: async () => session.summary }));
vi.mock('./mod/api.ts', () => api);

const {
  accountSettings,
  applyDisplaySettings,
  initDisplayPreferences,
  normalizeSettings,
  resetAccountSettingsForTests,
} = await import('./account-settings.ts');

const ME = { theme: 'light', density: 'compact', reducedMotion: true, nsfwOptIn: true };

beforeEach(() => {
  resetAccountSettingsForTests();
  sessionStorage.clear();
  localStorage.clear();
  session.summary = null;
  api.apiCall.mockReset();
  const root = document.documentElement;
  for (const name of ['data-theme', 'data-density', 'data-motion']) root.removeAttribute(name);
});

afterEach(() => vi.restoreAllMocks());

describe('account settings on public pages (WP-81, WP-A2)', () => {
  it('never asks the API for guests', async () => {
    expect(await accountSettings(window)).toBeNull();
    await initDisplayPreferences(window);
    expect(api.apiCall).not.toHaveBeenCalled();
    expect(document.documentElement.dataset.density).toBeUndefined();
  });

  it('reads /me once per browser session and applies theme, density and motion', async () => {
    session.summary = { id: 7 };
    api.apiCall.mockResolvedValue({ ok: true, status: 200, data: { settings: ME } });
    await initDisplayPreferences(window);
    const root = document.documentElement;
    expect(api.apiCall).toHaveBeenCalledWith('GET', '/api/v2/me');
    expect(root.dataset.theme).toBe('light');
    expect(root.dataset.density).toBe('compact');
    expect(root.dataset.motion).toBe('reduce');
    expect((await accountSettings(window))?.nsfwOptIn).toBe(true);

    // Next page of the same browser session: no request, and the theme picked meanwhile with the
    // header toggle is kept.
    resetAccountSettingsForTests();
    root.dataset.theme = 'dark';
    delete root.dataset.density;
    await initDisplayPreferences(window);
    expect(api.apiCall).toHaveBeenCalledTimes(1);
    expect(root.dataset.theme).toBe('dark');
    expect(root.dataset.density).toBe('compact');
  });

  it('stays quiet when /me fails', async () => {
    session.summary = { id: 8 };
    api.apiCall.mockResolvedValue({ ok: false, status: 401, reason: 'unauthenticated' });
    expect(await accountSettings(window)).toBeNull();
    expect(sessionStorage.length).toBe(0);
  });

  it('normalizes unknown or partial settings', () => {
    expect(normalizeSettings(null)).toBeNull();
    expect(normalizeSettings({ theme: 'neon', density: 'x', reducedMotion: 'yes' })).toEqual({
      theme: 'system',
      density: 'comfortable',
      reducedMotion: null,
      nsfwOptIn: false,
    });
  });

  it('follows the OS again when the motion override is cleared', () => {
    const root = document.documentElement;
    applyDisplaySettings(
      { theme: 'system', density: 'comfortable', reducedMotion: false, nsfwOptIn: false },
      document,
      false,
    );
    expect(root.dataset.motion).toBe('full');
    applyDisplaySettings(
      { theme: 'system', density: 'comfortable', reducedMotion: null, nsfwOptIn: false },
      document,
      false,
    );
    expect(root.dataset.motion).toBeUndefined();
    expect(root.dataset.theme).toBeUndefined();
  });
});
