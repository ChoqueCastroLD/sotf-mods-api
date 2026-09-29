/**
 * Zod building blocks for the apps' `src/env.ts` (PLAN §2.6 "Config", §11.4). Apps validate their
 * environment at start-up and exit with a clear message; nothing else reads `process.env`.
 */
import { z } from 'zod';

/** `true`/`false`/`1`/`0`/`yes`/`no` (case-insensitive); empty → default. */
export function envFlag(defaultValue: boolean) {
  return z
    .string()
    .trim()
    .toLowerCase()
    .optional()
    .transform((value, ctx) => {
      if (value === undefined || value === '') return defaultValue;
      if (['1', 'true', 'yes', 'on'].includes(value)) return true;
      if (['0', 'false', 'no', 'off'].includes(value)) return false;
      ctx.addIssue({ code: 'custom', message: `expected a boolean, got "${value}"` });
      return z.NEVER;
    });
}

/** Integer with bounds; empty → default. */
export function envInt(defaultValue: number, min: number, max: number) {
  return z
    .string()
    .trim()
    .optional()
    .transform((value, ctx) => {
      if (value === undefined || value === '') return defaultValue;
      const n = Number(value);
      if (!Number.isInteger(n) || n < min || n > max) {
        ctx.addIssue({ code: 'custom', message: `expected an integer in [${min}, ${max}], got "${value}"` });
        return z.NEVER;
      }
      return n;
    });
}

/** Optional string: empty → undefined. */
export const envOptional = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value ? value : undefined));

/** Absolute http(s) URL without trailing slash. */
export const envUrl = z
  .string()
  .trim()
  .url()
  .refine((value) => /^https?:\/\//.test(value), 'must be an http(s) URL')
  .transform((value) => value.replace(/\/+$/, ''));

/** Postgres connection string. */
export const envDatabaseUrl = z
  .string()
  .trim()
  .min(1)
  .refine((value) => /^postgres(?:ql)?:\/\//.test(value), 'must be a postgres:// URL');

/** Secret of at least 32 characters (generate with `openssl rand -base64 48`). */
export const envSecret = z.string().min(32, 'must be at least 32 characters (openssl rand -base64 48)');

export const SITE_ENVS = ['production', 'staging', 'preflight', 'development'] as const;
export type SiteEnv = (typeof SITE_ENVS)[number];

export const LOG_LEVELS = ['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent'] as const;

/** Variables shared by api and worker. */
export const commonServerEnv = {
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  TZ: z.literal('UTC', { message: 'TZ must be UTC (PLAN §2.6)' }).default('UTC'),
  LOG_LEVEL: z.enum(LOG_LEVELS).default('info'),
  SITE_ENV: z.enum(SITE_ENVS).default('development'),
  PUBLIC_SITE_URL: envUrl,
  INTERNAL_SECRET: envSecret,
  DATABASE_URL: envDatabaseUrl,
  APP_SECRET: envSecret,
  PGBOSS_SCHEMA: z
    .string()
    .regex(/^[a-z_][a-z0-9_]*$/)
    .default('pgboss'),
  LEGACY_COEXIST: envFlag(true),
  SENTRY_DSN: envOptional,
  /** Deployed git sha (set by the image build); shown in /healthz and the OpenAPI document. */
  GIT_SHA: z.string().trim().default('dev'),
} as const;

/** Formats Zod issues as the start-up error message. */
export function formatEnvError(app: string, error: z.ZodError): string {
  const lines = error.issues.map((issue) => `  - ${issue.path.join('.') || 'env'}: ${issue.message}`);
  return `invalid environment for ${app}:\n${lines.join('\n')}\nSee .env.example (PLAN §11.4).`;
}
