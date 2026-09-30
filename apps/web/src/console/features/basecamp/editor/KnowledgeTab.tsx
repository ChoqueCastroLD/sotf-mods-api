/**
 * «Knowledge» tab of the mod editor (T1-14): the known issues and the FAQ the author maintains.
 * Both lists render on the public mod page (the FAQ also as `FAQPage` JSON-LD); each is replaced as
 * a whole on save, in the order shown here. Owners, co-authors and admins edit them.
 */
import { Button } from '@sotf/ui/button';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { Textarea } from '@sotf/ui/textarea';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { ArrowDown, ArrowUp, Plus, Trash2 } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { notify } from '../../../lib/notify.ts';
import {
  basecampKeys,
  KNOWLEDGE_LIMITS,
  type Knowledge,
  type KnownIssue,
  knowledgeApi,
  knowledgeQuery,
} from '../api.ts';
import { number } from '../format.ts';
import { bt } from '../i18n.ts';
import { kt } from '../knowledge-i18n.ts';
import { reportFailure } from '../shared.tsx';
import { SaveBar } from './ListingTab.tsx';

type IssueStatus = KnownIssue['status'];
const STATUSES = ['open', 'investigating', 'fixed'] as const satisfies readonly IssueStatus[];

interface IssueRow {
  key: number;
  id: number | undefined;
  title: string;
  body: string;
  status: IssueStatus;
  affectedVersions: string;
  fixedInVersion: string;
}

interface FaqRow {
  key: number;
  id: number | undefined;
  question: string;
  answer: string;
}

let nextKey = 1;

function statusLabel(status: IssueStatus): string {
  switch (status) {
    case 'open':
      return kt('mod_knowledge_status_open');
    case 'investigating':
      return kt('mod_knowledge_status_investigating');
    case 'fixed':
      return kt('mod_knowledge_status_fixed');
  }
}

function issueRows(items: readonly KnownIssue[]): IssueRow[] {
  return items.map((item) => ({
    key: nextKey++,
    id: item.id,
    title: item.title,
    body: item.body,
    status: item.status,
    affectedVersions: item.affectedVersions ?? '',
    fixedInVersion: item.fixedInVersion ?? '',
  }));
}

function faqRows(items: Knowledge['faq']): FaqRow[] {
  return items.map((item) => ({ key: nextKey++, id: item.id, question: item.question, answer: item.answer }));
}

/** What is saved of a row (used for the dirty check and the request). */
const issuePayload = (row: IssueRow) => ({
  ...(row.id === undefined ? {} : { id: row.id }),
  title: row.title.trim(),
  body: row.body.trim(),
  status: row.status,
  affectedVersions: row.affectedVersions.trim() || null,
  fixedInVersion: row.fixedInVersion.trim() || null,
});
const faqPayload = (row: FaqRow) => ({
  ...(row.id === undefined ? {} : { id: row.id }),
  question: row.question.trim(),
  answer: row.answer.trim(),
});

function move<T>(list: readonly T[], index: number, by: -1 | 1): T[] {
  const target = index + by;
  if (target < 0 || target >= list.length) return [...list];
  const next = [...list];
  const [item] = next.splice(index, 1);
  next.splice(target, 0, item as T);
  return next;
}

function RowActions({
  index,
  count,
  onMove,
  onRemove,
}: {
  index: number;
  count: number;
  onMove: (by: -1 | 1) => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-1">
      <Button type="button" variant="ghost" size="sm" disabled={index === 0} onClick={() => onMove(-1)}>
        <Icon icon={ArrowUp} size={16} />
        <span className="sr-only">{kt('mod_knowledge_move_up')}</span>
      </Button>
      <Button type="button" variant="ghost" size="sm" disabled={index === count - 1} onClick={() => onMove(1)}>
        <Icon icon={ArrowDown} size={16} />
        <span className="sr-only">{kt('mod_knowledge_move_down')}</span>
      </Button>
      <Button type="button" variant="ghost" size="sm" onClick={onRemove}>
        <Icon icon={Trash2} size={16} />
        <span className="sr-only">{kt('mod_knowledge_remove')}</span>
      </Button>
    </div>
  );
}

