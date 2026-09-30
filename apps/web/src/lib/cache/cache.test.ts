import { describe, expect, it, vi } from 'vitest';
import { cacheKey, createCloudflareTagsProvider, ORIGIN_CACHE_HEADER } from './cloudflare-tags.ts';
import {
  CACHE_TAG_HEADER,
  CDN_CACHE_CONTROL_HEADER,
  EDGE_TTL,
  edgeCacheHeaders,
  HTML_BROWSER_CACHE_CONTROL,
  INTERNAL_TAGS_HEADER,
  pageCache,
  parseEdgeCacheControl,
  publishCacheTags,
  withLocaleTag,
} from './policy.ts';
import { LOCALE_HEADER } from './request-locale.ts';
import { finalizePublicResponse } from './response.ts';

const logger = { info() {}, warn() {}, error() {} };

function request(path: string, init: RequestInit & { locale?: string } = {}): Request {
  const headers = new Headers(init.headers);
  headers.set(LOCALE_HEADER, init.locale ?? 'en');
  return new Request(new URL(path, 'https://sotf-mods.com'), { ...init, headers });
}

function page(body: string, maxAge = 300, tags = 'html,mod:20', extra: Record<string, string> = {}): Response {
  const headers = edgeCacheHeaders({ maxAge, tags: tags.split(',') });
  headers.set('content-type', 'text/html');
  for (const [name, value] of Object.entries(extra)) headers.set(name, value);
  return new Response(body, { status: 200, headers });
}

async function run(provider: ReturnType<typeof createCloudflareTagsProvider>, req: Request, make: () => Response) {
  const next = vi.fn(async () => make());
  const onRequest = provider.onRequest;
  if (!onRequest) throw new Error('provider without onRequest');
  const response = await onRequest({ request: req, url: new URL(req.url), logger }, next);
  return { response, calls: next.mock.calls.length };
}

describe('edge cache policy (PLAN §2.7)', () => {
  it('builds browser, Cloudflare and tag headers', () => {
    const headers = edgeCacheHeaders({ maxAge: 900, tags: ['html', 'mod:20', 'user:12'] });
    expect(headers.get('cache-control')).toBe(HTML_BROWSER_CACHE_CONTROL);
    expect(headers.get(CDN_CACHE_CONTROL_HEADER)).toBe(
      'public, max-age=900, stale-while-revalidate=86400, stale-if-error=604800',
    );
    expect(headers.get(INTERNAL_TAGS_HEADER)).toBe('html,mod:20,user:12');
    expect(headers.get(CACHE_TAG_HEADER)).toBeNull();
  });

  it('never edge-caches with maxAge 0 and drops invalid tags', () => {
    const headers = edgeCacheHeaders({ maxAge: 0, tags: ['html', 'mod:abc', 'Bad Tag'] });
    expect(headers.has(CDN_CACHE_CONTROL_HEADER)).toBe(false);
    expect(headers.get(INTERNAL_TAGS_HEADER)).toBe('html');
  });

  it('presets follow the TTLs of PLAN §4.2 and always carry html', () => {
    expect(pageCache.home()).toMatchObject({ maxAge: 300, tags: ['html', 'home'] });
    expect(pageCache.mod(20, 12)).toMatchObject({ maxAge: 900, tags: ['html', 'mod:20', 'user:12'] });
    expect(pageCache.notFound()).toMatchObject({ maxAge: EDGE_TTL.notFound, tags: ['html'] });
    expect(pageCache.static().maxAge).toBe(86_400);
    expect(pageCache.category('quality-of-life').tags).toContain('category:quality-of-life');
  });

  it('adds the locale tag once', () => {
    expect(withLocaleTag(['html', 'mod:1'], 'es')).toEqual(['html', 'mod:1', 'locale:es']);
    expect(withLocaleTag(['html', 'locale:es'], 'es')).toEqual(['html', 'locale:es']);
  });

  it('parses edge directives', () => {
    expect(parseEdgeCacheControl('public, max-age=60, stale-while-revalidate=600')).toEqual({ maxAge: 60, swr: 600 });
    expect(parseEdgeCacheControl(null)).toEqual({ maxAge: 0, swr: 0 });
    expect(parseEdgeCacheControl('max-age=abc')).toEqual({ maxAge: 0, swr: 0 });
  });

  it('publishes the internal tag header as Cache-Tag', () => {
    const headers = new Headers({ [INTERNAL_TAGS_HEADER]: 'html,home' });
    publishCacheTags(headers);
    expect(headers.get(CACHE_TAG_HEADER)).toBe('html,home');
    expect(headers.has(INTERNAL_TAGS_HEADER)).toBe(false);
  });
});

