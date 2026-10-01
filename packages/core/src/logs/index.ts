/**
 * Share logs: 24-hour game logs behind an unguessable link (migration 2250). Creation redacts and
 * parses the text, reading resolves the mods of the loader output against the catalog, the hourly
 * purge hard-deletes expired payloads.
 */
export * from './service.ts';
