/**
 * `pnpm --filter @sotf/web lhci` — Lighthouse CI over the web platform pages (WP-22 acceptance:
 * the 404 with performance ≥ 0.98, accessibility, SEO and best practices = 1, JS ≤ 15 KB br).
 *
 * Runs against the production build (`pnpm --filter @sotf/web build` first) with
 * `SITE_ENV=production` and no API behind it. Cloudflare compresses in production, so a tiny
 * brotli proxy stands in for the edge in front of the Node server; Lighthouse measures what users
 * get. The full multi-template setup (`tooling/lhci`, presets, nightly profile) is WP-92's.
 *
 * Page-specific exceptions, all by design of a 404 page:
 * - Lighthouse refuses to audit a document answered with 404 (`ERRORED_DOCUMENT_REQUEST`), so the
 *   proxy reports `200` for the audited error URLs (their real 404 status is covered by the
 *   `@platform` e2e);
 * - `is-crawlable` is skipped (the 404 is `noindex` on purpose).
 *
 * Ports are picked free at start (`SOTF_LHCI_WEB_PORT` / `SOTF_LHCI_EDGE_PORT` override them).
 *
 *   node src/lib/testing/lhci.ts [--runs 3] [--keep]
 */
import { type ChildProcess, spawn } from 'node:child_process';
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createServer, request as httpRequest, type IncomingMessage, type ServerResponse } from 'node:http';
import { homedir, tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { brotliCompressSync, constants } from 'node:zlib';

const APP_ROOT = fileURLToPath(new URL('../../..', import.meta.url));
let WEB_PORT = Number(process.env.SOTF_LHCI_WEB_PORT ?? 0);
let EDGE = '';
/** JS budget of public pages (PLAN §8.2): ≤ 15 KB brotli. */
export const JS_BUDGET_BYTES = 15 * 1024;

/** Error pages audited as documents (see the module comment). */
const AUDITED_ERROR_PATHS = new Set(['/nope', '/es/nope']);

/** A free local TCP port. */
function freePort(): Promise<number> {
  return new Promise((resolvePort, reject) => {
    const probe = createServer();
    probe.once('error', reject);
    probe.listen(0, '127.0.0.1', () => {
      const address = probe.address();
      probe.close(() => resolvePort(typeof address === 'object' && address ? address.port : 0));
    });
  });
}

const COMPRESSIBLE = /^(?:text\/|application\/(?:javascript|json|manifest\+json|xml)|image\/svg\+xml)/;

function argument(name: string, fallback: string): string {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? (process.argv[index + 1] ?? fallback) : fallback;
}

/** Brotli-compressing reverse proxy: the local stand-in for Cloudflare. */
function startEdge(port: number): ReturnType<typeof createServer> {
  const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const upstream = httpRequest(
      {
        host: '127.0.0.1',
        port: WEB_PORT,
        path: req.url,
        method: req.method,
        headers: { ...req.headers, 'accept-encoding': 'identity' },
      },
      (answer) => {
        const chunks: Buffer[] = [];
        answer.on('data', (chunk: Buffer) => chunks.push(chunk));
        answer.on('end', () => {
          let body = Buffer.concat(chunks);
          const headers = { ...answer.headers };
          const type = String(headers['content-type'] ?? '');
          if (
            COMPRESSIBLE.test(type) &&
            body.length > 0 &&
            /\bbr\b/.test(String(req.headers['accept-encoding'] ?? ''))
          ) {
            body = brotliCompressSync(body, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } });
            headers['content-encoding'] = 'br';
            headers.vary = 'Accept-Encoding';
          }
          delete headers['transfer-encoding'];
          headers['content-length'] = String(body.length);
          const status =
            answer.statusCode === 404 && AUDITED_ERROR_PATHS.has(req.url ?? '') ? 200 : (answer.statusCode ?? 502);
          res.writeHead(status, headers);
          res.end(body);
        });
      },
    );
    upstream.on('error', () => {
      res.writeHead(502);
      res.end();
    });
    req.pipe(upstream);
  });
  server.listen(port, '127.0.0.1');
  return server;
}

async function waitFor(url: string, timeoutMs = 30_000): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      if ((await fetch(url)).ok) return;
    } catch {
      // not up yet
    }
    await new Promise((done) => setTimeout(done, 250));
  }
  throw new Error(`timed out waiting for ${url}`);
}

