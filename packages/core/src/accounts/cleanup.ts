/**
 * Retention of account data (PLAN §9.3), daily job `cleanup.sessions`:
 *
 * - Sessions: kept until they expire (or are revoked) + 30 days, then deleted.
 * - One-time tokens: deleted 7 days after they expire or are used.
 * - "AuthEvent": 90 days.
 * - "EmailOutbox": final rows (sent, suppressed, failed) after 90 days.
 * - Data exports: expired ZIPs deleted from the private bucket (24 h).
 */
import type { Database } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { Clock } from '../kernel/clock.ts';
import type { Logger } from '../kernel/logger.ts';
import { expireExports } from './export.ts';
import type { ExportStorage } from './export-storage.ts';

export interface CleanupResult {
  sessions: number;
  tokens: number;
  authEvents: number;
  emails: number;
  exports: number;
}

export async function cleanupAccountData(deps: {
  db: Database;
  clock: Clock;
  log: Logger;
  storage: ExportStorage | null;
}): Promise<CleanupResult> {
  const now = deps.clock.now().toISOString();
  const sessions = await deps.db.execute(sql`
    DELETE FROM "Session"
    WHERE LEAST("expiresAt", "absoluteExpiresAt", COALESCE("revokedAt", 'infinity'::timestamptz))
      < ${now}::timestamptz - interval '30 days'`);
  const tokens = await deps.db.execute(sql`
    DELETE FROM "AuthToken"
    WHERE LEAST("expiresAt", COALESCE("usedAt", 'infinity'::timestamptz)) < ${now}::timestamptz - interval '7 days'`);
  const authEvents = await deps.db.execute(
    sql`DELETE FROM "AuthEvent" WHERE "createdAt" < ${now}::timestamptz - interval '90 days'`,
  );
  const emails = await deps.db.execute(sql`
    DELETE FROM "EmailOutbox"
    WHERE "status" IN ('sent', 'suppressed', 'failed') AND "createdAt" < ${now}::timestamptz - interval '90 days'`);
  const exports = await expireExports(deps);
  const result = {
    sessions: sessions.rowCount ?? 0,
    tokens: tokens.rowCount ?? 0,
    authEvents: authEvents.rowCount ?? 0,
    emails: emails.rowCount ?? 0,
    exports,
  };
  deps.log.info(result, 'account data retention done');
  return result;
}
