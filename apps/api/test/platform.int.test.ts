/**
 * Platform integration tests (WP-20 acceptance): problem+json 404/422, CSRF, rate-limit buckets,
 * auth levels, cache headers, SSE handshake + ping + NOTIFY delivery, OpenAPI/Scalar, health and the
 * internal purge, against a real PostgreSQL 16 with the pg-boss schema.
 */
import type { AddressInfo } from 'node:net';
import { cache, defineEndpoint, PROBLEM_CONTENT_TYPE } from '@sotf/contracts';
import { publishRealtime } from '@sotf/core';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { z } from 'zod';
import { UPSTREAM_KEEP_ALIVE_MS } from '../src/app.ts';
import { defineModule } from '../src/lib/define-module.ts';
import { buildTestApp, TEST_SITE_URL, type TestApp } from '../src/testing.ts';

const Item = z.object({ id: z.number().int(), name: z.string() });

const endpoints = {
  publicItem: defineEndpoint({
    id: 'test.publicItem',
    owner: 'WP-20',
    method: 'GET',
    path: '/api/v2/_test/items/:id',
    summary: 'test',
    auth: 'public',
    params: z.object({ id: z.coerce.number().int().positive() }),
    query: z.object({ limit: z.coerce.number().int().min(1).max(10).optional() }),
    response: Item,
    cache: cache.publicApi(['mod:{id}', 'home']),
  }),
  privateItem: defineEndpoint({
    id: 'test.privateItem',
    owner: 'WP-20',
    method: 'GET',
    path: '/api/v2/_test/me',
    summary: 'test',
    auth: 'session',
    response: Item,
    cache: cache.private,
  }),
  verifiedWrite: defineEndpoint({
    id: 'test.verifiedWrite',
    owner: 'WP-20',
    method: 'POST',
    path: '/api/v2/_test/items',
    summary: 'test',
    auth: 'verified',
    body: z.strictObject({ name: z.string().min(2) }),
    status: 201,
    response: Item,
    cache: cache.noStore,
    rateLimit: 'comments',
  }),
  remove: defineEndpoint({
    id: 'test.remove',
    owner: 'WP-20',
    method: 'DELETE',
    path: '/api/v2/_test/items/:id',
    summary: 'test',
    auth: 'moderator',
    params: z.object({ id: z.coerce.number().int().positive() }),
    responseKind: 'empty',
    cache: cache.noStore,
  }),
  beacon: defineEndpoint({
    id: 'test.beacon',
    owner: 'WP-20',
    method: 'POST',
    path: '/api/v2/_test/e',
    summary: 'test',
    auth: 'public',
    body: z.strictObject({ n: z.number() }),
    bodyKind: 'text',
    responseKind: 'empty',
    cache: cache.noStore,
    rateLimit: 'beacon',
  }),
} as const;

let softFlags: boolean[] = [];

const testModule = defineModule({
  name: 'test',
  register(m) {
    m.implement(endpoints.publicItem, async ({ params, cache: setCache }) => {
      setCache({ id: params.id });
      return { id: params.id, name: `item ${params.id}` };
    });
    m.implement(endpoints.privateItem, async ({ ctx }) => ({ id: ctx.actor?.userId ?? 0, name: 'me' }));
    m.implement(endpoints.verifiedWrite, async ({ body }) => ({ id: 1, name: body.name }));
    m.implement(endpoints.remove, async () => undefined);
    m.implement(endpoints.beacon, async ({ request }) => {
      softFlags.push(request.overSoftLimit);
    });
  },
});

let t: TestApp;

beforeAll(async () => {
  const { modules } = await import('../src/modules/_registry.gen.ts');
  t = await buildTestApp({
    modules: [...modules, testModule],
    rateLimits: { comments: { max: 2, window: '1 minute' }, beacon: { max: 1, window: '1 minute' } },
    sse: { pingMs: 150 },
  });
});

