/** Authentication (PLAN §6.4, §6.10): opaque sessions, one-time tokens and the security log. */
import { bigint, boolean, integer, jsonb, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { uuidv7 } from 'uuidv7';
import { tstz } from '../_columns.ts';
import type { JsonObject } from '../_json.ts';
import { user } from '../legacy/user.ts';

export const session = pgTable('Session', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  /** sha256 of the cookie token; the token itself is never stored. */
  tokenHash: text('tokenHash').notNull(),
  /** First 16 hex chars of sha256("User"."password"): a password change invalidates the session. */
  pwdFingerprint: text('pwdFingerprint').notNull(),
  createdAt: tstz('createdAt').notNull().defaultNow(),
  lastSeenAt: tstz('lastSeenAt').notNull().defaultNow(),
  expiresAt: tstz('expiresAt').notNull(),
  absoluteExpiresAt: tstz('absoluteExpiresAt').notNull(),
  revokedAt: tstz('revokedAt'),
  ipHash: text('ipHash'),
  userAgent: text('userAgent'),
  deviceLabel: text('deviceLabel'),
});

export type Session = typeof session.$inferSelect;
export type NewSession = typeof session.$inferInsert;

export const AUTH_TOKEN_KINDS = ['password_reset', 'email_verify', 'email_change'] as const;
export type AuthTokenKind = (typeof AUTH_TOKEN_KINDS)[number];

export const authToken = pgTable('AuthToken', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  kind: text('kind').$type<AuthTokenKind>().notNull(),
  tokenHash: text('tokenHash').notNull(),
  payload: jsonb('payload').$type<JsonObject>().notNull().default({}),
  expiresAt: tstz('expiresAt').notNull(),
  usedAt: tstz('usedAt'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type AuthToken = typeof authToken.$inferSelect;
export type NewAuthToken = typeof authToken.$inferInsert;

/** Security log (90-day retention); no foreign key on purpose. */
export const authEvent = pgTable('AuthEvent', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  userId: integer('userId'),
  kind: text('kind').notNull(),
  success: boolean('success').notNull(),
  ipHash: text('ipHash'),
  userAgent: text('userAgent'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type AuthEvent = typeof authEvent.$inferSelect;
export type NewAuthEvent = typeof authEvent.$inferInsert;
