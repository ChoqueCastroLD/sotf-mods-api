# Runbook de hypercare (T0 → T+30)

Comprobaciones diarias tras el corte. Los detalles y las consultas SQL de solo lectura están en
[`docs/operations/monitoring.md`](../../../docs/operations/monitoring.md); la marcha atrás en
[`../rollback/README.md`](../rollback/README.md).

## Cada día (5 minutos)

1. Coolify: las apps `sotf-v2-web`, `-api`, `-worker` y `-migrate` en *Running (healthy)*.
2. `ops/runbooks/deploy/smoke.sh production` (solo GET/HEAD; equivale al `smoke-prod` del plan).
3. Consola de moderación (`/ranger`) → Admin: colas de pg-boss, *dead letters* (deben ser 0) y estado
   de la purga de Cloudflare. El worker avisa por email a los admins ante *dead letters* nuevas y al
   80 % del presupuesto de KelvinSeek.
4. Logs de la api en Coolify: 5xx, `csp violation` y errores de `legacy` (clientes RedManager).
5. `db:invariants` desde `sotf-v2-tools` (párala al terminar).

## Hitos

| Cuándo | Qué |
|---|---|
| T+1 | Revisar Search Console (cobertura, redirecciones 301 legacy) y Sentry |
| T+7 | Borrar el registro DNS del subdominio legacy `files` si Analytics confirma 0 tráfico; retirar la pasada de R2 pendiente |
| T+14 | Decidir los alias snake_case (`LEGACY_SNAKE_ALIASES`) |
| T+30 | Cerrar la ventana de marcha atrás a la legacy; parar las apps legacy |
