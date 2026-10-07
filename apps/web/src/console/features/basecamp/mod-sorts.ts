/**
 * Sort orders of «My mods» (`STUDIO_MOD_SORTS` of the contracts) and the page sizes offered. Kept
 * apart from `ModsScreen.tsx` because the route's `validateSearch` runs in the eager route tree
 * (importing the screen there would pull it into the console shell).
 */
export const MOD_SORTS = ['updated', 'downloads', 'name', 'rating', 'attention'] as const;
export type ModSort = (typeof MOD_SORTS)[number];
export const DEFAULT_MOD_SORT: ModSort = 'updated';

export const MOD_PAGE_SIZES = [10, 20, 50] as const;
export const DEFAULT_MOD_PAGE_SIZE = 20;