function IssuesEditor({
  modId,
  items,
  onDirty,
}: {
  modId: number;
  items: Knowledge['knownIssues'];
  onDirty: (dirty: boolean) => void;
}) {
  const queryClient = useQueryClient();
  const headingId = useId();
  const [rows, setRows] = useState<IssueRow[]>(() => issueRows(items));
  const baseline = useRef(JSON.stringify(rows.map(issuePayload)));
  const [saving, setSaving] = useState(false);
  const [touched, setTouched] = useState(false);

  const dirty = JSON.stringify(rows.map(issuePayload)) !== baseline.current;
  useEffect(() => onDirty(dirty), [dirty, onDirty]);
  const invalid = rows.some((row) => row.title.trim().length === 0);

  const update = (key: number, patch: Partial<IssueRow>) =>
    setRows((current) => current.map((row) => (row.key === key ? { ...row, ...patch } : row)));

  const reset = () => {
    setRows(issueRows(items));
    setTouched(false);
  };

  const save = async () => {
    setTouched(true);
    if (invalid || saving) return;
    setSaving(true);
    try {
      const saved = await knowledgeApi.putKnownIssues(modId, rows.map(issuePayload));
      const fresh = issueRows(saved.items);
      baseline.current = JSON.stringify(fresh.map(issuePayload));
      setRows(fresh);
      setTouched(false);
      queryClient.setQueryData<Knowledge>(basecampKeys.knowledge(modId), (current) =>
        current ? { ...current, knownIssues: saved.items } : current,
      );
      notify.success(kt('mod_knowledge_saved'));
    } catch (error) {
      reportFailure(error, kt('mod_knowledge_save_failed'));
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      aria-labelledby={headingId}
      className="grid gap-4 rounded-lg border border-border bg-surface p-4"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        void save();
      }}
    >
      <div className="grid gap-1">
        <h2 id={headingId} className="readout text-fg">
          {kt('mod_knowledge_issues_group')}
        </h2>
        <p className="text-sm text-fg-muted">{kt('mod_knowledge_issues_hint')}</p>
      </div>
      {rows.length === 0 ? <p className="text-sm text-fg-muted">{kt('mod_knowledge_issues_empty')}</p> : null}
      <ol className="grid gap-4">
        {rows.map((row, index) => (
          <li key={row.key} className="grid gap-3 rounded-md border border-border p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-fg">{kt('mod_knowledge_item', { n: index + 1 })}</p>
              <RowActions
                index={index}
                count={rows.length}
                onMove={(by) => setRows((current) => move(current, index, by))}
                onRemove={() => setRows((current) => current.filter((entry) => entry.key !== row.key))}
              />
            </div>
            <Field
              label={kt('mod_knowledge_issue_title')}
              error={touched && row.title.trim().length === 0 ? kt('mod_knowledge_required') : undefined}
            >
              <Input
                value={row.title}
                maxLength={KNOWLEDGE_LIMITS.issueTitleMax}
                autoComplete="off"
                onChange={(event) => update(row.key, { title: event.currentTarget.value })}
              />
            </Field>
            <Field
              label={kt('mod_knowledge_issue_body')}
              optional
              description={bt('basecamp_counter', {
                count: number(row.body.length),
                max: number(KNOWLEDGE_LIMITS.issueBodyMax),
              })}
            >
              <Textarea
                value={row.body}
                maxLength={KNOWLEDGE_LIMITS.issueBodyMax}
                minRows={2}
                maxRows={8}
                onChange={(event) => update(row.key, { body: event.currentTarget.value })}
              />
            </Field>
            <div className="grid gap-3 sm:grid-cols-3">
              <Select<IssueStatus>
                label={kt('mod_knowledge_issue_status')}
                options={STATUSES.map((status) => ({ value: status, label: statusLabel(status) }))}
                value={row.status}
                onValueChange={(value) => update(row.key, { status: value ?? 'open' })}
              />
              <Field
                label={kt('mod_knowledge_issue_affects_label')}
                optional
                description={kt('mod_knowledge_issue_affects_hint')}
              >
                <Input
                  value={row.affectedVersions}
                  maxLength={KNOWLEDGE_LIMITS.issueVersionsMax}
                  autoComplete="off"
                  onChange={(event) => update(row.key, { affectedVersions: event.currentTarget.value })}
                />
              </Field>
              <Field label={kt('mod_knowledge_issue_fixed_in_label')} optional>
                <Input
                  value={row.fixedInVersion}
                  maxLength={KNOWLEDGE_LIMITS.issueVersionsMax}
                  autoComplete="off"
                  onChange={(event) => update(row.key, { fixedInVersion: event.currentTarget.value })}
                />
              </Field>
            </div>
          </li>
        ))}
      </ol>
      <div>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          disabled={rows.length >= KNOWLEDGE_LIMITS.issuesMax}
          onClick={() =>
            setRows((current) => [
              ...current,
              {
                key: nextKey++,
                id: undefined,
                title: '',
                body: '',
                status: 'open',
                affectedVersions: '',
                fixedInVersion: '',
              },
            ])
          }
        >
          <Icon icon={Plus} size={16} />
          {kt('mod_knowledge_issues_add')}
        </Button>
      </div>
      <SaveBar dirty={dirty} saving={saving} invalid={touched && invalid} onReset={reset} />
    </form>
  );
}

