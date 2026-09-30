/**
 * Security wiring of `buildApp()` (WP-93 backlog): the hardening plugin is registered after the
 * cache headers (HSTS 6 months, Permissions-Policy, X-Robots-Tag, private cookie responses, the
 * private-data guard) and the CSP report collector is exempt from the CSRF check, while every other
 * unsafe request keeps the Fetch-Metadata and JSON content-type rules.
 */
import { cache, defineEndpoint } from '@sotf/contracts';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { z } from 'zod';
import { defineModule } from '../src/lib/define-module.ts';
import { API_HSTS, API_PERMISSIONS_POLICY, CSP_REPORT_PATH } from '../src/plugins/security/index.ts';
import { buildTestApp, TEST_SITE_URL, type TestApp } from '../src/testing.ts';

const endpoints = {
  leaky: defineEndpoint({
    id: 'test.leaky',
    owner: 'WP-93',
    method: 'GET',
    path: '/api/v2/_test/leaky',
    summary: 'test',
    auth: 'public',
    response: z.object({ id: z.number(), email: z.string() }),
    cache: cache.publicApi(['home']),
  }),
  cookie: defineEndpoint({
    id: 'test.cookie',
    owner: 'WP-93',
    method: 'GET',
    path: '/api/v2/_test/cookie',
    summary: 'test',
    auth: 'public',
    response: z.object({ ok: z.boolean() }),
    cache: cache.noStore,
  }),
  publicCookie: defineEndpoint({
    id: 'test.publicCookie',
    owner: 'WP-93',
    method: 'GET',
    path: '/api/v2/_test/public-cookie',
    summary: 'test',
    auth: 'public',
    response: z.object({ ok: z.boolean() }),
    cache: cache.publicApi(['home']),
  }),
  write: defineEndpoint({
    id: 'test.write',
    owner: 'WP-93',
    method: 'POST',
    path: '/api/v2/_test/write',
    summary: 'test',
    auth: 'public',
    body: z.strictObject({}),
    response: z.object({ ok: z.boolean() }),
    cache: cache.noStore,
  }),
};

const testModule = defineModule({
  name: 'security-test',
  register(m) {
    m.implement(endpoints.leaky, async () => ({ id: 1, email: 'someone@example.test' }));
    m.implement(endpoints.cookie, async ({ reply }) => {
      reply.header('set-cookie', 'sotf_test=1; Path=/; HttpOnly');
      return { ok: true };
    });
    m.implement(endpoints.publicCookie, async ({ reply }) => {
      reply.header('set-cookie', 'sotf_test=1; Path=/; HttpOnly');
      return { ok: true };
    });
    m.implement(endpoints.write, async () => ({ ok: true }));
  },
});

let t: TestApp;

beforeAll(async () => {
  t = await buildTestApp({ modules: [testModule] });
}, 300_000);

afterAll(async () => {
  await t?.close();
});

describe('security headers', () => {
  it('sends HSTS (6 months, no preload), Permissions-Policy and X-Robots-Tag on every response', async () => {
    const res = await t.app.inject({ method: 'GET', url: '/healthz' });
    expect(res.headers['strict-transport-security']).toBe(API_HSTS);
    expect(res.headers['permissions-policy']).toBe(API_PERMISSIONS_POLICY);
    expect(res.headers['x-robots-tag']).toContain('noindex');
  });

  it('makes every cookie-setting response private', async () => {
    const res = await t.app.inject({ method: 'GET', url: '/api/v2/_test/cookie' });
    expect(res.statusCode).toBe(200);
    expect(res.headers['set-cookie']).toBeDefined();
    expect(res.headers['cache-control']).toBe('private, no-store');
    expect(res.headers['cache-tag']).toBeUndefined();
  });

  it('never lets a publicly cached response set a cookie', async () => {
    const res = await t.app.inject({ method: 'GET', url: '/api/v2/_test/public-cookie' });
    expect(res.statusCode).toBe(200);
    expect(res.headers['set-cookie']).toBeUndefined();
    expect(res.headers['cache-tag']).toBe('home');
  });

  it('refuses to serve private fields in a publicly cached response outside production', async () => {
    const res = await t.app.inject({ method: 'GET', url: '/api/v2/_test/leaky' });
    expect(res.statusCode).toBe(500);
    expect(res.body).not.toContain('someone@example.test');
  });
});

describe('CSRF', () => {
  it('lets cross-site CSP reports through (credential-less collector)', async () => {
    const res = await t.app.inject({
      method: 'POST',
      url: CSP_REPORT_PATH,
      headers: { 'content-type': 'application/csp-report', 'sec-fetch-site': 'cross-site' },
      payload: JSON.stringify({
        'csp-report': {
          'document-uri': `${TEST_SITE_URL}/mods`,
          'violated-directive': 'script-src-elem',
          'effective-directive': 'script-src-elem',
          'blocked-uri': 'https://evil.example/x.js',
        },
      }),
    });
    expect(res.statusCode).toBe(204);
  });

  it('still blocks other cross-site writes and non-JSON bodies', async () => {
    const cross = await t.app.inject({
      method: 'POST',
      url: '/api/v2/_test/write',
      headers: { 'content-type': 'application/json', 'sec-fetch-site': 'cross-site', origin: 'https://evil.example' },
      payload: '{}',
    });
    expect(cross.statusCode).toBe(403);
    const form = await t.app.inject({
      method: 'POST',
      url: '/api/v2/_test/write',
      headers: { 'content-type': 'text/plain', 'sec-fetch-site': 'same-origin' },
      payload: '{}',
    });
    expect(form.statusCode).toBe(415);
    const ok = await t.app.inject({
      method: 'POST',
      url: '/api/v2/_test/write',
      headers: t.sameOrigin(),
      payload: '{}',
    });
    expect(ok.statusCode).toBe(200);
  });
});
