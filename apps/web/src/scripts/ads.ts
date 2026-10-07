/**
 * AdSense without breaking Core Web Vitals (PLAN §8.5):
 *
 * - everyone (guests and members, owner decision 2026-10), every route incl. the console; never
 *   while prerendering;
 * - never on adult content (`?nsfw=1` listings, NSFW mod pages): the server renders no slot there and
 *   this is the second guard;
 * - never on screens without publisher content (AdSense policy: auth forms, errors, offline):
 *   those pages carry `data-no-ads` on `<html>` or `<body>`;
 * - the `adsbygoogle.js` loader is injected on every other page (so Auto ads, when enabled in the
 *   AdSense dashboard, can place units); manual units (`<ins class="adsbygoogle" data-ad-slot>` in
 *   an `AdSlot` with reserved `min-height`) are requested when they come within 600 px;
 * - after `load` + idle and after the CMP settles (`consent.ts`).
 *
 * The publisher id comes from `<meta name="google-adsense-account">` (rendered only when
 * `PUBLIC_ADSENSE_CLIENT` is set), so development and staging never load ads.
 */
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

/** AdSense policy: never on adult content (NSFW listings, NSFW mod pages, NSFW thumbnails shown). */
export function isAdultPage(doc: Document = document): boolean {
  if (doc.querySelector('[data-nsfw]')) return true;
  try {
    return new URL(doc.location.href).searchParams.get('nsfw') === '1';
  } catch {
    return false;
  }
}

/** Screens without publisher content (login, errors, offline): no ads there (AdSense policy). */
export function isNoAdsPage(doc: Document = document): boolean {
  return doc.querySelector('[data-no-ads]') !== null;
}

/** Wires AdSense on the page. Resolves with the number of manual slots observed. */
export async function initAds(doc: Document = document): Promise<number> {
  const win = doc.defaultView;
  const client = adClient(doc);
  if (!win || !client || isAdultPage(doc) || isNoAdsPage(doc)) return 0;
  const slots = [...doc.querySelectorAll<HTMLElement>(SLOT_SELECTOR)].slice(0, MAX_SLOTS_PER_PAGE);

  await whenActivated(doc);
  await whenLoadedAndIdle(win);
  const { ensureAdConsent } = await import('./consent.ts');
  if (!(await ensureAdConsent(client, doc))) return 0;
  // Auto ads (if enabled for the site in AdSense) need only the loader.
  injectLoader(doc, client);
  if (slots.length === 0) return 0;

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
