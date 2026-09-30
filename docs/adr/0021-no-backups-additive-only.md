# ADR-0021: Operar sin backups: migraciones estrictamente aditivas, backfills que nunca sobrescriben y marcha atrás por dominios

- **Estado**: Aceptada (decisión del dueño; prevalece sobre PLAN §6.13 A1/B1/D1 y §6.14 R4)
- **Fecha**: 2026-09-30
- **Autor**: WP-A4
- **Plan**: §14.5, §6.1, §6.13, §6.14, §10.2 (nightly)

## Contexto

El plan original pedía un backup de la base antes de todo, backups programados a un bucket R2
privado y ensayos con el dump real. El dueño decidió el 2026-09-29 (§14.5) que **no quiere
backups** ni dumps de producción.

## Decisión

Toda la operación se diseña para no necesitar restaurar nada:

- Migraciones en producción **estrictamente aditivas** (`CREATE TABLE`, `ADD COLUMN` nulo o con
  `DEFAULT` constante, `CREATE INDEX CONCURRENTLY`), cada una en su transacción, con `down`
  probado (que nunca se ejecuta en producción) y con la guarda de catálogo antes y después.
- Backfills idempotentes que **solo escriben en columnas o tablas nuevas**; ningún `UPDATE` o
  `DELETE` sobre tablas legacy fuera de los flujos normales de la aplicación (salvo los fixes
  auditados y reversibles fila a fila con `DataFixAudit`: B4, B5, B4M y B8).
- Ensayos con el seed (snapshot del API público + sintéticos con las rarezas conocidas).
- Marcha atrás = devolver los dominios a las apps legacy (ADR-0016).
- No se programan backups. El manual de operaciones solo los **recomienda**
  (`docs/operations/backups.md`).

## Consecuencias

- Una corrupción real de datos (nivel R4 de §6.14) no tiene recuperación completa: el riesgo lo
  asume el dueño y se mitiga con aditividad, guarda, roles de mínimo privilegio y kill-switch.
- La fase *contract* (≥ T+60) queda condicionada a una nueva decisión explícita.
