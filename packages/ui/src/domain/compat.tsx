/**
 * Compatibility (research/03 §5.3, PLAN §7.10): the status is never colour alone.
 *
 * - `CompatBadge`: icon + text, always («Works on 1.0.4», «Broken»).
 * - `CompatCapsule`: the `<dl>` of what a player checks before installing: game build, minimum
 *   RedLoader, platform, multiplayer role, dedicated servers, safe to remove, dependencies and
 *   conflicts. Every item carries an icon and a text value.
 * - `FieldReportMeter`: split bar of the field reports on the current build + «31 ✔ · 1 ◐ · 0 ✖»
 *   + «Report», and a per-build breakdown in a native disclosure (works without JavaScript).
 */
import {
  Ban,
  CircleAlert,
  CircleCheck,
  CircleDashed,
  CircleX,
  Cpu,
  Eraser,
  Gamepad2,
  type LucideIcon,
  Puzzle,
  Server,
  Users,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { Badge, type BadgeVariant } from '../badge.tsx';
import { cn } from '../cn.ts';
import { Icon } from '../icons.tsx';
import type {
  CompatAggregateDTO,
  CompatStatus,
  CompatSummaryDTO,
  DependencyDTO,
  ModDetailDTO,
  MultiplayerRole,
  Platform,
} from './contracts.ts';
import { type DomainMessageKey, formatCount, useDomainI18n } from './i18n.ts';

export const COMPAT_STATUS_VALUES = ['works', 'mixed', 'broken', 'untested'] as const satisfies readonly CompatStatus[];

interface StatusStyle {
  icon: LucideIcon;
  variant: BadgeVariant;
  /** Text colour of the icon when used outside a badge. */
  tone: string;
  withBuild: DomainMessageKey;
  short: DomainMessageKey;
}

export const COMPAT_STATUS_STYLE: Readonly<Record<CompatStatus, StatusStyle>> = {
  works: {
    icon: CircleCheck,
    variant: 'success',
    tone: 'text-success',
    withBuild: 'ui_domain_compat_works_on',
    short: 'ui_domain_compat_works',
  },
  mixed: {
    icon: CircleAlert,
    variant: 'warning',
    tone: 'text-warning',
    withBuild: 'ui_domain_compat_mixed_on',
    short: 'ui_domain_compat_mixed',
  },
  broken: {
    icon: CircleX,
    variant: 'danger',
    tone: 'text-danger',
    withBuild: 'ui_domain_compat_broken_on',
    short: 'ui_domain_compat_broken',
  },
  untested: {
    icon: CircleDashed,
    variant: 'warning',
    tone: 'text-fg-muted',
    withBuild: 'ui_domain_compat_untested_on',
    short: 'ui_domain_compat_untested',
  },
};

/** Localised status text («Works on 1.0.4» / «Works»). */
export function useCompatLabel(): (status: CompatStatus, build?: string | null) => string {
  const { t } = useDomainI18n();
  return (status, build) => {
    const style = COMPAT_STATUS_STYLE[status];
    return build ? t(style.withBuild, { build }) : t(style.short);
  };
}

export interface CompatBadgeProps {
  status: CompatStatus;
  /** Game build label («1.0.4»). Shown unless `short`. */
  build?: string | null;
  /** Only the status word («Works»); the build goes to the `title`. */
  short?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export function CompatBadge({ status, build, short = false, size = 'md', className }: CompatBadgeProps) {
  const label = useCompatLabel();
  const style = COMPAT_STATUS_STYLE[status];
  return (
    <Badge
      variant={style.variant}
      size={size}
      icon={<Icon icon={style.icon} size={size === 'sm' ? 12 : 14} />}
      title={short && build ? label(status, build) : undefined}
      data-compat={status}
      className={className}
    >
      {label(status, short ? null : build)}
    </Badge>
  );
}

// -------------------------------------------------------------------------------------------
// CompatCapsule
// -------------------------------------------------------------------------------------------

const PLATFORM_KEY: Record<Platform, DomainMessageKey> = {
  Client: 'ui_domain_platform_client',
  Server: 'ui_domain_platform_server',
  Universal: 'ui_domain_platform_universal',
};

const MULTIPLAYER_KEY: Record<MultiplayerRole, DomainMessageKey> = {
  singleplayer_only: 'ui_domain_multiplayer_singleplayer_only',
  client_side: 'ui_domain_multiplayer_client_side',
  host_only: 'ui_domain_multiplayer_host_only',
  all_players: 'ui_domain_multiplayer_all_players',
  unknown: 'ui_domain_value_unknown',
};

type DedicatedServer = NonNullable<ModDetailDTO['dedicatedServer']>;
type SafeToRemove = NonNullable<ModDetailDTO['safeToRemove']>;

const DEDICATED_KEY: Record<DedicatedServer, DomainMessageKey> = {
  yes: 'ui_domain_dedicated_yes',
  no: 'ui_domain_dedicated_no',
  partial: 'ui_domain_dedicated_partial',
  unknown: 'ui_domain_value_unknown',
};

const SAFE_KEY: Record<SafeToRemove, DomainMessageKey> = {
  yes: 'ui_domain_safe_remove_yes',
  no: 'ui_domain_safe_remove_no',
  unknown: 'ui_domain_value_unknown',
};

/** Tone of a yes/no/partial answer: icon + text, colour only as a hint. */
const ANSWER_ICON = {
  yes: { icon: CircleCheck, tone: 'text-success' },
  no: { icon: Ban, tone: 'text-danger' },
  partial: { icon: CircleAlert, tone: 'text-warning' },
  unknown: { icon: CircleDashed, tone: 'text-fg-subtle' },
} as const;

export interface CompatCapsuleProps {
  /** Compatibility of the latest version on the current build. */
  compat: CompatSummaryDTO;
  /** Game version declared by the latest version (used when no build aggregate exists). */
  gameVersion?: string | null;
  /** Minimum RedLoader declared by the latest version. */
  loaderVersion?: string | null;
  platform?: Platform | null;
  multiplayerRole?: MultiplayerRole | null;
  dedicatedServer?: DedicatedServer | null;
  safeToRemove?: SafeToRemove | null;
  dependencies?: readonly DependencyDTO[];
  /** `list`: one item per line (sidebars); `row`: a wrapping row (under the title). */
  layout?: 'list' | 'row';
  className?: string;
}

/** Props of the capsule from a mod detail. */
export function compatCapsulePropsOf(mod: ModDetailDTO): CompatCapsuleProps {
  return {
    compat: mod.compatCurrent,
    gameVersion: mod.latestVersion?.gameVersionDeclared ?? null,
    loaderVersion: mod.latestVersion?.loaderVersionDeclared ?? null,
    platform: mod.platform,
    multiplayerRole: mod.multiplayerRole,
    dedicatedServer: mod.dedicatedServer,
    safeToRemove: mod.safeToRemove,
    dependencies: mod.dependencies,
  };
}

function CapsuleItem({
  icon,
  label,
  children,
  layout,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
  layout: 'list' | 'row';
}) {
  return (
    <div
      className={cn(
        'flex min-w-0 gap-2',
        layout === 'list' ? 'items-start justify-between border-b border-border py-2 last:border-b-0' : 'items-center',
      )}
    >
      <dt className="flex shrink-0 items-center gap-1.5 text-xs text-fg-muted">
        <Icon icon={icon} size={16} className="text-fg-subtle" />
        {label}
      </dt>
      <dd className={cn('min-w-0 text-sm text-fg', layout === 'list' && 'text-end')}>{children}</dd>
    </div>
  );
}

function Answer({ value, text }: { value: keyof typeof ANSWER_ICON; text: string }) {
  const style = ANSWER_ICON[value];
  return (
    <span className="inline-flex items-center gap-1">
      <Icon icon={style.icon} size={14} className={style.tone} />
      {text}
    </span>
  );
}

export function CompatCapsule({
  compat,
  gameVersion,
  loaderVersion,
  platform,
  multiplayerRole,
  dedicatedServer,
  safeToRemove,
  dependencies = [],
  layout = 'list',
  className,
}: CompatCapsuleProps) {
  const { t } = useDomainI18n();
  const build = compat.gameBuild?.label ?? gameVersion ?? null;
  const required = dependencies.filter((dependency) => dependency.kind === 'required').length;
  const optional = dependencies.filter((dependency) => dependency.kind === 'optional').length;
  const conflicts = dependencies.filter((dependency) => dependency.kind === 'conflicts').length;
  const unknown = t('ui_domain_value_unknown');
  return (
    <dl
      className={cn(
        layout === 'list' ? 'flex flex-col' : 'flex flex-wrap items-center gap-x-5 gap-y-2',
        'text-sm',
        className,
      )}
    >
      <CapsuleItem icon={Gamepad2} label={t('ui_domain_capsule_game_build')} layout={layout}>
        <CompatBadge status={compat.status} build={build} size="sm" />
      </CapsuleItem>
      <CapsuleItem icon={Cpu} label={t('ui_domain_capsule_loader')} layout={layout}>
        {loaderVersion ? (
          <span className="font-mono text-xs">{t('ui_domain_version_min', { version: loaderVersion })}</span>
        ) : (
          <span className="text-fg-muted">{t('ui_domain_value_not_declared')}</span>
        )}
      </CapsuleItem>
      <CapsuleItem icon={Server} label={t('ui_domain_capsule_platform')} layout={layout}>
        {platform ? t(PLATFORM_KEY[platform]) : <span className="text-fg-muted">{unknown}</span>}
      </CapsuleItem>
      <CapsuleItem icon={Users} label={t('ui_domain_capsule_multiplayer')} layout={layout}>
        {multiplayerRole && multiplayerRole !== 'unknown' ? (
          t(MULTIPLAYER_KEY[multiplayerRole])
        ) : (
          <span className="text-fg-muted">{unknown}</span>
        )}
      </CapsuleItem>
      <CapsuleItem icon={Server} label={t('ui_domain_capsule_dedicated')} layout={layout}>
        <Answer value={dedicatedServer ?? 'unknown'} text={t(DEDICATED_KEY[dedicatedServer ?? 'unknown'])} />
      </CapsuleItem>
      <CapsuleItem icon={Eraser} label={t('ui_domain_capsule_safe_remove')} layout={layout}>
        <Answer value={safeToRemove ?? 'unknown'} text={t(SAFE_KEY[safeToRemove ?? 'unknown'])} />
      </CapsuleItem>
      <CapsuleItem icon={Puzzle} label={t('ui_domain_capsule_dependencies')} layout={layout}>
        {required + optional === 0
          ? t('ui_domain_dependencies_none')
          : t('ui_domain_dependencies_summary', { required, optional })}
      </CapsuleItem>
      <CapsuleItem icon={Ban} label={t('ui_domain_capsule_conflicts')} layout={layout}>
        {conflicts === 0 ? (
          t('ui_domain_conflicts_none')
        ) : (
          <span className="inline-flex items-center gap-1">
            <Icon icon={CircleAlert} size={14} className="text-danger" />
            {t('ui_domain_conflicts_count', { count: conflicts })}
          </span>
        )}
      </CapsuleItem>
    </dl>
  );
}

// -------------------------------------------------------------------------------------------
// FieldReportMeter
// -------------------------------------------------------------------------------------------

export interface FieldReportCounts {
  works: number;
  partial: number;
  broken: number;
}

/** Percent widths of the three segments; rounding never loses or overflows 100 %. */
export function reportShares({ works, partial, broken }: FieldReportCounts): FieldReportCounts {
  const total = works + partial + broken;
  if (total === 0) return { works: 0, partial: 0, broken: 0 };
  const w = Math.round((works / total) * 1000) / 10;
  const p = Math.round((partial / total) * 1000) / 10;
  return { works: w, partial: p, broken: Math.max(0, Math.round((100 - w - p) * 10) / 10) };
}

export interface FieldReportMeterProps extends FieldReportCounts {
  /** Build the counts refer to («1.0.4»). */
  build?: string | null;
  /** Where «Report» leads (the report form, or the sign-in page with a return path). */
  reportHref?: string;
  /** Console: open the report dialog instead of navigating. */
  onReport?: () => void;
  /** Per-build aggregates (newest first) for the breakdown disclosure. */
  byBuild?: readonly CompatAggregateDTO[];
  className?: string;
}

function Segment({ share, className }: { share: number; className: string }) {
  if (share <= 0) return null;
  return (
    <span className={cn('h-full first:rounded-s-full last:rounded-e-full', className)} style={{ width: `${share}%` }} />
  );
}

export function FieldReportMeter({
  works,
  partial,
  broken,
  build,
  reportHref,
  onReport,
  byBuild = [],
  className,
}: FieldReportMeterProps) {
  const { t, locale } = useDomainI18n();
  const total = works + partial + broken;
  const shares = reportShares({ works, partial, broken });
  const summary = t('ui_domain_reports_summary', { works, partial, broken });
  const reportLabel = t('ui_domain_reports_report');
  const reportClasses =
    'inline-flex min-h-6 items-center rounded-xs text-sm font-medium text-link underline decoration-1 underline-offset-3 hover:decoration-2';
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="flex items-baseline justify-between gap-3">
        <p className="readout">{build ? t('ui_domain_reports_title_on', { build }) : t('ui_domain_reports_title')}</p>
        {onReport ? (
          <button type="button" onClick={onReport} className={reportClasses}>
            {reportLabel}
          </button>
        ) : reportHref ? (
          <a href={reportHref} className={reportClasses}>
            {reportLabel}
          </a>
        ) : null}
      </div>
      {total === 0 ? (
        <p className="text-sm text-fg-muted">{t('ui_domain_reports_empty')}</p>
      ) : (
        <>
          <div role="img" aria-label={summary} className="flex h-2 w-full gap-0.5 overflow-hidden rounded-full bg-fg/8">
            <Segment share={shares.works} className="bg-success" />
            <Segment share={shares.partial} className="bg-warning" />
            <Segment share={shares.broken} className="bg-danger" />
          </div>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm tabular-nums" aria-hidden="true">
            <span className="inline-flex items-center gap-1">
              <Icon icon={CircleCheck} size={14} className="text-success" />
              {t('ui_domain_reports_works', { count: works, display: formatCount(locale, works) })}
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon icon={CircleAlert} size={14} className="text-warning" />
              {t('ui_domain_reports_partial', { count: partial, display: formatCount(locale, partial) })}
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon icon={CircleX} size={14} className="text-danger" />
              {t('ui_domain_reports_broken', { count: broken, display: formatCount(locale, broken) })}
            </span>
          </p>
        </>
      )}
      {byBuild.length > 0 ? (
        <details className="group/details text-sm">
          <summary className="cursor-pointer rounded-xs text-fg-muted hover:text-fg">
            {t('ui_domain_reports_by_build')}
          </summary>
          <ul className="mt-2 flex flex-col gap-1.5">
            {byBuild.map((aggregate) => (
              <li key={aggregate.gameBuild.id} className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs">{aggregate.gameBuild.label}</span>
                <span className="flex items-center gap-2 tabular-nums">
                  <CompatBadge status={aggregate.status} short size="sm" />
                  <span className="text-xs text-fg-muted">
                    {t('ui_domain_reports_summary', {
                      works: aggregate.works,
                      partial: aggregate.partial,
                      broken: aggregate.broken,
                    })}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </div>
  );
}
