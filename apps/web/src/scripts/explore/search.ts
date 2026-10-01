/**
 * `/search` page: records the product event `search` (PLAN §7.1) with the query length and the
 * result count (never the query text: search terms are aggregated server-side by the API), and
 * puts the caret in the box when the page opened without a query on a pointer device.
 *
 * Mobile feel: the «recent searches» list (device-only `localStorage`, the same entries the
 * command palette keeps) is shown when the page opens without a query, every search that found
 * something is remembered, and the field gets a clear button.
 */
import { clearSearches, readSearches, rememberSearch, SEARCHES_KEY } from '../../islands/cmdk/recents.ts';
import { track } from '../beacon.ts';

const CLOCK =
  '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>';
const CROSS =
  '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';

function renderRecents(doc: Document, page: HTMLElement): void {
  const section = doc.querySelector<HTMLElement>('[data-search-recents]');
  const list = section?.querySelector<HTMLElement>('[data-search-recents-list]');
  if (!section || !list) return;
  const base = page.dataset.searchBase ?? '/search';
  const removeLabel = list.dataset.removeLabel ?? '';
  const searches = readSearches();
  list.replaceChildren();
  for (const query of searches) {
    const item = doc.createElement('li');
    item.className = 'flex items-center';
    const link = doc.createElement('a');
    link.href = `${base}?${new URLSearchParams({ q: query }).toString()}`;
    link.className = 'flex min-h-14 min-w-0 flex-1 items-center gap-3 ps-4 pe-2 text-base text-fg active:bg-raised';
    link.innerHTML = `<span class="text-fg-subtle">${CLOCK}</span>`;
    const text = doc.createElement('span');
    text.className = 'truncate';
    text.textContent = query;
    link.append(text);
    const remove = doc.createElement('button');
    remove.type = 'button';
    remove.className = 'inline-flex size-12 shrink-0 items-center justify-center text-fg-subtle hover:text-fg';
    remove.innerHTML = CROSS;
    const label = doc.createElement('span');
    label.className = 'sr-only';
    label.textContent = removeLabel.replace('{query}', query);
    remove.append(label);
    remove.addEventListener('click', () => {
      try {
        localStorage.setItem(SEARCHES_KEY, JSON.stringify(readSearches().filter((value) => value !== query)));
      } catch {
        // Storage unavailable: nothing was remembered either.
      }
      renderRecents(doc, page);
    });
    item.append(link, remove);
    list.append(item);
  }
  section.hidden = searches.length === 0;
}

export function initSearchPage(doc: Document = document): void {
  const page = doc.querySelector<HTMLElement>('[data-search-page]');
  if (!page) return;
  const input = doc.querySelector<HTMLInputElement>('#search-q');
  const clear = doc.querySelector<HTMLButtonElement>('[data-search-clear]');
  if (input && clear) {
    const sync = () => {
      clear.hidden = input.value === '';
    };
    sync();
    input.addEventListener('input', sync);
    clear.addEventListener('click', () => {
      input.value = '';
      sync();
      input.focus();
    });
  }
  const query = page.dataset.searchQuery ?? '';
  if (query) {
    const total = Number(page.dataset.searchTotal ?? '0');
    track('search', { props: { length: query.length, results: Number.isFinite(total) ? total : 0 } });
    if (total > 0) rememberSearch(query);
    return;
  }
  renderRecents(doc, page);
  doc.querySelector('[data-search-recents-clear]')?.addEventListener('click', () => {
    clearSearches();
    renderRecents(doc, page);
  });
  if (input && !matchMedia('(pointer: coarse)').matches) input.focus({ preventScroll: true });
}
