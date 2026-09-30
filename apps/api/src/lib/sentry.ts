/**
 * Error reporting of the API (PLAN §10.3 «Errores»): Sentry when `SENTRY_DSN` is set, a no-op
 * otherwise. Same construction as the worker (`apps/worker/src/sentry.ts`): `@sentry/core`'s server
 * runtime client with a `fetch` transport and the Node stack parser, not `@sentry/node` (which pulls
 * OpenTelemetry and makes pnpm resolve a second `drizzle-orm` instance).
 *
 * `sendDefaultPii: false` in spirit and in fact: no default integrations, no request data. An
 * event carries the method, the route template (`/api/v2/mods/:id`, never the URL with its query),
 * the status and the request id (the Cloudflare ray id, to join the logs); never the user, the IP,
 * headers, cookies or bodies. Only 5xx are reported: 4xx are the client's business.
 */
import {
  type Client,
  createStackParser,
  createTransport,
  Scope,
  type TransportMakeRequestResponse,
} from '@sentry/core';
import { nodeStackLineParser, ServerRuntimeClient } from '@sentry/core/server';
import type { ApiEnv } from '../env.ts';

export interface RequestErrorInfo {
  method: string;
  /** Route template of the matched route (`/api/v2/mods/:id`), or null for unmatched requests. */
  route: string | null;
  status: number;
  requestId: string;
}

export interface ErrorReporter {
  readonly enabled: boolean;
  captureRequestError(error: unknown, info: RequestErrorInfo): void;
  captureFatal(error: unknown): void;
  /** Waits (up to `timeoutMs`) for queued reports; call before exiting. */
  flush(timeoutMs?: number): Promise<void>;
}

export const noopReporter: ErrorReporter = {
  enabled: false,
  captureRequestError() {},
  captureFatal() {},
  async flush() {},
};

type FetchLike = (
  url: string,
  init: { method: string; body: string | Uint8Array; headers?: Record<string, string> },
) => Promise<{ status: number; headers: { get(name: string): string | null } }>;

export interface ErrorReporterOptions {
  /** HTTP client of the transport (tests pass a fake). */
  fetch?: FetchLike;
}

type ReporterEnv = Pick<ApiEnv, 'SENTRY_DSN' | 'SITE_ENV' | 'GIT_SHA'>;

/** Builds the Sentry client, or null without a DSN. */
export function createSentryClient(env: ReporterEnv, options: ErrorReporterOptions = {}): Client | null {
  const dsn = env.SENTRY_DSN;
  if (!dsn) return null;
  const doFetch = options.fetch ?? (globalThis.fetch as unknown as FetchLike);
  const client = new ServerRuntimeClient({
    dsn,
    environment: env.SITE_ENV,
    release: env.GIT_SHA === 'dev' ? undefined : env.GIT_SHA,
    platform: 'node',
    runtime: { name: 'node', version: process.version },
    sendDefaultPii: false,
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

export function createErrorReporter(env: ReporterEnv, options: ErrorReporterOptions = {}): ErrorReporter {
  const client = createSentryClient(env, options);
  if (!client) return noopReporter;
  const scope = (): Scope => {
    const s = new Scope();
    s.setClient(client);
    s.setTag('service', 'api');
    return s;
  };
  return {
    enabled: true,
    captureRequestError(error, info) {
      const route = info.route ?? 'unmatched';
      const s = scope()
        .setLevel('error')
        .setTag('route', route)
        .setTag('method', info.method)
        .setTag('status', String(info.status))
        .setTag('request_id', info.requestId)
        .setFingerprint(['{{ default }}', info.method, route]);
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
