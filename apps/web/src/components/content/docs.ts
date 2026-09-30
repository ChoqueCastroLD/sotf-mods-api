/**
 * Localized documents of the content pages: one Markdown file per locale, English authoritative.
 *
 * `docCollection(modules, schema)` wraps an eager `import.meta.glob` of `<locale>.md` files (the
 * glob must be written literally in the collection's own module, e.g. `content/legal/index.ts`)
 * and returns, for a request locale, the rendered document in that language or — when it has not
 * been translated yet — the English one, flagged so the page can say so, mark the text with
 * `lang="en"`, point its canonical to English and leave the hreflang cluster out (PLAN §4.5).
 *
 * Rendering happens once per file and process (the pages are edge- and LRU-cached anyway).
 */
import { DEFAULT_LOCALE, isLocale, type Locale } from '@sotf/i18n';
import type { MarkdownInstance } from 'astro';
import type { z } from 'zod';
import { type DocHeading, localizeDocHtml, renderDoc } from './markdown.ts';

export interface LocalizedDoc<F> {
  frontmatter: F;
  /** HTML with internal links localized for the request locale. */
  html: string;
  headings: DocHeading[];
  text: string;
  /** Language of the text (the request locale, or English as fallback). */
  locale: Locale;
  /** `false` when English is shown in place of a missing translation. */
  translated: boolean;
}

export interface DocCollection<F> {
  /** Document for `locale` (falls back to English); `null` only if English is missing too. */
  get(locale: Locale, key?: string): LocalizedDoc<F> | null;
  /** Locales with their own translation of `key`. */
  locales(key?: string): Locale[];
  /** Keys (sub-directories) of the collection, or `['']` for a flat one. */
  keys(): string[];
}

type Module = MarkdownInstance<Record<string, unknown>>;

interface Entry<F> {
  frontmatter: F;
  html: string;
  headings: DocHeading[];
  text: string;
}

/**
 * @param modules eager glob result; file names are `<locale>.md`, optionally inside one directory
 *   level that becomes the document key (`legal/privacy/es.md` → key `privacy`).
 * @param anchorsOf stable section anchors of a document (default: `frontmatter.anchors`).
 */
export function docCollection<S extends z.ZodType<{ anchors?: readonly string[] | undefined }>>(
  modules: Readonly<Record<string, Module>>,
  schema: S,
): DocCollection<z.infer<S>> {
  type F = z.infer<S>;
  const files = new Map<string, Module>();
  for (const [path, module] of Object.entries(modules)) {
    const parts = path.split('/');
    const file = parts.pop() ?? '';
    const locale = file.replace(/\.md$/, '');
    if (!isLocale(locale)) throw new Error(`${path}: file name must be a locale code`);
    const key = parts.at(-1) === '.' || parts.length === 1 ? '' : (parts.at(-1) ?? '');
    files.set(`${key}|${locale}`, module);
  }
  const rendered = new Map<string, Entry<F>>();

  function entry(key: string, locale: Locale): Entry<F> | null {
    const id = `${key}|${locale}`;
    const cached = rendered.get(id);
    if (cached) return cached;
    const module = files.get(id);
    if (!module) return null;
    const parsed = schema.safeParse(module.frontmatter);
    if (!parsed.success) throw new Error(`${module.file}: invalid front matter: ${parsed.error.message}`);
    const frontmatter = parsed.data as F;
    const doc = renderDoc(module.rawContent(), { anchors: frontmatter.anchors, source: module.file });
    const value: Entry<F> = { frontmatter, html: doc.html, headings: doc.headings, text: doc.text };
    rendered.set(id, value);
    return value;
  }

  return {
    get(locale, key = '') {
      const own = entry(key, locale);
      const chosen = own ?? entry(key, DEFAULT_LOCALE);
      if (!chosen) return null;
      const textLocale = own ? locale : DEFAULT_LOCALE;
      return {
        frontmatter: chosen.frontmatter,
        html: localizeDocHtml(chosen.html, locale),
        headings: chosen.headings,
        text: chosen.text,
        locale: textLocale,
        translated: own !== null,
      };
    },
    locales(key = '') {
      const out: Locale[] = [];
      for (const id of files.keys()) {
        const [fileKey, locale] = id.split('|');
        if (fileKey === key && locale && isLocale(locale)) out.push(locale);
      }
      return out;
    },
    keys() {
      return [...new Set([...files.keys()].map((id) => id.split('|')[0] ?? ''))];
    },
  };
}
