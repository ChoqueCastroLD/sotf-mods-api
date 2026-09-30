/**
 * Helpers of the WP-31 integration tests (not a test file).
 */
import type { FastifyInstance } from 'fastify';

/**
 * Right after start-up (containers, transforms, a loaded CI host) the event loop can look
 * saturated and `@fastify/under-pressure` answers 503 for a moment. Waits until a routed request
 * is served normally, so assertions measure the app and not the host.
 */
export async function waitUntilServing(app: FastifyInstance, timeoutMs = 60_000): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  let streak = 0;
  for (;;) {
    const res = await app.inject({ method: 'GET', url: '/api/v2/resolve?path=%2F__warmup__' });
    streak = res.statusCode === 503 ? 0 : streak + 1;
    if (streak >= 5) return;
    if (Date.now() > deadline) throw new Error('the app stayed under pressure (503)');
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
}

/** Same as `waitUntilServing` for a server reached over HTTP (another process). */
export async function waitUntilServingHttp(base: string, timeoutMs = 60_000): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  let streak = 0;
  for (;;) {
    const res = await fetch(`${base}/api/v2/resolve?path=%2F__warmup__`).catch(() => null);
    streak = !res || res.status === 503 ? 0 : streak + 1;
    if (streak >= 5) return;
    if (Date.now() > deadline) throw new Error('the server stayed under pressure (503)');
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
}
