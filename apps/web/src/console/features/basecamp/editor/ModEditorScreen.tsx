/**
 * `/basecamp/mods/$modId` — the mod editor (PLAN §7.5 «Gestión de mods»): listing, media, versions,
 * compatibility and status, with the listing quality score and the preflight rows of the API on
 * top. `?tab=` keeps the open tab in the URL; all panels stay mounted so switching tabs keeps
 * unsaved edits, and leaving the editor with unsaved edits asks first.
 */
import { Banner } from '@sotf/ui/banner';
import { buttonClasses } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { type TabItem, Tabs } from '@sotf/ui/tabs';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { AlertTriangle, ArrowLeft, ChartLine, CheckCircle2, ExternalLink, Plus } from 'lucide-react';
import { useCallback, useState } from 'react';
import { DomainI18nBridge } from '../../../components/DomainI18nBridge.tsx';
import { useDocumentTitle } from '../../../hooks/use-document-title.ts';
import { bdt, useBundlesMessages } from '../../bundles/i18n.ts';
import { useUploadMessages } from '../../upload/i18n.ts';
import { preflightLabel } from '../../upload/labels.ts';
import { type StudioMod, studioModQuery, teamQuery } from '../api.ts';
import { number, percent, publicHref } from '../format.ts';
import { bt, useBasecampMessages } from '../i18n.ts';
import { kt, useKnowledgeMessages } from '../knowledge-i18n.ts';
import { Meter, ModThumb, StatusBadge } from '../shared.tsx';
import { BundlesTab } from './BundlesTab.tsx';
import { CompatTab } from './CompatTab.tsx';
import { KnowledgeTab } from './KnowledgeTab.tsx';
import { ListingTab } from './ListingTab.tsx';
import { MediaTab } from './MediaTab.tsx';
import { SettingsTab } from './SettingsTab.tsx';
import { TeamTab } from './TeamTab.tsx';
import { COAUTHOR_TABS, type EditorTab } from './tabs.ts';
import { UnsavedGuard } from './UnsavedGuard.tsx';
import { VersionsTab } from './VersionsTab.tsx';

