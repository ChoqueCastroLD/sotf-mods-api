/**
 * «Listing» tab of the mod editor (PLAN §7.5 «editar la ficha sin volver a subir imágenes»): name,
 * short description, category, tags, the Markdown description, licence, source code, support links,
 * YouTube video, content language, credit to the original author and NSFW. Only the changed fields
 * are sent (`PATCH /studio/mods/:id`); the slug and the URL never change here.
 *
 * The field components are the publishing wizard's (`features/upload`), so both screens behave the
 * same (CodeMirror on demand, live preview through the API pipeline, tag chips).
 */
import { LOCALES } from '@sotf/i18n';
import { Button } from '@sotf/ui/button';
import { Field } from '@sotf/ui/field';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { Skeleton } from '@sotf/ui/skeleton';
import { Switch } from '@sotf/ui/switch';
import { Textarea } from '@sotf/ui/textarea';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo, useRef, useState } from 'react';
import { activeLocale } from '../../../lib/messages.ts';
import { notify } from '../../../lib/notify.ts';
import { MarkdownField } from '../../upload/components/MarkdownField.tsx';
import { SupportLinksEditor } from '../../upload/components/SupportLinksEditor.tsx';
import { TagPicker } from '../../upload/components/TagPicker.tsx';
import { LICENSE_LABELS } from '../../upload/labels.ts';
import { categoriesQuery, tagsQuery } from '../../upload/lib/queries.ts';
import { isHttpUrl, isYouTubeUrl } from '../../upload/lib/validate.ts';
import { FieldGroup } from '../../upload/steps/StepHeader.tsx';
import { MOD_LICENSES, type ModLicense, type SupportLink } from '../../upload/types.ts';
import { basecampApi, LIMITS, type ListingPatch, type StudioMod, storeStudioMod } from '../api.ts';
import { number } from '../format.ts';
import { bt } from '../i18n.ts';
import { languageName } from '../labels.ts';
import { reportFailure } from '../shared.tsx';

export interface ListingForm {
  name: string;
  shortDescription: string;
  descriptionMd: string;
  categorySlug: string | null;
  tagSlugs: string[];
  license: ModLicense | null;
  sourceUrl: string;
  supportLinks: SupportLink[];
  videoUrl: string;
  nsfw: boolean;
  contentLang: string | null;
  originalAuthorName: string;
  originalAuthorUrl: string;
}

export function formOf(studio: StudioMod): ListingForm {
  const mod = studio.mod;
  return {
    name: mod.name,
    shortDescription: mod.shortDescription,
    descriptionMd: studio.descriptionMd,
    categorySlug: mod.category?.slug ?? null,
    tagSlugs: mod.tags.map((tag) => tag.slug),
    license: mod.license,
    sourceUrl: mod.sourceUrl ?? '',
    supportLinks: mod.supportLinks.map((link) => ({ kind: link.kind, url: link.url, label: link.label })),
    videoUrl: mod.video?.url ?? '',
    nsfw: mod.nsfw,
    contentLang: mod.contentLang,
    originalAuthorName: mod.originalAuthor?.name ?? '',
    originalAuthorUrl: mod.originalAuthor?.url ?? '',
  };
}

const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

