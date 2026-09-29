/** Signals (in-app notifications), preferences and the email outbox (PLAN §6.4, §7.3). */
import { bigint, boolean, integer, jsonb, pgTable, primaryKey, text } from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';
import type { JsonObject } from '../_json.ts';
import { user } from '../legacy/user.ts';

export const notification = pgTable('Notification', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  type: text('type').notNull(),
  actorId: integer('actorId').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  targetType: text('targetType'),
  targetId: integer('targetId'),
  groupKey: text('groupKey'),
  data: jsonb('data').$type<JsonObject>().notNull().default({}),
  readAt: tstz('readAt'),
  emailedAt: tstz('emailedAt'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type Notification = typeof notification.$inferSelect;
export type NewNotification = typeof notification.$inferInsert;

export const EMAIL_CADENCES = ['instant', 'daily', 'weekly', 'off'] as const;
export type EmailCadence = (typeof EMAIL_CADENCES)[number];

/** No row = the defaults of PLAN §7.3. */
export const notificationPreference = pgTable(
  'NotificationPreference',
  {
    userId: integer('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    type: text('type').notNull(),
    inApp: boolean('inApp').notNull(),
    email: text('email').$type<EmailCadence>().notNull(),
  },
  (t) => [primaryKey({ name: 'NotificationPreference_pkey', columns: [t.userId, t.type] })],
);

export type NotificationPreference = typeof notificationPreference.$inferSelect;

export const emailOutbox = pgTable('EmailOutbox', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  userId: integer('userId').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  toEmail: text('toEmail').notNull(),
  template: text('template').notNull(),
  locale: text('locale').notNull(),
  payload: jsonb('payload').$type<JsonObject>().notNull(),
  dedupeKey: text('dedupeKey'),
  status: text('status').notNull().default('queued'),
  sendAfter: tstz('sendAfter').notNull().defaultNow(),
  attempts: integer('attempts').notNull().default(0),
  providerId: text('providerId'),
  error: text('error'),
  sentAt: tstz('sentAt'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type EmailOutbox = typeof emailOutbox.$inferSelect;
export type NewEmailOutbox = typeof emailOutbox.$inferInsert;
