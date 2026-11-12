/**
 * JavaScript pass for listings that combine two or more categories/tags (2026-11 incident: a
 * botnet of headless browsers on hundreds of rotating addresses, one fresh browser context per
 * URL, never coming back).
 *
 * - No pass: a tiny page whose script sets the `sotf_pass` cookie and reloads (a real browser
 *   blinks once; a client without JavaScript never gets a render).
 * - Fresh pass (issued less than `TRUSTED_AFTER_MS` ago): the render draws from a small site-wide
 *   budget, so however many addresses a botnet rotates, these renders stay bounded. When it is
 *   spent, a "Loading filters…" page reloads itself once the pass is trusted (a few seconds).
 * - Trusted pass (older): renders like any page, subject only to the per-IP limits. People keep
 *   their pass while they browse; the botnet never reuses one.
 *
 * The cookie is `<issued second>.<sig>`, `sig` = HMAC-SHA256(key, second | /16 of the client),
 * valid two days, so a copied cookie only works for one network. The key is derived from
 * `INTERNAL_SECRET`; without one (development) the pass is off.
 */
import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { clientIp, rateKeys } from './rate-limit.ts';

export const PASS_COOKIE = 'sotf_pass';
const MINUTE_MS = 60_000;
const SECOND_MS = 1000;
const PASS_TTL_MS = 2 * 86_400_000;
/** Age after which a pass is trusted. */
export const TRUSTED_AFTER_MS = 8000;
/** Renders per minute, site-wide, for requests with a fresh pass. */
export const FRESH_BUDGET_PER_MINUTE = 30;

/** The script of the pass page: constant, so its CSP hash is constant too. */
export const PASS_SCRIPT =
  "(function(){var t=document.documentElement.getAttribute('data-pass');document.cookie='sotf_pass='+t+';path=/;max-age=172800;samesite=lax'+(location.protocol==='https:'?';secure':'');location.reload();})();";
const PASS_SCRIPT_HASH = `'sha256-${createHash('sha256').update(PASS_SCRIPT).digest('base64')}'`;

function signature(secret: string, second: number, wide: string): string {
  return createHmac('sha256', `sotf-pass|${secret}`).update(`${second}|${wide}`).digest('base64url').slice(0, 22);
}

/** The pass issued now for a client network. */
export function passFor(secret: string, wide: string, now = Date.now()): string {
  const second = Math.floor(now / SECOND_MS);
  return `${second}.${signature(secret, second, wide)}`;
}

function cookieValue(headers: Headers, name: string): string | null {
  for (const part of (headers.get('cookie') ?? '').split(';')) {
    const [key, ...rest] = part.trim().split('=');
    if (key === name) return rest.join('=');
  }
  return null;
}

/** Age in ms of the request's valid pass for its network, or null when it has none. */
export function passAge(headers: Headers, secret: string, wide: string, now = Date.now()): number | null {
  const value = cookieValue(headers, PASS_COOKIE);
  const match = value ? /^(\d{9,11})\.([\w-]{22})$/.exec(value) : null;
  if (!match) return null;
  const second = Number(match[1]);
  const age = now - second * SECOND_MS;
  if (age < -MINUTE_MS || age > PASS_TTL_MS) return null;
  const expected = Buffer.from(signature(secret, second, wide));
  const given = Buffer.from(match[2] ?? '');
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null;
  return Math.max(0, age);
}

const TAXONOMY_PARAMS = new Set(['category', 'excludeCategory', 'tag', 'excludeTag']);
const LISTING_PATH = /^\/(?:mods|builds|categories\/[^/]+|tags\/[^/]+)\/?$/;

function isMember(headers: Headers): boolean {
  return /(?:^|;\s*)(?:__Host-sotf_sid|sotf_li)=/.test(headers.get('cookie') ?? '');
}

function multiFilterListing(url: URL): boolean {
  if (!LISTING_PATH.test(url.pathname)) return false;
  // A category or tag hub already filters by its own category or tag.
  let count = /^\/(?:categories|tags)\//.test(url.pathname) ? 1 : 0;
  for (const name of url.searchParams.keys()) if (TAXONOMY_PARAMS.has(name) && ++count >= 2) return true;
  return false;
}