afterAll(async () => {
  await t?.close();
});

const json = (body: string) => JSON.parse(body) as Record<string, unknown>;

describe('errors', () => {
  it('answers unknown v2 routes with a 404 problem', async () => {
    const res = await t.app.inject({
      method: 'GET',
      url: '/api/v2/nope?x=1',
      headers: { 'cf-ray': '8c2f7a1b9d3e4f50-MAD' },
    });
    expect(res.statusCode).toBe(404);
    expect(res.headers['content-type']).toBe(PROBLEM_CONTENT_TYPE);
    expect(res.headers['x-request-id']).toBe('8c2f7a1b9d3e4f50-MAD');
    expect(res.headers['cache-control']).toBe('no-store');
    const body = json(res.body);
    expect(body).toMatchObject({
      type: 'https://sotf-mods.com/developers/errors#not-found',
      status: 404,
      code: 'NOT_FOUND',
      instance: '/api/v2/nope',
      requestId: '8c2f7a1b9d3e4f50-MAD',
    });
    expect(body.title).toBeTypeOf('string');
    expect(body.detail).toBeTypeOf('string');
  });

  it('answers unknown legacy routes with the legacy envelope', async () => {
    const res = await t.app.inject({ method: 'GET', url: '/api/nope' });
    expect(res.statusCode).toBe(404);
    expect(res.headers['content-type']).toBe('application/json');
    expect(res.body).toBe('{"status":false,"error":"NOT_FOUND","message":"No se encontró el recurso."}');
  });

  it('answers invalid params and query with a 422 problem listing the fields', async () => {
    const res = await t.app.inject({ method: 'GET', url: '/api/v2/_test/items/abc?limit=99' });
    expect(res.statusCode).toBe(422);
    expect(res.headers['content-type']).toBe(PROBLEM_CONTENT_TYPE);
    const body = json(res.body);
    expect(body.code).toBe('VALIDATION_FAILED');
    expect((body.errors as Array<{ path: string }>).map((e) => e.path)).toContain('id');
  });

  it('answers an invalid JSON body with a 422 problem', async () => {
    const res = await t.app.inject({
      method: 'POST',
      url: '/api/v2/_test/items',
      headers: { ...t.sameOrigin(), ...t.as({ userId: 7 }) },
      payload: { name: 'x', extra: true },
    });
    expect(res.statusCode).toBe(422);
    const body = json(res.body);
    expect(body.code).toBe('VALIDATION_FAILED');
    expect((body.errors as Array<{ path: string }>).length).toBeGreaterThan(0);
  });
});

describe('auth levels', () => {
  it('401 without a session, 200 with one', async () => {
    const anon = await t.app.inject({ method: 'GET', url: '/api/v2/_test/me' });
    expect(anon.statusCode).toBe(401);
    expect(json(anon.body).code).toBe('UNAUTHENTICATED');
    const me = await t.app.inject({ method: 'GET', url: '/api/v2/_test/me', headers: t.as({ userId: 42 }) });
    expect(me.statusCode).toBe(200);
    expect(json(me.body)).toEqual({ id: 42, name: 'me' });
    expect(me.headers['cache-control']).toBe('private, no-store');
    expect(me.headers['access-control-allow-origin']).toBeUndefined();
  });

  it('403 EMAIL_NOT_VERIFIED and 403 FORBIDDEN by role', async () => {
    const unverified = await t.app.inject({
      method: 'POST',
      url: '/api/v2/_test/items',
      headers: { ...t.sameOrigin(), ...t.as({ userId: 8, emailVerified: false }) },
      payload: { name: 'ok' },
    });
    expect(json(unverified.body).code).toBe('EMAIL_NOT_VERIFIED');
    const user = await t.app.inject({
      method: 'DELETE',
      url: '/api/v2/_test/items/1',
      headers: { ...t.sameOrigin(), ...t.as({ userId: 8 }) },
      payload: {},
    });
    expect(user.statusCode).toBe(403);
    expect(json(user.body).code).toBe('FORBIDDEN');
    const moderator = await t.app.inject({
      method: 'DELETE',
      url: '/api/v2/_test/items/1',
      headers: { ...t.sameOrigin(), ...t.as({ userId: 9, role: 'moderator' }) },
      payload: {},
    });
    expect(moderator.statusCode).toBe(204);
  });
});

