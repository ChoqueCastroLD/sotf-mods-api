/**
 * Mod Jams (migration 2210). Time-boxed community events: a jam is announced (theme possibly
 * hidden), opens submissions (published mods/builds, solo or with co-authors), closes them, opens
 * voting (verified accounts, 1-5 stars per category, never on own entries), then publishes results
 * (Bayesian average with a minimum of votes) and is finally archived.
 *
 * The phase follows the schedule (worker job `jam.advance`) unless staff forced it (`phaseLocked`).
 * Live vote counts and averages are never exposed before the results are published.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { ModCardDTO } from './catalog.ts';
import { Count, EntityId, HttpUrl, IdParam, IsoDateTime, UserRefDTO } from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

export const JAM_PHASES = [
  'draft',
  'announced',
  'submissions',
  'submissions_closed',
  'voting',
  'results',
  'archived',
] as const;
export const JamPhase = z.enum(JAM_PHASES);
export type JamPhase = z.infer<typeof JamPhase>;

export const JAM_ENTRY_KINDS = ['any', 'mod', 'build'] as const;
export const JamEntryKinds = z.enum(JAM_ENTRY_KINDS);

export const JAM_ENTRY_STATUSES = ['active', 'withdrawn', 'hidden', 'disqualified'] as const;
export const JamEntryStatus = z.enum(JAM_ENTRY_STATUSES);
export type JamEntryStatus = z.infer<typeof JamEntryStatus>;

export const JAM_ACCENTS = ['signal', 'forest', 'ember', 'ocean', 'violet'] as const;
export const JamAccent = z.enum(JAM_ACCENTS);

/** Key of the overall row in results. */
export const JAM_OVERALL_KEY = '_overall';

/** Default categories created with a jam (label keys live in the `jams` i18n namespace). */
export const JAM_DEFAULT_CATEGORIES = ['fun', 'polish', 'creativity', 'lore'] as const;

export const JAM_RULES = {
  titleMax: 100,
  taglineMax: 200,
  themeMax: 120,
  mdMax: 10_000,
  notesMax: 1500,
  slugMax: 60,
  categoriesMax: 8,
  labelMax: 40,
  /** Votes one member may cast per hour (also the `jamVotes` bucket). */
  votesPerHour: 240,
} as const;

const CategoryKey = z
  .string()
  .trim()
  .toLowerCase()
  .regex(/^[a-z][a-z0-9-]{1,30}$/, 'use lowercase letters, digits and hyphens');

export const JamCategoryDTO = dto(
  'JamCategoryDTO',
  z.object({
    id: EntityId,
    key: z.string(),
    label: z.string().nullable().describe('Custom label; null = the translated default for the key'),
    weight: z.number().int().min(1).max(10),
    position: z.number().int(),
  }),
  {
    description: 'A voting category of a jam.',
    examples: [{ id: 1, key: 'fun', label: null, weight: 1, position: 0 }],
  },
);
export type JamCategoryDTO = z.infer<typeof JamCategoryDTO>;

const JamTimelineFields = {
  announceAt: IsoDateTime.nullable(),
  submissionsOpenAt: IsoDateTime.nullable(),
  submissionsCloseAt: IsoDateTime.nullable(),
  votingOpenAt: IsoDateTime.nullable(),
  votingCloseAt: IsoDateTime.nullable(),
  archiveAt: IsoDateTime.nullable(),
};

export const JamSummaryDTO = dto(
  'JamSummaryDTO',
  z.object({
    id: EntityId,
    slug: z.string(),
    title: z.string(),
    tagline: z.string(),
    theme: z.string().nullable().describe('null while the theme is hidden'),
    themeHidden: z.boolean().describe('True while the theme is still secret'),
    bannerUrl: HttpUrl.nullable(),
    accent: JamAccent,
    phase: JamPhase,
    entryCount: Count,
    ...JamTimelineFields,
    resultsPublishedAt: IsoDateTime.nullable(),
    ogImageUrl: HttpUrl.nullable(),
  }),
  {
    description: 'A jam in a list.',
    examples: [
      {
        id: 1,
        slug: 'autumn-jam-2026',
        title: 'Autumn Mod Jam',
        tagline: 'Ten days to build something the island has never seen.',
        theme: null,
        themeHidden: true,
        bannerUrl: null,
        accent: 'ember',
        phase: 'announced',
        entryCount: 0,
        announceAt: '2026-10-01T12:00:00.000Z',
        submissionsOpenAt: '2026-10-10T12:00:00.000Z',
        submissionsCloseAt: '2026-10-20T12:00:00.000Z',
        votingOpenAt: '2026-10-20T12:00:00.000Z',
        votingCloseAt: '2026-10-27T12:00:00.000Z',
        archiveAt: null,
        resultsPublishedAt: null,
        ogImageUrl: null,
      },
    ],
  },
);
export type JamSummaryDTO = z.infer<typeof JamSummaryDTO>;

