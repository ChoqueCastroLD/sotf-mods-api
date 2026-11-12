/**
 * Per-minute budgets of the listing pages per client IP and per network (2026-11 incident: a
 * botnet of ~2,000 addresses, mostly a few Chinese /16s, walked filter combinations of `/mods`,
 * `/builds`, `/categories/*` and `/tags/*`). Over budget: `429` + `Retry-After` until the window
 * ends. Fixed one-minute windows in a `Map` cleared at each new window: a few thousand keys at
 * most, no timers. Members (session cookie) only count against their own IP.
 */

/** Listing pages: the expensive renders crawlers multiply with query strings. */
const LISTING_PATH = /^\/(?:mods|builds|categories\/[^/]+|tags\/[^/]+)?\/?$/;

export const LISTING_LIMITS = {
  /** One address. */
  ip: 30,
  /** IPv4 /24, IPv6 /48. */
  network: 60,
  /** IPv4 /16, IPv6 /32. */
  wide: 120,
} as const;

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
 * Counts a listing request and returns the seconds to wait when it is over budget, or `null`.
 * `now` is injectable for tests.
 */
export function listingRateLimit(pathname: string, headers: Headers, now = Date.now()): number | null {
  if (!isListingPath(pathname)) return null;
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

  let over = bump(`ip|${keys.ip}`) > LISTING_LIMITS.ip;
  if (!hasSession(headers)) {
    over = bump(`net|${keys.network}`) > LISTING_LIMITS.network || over;
    over = bump(`wide|${keys.wide}`) > LISTING_LIMITS.wide || over;
  }
  if (!over) return null;
  return Math.max(1, Math.ceil(((id + 1) * WINDOW_MS - now) / 1000));
}

/** `429 Too Many Requests` with `Retry-After`. */
export function tooManyRequests(retryAfterSeconds: number): Response {
  return new Response('Too many requests, try again in a moment.\n', {
    status: 429,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
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
