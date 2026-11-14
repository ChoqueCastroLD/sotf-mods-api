/**
 * Server reads of the modpack pages (`/modpacks`, `/modpacks/:user/:slug`). Modpacks are kits on
 * the API; `null` means the API failed (the page answers 503, never cached).
 */
import { isApiError } from '@sotf/contracts/client';
import type { KitCardDTO, KitDTO } from '@sotf/contracts/kits';
import { serverApi } from '../../lib/api.ts';

export const MODPACK_SORTS = ['downloads', 'new', 'updated'] as const;
export type ModpackSort = (typeof MODPACK_SORTS)[number];
export const MODPACKS_PAGE_SIZE = 24;

export interface ModpackListView {
  q: string;
  sort: ModpackSort;
  page: number;
}

/** The list view from the query (tolerant: anything invalid falls back to the default). */
export function listViewOf(params: URLSearchParams): ModpackListView {
  const q = (params.get('q') ?? '').replace(/\s+/g, ' ').trim().slice(0, 100);
  const raw = params.get('sort');
  const sort = (MODPACK_SORTS as readonly string[]).includes(raw ?? '') ? (raw as ModpackSort) : 'downloads';
  const page = Number.parseInt(params.get('page') ?? '', 10);
  return { q, sort, page: Number.isInteger(page) && page >= 1 && page <= 10_000 ? page : 1 };
}

/** Query string of a list view (defaults omitted). */
export function listQueryOf(view: ModpackListView): string {
  const params = new URLSearchParams();
  if (view.q) params.set('q', view.q);
  if (view.sort !== 'downloads') params.set('sort', view.sort);
  if (view.page > 1) params.set('page', String(view.page));
  const query = params.toString();
  return query ? `?${query}` : '';
}

export async function loadModpacks(view: ModpackListView): Promise<{ items: KitCardDTO[]; total: number } | null> {
  try {
    return await serverApi().kits.list(
      {
        query: {
          sort: view.sort,
          page: view.page,
          pageSize: MODPACKS_PAGE_SIZE,
          compat: 'any',
          ...(view.q ? { q: view.q } : {}),
        },
      },
      { signal: AbortSignal.timeout(5000) },
    );
  } catch {
    return null;
  }
}

/** One modpack; `'missing'` when it does not exist or is not public, `null` when the API failed. */
export async function loadModpack(user: string, slug: string): Promise<KitDTO | 'missing' | null> {
  try {
    return await serverApi().kits.getBySlug({ params: { user, slug } }, { signal: AbortSignal.timeout(5000) });
  } catch (error) {
    return isApiError(error) && (error.status === 404 || error.status === 400 || error.status === 410)
      ? 'missing'
      : null;
  }
}
