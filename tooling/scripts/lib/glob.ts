/**
 * Minimal, dependency-free path glob matcher used by the repository tooling.
 *
 * Semantics (deliberately small and predictable):
 * - Paths and patterns are repository-relative and use `/` separators. A leading `/` is ignored.
 * - `**` matches zero or more whole path segments; `*` matches within one segment; `?` matches
 *   one character except `/`.
 * - `{a,b,c}` is brace expansion (nesting allowed). Spaces after commas are tolerated.
 * - A pattern ending in `/` matches the directory and everything below it (`dir/` == `dir/**`).
 * - Every other character is literal, including `[`, `]`, `(`, `)`, `$` and `.`, because the
 *   route files of this repo use them literally (`[slug].astro`, `$modId.tsx`).
 */

const GLOB_CHARS = /[*?{]/;

/** Normalises a repository-relative path or pattern (strips `./` and leading `/`). */
export function normalizePath(p: string): string {
  let out = p.trim().replaceAll('\\', '/');
  while (out.startsWith('./')) out = out.slice(2);
  while (out.startsWith('/')) out = out.slice(1);
  return out;
}

/** Expands `{a,b}` groups (recursively) into the list of plain alternatives. */
export function expandBraces(pattern: string): string[] {
  const open = pattern.indexOf('{');
  if (open === -1) return [pattern];
  const close = findMatchingBrace(pattern, open);
  if (close === -1) return [pattern];
  const head = pattern.slice(0, open);
  const tail = pattern.slice(close + 1);
  const options = splitTopLevel(pattern.slice(open + 1, close)).map((o) => o.trim());
  return options.flatMap((option) => expandBraces(`${head}${option}${tail}`));
}

function findMatchingBrace(s: string, open: number): number {
  let depth = 0;
  for (let i = open; i < s.length; i++) {
    if (s[i] === '{') depth++;
    else if (s[i] === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function splitTopLevel(s: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let current = '';
  for (const ch of s) {
    if (ch === '{') depth++;
    if (ch === '}') depth--;
    if (ch === ',' && depth === 0) {
      parts.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  parts.push(current);
  return parts;
}

function escapeRegex(ch: string): string {
  return /[.+^$()|[\]\\{}*?]/.test(ch) ? `\\${ch}` : ch;
}

/** Compiles one brace-free pattern into an anchored RegExp. */
function compileSingle(pattern: string): RegExp {
  let p = normalizePath(pattern);
  if (p.endsWith('/')) p = `${p}**`;
  const segments = p.split('/');
  let re = '^';
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i] ?? '';
    const last = i === segments.length - 1;
    if (seg === '**') {
      // `a/**` matches `a` itself and anything below; `**/b` matches `b` at any depth.
      if (last) {
        re = i === 0 ? '^.*' : `${re.replace(/\/$/, '')}(?:/.*)?`;
      } else {
        re += '(?:[^/]+/)*';
      }
      continue;
    }
    for (const ch of seg) {
      if (ch === '*') re += '[^/]*';
      else if (ch === '?') re += '[^/]';
      else re += escapeRegex(ch);
    }
    if (!last) re += '/';
  }
  return new RegExp(`${re}$`);
}

const cache = new Map<string, RegExp[]>();

/** Returns true when `path` matches `pattern` (see module docs for the syntax). */
export function matchGlob(path: string, pattern: string): boolean {
  let compiled = cache.get(pattern);
  if (!compiled) {
    compiled = expandBraces(normalizePath(pattern)).map(compileSingle);
    cache.set(pattern, compiled);
  }
  const target = normalizePath(path);
  return compiled.some((re) => re.test(target));
}

/** Returns true when `path` matches at least one of `patterns`. */
export function matchAny(path: string, patterns: readonly string[]): boolean {
  return patterns.some((pattern) => matchGlob(path, pattern));
}

/** True when the pattern contains glob syntax (`*`, `?` or braces). */
export function isGlob(pattern: string): boolean {
  return GLOB_CHARS.test(pattern);
}

/**
 * The literal directory prefix of a pattern: everything before the first segment that contains
 * glob syntax, always ending in `/` (or `''` for root-level globs).
 * `apps/web/src/{a,b}/**` -> `apps/web/src/`; `packages/ui/**` -> `packages/ui/`.
 */
export function staticPrefix(pattern: string): string {
  // The last segment is a file name (or `**`/empty) and never part of the directory prefix.
  const dirs = normalizePath(pattern).split('/').slice(0, -1);
  const literal: string[] = [];
  for (const seg of dirs) {
    if (isGlob(seg)) break;
    literal.push(seg);
  }
  return literal.length ? `${literal.join('/')}/` : '';
}
