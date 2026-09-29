/**
 * Health server of the worker (PLAN §10.3, §11.4: port 3002): `GET /healthz` (process up) and
 * `GET /readyz` (database reachable and pg-boss started; 503 otherwise), both JSON with the shapes
 * of `HealthDTO` / `ReadinessDTO`. The worker holds no LISTEN connection, so `listen` is reported
 * as true (not applicable).
 */
import { createServer, type Server } from 'node:http';

export interface WorkerHealthOptions {
  version: string;
  startedAt: Date;
  db(): Promise<boolean>;
  pgboss(): boolean;
}

async function safe(check: () => Promise<boolean>, ms: number): Promise<boolean> {
  let timer: NodeJS.Timeout | undefined;
  try {
    return await Promise.race([
      check().catch(() => false),
      new Promise<boolean>((resolve) => {
        timer = setTimeout(() => resolve(false), ms);
      }),
    ]);
  } finally {
    clearTimeout(timer);
  }
}

export function createHealthServer(options: WorkerHealthOptions): Server {
  return createServer((request, response) => {
    const path = (request.url ?? '/').split('?', 1)[0];
    const send = (status: number, body: unknown) => {
      response.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
      response.end(request.method === 'HEAD' ? undefined : JSON.stringify(body));
    };
    if (request.method !== 'GET' && request.method !== 'HEAD') return send(405, { status: 405 });
    if (path === '/healthz') {
      return send(200, {
        status: 'ok',
        service: 'worker',
        version: options.version,
        uptimeSeconds: Math.round((Date.now() - options.startedAt.getTime()) / 1000),
      });
    }
    if (path === '/readyz') {
      void safe(options.db, 1000).then((db) => {
        const checks = { db, pgboss: options.pgboss(), listen: true };
        const ok = checks.db && checks.pgboss;
        send(ok ? 200 : 503, { status: ok ? 'ok' : 'degraded', checks, checkedAt: new Date().toISOString() });
      });
      return;
    }
    send(404, { status: 404 });
  });
}
