/**
 * B17 · R2 metadata of the legacy objects (PLAN §6.9 B17, §2.8; research/02 §3.2). Needs the
 * owner's approval before `--apply` on production.
 *
 * Targets (read from the database, read-only):
 * - every version file with a `storageKey` (B2) that is not `file_missing` — the 612 legacy zips
 *   and BuildShare JSON files: `Content-Type` `application/zip` / `application/json` and
 *   `Content-Disposition: attachment; filename="<Name> <version>.<ext>"; filename*=UTF-8''…`
 *   (builds: `<Name>.json`, their version is a UUIDv7);
 * - every legacy image (`Media` of `purpose = 'legacy'`, B2): `Content-Type` from content sniffing
 *   when the stored one is wrong (the `application/octet-stream` ones). Their disposition is kept.
 *
 * Steps:
 * 1. **Plan** (always): `HEAD` of every target → the "before" manifest
 *    `out/r2-metadata-before-<stamp>.json` (ETag, size, every header, the desired values and the
 *    action). Objects already correct are `ok` (so a second run is a no-op), absent ones `missing`.
 * 2. **Apply** (`--apply` only): an in-place `CopyObject` with `MetadataDirective: REPLACE`
 *    guarded by `CopySourceIfMatch: <ETag of the plan>` (an object changed since the plan is
 *    refused, never relabelled blindly). Headers not being rewritten and user metadata are carried
 *    over. Multipart objects (ETag `…-N`) are skipped unless `--allow-etag-change`: a copy would
 *    give them a new ETag.
 * 3. **Verify** (`--apply` only): `HEAD` of every target again → the "after" manifest
 *    `out/r2-metadata-after-<stamp>.json`, with `etagIntact` per object. Any changed ETag, failed
 *    copy or header that did not stick makes the command exit 1.
 *
 * A dry run (the default) sends only `HEAD` and small ranged `GET`s (image sniffing): nothing is
 * written anywhere but the local manifest file.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { S3Client } from '@aws-sdk/client-s3';
import { attachmentDisposition, versionDownloadName } from '@sotf/core/storage/disposition';
import type pg from 'pg';
import { bareType, JSON_CONTENT_TYPE, SNIFF_BYTES, sniffImageType, ZIP_CONTENT_TYPE } from './content-type.ts';
import { type FullHead, headObject, type MetadataRewrite, readPrefix, rewriteMetadata } from './s3.ts';

export type B17Kind = 'zip' | 'json' | 'image';

export interface B17Target {
  key: string;
  kind: B17Kind;
  /** `version:<id>` or `media:<uuid>`. */
  ref: string;
  /** Download name of version files (null for images). */
  downloadName: string | null;
}

export type B17Action = 'update' | 'ok' | 'missing' | 'skipped';

export interface B17PlanEntry extends B17Target {
  action: B17Action;
  reason: string | null;
  before: FullHead | null;
  desired: MetadataRewrite | null;
}

export interface B17AfterEntry {
  key: string;
  ref: string;
  action: B17Action;
  result: 'updated' | 'unchanged' | 'failed' | 'missing';
  error: string | null;
  etagBefore: string | null;
  etagAfter: string | null;
  etagIntact: boolean | null;
  headersApplied: boolean | null;
  after: FullHead | null;
}

export interface B17Options {
  bucket: string;
  apply: boolean;
  /** `Cache-Control` to set on every rewritten object (default: keep the current one). */
  cacheControl: string | null;
  allowEtagChange: boolean;
  only: B17Kind | 'version' | null;
  limit: number | null;
  concurrency: number;
  outDir: string;
  log: (message: string) => void;
}

export interface B17Summary {
  stamp: string;
  targets: number;
  update: number;
  ok: number;
  missing: number;
  skipped: number;
  updated: number;
  failed: number;
  etagChanged: number;
  headersNotApplied: number;
  beforeFile: string;
  afterFile: string | null;
}

export interface VersionRow {
  id: number;
  version: string;
  storageKey: string;
  extension: string | null;
  filename: string | null;
  modName: string | null;
  modType: string | null;
}

