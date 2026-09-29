/**
 * Theme plumbing (PLAN §3.3): `data-theme="dark" | "light" | "system"` on `<html>`.
 *
 * - Night (`dark`) is the default and is what the server renders: public HTML is identical for
 *   everyone, so the preference lives only in `localStorage` (never in a cookie).
 * - `THEME_INIT_SCRIPT` (≤ 200 B) goes inline in `<head>`, before any stylesheet paints, and
 *   applies the stored preference without a flash of the wrong theme.
 * - `setTheme()` persists, applies and notifies (`sotf:themechange` on `window`), so every
 *   `ThemeToggle` on the page, hydrated (React) or not (`bindThemeToggles`), stays in sync.
 *
 * This module has no React dependency: the public pages import it from their vanilla scripts
 * (`@sotf/ui/theme`).
 */

export const THEMES = ['dark', 'light', 'system'] as const;
export type Theme = (typeof THEMES)[number];

export const DEFAULT_THEME: Theme = 'dark';

/** `localStorage` key of the stored preference. */
export const THEME_STORAGE_KEY = 'sotf-theme';

/** Event dispatched on `window` after the theme changes (`detail` is the new theme). */
export const THEME_CHANGE_EVENT = 'sotf:themechange';

/**
 * Inline `<head>` script. Keep it byte-for-byte in sync with `THEME_STORAGE_KEY` and `THEMES`
 * (a unit test checks both, and the ≤ 200 B budget). Render it with Astro's
 * `<script is:inline set:html={THEME_INIT_SCRIPT} />` (plus the CSP hash, see `themeInitScriptHash`).
 */
export const THEME_INIT_SCRIPT =
  'try{var t=localStorage.getItem("sotf-theme");if(t=="light"||t=="system")document.documentElement.dataset.theme=t}catch(e){}';

export function isTheme(value: unknown): value is Theme {
  return typeof value === 'string' && (THEMES as readonly string[]).includes(value);
}

/** SHA-256 CSP source (`'sha256-…'`) of an inline script, for `script-src`. */
export async function cspScriptHash(source: string): Promise<string> {
  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(source)));
  let binary = '';
  for (const byte of digest) binary += String.fromCharCode(byte);
  return `'sha256-${btoa(binary)}'`;
}

/** CSP hash of `THEME_INIT_SCRIPT`. */
export function themeInitScriptHash(): Promise<string> {
  return cspScriptHash(THEME_INIT_SCRIPT);
}

function storage(): Storage | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    // Storage can throw (disabled cookies, sandboxed iframes): behave as "no preference".
    return null;
  }
}

/** Stored preference, or the default when nothing valid is stored. */
export function readTheme(): Theme {
  let stored: string | null = null;
  try {
    stored = storage()?.getItem(THEME_STORAGE_KEY) ?? null;
  } catch {
    stored = null;
  }
  return isTheme(stored) ? stored : DEFAULT_THEME;
}

/** Theme currently applied to `<html>` (what the init script or `setTheme` left there). */
export function appliedTheme(doc: Document = document): Theme {
  const value = doc.documentElement.dataset.theme;
  return isTheme(value) ? value : DEFAULT_THEME;
}

/** Applies a theme to `<html>` without persisting it. */
export function applyTheme(theme: Theme, doc: Document = document): void {
  doc.documentElement.dataset.theme = theme;
}

/** Persists, applies and broadcasts a theme. */
export function setTheme(theme: Theme, doc: Document = document): void {
  try {
    const store = storage();
    if (theme === DEFAULT_THEME) store?.removeItem(THEME_STORAGE_KEY);
    else store?.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Quota or privacy mode: the theme still applies for this page view.
  }
  applyTheme(theme, doc);
  doc.defaultView?.dispatchEvent(new CustomEvent<Theme>(THEME_CHANGE_EVENT, { detail: theme }));
}

/** Subscribes to theme changes made through `setTheme` (this tab) or in another tab. */
export function onThemeChange(listener: (theme: Theme) => void, win: Window = window): () => void {
  const local = (event: Event) => {
    const detail = (event as CustomEvent<unknown>).detail;
    if (isTheme(detail)) listener(detail);
  };
  const remote = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY) return;
    const theme = isTheme(event.newValue) ? event.newValue : DEFAULT_THEME;
    applyTheme(theme, win.document);
    listener(theme);
  };
  win.addEventListener(THEME_CHANGE_EVENT, local);
  win.addEventListener('storage', remote);
  return () => {
    win.removeEventListener(THEME_CHANGE_EVENT, local);
    win.removeEventListener('storage', remote);
  };
}

/** Selector of the theme radio group rendered by `ThemeToggle`. */
export const THEME_TOGGLE_SELECTOR = '[data-theme-toggle]';

function syncToggle(group: Element, theme: Theme): void {
  for (const input of group.querySelectorAll<HTMLInputElement>('input[type="radio"]')) {
    input.checked = input.value === theme;
  }
}

/**
 * Progressive enhancement for server-rendered (non-hydrated) `ThemeToggle`s: syncs them with the
 * applied theme and makes them switch it. Returns a cleanup function. Idempotent per element.
 */
export function bindThemeToggles(root: ParentNode = document): () => void {
  const groups = [...root.querySelectorAll<HTMLElement>(THEME_TOGGLE_SELECTOR)].filter(
    (group) => group.dataset.themeToggleBound !== 'true',
  );
  const current = appliedTheme();
  const onChange = (event: Event) => {
    const target = event.target;
    if (target instanceof HTMLInputElement && target.type === 'radio' && isTheme(target.value)) {
      setTheme(target.value);
    }
  };
  for (const group of groups) {
    group.dataset.themeToggleBound = 'true';
    syncToggle(group, current);
    group.addEventListener('change', onChange);
  }
  const unsubscribe = onThemeChange((theme) => {
    for (const group of groups) syncToggle(group, theme);
  });
  return () => {
    unsubscribe();
    for (const group of groups) {
      group.removeEventListener('change', onChange);
      delete group.dataset.themeToggleBound;
    }
  };
}
