import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { describe, expect, it, vi } from 'vitest';

/** Runs `public/sw.js` against a tiny fake of the service worker globals. */
const SOURCE = readFileSync(new URL('../../../public/sw.js', import.meta.url), 'utf8');

type Listener = (event: Record<string, unknown>) => void;

function makeWorker(networkFetch: (request: Request) => Promise<Response>) {
  const listeners = new Map<string, Listener>();
  const stores = new Map<string, Map<string, Response>>();
  const cache = (name: string) => {
    if (!stores.has(name)) stores.set(name, new Map());
    const store = stores.get(name) as Map<string, Response>;
    return {
      match: async (key: string | Request) => store.get(typeof key === 'string' ? key : new URL(key.url).pathname),
      put: async (key: string | Request, response: Response) => {
        // Like the real Cache API: a body that was already read cannot be stored.
        if (response.bodyUsed) throw new TypeError('Response body is already used');
        store.set(typeof key === 'string' ? key : new URL(key.url).pathname, response);
      },
      keys: async () => [...store.keys()].map((path) => new Request(`https://sotf-mods.com${path}`)),
      delete: async (key: string | Request) => store.delete(typeof key === 'string' ? key : new URL(key.url).pathname),
    };
  };
  const self = {
    location: new URL('https://sotf-mods.com/sw.js'),
    addEventListener: (type: string, listener: Listener) => listeners.set(type, listener),
    skipWaiting: vi.fn(),
    clients: { claim: vi.fn() },
    registration: { navigationPreload: { enable: vi.fn(async () => {}) } },
  };
  const context = vm.createContext({
    self,
    caches: {
      open: async (name: string) => cache(name),
      keys: async () => [...stores.keys()],
      delete: async (name: string) => stores.delete(name),
    },
    fetch: (input: string | Request) =>
      networkFetch(typeof input === 'string' ? new Request(`https://sotf-mods.com${input}`) : input),
    Response,
    Request,
    URL,
    Date,
    Set,
    Promise,
  });
  vm.runInContext(SOURCE, context);

  const dispatch = async (init: { request: Request; preload?: Promise<Response | undefined> }) => {
    const waits: Promise<unknown>[] = [];
    let answer: Promise<Response> | undefined;
    const event = {
      request: init.request,
      preloadResponse: init.preload,
      respondWith: (value: Promise<Response>) => {
        answer = value;
      },
      waitUntil: (value: Promise<unknown>) => {
        waits.push(value);
      },
    };
    (listeners.get('fetch') as Listener)(event);
    const response = answer ? await answer : undefined;
    return { response, settled: Promise.all(waits), answered: Boolean(answer) };
  };
  return { stores, dispatch };
}

const navigation = (path: string) =>
  Object.defineProperty(new Request(`https://sotf-mods.com${path}`, { headers: { accept: 'text/html' } }), 'mode', {
    value: 'navigate',
  });

describe('service worker', () => {
  it('stores the install guide from a clone made before the page reads the body', async () => {
    const worker = makeWorker(async () => new Response('<html>guide</html>', { status: 200 }));
    const { response, settled } = await worker.dispatch({ request: navigation('/install') });
    // The page consumes the body first (as the browser does), then the cache write runs.
    expect(await response?.text()).toBe('<html>guide</html>');
    await expect(settled).resolves.toBeDefined();
    const stored = worker.stores.get('sotf-pages-v3')?.get('/install');
    expect(await stored?.text()).toBe('<html>guide</html>');
  });

  it('settles navigation preload even for navigations it does not answer', async () => {
    const worker = makeWorker(async () => new Response('x'));
    const request = Object.defineProperty(
      new Request('https://sotf-mods.com/file.pdf', { headers: { accept: '*/*' } }),
      'mode',
      {
        value: 'navigate',
      },
    );
    const preload = Promise.reject(new Error('cancelled'));
    const { answered, settled } = await worker.dispatch({ request, preload });
    expect(answered).toBe(false);
    await expect(settled).resolves.toBeDefined();
  });

  it('serves the offline page when the network is down', async () => {
    const worker = makeWorker(async () => {
      throw new TypeError('offline');
    });
    worker.stores.set('sotf-pages-v3', new Map([['/es/offline', new Response('sin conexion')]]));
    const { response } = await worker.dispatch({ request: navigation('/es/mods') });
    expect(await response?.text()).toBe('sin conexion');
  });

  it('never stores private or partial responses', async () => {
    const worker = makeWorker(async (request) =>
      request.url.endsWith('.css')
        ? new Response('a', { status: 206 })
        : new Response('b', { status: 200, headers: { 'cache-control': 'private' } }),
    );
    const css = await worker.dispatch({ request: new Request('https://sotf-mods.com/_astro/a.css') });
    await css.settled;
    const art = await worker.dispatch({ request: new Request('https://sotf-mods.com/art/a.png') });
    await art.settled;
    expect(worker.stores.get('sotf-assets-v3')?.size ?? 0).toBe(0);
  });

  it('caches fingerprinted assets and answers them from the cache', async () => {
    const network = vi.fn(async () => new Response('body{}', { status: 200 }));
    const worker = makeWorker(network);
    const first = await worker.dispatch({ request: new Request('https://sotf-mods.com/_astro/a.css') });
    expect(await first.response?.text()).toBe('body{}');
    await first.settled;
    const second = await worker.dispatch({ request: new Request('https://sotf-mods.com/_astro/a.css') });
    expect(await second.response?.text()).toBe('body{}');
    expect(network).toHaveBeenCalledTimes(1);
  });

  it('refreshes assets with a stable name in the background, never fingerprinted ones', async () => {
    let version = 1;
    const network = vi.fn(async () => new Response(`logo v${version}`, { status: 200 }));
    const worker = makeWorker(network);
    const logo = 'https://sotf-mods.com/brand/logo-320.png';
    const hashed = 'https://sotf-mods.com/_astro/a.css';
    await (await worker.dispatch({ request: new Request(logo) })).settled;
    await (await worker.dispatch({ request: new Request(hashed) })).settled;
    expect(network).toHaveBeenCalledTimes(2);

    version = 2;
    const second = await worker.dispatch({ request: new Request(logo) });
    // The page gets the cached copy at once...
    expect(await second.response?.text()).toBe('logo v1');
    await second.settled;
    // ...and the next view the refreshed one.
    const third = await worker.dispatch({ request: new Request(logo) });
    expect(await third.response?.text()).toBe('logo v2');
    await third.settled;

    const callsBefore = network.mock.calls.length;
    await (await worker.dispatch({ request: new Request(hashed) })).settled;
    expect(network).toHaveBeenCalledTimes(callsBefore);
  });
});
