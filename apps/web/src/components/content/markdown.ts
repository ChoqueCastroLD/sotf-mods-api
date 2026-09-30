/**
 * Editorial Markdown of the content pages (install guide, legal texts, about, developers, news):
 * the repository's own `.md` files, rendered with the site's single Markdown pipeline
 * (`@sotf/markdown`, profile `full`) so they share the `ProseLocator` styles, GitHub alerts and
 * heading anchors of the rest of the site.
 *
 * - `#` in a file is an `<h2>` (the page owns the `<h1>`); one paragraph per line (the pipeline
 *   turns every newline into a line break, as everywhere else on the site).
 * - Sections can carry **stable anchors** (`anchors` in the front matter, one per `#` heading, in
 *   order), so `/install#redloader` or `/privacy#cookies` work in every language.
 * - Internal links are written locale-less (`/patch-radar`) and localized per request.
 * - Links to the few hosts we vouch for (the loader's GitHub, Steam, VirusTotal…) are followed
 *   like internal ones; every other external link keeps `rel="ugc nofollow noopener"`.
 */
import type { Locale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { renderMarkdown } from '@sotf/markdown';
import { DEFAULT_LABELS, localizeHtml } from '@sotf/markdown/labels';
import type { MarkdownLabels } from '@sotf/markdown/types';
import { href } from '../../lib/i18n.ts';

/** Hosts of editorial links that are not user content (no `nofollow`). */
export const TRUSTED_HOSTS = [
  'sotf-mods.com',
  'www.sotf-mods.com',
  'api.sotf-mods.com',
  'github.com',
  'store.steampowered.com',
  'steamcommunity.com',
  'help.steampowered.com',
  'www.virustotal.com',
  'discord.gg',
  'learn.microsoft.com',
  'support.google.com',
  'policies.google.com',
  'www.cloudflare.com',
  'resend.com',
  'openai.com',
  'sentry.io',
  'gdpr.eu',
  'www.copyright.gov',
  'www.rssboard.org',
  'spec.openapis.org',
  'www.rfc-editor.org',
] as const;

export interface DocHeading {
  /** Rendered level (2 = a `#` heading). */
  level: number;
  id: string;
  text: string;
}

export interface RenderedDoc {
  /** Sanitised HTML, internal links still locale-less (see {@link localizeDocHtml}). */
  html: string;
  headings: DocHeading[];
  /** Plain text (for descriptions and reading time). */
  text: string;
}

/** Id prefix of generated heading ids (sections without an explicit anchor). */
const ID_PREFIX = 's-';

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Renders a document. `anchors`, when given, renames the ids of the `<h2>` sections in order and
 * must have exactly one entry per section (a translation that drifts from the English structure
 * fails loudly instead of silently breaking deep links).
 */
export function renderDoc(markdown: string, options: { anchors?: readonly string[]; source: string }): RenderedDoc {
  const result = renderMarkdown(markdown, {
    profile: 'full',
    idPrefix: ID_PREFIX,
    internalHosts: TRUSTED_HOSTS,
  });
  let html = result.html;
  const headings: DocHeading[] = result.headings.map((heading) => ({ ...heading }));
  const sections = headings.filter((heading) => heading.level === 2);
  if (options.anchors) {
    if (options.anchors.length !== sections.length) {
      throw new Error(
        `${options.source}: ${sections.length} sections but ${options.anchors.length} anchors (${options.anchors.join(', ')})`,
      );
    }
    sections.forEach((section, index) => {
      const anchor = options.anchors?.[index] as string;
      const pattern = new RegExp(`(id="|href="#)${escapeRegExp(section.id)}"`, 'g');
      html = html.replace(pattern, `$1${anchor}"`);
      section.id = anchor;
    });
  }
  return { html, headings, text: result.text };
}

const INTERNAL_HREF = /href="(\/(?![/\\])[^"]*)"/g;

/** Localizes the internal links of rendered HTML and the labels baked into it (alert titles). */
export function localizeDocHtml(html: string, locale: Locale): string {
  const localized = html.replace(INTERNAL_HREF, (_match, path: string) => `href="${href(path, locale)}"`);
  return localizeHtml(localized, markdownLabels());
}

/** Alert titles and the spoiler label in the page language. */
export function markdownLabels(): MarkdownLabels {
  return {
    ...DEFAULT_LABELS,
    'alert-note': m.content_md_alert_note(),
    'alert-tip': m.content_md_alert_tip(),
    'alert-important': m.content_md_alert_important(),
    'alert-warning': m.content_md_alert_warning(),
    'alert-caution': m.content_md_alert_caution(),
    spoiler: m.content_md_spoiler(),
  };
}

/** Minutes to read `text` (≈ 220 words per minute, at least 1; CJK counted by characters). */
export function readingMinutes(text: string): number {
  const cjk = (text.match(/[぀-ヿ㐀-鿿]/g) ?? []).length;
  const words = text
    .replace(/[぀-ヿ㐀-鿿]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220 + cjk / 500));
}
