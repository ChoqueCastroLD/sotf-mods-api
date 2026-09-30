/**
 * The web download route end to end over HTTP (stand-in for `pnpm e2e --grep @download` until the
 * Playwright project exists): the web proxy of `apps/web/.../download/_proxy.ts` with real `fetch`
 * against this API listening on a port, like `sotf-mods.com/mods/:u/:s/download/:v` →
 * `INTERNAL_API_URL/internal/downloads/resolve`. A client without User-Agent (RedManager, .NET)
 * follows the 302 and is counted (the proxy sends the empty UA over the wire, not fetch's own); HEAD and partial ranges are not; unknown versions are 404.
 */
import type { AddressInfo } from 'node:net';
import { createFactories } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
// The web app's route core (plain TypeScript, no Astro runtime needed).
import { proxyDownload } from '../../../../web/src/pages/mods/[user]/[slug]/download/_proxy.ts';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { downloadsRuntimeOf } from './runtime.ts';
import { waitUntilServing } from './test-helpers.ts';

const R2 = 'https://r2.sotf-mods.com';
let t: TestApp;
let apiUrl: string;

beforeAll(async () => {
  t = await buildTestApp({ env: { R2_PUBLIC_BASE_URL: R2 } });
  await t.app.listen({ port: 0, host: '127.0.0.1' });
  apiUrl = `http://127.0.0.1:${(t.app.server.address() as AddressInfo).port}`;
  await waitUntilServing(t.app);
});

afterAll(async () => {
  await t?.close();
});

function webRequest(path: string, init: RequestInit = {}) {
  return new Request(`https://sotf-mods.com${path}`, init);
}

describe('@download web route → internal resolve', () => {
  it('redirects, counts the UA-less client, ignores HEAD and partial ranges, 404s unknown versions', async () => {
    const f = createFactories(t.db.db);
    const owner = await f.user({ slug: 'regitoxic' });
    const { mod, version } = await f.modWithVersion(
      { userId: owner.id, slug: 'virginia-wardrobe-18+' },
      { version: '0.0.4', storageKey: '1765726049138_virginia-wardrobe-18+_0.0.4.zip' },
    );
    const env = { internalApiUrl: apiUrl, internalSecret: t.env.INTERNAL_SECRET };
    const params = { user: 'regitoxic', slug: 'virginia-wardrobe-18+', version: 'latest' };

    const get = await proxyDownload({
      request: webRequest('/mods/regitoxic/virginia-wardrobe-18%2B/download/latest'),
      params,
      clientAddress: '198.51.100.20',
      env,
    });
    expect(get.status).toBe(302);
    expect(get.headers.get('location')).toBe(`${R2}/1765726049138_virginia-wardrobe-18%2B_0.0.4.zip`);
    expect(get.headers.get('cache-control')).toBe('no-store, private');

    const head = await proxyDownload({
      request: webRequest('/x', { method: 'HEAD' }),
      params,
      clientAddress: '198.51.100.20',
      env,
    });
    expect(head.status).toBe(302);
    const partial = await proxyDownload({
      request: webRequest('/x', { headers: { range: 'bytes=100-' } }),
      params,
      clientAddress: '198.51.100.20',
      env,
    });
    expect(partial.status).toBe(302);
    const wrongUser = await proxyDownload({
      request: webRequest('/x', { headers: { 'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) Firefox/131.0' } }),
      params: { ...params, user: 'undefined', version: '0.0.4' },
      clientAddress: '198.51.100.21',
      env,
    });
    expect(wrongUser.status).toBe(302);

    const missing = await proxyDownload({ request: webRequest('/x'), params: { ...params, version: '9.9.9' }, env });
    expect(missing.status).toBe(404);
    expect(await missing.json()).toMatchObject({ status: false, error: 'NOT_FOUND' });

    const badSecret = await proxyDownload({
      request: webRequest('/x'),
      params,
      env: { ...env, internalSecret: 'wrong-secret-wrong-secret-wrong-secret' },
    });
    expect(badSecret.status).toBe(503);

    await downloadsRuntimeOf(t.app.platform)?.counter.flush();
    const rows = await t.db.db.execute(sql`
      SELECT "source", "userAgent" FROM "ModDownload" WHERE "modVersionId" = ${version.id} ORDER BY "id"`);
    expect(rows.rows).toEqual([
      { source: 'client', userAgent: '' },
      { source: 'web', userAgent: 'Mozilla/5.0 (X11; Linux x86_64) Firefox/131.0' },
    ]);
    const [counters] = (await t.db.db.execute(sql`SELECT "downloads" FROM "Mod" WHERE "id" = ${mod.id}`)).rows;
    expect(counters).toEqual({ downloads: 2 });
  });
});
