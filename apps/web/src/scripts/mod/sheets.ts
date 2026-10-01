/**
 * Phones: comments and reviews live in bottom sheets (`SocialSheets.astro`). For every
 * `section[data-sheet-section="<dialog id>"]` this moves the section body (list, «load more»,
 * island mount points, hints) into the sheet's slot, keeps two cloned items as a preview in the
 * page and shows the «Open all N» card. The islands find their mount points as before and hydrate
 * inside the sheet when it opens (their loaders wait for the mount to be near the viewport).
 *
 * Run before `initSocialIslands`. Does nothing on tablets/desktops; the server markup (everything
 * inline) is also what visitors without JavaScript get.
 */
import { openDialog } from './dialogs.ts';

const PHONE = '(max-width: 47.99rem)';
const PREVIEW_ITEMS = 2;

export function initSheetSections(root: HTMLElement, doc: Document = document, win: Window = window): void {
  if (!win.matchMedia(PHONE).matches) return;
  for (const section of root.querySelectorAll<HTMLElement>('section[data-sheet-section]')) {
    const id = section.dataset.sheetSection ?? '';
    const slot = doc.querySelector<HTMLElement>(`[data-sheet-slot="${id}"]`);
    const body = section.querySelector<HTMLElement>(':scope > [data-sheet-body]');
    const preview = section.querySelector<HTMLElement>(':scope > [data-sheet-preview]');
    if (!slot || !body || !preview) continue;
    const previewList = preview.querySelector<HTMLElement>('[data-sheet-preview-list]');
    const source = body.querySelector<HTMLElement>('ol[data-comment-list], ul[data-review-list]');
    const items = source ? Array.from(source.children).slice(0, PREVIEW_ITEMS) : [];
    if (previewList) {
      for (const item of items) {
        const clone = item.cloneNode(true) as HTMLElement;
        clone.removeAttribute('id');
        for (const node of clone.querySelectorAll('[id]')) node.removeAttribute('id');
        // Clones are a glance: no interactive duplicates.
        for (const node of clone.querySelectorAll('button, details, form')) node.remove();
        previewList.append(clone);
      }
      if (items.length === 0) previewList.remove();
    }
    slot.append(...Array.from(body.children));
    body.remove();
    for (const mount of slot.querySelectorAll<HTMLElement>('[data-island="comments"]')) mount.dataset.layout = 'sheet';
    preview.hidden = false;
    section.dataset.sheetMoved = '';
  }

  // The «Comments» tab opens the sheet instead of scrolling to an anchor.
  root.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[data-tab-key="comments"]');
    if (!link || !doc.querySelector('[data-sheet-slot="comments-sheet"] *')) return;
    event.preventDefault();
    openDialog('comments-sheet', link, doc);
  });
  root.addEventListener(
    'click',
    (event) => {
      const compose = (event.target as Element | null)?.closest<HTMLElement>('[data-compose]');
      if (!compose) return;
      const mount = doc.querySelector<HTMLElement>('[data-sheet-slot="comments-sheet"] [data-island="comments"]');
      if (!mount) return;
      mount.dataset.compose = '1';
      mount.dispatchEvent(new CustomEvent('sotf:compose'));
    },
    true,
  );

  const hash = win.location.hash;
  if (/^#comment-\d+$/.test(hash) && doc.querySelector('[data-sheet-slot="comments-sheet"] *')) {
    win.requestAnimationFrame(() => openDialog('comments-sheet', null, doc));
  }
}
