/**
 * Modpack editor (`/dashboard/modpacks/new` and `/dashboard/modpacks/:id`): name, description
 * (Markdown), optional cover, and the ordered mods (search, add, move up/down, remove). Saving
 * creates or updates the kit and replaces its items; the API adds the missing dependencies and
 * reports pairs of incompatible mods, shown after the save. A `.sotfprofile` exported by SotF Mods
 * Manager fills the list (unknown or unapproved ids are listed as skipped).
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Textarea } from '@sotf/ui/textarea';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from '@tanstack/react-router';
import { AlertTriangle, ArrowDown, ArrowUp, ArrowUpRight, FileUp, ImagePlus, Search, Trash2 } from 'lucide-react';
import { type ChangeEvent, useDeferredValue, useId, useMemo, useRef, useState } from 'react';
import { api } from '../../lib/api.ts';
import { notify } from '../../lib/notify.ts';
import { Panel } from '../admin/shared.tsx';
import { reportFailure } from '../basecamp/shared.tsx';
import { modSearchQuery } from '../upload/lib/queries.ts';
import { MODPACK_MAX_MODS, type Modpack, modpackKeys, PROFILE_MAX_BYTES } from './api.ts';
import { ModpackStatusBadge } from './shared.tsx';
import { CoverUploadFailure, uploadCover, validateCover } from './upload.ts';

interface Picked {
  modId: number;
  manifestId: string;
  name: string;
  handle: string | null;
  thumbnail: string | null;
}

const NAME_MAX = 80;
const DESCRIPTION_MAX = 5000;

function pickedOf(modpack: Modpack | null): Picked[] {
  if (!modpack) return [];
  return modpack.items
    .filter((item) => !item.isAutoDependency && item.available)
    .map((item) => ({
      modId: item.mod.id,
      manifestId: item.mod.manifestId,
      name: item.mod.name,
      handle: item.mod.userHandle,
      thumbnail: item.mod.thumbnail?.url ?? null,
    }));
}

export function ModpackEditorScreen({
  modpack,
  startWithImport = false,
}: {
  modpack: Modpack | null;
  startWithImport?: boolean;
}) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [name, setName] = useState(modpack?.name ?? '');
  const [description, setDescription] = useState(modpack?.descriptionMd ?? '');
  const [items, setItems] = useState<Picked[]>(() => pickedOf(modpack));
  const [query, setQuery] = useState('');
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [skipped, setSkipped] = useState<string[]>([]);
  const [coverUploadId, setCoverUploadId] = useState<string | null | undefined>(undefined);
  const [coverPreview, setCoverPreview] = useState<string | null>(modpack?.cover?.url ?? null);
  const [coverBusy, setCoverBusy] = useState(false);
  const importRef = useRef<HTMLInputElement>(null);
  const coverRef = useRef<HTMLInputElement>(null);
  const deferred = useDeferredValue(query.trim());
  const search = useQuery(modSearchQuery(deferred));
  const resultsId = useId();

  const savedPicked = useMemo(() => pickedOf(modpack), [modpack]);
  const chosen = new Set(items.map((item) => item.modId));
  const results = (search.data?.items ?? []).filter((mod) => mod.kind !== 'build');
  const full = items.length >= MODPACK_MAX_MODS;
  const nameError = name.trim().length > 0 && name.trim().length < 2 ? m.modpacks_name_too_short() : undefined;
  const dirty =
    modpack === null ||
    name !== modpack.name ||
    description !== (modpack.descriptionMd ?? '') ||
    coverUploadId !== undefined ||
    JSON.stringify(items.map((item) => item.modId)) !== JSON.stringify(savedPicked.map((item) => item.modId));
  const canSave = name.trim().length >= 2 && items.length > 0 && !saving && !coverBusy && dirty;

  const add = (mod: {
    id: number;
    manifestId: string;
    name: string;
    userHandle: string;
    thumbnail: { url: string } | null;
  }) => {
    if (chosen.has(mod.id) || full) return;
    setItems([
      ...items,
      {
        modId: mod.id,
        manifestId: mod.manifestId,
        name: mod.name,
        handle: mod.userHandle,
        thumbnail: mod.thumbnail?.url ?? null,
      },
    ]);
    setQuery('');
  };
  const move = (index: number, delta: -1 | 1) => {
    const next = [...items];
    const target = index + delta;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target] as Picked, next[index] as Picked];
    setItems(next);
  };

  const importProfile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = '';
    if (!file) return;
    if (file.size > PROFILE_MAX_BYTES) {
      notify.error(m.modpacks_import_failed(), { description: m.modpacks_import_too_big() });
      return;
    }
    try {
      const resolved = await api.kits.resolveProfile({ body: { text: await file.text() } });
      const known = new Set(items.map((item) => item.modId));
      const added = resolved.items.filter((item) => !known.has(item.modId));
      setItems([
        ...items,
        ...added.map((item) => ({
          modId: item.modId,
          manifestId: item.manifestId,
          name: item.name,
          handle: null,
          thumbnail: null,
        })),
      ]);
      if (!name.trim() && resolved.name) setName(resolved.name.slice(0, NAME_MAX));
      setSkipped(resolved.skipped);
      notify.success(m.modpacks_import_done({ count: added.length }));
    } catch (error) {
      reportFailure(error, m.modpacks_import_failed());
    }
  };

  const pickCover = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = '';
    if (!file) return;
    const invalid = validateCover(file);
    if (invalid) {
      notify.error(m.modpacks_cover_failed(), {
        description: invalid === 'size' ? m.modpacks_cover_too_big() : m.modpacks_cover_wrong_type(),
      });
      return;
    }
    setCoverBusy(true);
    try {
      const id = await uploadCover(file);
      setCoverUploadId(id);
      setCoverPreview(URL.createObjectURL(file));
    } catch (error) {
      reportFailure(error instanceof CoverUploadFailure ? error : error, m.modpacks_cover_failed());
    } finally {
      setCoverBusy(false);
    }
  };

  const save = async () => {
    if (!canSave) return;
    setSaving(true);
    try {
      let id = modpack?.id ?? null;
      if (id === null) {
        const created = await api.kits.create({
          body: {
            name: name.trim(),
            descriptionMd: description,
            visibility: 'public',
            ...(coverUploadId ? { coverUploadId } : {}),
          },
        });
        id = created.id;
      } else if (
        name !== modpack?.name ||
        description !== (modpack?.descriptionMd ?? '') ||
        coverUploadId !== undefined
      ) {
        await api.kits.update({
          params: { id },
          body: {
            name: name.trim(),
            descriptionMd: description,
            ...(coverUploadId !== undefined ? { coverUploadId } : {}),
          },
        });
      }
      const saved = await api.kits.putItems({
        params: { id },
        body: { items: items.map((item) => ({ modId: item.modId })) },
      });
      queryClient.setQueryData(modpackKeys.own(id), saved);
      void queryClient.invalidateQueries({ queryKey: modpackKeys.mine });
      setCoverUploadId(undefined);
      notify.success(
        saved.approvalStatus === 'pending' ? m.modpacks_saved_pending() : m.modpacks_saved(),
        saved.conflictPairs.length > 0
          ? { description: m.modpacks_saved_conflicts({ count: saved.conflictPairs.length }) }
          : undefined,
      );
      if (modpack === null) await navigate({ to: '/dashboard/modpacks/$kitId', params: { kitId: String(id) } });
    } catch (error) {
      reportFailure(error, m.modpacks_save_failed());
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!modpack) return;
    try {
      await api.kits.delete({ params: { id: modpack.id } });
      void queryClient.invalidateQueries({ queryKey: modpackKeys.mine });
      notify.success(m.modpacks_deleted());
      await navigate({ to: '/dashboard/modpacks' });
    } catch (error) {
      reportFailure(error, m.modpacks_delete_failed());
    }
  };

  const autoDependencies = modpack?.items.filter((item) => item.isAutoDependency) ?? [];
  const unavailable = [
    ...(modpack?.items.filter((item) => !item.available).map((item) => item.mod.name) ?? []),
    ...(modpack?.unavailable.map((item) => item.name) ?? []),
  ];

  return (
    <div className="grid gap-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="grid gap-1">
          <Link to="/dashboard/modpacks" className="text-sm text-fg-muted hover:text-link">
            ← {m.modpacks_mine_title()}
          </Link>
          <h1 className="text-2xl font-bold text-fg">{modpack ? modpack.name : m.modpacks_new_title()}</h1>
          {modpack ? (
            <span className="flex flex-wrap items-center gap-2 text-sm text-fg-muted">
              <ModpackStatusBadge status={modpack.approvalStatus} />
              {modpack.approvalStatus === 'pending' ? m.modpacks_pending_hint() : null}
              {modpack.approvalStatus === 'published' ? (
                <a
                  href={modpack.canonicalPath}
                  className="inline-flex items-center gap-1 font-semibold text-fg hover:text-link"
                >
                  {m.modpacks_view_public()}
                  <Icon icon={ArrowUpRight} size={14} />
                </a>
              ) : null}
            </span>
          ) : (
            <p className="max-w-prose text-sm text-fg-muted">{m.modpacks_new_description()}</p>
          )}
        </div>
      </header>

      <Panel
        title={m.modpacks_import_title()}
        description={m.modpacks_import_description()}
        className={startWithImport ? 'rounded-lg border border-primary/40 bg-primary/5 p-4' : undefined}
      >
        <div className="flex flex-wrap items-center gap-3">
          <input
            ref={importRef}
            type="file"
            accept=".sotfprofile,.json,application/json"
            className="sr-only"
            tabIndex={-1}
            aria-hidden="true"
            onChange={(event) => void importProfile(event)}
          />
          <Button
            variant="secondary"
            icon={<Icon icon={FileUp} size={16} />}
            onClick={() => importRef.current?.click()}
          >
            {m.modpacks_import_choose()}
          </Button>
        </div>
        {skipped.length > 0 ? (
          <div
            role="status"
            className="grid gap-1 rounded-md border border-warning/40 bg-warning-soft p-3 text-sm text-fg"
          >
            <span className="font-semibold">{m.modpacks_import_skipped({ count: skipped.length })}</span>
            <span className="readout break-all text-fg-muted">{skipped.join(', ')}</span>
          </div>
        ) : null}
      </Panel>

      <Panel title={m.modpacks_details_title()}>
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_16rem]">
          <div className="grid content-start gap-4">
            <Field label={m.modpacks_name_label()} error={nameError}>
              <Input value={name} maxLength={NAME_MAX} onChange={(event) => setName(event.currentTarget.value)} />
            </Field>
            <Field label={m.modpacks_description_label()} description={m.modpacks_description_hint()} optional>
              <Textarea
                value={description}
                maxLength={DESCRIPTION_MAX}
                minRows={5}
                onChange={(event) => setDescription(event.currentTarget.value)}
              />
            </Field>
          </div>
          <div className="grid content-start gap-2">
            <span className="text-sm font-medium text-fg">
              {m.modpacks_cover_label()} <span className="font-normal text-fg-subtle">({m.modpacks_optional()})</span>
            </span>
            <div className="aspect-video overflow-hidden rounded-md border border-border bg-sunken">
              {coverPreview ? <img src={coverPreview} alt="" className="size-full object-cover" /> : null}
            </div>
            <input
              ref={coverRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/avif,image/gif"
              className="sr-only"
              tabIndex={-1}
              aria-hidden="true"
              onChange={(event) => void pickCover(event)}
            />
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                loading={coverBusy}
                icon={<Icon icon={ImagePlus} size={14} />}
                onClick={() => coverRef.current?.click()}
              >
                {coverPreview ? m.modpacks_cover_change() : m.modpacks_cover_add()}
              </Button>
              {coverPreview ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setCoverPreview(null);
                    setCoverUploadId(null);
                  }}
                >
                  {m.modpacks_cover_remove()}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Panel>

      <Panel title={m.modpacks_mods_title()} description={m.modpacks_mods_description()}>
        {unavailable.length > 0 ? (
          <p
            role="status"
            className="flex items-start gap-2 rounded-md border border-warning/40 bg-warning-soft p-3 text-sm text-fg"
          >
            <Icon icon={AlertTriangle} size={16} className="mt-0.5 shrink-0 text-warning" />
            {m.modpacks_unavailable_notice({ names: unavailable.join(', ') })}
          </p>
        ) : null}
        {modpack && modpack.conflictPairs.length > 0 ? (
          <div
            role="status"
            className="grid gap-1 rounded-md border border-danger/40 bg-danger-soft p-3 text-sm text-fg"
          >
            <span className="flex items-center gap-2 font-semibold">
              <Icon icon={AlertTriangle} size={16} className="text-danger" />
              {m.modpacks_conflicts_title()}
            </span>
            <ul className="list-disc ps-6">
              {modpack.conflictPairs.map(([a, b]) => (
                <li key={`${a}|${b}`}>{m.modpacks_conflict_pair({ a, b })}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <ol className="grid gap-2" aria-label={m.modpacks_mods_title()}>
          {items.map((item, index) => (
            <li
              key={item.modId}
              className="flex items-center gap-3 rounded-md border border-border bg-raised px-3 py-2"
            >
              <span className="w-6 shrink-0 text-end font-mono text-xs text-fg-subtle">{index + 1}</span>
              <span className="size-10 shrink-0 overflow-hidden rounded-sm bg-sunken">
                {item.thumbnail ? <img src={item.thumbnail} alt="" className="size-full object-cover" /> : null}
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-sm font-medium text-fg">{item.name}</span>
                <span className="readout truncate text-fg-subtle">
                  {item.manifestId}
                  {item.handle ? ` · @${item.handle}` : ''}
                </span>
              </span>
              <span className="flex shrink-0 gap-1">
                <Button
                  variant="icon"
                  size="sm"
                  disabled={index === 0}
                  aria-label={m.modpacks_move_up({ name: item.name })}
                  onClick={() => move(index, -1)}
                >
                  <Icon icon={ArrowUp} size={14} />
                </Button>
                <Button
                  variant="icon"
                  size="sm"
                  disabled={index === items.length - 1}
                  aria-label={m.modpacks_move_down({ name: item.name })}
                  onClick={() => move(index, 1)}
                >
                  <Icon icon={ArrowDown} size={14} />
                </Button>
                <Button
                  variant="icon"
                  size="sm"
                  aria-label={m.modpacks_remove_mod({ name: item.name })}
                  onClick={() => setItems(items.filter((entry) => entry.modId !== item.modId))}
                >
                  <Icon icon={Trash2} size={14} />
                </Button>
              </span>
            </li>
          ))}
          {items.length === 0 ? <li className="text-sm text-fg-muted">{m.modpacks_mods_empty()}</li> : null}
        </ol>

        <div className="grid gap-2">
          <Input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.currentTarget.value)}
            placeholder={m.modpacks_mod_search_placeholder()}
            aria-label={m.modpacks_mod_search_placeholder()}
            aria-controls={resultsId}
            icon={<Icon icon={Search} size={14} />}
            disabled={full}
          />
          <div id={resultsId} aria-live="polite">
            {deferred.length >= 2 && search.isSuccess && results.length === 0 ? (
              <p className="text-sm text-fg-muted">{m.modpacks_search_empty()}</p>
            ) : null}
            {results.length > 0 && deferred.length >= 2 ? (
              <ul className="flex flex-col divide-y divide-border rounded-md border border-border">
                {results.map((mod) => (
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
                      disabled={chosen.has(mod.id) || full}
                      aria-label={m.modpacks_add_mod({ name: mod.name })}
                      onClick={() => add(mod)}
                    >
                      {chosen.has(mod.id) ? m.modpacks_added() : m.modpacks_add()}
                    </Button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        {autoDependencies.length > 0 ? (
          <div className="grid gap-2">
            <span className="text-sm font-medium text-fg">{m.modpacks_auto_title()}</span>
            <ul className="flex flex-wrap gap-2">
              {autoDependencies.map((item) => (
                <li key={item.mod.id}>
                  <Badge variant="neutral" size="sm">
                    {item.mod.name}
                  </Badge>
                </li>
              ))}
            </ul>
            <span className="text-xs text-fg-muted">{m.modpacks_auto_hint()}</span>
          </div>
        ) : null}
      </Panel>

      <div className="sticky bottom-0 z-10 flex flex-wrap items-center justify-between gap-3 border-t border-border bg-bg/95 py-3">
        <div>
          {modpack ? (
            confirmDelete ? (
              <span className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-fg">{m.modpacks_delete_confirm()}</span>
                <Button variant="danger" size="sm" onClick={() => void remove()}>
                  {m.modpacks_delete_yes()}
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setConfirmDelete(false)}>
                  {m.modpacks_cancel()}
                </Button>
              </span>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                icon={<Icon icon={Trash2} size={14} />}
                onClick={() => setConfirmDelete(true)}
              >
                {m.modpacks_delete()}
              </Button>
            )
          ) : null}
        </div>
        <span className="flex items-center gap-3">
          <span className="text-xs text-fg-muted">{m.modpacks_mods_count({ count: items.length })}</span>
          <Button loading={saving} disabled={!canSave} onClick={() => void save()}>
            {modpack ? m.modpacks_save() : m.modpacks_create()}
          </Button>
        </span>
      </div>
    </div>
  );
}
