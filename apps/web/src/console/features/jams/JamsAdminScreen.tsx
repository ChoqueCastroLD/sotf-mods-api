/**
 * `/ranger/jams` — every Mod Jam (drafts included) with its phase and schedule, and «New jam».
 * The editor, the phase controls and the entry moderation live in `JamEditorScreen`.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { Dialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { Plus } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import { ArtState } from '../../components/ArtState.tsx';
import { notify } from '../../lib/notify.ts';
import { formatInstant, reportFailure, slugify, TableScroller, tdClasses, thClasses } from '../admin/shared.tsx';
import { adminJamsQuery, jamKeys, jamsAdminApi } from './api.ts';
import { StagePips } from './JamArtThumb.tsx';
import { jamPhaseLabel, jamPhaseVariant } from './phase.ts';

export function JamsAdminScreen() {
  const { data: jams } = useSuspenseQuery(adminJamsQuery);
  const [creating, setCreating] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="grid gap-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold text-fg">{m.jams_admin_title()}</h1>
          <p className="max-w-prose text-sm text-fg-muted">{m.jams_admin_description()}</p>
        </div>
        <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setCreating(true)}>
          {m.jams_admin_new()}
        </Button>
      </header>

      {jams.length === 0 ? (
        <ArtState
          art="trophy"
          title={m.jams_admin_empty_title()}
          description={m.jams_admin_empty_text()}
          action={
            <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setCreating(true)}>
              {m.jams_admin_new()}
            </Button>
          }
        />
      ) : (
        <TableScroller label={m.jams_admin_table_label()}>
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">{m.jams_admin_table_label()}</caption>
            <thead className="bg-sunken">
              <tr>
                <th scope="col" className={thClasses}>
                  {m.jams_admin_col_jam()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.jams_admin_col_phase()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.jams_admin_col_schedule()}
                </th>
                <th scope="col" className={thClasses}>
                  {m.jams_admin_col_entries()}
                </th>
              </tr>
            </thead>
            <tbody>
              {jams.map((jam) => (
                <tr key={jam.id} className="border-t border-border">
                  <th scope="row" className={`${tdClasses} min-w-64 text-start font-normal`}>
                    <span className="flex items-center gap-3">
                      <span className="grid min-w-0 gap-0.5">
                        <a
                          href={`/ranger/jams/${jam.id}`}
                          onClick={(event) => {
                            if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
                            event.preventDefault();
                            void navigate({ to: '/ranger/jams/$jamId', params: { jamId: String(jam.id) } });
                          }}
                          className="font-semibold text-fg hover:text-link"
                        >
                          {jam.title}
                        </a>
                        <span className="block font-mono text-xs text-fg-muted">/jams/{jam.slug}</span>
                      </span>
                    </span>
                  </th>
                  <td className={`${tdClasses} whitespace-nowrap`}>
                    <span className="grid gap-1.5">
                      <span className="flex flex-wrap items-center gap-2">
                        <Badge variant={jamPhaseVariant(jam.phase)} size="sm">
                          {jamPhaseLabel(jam.phase)}
                        </Badge>
                        {jam.phaseLocked ? (
                          <Badge variant="outline-mono" size="sm">
                            {m.jams_admin_locked()}
                          </Badge>
                        ) : null}
                      </span>
                      <StagePips phase={jam.phase} />
                    </span>
                  </td>
                  <td className={`${tdClasses} whitespace-nowrap text-fg-muted`}>
                    {jam.submissionsOpenAt
                      ? `${formatInstant(jam.submissionsOpenAt)} → ${jam.votingCloseAt ? formatInstant(jam.votingCloseAt) : '…'}`
                      : m.jams_admin_no_schedule()}
                  </td>
                  <td className={`${tdClasses} font-mono tabular-nums`}>{jam.entryCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroller>
      )}

      <Dialog
        open={creating}
        onOpenChange={setCreating}
        title={m.jams_admin_new()}
        description={m.jams_admin_new_description()}
        size="md"
        sheetOnMobile
      >
        {creating ? <NewJamForm onDone={() => setCreating(false)} /> : null}
      </Dialog>
    </div>
  );
}

function NewJamForm({ onDone }: { onDone: () => void }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugTouched, setSlugTouched] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<{ title?: string; slug?: string }>({});

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (saving) return;
    const next: typeof errors = {};
    if (title.trim().length < 3) next.title = m.jams_admin_error_title();
    if (!/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(slug) || slug.length < 3) next.slug = m.jams_admin_error_slug();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSaving(true);
    try {
      const jam = await jamsAdminApi.create({ slug, title: title.trim() });
      await queryClient.invalidateQueries({ queryKey: jamKeys.admin });
      notify.success(m.jams_admin_created({ title: jam.title }));
      onDone();
      void navigate({ to: '/ranger/jams/$jamId', params: { jamId: String(jam.id) } });
    } catch (error) {
      reportFailure(error, m.jams_admin_create_failed());
    } finally {
      setSaving(false);
    }
  };

  return (
    <form noValidate onSubmit={(event) => void submit(event)} className="grid gap-4">
      <Field label={m.jams_admin_field_title()} error={errors.title}>
        <Input
          value={title}
          maxLength={100}
          onChange={(event) => {
            const value = event.currentTarget.value;
            setTitle(value);
            if (!slugTouched) setSlug(slugify(value).slice(0, 60));
          }}
        />
      </Field>
      <Field label={m.jams_admin_field_slug()} description={m.jams_admin_field_slug_hint()} error={errors.slug}>
        <Input
          value={slug}
          maxLength={60}
          className="font-mono"
          onChange={(event) => {
            setSlugTouched(true);
            setSlug(event.currentTarget.value.toLowerCase());
          }}
        />
      </Field>
      <div className="flex justify-end gap-2">
        <Button variant="ghost" type="button" onClick={onDone} disabled={saving}>
          {m.jams_admin_cancel()}
        </Button>
        <Button type="submit" loading={saving}>
          {m.jams_admin_create()}
        </Button>
      </div>
    </form>
  );
}