export const JamDTO = dto(
  'JamDTO',
  JamSummaryDTO.extend({
    descriptionHtml: z.string(),
    rulesHtml: z.string(),
    prizesHtml: z.string(),
    entryKinds: JamEntryKinds,
    maxEntriesPerUser: z.number().int(),
    maxCoAuthors: z.number().int(),
    minVoterAgeDays: z.number().int(),
    minVotes: z.number().int(),
    categories: z.array(JamCategoryDTO),
  }),
  {
    description: 'A jam with rules, prizes and voting categories. The hidden theme is withheld until submissions open.',
    examples: [
      {
        id: 1,
        slug: 'autumn-jam-2026',
        title: 'Autumn Mod Jam',
        tagline: 'Ten days to build something the island has never seen.',
        theme: null,
        themeHidden: true,
        bannerUrl: null,
        accent: 'ember',
        phase: 'announced',
        entryCount: 0,
        announceAt: '2026-10-01T12:00:00.000Z',
        submissionsOpenAt: '2026-10-10T12:00:00.000Z',
        submissionsCloseAt: '2026-10-20T12:00:00.000Z',
        votingOpenAt: '2026-10-20T12:00:00.000Z',
        votingCloseAt: '2026-10-27T12:00:00.000Z',
        archiveAt: null,
        resultsPublishedAt: null,
        ogImageUrl: null,
        descriptionHtml: '<p>Build something new.</p>',
        rulesHtml: '<ul><li>One entry per person.</li></ul>',
        prizesHtml: '<p>Badges and eternal glory.</p>',
        entryKinds: 'any',
        maxEntriesPerUser: 1,
        maxCoAuthors: 4,
        minVoterAgeDays: 3,
        minVotes: 5,
        categories: [{ id: 1, key: 'fun', label: null, weight: 1, position: 0 }],
      },
    ],
  },
);
export type JamDTO = z.infer<typeof JamDTO>;

const SUMMARY_EXAMPLE = exampleOf(JamSummaryDTO);
const JAM_EXAMPLE = exampleOf(JamDTO);

export const JamListDTO = dto('JamListDTO', z.object({ items: z.array(JamSummaryDTO) }), {
  description: 'Every public jam (announced or later), newest first.',
  examples: [{ items: [SUMMARY_EXAMPLE] }],
});

export const JamEntryDTO = dto(
  'JamEntryDTO',
  z.object({
    id: EntityId,
    mod: ModCardDTO,
    authors: z.array(UserRefDTO.extend({ isLead: z.boolean() })),
    notesHtml: z.string().nullable(),
    createdDuringJam: z.boolean(),
    createdAt: IsoDateTime,
  }),
  {
    description: 'An active entry of a jam (the mod card plus the jam notes and the team).',
    examples: [
      {
        id: 7,
        mod: exampleOf(ModCardDTO),
        authors: [{ ...exampleOf(UserRefDTO), isLead: true }],
        notesHtml: '<p>Made in nine days.</p>',
        createdDuringJam: true,
        createdAt: '2026-10-12T09:00:00.000Z',
      },
    ],
  },
);
export type JamEntryDTO = z.infer<typeof JamEntryDTO>;

export const JamEntriesDTO = dto('JamEntriesDTO', z.object({ items: z.array(JamEntryDTO), total: Count }), {
  description: 'Entries of a jam. The order is stable per `seed` so that voters see a fair shuffle.',
  examples: [{ items: [], total: 0 }],
});

