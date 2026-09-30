import { describe, expect, it, vi } from 'vitest';
import { type DownloadProxyEnv, downloadProxyEnv, forwardedHeaders, proxyDownload, wantsHtml } from './_proxy.ts';
import { downloadParams } from './[version].ts';

const env: DownloadProxyEnv = { internalApiUrl: 'http://api.internal:3001', internalSecret: 'secret-for-tests' };
const params = { user: 'regitoxic', slug: 'virginia-wardrobe-18+', version: 'latest' };

function resolved(body: Record<string, unknown>, status = 200) {
  return vi.fn(
    async (_url: string | URL | Request, _init?: RequestInit) =>
      new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } }),
  );
}

const OK = {
  status: 302,
  location: 'https://r2.sotf-mods.com/1765726049138_virginia-wardrobe-18%2B_0.0.4.zip',
  reason: 'ok',
  counted: true,
  modId: 168,
  versionId: 900,
};

describe('proxyDownload', () => {
  it('asks the internal resolver with the forwarded headers and relays the 302', async () => {
    const fetchImpl = resolved(OK);
    const request = new Request('https://sotf-mods.com/mods/regitoxic/virginia-wardrobe-18+/download/latest', {
      headers: { 'cf-ipcountry': 'DE', range: 'bytes=0-', 'sec-purpose': 'prefetch', cookie: 'sid=1' },
    });
    const res = await proxyDownload({ request, params, clientAddress: '198.51.100.7', env, fetchImpl });
    expect(res.status).toBe(302);
    expect(res.headers.get('location')).toBe(OK.location);
    expect(res.headers.get('cache-control')).toBe('no-store, private');
    expect(res.headers.get('x-robots-tag')).toBe('noindex, nofollow');
    expect(res.headers.get('referrer-policy')).toBe('no-referrer');

    const [url, init] = fetchImpl.mock.calls[0] as [URL, RequestInit];
    expect(url.toString()).toBe(
      'http://api.internal:3001/internal/downloads/resolve?user=regitoxic&slug=virginia-wardrobe-18%2B&version=latest&method=GET',
    );
    const sent = new Headers(init.headers);
    expect(sent.get('x-internal-auth')).toBe('secret-for-tests');
    expect(sent.get('cf-connecting-ip')).toBe('198.51.100.7');
    expect(sent.get('user-agent')).toBe('');
    expect(sent.get('cf-ipcountry')).toBe('DE');
    expect(sent.get('range')).toBe('bytes=0-');
    expect(sent.get('sec-purpose')).toBe('prefetch');
    expect(sent.get('cookie')).toBe('sid=1');
    expect(init.redirect).toBe('manual');
  });

  it('forwards HEAD as method=HEAD and prefers CF-Connecting-IP', async () => {
    const fetchImpl = resolved(OK);
    const request = new Request('https://sotf-mods.com/mods/a/b/download/1', {
      method: 'HEAD',
      headers: { 'cf-connecting-ip': '203.0.113.9', 'user-agent': 'RedManager/1.2' },
    });
    const res = await proxyDownload({ request, params, clientAddress: '10.0.0.1', env, fetchImpl });
    expect(res.status).toBe(302);
    const [url, init] = fetchImpl.mock.calls[0] as [URL, RequestInit];
    expect(url.searchParams.get('method')).toBe('HEAD');
    const sent = new Headers(init.headers);
    expect(sent.get('cf-connecting-ip')).toBe('203.0.113.9');
    expect(sent.get('user-agent')).toBe('RedManager/1.2');
  });

  it('answers 404/410 with the legacy JSON envelope for API clients', async () => {
    const notFound = await proxyDownload({
      request: new Request('https://sotf-mods.com/x'),
      params,
      env,
      fetchImpl: resolved({ ...OK, status: 404, location: null, reason: 'version_not_found', counted: false }),
    });
    expect(notFound.status).toBe(404);
    expect(await notFound.json()).toEqual({ status: false, error: 'NOT_FOUND', message: 'No se encontró el recurso.' });
    expect(notFound.headers.get('cache-control')).toBe('no-store, private');
    const gone = await proxyDownload({
      request: new Request('https://sotf-mods.com/x'),
      params,
      env,
      fetchImpl: resolved({ ...OK, status: 410, location: null, reason: 'file_missing', counted: false }),
    });
    expect(gone.status).toBe(410);
    expect(await gone.json()).toMatchObject({ status: false, error: 'GONE' });
  });

  it('renders the site error page for browsers, with the real status', async () => {
    const renderErrorPage = vi.fn(
      async () => new Response('<h1>gone</h1>', { status: 404, headers: { 'content-type': 'text/html' } }),
    );
    const res = await proxyDownload({
      request: new Request('https://sotf-mods.com/x', { headers: { accept: 'text/html,application/xhtml+xml' } }),
      params,
      env,
      renderErrorPage,
      fetchImpl: resolved({ ...OK, status: 410, location: null, reason: 'file_missing', counted: false }),
    });
    expect(renderErrorPage).toHaveBeenCalledWith(410);
    expect(res.status).toBe(410);
    expect(res.headers.get('content-type')).toBe('text/html');
    expect(res.headers.get('x-robots-tag')).toBe('noindex, nofollow');
    expect(await res.text()).toBe('<h1>gone</h1>');

    const broken = await proxyDownload({
      request: new Request('https://sotf-mods.com/x', { headers: { accept: 'text/html' } }),
      params,
      env,
      renderErrorPage: async () => {
        throw new Error('render failed');
      },
      fetchImpl: resolved({ ...OK, status: 404, location: null, reason: 'mod_not_found', counted: false }),
    });
    expect(broken.status).toBe(404);
  });

  it('treats a 422 from the API as not found and any other failure as 503', async () => {
    const invalid = await proxyDownload({
      request: new Request('https://sotf-mods.com/x'),
      params,
      env,
      fetchImpl: resolved({ status: 422 }, 422),
    });
    expect(invalid.status).toBe(404);
    for (const fetchImpl of [
      resolved({}, 500),
      vi.fn(async () => {
        throw new TypeError('fetch failed');
      }),
    ]) {
      const res = await proxyDownload({ request: new Request('https://sotf-mods.com/x'), params, env, fetchImpl });
      expect(res.status).toBe(503);
      expect(res.headers.get('retry-after')).toBe('10');
      expect(res.headers.get('location')).toBeNull();
    }
  });
});

