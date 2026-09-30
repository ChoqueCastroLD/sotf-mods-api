# Manual de operaciones de SOTF Mods v2

Para el dueño del sitio (quien opera Coolify, Cloudflare y la base de datos). Los agentes nunca
tocan producción: solo preparan, ensayan en local y verifican con GET/HEAD (PLAN §12.1).

Este manual es el punto de entrada: explica **qué** hacer y **cuándo**, y enlaza los runbooks
paso a paso que viven junto al código que describen (`ops/`).

| Tema | Documento | Resumen |
|---|---|---|
| Despliegue | [deploy.md](deploy.md) | Staging automático, producción por etiqueta `v*`, migraciones y backfills |
| Backups | [backups.md](backups.md) | La decisión de **no** tener backups, qué la compensa y la recomendación si cambias de idea |
| Marcha atrás | [rollback.md](rollback.md) | Niveles R0–R4: release anterior, volver a la legacy, revertir un fix, kill-switch, desastre |
| Rotación de secretos | [secret-rotation.md](secret-rotation.md) | Qué secretos hay, cuándo rotarlos y cómo, sin cortar el servicio |
| Vigilancia e incidentes | [monitoring.md](monitoring.md) | Salud, logs, colas, invariantes, comprobaciones diarias y primeros pasos ante un incidente |

## Mapa del sistema en producción

```
Cloudflare (DNS, TLS, caché con Cache-Tag, WAF, Turnstile)
   ├── sotf-mods.com ───────────────► sotf-v2-web  (Astro SSR, :4321)
   │      └── sotf-mods.com/api ────► sotf-v2-api  (Fastify, :3001)  ◄── api.sotf-mods.com
   └── r2.sotf-mods.com ────────────► bucket R2 `sotf-mods` (descargas 302 directas)

sotf-v2-worker (pg-boss, health :3002)      sotf-v2-migrate (tarea, :3003)
sotf-v2-tools (parada; CLIs del operador)   sotf-mods-db (PostgreSQL 16 existente, compartida con la legacy)
```

- Coolify: proyecto `sotf-mods-v2` con entornos `staging` (`beta.sotf-mods.com`) y `production`.
  Topología, variables y health checks: [`ops/coolify/README.md`](../../ops/coolify/README.md).
- Cloudflare: [`ops/cloudflare/README.md`](../../ops/cloudflare/README.md).
- Imágenes: `ghcr.io/choquecastrold/sotf-node` (api, worker, migrate), `sotf-web` y `sotf-tools`
  ([`ops/docker/README.md`](../../ops/docker/README.md)).
- Las apps legacy (`sotf-mods-api`, `sotf-mods-frontend`) se **paran sin borrarse** en el corte y
  son la marcha atrás durante 30 días.

## Reglas que no se rompen nunca

1. **Solo aditivo** en la base de producción: nada de `UPDATE`/`DELETE` sobre tablas legacy fuera
   de la aplicación, ni `down` de migraciones en producción (ADR-0021, PLAN §14.5).
2. **Los mods sin aprobar se quedan como están** (`pending`); ningún script los rechaza, archiva ni
   borra (§14.1).
3. **Ningún secreto en el repositorio**, en logs ni en documentos; viven solo en Coolify y en los
   entornos de GitHub (§9.4).
4. **Nunca se renombra ni se borra una clave legacy de R2.**
5. Todo CLI que escribe es ensayo (*dry run*) por defecto y pide `--apply` o `--confirm <base>`.

## Calendario de operación

| Cuándo | Qué | Dónde |
|---|---|---|
| Cada release | Staging automático; producción con etiqueta y aprobación | [deploy.md](deploy.md) |
| Diario (hypercare T0 → T+30) | Comprobaciones de [monitoring.md](monitoring.md) §3 | Coolify, Sentry, Ranger Station |
| Semanal | Reinicio de staging con el seed | [`ops/runbooks/deploy/06-staging.md`](../../ops/runbooks/deploy/06-staging.md) |
| T+1 tras el corte | Rotación de secretos heredados | [secret-rotation.md](secret-rotation.md) |
| T+7 | Borrar el registro DNS del host de ficheros legacy si Cloudflare Analytics confirma 0 tráfico | Cloudflare → DNS |
| T+30 | Cerrar la ventana de marcha atrás a la legacy; decidir los alias snake_case | [rollback.md](rollback.md) |
| ≥ T+60 | Fase *contract* (solo con aprobación explícita) | PLAN §6.13 F |
| Anual | Renovar el token de GHCR de Coolify | [secret-rotation.md](secret-rotation.md) |

El corte en sí (fases A–F de PLAN §6.13) tiene su runbook propio en `ops/runbooks/cutover/`
(WP-A0), que este manual complementa.
