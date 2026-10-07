/**
 * Global announcement banners (PLAN T0-28): the admin writes them in `/moderation/admin/announcements`
 * and `GET /announcements/active` serves the ones live now. They are rendered into the HTML
 * (`components/layout/SiteBanners.astro`), which is why every write on the API purges the `html`
 * tag; visitors dismiss one for good by id in `localStorage` (`@sotf/ui/dismissals`).
 *
 * Fail-soft like every optional block: a slow or failing API renders the page without banners, and
 * the answer (or the failure) is remembered for a few seconds so a burst of page renders makes one
 * call, and an API outage costs no extra latency on pages that do not need the API.
 */
import type { Locale } from '@sotf/i18n';
import { optional, serverApi } from './api.ts';

export interface SiteAnnouncement {
  id: number;
  level: 'info' | 'warning' | 'patch';
  message: string;
  href: string | null;
  dismissible: boolean;
}

/** How long a successful answer is reused. */
export const ANNOUNCEMENTS_FRESH_MS = 15_000;
/** How long a failed lookup is remembered (no retry before). */
export const ANNOUNCEMENTS_FAILED_MS = 10_000;

export type AnnouncementsFetcher = (locale: Locale) => Promise<readonly SiteAnnouncement[] | null>;

async function fetchFromApi(locale: Locale): Promise<readonly SiteAnnouncement[] | null> {
  const answer = await optional((signal) => serverApi().admin.activeAnnouncements({ query: { locale } }, { signal }));
  return answer ? answer.items : null;
}

interface Entry {
  items: readonly SiteAnnouncement[];
  expiresAt: number;
}

/** Cache of one process; exported for tests, the page code uses {@link activeAnnouncements}. */
export function createAnnouncementsSource(
  fetcher: AnnouncementsFetcher,
  now: () => number = () => Date.now(),
): (locale: Locale) => Promise<readonly SiteAnnouncement[]> {
  const entries = new Map<Locale, Entry>();
  const inFlight = new Map<Locale, Promise<readonly SiteAnnouncement[]>>();
  return (locale) => {
    const cached = entries.get(locale);
    if (cached && cached.expiresAt > now()) return Promise.resolve(cached.items);
    const running = inFlight.get(locale);
    if (running) return running;
    const lookup = fetcher(locale)
      .catch(() => null)
      .then((items) => {
        entries.set(locale, {
          items: items ?? [],
          expiresAt: now() + (items === null ? ANNOUNCEMENTS_FAILED_MS : ANNOUNCEMENTS_FRESH_MS),
        });
        return items ?? [];
      })
      .finally(() => inFlight.delete(locale));
    inFlight.set(locale, lookup);
    return lookup;
  };
}

/** Announcements live now in `locale` (English fallback is resolved by the API). */
export const activeAnnouncements = createAnnouncementsSource(fetchFromApi);

/**
 * A banner link is a site path (`/mods`) or an https address; anything else (`javascript:`,
 * protocol-relative `//host`) is dropped so a bad row can never become a script link.
 */
export function announcementHref(href: string | null): { kind: 'path' | 'external'; value: string } | null {
  if (!href) return null;
  if (/^\/(?!\/)/.test(href) && !/[\s\\]/.test(href)) return { kind: 'path', value: href };
  if (/^https:\/\/[^\s]+$/i.test(href)) return { kind: 'external', value: href };
  return null;
}

/** Stable id of the dismissal stored in the visitor's browser (matches `BANNER_ID_PATTERN`). */
export function announcementBannerId(id: number): string {
  return `announcement-${id}`;
}
