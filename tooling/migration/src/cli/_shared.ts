/** Shared helpers of the migration-tools command-line entry points. */
import { resolve } from 'node:path';
import { cliLogger, color, flagString, type ParsedArgs, parseArgs, runCli } from '@sotf/db/cli/_shared';

export { cliLogger, color, flagString, type ParsedArgs, parseArgs, runCli };

/** Integer flag (`--batch-size 2000`); throws on anything that is not a positive integer. */
export function flagInt(args: ParsedArgs, name: string, fallback: number, min = 1): number {
  const raw = flagString(args, name);
  if (raw === undefined) {
    if (args.flags.has(name)) throw new Error(`--${name} needs a value`);
    return fallback;
  }
  const value = Number(raw);
  if (!Number.isInteger(value) || value < min) throw new Error(`--${name} must be an integer ≥ ${min}`);
  return value;
}

/** Prints usage and exits 0 when --help is present. */
export function helpRequested(args: ParsedArgs, usage: string): boolean {
  if (!args.flags.has('help') && !args.positional.includes('help')) return false;
  process.stdout.write(`${usage.trim()}\n`);
  return true;
}

/**
 * Resolves a path typed by the user. pnpm runs package scripts inside the package directory, so
 * relative paths are resolved against the directory `pnpm` was invoked from (`INIT_CWD`).
 */
export function userPath(path: string): string {
  return resolve(process.env.INIT_CWD ?? process.cwd(), path);
}
