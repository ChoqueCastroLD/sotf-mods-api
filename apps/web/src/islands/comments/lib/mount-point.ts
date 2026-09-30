/**
 * Helpers of the island loaders (`boot.ts` of each island): read the mount point, wait until it
 * is close to the viewport (below-the-fold islands never compete with the LCP, PLAN §8.2) and
 * derive localised links from the server-rendered sign-in link.
 */

/** Resolves when `element` is within `margin` of the viewport (or right away without IO). */
export function whenNear(element: Element, margin = '600px'): Promise<void> {
  if (typeof IntersectionObserver === 'undefined') return Promise.resolve();
  return new Promise((resolve) => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          resolve();
        }
      },
      { rootMargin: margin },
    );
    observer.observe(element);
  });
}

export function intData(element: HTMLElement, name: string): number | null {
  const value = Number(element.dataset[name]);
  return Number.isInteger(value) && value > 0 ? value : null;
}

/** `/login?next=…` of the page, from the guest link the server rendered in the mount point. */
export function loginHrefOf(element: HTMLElement, selector: string): string {
  const link = element.querySelector<HTMLAnchorElement>(`${selector} a[href], a${selector}[href]`);
  if (link) return link.getAttribute('href') ?? '/login';
  return `/login?next=${encodeURIComponent(location.pathname + location.search)}`;
}

/** Same locale prefix as the sign-in link (`/es/login?…` → `/es/verify-email`). */
export function siblingHref(loginHref: string, path: string): string {
  const match = /^(\/[a-z]{2})?\/login(?:[?#]|$)/.exec(loginHref);
  return `${match?.[1] ?? ''}${path}`;
}

/** Turnstile site key: the mount point's `data-turnstile-site-key`, else the build-time public env. */
export function turnstileSiteKey(element: HTMLElement): string | undefined {
  const fromPage = element.dataset.turnstileSiteKey;
  if (fromPage) return fromPage;
  const fromEnv = (import.meta.env as Record<string, string | undefined>).PUBLIC_TURNSTILE_SITE_KEY;
  return fromEnv || undefined;
}

/** `#comment-123` / `#c-123` of the URL. */
export function commentHash(hash: string = location.hash): number | null {
  const match = /^#(?:comment|c)-(\d{1,12})$/.exec(hash);
  return match?.[1] ? Number(match[1]) : null;
}
