/**
 * Step ② «Details» (PLAN §7.5): name (prefilled), slug with a live URL preview, short description
 * (200 with counter), category, up to 5 tags, the Markdown description (CodeMirror on demand,
 * live preview through the same pipeline, 20 000 characters), licence, source code link, support
 * links and NSFW. A new mod starts with the creator's default licence (Settings → Creator,
 * `settings.defaultLicense`) until the creator picks another one or clears it.
 */
import { STUDIO_LIMITS } from '@sotf/contracts/studio';
import { Field } from '@sotf/ui/field';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { Skeleton } from '@sotf/ui/skeleton';
import { Switch } from '@sotf/ui/switch';
import { Textarea } from '@sotf/ui/textarea';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useMe } from '../../../hooks/use-me.ts';
import { activeLocale } from '../../../lib/messages.ts';
import { MarkdownField } from '../components/MarkdownField.tsx';
import { SupportLinksEditor } from '../components/SupportLinksEditor.tsx';
import { TagPicker } from '../components/TagPicker.tsx';
import { ut } from '../i18n.ts';
import { LICENSE_LABELS, preflightLabel } from '../labels.ts';
import { number } from '../lib/format.ts';
import { categoriesQuery, tagsQuery } from '../lib/queries.ts';
import { isHttpUrl } from '../lib/validate.ts';
import { listingPath, SLUG_PATTERN, slugify } from '../lib/wizard.ts';
import { type DraftData, MOD_LICENSES, type ModLicense, type PreflightItemDTO, type UpdateData } from '../types.ts';
import { FieldGroup, StepHeader } from './StepHeader.tsx';

export interface DetailsStepProps {
  kind: 'mod' | 'build';
  data: DraftData;
  update: UpdateData;
  preflight: readonly PreflightItemDTO[];
  handle: string;
  headingId: string;
}

/** Server-side problems of one field (slug taken, unknown category…). */
function serverError(preflight: readonly PreflightItemDTO[], field: string): string | null {
  const row = preflight.find((r) => r.field === field && r.severity === 'error');
  return row ? preflightLabel(row.code) : null;
}

function localized(names: Partial<Record<string, string>>, fallback: string): string {
  return names[activeLocale()] ?? fallback;
}

