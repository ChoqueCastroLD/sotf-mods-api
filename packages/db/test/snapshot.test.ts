import { describe, expect, it } from 'vitest';
import { loadLegacyCatalog } from '../src/guard/snapshot.ts';
import { loadMigrations } from '../src/migrate/files.ts';
import { BASELINE_NAME } from '../src/migrate/runner.ts';

describe('legacy-catalog.json', () => {
  const snapshot = loadLegacyCatalog();

  it('was taken from the current baseline (regenerate with db:catalog:snapshot after changing 0000)', () => {
    const baseline = loadMigrations().find((m) => m.name === BASELINE_NAME);
    expect(snapshot.source).toBe(`${BASELINE_NAME}.sql`);
    expect(snapshot.sourceChecksum).toBe(baseline?.checksum);
    expect(snapshot.postgres).toMatch(/^16\./);
  });

  it('freezes the 16 legacy tables', () => {
    expect(Object.keys(snapshot.tables).sort()).toEqual(
      [
        'Category',
        'Comment',
        'KelvinGPTMessages',
        'LoginAttempt',
        'Mod',
        'ModDownload',
        'ModFavorite',
        'ModImage',
        'ModReview',
        'ModVersion',
        'PasswordResetToken',
        'PendingMention',
        'Tag',
        'Token',
        'User',
        '_ModToTag',
      ].sort(),
    );
    expect(snapshot.tables.User?.columns.updatedAt?.default).toBeNull();
    expect(snapshot.tables.Mod?.columns.isNSFW?.type).toBe('boolean');
  });
});
