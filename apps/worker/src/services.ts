/**
 * Services of one worker process, handed to every job and subscriber as `JobContext.services`
 * (WP-31/WP-40 backlogs): the validated environment and the object storage, built once and
 * lazily. Jobs never re-parse `process.env`; a test worker (`createWorker({ env })`) runs its jobs
 * with the environment it was given.
 */
import { createStorage, type ObjectStorage, storageConfigFromEnv } from '@sotf/core/storage/index';
import type { WorkerEnv } from './env.ts';

export interface WorkerServices {
  /** Validated environment of this worker process. */
  readonly env: WorkerEnv;
  /** R2 / local S3 storage, created on first use; null when R2 is not configured. */
  storage(): ObjectStorage | null;
}

let storageForTests: ObjectStorage | null | undefined;

/** Tests: every worker of this process uses this storage (undefined restores the env's). */
export function setWorkerStorageForTests(value: ObjectStorage | null | undefined): void {
  storageForTests = value;
}

export function createWorkerServices(
  env: WorkerEnv,
  overrides: { storage?: ObjectStorage | null } = {},
): WorkerServices {
  let storage: ObjectStorage | null | undefined = overrides.storage;
  return {
    env,
    storage() {
      if (storageForTests !== undefined) return storageForTests;
      if (storage === undefined) {
        const config = storageConfigFromEnv(env);
        storage = config ? createStorage(config) : null;
      }
      return storage;
    },
  };
}
