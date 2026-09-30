/**
 * IndexNow job (WP-61, PLAN §8.6): `indexnow.ping` (debounced 60 s per payload) submits the URLs of
 * every locale of the pages a purge touched (`cdn.purge` enqueues it for content changes).
 *
 * Production only, with a valid `INDEXNOW_KEY` (the web serves it at `/{key}.txt`): elsewhere the
 * job completes without calling anyone. Retryable failures (429, 5xx, network) throw so pg-boss
 * retries with backoff; permanent ones (bad key, key file unreachable) are logged and dropped.
 */
import { IndexNowError, indexNowUrls, isValidIndexNowKey, submitIndexNow } from '@sotf/core/seo/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';
import { parseWorkerEnv, type WorkerEnv } from '../../env.ts';

let env: WorkerEnv | undefined;

export default defineJobGroup({
  name: 'indexnow',
  jobs: [
    defineJob({
      queue: 'indexnow.ping',
      options: { localConcurrency: 1 },
      handler: async ({ paths }, { ctx, job }) => {
        env ??= parseWorkerEnv();
        if (env.SITE_ENV !== 'production' || !isValidIndexNowKey(env.INDEXNOW_KEY)) {
          ctx.log.debug({ paths: paths.length }, 'indexnow.ping skipped outside production');
          return { status: 'skipped' as const, submitted: 0 };
        }
        const urls = indexNowUrls(paths, env.PUBLIC_SITE_URL);
        if (urls.length === 0) return { status: 'skipped' as const, submitted: 0 };
        try {
          const result = await submitIndexNow({ key: env.INDEXNOW_KEY, siteUrl: env.PUBLIC_SITE_URL }, urls, {
            signal: job.signal,
          });
          ctx.log.info(result, 'indexnow submitted');
          return { status: 'submitted' as const, ...result };
        } catch (error) {
          if (error instanceof IndexNowError && error.permanent) {
            ctx.log.error({ err: error, urls: urls.length }, 'indexnow rejected the submission');
            return { status: 'rejected' as const, submitted: 0 };
          }
          throw error;
        }
      },
    }),
  ],
});
