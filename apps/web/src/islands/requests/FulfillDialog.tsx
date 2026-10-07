/**
 * «Link my mod»: lists the signed-in creator's published mods and links the chosen one to the
 * request (`PUT /requests/:id/fulfill`), which becomes `fulfilled` and points at the mod.
 */
import { Button } from '@sotf/ui/button';
import { type FormEvent, useEffect, useId, useState } from 'react';
import { api, type Failure, get } from '../comments/lib/api.ts';
import { t } from '../comments/lib/messages.ts';
import { FailureNote, Modal, notify } from '../comments/lib/ui.tsx';
import type { RequestDTO } from './types.ts';

interface ModChoice {
  id: number;
  name: string;
}

export interface FulfillDialogProps {
  open: boolean;
  handle: string;
  requestId: number;
  onClose: () => void;
  onDone: () => void;
}

export function FulfillDialog({ open, handle, requestId, onClose, onDone }: FulfillDialogProps) {
  const [mods, setMods] = useState<ModChoice[] | null>(null);
  const [modId, setModId] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState<Failure | null>(null);
  const selectId = useId();

  useEffect(() => {
    if (!open) return;
    setFailure(null);
    const controller = new AbortController();
    void get<{ items: ModChoice[] }>(
      `/api/v2/users/${encodeURIComponent(handle)}/mods?pageSize=48&sort=downloads`,
      controller.signal,
    ).then((result) => {
      if (controller.signal.aborted) return;
      if (!result.ok) {
        setFailure(result);
        setMods([]);
        return;
      }
      const items = result.data.items.map(({ id, name }) => ({ id, name }));
      setMods(items);
      setModId(items[0]?.id ?? null);
    });
    return () => controller.abort();
  }, [open, handle]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (busy || modId === null) return;
    setBusy(true);
    setFailure(null);
    const result = await api<RequestDTO>('PUT', `/api/v2/requests/${requestId}/fulfill`, { modId });
    setBusy(false);
    if (!result.ok) {
      setFailure(result);
      return;
    }
    notify(t('requests_fulfill_done'));
    onDone();
  };

  return (
    <Modal open={open} onClose={onClose} title={t('requests_fulfill_title')} description={t('requests_fulfill_help')}>
      {mods !== null && mods.length === 0 && !failure ? (
        <div className="grid gap-4">
          <p className="text-sm text-fg-muted">{t('requests_fulfill_none')}</p>
          <Button variant="secondary" onClick={onClose} className="justify-self-end">
            {t('social_action_close')}
          </Button>
        </div>
      ) : (
        <form className="grid gap-4" onSubmit={submit}>
          <div className="grid gap-1.5">
            <label htmlFor={selectId} className="text-sm font-semibold text-fg">
              {t('requests_fulfill_label')}
            </label>
            <select
              id={selectId}
              value={modId ?? ''}
              disabled={mods === null || busy}
              onChange={(event) => setModId(Number(event.target.value) || null)}
              className="h-11 rounded-md border border-border-strong bg-sunken shadow-[inset_0_1px_2px_rgb(0_0_0/0.18)] transition-[border-color,box-shadow] duration-(--dur-fast) hover:border-fg-subtle focus-visible:border-focus focus-visible:shadow-[0_0_0_3px_var(--focus-halo)] focus-visible:outline-none px-3 text-base text-fg md:h-10 md:text-sm"
            >
              {(mods ?? []).map((mod) => (
                <option key={mod.id} value={mod.id}>
                  {mod.name}
                </option>
              ))}
            </select>
          </div>
          {failure ? <FailureNote failure={failure} /> : null}
          <div className="flex flex-wrap justify-end gap-2">
            <Button type="button" variant="ghost" onClick={onClose} disabled={busy}>
              {t('social_action_cancel')}
            </Button>
            <Button type="submit" variant="primary" loading={busy} disabled={modId === null}>
              {t('requests_fulfill_submit')}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
