/**
 * Entry point of the API process (`node dist/server.js`; `pnpm --filter @sotf/api dev` runs the
 * source). Validates the environment, builds the app, listens on HOST:PORT and shuts down
 * gracefully on SIGTERM/SIGINT (Coolify rolling updates): stop accepting, close SSE streams, drain
 * in-flight requests, stop pg-boss and the LISTEN connection, end the pool.
 */
import closeWithGrace from 'close-with-grace';
import { buildApp } from './app.ts';
import { loadApiEnv } from './env.ts';
import { createErrorReporter } from './lib/sentry.ts';

const env = loadApiEnv();
const errorReporter = createErrorReporter(env);
const app = await buildApp({ env, errorReporter });

closeWithGrace({ delay: 15_000, logger: app.log }, async ({ signal, err }) => {
  if (err) {
    app.log.error({ err }, 'fatal error, shutting down');
    errorReporter.captureFatal(err);
  } else app.log.info({ signal }, 'shutting down');
  // `onClose` flushes the reporter.
  await app.close();
});

try {
  await app.listen({ port: env.PORT, host: env.HOST });
} catch (error) {
  app.log.fatal({ err: error }, 'could not listen');
  errorReporter.captureFatal(error);
  await errorReporter.flush();
  process.exit(1);
}