/** The fields that changed, in the shape of `UpdateStudioModBody`. */
export function patchOf(base: ListingForm, form: ListingForm): ListingPatch {
  const patch: ListingPatch = {};
  if (form.name.trim() !== base.name.trim()) patch.name = form.name.trim();
  if (form.shortDescription.trim() !== base.shortDescription.trim()) {
    patch.shortDescription = form.shortDescription.trim();
  }
  if (form.descriptionMd !== base.descriptionMd) patch.descriptionMd = form.descriptionMd;
  if (form.categorySlug && form.categorySlug !== base.categorySlug) patch.categorySlug = form.categorySlug;
  if (!same(form.tagSlugs, base.tagSlugs)) patch.tagSlugs = form.tagSlugs;
  if (form.license !== base.license) patch.license = form.license;
  if (form.sourceUrl.trim() !== base.sourceUrl.trim()) patch.sourceUrl = form.sourceUrl.trim() || null;
  const links = form.supportLinks
    .filter((link) => link.url.trim() !== '')
    .map((link) => ({
      kind: link.kind,
      url: link.url.trim(),
      ...(link.label?.trim() ? { label: link.label.trim() } : { label: null }),
    }));
  if (
    !same(
      links,
      base.supportLinks.map((link) => ({ ...link, label: link.label ?? null })),
    )
  ) {
    patch.supportLinks = links;
  }
  if (form.videoUrl.trim() !== base.videoUrl.trim()) patch.videoUrl = form.videoUrl.trim() || null;
  if (form.nsfw !== base.nsfw) patch.nsfw = form.nsfw;
  if (form.contentLang !== base.contentLang) patch.contentLang = form.contentLang;
  if (
    form.originalAuthorName.trim() !== base.originalAuthorName.trim() ||
    form.originalAuthorUrl.trim() !== base.originalAuthorUrl.trim()
  ) {
    patch.originalAuthor = form.originalAuthorName.trim()
      ? { name: form.originalAuthorName.trim(), url: form.originalAuthorUrl.trim() || null }
      : null;
  }
  return patch;
}

interface Problems {
  name?: string;
  sourceUrl?: string;
  videoUrl?: string;
  supportLinks?: string;
  originalAuthorUrl?: string;
}

function problemsOf(form: ListingForm): Problems {
  const problems: Problems = {};
  const name = form.name.trim().length;
  if (name < 2 || name > LIMITS.nameMax) problems.name = bt('basecamp_listing_error_name');
  if (form.sourceUrl.trim() && !isHttpUrl(form.sourceUrl)) problems.sourceUrl = bt('basecamp_listing_error_url');
  if (form.videoUrl.trim() && !isYouTubeUrl(form.videoUrl)) problems.videoUrl = bt('basecamp_listing_error_youtube');
  if (form.supportLinks.some((link) => link.url.trim() !== '' && !isHttpUrl(link.url))) {
    problems.supportLinks = bt('basecamp_listing_error_links');
  }
  if (form.originalAuthorUrl.trim() && !isHttpUrl(form.originalAuthorUrl)) {
    problems.originalAuthorUrl = bt('basecamp_listing_error_url');
  }
  return problems;
}

function localized(names: Partial<Record<string, string>>, fallback: string): string {
  return names[activeLocale()] ?? fallback;
}

