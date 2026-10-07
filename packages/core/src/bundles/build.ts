/**
 * `bundle.build` (T1-04): resolves the items of the bundle's kit (pinned version or latest), reads
 * each file from the public bucket, lays them out (`plan.ts`) and stores one zip at
 * `bundles/{modId}/{bundleId}-{fingerprint}.zip` (public bucket, `attachment`). The previous zip is
 * deleted afterwards. Items without a downloadable file are skipped and listed in `contents`
 * with 0 files. Too many files or bytes mark the bundle `failed` with a reason.
 */
import { createHash } from 'node:crypto';
import { BUNDLE_LIMITS } from '@sotf/contracts/bundles';
import { FILE_CHECKS } from '@sotf/contracts/manifest';
import { sql } from 'drizzle-orm';
import { strToU8, zipSync } from 'fflate';
import { at, intArray, query, queryOne } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { loadItems, resolveVersions } from '../kits/read.ts';
import type { ObjectStorage } from '../storage/client.ts';
import { safeName, storageKeyFromPublicUrl } from '../storage/keys.ts';
import { BundleTooLargeError, bundleReadme, mergeFiles, type PlannedFile, planItemFiles } from './plan.ts';
import { bundleFingerprint } from './service.ts';

export type BundleOutcome =
  | { status: 'ready'; bytes: number; files: number }
  | { status: 'failed'; reason: string }
  | { status: 'removed' | 'skipped'; reason?: string };

interface VersionFile {
  id: number;
  modName: string;
  modType: string | null;
  version: string;
  storageKey: string | null;
  downloadUrl: string;
  filename: string | null;
  status: string;
  checksStatus: string | null;
}

async function readObject(storage: ObjectStorage, key: string, limit: number): Promise<Buffer | null> {
  const head = await storage.head(storage.config.publicBucket, key);
  if (!head || head.size > limit) return null;
  const { body } = await storage.get(storage.config.publicBucket, key);
  const chunks: Buffer[] = [];
  for await (const chunk of body as AsyncIterable<Buffer>) chunks.push(chunk);
  return Buffer.concat(chunks);
}

async function fail(ctx: Ctx, bundleId: number, reason: string, fingerprint: string): Promise<BundleOutcome> {
  await ctx.db.execute(
    sql`UPDATE "ModBundle" SET "status" = 'failed', "statusReason" = ${reason}, "fingerprint" = ${fingerprint},
        "updatedAt" = ${at(ctx.clock.now())} WHERE "id" = ${bundleId}`,
  );
  return { status: 'failed', reason };
}

