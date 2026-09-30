import { matchAny, matchGlob, normalizePath, staticPrefix } from './glob.ts';

/** One work package's path ownership (PLAN §12.1 "Propiedad de rutas"). */
export interface WpOwnership {
  title: string;
  wave: string;
  include: string[];
  exclude: string[];
  /** Stubs this WP creates whose ownership passes to another WP (path -> WP id). */
  stubs?: Record<string, string>;
}

export interface OwnershipFile {
  $comment: string;
  /** Paths any WP may touch (generated files, the lockfile). `{wp}` is replaced by the WP id. */
  shared: string[];
  wps: Record<string, WpOwnership>;
}

/**
 * Paths every WP may change regardless of ownership (PLAN §2.6, §12.1).
 *
 * The Drizzle table files of `packages/db/src/schema/{legacy,v2}` are shared because Drizzle
 * cannot add columns to a table declared in another file: a WP whose migration adds a column to
 * an existing table must declare it next to the table (PLAN §12.1 puts new *tables* in
 * `schema/ext/<wp-id>.ts`). The migration linter, `db:guard` and the Drizzle ↔ catalog test keep
 * those edits additive (wave-1 backlog, WP-10).
 */
export const SHARED_PATTERNS: readonly string[] = [
  'pnpm-lock.yaml',
  '**/*.gen.ts',
  '**/.generated/**',
  'docs/backlog/{wp}.md',
  'packages/db/src/schema/{legacy,v2}/*.ts',
];

export type Verdict =
  | { allowed: true; reason: 'owned' | 'shared' | 'manifest' }
  | { allowed: false; reason: 'excluded' | 'unowned'; ownedBy: string[] };

/** Decides whether `wpId` may modify `path`. */
export function checkPath(file: OwnershipFile, wpId: string, rawPath: string): Verdict {
  const path = normalizePath(rawPath);
  const wp = file.wps[wpId];
  if (!wp) throw new Error(`unknown work package ${wpId}`);
  const shared = file.shared.map((p) => p.replaceAll('{wp}', wpId));
  if (matchAny(path, shared)) return { allowed: true, reason: 'shared' };
  const owners = () => ownersOf(file, path).filter((id) => id !== wpId);
  if (matchAny(path, wp.include)) {
    if (matchAny(path, wp.exclude)) return { allowed: false, reason: 'excluded', ownedBy: owners() };
    return { allowed: true, reason: 'owned' };
  }
  // Dependency edits: a WP may edit the package.json of any package it owns files in (PLAN §12.1
  // "Ficheros compartidos": new dependencies are pinned in the package that uses them).
  if (path.endsWith('/package.json')) {
    const pkgDir = path.slice(0, -'package.json'.length);
    if (
      wp.include.some(
        (pattern) => staticPrefix(pattern).startsWith(pkgDir) || normalizePath(pattern).startsWith(pkgDir),
      )
    ) {
      return { allowed: true, reason: 'manifest' };
    }
  }
  return { allowed: false, reason: 'unowned', ownedBy: owners() };
}

/** Every WP whose include patterns cover `path` (and whose excludes do not). */
export function ownersOf(file: OwnershipFile, rawPath: string): string[] {
  const path = normalizePath(rawPath);
  return Object.entries(file.wps)
    .filter(([, wp]) => matchAny(path, wp.include) && !matchAny(path, wp.exclude))
    .map(([id]) => id);
}

export { matchGlob };
