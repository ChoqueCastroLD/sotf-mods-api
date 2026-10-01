/* SOTF Mods service worker. Deliberately small, and it never gets in the way:
 *
 *  - Navigations always go to the network first (with navigation preload, so the worker adds no
 *    latency). Only when the network is unreachable does it answer: from the cache for the install
 *    guide (PLAN §7.14 T2 «PWA offline para las guías», any locale; the page asks for it with
 *    `{ type: 'guide-page', url }` and it is refreshed on every visit), else with the branded
 *    offline page in the visitor's language (`{ type: 'offline-page', url }`). Both are stored
 *    together with the CSS, scripts, fonts and art they need.
 *  - Fingerprinted assets (`/_astro/`), brand, art and PWA images are cache-first.
 *  - Everything else (API, uploads, downloads, other origins, non-GET) is not touched.
 *
 * Any unexpected error falls through to the plain network. Bump VERSION to drop old caches. */
const VERSION = 'v2';
const PAGES = `sotf-pages-${VERSION}`;
const ASSETS = `sotf-assets-${VERSION}`;
const KEEP = new Set([PAGES, ASSETS]);
const GUIDE = /^\/(?:[a-z]{2}\/)?install\/?$/;
const OFFLINE = /^\/(?:[a-z]{2}\/)?offline\/?$/;
const LOCALE_PREFIX = /^\/([a-z]{2})(?:\/|$)/;
const STATIC = /^\/(?:_astro|brand|art|pwa)\//;
/* Stylesheets, scripts, fonts and images the page itself uses (not the iOS splash screens). */
const ASSET_IN_HTML = /(?:href|src)=["'](\/(?:_astro|brand|art)\/[^"'\s>]+)/g;
const MAX_ASSETS = 220;
/* A page the worker already holds is not fetched again for this long (every page view asks). */
const REFRESH_MS = 6 * 60 * 60 * 1000;

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => !KEEP.has(key)).map((key) => caches.delete(key)));
      if (self.registration.navigationPreload) await self.registration.navigationPreload.enable().catch(() => {});
      await self.clients.claim();
    })(),
  );
});

async function trim(cache) {
  const keys = await cache.keys();
  if (keys.length <= MAX_ASSETS) return;
  await Promise.all(keys.slice(0, keys.length - MAX_ASSETS + 40).map((request) => cache.delete(request)));
}

async function remember(cacheName, request, response) {
  if (!response?.ok || response.type === 'opaque') return;
  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
  if (cacheName === ASSETS) await trim(cache);
}

/** Fetches a page and the stylesheet, script, font and image URLs it references (href/src). */
async function precachePage(pathname) {
  const pages = await caches.open(PAGES);
  const cached = await pages.match(pathname);
  const stored = cached && Date.parse(cached.headers.get('date') || '');
  if (stored && Date.now() - stored < REFRESH_MS) return;
  const response = await fetch(pathname, { credentials: 'same-origin' });
  if (!response.ok) return;
  await pages.put(pathname, response.clone());
  const html = await response.text();
  const assets = await caches.open(ASSETS);
  const urls = new Set();
  for (const match of html.matchAll(ASSET_IN_HTML)) urls.add(match[1]);
  await Promise.all(
    [...urls].map(async (url) => {
      if (await assets.match(url)) return;
      const asset = await fetch(url).catch(() => null);
      if (asset?.ok) await assets.put(url, asset);
    }),
  );
}

self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || typeof data.url !== 'string') return;
  const url = new URL(data.url, self.location.origin);
  if (url.origin !== self.location.origin) return;
  const wanted =
    (data.type === 'offline-page' && OFFLINE.test(url.pathname)) ||
    (data.type === 'guide-page' && GUIDE.test(url.pathname));
  if (wanted) event.waitUntil(precachePage(url.pathname).catch(() => {}));
});

async function offlineFallback(url) {
  const pages = await caches.open(PAGES);
  const prefix = LOCALE_PREFIX.exec(url.pathname)?.[1];
  const candidates = prefix ? [`/${prefix}/offline`, '/offline'] : ['/offline'];
  for (const candidate of candidates) {
    const hit = await pages.match(candidate);
    if (hit) return hit;
  }
  for (const request of await pages.keys()) {
    if (OFFLINE.test(new URL(request.url).pathname)) return pages.match(request);
  }
  return Response.error();
}

async function handleNavigation(event) {
  const url = new URL(event.request.url);
  try {
    const response = (await event.preloadResponse) || (await fetch(event.request));
    if (GUIDE.test(url.pathname) && response.ok) event.waitUntil(remember(PAGES, event.request, response));
    return response;
  } catch {
    const pages = await caches.open(PAGES);
    if (GUIDE.test(url.pathname)) {
      const guide = await pages.match(event.request);
      if (guide) return guide;
    }
    return offlineFallback(url);
  }
}

async function handleStatic(event) {
  const cache = await caches.open(ASSETS);
  const hit = await cache.match(event.request);
  if (hit) return hit;
  const response = await fetch(event.request);
  event.waitUntil(remember(ASSETS, event.request, response));
  return response;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    if ((request.headers.get('accept') || '').includes('text/html')) event.respondWith(handleNavigation(event));
    return;
  }
  if (STATIC.test(url.pathname)) event.respondWith(handleStatic(event));
});
