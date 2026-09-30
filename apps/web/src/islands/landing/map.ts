/**
 * Hero island map (enhancement only: the waypoints are plain links and the details card is pure
 * CSS). On pointer move it updates the GPS readout and the crosshair guides; when a waypoint is
 * entered or focused it tells the card which side has room (`data-x`, `data-y`); Escape dismisses
 * an open card until the pointer/focus leaves.
 */
const CARD_WIDTH = 288;
const CARD_HEIGHT = 300;
/** Coordinates of the SW corner of the map (Sons of the Forest lore is fictional: so is this). */
const LAT0 = 47.2034;
const LON0 = 122.4781;

const fixed = (value: number): string => value.toFixed(4);

export function initMap(doc: Document = document): void {
  const root = doc.querySelector<HTMLElement>('[data-island-map]');
  const view = doc.defaultView;
  if (!root || !view) return;
  const readout = root.querySelector<HTMLElement>('[data-map-coords]');
  const base = readout?.textContent ?? '';
  const hero = root.closest<HTMLElement>('.landing-hero');

  const place = (item: HTMLElement): void => {
    const box = item.getBoundingClientRect();
    const limit = hero?.getBoundingClientRect();
    const minX = Math.max(0, limit?.left ?? 0) + 8;
    const maxX = Math.min(view.innerWidth, limit?.right ?? view.innerWidth) - 8;
    const startFits = box.left >= minX && box.left + CARD_WIDTH <= maxX;
    const endFits = box.right - CARD_WIDTH >= minX && box.right <= maxX;
    const preferred = item.dataset.side === 'left' ? 'end' : 'start';
    const fits = preferred === 'start' ? startFits : endFits;
    item.dataset.x = fits ? preferred : preferred === 'start' ? 'end' : 'start';
    const bottom = Math.min(view.innerHeight, hero?.getBoundingClientRect().bottom ?? view.innerHeight);
    if (bottom - box.bottom < CARD_HEIGHT && box.top > CARD_HEIGHT * 0.6) item.dataset.y = 'up';
    else delete item.dataset.y;
  };
  const itemOf = (event: Event): HTMLElement | null =>
    (event.target as Element | null)?.closest<HTMLElement>('[data-map-wp]') ?? null;

  root.addEventListener('pointerover', (event) => {
    const item = itemOf(event);
    if (item) place(item);
  });
  root.addEventListener('focusin', (event) => {
    const item = itemOf(event);
    if (item) {
      delete item.dataset.closed;
      place(item);
    }
  });
  root.addEventListener('pointerout', (event) => {
    const item = itemOf(event);
    if (item && !item.contains(event.relatedTarget as Node | null)) delete item.dataset.closed;
  });
  root.addEventListener('focusout', (event) => {
    const item = itemOf(event);
    if (item) delete item.dataset.closed;
  });
  doc.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    for (const item of root.querySelectorAll<HTMLElement>('[data-map-wp]:hover, [data-map-wp]:focus-within')) {
      item.dataset.closed = '';
    }
  });

  root.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const canvas = (event.target as Element | null)?.closest<HTMLElement>('[data-map-canvas]');
    if (!canvas) return;
    const box = canvas.getBoundingClientRect();
    if (box.width === 0 || box.height === 0) return;
    const fx = Math.min(1, Math.max(0, (event.clientX - box.left) / box.width));
    const fy = Math.min(1, Math.max(0, (event.clientY - box.top) / box.height));
    canvas.style.setProperty('--px', `${(fx * 100).toFixed(2)}%`);
    canvas.style.setProperty('--py', `${(fy * 100).toFixed(2)}%`);
    canvas.dataset.active = '';
    if (readout) readout.textContent = `N ${fixed(LAT0 - fy * 0.12)} · W ${fixed(LON0 - fx * 0.18)}`;
  });
  root.addEventListener('pointerleave', () => {
    for (const canvas of root.querySelectorAll<HTMLElement>('[data-map-canvas]')) delete canvas.dataset.active;
    if (readout) readout.textContent = base;
  });
}
