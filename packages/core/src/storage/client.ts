/**
 * S3 client for Cloudflare R2 and the local SeaweedFS emulator (PLAN §2.8, §11.6).
 *
 * - Path-style addressing (`<endpoint>/<bucket>/<key>`) works on both R2 and SeaweedFS.
 * - Flexible checksums only when required: R2 rejects the CRC headers newer SDKs add by default
 *   to presigned PUTs, and a presigned URL cannot carry a checksum of bytes it has not seen.
 * - Presigned PUTs sign `Content-Type` and `Content-Length`: the client must send exactly the
 *   declared type and size or the store answers 403 (SignatureDoesNotMatch).
 * - `copy()` uses `CopyObject` (server side, also across buckets of one account) and falls back
 *   to a streaming GET → PUT through the worker when the store refuses the copy (`copyMode: 'auto'`).
 */
import type { Readable } from 'node:stream';
import {
  AbortMultipartUploadCommand,
  CompleteMultipartUploadCommand,
  CopyObjectCommand,
  CreateMultipartUploadCommand,
  DeleteObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
  UploadPartCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { type DomainError, errors } from '../kernel/errors.ts';
import { attachmentDisposition } from './disposition.ts';
import { encodeStorageKey, publicObjectUrl } from './keys.ts';

export type CopyMode = 'server' | 'stream' | 'auto';

export interface StorageConfig {
  /** S3 endpoint (`https://<account>.r2.cloudflarestorage.com` or the emulator). */
  endpoint: string;
  /**
   * Endpoint put in presigned upload URLs (PUT and multipart parts) when browsers cannot reach
   * `endpoint` (e.g. the e2e stack, where the API talks to `http://seaweedfs:8333` but the browser
   * to `http://127.0.0.1:47533`). Empty in production: R2 presigned URLs use `endpoint`.
   */
  presignEndpoint?: string;
  accessKeyId: string;
  secretAccessKey: string;
  /** Public bucket served by `publicBaseUrl` (`sotf-mods`). */
  publicBucket: string;
  /** Private bucket (`sotf-mods-private`: incoming/, quarantine/, exports/). */
  privateBucket: string;
  /** `https://r2.sotf-mods.com` (no trailing slash). */
  publicBaseUrl: string;
  region?: string;
  copyMode?: CopyMode;
  /** Socket idle timeout in ms (default 30 s). */
  requestTimeoutMs?: number;
}

/** The R2_* variables of the apps' env (PLAN §11.4). */
export interface StorageEnv {
  R2_ACCOUNT_ID?: string | undefined;
  R2_ENDPOINT?: string | undefined;
  /** Browser-reachable S3 endpoint for presigned URLs (local/e2e stacks only). */
  R2_PUBLIC_ENDPOINT?: string | undefined;
  R2_ACCESS_KEY_ID?: string | undefined;
  R2_SECRET_ACCESS_KEY?: string | undefined;
  R2_BUCKET: string;
  R2_PRIVATE_BUCKET: string;
  R2_PUBLIC_BASE_URL: string;
}

/** Storage config from the env, or null when R2 is not configured (no credentials/endpoint). */
export function storageConfigFromEnv(env: StorageEnv): StorageConfig | null {
  const endpoint =
    env.R2_ENDPOINT ?? (env.R2_ACCOUNT_ID ? `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com` : null);
  if (!endpoint || !env.R2_ACCESS_KEY_ID || !env.R2_SECRET_ACCESS_KEY) return null;
  const presignEndpoint = env.R2_PUBLIC_ENDPOINT?.trim().replace(/\/+$/, '');
  return {
    endpoint: endpoint.replace(/\/+$/, ''),
    ...(presignEndpoint ? { presignEndpoint } : {}),
    accessKeyId: env.R2_ACCESS_KEY_ID,
    secretAccessKey: env.R2_SECRET_ACCESS_KEY,
    publicBucket: env.R2_BUCKET,
    privateBucket: env.R2_PRIVATE_BUCKET,
    publicBaseUrl: env.R2_PUBLIC_BASE_URL.replace(/\/+$/, ''),
  };
}

export interface PresignedPut {
  url: string;
  /** Headers that are part of the signature: send them exactly. */
  headers: Record<string, string>;
  expiresAt: Date;
}

export interface ObjectHead {
  size: number;
  contentType: string | null;
  etag: string | null;
  contentDisposition: string | null;
  cacheControl: string | null;
  metadata: Record<string, string>;
}

export interface CopyTarget {
  bucket: string;
  key: string;
  contentType: string;
  contentDisposition?: string;
  cacheControl?: string;
}

export interface ObjectStorage {
  readonly config: StorageConfig;
  publicUrl(key: string): string;
  presignPut(input: {
    bucket: string;
    key: string;
    contentType: string;
    contentLength: number;
    expiresInSeconds: number;
  }): Promise<PresignedPut>;
  createMultipart(input: { bucket: string; key: string; contentType: string }): Promise<string>;
  presignPart(input: {
    bucket: string;
    key: string;
    uploadId: string;
    partNumber: number;
    contentLength: number;
    expiresInSeconds: number;
  }): Promise<string>;
  completeMultipart(input: {
    bucket: string;
    key: string;
    uploadId: string;
    parts: ReadonlyArray<{ partNumber: number; etag: string }>;
  }): Promise<void>;
  abortMultipart(input: { bucket: string; key: string; uploadId: string }): Promise<void>;
  head(bucket: string, key: string): Promise<ObjectHead | null>;
  get(bucket: string, key: string): Promise<{ body: Readable; head: ObjectHead }>;
  put(input: CopyTarget & { body: Buffer | Uint8Array | string | Readable; contentLength?: number }): Promise<void>;
  /** Server-side copy (or streaming fallback) with the target's metadata replaced. Returns the mode used. */
  copy(source: { bucket: string; key: string }, target: CopyTarget): Promise<'server' | 'stream'>;
  delete(bucket: string, key: string): Promise<void>;
  /** Presigned GET (exports, private previews). */
  presignGet(bucket: string, key: string, expiresInSeconds: number, downloadName?: string): Promise<string>;
  destroy(): void;
}

interface SdkError {
  name?: string;
  Code?: string;
  $metadata?: { httpStatusCode?: number };
}

function statusOf(error: unknown): number | undefined {
  return (error as SdkError | null)?.$metadata?.httpStatusCode;
}

function isNotFound(error: unknown): boolean {
  const e = error as SdkError | null;
  return statusOf(error) === 404 || e?.name === 'NotFound' || e?.name === 'NoSuchKey' || e?.Code === 'NoSuchKey';
}

function isNoSuchUpload(error: unknown): boolean {
  const e = error as SdkError | null;
  return e?.name === 'NoSuchUpload' || e?.Code === 'NoSuchUpload';
}

/** Errors after which a server-side copy is retried as a stream (the store refuses the copy). */
function copyUnsupported(error: unknown): boolean {
  const e = error as SdkError | null;
  const status = statusOf(error);
  return (
    status === 501 ||
    e?.name === 'NotImplemented' ||
    e?.Code === 'NotImplemented' ||
    // Cross-bucket copies refused by policy look like AccessDenied on some stores.
    ((e?.name === 'AccessDenied' || e?.Code === 'AccessDenied') && status === 403)
  );
}

function storageFailure(what: string, error: unknown): DomainError {
  return errors.unavailable(`Storage ${what} failed (${(error as SdkError)?.name ?? 'error'})`);
}

function headOf(output: {
  ContentLength?: number | undefined;
  ContentType?: string | undefined;
  ETag?: string | undefined;
  ContentDisposition?: string | undefined;
  CacheControl?: string | undefined;
  Metadata?: Record<string, string> | undefined;
}): ObjectHead {
  return {
    size: Number(output.ContentLength ?? 0),
    contentType: output.ContentType ?? null,
    etag: output.ETag ?? null,
    contentDisposition: output.ContentDisposition ?? null,
    cacheControl: output.CacheControl ?? null,
    metadata: output.Metadata ?? {},
  };
}

function s3Client(config: StorageConfig, endpoint: string): S3Client {
  return new S3Client({
    endpoint,
    region: config.region ?? 'auto',
    forcePathStyle: true,
    credentials: { accessKeyId: config.accessKeyId, secretAccessKey: config.secretAccessKey },
    requestChecksumCalculation: 'WHEN_REQUIRED',
    responseChecksumValidation: 'WHEN_REQUIRED',
    maxAttempts: 3,
    requestHandler: { requestTimeout: config.requestTimeoutMs ?? 30_000, connectionTimeout: 5_000 },
  });
}

export class S3Storage implements ObjectStorage {
  readonly config: StorageConfig;
  readonly #client: S3Client;
  /** Signs the upload URLs handed to browsers (same client unless `presignEndpoint` is set). */
  readonly #presigner: S3Client;

  constructor(config: StorageConfig) {
    this.config = config;
    this.#client = s3Client(config, config.endpoint);
    this.#presigner =
      config.presignEndpoint && config.presignEndpoint !== config.endpoint
        ? s3Client(config, config.presignEndpoint)
        : this.#client;
  }

  publicUrl(key: string): string {
    return publicObjectUrl(this.config.publicBaseUrl, key);
  }

  async presignPut(input: {
    bucket: string;
    key: string;
    contentType: string;
    contentLength: number;
    expiresInSeconds: number;
  }): Promise<PresignedPut> {
    const command = new PutObjectCommand({
      Bucket: input.bucket,
      Key: input.key,
      ContentType: input.contentType,
      ContentLength: input.contentLength,
    });
    const url = await getSignedUrl(this.#presigner, command, {
      expiresIn: input.expiresInSeconds,
      signableHeaders: new Set(['content-type', 'content-length']),
    });
    return {
      url,
      headers: { 'content-type': input.contentType, 'content-length': String(input.contentLength) },
      expiresAt: new Date(Date.now() + input.expiresInSeconds * 1000),
    };
  }

  async createMultipart(input: { bucket: string; key: string; contentType: string }): Promise<string> {
    try {
      const out = await this.#client.send(
        new CreateMultipartUploadCommand({ Bucket: input.bucket, Key: input.key, ContentType: input.contentType }),
      );
      if (!out.UploadId) throw new Error('no UploadId');
      return out.UploadId;
    } catch (error) {
      throw storageFailure('multipart creation', error);
    }
  }

  async presignPart(input: {
    bucket: string;
    key: string;
    uploadId: string;
    partNumber: number;
    contentLength: number;
    expiresInSeconds: number;
  }): Promise<string> {
    const command = new UploadPartCommand({
      Bucket: input.bucket,
      Key: input.key,
      UploadId: input.uploadId,
      PartNumber: input.partNumber,
      ContentLength: input.contentLength,
    });
    return getSignedUrl(this.#presigner, command, {
      expiresIn: input.expiresInSeconds,
      signableHeaders: new Set(['content-length']),
    });
  }

  async completeMultipart(input: {
    bucket: string;
    key: string;
    uploadId: string;
    parts: ReadonlyArray<{ partNumber: number; etag: string }>;
  }): Promise<void> {
    const parts = [...input.parts]
      .sort((a, b) => a.partNumber - b.partNumber)
      .map((p) => ({ PartNumber: p.partNumber, ETag: p.etag }));
    try {
      await this.#client.send(
        new CompleteMultipartUploadCommand({
          Bucket: input.bucket,
          Key: input.key,
          UploadId: input.uploadId,
          MultipartUpload: { Parts: parts },
        }),
      );
    } catch (error) {
      const status = statusOf(error);
      if (isNoSuchUpload(error) || status === 404) throw errors.conflict('The multipart upload does not exist anymore');
      if (status === 400) throw errors.conflict('The uploaded parts do not match (missing part or wrong ETag)');
      throw storageFailure('multipart completion', error);
    }
  }

  async abortMultipart(input: { bucket: string; key: string; uploadId: string }): Promise<void> {
    try {
      await this.#client.send(
        new AbortMultipartUploadCommand({ Bucket: input.bucket, Key: input.key, UploadId: input.uploadId }),
      );
    } catch (error) {
      if (isNoSuchUpload(error) || isNotFound(error)) return;
      throw storageFailure('multipart abort', error);
    }
  }

  async head(bucket: string, key: string): Promise<ObjectHead | null> {
    try {
      return headOf(await this.#client.send(new HeadObjectCommand({ Bucket: bucket, Key: key })));
    } catch (error) {
      if (isNotFound(error)) return null;
      throw storageFailure('HEAD', error);
    }
  }

  async get(bucket: string, key: string): Promise<{ body: Readable; head: ObjectHead }> {
    try {
      const out = await this.#client.send(new GetObjectCommand({ Bucket: bucket, Key: key }));
      if (!out.Body) throw new Error('empty body');
      return { body: out.Body as Readable, head: headOf(out) };
    } catch (error) {
      if (isNotFound(error)) throw errors.notFound('Object');
      throw storageFailure('GET', error);
    }
  }

  async put(
    input: CopyTarget & { body: Buffer | Uint8Array | string | Readable; contentLength?: number },
  ): Promise<void> {
    try {
      await this.#client.send(
        new PutObjectCommand({
          Bucket: input.bucket,
          Key: input.key,
          Body: input.body,
          ContentType: input.contentType,
          ...(input.contentLength === undefined ? {} : { ContentLength: input.contentLength }),
          ...(input.contentDisposition ? { ContentDisposition: input.contentDisposition } : {}),
          ...(input.cacheControl ? { CacheControl: input.cacheControl } : {}),
        }),
      );
    } catch (error) {
      throw storageFailure('PUT', error);
    }
  }

  async copy(source: { bucket: string; key: string }, target: CopyTarget): Promise<'server' | 'stream'> {
    const mode = this.config.copyMode ?? 'auto';
    if (mode !== 'stream') {
      try {
        await this.#client.send(
          new CopyObjectCommand({
            Bucket: target.bucket,
            Key: target.key,
            CopySource: `${source.bucket}/${encodeStorageKey(source.key)}`,
            MetadataDirective: 'REPLACE',
            ContentType: target.contentType,
            ...(target.contentDisposition ? { ContentDisposition: target.contentDisposition } : {}),
            ...(target.cacheControl ? { CacheControl: target.cacheControl } : {}),
          }),
        );
        return 'server';
      } catch (error) {
        if (isNotFound(error)) throw errors.notFound('Source object');
        if (mode === 'server' || !copyUnsupported(error)) throw storageFailure('copy', error);
      }
    }
    const { body, head } = await this.get(source.bucket, source.key);
    await this.put({ ...target, body, contentLength: head.size });
    return 'stream';
  }

  async delete(bucket: string, key: string): Promise<void> {
    try {
      await this.#client.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }));
    } catch (error) {
      if (isNotFound(error)) return;
      throw storageFailure('DELETE', error);
    }
  }

  async presignGet(bucket: string, key: string, expiresInSeconds: number, downloadName?: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
      ...(downloadName ? { ResponseContentDisposition: attachmentDisposition(downloadName) } : {}),
    });
    // Read by the API/worker (inspection range reads): signed for the internal endpoint.
    return getSignedUrl(this.#client, command, { expiresIn: expiresInSeconds });
  }

  destroy(): void {
    this.#client.destroy();
    if (this.#presigner !== this.#client) this.#presigner.destroy();
  }
}

export function createStorage(config: StorageConfig): ObjectStorage {
  return new S3Storage(config);
}
