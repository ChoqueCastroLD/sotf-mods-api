import { DOMAIN_EVENT_EXAMPLES, type DomainEvent } from '@sotf/contracts/domain-events';
import { describe, expect, it, vi } from 'vitest';
import { chunkTags, normalizeTags, purge, tagsForEvent } from './cache-tags.ts';
import { ManualClock, utcDay } from './clock.ts';
import { createCtx, hasRole } from './context.ts';
import { envFlag, envInt, SERVER_PORTS, withDefaultPort } from './env.ts';
import { DomainError, errors, isDomainError, rateLimitDetail } from './errors.ts';
import { dailySalt, ipHash, keyedHash, logHash, normalizeIp } from './hashing.ts';
import { isUuid, newId } from './ids.ts';
import { debounceKey, type JobSender, Jobs, stableStringify } from './jobs.ts';
import { silentLogger } from './logger.ts';
import { CacheRegistry, TaggedCache } from './lru.ts';
import { decodeCacheInvalidation, decodeRealtimeMessage, encodeRealtimeMessage } from './notify.ts';
import { queueConfig } from './queues.ts';

const SECRET = 'x'.repeat(48);

function fakeSender() {
  const calls: Array<{ fn: 'send' | 'sendDebounced'; args: unknown[] }> = [];
  const sender: JobSender = {
    send: (async (...args: unknown[]) => {
      calls.push({ fn: 'send', args });
      return 'job-id';
    }) as JobSender['send'],
    sendDebounced: (async (...args: unknown[]) => {
      calls.push({ fn: 'sendDebounced', args });
      return 'job-id';
    }) as JobSender['sendDebounced'],
  };
  return { sender, calls };
}

describe('DomainError', () => {
  it('takes the status of its code and checks the class', () => {
    const error = new DomainError('NOT_FOUND', undefined, 'Mod not found');
    expect(error.httpStatus).toBe(404);
    expect(error.isClientError).toBe(true);
    expect(isDomainError(error)).toBe(true);
    expect(new DomainError('VALIDATION_FAILED', 400, 'bad').httpStatus).toBe(400);
    expect(() => new DomainError('NOT_FOUND', 500, 'x')).toThrow(TypeError);
  });

  it('shorthands carry meta', () => {
    const limited = errors.rateLimited(29.2);
    expect(limited.code).toBe('RATE_LIMITED');
    expect(limited.meta.retryAfter).toBe(29.2);
    expect(limited.detail).toBe('Kelvin needs a break: try again in 30 s');
    expect(rateLimitDetail(0)).toContain('1 s');
    expect(errors.validation('bad', [{ path: 'a', message: 'b' }]).meta.errors).toHaveLength(1);
  });
});

describe('hashing', () => {
  it('ipHash is stable within a day and changes across days', () => {
    const a = ipHash(SECRET, '203.0.113.7', '2026-09-30');
    expect(a).toMatch(/^[0-9a-f]{32}$/);
    expect(ipHash(SECRET, ' 203.0.113.7 ', '2026-09-30')).toBe(a);
    expect(ipHash(SECRET, '::ffff:203.0.113.7', '2026-09-30')).toBe(a);
    expect(ipHash(SECRET, '203.0.113.7', '2026-10-01')).not.toBe(a);
    expect(ipHash(`${SECRET}y`, '203.0.113.7', '2026-09-30')).not.toBe(a);
    expect(() => dailySalt(SECRET, '2026-9-1')).toThrow();
  });

  it('memoises the daily salt per secret and day without mixing them', () => {
    const salt = dailySalt(SECRET, '2026-09-30');
    expect(dailySalt(SECRET, '2026-09-30')).toBe(salt);
    expect(dailySalt(`${SECRET}y`, '2026-09-30').equals(salt)).toBe(false);
    // More days than the memo holds: values stay right after evictions.
    const days = Array.from({ length: 12 }, (_, i) => `2026-10-${String(i + 1).padStart(2, '0')}`);
    const first = days.map((d) => dailySalt(SECRET, d).toString('hex'));
    expect(new Set(first).size).toBe(12);
    expect(days.map((d) => dailySalt(SECRET, d).toString('hex'))).toEqual(first);
    expect(ipHash(SECRET, '203.0.113.7', '2026-09-30')).toBe(ipHash(SECRET, '203.0.113.7', '2026-09-30'));
  });

  it('normalizes IPs', () => {
    expect(normalizeIp('FE80::1%eth0')).toBe('fe80::1');
    expect(normalizeIp('::ffff:10.0.0.1')).toBe('10.0.0.1');
    expect(normalizeIp('2001:db8::1')).toBe('2001:db8::1');
  });

  it('keyedHash and logHash', () => {
    expect(keyedHash(SECRET, 'chat', '7656119|name')).toMatch(/^[0-9a-f]{64}$/);
    expect(keyedHash(SECRET, 'chat', 'a')).not.toBe(keyedHash(SECRET, 'other', 'a'));
    expect(logHash('Survivor@Example.test')).toBe(logHash(' survivor@example.test'));
    expect(logHash(1)).toHaveLength(12);
  });
});

