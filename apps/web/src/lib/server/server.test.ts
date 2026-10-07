import { describe, expect, it, vi } from 'vitest';
import { parseEnv, type WebEnv } from '../env.ts';
import { isInternalRequest } from '../internal-auth.ts';
import { deployReason, requestDeployPurge, runDeployPurge, schedulePostDeployPurge } from './deploy-purge.ts';
import { finalizeResponse, prepareRequest } from './entry-utils.ts';
import { requestIdOf } from './request-id.ts';

const SECRET = 's'.repeat(40);

function env(overrides: Partial<WebEnv> = {}): WebEnv {
  return {
    ...parseEnv({
      SITE_ENV: 'production',
      PUBLIC_SITE_URL: 'https://sotf-mods.com',
      INTERNAL_API_URL: 'http://sotf-v2-api:3001',
      INTERNAL_SECRET: SECRET,
    }),
    ...overrides,
  };
}

describe('environment (PLAN §11.4)', () => {
  it('defaults to local development values', () => {
    const parsed = parseEnv({});
    expect(parsed).toMatchObject({
      siteEnv: 'development',
      siteUrl: 'http://127.0.0.1:47321',
      internalApiUrl: 'http://127.0.0.1:47301',
      indexable: false,
      adsenseClient: undefined,
    });
  });

  it('never falls back to the localhost defaults outside development', () => {
    const base = { INTERNAL_SECRET: SECRET };
    // A container without INTERNAL_API_URL would pass /healthz and answer 503 on every page.
    expect(() => parseEnv({ ...base, SITE_ENV: 'production', PUBLIC_SITE_URL: 'https://sotf-mods.com' })).toThrow(
      /INTERNAL_API_URL: required when SITE_ENV=production/,
    );
    expect(() => parseEnv({ ...base, SITE_ENV: 'staging', INTERNAL_API_URL: 'http://api:3001' })).toThrow(
      /PUBLIC_SITE_URL: required when SITE_ENV=staging/,
    );
    const staging = parseEnv({
      ...base,
      SITE_ENV: 'staging',
      PUBLIC_SITE_URL: 'https://beta.sotf-mods.com',
      INTERNAL_API_URL: 'http://api:3001',
    });
    expect(staging).toMatchObject({ siteUrl: 'https://beta.sotf-mods.com', internalApiUrl: 'http://api:3001' });
  });

  it('requires INTERNAL_SECRET outside development and https in production', () => {
    expect(() => parseEnv({ SITE_ENV: 'staging' })).toThrow(/INTERNAL_SECRET: required when SITE_ENV=staging/);
    expect(() => parseEnv({ SITE_ENV: 'production', INTERNAL_SECRET: SECRET })).toThrow(/must be https in production/);
    expect(() => parseEnv({ INTERNAL_SECRET: 'short' })).toThrow(/at least 32/);
  });

  it('validates origins, AdSense and release', () => {
    const parsed = parseEnv({
      PUBLIC_SITE_URL: 'https://beta.sotf-mods.com/',
      PUBLIC_ADSENSE_CLIENT: 'ca-pub-2799839819522052',
      SOURCE_COMMIT: 'abc123',
      INTERNAL_SECRET: '',
    });
    expect(parsed.siteUrl).toBe('https://beta.sotf-mods.com');
    expect(parsed.adsenseClient).toBe('ca-pub-2799839819522052');
    expect(parsed.release).toBe('abc123');
    expect(parsed.internalSecret).toBeUndefined();
    expect(() => parseEnv({ PUBLIC_SITE_URL: 'https://x.com/path' })).toThrow(/origin/);
    expect(() => parseEnv({ PUBLIC_ADSENSE_CLIENT: 'pub-1' })).toThrow(/ca-pub/);
    expect(env().indexable).toBe(true);
  });

  it('reads CSP_MODE, the upload endpoint and the ad units (WP-93, WP-70, WP-53/54/62)', () => {
    const parsed = parseEnv({
      CSP_MODE: 'report-only',
      R2_ENDPOINT: 'http://seaweedfs:8333/some/path',
      PUBLIC_ADSENSE_SLOT_HOME: '1234567890',
      PUBLIC_ADSENSE_SLOT_FEED: '',
    });
    expect(parsed.cspMode).toBe('report-only');
    expect(parsed.storageUploadOrigin).toBe('http://seaweedfs:8333');
    expect(parsed.adSlots).toEqual({ home: '1234567890', feed: undefined, modSidebar: undefined });
    expect(parseEnv({}).cspMode).toBeUndefined();
    expect(parseEnv({}).storageUploadOrigin).toBeUndefined();
    expect(() => parseEnv({ CSP_MODE: 'off' })).toThrow(/CSP_MODE/);
    expect(() => parseEnv({ PUBLIC_ADSENSE_SLOT_FEED: 'slot-a' })).toThrow(/ad unit/);
  });
});

