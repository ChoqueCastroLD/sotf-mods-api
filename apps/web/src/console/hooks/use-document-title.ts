/**
 * Document titles of the console («Title | SOTF Mods», `meta_title_template`).
 *
 * Static titles come from the route: `staticData: { title: () => m.… }` (the deepest match wins,
 * applied by the shell). Screens with a dynamic title (a mod name) call `useDocumentTitle(name)`,
 * which takes precedence while mounted.
 */

import { useEffect } from 'react';
import { t } from '../lib/messages.ts';

let dynamicTitle: string | null = null;

export function formatTitle(title: string | null | undefined): string {
  return title ? t('meta_title_template', { title }) : t('meta_site_name');
}

/** Sets the title from the route's static title unless a screen set a dynamic one. */
export function applyStaticTitle(title: string | null | undefined): void {
  if (dynamicTitle !== null) return;
  document.title = formatTitle(title);
}

export function useDocumentTitle(title: string | null | undefined): void {
  useEffect(() => {
    if (!title) return;
    dynamicTitle = title;
    document.title = formatTitle(title);
    return () => {
      dynamicTitle = null;
    };
  }, [title]);
}
