/**
 * «+ Kit» popover (T0-17): for signed-in visitors the link to `/me/kits?add=<id>` becomes a small
 * modal listing my kits with one «Add» each (plus «New kit with this mod», which is still the
 * link). Adding is `PUT /api/v2/kits/:id/items` with the kit's explicit items plus the mod; the
 * toast offers Undo (puts the previous list back). Without
 * JavaScript, or when my kits cannot be read, the link keeps working.
 */
import { apiCall } from './api.ts';
import { failureMessage } from './follow.ts';
import { toast } from './toast.ts';
import type { ModPageData } from './types.ts';

interface KitCard {
  id: number;
  name: string;
  itemsCount: number;
}

interface KitItem {
  mod: { id: number };
  note: string | null;
  pinnedVersion: { id: number } | null;
  isAutoDependency: boolean;
}

interface OwnKit {
  id: number;
  name: string;
  items: KitItem[];
}

interface ItemInput {
  modId: number;
  note?: string;
  pinnedVersionId?: number;
}

/** Same ceiling as `KIT_LIMITS.maxItems` (packages/contracts). */
const MAX_ITEMS = 100;

function explicitItems(kit: OwnKit): ItemInput[] {
  return kit.items
    .filter((item) => !item.isAutoDependency)
    .map((item) => ({
      modId: item.mod.id,
      ...(item.note ? { note: item.note } : {}),
      ...(item.pinnedVersion ? { pinnedVersionId: item.pinnedVersion.id } : {}),
    }));
}

function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? '');
}

export async function openKitAdd(link: HTMLAnchorElement, data: ModPageData, doc: Document = document): Promise<void> {
  const messages = data.messages;
  // Opened from the «More» sheet of phones: that sheet hands over.
  link.closest('dialog')?.close();
  const existing = doc.getElementById('kit-add-dialog');
  if (existing instanceof HTMLDialogElement) existing.remove();

  const dialog = doc.createElement('dialog');
  dialog.id = 'kit-add-dialog';
  dialog.className =
    'm-auto w-[min(28rem,calc(100vw-2rem))] rounded-xl border border-border-strong bg-raised p-0 text-fg shadow-xl backdrop:bg-black/60 ' +
    'max-md:mb-0 max-md:w-full max-md:max-w-none max-md:rounded-b-none max-md:rounded-t-2xl max-md:border-b-0 max-md:pb-[env(safe-area-inset-bottom)]';
  dialog.setAttribute('aria-labelledby', 'kit-add-title');
  const body = doc.createElement('div');
  body.className = 'grid gap-3 p-4';
  const title = doc.createElement('h2');
  title.id = 'kit-add-title';
  title.className = 'font-display text-lg font-semibold';
  title.textContent = fill(messages.kitAddTitle, { name: data.name });
  const list = doc.createElement('ul');
  list.className = 'grid max-h-72 gap-2 overflow-auto';
  list.setAttribute('aria-busy', 'true');
  const footer = doc.createElement('div');
  footer.className = 'flex flex-wrap items-center justify-between gap-2';
  const create = doc.createElement('a');
  create.href = link.href;
  create.className =
    'inline-flex min-h-11 items-center font-semibold text-link underline underline-offset-3 md:min-h-8';
  create.textContent = messages.kitAddNew;
  const close = doc.createElement('button');
  close.type = 'button';
  close.className =
    'inline-flex min-h-11 items-center rounded-md border border-border-strong px-3 text-sm font-semibold md:min-h-8';
  close.textContent = messages.close;
  close.addEventListener('click', () => dialog.close());
  footer.append(create, close);
  body.append(title, list, footer);
  dialog.append(body);
  dialog.addEventListener('close', () => {
    dialog.remove();
    link.focus();
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  doc.body.append(dialog);
  dialog.showModal();

  const mine = await apiCall<{ items: KitCard[] }>('GET', '/api/v2/me/kits');
  list.removeAttribute('aria-busy');
  if (!mine.ok) {
    dialog.close();
    if (mine.reason === 'unauthenticated') location.assign(data.loginHref);
    else toast(failureMessage(data, mine.reason));
    return;
  }
  const cards = mine.data.items;
  const buttons = new Map<number, HTMLButtonElement>();
  const markAdded = (id: number, added: boolean) => {
    const button = buttons.get(id);
    if (!button) return;
    button.disabled = added;
    button.textContent = added ? messages.kitAddInKit : messages.kitAddButton;
  };

  const add = async (card: KitCard): Promise<void> => {
    const button = buttons.get(card.id);
    if (!button || button.disabled) return;
    button.disabled = true;
    const current = await apiCall<OwnKit>('GET', `/api/v2/me/kits/${card.id}`);
    if (!current.ok) {
      button.disabled = false;
      toast(failureMessage(data, current.reason));
      return;
    }
    const kit = current.data;
    const previous = explicitItems(kit);
    if (kit.items.some((item) => item.mod.id === data.modId)) {
      markAdded(card.id, true);
      toast(fill(messages.kitAddAlready, { name: data.name, kit: kit.name }));
      return;
    }
    if (previous.length + 1 > MAX_ITEMS) {
      button.disabled = false;
      toast(fill(messages.kitLimit, { max: String(MAX_ITEMS) }));
      return;
    }
    const saved = await apiCall<OwnKit>('PUT', `/api/v2/kits/${card.id}/items`, {
      items: [...previous, { modId: data.modId }],
    });
    if (!saved.ok) {
      button.disabled = false;
      toast(
        saved.reason === 'error'
          ? fill(messages.kitAddFailed, { name: data.name })
          : failureMessage(data, saved.reason),
      );
      return;
    }
    markAdded(card.id, true);
    toast(fill(messages.kitAddDone, { name: data.name, kit: saved.data.name }), {
      label: messages.undo,
      onClick: () => {
        void apiCall<OwnKit>('PUT', `/api/v2/kits/${card.id}/items`, { items: previous }).then((restored) => {
          if (restored.ok) markAdded(card.id, false);
          else toast(messages.kitUndoFailed);
        });
      },
    });
  };

  for (const card of cards) {
    const item = doc.createElement('li');
    item.className = 'flex items-center justify-between gap-3 rounded-md border border-border px-3 py-2';
    const name = doc.createElement('span');
    name.className = 'min-w-0 truncate text-sm font-semibold';
    name.textContent = card.name;
    const button = doc.createElement('button');
    button.type = 'button';
    button.className =
      'inline-flex min-h-11 shrink-0 items-center rounded-md bg-accent px-3 text-sm font-semibold text-accent-fg disabled:opacity-60 md:min-h-8';
    button.textContent = messages.kitAddButton;
    button.setAttribute('aria-label', fill(messages.kitAddTo, { kit: card.name }));
    button.addEventListener('click', () => void add(card));
    buttons.set(card.id, button);
    item.append(name, button);
    list.append(item);
  }
  if (cards.length === 0) list.hidden = true;
  (list.querySelector('button') ?? create).focus();
}

export function initKitAdd(root: HTMLElement, data: ModPageData, doc: Document = document): void {
  for (const link of root.querySelectorAll<HTMLAnchorElement>('a[data-kit-add]')) {
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      void openKitAdd(link, data, doc);
    });
  }
}
