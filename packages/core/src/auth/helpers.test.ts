import { describe, expect, it, vi } from 'vitest';
import { emailDomain, isDisposableEmail, normalizeEmail } from './disposable.ts';
import { countInRange, createHibpChecker, hibpParts } from './hibp.ts';
import { hashToken, looksLikeToken, newSecretToken } from './tokens.ts';
import { createTurnstileVerifier } from './turnstile.ts';
import { deviceLabel, storedUserAgent } from './user-agent.ts';

describe('HIBP k-anonymity', () => {
  it('sends only the 5-char SHA-1 prefix and matches the suffix', async () => {
    // sha1("password") = 5BAA61E4C9B93F3F0682250B6CF8331B7EE68FD8
    expect(hibpParts('password')).toEqual({ prefix: '5BAA6', suffix: '1E4C9B93F3F0682250B6CF8331B7EE68FD8' });
    const fetch = vi.fn(async (url: string | URL | Request, _init?: RequestInit) => {
      expect(String(url)).toBe('https://api.pwnedpasswords.com/range/5BAA6');
      return new Response('0018A45C4D1DEF81644B54AB7F969B88D65:1\r\n1E4C9B93F3F0682250B6CF8331B7EE68FD8:9545824\r\n');
    });
    const checker = createHibpChecker({ fetch: fetch as typeof globalThis.fetch });
    expect(await checker.count('password')).toBe(9_545_824);
    expect(fetch).toHaveBeenCalledOnce();
    const init = fetch.mock.calls[0]?.[1] as RequestInit;
    expect((init.headers as Record<string, string>)['add-padding']).toBe('true');
  });

  it('ignores padding rows and unknown suffixes', () => {
    expect(countInRange('AAAA:0\nBBBB:3', 'CCCC')).toBe(0);
    expect(countInRange('AAAA:0\nbbbb:3', 'BBBB')).toBe(3);
  });

  it('fails open on errors, bad statuses and timeouts', async () => {
    const failing = createHibpChecker({ fetch: (async () => Promise.reject(new Error('down'))) as typeof fetch });
    expect(await failing.count('password')).toBe(0);
    const status = createHibpChecker({ fetch: (async () => new Response('', { status: 503 })) as typeof fetch });
    expect(await status.count('password')).toBe(0);
    const slow = createHibpChecker({
      timeoutMs: 30,
      fetch: ((_url: string, init: RequestInit) =>
        new Promise((_resolve, reject) => {
          init.signal?.addEventListener('abort', () => reject(new DOMException('timeout', 'TimeoutError')));
        })) as unknown as typeof fetch,
    });
    const started = Date.now();
    expect(await slow.count('password')).toBe(0);
    expect(Date.now() - started).toBeLessThan(1000);
  });
});

describe('Turnstile', () => {
  it('posts the secret, token and IP to siteverify', async () => {
    const fetch = vi.fn(async (_url: string | URL | Request, init?: RequestInit) => {
      const form = init?.body as URLSearchParams;
      expect(form.get('secret')).toBe('secret-value');
      expect(form.get('response')).toBe('token-value');
      expect(form.get('remoteip')).toBe('203.0.113.9');
      return Response.json({ success: true });
    });
    const verifier = createTurnstileVerifier({
      secret: 'secret-value',
      production: true,
      fetch: fetch as typeof globalThis.fetch,
    });
    expect(await verifier.verify('token-value', '203.0.113.9')).toBe(true);
    expect(await verifier.verify(undefined, null)).toBe(false);
  });

  it('rejects failed and unreachable checks', async () => {
    const no = createTurnstileVerifier({
      secret: 's',
      production: true,
      fetch: (async () => Response.json({ success: false })) as typeof fetch,
    });
    expect(await no.verify('t', null)).toBe(false);
    const down = createTurnstileVerifier({
      secret: 's',
      production: true,
      fetch: (async () => Promise.reject(new Error('x'))) as typeof fetch,
    });
    expect(await down.verify('t', null)).toBe(false);
  });

  it('without a secret: closed in production, open elsewhere', async () => {
    expect(await createTurnstileVerifier({ secret: undefined, production: true }).verify('t', null)).toBe(false);
    expect(await createTurnstileVerifier({ secret: undefined, production: false }).verify(undefined, null)).toBe(true);
  });
});

describe('disposable emails', () => {
  it('matches known providers and their subdomains', () => {
    expect(isDisposableEmail('someone@mailinator.com')).toBe(true);
    expect(isDisposableEmail('someone@X.Mailinator.com')).toBe(true);
    expect(isDisposableEmail('someone@gmail.com')).toBe(false);
    expect(isDisposableEmail('no-at-sign')).toBe(false);
    expect(emailDomain('A@B.Example.')).toBe('b.example');
    expect(normalizeEmail('  Kelvin@Example.COM ')).toBe('kelvin@example.com');
  });
});

describe('tokens', () => {
  it('are 32 random bytes in base64url, stored as sha256', () => {
    const token = newSecretToken();
    expect(looksLikeToken(token)).toBe(true);
    expect(newSecretToken()).not.toBe(token);
    expect(hashToken(token)).toMatch(/^[0-9a-f]{64}$/);
    expect(looksLikeToken('short')).toBe(false);
  });
});

describe('device labels', () => {
  it.each([
    ['Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0', 'Firefox on Windows'],
    [
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15',
      'Safari on macOS',
    ],
    [
      'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Mobile Safari/537.36',
      'Chrome on Android',
    ],
    [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36 Edg/129.0',
      'Edge on Windows',
    ],
    ['curl/8.5.0', 'curl'],
    ['', null],
  ])('%s → %s', (ua, label) => {
    expect(deviceLabel(ua)).toBe(label);
  });

  it('bounds the stored user agent', () => {
    expect(storedUserAgent('x'.repeat(2000))).toHaveLength(512);
    expect(storedUserAgent('  ')).toBeNull();
  });
});
