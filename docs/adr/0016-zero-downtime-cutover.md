# ADR-0016: Hacer el corte sin caída cambiando dominios, con marcha atrás devolviéndolos

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro y del dueño)
- **Plan**: §0.1 (19), §0.2 «Ventana de corte», §6.13, §6.14, §14.5

## Contexto

research/02 proponía una ventana de 10–15 min con la API parada. Pero la base es **la misma**:
no hay datos que copiar ni sincronizar, y tanto la legacy como la v2 escriben en formato
compatible (la v2 escribe las columnas legacy y los triggers sincronizan los estados).

## Opciones consideradas

1. **Ventana de mantenimiento**: simple de razonar; corta descargas de RedManager y UpdatesChecker.
2. **Cambio de dominios en Coolify con solapamiento breve** (1–2 min en que ambas apps sirven
   respuestas válidas).

## Decisión

Opción 2: expand en producción (T−7), preflight en `next.` (T−2), y en T0 los dominios pasan a
las apps v2 y las legacy se **paran sin borrarse**. Marcha atrás (≤ T+30) = devolver los dominios
a las apps legacy y arrancarlas: el esquema solo se amplió, así que siguen funcionando. Sin
backups (§14.5), no existe «restaurar».

## Consecuencias

- Cero caída; la marcha atrás es un cambio de configuración de minutos, sin pérdida de datos.
- Las funciones solo-v2 quedan invisibles (pero conservadas) si se vuelve a la legacy.
- La fase *contract* (quitar lo legacy) queda para ≥ T+60 con aprobación explícita.
- Runbooks: `docs/operations/rollback.md` y `ops/runbooks/deploy/04-release-and-rollback.md`.
