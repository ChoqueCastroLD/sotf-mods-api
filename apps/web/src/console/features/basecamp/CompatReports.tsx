/**
 * Field reports of one mod by version and game build (PLAN §7.10): the consensus on the current
 * build, the «possibly outdated» warning and the works / partial / broken counts. Shared by the
 * editor's compatibility tab and the analytics screen.
 */
import { Badge } from '@sotf/ui/badge';
import { Icon } from '@sotf/ui/icons';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { modCompatQuery } from './api.ts';
import { number } from './format.ts';
import { bt } from './i18n.ts';
import { compatStatusLabel, compatStatusVariant } from './labels.ts';
import { PanelError, PanelSkeleton } from './shared.tsx';

export function CompatReports({ modId, withInboxLink = true }: { modId: number; withInboxLink?: boolean }) {
  const compat = useQuery(modCompatQuery(modId));
  if (compat.isPending) return <PanelSkeleton rows={2} />;
  if (compat.isError) return <PanelError error={compat.error} onRetry={() => void compat.refetch()} />;
  const rows = compat.data.versions.flatMap((version) =>
    version.builds.map((build) => ({ version: version.version, build })),
  );
  const current = compat.data.current;
  return (
    <div className="grid gap-3">
      <p className="flex flex-wrap items-center gap-2 text-sm text-fg">
        <Badge variant={compatStatusVariant(current.status)} size="sm">
          {compatStatusLabel(current.status)}
        </Badge>
        {current.gameBuild
          ? bt('basecamp_compat_current', {
              build: current.gameBuild.label,
              works: number(current.works),
              partial: number(current.partial),
              broken: number(current.broken),
            })
          : bt('basecamp_compat_no_current')}
      </p>
      {compat.data.possiblyOutdated ? (
        <p className="flex items-center gap-2 text-sm text-warning">
          <Icon icon={AlertTriangle} size={16} />
          {bt('basecamp_compat_outdated')}
        </p>
      ) : null}
      {rows.length === 0 ? (
        <p className="text-sm text-fg-muted">{bt('basecamp_compat_no_reports')}</p>
      ) : (
        <div className="overflow-x-auto rounded-md border border-border">
          <table className="w-full border-collapse text-sm tabular-nums">
            <caption className="sr-only">{bt('basecamp_compat_table')}</caption>
            <thead className="bg-sunken">
              <tr>
                <th scope="col" className="px-3 py-1.5 text-start readout">
                  {bt('basecamp_compat_col_version')}
                </th>
                <th scope="col" className="px-3 py-1.5 text-start readout">
                  {bt('basecamp_compat_col_build')}
                </th>
                <th scope="col" className="px-3 py-1.5 text-start readout">
                  {bt('basecamp_compat_col_status')}
                </th>
                <th scope="col" className="px-3 py-1.5 text-end readout">
                  {bt('basecamp_compat_works')}
                </th>
                <th scope="col" className="px-3 py-1.5 text-end readout">
                  {bt('basecamp_compat_partial')}
                </th>
                <th scope="col" className="px-3 py-1.5 text-end readout">
                  {bt('basecamp_compat_broken')}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ version, build }) => (
                <tr key={`${build.modVersionId}:${build.gameBuild.id}`} className="border-t border-border">
                  <th scope="row" className="px-3 py-1.5 text-start font-mono text-xs font-normal">
                    v{version}
                  </th>
                  <td className="px-3 py-1.5">
                    {build.gameBuild.label}
                    {build.gameBuild.isCurrent ? (
                      <span className="ms-2 text-xs text-fg-subtle">{bt('basecamp_compat_current_build')}</span>
                    ) : null}
                    {build.authorTested ? (
                      <span className="ms-2 text-xs text-fg-subtle">{bt('basecamp_compat_author_tested')}</span>
                    ) : null}
                  </td>
                  <td className="px-3 py-1.5">
                    <Badge variant={compatStatusVariant(build.status)} size="sm">
                      {compatStatusLabel(build.status)}
                    </Badge>
                  </td>
                  <td className="px-3 py-1.5 text-end">{number(build.works)}</td>
                  <td className="px-3 py-1.5 text-end">{number(build.partial)}</td>
                  <td className="px-3 py-1.5 text-end">{number(build.broken)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {withInboxLink ? (
        <Link
          to="/basecamp/inbox"
          search={{ type: 'compat' }}
          className="inline-flex items-center gap-1 text-sm text-link hover:underline"
        >
          {bt('basecamp_compat_to_inbox')}
          <Icon icon={ArrowRight} size={14} />
        </Link>
      ) : null}
    </div>
  );
}
