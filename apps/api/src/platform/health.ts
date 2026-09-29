/**
 * Liveness and readiness probes (PLAN §10.3 "Salud"; contracts `internal.healthz` / `internal.readyz`).
 *
 * - `/healthz`: the process is up (never touches dependencies; Coolify's health check).
 * - `/readyz`: database (`SELECT 1`, 1 s timeout), pg-boss started and the LISTEN connection up;
 *   503 with the same body when any check fails.
 */
import { internalEndpoints } from '@sotf/contracts';
import type { FastifyInstance } from 'fastify';

async function withTimeout<T>(promise: Promise<T>, ms: number, fallback: T): Promise<T> {
  let timer: NodeJS.Timeout | undefined;
  const timeout = new Promise<T>((resolve) => {
    timer = setTimeout(() => resolve(fallback), ms);
  });
  try {
    return await Promise.race([promise.catch(() => fallback), timeout]);
  } finally {
    clearTimeout(timer);
  }
}

export function registerHealth(app: FastifyInstance): void {
  const { healthz, readyz } = internalEndpoints;

  app.route({
    method: healthz.method,
    url: healthz.path,
    config: { endpoint: healthz },
    logLevel: 'warn',
    handler: async (_request, reply) => {
      const { version, startedAt } = app.platform;
      return reply.send({
        status: 'ok',
        service: 'api',
        version,
        uptimeSeconds: Math.round((Date.now() - startedAt.getTime()) / 1000),
      });
    },
  });

  app.route({
    method: readyz.method,
    url: readyz.path,
    config: { endpoint: readyz },
    logLevel: 'warn',
    handler: async (_request, reply) => {
      const { readiness } = app.platform;
      const db = await withTimeout(readiness.db(), 1000, false);
      const checks = { db, pgboss: readiness.pgboss(), listen: readiness.listen() };
      const ok = checks.db && checks.pgboss && checks.listen;
      return reply.code(ok ? 200 : 503).send({
        status: ok ? 'ok' : 'degraded',
        checks,
        checkedAt: new Date().toISOString(),
      });
    },
  });
}
