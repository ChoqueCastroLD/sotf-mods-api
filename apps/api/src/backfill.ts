/**
 * Thin backfill entry (PLAN §6.9, §6.13): enqueues the `backfill.run` job that the worker executes
 * (idempotent, resumable, recorded in `MigrationRun`; WP-14/WP-84 implement the backfills).
 *
 *   node dist/backfill.js <B1..B99> [--apply] [--batch-size 2000] [--wait]
 *
 * Without `--apply` the backfill runs as a dry run. `--wait` polls the job until it finishes and
 * exits non-zero when it failed.
 */
import { JOB_PAYLOADS } from '@sotf/contracts/jobs';
import { ensureQueues } from '@sotf/core';
import { PgBoss } from 'pg-boss';
import { loadBackfillEnv } from './env.ts';

const QUEUE = 'backfill.run';

export interface BackfillArgs {
  name: string;
  dryRun: boolean;
  batchSize: number;
  wait: boolean;
}

export function parseBackfillArgs(argv: readonly string[]): BackfillArgs {
  const positional: string[] = [];
  let batchSize = 2000;
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i] as string;
    if (arg === '--batch-size') {
      batchSize = Number(argv[i + 1]);
      i += 1;
    } else if (arg.startsWith('--batch-size=')) batchSize = Number(arg.slice('--batch-size='.length));
    else if (!arg.startsWith('--')) positional.push(arg);
  }
  const name = positional[0];
  const payload = JOB_PAYLOADS[QUEUE].parse({ name, dryRun: !argv.includes('--apply'), batchSize });
  return { ...payload, wait: argv.includes('--wait') };
}

async function main(): Promise<number> {
  let args: BackfillArgs;
  try {
    args = parseBackfillArgs(process.argv.slice(2));
  } catch {
    process.stderr.write('usage: backfill <B1..B99> [--apply] [--batch-size 100..5000] [--wait]\n');
    return 2;
  }
  const env = loadBackfillEnv();
  const boss = new PgBoss({
    connectionString: env.DATABASE_URL,
    schema: env.PGBOSS_SCHEMA,
    application_name: 'sotf-backfill',
    max: 2,
    migrate: false,
    createSchema: false,
    supervise: false,
    schedule: false,
  });
  boss.on('error', (error) => process.stderr.write(`pg-boss: ${error.message}\n`));
  await boss.start();
  try {
    await ensureQueues(boss, [QUEUE]);
    const { wait, ...payload } = args;
    const id = await boss.send(QUEUE, payload);
    if (!id) {
      process.stderr.write(`${args.name}: a backfill is already queued or running (singleton queue)\n`);
      return 3;
    }
    process.stdout.write(`${args.name}: queued job ${id} (${args.dryRun ? 'dry run' : 'apply'})\n`);
    if (!wait) return 0;
    for (;;) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const [job] = await boss.findJobs(QUEUE, { id });
      if (!job) {
        process.stderr.write(`${args.name}: job ${id} disappeared\n`);
        return 1;
      }
      if (job.state === 'completed') {
        process.stdout.write(`${args.name}: completed ${JSON.stringify(job.output ?? {})}\n`);
        return 0;
      }
      if (job.state === 'failed' || job.state === 'cancelled') {
        process.stderr.write(`${args.name}: ${job.state} ${JSON.stringify(job.output ?? {})}\n`);
        return 1;
      }
    }
  } finally {
    await boss.stop({ graceful: false });
  }
}

if (import.meta.main) {
  main().then(
    (code) => process.exit(code),
    (error: unknown) => {
      process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
      process.exit(1);
    },
  );
}
