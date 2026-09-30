# Backlog de la ola 1 (integración I-1)

Consolidado y deduplicado de `docs/backlog/WP-10.md`, `WP-11.md`, `WP-12.md`, `WP-13.md`,
`WP-15.md` y de la sección «Para W1» de `wave-0.md`. Formato: qué · dónde (dueño propuesto) · por
qué. Los ítems marcados **[hecho en I-1]** los resolvió el integrador en `main` antes de la
etiqueta `wave-1`. Los ficheros por WP se conservan como fuente con el detalle completo.

## Resueltos durante la integración

- **[hecho en I-1] Pins exactos promovidos al catálogo** · `pnpm-workspace.yaml` ·
  `@seriousme/openapi-schema-validator@2.11.0`, `ajv@8.20.0` (WP-11); `@inlang/sdk@3.0.6`,
  `@inlang/plugin-message-format@4.4.4` (WP-13); `markdown-it@14.3.2`, `@types/markdown-it@14.2.0`,
  `@types/hast@3.0.5`, `rehype-raw@7.0.0`, `showdown@2.1.0`, `@types/showdown@2.0.6`,
  `@types/jsdom@28.0.3` (WP-15). Los `package.json` usan `catalog:`. Ningún `allowBuilds` nuevo.
- **[hecho en I-1] Tareas opcionales que se volvían silenciosas** · `tooling/scripts/delegate.ts`
  (`isSkippable`, `Resolution.missing`) · `--optional`/`SOTF_OPTIONAL_TASKS=1` solo omiten la tarea
  mientras el `package.json` del dueño no existe; si existe sin el script, falla. `i18n:check` deja
  de ser `--optional` en `package.json` y `verify.ts`. (W0 «Para W1»; WP-13.)
- **[hecho en I-1] `gen --check` cubre `.generated/` de i18n** · `tooling/scripts/gen.ts` ·
  ejecuta además `pnpm -r --if-present run gen:check` (hoy `@sotf/i18n`), así que la etapa 2b de
  CI y `verify` detectan una salida de Paraglide obsoleta. (WP-13.)
- **[hecho en I-1] Namespace `ui` dentro de i18n** · `packages/i18n/messages/ui/<locale>.json`
  (13 locales con los códigos de URL `pt`/`zh`) · `packages/ui/messages/en.json` queda como copia
  inglesa empaquetada; un test de `@sotf/ui` exige que sea idéntica a la de i18n y comprueba las
  13 traducciones y sus placeholders; el playground lee de i18n. `i18n:check`: 260 claves × 13.
  (WP-12.)
- **[hecho en I-1] Códigos de error de contratos sin traducir** · `packages/i18n/src/errors.ts`,
  `messages/errors/*` · `INVALID_CREDENTIALS` y `REAUTH_REQUIRED` (añadidos por WP-11) faltaban en
  `PROBLEM_CODES`; traducidos a 13 idiomas. Nuevo `packages/i18n/test/contracts-sync.test.ts`
  (devDependency `@sotf/contracts`): mismos códigos, mismos locales y mismas etiquetas BCP-47 en
  ambos paquetes. (WP-11 y WP-13.)
- **[hecho en I-1] ADR del pipeline de Markdown** · `docs/adr/0003-markdown-it-parser.md` ·
  markdown-it como parser y serializador de conjunto cerrado; se desvía de PLAN §2.2. (WP-15.)
- **[hecho en I-1] `check:forbidden` completo** · regla `legacy-env-urls` en
  `tooling/scripts/forbidden-rules.ts` con tests de aciertos y casi-aciertos: `BASE_URL`,
  `PUBLIC_BASE_URL`, `API_URL`, `PUBLIC_API_URL`, `GPT_API_KEY`, `R2_CUSTOM_DOMAIN`,
  `R2_BUCKET_NAME`; no atrapa `R2_PUBLIC_BASE_URL`, `INTERNAL_API_URL` ni
  `import.meta.env.BASE_URL`. (W0 «Para W1».)
