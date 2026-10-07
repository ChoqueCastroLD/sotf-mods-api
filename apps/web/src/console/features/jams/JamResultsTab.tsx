/**
 * Results tab: whether the results are computed and public, the button to compute or recompute
 * them (once voting has closed), and the entries ranked by valid votes (staff only: the public
 * page shows weighted scores after publishing).
 */
import { JAM_PHASES } from '@sotf/contracts/jams';
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { toast } from '@sotf/ui/toast';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Trophy } from 'lucide-react';
import { useState } from 'react';
import { formatInstant, reportFailure } from '../admin/shared.tsx';
import { adminEntriesQuery, jamKeys, jamsAdminApi } from './api.ts';
import type { TabProps } from './JamEditorScreen.tsx';
import { jamPhaseLabel } from './phase.ts';

const RESULTS_INDEX = JAM_PHASES.indexOf('results');

export function JamResultsTab({ jam }: TabProps) {
  const queryClient = useQueryClient();
  const [busy, setBusy] = useState(false);
  const ready = JAM_PHASES.indexOf(jam.phase) >= RESULTS_INDEX;
  const ranking = useQuery({
    ...adminEntriesQuery(jam.id, { status: 'active', sort: 'votes', size: 25 }),
    enabled: ready || jam.phase === 'voting',
  });

  const publish = async () => {
    setBusy(true);
    try {
      await jamsAdminApi.publishResults(jam.id);
      await queryClient.invalidateQueries({ queryKey: jamKeys.all });
      toast.success(m.jams_editor_results_done());
    } catch (error) {
      reportFailure(error, m.jams_editor_results_failed());
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid max-w-3xl gap-6">
      <section aria-labelledby="jam-results-status" className="grid gap-3">
        <h2 id="jam-results-status" className="text-base font-semibold text-fg">
          {m.jams_results_title()}
        </h2>
        <p className="text-sm text-fg-muted">
          {!ready
            ? m.jams_results_not_ready({ phase: jamPhaseLabel('results') })
            : jam.resultsPublishedAt
              ? m.jams_results_published({ date: formatInstant(jam.resultsPublishedAt) })
              : m.jams_results_not_published()}
        </p>
        <p className="text-sm text-fg-muted">
          {jam.autoPublishResults ? m.jams_results_auto_on() : m.jams_results_auto_off()}
        </p>
        <p className="max-w-prose text-sm text-fg-muted">{m.jams_results_method({ min: jam.minVotes })}</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button loading={busy} disabled={!ready} onClick={() => void publish()}>
            {jam.resultsComputedAt ? m.jams_editor_results_recompute() : m.jams_editor_results_publish()}
          </Button>
          {jam.resultsComputedAt ? (
            <span className="text-xs text-fg-muted">
              {m.jams_editor_results_at({ date: formatInstant(jam.resultsComputedAt) })}
            </span>
          ) : null}
          {jam.resultsPublishedAt ? (
            <a
              href={`/jams/${jam.slug}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-link hover:underline"
            >
              {m.jams_cta_results()}
              <span className="sr-only"> {m.ranger_new_tab()}</span>
            </a>
          ) : null}
        </div>
      </section>

      {ready || jam.phase === 'voting' ? (
        <section aria-labelledby="jam-ranking" className="grid gap-2">
          <h2 id="jam-ranking" className="text-base font-semibold text-fg">
            {m.jams_results_ranking()}
          </h2>
          {ranking.data && ranking.data.items.length > 0 ? (
            <ol className="grid divide-y divide-border border-y border-border text-sm">
              {ranking.data.items.map((entry, index) => (
                <li key={entry.id} className="flex items-center gap-4 py-2">
                  <span className="w-6 text-end tabular-nums text-fg-muted">{index + 1}</span>
                  <a
                    href={entry.mod.canonicalPath}
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-0 flex-1 font-medium break-words text-fg hover:text-link"
                  >
                    {entry.mod.name}
                  </a>
                  <span className="tabular-nums text-fg-muted">{m.jams_votes_count({ count: entry.votes })}</span>
                </li>
              ))}
            </ol>
          ) : ranking.isPending ? null : (
            <EmptyState icon={<Icon icon={Trophy} size={32} />} title={m.jams_entries_admin_empty()} />
          )}
        </section>
      ) : null}
    </div>
  );
}