describe('cloudflareTags() provider', () => {
  it('sets the headers from Astro.cache options with the request locale tag', () => {
    const provider = createCloudflareTagsProvider();
    const headers = provider.setHeaders?.(
      { maxAge: 900, swr: 86_400, tags: ['html', 'mod:20'] },
      request('/x', { locale: 'de' }),
    );
    expect(headers?.get(CDN_CACHE_CONTROL_HEADER)).toContain('max-age=900');
    expect(headers?.get(INTERNAL_TAGS_HEADER)).toBe('html,mod:20,locale:de');
  });

  it('serves the second request from the origin LRU', async () => {
    const provider = createCloudflareTagsProvider();
    const first = await run(provider, request('/mods'), () => page('one'));
    expect(first.response.headers.get(ORIGIN_CACHE_HEADER)).toBe('MISS');
    expect(await first.response.text()).toBe('one');
    const second = await run(provider, request('/mods'), () => page('two'));
    expect(second.calls).toBe(0);
    expect(second.response.headers.get(ORIGIN_CACHE_HEADER)).toBe('HIT');
    expect(await second.response.text()).toBe('one');
    expect(second.response.headers.get('etag')).toBe(first.response.headers.get('etag'));
  });

  it('keys by locale, path and normalized query (tracking parameters ignored)', async () => {
    const provider = createCloudflareTagsProvider();
    await run(provider, request('/mods?b=2&a=1&utm_source=x'), () => page('en'));
    expect((await run(provider, request('/mods?a=1&b=2'), () => page('other'))).calls).toBe(0);
    expect((await run(provider, request('/mods?a=1&b=2', { locale: 'es' }), () => page('es'))).calls).toBe(1);
    expect(cacheKey(new URL('https://h/p?z=1&a=2&fbclid=3'), 'en', new Set(['fbclid']))).toBe('h|en|/p?a=2&z=1');
  });

  it('answers 304 to a matching If-None-Match', async () => {
    const provider = createCloudflareTagsProvider();
    const first = await run(provider, request('/mods'), () => page('body'));
    const etag = first.response.headers.get('etag') ?? '';
    const conditional = await run(provider, request('/mods', { headers: { 'if-none-match': etag } }), () => page('x'));
    expect(conditional.response.status).toBe(304);
    expect(await conditional.response.text()).toBe('');
  });

  it('never stores responses with Set-Cookie, Vary: Cookie, private/no-store, 5xx or no edge TTL', async () => {
    const provider = createCloudflareTagsProvider();
    const variants: Array<() => Response> = [
      () => page('a', 300, 'html', { 'set-cookie': 'x=1' }),
      () => page('a', 300, 'html', { vary: 'Accept-Encoding, Cookie' }),
      () => page('a', 300, 'html', { 'cache-control': 'private, no-store' }),
      () => new Response('boom', { status: 500, headers: edgeCacheHeaders({ maxAge: 300 }) }),
      () => page('a', 0),
    ];
    for (const [index, make] of variants.entries()) {
      const path = `/v${index}`;
      await run(provider, request(path), make);
      expect((await run(provider, request(path), make)).calls, path).toBe(1);
    }
    expect(provider.size).toBe(0);
  });

  it('skips non-GET requests', async () => {
    const provider = createCloudflareTagsProvider();
    await run(provider, request('/x', { method: 'HEAD' }), () => page('a'));
    expect(provider.size).toBe(0);
  });

  it('expires entries after the edge TTL', async () => {
    let clock = 1_000;
    const provider = createCloudflareTagsProvider({ now: () => clock });
    await run(provider, request('/ttl'), () => page('a', 60));
    clock += 59_000;
    expect((await run(provider, request('/ttl'), () => page('b', 60))).calls).toBe(0);
    clock += 2_000;
    expect((await run(provider, request('/ttl'), () => page('c', 60))).calls).toBe(1);
  });

  it('invalidates by tag and by path', async () => {
    const provider = createCloudflareTagsProvider();
    await run(provider, request('/a'), () => page('a', 300, 'html,mod:1'));
    await run(provider, request('/b'), () => page('b', 300, 'html,mod:2'));
    await run(provider, request('/c?page=2'), () => page('c', 300, 'html,home'));
    expect(provider.size).toBe(3);
    await provider.invalidate({ tags: ['mod:1'] });
    expect(provider.size).toBe(2);
    await provider.invalidate({ path: '/c?page=2' });
    expect(provider.size).toBe(1);
    await provider.invalidate({ tags: 'html' });
    expect(provider.size).toBe(0);
  });

  it('respects the entry and byte limits', async () => {
    const provider = createCloudflareTagsProvider({ max: 2, maxBytes: 1024 });
    await run(provider, request('/1'), () => page('1'));
    await run(provider, request('/2'), () => page('2'));
    await run(provider, request('/3'), () => page('3'));
    expect(provider.size).toBe(2);
    await run(provider, request('/big'), () => page('x'.repeat(2048)));
    expect(provider.size).toBe(2);
  });
});

