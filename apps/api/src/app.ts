/**
 * `buildApp()` (PLAN §2.1, §5): the Fastify 5 application of @sotf/api.
 *
 * Request pipeline (hooks run in this order):
 *   onRequest  request id + client IP → CORS (per route group) → CSRF (Fetch Metadata + JSON) →
 *              session + auth level + core `Ctx` → rate-limit bucket
 *   validate   Zod (fastify-type-provider-zod) → 422 VALIDATION_FAILED
 *   handler    domain module (`defineModule` / `implement(contract, handler)`)
 *   onSend     cache headers + Cache-Tag + ETag (public), CORS pruning
 *   errors     RFC 9457 problem+json (v2) or the legacy envelope (`/api/*`)
 *
 * Also: helmet, security hardening (plugins/security: HSTS, Permissions-Policy, private-data guard,
 * CSP report collector), cookies, under-pressure (503), SSE hub (`/api/v2/stream`), OpenAPI + Scalar
 * (`/api/docs`), `/healthz`, `/readyz` and graceful shutdown of every owned resource.
 */
import cookie from '@fastify/cookie';
import helmet from '@fastify/helmet';
import underPressure from '@fastify/under-pressure';
import {
  type Actor,
  CacheRegistry,
  type Clock,
  createLogger,
  errors as domainErrors,
  type JobSender,
  Jobs,
  type Logger,
  newId,
  PgListener,
  systemClock,
} from '@sotf/core';
import { HttpStatusRecorder } from '@sotf/core/ops/index';
import { createDb, type Database, type DbHandle } from '@sotf/db';
import Fastify, { type FastifyInstance, LogController } from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import type { PgBoss } from 'pg-boss';
import type { ApiEnv } from './env.ts';
import { requestIdFrom } from './lib/client-ip.ts';
import { type ApiModule, moduleContext } from './lib/define-module.ts';
import { createErrorReporter, type ErrorReporter } from './lib/sentry.ts';
import { surfaceOf } from './lib/surface.ts';
import type { Platform, SessionResolver } from './lib/types.ts';
import { modules as registeredModules } from './modules/_registry.gen.ts';
import { createProducerBoss, Dependencies } from './platform/dependencies.ts';
import { registerHealth } from './platform/health.ts';
import { setupCacheHeaders } from './plugins/cache-headers.ts';
import { setupContext, setupRequestBasics } from './plugins/context.ts';
import { setupCors } from './plugins/cors.ts';
import { setupCsrf } from './plugins/csrf.ts';
import { setupDocs } from './plugins/docs.ts';
import { setupErrors } from './plugins/errors.ts';
import { type RateLimitOverrides, setupRateLimit } from './plugins/rate-limit.ts';
import { HSTS_MAX_AGE_SECONDS, setupSecurity } from './plugins/security/index.ts';
import { SseHub, setupSse } from './plugins/sse.ts';

export interface BuildAppOptions {
  env: ApiEnv;
  /** Database handle; created from `DATABASE_URL` (pool `DB_POOL_MAX`) and owned when omitted. */
  db?: DbHandle;
  /**
   * pg-boss producer. Omitted: created from the env and owned. `null`: no producer (jobs fail with
   * UNAVAILABLE; for tests that do not enqueue). A `JobSender` fake may be passed as `jobs`.
   */
  boss?: PgBoss | null;
  /** Overrides the job producer (unit tests). */
  jobs?: Jobs;
  /** LISTEN connection. Omitted: created and owned. `null`: no realtime/LRU invalidation. */
  listener?: PgListener | null;
  /** Modules to register (default: the generated registry). */
  modules?: readonly ApiModule[];
  /** Session resolver; overrides the one provided by a module. Default: everyone is anonymous. */
  sessionResolver?: SessionResolver;
  clock?: Clock;
  /** Logger (default: pino JSON at LOG_LEVEL). */
  logger?: Logger;
  rateLimits?: RateLimitOverrides;
  sse?: { pingMs?: number };
  /** How dependencies start: in the background with retries (server) or awaited (tests). */
  startDependencies?: 'background' | 'await' | 'manual';
  /**
   * `@fastify/under-pressure` (503 when the event loop is saturated). Default: on. Integration
   * tests turn it off: on a loaded shared host it answers 503 to requests that would succeed.
   */
  underPressure?: boolean;
  /** Error reporting of 5xx (default: Sentry from `SENTRY_DSN`, a no-op without it). */
  errorReporter?: ErrorReporter;
  /**
   * Response status counters (`AnalyticsEvent` kind `http_status`, read by the `ops.alerts` job).
   * `flushMs` default 60 s (0: only on close and on demand); `false` turns them off.
   */
  statusCounters?: { flushMs?: number } | false;
}

