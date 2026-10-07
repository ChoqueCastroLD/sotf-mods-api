/**
 * Game builds the creator tested (new mod, new version and the editor). The list comes from the
 * public registry (`GET /game-builds`, filled by the Steam sync and the admins), newest first with
 * the release date. Nothing is preselected; «Latest» adds the current build in one click. With no
 * builds, or when the registry cannot be reached, the step explains it and the creator continues
 * (the builds can be added later from the mod editor).
 */

import { formatDate } from '@sotf/i18n/format';
import { Button } from '@sotf/ui/button';
import { Checkbox } from '@sotf/ui/checkbox';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Skeleton } from '@sotf/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { activeLocale } from '../../../lib/messages.ts';
import { ut } from '../i18n.ts';
import { gameBuildsQuery } from '../lib/queries.ts';

/** `ModVersionCompat` and the draft keep at most this many tested builds. */
export const MAX_TESTED_BUILDS = 20;

interface BuildRow {
  id: number;
  label: string;
  releasedAt: string;
  isCurrent: boolean;
  isBreaking: boolean;
}

function releaseDate(iso: string): string {
  try {
    return formatDate(activeLocale(), iso, 'medium', { timeZone: 'UTC' });
  } catch {
    return iso;
  }
}

export interface GameBuildPickerProps {
  value: readonly number[];
  onChange: (ids: number[]) => void;
}

export function GameBuildPicker({ value, onChange }: GameBuildPickerProps) {
  const builds = useQuery(gameBuildsQuery);
  const [query, setQuery] = useState('');

  const rows = useMemo<BuildRow[]>(
    () => [...(builds.data?.items ?? [])].sort((a, b) => b.releasedAt.localeCompare(a.releasedAt) || b.id - a.id),
    [builds.data],
  );
  const needle = query.trim().toLowerCase();
  const shown = needle ? rows.filter((row) => row.label.toLowerCase().includes(needle)) : rows;

  const heading = (
    <>
      <legend className="mb-1 text-sm font-medium text-fg">{ut('upload_game_builds_label')}</legend>
      <p className="text-xs text-fg-muted">{ut('upload_game_builds_hint')}</p>
    </>
  );

  if (builds.isPending) {
    return (
      <fieldset id="upload-game-builds" tabIndex={-1} className="flex flex-col gap-2 outline-none">
        {heading}
        <Skeleton className="h-32 w-full" />
      </fieldset>
    );
  }

  if (builds.isError) {
    return (
      <fieldset id="upload-game-builds" tabIndex={-1} className="flex flex-col gap-2 outline-none">
        {heading}
        <div className="flex flex-wrap items-center gap-3 rounded-md border border-border bg-raised px-3 py-2.5">
          <p className="min-w-0 flex-1 text-sm text-fg-muted">{ut('upload_game_builds_failed')}</p>
          <Button variant="secondary" size="sm" loading={builds.isFetching} onClick={() => void builds.refetch()}>
            {ut('upload_game_builds_retry')}
          </Button>
        </div>
      </fieldset>
    );
  }

  if (rows.length === 0) {
    return (
      <fieldset id="upload-game-builds" tabIndex={-1} className="flex flex-col gap-2 outline-none">
        {heading}
        <p className="rounded-md border border-border bg-raised px-3 py-2.5 text-sm text-fg-muted">
          {ut('upload_game_builds_empty')}
        </p>
      </fieldset>
    );
  }

  const selected = new Set(value);
  const latest = rows.find((row) => row.isCurrent) ?? rows[0];
  const full = value.length >= MAX_TESTED_BUILDS;
  const toggle = (id: number, checked: boolean) =>
    onChange(checked ? (selected.has(id) ? [...value] : [...value, id]) : value.filter((entry) => entry !== id));
  const searchable = rows.length > 8;
  // A tall list keeps its height while filtering, so the page below does not move.
  const tall = rows.length > 7;

  return (
    <fieldset id="upload-game-builds" tabIndex={-1} className="flex flex-col gap-2 outline-none">
      {heading}
      <div className="flex flex-wrap items-center gap-2">
        {searchable ? (
          <div className="min-w-44 flex-1">
            <Input
              type="search"
              size="sm"
              icon={<Icon icon={Search} size={16} />}
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
              placeholder={ut('upload_game_builds_search')}
              aria-label={ut('upload_game_builds_search')}
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        ) : (
          <span className="flex-1" />
        )}
        <Button
          variant="secondary"
          size="sm"
          disabled={!latest || selected.has(latest.id) || (full && !selected.has(latest.id))}
          onClick={() => latest && toggle(latest.id, true)}
        >
          {ut('upload_game_builds_latest', { label: latest?.label ?? '' })}
        </Button>
        <Button variant="ghost" size="sm" disabled={value.length === 0} onClick={() => onChange([])}>
          {ut('upload_game_builds_clear')}
        </Button>
      </div>
      <div
        className={`overflow-y-auto rounded-md border border-border bg-sunken p-1 ${tall ? 'h-64' : 'max-h-64'}`}
        tabIndex={-1}
      >
        {shown.length === 0 ? (
          <p className="px-3 py-4 text-sm text-fg-muted">
            {ut('upload_game_builds_none_found', { query: query.trim() })}
          </p>
        ) : (
          <ul className="flex flex-col">
            {shown.map((build) => (
              <li key={build.id} className="rounded-sm px-2 py-1 hover:bg-fg/5">
                <Checkbox
                  label={
                    <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <span className="font-medium">
                        {build.isCurrent ? ut('upload_game_build_current', { label: build.label }) : build.label}
                      </span>
                      <span className="text-xs text-fg-muted">{releaseDate(build.releasedAt)}</span>
                      {build.isBreaking ? (
                        <span className="text-xs text-warning">{ut('upload_game_build_breaking')}</span>
                      ) : null}
                    </span>
                  }
                  checked={selected.has(build.id)}
                  disabled={full && !selected.has(build.id)}
                  onCheckedChange={(checked) => toggle(build.id, checked)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="text-xs text-fg-muted" aria-live="polite">
        {full
          ? ut('upload_game_builds_max', { max: MAX_TESTED_BUILDS })
          : ut('upload_game_builds_selected', { count: value.length })}
      </p>
    </fieldset>
  );
}
