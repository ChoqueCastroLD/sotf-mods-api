/**
 * Ingestion of the first-party analytics beacon and the RUM beacon (PLAN §5.2 `POST /e`,
 * `POST /e/vitals`, §7.1 "Eventos de analítica de producto", §8.8 "RUM", §9.3).
 *
 * Privacy rules (§9.3 "Analítica propia sin cookies"):
 * - no cookie, no user id: the only identifier is `visitorHash = HMAC(ip + UA, daily salt)`, which
 *   changes every UTC day (daily uniques only, no cross-day tracking) and cannot be reversed;
 * - `Sec-GPC: 1` or `DNT: 1` → nothing is stored (the web script already stays silent);
 * - only the referrer **domain** is kept and the path loses its query string and fragment;
 * - declared bots and requests without a User-Agent are dropped, and so is the excess traffic of
 *   an IP (the platform's soft `beacon` bucket): the beacon always answers 204.
 */
import { createHmac } from 'node:crypto';
import type { BeaconBody, VitalsBody } from '@sotf/contracts/events';
import { analyticsEvent, type Executor, type JsonObject, type NewAnalyticsEvent } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { isbot } from 'isbot';
import type { z } from 'zod';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import { dailySalt, normalizeIp } from '../kernel/hashing.ts';
import { deviceOf, referrerDomain } from './referrer.ts';

type Beacon = z.output<typeof BeaconBody>;
type Vitals = z.output<typeof VitalsBody>;

/** `AnalyticsEvent.kind` of one Web Vitals sample (never accepted from the product beacon). */
export const WEB_VITAL_KIND = 'web_vital';
/** Server-recorded kinds (domain events), outside the beacon's allow-list. */
export const SERVER_EVENT_KINDS = { modUnfollow: 'mod_unfollow' } as const;

export type BeaconOutcome = 'stored' | 'opted_out' | 'bot' | 'rate_limited';

export interface BeaconRequest {
  /** `Sec-GPC` header value. */
  gpc?: string | null | undefined;
  /** `DNT` header value. */
  dnt?: string | null | undefined;
  /** The IP is over the soft `beacon` bucket. */
  overSoftLimit: boolean;
  /** Hosts of the site (referrers from them are `internal`). */
  siteHosts: readonly string[];
}

/** True when the browser asked not to be tracked (Global Privacy Control or Do Not Track). */
export function trackingRefused(gpc: string | null | undefined, dnt: string | null | undefined): boolean {
  return (gpc ?? '').trim() === '1' || (dnt ?? '').trim() === '1';
}

/** Daily visitor hash: HMAC(ip + UA) with the salt of the UTC day (hex, 32 chars). */
export function visitorHash(secret: string, ip: string, userAgent: string, day: string): string {
  return createHmac('sha256', dailySalt(secret, day))
    .update(`visitor:${normalizeIp(ip)}|${userAgent.trim()}`, 'utf8')
    .digest('hex')
    .slice(0, 32);
}

/**
 * A shared log's id is its only protection (144 random bits in the URL, 24 h to live). The page
 * hides the link from referrers, so the analytics must not keep it for 90 days either.
 */
const SHARED_LOG_PATH = /(^|\/)logs\/[A-Za-z0-9_-]{24}(?=\/|$)/;

