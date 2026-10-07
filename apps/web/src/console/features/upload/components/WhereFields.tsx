/**
 * «Where it works»: platform, multiplayer, dedicated server and «removable without breaking
 * saves». Shared by the wizard and the mod editor. The answers constrain each other
 * (`@sotf/contracts/where`, the API applies the same rules): options that make no sense for the
 * chosen platform are not offered, the dedicated server question is replaced by a note when its
 * answer follows from the others, and every change keeps the values coherent.
 */
import { allowedRoles, changeWhere, impliedDedicated, type WhereAnswers } from '@sotf/contracts/where';
import { RadioCardGroup } from '@sotf/ui/radio-card';
import { Select } from '@sotf/ui/select';
import { notify } from '../../../lib/notify.ts';
import { ut } from '../i18n.ts';
import { DEDICATED_LABELS, MULTIPLAYER_LABELS, PLATFORM_LABELS, SAFE_TO_REMOVE_LABELS } from '../labels.ts';
import {
  DEDICATED_SERVER,
  type DedicatedServer,
  MULTIPLAYER_ROLES,
  type MultiplayerRole,
  PLATFORMS,
  type Platform,
  SAFE_TO_REMOVE,
  type SafeToRemove,
} from '../types.ts';
import { Reveal } from './Reveal.tsx';

export type { WhereAnswers };

export interface WhereFieldsProps {
  value: WhereAnswers;
  onChange: (answers: WhereAnswers) => void;
  /** `required` marks the platform question as required (the wizard); the editor keeps it optional. */
  platformOptional?: boolean;
}

export function WhereFields({ value, onChange, platformOptional = false }: WhereFieldsProps) {
  const apply = (patch: Partial<WhereAnswers>) => {
    const { answers, roleReplaced } = changeWhere(value, patch);
    onChange(answers);
    if (roleReplaced && answers.multiplayerRole) {
      notify.info(ut('upload_where_role_replaced', { role: MULTIPLAYER_LABELS[answers.multiplayerRole].title() }));
    }
  };

  const roles = allowedRoles(value.platform);
  const implied = impliedDedicated(value.platform, value.multiplayerRole);

  return (
    <div className="flex flex-col">
      <div id="upload-platform" tabIndex={-1} className="outline-none">
        <RadioCardGroup<Platform>
          legend={ut('upload_platform_label')}
          description={ut('upload_platform_hint')}
          columns={3}
          optional={platformOptional}
          value={value.platform}
          onValueChange={(platform) => apply({ platform })}
          options={PLATFORMS.map((platform) => ({
            value: platform,
            title: PLATFORM_LABELS[platform].title(),
            description: PLATFORM_LABELS[platform].description(),
          }))}
        />
      </div>

      <div className="flex flex-col pt-4">
        <RadioCardGroup<MultiplayerRole>
          legend={ut('upload_multiplayer_label')}
          description={
            value.platform === 'Server' ? ut('upload_multiplayer_hint_server') : ut('upload_multiplayer_hint')
          }
          columns={2}
          optional
          value={value.multiplayerRole}
          onValueChange={(multiplayerRole) => apply({ multiplayerRole })}
          options={MULTIPLAYER_ROLES.filter((role) => roles.includes(role)).map((role) => ({
            value: role,
            title: MULTIPLAYER_LABELS[role].title(),
            description: MULTIPLAYER_LABELS[role].description(),
          }))}
        />
      </div>

      <Reveal show={!implied}>
        <Select<DedicatedServer>
          label={ut('upload_dedicated_label')}
          description={ut('upload_dedicated_hint')}
          optional
          options={DEDICATED_SERVER.map((answer) => ({ value: answer, label: DEDICATED_LABELS[answer]() }))}
          value={value.dedicatedServer}
          placeholder={ut('upload_select_placeholder')}
          onValueChange={(dedicatedServer) => apply({ dedicatedServer: dedicatedServer ?? null })}
          className="sm:max-w-sm"
        />
      </Reveal>
      <Reveal show={Boolean(implied)}>
        <p className="text-sm text-fg-muted" aria-live="polite">
          <span className="font-medium text-fg">{ut('upload_dedicated_label')}: </span>
          {implied?.value === 'yes' ? ut('upload_dedicated_implied_yes') : ut('upload_dedicated_implied_no')}
        </p>
      </Reveal>

      <div className="flex flex-col pt-4">
        <RadioCardGroup<SafeToRemove>
          legend={ut('upload_safe_remove_label')}
          columns={3}
          optional
          value={value.safeToRemove}
          onValueChange={(safeToRemove) => apply({ safeToRemove })}
          options={SAFE_TO_REMOVE.map((answer) => ({
            value: answer,
            title: SAFE_TO_REMOVE_LABELS[answer].title(),
            description: SAFE_TO_REMOVE_LABELS[answer].description(),
          }))}
        />
      </div>
    </div>
  );
}
