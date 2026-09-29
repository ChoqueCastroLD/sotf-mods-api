import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { checksumOf, loadMigrations, MigrationFileError, parseDirectives } from '../src/migrate/files.ts';

const dirs: string[] = [];
function tempDir(files: Record<string, string>): string {
  const dir = mkdtempSync(join(tmpdir(), 'sotf-migrations-'));
  dirs.push(dir);
  for (const [name, content] of Object.entries(files)) writeFileSync(join(dir, name), content);
  return dir;
}
afterEach(() => {
  for (const dir of dirs.splice(0)) rmSync(dir, { recursive: true, force: true });
});

const BASELINE = '-- sotf:baseline\nCREATE TABLE "User" (id int);\n';

describe('the repository migrations', () => {
  const migrations = loadMigrations();

  it('start with the legacy baseline and are strictly ordered', () => {
    expect(migrations[0]?.name).toBe('0000_legacy_baseline');
    expect(migrations[0]?.directives.baseline).toBe(true);
    const numbers = migrations.map((m) => m.number);
    expect(numbers).toEqual([...numbers].sort((a, b) => a - b));
    expect(new Set(numbers).size).toBe(numbers.length);
  });

  it('stay inside the W1/W2 numbering range and every one after the baseline has a down file', () => {
    for (const m of migrations) {
      expect(m.number).toBeLessThan(1300);
      if (m.number > 0) expect(m.down, m.file).not.toBeNull();
    }
  });

  it('put every CONCURRENTLY index in its own no-transaction file', () => {
    for (const m of migrations) {
      if (/\bCONCURRENTLY\b/.test(m.sql)) expect(m.directives.noTransaction, m.file).toBe(true);
    }
    const deferred = migrations.filter((m) => m.directives.precondition).map((m) => m.name);
    expect(deferred).toEqual([
      '0038_idx_modfavorite_user_mod_key',
      '0039_idx_modversion_mod_version_key',
      '0040_idx_modversion_latest_key',
      '0045_idx_user_email_normalized_key',
    ]);
  });
});

describe('loadMigrations', () => {
  it('rejects badly named files, duplicated numbers and orphan down files', () => {
    expect(() =>
      loadMigrations(tempDir({ '0000_legacy_baseline.sql': BASELINE, '0001-Bad.sql': 'SELECT 1;' })),
    ).toThrow(MigrationFileError);
    expect(() =>
      loadMigrations(
        tempDir({ '0000_legacy_baseline.sql': BASELINE, '0001_a.sql': 'SELECT 1;', '0001_b.sql': 'SELECT 1;' }),
      ),
    ).toThrow(/already used/);
    expect(() =>
      loadMigrations(tempDir({ '0000_legacy_baseline.sql': BASELINE, '0002_x.down.sql': 'SELECT 1;' })),
    ).toThrow(/without a matching migration/);
  });

  it('requires 0000 to be the baseline and nothing else to be one', () => {
    expect(() => loadMigrations(tempDir({ '0000_legacy_baseline.sql': 'SELECT 1;' }))).toThrow(
      /must be the legacy baseline/,
    );
    expect(() =>
      loadMigrations(tempDir({ '0000_legacy_baseline.sql': BASELINE, '0001_x.sql': '-- sotf:baseline\nSELECT 1;' })),
    ).toThrow(/only migration 0000/);
  });
});

describe('parseDirectives', () => {
  it('reads the header block only', () => {
    const d = parseDirectives(
      '-- sotf:no-transaction\n-- sotf:precondition: NOT EXISTS (SELECT 1)\n-- sotf:statement-timeout: 10min\nSELECT 1;\n-- sotf:baseline\n',
      'x.sql',
    );
    expect(d).toMatchObject({
      noTransaction: true,
      precondition: 'NOT EXISTS (SELECT 1)',
      statementTimeout: '10min',
      lockTimeout: '3s',
      baseline: false,
    });
  });

  it('rejects unknown directives and malformed intervals', () => {
    expect(() => parseDirectives('-- sotf:yolo\nSELECT 1;', 'x.sql')).toThrow(/unknown directive/);
    expect(() => parseDirectives('-- sotf:lock-timeout: soon\nSELECT 1;', 'x.sql')).toThrow(/must look like/);
    expect(() => parseDirectives('-- sotf:allow-legacy-delete:\nSELECT 1;', 'x.sql')).toThrow(/needs a reason/);
  });
});

describe('checksumOf', () => {
  it('ignores CRLF line endings', () => {
    expect(checksumOf('SELECT 1;\r\nSELECT 2;\r\n')).toBe(checksumOf('SELECT 1;\nSELECT 2;\n'));
    expect(checksumOf('SELECT 1;')).not.toBe(checksumOf('SELECT 2;'));
  });
});