function baseName(key: string): string {
  const last = key.slice(key.lastIndexOf('/') + 1);
  // Legacy keys are `<timestamp>_<name>` (sometimes twice: `<ts>_<ts>_<name>`).
  return last.replace(/^(?:\d{10,}_)+/, '') || last;
}

/** Download name of a version file (`<Name> <version>.zip`, builds `<Name>.json`). */
export function downloadNameOf(row: VersionRow, kind: 'zip' | 'json'): string {
  const name = row.modName?.trim();
  if (!name) return row.filename?.trim() || baseName(row.storageKey);
  if (kind === 'json' || row.modType === 'Build') return `${name.replace(/[/\\]/g, '-')}.json`;
  return versionDownloadName(name, row.version, 'zip');
}

function versionKind(row: VersionRow): 'zip' | 'json' {
  const ext = row.extension?.replace(/^\./, '').toLowerCase();
  if (row.modType === 'Build' || ext === 'json' || /\.json$/i.test(row.storageKey)) return 'json';
  return 'zip';
}

/** Every object B17 looks at, from the database (read-only queries). */
export async function loadTargets(client: pg.ClientBase, bucket: string): Promise<B17Target[]> {
  const targets: B17Target[] = [];
  const seen = new Set<string>();
  const versions = await client.query<VersionRow>(
    `SELECT v."id", v."version", v."storageKey", v."extension", v."filename", m."name" AS "modName", m."type" AS "modType"
       FROM "ModVersion" v LEFT JOIN "Mod" m ON m."id" = v."modId"
      WHERE v."storageKey" IS NOT NULL AND v."status" <> 'file_missing'
      ORDER BY v."id"`,
  );
  for (const row of versions.rows) {
    if (seen.has(row.storageKey)) continue;
    seen.add(row.storageKey);
    const kind = versionKind(row);
    targets.push({ key: row.storageKey, kind, ref: `version:${row.id}`, downloadName: downloadNameOf(row, kind) });
  }
  const images = await client.query<{ id: string; sourceKey: string }>(
    `SELECT "id", "sourceKey" FROM "Media" WHERE "purpose" = 'legacy' AND "sourceBucket" = $1 ORDER BY "id"`,
    [bucket],
  );
  for (const row of images.rows) {
    if (seen.has(row.sourceKey)) continue;
    seen.add(row.sourceKey);
    targets.push({ key: row.sourceKey, kind: 'image', ref: `media:${row.id}`, downloadName: null });
  }
  return targets;
}

async function mapLimit<T, R>(items: readonly T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, async () => {
      for (;;) {
        const index = next;
        next += 1;
        if (index >= items.length) return;
        out[index] = await fn(items[index] as T);
      }
    }),
  );
  return out;
}

function differs(before: FullHead, desired: MetadataRewrite): boolean {
  return (
    bareType(before.contentType) !== desired.contentType ||
    (before.contentDisposition ?? null) !== (desired.contentDisposition ?? null) ||
    (before.cacheControl ?? null) !== (desired.cacheControl ?? null)
  );
}

async function planOne(
  s3: S3Client,
  target: B17Target,
  options: Pick<B17Options, 'bucket' | 'cacheControl' | 'allowEtagChange'>,
): Promise<B17PlanEntry> {
  const before = await headObject(s3, options.bucket, target.key);
  if (!before) return { ...target, action: 'missing', reason: 'HEAD 404', before: null, desired: null };
  const cacheControl = options.cacheControl ?? before.cacheControl;
  let desired: MetadataRewrite;
  if (target.kind === 'image') {
    const sniffed = sniffImageType(await readPrefix(s3, options.bucket, target.key, SNIFF_BYTES));
    if (!sniffed) {
      return { ...target, action: 'skipped', reason: 'not a recognised image format', before, desired: null };
    }
    desired = { contentType: sniffed, contentDisposition: before.contentDisposition, cacheControl };
  } else {
    desired = {
      contentType: target.kind === 'zip' ? ZIP_CONTENT_TYPE : JSON_CONTENT_TYPE,
      contentDisposition: attachmentDisposition(target.downloadName ?? baseName(target.key)),
      cacheControl,
    };
  }
  if (!differs(before, desired)) return { ...target, action: 'ok', reason: null, before, desired };
  if (before.etag?.includes('-') && !options.allowEtagChange) {
    return {
      ...target,
      action: 'skipped',
      reason: 'multipart object: a copy would change its ETag (use --allow-etag-change)',
      before,
      desired,
    };
  }
  return { ...target, action: 'update', reason: null, before, desired };
}

