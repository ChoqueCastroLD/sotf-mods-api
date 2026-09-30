/**
 * Self-service data export (T0-14, PLAN §9.3 "Derechos"): `POST /me/export` queues a
 * "DataExport" row + the `account.export` job; the job collects every personal record into JSON
 * files, zips them, stores the ZIP in the private bucket and emails a presigned link valid 24 h.
 * One export per user per 24 h. Expired exports are deleted by the daily retention sweep.
 *
 * Secrets never leave the database: password hashes, session token hashes, password fingerprints
 * and one-time tokens are excluded.
 */
import type { DataExportDTO as DataExportSchema } from '@sotf/contracts/me';
import { type Database, type DataExport, dataExport, type Executor, withTx } from '@sotf/db';
import { and, desc, eq, gt, inArray, sql } from 'drizzle-orm';
import { strToU8, zipSync } from 'fflate';
import type { z } from 'zod';
import { displayNameOf, findUserById, localeOf } from '../auth/users.ts';
import { queueEmail } from '../email/outbox.ts';
import type { Clock } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import { DomainError, errors } from '../kernel/errors.ts';
import type { Jobs } from '../kernel/jobs.ts';
import type { Logger } from '../kernel/logger.ts';
import { type ExportStorage, exportKey } from './export-storage.ts';

export type DataExportDTO = z.infer<typeof DataExportSchema>;

export const EXPORT_TTL_SECONDS = 24 * 3600;
export const EXPORT_COOLDOWN_MS = 24 * 3600 * 1000;
export const EXPORT_FORMAT_VERSION = 1;

/** Columns never exported (secrets or other people's data). */
const EXCLUDED_COLUMNS: Readonly<Record<string, readonly string[]>> = {
  User: ['password', 'emailNormalized'],
  Session: ['tokenHash', 'pwdFingerprint'],
  ModDownload: ['ip'],
  Report: ['assignedToId', 'resolvedById'],
  UserSanction: ['createdById'],
};

/** Personal data sections: file name → SQL returning the user's rows (`$1` = user id). */
const SECTIONS: ReadonlyArray<{ file: string; table: string; query: (userId: number) => ReturnType<typeof sql> }> = [
  { file: 'mods.json', table: 'Mod', query: (id) => sql`SELECT * FROM "Mod" WHERE "userId" = ${id} ORDER BY "id"` },
  {
    file: 'mod-versions.json',
    table: 'ModVersion',
    query: (id) =>
      sql`SELECT v.* FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId" WHERE m."userId" = ${id} ORDER BY v."id"`,
  },
  {
    file: 'comments.json',
    table: 'Comment',
    query: (id) => sql`SELECT * FROM "Comment" WHERE "userId" = ${id} ORDER BY "id"`,
  },
  {
    file: 'reviews.json',
    table: 'ModReview',
    query: (id) => sql`SELECT * FROM "ModReview" WHERE "userId" = ${id} ORDER BY "id"`,
  },
  {
    file: 'favorites.json',
    table: 'ModFavorite',
    query: (id) => sql`SELECT * FROM "ModFavorite" WHERE "userId" = ${id} ORDER BY "id"`,
  },
  {
    file: 'downloads.json',
    table: 'ModDownload',
    query: (id) => sql`SELECT * FROM "ModDownload" WHERE "userId" = ${id} ORDER BY "id"`,
  },
  {
    file: 'follows.json',
    table: 'UserFollow',
    query: (id) => sql`SELECT * FROM "UserFollow" WHERE "followerId" = ${id} ORDER BY "createdAt"`,
  },
  { file: 'kits.json', table: 'Kit', query: (id) => sql`SELECT * FROM "Kit" WHERE "ownerId" = ${id} ORDER BY "id"` },
  {
    file: 'kit-items.json',
    table: 'KitItem',
    query: (id) =>
      sql`SELECT i.* FROM "KitItem" i JOIN "Kit" k ON k."id" = i."kitId" WHERE k."ownerId" = ${id} ORDER BY i."kitId"`,
  },
  {
    file: 'compat-reports.json',
    table: 'CompatReport',
    query: (id) => sql`SELECT * FROM "CompatReport" WHERE "userId" = ${id} ORDER BY "id"`,
  },
  {
    file: 'reports.json',
    table: 'Report',
    query: (id) => sql`SELECT * FROM "Report" WHERE "reporterId" = ${id} ORDER BY "id"`,
  },
  {
    file: 'notifications.json',
    table: 'Notification',
    query: (id) => sql`SELECT * FROM "Notification" WHERE "userId" = ${id} ORDER BY "id"`,
  },
  {
    file: 'notification-preferences.json',
    table: 'NotificationPreference',
    query: (id) => sql`SELECT * FROM "NotificationPreference" WHERE "userId" = ${id} ORDER BY "type"`,
  },
  {
    file: 'badges.json',
    table: 'UserBadge',
    query: (id) => sql`SELECT * FROM "UserBadge" WHERE "userId" = ${id}`,
  },
  { file: 'xp.json', table: 'XpEvent', query: (id) => sql`SELECT * FROM "XpEvent" WHERE "userId" = ${id}` },
  {
    file: 'sanctions.json',
    table: 'UserSanction',
    query: (id) => sql`SELECT * FROM "UserSanction" WHERE "userId" = ${id}`,
  },
  {
    file: 'sessions.json',
    table: 'Session',
    query: (id) => sql`SELECT * FROM "Session" WHERE "userId" = ${id} ORDER BY "createdAt"`,
  },
  {
    file: 'security-log.json',
    table: 'AuthEvent',
    query: (id) => sql`SELECT * FROM "AuthEvent" WHERE "userId" = ${id} ORDER BY "id"`,
  },
];

