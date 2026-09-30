/**
 * Speculation Rules (PLAN §8.8): prerender on moderate eagerness (hover / pointerdown) for the
 * cacheable detail and listing pages, in every locale, never for downloads, the console or APIs.
 * Rendered inline by the layout; its CSP hash comes from `security/csp.ts`.
 */
import { PREFIXED_LOCALES } from '@sotf/i18n';

const SECTIONS = ['mods', 'builds', 'profile', 'kits', 'requests', 'jams', 'categories'] as const;

function patterns(): string[] {
  const out: string[] = [];
  for (const prefix of ['', ...PREFIXED_LOCALES.map((locale) => `/${locale}`)]) {
    for (const section of SECTIONS) out.push(`${prefix}/${section}/*`);
  }
  return out;
}

export const SPECULATION_RULES = {
  prerender: [
    {
      where: {
        and: [
          { href_matches: patterns() },
          { not: { href_matches: ['/*/download/*', '/*/*/download/*', '/*/*/*/download/*', '/*/*/*/*/download/*'] } },
          { not: { href_matches: ['/api/*', '/basecamp/*', '/ranger/*', '/settings/*', '/signals', '/me/*'] } },
          { not: { selector_matches: '[rel~=nofollow], [data-no-prerender]' } },
        ],
      },
      eagerness: 'moderate',
    },
  ],
} as const;

/** Exact text of the inline `<script type="speculationrules">` (hashed for the CSP). */
export const SPECULATION_RULES_JSON = JSON.stringify(SPECULATION_RULES);
