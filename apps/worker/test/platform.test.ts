/**
 * Unit tests of the worker platform pieces added in the integration pass: development port,
 * error reporting (Sentry envelope, no PII) and the final-attempt rule.
 */
import { describe, expect, it } from 'vitest';
import { DEVELOPMENT_PORT, PRODUCTION_PORT, parseWorkerEnv } from '../src/env.ts';
import { isFinalAttempt } from '../src/runtime.ts';
import { createErrorReporter, noopReporter } from '../src/sentry.ts';

const BASE = {
  PUBLIC_SITE_URL: 'http://127.0.0.1:47321',
  DATABASE_URL: 'postgres://sotf:sotf@127.0.0.1:47432/sotf',
  APP_SECRET: 'a'.repeat(40),
  INTERNAL_SECRET: 'b'.repeat(40),
};

describe('worker health port', () => {
  it('defaults to 47302 outside production and 3002 in production', () => {
    expect(parseWorkerEnv({ ...BASE }).PORT).toBe(DEVELOPMENT_PORT);
    expect(parseWorkerEnv({ ...BASE, NODE_ENV: 'development' }).PORT).toBe(47302);
    expect(parseWorkerEnv({ ...BASE, NODE_ENV: 'production' }).PORT).toBe(PRODUCTION_PORT);
    expect(PRODUCTION_PORT).toBe(3002);
  });

  it('always honours an explicit PORT', () => {
    expect(parseWorkerEnv({ ...BASE, PORT: '5000' }).PORT).toBe(5000);
    expect(parseWorkerEnv({ ...BASE, NODE_ENV: 'production', PORT: '3002' }).PORT).toBe(3002);
  });
});

describe('final attempt of a job', () => {
  it('follows the retry limit of the queue', () => {
    expect(isFinalAttempt('backfill.run', 0)).toBe(true); // retryLimit 0
    expect(isFinalAttempt('og.render', 2)).toBe(false); // retryLimit 3
    expect(isFinalAttempt('og.render', 3)).toBe(true);
    expect(isFinalAttempt('stats.rollup', 4)).toBe(false); // default 5
    expect(isFinalAttempt('stats.rollup', 5)).toBe(true);
  });
});

describe('error reporter', () => {
  it('is a no-op without SENTRY_DSN', () => {
    expect(createErrorReporter({ SENTRY_DSN: undefined, SITE_ENV: 'development', GIT_SHA: 'dev' })).toBe(noopReporter);
  });

  it('sends one envelope per failure with the queue and job, never the payload', async () => {
    const sent: Array<{ url: string; body: string; headers?: Record<string, string> }> = [];
    const reporter = createErrorReporter(
      { SENTRY_DSN: 'https://public@o1.ingest.sentry.io/42', SITE_ENV: 'staging', GIT_SHA: 'abc1234' },
      {
        fetch: async (url, init) => {
          sent.push({ url, body: String(init.body), headers: init.headers });
          return { status: 200, headers: { get: () => null } };
        },
      },
    );
    expect(reporter.enabled).toBe(true);
    reporter.captureJobError(new Error('boom'), { queue: 'og.render', jobId: 'job-1', retryCount: 3, final: true });
    reporter.captureJobError(new Error('again'), { queue: 'cdn.purge', jobId: 'job-2', retryCount: 0, final: false });
    await reporter.flush(2000);

    expect(sent).toHaveLength(2);
    expect(sent[0]?.url).toContain('https://o1.ingest.sentry.io/api/42/envelope/');
    const first = sent[0]?.body ?? '';
    expect(first).toContain('"message":"boom"'.replace('"message":', '"value":'));
    expect(first).toContain('"level":"error"');
    expect(first).toContain('"queue":"og.render"');
    expect(first).toContain('"id":"job-1"');
    expect(first).toContain('"environment":"staging"');
    expect(first).toContain('"release":"abc1234"');
    expect(first).not.toContain('user');
    expect(sent[1]?.body).toContain('"level":"warning"');
  });
});
