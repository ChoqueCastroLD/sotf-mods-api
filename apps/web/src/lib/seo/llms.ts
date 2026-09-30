/**
 * `/llms.txt` and `/llms-full.txt` (PLAN §8.7 GEO, llmstxt.org format): a Markdown map of the site
 * for LLM tools and generative search engines.
 *
 * - `llms.txt`: H1 «SOTF Mods», a blockquote summary, then link lists: guides (install, Patch
 *   Radar, best-of hubs), categories, the top 50 mods, the API (`/developers`, OpenAPI) and the
 *   community (Discord).
 * - `llms-full.txt`: every published mod, library and build in compact Markdown (name, author,
 *   category, version, compatibility, multiplayer, downloads, short description and URL).
 */
import type { ModCardDTO } from '@sotf/contracts/catalog';
import { absoluteUrl, categoryPath, profilePath } from '@sotf/contracts/seo';
import { BEST_TOPICS, type BestTopic } from '../../content/best/hubs.ts';
import { SOCIAL_LINKS } from '../site.ts';
import type { CategoryDTO } from './data.ts';
import { isoDay, mdInline } from './markdown.ts';

const numberFormat = new Intl.NumberFormat('en-US');

const SUMMARY =
  'SOTF Mods (sotf-mods.com) is the community home of Sons of the Forest modding since 2023: free, direct downloads of mods, libraries, builds (BuildShare blueprints) and mod Kits for the RedLoader mod loader, with field-tested compatibility on every game patch, reviews and creator profiles.';

const BEST_TITLES: Readonly<Record<BestTopic, string>> = {
  mods: 'Best Sons of the Forest mods',
  'quality-of-life-mods': 'Best quality-of-life mods',
  'multiplayer-mods': 'Best multiplayer mods',
  'dedicated-server-mods': 'Best dedicated server mods',
  'building-mods': 'Best building mods',
  libraries: 'Mod libraries',
};

const MULTIPLAYER: Readonly<Record<string, string>> = {
  client_side: 'client-side',
  host_only: 'host only',
  all_players: 'all players',
  singleplayer_only: 'singleplayer only',
  unknown: 'not stated',
};

function link(title: string, url: string, note?: string): string {
  return `- [${mdInline(title)}](${url})${note ? `: ${note}` : ''}`;
}

export function llmsTxt(input: {
  siteUrl: string;
  cards: readonly ModCardDTO[];
  categories: readonly CategoryDTO[];
  now: Date;
}): string {
  const url = (path: string) => absoluteUrl(path, input.siteUrl);
  const mods = input.cards.filter((card) => card.kind !== 'build');
  const top = [...mods].sort((a, b) => b.downloads - a.downloads).slice(0, 50);
  const lines = [
    '# SOTF Mods',
    '',
    `> ${SUMMARY}`,
    '',
    `The catalog lists ${numberFormat.format(mods.length)} mods and libraries and ${numberFormat.format(input.cards.length - mods.length)} builds (as of ${isoDay(input.now)}). Every mod page has a Markdown version: append \`.md\` to its URL. Full catalog in one file: ${url('/llms-full.txt')}`,
    '',
    '## Guides',
    '',
    link('How to install Sons of the Forest mods', url('/install'), 'RedLoader and RedManager, step by step'),
    link('Patch Radar', url('/patch-radar'), 'which popular mods work on the current game patch'),
    ...BEST_TOPICS.map((topic) => link(BEST_TITLES[topic], url(`/best/${topic}`))),
    link('Mod Kits', url('/kits'), 'curated collections of mods that work together'),
    link('Creators', url('/creators')),
    '',
    '## Categories',
    '',
    ...input.categories
      .filter((category) => category.count > 0)
      .map((category) =>
        link(
          `${category.name} ${category.kind === 'build' ? 'builds' : 'mods'}`,
          url(categoryPath(category.slug)),
          `${numberFormat.format(category.count)} items`,
        ),
      ),
    '',
    '## Top 50 mods by downloads',
    '',
    ...top.map((card) =>
      link(
        card.name,
        url(card.canonicalPath),
        `by ${mdInline(card.userDisplayName)}, ${numberFormat.format(card.downloads)} downloads. ${mdInline(card.shortDescription)}`.trim(),
      ),
    ),
    '',
    '## API',
    '',
    link('Developers guide', url('/developers'), 'public API, deprecations, integrating a mod manager'),
    link('OpenAPI document', url('/api/v2/openapi.json')),
    link('API reference', url('/api/docs')),
    '',
    '## Community',
    '',
    link('Discord', SOCIAL_LINKS.discord),
    link('Source code', SOCIAL_LINKS.github),
    link('About SOTF Mods', url('/about')),
    '',
  ];
  return lines.join('\n');
}

export function llmsFullTxt(input: { siteUrl: string; cards: readonly ModCardDTO[]; now: Date }): string {
  const url = (path: string) => absoluteUrl(path, input.siteUrl);
  const sorted = [...input.cards].sort((a, b) => b.downloads - a.downloads);
  const lines = [
    '# SOTF Mods: full catalog',
    '',
    `> Every published Sons of the Forest mod, library and build on SOTF Mods, as of ${isoDay(input.now)}, most downloaded first. Each page also has a Markdown version at its URL + \`.md\`.`,
    '',
  ];
  for (const card of sorted) {
    const kind = card.kind === 'build' ? 'Build' : card.kind === 'library' ? 'Library' : 'Mod';
    lines.push(`## ${mdInline(card.name)}`, '');
    const facts = [
      `${kind} by ${mdInline(card.userDisplayName)} (${url(profilePath(card.userHandle))})`,
      card.category ? `Category: ${card.category.name}` : null,
      card.latestVersion
        ? `Version: ${card.latestVersion} (${isoDay(card.lastReleasedAt)})`
        : `Updated: ${isoDay(card.lastReleasedAt)}`,
      card.kind === 'build' ? null : `Compatibility with the current patch: ${card.compatStatus}`,
      card.kind === 'build' ? null : `Multiplayer: ${MULTIPLAYER[card.multiplayerRole ?? 'unknown'] ?? 'not stated'}`,
      `Downloads: ${numberFormat.format(card.downloads)}`,
      card.ratingAvg !== null && card.ratingCount >= 3
        ? `Rating: ${card.ratingAvg.toFixed(1)}/5 (${card.ratingCount} reviews)`
        : null,
      `URL: ${url(card.canonicalPath)}`,
    ].filter((fact): fact is string => fact !== null);
    for (const fact of facts) lines.push(`- ${fact}`);
    if (card.shortDescription.trim()) lines.push('', mdInline(card.shortDescription));
    lines.push('');
  }
  return lines.join('\n');
}
