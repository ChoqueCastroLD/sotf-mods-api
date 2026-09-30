/** Mod Jams (migration 2210): jams, categories, entries, votes, results and follows. */
import {
  boolean,
  doublePrecision,
  index,
  integer,
  pgTable,
  primaryKey,
  smallint,
  text,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';
import { mod } from '../legacy/mod.ts';
import { user } from '../legacy/user.ts';

export const JAM_PHASES = [
  'draft',
  'announced',
  'submissions',
  'submissions_closed',
  'voting',
  'results',
  'archived',
] as const;
export type JamPhase = (typeof JAM_PHASES)[number];

export const JAM_ENTRY_KINDS = ['any', 'mod', 'build'] as const;
export type JamEntryKinds = (typeof JAM_ENTRY_KINDS)[number];

export const JAM_ENTRY_STATUSES = ['active', 'withdrawn', 'hidden', 'disqualified'] as const;
export type JamEntryStatus = (typeof JAM_ENTRY_STATUSES)[number];

export const jam = pgTable(
  'Jam',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    slug: text('slug').notNull().unique('Jam_slug_key'),
    title: text('title').notNull(),
    tagline: text('tagline').notNull().default(''),
    theme: text('theme').notNull().default(''),
    themeHidden: boolean('themeHidden').notNull().default(false),
    descriptionMd: text('descriptionMd').notNull().default(''),
    descriptionHtml: text('descriptionHtml'),
    rulesMd: text('rulesMd').notNull().default(''),
    rulesHtml: text('rulesHtml'),
    prizesMd: text('prizesMd').notNull().default(''),
    prizesHtml: text('prizesHtml'),
    bannerUrl: text('bannerUrl'),
    accent: text('accent').notNull().default('signal'),
    phase: text('phase').$type<JamPhase>().notNull().default('draft'),
    phaseLocked: boolean('phaseLocked').notNull().default(false),
    announceAt: tstz('announceAt'),
    submissionsOpenAt: tstz('submissionsOpenAt'),
    submissionsCloseAt: tstz('submissionsCloseAt'),
    votingOpenAt: tstz('votingOpenAt'),
    votingCloseAt: tstz('votingCloseAt'),
    archiveAt: tstz('archiveAt'),
    entryKinds: text('entryKinds').$type<JamEntryKinds>().notNull().default('any'),
    maxEntriesPerUser: integer('maxEntriesPerUser').notNull().default(1),
    maxCoAuthors: integer('maxCoAuthors').notNull().default(4),
    minVoterAgeDays: integer('minVoterAgeDays').notNull().default(3),
    minVoterActivity: integer('minVoterActivity').notNull().default(1),
    minVotes: integer('minVotes').notNull().default(5),
    autoPublishResults: boolean('autoPublishResults').notNull().default(true),
    resultsComputedAt: tstz('resultsComputedAt'),
    resultsPublishedAt: tstz('resultsPublishedAt'),
    ogImageKey: text('ogImageKey'),
    createdById: integer('createdById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    createdAt: tstz('createdAt').notNull().defaultNow(),
    updatedAt: tstz('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (t) => [index('Jam_phase_idx').on(t.phase)],
);

export type Jam = typeof jam.$inferSelect;
export type NewJam = typeof jam.$inferInsert;

export const jamCategory = pgTable(
  'JamCategory',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    jamId: integer('jamId')
      .notNull()
      .references(() => jam.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    key: text('key').notNull(),
    label: text('label'),
    weight: integer('weight').notNull().default(1),
    position: integer('position').notNull().default(0),
  },
  (t) => [uniqueIndex('JamCategory_jam_key_key').on(t.jamId, t.key)],
);

export type JamCategory = typeof jamCategory.$inferSelect;

export const jamEntry = pgTable(
  'JamEntry',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    jamId: integer('jamId')
      .notNull()
      .references(() => jam.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    modId: integer('modId')
      .notNull()
      .references(() => mod.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    submittedById: integer('submittedById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    notesMd: text('notesMd').notNull().default(''),
    notesHtml: text('notesHtml'),
    status: text('status').$type<JamEntryStatus>().notNull().default('active'),
    statusReason: text('statusReason'),
    createdDuringJam: boolean('createdDuringJam').notNull().default(false),
    createdAt: tstz('createdAt').notNull().defaultNow(),
    updatedAt: tstz('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (t) => [
    uniqueIndex('JamEntry_jam_mod_key').on(t.jamId, t.modId),
    index('JamEntry_jamId_status_idx').on(t.jamId, t.status),
    index('JamEntry_modId_idx').on(t.modId),
  ],
);

export type JamEntry = typeof jamEntry.$inferSelect;

export const jamEntryAuthor = pgTable(
  'JamEntryAuthor',
  {
    entryId: integer('entryId')
      .notNull()
      .references(() => jamEntry.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    userId: integer('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    isLead: boolean('isLead').notNull().default(false),
  },
  (t) => [
    primaryKey({ name: 'JamEntryAuthor_pkey', columns: [t.entryId, t.userId] }),
    index('JamEntryAuthor_userId_idx').on(t.userId),
  ],
);

export const jamVote = pgTable(
  'JamVote',
  {
    entryId: integer('entryId')
      .notNull()
      .references(() => jamEntry.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    categoryId: integer('categoryId')
      .notNull()
      .references(() => jamCategory.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    voterId: integer('voterId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    jamId: integer('jamId')
      .notNull()
      .references(() => jam.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    score: smallint('score').notNull(),
    changes: integer('changes').notNull().default(0),
    ipHash: text('ipHash'),
    excludedReason: text('excludedReason'),
    createdAt: tstz('createdAt').notNull().defaultNow(),
    updatedAt: tstz('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (t) => [
    primaryKey({ name: 'JamVote_pkey', columns: [t.entryId, t.categoryId, t.voterId] }),
    index('JamVote_jamId_voterId_idx').on(t.jamId, t.voterId),
    index('JamVote_voterId_idx').on(t.voterId),
  ],
);

export const jamResult = pgTable(
  'JamResult',
  {
    jamId: integer('jamId')
      .notNull()
      .references(() => jam.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    entryId: integer('entryId')
      .notNull()
      .references(() => jamEntry.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    categoryKey: text('categoryKey').notNull(),
    votes: integer('votes').notNull().default(0),
    average: doublePrecision('average').notNull().default(0),
    score: doublePrecision('score').notNull().default(0),
    rank: integer('rank'),
    computedAt: tstz('computedAt').notNull().defaultNow(),
  },
  (t) => [
    primaryKey({ name: 'JamResult_pkey', columns: [t.jamId, t.entryId, t.categoryKey] }),
    index('JamResult_jam_cat_rank_idx').on(t.jamId, t.categoryKey, t.rank),
  ],
);

export const jamFollow = pgTable(
  'JamFollow',
  {
    jamId: integer('jamId')
      .notNull()
      .references(() => jam.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    userId: integer('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    createdAt: tstz('createdAt').notNull().defaultNow(),
  },
  (t) => [
    primaryKey({ name: 'JamFollow_pkey', columns: [t.jamId, t.userId] }),
    index('JamFollow_userId_idx').on(t.userId),
  ],
);
