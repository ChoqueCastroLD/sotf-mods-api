import { describe, expect, it } from 'vitest';
import { parseUtcTimestamp } from '../src/client.ts';
import { loadDbEnv, testDatabaseAdminUrl } from '../src/env.ts';

describe('parseUtcTimestamp', () => {
  it('reads timestamp without time zone values as UTC', () => {
    expect(parseUtcTimestamp('2026-09-29 12:34:56.789').toISOString()).toBe('2026-09-29T12:34:56.789Z');
    expect(parseUtcTimestamp('2023-01-01 00:00:00').toISOString()).toBe('2023-01-01T00:00:00.000Z');
  });

  it('respects an explicit offset and infinities', () => {
    expect(parseUtcTimestamp('2026-09-29 12:00:00+02').toISOString()).toBe('2026-09-29T10:00:00.000Z');
    expect(parseUtcTimestamp('infinity').getTime()).toBe(8.64e15);
    expect(parseUtcTimestamp('-infinity').getTime()).toBe(-8.64e15);
  });
});

describe('loadDbEnv', () => {
  it('requires DATABASE_URL with a clear message', () => {
    expect(() => loadDbEnv({})).toThrow(/DATABASE_URL is required/);
  });

  it('uses the owner URL for migrations and the app URL for read-only tools', () => {
    expect(loadDbEnv({ DATABASE_URL: 'postgres://app@h/db', MIGRATIONS_DATABASE_URL: 'postgres://owner@h/db' })).toMatchObject({
      migrationsUrl: 'postgres://owner@h/db',
      readUrl: 'postgres://app@h/db',
    });
    expect(loadDbEnv({ DATABASE_URL: 'postgres://app@h/db' }).migrationsUrl).toBe('postgres://app@h/db');
    expect(loadDbEnv({ MIGRATIONS_DATABASE_URL: 'postgres://owner@h/db' }).readUrl).toBe('postgres://owner@h/db');
  });

  it('defaults the pg-boss schema and validates it', () => {
    expect(loadDbEnv({ DATABASE_URL: 'postgres://x@127.0.0.1/db' }).pgBossSchema).toBe('pgboss');
    expect(() => loadDbEnv({ DATABASE_URL: 'postgres://x@127.0.0.1/db', PGBOSS_SCHEMA: 'Bad-Name' })).toThrow();
  });

  it('reads the optional test server URL', () => {
    expect(testDatabaseAdminUrl({})).toBeUndefined();
    expect(testDatabaseAdminUrl({ SOTF_TEST_DATABASE_URL: ' postgres://a@b/c ' })).toBe('postgres://a@b/c');
  });
});