export const JamPlacementDTO = z.object({
  rank: z.number().int().min(1),
  entry: JamEntryDTO,
  votes: Count,
  average: z.number(),
  score: z.number().describe('Bayesian score'),
});

export const JamResultCategoryDTO = z.object({
  key: z.string(),
  label: z.string().nullable(),
  placements: z.array(JamPlacementDTO),
});

export const JamResultsDTO = dto(
  'JamResultsDTO',
  z.object({
    jam: JamSummaryDTO,
    overall: z.array(JamPlacementDTO).describe('Top placements overall'),
    categories: z.array(JamResultCategoryDTO),
    participants: Count,
    voters: Count,
    minVotes: z.number().int(),
  }),
  {
    description: 'Published results of a jam: a podium (top 3, ties included) overall and per category.',
    examples: [{ jam: SUMMARY_EXAMPLE, overall: [], categories: [], participants: 12, voters: 40, minVotes: 5 }],
  },
);
export type JamResultsDTO = z.infer<typeof JamResultsDTO>;

export const JamVoteEligibilityDTO = z.object({
  canVote: z.boolean(),
  reason: z.enum(['email_not_verified', 'account_too_new', 'not_enough_activity', 'not_voting']).nullable(),
});

export const MyJamStateDTO = dto(
  'MyJamStateDTO',
  z.object({
    following: z.boolean(),
    eligibility: JamVoteEligibilityDTO,
    myEntryIds: z.array(EntityId).describe('Active entries the member is an author of (cannot be voted)'),
    votes: z
      .array(z.object({ entryId: EntityId, categoryId: EntityId, score: z.number().int().min(1).max(5) }))
      .describe('Own votes only'),
  }),
  {
    description: 'Own state in a jam: follow, vote eligibility, own entries and own votes.',
    examples: [
      {
        following: true,
        eligibility: { canVote: true, reason: null },
        myEntryIds: [7],
        votes: [{ entryId: 8, categoryId: 1, score: 4 }],
      },
    ],
  },
);
export type MyJamStateDTO = z.infer<typeof MyJamStateDTO>;

export const MyJamParticipationDTO = dto(
  'MyJamParticipationDTO',
  z.object({
    jam: JamSummaryDTO,
    entryId: EntityId,
    status: JamEntryStatus,
    mod: z.object({ id: EntityId, name: z.string(), canonicalPath: z.string() }),
    overallRank: z.number().int().nullable(),
  }),
  {
    description: 'An entry of the signed-in member in a jam.',
    examples: [
      {
        jam: SUMMARY_EXAMPLE,
        entryId: 7,
        status: 'active',
        mod: { id: 20, name: "Axel's Mod Menu", canonicalPath: "/mods/imaxel/axel's-mod-menu" },
        overallRank: null,
      },
    ],
  },
);

export const MyJamsDTO = dto(
  'MyJamsDTO',
  z.object({
    open: z.array(JamSummaryDTO).describe('Jams accepting submissions'),
    participations: z.array(MyJamParticipationDTO),
  }),
  {
    description: 'Creator panel: jams open for submissions and the member jam history.',
    examples: [{ open: [SUMMARY_EXAMPLE], participations: [] }],
  },
);

export const EligibleModDTO = z.object({
  id: EntityId,
  name: z.string(),
  kind: z.enum(['mod', 'build']),
  canonicalPath: z.string(),
  thumbnailUrl: HttpUrl.nullable(),
  submitted: z.boolean(),
});
export const EligibleModsDTO = dto('EligibleModsDTO', z.object({ items: z.array(EligibleModDTO) }), {
  description: 'Published mods and builds of the member that can be submitted to a jam.',
  examples: [
    {
      items: [
        {
          id: 20,
          name: "Axel's Mod Menu",
          kind: 'mod',
          canonicalPath: "/mods/imaxel/axel's-mod-menu",
          thumbnailUrl: null,
          submitted: false,
        },
      ],
    },
  ],
});

export const SubmitJamEntryBody = dto(
  'SubmitJamEntryBody',
  z.strictObject({ modId: EntityId, notesMd: z.string().max(JAM_RULES.notesMax).optional() }),
  {
    description: 'Submit a published mod or build. Accepted co-authors of the mod join the entry.',
    examples: [{ modId: 20, notesMd: 'Made in nine days.' }],
  },
);

