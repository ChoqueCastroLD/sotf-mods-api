import { afterEach, describe, expect, it, vi } from 'vitest';
import { SHELL_ENDPOINTS, shellApi } from './http.ts';

function stubFetch(response: Response | Error) {
  const fetchMock = vi.fn(async () => {
    if (response instanceof Error) throw response;
    return response;
  });
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

afterEach(() => vi.unstubAllGlobals());

describe('shellApi.logout', () => {
  it('posts JSON to the contract path with the session cookie', async () => {
    const fetchMock = stubFetch(new Response(null, { status: 204 }));
    await expect(shellApi.logout()).resolves.toBe('signed-out');
    const [path, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(path).toBe(SHELL_ENDPOINTS.logout.path);
    expect(init.method).toBe('POST');
    expect(init.credentials).toBe('same-origin');
    expect((init.headers as Record<string, string>)['content-type']).toBe('application/json');
  });

  it('treats 401 (session already gone) as signed out so the menu never gets stuck', async () => {
    stubFetch(Response.json({ code: 'UNAUTHENTICATED', status: 401, title: 'Sign in' }, { status: 401 }));
    await expect(shellApi.logout()).resolves.toBe('already-signed-out');
  });

  it('still fails on server errors and network errors', async () => {
    stubFetch(new Response('boom', { status: 502 }));
    await expect(shellApi.logout()).rejects.toMatchObject({ status: 502 });
    stubFetch(new TypeError('fetch failed'));
    await expect(shellApi.logout()).rejects.toMatchObject({ status: 503 });
  });
});
