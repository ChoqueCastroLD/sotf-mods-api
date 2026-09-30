# Runbooks de despliegue (WP-90)

Para el dueño del sitio. PLAN §10.2, §11 y §14. Orden recomendado la primera vez:

| # | Runbook | Cuándo |
|---|---|---|
| 1 | [`../../coolify/README.md`](../../coolify/README.md) | Crear el proyecto Coolify, apps, variables y entornos de GitHub |
| 2 | [`02-same-origin-api.md`](02-same-origin-api.md) | Validar `/api` en el mismo origen en staging (obligatorio) |
| 3 | [`../../cloudflare/README.md`](../../cloudflare/README.md) | Ajustes y reglas de Cloudflare (C3; `r2-immutable` en D5) |
| 4 | [`04-release-and-rollback.md`](04-release-and-rollback.md) | Cada release: staging automático, producción con etiqueta `v*` |
| 5 | [`05-migrations-and-backfills.md`](05-migrations-and-backfills.md) | Migraciones, backfills y CLIs del operador en Coolify |
| 6 | [`06-staging.md`](06-staging.md) | Carga y reinicio semanal de staging desde el seed (§14.5) |

Scripts (solo GET y HEAD; se niegan a llamar a rutas de descarga, favoritos, approve o KelvinSeek):

| Script | Qué comprueba |
|---|---|
| `smoke.sh staging\|production\|preflight\|<origen> [api]` | Todo, en orden; `SMOKE_WAIT_FOR_SHA` espera primero a la release |
| `smoke-web.sh <origen> [staging\|production]` | `/healthz`, landing, locales, páginas clave, cabeceras, assets inmutables, 404/301, noindex fuera de producción |
| `smoke-api.sh <origen> [host api]` | v2 (OpenAPI, listado, detalle, problem+json, cabeceras de caché) y la API legacy de RedManager/UpdatesChecker |
| `smoke-r2.sh <origen> [r2]` | Un HEAD a la miniatura de un mod en `r2.sotf-mods.com` |

`staging-lock-seed-accounts.sql`: deja inutilizables las contraseñas conocidas del seed en
staging (ver `06-staging.md`).
