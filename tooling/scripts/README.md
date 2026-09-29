# tooling/scripts (`@sotf/scripts`)

Andamiaje del repositorio (PLAN §12.1). Scripts en TypeScript que Node 24 ejecuta directamente,
sin compilar ni dependencias en tiempo de ejecución. Propiedad de WP-00 (`secrets-scan.ts` es de
WP-93).

| Script | Invocación | Qué hace |
|---|---|---|
| `verify.ts` | `pnpm verify [--all] [--base <ref>] [--wp <id>]` | Puerta de la *Definition of Done*; ejecuta todos los pasos y resume |
| `ci-local.sh` | `pnpm ci:local [--quick] [--no-install]` | Las etapas de `.github/workflows/ci.yml` en local |
| `check-forbidden.ts` | `pnpm check:forbidden [--root <dir>] [--json]` | Reglas de `forbidden-rules.ts`: host de ficheros legacy, variables retiradas, sufijo de vista previa legacy, secretos, ficheros `.env` y volcados |
| `gen-ownership.ts` | `pnpm gen:ownership [--check] [--report]` | Genera `ownership.json` desde PLAN §12.3 + `ownership.overrides.json` |
| `check-ownership.ts` | `pnpm check:ownership [WP-ID] [--base <ref>] [--optional]` | Falla si la rama toca rutas ajenas al WP |
| `gen-registries.ts` | `pnpm gen` (o `--check`) | Registros `_registry.gen.ts` de módulos de la API y jobs del worker, y barrel `_index.gen.ts` del esquema de BD |
| `gen.ts` | `pnpm gen [--check]` | Registros + el script `gen` de cada paquete que lo tenga |
| `delegate.ts` | scripts raíz `db:*`, `e2e`, `lhci`… | Delega en el script homónimo del paquete dueño |
| `infra.ts` | `pnpm infra:up|down|reset|status` | Ciclo de vida de `ops/compose/dev.yml` y buckets S3 |

## check:forbidden

- Escanea `git ls-files --cached --others --exclude-standard` (lo versionado y lo nuevo que no
  esté ignorado). Se salta binarios, `docs/plan/**` y el lockfile.
- Cada regla tiene un id, una descripción y una allowlist de rutas con su motivo (p. ej. los
  *fixtures* legacy contienen el host antiguo por definición).
- Una línea concreta se exime con `check-forbidden-allow: <regla> <motivo>` en esa línea o en la
  anterior. El motivo es obligatorio.

## Propiedad de rutas

- `ownership.json` es **generado**: no se edita a mano. Si cambia PLAN §12.3, se ejecuta
  `pnpm gen:ownership`; `pnpm verify` falla si no está sincronizado.
- `ownership.overrides.json` recoge las correcciones estructuradas que la prosa del plan no
  expresa (los esqueletos de WP-00, «salvo los módulos de dominio» de WP-20, etc.), cada una con
  su motivo.
- Siempre se permiten: `pnpm-lock.yaml`, los ficheros generados (`**/*.gen.ts`,
  `**/.generated/**`), el propio `docs/backlog/<WP-ID>.md` y el `package.json` de cualquier
  paquete en el que el WP tenga rutas (para fijar dependencias).
- Los *stubs* que un WP crea para otro (`(→ WP-XX)` en el plan) pertenecen a ambos.
- Un test comprueba que, dentro de cada ola, las rutas de los WPs son disjuntas.

## Registros generados

| Registro | Fuente | Contrato |
|---|---|---|
| `apps/api/src/modules/_registry.gen.ts` | `apps/api/src/modules/<name>/index.ts` | `export default` del módulo → `export const modules = [...] as const` |
| `apps/worker/src/jobs/_registry.gen.ts` | `apps/worker/src/jobs/<name>/index.ts` | `export default` del grupo de jobs → `export const jobGroups = [...] as const` |
| `packages/db/src/schema/_index.gen.ts` | `packages/db/src/schema/{legacy,v2,ext}/*.ts` | `export * from` cada fichero |

Se ignoran los directorios y ficheros que empiezan por `_`, los `index.ts` del barrel, los tests
y los `.gen.ts`. Solo se genera un registro si existe su directorio.

## Tests

`pnpm --filter @sotf/scripts test`: glob, reglas y CLI de `check:forbidden` (incluido un fichero
sembrado con el host legacy, que debe fallar), propiedad de rutas sobre el plan real,
registros, delegación e infraestructura.
