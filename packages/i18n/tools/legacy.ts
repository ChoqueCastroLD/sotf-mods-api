/**
 * Imports the 12 legacy translation files (`sotf-mods-frontend/src/translations/<code>.translations.ts`)
 * into `legacy/<locale>.json` (PLAN §7.11). They are a **glossary** for translators — the terms the
 * community already knows in each language — and are never loaded at runtime.
 *
 * Each legacy file is `export default { "key": "text", … }` (a plain object literal with comments).
 * It is evaluated as an expression in an empty VM context with a time limit: no module system, no
 * globals, no I/O. Files are renamed to v2 locale codes (`ch` → `zh`, `se` → `sv`).
 */
import { readFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { fromLegacyLangCookie, type Locale } from '../src/locales.ts';

/** Legacy file codes in the order the legacy `languages` list used. */
export const LEGACY_FILE_CODES = ['ch', 'de', 'en', 'es', 'fr', 'nl', 'pt', 'ru', 'pl', 'se', 'it', 'tr'] as const;

export interface LegacyFile {
  legacyCode: string;
  locale: Locale;
  entries: Array<[string, string]>;
}

/** Evaluates the object literal of a legacy `*.translations.ts` file. */
export function parseLegacyTranslations(source: string, fileName: string): Array<[string, string]> {
  const match = /export\s+default\s+(\{[\s\S]*\})\s*;?\s*$/.exec(source);
  if (!match?.[1]) throw new Error(`${fileName}: expected "export default { … }"`);
  const context = createContext(Object.create(null) as object, { codeGeneration: { strings: false, wasm: false } });
  const value: unknown = runInContext(`(${match[1]})`, context, { timeout: 1000, filename: fileName });
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`${fileName}: the default export is not an object`);
  }
  const entries: Array<[string, string]> = [];
  for (const [key, text] of Object.entries(value)) {
    if (typeof text !== 'string') throw new Error(`${fileName}: "${key}" is not a string`);
    entries.push([key, text]);
  }
  return entries;
}

export function readLegacyFile(path: string, legacyCode: string): LegacyFile {
  const locale = fromLegacyLangCookie(legacyCode);
  if (!locale) throw new Error(`Unknown legacy language code "${legacyCode}"`);
  const entries = parseLegacyTranslations(readFileSync(path, 'utf8'), `${legacyCode}.translations.ts`);
  return { legacyCode, locale, entries };
}

/** Serializes a glossary file: key order of the legacy source (grouped by legacy page). */
export function serializeLegacy(entries: ReadonlyArray<[string, string]>): string {
  return `${JSON.stringify(Object.fromEntries(entries), null, 2)}\n`;
}
