import { beforeEach, describe, expect, it } from 'vitest';
import {
  isListingPath,
  LISTING_LIMITS,
  listingRateLimit,
  PAGE_LIMIT_PER_IP,
  rateKeys,
  resetRateLimits,
} from './rate-limit.ts';

const from = (ip: string, cookie?: string) => new Headers({ 'cf-connecting-ip': ip, ...(cookie ? { cookie } : {}) });
const T0 = 1_700_000_000_000 - (1_700_000_000_000 % 60_000);

/** Sends `n` listing requests from `ip`; returns how many were refused. */
function send(n: number, ip: string, cookie?: string, now = T0): number {
  let refused = 0;
  for (let i = 0; i < n; i++)
    if (listingRateLimit(new URL('https://x/mods'), from(ip, cookie), now) !== null) refused++;
  return refused;
}

beforeEach(() => resetRateLimits());

describe('listing rate limit', () => {
  it('covers listing pages only', () => {
    for (const path of ['/', '/mods', '/builds', '/categories/qol', '/tags/ui']) expect(isListingPath(path)).toBe(true);
    for (const path of ['/mods/a/b', '/healthz', '/install', '/categories']) expect(isListingPath(path)).toBe(false);
    expect(isListingPath('/search')).toBe(true);
    expect(listingRateLimit(new URL('https://x/mods/a/b'), from('1.2.3.4'), T0)).toBeNull();
  });

  it(`caps every page at ${PAGE_LIMIT_PER_IP} a minute per address and never counts static files`, () => {
    let refused = 0;
    for (let i = 0; i < PAGE_LIMIT_PER_IP + 5; i++)
      if (listingRateLimit(new URL('https://x/mods/a/b'), from('9.9.9.9'), T0) !== null) refused++;
    expect(refused).toBe(5);
    expect(listingRateLimit(new URL('https://x/_astro/app.js'), from('9.9.9.9'), T0)).toBeNull();
    expect(listingRateLimit(new URL('https://x/healthz'), from('9.9.9.9'), T0)).toBeNull();
  });

  it(`refuses an address after ${LISTING_LIMITS.ip} requests a minute, until the window ends`, () => {
    expect(send(LISTING_LIMITS.ip, '1.2.3.4')).toBe(0);
    expect(listingRateLimit(new URL('https://x/mods'), from('1.2.3.4'), T0 + 15_000)).toBe(45);
    expect(send(1, '1.2.3.5')).toBe(0);
    expect(listingRateLimit(new URL('https://x/mods'), from('1.2.3.4'), T0 + 60_000)).toBeNull();
  });

  it('refuses a /24 and a /16 that spread the requests over many addresses', () => {
    for (let i = 0; i < LISTING_LIMITS.network; i++) expect(send(1, `10.0.0.${i}`)).toBe(0);
    expect(send(1, '10.0.0.200')).toBe(1);
    resetRateLimits();
    let refused = 0;
    for (let i = 0; i < LISTING_LIMITS.wide + 10; i++) refused += send(1, `10.0.${i % 250}.${Math.floor(i / 250) + 1}`);
    expect(refused).toBe(10);
  });

  it('lets members on a busy network through, within their own budget', () => {
    for (let i = 0; i < LISTING_LIMITS.network; i++) send(1, `10.0.0.${i}`);
    expect(send(1, '10.0.0.250', 'sotf_li=1')).toBe(0);
    expect(send(1, '10.0.0.251')).toBe(1);
  });

  it('groups IPv6 by /48 and /32', () => {
    expect(rateKeys('2a03:2880:f804:23::')).toEqual({
      ip: '2a03:2880:f804:23:0:0:0:0',
      network: '2a03:2880:f804::/48',
      wide: '2a03:2880::/32',
    });
    expect(rateKeys('2001:db8::1')?.network).toBe('2001:db8:0::/48');
    expect(rateKeys('nonsense')).toBeNull();
  });

  it('lets a trusted browser on a busy network through, within its own budget', () => {
    for (let i = 0; i < LISTING_LIMITS.network; i++) send(1, `10.0.0.${i}`);
    expect(listingRateLimit(new URL('https://x/mods'), from('10.0.0.250'), T0, true)).toBeNull();
    expect(send(1, '10.0.0.251')).toBe(1);
  });

  it('covers the sign-in pages', () => {
    expect(isListingPath('/login')).toBe(true);
    expect(isListingPath('/register')).toBe(true);
  });
});
