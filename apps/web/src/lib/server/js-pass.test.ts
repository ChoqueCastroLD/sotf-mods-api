import { describe, expect, it } from 'vitest';
import { hasValidPass, PASS_COOKIE, passFor, passGate } from './js-pass.ts';

const SECRET = 's'.repeat(40);
const NOW = 1_800_000_000_000;
const url = (query: string) => new URL(`https://sotf-mods.com/builds${query}`);
const headers = (extra: Record<string, string> = {}) => new Headers({ 'cf-connecting-ip': '120.241.8.9', ...extra });

describe('JavaScript pass for multi-filter listings', () => {
  it('asks for a pass only on anonymous listings with two or more categories/tags', () => {
    const gate = passGate(url('?category=a&excludeTag=b'), headers(), SECRET, NOW);
    expect(gate?.status).toBe(200);
    expect(gate?.headers.get('x-sotf-gate')).toBe('pass');
    expect(passGate(url('?category=a'), headers(), SECRET, NOW)).toBeNull();
    expect(passGate(url('?category=a&tag=b'), headers({ cookie: 'sotf_li=1' }), SECRET, NOW)).toBeNull();
    expect(passGate(new URL('https://sotf-mods.com/mods/a/b?tag=a&tag=b'), headers(), SECRET, NOW)).toBeNull();
    expect(passGate(url('?category=a&tag=b'), headers(), undefined, NOW)).toBeNull();
  });

  it('lets a valid pass through, for its network and two days', () => {
    const pass = passFor(SECRET, '120.241.0.0/16', NOW);
    const withPass = headers({ cookie: `x=1; ${PASS_COOKIE}=${pass}` });
    expect(passGate(url('?category=a&tag=b'), withPass, SECRET, NOW)).toBeNull();
    expect(passGate(url('?category=a&tag=b'), withPass, SECRET, NOW + 86_400_000)).toBeNull();
    expect(passGate(url('?category=a&tag=b'), withPass, SECRET, NOW + 2 * 86_400_000)).not.toBeNull();
    const otherNetwork = new Headers({ 'cf-connecting-ip': '183.2.1.1', cookie: `${PASS_COOKIE}=${pass}` });
    expect(passGate(url('?category=a&tag=b'), otherNetwork, SECRET, NOW)).not.toBeNull();
  });

  it('rejects forged or malformed passes', () => {
    expect(
      hasValidPass(headers({ cookie: `${PASS_COOKIE}=20833.${'a'.repeat(22)}` }), SECRET, '120.241.0.0/16', NOW),
    ).toBe(false);
    expect(hasValidPass(headers({ cookie: `${PASS_COOKIE}=nonsense` }), SECRET, '120.241.0.0/16', NOW)).toBe(false);
  });

  it('serves a page whose script sets the pass and reloads, allowed by its own CSP', async () => {
    const gate = passGate(url('?category=a&tag=b'), headers(), SECRET, NOW);
    const html = (await gate?.text()) ?? '';
    expect(html).toContain(`data-pass="${passFor(SECRET, '120.241.0.0/16', NOW)}"`);
    expect(html).toContain('location.reload()');
    expect(gate?.headers.get('content-security-policy')).toMatch(/script-src 'sha256-[\w+/=]+'/);
  });
});
