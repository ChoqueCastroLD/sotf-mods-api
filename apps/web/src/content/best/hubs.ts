/**
 * GEO hubs `/best/:topic` (PLAN §4.2, §8): fixed catalogue queries + an editorial intro per
 * locale (`./<topic>/<locale>.md`) + «updated on {date}». Each hub merges one or more
 * `GET /mods` reads (deduplicated, ranked by all-time downloads) so it stays useful before the
 * mass recategorization of WP-83 moves mods into the new categories.
 */
import type { ModListQuery } from '@sotf/contracts/catalog';
import type { Locale } from '@sotf/i18n';
import type { MarkdownInstance } from 'astro';

export const BEST_TOPICS = [
  'mods',
  'quality-of-life-mods',
  'multiplayer-mods',
  'dedicated-server-mods',
  'building-mods',
  'libraries',
] as const;
export type BestTopic = (typeof BEST_TOPICS)[number];

export function isBestTopic(value: string): value is BestTopic {
  return (BEST_TOPICS as readonly string[]).includes(value);
}

type HubQuery = Partial<ModListQuery> & Pick<ModListQuery, 'type'>;

export interface HubDefinition {
  /** Reads merged into the hub (each `sort=downloads`, page 1). */
  queries: readonly HubQuery[];
  /** Items shown. */
  limit: number;
  /** Locale-less Explore URL with the equivalent filters («See all»). */
  explore: string;
}

export const HUBS: Readonly<Record<BestTopic, HubDefinition>> = {
  mods: {
    queries: [{ type: 'mod' }],
    limit: 24,
    explore: '/mods?sort=downloads',
  },
  'quality-of-life-mods': {
    queries: [{ type: 'all', category: ['quality-of-life'] }],
    limit: 24,
    explore: '/categories/quality-of-life',
  },
  'multiplayer-mods': {
    queries: [
      { type: 'all', category: ['multiplayer-servers'] },
      { type: 'all', tag: ['co-op'] },
      { type: 'mod', multiplayer: 'all_players' },
      { type: 'mod', multiplayer: 'host_only' },
      { type: 'mod', multiplayer: 'client_side' },
    ],
    limit: 24,
    explore: '/mods?multiplayer=all_players',
  },
  'dedicated-server-mods': {
    queries: [
      { type: 'all', dedicated: 'yes' },
      { type: 'all', platform: 'Server' },
    ],
    limit: 24,
    explore: '/mods?type=all&dedicated=yes',
  },
  'building-mods': {
    queries: [
      { type: 'all', category: ['building'] },
      { type: 'all', tag: ['building-tools'] },
      { type: 'all', tag: ['structures'] },
      { type: 'all', tag: ['defenses'] },
    ],
    limit: 24,
    explore: '/categories/building',
  },
  libraries: {
    queries: [{ type: 'library' }],
    limit: 24,
    explore: '/mods?type=library',
  },
};

export interface HubIntroFrontmatter {
  /** Last editorial review of the intro (ISO date). */
  reviewed?: string;
}

type IntroModule = MarkdownInstance<HubIntroFrontmatter>;

const INTROS = import.meta.glob<IntroModule>('./*/*.md', { eager: true });

export interface HubIntro {
  Content: IntroModule['Content'];
  frontmatter: HubIntroFrontmatter;
  /** Locale of the text (English when the locale has no translation yet). */
  locale: Locale;
}

/** Editorial intro of a hub in `locale`, falling back to English. */
export function hubIntro(topic: BestTopic, locale: Locale): HubIntro | null {
  const own = INTROS[`./${topic}/${locale}.md`];
  if (own) return { Content: own.Content, frontmatter: own.frontmatter, locale };
  const english = INTROS[`./${topic}/en.md`];
  return english ? { Content: english.Content, frontmatter: english.frontmatter, locale: 'en' } : null;
}