function clean(table: string, row: Record<string, unknown>): Record<string, unknown> {
  const excluded = EXCLUDED_COLUMNS[table] ?? [];
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(row)) {
    if (excluded.includes(key)) continue;
    out[key] = value instanceof Date ? value.toISOString() : typeof value === 'bigint' ? value.toString() : value;
  }
  return out;
}

export interface ExportFiles {
  [file: string]: unknown;
}

/** Collects the JSON documents of an export (exposed for tests and previews). */
export async function collectExportFiles(db: Executor, userId: number, now: Date): Promise<ExportFiles> {
  const account = await db.execute<Record<string, unknown>>(sql`SELECT * FROM "User" WHERE "id" = ${userId}`);
  const row = account.rows[0];
  if (!row) throw errors.notFound('User');
  const files: ExportFiles = {
    'export.json': {
      format: EXPORT_FORMAT_VERSION,
      generatedAt: now.toISOString(),
      userId,
      site: 'sotf-mods.com',
      files: ['account.json', ...SECTIONS.map((s) => s.file)],
    },
    'account.json': clean('User', row),
  };
  for (const section of SECTIONS) {
    const result = await db.execute<Record<string, unknown>>(section.query(userId));
    files[section.file] = result.rows.map((r) => clean(section.table, r));
  }
  return files;
}

/** ZIP (deflate) of the JSON files, plus a short README. */
export function zipExport(files: ExportFiles): Uint8Array {
  const entries: Record<string, Uint8Array> = {
    'README.txt': strToU8(
      [
        'SOTF Mods: your data export',
        '',
        'Each JSON file holds one kind of record linked to your account (see export.json).',
        'Dates are UTC (ISO 8601). Password hashes, session secrets and one-time tokens are never exported.',
        '',
      ].join('\n'),
    ),
  };
  for (const [name, content] of Object.entries(files)) {
    entries[name] = strToU8(`${JSON.stringify(content, null, 2)}\n`);
  }
  return zipSync(entries, { level: 6, mtime: new Date('2026-01-01T00:00:00Z') });
}

export type ExportStatusDTO = DataExportDTO['status'];

export async function toDataExportDTO(
  row: DataExport,
  storage: ExportStorage | null,
  now: Date,
): Promise<DataExportDTO> {
  let status: ExportStatusDTO = row.status === 'pending' ? 'queued' : row.status;
  let downloadUrl: string | null = null;
  if (row.status === 'ready' && row.expiresAt && row.key) {
    const remaining = Math.floor((row.expiresAt.getTime() - now.getTime()) / 1000);
    if (remaining <= 0) status = 'expired';
    else if (storage) downloadUrl = await storage.presignGet(row.key, remaining);
  }
  return {
    id: row.id,
    status,
    createdAt: row.createdAt.toISOString(),
    expiresAt: row.expiresAt ? row.expiresAt.toISOString() : null,
    downloadUrl,
  };
}

