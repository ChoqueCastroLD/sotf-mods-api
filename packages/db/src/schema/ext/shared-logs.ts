/** "Share logs" (migration 2250): 24-hour game logs behind an unguessable link. */
import { customType, index, integer, jsonb, pgTable, text } from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';
import type { JsonObject } from '../_json.ts';
import { user } from '../legacy/user.ts';

const bytea = customType<{ data: Buffer; driverData: Buffer }>({
  dataType() {
    return 'bytea';
  },
});

export const SHARED_LOG_PURGE_REASONS = ['expired', 'deleted', 'reported'] as const;
export type SharedLogPurgeReason = (typeof SHARED_LOG_PURGE_REASONS)[number];

export const sharedLog = pgTable(
  'SharedLog',
  {
    /** 24 characters of base64url (144 random bits). */
    id: text('id').primaryKey(),
    userId: integer('userId').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    /** SHA-256 (hex) of the creator's "delete now" token. */
    deleteTokenHash: text('deleteTokenHash'),
    title: text('title'),
    kind: text('kind').notNull().default('unknown'),
    /** Bytes of the redacted text. */
    sizeBytes: integer('sizeBytes').notNull().default(0),
    /** Bytes stored (gzip). */
    storedBytes: integer('storedBytes').notNull().default(0),
    lineCount: integer('lineCount').notNull().default(0),
    redactions: jsonb('redactions').$type<JsonObject>().notNull().default({}),
    summary: jsonb('summary').$type<JsonObject>(),
    /** gzip of the redacted text; NULL once purged. */
    content: bytea('content'),
    reportCount: integer('reportCount').notNull().default(0),
    hiddenAt: tstz('hiddenAt'),
    purgeReason: text('purgeReason').$type<SharedLogPurgeReason>(),
    createdAt: tstz('createdAt').notNull().defaultNow(),
    expiresAt: tstz('expiresAt').notNull(),
    purgedAt: tstz('purgedAt'),
  },
  (t) => [index('SharedLog_userId_idx').on(t.userId)],
);

export type SharedLogRow = typeof sharedLog.$inferSelect;