- **[hecho por WP-12] Brillo del logo adaptativo en Night** · `packages/ui/src/tokens.css`
  (`.brand-flare { fill: light-dark(#E75803, #FF7335) }`). (W0 «Para W1».)
- **[hecho por WP-10/WP-13] Registros generados y scripts homónimos** · `packages/db` expone
  `db:migrate`/`db:guard`/`db:baseline` y el barrel del esquema; `packages/i18n` expone
  `i18n:check`/`i18n:pseudo`. (W0 «Para W1».)

## Pendiente del integrador o de WP-00 (siguientes olas)

- **Quitar `minimumReleaseAgeExclude`** · `pnpm-workspace.yaml` (integrador I-2) · no se pudo en
  I-1: la integración corrió el 2026-09-29 a las 22:08Z, antes del límite 2026-09-30T20:00Z
  (ADR-0002).
- **`remark-parse`, `remark-gfm`, `remark-rehype` y `vaul` sin uso** · catálogo (integrador) · se
  dejan porque PLAN §2.2 los nombra; retirarlos cuando ningún WP los adopte. `@sotf/ui` usa el
  `Drawer` de Base UI en lugar de vaul. (WP-12, WP-15; ADR-0003.)
- **Columnas Drizzle añadidas por WPs posteriores** · `tooling/scripts/ownership.overrides.json`
  (WP-00/integrador) · Drizzle no puede añadir columnas a una tabla declarada en otro fichero, así
  que un WP que añada columnas a una tabla existente edita `packages/db/src/schema/{legacy,v2}/*.ts`:
  declararlos compartidos (como `*.gen.ts`) o canalizar esas ediciones por el integrador. (WP-10.)
- **Documentar la carga del `.env` raíz por los scripts `db:*`** (`loadRootDotEnv`) · `README.md`
  (WP-00/WP-A4). (WP-10.)
- **Nota de temas** · PLAN §3.3 · los temas son globales: Lightning CSS baja `light-dark()` a
  propiedades en `:root`, así que un `[data-theme]` anidado no re-tematiza un subárbol; las vistas
  previas tematizadas usan un iframe. (WP-12.)
- **Tamaño de `.generated/` de i18n** · ≈ 2,7 MB y 460 ficheros para 218 mensajes (≈ 12 KB por
  mensaje nuevo). Si pesa demasiado, ignorar `.generated/paraglide/` y generarlo en `prepare`
  (la etapa 2b dejaría de exigirlo en el commit). (WP-13, integrador/WP-90.)

## Para W2 (WP-14 · WP-20 · WP-22 · WP-24 · WP-25 y siguientes)

### Datos y migración (WP-14, WP-A0)

- **Backfills sobre `@sotf/db`** · `tooling/migration/**` (WP-14) · usar `@sotf/db/testing` y
  `createDb`; los backfills solo escriben columnas v2 (el linter lo exige en migraciones, no en
  scripts). B6 rellena `"emailNormalized"` antes de `0045` (índice único); B5 archiva follows
  duplicados antes de `0038`. (WP-10.)
- **B9: renderizar todo lo legacy con `profile: 'legacyHtml'`** · `tooling/migration/**` (WP-14) ·
  no solo las 24 descripciones con HTML; guardar `RENDER_VERSION` en `renderVersion`,
  `decodeEntities` para `changelogMd`/`bodyMd` y `descriptionMd` literal. (WP-15.)
- **Regenerar la baseline legacy desde un dump real si llega** · `packages/db` (WP-A0) ·
  `0000_legacy_baseline.sql` y `src/guard/legacy-catalog.json`; §14.5 dice que no habrá dump, así
  que el guard contra el catálogo vivo es la red de seguridad. (WP-10.)
- **Runbook de cutover** · `docs/runbooks/cutover.md` (WP-A0) · re-ejecutar `ops/sql/roles.sql`
  tras B3 (en B2 imprime `PARTIAL`); sin la segunda pasada `sotf_v2_app` conserva UPDATE/DELETE en
  `"AuditLog"`. (WP-10.)
