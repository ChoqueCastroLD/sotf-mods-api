/**
 * `/news` (T0-28): site announcements. Posts are Markdown files `./<locale>/<slug>.md` (the layout
 * the sitemap of WP-61 reads: the slug is the file name), English authoritative. Dates and the
 * author live in `NEWS_POSTS`, once per post, so translations only carry text.
 */
import { DEFAULT_LOCALE, isLocale, type Locale } from '@sotf/i18n';
import type { MarkdownInstance } from 'astro';
import { z } from 'zod';
import { type DocHeading, localizeDocHtml, renderDoc } from '../../components/content/markdown.ts';

export interface NewsPostMeta {
  /** Publication date (ISO). */
  published: string;
  /** Last substantive edit (ISO), if any. */
  updated?: string;
  /** Byline shown on the post and in JSON-LD. */
  author: string;
}

/** Every post, newest first. A Markdown file whose slug is missing here fails the build. */
export const NEWS_POSTS: Readonly<Record<string, NewsPostMeta>> = {
  'welcome-to-v2': { published: '2026-09-30', author: 'SOTF Mods team' },
};

export const NewsFrontmatter = z.object({
  title: z.string().min(5).max(110),
  /** Summary for the index, RSS and the meta description (≤ 160). */
  description: z.string().min(50).max(170),
});
export type NewsFrontmatter = z.infer<typeof NewsFrontmatter>;

export interface NewsPost extends NewsPostMeta {
  slug: string;
  title: string;
  description: string;
  /** HTML with internal links localized for the request locale. */
  html: string;
  headings: DocHeading[];
  text: string;
  /** Language of the text. */
  locale: Locale;
  translated: boolean;
}

type Module = MarkdownInstance<Record<string, unknown>>;

const MODULES = import.meta.glob<Module>('./*/*.md', { eager: true });

interface Rendered {
  frontmatter: NewsFrontmatter;
  html: string;
  headings: DocHeading[];
  text: string;
}

const files = new Map<string, Module>();
for (const [path, module] of Object.entries(MODULES)) {
  const [, locale = '', file = ''] = path.split('/');
  const slug = file.replace(/\.md$/, '');
  if (!isLocale(locale)) throw new Error(`${path}: the directory must be a locale code`);
  if (!NEWS_POSTS[slug]) throw new Error(`${path}: add "${slug}" to NEWS_POSTS`);
  files.set(`${slug}|${locale}`, module);
}
const rendered = new Map<string, Rendered>();

function render(slug: string, locale: Locale): Rendered | null {
  const id = `${slug}|${locale}`;
  const cached = rendered.get(id);
  if (cached) return cached;
  const module = files.get(id);
  if (!module) return null;
  const parsed = NewsFrontmatter.safeParse(module.frontmatter);
  if (!parsed.success) throw new Error(`${module.file}: invalid front matter: ${parsed.error.message}`);
  const doc = renderDoc(module.rawContent(), { source: module.file });
  const value = { frontmatter: parsed.data, html: doc.html, headings: doc.headings, text: doc.text };
  rendered.set(id, value);
  return value;
}

/** Slugs that exist (have at least the English file), newest first. */
export function newsSlugs(): string[] {
  return Object.entries(NEWS_POSTS)
    .filter(([slug]) => files.has(`${slug}|${DEFAULT_LOCALE}`))
    .sort(([, a], [, b]) => b.published.localeCompare(a.published))
    .map(([slug]) => slug);
}

/** A post in `locale` (English when not translated); `null` for an unknown slug. */
export function newsPost(slug: string, locale: Locale): NewsPost | null {
  const meta = NEWS_POSTS[slug];
  if (!meta) return null;
  const own = render(slug, locale);
  const doc = own ?? render(slug, DEFAULT_LOCALE);
  if (!doc) return null;
  return {
    ...meta,
    slug,
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
    html: localizeDocHtml(doc.html, locale),
    headings: doc.headings,
    text: doc.text,
    locale: own ? locale : DEFAULT_LOCALE,
    translated: own !== null,
  };
}

/** All posts in `locale`, newest first. */
export function newsPosts(locale: Locale): NewsPost[] {
  return newsSlugs()
    .map((slug) => newsPost(slug, locale))
    .filter((post): post is NewsPost => post !== null);
}
