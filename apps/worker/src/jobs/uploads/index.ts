/**
 * Upload jobs (WP-31, PLAN §2.8, §2.9):
 *
 * - `cleanup.uploads` (hourly, `20 * * * *`): uploads past their 24 h lifetime that were never
 *   published are marked `expired`, their multipart upload is aborted and the `incoming/` object is
 *   deleted (`expireUploads` of core). Without R2 credentials only the rows change; the private
 *   bucket's 1-day lifecycle rule removes the objects anyway.
 *
 * Storage is built lazily from the worker env (validated at start-up by `env.ts`).
 */
import { createStorage, type ObjectStorage, storageConfigFromEnv } from '@sotf/core/storage/index';
import { expireUploads } from '@sotf/core/uploads/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';
import { parseWorkerEnv } from '../../env.ts';

let storage: ObjectStorage | null | undefined;

/** Storage of this worker process (null when R2 is not configured). */
export function workerStorage(): ObjectStorage | null {
  if (storage === undefined) {
    const config = storageConfigFromEnv(parseWorkerEnv());
    storage = config ? createStorage(config) : null;
  }
  return storage;
}

/** Tests: use this storage instead of the env's. */
export function setWorkerStorageForTests(value: ObjectStorage | null | undefined): void {
  storage = value;
}

export default defineJobGroup({
  name: 'uploads',
  jobs: [
    defineJob({
      queue: 'cleanup.uploads',
      handler: async (_data, { ctx }) => expireUploads(ctx, workerStorage()),
    }),
  ],
});