- **Aceptación del propietario de la semilla de taxonomía en convivencia** · PLAN §6.13 B3 (WP-A0)
  · `0025_seed_taxonomy` inserta 8 categorías `type = 'Mod'` y 40 tags en las tablas legacy vivas:
  la web legacy mostrará dos «Quality of Life» y categorías vacías hasta el cutover. Si no se
  acepta, mover la inserción a una migración aplicada en D4. (WP-10.)

### API y plataforma (WP-20, WP-24, WP-32, WP-90)

- **Registrar rutas desde `apiContracts`** · `apps/api` (WP-20) · servir
  `buildOpenApiDocument({ version })` en `/api/v2/openapi.json`; `endpoint.rateLimit` → buckets
  `RATE_LIMITS`; `cacheHeaders()` + `resolveCacheTags()` con ids de **entidad**; errores de `/api/*`
  con `errorFormat: 'legacy'`. (WP-11.)
- **CSRF y cuerpos JSON** · `apps/api/src/plugins/**` (WP-20) · el cliente tipado siempre envía
  JSON (`{}` sin cuerpo) en POST/PUT/PATCH/DELETE; Fastify debe aceptar `{}` en DELETE. Excepciones:
  `POST /api/v2/e`, `/api/v2/e/vitals` (`text/plain`) y `POST /api/v2/unsubscribe` (formulario
  RFC 8058). (WP-11.)
- **Cola de eventos de dominio** · `packages/core/src/kernel/**`, `apps/worker` (WP-20) · adoptar
  `JOB_PAYLOADS['domain.event']` (fan-out único) o añadir colas por consumidor (cambio aditivo).
  (WP-11.)
- **Imagen de migración** · `ops/docker/node.Dockerfile`, bundle de `apps/api` (WP-20/WP-90) ·
  incluir `packages/db/migrations/` y ejecutar `cli/migrate.ts` con `MIGRATIONS_DATABASE_URL`
  (`MIGRATIONS_DIR` si se empaqueta). (WP-10.)
- **CI con PostgreSQL** · `.github/workflows/ci.yml` (WP-90) · `test:int` de `@sotf/db` necesita
  Docker (Testcontainers) o `SOTF_TEST_DATABASE_URL` con PostgreSQL 16 y `psql`; `db:guard` sin URL
  usa el modo efímero; para staging/preflight, `DATABASE_URL`. (WP-10.)
- **Harness legacy** · `tooling/legacy-contract` (WP-24) · reutilizar `validateLegacy`,
  `keyOrderIssues`, `orderKeys`, `LEGACY_VOLATILE_FIELDS`, `LEGACY_DEVIATIONS` y
  `UPDATES_CHECKER_VALUE_FIELDS`; al copiar fixtures, un `biome.json` anidado que excluya
  `fixtures/` y re-declare `!**/*.gen.ts`, como `packages/contracts/biome.json`. (WP-11.)
- **`/api/categories` legacy en v2** · `apps/api/src/legacy/**` (WP-32) · decidir si lista solo
  categorías con mods (la fixture tiene 4) o todas. (WP-10.)

### Web pública (WP-22, WP-25, WP-62, WP-70)

- [x] resolved by WP-22 (verified by wire-web-public) (`layouts/BaseLayout.astro`) · **Cabecera de página** · `apps/web/src/layouts/**` (WP-22) · `data-theme="dark"` en `<html>`,
  `THEME_INIT_SCRIPT` inline antes del CSS, `BANNER_INIT_SCRIPT` opcional, `FONT_PRELOADS`,
  `@import "@sotf/ui/tokens.css"` y `enhance()` de `@sotf/ui/enhance`. (WP-12.)
- [x] resolved by WP-22 (verified by wire-web-public) (`middleware/index.ts` + `lib/i18n.ts`) · **Locale por petición** · `apps/web/src/middleware/**` (WP-22) · importar `@sotf/i18n/server`,
  envolver cada petición en `withLocale(stripLocale(path).locale, …)`,
  `<html lang={toHtmlLang(locale)}>` y `hreflangAlternates(path, origin)`; configurar
  `configureUiTranslate((key, params) => m[key](params ?? {}))` una vez (y `UiTranslateProvider` en
  la consola, WP-34). (WP-12, WP-13.)
