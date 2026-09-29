/**
 * The two fonts worth preloading (PLAN §3.4: ≈ 70 KB, the latin subsets of the UI and display
 * faces). Import this module from a Vite/Astro build: the `?url` imports resolve to the same
 * hashed, immutable asset URLs that `fonts.css` references, so the preload is reused.
 *
 *   {FONT_PRELOADS.map((href) => <link rel="preload" href={href} as="font" type="font/woff2" crossorigin />)}
 */
import bigShouldersLatin from '@fontsource-variable/big-shoulders/files/big-shoulders-latin-wght-normal.woff2?url';
import onestLatin from '@fontsource-variable/onest/files/onest-latin-wght-normal.woff2?url';

export const FONT_PRELOADS: readonly string[] = [onestLatin, bigShouldersLatin];