/**
 * - `exempt`: not a multi-filter listing, a member, or the pass is off (development);
 * - `missing`: needs the pass page;
 * - `fresh` / `trusted`: has a valid pass, younger / older than `TRUSTED_AFTER_MS`.
 */
export type PassState = 'exempt' | 'missing' | 'fresh' | 'trusted';

/** Whether a request carries a trusted pass (any URL): lets it skip the per-network budgets. */
export function hasTrustedPass(headers: Headers, secret: string | undefined, now = Date.now()): boolean {
  if (!secret) return false;
  const ip = clientIp(headers);
  const keys = ip ? rateKeys(ip) : null;
  if (!keys) return false;
  const age = passAge(headers, secret, keys.wide, now);
  return age !== null && age >= TRUSTED_AFTER_MS;
}

export function passState(url: URL, headers: Headers, secret: string | undefined, now = Date.now()): PassState {
  if (!secret || isMember(headers) || !multiFilterListing(url)) return 'exempt';
  const ip = clientIp(headers);
  const keys = ip ? rateKeys(ip) : null;
  if (!keys) return 'exempt';
  const age = passAge(headers, secret, keys.wide, now);
  if (age === null) return 'missing';
  return age >= TRUSTED_AFTER_MS ? 'trusted' : 'fresh';
}

let budgetWindow = -1;
let budgetUsed = 0;

/** Takes one render from the site-wide fresh-pass budget; returns false when it is spent. */
export function takeFreshBudget(now = Date.now()): boolean {
  const window = Math.floor(now / MINUTE_MS);
  if (window !== budgetWindow) {
    budgetWindow = window;
    budgetUsed = 0;
  }
  if (budgetUsed >= FRESH_BUDGET_PER_MINUTE) return false;
  budgetUsed++;
  return true;
}

/**
 * Shown instead of the render when the fresh-pass budget is spent: reloads (meta refresh, no
 * script) once the pass is trusted, so a person just waits a few seconds on a loading page.
 */
export function waitPage(headers: Headers, secret: string, now = Date.now()): Response {
  const ip = clientIp(headers);
  const keys = ip ? rateKeys(ip) : null;
  const age = keys ? (passAge(headers, secret, keys.wide, now) ?? 0) : 0;
  const seconds = Math.max(1, Math.ceil((TRUSTED_AFTER_MS - age) / 1000) + 1);
  return new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="${seconds}"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Loading filters… · SOTF Mods</title><style>body{background:#111;color:#bbb;font:15px system-ui,sans-serif;display:grid;place-items:center;min-height:100vh;margin:0}</style></head><body><p>Loading filters…</p></body></html>`,
    {
      status: 200,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'no-store',
        'x-robots-tag': 'noindex',
        'x-sotf-gate': 'wait',
        'content-security-policy':
          "default-src 'none'; style-src 'unsafe-inline'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'",
      },
    },
  );
}

/** Resets the budget (tests). */
export function resetFreshBudget(): void {
  budgetWindow = -1;
  budgetUsed = 0;
}

/** The pass page for a request in state `missing`. */
export function passPage(headers: Headers, secret: string, now = Date.now()): Response {
  const ip = clientIp(headers);
  const keys = ip ? rateKeys(ip) : null;
  const pass = keys ? passFor(secret, keys.wide, now) : '';
  return new Response(
    `<!doctype html><html lang="en" data-pass="${pass}"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SOTF Mods</title><style>body{background:#111;color:#bbb;font:15px system-ui,sans-serif;display:grid;place-items:center;min-height:100vh;margin:0}</style></head><body><noscript>Combining filters needs JavaScript. <a href="/mods" style="color:#f87171">Browse all mods</a>.</noscript><script>${PASS_SCRIPT}</script></body></html>`,
    {
      // 200, not 403: browsers log any 4xx document as a console error, and people pass through
      // this page. `x-sotf-gate` marks it in the access log.
      status: 200,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'no-store',
        'x-robots-tag': 'noindex',
        'x-sotf-gate': 'pass',
        'content-security-policy': `default-src 'none'; script-src ${PASS_SCRIPT_HASH}; style-src 'unsafe-inline'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'`,
      },
    },
  );
}