export function ListingTab({ studio, onDirty }: { studio: StudioMod; onDirty: (dirty: boolean) => void }) {
  const queryClient = useQueryClient();
  const kind = studio.mod.kind === 'build' ? 'build' : 'mod';
  const categories = useQuery(categoriesQuery(kind));
  const tags = useQuery(tagsQuery);
  const base = useMemo(() => formOf(studio), [studio]);
  const [form, setForm] = useState<ListingForm>(base);
  const [baseline, setBaseline] = useState<ListingForm>(base);
  const baselineRef = useRef(base);
  const [touched, setTouched] = useState(false);
  const [saving, setSaving] = useState(false);

  // A fresher copy from the server (stream, another tab) replaces the form while it is clean.
  useEffect(() => {
    const current = baselineRef.current;
    if (same(current, base)) return;
    baselineRef.current = base;
    setBaseline(base);
    setForm((draft) => (same(draft, current) ? base : draft));
  }, [base]);

  const patch = patchOf(baseline, form);
  const dirty = Object.keys(patch).length > 0;
  useEffect(() => onDirty(dirty), [dirty, onDirty]);

  const problems = problemsOf(form);
  const invalid = Object.keys(problems).length > 0;
  const shown = touched ? problems : {};
  const set = <K extends keyof ListingForm>(key: K, value: ListingForm[K]) =>
    setForm((current) => ({ ...current, [key]: value }));

  const save = async () => {
    setTouched(true);
    if (invalid || !dirty) return;
    setSaving(true);
    try {
      const updated = await basecampApi.updateMod(studio.mod.id, patch);
      const next = formOf(updated);
      baselineRef.current = next;
      setBaseline(next);
      setForm(next);
      storeStudioMod(queryClient, updated);
      notify.success(bt('basecamp_listing_saved'));
    } catch (error) {
      reportFailure(error, bt('basecamp_listing_save_failed'));
    } finally {
      setSaving(false);
    }
  };

  const categoryOptions = (categories.data?.items ?? []).map((c) => ({
    value: c.slug,
    label: localized(c.names, c.name),
  }));
  const tagOptions = (tags.data?.items ?? []).map((t) => ({
    slug: t.slug,
    name: localized(t.names, t.name),
    group: t.group,
  }));
  const languageOptions = LOCALES.map((code) => ({ value: code as string, label: languageName(code, activeLocale()) }));
  if (form.contentLang && !languageOptions.some((option) => option.value === form.contentLang)) {
    languageOptions.push({ value: form.contentLang, label: languageName(form.contentLang, activeLocale()) });
  }

  return (
    <form
      className="flex flex-col gap-5"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        void save();
      }}
    >
      <FieldGroup id="basecamp-listing-identity" title={bt('basecamp_listing_identity')}>
        <Field label={bt('basecamp_listing_name')} error={shown.name}>
          <Input
            value={form.name}
            maxLength={LIMITS.nameMax}
            autoComplete="off"
            onChange={(event) => set('name', event.currentTarget.value)}
          />
        </Field>
        <Field
          label={bt('basecamp_listing_short')}
          description={bt('basecamp_counter', {
            count: number(form.shortDescription.length),
            max: number(LIMITS.shortDescriptionMax),
          })}
        >
          <Textarea
            value={form.shortDescription}
            maxLength={LIMITS.shortDescriptionMax}
            minRows={2}
            maxRows={5}
            onChange={(event) => set('shortDescription', event.currentTarget.value.replace(/\n+/g, ' '))}
          />
        </Field>
        <p className="text-xs text-fg-muted">
          {bt('basecamp_listing_url_fixed')}{' '}
          <span className="readout break-all text-fg">{studio.mod.canonicalPath}</span>
        </p>
      </FieldGroup>

      <FieldGroup id="basecamp-listing-discovery" title={bt('basecamp_listing_discovery')}>
        {categories.isPending ? (
          <Skeleton className="h-16 w-full sm:max-w-sm" />
        ) : (
          <Select
            label={bt('basecamp_listing_category')}
            options={categoryOptions}
            value={form.categorySlug}
            placeholder={bt('basecamp_listing_category_placeholder')}
            onValueChange={(value) => {
              if (value) set('categorySlug', value);
            }}
            className="sm:max-w-sm"
          />
        )}
        {tags.isPending ? (
          <Skeleton className="h-40 w-full" />
        ) : (
          <TagPicker
            id="basecamp-tags"
            tags={tagOptions}
            value={form.tagSlugs}
            max={LIMITS.tagsMax}
            onChange={(value) => set('tagSlugs', value)}
          />
        )}
      </FieldGroup>

      <FieldGroup id="basecamp-listing-description" title={bt('basecamp_listing_description_group')}>
        <MarkdownField
          id="basecamp-description"
          label={bt('basecamp_listing_description')}
          description={bt('basecamp_listing_description_hint')}
          value={form.descriptionMd}
          onChange={(value) => set('descriptionMd', value)}
          maxLength={LIMITS.descriptionMax}
          recommendedMin={300}
          idPrefix="bc-desc-"
        />
      </FieldGroup>

      <FieldGroup id="basecamp-listing-links" title={bt('basecamp_listing_links_group')}>
        <Select<ModLicense>
          label={bt('basecamp_listing_license')}
          options={MOD_LICENSES.map((value) => ({ value, label: LICENSE_LABELS[value]() }))}
          value={form.license}
          placeholder={bt('basecamp_listing_license_placeholder')}
          optional
          onValueChange={(value) => set('license', value ?? null)}
          className="sm:max-w-sm"
        />
        {kind === 'mod' ? (
          <Field
            label={bt('basecamp_listing_source')}
            description={bt('basecamp_listing_source_hint')}
            error={shown.sourceUrl}
            optional
          >
            <Input
              id="basecamp-source"
              type="url"
              inputMode="url"
              placeholder="https://github.com/…"
              value={form.sourceUrl}
              onChange={(event) => set('sourceUrl', event.currentTarget.value)}
            />
          </Field>
        ) : null}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-fg">{bt('basecamp_listing_support_links')}</span>
          <SupportLinksEditor
            value={form.supportLinks}
            max={LIMITS.supportLinksMax}
            onChange={(value) => set('supportLinks', value)}
          />
          {shown.supportLinks ? <p className="text-sm text-danger">{shown.supportLinks}</p> : null}
        </div>
        <Field
          label={bt('basecamp_listing_video')}
          description={bt('basecamp_listing_video_hint')}
          error={shown.videoUrl}
          optional
        >
          <Input
            type="url"
            inputMode="url"
            placeholder="https://www.youtube.com/watch?v=…"
            value={form.videoUrl}
            onChange={(event) => set('videoUrl', event.currentTarget.value)}
          />
        </Field>
      </FieldGroup>

      <FieldGroup id="basecamp-listing-more" title={bt('basecamp_listing_more')}>
        <Select
          label={bt('basecamp_listing_language')}
          description={bt('basecamp_listing_language_hint')}
          options={languageOptions}
          value={form.contentLang}
          placeholder={bt('basecamp_listing_language_placeholder')}
          optional
          onValueChange={(value) => set('contentLang', value ?? null)}
          className="sm:max-w-sm"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <Field
            label={bt('basecamp_listing_original_author')}
            description={bt('basecamp_listing_original_author_hint')}
            optional
          >
            <Input
              value={form.originalAuthorName}
              maxLength={80}
              onChange={(event) => set('originalAuthorName', event.currentTarget.value)}
            />
          </Field>
          <Field label={bt('basecamp_listing_original_url')} error={shown.originalAuthorUrl} optional>
            <Input
              type="url"
              inputMode="url"
              value={form.originalAuthorUrl}
              disabled={!form.originalAuthorName.trim()}
              onChange={(event) => set('originalAuthorUrl', event.currentTarget.value)}
            />
          </Field>
        </div>
        <Switch
          label={bt('basecamp_listing_nsfw')}
          description={bt('basecamp_listing_nsfw_hint')}
          checked={form.nsfw}
          onCheckedChange={(value) => set('nsfw', value)}
        />
      </FieldGroup>

      <SaveBar
        dirty={dirty}
        saving={saving}
        invalid={touched && invalid}
        onReset={() => {
          setForm(baseline);
          setTouched(false);
        }}
      />
    </form>
  );
}

/** Sticky save bar of an editor tab (submit button of the enclosing form). */
export function SaveBar({
  dirty,
  saving,
  invalid,
  onReset,
  onSave,
}: {
  dirty: boolean;
  saving: boolean;
  invalid: boolean;
  onReset: () => void;
  /** Without a form: the save action itself. */
  onSave?: () => void;
}) {
  return (
    <div className="sticky bottom-0 z-10 -mx-1 flex flex-wrap items-center justify-end gap-3 border-t border-border bg-bg/95 px-1 py-3 backdrop-blur">
      <p className="me-auto text-sm text-fg-muted" aria-live="polite">
        {invalid ? (
          <span className="text-danger">{bt('basecamp_save_invalid')}</span>
        ) : dirty ? (
          bt('basecamp_save_dirty')
        ) : (
          bt('basecamp_save_clean')
        )}
      </p>
      <Button type="button" variant="ghost" disabled={!dirty || saving} onClick={onReset}>
        {bt('basecamp_save_discard')}
      </Button>
      <Button
        type={onSave ? 'button' : 'submit'}
        loading={saving}
        disabled={!dirty}
        {...(onSave ? { onClick: onSave } : {})}
      >
        {bt('basecamp_save')}
      </Button>
    </div>
  );
}
