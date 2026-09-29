/**
 * Persistent dismissal of banners by id (research/03 §5.6: «descartable y persistente por ID»).
 * Stored in `localStorage` only, so cached public HTML stays identical for everyone.
 *
 * `BANNER_INIT_SCRIPT` (inline in `<head>`, optional) hides dismissed banners before the first
 * paint: no flash and no layout shift when a returning visitor already closed one. Allow it in
 * the CSP with `cspScriptHash(BANNER_INIT_SCRIPT)` from `@sotf/ui/theme`.
 */

export const DISMISSED_STORAGE_KEY = 'sotf-dismissed';

/** Ids are restricted so they are safe inside a CSS attribute selector. */
export const BANNER_ID_PATTERN = /^[a-z0-9][a-z0-9._-]{0,63}$/i;

export const BANNER_INIT_SCRIPT =
  'try{var d=JSON.parse(localStorage.getItem("sotf-dismissed")||"[]"),s="";for(var i of d)if(/^[a-z0-9][a-z0-9._-]{0,63}$/i.test(i))s+=\'[data-banner-id="\'+i+\'"]{display:none!important}\';if(s){var e=document.createElement("style");e.textContent=s;document.head.appendChild(e)}}catch(e){}';

export function readDismissed(): string[] {
  try {
    const raw = localStorage.getItem(DISMISSED_STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.filter((id): id is string => typeof id === 'string' && BANNER_ID_PATTERN.test(id))
      : [];
  } catch {
    return [];
  }
}

export function isDismissed(id: string): boolean {
  return readDismissed().includes(id);
}

/** Remembers a dismissal (keeps the 50 most recent ids). */
export function rememberDismissal(id: string): void {
  if (!BANNER_ID_PATTERN.test(id)) return;
  try {
    const ids = readDismissed().filter((existing) => existing !== id);
    ids.push(id);
    localStorage.setItem(DISMISSED_STORAGE_KEY, JSON.stringify(ids.slice(-50)));
  } catch {
    // Storage unavailable: the banner is dismissed for this page view only.
  }
}
