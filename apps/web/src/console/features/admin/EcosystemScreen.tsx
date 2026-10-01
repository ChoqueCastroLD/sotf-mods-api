/**
 * `/ranger/admin/ecosystem` (PLAN §7.10 «Registro»: `LoaderRelease` and `EcosystemStatus`): the
 * RedLoader / RedManager releases and their status on every game build (works, partial, broken,
 * unknown), shown by the Patch Radar and the mod pages. Each cell saves on change (optimistic,
 * rolled back on failure); a note per cell explains partial or broken states.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { Dialog, DialogClose } from '@sotf/ui/dialog';
import { EmptyState } from '@sotf/ui/empty-state';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { Textarea } from '@sotf/ui/textarea';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ExternalLink, MessageSquareText, Network, Plus } from 'lucide-react';
import { type FormEvent, useMemo, useState } from 'react';
import { notify } from '../../lib/notify.ts';
import {
  adminApi,
  adminKeys,
  type Ecosystem,
  type EcosystemEntry,
  ecosystemQuery,
  type GameBuild,
  gameBuildsQuery,
  type LoaderRelease,
  loaderReleasesQuery,
} from './api.ts';
import { ADMIN_LIMITS, ECOSYSTEM_STATUSES, type EcosystemStatus, LOADER_NAMES, type LoaderName } from './constants.ts';
import {
  AdminHeader,
  formatDay,
  htmlToText,
  Panel,
  reportFailure,
  StatusDot,
  TableScroller,
  tdClasses,
  thClasses,
  todayIso,
} from './shared.tsx';

const RECENT_BUILDS = 8;

export function ecosystemStatusLabel(status: EcosystemStatus): string {
  switch (status) {
    case 'works':
      return m.admin_eco_status_works();
    case 'partial':
      return m.admin_eco_status_partial();
    case 'broken':
      return m.admin_eco_status_broken();
    default:
      return m.admin_eco_status_unknown();
  }
}

const STATUS_TONE = { works: 'success', partial: 'warning', broken: 'danger', unknown: 'muted' } as const;

const cellKey = (buildId: number, loaderId: number) => `${buildId}:${loaderId}`;

export function EcosystemScreen() {
  const queryClient = useQueryClient();
  const { data: builds } = useSuspenseQuery(gameBuildsQuery);
  const { data: loaders } = useSuspenseQuery(loaderReleasesQuery);
  const { data: ecosystem } = useSuspenseQuery(ecosystemQuery);
  const [showAll, setShowAll] = useState(false);
  const [adding, setAdding] = useState(false);
  const [noteFor, setNoteFor] = useState<{ build: GameBuild; loader: LoaderRelease } | null>(null);

  const entries = useMemo(() => {
    const map = new Map<string, EcosystemEntry>();
    for (const entry of ecosystem.entries) map.set(cellKey(entry.gameBuild.id, entry.loader.id), entry);
    return map;
  }, [ecosystem]);

  const sortedLoaders = useMemo(
    () =>
      [...loaders].sort(
        (a, b) =>
          a.name.localeCompare(b.name) ||
          (b.releasedAt ?? '').localeCompare(a.releasedAt ?? '') ||
          b.version.localeCompare(a.version, undefined, { numeric: true }),
      ),
    [loaders],
  );
  const visibleBuilds = showAll ? builds : builds.slice(0, RECENT_BUILDS);

  /** Optimistic write of one cell. */
  const save = async (build: GameBuild, loader: LoaderRelease, status: EcosystemStatus, noteMd?: string | null) => {
    const previous = queryClient.getQueryData<Ecosystem>(adminKeys.ecosystem);
    const key = cellKey(build.id, loader.id);
    queryClient.setQueryData<Ecosystem>(adminKeys.ecosystem, (data) => {
      if (!data) return data;
      const current = data.entries.find((entry) => cellKey(entry.gameBuild.id, entry.loader.id) === key);
      const updated: EcosystemEntry = {
        gameBuild: { id: build.id, label: build.label, isCurrent: build.isCurrent, isBreaking: build.isBreaking },
        loader,
        status,
        noteMd: noteMd !== undefined ? noteMd : (current?.noteMd ?? null),
        noteHtml: current?.noteHtml ?? null,
        updatedAt: new Date().toISOString(),
      };
      return {
        ...data,
        entries: current
          ? data.entries.map((entry) => (entry === current ? updated : entry))
          : [...data.entries, updated],
      };
    });
    try {
      const saved = await adminApi.putEcosystem({
        gameBuildId: build.id,
        loaderReleaseId: loader.id,
        status,
        ...(noteMd !== undefined ? { noteMd } : {}),
      });
      queryClient.setQueryData<Ecosystem>(adminKeys.ecosystem, (data) =>
        data
          ? {
              ...data,
              entries: data.entries.map((entry) =>
                cellKey(entry.gameBuild.id, entry.loader.id) === key ? saved : entry,
              ),
            }
          : data,
      );
      notify.success(
        m.admin_eco_saved({
          loader: `${loader.name} ${loader.version}`,
          build: build.label,
          status: ecosystemStatusLabel(status),
        }),
        { id: `eco-${key}` },
      );
    } catch (error) {
      queryClient.setQueryData(adminKeys.ecosystem, previous);
      reportFailure(error, m.admin_eco_save_failed());
      throw error;
    }
  };

  return (
    <div className="grid gap-6">
      <AdminHeader
        title={m.admin_ecosystem_title()}
        description={m.admin_ecosystem_description()}
        actions={
          <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setAdding(true)}>
            {m.admin_eco_add_release()}
          </Button>
        }
      />

      {builds.length === 0 || loaders.length === 0 ? (
        <EmptyState
          icon={<Icon icon={Network} size={32} />}
          title={m.admin_eco_empty_title()}
          description={builds.length === 0 ? m.admin_eco_empty_builds() : m.admin_eco_empty_releases()}
          action={
            builds.length === 0 ? (
              <Link to="/ranger/admin/game-builds" className="text-sm font-medium text-link underline">
                {m.admin_builds_title()}
              </Link>
            ) : (
              <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setAdding(true)}>
                {m.admin_eco_add_release()}
              </Button>
            )
          }
        />
      ) : (
        <Panel
          title={m.admin_eco_matrix_title()}
          description={m.admin_eco_matrix_description()}
          actions={
            builds.length > RECENT_BUILDS ? (
              <Button variant="ghost" size="sm" onClick={() => setShowAll((value) => !value)}>
                {showAll
                  ? m.admin_eco_show_recent({ count: RECENT_BUILDS })
                  : m.admin_eco_show_all({ count: builds.length })}
              </Button>
            ) : undefined
          }
        >
          <TableScroller label={m.admin_eco_matrix_title()}>
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">{m.admin_eco_matrix_title()}</caption>
              <thead className="bg-sunken">
                <tr>
                  <th scope="col" className={thClasses}>
                    {m.admin_eco_col_build()}
                  </th>
                  {sortedLoaders.map((loader) => (
                    <th key={loader.id} scope="col" className={thClasses}>
                      <span className="grid gap-0.5 normal-case">
                        <span>
                          {loader.name} {loader.version}
                        </span>
                        {loader.releasedAt ? (
                          <span className="text-2xs font-normal text-fg-subtle">{formatDay(loader.releasedAt)}</span>
                        ) : null}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleBuilds.map((build) => (
                  <tr key={build.id} className="border-t border-border">
                    <th scope="row" className={`${tdClasses} text-start font-semibold whitespace-nowrap text-fg`}>
                      <span className="flex items-center gap-2">
                        {build.label}
                        {build.isCurrent ? (
                          <Badge variant="success" size="sm">
                            {m.admin_builds_current()}
                          </Badge>
                        ) : null}
                      </span>
                    </th>
                    {sortedLoaders.map((loader) => {
                      const entry = entries.get(cellKey(build.id, loader.id));
                      const status: EcosystemStatus = entry?.status ?? 'unknown';
                      const note = htmlToText(entry?.noteHtml);
                      return (
                        <td key={loader.id} className={`${tdClasses} min-w-44`}>
                          <div className="flex items-center gap-1">
                            <Select<EcosystemStatus>
                              label={m.admin_eco_cell_label({
                                loader: `${loader.name} ${loader.version}`,
                                build: build.label,
                              })}
                              hideLabel
                              size="sm"
                              className="flex-1"
                              value={status}
                              options={ECOSYSTEM_STATUSES.map((value) => ({
                                value,
                                label: <StatusDot tone={STATUS_TONE[value]}>{ecosystemStatusLabel(value)}</StatusDot>,
                                textValue: ecosystemStatusLabel(value),
                              }))}
                              onValueChange={(next) => {
                                if (next && next !== status) void save(build, loader, next).catch(() => undefined);
                              }}
                            />
                            <Button
                              variant="icon"
                              size="sm"
                              aria-label={m.admin_eco_note_for({
                                loader: `${loader.name} ${loader.version}`,
                                build: build.label,
                              })}
                              title={note || undefined}
                              className={note ? 'text-signal' : undefined}
                              onClick={() => setNoteFor({ build, loader })}
                            >
                              <Icon icon={MessageSquareText} size={16} />
                            </Button>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroller>
        </Panel>
      )}

      {loaders.length > 0 ? (
        <Panel title={m.admin_eco_releases_title()} description={m.admin_eco_releases_description()}>
          <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {sortedLoaders.map((loader) => (
              <li
                key={loader.id}
                className="flex items-center gap-3 rounded-md border border-border bg-raised px-3 py-2"
              >
                <span className="grid min-w-0 flex-1">
                  <span className="truncate font-medium text-fg">
                    {loader.name} {loader.version}
                  </span>
                  <span className="text-xs text-fg-muted">
                    {loader.releasedAt ? formatDay(loader.releasedAt) : m.admin_eco_release_undated()}
                  </span>
                </span>
                {loader.url ? (
                  <a
                    href={loader.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-fg-muted hover:bg-fg/8 hover:text-fg md:min-h-8 md:min-w-8"
                    aria-label={m.admin_eco_release_link({ name: `${loader.name} ${loader.version}` })}
                  >
                    <Icon icon={ExternalLink} size={16} />
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </Panel>
      ) : null}

      <Dialog
        open={adding}
        onOpenChange={setAdding}
        title={m.admin_eco_add_release()}
        description={m.admin_eco_add_release_description()}
        size="md"
        sheetOnMobile
      >
        {adding ? (
          <LoaderReleaseForm
            onDone={() => setAdding(false)}
            onSaved={() => queryClient.invalidateQueries({ queryKey: adminKeys.loaders })}
          />
        ) : null}
      </Dialog>

      <Dialog
        open={noteFor !== null}
        onOpenChange={(open) => {
          if (!open) setNoteFor(null);
        }}
        title={
          noteFor
            ? m.admin_eco_note_for({
                loader: `${noteFor.loader.name} ${noteFor.loader.version}`,
                build: noteFor.build.label,
              })
            : ''
        }
        size="md"
        sheetOnMobile
      >
        {noteFor ? (
          <CellNoteForm
            key={cellKey(noteFor.build.id, noteFor.loader.id)}
            entry={entries.get(cellKey(noteFor.build.id, noteFor.loader.id)) ?? null}
            onSubmit={(status, note) => save(noteFor.build, noteFor.loader, status, note)}
            onDone={() => setNoteFor(null)}
          />
        ) : null}
      </Dialog>
    </div>
  );
}

function CellNoteForm({
  entry,
  onSubmit,
  onDone,
}: {
  entry: EcosystemEntry | null;
  /** `note`: undefined keeps the stored note, null removes it. */
  onSubmit: (status: EcosystemStatus, note: string | null | undefined) => Promise<void>;
  onDone: () => void;
}) {
  const [status, setStatus] = useState<EcosystemStatus>(entry?.status ?? 'unknown');
  const current = htmlToText(entry?.noteHtml);
  // The Markdown source (`noteMd`) is prefilled; emptying the field removes the note.
  const original = (entry?.noteMd ?? '').trim();
  const [note, setNote] = useState(entry?.noteMd ?? '');
  const [saving, setSaving] = useState(false);

  const submit = async (event: Pick<FormEvent, 'preventDefault'>, clear = false) => {
    event.preventDefault();
    if (saving) return;
    setSaving(true);
    try {
      const next = clear ? '' : note.trim();
      await onSubmit(status, next === original ? undefined : next || null);
      onDone();
    } catch {
      // Reported by `save`.
    } finally {
      setSaving(false);
    }
  };

  return (
    <form noValidate onSubmit={(event) => void submit(event)} className="grid gap-4">
      <Select<EcosystemStatus>
        label={m.admin_eco_field_status()}
        value={status}
        options={ECOSYSTEM_STATUSES.map((value) => ({
          value,
          label: <StatusDot tone={STATUS_TONE[value]}>{ecosystemStatusLabel(value)}</StatusDot>,
          textValue: ecosystemStatusLabel(value),
        }))}
        onValueChange={(next) => next && setStatus(next)}
      />
      {current && entry?.noteMd == null ? (
        <div className="grid gap-1 rounded-md border border-border bg-sunken p-3 text-sm">
          <p className="readout">{m.admin_eco_current_note()}</p>
          <p className="text-fg-muted">{current}</p>
        </div>
      ) : null}
      <Field label={m.admin_eco_field_note()} description={m.admin_markdown_hint()} optional>
        <Textarea
          value={note}
          maxLength={ADMIN_LIMITS.ecosystemNoteMax}
          minRows={3}
          onChange={(event) => setNote(event.currentTarget.value)}
        />
      </Field>
      <div className="flex flex-wrap justify-end gap-2">
        {current ? (
          <Button variant="ghost" disabled={saving} onClick={(event) => void submit(event, true)}>
            {m.admin_eco_clear_note()}
          </Button>
        ) : null}
        <DialogClose render={<Button variant="secondary" disabled={saving} />}>{m.admin_action_cancel()}</DialogClose>
        <Button
          type="submit"
          loading={saving}
          disabled={note.trim() === original && status === (entry?.status ?? 'unknown')}
        >
          {m.admin_action_save()}
        </Button>
      </div>
    </form>
  );
}

function LoaderReleaseForm({ onDone, onSaved }: { onDone: () => void; onSaved: () => Promise<unknown> }) {
  const [name, setName] = useState<LoaderName>('RedLoader');
  const [version, setVersion] = useState('');
  const [releasedAt, setReleasedAt] = useState(todayIso());
  const [url, setUrl] = useState('');
  const [errors, setErrors] = useState<{ version?: string; url?: string }>({});
  const [saving, setSaving] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (saving) return;
    const next: typeof errors = {};
    if (!version.trim()) next.version = m.admin_error_required();
    if (url.trim() && !/^https?:\/\/\S+$/i.test(url.trim())) next.url = m.admin_error_url();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSaving(true);
    try {
      const created = await adminApi.createLoaderRelease({
        name,
        version: version.trim(),
        ...(releasedAt ? { releasedAt } : {}),
        ...(url.trim() ? { url: url.trim() } : {}),
      });
      await onSaved();
      notify.success(m.admin_eco_release_saved({ name: `${created.name} ${created.version}` }));
      onDone();
    } catch (error) {
      reportFailure(error, m.admin_eco_release_failed());
    } finally {
      setSaving(false);
    }
  };

  return (
    <form noValidate onSubmit={(event) => void submit(event)} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Select<LoaderName>
          label={m.admin_eco_field_name()}
          value={name}
          options={LOADER_NAMES.map((value) => ({ value, label: value }))}
          onValueChange={(next) => next && setName(next)}
        />
        <Field label={m.admin_eco_field_version()} error={errors.version}>
          <Input
            value={version}
            maxLength={ADMIN_LIMITS.loaderVersionMax}
            placeholder="0.8.7"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck={false}
            autoFocus
            onChange={(event) => setVersion(event.currentTarget.value)}
          />
        </Field>
      </div>
      <Field label={m.admin_eco_field_released()} optional>
        <Input type="date" value={releasedAt} onChange={(event) => setReleasedAt(event.currentTarget.value)} />
      </Field>
      <Field label={m.admin_eco_field_url()} error={errors.url} optional>
        <Input
          type="url"
          inputMode="url"
          value={url}
          placeholder="https://github.com/ToniMacaroni/RedLoader/releases/…"
          onChange={(event) => setUrl(event.currentTarget.value)}
        />
      </Field>
      <div className="flex flex-wrap justify-end gap-2">
        <DialogClose render={<Button variant="secondary" disabled={saving} />}>{m.admin_action_cancel()}</DialogClose>
        <Button type="submit" loading={saving}>
          {m.admin_eco_add_release()}
        </Button>
      </div>
    </form>
  );
}
