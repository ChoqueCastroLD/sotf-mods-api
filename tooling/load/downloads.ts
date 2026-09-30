/**
 * `pnpm load downloads` (WP-31 acceptance, PLAN §8, T0-02): download resolution latency at the
 * origin must stay at **p95 < 60 ms**.
 *
 * Self-contained by default: a throwaway PostgreSQL 16 (Testcontainers) with the development seed
 * (`db:seed:dev --small`: 257 real mods and their legacy keys), the real API started as a separate
 * process (`apps/api/src/server.ts`, so the load generator never shares its event loop), then
 * `--duration` seconds of keep-alive traffic at `--rate` requests/s in an open loop (default 50/s:
 * the seed's history averages ~1 800 downloads a day, so this is hundreds of times the real peak;
 * `--rate 0 --connections N` switches to a closed loop to find the capacity) over the three
 * download surfaces: the web route's internal resolve (70 %, what `sotf-mods.com/mods/:u/:s/download/:v`
 * costs), the legacy slug alias (20 %) and the v2 version alias (10 %); latest/undefined and exact
 * versions, odd legacy slugs, empty and browser User-Agents, thousands of client IPs. The API is
 * stopped with SIGTERM and the flushed `ModDownload` rows must match the counted requests.
 *
 *   pnpm load downloads [--duration 20] [--rate 50] [--connections 64] [--budget-p95 60] [--json]
 *   pnpm load downloads --base-url http://127.0.0.1:47301 --internal-secret … (existing API + seed)
 */
import { type ChildProcess, spawn } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { mkdtempSync } from 'node:fs';
import { Agent, request } from 'node:http';
import { createServer } from 'node:net';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const API_DIR = fileURLToPath(new URL('../../apps/api/', import.meta.url));

type Surface = 'web' | 'legacy' | 'v2';

interface Target {
  surface: Surface;
  method: 'GET' | 'HEAD';
  path: string;
  headers: Record<string, string>;
  /** The API should count this request (decided by the load generator's own mix). */
  countable: boolean;
}

interface Sample {
  surface: Surface;
  ms: number;
  status: number;
  /** `status` of the internal resolve's JSON body. */
  resolved?: number;
}

const BROWSER =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36';

function percentile(sorted: readonly number[], p: number): number {
  if (sorted.length === 0) return Number.NaN;
  const index = Math.min(sorted.length - 1, Math.max(0, Math.ceil((p / 100) * sorted.length) - 1));
  return sorted[index] as number;
}

async function freePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      server.close(() => resolve(typeof address === 'object' && address ? address.port : 0));
    });
  });
}

async function waitForHealthy(base: string, timeoutMs = 90_000): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    try {
      if ((await fetch(`${base}/healthz`)).ok) return;
    } catch {
      // not listening yet
    }
    if (Date.now() > deadline) throw new Error(`the API at ${base} did not become healthy`);
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
}

/** Waits until routed requests stop answering 503 (`@fastify/under-pressure` right after start-up). */
async function waitUntilServing(base: string, timeoutMs = 60_000): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  let streak = 0;
  while (streak < 5) {
    const res = await fetch(`${base}/api/v2/resolve?path=%2F__warmup__`).catch(() => null);
    streak = !res || res.status === 503 ? 0 : streak + 1;
    if (Date.now() > deadline) throw new Error(`the API at ${base} stayed under pressure`);
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
}

interface Catalog {
  mods: Array<{ userSlug: string; slug: string; version: string; versionId: number; manifestId: string }>;
}

/** Download targets from the database (visible mods with an active version and an R2 key). */
async function loadCatalog(databaseUrl: string): Promise<Catalog> {
  const pg = await import('pg');
  const client = new pg.default.Client({ connectionString: databaseUrl });
  await client.connect();
  try {
    const { rows } = await client.query<{
      userSlug: string;
      slug: string;
      version: string;
      versionId: number;
      manifestId: string;
    }>(`
      SELECT u."slug" AS "userSlug", m."slug", v."version", v."id" AS "versionId", m."mod_id" AS "manifestId"
        FROM "Mod" m JOIN "User" u ON u."id" = m."userId"
        JOIN "ModVersion" v ON v."modId" = m."id" AND v."status" = 'active' AND v."storageKey" IS NOT NULL
       WHERE m."status" NOT IN ('removed', 'rejected')
       ORDER BY m."id", v."id"`);
    return { mods: rows };
  } finally {
    await client.end();
  }
}

