/**
 * Request/job context (`Ctx`, PLAN §2.1): what every core service receives. The API builds one per
 * request (actor from the session resolver, request id = cf-ray or uuid, hashed IP); the worker
 * builds one per job (`actor = null`, request id = job id).
 */
import type { Database } from '@sotf/db';
import { type Clock, systemClock } from './clock.ts';
import type { Jobs } from './jobs.ts';
import type { Logger } from './logger.ts';
import type { CacheRegistry } from './lru.ts';

export type Role = 'user' | 'moderator' | 'admin';

/** The authenticated user behind a request (resolved from the session or, in T1, a PAT). */
export interface Actor {
  userId: number;
  role: Role;
  emailVerified: boolean;
  /** Session id (uuid) when authenticated with a cookie. */
  sessionId?: string;
  /** Suspended users may read and manage their account but not create content (core decides). */
  suspendedUntil?: Date | null;
  /** Handle (slug), for logs and URLs. */
  handle?: string;
  /** "User"."verifiedCreator" as resolved with the session (`can()` treats unknown as false). */
  verifiedCreator?: boolean;
  /** "User"."trustLevel" 0–3 as resolved with the session (unknown = 0). */
  trustLevel?: number;
  /** Creation time of the session (`assertFreshSession`, 12 h re-authentication of staff actions). */
  sessionCreatedAt?: Date;
}

/** Long-lived dependencies shared by every context of a process. */
export interface KernelDeps {
  db: Database;
  jobs: Jobs;
  clock?: Clock;
  log: Logger;
  caches?: CacheRegistry;
  /** `APP_SECRET`: HMAC key for ipHash, chatHash and session tokens. */
  appSecret: string;
}

export interface Ctx {
  readonly db: Database;
  readonly jobs: Jobs;
  readonly clock: Clock;
  readonly log: Logger;
  readonly caches: CacheRegistry | null;
  readonly appSecret: string;
  readonly requestId: string;
  readonly actor: Actor | null;
  /** Client IP in clear: only for rate limiting and hashing, never stored or logged. */
  readonly ip: string | null;
  /** Daily-salted hash of the IP (see `hashing.ts`). */
  readonly ipHash: string | null;
  readonly userAgent: string | null;
  /** `CF-IPCountry` (two letters) when present. */
  readonly country: string | null;
  /** Active locale of the request (`en` by default). */
  readonly locale: string;
}

export interface CtxInit {
  requestId: string;
  actor?: Actor | null;
  ip?: string | null;
  ipHash?: string | null;
  userAgent?: string | null;
  country?: string | null;
  locale?: string;
  /** Child logger bindings (e.g. `{ reqId }`). */
  log?: Logger;
}

export function createCtx(deps: KernelDeps, init: CtxInit): Ctx {
  return {
    db: deps.db,
    jobs: deps.jobs,
    clock: deps.clock ?? systemClock,
    log: init.log ?? deps.log.child({ reqId: init.requestId }),
    caches: deps.caches ?? null,
    appSecret: deps.appSecret,
    requestId: init.requestId,
    actor: init.actor ?? null,
    ip: init.ip ?? null,
    ipHash: init.ipHash ?? null,
    userAgent: init.userAgent ?? null,
    country: init.country ?? null,
    locale: init.locale ?? 'en',
  };
}

/** Context for background work (jobs, CLIs): no actor, no client. */
export function systemCtx(deps: KernelDeps, requestId: string): Ctx {
  return createCtx(deps, { requestId });
}

/** True when the actor has at least `role` (admin ⊇ moderator ⊇ user). */
export function hasRole(actor: Actor | null, role: Role): boolean {
  if (!actor) return false;
  if (role === 'user') return true;
  if (role === 'moderator') return actor.role === 'moderator' || actor.role === 'admin';
  return actor.role === 'admin';
}
