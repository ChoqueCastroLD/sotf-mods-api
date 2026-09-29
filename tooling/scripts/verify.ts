/**
 * `pnpm verify`: the Definition-of-Done gate of every work package (PLAN §12.1).
 *
 *   lint (Biome) · check:forbidden · generated files fresh · ownership map in sync with the plan ·
 *   check:ownership <WP> · i18n:check · turbo typecheck + test + build
 *
 * Turbo tasks run for the packages affected since the merge-base with `main` (or
 * $SOTF_BASE_REF / --base); `--all`, or running on `main` itself, runs them for the whole workspace. Every step runs even if an
 * earlier one fails, and a summary is printed at the end.
 *
 *   node tooling/scripts/verify.ts [--all] [--base <ref>] [--wp <WP-ID>]
 */
import { performance } from 'node:perf_hooks';
import { color, flagString, parseArgs, run } from './lib/cli.ts';
import { currentBranch, resolveBaseRef } from './lib/repo.ts';

interface Step {
  name: string;
  command: string;
  args: string[];
  env?: NodeJS.ProcessEnv;
}

function main(): void {
  const { flags } = parseArgs(process.argv.slice(2));
  // On the integration branch itself "affected vs main" would select nothing: run everything.
  const all = flags.has('all') || currentBranch() === 'main';
  const baseRef = all ? null : resolveBaseRef(flagString(flags, 'base'));
  const wp = flagString(flags, 'wp');

  const turboArgs = ['exec', 'turbo', 'run', 'typecheck', 'test', 'build', '--output-logs=errors-only'];
  const turboEnv: NodeJS.ProcessEnv = {};
  if (baseRef) {
    turboArgs.push('--affected');
    turboEnv.TURBO_SCM_BASE = baseRef;
  }

  const steps: Step[] = [
    { name: 'lint (biome)', command: 'pnpm', args: ['exec', 'biome', 'check', '.'] },
    { name: 'check:forbidden', command: 'node', args: ['tooling/scripts/check-forbidden.ts'] },
    { name: 'generated registries fresh', command: 'node', args: ['tooling/scripts/gen.ts', '--check'] },
    { name: 'ownership map in sync', command: 'node', args: ['tooling/scripts/gen-ownership.ts', '--check'] },
    {
      name: 'check:ownership',
      command: 'node',
      args: [
        'tooling/scripts/check-ownership.ts',
        ...(wp ? [wp] : []),
        '--optional',
        ...(baseRef ? ['--base', baseRef] : []),
      ],
    },
    { name: 'i18n:check', command: 'node', args: ['tooling/scripts/delegate.ts', 'i18n:check'] },
    {
      name: `typecheck + test + build (${baseRef ? `affected vs ${baseRef}` : 'all'})`,
      command: 'pnpm',
      args: turboArgs,
      env: turboEnv,
    },
  ];

  const results: Array<{ name: string; ok: boolean; ms: number }> = [];
  for (const step of steps) {
    process.stdout.write(`\n${color.cyan('▶')} ${color.bold(step.name)}\n`);
    const start = performance.now();
    const status = run(step.command, step.args, { allowFailure: true, env: step.env });
    results.push({ name: step.name, ok: status === 0, ms: performance.now() - start });
  }

  process.stdout.write(`\n${color.bold('verify summary')}\n`);
  for (const r of results) {
    const mark = r.ok ? color.green('✔') : color.red('✘');
    process.stdout.write(`  ${mark} ${r.name} ${color.dim(`${(r.ms / 1000).toFixed(1)}s`)}\n`);
  }
  const failed = results.filter((r) => !r.ok);
  if (failed.length > 0) {
    process.stderr.write(`\n${color.red('verify failed')}: ${failed.map((f) => f.name).join(', ')}\n`);
    process.exit(1);
  }
  process.stdout.write(`\n${color.green('verify passed')}\n`);
}

if (import.meta.main) main();