describe('ids and clock', () => {
  it('uuid v7', () => {
    const a = newId();
    const b = newId();
    expect(isUuid(a)).toBe(true);
    expect(a[14]).toBe('7');
    expect(a < b).toBe(true);
  });

  it('manual clock', () => {
    const clock = new ManualClock('2026-09-30T23:59:59.000Z');
    expect(utcDay(clock.now())).toBe('2026-09-30');
    clock.advance(1000);
    expect(utcDay(clock.now())).toBe('2026-10-01');
  });
});

describe('Jobs', () => {
  it('builds events with a uuid v7 id and the clock time', () => {
    const { sender } = fakeSender();
    const jobs = new Jobs(sender, { clock: new ManualClock('2026-09-30T10:00:00.000Z') });
    const event = jobs.event('user.email_verified', { userId: 3 }, { actorId: 3 });
    expect(isUuid(event.id)).toBe(true);
    expect(event.occurredAt).toBe('2026-09-30T10:00:00.000Z');
    expect(() => jobs.event('user.email_verified', { userId: -1 } as never, { actorId: null })).toThrow();
  });

  it('emit sends the event with its id through the transaction adapter', async () => {
    const { sender, calls } = fakeSender();
    const jobs = new Jobs(sender);
    const tx = { execute: vi.fn(async () => ({ rows: [] })) };
    const event = jobs.event('mod.updated', DOMAIN_EVENT_EXAMPLES['mod.updated'], { actorId: 12 });
    await jobs.emit(tx as never, event as DomainEvent);
    expect(calls).toHaveLength(1);
    const [queue, data, options] = (calls[0] as { args: unknown[] }).args as [
      string,
      DomainEvent,
      { id: string; db: unknown },
    ];
    expect(queue).toBe('domain.event');
    expect(data.id).toBe(event.id);
    expect(options.id).toBe(event.id);
    expect(options.db).toBeDefined();
  });

  it('enqueue validates payloads and debounces coalescing queues', async () => {
    const { sender, calls } = fakeSender();
    const jobs = new Jobs(sender);
    await expect(jobs.enqueue('cdn.purge', { tags: [], reason: 'x' })).rejects.toThrow();
    await jobs.enqueue('cdn.purge', { tags: ['home', 'mod:1'], reason: 'x' });
    await jobs.enqueue('stats.rollup', {}, { singletonKey: 'k', startAfter: 5 });
    expect(calls[0]?.fn).toBe('sendDebounced');
    expect(calls[0]?.args[3]).toBe(20);
    expect(calls[0]?.args[4]).toBe(debounceKey('cdn.purge', { tags: ['mod:1', 'home'], reason: 'y' }));
    expect(calls[1]?.fn).toBe('send');
    expect(calls[1]?.args[2]).toMatchObject({ singletonKey: 'k', startAfter: 5 });
  });

  it('stableStringify sorts keys and drops undefined', () => {
    expect(stableStringify({ b: 1, a: [2, { d: undefined, c: 3 }] })).toBe('{"a":[2,{"c":3}],"b":1}');
  });
});

