/**
 * «Legends of the island»: the details card is pure CSS (`:hover` / `:focus-within`); this only
 * tells it which side has room (`data-x="end"` near the right edge, `data-y="up"` near the
 * bottom of the viewport) when a pill is entered or focused. Nothing is required for navigation.
 */
const CARD_WIDTH = 320;
const CARD_HEIGHT = 300;

export function initHall(doc: Document = document): void {
  const root = doc.querySelector<HTMLElement>('[data-hall]');
  if (!root) return;
  const view = doc.defaultView;
  if (!view) return;
  const place = (event: Event): void => {
    const item = (event.target as Element | null)?.closest<HTMLElement>('[data-hall-item]');
    if (!item) return;
    const box = item.getBoundingClientRect();
    const rtl = getComputedStyle(item).direction === 'rtl';
    const room = rtl ? box.right : view.innerWidth - box.left;
    const side = room < CARD_WIDTH + 16;
    if (side) item.dataset.x = 'end';
    else delete item.dataset.x;
    if (view.innerHeight - box.bottom < CARD_HEIGHT && box.top > CARD_HEIGHT) item.dataset.y = 'up';
    else delete item.dataset.y;
  };
  // Mobile: only the top of the ranking shows until «Show all» (a plain link to the sorted
  // catalogue when this script does not run).
  const more = root.querySelector<HTMLElement>('[data-hall-more]');
  more?.addEventListener('click', (event) => {
    event.preventDefault();
    root.querySelector<HTMLElement>('[data-hall-list]')?.setAttribute('data-expanded', '');
    more.closest('p')?.remove();
  });
  root.addEventListener('pointerover', place);
  root.addEventListener('focusin', place);
}
