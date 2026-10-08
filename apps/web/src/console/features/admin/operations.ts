/**
 * Pure helpers of `/moderation/admin/operations` (PLAN §10.3 «Métricas operativas», WP-A4 backlog):
 * the health of one pg-boss queue and how long its oldest job has waited.
 */
import type { DeadLetterGroup, DeadLetterResult, Operations } from './api.ts';

export type OpsQueue = Operations['queues'][number];
export type QueueState = 'ok' | 'slow' | 'failing';

/** A queued job older than this means the workers are not keeping up. */
export const SLOW_QUEUE_MINUTES = 15;

/** Whole minutes the oldest queued job has waited (null when nothing waits). */
export function waitingMinutes(oldestQueuedAt: string | null, now: number): number | null {
  if (!oldestQueuedAt) return null;
  const since = Date.parse(oldestQueuedAt);
  if (Number.isNaN(since)) return null;
  return Math.max(0, Math.floor((now - since) / 60_000));
}

/**
 * `failing`: jobs failed in the last 24 h and none completed in the last hour (the queue is not
 * recovering); `slow`: failures that recover, or a job waiting longer than
 * {@link SLOW_QUEUE_MINUTES}; `ok` otherwise.
 */
export function queueState(queue: OpsQueue, now: number): QueueState {
  if (queue.failed24h > 0 && queue.completed1h === 0) return 'failing';
  const waited = waitingMinutes(queue.oldestQueuedAt, now);
  if (queue.failed24h > 0 || (waited !== null && waited >= SLOW_QUEUE_MINUTES)) return 'slow';
  return 'ok';
}

/** Totals of the queue table (the summary line under it). */
export function queueTotals(queues: readonly OpsQueue[]): { queued: number; active: number; failed24h: number } {
  return queues.reduce(
    (sum, queue) => ({
      queued: sum.queued + queue.queued,
      active: sum.active + queue.active,
      failed24h: sum.failed24h + queue.failed24h,
    }),
    { queued: 0, active: 0, failed24h: 0 },
  );
}

/** Jobs waiting in all the groups of dead letters. */
export function deadLetterTotal(groups: readonly DeadLetterGroup[]): number {
  return groups.reduce((sum, group) => sum + group.count, 0);
}

/** What a retry did, for the toast: nothing to retry, everything sent, or some rows left pending. */
export function retryOutcome(result: Pick<DeadLetterResult, 'handled' | 'failed'>): 'none' | 'done' | 'partial' {
  if (result.failed > 0) return 'partial';
  return result.handled === 0 ? 'none' : 'done';
}

/** Why a group cannot be retried (null when it can). */
export function retryBlock(group: Pick<DeadLetterGroup, 'queue' | 'retryable'>): 'unknown' | 'gone' | null {
  if (group.queue === null) return 'unknown';
  return group.retryable ? null : 'gone';
}
