/**
 * Fails when the current branch touches paths that its work package does not own
 * (PLAN §12.1 "Propiedad de rutas").
 *
 *   pnpm check:ownership WP-31            # explicit WP id
 *   pnpm check:ownership                  # WP id from the branch name (wp/WP-31) or $SOTF_WP
 *   pnpm check:ownership WP-31 --base main
 *   pnpm check:ownership --optional       # skip (exit 0) when no WP id can be determined
 *
 * "Changed" means: commits since the merge-base with the base ref (default `main`, then
 * `origin/main`, or $SOTF_BASE_REF), plus staged, unstaged and untracked (non-ignored) files.
 * Renames count for both the old and the new path.
 */
import { readFileSync } from 'node:fs';
import { color, fail, flagString, parseArgs } from './lib/cli.ts';
import { checkPath, type OwnershipFile } from './lib/ownership.ts';
import { currentBranch, git, repoPath, resolveBaseRef } from './lib/repo.ts';

const WP_ID = /^WP-[0-9A-Z]{2}$/;

/** WP id from an explicit argument, $SOTF_WP or a `wp/WP-XX` branch. */
export function detectWpId(explicit: string | undefined, branch: string | null): string | null {
  const candidate = explicit ?? process.env.SOTF_WP ?? branch?.match(/(?:^|\/)(WP-[0-9A-Z]{2})$/)?.[1];
  return candidate && WP_ID.test(candidate) ? candidate : null;
}

/** Paths changed on this branch relative to `baseRef` (committed + working tree + untracked). */
export function changedPaths(baseRef: string, cwd?: string): string[] {
  const mergeBase = git(['merge-base', baseRef, 'HEAD'], cwd);
  const paths = new Set<string>();
  const nameStatus = git(['diff', '--name-status', '-M', '-z', mergeBase], cwd);
  const fields = nameStatus.split('\0').filter((f) => f.length > 0);
  for (let i = 0; i < fields.length; ) {
    const status = fields[i++] ?? '';
    const count = status.startsWith('R') || status.startsWith('C') ? 2 : 1;
    for (let k = 0; k < count; k++) {
      const path = fields[i++];
      if (path) paths.add(path);
    }
  }
  const untracked = git(['ls-files', '--others', '--exclude-standard', '-z'], cwd);
  for (const path of untracked.split('\0')) if (path) paths.add(path);
  return [...paths].sort();
}

export function loadOwnership(): OwnershipFile {
  return JSON.parse(readFileSync(repoPath('tooling/scripts/ownership.json'), 'utf8')) as OwnershipFile;
}

function main(): void {
  const { flags, positionals } = parseArgs(process.argv.slice(2));
  const optional = flags.has('optional');
  const wpId = detectWpId(positionals[0], currentBranch());
  if (!wpId) {
    const message =
      'no work package id: pass one (`pnpm check:ownership WP-31`), set $SOTF_WP or work on a `wp/WP-XX` branch';
    if (optional) {
      process.stdout.write(`${color.yellow('skip')} check:ownership: ${message}\n`);
      return;
    }
    fail(message);
  }
  const ownership = loadOwnership();
  if (!ownership.wps[wpId]) fail(`unknown work package ${wpId} (see tooling/scripts/ownership.json)`);
  const baseRef = resolveBaseRef(flagString(flags, 'base'));
  if (!baseRef) fail('no base ref found (tried --base, $SOTF_BASE_REF, main, origin/main)');

  const paths = changedPaths(baseRef);
  const violations = paths
    .map((path) => ({ path, verdict: checkPath(ownership, wpId, path) }))
    .filter((v) => !v.verdict.allowed);

  if (violations.length === 0) {
    process.stdout.write(
      `${color.green('ok')} check:ownership ${wpId}: ${paths.length} changed path(s) vs ${baseRef}, all owned\n`,
    );
    return;
  }
  process.stderr.write(
    `${color.red('error')} check:ownership ${wpId}: ${violations.length} path(s) outside the WP's routes (vs ${baseRef}):\n`,
  );
  for (const { path, verdict } of violations) {
    const owners = !verdict.allowed && verdict.ownedBy.length ? ` (owned by ${verdict.ownedBy.join(', ')})` : '';
    process.stderr.write(`  ${path}${color.dim(owners)}\n`);
  }
  process.stderr.write(
    `\nRevert those changes and record them in docs/backlog/${wpId}.md (one line each: what, where, why).\n`,
  );
  process.exit(1);
}

if (import.meta.main) main();