/** `POST /me/export`: one export per 24 h (`RATE_LIMITED` with the wait otherwise). */
export async function requestExport(ctx: Ctx, storage: ExportStorage | null): Promise<DataExportDTO> {
  const actor = ctx.actor;
  if (!actor) throw errors.unauthenticated();
  const now = ctx.clock.now();
  return withTx(ctx.db, async (tx) => {
    // Serialize concurrent requests of the same user.
    await tx.execute(sql`SELECT pg_advisory_xact_lock(hashtext('sotf:export'), ${actor.userId})`);
    const [recent] = await tx
      .select()
      .from(dataExport)
      .where(
        and(
          eq(dataExport.userId, actor.userId),
          inArray(dataExport.status, ['pending', 'ready']),
          gt(dataExport.createdAt, new Date(now.getTime() - EXPORT_COOLDOWN_MS)),
        ),
      )
      .orderBy(desc(dataExport.createdAt))
      .limit(1);
    if (recent) {
      const wait = Math.ceil((recent.createdAt.getTime() + EXPORT_COOLDOWN_MS - now.getTime()) / 1000);
      throw new DomainError('RATE_LIMITED', undefined, 'You can request one export per day', {
        retryAfter: Math.max(1, wait),
      });
    }
    const [created] = await tx.insert(dataExport).values({ userId: actor.userId, createdAt: now }).returning();
    if (!created) throw new Error('export insert returned nothing');
    await ctx.jobs.enqueue('account.export', { exportId: created.id }, { tx });
    return toDataExportDTO(created, storage, now);
  });
}

/** `GET /me/exports/:id` (own exports only). */
export async function getExport(ctx: Ctx, storage: ExportStorage | null, exportId: string): Promise<DataExportDTO> {
  const actor = ctx.actor;
  if (!actor) throw errors.unauthenticated();
  const [row] = await ctx.db
    .select()
    .from(dataExport)
    .where(and(eq(dataExport.id, exportId), eq(dataExport.userId, actor.userId)));
  if (!row) throw errors.notFound('Export');
  return toDataExportDTO(row, storage, ctx.clock.now());
}

export interface ExportJobDeps {
  db: Database;
  jobs: Jobs;
  clock: Clock;
  log: Logger;
  storage: ExportStorage;
  siteUrl: string;
}

/**
 * The `account.export` job: builds and stores the ZIP, marks the export ready and emails the link.
 * Idempotent: an export that is no longer `pending` is left alone. `lastAttempt` marks it failed.
 */
export async function runExport(
  deps: ExportJobDeps,
  exportId: string,
  options: { lastAttempt?: boolean } = {},
): Promise<'ready' | 'skipped' | 'failed'> {
  const [row] = await deps.db.select().from(dataExport).where(eq(dataExport.id, exportId));
  if (row?.status !== 'pending') return 'skipped';
  const owner = await findUserById(deps.db, row.userId);
  if (!owner || owner.deletedAt) {
    await deps.db.update(dataExport).set({ status: 'failed' }).where(eq(dataExport.id, exportId));
    return 'failed';
  }
  try {
    const now = deps.clock.now();
    const files = await collectExportFiles(deps.db, row.userId, now);
    const zip = zipExport(files);
    const key = exportKey(row.userId, row.id);
    const day = now.toISOString().slice(0, 10);
    await deps.storage.put(key, zip, 'application/zip', `sotf-mods-data-${owner.slug}-${day}.zip`);
    const expiresAt = new Date(now.getTime() + EXPORT_TTL_SECONDS * 1000);
    const url = await deps.storage.presignGet(key, EXPORT_TTL_SECONDS);
    await withTx(deps.db, async (tx) => {
      await tx.update(dataExport).set({ status: 'ready', key, expiresAt }).where(eq(dataExport.id, exportId));
      await queueEmail(tx, deps.jobs, {
        userId: owner.id,
        to: owner.email,
        template: 'account.export_ready',
        locale: localeOf(owner),
        payload: { displayName: displayNameOf(owner), url, expiresAt: expiresAt.toISOString() },
        dedupeKey: `account.export:${row.id}`,
      });
    });
    deps.log.info({ exportId, userId: row.userId, bytes: zip.byteLength }, 'data export ready');
    return 'ready';
  } catch (error) {
    deps.log.error({ exportId, err: error }, 'data export failed');
    if (options.lastAttempt) {
      await deps.db.update(dataExport).set({ status: 'failed' }).where(eq(dataExport.id, exportId));
      return 'failed';
    }
    throw error;
  }
}

/** Retention (PLAN §9.3: exports 24 h): deletes expired export objects and marks them expired. */
export async function expireExports(deps: { db: Database; storage: ExportStorage | null; clock: Clock; log: Logger }) {
  const now = deps.clock.now();
  const due = await deps.db
    .select()
    .from(dataExport)
    .where(and(eq(dataExport.status, 'ready'), sql`${dataExport.expiresAt} <= ${now.toISOString()}::timestamptz`))
    .limit(1000);
  let expired = 0;
  for (const row of due) {
    if (row.key && deps.storage) {
      try {
        await deps.storage.delete(row.key);
      } catch (error) {
        deps.log.warn({ exportId: row.id, err: error }, 'could not delete an expired export object');
        continue;
      }
    }
    await deps.db.update(dataExport).set({ status: 'expired', key: null }).where(eq(dataExport.id, row.id));
    expired += 1;
  }
  return expired;
}
