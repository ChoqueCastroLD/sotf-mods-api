/**
 * The jam editor's form: one state for every tab (so nothing is lost when switching tabs), the
 * dirty check, the validation (fields grouped by the tab that holds them) and the request body.
 * Defaults of a new jam come from the server; this file only reads and checks what the editor has.
 */
import { JAM_RULES } from '@sotf/contracts/jams';
import { m } from '@sotf/i18n/messages';
import { fromLocalInput, slugify, toLocalInput } from '../admin/shared.tsx';
import type { AdminJam, UpdateJamInput } from './api.ts';
import { categoryName } from './phase.ts';
import { DATE_FIELDS, type DateField, type DateValues, orderProblems } from './schedule.ts';

export interface CategoryRow {
  /** Stable key (kept for saved categories, derived from the name for new ones). */
  key: string;
  label: string;
  weight: number;
  /** Not saved yet: its key follows the name. */
  fresh: boolean;
}

export interface JamForm {
  title: string;
  tagline: string;
  theme: string;
  themeHidden: boolean;
  descriptionMd: string;
  rulesMd: string;
  prizesMd: string;
  bannerUrl: string;
  entryKinds: AdminJam['entryKinds'];
  maxEntries: string;
  maxCoAuthors: string;
  minAge: string;
  minActivity: string;
  minVotes: string;
  autoPublish: boolean;
  dates: DateValues;
  categories: CategoryRow[];
}

export type TabId = 'overview' | 'details' | 'schedule' | 'rules' | 'entries' | 'results' | 'preview';
export const TAB_IDS: readonly TabId[] = ['overview', 'details', 'schedule', 'rules', 'entries', 'results', 'preview'];

export function formFromJam(jam: AdminJam): JamForm {
  return {
    title: jam.title,
    tagline: jam.tagline,
    theme: jam.theme,
    themeHidden: jam.themeHidden,
    descriptionMd: jam.descriptionMd,
    rulesMd: jam.rulesMd,
    prizesMd: jam.prizesMd,
    bannerUrl: jam.bannerUrl ?? '',
    entryKinds: jam.entryKinds,
    maxEntries: String(jam.maxEntriesPerUser),
    maxCoAuthors: String(jam.maxCoAuthors),
    minAge: String(jam.minVoterAgeDays),
    minActivity: String(jam.minVoterActivity),
    minVotes: String(jam.minVotes),
    autoPublish: jam.autoPublishResults,
    dates: Object.fromEntries(DATE_FIELDS.map((field) => [field, toLocalInput(jam[field])])) as DateValues,
    categories: jam.categories.map((category) => ({
      key: category.key,
      label: category.label ?? '',
      weight: category.weight,
      fresh: false,
    })),
  };
}

export function isDirty(a: JamForm, b: JamForm): boolean {
  return JSON.stringify(a) !== JSON.stringify(b);
}

/** Integer limits of the numeric fields (the API's own). */
export const LIMITS = {
  maxEntries: { min: 1, max: 5 },
  maxCoAuthors: { min: 0, max: 10 },
  minAge: { min: 0, max: 365 },
  minActivity: { min: 0, max: 100 },
  minVotes: { min: 1, max: 1000 },
} as const;
export type NumberField = keyof typeof LIMITS;

function integer(value: string, min: number, max: number): number | null {
  const parsed = Number(value);
  return value.trim() !== '' && Number.isInteger(parsed) && parsed >= min && parsed <= max ? parsed : null;
}

/** Key of a new category from its name (`Best lore` → `best-lore`), unique among `taken`. */
export function categoryKey(label: string, taken: ReadonlySet<string>): string {
  let base = slugify(label).slice(0, 28);
  if (!/^[a-z]/.test(base)) base = `c-${base}`;
  base = base.replace(/-+$/g, '');
  if (base.length < 2) base = 'category';
  let key = base;
  for (let n = 2; taken.has(key); n++) key = `${base.slice(0, 26)}-${n}`;
  return key;
}

export interface FormErrors {
  title?: string;
  banner?: string;
  dates: Partial<Record<DateField, string>>;
  numbers: Partial<Record<NumberField, string>>;
  categories: Record<number, string>;
}

const FIELD_LABEL: Record<DateField, () => string> = {
  announceAt: () => m.jams_timeline_announce(),
  submissionsOpenAt: () => m.jams_timeline_submissions_open(),
  submissionsCloseAt: () => m.jams_timeline_submissions_close(),
  votingOpenAt: () => m.jams_timeline_voting_open(),
  votingCloseAt: () => m.jams_timeline_voting_close(),
  archiveAt: () => m.jams_timeline_archive(),
};
export const dateLabel = (field: DateField): string => FIELD_LABEL[field]();

