import {
  COMPAT_STATUS_VALUES,
  CompatBadge,
  CompatCapsule,
  compatCapsulePropsOf,
  DependencyList,
  FieldReportMeter,
  ModChip,
  StatTile,
  VersionTable,
} from '../../src/domain/index.ts';
import {
  betaVersion,
  conflict,
  dependencies,
  modDetail,
  version,
  yankedVersion,
} from '../../src/domain/test/fixtures.ts';
import { DemoI18n, DemoRow } from './demo-kit.tsx';

export const title = 'Data and status · StatTile, compatibility, versions, dependencies';

export default function DataDemo() {
  return (
    <DemoI18n>
      <div className="flex flex-col gap-8">
        <DemoRow label="StatTile">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <StatTile
              label="Downloads"
              value={1_977_061}
              delta={{ change: 0.12, days: 7 }}
              sparkline={[40, 52, 48, 61, 70, 66, 81]}
            />
            <StatTile label="Mods" value={257} format="count" delta={{ change: 0, days: 7 }} />
            <StatTile label="Followers" value={58} format="count" delta={{ change: -0.04, days: 30 }} />
            <StatTile label="Survivors" value={3883} size="display" />
          </div>
        </DemoRow>
        <DemoRow label="CompatBadge (icon + text, always)">
          <div className="flex flex-wrap gap-2">
            {COMPAT_STATUS_VALUES.map((status) => (
              <CompatBadge key={status} status={status} build="1.0.4" />
            ))}
            {COMPAT_STATUS_VALUES.map((status) => (
              <CompatBadge key={`${status}-short`} status={status} build="1.0.4" short size="sm" />
            ))}
          </div>
        </DemoRow>
        <div className="grid gap-6 lg:grid-cols-2">
          <DemoRow label="CompatCapsule · list">
            <div className="rounded-lg border border-border bg-surface px-4">
              <CompatCapsule {...compatCapsulePropsOf(modDetail)} />
            </div>
          </DemoRow>
          <DemoRow label="FieldReportMeter">
            <div className="flex flex-col gap-6 rounded-lg border border-border bg-surface p-4">
              <FieldReportMeter
                works={31}
                partial={1}
                broken={3}
                build="1.0.4"
                reportHref="#report"
                byBuild={version.compat}
              />
              <FieldReportMeter works={0} partial={0} broken={0} build="1.0.4" reportHref="#report" />
            </div>
          </DemoRow>
        </div>
        <DemoRow label="CompatCapsule · row (unknown values, a conflict)">
          <CompatCapsule compat={modDetail.compatCurrent} layout="row" dependencies={[conflict]} />
        </DemoRow>
        <DemoRow label="VersionTable (beta, latest, yanked; new since last download)">
          <VersionTable versions={[betaVersion, version, yankedVersion]} lastDownloadedAt="2026-09-27T00:00:00.000Z" />
          <VersionTable versions={[]} />
        </DemoRow>
        <DemoRow label="ModChip · DependencyList">
          <div className="flex flex-wrap gap-2">
            {[...dependencies, conflict].map((dependency) => (
              <ModChip key={dependency.manifestId} dependency={dependency} />
            ))}
          </div>
          <DependencyList dependencies={[...dependencies, conflict]} />
          <DependencyList dependencies={[]} />
        </DemoRow>
      </div>
    </DemoI18n>
  );
}
