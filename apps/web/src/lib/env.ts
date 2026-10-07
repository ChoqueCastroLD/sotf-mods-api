/**
 * Runtime environment of the web server (PLAN §2.6, §11.4), validated with Zod on first use.
 *
 * This is the only module of `apps/web` that reads `process.env`. The server entry
 * (`src/lib/server/fetch.ts`) calls {@link loadEnv} while the module graph loads, so a missing or
 * malformed variable stops the process at start-up with a readable message instead of failing on
 * the first request.
 *
 * Browser code never imports this module: public values reach the page through the HTML the
 * layout renders (e.g. `<meta name="google-adsense-account">`).
 */
import { z } from 'zod';

export const SITE_ENVS = ['production', 'staging', 'preflight', 'development'] as const;
export type SiteEnv = (typeof SITE_ENVS)[number];

const optionalString = z
  .string()
  .trim()
  .transform((value) => (value === '' ? undefined : value))
  .optional();

const origin = z
  .url({ protocol: /^https?$/ })
  .transform((value) => value.replace(/\/+$/, ''))
  .refine((value) => new URL(value).pathname === '/' || new URL(value).pathname === '', 'must be an origin (no path)');

/** AdSense ad unit id (`data-ad-slot`, digits). */
const adUnit = optionalString.pipe(
  z
    .string()
    .regex(/^\d{6,20}$/, 'expected the numeric ad unit id')
    .optional(),
);

/** Development defaults (the local stack); never used outside `SITE_ENV=development`. */
const DEFAULT_SITE_URL = 'http://127.0.0.1:47321';
const DEFAULT_INTERNAL_API_URL = 'http://127.0.0.1:47301';

const EnvSchema = z
  .object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    SITE_ENV: z.enum(SITE_ENVS).default('development'),
    LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent']).default('info'),
    /** Public origin (`https://sotf-mods.com`): canonical URLs, hreflang, OG. */
    PUBLIC_SITE_URL: origin.optional(),
    /** API origin on the private network (`http://<api-container>:3001`). */
    INTERNAL_API_URL: origin.optional(),
    /** Shared secret of the `X-Internal-Auth` header (web ↔ api ↔ worker). */
    INTERNAL_SECRET: optionalString.pipe(z.string().min(32, 'use at least 32 characters').optional()),
    /** AdSense publisher (`ca-pub-…`). Empty keeps ads off (development, staging). */
    PUBLIC_ADSENSE_CLIENT: optionalString.pipe(
      z
        .string()
        .regex(/^ca-pub-\d{10,20}$/, 'expected ca-pub-<digits>')
        .optional(),
    ),
    /** Public base of R2 objects (`https://r2.sotf-mods.com`). */
    R2_PUBLIC_BASE_URL: optionalString.pipe(z.url().optional()),
    PUBLIC_TURNSTILE_SITE_KEY: optionalString,
    INDEXNOW_KEY: optionalString,
    SENTRY_DSN: optionalString,
    PUBLIC_SENTRY_DSN_CONSOLE: optionalString,
    /**
     * Commit being served. Coolify injects `SOURCE_COMMIT`; CI images may set `RELEASE_SHA`.
     * Used for `/healthz`, the post-deploy purge reason and its idempotency key.
     */
    RELEASE_SHA: optionalString,
    SOURCE_COMMIT: optionalString,
    /**
     * CSP delivery (PLAN §9.1, WP-93): `report-only` or `enforce`. Unset: staging reports only,
     * every other environment enforces (`cspModeFor`).
     */
    CSP_MODE: optionalString.pipe(z.enum(['enforce', 'report-only']).optional()),
    /**
     * S3 endpoint of the storage when it is not R2 (SeaweedFS/MinIO of development, e2e,
     * staging emulators). Browsers `PUT` presigned uploads to it, so its origin joins
     * `connect-src`. Empty in production (R2's S3 API is already allowed).
     */
    R2_ENDPOINT: optionalString.pipe(z.url({ protocol: /^https?$/ }).optional()),
    /**
     * AdSense ad units per placement (PLAN §8.5; research/03 §6.2–6.3). Each slot renders only
     * with `PUBLIC_ADSENSE_CLIENT` and its unit id; guests only (`scripts/ads.ts`).
     */
    PUBLIC_ADSENSE_SLOT_HOME: adUnit,
    PUBLIC_ADSENSE_SLOT_FEED: adUnit,
    PUBLIC_ADSENSE_SLOT_MOD_SIDEBAR: adUnit,
  })
  .superRefine((env, ctx) => {
    if (env.SITE_ENV !== 'development' && !env.INTERNAL_SECRET) {
      ctx.addIssue({
        code: 'custom',
        path: ['INTERNAL_SECRET'],
        message: `required when SITE_ENV=${env.SITE_ENV}`,
      });
    }
    // Outside development nothing may fall back to the localhost defaults: a container without
    // INTERNAL_API_URL would pass its health check and answer 503 on every page, and one without
    // PUBLIC_SITE_URL would publish `http://127.0.0.1` canonicals, sitemaps and emails.
    if (env.SITE_ENV !== 'development' && !env.INTERNAL_API_URL) {
      ctx.addIssue({ code: 'custom', path: ['INTERNAL_API_URL'], message: `required when SITE_ENV=${env.SITE_ENV}` });
    }
    if (env.SITE_ENV !== 'development' && env.SITE_ENV !== 'production' && !env.PUBLIC_SITE_URL) {
      ctx.addIssue({ code: 'custom', path: ['PUBLIC_SITE_URL'], message: `required when SITE_ENV=${env.SITE_ENV}` });
    }
    if (env.SITE_ENV === 'production' && !(env.PUBLIC_SITE_URL ?? DEFAULT_SITE_URL).startsWith('https://')) {
      ctx.addIssue({ code: 'custom', path: ['PUBLIC_SITE_URL'], message: 'must be https in production' });
    }
  });

