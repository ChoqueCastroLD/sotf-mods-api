# ADR-0004: Usar Drizzle como query builder y migraciones SQL escritas a mano con guarda de superconjunto

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro)
- **Plan**: §0.1 (5), §0.2 «ORM», §2.2, §6.1, §6.2, §14.5

## Contexto

La v2 comparte **la misma** base PostgreSQL 16 de producción con la aplicación legacy (Prisma sobre
Bun) durante la coexistencia y la ventana de marcha atrás. Cualquier cambio de esquema tiene que
ser aditivo y la legacy debe seguir funcionando sin redesplegarse. Además, el dueño no quiere
backups (§14.5), así que no hay red de seguridad si una migración destruye algo.

La investigación proponía dos ORMs: Prisma 7.10 (research/02) y Drizzle 0.45 (research/04).
Prisma 8 llega a GA en octubre de 2026 con otra API, así que Prisma 7 sería «API vieja» desde el
primer día. El esquema usa FTS, GIN, índices parciales y columnas generadas.

## Opciones consideradas

1. **Prisma 7.10 con `prisma migrate`**: tipado y ecosistema maduros; necesita codegen, las
   migraciones generadas pueden proponer cambios destructivos al introspectar tablas legacy, y
   la API cambia con Prisma 8.
2. **Drizzle 0.45 con `drizzle-kit` generando migraciones**: sin codegen y con soporte nativo de
   FTS/GIN/índices parciales; pero `drizzle-kit pull` tiene defectos conocidos (research/04 §4.3)
   y una migración generada puede renombrar o borrar.
3. **Drizzle 0.45 solo como query builder + SQL escrito a mano + runner propio + guarda sobre el
   catálogo real**.

## Decisión

Opción 3. `packages/db` declara el esquema en TypeScript solo para consultar; las migraciones son
ficheros `.sql` numerados y escritos a mano (`packages/db/migrations/`), cada uno en su
transacción y con su `down`. El baseline es el **DDL real** de la legacy, no el TypeScript. El
runner (`pnpm db:migrate`) ejecuta la **guarda de superconjunto** (`pnpm db:guard`) antes y
después: compara `information_schema`/`pg_catalog` con el catálogo legacy esperado y aborta ante
cualquier drift o pérdida (columna, tipo, nulabilidad, índice o restricción legacy).

Un linter de migraciones rechaza en producción todo lo que no sea `CREATE TABLE`, `ADD COLUMN`
nulo o con `DEFAULT` constante y `CREATE INDEX CONCURRENTLY` (un índice por fichero).

## Consecuencias

- Más fácil: la revisión de cada migración es literal (lo que se lee es lo que se ejecuta), el
  pool `pg` se comparte con pg-boss y no hay paso de codegen.
- Más difícil: el TS de Drizzle y el SQL deben mantenerse sincronizados a mano; un test de
  integración compara el esquema Drizzle con el catálogo migrado.
- Añadir una columna a una tabla ya declarada obliga a tocar su fichero de esquema, aunque la
  migración viva en `schema/ext/<wp-id>.ts` (backlog WP-10).
- Se verifica con `pnpm db:guard` (CI, etapa 7) y con la guarda previa de cada `db:migrate`.