describe('CSRF', () => {
  const write = (headers: Record<string, string>, payload: unknown = { name: 'hello' }) =>
    t.app.inject({
      method: 'POST',
      url: '/api/v2/_test/items',
      headers: { ...t.as({ userId: 100 }), ...headers },
      payload: payload as never,
    });

  it('rejects cross-site POSTs with 403', async () => {
    const res = await write({
      'sec-fetch-site': 'cross-site',
      origin: 'https://evil.example',
      'content-type': 'application/json',
    });
    expect(res.statusCode).toBe(403);
    expect(json(res.body).code).toBe('FORBIDDEN');
    const same = await write({
      'sec-fetch-site': 'same-site',
      origin: 'https://evil.sotf-mods.test',
      'content-type': 'application/json',
    });
    expect(same.statusCode).toBe(403);
  });

  it('rejects an untrusted Origin without Fetch Metadata', async () => {
    const res = await write({ origin: 'https://evil.example', 'content-type': 'application/json' });
    expect(res.statusCode).toBe(403);
  });

  it('accepts same-origin JSON and trusted origins', async () => {
    const res = await write(t.sameOrigin());
    expect(res.statusCode).toBe(201);
    expect(json(res.body)).toEqual({ id: 1, name: 'hello' });
    const trusted = await write({
      'sec-fetch-site': 'same-site',
      origin: TEST_SITE_URL,
      'content-type': 'application/json',
    });
    expect(trusted.statusCode).not.toBe(403);
  });

  it('requires application/json (415) except for text beacons', async () => {
    const form = await t.app.inject({
      method: 'POST',
      url: '/api/v2/_test/items',
      headers: { 'sec-fetch-site': 'same-origin', 'content-type': 'text/plain', ...t.as({ userId: 101 }) },
      payload: '{"name":"hello"}',
    });
    expect(form.statusCode).toBe(415);
    expect(json(form.body).code).toBe('UNSUPPORTED_MEDIA_TYPE');
    const beacon = await t.app.inject({
      method: 'POST',
      url: '/api/v2/_test/e',
      headers: { 'sec-fetch-site': 'same-origin', 'content-type': 'text/plain;charset=UTF-8' },
      payload: '{"n":1}',
    });
    expect(beacon.statusCode).toBe(204);
  });
});

