/**
 * Sanction a user (PLAN §7.4 «suspender (temporal), banear, silenciar comentarios (global o por
 * mod)»): kind, reason, duration and — for comment mutes — an optional mod scope. A suspension
 * needs an end; a ban is permanent and signs the user out everywhere; mutes may be permanent.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Dialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { RadioCardGroup } from '@sotf/ui/radio-card';
import { Select } from '@sotf/ui/select';
import { Textarea } from '@sotf/ui/textarea';
import { useQuery } from '@tanstack/react-query';
import { Search, X } from 'lucide-react';
import { type FormEvent, useEffect, useId, useState } from 'react';
import { api } from '../../lib/api.ts';
import { rangerApi, SANCTION_KINDS, type Sanction, type SanctionKind } from './api.ts';
import { sanctionHint, sanctionLabel } from './labels.ts';
import { reportFailure } from './shared.tsx';

const DURATIONS = ['1', '3', '7', '30', '90', 'permanent'] as const;
type Duration = (typeof DURATIONS)[number];

function durationLabel(duration: Duration): string {
  return duration === 'permanent' ? m.ranger_sanction_permanent() : m.ranger_sanction_days({ count: Number(duration) });
}

export function SanctionDialog({
  open,
  onOpenChange,
  userId,
  userName,
  onDone,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: number;
  userName: string;
  onDone: (sanction: Sanction) => void;
}) {
  const [kind, setKind] = useState<SanctionKind>('suspend');
  const [duration, setDuration] = useState<Duration>('7');
  const [reason, setReason] = useState('');
  const [scope, setScope] = useState<{ id: number; title: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const formId = useId();

  useEffect(() => {
    if (!open) return;
    setKind('suspend');
    setDuration('7');
    setReason('');
    setScope(null);
    setError(null);
    setBusy(false);
  }, [open]);

  const durations: readonly Duration[] =
    kind === 'ban' ? [] : kind === 'suspend' ? DURATIONS.filter((entry) => entry !== 'permanent') : DURATIONS;
  const effectiveDuration: Duration | null =
    kind === 'ban' ? null : durations.includes(duration) ? duration : (durations[2] ?? null);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const trimmed = reason.trim();
    if (trimmed.length < 3) {
      setError(m.ranger_decision_reason_required());
      return;
    }
    setBusy(true);
    try {
      const endsAt =
        effectiveDuration && effectiveDuration !== 'permanent'
          ? new Date(Date.now() + Number(effectiveDuration) * 86_400_000).toISOString()
          : undefined;
      const sanction = await rangerApi.sanction(userId, {
        kind,
        reason: trimmed,
        ...(endsAt ? { endsAt } : {}),
        ...(kind === 'comment_mute' && scope ? { scopeModId: scope.id } : {}),
      });
      onDone(sanction);
      onOpenChange(false);
    } catch (failure) {
      reportFailure(failure, m.ranger_sanction_failed());
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title={m.ranger_sanction_title()}
      description={userName}
      size="lg"
      disablePointerDismissal
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            {m.ranger_cancel()}
          </Button>
          <Button type="submit" form={formId} loading={busy} variant="danger">
            {m.ranger_sanction_confirm({ kind: sanctionLabel(kind) })}
          </Button>
        </>
      }
    >
      <form id={formId} onSubmit={submit} className="grid gap-4" noValidate>
        <RadioCardGroup
          legend={m.ranger_sanction_kind()}
          value={kind}
          onValueChange={setKind}
          options={SANCTION_KINDS.map((entry) => ({
            value: entry,
            title: sanctionLabel(entry),
            description: sanctionHint(entry),
          }))}
        />
        {effectiveDuration ? (
          <Select
            label={m.ranger_sanction_duration()}
            value={effectiveDuration}
            onValueChange={(value) => {
              if (value) setDuration(value);
            }}
            options={durations.map((entry) => ({ value: entry, label: durationLabel(entry) }))}
          />
        ) : null}
        {kind === 'comment_mute' ? <ModScope value={scope} onChange={setScope} /> : null}
        <Field
          label={m.ranger_sanction_reason()}
          description={m.ranger_sanction_reason_hint()}
          error={error ?? undefined}
        >
          <Textarea
            value={reason}
            maxLength={1000}
            minRows={3}
            onChange={(event) => {
              setReason(event.target.value);
              setError(null);
            }}
          />
        </Field>
      </form>
    </Dialog>
  );
}

/** Optional mod scope of a comment mute: search mods and builds by name. */
function ModScope({
  value,
  onChange,
}: {
  value: { id: number; title: string } | null;
  onChange: (value: { id: number; title: string } | null) => void;
}) {
  const [text, setText] = useState('');
  const [term, setTerm] = useState('');
  useEffect(() => {
    const timer = window.setTimeout(() => setTerm(text.trim()), 250);
    return () => window.clearTimeout(timer);
  }, [text]);
  const results = useQuery({
    queryKey: ['ranger-mod-scope', term],
    queryFn: async ({ signal }) =>
      (await api.search.search({ query: { q: term, types: ['mod', 'build'], limit: 6 } }, { signal })).hits.filter(
        (hit) => typeof hit.id === 'number',
      ),
    enabled: term.length >= 2 && value === null,
    staleTime: 60_000,
  });

  if (value) {
    return (
      <div className="grid gap-1.5">
        <span className="text-sm font-medium text-fg">{m.ranger_sanction_scope()}</span>
        <span className="inline-flex items-center gap-2 justify-self-start rounded-md border border-border bg-surface px-2 py-1 text-sm">
          {value.title}
          <Button variant="icon" size="sm" aria-label={m.ranger_sanction_scope_clear()} onClick={() => onChange(null)}>
            <Icon icon={X} size={14} />
          </Button>
        </span>
      </div>
    );
  }
  return (
    <div className="grid gap-1.5">
      <Field label={m.ranger_sanction_scope()} description={m.ranger_sanction_scope_hint()}>
        <Input
          type="search"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder={m.ranger_sanction_scope_placeholder()}
          icon={<Icon icon={Search} size={16} />}
        />
      </Field>
      {results.data && results.data.length > 0 ? (
        <ul className="grid gap-1" aria-label={m.ranger_sanction_scope_results()}>
          {results.data.map((hit) => (
            <li key={String(hit.id)}>
              <button
                type="button"
                className="flex min-h-10 w-full items-center gap-2 rounded-md px-2 text-left text-sm hover:bg-fg/8"
                onClick={() => onChange({ id: hit.id as number, title: hit.title })}
              >
                <span className="font-medium text-fg">{hit.title}</span>
                {hit.subtitle ? <span className="text-xs text-fg-muted">{hit.subtitle}</span> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : term.length >= 2 && results.isSuccess ? (
        <p className="text-xs text-fg-muted">{m.ranger_sanction_scope_none()}</p>
      ) : null}
    </div>
  );
}
