import { LegacyModDetail, LegacyModListResponse, validateLegacy } from '@sotf/contracts/legacy';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { loadFixtures } from '../src/fixtures.ts';
import { buildDataset, DATASET_TOTALS, detailOf } from '../src/mock/dataset.ts';
import { canonicalRoute, type MockServer, startMockServer } from '../src/mock/server.ts';

let mock: MockServer;
beforeAll(async () => {
  mock = await startMockServer();
});
afterAll(async () => {
  await mock.close();
});

const get = (path: string, init?: RequestInit) => fetch(`${mock.url}${path}`, { redirect: 'manual', ...init });

describe('simulated legacy server', () => {
  it('replays every fixture byte for byte', async () => {
    for (const fixture of loadFixtures()) {
      const res = await get(fixture.route);
      expect(res.status, fixture.name).toBe(fixture.status);
      expect(res.headers.get('content-type'), fixture.name).toBe(fixture.contentType);
      expect(Buffer.from(await res.arrayBuffer()).equals(fixture.raw), fixture.name).toBe(true);
    }
  });

  it('matches fixture routes after URL encoding', () => {
    expect(canonicalRoute('/api/mods/find?userSlug=imaxel&mod_slug=axel%27s-mod-menu')).toBe(
      canonicalRoute("/api/mods/find?userSlug=imaxel&mod_slug=axel's-mod-menu"),
    );
    expect(canonicalRoute('/api/mods?&page=2')).not.toBe(canonicalRoute('/api/mods?page=2'));
  });

  it('computes the same list as every list fixture (consistent dataset)', async () => {
    for (const fixture of loadFixtures()) {
      if (!fixture.route.startsWith('/api/mods?') || fixture.status !== 200) continue;
      // `modIds` without `type` follows v2 (no default type filter) and `limit=0` is a 422 in v2.
      if (fixture.name === 'mods-updateschecker-modids' || fixture.name === 'mods-limit0') continue;
      const res = await get(`${fixture.route}&_t=1`);
      const body = (await res.json()) as { data: Array<{ id: number }>; meta: unknown };
      const expected = fixture.body as typeof body;
      expect(body.meta, fixture.name).toEqual(expected.meta);
      expect(
        body.data.map((m) => m.id),
        fixture.name,
      ).toEqual(expected.data.map((m) => m.id));
      expect(validateLegacy(LegacyModListResponse, body).success, fixture.name).toBe(true);
    }
  });

  it('holds the fixture totals and valid details for every row', () => {
    const rows = buildDataset();
    const count = (pred: (m: (typeof rows)[number]['item']) => boolean) =>
      rows.filter((r) => !r.item.isNSFW && pred(r.item)).length;
    expect(count((m) => m.type === 'Mod' && m.isApproved)).toBe(DATASET_TOTALS.approvedMods);
    expect(count((m) => m.type === 'Mod' && !m.isApproved)).toBe(DATASET_TOTALS.unapprovedMods);
    expect(count((m) => m.type === 'Build' && m.isApproved)).toBe(DATASET_TOTALS.approvedBuilds);
    for (const record of rows) {
      const result = validateLegacy(
        LegacyModDetail,
        detailOf(record, () => 0),
      );
      expect(result.success, record.item.mod_id).toBe(true);
    }
  });

  it('serves the detail fixtures with live counters', async () => {
    type Detail = { data: { versions: Array<{ id: number; _count: { downloads: number } }> } };
    const before = ((await (await get('/api/mods/AxelModMenu?_t=1')).json()) as Detail).data;
    const res = await get("/mods/imaxel/axel's-mod-menu/download/1.3.8");
    expect(res.status).toBe(302);
    expect(res.headers.get('location')).toBe(`${mock.r2Base}/1775413983720_axel's-mod-menu_1.3.8.zip`);
    const after = ((await (await get('/api/mods/AxelModMenu?_t=2')).json()) as Detail).data;
    expect(after.versions[0]?._count.downloads).toBe((before.versions[0]?._count.downloads ?? 0) + 1);
  });

  it('treats + in storage paths literally, like R2', async () => {
    expect((await get('/r2/1765726049138_virginia-wardrobe-18%2B_0.0.4.zip')).status).toBe(200);
    expect((await get('/r2/1790458408372_arctic%20fox%20savage_1.0.0.zip')).status).toBe(200);
    expect((await get('/r2/1790458408372_arctic+fox+savage_1.0.0.zip')).status).toBe(404);
  });

  it('answers retired routes with 410 and preflights with CORS', async () => {
    const gone = await get('/api/mods/publish', { method: 'POST' });
    expect(gone.status).toBe(410);
    expect(await gone.json()).toEqual({
      status: false,
      error: 'GONE',
      message: 'This endpoint was retired in sotf-mods v2. See https://sotf-mods.com/developers',
    });
    const pre = await get('/api/mods', { method: 'OPTIONS', headers: { origin: 'https://tauri.localhost' } });
    expect(pre.status).toBe(204);
    expect(pre.headers.get('access-control-allow-origin')).toBe('*');
  });
});
