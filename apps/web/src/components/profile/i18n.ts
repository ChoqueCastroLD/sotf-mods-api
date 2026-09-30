/**
 * i18n glue of the profile, creators and achievements pages (WP-64, namespace `profile`).
 *
 * - Names and hints of the badge catalog, Survivor ranks and Creator tiers (PLAN §7.2) live in the
 *   `profile` namespace (`profile_badge_<key>_name|hint`, `profile_rank_<key>`, `profile_tier_<key>`).
 * - `profileDomainI18n()` is the `DomainI18n` of the `@sotf/ui/domain` components these pages
 *   render: numbers and dates follow the page language, and the rank/tier/badge/stat copy of the
 *   stamps and cards comes from this namespace (the rest of the `ui-domain` copy stays English until
 *   that namespace is compiled into `@sotf/i18n`, docs/backlog/WP-25.md).
 */
import type { CreatorTierKey, LinkDTO, SurvivorRankKey } from '@sotf/contracts/common';
import type { BADGE_GROUPS, BadgeKey } from '@sotf/contracts/gamification';
import { formatNumber, type Locale, toHtmlLang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import type { DomainI18n, DomainMessageKey, DomainMessageParams } from '@sotf/ui/domain';
import { domainTranslate } from '../../lib/domain-i18n.ts';

type Text = () => string;

const RANK_NAMES: Readonly<Record<SurvivorRankKey, Text>> = {
  castaway: () => m.profile_rank_castaway(),
  scavenger: () => m.profile_rank_scavenger(),
  forager: () => m.profile_rank_forager(),
  trapper: () => m.profile_rank_trapper(),
  builder: () => m.profile_rank_builder(),
  pathfinder: () => m.profile_rank_pathfinder(),
  veteran: () => m.profile_rank_veteran(),
  legend: () => m.profile_rank_legend(),
};

const TIER_NAMES: Readonly<Record<CreatorTierKey, Text>> = {
  campfire: () => m.profile_tier_campfire(),
  'lean-to': () => m.profile_tier_lean_to(),
  cabin: () => m.profile_tier_cabin(),
  treehouse: () => m.profile_tier_treehouse(),
  fortress: () => m.profile_tier_fortress(),
  landmark: () => m.profile_tier_landmark(),
};

const BADGE_NAMES: Readonly<Record<BadgeKey, Text>> = {
  'original-survivor-2023': () => m.profile_badge_original_survivor_name({ year: '2023' }),
  'original-survivor-2024': () => m.profile_badge_original_survivor_name({ year: '2024' }),
  'original-survivor-2025': () => m.profile_badge_original_survivor_name({ year: '2025' }),
  'original-survivor-2026': () => m.profile_badge_original_survivor_name({ year: '2026' }),
  'crash-landing': () => m.profile_badge_crash_landing_name(),
  'first-blueprint': () => m.profile_badge_first_blueprint_name(),
  'pillar-of-the-island': () => m.profile_badge_pillar_of_the_island_name(),
  'patch-day-hero': () => m.profile_badge_patch_day_hero_name(),
  'island-favorite': () => m.profile_badge_island_favorite_name(),
  'well-documented': () => m.profile_badge_well_documented_name(),
  'first-field-report': () => m.profile_badge_first_field_report_name(),
  'field-medic': () => m.profile_badge_field_medic_name(),
  'bug-hunter': () => m.profile_badge_bug_hunter_name(),
  'first-review': () => m.profile_badge_first_review_name(),
  'voice-of-the-island': () => m.profile_badge_voice_of_the_island_name(),
  'helping-hand': () => m.profile_badge_helping_hand_name(),
  cartographer: () => m.profile_badge_cartographer_name(),
  'survived-day-one': () => m.profile_badge_survived_day_one_name(),
  'mod-of-the-week': () => m.profile_badge_mod_of_the_week_name(),
  'staff-pick': () => m.profile_badge_staff_pick_name(),
  'jam-participant': () => m.profile_badge_jam_participant_name(),
  'jam-podium': () => m.profile_badge_jam_podium_name(),
  'jam-champion': () => m.profile_badge_jam_champion_name(),
  'verified-creator': () => m.profile_badge_verified_creator_name(),
  ranger: () => m.profile_badge_ranger_name(),
  translator: () => m.profile_badge_translator_name(),
  'night-owl': () => m.profile_badge_night_owl_name(),
};

const BADGE_HINTS: Readonly<Record<BadgeKey, Text>> = {
  'original-survivor-2023': () => m.profile_badge_original_survivor_hint({ year: '2023' }),
  'original-survivor-2024': () => m.profile_badge_original_survivor_hint({ year: '2024' }),
  'original-survivor-2025': () => m.profile_badge_original_survivor_hint({ year: '2025' }),
  'original-survivor-2026': () => m.profile_badge_original_survivor_hint({ year: '2026' }),
  'crash-landing': () => m.profile_badge_crash_landing_hint(),
  'first-blueprint': () => m.profile_badge_first_blueprint_hint(),
  'pillar-of-the-island': () => m.profile_badge_pillar_of_the_island_hint(),
  'patch-day-hero': () => m.profile_badge_patch_day_hero_hint(),
  'island-favorite': () => m.profile_badge_island_favorite_hint(),
  'well-documented': () => m.profile_badge_well_documented_hint(),
  'first-field-report': () => m.profile_badge_first_field_report_hint(),
  'field-medic': () => m.profile_badge_field_medic_hint(),
  'bug-hunter': () => m.profile_badge_bug_hunter_hint(),
  'first-review': () => m.profile_badge_first_review_hint(),
  'voice-of-the-island': () => m.profile_badge_voice_of_the_island_hint(),
  'helping-hand': () => m.profile_badge_helping_hand_hint(),
  cartographer: () => m.profile_badge_cartographer_hint(),
  'survived-day-one': () => m.profile_badge_survived_day_one_hint(),
  'mod-of-the-week': () => m.profile_badge_mod_of_the_week_hint(),
  'staff-pick': () => m.profile_badge_staff_pick_hint(),
  'jam-participant': () => m.profile_badge_jam_participant_hint(),
  'jam-podium': () => m.profile_badge_jam_podium_hint(),
  'jam-champion': () => m.profile_badge_jam_champion_hint(),
  'verified-creator': () => m.profile_badge_verified_creator_hint(),
  ranger: () => m.profile_badge_ranger_hint(),
  translator: () => m.profile_badge_translator_hint(),
  'night-owl': () => m.profile_badge_night_owl_hint(),
};

type BadgeGroupKey = (typeof BADGE_GROUPS)[number];

const GROUP_NAMES: Readonly<Record<BadgeGroupKey, Text>> = {
  legacy: () => m.profile_badge_group_legacy(),
  creator: () => m.profile_badge_group_creator(),
  community: () => m.profile_badge_group_community(),
  onboarding: () => m.profile_badge_group_onboarding(),
  awards: () => m.profile_badge_group_awards(),
  roles: () => m.profile_badge_group_roles(),
  secret: () => m.profile_badge_group_secret(),
};

function isKnown<K extends string>(record: Readonly<Record<K, Text>>, key: string): key is K {
  return Object.hasOwn(record, key);
}

export function rankName(rank: SurvivorRankKey): string {
  return RANK_NAMES[rank]();
}

export function tierName(tier: CreatorTierKey): string {
  return TIER_NAMES[tier]();
}

/** Localised badge name; unknown (future) keys fall back to a readable form of the key. */
export function badgeName(key: string): string {
  if (isKnown(BADGE_NAMES, key)) return BADGE_NAMES[key]();
  const text = key.replace(/-/g, ' ');
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/** How the badge is earned (empty for unknown keys). */
export function badgeHint(key: string): string {
  return isKnown(BADGE_HINTS, key) ? BADGE_HINTS[key]() : '';
}

export function badgeGroupName(group: string): string {
  return isKnown(GROUP_NAMES, group) ? GROUP_NAMES[group]() : group;
}

/** Visible label of a profile link (the user's own label wins). */
export function linkLabel(link: LinkDTO): string {
  if (link.label) return link.label;
  switch (link.kind) {
    case 'kofi':
      return 'Ko-fi';
    case 'patreon':
      return 'Patreon';
    case 'github':
      return 'GitHub';
    case 'youtube':
      return 'YouTube';
    case 'twitch':
      return 'Twitch';
    case 'discord':
      return 'Discord';
    case 'website':
      return m.profile_link_website();
    default:
      try {
        return new URL(link.url).hostname.replace(/^www\./, '');
      } catch {
        return link.url;
      }
  }
}

// -----------------------------------------------------------------------------------------------
// @sotf/ui/domain
// -----------------------------------------------------------------------------------------------

type Override = (params: DomainMessageParams) => string;

function num(value: unknown): number {
  return typeof value === 'number' ? value : Number(value ?? 0);
}

function overrides(locale: Locale): Partial<Record<DomainMessageKey, Override>> {
  return {
    ui_domain_rank_label: () => m.profile_rank_label(),
    ui_domain_rank_castaway: RANK_NAMES.castaway,
    ui_domain_rank_scavenger: RANK_NAMES.scavenger,
    ui_domain_rank_forager: RANK_NAMES.forager,
    ui_domain_rank_trapper: RANK_NAMES.trapper,
    ui_domain_rank_builder: RANK_NAMES.builder,
    ui_domain_rank_pathfinder: RANK_NAMES.pathfinder,
    ui_domain_rank_veteran: RANK_NAMES.veteran,
    ui_domain_rank_legend: RANK_NAMES.legend,
    ui_domain_tier_label: () => m.profile_tier_label(),
    ui_domain_tier_campfire: TIER_NAMES.campfire,
    ui_domain_tier_lean_to: TIER_NAMES['lean-to'],
    ui_domain_tier_cabin: TIER_NAMES.cabin,
    ui_domain_tier_treehouse: TIER_NAMES.treehouse,
    ui_domain_tier_fortress: TIER_NAMES.fortress,
    ui_domain_tier_landmark: TIER_NAMES.landmark,
    ui_domain_badge_locked: () => m.profile_badge_locked(),
    ui_domain_badge_progress: (p) =>
      m.profile_badge_progress({
        current: typeof p.current === 'string' ? p.current : formatNumber(locale, num(p.current)),
        target: typeof p.target === 'string' ? p.target : formatNumber(locale, num(p.target)),
      }),
    ui_domain_badge_times: (p) => m.profile_badge_times({ count: num(p.count) }),
    ui_domain_trusted_creator: () => m.profile_verified_creator(),
    ui_domain_stat_mods: () => m.profile_stat_mods_label(),
    ui_domain_stat_downloads: () => m.profile_stat_downloads_label(),
    ui_domain_stat_followers: () => m.profile_stat_followers_label(),
    ui_domain_creator_top_mod: (p) => m.profile_creator_top_mod({ mod: String(p.mod ?? '') }),
  };
}

/** `DomainI18n` of the page (BCP-47 `lang`, UTC dates: the HTML is shared and edge-cached). */
export function profileDomainI18n(
  locale: Locale,
  taxonomy: (nameKey: string, fallback: string) => string = (_key, fallback) => fallback,
): DomainI18n {
  const table = overrides(locale);
  return {
    locale: toHtmlLang(locale),
    timeZone: 'UTC',
    t: (key, params) => {
      const override = table[key];
      return override ? override(params ?? {}) : domainTranslate(key, params, locale);
    },
    taxonomy,
  };
}
