import { DOMAIN_EVENT_EXAMPLES } from '@sotf/contracts/domain-events';
import { createCtx, Jobs, silentLogger } from '@sotf/core';
import { describe, expect, it } from 'vitest';
import { disabledByCoexist, isQueueEnabled } from '../src/coexist.ts';
import { defineJob, defineJobGroup, type JobContext, onEvent } from '../src/define-job.ts';
import { parseWorkerEnv } from '../src/env.ts';
import { collect, dispatchEvent } from '../src/runtime.ts';

const context: JobContext = {
  ctx: createCtx(
    {
      db: {} as never,
      jobs: new Jobs({ send: async () => null, sendDebounced: async () => null }),
      log: silentLogger(),
      appSecret: 'x'.repeat(40),
    },
    { requestId: 'job-1' },
  ),
  job: { id: 'job-1', queue: 'domain.event', retryCount: 0, signal: new AbortController().signal },
};

const event = {
  id: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d',
  type: 'mod.updated',
  occurredAt: '2026-09-30T00:00:00.000Z',
  actorId: 12,
  payload: DOMAIN_EVENT_EXAMPLES['mod.updated'],
};

describe('collect', () => {
  it('rejects two handlers for one queue and duplicate subscriber names', () => {
    const a = defineJobGroup({
      name: 'a',
      jobs: [defineJob({ queue: 'stats.rollup', handler: async () => undefined })],
    });
    const b = defineJobGroup({
      name: 'b',
      jobs: [defineJob({ queue: 'stats.rollup', handler: async () => undefined })],
    });
    expect(() => collect([a, b])).toThrow(/stats.rollup/);
    const s = onEvent({ name: 'same', types: '*', handler: async () => undefined });
    expect(() =>
      collect([defineJobGroup({ name: 'c', subscribers: [s] }), defineJobGroup({ name: 'd', subscribers: [s] })]),
    ).toThrow(/same/);
    expect(() => defineJobGroup({ name: 'Bad Name' })).toThrow();
  });
});

describe('dispatchEvent', () => {
  it('runs matching subscribers in order and reports them', async () => {
    const order: string[] = [];
    const subscribers = [
      onEvent({ name: 'one', types: ['mod.updated'], handler: async () => void order.push('one') }),
      onEvent({ name: 'skip', types: ['kit.created'], handler: async () => void order.push('skip') }),
      onEvent({ name: 'all', types: '*', handler: async () => void order.push('all') }),
    ];
    expect(await dispatchEvent(subscribers, event, context)).toEqual({ handled: ['one', 'all'] });
    expect(order).toEqual(['one', 'all']);
  });

  it('runs every subscriber and rethrows the first failure', async () => {
    const order: string[] = [];
    const subscribers = [
      onEvent({
        name: 'boom',
        types: '*',
        handler: async () => {
          throw new Error('boom');
        },
      }),
      onEvent({ name: 'after', types: '*', handler: async () => void order.push('after') }),
    ];
    await expect(dispatchEvent(subscribers, event, context)).rejects.toThrow('boom');
    expect(order).toEqual(['after']);
  });

  it('rejects malformed events', async () => {
    await expect(dispatchEvent([], { ...event, type: 'nope' }, context)).rejects.toThrow();
  });
});

describe('coexistence and env', () => {
  it('disables the post-cut-over queues while coexisting', () => {
    expect(isQueueEnabled('legacy.counters', true)).toBe(false);
    expect(isQueueEnabled('legacy.mentions', true)).toBe(false);
    expect(isQueueEnabled('legacy.counters', false)).toBe(true);
    expect(isQueueEnabled('stats.rollup', true)).toBe(true);
    expect(disabledByCoexist(false)).toEqual([]);
  });

  it('validates the environment', () => {
    const base = {
      PUBLIC_SITE_URL: 'https://sotf-mods.com/',
      INTERNAL_SECRET: 'i'.repeat(40),
      APP_SECRET: 'a'.repeat(40),
      DATABASE_URL: 'postgres://sotf:sotf@127.0.0.1:47432/sotf',
    };
    const env = parseWorkerEnv(base);
    expect(env).toMatchObject({
      PORT: 3002,
      DB_POOL_MAX: 5,
      LEGACY_COEXIST: true,
      PUBLIC_SITE_URL: 'https://sotf-mods.com',
    });
    expect(() => parseWorkerEnv({ ...base, APP_SECRET: 'short' })).toThrow(/APP_SECRET/);
    expect(() => parseWorkerEnv({ ...base, TZ: 'Europe/Madrid' })).toThrow(/TZ/);
  });
});
