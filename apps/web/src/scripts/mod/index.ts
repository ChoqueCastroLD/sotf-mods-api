/**
 * Entry of the mod page scripts (WP-62). Runs once per page, never throws (a broken enhancement
 * must not break downloads, which are plain links). Guests pay for no request: session-only
 * parts wait for the account hint (`whenSession`).
 */
import { initSocialIslands } from '../../islands/comments/social.ts';
import { pageEntity, track } from '../beacon.ts';
import { initCarousels } from './carousel.ts';
import { pageData } from './data.ts';
import { DIALOG_OPEN_EVENT, type DialogOpenDetail, initDialogs } from './dialogs.ts';
import { initDownloads } from './download.ts';
import { initFolds } from './fold.ts';
import { initFollow, setFollowers } from './follow.ts';
import { initGallery } from './gallery.ts';
import { compactFormat, startLiveCounters } from './live.ts';
import { initNsfwGate } from './nsfw.ts';
import { initProse } from './prose.ts';
import { whenSession } from './session.ts';
import { initShare } from './share.ts';
import { initSheetSections } from './sheets.ts';
import { initTabs } from './tabs.ts';
import { initTranslation } from './translation.ts';
import type { ModPageData } from './types.ts';
import { initVersions } from './versions.ts';

let started = false;

/**
 * Arrival from an old-version download link of a «latest version only» mod (the download route
 * answers 303 here with `?superseded=1`): explain it once and drop the parameter from the URL.
 */
function noticeSuperseded(data: ModPageData, doc: Document): void {
  const url = new URL(doc.location.href);
  if (url.searchParams.get('superseded') !== '1') return;
  url.searchParams.delete('superseded');
  doc.defaultView?.history.replaceState(doc.defaultView.history.state, '', url.pathname + url.search + url.hash);
  void import('../../lib/client/toast.ts').then(({ toast }) =>
    toast.info(data.messages.latestOnly, { duration: 8000 }),
  );
}

function initLiveMod(root: HTMLElement, data: ModPageData, doc: Document): void {
  const lang = doc.documentElement.lang || 'en';
  const compact = compactFormat(lang);
  const full = new Intl.NumberFormat(lang);
  startLiveCounters(data.modId, (live) => {
    for (const element of root.querySelectorAll<HTMLElement>('[data-live="downloads-compact"]'))
      element.textContent = compact.format(live.downloads);
    for (const element of root.querySelectorAll<HTMLElement>('[data-live="downloads-full"]'))
      element.textContent = full.format(live.downloads);
    setFollowers(doc, data, live.followers);
  });
}

function safely(task: () => unknown): void {
  try {
    const result = task();
    if (result instanceof Promise) result.catch(() => {});
  } catch {
    // Progressive enhancement only.
  }
}

export function initModPage(doc: Document = document): void {
  if (started) return;
  started = true;
  const root = doc.querySelector<HTMLElement>('[data-mod-page]');
  const data = pageData(doc);
  if (!root || !data) return;
  const session = whenSession();

  safely(() => initSheetSections(root, doc));
  safely(() => initSocialIslands(root, session));
  safely(() => initDialogs(root, doc));
  safely(() => initNsfwGate(root, session));
  safely(() => noticeSuperseded(data, doc));
  safely(() => initDownloads(root, data, doc));
  safely(() => initShare(root, data, doc));
  safely(() => initTranslation(root));
  safely(() => initCarousels(root));
  safely(() => initTabs(root));
  safely(() => initFolds(root));
  safely(() => initVersions(root, doc));
  safely(() => initGallery(root, data, doc));
  safely(() => initProse(root, data.messages.videoEmbedTitle, doc));
  safely(() => track('mod_view', pageEntity()));
  safely(() => initLiveMod(root, data, doc));
  safely(() => import('../../islands/stats/boot.ts').then(({ bootStats }) => bootStats(root)));

  doc.addEventListener(DIALOG_OPEN_EVENT, (event) => {
    const { id, dialog } = (event as CustomEvent<DialogOpenDetail>).detail;
    if (id === 'report-dialog') {
      void session.then((summary) => import('./report.ts').then(({ bindReport }) => bindReport(dialog, summary)));
    }
  });

  void session.then((summary) => {
    if (!summary) return;
    for (const hint of root.querySelectorAll<HTMLElement>('[data-review-guest-hint], [data-comment-guest-hint]')) {
      hint.hidden = true;
    }
    safely(() => initFollow(root, data, summary, doc));
  });
}
