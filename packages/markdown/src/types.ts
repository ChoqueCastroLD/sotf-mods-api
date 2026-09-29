/**
 * Public types of `@sotf/markdown`.
 */

/**
 * Rendering profile.
 *
 * - `full`: mod, build and kit descriptions, changelogs, bios. GFM (tables, task lists,
 *   strikethrough, autolinks), headings with anchors, images, GitHub alerts, YouTube facades and
 *   spoilers. Raw HTML is shown as literal text (never interpreted).
 * - `lite`: comments, reviews and author replies (PLAN §7.6). Bold, italic, strikethrough, code,
 *   links, lists, quotes, spoilers and mentions. No headings, images, tables, alerts or embeds:
 *   they degrade to text or plain links.
 * - `legacyHtml`: `full` plus a strict allowlist of raw HTML (`b`, `strong`, `i`, `em`, `br`, `p`,
 *   lists, headings, `details`/`summary`, `code`, `pre`, `a`, `hr`, `dl`, `blockquote`, tables…)
 *   with repairs for the malformed markup found in legacy descriptions. Used for content that was
 *   authored for the legacy site (backfill B9) or that still contains raw HTML.
 */
export type MarkdownProfile = 'full' | 'lite' | 'legacyHtml';

/** Where an `@handle` mention points to. Returned by {@link RenderOptions.resolveMention}. */
export interface MentionTarget {
  /** Site-relative path (`/profile/ana`) or absolute `https:` URL. Anything else is ignored. */
  href: string;
  /** Text of the link (default: `@handle` as written). */
  label?: string;
}

/** Replacement for an image source. Returned by {@link RenderOptions.resolveImage}. */
export interface ImageTarget {
  /** Site-relative path or absolute `https:` URL (e.g. the R2 copy of the image). */
  src: string;
  /** Intrinsic width in CSS pixels (reserves space: no layout shift). */
  width?: number;
  /** Intrinsic height in CSS pixels. */
  height?: number;
}

export interface RenderOptions {
  /** Rendering profile (default `full`). */
  profile?: MarkdownProfile;
  /**
   * Resolves `@handle` mentions (called once per distinct lower-cased handle). Return `null` or
   * `undefined` to leave the mention as plain text. Use {@link extractMentions} first to load
   * every handle in one query and pass a map-backed resolver.
   */
  resolveMention?: (handle: string) => MentionTarget | null | undefined;
  /**
   * Rewrites image sources (e.g. to the R2 replica with known dimensions). Called with the
   * sanitised source URL. Return `null` or `undefined` to keep the original.
   */
  resolveImage?: (src: string) => ImageTarget | null | undefined;
  /**
   * Prefix of the heading ids (default `md-`). Use a distinct prefix when several documents share
   * a page (for example `cl-{versionId}-` for changelogs). Must match `/^[a-z][a-z0-9-]*$/`.
   */
  idPrefix?: string;
  /**
   * Levels added to every heading (default 1: a Markdown `#` renders as `<h2>` because the page
   * owns the `<h1>`). Clamped to `h6`. Ignored by `lite`, which has no headings.
   */
  headingOffset?: number;
  /**
   * Hosts treated as internal: their links get no `rel="ugc nofollow noopener"`. Compared with
   * the port a link names (other than the scheme's default): list `localhost:3000` to treat a dev
   * origin as internal; `https://sotf-mods.com:8443/` is external with the default list.
   * Default: `sotf-mods.com` and `www.sotf-mods.com`.
   */
  internalHosts?: readonly string[];
}

export interface RenderedHeading {
  /** Rendered level (after the heading offset): 2 for `<h2>` and so on. */
  level: number;
  /** Element id (already prefixed), usable as `#id` fragment. */
  id: string;
  /** Plain text of the heading. */
  text: string;
}

export interface RenderedLink {
  /** Sanitised `href` as rendered. */
  href: string;
  /** Plain text of the link. */
  text: string;
  /** True for links that leave the site (they carry `rel="ugc nofollow noopener"`). */
  external: boolean;
  /** What produced the link. */
  kind: 'link' | 'mention' | 'youtube';
}

export interface RenderedImage {
  /** Sanitised source as written by the author (before {@link RenderOptions.resolveImage}). */
  src: string;
  /** Source actually rendered. */
  renderedSrc: string;
  alt: string;
}

export interface RenderResult {
  /** Sanitised HTML fragment, safe to inject as-is. */
  html: string;
  /** Plain text (block elements separated by blank lines; spoilers, images and UI chrome omitted). */
  text: string;
  headings: RenderedHeading[];
  links: RenderedLink[];
  images: RenderedImage[];
  /** Distinct lower-cased `@handles` found in the text, in order of appearance. */
  mentions: string[];
  /** {@link RENDER_VERSION} used to produce this result (store it next to the HTML). */
  renderVersion: number;
}

/** Visible labels baked into the HTML, replaced per locale with {@link localizeHtml}. */
export interface MarkdownLabels {
  'alert-note': string;
  'alert-tip': string;
  'alert-important': string;
  'alert-warning': string;
  'alert-caution': string;
  /** Accessible name of a hidden spoiler (`aria-label` of `span.md-spoiler`). */
  spoiler: string;
}

export type MarkdownLabelKey = keyof MarkdownLabels;
