/** Personal access tokens (T1-08, migration 2130) and OAuth identities (T1-01, migration 2131). */
import { integer, pgTable, text, uniqueIndex, uuid } from 'drizzle-orm/pg-core';
import { uuidv7 } from 'uuidv7';
import { tstz } from '../_columns.ts';
import { user } from '../legacy/user.ts';

export const personalAccessToken = pgTable('PersonalAccessToken', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  name: text('name').notNull(),
  /** sha256 of the secret; the secret itself is shown once and never stored. */
  tokenHash: text('tokenHash').notNull().unique('PersonalAccessToken_tokenHash_key'),
  /** First characters of the secret, to recognise the token in the owner's list. */
  tokenPrefix: text('tokenPrefix').notNull(),
  scopes: text('scopes').array().notNull(),
  createdAt: tstz('createdAt').notNull().defaultNow(),
  lastUsedAt: tstz('lastUsedAt'),
  expiresAt: tstz('expiresAt'),
  revokedAt: tstz('revokedAt'),
});

export type PersonalAccessToken = typeof personalAccessToken.$inferSelect;
export type NewPersonalAccessToken = typeof personalAccessToken.$inferInsert;

export const OAUTH_PROVIDERS = ['discord'] as const;
export type OAuthProvider = (typeof OAUTH_PROVIDERS)[number];

export const oauthIdentity = pgTable(
  'OAuthIdentity',
  {
    id: uuid('id')
      .primaryKey()
      .$defaultFn(() => uuidv7()),
    userId: integer('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    provider: text('provider').$type<OAuthProvider>().notNull(),
    providerUserId: text('providerUserId').notNull(),
    providerUsername: text('providerUsername').notNull(),
    createdAt: tstz('createdAt').notNull().defaultNow(),
    lastLoginAt: tstz('lastLoginAt'),
  },
  (t) => [
    uniqueIndex('OAuthIdentity_provider_subject_key').on(t.provider, t.providerUserId),
    uniqueIndex('OAuthIdentity_userId_provider_key').on(t.userId, t.provider),
  ],
);

export type OAuthIdentity = typeof oauthIdentity.$inferSelect;

export const oauthLinkTicket = pgTable('OAuthLinkTicket', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  tokenHash: text('tokenHash').notNull().unique('OAuthLinkTicket_tokenHash_key'),
  provider: text('provider').$type<OAuthProvider>().notNull(),
  providerUserId: text('providerUserId').notNull(),
  providerUsername: text('providerUsername').notNull(),
  createdAt: tstz('createdAt').notNull().defaultNow(),
  expiresAt: tstz('expiresAt').notNull(),
  usedAt: tstz('usedAt'),
});

export type OAuthLinkTicket = typeof oauthLinkTicket.$inferSelect;