function Quality({ studio }: { studio: StudioMod }) {
  const issues = studio.preflight.filter((row) => row.severity !== 'ok');
  return (
    <section aria-labelledby="bc-quality-title" className="grid gap-3 rounded-lg border border-border bg-surface p-4">
      <h2 id="bc-quality-title" className="readout text-fg">
        {bt('basecamp_editor_quality')}
      </h2>
      <Meter
        value={studio.qualityScore}
        max={100}
        label={bt('basecamp_editor_quality')}
        valueText={percent(studio.qualityScore / 100)}
      />
      {issues.length === 0 ? (
        <p className="flex items-center gap-2 text-sm text-fg-muted">
          <Icon icon={CheckCircle2} size={16} className="text-success" />
          {bt('basecamp_editor_quality_ok')}
        </p>
      ) : (
        <ul className="grid gap-1.5">
          {issues.map((row) => (
            <li key={`${row.field}:${row.code}`} className="flex items-start gap-2 text-sm text-fg">
              <Icon
                icon={AlertTriangle}
                size={16}
                className={row.severity === 'error' ? 'mt-0.5 text-danger' : 'mt-0.5 text-warning'}
              />
              <span>{preflightLabel(row.code)}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function StatusBanner({ studio }: { studio: StudioMod }) {
  switch (studio.mod.status) {
    case 'pending':
      return (
        <Banner tone="info" title={bt('basecamp_editor_pending_title')}>
          {bt('basecamp_editor_pending_text')}
        </Banner>
      );
    case 'rejected':
      return (
        <Banner tone="warning" title={bt('basecamp_editor_rejected_title')}>
          {studio.statusReason
            ? bt('basecamp_editor_rejected_reason', { reason: studio.statusReason })
            : bt('basecamp_editor_rejected_text')}
        </Banner>
      );
    case 'removed':
      return (
        <Banner tone="danger" title={bt('basecamp_editor_removed_title')}>
          {studio.statusReason
            ? bt('basecamp_editor_rejected_reason', { reason: studio.statusReason })
            : bt('basecamp_editor_removed_text')}
        </Banner>
      );
    default:
      return null;
  }
}

export function ModEditorScreen({
  modId,
  tab,
  onTab,
}: {
  modId: number;
  tab: EditorTab;
  onTab: (tab: EditorTab) => void;
}) {
  useBasecampMessages();
  useKnowledgeMessages();
  useUploadMessages();
  useBundlesMessages();
  const { data: studio } = useSuspenseQuery(studioModQuery(modId));
  const { data: team } = useSuspenseQuery(teamQuery(modId));
  useDocumentTitle(bt('basecamp_editor_title', { name: studio.mod.name }));
  const [dirtyTabs, setDirtyTabs] = useState<ReadonlySet<EditorTab>>(new Set());
  const markDirty = useCallback(
    (which: EditorTab) => (dirty: boolean) =>
      setDirtyTabs((current) => {
        if (current.has(which) === dirty) return current;
        const next = new Set(current);
        if (dirty) next.add(which);
        else next.delete(which);
        return next;
      }),
    [],
  );
  const [onListingDirty] = useState(() => markDirty('listing'));
  const [onMediaDirty] = useState(() => markDirty('media'));
  const [onCompatDirty] = useState(() => markDirty('compat'));
  const [onKnowledgeDirty] = useState(() => markDirty('knowledge'));

  const mod = studio.mod;
  const publicPage = mod.status === 'published' || mod.status === 'unlisted';
  const removed = mod.status === 'removed';
  // A removed mod can no longer be edited: only its versions and status remain.
  const coauthor = team.viewerRole === 'coauthor';
  const allowed = (which: string) => !coauthor || (COAUTHOR_TABS as readonly string[]).includes(which);
  const current: EditorTab = coauthor
    ? allowed(tab)
      ? tab
      : 'versions'
    : removed && tab !== 'versions'
      ? 'settings'
      : tab;
  const unsaved = (which: EditorTab) => (dirtyTabs.has(which) ? '•' : undefined);
  const withBadge = (which: EditorTab) => {
    const badge = unsaved(which);
    return badge ? { badge } : {};
  };

  return (
    <DomainI18nBridge>
      <div className="grid gap-6">
        <UnsavedGuard dirty={dirtyTabs.size > 0} />
        <Link
          to="/basecamp/mods"
          className="inline-flex items-center gap-1 text-sm text-fg-muted hover:text-fg max-md:hidden"
        >
          <Icon icon={ArrowLeft} size={16} />
          {bt('basecamp_editor_back')}
        </Link>
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4">
            <ModThumb url={mod.thumbnail?.url} className="hidden w-32 sm:inline-flex" />
            <div className="grid min-w-0 gap-1">
              <p className="readout text-signal">{bt('basecamp_editor_readout')}</p>
              <h1 className="font-display-caps text-display-xs text-fg break-words">{mod.name}</h1>
              <p className="flex flex-wrap items-center gap-2 text-xs text-fg-muted">
                <StatusBadge status={mod.status} />
                {mod.latestVersion ? <span className="font-mono">v{mod.latestVersion.version}</span> : null}
                <span>{bt('basecamp_editor_downloads', { count: mod.downloads, display: number(mod.downloads) })}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {publicPage ? (
              <a
                href={publicHref(mod.canonicalPath)}
                target="_blank"
                rel="noopener"
                className={buttonClasses({ variant: 'ghost', size: 'sm' })}
              >
                <Icon icon={ExternalLink} size={16} />
                {bt('basecamp_mods_action_view')}
                <span className="sr-only">{bt('basecamp_new_tab')}</span>
              </a>
            ) : null}
            {coauthor ? null : (
              <Link
                to="/basecamp/analytics"
                search={{ mod: mod.id }}
                className={buttonClasses({ variant: 'ghost', size: 'sm' })}
              >
                <Icon icon={ChartLine} size={16} />
                {bt('basecamp_mods_action_analytics')}
              </Link>
            )}
            {mod.kind !== 'build' && !removed ? (
              <Link
                to="/basecamp/mods/$modId/new-version"
                params={{ modId: String(mod.id) }}
                className={buttonClasses({ variant: 'primary', size: 'sm' })}
              >
                <Icon icon={Plus} size={16} />
                {bt('basecamp_mods_new_version')}
              </Link>
            ) : null}
          </div>
        </header>

        <StatusBanner studio={studio} />
        {coauthor ? (
          <Banner tone="info" title={kt('mod_knowledge_editor_coauthor_title')}>
            {kt('mod_knowledge_editor_coauthor_text', { owner: team.owner.displayName || team.owner.handle })}
          </Banner>
        ) : (
          <Quality studio={studio} />
        )}

        <Tabs<EditorTab>
          label={bt('basecamp_editor_tabs')}
          value={current}
          onValueChange={onTab}
          keepMounted
          tabs={
            [
              {
                value: 'listing',
                label: bt('basecamp_editor_tab_listing'),
                ...withBadge('listing'),
                disabled: removed,
                content: (
                  <div className="pt-5">
                    <ListingTab studio={studio} onDirty={onListingDirty} />
                  </div>
                ),
              },
              {
                value: 'media',
                label: bt('basecamp_editor_tab_media'),
                ...withBadge('media'),
                disabled: removed,
                content: (
                  <div className="pt-5">
                    <MediaTab studio={studio} onDirty={onMediaDirty} />
                  </div>
                ),
              },
              {
                value: 'versions',
                label: bt('basecamp_editor_tab_versions', { count: studio.versions.length }),
                content: (
                  <div className="pt-5">
                    <VersionsTab studio={studio} />
                  </div>
                ),
              },
              {
                value: 'knowledge',
                label: kt('mod_knowledge_tab_knowledge'),
                ...withBadge('knowledge'),
                disabled: removed,
                content: (
                  <div className="pt-5">
                    <KnowledgeTab modId={mod.id} onDirty={onKnowledgeDirty} />
                  </div>
                ),
              },
              {
                value: 'team',
                label: kt('mod_knowledge_tab_team'),
                disabled: removed,
                content: (
                  <div className="pt-5">
                    <TeamTab modId={mod.id} />
                  </div>
                ),
              },
              {
                value: 'compat',
                label: bt('basecamp_editor_tab_compat'),
                ...withBadge('compat'),
                disabled: removed,
                content: (
                  <div className="pt-5">
                    <CompatTab studio={studio} onDirty={onCompatDirty} />
                  </div>
                ),
              },
              {
                value: 'bundles',
                label: bdt('bundles_tab'),
                disabled: removed || mod.status === 'pending' || mod.status === 'rejected',
                content: (
                  <div className="pt-5">
                    <BundlesTab studio={studio} />
                  </div>
                ),
              },
              {
                value: 'settings',
                label: bt('basecamp_editor_tab_settings'),
                content: (
                  <div className="pt-5">
                    <SettingsTab studio={studio} />
                  </div>
                ),
              },
            ].filter((entry) => allowed(entry.value)) as TabItem<EditorTab>[]
          }
        />
      </div>
    </DomainI18nBridge>
  );
}
