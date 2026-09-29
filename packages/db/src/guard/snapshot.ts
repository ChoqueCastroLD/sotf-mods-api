/** Access to the frozen legacy catalog (PLAN §6.2), taken from 0000_legacy_baseline.sql. */

import type { LegacyCatalogSnapshot } from './catalog.ts';
import legacyCatalogJson from './legacy-catalog.json' with { type: 'json' };

export const LEGACY_CATALOG_FILE = new URL('./legacy-catalog.json', import.meta.url);

/** The 16 legacy tables, as frozen in the snapshot. */
export function loadLegacyCatalog(): LegacyCatalogSnapshot {
  return legacyCatalogJson as unknown as LegacyCatalogSnapshot;
}

export function legacyTableNames(): string[] {
  return Object.keys(loadLegacyCatalog().tables);
}