const anonymous: SessionResolver = async () => null;

/** Jobs that always fail: used when the app runs without a pg-boss producer. */
const noProducer: JobSender = {
  send: async () => {
    throw domainErrors.unavailable('The job queue is not available');
  },
  sendDebounced: async () => {
    throw domainErrors.unavailable('The job queue is not available');
  },
};

export async function buildApp(options: BuildAppOptions): Promise<FastifyInstance> {
  const { env } = options;
  const clock = options.clock ?? systemClock;
  const log = options.logger ?? createLogger({ service: 'api', level: env.LOG_LEVEL, version: env.GIT_SHA });
  const ownedDb = options.db
    ? null
    : createDb({
        connectionString: env.DATABASE_URL,
        max: env.DB_POOL_MAX,
        applicationName: 'sotf-api',
        statementTimeoutMs: 15_000,
      });
  const dbHandle = (options.db ?? ownedDb) as DbHandle;
  const db: Database = dbHandle.db;
  const boss =
    options.boss === undefined
      ? createProducerBoss({ connectionString: env.DATABASE_URL, schema: env.PGBOSS_SCHEMA })
      : options.boss;
  const ownsBoss = options.boss === undefined;
  const listener =
    options.listener === undefined
      ? new PgListener({ connectionString: env.DATABASE_URL, applicationName: 'sotf-api-listen', log })
      : options.listener;
  const ownsListener = options.listener === undefined;
  const jobs = options.jobs ?? new Jobs(boss ?? noProducer, { clock });
  const caches = new CacheRegistry();
  const hub = new SseHub({ log, pingMs: options.sse?.pingMs });
  const deps = new Dependencies(ownsBoss ? boss : null, ownsListener ? listener : null, log);

  const app = Fastify({
    loggerInstance: log,
    genReqId: (req) => requestIdFrom(req.headers, newId),
    logController: new LogController({
      requestIdLogLabel: 'reqId',
      // Probes run every few seconds: keep them out of the logs.
      disableRequestLogging: (request) => request.url === '/healthz' || request.url === '/readyz',
    }),
    // Trust only the nearest proxy (Traefik); CF-Connecting-IP wins when present (client-ip.ts).
    trustProxy: (_address: string, hop: number) => hop === 0,
    bodyLimit: 1024 * 1024,
    routerOptions: { maxParamLength: 300 },
    return503OnClosing: true,
    forceCloseConnections: 'idle',
  }) as unknown as FastifyInstance;
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  // Form bodies (RFC 8058 one-click unsubscribe). JSON and text/plain use Fastify's parsers.
  app.addContentTypeParser('application/x-www-form-urlencoded', { parseAs: 'string' }, (_req, body, done) => {
    done(null, Object.fromEntries(new URLSearchParams(body as string)));
  });

  // Session resolver: explicit option > module-provided > anonymous.
  const providers = (options.modules ?? registeredModules).filter((m) => m.sessionResolver);
  if (providers.length > 1) {
    throw new Error(`several modules provide a session resolver: ${providers.map((m) => m.name).join(', ')}`);
  }

  const platform: Platform = {
    env,
    db,
    jobs,
    boss,
    caches,
    log,
    hub,
    rateLimiter: null as never,
    readiness: {
      db: async () => {
        await dbHandle.pool.query('SELECT 1');
        return true;
      },
      pgboss: () => boss !== null && (ownsBoss ? deps.bossReady : true),
      listen: () => listener?.connected === true,
    },
    startedAt: clock.now(),
    version: env.GIT_SHA,
  };
  app.decorate('platform', platform);
  let sessionResolver: SessionResolver = options.sessionResolver ?? anonymous;
  if (!options.sessionResolver && providers[0]?.sessionResolver)
    sessionResolver = providers[0].sessionResolver(platform);

  const errorReporter = options.errorReporter ?? createErrorReporter(env);
  setupErrors(app, errorReporter);
  setupRequestBasics(app);
  await app.register(helmet, {
    // JSON API: nothing to render, nothing to frame. /api/docs overrides the CSP.
    contentSecurityPolicy: {
      useDefaults: false,
      directives: { defaultSrc: ["'none'"], frameAncestors: ["'none'"], baseUri: ["'none'"], formAction: ["'none'"] },
    },
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    // Same value as plugins/security (HSTS 6 months, PLAN §9.1), which sets the final header.
    strictTransportSecurity: { maxAge: HSTS_MAX_AGE_SECONDS, includeSubDomains: true, preload: false },
    referrerPolicy: { policy: 'no-referrer' },
  });
  await app.register(cookie);
  if (options.underPressure !== false)
    await app.register(underPressure, {
      maxEventLoopDelay: 1000,
      maxEventLoopUtilization: 0.98,
      retryAfter: 10,
      pressureHandler: (request) => {
        const path = request.url.split('?', 1)[0];
        if (path === '/healthz' || path === '/readyz') return undefined;
        return Promise.reject(domainErrors.unavailable('The server is under pressure', 10));
      },
    });
  await setupCors(app);
  setupCsrf(app, { trustedOrigins: [new URL(env.PUBLIC_SITE_URL).origin, ...env.CSRF_TRUSTED_ORIGINS] });
  setupContext(app, {
    deps: { db, jobs, clock, log, caches, appSecret: env.APP_SECRET },
    internalSecret: env.INTERNAL_SECRET,
    sessionResolver: () => sessionResolver,
  });
  platform.rateLimiter = await setupRateLimit(app, options.rateLimits);
  await setupCacheHeaders(app);
  // After the cache headers: its onSend hooks demote cookie-setting/private responses.
  await setupSecurity(app, { env });

  if (options.statusCounters !== false) {
    const recorder = new HttpStatusRecorder({ clock });
    app.addHook('onResponse', async (request, reply) => {
      const path = request.url.split('?', 1)[0];
      if (path === '/healthz' || path === '/readyz') return;
      recorder.record(reply.statusCode);
    });
    const every = options.statusCounters?.flushMs ?? 60_000;
    const timer = every > 0 ? setInterval(() => void recorder.flush(db, log), every) : null;
    timer?.unref();
    app.decorate('statusCounters', recorder);
    app.addHook('onClose', async () => {
      if (timer) clearInterval(timer);
      await recorder.flush(db, log);
    });
  }

  registerHealth(app);
  await setupDocs(app, { version: env.GIT_SHA, siteUrl: env.PUBLIC_SITE_URL });
  await setupSse(app, hub);

  const implemented = new Map<string, string>();
  for (const module of options.modules ?? registeredModules) {
    await app.register(
      async (instance) => {
        await module.register(moduleContext(instance, platform, implemented, module.name));
      },
      { name: `module:${module.name}` } as never,
    );
  }

  if (listener) {
    hub.attach(listener);
    caches.attach(listener);
  }
  hub.start();

  const mode = options.startDependencies ?? 'background';
  if (mode === 'await') await deps.start({ wait: true });
  else if (mode === 'background') app.addHook('onReady', async () => void deps.start({ wait: false }));

  app.addHook('preClose', async () => {
    hub.close();
  });
  app.addHook('onClose', async () => {
    await errorReporter.flush();
    await deps.stop();
    if (ownedDb) await ownedDb.close();
  });

  app.log.debug({ modules: [...implemented.values()], surface: surfaceOf('/') }, 'app built');
  return app;
}

export type { Actor };
