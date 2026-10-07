import { cache, defineEndpoint } from '@sotf/contracts';
import { DomainError } from '@sotf/core';
import type { FastifyRequest } from 'fastify';
import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import { clientIpOf, countryOf, createTrustedEdge, requestIdFrom } from '../src/lib/client-ip.ts';
import { pathOf, surfaceOf } from '../src/lib/surface.ts';
import { secretsEqual } from '../src/plugins/context.ts';
import { allowedContentTypes, checkCsrf, mediaTypeOf } from '../src/plugins/csrf.ts';
import { renderError } from '../src/plugins/errors.ts';
import { bucketFor } from '../src/plugins/rate-limit.ts';
import { formatFrame } from '../src/plugins/sse.ts';

const write = defineEndpoint({
  id: 'x.write',
  owner: 'WP-20',
  method: 'POST',
  path: '/api/v2/x',
  summary: 'x',
  auth: 'session',
  body: z.strictObject({}),
  cache: cache.noStore,
});

function fakeRequest(init: {
  method?: string;
  url?: string;
  headers?: Record<string, string>;
  endpoint?: unknown;
  ip?: string;
}): FastifyRequest {
  return {
    method: init.method ?? 'POST',
    url: init.url ?? '/api/v2/x',
    headers: init.headers ?? {},
    ip: init.ip ?? '10.0.0.1',
    routeOptions: { url: init.url ?? '/api/v2/x', config: { endpoint: init.endpoint } },
  } as unknown as FastifyRequest;
}

describe('surfaces', () => {
  it('classifies paths', () => {
    expect(surfaceOf('/api/v2/mods?x=1')).toBe('v2');
    expect(surfaceOf('/api/v2')).toBe('v2');
    expect(surfaceOf('/api/v2x')).toBe('legacy');
    expect(surfaceOf('/api/mods')).toBe('legacy');
    expect(surfaceOf('/api/docs/')).toBe('docs');
    expect(surfaceOf('/internal/cdn/purge')).toBe('internal');
    expect(surfaceOf('/healthz')).toBe('platform');
    expect(pathOf('/a?b')).toBe('/a');
  });
});

describe('client address and request id', () => {
  it('prefers a valid CF-Connecting-IP', () => {
    expect(clientIpOf(fakeRequest({ headers: { 'cf-connecting-ip': '203.0.113.5' } }))).toBe('203.0.113.5');
    expect(clientIpOf(fakeRequest({ headers: { 'cf-connecting-ip': 'nonsense' } }))).toBe('10.0.0.1');
    expect(countryOf(fakeRequest({ headers: { 'cf-ipcountry': 'es' } }))).toBe('ES');
    expect(countryOf(fakeRequest({ headers: { 'cf-ipcountry': 'XX' } }))).toBeNull();
  });

  it('believes CF-Connecting-IP and CF-IPCountry only from Cloudflare or the private network', () => {
    const spoof = { 'cf-connecting-ip': '198.51.100.7', 'cf-ipcountry': 'ES' };
    // A client that reached the origin without Cloudflare: its own address wins, the headers are ignored.
    const direct = fakeRequest({ ip: '203.0.113.50', headers: spoof });
    expect(clientIpOf(direct)).toBe('203.0.113.50');
    expect(countryOf(direct)).toBeNull();
    // Through Cloudflare (Traefik saw an edge address) or from a container of ours.
    for (const peer of ['173.245.48.9', '104.16.1.1', '172.70.1.2', '2606:4700::1', '::ffff:162.158.0.4']) {
      const viaEdge = fakeRequest({ ip: peer, headers: spoof });
      expect(clientIpOf(viaEdge)).toBe('198.51.100.7');
      expect(countryOf(viaEdge)).toBe('ES');
    }
    for (const peer of ['127.0.0.1', '::1', '172.18.0.5', '::ffff:10.0.4.2', '192.168.1.3', 'fd12::5']) {
      expect(clientIpOf(fakeRequest({ ip: peer, headers: spoof }))).toBe('198.51.100.7');
    }
    // Just outside Cloudflare's ranges and outside RFC 1918.
    for (const peer of ['104.15.255.255', '172.32.0.1', '11.0.0.1', '2606:4701::1']) {
      expect(clientIpOf(fakeRequest({ ip: peer, headers: spoof }))).toBe(peer);
    }
  });

  it('accepts operator-listed edge ranges', () => {
    const edge = createTrustedEdge(['203.0.113.0/24']);
    const request = fakeRequest({ ip: '203.0.113.50', headers: { 'cf-connecting-ip': '198.51.100.7' } });
    expect(clientIpOf(request, edge)).toBe('198.51.100.7');
    expect(clientIpOf(request)).toBe('203.0.113.50');
  });

  it('uses cf-ray as request id when well-formed', () => {
    expect(requestIdFrom({ 'cf-ray': '8c2f7a1b9d3e4f50-MAD' }, () => 'uuid')).toBe('8c2f7a1b9d3e4f50-MAD');
    expect(requestIdFrom({ 'cf-ray': 'bad ray <script>' }, () => 'uuid')).toBe('uuid');
    expect(requestIdFrom({}, () => 'uuid')).toBe('uuid');
  });
});

