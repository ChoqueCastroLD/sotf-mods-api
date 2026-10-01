/**
 * Builds the optimized derivatives (AVIF + WebP, responsive widths) of the concept art used by the
 * entity pages (mod, build, kit) into `apps/web/public/art/entity/`. The painted sources are not in
 * the repository: point `ART_SRC` at the folder that holds them (default `/root/sotf-mods/art-src`).
 *
 *   ART_SRC=/path/to/art-src node tooling/scripts/art-entity.ts
 */
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { REPO_ROOT } from './lib/repo.ts';

const SRC = process.env.ART_SRC ?? '/root/sotf-mods/art-src';
const OUT = join(REPO_ROOT, 'apps/web/public/art/entity');

interface Job {
  name: string;
  source: string;
  widths: number[];
}

const JOBS: Job[] = [
  // Empty comments / reviews / versions: the backpack and the GPS in the fog.
  { name: 'empty', source: 'empty-state.png', widths: [320, 640] },
];

mkdirSync(OUT, { recursive: true });
for (const job of JOBS) {
  for (const width of job.widths) {
    const base = () => sharp(join(SRC, job.source)).resize({ width, withoutEnlargement: true });
    await base()
      .avif({ quality: 46, effort: 6 })
      .toFile(join(OUT, `${job.name}-${width}.avif`));
    await base()
      .webp({ quality: 70, effort: 6 })
      .toFile(join(OUT, `${job.name}-${width}.webp`));
  }
  process.stdout.write(`ok ${job.name}\n`);
}
