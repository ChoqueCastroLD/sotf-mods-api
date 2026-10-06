/**
 * «Needs attention» (PLAN §7.5): breakage reports on the current build, unanswered questions and
 * reviews, missing gallery or source link, rejected listings — each with the action that fixes it.
 * On phones it comes first (research/03 §6.9).
 */
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Link } from '@tanstack/react-router';
import { AlertTriangle, ArrowRight, CheckCircle2, Info, type LucideIcon } from 'lucide-react';
import type { Attention, AttentionKind } from './api.ts';
import { bt } from './i18n.ts';
import { attentionAction, attentionText } from './labels.ts';

const SEVERITY: Readonly<Record<AttentionKind, 'danger' | 'warning' | 'info'>> = {
  broken_on_current: 'danger',
  rejected: 'danger',
  unanswered_questions: 'warning',
  unanswered_reviews: 'warning',
  missing_gallery: 'info',
  missing_source: 'info',
};

const ORDER: readonly AttentionKind[] = [
  'rejected',
  'broken_on_current',
  'unanswered_questions',
  'unanswered_reviews',
  'missing_gallery',
  'missing_source',
];

function iconOf(kind: AttentionKind): { icon: LucideIcon; className: string } {
  switch (SEVERITY[kind]) {
    case 'danger':
      return { icon: AlertTriangle, className: 'text-danger' };
    case 'warning':
      return { icon: AlertTriangle, className: 'text-warning' };
    case 'info':
      return { icon: Info, className: 'text-signal' };
  }
}

function ActionLink({ item }: { item: Attention }) {
  const modId = String(item.mod.id);
  const className = 'inline-flex min-h-6 items-center gap-1 text-sm font-medium text-link hover:underline';
  const content = (
    <>
      {attentionAction(item.kind)}
      <Icon icon={ArrowRight} size={14} />
    </>
  );
  switch (item.kind) {
    case 'broken_on_current':
      return item.mod.kind === 'build' ? (
        <Link to="/dashboard/inbox" search={{ type: 'compat', mod: item.mod.id }} className={className}>
          {content}
        </Link>
      ) : (
        <Link to="/dashboard/mods/$modId/new-version" params={{ modId }} className={className}>
          {content}
        </Link>
      );
    case 'unanswered_questions':
      return (
        <Link to="/dashboard/inbox" search={{ type: 'comment', mod: item.mod.id }} className={className}>
          {content}
        </Link>
      );
    case 'unanswered_reviews':
      return (
        <Link to="/dashboard/inbox" search={{ type: 'review', mod: item.mod.id }} className={className}>
          {content}
        </Link>
      );
    case 'missing_gallery':
      return (
        <Link to="/dashboard/mods/$modId" params={{ modId }} search={{ tab: 'media' }} className={className}>
          {content}
        </Link>
      );
    case 'missing_source':
      return (
        <Link to="/dashboard/mods/$modId" params={{ modId }} search={{ tab: 'listing' }} className={className}>
          {content}
        </Link>
      );
    case 'rejected':
      return (
        <Link to="/dashboard/mods/$modId" params={{ modId }} search={{ tab: 'settings' }} className={className}>
          {content}
        </Link>
      );
  }
}

export function NeedsAttention({ items }: { items: readonly Attention[] }) {
  if (items.length === 0) {
    return (
      <EmptyState
        headingLevel={3}
        icon={<Icon icon={CheckCircle2} size={28} className="text-success" />}
        title={bt('basecamp_attention_empty_title')}
        description={bt('basecamp_attention_empty_text')}
        className="py-6"
      />
    );
  }
  const sorted = [...items].sort((a, b) => ORDER.indexOf(a.kind) - ORDER.indexOf(b.kind));
  return (
    <ul className="grid gap-2">
      {sorted.map((item) => {
        const { icon, className } = iconOf(item.kind);
        return (
          <li
            key={`${item.kind}:${item.mod.id}`}
            className="flex items-start gap-3 rounded-md border border-border bg-raised/40 p-3"
          >
            <Icon icon={icon} size={18} className={`mt-0.5 shrink-0 ${className}`} />
            <div className="grid min-w-0 gap-1">
              <p className="text-sm text-fg">{attentionText(item.kind, item.count, item.mod.name)}</p>
              <ActionLink item={item} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
