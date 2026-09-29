/**
 * Per-request values set by `src/middleware/index.ts` (see `src/lib/README.md`).
 */
// biome-ignore lint/style/noNamespace: Astro declares `App.Locals` as a global namespace.
declare namespace App {
  interface Locals {
    /** Locale decided from the URL prefix by the server entry (never from cookies or headers). */
    locale: import('@sotf/i18n').Locale;
    /** Locale-less path + query of the page (`/mods?page=2` for `/es/mods?page=2`). */
    pagePath: string;
    /** Request reference shown on error pages and sent in logs (`cf-ray` or a UUID). */
    requestId: string;
    /** Edge-cache policy chosen by the page with `setPageCache()`. */
    pageCache?: import('./cache/policy.ts').PageCachePolicy | false;
    /** Set by the middleware for `/images/…` (410 instead of 404). */
    errorKind?: 'not-found' | 'gone';
  }
}
