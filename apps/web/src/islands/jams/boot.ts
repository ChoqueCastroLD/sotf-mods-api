/**
 * Loader of the Mod Jams island (tiny, part of the page script). Guests (and crawlers) keep the
 * server-rendered page and download nothing; signed-in members get the actions (follow, submit,
 * withdraw) and the rating controls. Never throws: a failed request leaves the page as rendered.
 */
import { get } from '../comments/lib/api.ts';
import { loginHrefOf, siblingHref } from '../comments/lib/mount-point.ts';
import type { MeSummary } from '../comments/lib/session.ts';
import type { JamCategoryInfo, JamState } from './store.ts';

function categoriesOf(mount: HTMLElement): JamCategoryInfo[] {
  try {
    const parsed: unknown = JSON.parse(mount.dataset.categories ?? '[]');
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((item) => {
      const record = item as { id?: unknown; label?: unknown };
      return typeof record.id === 'number' && typeof record.label === 'string'
        ? [{ id: record.id, label: record.label }]
        : [];
    });
  } catch {
    return [];
  }
}

export async function bootJamPage(root: ParentNode, session: Promise<MeSummary | null>): Promise<void> {
  const mount = root.querySelector<HTMLElement>('[data-island="jam"]');
  if (!mount || mount.dataset.hydrated !== undefined) return;
  const slug = mount.dataset.jamSlug;
  if (!slug) return;
  const summary = await session;
  if (!summary) return;
  const loginHref = loginHrefOf(mount, '[data-jam-guest-hint]');
  const [state, { mountJamPage }] = await Promise.all([
    get<JamState>(`/api/v2/me/jams/${encodeURIComponent(slug)}`),
    import('./mount.tsx'),
  ]);
  if (!state.ok) return;
  await mountJamPage(mount, root, {
    slug,
    phase: mount.dataset.phase ?? '',
    categories: categoriesOf(mount),
    state: state.data,
    session: summary,
    maxEntries: Number(mount.dataset.maxEntries) || 1,
    verifyHref: siblingHref(loginHref, '/verify-email'),
  });
}
