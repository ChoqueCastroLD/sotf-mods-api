/**
 * Coexistence mode (PLAN §2.9 "Modo de coexistencia", §6.13): while `LEGACY_COEXIST=true` (before
 * the cut-over) the legacy crons still own the legacy counters and `PendingMention`, so the worker
 * neither runs nor schedules the post-cut-over queues. At the cut-over the variable becomes false.
 */
import { type JobQueue, POST_CUTOVER_QUEUES } from '@sotf/contracts/jobs';

export function isQueueEnabled(queue: JobQueue, legacyCoexist: boolean): boolean {
  return !(legacyCoexist && POST_CUTOVER_QUEUES.includes(queue));
}

/** Queues disabled by coexistence mode. */
export function disabledByCoexist(legacyCoexist: boolean): readonly JobQueue[] {
  return legacyCoexist ? POST_CUTOVER_QUEUES : [];
}
