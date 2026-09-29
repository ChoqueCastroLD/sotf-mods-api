/**
 * Legacy session cleanup (PLAN §0.2 «Tokens legacy», §6.10): v2 does not migrate the legacy
 * tokens. On the first v2 page view an inline script (≤ 150 B, runs before paint) deletes
 * `localStorage.token` and the `token` cookie (`Max-Age=0; Path=/`) and flags `<html>` with
 * `data-relogin`, which reveals the «sign in again» banner rendered (hidden) by the layout. The
 * banner therefore appears once, on the first v2 page view of a browser that had a legacy session.
 */

/** Inline `<head>` script. Its CSP hash is derived from this exact string (`lib/security/csp.ts`). */
export const LEGACY_CLEANUP_SCRIPT =
  'try{var d=document,l=localStorage;if(l.token||/\\btoken=/.test(d.cookie))d.cookie="token=;Max-Age=0;Path=/",delete l.token,d.documentElement.dataset.relogin=1}catch(e){}';

export const RELOGIN_BANNER_ID = 'relogin';

/** Wires the dismiss button of the relogin banner. */
export function initReloginBanner(doc: Document = document): void {
  const banner = doc.querySelector<HTMLElement>('[data-relogin-banner]');
  if (!banner) return;
  banner.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('[data-relogin-dismiss]') : null;
    if (!target) return;
    delete doc.documentElement.dataset.relogin;
  });
}
