/**
 * Dependencies (research/03 §5.2): `ModChip` is the pill of one dependency — icon + name +
 * version constraint in mono + state — in three kinds: `required` (neutral), `optional` (dashed)
 * and `conflicts` (Blood border). `DependencyList` groups a version's dependencies by kind.
 *
 * Available dependencies link to their mod; missing, archived or removed ones say so in text
 * (never only with the dot colour).
 */
import { Ban, CircleCheck, CircleDashed, CirclePlus, CircleX, type LucideIcon, Puzzle } from 'lucide-react';
import { cn } from '../cn.ts';
import { Icon } from '../icons.tsx';
import type { DependencyDTO, DependencyKind } from './contracts.ts';
import { type DomainMessageKey, useDomainI18n } from './i18n.ts';

type DependencyState = DependencyDTO['state'];

const KIND: Record<DependencyKind, { icon: LucideIcon; classes: string; label: DomainMessageKey }> = {
  required: { icon: Puzzle, classes: 'border-border-strong', label: 'ui_domain_dependency_kind_required' },
  optional: {
    icon: CirclePlus,
    classes: 'border-dashed border-border-strong',
    label: 'ui_domain_dependency_kind_optional',
  },
  conflicts: { icon: Ban, classes: 'border-danger', label: 'ui_domain_dependency_kind_conflicts' },
};

const STATE: Record<DependencyState, { icon: LucideIcon; tone: string; label: DomainMessageKey }> = {
  ok: { icon: CircleCheck, tone: 'text-success', label: 'ui_domain_dependency_state_ok' },
  missing: { icon: CircleDashed, tone: 'text-warning', label: 'ui_domain_dependency_state_missing' },
  unlisted: { icon: CircleDashed, tone: 'text-fg-subtle', label: 'ui_domain_dependency_state_unlisted' },
  archived: { icon: CircleDashed, tone: 'text-warning', label: 'ui_domain_dependency_state_archived' },
  removed: { icon: CircleX, tone: 'text-danger', label: 'ui_domain_dependency_state_removed' },
};

export interface ModChipProps {
  dependency: DependencyDTO;
  /** Link target override (default: the mod page when the dependency is on the site). */
  href?: string | null;
  className?: string;
}

export function ModChip({ dependency, href, className }: ModChipProps) {
  const { t } = useDomainI18n();
  const kind = KIND[dependency.kind];
  const state = STATE[dependency.state];
  const name = dependency.mod?.name ?? dependency.manifestId;
  const target =
    href === undefined
      ? dependency.mod && dependency.state !== 'removed'
        ? dependency.mod.canonicalPath
        : null
      : href;
  const stateText = t(state.label);
  const content = (
    <>
      <Icon icon={kind.icon} size={14} className={dependency.kind === 'conflicts' ? 'text-danger' : 'text-fg-subtle'} />
      <span className="sr-only">{t(kind.label)}: </span>
      <span className="min-w-0 truncate font-medium">{name}</span>
      {dependency.versionRange ? (
        <span className="shrink-0 font-mono text-2xs text-fg-muted">{dependency.versionRange}</span>
      ) : null}
      <span className="flex shrink-0 items-center gap-1">
        <Icon icon={state.icon} size={12} className={state.tone} />
        <span className={cn('text-2xs', dependency.state === 'ok' ? 'sr-only' : 'text-fg-muted')}>{stateText}</span>
      </span>
    </>
  );
  const classes = cn(
    'inline-flex h-8 max-w-full items-center gap-1.5 rounded-full border bg-raised px-3 text-sm text-fg',
    kind.classes,
    className,
  );
  if (target) {
    return (
      <a
        href={target}
        data-dependency={dependency.kind}
        className={cn(classes, 'transition-colors duration-(--dur-fast) hover:bg-fg/6')}
      >
        {content}
      </a>
    );
  }
  return (
    <span data-dependency={dependency.kind} className={classes}>
      {content}
    </span>
  );
}

export interface DependencyListProps {
  dependencies: readonly DependencyDTO[];
  /** Heading level of the kind titles. Default 3. */
  headingLevel?: 2 | 3 | 4;
  className?: string;
}

const ORDER: readonly DependencyKind[] = ['required', 'optional', 'conflicts'];

const GROUP_TITLE: Record<DependencyKind, DomainMessageKey> = {
  required: 'ui_domain_dependencies_required_title',
  optional: 'ui_domain_dependencies_optional_title',
  conflicts: 'ui_domain_dependencies_conflicts_title',
};

export function DependencyList({ dependencies, headingLevel = 3, className }: DependencyListProps) {
  const { t } = useDomainI18n();
  const Heading = `h${headingLevel}` as const;
  if (dependencies.length === 0) {
    return <p className={cn('text-sm text-fg-muted', className)}>{t('ui_domain_dependencies_empty')}</p>;
  }
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {ORDER.map((kind) => {
        const items = dependencies.filter((dependency) => dependency.kind === kind);
        if (items.length === 0) return null;
        return (
          <section key={kind} className="flex flex-col gap-2">
            <Heading className="readout">{t(GROUP_TITLE[kind])}</Heading>
            <ul className="flex flex-wrap gap-2">
              {items.map((dependency) => (
                <li key={`${dependency.kind}:${dependency.manifestId}`} className="min-w-0 max-w-full">
                  <ModChip dependency={dependency} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
