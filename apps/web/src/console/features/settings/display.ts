/**
 * Applies the display preferences of `User.settings` to this browser (PLAN §3.3, §7.12):
 *
 * - theme → `setTheme()` of `@sotf/ui/theme` (persists in `localStorage`, so the public pages and
 *   the next visit paint the same theme without a flash);
 * - density → `<html data-density="compact">`;
 * - reduced motion override → `<html data-motion="reduce" | "full">` (absent = follow the OS).
 *
 * The console shell calls it after `/me` loads (docs/backlog/WP-81.md); the Preferences screen
 * calls it right after saving. The tokens honour both attributes (docs/backlog/WP-81.md).
 */
import { setTheme } from '@sotf/ui/theme';

export interface DisplayPreferences {
  theme: 'system' | 'dark' | 'light';
  density: 'comfortable' | 'compact';
  reducedMotion: boolean | null;
}

export function applyDisplayPreferences(settings: DisplayPreferences, doc: Document = document): void {
  if (doc.documentElement.dataset.theme !== settings.theme) setTheme(settings.theme, doc);
  const root = doc.documentElement;
  if (settings.density === 'compact') root.dataset.density = 'compact';
  else delete root.dataset.density;
  if (settings.reducedMotion === null) delete root.dataset.motion;
  else root.dataset.motion = settings.reducedMotion ? 'reduce' : 'full';
}
