/**
 * Environment of @sotf/worker (PLAN §2.6 "Config", §11.4), validated with Zod at start-up. The only
 * file of the worker that reads `process.env`.
 */
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { commonServerEnv, envFlag, envInt, envOptional, envUrl, formatEnvError } from '@sotf/core';
import { z } from 'zod';

export const workerEnvSchema = z.object({
  ...commonServerEnv,
  /** Health server port (PLAN §11.4: 3002; the `dev` script passes 47302). */
  PORT: envInt(3002, 1, 65_535),
  HOST: z.string().trim().min(1).default('0.0.0.0'),
  DB_POOL_MAX: envInt(5, 1, 50),
  /** Web origin for `/_internal/cache/invalidate` (cdn.purge, WP-61). */
  WEB_INTERNAL_URL: envUrl.optional(),
  LEGACY_SNAKE_ALIASES: envFlag(false),
  // R2
  R2_ACCOUNT_ID: envOptional,
  R2_ENDPOINT: envOptional,
  R2_ACCESS_KEY_ID: envOptional,
  R2_SECRET_ACCESS_KEY: envOptional,
  R2_BUCKET: z.string().trim().min(1).default('sotf-mods'),
  R2_PRIVATE_BUCKET: z.string().trim().min(1).default('sotf-mods-private'),
  R2_PUBLIC_BASE_URL: envUrl.default('https://r2.sotf-mods.com'),
  // Email (WP-30)
  EMAIL_TRANSPORT: z.enum(['resend', 'mailpit', 'allowlist']).default('mailpit'),
  EMAIL_FROM: z.string().trim().min(3).default('SOTF Mods <noreply@sotf-mods.com>'),
  EMAIL_ALLOWLIST: envOptional,
  RESEND_API_KEY: envOptional,
  SMTP_URL: envOptional,
  // Cloudflare purge (WP-61), IndexNow, VirusTotal, OpenAI
  CF_ZONE_ID: envOptional,
  CF_API_TOKEN: envOptional,
  INDEXNOW_KEY: envOptional,
  VIRUSTOTAL_API_KEY: envOptional,
  OPENAI_API_KEY: envOptional,
  KELVINSEEK_MODEL: z.string().trim().min(1).default('gpt-4o-mini'),
  /** Parallel jobs per queue in this process (sharp stays at 1 inside media jobs). */
  WORKER_CONCURRENCY: envInt(2, 1, 32),
});

export type WorkerEnv = z.output<typeof workerEnvSchema>;

/**
 * Validates the environment. Without `PORT`, the health server listens on 3002 when
 * `NODE_ENV=production` and on the development port 47302 otherwise, so `pnpm dev` matches the
 * ports of PLAN §11.2 without a per-app variable (a shared `PORT` in the root `.env` would clash
 * with the API's).
 */
export function parseWorkerEnv(source: Record<string, string | undefined> = process.env): WorkerEnv {
  const port = source.PORT?.trim();
  const withPort = port || source.NODE_ENV === 'production' ? source : { ...source, PORT: String(DEVELOPMENT_PORT) };
  const parsed = workerEnvSchema.safeParse(withPort);
  if (!parsed.success) throw new Error(formatEnvError('@sotf/worker', parsed.error));
  return parsed.data;
}

/** Loads `<repo>/.env` for local development (never in production; never overrides). */
export function loadDotEnvForDevelopment(path = fileURLToPath(new URL('../../../.env', import.meta.url))): boolean {
  if (process.env.NODE_ENV === 'production' || process.env.SOTF_NO_DOTENV === '1' || !existsSync(path)) return false;
  process.loadEnvFile(path);
  return true;
}

export function loadWorkerEnv(): WorkerEnv {
  loadDotEnvForDevelopment();
  try {
    return parseWorkerEnv();
  } catch (error) {
    process.stderr.write(`${(error as Error).message}\n`);
    process.exit(1);
  }
}
