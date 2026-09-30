/**
 * Count-up of the hero stat tiles (research/03 §5.10). The HTML already holds the final figure
 * (no JavaScript, crawlers and screen readers get it; the animated copy is `aria-hidden`), so this
 * is decoration only: it runs once per tile when it enters the viewport, never under
 * `prefers-reduced-motion`, and always lands on the server-rendered text.
 */

const DURATION_MS = 900;

function easeOut(progress: number): number {
  return 1 - (1 - progress) ** 3;
}

export function initCountUp(doc: Document = document): void {
  const win = doc.defaultView;
  if (!win || win.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof IntersectionObserver === 'undefined') return;
  const tiles = Array.from(doc.querySelectorAll<HTMLElement>('[data-count-up]'));
  if (tiles.length === 0) return;
  const lang = doc.documentElement.lang || 'en';
  const compact = new Intl.NumberFormat(lang, { notation: 'compact', maximumSignificantDigits: 3 });
  const full = new Intl.NumberFormat(lang, { maximumFractionDigits: 0 });
  const format = (value: number) => (Math.abs(value) < 1000 ? full.format(value) : compact.format(value));

  const animate = (element: HTMLElement) => {
    const target = Number(element.dataset.countUp);
    const finalText = element.textContent ?? '';
    if (!Number.isFinite(target) || target <= 0) return;
    const start = win.performance.now();
    const frame = (time: number) => {
      const progress = Math.min(1, (time - start) / DURATION_MS);
      element.textContent = progress >= 1 ? finalText : format(Math.round(target * easeOut(progress)));
      if (progress < 1) win.requestAnimationFrame(frame);
    };
    win.requestAnimationFrame(frame);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        animate(entry.target as HTMLElement);
      }
    },
    { threshold: 0.5 },
  );
  for (const tile of tiles) observer.observe(tile);
}
