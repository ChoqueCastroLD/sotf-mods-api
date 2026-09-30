# Backups

**Decisión del dueño (2026-09-29, PLAN §14.5 y ADR-0021): no hay backups ni dumps de
producción, ni programados ni puntuales.** Este documento explica qué compensa esa decisión, qué
implica y qué hacer si algún día se cambia.

## 1. Qué sustituye a los backups

| Riesgo | Mitigación en v2 |
|---|---|
| Una migración rompe o borra datos legacy | Migraciones **estrictamente aditivas**; linter de migraciones; guarda de catálogo (`db:guard`) antes y después de cada `db:migrate`, que aborta ante cualquier drift |
| Un backfill sobrescribe datos | Los backfills solo escriben columnas o tablas nuevas y son idempotentes; los fixes sobre columnas legacy (B4, B5, B4M, B8) guardan el valor anterior en `DataFixAudit` y se revierten fila a fila (`db:revert-fix`) |
| Un trigger de sincronización corrompe escrituras | [`ops/sql/kill-switch.sql`](../../ops/sql/README.md) quita los triggers sin tocar datos |
| La v2 falla después del corte | Marcha atrás a la legacy devolviendo los dominios ([rollback.md](rollback.md)) |
| Un rol de la app hace algo indebido | `sotf_v2_app` sin DDL y con `"AuditLog"` de solo inserción; `sotf_legacy_app` sin DDL (`ops/sql/roles.sql`) |
| Un fichero de R2 se pierde | Ninguna clave legacy se renombra, sobrescribe ni borra; las pasadas R2 son ensayo por defecto |
| Staging necesita datos | El seed (snapshot público + sintéticos), no copias de producción |

## 2. Qué implica

- **No existe el nivel «restaurar»**. Una corrupción real de la base (borrado accidental desde
  fuera de la aplicación, fallo de disco del servidor, error humano con credenciales de *owner*)
  no tiene recuperación completa. El riesgo lo asume el dueño.
- El runbook de desastre de PLAN §6.14 (R4: restaurar un dump y reinyectar deltas con
  `tooling/migration/replay-delta.ts`) solo es aplicable si existe un dump; la herramienta sigue
  en el repositorio por si se decide tener uno.
- Las credenciales de *owner* de la base solo están en `sotf-v2-migrate` y `sotf-v2-tools`
  (parada salvo uso). Tratarlas como la llave de todo.

## 3. Recomendación (no implementada)

Si algún día quieres backups, lo mínimo razonable, sin cambiar código:

1. Crear el bucket R2 **privado** `sotf-mods-backups` y un token R2 de **solo escritura** para él.
2. Coolify → `sotf-mods-db` → *Backups*: diario, retención local 7, destino S3 (el bucket
   anterior) con retención 30.
3. Probar una restauración **en una base nueva** (nunca sobre la de producción) y apuntarlo.
4. Durante la semana del corte, backups cada hora.
5. Vigilar que el último backup tenga menos de 26 h (manual o con un cron propio que solo haga
   GET a la API de Coolify).

Si se activan, este documento, [rollback.md](rollback.md) (nivel R4) y ADR-0021 deben
actualizarse con un ADR nuevo que la sustituya.