describe('rate limits', () => {
  it('answers 429 RATE_LIMITED with Retry-After when a bucket is exceeded', async () => {
    const headers = { ...t.sameOrigin(), ...t.as({ userId: 555 }) };
    const statuses: number[] = [];
    let last: Awaited<ReturnType<typeof t.app.inject>> | undefined;
    for (let i = 0; i < 3; i += 1) {
      last = await t.app.inject({ method: 'POST', url: '/api/v2/_test/items', headers, payload: { name: 'spam' } });
      statuses.push(last.statusCode);
    }
    expect(statuses).toEqual([201, 201, 429]);
    expect(last?.headers['content-type']).toBe(PROBLEM_CONTENT_TYPE);
    expect(Number(last?.headers['retry-after'])).toBeGreaterThan(0);
    const body = json(last?.body ?? '{}');
    expect(body.code).toBe('RATE_LIMITED');
    expect(body.retryAfter).toBeGreaterThan(0);
    // Buckets keyed by user: another user is not affected.
    const other = await t.app.inject({
      method: 'POST',
      url: '/api/v2/_test/items',
      headers: { ...t.sameOrigin(), ...t.as({ userId: 556 }) },
      payload: { name: 'fine' },
    });
    expect(other.statusCode).toBe(201);
  });

  it('never rejects soft buckets: the request is flagged instead', async () => {
    softFlags = [];
    for (let i = 0; i < 3; i += 1) {
      const res = await t.app.inject({
        method: 'POST',
        url: '/api/v2/_test/e',
        headers: { 'content-type': 'text/plain', 'cf-connecting-ip': '203.0.113.9' },
        payload: '{"n":2}',
      });
      expect(res.statusCode).toBe(204);
    }
    expect(softFlags).toEqual([false, true, true]);
  });

  it('keys per-IP buckets on CF-Connecting-IP only when the peer is Cloudflare or private', async () => {
    const hit = async (remoteAddress: string, cfIp: string) => {
      const res = await t.app.inject({
        method: 'POST',
        url: '/api/v2/_test/e',
        remoteAddress,
        headers: { 'content-type': 'text/plain', 'cf-connecting-ip': cfIp },
        payload: '{"n":3}',
      });
      expect(res.statusCode).toBe(204);
    };
    // A client that reached the origin directly cannot dodge the limit by rotating the header.
    softFlags = [];
    for (const spoofed of ['198.51.100.1', '198.51.100.2', '198.51.100.3']) await hit('203.0.113.77', spoofed);
    expect(softFlags).toEqual([false, true, true]);
    // Through Cloudflare the header is the visitor: three visitors, three buckets.
    softFlags = [];
    for (const visitor of ['198.51.100.11', '198.51.100.12', '198.51.100.13']) await hit('173.245.48.9', visitor);
    expect(softFlags).toEqual([false, false, false]);
  });
});

describe('cache headers and CORS', () => {
  it('public endpoints carry edge caching, entity cache tags, ETag and CORS *', async () => {
    const res = await t.app.inject({
      method: 'GET',
      url: '/api/v2/_test/items/5',
      headers: { origin: 'https://third.party' },
    });
    expect(res.statusCode).toBe(200);
    expect(json(res.body)).toEqual({ id: 5, name: 'item 5' });
    expect(res.headers['cache-control']).toBe('public, max-age=0');
    expect(res.headers['cloudflare-cdn-cache-control']).toBe('public, max-age=60, stale-while-revalidate=600');
    expect(res.headers['cache-tag']).toBe('mod:5,home');
    expect(res.headers['access-control-allow-origin']).toBe('*');
    expect(res.headers['access-control-allow-credentials']).toBeUndefined();
    expect(res.headers['set-cookie']).toBeUndefined();
    const etag = res.headers.etag as string;
    expect(etag).toBeTruthy();
    const again = await t.app.inject({
      method: 'GET',
      url: '/api/v2/_test/items/5',
      headers: { 'if-none-match': etag },
    });
    expect(again.statusCode).toBe(304);
  });

  it('public endpoints ignore the session (identical for everyone)', async () => {
    let seen = 'unset';
    const probe = defineModule({
      name: 'probe',
      register(m) {
        m.implement(
          { ...endpoints.publicItem, id: 'test.probe', path: '/api/v2/_probe/items/:id' },
          async ({ request, params }) => {
            seen = String(request.actor);
            return { id: params.id, name: 'x' };
          },
        );
      },
    });
    const other = await buildTestApp({ db: t.db, modules: [probe], listener: null });
    try {
      await other.app.inject({ method: 'GET', url: '/api/v2/_probe/items/1', headers: other.as({ userId: 1 }) });
      expect(seen).toBe('null');
    } finally {
      await other.close();
    }
  });

  it('answers legacy preflights with 204 and the legacy CORS headers', async () => {
    const res = await t.app.inject({
      method: 'OPTIONS',
      url: '/api/mods',
      headers: { origin: 'https://example.com', 'access-control-request-method': 'GET' },
    });
    expect(res.statusCode).toBe(204);
    expect(res.headers['access-control-allow-origin']).toBe('*');
    expect(res.headers['access-control-allow-methods']).toBe('GET, HEAD, OPTIONS');
    expect(res.headers['access-control-max-age']).toBe('86400');
  });
});

