/**
 * The kit page script (vanilla TS, PLAN §2.5): dialogs (download-all sheet, share), copy buttons,
 * the download checklist, fork and the owner's «Edit» link. It reuses the small, generic modules
 * of the mod page (native `<dialog>` handling, the toast region, the session hint, the fetch
 * wrapper and the lazy QR encoder). Guests never trigger a request: the session is only resolved
 * when the header's `sotf_li` hint exists.
 */
import { track } from '../../../scripts/beacon.ts';
import { apiCall } from '../../../scripts/mod/api.ts';
import { initDialogs } from '../../../scripts/mod/dialogs.ts';
import { whenSession } from '../../../scripts/mod/session.ts';
import { toast } from '../../../scripts/mod/toast.ts';
import { fill, type KitPageData, readKitPageData } from './types.ts';

async function copyText(text: string, doc: Document): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = doc.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    doc.body.append(area);
    area.select();
    let ok = false;
    try {
      ok = doc.execCommand('copy');
    } catch {
      ok = false;
    }
    area.remove();
    return ok;
  }
}

function initCopyAndShare(root: HTMLElement, data: KitPageData, doc: Document): void {
  const status = root.querySelector<HTMLElement>('[data-share-status]');
  const announce = (message: string) => {
    if (status?.closest('dialog')?.open) status.textContent = message;
    else toast(message, undefined, doc);
  };

  root.addEventListener('click', (event) => {
    const button = (event.target as Element | null)?.closest<HTMLElement>('[data-copy-from], [data-copy-text]');
    if (!button) return;
    event.preventDefault();
    const source = button.dataset.copyFrom ? doc.getElementById(button.dataset.copyFrom) : null;
    const text =
      button.dataset.copyText ??
      (source instanceof HTMLInputElement || source instanceof HTMLTextAreaElement ? source.value : '');
    if (!text) return;
    void copyText(text, doc).then((ok) => announce(ok ? data.messages.copied : data.messages.copyFailed));
  });

  for (const field of root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-share-select]')) {
    field.addEventListener('focus', () => field.select());
  }

  const native = root.querySelector<HTMLButtonElement>('[data-native-share]');
  if (native && typeof navigator.share === 'function') {
    native.hidden = false;
    native.addEventListener('click', () => {
      void navigator.share({ title: data.name, text: data.messages.shareTitle, url: data.shortUrl }).catch(() => {});
    });
  }

  const details = root.querySelector<HTMLDetailsElement>('[data-share-qr-details]');
  details?.addEventListener('toggle', () => {
    if (!details.open) return;
    const target = details.querySelector<HTMLElement>('[data-share-qr]');
    if (!target || 'drawn' in target.dataset) return;
    target.dataset.drawn = '';
    void import('../../../scripts/mod/qr.ts')
      .then(({ qrSvg }) => {
        target.innerHTML = qrSvg(target.dataset.qrValue ?? data.shortUrl);
      })
      .catch(() => {
        delete target.dataset.drawn;
      });
  });
}

// -----------------------------------------------------------------------------------------------
// Download all: a sequential checklist remembered for this revision (sessionStorage)
// -----------------------------------------------------------------------------------------------

function storageKey(data: KitPageData): string {
  return `sotf:kit-downloads:${data.kitId}:${data.revision}`;
}

function readDone(data: KitPageData): Set<number> {
  try {
    const raw = sessionStorage.getItem(storageKey(data));
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(parsed) ? parsed.filter((value): value is number => Number.isInteger(value)) : []);
  } catch {
    return new Set();
  }
}

function writeDone(data: KitPageData, done: Set<number>): void {
  try {
    sessionStorage.setItem(storageKey(data), JSON.stringify([...done]));
  } catch {
    // Private mode / quota: the checklist still works for this page view.
  }
}

