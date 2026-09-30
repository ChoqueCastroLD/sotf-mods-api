/**
 * Behaviour of the stored Markdown HTML (@sotf/markdown hooks, styled by `ProseLocator`):
 *
 * - spoilers `span.md-spoiler[role=button]`: click, Enter or Space reveal them; the control role,
 *   tab stop and label are removed so the revealed text is read normally, and focus stays on it;
 * - YouTube facades `a.md-youtube-link[data-youtube-id]`: replaced on click by the
 *   `youtube-nocookie` iframe (autoplay); without JavaScript they are normal links.
 */

function revealSpoiler(spoiler: HTMLElement): void {
  spoiler.setAttribute('aria-expanded', 'true');
  spoiler.removeAttribute('role');
  spoiler.removeAttribute('aria-label');
  spoiler.setAttribute('tabindex', '-1');
  spoiler.focus({ preventScroll: true });
}

export function youtubeIframe(doc: Document, id: string, start: number, title: string): HTMLIFrameElement {
  const iframe = doc.createElement('iframe');
  const query = new URLSearchParams({ autoplay: '1', rel: '0' });
  if (start > 0) query.set('start', String(start));
  iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?${query.toString()}`;
  iframe.title = title;
  iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.className = 'aspect-video h-auto w-full rounded-md border-0';
  return iframe;
}

export function initProse(root: HTMLElement, videoTitle: string, doc: Document = document): void {
  root.addEventListener('click', (event) => {
    const target = event.target as Element | null;
    const spoiler = target?.closest<HTMLElement>('span.md-spoiler[role="button"]');
    if (spoiler) {
      event.preventDefault();
      revealSpoiler(spoiler);
      return;
    }
    const facade = target?.closest<HTMLAnchorElement>('a.md-youtube-link[data-youtube-id]');
    if (facade) {
      const id = facade.dataset.youtubeId ?? '';
      if (!/^[\w-]{6,20}$/.test(id)) return;
      event.preventDefault();
      const start = Number.parseInt(facade.dataset.youtubeStart ?? '0', 10);
      const label = facade.textContent?.trim() || videoTitle;
      const iframe = youtubeIframe(doc, id, Number.isFinite(start) ? start : 0, label);
      facade.replaceWith(iframe);
      iframe.focus();
    }
  });
  root.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const spoiler = (event.target as Element | null)?.closest<HTMLElement>('span.md-spoiler[role="button"]');
    if (!spoiler) return;
    event.preventDefault();
    revealSpoiler(spoiler);
  });
}
