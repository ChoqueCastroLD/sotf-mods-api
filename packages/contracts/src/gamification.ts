/**
 * Gamification (PLAN §7.2, T0-23, T0-33). Implemented by WP-60 (+ WP-64 UI).
 *
 * Rewards quality and help, not volume: Survivor rank by help XP, Creator tier by lifetime
 * downloads (legacy history included), badges (retroactive), per-mod milestones and Mod of the
 * Week. No daily streaks. XP is auditable and reversible (`XpEvent`).
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { ModCardDTO } from './catalog.ts';
import {
  AwardKind,
  CREATOR_TIER_KEYS,
  type CreatorTierKey,
  EntityId,
  Handle,
  IsoDate,
  IsoDateTime,
  SURVIVOR_RANK_KEYS,
  type SurvivorRankKey,
} from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

// -----------------------------------------------------------------------------------------------
// Ranks, tiers and XP rules
// -----------------------------------------------------------------------------------------------

/** Survivor ranks with the XP needed for each (PLAN §7.2). */
export const SURVIVOR_RANKS: ReadonlyArray<{ key: SurvivorRankKey; minXp: number }> = [
  { key: 'castaway', minXp: 0 },
  { key: 'scavenger', minXp: 50 },
  { key: 'forager', minXp: 150 },
  { key: 'trapper', minXp: 400 },
  { key: 'builder', minXp: 1_000 },
  { key: 'pathfinder', minXp: 2_500 },
  { key: 'veteran', minXp: 6_000 },
  { key: 'legend', minXp: 15_000 },
];

/** Creator tiers by lifetime downloads of all their mods (PLAN §7.2). */
export const CREATOR_TIERS: ReadonlyArray<{ key: CreatorTierKey; minDownloads: number; spotlight: boolean }> = [
  { key: 'campfire', minDownloads: 1_000, spotlight: false },
  { key: 'lean-to', minDownloads: 10_000, spotlight: false },
  { key: 'cabin', minDownloads: 50_000, spotlight: false },
  { key: 'treehouse', minDownloads: 100_000, spotlight: false },
  { key: 'fortress', minDownloads: 500_000, spotlight: true },
  { key: 'landmark', minDownloads: 1_000_000, spotlight: true },
];

/** Rank for an XP total. */
export function survivorRankFor(xp: number): SurvivorRankKey {
  let rank: SurvivorRankKey = 'castaway';
  for (const step of SURVIVOR_RANKS) if (xp >= step.minXp) rank = step.key;
  return rank;
}

/** Next rank and the XP still needed (null at the top). */
export function nextSurvivorRank(xp: number): { key: SurvivorRankKey; xpNeeded: number } | null {
  const next = SURVIVOR_RANKS.find((step) => step.minXp > xp);
  return next ? { key: next.key, xpNeeded: next.minXp - xp } : null;
}

/** Tier for lifetime downloads (null below 1 000). */
export function creatorTierFor(downloads: number): CreatorTierKey | null {
  let tier: CreatorTierKey | null = null;
  for (const step of CREATOR_TIERS) if (downloads >= step.minDownloads) tier = step.key;
  return tier;
}

/** Next tier and the downloads still needed (null at the top). */
export function nextCreatorTier(downloads: number): { key: CreatorTierKey; downloadsNeeded: number } | null {
  const next = CREATOR_TIERS.find((step) => step.minDownloads > downloads);
  return next ? { key: next.key, downloadsNeeded: next.minDownloads - downloads } : null;
}

export const XP_EVENT_KINDS = [
  'review_with_text',
  'review_helpful_vote',
  'compat_report',
  'compat_report_consensus',
  'comment_solution_or_pinned',
  'bug_report_resolved',
  'kit_followers_10',
  'profile_completed',
  'onboarding_completed',
  'first_follow',
  'patch_day_release',
] as const;
export const XpEventKind = z.enum(XP_EVENT_KINDS);
export type XpEventKind = z.infer<typeof XpEventKind>;

/**
 * XP rules of PLAN §7.2. `dailyCap` is per user; `once` = at most once per user (or per build for
 * `patch_day_release`). No XP for actions on your own content; downloads never give XP.
 */
