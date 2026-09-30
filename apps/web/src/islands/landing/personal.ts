/**
 * Personal block of the landing (T0-05): loaded only for visitors with the `sotf_li` hint, as a
 * lazy chunk, so guests never pay for it and the shared HTML never varies. Calls
 * `GET /api/v2/me/home` and fills `components/landing/PersonalBlock.astro` (every string is
 * already in the page, in the page language). A 401/403 (expired session with a stale hint)
 * hides the block; other failures show the error state with «Try again».
 */
import type { MeHomeDTO } from '@sotf/contracts/me';
import type { z } from 'zod';
import { relativize } from './relative-time.ts';

type MeHome = z.output<typeof MeHomeDTO>;

export const ME_HOME_URL = '/api/v2/me/home';
const MAX_UPDATES = 6;
const MAX_KITS = 3;

type State = 'loading' | 'error' | 'ready';

function safePath(path: string): string | null {
  return path.startsWith('/') && !path.startsWith('//') ? path : null;
}

function show(section: HTMLElement, state: State): void {
  for (const panel of section.querySelectorAll<HTMLElement>('[data-personal-state]')) {
    panel.hidden = panel.dataset.personalState !== state;
  }
}

function cloneRow(template: HTMLTemplateElement | null): HTMLLIElement | null {
  const row = template?.content.firstElementChild?.cloneNode(true);
  return row instanceof HTMLLIElement ? row : null;
}

function modsCount(section: HTMLElement, count: number): string {
  let forms: Record<string, string> = {};
  try {
    forms = JSON.parse(section.dataset.modsForms ?? '{}') as Record<string, string>;
  } catch {
    // Malformed attribute: fall back to the bare number.
  }
  const lang = document.documentElement.lang || 'en';
  const category = new Intl.PluralRules(lang).select(count);
  const template = forms[category] ?? forms.other ?? '#';
  return template.replace('#', new Intl.NumberFormat(lang).format(count));
}

function render(section: HTMLElement, home: MeHome): void {
  const prefix = section.dataset.prefix ?? '';

  const list = section.querySelector<HTMLUListElement>('[data-personal-updates]');
  const updateTemplate = section.querySelector<HTMLTemplateElement>('template[data-personal-update-template]');
  const rows: HTMLLIElement[] = [];
  for (const update of home.updates.slice(0, MAX_UPDATES)) {
    const path = safePath(update.mod.canonicalPath);
    const row = cloneRow(updateTemplate);
    if (!path || !row) continue;
    const link = row.querySelector<HTMLAnchorElement>('[data-link]');
    if (link) link.href = `${prefix}${path}`;
    const name = row.querySelector('[data-name]');
    if (name) name.textContent = update.mod.name;
    const author = row.querySelector('[data-author]');
    if (author) author.textContent = `@${update.mod.userHandle}`;
    const time = row.querySelector('time');
    if (time) time.dateTime = update.mod.lastReleasedAt;
    const versions = row.querySelector('[data-versions]');
    if (versions) {
      versions.textContent = update.fromVersion
        ? `v${update.fromVersion} → v${update.toVersion}`
        : `v${update.toVersion}`;
    }
    rows.push(row);
  }
  list?.replaceChildren(...rows);
  const none = section.querySelector<HTMLElement>('[data-personal-none]');
  if (none) none.hidden = rows.length > 0;

  const checklist = section.querySelector<HTMLElement>('[data-personal-checklist]');
  if (checklist) {
    const onboarding = home.onboarding;
    checklist.hidden = onboarding === null || onboarding.completed || onboarding.dismissed;
    if (onboarding) {
      const done = new Set(onboarding.steps.filter((step) => step.done).map((step) => step.key));
      for (const item of checklist.querySelectorAll<HTMLElement>('[data-step]')) {
        item.toggleAttribute('data-done', done.has(item.dataset.step as (typeof onboarding.steps)[number]['key']));
      }
      const total = onboarding.steps.length || 1;
      const progress = checklist.querySelector<HTMLElement>('[data-personal-progress]');
      progress?.setAttribute('aria-valuenow', String(done.size));
      progress?.setAttribute('aria-valuemax', String(total));
      const bar = checklist.querySelector<HTMLElement>('[data-personal-progress-bar]');
      if (bar) bar.style.width = `${Math.round((done.size / total) * 100)}%`;
    }
  }

  const kits = section.querySelector<HTMLElement>('[data-personal-kits]');
  const kitList = section.querySelector<HTMLUListElement>('[data-personal-kit-list]');
  const kitTemplate = section.querySelector<HTMLTemplateElement>('template[data-personal-kit-template]');
  const kitRows: HTMLLIElement[] = [];
  for (const kit of home.recentKits.slice(0, MAX_KITS)) {
    const path = safePath(kit.canonicalPath);
    const row = cloneRow(kitTemplate);
    if (!path || !row) continue;
    const link = row.querySelector<HTMLAnchorElement>('[data-link]');
    if (link) link.href = `${prefix}${path}`;
    const name = row.querySelector('[data-name]');
    if (name) name.textContent = kit.name;
    const count = row.querySelector('[data-count]');
    if (count) count.textContent = modsCount(section, kit.itemsCount);
    kitRows.push(row);
  }
  kitList?.replaceChildren(...kitRows);
  if (kits) kits.hidden = kitRows.length === 0;

  relativize(section);
}

export function initPersonal(doc: Document = document): void {
  const section = doc.querySelector<HTMLElement>('[data-personal]');
  if (!section) return;
  let loading = false;

  const load = async () => {
    if (loading) return;
    loading = true;
    show(section, 'loading');
    try {
      const response = await fetch(ME_HOME_URL, {
        credentials: 'same-origin',
        headers: { accept: 'application/json' },
      });
      if (response.status === 401 || response.status === 403) {
        section.hidden = true;
        return;
      }
      if (!response.ok) throw new Error(`me/home ${response.status}`);
      const home = (await response.json()) as MeHome;
      if (!home || !Array.isArray(home.updates) || !Array.isArray(home.recentKits)) throw new Error('me/home body');
      render(section, home);
      show(section, 'ready');
    } catch {
      show(section, 'error');
    } finally {
      loading = false;
    }
  };

  section.querySelector('[data-personal-retry]')?.addEventListener('click', () => {
    void load();
  });
  section.hidden = false;
  void load();
}
