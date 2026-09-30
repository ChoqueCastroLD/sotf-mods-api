/**
 * The signed-in account's `User.settings` on public pages (PLAN §3.3, §7.12, T0-30;
 * docs/backlog/WP-81.md «display preferences on load», WP-A2.md).
 *
 * Public HTML is the guest version for everyone, so what depends on the account is applied in
 * the browser:
 *
 * - display preferences: theme (persisted by `setTheme`), density and the reduced-motion
 *   override as `<html data-density>` / `<html data-motion>` (same rules as the console's
 *   `applyDisplayPreferences`);
 * - the 18+ opt-in, read by the Explore script;
 * - the language: adopted as this browser's saved language (`adoptAccountLocale`).
 *
 * `GET /api/v2/me` is asked **once per browser session** (members only; guests never pay a
 * request) and remembered in `sessionStorage`. The account theme is applied only on that first
 * read, so a theme picked later with the header toggle is not overridden on every page; density
 * and motion are re-applied from the remembered copy on every page.
 */
import { isLocale } from '@sotf/i18n/locales';
import { setTheme } from '@sotf/ui/theme';
import { setPreferredLocale } from '../lib/client/locale-pref.ts';
import { apiCall } from './mod/api.ts';
import { whenSession } from './mod/session.ts';

export interface AccountSettings {
  theme: 'system' | 'dark' | 'light';
  density: 'comfortable' | 'compact';
  /** null = follow the OS. */
  reducedMotion: boolean | null;
  nsfwOptIn: boolean;
}

const STORE_KEY = 'sotf:account-settings';

function sessionStore(win: Window): Storage | null {
  try {
    return win.sessionStorage;
  } catch {
    return null;
  }
}

/** Keeps only well-formed fields (the stored copy may come from an older build). */
export function normalizeSettings(value: unknown): AccountSettings | null {
  if (!value || typeof value !== 'object') return null;
  const raw = value as Record<string, unknown>;
  const theme = raw.theme === 'dark' || raw.theme === 'light' || raw.theme === 'system' ? raw.theme : 'system';
  const density = raw.density === 'compact' ? 'compact' : 'comfortable';
  const reducedMotion = typeof raw.reducedMotion === 'boolean' ? raw.reducedMotion : null;
  return { theme, density, reducedMotion, nsfwOptIn: raw.nsfwOptIn === true };
}

function remembered(win: Window, userId: string | number): AccountSettings | null {
  const text = sessionStore(win)?.getItem(`${STORE_KEY}:${userId}`);
  if (!text) return null;
  try {
    return normalizeSettings(JSON.parse(text));
  } catch {
    return null;
  }
}

/**
 * The account's language (`settings.locale`) becomes this browser's saved language on the first
 * read of the session, so a choice made elsewhere follows the member. Choices made here are
 * pushed to the account at once (`scripts/locale-pref.ts`), so the account is never older.
 */
function adoptAccountLocale(settings: unknown, win: Window): void {
  const locale = settings && typeof settings === 'object' ? (settings as { locale?: unknown }).locale : null;
  if (isLocale(locale)) setPreferredLocale(locale, win);
}

let pending: Promise<{ settings: AccountSettings; fresh: boolean } | null> | undefined;

async function resolve(win: Window): Promise<{ settings: AccountSettings; fresh: boolean } | null> {
  const summary = await whenSession(win);
  if (!summary) return null;
  const known = remembered(win, summary.id);
  if (known) return { settings: known, fresh: false };
  const me = await apiCall<{ settings?: unknown }>('GET', '/api/v2/me');
  if (!me.ok) return null;
  adoptAccountLocale(me.data.settings, win);
  const settings = normalizeSettings(me.data.settings);
  if (!settings) return null;
  try {
    sessionStore(win)?.setItem(`${STORE_KEY}:${summary.id}`, JSON.stringify(settings));
  } catch {
    // Storage full or disabled: the next page asks again.
  }
  return { settings, fresh: true };
}

/** The account settings (null for guests or when they could not be read). Resolves once per page. */
export async function accountSettings(win: Window = window): Promise<AccountSettings | null> {
  pending ??= resolve(win).catch(() => null);
  return (await pending)?.settings ?? null;
}

/** Applies density and motion (and the theme when `withTheme`) to the document. */
export function applyDisplaySettings(settings: AccountSettings, doc: Document, withTheme: boolean): void {
  const root = doc.documentElement;
  if (withTheme && root.dataset.theme !== settings.theme) setTheme(settings.theme, doc);
  if (settings.density === 'compact') root.dataset.density = 'compact';
  else delete root.dataset.density;
  if (settings.reducedMotion === null) delete root.dataset.motion;
  else root.dataset.motion = settings.reducedMotion ? 'reduce' : 'full';
}

/** Boot entry: members get their display preferences on every public page. */
export async function initDisplayPreferences(win: Window = window): Promise<void> {
  pending ??= resolve(win).catch(() => null);
  const result = await pending;
  if (!result) return;
  applyDisplaySettings(result.settings, win.document, result.fresh);
}

/** Test hook. */
export function resetAccountSettingsForTests(): void {
  pending = undefined;
}
