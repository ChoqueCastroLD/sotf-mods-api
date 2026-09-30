/**
 * Security hardening of the API (PLAN §9, WP-93). One entry point for `buildApp()`:
 *
 * ```ts
 * await setupCacheHeaders(app);
 * await setupSecurity(app, { env });   // after the cache headers, before the modules
 * ```
 *
 * - `headers.ts`: HSTS (6 months, no preload), `Permissions-Policy`, `X-Robots-Tag` and private
 *   caching of every cookie-setting response;
 * - `private-data-guard.ts`: publicly cached v2 responses must not carry account/PII fields;
 * - `csp-report.ts`: `POST /api/v2/security/csp-report`, the collector of the web CSP reports.
 *
 * The CSP report route declares `config.csrfExempt`: the CSRF hook (`plugins/csrf.ts`) must skip
 * routes with that flag (reports are credential-less, idempotent and use their own media types).
 */
import type { FastifyInstance } from 'fastify';
import type { ApiEnv } from '../../env.ts';
import { registerCspReport } from './csp-report.ts';
import { setupSecurityHeaders } from './headers.ts';
import { setupPrivateDataGuard } from './private-data-guard.ts';

declare module 'fastify' {
  interface FastifyContextConfig {
    /**
     * Skip the Fetch-Metadata/content-type CSRF check. Only for routes that carry no credentials
     * and change no user state (the CSP report collector).
     */
    csrfExempt?: boolean;
  }
}

export interface SecurityOptions {
  env: Pick<ApiEnv, 'SITE_ENV' | 'PUBLIC_SITE_URL' | 'CSRF_TRUSTED_ORIGINS'>;
  /** Overrides the strictness of the private-data guard (default: strict outside production). */
  strictPrivateDataGuard?: boolean;
  cspReportFlushIntervalMs?: number;
}

/** Site origins allowed to report CSP violations (the same list the CSRF check trusts). */
export function reportingOrigins(env: SecurityOptions['env']): string[] {
  return [...new Set([new URL(env.PUBLIC_SITE_URL).origin, ...env.CSRF_TRUSTED_ORIGINS])];
}

export async function setupSecurity(app: FastifyInstance, options: SecurityOptions): Promise<void> {
  const { env } = options;
  setupSecurityHeaders(app);
  setupPrivateDataGuard(app, { strict: options.strictPrivateDataGuard ?? env.SITE_ENV !== 'production' });
  await registerCspReport(app, {
    trustedOrigins: reportingOrigins(env),
    flushIntervalMs: options.cspReportFlushIntervalMs,
  });
}

export { CSP_REPORT_PATH, CspReportSink, isNoise, parseCspReports, scrubUrl } from './csp-report.ts';
export { API_HSTS, API_PERMISSIONS_POLICY, HSTS_MAX_AGE_SECONDS, privatizeCookieResponse } from './headers.ts';
