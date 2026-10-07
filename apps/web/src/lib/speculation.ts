/**
 * Speculation Rules (PLAN §8.8): prerender on moderate eagerness (hover / pointerdown) for the
 * cacheable detail pages, in every locale, and prefetch the HTML of every other public page on the
 * same terms (listings, guides, search, requests, jams), so a click is nearly instant. Never for
 * downloads, the console, auth pages or APIs. Browsers without Speculation Rules use
 * `lib/client/prefetch.ts` (hover and touch). Rendered inline by the layout; its CSP hash comes
 * from `security/csp.ts`.
 */
import { PREFIXED_LOCALES } from '@sotf/i18n';

const SECTIONS = ['mods', 'builds', 'profile', 'requests', 'jams', 'categories'] as const;

function patterns(): string[] {
  const out: string[] = [];
  for (const prefix of ['', ...PREFIXED_LOCALES.map((locale) => `/${locale}`)]) {
    for (const section of SECTIONS) out.push(`${prefix}/${section}/*`);
  }
  return out;
}

/** Never speculated: anything that counts, changes state, belongs to the console or is personal. */
const EXCLUDED = [
  '/*/download/*',
  '/*/*/download/*',
  '/*/*/*/download/*',
  '/*/*/*/*/download/*',
  '/api/*',
  '/dashboard',
  '/dashboard/*',
  '/moderation',
  '/moderation/*',
  '/settings',
  '/settings/*',
  '/notifications',
  '/me',
  '/me/*',
  '/logout',
  '/oauth/*',
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/embed/*',
  '/_internal/*',
  '/*.xml',
  '/*.txt',
  '/*.md',
];

export const SPECULATION_RULES = {
  prerender: [
    {
      where: {
        and: [
          { href_matches: patterns() },
          { not: { href_matches: ['/*/download/*', '/*/*/download/*', '/*/*/*/download/*', '/*/*/*/*/download/*'] } },
          {
            not: {
              href_matches: ['/api/*', '/dashboard/*', '/moderation/*', '/settings/*', '/notifications', '/me/*'],
            },
          },
          { not: { selector_matches: '[rel~=nofollow], [data-no-prerender]' } },
        ],
      },
      eagerness: 'moderate',
    },
  ],
  prefetch: [
    {
      where: {
        and: [
          { href_matches: '/*' },
          {
            not: {
              href_matches: [
                ...EXCLUDED,
                ...PREFIXED_LOCALES.flatMap((locale) => EXCLUDED.map((path) => `/${locale}${path}`)),
              ],
            },
          },
          { not: { selector_matches: '[rel~=nofollow], [data-no-prerender], [download], [target=_blank]' } },
        ],
      },
      eagerness: 'moderate',
    },
  ],
} as const;

/** Exact text of the inline `<script type="speculationrules">` (hashed for the CSP). */
export const SPECULATION_RULES_JSON = JSON.stringify(SPECULATION_RULES);