function writeJson(path: string, value: unknown): void {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

function errorText(error: unknown): string {
  const e = error as { name?: string; message?: string; $metadata?: { httpStatusCode?: number } };
  const status = e?.$metadata?.httpStatusCode;
  if (status === 412 || e?.name === 'PreconditionFailed') return 'object changed since the plan (ETag mismatch, 412)';
  return `${e?.name ?? 'Error'}${status ? ` ${status}` : ''}: ${e?.message ?? String(error)}`;
}

export async function runB17(s3: S3Client, db: pg.ClientBase, options: B17Options): Promise<B17Summary> {
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  mkdirSync(options.outDir, { recursive: true });
  let targets = await loadTargets(db, options.bucket);
  if (options.only) {
    const kinds: readonly B17Kind[] = options.only === 'version' ? ['zip', 'json'] : [options.only];
    targets = targets.filter((t) => kinds.includes(t.kind));
  }
  if (options.limit !== null) targets = targets.slice(0, options.limit);
  options.log(`B17: ${targets.length} object(s) in bucket ${options.bucket}${options.apply ? '' : ' (dry run)'}`);

  const plan = await mapLimit(targets, options.concurrency, (t) => planOne(s3, t, options));
  const beforeFile = join(options.outDir, `r2-metadata-before-${stamp}.json`);
  writeJson(beforeFile, {
    kind: 'r2-metadata-before',
    createdAt: new Date().toISOString(),
    bucket: options.bucket,
    apply: options.apply,
    entries: plan,
  });
  const count = (action: B17Action) => plan.filter((p) => p.action === action).length;
  const summary: B17Summary = {
    stamp,
    targets: plan.length,
    update: count('update'),
    ok: count('ok'),
    missing: count('missing'),
    skipped: count('skipped'),
    updated: 0,
    failed: 0,
    etagChanged: 0,
    headersNotApplied: 0,
    beforeFile,
    afterFile: null,
  };
  options.log(
    `B17 plan: ${summary.update} to update, ${summary.ok} already correct, ${summary.missing} missing, ${summary.skipped} skipped → ${beforeFile}`,
  );
  if (!options.apply) return summary;

  const copyErrors = new Map<string, string>();
  await mapLimit(
    plan.filter((p) => p.action === 'update'),
    Math.min(4, options.concurrency),
    async (entry) => {
      try {
        await rewriteMetadata(
          s3,
          options.bucket,
          entry.key,
          entry.before as FullHead,
          entry.desired as MetadataRewrite,
        );
      } catch (error) {
        copyErrors.set(entry.key, errorText(error));
      }
    },
  );

  const after = await mapLimit(plan, options.concurrency, async (entry): Promise<B17AfterEntry> => {
    const head = await headObject(s3, options.bucket, entry.key);
    const error = copyErrors.get(entry.key) ?? null;
    const etagBefore = entry.before?.etag ?? null;
    const etagAfter = head?.etag ?? null;
    const headersApplied = entry.desired && head ? !differs(head, entry.desired) : null;
    return {
      key: entry.key,
      ref: entry.ref,
      action: entry.action,
      result: !head ? 'missing' : error ? 'failed' : entry.action === 'update' ? 'updated' : 'unchanged',
      error,
      etagBefore,
      etagAfter,
      etagIntact: entry.before && head ? etagBefore === etagAfter : null,
      headersApplied,
      after: head,
    };
  });
  const afterFile = join(options.outDir, `r2-metadata-after-${stamp}.json`);
  writeJson(afterFile, {
    kind: 'r2-metadata-after',
    createdAt: new Date().toISOString(),
    bucket: options.bucket,
    before: beforeFile,
    entries: after,
  });
  summary.afterFile = afterFile;
  summary.updated = after.filter((a) => a.result === 'updated' && a.headersApplied === true).length;
  summary.failed = after.filter((a) => a.result === 'failed').length;
  summary.etagChanged = after.filter((a) => a.etagIntact === false).length;
  summary.headersNotApplied = after.filter(
    (a) => a.action === 'update' && a.result === 'updated' && a.headersApplied !== true,
  ).length;
  options.log(
    `B17 applied: ${summary.updated} updated, ${summary.failed} failed, ${summary.etagChanged} ETag(s) changed, ` +
      `${summary.headersNotApplied} without the expected headers → ${afterFile}`,
  );
  return summary;
}

export interface B17RevertSummary {
  entries: number;
  reverted: number;
  unchanged: number;
  missing: number;
  failed: number;
  etagChanged: number;
  file: string;
}

/**
 * Puts back the headers recorded in a "before" manifest (rollback of an applied B17): for every
 * entry that was planned as `update`, the object gets its previous `Content-Type`,
 * `Content-Disposition` and `Cache-Control` again (same in-place copy, guarded by the current ETag).
 * Writes `out/r2-metadata-revert-<stamp>.json`.
 */
export async function revertB17(
  s3: S3Client,
  beforeManifest: { bucket: string; entries: B17PlanEntry[] },
  options: Pick<B17Options, 'apply' | 'concurrency' | 'outDir' | 'log'>,
): Promise<B17RevertSummary> {
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const entries = beforeManifest.entries.filter((e) => e.action === 'update' && e.before);
  const results = await mapLimit(entries, Math.min(4, options.concurrency), async (entry) => {
    const previous = entry.before as FullHead;
    const current = await headObject(s3, beforeManifest.bucket, entry.key);
    if (!current) return { key: entry.key, result: 'missing' as const, error: null, etagIntact: null };
    const wanted: MetadataRewrite = {
      contentType: previous.contentType ?? 'application/octet-stream',
      contentDisposition: previous.contentDisposition,
      cacheControl: previous.cacheControl,
    };
    const same =
      (current.contentType ?? null) === (previous.contentType ?? null) &&
      (current.contentDisposition ?? null) === (previous.contentDisposition ?? null) &&
      (current.cacheControl ?? null) === (previous.cacheControl ?? null);
    if (same || !options.apply) {
      return {
        key: entry.key,
        result: same ? ('unchanged' as const) : ('pending' as const),
        error: null,
        etagIntact: null,
      };
    }
    try {
      await rewriteMetadata(s3, beforeManifest.bucket, entry.key, current, wanted);
    } catch (error) {
      return { key: entry.key, result: 'failed' as const, error: errorText(error), etagIntact: null };
    }
    const after = await headObject(s3, beforeManifest.bucket, entry.key);
    return {
      key: entry.key,
      result: 'reverted' as const,
      error: null,
      etagIntact: after ? after.etag === current.etag : null,
    };
  });
  mkdirSync(options.outDir, { recursive: true });
  const file = join(options.outDir, `r2-metadata-revert-${stamp}.json`);
  writeJson(file, { kind: 'r2-metadata-revert', createdAt: new Date().toISOString(), apply: options.apply, results });
  const summary: B17RevertSummary = {
    entries: entries.length,
    reverted: results.filter((r) => r.result === 'reverted').length,
    unchanged: results.filter((r) => r.result === 'unchanged').length,
    missing: results.filter((r) => r.result === 'missing').length,
    failed: results.filter((r) => r.result === 'failed').length,
    etagChanged: results.filter((r) => r.etagIntact === false).length,
    file,
  };
  options.log(
    `B17 revert${options.apply ? '' : ' (dry run)'}: ${summary.entries} entr(ies), ${summary.reverted} reverted, ` +
      `${summary.unchanged} already as before, ${summary.missing} missing, ${summary.failed} failed → ${file}`,
  );
  return summary;
}
