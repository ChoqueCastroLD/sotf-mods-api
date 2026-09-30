# Runbook de marcha atrás (corte)

Sin backups (PLAN §14.5, ADR-0021): **volver atrás = volver a apuntar los dominios a las apps
legacy**, que siguen funcionando porque el esquema solo se amplió. El procedimiento completo, por
niveles R0-R4 con cada paso marcado U/A, está en [`docs/operations/rollback.md`](../../../docs/operations/rollback.md);
aquí solo el resumen para el día del corte.

| Situación | Acción | Comprobación (solo GET/HEAD) |
|---|---|---|
| Release v2 defectuosa (R0) | Actions → *deploy* con la etiqueta anterior | `ops/runbooks/deploy/smoke.sh production` |
| Fallo grave de la v2 hasta T+30 (R1) | Coolify: dominios de vuelta a `sotf-mods-frontend`/`sotf-mods-api`, parar web y api v2, worker con `LEGACY_COEXIST=true`; Cloudflare *Purge Everything* | landing legacy, `https://api.sotf-mods.com/api/mods?page=1`, HEAD de una descarga |
| Backfill erróneo (R2) | `pnpm db:revert-fix <fixId>` desde `sotf-v2-tools` | `db:invariants` |
| Un trigger molesta (R3) | `ops/sql/kill-switch.sql` (restaurar con `kill-switch-restore.sql`) | escrituras sin error |
| Corrupción (R4) | sin backup no hay restauración; ver `docs/operations/rollback.md` | |

Antes del corte anota las marcas de agua (`tooling/migration/replay-delta.ts --watermarks`) y los
dominios actuales de las apps legacy: son los datos que este runbook necesita.
