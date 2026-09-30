/**
 * Kit details (PLAN §7.8 «Crear y editar»): name, slug, Markdown description, visibility and the
 * cover (automatic «knolling» collage of the items, or an uploaded image). Saved together with
 * `PATCH /kits/:id` (only the changed fields); the form resets to the server's answer.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { RadioCardGroup } from '@sotf/ui/radio-card';
import { Textarea } from '@sotf/ui/textarea';
import { useQueryClient } from '@tanstack/react-query';
import { ImagePlus, Trash2 } from 'lucide-react';
import { type ChangeEvent, type FormEvent, useEffect, useId, useRef, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { type KitDTO, type KitVisibility, kitsApi, storeKit } from './api.ts';
import { KIT_LIMITS, KIT_VISIBILITIES, NAME_MIN } from './limits.ts';
import { failureDetail, MiniKnolling, VISIBILITY_ICONS, visibilityHint, visibilityLabel } from './shared.tsx';
import { COVER_LIMITS, CoverUploadFailure, uploadCover } from './upload.ts';

const SLUG_PATTERN = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

interface Values {
  name: string;
  slug: string;
  description: string;
  visibility: KitVisibility;
}

function valuesOf(kit: KitDTO): Values {
  return {
    name: kit.name,
    slug: kit.slug,
    description: kit.descriptionMd ?? '',
    visibility: kit.visibility,
  };
}

function coverError(error: unknown): string {
  if (error instanceof CoverUploadFailure) {
    switch (error.reason) {
      case 'type':
        return m.kits_cover_error_type();
      case 'size':
        return m.kits_cover_error_size({ max: Math.round(COVER_LIMITS.maxBytes / (1024 * 1024)) });
      case 'processing':
        return m.kits_cover_error_processing();
      case 'rejected':
        return m.kits_cover_error_rejected();
      default:
        return m.kits_cover_error_upload();
    }
  }
  return failureDetail(error);
}

export function DetailsForm({ kit, onDirtyChange }: { kit: KitDTO; onDirtyChange: (dirty: boolean) => void }) {
  const queryClient = useQueryClient();
  const formId = useId();
  const [values, setValues] = useState<Values>(() => valuesOf(kit));
  const [baseline, setBaseline] = useState<Values>(() => valuesOf(kit));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [coverBusy, setCoverBusy] = useState<number | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const baselineRef = useRef(baseline);
  const resetTo = (next: Values) => {
    baselineRef.current = next;
    setBaseline(next);
    setValues(next);
  };

  // A newer server state (another tab, the cover, the items editor) replaces untouched fields only.
  useEffect(() => {
    const next = valuesOf(kit);
    const previous = baselineRef.current;
    baselineRef.current = next;
    setBaseline(next);
    setValues((current) => ({
      name: current.name === previous.name ? next.name : current.name,
      slug: current.slug === previous.slug ? next.slug : current.slug,
      description: current.description === previous.description ? next.description : current.description,
      visibility: current.visibility === previous.visibility ? next.visibility : current.visibility,
    }));
  }, [kit]);

  const changed: Partial<Values> = {};
  if (values.name.trim() !== baseline.name) changed.name = values.name.trim();
  if (values.slug.trim() !== baseline.slug) changed.slug = values.slug.trim();
  if (values.description !== baseline.description) changed.description = values.description;
  if (values.visibility !== baseline.visibility) changed.visibility = values.visibility;
  const dirty = Object.keys(changed).length > 0;

  useEffect(() => onDirtyChange(dirty), [dirty, onDirtyChange]);

  const nameError = values.name.trim().length < NAME_MIN ? m.kits_name_too_short({ min: NAME_MIN }) : null;
  const slugValue = values.slug.trim();
  const slugError =
    slugValue.length > 0 && (slugValue.length < 2 || !SLUG_PATTERN.test(slugValue)) ? m.kits_slug_invalid() : null;

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setError(null);
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!dirty || saving || nameError || slugError) return;
    setSaving(true);
    setError(null);
    try {
      const next = await kitsApi.update(kit.id, {
        ...(changed.name !== undefined ? { name: changed.name } : {}),
        ...(changed.slug !== undefined && changed.slug ? { slug: changed.slug } : {}),
        ...(changed.description !== undefined ? { descriptionMd: changed.description.trim() || null } : {}),
        ...(changed.visibility !== undefined ? { visibility: changed.visibility } : {}),
      });
      storeKit(queryClient, next);
      resetTo(valuesOf(next));
      notify.success(m.kits_details_saved());
    } catch (failure) {
      setError(failureDetail(failure));
    } finally {
      setSaving(false);
    }
  };

  const onFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = '';
    if (!file) return;
    setCoverBusy(0);
    try {
      const uploadId = await uploadCover(file, (ratio) => setCoverBusy(ratio));
      const next = await kitsApi.update(kit.id, { coverUploadId: uploadId });
      storeKit(queryClient, next);
      notify.success(m.kits_cover_saved());
    } catch (failure) {
      notify.error(m.kits_cover_failed(), { description: coverError(failure) });
    } finally {
      setCoverBusy(null);
    }
  };

  const removeCover = async () => {
    setCoverBusy(1);
    try {
      const next = await kitsApi.update(kit.id, { coverUploadId: null });
      storeKit(queryClient, next);
      notify.success(m.kits_cover_removed());
    } catch (failure) {
      notify.error(m.kits_cover_failed(), { description: failureDetail(failure) });
    } finally {
      setCoverBusy(null);
    }
  };

  return (
    <section
      aria-labelledby="kit-details-title"
      className="grid gap-5 rounded-xl border border-border bg-surface p-4 md:p-5"
    >
      <h2 id="kit-details-title" className="text-lg font-semibold text-fg">
        {m.kits_details_title()}
      </h2>

      <fieldset className="grid gap-3">
        <legend className="mb-3 text-sm font-medium text-fg">{m.kits_cover_label()}</legend>
        <div className="flex flex-wrap items-center gap-4">
          <MiniKnolling kit={kit} className="h-24 w-40 shrink-0" />
          <div className="grid gap-2">
            <p className="text-sm text-fg-muted">{kit.cover ? m.kits_cover_custom() : m.kits_cover_auto()}</p>
            <div className="flex flex-wrap gap-2">
              <input
                ref={fileInput}
                type="file"
                accept={COVER_LIMITS.contentTypes.join(',')}
                className="sr-only"
                tabIndex={-1}
                aria-hidden="true"
                onChange={(event) => void onFile(event)}
              />
              <Button
                variant="secondary"
                size="sm"
                icon={<Icon icon={ImagePlus} size={16} />}
                loading={coverBusy !== null}
                onClick={() => fileInput.current?.click()}
              >
                {kit.cover ? m.kits_cover_replace() : m.kits_cover_upload()}
              </Button>
              {kit.cover ? (
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<Icon icon={Trash2} size={16} />}
                  disabled={coverBusy !== null}
                  onClick={() => void removeCover()}
                >
                  {m.kits_cover_remove()}
                </Button>
              ) : null}
            </div>
            {coverBusy !== null && coverBusy > 0 && coverBusy < 1 ? (
              <p className="text-xs text-fg-muted" aria-live="polite">
                {m.kits_cover_progress({ percent: Math.round(coverBusy * 100) })}
              </p>
            ) : null}
            <p className="text-xs text-fg-subtle">
              {m.kits_cover_hint({ max: Math.round(COVER_LIMITS.maxBytes / (1024 * 1024)) })}
            </p>
          </div>
        </div>
      </fieldset>

      <form id={formId} onSubmit={(event) => void submit(event)} className="grid gap-4" noValidate>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label={m.kits_field_name()} error={nameError}>
            <Input
              value={values.name}
              maxLength={KIT_LIMITS.nameMax}
              onChange={(event) => set('name', event.currentTarget.value)}
              autoComplete="off"
              required
            />
          </Field>
          <Field label={m.kits_field_slug()} description={m.kits_field_slug_hint()} error={slugError}>
            <Input
              value={values.slug}
              maxLength={80}
              onChange={(event) => set('slug', event.currentTarget.value.toLowerCase())}
              autoComplete="off"
              spellCheck={false}
              className="font-mono"
            />
          </Field>
        </div>
        <Field label={m.kits_field_description()} optional description={m.kits_field_description_hint()}>
          <Textarea
            value={values.description}
            maxLength={KIT_LIMITS.descriptionMax}
            minRows={4}
            maxRows={16}
            onChange={(event) => set('description', event.currentTarget.value)}
          />
        </Field>
        <RadioCardGroup<KitVisibility>
          legend={m.kits_field_visibility()}
          value={values.visibility}
          onValueChange={(value) => set('visibility', value)}
          columns={3}
          options={KIT_VISIBILITIES.map((value) => ({
            value,
            title: visibilityLabel(value),
            description: visibilityHint(value),
            icon: <Icon icon={VISIBILITY_ICONS[value]} size={18} />,
          }))}
        />
        {error ? (
          <p role="alert" className="text-sm text-danger">
            {error}
          </p>
        ) : null}
        <div className="flex flex-wrap items-center justify-end gap-2">
          {dirty ? (
            <Button variant="ghost" onClick={() => setValues(baseline)} disabled={saving}>
              {m.kits_details_discard()}
            </Button>
          ) : null}
          <Button type="submit" loading={saving} disabled={!dirty || Boolean(nameError) || Boolean(slugError)}>
            {m.kits_details_save()}
          </Button>
        </div>
      </form>
    </section>
  );
}
