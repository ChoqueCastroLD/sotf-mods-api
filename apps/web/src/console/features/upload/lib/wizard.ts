/**
 * Steps of the publishing flows (PLAN §7.5):
 *
 * - **New mod**: ① file ② details ③ compatibility ④ media ⑤ release ⑥ review;
 * - **New build**: file (BuildShare JSON) → details → media → review;
 * - **New version**: ① file ⑤ release ⑥ review (+ «Notify followers»).
 *
 * `DraftData.step` stores the global number of the step (1–6), so a draft resumes where it was.
 */
import type { DraftData, DraftKind } from '@sotf/contracts/studio';

export type WizardMode = DraftKind;
export type StepId = 'file' | 'details' | 'compat' | 'media' | 'release' | 'review';

export const STEPS: Readonly<Record<WizardMode, readonly StepId[]>> = {
  mod: ['file', 'details', 'compat', 'media', 'release', 'review'],
  build: ['file', 'details', 'media', 'review'],
  version: ['file', 'release', 'review'],
};

export const STEP_NUMBER: Readonly<Record<StepId, number>> = {
  file: 1,
  details: 2,
  compat: 3,
  media: 4,
  release: 5,
  review: 6,
};

/** The step of `mode` stored as `step` in a draft (the first one when unknown). */
export function stepFromNumber(mode: WizardMode, step: number | undefined): StepId {
  const steps = STEPS[mode];
  const found = steps.find((id) => STEP_NUMBER[id] === step);
  return found ?? steps[0] ?? 'file';
}

/** Step and element id of a preflight row's `field` («⚠ with a link to the field»). */
export const FIELD_TARGETS: Readonly<Record<string, { step: StepId; anchor: string }>> = {
  file: { step: 'file', anchor: 'upload-file' },
  modId: { step: 'file', anchor: 'upload-file' },
  name: { step: 'details', anchor: 'upload-name' },
  slug: { step: 'details', anchor: 'upload-slug' },
  shortDescription: { step: 'details', anchor: 'upload-short-description' },
  categorySlug: { step: 'details', anchor: 'upload-category' },
  tagSlugs: { step: 'details', anchor: 'upload-tags' },
  descriptionMd: { step: 'details', anchor: 'upload-description' },
  license: { step: 'details', anchor: 'upload-license' },
  sourceUrl: { step: 'details', anchor: 'upload-source' },
  platform: { step: 'compat', anchor: 'upload-platform' },
  dependencies: { step: 'compat', anchor: 'upload-dependencies' },
  thumbnail: { step: 'media', anchor: 'upload-cover' },
  gallery: { step: 'media', anchor: 'upload-gallery' },
  changelogMd: { step: 'release', anchor: 'upload-changelog' },
};

/** Where a preflight row points in `mode` (fields of skipped steps fall back to the file). */
export function fieldTarget(mode: WizardMode, field: string): { step: StepId; anchor: string } | null {
  const target = FIELD_TARGETS[field];
  if (!target) return null;
  return STEPS[mode].includes(target.step) ? target : null;
}

/** Whether a draft carries anything worth saving (a fresh wizard is not saved until then). */
export function hasContent(data: DraftData): boolean {
  return Object.entries(data).some(([key, value]) => {
    if (key === 'step' || value === undefined || value === null) return false;
    if (typeof value === 'string') return value.trim().length > 0;
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'object') return Object.values(value as object).some((v) => v !== undefined && v !== '');
    return true;
  });
}

/** Mod slug suggestion from a name (same rules as the API's `slugify`). */
export function slugify(value: string): string {
  const slug = value
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/g, '');
  return slug.length >= 2 ? slug : '';
}

export const SLUG_PATTERN = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

/** Public path of the future listing (`/mods/:handle/:slug` or `/builds/:handle/:slug`). */
export function listingPath(kind: 'mod' | 'build', handle: string, slug: string): string {
  return `/${kind === 'build' ? 'builds' : 'mods'}/${handle}/${slug}`;
}

/** A required answer a step still lacks: the field and the element to focus. */
export interface StepProblem {
  field: 'file' | 'name' | 'slug' | 'shortDescription' | 'categorySlug' | 'sourceUrl' | 'loaderMin';
  anchor: string;
}

/**
 * What blocks «Next» on `step`: the same required answers the preflight checks (file, name, slug,
 * short description, category) plus values that are present but malformed. The steps show these
 * inline once the creator tried to continue; nothing else blocks, so there is no dead end.
 */
export function stepProblems(
  step: StepId,
  mode: WizardMode,
  data: DraftData,
  checks: { isHttpUrl: (value: string) => boolean; isLoaderVersion: (value: string) => boolean },
): StepProblem[] {
  const problems: StepProblem[] = [];
  if (step === 'file' && !data.fileUploadId) problems.push({ field: 'file', anchor: 'upload-file' });
  if (step === 'details' && mode !== 'version') {
    if ((data.name ?? '').trim().length < 2) problems.push({ field: 'name', anchor: 'upload-name' });
    const slug = data.slug ?? slugify(data.name ?? '');
    if (slug.length < 2 || !SLUG_PATTERN.test(slug)) problems.push({ field: 'slug', anchor: 'upload-slug' });
    if (!(data.shortDescription ?? '').trim()) {
      problems.push({ field: 'shortDescription', anchor: 'upload-short-description' });
    }
    if (!data.categorySlug) problems.push({ field: 'categorySlug', anchor: 'upload-category' });
    if (data.sourceUrl && !checks.isHttpUrl(data.sourceUrl))
      problems.push({ field: 'sourceUrl', anchor: 'upload-source' });
  }
  if (step === 'compat' && data.loaderMin && !checks.isLoaderVersion(data.loaderMin)) {
    problems.push({ field: 'loaderMin', anchor: 'upload-loader' });
  }
  return problems;
}