export const JamVoteBody = dto(
  'JamVoteBody',
  z.strictObject({
    scores: z
      .array(z.strictObject({ categoryId: EntityId, score: z.number().int().min(1).max(5) }))
      .min(1)
      .max(JAM_RULES.categoriesMax),
  }),
  { description: 'Stars for one entry, per category.', examples: [{ scores: [{ categoryId: 1, score: 4 }] }] },
);

export const JamVoteResultDTO = dto(
  'JamVoteResultDTO',
  z.object({ entryId: EntityId, votes: z.array(z.object({ categoryId: EntityId, score: z.number().int() })) }),
  {
    description: 'Own votes for the entry after the change.',
    examples: [{ entryId: 8, votes: [{ categoryId: 1, score: 4 }] }],
  },
);

export const JamEntriesQuery = z.object({
  seed: z.string().max(40).optional().describe('Shuffle seed (voters use their own id)'),
});

/* ---------------------------------- staff ------------------------------------------------- */

export const JamAdminDTO = dto(
  'JamAdminDTO',
  JamDTO.extend({
    theme: z.string(),
    descriptionMd: z.string(),
    rulesMd: z.string(),
    prizesMd: z.string(),
    phaseLocked: z.boolean(),
    minVoterActivity: z.number().int(),
    autoPublishResults: z.boolean(),
    resultsComputedAt: IsoDateTime.nullable(),
    createdAt: IsoDateTime,
    updatedAt: IsoDateTime,
  }),
  {
    description: 'Full jam for the editor, including the hidden theme and markdown sources.',
    examples: [
      {
        ...JAM_EXAMPLE,
        theme: 'Nothing is what it seems',
        descriptionMd: 'Build something new.',
        rulesMd: '- One entry per person.',
        prizesMd: 'Badges and eternal glory.',
        phaseLocked: false,
        minVoterActivity: 1,
        autoPublishResults: true,
        resultsComputedAt: null,
        createdAt: '2026-09-30T10:00:00.000Z',
        updatedAt: '2026-09-30T10:00:00.000Z',
      },
    ],
  },
);
export type JamAdminDTO = z.infer<typeof JamAdminDTO>;

export const JamAdminListDTO = dto('JamAdminListDTO', z.object({ items: z.array(JamAdminDTO) }), {
  description: 'Every jam, drafts included.',
  examples: [{ items: [] }],
});

const Md = z.string().max(JAM_RULES.mdMax);
const OptDate = IsoDateTime.nullable();

export const JamCategoryInput = z.strictObject({
  key: CategoryKey,
  label: z.string().trim().min(1).max(JAM_RULES.labelMax).nullable().optional(),
  weight: z.number().int().min(1).max(10).default(1),
});

const JamFields = {
  title: z.string().trim().min(3).max(JAM_RULES.titleMax),
  tagline: z.string().trim().max(JAM_RULES.taglineMax),
  theme: z.string().trim().max(JAM_RULES.themeMax),
  themeHidden: z.boolean(),
  descriptionMd: Md,
  rulesMd: Md,
  prizesMd: Md,
  bannerUrl: HttpUrl.nullable(),
  accent: JamAccent,
  announceAt: OptDate,
  submissionsOpenAt: OptDate,
  submissionsCloseAt: OptDate,
  votingOpenAt: OptDate,
  votingCloseAt: OptDate,
  archiveAt: OptDate,
  entryKinds: JamEntryKinds,
  maxEntriesPerUser: z.number().int().min(1).max(5),
  maxCoAuthors: z.number().int().min(0).max(10),
  minVoterAgeDays: z.number().int().min(0).max(365),
  minVoterActivity: z.number().int().min(0).max(100),
  minVotes: z.number().int().min(1).max(1000),
  autoPublishResults: z.boolean(),
};