- **`UNLOCALIZED_SEGMENTS`** · `packages/i18n/src/paths.ts` o la opción `isLocalized` (WP-22) ·
  ampliar si aparecen rutas sin prefijo (`/embed`, `/k`, `/_actions`). (WP-13.)
- [x] resolved by WP-22 (verified by wire-web-public) (`scripts/lang-suggest.ts`) · **Sugerencia de idioma** · `apps/web/src/scripts/lang-suggest.ts` (WP-22) · renderizada en el
  locale sugerido, candidato de `negotiateLocale` o `fromLegacyLangCookie`; nunca redirección.
  (WP-13.)
- [x] resolved by WP-93 (verified by wire-web-public) (`lib/security/csp.ts`; `CSP_MODE` cableado por wire-web-public) · **CSP** · `apps/web/src/lib/security/**` (WP-22, revisión WP-93) · hashes de
  `THEME_INIT_SCRIPT`/`BANNER_INIT_SCRIPT` (`cspScriptHash`); sonner y Base UI/floating-ui necesitan
  `style-src 'unsafe-inline'` (o nonce) donde carguen `Toaster` o popups. (WP-12.)
- [x] resolved by WP-22 (verified by wire-web-public) · **Assets de marca en la raíz web** · `apps/web/public/**` (WP-22) · `/brand/topo.svg`,
  `/brand/field-kit.svg` y el resto de `packages/brand/assets/public`. (WP-12; ya en wave-0.)
- **Componentes de dominio** · `packages/ui/src/domain/index.ts` y
  `packages/ui/playground/domain/**/*.demo.tsx` (WP-25) · el export `@sotf/ui/domain` ya está
  mapeado. (WP-12.)
- **Estilos prose para los hooks de Markdown** · `packages/ui/src/**` `prose-locator` (WP-25) ·
  `.md-anchor`, `.md-alert*`, `.md-spoiler` (con foco visible y *reduced motion*), `.md-youtube`,
  `.md-mention`, listas de tareas y `details`/`summary`; contrato en
  `packages/markdown/README.md`. (WP-15.)
- [x] resolved by wire-web-public (`scripts/mod/prose.ts` enlazado una vez por documento; el boot lo carga en cualquier página con spoilers/fachadas (builds, kits, perfiles, noticias)) · **Fachada de YouTube y revelado de spoilers** · `apps/web/src/scripts/**` (WP-62/WP-70) ·
  sustituir `a.md-youtube-link` por el iframe `youtube-nocookie`; spoilers accesibles (click, Enter,
  Espacio; `aria-expanded`, quitar `role`/`tabindex`/`aria-label`; CSS para spoilers con enlace o
  dentro de `<summary>`). (WP-15.)
- **Etiquetas localizadas del HTML guardado** · `packages/i18n/messages/<ns>` (WP-94) y
  componentes (WP-62/WP-70) · mensajes `alert-*` y `spoiler`, y `localizeHtml(html, labels)` al
  renderizar. (WP-15.)

### Dominio y consola (WP-31, WP-33, WP-34, WP-40, WP-41, WP-51, WP-54, WP-70, WP-81, WP-82)

- **Límites de subida** · `packages/core/src/uploads` (WP-31) · `UPLOAD_LIMITS` (image 10 MB,
  avatar 5 MB, banner 10 MB, comment_image 5 MB; multipart > 100 MB en partes de 16 MB) es decisión
  de v2: confirmar o cambiar de forma aditiva. (WP-11.)
- **Categorías retiradas** · `packages/core/src/catalog/**` (WP-33), Explore (WP-54) · resolver
  vía `legacySlugs` (`qol` → `quality-of-life`). (WP-10.)
- **Locale de la consola** · `apps/web/src/console/**` (WP-34/WP-81) · `User.settings.locale` →
  `localStorage` → `negotiateLocale`, `setLocale(locale, { reload: false })`. (WP-13.)
