/**
 * Mod Jams are hidden from the site (2026-11): no links anywhere, and `/jams` and `/jams/:slug`
 * redirect to `/mods` with a temporary 302 so search engines keep nothing. Set `true` to bring
 * them back (and restore the nav, palette, sitemap and llms links removed with them).
 */
export const JAMS_VISIBLE = false;
