import { beforeEach, describe, expect, it } from 'vitest';
import {
  FRESH_BUDGET_PER_MINUTE,
  hasTrustedPass,
  PASS_COOKIE,
  passAge,
  passFor,
  passPage,
  passState,
  resetFreshBudget,
  TRUSTED_AFTER_MS,
  takeFreshBudget,
  waitPage,
} from './js-pass.ts';

const SECRET = 's'.repeat(40);
const NOW = 1_800_000_000_000;
const WIDE = '120.241.0.0/16';
const url = (query: string) => new URL(`https://sotf-mods.com/builds${query}`);
const headers = (extra: Record<string, string> = {}) => new Headers({ 'cf-connecting-ip': '120.241.8.9', ...extra });
const withPass = (issuedAt: number) => headers({ cookie: `x=1; ${PASS_COOKIE}=${passFor(SECRET, WIDE, issuedAt)}` });

beforeEach(() => resetFreshBudget());

describe('JavaScript pass for multi-filter listings', () => {
  it('applies only to anonymous listings with two or more categories/tags', () => {
    expect(passState(url('?category=a&excludeTag=b'), headers(), SECRET, NOW)).toBe('missing');
    expect(passState(url('?category=a'), headers(), SECRET, NOW)).toBe('exempt');
    expect(passState(new URL('https://sotf-mods.com/categories/misc?tag=a'), headers(), SECRET, NOW)).toBe('missing');
    expect(passState(new URL('https://sotf-mods.com/categories/misc'), headers(), SECRET, NOW)).toBe('exempt');
    expect(passState(url('?category=a&tag=b'), headers({ cookie: 'sotf_li=1' }), SECRET, NOW)).toBe('exempt');
    expect(passState(new URL('https://sotf-mods.com/mods/a/b?tag=a&tag=b'), headers(), SECRET, NOW)).toBe('exempt');
    expect(passState(url('?category=a&tag=b'), headers(), undefined, NOW)).toBe('exempt');
  });

  it('is fresh right after the pass page and trusted later, for two days, on its network only', () => {
    const multi = url('?category=a&tag=b');
    expect(passState(multi, withPass(NOW), SECRET, NOW + 1000)).toBe('fresh');
    expect(passState(multi, withPass(NOW + 59_000), SECRET, NOW + 60_000)).toBe('fresh');
    expect(passState(multi, withPass(NOW), SECRET, NOW + TRUSTED_AFTER_MS + 60_000)).toBe('trusted');
    expect(hasTrustedPass(withPass(NOW), SECRET, NOW + TRUSTED_AFTER_MS + 60_000)).toBe(true);
    expect(hasTrustedPass(withPass(NOW), SECRET, NOW + 1000)).toBe(false);
    expect(passState(multi, withPass(NOW), SECRET, NOW + 3 * 86_400_000)).toBe('missing');
    const otherNetwork = new Headers({
      'cf-connecting-ip': '183.2.1.1',
      cookie: `${PASS_COOKIE}=${passFor(SECRET, WIDE, NOW)}`,
    });
    expect(passState(multi, otherNetwork, SECRET, NOW)).toBe('missing');
  });

  it('rejects forged or malformed passes', () => {
    expect(passAge(headers({ cookie: `${PASS_COOKIE}=1800000000.${'a'.repeat(22)}` }), SECRET, WIDE, NOW)).toBeNull();
    expect(passAge(headers({ cookie: `${PASS_COOKIE}=nonsense` }), SECRET, WIDE, NOW)).toBeNull();
  });

  it(`bounds fresh-pass renders to ${FRESH_BUDGET_PER_MINUTE} a minute site-wide`, () => {
    for (let i = 0; i < FRESH_BUDGET_PER_MINUTE; i++) expect(takeFreshBudget(NOW)).toBe(true);
    expect(takeFreshBudget(NOW)).toBe(false);
    expect(takeFreshBudget(NOW + 60_000)).toBe(true);
  });

  it('makes people wait on a self-reloading page until their pass is trusted', async () => {
    const page = waitPage(withPass(NOW), SECRET, NOW + 2000);
    expect(page.status).toBe(200);
    expect(page.headers.get('x-sotf-gate')).toBe('wait');
    expect(await page.text()).toContain(
      `http-equiv="refresh" content="${Math.ceil((TRUSTED_AFTER_MS - 2000) / 1000) + 1}"`,
    );
  });

  it('serves a page whose script sets the pass and reloads, allowed by its own CSP', async () => {
    const page = passPage(headers(), SECRET, NOW);
    expect(page.status).toBe(200);
    expect(page.headers.get('x-sotf-gate')).toBe('pass');
    const html = await page.text();
    expect(html).toContain(`data-pass="${passFor(SECRET, WIDE, NOW)}"`);
    expect(html).toContain('location.reload()');
    expect(page.headers.get('content-security-policy')).toMatch(/script-src 'sha256-[\w+/=]+'/);
  });
});
