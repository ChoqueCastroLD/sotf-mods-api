/**
 * Performance budget (PLAN §12.3 WP-15): a 20 KB document renders in < 15 ms.
 *
 * Measured as batches of 5 consecutive renders after a warm-up; the budget applies to the best
 * batch average. Contention from other processes (CI runners, parallel workspace tasks) can only
 * make a batch slower, never faster, so the best batch is the stable estimate of what the
 * pipeline costs (the usual micro-benchmark practice, cf. Python's `timeit`), while a single batch
 * still averages 5 full renders including their garbage collection. `SOTF_BENCH_REPORT=1` prints
 * the best and median batch.
 */
import { describe, expect, it } from 'vitest';
import { renderMarkdown } from '../src/index.ts';
import type { MarkdownProfile } from '../src/types.ts';
import { BENCH_DOCUMENT } from './fixtures/bench-document.ts';

const BUDGET_MS = 15;
const BATCHES = 15;
const RUNS_PER_BATCH = 5;

function measure(profile: MarkdownProfile): { best: number; median: number } {
  for (let i = 0; i < 20; i++) renderMarkdown(BENCH_DOCUMENT, { profile });
  const batches: number[] = [];
  for (let batch = 0; batch < BATCHES; batch++) {
    const start = performance.now();
    for (let i = 0; i < RUNS_PER_BATCH; i++) renderMarkdown(BENCH_DOCUMENT, { profile });
    batches.push((performance.now() - start) / RUNS_PER_BATCH);
  }
  batches.sort((a, b) => a - b);
  return { best: batches[0] as number, median: batches[Math.floor(BATCHES / 2)] as number };
}

describe('performance', () => {
  it('uses a 20 KB document that exercises every construct', () => {
    expect(new TextEncoder().encode(BENCH_DOCUMENT).length).toBe(20 * 1024);
    const result = renderMarkdown(BENCH_DOCUMENT);
    expect(result.headings.length).toBeGreaterThan(5);
    expect(result.html).toContain('md-alert');
    expect(result.html).toContain('md-youtube');
    expect(result.html).toContain('<table>');
    expect(result.html).toContain('md-spoiler');
  });

  it.each(['full', 'lite', 'legacyHtml'] as const)(
    `renders 20 KB in < ${BUDGET_MS} ms (%s)`,
    { timeout: 60_000 },
    (profile) => {
      const { best, median } = measure(profile);
      if (process.env.SOTF_BENCH_REPORT) {
        process.stdout.write(`[bench] ${profile}: best batch ${best.toFixed(2)} ms, median ${median.toFixed(2)} ms\n`);
      }
      expect(best).toBeLessThan(BUDGET_MS);
    },
  );
});
