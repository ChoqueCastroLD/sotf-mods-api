import { describe, expect, it, vi } from 'vitest';
import { type JobSender, Jobs } from '../kernel/jobs.ts';
import { deadLetterLine } from './alerts.ts';
import { DEAD_LETTER_ERROR_MAX, deadLetterTarget, isRetryable, trimError } from './dead-letter.ts';

describe('dead letter helpers', () => {
  it('keeps the error to one line of at most 200 characters', () => {
    expect(trimError(null)).toBeNull();
    expect(trimError('  \n ')).toBeNull();
    expect(trimError('Request failed\n  with status 401 ')).toBe('Request failed with status 401');
    const long = trimError('x'.repeat(500));
    expect(long).toHaveLength(DEAD_LETTER_ERROR_MAX);
    expect(long?.endsWith('…')).toBe(true);
  });

  it('retries only queues that still exist', () => {
    expect(isRetryable('og.render')).toBe(true);
    expect(isRetryable('translation.mod')).toBe(true);
    expect(isRetryable('milestones.check')).toBe(false);
    expect(isRetryable('dead-letter')).toBe(false);
    expect(isRetryable(null)).toBe(false);
  });

  it('turns a discard request into a target and asks for the queue when the scope needs it', () => {
    expect(deadLetterTarget({ scope: 'all' })).toEqual({ kind: 'all' });
    expect(deadLetterTarget({ scope: 'unknown' })).toEqual({ kind: 'unknown' });
    expect(deadLetterTarget({ scope: 'queue', queue: 'og.render' })).toEqual({ kind: 'queue', queue: 'og.render' });
    expect(() => deadLetterTarget({ scope: 'queue' })).toThrow(/queue/i);
  });

  it('describes a group in one plain line for the alert email', () => {
    const base = {
      firstFailedAt: '2026-09-30T08:00:00.000Z',
      lastFailedAt: '2026-10-01T17:20:45.000Z',
      retryable: true,
    };
    expect(deadLetterLine({ ...base, queue: 'translation.mod', count: 80, lastError: 'status 401' })).toBe(
      'translation.mod: 80 jobs, last failure 2026-10-01 17:20 UTC, last error: status 401',
    );
    expect(deadLetterLine({ ...base, queue: null, count: 1, lastError: null, retryable: false })).toBe(
      'Unknown queue: 1 job, last failure 2026-10-01 17:20 UTC, no error message',
    );
  });
});

describe('Jobs.requeue', () => {
  const sender = () => {
    const send = vi.fn(async () => 'new-id');
    const sendDebounced = vi.fn(async () => null);
    return { send, sendDebounced, jobs: new Jobs({ send, sendDebounced } as unknown as JobSender) };
  };

  it('sends the original data back to its queue', async () => {
    const { send, jobs } = sender();
    expect(await jobs.requeue('og.render', { entityType: 'mod', entityId: 20 })).toBe('new-id');
    expect(send).toHaveBeenCalledWith('og.render', { entityType: 'mod', entityId: 20 }, {});
  });

  it('rejects data that no longer fits the queue and reports a debounced duplicate as null', async () => {
    const { send, jobs } = sender();
    await expect(jobs.requeue('og.render', { entityType: 'nope' })).rejects.toThrow();
    expect(send).not.toHaveBeenCalled();
    expect(await jobs.requeue('cdn.purge', { tags: ['home'], reason: 'x' })).toBeNull();
  });
});
