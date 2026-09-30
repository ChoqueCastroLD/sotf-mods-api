/**
 * Reads the JSON island of the mod page (`components/mod/PageData.astro`).
 */
import { MOD_PAGE_DATA_ID, type ModPageData } from './types.ts';

let cached: ModPageData | null | undefined;

export function pageData(doc: Document = document): ModPageData | null {
  if (cached !== undefined) return cached;
  const element = doc.getElementById(MOD_PAGE_DATA_ID);
  try {
    cached = element?.textContent ? (JSON.parse(element.textContent) as ModPageData) : null;
  } catch {
    cached = null;
  }
  return cached;
}

/** Replaces `{name}` placeholders of a server-localised template. */
export function fill(template: string, values: Readonly<Record<string, string | number>>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    Object.hasOwn(values, key) ? String(values[key]) : match,
  );
}

/** Plural form of a server-rendered template set (`{ one: '{n} follower', other: '{n} followers' }`). */
export function plural(templates: Readonly<Record<string, string>>, count: number, lang: string): string {
  const category = new Intl.PluralRules(lang).select(count);
  const template = templates[category] ?? templates.other ?? '{n}';
  return template.replace('{n}', new Intl.NumberFormat(lang).format(count));
}
