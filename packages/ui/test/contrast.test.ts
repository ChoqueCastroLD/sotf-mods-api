/**
 * Recomputes every contrast pair of research/03 §4.1 from the values that actually ship in
 * tokens.css (WCAG 2.x formula) and checks each against its threshold. The research table is
 * parsed, so the test also proves tokens.css and the research agree on every hex value.
 */
import { contrastRatio } from '@sotf/brand/colors';
import { describe, expect, it } from 'vitest';
import { BADGE_SOFT_HUES } from '../src/badge.tsx';
import { colorTokens, research, type ThemedColor } from './helpers/tokens.ts';

const tokens = colorTokens();

function token(name: string): ThemedColor {
  const value = tokens.get(name);
  if (!value) throw new Error(`--color-${name} is missing from tokens.css`);
  return value;
}

const SURFACES = ['bg', 'surface', 'raised', 'sunken'] as const;
type Theme = 'day' | 'night';

interface ResearchRow {
  token: string;
  night: string;
  nightRatios: number[];
  day: string;
  dayRatios: number[];
  threshold: number;
}

function researchRows(): ResearchRow[] {
  const section = research.slice(research.indexOf('#### Tokens semánticos y contraste verificado'));
  const table = section.slice(0, section.indexOf('**Pares de botón:**'));
  const rows: ResearchRow[] = [];
  for (const line of table.split('\n')) {
    const cells = line.split('|').map((cell) => cell.trim());
    const name = /^`([a-z-]+)`/.exec(cells[1] ?? '')?.[1];
    const night = /`(#[0-9A-F]{6})`/i.exec(cells[2] ?? '')?.[1];
    const day = /`(#[0-9A-F]{6})`/i.exec(cells[4] ?? '')?.[1];
    if (!name || !night || !day) continue;
    const ratios = (cell: string | undefined) => (cell ?? '').split('/').map((part) => Number.parseFloat(part));
    rows.push({
      token: name,
      night: night.toUpperCase(),
      nightRatios: ratios(cells[3]),
      day: day.toUpperCase(),
      dayRatios: ratios(cells[5]),
      threshold: Number.parseFloat(cells[6] ?? ''),
    });
  }
  return rows;
}

const rows = researchRows();

describe('contrast (research/03 §4.1)', () => {
  it('parses the whole research table', () => {
    expect(rows.map((row) => row.token)).toEqual([
      'fg',
      'fg-muted',
      'fg-subtle',
      'border-strong',
      'primary',
      'primary-hover',
      'link',
      'signal',
      'success',
      'warning',
      'danger',
      'featured',
      'blueprint',
      'focus',
    ]);
  });

  describe.each(rows)('$token', (row) => {
    it('ships the research values', () => {
      expect(token(row.token)).toEqual({ day: row.day, night: row.night });
    });

    it.each(['night', 'day'] as const)('meets its threshold on every surface (%s)', (theme: Theme) => {
      const expected = theme === 'night' ? row.nightRatios : row.dayRatios;
      const foreground = token(row.token)[theme];
      expected.forEach((researchRatio, index) => {
        const surface = SURFACES[index] as (typeof SURFACES)[number];
        const ratio = contrastRatio(foreground, token(surface)[theme]);
        expect(ratio, `${row.token} on ${surface}`).toBeGreaterThanOrEqual(row.threshold);
        // Same number as the research (rounded to 2 decimals).
        expect(Math.abs(ratio - researchRatio), `${row.token} on ${surface}`).toBeLessThanOrEqual(0.011);
      });
    });
  });

  it.each([
    ['primary-fg', 'primary'],
    ['primary-fg', 'primary-hover'],
    ['danger-fg', 'danger'],
  ])('button text %s on %s ≥ 4.5 in both themes', (fg, bg) => {
    for (const theme of ['day', 'night'] as const) {
      expect(contrastRatio(token(fg)[theme], token(bg)[theme])).toBeGreaterThanOrEqual(4.5);
    }
  });

  it('matches the documented button pairs', () => {
    expect(contrastRatio(token('primary-fg').night, token('primary').night)).toBeCloseTo(7.15, 1);
    expect(contrastRatio(token('primary-fg').day, token('primary').day)).toBeCloseTo(5.2, 1);
    expect(contrastRatio(token('danger-fg').night, token('danger').night)).toBeCloseTo(7.08, 1);
    expect(contrastRatio(token('danger-fg').day, token('danger').day)).toBeCloseTo(5.33, 1);
  });

  it.each(Object.entries(BADGE_SOFT_HUES))('soft %s badge (%s) text ≥ 7:1', (_variant, hue) => {
    // Night: {hue}-200 on {hue}-950 · Day: {hue}-800 on {hue}-100.
    expect(contrastRatio(token(`${hue}-200`).night, token(`${hue}-950`).night)).toBeGreaterThanOrEqual(7);
    expect(contrastRatio(token(`${hue}-800`).day, token(`${hue}-100`).day)).toBeGreaterThanOrEqual(7);
  });

  it('featured badge text ≥ 4.5 in both themes', () => {
    expect(contrastRatio('#FFFFFF', token('featured').day)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(token('night-975').night, token('featured').night)).toBeGreaterThanOrEqual(4.5);
  });

  it('chart slots keep ≥ 3:1 against the chart surfaces', () => {
    for (let slot = 1; slot <= 8; slot++) {
      const color = token(`chart-${slot}`);
      for (const surface of ['surface', 'raised'] as const) {
        expect(
          contrastRatio(color.night, token(surface).night),
          `chart-${slot} night ${surface}`,
        ).toBeGreaterThanOrEqual(3);
        expect(contrastRatio(color.day, token(surface).day), `chart-${slot} day ${surface}`).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it('border-strong is the same ≥ 3:1 control border in both themes', () => {
    expect(token('border-strong').day).toBe(token('border-strong').night);
  });
});
