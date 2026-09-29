/**
 * AdSense without breaking Core Web Vitals (PLAN §8.5):
 *
 * - guests only (no `sotf_li` hint; the HTML never varies), never while prerendering;
 * - only on pages that render ad slots (`<ins class="adsbygoogle" data-ad-slot>` inside an
 *   `AdSlot` with reserved `min-height`, WP-25) — pages where ads are forbidden simply have none;
 * - after `load` + idle, after the CMP settles (`consent.ts`), and per slot only when it comes
 *   within 600 px of the viewport; one `adsbygoogle.js` loader, manual units, no Auto Ads.
 *
 * The publisher id comes from `<meta name="google-adsense-account">` (rendered only when
 * `PUBLIC_ADSENSE_CLIENT` is set), so development and staging never load ads.
 */
import { hasSignedInHint } from './account-hint.ts';

export const SLOT_SELECTOR = 'ins.adsbygoogle[data-ad-slot]';
export const MAX_SLOTS_PER_PAGE = 2;
export const LOAD_MARGIN = '600px 0px';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function adClient(doc: Document = document): string | null {
  const content = doc.querySelector<HTMLMetaElement>('meta[name="google-adsense-account"]')?.content ?? '';
  return /^ca-pub-\d{10,20}$/.test(content) ? content : null;
}

function whenActivated(doc: Document): Promise<void> {
  const prerendering = (doc as Document & { prerendering?: boolean }).prerendering === true;
  if (!prerendering) return Promise.resolve();
  return new Promise((resolve) => doc.addEventListener('prerenderingchange', () => resolve(), { once: true }));
}

function whenLoadedAndIdle(win: Window): Promise<void> {
  const loaded =
    win.document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise<void>((resolve) => win.addEventListener('load', () => resolve(), { once: true }));
  return loaded.then(
    () =>
      new Promise<void>((resolve) => {
        if ('requestIdleCallback' in win) win.requestIdleCallback(() => resolve(), { timeout: 4000 });
        else setTimeout(resolve, 1500);
      }),
  );
}

let loaderInjected = false;

function injectLoader(doc: Document, client: string): void {
  if (loaderInjected) return;
  loaderInjected = true;
  const script = doc.createElement('script');
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`;
  doc.head.append(script);
}

/** Wires the ad slots of the page. Resolves with the number of slots observed. */
export async function initAds(doc: Document = document): Promise<number> {
  const win = doc.defaultView;
  const client = adClient(doc);
  if (!win || !client || hasSignedInHint(doc.cookie)) return 0;
  const slots = [...doc.querySelectorAll<HTMLElement>(SLOT_SELECTOR)].slice(0, MAX_SLOTS_PER_PAGE);
  if (slots.length === 0) return 0;

  await whenActivated(doc);
  await whenLoadedAndIdle(win);
  const { ensureAdConsent } = await import('./consent.ts');
  if (!(await ensureAdConsent(client, doc))) return 0;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        const slot = entry.target as HTMLElement;
        if (slot.dataset.adRequested === 'true') continue;
        slot.dataset.adRequested = 'true';
        injectLoader(doc, client);
        win.adsbygoogle = win.adsbygoogle ?? [];
        win.adsbygoogle.push({});
      }
    },
    { rootMargin: LOAD_MARGIN },
  );
  for (const slot of slots) observer.observe(slot);
  return slots.length;
}
