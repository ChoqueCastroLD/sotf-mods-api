/**
 * JSON-LD of the content pages (PLAN §4.5, §8.7): `TechArticle` + `FAQPage` for the install guide,
 * `Article` + `ItemList` for Patch Radar, `BlogPosting` for news, `WebPage`/`AboutPage` for the
 * rest. Every node references the site `Organization` by `@id` (declared on the landing).
 */
import { type Locale, toHreflang } from '@sotf/i18n';
import type {
  AboutPage,
  Article,
  BlogPosting,
  CollectionPage,
  FAQPage,
  ItemList,
  TechArticle,
  WebPage,
  WithContext,
} from 'schema-dts';
import { OG_DEFAULT_PATH, STEAM_APP_URL } from '../../lib/site.ts';

const GAME = {
  '@type': 'VideoGame',
  name: 'Sons of the Forest',
  sameAs: STEAM_APP_URL,
} as const;

function organization(siteUrl: string) {
  return { '@id': `${siteUrl}/#organization` } as const;
}

export interface ArticleInput {
  siteUrl: string;
  /** Absolute URL of the page. */
  url: string;
  locale: Locale;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  /** Absolute or root-relative image (defaults to the site OG image). */
  image?: string;
}

function image(siteUrl: string, value: string | undefined): string {
  const path = value ?? OG_DEFAULT_PATH;
  return /^https?:\/\//.test(path) ? path : `${siteUrl}${path}`;
}

export function techArticleJsonLd(
  input: ArticleInput & { proficiency: 'Beginner' | 'Expert'; sections: readonly string[] },
): WithContext<TechArticle> {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${input.url}#article`,
    headline: input.headline,
    description: input.description,
    url: input.url,
    mainEntityOfPage: input.url,
    inLanguage: toHreflang(input.locale),
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    image: image(input.siteUrl, input.image),
    author: organization(input.siteUrl),
    publisher: organization(input.siteUrl),
    about: GAME,
    proficiencyLevel: input.proficiency,
    articleSection: [...input.sections],
  };
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export function faqPageJsonLd(items: readonly FaqEntry[], pageUrl: string, locale: Locale): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    url: pageUrl,
    inLanguage: toHreflang(locale),
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export interface ListItemInput {
  name: string;
  /** Absolute URL. */
  url: string;
}

export function itemListJsonLd(id: string, name: string, items: readonly ListItemInput[]): WithContext<ItemList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': id,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function articleJsonLd(input: ArticleInput): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${input.url}#article`,
    headline: input.headline,
    description: input.description,
    url: input.url,
    mainEntityOfPage: input.url,
    inLanguage: toHreflang(input.locale),
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    image: image(input.siteUrl, input.image),
    author: organization(input.siteUrl),
    publisher: organization(input.siteUrl),
    about: GAME,
  };
}

export function blogPostingJsonLd(input: ArticleInput & { authorName: string }): WithContext<BlogPosting> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${input.url}#article`,
    headline: input.headline,
    description: input.description,
    url: input.url,
    mainEntityOfPage: input.url,
    inLanguage: toHreflang(input.locale),
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    image: image(input.siteUrl, input.image),
    author: { '@type': 'Organization', name: input.authorName, url: `${input.siteUrl}/about` },
    publisher: organization(input.siteUrl),
  };
}

export interface PageInput {
  siteUrl: string;
  url: string;
  locale: Locale;
  name: string;
  description: string;
  dateModified?: string;
}

export function webPageJsonLd(input: PageInput): WithContext<WebPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${input.url}#webpage`,
    name: input.name,
    description: input.description,
    url: input.url,
    inLanguage: toHreflang(input.locale),
    isPartOf: { '@id': `${input.siteUrl}/#website` },
    publisher: organization(input.siteUrl),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
  };
}

export function aboutPageJsonLd(input: PageInput): WithContext<AboutPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${input.url}#webpage`,
    name: input.name,
    description: input.description,
    url: input.url,
    inLanguage: toHreflang(input.locale),
    isPartOf: { '@id': `${input.siteUrl}/#website` },
    mainEntity: organization(input.siteUrl),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
  };
}

export function collectionPageJsonLd(
  input: PageInput & { items: readonly ListItemInput[] },
): WithContext<CollectionPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${input.url}#webpage`,
    name: input.name,
    description: input.description,
    url: input.url,
    inLanguage: toHreflang(input.locale),
    isPartOf: { '@id': `${input.siteUrl}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: input.items.length,
      itemListElement: input.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}