describe('cache tags', () => {
  const event = (type: keyof typeof DOMAIN_EVENT_EXAMPLES) =>
    ({
      id: newId(),
      type,
      occurredAt: '2026-09-30T00:00:00.000Z',
      actorId: null,
      payload: DOMAIN_EVENT_EXAMPLES[type],
    }) as DomainEvent;

  it('maps events to the tags of PLAN §2.7', () => {
    expect(tagsForEvent(event('version.published'))).toEqual(
      expect.arrayContaining(['mod:20', 'user:12', 'home', 'feed', 'sitemap', 'search-index', 'legacy']),
    );
    expect(tagsForEvent(event('comment.created'))).toEqual(['mod:20']);
    expect(tagsForEvent(event('compat.aggregate_changed'))).toEqual(expect.arrayContaining(['compat', 'home']));
    expect(tagsForEvent(event('kit.updated'))).toEqual(expect.arrayContaining(['list:kits']));
    expect(tagsForEvent(event('user.registered'))).toEqual([]);
    for (const type of Object.keys(DOMAIN_EVENT_EXAMPLES) as Array<keyof typeof DOMAIN_EVENT_EXAMPLES>) {
      for (const tag of tagsForEvent(event(type))) expect(normalizeTags([tag])).toEqual([tag]);
    }
  });

  it('normalizes and chunks tags', () => {
    expect(normalizeTags(['home', 'home', 'bad tag', 'mod:0', 'mod:3'])).toEqual(['home', 'mod:3']);
    expect(chunkTags(Array.from({ length: 65 }, (_, i) => i)).map((c) => c.length)).toEqual([30, 30, 5]);
  });

  it('purge enqueues one debounced job per batch', async () => {
    const { sender, calls } = fakeSender();
    const jobs = new Jobs(sender);
    const tags = Array.from({ length: 31 }, (_, i) => `mod:${i + 1}`);
    const result = await purge(jobs, [...tags, 'nope'], 'event:mod.updated');
    expect(result.batches).toBe(2);
    expect(result.tags).toHaveLength(31);
    expect(calls).toHaveLength(2);
    const none = await purge(jobs, ['bad'], 'x');
    expect(none.batches).toBe(0);
  });
});

describe('TaggedCache', () => {
  it('evicts by tag and deduplicates loads', async () => {
    const cache = new TaggedCache<string>({ name: 'mods', ttlMs: 60_000 });
    cache.set('a', 'A', ['mod:1', 'home']);
    cache.set('b', 'B', ['mod:2']);
    expect(cache.get('a')).toBe('A');
    expect(cache.invalidateTags(['home'])).toBe(1);
    expect(cache.get('a')).toBeUndefined();
    expect(cache.get('b')).toBe('B');
    let loads = 0;
    const load = async () => {
      loads += 1;
      return { value: 'C', tags: ['mod:3'] };
    };
    const [x, y] = await Promise.all([cache.getOrLoad('c', load), cache.getOrLoad('c', load)]);
    expect([x, y, loads]).toEqual(['C', 'C', 1]);
    expect(cache.get('c')).toBe('C');
  });

  it('does not store a load that overlapped an invalidation', async () => {
    const cache = new TaggedCache<string>({ name: 'x' });
    let release: () => void = () => undefined;
    const pending = cache.getOrLoad(
      'k',
      () =>
        new Promise((resolve) => {
          release = () => resolve({ value: 'stale', tags: ['mod:1'] });
        }),
    );
    cache.invalidateTags(['mod:1']);
    release();
    expect(await pending).toBe('stale');
    expect(cache.get('k')).toBeUndefined();
  });

  it('registry invalidates every cache', () => {
    const registry = new CacheRegistry();
    const a = registry.create<string>({ name: 'a' });
    const b = registry.create<string>({ name: 'b' });
    expect(registry.create<string>({ name: 'a' })).toBe(a);
    a.set('1', 'x', ['home']);
    b.set('1', 'y', ['mod:1']);
    expect(registry.invalidate(['home', 'mod:1'])).toBe(2);
    a.set('2', 'z');
    expect(registry.invalidate('*')).toBe(1);
  });
});

