/**
 * Settings → Profile (T0-15, research/03 §6.11): avatar (crop → WebP), display name, bio
 * (Markdown, 500), links and up to three pinned mods. Each card saves on its own
 * (`PATCH /me/profile`) with a toast; the avatar applies as soon as it is uploaded. The handle is
 * shown read-only (immutable in T0).
 */

import { localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Avatar } from '@sotf/ui/avatar';
import { Button } from '@sotf/ui/button';
import { Checkbox } from '@sotf/ui/checkbox';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { Textarea } from '@sotf/ui/textarea';
import { useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { ExternalLink, Plus, Trash2, Upload } from 'lucide-react';
import { type ChangeEvent, useMemo, useRef, useState } from 'react';
import { useMe } from '../../hooks/use-me.ts';
import { activeLocale } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import {
  type ProfileUpdate,
  type PublicProfile,
  patchMe,
  profileModsQuery,
  profileQuery,
  type SelfProfile,
  settingsApi,
  settingsKeys,
} from './api.ts';
import { failureDescription } from './errors.ts';
import { type CropResult, ImageCropDialog } from './ImageCropDialog.tsx';
import { SettingsCard, SettingsPage } from './layout.tsx';
import { type ImagePurpose, ImageUploadFailure, SOURCE_LIMITS, uploadImage, validateSource } from './upload.ts';

/** `PROFILE_LIMITS` and `LINK_KINDS` of `@sotf/contracts` (mirrored: no Zod in the chunk). */
const LIMITS = { bioMax: 500, linksMax: 7, pinnedMax: 3, nameMin: 2, nameMax: 32, linkLabelMax: 60 } as const;
const LINK_KINDS = ['website', 'github', 'youtube', 'twitch', 'discord', 'kofi', 'patreon', 'other'] as const;
type LinkKind = (typeof LINK_KINDS)[number];

interface LinkRow {
  key: number;
  kind: LinkKind;
  url: string;
  label: string;
}

function linkKindLabel(kind: LinkKind): string {
  switch (kind) {
    case 'website':
      return m.settings_link_website();
    case 'github':
      return 'GitHub';
    case 'youtube':
      return 'YouTube';
    case 'twitch':
      return 'Twitch';
    case 'discord':
      return 'Discord';
    case 'kofi':
      return 'Ko-fi';
    case 'patreon':
      return 'Patreon';
    default:
      return m.settings_link_other();
  }
}

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

function uploadErrorText(error: unknown, purpose: ImagePurpose): string {
  if (error instanceof ImageUploadFailure) {
    switch (error.reason) {
      case 'type':
        return m.settings_image_type();
      case 'size':
        return m.settings_image_size({ max: Math.round(SOURCE_LIMITS[purpose].maxBytes / (1024 * 1024)) });
      case 'rejected':
        return m.settings_image_rejected();
      case 'processing':
        return m.settings_image_processing();
      default:
        return failureDescription(error.cause);
    }
  }
  return failureDescription(error);
}

export function ProfileScreen() {
  const me = useMe();
  const queryClient = useQueryClient();
  const handle = me.user.handle;
  const { data: profile } = useSuspenseQuery(profileQuery(handle));
  const mods = useQuery(profileModsQuery(handle));

  const store = (next: SelfProfile) => {
    queryClient.setQueryData(settingsKeys.profile(handle), next);
    patchMe(queryClient, (current) => ({
      ...current,
      user: { ...current.user, displayName: next.displayName, avatarUrl: next.avatar?.url ?? null },
    }));
  };

  const save = async (body: ProfileUpdate, success: string): Promise<boolean> => {
    try {
      store(await settingsApi.updateProfile(body));
      notify.success(success);
      return true;
    } catch (failure) {
      notify.error(m.settings_save_failed(), { description: failureDescription(failure) });
      return false;
    }
  };

  return (
    <SettingsPage section="profile">
      <a
        href={localizePath(profile.canonicalPath, activeLocale())}
        className="inline-flex items-center gap-1.5 justify-self-start text-sm font-semibold text-link"
      >
        <Icon icon={ExternalLink} size={16} />
        {m.settings_profile_view_public()}
      </a>
      <PhotoCard profile={profile} userId={me.user.id} save={save} store={store} />
      <AboutCard
        key={`about-${profile.displayName}-${profile.bioMd ?? ''}`}
        handle={handle}
        displayName={profile.displayName}
        bio={profile.bioMd ?? ''}
        save={save}
      />
      <LinksCard key={`links-${JSON.stringify(profile.links)}`} links={profile.links} save={save} />
      <PinnedCard
        key={`pinned-${profile.pinnedMods.map((mod) => mod.id).join(',')}`}
        pinned={profile.pinnedMods.map((mod) => mod.id)}
        mods={mods.data ?? null}
        loading={mods.isPending}
        failed={mods.isError}
        onRetry={() => void mods.refetch()}
        save={save}
      />
    </SettingsPage>
  );
}

type Save = (body: ProfileUpdate, success: string) => Promise<boolean>;

function PhotoCard({
  profile,
  userId,
  save,
  store,
}: {
  profile: PublicProfile;
  userId: number;
  save: Save;
  store: (next: SelfProfile) => void;
}) {
  const avatarInput = useRef<HTMLInputElement>(null);
  const [cropping, setCropping] = useState<{ file: File; purpose: ImagePurpose } | null>(null);
  const [progress, setProgress] = useState<{ purpose: ImagePurpose; ratio: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const pick = (purpose: ImagePurpose) => (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = '';
    if (!file) return;
    const invalid = validateSource(file, purpose);
    if (invalid) {
      setError(uploadErrorText(new ImageUploadFailure(invalid), purpose));
      return;
    }
    setError(null);
    setCropping({ file, purpose });
  };

  const onCropped = async ({ file, previewUrl }: CropResult) => {
    const purpose = cropping?.purpose ?? 'avatar';
    setCropping(null);
    setProgress({ purpose, ratio: 0 });
    try {
      const uploadId = await uploadImage(file, purpose, (ratio) => setProgress({ purpose, ratio }));
      store(await settingsApi.updateProfile({ avatarUploadId: uploadId }));
      notify.success(m.settings_avatar_saved());
    } catch (failure) {
      const text = uploadErrorText(failure, purpose);
      setError(text);
      notify.error(m.settings_save_failed(), { description: text });
    } finally {
      URL.revokeObjectURL(previewUrl);
      setProgress(null);
    }
  };

  const removeAvatar = () => void save({ avatarUploadId: null }, m.settings_avatar_removed());
  const busy = progress !== null;

  return (
    <SettingsCard id="profile-photos" title={m.settings_avatar_label()} description={m.settings_photos_text()}>
      <div className="flex flex-wrap items-center gap-4">
        <Avatar name={profile.displayName} id={userId} src={profile.avatar?.url ?? null} size={96} />
        <div className="grid gap-2">
          <div className="flex flex-wrap gap-2">
            <Button
              variant="secondary"
              size="sm"
              icon={<Icon icon={Upload} size={16} />}
              disabled={busy}
              onClick={() => avatarInput.current?.click()}
            >
              {profile.avatar ? m.settings_avatar_change() : m.settings_avatar_upload()}
            </Button>
            {profile.avatar ? (
              <Button
                variant="ghost"
                size="sm"
                icon={<Icon icon={Trash2} size={16} />}
                disabled={busy}
                onClick={removeAvatar}
              >
                {m.settings_avatar_remove()}
              </Button>
            ) : null}
          </div>
          <p className="text-xs text-fg-muted">{m.settings_avatar_hint({ max: 5 })}</p>
          <input
            ref={avatarInput}
            type="file"
            accept={SOURCE_LIMITS.avatar.types.join(',')}
            className="sr-only"
            tabIndex={-1}
            aria-hidden="true"
            onChange={pick('avatar')}
          />
        </div>
      </div>
      {progress ? (
        <div className="grid gap-1" role="status">
          <span className="text-sm text-fg-muted">{m.settings_avatar_uploading()}</span>
          <progress
            className="h-2 w-full overflow-hidden rounded-full accent-primary"
            value={Math.round(progress.ratio * 100)}
            max={100}
          />
        </div>
      ) : null}
      {error ? (
        <p role="alert" className="text-sm text-danger">
          {error}
        </p>
      ) : null}
      <ImageCropDialog
        file={cropping?.file ?? null}
        purpose={cropping?.purpose ?? 'avatar'}
        onCancel={() => setCropping(null)}
        onCropped={(result) => void onCropped(result)}
      />
    </SettingsCard>
  );
}

function AboutCard({
  handle,
  displayName,
  bio,
  save,
}: {
  handle: string;
  displayName: string;
  bio: string;
  save: Save;
}) {
  const [name, setName] = useState(displayName);
  const [text, setText] = useState(bio);
  const [saving, setSaving] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const trimmed = name.trim();
  const nameLength = Array.from(trimmed).length;
  const nameError =
    submitted && (nameLength < LIMITS.nameMin || nameLength > LIMITS.nameMax)
      ? m.settings_display_name_length({ min: LIMITS.nameMin, max: LIMITS.nameMax })
      : undefined;
  const bioLength = text.length;
  const dirty = trimmed !== displayName || text.trim() !== bio.trim();

  const submit = async () => {
    setSubmitted(true);
    if (nameLength < LIMITS.nameMin || nameLength > LIMITS.nameMax || bioLength > LIMITS.bioMax) return;
    setSaving(true);
    const body: ProfileUpdate = {};
    if (trimmed !== displayName) body.displayName = trimmed;
    if (text.trim() !== bio.trim()) body.bioMd = text.trim() ? text.trim() : null;
    await save(body, m.settings_about_saved());
    setSaving(false);
  };

  return (
    <SettingsCard
      id="profile-about"
      title={m.settings_about_title()}
      description={m.settings_about_text()}
      onSubmit={submit}
      dirty={dirty}
      saving={saving}
      onReset={() => {
        setName(displayName);
        setText(bio);
        setSubmitted(false);
      }}
    >
      <Field label={m.settings_display_name()} description={m.settings_display_name_hint()} error={nameError}>
        <Input
          value={name}
          maxLength={64}
          autoComplete="nickname"
          onChange={(event) => setName(event.currentTarget.value)}
        />
      </Field>
      <Field label={m.settings_handle()} description={m.settings_handle_hint()}>
        <Input value={`@${handle}`} readOnly className="font-mono" />
      </Field>
      <Field
        label={m.settings_bio()}
        optional
        description={
          <span className="flex flex-wrap justify-between gap-2">
            <span>{m.settings_bio_hint()}</span>
            <span className={bioLength > LIMITS.bioMax ? 'text-danger' : 'tabular-nums'} aria-live="polite">
              {m.settings_chars_left({ count: LIMITS.bioMax - bioLength })}
            </span>
          </span>
        }
        error={bioLength > LIMITS.bioMax ? m.settings_bio_too_long({ max: LIMITS.bioMax }) : undefined}
      >
        <Textarea value={text} minRows={4} maxRows={12} onChange={(event) => setText(event.currentTarget.value)} />
      </Field>
    </SettingsCard>
  );
}

function LinksCard({ links, save }: { links: PublicProfile['links']; save: Save }) {
  const counter = useRef(0);
  const toRows = () =>
    links.map((link) => ({
      key: ++counter.current,
      kind: (LINK_KINDS as readonly string[]).includes(link.kind) ? (link.kind as LinkKind) : 'other',
      url: link.url,
      label: link.label ?? '',
    }));
  const [rows, setRows] = useState<LinkRow[]>(toRows);
  const [saving, setSaving] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const original = JSON.stringify(links.map((link) => [link.kind, link.url, link.label ?? '']));
  const current = JSON.stringify(rows.map((row) => [row.kind, row.url.trim(), row.label.trim()]));
  const dirty = original !== current;
  const errors = rows.map((row) => (isHttpUrl(row.url.trim()) ? null : m.settings_link_invalid()));

  const update = (key: number, patch: Partial<LinkRow>) =>
    setRows((list) => list.map((row) => (row.key === key ? { ...row, ...patch } : row)));

  const submit = async () => {
    setSubmitted(true);
    if (errors.some(Boolean)) return;
    setSaving(true);
    await save(
      {
        links: rows.map((row) => ({
          kind: row.kind,
          url: row.url.trim(),
          ...(row.label.trim() ? { label: row.label.trim() } : { label: null }),
        })),
      },
      m.settings_links_saved(),
    );
    setSaving(false);
  };

  return (
    <SettingsCard
      id="profile-links"
      title={m.settings_links_title()}
      description={m.settings_links_text({ max: LIMITS.linksMax })}
      onSubmit={submit}
      dirty={dirty}
      saving={saving}
      onReset={() => {
        setRows(toRows());
        setSubmitted(false);
      }}
    >
      {rows.length === 0 ? <p className="text-sm text-fg-muted">{m.settings_links_empty()}</p> : null}
      <ul className="grid gap-3">
        {rows.map((row, index) => (
          <li
            key={row.key}
            className="grid gap-2 rounded-md border border-border p-3 md:grid-cols-[10rem_1fr_10rem_auto] md:items-end"
          >
            <Select<LinkKind>
              label={m.settings_link_kind()}
              value={row.kind}
              onValueChange={(value) => value && update(row.key, { kind: value })}
              options={LINK_KINDS.map((kind) => ({ value: kind, label: linkKindLabel(kind) }))}
            />
            <Field label={m.settings_link_url()} error={submitted ? (errors[index] ?? undefined) : undefined}>
              <Input
                type="url"
                inputMode="url"
                value={row.url}
                placeholder="https://"
                onChange={(event) => update(row.key, { url: event.currentTarget.value })}
              />
            </Field>
            <Field label={m.settings_link_label()} optional>
              <Input
                value={row.label}
                maxLength={LIMITS.linkLabelMax}
                onChange={(event) => update(row.key, { label: event.currentTarget.value })}
              />
            </Field>
            <Button
              variant="icon"
              size="md"
              aria-label={m.settings_link_remove({ n: index + 1 })}
              onClick={() => setRows((list) => list.filter((entry) => entry.key !== row.key))}
            >
              <Icon icon={Trash2} size={18} />
            </Button>
          </li>
        ))}
      </ul>
      {rows.length < LIMITS.linksMax ? (
        <Button
          variant="secondary"
          size="sm"
          className="justify-self-start"
          icon={<Icon icon={Plus} size={16} />}
          onClick={() => setRows((list) => [...list, { key: ++counter.current, kind: 'website', url: '', label: '' }])}
        >
          {m.settings_link_add()}
        </Button>
      ) : null}
    </SettingsCard>
  );
}

function PinnedCard({
  pinned,
  mods,
  loading,
  failed,
  onRetry,
  save,
}: {
  pinned: number[];
  mods: PublicProfile['pinnedMods'] | null;
  loading: boolean;
  failed: boolean;
  onRetry: () => void;
  save: Save;
}) {
  const [selected, setSelected] = useState<number[]>(pinned);
  const [saving, setSaving] = useState(false);
  const dirty = selected.join(',') !== pinned.join(',');
  const byId = useMemo(() => new Map((mods ?? []).map((mod) => [mod.id, mod])), [mods]);

  const toggle = (id: number, on: boolean) =>
    setSelected((list) =>
      on ? (list.includes(id) ? list : [...list, id].slice(0, LIMITS.pinnedMax)) : list.filter((x) => x !== id),
    );

  const submit = async () => {
    setSaving(true);
    await save({ pinnedModIds: selected }, m.settings_pinned_saved());
    setSaving(false);
  };

  return (
    <SettingsCard
      id="profile-pinned"
      title={m.settings_pinned_title()}
      description={m.settings_pinned_text({ max: LIMITS.pinnedMax })}
      onSubmit={submit}
      dirty={dirty}
      saving={saving}
      onReset={() => setSelected(pinned)}
    >
      {loading ? (
        <p className="text-sm text-fg-muted" role="status">
          {m.settings_loading()}
        </p>
      ) : failed ? (
        <div role="alert" className="flex flex-wrap items-center gap-3 text-sm text-danger">
          {m.settings_pinned_failed()}
          <Button variant="secondary" size="sm" onClick={onRetry}>
            {m.settings_retry()}
          </Button>
        </div>
      ) : !mods || mods.length === 0 ? (
        <p className="text-sm text-fg-muted">{m.settings_pinned_empty()}</p>
      ) : (
        <>
          <p className="text-sm text-fg-muted" aria-live="polite">
            {m.settings_pinned_count({ count: selected.length, max: LIMITS.pinnedMax })}
          </p>
          <ul className="grid gap-2 md:grid-cols-2">
            {mods.map((mod) => {
              const checked = selected.includes(mod.id);
              const order = selected.indexOf(mod.id);
              return (
                <li key={mod.id} className="rounded-md border border-border p-3">
                  <Checkbox
                    label={
                      <span className="flex items-center gap-2">
                        {checked ? (
                          <span className="flex size-5 items-center justify-center rounded-full bg-primary text-2xs font-semibold text-primary-fg tabular-nums">
                            {order + 1}
                          </span>
                        ) : null}
                        {mod.name}
                      </span>
                    }
                    description={m.settings_pinned_downloads({ count: mod.downloads })}
                    checked={checked}
                    disabled={!checked && selected.length >= LIMITS.pinnedMax}
                    onCheckedChange={(on) => toggle(mod.id, on)}
                  />
                </li>
              );
            })}
          </ul>
          {selected.some((id) => !byId.has(id)) ? (
            <p className="text-xs text-fg-muted">{m.settings_pinned_hidden()}</p>
          ) : null}
        </>
      )}
    </SettingsCard>
  );
}
