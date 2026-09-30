# ADR-0015: Staging con base propia cargada con el seed y preflight de producción en `next.`

- **Estado**: Aceptada (sustituye la parte de «restaurar del backup» de PLAN §0.2 por §14.5)
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro y del dueño)
- **Plan**: §0.2 «Beta», §6.13 (A7, C1–C2), §11.3, §14.5

## Contexto

research/02 proponía probar la v2 contra la base de producción con un rol de solo lectura;
research/04, una base de staging separada. El plan eligió una base de staging restaurada del
backup, pero el dueño decidió (§14.5) que **no hay backups ni dumps de producción**.

## Opciones consideradas

1. **Beta contra producción en solo lectura**: datos reales, pero la beta no puede escribir y el
   riesgo de un rol mal configurado recae sobre producción.
2. **Staging con base propia restaurada de un backup de producción**: descartada por §14.5.
3. **Staging con base propia cargada con el seed** (snapshot del API público + datos sintéticos
   con las rarezas conocidas) **+ preflight** de las apps de producción en `next.sotf-mods.com`,
   protegido, contra la base real, 48 h antes del corte.

## Decisión

Opción 3. `beta.sotf-mods.com` usa `sotf-v2-staging-db` (sin puerto público), cargada y
reiniciada cada semana con el dump del seed (`ops/runbooks/deploy/06-staging.md`); las cuentas del
seed se bloquean. El preflight valida con datos reales solo con GET.

## Consecuencias

- La beta pública puede escribir sin riesgo; los ensayos no dependen de datos personales reales.
- Las rarezas de producción que el seed no reproduzca solo aparecen en el preflight: por eso la
  guarda de catálogo aborta ante cualquier drift antes de migrar (ADR-0004).
