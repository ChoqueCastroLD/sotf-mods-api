/**
 * The server renders «No reviews yet» (`data-review-empty`) next to the list when a mod has none.
 * Once the island shows reviews (the first one just posted, or reviews that arrived after the page
 * was cached) that line must go, and come back if the list empties again.
 */
export function syncServerEmptyState(listTarget: HTMLElement | null, hasItems: boolean): void {
  const empty = listTarget?.parentElement?.querySelector<HTMLElement>(':scope > [data-review-empty]');
  if (empty) empty.hidden = hasItems;
}
