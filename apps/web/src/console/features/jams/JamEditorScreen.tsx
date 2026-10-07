/**
 * `/moderation/jams/$jamId` — the jam editor. One form state for the whole jam and a tab per
 * concern, so nothing is lost when switching: overview (phase, what is missing, the next step),
 * details (texts and banner), schedule, rules (who can enter and vote, categories), entries
 * (moderation), results and a preview of the public page. A bar at the bottom saves or discards;
 * leaving with unsaved changes asks first. Jam texts are single-language; only the chrome is
 * translated.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { Tabs } from '@sotf/ui/tabs';
import { toast } from '@sotf/ui/toast';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { getRouteApi } from '@tanstack/react-router';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { reportFailure } from '../admin/shared.tsx';
import { UnsavedGuard } from '../admin/UnsavedGuard.tsx';
import { useListSearch } from '../ranger/controls.tsx';
import { useUploadMessages } from '../upload/i18n.ts';
import { adminJamQuery, type EntriesView, jamKeys, jamsAdminApi } from './api.ts';
import {
  errorCount,
  errorTabs,
  type FormErrors,
  formFromJam,
  isDirty,
  type JamForm,
  TAB_IDS,
  type TabId,
  toUpdateBody,
  validate,
} from './form.ts';
import { JamDetailsTab } from './JamDetailsTab.tsx';
import { JamEntriesPanel } from './JamEntriesPanel.tsx';
import { JamOverviewTab } from './JamOverviewTab.tsx';
import { JamPreviewTab } from './JamPreviewTab.tsx';
import { JamResultsTab } from './JamResultsTab.tsx';
import { JamRulesTab } from './JamRulesTab.tsx';
import { JamScheduleTab } from './JamScheduleTab.tsx';
import { jamPhaseLabel, jamPhaseVariant } from './phase.ts';

const route = getRouteApi('/moderation/jams/$jamId');

/** Tabs that edit the form (they get the save bar). */
const FORM_TABS: readonly TabId[] = ['details', 'schedule', 'rules'];

function tabLabel(tab: TabId): string {
  switch (tab) {
    case 'overview':
      return m.jams_editor_tab_overview();
    case 'details':
      return m.jams_editor_details_title();
    case 'schedule':
      return m.jams_editor_schedule_title();
    case 'rules':
      return m.jams_editor_rules_title();
    case 'entries':
      return m.jams_entries_admin_title();
    case 'results':
      return m.jams_results_title();
    case 'preview':
      return m.jams_editor_tab_preview();
  }
}

export interface TabProps {
  jam: Awaited<ReturnType<typeof jamsAdminApi.update>>;
  form: JamForm;
  update: (patch: Partial<JamForm>) => void;
  errors: FormErrors;
  dirty: boolean;
  goTo: (tab: TabId) => void;
}

