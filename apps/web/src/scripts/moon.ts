/**
 * Footer moon phase (PLAN §3.7): the server renders the phase of the render date; cached HTML
 * can be up to a day old, so the client recomputes it from its own clock (≈ 0.3 KB). Localized
 * names and the label template come from data attributes (no i18n code in the bundle).
 */
import { moonPhase } from '@sotf/brand/moon';

export function initMoon(root: ParentNode = document, now: Date = new Date()): void {
  const holder = root.querySelector<HTMLElement>('[data-moon]');
  if (!holder) return;
  let names: unknown;
  try {
    names = JSON.parse(holder.dataset.moonNames ?? '[]');
  } catch {
    return;
  }
  if (!Array.isArray(names) || names.length !== 8) return;
  const phase = moonPhase(now);
  const name = names[phase.index];
  const template = holder.dataset.moonTemplate;
  const label = holder.querySelector('[data-moon-label]');
  const icon = holder.querySelector('[data-moon-icon]');
  if (label && typeof name === 'string' && template) label.textContent = template.replace('{phase}', name);
  icon?.setAttribute('href', `/brand/field-kit.svg#fk-moon-phase-${phase.index}`);
}
