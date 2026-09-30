/**
 * «Compatibility» tab of the mod editor (PLAN §7.5, §7.10): where the mod runs (platform,
 * multiplayer role, dedicated server, «can it be removed without breaking the save?»), the game
 * builds the creator tested per version, and what players report in the field for each build.
 */
import { Button } from '@sotf/ui/button';
import { RadioCardGroup } from '@sotf/ui/radio-card';
import { Select } from '@sotf/ui/select';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo, useRef, useState } from 'react';
import { notify } from '../../../lib/notify.ts';
import { DEDICATED_LABELS, MULTIPLAYER_LABELS, PLATFORM_LABELS, SAFE_TO_REMOVE_LABELS } from '../../upload/labels.ts';
import { GameBuildPicker } from '../../upload/steps/CompatStep.tsx';
import { FieldGroup } from '../../upload/steps/StepHeader.tsx';
import {
  DEDICATED_SERVER,
  type DedicatedServer,
  MULTIPLAYER_ROLES,
  type MultiplayerRole,
  PLATFORMS,
  type Platform,
  SAFE_TO_REMOVE,
  type SafeToRemove,
} from '../../upload/types.ts';
import { basecampApi, basecampKeys, type ListingPatch, type StudioMod, storeStudioMod, storeVersion } from '../api.ts';
import { CompatReports } from '../CompatReports.tsx';
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
        <RadioCardGroup<Platform>
          legend={bt('basecamp_compat_platform')}
          columns={3}
          optional
          value={form.platform}
          onValueChange={(platform) => setForm((current) => ({ ...current, platform }))}
          options={PLATFORMS.map((value) => ({
            value,
            title: PLATFORM_LABELS[value].title(),
            description: PLATFORM_LABELS[value].description(),
          }))}
        />
        <RadioCardGroup<MultiplayerRole>
          legend={bt('basecamp_compat_multiplayer')}
          columns={2}
          optional
          value={form.multiplayerRole}
          onValueChange={(multiplayerRole) => setForm((current) => ({ ...current, multiplayerRole }))}
          options={MULTIPLAYER_ROLES.map((value) => ({
            value,
            title: MULTIPLAYER_LABELS[value].title(),
            description: MULTIPLAYER_LABELS[value].description(),
          }))}
        />
        <Select<DedicatedServer>
          label={bt('basecamp_compat_dedicated')}
          optional
          options={DEDICATED_SERVER.map((value) => ({ value, label: DEDICATED_LABELS[value]() }))}
          value={form.dedicatedServer}
          placeholder={bt('basecamp_select_placeholder')}
          onValueChange={(dedicatedServer) =>
            setForm((current) => ({ ...current, dedicatedServer: dedicatedServer ?? null }))
          }
          className="sm:max-w-sm"
        />
        <RadioCardGroup<SafeToRemove>
          legend={bt('basecamp_compat_safe_remove')}
          columns={3}
          optional
          value={form.safeToRemove}
          onValueChange={(safeToRemove) => setForm((current) => ({ ...current, safeToRemove }))}
          options={SAFE_TO_REMOVE.map((value) => ({
            value,
            title: SAFE_TO_REMOVE_LABELS[value].title(),
            description: SAFE_TO_REMOVE_LABELS[value].description(),
          }))}
        />
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

      <FieldGroup
        id="basecamp-compat-field"
        title={bt('basecamp_compat_field')}
        description={bt('basecamp_compat_field_hint')}
      >
        <CompatReports modId={studio.mod.id} />
      </FieldGroup>
    </div>
  );
}
