/**
 * Entry point of the worker process (`node dist/worker.js`). Starts the health server first (so
 * Coolify sees the container alive), then pg-boss and the job handlers, retrying while the database
 * is unreachable. SIGTERM/SIGINT stop taking jobs, wait for the active ones and exit.
 */
import closeWithGrace from 'close-with-grace';
import { createWorker } from './app.ts';
import { loadWorkerEnv } from './env.ts';
import { createHealthServer } from './health.ts';
import { createErrorReporter } from './sentry.ts';

const env = loadWorkerEnv();
const reporter = createErrorReporter(env);
const worker = createWorker({ env, reporter });
const startedAt = new Date();
const health = createHealthServer({
  version: env.GIT_SHA,
  startedAt,
  db: async () => {
    await worker.db.pool.query('SELECT 1');
    return true;
  },
  pgboss: () => worker.started,
});

let stopping = false;
let retry: NodeJS.Timeout | null = null;

async function startWithRetry(attempt = 0): Promise<void> {
  if (stopping) return;
  try {
    await worker.start();
  } catch (error) {
    const delay = Math.min(30_000, 1000 * 2 ** attempt);
    worker.log.error({ err: error, retryInMs: delay }, 'worker start failed');
    await worker.boss.stop({ graceful: false, close: false }).catch(() => undefined);
    retry = setTimeout(() => void startWithRetry(attempt + 1), delay);
  }
}

closeWithGrace({ delay: 35_000, logger: worker.log }, async ({ signal, err }) => {
  stopping = true;
  if (retry) clearTimeout(retry);
  if (err) {
    worker.log.error({ err }, 'fatal error, shutting down');
    reporter.captureFatal(err);
  } else worker.log.info({ signal }, 'shutting down');
  await worker.stop(30_000);
  await reporter.flush(2000);
  await new Promise<void>((resolve) => health.close(() => resolve()));
});

health.listen(env.PORT, env.HOST, () => worker.log.info({ port: env.PORT }, 'health server listening'));
void startWithRetry();
