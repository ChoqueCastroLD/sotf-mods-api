/**
 * Catalog load check (WP-33 acceptance "`pnpm load catalog`: p95 < 50 ms"): replays a realistic
 * mix of public catalog reads (Explore with facets and filters, detail, versions, dependents,
 * related, search, taxonomy, profiles, the Cmd+K index, site stats) with keep-alive connections
 * and reports latency percentiles measured at the client, i.e. origin latency without the edge.
 *
 * Library: `runCatalogLoad({ baseUrl })` (used by the integration test and by `tooling/load`).
 * CLI against a running API (e.g. `pnpm dev` on the development seed):
 *
 *   node apps/api/src/modules/catalog/load.ts --url http://127.0.0.1:3001 [--requests 3000] [--rate 100] [--concurrency 32]
 *
 * The default is an open model at 100 req/s (well above the expected origin traffic, since the
 * edge answers most public reads) with latency measured from each request's scheduled start;
 * `--rate 0` switches to a closed-loop saturation run.
 *
 * Exits 1 when p95 ≥ the budget or any request fails. Only ever point it at a local or staging
 * API: it only sends GETs, but production is served through the edge and is not a load target.
 */
import { pathToFileURL } from 'node:url';
import { isMainThread, parentPort, Worker, workerData } from 'node:worker_threads';

export const CATALOG_P95_BUDGET_MS = 50;

/** The request mix: weights roughly follow the expected traffic of the public pages. */
export const CATALOG_LOAD_MIX: ReadonlyArray<{ path: string; weight: number }> = [
  { path: '/api/v2/mods?facets=1', weight: 6 },
  { path: '/api/v2/mods?type=mod&sort=downloads&facets=1', weight: 4 },
  { path: '/api/v2/mods?type=build&sort=new', weight: 2 },
  { path: '/api/v2/mods?type=library', weight: 1 },
  { path: '/api/v2/mods?category=quality-of-life&sort=updated&page=2', weight: 3 },
  { path: '/api/v2/mods?excludeCategory=misc&compat=any&updatedWithin=1y', weight: 2 },
  { path: '/api/v2/mods?q=kelvin&sort=relevance', weight: 2 },
  { path: '/api/v2/mods/20', weight: 6 },
  { path: "/api/v2/mods/by-slug/imaxel/axel's-mod-menu", weight: 3 },
  { path: '/api/v2/mods/by-manifest/StackMod', weight: 2 },
  { path: '/api/v2/mods/74/versions', weight: 3 },
  { path: '/api/v2/mods/19/dependents', weight: 2 },
  { path: '/api/v2/mods/78/related', weight: 2 },
  { path: '/api/v2/mods/78/stats/public?range=30d', weight: 1 },
  { path: '/api/v2/search?q=stak%20mod', weight: 3 },
  { path: '/api/v2/search?q=kelvn', weight: 2 },
  { path: '/api/v2/search/index?locale=en', weight: 1 },
  { path: '/api/v2/categories', weight: 1 },
  { path: '/api/v2/tags', weight: 1 },
  { path: '/api/v2/creators', weight: 1 },
  { path: '/api/v2/users/imaxel', weight: 1 },
  { path: '/api/v2/users/imaxel/mods', weight: 1 },
  { path: '/api/v2/site/stats', weight: 1 },
];

export interface LoadOptions {
  baseUrl: string;
  /** Measured requests (after the warm-up). Default 3000. */
  requests?: number;
  /** Maximum requests in flight. Default 32. */
  concurrency?: number;
  /**
   * Arrival rate in requests per second (open model: requests start on schedule whether or not
   * earlier ones finished, up to `concurrency` in flight). Default 100. `0` = closed loop (each
   * connection sends its next request as soon as the previous one answers: a saturation test).
   */
  rate?: number;
  /** Warm-up requests per path (not measured). Default 2. */
  warmup?: number;
  mix?: ReadonlyArray<{ path: string; weight: number }>;
}

export interface LoadReport {
  requests: number;
  failures: Array<{ path: string; status: number }>;
  p50: number;
  p95: number;
  p99: number;
  max: number;
  rps: number;
  byPath: Record<string, { count: number; p95: number }>;
}

function percentile(sorted: readonly number[], p: number): number {
  if (sorted.length === 0) return 0;
  const index = Math.min(sorted.length - 1, Math.max(0, Math.ceil((p / 100) * sorted.length) - 1));
  return Math.round((sorted[index] ?? 0) * 100) / 100;
}

/** Deterministic weighted sequence of paths. */
function schedule(mix: ReadonlyArray<{ path: string; weight: number }>, n: number): string[] {
  const bag = mix.flatMap((m) => Array.from({ length: m.weight }, () => m.path));
  let seed = 0x2f6b_3c1d;
  const out: string[] = [];
  for (let i = 0; i < n; i++) {
    seed = (Math.imul(seed, 1_103_515_245) + 12_345) >>> 0;
    out.push(bag[seed % bag.length] as string);
  }
  return out;
}