/** Chrome for Lighthouse: $CHROME_PATH, else the newest Playwright Chromium. */
function chromePath(): string {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const cache = join(homedir(), '.cache/ms-playwright');
  const candidates = existsSync(cache)
    ? readdirSync(cache)
        .filter((name) => /^chromium(?:_headless_shell)?-\d+$/.test(name))
        .sort((a, b) => Number(b.split('-').at(-1)) - Number(a.split('-').at(-1)))
    : [];
  for (const dir of candidates) {
    for (const binary of [
      'chrome-linux/chrome',
      'chrome-linux64/chrome',
      'chrome-headless-shell-linux64/chrome-headless-shell',
    ]) {
      const path = join(cache, dir, binary);
      if (existsSync(path)) return path;
    }
  }
  throw new Error('No Chrome found: set CHROME_PATH or run `pnpm exec playwright install chromium`');
}

function lhciConfig(runs: number, outputDir: string) {
  return {
    ci: {
      collect: {
        url: [`${EDGE}/nope`, `${EDGE}/es/nope`],
        numberOfRuns: runs,
        settings: {
          chromeFlags: '--headless=new --no-sandbox --disable-dev-shm-usage',
          skipAudits: ['is-crawlable'],
        },
      },
      assert: {
        assertions: {
          'categories:performance': ['error', { minScore: 0.98, aggregationMethod: 'median-run' }],
          'categories:accessibility': ['error', { minScore: 1 }],
          'categories:best-practices': ['error', { minScore: 1 }],
          'categories:seo': ['error', { minScore: 1 }],
          'resource-summary:script:size': ['error', { maxNumericValue: JS_BUDGET_BYTES }],
          'resource-summary:stylesheet:size': ['error', { maxNumericValue: 20 * 1024 }],
          'resource-summary:document:size': ['error', { maxNumericValue: 35 * 1024 }],
          'resource-summary:font:size': ['error', { maxNumericValue: 100 * 1024 }],
          'cumulative-layout-shift': ['error', { maxNumericValue: 0.02 }],
          'total-blocking-time': ['error', { maxNumericValue: 50 }],
        },
      },
      upload: { target: 'filesystem', outputDir },
    },
  };
}

function run(command: string, args: string[], env: NodeJS.ProcessEnv): Promise<number> {
  return new Promise((done) => {
    const child = spawn(command, args, { cwd: APP_ROOT, env, stdio: 'inherit' });
    child.on('exit', (code) => done(code ?? 1));
  });
}

async function main(): Promise<void> {
  const runs = Number(argument('runs', '3'));
  if (!existsSync(join(APP_ROOT, 'dist/server/entry.mjs'))) {
    throw new Error('Build first: pnpm --filter @sotf/web build');
  }
  const work = mkdtempSync(join(tmpdir(), 'sotf-lhci-'));
  const outputDir = resolve(APP_ROOT, '.lighthouseci/reports');
  WEB_PORT ||= await freePort();
  const edgePort = Number(process.env.SOTF_LHCI_EDGE_PORT ?? 0) || (await freePort());
  EDGE = `http://127.0.0.1:${edgePort}`;
  const config = lhciConfig(runs, outputDir);
  const configPath = join(work, 'lighthouserc.json');
  writeFileSync(configPath, JSON.stringify(config, null, 2));

  let web: ChildProcess | undefined;
  const edge = startEdge(edgePort);
  try {
    web = spawn('node', ['dist/server/entry.mjs'], {
      cwd: APP_ROOT,
      stdio: 'inherit',
      env: {
        ...process.env,
        HOST: '127.0.0.1',
        PORT: String(WEB_PORT),
        // `test` keeps the post-deploy purge off; SITE_ENV=production renders what users get.
        NODE_ENV: 'test',
        SITE_ENV: 'production',
        PUBLIC_SITE_URL: 'https://sotf-mods.com',
        INTERNAL_API_URL: 'http://127.0.0.1:9',
        INTERNAL_SECRET: 'lhci-local-only-secret-not-used-anywhere-000',
        PUBLIC_ADSENSE_CLIENT: '',
      },
    });
    await waitFor(`${EDGE}/healthz`);
    const env = { ...process.env, CHROME_PATH: chromePath() };
    const collect = await run('pnpm', ['exec', 'lhci', 'collect', `--config=${configPath}`], env);
    if (collect !== 0) {
      process.exitCode = collect;
    } else {
      const assert = await run('pnpm', ['exec', 'lhci', 'assert', `--config=${configPath}`], env);
      await run('pnpm', ['exec', 'lhci', 'upload', `--config=${configPath}`], env);
      process.exitCode = assert;
    }
  } finally {
    web?.kill('SIGTERM');
    edge.close();
    if (!process.argv.includes('--keep')) rmSync(work, { recursive: true, force: true });
  }
  const summary = join(outputDir, 'manifest.json');
  if (existsSync(summary)) {
    const entries = JSON.parse(readFileSync(summary, 'utf8')) as Array<{
      url: string;
      summary: Record<string, number>;
    }>;
    for (const entry of entries) process.stdout.write(`${entry.url} ${JSON.stringify(entry.summary)}\n`);
  }
}

if (import.meta.main) await main();
