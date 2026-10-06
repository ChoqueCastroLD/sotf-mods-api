/**
 * Admin enums and limits the screens need at run time, mirrored from `@sotf/contracts` so the
 * console chunks do not pull Zod and the contract schemas (the client only ships types). The type
 * assertions below fail the typecheck as soon as a contract changes.
 */
import type {
  ANNOUNCEMENT_LEVELS as CONTRACT_ANNOUNCEMENT_LEVELS,
  DISCORD_EVENTS as CONTRACT_DISCORD_EVENTS,
  SITE_SETTING_KEYS as CONTRACT_SETTING_KEYS,
} from '@sotf/contracts/admin';
import type { ECOSYSTEM_STATUSES as CONTRACT_ECOSYSTEM_STATUSES } from '@sotf/contracts/compat';
import type { MODERATION_ACTIONS as CONTRACT_MODERATION_ACTIONS } from '@sotf/contracts/moderation';

export const ANNOUNCEMENT_LEVELS = ['info', 'warning', 'patch'] as const;
export type AnnouncementLevel = (typeof ANNOUNCEMENT_LEVELS)[number];

/** Every event the API accepts (kept for the contract check; award and milestone hooks are retired). */
const CONTRACT_EVENTS = ['mod.published', 'version.published', 'award.mod_of_week', 'milestone.10k'] as const;
/** The events the console offers. */
export const DISCORD_EVENTS = ['mod.published', 'version.published'] as const;
export type DiscordEvent = (typeof DISCORD_EVENTS)[number];

export const SITE_SETTING_KEYS = [
  'ads',
  'discordWebhooks',
  'moderationTemplates',
  'limits',
  // Still a key of the API contract (deprecated endpoint); the console has no screen for it.
  'kelvinseek',
  'featureFlags',
] as const;
export type SiteSettingKey = (typeof SITE_SETTING_KEYS)[number];

export const ECOSYSTEM_STATUSES = ['works', 'partial', 'broken', 'unknown'] as const;
export type EcosystemStatus = (typeof ECOSYSTEM_STATUSES)[number];

export const MODERATION_ACTIONS = ['approve', 'reject', 'request_changes', 'unlist', 'remove', 'restore'] as const;
export type ModerationAction = (typeof MODERATION_ACTIONS)[number];

export const LOADER_NAMES = ['RedLoader', 'RedManager'] as const;
export type LoaderName = (typeof LOADER_NAMES)[number];

/** Field limits of the admin request bodies (`@sotf/contracts/admin`). */
export const ADMIN_LIMITS = {
  buildLabelMax: 40,
  buildNotesMax: 5000,
  steamBuildId: /^\d{1,12}$/,
  loaderVersionMax: 40,
  ecosystemNoteMax: 2000,
  categoryNameMax: 60,
  categorySlugMax: 80,
  legacySlugsMax: 10,
  hubIntroMax: 4000,
  iconMax: 60,
  tagSlug: /^[a-z0-9-]+$/,
  tagSlugMax: 60,
  tagNameMax: 60,
  tagGroupMax: 40,
  tagDescriptionMax: 300,
  recategorizeBatch: 500,
  recategorizeTagsMax: 5,
  announcementHrefMax: 2048,
  webhooksMax: 10,
  webhookNameMax: 60,
  webhookUrl: /^https:\/\/(?:discord\.com|discordapp\.com)\/api\/webhooks\//,
  templatesMax: 100,
  templateKey: /^[a-z0-9_]{2,60}$/,
  flagKey: /^[a-zA-Z0-9_.-]{1,60}$/,
  adsClientId: /^ca-pub-\d{10,20}$/,
  adsSlotId: /^\d{6,20}$/,
} as const;

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;
const levelsInSync: Equal<typeof ANNOUNCEMENT_LEVELS, typeof CONTRACT_ANNOUNCEMENT_LEVELS> = true;
const eventsInSync: Equal<typeof CONTRACT_EVENTS, typeof CONTRACT_DISCORD_EVENTS> = true;
const keysInSync: Equal<typeof SITE_SETTING_KEYS, typeof CONTRACT_SETTING_KEYS> = true;
const ecosystemInSync: Equal<typeof ECOSYSTEM_STATUSES, typeof CONTRACT_ECOSYSTEM_STATUSES> = true;
const actionsInSync: Equal<typeof MODERATION_ACTIONS, typeof CONTRACT_MODERATION_ACTIONS> = true;
void levelsInSync;
void eventsInSync;
void keysInSync;
void ecosystemInSync;
void actionsInSync;
