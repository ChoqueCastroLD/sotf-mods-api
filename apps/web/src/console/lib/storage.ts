/**
 * `localStorage` that never throws (Safari private mode, disabled storage, quota).
 */
export const storage = {
  get(key: string): string | null {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string): void {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Preferences are a convenience: losing them is harmless.
    }
  },
  remove(key: string): void {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // Same as above.
    }
  },
};

/** Keys used by the console platform. */
export const STORAGE_KEYS = {
  locale: 'sotf_console_locale',
  sidebarCollapsed: 'sotf_console_sidebar_collapsed',
} as const;
