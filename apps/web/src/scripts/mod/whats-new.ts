/**
 * «What's new since your last download» (T0-08, signed-in island). Reads the visitor's download
 * history (`GET /api/v2/me/downloads`); when the mod has a newer version than the one they
 * downloaded, it marks the newer entries of the field notes timeline and shows the summary box
 * with links to each of them.
 */
import { apiCall } from './api.ts';
import { fill } from './data.ts';
import type { ModPageData } from './types.ts';

interface DownloadHistory {
  enabled: boolean;
  items: Array<{
    mod: { id: number };
    lastDownloaded: { versionId: number; version: string; at: string };
    current: { versionId: number; version: string } | null;
    hasUpdate: boolean;
  }>;
}

export async function initWhatsNew(root: HTMLElement, data: ModPageData, doc: Document = document): Promise<void> {
  const timeline = root.querySelectorAll<HTMLElement>('[data-version-timeline] > li[data-published-at]');
  const box = root.querySelector<HTMLElement>('[data-whats-new]');
  if (timeline.length === 0 && !box) return;
  const history = await apiCall<DownloadHistory>('GET', '/api/v2/me/downloads');
  if (!history.ok || !history.data.enabled) return;
  const entry = history.data.items.find((item) => item.mod.id === data.modId);
  if (!entry?.hasUpdate || !entry.current || entry.current.versionId === entry.lastDownloaded.versionId) return;
  const since = Date.parse(entry.lastDownloaded.at);
  const newer: HTMLElement[] = [];
  for (const item of timeline) {
    const published = Date.parse(item.dataset.publishedAt ?? '');
    if (Number.isFinite(published) && published > since && item.dataset.version !== entry.lastDownloaded.version) {
      newer.push(item);
      const badge = item.querySelector<HTMLElement>('[data-whats-new-badge]');
      if (badge) badge.hidden = false;
    }
  }
  if (!box) return;
  const title = box.querySelector('[data-whats-new-title]');
  if (title) title.textContent = fill(data.messages.whatsNewTitle, { version: entry.lastDownloaded.version });
  const list = box.querySelector('[data-whats-new-list]');
  if (list) {
    const versions = newer.length > 0 ? newer.map((item) => item.dataset.version ?? '') : [entry.current.version];
    for (const version of versions) {
      if (!version) continue;
      const li = doc.createElement('li');
      const link = doc.createElement('a');
      link.href = newer.length > 0 ? `#v-${version}` : (box.dataset.versionsHref ?? '#field-notes');
      link.className =
        'inline-flex min-h-8 items-center rounded-full border border-signal/40 px-3 font-mono text-sm text-fg hover:border-signal';
      link.textContent = `v${version}`;
      li.append(link);
      list.append(li);
    }
  }
  box.hidden = false;
}
