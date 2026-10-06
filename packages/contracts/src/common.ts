/**
 * Shared primitives (PLAN §5.1, §5.4, §6.3, §6.8): ids, dates, locales, handles, enums of the data
 * model and small reference DTOs reused by several domains.
 *
 * JSON conventions: camelCase, ISO-8601 dates with `Z` (`toISOString()`), numeric ids for legacy
 * entities (`Mod.id`, `ModVersion.id`, `User.id`), uuid v7 for v2 entities (sessions, uploads,
 * drafts, media). The manifest id is exposed as `manifestId`.
 */
import { z } from 'zod';
import { dto, wireInt } from './dto.ts';

// -----------------------------------------------------------------------------------------------
// Scalars
// -----------------------------------------------------------------------------------------------

/** Positive integer id of a legacy (serial) or v2 identity row. */
export const EntityId = z.number().int().positive().max(Number.MAX_SAFE_INTEGER);
export type EntityId = z.infer<typeof EntityId>;

/** Integer id in a path (`/mods/:id`): accepts `"12"` or `12`. */
export const IdParam = wireInt({ min: 1, max: Number.MAX_SAFE_INTEGER, description: 'Numeric id' });

/** uuid v7 (sessions, uploads, drafts, media, exports). */
export const Uuid = z.uuid();
export type Uuid = z.infer<typeof Uuid>;

/** ISO-8601 timestamp in UTC with `Z` (what `Date.prototype.toISOString()` produces). */
export const IsoDateTime = z.iso.datetime({ offset: false });
export type IsoDateTime = z.infer<typeof IsoDateTime>;

/** Calendar day `YYYY-MM-DD` (UTC). */
export const IsoDate = z.iso.date();
export type IsoDate = z.infer<typeof IsoDate>;

/** Non-negative integer counter. */
export const Count = z.number().int().nonnegative();

/** Absolute http(s) URL. */
export const HttpUrl = z.url({ protocol: /^https?$/ });
export type HttpUrl = z.infer<typeof HttpUrl>;

/** Site-relative path (`/mods/imaxel/axel's-mod-menu`), never a full URL. */
export const SitePath = z
  .string()
  .min(1)
  .max(2048)
  .regex(/^\/(?!\/)/, 'must be a site-relative path starting with a single "/"');
export type SitePath = z.infer<typeof SitePath>;

/** `#RRGGBB` colour (manifest `LogColor`, dominant image colour). */
export const HexColor = z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'expected #RRGGBB');
export type HexColor = z.infer<typeof HexColor>;

/** Lowercase hex SHA-256 digest. */
export const Sha256Hex = z.string().regex(/^[0-9a-f]{64}$/, 'expected a lowercase hex SHA-256');

