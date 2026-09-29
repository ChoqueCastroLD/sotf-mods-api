/**
 * `@sotf/legacy-contract`: harness that proves the v2 legacy layer does not break RedManager,
 * UpdatesChecker or KelvinSeek (PLAN §5.5, WP-24). `runHarness` runs the selected suites against a
 * base URL and returns a report; `cli.ts` is `pnpm contract:legacy`.
 */
import { createContext, DEFAULT_OPTIONS, type HarnessOptions } from './context.ts';
import { runDotnetSuite } from './dotnet.ts';
import { HttpClient, type HttpClientOptions } from './http.ts';
import { type CheckResult, type Report, type SuiteRecorder, summarise } from './report.ts';
import { runCheckSuite } from './suites/check.ts';
import { runDownloadsSuite } from './suites/downloads.ts';
import { runFixturesSuite } from './suites/fixtures.ts';
import { runKelvinSeekSuite } from './suites/kelvinseek.ts';
import { runRedManagerSuite } from './suites/redmanager.ts';
import { runShadowSuite } from './suites/shadow.ts';
import { runUpdatesCheckerSuite } from './suites/updates-checker.ts';

export { compareResponse, diffValues, updatesCheckerDiffs } from './compare.ts';
export { DEFAULT_OPTIONS, type HarnessOptions } from './context.ts';
export { ALL_DEVIATIONS } from './deviations.ts';
export { FIXTURE_POLICIES } from './expectations.ts';
export { loadFixtures } from './fixtures.ts';
export { HttpClient } from './http.ts';
export { startMockServer } from './mock/server.ts';
export { normalize } from './normalize.ts';
export { type Report, renderText } from './report.ts';

export const SUITES = [
  'fixtures',
  'check',
  'redmanager',
  'updateschecker',
  'kelvinseek',
  'downloads',
  'shadow',
  'dotnet',
] as const;
export type SuiteName = (typeof SUITES)[number];

export interface RunOptions extends Partial<Omit<HarnessOptions, 'baseUrl'>> {
  baseUrl: string;
  suites?: readonly SuiteName[];
  dotnet?: 'auto' | 'on' | 'off';
  /** Marks the report target as the built-in simulated server. */
  mock?: boolean;
  http?: HttpClientOptions;
  /** Called after each suite (progress output). */
  onSuite?: (results: CheckResult[]) => void;
}

export async function runHarness(run: RunOptions): Promise<Report> {
  const started = Date.now();
  const options: HarnessOptions = {
    ...DEFAULT_OPTIONS,
    ...Object.fromEntries(Object.entries(run).filter(([, v]) => v !== undefined)),
    baseUrl: run.baseUrl,
    webUrl: run.webUrl ?? run.baseUrl,
    compareWith: run.compareWith ?? null,
  } as HarnessOptions;
  const client = new HttpClient(run.http);
  const ctx = createContext(options, client);
  const selected = new Set<SuiteName>(run.suites ?? SUITES);
  const results: CheckResult[] = [];
  const runners: Array<[SuiteName, () => Promise<SuiteRecorder> | SuiteRecorder]> = [
    ['fixtures', () => runFixturesSuite(ctx)],
    ['check', () => runCheckSuite(ctx)],
    ['redmanager', () => runRedManagerSuite(ctx)],
    ['updateschecker', () => runUpdatesCheckerSuite(ctx)],
    ['kelvinseek', () => runKelvinSeekSuite(ctx)],
    ['downloads', () => runDownloadsSuite(ctx)],
    ['shadow', () => runShadowSuite(ctx)],
    ['dotnet', () => runDotnetSuite(ctx.captures, run.dotnet ?? 'auto')],
  ];
  for (const [name, runner] of runners) {
    if (!selected.has(name)) continue;
    if (name === 'shadow' && !options.compareWith) continue;
    const rec = await runner();
    results.push(...rec.results);
    run.onSuite?.(rec.results);
  }
  return {
    target: {
      baseUrl: options.baseUrl,
      webUrl: options.webUrl,
      compareWith: options.compareWith,
      mock: run.mock ?? false,
    },
    startedAt: new Date(started).toISOString(),
    durationMs: Date.now() - started,
    results,
    summary: summarise(results),
  };
}
