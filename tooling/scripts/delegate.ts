/**
 * Root task delegation (PLAN §12.1 "Scripts raíz").
 *
 * The root package.json exposes every task of §12.1; tasks implemented by a later work package
 * are delegated to the package that owns them, which must define a script with the *same name*
 * (e.g. `pnpm db:migrate` runs the `db:migrate` script of packages/db).
 *
 *   node tooling/scripts/delegate.ts [--optional] <task> [args...]
 *
 * When the owning package or its script does not exist yet the task fails with a clear message.
 * Optional tasks (`--optional`, or $SOTF_OPTIONAL_TASKS=1, set by CI and ci:local so the pipeline
 * keeps its full shape while the plan is being built) are skipped only while the owning *package*
 * does not exist: once its package.json has landed, a missing script (renamed or deleted) fails
 * instead of turning the check into a silent skip.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { color, fail, run } from './lib/cli.ts';
import { REPO_ROOT } from './lib/repo.ts';

export interface DelegatedTask {
  /** Workspace directory (relative to the repo root) of the package that implements the task. */
  dir: string;
  /** Work package that delivers the implementation (PLAN §12.3). */
  owner: string;
  description: string;
}

export const TASKS: Readonly<Record<string, DelegatedTask>> = {
  'db:migrate': { dir: 'packages/db', owner: 'WP-10', description: 'apply SQL migrations (idempotent)' },
  'db:guard': { dir: 'packages/db', owner: 'WP-10', description: 'legacy ⊆ v2 superset guard (PLAN §6.2)' },
  'db:baseline': { dir: 'packages/db', owner: 'WP-10', description: 'mark/apply the legacy baseline' },
  'db:seed:dev': { dir: 'tooling/migration', owner: 'WP-14', description: 'seed the dev database' },
  'db:reset:dev': { dir: 'tooling/migration', owner: 'WP-14', description: 'drop and recreate the dev database' },
  'db:backfill': { dir: 'tooling/migration', owner: 'WP-14', description: 'run backfills (PLAN §6.9)' },
  'db:invariants': { dir: 'tooling/migration', owner: 'WP-14', description: 'data invariants (PLAN §6.11)' },
  'db:verify-snapshot': { dir: 'tooling/migration', owner: 'WP-14', description: 'before/after data snapshot' },
  'db:revert-fix': { dir: 'tooling/migration', owner: 'WP-14', description: 'revert an audited data fix' },
  'admin:grant': { dir: 'tooling/migration', owner: 'WP-14', description: 'grant a role to a user' },
  'db:profile': { dir: 'tooling/migration', owner: 'WP-14', description: 'profile a database copy (PLAN §6.14)' },
  'db:anonymize': { dir: 'tooling/migration', owner: 'WP-14', description: 'anonymise a local database copy' },
  'db:restore:prod-copy': { dir: 'tooling/migration', owner: 'WP-14', description: 'restore a prod dump locally' },
  'i18n:check': { dir: 'packages/i18n', owner: 'WP-13', description: 'every key present in the 13 locales' },
  'i18n:pseudo': { dir: 'packages/i18n', owner: 'WP-13', description: 'generate the pseudo-locale' },
  e2e: { dir: 'e2e', owner: 'WP-91', description: 'Playwright end-to-end suites' },
  'contract:legacy': {
    dir: 'tooling/legacy-contract',
    owner: 'WP-24',
    description: 'legacy API contract (fixtures, .NET, RedManager)',
  },
  lhci: { dir: 'tooling/lhci', owner: 'WP-92', description: 'Lighthouse CI budgets' },
  load: { dir: 'tooling/load', owner: 'WP-92', description: 'load tests (autocannon)' },
};

/**
 * `missing` tells why a task cannot run: `package` (the owner has not landed yet; skippable when
 * optional), `script` (the owner landed without the script; always an error) or `task` (unknown).
 */
export type Resolution =
  | { ok: true; dir: string }
  | { ok: false; reason: string; missing: 'task' | 'package' | 'script' };

/** Checks that the owning package exists and defines the script. */
export function resolveTask(task: string, root: string = REPO_ROOT): Resolution {
  const spec = TASKS[task];
  if (!spec) return { ok: false, reason: `unknown task "${task}"`, missing: 'task' };
  const manifest = join(root, spec.dir, 'package.json');
  if (!existsSync(manifest)) {
    return {
      ok: false,
      reason: `${spec.dir}/package.json does not exist yet (delivered by ${spec.owner})`,
      missing: 'package',
    };
  }
  const pkg = JSON.parse(readFileSync(manifest, 'utf8')) as { scripts?: Record<string, string> };
  if (!pkg.scripts?.[task]) {
    return {
      ok: false,
      reason: `${spec.dir}/package.json has no "${task}" script (delivered by ${spec.owner})`,
      missing: 'script',
    };
  }
  return { ok: true, dir: spec.dir };
}

/** Optional tasks are skipped only while their owning package has not landed. */
export function isSkippable(resolution: Resolution, optional: boolean): boolean {
  return optional && !resolution.ok && resolution.missing === 'package';
}

function main(): void {
  const argv = process.argv.slice(2);
  let optional = process.env.SOTF_OPTIONAL_TASKS === '1';
  if (argv[0] === '--optional') {
    optional = true;
    argv.shift();
  }
  const [task, ...args] = argv;
  if (!task) fail(`usage: delegate.ts [--optional] <task> [args...]\ntasks: ${Object.keys(TASKS).join(', ')}`);
  const resolution = resolveTask(task);
  if (!resolution.ok) {
    if (isSkippable(resolution, optional)) {
      process.stdout.write(`${color.yellow('skip')} ${task}: ${resolution.reason}\n`);
      return;
    }
    fail(`${task}: ${resolution.reason}`);
  }
  const status = run('pnpm', ['--dir', resolution.dir, 'run', task, ...args], { allowFailure: true });
  process.exit(status);
}

if (import.meta.main) main();
