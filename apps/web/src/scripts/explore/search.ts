/**
 * `/search` page: records the product event `search` (PLAN §7.1) with the query length and the
 * result count (never the query text: search terms are aggregated server-side by the API), and
 * puts the caret in the box when the page opened without a query.
 */
import { track } from '../beacon.ts';

export function initSearchPage(doc: Document = document): void {
  const page = doc.querySelector<HTMLElement>('[data-search-page]');
  if (!page) return;
  const query = page.dataset.searchQuery ?? '';
  if (query) {
    const total = Number(page.dataset.searchTotal ?? '0');
    track('search', { props: { length: query.length, results: Number.isFinite(total) ? total : 0 } });
    return;
  }
  const input = doc.querySelector<HTMLInputElement>('#search-q');
  if (input && !matchMedia('(pointer: coarse)').matches) input.focus({ preventScroll: true });
}
