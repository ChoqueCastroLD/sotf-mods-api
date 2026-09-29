import { afterAll, describe, expect, it } from 'vitest';
import { takeLegacySnapshot } from '../scripts/snapshot-legacy-catalog.ts';
import { loadLegacyCatalog } from '../src/guard/snapshot.ts';
import { stopTestServer } from '../src/testing.ts';

afterAll(async () => {
  await stopTestServer();
});

describe('legacy-catalog.json', () => {
  it('equals the catalog that 0000_legacy_baseline.sql produces on PostgreSQL 16', async () => {
    const fresh = await takeLegacySnapshot();
    const committed = loadLegacyCatalog();
    expect({ ...fresh, postgres: '' }).toEqual({ ...committed, postgres: '' });
  });
});
