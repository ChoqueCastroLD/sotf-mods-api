/**
 * RSS 2.0 feeds (PLAN §8.6): global (new and updated mods), builds, per category, per creator and
 * per mod (versions with changelogs). Announced by the pages with `<link rel="alternate"
 * type="application/rss+xml">`. English (machine endpoints are not localized), absolute links,
 * cached 1 h at the edge with the tags of what they list (`feed`, `list:*`, `category:*`,
 * `user:*`, `mod:*`), so publishing purges them.
 */
import { type CacheTag, cacheTag } from '@sotf/contracts/cache';
import type { ModCardDTO, ModDetailDTO, UserPublicDTO } from '@sotf/contracts/catalog';
import { absoluteUrl, versionsPath } from '@sotf/contracts/seo';
import type { VersionDTO } from '@sotf/contracts/versions';
import { LOGO_PATH } from '../site.ts';
import { htmlToMarkdown } from './html-to-md.ts';
import { readableVersion } from './markdown.ts';
import { type RssChannel, type RssItem, rss } from './xml.ts';

/** Items per feed. */
export const FEED_SIZE = 50;
/** Minutes readers may cache a feed (the edge TTL is one hour; purges refresh it sooner). */
const FEED_TTL_MINUTES = 60;

export interface FeedDocument {
  body: string;
  tags: CacheTag[];
}

function cardItem(card: ModCardDTO, siteUrl: string): RssItem {
  const link = absoluteUrl(card.canonicalPath, siteUrl);
  const readable = readableVersion(card.latestVersion);
  const version = readable ? ` ${readable}` : '';
  const description = [
    card.shortDescription.trim(),
    `${card.kind === 'build' ? 'Build' : card.kind === 'library' ? 'Library' : 'Mod'} by ${card.userDisplayName}.`,
  ]
    .filter(Boolean)
    .join(' ');
  return {
    title: `${card.name}${version}`,
    link,
    // One item per release: a new version is a new item for readers.
    guid: `${link}#${card.latestVersion ?? card.lastReleasedAt}`,
    pubDate: card.lastReleasedAt,
    description,
    author: card.userDisplayName,
    categories: card.category ? [card.category.name] : [],
    imageUrl: card.thumbnail?.url ?? null,
  };
}

function channel(input: Omit<RssChannel, 'language' | 'ttl' | 'imageUrl'>, siteUrl: string): string {
  return rss({ ...input, language: 'en', ttl: FEED_TTL_MINUTES, imageUrl: absoluteUrl(LOGO_PATH, siteUrl) });
}

export function listingFeed(options: {
  cards: readonly ModCardDTO[];
  siteUrl: string;
  title: string;
  description: string;
  pagePath: string;
  feedPath: string;
  tags: CacheTag[];
}): FeedDocument {
  const body = channel(
    {
      title: options.title,
      link: absoluteUrl(options.pagePath, options.siteUrl),
      selfUrl: absoluteUrl(options.feedPath, options.siteUrl),
      description: options.description,
      items: options.cards.slice(0, FEED_SIZE).map((card) => cardItem(card, options.siteUrl)),
    },
    options.siteUrl,
  );
  return { body, tags: ['feed', ...options.tags] };
}

/** Per-creator feed: their newest releases (mods, libraries and builds). */
export function creatorFeed(user: UserPublicDTO, cards: readonly ModCardDTO[], siteUrl: string): FeedDocument {
  const sorted = [...cards].sort((a, b) => b.lastReleasedAt.localeCompare(a.lastReleasedAt));
  return listingFeed({
    cards: sorted,
    siteUrl,
    title: `${user.displayName} (@${user.handle}) on SOTF Mods`,
    description: `New and updated Sons of the Forest mods and builds by ${user.displayName}.`,
    pagePath: user.canonicalPath,
    feedPath: `${user.canonicalPath}/feed.xml`,
    tags: [cacheTag.user(user.id)],
  });
}

function versionItem(mod: ModDetailDTO, version: VersionDTO, siteUrl: string): RssItem {
  const link = absoluteUrl(versionsPath(mod.kind, mod.userHandle, mod.slug, version.version), siteUrl);
  const changelog = htmlToMarkdown(version.changelogHtml, siteUrl);
  const channelLabel = version.channel === 'beta' ? ' (beta)' : '';
  return {
    title: `${mod.name} ${version.version}${channelLabel}`,
    link,
    guid: `${absoluteUrl(mod.canonicalPath, siteUrl)}#version-${version.id}`,
    pubDate: version.publishedAt,
    // Readers render HTML descriptions: the stored changelog HTML is already sanitized.
    description: version.changelogHtml.trim() || changelog || `${mod.name} ${version.version} released.`,
    author: mod.author.displayName,
    categories: mod.category ? [mod.category.name] : [],
    imageUrl: mod.thumbnail?.url ?? null,
  };
}

/** Per-mod feed: its active versions, newest first, with their changelogs. */
export function modFeed(mod: ModDetailDTO, versions: readonly VersionDTO[], siteUrl: string): FeedDocument {
  const items = versions
    .filter((version) => version.status === 'active')
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, FEED_SIZE)
    .map((version) => versionItem(mod, version, siteUrl));
  const feedPath = `${mod.canonicalPath.replace(/^\/builds\//, '/mods/')}/feed.xml`;
  const body = channel(
    {
      title: `${mod.name}: releases on SOTF Mods`,
      link: absoluteUrl(mod.canonicalPath, siteUrl),
      selfUrl: absoluteUrl(feedPath, siteUrl),
      description: `Every release of ${mod.name}, the Sons of the Forest ${mod.kind === 'build' ? 'build' : 'mod'} by ${mod.author.displayName}, with its changelog.`,
      items,
    },
    siteUrl,
  );
  return { body, tags: ['feed', cacheTag.mod(mod.id), cacheTag.user(mod.userId)] };
}
