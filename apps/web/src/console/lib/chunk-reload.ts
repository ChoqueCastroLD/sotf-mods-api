/**
 * Recovery from stale chunks. Route code is split per route (`autoCodeSplitting`); after a deploy
 * the old hashed files are gone, so a tab opened before it fails to load the next route. The fix
 * is a full reload, done **once**: a reload within {@link RELOAD_GUARD_MS} of the previous one is
 * refused, so a genuinely broken asset shows the «new version» error state with a manual Reload
 * button instead of looping.
 */
import { isChunkLoadError } from './errors.ts';

const RELOAD_KEY = 'sotf_console_chunk_reload_at';
export const RELOAD_GUARD_MS = 30_000;

interface SessionStorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

function sessionStore(): SessionStorageLike | null {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

/** Whether an automatic reload is allowed now (records the attempt when it is). */
export function claimReload(store: SessionStorageLike | null = sessionStore(), now = Date.now()): boolean {
  if (!store) return true;
  try {
    const last = Number(store.getItem(RELOAD_KEY) ?? 0);
    if (Number.isFinite(last) && last > 0 && now - last < RELOAD_GUARD_MS) return false;
    store.setItem(RELOAD_KEY, String(now));
  } catch {
    // Storage failures must not block the recovery.
  }
  return true;
}

/** Reloads the page for a new version; false when a reload just happened (show the error). */
export function reloadForNewVersion(): boolean {
  if (!claimReload()) return false;
  window.location.reload();
  return true;
}

/**
 * Listens for Vite's `vite:preloadError` (a dynamic import or its CSS failed) and for unhandled
 * chunk-load rejections, and reloads once. Returns the cleanup function.
 */
export function installChunkErrorRecovery(): () => void {
  const onPreloadError = (event: Event) => {
    if (reloadForNewVersion()) event.preventDefault();
  };
  const onRejection = (event: PromiseRejectionEvent) => {
    if (isChunkLoadError(event.reason) && reloadForNewVersion()) event.preventDefault();
  };
  window.addEventListener('vite:preloadError', onPreloadError);
  window.addEventListener('unhandledrejection', onRejection);
  return () => {
    window.removeEventListener('vite:preloadError', onPreloadError);
    window.removeEventListener('unhandledrejection', onRejection);
  };
}