- **Umbrales de tamaño de builds** · `packages/contracts/src/manifest.ts` (WP-40/WP-63) ·
  S < 500 ≤ M < 2 000 ≤ L < 8 000 ≤ XL no están en el plan; el blueprint legacy guarda `Data` como
  cadena JSON. (WP-11.)
- **Perfil de render persistido** · `packages/db/migrations/**` + publicación (WP-40) ·
  `"Mod"."descriptionFormat"` `'legacy' | 'markdown'` para que una descripción legacy editada siga
  con `legacyHtml`; aviso si Markdown nuevo contiene HTML (`hasRawHtml`). (WP-15.)
- **Imágenes dentro de descripciones** · `apps/worker/src/jobs/media/**` (WP-40, B15) · replicar a
  R2 con las reglas SSRF de §9.1 y re-renderizar con `resolveImage` (URL + `width`/`height`).
  (WP-15.)
- **Menciones** · `packages/core` comentarios/reseñas (WP-41) · `extractMentions` → una consulta →
  `resolveMention` síncrono; notificar `mentions`. (WP-15.)
- **Estado del visitante en listas cacheadas** · contratos de comentarios/reseñas (WP-41/WP-70) ·
  añadir consultas de sesión tipo `GET /api/v2/me/follows/lookup` si las islas las necesitan.
  (WP-11.)
- **Endpoints y códigos más allá de §5.1/§5.2** · WP-41, WP-42, WP-51, WP-30 ·
  `GET /api/v2/me/kits`, `GET /api/v2/me/follows/lookup`, `GET|POST /api/v2/admin/loader-releases`,
  `DELETE /api/v2/comments/:id/solution`; `INVALID_CREDENTIALS` (401) y `REAUTH_REQUIRED` (403, sesión
  > 12 h). `ModCardDTO` usa `kind` (§6.8), no `type`. (WP-11.)
- **Límites de longitud de producto** · `packages/contracts/src/**` · aplicar 20 000
  (descripciones), 2 000 (comentarios/reseñas) y 500 (bio) antes del renderer;
  `MAX_MARKDOWN_LENGTH` (50 000) es solo el techo. (WP-15.)
- **`POST /api/v2/markdown/preview`** · `apps/api/src/modules/markdown-preview/**` (WP-70) ·
  `renderMarkdown(md, { profile })` con lite/full. (WP-15.)
- **Enlaces resueltos como el navegador** · moderación y comprobación de enlaces (WP-41, WP-51,
  WP-82) · usar `links[].external` y los `href` guardados; nunca re-derivar hosts con regex.
  (WP-15.)

### Contenido y calidad (WP-72, WP-73, WP-91, WP-94)

- **Carpeta de instalación en `common_download_done`** · `packages/i18n/messages/common/*` (WP-73)
  · el texto sigue genérico hasta que la guía `/install` fije la ruta. (WP-13.)
- **Scout en cmdk** · `packages/i18n/messages/cmdk/**` (WP-72/T1) · se omite «or ask Scout» y la
  línea de rachas. (WP-13.)
- **Revisión nativa de las 12 traducciones** · `packages/i18n/messages/**` (WP-94) · `common`,
  `errors`, `meta`, `ui` y las dos entradas de error añadidas en I-1 (tono y tipografía francesa).
  (WP-13; I-1.)
- **Capturas de regresión visual del playground** · `e2e/**` (WP-91) ·
  `pnpm --filter @sotf/ui playground` (puerto 47350, `?frame=1&theme=dark|light`) a
  360/768/1024/1440. (WP-12.)
- **axe de spoilers y anclas de encabezado** · `e2e/**` (WP-91) · spoiler plegado y revelado; las
  anclas son `aria-hidden` y `tabindex="-1"`, añadir `aria-label` localizado si axe prefiere
  permalinks enfocables. (WP-15.)

## Arrastrado de la ola 0

Siguen vigentes, sin cambios, las secciones «Para W2 y siguientes», «Mejoras menores de calidad» y
«Acciones del usuario» de [`wave-0.md`](wave-0.md).
