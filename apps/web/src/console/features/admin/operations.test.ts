import { describe, expect, it } from 'vitest';
import {
  deadLetterTotal,
  type OpsQueue,
  queueState,
  queueTotals,
  retryBlock,
  retryOutcome,
  SLOW_QUEUE_MINUTES,
  waitingMinutes,
} from './operations.ts';

const NOW = Date.parse('2026-09-29T10:00:00.000Z');

function queue(patch: Partial<OpsQueue> = {}): OpsQueue {
  return {
    name: 'cdn.purge',
    queued: 0,
    active: 0,
    failed24h: 0,
    completed1h: 10,
    oldestQueuedAt: null,
    ...patch,
  };
}

describe('waitingMinutes', () => {
  it('is null when nothing waits or the date is invalid', () => {
    expect(waitingMinutes(null, NOW)).toBeNull();
    expect(waitingMinutes('not a date', NOW)).toBeNull();
  });

  it('counts whole minutes and never goes negative (clock skew)', () => {
    expect(waitingMinutes('2026-09-29T09:44:30.000Z', NOW)).toBe(15);
    expect(waitingMinutes('2026-09-29T10:01:00.000Z', NOW)).toBe(0);
  });
});

describe('queueState', () => {
  it('is ok when nothing failed and nothing waits long', () => {
    expect(queueState(queue(), NOW)).toBe('ok');
    expect(queueState(queue({ queued: 3, oldestQueuedAt: '2026-09-29T09:50:00.000Z' }), NOW)).toBe('ok');
  });

  it('is slow when the oldest job waited the threshold or longer', () => {
    const oldest = new Date(NOW - SLOW_QUEUE_MINUTES * 60_000).toISOString();
    expect(queueState(queue({ queued: 1, oldestQueuedAt: oldest }), NOW)).toBe('slow');
  });

  it('is slow when failures recover (jobs still complete)', () => {
    expect(queueState(queue({ failed24h: 2, completed1h: 5 }), NOW)).toBe('slow');
  });

  it('is failing when jobs fail and none completed in the last hour', () => {
    expect(queueState(queue({ failed24h: 4, completed1h: 0 }), NOW)).toBe('failing');
  });
});

describe('queueTotals', () => {
  it('adds waiting, running and failed jobs of every queue', () => {
    expect(
      queueTotals([queue({ queued: 2, active: 1, failed24h: 0 }), queue({ queued: 5, active: 0, failed24h: 3 })]),
    ).toEqual({ queued: 7, active: 1, failed24h: 3 });
    expect(queueTotals([])).toEqual({ queued: 0, active: 0, failed24h: 0 });
  });
});

describe('dead letters', () => {
  const group = (patch: { queue?: string | null; count?: number; retryable?: boolean }) => ({
    queue: 'og.render' as string | null,
    count: 3,
    firstFailedAt: '2026-09-29T08:00:00.000Z',
    lastFailedAt: '2026-09-29T09:00:00.000Z',
    lastError: null,
    retryable: true,
    ...patch,
  });

  it('adds up the jobs of every group', () => {
    expect(deadLetterTotal([])).toBe(0);
    expect(deadLetterTotal([group({ count: 80 }), group({ queue: null, count: 49 })])).toBe(129);
  });

  it('tells nothing to retry, a clean retry and a partial retry apart', () => {
    expect(retryOutcome({ handled: 0, failed: 0 })).toBe('none');
    expect(retryOutcome({ handled: 5, failed: 0 })).toBe('done');
    expect(retryOutcome({ handled: 2, failed: 3 })).toBe('partial');
    expect(retryOutcome({ handled: 0, failed: 3 })).toBe('partial');
  });

  it('only lets groups with a live source queue be retried', () => {
    expect(retryBlock(group({}))).toBeNull();
    expect(retryBlock(group({ queue: null, retryable: false }))).toBe('unknown');
    expect(retryBlock(group({ queue: 'milestones.check', retryable: false }))).toBe('gone');
  });
});
