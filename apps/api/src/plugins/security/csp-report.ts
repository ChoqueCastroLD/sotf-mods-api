/**
 * CSP violation collector (PLAN §9.1: one week of *report-only* in staging before enforcing).
 *
 * `POST /api/v2/security/csp-report` receives both formats browsers send:
 *
 * - `report-uri` → `application/csp-report`: `{ "csp-report": { "document-uri", … } }`;
 * - `report-to` (Reporting API) → `application/reports+json`: `[{ type: "csp-violation", body }]`.
 *
 * The web sends the page policy with `report-uri` and `report-to csp` pointing here (same origin:
 * `sotf-mods.com/api/v2/*` is routed to the API). Reports are untrusted input, so:
 *
 * - body ≤ 64 KB, at most 20 reports per request, every string truncated;
 * - only reports whose document belongs to a trusted site origin are kept (forged reports from
 *   elsewhere are dropped);
 * - noise from browser extensions and injected `about:`/`data:` frames is dropped;
 * - URLs lose their query string and fragment (they may carry tokens), IPs are never logged;
 * - identical violations are aggregated: the first one is logged at once (`warn`), repeats are
 *   counted and summarised once per minute, with a bounded number of distinct keys;
 * - the soft `beacon` bucket (120/min per IP) applies: over it, reports are accepted and dropped.
 *
 * Always answers `204` (browsers ignore the response; errors would only generate retries).
 */
import { cleanPath } from '@sotf/core/analytics/ingest';
import type { FastifyBaseLogger, FastifyInstance, FastifyRequest } from 'fastify';

export const CSP_REPORT_PATH = '/api/v2/security/csp-report';
export const CSP_REPORT_BODY_LIMIT = 64 * 1024;
const MAX_REPORTS_PER_REQUEST = 20;
const MAX_DISTINCT_KEYS = 500;
const FLUSH_INTERVAL_MS = 60_000;
const REPORT_CONTENT_TYPES = ['application/csp-report', 'application/reports+json'] as const;

export interface CspViolation {
  /** Path of the page (no query). */
  documentPath: string;
  documentOrigin: string;
  /** `inline`, `eval`, `wasm-eval`, `data`, `blob` or an origin + path (no query). */
  blocked: string;
  directive: string;
  disposition: 'enforce' | 'report';
  sourceFile: string | null;
  line: number | null;
  column: number | null;
  /** First 40 characters of the offending inline code (browsers send it with `'report-sample'`). */
  sample: string | null;
}

const EXTENSION_SCHEMES = /^(?:chrome|moz|safari|safari-web|ms-browser|edge)-extension:/i;
const KEYWORD_BLOCKS = new Set([
  'inline',
  'eval',
  'wasm-eval',
  'trusted-types-policy',
  'trusted-types-sink',
  'data',
  'blob',
  'self',
]);

function text(value: unknown, max = 512): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed === '' ? null : trimmed.slice(0, max);
}

function integer(value: unknown): number | null {
  const n = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : Number.NaN;
  return Number.isInteger(n) && n >= 0 && n < 10_000_000 ? n : null;
}

