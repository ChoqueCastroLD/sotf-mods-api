/**
 * Stored text of publications (PLAN §6.8 "Texto"): v2 keeps the Markdown source in `*Md`, the
 * sanitised HTML in `*Html` (with `renderVersion`) and writes an HTML-escaped copy into the legacy
 * column (`description`, `changelog`), because the legacy frontend injects it with `innerHTML`.
 *
 * Rendering profile of descriptions: `full` (raw HTML shown as text). A mod that was authored on
 * the legacy site keeps rendering its raw HTML with the strict `legacyHtml` allowlist when its
 * author edits the description, so old layouts do not break (WP-15 backlog; the persisted profile
 * column is in docs/backlog/WP-40.md).
 */
import {
  escapeForLegacy,
  hasRawHtml,
  type ImageTarget,
  type MarkdownProfile,
  type RenderResult,
  renderMarkdown,
} from '@sotf/markdown';

export { hasRawHtml };

export interface RenderedText {
  html: string;
  renderVersion: number;
  profile: MarkdownProfile;
  images: RenderResult['images'];
}

export interface DescriptionOptions {
  /** The mod was authored on the legacy site (its raw HTML keeps working). */
  legacy?: boolean;
  resolveImage?: (src: string) => ImageTarget | null | undefined;
}

/** Profile used for a description. */
export function descriptionProfile(md: string, legacy: boolean): MarkdownProfile {
  return legacy && hasRawHtml(md) ? 'legacyHtml' : 'full';
}

export function renderDescription(md: string, options: DescriptionOptions = {}): RenderedText {
  const profile = descriptionProfile(md, options.legacy === true);
  const result = renderMarkdown(md, {
    profile,
    ...(options.resolveImage ? { resolveImage: options.resolveImage } : {}),
  });
  return { html: result.html, renderVersion: result.renderVersion, profile, images: result.images };
}

/** Changelog HTML (heading ids prefixed per version so several changelogs can share a page). */
export function renderChangelog(md: string, versionKey: string | number): RenderedText {
  const result = renderMarkdown(md, { profile: 'full', idPrefix: `cl-${String(versionKey).toLowerCase()}-` });
  return { html: result.html, renderVersion: result.renderVersion, profile: 'full', images: result.images };
}

/** The legacy column copy (`&`, `<`, `>`, `"` and `'` escaped). */
export function legacyText(md: string): string {
  return escapeForLegacy(md);
}

/** Default changelog of a first release (legacy wrote the same literal). */
export const FIRST_RELEASE_CHANGELOG = 'First release';