describe('CSRF', () => {
  const trusted = { trustedOrigins: ['https://sotf-mods.com'] };
  const json = { 'content-type': 'application/json; charset=utf-8' };

  it('passes safe methods and same-origin JSON', () => {
    expect(() => checkCsrf(fakeRequest({ method: 'GET', endpoint: write }), trusted)).not.toThrow();
    expect(() =>
      checkCsrf(fakeRequest({ endpoint: write, headers: { 'sec-fetch-site': 'same-origin', ...json } }), trusted),
    ).not.toThrow();
    // Non-browser clients (no Fetch Metadata, no Origin).
    expect(() => checkCsrf(fakeRequest({ endpoint: write, headers: json }), trusted)).not.toThrow();
  });

  it('blocks cross-site requests unless the origin is trusted', () => {
    const cross = { 'sec-fetch-site': 'cross-site', origin: 'https://evil.example', ...json };
    expect(() => checkCsrf(fakeRequest({ endpoint: write, headers: cross }), trusted)).toThrow(DomainError);
    const site = { 'sec-fetch-site': 'same-site', origin: 'https://sotf-mods.com', ...json };
    expect(() => checkCsrf(fakeRequest({ endpoint: write, headers: site }), trusted)).not.toThrow();
    const none = { 'sec-fetch-site': 'none', ...json };
    expect(() => checkCsrf(fakeRequest({ endpoint: write, headers: none }), trusted)).toThrow(DomainError);
  });

  it('enforces the content type per contract', () => {
    const plain = { 'sec-fetch-site': 'same-origin', 'content-type': 'text/plain' };
    expect(() => checkCsrf(fakeRequest({ endpoint: write, headers: plain }), trusted)).toThrow(/Content-Type/);
    expect(allowedContentTypes({ ...write, bodyKind: 'text' })).toContain('text/plain');
    expect(allowedContentTypes({ ...write, requires: ['signed_token'] })).toContain(
      'application/x-www-form-urlencoded',
    );
    expect(mediaTypeOf('Application/JSON; charset=UTF-8')).toBe('application/json');
    // Signed-token endpoints (RFC 8058) accept cross-site form posts.
    const unsubscribe = { ...write, auth: 'public' as const, requires: ['signed_token' as const] };
    const form = { 'sec-fetch-site': 'cross-site', 'content-type': 'application/x-www-form-urlencoded' };
    expect(() => checkCsrf(fakeRequest({ endpoint: unsubscribe, headers: form }), trusted)).not.toThrow();
  });

  it('exempts internal routes', () => {
    expect(() => checkCsrf(fakeRequest({ url: '/internal/cdn/purge', headers: {} }), trusted)).not.toThrow();
  });
});

describe('errors', () => {
  it('maps domain and framework errors', () => {
    expect(renderError(new DomainError('GONE', undefined, 'gone'))).toMatchObject({ code: 'GONE', status: 410 });
    expect(
      renderError({ statusCode: 415, code: 'FST_ERR_CTP_INVALID_MEDIA_TYPE', message: 'Unsupported Media Type' }),
    ).toMatchObject({
      code: 'UNSUPPORTED_MEDIA_TYPE',
      status: 415,
    });
    expect(
      renderError({ statusCode: 400, code: 'FST_ERR_CTP_EMPTY_JSON_BODY', message: 'Body cannot be empty' }),
    ).toMatchObject({
      code: 'VALIDATION_FAILED',
      status: 422,
    });
    expect(renderError({ statusCode: 413, code: 'FST_ERR_CTP_BODY_TOO_LARGE', message: 'too large' })).toMatchObject({
      code: 'PAYLOAD_TOO_LARGE',
    });
    const internal = renderError(new Error('secret connection string leaked'));
    expect(internal).toMatchObject({ code: 'INTERNAL', status: 500 });
    expect(internal.detail).not.toContain('secret');
  });
});

describe('buckets', () => {
  it('chooses the default bucket by surface and method', () => {
    const read = defineEndpoint({ ...write, method: 'GET', auth: 'public', body: undefined });
    expect(bucketFor(fakeRequest({ method: 'GET', endpoint: read }))).toBe('anonymousRead');
    expect(bucketFor(fakeRequest({ method: 'GET', url: '/api/mods', endpoint: undefined }))).toBe('legacyRead');
    expect(bucketFor(fakeRequest({ endpoint: write }))).toBe('userWrite');
    expect(bucketFor(fakeRequest({ endpoint: { ...write, rateLimit: 'comments' } }))).toBe('comments');
    expect(bucketFor(fakeRequest({ url: '/internal/cdn/purge', endpoint: { ...write, auth: 'internal' } }))).toBeNull();
  });
});

describe('misc', () => {
  it('compares secrets in constant time', () => {
    expect(secretsEqual('abc', 'abc')).toBe(true);
    expect(secretsEqual('abcd', 'abc')).toBe(false);
    expect(secretsEqual(undefined, 'abc')).toBe(false);
  });

  it('formats SSE frames', () => {
    expect(formatFrame({ channel: 'user:1', event: 'mod.updated', id: '7', data: { modId: 2 } })).toBe(
      'id: 7\nevent: mod.updated\ndata: {"modId":2}\n\n',
    );
  });
});
