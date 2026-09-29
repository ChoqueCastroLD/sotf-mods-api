import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Absolute path of the repository (worktree) root. */
export const REPO_ROOT: string = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');

export function repoPath(...parts: string[]): string {
  return join(REPO_ROOT, ...parts);
}

/** Runs git and returns trimmed stdout; throws with stderr on failure. */
export function git(args: readonly string[], cwd: string = REPO_ROOT): string {
  return execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trimEnd();
}

/** Runs git and returns stdout, or `null` when git exits non-zero. */
export function gitMaybe(args: readonly string[], cwd: string = REPO_ROOT): string | null {
  const result = spawnSync('git', args, { cwd, encoding: 'utf8' });
  return result.status === 0 ? result.stdout.trimEnd() : null;
}

export function isGitRepo(cwd: string): boolean {
  return gitMaybe(['rev-parse', '--is-inside-work-tree'], cwd) === 'true';
}

/** Current branch name, or `null` on a detached HEAD / outside git. */
export function currentBranch(cwd: string = REPO_ROOT): string | null {
  const name = gitMaybe(['symbolic-ref', '--quiet', '--short', 'HEAD'], cwd);
  return name && name.length > 0 ? name : null;
}

/** Resolves the base ref used for "what changed on this branch" (main, then origin/main). */
export function resolveBaseRef(explicit: string | undefined, cwd: string = REPO_ROOT): string | null {
  const candidates = [explicit, process.env.SOTF_BASE_REF, 'main', 'origin/main'].filter(
    (c): c is string => typeof c === 'string' && c.length > 0,
  );
  for (const ref of candidates) {
    if (gitMaybe(['rev-parse', '--verify', '--quiet', `${ref}^{commit}`], cwd) !== null) return ref;
  }
  return null;
}

export function fileExists(...parts: string[]): boolean {
  return existsSync(join(REPO_ROOT, ...parts));
}