export function DetailsStep({ kind, data, update, preflight, handle, headingId }: DetailsStepProps) {
  const categories = useQuery(categoriesQuery(kind));
  const tags = useQuery(tagsQuery);
  const defaultLicense = useMe().settings.defaultLicense;
  // `undefined` = never chosen (`null` = cleared on purpose): only then the default applies.
  const licenseUnset = data.license === undefined;
  useEffect(() => {
    if (kind !== 'mod' || !licenseUnset || !defaultLicense) return;
    update((d) => (d.license === undefined ? { ...d, license: defaultLicense } : d));
  }, [kind, licenseUnset, defaultLicense, update]);
  const [touched, setTouched] = useState<ReadonlySet<string>>(new Set());
  const touch = (field: string) => setTouched((set) => new Set(set).add(field));

  const name = data.name ?? '';
  const slug = data.slug ?? slugify(name);
  const shortDescription = data.shortDescription ?? '';
  const sourceUrl = data.sourceUrl ?? '';

  const nameError =
    touched.has('name') && name.trim().length < 2 ? ut('upload_error_name') : serverError(preflight, 'name');
  const slugError =
    slug && !SLUG_PATTERN.test(slug)
      ? ut('upload_error_slug')
      : touched.has('slug') && slug.length < 2
        ? ut('upload_error_slug')
        : serverError(preflight, 'slug');
  const sourceError = touched.has('sourceUrl') && sourceUrl && !isHttpUrl(sourceUrl) ? ut('upload_error_url') : null;

  const categoryOptions = (categories.data?.items ?? []).map((c) => ({
    value: c.slug,
    label: localized(c.names, c.name),
  }));
  const tagOptions = (tags.data?.items ?? []).map((t) => ({
    slug: t.slug,
    name: localized(t.names, t.name),
    group: t.group,
  }));
  const licenseOptions = MOD_LICENSES.map((value) => ({ value, label: LICENSE_LABELS[value]() }));

  return (
    <div className="flex flex-col gap-5">
      <StepHeader id={headingId} title={ut('upload_details_title')} description={ut('upload_details_intro')} />

      <FieldGroup id="upload-group-identity" title={ut('upload_details_identity')}>
        <Field label={ut('upload_name_label')} error={nameError} description={ut('upload_name_hint')}>
          <Input
            id="upload-name"
            value={name}
            maxLength={STUDIO_LIMITS.nameMax}
            autoComplete="off"
            onChange={(event) => {
              const next = event.currentTarget.value;
              update((d) => ({ ...d, name: next }));
            }}
            onBlur={() => touch('name')}
          />
        </Field>
        <Field
          label={ut('upload_slug_label')}
          error={slugError}
          description={
            <>
              {ut('upload_slug_preview')}{' '}
              <span className="readout break-all text-fg">{listingPath(kind, handle, slug || '…')}</span>
            </>
          }
        >
          <Input
            id="upload-slug"
            value={slug}
            maxLength={80}
            autoComplete="off"
            spellCheck={false}
            onChange={(event) => {
              const next = event.currentTarget.value.toLowerCase().replace(/\s+/g, '-');
              update((d) => ({ ...d, slug: next }));
            }}
            onBlur={() => touch('slug')}
          />
        </Field>
        <Field
          label={ut('upload_short_description_label')}
          error={serverError(preflight, 'shortDescription')}
          description={ut('upload_counter', {
            count: number(shortDescription.length),
            max: number(STUDIO_LIMITS.shortDescriptionMax),
          })}
        >
          <Textarea
            id="upload-short-description"
            value={shortDescription}
            maxLength={STUDIO_LIMITS.shortDescriptionMax}
            minRows={2}
            maxRows={5}
            onChange={(event) => {
              const next = event.currentTarget.value.replace(/\n+/g, ' ');
              update((d) => ({ ...d, shortDescription: next }));
            }}
          />
        </Field>
      </FieldGroup>

      <FieldGroup
        id="upload-group-discovery"
        title={ut('upload_details_discovery')}
        description={ut('upload_details_discovery_hint')}
      >
        <div id="upload-category" tabIndex={-1} className="outline-none">
          {categories.isPending ? (
            <Skeleton className="h-16 w-full sm:max-w-sm" />
          ) : (
            <Select
              label={ut('upload_category_label')}
              options={categoryOptions}
              value={data.categorySlug ?? null}
              placeholder={ut('upload_category_placeholder')}
              error={serverError(preflight, 'categorySlug')}
              onValueChange={(value) => update((d) => ({ ...d, categorySlug: value ?? undefined }))}
              className="sm:max-w-sm"
            />
          )}
        </div>
        {tags.isPending ? (
          <Skeleton className="h-40 w-full" />
        ) : (
          <TagPicker
            id="upload-tags"
            tags={tagOptions}
            value={data.tagSlugs ?? []}
            max={STUDIO_LIMITS.tagsMax}
            error={serverError(preflight, 'tagSlugs')}
            onChange={(tagSlugs) => update((d) => ({ ...d, tagSlugs }))}
          />
        )}
      </FieldGroup>

      <FieldGroup id="upload-group-description" title={ut('upload_description_group')}>
        <MarkdownField
          id="upload-description"
          label={ut('upload_description_label')}
          description={ut('upload_description_hint')}
          value={data.descriptionMd ?? ''}
          onChange={(descriptionMd) => update((d) => ({ ...d, descriptionMd }))}
          maxLength={STUDIO_LIMITS.descriptionMax}
          recommendedMin={300}
          idPrefix="md-desc-"
          placeholder={ut('upload_description_placeholder')}
        />
      </FieldGroup>

      <FieldGroup id="upload-group-links" title={ut('upload_details_links')}>
        <div id="upload-license" tabIndex={-1} className="outline-none">
          <Select<ModLicense>
            label={ut('upload_license_label')}
            description={ut('upload_license_hint')}
            options={licenseOptions}
            value={data.license ?? null}
            placeholder={ut('upload_license_placeholder')}
            optional
            onValueChange={(license) => update((d) => ({ ...d, license: license ?? null }))}
            className="sm:max-w-sm"
          />
        </div>
        {kind === 'mod' ? (
          <Field label={ut('upload_source_label')} description={ut('upload_source_hint')} error={sourceError} optional>
            <Input
              id="upload-source"
              type="url"
              inputMode="url"
              placeholder="https://github.com/…"
              value={sourceUrl}
              onChange={(event) => {
                const next = event.currentTarget.value;
                update((d) => ({ ...d, sourceUrl: next.trim() ? next.trim() : null }));
              }}
              onBlur={() => touch('sourceUrl')}
            />
          </Field>
        ) : null}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-fg">
            {ut('upload_links_label')}
            <span className="ms-1.5 font-normal text-fg-subtle">({ut('upload_optional')})</span>
          </span>
          <SupportLinksEditor
            value={data.supportLinks ?? []}
            max={STUDIO_LIMITS.supportLinksMax}
            onChange={(supportLinks) => update((d) => ({ ...d, supportLinks }))}
          />
        </div>
        <Switch
          label={ut('upload_nsfw_label')}
          description={ut('upload_nsfw_hint')}
          checked={data.nsfw ?? false}
          onCheckedChange={(nsfw) => update((d) => ({ ...d, nsfw }))}
        />
      </FieldGroup>
    </div>
  );
}
