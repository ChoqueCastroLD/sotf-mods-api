/** "KelvinGPTMessages": KelvinSeek conversation history (legacy table + `isHashed`). */
import { boolean, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { ts3 } from '../_columns.ts';

export const kelvinGptMessages = pgTable('KelvinGPTMessages', {
  id: serial('id').primaryKey(),
  createdAt: ts3('createdAt').notNull().defaultNow(),
  updatedAt: ts3('updatedAt')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  /** v2 stores HMAC(chat_id) and sets isHashed (PLAN §6.8). */
  chatId: text('chatId').notNull(),
  messageId: text('messageId').notNull().default(''),
  prompt: text('prompt').notNull().default(''),
  message: text('message').notNull(),
  role: text('role').notNull(),
  who: text('who').notNull(),
  isHashed: boolean('isHashed').notNull().default(false),
});

export type KelvinGptMessage = typeof kelvinGptMessages.$inferSelect;
export type NewKelvinGptMessage = typeof kelvinGptMessages.$inferInsert;
