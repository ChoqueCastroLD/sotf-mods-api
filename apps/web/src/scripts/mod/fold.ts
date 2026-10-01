/**
 * Collapsible sections and clamped text on phones (progressive enhancement; the server always
 * renders everything open and unclamped, which is what desktops, crawlers and no-JS visitors get).
 *
 * - `[data-fold]` sections (`data-fold="closed"` starts collapsed): the first `h2` becomes a
 *   disclosure button with a chevron, the rest of the section moves into a panel that is hidden
 *   while closed (`aria-expanded` + `aria-controls`). A hash that points inside opens it.
 * - `[data-clamp]` blocks (the description): clamped to a few lines with a fade and a «Read more»
 *   button, only when they are actually taller than the clamp.
 *
 * Everything is below the first screen of a phone, so applying it after load shifts nothing the
 * visitor sees.
 */

const PHONE = '(max-width: 47.99rem)';
const CHEVRON =
  '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fold-chevron shrink-0 transition-transform duration-200 motion-reduce:transition-none"><path d="m6 9 6 6 6-6"/></svg>';

let uid = 0;

function build(section: HTMLElement): void {
  if (section.dataset.foldReady !== undefined) return;
  const heading = section.querySelector<HTMLElement>('h2');
  if (!heading) return;
  const block = heading.parentElement === section ? heading : heading.parentElement;
  if (!block || block.parentElement !== section) return;
  const panel = document.createElement('div');
  const id = section.id ? `${section.id}-panel` : `fold-${++uid}`;
  panel.id = id;
  panel.dataset.foldPanel = '';
  panel.className = 'grid gap-3';
  const rest: Element[] = [];
  for (let node = block.nextElementSibling; node; node = node.nextElementSibling) rest.push(node);
  if (rest.length === 0) return;
  for (const node of rest) panel.append(node);
  section.append(panel);

  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.foldToggle = '';
  button.setAttribute('aria-controls', id);
  button.className =
    'flex min-h-11 w-full items-center justify-between gap-3 text-start [text-transform:inherit] [letter-spacing:inherit] max-md:-my-1 [&[aria-expanded=true]_.fold-chevron]:rotate-180';
  const label = document.createElement('span');
  label.className = 'min-w-0';
  label.append(...Array.from(heading.childNodes));
  button.append(label);
  button.insertAdjacentHTML('beforeend', CHEVRON);
  heading.append(button);

  const set = (open: boolean) => {
    button.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
  };
  set(section.dataset.fold !== 'closed');
  button.addEventListener('click', () => {
    if (!window.matchMedia(PHONE).matches) return;
    set(button.getAttribute('aria-expanded') !== 'true');
  });
  section.dataset.foldReady = '';
  section.addEventListener('fold:open', () => set(true));
}

function openForHash(): void {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const target = document.getElementById(id);
  const section = target?.closest<HTMLElement>('[data-fold-ready]');
  section?.dispatchEvent(new Event('fold:open'));
  if (target && section) requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
}

function wireClamp(block: HTMLElement): void {
  if (block.dataset.clampReady !== undefined) return;
  const toggle = block.parentElement?.querySelector<HTMLButtonElement>('[data-clamp-toggle]');
  if (!toggle) return;
  const limit = Number(block.dataset.clamp) || 14;
  const rem = Number.parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  // Clamp only when more than ~25 % would be hidden: a barely longer text is shown in full.
  if (block.scrollHeight <= limit * rem * 1.25) return;
  block.dataset.clampReady = '';
  block.style.setProperty('--clamp-height', `${limit}rem`);
  block.dataset.clamped = '';
  toggle.hidden = false;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    if (open) delete block.dataset.clamped;
    else {
      block.dataset.clamped = '';
      block.scrollIntoView({ block: 'nearest' });
    }
    const text = open ? toggle.dataset.less : toggle.dataset.more;
    const span = toggle.querySelector('[data-clamp-label]');
    if (text && span) span.textContent = text;
  });
}

export function initFolds(root: HTMLElement, win: Window = window): void {
  const query = win.matchMedia(PHONE);
  const apply = () => {
    if (!query.matches) {
      for (const block of root.querySelectorAll<HTMLElement>('[data-clamp][data-clamp-ready]')) {
        delete block.dataset.clamped;
      }
      for (const panel of root.querySelectorAll<HTMLElement>('[data-fold-panel]')) panel.hidden = false;
      return;
    }
    for (const section of root.querySelectorAll<HTMLElement>('[data-fold]')) build(section);
    for (const block of root.querySelectorAll<HTMLElement>('[data-clamp]')) wireClamp(block);
  };
  apply();
  query.addEventListener('change', apply);
  win.addEventListener('hashchange', () => openForHash());
  if (query.matches) openForHash();
}
