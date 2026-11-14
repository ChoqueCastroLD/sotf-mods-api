/**
 * «Compatibility» tab of the mod editor (PLAN §7.5, §7.10): where the mod runs (platform,
 * multiplayer role, dedicated server, «can it be removed without breaking the save?»), and the game
 * builds the creator tested per version.
 */
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Ban, Search, Trash2 } from 'lucide-react';
import { useDeferredValue, useEffect, useId, useMemo, useRef, useState } from 'react';
import { notify } from '../../../lib/notify.ts';
import { GameBuildPicker } from '../../upload/components/GameBuildPicker.tsx';
import { WhereFields } from '../../upload/components/WhereFields.tsx';
import { modSearchQuery } from '../../upload/lib/queries.ts';
import { FieldGroup } from '../../upload/steps/StepHeader.tsx';
import type { DedicatedServer, MultiplayerRole, Platform, SafeToRemove } from '../../upload/types.ts';
import { basecampApi, basecampKeys, type ListingPatch, type StudioMod, storeStudioMod, storeVersion } from '../api.ts';
import { bt } from '../i18n.ts';
import { reportFailure } from '../shared.tsx';
import { SaveBar } from './ListingTab.tsx';

interface WhereForm {
  platform: Platform | null;
  multiplayerRole: MultiplayerRole | null;
  dedicatedServer: DedicatedServer | null;
  safeToRemove: SafeToRemove | null;
}

function whereOf(studio: StudioMod): WhereForm {
  return {
    platform: studio.mod.platform,
    multiplayerRole: studio.mod.multiplayerRole,
    dedicatedServer: studio.mod.dedicatedServer,
    safeToRemove: studio.mod.safeToRemove,
  };
}

function patchOf(base: WhereForm, form: WhereForm): ListingPatch {
  const patch: ListingPatch = {};
  if (form.platform !== base.platform) patch.platform = form.platform;
  if (form.multiplayerRole !== base.multiplayerRole) patch.multiplayerRole = form.multiplayerRole;
  if (form.dedicatedServer !== base.dedicatedServer) patch.dedicatedServer = form.dedicatedServer;
  if (form.safeToRemove !== base.safeToRemove) patch.safeToRemove = form.safeToRemove;
  return patch;
}

const sameForm = (a: WhereForm, b: WhereForm) => JSON.stringify(a) === JSON.stringify(b);

