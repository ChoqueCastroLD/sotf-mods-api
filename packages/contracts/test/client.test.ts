/**
 * Typed client: runtime behaviour against a mock fetch (URL building, serialisation, errors,
 * redirects, validation). Type-level tests live in `client.test-d.ts`.
 */
import { describe, expect, it } from 'vitest';
import { ApiError, createApiClient, type FetchInitLike, type FetchLike, serializeQuery } from '../src/client.ts';
import { exampleOf } from '../src/dto.ts';
import { problem } from '../src/errors.ts';
import { apiContracts, ModDetailDTO } from '../src/index.ts';

interface Call {
  url: string;
  init: FetchInitLike;
}

function mockFetch(respond: (call: Call) => { status: number; body?: string; headers?: Record<string, string> }) {
  const calls: Call[] = [];
  const fetch: FetchLike = async (url, init) => {
    const call = { url, init };
    calls.push(call);
    const { status, body = '', headers = {} } = respond(call);
    const lower = Object.fromEntries(Object.entries(headers).map(([k, v]) => [k.toLowerCase(), v]));
    return {
      status,
      ok: status >= 200 && status < 300,
      headers: { get: (name: string) => lower[name.toLowerCase()] ?? null },
      text: async () => body,
    };
  };
  return { fetch, calls };
}

const json = (value: unknown, status = 200) => ({
  status,
  body: JSON.stringify(value),
  headers: { 'content-type': 'application/json' },
});

