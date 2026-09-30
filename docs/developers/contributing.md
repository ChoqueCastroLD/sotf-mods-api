# Guía de contribución

Cómo se trabaja en este repositorio, para personas y para agentes. Las reglas vienen de PLAN §1.2,
§2.6 y §12.1.

## 1. Antes de empezar

1. Lee la sección del plan que toca tu cambio y, si existe, el README del paquete o área.
2. Comprueba si hay una decisión registrada en [`docs/adr/`](../adr/README.md) o un pendiente en
   [`docs/backlog/`](../backlog/).
3. Levanta el entorno ([local-environment.md](local-environment.md)).

## 2. Ramas y worktrees

- Una rama por unidad de trabajo. Los paquetes de trabajo del plan usan un *git worktree*:

  ```bash
  git -C /root/sotf-mods/sotf-mods-v2 worktree add /root/sotf-mods/sotf-v2-wt/<WP-ID> -b wp/<WP-ID> main
  cd /root/sotf-mods/sotf-v2-wt/<WP-ID> && pnpm install && pnpm gen
  ```

- **Propiedad de rutas**: un WP solo modifica sus rutas (`tooling/scripts/ownership.json`,
  generado desde PLAN §12.3); `pnpm check:ownership` lo comprueba. Lo que haga falta fuera va a
  `docs/backlog/<WP-ID>.md`, una línea por ítem: **qué · dónde · por qué**.
- Antes de entregar: `git rebase main` (o merge de `main`), `pnpm install`, `pnpm gen`.
- **Nadie empuja a GitHub** sin aprobación del dueño; el integrador fusiona en orden.

## 3. Convenciones de código

- **TypeScript estricto** (`strict`, `noUncheckedIndexedAccess`, `erasableSyntaxOnly`: sin `enum`
  ni `namespace`), imports relativos con extensión `.ts`.
- **Entorno**: solo `src/env.ts` de cada app lee `process.env`, validado con Zod al arrancar.
- **Errores**: `DomainError` en core; la API los convierte en problem+json. Nunca se filtran trazas.
- **Tiempo**: todo en UTC; `toISOString()` al serializar.
- **Base de datos**: tablas PascalCase y columnas camelCase entre comillas (convención legacy).
  Migraciones nuevas: fichero SQL a mano, aditivo, uno por cambio, con `down`; nunca `UPDATE` ni
  `DELETE` sobre tablas legacy (ADR-0004, ADR-0021). Numeración reservada por ola (PLAN §12.1).
- **Contratos**: los endpoints nacen en `@sotf/contracts`; cambios posteriores, solo aditivos.
- **Eventos**: se emiten dentro de la transacción; los suscriptores son idempotentes.
- **Generados** (`*.gen.ts`, `.generated/`, `routeTree.gen.ts`): nunca a mano; `pnpm gen`.
- **Dependencias**: versión exacta del catálogo de `pnpm-workspace.yaml` (`catalog:`); una nueva se
  fija con versión exacta en el `package.json` del paquete y se anota en el backlog.
- **Logs**: pino JSON; nada de PII en claro (email → hash corto, IP → ipHash).
- **Sin secretos** en código, tests, fixtures ni documentos; `pnpm check:forbidden` lo vigila.
- Formato y lint: Biome (`pnpm lint:fix`).

## 4. Listón de calidad (PLAN §1.2)

Toda funcionalidad visible se entrega con:

- estados completos: carga (skeleton con la misma geometría, solo si tarda > 300 ms), vacío,
  error (qué pasó, qué hacer, reintentar y referencia), sin conexión y sin permisos;
- optimismo con deshacer en las acciones reversibles;
- accesibilidad WCAG 2.2 AA: teclado completo, foco visible, `aria-live`, objetivos ≥ 24 px,
  `prefers-reduced-motion`;
- responsive en 360, 768, 1024 y 1440 px;
- i18n: cero textos fijos, plurales ICU, fechas y números con `Intl`, **13 idiomas** completos
  (EN como fuente) en los *namespaces* propios;
- SEO en páginas públicas: título y descripción únicos, h1, canonical, hreflang, JSON-LD, OG;
- tests: unitarios de reglas de negocio (`*.test.ts`), integración contra PostgreSQL real
  (`*.int.test.ts`, Testcontainers) y e2e del flujo feliz;
- evento de analítica definido y rendimiento dentro del presupuesto (PLAN §8).

## 5. Definición de hecho

1. Aceptación del cambio en verde.
2. `pnpm verify` en verde: lint, `check:forbidden`, registros generados al día, mapa de propiedad
   al día, `check:ownership`, `i18n:check`, typecheck, tests unitarios y build de lo afectado.
3. `pnpm test:int` de los paquetes tocados.
4. Ningún `TODO` sin entrada en el backlog.
5. README del paquete o área actualizado; ADR nuevo si la decisión es de arquitectura.

`pnpm ci:local` reproduce el pipeline de CI completo (`--quick` omite e2e, LHCI e imágenes).

## 6. Commits

- [Conventional Commits](https://www.conventionalcommits.org/): `feat(scope): …`, `fix(…)`,
  `docs(…)`, `refactor(…)`, `test(…)`, `chore(…)`, `ci(…)`. El *scope* es el área o el WP.
- Mensajes en inglés, en imperativo, explicando el porqué cuando no es obvio.
- Los commits de agentes terminan con la línea de atribución que indique el entorno.
- Nada de ficheros `.env`, dumps ni artefactos de build en los commits.

## 7. Revisión

Quien revisa comprueba, además del código: que el cambio es aditivo respecto a la base y a los
contratos, que no rompe la compatibilidad legacy (`pnpm contract:legacy` si toca `/api/*`,
descargas o URLs de mods), que cumple el listón del §4 y que la documentación está al día.

## 8. Seguridad

- Producción es de solo lectura para cualquiera que no sea el dueño: solo GET/HEAD a
  `sotf-mods.com`, `api.sotf-mods.com` y `r2.sotf-mods.com`, y **nunca** a rutas de descarga,
  favoritos, approve ni KelvinSeek. Nunca se conecta a la base de producción.
- Las vulnerabilidades se comunican en privado al dueño, no en issues públicos.
