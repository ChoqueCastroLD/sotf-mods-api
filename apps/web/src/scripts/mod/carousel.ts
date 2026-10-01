/**
 * Scroll-snap carousels with a dot pager and a «2 / 5» chip (`GalleryCarousel.astro`, the build
 * gallery). The track scrolls natively (touch momentum, keyboard arrows on the focused track); this
 * script only keeps the pager in sync, moves to a slide when a dot is tapped and exposes
 * `scrollCarouselTo` for the lightbox (the carousel follows the picture the visitor left on).
 */

function slidesOf(track: HTMLElement): HTMLElement[] {
  return Array.from(track.querySelectorAll<HTMLElement>('[data-carousel-slide]'));
}

export function carouselIndex(track: HTMLElement): number {
  const width = track.clientWidth || 1;
  const index = Math.round(Math.abs(track.scrollLeft) / width);
  return Math.max(0, Math.min(slidesOf(track).length - 1, index));
}

export function scrollCarouselTo(track: HTMLElement, index: number, smooth: boolean): void {
  const slide = slidesOf(track)[index];
  if (!slide) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Scroll the track only: `scrollIntoView` would also move the page.
  const rtl = getComputedStyle(track).direction === 'rtl';
  const left = rtl ? -index * track.clientWidth : index * track.clientWidth;
  track.scrollTo({ left, behavior: smooth && !reduce ? 'smooth' : 'auto' });
}

function bind(host: HTMLElement): void {
  const track = host.querySelector<HTMLElement>('[data-carousel-track]');
  if (!track) return;
  const dots = Array.from(host.querySelectorAll<HTMLElement>('[data-carousel-dot]'));
  const chip = host.querySelector<HTMLElement>('[data-carousel-chip]');
  const total = slidesOf(track).length;
  const template = chip?.dataset.template;
  let current = 0;
  const paint = () => {
    const index = carouselIndex(track);
    if (index === current) return;
    current = index;
    dots.forEach((dot, position) => {
      if (position === index) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    if (chip && template)
      chip.textContent = template.replace('{index}', String(index + 1)).replace('{total}', String(total));
  };
  let frame = 0;
  track.addEventListener(
    'scroll',
    () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    },
    { passive: true },
  );
  for (const dot of dots) {
    dot.addEventListener('click', () => scrollCarouselTo(track, Number(dot.dataset.carouselDot), true));
  }
  host.dataset.carouselReady = '';
}

export function initCarousels(root: ParentNode): void {
  for (const host of root.querySelectorAll<HTMLElement>('[data-carousel]')) bind(host);
}
