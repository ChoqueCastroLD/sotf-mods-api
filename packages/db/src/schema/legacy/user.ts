/**
 * "User" (legacy table + v2 columns of PLAN §6.3). Legacy columns mirror 0000_legacy_baseline.sql;
 * v2 columns are NULL or have a constant default so legacy INSERTs keep working.
 */
import { sql } from 'drizzle-orm';
import { boolean, integer, jsonb, pgTable, serial, smallint, text, uniqueIndex, uuid } from 'drizzle-orm/pg-core';
import { ts3 } from '../_columns.ts';
import type { JsonObject, UserLink, UserPrivacy, UserSettings } from '../_json.ts';

export const USER_ROLES = ['user', 'moderator', 'admin'] as const;
export type UserRole = (typeof USER_ROLES)[number];

export const user = pgTable(
  'User',
  {
    // Legacy columns.
    id: serial('id').primaryKey(),
    email: text('email').notNull(),
    /** PHC string: argon2id from Bun (legacy) or v2; `$2b$` bcrypt accepted and rehashed. */
    password: text('password').notNull(),
    name: text('name').notNull(),
    imageUrl: text('imageUrl').notNull().default(''),
    slug: text('slug').notNull(),
    isTrusted: boolean('isTrusted').notNull().default(false),
    createdAt: ts3('createdAt').notNull().defaultNow(),
    /** Prisma `@updatedAt`: set by the writer; the database default exists since 0002. */
    updatedAt: ts3('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),

    // v2 columns.
    /** lower(trim(email)), maintained by trg_user_email_normalized. */
    emailNormalized: text('emailNormalized'),
    role: text('role').$type<UserRole>().notNull().default('user'),
    verifiedCreator: boolean('verifiedCreator').notNull().default(false),
    legacyTrusted: boolean('legacyTrusted'),
    displayName: text('displayName'),
    bioMd: text('bioMd'),
    links: jsonb('links').$type<UserLink[]>().notNull().default([]),
    avatarMediaId: uuid('avatarMediaId'),
    bannerMediaId: uuid('bannerMediaId'),
    bannerSeed: integer('bannerSeed'),
    settings: jsonb('settings').$type<UserSettings>().notNull().default({}),
    privacy: jsonb('privacy').$type<UserPrivacy>().notNull().default({}),
    onboarding: jsonb('onboarding').$type<JsonObject>().notNull().default({}),
    pinnedModIds: integer('pinnedModIds').array().notNull().default(sql`'{}'::integer[]`),
    emailVerifiedAt: ts3('emailVerifiedAt'),
    passwordUpdatedAt: ts3('passwordUpdatedAt'),
    lastLoginAt: ts3('lastLoginAt'),
    lastSeenAt: ts3('lastSeenAt'),
    suspendedUntil: ts3('suspendedUntil'),
    bannedAt: ts3('bannedAt'),
    deletedAt: ts3('deletedAt'),
    banReason: text('banReason'),
    trustLevel: smallint('trustLevel').notNull().default(0),
    xp: integer('xp').notNull().default(0),
    ogImageKey: text('ogImageKey'),
  },
  (t) => [uniqueIndex('User_email_key').on(t.email), uniqueIndex('User_slug_key').on(t.slug)],
);

export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;