/** Path without query string or fragment (≤ 512 chars, always starting with `/`), secrets removed. */
export function cleanPath(path: string): string {
  const bare = path.split(/[?#]/, 1)[0] ?? '/';
  const rooted = bare.startsWith('/') ? bare : `/${bare}`;
  return rooted.replace(SHARED_LOG_PATH, '$1logs/:id').slice(0, 512);
}

function gate(ctx: Ctx, request: BeaconRequest): BeaconOutcome | null {
  if (trackingRefused(request.gpc, request.dnt)) return 'opted_out';
  const ua = (ctx.userAgent ?? '').trim();
  if (ua === '' || isbot(ua)) return 'bot';
  if (request.overSoftLimit) return 'rate_limited';
  return null;
}

interface Identity {
  visitor: string | null;
  device: string;
  country: string | null;
}

function identityOf(ctx: Ctx, now: Date): Identity {
  const ua = (ctx.userAgent ?? '').trim().slice(0, 512);
  return {
    visitor: ctx.ip ? visitorHash(ctx.appSecret, ctx.ip, ua, utcDay(now)) : null,
    device: deviceOf(ua),
    country: ctx.country,
  };
}

/** Records a batch of product events. Never throws for policy reasons: returns what happened. */
export async function recordBeacon(ctx: Ctx, body: Beacon, request: BeaconRequest): Promise<BeaconOutcome> {
  const refused = gate(ctx, request);
  if (refused) return refused;
  const now = ctx.clock.now();
  const who = identityOf(ctx, now);
  const rows: NewAnalyticsEvent[] = body.events.map((event) => {
    const hasEntity = event.entityType !== undefined && event.entityId !== undefined;
    return {
      ts: now,
      kind: event.kind,
      path: cleanPath(event.path),
      entityType: hasEntity ? (event.entityType ?? null) : null,
      entityId: hasEntity ? (event.entityId ?? null) : null,
      locale: event.locale ?? null,
      referrerDomain: event.kind === 'page_view' ? referrerDomain(event.referrer, request.siteHosts) : null,
      country: who.country,
      device: who.device,
      visitorHash: who.visitor,
      props: event.props && Object.keys(event.props).length > 0 ? (event.props as JsonObject) : null,
    };
  });
  await ctx.db.insert(analyticsEvent).values(rows);
  return 'stored';
}

const TEMPLATE = /^[a-z0-9][a-z0-9_-]{0,39}$/i;
const MAX_ATTRIBUTION_KEYS = 8;

/** Records the Web Vitals of one page view (one `web_vital` row per metric). */
export async function recordVitals(ctx: Ctx, body: Vitals, request: BeaconRequest): Promise<BeaconOutcome> {
  const refused = gate(ctx, request);
  if (refused) return refused;
  const now = ctx.clock.now();
  const who = identityOf(ctx, now);
  const template = TEMPLATE.test(body.template) ? body.template.toLowerCase() : 'other';
  const seen = new Set<string>();
  const rows: NewAnalyticsEvent[] = [];
  for (const metric of body.metrics) {
    if (seen.has(metric.name) || !Number.isFinite(metric.value)) continue;
    seen.add(metric.name);
    const props: JsonObject = {
      metric: metric.name,
      value: metric.name === 'CLS' ? Math.round(metric.value * 10_000) / 10_000 : Math.round(metric.value),
      rating: metric.rating,
      template,
    };
    if (metric.navigationType) props.navigationType = metric.navigationType;
    if (metric.attribution) {
      const entries = Object.entries(metric.attribution).slice(0, MAX_ATTRIBUTION_KEYS);
      if (entries.length > 0) props.attribution = Object.fromEntries(entries);
    }
    rows.push({
      ts: now,
      kind: WEB_VITAL_KIND,
      path: cleanPath(body.path),
      country: who.country,
      device: who.device,
      visitorHash: who.visitor,
      props,
    });
  }
  if (rows.length > 0) await ctx.db.insert(analyticsEvent).values(rows);
  return 'stored';
}

export interface ServerEventInput {
  kind: string;
  at: Date;
  entityType: 'mod' | 'build' | 'kit' | 'user';
  entityId: number;
  /** Idempotency key (the domain event id): a second insert with the same key is a no-op. */
  dedupeKey: string;
  props?: JsonObject;
}

/**
 * Records an event observed by the server (e.g. an unfollow from the `follow.mod_deleted` domain
 * event). Idempotent on `dedupeKey`, so event retries never double count.
 */
export async function recordServerEvent(exec: Executor, input: ServerEventInput): Promise<boolean> {
  const props = JSON.stringify({ ...(input.props ?? {}), dedupeKey: input.dedupeKey });
  const result = await exec.execute(sql`
    INSERT INTO "AnalyticsEvent" ("ts", "kind", "entityType", "entityId", "props")
    SELECT ${input.at.toISOString()}::timestamptz, ${input.kind}, ${input.entityType}, ${input.entityId}, ${props}::jsonb
     WHERE NOT EXISTS (
       SELECT 1 FROM "AnalyticsEvent"
        WHERE "entityType" = ${input.entityType} AND "entityId" = ${input.entityId}
          AND "ts" = ${input.at.toISOString()}::timestamptz AND "kind" = ${input.kind}
          AND "props"->>'dedupeKey' = ${input.dedupeKey})`);
  return (result.rowCount ?? 0) > 0;
}
