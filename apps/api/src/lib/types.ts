/**
 * Fastify type augmentation and the platform types shared by plugins and modules.
 */
import type { CacheTag, Endpoint, RateLimitBucket } from '@sotf/contracts';
import type { Actor, CacheRegistry, Ctx, Jobs, Logger } from '@sotf/core';
import type { HttpStatusRecorder } from '@sotf/core/ops/index';
import type { Database } from '@sotf/db';
import type { FastifyRequest } from 'fastify';
import type { PgBoss } from 'pg-boss';
import type { ApiEnv } from '../env.ts';
import type { RateLimiter } from '../plugins/rate-limit.ts';
import type { SseHub } from '../plugins/sse.ts';

/** Resolves the actor of a request from its session cookie (WP-30) or returns null. */
export type SessionResolver = (request: FastifyRequest) => Promise<Actor | null>;

/** Health of the process dependencies, reported by `/readyz`. */
export interface Readiness {
  db(): Promise<boolean>;
  pgboss(): boolean;
  listen(): boolean;
}

/** Long-lived services of an API process (decorated as `app.platform`). */
export interface Platform {
  env: ApiEnv;
  db: Database;
  jobs: Jobs;
  /** null when the process runs without a job producer (unit tests). */
  boss: PgBoss | null;
  caches: CacheRegistry;
  log: Logger;
  hub: SseHub;
  rateLimiter: RateLimiter;
  readiness: Readiness;
  startedAt: Date;
  version: string;
}

/** Route-level config carried by every contract route. */
export interface EndpointRouteConfig {
  endpoint?: Endpoint;
  /** Platform routes that are not contracts (docs, OpenAPI) can opt into a bucket explicitly. */
  bucket?: RateLimitBucket | null;
  /** Non-contract v2 routes readable cross-origin (the OpenAPI document). */
  publicCors?: boolean;
}

declare module 'fastify' {
  interface FastifyInstance {
    platform: Platform;
    /** Response status counters (absent when `statusCounters: false`). */
    statusCounters?: HttpStatusRecorder;
  }
  interface FastifyRequest {
    /** Core context of the request (actor, request id, hashed IP…). */
    ctx: Ctx;
    /** Resolved actor (null for guests and on publicly cached endpoints). */
    actor: Actor | null;
    /** Client IP (CF-Connecting-IP behind Cloudflare, else the socket address). */
    clientIp: string;
    /** Values that resolve the endpoint's cache-tag templates (`{id}` → the entity id). */
    cacheValues: Record<string, string | number | undefined>;
    /** Extra tags added by the handler. */
    extraCacheTags: CacheTag[];
    /** Set when a soft bucket (downloads, beacon) is over its limit: serve but do not count. */
    overSoftLimit: boolean;
  }
  interface FastifyContextConfig extends EndpointRouteConfig {}
}