describe('X-Internal-Auth', () => {
  const req = (value?: string) =>
    new Request('https://w/_internal/cache/invalidate', { headers: value ? { 'x-internal-auth': value } : {} });

  it('accepts only the exact secret and fails closed without one', () => {
    expect(isInternalRequest(req(SECRET), SECRET)).toBe(true);
    expect(isInternalRequest(req(`${SECRET}x`), SECRET)).toBe(false);
    expect(isInternalRequest(req('nope'), SECRET)).toBe(false);
    expect(isInternalRequest(req(), SECRET)).toBe(false);
    expect(isInternalRequest(req(''), undefined)).toBe(false);
    expect(isInternalRequest(req(SECRET), undefined)).toBe(false);
  });
});

describe('post-deploy purge (PLAN §2.7)', () => {
  it('asks the API to purge html with the release as reason', async () => {
    const fetch = vi.fn(async () => ({ ok: true, status: 202 }));
    expect(await requestDeployPurge(env({ release: 'abc123', internalApiUrl: 'http://api:3001' }), { fetch })).toBe(
      true,
    );
    const [url, init] = fetch.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe('http://api:3001/internal/cdn/purge');
    expect(init.method).toBe('POST');
    expect((init.headers as Record<string, string>)['x-internal-auth']).toBe(SECRET);
    expect(JSON.parse(String(init.body))).toEqual({ tags: ['html'], reason: 'deploy:abc123' });
  });

  it('retries with backoff and gives up without throwing', async () => {
    const sleeps: number[] = [];
    const fetch = vi
      .fn()
      .mockRejectedValueOnce(new Error('ECONNREFUSED'))
      .mockResolvedValueOnce({ ok: false, status: 503 })
      .mockResolvedValueOnce({ ok: true, status: 202 });
    const ok = await runDeployPurge(env(), {
      fetch,
      sleep: async (ms) => {
        sleeps.push(ms);
      },
      log: () => {},
    });
    expect(ok).toBe(true);
    expect(fetch).toHaveBeenCalledTimes(3);
    expect(sleeps).toEqual([5_000, 10_000, 30_000]);

    const failing = vi.fn(async () => ({ ok: false, status: 500 }));
    expect(await runDeployPurge(env(), { fetch: failing, sleep: async () => {}, log: () => {} })).toBe(false);
    expect(failing).toHaveBeenCalledTimes(6);
  });

  it('never runs in development or without a secret', () => {
    expect(schedulePostDeployPurge(env({ siteEnv: 'development' }))).toBe(false);
    expect(schedulePostDeployPurge(env({ internalSecret: undefined }))).toBe(false);
    expect(deployReason(undefined, new Date('2026-09-30T00:00:00Z'))).toBe('deploy:boot-2026-09-30T00:00:00.000Z');
  });
});

