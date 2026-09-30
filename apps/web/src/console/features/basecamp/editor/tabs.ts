/**
 * Tabs of the mod editor. Kept apart from `ModEditorScreen.tsx` because the route's
 * `validateSearch` runs in the eager route tree: importing the screen there would pull the whole
 * editor into the console shell.
 */
export const EDITOR_TABS = ['listing', 'media', 'versions', 'knowledge', 'team', 'compat', 'bundles', 'settings'] as const;
export type EditorTab = (typeof EDITOR_TABS)[number];

export function isEditorTab(value: unknown): value is EditorTab {
  return typeof value === 'string' && (EDITOR_TABS as readonly string[]).includes(value);
}

/** Tabs a co-author can open: the rest of the editor stays with the owner. */
export const COAUTHOR_TABS: readonly EditorTab[] = ['versions', 'knowledge', 'team'];
