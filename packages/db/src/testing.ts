/**
 * Test helpers (`@sotf/db/testing`, PLAN §6.12, §10.1): a disposable PostgreSQL 16 with every
 * migration applied, cloned per test file from a template database, and row factories.
 *
 *   const t = await startTestDb();          // fresh database, migrated and seeded
 *   const f = createFactories(t.db);
 *   const author = await f.user();
 *   const m = await f.mod({ userId: author.id });
 *   await t.stop();
 *
 * By default one `postgres:16-alpine` container (Testcontainers) is started per test process and
 * reused; set SOTF_TEST_DATABASE_URL to an admin URL of an existing PostgreSQL 16 server (e.g. a CI
 * service container) to skip Docker. Never point it at production.
 */
import { randomUUID } from 'node:crypto';
import { PostgreSqlContainer, type StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import { eq, sql } from 'drizzle-orm';
import pg from 'pg';
import { createDb, type Database, type DbHandle } from './client.ts';
import { testDatabaseAdminUrl } from './env.ts';
import { DEFAULT_MIGRATIONS_DIR, loadMigrations } from './migrate/files.ts';
import { migrateUp } from './migrate/runner.ts';
import { comment, type NewComment } from './schema/legacy/comment.ts';
import {
  modDownload,
  modFavorite,
  modReview,
  type NewModDownload,
  type NewModReview,
} from './schema/legacy/engagement.ts';
import { mod, type NewMod } from './schema/legacy/mod.ts';
import { modVersion, type NewModVersion } from './schema/legacy/mod-version.ts';
import { category, type NewCategory } from './schema/legacy/taxonomy.ts';
import { type NewUser, user } from './schema/legacy/user.ts';
import { session } from './schema/v2/auth.ts';
import { kit, type NewKit } from './schema/v2/community.ts';
import { gameBuild, type NewGameBuild } from './schema/v2/compat.ts';

export const TEST_POSTGRES_IMAGE = 'postgres:16-alpine';

interface Server {
  adminUrl: string;
  container: StartedPostgreSqlContainer | null;
}

let serverPromise: Promise<Server> | null = null;
const templates = new Map<string, Promise<string>>();

function databaseUrl(adminUrl: string, database: string): string {
  const url = new URL(adminUrl);
  url.pathname = `/${database}`;
  return url.toString();
}

async function adminQuery(adminUrl: string, text: string): Promise<void> {
  const client = new pg.Client({ connectionString: adminUrl });
  await client.connect();
  try {
    await client.query(text);
  } finally {
    await client.end();
  }
}

/** Starts (once per process) the PostgreSQL server used by the tests. */
export function startTestServer(): Promise<Server> {
  serverPromise ??= (async () => {
    const external = testDatabaseAdminUrl();
    if (external) return { adminUrl: external, container: null };
    const container = await new PostgreSqlContainer(TEST_POSTGRES_IMAGE)
      .withDatabase('postgres')
      .withUsername('sotf')
      .withPassword('sotf')
      .withEnvironment({ TZ: 'UTC', PGTZ: 'UTC' })
      // Durability is irrelevant for throwaway test data.
      .withCommand([
        'postgres',
        '-c',
        'fsync=off',
        '-c',
        'synchronous_commit=off',
        '-c',
        'full_page_writes=off',
        '-c',
        'timezone=UTC',
      ])
      .start();
    return { adminUrl: container.getConnectionUri(), container };
  })();
  return serverPromise;
}

/** Stops the shared container (optional: Testcontainers' reaper also removes it at exit). */
export async function stopTestServer(): Promise<void> {
  const server = await serverPromise;
  serverPromise = null;
  templates.clear();
  await server?.container?.stop();
}

export interface CreateTestDatabaseOptions {
  /** Apply migrations (default true). `false` gives an empty database. */
  migrate?: boolean;
  /** Stop after this migration (e.g. '0000_legacy_baseline' for a legacy-only database). */
  target?: string;
  /** Also install the pg-boss schema (default false). */
  pgBoss?: boolean;
}

/** Creates a new database (cloned from a cached, migrated template) and returns its URL. */
export async function createTestDatabase(options: CreateTestDatabaseOptions = {}): Promise<string> {
  const server = await startTestServer();
  const name = `t_${randomUUID().replaceAll('-', '').slice(0, 16)}`;
  if (options.migrate === false) {
    await adminQuery(server.adminUrl, `CREATE DATABASE "${name}"`);
    return databaseUrl(server.adminUrl, name);
  }
  const key = `${options.target ?? 'latest'}|${options.pgBoss ? 'boss' : 'noboss'}|${fingerprint()}`;
  let template = templates.get(key);
  if (!template) {
    template = buildTemplate(server.adminUrl, options);
    templates.set(key, template);
  }
  const templateName = await template;
  await adminQuery(server.adminUrl, `CREATE DATABASE "${name}" TEMPLATE "${templateName}"`);
  return databaseUrl(server.adminUrl, name);
}

/** Checksums of the migration files: templates are rebuilt when migrations change. */
function fingerprint(): string {
  return loadMigrations(DEFAULT_MIGRATIONS_DIR)
    .map((m) => m.checksum.slice(0, 8))
    .join('')
    .slice(0, 32);
}

async function buildTemplate(adminUrl: string, options: CreateTestDatabaseOptions): Promise<string> {
  const name = `tpl_${randomUUID().replaceAll('-', '').slice(0, 16)}`;
  await adminQuery(adminUrl, `CREATE DATABASE "${name}"`);
  const url = databaseUrl(adminUrl, name);
  const client = new pg.Client({ connectionString: url, options: '-c TimeZone=UTC' });
  await client.connect();
  try {
    await migrateUp(client, {
      target: options.target,
      pgBoss: options.pgBoss ? { connectionString: url } : false,
    });
  } finally {
    await client.end();
  }
  // Templates must have no open connection when they are cloned.
  await adminQuery(adminUrl, `ALTER DATABASE "${name}" WITH ALLOW_CONNECTIONS false`);
  return name;
}

export interface TestDb extends DbHandle {
  url: string;
  /** Drops the database and closes the pool. */
  stop(): Promise<void>;
}

/** A fresh migrated (and seeded) database with a Drizzle handle. */
export async function startTestDb(options: CreateTestDatabaseOptions & { max?: number } = {}): Promise<TestDb> {
  const url = await createTestDatabase(options);
  const handle = createDb({ connectionString: url, max: options.max ?? 4, applicationName: 'sotf-test' });
  const server = await startTestServer();
  const name = new URL(url).pathname.slice(1);
  return {
    ...handle,
    url,
    async stop() {
      await handle.close();
      await adminQuery(server.adminUrl, `DROP DATABASE IF EXISTS "${name}" WITH (FORCE)`);
    },
  };
}

/** Deterministic row factories. Every factory accepts overrides and returns the inserted row. */
export function createFactories(db: Database) {
  let n = 0;
  const next = () => {
    n += 1;
    return n;
  };

  const factories = {
    async user(overrides: Partial<NewUser> = {}) {
      const i = next();
      const [row] = await db
        .insert(user)
        .values({
          email: `survivor${i}@example.test`,
          // Not a valid hash: pass `password` to test sign-in.
          password: '!no-login',
          name: `survivor${i}`,
          slug: `survivor${i}`,
          ...overrides,
        })
        .returning();
      return row as NonNullable<typeof row>;
    },

    async category(overrides: Partial<NewCategory> = {}) {
      const i = next();
      const [row] = await db
        .insert(category)
        .values({ name: `Category ${i}`, slug: `test-category-${i}`, description: '', type: 'Mod', ...overrides })
        .returning();
      return row as NonNullable<typeof row>;
    },

    async mod(overrides: Partial<NewMod> = {}) {
      const i = next();
      const userId = overrides.userId === undefined ? (await factories.user()).id : overrides.userId;
      const status = overrides.status ?? 'published';
      const [row] = await db
        .insert(mod)
        .values({
          name: `Test Mod ${i}`,
          slug: `test-mod-${i}`,
          manifestId: `TestMod${i}`,
          description: `Description of test mod ${i}.`,
          shortDescription: `Test mod ${i}`,
          type: 'Mod',
          isNSFW: false,
          isApproved: status === 'published',
          isFeatured: false,
          status,
          ...overrides,
          userId,
        })
        .returning();
      return row as NonNullable<typeof row>;
    },

    async modVersion(overrides: Partial<NewModVersion> & { modId: number }) {
      const i = next();
      const version = overrides.version ?? `1.0.${i}`;
      const key = `mods/${overrides.modId}/${i}/test-mod-${version}.zip`;
      const [row] = await db
        .insert(modVersion)
        .values({
          version,
          isLatest: true,
          changelog: '',
          downloadUrl: `https://r2.sotf-mods.com/${key}`,
          extension: 'zip',
          filename: key,
          storageKey: key,
          ...overrides,
        })
        .returning();
      return row as NonNullable<typeof row>;
    },

    /** A mod with one latest version; "Mod"."latestVersion" is kept consistent. */
    async modWithVersion(overrides: Partial<NewMod> = {}, versionOverrides: Partial<NewModVersion> = {}) {
      const created = await factories.mod(overrides);
      const version = await factories.modVersion({ ...versionOverrides, modId: created.id });
      const [updated] = await db
        .update(mod)
        .set({ latestVersion: version.version })
        .where(eq(mod.id, created.id))
        .returning();
      return { mod: updated as NonNullable<typeof updated>, version };
    },

    async comment(overrides: Partial<NewComment> & { modId: number }) {
      const i = next();
      const userId = overrides.userId === undefined ? (await factories.user()).id : overrides.userId;
      const [row] = await db
        .insert(comment)
        .values({ message: `Comment ${i}`, isHidden: false, ip: 'undefined', ...overrides, userId })
        .returning();
      return row as NonNullable<typeof row>;
    },

    async review(overrides: Partial<NewModReview> & { modId: number }) {
      const i = next();
      const userId = overrides.userId === undefined ? (await factories.user()).id : overrides.userId;
      const status = overrides.status ?? 'visible';
      const [row] = await db
        .insert(modReview)
        .values({
          title: `Review ${i}`,
          message: `Review body ${i}`,
          rating: 5,
          status,
          isHidden: status !== 'visible',
          ...overrides,
          userId,
        })
        .returning();
      return row as NonNullable<typeof row>;
    },

    async favorite(values: { userId: number; modId: number; notify?: boolean }) {
      const [row] = await db.insert(modFavorite).values(values).returning();
      return row as NonNullable<typeof row>;
    },

    async download(overrides: Partial<NewModDownload> & { modVersionId: number | null }) {
      const [row] = await db
        .insert(modDownload)
        .values({ ip: 'test-ip-hash', userAgent: '', source: 'web', ...overrides })
        .returning();
      return row as NonNullable<typeof row>;
    },

    async session(values: { userId: number; tokenHash?: string; pwdFingerprint?: string; ttlMs?: number }) {
      const now = Date.now();
      const ttl = values.ttlMs ?? 24 * 3600 * 1000;
      const [row] = await db
        .insert(session)
        .values({
          userId: values.userId,
          tokenHash: values.tokenHash ?? randomUUID(),
          pwdFingerprint: values.pwdFingerprint ?? '0000000000000000',
          expiresAt: new Date(now + ttl),
          absoluteExpiresAt: new Date(now + 30 * ttl),
        })
        .returning();
      return row as NonNullable<typeof row>;
    },

    async kit(overrides: Partial<NewKit> = {}) {
      const i = next();
      const ownerId = overrides.ownerId ?? (await factories.user()).id;
      const [row] = await db
        .insert(kit)
        .values({
          slug: `kit-${i}`,
          name: `Kit ${i}`,
          code: `KIT-T${String(i).padStart(3, '0')}-00`,
          ...overrides,
          ownerId,
        })
        .returning();
      return row as NonNullable<typeof row>;
    },

    async gameBuild(overrides: Partial<NewGameBuild> = {}) {
      const i = next();
      const [row] = await db
        .insert(gameBuild)
        .values({ label: `Patch ${i}`, releasedAt: '2026-01-01', ...overrides })
        .returning();
      return row as NonNullable<typeof row>;
    },
  };
  return factories;
}

export type Factories = ReturnType<typeof createFactories>;

/** Current server time as seen by the database (handy to compare trigger-stamped timestamps). */
export async function databaseNow(db: Database): Promise<Date> {
  const result = await db.execute<{ now: Date }>(sql`SELECT now() AS "now"`);
  return new Date((result.rows[0] as { now: Date | string }).now);
}
