/**
 * Registers `/sw.js` (when idle, never competing with the page) and hands it the offline page of
 * the current language to precache, plus the install guide when that is the page being read (so
 * even the first visit leaves it available offline). The worker answers navigations only when
 * the network is unreachable (offline page, install guide); see `public/sw.js`. Browsers without
 * service workers, and insecure contexts, simply skip it.
 */
const GUIDE = /^\/(?:[a-z]{2}\/)?install\/?$/;

/** `/offline` in the language of the current URL (`/es/mods` → `/es/offline`); no i18n code ships. */
export function offlinePageFor(pathname: string): string {
  const prefix = /^\/([a-z]{2})(?:\/|$)/.exec(pathname)?.[1];
  return prefix ? `/${prefix}/offline` : '/offline';
}

export async function initServiceWorker(win: Window = window): Promise<void> {
  if (!('serviceWorker' in win.navigator) || !win.isSecureContext) return;
  const registration = await win.navigator.serviceWorker.register('/sw.js', { scope: '/' });
  const ready = await win.navigator.serviceWorker.ready;
  const worker = ready.active ?? registration.active;
  worker?.postMessage({ type: 'offline-page', url: offlinePageFor(win.location.pathname) });
  if (GUIDE.test(win.location.pathname)) worker?.postMessage({ type: 'guide-page', url: win.location.pathname });
}
