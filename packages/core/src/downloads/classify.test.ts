import { describe, expect, it } from 'vitest';
import { countDecision, downloadSource, isDeclaredBot, normalizeUserAgent } from './classify.ts';

const CHROME =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36';

describe('countDecision (PLAN §2.8 "Conteo")', () => {
  const base = { method: 'GET', userAgent: CHROME, overLimit: false };
  it('counts a plain GET, bytes=0- and an empty User-Agent', () => {
    expect(countDecision(base)).toBe('count');
    expect(countDecision({ ...base, range: 'bytes=0-' })).toBe('count');
    expect(countDecision({ ...base, range: ' bytes = 0- ' })).toBe('count');
    expect(countDecision({ ...base, userAgent: '' })).toBe('count');
    expect(countDecision({ ...base, userAgent: null })).toBe('count');
    expect(countDecision({ ...base, userAgent: 'RedManager/1.1.10' })).toBe('count');
  });
  it('does not count HEAD, partial ranges, prefetches, bots or requests over the limit', () => {
    expect(countDecision({ ...base, method: 'HEAD' })).toBe('method');
    expect(countDecision({ ...base, range: 'bytes=100-' })).toBe('range');
    expect(countDecision({ ...base, range: 'bytes=0-99' })).toBe('range');
    expect(countDecision({ ...base, secPurpose: 'prefetch;prerender' })).toBe('prefetch');
    expect(countDecision({ ...base, secPurpose: 'prefetch' })).toBe('prefetch');
    expect(countDecision({ ...base, userAgent: 'Googlebot/2.1 (+http://www.google.com/bot.html)' })).toBe('bot');
    expect(countDecision({ ...base, overLimit: true })).toBe('rate_limited');
  });
});

describe('bots and channels', () => {
  it('treats crawlers as bots but never an empty UA or the modding clients', () => {
    expect(isDeclaredBot('Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)')).toBe(true);
    expect(isDeclaredBot('curl/8.5.0')).toBe(true);
    expect(isDeclaredBot('')).toBe(false);
    expect(isDeclaredBot('   ')).toBe(false);
    expect(isDeclaredBot(undefined)).toBe(false);
    expect(isDeclaredBot('UpdatesChecker/1.0')).toBe(false);
    expect(isDeclaredBot(CHROME)).toBe(false);
  });
  it('classifies the channel', () => {
    expect(downloadSource('web', CHROME)).toBe('web');
    expect(downloadSource('api', CHROME)).toBe('api');
    expect(downloadSource('legacy', CHROME)).toBe('api');
    expect(downloadSource('web', '')).toBe('client');
    expect(downloadSource('legacy', null)).toBe('client');
    expect(downloadSource('web', 'RedManager/1.2.0')).toBe('redmanager');
  });
  it('truncates stored user agents', () => {
    expect(normalizeUserAgent(`  ${'x'.repeat(600)}`)).toHaveLength(512);
    expect(normalizeUserAgent(null)).toBe('');
  });
});
