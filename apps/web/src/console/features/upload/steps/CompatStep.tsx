/**
 * Step ③ «Compatibility» (PLAN §7.5): game builds the creator tested (multi-select), minimum
 * RedLoader, platform (RadioCards), multiplayer role, dedicated server, «can it be removed without
 * breaking the save?» and dependencies (required, optional, conflicts).
 */
import { Checkbox } from '@sotf/ui/checkbox';
import { Field } from '@sotf/ui/field';
import { Input } from '@sotf/ui/input';
import { RadioCardGroup } from '@sotf/ui/radio-card';
import { Select } from '@sotf/ui/select';
import { Skeleton } from '@sotf/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { DependencyPicker } from '../components/DependencyPicker.tsx';
import { ut } from '../i18n.ts';
import { DEDICATED_LABELS, MULTIPLAYER_LABELS, PLATFORM_LABELS, SAFE_TO_REMOVE_LABELS } from '../labels.ts';
import { gameBuildsQuery } from '../lib/queries.ts';
import { isLoaderVersion } from '../lib/validate.ts';
import {
  DEDICATED_SERVER,
  type DedicatedServer,
  type DraftData,
  MULTIPLAYER_ROLES,
  type MultiplayerRole,
  PLATFORMS,
  type Platform,
  SAFE_TO_REMOVE,
  type SafeToRemove,
  type UpdateData,
} from '../types.ts';
import { FieldGroup, StepHeader } from './StepHeader.tsx';

export interface CompatStepProps {
  data: DraftData;
  update: UpdateData;
  manifestId: string | null;
  manifestDependencies: readonly string[];
  headingId: string;
}

/** Game builds the creator tested (checkboxes, newest first; the current one highlighted). */
export function GameBuildPicker({ value, onChange }: { value: readonly number[]; onChange: (ids: number[]) => void }) {
  const builds = useQuery(gameBuildsQuery);
  if (builds.isPending) return <Skeleton className="h-24 w-full" />;
  if (builds.isError) return <p className="text-sm text-danger">{ut('upload_game_builds_failed')}</p>;
  const selected = new Set(value);
  return (
    <fieldset id="upload-game-builds" tabIndex={-1} className="flex flex-col gap-2 outline-none">
      <legend className="mb-1 text-sm font-medium text-fg">{ut('upload_game_builds_label')}</legend>
      <p className="text-xs text-fg-muted">{ut('upload_game_builds_hint')}</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {builds.data.items.slice(0, 20).map((build) => (
          <Checkbox
            key={build.id}
            label={build.isCurrent ? ut('upload_game_build_current', { label: build.label }) : build.label}
            checked={selected.has(build.id)}
            onCheckedChange={(checked) =>
              onChange(checked ? [...value, build.id] : value.filter((id) => id !== build.id))
            }
          />
        ))}
      </div>
    </fieldset>
  );
}

export function CompatStep({ data, update, manifestId, manifestDependencies, headingId }: CompatStepProps) {
  const [loaderTouched, setLoaderTouched] = useState(false);
  const loaderMin = data.loaderMin ?? '';
  const loaderError =
    loaderTouched && loaderMin && !isLoaderVersion(loaderMin) ? ut('upload_error_loader_version') : null;

  return (
    <div className="flex flex-col gap-5">
      <StepHeader id={headingId} title={ut('upload_compat_title')} description={ut('upload_compat_intro')} />

      <FieldGroup id="upload-group-builds" title={ut('upload_compat_game')}>
        <GameBuildPicker
          value={data.testedGameBuildIds ?? []}
          onChange={(testedGameBuildIds) => update((d) => ({ ...d, testedGameBuildIds }))}
        />
        <Field label={ut('upload_loader_label')} description={ut('upload_loader_hint')} error={loaderError} optional>
          <Input
            value={loaderMin}
            maxLength={40}
            placeholder="0.9.0"
            spellCheck={false}
            onChange={(event) => {
              const next = event.currentTarget.value;
              update((d) => ({ ...d, loaderMin: next.trim() ? next.trim() : null }));
            }}
            onBlur={() => setLoaderTouched(true)}
            className="max-w-40"
          />
        </Field>
      </FieldGroup>

      <FieldGroup id="upload-group-multiplayer" title={ut('upload_compat_where')}>
        <div id="upload-platform" tabIndex={-1} className="outline-none">
          <RadioCardGroup<Platform>
            legend={ut('upload_platform_label')}
            description={ut('upload_platform_hint')}
            columns={3}
            value={data.platform ?? null}
            onValueChange={(platform) => update((d) => ({ ...d, platform }))}
            options={PLATFORMS.map((value) => ({
              value,
              title: PLATFORM_LABELS[value].title(),
              description: PLATFORM_LABELS[value].description(),
            }))}
          />
        </div>
        <RadioCardGroup<MultiplayerRole>
          legend={ut('upload_multiplayer_label')}
          columns={2}
          optional
          value={data.multiplayerRole ?? null}
          onValueChange={(multiplayerRole) => update((d) => ({ ...d, multiplayerRole }))}
          options={MULTIPLAYER_ROLES.map((value) => ({
            value,
            title: MULTIPLAYER_LABELS[value].title(),
            description: MULTIPLAYER_LABELS[value].description(),
          }))}
        />
        <Select<DedicatedServer>
          label={ut('upload_dedicated_label')}
          description={ut('upload_dedicated_hint')}
          optional
          options={DEDICATED_SERVER.map((value) => ({ value, label: DEDICATED_LABELS[value]() }))}
          value={data.dedicatedServer ?? null}
          placeholder={ut('upload_select_placeholder')}
          onValueChange={(dedicatedServer) => update((d) => ({ ...d, dedicatedServer: dedicatedServer ?? null }))}
          className="sm:max-w-sm"
        />
        <RadioCardGroup<SafeToRemove>
          legend={ut('upload_safe_remove_label')}
          columns={3}
          optional
          value={data.safeToRemove ?? null}
          onValueChange={(safeToRemove) => update((d) => ({ ...d, safeToRemove }))}
          options={SAFE_TO_REMOVE.map((value) => ({
            value,
            title: SAFE_TO_REMOVE_LABELS[value].title(),
            description: SAFE_TO_REMOVE_LABELS[value].description(),
          }))}
        />
      </FieldGroup>

      <FieldGroup
        id="upload-group-dependencies"
        title={ut('upload_dependencies_label')}
        description={ut('upload_dependencies_hint')}
      >
        <DependencyPicker
          id="upload-dependencies"
          selfId={manifestId}
          manifestDependencies={manifestDependencies}
          value={data.dependencies ?? []}
          onChange={(dependencies) => update((d) => ({ ...d, dependencies }))}
        />
      </FieldGroup>
    </div>
  );
}
