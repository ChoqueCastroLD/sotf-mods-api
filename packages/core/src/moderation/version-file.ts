/**
 * `GET /moderation/versions/:id/file`: a 5-minute presigned link to the file of a version under
 * review, so a moderator can download and test it before deciding.
 *
 * - Files that passed the checks already sit at their final key in the public bucket (not
 *   downloadable through the site while the version is pending); flagged files wait in
 *   `quarantine/` of the private bucket. Legacy versions have only `ModVersion.storageKey`.
 * - Staff only (`moderation.queue`); every link is written to the audit log
 *   (`version.file_download`), quarantined files included.
 */
import { sql } from 'drizzle-orm';
import { recordAudit } from '../audit/audit.ts';
import { queryOne } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { buildDownloadName, versionDownloadName } from '../storage/disposition.ts';
import { assertStaff } from './guard.ts';
import type { ModerationDeps } from './shared.ts';

const LINK_SECONDS = 300;

interface Row {
  id: number;
  version: string;
  storageKey: string | null;
  extension: string | null;
  modName: string;
  modType: string | null;
}

interface UploadRef {
  final?: { bucket?: string; key: string };
  quarantine?: { key: string };
}

export interface VersionFileLink {
  url: string;
  fileName: string;
  quarantined: boolean;
  expiresAt: string;
}

export async function versionFileLink(ctx: Ctx, deps: ModerationDeps, versionId: number): Promise<VersionFileLink> {
  await assertStaff(ctx, 'moderation.queue');
  const storage = deps.storage;
  if (!storage) throw errors.unavailable('File storage is not configured');
  const row = await queryOne<Row>(
    ctx.db,
    sql`SELECT v."id", v."version", v."storageKey", v."extension", m."name" AS "modName", m."type" AS "modType"
          FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId" WHERE v."id" = ${versionId}`,
  );
  if (!row) throw errors.notFound('Version');
  const upload = await queryOne<{ bucket: string; resultRef: UploadRef | null }>(
    ctx.db,
    sql`SELECT "bucket", "resultRef" FROM "Upload"
         WHERE ("resultRef"->'reserved'->>'versionId') = ${String(row.id)}
            OR (${row.storageKey}::text IS NOT NULL AND ("resultRef"->'final'->>'key') = ${row.storageKey})
         ORDER BY "createdAt" DESC LIMIT 1`,
  );
  const ref = upload?.resultRef ?? {};
  const isBuild = String(row.modType ?? '').toLowerCase() === 'build';
  const extension = row.extension ?? (isBuild ? 'json' : 'zip');
  const fileName = isBuild ? buildDownloadName(row.modName) : versionDownloadName(row.modName, row.version, extension);

  let bucket: string;
  let key: string;
  let quarantined = false;
  if (ref.quarantine && upload) {
    bucket = upload.bucket;
    key = ref.quarantine.key;
    quarantined = true;
  } else if (ref.final?.key) {
    bucket = ref.final.bucket ?? storage.config.publicBucket;
    key = ref.final.key;
  } else if (row.storageKey) {
    bucket = storage.config.publicBucket;
    key = row.storageKey;
  } else {
    throw errors.notFound('Version file');
  }
  if (!(await storage.head(bucket, key))) throw errors.notFound('Version file');

  const url = await storage.presignGet(bucket, key, LINK_SECONDS, fileName);
  await recordAudit(ctx.db, ctx, {
    action: 'version.file_download',
    targetType: 'version',
    targetId: row.id,
    after: { quarantined },
  });
  return {
    url,
    fileName,
    quarantined,
    expiresAt: new Date(ctx.clock.now().getTime() + LINK_SECONDS * 1000).toISOString(),
  };
}