describe('finalizePublicResponse (no Set-Cookie on shared HTML)', () => {
  const html = () => new Response('<p>x</p>', { headers: { 'content-type': 'text/html' } });

  it('applies a page policy where Astro did not (dev server, error pages)', () => {
    const out = finalizePublicResponse(html(), {
      method: 'GET',
      locale: 'fr',
      policy: pageCache.notFound(),
      setsCookies: false,
    });
    expect(out.headers.get(CDN_CACHE_CONTROL_HEADER)).toContain('max-age=60');
    expect(out.headers.get(INTERNAL_TAGS_HEADER)).toBe('html,locale:fr');
    expect(out.headers.get('cache-control')).toBe(HTML_BROWSER_CACHE_CONTROL);
  });

  it('turns any response that sets a cookie into private, no-store', () => {
    const response = page('x', 300, 'html', { 'set-cookie': 'a=1' });
    const out = finalizePublicResponse(response, {
      method: 'GET',
      locale: 'en',
      policy: pageCache.home(),
      setsCookies: false,
    });
    expect(out.headers.get('cache-control')).toBe('private, no-store');
    expect(out.headers.has(CDN_CACHE_CONTROL_HEADER)).toBe(false);
    expect(out.headers.has(INTERNAL_TAGS_HEADER)).toBe(false);
    const viaAstro = finalizePublicResponse(html(), {
      method: 'GET',
      locale: 'en',
      policy: pageCache.home(),
      setsCookies: true,
    });
    expect(viaAstro.headers.get('cache-control')).toBe('private, no-store');
  });

  it('honours setPageCache(false) and never caches server errors', () => {
    expect(
      finalizePublicResponse(html(), { method: 'GET', locale: 'en', policy: false, setsCookies: false }).headers.get(
        'cache-control',
      ),
    ).toBe('private, no-store');
    const error = finalizePublicResponse(
      new Response('x', { status: 500, headers: edgeCacheHeaders({ maxAge: 60 }) }),
      {
        method: 'GET',
        locale: 'en',
        policy: pageCache.home(),
        setsCookies: false,
      },
    );
    expect(error.headers.get('cache-control')).toBe('no-store');
    expect(error.headers.has(CDN_CACHE_CONTROL_HEADER)).toBe(false);
  });

  it('gives public HTML without a policy the revalidate-always browser policy and no edge TTL', () => {
    const out = finalizePublicResponse(html(), { method: 'GET', locale: 'en', policy: undefined, setsCookies: false });
    expect(out.headers.get('cache-control')).toBe(HTML_BROWSER_CACHE_CONTROL);
    expect(out.headers.has(CDN_CACHE_CONTROL_HEADER)).toBe(false);
  });

  it('never marks unsafe methods as edge-cacheable', () => {
    const out = finalizePublicResponse(page('x'), {
      method: 'POST',
      locale: 'en',
      policy: undefined,
      setsCookies: false,
    });
    expect(out.headers.has(CDN_CACHE_CONTROL_HEADER)).toBe(false);
  });
});
