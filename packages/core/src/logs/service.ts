/**
 * Share logs (migration 2250).
 *
 * - `createLog`: guests pass Turnstile, members do not. The text is redacted
 *   (`@sotf/contracts/log-redact`), parsed for the summary (`@sotf/contracts/log-parser`), gzipped
 *   and stored with a 24 h expiry. The id is 144 random bits; the creator's delete token is stored
 *   as a SHA-256 hash.
 * - `getLog` / `getLogRaw`: live logs only. A purged, expired or reported log answers `GONE` whose
 *   detail is the reason (`expired`, `deleted`, `reported`); an id that never existed is `NOT_FOUND`.
 * - `deleteLog` (token or signed-in creator), `reportLog` (3 reports hide the log until the purge).
 * - `purgeLogs` (worker, hourly): expired or hidden logs lose their payload (hard delete of the
 *   text, title, summary and owner) and keep a tombstone for 30 days; older tombstones are deleted.
 */
import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';
import { gunzip, gzip } from 'node:zlib';
import { type LogSummary, parseLog, summarizeLog } from '@sotf/contracts/log-parser';
import { type LogRedactionCounts, redactLog } from '@sotf/contracts/log-redact';
import { type CreateLogBody, LOG_RULES, type LogCreatedDTO, type LogDTO } from '@sotf/contracts/logs';
import { modPath } from '@sotf/contracts/seo';
import { sql } from 'drizzle-orm';
import type { Ctx } from '../kernel/context.ts';
import { DomainError, errors } from '../kernel/errors.ts';
import { firstRow, rows } from '../legacy/db.ts';

const gzipAsync = promisify(gzip);
const gunzipAsync = promisify(gunzip);

const HOUR_MS = 3600 * 1000;
const TOMBSTONE_DAYS = 30;
/** Live logs kept at most (5 MB each compress to far less): beyond this the service says "busy". */
export const MAX_LIVE_LOGS = 20_000;

export interface LogWriteDeps {
  /** Cloudflare Turnstile check for guests. Never throws. */
  verifyTurnstile(token: string | undefined, ip: string | null): Promise<boolean>;
  /** Counts one log in the daily budget of the client IP; throws `RATE_LIMITED` when over. */
  consumeDaily(ip: string): Promise<void>;
}

function hashToken(token: string): string {
  return createHash('sha256').update(token, 'utf8').digest('hex');
}

