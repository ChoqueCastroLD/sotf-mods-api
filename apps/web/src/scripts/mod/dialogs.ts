/**
 * Native `<dialog>` handling of the mod page: `[data-dialog-open="<id>"]` opens with
 * `showModal()` (focus trap, Esc and an inert page come from the platform), `[data-dialog-close]`
 * and a click on the backdrop close it, and focus returns to the opener. Openers are links to a
 * fallback page, so without JavaScript nothing is lost. Other modules react to
 * `mod:dialog-open` (lazy parts: report form, lightbox, QR code).
 */
import type { AnalyticsEventKind } from '@sotf/contracts/events';
import { pageEntity, track } from '../beacon.ts';

export const DIALOG_OPEN_EVENT = 'mod:dialog-open';

export interface DialogOpenDetail {
  id: string;
  dialog: HTMLDialogElement;
  opener: HTMLElement | null;
}

const openers = new WeakMap<HTMLDialogElement, HTMLElement | null>();

export function openDialog(id: string, opener: HTMLElement | null = null, doc: Document = document): boolean {
  const dialog = doc.getElementById(id);
  if (!(dialog instanceof HTMLDialogElement) || typeof dialog.showModal !== 'function') return false;
  if (!dialog.open) {
    openers.set(dialog, opener);
    dialog.showModal();
  }
  doc.dispatchEvent(new CustomEvent<DialogOpenDetail>(DIALOG_OPEN_EVENT, { detail: { id, dialog, opener } }));
  return true;
}

export function closeDialog(dialog: HTMLDialogElement): void {
  if (dialog.open) dialog.close();
}

export function initDialogs(root: HTMLElement, doc: Document = document): void {
  for (const element of root.querySelectorAll<HTMLElement>('[data-js-only]')) element.hidden = false;

  root.addEventListener('click', (event) => {
    const target = event.target as Element | null;
    const opener = target?.closest<HTMLElement>('[data-dialog-open]');
    if (opener && root.contains(opener)) {
      const id = opener.dataset.dialogOpen ?? '';
      if (openDialog(id, opener, doc)) {
        event.preventDefault();
        const kind = opener.dataset.track as AnalyticsEventKind | undefined;
        if (kind) track(kind, pageEntity());
      }
      return;
    }
    const closer = target?.closest<HTMLElement>('[data-dialog-close]');
    const dialog = closer?.closest('dialog');
    if (closer && dialog) {
      event.preventDefault();
      closeDialog(dialog);
    }
  });

  for (const dialog of root.querySelectorAll<HTMLDialogElement>('dialog[data-mod-dialog]')) {
    // A click whose target is the dialog itself landed on the backdrop (the content has padding).
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (!inside) closeDialog(dialog);
    });
    dialog.addEventListener('close', () => {
      const opener = openers.get(dialog);
      openers.delete(dialog);
      if (opener?.isConnected) opener.focus();
    });
  }
}