describe('documentation', () => {
  it('serves the OpenAPI 3.1 document', async () => {
    const res = await t.app.inject({ method: 'GET', url: '/api/v2/openapi.json' });
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toContain('application/json');
    expect(res.headers['access-control-allow-origin']).toBe('*');
    const doc = json(res.body) as { openapi: string; info: { version: string }; paths: Record<string, unknown> };
    expect(doc.openapi).toBe('3.1.0');
    expect(doc.info.version).toBe('test');
    expect(Object.keys(doc.paths)).toContain('/api/v2/stream');
  });

  it('renders the Scalar reference at /api/docs', async () => {
    const bare = await t.app.inject({ method: 'GET', url: '/api/docs' });
    expect([200, 301, 302]).toContain(bare.statusCode);
    const res = await t.app.inject({
      method: 'GET',
      url: bare.statusCode === 200 ? '/api/docs' : String(bare.headers.location),
    });
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toContain('text/html');
    expect(res.body).toContain('/api/v2/openapi.json');
    expect(res.headers['content-security-policy']).toContain("script-src 'self'");
  });
});

describe('health', () => {
  it('/healthz and /readyz', async () => {
    const health = await t.app.inject({ method: 'GET', url: '/healthz' });
    expect(health.statusCode).toBe(200);
    expect(json(health.body)).toMatchObject({ status: 'ok', service: 'api', version: 'test' });
    const ready = await t.app.inject({ method: 'GET', url: '/readyz' });
    expect(ready.statusCode).toBe(200);
    expect(json(ready.body)).toMatchObject({ status: 'ok', checks: { db: true, pgboss: true, listen: true } });
  });

  it('keeps idle connections open longer than Traefik reuses them (90 s)', () => {
    // A shorter keep-alive races with the proxy and shows up as a sporadic 502 on POSTs.
    expect(UPSTREAM_KEEP_ALIVE_MS).toBeGreaterThan(90_000);
    expect(t.app.server.keepAliveTimeout).toBe(UPSTREAM_KEEP_ALIVE_MS);
    expect(t.app.server.headersTimeout).toBeGreaterThan(UPSTREAM_KEEP_ALIVE_MS);
    expect(t.app.server.requestTimeout).toBeGreaterThan(0);
  });

  it('/readyz is 503 without pg-boss or LISTEN', async () => {
    const bare = await buildTestApp({ db: t.db, boss: null, listener: null, modules: [] });
    try {
      const ready = await bare.app.inject({ method: 'GET', url: '/readyz' });
      expect(ready.statusCode).toBe(503);
      expect(json(ready.body)).toMatchObject({
        status: 'degraded',
        checks: { db: true, pgboss: false, listen: false },
      });
    } finally {
      await bare.close();
    }
  });
});

describe('internal purge', () => {
  it('requires X-Internal-Auth', async () => {
    const res = await t.app.inject({
      method: 'POST',
      url: '/internal/cdn/purge',
      headers: { 'content-type': 'application/json', 'x-internal-auth': 'wrong' },
      payload: { tags: ['html'], reason: 'deploy:abc' },
    });
    expect(res.statusCode).toBe(403);
    expect(res.headers['content-type']).toBe(PROBLEM_CONTENT_TYPE);
  });

  it('validates tags (422) and enqueues cdn.purge (202)', async () => {
    const bad = await t.app.inject({
      method: 'POST',
      url: '/internal/cdn/purge',
      headers: { 'content-type': 'application/json', ...t.internal() },
      payload: { tags: ['not a tag'], reason: 'x' },
    });
    expect(bad.statusCode).toBe(422);
    const res = await t.app.inject({
      method: 'POST',
      url: '/internal/cdn/purge',
      headers: { 'content-type': 'application/json', ...t.internal() },
      payload: { tags: ['html', 'mod:20'], reason: 'deploy:5504773' },
    });
    expect(res.statusCode).toBe(202);
    expect(json(res.body)).toEqual({ queued: true, tags: ['html', 'mod:20'], batches: 1 });
    const boss = t.app.platform.boss;
    const jobs = await boss?.findJobs('cdn.purge');
    expect(jobs?.some((j) => (j.data as { reason: string }).reason === 'deploy:5504773')).toBe(true);
  });
});

