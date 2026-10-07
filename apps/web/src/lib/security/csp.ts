/**
 * Content Security Policy of the public site and the console (PLAN §9.1, WP-93).
 *
 * Two halves:
 *
 * 1. **Build time** — {@link cspConfig} is the `security.csp` of `astro.config.mjs`. Astro renders
 *    the policy of every SSR page into a `Content-Security-Policy` header, adding the hashes of
 *    every script and stylesheet it bundles. Inline scripts written with `is:inline` and the
 *    `<style>` elements injected at runtime by libraries are not seen by Astro, so their hashes
 *    are listed here (`INLINE_SCRIPTS`, {@link thirdPartyStyleHashes}).
 * 2. **Run time** — `headers.ts` completes that header per environment ({@link finalizePolicy}):
 *    `frame-ancestors` (cannot live in a `<meta>`), `upgrade-insecure-requests` on HTTPS,
 *    reporting, the configured R2 public origin and the local services of development; then it is
 *    sent as enforcing or as `Content-Security-Policy-Report-Only` ({@link cspModeFor}).
 *
 * Decisions (reviewed in WP-93):
 *
 * - **No `'strict-dynamic'`** (PLAN §9.1 asked for it): Astro emits its bundles as external
 *   `<script type="module" src="/_astro/…">` without SRI `integrity`, and CSP3 browsers ignore
 *   `'self'` under `'strict-dynamic'`, so every page script would be blocked (verified with
 *   Chromium: an external script whose hash is listed does not run without `integrity`). The
 *   policy is an allowlist instead: `'self'` + hashes of the inline scripts + the exact third-party
 *   script origins (AdSense/CMP and Turnstile, both injected by our own scripts).
 * - `style-src-attr 'unsafe-inline'`: React/Base UI/floating-ui position popups and ad slots with
 *   `style` attributes (docs/backlog/WP-12.md). `<style>` elements stay hash-checked: the only
 *   runtime ones (sonner's toast CSS and Base UI's scrollbar rule) are hashed from the installed
 *   packages, so an upgrade that changes them is picked up by the next build.
 * - `img-src` is closed to R2, YouTube thumbnails and the ad network: remote images of legacy
 *   descriptions are replicated to R2 (WP-40); the ones that could not be fetched stay blocked.
 * - `frame-ancestors 'none'` everywhere except `/embed/*` (`*`), sent as a header.
 *
 * Third parties (PLAN §8.5, §8.8): AdSense and Google's CMP (guests who consent), Cloudflare
 * Turnstile (auth forms), YouTube facades (`youtube-nocookie`). Nothing else.
 */
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BANNER_INIT_SCRIPT } from '@sotf/ui/dismissals';
import { THEME_INIT_SCRIPT } from '@sotf/ui/theme';
import { FOOTER_ACCORDION_SCRIPT } from '../../scripts/footer-accordion.ts';
import { LEGACY_CLEANUP_SCRIPT } from '../../scripts/legacy-cleanup.ts';
import { SPECULATION_RULES_JSON } from '../speculation.ts';

type CspHash = `sha256-${string}`;

/** `sha256-…` hash of an inline script or style, as Astro expects it (without quotes). */
export function sha256Source(source: string): CspHash {
  return `sha256-${createHash('sha256').update(source, 'utf8').digest('base64')}`;
}

/** Inline scripts rendered with `is:inline` by the layouts. Keep in sync with `BaseLayout.astro`/`ConsoleShell.astro`. */
export const INLINE_SCRIPTS: readonly string[] = [
  THEME_INIT_SCRIPT,
  BANNER_INIT_SCRIPT,
  LEGACY_CLEANUP_SCRIPT,
  SPECULATION_RULES_JSON,
  FOOTER_ACCORDION_SCRIPT,
];

/** Where browsers send violation reports (API collector, same origin: `/api/v2/*`). */
export const CSP_REPORT_PATH = '/api/v2/security/csp-report';
/** Reporting API endpoint name (`Reporting-Endpoints: csp="…"`, `report-to csp`). */
export const CSP_REPORT_GROUP = 'csp';

/** Production public origin of R2 (media, avatars, downloads' covers). */
export const R2_PUBLIC_ORIGIN = 'https://r2.sotf-mods.com';
/** S3 API of R2: presigned uploads are `PUT` straight from the browser (WP-31/WP-74). */
export const R2_S3_ORIGIN = 'https://*.r2.cloudflarestorage.com';

/** Script origins of AdSense and Google's consent platform (Funding Choices). */
export const GOOGLE_ADS_SCRIPT_ORIGINS = [
  'https://pagead2.googlesyndication.com',
  'https://fundingchoicesmessages.google.com',
  'https://*.adtrafficquality.google',
  'https://www.googletagservices.com',
  'https://partner.googleadservices.com',
] as const;

