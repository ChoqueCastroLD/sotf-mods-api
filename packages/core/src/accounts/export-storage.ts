/**
 * Where data exports live (T0-14, PLAN §9.3): ZIPs in the **private** bucket (`R2_PRIVATE_BUCKET`,
 * key `exports/<userId>/<exportId>.zip`), served only through presigned GETs valid 24 h, deleted
 * when they expire. `S3ExportStorage` talks to R2 (or the local S3 emulator); `MemoryExportStorage`
 * backs tests.
 */
import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export interface ExportStorage {
  put(key: string, body: Uint8Array, contentType: string, filename: string): Promise<void>;
  /** Presigned GET URL valid `expiresInSeconds`. */
  presignGet(key: string, expiresInSeconds: number): Promise<string>;
  delete(key: string): Promise<void>;
}

export interface S3StorageConfig {
  R2_ACCOUNT_ID?: string | undefined;
  R2_ENDPOINT?: string | undefined;
  R2_ACCESS_KEY_ID?: string | undefined;
  R2_SECRET_ACCESS_KEY?: string | undefined;
  R2_PRIVATE_BUCKET: string;
}

/** Object key of an export. */
export function exportKey(userId: number, exportId: string): string {
  return `exports/${userId}/${exportId}.zip`;
}

export class S3ExportStorage implements ExportStorage {
  readonly #client: S3Client;
  readonly #bucket: string;

  constructor(config: S3StorageConfig) {
    const endpoint =
      config.R2_ENDPOINT ??
      (config.R2_ACCOUNT_ID ? `https://${config.R2_ACCOUNT_ID}.r2.cloudflarestorage.com` : undefined);
    if (!endpoint || !config.R2_ACCESS_KEY_ID || !config.R2_SECRET_ACCESS_KEY) {
      throw new Error('data exports need R2_ENDPOINT or R2_ACCOUNT_ID plus R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY');
    }
    this.#client = new S3Client({
      region: 'auto',
      endpoint,
      forcePathStyle: Boolean(config.R2_ENDPOINT),
      credentials: { accessKeyId: config.R2_ACCESS_KEY_ID, secretAccessKey: config.R2_SECRET_ACCESS_KEY },
    });
    this.#bucket = config.R2_PRIVATE_BUCKET;
  }

  async put(key: string, body: Uint8Array, contentType: string, filename: string): Promise<void> {
    await this.#client.send(
      new PutObjectCommand({
        Bucket: this.#bucket,
        Key: key,
        Body: body,
        ContentType: contentType,
        ContentDisposition: `attachment; filename="${filename.replace(/[^\w.-]/g, '_')}"`,
        CacheControl: 'private, no-store',
      }),
    );
  }

  presignGet(key: string, expiresInSeconds: number): Promise<string> {
    return getSignedUrl(this.#client, new GetObjectCommand({ Bucket: this.#bucket, Key: key }), {
      expiresIn: expiresInSeconds,
    });
  }

  async delete(key: string): Promise<void> {
    await this.#client.send(new DeleteObjectCommand({ Bucket: this.#bucket, Key: key }));
  }
}

/** In-memory storage (tests). URLs are `https://storage.invalid/<key>?expires=<seconds>`. */
export class MemoryExportStorage implements ExportStorage {
  readonly objects = new Map<string, { body: Uint8Array; contentType: string; filename: string }>();

  async put(key: string, body: Uint8Array, contentType: string, filename: string): Promise<void> {
    this.objects.set(key, { body, contentType, filename });
  }

  async presignGet(key: string, expiresInSeconds: number): Promise<string> {
    return `https://storage.invalid/${key}?expires=${expiresInSeconds}`;
  }

  async delete(key: string): Promise<void> {
    this.objects.delete(key);
  }
}
