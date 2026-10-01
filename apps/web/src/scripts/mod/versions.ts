/**
 * Version rows → changelog sheet (phones). A tap on `a[data-version-open]` fills `#version-sheet`
 * with the row's badges and facts, the changelog cloned from the version's timeline entry
 * (`#v-<version> [data-changelog]`, so nothing is duplicated in the HTML) and the actions, then
 * opens it. Modified clicks, tablets and desktops keep the link to the version page; so does
 * everything without JavaScript. `#v-<version>` in the URL opens the sheet directly.
 */
import { fill } from './data.ts';
import { openDialog } from './dialogs.ts';

const PHONE = '(max-width: 47.99rem)';

function populate(sheet: HTMLDialogElement, row: HTMLAnchorElement, doc: Document): void {
  const version = row.dataset.versionOpen ?? '';
  const head = sheet.querySelector<HTMLElement>('[data-version-sheet-head]');
  const meta = sheet.querySelector<HTMLElement>('[data-version-sheet-meta]');
  const changelog = sheet.querySelector<HTMLElement>('[data-version-sheet-changelog]');
  const download = sheet.querySelector<HTMLAnchorElement>('[data-version-sheet-download]');
  const details = sheet.querySelector<HTMLAnchorElement>('[data-version-sheet-details]');
  const heading = row.querySelector<HTMLElement>(':scope > span > span:first-child');
  if (head && heading) {
    head.replaceChildren(...Array.from(heading.cloneNode(true).childNodes));
    const name = head.querySelector<HTMLElement>('.font-mono');
    if (name) name.className = 'font-mono text-xl font-semibold text-fg';
  }
  const facts = row.querySelector<HTMLElement>('[data-version-meta]');
  if (meta) meta.textContent = facts?.textContent?.replace(/\s+/g, ' ').trim() ?? '';
  if (changelog) {
    const source = doc.getElementById(`v-${version}`);
    const content =
      source?.querySelector<HTMLElement>('[data-changelog]') ??
      source?.querySelector<HTMLElement>(':scope > p.text-fg-muted');
    changelog.replaceChildren();
    if (content) {
      const clone = content.cloneNode(true) as HTMLElement;
      for (const node of clone.querySelectorAll('[id]')) node.removeAttribute('id');
      changelog.append(clone);
    }
  }
  const url = row.dataset.downloadHref;
  if (download) {
    download.hidden = !url;
    if (url) {
      download.href = url;
      download.dataset.download = version;
      const label = download.querySelector('[data-version-sheet-download-label]');
      if (label) label.textContent = fill(download.dataset.label ?? 'v{version}', { version });
    }
  }
  if (details) {
    details.href = row.href;
    details.hidden = row.dataset.noDetails !== undefined;
  }
  const scroller = sheet.querySelector<HTMLElement>('[data-sheet-body]');
  if (scroller) scroller.scrollTop = 0;
}

export function initVersions(root: HTMLElement, doc: Document = document, win: Window = window): void {
  const sheet = doc.getElementById('version-sheet');
  if (!(sheet instanceof HTMLDialogElement)) return;
  const open = (row: HTMLAnchorElement) => {
    populate(sheet, row, doc);
    openDialog('version-sheet', row, doc);
  };
  root.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const row = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[data-version-open]');
    if (!row || row.closest('dialog') || !win.matchMedia(PHONE).matches) return;
    event.preventDefault();
    open(row);
  });
  const match = /^#v-(.+)$/.exec(win.location.hash);
  if (match && win.matchMedia(PHONE).matches) {
    const version = decodeURIComponent(match[1] ?? '');
    const row = Array.from(root.querySelectorAll<HTMLAnchorElement>('a[data-version-open]')).find(
      (candidate) => candidate.dataset.versionOpen === version,
    );
    if (row) win.requestAnimationFrame(() => open(row));
  }
}
