import { describe, expect, it } from 'vitest';
import { isBusy, isExpensiveQuery, isFakeBrowser, isSheddable, SHED_IN_FLIGHT, shedResponse } from './load-shed.ts';

const url = (query: string) => new URL(`https://sotf-mods.com/builds${query}`);
const headers = (cookie?: string) => new Headers(cookie ? { cookie } : {});

describe('load shedding', () => {
  it('targets anonymous listings narrowed by two or more filters', () => {
    expect(isSheddable(url('?category=a&excludeTag=b'), headers())).toBe(true);
    expect(isSheddable(url('?category=a&category=b'), headers())).toBe(true);
    expect(isSheddable(url('?sort=new&page=2'), headers())).toBe(false);
    expect(isSheddable(url(''), headers())).toBe(false);
    expect(isSheddable(url('?category=a&excludeTag=b'), headers('x=1; sotf_li=1'))).toBe(false);
  });

  it('is busy with too many renders in flight', () => {
    expect(isBusy(SHED_IN_FLIGHT)).toBe(true);
    expect(isBusy(0)).toBe(false);
  });

  it('answers a fast uncached 429 with Retry-After', () => {
    const response = shedResponse();
    expect(response.status).toBe(429);
    expect(response.headers.get('retry-after')).toBe('120');
    expect(response.headers.get('cache-control')).toBe('no-store');
  });
});

describe('fake browsers', () => {
  const ua = (value: string, extra: Record<string, string> = {}) => new Headers({ 'user-agent': value, ...extra });
  const CHROME =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

  it('flags a current Chrome or Firefox user agent without Sec-Fetch headers', () => {
    expect(isFakeBrowser(ua(CHROME))).toBe(true);
    expect(isFakeBrowser(ua('Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0'))).toBe(true);
  });

  it('trusts real browsers, old browsers, Safari and self-declared bots', () => {
    expect(isFakeBrowser(ua(CHROME, { 'sec-fetch-mode': 'navigate' }))).toBe(false);
    expect(isFakeBrowser(ua('Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 Chrome/70.0 Safari/537.36'))).toBe(false);
    expect(
      isFakeBrowser(
        ua('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Version/17.0 Safari/605.1.15'),
      ),
    ).toBe(false);
    expect(
      isFakeBrowser(
        ua('Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1) Chrome/131.0 Safari/537.36'),
      ),
    ).toBe(false);
    expect(isFakeBrowser(ua('RedManager/2.0'))).toBe(false);
  });

  it('guards filtered listings and searches only', () => {
    expect(isExpensiveQuery(new URL('https://x/mods?tag=a'))).toBe(true);
    expect(isExpensiveQuery(new URL('https://x/search?q=menu'))).toBe(true);
    expect(isExpensiveQuery(new URL('https://x/mods?page=2'))).toBe(false);
    expect(isExpensiveQuery(new URL('https://x/mods/a/b'))).toBe(false);
  });
});
