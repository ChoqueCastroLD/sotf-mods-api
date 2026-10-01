/**
 * Gallery lightbox (lazy chunk): opens `#gallery-dialog` at a slide, keeps the «3 / 8» counter in
 * sync with the scroll-snap strip (swipe), previous/next buttons and ←/→/Home/End keys, and
 * swaps the trailer facade for the `youtube-nocookie` iframe on play (removed again on close, so
 * the video stops).
 */

import { scrollCarouselTo } from './carousel.ts';
import { fill } from './data.ts';
import { openDialog } from './dialogs.ts';
import { bindLightboxGestures } from './lightbox-zoom.ts';
import { youtubeIframe } from './prose.ts';
import type { ModPageData } from './types.ts';

let bound = false;

function slides(track: HTMLElement): HTMLElement[] {
  return Array.from(track.querySelectorAll<HTMLElement>('[data-lightbox-slide]'));
}

function currentIndex(track: HTMLElement): number {
  const width = track.clientWidth || 1;
  return Math.round(track.scrollLeft / width);
}

function goTo(track: HTMLElement, index: number, smooth: boolean): void {
  const all = slides(track);
  const target = Math.max(0, Math.min(all.length - 1, index));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  track.scrollTo({ left: target * track.clientWidth, behavior: smooth && !reduce ? 'smooth' : 'auto' });
}

function bind(dialog: HTMLDialogElement, data: ModPageData | null, doc: Document): void {
  if (bound) return;
  bound = true;
  const track = dialog.querySelector<HTMLElement>('[data-lightbox-track]');
  const counter = dialog.querySelector<HTMLElement>('[data-lightbox-counter]');
  if (!track) return;
  const total = slides(track).length;
  const counterTemplate = dialog.querySelector<HTMLElement>('[data-lightbox]')?.dataset.counter ?? data?.messages.galleryCounter ?? '{index} / {total}';
  const videoTitle = dialog.querySelector<HTMLElement>('[data-lightbox]')?.dataset.videoTitle ?? data?.messages.videoTitle ?? '';
  bindLightboxGestures(dialog, track);
  const update = () => {
    if (counter) counter.textContent = fill(counterTemplate, { index: currentIndex(track) + 1, total });
  };
  let frame = 0;
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(update);
  });
  dialog
    .querySelector('[data-lightbox-prev]')
    ?.addEventListener('click', () => goTo(track, currentIndex(track) - 1, true));
  dialog
    .querySelector('[data-lightbox-next]')
    ?.addEventListener('click', () => goTo(track, currentIndex(track) + 1, true));
  dialog.addEventListener('keydown', (event) => {
    const rtl = doc.documentElement.dir === 'rtl';
    const index = currentIndex(track);
    if (event.key === 'ArrowRight') goTo(track, index + (rtl ? -1 : 1), true);
    else if (event.key === 'ArrowLeft') goTo(track, index + (rtl ? 1 : -1), true);
    else if (event.key === 'Home') goTo(track, 0, true);
    else if (event.key === 'End') goTo(track, total - 1, true);
    else return;
    event.preventDefault();
  });
  dialog.addEventListener('click', (event) => {
    const play = (event.target as Element | null)?.closest<HTMLElement>('[data-youtube-play]');
    const facade = play?.closest<HTMLElement>('[data-youtube-facade]');
    if (!play || !facade) return;
    const id = facade.dataset.youtubeId ?? '';
    if (!/^[\w-]{6,20}$/.test(id)) return;
    facade.dataset.original = facade.innerHTML;
    const iframe = youtubeIframe(doc, id, 0, videoTitle || data?.messages.videoEmbedTitle || '');
    iframe.className = 'size-full border-0';
    facade.replaceChildren(iframe);
    iframe.focus();
  });
  dialog.addEventListener('close', () => {
    // The page's carousel follows the picture the visitor left the lightbox on.
    const slide = currentIndex(track);
    const link = doc.querySelector<HTMLElement>(`[data-carousel] a[data-gallery-index="${slide}"]`);
    const host = link?.closest<HTMLElement>('[data-carousel]');
    const carousel = host?.querySelector<HTMLElement>('[data-carousel-track]');
    const position = link ? Array.from(carousel?.querySelectorAll('[data-carousel-slide]') ?? []).indexOf(link.closest('[data-carousel-slide]') as Element) : -1;
    if (carousel && position >= 0) scrollCarouselTo(carousel, position, false);
    for (const facade of dialog.querySelectorAll<HTMLElement>('[data-youtube-facade][data-original]')) {
      facade.innerHTML = facade.dataset.original ?? '';
      delete facade.dataset.original;
    }
  });
}

export function openLightbox(index: number, opener: HTMLElement, data: ModPageData | null, doc: Document = document): void {
  const dialog = doc.getElementById('gallery-dialog');
  if (!(dialog instanceof HTMLDialogElement)) return;
  bind(dialog, data, doc);
  if (!openDialog('gallery-dialog', opener, doc)) return;
  const track = dialog.querySelector<HTMLElement>('[data-lightbox-track]');
  if (!track) return;
  // Layout exists only once the dialog is open.
  requestAnimationFrame(() => {
    goTo(track, index, false);
    track.focus({ preventScroll: true });
  });
}
