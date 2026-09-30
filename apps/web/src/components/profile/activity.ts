/**
 * Model of the 12-month contribution heatmap (research/03 §6.4 «contribution contour», T0-15):
 * a week-per-column grid (Monday first, ISO weeks) from `from` to `to`, five intensity levels in
 * the Flare sequential scale, month labels, per-month totals and the list of active days (the
 * table alternative for screen readers and keyboard users).
 *
 * Everything is computed in UTC calendar days: the API sends ISO dates of UTC days.
 */

export interface ActivityDayInput {
  day: string;
  releases: number;
  comments: number;
  reviews: number;
  reports: number;
}

export interface HeatCell {
  /** ISO date (`2026-09-29`). */
  day: string;
  total: number;
  /** 0 (none) … 4 (busiest). */
  level: 0 | 1 | 2 | 3 | 4;
  /** Column (week index) and row (0 = Monday). */
  week: number;
  weekday: number;
  /** Outside `[from, to]` (padding of the first and last week). */
  outside: boolean;
  detail: ActivityDayInput | null;
}

export interface MonthLabel {
  /** First day of the month (`2026-09-01`). */
  month: string;
  /** Column where the month starts. */
  week: number;
}

export interface MonthTotal {
  month: string;
  releases: number;
  comments: number;
  reviews: number;
  reports: number;
  total: number;
  activeDays: number;
}

export interface HeatmapModel {
  cells: HeatCell[];
  weeks: number;
  months: MonthLabel[];
  monthTotals: MonthTotal[];
  /** Active days, most recent first. */
  activeDays: Array<ActivityDayInput & { total: number }>;
  totals: { releases: number; comments: number; reviews: number; reports: number; total: number; activeDays: number };
  /** Upper bounds (inclusive) of levels 1–3; level 4 is anything above. */
  thresholds: [number, number, number];
}

const DAY_MS = 86_400_000;

function parseDay(iso: string): number {
  const [y, mo, d] = iso.split('-').map(Number);
  return Date.UTC(y ?? 1970, (mo ?? 1) - 1, d ?? 1);
}

function isoDay(ms: number): string {
  return new Date(ms).toISOString().slice(0, 10);
}

function totalOf(day: ActivityDayInput): number {
  return day.releases + day.comments + day.reviews + day.reports;
}

/** Monday = 0 … Sunday = 6. */
function weekdayOf(ms: number): number {
  return (new Date(ms).getUTCDay() + 6) % 7;
}

/**
 * Level thresholds from the user's own distribution (quartiles of the active days), so a quiet
 * contributor still sees texture and a busy one is not a solid block. At least 1, 2, 3.
 */
function thresholdsOf(totals: number[]): [number, number, number] {
  if (totals.length === 0) return [1, 2, 3];
  const sorted = [...totals].sort((a, b) => a - b);
  const at = (q: number) => sorted[Math.min(sorted.length - 1, Math.floor(q * (sorted.length - 1)))] ?? 1;
  const t1 = Math.max(1, at(0.25));
  const t2 = Math.max(t1 + 1, at(0.5));
  const t3 = Math.max(t2 + 1, at(0.75));
  return [t1, t2, t3];
}

function levelOf(total: number, [t1, t2, t3]: [number, number, number]): HeatCell['level'] {
  if (total <= 0) return 0;
  if (total <= t1) return 1;
  if (total <= t2) return 2;
  if (total <= t3) return 3;
  return 4;
}

export function heatmapModel(from: string, to: string, days: readonly ActivityDayInput[]): HeatmapModel {
  const start = parseDay(from);
  const end = Math.max(start, parseDay(to));
  const byDay = new Map<string, ActivityDayInput>();
  for (const day of days) {
    if (totalOf(day) > 0) byDay.set(day.day, day);
  }
  const thresholds = thresholdsOf([...byDay.values()].map(totalOf));

  // Pad to whole weeks: the grid starts on the Monday of `from`'s week and ends on `to`'s Sunday.
  const gridStart = start - weekdayOf(start) * DAY_MS;
  const gridEnd = end + (6 - weekdayOf(end)) * DAY_MS;
  const cells: HeatCell[] = [];
  const months: MonthLabel[] = [];
  for (let ms = gridStart, index = 0; ms <= gridEnd; ms += DAY_MS, index += 1) {
    const day = isoDay(ms);
    const week = Math.floor(index / 7);
    const outside = ms < start || ms > end;
    const detail = outside ? null : (byDay.get(day) ?? null);
    const total = detail ? totalOf(detail) : 0;
    cells.push({ day, total, level: levelOf(total, thresholds), week, weekday: index % 7, outside, detail });
    // A month is labelled on the column holding its first day; the partial month at the start is
    // labelled on column 0 unless the next label is too close (labels need ~3 columns).
    if (!outside && (day.endsWith('-01') || ms === start)) {
      months.push({ month: `${day.slice(0, 7)}-01`, week });
    }
  }
  if (months.length > 1 && (months[1]?.week ?? 0) - (months[0]?.week ?? 0) < 3) months.shift();

  const monthMap = new Map<string, MonthTotal>();
  for (let ms = Date.UTC(new Date(start).getUTCFullYear(), new Date(start).getUTCMonth(), 1); ms <= end; ) {
    const date = new Date(ms);
    const month = isoDay(ms);
    monthMap.set(month.slice(0, 7), {
      month,
      releases: 0,
      comments: 0,
      reviews: 0,
      reports: 0,
      total: 0,
      activeDays: 0,
    });
    ms = Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 1);
  }

  const totals = { releases: 0, comments: 0, reviews: 0, reports: 0, total: 0, activeDays: 0 };
  const activeDays: HeatmapModel['activeDays'] = [];
  for (const day of byDay.values()) {
    const ms = parseDay(day.day);
    if (ms < start || ms > end) continue;
    const total = totalOf(day);
    activeDays.push({ ...day, total });
    totals.releases += day.releases;
    totals.comments += day.comments;
    totals.reviews += day.reviews;
    totals.reports += day.reports;
    totals.total += total;
    totals.activeDays += 1;
    const bucket = monthMap.get(day.day.slice(0, 7));
    if (bucket) {
      bucket.releases += day.releases;
      bucket.comments += day.comments;
      bucket.reviews += day.reviews;
      bucket.reports += day.reports;
      bucket.total += total;
      bucket.activeDays += 1;
    }
  }
  activeDays.sort((a, b) => (a.day < b.day ? 1 : a.day > b.day ? -1 : 0));

  return {
    cells,
    weeks: Math.floor((cells.length - 1) / 7) + 1,
    months,
    monthTotals: [...monthMap.values()].reverse(),
    activeDays,
    totals,
    thresholds,
  };
}

/** «Day N on the island»: calendar days since the account was created, day 1 included (UTC). */
export function dayOnIsland(createdAt: string, now: Date = new Date()): number {
  const created = new Date(createdAt);
  if (Number.isNaN(created.getTime())) return 1;
  const createdDay = Date.UTC(created.getUTCFullYear(), created.getUTCMonth(), created.getUTCDate());
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.max(1, Math.floor((today - createdDay) / DAY_MS) + 1);
}
