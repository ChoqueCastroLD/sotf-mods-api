/**
 * Binds every `[data-sheet-open="<dialog id>"]` opener (delegated, so markup added later works)
 * and loads the sheet module (`sheet.ts`: drag, snap points, motion) the first time one is used
 * or, at idle, ahead of time, so the first tap opens at once and the boot bundle stays small.
 */
let sheetModule: Promise<typeof import('./sheet.ts')> | null = null;

function loadSheet(): Promise<typeof import('./sheet.ts')> {
  sheetModule ??= import('./sheet.ts');
  return sheetModule;
}

export function initSheets(doc: Document = document): () => void {
  const onClick = (event: MouseEvent) => {
    const opener = (event.target as Element | null)?.closest<HTMLElement>('[data-sheet-open]');
    if (!opener) return;
    const dialog = doc.getElementById(opener.dataset.sheetOpen ?? '');
    if (!(dialog instanceof HTMLDialogElement) || !dialog.hasAttribute('data-sheet')) return;
    event.preventDefault();
    void loadSheet().then(({ openSheet }) => openSheet(dialog, opener));
  };
  doc.addEventListener('click', onClick);
  return () => doc.removeEventListener('click', onClick);
}

/** Preloads the module when the page has a sheet (call from an idle callback). */
export function preloadSheets(doc: Document = document): void {
  if (doc.querySelector('dialog[data-sheet]')) void loadSheet();
}
