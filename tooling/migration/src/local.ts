/**
 * Local development database helpers (PLAN §6.12, §11.2): target resolution, the `sotfv2` compose
 * PostgreSQL, drop/recreate and `pg_dump` / `pg_restore` through the `postgres:16-alpine` image
 * (no PostgreSQL client is needed on the host).
 *
 * These tools only ever touch **local** databases: a non-local host is refused.
 */
import { spawn, spawnSync } from 'node:child_process';
import { createReadStream, createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { loadRootDotEnv } from '@sotf/db/env';
import pg from 'pg';
import { DEFAULT_DATABASE_URL, PACKAGE_DIR } from './constants.ts';
import { describeTarget, ident, withDatabase } from './db.ts';

export const REPO_ROOT = join(PACKAGE_DIR, '..', '..');
export const COMPOSE_PROJECT = 'sotfv2';
export const COMPOSE_FILE = join(REPO_ROOT, 'ops', 'compose', 'dev.yml');
export const POSTGRES_IMAGE = 'postgres:16-alpine';

/** Connection string of the tools: MIGRATIONS_DATABASE_URL, DATABASE_URL or the local default. */
export function resolveDatabaseUrl(source: NodeJS.ProcessEnv = process.env): string {
  loadRootDotEnv();
  return source.MIGRATIONS_DATABASE_URL?.trim() || source.DATABASE_URL?.trim() || DEFAULT_DATABASE_URL;
}

/** Throws unless the URL points at a local server (dev tools never touch remote databases). */
export function assertLocal(url: string, what: string): void {
  const target = describeTarget(url);
  if (!target.local) {
    throw new Error(`${what} only runs against a local database; refusing ${target.database} on ${target.host}`);
  }
  if (target.database === 'postgres' || target.database === 'template1' || target.database === 'template0') {
    throw new Error(`${what}: "${target.database}" is a maintenance database; use a dedicated one (e.g. sotf)`);
  }
}

async function canConnect(url: string): Promise<boolean> {
  const client = new pg.Client({ connectionString: withDatabase(url, 'postgres'), connectionTimeoutMillis: 3000 });
  try {
    await client.connect();
    await client.end();
    return true;
  } catch {
    await client.end().catch(() => undefined);
    return false;
  }
}

/**
 * Makes sure the server of `url` answers. When it is the compose database (port 47432) and it is
 * down, starts only its `postgres` service (`docker compose -p sotfv2 … up --wait postgres`).
 */
export async function ensureServer(url: string, log: (message: string) => void): Promise<void> {
  if (await canConnect(url)) return;
  const { host } = describeTarget(url);
  if (!host.endsWith(':47432')) throw new Error(`cannot connect to ${host}; start that PostgreSQL server first`);
  log(`starting the local PostgreSQL (compose project ${COMPOSE_PROJECT}, service postgres)`);
  const result = spawnSync(
    'docker',
    [
      'compose',
      '-p',
      COMPOSE_PROJECT,
      '-f',
      COMPOSE_FILE,
      'up',
      '--detach',
      '--wait',
      '--wait-timeout',
      '120',
      'postgres',
    ],
    { stdio: 'inherit' },
  );
  if (result.status !== 0) throw new Error('docker compose could not start the local PostgreSQL (pnpm infra:up)');
  if (!(await canConnect(url))) throw new Error(`the local PostgreSQL started but ${host} does not answer`);
}

/** Drops and recreates the database of `url` (local only). */
export async function recreateDatabase(url: string): Promise<void> {
  assertLocal(url, 'db:reset:dev');
  const { database } = describeTarget(url);
  const admin = new pg.Client({ connectionString: withDatabase(url, 'postgres') });
  await admin.connect();
  try {
    await admin.query(`DROP DATABASE IF EXISTS ${ident(database)} WITH (FORCE)`);
    await admin.query(`CREATE DATABASE ${ident(database)}`);
  } finally {
    await admin.end();
  }
}

/** Creates the database of `url` when it does not exist yet. */
export async function ensureDatabase(url: string): Promise<void> {
  const { database } = describeTarget(url);
  const admin = new pg.Client({ connectionString: withDatabase(url, 'postgres') });
  await admin.connect();
  try {
    const { rows } = await admin.query('SELECT 1 FROM pg_database WHERE datname = $1', [database]);
    if (rows.length === 0) await admin.query(`CREATE DATABASE ${ident(database)}`);
  } finally {
    await admin.end();
  }
}

function dockerArgs(url: string, tool: 'pg_dump' | 'pg_restore', extra: string[]): string[] {
  return ['run', '--rm', '-i', '--network', 'host', POSTGRES_IMAGE, tool, ...extra, '--dbname', url];
}

/** `pg_dump -Fc` of `url` into `file` (custom format, like Coolify backups). */
export async function dumpDatabase(url: string, file: string): Promise<void> {
  assertLocal(url, 'pg_dump');
  const child = spawn('docker', dockerArgs(url, 'pg_dump', ['--format=custom', '--no-owner', '--no-acl']), {
    stdio: ['ignore', 'pipe', 'inherit'],
  });
  const done = new Promise<number>((resolve, reject) => {
    child.on('error', reject);
    child.on('close', (code) => resolve(code ?? 1));
  });
  await pipeline(child.stdout, createWriteStream(file));
  const code = await done;
  if (code !== 0) throw new Error(`pg_dump exited with ${code}`);
}

/** `pg_restore --no-owner --no-acl` of `file` into `url` (local only). */
export async function restoreDatabase(url: string, file: string): Promise<void> {
  assertLocal(url, 'pg_restore');
  const child = spawn('docker', dockerArgs(url, 'pg_restore', ['--no-owner', '--no-acl', '--exit-on-error']), {
    stdio: ['pipe', 'inherit', 'inherit'],
  });
  const done = new Promise<number>((resolve, reject) => {
    child.on('error', reject);
    child.on('close', (code) => resolve(code ?? 1));
  });
  await pipeline(createReadStream(file), child.stdin);
  const code = await done;
  if (code !== 0) throw new Error(`pg_restore exited with ${code}`);
}