/** Hosts AdSense/CMP use for beacons, pixels and creatives outside their iframes. */
export const GOOGLE_ADS_ORIGINS = [
  'https://*.googlesyndication.com',
  'https://*.doubleclick.net',
  'https://*.google.com',
  'https://*.gstatic.com',
  'https://*.adtrafficquality.google',
  'https://*.googleadservices.com',
] as const;

export const TURNSTILE_ORIGIN = 'https://challenges.cloudflare.com';
/** Cloudflare Web Analytics beacon (injected by the edge) and its collector. */
export const CF_INSIGHTS_SCRIPT_ORIGIN = 'https://static.cloudflareinsights.com';
export const CF_INSIGHTS_CONNECT_ORIGIN = 'https://cloudflareinsights.com';
export const YOUTUBE_EMBED_ORIGIN = 'https://www.youtube-nocookie.com';
export const YOUTUBE_THUMBNAIL_ORIGIN = 'https://i.ytimg.com';

const uniq = (values: readonly string[]): string[] => [...new Set(values)];

/**
 * Google's consent dialog (Funding Choices, shown to EEA/UK visitors before ads) injects its own
 * `<style>` elements with per-visitor content and loads Google Fonts: hashes cannot cover them,
 * so `<style>` elements are allowed inline (`'unsafe-inline'`; style injection only, scripts stay
 * hash-checked) and the two font origins are listed.
 */
export const GOOGLE_FONTS_CSS_ORIGIN = 'https://fonts.googleapis.com';
export const GOOGLE_FONTS_FILES_ORIGIN = 'https://fonts.gstatic.com';

/** Directives Astro renders next to `script-src`/`style-src` (build-time part of the policy). */
export const CSP_DIRECTIVES = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "manifest-src 'self'",
  `font-src 'self' ${GOOGLE_FONTS_FILES_ORIGIN}`,
  "worker-src 'self' blob:",
  `img-src ${uniq(["'self'", 'data:', 'blob:', R2_PUBLIC_ORIGIN, YOUTUBE_THUMBNAIL_ORIGIN, ...GOOGLE_ADS_ORIGINS]).join(' ')}`,
  `media-src 'self' blob: ${R2_PUBLIC_ORIGIN}`,
  `connect-src ${uniq(["'self'", R2_PUBLIC_ORIGIN, R2_S3_ORIGIN, TURNSTILE_ORIGIN, CF_INSIGHTS_CONNECT_ORIGIN, ...GOOGLE_ADS_SCRIPT_ORIGINS, ...GOOGLE_ADS_ORIGINS]).join(' ')}`,
  `frame-src ${uniq(["'self'", YOUTUBE_EMBED_ORIGIN, TURNSTILE_ORIGIN, 'https://*.googlesyndication.com', 'https://*.doubleclick.net', 'https://www.google.com', 'https://fundingchoicesmessages.google.com']).join(' ')}`,
] as const;

// ── Runtime `<style>` elements of dependencies ─────────────────────────────────────────────────

/** Resolves `specifier` as seen from the package `fromPackage` (sonner and Base UI are deps of @sotf/ui). */
function packageFile(fromPackage: string, specifier: string): string {
  const anchor = createRequire(fileURLToPath(import.meta.url)).resolve(fromPackage);
  return createRequire(anchor).resolve(specifier);
}

/** The CSS sonner injects with `__insertCSS("…")` when `@sotf/ui/toast` is imported. */
export function sonnerInjectedCss(): string {
  const source = readFileSync(packageFile('@sotf/ui/theme', 'sonner'), 'utf8');
  const match = /__insertCSS\(("(?:[^"\\]|\\.)*")\)/.exec(source);
  if (!match?.[1]) throw new Error('CSP: could not find the CSS injected by sonner (update csp.ts)');
  return JSON.parse(match[1]) as string;
}

