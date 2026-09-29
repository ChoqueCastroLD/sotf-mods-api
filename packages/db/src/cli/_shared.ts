/** Shared helpers of the @sotf/db command-line tools (output, arguments, connection). */
import pg from 'pg';
import { utcTypes } from '../client.ts';
import type { Logger } from '../types.ts';

const tty = process.stdout.isTTY;
const paint = (code: number) => (text: string) => (tty ? `\u001b[${code}m${text}\u001b[0m` : text);
export const color = { red: paint(31), green: paint(32), yellow: paint(33), dim: paint(2), bold: paint(1) };

export const cliLogger: Logger = {
  info: (message) => process.stdout.write(`${message}\n`),
  warn: (message) => process.stderr.write(`${color.yellow('!')} ${message}\n`),
  error: (message) => process.stderr.write(`${color.red('✘')} ${message}\n`),
};

export interface ParsedArgs {
  positional: string[];
  flags: Map<string, string | true>;
}

export function parseArgs(argv: readonly string[]): ParsedArgs {
  const positional: string[] = [];
  const flags = new Map<string, string | true>();
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i] as string;
    if (arg === '--') continue;
    if (arg.startsWith('--')) {
      const [key, inline] = arg.slice(2).split('=', 2) as [string, string | undefined];
      if (inline !== undefined) flags.set(key, inline);
      else if (argv[i + 1] !== undefined && !(argv[i + 1] as string).startsWith('--')) {
        flags.set(key, argv[i + 1] as string);
        i += 1;
      } else flags.set(key, true);
    } else positional.push(arg);
  }
  return { positional, flags };
}

export function flagString(args: ParsedArgs, name: string): string | undefined {
  const value = args.flags.get(name);
  return typeof value === 'string' ? value : undefined;
}

/** Opens one dedicated connection (the runner needs a session for its advisory lock). */
export async function connect(connectionString: string, applicationName: string): Promise<pg.Client> {
  const client = new pg.Client({
    connectionString,
    application_name: applicationName,
    options: '-c TimeZone=UTC',
    types: utcTypes,
  });
  await client.connect();
  return client;
}

/** Host and database of a connection string, without credentials (for logs and confirmations). */
export function describeTarget(connectionString: string): { host: string; database: string; local: boolean } {
  try {
    const url = new URL(connectionString);
    const host = url.hostname || 'localhost';
    return {
      host: url.port ? `${host}:${url.port}` : host,
      database: decodeURIComponent(url.pathname.replace(/^\//, '')) || '(default)',
      local: ['localhost', '127.0.0.1', '::1', '[::1]'].includes(host),
    };
  } catch {
    return { host: '(unparseable)', database: '(unknown)', local: false };
  }
}

/** Runs a CLI main function with uniform error output and exit codes. */
export function runCli(main: () => Promise<number | undefined>): void {
  main().then(
    (code) => process.exit(code ?? 0),
    (error: unknown) => {
      cliLogger.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    },
  );
}
