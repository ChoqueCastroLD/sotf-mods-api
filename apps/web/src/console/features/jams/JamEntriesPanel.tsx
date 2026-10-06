/** Entry moderation of a jam: hide, disqualify or restore entries (post-moderation). */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { ConfirmDialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { Input } from '@sotf/ui/input';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { Panel, PanelError, reportFailure, TableScroller, tdClasses, thClasses } from '../admin/shared.tsx';
import { type AdminEntry, adminEntriesQuery, jamKeys, jamsAdminApi } from './api.ts';

type Target = { entry: AdminEntry; status: 'hidden' | 'disqualified' };

function statusVariant(status: AdminEntry['status']) {
  return status === 'active' ? 'success' : status === 'withdrawn' ? 'neutral' : 'danger';
}

function statusLabel(status: AdminEntry['status']): string {
  switch (status) {
    case 'active':
      return m.jams_entry_status_active();
    case 'withdrawn':
      return m.jams_entry_status_withdrawn();
    case 'hidden':
      return m.jams_entry_status_hidden();
    case 'disqualified':
      return m.jams_entry_status_disqualified();
  }
}

export function JamEntriesPanel({ jamId }: { jamId: number }) {
  const queryClient = useQueryClient();
  const query = useQuery(adminEntriesQuery(jamId));
  const [target, setTarget] = useState<Target | null>(null);
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState<number | null>(null);

  const apply = async (entry: AdminEntry, status: 'active' | 'hidden' | 'disqualified', why?: string) => {
    setBusy(entry.id);
    try {
      await jamsAdminApi.moderateEntry(jamId, entry.id, status, why);
      await queryClient.invalidateQueries({ queryKey: jamKeys.entries(jamId) });
      notify.success(m.jams_entries_updated());
    } catch (error) {
      reportFailure(error, m.jams_entries_failed());
      throw error;
    } finally {
      setBusy(null);
    }
  };

  return (
    <Panel title={m.jams_entries_admin_title()} description={m.jams_entries_admin_description()}>
      {query.isError ? (
        <PanelError error={query.error} onRetry={() => void query.refetch()} />
      ) : !query.data ? (
        <p className="text-sm text-fg-muted" role="status">
          {m.jams_loading()}
        </p>
      ) : query.data.length === 0 ? (
        <p className="text-sm text-fg-muted">{m.jams_entries_admin_empty()}</p>
      ) : (
        <TableScroller label={m.jams_entries_admin_title()}>
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">{m.jams_entries_admin_title()}</caption>
            <thead className="bg-sunken">
              <tr>
                <th scope="col" className={thClasses}>
                  {m.jams_entries_col_entry()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.jams_entries_col_status()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.jams_entries_col_votes()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.jams_entries_col_actions()}
                </th>
              </tr>
            </thead>
            <tbody>
              {query.data.map((entry) => (
                <tr key={entry.id} className="border-t border-border">
                  <th scope="row" className={`${tdClasses} min-w-56 text-start font-normal`}>
                    <a
                      href={entry.mod.canonicalPath}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-fg hover:text-link"
                    >
                      {entry.mod.name}
                    </a>
                    <span className="block text-xs text-fg-muted">
                      {entry.authors.map((author) => author.displayName || author.handle).join(', ')}
                    </span>
                    {entry.statusReason ? (
                      <span className="block text-xs text-fg-muted">{entry.statusReason}</span>
                    ) : null}
                  </th>
                  <td className={tdClasses}>
                    <Badge variant={statusVariant(entry.status)} size="sm">
                      {statusLabel(entry.status)}
                    </Badge>
                  </td>
                  <td className={`${tdClasses} whitespace-nowrap tabular-nums`}>
                    {entry.votes}
                    {entry.excludedVotes > 0 ? <span className="text-fg-muted"> (+{entry.excludedVotes})</span> : null}
                  </td>
                  <td className={tdClasses}>
                    <span className="flex flex-wrap gap-2">
                      {entry.status === 'withdrawn' ? null : entry.status === 'active' ? (
                        <>
                          <Button
                            size="sm"
                            variant="secondary"
                            disabled={busy === entry.id}
                            onClick={() => {
                              setReason('');
                              setTarget({ entry, status: 'hidden' });
                            }}
                          >
                            {m.jams_entries_hide()}
                          </Button>
                          <Button
                            size="sm"
                            variant="danger"
                            disabled={busy === entry.id}
                            onClick={() => {
                              setReason('');
                              setTarget({ entry, status: 'disqualified' });
                            }}
                          >
                            {m.jams_entries_disqualify()}
                          </Button>
                        </>
                      ) : (
                        <Button
                          size="sm"
                          variant="secondary"
                          loading={busy === entry.id}
                          onClick={() => void apply(entry, 'active').catch(() => undefined)}
                        >
                          {m.jams_entries_restore()}
                        </Button>
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroller>
      )}

      <ConfirmDialog
        open={target !== null}
        onOpenChange={(open) => {
          if (!open) setTarget(null);
        }}
        title={
          target?.status === 'disqualified'
            ? m.jams_entries_disqualify_title({ name: target.entry.mod.name })
            : m.jams_entries_hide_title({ name: target?.entry.mod.name ?? '' })
        }
        description={m.jams_entries_confirm_text()}
        confirmLabel={target?.status === 'disqualified' ? m.jams_entries_disqualify() : m.jams_entries_hide()}
        tone="danger"
        onConfirm={async () => {
          if (!target) return;
          await apply(target.entry, target.status, reason.trim() || undefined);
          setTarget(null);
        }}
      >
        <Field label={m.jams_editor_reason()} optional>
          <Input value={reason} maxLength={300} onChange={(event) => setReason(event.currentTarget.value)} />
        </Field>
      </ConfirmDialog>
    </Panel>
  );
}
