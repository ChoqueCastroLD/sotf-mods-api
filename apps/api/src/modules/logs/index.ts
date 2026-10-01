/**
 * `logs` module: "Share logs". Redacted, compressed game logs behind an unguessable link that the
 * hourly worker job (`cleanup.logs`) deletes after 24 hours. Rules live in `@sotf/core/logs`.
 *
 * Limits: the contract's `logsCreate` bucket (15/hour per user or IP) plus 60 logs per IP and day;
 * guests pass Turnstile. The create body may carry a 5 MB log (as JSON), hence the larger body limit.
 */
import { logsEndpoints } from '@sotf/contracts/logs';
import { createTurnstileVerifier } from '@sotf/core/auth/index';
import { createLog, deleteLog, getLog, getLogRaw, reportLog } from '@sotf/core/logs/index';
import { defineModule } from '../../lib/define-module.ts';

const LOGS_PER_IP_DAY = 60;
/** 5 MiB of text, JSON escaping (worst case ~2x for control characters) and the envelope. */
const CREATE_BODY_LIMIT = 12 * 1024 * 1024;

export default defineModule({
  name: 'logs',
  register(m) {
    const env = m.platform.env;
    const turnstile = createTurnstileVerifier({
      secret: env.TURNSTILE_SECRET_KEY,
      production: env.SITE_ENV === 'production',
      log: m.platform.log,
    });
    const deps = {
      verifyTurnstile: (token: string | undefined, ip: string | null) => turnstile.verify(token, ip),
      consumeDaily: (ip: string) =>
        m.platform.rateLimiter.consume('logs-day', `ip:${ip}`, { max: LOGS_PER_IP_DAY, window: '1 day' }),
    };

    m.implement(
      logsEndpoints.create,
      async ({ body, ctx, reply }) => {
        const created = await createLog(ctx, deps, body);
        reply.header('location', `/api/v2${created.path}`);
        return created;
      },
      { bodyLimit: CREATE_BODY_LIMIT },
    );
    m.implement(logsEndpoints.get, async ({ params, ctx }) => getLog(ctx, params.id));
    m.implement(logsEndpoints.raw, async ({ params, query, ctx }) => {
      const raw = await getLogRaw(ctx, params.id);
      return query.download ? { body: raw.text, filename: raw.filename } : { body: raw.text };
    });
    m.implement(logsEndpoints.delete, async ({ params, query, ctx }) => {
      await deleteLog(ctx, params.id, query.token);
    });
    m.implement(logsEndpoints.report, async ({ params, body, ctx }) => {
      await reportLog(ctx, params.id, body);
    });
  },
});