async function hit(baseUrl: string, path: string): Promise<{ status: number; ms: number }> {
  const start = performance.now();
  const res = await fetch(new URL(path, baseUrl), { headers: { accept: 'application/json' } });
  await res.arrayBuffer();
  return { status: res.status, ms: performance.now() - start };
}

/** Runs the load and returns latency percentiles (ms). */
export async function runCatalogLoad(options: LoadOptions): Promise<LoadReport> {
  const mix = options.mix ?? CATALOG_LOAD_MIX;
  const total = options.requests ?? 3000;
  for (let i = 0; i < (options.warmup ?? 2); i++) {
    for (const { path } of mix) await hit(options.baseUrl, path);
  }
  const queue = schedule(mix, total);
  const concurrency = options.concurrency ?? 32;
  const rate = options.rate ?? 100;
  const latencies: number[] = [];
  const perPath = new Map<string, number[]>();
  const failures: LoadReport['failures'] = [];
  const record = (path: string, status: number, ms: number) => {
    if (status !== 200) failures.push({ path, status });
    latencies.push(ms);
    const list = perPath.get(path) ?? [];
    list.push(ms);
    perPath.set(path, list);
  };
  let next = 0;
  const started = performance.now();
  if (rate > 0) {
    // Open model: request i is due at i / rate seconds; latency is measured from its due time,
    // so time spent waiting for a free slot counts (no coordinated omission).
    const slots = Array.from({ length: concurrency }, async () => {
      for (;;) {
        const index = next++;
        if (index >= queue.length) return;
        const due = started + (index * 1000) / rate;
        const wait = due - performance.now();
        if (wait > 0) await new Promise((resolve) => setTimeout(resolve, wait));
        const path = queue[index] as string;
        const { status } = await hit(options.baseUrl, path);
        record(path, status, performance.now() - due);
      }
    });
    await Promise.all(slots);
  } else {
    await Promise.all(
      Array.from({ length: concurrency }, async () => {
        for (;;) {
          const index = next++;
          if (index >= queue.length) return;
          const path = queue[index] as string;
          const { status, ms } = await hit(options.baseUrl, path);
          record(path, status, ms);
        }
      }),
    );
  }
  const elapsed = (performance.now() - started) / 1000;
  const sorted = [...latencies].sort((a, b) => a - b);
  const byPath: LoadReport['byPath'] = {};
  for (const [path, list] of perPath) {
    byPath[path] = {
      count: list.length,
      p95: percentile(
        [...list].sort((a, b) => a - b),
        95,
      ),
    };
  }
  return {
    requests: latencies.length,
    failures,
    p50: percentile(sorted, 50),
    p95: percentile(sorted, 95),
    p99: percentile(sorted, 99),
    max: percentile(sorted, 100),
    rps: Math.round(latencies.length / elapsed),
    byPath,
  };
}

/**
 * Runs the load from a worker thread, so the client does not share the event loop of an API
 * running in the same process (integration tests).
 */
export function runCatalogLoadInWorker(options: LoadOptions): Promise<LoadReport> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL(import.meta.url), { workerData: { catalogLoad: options } });
    worker.once('message', (report: LoadReport) => resolve(report));
    worker.once('error', reject);
    worker.once('exit', (code) => {
      if (code !== 0) reject(new Error(`load worker exited with ${code}`));
    });
  });
}

if (!isMainThread && parentPort && (workerData as { catalogLoad?: LoadOptions } | null)?.catalogLoad) {
  const port = parentPort;
  runCatalogLoad((workerData as { catalogLoad: LoadOptions }).catalogLoad).then(
    (report) => port.postMessage(report),
    (error: unknown) => {
      throw error;
    },
  );
}

function argValue(args: readonly string[], name: string): string | undefined {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
}

async function main(args: readonly string[]): Promise<number> {
  const baseUrl = argValue(args, '--url');
  if (!baseUrl) {
    process.stderr.write(
      'usage: node apps/api/src/modules/catalog/load.ts --url <api base url> [--requests n] [--rate n] [--concurrency n]\n',
    );
    return 2;
  }
  const report = await runCatalogLoad({
    baseUrl,
    requests: Number(argValue(args, '--requests') ?? 3000),
    rate: Number(argValue(args, '--rate') ?? 100),
    concurrency: Number(argValue(args, '--concurrency') ?? 32),
  });
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  const ok = report.failures.length === 0 && report.p95 < CATALOG_P95_BUDGET_MS;
  process.stdout.write(
    ok ? `ok: p95 ${report.p95} ms < ${CATALOG_P95_BUDGET_MS} ms\n` : `FAIL: p95 ${report.p95} ms\n`,
  );
  return ok ? 0 : 1;
}

if (isMainThread && process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main(process.argv.slice(2)).then(
    (code) => process.exit(code),
    (error: unknown) => {
      process.stderr.write(`${error instanceof Error ? (error.stack ?? error.message) : String(error)}\n`);
      process.exit(1);
    },
  );
}
