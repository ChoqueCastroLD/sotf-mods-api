/**
 * Entry of the mod page scripts (WP-62). Runs once per page, never throws (a broken enhancement
 * must not break downloads, which are plain links). Guests pay for no request: session-only
 * parts wait for the account hint (`whenSession`).
 */
import { initSocialIslands } from '../../islands/comments/social.ts';
import { pageEntity, track } from '../beacon.ts';
import { pageData } from './data.ts';
import { DIALOG_OPEN_EVENT, type DialogOpenDetail, initDialogs } from './dialogs.ts';
import { initCompatPrompt, initDownloads } from './download.ts';
import { initFollow, setFollowers } from './follow.ts';
import { initGallery } from './gallery.ts';
import { initKitAdd } from './kit-add.ts';
import { compactFormat, startLiveCounters } from './live.ts';
import { initNsfwGate } from './nsfw.ts';
import { initProse } from './prose.ts';
import { whenSession } from './session.ts';
import { initShare } from './share.ts';
import type { ModPageData } from './types.ts';
import { initWhatsNew } from './whats-new.ts';

let started = false;

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

  safely(() => initSocialIslands(root, session));
  safely(() => initDialogs(root, doc));
  safely(() => initNsfwGate(root, session));
  safely(() => initDownloads(root, data, doc));
  safely(() => initShare(root, data, doc));
  safely(() => initGallery(root, data, doc));
  safely(() => initProse(root, data.messages.videoEmbedTitle, doc));
  // Members get the «Did it work?» callout in place from the field-report island (server truth,
  // `GET /me/compat-prompts`); the browser-local toast is only for guests, so only one shows.
  safely(() => session.then((summary) => (summary ? undefined : initCompatPrompt(data))));
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
    for (const hint of root.querySelectorAll<HTMLElement>(
      '[data-review-guest-hint], [data-comment-guest-hint], [data-field-report-guest]',
    )) {
      hint.hidden = true;
    }
    safely(() => initFollow(root, data, summary, doc));
    safely(() => initWhatsNew(root, data, doc));
    safely(() => initKitAdd(root, data, doc));
  });
}
