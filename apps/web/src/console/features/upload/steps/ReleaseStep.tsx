/**
 * Step ⑤ «Release» (PLAN §7.5): the version (from `manifest.json`, validated against the previous
 * one), the channel and the changelog in Markdown. A new version adds the game builds it was tested
 * on and «Notify followers» (on by default).
 */
import { STUDIO_LIMITS } from '@sotf/contracts/studio';
import { Field } from '@sotf/ui/field';
import { Input } from '@sotf/ui/input';
import { RadioCardGroup } from '@sotf/ui/radio-card';
import { Switch } from '@sotf/ui/switch';
import { Callout } from '../components/Callout.tsx';
import { GameBuildPicker } from '../components/GameBuildPicker.tsx';
import { MarkdownField } from '../components/MarkdownField.tsx';
import { ut } from '../i18n.ts';
import type { VersionCheck } from '../lib/semver.ts';
import { type DraftData, type UpdateData, VERSION_CHANNELS, type VersionChannel } from '../types.ts';
import { FieldGroup, StepHeader } from './StepHeader.tsx';

export interface ReleaseStepProps {
  mode: 'mod' | 'version';
  isBuild: boolean;
  data: DraftData;
  update: UpdateData;
  /** Version read from the uploaded file (null until a file is chosen). */
  fileVersion: string | null;
  check: VersionCheck | null;
  headingId: string;
  /** Free upload: no manifest, the creator types the version number. */
  free?: boolean;
  /** Versions the mod already has (new version of a free mod: duplicates are refused). */
  existingVersions?: readonly string[];
  /** «Next» was pressed with a missing or malformed version number. */
  versionFailed?: boolean;
  /** Game builds (from Steam) exist for Sons of the Forest only. */
  showGameBuilds?: boolean;
}

export function ReleaseStep({
  mode,
  isBuild,
  data,
  update,
  fileVersion,
  check,
  headingId,
  free = false,
  existingVersions = [],
  versionFailed = false,
  showGameBuilds = true,
}: ReleaseStepProps) {
  const release = data.version ?? {};
  const setRelease = (patch: Partial<NonNullable<DraftData['version']>>) =>
    update((d) => ({ ...d, version: { ...(d.version ?? {}), ...patch } }));

  return (
    <div className="flex flex-col gap-5">
      <StepHeader id={headingId} title={ut('upload_release_title')} description={ut('upload_release_intro')} />

      <FieldGroup id="upload-group-version" title={ut('upload_version_label')}>
        {isBuild ? (
          <p className="text-sm text-fg-muted">{ut('upload_version_build')}</p>
        ) : free ? (
          <Field
            label={ut('upload_free_version_label')}
            description={ut('upload_free_version_hint')}
            error={
              existingVersions.includes((release.version ?? '').trim())
                ? ut('upload_free_version_exists')
                : versionFailed
                  ? ut('upload_free_version_error')
                  : undefined
            }
          >
            <Input
              id="upload-version"
              value={release.version ?? ''}
              maxLength={40}
              autoComplete="off"
              spellCheck={false}
              placeholder="1.0.0"
              className="max-w-48 font-mono"
              onChange={(event) => setRelease({ version: event.currentTarget.value })}
            />
          </Field>
        ) : fileVersion ? (
          <div className="flex flex-col gap-3">
            <p className="flex flex-wrap items-baseline gap-3">
              <span className="readout text-base text-fg">v{fileVersion.replace(/^v/, '')}</span>
              {check?.previous ? (
                <span className="text-sm text-fg-muted">
                  {ut('upload_version_previous', { version: check.previous.replace(/^v/, '') })}
                </span>
              ) : (
                <span className="text-sm text-fg-muted">{ut('upload_version_first')}</span>
              )}
            </p>
            {check && !check.ok ? (
              <Callout tone="danger" title={ut('upload_version_invalid_title')}>
                {check.reason === 'not_semver'
                  ? ut('upload_block_version_not_semver', { version: fileVersion })
                  : check.reason === 'exists'
                    ? ut('upload_block_version_exists', { version: fileVersion })
                    : ut('upload_block_version_not_greater', { version: fileVersion, previous: check.previous ?? '-' })}
              </Callout>
            ) : (
              <p className="text-xs text-fg-muted">{ut('upload_version_from_manifest')}</p>
            )}
          </div>
        ) : (
          <p className="text-sm text-fg-muted">{ut('upload_version_pending')}</p>
        )}

        <RadioCardGroup<VersionChannel>
          legend={ut('upload_channel_label')}
          columns={2}
          value={release.channel ?? 'release'}
          onValueChange={(channel) => setRelease({ channel })}
          options={VERSION_CHANNELS.map((value) => ({
            value,
            title: value === 'beta' ? ut('upload_channel_beta') : ut('upload_channel_release'),
            description: value === 'beta' ? ut('upload_channel_beta_hint') : ut('upload_channel_release_hint'),
          }))}
        />
      </FieldGroup>

      <FieldGroup id="upload-group-changelog" title={ut('upload_changelog_group')}>
        <MarkdownField
          id="upload-changelog"
          label={ut('upload_changelog_label')}
          description={mode === 'version' ? ut('upload_changelog_hint_version') : ut('upload_changelog_hint_first')}
          value={release.changelogMd ?? ''}
          onChange={(changelogMd) => setRelease({ changelogMd })}
          maxLength={STUDIO_LIMITS.changelogMax}
          idPrefix="md-cl-"
          minHeight="10rem"
          optional={mode !== 'version'}
          placeholder={ut('upload_changelog_placeholder')}
        />
      </FieldGroup>

      {mode === 'version' ? (
        <FieldGroup id="upload-group-announce" title={ut('upload_announce_group')}>
          {!isBuild && showGameBuilds ? (
            <GameBuildPicker
              value={data.testedGameBuildIds ?? []}
              onChange={(testedGameBuildIds) => update((d) => ({ ...d, testedGameBuildIds }))}
            />
          ) : null}
          <Switch
            label={ut('upload_notify_label')}
            description={ut('upload_notify_hint')}
            checked={release.notifyFollowers ?? true}
            onCheckedChange={(notifyFollowers) => setRelease({ notifyFollowers })}
          />
        </FieldGroup>
      ) : null}
    </div>
  );
}