export function validate(form: JamForm, locked: { categories: boolean }): FormErrors {
  const errors: FormErrors = { dates: {}, numbers: {}, categories: {} };
  if (form.title.trim().length < 3) errors.title = m.jams_admin_error_title();
  if (form.bannerUrl.trim() && !/^https:\/\//i.test(form.bannerUrl.trim()))
    errors.banner = m.jams_editor_error_banner();
  for (const problem of orderProblems(form.dates)) {
    errors.dates[problem.field] = m.jams_editor_error_order({
      field: dateLabel(problem.field),
      previous: dateLabel(problem.previous),
    });
  }
  const numbers: Record<NumberField, string> = {
    maxEntries: form.maxEntries,
    maxCoAuthors: form.maxCoAuthors,
    minAge: form.minAge,
    minActivity: form.minActivity,
    minVotes: form.minVotes,
  };
  for (const field of Object.keys(LIMITS) as NumberField[]) {
    const { min, max } = LIMITS[field];
    if (integer(numbers[field], min, max) === null) errors.numbers[field] = m.jams_editor_error_range({ min, max });
  }
  if (!locked.categories) {
    const seen = new Set<string>();
    form.categories.forEach((category, index) => {
      if (category.fresh && category.label.trim().length === 0) {
        errors.categories[index] = m.jams_editor_error_category_name();
      } else if (!/^[a-z][a-z0-9-]{1,30}$/.test(category.key) || seen.has(category.key)) {
        errors.categories[index] = m.jams_editor_error_categories();
      }
      seen.add(category.key);
    });
    if (form.categories.length < 1) errors.categories[0] = m.jams_editor_error_categories();
  }
  return errors;
}

export function errorCount(errors: FormErrors): number {
  return (
    (errors.title ? 1 : 0) +
    (errors.banner ? 1 : 0) +
    Object.keys(errors.dates).length +
    Object.keys(errors.numbers).length +
    Object.keys(errors.categories).length
  );
}

/** Tab that holds each group of errors. */
export function errorTabs(errors: FormErrors): Set<TabId> {
  const tabs = new Set<TabId>();
  if (errors.title || errors.banner) tabs.add('details');
  if (Object.keys(errors.dates).length > 0) tabs.add('schedule');
  if (Object.keys(errors.numbers).length > 0 || Object.keys(errors.categories).length > 0) tabs.add('rules');
  return tabs;
}

/** The PATCH body: everything the form holds (categories only while they can still change). */
export function toUpdateBody(form: JamForm, categoriesLocked: boolean): UpdateJamInput {
  return {
    title: form.title.trim(),
    tagline: form.tagline.trim(),
    theme: form.theme.trim(),
    themeHidden: form.theme.trim() ? form.themeHidden : false,
    descriptionMd: form.descriptionMd,
    rulesMd: form.rulesMd,
    prizesMd: form.prizesMd,
    bannerUrl: form.bannerUrl.trim() || null,
    entryKinds: form.entryKinds,
    maxEntriesPerUser: integer(form.maxEntries, 1, 5) ?? 1,
    maxCoAuthors: integer(form.maxCoAuthors, 0, 10) ?? 0,
    minVoterAgeDays: integer(form.minAge, 0, 365) ?? 0,
    minVoterActivity: integer(form.minActivity, 0, 100) ?? 0,
    minVotes: integer(form.minVotes, 1, 1000) ?? 1,
    autoPublishResults: form.autoPublish,
    ...(Object.fromEntries(DATE_FIELDS.map((field) => [field, fromLocalInput(form.dates[field])])) as Record<
      DateField,
      string | null
    >),
    ...(categoriesLocked
      ? {}
      : {
          categories: form.categories.map((category) => ({
            key: category.key,
            label: category.label.trim() || null,
            weight: category.weight,
          })),
        }),
  };
}

/** Items the editor asks for before a jam is announced: what is missing, and on which tab. */
export interface ReadinessItem {
  id: 'title' | 'tagline' | 'description' | 'theme' | 'schedule' | 'categories';
  done: boolean;
  tab: TabId;
  required: boolean;
}

export function readiness(form: JamForm): ReadinessItem[] {
  const has = (value: string) => value.trim().length > 0;
  return [
    { id: 'title', done: form.title.trim().length >= 3, tab: 'details', required: true },
    { id: 'tagline', done: has(form.tagline), tab: 'details', required: false },
    { id: 'description', done: has(form.descriptionMd), tab: 'details', required: false },
    { id: 'theme', done: has(form.theme), tab: 'details', required: false },
    {
      id: 'schedule',
      done:
        has(form.dates.submissionsOpenAt) &&
        has(form.dates.submissionsCloseAt) &&
        has(form.dates.votingOpenAt) &&
        has(form.dates.votingCloseAt),
      tab: 'schedule',
      required: true,
    },
    { id: 'categories', done: form.categories.length > 0, tab: 'rules', required: true },
  ];
}

/** Shown name of a category row (its label, else the translated default of its key). */
export function rowName(category: CategoryRow): string {
  return categoryName({ key: category.key, label: category.label.trim() || null });
}

export const TEXT_LIMITS = JAM_RULES;
