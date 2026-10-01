/**
 * Share dialog and copy buttons (T0-08): copy the link or the Discord Markdown line, the system
 * share sheet where available, and the QR code (lazy `qr.ts`, drawn the first time the QR
 * disclosure opens). Also serves `[data-copy-text]` buttons (SHA-256 on version pages).
 */
import { toast } from './toast.ts';
import type { ModPageData } from './types.ts';

async function copyText(text: string, doc: Document): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Older browsers / insecure contexts: fall back to a hidden textarea.
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

export function initShare(root: HTMLElement, data: ModPageData, doc: Document = document): void {
  const status = root.querySelector<HTMLElement>('[data-share-status]');
  const announce = (message: string) => {
    if (status?.closest('dialog')?.open) status.textContent = message;
    else toast(message);
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
    void copyText(text, doc).then((ok) => {
      announce(ok ? data.messages.copied : data.messages.copyFailed);
      if (ok) {
        const label = button.lastChild;
        if (label && label.nodeType === Node.TEXT_NODE && !button.dataset.copyText) {
          const original = label.textContent;
          label.textContent = data.messages.copied;
          window.setTimeout(() => {
            label.textContent = original;
          }, 2000);
        }
      }
    });
  });

  for (const field of root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-share-select]')) {
    field.addEventListener('focus', () => field.select());
  }

  // «Share» of the sheet on phones: the system share sheet when there is one, else the dialog
  // (capture phase, so the generic `data-dialog-open` handler does not open it first).
  if (typeof navigator.share === 'function') {
    root.addEventListener(
      'click',
      (event) => {
        const action = (event.target as Element | null)?.closest<HTMLElement>('[data-share-action]');
        if (!action) return;
        event.preventDefault();
        event.stopPropagation();
        action.closest('dialog')?.close();
        void navigator.share({ title: data.name, text: data.messages.shareTitle, url: data.url }).catch(() => {});
      },
      true,
    );
  }

  const native = root.querySelector<HTMLButtonElement>('[data-native-share]');
  if (native && typeof navigator.share === 'function') {
    native.hidden = false;
    native.addEventListener('click', () => {
      void navigator.share({ title: data.name, text: data.messages.shareTitle, url: data.url }).catch(() => {});
    });
  }

  const details = root.querySelector<HTMLDetailsElement>('[data-share-qr-details]');
  details?.addEventListener('toggle', () => {
    if (!details.open) return;
    const target = details.querySelector<HTMLElement>('[data-share-qr]');
    if (!target || target.dataset.drawn) return;
    target.dataset.drawn = '';
    void import('./qr.ts')
      .then(({ qrSvg }) => {
        target.innerHTML = qrSvg(target.dataset.qrValue ?? data.url);
      })
      .catch(() => {
        delete target.dataset.drawn;
      });
  });
}
