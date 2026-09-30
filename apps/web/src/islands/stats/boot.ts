/**
 * Loader of the public stats chart of the mod page (WP-62). Tiny, part of the page script: the
 * server already rendered the SVG sparkline; the Recharts island (React + Recharts, a lazy chunk)
 * is fetched only when the visitor asks for the chart.
 */

export function bootStats(root: ParentNode): void {
  const mount = root.querySelector<HTMLElement>('[data-island="mod-stats"]');
  if (!mount || mount.dataset.hydrated !== undefined) return;
  const button = mount.querySelector<HTMLButtonElement>('[data-stats-open]');
  const chart = mount.querySelector<HTMLElement>('[data-stats-chart]');
  const modId = Number(mount.dataset.modId);
  if (!button || !chart || !Number.isInteger(modId) || modId <= 0) return;
  let labels: Record<string, string>;
  try {
    labels = JSON.parse(mount.dataset.labels ?? '{}') as Record<string, string>;
  } catch {
    return;
  }
  button.addEventListener('click', () => {
    button.hidden = true;
    chart.hidden = false;
    chart.textContent = labels.loading ?? '';
    chart.setAttribute('aria-busy', 'true');
    void import('./mount.tsx')
      .then(({ mountStats }) => mountStats(chart, { modId, labels }))
      .catch(() => {
        chart.textContent = labels.error ?? '';
      })
      .finally(() => chart.removeAttribute('aria-busy'));
  });
}