/** The `<style>` Base UI renders for scroll areas and select popups (`styleDisableScrollbar`). */
export function baseUiInjectedCss(): string {
  const root = dirname(packageFile('@sotf/ui/theme', '@base-ui/react'));
  let source: string | undefined;
  for (const file of ['utils/styles.mjs', 'esm/utils/styles.js', 'utils/styles.js']) {
    try {
      source = readFileSync(join(root, file), 'utf8');
      break;
    } catch {
      // try the next layout
    }
  }
  const className = source && /DISABLE_SCROLLBAR_CLASS_NAME\s*=\s*['"]([\w-]+)['"]/.exec(source)?.[1];
  const template = source && /children:\s*`([^`]*)`/.exec(source)?.[1];
  if (!className || !template) throw new Error('CSP: could not find the Base UI scrollbar style (update csp.ts)');
  return template.replace(/\$\{DISABLE_SCROLLBAR_CLASS_NAME\}/g, className);
}

/** Hashes of the `<style>` elements injected at runtime by dependencies. */
export function thirdPartyStyleHashes(): CspHash[] {
  return [sonnerInjectedCss(), baseUiInjectedCss()].map(sha256Source);
}

/** The `security.csp` object of `astro.config.mjs`. */
export function cspConfig() {
  return {
    algorithm: 'SHA-256' as const,
    directives: [...CSP_DIRECTIVES],
    scriptDirective: {
      resources: [
        "'self'",
        "'report-sample'",
        ...GOOGLE_ADS_SCRIPT_ORIGINS,
        TURNSTILE_ORIGIN,
        CF_INSIGHTS_SCRIPT_ORIGIN,
      ],
      hashes: INLINE_SCRIPTS.map(sha256Source),
    },
    styleDirective: {
      // Inline `<style>` elements and attributes are allowed (Google's consent dialog, Base UI,
      // floating-ui, ad slots). No style hashes: a hash would make browsers ignore 'unsafe-inline'.
      resources: [
        "'self'",
        "'report-sample'",
        "'unsafe-inline'",
        GOOGLE_FONTS_CSS_ORIGIN,
        { resource: "'unsafe-inline'", kind: 'attribute' as const },
      ],
      hashes: [],
    },
  };
}

// ── Runtime completion ─────────────────────────────────────────────────────────────────────────

export type CspMode = 'enforce' | 'report-only';

/**
 * Enforcement per environment (PLAN §9.1: "una semana en report-only en staging y después se
 * aplica"): staging reports only until `CSP_MODE=enforce` is set there; production, preflight and
 * development enforce (development enforces so breakage shows up while coding).
 */
export function cspModeFor(siteEnv: string, override?: string | null): CspMode {
  if (override === 'enforce' || override === 'report-only') return override;
  return siteEnv === 'staging' ? 'report-only' : 'enforce';
}

export interface FinalizePolicyOptions {
  /** `frame-ancestors` value: `'none'` or `*` for embeddable paths. */
  frameAncestors: "'none'" | '*';
  /** HTTPS deployments: add `upgrade-insecure-requests`. */
  https: boolean;
  /** Absolute or same-origin URL of the report collector (omitted: no reporting). */
  reportUri?: string;
  /** Extra origins for img/media/connect (a non-default `R2_PUBLIC_BASE_URL`, local services). */
  extraSources?: Partial<Record<'img-src' | 'media-src' | 'connect-src', readonly string[]>>;
}

/** Parses a policy into ordered `[name, sources]` pairs (later duplicates are ignored, as browsers do). */
export function parsePolicy(policy: string): Array<[string, string[]]> {
  const out: Array<[string, string[]]> = [];
  const seen = new Set<string>();
  for (const part of policy.split(';')) {
    const [name, ...sources] = part.trim().split(/\s+/).filter(Boolean);
    if (!name) continue;
    const key = name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push([key, sources]);
  }
  return out;
}

export function serializePolicy(directives: ReadonlyArray<readonly [string, readonly string[]]>): string {
  return directives.map(([name, sources]) => (sources.length ? `${name} ${sources.join(' ')}` : name)).join('; ');
}

/** Completes the policy Astro rendered (or the static fallback) for this response. */
export function finalizePolicy(base: string, options: FinalizePolicyOptions): string {
  const directives = parsePolicy(base).filter(
    ([name]) => !['frame-ancestors', 'report-uri', 'report-to', 'upgrade-insecure-requests'].includes(name),
  );
  for (const [name, extra] of Object.entries(options.extraSources ?? {})) {
    if (!extra?.length) continue;
    const entry = directives.find(([directive]) => directive === name);
    if (entry) entry[1] = uniq([...entry[1], ...extra]);
    else directives.push([name, uniq(["'self'", ...extra])]);
  }
  directives.push(['frame-ancestors', [options.frameAncestors]]);
  if (options.https) directives.push(['upgrade-insecure-requests', []]);
  if (options.reportUri) {
    directives.push(['report-uri', [options.reportUri]]);
    directives.push(['report-to', [CSP_REPORT_GROUP]]);
  }
  return serializePolicy(directives);
}

let fallback: string | undefined;

/**
 * The policy for HTML that did not go through Astro's renderer (defensive: no HTML response
 * leaves without a policy). It has the inline-script hashes but not Astro's per-build bundle
 * hashes nor the dependency `<style>` hashes (computed from `node_modules` at build time only;
 * the runtime image does not ship them), which such responses never need.
 */
export function fallbackPolicy(): string {
  if (fallback) return fallback;
  const script = [
    "'self'",
    "'report-sample'",
    ...GOOGLE_ADS_SCRIPT_ORIGINS,
    TURNSTILE_ORIGIN,
    CF_INSIGHTS_SCRIPT_ORIGIN,
    ...INLINE_SCRIPTS.map((source) => `'${sha256Source(source)}'`),
  ];
  fallback = serializePolicy([
    ...parsePolicy(CSP_DIRECTIVES.join('; ')),
    ['script-src', script],
    ['style-src', ["'self'", "'report-sample'", "'unsafe-inline'", GOOGLE_FONTS_CSS_ORIGIN]],
    ['style-src-attr', ["'unsafe-inline'"]],
  ]);
  return fallback;
}
