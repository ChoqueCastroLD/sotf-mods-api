/**
 * Step ③ «Compatibility» (PLAN §7.5): game builds the creator tested (multi-select), minimum
 * RedLoader, platform (RadioCards), multiplayer role, dedicated server, «can it be removed without
 * breaking the save?» and dependencies (required, optional, conflicts).
 */
import { Field } from '@sotf/ui/field';
import { Input } from '@sotf/ui/input';
import { useState } from 'react';
import { DependencyPicker } from '../components/DependencyPicker.tsx';
import { GameBuildPicker } from '../components/GameBuildPicker.tsx';
import { WhereFields } from '../components/WhereFields.tsx';
import { ut } from '../i18n.ts';
import { isLoaderVersion } from '../lib/validate.ts';
import type { DraftData, UpdateData } from '../types.ts';
import { FieldGroup, StepHeader } from './StepHeader.tsx';

export interface CompatStepProps {
  data: DraftData;
  update: UpdateData;
  manifestId: string | null;
  manifestDependencies: readonly string[];
  failed?: ReadonlySet<string>;
  headingId: string;
}

export function CompatStep({ data, update, manifestId, manifestDependencies, failed, headingId }: CompatStepProps) {
  const [loaderTouched, setLoaderTouched] = useState(false);
  const loaderMin = data.loaderMin ?? '';
  const loaderError =
    (loaderTouched || failed?.has('loaderMin')) && loaderMin && !isLoaderVersion(loaderMin)
      ? ut('upload_error_loader_version')
      : null;

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
            id="upload-loader"
            value={loaderMin}
            maxLength={40}
            placeholder="0.9.0"
            spellCheck={false}
            autoCapitalize="none"
            autoComplete="off"
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
        <WhereFields
          value={{
            platform: data.platform ?? null,
            multiplayerRole: data.multiplayerRole ?? null,
            dedicatedServer: data.dedicatedServer ?? null,
            safeToRemove: data.safeToRemove ?? null,
          }}
          onChange={(where) => update((d) => ({ ...d, ...where }))}
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
