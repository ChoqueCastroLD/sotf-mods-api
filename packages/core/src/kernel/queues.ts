/**
 * pg-boss queue configuration (PLAN §2.9): every queue of `JOB_PAYLOADS` exists with retries,
 * exponential backoff and a shared dead-letter queue. Producers (API, worker) and consumers (worker)
 * call `ensureQueues()` at start-up; it is idempotent and safe to run concurrently (pg-boss takes
 * an advisory lock). The pg-boss *schema* is installed by `db:migrate` (the apps run with
 * `migrate: false`).
 */
import { JOB_QUEUES, type JobQueue } from '@sotf/contracts/jobs';
import type { PgBoss, Queue } from 'pg-boss';

/** Queue that receives jobs whose retries are exhausted (alert when > 0, PLAN §10.3). */
export const DEAD_LETTER_QUEUE = 'dead-letter';

export type QueueConfig = Omit<Queue, 'name' | 'deadLetter'>;

const DEFAULTS: QueueConfig = {
  retryLimit: 5,
  retryDelay: 10,
  retryBackoff: true,
  retryDelayMax: 3600,
  expireInSeconds: 15 * 60,
  // Keep finished jobs a week for diagnosis; unstarted jobs expire after 14 days.
  deleteAfterSeconds: 7 * 24 * 3600,
  retentionSeconds: 14 * 24 * 3600,
};

/** Per-queue overrides of the defaults. */
export const QUEUE_OVERRIDES: Partial<Record<JobQueue, QueueConfig>> = {
  'domain.event': { retryLimit: 8, retryDelay: 5, warningQueueSize: 5000 },
  'media.process': { expireInSeconds: 30 * 60 },
  'og.render': { retryLimit: 3 },
  'inspection.run': { expireInSeconds: 30 * 60 },
  'security.scan': { retryLimit: 10, retryDelay: 60, retryDelayMax: 6 * 3600 },
  'cdn.purge': { retryLimit: 6, retryDelay: 20 },
  'indexnow.ping': { retryLimit: 3, retryDelay: 60 },
  'email.send': { retryLimit: 6, retryDelay: 30 },
  'account.export': { expireInSeconds: 60 * 60 },
  'account.delete': { expireInSeconds: 60 * 60 },
  'backfill.run': { policy: 'singleton', retryLimit: 0, expireInSeconds: 6 * 3600 },
  'stats.rollup': { policy: 'singleton' },
  'stats.trending': { policy: 'singleton' },
  'legacy.counters': { policy: 'singleton' },
  // Idempotent anyway (advisory lock per week, ON CONFLICT DO NOTHING); one run at a time.
  'awards.mod-of-week': { policy: 'singleton' },
  'milestones.check': { policy: 'singleton' },
  'gamification.evaluate': { retryLimit: 3 },
  // Sweeps: one run at a time; the next schedule retries anyway.
  'compat.reconcile': { policy: 'singleton', retryLimit: 2 },
  'security.rescan': { policy: 'singleton', retryLimit: 1 },
  'markdown.rerender': { policy: 'singleton', retryLimit: 2, expireInSeconds: 60 * 60 },
  'ops.alerts': { policy: 'singleton', retryLimit: 1, expireInSeconds: 4 * 60 },
};

/** Effective configuration of a queue. */
export function queueConfig(queue: JobQueue): QueueConfig {
  return { ...DEFAULTS, ...QUEUE_OVERRIDES[queue] };
}

/** Options accepted by `updateQueue` (policy and partitioning are fixed at creation). */
function updatable(config: QueueConfig): QueueConfig {
  const { policy: _policy, partition: _partition, ...rest } = config;
  return rest;
}

/**
 * Creates the dead-letter queue and every queue of the contract (or updates their options when
 * they already exist). Returns the names that were created.
 */
export async function ensureQueues(boss: PgBoss, queues: readonly JobQueue[] = JOB_QUEUES): Promise<string[]> {
  const existing = new Map((await boss.getQueues()).map((q) => [q.name, q]));
  const created: string[] = [];
  if (!existing.has(DEAD_LETTER_QUEUE)) {
    await boss.createQueue(DEAD_LETTER_QUEUE, { retryLimit: 0, deleteAfterSeconds: 30 * 24 * 3600 });
    created.push(DEAD_LETTER_QUEUE);
  }
  for (const name of queues) {
    const config = queueConfig(name);
    const current = existing.get(name);
    if (!current) {
      await boss.createQueue(name, { ...config, deadLetter: DEAD_LETTER_QUEUE });
      created.push(name);
    } else if (needsUpdate(current, config)) {
      await boss.updateQueue(name, { ...updatable(config), deadLetter: DEAD_LETTER_QUEUE });
    }
  }
  return created;
}

function needsUpdate(current: Queue, wanted: QueueConfig): boolean {
  if (current.deadLetter !== DEAD_LETTER_QUEUE) return true;
  for (const [key, value] of Object.entries(updatable(wanted))) {
    if ((current as unknown as Record<string, unknown>)[key] !== value) return true;
  }
  return false;
}
