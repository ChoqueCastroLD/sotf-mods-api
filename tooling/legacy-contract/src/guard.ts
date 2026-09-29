/**
 * Production safety rules (PLAN §12.1 "Datos", §14): against the production hosts only GET and
 * HEAD are allowed, never to download, favorite, approve/unapprove or KelvinSeek routes, and at
 * most 2 requests per second. Enforced *before* any socket is opened.
 */

/** Hosts that are production (the legacy stack today, the v2 stack after the cutover). */
export const PRODUCTION_HOSTS = [
  'sotf-mods.com',
  'www.sotf-mods.com',
  'api.sotf-mods.com',
  'r2.sotf-mods.com',
] as const;

/** Minimum interval between two requests to a production host (≤ 2 rps). */
export const PRODUCTION_MIN_INTERVAL_MS = 500;

/** Paths that mutate state or cost money (counters, OpenAI) and must never be hit in production. */
const FORBIDDEN_PRODUCTION_PATHS: ReadonlyArray<{ pattern: RegExp; reason: string }> = [
  { pattern: /\/download(\/|$)/i, reason: 'download routes count downloads' },
  { pattern: /\/favorite(s)?(\/|$)/i, reason: 'favorite routes mutate state' },
  { pattern: /\/(un)?approve(\/|$)/i, reason: 'approve/unapprove routes mutate state' },
  { pattern: /\/kelvinseek(\/|$)/i, reason: 'KelvinSeek writes the database and calls OpenAI' },
  { pattern: /\/kelvin-gpt(\/|$)/i, reason: 'KelvinGPT routes are KelvinSeek aliases' },
];

export class ProductionGuardError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ProductionGuardError';
  }
}

export function isProductionHost(hostname: string, productionHosts: readonly string[] = PRODUCTION_HOSTS): boolean {
  const host = hostname.toLowerCase().replace(/\.$/, '');
  return productionHosts.includes(host);
}

/** Returns why the request is forbidden against production, or `null` when it is allowed. */
export function productionViolation(method: string, url: URL): string | null {
  const verb = method.toUpperCase();
  if (verb !== 'GET' && verb !== 'HEAD') return `${verb} is not allowed against production (only GET and HEAD)`;
  let path = url.pathname;
  try {
    path = decodeURIComponent(path);
  } catch {
    // keep the raw path: a malformed escape cannot hide a forbidden segment from the raw check
  }
  for (const rule of FORBIDDEN_PRODUCTION_PATHS) {
    if (rule.pattern.test(path) || rule.pattern.test(url.pathname)) return `${url.pathname}: ${rule.reason}`;
  }
  return null;
}

/** Throws `ProductionGuardError` when the request is not allowed against a production host. */
export function assertProductionSafe(
  method: string,
  url: URL,
  productionHosts: readonly string[] = PRODUCTION_HOSTS,
): void {
  if (!isProductionHost(url.hostname, productionHosts)) return;
  const violation = productionViolation(method, url);
  if (violation) throw new ProductionGuardError(`refused (${url.hostname} is production): ${violation}`);
}
