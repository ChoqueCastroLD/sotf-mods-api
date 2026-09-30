/**
 * Error reporting of the worker (PLAN §10.3): Sentry when `SENTRY_DSN` is set, a no-op otherwise.
 *
 * Built on `@sentry/core` (the server runtime client, a `fetch` transport and the Node stack
 * parser) instead of `@sentry/node`: the worker needs error events only, and `@sentry/node` pulls
 * OpenTelemetry, which changes how pnpm resolves `drizzle-orm` (optional peer) for this package.
 *
 * - No default integrations, no tracing, no request data and no job payloads: an event carries the
 *   queue, the job id, the retry count and the error, never user data.
 * - Job failures are reported from the runtime (`onJobError`): a failure pg-boss will retry is a
 *   warning, the last attempt an error.
 */
import {
  type Client,
  createStackParser,
  createTransport,
  Scope,
  type TransportMakeRequestResponse,
} from '@sentry/core';
import { nodeStackLineParser, ServerRuntimeClient } from '@sentry/core/server';
import type { WorkerEnv } from './env.ts';

export interface JobErrorInfo {
  queue: string;
  jobId: string;
  retryCount: number;
  /** True when pg-boss will not retry the job again (it goes to the dead-letter queue). */
  final: boolean;
}

export interface ErrorReporter {
  readonly enabled: boolean;
  captureJobError(error: unknown, info: JobErrorInfo): void;
  captureFatal(error: unknown): void;
  /** Waits (up to `timeoutMs`) for queued reports; call before exiting. */
  flush(timeoutMs?: number): Promise<void>;
}

export const noopReporter: ErrorReporter = {
  enabled: false,
  captureJobError() {},
  captureFatal() {},
  async flush() {},
};

type FetchLike = (
  url: string,
  init: { method: string; body: string | Uint8Array; headers?: Record<string, string> },
) => Promise<{
  status: number;
  headers: { get(name: string): string | null };
}>;

export interface ErrorReporterOptions {
  /** HTTP client of the transport (tests pass a fake). */
  fetch?: FetchLike;
}

/** Builds the Sentry client, or null without a DSN. */
export function createSentryClient(
  env: Pick<WorkerEnv, 'SENTRY_DSN' | 'SITE_ENV' | 'GIT_SHA'>,
  options: ErrorReporterOptions = {},
): Client | null {
  const dsn = env.SENTRY_DSN;
  if (!dsn) return null;
  const doFetch = options.fetch ?? (globalThis.fetch as unknown as FetchLike);
  const client = new ServerRuntimeClient({
    dsn,
    environment: env.SITE_ENV,
    release: env.GIT_SHA === 'dev' ? undefined : env.GIT_SHA,
    platform: 'node',
    runtime: { name: 'node', version: process.version },
    integrations: [],
    stackParser: createStackParser(nodeStackLineParser()),
    transport: (transportOptions) =>
      createTransport(transportOptions, async (request): Promise<TransportMakeRequestResponse> => {
        const response = await doFetch(transportOptions.url, {
          method: 'POST',
          body: request.body,
          headers: { 'content-type': 'application/x-sentry-envelope' },
        });
        return {
          statusCode: response.status,
          headers: {
            'x-sentry-rate-limits': response.headers.get('x-sentry-rate-limits'),
            'retry-after': response.headers.get('retry-after'),
          },
        };
      }),
  });
  client.init();
  return client;
}

export function createErrorReporter(
  env: Pick<WorkerEnv, 'SENTRY_DSN' | 'SITE_ENV' | 'GIT_SHA'>,
  options: ErrorReporterOptions = {},
): ErrorReporter {
  const client = createSentryClient(env, options);
  if (!client) return noopReporter;
  const scope = (): Scope => {
    const s = new Scope();
    s.setClient(client);
    s.setTag('service', 'worker');
    return s;
  };
  return {
    enabled: true,
    captureJobError(error, info) {
      const s = scope()
        .setLevel(info.final ? 'error' : 'warning')
        .setTag('queue', info.queue)
        .setTag('final', String(info.final))
        .setContext('job', { id: info.jobId, queue: info.queue, retryCount: info.retryCount })
        .setFingerprint(['{{ default }}', info.queue]);
      client.captureException(error, undefined, s);
    },
    captureFatal(error) {
      client.captureException(error, undefined, scope().setLevel('fatal'));
    },
    async flush(timeoutMs = 2000) {
      await client.flush(timeoutMs);
    },
  };
}
