/**
 * `pnpm dev`: starts web (47321), api (47301) and worker (health 47302) in watch mode, with the
 * local prerequisites taken care of first (PLAN §11.2):
 *
 *   1. `.env` exists with its secrets (same as `pnpm env:init`).
 *   2. The local infrastructure answers (Postgres 47432, S3 47333); otherwise `pnpm infra:up`.
 *   3. The development database has data; otherwise it says how to seed it (`pnpm db:seed:dev --small`,
 *      it takes ~15 s and is never run implicitly).
 *
 *   pnpm dev                start everything
 *   pnpm dev --no-infra     skip steps 2 and 3 (infra managed by hand, or a remote database)
 *   pnpm dev --filter=@sotf/web   anything else goes to `turbo run dev`
 */
import { Socket } from 'node:net';
import { color, run } from './lib/cli.ts';
import { initEnv } from './env-init.ts';
import { REPO_ROOT } from './lib/repo.ts';

export const DEV_INFRA_PORTS = { postgres: 47_432, s3: 47_333 } as const;

/** True when something accepts TCP connections on 127.0.0.1:<port>. */
export function portOpen(port: number, timeoutMs = 800): Promise<boolean> {
  return new Promise((resolve) => {
    const socket = new Socket();
    const done = (open: boolean) => {
      socket.destroy();
      resolve(open);
    };
    socket.setTimeout(timeoutMs, () => done(false));
    socket.once('error', () => done(false));
    socket.connect(port, '127.0.0.1', () => done(true));
  });
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const skipInfra = args.includes('--no-infra');
  const turboArgs = args.filter((arg) => arg !== '--no-infra');

  const env = initEnv(REPO_ROOT);
  if (env.action !== 'unchanged') process.stdout.write(`${color.green('ok')} .env ${env.action}\n`);

  if (!skipInfra) {
    const [pg, s3] = await Promise.all([portOpen(DEV_INFRA_PORTS.postgres), portOpen(DEV_INFRA_PORTS.s3)]);
    if (!pg || !s3) {
      process.stdout.write(`${color.yellow('infra')} not running, starting it (pnpm infra:up)\n`);
      run('node', ['tooling/scripts/infra.ts', 'up']);
      process.stdout.write(
        `${color.yellow('hint')} a fresh database has no data: run ${color.bold('pnpm db:seed:dev --small')} once, then reload\n`,
      );
    }
  }

  run('pnpm', ['exec', 'turbo', 'run', 'dev', '--concurrency=12', ...turboArgs]);
}

if (import.meta.main) await main();
