/**
 * Builds the optimized derivatives (AVIF + WebP, responsive widths) of the Mod Jams concept art
 * into `apps/web/public/art/jams/`. The painted sources are not in the repository: point
 * `ART_SRC` at the folder that holds them (default `/root/sotf-mods/art-src`).
 *
 *   ART_SRC=/path/to/art-src node tooling/scripts/art-jams.ts
 */
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { REPO_ROOT } from './lib/repo.ts';

const SRC = process.env.ART_SRC ?? '/root/sotf-mods/art-src';
const OUT = join(REPO_ROOT, 'apps/web/public/art/jams');

interface Job {
  name: string;
  source: string;
  widths: number[];
}

const WIDE = [640, 1024, 1584];
const JOBS: Job[] = [
  { name: 'winter', source: 'jam-winter.png', widths: WIDE },
  { name: 'spring', source: 'jam-spring.png', widths: WIDE },
  { name: 'summer', source: 'jam-summer.png', widths: WIDE },
  { name: 'autumn', source: 'jam-autumn.png', widths: WIDE },
  { name: 'generic', source: 'jam-generic.png', widths: WIDE },
  { name: 'cabin', source: 'cabin-waypoint.png', widths: WIDE },
  { name: 'empty', source: 'empty-state.png', widths: [480, 800] },
  { name: 'trophy', source: 'trophy.png', widths: [400, 800] },
];

mkdirSync(OUT, { recursive: true });
for (const job of JOBS) {
  for (const width of job.widths) {
    const base = () => sharp(join(SRC, job.source)).resize({ width, withoutEnlargement: true });
    await base()
      .avif({ quality: 48, effort: 6 })
      .toFile(join(OUT, `${job.name}-${width}.avif`));
    await base()
      .webp({ quality: 72, effort: 6 })
      .toFile(join(OUT, `${job.name}-${width}.webp`));
  }
  process.stdout.write(`ok ${job.name}\n`);
}