export const CreateJamBody = dto(
  'CreateJamBody',
  z.strictObject({
    slug: z
      .string()
      .trim()
      .toLowerCase()
      .min(3)
      .max(JAM_RULES.slugMax)
      .regex(/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/),
    title: JamFields.title,
    tagline: JamFields.tagline.optional(),
    theme: JamFields.theme.optional(),
    themeHidden: JamFields.themeHidden.optional(),
  }),
  {
    description: 'Creates a draft jam with the default categories.',
    examples: [{ slug: 'autumn-jam-2026', title: 'Autumn Mod Jam' }],
  },
);

export const UpdateJamBody = dto(
  'UpdateJamBody',
  z
    .strictObject(JamFields)
    .partial()
    .extend({ categories: z.array(JamCategoryInput).min(1).max(JAM_RULES.categoriesMax).optional() }),
  { description: 'Edits a jam. Changing categories after voting started is refused.', examples: [{ tagline: 'New' }] },
);

export const SetJamPhaseBody = dto(
  'SetJamPhaseBody',
  z.strictObject({ phase: JamPhase, reason: z.string().trim().max(300).optional() }),
  {
    description: 'Forces the phase (locks the schedule until it is resumed).',
    examples: [{ phase: 'voting', reason: 'Extended submissions by a day' }],
  },
);

export const ModerateJamEntryBody = dto(
  'ModerateJamEntryBody',
  z.strictObject({ status: JamEntryStatus.exclude(['withdrawn']), reason: z.string().trim().max(300).optional() }),
  { description: 'Hides, disqualifies or restores (`active`) an entry.', examples: [{ status: 'hidden' }] },
);

export const JamAdminEntryDTO = dto(
  'JamAdminEntryDTO',
  z.object({
    id: EntityId,
    mod: z.object({ id: EntityId, name: z.string(), canonicalPath: z.string() }),
    authors: z.array(UserRefDTO),
    status: JamEntryStatus,
    statusReason: z.string().nullable(),
    notesMd: z.string(),
    votes: Count.describe('Valid votes received (staff only)'),
    excludedVotes: Count,
    createdAt: IsoDateTime,
  }),
  {
    description: 'An entry in the moderation list (any status).',
    examples: [
      {
        id: 7,
        mod: { id: 20, name: "Axel's Mod Menu", canonicalPath: "/mods/imaxel/axel's-mod-menu" },
        authors: [exampleOf(UserRefDTO)],
        status: 'active',
        statusReason: null,
        notesMd: 'Made in nine days.',
        votes: 0,
        excludedVotes: 0,
        createdAt: '2026-10-12T09:00:00.000Z',
      },
    ],
  },
);
export const JamAdminEntriesDTO = dto('JamAdminEntriesDTO', z.object({ items: z.array(JamAdminEntryDTO) }), {
  description: 'Every entry of a jam.',
  examples: [{ items: [] }],
});

const SlugParams = z.object({ slug: z.string().min(1).max(JAM_RULES.slugMax) });
const IdParams = z.object({ id: IdParam });
export type JamListDTO = z.infer<typeof JamListDTO>;
export type JamEntriesDTO = z.infer<typeof JamEntriesDTO>;
export type MyJamsDTO = z.infer<typeof MyJamsDTO>;
export type EligibleModsDTO = z.infer<typeof EligibleModsDTO>;
export type SubmitJamEntryBody = z.infer<typeof SubmitJamEntryBody>;
export type JamVoteBody = z.infer<typeof JamVoteBody>;
export type JamAdminEntryDTO = z.infer<typeof JamAdminEntryDTO>;
export type CreateJamBody = z.infer<typeof CreateJamBody>;
export type UpdateJamBody = z.infer<typeof UpdateJamBody>;
export type SetJamPhaseBody = z.infer<typeof SetJamPhaseBody>;
export type ModerateJamEntryBody = z.infer<typeof ModerateJamEntryBody>;
export type JamAdminListDTO = z.infer<typeof JamAdminListDTO>;
export type JamAdminEntriesDTO = z.infer<typeof JamAdminEntriesDTO>;
export type JamVoteResultDTO = z.infer<typeof JamVoteResultDTO>;

const base = API_V2_PREFIX;
const staff = { auth: 'moderator', cache: cache.noStore, rateLimit: 'userWrite' } as const;

