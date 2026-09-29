/**
 * Logger (PLAN §2.6 "Logs", §10.3): pino JSON with `reqId` (cf-ray or uuid). No PII in clear:
 * credentials, cookies and internal secrets are redacted; emails and IPs are logged only as
 * `logHash()`/`ipHash`.
 */
import { type DestinationStream, type Logger as PinoLogger, pino, stdSerializers } from 'pino';

export type Logger = PinoLogger;

export type LogLevel = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace' | 'silent';

/** Paths removed from every log line. */
export const REDACT_PATHS = [
  'req.headers.cookie',
  'req.headers.authorization',
  'req.headers["x-internal-auth"]',
  'req.headers["cf-connecting-ip"]',
  'req.headers["x-forwarded-for"]',
  'req.headers["x-real-ip"]',
  'res.headers["set-cookie"]',
  '*.password',
  '*.newPassword',
  '*.currentPassword',
  '*.token',
  '*.secret',
  '*.email',
] as const;

/** Path of a URL without its query string (queries may carry PII such as KelvinSeek's chat_id). */
function pathOnly(url: unknown): string | undefined {
  if (typeof url !== 'string') return undefined;
  const q = url.indexOf('?');
  return q === -1 ? url : url.slice(0, q);
}

/**
 * Serializers for HTTP request/response objects (Fastify): method, path and ids only. Never the
 * client address, the query string, cookies or other headers.
 */
export const httpSerializers = {
  req: (req: { method?: string; url?: string; id?: string }) => ({ method: req.method, path: pathOnly(req.url) }),
  res: (res: { statusCode?: number }) => ({ statusCode: res.statusCode }),
  err: stdSerializers.err,
};

export interface CreateLoggerOptions {
  service: 'api' | 'worker' | 'web' | 'cli' | (string & {});
  level?: LogLevel;
  version?: string;
  /** Destination stream (tests). Defaults to stdout. */
  destination?: NodeJS.WritableStream;
}

export function createLogger(options: CreateLoggerOptions): Logger {
  const config = {
    level: options.level ?? 'info',
    base: { service: options.service, ...(options.version ? { version: options.version } : {}) },
    redact: { paths: [...REDACT_PATHS], censor: '[redacted]' },
    timestamp: pino.stdTimeFunctions.isoTime,
    formatters: { level: (label: string) => ({ level: label }) },
    serializers: httpSerializers,
  };
  return options.destination ? pino(config, options.destination as unknown as DestinationStream) : pino(config);
}

/** A logger that discards everything (tests, CLIs that print themselves). */
export function silentLogger(): Logger {
  return pino({ level: 'silent' });
}
