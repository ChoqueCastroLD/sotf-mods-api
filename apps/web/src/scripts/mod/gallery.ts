/**
 * Gallery clicks: thumbnails and the cover (`a[data-gallery-index]`) open the lightbox chunk
 * instead of following the link (the link stays the no-JS fallback; modified clicks keep it).
 */
import type { ModPageData } from './types.ts';

/** The lightbox needs only two strings; pages without the mod JSON island pass `null`. */

export function initGallery(root: HTMLElement, data: ModPageData | null, doc: Document = document): void {
  if (!doc.getElementById('gallery-dialog')) return;
  root.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[data-gallery-index]');
    if (!link || link.closest('dialog')) return;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const index = Number(link.dataset.galleryIndex);
    if (!Number.isInteger(index) || index < 0) return;
    event.preventDefault();
    void import('./lightbox.ts').then(({ openLightbox }) => openLightbox(index, link, data, doc));
  });
}
