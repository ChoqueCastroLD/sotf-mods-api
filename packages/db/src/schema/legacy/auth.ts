/** Legacy authentication tables: "Token", "PasswordResetToken" and the dead "LoginAttempt". */
import { boolean, integer, pgTable, serial, text, uniqueIndex } from 'drizzle-orm/pg-core';
import { ts3 } from '../_columns.ts';
import { user } from './user.ts';

/** Legacy JWTs (never migrated: everyone signs in again once, PLAN §6.10). */
export const token = pgTable('Token', {
  id: serial('id').primaryKey(),
  token: text('token').notNull(),
  expiresAt: ts3('expiresAt').notNull(),
  userId: integer('userId').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  createdAt: ts3('createdAt').notNull().defaultNow(),
  updatedAt: ts3('updatedAt')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type Token = typeof token.$inferSelect;

/** Legacy reset tokens, accepted for 24 h after the cutover (PLAN §6.10). */
export const passwordResetToken = pgTable(
  'PasswordResetToken',
  {
    id: serial('id').primaryKey(),
    token: text('token').notNull(),
    expiresAt: ts3('expiresAt').notNull(),
    userId: integer('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'restrict', onUpdate: 'cascade' }),
    createdAt: ts3('createdAt').notNull().defaultNow(),
    updatedAt: ts3('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (t) => [uniqueIndex('PasswordResetToken_token_key').on(t.token)],
);

export type PasswordResetToken = typeof passwordResetToken.$inferSelect;

/** Dead legacy table (nobody writes it); kept for the superset guarantee. */
export const loginAttempt = pgTable('LoginAttempt', {
  id: serial('id').primaryKey(),
  ip: text('ip').notNull(),
  userAgent: text('userAgent').notNull(),
  email: text('email').notNull(),
  success: boolean('success').notNull(),
  createdAt: ts3('createdAt').notNull().defaultNow(),
  updatedAt: ts3('updatedAt')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type LoginAttempt = typeof loginAttempt.$inferSelect;
