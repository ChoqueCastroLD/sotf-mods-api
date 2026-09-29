/**
 * Environment of the @sotf/db command-line tools (PLAN §2.6: `process.env` is only read here).
 * Libraries never read the environment: callers pass connection strings explicitly. The CLIs call
 * `loadRootDotEnv()` first, so a local `.env` at the repository root works (variables already set
 * in the environment win).
 */
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';

const MISSING_URL = 'DATABASE_URL is required (e.g. postgres://sotf:sotf@127.0.0.1:47432/sotf)';
const url = z.string().trim().min(1).optional();

const schema = z
  .object({
    /** Application credentials (role sotf_v2_app in production); used by the read-only guard. */
    DATABASE_URL: url,
    /** Owner credentials, only for the migrate task (PLAN §11.4); falls back to DATABASE_URL. */
    MIGRATIONS_DATABASE_URL: url,
    /** Overrides packages/db/migrations (bundled migrate job). */
    MIGRATIONS_DIR: z.string().min(1).optional(),
    /** Schema of pg-boss (installed by db:migrate). */
    PGBOSS_SCHEMA: z
      .string()
      .regex(/^[a-z_][a-z0-9_]*$/)
      .default('pgboss'),
  })
  .refine((env) => Boolean(env.DATABASE_URL || env.MIGRATIONS_DATABASE_URL), {
    message: MISSING_URL,
    path: ['DATABASE_URL'],
  });

export interface DbEnv {
  /** Connection used by db:migrate and db:baseline (owner). */
  migrationsUrl: string;
  /** Connection used by read-only tools such as db:guard. */
  readUrl: string;
  migrationsDir: string | undefined;
  pgBossSchema: string;
}

export function loadDbEnv(source: NodeJS.ProcessEnv = process.env): DbEnv {
  const parsed = schema.safeParse(source);
  if (!parsed.success) {
    const problems = parsed.error.issues.map((i) => `  - ${i.path.join('.') || 'env'}: ${i.message}`).join('\n');
    throw new Error(`invalid environment for @sotf/db:\n${problems}`);
  }
  const env = parsed.data;
  const migrationsUrl = (env.MIGRATIONS_DATABASE_URL ?? env.DATABASE_URL) as string;
  return {
    migrationsUrl,
    readUrl: env.DATABASE_URL ?? migrationsUrl,
    migrationsDir: env.MIGRATIONS_DIR,
    pgBossSchema: env.PGBOSS_SCHEMA,
  };
}

/**
 * Admin connection string of an existing PostgreSQL 16 server for the integration tests
 * (`SOTF_TEST_DATABASE_URL`, e.g. a CI service container). When unset, `startTestDb` starts a
 * disposable Testcontainers `postgres:16-alpine`.
 */
export function testDatabaseAdminUrl(source: NodeJS.ProcessEnv = process.env): string | undefined {
  const value = source.SOTF_TEST_DATABASE_URL?.trim();
  return value ? value : undefined;
}

/**
 * Loads `<repo>/.env` into process.env when it exists (never overrides variables already set).
 * `SOTF_NO_DOTENV=1` disables it (tests that must control the whole environment).
 */
export function loadRootDotEnv(path: string = fileURLToPath(new URL('../../../.env', import.meta.url))): boolean {
  if (process.env.SOTF_NO_DOTENV === '1' || !existsSync(path)) return false;
  process.loadEnvFile(path);
  return true;
}