function cleanTitle(title: string | undefined): string | null {
  if (!title) return null;
  // Control characters out, then the same privacy pass as the text (people title logs with paths).
  const plain = title
    .normalize('NFC')
    .replace(/\p{Cc}+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (plain === '') return null;
  return redactLog(plain).text.slice(0, LOG_RULES.titleMax);
}

export async function createLog(ctx: Ctx, deps: LogWriteDeps, body: CreateLogBody): Promise<LogCreatedDTO> {
  if (!ctx.actor && !(await deps.verifyTurnstile(body.turnstileToken, ctx.ip))) {
    throw new DomainError('TURNSTILE_REQUIRED', undefined, 'Complete the human check');
  }
  if (Buffer.byteLength(body.text, 'utf8') > LOG_RULES.maxBytes) {
    throw new DomainError('PAYLOAD_TOO_LARGE', undefined, `Logs are limited to ${LOG_RULES.maxBytes / 1024 / 1024} MB`);
  }
  if (body.text.includes('\u0000')) {
    throw errors.validation('That looks like a binary file, not a text log', [
      { path: 'text', code: 'invalid', message: 'binary content' },
    ]);
  }
  if (body.text.trim() === '') {
    throw errors.validation('The log is empty', [{ path: 'text', code: 'too_small', message: 'empty' }]);
  }
  if (ctx.ip) await deps.consumeDaily(ctx.ip);

  const now = ctx.clock.now();
  const live = await firstRow<{ n: string }>(
    ctx.db,
    sql`SELECT count(*)::text AS n FROM "SharedLog" WHERE "purgedAt" IS NULL`,
  );
  if (live && Number(live.n) >= MAX_LIVE_LOGS) {
    throw errors.unavailable('Log sharing is busy, try again in a while', 600);
  }

  const { text, counts } = redactLog(body.text);
  const lines = parseLog(text);
  const summary = summarizeLog(lines);
  const stored = await gzipAsync(Buffer.from(text, 'utf8'), { level: 6 });
  const sizeBytes = Buffer.byteLength(text, 'utf8');

  const id = randomBytes(18).toString('base64url');
  const deleteToken = randomBytes(24).toString('base64url');
  const expiresAt = new Date(now.getTime() + LOG_RULES.ttlHours * HOUR_MS);
  const title = cleanTitle(body.title);

  await ctx.db.execute(
    sql`INSERT INTO "SharedLog"
          ("id", "userId", "deleteTokenHash", "title", "kind", "sizeBytes", "storedBytes", "lineCount",
           "redactions", "summary", "content", "createdAt", "expiresAt")
        VALUES (${id}, ${ctx.actor?.userId ?? null}, ${hashToken(deleteToken)}, ${title}, ${summary.kind},
                ${sizeBytes}, ${stored.length}, ${lines.length}, ${JSON.stringify(counts)}::jsonb,
                ${JSON.stringify(summary)}::jsonb, ${stored}, ${now.toISOString()}::timestamptz,
                ${expiresAt.toISOString()}::timestamptz)`,
  );

  return {
    id,
    path: `/logs/${id}`,
    deleteToken,
    expiresAt: expiresAt.toISOString(),
    kind: summary.kind,
    lineCount: lines.length,
    sizeBytes,
    redactions: counts,
  };
}

interface StoredLogRow {
  id: string;
  userId: number | null;
  deleteTokenHash: string | null;
  title: string | null;
  kind: string;
  sizeBytes: number;
  lineCount: number;
  redactions: LogRedactionCounts;
  summary: LogSummary | null;
  createdMs: number;
  expiresMs: number;
  purgedAt: unknown;
  hiddenAt: unknown;
  purgeReason: string | null;
}

const LOG_COLUMNS = sql`"id", "userId", "deleteTokenHash", "title", "kind", "sizeBytes", "lineCount", "redactions",
  "summary", (extract(epoch FROM "createdAt") * 1000)::float8 AS "createdMs",
  (extract(epoch FROM "expiresAt") * 1000)::float8 AS "expiresMs", "purgedAt", "hiddenAt", "purgeReason"`;

/** The live log `id`, or `NOT_FOUND` / `GONE` (detail = reason). */
async function loadLive(ctx: Ctx, id: string): Promise<StoredLogRow> {
  const row = await firstRow<StoredLogRow>(ctx.db, sql`SELECT ${LOG_COLUMNS} FROM "SharedLog" WHERE "id" = ${id}`);
  if (!row) throw errors.notFound('Log');
  if (row.purgedAt !== null) throw errors.gone(row.purgeReason ?? 'expired');
  if (row.hiddenAt !== null) throw errors.gone('reported');
  if (Number(row.expiresMs) <= ctx.clock.now().getTime()) throw errors.gone('expired');
  return row;
}

function normaliseName(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

interface CatalogRow {
  id: number;
  name: string;
  manifestId: string;
  slug: string;
  type: string | null;
  userSlug: string | null;
}

/** Links the mods of the loader output to catalog mods with the same name or manifest id. */
async function resolveMods(ctx: Ctx, summary: LogSummary): Promise<LogDTO['summary']['mods']> {
  const keys = [...new Set(summary.mods.map((m) => normaliseName(m.name)).filter((k) => k.length >= 3))];
  const byKey = new Map<string, CatalogRow>();
  if (keys.length > 0) {
    const list = sql.join(
      keys.map((k) => sql`${k}`),
      sql`, `,
    );
    const found = await rows<CatalogRow>(
      ctx.db,
      sql`SELECT m."id", m."name", m."mod_id" AS "manifestId", m."slug", m."type", u."slug" AS "userSlug"
            FROM "Mod" m LEFT JOIN "User" u ON u."id" = m."userId"
           WHERE m."status" = 'published'
             AND (regexp_replace(lower(m."name"), '[^a-z0-9]+', '', 'g') IN (${list})
               OR regexp_replace(lower(m."mod_id"), '[^a-z0-9]+', '', 'g') IN (${list}))
           ORDER BY m."id"`,
    );
    for (const row of found) {
      for (const key of [normaliseName(row.manifestId), normaliseName(row.name)]) {
        if (!byKey.has(key)) byKey.set(key, row);
      }
    }
  }
  return summary.mods.map((entry) => {
    const hit = byKey.get(normaliseName(entry.name));
    return {
      ...entry,
      mod:
        hit?.userSlug && hit.slug
          ? {
              id: hit.id,
              name: hit.name,
              canonicalPath: modPath(hit.type === 'Build' ? 'build' : 'mod', hit.userSlug, hit.slug),
            }
          : null,
    };
  });
}

const EMPTY_COUNTS = { lines: 0, fatal: 0, error: 0, warning: 0, info: 0, debug: 0 } as const;

export async function getLog(ctx: Ctx, id: string): Promise<LogDTO> {
  const row = await loadLive(ctx, id);
  const summary: LogSummary = row.summary ?? {
    kind: 'unknown',
    gameVersion: null,
    loaderName: null,
    loaderVersion: null,
    unityVersion: null,
    mods: [],
    counts: { ...EMPTY_COUNTS },
    topErrors: [],
    firstErrorLine: null,
    firstTime: null,
    lastTime: null,
  };
  return {
    id: row.id,
    title: row.title,
    kind: summary.kind,
    createdAt: new Date(Number(row.createdMs)).toISOString(),
    expiresAt: new Date(Number(row.expiresMs)).toISOString(),
    sizeBytes: row.sizeBytes,
    lineCount: row.lineCount,
    redactions: row.redactions,
    summary: { ...summary, mods: await resolveMods(ctx, summary) },
    isOwner: ctx.actor !== null && row.userId !== null && row.userId === ctx.actor.userId,
  };
}

export async function getLogRaw(ctx: Ctx, id: string): Promise<{ text: string; filename: string }> {
  await loadLive(ctx, id);
  const found = await firstRow<{ content: Buffer | null }>(
    ctx.db,
    sql`SELECT "content" FROM "SharedLog" WHERE "id" = ${id} AND "purgedAt" IS NULL`,
  );
  if (!found?.content) throw errors.gone('expired');
  const text = (await gunzipAsync(found.content)).toString('utf8');
  return { text, filename: `sotf-log-${id.slice(0, 8)}.txt` };
}

async function purgeOne(ctx: Ctx, id: string, reason: 'deleted' | 'reported'): Promise<void> {
  await ctx.db.execute(
    sql`UPDATE "SharedLog"
           SET "content" = NULL, "title" = NULL, "summary" = NULL, "userId" = NULL, "deleteTokenHash" = NULL,
               "redactions" = '{}'::jsonb, "purgedAt" = ${ctx.clock.now().toISOString()}::timestamptz, "purgeReason" = ${reason}
         WHERE "id" = ${id} AND "purgedAt" IS NULL`,
  );
}

/** Deletes a log now: with the creation token or as the signed-in creator. */
export async function deleteLog(ctx: Ctx, id: string, token: string | undefined): Promise<void> {
  const row = await loadLive(ctx, id);
  const isOwner = ctx.actor !== null && row.userId !== null && row.userId === ctx.actor.userId;
  let tokenOk = false;
  if (token && row.deleteTokenHash) {
    const given = Buffer.from(hashToken(token), 'hex');
    const expected = Buffer.from(row.deleteTokenHash, 'hex');
    tokenOk = given.length === expected.length && timingSafeEqual(given, expected);
  }
  if (!isOwner && !tokenOk) throw errors.forbidden('Only the creator of this log can delete it');
  await purgeOne(ctx, id, 'deleted');
}

/** An abuse report. `LOG_RULES.reportsToHide` reports hide the log; the next purge deletes it. */
export async function reportLog(
  ctx: Ctx,
  id: string,
  report: { reason: string; note?: string | undefined },
): Promise<void> {
  await loadLive(ctx, id);
  const updated = await firstRow<{ reportCount: number }>(
    ctx.db,
    sql`UPDATE "SharedLog"
           SET "reportCount" = "reportCount" + 1,
               "hiddenAt" = CASE WHEN "reportCount" + 1 >= ${LOG_RULES.reportsToHide} THEN now() ELSE "hiddenAt" END
         WHERE "id" = ${id} AND "purgedAt" IS NULL
     RETURNING "reportCount"`,
  );
  ctx.log.warn(
    { logId: id, reason: report.reason, hasNote: Boolean(report.note), reports: updated?.reportCount ?? 0 },
    'shared log reported',
  );
}

/** Hourly purge: expired and hidden logs lose their payload; old tombstones disappear. */
export async function purgeLogs(
  ctx: Pick<Ctx, 'db' | 'clock'>,
): Promise<{ purged: number; tombstonesDeleted: number }> {
  const now = ctx.clock.now();
  const purged = await ctx.db.execute(
    sql`UPDATE "SharedLog"
           SET "content" = NULL, "title" = NULL, "summary" = NULL, "userId" = NULL, "deleteTokenHash" = NULL,
               "redactions" = '{}'::jsonb, "purgedAt" = ${now.toISOString()}::timestamptz,
               "purgeReason" = CASE WHEN "hiddenAt" IS NOT NULL AND "expiresAt" > ${now.toISOString()}::timestamptz THEN 'reported' ELSE 'expired' END
         WHERE "purgedAt" IS NULL AND ("expiresAt" <= ${now.toISOString()}::timestamptz OR "hiddenAt" IS NOT NULL)`,
  );
  const cutoff = new Date(now.getTime() - TOMBSTONE_DAYS * 24 * HOUR_MS);
  const deleted = await ctx.db.execute(
    sql`DELETE FROM "SharedLog" WHERE "purgedAt" IS NOT NULL AND "purgedAt" < ${cutoff.toISOString()}::timestamptz`,
  );
  return { purged: purged.rowCount ?? 0, tombstonesDeleted: deleted.rowCount ?? 0 };
}
