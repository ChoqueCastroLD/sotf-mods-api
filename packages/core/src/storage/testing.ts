/**
 * S3 emulator for integration tests (PLAN §10.1: "SeaweedFS en Testcontainers"): a throwaway
 * SeaweedFS with the S3 gateway, the app identity and anonymous read on the public bucket (like
 * `r2.sotf-mods.com`), plus the two buckets. `SOTF_TEST_S3_ENDPOINT` reuses a running emulator
 * instead (e.g. `http://127.0.0.1:47333` of `pnpm infra:up`), with unique bucket names per call.
 *
 *   const s3 = await startTestS3();
 *   const storage = createStorage(s3.config);
 *   …
 *   await s3.stop();
 */
import { randomUUID } from 'node:crypto';
import { CreateBucketCommand, S3Client } from '@aws-sdk/client-s3';
import { GenericContainer, type StartedTestContainer, Wait } from 'testcontainers';
import type { StorageConfig } from './client.ts';

export const TEST_SEAWEEDFS_IMAGE = 'chrislusf/seaweedfs:4.48';
const ACCESS_KEY = 'sotf-test-access-key';
const SECRET_KEY = 'sotf-test-secret-key';

export interface TestS3 {
  config: StorageConfig;
  /** Env variables of the apps pointing at this emulator. */
  env: Record<string, string>;
  stop(): Promise<void>;
}

async function createBuckets(endpoint: string, accessKeyId: string, secretAccessKey: string, buckets: string[]) {
  const client = new S3Client({
    endpoint,
    region: 'us-east-1',
    forcePathStyle: true,
    credentials: { accessKeyId, secretAccessKey },
  });
  try {
    for (const bucket of buckets) {
      for (let attempt = 0; ; attempt += 1) {
        try {
          await client.send(new CreateBucketCommand({ Bucket: bucket }));
          break;
        } catch (error) {
          const name = (error as { name?: string }).name;
          if (name === 'BucketAlreadyOwnedByYou' || name === 'BucketAlreadyExists') break;
          if (attempt >= 30) throw error;
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
    }
  } finally {
    client.destroy();
  }
}

export async function startTestS3(): Promise<TestS3> {
  const suffix = randomUUID().slice(0, 8);
  const publicBucket = `sotf-mods-${suffix}`;
  const privateBucket = `sotf-mods-private-${suffix}`;

  const external = process.env.SOTF_TEST_S3_ENDPOINT?.trim();
  if (external) {
    const accessKeyId = process.env.SOTF_TEST_S3_ACCESS_KEY ?? 'sotf-dev-access-key';
    const secretAccessKey = process.env.SOTF_TEST_S3_SECRET_KEY ?? 'sotf-dev-secret-key';
    await createBuckets(external, accessKeyId, secretAccessKey, [publicBucket, privateBucket]);
    return build(external.replace(/\/+$/, ''), accessKeyId, secretAccessKey, publicBucket, privateBucket, null);
  }

  const identities = {
    identities: [
      {
        name: 'sotf-test',
        credentials: [{ accessKey: ACCESS_KEY, secretKey: SECRET_KEY }],
        actions: ['Admin', 'Read', 'List', 'Tagging', 'Write'],
      },
      { name: 'anonymous', actions: [`Read:${publicBucket}`] },
    ],
  };
  const container = await new GenericContainer(TEST_SEAWEEDFS_IMAGE)
    .withCommand([
      'server',
      '-dir=/data',
      '-ip.bind=0.0.0.0',
      '-master.volumeSizeLimitMB=64',
      '-volume.max=0',
      '-s3',
      '-s3.port=8333',
      '-s3.config=/etc/seaweedfs/s3.json',
    ])
    .withCopyContentToContainer([{ content: JSON.stringify(identities), target: '/etc/seaweedfs/s3.json' }])
    .withExposedPorts(8333)
    .withWaitStrategy(Wait.forHttp('/healthz', 8333).forStatusCode(200).withStartupTimeout(120_000))
    .start();
  const endpoint = `http://${container.getHost()}:${container.getMappedPort(8333)}`;
  await createBuckets(endpoint, ACCESS_KEY, SECRET_KEY, [publicBucket, privateBucket]);
  return build(endpoint, ACCESS_KEY, SECRET_KEY, publicBucket, privateBucket, container);
}

function build(
  endpoint: string,
  accessKeyId: string,
  secretAccessKey: string,
  publicBucket: string,
  privateBucket: string,
  container: StartedTestContainer | null,
): TestS3 {
  const publicBaseUrl = `${endpoint}/${publicBucket}`;
  return {
    config: { endpoint, accessKeyId, secretAccessKey, publicBucket, privateBucket, publicBaseUrl },
    env: {
      R2_ENDPOINT: endpoint,
      R2_ACCESS_KEY_ID: accessKeyId,
      R2_SECRET_ACCESS_KEY: secretAccessKey,
      R2_BUCKET: publicBucket,
      R2_PRIVATE_BUCKET: privateBucket,
      R2_PUBLIC_BASE_URL: publicBaseUrl,
    },
    async stop() {
      await container?.stop();
    },
  };
}