function FaqEditor({
  modId,
  items,
  onDirty,
}: {
  modId: number;
  items: Knowledge['faq'];
  onDirty: (dirty: boolean) => void;
}) {
  const queryClient = useQueryClient();
  const headingId = useId();
  const [rows, setRows] = useState<FaqRow[]>(() => faqRows(items));
  const baseline = useRef(JSON.stringify(rows.map(faqPayload)));
  const [saving, setSaving] = useState(false);
  const [touched, setTouched] = useState(false);

  const dirty = JSON.stringify(rows.map(faqPayload)) !== baseline.current;
  useEffect(() => onDirty(dirty), [dirty, onDirty]);
  const invalid = rows.some((row) => row.question.trim().length === 0 || row.answer.trim().length === 0);

  const update = (key: number, patch: Partial<FaqRow>) =>
    setRows((current) => current.map((row) => (row.key === key ? { ...row, ...patch } : row)));

  const reset = () => {
    setRows(faqRows(items));
    setTouched(false);
  };

  const save = async () => {
    setTouched(true);
    if (invalid || saving) return;
    setSaving(true);
    try {
      const saved = await knowledgeApi.putFaq(modId, rows.map(faqPayload));
      const fresh = faqRows(saved.items);
      baseline.current = JSON.stringify(fresh.map(faqPayload));
      setRows(fresh);
      setTouched(false);
      queryClient.setQueryData<Knowledge>(basecampKeys.knowledge(modId), (current) =>
        current ? { ...current, faq: saved.items } : current,
      );
      notify.success(kt('mod_knowledge_saved'));
    } catch (error) {
      reportFailure(error, kt('mod_knowledge_save_failed'));
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      aria-labelledby={headingId}
      className="grid gap-4 rounded-lg border border-border bg-surface p-4"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        void save();
      }}
    >
      <div className="grid gap-1">
        <h2 id={headingId} className="readout text-fg">
          {kt('mod_knowledge_faq_group')}
        </h2>
        <p className="text-sm text-fg-muted">{kt('mod_knowledge_faq_hint')}</p>
      </div>
      {rows.length === 0 ? <p className="text-sm text-fg-muted">{kt('mod_knowledge_faq_empty')}</p> : null}
      <ol className="grid gap-4">
        {rows.map((row, index) => (
          <li key={row.key} className="grid gap-3 rounded-md border border-border p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-fg">{kt('mod_knowledge_item', { n: index + 1 })}</p>
              <RowActions
                index={index}
                count={rows.length}
                onMove={(by) => setRows((current) => move(current, index, by))}
                onRemove={() => setRows((current) => current.filter((entry) => entry.key !== row.key))}
              />
            </div>
            <Field
              label={kt('mod_knowledge_faq_question')}
              error={touched && row.question.trim().length === 0 ? kt('mod_knowledge_required') : undefined}
            >
              <Input
                value={row.question}
                maxLength={KNOWLEDGE_LIMITS.questionMax}
                autoComplete="off"
                onChange={(event) => update(row.key, { question: event.currentTarget.value })}
              />
            </Field>
            <Field
              label={kt('mod_knowledge_faq_answer')}
              error={touched && row.answer.trim().length === 0 ? kt('mod_knowledge_required') : undefined}
              description={bt('basecamp_counter', {
                count: number(row.answer.length),
                max: number(KNOWLEDGE_LIMITS.answerMax),
              })}
            >
              <Textarea
                value={row.answer}
                maxLength={KNOWLEDGE_LIMITS.answerMax}
                minRows={2}
                maxRows={8}
                onChange={(event) => update(row.key, { answer: event.currentTarget.value })}
              />
            </Field>
          </li>
        ))}
      </ol>
      <div>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          disabled={rows.length >= KNOWLEDGE_LIMITS.faqMax}
          onClick={() =>
            setRows((current) => [...current, { key: nextKey++, id: undefined, question: '', answer: '' }])
          }
        >
          <Icon icon={Plus} size={16} />
          {kt('mod_knowledge_faq_add')}
        </Button>
      </div>
      <SaveBar dirty={dirty} saving={saving} invalid={touched && invalid} onReset={reset} />
    </form>
  );
}

export function KnowledgeTab({ modId, onDirty }: { modId: number; onDirty: (dirty: boolean) => void }) {
  const { data } = useSuspenseQuery(knowledgeQuery(modId));
  const [issuesDirty, setIssuesDirty] = useState(false);
  const [faqDirty, setFaqDirty] = useState(false);
  useEffect(() => onDirty(issuesDirty || faqDirty), [issuesDirty, faqDirty, onDirty]);
  return (
    <div className="grid gap-6">
      <IssuesEditor modId={modId} items={data.knownIssues} onDirty={setIssuesDirty} />
      <FaqEditor modId={modId} items={data.faq} onDirty={setFaqDirty} />
    </div>
  );
}
