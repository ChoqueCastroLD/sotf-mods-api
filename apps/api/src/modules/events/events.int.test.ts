/**
 * WP-52 acceptance of the beacons (`POST /api/v2/e`, `POST /api/v2/e/vitals`) against PostgreSQL:
 * stored rows carry only the daily visitor hash, the referrer domain and the bare path; GPC, DNT,
 * declared bots, User-Agent-less clients and the traffic over the soft `beacon` bucket are dropped
 * with the same 204; server-only kinds and malformed batches are refused.
 */
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';

let t: TestApp;
let ipCounter = 0;
const CHROME =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36';

function beacon(url: string, body: unknown, headers: Record<string, string> = {}) {
  ipCounter += 1;
  return t.app.inject({
    method: 'POST',
    url,
    headers: {
      'content-type': 'text/plain;charset=UTF-8',
      'sec-fetch-site': 'same-origin',
      origin: 'https://sotf-mods.test',
      'cf-connecting-ip': `203.0.113.${ipCounter}`,
      'user-agent': CHROME,
      ...headers,
    },
    payload: JSON.stringify(body),
  });
}

async function rows(kind?: string) {
  const res = await t.db.pool.query(
    `SELECT "kind", "path", "entityType", "entityId", "locale", "referrerDomain", "country", "device",
            "visitorHash", "props" FROM "AnalyticsEvent" ${kind ? `WHERE "kind" = $1` : `WHERE "kind" <> 'http_status'`}
      ORDER BY "id"`,
    kind ? [kind] : [],
  );
  return res.rows;
}

beforeAll(async () => {
  t = await buildTestApp({
    env: { PUBLIC_SITE_URL: 'https://sotf-mods.test' },
    rateLimits: { beacon: { max: 3, window: '1 minute' } },
  });
}, 240_000);

afterAll(async () => {
  await t?.close();
});

beforeEach(async () => {
  await t.db.pool.query(`DELETE FROM "AnalyticsEvent"`);
});

const pageView = {
  kind: 'page_view',
  path: "/mods/imaxel/axel's-mod-menu?utm_source=discord#install",
  entityType: 'mod',
  entityId: 20,
  locale: 'es',
  referrer: 'https://www.google.com/search?q=sotf+mods',
};

describe('product beacon', () => {
  it('stores the batch with the bare path, the referrer domain and a daily visitor hash', async () => {
    const res = await beacon(
      '/api/v2/e',
      { events: [pageView, { kind: 'download_click', path: '/mods/imaxel/x', props: { version: '1.3.8' } }] },
      { 'cf-ipcountry': 'ES' },
    );
    expect(res.statusCode).toBe(204);
    const stored = await rows();
    expect(stored).toHaveLength(2);
    expect(stored[0]).toMatchObject({
      kind: 'page_view',
      path: "/mods/imaxel/axel's-mod-menu",
      entityType: 'mod',
      entityId: 20,
      locale: 'es',
      referrerDomain: 'google.com',
      country: 'ES',
    });
    expect(stored[0].visitorHash).toMatch(/^[0-9a-f]{32}$/);
    expect(stored[1]).toMatchObject({ kind: 'download_click', referrerDomain: null, props: { version: '1.3.8' } });
    // Nothing identifying: no IP and no User-Agent anywhere in the rows.
    expect(JSON.stringify(stored)).not.toMatch(/203\.0\.113|Chrome/);
  });

  it('drops GPC, DNT, bots and clients without a User-Agent with the same 204', async () => {
    for (const headers of [
      { 'sec-gpc': '1' },
      { dnt: '1' },
      { 'user-agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)' },
      { 'user-agent': '' },
    ]) {
      const res = await beacon('/api/v2/e', { events: [pageView] }, headers);
      expect(res.statusCode).toBe(204);
    }
    expect(await rows()).toEqual([]);
  });

  it('serves the traffic over the soft beacon bucket without storing it', async () => {
    const headers = { 'cf-connecting-ip': '198.51.100.77' };
    const statuses: number[] = [];
    for (let i = 0; i < 5; i += 1)
      statuses.push((await beacon('/api/v2/e', { events: [pageView] }, headers)).statusCode);
    expect(statuses).toEqual([204, 204, 204, 204, 204]);
    expect(await rows()).toHaveLength(3);
  });

  it('refuses server-only kinds, empty and oversized batches', async () => {
    expect((await beacon('/api/v2/e', { events: [{ kind: 'signup', path: '/' }] })).statusCode).toBe(422);
    expect((await beacon('/api/v2/e', { events: [] })).statusCode).toBe(422);
    const many = Array.from({ length: 21 }, () => ({ kind: 'page_view', path: '/' }));
    expect((await beacon('/api/v2/e', { events: many })).statusCode).toBe(422);
    expect(await rows()).toEqual([]);
  });
});

describe('RUM beacon', () => {
  it('stores one web_vital row per metric (first of each name), rounded, with the template', async () => {
    const res = await beacon('/api/v2/e/vitals', {
      template: 'Mod',
      path: '/mods/imaxel/x?ref=1',
      metrics: [
        { name: 'LCP', value: 1180.6, rating: 'good', id: 'v4-1', attribution: { element: 'img.hero' } },
        { name: 'CLS', value: 0.123456, rating: 'needs-improvement', id: 'v4-2' },
        { name: 'LCP', value: 9999, rating: 'poor', id: 'v4-3' },
      ],
    });
    expect(res.statusCode).toBe(204);
    const stored = await rows('web_vital');
    expect(stored.map((r) => r.props)).toEqual([
      { metric: 'LCP', value: 1181, rating: 'good', template: 'mod', attribution: { element: 'img.hero' } },
      { metric: 'CLS', value: 0.1235, rating: 'needs-improvement', template: 'mod' },
    ]);
    expect(stored[0].path).toBe('/mods/imaxel/x');
  });

  it('honours DNT like the product beacon', async () => {
    const res = await beacon(
      '/api/v2/e/vitals',
      { template: 'home', path: '/', metrics: [{ name: 'TTFB', value: 80, rating: 'good', id: 'v4-9' }] },
      { dnt: '1' },
    );
    expect(res.statusCode).toBe(204);
    expect(await rows('web_vital')).toEqual([]);
  });
});
