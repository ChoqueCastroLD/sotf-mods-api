/**
 * Production HTTP server tuning (the adapter offers no options and does not expose the server, so
 * the server entry `fetch.ts`, evaluated before the adapter starts listening, wraps
 * `http.createServer` once).
 *
 * **Keep-alive.** `@astrojs/node` creates the server with Node's defaults: `keepAliveTimeout` is
 * 5 s. Traefik keeps its idle connections to a backend for 90 s and reuses them, so a request is
 * sometimes written to a socket Node closes at that very moment. The client sees a sporadic 502
 * (Traefik retries only idempotent requests, so a `POST /logout` is lost). The server must outlive
 * the proxy's idle timeout, and Node wants `headersTimeout` above `keepAliveTimeout`.
 *
 * **Graceful stop.** Nothing handled `SIGTERM`: on a rolling deploy Coolify stops the old container
 * and Node exited at once, cutting every request in flight and refusing the ones Traefik still
 * routed to it while it noticed the container was gone (502s on every release). Now the server
 * keeps accepting for a short drain delay, then stops listening, lets running requests finish and
 * exits; a hard limit closes whatever is left before Docker's 10 s `SIGKILL`.
 */
import type http from 'node:http';

/** Above Traefik's 90 s idle timeout towards its backends. */
export const KEEP_ALIVE_TIMEOUT_MS = 120_000;
/** Node requires it to exceed the keep-alive timeout. */
export const HEADERS_TIMEOUT_MS = KEEP_ALIVE_TIMEOUT_MS + 5_000;
/** After SIGTERM the server still accepts requests for this long (Traefik drops the backend). */
export const DRAIN_DELAY_MS = 2_000;
/** Then running requests get this long before the remaining connections are cut. */
export const GRACE_MS = 5_000;

const TUNED = Symbol.for('sotf.http-tuning');

type HttpModule = Pick<typeof http, 'createServer'> & { [TUNED]?: true };

/** Sets the timeouts on a server (exported for tests). */
export function tuneServer<T extends Pick<http.Server, 'keepAliveTimeout' | 'headersTimeout'>>(server: T): T {
  server.keepAliveTimeout = KEEP_ALIVE_TIMEOUT_MS;
  server.headersTimeout = HEADERS_TIMEOUT_MS;
  return server;
}

export interface ShutdownProcess {
  once(signal: 'SIGTERM' | 'SIGINT', handler: () => void): unknown;
  exit(code?: number): unknown;
}

export interface ClosableServer {
  close(callback?: () => void): unknown;
  closeAllConnections(): void;
}

/** Drains and stops `server` on SIGTERM/SIGINT, then exits the process. Returns the handler (tests). */
export function installGracefulShutdown(
  server: ClosableServer,
  proc: ShutdownProcess = process,
  timing: { drainDelayMs?: number; graceMs?: number } = {},
): () => void {
  const drainDelayMs = timing.drainDelayMs ?? DRAIN_DELAY_MS;
  const graceMs = timing.graceMs ?? GRACE_MS;
  let stopping = false;
  const stop = () => {
    if (stopping) return;
    stopping = true;
    setTimeout(() => {
      // Stops listening and closes idle keep-alive sockets; running requests finish.
      server.close(() => proc.exit(0));
      setTimeout(() => {
        server.closeAllConnections();
        proc.exit(0);
      }, graceMs);
    }, drainDelayMs);
  };
  proc.once('SIGTERM', stop);
  proc.once('SIGINT', stop);
  return stop;
}

export interface InstallOptions {
  /** Also drain and exit on SIGTERM/SIGINT (production server only). */
  gracefulShutdown?: boolean;
  process?: ShutdownProcess;
}

/** Makes every server created through `httpModule.createServer` use the tuned timeouts. Idempotent. */
export function installHttpTuning(httpModule: HttpModule, options: InstallOptions = {}): void {
  if (httpModule[TUNED]) return;
  const create = httpModule.createServer;
  httpModule.createServer = ((...args: Parameters<typeof http.createServer>) => {
    const server = tuneServer(create.apply(httpModule, args));
    if (options.gracefulShutdown) installGracefulShutdown(server, options.process ?? process);
    return server;
  }) as typeof http.createServer;
  httpModule[TUNED] = true;
}
