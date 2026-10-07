/**
 * Downloads on the mod page (T0-02, T0-08, T0-09):
 *
 * - every `a[data-download]` click is tracked (`download_click`; the redirect itself is counted by
 *   the server) and turns the header button into «Downloaded ✓» with the install hint;
 * - mods with required dependencies open the «You also need X, Y» sheet first (unless the
 *   visitor said «I already have them» for this mod): «Download all» follows each dependency's
 *   download route one after the other (each counts) and then the mod's.
 */

import { toast as bus } from '../../lib/client/toast.ts';
import { pageEntity, track } from '../beacon.ts';
import { fill } from './data.ts';
import { closeDialog, openDialog } from './dialogs.ts';
import type { ModPageData } from './types.ts';

const DEPS_OK_KEY = (modId: number) => `sotf:deps-ok:${modId}`;
const SEQUENTIAL_GAP_MS = 1200;

function storage(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

/** Follows a download route without leaving the page (the response is an attachment). */
function startDownload(href: string, doc: Document): void {
  const link = doc.createElement('a');
  link.href = href;
  link.rel = 'nofollow';
  link.hidden = true;
  doc.body.append(link);
  link.click();
  link.remove();
}

function markDone(root: HTMLElement, data: ModPageData): void {
  const area = root.querySelector<HTMLElement>('[data-download-area]');
  const primary = area?.querySelector<HTMLAnchorElement>('a[data-download]');
  if (!area || !primary || area.dataset.done) return;
  area.dataset.done = '';
  const label = primary.querySelector('span.truncate');
  if (label) label.textContent = data.messages.downloadDone;
  // The install hint is a toast: appending a paragraph under the button would push the page down.
  bus.success(data.messages.downloadDone, { description: data.messages.downloadDoneHint, duration: 10_000 });
}

function versionOf(link: HTMLAnchorElement): string {
  return link.dataset.download ?? '';
}

export function initDownloads(root: HTMLElement, data: ModPageData, doc: Document = document): void {
  const sheet = doc.getElementById('dependency-sheet');
  const needsSheet = () =>
    sheet instanceof HTMLDialogElement &&
    data.requiredDependencies.length + data.unavailableDependencies > 0 &&
    storage()?.getItem(DEPS_OK_KEY(data.modId)) !== '1';
  let pending: HTMLAnchorElement | null = null;

  const completed = (link: HTMLAnchorElement) => {
    const version = versionOf(link);
    track('download_click', { ...pageEntity(), props: { version } });
    markDone(root, data);
  };

  root.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[data-download]');
    if (!link || !root.contains(link)) return;
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    if (needsSheet() && !link.closest('#dependency-sheet')) {
      event.preventDefault();
      pending = link;
      openDialog('dependency-sheet', link, doc);
      return;
    }
    completed(link);
  });

  if (!(sheet instanceof HTMLDialogElement)) return;
  const progress = sheet.querySelector<HTMLElement>('[data-deps-progress]');

  sheet.querySelector('[data-deps-skip]')?.addEventListener('click', () => {
    storage()?.setItem(DEPS_OK_KEY(data.modId), '1');
    const link = pending;
    pending = null;
    closeDialog(sheet);
    if (link) {
      completed(link);
      startDownload(link.href, doc);
    }
  });

  sheet.querySelector('[data-deps-download-all]')?.addEventListener('click', (event) => {
    const button = event.currentTarget as HTMLButtonElement;
    const link = pending ?? root.querySelector<HTMLAnchorElement>('[data-download-area] a[data-download]');
    const queue = data.requiredDependencies
      .map((dependency) => dependency.downloadHref)
      .filter((href): href is string => Boolean(href));
    if (link) queue.push(link.href);
    if (queue.length === 0) return;
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
    let index = 0;
    const next = () => {
      const href = queue[index];
      if (!href) {
        button.disabled = false;
        button.removeAttribute('aria-busy');
        storage()?.setItem(DEPS_OK_KEY(data.modId), '1');
        pending = null;
        if (link) completed(link);
        closeDialog(sheet);
        return;
      }
      index += 1;
      if (progress)
        progress.textContent = fill(data.messages.downloadAllProgress, { current: index, total: queue.length });
      startDownload(href, doc);
      window.setTimeout(next, SEQUENTIAL_GAP_MS);
    };
    next();
  });

  sheet.addEventListener('close', () => {
    pending = null;
    if (progress) progress.textContent = '';
  });
}
