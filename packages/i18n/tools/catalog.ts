/**
 * Loads the message catalog: `messages/<namespace>/<locale>.json` (PLAN §7.11, §12.1).
 *
 * File format: a flat JSON object `{ "<key>": "<ICU message>" }`, UTF-8, strings only. Keys are
 * `snake_case` and start with the namespace prefix (`emails-auth` → `emails_auth_…`) so that
 * namespaces owned by different work packages can never collide once merged.
 *
 * Loading never throws on bad content: every problem becomes a {@link Diagnostic}, so `i18n:check`
 * can report all of them in one run.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { LOCALES, type Locale } from '../src/locales.ts';

export interface Diagnostic {
  level: 'error' | 'warning';
  /** Path relative to the package root. */
  file: string;
  key?: string;
  message: string;
}

export interface NamespaceFile {
  locale: Locale;
  /** Path relative to the package root. */
  file: string;
  /** Entries in file order (duplicates removed, first occurrence kept). */
  messages: Map<string, string>;
}

export interface Namespace {
  name: string;
  /** Key prefix without the trailing underscore (`emails_auth`). */
  prefix: string;
  files: Map<Locale, NamespaceFile>;
}

export interface Catalog {
  root: string;
  namespaces: Namespace[];
  diagnostics: Diagnostic[];
}

export const NAMESPACE_NAME = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
export const MAX_KEY_LENGTH = 80;

/** `emails-auth` → `emails_auth`. */
export function namespacePrefix(namespace: string): string {
  return namespace.replaceAll('-', '_');
}

/** Regular expression every key of a namespace must match. */
export function keyPattern(namespace: string): RegExp {
  return new RegExp(`^${namespacePrefix(namespace)}_[a-z0-9]+(?:_[a-z0-9]+)*$`);
}

export interface FlatJson {
  entries: Array<[string, string]>;
  duplicates: string[];
}

/**
 * Parses a flat `{ string: string }` JSON object and reports duplicate keys (which `JSON.parse`
 * silently collapses, e.g. after a bad merge). Throws `SyntaxError` on anything else.
 */
export function parseFlatJson(source: string): FlatJson {
  // Tolerate a UTF-8 byte order mark added by some Windows editors.
  const text = source.charCodeAt(0) === 0xfeff ? source.slice(1) : source;
  const parsed: unknown = JSON.parse(text);
  if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new SyntaxError('The file must contain a JSON object');
  }
  let pos = 0;
  const skip = () => {
    while (pos < text.length && /\s/.test(text[pos] ?? '')) pos += 1;
  };
  const readString = (what: string): string => {
    skip();
    if (text[pos] !== '"') throw new SyntaxError(`Every ${what} must be a string (offset ${pos})`);
    const start = pos;
    pos += 1;
    while (pos < text.length && text[pos] !== '"') pos += text[pos] === '\\' ? 2 : 1;
    pos += 1;
    return JSON.parse(text.slice(start, pos)) as string;
  };
  const entries: Array<[string, string]> = [];
  const seen = new Set<string>();
  const duplicates: string[] = [];
  skip();
  pos += 1; // "{" (guaranteed by JSON.parse above)
  skip();
  if (text[pos] === '}') return { entries, duplicates };
  for (;;) {
    const key = readString('key');
    skip();
    pos += 1; // ":"
    const value = readString('value');
    if (seen.has(key)) duplicates.push(key);
    else {
      seen.add(key);
      entries.push([key, value]);
    }
    skip();
    if (text[pos] === ',') {
      pos += 1;
      continue;
    }
    break;
  }
  return { entries, duplicates };
}

function isDirectory(path: string): boolean {
  try {
    return statSync(path).isDirectory();
  } catch {
    return false;
  }
}

/** Reads every namespace under `<root>/messages`, sorted by name. */
export function loadCatalog(root: string): Catalog {
  const diagnostics: Diagnostic[] = [];
  const namespaces: Namespace[] = [];
  const messagesDir = join(root, 'messages');
  const rel = (path: string) => relative(root, path).replaceAll('\\', '/');
  if (!existsSync(messagesDir)) {
    diagnostics.push({ level: 'error', file: 'messages', message: 'The messages directory does not exist' });
    return { root, namespaces, diagnostics };
  }
  const localeSet: ReadonlySet<string> = new Set(LOCALES);
  for (const entry of readdirSync(messagesDir).sort()) {
    const dir = join(messagesDir, entry);
    if (!isDirectory(dir)) {
      if (entry !== 'README.md') {
        diagnostics.push({
          level: 'error',
          file: rel(dir),
          message: 'Only namespace directories may live in messages/',
        });
      }
      continue;
    }
    if (!NAMESPACE_NAME.test(entry)) {
      diagnostics.push({
        level: 'error',
        file: rel(dir),
        message: 'Namespace names are lowercase kebab-case (e.g. "emails-auth")',
      });
      continue;
    }
    const namespace: Namespace = { name: entry, prefix: namespacePrefix(entry), files: new Map() };
    for (const fileName of readdirSync(dir).sort()) {
      const path = join(dir, fileName);
      const locale = fileName.endsWith('.json') ? fileName.slice(0, -'.json'.length) : '';
      if (!localeSet.has(locale)) {
        diagnostics.push({
          level: 'error',
          file: rel(path),
          message: `Unexpected file; a namespace holds exactly one <locale>.json per locale (${LOCALES.join(', ')})`,
        });
        continue;
      }
      const file: NamespaceFile = { locale: locale as Locale, file: rel(path), messages: new Map() };
      try {
        const text = readFileSync(path, 'utf8');
        const { entries, duplicates } = parseFlatJson(text);
        for (const key of duplicates) {
          diagnostics.push({ level: 'error', file: file.file, key, message: 'Duplicate key' });
        }
        file.messages = new Map(entries);
      } catch (error) {
        diagnostics.push({
          level: 'error',
          file: file.file,
          message: `Invalid JSON: ${error instanceof Error ? error.message : String(error)}`,
        });
      }
      namespace.files.set(file.locale, file);
    }
    for (const locale of LOCALES) {
      if (!namespace.files.has(locale)) {
        diagnostics.push({ level: 'error', file: `${rel(dir)}/${locale}.json`, message: 'Missing locale file' });
      }
    }
    namespaces.push(namespace);
  }
  return { root, namespaces, diagnostics };
}
