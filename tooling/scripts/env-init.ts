/**
 * `pnpm env:init`: creates the local `.env` from `.env.example` with random development values for
 * the required secrets (PLAN §12.3 WP-A4: the environment comes up without manual steps).
 *
 *   pnpm env:init            # create `.env`, or fill empty secrets of an existing one
 *   pnpm env:init --force    # rewrite `.env` from `.env.example` (new secrets)
 *
 * An existing `.env` is never overwritten without `--force`: only the listed secrets that are
 * present but empty get a value. The values are local throwaway secrets, never production ones.
 */
import { randomBytes } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { color, fail, parseArgs } from './lib/cli.ts';
import { REPO_ROOT } from './lib/repo.ts';

/** Variables that must be ≥ 32 characters and have no usable default (PLAN §11.4). */
export const GENERATED_SECRETS = ['APP_SECRET', 'INTERNAL_SECRET'] as const;

export type SecretGenerator = () => string;

export const randomSecret: SecretGenerator = () => randomBytes(48).toString('base64url');

export interface FillResult {
  text: string;
  /** Secrets that received a new value. */
  filled: string[];
}

/**
 * Gives every listed secret that is present with an empty value (`NAME=` or `NAME=""`) a generated
 * value. Other lines, comments and line endings are kept as they are.
 */
export function fillSecrets(text: string, generate: SecretGenerator = randomSecret): FillResult {
  const filled: string[] = [];
  const names = new Set<string>(GENERATED_SECRETS);
  const out = text.replace(/^([A-Z0-9_]+)=(""|'')?(\r?)$/gm, (line, name: string, _quotes, cr: string) => {
    if (!names.has(name) || filled.includes(name)) return line;
    filled.push(name);
    return `${name}=${generate()}${cr}`;
  });
  return { text: out, filled };
}

export type InitAction = 'created' | 'rewritten' | 'filled' | 'unchanged';

export interface InitResult {
  action: InitAction;
  filled: string[];
}

/** Creates or completes `<root>/.env` from `<root>/.env.example`. */
export function initEnv(root: string, options: { force?: boolean; generate?: SecretGenerator } = {}): InitResult {
  const examplePath = join(root, '.env.example');
  const envPath = join(root, '.env');
  if (!existsSync(examplePath)) throw new Error(`${examplePath} does not exist`);
  const exists = existsSync(envPath);
  const source = exists && !options.force ? readFileSync(envPath, 'utf8') : readFileSync(examplePath, 'utf8');
  const result = fillSecrets(source, options.generate);
  if (exists && !options.force && result.filled.length === 0) return { action: 'unchanged', filled: [] };
  writeFileSync(envPath, result.text, { mode: 0o600 });
  const action: InitAction = !exists ? 'created' : options.force ? 'rewritten' : 'filled';
  return { action, filled: result.filled };
}

function main(): void {
  const { flags } = parseArgs(process.argv.slice(2));
  let result: InitResult;
  try {
    result = initEnv(REPO_ROOT, { force: flags.has('force') });
  } catch (error) {
    fail((error as Error).message);
  }
  const secrets = result.filled.length > 0 ? ` (generated ${result.filled.join(', ')})` : '';
  const messages: Record<InitAction, string> = {
    created: `created .env from .env.example${secrets}`,
    rewritten: `rewrote .env from .env.example${secrets}`,
    filled: `filled empty secrets in .env${secrets}`,
    unchanged: '.env already has every required secret; nothing to do (--force rewrites it)',
  };
  process.stdout.write(`${color.green('ok')} env:init: ${messages[result.action]}\n`);
}

if (import.meta.main) main();
