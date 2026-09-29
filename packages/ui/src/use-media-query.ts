import { useCallback, useSyncExternalStore } from 'react';

/**
 * Subscribes to a media query. On the server (and during hydration) it returns
 * `serverValue` (default `false`), so render only non-critical differences from it.
 */
export function useMediaQuery(query: string, serverValue = false): boolean {
  const subscribe = useCallback(
    (notify: () => void) => {
      if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return () => {};
      const list = window.matchMedia(query);
      list.addEventListener('change', notify);
      return () => list.removeEventListener('change', notify);
    },
    [query],
  );
  const getSnapshot = () =>
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia(query).matches
      : serverValue;
  return useSyncExternalStore(subscribe, getSnapshot, () => serverValue);
}

/** Viewports below the `md` breakpoint (48rem), where dialogs become bottom sheets. */
export const BELOW_MD_QUERY = '(max-width: 47.99rem)';
