/**
 * Offline install guide (PLAN §7.14 T2): registers `/sw.js` when the visitor reads `/install`, so
 * the guide (and the assets it needs) keep working without a connection. Anywhere else nothing is
 * registered; browsers without service workers simply skip it.
 */
const GUIDE = /^\/(?:[a-z]{2}\/)?install\/?$/;

export function initOfflineGuides(): void {
  if (!('serviceWorker' in navigator) || !GUIDE.test(location.pathname)) return;
  navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(() => {});
}
