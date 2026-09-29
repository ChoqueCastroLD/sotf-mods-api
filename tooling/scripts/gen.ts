/**
 * `pnpm gen`: regenerates every generated file of the repository (PLAN §2.6).
 *
 * 1. Static registries (api modules, worker jobs, db schema barrel): gen-registries.ts.
 * 2. Package generators: the `gen` script of every workspace package that defines one
 *    (Paraglide messages in packages/i18n, the console route tree in apps/web, ...).
 *
 *   node tooling/scripts/gen.ts            # regenerate everything
 *   node tooling/scripts/gen.ts --check    # verify the static registries and every package that
 *                                          # exposes a `gen:check` script (e.g. packages/i18n)
 */
import { color, parseArgs, run } from './lib/cli.ts';

function main(): void {
  const { flags } = parseArgs(process.argv.slice(2));
  if (flags.has('check')) {
    run('node', ['tooling/scripts/gen-registries.ts', '--check']);
    run('pnpm', ['--recursive', '--if-present', 'run', 'gen:check']);
    return;
  }
  run('node', ['tooling/scripts/gen-registries.ts']);
  run('pnpm', ['--recursive', '--if-present', 'run', 'gen']);
  process.stdout.write(`${color.green('ok')} gen: generated files are up to date\n`);
}

if (import.meta.main) main();
