# Uploads (`@sotf/core/uploads/index`, WP-31)

Direct-to-R2 uploads (PLAN §2.8 "Subida"); no byte crosses our servers.

| Step | Function | What |
|---|---|---|
| `POST /api/v2/uploads` | `createUpload` | purpose/extension/type/size (`UPLOAD_LIMITS`; verified creators 500 MB) + quota → `Upload` row (24 h) → presigned PUT (15 min) to `sotf-mods-private/incoming/{userId}/{uploadId}` with the **canonical** type signed (`application/x-zip-compressed` → `application/zip`); multipart (16 MB parts) above 100 MB |
| `POST /api/v2/uploads/:id/complete` | `completeUpload` | (multipart: complete with the ETags) → HEAD → size and type must match, else the object is deleted and the upload `rejected` (409/413/415) → `processing` + `inspection.run` (zips, builds) or a pending `Media` row + `media.process` (images), in one transaction. A second call returns the state. |
| `GET /api/v2/uploads/:id` | `getUpload` | owner only (others get 404) |
| publication (WP-40) | `finalizeUpload` | `CopyObject` to the public key with `Content-Type`, `Content-Disposition: attachment` and the immutable cache, verify the size, delete `incoming/`; idempotent per key |
| flagged file (WP-84) | `quarantineUpload` | moves it to `quarantine/{uploadId}` |
| `cleanup.uploads` (hourly) | `expireUploads` | past `expiresAt` and never published → `expired`, multipart aborted, object deleted |

Quota (v2 decision): at most 10 open uploads per user and 5 GiB declared per 24 h (429 with
`Retry-After`), on top of the `uploads` bucket (20 requests/day). Image limits: image 10 MB,
avatar 5 MB, banner 10 MB, comment image 5 MB (contract `UPLOAD_LIMITS`).

A single presigned PUT stays valid for 15 minutes **after** `complete`, so the object could be swapped
once it was checked. `complete` therefore records the object's ETag (`resultRef.etag`): the inspection
reads are conditional on it (`If-Match`), it HEADs the object again when it is done, and the copies to
`quarantine/` and to the public key (`finalizeUpload`) use `CopySourceIfMatch`. A swapped object makes
the upload `rejected` (`object_changed`) or the copy fail with 409. Multipart uploads cannot be swapped
(the multipart upload no longer exists once completed).

`Upload.resultRef` carries `{ multipart?, etag?, mediaId?, inspection?, final?, quarantine? }`. The
inspection job writes `inspection` in the `UploadInspectionDTO` shape (it is validated when read)
and moves the upload to `ready` or `rejected`; `media.process` reads `Media.sourceBucket/sourceKey`.

Tests: `rules.test.ts` (unit) and `apps/api/src/modules/uploads/uploads.int.test.ts` (SeaweedFS +
PostgreSQL: wrong type → 403, wrong size → 403 / rejected, multipart, finalisation, expiry).
