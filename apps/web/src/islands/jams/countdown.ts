/**
 * Countdown of the jam hero: fills the four cells of every `[data-jam-clock]` (days, hours,
 * minutes, seconds) and replaces the server-rendered absolute date of every
 * `[data-jam-countdown]` with the time left (`2 d 04:12:09`, units from `Intl`, so every locale
 * reads naturally), and keeps both ticking. At zero the cells stay at 00 and the absolute date
 * stays (the worker moves the phase within a minute; a reload shows the new one). No live region:
 * a ticking clock must never be announced; the `<time datetime>` keeps the exact instant.
 */

const pad = (value: number): string => String(value).padStart(2, '0');

export function formatRemaining(ms: number, locale: string): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86_400);
  const hours = Math.floor((total % 86_400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  const clock = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  if (days === 0) return clock;
  let dayText: string;
  try {
    dayText = new Intl.NumberFormat(locale, { style: 'unit', unit: 'day', unitDisplay: 'narrow' }).format(days);
  } catch {
    dayText = `${days}d`;
  }
  return `${dayText} ${clock}`;
}

function fillClock(clock: HTMLElement, ms: number): void {
  const total = Math.max(0, Math.floor(ms / 1000));
  const values: Record<string, string> = {
    d: pad(Math.floor(total / 86_400)),
    h: pad(Math.floor((total % 86_400) / 3600)),
    m: pad(Math.floor((total % 3600) / 60)),
    s: pad(total % 60),
  };
  for (const cell of Array.from(clock.querySelectorAll<HTMLElement>('[data-unit]'))) {
    const next = values[cell.dataset.unit ?? ''];
    if (next !== undefined && cell.textContent !== next) cell.textContent = next;
  }
}

export function startCountdowns(root: ParentNode): void {
  const clocks = Array.from(root.querySelectorAll<HTMLElement>('[data-jam-clock]')).flatMap((node) => {
    const at = Date.parse(node.dataset.jamClock ?? '');
    return Number.isFinite(at) ? [{ node, at }] : [];
  });
  const nodes = Array.from(root.querySelectorAll<HTMLElement>('[data-jam-countdown]'));
  if (nodes.length === 0 && clocks.length === 0) return;
  const targets = nodes.flatMap((node) => {
    const at = Date.parse(node.dataset.jamCountdown ?? '');
    return Number.isFinite(at)
      ? [{ node, at, original: node.textContent ?? '', locale: node.dataset.locale ?? 'en' }]
      : [];
  });
  const tick = (): boolean => {
    let live = false;
    for (const clock of clocks) {
      const left = clock.at - Date.now();
      fillClock(clock.node, left);
      if (left > 0) live = true;
    }
    for (const target of targets) {
      const left = target.at - Date.now();
      if (left > 0) {
        target.node.textContent = formatRemaining(left, target.locale);
        live = true;
      } else {
        target.node.textContent = target.original;
      }
    }
    return live;
  };
  if (!tick()) return;
  const timer = setInterval(() => {
    if (!tick()) clearInterval(timer);
  }, 1000);
}
