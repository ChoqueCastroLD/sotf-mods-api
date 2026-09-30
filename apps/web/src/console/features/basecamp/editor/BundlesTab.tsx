/**
 * «Bundles» tab of the mod editor (T1-04): attach one of my kits to the mod as an official bundle
 * (one zip with every file the kit resolves to), see the build status, rebuild it or remove it.
 * Pending bundles are polled until the worker has built them.
 */
import { BUNDLE_LIMITS, type ModBundleDTO } from '@sotf/contracts/bundles';
import { formatBytes } from '@sotf/i18n';
import { Button } from '@sotf/ui/button';
import { Select } from '@sotf/ui/select';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { api } from '../../../lib/api.ts';
import { activeLocale } from '../../../lib/messages.ts';
import { notify } from '../../../lib/notify.ts';
import { bdt, useBundlesMessages } from '../../bundles/i18n.ts';
import { myKitsQuery } from '../../kits/api.ts';
import type { StudioMod } from '../api.ts';
import { number } from '../format.ts';
import { failureText } from '../shared.tsx';

const bundleKeys = (modId: number) => ['bundles', 'mod', modId] as const;

const STATUS_LABEL = {
  pending: () => bdt('bundles_status_pending'),
  ready: () => bdt('bundles_status_ready'),
  failed: () => bdt('bundles_status_failed'),
} as const;

function BundleRow({ bundle, onChanged }: { bundle: ModBundleDTO; onChanged: () => void }) {
  const rebuild = useMutation({
    mutationFn: () => api.bundles.rebuild({ params: { id: bundle.modId, bundleId: bundle.id } }),
    onSuccess: () => {
      notify.success(bdt('bundles_rebuild_started'));
      onChanged();
    },
    onError: (error) => notify.error(bdt('bundles_failed'), { description: failureText(error) }),
  });
  const remove = useMutation({
    mutationFn: () => api.bundles.remove({ params: { id: bundle.modId, bundleId: bundle.id } }),
    onSuccess: () => {
      notify.success(bdt('bundles_removed'));
      onChanged();
    },
    onError: (error) => notify.error(bdt('bundles_failed'), { description: failureText(error) }),
  });
  return (
    <li className="grid gap-2 rounded-lg border border-border bg-surface p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="grid gap-0.5">
          <p className="font-medium text-fg">{bundle.kit.name}</p>
          <p className="text-xs text-fg-muted">
            {bdt('bundles_meta', {
              files: number(bundle.filesCount),
              size: bundle.bytes === null ? '-' : formatBytes(activeLocale(), bundle.bytes),
              downloads: number(bundle.downloadsCount),
            })}
          </p>
        </div>
        <span className="readout text-fg-muted">{STATUS_LABEL[bundle.status]()}</span>
      </div>
      {bundle.status === 'failed' && bundle.statusReason ? (
        <p className="text-sm text-danger">{bundle.statusReason}</p>
      ) : null}
      {bundle.contents.length > 0 ? (
        <details className="text-sm text-fg-muted">
          <summary className="cursor-pointer">{bdt('bundles_contents')}</summary>
          <ul className="mt-1 grid gap-0.5">
            {bundle.contents.map((item) => (
              <li key={`${item.mod}:${item.version ?? ''}`}>
                {item.mod}
                {item.version ? ` v${item.version}` : ''} ({number(item.files)})
              </li>
            ))}
          </ul>
        </details>
      ) : null}
      <div className="flex flex-wrap justify-end gap-2">
        <Button variant="ghost" size="sm" loading={rebuild.isPending} onClick={() => rebuild.mutate()}>
          {bdt('bundles_rebuild')}
        </Button>
        <Button variant="ghost" size="sm" loading={remove.isPending} onClick={() => remove.mutate()}>
          {bdt('bundles_remove')}
        </Button>
      </div>
    </li>
  );
}

export function BundlesTab({ studio }: { studio: StudioMod }) {
  useBundlesMessages();
  const modId = studio.mod.id;
  const queryClient = useQueryClient();
  const [kitId, setKitId] = useState<string | null>(null);
  const bundles = useQuery({
    queryKey: bundleKeys(modId),
    queryFn: ({ signal }) => api.bundles.manage({ params: { id: modId } }, { signal }),
    refetchInterval: (query) => (query.state.data?.items.some((bundle) => bundle.status === 'pending') ? 5000 : false),
  });
  const kits = useQuery(myKitsQuery);
  const items = bundles.data?.items ?? [];
  const attachedKits = new Set(items.map((bundle) => bundle.kit.id));
  const options = (kits.data ?? [])
    .filter((kit) => kit.visibility !== 'private' && !attachedKits.has(kit.id))
    .map((kit) => ({ value: String(kit.id), label: kit.name }));
  const refresh = () => void queryClient.invalidateQueries({ queryKey: bundleKeys(modId) });
  const attach = useMutation({
    mutationFn: (id: number) => api.bundles.create({ params: { id: modId }, body: { kitId: id } }),
    onSuccess: () => {
      notify.success(bdt('bundles_attached'));
      setKitId(null);
      refresh();
    },
    onError: (error) => notify.error(bdt('bundles_failed'), { description: failureText(error) }),
  });

  return (
    <div className="grid gap-4">
      <p className="text-sm text-fg-muted">
        {bdt('bundles_manage_intro')} {bdt('bundles_limit', { max: BUNDLE_LIMITS.perMod })}
      </p>
      {kits.isSuccess && options.length === 0 && items.length < BUNDLE_LIMITS.perMod ? (
        <p className="text-sm text-fg-muted">{bdt('bundles_no_kits')}</p>
      ) : null}
      {options.length > 0 && items.length < BUNDLE_LIMITS.perMod ? (
        <div className="flex flex-wrap items-end gap-3">
          <Select
            label={bdt('bundles_pick_kit')}
            options={options}
            value={kitId}
            placeholder={bdt('bundles_pick_placeholder')}
            onValueChange={(value) => setKitId(value || null)}
            className="sm:max-w-xs"
          />
          <Button
            size="sm"
            loading={attach.isPending}
            disabled={kitId === null}
            onClick={() => kitId !== null && attach.mutate(Number(kitId))}
          >
            {bdt('bundles_attach')}
          </Button>
        </div>
      ) : null}
      {items.length === 0 && bundles.isSuccess ? (
        <p className="text-sm text-fg-muted">{bdt('bundles_empty')}</p>
      ) : (
        <ul className="grid gap-3">
          {items.map((bundle) => (
            <BundleRow key={bundle.id} bundle={bundle} onChanged={refresh} />
          ))}
        </ul>
      )}
    </div>
  );
}
