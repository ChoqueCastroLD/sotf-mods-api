/**
 * Thin migrate entry (PLAN §6.2, §11.7): the one-off Coolify task of the API image runs
 * `node dist/migrate.js [up|status|down …]` with MIGRATIONS_DATABASE_URL (owner credentials). The
 * logic is `@sotf/db`'s migrate CLI (migrations + pg-boss schema + superset guard); this file only
 * points it at the SQL files shipped next to the bundle.
 */
import { fileURLToPath } from 'node:url';
import { prepareMigrationsDir } from './env.ts';

prepareMigrationsDir(fileURLToPath(new URL('./migrations/', import.meta.url)));
await import('@sotf/db/cli/migrate');