describe('helpers', () => {
  it('wantsHtml', () => {
    expect(wantsHtml(new Request('https://x', { headers: { accept: 'text/html' } }))).toBe(true);
    expect(wantsHtml(new Request('https://x', { headers: { accept: '*/*' } }))).toBe(false);
    expect(wantsHtml(new Request('https://x'))).toBe(false);
  });

  it('downloadProxyEnv validates the configuration', () => {
    expect(downloadProxyEnv({ INTERNAL_API_URL: 'http://api:3001/', INTERNAL_SECRET: 's' })).toEqual({
      internalApiUrl: 'http://api:3001',
      internalSecret: 's',
    });
    expect(() => downloadProxyEnv({ INTERNAL_SECRET: 's' })).toThrow('INTERNAL_API_URL');
    expect(() => downloadProxyEnv({ INTERNAL_API_URL: 'http://api' })).toThrow('INTERNAL_SECRET');
  });

  it('forwardedHeaders never forwards a missing IP', () => {
    const headers = forwardedHeaders(new Request('https://x'), null, 's');
    expect(headers.has('cf-connecting-ip')).toBe(false);
  });

  it('downloadParams decodes the raw path once', () => {
    const context = (url: string) => ({ request: new Request(url), params: {} });
    expect(downloadParams(context("https://sotf-mods.com/mods/imaxel/axel's-mod-menu/download/1.3.8"))).toEqual({
      user: 'imaxel',
      slug: "axel's-mod-menu",
      version: '1.3.8',
    });
    expect(downloadParams(context('https://sotf-mods.com/mods/u/customradio-(beta)/download/latest'))).toEqual({
      user: 'u',
      slug: 'customradio-(beta)',
      version: 'latest',
    });
    expect(
      downloadParams(context('https://sotf-mods.com/mods/regitoxic/virginia-wardrobe-18%2B/download/0.0.4')),
    ).toEqual({
      user: 'regitoxic',
      slug: 'virginia-wardrobe-18+',
      version: '0.0.4',
    });
    expect(downloadParams(context('https://sotf-mods.com/mods/a%20b/c%zz/download/1'))).toEqual({
      user: 'a b',
      slug: 'c%zz',
      version: '1',
    });
  });
});
