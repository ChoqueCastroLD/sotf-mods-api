/**
 * `pnpm --filter @sotf/migration-tools r2:sample` — copies a small, deterministic sample (≈ 20) of
 * real legacy objects from the public `r2.sotf-mods.com` into the **local** S3 emulator, so B15 and
 * B17 can be rehearsed on real bytes and real legacy metadata (PLAN WP-84 acceptance).
 *
 * - Production is only read: plain `GET`s of public object URLs listed in the public snapshot
 *   (`snapshot/public-api-2026-09-29/heads.json`), never a download route of the site (those count
 *   downloads). One request at a time, objects ≤ 10 MB.
 * - The sample always contains keys with a space, an apostrophe and parentheses, zips served as
 *   `application/x-zip-compressed` and `application/zip`, BuildShare JSON files, images served as
 *   `application/octet-stream` and ordinary images.
 * - Objects are written under the **same key** with the `Content-Type`/`Content-Disposition` that
 *   production returned, so the emulator reproduces the legacy state. The target must be local.
 * - `out/r2-sample.json` lists what was copied (key, kind, size, MD5 of the bytes, headers).
 */
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { encodeStorageKey, storageKeyFromPublicUrl } from '@sotf/core/storage/keys';
import { cliLogger, color, flagInt, flagString, helpRequested, parseArgs, runCli } from '../../src/cli/_shared.ts';
import { OUT_DIR, PACKAGE_DIR } from '../../src/constants.ts';
import { headObject, putObject, r2TargetFromEnv, s3ClientFor } from '../s3.ts';

const USAGE = `
pnpm --filter @sotf/migration-tools r2:sample [--size <n>] [--bucket <name>] [--dry-run]
  Copies ≈ 20 real legacy objects (GET of https://r2.sotf-mods.com/<key>) into the LOCAL emulator
  (R2_ENDPOINT must be localhost/127.0.0.1). --dry-run only prints the selection.
  --size <n>        approximate sample size (default 20)
  --source <url>    public base URL to read from (default https://r2.sotf-mods.com)
`;

const PUBLIC_ORIGIN = 'https://r2.sotf-mods.com';
const MAX_OBJECT_BYTES = 10 * 1024 * 1024;

/** One row of heads.json: [kind, owner, url, status, size, contentType]. */
type HeadRow = [string, number | string, string, number, number | null, string | null];

interface Pick {
  kind: string;
  owner: number | string;
  key: string;
  size: number;
  snapshotType: string | null;
  why: string;
}

function snapshotRows(): HeadRow[] {
  const file = join(PACKAGE_DIR, 'snapshot', 'public-api-2026-09-29', 'heads.json');
  return JSON.parse(readFileSync(file, 'utf8')) as HeadRow[];
}

