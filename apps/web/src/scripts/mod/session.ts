/**
 * Signed-in state for the page scripts. Public HTML is the guest version for everyone; the
 * header's account hint (`scripts/account-hint.ts`) resolves the session only when the `sotf_li`
 * cookie exists and announces it with the `sotf:account` event. Guests never pay for a request.
 */
import { ACCOUNT_EVENT, hasSignedInHint, type MeSummary } from '../account-hint.ts';

let pending: Promise<MeSummary | null> | undefined;

/** The signed-in summary, or null for guests (resolves once; 8 s budget). */
export function whenSession(win: Window = window): Promise<MeSummary | null> {
  if (pending) return pending;
  const doc = win.document;
  if (!hasSignedInHint(doc.cookie)) {
    pending = Promise.resolve(null);
    return pending;
  }
  pending = new Promise<MeSummary | null>((resolve) => {
    let settled = false;
    const finish = (value: MeSummary | null) => {
      if (settled) return;
      settled = true;
      observer.disconnect();
      win.clearTimeout(timer);
      win.clearTimeout(fallback);
      resolve(value);
    };
    win.addEventListener(ACCOUNT_EVENT, (event) => finish((event as CustomEvent<MeSummary>).detail ?? null), {
      once: true,
    });
    // A stale hint: the account script flips <html> to guest.
    const observer = new MutationObserver(() => {
      if ('guest' in doc.documentElement.dataset) finish(null);
    });
    observer.observe(doc.documentElement, { attributes: true, attributeFilter: ['data-guest'] });
    // The header script normally announces the session; if its event fired before this module
    // listened (script order), ask for the summary directly.
    const fallback = win.setTimeout(() => {
      if (settled || !('signedIn' in doc.documentElement.dataset)) return;
      void fetch('/api/v2/me/summary', { credentials: 'same-origin', headers: { accept: 'application/json' } })
        .then((response) => (response.ok ? (response.json() as Promise<MeSummary>) : null))
        .then((summary) => finish(summary))
        .catch(() => finish(null));
    }, 2500);
    const timer = win.setTimeout(() => finish(null), 8000);
  });
  return pending;
}
