import { DependencyList, ModChip, StatTile, VersionTable } from '../../src/domain/index.ts';
import { betaVersion, conflict, dependencies, version, yankedVersion } from '../../src/domain/test/fixtures.ts';
import { DemoI18n, DemoRow } from './demo-kit.tsx';

export const title = 'Data and status · StatTile, versions, dependencies';

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
