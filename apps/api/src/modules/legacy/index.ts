/**
 * Registers the legacy `/api/*` compatibility layer (WP-32, `src/legacy/`) in the generated module
 * registry, which only scans `src/modules/*`.
 */
export { default } from '../../legacy/index.ts';
