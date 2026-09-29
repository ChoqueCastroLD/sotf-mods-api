/** replay-delta (PLAN §6.14 R4) between two real databases. */
import { stopTestServer } from '@sotf/db/testing';
import { afterAll, describe, expect, it } from 'vitest';
import { replayDelta, targetWatermarks } from '../src/replay.ts';
import { legacy, scalar, scratch } from './_helpers.ts';

afterAll(async () => {
  await stopTestServer();
});

describe('replayDelta', () => {
  it('copies only rows above the watermarks, in FK order, and moves the sequences', async () => {
    const damaged = await scratch({ migrate: true });
    const restored = await scratch({ migrate: true });
    try {
      for (const c of [damaged.client, restored.client]) {
        await legacy.user(c, 1);
        await legacy.mod(c, 1, 1);
        await legacy.version(c, 1, 1);
        await legacy.downloads(c, 1, 3);
      }
      // After the dump: new user, mod, version, downloads, a follow and a v2 audit row.
      await legacy.user(damaged.client, 2);
      await legacy.mod(damaged.client, 2, 2);
      await legacy.version(damaged.client, 2, 2);
      await legacy.downloads(damaged.client, 2, 4);
      await legacy.favorite(damaged.client, 1, 2, 1);
      await damaged.client.query(`INSERT INTO "AuditLog" ("action") VALUES ('mod.approved')`);

      const watermarks = await targetWatermarks(restored.client, [
        'User',
        'Mod',
        'ModVersion',
        'ModDownload',
        'ModFavorite',
        'AuditLog',
      ]);
      expect(watermarks).toMatchObject({ User: 1, Mod: 1, ModVersion: 1, ModDownload: 3, ModFavorite: 0, AuditLog: 0 });

      const dry = await replayDelta(damaged.client, restored.client, { watermarks, apply: false });
      expect(dry.find((r) => r.table === 'ModDownload')).toMatchObject({ pending: 4, inserted: 0 });
      expect(await scalar(restored.client, 'SELECT count(*) FROM "ModDownload"')).toBe(3);

      const applied = await replayDelta(damaged.client, restored.client, { watermarks, apply: true, batchSize: 2 });
      const byTable = Object.fromEntries(applied.map((r) => [r.table, r.inserted]));
      expect(byTable).toMatchObject({ User: 1, Mod: 1, ModVersion: 1, ModDownload: 4, ModFavorite: 1, AuditLog: 1 });
      expect(await scalar(restored.client, 'SELECT count(*) FROM "ModDownload"')).toBe(7);
      expect(await scalar(restored.client, `SELECT "createdAt"::text FROM "Mod" WHERE "id" = 2`)).toBe(
        await scalar(damaged.client, `SELECT "createdAt"::text FROM "Mod" WHERE "id" = 2`),
      );
      // Sequences continue after the copied ids.
      await legacy.downloads(restored.client, 2, 1);
      expect(await scalar(restored.client, 'SELECT max("id") FROM "ModDownload"')).toBe(8);
      // Re-running is harmless.
      const again = await replayDelta(damaged.client, restored.client, { watermarks, apply: true });
      expect(again.reduce((s, r) => s + r.inserted, 0)).toBe(0);
    } finally {
      await damaged.close();
      await restored.close();
    }
  });
});
