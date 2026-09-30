/**
 * `?draft=<uuid>` of the publishing routes (resume a draft). Anything else is dropped, so a bad
 * link opens a fresh wizard instead of an error.
 */
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export interface DraftSearch {
  draft?: string;
}

export function validateDraftSearch(search: Record<string, unknown>): DraftSearch {
  return typeof search.draft === 'string' && UUID.test(search.draft) ? { draft: search.draft } : {};
}