export async function buildBundle(
  ctx: Ctx,
  storage: ObjectStorage,
  input: { bundleId: number; removeKey?: string | undefined; siteUrl: string; publicOrigins?: readonly string[] },
): Promise<BundleOutcome> {
  if (input.removeKey) {
    await storage.delete(storage.config.publicBucket, input.removeKey);
    return { status: 'removed' };
  }
  const bundle = await queryOne<{
    id: number;
    modId: number;
    kitId: number;
    storageKey: string | null;
    kitName: string;
    kitSlug: string;
    ownerSlug: string | null;
  }>(
    ctx.db,
    sql`SELECT b."id", b."modId", b."kitId", b."storageKey", k."name" AS "kitName", k."slug" AS "kitSlug", u."slug" AS "ownerSlug"
          FROM "ModBundle" b JOIN "Kit" k ON k."id" = b."kitId" LEFT JOIN "User" u ON u."id" = k."ownerId"
         WHERE b."id" = ${input.bundleId} AND k."deletedAt" IS NULL`,
  );
  if (!bundle) return { status: 'skipped', reason: 'not_found' };

  const fingerprint = await bundleFingerprint(ctx, bundle.kitId);
  const items = await loadItems(ctx.db, [bundle.kitId]);
  const resolved = await resolveVersions(ctx.db, items);
  const ids = [...resolved.values()].map((v) => v.id);
  const versions = await query<VersionFile>(
    ctx.db,
    sql`SELECT v."id", m."name" AS "modName", m."type" AS "modType", v."version", v."storageKey", v."downloadUrl",
               v."filename", v."status", v."checksStatus"
          FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId" WHERE v."id" = ANY(${intArray(ids)})`,
  );
  const byId = new Map(versions.map((v) => [v.id, v]));
  const origins = [storage.config.publicBaseUrl, ...(input.publicOrigins ?? [])];

  const perItem: PlannedFile[][] = [];
  const contents: Array<{ mod: string; version: string | null; files: number }> = [];
  let total = 0;
  for (const item of items) {
    const version = byId.get(resolved.get(item.modId)?.id ?? -1);
    if (!version) continue;
    const usable =
      version.status !== 'rejected' && !(version.status === 'pending' && version.checksStatus !== 'passed');
    const key = version.storageKey ?? storageKeyFromPublicUrl(version.downloadUrl, origins);
    const limit = version.modType === 'Build' ? FILE_CHECKS.maxBuildBytes : FILE_CHECKS.maxModBytesVerified;
    const data = usable && key ? await readObject(storage, key, limit) : null;
    if (!data) {
      contents.push({ mod: version.modName, version: version.version, files: 0 });
      perItem.push([]);
      continue;
    }
    let files: PlannedFile[];
    try {
      files = planItemFiles(
        {
          filename: version.filename ?? key?.split('/').pop() ?? 'file',
          isBuild: version.modType === 'Build',
          data,
        },
        { maxBytes: BUNDLE_LIMITS.maxBytes - total },
      );
    } catch (error) {
      if (error instanceof BundleTooLargeError) return fail(ctx, bundle.id, 'too_large', fingerprint);
      files = [];
    }
    total += files.reduce((sum, f) => sum + f.data.length, 0);
    if (total > BUNDLE_LIMITS.maxBytes) return fail(ctx, bundle.id, 'too_large', fingerprint);
    contents.push({ mod: version.modName, version: version.version, files: files.length });
    perItem.push(files);
  }
  const merged = mergeFiles(perItem);
  if (merged.files.length === 0) return fail(ctx, bundle.id, 'no_files', fingerprint);
  if (merged.files.length > BUNDLE_LIMITS.maxFiles) return fail(ctx, bundle.id, 'too_many_files', fingerprint);

  const kitUrl = `${input.siteUrl.replace(/\/+$/, '')}/kits/${bundle.ownerSlug ?? 'unknown'}/${bundle.kitSlug}`;
  const readme = bundleReadme({
    kitName: bundle.kitName,
    kitUrl,
    items: contents.filter((c) => c.files > 0),
    conflicts: merged.conflicts,
  });
  const archive: Record<string, Uint8Array> = {};
  for (const file of merged.files) archive[file.path] = file.data;
  archive['BUNDLE.txt'] = strToU8(readme);
  const zip = Buffer.from(zipSync(archive, { level: 6 }));
  const sha256 = createHash('sha256').update(zip).digest('hex');
  const key = `bundles/${bundle.modId}/${bundle.id}-${fingerprint.slice(0, 10)}.zip`;
  const fileName = `${safeName(bundle.kitName, 'bundle')}.zip`;
  await storage.put({
    bucket: storage.config.publicBucket,
    key,
    body: zip,
    contentLength: zip.length,
    contentType: 'application/zip',
    contentDisposition: `attachment; filename="${fileName}"`,
    cacheControl: 'public, max-age=31536000, immutable',
  });
  await ctx.db.execute(
    sql`UPDATE "ModBundle" SET "status" = 'ready', "statusReason" = NULL, "storageKey" = ${key}, "bytes" = ${zip.length},
        "sha256" = ${sha256}, "filesCount" = ${merged.files.length + 1}, "contents" = ${JSON.stringify(contents)}::jsonb,
        "fingerprint" = ${fingerprint}, "builtAt" = ${at(ctx.clock.now())}, "updatedAt" = ${at(ctx.clock.now())}
      WHERE "id" = ${bundle.id}`,
  );
  if (bundle.storageKey && bundle.storageKey !== key && bundle.storageKey.startsWith('bundles/')) {
    await storage
      .delete(storage.config.publicBucket, bundle.storageKey)
      .catch((err) => ctx.log.warn({ err, key: bundle.storageKey }, 'old bundle zip not deleted'));
  }
  await ctx.jobs.enqueue('cdn.purge', { tags: [`mod:${bundle.modId}`], reason: 'bundle' });
  ctx.log.info({ bundleId: bundle.id, files: merged.files.length, bytes: zip.length }, 'bundle built');
  return { status: 'ready', bytes: zip.length, files: merged.files.length + 1 };
}
