# ADR-0002: Stack de v2 y relación con el plan maestro

- **Estado**: Aceptada
- **Fecha**: 2026-09-29
- **Autor**: WP-00
- **Plan**: §0, §2.2, §2.4, §2.6, §9.1, §10.2, §11.2, §12.1

## Contexto

El plan maestro (`docs/plan/PLAN.md`) ya decide el stack y resuelve las contradicciones entre los
documentos de investigación (§0.2). WP-00 materializa esas decisiones en el andamiaje del
monorepo. Este ADR resume el stack para quien llega al repositorio y deja constancia de los
ajustes que exigieron las versiones reales de las herramientas el 2026-09-29.

## Decisión

### Resumen del stack (detalle y justificación: PLAN §2.2)

| Capa | Elección |
|---|---|
| Runtime | Node.js 24 LTS (`.nvmrc` = 24.17.0); TS ejecutado directamente en desarrollo (*type stripping*) |
| Monorepo | pnpm 12.6 (workspaces + catálogo) · Turborepo 2.11 |
| Lenguaje | TypeScript 7.0 (nativo) en todo; TypeScript 6.0 solo en `apps/web` (`catalog:ts6`) para `astro check` |
| Lint y formato | Biome 2.5 (regla `noDangerouslySetInnerHtml` como error) |
| Web | Astro 7 SSR + islas React 19 + Tailwind 4; consola SPA con TanStack Router/Query |
| API y worker | Fastify 5 + Zod 4 · pg-boss 12 · Drizzle 0.45 con SQL escrito a mano |
| Datos | PostgreSQL 16 (la instancia actual, migraciones solo aditivas) · Cloudflare R2 |
| Tests | Vitest 5 (unitarios `*.test.ts`, integración `*.int.test.ts` con Testcontainers) · Playwright · LHCI |
| Infra local | `ops/compose/dev.yml`: postgres:16-alpine, SeaweedFS (S3) y Mailpit, proyecto `sotfv2` |

La estructura de carpetas, los nombres de paquete y las convenciones de TypeScript son los de
PLAN §2.4 y §2.6; la propiedad de rutas por WP está en `tooling/scripts/ownership.json`, generado
a partir de PLAN §12.3.

### Ajustes al plan descubiertos al implementar WP-00

1. **pnpm 12 renombró `onlyBuiltDependencies` a `allowBuilds`** (un mapa `paquete: true|false`),
   y un *build script* no listado hace fallar la instalación. PLAN §9.1 pide una allowlist
   (sharp, `@node-rs/*`, esbuild): se mantiene con `allowBuilds`. Se deniegan de forma explícita
   `ssh2`, `cpu-features` y `protobufjs` (aceleradores nativos opcionales y avisos de
   *postinstall* que traen Testcontainers y protobufjs; no son necesarios).
2. **`minimumReleaseAge: 1440` choca con versiones fijadas por el plan publicadas hace menos de
   24 h** (`@aws-sdk/*` 3.1142.0, `@sentry/*` 11.1.0 y sus dependencias fijadas, Testcontainers
   12.2.0). Se añaden a `minimumReleaseAgeExclude` **con versión exacta** (pnpm no admite
   patrones de nombre con versión), de modo que cualquier otra versión sigue sujeta a la regla.
   La lista puede borrarse a partir del 2026-09-30T20:00Z.
3. **`catalogMode: prefer` + `saveExact: true`** (no `strict`): PLAN §12.1 permite que un WP fije
   una dependencia nueva con versión exacta en su `package.json` antes de promoverla al catálogo;
   el modo estricto lo impediría.
4. **Biome 2.5 depreca `rules.recommended`** en favor de `rules.preset: "recommended"`.
5. **Vitest sin fichero por paquete**: los esqueletos apuntan sus scripts a los presets de
   `@sotf/config` (`vitest run --config ../../packages/config/vitest/unit.ts`), porque WP-00 solo
   posee `package.json`, `tsconfig.json` y `src/index.ts` de cada paquete. Un paquete que necesite
   más crea su `vitest.config.ts` con `defineUnitConfig()`.
6. **Tareas raíz de WPs futuros**: `pnpm db:migrate`, `pnpm e2e`, `pnpm lhci`, etc. delegan en un
   script homónimo del paquete dueño (`tooling/scripts/delegate.ts`). Si aún no existe, fallan con
   un mensaje que nombra el WP responsable; CI y `pnpm ci:local` exportan
   `SOTF_OPTIONAL_TASKS=1`, que es el `--if-present` de PLAN §10.2.
7. **`check:forbidden` y la ruta de vista previa**: la regla prohíbe el sufijo legacy de las
   imágenes (una cadena que es exactamente la ruta de vista previa, concatenada a la URL de la
   imagen), no cualquier ruta que contenga «preview», porque el plan define
   `POST /api/v2/markdown/preview` (WP-70).

## Consecuencias

- Cualquier agente arranca con `pnpm install && pnpm verify` y encuentra los scripts raíz de
  PLAN §12.1 desde el primer día, aunque los implementen WPs posteriores.
- La cadena de suministro queda cerrada por defecto: versiones exactas, 24 h de maduración y
  *build scripts* denegados salvo allowlist.
- Los ajustes 1–7 se verifican con `pnpm verify` (tests de `tooling/scripts`) y con la instalación
  congelada de CI.