describe('notify payloads', () => {
  it('encodes and decodes realtime messages', () => {
    const text = encodeRealtimeMessage({ channel: 'user:5', event: 'mod.updated', id: '9', data: { modId: 4 } });
    expect(decodeRealtimeMessage(text)).toEqual({
      channel: 'user:5',
      event: 'mod.updated',
      id: '9',
      data: { modId: 4 },
    });
    expect(() =>
      encodeRealtimeMessage({ channel: 'user:x' as never, event: 'mod.updated', id: '1', data: { modId: 1 } }),
    ).toThrow();
    expect(decodeRealtimeMessage('{"channel":"user:1","event":"nope","id":"1","data":{}}')).toBeNull();
    expect(decodeRealtimeMessage('not json')).toBeNull();
  });

  it('decodes cache invalidations', () => {
    expect(decodeCacheInvalidation('*')).toBe('*');
    expect(decodeCacheInvalidation('{"tags":["home"]}')).toEqual(['home']);
    expect(decodeCacheInvalidation('{"tags":[1]}')).toBeNull();
  });
});

describe('context and env helpers', () => {
  it('createCtx and roles', () => {
    const ctx = createCtx(
      { db: {} as never, jobs: {} as never, log: silentLogger(), appSecret: SECRET },
      { requestId: 'r1', actor: { userId: 1, role: 'moderator', emailVerified: true } },
    );
    expect(ctx.locale).toBe('en');
    expect(ctx.requestId).toBe('r1');
    expect(hasRole(ctx.actor, 'moderator')).toBe(true);
    expect(hasRole(ctx.actor, 'admin')).toBe(false);
    expect(hasRole(null, 'user')).toBe(false);
  });

  it('env flags and ints', () => {
    expect(envFlag(true).parse(undefined)).toBe(true);
    expect(envFlag(true).parse('FALSE')).toBe(false);
    expect(envFlag(false).safeParse('maybe').success).toBe(false);
    expect(envInt(10, 1, 20).parse('')).toBe(10);
    expect(envInt(10, 1, 20).safeParse('30').success).toBe(false);
  });

  it('queue config applies overrides', () => {
    expect(queueConfig('backfill.run')).toMatchObject({ policy: 'singleton', retryLimit: 0 });
    expect(queueConfig('stats.rollup').retryBackoff).toBe(true);
    expect(queueConfig('awards.mod-of-week').policy).toBe('singleton');
    expect(queueConfig('milestones.check').policy).toBe('singleton');
  });
});

describe('withDefaultPort', () => {
  it('uses the 47xxx development ports unless NODE_ENV=production', () => {
    expect(withDefaultPort({}, 'api').PORT).toBe('47301');
    expect(withDefaultPort({ NODE_ENV: 'test' }, 'worker').PORT).toBe('47302');
    expect(withDefaultPort({ NODE_ENV: 'production' }, 'api').PORT).toBe(String(SERVER_PORTS.api.production));
    expect(withDefaultPort({ NODE_ENV: 'production', PORT: '' }, 'worker').PORT).toBe('3002');
  });

  it('keeps an explicit PORT', () => {
    expect(withDefaultPort({ NODE_ENV: 'production', PORT: '8080' }, 'api').PORT).toBe('8080');
    expect(withDefaultPort({ PORT: '9000' }, 'api').PORT).toBe('9000');
  });
});
