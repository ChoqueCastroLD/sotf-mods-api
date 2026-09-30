/**
 * Dependencies (PLAN §7.5 step 3): the manifest's `dependencies` are always `required` (shown
 * locked); the creator adds optional ones and conflicts — or requirements RedLoader does not know
 * about — by searching the site or typing a manifest id.
 */
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { useQuery } from '@tanstack/react-query';
import { Lock, Plus, Search, Trash2 } from 'lucide-react';
import { useDeferredValue, useId, useState } from 'react';
import { ut } from '../i18n.ts';
import { DEPENDENCY_KIND_LABELS } from '../labels.ts';
import { modSearchQuery } from '../lib/queries.ts';
import { DEPENDENCY_KINDS, type DependencyKind, type DraftDependency } from '../types.ts';

const MANIFEST_ID = /^[A-Za-z0-9._-]{1,128}$/;
const MAX_DEPENDENCIES = 50;

export interface DependencyPickerProps {
  id: string;
  /** Manifest id of the mod itself (it cannot depend on itself). */
  selfId: string | null;
  manifestDependencies: readonly string[];
  value: readonly DraftDependency[];
  onChange: (value: DraftDependency[]) => void;
}

export function DependencyPicker({ id, selfId, manifestDependencies, value, onChange }: DependencyPickerProps) {
  const [query, setQuery] = useState('');
  const [manual, setManual] = useState('');
  const [manualError, setManualError] = useState<string | null>(null);
  const deferred = useDeferredValue(query.trim());
  const search = useQuery(modSearchQuery(deferred));
  const listId = useId();
  const kindOptions = DEPENDENCY_KINDS.map((kind) => ({ value: kind, label: DEPENDENCY_KIND_LABELS[kind]() }));
  const taken = new Set([...manifestDependencies, ...value.map((d) => d.manifestId), ...(selfId ? [selfId] : [])]);
  const full = value.length >= MAX_DEPENDENCIES;

  const add = (manifestId: string, kind: DependencyKind = 'optional') => {
    if (taken.has(manifestId) || full) return;
    onChange([...value, { manifestId, kind, versionRange: null }]);
  };

  const addManual = () => {
    const idValue = manual.trim();
    if (!MANIFEST_ID.test(idValue)) return setManualError(ut('upload_dependency_invalid_id'));
    if (taken.has(idValue)) return setManualError(ut('upload_dependency_duplicate'));
    add(idValue);
    setManual('');
    setManualError(null);
  };

  const results = (search.data?.items ?? []).filter((mod) => mod.kind !== 'build');

  return (
    <div id={id} tabIndex={-1} className="flex flex-col gap-4 outline-none">
      <ul className="flex flex-col gap-2" aria-label={ut('upload_dependencies_label')}>
        {manifestDependencies.map((manifestId) => (
          <li
            key={`manifest:${manifestId}`}
            className="flex flex-wrap items-center gap-2 rounded-md border border-border bg-raised px-3 py-2"
          >
            <Icon icon={Lock} size={14} className="text-fg-subtle" />
            <span className="readout text-fg">{manifestId}</span>
            <Badge variant="neutral" size="sm">
              {DEPENDENCY_KIND_LABELS.required()}
            </Badge>
            <span className="text-xs text-fg-muted">{ut('upload_dependency_from_manifest')}</span>
          </li>
        ))}
        {value.map((dep, index) => (
          <li
            key={dep.manifestId}
            className="grid grid-cols-1 items-center gap-2 rounded-md border border-border bg-raised px-3 py-2 sm:grid-cols-[1fr_11rem_9rem_auto]"
          >
            <span className="readout min-w-0 break-all text-fg">{dep.manifestId}</span>
            <Select<DependencyKind>
              label={ut('upload_dependency_kind', { id: dep.manifestId })}
              hideLabel
              size="sm"
              options={kindOptions}
              value={dep.kind ?? 'required'}
              onValueChange={(kind) => {
                if (kind) onChange(value.map((d, i) => (i === index ? { ...d, kind } : d)));
              }}
            />
            <Input
              size="sm"
              aria-label={ut('upload_dependency_range', { id: dep.manifestId })}
              placeholder={ut('upload_dependency_range_placeholder')}
              maxLength={64}
              value={dep.versionRange ?? ''}
              onChange={(event) => {
                const range = event.currentTarget.value;
                onChange(value.map((d, i) => (i === index ? { ...d, versionRange: range.trim() ? range : null } : d)));
              }}
            />
            <Button
              variant="icon"
              size="sm"
              aria-label={ut('upload_dependency_remove', { id: dep.manifestId })}
              onClick={() => onChange(value.filter((_, i) => i !== index))}
            >
              <Icon icon={Trash2} size={14} />
            </Button>
          </li>
        ))}
        {manifestDependencies.length === 0 && value.length === 0 ? (
          <li className="text-sm text-fg-muted">{ut('upload_dependencies_none')}</li>
        ) : null}
      </ul>

      <div className="flex flex-col gap-2">
        <Input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
          placeholder={ut('upload_dependency_search')}
          aria-label={ut('upload_dependency_search')}
          aria-controls={listId}
          icon={<Icon icon={Search} size={14} />}
          disabled={full}
        />
        <div id={listId} aria-live="polite">
          {deferred.length >= 2 && search.isSuccess && results.length === 0 ? (
            <p className="text-sm text-fg-muted">{ut('upload_dependency_no_results')}</p>
          ) : null}
          {search.isError ? <p className="text-sm text-danger">{ut('upload_dependency_search_failed')}</p> : null}
          {results.length > 0 && deferred.length >= 2 ? (
            <ul className="flex flex-col divide-y divide-border rounded-md border border-border">
              {results.map((mod) => (
                <li key={mod.id} className="flex flex-wrap items-center justify-between gap-2 px-3 py-2">
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-medium text-fg">{mod.name}</span>
                    <span className="readout truncate text-fg-subtle">
                      {mod.manifestId} · @{mod.userHandle}
                    </span>
                  </span>
                  <span className="flex gap-1.5">
                    {(['optional', 'required', 'conflicts'] as const).map((kind) => (
                      <Button
                        key={kind}
                        variant="outline"
                        size="sm"
                        disabled={taken.has(mod.manifestId) || full}
                        onClick={() => add(mod.manifestId, kind)}
                        aria-label={ut('upload_dependency_add_as', {
                          name: mod.name,
                          kind: DEPENDENCY_KIND_LABELS[kind](),
                        })}
                      >
                        {DEPENDENCY_KIND_LABELS[kind]()}
                      </Button>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-start gap-2">
          <Input
            value={manual}
            onChange={(event) => {
              setManual(event.currentTarget.value);
              setManualError(null);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                addManual();
              }
            }}
            aria-label={ut('upload_dependency_manual')}
            placeholder={ut('upload_dependency_manual')}
            aria-invalid={manualError ? true : undefined}
            className="max-w-xs"
            disabled={full}
          />
          <Button variant="outline" icon={<Icon icon={Plus} size={14} />} onClick={addManual} disabled={full}>
            {ut('upload_dependency_add')}
          </Button>
        </div>
        {manualError ? (
          <p role="alert" className="text-xs font-medium text-danger">
            {manualError}
          </p>
        ) : null}
      </div>
    </div>
  );
}