/** Semantic version as published by RedLoader mods (`1.3.8`, `v2.0.0-beta.1`). */
export const SemverString = z
  .string()
  .max(64)
  .regex(
    /^v?(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/,
    'expected a semantic version (x.y.z)',
  );

/** Version string as stored: semver for mods, uuid v7 for builds (legacy). */
export const VersionString = z.string().min(1).max(64);

// -----------------------------------------------------------------------------------------------
// Locales (PLAN §4.1, §7.11)
// -----------------------------------------------------------------------------------------------

/** URL locale codes. `en` has no prefix; `pt` = pt-BR and `zh` = zh-Hans in `hreflang`. */
export const LOCALES = ['en', 'es', 'de', 'fr', 'it', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh', 'ja'] as const;
export const Locale = z.enum(LOCALES);
export type Locale = z.infer<typeof Locale>;
export const DEFAULT_LOCALE: Locale = 'en';

/** BCP-47 tag used in `hreflang` and `lang` for each URL locale. */
export const LOCALE_BCP47: Readonly<Record<Locale, string>> = {
  en: 'en',
  es: 'es',
  de: 'de',
  fr: 'fr',
  it: 'it',
  nl: 'nl',
  pl: 'pl',
  pt: 'pt-BR',
  ru: 'ru',
  sv: 'sv',
  tr: 'tr',
  zh: 'zh-Hans',
  ja: 'ja',
};

/** Content language of user content (`Mod.contentLang`): any BCP-47 primary tag, e.g. `de`. */
export const ContentLang = z.string().regex(/^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/, 'expected a BCP-47 tag');

// -----------------------------------------------------------------------------------------------
// Users (PLAN §6.3 "User", T0-13)
// -----------------------------------------------------------------------------------------------

export const ROLES = ['user', 'moderator', 'admin'] as const;
export const Role = z.enum(ROLES);
export type Role = z.infer<typeof Role>;

/** Handle as stored (legacy handles are kept verbatim, so output is lenient). */
export const Handle = z.string().min(1).max(64);
export type Handle = z.infer<typeof Handle>;

/**
 * Handles that new registrations cannot take (legacy handles are kept as they are). Covers every
 * top-level route of PLAN §4.2–§4.4 and brand/role words.
 */
export const RESERVED_HANDLES: ReadonlySet<string> = new Set([
  'about',
  'account',
  'achievements',
  'admin',
  'administrator',
  'api',
  'auth',
  'basecamp',
  'best',
  'brand',
  'builds',
  'categories',
  'cookies',
  'content-policy',
  'creators',
  'dashboard',
  'developers',
  'dmca',
  'docs',
  'download',
  'downloads',
  'embed',
  'explore',
  'feed',
  'following',
  'help',
  'install',
  'internal',
  'k',
  'kelvinseek',
  'kits',
  'loader',
  'login',
  'logout',
  'me',
  'mod',
  'moderation',
  'moderator',
  'mods',
  'new',
  'news',
  'notifications',
  'null',
  'oembed',
  'patch-radar',
  'privacy',
  'profile',
  'ranger',
  'redloader',
  'redmanager',
  'register',
  'reset-password',
  'root',
  'scout',
  'search',
  'settings',
  'signals',
  'sitemap',
  'sotf',
  'sotf-mods',
  'sotfmods',
  'staff',
  'static',
  'support',
  'system',
  'tags',
  'terms',
  'undefined',
  'upload',
  'user',
  'users',
  'verify-email',
  'www',
]);

/** Handle chosen at registration: ASCII `[a-z0-9-]`, 3–24, no leading/trailing hyphen, not reserved. */
export const HandleInput = z
  .string()
  .trim()
  .toLowerCase()
  .min(3)
  .max(24)
  .regex(/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/, 'use lowercase letters, digits and hyphens')
  .refine((value) => !value.includes('--'), 'no consecutive hyphens')
  .refine((value) => !RESERVED_HANDLES.has(value), 'this handle is reserved')
  // Anonymised accounts take `deleted-<id>` (account deletion keeps the row, PLAN §9.3).
  .refine((value) => !value.startsWith('deleted-'), 'this handle is reserved');

/** Display name: any Unicode (NFC), 2–32 characters after trimming. */
export const DisplayName = z
  .string()
  .transform((value) => value.normalize('NFC').trim())
  .pipe(z.string().min(2).max(32));

/** Email as typed by the user (normalised server-side with `lower(trim())`). */
export const Email = z.string().trim().max(254).pipe(z.email());

/** Password policy of T0-13: ≥ 10 characters, no composition rules (HIBP check is server-side). */
export const NewPassword = z.string().min(10).max(256);
/** Existing password (legacy passwords may be shorter than the new policy). */
export const CurrentPassword = z.string().min(1).max(1024);

export const CREATOR_TIER_KEYS = ['campfire', 'lean-to', 'cabin', 'treehouse', 'fortress', 'landmark'] as const;
export const CreatorTierKey = z.enum(CREATOR_TIER_KEYS);
export type CreatorTierKey = z.infer<typeof CreatorTierKey>;

export const SURVIVOR_RANK_KEYS = [
  'castaway',
  'scavenger',
  'forager',
  'trapper',
  'builder',
  'pathfinder',
  'veteran',
  'legend',
] as const;
export const SurvivorRankKey = z.enum(SURVIVOR_RANK_KEYS);
export type SurvivorRankKey = z.infer<typeof SurvivorRankKey>;

/** Compact author reference embedded in cards, comments, reviews and kits. */
export const UserRefDTO = dto(
  'UserRefDTO',
  z.object({
    id: EntityId,
    handle: Handle,
    displayName: z.string(),
    avatarUrl: HttpUrl.nullable(),
    verifiedCreator: z.boolean(),
    role: Role,
    creatorTier: CreatorTierKey.nullable(),
    survivorRank: SurvivorRankKey.nullable().describe('null when the user hides their rank'),
  }),
  {
    description: 'Compact public reference to a user.',
    examples: [
      {
        id: 12,
        handle: 'imaxel',
        displayName: 'ImAxel',
        avatarUrl: 'https://r2.sotf-mods.com/media/0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d/96.webp',
        verifiedCreator: true,
        role: 'user',
        creatorTier: 'fortress',
        survivorRank: 'veteran',
      },
    ],
  },
);
export type UserRefDTO = z.infer<typeof UserRefDTO>;

export const LINK_KINDS = ['website', 'github', 'youtube', 'twitch', 'discord', 'kofi', 'patreon', 'other'] as const;
export const LinkKind = z.enum(LINK_KINDS);

export const LinkDTO = dto(
  'LinkDTO',
  z.object({ kind: LinkKind, url: HttpUrl, label: z.string().max(60).nullable() }),
  {
    description: 'External link (profile links, mod support links).',
    examples: [{ kind: 'kofi', url: 'https://ko-fi.com/imaxel', label: null }],
  },
);
export type LinkDTO = z.infer<typeof LinkDTO>;

// -----------------------------------------------------------------------------------------------
// Catalog enums (PLAN §6.3 "Mod", "ModVersion"; §6.8)
// -----------------------------------------------------------------------------------------------

/** v2 kind; legacy `Mod.type` is `Mod` | `Library` | `Build`. */
export const MOD_KINDS = ['mod', 'library', 'build'] as const;
export const ModKind = z.enum(MOD_KINDS);
export type ModKind = z.infer<typeof ModKind>;

export const MOD_STATUSES = ['pending', 'published', 'unlisted', 'rejected', 'archived', 'removed'] as const;
export const ModStatus = z.enum(MOD_STATUSES);
export type ModStatus = z.infer<typeof ModStatus>;

export const VERSION_STATUSES = ['pending', 'active', 'rejected', 'yanked', 'file_missing'] as const;
export const VersionStatus = z.enum(VERSION_STATUSES);
export type VersionStatus = z.infer<typeof VersionStatus>;

export const VERSION_CHANNELS = ['release', 'beta'] as const;
export const VersionChannel = z.enum(VERSION_CHANNELS);
export type VersionChannel = z.infer<typeof VersionChannel>;

export const CHECKS_STATUSES = ['pending', 'passed', 'flagged', 'failed'] as const;
export const ChecksStatus = z.enum(CHECKS_STATUSES);

export const PLATFORMS = ['Client', 'Server', 'Universal'] as const;
export const Platform = z.enum(PLATFORMS);
export type Platform = z.infer<typeof Platform>;

export const MULTIPLAYER_ROLES = ['singleplayer_only', 'client_side', 'host_only', 'all_players', 'unknown'] as const;
export const MultiplayerRole = z.enum(MULTIPLAYER_ROLES);
export type MultiplayerRole = z.infer<typeof MultiplayerRole>;

export const DEDICATED_SERVER = ['yes', 'no', 'partial', 'unknown'] as const;
export const DedicatedServer = z.enum(DEDICATED_SERVER);

export const SAFE_TO_REMOVE = ['yes', 'no', 'unknown'] as const;
export const SafeToRemove = z.enum(SAFE_TO_REMOVE);

/** Aggregated compatibility on a game build (PLAN §7.10). */
export const COMPAT_STATUSES = ['works', 'mixed', 'broken', 'untested'] as const;
export const CompatStatus = z.enum(COMPAT_STATUSES);
export type CompatStatus = z.infer<typeof CompatStatus>;

/** Licences selectable by creators (T0-08). */
export const MOD_LICENSES = [
  'all-rights-reserved',
  'reupload-with-credit',
  'mit',
  'gpl-3.0',
  'cc-by-4.0',
  'other',
] as const;
export const ModLicense = z.enum(MOD_LICENSES);

export const DEPENDENCY_KINDS = ['required', 'optional', 'conflicts'] as const;
export const DependencyKind = z.enum(DEPENDENCY_KINDS);
export type DependencyKind = z.infer<typeof DependencyKind>;

/** Mod slug as stored (legacy slugs may contain `'`, `(`, `.`, `+`…). */
export const ModSlug = z.string().min(1).max(200);
/** Slug chosen for new mods and kits: `[a-z0-9-]`, 2–80. */
export const SlugInput = z
  .string()
  .trim()
  .toLowerCase()
  .min(2)
  .max(80)
  .regex(/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/, 'use lowercase letters, digits and hyphens');

/** `Mod.mod_id` (manifest `Id`; GUID for builds). Exact, case-sensitive. */
export const ManifestId = z.string().min(1).max(128);

export const CATEGORY_SLUGS = [
  'quality-of-life',
  'gameplay',
  'building',
  'companions',
  'weapons-gear',
  'vehicles-movement',
  'model-swap',
  'ui-hud',
  'menus-sandbox',
  'multiplayer-servers',
  'library',
  'misc',
] as const;
/** Category slug. The 12 v2 categories are listed in `CATEGORY_SLUGS`; build categories are free-form. */
export const CategorySlug = z.string().min(1).max(80);

export const CategoryRefDTO = dto(
  'CategoryRefDTO',
  z.object({
    slug: CategorySlug,
    nameKey: z.string().describe('i18n key of the category name (namespace `taxonomy`)'),
    name: z.string().describe('English name, used when the key is missing (legacy build categories)'),
    icon: z.string().nullable().describe('Lucide icon name'),
  }),
  {
    description: 'Category reference embedded in cards.',
    examples: [
      {
        slug: 'quality-of-life',
        nameKey: 'taxonomy_category_quality_of_life',
        name: 'Quality of Life',
        icon: 'wand-sparkles',
      },
    ],
  },
);
export type CategoryRefDTO = z.infer<typeof CategoryRefDTO>;

export const TagRefDTO = dto(
  'TagRefDTO',
  z.object({ slug: z.string().min(1).max(60), nameKey: z.string(), name: z.string() }),
  {
    description: 'Tag reference.',
    examples: [{ slug: 'inventory', nameKey: 'taxonomy_tag_inventory', name: 'Inventory' }],
  },
);
export type TagRefDTO = z.infer<typeof TagRefDTO>;

// -----------------------------------------------------------------------------------------------
// Media
// -----------------------------------------------------------------------------------------------

export const ImageDTO = dto(
  'ImageDTO',
  z.object({
    url: HttpUrl.describe('Largest variant (or the legacy original)'),
    width: z.number().int().positive().nullable(),
    height: z.number().int().positive().nullable(),
    thumbhash: z.string().max(64).nullable().describe('base64 ThumbHash placeholder'),
    dominantColor: HexColor.nullable(),
    srcset: z.string().nullable().describe('Ready-to-use srcset of the AVIF/WebP variants'),
    alt: z.string().max(300).nullable(),
  }),
  {
    description: 'Processed image with responsive variants (PLAN §8.3).',
    examples: [
      {
        url: 'https://r2.sotf-mods.com/media/0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d/1280.webp',
        width: 1280,
        height: 720,
        thumbhash: '1QcSHQRnh493V4dIh4eXh1h4kJUI',
        dominantColor: '#2F3B2A',
        srcset:
          'https://r2.sotf-mods.com/media/0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d/640.avif 640w, https://r2.sotf-mods.com/media/0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d/1280.avif 1280w',
        alt: 'Axel’s Mod Menu open in the inventory',
      },
    ],
  },
);
export type ImageDTO = z.infer<typeof ImageDTO>;

// -----------------------------------------------------------------------------------------------
// Cross-domain references
// -----------------------------------------------------------------------------------------------

/** Minimal reference to a mod or build (dependencies, kits, radar lists, notifications). */
export const ModRefDTO = dto(
  'ModRefDTO',
  z.object({
    id: EntityId,
    kind: ModKind,
    manifestId: ManifestId,
    name: z.string(),
    slug: ModSlug,
    userHandle: Handle,
    canonicalPath: SitePath,
    status: ModStatus,
    nsfw: z.boolean(),
    thumbnailUrl: HttpUrl.nullable(),
  }),
  {
    description: 'Minimal mod/build reference.',
    examples: [
      {
        id: 20,
        kind: 'mod',
        manifestId: 'AxelModMenu',
        name: "Axel's Mod Menu",
        slug: "axel's-mod-menu",
        userHandle: 'imaxel',
        canonicalPath: "/mods/imaxel/axel's-mod-menu",
        status: 'published',
        nsfw: false,
        thumbnailUrl: 'https://r2.sotf-mods.com/media/0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d/320.webp',
      },
    ],
  },
);
export type ModRefDTO = z.infer<typeof ModRefDTO>;

export const AWARD_KINDS = ['mod_of_week', 'staff_pick', 'build_of_month', 'mod_of_month'] as const;
export const AwardKind = z.enum(AWARD_KINDS);
export type AwardKind = z.infer<typeof AwardKind>;

export const AwardRefDTO = dto(
  'AwardRefDTO',
  z.object({ id: EntityId, kind: AwardKind, periodStart: IsoDate, periodEnd: IsoDate }),
  {
    description: 'Award won by a mod (Mod of the Week, staff pick…).',
    examples: [{ id: 3, kind: 'mod_of_week', periodStart: '2026-09-28', periodEnd: '2026-10-04' }],
  },
);
export type AwardRefDTO = z.infer<typeof AwardRefDTO>;

/** Download milestones per mod (PLAN §7.2). */
export const MOD_MILESTONES = [1_000, 5_000, 10_000, 25_000, 50_000, 100_000, 250_000, 500_000, 1_000_000] as const;

export const MilestoneDTO = dto(
  'MilestoneDTO',
  z.object({
    threshold: z.number().int().positive(),
    reachedAt: IsoDateTime,
    ogImageUrl: z.string().nullable().describe('Share card of the milestone (null until rendered)'),
  }),
  {
    description: 'A download milestone reached by a mod (retroactive from the daily series).',
    examples: [{ threshold: 100_000, reachedAt: '2026-03-14T00:00:00.000Z', ogImageUrl: null }],
  },
);
export type MilestoneDTO = z.infer<typeof MilestoneDTO>;

/** Reference to a game build (Patch Radar). */
export const GameBuildRefDTO = dto(
  'GameBuildRefDTO',
  z.object({ id: EntityId, label: z.string(), isCurrent: z.boolean(), isBreaking: z.boolean() }),
  {
    description: 'Game build reference.',
    examples: [{ id: 7, label: '1.0.4', isCurrent: true, isBreaking: true }],
  },
);
export type GameBuildRefDTO = z.infer<typeof GameBuildRefDTO>;