export const XP_RULES: Readonly<Record<XpEventKind, { points: number; dailyCap: number | null; once: boolean }>> = {
  review_with_text: { points: 20, dailyCap: 3, once: false },
  review_helpful_vote: { points: 5, dailyCap: 50, once: false },
  compat_report: { points: 10, dailyCap: 5, once: false },
  compat_report_consensus: { points: 5, dailyCap: null, once: false },
  comment_solution_or_pinned: { points: 15, dailyCap: null, once: false },
  bug_report_resolved: { points: 15, dailyCap: null, once: false },
  kit_followers_10: { points: 10, dailyCap: null, once: false },
  profile_completed: { points: 10, dailyCap: null, once: true },
  onboarding_completed: { points: 10, dailyCap: null, once: true },
  first_follow: { points: 2, dailyCap: null, once: true },
  patch_day_release: { points: 30, dailyCap: null, once: false },
};

// -----------------------------------------------------------------------------------------------
// Badges
// -----------------------------------------------------------------------------------------------

export const BADGE_GROUPS = ['legacy', 'creator', 'community', 'onboarding', 'awards', 'roles', 'secret'] as const;
export const BadgeGroup = z.enum(BADGE_GROUPS);

/** T0 badge catalog (PLAN §7.2). i18n lives in the messages (`badges` namespace). */
export const BADGES = [
  { key: 'original-survivor-2023', group: 'legacy', icon: 'contour-pin', secret: false, repeatable: false },
  { key: 'original-survivor-2024', group: 'legacy', icon: 'contour-pin', secret: false, repeatable: false },
  { key: 'original-survivor-2025', group: 'legacy', icon: 'contour-pin', secret: false, repeatable: false },
  { key: 'original-survivor-2026', group: 'legacy', icon: 'contour-pin', secret: false, repeatable: false },
  { key: 'crash-landing', group: 'creator', icon: 'plane-landing', secret: false, repeatable: false },
  { key: 'first-blueprint', group: 'creator', icon: 'blueprint-sheet', secret: false, repeatable: false },
  { key: 'pillar-of-the-island', group: 'creator', icon: 'library-big', secret: false, repeatable: false },
  { key: 'patch-day-hero', group: 'creator', icon: 'shield-check', secret: false, repeatable: false },
  { key: 'island-favorite', group: 'creator', icon: 'star', secret: false, repeatable: false },
  { key: 'well-documented', group: 'creator', icon: 'book-open-check', secret: false, repeatable: false },
  { key: 'first-field-report', group: 'community', icon: 'radar', secret: false, repeatable: false },
  { key: 'field-medic', group: 'community', icon: 'cross', secret: false, repeatable: false },
  { key: 'bug-hunter', group: 'community', icon: 'bug', secret: false, repeatable: false },
  { key: 'first-review', group: 'community', icon: 'message-square-quote', secret: false, repeatable: false },
  { key: 'voice-of-the-island', group: 'community', icon: 'megaphone', secret: false, repeatable: false },
  { key: 'helping-hand', group: 'community', icon: 'hand-helping', secret: false, repeatable: false },
  { key: 'cartographer', group: 'community', icon: 'map', secret: false, repeatable: false },
  { key: 'survived-day-one', group: 'onboarding', icon: 'campfire', secret: false, repeatable: false },
  { key: 'mod-of-the-week', group: 'awards', icon: 'trophy', secret: false, repeatable: true },
  { key: 'staff-pick', group: 'awards', icon: 'badge-check', secret: false, repeatable: true },
  { key: 'jam-participant', group: 'awards', icon: 'trophy', secret: false, repeatable: true },
  { key: 'jam-podium', group: 'awards', icon: 'trophy', secret: false, repeatable: true },
  { key: 'jam-champion', group: 'awards', icon: 'trophy', secret: false, repeatable: true },
  { key: 'verified-creator', group: 'roles', icon: 'badge-check', secret: false, repeatable: false },
  { key: 'ranger', group: 'roles', icon: 'binoculars', secret: false, repeatable: false },
  { key: 'translator', group: 'roles', icon: 'languages', secret: false, repeatable: false },
  { key: 'night-owl', group: 'secret', icon: 'moon-star', secret: true, repeatable: false },
] as const satisfies ReadonlyArray<{
  key: string;
  group: (typeof BADGE_GROUPS)[number];
  icon: string;
  secret: boolean;
  repeatable: boolean;
}>;
export type BadgeKey = (typeof BADGES)[number]['key'];
export const BADGE_KEYS = BADGES.map((badge) => badge.key) as [BadgeKey, ...BadgeKey[]];
export const BadgeKeySchema = z.enum(BADGE_KEYS);

