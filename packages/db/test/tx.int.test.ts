import { eq } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { siteStat } from '../src/schema/_index.gen.ts';
import { startTestDb, stopTestServer, type TestDb } from '../src/testing.ts';
import { withTx } from '../src/tx.ts';

let t: TestDb;
beforeAll(async () => {
  t = await startTestDb();
});
afterAll(async () => {
  await t.stop();
  await stopTestServer();
});

const statValue = async (key: string) => (await t.db.select().from(siteStat).where(eq(siteStat.key, key)))[0]?.value;

describe('withTx', () => {
  it('commits on success and rolls back on error', async () => {
    await withTx(t.db, async (tx) => {
      await tx.insert(siteStat).values({ key: 'committed', value: 1 });
    });
    expect(await statValue('committed')).toBe(1);

    await expect(
      withTx(t.db, async (tx) => {
        await tx.insert(siteStat).values({ key: 'rolled-back', value: 1 });
        throw new Error('boom');
      }),
    ).rejects.toThrow('boom');
    expect(await statValue('rolled-back')).toBeUndefined();
  });

  it('retries serialization failures and re-runs the whole callback', async () => {
    let attempts = 0;
    const result = await withTx(
      t.db,
      async (tx) => {
        attempts += 1;
        await tx.insert(siteStat).values({ key: `retry-${attempts}`, value: attempts });
        if (attempts < 3) throw Object.assign(new Error('could not serialize access'), { code: '40001' });
        return attempts;
      },
      { isolationLevel: 'serializable' },
    );
    expect(result).toBe(3);
    expect(await statValue('retry-1')).toBeUndefined();
    expect(await statValue('retry-3')).toBe(3);
  });

  it('gives up after the configured retries', async () => {
    let attempts = 0;
    await expect(
      withTx(
        t.db,
        async () => {
          attempts += 1;
          throw Object.assign(new Error('deadlock detected'), { code: '40P01' });
        },
        { retries: 1 },
      ),
    ).rejects.toThrow('deadlock detected');
    expect(attempts).toBe(2);
  });

  it('supports read-only transactions', async () => {
    await expect(
      withTx(t.db, (tx) => tx.insert(siteStat).values({ key: 'ro', value: 1 }), { accessMode: 'read only' }),
    ).rejects.toMatchObject({ cause: expect.objectContaining({ code: '25006' }) });
  });
});
