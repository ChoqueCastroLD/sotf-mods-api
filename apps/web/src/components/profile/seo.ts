/**
 * SEO of the profile (PLAN §4.5 «Perfil»), creators directory and achievements pages.
 *
 * - Profile title «{displayName} (@{handle}) — Sons of the Forest mod creator» (non-creators get
 *   the community variant), description from the bio or the stats; JSON-LD `ProfilePage` →
 *   `mainEntity: Person` (`name`, `alternateName`, `image`, `sameAs`, `interactionStatistic`).
 * - Creators: `CollectionPage` + `ItemList` of the profiles on the page.
 * - Achievements: `CollectionPage` + `DefinedTermSet` of the badges, ranks and tiers (rules that
 *   answer engines can quote).
 */
import { absoluteUrl, profilePath } from '@sotf/contracts/seo';
import { formatCompactNumber, type Locale, localizePath, toHreflang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import type { CollectionPage, DefinedTermSet, Person, ProfilePage, WithContext } from 'schema-dts';
import type { JsonLd } from '../../lib/seo/jsonld.ts';
import type { CreatorCardDTO, UserPublicDTO } from './data.ts';

/** Plain text of the API's bio HTML (escaped paragraphs or sanitised Markdown). */
export function bioText(html: string | null): string {
  if (!html) return '';
  return html
    .replace(/<\/(p|li|h[1-6]|blockquote)>/gi, ' ')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function isCreator(user: UserPublicDTO): boolean {
  return user.stats.modsCount + user.stats.buildsCount > 0;
}

export function profileTitle(user: UserPublicDTO): string {
  const name = user.displayName || user.handle;
  return isCreator(user)
    ? m.profile_meta_title_creator({ name, handle: user.handle })
    : m.profile_meta_title_member({ name, handle: user.handle });
}

export function profileDescription(user: UserPublicDTO, locale: Locale): string {
  const bio = bioText(user.bioHtml);
  if (bio.length >= 50) return bio;
  const name = user.displayName || user.handle;
  const stats = user.stats;
  const facts = isCreator(user)
    ? m.profile_meta_description_creator({
        name,
        count: stats.modsCount + stats.buildsCount,
        downloadsCount: stats.downloadsTotal,
        downloads: formatCompactNumber(locale, stats.downloadsTotal),
        followers: stats.followersCount,
      })
    : m.profile_meta_description_member({ name, reviews: stats.reviewsCount, reports: stats.compatReportsCount });
  return bio ? `${bio} · ${facts}` : facts;
}

export interface ProfileJsonLdInput {
  user: UserPublicDTO;
  locale: Locale;
  siteUrl: string;
  pageUrl: string;
}

export function profileJsonLd({ user, locale, siteUrl, pageUrl }: ProfileJsonLdInput): JsonLd {
  const name = user.displayName || user.handle;
  const bio = bioText(user.bioHtml);
  const stats = user.stats;
  const person: Person = {
    '@type': 'Person',
    '@id': `${absoluteUrl(profilePath(user.handle), siteUrl)}#person`,
    name,
    alternateName: `@${user.handle}`,
    identifier: String(user.id),
    url: pageUrl,
    ...(bio ? { description: bio } : {}),
    ...(user.avatar ? { image: user.avatar.url } : {}),
    ...(user.links.length > 0 ? { sameAs: user.links.map((link) => link.url) } : {}),
    interactionStatistic: [
      {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'FollowAction' },
        userInteractionCount: stats.followersCount,
      },
    ],
    agentInteractionStatistic: [
      {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'WriteAction' },
        userInteractionCount: stats.modsCount + stats.buildsCount + stats.reviewsCount,
      },
      {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'FollowAction' },
        userInteractionCount: stats.followingCount,
      },
    ],
  } as Person;
  const page: WithContext<ProfilePage> = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${pageUrl}#profile`,
    url: pageUrl,
    name: profileTitle(user),
    inLanguage: toHreflang(locale),
    dateCreated: user.createdAt,
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: person,
    ...(user.pinnedMods.length > 0
      ? {
          hasPart: user.pinnedMods.map((mod) => ({
            '@type': 'SoftwareApplication',
            name: mod.name,
            url: absoluteUrl(localizePath(mod.canonicalPath, locale), siteUrl),
          })),
        }
      : {}),
  } as WithContext<ProfilePage>;
  return page;
}

export function creatorsJsonLd(input: {
  creators: readonly CreatorCardDTO[];
  locale: Locale;
  siteUrl: string;
  pageUrl: string;
  offset: number;
}): JsonLd {
  const page: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${input.pageUrl}#page`,
    url: input.pageUrl,
    name: m.profile_creators_title(),
    description: m.profile_creators_meta_description(),
    inLanguage: toHreflang(input.locale),
    isPartOf: { '@id': `${input.siteUrl}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: input.creators.length,
      itemListElement: input.creators.map((creator, index) => ({
        '@type': 'ListItem',
        position: input.offset + index + 1,
        url: absoluteUrl(localizePath(profilePath(creator.user.handle), input.locale), input.siteUrl),
        name: creator.user.displayName || creator.user.handle,
      })),
    },
  };
  return page;
}

export function achievementsJsonLd(input: {
  locale: Locale;
  siteUrl: string;
  pageUrl: string;
  badges: ReadonlyArray<{ name: string; description: string }>;
}): JsonLd {
  const terms: DefinedTermSet = {
    '@type': 'DefinedTermSet',
    '@id': `${input.pageUrl}#badges`,
    name: m.profile_achievements_badges_title(),
    hasDefinedTerm: input.badges.map((badge) => ({
      '@type': 'DefinedTerm',
      name: badge.name,
      ...(badge.description ? { description: badge.description } : {}),
    })),
  };
  const page: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${input.pageUrl}#page`,
    url: input.pageUrl,
    name: m.profile_achievements_title(),
    description: m.profile_achievements_meta_description(),
    inLanguage: toHreflang(input.locale),
    isPartOf: { '@id': `${input.siteUrl}/#website` },
    mainEntity: terms,
  };
  return page;
}