describe('createApiClient', () => {
  it('builds paths with encoded params and returns the JSON body', async () => {
    const detail = exampleOf(ModDetailDTO);
    const { fetch, calls } = mockFetch(() => json(detail));
    const api = createApiClient({ baseUrl: 'http://api.internal:47301/', fetch });
    const mod = await api.catalog.getModBySlug({ params: { user: 'imaxel', slug: "axel's mod/menu" } });
    expect(mod.name).toBe("Axel's Mod Menu");
    expect(calls[0]?.url).toBe("http://api.internal:47301/api/v2/mods/by-slug/imaxel/axel's%20mod%2Fmenu");
    expect(calls[0]?.init.method).toBe('GET');
    expect(calls[0]?.init.body).toBeUndefined();
    expect(calls[0]?.init.redirect).toBe('follow');
  });

  it('serialises queries with sorted keys, repeated arrays and 1/0 booleans', async () => {
    const { fetch, calls } = mockFetch(() =>
      json({ items: [], page: 1, pageSize: 24, total: 0, totalPages: 0, facets: null }),
    );
    const api = createApiClient({ baseUrl: '', fetch });
    await api.catalog.listMods({
      query: { tag: ['inventory', 'ui'], sort: 'downloads', nsfw: false, page: 2, q: 'stak mod' },
    });
    expect(calls[0]?.url).toBe('/api/v2/mods?nsfw=0&page=2&q=stak%20mod&sort=downloads&tag=inventory&tag=ui');
    expect(serializeQuery({ a: undefined, b: null, c: [] })).toBe('');
  });

  it('sends JSON bodies (and an empty object on body-less mutations)', async () => {
    const { fetch, calls } = mockFetch((call) =>
      call.url.endsWith('/follow') ? json({ following: true, notify: false, followers: 3 }) : { status: 204 },
    );
    const api = createApiClient({ baseUrl: '', fetch, headers: () => ({ cookie: '__Host-sotf_sid=abc' }) });
    const state = await api.follows.followMod({ params: { id: 20 }, body: { notify: false } });
    expect(state).toEqual({ following: true, notify: false, followers: 3 });
    expect(calls[0]?.init).toMatchObject({ method: 'PUT', body: '{"notify":false}' });
    expect(calls[0]?.init.headers['content-type']).toBe('application/json');
    expect(calls[0]?.init.headers.cookie).toBe('__Host-sotf_sid=abc');

    await expect(api.auth.logout()).resolves.toBeUndefined();
    expect(calls[1]?.init).toMatchObject({ method: 'POST', body: '{}' });
    expect(calls[1]?.init.headers['content-type']).toBe('application/json');
  });

  it('posts beacons as text/plain JSON', async () => {
    const { fetch, calls } = mockFetch(() => ({ status: 204 }));
    const api = createApiClient({ baseUrl: '', fetch });
    await api.events.beacon({ body: { events: [{ kind: 'page_view', path: '/' }] } });
    expect(calls[0]?.init.headers['content-type']).toBe('text/plain;charset=UTF-8');
  });

  it('returns redirects without following them', async () => {
    const { fetch, calls } = mockFetch(() => ({
      status: 302,
      headers: { location: "https://r2.sotf-mods.com/1766549349465_Regi's%20Modding%20Library.zip" },
    }));
    const api = createApiClient({ baseUrl: '', fetch });
    const result = await api.downloads.versionDownload({ params: { id: 530 } });
    expect(result).toEqual({
      status: 302,
      location: "https://r2.sotf-mods.com/1766549349465_Regi's%20Modding%20Library.zip",
    });
    expect(calls[0]?.init.redirect).toBe('manual');
  });

  it('returns text and CSV bodies as strings', async () => {
    const { fetch } = mockFetch((call) =>
      call.url.includes('kelvinseek')
        ? { status: 200, body: 'follow_me|On my way!' }
        : { status: 200, body: 'day,downloads\n' },
    );
    const api = createApiClient({ baseUrl: '', fetch });
    await expect(
      api.legacy.kelvinseekPrompt({ query: { chat_id: 'x', text: 'follow me', context: '' } }),
    ).resolves.toBe('follow_me|On my way!');
    await expect(api.studio.analyticsCsv()).resolves.toBe('day,downloads\n');
  });

  it('throws ApiError with the problem details of v2 errors', async () => {
    const body = problem('NOT_FOUND', { instance: '/api/v2/mods/999', requestId: 'r1', detail: 'mod 999 not found' });
    const { fetch } = mockFetch(() => json(body, 404));
    const api = createApiClient({ baseUrl: '', fetch });
    const error = await api.catalog.getMod({ params: { id: 999 } }).catch((e: unknown) => e);
    expect(error).toBeInstanceOf(ApiError);
    expect(error).toMatchObject({
      status: 404,
      code: 'NOT_FOUND',
      endpointId: 'catalog.getMod',
      problem: body,
      legacy: null,
    });
  });

  it('maps the legacy envelope and non-JSON failures to ApiError', async () => {
    const legacyBody = { status: false, error: 'NOT_FOUND', message: 'No se encontró el recurso.' };
    const { fetch } = mockFetch((call) =>
      call.url.startsWith('/api/mods/') ? json(legacyBody, 404) : { status: 502, body: '<html>' },
    );
    const api = createApiClient({ baseUrl: '', fetch });
    const legacy = await api.legacy.getMod({ params: { mod_id: 'DoesNotExist123' } }).catch((e: unknown) => e);
    expect(legacy).toMatchObject({ code: 'NOT_FOUND', status: 404, legacy: legacyBody });
    const gateway = await api.stats.site().catch((e: unknown) => e);
    expect(gateway).toMatchObject({ code: 'INTERNAL', status: 502 });
  });

  it('turns network failures into UNAVAILABLE and rethrows aborts', async () => {
    const api = createApiClient({
      baseUrl: '',
      fetch: async () => {
        throw new TypeError('fetch failed');
      },
    });
    await expect(api.stats.site()).rejects.toMatchObject({ code: 'UNAVAILABLE', status: 503 });
    const abort = Object.assign(new Error('aborted'), { name: 'AbortError' });
    const aborting = createApiClient({
      baseUrl: '',
      fetch: async () => {
        throw abort;
      },
    });
    await expect(aborting.stats.site()).rejects.toBe(abort);
  });

  it('validates responses against the contract when asked', async () => {
    const { fetch } = mockFetch(() => json({ users: 'many' }));
    const strict = createApiClient({ baseUrl: '', fetch, validateWith: apiContracts });
    await expect(strict.stats.site()).rejects.toMatchObject({ code: 'INTERNAL' });
    const lax = createApiClient({ baseUrl: '', fetch });
    await expect(lax.stats.site()).resolves.toEqual({ users: 'many' });
  });

  it('builds URLs for EventSource and refuses to fetch streams', async () => {
    const api = createApiClient({ baseUrl: 'https://sotf-mods.com', fetch: mockFetch(() => ({ status: 200 })).fetch });
    expect(api.url(apiContracts.events.stream)).toBe('https://sotf-mods.com/api/v2/stream');
    expect(api.url(apiContracts.compat.patchRadar, { query: { build: 7 } })).toBe(
      'https://sotf-mods.com/api/v2/patch-radar?build=7',
    );
    await expect(api.request(apiContracts.events.stream)).rejects.toThrow(/EventSource/);
  });

  it('exposes one method per contract', () => {
    const api = createApiClient({ baseUrl: '', fetch: mockFetch(() => ({ status: 200 })).fetch });
    for (const [domain, group] of Object.entries(apiContracts)) {
      for (const name of Object.keys(group)) {
        expect(typeof (api as unknown as Record<string, Record<string, unknown>>)[domain]?.[name]).toBe('function');
      }
    }
  });
});
