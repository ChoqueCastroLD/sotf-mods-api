/**
 * Sort orders of «My mods». Kept apart from `ModsScreen.tsx` because the route's `validateSearch`
 * runs in the eager route tree (importing the screen there would pull it into the console shell).
 */
export const MOD_SORTS = ['downloads', 'updated', 'name', 'rating', 'attention'] as const;
export type ModSort = (typeof MOD_SORTS)[number];
