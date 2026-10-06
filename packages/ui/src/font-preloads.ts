/**
 * The one font worth preloading: the latin subset of Onest (≈ 25 KB). Import this module from a
 * Vite/Astro build: the `?url` import resolves to the same hashed, immutable asset URL that
 * `fonts.css` references, so the preload is reused.
 *
 *   {FONT_PRELOADS.map((href) => <link rel="preload" href={href} as="font" type="font/woff2" crossorigin />)}
 */
import onestLatin from '@fontsource-variable/onest/files/onest-latin-wght-normal.woff2?url';

export const FONT_PRELOADS: readonly string[] = [onestLatin];
