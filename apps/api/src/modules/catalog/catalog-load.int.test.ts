/**
 * WP-33 acceptance "catalog load: p95 < 50 ms" in origin: the real API listening on a local port
 * (keep-alive HTTP, production pipeline: CORS, rate limiting, Zod serialisation, ETag, LRU) over the
 * small development seed, with the weighted request mix of `load.ts` sent from a worker thread at
 * 100 req/s (open model, latency from the scheduled start); a closed-loop run reports throughput. The anonymous read limit is
 * raised because every request comes from one IP.
 */
import type { AddressInfo } from 'node:net';
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { startSeededDb, waitUntilCalm } from './__tests__/seeded.ts';
import { CATALOG_P95_BUDGET_MS, runCatalogLoadInWorker } from './load.ts';

let db: TestDb;
let t: TestApp;
let baseUrl: string;

beforeAll(async () => {
  db = await startSeededDb();
  t = await buildTestApp({ db, rateLimits: { anonymousRead: { max: 1_000_000, window: '1 minute' } } });
  await waitUntilCalm(t.app);
  await t.app.listen({ host: '127.0.0.1', port: 0 });
  baseUrl = `http://127.0.0.1:${(t.app.server.address() as AddressInfo).port}`;
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

it(`serves the catalog mix with p95 < ${CATALOG_P95_BUDGET_MS} ms`, async () => {
  const report = await runCatalogLoadInWorker({ baseUrl, requests: 3000, rate: 100, concurrency: 32 });
  process.stdout.write(`catalog load ${JSON.stringify(report)}\n`);
  const saturation = await runCatalogLoadInWorker({ baseUrl, requests: 2000, rate: 0, concurrency: 8, warmup: 0 });
  process.stdout.write(
    `catalog saturation (closed loop, 8 connections) ${JSON.stringify({ ...saturation, byPath: undefined })}\n`,
  );
  expect(saturation.failures).toEqual([]);
  expect(report.failures).toEqual([]);
  expect(report.requests).toBe(3000);
  expect(report.p95).toBeLessThan(CATALOG_P95_BUDGET_MS);
}, 120_000);
