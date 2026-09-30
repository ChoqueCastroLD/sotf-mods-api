/**
 * Content Security Policy of the public site — **placeholder of WP-22, finalized by WP-93**
 * (PLAN §9.1, report-only period in staging).
 *
 * Astro emits the policy as a `<meta http-equiv="content-security-policy">` and adds hashes of
 * every script and style it bundles. Inline scripts written with `is:inline` are not hashed by
 * Astro, so their hashes are listed here: the theme and banner init scripts of `@sotf/ui`, the
 * legacy-token cleanup and the Speculation Rules block. `frame-ancestors` cannot live in a
 * `<meta>` policy; it is sent as a header by `headers.ts`.
 *
 * Third parties (PLAN §8.5, §8.8): AdSense and Google's CMP (guests who consent), Cloudflare
 * Turnstile (auth forms), YouTube facades (`youtube-nocookie`). Nothing else.
 */
import { createHash } from 'node:crypto';
import { BANNER_INIT_SCRIPT } from '@sotf/ui/dismissals';
import { THEME_INIT_SCRIPT } from '@sotf/ui/theme';
import { LEGACY_CLEANUP_SCRIPT } from '../../scripts/legacy-cleanup.ts';
import { SPECULATION_RULES_JSON } from '../speculation.ts';

type CspHash = `sha256-${string}`;

/** `sha256-…` hash of an inline script or style, as Astro expects it (without quotes). */
export function sha256Source(source: string): CspHash {
  return `sha256-${createHash('sha256').update(source, 'utf8').digest('base64')}`;
}

/** Inline scripts rendered with `is:inline` by the layout. Keep in sync with `BaseLayout.astro`. */
export const INLINE_SCRIPTS: readonly string[] = [
  THEME_INIT_SCRIPT,
  BANNER_INIT_SCRIPT,
  LEGACY_CLEANUP_SCRIPT,
  SPECULATION_RULES_JSON,
];

/** Origins of AdSense and Google's consent platform (Funding Choices). */
export const GOOGLE_ADS_SCRIPT_ORIGINS = [
  'https://pagead2.googlesyndication.com',
  'https://fundingchoicesmessages.google.com',
  'https://*.adtrafficquality.google',
  'https://www.googletagservices.com',
  'https://partner.googleadservices.com',
] as const;

export const TURNSTILE_ORIGIN = 'https://challenges.cloudflare.com';

/** Extra directives (Astro adds `script-src` and `style-src`). */
export const CSP_DIRECTIVES = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "manifest-src 'self'",
  "font-src 'self'",
  "worker-src 'self' blob:",
  // Media from R2 and the legacy images of descriptions; ads bring their own creatives.
  "img-src 'self' data: blob: https:",
  "media-src 'self' https://r2.sotf-mods.com",
  `connect-src 'self' https://r2.sotf-mods.com https://*.r2.cloudflarestorage.com ${GOOGLE_ADS_SCRIPT_ORIGINS.join(' ')} https://*.google.com https://*.doubleclick.net`,
  `frame-src 'self' https://www.youtube-nocookie.com ${TURNSTILE_ORIGIN} https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://*.googlesyndication.com https://www.google.com https://fundingchoicesmessages.google.com`,
] as const;

/** The `security.csp` object of `astro.config.mjs`. */
export function cspConfig() {
  return {
    algorithm: 'SHA-256' as const,
    directives: [...CSP_DIRECTIVES],
    scriptDirective: {
      resources: ["'self'", ...GOOGLE_ADS_SCRIPT_ORIGINS, TURNSTILE_ORIGIN],
      hashes: INLINE_SCRIPTS.map(sha256Source),
    },
    styleDirective: {
      // Base UI / floating-ui and ad slots set `style` attributes (docs/backlog/WP-12.md): allow
      // attributes only; `<style>` elements stay hash-checked.
      // (Astro warns that `'self'` does not apply to `style-src-attr`: intended.)
      resources: ["'self'", { resource: "'unsafe-inline'", kind: 'attribute' as const }],
    },
  };
}
