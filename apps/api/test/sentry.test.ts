/**
 * Error reporting of the API (PLAN §10.3): 5xx go to Sentry with the route template, method,
 * status and request id only; 4xx are never reported; nothing is sent without SENTRY_DSN.
 */
import Fastify from 'fastify';
import { describe, expect, it } from 'vitest';
import { createErrorReporter, type ErrorReporter, noopReporter, type RequestErrorInfo } from '../src/lib/sentry.ts';
import { httpError, setupErrors } from '../src/plugins/errors.ts';

describe('API error reporter', () => {
  it('is a no-op without SENTRY_DSN', () => {
    expect(createErrorReporter({ SENTRY_DSN: undefined, SITE_ENV: 'development', GIT_SHA: 'dev' })).toBe(noopReporter);
  });

  it('sends the route template, method, status and request id, never the URL, user or headers', async () => {
    const sent: Array<{ url: string; body: string }> = [];
    const reporter = createErrorReporter(
      { SENTRY_DSN: 'https://public@o1.ingest.sentry.io/42', SITE_ENV: 'staging', GIT_SHA: 'abc1234' },
      {
        fetch: async (url, init) => {
          sent.push({ url, body: String(init.body) });
          return { status: 200, headers: { get: () => null } };
        },
      },
    );
    expect(reporter.enabled).toBe(true);
    reporter.captureRequestError(new Error('db down'), {
      method: 'GET',
      route: '/api/v2/mods/:id',
      status: 500,
      requestId: 'ray-123',
    });
    await reporter.flush(2000);
    expect(sent).toHaveLength(1);
    expect(sent[0]?.url).toContain('https://o1.ingest.sentry.io/api/42/envelope/');
    const body = sent[0]?.body ?? '';
    expect(body).toContain('"value":"db down"');
    expect(body).toContain('"route":"/api/v2/mods/:id"');
    expect(body).toContain('"request_id":"ray-123"');
    expect(body).toContain('"service":"api"');
    expect(body).toContain('"environment":"staging"');
    expect(body).toContain('"release":"abc1234"');
    expect(body).not.toContain('"user"');
    expect(body).not.toContain('"request":');
  });
});

describe('error handler → reporter', () => {
  function recordingReporter(): ErrorReporter & { calls: Array<{ error: unknown; info: RequestErrorInfo }> } {
    const calls: Array<{ error: unknown; info: RequestErrorInfo }> = [];
    return {
      enabled: true,
      calls,
      captureRequestError(error, info) {
        calls.push({ error, info });
      },
      captureFatal() {},
      async flush() {},
    };
  }

  it('reports 5xx with the matched route template and skips 4xx', async () => {
    const reporter = recordingReporter();
    const app = Fastify();
    setupErrors(app, reporter);
    app.get('/api/v2/things/:id', async (request) => {
      if ((request.params as { id: string }).id === 'missing') throw httpError('NOT_FOUND');
      throw new Error('unexpected');
    });
    const failed = await app.inject({ method: 'GET', url: '/api/v2/things/7?secret=token' });
    expect(failed.statusCode).toBe(500);
    expect(failed.body).not.toContain('unexpected');
    expect(reporter.calls).toHaveLength(1);
    expect(reporter.calls[0]?.info).toEqual({
      method: 'GET',
      route: '/api/v2/things/:id',
      status: 500,
      requestId: failed.json().requestId,
    });
    const notFound = await app.inject({ method: 'GET', url: '/api/v2/things/missing' });
    expect(notFound.statusCode).toBe(404);
    expect(reporter.calls).toHaveLength(1);
    await app.close();
  });
});
