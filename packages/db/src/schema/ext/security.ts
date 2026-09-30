/**
 * Account security (T1-02, T1-26, PLAN §9): TOTP two-factor, recovery codes, WebAuthn passkeys,
 * sign-in challenges and the known countries/devices behind the new-login alert.
 */
import { bigint, boolean, integer, jsonb, pgTable, primaryKey, text, uuid } from 'drizzle-orm/pg-core';
import { uuidv7 } from 'uuidv7';
import { tstz } from '../_columns.ts';
import type { JsonObject } from '../_json.ts';
import { user } from '../legacy/user.ts';

export const userTotp = pgTable('UserTotp', {
  userId: integer('userId')
    .primaryKey()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  /** AES-256-GCM ciphertext of the TOTP secret (`v1.<iv>.<tag>.<data>`, base64url). */
  secret: text('secret').notNull(),
  /** NULL while the setup is pending (2FA is not active yet). */
  confirmedAt: tstz('confirmedAt'),
  /** Last accepted 30 s time step (replay protection). */
  lastUsedStep: bigint('lastUsedStep', { mode: 'number' }),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type UserTotp = typeof userTotp.$inferSelect;

export const userRecoveryCode = pgTable('UserRecoveryCode', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  codeHash: text('codeHash').notNull(),
  usedAt: tstz('usedAt'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type UserRecoveryCode = typeof userRecoveryCode.$inferSelect;

export const userPasskey = pgTable('UserPasskey', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  credentialId: text('credentialId').notNull(),
  publicKey: text('publicKey').notNull(),
  counter: bigint('counter', { mode: 'number' }).notNull().default(0),
  transports: text('transports').array().notNull().default([]),
  deviceType: text('deviceType').notNull().default('singleDevice'),
  backedUp: boolean('backedUp').notNull().default(false),
  name: text('name').notNull(),
  createdAt: tstz('createdAt').notNull().defaultNow(),
  lastUsedAt: tstz('lastUsedAt'),
});

export type UserPasskey = typeof userPasskey.$inferSelect;

export const AUTH_CHALLENGE_KINDS = ['login_2fa', 'passkey_register', 'passkey_login'] as const;
export type AuthChallengeKind = (typeof AUTH_CHALLENGE_KINDS)[number];

export const authChallenge = pgTable('AuthChallenge', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  kind: text('kind').$type<AuthChallengeKind>().notNull(),
  userId: integer('userId').references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  challenge: text('challenge'),
  payload: jsonb('payload').$type<JsonObject>().notNull().default({}),
  failures: integer('failures').notNull().default(0),
  expiresAt: tstz('expiresAt').notNull(),
  usedAt: tstz('usedAt'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type AuthChallenge = typeof authChallenge.$inferSelect;

export const LOGIN_SIGNAL_KINDS = ['country', 'device'] as const;
export type LoginSignalKind = (typeof LOGIN_SIGNAL_KINDS)[number];

export const userLoginSignal = pgTable(
  'UserLoginSignal',
  {
    userId: integer('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    kind: text('kind').$type<LoginSignalKind>().notNull(),
    value: text('value').notNull(),
    firstSeenAt: tstz('firstSeenAt').notNull().defaultNow(),
    lastSeenAt: tstz('lastSeenAt').notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.kind, t.value] })],
);

export type UserLoginSignal = typeof userLoginSignal.$inferSelect;