export function JamEditorScreen() {
  useUploadMessages();
  const { jamId } = route.useParams();
  const search = route.useSearch();
  const id = Number(jamId);
  const { data: jam } = useSuspenseQuery(adminJamQuery(id));
  const queryClient = useQueryClient();
  const patch = useListSearch('.');
  const tab: TabId = search.tab ?? 'overview';

  // One form for every tab. A refetched jam replaces the form only when nothing was edited.
  const [baseline, setBaseline] = useState(() => formFromJam(jam));
  const [form, setForm] = useState(baseline);
  const baselineRef = useRef(baseline);
  useEffect(() => {
    const next = formFromJam(jam);
    setForm((current) => (isDirty(current, baselineRef.current) ? current : next));
    baselineRef.current = next;
    setBaseline(next);
  }, [jam]);

  const dirty = isDirty(form, baseline);
  const categoriesLocked = jam.phase === 'voting' || jam.phase === 'results' || jam.phase === 'archived';
  const errors = useMemo(() => validate(form, { categories: categoriesLocked }), [form, categoriesLocked]);
  const tabsWithErrors = useMemo(() => errorTabs(errors), [errors]);
  const [saving, setSaving] = useState(false);

  const update = (next: Partial<JamForm>) => setForm((current) => ({ ...current, ...next }));
  const goTo = (next: TabId) => patch({ tab: next === 'overview' ? undefined : next });

  const save = async () => {
    if (saving || !dirty) return;
    if (errorCount(errors) > 0) {
      const first = TAB_IDS.find((candidate) => tabsWithErrors.has(candidate));
      toast.error(m.jams_editor_error_summary());
      if (first && first !== tab) goTo(first);
      return;
    }
    setSaving(true);
    try {
      await jamsAdminApi.update(jam.id, toUpdateBody(form, categoriesLocked));
      await queryClient.invalidateQueries({ queryKey: jamKeys.all });
      toast.success(m.jams_editor_saved());
    } catch (error) {
      reportFailure(error, m.jams_editor_save_failed());
    } finally {
      setSaving(false);
    }
  };

  const discard = () => {
    setForm(baseline);
    toast.info(m.jams_editor_discarded());
  };

  const entriesView: EntriesView = {
    ...(search.page ? { page: search.page } : {}),
    ...(search.size ? { size: search.size } : {}),
    ...(search.status ? { status: search.status } : {}),
    ...(search.q ? { q: search.q } : {}),
    ...(search.sort ? { sort: search.sort } : {}),
  };

  const tabProps: TabProps = { jam, form, update, errors, dirty, goTo };
  const content: Record<TabId, React.ReactNode> = {
    overview: <JamOverviewTab {...tabProps} />,
    details: <JamDetailsTab {...tabProps} />,
    schedule: <JamScheduleTab {...tabProps} />,
    rules: <JamRulesTab {...tabProps} categoriesLocked={categoriesLocked} />,
    entries: <JamEntriesPanel jamId={jam.id} view={entriesView} />,
    results: <JamResultsTab {...tabProps} />,
    preview: <JamPreviewTab {...tabProps} />,
  };

  return (
    <div className="grid gap-5">
      <UnsavedGuard dirty={dirty} />
      <header className="grid gap-3">
        <a
          href="/moderation/jams"
          className="inline-flex items-center gap-1 justify-self-start text-sm text-fg-muted hover:text-link"
        >
          <Icon icon={ArrowLeft} size={16} className="rtl:rotate-180" />
          {m.jams_editor_back()}
        </a>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="grid gap-1.5">
            <h1 className="text-2xl font-bold break-words text-fg">{jam.title}</h1>
            <p className="flex flex-wrap items-center gap-3 text-sm text-fg-muted">
              <Badge variant={jamPhaseVariant(jam.phase)} size="sm">
                {jamPhaseLabel(jam.phase)}
              </Badge>
              <span className="font-mono text-xs">/jams/{jam.slug}</span>
            </p>
          </div>
          {jam.phase !== 'draft' ? (
            <a
              href={`/jams/${jam.slug}`}
              className="inline-flex items-center gap-1 rounded-md border border-border-strong px-3 py-2 text-sm font-semibold text-fg hover:bg-fg/6"
              target="_blank"
              rel="noreferrer"
            >
              {m.jams_editor_view_public()}
              <Icon icon={ExternalLink} size={16} />
              <span className="sr-only">{m.ranger_new_tab()}</span>
            </a>
          ) : null}
        </div>
      </header>

      <Tabs<TabId>
        label={m.jams_editor_tabs_label()}
        value={tab}
        onValueChange={goTo}
        tabs={TAB_IDS.map((value) => ({
          value,
          label: (
            <>
              {tabLabel(value)}
              {tabsWithErrors.has(value) ? (
                <>
                  <span aria-hidden="true" className="size-2 rounded-full bg-danger" />
                  <span className="sr-only">{m.jams_editor_tab_attention()}</span>
                </>
              ) : null}
            </>
          ),
          content: <div className="grid gap-6 pt-5">{content[value]}</div>,
        }))}
      />

      {FORM_TABS.includes(tab) ? (
        <div className="sticky bottom-0 -mx-4 flex flex-wrap items-center justify-end gap-2 border-t border-border bg-bg/95 px-4 py-3 backdrop-blur md:mx-0 md:px-0">
          <p className="me-auto text-sm text-fg-muted" aria-live="polite">
            {dirty ? m.jams_editor_unsaved() : m.jams_editor_no_changes()}
          </p>
          <Button variant="ghost" disabled={!dirty || saving} onClick={discard}>
            {m.jams_editor_discard()}
          </Button>
          <Button loading={saving} disabled={!dirty} onClick={() => void save()}>
            {m.jams_editor_save()}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
