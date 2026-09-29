/** Shared helpers of the integration tests (not a test file itself). */
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type { Logger } from '@sotf/db';
import { createTestDatabase, startTestServer } from '@sotf/db/testing';
import pg from 'pg';
import { connect } from '../src/db.ts';

export const quiet: Logger = { info: () => {}, warn: () => {}, error: () => {} };

export interface Scratch {
  url: string;
  client: pg.Client;
  outDir: string;
  close(): Promise<void>;
}

/** A new database (empty, baseline-only or fully migrated) with one dedicated connection. */
export async function scratch(options: { migrate?: boolean; target?: string } = {}): Promise<Scratch> {
  const url = await createTestDatabase({ migrate: options.migrate ?? false, target: options.target });
  const client = await connect(url, 'sotf-migration-test');
  return {
    url,
    client,
    outDir: mkdtempSync(join(tmpdir(), 'sotf-migration-')),
    async close() {
      await client.end();
      const server = await startTestServer();
      const admin = new pg.Client({ connectionString: server.adminUrl });
      await admin.connect();
      try {
        await admin.query(`DROP DATABASE IF EXISTS "${new URL(url).pathname.slice(1)}" WITH (FORCE)`);
      } finally {
        await admin.end();
      }
    },
  };
}

export async function scalar<T = number>(client: pg.ClientBase, sql: string, values: unknown[] = []): Promise<T> {
  const { rows } = await client.query(sql, values);
  const value = Object.values(rows[0] ?? {})[0];
  return (typeof value === 'string' && /^-?\d+$/.test(value) ? Number(value) : value) as T;
}

const T = '2024-05-01T10:00:00.000Z';

/** Minimal legacy rows written the way the legacy API writes them (explicit updatedAt). */
export const legacy = {
  async user(c: pg.ClientBase, id: number, extra: { email?: string; trusted?: boolean; slug?: string } = {}) {
    const slug = extra.slug ?? `user${id}`;
    await c.query(
      `INSERT INTO "User" ("id", "email", "password", "name", "slug", "isTrusted", "createdAt", "updatedAt")
       VALUES ($1, $2, '$argon2id$v=19$m=65536,t=2,p=1$x$y', $3, $3, $4, $5, $5)`,
      [id, extra.email ?? `${slug}@example.test`, slug, extra.trusted ?? false, T],
    );
  },
  async mod(
    c: pg.ClientBase,
    id: number,
    userId: number | null,
    extra: {
      slug?: string;
      type?: string | null;
      approved?: boolean;
      description?: string;
      dependencies?: string;
    } = {},
  ) {
    await c.query(
      `INSERT INTO "Mod" ("id", "name", "slug", "mod_id", "description", "dependencies", "type", "isNSFW", "isApproved",
                          "isFeatured", "imageUrl", "createdAt", "updatedAt", "userId", "latestVersion")
       VALUES ($1, $2, $3, $4, $5, $6, $7, false, $8, false, $9, $10, $10, $11, '1.0.0')`,
      [
        id,
        `Mod ${id}`,
        extra.slug ?? `mod-${id}`,
        `Manifest${id}`,
        extra.description ?? `Description of **mod ${id}**`,
        extra.dependencies ?? '',
        extra.type === undefined ? 'Mod' : extra.type,
        extra.approved ?? true,
        `https://r2.sotf-mods.com/thumb_${id}.png`,
        T,
        userId,
      ],
    );
  },
  async version(c: pg.ClientBase, id: number, modId: number | null, url = `https://r2.sotf-mods.com/v${id} (1).zip`) {
    await c.query(
      `INSERT INTO "ModVersion" ("id", "version", "isLatest", "changelog", "downloadUrl", "extension", "createdAt", "updatedAt", "modId")
       VALUES ($1, '1.0.0', true, 'fixed &lt;3 bugs &amp; more', $2, 'zip', $3, $3, $4)`,
      [id, url, T, modId],
    );
  },
  async downloads(c: pg.ClientBase, versionId: number | null, n: number, ip = '1.2.3.4', at = T) {
    await c.query(
      `INSERT INTO "ModDownload" ("ip", "userAgent", "createdAt", "updatedAt", "modVersionId")
       SELECT $1, 'ua', $3, $3, $2 FROM generate_series(1, $4)`,
      [ip, versionId, at, n],
    );
  },
  async favorite(c: pg.ClientBase, id: number, userId: number | null, modId: number | null, at = T) {
    await c.query(
      `INSERT INTO "ModFavorite" ("id", "createdAt", "updatedAt", "userId", "modId") VALUES ($1, $2, $2, $3, $4)`,
      [id, at, userId, modId],
    );
  },
  async comment(c: pg.ClientBase, id: number, modId: number, userId: number, message: string, hidden = false) {
    await c.query(
      `INSERT INTO "Comment" ("id", "createdAt", "updatedAt", "message", "isHidden", "ip", "userId", "modId")
       VALUES ($1, $2, $2, $3, $4, 'undefined', $5, $6)`,
      [id, T, message, hidden, userId, modId],
    );
  },
};
