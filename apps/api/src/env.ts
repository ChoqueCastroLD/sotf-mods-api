/**
 * Environment of @sotf/api (PLAN §2.6 "Config", §11.4), validated with Zod at start-up. This is the
 * only file of the API that reads `process.env`; everything else receives the parsed `ApiEnv`.
 */
import { existsSync } from 'node:fs';
import { isIP } from 'node:net';
import { fileURLToPath } from 'node:url';
import {
  commonServerEnv,
  envFlag,
  envInt,
  envOptional,
  envUrl,
  formatEnvError,
  SERVER_PORTS,
  withDefaultPort,
} from '@sotf/core';
import { z } from 'zod';

export const apiEnvSchema = z.object({
  ...commonServerEnv,
  /** Unset: 3001 with NODE_ENV=production (Coolify), 47301 otherwise (`pnpm dev`, PLAN §11.2). */
  PORT: envInt(SERVER_PORTS.api.production, 1, 65_535),
  HOST: z.string().trim().min(1).default('0.0.0.0'),
  DB_POOL_MAX: envInt(10, 1, 100),
  LEGACY_SNAKE_ALIASES: envFlag(false),
  /** `Sunset` date of the Tier 2 legacy routes (ISO date); default `LEGACY_SUNSET_DATE` (T0 + 12 months). */
  LEGACY_SUNSET_AT: z
    .string()
    .trim()
    .optional()
    .transform((value, ctx) => {
      if (!value) return undefined;
      const date = new Date(/^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T00:00:00.000Z` : value);
      if (Number.isNaN(date.getTime())) {
        ctx.addIssue({ code: 'custom', message: `invalid date "${value}"` });
        return z.NEVER;
      }
      return date;
    }),
  ARGON2_CONCURRENCY: envInt(2, 1, 16),
  /**
   * Extra origins allowed to make cookie-authenticated unsafe requests besides PUBLIC_SITE_URL
   * (comma separated; staging/preflight hosts). Production leaves it empty.
   */
  CSRF_TRUSTED_ORIGINS: z
    .string()
    .trim()
    .optional()
    .transform((value, ctx) => {
      if (!value) return [] as string[];
      const origins: string[] = [];
      for (const item of value
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)) {
        try {
          origins.push(new URL(item).origin);
        } catch {
          ctx.addIssue({ code: 'custom', message: `invalid origin "${item}"` });
        }
      }
      return origins;
    }),
  /**
   * Extra CIDRs (comma separated) whose `CF-Connecting-IP`/`CF-IPCountry` headers are believed, on
   * top of Cloudflare's published ranges and the private networks (`lib/client-ip.ts`). Only needed
   * when Cloudflare adds an edge range before the built-in list does. Production leaves it empty.
   */
  TRUSTED_EDGE_CIDRS: z
    .string()
    .trim()
    .optional()
    .transform((value, ctx) => {
      if (!value) return [] as string[];
      const cidrs: string[] = [];
      for (const item of value
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)) {
        const [network, prefix] = item.split('/');
        const family = network ? isIP(network) : 0;
        const max = family === 6 ? 128 : 32;
        if (family === 0 || !/^\d{1,3}$/.test(prefix ?? '') || Number(prefix) > max) {
          ctx.addIssue({ code: 'custom', message: `invalid CIDR "${item}"` });
          continue;
        }
        cidrs.push(item);
      }
      return cidrs;
    }),
  // R2 (used by the storage domain, WP-31; validated here so the process fails fast).
  R2_ACCOUNT_ID: envOptional,
  /** Local/test S3 emulator endpoint; empty in production (derived from R2_ACCOUNT_ID). */
  R2_ENDPOINT: envOptional,
  /** Browser-reachable S3 endpoint used in presigned URLs (e2e/local stacks); empty in production. */
  R2_PUBLIC_ENDPOINT: envOptional,
  R2_ACCESS_KEY_ID: envOptional,
  R2_SECRET_ACCESS_KEY: envOptional,
  R2_BUCKET: z.string().trim().min(1).default('sotf-mods'),
  R2_PRIVATE_BUCKET: z.string().trim().min(1).default('sotf-mods-private'),
  R2_PUBLIC_BASE_URL: envUrl.default('https://r2.sotf-mods.com'),
  TURNSTILE_SECRET_KEY: envOptional,
  /** Discord OAuth app (T1-01). Login and linking stay hidden and inactive unless both are set. */
  DISCORD_CLIENT_ID: envOptional,
  DISCORD_CLIENT_SECRET: envOptional,
  OPENAI_API_KEY: envOptional,
  /** OpenAI-compatible endpoint (`https://openrouter.ai/api/v1` in production); default OpenAI. */
  LLM_BASE_URL: envOptional,
  KELVINSEEK_MODEL: z.string().trim().min(1).default('gpt-4o-mini'),
  KELVINSEEK_DAILY_BUDGET_USD: z.coerce.number().nonnegative().default(3),
  /** Scout (T1-07): model, daily spend cap in USD (0 disables) and kill switch. */
  SCOUT_MODEL: z.string().trim().min(1).default('gpt-4o-mini'),
  SCOUT_DAILY_BUDGET_USD: z.coerce.number().nonnegative().default(2),
  SCOUT_ENABLED: z
    .enum(['true', 'false'])
    .default('true')
    .transform((v) => v === 'true'),
});

export type ApiEnv = z.output<typeof apiEnvSchema>;

/** Parses an environment (defaults to `process.env`); throws with a readable message. */
export function parseApiEnv(source: Record<string, string | undefined> = process.env): ApiEnv {
  const parsed = apiEnvSchema.safeParse(withDefaultPort(source, 'api'));
  if (!parsed.success) throw new Error(formatEnvError('@sotf/api', parsed.error));
  return parsed.data;
}

/**
 * Loads `<repo>/.env` for local development (never in production, never overriding variables that
 * are already set). `SOTF_NO_DOTENV=1` disables it.
 */
export function loadDotEnvForDevelopment(path = fileURLToPath(new URL('../../../.env', import.meta.url))): boolean {
  if (process.env.NODE_ENV === 'production' || process.env.SOTF_NO_DOTENV === '1' || !existsSync(path)) return false;
  process.loadEnvFile(path);
  return true;
}

/** `parseApiEnv()` or exit(1) with the message (entry points only). */
export function loadApiEnv(): ApiEnv {
  loadDotEnvForDevelopment();
  try {
    return parseApiEnv();
  } catch (error) {
    process.stderr.write(`${(error as Error).message}\n`);
    process.exit(1);
  }
}

/**
 * Bundled migrate task (`node dist/migrate.js`): the SQL files are copied next to the bundle
 * (`dist/migrations`, see tsdown.config.ts), so point the runner at them unless MIGRATIONS_DIR is
 * set. Returns the directory in use (undefined = the package default, i.e. running from source).
 */
export function prepareMigrationsDir(bundledDir: string): string | undefined {
  if (process.env.MIGRATIONS_DIR) return process.env.MIGRATIONS_DIR;
  if (existsSync(bundledDir)) {
    process.env.MIGRATIONS_DIR = bundledDir;
    return bundledDir;
  }
  return undefined;
}

export const backfillEnvSchema = z.object({
  DATABASE_URL: commonServerEnv.DATABASE_URL,
  PGBOSS_SCHEMA: commonServerEnv.PGBOSS_SCHEMA,
  LOG_LEVEL: commonServerEnv.LOG_LEVEL,
});

export type BackfillEnv = z.output<typeof backfillEnvSchema>;

/** Environment of the backfill entry (only the database). Exits(1) when invalid. */
export function loadBackfillEnv(): BackfillEnv {
  loadDotEnvForDevelopment();
  const parsed = backfillEnvSchema.safeParse(process.env);
  if (!parsed.success) {
    process.stderr.write(`${formatEnvError('@sotf/api backfill', parsed.error)}\n`);
    process.exit(1);
  }
  return parsed.data;
}
