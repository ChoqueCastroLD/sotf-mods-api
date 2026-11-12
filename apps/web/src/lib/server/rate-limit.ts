/**
 * Per-minute budgets of the listing pages per client IP and per network (2026-11 incident: a
 * botnet of ~2,000 addresses, mostly a few Chinese /16s, walked filter combinations of `/mods`,
 * `/builds`, `/categories/*` and `/tags/*`). Over budget: `429` + `Retry-After` until the window
 * ends. Fixed one-minute windows in a `Map` cleared at each new window: a few thousand keys at
 * most, no timers. Members (session cookie) only count against their own IP.
 */

/** Listing and search pages: the expensive renders crawlers multiply with query strings. */
const LISTING_PATH = /^\/(?:mods|builds|search|categories\/[^/]+|tags\/[^/]+)?\/?$/;
/** Static files the server streams without rendering (not counted). */
const STATIC_PATH = /^\/(?:_astro|static|fonts|favicon|apple-touch-icon|manifest\.webmanifest|sw\.js)/;

export const LISTING_LIMITS = {
  /** One address. */
  ip: 30,
  /** IPv4 /24, IPv6 /48. */
  network: 60,
  /** IPv4 /16, IPv6 /32. */
  wide: 120,
} as const;

/** Any server-rendered page or endpoint per address: far above what a person clicks. */
export const PAGE_LIMIT_PER_IP = 240;

/**
 * Listings narrowed by two or more categories/tags, per network and anonymous only: the pattern of
 * the 2026-11 botnet (headless Chrome on hundreds of rotating addresses). People rarely combine
 * filters at this pace from one network; plain listings and single filters are not counted.
 */
export const FILTERED_LIMITS = {
  /** IPv4 /24, IPv6 /48. */
  network: 10,
  /** IPv4 /16, IPv6 /32. */
  wide: 20,
} as const;

const TAXONOMY_PARAMS = new Set(['category', 'excludeCategory', 'tag', 'excludeTag']);

function multiFiltered(search: URLSearchParams): boolean {
  let count = 0;
  for (const name of search.keys()) if (TAXONOMY_PARAMS.has(name) && ++count >= 2) return true;
  return false;
}

const WINDOW_MS = 60_000;
/** Safety valve: never hold more keys than this (a flood of spoofed addresses fails open). */
const MAX_KEYS = 50_000;

let windowId = -1;
const counts = new Map<string, number>();

/** Expands an IPv6 address to its eight 16-bit groups (no zero compression). */
function ipv6Groups(ip: string): string[] | null {
  const [head = '', tail] = ip.split('::');
  const left = head ? head.split(':') : [];
  const right = tail ? tail.split(':') : [];
  if (tail === undefined && left.length !== 8) return null;
  const fill = Array(Math.max(0, 8 - left.length - right.length)).fill('0');
  return [...left, ...fill, ...right].map((group) => group.toLowerCase().replace(/^0+(?=.)/, ''));
}

/** Keys an address counts against: itself, its /24 (/48) and its /16 (/32). */
export function rateKeys(ip: string): { ip: string; network: string; wide: string } | null {
  if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(ip)) {
    const [a, b, c] = ip.split('.');
    return { ip, network: `${a}.${b}.${c}.0/24`, wide: `${a}.${b}.0.0/16` };
  }
  if (!ip.includes(':')) return null;
  const groups = ipv6Groups(ip);
  if (!groups) return null;
  return {
    ip: groups.join(':'),
    network: `${groups.slice(0, 3).join(':')}::/48`,
    wide: `${groups.slice(0, 2).join(':')}::/32`,
  };
}

/** Client address as Cloudflare reports it (the origin sits behind it). */
export function clientIp(headers: Headers): string | null {
  return headers.get('cf-connecting-ip')?.trim() || headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null;
}

export function isListingPath(pathname: string): boolean {
  return LISTING_PATH.test(pathname);
}

function hasSession(headers: Headers): boolean {
  return /(?:^|;\s*)(?:__Host-sotf_sid|sotf_li)=/.test(headers.get('cookie') ?? '');
}

/**
 * Counts a request (every page against `PAGE_LIMIT_PER_IP`, listings also against
 * `LISTING_LIMITS`) and returns the seconds to wait when it is over budget, or `null`.
 * `now` is injectable for tests.
 */
export function listingRateLimit(url: URL, headers: Headers, now = Date.now()): number | null {
  const { pathname } = url;
  if (STATIC_PATH.test(pathname) || pathname === '/healthz') return null;
  const ip = clientIp(headers);
  const keys = ip ? rateKeys(ip) : null;
  if (!keys) return null;

  const id = Math.floor(now / WINDOW_MS);
  if (id !== windowId || counts.size > MAX_KEYS) {
    windowId = id;
    counts.clear();
  }
  const bump = (key: string) => {
    const next = (counts.get(key) ?? 0) + 1;
    counts.set(key, next);
    return next;
  };

  let over = bump(`page|${keys.ip}`) > PAGE_LIMIT_PER_IP;
  if (isListingPath(pathname)) {
    over = bump(`ip|${keys.ip}`) > LISTING_LIMITS.ip || over;
  }
  if (isListingPath(pathname) && !hasSession(headers)) {
    over = bump(`net|${keys.network}`) > LISTING_LIMITS.network || over;
    over = bump(`wide|${keys.wide}`) > LISTING_LIMITS.wide || over;
    if (multiFiltered(url.searchParams)) {
      over = bump(`fnet|${keys.network}`) > FILTERED_LIMITS.network || over;
      over = bump(`fwide|${keys.wide}`) > FILTERED_LIMITS.wide || over;
    }
  }
  if (!over) return null;
  return Math.max(1, Math.ceil(((id + 1) * WINDOW_MS - now) / 1000));
}

const BUSY_PAGE = (seconds: number) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>Slow down a little · SOTF Mods</title>
<style>body{font:16px/1.5 system-ui,sans-serif;background:#111;color:#eee;display:grid;place-items:center;min-height:100vh;margin:0}main{max-width:32rem;padding:2rem}a{color:#f87171}</style></head>
<body><main><h1>Slow down a little</h1>
<p>Too many requests came from your network in the last minute. Please try again in ${seconds} seconds.</p>
<p><a href="/mods">Browse all mods</a> · <a href="/builds">Browse builds</a></p></main></body></html>
`;

/** `429 Too Many Requests` with `Retry-After`: a short page for browsers, plain text otherwise. */
export function tooManyRequests(retryAfterSeconds: number, accept = ''): Response {
  const html = accept.includes('text/html');
  return new Response(html ? BUSY_PAGE(retryAfterSeconds) : 'Too many requests, try again in a moment.\n', {
    status: 429,
    headers: {
      'content-type': html ? 'text/html; charset=utf-8' : 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
      'retry-after': String(retryAfterSeconds),
      'x-robots-tag': 'noindex',
    },
  });
}

/** Clears the counters (tests). */
export function resetRateLimits(): void {
  windowId = -1;
  counts.clear();
}