export const BadgeDTO = dto(
  'BadgeDTO',
  z.object({
    key: z
      .string()
      .describe(
        'Badge key; name and hint come from i18n (`profile_badge_<snake_key>_name|hint` of the `profile` namespace; the `original-survivor-<year>` badges share `profile_badge_original_survivor_*` with `{year}`)',
      ),
    group: BadgeGroup,
    tier: z.number().int().min(1),
    icon: z.string(),
    isSecret: z.boolean(),
    isRepeatable: z.boolean(),
    earnedCount: z.number().int().nonnegative(),
    earnedShare: z.number().min(0).max(1).describe('Share of active users that earned it'),
  }),
  {
    description: 'Badge of the public catalog (/achievements).',
    examples: [
      {
        key: 'crash-landing',
        group: 'creator',
        tier: 1,
        icon: 'plane-landing',
        isSecret: false,
        isRepeatable: false,
        earnedCount: 59,
        earnedShare: 0.015,
      },
    ],
  },
);

export const BadgeCatalogDTO = dto(
  'BadgeCatalogDTO',
  z.object({
    badges: z.array(BadgeDTO),
    survivorRanks: z.array(z.object({ key: z.enum(SURVIVOR_RANK_KEYS), minXp: z.number().int().nonnegative() })),
    creatorTiers: z.array(z.object({ key: z.enum(CREATOR_TIER_KEYS), minDownloads: z.number().int().positive() })),
  }),
  {
    description: 'Badges with unlock share, ranks and tiers.',
    examples: [
      {
        badges: [exampleOf(BadgeDTO)],
        survivorRanks: SURVIVOR_RANKS.map((rank) => ({ key: rank.key, minXp: rank.minXp })),
        creatorTiers: CREATOR_TIERS.map((tier) => ({ key: tier.key, minDownloads: tier.minDownloads })),
      },
    ],
  },
);

export const UserBadgeDTO = dto(
  'UserBadgeDTO',
  z.object({
    key: z.string(),
    awardedAt: IsoDateTime,
    contextKey: z.string().describe('Empty for one-off badges; e.g. `mod:20` or `2026-W40` for repeatable ones'),
    isFeatured: z.boolean(),
  }),
  {
    description: 'A badge earned by a user.',
    examples: [
      { key: 'original-survivor-2023', awardedAt: '2026-10-15T00:00:00.000Z', contextKey: '', isFeatured: true },
    ],
  },
);

export const UserBadgesDTO = dto(
  'UserBadgesDTO',
  z.object({
    earned: z.array(UserBadgeDTO),
    locked: z.array(
      z.object({
        key: z.string(),
        progress: z.object({ current: z.number().int().nonnegative(), target: z.number().int().positive() }).nullable(),
      }),
    ),
  }),
  {
    description: 'Field notebook: earned badges and locked ones with progress (secret badges hidden until earned).',
    examples: [
      { earned: [exampleOf(UserBadgeDTO)], locked: [{ key: 'field-medic', progress: { current: 4, target: 10 } }] },
    ],
  },
);

/** Badges shown on the profile header (PLAN §7.2). */
export const FEATURED_BADGES_MAX = 6;

export const FeaturedBadgesBody = dto(
  'FeaturedBadgesBody',
  z.strictObject({
    keys: z
      .array(z.string().min(1).max(60))
      .max(FEATURED_BADGES_MAX)
      .refine((keys) => new Set(keys).size === keys.length, 'duplicate badge')
      .describe('Earned badge keys to feature (replaces the current choice; [] features none)'),
  }),
  {
    description: 'Choose the badges featured on the profile.',
    examples: [{ keys: ['original-survivor-2023', 'field-medic'] }],
  },
);

export const FeaturedBadgesDTO = dto('FeaturedBadgesDTO', z.object({ featuredBadgeKeys: z.array(z.string()) }), {
  description: 'Badges featured on the profile after the change.',
  examples: [{ featuredBadgeKeys: ['original-survivor-2023', 'field-medic'] }],
});

// -----------------------------------------------------------------------------------------------
// Awards
// -----------------------------------------------------------------------------------------------

export const AwardDTO = dto(
  'AwardDTO',
  z.object({
    id: EntityId,
    kind: AwardKind,
    periodStart: IsoDate,
    periodEnd: IsoDate,
    reason: z.string().nullable(),
    mod: ModCardDTO,
    createdAt: IsoDateTime,
  }),
  {
    description: 'Mod of the Week, staff pick, Build/Mod of the Month.',
    examples: [
      {
        id: 3,
        kind: 'mod_of_week',
        periodStart: '2026-09-28',
        periodEnd: '2026-10-04',
        reason: null,
        mod: exampleOf(ModCardDTO),
        createdAt: '2026-09-28T00:05:00.000Z',
      },
    ],
  },
);

