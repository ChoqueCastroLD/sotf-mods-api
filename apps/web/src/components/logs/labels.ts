/**
 * Server side of the "Share logs" islands' text: renders every key of {@link LOG_LABEL_KEYS} with the
 * Paraglide messages of the request locale. Parametrised messages keep their `{name}` placeholders
 * (the island fills them). Only imported by `.astro` pages.
 */
import { m } from '@sotf/i18n/messages';
import { LOG_LABEL_KEYS, type LogLabels } from '../../islands/logs/labels.ts';

type MessageFn = (inputs?: Record<string, unknown>) => string;

const PLACEHOLDERS = ['size', 'seconds', 'count', 'shown', 'total', 'time', 'line', 'used', 'max'] as const;

export function logLabels(): LogLabels {
  const out = {} as Record<string, string>;
  const placeholders = Object.fromEntries(PLACEHOLDERS.map((name) => [name, `{${name}}`]));
  for (const key of LOG_LABEL_KEYS) {
    const fn = (m as unknown as Record<string, MessageFn | undefined>)[`logs_${key}`];
    if (!fn) throw new Error(`missing message logs_${key}`);
    out[key] = fn(placeholders);
  }
  return out as LogLabels;
}
