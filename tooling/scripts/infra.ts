/**
 * Local infrastructure lifecycle (PLAN §11.2): Postgres 16, SeaweedFS (S3) and Mailpit in the
 * compose project `sotfv2` (ops/compose/dev.yml).
 *
 *   node tooling/scripts/infra.ts up       start, wait for healthy, create the S3 buckets
 *   node tooling/scripts/infra.ts down     remove containers and network (volumes are kept)
 *   node tooling/scripts/infra.ts reset    remove containers and volumes, then `up`
 *   node tooling/scripts/infra.ts status   `docker compose ps`
 *
 * Only this project's containers are touched; nothing else on the host is stopped or modified.
 */
import { spawnSync } from 'node:child_process';
import { color, fail, run } from './lib/cli.ts';

export const COMPOSE_PROJECT = 'sotfv2';
export const COMPOSE_FILE = 'ops/compose/dev.yml';

/** Buckets that mirror production R2 (PLAN §2.8, §11.6), overridable with the usual env vars. */
export function devBuckets(env: NodeJS.ProcessEnv = process.env): string[] {
  return [...new Set([env.R2_BUCKET || 'sotf-mods', env.R2_PRIVATE_BUCKET || 'sotf-mods-private'])];
}

const compose = (...args: string[]) => ['compose', '-p', COMPOSE_PROJECT, '-f', COMPOSE_FILE, ...args];

function up(): void {
  run('docker', compose('up', '--detach', '--wait', '--wait-timeout', '180'));
  ensureBuckets();
  process.stdout.write(
    [
      `${color.green('ok')} infra is up (project ${COMPOSE_PROJECT})`,
      '  postgres   postgres://sotf:sotf@127.0.0.1:47432/sotf',
      `  s3         http://127.0.0.1:47333  (buckets: ${devBuckets().join(', ')})`,
      '  mailpit    smtp://127.0.0.1:47025  ui http://127.0.0.1:47080',
      '',
    ].join('\n'),
  );
}

/** Creates the S3 buckets through `weed shell` (idempotent: existing buckets are kept). */
function ensureBuckets(): void {
  const list = weedShell(['s3.bucket.list']);
  const existing = new Set(
    list
      .split('\n')
      .map((line) => line.trim().split(/\s+/)[0] ?? '')
      .filter(Boolean),
  );
  const missing = devBuckets().filter((b) => !existing.has(b));
  if (missing.length === 0) return;
  weedShell(missing.map((b) => `s3.bucket.create -name ${b}`));
  process.stdout.write(`${color.green('created')} S3 buckets: ${missing.join(', ')}\n`);
}

function weedShell(commands: string[]): string {
  const result = spawnSync('docker', compose('exec', '-T', 'seaweedfs', 'weed', 'shell', '-master=127.0.0.1:9333'), {
    input: `${commands.join('\n')}\n`,
    encoding: 'utf8',
  });
  if (result.status !== 0) fail(`weed shell failed: ${result.stderr || result.stdout}`);
  return result.stdout;
}

function main(): void {
  const command = process.argv[2];
  switch (command) {
    case 'up':
      up();
      break;
    case 'down':
      run('docker', compose('down', '--remove-orphans'));
      break;
    case 'reset':
      run('docker', compose('down', '--volumes', '--remove-orphans'));
      up();
      break;
    case 'status':
      run('docker', compose('ps'));
      break;
    default:
      fail('usage: infra.ts <up|down|reset|status>');
  }
}

if (import.meta.main) main();
