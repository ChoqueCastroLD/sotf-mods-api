/**
 * One-time JavaScript pass for listings that combine two or more categories/tags (2026-11 incident:
 * hundreds of rotating addresses requested such combinations without ever running the page's
 * scripts). Anonymous requests without a valid `sotf_pass` cookie get a tiny page whose script
 * sets the cookie and reloads: a real browser sees a blink once a day, only when combining
 * filters; a client that does not run JavaScript never gets a render.
 *
 * The cookie is `<day>.<sig>`, `sig` = HMAC-SHA256(key, day | /16 of the client), valid today and
 * yesterday, so a copied cookie only works for one network for a day. The key is derived from
 * `INTERNAL_SECRET`; without one (development) the pass is off.
 */
import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { clientIp, rateKeys } from './rate-limit.ts';

export const PASS_COOKIE = 'sotf_pass';
const DAY_MS = 86_400_000;

/** The script of the pass page: constant, so its CSP hash is constant too. */
export const PASS_SCRIPT =
  "(function(){var t=document.documentElement.getAttribute('data-pass');document.cookie='sotf_pass='+t+';path=/;max-age=172800;samesite=lax'+(location.protocol==='https:'?';secure':'');location.reload();})();";
const PASS_SCRIPT_HASH = `'sha256-${createHash('sha256').update(PASS_SCRIPT).digest('base64')}'`;

function signature(secret: string, day: number, wide: string): string {
  return createHmac('sha256', `sotf-pass|${secret}`).update(`${day}|${wide}`).digest('base64url').slice(0, 22);
}

/** The pass for a client network on a given day. */
export function passFor(secret: string, wide: string, now = Date.now()): string {
  const day = Math.floor(now / DAY_MS);
  return `${day}.${signature(secret, day, wide)}`;
}

function cookieValue(headers: Headers, name: string): string | null {
  for (const part of (headers.get('cookie') ?? '').split(';')) {
    const [key, ...rest] = part.trim().split('=');
    if (key === name) return rest.join('=');
  }
  return null;
}

/** Whether the request carries a valid pass for its network (today's or yesterday's). */
export function hasValidPass(headers: Headers, secret: string, wide: string, now = Date.now()): boolean {
  const value = cookieValue(headers, PASS_COOKIE);
  const match = value ? /^(\d{5,6})\.([\w-]{22})$/.exec(value) : null;
  if (!match) return false;
  const day = Number(match[1]);
  const today = Math.floor(now / DAY_MS);
  if (day !== today && day !== today - 1) return false;
  const expected = Buffer.from(signature(secret, day, wide));
  const given = Buffer.from(match[2] ?? '');
  return expected.length === given.length && timingSafeEqual(expected, given);
}

const TAXONOMY_PARAMS = new Set(['category', 'excludeCategory', 'tag', 'excludeTag']);
const LISTING_PATH = /^\/(?:mods|builds|categories\/[^/]+|tags\/[^/]+)\/?$/;

function needsPass(url: URL, headers: Headers): boolean {
  if (!LISTING_PATH.test(url.pathname)) return false;
  if (/(?:^|;\s*)(?:__Host-sotf_sid|sotf_li)=/.test(headers.get('cookie') ?? '')) return false;
  let count = 0;
  for (const name of url.searchParams.keys()) if (TAXONOMY_PARAMS.has(name) && ++count >= 2) return true;
  return false;
}

/**
 * The pass page when the request needs one and has none, else `null`. `secret` undefined
 * (development) turns the pass off.
 */
export function passGate(url: URL, headers: Headers, secret: string | undefined, now = Date.now()): Response | null {
  if (!secret || !needsPass(url, headers)) return null;
  const ip = clientIp(headers);
  const keys = ip ? rateKeys(ip) : null;
  if (!keys) return null;
  if (hasValidPass(headers, secret, keys.wide, now)) return null;
  const pass = passFor(secret, keys.wide, now);
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