function TestedBuilds({ studio }: { studio: StudioMod }) {
  const queryClient = useQueryClient();
  const versions = studio.versions.filter((version) => version.status === 'active' || version.status === 'pending');
  const [versionId, setVersionId] = useState<number | null>(versions[0]?.id ?? null);
  const version = versions.find((entry) => entry.id === versionId) ?? versions[0] ?? null;
  const saved = useMemo(() => version?.testedGameBuilds.map((build) => build.id) ?? [], [version]);
  const [ids, setIds] = useState<number[]>(saved);
  const [busy, setBusy] = useState(false);
  useEffect(() => setIds(saved), [saved]);

  if (!version) return <p className="text-sm text-fg-muted">{bt('basecamp_compat_no_versions')}</p>;
  const dirty = JSON.stringify([...ids].sort()) !== JSON.stringify([...saved].sort());

  const save = async () => {
    setBusy(true);
    try {
      const updated = await basecampApi.setTestedBuilds(studio.mod.id, version.id, ids);
      storeVersion(queryClient, studio.mod.id, updated);
      void queryClient.invalidateQueries({ queryKey: basecampKeys.compat(studio.mod.id) });
      notify.success(bt('basecamp_compat_tested_saved', { version: version.version }));
    } catch (error) {
      reportFailure(error, bt('basecamp_compat_tested_failed'));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid gap-4">
      {versions.length > 1 ? (
        <Select
          label={bt('basecamp_compat_version')}
          options={versions.map((entry) => ({ value: String(entry.id), label: `v${entry.version}` }))}
          value={String(version.id)}
          onValueChange={(value) => setVersionId(value ? Number(value) : null)}
          className="sm:max-w-xs"
        />
      ) : null}
      <GameBuildPicker value={ids} onChange={setIds} />
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="sm" disabled={!dirty || busy} onClick={() => setIds(saved)}>
          {bt('basecamp_save_discard')}
        </Button>
        <Button size="sm" loading={busy} disabled={!dirty} onClick={() => void save()}>
          {bt('basecamp_compat_tested_save')}
        </Button>
      </div>
    </div>
  );
}

interface Incompatible {
  manifestId: string;
  name: string;
}

const MAX_INCOMPATIBILITIES = 50;

function savedIncompatibilities(studio: StudioMod): Incompatible[] {
  return studio.mod.dependencies
    .filter((dependency) => dependency.kind === 'conflicts')
    .map((dependency) => ({ manifestId: dependency.manifestId, name: dependency.mod?.name ?? dependency.manifestId }));
}

/**
 * «Incompatible mods»: the mods this one does not work with (2026-11, read by SotF Mods Manager).
 * Stored on the latest version; the mod itself and its dependencies cannot be picked.
 */
function Incompatibilities({ studio }: { studio: StudioMod }) {
  const queryClient = useQueryClient();
  const saved = useMemo(() => savedIncompatibilities(studio), [studio]);
  const [list, setList] = useState<Incompatible[]>(saved);
  const [query, setQuery] = useState('');
  const [busy, setBusy] = useState(false);
  const deferred = useDeferredValue(query.trim());
  const search = useQuery(modSearchQuery(deferred));
  const listId = useId();
  useEffect(() => setList(saved), [saved]);

  const blocked = new Set(
    [
      studio.mod.manifestId,
      ...studio.mod.dependencies
        .filter((dependency) => dependency.kind !== 'conflicts')
        .map((dependency) => dependency.manifestId),
    ].map((id) => id.toLowerCase()),
  );
  const chosen = new Set(list.map((entry) => entry.manifestId.toLowerCase()));
  const dirty =
    JSON.stringify(list.map((entry) => entry.manifestId)) !== JSON.stringify(saved.map((entry) => entry.manifestId));
  const full = list.length >= MAX_INCOMPATIBILITIES;
  const results = (search.data?.items ?? []).filter((mod) => mod.kind !== 'build');

  const save = async () => {
    setBusy(true);
    try {
      const updated = await basecampApi.updateMod(studio.mod.id, {
        incompatibilities: list.map((entry) => entry.manifestId),
      });
      storeStudioMod(queryClient, updated);
      notify.success(bt('basecamp_compat_incompatible_saved'));
    } catch (error) {
      reportFailure(error, bt('basecamp_compat_incompatible_failed'));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid gap-4">
      <ul className="flex flex-col gap-2" aria-label={bt('basecamp_compat_incompatible')}>
        {list.map((entry) => (
          <li
            key={entry.manifestId}
            className="flex items-center justify-between gap-2 rounded-md border border-border bg-raised px-3 py-2"
          >
            <span className="flex min-w-0 items-center gap-2">
              <Icon icon={Ban} size={14} className="shrink-0 text-danger" />
              <span className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-medium text-fg">{entry.name}</span>
                <span className="readout truncate text-fg-subtle">{entry.manifestId}</span>
              </span>
            </span>
            <Button
              variant="icon"
              size="sm"
              aria-label={bt('basecamp_compat_incompatible_remove', { name: entry.name })}
              onClick={() => setList(list.filter((item) => item.manifestId !== entry.manifestId))}
            >
              <Icon icon={Trash2} size={14} />
            </Button>
          </li>
        ))}
        {list.length === 0 ? (
          <li className="text-sm text-fg-muted">{bt('basecamp_compat_incompatible_none')}</li>
        ) : null}
      </ul>

      <div className="flex flex-col gap-2">
        <Input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
          placeholder={bt('basecamp_compat_incompatible_search')}
          aria-label={bt('basecamp_compat_incompatible_search')}
          aria-controls={listId}
          icon={<Icon icon={Search} size={14} />}
          disabled={full}
        />
        <div id={listId} aria-live="polite">
          {deferred.length >= 2 && search.isSuccess && results.length === 0 ? (
            <p className="text-sm text-fg-muted">{bt('basecamp_compat_incompatible_no_results')}</p>
          ) : null}
          {results.length > 0 && deferred.length >= 2 ? (
            <ul className="flex flex-col divide-y divide-border rounded-md border border-border">
              {results.map((mod) => {
                const key = mod.manifestId.toLowerCase();
                const unavailable = blocked.has(key) || chosen.has(key) || full;
                return (
                  <li key={mod.id} className="flex items-center justify-between gap-2 px-3 py-2">
                    <span className="flex min-w-0 flex-col">
                      <span className="truncate text-sm font-medium text-fg">{mod.name}</span>
                      <span className="readout truncate text-fg-subtle">
                        {mod.manifestId} · @{mod.userHandle}
                      </span>
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={unavailable}
                      title={blocked.has(key) ? bt('basecamp_compat_incompatible_blocked') : undefined}
                      onClick={() => {
                        setList([...list, { manifestId: mod.manifestId, name: mod.name }]);
                        setQuery('');
                      }}
                      aria-label={bt('basecamp_compat_incompatible_add', { name: mod.name })}
                    >
                      {bt('basecamp_compat_incompatible_add_short')}
                    </Button>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="sm" disabled={!dirty || busy} onClick={() => setList(saved)}>
          {bt('basecamp_save_discard')}
        </Button>
        <Button size="sm" loading={busy} disabled={!dirty} onClick={() => void save()}>
          {bt('basecamp_compat_incompatible_save')}
        </Button>
      </div>
    </div>
  );
}

export function CompatTab({ studio, onDirty }: { studio: StudioMod; onDirty: (dirty: boolean) => void }) {
  const queryClient = useQueryClient();
  const base = useMemo(() => whereOf(studio), [studio]);
  const [form, setForm] = useState<WhereForm>(base);
  const [baseline, setBaseline] = useState<WhereForm>(base);
  const baselineRef = useRef(base);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const current = baselineRef.current;
    if (sameForm(current, base)) return;
    baselineRef.current = base;
    setBaseline(base);
    setForm((draft) => (sameForm(draft, current) ? base : draft));
  }, [base]);

  const patch = patchOf(baseline, form);
  const dirty = Object.keys(patch).length > 0;
  useEffect(() => onDirty(dirty), [dirty, onDirty]);

  const save = async () => {
    if (!dirty) return;
    setSaving(true);
    try {
      const updated = await basecampApi.updateMod(studio.mod.id, patch);
      const next = whereOf(updated);
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

  return (
    <div className="flex flex-col gap-5">
      <FieldGroup id="basecamp-compat-where" title={bt('basecamp_compat_where')}>
        <WhereFields platformOptional value={form} onChange={setForm} />
        <SaveBar
          dirty={dirty}
          saving={saving}
          invalid={false}
          onSave={() => void save()}
          onReset={() => setForm(baseline)}
        />
      </FieldGroup>

      <FieldGroup
        id="basecamp-compat-tested"
        title={bt('basecamp_compat_tested')}
        description={bt('basecamp_compat_tested_hint')}
      >
        <TestedBuilds studio={studio} />
      </FieldGroup>

      {studio.mod.kind === 'build' ? null : (
        <FieldGroup
          id="basecamp-compat-incompatible"
          title={bt('basecamp_compat_incompatible')}
          description={bt('basecamp_compat_incompatible_hint')}
        >
          <Incompatibilities studio={studio} />
        </FieldGroup>
      )}
    </div>
  );
}