export const jamsEndpoints = {
  list: defineEndpoint({
    id: 'jams.list',
    owner: 'WP-JAMS',
    method: 'GET',
    path: `${base}/jams`,
    summary: 'Public jams',
    auth: 'public',
    response: JamListDTO,
    cache: cache.publicApi(['list:jams']),
    rateLimit: 'anonymousRead',
  }),
  get: defineEndpoint({
    id: 'jams.get',
    owner: 'WP-JAMS',
    method: 'GET',
    path: `${base}/jams/:slug`,
    summary: 'A jam',
    auth: 'public',
    params: SlugParams,
    response: JamDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['list:jams']),
    rateLimit: 'anonymousRead',
  }),
  entries: defineEndpoint({
    id: 'jams.entries',
    owner: 'WP-JAMS',
    method: 'GET',
    path: `${base}/jams/:slug/entries`,
    summary: 'Entries of a jam (shuffled per seed)',
    auth: 'public',
    params: SlugParams,
    query: JamEntriesQuery,
    response: JamEntriesDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['list:jams']),
    rateLimit: 'anonymousRead',
  }),
  results: defineEndpoint({
    id: 'jams.results',
    owner: 'WP-JAMS',
    method: 'GET',
    path: `${base}/jams/:slug/results`,
    summary: 'Published results of a jam',
    auth: 'public',
    params: SlugParams,
    response: JamResultsDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['list:jams']),
    rateLimit: 'anonymousRead',
  }),
  myState: defineEndpoint({
    id: 'jams.myState',
    owner: 'WP-JAMS',
    method: 'GET',
    path: `${base}/me/jams/:slug`,
    summary: 'Own follow, eligibility, entries and votes in a jam',
    auth: 'session',
    params: SlugParams,
    response: MyJamStateDTO,
    errors: ['NOT_FOUND'],
    cache: cache.private,
  }),
  myJams: defineEndpoint({
    id: 'jams.myJams',
    owner: 'WP-JAMS',
    method: 'GET',
    path: `${base}/me/jams`,
    summary: 'Creator panel: open jams and own participations',
    auth: 'session',
    response: MyJamsDTO,
    cache: cache.private,
  }),
  eligibleMods: defineEndpoint({
    id: 'jams.eligibleMods',
    owner: 'WP-JAMS',
    method: 'GET',
    path: `${base}/me/jams/:slug/eligible-mods`,
    summary: 'Own published mods that can be submitted',
    auth: 'session',
    params: SlugParams,
    response: EligibleModsDTO,
    errors: ['NOT_FOUND'],
    cache: cache.private,
  }),
  follow: defineEndpoint({
    id: 'jams.follow',
    owner: 'WP-JAMS',
    method: 'PUT',
    path: `${base}/jams/:slug/follow`,
    summary: 'Follow a jam (notifications)',
    auth: 'session',
    params: SlugParams,
    responseKind: 'empty',
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  unfollow: defineEndpoint({
    id: 'jams.unfollow',
    owner: 'WP-JAMS',
    method: 'DELETE',
    path: `${base}/jams/:slug/follow`,
    summary: 'Unfollow a jam',
    auth: 'session',
    params: SlugParams,
    responseKind: 'empty',
    errors: ['NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  submit: defineEndpoint({
    id: 'jams.submit',
    owner: 'WP-JAMS',
    method: 'POST',
    path: `${base}/jams/:slug/entries`,
    summary: 'Submit a mod or build to a jam',
    auth: 'verified',
    params: SlugParams,
    body: SubmitJamEntryBody,
    status: 201,
    response: JamEntryDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT', 'EMAIL_NOT_VERIFIED'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  withdraw: defineEndpoint({
    id: 'jams.withdraw',
    owner: 'WP-JAMS',
    method: 'DELETE',
    path: `${base}/jams/:slug/entries/:entryId`,
    summary: 'Withdraw an own entry (before voting starts)',
    auth: 'session',
    params: SlugParams.extend({ entryId: IdParam }),
    responseKind: 'empty',
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  vote: defineEndpoint({
    id: 'jams.vote',
    owner: 'WP-JAMS',
    method: 'PUT',
    path: `${base}/jams/:slug/entries/:entryId/votes`,
    summary: 'Rate an entry (1-5 stars per category)',
    auth: 'verified',
    params: SlugParams.extend({ entryId: IdParam }),
    body: JamVoteBody,
    response: JamVoteResultDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT', 'EMAIL_NOT_VERIFIED'],
    cache: cache.noStore,
    rateLimit: 'jamVotes',
  }),
  adminList: defineEndpoint({
    id: 'jams.adminList',
    owner: 'WP-JAMS',
    method: 'GET',
    path: `${base}/ranger/jams`,
    summary: 'Every jam (staff)',
    auth: 'moderator',
    response: JamAdminListDTO,
    cache: cache.private,
  }),
  adminGet: defineEndpoint({
    id: 'jams.adminGet',
    owner: 'WP-JAMS',
    method: 'GET',
    path: `${base}/ranger/jams/:id`,
    summary: 'A jam for the editor (staff)',
    auth: 'moderator',
    params: IdParams,
    response: JamAdminDTO,
    errors: ['NOT_FOUND'],
    cache: cache.private,
  }),
  adminCreate: defineEndpoint({
    id: 'jams.adminCreate',
    owner: 'WP-JAMS',
    method: 'POST',
    path: `${base}/ranger/jams`,
    summary: 'Create a draft jam',
    body: CreateJamBody,
    status: 201,
    response: JamAdminDTO,
    errors: ['CONFLICT'],
    ...staff,
  }),
  adminUpdate: defineEndpoint({
    id: 'jams.adminUpdate',
    owner: 'WP-JAMS',
    method: 'PATCH',
    path: `${base}/ranger/jams/:id`,
    summary: 'Edit a jam',
    params: IdParams,
    body: UpdateJamBody,
    response: JamAdminDTO,
    errors: ['NOT_FOUND', 'CONFLICT'],
    ...staff,
  }),
  adminDelete: defineEndpoint({
    id: 'jams.adminDelete',
    owner: 'WP-JAMS',
    method: 'DELETE',
    path: `${base}/ranger/jams/:id`,
    summary: 'Delete a draft jam',
    params: IdParams,
    responseKind: 'empty',
    errors: ['NOT_FOUND', 'CONFLICT'],
    ...staff,
  }),
  adminSetPhase: defineEndpoint({
    id: 'jams.adminSetPhase',
    owner: 'WP-JAMS',
    method: 'POST',
    path: `${base}/ranger/jams/:id/phase`,
    summary: 'Force the phase of a jam',
    params: IdParams,
    body: SetJamPhaseBody,
    response: JamAdminDTO,
    errors: ['NOT_FOUND', 'CONFLICT'],
    ...staff,
  }),
  adminResume: defineEndpoint({
    id: 'jams.adminResume',
    owner: 'WP-JAMS',
    method: 'POST',
    path: `${base}/ranger/jams/:id/resume`,
    summary: 'Give the phase back to the schedule',
    params: IdParams,
    response: JamAdminDTO,
    errors: ['NOT_FOUND'],
    ...staff,
  }),
  adminEntries: defineEndpoint({
    id: 'jams.adminEntries',
    owner: 'WP-JAMS',
    method: 'GET',
    path: `${base}/ranger/jams/:id/entries`,
    summary: 'Entries of a jam, any status',
    auth: 'moderator',
    params: IdParams,
    response: JamAdminEntriesDTO,
    errors: ['NOT_FOUND'],
    cache: cache.private,
  }),
  adminModerateEntry: defineEndpoint({
    id: 'jams.adminModerateEntry',
    owner: 'WP-JAMS',
    method: 'POST',
    path: `${base}/ranger/jams/:id/entries/:entryId`,
    summary: 'Hide, disqualify or restore an entry',
    params: IdParams.extend({ entryId: IdParam }),
    body: ModerateJamEntryBody,
    response: JamAdminEntryDTO,
    errors: ['NOT_FOUND'],
    ...staff,
  }),
  adminPublishResults: defineEndpoint({
    id: 'jams.adminPublishResults',
    owner: 'WP-JAMS',
    method: 'POST',
    path: `${base}/ranger/jams/:id/results`,
    summary: 'Recompute and publish the results',
    params: IdParams,
    response: JamAdminDTO,
    errors: ['NOT_FOUND', 'CONFLICT'],
    ...staff,
  }),
};
