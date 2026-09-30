/**
 * «Translations» section of the listing editor (T1-25): the short description in the 12 non-English
 * languages. The worker translates it automatically on publish/edit; here the author reads every
 * version, replaces any of them with their own text (never overwritten afterwards) or goes back to
 * the automatic one. Each row saves on its own (`PUT/DELETE /studio/mods/:id/translations/:locale`).
 */
import type { StudioTranslationItemDTO, StudioTranslationsDTO } from '@sotf/contracts/translations';
import { Button } from '@sotf/ui/button';
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

/** `shortDescriptionMax` of the contracts (kept Zod-free). */
const MAX = 200;

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
          <div className="flex flex-col gap-1 rounded-md border border-border bg-raised p-3">
            <span className="text-xs font-semibold text-fg-muted">
              {tt('translations_original_heading')} · {languageName(data.sourceLocale, activeLocale())}
            </span>
            <p className="text-sm text-fg">{data.original}</p>
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

function TranslationRow({ modId, item, automatic }: { modId: number; item: Item; automatic: boolean }) {
  const client = useQueryClient();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const language = languageName(item.locale, activeLocale());

  const begin = () => {
    setDraft(item.shortDescription ?? '');
    setEditing(true);
  };

  const save = async () => {
    setBusy(true);
    try {
      const saved = await api.translations.studioPut({
        params: { id: modId, locale: item.locale },
        body: { shortDescription: draft.trim() },
      });
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

  const fieldId = `translation-${item.locale}`;
  return (
    <li className="flex flex-col gap-2 py-3 first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="text-sm font-semibold text-fg">{language}</span>
        {item.source ? (
          <span className="readout rounded-full border border-border px-2 text-xs text-fg-muted">
            {item.source === 'author' ? tt('translations_source_author') : tt('translations_source_machine')}
          </span>
        ) : null}
        {item.stale ? <span className="text-xs text-warning">{tt('translations_stale')}</span> : null}
        <span className="ms-auto flex gap-2">
          {editing ? null : (
            <Button type="button" variant="ghost" size="sm" disabled={busy} onClick={begin}>
              {item.shortDescription === null ? tt('translations_write') : tt('translations_edit')}
            </Button>
          )}
          {!editing && item.shortDescription !== null ? (
            <Button type="button" variant="ghost" size="sm" loading={busy} onClick={revert}>
              {automatic ? tt('translations_revert') : tt('translations_remove')}
            </Button>
          ) : null}
        </span>
      </div>
      {editing ? (
        <div className="flex flex-col gap-2">
          <label htmlFor={fieldId} className="sr-only">
            {tt('translations_field_label', { language })}
          </label>
          <Textarea
            id={fieldId}
            lang={item.locale}
            value={draft}
            maxLength={MAX}
            minRows={2}
            maxRows={5}
            onChange={(event) => setDraft(event.currentTarget.value.replace(/\n+/g, ' '))}
          />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="ghost" disabled={busy} onClick={() => setEditing(false)}>
              {tt('translations_cancel')}
            </Button>
            <Button type="button" loading={busy} disabled={!draft.trim()} onClick={save}>
              {tt('translations_save')}
            </Button>
          </div>
        </div>
      ) : item.shortDescription !== null ? (
        <p className="text-sm text-fg-muted" lang={item.locale}>
          {item.shortDescription}
        </p>
      ) : (
        <p className="text-sm text-fg-subtle">
          {automatic ? tt('translations_status_pending') : tt('translations_status_none')}
        </p>
      )}
    </li>
  );
}
