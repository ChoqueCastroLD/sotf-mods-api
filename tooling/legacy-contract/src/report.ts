/** Results of the harness and their text/JSON rendering. */
import type { Diff } from './compare.ts';

export type CheckStatus = 'pass' | 'fail' | 'skip';

export interface CheckResult {
  suite: string;
  name: string;
  status: CheckStatus;
  message?: string;
  diffs?: Diff[];
  /** Deviation ids needed for the check to pass. */
  deviations?: string[];
  durationMs: number;
}

export interface Report {
  target: { baseUrl: string; webUrl: string; compareWith: string | null; mock: boolean };
  startedAt: string;
  durationMs: number;
  results: CheckResult[];
  summary: { pass: number; fail: number; skip: number };
}

/** Collects the checks of one suite. */
export class SuiteRecorder {
  readonly results: CheckResult[] = [];
  readonly suite: string;
  constructor(suite: string) {
    this.suite = suite;
  }

  /** Runs `fn`; it returns diffs/messages (empty → pass) or throws (→ fail). */
  async check(
    name: string,
    fn: () => Promise<{ diffs?: Diff[]; failures?: string[]; deviations?: string[]; note?: string } | undefined>,
  ): Promise<CheckResult> {
    const t0 = performance.now();
    let result: CheckResult;
    try {
      const out = (await fn()) ?? {};
      const diffs = out.diffs ?? [];
      const failures = out.failures ?? [];
      const failed = diffs.length > 0 || failures.length > 0;
      result = {
        suite: this.suite,
        name,
        status: failed ? 'fail' : 'pass',
        ...(failures.length > 0 ? { message: failures.join('; ') } : out.note ? { message: out.note } : {}),
        ...(diffs.length > 0 ? { diffs } : {}),
        ...(out.deviations && out.deviations.length > 0 ? { deviations: [...new Set(out.deviations)].sort() } : {}),
        durationMs: Math.round(performance.now() - t0),
      };
    } catch (error) {
      result = {
        suite: this.suite,
        name,
        status: 'fail',
        message: error instanceof Error ? error.message : String(error),
        durationMs: Math.round(performance.now() - t0),
      };
    }
    this.results.push(result);
    return result;
  }

  skip(name: string, reason: string): void {
    this.results.push({ suite: this.suite, name, status: 'skip', message: reason, durationMs: 0 });
  }
}

export function summarise(results: CheckResult[]): Report['summary'] {
  return {
    pass: results.filter((r) => r.status === 'pass').length,
    fail: results.filter((r) => r.status === 'fail').length,
    skip: results.filter((r) => r.status === 'skip').length,
  };
}

const useColor = process.stdout.isTTY && !process.env.NO_COLOR;
const paint = (code: number, text: string) => (useColor ? `\u001b[${code}m${text}\u001b[0m` : text);

function formatDiff(diff: Diff): string {
  const parts = [`${diff.kind} at ${diff.path}: ${diff.message}`];
  if (diff.expected !== undefined) parts.push(`expected ${JSON.stringify(diff.expected)}`);
  if (diff.actual !== undefined) parts.push(`actual ${JSON.stringify(diff.actual)}`);
  return parts.join(' · ');
}

export function renderText(report: Report, maxDiffs = 8): string {
  const lines: string[] = [];
  const t = report.target;
  lines.push(`legacy contract · target ${t.baseUrl}${t.mock ? ' (built-in simulated server)' : ''}`);
  if (t.webUrl !== t.baseUrl) lines.push(`  web host ${t.webUrl}`);
  if (t.compareWith) lines.push(`  shadow reference ${t.compareWith}`);
  let suite = '';
  for (const r of report.results) {
    if (r.suite !== suite) {
      suite = r.suite;
      lines.push('', paint(1, suite));
    }
    const mark = r.status === 'pass' ? paint(32, '✔') : r.status === 'fail' ? paint(31, '✘') : paint(33, '-');
    const dev = r.deviations ? paint(36, ` [${r.deviations.join(', ')}]`) : '';
    lines.push(`  ${mark} ${r.name}${dev}${r.message ? ` — ${r.message}` : ''}`);
    for (const diff of (r.diffs ?? []).slice(0, maxDiffs)) lines.push(`      ${formatDiff(diff)}`);
    if ((r.diffs?.length ?? 0) > maxDiffs) lines.push(`      … ${(r.diffs?.length ?? 0) - maxDiffs} more`);
  }
  const s = report.summary;
  lines.push(
    '',
    `${paint(s.fail > 0 ? 31 : 32, s.fail > 0 ? 'FAILED' : 'PASSED')} · ${s.pass} passed · ${s.fail} failed · ${s.skip} skipped · ${(report.durationMs / 1000).toFixed(1)} s`,
  );
  return lines.join('\n');
}
