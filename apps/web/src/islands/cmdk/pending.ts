/**
 * Actions that finish on the next page. «Report» in the palette cannot open the report dialog of a
 * mod page it is not on, so it leaves a note in `sessionStorage` and navigates; the page (this
 * file is imported by `Trigger.ts`, which every page loads, so it stays tiny) then clicks the
 * page's own «Report» button, which opens the real dialog with its sign-in and e-mail checks.
 */
const KEY = 'sotf-cmdk-pending';

export function leavePending(action: 'report', path: string): void {
  try {
    sessionStorage.setItem(KEY, JSON.stringify({ action, path, at: Date.now() }));
  } catch {
    // Private mode: the visitor just lands on the page and clicks «Report» there.
  }
}

/** Runs the pending action if this page is the one it was left for (and recent). */
export function resumePending(doc: Document = document): void {
  type Note = { action?: unknown; path?: unknown; at?: unknown };
  const note = ((): Note | null => {
    try {
      const raw = sessionStorage.getItem(KEY);
      if (!raw) return null;
      sessionStorage.removeItem(KEY);
      return JSON.parse(raw) as Note | null;
    } catch {
      return null;
    }
  })();
  if (note?.action !== 'report' || typeof note.path !== 'string' || typeof note.at !== 'number') return;
  if (Date.now() - note.at > 15_000) return;
  let here = doc.location.pathname;
  let wanted = note.path;
  try {
    here = decodeURIComponent(here).replace(/\/$/, '');
    wanted = decodeURIComponent(wanted).replace(/\/$/, '');
  } catch {
    return;
  }
  if (!here.endsWith(wanted)) return;
  const open = () => doc.querySelector<HTMLElement>('[data-dialog-open="report-dialog"]')?.click();
  // The page's scripts bind the button when they start: wait for them.
  if (doc.readyState === 'complete') setTimeout(open, 300);
  else doc.defaultView?.addEventListener('load', () => setTimeout(open, 300), { once: true });
}
