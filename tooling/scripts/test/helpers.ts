import { execFileSync, spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const SCRIPTS_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/** Creates a temporary directory that is removed by the returned cleanup function. */
export function tempDir(prefix = 'sotf-scripts-'): { dir: string; cleanup: () => void } {
  const dir = mkdtempSync(join(tmpdir(), prefix));
  return { dir, cleanup: () => rmSync(dir, { recursive: true, force: true }) };
}

export function writeFiles(root: string, files: Record<string, string>): void {
  for (const [path, content] of Object.entries(files)) {
    const full = join(root, path);
    mkdirSync(dirname(full), { recursive: true });
    writeFileSync(full, content);
  }
}

/** Initialises a git repository with deterministic identity and one commit on `main`. */
export function initRepo(root: string, files: Record<string, string>): void {
  const git = (...args: string[]) => execFileSync('git', args, { cwd: root, stdio: 'pipe' });
  git('init', '--quiet', '--initial-branch=main');
  git('config', 'user.name', 'Test');
  git('config', 'user.email', 'test@example.invalid');
  git('config', 'commit.gpgsign', 'false');
  writeFiles(root, files);
  git('add', '-A');
  git('commit', '--quiet', '-m', 'initial');
}

export function gitIn(root: string, ...args: string[]): string {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: 'pipe' });
}

/** Runs one of the CLI scripts with node and captures its result. */
export function runScript(
  script: string,
  args: string[],
  options: { cwd?: string; env?: NodeJS.ProcessEnv } = {},
): { status: number; stdout: string; stderr: string } {
  const result = spawnSync(process.execPath, [join(SCRIPTS_DIR, script), ...args], {
    cwd: options.cwd ?? SCRIPTS_DIR,
    env: { ...process.env, NO_COLOR: '1', ...options.env },
    encoding: 'utf8',
  });
  return { status: result.status ?? 1, stdout: result.stdout, stderr: result.stderr };
}
