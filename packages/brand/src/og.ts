/**
 * Default Open Graph image (PLAN §3.2): 1200 × 630, Night background, topography, the
 * stacked lockup and a waypoint. Rasterised to `/brand/og-default.png` by the build.
 */

import { palette } from './colors.ts';
import { READOUTS } from './generated/brand-data.gen.ts';
import { lockupBody, lockupGeometry } from './logo.ts';
import { fmt, svgRoot } from './svg.ts';
import { topoGroup, topoLines } from './topo.ts';

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

/** Seed of the default OG terrain. */
export const OG_DEFAULT_SEED = 'sotf-mods:og-10';

/** SVG source of `/brand/og-default.png`. */
export function ogDefaultSvg(): string {
  const lines = topoLines(OG_DEFAULT_SEED, {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    levels: 15,
    peaks: 3,
    roughness: 0.45,
    step: OG_HEIGHT / 40,
    precision: 1,
    summitRegion: [0.6, 0.25, 0.86, 0.7],
  });

  // Stacked lockup on the left third, vertically centred.
  const lockup = lockupGeometry('stacked');
  const lockupHeight = 372;
  const scale = lockupHeight / lockup.bounds.height;
  const lockupX = 112;
  const lockupY = (OG_HEIGHT - lockupHeight) / 2;

  // «SOTF-MODS.COM» readout, bottom right, preceded by a live dot.
  const readoutCap = 18;
  const readoutScale = readoutCap / 100;
  const domain = READOUTS.domain;
  const readoutRight = OG_WIDTH - 72;
  const readoutX = readoutRight - domain.x2 * readoutScale;
  const readoutBaseline = OG_HEIGHT - 60;
  const dotX = readoutX + domain.x1 * readoutScale - 20;
  const dotY = readoutBaseline - readoutCap / 2;

  const { x: sx, y: sy } = lines.summit;
  const flare = palette.flare[400];
  const signal = palette.signal[300];

  const body =
    `<rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="${palette.night[975]}"/>` +
    topoGroup(lines, { color: palette.night[700], strokeWidth: 1.5, indexStrokeWidth: 2.75 }) +
    // Waypoint on the summit: ping rings + dot.
    `<circle cx="${fmt(sx, 1)}" cy="${fmt(sy, 1)}" r="46" fill="none" stroke="${flare}" stroke-width="2" opacity=".22"/>` +
    `<circle cx="${fmt(sx, 1)}" cy="${fmt(sy, 1)}" r="26" fill="none" stroke="${flare}" stroke-width="2.5" opacity=".5"/>` +
    `<circle cx="${fmt(sx, 1)}" cy="${fmt(sy, 1)}" r="10" fill="${flare}"/>` +
    `<g transform="translate(${fmt(lockupX, 2)} ${fmt(lockupY, 2)}) scale(${fmt(scale, 4)})">${lockupBody('stacked', 'night')}</g>` +
    `<circle cx="${fmt(dotX, 1)}" cy="${fmt(dotY, 1)}" r="6" fill="${signal}"/>` +
    `<path transform="translate(${fmt(readoutX, 2)} ${fmt(readoutBaseline, 2)}) scale(${fmt(readoutScale, 4)})" fill="${palette.night[300]}" d="${domain.d}"/>`;

  return svgRoot(
    { viewBox: [0, 0, OG_WIDTH, OG_HEIGHT], width: OG_WIDTH, height: OG_HEIGHT, title: 'SOTF Mods' },
    body,
  );
}