export interface WebEnv {
  nodeEnv: 'development' | 'production' | 'test';
  siteEnv: SiteEnv;
  logLevel: string;
  siteUrl: string;
  internalApiUrl: string;
  internalSecret: string | undefined;
  adsenseClient: string | undefined;
  r2PublicBaseUrl: string | undefined;
  turnstileSiteKey: string | undefined;
  indexNowKey: string | undefined;
  sentryDsn: string | undefined;
  release: string | undefined;
  /** Forced CSP delivery (`CSP_MODE`); undefined = per environment. */
  cspMode: 'enforce' | 'report-only' | undefined;
  /** Origin of a non-R2 S3 endpoint browsers upload to (`R2_ENDPOINT`). */
  storageUploadOrigin: string | undefined;
  /** AdSense ad unit ids per placement (undefined: that slot is not rendered). */
  adSlots: AdSlots;
  /** Whether pages may be indexed (`SITE_ENV=production` only). */
  indexable: boolean;
}

export interface AdSlots {
  /** Landing, next to the creator spotlight. */
  home: string | undefined;
  /** In-feed card of Explore listings. */
  feed: string | undefined;
  /** Sidebar of the mod page. */
  modSidebar: string | undefined;
}

export class EnvError extends Error {
  override readonly name = 'EnvError';
}

/** Parses an environment record (exported for tests); throws {@link EnvError} listing every problem. */
export function parseEnv(source: Readonly<Record<string, string | undefined>>): WebEnv {
  const result = EnvSchema.safeParse(source);
  if (!result.success) {
    const lines = result.error.issues.map((issue) => `  - ${issue.path.join('.') || '(root)'}: ${issue.message}`);
    throw new EnvError(`Invalid environment for @sotf/web:\n${lines.join('\n')}\nSee .env.example (PLAN §11.4).`);
  }
  const env = result.data;
  return {
    nodeEnv: env.NODE_ENV,
    siteEnv: env.SITE_ENV,
    logLevel: env.LOG_LEVEL,
    siteUrl: env.PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
    internalApiUrl: env.INTERNAL_API_URL ?? DEFAULT_INTERNAL_API_URL,
    internalSecret: env.INTERNAL_SECRET,
    adsenseClient: env.PUBLIC_ADSENSE_CLIENT,
    r2PublicBaseUrl: env.R2_PUBLIC_BASE_URL,
    turnstileSiteKey: env.PUBLIC_TURNSTILE_SITE_KEY,
    indexNowKey: env.INDEXNOW_KEY,
    sentryDsn: env.SENTRY_DSN,
    release: env.RELEASE_SHA ?? env.SOURCE_COMMIT,
    cspMode: env.CSP_MODE,
    storageUploadOrigin: env.R2_ENDPOINT ? new URL(env.R2_ENDPOINT).origin : undefined,
    adSlots: {
      home: env.PUBLIC_ADSENSE_SLOT_HOME,
      feed: env.PUBLIC_ADSENSE_SLOT_FEED,
      modSidebar: env.PUBLIC_ADSENSE_SLOT_MOD_SIDEBAR,
    },
    indexable: env.SITE_ENV === 'production',
  };
}

let cached: WebEnv | undefined;

/** The validated environment of this process (parsed once). */
export function loadEnv(): WebEnv {
  cached ??= parseEnv(process.env);
  return cached;
}

/** Test hook: forget the cached environment. */
export function resetEnvForTests(): void {
  cached = undefined;
}