/** Origin + path without query or fragment; keywords (`inline`, `eval`…) and schemes kept as is. */
export function scrubUrl(raw: string | null): string | null {
  if (!raw) return null;
  if (KEYWORD_BLOCKS.has(raw)) return raw;
  try {
    const url = new URL(raw);
    if (url.protocol === 'http:' || url.protocol === 'https:') return `${url.origin}${url.pathname}`.slice(0, 300);
    return url.protocol.replace(/:$/, '');
  } catch {
    return raw.split(/[?#]/, 1)[0]?.slice(0, 300) ?? null;
  }
}

/** Directive name only (`script-src-elem`), from `effective-directive` or `violated-directive`. */
function directiveName(value: string | null): string {
  const name = value?.split(/\s+/, 1)[0]?.toLowerCase() ?? '';
  return /^[a-z-]{3,40}$/.test(name) ? name : 'unknown';
}

function fromFields(fields: Record<string, unknown>, legacy: boolean): CspViolation | null {
  const pick = (modern: string, old: string) => (legacy ? fields[old] : fields[modern]);
  const documentUrl = text(pick('documentURL', 'document-uri'), 2048);
  if (!documentUrl) return null;
  let document: URL;
  try {
    document = new URL(documentUrl);
  } catch {
    return null;
  }
  const blocked = scrubUrl(text(pick('blockedURL', 'blocked-uri'), 2048)) ?? 'unknown';
  const sourceFile = scrubUrl(text(pick('sourceFile', 'source-file'), 2048));
  const disposition = text(pick('disposition', 'disposition'), 16) === 'report' ? 'report' : 'enforce';
  return {
    // Secrets that live in a path (a shared log's id) never reach the logs.
    documentPath: document.pathname === '' ? '' : cleanPath(document.pathname).slice(0, 300),
    documentOrigin: document.origin,
    blocked,
    directive: directiveName(
      text(pick('effectiveDirective', 'effective-directive'), 80) ?? text(fields['violated-directive'], 200),
    ),
    disposition,
    sourceFile,
    line: integer(pick('lineNumber', 'line-number')),
    column: integer(pick('columnNumber', 'column-number')),
    sample: text(pick('sample', 'script-sample'), 40),
  };
}

/** Normalises a parsed body of either format into violations (untrusted input; never throws). */
export function parseCspReports(body: unknown): CspViolation[] {
  const out: CspViolation[] = [];
  if (Array.isArray(body)) {
    for (const item of body.slice(0, MAX_REPORTS_PER_REQUEST)) {
      if (!item || typeof item !== 'object') continue;
      const report = item as { type?: unknown; body?: unknown };
      if (report.type !== 'csp-violation' || !report.body || typeof report.body !== 'object') continue;
      const violation = fromFields(report.body as Record<string, unknown>, false);
      if (violation) out.push(violation);
    }
    return out;
  }
  if (body && typeof body === 'object') {
    const legacy = (body as Record<string, unknown>)['csp-report'];
    if (legacy && typeof legacy === 'object') {
      const violation = fromFields(legacy as Record<string, unknown>, true);
      if (violation) out.push(violation);
    }
  }
  return out;
}

/** Browser-extension and injected-frame noise that says nothing about the site. */
export function isNoise(violation: CspViolation): boolean {
  if (EXTENSION_SCHEMES.test(violation.blocked)) return true;
  if (violation.sourceFile && EXTENSION_SCHEMES.test(violation.sourceFile)) return true;
  if (/-extension$/.test(violation.blocked) || /-extension$/.test(violation.sourceFile ?? '')) return true;
  return violation.blocked === 'about' || violation.documentPath === '' || violation.documentOrigin === 'null';
}

interface Aggregate {
  violation: CspViolation;
  count: number;
}

/** Deduplicates violations and logs them without flooding the logs. */
export class CspReportSink {
  readonly #log: FastifyBaseLogger;
  readonly #pending = new Map<string, Aggregate>();
  readonly #seen = new Set<string>();
  #dropped = 0;
  #timer: NodeJS.Timeout | null = null;

  constructor(log: FastifyBaseLogger) {
    this.#log = log;
  }

  static keyOf(v: CspViolation): string {
    return [v.disposition, v.directive, v.blocked, v.documentPath, v.sourceFile ?? '', v.line ?? ''].join('|');
  }

  record(violation: CspViolation): void {
    const key = CspReportSink.keyOf(violation);
    if (!this.#seen.has(key)) {
      if (this.#seen.size >= MAX_DISTINCT_KEYS) {
        this.#dropped += 1;
        return;
      }
      this.#seen.add(key);
      this.#log.warn({ csp: violation }, 'csp violation');
      return;
    }
    const aggregate = this.#pending.get(key);
    if (aggregate) aggregate.count += 1;
    else this.#pending.set(key, { violation, count: 1 });
  }

  /** Logs the repeats counted since the last flush (and the overflow), then resets the window. */
  flush(): void {
    for (const { violation, count } of this.#pending.values()) {
      this.#log.warn({ csp: violation, repeats: count }, 'csp violation repeated');
    }
    if (this.#dropped > 0) {
      this.#log.warn({ dropped: this.#dropped }, 'csp violations dropped (too many distinct reports)');
    }
    this.#pending.clear();
    this.#seen.clear();
    this.#dropped = 0;
  }

  start(intervalMs = FLUSH_INTERVAL_MS): void {
    if (this.#timer) return;
    this.#timer = setInterval(() => this.flush(), intervalMs);
    this.#timer.unref();
  }

  stop(): void {
    if (this.#timer) clearInterval(this.#timer);
    this.#timer = null;
    this.flush();
  }
}

export interface CspReportOptions {
  /** Site origins whose pages may report (PUBLIC_SITE_URL + CSRF_TRUSTED_ORIGINS). */
  trustedOrigins: readonly string[];
  flushIntervalMs?: number;
}

function parseBody(raw: string): unknown {
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function registerCspReport(app: FastifyInstance, options: CspReportOptions): Promise<void> {
  const trusted = new Set(options.trustedOrigins);
  const sink = new CspReportSink(app.log);
  sink.start(options.flushIntervalMs);
  app.addHook('onClose', async () => sink.stop());

  await app.register(async (scope) => {
    // Scoped parsers: the report media types are accepted by this route only.
    scope.addContentTypeParser(
      [...REPORT_CONTENT_TYPES],
      { parseAs: 'string', bodyLimit: CSP_REPORT_BODY_LIMIT },
      (_request, body, done) => done(null, parseBody(body as string)),
    );
    scope.route({
      method: 'POST',
      url: CSP_REPORT_PATH,
      bodyLimit: CSP_REPORT_BODY_LIMIT,
      // Reports carry no credentials and change nothing: no CSRF check (see README), soft bucket.
      config: { bucket: 'beacon', csrfExempt: true },
      handler: async (request: FastifyRequest, reply) => {
        if (!request.overSoftLimit) {
          for (const violation of parseCspReports(request.body)) {
            if (!trusted.has(violation.documentOrigin) || isNoise(violation)) continue;
            sink.record(violation);
          }
        }
        return reply.code(204).header('cache-control', 'no-store').send();
      },
    });
  });
}