describe('SSE', () => {
  it('handshake, ping, NOTIFY delivery and auth', async () => {
    await t.app.listen({ port: 0, host: '127.0.0.1' });
    const { port } = t.app.server.address() as AddressInfo;
    const base = `http://127.0.0.1:${port}`;

    const anon = await fetch(`${base}/api/v2/stream`, { headers: { accept: 'text/event-stream' } });
    expect(anon.status).toBe(401);

    const controller = new AbortController();
    const res = await fetch(`${base}/api/v2/stream`, {
      headers: { accept: 'text/event-stream', ...t.as({ userId: 77, role: 'moderator' }) },
      signal: controller.signal,
    });
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toContain('text/event-stream');
    expect(res.headers.get('cache-control')).toBe('no-store');
    expect(res.headers.get('access-control-allow-origin')).toBeNull();
    const reader = (res.body as ReadableStream<Uint8Array>).getReader();
    const decoder = new TextDecoder();
    let text = '';
    const readUntil = async (needle: string, timeoutMs = 5000) => {
      const deadline = Date.now() + timeoutMs;
      while (!text.includes(needle)) {
        if (Date.now() > deadline) throw new Error(`timed out waiting for ${needle}; got ${JSON.stringify(text)}`);
        const { value, done } = await reader.read();
        if (done) throw new Error('stream ended');
        text += decoder.decode(value, { stream: true });
      }
    };
    await readUntil('retry: 5000');
    expect(text).toContain(': connected user:77 moderation');
    await readUntil(': ping');

    await publishRealtime(t.db.db, {
      channel: 'user:77',
      event: 'notification',
      id: '5001',
      data: { id: 5001, type: 'comment.on_my_mod', unreadCount: 3 },
    });
    await readUntil('id: 5001');
    expect(text).toContain('event: notification\ndata: {"id":5001,"type":"comment.on_my_mod","unreadCount":3}\n\n');

    // Other users' channels are not delivered.
    await publishRealtime(t.db.db, { channel: 'user:78', event: 'mod.updated', id: '1', data: { modId: 3 } });
    await publishRealtime(t.db.db, {
      channel: 'moderation',
      event: 'moderation.queue',
      id: '9',
      data: { lane: 'versions', count: 1 },
    });
    await readUntil('event: moderation.queue');
    expect(text).not.toContain('"modId":3');
    expect(t.app.platform.hub.streamCount).toBe(1);

    controller.abort();
    await reader.cancel().catch(() => undefined);
    const deadline = Date.now() + 3000;
    while (t.app.platform.hub.streamCount > 0 && Date.now() < deadline) await new Promise((r) => setTimeout(r, 20));
    expect(t.app.platform.hub.streamCount).toBe(0);
  });

  it('replays messages after Last-Event-ID', async () => {
    const hub = t.app.platform.hub;
    const replay = hub.replay(['user:77'], '5001');
    expect(replay).toEqual([]);
    hub.publish({ channel: 'user:90', event: 'mod.updated', id: 'a', data: { modId: 1 } });
    hub.publish({ channel: 'user:90', event: 'mod.updated', id: 'b', data: { modId: 2 } });
    expect(hub.replay(['user:90'], 'a').map((m) => m.id)).toEqual(['b']);
    expect(hub.replay(['user:90'], 'unknown')).toEqual([]);
  });
});
