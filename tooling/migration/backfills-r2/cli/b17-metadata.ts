/**
 * `pnpm --filter @sotf/migration-tools r2:b17` — B17, the R2 metadata rewrite (see ../b17.ts).
 *
 * Dry run by default: `HEAD`s only, the "before" manifest in `tooling/migration/out/`.
 * `--apply` rewrites in place and writes the "after" manifest; against anything but the local
 * emulator it also needs `--confirm-bucket <bucket>` (owner approval, PLAN §6.9 B17).
 */

import { readFileSync } from 'node:fs';
import {
  cliLogger,
  color,
  flagInt,
  flagString,
  helpRequested,
  parseArgs,
  runCli,
  userPath,
} from '../../src/cli/_shared.ts';
import { OUT_DIR } from '../../src/constants.ts';
import { connect } from '../../src/db.ts';
import { resolveDatabaseUrl } from '../../src/local.ts';
import { type B17Kind, type B17PlanEntry, revertB17, runB17 } from '../b17.ts';
import { assertWritable, r2TargetFromEnv, s3ClientFor } from '../s3.ts';

const USAGE = `
pnpm --filter @sotf/migration-tools r2:b17 [--apply] [options]
  --dry-run (default)       HEAD every target, write out/r2-metadata-before-<stamp>.json
  --apply                   rewrite Content-Type / Content-Disposition in place (CopyObject REPLACE,
                            guarded by the ETag of the plan), then write out/r2-metadata-after-<stamp>.json
  --confirm-bucket <name>   required with --apply when the endpoint is not the local emulator
  --bucket <name>           bucket (default R2_BUCKET or sotf-mods)
  --only version|zip|json|image   restrict the targets
  --limit <n>               first n targets only (staged roll-out)
  --cache-control <value>   also set Cache-Control on rewritten objects (default: keep the current one;
                            "immutable" = public, max-age=31536000, immutable)
  --allow-etag-change       also rewrite multipart objects (their ETag changes)
  --concurrency <n>         parallel HEAD requests (default 8)
  --out <dir>               manifest directory (default tooling/migration/out)
  --revert <before.json>    roll back an applied run: put back the headers of that "before" manifest
                            (dry run unless --apply; same --confirm-bucket rule)
Database: MIGRATIONS_DATABASE_URL / DATABASE_URL (read-only queries). R2: R2_ENDPOINT or R2_ACCOUNT_ID,
R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY.
`;

const KINDS = ['version', 'zip', 'json', 'image'] as const;

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, USAGE)) return 0;
  if (args.flags.has('apply') && args.flags.has('dry-run'))
    throw new Error('--apply and --dry-run are mutually exclusive');
  const apply = args.flags.has('apply');
  const target = r2TargetFromEnv({ bucket: flagString(args, 'bucket') });
  if (apply) assertWritable(target, flagString(args, 'confirm-bucket'));
  const only = flagString(args, 'only');
  if (only !== undefined && !(KINDS as readonly string[]).includes(only)) {
    throw new Error(`--only must be one of ${KINDS.join(', ')}`);
  }
  const rawCache = flagString(args, 'cache-control');
  const cacheControl = rawCache === 'immutable' ? 'public, max-age=31536000, immutable' : (rawCache ?? null);
  const limit = args.flags.has('limit') ? flagInt(args, 'limit', 1) : null;
  const out = flagString(args, 'out');

  cliLogger.info(
    color.dim(
      `R2 ${new URL(target.endpoint).host} bucket ${target.bucket}${target.local ? ' (local emulator)' : ''}` +
        `${apply ? color.yellow(' — APPLY') : ' — dry run'}`,
    ),
  );
  const s3 = s3ClientFor(target);
  const revertFile = flagString(args, 'revert');
  if (revertFile) {
    try {
      const manifest = JSON.parse(readFileSync(userPath(revertFile), 'utf8')) as {
        kind?: string;
        bucket: string;
        entries: B17PlanEntry[];
      };
      if (manifest.kind !== 'r2-metadata-before') throw new Error(`${revertFile} is not a B17 "before" manifest`);
      if (manifest.bucket !== target.bucket) {
        throw new Error(`the manifest is for bucket ${manifest.bucket}, the target is ${target.bucket}`);
      }
      const summary = await revertB17(s3, manifest, {
        apply,
        concurrency: flagInt(args, 'concurrency', 8),
        outDir: out ? userPath(out) : OUT_DIR,
        log: (message) => cliLogger.info(message),
      });
      return summary.failed + summary.etagChanged > 0 ? 1 : 0;
    } finally {
      s3.destroy();
    }
  }
  const db = await connect(resolveDatabaseUrl(), 'sotf-r2-b17');
  try {
    await db.query('SET default_transaction_read_only = on');
    const summary = await runB17(s3, db, {
      bucket: target.bucket,
      apply,
      cacheControl,
      allowEtagChange: args.flags.has('allow-etag-change'),
      only: (only as B17Kind | 'version' | undefined) ?? null,
      limit,
      concurrency: flagInt(args, 'concurrency', 8),
      outDir: out ? userPath(out) : OUT_DIR,
      log: (message) => cliLogger.info(message),
    });
    if (!apply) {
      cliLogger.info(color.green('dry run: nothing was written to R2'));
      return 0;
    }
    const bad = summary.failed + summary.etagChanged + summary.headersNotApplied;
    if (bad > 0) {
      cliLogger.error(`B17 finished with ${bad} problem(s); see ${summary.afterFile}`);
      return 1;
    }
    cliLogger.info(color.green(`B17 done: ${summary.updated} object(s) rewritten, ETags intact`));
    return 0;
  } finally {
    s3.destroy();
    await db.end();
  }
}

runCli(main);