function buildTargets(catalog: Catalog, secret: string, count: number): Target[] {
  if (catalog.mods.length === 0) throw new Error('no downloadable versions in the database');
  const targets: Target[] = [];
  const enc = encodeURIComponent;
  for (let i = 0; i < count; i += 1) {
    const mod = catalog.mods[(i * 7919) % catalog.mods.length] as Catalog['mods'][number];
    const ip = `10.${(i >> 16) & 255}.${(i >> 8) & 255}.${i & 255}`;
    const ua = i % 3 === 0 ? '' : BROWSER;
    const version = i % 4 === 0 ? 'latest' : i % 4 === 1 ? 'undefined' : mod.version;
    const head = i % 25 === 0;
    const range = i % 40 === 1 ? 'bytes=100-' : null;
    const headers: Record<string, string> = { 'cf-connecting-ip': ip, 'user-agent': ua };
    if (range) headers.range = range;
    const roll = i % 10;
    if (roll < 7) {
      const query = `user=${enc(i % 9 === 0 ? 'undefined' : mod.userSlug)}&slug=${enc(mod.slug)}&version=${enc(version)}&method=${head ? 'HEAD' : 'GET'}`;
      targets.push({
        surface: 'web',
        method: 'GET',
        path: `/internal/downloads/resolve?${query}`,
        headers: { ...headers, 'x-internal-auth': secret },
        countable: !head && !range,
      });
    } else if (roll < 9) {
      targets.push({
        surface: 'legacy',
        method: head ? 'HEAD' : 'GET',
        path: `/api/mods/slug/${enc(mod.userSlug)}/${enc(mod.slug)}/download/${enc(version)}`,
        headers,
        countable: !head && !range,
      });
    } else {
      targets.push({
        surface: 'v2',
        method: head ? 'HEAD' : 'GET',
        path: `/api/v2/versions/${mod.versionId}/download`,
        headers,
        countable: !head && !range,
      });
    }
  }
  return targets;
}

/**
 * Runs the load. `rate > 0`: open loop, one request every `1000 / rate` ms whatever the answers
 * (latency is measured from the scheduled send time, so a slow server cannot hide queueing —
 * no coordinated omission), at most `connections` sockets. `rate = 0`: closed loop, `connections`
 * clients sending back to back (saturation / capacity).
 */
async function run(base: string, targets: readonly Target[], connections: number, durationMs: number, rate: number) {
  const url = new URL(base);
  const agent = new Agent({ keepAlive: true, maxSockets: connections });
  const samples: Sample[] = [];
  let next = 0;
  let countedSent = 0;
  let deadline = Number.POSITIVE_INFINITY;
  const once = (target: Target, scheduledAt?: number) =>
    new Promise<Sample>((resolve) => {
      const started = scheduledAt ?? performance.now();
      const req = request(
        {
          host: url.hostname,
          port: url.port,
          method: target.method,
          path: target.path,
          headers: target.headers,
          agent,
        },
        (res) => {
          const chunks: Buffer[] = [];
          res.on('data', (chunk: Buffer) => {
            if (target.surface === 'web') chunks.push(chunk);
          });
          res.on('end', () => {
            const ms = performance.now() - started;
            let resolved: number | undefined;
            if (target.surface === 'web' && res.statusCode === 200) {
              resolved = (JSON.parse(Buffer.concat(chunks).toString('utf8')) as { status: number }).status;
            }
            resolve({ surface: target.surface, ms, status: res.statusCode ?? 0, ...(resolved ? { resolved } : {}) });
          });
        },
      );
      req.on('error', () => resolve({ surface: target.surface, ms: performance.now() - started, status: 0 }));
      req.end();
    });
  const worker = async () => {
    while (performance.now() < deadline) {
      const target = targets[next % targets.length] as Target;
      next += 1;
      const sample = await once(target);
      samples.push(sample);
      const redirected = sample.status === 302 || sample.resolved === 302;
      if (target.countable && redirected) countedSent += 1;
    }
  };
  // Warm-up (connections, JIT, caches) is not measured.
  const warmup = Math.min(200, targets.length);
  let warmupCounted = 0;
  for (let i = 0; i < warmup; i += 1) {
    const target = targets[i] as Target;
    const sample = await once(target);
    if (target.countable && (sample.status === 302 || sample.resolved === 302)) warmupCounted += 1;
  }
  const started = performance.now();
  deadline = started + durationMs;
  if (rate > 0) {
    const interval = 1000 / rate;
    const pending: Array<Promise<void>> = [];
    for (let i = 0; ; i += 1) {
      const scheduledAt = started + i * interval;
      if (scheduledAt >= deadline) break;
      const wait = scheduledAt - performance.now();
      if (wait > 0) await new Promise((resolve) => setTimeout(resolve, wait));
      const target = targets[next % targets.length] as Target;
      next += 1;
      pending.push(
        once(target, scheduledAt).then((sample) => {
          samples.push(sample);
          if (target.countable && (sample.status === 302 || sample.resolved === 302)) countedSent += 1;
        }),
      );
    }
    await Promise.all(pending);
  } else {
    await Promise.all(Array.from({ length: connections }, worker));
  }
  const elapsed = performance.now() - started;
  agent.destroy();
  return { samples, elapsed, countedSent: countedSent + warmupCounted };
}

