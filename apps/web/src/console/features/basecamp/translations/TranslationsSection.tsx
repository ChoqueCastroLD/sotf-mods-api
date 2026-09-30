/**
 * «Translations» section of the listing editor (T1-25): the name, the short description and the
 * full description in the 12 non-English languages. The worker translates them automatically on
 * publish/edit; here the author reads every version, replaces any field with their own text (never
 * overwritten afterwards) or goes back to the automatic one. Each language saves on its own
 * (`PUT/DELETE /studio/mods/:id/translations/:locale`, only the fields that changed are sent).
 */
import {
  type StudioTranslationItemDTO,
  type StudioTranslationsDTO,
  TRANSLATION_FIELDS,
  TRANSLATION_LIMITS,
  type TranslationField,
} from '@sotf/contracts/translations';
import { Button } from '@sotf/ui/button';
import { Input } from '@sotf/ui/input';
import { Skeleton } from '@sotf/ui/skeleton';
import { Textarea } from '@sotf/ui/textarea';
import { type QueryClient, queryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import type { z } from 'zod';
import { api } from '../../../lib/api.ts';
import { activeLocale } from '../../../lib/messages.ts';
import { notify } from '../../../lib/notify.ts';
import { FieldGroup } from '../../upload/steps/StepHeader.tsx';
import { basecampKeys } from '../api.ts';
import { languageName } from '../labels.ts';
import { reportFailure } from '../shared.tsx';
import { tt, useTranslationsMessages } from './i18n.ts';

type Translations = z.output<typeof StudioTranslationsDTO>;
type Item = z.output<typeof StudioTranslationItemDTO>;

const MAX: Record<TranslationField, number> = {
  name: TRANSLATION_LIMITS.nameMax,
  shortDescription: TRANSLATION_LIMITS.shortDescriptionMax,
  description: TRANSLATION_LIMITS.descriptionMax,
};

const LABEL = {
  name: 'translations_field_name',
  shortDescription: 'translations_field_short',
  description: 'translations_field_description',
} as const;

type Draft = Record<TranslationField, string>;

const translationsKey = (modId: number) => [...basecampKeys.mod(modId), 'translations'] as const;

function translationsQuery(modId: number) {
  return queryOptions({
    queryKey: translationsKey(modId),
    queryFn: ({ signal }): Promise<Translations> => api.translations.studioList({ params: { id: modId } }, { signal }),
    staleTime: 30_000,
  });
}

function storeItem(client: QueryClient, modId: number, item: Item): void {
  client.setQueryData<Translations>(translationsKey(modId), (current) =>
    current ? { ...current, items: current.items.map((i) => (i.locale === item.locale ? item : i)) } : current,
  );
}

export function TranslationsSection({ modId }: { modId: number }) {
  useTranslationsMessages();
  const query = useQuery(translationsQuery(modId));
  const data = query.data;

  return (
    <FieldGroup
      id="basecamp-listing-translations"
      title={tt('translations_title')}
      description={data ? (data.enabled ? tt('translations_intro_auto') : tt('translations_intro_manual')) : undefined}
    >
      {query.isPending ? (
        <Skeleton className="h-24 w-full" />
      ) : query.isError || !data ? (
        <p className="text-sm text-danger" role="alert">
          {tt('translations_load_failed')}
        </p>
      ) : (
        <>
          <div className="flex flex-col gap-2 rounded-md border border-border bg-raised p-3">
            <span className="text-xs font-semibold text-fg-muted">
              {tt('translations_original_heading')} · {languageName(data.sourceLocale, activeLocale())}
            </span>
            <p className="text-sm font-semibold text-fg">{data.originals.name}</p>
            {data.originals.shortDescription ? (
              <p className="text-sm text-fg">{data.originals.shortDescription}</p>
            ) : null}
            {data.originals.description ? (
              <p className="line-clamp-3 whitespace-pre-line text-sm text-fg-muted">{data.originals.description}</p>
            ) : null}
          </div>
          <ul className="flex flex-col divide-y divide-border">
            {data.items.map((item) => (
              <TranslationRow key={item.locale} modId={modId} item={item} automatic={data.enabled} />
            ))}
          </ul>
        </>
      )}
    </FieldGroup>
  );
}

const draftOf = (item: Item): Draft => ({
  name: item.name.text ?? '',
  shortDescription: item.shortDescription.text ?? '',
  description: item.description.text ?? '',
});

function TranslationRow({ modId, item, automatic }: { modId: number; item: Item; automatic: boolean }) {
  const client = useQueryClient();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<Draft>(() => draftOf(item));
  const [busy, setBusy] = useState(false);
  const language = languageName(item.locale, activeLocale());
  const anyText = TRANSLATION_FIELDS.some((f) => item[f].text !== null);
  const anyStale = TRANSLATION_FIELDS.some((f) => item[f].stale);

  const begin = () => {
    setDraft(draftOf(item));
    setEditing(true);
  };

  /** Saves the fields the author changed; an emptied one goes back to the automatic translation. */
  const save = async () => {
    const current = draftOf(item);
    const body: Partial<Record<TranslationField, string | null>> = {};
    for (const f of TRANSLATION_FIELDS) {
      const next = draft[f].trim();
      if (next === current[f].trim()) continue;
      body[f] = next === '' ? null : next;
    }
    if (Object.keys(body).length === 0) {
      setEditing(false);
      return;
    }
    setBusy(true);
    try {
      const saved = await api.translations.studioPut({ params: { id: modId, locale: item.locale }, body });
      storeItem(client, modId, saved);
      setEditing(false);
      notify.success(tt('translations_saved'));
    } catch (error) {
      reportFailure(error, tt('translations_failed'));
    } finally {
      setBusy(false);
    }
  };

  const revert = async () => {
    setBusy(true);
    try {
      const reverted = await api.translations.studioRevert({ params: { id: modId, locale: item.locale } });
      storeItem(client, modId, reverted);
      setEditing(false);
      notify.success(automatic ? tt('translations_reverted') : tt('translations_removed'));
    } catch (error) {
      reportFailure(error, tt('translations_failed'));
    } finally {
      setBusy(false);
    }
  };

  const base = `translation-${item.locale}`;
  return (
    <li className="flex flex-col gap-2 py-3 first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="text-sm font-semibold text-fg">{language}</span>
        {anyStale ? <span className="text-xs text-warning">{tt('translations_stale')}</span> : null}
        <span className="ms-auto flex gap-2">
          {editing ? null : (
            <Button type="button" variant="ghost" size="sm" disabled={busy} onClick={begin}>
              {anyText ? tt('translations_edit') : tt('translations_write')}
            </Button>
          )}
          {!editing && anyText ? (
            <Button type="button" variant="ghost" size="sm" loading={busy} onClick={revert}>
              {automatic ? tt('translations_revert') : tt('translations_remove')}
            </Button>
          ) : null}
        </span>
      </div>
      {editing ? (
        <div className="flex flex-col gap-3">
          {TRANSLATION_FIELDS.map((field) => {
            const id = `${base}-${field}`;
            const change = (value: string) => setDraft((d) => ({ ...d, [field]: value }));
            return (
              <div key={field} className="flex flex-col gap-1">
                <label htmlFor={id} className="text-xs font-semibold text-fg-muted">
                  {tt(LABEL[field], { language })}
                </label>
                {field === 'name' ? (
                  <Input
                    id={id}
                    lang={item.locale}
                    value={draft.name}
                    maxLength={MAX.name}
                    onChange={(event) => change(event.currentTarget.value.replace(/\s+/g, ' '))}
                  />
                ) : (
                  <Textarea
                    id={id}
                    lang={item.locale}
                    value={draft[field]}
                    maxLength={MAX[field]}
                    minRows={field === 'description' ? 6 : 2}
                    maxRows={field === 'description' ? 16 : 5}
                    onChange={(event) =>
                      change(
                        field === 'shortDescription'
                          ? event.currentTarget.value.replace(/\n+/g, ' ')
                          : event.currentTarget.value,
                      )
                    }
                  />
                )}
                <FieldHint item={item} field={field} automatic={automatic} />
              </div>
            );
          })}
          <p className="text-xs text-fg-subtle">{tt('translations_empty_hint')}</p>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="ghost" disabled={busy} onClick={() => setEditing(false)}>
              {tt('translations_cancel')}
            </Button>
            <Button type="button" loading={busy} onClick={save}>
              {tt('translations_save')}
            </Button>
          </div>
        </div>
      ) : anyText ? (
        <dl className="flex flex-col gap-1.5">
          {TRANSLATION_FIELDS.map((field) => {
            const cell = item[field];
            if (cell.text === null) return null;
            return (
              <div key={field} className="flex flex-col gap-0.5">
                <dt className="flex items-center gap-2 text-xs text-fg-subtle">
                  {tt(LABEL[field], { language })}
                  <span className="readout rounded-full border border-border px-1.5 text-fg-muted">
                    {cell.source === 'author' ? tt('translations_source_author') : tt('translations_source_machine')}
                  </span>
                </dt>
                <dd
                  lang={item.locale}
                  className={
                    field === 'description'
                      ? 'line-clamp-3 whitespace-pre-line text-sm text-fg-muted'
                      : 'text-sm text-fg-muted'
                  }
                >
                  {cell.text}
                </dd>
              </div>
            );
          })}
        </dl>
      ) : (
        <p className="text-sm text-fg-subtle">
          {automatic ? tt('translations_status_pending') : tt('translations_status_none')}
        </p>
      )}
    </li>
  );
}

/** Whose text a field holds right now, under its input. */
function FieldHint({ item, field, automatic }: { item: Item; field: TranslationField; automatic: boolean }) {
  const cell = item[field];
  if (cell.text === null)
    return automatic ? <span className="text-xs text-fg-subtle">{tt('translations_status_pending')}</span> : null;
  return (
    <span className="text-xs text-fg-subtle">
      {cell.source === 'author' ? tt('translations_source_author') : tt('translations_source_machine')}
      {cell.stale ? ` · ${tt('translations_stale')}` : ''}
    </span>
  );
}