describe('server entry helpers', () => {
  it('rewrites the URL, stamps the locale and drops client-supplied internal headers', () => {
    const original = new Request('https://sotf-mods.com/es/mods?page=2', {
      headers: { 'x-sotf-locale': 'ja', 'x-sotf-cache-tags': 'html', cookie: 'a=1' },
    });
    Reflect.set(original, Symbol.for('astro.renderOptions'), { clientAddress: '1.2.3.4', routeData: { route: '/x' } });
    const prepared = prepareRequest(original, '/mods?page=2', 'es');
    expect(prepared.url).toBe('https://sotf-mods.com/mods?page=2');
    expect(prepared.headers.get('x-sotf-locale')).toBe('es');
    expect(prepared.headers.has('x-sotf-cache-tags')).toBe(false);
    expect(prepared.headers.get('cookie')).toBe('a=1');
    expect(Reflect.get(prepared, Symbol.for('astro.renderOptions'))).toEqual({
      clientAddress: '1.2.3.4',
      routeData: undefined,
    });
  });

  it('keeps bodies of unsafe methods', async () => {
    const original = new Request('https://sotf-mods.com/_internal/cache/invalidate', {
      method: 'POST',
      body: '{"tags":["html"]}',
      headers: { 'content-type': 'application/json' },
    });
    const prepared = prepareRequest(original, '/_internal/cache/invalidate', 'en');
    expect(await prepared.text()).toBe('{"tags":["html"]}');
  });

  it('publishes Cache-Tag and adds the security headers (noindex outside production)', () => {
    const response = new Response('x', { headers: { 'x-sotf-cache-tags': 'html,home' } });
    const out = finalizeResponse(response, 'staging', '/');
    expect(out.headers.get('cache-tag')).toBe('html,home');
    expect(out.headers.has('x-sotf-cache-tags')).toBe(false);
    expect(out.headers.get('x-robots-tag')).toBe('noindex, nofollow');
    expect(out.headers.get('x-content-type-options')).toBe('nosniff');
    // WP-93: clickjacking protection is DENY; non-HTML responses get the strict document-less policy.
    expect(out.headers.get('x-frame-options')).toBe('DENY');
    expect(out.headers.get('content-security-policy')).toBe(
      "default-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'",
    );
    const embed = finalizeResponse(new Response('x'), 'production', '/embed/mods/a/b');
    expect(embed.headers.get('content-security-policy')).toBe("default-src 'none'; frame-ancestors *");
    expect(embed.headers.has('x-frame-options')).toBe(false);
    expect(embed.headers.has('x-robots-tag')).toBe(false);
  });

  it('sends the HTML policy enforcing or report-only per CSP_MODE', () => {
    const html = () =>
      new Response('<!doctype html>', {
        headers: { 'content-type': 'text/html', 'content-security-policy': "script-src 'self'; default-src 'self'" },
      });
    const enforced = finalizeResponse(html(), 'staging', '/', { cspMode: 'enforce' });
    expect(enforced.headers.get('content-security-policy')).toContain("script-src 'self'");
    expect(enforced.headers.has('content-security-policy-report-only')).toBe(false);
    const reported = finalizeResponse(html(), 'production', '/', { cspMode: 'report-only' });
    expect(reported.headers.get('content-security-policy-report-only')).toContain("script-src 'self'");
    expect(reported.headers.get('content-security-policy')).toBe("frame-ancestors 'none'");
    // Default per environment: staging reports only.
    const staging = finalizeResponse(html(), 'staging', '/');
    expect(staging.headers.has('content-security-policy-report-only')).toBe(true);
  });

  it('copies immutable responses before touching headers', () => {
    const redirect = Response.redirect('https://sotf-mods.com/x', 302);
    expect(finalizeResponse(redirect, 'production', '/').headers.get('location')).toBe('https://sotf-mods.com/x');
  });

  it('uses cf-ray as request id when it is well formed', () => {
    expect(requestIdOf(new Request('https://x', { headers: { 'cf-ray': '8c1f2a3b4c5d6e7f-MAD' } }))).toBe(
      '8c1f2a3b4c5d6e7f-MAD',
    );
    expect(requestIdOf(new Request('https://x', { headers: { 'cf-ray': '<script>' } }))).toMatch(/^[0-9a-f-]{36}$/);
  });
});