async function main(): Promise<void> {
  const { values } = parseArgs({
    options: {
      duration: { type: 'string', default: '20' },
      rate: { type: 'string', default: '50' },
      connections: { type: 'string', default: '64' },
      'budget-p95': { type: 'string', default: '60' },
      'base-url': { type: 'string' },
      'internal-secret': { type: 'string' },
      'database-url': { type: 'string' },
      json: { type: 'boolean', default: false },
    },
    allowPositionals: true,
  });
  const durationMs = Number(values.duration) * 1000;
  const connections = Number(values.connections);
  const rate = Number(values.rate);
  const budget = Number(values['budget-p95']);

  let base = values['base-url'];
  let secret = values['internal-secret'] ?? process.env.INTERNAL_SECRET ?? '';
  let databaseUrl = values['database-url'] ?? process.env.DATABASE_URL ?? '';
  let child: ChildProcess | null = null;
  let stopDb: (() => Promise<void>) | null = null;

  try {
    if (!base) {
      process.stdout.write('starting PostgreSQL 16 and seeding (db:seed:dev --small)…\n');
      const { startTestDb, stopTestServer } = await import('@sotf/db/testing');
      const { seedDev } = await import('@sotf/migration-tools');
      const db = await startTestDb({ migrate: false });
      stopDb = async () => {
        await db.stop();
        await stopTestServer();
      };
      const quiet = { info: () => {}, warn: () => {}, error: () => {} };
      await seedDev({ url: db.url, small: true, outDir: mkdtempSync(join(tmpdir(), 'sotf-load-')), log: quiet });
      databaseUrl = db.url;
      secret = randomBytes(32).toString('base64url');
      const port = await freePort();
      base = `http://127.0.0.1:${port}`;
      child = spawn(process.execPath, ['src/server.ts'], {
        cwd: API_DIR,
        stdio: ['ignore', 'ignore', 'inherit'],
        env: {
          PATH: process.env.PATH ?? '',
          NODE_ENV: 'production',
          SOTF_NO_DOTENV: '1',
          TZ: 'UTC',
          LOG_LEVEL: 'warn',
          SITE_ENV: 'development',
          PUBLIC_SITE_URL: 'https://sotf-mods.test',
          INTERNAL_SECRET: secret,
          APP_SECRET: randomBytes(32).toString('base64url'),
          DATABASE_URL: db.url,
          GIT_SHA: 'load',
          HOST: '127.0.0.1',
          PORT: String(port),
        },
      });
      await waitForHealthy(base);
    } else if (!secret || !databaseUrl) {
      throw new Error('--base-url needs --internal-secret (or INTERNAL_SECRET) and --database-url (or DATABASE_URL)');
    }

    await waitUntilServing(base);
    const catalog = await loadCatalog(databaseUrl);
    const targets = buildTargets(catalog, secret, 20_000);
    const before = await countDownloads(databaseUrl);
    process.stdout.write(
      `load: ${rate > 0 ? `${rate} req/s (open loop, ≤ ${connections} sockets)` : `${connections} connections (closed loop)`} × ${values.duration}s against ${base} (${catalog.mods.length} versions)\n`,
    );
    // Floor of this host at the same rate: `/healthz` does no I/O, so any latency above it is the
    // download path's own cost (shared CI hosts can be far slower than production).
    const baselineRun = await run(
      base,
      [{ surface: 'v2', method: 'GET', path: '/healthz', headers: {}, countable: false }],
      connections,
      Math.min(5_000, durationMs),
      rate,
    );
    const baseline = baselineRun.samples.map((s) => s.ms).sort((a, b) => a - b);
    const result = await run(base, targets, connections, durationMs, rate);

    if (child) {
      const exited = new Promise<number | null>((resolve) => child?.once('exit', (code) => resolve(code)));
      child.kill('SIGTERM');
      const code = await exited;
      child = null;
      if (code !== 0) throw new Error(`the API exited with ${code} on SIGTERM`);
    }

    const latencies = result.samples.map((s) => s.ms).sort((a, b) => a - b);
    const statuses: Record<string, number> = {};
    for (const s of result.samples) {
      const key = s.resolved ? `${s.status}:${s.resolved}` : String(s.status);
      statuses[key] = (statuses[key] ?? 0) + 1;
    }
    const bySurface = Object.fromEntries(
      (['web', 'legacy', 'v2'] as const).map((surface) => {
        const ms = result.samples
          .filter((s) => s.surface === surface)
          .map((s) => s.ms)
          .sort((a, b) => a - b);
        return [
          surface,
          {
            requests: ms.length,
            p50: Number(percentile(ms, 50).toFixed(2)),
            p95: Number(percentile(ms, 95).toFixed(2)),
          },
        ];
      }),
    );
    const errors = result.samples.filter((s) => s.status === 0 || s.status >= 500).length;
    const report = {
      requests: result.samples.length,
      rps: Math.round((result.samples.length / result.elapsed) * 1000),
      p50: Number(percentile(latencies, 50).toFixed(2)),
      p95: Number(percentile(latencies, 95).toFixed(2)),
      p99: Number(percentile(latencies, 99).toFixed(2)),
      max: Number((latencies.at(-1) ?? 0).toFixed(2)),
      statuses,
      bySurface,
      errors,
      counted: child === null && !values['base-url'] ? (await countDownloads(databaseUrl)) - before : null,
      countableSent: result.countedSent,
      budgetP95: budget,
      healthzBaseline: {
        p50: Number(percentile(baseline, 50).toFixed(2)),
        p95: Number(percentile(baseline, 95).toFixed(2)),
      },
    };
    if (values.json) process.stdout.write(`${JSON.stringify(report)}\n`);
    else {
      process.stdout.write(
        `requests ${report.requests} (${report.rps}/s) · p50 ${report.p50} ms · p95 ${report.p95} ms · p99 ${report.p99} ms · max ${report.max} ms\n` +
          `by surface ${JSON.stringify(report.bySurface)} · /healthz floor at the same rate: p50 ${report.healthzBaseline.p50} ms, p95 ${report.healthzBaseline.p95} ms\n` +
          `statuses ${JSON.stringify(report.statuses)} · counted ${report.counted ?? 'n/a'} of ${report.countableSent} countable\n`,
      );
    }
    const problems: string[] = [];
    if (!(report.p95 < budget)) problems.push(`p95 ${report.p95} ms ≥ ${budget} ms`);
    if (errors > 0) problems.push(`${errors} failed requests`);
    // Every countable request is under 60/min per IP by construction, so all of them must count.
    if (report.counted !== null && report.counted !== report.countableSent) {
      problems.push(`counted ${report.counted} ≠ ${report.countableSent} countable requests`);
    }
    if (problems.length > 0) {
      process.stderr.write(`FAIL load downloads: ${problems.join('; ')}\n`);
      process.exitCode = 1;
    } else process.stdout.write(`ok load downloads: p95 ${report.p95} ms < ${budget} ms\n`);
  } finally {
    if (child) child.kill('SIGKILL');
    await stopDb?.();
  }
}

async function countDownloads(databaseUrl: string): Promise<number> {
  const pg = await import('pg');
  const client = new pg.default.Client({ connectionString: databaseUrl });
  await client.connect();
  try {
    const { rows } = await client.query<{ n: string }>('SELECT count(*) AS n FROM "ModDownload"');
    return Number(rows[0]?.n ?? 0);
  } finally {
    await client.end();
  }
}

await main();
