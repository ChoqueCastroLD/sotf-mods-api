# Storage (`@sotf/core/storage/index`, WP-31)

S3 client for Cloudflare R2 and the local SeaweedFS emulator (PLAN §2.8, §11.6).

- `storageConfigFromEnv(env)` → `StorageConfig | null` (null without credentials: callers answer
  503 or skip object work). `R2_ENDPOINT` (emulator) wins over `R2_ACCOUNT_ID`.
- `createStorage(config)` → `ObjectStorage`: `presignPut` (signs `Content-Type` **and**
  `Content-Length`: any other type or size is a 403 from the store), multipart (`createMultipart`,
  `presignPart`, `completeMultipart`, `abortMultipart`), `head`, `get`, `put`, `copy`, `delete`,
  `presignGet`.
- `copy()` is a server-side `CopyObject` with `MetadataDirective: REPLACE` (R2 documents copies
  across buckets of one account); with `copyMode: 'auto'` (default) a refused copy (`501`,
  `NotImplemented`, `AccessDenied`) falls back to a streaming GET → PUT. Both paths are tested
  against SeaweedFS; production R2 has not been exercised from here (read-only rule).
- Keys (`keys.ts`): new keys only use `[a-z0-9._/-]` — `mods/{modId}/{versionId}/{safe-name}-{version}.zip`,
  `builds/…/{safe-name}.json`, `media/{mediaId}/original.webp` and `/{w}.webp` (older media: `original.{png|jpg|gif}` and `/{w}.avif` until B22),
  `og/{type}/{id}-{hash}.png`, private `incoming/{userId}/{uploadId}`, `quarantine/{uploadId}`,
  `exports/{userId}/{exportId}.zip`. Legacy keys are never renamed.
- URLs: `publicObjectUrl(base, key)` = `base + '/' + key.split('/').map(encodeURIComponent).join('/')`
  (space → `%20`, `+` → `%2B`, `'()` raw). `storageKeyFromPublicUrl` reads legacy `downloadUrl`s.
- `attachmentDisposition(name)`: `attachment; filename="<ascii>"; filename*=UTF-8''<rfc5987>`;
  `IMMUTABLE_CACHE_CONTROL` for final objects.
- Tests: `storage.test.ts` (unit); `testing.ts` → `startTestS3()` starts SeaweedFS in
  Testcontainers (or reuses `SOTF_TEST_S3_ENDPOINT`, e.g. `http://127.0.0.1:47333` from
  `pnpm infra:up`) with anonymous read on the public bucket, like `r2.sotf-mods.com`.
