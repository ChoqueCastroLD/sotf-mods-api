# Arquitectura en una página

PLAN §2 (detalle y justificación) y ADR-0002 (stack). Este documento es el mapa para orientarse.

## 1. Piezas

```
navegador ──► Cloudflare ──► web  (@sotf/web: Astro 7 SSR + islas React + consola SPA)
                   │            │  SSR llama a la api por INTERNAL_API_URL (red privada)
                   │            ▼
                   └──/api──► api (@sotf/api: Fastify 5; /api/v2, /api/* legacy, SSE, /internal)
                                │  lógica de negocio en @sotf/core, datos con @sotf/db
                                ▼
                          PostgreSQL 16  ◄── worker (@sotf/worker: pg-boss 12; jobs, eventos, crons)
                                                │
descargas: web/api ─ 302 ─► r2.sotf-mods.com    └─► R2 (S3), Resend, Cloudflare (purga), VirusTotal…
```

- **Sin Redis, sin Caddy, sin microservicios** (ADR-0013). Colas, eventos, *LISTEN/NOTIFY* y
  caché de invalidación viven en PostgreSQL.
- La **web nunca toca la base**: todo pasa por la api (SSR con `X-Internal-Auth`, islas y consola
  con la cookie de sesión en el mismo origen `/api`).
- La **base es la de producción de la legacy**, ampliada solo con migraciones aditivas (ADR-0004,
  ADR-0021). La legacy y la v2 conviven sobre ella hasta el corte.

## 2. Monorepo

| Ruta | Paquete | Qué hay |
|---|---|---|
| `apps/web` | `@sotf/web` | Páginas públicas (`src/pages`), componentes SSR, islas, scripts vanilla, consola SPA (`src/console`), contenido MDX, SEO, caché de rutas ([README](../../apps/web/README.md)) |
| `apps/api` | `@sotf/api` | Plataforma HTTP (contratos → rutas, errores, CSRF, rate limit, caché, SSE), módulos por dominio, capa legacy, tarea de migraciones ([README](../../apps/api/README.md)) |
| `apps/worker` | `@sotf/worker` | Jobs y suscriptores de eventos por dominio, crons ([README](../../apps/worker/README.md)) |
| `packages/contracts` | `@sotf/contracts` | DTOs Zod, contratos de endpoint, eventos, payloads de jobs, cliente tipado, OpenAPI, esquemas legacy |
| `packages/core` | `@sotf/core` | Servicios de dominio (`auth`, `catalog`, `downloads`, `moderation`…) y el *kernel* (errores, contexto, jobs, hashing, logger) |
| `packages/db` | `@sotf/db` | Esquema Drizzle (legacy + v2), migraciones SQL, runner, guarda de superconjunto, utilidades de test |
| `packages/ui` · `brand` | `@sotf/ui` · `@sotf/brand` | Design system «Locator» (tokens, primitivas, componentes de dominio) y activos de marca |
| `packages/i18n` | `@sotf/i18n` | 13 idiomas con Paraglide, URLs por idioma, formateadores `Intl` |
| `packages/markdown` · `emails` · `config` | | Markdown saneado, plantillas de email, presets de TS/Vitest |
| `tooling/migration` | `@sotf/migration-tools` | Seed de desarrollo, backfills, invariantes, CLIs del operador |
| `tooling/legacy-contract` | `@sotf/legacy-contract` | *Golden fixtures* y comparador de la API legacy |
| `tooling/scripts` | `@sotf/scripts` | Andamiaje: `verify`, `gen`, `check:forbidden`, `check:ownership`, `infra` |
| `ops/` | | Compose local, Dockerfiles, SQL del operador, runbooks de Coolify, Cloudflare y despliegue, hotfix legacy |
| `docs/` | | Plan, ADRs, backlog, esta guía y el manual de operaciones |

Los paquetes internos **no se compilan**: exportan `src/*.ts` y las apps los empaquetan (Vite en
la web, tsdown en api y worker).

## 3. Flujo de una funcionalidad

1. **Contrato** en `packages/contracts/src/<dominio>.ts`: DTOs y `<dominio>Endpoints` (método,
   ruta, auth, caché, rate limit). Cambios posteriores, solo aditivos.
2. **Esquema** (si hace falta): migración SQL nueva y aditiva en `packages/db/migrations/` +
   su esquema Drizzle.
3. **Servicio** en `packages/core/src/<dominio>/`: reglas de negocio con `Ctx`; lanza
   `DomainError`; emite eventos con `ctx.jobs.emit(tx, event)` dentro de la transacción.
4. **Ruta** en `apps/api/src/modules/<dominio>/`: `m.implement(contrato, handler)`; la plataforma
   deriva validación, auth, CSRF, caché y errores del contrato.
5. **Jobs** en `apps/worker/src/jobs/<dominio>/` si hay trabajo asíncrono (idempotente).
6. **UI**: página SSR en `apps/web/src/pages`, isla en `src/islands/<área>` o pantalla de la
   consola en `src/console/features/<área>`; textos en `packages/i18n/messages/<ns>/<locale>.json`.
7. `pnpm gen` actualiza los registros generados.

## 4. Conceptos transversales

- **Caché** (PLAN §2.7): el HTML público es igual para todos y lo cachea Cloudflare con
  `Cache-Tag`; los eventos de dominio se traducen en tags y el worker purga (`cdn.purge`). Lo
  personal va en islas contra `/api/v2/me*` (`private, no-store`).
- **Descargas** (ADR-0012, ADR-0014): 302 a R2, conteo en buffer, nunca se bloquea.
- **Compatibilidad legacy** (PLAN §5.5): `/api/mods`, `/check`, KelvinSeek, descargas y URLs de
  mods responden byte a byte como la legacy; las mutaciones legacy devuelven 410.
- **Tiempo real**: SSE en `/api/v2/stream` sobre *LISTEN/NOTIFY*.
- **i18n**: segmentos en inglés con prefijo de idioma (ADR-0009).
- **Seguridad**: sesiones opacas en cookie `__Host-`, CSRF por `Sec-Fetch-Site`/`Origin`, CSP
  estricta, roles de base de mínimo privilegio (PLAN §9).