/** Deterministic selection covering every legacy oddity B15/B17 must handle. */
export function selectSample(rows: readonly HeadRow[], size: number): Pick[] {
  const candidates: Pick[] = [];
  for (const [kind, owner, url, status, bytes, type] of rows) {
    if (status !== 200 || !bytes || bytes > MAX_OBJECT_BYTES) continue;
    const key = storageKeyFromPublicUrl(url, [PUBLIC_ORIGIN]);
    if (!key) continue;
    candidates.push({ kind, owner, key, size: bytes, snapshotType: type, why: '' });
  }
  candidates.sort((a, b) => a.size - b.size || a.key.localeCompare(b.key));
  const chosen = new Map<string, Pick>();
  const take = (why: string, n: number, predicate: (p: Pick) => boolean) => {
    let added = 0;
    for (const p of candidates) {
      if (added >= n) break;
      if (chosen.has(p.key) || !predicate(p)) continue;
      chosen.set(p.key, { ...p, why });
      added += 1;
    }
  };
  const isVersion = (p: Pick) => p.kind === 'version';
  const scale = Math.max(1, Math.round(size / 20));
  take('version key with a space', 2 * scale, (p) => isVersion(p) && p.key.includes(' '));
  take('version key with an apostrophe', 2 * scale, (p) => isVersion(p) && p.key.includes("'"));
  take('version key with parentheses', 2 * scale, (p) => isVersion(p) && /[()]/.test(p.key));
  take(
    'zip served as application/x-zip-compressed',
    2 * scale,
    (p) => isVersion(p) && p.snapshotType === 'application/x-zip-compressed',
  );
  take('zip served as application/zip', 3 * scale, (p) => isVersion(p) && p.snapshotType === 'application/zip');
  take('BuildShare JSON', 2 * scale, (p) => isVersion(p) && p.key.endsWith('.json'));
  take(
    'image served as application/octet-stream',
    3 * scale,
    (p) => !isVersion(p) && p.snapshotType === 'application/octet-stream',
  );
  take('image key with a space or parentheses', 1 * scale, (p) => !isVersion(p) && /[ ()']/.test(p.key));
  take('image', 3 * scale, (p) => !isVersion(p) && (p.snapshotType ?? '').startsWith('image/'));
  return [...chosen.values()];
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, USAGE)) return 0;
  const size = flagInt(args, 'size', 20);
  const source = (flagString(args, 'source') ?? PUBLIC_ORIGIN).replace(/\/+$/, '');
  const sample = selectSample(snapshotRows(), size);
  for (const p of sample) cliLogger.info(`${color.dim(p.why.padEnd(44))} ${p.key} (${p.size} B)`);
  if (args.flags.has('dry-run')) return 0;

  const target = r2TargetFromEnv({ bucket: flagString(args, 'bucket') });
  if (!target.local) throw new Error(`r2:sample only writes to a local emulator; R2 endpoint is ${target.endpoint}`);
  const s3 = s3ClientFor(target);
  const copied: Array<Record<string, unknown>> = [];
  try {
    for (const p of sample) {
      const existing = await headObject(s3, target.bucket, p.key);
      if (existing) {
        cliLogger.info(color.dim(`= ${p.key} already in ${target.bucket}`));
        copied.push({
          key: p.key,
          why: p.why,
          size: existing.size,
          etag: existing.etag,
          contentType: existing.contentType,
          reused: true,
        });
        continue;
      }
      // Read-only GET of a public object (never a download route of the site).
      const res = await fetch(`${source}/${encodeStorageKey(p.key)}`, {
        headers: { 'user-agent': 'sotf-mods-v2-migration-sample/1.0 (read-only rehearsal)' },
        signal: AbortSignal.timeout(60_000),
      });
      if (!res.ok) {
        cliLogger.warn(`${p.key}: HTTP ${res.status}, skipped`);
        await res.body?.cancel().catch(() => undefined);
        continue;
      }
      const body = Buffer.from(await res.arrayBuffer());
      if (body.length > MAX_OBJECT_BYTES) {
        cliLogger.warn(`${p.key}: ${body.length} bytes, skipped`);
        continue;
      }
      const headers = {
        contentType: res.headers.get('content-type'),
        contentDisposition: res.headers.get('content-disposition'),
        cacheControl: res.headers.get('cache-control'),
      };
      await putObject(s3, target.bucket, p.key, body, headers);
      const md5 = createHash('md5').update(body).digest('hex');
      copied.push({ key: p.key, why: p.why, size: body.length, md5, ...headers, reused: false });
      cliLogger.info(`${color.green('+')} ${p.key} ${color.dim(`${body.length} B ${headers.contentType ?? ''}`)}`);
    }
  } finally {
    s3.destroy();
  }
  mkdirSync(OUT_DIR, { recursive: true });
  const file = join(OUT_DIR, 'r2-sample.json');
  writeFileSync(
    file,
    `${JSON.stringify({ source, bucket: target.bucket, createdAt: new Date().toISOString(), objects: copied }, null, 2)}\n`,
  );
  cliLogger.info(color.green(`${copied.length} object(s) in ${target.bucket} → ${file}`));
  return 0;
}

if (import.meta.main) runCli(main);