export const CurrentAwardsDTO = dto(
  'CurrentAwardsDTO',
  z.object({ modOfWeek: AwardDTO.nullable(), staffPicks: z.array(AwardDTO), buildOfMonth: AwardDTO.nullable() }),
  {
    description: 'Awards currently running (landing, mod page, profile).',
    examples: [{ modOfWeek: exampleOf(AwardDTO), staffPicks: [], buildOfMonth: null }],
  },
);

// -----------------------------------------------------------------------------------------------
// Onboarding "Day 1 on the island" (T0-33)
// -----------------------------------------------------------------------------------------------

export const ONBOARDING_STEPS = [
  'install_redloader',
  'first_download',
  'follow_mod',
  'compat_report',
  'create_kit',
] as const;
export const OnboardingStep = z.enum(ONBOARDING_STEPS);

export const OnboardingDTO = dto(
  'OnboardingDTO',
  z.object({
    steps: z.array(z.object({ key: OnboardingStep, done: z.boolean(), doneAt: IsoDateTime.nullable() })),
    completed: z.boolean(),
    dismissed: z.boolean(),
  }),
  {
    description: 'Day 1 checklist; completing it awards `survived-day-one`.',
    examples: [
      {
        steps: [
          { key: 'install_redloader', done: true, doneAt: '2026-10-02T10:05:00.000Z' },
          { key: 'first_download', done: true, doneAt: '2026-10-02T10:07:00.000Z' },
          { key: 'follow_mod', done: false, doneAt: null },
          { key: 'compat_report', done: false, doneAt: null },
          { key: 'create_kit', done: false, doneAt: null },
        ],
        completed: false,
        dismissed: false,
      },
    ],
  },
);

export const UpdateOnboardingBody = dto(
  'UpdateOnboardingBody',
  z.strictObject({
    dismissed: z.boolean().optional(),
    markDone: z
      .array(OnboardingStep)
      .max(ONBOARDING_STEPS.length)
      .optional()
      .describe('Steps the user ticks by hand from the checklist (manual ticks count toward completion)'),
    markUndone: z
      .array(OnboardingStep)
      .max(ONBOARDING_STEPS.length)
      .optional()
      .describe('Steps to untick; steps backed by real activity come back on the next sync'),
  }),
  {
    description: 'Dismiss the checklist or tick/untick steps by hand.',
    examples: [{ markDone: ['install_redloader'] }],
  },
);

export const gamificationEndpoints = {
  badges: defineEndpoint({
    id: 'gamification.badges',
    owner: 'WP-60',
    method: 'GET',
    path: `${API_V2_PREFIX}/badges`,
    summary: 'Badge catalog with unlock share, ranks and tiers',
    auth: 'public',
    response: BadgeCatalogDTO,
    cache: cache.publicApi(['stats'], 3600),
    rateLimit: 'anonymousRead',
  }),
  currentAwards: defineEndpoint({
    id: 'gamification.currentAwards',
    owner: 'WP-60',
    method: 'GET',
    path: `${API_V2_PREFIX}/awards/current`,
    summary: 'Mod of the Week and current staff picks',
    auth: 'public',
    response: CurrentAwardsDTO,
    cache: cache.publicApi(['home'], 300),
    rateLimit: 'anonymousRead',
  }),
  userBadges: defineEndpoint({
    id: 'gamification.userBadges',
    owner: 'WP-60',
    method: 'GET',
    path: `${API_V2_PREFIX}/users/:handle/badges`,
    summary: 'Badges of a user (field notebook)',
    auth: 'public',
    params: z.object({ handle: Handle }),
    response: UserBadgesDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['user:{id}']),
    rateLimit: 'anonymousRead',
  }),
  setFeaturedBadges: defineEndpoint({
    id: 'gamification.setFeaturedBadges',
    owner: 'WP-60',
    method: 'PATCH',
    path: `${API_V2_PREFIX}/me/badges/featured`,
    summary: 'Choose the badges featured on my profile',
    auth: 'session',
    body: FeaturedBadgesBody,
    response: FeaturedBadgesDTO,
    errors: ['UNAUTHENTICATED', 'GONE'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  onboarding: defineEndpoint({
    id: 'gamification.onboarding',
    owner: 'WP-60',
    method: 'GET',
    path: `${API_V2_PREFIX}/me/onboarding`,
    summary: 'My Day 1 checklist',
    auth: 'session',
    response: OnboardingDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  updateOnboarding: defineEndpoint({
    id: 'gamification.updateOnboarding',
    owner: 'WP-60',
    method: 'PATCH',
    path: `${API_V2_PREFIX}/me/onboarding`,
    summary: 'Dismiss the checklist or mark the manual step',
    auth: 'session',
    body: UpdateOnboardingBody,
    response: OnboardingDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.noStore,
  }),
} as const;
