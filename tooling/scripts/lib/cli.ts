import { spawnSync } from 'node:child_process';
import { REPO_ROOT } from './repo.ts';

const useColor = process.stdout.isTTY === true && process.env.NO_COLOR === undefined;
const paint = (code: number) => (text: string) => (useColor ? `\u001b[${code}m${text}\u001b[0m` : text);

export const color = {
  red: paint(31),
  green: paint(32),
  yellow: paint(33),
  cyan: paint(36),
  dim: paint(2),
  bold: paint(1),
};

/** Prints an error line to stderr and exits with the given code. */
export function fail(message: string, code = 1): never {
  process.stderr.write(`${color.red('error')} ${message}\n`);
  process.exit(code);
}

export interface RunOptions {
  cwd?: string;
  env?: NodeJS.ProcessEnv;
  /** Do not throw/exit on a non-zero status; return it instead. */
  allowFailure?: boolean;
}

/** Runs a command with inherited stdio and returns its exit status. */
export function run(command: string, args: readonly string[], options: RunOptions = {}): number {
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? REPO_ROOT,
    env: { ...process.env, ...options.env },
    stdio: 'inherit',
  });
  if (result.error) {
    if (options.allowFailure) return 127;
    fail(`could not run ${command}: ${result.error.message}`);
  }
  const status = result.status ?? 1;
  if (status !== 0 && !options.allowFailure) {
    fail(`${[command, ...args].join(' ')} exited with ${status}`, status);
  }
  return status;
}

/** Tiny argv parser: `--flag`, `--key value`, `--key=value` and positionals. */
export function parseArgs(argv: readonly string[]): {
  flags: Map<string, string | true>;
  positionals: string[];
} {
  const flags = new Map<string, string | true>();
  const positionals: string[] = [];
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i] ?? '';
    if (arg === '--') {
      positionals.push(...argv.slice(i + 1));
      break;
    }
    if (arg.startsWith('--')) {
      const eq = arg.indexOf('=');
      if (eq !== -1) {
        flags.set(arg.slice(2, eq), arg.slice(eq + 1));
      } else {
        const next = argv[i + 1];
        if (next !== undefined && !next.startsWith('-') && VALUE_FLAGS.has(arg.slice(2))) {
          flags.set(arg.slice(2), next);
          i++;
        } else {
          flags.set(arg.slice(2), true);
        }
      }
    } else {
      positionals.push(arg);
    }
  }
  return { flags, positionals };
}

/** Flags that take a separate value argument (`--base main`). */
const VALUE_FLAGS = new Set(['base', 'root', 'plan', 'wp', 'out']);

export function flagString(flags: Map<string, string | true>, name: string): string | undefined {
  const value = flags.get(name);
  return typeof value === 'string' ? value : undefined;
}
