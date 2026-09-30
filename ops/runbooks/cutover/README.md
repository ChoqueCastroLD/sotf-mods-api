# Runbook de corte · notas obligatorias por paso

Complemento operativo de PLAN §6.13 (fases A–F) y §14.5 (sin backups: la marcha atrás es volver a
apuntar los dominios a las apps legacy). Recoge lo que los paquetes de trabajo dejaron anotado para
el corte en `docs/backlog/*.md`; el ensayo completo, `smoke-prod.sh` y los runbooks de marcha atrás
e *hypercare* los entrega WP-A0 en esta carpeta, `ops/runbooks/rollback/` y
`ops/runbooks/hypercare/`. Despliegue y tareas de Coolify: [`ops/runbooks/deploy/`](../deploy/README.md);
operación diaria: [`docs/operations/`](../../../docs/operations/README.md).

Cada nota dice **en qué paso** se aplica, **qué** hay que hacer y **cómo** se comprueba.

## B2 · B3: roles de PostgreSQL (dos pasadas de `ops/sql/roles.sql`)

- En **B2** `roles.sql` imprime `roles.sql: PARTIAL: sotf_legacy_app is ready; …`: es lo esperado,
  porque `"AuditLog"`, `"_v2_migrations"` y el esquema `pgboss` aún no existen.
- **Justo después del job de migraciones de B3** (y antes de que nada use `sotf_v2_app`) se vuelve
  a ejecutar `ops/sql/roles.sql` como *owner*. Debe imprimir
  `roles.sql: complete (sotf_v2_app, sotf_legacy_app and the v2 grants are in place)`.
- Sin la segunda pasada `sotf_v2_app` conserva `UPDATE`/`DELETE` sobre `"AuditLog"` a través de
  los privilegios por defecto (el registro de auditoría dejaría de ser inmutable). (WP-10)

## B3: semilla de taxonomía en convivencia (aceptación del dueño)

- `0025_seed_taxonomy` inserta en B3 (T−7) 8 categorías nuevas `type = 'Mod'` y 40 tags en las
  tablas legacy vivas. Hasta el corte, la web **legacy** (su `/api/categories` lista todas las
  categorías `Mod`) mostrará dos «Quality of Life» (la legacy `qol`, retirada en v2 con
  `retiredAt`, y la nueva `quality-of-life`) y categorías vacías; los autores legacy pueden
  publicar en ellas (inofensivo: son categorías v2 válidas y `qol` se resuelve por `legacySlugs`).
- **Antes de B3 el dueño lo acepta explícitamente.** Si no lo acepta, WP-A0 mueve la inserción de
  las filas nuevas a una migración aplicada en D4 (el linter lo permite; 0025 solo rellenaría
  columnas v2 de filas existentes). (WP-10)

## B5: backfills B1–B14

- **B6** escribe `tooling/migration/out/email-collisions.csv` (en el job, `out/` del directorio
  de trabajo del contenedor `sotf-tools`). El índice único `0045_idx_user_email_normalized_key`
  queda aplazado mientras haya colisiones; el dueño las resuelve (PLAN §6.13 A6) y
  `pnpm db:backfill` aplica `0045` solo cuando ya no quedan.
- **Invariante 4b** lista 5 enlaces de descripción que ya estaban rotos en la web legacy
  (`imaxel/axel` ×3, `aedev/chromascreens`, `jojojesper/better-golfcarts`) sin fallar: no es una
  regresión.
- **Invariante 3** cuenta `ModFavorite` + filas archivadas hasta la marca de agua de B5. Durante la
  convivencia el botón legacy de «quitar favorito» borra filas, así que un rojo nocturno de la
  invariante 3 tras *unfollows* legacy es esperado y se lee con eso en mente. (WP-14)
- **Revertir B5** (`pnpm db:revert-fix B5`) choca con el índice único `0038`: primero
  `pnpm db:migrate down --to 0037_idx_modfavorite_mod` y después el `revert-fix`. (WP-14)

## D1: marcas de agua

- Además de anotarlas, se guardan como JSON para `replay-delta.ts --watermarks`:

  ```json
  { "ModDownload": 0, "Comment": 0, "ModFavorite": 0, "User": 0, "Mod": 0 }
  ```

  (valores = `SELECT max(id)` de cada tabla en D1). (WP-14)

## D3: `LEGACY_COEXIST=false` solo con la legacy parada

- El worker pasa a `LEGACY_COEXIST=false` **después** de parar `sotf-mods-api` legacy (D2). Desde
  ese momento convierte las filas `"PendingMention"` en señales y las borra (B18) en ≤ 10 min, y
  arranca `legacy.counters`. Si la API legacy siguiera viva, seguiría creando menciones que ya
  nadie consumiría a tiempo. (WP-43)
- Justo después, la cuenta admin (PLAN §14.3) desde el terminal de la app `sotf-v2-tools`:
  `node src/cli/admin-grant.ts --email luis.choque.castro@outlook.com --role admin --confirm <base>`
  ([`05-migrations-and-backfills.md`](../deploy/05-migrations-and-backfills.md)).

## D6 · C2: comparación con la legacy (solo GET)

- Sombra de lecturas T1/T2 contra la API legacy mientras exista:
  `pnpm contract:legacy --base-url https://next.sotf-mods.com --compare-with https://api.sotf-mods.com`
  (≤ 2 rps a producción; la guarda del arnés rechaza cualquier otra cosa). (WP-24, WP-A1)

## Hypercare (T0 → T+30)

- **Uso de las rutas legacy** (UA y Origin, PLAN §6.13 E): no hay endpoint de administración;
  se lee con SQL de solo lectura. Dos procesos de API pueden crear dos filas para la misma clave y
  día, por eso se suma `count`:

  ```sql
  SELECT props->>'day' AS day, path, props->>'method' AS method, props->>'status' AS status,
         props->>'ua' AS ua, props->>'origin' AS origin, sum((props->>'count')::int) AS calls
  FROM "AnalyticsEvent"
  WHERE kind = 'legacy_call' AND ts >= now() - interval '7 days'
  GROUP BY 1, 2, 3, 4, 5, 6
  ORDER BY day DESC, calls DESC;
  ```

  Retención: 90 días (`cleanup.analytics`). (WP-32, WP-51)
- Las alertas automáticas de PLAN §10.3 aún no existen: las comprobaciones manuales están en
  [`docs/operations/monitoring.md`](../../../docs/operations/monitoring.md).
