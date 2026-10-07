/**
 * `?filter=` of `/notifications`. Kept apart from `api.ts` because the route's `validateSearch` runs in
 * the eager route tree (the console shell budget, PLAN §12.3 WP-34).
 */
export const SIGNAL_FILTERS = ['all', 'mentions', 'updates', 'my_mods', 'ranger'] as const;
export type SignalFilter = (typeof SIGNAL_FILTERS)[number];

export function isSignalFilter(value: unknown): value is SignalFilter {
  return typeof value === 'string' && (SIGNAL_FILTERS as readonly string[]).includes(value);
}

/** Page sizes of `/notifications`. */
export const SIGNAL_PAGE_SIZES = [20, 50, 100] as const;
export const DEFAULT_SIGNAL_PAGE_SIZE = 20;
