import { describe, expect, it } from 'vitest';
import { isBusy, isSheddable, SHED_IN_FLIGHT, shedResponse } from './load-shed.ts';

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
