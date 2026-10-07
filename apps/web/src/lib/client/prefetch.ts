/**
 * Link prefetching for browsers without Speculation Rules (Firefox, Safari): the HTML of a
 * public page is fetched with `<link rel="prefetch">` when the pointer rests on its link for a
 * moment, or on touch start, so the click that follows is served from the HTTP cache. Chromium
 * does this itself from the rules in `lib/speculation.ts` (and prerenders detail pages), so
 * this script stays out of its way.
 *
 * Skipped: Save-Data and slow connections, other origins, anything the rules exclude (downloads,
 * the console, auth, APIs), links with `rel=nofollow`, `download` or `target`, and the current
 * page. Each URL is prefetched once.
 */
const HOVER_DELAY_MS = 80;
const EXCLUDED =
  /^(?:\/[a-z]{2})?\/(?:api|dashboard|moderation|settings|notifications|me|logout|oauth|login|register|forgot-password|reset-password|embed|_internal)(?:\/|$)|\/download(?:\/|$)|\.(?:xml|txt|md|json)$/;

const done = new Set<string>();

export function prefetchable(link: HTMLAnchorElement, origin: string, current: string): URL | null {
  if (!link.href || link.target === '_blank' || link.hasAttribute('download')) return null;
  if (/\bnofollow\b/.test(link.rel) || link.hasAttribute('data-no-prerender')) return null;
  let url: URL;
  try {
    url = new URL(link.href);
  } catch {
    return null;
  }
  if (url.origin !== origin || (url.protocol !== 'https:' && url.protocol !== 'http:')) return null;
  if (url.pathname === current && url.search === '') return null;
  if (EXCLUDED.test(url.pathname)) return null;
  return url;
}

function allowed(win: Window): boolean {
  const connection = (win.navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
    .connection;
  if (connection?.saveData) return false;
  return !/(?:^|-)2g$/.test(connection?.effectiveType ?? '');
}

export function initPrefetch(win: Window = window): void {
  const doc = win.document;
  // Chromium prefetches and prerenders from the speculation rules.
  if (typeof HTMLScriptElement !== 'undefined' && HTMLScriptElement.supports?.('speculationrules')) return;
  if (!doc.createElement('link').relList?.supports?.('prefetch')) return;
  let timer: number | undefined;
  const start = (event: Event) => {
    const link = (event.target as Element | null)?.closest?.('a');
    if (!link || !allowed(win)) return;
    const url = prefetchable(link, win.location.origin, win.location.pathname);
    if (!url || done.has(url.href)) return;
    const run = () => {
      done.add(url.href);
      const hint = doc.createElement('link');
      hint.rel = 'prefetch';
      hint.as = 'document';
      hint.href = url.href;
      doc.head.append(hint);
    };
    if (event.type === 'touchstart') run();
    else timer = win.setTimeout(run, HOVER_DELAY_MS);
  };
  const cancel = () => win.clearTimeout(timer);
  doc.addEventListener('pointerover', (event) => {
    if ((event as PointerEvent).pointerType === 'mouse') start(event);
  });
  doc.addEventListener('pointerout', cancel);
  doc.addEventListener('focusin', start);
  doc.addEventListener('touchstart', start, { passive: true });
}
