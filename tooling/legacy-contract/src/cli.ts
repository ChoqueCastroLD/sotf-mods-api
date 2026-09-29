#!/usr/bin/env node
/**
 * `pnpm contract:legacy` — legacy API contract harness (PLAN §5.5, §10.2 stage 8, WP-24).
 *
 *   pnpm contract:legacy                                   self-test against the built-in simulated server
 *   pnpm contract:legacy --base-url http://127.0.0.1:3001  a v2 API (legacy layer) — local or staging
 *   pnpm contract:legacy --base-url <api> --web-url <web>  downloads live on the web host
 *   pnpm contract:legacy --base-url <v2> --compare-with https://api.sotf-mods.com   shadow mode
 *
 * Options:
 *   --base-url <url>        API base (env LEGACY_CONTRACT_BASE_URL). Without it a simulated server
 *                           replaying the golden fixtures is started (harness self-test).
 *   --web-url <url>         host of /mods/:u/:s/download/:v (env LEGACY_CONTRACT_WEB_URL; default --base-url)
 *   --compare-with <url>    shadow reference; only GETs of Tier 1/2 reads, ≤ 2 rps to production
 *   --suites a,b            fixtures,check,redmanager,updateschecker,kelvinseek,downloads,shadow,dotnet
 *   --mode full|shape       shape = schema, key order, statuses and invariants only (other data sets)
 *   --dotnet auto|on|off    .NET UpdatesChecker checker in Docker (default auto: skipped without Docker)
 *   --max-pages <n>         pages walked per list (default 50)
 *   --installs <n>          RedManager installs simulated (default 3)
 *   --no-follow             do not follow download redirects to the storage
 *   --no-counting           do not verify the download counting rules
 *   --count-timeout <ms>    wait for an asynchronous download count (default 30000)
 *   --download-scan <n>     details scanned for special-character keys (default 80)
 *   --rps <n>               request rate limit for non-production hosts (default unlimited)
 *   --json                  print the report as JSON
 *   --report <file>         also write the JSON report to a file
 *
 * Exit code: 0 when no check failed, 1 otherwise, 2 on usage errors.
 */
import { writeFileSync } from 'node:fs';
import { parseArgs } from 'node:util';
import { DEFAULT_OPTIONS } from './context.ts';
import { isProductionHost } from './guard.ts';
import { runHarness, SUITES, type SuiteName } from './index.ts';
import { startMockServer } from './mock/server.ts';
import { renderText } from './report.ts';

function usage(message: string): never {
  process.stderr.write(`contract:legacy: ${message}\nrun with --help for the options\n`);
  process.exit(2);
}

function positiveInt(name: string, value: string | undefined, fallback: number): number {
  if (value === undefined) return fallback;
  const n = Number(value);
  if (!Number.isInteger(n) || n < 0) usage(`--${name} must be a non-negative integer`);
  return n;
}

function url(name: string, value: string | undefined): string | undefined {
  if (value === undefined || value === '') return undefined;
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') throw new Error('protocol');
    return parsed.href.replace(/\/+$/, '');
  } catch {
    return usage(`--${name} must be an http(s) URL`);
  }
}

async function main(): Promise<number> {
  const { values } = parseArgs({
    options: {
      'base-url': { type: 'string' },
      'web-url': { type: 'string' },
      'compare-with': { type: 'string' },
      suites: { type: 'string' },
      mode: { type: 'string', default: 'full' },
      dotnet: { type: 'string', default: 'auto' },
      'max-pages': { type: 'string' },
      installs: { type: 'string' },
      'no-follow': { type: 'boolean', default: false },
      'no-counting': { type: 'boolean', default: false },
      'count-timeout': { type: 'string' },
      'download-scan': { type: 'string' },
      rps: { type: 'string' },
      json: { type: 'boolean', default: false },
      report: { type: 'string' },
      help: { type: 'boolean', short: 'h', default: false },
    },
    allowPositionals: false,
  });
  if (values.help) {
    const { readFileSync } = await import('node:fs');
    const source = readFileSync(new URL(import.meta.url), 'utf8');
    process.stdout.write(
      `${
        /\/\*\*([\s\S]*?)\*\//
          .exec(source)?.[1]
          ?.replace(/^ \* ?/gm, '')
          .trim() ?? ''
      }\n`,
    );
    return 0;
  }
  const mode = values.mode;
  if (mode !== 'full' && mode !== 'shape') usage('--mode must be full or shape');
  const dotnet = values.dotnet;
  if (dotnet !== 'auto' && dotnet !== 'on' && dotnet !== 'off') usage('--dotnet must be auto, on or off');
  let suites: SuiteName[] | undefined;
  if (values.suites) {
    suites = values.suites.split(',').map((s) => s.trim()) as SuiteName[];
    const unknown = suites.filter((s) => !(SUITES as readonly string[]).includes(s));
    if (unknown.length > 0) usage(`unknown suite(s): ${unknown.join(', ')} (known: ${SUITES.join(', ')})`);
  }
  let baseUrl = url('base-url', values['base-url'] ?? process.env.LEGACY_CONTRACT_BASE_URL);
  const webUrl = url('web-url', values['web-url'] ?? process.env.LEGACY_CONTRACT_WEB_URL);
  const compareWith = url('compare-with', values['compare-with']);
  if (compareWith && baseUrl && new URL(compareWith).host === new URL(baseUrl).host) {
    usage('--compare-with and --base-url point at the same host');
  }
  const rps = values.rps === undefined ? 0 : Number(values.rps);
  if (!Number.isFinite(rps) || rps < 0) usage('--rps must be a positive number');

  const mock = baseUrl ? null : await startMockServer();
  if (mock) baseUrl = mock.url;
  if (!baseUrl) return usage('no base URL');
  if (isProductionHost(new URL(baseUrl).hostname)) {
    process.stderr.write(
      'contract:legacy: the target is production — only GET/HEAD reads run (downloads, KelvinSeek and preflights are skipped), ≤ 2 rps\n',
    );
  }
  try {
    const report = await runHarness({
      baseUrl,
      webUrl: webUrl ?? baseUrl,
      compareWith: compareWith ?? null,
      mock: mock !== null,
      suites,
      dotnet,
      mode,
      maxPages: positiveInt('max-pages', values['max-pages'], DEFAULT_OPTIONS.maxPages) || DEFAULT_OPTIONS.maxPages,
      installs: positiveInt('installs', values.installs, DEFAULT_OPTIONS.installs),
      followDownloads: !values['no-follow'],
      checkCounting: !values['no-counting'],
      countTimeoutMs: positiveInt('count-timeout', values['count-timeout'], DEFAULT_OPTIONS.countTimeoutMs),
      downloadScan: positiveInt('download-scan', values['download-scan'], DEFAULT_OPTIONS.downloadScan),
      http: rps > 0 ? { minIntervalMs: Math.ceil(1000 / rps) } : {},
    });
    if (values.report) writeFileSync(values.report, `${JSON.stringify(report, null, 2)}\n`);
    process.stdout.write(values.json ? `${JSON.stringify(report, null, 2)}\n` : `${renderText(report)}\n`);
    return report.summary.fail > 0 ? 1 : 0;
  } finally {
    await mock?.close();
  }
}

main().then(
  (code) => process.exit(code),
  (error: unknown) => {
    process.stderr.write(
      `contract:legacy: ${error instanceof Error ? (error.stack ?? error.message) : String(error)}\n`,
    );
    process.exit(1);
  },
);
