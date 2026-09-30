# Marcha atrás

PLAN §6.14 con las decisiones de §14.5 (sin backups) · ADR-0016 y ADR-0021. Runbook operativo del
corte: [`ops/runbooks/rollback/`](../../ops/runbooks/rollback/README.md); release y marcha atrás de código:
[`ops/runbooks/deploy/04-release-and-rollback.md`](../../ops/runbooks/deploy/04-release-and-rollback.md).

Principio: **el esquema solo se amplía**, así que cualquier versión anterior del código (v2 o
legacy) sigue funcionando sobre la base actual. Volver atrás es cambiar qué código sirve el
tráfico, nunca restaurar datos.

## Elegir el nivel

| Nivel | Síntoma | Acción | Pérdida |
|---|---|---|---|
| **R0** release v2 defectuosa | Un error introducido en la última release | Redesplegar la etiqueta anterior | Ninguna |
| **R1** volver a la legacy (≤ T+30) | Fallo grave de la v2 que no arregla una release anterior | Devolver los dominios a las apps legacy | Ninguna; las funciones solo-v2 quedan ocultas |
| **R2** backfill o fix erróneo | `verify-snapshot`/`db:invariants` muestran un diff inesperado | `db:revert-fix <fixId>` | Ninguna (fila a fila) |
| **R3** un trigger molesta | Errores o lentitud en escrituras de `Mod`, `Comment`, `ModReview`, `User` o `ModVersion` | `kill-switch.sql` | Ninguna; se resincroniza después |
| **R4** desastre de datos | Corrupción o borrado fuera de la aplicación | Sin backup no hay restauración (ver abajo) | Potencialmente total en lo afectado |

## R0 · Release anterior

1. GitHub → *Actions → deploy → Run workflow* con `tag: v2.x.(y-1)` (la etiqueta anterior).
2. El workflow re-etiqueta esas imágenes como `production` y redespliega; las migraciones de la
   release mala **se quedan** (son aditivas y el código anterior las ignora).
3. `ops/runbooks/deploy/smoke.sh production`.
4. Si el problema era de contenido cacheado: Cloudflare → *Caching → Purge Everything*.

Para staging: *Actions → release → Run workflow* sobre el commit anterior.

## R1 · Volver a la legacy (solo hasta T+30)

1. Anuncia en Discord que se vuelve temporalmente a la versión anterior.
2. Coolify, proyecto legacy: **arranca** `sotf-mods-api` y `sotf-mods-frontend` (siguen con
   `sotf_legacy_app` desde B2) y espera a que estén sanas.
3. Coolify, proyecto `sotf-mods-v2`, entorno `production`:
   - quita `https://sotf-mods.com` de `sotf-v2-web` y `https://sotf-mods.com/api,https://api.sotf-mods.com`
     de `sotf-v2-api`, y **para** web y api;
   - `sotf-v2-worker`: `LEGACY_COEXIST=true` y redespliega (o páralo).
4. Devuelve los dominios a las apps legacy tal como estaban antes del corte y redespliégalas.
5. Cloudflare → *Purge Everything*. Si la regla `r2-immutable` ya estaba activa, puede quedarse
   (los objetos de R2 no cambian).
6. Comprueba con GET: la landing legacy, `https://api.sotf-mods.com/api/mods?page=1` y un HEAD de
   descarga.

Consecuencias conocidas: todos vuelven a iniciar sesión en la legacy con la misma contraseña; las
reseñas, kits, notificaciones y reportes de la v2 se conservan pero no se ven; las descargas
contadas por la v2 ya están en `ModDownload`; los mods `removed` o `rejected` aparecen en la lista
«unapproved» de la legacy (riesgo aceptado).

Para volver a la v2 después: repite la fase D del corte (dominios a las apps v2, worker con
`LEGACY_COEXIST=false`, `node dist/backfill.js --delta --since-watermarks`) con marcas de agua
nuevas tomadas antes del cambio.

Después de T+30 la ventana se cierra: las apps legacy pueden quedar paradas indefinidamente, pero
ya no se garantiza que sirvan el contenido nuevo correctamente.

## R2 · Revertir un fix auditado

Los fixes sobre columnas legacy (B4, B5, B4M, B8 y `admin-grant`) guardan cada valor anterior en
`"DataFixAudit"`. En la terminal de `sotf-v2-tools`:

```bash
node src/cli/revert-fix.ts <fixId> --dry-run                 # qué cambiaría
node src/cli/revert-fix.ts <fixId> --confirm sotf_mods        # revierte fila a fila
node src/cli/verify-snapshot.ts
node src/cli/invariants.ts
```

Las filas modificadas después del fix se informan como conflicto y no se tocan. Si hay que deshacer
B4M y B4, primero B4M. Metadatos de R2 (B17): `r2:b17 --revert` con el manifiesto «before»
([`ops/runbooks/migration/r2-pass.md`](../../ops/runbooks/migration/r2-pass.md) §3).

## R3 · Kill-switch de triggers

```bash
psql "$OWNER_DATABASE_URL" -v ON_ERROR_STOP=1 -f ops/sql/kill-switch.sql          # quita los 5 triggers v2
# … diagnóstico y arreglo …
psql "$OWNER_DATABASE_URL" -v ON_ERROR_STOP=1 -f ops/sql/kill-switch-restore.sql  # los recrea
```

Mientras están quitados, el estado v2 (`status`) y el legacy (`isApproved`, `isHidden`) pueden
divergir en las filas escritas. Después de restaurarlos, relanza el backfill de estados (B12,
`node src/cli/backfill.ts B12 --confirm sotf_mods`) para resincronizarlas. Se ejecuta desde una
terminal con acceso a la red de Coolify (por ejemplo un contenedor efímero `postgres:16-alpine`
en la red `coolify`, como en [`ops/coolify/README.md`](../../ops/coolify/README.md) §4).

## R4 · Desastre de datos

Sin backups (§14.5) no hay restauración. Pasos para contener:

1. Para web, api y worker v2 (y la legacy si está en marcha) para que no se escriba más.
2. Identifica el alcance con consultas de solo lectura (`db:invariants`, `verify-snapshot`).
3. Si el daño afecta solo a columnas o tablas v2, los backfills son idempotentes y pueden
   regenerarlas (`backfill.ts <Bn> --confirm sotf_mods`).
4. Si afecta a datos legacy: lo recuperable es lo que otra fuente conserve (objetos de R2, el
   snapshot público del seed para los metadatos públicos). Anótalo y decide con calma.

Si en el futuro hay backups ([backups.md](backups.md) §3), R4 pasa a ser: restaurar el dump **en
una base nueva**, cambiar `DATABASE_URL` y reinyectar los deltas con
`node tooling/migration/replay-delta.ts --from <url> --to <url> --since-watermarks [--apply]`.
