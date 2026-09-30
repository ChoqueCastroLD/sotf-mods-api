/**
 * S3 access of the R2 operator tools (B17, the sample copier): an `S3Client` built from the same
 * `R2_*` variables as the apps (PLAN §11.4; the root `.env` is loaded), full `HEAD` results (every
 * header B17 must carry over on an in-place copy) and small ranged reads for sniffing.
 *
 * Production safety: `isLocalEndpoint` tells a local emulator (SeaweedFS of `pnpm infra:up`) from
 * R2; every writing command refuses a non-local endpoint unless the operator confirms the bucket
 * name explicitly (`--confirm-bucket sotf-mods`).
 */
import {
  CopyObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  type HeadObjectCommandOutput,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { encodeStorageKey } from '@sotf/core/storage/keys';
import { loadRootDotEnv } from '@sotf/db/env';

export interface R2Target {
  endpoint: string;
  bucket: string;
  accessKeyId: string;
  secretAccessKey: string;
  /** True for 127.0.0.1/localhost/::1 endpoints (the local emulator). */
  local: boolean;
}

export function isLocalEndpoint(endpoint: string): boolean {
  try {
    const host = new URL(endpoint).hostname;
    return ['localhost', '127.0.0.1', '::1', '[::1]'].includes(host);
  } catch {
    return false;
  }
}

/** Reads `R2_ENDPOINT` (or `R2_ACCOUNT_ID`), the key pair and `R2_BUCKET` (overridable). */
export function r2TargetFromEnv(
  overrides: { bucket?: string | undefined; endpoint?: string | undefined } = {},
): R2Target {
  loadRootDotEnv();
  const env = process.env;
  const endpoint =
    overrides.endpoint ??
    (env.R2_ENDPOINT?.trim() ||
      (env.R2_ACCOUNT_ID?.trim() ? `https://${env.R2_ACCOUNT_ID.trim()}.r2.cloudflarestorage.com` : ''));
  const accessKeyId = env.R2_ACCESS_KEY_ID?.trim() ?? '';
  const secretAccessKey = env.R2_SECRET_ACCESS_KEY?.trim() ?? '';
  const bucket = overrides.bucket ?? env.R2_BUCKET?.trim() ?? 'sotf-mods';
  if (!endpoint || !accessKeyId || !secretAccessKey) {
    throw new Error(
      'R2 is not configured: set R2_ENDPOINT (or R2_ACCOUNT_ID), R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY',
    );
  }
  return {
    endpoint: endpoint.replace(/\/+$/, ''),
    bucket,
    accessKeyId,
    secretAccessKey,
    local: isLocalEndpoint(endpoint),
  };
}

export function s3ClientFor(target: R2Target): S3Client {
  return new S3Client({
    endpoint: target.endpoint,
    region: 'auto',
    forcePathStyle: true,
    credentials: { accessKeyId: target.accessKeyId, secretAccessKey: target.secretAccessKey },
    // R2 rejects the CRC headers newer SDKs add by default.
    requestChecksumCalculation: 'WHEN_REQUIRED',
    responseChecksumValidation: 'WHEN_REQUIRED',
    maxAttempts: 4,
    requestHandler: { requestTimeout: 60_000, connectionTimeout: 5_000 },
  });
}

/** Everything a `HEAD` says that an in-place `REPLACE` copy would otherwise drop. */
export interface FullHead {
  size: number;
  etag: string | null;
  lastModified: string | null;
  contentType: string | null;
  contentDisposition: string | null;
  cacheControl: string | null;
  contentEncoding: string | null;
  contentLanguage: string | null;
  expires: string | null;
  metadata: Record<string, string>;
}

function statusOf(error: unknown): number | undefined {
  return (error as { $metadata?: { httpStatusCode?: number } } | null)?.$metadata?.httpStatusCode;
}

export function isNotFound(error: unknown): boolean {
  const name = (error as { name?: string } | null)?.name;
  return statusOf(error) === 404 || name === 'NotFound' || name === 'NoSuchKey';
}

function fullHeadOf(out: HeadObjectCommandOutput): FullHead {
  return {
    size: Number(out.ContentLength ?? 0),
    etag: out.ETag ?? null,
    lastModified: out.LastModified ? out.LastModified.toISOString() : null,
    contentType: out.ContentType ?? null,
    contentDisposition: out.ContentDisposition ?? null,
    cacheControl: out.CacheControl ?? null,
    contentEncoding: out.ContentEncoding ?? null,
    contentLanguage: out.ContentLanguage ?? null,
    expires: out.ExpiresString ?? (out.Expires ? out.Expires.toUTCString() : null),
    metadata: out.Metadata ?? {},
  };
}

/** `HEAD` of `bucket/key`, or null when the object does not exist. */
export async function headObject(client: S3Client, bucket: string, key: string): Promise<FullHead | null> {
  try {
    return fullHeadOf(await client.send(new HeadObjectCommand({ Bucket: bucket, Key: key })));
  } catch (error) {
    if (isNotFound(error)) return null;
    throw error;
  }
}

/** The first `bytes` bytes of an object (content sniffing). */
export async function readPrefix(client: S3Client, bucket: string, key: string, bytes: number): Promise<Buffer> {
  const out = await client.send(new GetObjectCommand({ Bucket: bucket, Key: key, Range: `bytes=0-${bytes - 1}` }));
  if (!out.Body) return Buffer.alloc(0);
  return Buffer.from(await out.Body.transformToByteArray());
}

export interface MetadataRewrite {
  contentType: string;
  contentDisposition: string | null;
  cacheControl: string | null;
}

/**
 * In-place `CopyObject` with `MetadataDirective: REPLACE`: the bytes are not transferred and, for
 * single-part objects, the ETag (MD5) stays the same. Guarded by `CopySourceIfMatch` with the ETag
 * of the "before" manifest, so an object that changed since then is refused (412) instead of being
 * relabelled blindly. Headers not being rewritten (encoding, language, expires, user metadata) are
 * carried over from `before`.
 */
export async function rewriteMetadata(
  client: S3Client,
  bucket: string,
  key: string,
  before: FullHead,
  next: MetadataRewrite,
): Promise<void> {
  await client.send(
    new CopyObjectCommand({
      Bucket: bucket,
      Key: key,
      CopySource: `${bucket}/${encodeStorageKey(key)}`,
      ...(before.etag ? { CopySourceIfMatch: before.etag } : {}),
      MetadataDirective: 'REPLACE',
      ContentType: next.contentType,
      ...(next.contentDisposition ? { ContentDisposition: next.contentDisposition } : {}),
      ...(next.cacheControl ? { CacheControl: next.cacheControl } : {}),
      ...(before.contentEncoding ? { ContentEncoding: before.contentEncoding } : {}),
      ...(before.contentLanguage ? { ContentLanguage: before.contentLanguage } : {}),
      ...(before.expires && !Number.isNaN(Date.parse(before.expires)) ? { Expires: new Date(before.expires) } : {}),
      Metadata: before.metadata,
    }),
  );
}

/** `PUT` of a whole object (the sample copier, local emulator only). */
export async function putObject(
  client: S3Client,
  bucket: string,
  key: string,
  body: Buffer,
  headers: { contentType: string | null; contentDisposition: string | null; cacheControl: string | null },
): Promise<void> {
  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentLength: body.length,
      ...(headers.contentType ? { ContentType: headers.contentType } : {}),
      ...(headers.contentDisposition ? { ContentDisposition: headers.contentDisposition } : {}),
      ...(headers.cacheControl ? { CacheControl: headers.cacheControl } : {}),
    }),
  );
}

/** Refuses writes to a non-local endpoint unless `--confirm-bucket <bucket>` names the bucket. */
export function assertWritable(target: R2Target, confirmBucket: string | undefined): void {
  if (target.local) return;
  if (confirmBucket !== target.bucket) {
    throw new Error(
      `refusing to write to bucket "${target.bucket}" on ${new URL(target.endpoint).host}: ` +
        `pass --confirm-bucket ${target.bucket} after reviewing the dry-run manifest`,
    );
  }
}