function initDownloadChecklist(root: HTMLElement, data: KitPageData, doc: Document): void {
  const checklist = root.querySelector<HTMLElement>('[data-kit-checklist]');
  const rows = checklist ? [...checklist.querySelectorAll<HTMLElement>('[data-kit-check]')] : [];
  const progress = root.querySelector<HTMLProgressElement>('[data-kit-progress]');
  const progressText = root.querySelector<HTMLElement>('[data-kit-progress-text]');
  const next = root.querySelector<HTMLButtonElement>('[data-kit-download-next]');
  const done = readDone(data);

  const render = () => {
    let count = 0;
    for (const row of rows) {
      const id = Number(row.dataset.kitCheck);
      const box = row.querySelector<HTMLInputElement>('[data-kit-check-box]');
      const checked = done.has(id);
      if (box) box.checked = checked;
      row.classList.toggle('opacity-60', checked);
      if (checked) count += 1;
    }
    if (progress) progress.value = count;
    if (progressText) {
      progressText.textContent =
        rows.length > 0 && count === rows.length
          ? data.messages.allDone
          : fill(data.messages.progress, { done: count, total: rows.length });
    }
    if (next) next.disabled = rows.length === 0 || count === rows.length;
  };

  const mark = (id: number, value: boolean) => {
    if (value) done.add(id);
    else done.delete(id);
    writeDone(data, done);
    render();
  };

  root.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[data-kit-download]');
    if (!link) return;
    const id = Number(link.dataset.kitDownload);
    if (!Number.isInteger(id)) return;
    track('download_click', { entityType: 'mod', entityId: id, props: { source: 'kit', kitId: data.kitId } });
    mark(id, true);
  });

  checklist?.addEventListener('change', (event) => {
    const box = event.target as HTMLInputElement | null;
    const row = box?.closest<HTMLElement>('[data-kit-check]');
    if (!box || !row) return;
    mark(Number(row.dataset.kitCheck), box.checked);
  });

  next?.addEventListener('click', () => {
    const pending = rows.find((row) => !done.has(Number(row.dataset.kitCheck)));
    const link = pending?.querySelector<HTMLAnchorElement>('a[data-kit-download]');
    if (!link) return;
    pending?.scrollIntoView({ block: 'nearest' });
    // A normal navigation to the download route: the 302 ends in a file download, the page stays.
    link.click();
  });

  if (doc.readyState !== 'loading') render();
  else doc.addEventListener('DOMContentLoaded', render, { once: true });
}

// -----------------------------------------------------------------------------------------------
// Fork and owner affordances
// -----------------------------------------------------------------------------------------------

interface ForkedKit {
  id: number;
}

function initFork(root: HTMLElement, data: KitPageData, doc: Document): void {
  const button = root.querySelector<HTMLAnchorElement>('[data-kit-fork]');
  if (!button) return;
  button.addEventListener('click', (event) => {
    event.preventDefault();
    if (button.getAttribute('aria-busy') === 'true') return;
    void (async () => {
      const session = await whenSession();
      if (!session) {
        window.location.assign(data.loginHref);
        return;
      }
      button.setAttribute('aria-busy', 'true');
      toast(data.messages.forking, undefined, doc);
      const result = await apiCall<ForkedKit>('POST', `/api/v2/kits/${data.kitId}/fork`, {});
      button.removeAttribute('aria-busy');
      if (result.ok) {
        track('kit_create', { entityType: 'kit', entityId: result.data.id, props: { source: 'fork' } });
        // Straight into the editor of the copy (the console has no locale prefix).
        window.location.assign(`/me/kits/${result.data.id}?forked=1`);
        return;
      }
      const message =
        result.reason === 'unauthenticated'
          ? null
          : result.reason === 'email'
            ? data.messages.forkEmail
            : result.reason === 'rate'
              ? data.messages.forkRate
              : result.reason === 'offline'
                ? data.messages.offline
                : data.messages.forkFailed;
      if (message === null) window.location.assign(data.loginHref);
      else toast(message, undefined, doc);
    })();
  });
}

async function initOwner(root: HTMLElement, data: KitPageData): Promise<void> {
  const session = await whenSession();
  if (!session || session.id !== data.ownerId) return;
  for (const element of root.querySelectorAll<HTMLElement>('[data-kit-owner-only]')) element.hidden = false;
}

export function initKitPage(doc: Document = document): void {
  const root = doc.querySelector<HTMLElement>('[data-kit-page]');
  const data = readKitPageData(doc);
  if (!root || !data) return;
  initDialogs(root, doc);
  initCopyAndShare(root, data, doc);
  initDownloadChecklist(root, data, doc);
  initFork(root, data, doc);
  void initOwner(root, data);
}
