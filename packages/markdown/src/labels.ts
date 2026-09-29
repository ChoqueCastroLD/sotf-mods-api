/**
 * Labels inside the rendered HTML.
 *
 * The HTML is rendered once, stored (`descriptionHtml`, `bodyHtml`…) and served to all 13 locales,
 * so it cannot contain translated text. The few labels it needs are emitted in English and swapped
 * per request with {@link localizeHtml}, using messages from `@sotf/i18n`:
 * - visible text (alert titles): `<span data-md-label="key">English</span>`;
 * - accessible names (spoilers): `<span class="md-spoiler" … aria-label="English" data-md-label="key">`.
 */
import type { MarkdownLabelKey, MarkdownLabels } from './types.ts';

export const DEFAULT_LABELS: Readonly<MarkdownLabels> = {
  'alert-note': 'Note',
  'alert-tip': 'Tip',
  'alert-important': 'Important',
  'alert-warning': 'Warning',
  'alert-caution': 'Caution',
  spoiler: 'Spoiler',
};

export const LABEL_KEYS = Object.keys(DEFAULT_LABELS) as MarkdownLabelKey[];

const LABEL_SPAN = /<span data-md-label="([a-z-]+)">[^<]*<\/span>/g;
/**
 * The serialiser writes the spoiler's properties in a fixed order (class, role, tabindex,
 * aria-expanded, aria-label, data-md-label). Anchored on `<span`, which text and attribute values
 * can never contain unescaped, so author text is never rewritten.
 */
const LABEL_ATTRIBUTE =
  /(<span class="md-spoiler" role="button" tabindex="0" aria-expanded="false" aria-label=")[^"<>]*(" data-md-label="([a-z-]+)">)/g;

function escapeText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttribute(value: string): string {
  return escapeText(value).replace(/"/g, '&quot;');
}

function isLabelKey(key: string): key is MarkdownLabelKey {
  return Object.hasOwn(DEFAULT_LABELS, key);
}

/**
 * Replaces the label placeholders of rendered HTML with localised text. Labels are HTML-escaped;
 * keys missing from `labels` keep their English default.
 */
export function localizeHtml(html: string, labels: Partial<MarkdownLabels>): string {
  if (!html.includes('data-md-label')) return html;
  return html
    .replace(LABEL_SPAN, (match, key: string) => {
      if (!isLabelKey(key)) return match;
      const label = labels[key] ?? DEFAULT_LABELS[key];
      return `<span data-md-label="${key}">${escapeText(label)}</span>`;
    })
    .replace(LABEL_ATTRIBUTE, (match, before: string, after: string, key: string) => {
      if (!isLabelKey(key)) return match;
      return `${before}${escapeAttribute(labels[key] ?? DEFAULT_LABELS[key])}${after}`;
    });
}
