/**
 * `build.extract` (PLAN §2.9, T0-24): the PNG thumbnail embedded in a BuildShare blueprint
 * (`Thumbnail`, base64) becomes a `Media` (`purpose = 'thumbnail'`), processed by `media.process`
 * into AVIF/WebP variants. The wizard offers it as the (replaceable) cover of the build.
 *
 * - The blueprint is read from the upload's object (incoming, quarantine or, once published, its
 *   final key) — builds are ≤ 20 MB.
 * - The decoded PNG is stored privately as `incoming/{userId}/{uploadId}-thumbnail` and a pending
 *   `Media` + `media.process` job are created in one transaction.
 * - `Upload.resultRef.buildThumbnail = { mediaId }` makes the job idempotent.
 * - With `modVersionId` (a published version), `ModVersion.buildMeta` is filled and the mod gets the
 *   thumbnail as cover when it has none.
 */
import { FILE_CHECKS } from '@sotf/contracts/manifest';
import { type JsonObject, media, type Transaction, upload } from '@sotf/db';
import { eq, sql } from 'drizzle-orm';
import type { Ctx } from '../kernel/context.ts';
import { newId } from '../kernel/ids.ts';
import type { ObjectStorage } from '../storage/client.ts';
import { incomingKey } from '../storage/keys.ts';
import { buildMetaOf, decodeThumbnail, inspectBlueprint } from './blueprint.ts';

export type ExtractOutcome = { status: 'extracted'; mediaId: string | null } | { status: 'skipped'; reason: string };

interface BuildRef {
  buildThumbnail?: { mediaId: string | null };
  final?: { bucket: string; key: string };
  quarantine?: { key: string };
  [key: string]: unknown;
}

async function readObject(storage: ObjectStorage, bucket: string, key: string): Promise<Buffer | null> {
  const head = await storage.head(bucket, key);
  if (!head || head.size > FILE_CHECKS.maxBuildBytes) return null;
  const { body } = await storage.get(bucket, key);
  const chunks: Buffer[] = [];
  for await (const chunk of body as AsyncIterable<Buffer>) chunks.push(chunk);
  return Buffer.concat(chunks);
}

export async function extractBuild(
  ctx: Ctx,
  storage: ObjectStorage,
  input: { uploadId: string; modVersionId: number | null },
): Promise<ExtractOutcome> {
  const row = await ctx.db.query.upload.findFirst({ where: eq(upload.id, input.uploadId) });
  if (!row) return { status: 'skipped', reason: 'not_found' };
  if (row.purpose !== 'build_file') return { status: 'skipped', reason: 'not_a_build' };
  const ref = (row.resultRef ?? {}) as BuildRef;

  let mediaId = ref.buildThumbnail?.mediaId ?? null;
  let meta: ReturnType<typeof buildMetaOf> | null = null;
  if (!ref.buildThumbnail || input.modVersionId !== null) {
    const location = ref.final
      ? { bucket: ref.final.bucket, key: ref.final.key }
      : ref.quarantine
        ? { bucket: row.bucket, key: ref.quarantine.key }
        : { bucket: row.bucket, key: row.key };
    const buffer = await readObject(storage, location.bucket, location.key);
    if (!buffer) return { status: 'skipped', reason: 'object_missing' };
    const blueprint = inspectBlueprint(buffer);
    if (!blueprint.summary) return { status: 'skipped', reason: 'invalid_blueprint' };
    meta = buildMetaOf(blueprint.summary);

    if (!ref.buildThumbnail) {
      const png = decodeThumbnail(blueprint.summary);
      if (png) {
        mediaId = newId();
        const key = incomingKey(row.userId, `${row.id}-thumbnail`);
        await storage.put({
          bucket: storage.config.privateBucket,
          key,
          body: png,
          contentLength: png.length,
          contentType: 'image/png',
        });
        const id = mediaId;
        await ctx.db.transaction(async (tx) => {
          await tx
            .insert(media)
            .values({
              id,
              ownerId: row.userId,
              purpose: 'thumbnail',
              sourceBucket: storage.config.privateBucket,
              sourceKey: key,
              bytes: png.length,
              contentType: 'image/png',
              status: 'pending',
            })
            .onConflictDoNothing();
          await ctx.jobs.enqueue('media.process', { mediaId: id }, { tx: tx as Transaction });
          await tx
            .update(upload)
            .set({ resultRef: JSON.parse(JSON.stringify({ ...ref, buildThumbnail: { mediaId: id } })) as JsonObject })
            .where(eq(upload.id, row.id));
        });
      } else {
        await ctx.db
          .update(upload)
          .set({ resultRef: JSON.parse(JSON.stringify({ ...ref, buildThumbnail: { mediaId: null } })) as JsonObject })
          .where(eq(upload.id, row.id));
      }
    }
  }

  if (input.modVersionId !== null && meta) {
    await ctx.db.execute(sql`
      UPDATE "ModVersion" SET "buildMeta" = ${JSON.stringify(meta)}::jsonb WHERE "id" = ${input.modVersionId}`);
    // T1-06: geometry and top-down preview of the build page (best effort: the page falls back to
    // the thumbnail and `build.geometry` retries lazily).
    await ctx.jobs.enqueue(
      'build.geometry',
      { modVersionId: input.modVersionId },
      { singletonKey: `geometry:${input.modVersionId}` },
    );
    if (mediaId) {
      await ctx.db.execute(sql`
        UPDATE "Mod" SET "thumbnailMediaId" = ${mediaId}::uuid
         WHERE "id" = (SELECT "modId" FROM "ModVersion" WHERE "id" = ${input.modVersionId})
           AND "thumbnailMediaId" IS NULL`);
    }
  }
  ctx.log.info({ uploadId: row.id, mediaId }, 'build extracted');
  return { status: 'extracted', mediaId };
}
