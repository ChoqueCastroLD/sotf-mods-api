import { Heart } from 'lucide-react';
import { BuildCard, BuildCardSkeleton, ModCard, ModCardSkeleton } from '../../src/domain/index.ts';
import { build, mod, modWithoutImage } from '../../src/domain/test/fixtures.ts';
import { Button, Icon, SkeletonGroup } from '../../src/index.ts';
import { DemoI18n, DemoRow } from './demo-kit.tsx';

export const title = 'Cards · ModCard, BuildCard';

const favourite = (
  <Button variant="icon" size="sm" aria-label="Follow" className="bg-surface/80">
    <Icon icon={Heart} size={16} />
  </Button>
);

export default function CardsDemo() {
  return (
    <DemoI18n>
      <div className="flex flex-col gap-8">
        <DemoRow label="ModCard · grid (third card: 240 px wide → compact layout by container query)">
          <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[repeat(2,minmax(0,1fr))_240px]">
            <ModCard mod={mod} currentBuild="1.0.4" action={favourite} now="2026-09-30T00:00:00.000Z" />
            <ModCard mod={modWithoutImage} currentBuild="1.0.4" isNew />
            <ModCard mod={mod} currentBuild="1.0.4" viewTransition={false} />
          </div>
        </DemoRow>
        <DemoRow label="ModCard · row (resize: stats and labels follow the card width)">
          <div className="flex flex-col gap-2">
            <ModCard mod={mod} variant="row" currentBuild="1.0.4" action={favourite} />
            <ModCard mod={modWithoutImage} variant="row" currentBuild="1.0.4" />
          </div>
        </DemoRow>
        <DemoRow label="ModCard · compact">
          <div className="grid max-w-sm gap-2">
            <ModCard mod={mod} variant="compact" viewTransition={false} />
            <ModCard mod={modWithoutImage} variant="compact" />
          </div>
        </DemoRow>
        <DemoRow label="ModCard · feature">
          <ModCard
            mod={mod}
            variant="feature"
            currentBuild="1.0.4"
            quote="I built it for my own saves first. Now 100k survivors fly around with it."
            viewTransition={false}
          />
        </DemoRow>
        <DemoRow label="Skeletons (appear after 300 ms)">
          <SkeletonGroup className="grid gap-4 sm:grid-cols-3">
            <ModCardSkeleton />
            <ModCardSkeleton variant="row" />
            <ModCardSkeleton variant="compact" />
          </SkeletonGroup>
          <SkeletonGroup>
            <ModCardSkeleton variant="feature" />
          </SkeletonGroup>
        </DemoRow>
        <DemoRow label="BuildCard">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <BuildCard build={build} pieces={1248} buildShareVersion="1.2" action={favourite} />
          </div>
        </DemoRow>
        <DemoRow label="Skeleton · build">
          <SkeletonGroup className="grid gap-4 sm:grid-cols-3">
            <BuildCardSkeleton />
          </SkeletonGroup>
        </DemoRow>
      </div>
    </DemoI18n>
  );
}
