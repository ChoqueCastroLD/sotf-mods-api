/**
 * The shared LISTEN connection against PostgreSQL 16: delivery by channel, cache invalidation via
 * NOTIFY (only after commit) and reconnection after the backend is terminated.
 */

import { withTx } from '@sotf/db';
import { startTestDb, type TestDb } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { PgListener } from './listener.ts';
import { CacheRegistry } from './lru.ts';
import { decodeRealtimeMessage, publishCacheInvalidation, publishRealtime } from './notify.ts';

let db: TestDb;
let listener: PgListener;

async function waitFor(probe: () => boolean, timeoutMs = 10_000): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  while (!probe()) {
    if (Date.now() > deadline) throw new Error('timed out');
    await new Promise((resolve) => setTimeout(resolve, 20));
  }
}

beforeAll(async () => {
  db = await startTestDb();
  listener = new PgListener({ connectionString: db.url, minDelayMs: 50, maxDelayMs: 200 });
});

afterAll(async () => {
  await listener?.stop();
  await db?.stop();
});

describe('PgListener', () => {
  it('delivers notifications by channel, after commit only', async () => {
    const received: string[] = [];
    listener.on('events', (payload) => received.push(payload));
    await listener.start();
    expect(listener.connected).toBe(true);

    await expect(
      withTx(db.db, async (tx) => {
        await publishRealtime(tx, { channel: 'user:1', event: 'mod.updated', id: 'rolled-back', data: { modId: 1 } });
        throw new Error('rollback');
      }),
    ).rejects.toThrow('rollback');
    await publishRealtime(db.db, { channel: 'user:1', event: 'mod.updated', id: 'ok', data: { modId: 1 } });
    await waitFor(() => received.length > 0);
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(received.map((p) => decodeRealtimeMessage(p)?.id)).toEqual(['ok']);
  });

  it('invalidates attached caches by tag and clears them after a reconnection', async () => {
    const registry = new CacheRegistry();
    const cache = registry.create<string>({ name: 'mods' });
    registry.attach(listener);
    cache.set('a', 'A', ['mod:1']);
    cache.set('b', 'B', ['mod:2']);
    await publishCacheInvalidation(db.db, ['mod:1']);
    await waitFor(() => cache.get('a') === undefined);
    expect(cache.get('b')).toBe('B');

    let reconnected = 0;
    listener.onReconnect(() => {
      reconnected += 1;
    });
    await db.db.execute(
      sql`SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE application_name = 'sotf-listen' AND pid <> pg_backend_pid()`,
    );
    await waitFor(() => reconnected === 1 && listener.connected);
    expect(cache.size).toBe(0);
    const after: string[] = [];
    listener.on('cache', (payload) => after.push(payload));
    await publishCacheInvalidation(db.db, '*');
    await waitFor(() => after.includes('*'));
  });
});
