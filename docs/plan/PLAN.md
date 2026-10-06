# SOTF Mods v2 — Plan maestro

> **Nota (2026-10-06):** [CLASSIC.md](CLASSIC.md) prevalece sobre este documento en la identidad «Locator», la landing y la gamificación (logros, insignias, XP, hitos, premios, kits, Patch Radar, mapa de la isla). Donde discrepen, manda CLASSIC.md. Este texto se conserva como histórico y no se reescribe.

> **Fuente única de verdad** para construir, migrar y lanzar sotf-mods.com v2.
> Fecha: 2026-09-29 · Estado: aprobado para ejecución (las preguntas del §13 tienen un valor por defecto y no bloquean el arranque).
> Idioma: documento en español; identificadores, rutas, comandos y código en inglés.
> Entradas: `research/01-compat-contract.md`, `02-data-migration.md`, `03-brand-design.md`, `04-stack-architecture.md`, `05-product-features.md` (+ `research/fixtures/01-compat/`, `research/assets/03-brand/`) y el código legacy (solo lectura).

**Cómo usar este documento**

- Este plan **decide**. Si un documento de investigación dice otra cosa, manda este plan. La tabla del §0.2 lista cada contradicción resuelta.
- Los research siguen siendo la **referencia de detalle**: cuando aquí se escribe «ver research/0X §Y», el agente debe leer esa sección antes de implementar y no volver a investigar.
- Cada paquete de trabajo (WP) del §12 lista sus rutas propias, dependencias, entregables y comandos de aceptación. Un agente ejecuta **un** WP. Como máximo hay 5 WPs en paralelo por ola.
- Producción es de solo lectura para los agentes. Todo lo que toca producción (Coolify, Cloudflare, BD, R2, DNS) lo ejecuta **el usuario** siguiendo los runbooks del §6.13, §6.14 y §11. Los agentes preparan scripts, SQL y pasos exactos.

**Glosario de producto** (nombres de marca; la clave i18n es fija y la traducción varía)

| Término | Qué es |
|---|---|
| **Kits** | Colecciones de mods (listas o modpacks) que se pueden compartir con un código |
| **Backpack / Mochila** | Mods que sigues (♥). Reutiliza la tabla legacy `ModFavorite` |
| **Basecamp / Campamento** | Panel del creador (`/basecamp`) |
| **Ranger Station / Puesto de guardabosques** | Moderación y administración (`/ranger`) |
| **Signals / Señales** | Centro de notificaciones (`/signals`) |
| **Field reports / Reportes de campo** | Reportes de compatibilidad «¿funciona en este parche?» |
| **Patch Radar / Radar de parches** | Estado del ecosistema por build del juego (`/patch-radar`) |
| **Field notes / Notas de campo** | Changelogs |
| **Survivor rank / Rango de superviviente** | Progresión de la comunidad basada en XP de ayuda |
| **Creator tier / Nivel de creador** | Progresión del creador según sus descargas de por vida |
| **Day N / Día N** | Antigüedad de la cuenta («Día 1.204 en la isla») |
| **Scout** | Asistente IA del sitio (T1). **KelvinSeek** es un mod de terceros (ShokoCC) que usa nuestra API y conserva su nombre |

---

## 0. Resumen de decisiones

### 0.1 Las 20 decisiones que definen v2

1. **Mismo nombre y dominio** (SOTF Mods · sotf-mods.com) con identidad nueva **«Locator»**: noche en el bosque, GPS, curvas de nivel, bengala naranja. Se retira el logo rojo actual porque imita el oficial.
2. **Frontend**: Astro 7.3 SSR + islas React 19 para lo público. La consola (Basecamp, Ranger Station, ajustes y señales) es una SPA con TanStack Router y TanStack Query **dentro del mismo build de Astro**.
3. **Backend**: Node 24 LTS + Fastify 5.12 + Zod 4 (los contratos se comparten con el frontend) y un worker pg-boss 12. No hay Redis, Caddy ni microservicios.
4. **Datos**: **la misma** base PostgreSQL 16 de producción, ampliada solo con migraciones **aditivas**. Cero renombres, cero borrados y cero cambios de tipo hasta la fase *contract* (≥ T+60 días y con aprobación explícita).
5. **ORM**: Drizzle 0.45 con migraciones **SQL escritas a mano** y un runner propio. Una guarda en CI demuestra sobre el catálogo real de Postgres que el esquema legacy sigue intacto.
6. **Caché**: el HTML es idéntico para todos los usuarios y lo cachea Cloudflare con `stale-while-revalidate` y **purga por Cache-Tag**. La personalización va en islas (`/api/v2/me*`, `private, no-store`).
7. **Descargas**: `GET /mods/:user/:slug/download/:version` → conteo asíncrono → **302** a `https://r2.sotf-mods.com/<key codificada por segmento>`. Ningún servidor vuelve a tocar los bytes. Los objetos de R2 reciben `Content-Disposition` por reescritura de metadatos.
8. **Compatibilidad legacy byte a byte** en `/api/mods`, `/api/mods/:mod_id`, `/check`, KelvinSeek, la ruta de descarga y las URLs de mods. Se verifica con 38 *golden fixtures* y con un test .NET del DTO de UpdatesChecker. Todas las mutaciones legacy devuelven **410**.
9. **URLs**: se conservan las formas legacy (`/mods/:user/:slug`, `/builds/:user/:slug`, `/profile/:handle`). Segmentos en inglés y prefijo de idioma para los locales ≠ `en` (`/es/mods/...`). Todo lo demás resuelve con 301 y un *resolver* tolerante con historial de slugs.
10. **Cuentas**: las contraseñas se siguen verificando igual (argon2id de Bun con los mismos parámetros; bcrypt `$2b$` si existe, con rehash). Las sesiones son opacas en una cookie `__Host-` HttpOnly. **Todos vuelven a iniciar sesión una vez** en el corte, con su contraseña de siempre.
11. **Estados de mod explícitos** (`pending`, `published`, `unlisted`, `rejected`, `archived`, `removed`) sincronizados con el `isApproved` legacy. Un mod pendiente solo es visible por URL directa y si pasó los checks automáticos.
12. **Feature insignia**: compatibilidad por build del juego (Field reports + Patch Radar), porque el problema nº 1 de los usuarios es «¿esto funciona?».
13. **Reseñas reales** (sobre la tabla `ModReview` existente), **comentarios v2** (Unicode completo, markdown saneado, reacciones, bugs), **Kits**, **Follow = Backpack**, **Signals** en tiempo real (SSE), **Basecamp** con analíticas y **Ranger Station** con checks automáticos y VirusTotal.
14. **Gamificación que premia calidad y ayuda**: rangos de superviviente, niveles de creador por descargas, insignias retroactivas («Original Survivor 2023…») e hitos por mod. No hay rachas diarias.
15. **13 idiomas**: en, es, de, fr, it, nl, pl, pt-BR, ru, sv, tr, zh-Hans y **ja** (nuevo). Los códigos legacy `ch` y `se` se corrigen.
16. **Rendimiento**: objetivo Lighthouse móvil 100 en las plantillas públicas (sin anuncios cargados) y CWV «Good» en campo. JS público inicial ≤ 15 KB br.
17. **SEO y GEO**: 404 y 410 reales, canonical, hreflang, JSON-LD por tipo, sitemaps por tipo, RSS, IndexNow, `llms.txt` y `llms-full.txt`, alternativas `.md` por entidad y OpenAPI pública.
18. **Anuncios**: AdSense solo para invitados, diferido, con huecos reservados y el CMP de Google. Nunca en el primer viewport ni junto a la descarga.
19. **Corte sin caída**: la v2 se despliega antes en `next.sotf-mods.com` (protegido) contra la BD de producción. Después se cambian los dominios en Coolify y se para el legacy. La marcha atrás es posible durante 30 días devolviendo los dominios.
20. **Hotfix legacy inmediato**: sí. Es una serie de parches (descargas 302 directas a R2, eliminación de `files.sotf-mods.com` y cierre del XSS almacenado) preparada en un clon aparte y **nunca empujada**. El usuario la revisa y la despliega si quiere (WP-02).

### 0.2 Contradicciones entre los research y cómo se resuelven

| Tema | Posturas | Decisión | Por qué |
|---|---|---|---|
| ORM | 02: Prisma 7.10 · 04: Drizzle 0.45 | **Drizzle 0.45.3** (query builder) + **migraciones SQL a mano** (runner propio) + guarda de superconjunto sobre `information_schema` | Prisma 8 llega a GA en oct-2026 con otra API, así que Prisma 7 sería «API vieja» desde el día 1. Drizzle soporta de forma nativa FTS, GIN, índices parciales y columnas generadas, no necesita codegen y comparte el pool `pg` con pg-boss. El riesgo de traducción que señalaba 02 se neutraliza: el baseline es el **DDL real**, no el TS, y la guarda compara el catálogo de Postgres. Los 4 defectos de `drizzle-kit pull` (04 §4.3) se corrigen a mano y un test los cubre |
| Parámetros argon2 de los hashes nuevos | 02: 64 MiB, t=2 · 04: 19 MiB | **argon2id m=65536, t=2, p=1** (idénticos a Bun) + semáforo de 2 | Nadie necesita rehash, la legacy verifica igual si hay marcha atrás y es más fuerte. El coste de RAM se acota con el semáforo |
| Tokens legacy | 02: canje silencioso cookie→sesión · 01/05: re-login forzado | **Re-login forzado** con banner. Se borran la cookie `token` y `localStorage.token` | Los tokens legacy duran ≤ 2 días y estuvieron expuestos a XSS. El canje no merece su complejidad |
| Ruta del perfil | 01: `/profile/:u` · 04: `/creators/:slug` · 05: `/u/:user` | **`/profile/:handle`** canónica, `/@:handle` → 301 y `/creators` = directorio | Cero redirecciones para los enlaces existentes (Google, SOTFEdit, tutoriales) |
| Guía de instalación | 01: mantener `/loader` · 03: `/install` · 05: `/instalar` + `/redloader` | **`/install`** canónica; `/loader` → 301 | Mejor para SEO («install sons of the forest mods»). El 301 conserva la señal |
| Idioma de las URLs | 05: slugs en español · 04: segmentos en inglés + prefijo | **Segmentos en inglés** con prefijo `/{locale}` para los ≠ en | Un solo árbol de rutas, los mismos cache tags y cero traducción de slugs |
| Rutas de la consola | 03: `/basecamp`, `/ranger` · 04: `/studio/*` · 05: `/panel`, `/mod` | **`/basecamp/*`, `/ranger/*`, `/settings/*`, `/signals`, `/me/*`**: una SPA que Astro sirve en esos prefijos | Vocabulario de marca y URLs legibles con un solo bundle |
| Visibilidad de los no aprobados | 01: visibles · 03/04: 404 · 05: por URL si pasan checks | **Modelo 05**: `pending` con checks OK = accesible por URL (`noindex` + banner) y presente en la API legacy `approved=false`; nunca en listados v2 | No rompe la pestaña «unapproved» de RedManager ni UpdatesChecker y deja de promocionar contenido sin revisar |
| Conteo de descargas | 01: cada GET válido · 04/05: único por día | **Dos métricas**: `downloads` (GET válidos, sin HEAD, sin Range ≠ 0 y sin bots; comparable con el histórico) y `uniqueDownloads` (versión + ipHash + día) | El total histórico nunca baja y hay una métrica honesta de únicos |
| Caddy | referencia del usuario · 01/03 | **Sin Caddy** en el camino de la petición | Cloudflare ya da HTTP/2-3, brotli/zstd y caché en el borde, y Traefik (Coolify) termina TLS. Caddy sería un salto más. La página de error la cubre `stale-if-error` en el borde (§2.7) |
| Nombre del filtro de descarga en R2 | 01: Snippet o Worker con `?dl=` · 04: CopyObject de metadatos | **Reescritura de metadatos in situ** (`CopyObject` + `MetadataDirective: REPLACE`) de las 612 versiones, y metadatos correctos en cada subida nueva | Sin código en el borde ni coste por petición. Una sola vez y reversible |
| Beta | 02: la v2 contra la BD de prod con rol de solo lectura · 04: BD de staging aparte | **Staging con BD propia** restaurada del backup (`beta.sotf-mods.com`) + **preflight** `next.sotf-mods.com` contra prod, protegido, 48 h antes del corte | La beta pública puede escribir sin riesgo y el preflight valida con datos reales |
| Ventana de corte | 02: 10–15 min con el API parado | **Sin caída**: cambio de dominios con solapamiento breve, porque las dos apps escriben en formato compatible | La BD es la misma y no hay copia que sincronizar |
| Favoritos y seguir | 03: ♥ + seguir aparte · 05: `ModFavorite` → follows | **Un solo concepto: Follow (♥) = Backpack + avisos de versión**, sobre `ModFavorite` (+ columna `notify`) | La UI legacy ya lo llamaba *follow*. Los contadores legacy siguen cuadrando |
| Gamificación | 03: XP + tiers por descargas + rachas · 05: fórmula de reputación, sin rachas | **XP de ayuda → Survivor rank**, **Creator tier por descargas de por vida**, insignias, hitos y Mod of the Week. **Sin rachas diarias** | Simple, retroactivo y difícil de manipular |
| Pestañas de la página de mod | 03: una URL por pestaña · 04: `/changelog`, `/alternatives` | Página principal con secciones y anclas, más **`/versions`** y **`/reviews`** como subpáginas indexables | Evita el contenido fino y conserva las URLs útiles |
| Rangos con nombre de rol | 03: rango «Ranger» y «Scout» | Se renombran los rangos para no chocar con Ranger Station ni con Scout (§7.2) | Claridad |
| Portugués | legacy `pt` | **pt-BR** (el fichero legacy usa «você», «baixar», «arquivo») | Dato verificado |
| 13.º idioma | 04: ja o uk · 05: ja | **ja** | Base de jugadores de PC grande y sin alfabeto nuevo que cargar (pila CJK del sistema) |

---

## 1. Visión y principios de v2

### 1.1 Qué significa «estado del arte» aquí

sotf-mods.com es el catálogo de RedLoader más grande que existe (257 elementos, 1,98 M descargas, 3,9 k usuarios, 13 idiomas). v2 no es solo un rediseño: es **el hogar del modding de Sons of the Forest**, donde un jugador sabe en 5 segundos si un mod funciona en su parche, lo descarga al instante sin muros y lo instala sin miedo. Y donde un creador publica en minutos, ve el impacto de su trabajo y recibe reconocimiento.

**Los cinco pilares**:

1. **Funciona** (confianza): compatibilidad por build, Patch Radar, informe de seguridad por versión, dependencias resueltas y versiones en orden semver.
2. **Encuentra**: landing viva, Explore facetado con exclusión, Cmd+K instantáneo, Kits, hubs SEO y respuestas citables por IA.
3. **Instala**: guía de 3 minutos, modal de instalación por mod, descarga directa sin login ni cuenta atrás, y deep-link a RedManager (T1).
4. **Crea**: asistente que lee el `manifest.json` en el navegador, borradores, Basecamp con analíticas, bandeja de feedback e hitos.
5. **Pertenece**: perfiles con «Día N», reseñas útiles, comentarios en tu idioma, Signals en tiempo real y gamificación con buen gusto.

**North Star**: *descargas exitosas por semana*, es decir, descargas únicas de versiones cuyo estado de compatibilidad en la build actual no es «roto».

### 1.2 Listón de calidad («10 años cocinándose»)

Toda feature T0 se entrega con:

- **Estados completos**: carga (skeleton con la misma geometría, solo si tarda > 300 ms), vacío (microcopy de marca), error (qué pasó, qué hacer, reintentar y ref.), sin conexión y sin permisos.
- **Optimismo con deshacer** en las acciones reversibles (seguir, reacción, kit, voto).
- **Accesible**: WCAG 2.2 AA, teclado completo, foco visible, `aria-live`, objetivos ≥ 24 px (44 px en móvil para los primarios) y `prefers-reduced-motion`.
- **Responsive probado** en 360, 768, 1024 y 1440 px, con gestos donde aplique (galería, hojas inferiores).
- **i18n**: cero textos fijos en el código, plurales ICU y fechas y números con `Intl` en los 13 locales.
- **SEO** si la página es pública: título y descripción únicos, h1, canonical, hreflang, JSON-LD y OG.
- **Tests**: unitarios de las reglas de negocio, integración contra Postgres real y e2e del flujo feliz.
- **Evento de analítica** de producto definido (§7.1).
- **Rendimiento dentro del presupuesto** (§8) y sin regresiones en LHCI.

### 1.3 No-objetivos (explícitamente fuera)

- Muros de pago, descargas lentas, cuentas atrás o login para descargar.
- Un gestor de mods propio (RedManager es el aliado; en T1 se le propone un deep-link por PR).
- Otros juegos, mensajes privados entre usuarios, pagos (el perfil *supporter* es T2) y RTL.
- Microservicios, Kubernetes, Redis, Meilisearch o Typesense, CDN o servicio de imágenes propio, y transformaciones de imagen de Cloudflare.
- Cambiar el nombre o el dominio, actualizar Postgres de versión mayor durante el corte o migraciones destructivas antes de T+60.
- Contenido de mods generado por IA. La IA solo asiste (sugerencias de categoría, Scout en T1, KelvinSeek).
- Usar assets oficiales de Endnight (logos, key art, mapa, iconos) como marca.

---

## 2. Decisiones de arquitectura

### 2.1 Vista general

```
                       ┌──────────────────────────── Cloudflare (proxy + CDN) ────────────────────────────┐
 navegador / RedManager│  sotf-mods.com, www→apex, api.sotf-mods.com, r2.sotf-mods.com (R2 custom domain) │
 UpdatesChecker        │  Cache Rules · Tiered Cache · SWR asíncrono · purga por Cache-Tag · WAF · Turnstile│
 KelvinSeek (in-game)  └───────┬───────────────────────────────┬──────────────────────────────┬───────────┘
                               │ HTML / assets                  │ /api/* (ambos hosts)         │ ficheros (302 destino)
                     ┌─────────▼─────────┐            ┌─────────▼──────────┐          ┌─────────▼─────────┐
 Coolify (Traefik) → │ sotf-v2-web       │  interno   │ sotf-v2-api        │          │ R2 bucket          │
                     │ Astro 7 SSR (Node)│──────────▶ │ Fastify 5          │──────────▶│ sotf-mods (público)│
                     │ + consola SPA     │ INTERNAL_  │ /api/v2 · /api/*   │ presign   │ sotf-mods-private  │
                     │ + LRU de rutas    │ API_URL    │ legacy · SSE · 302 │ S3 API    └────────────────────┘
                     └───────────────────┘            └─────────┬──────────┘                    ▲
                                                                │ pg (pool 10)                  │ S3 API
                     ┌───────────────────┐            ┌─────────▼──────────┐                    │
                     │ sotf-v2-worker    │──pg (5)───▶│ PostgreSQL 16      │◀───────────────────┘
                     │ pg-boss 12: media,│            │ (instancia actual) │   worker: sharp, OG,
                     │ OG, zips, email,  │◀─LISTEN────│ + schema pgboss    │   inspección, VirusTotal,
                     │ rollups, purgas   │  NOTIFY    └────────────────────┘   Resend, CF purge, IndexNow
                     └───────────────────┘
```

**Límites de acceso a datos (regla dura)**:

- `apps/web` **nunca** abre conexión a la BD. Lee y escribe a través de la API: el SSR usa `INTERNAL_API_URL`; el navegador, `/api/v2` en el mismo origen.
- `apps/api` y `apps/worker` usan `packages/core`, que usa `packages/db`. La lógica de dominio vive **solo** en `core`.
- La API legacy (`/api/*`) es un **adaptador** sobre los servicios de `core`, con serializadores propios que reproducen la forma exacta.

### 2.2 Stack final (versiones verificadas con `npm view` el 2026-09-29)

| Capa | Elección | Versión | Por qué |
|---|---|---|---|
| Runtime | Node.js LTS (`node:24-alpine`) | 24.x (local 24.17) | LTS hasta 2028. Ejecuta `.ts` en desarrollo sin flags. Es la referencia del usuario |
| Paquetes / monorepo | pnpm (workspaces + catalogs + `deploy`) · Turborepo | 12.6.0 · 2.11.5 | Aislamiento estricto, versiones únicas por catálogo, `turbo prune --docker` |
| Lenguaje | TypeScript | 7.0.2 (nativo) en todo; **6.0.3 solo en `apps/web`** para `astro check` | Typecheck 8–12× más rápido; Volar aún necesita la API JS de TS 6 |
| Lint / formato | Biome | 2.5.14 | Un binario para TS, TSX, JSON, CSS y `.astro` |
| Web pública | Astro (`@astrojs/node` standalone) + `@astrojs/react` | 7.3.5 · 11.1.6 · 7.0.0 | 0 KB de JS por defecto, Route Caching con *provider* propio, prerender o SSR por ruta, CSP, API de fuentes, Vite 8 |
| UI | React · Tailwind CSS (`@tailwindcss/vite`, `@tailwindcss/typography`) | 19.3.0 · 4.3.3 (typography 0.5.20) | Referencia del usuario; tokens `@theme` compartidos (research/03 §4.4) |
| Consola SPA | TanStack Router (+ router-plugin) · Query · Table · Virtual · Form | 1.170.40 (1.168.41) · 5.104.0 · 9.2.4 · 3.14.13 · 1.33.5 | Rutas y search params tipados, precarga por intención, caché SWR invalidada por SSE |
| Primitivas y UX | Base UI · cmdk · MiniSearch · sonner · vaul · Motion · lucide-react · Recharts · CodeMirror 6 (`@uiw/react-codemirror`) · fflate | 1.8.0 · 1.1.1 · 7.2.0 · 2.0.8 · 1.1.2 · 13.4.4 · 1.48.0 · 3.10.1 · 4.25.12 · 0.8.3 | Accesibles y ligeras. **CodeMirror sustituye a Monaco** (Monaco pesa > 2 MB y no funciona bien en móvil) |
| i18n | Paraglide JS 2 (inlang) | 2.25.4 | Mensajes tipados y *tree-shakeables* en Astro, islas y SPA |
| API | Fastify + Zod + `fastify-type-provider-zod` | 5.12.5 · 4.6.5 · 7.0.0 | Rápido y maduro; los contratos Zod generan tipos, validación, formularios y OpenAPI 3.1 |
| Plugins API | `@fastify/{cookie,rate-limit,helmet,cors,etag,under-pressure,sse,swagger}` · `@scalar/fastify-api-reference` · pino · close-with-grace | 11.1.2 · 11.2.0 · 13.1.1 · 11.3.0 · 6.2.0 · 9.2.0 · 0.6.0 · 9.9.0 · 1.72.1 · 10.3.1 · 2.5.0 | Seguridad, límites, ETag, SSE oficial, documentación, apagado ordenado |
| BD | PostgreSQL 16 (instancia actual) + `pg_trgm`, `unaccent` | 16 | Cero riesgo en el corte |
| Acceso a datos | Drizzle ORM · `pg` · runner de migraciones SQL propio | 0.45.3 · 8.23.0 | §0.2 |
| Jobs / cron | pg-boss | 12.35.0 | Colas, cron, debounce, reintentos y pub/sub sobre Postgres |
| Tiempo real | SSE (`@fastify/sse`) + `LISTEN/NOTIFY` | — | Todo es servidor → cliente; compatible con Cloudflare |
| Contraseñas | `@node-rs/argon2` · `@node-rs/bcrypt` (solo para verificar) | 2.2.1 · 1.10.9 | Verifican los hashes de Bun (**probado**) |
| Ficheros | `@aws-sdk/client-s3` + `s3-request-presigner` (R2) | 3.1142.0 | Presigned PUT, HEAD, CopyObject |
| Imágenes / OG | sharp · thumbhash · satori | 0.35.5 · 0.1.1 · 0.33.5 | Variantes AVIF/WebP, placeholders, OG → PNG |
| Inspección de zips | yauzl · file-type · semver · isbot | 3.4.0 · 22.1.1 · 7.8.5 · 5.2.2 | Streaming y *magic bytes*, orden semver, conteo sin bots |
| Markdown seguro | unified · remark-parse · remark-gfm · remark-rehype · rehype-sanitize · rehype-stringify | 11.0.5 · 11.0.0 · 4.0.1 · 11.1.2 · 6.0.0 · 10.0.1 | Fin del XSS almacenado; el mismo pipeline en servidor y vista previa |
| Email | Resend + React Email (`@react-email/components`) | 6.30.0 · 6.11.0 (1.0.12) | Ya se usa Resend |
| SEO | feed · schema-dts · web-vitals | 6.0.0 · 2.0.0 · 6.2.2 | RSS, JSON-LD tipado, RUM |
| Errores | Sentry (`@sentry/node`, `@sentry/astro`, `@sentry/react`), opcional por env | 11.1.0 | Servidor y consola; **no** en las páginas públicas |
| Anti-bot | Cloudflare Turnstile (`@marsidev/react-turnstile`) | 1.6.1 | Gratis y sin fricción |
| Tests | Vitest · Playwright · `@axe-core/playwright` · `@testcontainers/postgresql` · `@lhci/cli` | 5.0.2 · 1.63.0 · 4.13.0 · 12.2.0 · 0.15.1 | Pirámide completa (§10) |
| Bundle de API y worker | tsdown | 0.23.0 | Rolldown; imágenes pequeñas |
| Ids | `uuidv7` | 1.2.1 | Ids ordenables para sesiones, subidas y borradores |
| Fuentes | `@fontsource-variable/{big-shoulders,sofia-sans-extra-condensed,onest,martian-mono}` · fontaine | 5.3.x · 1.0.0 | OFL, autoalojadas, fallbacks métricos (CLS 0) |
| Emuladores (dev/CI) | SeaweedFS (S3) · Mailpit | imagen `chrislusf/seaweedfs` · `axllent/mailpit` | MinIO ya no publica imagen comunitaria. Ambas se actualizan con frecuencia (verificado) |
| Infra | Docker multi-stage · GHCR · GitHub Actions · Coolify 4.1.2 (3 apps de imagen) · Cloudflare | — | *Rolling updates* sin compilar en el VPS compartido |

**Descartados** (y por qué): Prisma 7/8 (§0.2); Caddy (§0.2); Next.js 16 y TanStack Start (más JS en las páginas públicas; Start sigue en RC); SvelteKit (rompe el ecosistema React pedido); Monaco; Redis/BullMQ; Meilisearch/Typesense (con ~300 elementos, Postgres FTS responde en < 5 ms); better-auth (obliga a copiar los hashes a su esquema); transformaciones de imagen de Cloudflare (cuota); Auto Ads; Storybook (se usa un *playground* Vite + capturas Playwright).

**Ajustes de implementación** (integración, 2026-09-30): el parser de Markdown es `markdown-it` con `rehype-raw` + `rehype-sanitize` y un serializador propio (ADR-0003), así que `remark-parse`, `remark-gfm` y `remark-rehype` salen del catálogo (`rehype-stringify` queda como oráculo de tests). `cmdk` y `vaul` tampoco se usan: la paleta implementa el mismo patrón combobox/listbox sin el Dialog de Radix (presupuesto de 25 KB br de WP-72) y el `Dialog` de `@sotf/ui` pasa a hoja inferior con el `Drawer` de Base UI. El árbol de rutas de la consola lo genera `pnpm gen` con `@tanstack/router-generator` (en lugar de `@tanstack/router-cli`).

### 2.3 Referencia del usuario frente a la decisión aquí

| Referencia | Aquí | Motivo |
|---|---|---|
| React 19 + Vite SPA, TanStack Router y Query, Tailwind, Motion, Lucide, Recharts | **Se mantiene** para la consola (Vite vía Astro) | Encaja tal cual |
| Monaco | **CodeMirror 6** | Solo hace falta Markdown; Monaco pesa varios MB y no funciona bien en móvil |
| HTML estático pregenerado (cientos de páginas), sitemap, `llms.txt` | **Astro**: prerender (guías y legales) + SSR cacheado en el borde con purga por tag | Mismo resultado («HTML pregenerado detrás de un CDN») con frescura instantánea y un solo sistema de componentes. Sin volúmenes compartidos ni ISR casero |
| Caddy 2.11 con HTTP/2 y compresión | **Cloudflare + Traefik de Coolify** | Cloudflare comprime y sirve HTTP/2-3; un proxy más no aporta nada |
| Node 24 + Fastify, PostgreSQL 16 con índices, R2 con streaming, procesos ligeros, tiempo real | **Se mantiene** | R2 sin streaming por el servidor: la descarga es un 302 y la subida un presigned PUT. Nada de bytes por nuestros procesos |

### 2.4 Estructura del monorepo

```
sotf-mods-v2/
├─ apps/
│  ├─ web/                     @sotf/web · Astro 7 SSR (Node): web pública + consola SPA + endpoints SEO
│  │  ├─ src/pages/            rutas públicas (file-based). Cada área es de un WP (§12)
│  │  ├─ src/layouts/          BaseLayout, PageLayout, ConsoleShell
│  │  ├─ src/components/<area>/ componentes Astro/React SSR sin hidratar
│  │  ├─ src/islands/<area>/   islas React (comments, reviews, compat, cmdk, auth, signals…)
│  │  ├─ src/scripts/<area>/   TS vanilla para interacciones mínimas (follow, tema, idioma, consentimiento, anuncios, beacon)
│  │  ├─ src/console/          SPA TanStack: app.tsx, router.ts, routes/<area>/**, features/<area>/**, lib/**
│  │  ├─ src/content/          MDX por locale (install, legal, news, best-hubs, about)
│  │  ├─ src/lib/              api client, cache provider CF, seo/jsonld, i18n glue, security (CSP)
│  │  ├─ src/middleware/       i18n (manual + rewrite), redirects legacy, cabeceras
│  │  └─ public/               brand/*, fonts no, favicon, robots fallback, static/legacy
│  ├─ api/                     @sotf/api · Fastify: /api/v2, /api/* legacy, SSE, descargas, KelvinSeek, /internal
│  │  ├─ src/server.ts · app.ts · plugins/** · lib/**
│  │  ├─ src/modules/<domain>/  rutas v2 por dominio (registro generado: modules/_registry.gen.ts)
│  │  └─ src/legacy/**          capa de compatibilidad v1 (serializadores exactos)
│  └─ worker/                  @sotf/worker · pg-boss: jobs/<domain>/** (registro generado: jobs/_registry.gen.ts)
├─ packages/
│  ├─ contracts/               @sotf/contracts · Zod 4: DTOs, contratos de endpoint, códigos de error, cliente tipado, DTOs legacy
│  ├─ db/                      @sotf/db · Drizzle schema (legacy + v2), migrations/*.sql, runner, guardas, helpers de test
│  ├─ core/                    @sotf/core · servicios de dominio: kernel/, auth/, catalog/, downloads/, … (usado por api y worker)
│  ├─ ui/                      @sotf/ui · tokens.css (Tailwind @theme), fuentes, primitivas, componentes de dominio, playground
│  ├─ brand/                   @sotf/brand · logos SVG, favicons, topo.svg, sprite «Field kit», generadores (portadas, banners, avatares)
│  ├─ i18n/                    @sotf/i18n · Paraglide: messages/<namespace>/<locale>.json, merge, utilidades de locale y hreflang
│  ├─ markdown/                @sotf/markdown · pipeline unified saneado (servidor + vista previa)
│  ├─ emails/                  @sotf/emails · plantillas React Email (13 idiomas)
│  └─ config/                  @sotf/config · tsconfig base, biome, preset de vitest
├─ tooling/
│  ├─ migration/               seed desde el snapshot público, datos sintéticos, backfills, verify/anonymize/profile SQL, ensayo
│  ├─ legacy-contract/         golden fixtures + comparador + checker .NET (UpdatesChecker) + tipos de RedManager
│  ├─ lhci/ · load/ · shadow/  presupuestos Lighthouse, pruebas de carga, comparador de tráfico sombra
│  └─ scripts/                 check-forbidden, gen-registries, i18n-check
├─ e2e/                        Playwright (flujos, a11y, capturas visuales)
├─ ops/
│  ├─ compose/                 dev.yml (postgres, seaweedfs, mailpit) · e2e.yml
│  ├─ docker/                  web.Dockerfile · node.Dockerfile (api + worker)
│  ├─ sql/                     roles.sql, kill-switch.sql, audits
│  ├─ coolify/ · cloudflare/   runbooks y listas de configuración exactas
│  ├─ runbooks/                deploy, migration, cutover, rollback, hypercare
│  └─ legacy-hotfix/           parches para los repos legacy (WP-02)
├─ docs/  plan/ · adr/ · backlog/ · developers/
└─ .github/workflows/          ci.yml · release.yml · deploy.yml
```

**Nombres de paquete**: `@sotf/web`, `@sotf/api`, `@sotf/worker`, `@sotf/contracts`, `@sotf/db`, `@sotf/core`, `@sotf/ui`, `@sotf/brand`, `@sotf/i18n`, `@sotf/markdown`, `@sotf/emails`, `@sotf/config`, `@sotf/migration-tools`, `@sotf/legacy-contract`.

**Paquetes internos sin build**: exportan `./src/index.ts` (`"exports": {".": "./src/index.ts", "./*": "./src/*.ts"}`). Las apps los empaquetan: Astro/Vite en web y tsdown en api y worker.

### 2.5 Modelo de renderizado

| Clase de página | Modo | JS inicial | Notas |
|---|---|---|---|
| Landing, Explore, hubs, mod, build, perfil, kit, patch radar, creadores | **SSR + caché de borde** (Cloudflare) + LRU de rutas en el origen | ≤ 15 KB br (vanilla) + islas bajo demanda | HTML idéntico para todos. Ninguna respuesta pública lleva `Set-Cookie` ni varía por cookie |
| Install, legales, about, brand, developers, news, kelvinseek | **Prerender** (MDX por locale) | ~0 | Se purga al desplegar |
| Auth (`/login`…) | Prerender + isla de formulario (`client:load`) | isla ≈ 20 KB br + React | `noindex` |
| Consola (`/basecamp`, `/ranger`, `/settings`, `/signals`, `/me`) | Shell SSR **sin datos de usuario** + `<ConsoleApp client:only="react">` | shell ≈ 85 KB br (react-dom + router + query) + chunks por ruta | `noindex`, caché 1 día + purga al desplegar |
| Endpoints (sitemaps, feeds, llms, `.md`, oEmbed, robots) | SSR (endpoints Astro) | — | Caché 1 h + purga por tag |
| Descarga `/mods/:u/:s/download/:v` | Endpoint Astro → API interna → 302 | — | `no-store`, fuera de caché |

**Política de islas**:

- **Vanilla TS** (`src/scripts`): follow ♥, copiar, tema, idioma, pestañas, galería (`<dialog>` + scroll-snap), consentimiento, anuncios, beacon y cabecera de cuenta (lee la cookie de pista `sotf_li` y solo entonces llama a `/api/v2/me/summary`).
- **React** solo en: comentarios, reseñas y reporte de campo (`client:visible`), Cmd+K (`import()` al pulsar ⌘K/Ctrl+K o `/`, o al enfocar el buscador; precarga en `pointerenter`/idle en escritorio), formularios de auth, Signals (campana) y la consola.
- Las islas reciben **ids, nunca objetos grandes**, y cargan con TanStack Query. El primer bloque de comentarios y reseñas va **renderizado en el HTML** (SEO) y la isla lo hidrata al hacerse visible.
- **Motion** solo en la consola y en islas que ya cargan React. En lo público se usan transiciones CSS y **View Transitions entre documentos**.
- **Componentes compartidos**: `@sotf/ui` exporta componentes React que Astro renderiza en servidor sin hidratar y que la consola usa de forma interactiva.

### 2.6 Convenciones técnicas transversales

- **TS**: `strict`, `noUncheckedIndexedAccess`, `erasableSyntaxOnly` (sin `enum` ni `namespace`), `verbatimModuleSyntax`, `module: nodenext`, imports relativos con extensión `.ts` (`allowImportingTsExtensions` + `noEmit`; el bundler emite).
- **Config**: cada app valida su entorno con Zod al arrancar (`src/env.ts`). Si falta algo, sale con un mensaje claro. Nunca se lee `process.env` fuera de `env.ts`.
- **Tiempo**: `TZ=UTC` en todos los contenedores. La conexión fija `options=-c TimeZone=UTC`. Las columnas legacy `timestamp(3)` se tratan como UTC (Drizzle `mode: 'date'`; en `pg` crudo, parser del tipo 1114 como UTC). Las tablas nuevas usan `timestamptz(3)`. La serialización es `toISOString()`.
- **Ids**: las tablas legacy mantienen `serial int`. Las nuevas usan `integer generated always as identity` (catálogos), `bigint identity` (eventos y alto volumen) o `uuid` v7 generado en la app (sesiones, subidas, borradores, media).
- **Nombres**: tablas en PascalCase y columnas en camelCase entre comillas (convención legacy de Prisma). En TS, los nombres son idénticos a los de la BD salvo `"Mod"."mod_id"`, que se expone como `manifestId`.
- **Errores**: `DomainError(code, httpStatus, detail, meta?)` en core. La API los traduce a RFC 9457 (§5.1). Nunca se filtran trazas.
- **Eventos de dominio**: `emit(tx, event)` publica **dentro de la transacción** con pg-boss (`send` con el ejecutor de la tx), así que no se pierden. Los consumidores son notificaciones, gamificación, purga de CDN, IndexNow, Discord y estadísticas.
- **Logs**: pino en JSON con `reqId = cf-ray` (o uuid). No se registran PII en claro (email → hash corto, IP → ipHash).
- **Registros generados**: `apps/api/src/modules/_registry.gen.ts`, `apps/worker/src/jobs/_registry.gen.ts`, `packages/i18n/.generated/**`, `apps/web/src/console/routeTree.gen.ts` y `packages/db/src/schema/_index.gen.ts` **no se editan a mano**. `pnpm gen` los regenera; si hay conflicto de merge, se regeneran.

### 2.7 Capas de caché de extremo a extremo

| Capa | Qué | Política |
|---|---|---|
| 1. Navegador | HTML | `Cache-Control: public, max-age=0, must-revalidate` + ETag (compatible con bfcache) |
| | `/_astro/*`, `/brand/*`, fuentes | `public, max-age=31536000, immutable` (hash en el nombre) |
| | Media R2 | inmutable 1 año (regla de Cloudflare) |
| 2. Cloudflare (borde + Tiered Cache) | HTML público | `Cloudflare-CDN-Cache-Control: public, max-age=<ttl>, stale-while-revalidate=86400, stale-if-error=604800` + `Cache-Tag`. TTL: home y listados 300 s; mod, build, perfil y kit 900 s; hubs 900 s; prerender 86400 s |
| | API pública v2 (GET) | `Cache-Control: public, max-age=0` + `Cloudflare-CDN-Cache-Control: max-age=60, stale-while-revalidate=600` + tags |
| | API legacy (T1/T2 lectura) | `Cache-Control: public, max-age=60` + `Cloudflare-CDN-Cache-Control: max-age=300, stale-while-revalidate=600` + tags `legacy,mod:{id}` |
| | `r2.sotf-mods.com` | Regla «Eligible» con Edge TTL 1 año y Browser TTL 1 año (claves inmutables) |
| | Descargas, `/api/v2/{auth,me,stream,e,uploads}*`, `/_internal/*`, KelvinSeek | **Bypass** + `no-store` |
| 3. Origen web | LRU del *provider* de caché de Astro (≈ 500 entradas, TTL = maxAge) | Absorbe los *misses* de PoPs y locales; `/_internal/cache/invalidate` lo vacía |
| 4. API | `lru-cache` (TTL 30–60 s) para mod por slug, listados, índice de búsqueda y facetas + `@fastify/etag` | Invalidado por `NOTIFY cache` |
| 5. Postgres | La verdad | Con ~300 mods todo cabe en `shared_buffers`; los agregados evitan escanear 2 M de filas |

**Cache tags**: `html`, `home`, `list:mods`, `list:builds`, `list:kits`, `mod:{id}`, `user:{id}`, `kit:{id}`, `category:{slug}`, `tag:{slug}`, `compat`, `sitemap`, `feed`, `search-index`, `legacy`, `stats`, `locale:{lc}`.

**Flujo de purga**: una escritura en core hace `emit(tx, event)`. El job `cdn.purge` (debounce de 20 s, `singletonKey`) agrupa los tags. Después:

1. `POST web:/_internal/cache/invalidate {tags}` vacía el LRU local.
2. `POST https://api.cloudflare.com/client/v4/zones/{zone}/purge_cache {tags}` (≤ 30 tags por llamada, ≤ 1 llamada cada 20 s).
3. `NOTIFY cache` vacía el LRU de la API.
4. `indexnow.ping` con las URLs canónicas de todos los locales afectados.

**Tras cada despliegue**, la web, ya *healthy*, llama a `POST api:/internal/cdn/purge {tags:['html'], reason:'deploy:<sha>'}` (con `singletonKey` = sha). Así se evita el *deploy skew*. Además, ante `vite:preloadError` se recarga la página.

**Mapa evento → tags**:

| Evento | Tags purgados |
|---|---|
| `mod.updated` / `version.published` | `mod:{id}`, `user:{authorId}`, `list:mods` o `list:builds`, `home`, `category:{slug}`, `feed`, `sitemap`, `search-index`, `legacy` |
| `comment.*` / `review.*` | `mod:{id}` |
| `compat.aggregate_changed` | `mod:{id}`, `compat`, `home` |
| `kit.*` | `kit:{id}`, `list:kits`, `user:{ownerId}` |
| `user.profile_updated` | `user:{id}` |
| `award.created` | `home`, `mod:{id}` |

Los contadores de descargas en el HTML pueden ir con ≤ 15 min de retraso. En la landing y la página de mod, la cifra «en vivo» sale de `/api/v2/live/*` (borde 30 s).

### 2.8 Ficheros: R2, subidas, descargas y limpieza de `files.sotf-mods.com`

**Buckets**:

- `sotf-mods`: **público** vía `r2.sotf-mods.com`. Contiene los objetos legacy (sin tocar salvo metadatos), los ficheros finales, las variantes de media y las OG.
- `sotf-mods-private`: **privado, nuevo**. Contiene `incoming/` (subidas sin inspeccionar, con ciclo de vida de 1 día), `quarantine/` y `exports/` (datos GDPR, con URL presigned GET de 15 min).
- `sotf-mods-backups`: **privado, nuevo**. Backups de Coolify.
- `sotf-mods-staging`: escrituras de staging.

**Esquema de claves nuevas** (solo `[a-z0-9._/-]`):

- mods: `mods/{modId}/{versionId}/{safe-name}-{version}.zip`
- builds: `builds/{modId}/{versionId}/{safe-name}.json`
- media: `media/{mediaId}/original.{ext}` y `media/{mediaId}/{w}.{avif|webp}`
- OG: `og/{type}/{id}-{contentHash}.png`

Las claves legacy (`<timestamp>_<nombre>`, con espacios o apóstrofos) **no se renombran ni se borran**.

**Subida** (sin pasar bytes por nuestros servidores):

1. `POST /api/v2/uploads {purpose, filename, size, contentType, sha256?}`. La API valida propósito, tamaño y tipo y la cuota. Responde con una URL **presigned PUT de 15 min** a `sotf-mods-private/incoming/{userId}/{uploadId}` con `Content-Type` y `Content-Length` **firmados**. Es de un solo uso.
2. El cliente sube con XHR (progreso real) a `<account>.r2.cloudflarestorage.com`. En ficheros de más de 100 MB se usa multipart presigned.
3. `POST /api/v2/uploads/{id}/complete`. La API hace HEAD, comprueba el tamaño y encola `inspection.run` (zips y builds) o `media.process` (imágenes).
4. **Finalización**: `CopyObject` hacia la clave final en `sotf-mods` con `MetadataDirective: REPLACE`, `Content-Type` correcto, `Content-Disposition: attachment; filename="<Nombre> <versión>.zip"; filename*=UTF-8''…` y `Cache-Control: public, max-age=31536000, immutable`. Después se borra `incoming/`. Si R2 no permite copiar entre buckets, el worker copia en streaming (lo verifica WP-31).

**Descarga**:

- `GET|HEAD /mods/:user/:slug/download/:version` en web. El endpoint Astro llama a `GET INTERNAL_API_URL/internal/downloads/resolve?...`, reenvía `CF-Connecting-IP`, `User-Agent`, `CF-IPCountry`, `Range`, `Sec-Purpose` y el método, y firma con `X-Internal-Auth`. La API resuelve (§4.6), cuenta y responde `302`. La web reenvía el 302 tal cual.
- Hay alias en la API: `/api/v2/versions/:id/download`, `/api/mods/:mod_id/download/:version` y `/api/mods/slug/:u/:s/download/:version`, en ambos hosts.
- **Respuesta**: `302 Location: https://r2.sotf-mods.com/` + `key.split('/').map(encodeURIComponent).join('/')`, con `Cache-Control: no-store, private`, `X-Robots-Tag: noindex, nofollow` y `Referrer-Policy: no-referrer`. **Nunca 301**. Nunca `+` como espacio.
- **Conteo**: solo GET (HEAD no cuenta), sin `Range` o con `Range: bytes=0-`, sin bots declarados (`isbot`; el UA vacío **sí** cuenta, porque RedManager y .NET no lo envían) y sin prefetch/prerender (`Sec-Purpose`). Cada evento va a un buffer en memoria que se vuelca cada 2 s o al apagar en un `INSERT` múltiple a `"ModDownload"` (fila compatible con legacy, con `ip` = ipHash) + upsert de `ModVersionDownloadDaily` + `Mod.downloads += n` + `ModVersion.downloadsCount += n`. La unicidad se decide con `DownloadUnique(versionId, day, ipHash)` usando `ON CONFLICT DO NOTHING`.
- **Nunca se bloquea una descarga** por *rate limit*: por encima de 60/min por IP se redirige igual, pero no cuenta.
- **Errores**: versión inexistente → 404 (HTML si `Accept: text/html`; si no, sobre JSON legacy). `ModVersion.status = file_missing` → 410. Mod `removed` → 410. `rejected` → 404.

**Limpieza total de `files.sotf-mods.com` y de las variables de entorno sobrantes**:

1. **Código**: `pnpm check:forbidden` (en CI) falla si aparece `files.sotf-mods.com`, `FILE_UPLOAD_`, `FILE_PREVIEW_`, `FILE_DOWNLOAD_ENDPOINT`, `KELVINGPT_API`, `JWT_SECRET` o `/preview`.
2. **Datos**: auditoría SQL (`ops/sql/audit-files-host.sql`) sobre todas las columnas de URL y texto. La única fila afectada (mod 168 `virginia-wardrobe-18+`, v0.0.3) pasa a `status='file_missing'` con auditoría. Si aparece alguna otra, se reescribe al host R2 o se marca igual.
3. **og:image por defecto**: `https://sotf-mods.com/brand/og-default.png` (generada en WP-01).
4. **DNS**: el usuario borra el registro `files` en Cloudflare en T+7, tras confirmar 0 tráfico en Analytics.
5. **Variables de entorno**: la v2 no define ninguna de estas: `FILE_UPLOAD_ENDPOINT`, `FILE_UPLOAD_TOKEN`, `FILE_PREVIEW_ENDPOINT`, `KELVINGPT_API`, `KELVINGPT_API_AUTHORITY`, `FILE_DOWNLOAD_ENDPOINT` (→ `R2_PUBLIC_BASE_URL`), `JWT_SECRET`, `BASE_URL` y `PUBLIC_BASE_URL` (→ `PUBLIC_SITE_URL`), `GPT_API_KEY` (→ `OPENAI_API_KEY`), `R2_CUSTOM_DOMAIN` (→ `R2_PUBLIC_BASE_URL`), `R2_BUCKET_NAME` (→ `R2_BUCKET`), `API_URL` y `PUBLIC_API_URL` (→ `INTERNAL_API_URL` y la ruta relativa `/api`). En las apps legacy, el usuario borra las 5 sobrantes al desplegar el hotfix (WP-02) o al retirarlas.
6. **Hotfix legacy** (WP-02): elimina ya las referencias en el código legacy.

### 2.9 Jobs y tiempo real

**Colas de pg-boss** (worker, `sharp.concurrency(1)`, reintentos con backoff y *dead-letter*):

| Área | Jobs |
|---|---|
| Media | `media.process`, `og.render` |
| Publicación | `inspection.run` (zip → entradas, manifest, SHA-256, tamaño, zip bomb/slip, allowlist), `security.scan` (VirusTotal), `build.extract` (miniatura y estadísticas del blueprint) |
| Caché e indexación | `cdn.purge` (debounce), `indexnow.ping` (debounce) |
| Comunicación | `email.send`, `notifications.digest` (cada 10 min, diario y semanal), `creator.weekly`, `discord.announce` |
| Estadísticas | `stats.rollup` (horario), `stats.trending` (horario), `legacy.counters` (cada 30 min, **solo tras el corte**), `compat.aggregate` |
| Gamificación | `gamification.evaluate` (por evento + nocturno), `awards.mod-of-week` (lunes 00:05 UTC), `milestones.check` |
| Cuentas | `account.export`, `account.delete` (diario), `cleanup.*` (sesiones, subidas, `DownloadUnique` > 2 días, analítica > 90 días, KelvinSeek > 30 días) |
| Migración | `backfill.*` (una sola vez, idempotentes) |

**Tiempo real**: `GET /api/v2/stream` (SSE) con los canales `user:{id}` (señales y contadores), `moderation` y `mod:{id}` (opcional, T1). El evento **solo avisa** y el cliente invalida queries. Heartbeat cada 25 s. Soporta `Last-Event-ID`. Los procesos se comunican por `pg_notify('events', json)` y la API escucha con **una** conexión dedicada. Los visitantes anónimos no abren SSE: los datos «en vivo» de la landing se consultan cada 60 s a `/api/v2/live/pulse`, que está cacheado 30 s en el borde.

**Modo de coexistencia** (`LEGACY_COEXIST=true` antes del corte): el worker **no** ejecuta `legacy.counters` ni consume `PendingMention`, porque de eso se encargan los crons legacy. En el corte cambia a `false` (§6.13).

---

## 3. Identidad de marca y design system («Locator»)

> Detalle completo, tablas de contraste, wireframes y justificación en **research/03**. Lo que sigue es lo **vinculante**.

### 3.1 Dirección y marca

- **Dirección**: **Locator** en tema oscuro por defecto (*Night*: el bosque de noche y la pantalla del GPS) y **Field Guide** en tema claro (*Day*: guía de campo impresa). **Blueprint** (cianotipia con retícula) es una sub-estética que solo usan Builds y el editor de Kits. Solafite (oro) se reserva para lo excepcional: Featured, logros y premios.
- **Nombre**: «SOTF Mods». No se usa el sub-brand «Locator» en público; es el nombre interno del design system. El lanzamiento se comunica como «SOTF Mods v2».
- **Tagline**: EN «Mods for the island. Field-tested.» · ES «Mods para la isla. Probados en el terreno.»
- **Aviso obligatorio** en el pie y en `/about`: EN *«SOTF Mods is an unofficial fan community. Not affiliated with or endorsed by Endnight Games Ltd. "Sons of the Forest" is a trademark of its owner.»* · ES *«Comunidad de fans no oficial. Sin afiliación ni respaldo de Endnight Games Ltd.»*
- **Guardarraíles de propiedad intelectual**: research/03 §1.3 (sin assets del juego, sin imitar el logo oficial, sin el mapa real y sin nombres de personajes como nombres de producto del sitio).

### 3.2 Logo

- **Isotipo «Contour Pin»** (`viewBox 0 0 64 64`): pin `M32 61 C26.5 53.5 9 41 9 26.5 A23 23 0 1 1 55 26.5 C55 41 37.5 53.5 32 61 Z` en Flare. La curva exterior es un contorno orgánico de 8 radios (15–16,5 u) centrado en (32,27), con trazo de 3 u *knock-out* y `stroke-dasharray="80 6"` (el hueco de etiqueta). La curva interior tiene radio 8–10 u, centro (34,25) y trazo de 3 u. La cumbre es un círculo r 3,2 en (35,24). Doble lectura: cumbre y ojo que te observa. Borrador de partida: `research/assets/03-brand/mark-draft.svg`.
- **Versión simplificada** para 16–24 px: pin + curva interior + cumbre. Tamaño mínimo 16 px (simplificada) y 24 px (completa). Área de respeto: 25 % de la altura.
- **Logotipo**: «SOTF MODS» en Big Shoulders **Stencil** 800, **convertido a trazados** (sin dependencia de fuente). «SOTF» en `fg` y «MODS» en Flare; tracking +1 u. Versiones horizontal (isotipo + palabra) y apilada (SOTF / MODS).
- **Colores del logo**: Night con pin `#FF7335` sobre `#090F0C`; Day con pin `#E75803`.
- **Favicon**: SVG con `@media (prefers-color-scheme)` interno + PNG 16, 32, 180 (apple-touch), 192 y 512 + maskable. El icono de app lleva el isotipo sobre `#090F0C` con radio del 22 %.
- **OG por defecto** (1200×630): fondo Night, topografía, isotipo y el lockup apilado. Va en `/brand/og-default.png`.

### 3.3 Tokens

- **Fuente de verdad**: `packages/ui/src/tokens.css` = **copia literal del bloque de research/03 §4.4** (Tailwind 4.3.3). Contiene las escalas `night`, `flare`, `signal`, `lichen`, `solafite`, `blood` y `blueprint`, los colores semánticos con `light-dark()`, las ranuras de gráficos, la tipografía fluida, radios, sombras, *motion*, z-index y las utilidades `font-display-caps`, `readout`, `tag-notch`, `texture-topo`, `texture-blueprint`, `skeleton` y `prose-locator`.
- **Temas**: `data-theme="dark"` (por defecto), `"light"` o `"system"` en `<html>`. Un script inline de ≤ 200 B en `<head>` lo fija desde `localStorage` antes del primer pintado, sin FOUC.
  - Los temas son de documento completo: Lightning CSS (objetivos de Vite/Tailwind) baja `light-dark()` a propiedades `--lightningcss-light/dark` resueltas en `:root`, así que un `[data-theme]` anidado **no** re-tematiza un subárbol. Una vista previa en el otro tema usa un `<iframe>` (así lo hace el *playground* de `@sotf/ui`).
- **Reglas duras**:
  - `border` solo es decorativo; todo control usa `border-strong` (≥ 3:1).
  - El estado nunca se comunica solo con color (siempre icono + texto).
  - No se crean utilidades `bg-<x>` si existe `--color-<x>`.
  - El primario **no** cambia con las temporadas.
- **Paleta núcleo** (el resto, en research/03 §4.1):

| Token | Night | Day |
|---|---|---|
| `bg` / `surface` / `raised` | `#090F0C` / `#0F1612` / `#171E1A` | `#F5F4EC` / `#FCFAF4` / `#FFFFFF` |
| `fg` / `fg-muted` / `fg-subtle` | `#F5F4EC` / `#B4B7AE` / `#90968D` | `#0F1612` / `#4D554E` / `#656D65` |
| `primary` (Flare) + texto encima | `#FF7335` + `#090F0C` (7,15:1) | `#BD4600` + `#FFFFFF` (5,20:1) |
| `signal` (en vivo / info) · `success` · `warning` · `danger` | `#6BCFE0` · `#87D48A` · `#E4B65C` · `#FF6E68` | `#026572` · `#136C21` · `#745301` · `#C92F33` |
| `featured` (Solafite) · `blueprint` | `#F5D49A` · `#96C0FE` | `#745301` · `#2257A4` |
| `focus` | `#6BCFE0` | `#068090` |

- **Gráficos**: 8 ranuras validadas en ambos temas y en orden fijo (research/03 §4.1, «Paleta de gráficos»). Una serie única usa la ranura 1 (Flare).
- **Acento por mod**: el `logColor` del manifest se aplica solo a detalles (filo superior de la cabecera y glow del pin), ajustado con `oklch(from <c> clamp(.55, l, .8) c h)`. Nunca se usa para texto.

### 3.4 Tipografía

| Rol | Fuente | Notas |
|---|---|---|
| Display (títulos, cifras, 404) | **Big Shoulders Variable** (+ **Sofia Sans Extra Condensed** como fallback por glifo para cirílico y griego) | Siempre en MAYÚSCULAS, peso 700–800. En `:lang(zh)` y `:lang(ja)` se usa la pila CJK del sistema, sin mayúsculas y con tracking 0 |
| UI y texto | **Onest Variable** | `tnum` en estadísticas. Los h2–h4 de la prosa del usuario van en Onest 650, no en display |
| Lecturas (versiones, `mod_id`, dependencias, código) | **Martian Mono Variable** | Carga bajo demanda y nunca en el LCP |
| CJK | Pila del sistema: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC/JP | 0 KB |

- **Carga**: se precargan **solo** `onest-latin` y `big-shoulders-latin` (≈ 70 KB). `font-display: swap` + fallbacks métricos generados con fontaine (CLS 0). `unicode-range` por subset.
- **Glifos**: los subsets `latin` no incluyen `≥`. Se escribe «0.8.6+» o se añade el subset `math` de Onest.
- **Escala**: `text-2xs` … `text-2xl` y `text-display-xs` … `text-display-xl` (fluida de 360 a 1440 px; research/03 §4.2). `text-wrap: balance` en títulos y `pretty` en párrafos.

### 3.5 Espaciado, layout y elevación

- Base de 4 px. Ritmo 4/8/12/16/24/32/48/64/96. Padding de tarjeta 16 px (móvil) y 20 px (≥ md).
- Radios: `xs` 4, `sm` 6, `md` 10 (controles), `lg` 14 (tarjetas), `xl` 20 (diálogos), `2xl` 28 (hero), `full`. `tag-notch` (chaflán) solo para FEATURED y los rangos.
- Breakpoints: `xs` 30rem, `sm` 40, `md` 48, `lg` 64, `xl` 80, `2xl` 96 y `3xl` 112. Las tarjetas usan container queries.
- Contenedores: `prose` 42rem, `content` 80rem y `wide` 96rem.
- z-index: `base` 0, `raised` 10, `sticky` 20, `dropdown` 30, `overlay` 40, `drawer` 50, `modal` 60 (incluye Cmd+K), `popover` 70, `toast` 80 y `skip` 100.
- Elevación: en Night manda el borde + highlight interior; en Day, sombras tintadas en verde. Los glows solo se usan en el CTA principal y en los pings.

### 3.6 Iconografía e ilustración

- **Lucide 1.48** (trazo 1,75 px) importado icono a icono. En las páginas estáticas se renderiza como SVG inline (0 JS).
- **Mapeo de categorías e iconos**: research/03 §4.5.
- **Set propio «Field kit»** (≈ 20 piezas, sprite < 6 KB, WP-01):
  - Tiers de creador: `contour-pin`, `topo-rings`, `blueprint-sheet`, `campfire`, `lean-to`, `cabin`, `treehouse`, `fortress`, `landmark`.
  - Objetos: `cave-mouth`, `printer-3d-resin`, `flare-gun`, `gps-handheld`, `zipline`.
  - `moon-phase-0…7`, `stamp-frame`, `eyes-dark`, `works-check` y `works-broken`.
- **Generativos** (funciones puras en `@sotf/brand`, deterministas por semilla):
  - `topoSvg(seed, opts)` para el hero, las cabeceras y el 404.
  - `coverSvg(slug, categoryColor, initials)` para mods sin imagen.
  - `bannerSvg(userId, seedOverride?)`: el terreno de cada superviviente, con «Reroll terrain».
  - `avatarSvg(name, id)`: glifo waypoint con 2 letras.
- **Texturas**: una sola `/brand/topo.svg` (≈ 4 KB gz) aplicada como `mask` y tintada con `--color-topo`. La retícula de plano es CSS. Los sellos de tinta son SVG prediseñados (nunca `feTurbulence` en runtime).
- **Prohibido**: vídeo de fondo, fotos de key art, texturas raster, `filter: blur()` en áreas grandes y `backdrop-filter` fuera del header.

### 3.7 Motion

- **Principios**: señales, no espectáculo. Solo se animan `transform`, `opacity` y `stroke-dashoffset`. Feedback ≤ 140 ms; paneles de 200–320 ms con `--ease-out`; las salidas son un 30 % más rápidas. Nada va en bucle salvo **un** ping en vivo, que se pausa fuera del viewport. Con `prefers-reduced-motion` todo pasa a fundidos de ≤ 80 ms o desaparece.
- **Catálogo**: `press`, `hover-lift`, `rise` (solo en la primera carga, con escalonado de 30 ms y máx. 8), `sheet`, `dialog`, `ping-locator`, `sweep` (buscando), `draw` (progreso completado), `stamp` (logro), `count-up` (solo en el viewport) y `blink` (ojos del 404). Parámetros en research/03 §4.7.
- **View Transitions entre documentos** en lo público: la portada de la tarjeta pasa a la cabecera del mod (`view-transition-name: mod-cover-{id}`). En la consola se usa Motion `layoutId` para tabs e indicadores y gestos de sheet.
- **Temporadas** (decorativas): `data-season` en `<html>` cambia solo `--color-topo` y los detalles. **Nieve en diciembre** (tradición legacy): canvas diferido con `requestIdleCallback`, pausado si la pestaña está oculta, desactivado con *reduced motion* y con un toggle. La **fase lunar** del pie se calcula en el cliente (≈ 0,3 KB).

### 3.8 Voz y microcopy

- **Personalidad**: guardabosques veterano. Calmado, práctico y con humor seco en los márgenes (estados vacíos, 404, carga), nunca en los errores críticos. El terror se sugiere, no se muestra.
- **Reglas**:
  - Verbo delante y frases cortas.
  - Tuteo en ES; *second person* en EN.
  - Números concretos.
  - Como máximo 1 guiño por pantalla.
  - Cada error dice qué pasó y qué hacer.
  - Sin spoilers del lore (cubo, finales).
- **Tabla de microcopy** base (EN/ES): research/03 §4.8. Es el punto de partida del namespace i18n `common`.
- **Vocabulario final**:

| Concepto | EN | ES | Notas |
|---|---|---|---|
| Colecciones | Kits | Kits | En SEO: «mod collections (Kits)» |
| Builds | Builds · Blueprints | Builds · Planos | |
| Panel del creador | Basecamp | Campamento | Etiqueta de navegación: «Basecamp · Creator dashboard» |
| Moderación | Ranger Station | Puesto de guardabosques | |
| Notificaciones | Signals | Señales | Icono de campana; etiqueta visible «Notificaciones» |
| Seguidos | Backpack | Mochila | El ♥ guarda y avisa |
| Changelogs | Field notes | Notas de campo | |
| Reportes de compatibilidad | Field reports | Reportes de campo | |
| Hub de parches | Patch Radar | Radar de parches | |
| Antigüedad | Day N on the island | Día N en la isla | |

### 3.9 Inventario de componentes (dónde se construyen)

- **WP-12 (primitivas, `@sotf/ui`)**:
  - Acciones: Button (`primary`, `secondary`, `ghost`, `outline`, `danger`, `link`, `icon`; `sm` 32, `md` 40, `lg` 48; `loading` con *sweep*).
  - Formularios: Input, Textarea (`field-sizing`), Select/Combobox, Switch, Checkbox, RadioCard, Slider, PasswordField (medidor).
  - Superficies: Dialog → BottomSheet (< md), Popover, Tooltip, Menu, Tabs (indicador animado).
  - Navegación: Breadcrumbs, Pagination (URLs reales + «Cargar más»), Stepper («pestañas de manual»).
  - Feedback: Toast (sonner), Banner, EmptyState, ErrorState, Skeleton.
  - Otros: Kbd, Avatar, Badge (`neutral`, `signal`, `success`, `warning`, `danger`, `featured` con muesca, `blueprint`, `outline-mono`), LiveDot, SkipLink, ThemeToggle, LanguageSwitcher.
- **WP-25 (dominio, `@sotf/ui/domain`)**:
  - Tarjetas: ModCard (`grid`, `row`, `compact`, `feature`), BuildCard (marco de plano + cota de piezas), KitCard («knolling»), CreatorCard.
  - Datos y estado: StatTile (readout + cifra + delta con icono), CompatCapsule, FieldReportMeter, CompatBadge, VersionTable, ModChip (`requires`, `optional`, `conflicts`), DependencyList.
  - Identidad: RankStamp, TierStamp, BadgeStamp (bloqueado = punteado), TrustedMark.
  - Descarga y galería: DownloadSplitButton (presentacional), GalleryStrip.
  - Filtros: FilterChips (incluir y excluir), SortMenu, ViewToggle.
  - Contenido: AdSlot (altura reservada), ConsentBar, ProseLocator (estilos de prosa y alertas `[!NOTE]`/`[!TIP]`/`[!WARNING]`/`[!CAUTION]`), ReviewCard, CommentItem (presentacional) y ChartTheme (tema de Recharts con los tokens).
- **Anatomía y estados de cada componente**: research/03 §5. Las tarjetas son *container-query aware* (por debajo de 260 px → `compact`) y la tarjeta entera es clicable con un pseudo-elemento, sin anidar enlaces.

---

## 4. Mapa del sitio y páginas

### 4.1 Locales y esquema de URL

- **Locales** (código de URL → BCP-47 de `hreflang`): `en` (sin prefijo, `x-default`), `es`, `de`, `fr`, `it`, `nl`, `pl`, `pt` → `pt-BR`, `ru`, `sv`, `tr`, `zh` → `zh-Hans` y `ja`.
- **Forma**: `/{locale}/…` con **segmentos en inglés** y los mismos slugs. Ejemplos: `/es/mods/imaxel/axel's-mod-menu`, `/de/install`.
- **Implementación**: Astro `i18n.routing: "manual"`. El middleware detecta el prefijo, fija `locals.locale` y hace `rewrite` a la ruta sin prefijo (un solo árbol de páginas). **Plan B** si el spike de WP-22 falla: `src/pages/[...locale]/…` con `getStaticPaths`.
- **Sin redirecciones por `Accept-Language` ni por cookie** (romperían la caché). Si `navigator.languages` o la cookie legacy `lang` (mapeando `ch`→`zh` y `se`→`sv`) sugieren otro idioma, aparece un aviso discreto: «¿Ver en Español?».
- **La consola no lleva prefijo**. Su idioma sale de `User.settings.locale`, luego de `localStorage` y luego del navegador.
- **Contenido de usuario**: se muestra en su idioma original con `lang` declarado (`Mod.contentLang`). La traducción automática de la descripción corta es T1.
- **Barra final**: nunca (301). Host `www` → apex (301 en Cloudflare). Los slugs se resuelven sin distinguir mayúsculas y la forma canónica recibe 301.

### 4.2 Rutas públicas

Leyenda de caché: `E(ttl)` = borde con `maxAge` en segundos + SWR de 1 día + tags; `P` = prerender (TTL de borde 1 día, purga al desplegar); `NS` = `no-store`.

| Ruta (EN; con `/{lc}` para el resto) | Render | Caché / tags | Datos (API v2) | Indexable |
|---|---|---|---|---|
| `/` landing | SSR | E(300) `home` | `site/stats`, `live/pulse`, `mods?sort=trending`, `awards/current`, `kits?staffPick`, `ecosystem`, `mods?sort=updated`, `builds` destacadas, `creators?spotlight` | sí |
| `/mods` explore (pestañas Mods · Libraries · Builds · All) | SSR | E(300) `list:mods` | `mods?…&facets=1` | solo `/mods` y `?page=N`; filtros → `noindex,follow` + canonical a la base |
| `/mods/:user/:slug` | SSR | E(900) `mod:{id}`, `user:{uid}` | `resolve`, `mods/:id`, `versions`, `dependencies`, `dependents`, `compat`, `reviews/summary` + 3 reseñas, 10 comentarios top, `related` | sí (solo `published` y `archived`) |
| `/mods/:user/:slug/versions` | SSR | E(900) `mod:{id}` | `versions` (semver) con changelogs | sí |
| `/mods/:user/:slug/versions/:version` | SSR | E(900) `mod:{id}` | versión + ficheros + escaneo + compatibilidad | sí |
| `/mods/:user/:slug/reviews` | SSR | E(900) `mod:{id}` | `reviews?page` | sí si hay ≥ 3 reseñas |
| `/mods/:user/:slug/download/:version` | endpoint | NS | `internal/downloads/resolve` | no (`X-Robots-Tag`) |
| `/mods/:user/:slug.md` · `/feed.xml` | endpoint | E(3600) `mod:{id}` | | `.md` = `rel=alternate`; feed |
| `/builds` · `/builds/:user/:slug` (+ `/versions`, `.md`) | SSR | E(300/900) `list:builds`, `mod:{id}` | igual que mods (`type=build`) | sí |
| `/categories/:slug` (mods o builds) | SSR | E(900) `category:{slug}` | `mods?category=` + intro editorial MDX por locale | sí |
| `/tags/:slug` | SSR | E(900) `tag:{slug}` | `mods?tag=` | sí si hay ≥ 3 elementos |
| `/best/:topic` hubs GEO (`mods`, `quality-of-life-mods`, `multiplayer-mods`, `dedicated-server-mods`, `building-mods`, `libraries`) | SSR | E(3600) `list:mods` | consultas fijas + intro MDX + «actualizado el {fecha}» | sí |
| `/kits` · `/kits/:user/:slug` | SSR | E(300/900) `list:kits`, `kit:{id}` | `kits`, `kits/by-slug` | kits públicos con ≥ 3 elementos |
| `/k/:code` | endpoint | E(3600) | `kits/by-code` → 301 | no |
| `/creators` | SSR | E(900) `list:mods` | `creators` | sí |
| `/profile/:handle` (`?tab=mods,builds,kits,badges,activity,reviews`) | SSR | E(900) `user:{id}` | `users/:handle` + pestaña | sí (perfiles sin contenido → `noindex`); `?tab` → canonical al perfil |
| `/@:handle` | middleware | E(3600) | → 301 `/profile/:handle` | no |
| `/patch-radar` · `/patch-radar/:build` | SSR | E(300) `compat` | `ecosystem`, `patch-radar` | sí |
| `/install` | P | P | MDX + `kits?staffPick=starter` | sí |
| `/achievements` | SSR | E(3600) | `badges` (catálogo con %), rangos y tiers | sí |
| `/news` · `/news/:slug` | P | P | MDX | sí |
| `/search?q=` | SSR | E(60) | `search` | `noindex` |
| `/about`, `/brand`, `/developers`, `/kelvinseek` | P | P | MDX (+ enlace a `/api/docs`) | sí |
| `/privacy` (legacy, se mantiene), `/terms`, `/content-policy`, `/dmca`, `/cookies` | P | P | MDX | sí |
| `/login`, `/register`, `/forgot-password`, `/reset-password`, `/verify-email` | P + isla | P | auth | `noindex` |
| `/logout` | endpoint | NS | GET same-origin → cierra la sesión → 303 `/`; cross-site → página con botón | no |
| `/embed/mods/:user/:slug` | SSR | E(900) `mod:{id}` | tarjeta ligera (`frame-ancestors *`) | `noindex` |
| `/oembed?url=` | endpoint | E(900) | JSON oEmbed `rich` | no |
| `/404` (y cualquier no encontrada) | SSR | E(60), tag `html` | 6 mods populares | status 404 real (TTL corto para que un mod recién publicado no quede tapado por un 404 cacheado) |

### 4.3 Rutas de la consola (SPA, `noindex`, requieren sesión)

| Área | Rutas |
|---|---|
| Basecamp (todo usuario con sesión; estado vacío «publica tu primer mod») | `/basecamp` (resumen) · `/basecamp/mods` · `/basecamp/mods/$modId/{details,media,versions,compat,analytics,inbox,settings}` · `/basecamp/mods/$modId/new-version` · `/basecamp/new/mod` · `/basecamp/new/build` · `/basecamp/drafts/$draftId` · `/basecamp/analytics` · `/basecamp/badges` |
| Me | `/me/backpack` (seguidos con estado de actualización y compatibilidad) · `/me/downloads` (historial y actualizaciones) · `/me/kits` · `/me/kits/$kitId` (editor) |
| Signals | `/signals` (filtros: todo, menciones, actualizaciones, mis mods, ranger) |
| Settings | `/settings/{profile,account,security,notifications,preferences,privacy,creator,data}` |
| Ranger Station (moderador o admin) | `/ranger` (cola) · `/ranger/queue/$itemId` · `/ranger/reports` · `/ranger/comments` · `/ranger/users` · `/ranger/users/$userId` · `/ranger/audit` |
| Admin (admin) | `/ranger/admin/{game-builds,ecosystem,taxonomy,recategorize,awards,announcements,settings,integrations,kelvinseek,performance}` |

Astro sirve el mismo *shell* en `src/pages/{basecamp,me,ranger,settings}/[...path].astro` y en `src/pages/signals.astro`. TanStack Router trabaja sin `basepath`, con rutas por fichero en `src/console/routes`, `defaultPreload: 'intent'` y `autoCodeSplitting`. Un 401 lleva a `/login?next=<ruta>`.

### 4.4 Endpoints de máquina

`/sitemap.xml` (índice) y `/sitemaps/{static,mods,builds,categories,tags,kits,creators,news,best}.xml` (todas las URLs de todos los locales, `lastmod` real y `image:image`) · `/robots.txt` (§8.6) · `/llms.txt` · `/llms-full.txt` · `/feed.xml` (mods nuevos y actualizados) · `/builds/feed.xml` · `/categories/:slug/feed.xml` · `/profile/:handle/feed.xml` · `/ads.txt` (idéntico: `google.com, pub-2799839819522052, DIRECT, f08c47fec0942fa0`) · `/{INDEXNOW_KEY}.txt` · `/.well-known/security.txt` · `/manifest.webmanifest` · `/favicon.svg` y `/favicon.ico` · `/api/docs` (Scalar) · `/api/v2/openapi.json`.

### 4.5 Metadatos SEO por tipo de página

| Tipo | `<title>` (≤ 60, localizado) | `meta description` | JSON-LD | OG |
|---|---|---|---|---|
| Landing | «SOTF Mods — Sons of the Forest mods, builds & kits» | Propuesta de valor + cifras con fecha | `WebSite` (name «SOTF Mods», `alternateName`, `inLanguage`, `SearchAction`) + `Organization` (logo, `sameAs`: Discord, GitHub) + `FAQPage` (FAQ real) | `og-default` |
| Explore / categoría / tag / best | «Sons of the Forest {categoría} mods ({n}) \| SOTF Mods» · página N: «… — página N» | Intro del hub (≤ 160) | `CollectionPage` + `ItemList` (posición + url) + `BreadcrumbList` | OG de categoría (generada) |
| Mod | «{Nombre} — Sons of the Forest mod by {autor} \| SOTF Mods» (truncado) | `shortDescription` (≤ 160); si falta, hechos | `SoftwareApplication` (`applicationCategory: GameApplication`, `applicationSubCategory`, `operatingSystem: Windows`, `softwareVersion`, `fileSize`, `datePublished`, `dateModified`, `downloadUrl`, `softwareRequirements: "Sons of the Forest (Steam), RedLoader"`, `author`, `offers` precio 0, `about: VideoGame` con `sameAs` a Steam 1326470, `interactionStatistic` de Download/Like/Comment, `aggregateRating` **solo con ≥ 3 reseñas visibles**) + `BreadcrumbList` (+ `VideoObject` si hay tráiler) | OG del mod (§8.6) |
| Build | «{Nombre} — SOTF build (BuildShare blueprint)» | descripción corta | `CreativeWork` + `about: VideoGame` + `author` + `interactionStatistic` + Breadcrumb | OG de build |
| Perfil | «{displayName} (@{handle}) — Sons of the Forest mod creator» | bio o estadísticas | `ProfilePage` → `mainEntity: Person` (`name`, `alternateName`, `image`, `sameAs`, `interactionStatistic`) | OG de perfil |
| Kit | «{Kit} — Sons of the Forest mod kit ({n} mods)» | descripción | `CollectionPage` + `ItemList` | collage |
| Install / guías | «How to install Sons of the Forest mods (2026) — RedLoader & RedManager» | TL;DR de 50 palabras | `TechArticle` (`dateModified`) + `FAQPage` + Breadcrumb; los pasos en HTML semántico (sin HowTo) | OG de guía |
| Patch radar | «Do SOTF mods work on patch {x}? — Patch Radar» | resumen con cifras | `Article` + `ItemList` | OG generada |

**Reglas comunes**:

- Un único `h1` por página y landmarks semánticos.
- `canonical` autorreferente por locale; en las paginadas, a sí misma.
- `hreflang` para los 13 locales + `x-default`, solo en las páginas con la UI localizada (las guías sin traducir quedan fuera del clúster y con canonical a EN).
- `theme-color` (Discord lo usa); `og:image:alt`; `twitter:card=summary_large_image`.
- Se eliminan las `meta keywords`.
- En NSFW: `<meta name="rating" content="adult">` y sin OG explícita.
- Un mod `pending` lleva `noindex` y banner; `unlisted`, `noindex`.

### 4.6 Resolución de URLs legacy y mapa de redirecciones

**Resolver canónico** (`core/resolve`, usado por las páginas de mod y build, la ruta de descarga y los alias `/api/mods/slug/...`). Los slugs de mod son únicos en todo el sitio:

1. `(userSlug, slug)` exacto sobre `Mod.slug`, o sobre `canonicalSlug` → 200. Si el tipo no coincide con el prefijo (`/mods` ↔ `/builds`) → 301 al correcto.
2. `slug` global exacto → 301 al dueño actual (cubre cambios de dueño y `undefined`).
3. Comparación normalizada (minúsculas; sin `'`, `()`, `.`, `_` ni `+`; guiones colapsados) contra `Mod.slug`, `canonicalSlug` y `ModSlugHistory.slug` → 301.
4. Slug normalizado == `lower(mod_id)` → 301.
5. `Tombstone` → 410. Si no → 404.

En la **ruta de descarga**, el resolver aplica los pasos 1–4 **sin 301 intermedio**: responde directamente el 302 a R2. La versión `latest` o `undefined` resuelve a la `isLatest`.

**Mapa de redirecciones legacy**:

| URL legacy | Destino v2 | Código |
|---|---|---|
| `/` (antes 302 → `/mods`) | landing | 200 |
| `/mods/`, `/builds/`, `/profile/:u/` | sin barra final | 301 |
| `/mods?…` con parámetros legacy | `?page=N` se conserva (se quita si es 1); `category=qol\|misc\|model-swap\|library` → `/categories/<slug nuevo>`; `search=q` → `/search?q=q`; `orderby=newest` → base, `oldest` → `?sort=new&order=asc`, `most_downloaded` → `?sort=downloads`, `most_downloaded_week` → `?sort=trending`, `most_followed` → `?sort=follows`, `highest_rating` → `?sort=rating`, `most_comments` → `?sort=comments` (las variantes `least_` y `lowest_` → `&order=asc`); `type=Mod` → se elimina, `Build` → `/builds`, `Both` → `?type=all`, `Library` → `?type=library`; `nsfw=false` → se elimina, `nsfw=true` → `?nsfw=1` (con age-gate); `showunapproved=*` → se elimina | 301 |
| `/builds?…` | igual, sobre `/builds` | 301 |
| `/mods/:u/:s` | resolver | 200 · 301 · 404 · 410 |
| `/mods/:u/:s` de una build / `/builds/:u/:s` de un mod | tipo correcto | 301 |
| `/mods/:u/:s.json` (oEmbed roto) | `/oembed?url=https://sotf-mods.com/mods/:u/:s&format=json` | 301 |
| `/mods/:u/:s/download/:v` | 302 → R2 (resolver sin 301) | 302 · 404 · 410 |
| `/loader` | `/install` | 301 |
| `/upload` · `/upload-build` | `/basecamp/new/mod` · `/basecamp/new/build` | 301 |
| `/login?registered`, `?reset` | `/login` (el flag se convierte en toast) | 200 |
| `/logout` | cierre de sesión → `/` | 303 |
| `/reset-password?token=` | misma ruta; acepta tokens v2 y, durante 24 h tras el corte, los `PasswordResetToken` legacy no caducados | 200 |
| `/404` | página 404 | 404 |
| `/static/downloads/sotfmodsoneclick-setup1.0.0.exe` | `/install#oneclick` (explica la retirada y ofrece RedManager) | 301 |
| `/static/images/logo*.png`, `favicon*` | `/brand/logo-*.png`, `/favicon.svg` | 301 |
| `/static/images/hd_thumbnail.png` | `/brand/og-default.png` | 301 |
| Era 2023: `/user/login`, `/user/register`, `/user/logout`, `/user/upload`, `/mods/upload`, `/artifacts` | `/login`, `/register`, `/logout`, `/basecamp/new/mod`, `/basecamp/new/mod`, `/` | 301 |
| Era 2023: `/images/:file`, `/images/:file/preview` | — | 410 |
| `sotf-mods.com/api/*` (RedManager ≤ 1.1.6, mods de 2023) | servido por la API (mismo manejador que `api.sotf-mods.com`) | 200 |
| `/mods/aedev/gyrocopter` y otros mods borrados conocidos | `Tombstone` | 410 |

Los parámetros de filtro que la v2 no reconoce se ignoran (sin 404). El `canonical` siempre apunta a la URL limpia.

---

## 5. Contrato de API

### 5.1 Principios (API v2)

- **Hosts y base**: `https://sotf-mods.com/api/v2/*` (mismo origen que la web; es lo que usan la web y la consola) y `https://api.sotf-mods.com/api/v2/*` (terceros). Mismo proceso y mismas rutas. Documentación: `/api/docs` (Scalar) y `/api/v2/openapi.json` (OpenAPI 3.1 generado desde `@sotf/contracts`).
- **Formato**: JSON UTF-8 en camelCase, fechas ISO-8601 con `Z` e ids numéricos para las entidades legacy (`Mod.id`, `ModVersion.id`, `User.id`). El id del manifest se expone como `manifestId`.
- **Contratos**: cada endpoint se declara en `@sotf/contracts` como `{ method, path, params, query, body, response, auth, cache, rateLimit }`. Fastify los registra con `fastify-type-provider-zod`. El cliente tipado (`createApiClient({ baseUrl, fetch })`) lo usan el SSR (URL interna), las islas y la consola.
- **Autenticación**:
  - **Sesión**: cookie `__Host-sotf_sid` (32 bytes aleatorios en base64url; en la BD solo se guarda `sha256`). `HttpOnly; Secure; SameSite=Lax; Path=/`. Caduca a los 30 días de forma deslizante (se renueva cuando quedan < 15) con un máximo absoluto de 90.
  - **Cookie de pista** no sensible `sotf_li=1` (legible por JS; solo evita llamar a `/me` si eres invitado).
  - **PAT** (`Authorization: Bearer sotfm_pat_…`, con *scopes*): T1.
- **CSRF** (métodos no seguros): se exige `Sec-Fetch-Site: same-origin` o, como alternativa, un `Origin` en la allowlist, además de `Content-Type: application/json`. Única excepción: `POST /api/v2/e` (beacon `text/plain`, sin efectos de cuenta). **No hay ningún GET que mute estado.**
- **Errores**: RFC 9457 `application/problem+json`: `{ type, title, status, detail, instance, code, requestId, errors?: [{ path, message }] }`.
  - Códigos: `VALIDATION_FAILED` 422, `UNAUTHENTICATED` 401, `FORBIDDEN` 403, `EMAIL_NOT_VERIFIED` 403, `NOT_FOUND` 404, `GONE` 410, `CONFLICT` 409, `PAYLOAD_TOO_LARGE` 413, `UNSUPPORTED_MEDIA_TYPE` 415, `RATE_LIMITED` 429 (+ `Retry-After`), `TURNSTILE_REQUIRED` 403, `SUSPENDED` 403, `INTERNAL` 500 y `UNAVAILABLE` 503.
  - `title` y `detail` en inglés; la UI traduce por `code`.
- **Paginación**:
  - **Por páginas** en el catálogo (para que las URLs SEO coincidan): `?page=1&pageSize=24` (máx. 100) → `{ items, page, pageSize, total, totalPages }`.
  - **Por cursor** en los feeds (comentarios, notificaciones, auditoría, reseñas): `?cursor=&limit=20` (máx. 100) → `{ items, nextCursor }`. El cursor es opaco (base64 de `createdAt|id`).
- **Caché**: los GET públicos llevan `Cache-Control` + `Cloudflare-CDN-Cache-Control` + `Cache-Tag` + ETag (§2.7). Todo lo autenticado va con `private, no-store`.
- **CORS**: los GET públicos v2 responden `Access-Control-Allow-Origin: *` **sin credenciales**. Los endpoints con cookie solo son de mismo origen (sin CORS).
- **Versionado**: solo cambios aditivos dentro de v2. Un cambio incompatible exige `/api/v3`. Las deprecaciones se anuncian con `Deprecation` y `Sunset`.

**Límites de uso** (`@fastify/rate-limit`, *store* en memoria, clave `CF-Connecting-IP` o `userId`; más **1 regla WAF** de Cloudflare sobre `/api/v2/auth/*`):

| Ámbito | Límite |
|---|---|
| GET anónimos `/api/v2` | 300/min por IP |
| API legacy (lectura) | 600/min por IP (RedManager pagina todo en cada arranque) |
| Login | 5/min por IP y 10/h por cuenta. Turnstile obligatorio tras 3 fallos |
| Registro | 3/día por IP (Turnstile siempre) |
| Olvidé la contraseña | 3/h por IP y 3/h por email |
| Comentarios | 5/min y 50/día por usuario (cuentas < 24 h: Turnstile y enlaces en revisión) |
| Reseñas | 10/día · Reportes de campo 30/día · Reportes de moderación 20/día |
| Subidas | 20/día por usuario · escrituras de Kits 60/h |
| KelvinSeek | 20/min y 300/día por `chat_id` + IP, más presupuesto global diario (§5.5) |
| Descargas | **Nunca 429**: por encima de 60/min por IP se redirige igual, pero sin contar |
| Beacon `/e` | 120/min por IP; el exceso se descarta en silencio |

La respuesta 429 lleva un texto amable («Demasiadas solicitudes: vuelve a intentarlo en 30 s»).

### 5.2 Catálogo de endpoints v2 (T0)

Leyenda: 🔓 público (cacheable) · 👤 sesión · ✉️ sesión + email verificado · 🛡 moderador · 👑 admin · 🔒 interno (`X-Internal-Auth`, solo red interna).

**Cuenta y autenticación** (dominio `auth` y `me`; WP-30)

| Método y ruta | Auth | Cuerpo / query → respuesta |
|---|---|---|
| `POST /auth/register` | 🔓 + Turnstile | `{email, handle, password, displayName?, locale, acceptTerms, turnstileToken}` → 201 `{user}` + cookie (sin verificar; se envía el email) |
| `POST /auth/login` | 🔓 | `{identifier (email o handle), password, remember, turnstileToken?}` → 200 `{user}` + cookie. El error es siempre `INVALID_CREDENTIALS` y en tiempo constante |
| `POST /auth/logout` | 👤 | → 204 (revoca la sesión y borra las cookies) |
| `POST /auth/password/forgot` | 🔓 + Turnstile | `{email}` → 202 siempre |
| `POST /auth/password/reset` | 🔓 | `{token, password}` → 204 (revoca todas las sesiones) |
| `POST /auth/email/verify` · `POST /auth/email/resend` | 🔓 · 👤 | `{token}` → 204 · → 202 |
| `GET /me` · `GET /me/summary` | 👤 | usuario, rol, permisos, flags, contadores de no leídas (`summary` es ligero, para la cabecera) |
| `GET /me/home` | 👤 | actualizaciones de la mochila, *checklist* «Día 1» y kits recientes (bloque personalizado de la landing) |
| `PATCH /me/profile` · `PATCH /me/settings` · `PATCH /me/privacy` | 👤 | perfil (displayName, bio, links, avatarUploadId, bannerUploadId o bannerSeed, pinnedModIds) · preferencias · privacidad |
| `POST /me/email` · `POST /me/password` | 👤 | cambio con confirmación (se avisa al email antiguo) · `{current, next, revokeOthers}` |
| `GET /me/sessions` · `DELETE /me/sessions/:id` · `DELETE /me/sessions` | 👤 | listar y revocar (una o las demás) |
| `POST /me/export` · `GET /me/exports/:id` | 👤 | exportación asíncrona → enlace presigned por email |
| `POST /me/delete` · `POST /me/delete/cancel` | 👤 + contraseña | borrado con 14 días de gracia |
| `GET /me/downloads` · `DELETE /me/downloads` | 👤 | historial por mod (última versión descargada frente a la actual y compatibilidad) · borrar historial |
| `GET /me/follows` | 👤 | mochila (mods seguidos + `hasUpdate` + compatibilidad) |
| `GET /me/onboarding` · `PATCH /me/onboarding` | 👤 | checklist «Día 1» (WP-60) |

**Catálogo y búsqueda** (WP-33)

| Método y ruta | Auth | Notas |
|---|---|---|
| `GET /mods` | 🔓 | `type=mod\|library\|build\|all`, `category`, `excludeCategory`, `tag[]`, `excludeTag[]`, `compat=works\|untested\|any` (por defecto `any`), `multiplayer=client_side\|host_only\|all_players\|singleplayer_only`, `dedicated=yes`, `platform=Client\|Server\|Universal`, `updatedWithin=30d\|90d\|1y`, `minRating=1..5`, `hasSource=1`, `verified=1`, `author=handle`, `nsfw=0\|1` (1 exige opt-in; si no, se ignora), `q`, `sort=trending\|downloads\|updated\|new\|rating\|follows\|comments\|relevance`, `order=asc\|desc`, `page`, `pageSize`, `facets=1` → `{items: ModCardDTO[], …, facets?}`. Solo `status=published` |
| `GET /mods/:id` · `GET /mods/by-slug/:user/:slug` · `GET /mods/by-manifest/:manifestId` | 🔓 | `ModDetailDTO` (`pending` y `unlisted` solo por URL directa, con flags; `rejected` → 404; `removed` → 410) |
| `GET /resolve?path=` | 🔓 | `{kind: 'mod'\|'build'\|'user'\|'kit', id, canonicalPath, status: 200\|301\|404\|410}` (lo usan el middleware web y el download; lo implementa WP-31) |
| `GET /mods/:id/versions` · `GET /mods/:id/versions/:versionIdOrString` | 🔓 | orden semver (builds por fecha); incluye `fileSize`, `sha256`, escaneo, compatibilidad y `downloadsCount` |
| `GET /mods/:id/dependencies` · `GET /mods/:id/dependents` | 🔓 | resueltas (`required`, `optional`, `conflicts`) con estado · «requerido por» |
| `GET /mods/:id/related` | 🔓 | misma categoría o tags + similitud de texto (co-descargas en T1) |
| `GET /mods/:id/stats/public?range=30d\|1y\|all` | 🔓 | serie diaria (rellena con ceros) |
| `GET /categories` · `GET /tags` · `GET /creators?sort=` | 🔓 | i18n incluida; creadores con estadísticas y tier |
| `GET /users/:handle` · `/users/:handle/{mods,builds,kits,reviews,activity,badges}` | 🔓 | respeta la privacidad del usuario |
| `GET /search?q=&types=mod,build,kit,user,page&limit=` | 🔓 | FTS + trigram (§7.9); registra la consulta de forma agregada |
| `GET /search/index?locale=` | 🔓 | índice compacto para Cmd+K (≈ 15 KB br); tag `search-index` |
| `GET /site/stats` · `GET /live/pulse` · `GET /mods/:id/live` | 🔓 | cifras cacheadas (borde 30–60 s) |
| `GET /badges` · `GET /awards/current` · `GET /announcements/active` | 🔓 | catálogo con % de usuarios · Mod of the Week · banner |

**Descargas y subidas** (WP-31)

| Método y ruta | Auth | Notas |
|---|---|---|
| `GET\|HEAD /versions/:id/download` | 🔓 | 302 → R2 (§2.8) |
| `POST /uploads` · `POST /uploads/:id/complete` · `GET /uploads/:id` | ✉️ | presign → finalizar → estado e inspección (`manifest`, `entries`, `flags`) |

**Publicación y Basecamp** (WP-40, WP-52)

| Método y ruta | Auth | Notas |
|---|---|---|
| `POST /drafts` · `GET /drafts` · `GET\|PATCH\|DELETE /drafts/:id` · `POST /drafts/:id/submit` | ✉️ | borradores con autoguardado (`ModDraft`); `submit` crea el `Mod` en `pending` (o `published` si el autor es verificado y los checks salen OK) |
| `GET /studio/mods` · `GET /studio/mods/:id` | 👤 dueño | mis mods con estado y KPIs |
| `PATCH /studio/mods/:id` | 👤 dueño | ficha (nombre, descripción corta, `descriptionMd`, categoría, tags, compatibilidad declarada, licencia, enlaces, vídeo, NSFW, `contentLang`) |
| `PUT /studio/mods/:id/media` | 👤 dueño | `{thumbnailMediaId, gallery: [{mediaId, alt, position}]}`, sin borrar ni re-subir lo que no cambia |
| `POST /studio/mods/:id/versions` | ✉️ dueño | `{uploadId, changelogMd, channel, testedGameBuildIds[], notifyFollowers}`. Exige el mismo `manifestId` y semver mayor que la anterior (las builds no) |
| `PATCH /studio/mods/:id/versions/:vid` | 👤 dueño | editar el changelog · `{yank: {reason}}` |
| `POST /studio/mods/:id/archive` · `/unlist` · `/publish` · `/request-removal` | 👤 dueño | cambios de estado permitidos (§7.4) |
| `GET /studio/overview` · `GET /studio/analytics?modId=&range=&granularity=` · `GET /studio/analytics.csv` · `GET /studio/inbox?type=comment,bug,review,compat` | 👤 | KPIs, series y bandeja |

**Comunidad** (WP-41, WP-42, WP-50)

| Método y ruta | Auth | Notas |
|---|---|---|
| `GET /mods/:id/comments?sort=top\|new&cursor=` · `GET /comments/:id` (permalink con hilo) | 🔓 | solo los visibles (el autor y los moderadores ven también los suyos ocultos, marcados) |
| `POST /mods/:id/comments` | ✉️ | `{bodyMd, parentId?, isBugReport?, modVersionId?, imageUploadIds?[≤2]}` |
| `PATCH /comments/:id` · `DELETE /comments/:id` | 👤 autor | editar (con historial) · borrado suave |
| `PUT /comments/:id/reactions/:kind` · `DELETE …` | ✉️ | `kind ∈ {thumbs_up, heart, laugh, party, pray, fire}` |
| `POST /comments/:id/pin` · `DELETE …` · `POST /comments/:id/solution` · `POST /comments/:id/resolve {versionId}` | 👤 autor del mod | fijar (máx. 3), marcar como solución, bug resuelto en vX |
| `GET /mods/:id/reviews?sort=helpful\|new\|critical&cursor=` · `GET /mods/:id/reviews/summary` | 🔓 | histograma, media y bayes |
| `POST /mods/:id/reviews` · `PATCH /reviews/:id` · `DELETE /reviews/:id` | ✉️ (cuenta ≥ 24 h) | `{rating 1–5, title?≤80, bodyMd?≤2000, modVersionId?}`; una por usuario y mod |
| `PUT /reviews/:id/vote {value: 1\|-1}` · `DELETE …` | ✉️ | nunca sobre la propia |
| `PUT /reviews/:id/reply {bodyMd}` · `DELETE …` | 👤 autor del mod | una respuesta por reseña |
| `PUT /mods/:id/follow {notify}` · `DELETE /mods/:id/follow` | 👤 | mochila (`ModFavorite`) |
| `PUT /users/:handle/follow` · `DELETE …` | 👤 | seguir a un creador |
| `GET /kits?sort=popular\|new&staffPick=&compat=` · `GET /kits/:id` · `GET /kits/by-slug/:user/:slug` · `GET /kits/by-code/:code` | 🔓 | kits públicos (los `unlisted` solo por enlace) |
| `POST /kits` · `PATCH /kits/:id` · `DELETE /kits/:id` · `PUT /kits/:id/items` · `POST /kits/:id/fork` | 👤 | `items: [{modId, note?, pinnedVersionId?}]`; las dependencias se añaden solas marcadas como `auto` |
| `GET /mods/:id/compat` · `GET /ecosystem` · `GET /game-builds` · `GET /patch-radar?build=` | 🔓 | agregados por versión y build · estado de RedLoader · top 50 |
| `POST /compat-reports` · `PATCH /compat-reports/:id` · `DELETE …` | ✉️ | `{modVersionId, gameBuildId, mode, result, note?≤500, otherMods?}`; uno por (usuario, versión, build, modo) |
| `POST /compat-reports/:id/acknowledge {fixedInVersionId?}` | 👤 autor del mod | «arreglado en vX» (avisa a quienes reportaron) |
| `POST /reports` | ✉️ | `{targetType, targetId, reason, details?}` |
| `GET /me/compat-prompts` | 👤 | versiones descargadas con sesión y pendientes de «¿Funcionó?» (WP-50) |
| `POST /markdown/preview` | ✉️ | `{md, profile: 'lite'\|'full'}` → `{html}` (límite 30/min; vista previa de las islas públicas; WP-70) |

**Notificaciones y eventos** (WP-43, WP-52)

| Método y ruta | Auth | Notas |
|---|---|---|
| `GET /notifications?filter=&cursor=` · `GET /notifications/unread-count` · `POST /notifications/read {ids?\|all:true}` | 👤 | agrupadas por `groupKey` |
| `GET /notification-preferences` · `PUT /notification-preferences` | 👤 | matriz tipo × canal (§7.3) |
| `GET /stream` | 👤 | SSE (§5.3) |
| `POST /unsubscribe?token=` | 🔓 (token firmado) | desuscripción en un clic, RFC 8058 (WP-43) |
| `POST /e` · `POST /e/vitals` | 🔓 | beacon de analítica y RUM (`text/plain` con JSON); 204 |

**Moderación y administración** (WP-51)

| Método y ruta | Auth |
|---|---|
| `GET /ranger/queue?lane=new_mods\|versions\|post_review\|reports\|comments\|builds` · `GET /ranger/items/:id` (incluye inspección, diff de ficheros frente a la versión anterior, escaneo, historial del autor y descripción renderizada) | 🛡 |
| `POST /ranger/mods/:id/decision` · `POST /ranger/versions/:id/decision` `{action: approve\|reject\|request_changes\|unlist\|remove\|restore, templateKey?, note?}` | 🛡 |
| `GET /ranger/reports` · `POST /ranger/reports/:id/resolve {action, note}` | 🛡 |
| `POST /ranger/comments/:id/hide {reason}` · `/unhide` · `POST /ranger/reviews/:id/hide` · `/unhide` | 🛡 |
| `GET /ranger/users?q=` · `GET /ranger/users/:id` · `POST /ranger/users/:id/sanctions` · `DELETE /ranger/sanctions/:id` · `PATCH /ranger/users/:id/role` (👑) · `PATCH /ranger/users/:id/verified-creator` · `POST /ranger/users/:id/revoke-sessions` | 🛡 / 👑 |
| `POST /ranger/scans/:id/override {verdict: false_positive\|malicious, note}` · `GET /ranger/audit?cursor=&actor=&action=&target=` | 🛡 |
| `CRUD /admin/game-builds` · `PUT /admin/ecosystem` · `CRUD /admin/categories` · `CRUD /admin/tags` · `POST /admin/recategorize` (lote con sugerencias) · `CRUD /admin/awards` · `CRUD /admin/announcements` · `GET\|PUT /admin/settings/:key` · `GET /admin/kelvinseek/usage` · `GET /admin/rum` | 👑 |

**Internos** (🔒, solo red de Coolify)

- `GET /internal/downloads/resolve?user=&slug=&version=` (+ cabeceras reenviadas) → `{status, location?}`.
- `POST /internal/cdn/purge {tags, reason}`.
- `GET /healthz` (vivo) y `GET /readyz` (BD + pg-boss + LISTEN).
- En la web: `POST /_internal/cache/invalidate {tags}` y `GET /healthz`.

### 5.3 Eventos SSE (`GET /api/v2/stream`)

| Evento | Canal | Payload (solo avisa) |
|---|---|---|
| `notification` | `user:{id}` | `{id, type, unreadCount}` |
| `mod.updated` | `user:{id}` (dueño) | `{modId}` |
| `moderation.queue` | `moderation` | `{lane, count}` |
| `ping` | todos | comentario `: ping` cada 25 s |

El cliente reconecta con `Last-Event-ID`. Si falla, hace *polling* de `unread-count` cada 60 s. La conexión se cierra en `pagehide` para no romper el bfcache.

### 5.4 Contrato de datos compartido (resumen de DTOs, `@sotf/contracts`)

- **`ModCardDTO`**: `id, type, name, slug, userHandle, userDisplayName, verifiedCreator, category{slug,nameKey}, shortDescription, thumbnail{url, width, height, thumbhash, dominantColor, srcset}, latestVersion, downloads, downloads7d, followers, ratingAvg, ratingCount, compatStatus, multiplayerRole, platform, isFeatured, awards[], lastReleasedAt, nsfw, status`.
- **`ModDetailDTO`**: `ModCardDTO` + `manifestId, descriptionHtml, descriptionMd?` (solo el dueño), `gallery[], video, license, sourceUrl, supportLinks[], contentLang, dedicatedServer, safeToRemove, logColor, dependencies[], dependentsCount, latestVersion{…VersionDTO}, compatCurrent{status, works, broken, partial, gameBuild}, possiblyOutdated, reviewsSummary, commentsCount, milestones[], originalAuthor?, successor?, statusBanner?, canonicalPath, alternates[]`.
- **`VersionDTO`**: `id, version, channel, status, changelogHtml, publishedAt, fileSize, sha256, downloadPath, gameVersionDeclared, loaderVersionDeclared, platform, testedGameBuilds[], scan{verdict, positives, total, permalink, scannedAt}, compat[], downloadsCount`.
- **`UserPublicDTO`**, **`KitDTO`**, **`CommentDTO`**, **`ReviewDTO`**, **`CompatAggregateDTO`**, **`NotificationDTO`**, **`ProblemDTO`**.
- Hay un **esquema Zod por DTO legacy** (`LegacyModListItem`, `LegacyModDetail`, `LegacyCheck`, `LegacyStats`, …), generado **a partir de los fixtures** y que valida también el orden de claves (§5.5).

### 5.5 Superficie legacy `/api/*` (compatibilidad)

**Hosts**: `api.sotf-mods.com/api/*` y `sotf-mods.com/api/*` (el segundo revive RedManager ≤ 1.1.6 y los mods de 2023). La implementa `apps/api/src/legacy/**` sobre los servicios de core, con **serializadores escritos a mano** que construyen los objetos **en el orden exacto de claves** de los fixtures. La especificación completa (parámetros, filtros, orden, paginación y rarezas) está en **research/01 §2.1–§2.7**, y los fixtures en `research/fixtures/01-compat/` (se copian a `tooling/legacy-contract/fixtures/`).

**Tier 1: byte-compatibles** (mismos status 2xx, `Content-Type`, claves, tipos, nulabilidad, valores y orden de claves; mismo filtrado, orden y paginación):

| Ruta | Detalles que no se pueden romper |
|---|---|
| `GET /api/mods` | Sobre `{status:true, data, meta}`, con `meta = {total, page, limit, pages: ceil(total/limit), next_page: min(page+1,pages), prev_page: max(page-1,1)}`. Si falta `type` → solo `Mod`, salvo que llegue `modIds` (entonces **sin** filtro de tipo); `Both` = sin filtro. `approved` ausente → **sin filtro de aprobación**. `nsfw==="true"` → solo NSFW; si no, sin NSFW. Los `orderby` son los de research/01 §2.3, con desempate por `id`. Cada ítem tiene las columnas escalares de `Mod` en el orden legacy + `images[{isPrimary,isThumbnail,url}]`, `user{name,slug,imageUrl,isTrusted}`, `category{name,slug}\|null`, `versions` = **un solo elemento, la versión menor por orden de string ascendente** (rareza que se conserva) y `_count{favorites}`. `dependencies` va como **array** (`""` → `[]`). `description` completa; `latestVersionSize` siempre `""`; `sourceUrl` tal cual; `user.imageUrl` `""` si no hay avatar. Los números nunca son `null` (`averageRating` 0 si no hay reseñas; `reviewsCount`, `userId` y `categoryId` nunca nulos en la salida). `COUNT` y `bigint` se convierten a `number`. Fechas con `toISOString()`. La búsqueda es ILIKE en nombre, descripción y nombre de usuario (fidelidad; el FTS es solo de v2) |
| `GET /api/mods/:mod_id` | `mod_id` exacto (distingue mayúsculas). Mismas columnas escalares + `images[{url}]` (solo `url`), `user`, `category`, `versions` = **todas**, orden **string desc** (rareza que se conserva), cada una `{id, version, isLatest, changelog, downloadUrl (cruda, sin codificar), extension, filename, createdAt, updatedAt, _count{downloads}}`, y `_count{favorites}`. `dependencies` como **string crudo**. Rutas estáticas reservadas: `featured`, `find` y `slug` |
| `GET /api/mods/:mod_id/check?version=` | Las 3 respuestas exactas de research/01 §2.5 (`semver.gt` de node-semver). Mod inexistente → 404 `NOT_FOUND`; versión no semver o build → **422** con el sobre legacy (antes era 500) |
| `GET /api/kelvinseek/prompt?chat_id=&text=&context=` | `text/plain;charset=utf-8` `"{command}\|{respuesta}"`, siempre 200. La **lista de comandos se copia literal** de `sotf-mods-api/src/api/kelvinseek/prompt.ts`, igual que el *prompt* y el *fallback* (levenshtein y dice). Si falta un parámetro → 422 JSON |
| `GET /api/kelvinseek/clear?chat_id=` | `text/plain` `Chat cleared` |

**Tier 2: congelados y deprecados** (lectura; `Deprecation: true`, `Sunset: <T0+12 meses>`, `Link: <https://sotf-mods.com/developers>; rel="deprecation"`; se registran UA y Origin por ruta durante 90 días):

`/api/mods/slug/:u/:s` (= detalle), `/api/mods/find`, `/api/mods/featured` (12 mods, forma de research/01 §2.2 #8), `/api/builds/featured` (4), `/api/stats` (`{users, mods, downloads, developers}` con los significados de research/01 §2.6; `downloads` = total del sitio **incluidas las 434 huérfanas**, que sale de los agregados), `/api/stats/builds`, `/api/categories?type=`, `/api/users/:slug`, `/api/users/:slug/stats`, `GET /api/comments?mod_id=` (**excluye los ocultos**), `/api/mods/:mod_id/download-stats?period=` (desde agregados diarios) y los dos alias de descarga (302, ignorando `?ip=&agent=`).

**Tier 3: retirados en el corte** → **410** con el sobre legacy:

```json
{"status":false,"error":"GONE","message":"This endpoint was retired in sotf-mods v2. See https://sotf-mods.com/developers"}
```

Se aplica a todas las rutas `/api/auth/*`, `/api/favorites*`, `/api/mods/:id/{favorite,approve,unapprove,release,details}`, `/api/files/presigned-url`, `/api/mods/{upload,publish}`, `/api/builds/{upload,publish}`, `/api/users/avatar` y `POST /api/comments`.

**Convenciones globales de la capa legacy**:

- Sobre OK `{"status":true,"data":…}` y `Content-Type: application/json` (sin charset, como hoy).
- Sobre de error `{"status":false,"error":"NOT_FOUND"|"VALIDATION"|"UNKNOWN"|"GONE","message":…}`. Un 404 lleva el literal `"No se encontró el recurso."`.
- Las rutas legacy **no** usan esquemas estrictos: toleran `?&`, `_t` y claves vacías.
- `limit` y `page` no numéricos, o `limit` fuera de 1–1000 → 422 con el sobre.
- CORS: `Access-Control-Allow-Origin: *` sin credenciales, métodos `GET, HEAD, OPTIONS`, preflight 204 con `max-age 86400`.
- Caché: `public, max-age=60` + borde 300 s, SWR 600 s, tags `legacy`, `mod:{id}`. KelvinSeek: `no-store`.
- **Sin** Bot Fight, Browser Integrity Check ni desafíos JS en `api.sotf-mods.com/api/mods*`, `/api/kelvinseek/*` y `/mods/*/download/*`.

**Desviaciones intencionales** (documentadas en `/developers` y cubiertas por los tests):

1. `approved=false` devuelve solo `status=pending` con checks OK (antes, todos los no aprobados).
2. `approved=true` = `status=published` (los `archived`, `unlisted` y `removed` no salen).
3. Sin `approved` = `published`, `pending` con checks, `archived` y `unlisted`.
4. El detalle por `mod_id` devuelve todo salvo `rejected` y `removed` (404).
5. Los 19 `type=null` salen como `"Mod"` o `"Library"` (backfill B4).
6. Los 500 pasan a 422 en validación.
7. Comentarios sin los ocultos.
8. Desempate estable por `id`.
9. Se añaden cabeceras (Cache-Control, Deprecation, X-Request-Id).
10. Las descargas son 302 (antes, binario con buffer).

**Rescates** (§3.4 de research/01):

- Proxy `sotf-mods.com/api/*` → **sí** (T0).
- Resolver de descarga tolerante a `undefined` → **sí** (T0).
- Alias snake_case (`user_slug`, `latest_version`, …) para RedManager ≤ 1.1.9 → **implementado detrás de `LEGACY_SNAKE_ALIASES=false`**. Se decide en T+30 con los logs.
- Alias `kelvin-gpt/*` → **no**: 410, porque expone la clave OpenAI del usuario en la URL.

**KelvinSeek (límites)**:

- `KELVINSEEK_MODEL` (por defecto `gpt-4o-mini`), timeout de 8 s y `KELVINSEEK_DAILY_BUDGET_USD` (por defecto 3). Al superarlo se responde con el *fallback* determinista (el comando más cercano + una frase en personaje), sin LLM.
- `chat_id` (contiene SteamID y nombre de Steam) se guarda **hasheado** (`HMAC(APP_SECRET, chat_id)`) en `KelvinGPTMessages.chatId`, con retención de 30 días.
- Se corrige el bug: se conservan los **32 más recientes**.
- Uso agregado en `KelvinUsageDaily` y visible en admin.

---

## 6. Modelo de datos y migración sin pérdida

> Detalle del inventario legacy, volúmenes, calidad de datos y SQL de perfilado: **research/02** (§2–§5 y §14). Aquí va el diseño **definitivo**.

### 6.1 Reglas de oro (no negociables)

1. **Solo *expand* hasta T+60 días**. Prohibido: `DROP`, `RENAME` (tablas, columnas o índices usados), cambios de tipo, `SET NOT NULL` sobre columnas existentes y borrado físico de filas legacy.
2. Toda columna nueva es `NULL` o `NOT NULL DEFAULT <constante>`, para que los `INSERT` de la legacy sigan funcionando.
3. Toda modificación **en sitio** de una columna legacy guarda el valor anterior en `DataFixAudit` y se puede revertir fila a fila (`pnpm db:revert-fix <fixId>`).
4. Los objetos de R2 no se renombran ni se borran. Solo se reescriben metadatos, con aprobación.
5. Todo lo que la v2 permite borrar se borra de forma lógica (`deletedAt` o `status`).
6. Mientras exista la opción de volver al legacy (T0 → T+30), la v2 **escribe en formato compatible**:
   - una fila `ModDownload` por cada descarga contada;
   - `isApproved` sincronizado con `status`;
   - `Comment.message`, `ModVersion.changelog`, `Mod.description` y `ModReview.message` con una versión **escapada** del Markdown (la legacy pinta con `innerHTML`);
   - `isHidden` sincronizado;
   - hashes argon2id PHC.
7. **Nunca más `prisma db push`** contra producción. A partir de B2 del corte, el legacy usa el rol `sotf_legacy_app` (solo DML) y la contraseña del *owner* se rota.
8. Cada migración: `SET lock_timeout = '3s'` y `SET statement_timeout = '60s'`. `CREATE INDEX CONCURRENTLY` va en un fichero propio marcado `-- sotf:no-transaction`. Las FKs y los CHECK entran como `NOT VALID` y se validan en una migración posterior.

### 6.2 Baseline, runner y guarda de superconjunto

- **Runner** (`@sotf/db`, `pnpm db:migrate`):
  - Aplica `packages/db/migrations/NNNN_<slug>.sql` en orden y registra `(name, checksum sha256, appliedAt, durationMs)` en `"_v2_migrations"`.
  - Toma un `pg_advisory_lock` para que no haya dos ejecuciones a la vez.
  - Cada fichero va en su transacción, salvo los marcados con `-- sotf:no-transaction`.
  - `--dry-run` imprime el plan. Si cambia el checksum de una migración aplicada, falla.
  - `db:baseline --mark-applied` solo inserta la fila de `0000`.
  - pg-boss crea su esquema `pgboss` en el mismo job (`boss.start()` con credenciales de *owner* y `migrate: true`). Las apps arrancan con `migrate: false`.
- **Baseline `0000_legacy_baseline.sql`**:
  1. **Hasta tener el dump real**: DDL generado con `prisma@6.19.0 migrate diff --from-empty --to-schema tooling/migration/legacy/schema.prisma --script` (copia literal del `schema.prisma` legacy).
  2. **Con el dump real** (bloquea el corte, no el desarrollo): `pg_restore` → introspección → se regenera `0000` para que refleje **la realidad**, incluidas tablas o columnas sobrantes (`Ban`, `canApprove`, `image_url`…), que se declaran en Drizzle y nunca se tocan. El informe de *drift* se guarda en `tooling/migration/drift-report.json`.
- **Guarda «legacy ⊆ v2»** (`pnpm db:guard`, en CI y antes de cada `migrate` en producción):
  - Con `legacy-catalog.json` (instantánea congelada de `information_schema.columns`, `table_constraints`, `pg_indexes` y `pg_trigger` de las tablas legacy, tomada del baseline), comprueba tras migrar que **cada** tabla, columna (tipo, nulabilidad y default), constraint e índice legacy sigue existiendo igual.
  - Además, un linter de SQL rechaza `DROP TABLE|COLUMN|CONSTRAINT`, `RENAME`, `ALTER COLUMN … TYPE`, `SET NOT NULL` y `DROP DEFAULT` sobre objetos legacy.
- **Drizzle**:
  - `packages/db/src/schema/legacy/*.ts` mapea las 16 tablas legacy, escrito a mano a partir de `drizzle-kit pull` y con los 4 defectos de research/04 §4.3 corregidos: `boolean("isNSFW")`, defaults `''`, sin `int4_ops` sobre texto y `timestamp(3)` con `mode:'date'` en UTC.
  - `packages/db/src/schema/v2/*.ts` contiene las tablas nuevas.
  - Un test de integración compara cada columna declarada en Drizzle con el catálogo real tras migrar: nombres, tipos y nulabilidad.

### 6.3 Columnas nuevas en tablas legacy

> Timestamps nuevos en tablas legacy: `timestamp(3)`, en UTC (coherentes con la tabla). Toda columna es NULL o con DEFAULT constante.

| Tabla | Columnas nuevas (tipo · default) |
|---|---|
| **(todas con `updatedAt`)** | `ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP` (aditivo; permite INSERT desde v2 y SQL) |
| `"User"` | `emailNormalized text NULL` (trigger) · `role text NOT NULL DEFAULT 'user'` CHECK `('user','moderator','admin')` · `verifiedCreator boolean NOT NULL DEFAULT false` · `legacyTrusted boolean NULL` · `displayName text NULL` · `bioMd text NULL` · `links jsonb NOT NULL DEFAULT '[]'` · `avatarMediaId uuid NULL` · `bannerMediaId uuid NULL` · `bannerSeed integer NULL` · `settings jsonb NOT NULL DEFAULT '{}'` (`locale`, `theme`, `density`, `reducedMotion`, `nsfwOptIn`, `nsfwConfirmedAt`, `downloadHistory`, `numberFormat`) · `privacy jsonb NOT NULL DEFAULT '{}'` (`hideActivity`, `hideRank`, `hideFromLeaderboards`, `hideKits`) · `onboarding jsonb NOT NULL DEFAULT '{}'` · `pinnedModIds integer[] NOT NULL DEFAULT '{}'` · `emailVerifiedAt`, `passwordUpdatedAt`, `lastLoginAt`, `lastSeenAt`, `suspendedUntil`, `bannedAt`, `deletedAt` (`timestamp(3) NULL`) · `banReason text NULL` · `trustLevel smallint NOT NULL DEFAULT 0` · `xp integer NOT NULL DEFAULT 0` · `ogImageKey text NULL` |
| `"Mod"` | `status text NOT NULL DEFAULT 'pending'` CHECK `('pending','published','unlisted','rejected','archived','removed')` · `statusReason text` · `statusChangedAt`, `publishedAt`, `approvedAt`, `archivedAt`, `removedAt`, `editedAt`, `compatUpdatedAt` (`timestamp(3)`) · `approvedById integer NULL` FK→User SET NULL · `successorModId integer NULL` FK→Mod SET NULL · `canonicalSlug text NULL` · `descriptionMd text NULL` · `descriptionHtml text NULL` · `renderVersion smallint NOT NULL DEFAULT 0` · `thumbnailMediaId uuid NULL` · `license text NULL` · `supportLinks jsonb NOT NULL DEFAULT '[]'` · `videoUrl text NULL` · `contentLang text NULL` · `platform text NULL` CHECK `('Client','Server','Universal')` · `multiplayerRole text NULL` CHECK `('singleplayer_only','client_side','host_only','all_players','unknown')` · `dedicatedServer text NULL` CHECK `('yes','no','partial','unknown')` · `safeToRemove text NULL` CHECK `('yes','no','unknown')` · `logColor text NULL` · `originalAuthorName text NULL` · `originalAuthorUrl text NULL` · `compatStatus text NULL` CHECK `('works','mixed','broken','untested')` · `possiblyOutdated boolean NOT NULL DEFAULT false` · `trendingScore double precision NOT NULL DEFAULT 0` · `ratingBayes double precision NOT NULL DEFAULT 0` · `dependentsCount integer NOT NULL DEFAULT 0` · `qualityScore smallint NULL` · `ogImageKey text NULL` · `searchVector tsvector GENERATED ALWAYS AS (setweight(to_tsvector('simple', sotf_unaccent(coalesce(name,''))),'A') \|\| setweight(to_tsvector('simple', sotf_unaccent(coalesce("mod_id",''))),'A') \|\| setweight(to_tsvector('english', sotf_unaccent(coalesce("shortDescription",''))),'B') \|\| setweight(to_tsvector('english', sotf_unaccent(left(coalesce(description,''), 20000))),'C')) STORED` |
| `"ModVersion"` | `storageKey text NULL` · `fileSize bigint NULL` · `sha256 text NULL` · `contentType text NULL` · `status text NOT NULL DEFAULT 'active'` CHECK `('pending','active','rejected','yanked','file_missing')` · `statusReason text` · `channel text NOT NULL DEFAULT 'release'` CHECK `('release','beta')` · `changelogMd text` · `changelogHtml text` · `semverMajor`, `semverMinor`, `semverPatch integer NULL` · `semverPre text NULL` · `manifest jsonb NULL` · `gameVersionDeclared`, `loaderVersionDeclared`, `platformDeclared text NULL` · `buildMeta jsonb NULL` (`guid`, `buildshareVersion`, `elements`, `structures`, `blueprintAuthor`, `sizeClass`) · `checksStatus text NULL` CHECK `('pending','passed','flagged','failed')` · `publishedById integer NULL` FK→User · `publishedAt timestamp(3) NULL` · `downloadsCount integer NOT NULL DEFAULT 0` · `uniqueDownloadsCount integer NOT NULL DEFAULT 0` |
| `"ModImage"` | `mediaId uuid NULL` · `storageKey text NULL` · `position integer NULL` · `alt text NULL` |
| `"Comment"` | `bodyMd text` · `bodyHtml text` · `status text NOT NULL DEFAULT 'visible'` CHECK `('visible','hidden','pending','deleted')` · `hiddenReason text` · `editedAt`, `deletedAt`, `pinnedAt` · `deletedById`, `pinnedById integer NULL` · `isBugReport boolean NOT NULL DEFAULT false` · `isSolution boolean NOT NULL DEFAULT false` · `modVersionId integer NULL` FK→ModVersion · `bugResolvedInVersionId integer NULL` FK→ModVersion · `reactionsCount integer NOT NULL DEFAULT 0` · `repliesCount integer NOT NULL DEFAULT 0` · `ipHash text NULL` |
| `"ModReview"` | `bodyMd text` · `bodyHtml text` · `status text NOT NULL DEFAULT 'visible'` CHECK `('visible','hidden','deleted')` · `modVersionId integer NULL` FK→ModVersion · `isVerifiedDownload boolean NOT NULL DEFAULT false` · `helpfulCount`, `unhelpfulCount integer NOT NULL DEFAULT 0` · `authorReplyMd`, `authorReplyHtml text` · `authorRepliedAt`, `editedAt`, `deletedAt`. (El legacy tiene `isHidden DEFAULT true`: la v2 siempre escribe `isHidden` de forma explícita, sincronizado con `status`) |
| `"Category"` | `icon text` · `sortOrder integer NOT NULL DEFAULT 0` · `i18n jsonb NOT NULL DEFAULT '{}'` · `legacySlugs text[] NOT NULL DEFAULT '{}'` · `retiredAt timestamp(3)` · `hubIntro jsonb NOT NULL DEFAULT '{}'` |
| `"Tag"` | `group text NULL` · `i18n jsonb NOT NULL DEFAULT '{}'` · `isCurated boolean NOT NULL DEFAULT true` · `sortOrder integer NOT NULL DEFAULT 0` |
| `"ModDownload"` | `ipHash text NULL` · `country text NULL` · `source text NULL` CHECK `('web','redmanager','client','api','unknown')` · `userId integer NULL` FK→User SET NULL · `isUnique boolean NULL` |
| `"ModFavorite"` | `notify boolean NOT NULL DEFAULT true` |
| `"KelvinGPTMessages"` | `isHashed boolean NOT NULL DEFAULT false` |
| `"Token"`, `"PasswordResetToken"`, `"LoginAttempt"`, `"PendingMention"`, `"_ModToTag"` | sin cambios |

### 6.4 Tablas nuevas (solo v2)

> Convenciones: `timestamptz(3)` y `createdAt timestamptz NOT NULL DEFAULT now()` salvo que se indique otra cosa. `uuid` = v7 generado en la app.

**Autenticación**

- `"Session"(id uuid PK, userId int NOT NULL FK User CASCADE, tokenHash text NOT NULL UNIQUE, pwdFingerprint text NOT NULL, createdAt, lastSeenAt timestamptz NOT NULL, expiresAt timestamptz NOT NULL, absoluteExpiresAt timestamptz NOT NULL, revokedAt timestamptz NULL, ipHash text, userAgent text, deviceLabel text)`. Índice `(userId) WHERE revokedAt IS NULL`. `pwdFingerprint` = los 16 primeros hex de sha256(`User.password`): si la contraseña cambia por cualquier vía, la sesión deja de valer.
- `"AuthToken"(id uuid PK, userId int NOT NULL FK CASCADE, kind text NOT NULL CHECK (kind IN ('password_reset','email_verify','email_change')), tokenHash text NOT NULL UNIQUE, payload jsonb NOT NULL DEFAULT '{}', expiresAt timestamptz NOT NULL, usedAt timestamptz NULL, createdAt)`.
- `"AuthEvent"(id bigint identity PK, userId int NULL, kind text NOT NULL, success boolean NOT NULL, ipHash text, userAgent text, createdAt)`. Índice `(userId, createdAt DESC)`. Retención de 90 días.

**URLs**

- `"ModSlugHistory"(id int identity PK, modId int NOT NULL FK Mod, userSlug text NOT NULL, slug text NOT NULL, reason text NOT NULL CHECK (reason IN ('legacy','canonicalized','renamed','owner_changed')), createdAt)`. Índices en `lower(slug)` y `(lower(userSlug), lower(slug))`.
- `"UserSlugHistory"(userId int FK, slug text, createdAt, PRIMARY KEY (slug))`.
- `"Tombstone"(path text PK, status smallint NOT NULL DEFAULT 410, reason text, createdAt)`.
- `"Redirect"(fromPath text PK, toPath text NOT NULL, status smallint NOT NULL DEFAULT 301, hits bigint NOT NULL DEFAULT 0, createdAt)`.

**Contenido y publicación**

- `"Media"(id uuid PK, ownerId int NULL FK User, purpose text NOT NULL CHECK (purpose IN ('mod_image','thumbnail','avatar','banner','comment_image','kit_cover','og','legacy')), sourceBucket text NOT NULL, sourceKey text NOT NULL, width int, height int, bytes bigint, contentType text, thumbhash text, dominantColor text, variants jsonb NOT NULL DEFAULT '[]' /* [{w, format, key, bytes}] */, status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','ready','failed')), error text, createdAt, processedAt timestamptz)`. Índice UNIQUE `(sourceBucket, sourceKey)`.
- `"Upload"(id uuid PK, userId int NOT NULL FK, purpose text NOT NULL CHECK (purpose IN ('mod_file','build_file','image','avatar','banner','comment_image')), bucket text NOT NULL, key text NOT NULL, filename text NOT NULL, contentType text NOT NULL, declaredBytes bigint NOT NULL, maxBytes bigint NOT NULL, sha256 text, status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','uploaded','processing','ready','rejected','expired')), resultRef jsonb, error text, expiresAt timestamptz NOT NULL, completedAt timestamptz, createdAt)`. Índice `(userId, createdAt DESC)`.
- `"ModDraft"(id uuid PK, userId int NOT NULL FK, modId int NULL FK Mod, kind text NOT NULL CHECK (kind IN ('mod','build')), data jsonb NOT NULL DEFAULT '{}', uploadIds uuid[] NOT NULL DEFAULT '{}', createdAt, updatedAt timestamptz NOT NULL DEFAULT now())`. Los borradores **nunca** van a `"Mod"`, porque la legacy mostraría las filas no aprobadas.
- `"ModDependency"(id int identity PK, modVersionId int NOT NULL FK ModVersion CASCADE, depManifestId text NOT NULL, depModId int NULL FK Mod SET NULL, versionRange text NULL, kind text NOT NULL DEFAULT 'required' CHECK (kind IN ('required','optional','conflicts')), createdAt)`. UNIQUE `(modVersionId, depManifestId)`. Índice `(depModId)`.
- `"VersionInspection"(modVersionId int PK FK, status text NOT NULL, manifest jsonb, entries jsonb /* [{path,size,compressed,crc32}] */, flags jsonb NOT NULL DEFAULT '[]', uncompressedBytes bigint, ratio real, sha256 text, error text, inspectedAt timestamptz)`.
- `"SecurityScan"(id int identity PK, modVersionId int NOT NULL FK, sha256 text NOT NULL, engine text NOT NULL DEFAULT 'virustotal', positives int, total int, permalink text, verdict text NOT NULL CHECK (verdict IN ('pending','clean','suspicious','malicious','unknown','false_positive')), raw jsonb, scannedAt timestamptz, overrideById int NULL, overrideNote text)`. Índice `(modVersionId, scannedAt DESC)`.

**Compatibilidad**

- `"GameBuild"(id int identity PK, label text NOT NULL UNIQUE, steamBuildId text NULL, releasedAt date NOT NULL, isBreaking boolean NOT NULL DEFAULT false, isCurrent boolean NOT NULL DEFAULT false, notesMd text, createdById int NULL, createdAt)`. UNIQUE parcial `(isCurrent) WHERE isCurrent`.
- `"LoaderRelease"(id int identity PK, name text NOT NULL DEFAULT 'RedLoader', version text NOT NULL, releasedAt date, url text, UNIQUE(name, version))`.
- `"EcosystemStatus"(gameBuildId int FK, loaderReleaseId int FK, status text NOT NULL CHECK (status IN ('works','partial','broken','unknown')), noteMd text, updatedById int, updatedAt timestamptz NOT NULL DEFAULT now(), PRIMARY KEY (gameBuildId, loaderReleaseId))`.
- `"CompatReport"(id bigint identity PK, userId int NOT NULL FK, modVersionId int NOT NULL FK, gameBuildId int NOT NULL FK, mode text NOT NULL CHECK (mode IN ('singleplayer','host','client','dedicated')), result text NOT NULL CHECK (result IN ('works','partial','broken')), note text CHECK (char_length(note) <= 500), otherMods text, weight real NOT NULL DEFAULT 1, status text NOT NULL DEFAULT 'visible', acknowledgedAt timestamptz, fixedInVersionId int NULL, createdAt, updatedAt timestamptz NOT NULL DEFAULT now())`. UNIQUE `(userId, modVersionId, gameBuildId, mode)`. Índice `(modVersionId, gameBuildId)`.
- `"ModVersionCompat"(modVersionId int FK, gameBuildId int FK, works int NOT NULL DEFAULT 0, partial int NOT NULL DEFAULT 0, broken int NOT NULL DEFAULT 0, weightedScore real, authorTested boolean NOT NULL DEFAULT false, computedStatus text NOT NULL DEFAULT 'untested', updatedAt timestamptz, PRIMARY KEY (modVersionId, gameBuildId))`.

**Estadísticas y analítica**

- `"ModVersionDownloadDaily"(modVersionId int, day date, channel text, downloads int NOT NULL DEFAULT 0, uniqueDownloads int NOT NULL DEFAULT 0, PRIMARY KEY (modVersionId, day, channel))`.
- `"SiteDownloadDaily"(day date, channel text, downloads int NOT NULL, PRIMARY KEY (day, channel))`. Guarda las descargas **huérfanas** (versión nula o versión sin mod).
- `"DownloadUnique"(modVersionId int, day date, ipHash text, PRIMARY KEY (modVersionId, day, ipHash))`. Retención de 2 días.
- `"ModStatsDaily"(modId int, day date, views int NOT NULL DEFAULT 0, uniqueViews int NOT NULL DEFAULT 0, downloads int NOT NULL DEFAULT 0, uniqueDownloads int NOT NULL DEFAULT 0, follows int NOT NULL DEFAULT 0, unfollows int NOT NULL DEFAULT 0, comments int NOT NULL DEFAULT 0, reviews int NOT NULL DEFAULT 0, compatReports int NOT NULL DEFAULT 0, bySource jsonb NOT NULL DEFAULT '{}', byReferrer jsonb NOT NULL DEFAULT '{}', byCountry jsonb NOT NULL DEFAULT '{}', byLocale jsonb NOT NULL DEFAULT '{}', PRIMARY KEY (modId, day))`.
- `"ModStats"(modId int PK FK, downloadsTotal bigint NOT NULL, downloads7d int, downloads30d int, uniqueDownloadsTotal bigint, views7d int, views30d int, followers int, commentsVisible int, reviewsVisible int, ratingAvg real, updatedAt timestamptz)`.
- `"SiteStat"(key text PK, value bigint NOT NULL, updatedAt timestamptz)`: `users`, `mods`, `downloads`, `developers`, `builds`, `buildDownloads`, `buildDevelopers`, `orphanDownloads`.
- `"UserStats"(userId int PK FK, modsCount int, buildsCount int, downloadsTotal bigint, followersCount int, followingCount int, ratingAvg real, reviewsCount int, helpfulVotes int, compatReportsCount int, creatorTier text, survivorRank text, updatedAt timestamptz)`.
- `"UserActivityDaily"(userId int, day date, releases int, comments int, reviews int, reports int, PRIMARY KEY (userId, day))`.
- `"AnalyticsEvent"(id bigint identity PK, ts timestamptz NOT NULL DEFAULT now(), kind text NOT NULL, path text, entityType text, entityId int, locale text, referrerDomain text, country text, device text, visitorHash text, props jsonb)`. Índices BRIN `(ts)` y `(entityType, entityId, ts)`. Retención de 90 días.
- `"SearchQueryDaily"(day date, qNorm text, results int, count int NOT NULL DEFAULT 1, PRIMARY KEY (day, qNorm))`.

**Comunidad**

- `"UserFollow"(followerId int FK, followeeId int FK, notify boolean NOT NULL DEFAULT true, createdAt, PRIMARY KEY (followerId, followeeId))`. Índice `(followeeId)`.
- `"Kit"(id int identity PK, ownerId int NOT NULL FK, slug text NOT NULL, name text NOT NULL, descriptionMd text, descriptionHtml text, visibility text NOT NULL DEFAULT 'public' CHECK (visibility IN ('public','unlisted','private')), code text NOT NULL UNIQUE, coverMediaId uuid NULL, isStaffPick boolean NOT NULL DEFAULT false, forkedFromId int NULL FK Kit, revision int NOT NULL DEFAULT 1, itemsCount int NOT NULL DEFAULT 0, followersCount int NOT NULL DEFAULT 0, ogImageKey text NULL, createdAt, updatedAt timestamptz NOT NULL DEFAULT now(), deletedAt timestamptz)`. UNIQUE `(ownerId, slug)`.
- `"KitItem"(kitId int FK CASCADE, modId int FK, position int NOT NULL, note text, pinnedVersionId int NULL FK ModVersion, isAutoDependency boolean NOT NULL DEFAULT false, addedAt timestamptz NOT NULL DEFAULT now(), PRIMARY KEY (kitId, modId))`.
- `"KitRevision"(kitId int FK, revision int, changes jsonb NOT NULL, createdAt, PRIMARY KEY (kitId, revision))`.
- `"CommentReaction"(commentId int FK, userId int FK, kind text NOT NULL, createdAt, PRIMARY KEY (commentId, userId, kind))`.
- `"CommentEdit"(id bigint identity PK, commentId int FK, bodyMd text NOT NULL, editedAt timestamptz NOT NULL DEFAULT now())`.
- `"CommentImage"(commentId int FK, mediaId uuid FK Media, position smallint, PRIMARY KEY (commentId, mediaId))`.
- `"ReviewVote"(reviewId int FK ModReview, userId int FK, value smallint NOT NULL CHECK (value IN (-1,1)), createdAt, PRIMARY KEY (reviewId, userId))`.
- `"ReviewEdit"(id bigint identity PK, reviewId int FK, rating smallint, title text, bodyMd text, editedAt timestamptz NOT NULL DEFAULT now())`.

**Notificaciones**

- `"Notification"(id bigint identity PK, userId int NOT NULL FK, type text NOT NULL, actorId int NULL, targetType text, targetId int, groupKey text, data jsonb NOT NULL DEFAULT '{}', readAt timestamptz, emailedAt timestamptz, createdAt)`. Índices `(userId, createdAt DESC)` y `(userId) WHERE readAt IS NULL`.
- `"NotificationPreference"(userId int FK, type text, inApp boolean NOT NULL, email text NOT NULL CHECK (email IN ('instant','daily','weekly','off')), PRIMARY KEY (userId, type))`. Si no hay fila, se aplican los valores por defecto del §7.3.
- `"EmailOutbox"(id bigint identity PK, userId int NULL, toEmail text NOT NULL, template text NOT NULL, locale text NOT NULL, payload jsonb NOT NULL, dedupeKey text UNIQUE, status text NOT NULL DEFAULT 'queued', sendAfter timestamptz NOT NULL DEFAULT now(), attempts int NOT NULL DEFAULT 0, providerId text, error text, sentAt timestamptz, createdAt)`.

**Moderación y operación**

- `"Report"(id bigint identity PK, reporterId int NOT NULL FK, targetType text NOT NULL CHECK (targetType IN ('mod','version','comment','review','user','kit','compat_report')), targetId int NOT NULL, reason text NOT NULL, details text, status text NOT NULL DEFAULT 'open' CHECK (status IN ('open','resolved','dismissed')), assignedToId int, resolution text, resolvedById int, resolvedAt timestamptz, createdAt)`. Índice `(status, createdAt)` y UNIQUE `(reporterId, targetType, targetId) WHERE status='open'`.
- `"AuditLog"(id bigint identity PK, actorId int NULL, action text NOT NULL, targetType text, targetId int, before jsonb, after jsonb, reason text, ipHash text, createdAt)`. **Solo inserción**: `REVOKE UPDATE, DELETE` al rol de la app.
- `"UserSanction"(id int identity PK, userId int NOT NULL FK, kind text NOT NULL CHECK (kind IN ('suspend','ban','comment_mute','upload_mute')), scopeModId int NULL, reason text NOT NULL, startsAt timestamptz NOT NULL DEFAULT now(), endsAt timestamptz NULL, createdById int NOT NULL, revokedAt timestamptz)`.
- `"Announcement"(id int identity PK, level text NOT NULL CHECK (level IN ('info','warning','patch')), messageI18n jsonb NOT NULL, href text, startsAt timestamptz NOT NULL, endsAt timestamptz, dismissible boolean NOT NULL DEFAULT true, createdById int)`.
- `"SiteSetting"(key text PK, value jsonb NOT NULL, updatedById int, updatedAt timestamptz NOT NULL DEFAULT now())`: `ads`, `discordWebhooks`, `moderationTemplates`, `limits`, `kelvinseek` y `featureFlags`.
- `"KelvinUsageDaily"(day date PK, requests int, fallbacks int, tokensIn bigint, tokensOut bigint, costMicroUsd bigint)`.
- `"DataExport"(id uuid PK, userId int FK, status text, key text, expiresAt timestamptz, createdAt)` · `"AccountDeletion"(userId int PK FK, requestedAt timestamptz NOT NULL, executeAfter timestamptz NOT NULL, mode text NOT NULL CHECK (mode IN ('archive_mods','keep_mods_anonymous')), cancelledAt timestamptz, executedAt timestamptz)`.
- `"DataFixAudit"(id bigint identity PK, fixId text NOT NULL, tableName text NOT NULL, rowId text NOT NULL, columnName text NOT NULL, oldValue jsonb, newValue jsonb, appliedAt timestamptz NOT NULL DEFAULT now(), revertedAt timestamptz)` · `"MigrationRun"(id int identity PK, name text, startedAt timestamptz, finishedAt timestamptz, rowsAffected bigint, checksumBefore text, checksumAfter text, notes jsonb)` · `"ModFavoriteArchive"` (misma forma que `ModFavorite` + `archivedAt`, `reason`).

**Gamificación**

- `"Badge"(id int identity PK, key text NOT NULL UNIQUE, "group" text NOT NULL, tier smallint NOT NULL DEFAULT 1, icon text NOT NULL, criteria jsonb NOT NULL, isSecret boolean NOT NULL DEFAULT false, isRepeatable boolean NOT NULL DEFAULT false, sortOrder int NOT NULL DEFAULT 0, retiredAt timestamptz)`. El catálogo se siembra desde código (§7.2); la i18n va en los mensajes.
- `"UserBadge"(id bigint identity PK, userId int NOT NULL FK, badgeId int NOT NULL FK, contextKey text NOT NULL DEFAULT '', awardedAt timestamptz NOT NULL DEFAULT now(), isFeatured boolean NOT NULL DEFAULT false, notifiedAt timestamptz, UNIQUE (userId, badgeId, contextKey))`.
- `"XpEvent"(id bigint identity PK, userId int NOT NULL FK, kind text NOT NULL, points int NOT NULL, refType text NOT NULL, refId text NOT NULL, createdAt, revokedAt timestamptz, UNIQUE (userId, kind, refType, refId))`.
- `"ModMilestone"(modId int FK, threshold int, reachedAt timestamptz NOT NULL, notifiedAt timestamptz, PRIMARY KEY (modId, threshold))`.
- `"Award"(id int identity PK, kind text NOT NULL CHECK (kind IN ('mod_of_week','staff_pick','build_of_month','mod_of_month')), modId int NOT NULL FK, periodStart date NOT NULL, periodEnd date NOT NULL, reason text, createdById int NULL, createdAt, UNIQUE (kind, periodStart))`.

### 6.5 Índices (ficheros `CONCURRENTLY`, uno por fichero)

| Índice | Motivo / dependencia |
|---|---|
| `"Token"("token")` (no único) | Acelera la legacy durante la coexistencia (hoy es un seq scan en cada request) |
| `"ModDownload"("modVersionId","createdAt")` · BRIN `"ModDownload"("createdAt")` · `"ModDownload"("userId","createdAt" DESC) WHERE "userId" IS NOT NULL` | Series, rollups y «Mis descargas» |
| `"Comment"("modId","createdAt" DESC) WHERE "replyId" IS NULL` · `"Comment"("replyId","createdAt")` · `"Comment"("userId")` | Hilos y perfil |
| `"ModFavorite"("modId")` · UNIQUE `"ModFavorite"("userId","modId")` **tras B5** | Mochila y dedupe |
| UNIQUE `"ModVersion"("modId","version")` **tras Q-P6 = 0** · UNIQUE `"ModVersion"("modId") WHERE "isLatest"` · `"ModVersion"("modId","createdAt" DESC)` | Integridad de versiones |
| `"Mod"("status","type","lastReleasedAt" DESC)` · GIN `"Mod"("searchVector")` · GIN trigram `"Mod"(lower(sotf_unaccent(name)) gin_trgm_ops)` · `"Mod"("categoryId")` ya existe | Listados y búsqueda |
| UNIQUE `"User"("emailNormalized") WHERE "emailNormalized" IS NOT NULL` **tras Q-P2 = 0 colisiones** · `"User"(lower(name))` · `"User"(lower(slug))` | Login y menciones |
| `"KelvinGPTMessages"("chatId","createdAt")` | KelvinSeek |

Los índices sobrantes (`ModDownload_ip_idx`, booleanos, `Category_slug_idx` duplicado) se quitan **solo en la fase contract**.

### 6.6 Funciones y triggers (`0020_functions_triggers.sql`)

Los triggers **nunca hacen `RAISE`**; solo rellenan.

- `sotf_unaccent(text) RETURNS text IMMUTABLE PARALLEL SAFE` es un envoltorio de `public.unaccent('public.unaccent', $1)`.
- `trg_user_email_normalized` (BEFORE INSERT OR UPDATE OF email): `NEW."emailNormalized" := lower(trim(NEW.email))`.
- `trg_mod_status_sync` (BEFORE INSERT OR UPDATE ON "Mod"):
  - Si el INSERT viene de la legacy (sin `status` explícito): `status := CASE WHEN "isApproved" THEN 'published' ELSE 'pending' END`.
  - Si cambia `isApproved` y no `status` (legacy approve/unapprove): `status := published/pending`.
  - Si cambia `status` (v2): `"isApproved" := status = 'published'`.
  - Se fija `statusChangedAt`.
- `trg_comment_status_sync`: `isHidden ↔ status IN ('hidden','deleted','pending')`.
- `trg_review_status_sync`: `isHidden ↔ status <> 'visible'`.
- `trg_modversion_semver` (BEFORE INSERT OR UPDATE OF version): rellena `semverMajor`, `semverMinor`, `semverPatch` y `semverPre` con la regex `^v?(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?`. Las builds (UUIDv7) quedan en NULL.
- `ops/sql/kill-switch.sql` hace `DROP TRIGGER` de todos los anteriores sin tocar datos.

### 6.7 Roles de Postgres (`ops/sql/roles.sql`, lo ejecuta el usuario como *owner*)

- `sotf_v2_app` (LOGIN): `SELECT, INSERT, UPDATE, DELETE` en todas las tablas de `public` y `pgboss`, `USAGE` en las secuencias, `REVOKE UPDATE, DELETE ON "AuditLog"`, `statement_timeout 5s` y `idle_in_transaction_session_timeout 30s`. Lo usan la API y el worker.
- `sotf_legacy_app` (LOGIN): DML solo sobre las 16 tablas legacy. Lo usa el API legacy desde B2 del corte **y** en caso de marcha atrás. Sin DDL, así que `db push` es imposible.
- *Owner* (credencial actual de Coolify): solo para el job de migraciones. Se rota tras el corte.
- `sotf_readonly` (opcional): perfilado y soporte.

### 6.8 Semántica legacy ↔ v2

| Concepto | Regla |
|---|---|
| Aprobación | `Mod.status` manda en v2; el trigger mantiene `isApproved`. Estados públicos en v2: `published` (en listados), `unlisted` y `archived` (por URL, fuera de listados) y `pending` (por URL solo si `latestVersion.checksStatus='passed'`, con `noindex` y banner) |
| Tipo | `Mod.type ∈ {Mod, Library, Build}` (sin nulos tras B4). El `kind` del contrato v2 es `mod`, `library` o `build` |
| Favoritos → Backpack | `ModFavorite` es la tabla de «seguir mod» (con `notify`). `Mod.favoritesCount` se mantiene en la misma transacción (±1) y el cron legacy o `legacy.counters` lo reconcilian |
| Reseñas | `ModReview` es la tabla de reseñas. La v2 mantiene `Mod.averageRating` (media real, double) y `Mod.reviewsCount` (visibles) → UpdatesChecker recibe números reales |
| Contadores | `Mod.downloads` se incrementa en el *flush* del buffer. `lastWeekDownloads`, `commentsCount` y `favoritesCount` los recalcula `legacy.counters` (cada 30 min tras el corte, **sin tocar `updatedAt`**). La UI v2 lee `ModStats` |
| `updatedAt` legacy | No se usa como señal. La fecha de «Actualizado» sale de `lastReleasedAt` o de `editedAt` |
| Texto | La v2 guarda el Markdown fuente en `*Md` y el HTML saneado en `*Html`. En la columna legacy escribe texto con escape HTML (`&`, `<`, `>`, `"`, `'`) |
| Trusted | `isTrusted` es de la legacy: la v2 lo **lee** (backfill) y solo lo pone a `true` al nombrar a alguien moderador o admin. Nunca lo baja antes de la fase contract |
| Descargas legacy (`ip='undefined'`) | Se clasifican en el canal `client` en los agregados; los `'null'` y `''`, en `unknown`; el resto, en `web` |
| KelvinSeek | La v2 escribe `chatId = HMAC(chat_id)` con `isHashed=true`. Las filas legacy sin hashear se conservan hasta decidir en la fase contract |

### 6.9 Backfills (idempotentes, por lotes de 1–5 k, reanudables, registrados en `MigrationRun`)

| # | Backfill | Lógica | ¿Toca columnas legacy? | WP |
|---|---|---|---|---|
| B1 | Agregados de descargas | `INSERT … SELECT "modVersionId", "createdAt"::date, canal(ip), count(*), 0 FROM "ModDownload" WHERE "modVersionId" IS NOT NULL AND id <= :watermark GROUP BY 1,2,3 ON CONFLICT DO UPDATE`. Las versiones sin mod y las filas con versión nula van a `SiteDownloadDaily`. `uniqueDownloads` legacy = 0 («únicas desde v2») | No | WP-14 |
| B2 | `storageKey` | `substring(url from '^https://r2\.sotf-mods\.com/(.*)$')` URL-decodificado para `ModVersion.downloadUrl`, `ModImage.url`, `Mod.imageUrl` y `User.imageUrl` (crea filas `Media` con `purpose='legacy'`). Si no casa (1 fila `files.sotf-mods.com`) → `ModVersion.status='file_missing'` | No (status es columna nueva) | WP-14 |
| B3 | `canonicalSlug` + historial | slugify estricto `[a-z0-9-]` (translitera y colapsa); colisión en el mismo usuario → `-2`. Una fila `ModSlugHistory(reason='legacy')` por cada slug actual y `canonicalized` si difiere. `UserSlugHistory` con el slug actual. **`Mod.slug` no cambia** hasta la fase contract | No | WP-14 |
| B4 | `type NULL` | 19 filas → `'Mod'` (o `'Library'` si el manifest lo dice, en la pasada R2 de WP-84) | **Sí** (auditado) | WP-14 |
| B5 | Deduplicar favoritos | Duplicados `(userId, modId)` → se conserva el más antiguo y el resto va a `ModFavoriteArchive` y se borra. Se borran también las filas con `userId` o `modId` NULL (archivadas). Después, índice único | **Sí** (movidas, no perdidas) | WP-14 |
| B6 | `emailNormalized` | `UPDATE … SET "emailNormalized"=lower(trim(email))`. Las colisiones van a `tooling/migration/out/email-collisions.csv` y el índice único **no** se crea hasta que haya 0 (resolución manual con el usuario) | No | WP-14 |
| B7 | Roles | `legacyTrusted := isTrusted`; `verifiedCreator := isTrusted`; `role='user'`. El admin se asigna con `pnpm admin:grant --email <email> --role admin` | No | WP-14 |
| B8 | `shortDescription` desde el manifest | Solo los 3 casos en que `sanitize(manifest.description) == shortDescription` | **Sí** (auditado) | WP-84 |
| B9 | Markdown y HTML | `descriptionMd` = copia literal de `description` (sin tocar), `changelogMd` y `bodyMd` = texto con las entidades decodificadas (`&amp;`, `&lt;`, `&gt;`, `&nbsp;`, `&#39;`, `&quot;`). `*Html` = render con `@sotf/markdown` (con la allowlist legacy para las 24 descripciones con HTML crudo) | No | WP-14 |
| B10 | `ModDependency` | CSV `Mod.dependencies` → filas en la `isLatest` (12 referencias, todas resuelven) | No | WP-14 |
| B11 | Estadísticas | `ModStats`, `ModVersion.downloadsCount` (= suma de B1), `SiteStat` (con `orphanDownloads`), `UserStats` | No | WP-14 |
| B12 | Estados | `Mod.status` desde `isApproved` + el mapeo de los 28 no aprobados (§6.13, paso A6). `publishedAt = createdAt` en los aprobados. `Comment.status` desde `isHidden`. `ModVersion.checksStatus='passed'` para lo legacy aprobado; en los `pending`, `'pending'` hasta la pasada de inspección | Sí para los 28 no aprobados (`isApproved` no cambia, solo se sincroniza `status`) | WP-14 |
| B13 | Compatibilidad declarada legacy | `modSide` → `platform` (`client`→`Client`, `server`→`Server`, `both`→`Universal`). `isMultiplayerCompatible`/`requiresAllPlayers` → `multiplayerRole` (`all_players` si requiere a todos; `host_only` si es compatible y no requiere a todos; si no, `unknown`) | No | WP-14 |
| B14 | Verificación de email heredada | `emailVerifiedAt := createdAt` para usuarios con ≥ 1 mod o ≥ 1 comentario (≈ 192). El resto verifica en su primera acción de escritura | No | WP-14 |
| B15 | Pasada R2 (streaming y lectura por Range) | Para cada versión: HEAD (`fileSize`, `contentType`), SHA-256 en streaming, `manifest` (lectura por Range del directorio central), `VersionInspection`, `gameVersionDeclared`, `loaderVersionDeclared`, `platformDeclared` y `logColor` → `Mod`. `buildMeta` + miniatura en las 36 builds. Variantes de `Media` (AVIF/WebP) de todas las imágenes y OG de todas las entidades. **Los originales no se tocan** | No | WP-84 |
| B16 | Gamificación retroactiva | Insignias legacy, tiers, `ModMilestone.reachedAt` (desde las series diarias) y premios iniciales (sin notificaciones masivas: un único «Bienvenido a v2: has ganado X») | No | WP-60 |
| B17 | Metadatos R2 (con aprobación) | `CopyObject` in situ con `MetadataDirective: REPLACE` en los 612 zips y JSON: `Content-Disposition: attachment; filename="<Nombre> <versión>.<ext>"; filename*=UTF-8''…` y `Content-Type` corregido (`application/zip`, `application/json`; imágenes por *sniffing*). Manifiesto previo y posterior (ETag y metadatos) en `tooling/migration/out/r2-metadata-*.json` | No (R2) | WP-84 |
| B18 | `PendingMention` pendientes | En el corte, el worker envía y vacía las pendientes (como el cron legacy) y las registra como `Notification` | Borra filas de una cola efímera (como hacía la legacy) | WP-43 |

### 6.10 Contraseñas y sesiones

- **Verificación**:
  - `$argon2*` → `@node-rs/argon2.verify`.
  - `$2a$`, `$2b$`, `$2y$` → `@node-rs/bcrypt.verify`. Si la contraseña supera 72 bytes, se compara también el pre-hash SHA-512 que usa Bun (compatibilidad).
  - Cualquier otro formato → fallo, se registra y se sugiere restablecer la contraseña.
  - Si la verificación sin normalizar falla, se reintenta **una vez** con NFC.
- **Rehash transparente** tras un login correcto si el algoritmo no es argon2id o los parámetros son inferiores a `m=65536, t=2, p=1` (en la práctica, solo bcrypt). Se escriben `User.password` y `passwordUpdatedAt`, que Bun sigue sabiendo verificar si hay marcha atrás.
- **Hashes nuevos**: argon2id `m=65536, t=2, p=1`. Semáforo global de 2 hashes simultáneos (`ARGON2_CONCURRENCY`) y cola con timeout de 5 s → 503.
- **Login en tiempo constante**: si el usuario no existe, se verifica un hash señuelo.
- **Sesiones**:
  - `Session` + cookie `__Host-sotf_sid`.
  - «Recordarme» apagado → cookie de sesión del navegador y expiración a las 24 h.
  - Revocar desde ajustes.
  - Al cambiar o restablecer la contraseña se revocan todas las demás.
  - `pwdFingerprint` protege frente a cambios de contraseña hechos por la legacy.
- **Legacy**: **no se migran tokens**. En la primera carga de v2, un script inline de ≤ 170 B (medido: ≈ 165 B con su `try/catch`; el presupuesto original de 150 B obligaba a quitarlo) borra `localStorage.token` y la cookie `token` (`Max-Age=0; Path=/`) y muestra el banner «Hemos renovado SOTF Mods: inicia sesión de nuevo, tu contraseña es la misma». La tabla `Token` no se toca.
- **Reset**: `AuthToken(kind='password_reset')`, hasheado, de 1 h y de un solo uso. Durante 24 h tras el corte, `/reset-password?token=` acepta también `PasswordResetToken` legacy no caducados y los borra al usarse (como hacía la legacy).

### 6.11 Verificación

- **Perfilado inicial** sobre el dump: Q-P0…Q-P10 de research/02 §14.1 (`tooling/migration/sql/profile.sql`). Resultados esperados: TZ=UTC; `pg_trgm` y `unaccent` disponibles; formatos de hash; 0 colisiones de email o su lista; duplicados de favoritos; huérfanas ≈ 434; 0 versiones duplicadas y 0 mods con 2 `isLatest`; drift.
- **Instantánea antes y después** (`verify-snapshot.sql` → JSON): `count(*)` por tabla legacy; sumas de `downloads`, `favoritesCount`, `commentsCount` y `lastWeekDownloads`; md5 por tabla **solo de las columnas legacy** (lista congelada en el baseline); `ModDownload` por bloques de 100 k ids. El diff automático solo acepta las diferencias esperadas: B4 (19 filas), B5 (N según Q-P3), B8 (3) y B12.
- **Invariantes** (`pnpm db:invariants`; deben dar verde antes del corte y cada noche durante 30 días):
  1. `sum(ModVersionDownloadDaily.downloads) + sum(SiteDownloadDaily.downloads) = count("ModDownload")`, en total y por versión.
  2. Para cada mod, `Mod.downloads` = suma de sus agregados (tolerancia 0 después de `legacy.counters`).
  3. `count(ModFavorite) + count(ModFavoriteArchive where reason='dedupe')` = recuento previo.
  4. Todo `Mod` tiene `canonicalSlug` único por usuario, y cada `(userSlug, slug)` histórico y cada uno de los 24 enlaces internos de las descripciones resuelve.
  5. Toda `ModVersion` tiene `storageKey` o `status='file_missing'` (esperado: exactamente 1).
  6. 0 usuarios con un hash no verificable (ni `$argon2` ni `$2`).
  7. El total de descargas del sitio es ≥ 1.977.059.
  8. Toda `ModVersion` `isLatest` coincide con `Mod.latestVersion`.
  9. `Mod.isApproved = (status='published')` en todas las filas.
  10. 0 referencias a `files.sotf-mods.com` salvo la versión `file_missing`.

### 6.12 Datos para desarrollo

- **Por defecto (sin acceso a producción), `pnpm db:seed:dev`**:
  1. Levanta el Postgres local (`sotfv2`, puerto 47432).
  2. Aplica `0000` + todas las migraciones.
  3. Carga el **snapshot público** (`tooling/migration/snapshot/public-api-2026-09-29/`, copiado de `/root/sotf-mods/.research-cache/…`; 2,8 MB y datos públicos) con los ids reales: categorías, 59 autores, 149 comentaristas (ids ≥ 100000), mods, imágenes, versiones y comentarios.
  4. Genera sintéticos deterministas (semilla fija):
     - usuarios hasta 3.883 (`@example.test`, argon2id de `sotf-dev-2026!`);
     - 234 favoritos;
     - **1.977.059** filas `ModDownload` por `COPY`, repartidas por versión según `_count.downloads` y en el tiempo entre el `createdAt` de una versión y el de la siguiente (30 % `ip='undefined'` y algunas `'null'`);
     - tokens caducados;
     - **casos raros inyectados**: 2 emails que solo difieren en mayúsculas, 3 favoritos duplicados, 434 huérfanas, la versión en `files.sotf-mods.com`, `type NULL`, slugs raros, un hash `$2b$10$` y comentarios con `&lt;`.
  5. Ejecuta los backfills B1–B14.
  6. Sale como `dev-seed.dump` (en `.gitignore`).
  7. `pnpm db:seed:dev --small` carga 10 k descargas para los tests rápidos.
- **Cuando el usuario entregue un backup**: `pnpm db:restore:prod-copy <fichero>` (base `sotf_prod_copy`, **solo para ensayos**) y `pnpm db:anonymize` → `dev.dump` (emails `user<id>@example.invalid`, contraseña conocida, `TRUNCATE` de Token, PasswordResetToken y PendingMention, IPs hasheadas conservando los literales, `Comment.ip='redacted'`, KelvinGPTMessages vacía). Los datos reales **nunca** entran en git ni en CI. Se guardan cifrados con `age` en `~/sotf-mods-private/` y se borran al terminar.
- **Tests**: Testcontainers con `postgres:16-alpine` + migraciones + *factories* (`@sotf/db/testing`) y *fixtures* pequeños. Los tests de contrato legacy usan el seed completo desde el snapshot (§10.1, fila «Contrato legacy»).

### 6.13 Runbook de corte (sin caída)

Responsable: **U** = usuario, **A** = agente (prepara, ejecuta en local o verifica con GET). Los scripts y el SQL están en `ops/runbooks/cutover/` (WP-A0).

**Fase A: preparación (T−21 → T−8)**

- A1 (U) **Backups**:
  - Coolify → `sotf-mods-db` → Backups: diario, retención local de 7 y en S3 (bucket R2 **privado** `sotf-mods-backups`) de 30.
  - «Backup now» y descargar el `.dmp`.
  - Guardarlo cifrado y entregar la ruta local a A.
  - **Hoy no hay ningún backup: esto se hace ya, haya v2 o no.**
- A2 (U) Tras obtener el dump:
  - desactivar `is_public` (puerto 5433) de la BD en Coolify;
  - **rotar el token de la API de Coolify** (se compartió en un chat).
- A3 (A) Ensayo en seco con el dump real (§6.11 + WP-A0). Se repite hasta obtener **dos ejecuciones verdes seguidas**. Se miden el tiempo de migración (objetivo < 60 s de locks acumulados) y el tiempo de backfills.
- A4 (U) GitHub privado `sotf-mods-v2` + GHCR + secretos de Actions, y proyecto Coolify `sotf-mods-v2` con los entornos `staging` y `production` (runbook `ops/coolify/`).
- A5 (U) Cloudflare:
  - token API «Zone → Cache Purge» solo para `sotf-mods.com` + Zone ID;
  - confirmar el plan (Free o Pro);
  - claves Turnstile (site y secret; staging usa las de prueba);
  - clave de VirusTotal (gratuita);
  - buckets R2 `sotf-mods-private`, `sotf-mods-backups` y `sotf-mods-staging` + token R2 con permiso solo sobre `sotf-mods`, `sotf-mods-private` y `sotf-mods-staging`;
  - CORS del bucket privado (origins `https://sotf-mods.com`, `https://beta.sotf-mods.com`, `https://next.sotf-mods.com`; método PUT; cabeceras `content-type` y `content-length`; expone `ETag`) y *lifecycle* de `incoming/` a 1 día.
- A6 (U + A) **Decisiones de datos**:
  - mapeo de los 28 no aprobados. Por defecto: los «Don't use», «Blank», «old» y «OldVCEPage» → `archived`; el resto → `pending`, al principio de la cola;
  - lista de moderadores (por defecto: solo el admin);
  - email de la cuenta admin;
  - resolución de las colisiones de email, si las hay.
- A7 (A + U) **Staging** `beta.sotf-mods.com` (+ `/api`): BD propia restaurada del backup, emails solo a una allowlist, `noindex`, banner «Beta: los cambios pueden perderse». **Beta pública ≥ 14 días**, anunciada en Discord. El usuario prueba RedManager contra beta con un build de desarrollo de RedManager cuyo `ENDPOINT` apunte a `https://beta.sotf-mods.com/api/` (el flujo equivalente ya lo automatizan WP-24 y WP-A1), y la QA de WP-A1 pasa en verde.

**Fase B: *expand* en producción (T−7)**

- B1 (U) «Backup now» + prueba de restauración en staging (script).
- B2 (U) Ejecutar `ops/sql/roles.sql`. Cambiar el `DATABASE_URL` del **API legacy** a `sotf_legacy_app` y redesplegar (unos segundos de reinicio de la API legacy; hacerlo en horas valle).
- B3 (U, guiado por A) Job de migraciones en Coolify (imagen `sotf-api`, comando `node dist/migrate.js`, credenciales de *owner*): `db:guard` → `db:baseline --mark-applied` → `db:migrate` (aditivo) → `db:guard`.
- B4 (U) Vigilar la legacy 48 h: login, listado, detalle, descarga, comentario, favorito, approve y crons (el checklist está en el runbook).
- B5 (U) Job de backfills B1–B14 (`node dist/backfill.js --all`) + `db:invariants` + `verify-snapshot` (diff solo con los fixes esperados).
- B6 (U) Pasada R2 B15 (worker en modo `backfill`) y **B17** (reescritura de metadatos: `--dry-run`, revisión y después `--apply`).

**Fase C: preflight (T−2)**

- C1 (U) Desplegar las apps v2 de producción (web, api y worker) con los dominios `https://next.sotf-mods.com` y `https://next.sotf-mods.com/api`, protegidos con Basic Auth de Coolify (o Cloudflare Access), contra la BD de producción con `sotf_v2_app` y `LEGACY_COEXIST=true`.
- C2 (A) Contra `next.` (GET con credenciales que da el usuario): suite de contrato legacy, *smoke* de todas las plantillas y comparador sombra (`tooling/shadow`) contra `api.sotf-mods.com` para los T1 y T2. 0 diferencias salvo las desviaciones intencionales (§5.5).
- C3 (U) Cloudflare (runbook `ops/cloudflare/`): crear las Cache Rules, Configuration Rules, Redirect Rule, la regla WAF y los ajustes (§11.5). Las reglas HTML son inocuas para la legacy, que no emite cabeceras de caché. **No** se activa aún la regla de 1 año de `r2.`, salvo que B17 ya esté hecho.

**Fase D: corte (T0, sin caída, en horas valle UTC)**

- D1 (U) Anuncio en Discord. «Backup now». Anotar las marcas de agua: `SELECT max(id)` de `ModDownload`, `Comment`, `ModFavorite`, `User` y `Mod`.
- D2 (U) Coolify, apps v2 de producción: dominios `https://sotf-mods.com,https://sotf-mods.com/api` (web y api respectivamente) y `https://api.sotf-mods.com` (api). Desplegar (*rolling*). En cuanto estén *healthy*, **parar** `sotf-mods-frontend` y `sotf-mods-api` legacy (sin borrarlas). El solapamiento es de 1–2 min y ambas sirven respuestas válidas.
- D3 (U) Worker: `LEGACY_COEXIST=false` y redespliegue. Arrancan `legacy.counters` y el vaciado de `PendingMention` (B18).
- D4 (U) Delta de backfills: `node dist/backfill.js --delta --since-watermarks` (B1, B11, B12 y B14 para las filas nuevas).
- D5 (U) Cloudflare: purgar todo y activar la regla de caché de 1 año en `r2.sotf-mods.com`.
- D6 (A) `ops/runbooks/cutover/smoke-prod.sh`: solo GET y HEAD; las descargas con HEAD, que no cuentan. (U) Prueba manual con RedManager (listar, buscar, detalle e instalar un mod con dependencias) y login con la cuenta propia.
- D7 (U) Quitar el dominio `next.`. Anuncio «v2 está aquí».

**Fase E: hypercare (T0 → T+30)**

- Backups **cada hora** la primera semana y después diarios.
- Revisión diaria de:
  - errores (Sentry);
  - log de 404 y 410 (se añaden a `Redirect` cuando procede);
  - UA y Origin de las rutas legacy;
  - RUM CWV;
  - cola de pg-boss;
  - `db:invariants` (job nocturno).
- T+1 (U): **rotar secretos** (§9.4).
- T+7 (U): borrar el DNS de `files.sotf-mods.com` si Cloudflare Analytics confirma 0 tráfico.
- T+30: decidir el cierre de la ventana de marcha atrás (se conservan las imágenes legacy) y los alias snake_case.

**Fase F: *contract* (≥ T+60, con aprobación explícita y un backup archivado antes)**

- Quitar los índices sobrantes.
- `Mod.slug := canonicalSlug` para los 15 slugs raros (el historial ya redirige).
- Pseudonimizar `ModDownload.ip` antiguas y las filas legacy de `KelvinGPTMessages`.
- Dejar de escribir filas `ModDownload` si se retira la legacy para siempre (el conteo pasa a eventos + agregados).
- Borrar `Token`, `PasswordResetToken` y `LoginAttempt`.

### 6.14 Runbook de marcha atrás

| Nivel | Cuándo | Pasos | Consecuencias |
|---|---|---|---|
| R1: volver al legacy (≤ T+30) | Fallo grave de la v2 | (U) Coolify: devolver los dominios a `sotf-mods-frontend` y `sotf-mods-api`, arrancarlas (legacy con `sotf_legacy_app`), parar web y api v2 y poner el worker v2 en `LEGACY_COEXIST=true` (o pararlo). Purgar Cloudflare | Sin pérdida de datos: los esquemas son aditivos y la v2 escribió en formato legacy. Las funciones solo-v2 (reseñas visibles, kits, notificaciones, reportes) quedan invisibles pero se conservan. Todos inician sesión de nuevo en la legacy con la misma contraseña. Las descargas contadas por la v2 ya están en `ModDownload`. Riesgo aceptado: los mods `removed` o `rejected` aparecen en la lista «unapproved» de la legacy |
| R2: backfill erróneo | Un diff inesperado | `pnpm db:revert-fix <fixId>` (desde `DataFixAudit`) | Revertido fila a fila |
| R3: un trigger molesta | Errores o lentitud en escrituras | `ops/sql/kill-switch.sql` | Los datos intactos; se recalcula después |
| R4: desastre | Corrupción | Restaurar el dump previo al corte **en una base nueva**, cambiar `DATABASE_URL` y reinyectar los deltas con `tooling/migration/replay-delta.ts --since-watermarks` (tablas append-only primero) | Pérdida máxima = el intervalo del último backup (1 h en la semana del corte) |

### 6.15 Qué necesitamos del usuario (resumen)

1. **Backup de la BD ya** + backups programados a un bucket R2 privado + el dump para los ensayos (A1). Bloquea el ensayo real y el corte.
2. Cerrar el puerto público 5433 y **rotar** el token de Coolify y los secretos compartidos (§9.4).
3. Token de Cloudflare (Cache Purge), Zone ID y plan; claves Turnstile; clave de VirusTotal; buckets R2 nuevos + token R2 acotado.
4. Repositorio GitHub privado + GHCR + secretos; proyecto Coolify `sotf-mods-v2` (staging y producción).
5. Decisiones de datos (A6): los 28 no aprobados, los moderadores y el email del admin.
6. Aplicar las reglas de Cloudflare, ejecutar los jobs de migración y backfill y hacer el cambio de dominios (runbooks paso a paso).
7. AdSense: activar el CMP «Privacy & messaging» (EEE, Reino Unido y Suiza).
8. Resend: verificar que el dominio de envío sigue activo y fijar `EMAIL_FROM`.
9. Probar RedManager en beta y en producción (D6).

---

## 7. Features por tier

### 7.1 T0: lanzamiento (criterios de aceptación)

> **N** = núcleo (bloquea el lanzamiento) · **T** = titular (lo que hace que se sienta v2). Detalle de historias y contexto en research/05 §8. El «WP» indica dónde se implementa (§12). **Nunca se recortan** T0-01, 02, 03, 04, 10, 13, 14, 21, 26 y 27. Orden de recorte si falta tiempo (pasan a T1): T0-31 → T0-17 → la parte de staff picks de T0-18 → la profundidad de T0-20 (referrers, países) → las estadísticas de blueprint de T0-24 → las celebraciones de T0-23.

**T0-01 · Compatibilidad legacy (API + URLs)** [N] · WP-32, WP-31, WP-22, WP-A1

- La suite de contrato (38 fixtures) pasa contra el seed del snapshot: igualdad profunda **con orden de claves** tras normalizar los campos volátiles (`downloads`, `lastWeekDownloads`, `favoritesCount`, `commentsCount` y `updatedAt`) y las desviaciones intencionales del §5.5.
- El checker .NET deserializa `/api/mods` (páginas y `modIds`) con el DTO de UpdatesChecker sin excepciones.
- El test TS con los tipos de RedManager 1.1.10 recorre todas las páginas `?&approved=true&orderby=newest&page=N&nsfw=false`, abre el detalle e instala: sigue el 302 con un cliente **sin User-Agent** que no comprueba el status.
- Todas las URLs de la tabla del §4.6 dan el código indicado (test e2e parametrizado). Los 5 enlaces rotos de research/01 §4.4 resuelven.
- `/mods/:u/:s.json` → oEmbed válido. Las mutaciones legacy → 410 con el sobre.

**T0-02 · Descargas directas y conteo honesto** [N] · WP-31, WP-84

- 302 con la clave codificada por segmento: probado con espacio, apóstrofo, `+`, `()` y `/`. `no-store`. Nunca 301.
- HEAD no cuenta, `Range: bytes=100-` no cuenta, los bots no cuentan y el UA vacío sí cuenta. Una fila `ModDownload` y los agregados por evento; `uniqueDownloads` por versión + ipHash + día.
- La descarga con sesión guarda `userId` (Mis descargas y «descarga verificada»).
- `file_missing` → 410 con una página explicativa. La descarga de builds (`.json`) sale como adjunto gracias a los metadatos de B17.
- p95 < 60 ms en origen (medido en el test de carga).

**T0-03 · Estados del mod** [N] · WP-10, WP-33, WP-51, WP-80

- Estados y transiciones del §7.4. Solo `published` aparece en listados, búsqueda, sitemap, feeds y API v2.
- `pending` es accesible por URL solo con checks OK (`noindex` + banner «Sin revisar por el equipo»). `archived` muestra un banner (+ sucesor). `removed` → 410 y `rejected` → 404.
- Cada transición notifica al autor, queda en `AuditLog` y sincroniza `isApproved`.
- Los 28 legacy quedan mapeados (A6).

**T0-04 · Semver y metadatos del manifest** [N] · WP-10, WP-40, WP-84

- Las versiones se ordenan por (major, minor, patch, pre con reglas semver) y, en empate o builds, por `createdAt`. BuildShare muestra 1.0.10 > 1.0.2.
- Se guardan todos los campos del manifest de RedLoader (`id`, `name`, `author`, `version`, `description`, `gameVersion`, `loaderVersion`, `platform`, `dependencies`, `type`, `url`, `priority`, `logColor`).
- Canal release o beta. *Yank* con motivo (la URL sigue funcionando y muestra un aviso).
- Tamaño y SHA-256 visibles. 0 mods con `type` nulo.

**T0-05 · Landing** [T] · WP-53

- Estructura de research/03 §5.10 y §6.1:
  - hero «La isla viva» con readout en vivo y pins;
  - «Empieza aquí» en 3 pasos;
  - banda de Patch Radar;
  - tendencias de la semana;
  - regiones (categorías);
  - Field notes (actualizaciones recientes);
  - Kit destacado;
  - Mod of the Week;
  - franja de Blueprints;
  - creador destacado;
  - FAQ citable;
  - pie.
- El LCP es el titular de texto (< 1,2 s en 4G lab) y CLS 0. El buscador del hero abre Cmd+K.
- Con sesión, el bloque «Tus actualizaciones» + *checklist* Día 1 llega por isla, sin variar el HTML.
- 13 locales con hreflang. JSON-LD `WebSite`, `Organization` y `FAQPage`.
- Sin anuncios en el primer viewport.

**T0-06 · Explore facetado + taxonomía nueva** [T] · WP-54, WP-83

- Pestañas Mods · Libraries · Builds · All. Facetas del §5.2 (`GET /mods`) con **inclusión y exclusión** y conteos. Órdenes: trending (por defecto), downloads, updated, new, rating (bayes), follows y comments.
- Estado en la URL y paginación real (`?page=N`) + «Cargar más». Sin JS funciona como formulario GET; con JS navega sin recargar el shell (View Transitions + Speculation Rules).
- Taxonomía nueva, 12 categorías:
  1. `quality-of-life`
  2. `gameplay`
  3. `building`
  4. `companions`
  5. `weapons-gear`
  6. `vehicles-movement`
  7. `model-swap`
  8. `ui-hud`
  9. `menus-sandbox`
  10. `multiplayer-servers`
  11. `library`
  12. `misc` («Other»)
- `qol` → `quality-of-life` va en `legacySlugs`. Se añaden ≈ 40 tags curados (seed en WP-10).
- Herramienta de recategorización masiva con sugerencias en WP-83. Hasta confirmarla, cada mod conserva su categoría legacy (siempre válida).
- **Ningún mod publicado queda fuera** del listado por defecto: SonsAxLib aparece en Libraries y en All.
- NSFW oculto salvo opt-in. Estados vacíos con microcopy.

**T0-07 · Cmd+K** [T] · WP-72, WP-33

- Se abre con `⌘K`, `Ctrl+K`, `/` o el buscador del header. En móvil, a pantalla completa desde la tab «Buscar».
- Grupos: Recientes, Mods, Builds, Kits, Creadores, Páginas y Acciones (tema, idioma, subir mod, Basecamp, Signals).
- Índice por locale (≈ 15 KB br) cargado de forma diferida. MiniSearch con prefijo, errores de 1–2 letras («stak mod» → StackMod) y el `manifestId` exacto primero.
- Vista previa con descarga directa en ≥ lg.
- `role="dialog"` + `aria-activedescendant` y 100 % navegable por teclado.
- «Ver todos» lleva a `/search`. Las búsquedas sin resultados se registran de forma agregada.

**T0-08 · Página de mod v2** [T] · WP-62

- Estructura de research/03 §6.3:
  - cabecera con h1, descripción corta, autor + TrustedMark, chips de hechos y acento `logColor`;
  - galería con lightbox (teclado, swipe y vídeo como *facade*);
  - DownloadSplitButton («Descargar v2.4.1 · 1,2 MB» + otras versiones);
  - InstallButton → modal «Cómo instalar este mod» (pasos según tipo y plataforma, dependencias, «requiere RedLoader, no BepInEx» y enlace a `/install`);
  - Follow ♥, «+ Kit», compartir (copiar, Markdown para Discord, X, Reddit y QR en móvil) y reportar;
  - CompatCapsule («At a glance» `<dl>` citable);
  - descripción saneada;
  - «Qué ha cambiado desde tu última descarga» (isla con sesión);
  - Field notes recientes;
  - Required by y In Kits;
  - relacionados;
  - reseñas (resumen + 3) y comentarios (los 10 primeros SSR + isla).
- En móvil: barra de descarga fija con `safe-area` y cápsula colapsada en 1 línea.
- JSON-LD del §4.5. 404 y 410 reales. Banners de estado (pending, archived con sucesor, NSFW, roto en la build actual, posiblemente desactualizado).
- Licencia elegible (`all-rights-reserved`, `reupload-with-credit`, `mit`, `gpl-3.0`, `cc-by-4.0`, `other`) y enlaces de apoyo.

**T0-09 · Dependencias resueltas** [T] · WP-33, WP-40, WP-62

- Se resuelven contra `manifestId`. Las desconocidas aparecen como «No disponible en el sitio» y el creador ve un aviso al publicar.
- «Required by N» en las librerías. Al descargar un mod con dependencias aparece una hoja «También necesitas X, Y» con «Descargar todo» (enlaces secuenciales y cada uno cuenta) o «Ya lo tengo».
- Se detectan ciclos y dependencias archivadas o retiradas. Tipos `required`, `optional` y `conflicts` (conflicts con borde Blood).

**T0-10 · Compatibilidad y Patch Radar** ⭐ [T] · WP-50, WP-70, WP-73, WP-83 → especificación en el §7.10.

**T0-11 · Reseñas** [T] · WP-41, WP-70 → §7.7.

**T0-12 · Comentarios v2** [T] · WP-41, WP-70 → §7.6.

**T0-13 · Cuentas seguras y compatibles** [N] · WP-30, WP-44, WP-81

- Login por email **o** handle con los hashes existentes (§6.10). Error genérico y tiempo constante. Límites + Turnstile tras 3 fallos.
- Cookie HttpOnly, sin tokens en JS. Página de sesiones (dispositivo, navegador, país, última actividad; revocar una o todas).
- Verificación de email para las cuentas nuevas antes de escribir; las heredadas según B14.
- Cambio de email (se confirma el nuevo y se avisa al antiguo) y de contraseña.
- Política: ≥ 10 caracteres + lista de contraseñas filtradas por k-anonimato con HIBP (sin símbolos obligatorios). Las contraseñas antiguas siguen valiendo.
- `displayName` Unicode (2–32) separado del `handle` (ASCII `[a-z0-9-]`, 3–24, **inmutable en T0**, con lista de reservados para registros nuevos: `admin`, `api`, `basecamp`, `ranger`, `settings`, `me`, `signals`, `kits`, `mods`, `builds`, `install`, `new`, `search`, `categories`, `tags`, `best`, `profile`, `creators`…; los handles legacy existentes se conservan tal cual).

**T0-14 · Privacidad, GDPR y legal** [N] · WP-30, WP-73, WP-22

- Exportar mis datos: ZIP con JSON en el bucket privado; enlace presigned por email, válido 24 h.
- Borrar cuenta: contraseña + 14 días de gracia. Después se anonimizan los comentarios y reseñas («Superviviente eliminado») y se borran los datos personales. Los mods se archivan por defecto, o se conservan publicados sin atribución si el usuario lo elige.
- Páginas `/privacy` (real, con responsable y contacto), `/terms`, `/content-policy`, `/dmca` y `/cookies`.
- CMP de Google cargado solo para invitados y solo para anuncios. La analítica propia no usa cookies (§9.3).

**T0-15 · Perfiles v2** [T] · WP-64, WP-81

- Banner (terreno generativo o imagen propia con recorte) y avatar (recorte y WebP).
- `displayName`, `@handle`, «Día N en la isla», sellos (rango, tier, verified) y bio en Markdown (500).
- Enlaces: web, GitHub, YouTube, Twitch, Discord, Ko-fi y Patreon.
- Estadísticas: mods, descargas, seguidores, valoración media y votos útiles.
- Hasta 3 mods fijados. Pestañas: Mods, Builds, Kits, Badges (cuaderno de campo), Activity (heatmap de 12 meses con tabla alternativa) y Reviews.
- Privacidad configurable. Seguir al creador.
- JSON-LD `ProfilePage`. Los perfiles sin contenido público llevan `noindex`.

**T0-16 · Follow + Signals + emails** [T] · WP-42, WP-43, WP-81 → §7.3.

**T0-17 · Mis descargas y actualizaciones** [T] · WP-31, WP-81

- `/me/downloads`: una fila por mod con la última versión descargada, la actual y la compatibilidad, más «Actualización disponible» o «Roto en la build actual».
- Acciones: descargar, «¿Funcionó?», seguir y quitar.
- Se puede borrar el historial y desactivar el registro.
- En la landing con sesión: «N actualizaciones para tus mods».

**T0-18 · Kits** [T] · WP-42, WP-71 → §7.8.

**T0-19 · Publicación del creador** [T] · WP-40, WP-74, WP-80 → §7.5.

**T0-20 · Analíticas del creador** [T] · WP-52, WP-80 → §7.5.

**T0-21 · Moderación** [N] · WP-51, WP-82, WP-83 → §7.4.

**T0-22 · Anti-spam** [N] · WP-20, WP-30, WP-41

- Turnstile en registro, olvidé la contraseña, logins tras fallos y comentarios y reseñas de cuentas con < 24 h.
- Límites del §5.1. Honeypot en los formularios. Lista de dominios de email desechables.
- Los enlaces del primer comentario de una cuenta nueva se retienen para revisión.
- `trustLevel` 0–3 (0 = nueva o sin verificar; 1 = verificada y ≥ 24 h; 2 = ≥ 30 días y ≥ 5 contribuciones sin incidencias; 3 = creador verificado o moderador), recalculado cada noche.

**T0-23 · Gamificación v1** [T] · WP-60, WP-64, WP-80 → §7.2.

**T0-24 · Builds v2** [T] · WP-40, WP-63

- Se publica solo con el `.json`. Se valida la estructura (`Guid`, `Name`, `Description`, `Data.Version`, `NumberOfElements`) y se **extrae la miniatura PNG embebida** (`Thumbnail` en base64) como portada reemplazable. Estadísticas: elementos, estructuras y versión de BuildShare.
- Límite real de 20 MB (se corrige el bug de 100 GB). Nueva versión (JSON) funcional.
- «Autor en el blueprint: X» si no coincide con quien sube, más los campos de autor original.
- BuildShare como dependencia automática con instrucciones de importación.
- Estética Blueprint. Tamaño S, M, L o XL según `numberOfElements`.
- Comentarios, reseñas, Kits y Follow como en los mods. Autopublicación con checks y post-revisión.

**T0-25 · KelvinSeek con límites** [N] · WP-32

- Formato idéntico y límites y presupuesto del §5.5.
- Página `/kelvinseek` que presenta el mod (autor ShokoCC) y su estado.
- Uso visible en `/ranger/admin/kelvinseek`.

**T0-26 · SEO y GEO** [N] · WP-22, WP-54, WP-61, WP-73 → §4.5 y §8.6–8.8.

**T0-27 · Tema, i18n y a11y** [N] · WP-12, WP-13, WP-22, WP-91, WP-94 → §7.11 y §7.12.

**T0-28 · Novedades y anuncios** [T] · WP-73, WP-51, WP-22

- `/news` (MDX) con el post «Bienvenidos a v2» y RSS.
- Banner de anuncios (admin): i18n, nivel, fechas y descartable por id.

**T0-29 · Publicidad responsable** [N] · WP-22 → §8.5.

**T0-30 · NSFW con opt-in** [N] · WP-33, WP-22, WP-81

- Oculto por defecto en listados, búsqueda, landing, feeds, sitemaps y Cmd+K. Opt-in en ajustes, con confirmación de mayoría de edad.
- Los enlaces directos muestran un *interstitial*. Las miniaturas se difuminan fuera de la página del mod. Sin OG explícita y sin anuncios.
- Moderación puede marcar un mod como NSFW (con aviso al autor).

**T0-31 · Notificador de Discord** [T] · WP-43

- Webhooks configurables en admin (`SiteSetting.discordWebhooks`) con embeds de mod nuevo, versión nueva (extracto, imagen y enlace), Mod of the Week e hitos ≥ 10 k.
- Filtro para excluir betas; NSFW siempre excluido. Reintentos y registro.

**T0-32 · API pública v2 documentada** [N] · WP-20, WP-73

- OpenAPI 3.1 generada, Scalar en `/api/docs` y `/developers` con ejemplos (incluida la guía «Integrar un mod manager»).
- Rutas legacy marcadas como *deprecated* con Sunset.

**T0-33 · Instalación + onboarding «Día 1»** [T] · WP-73, WP-60, WP-53, WP-81

- `/install`:
  - pasos ilustrados (RedManager → RedLoader → `_RedLoader/Mods` y `Libs` → verificar con F1);
  - falsos positivos de antivirus (checksum y VirusTotal);
  - «¿BepInEx o RedLoader?»;
  - actualizar y desinstalar;
  - servidores dedicados;
  - problemas frecuentes enlazados a `/patch-radar`;
  - FAQ;
  - Kit de inicio.
- `#oneclick` explica la retirada del instalador.
- *Checklist* «Día 1 en la isla» para cuentas nuevas: instalar RedLoader, primera descarga, seguir un mod, reportar si funcionó y crear un Kit. Incluye barra de progreso y da la insignia `survived-day-one`.

**Eventos de analítica de producto** (beacon, §9.3): `page_view`, `search`, `filter_apply`, `mod_view`, `download_click`, `download_redirect` (en el servidor), `install_modal_open`, `compat_prompt_shown`, `compat_prompt_answered`, `review_submit`, `comment_submit`, `follow`, `kit_create`, `notification_open`, `signup`, `email_verified`, `publish_step_{n}`, `version_publish`, `cmdk_open` y `cmdk_select`.

### 7.2 Gamificación (especificación)

**Principios**: premiar calidad y ayuda, no volumen; reglas públicas en `/achievements`; XP auditable y reversible (`XpEvent`); todo con *opt-out* de visibilidad; sin rachas diarias, loot ni rankings que humillen; retroactiva, para que los usuarios legacy arranquen con lo que ya se ganaron.

**Survivor rank** (todos los usuarios, por XP de ayuda):

| Rango (EN / ES) | XP |
|---|---|
| Castaway / Náufrago | 0 (sello punteado) |
| Scavenger / Carroñero | 50 |
| Forager / Recolector | 150 |
| Trapper / Trampero | 400 |
| Builder / Constructor | 1.000 |
| Pathfinder / Pionero | 2.500 |
| Veteran / Veterano | 6.000 |
| Legend of the Island / Leyenda de la isla | 15.000 (sello Solafite) |

**Reglas de XP** (`gamification.evaluate`; los topes diarios son por usuario; no hay XP por acciones sobre contenido propio):

| Acción | XP | Tope |
|---|---|---|
| Reseña con texto ≥ 80 caracteres | +20 | 3/día |
| Voto «útil» recibido en tu reseña | +5 | 50/día |
| Reporte de campo | +10 | 5/día |
| Bonus: tu reporte coincide con el consenso a las 72 h | +5 | — |
| Comentario marcado como solución o fijado por el autor | +15 | — |
| Reporte de bug marcado como resuelto por el autor | +15 | — |
| Tu Kit alcanza cada 10 seguidores | +10 | — |
| Perfil completo · onboarding completo · primer follow | +10 · +10 · +2 | una vez |
| Creador: versión compatible publicada ≤ 14 días después de una build `isBreaking` | +30 | por build |

**Creator tier** (automático, por descargas de por vida de todos sus mods, **con el histórico**):

| Tier | Descargas |
|---|---|
| Campfire / Hoguera | 1.000 |
| Lean-to / Refugio | 10.000 |
| Cabin / Cabaña | 50.000 |
| Treehouse / Casa del árbol | 100.000 |
| Fortress / Fortaleza | 500.000 |
| Landmark / Hito | 1.000.000 |

Cada tier aporta un sello en el perfil y un marco de avatar. Fortress y Landmark dan además *spotlight* en la landing.

**Insignias T0** (clave → nombre EN / ES → criterio). En el perfil forman un «cuaderno de campo»: las bloqueadas se ven punteadas con una pista.

- `original-survivor-2023…2026` → Original Survivor 2023 / Superviviente original 2023, etc. → cuenta creada ese año, antes del lanzamiento de v2.
- `crash-landing` → Crash Landing / Aterrizaje forzoso → primer mod publicado.
- `first-blueprint` → First Blueprint / Primer plano → primera build publicada.
- `pillar-of-the-island` → Pillar of the Island / Pilar de la isla → librería requerida por ≥ 3 mods de otros autores.
- `patch-day-hero` → Patch Day Hero / Héroe del parche → versión compatible ≤ 7 días después de una build `isBreaking`.
- `island-favorite` → Island Favorite / Favorito de la isla → mod con media ≥ 4,5 y ≥ 20 reseñas.
- `well-documented` → Well Documented / Bien documentado → mod con calidad de ficha 100.
- `first-field-report` → First Field Report / Primer reporte de campo.
- `field-medic` → Field Medic / Médico de campo → 10 reportes que coinciden con el consenso.
- `bug-hunter` → Bug Hunter / Cazador de bugs → 5 reportes de bug resueltos por los autores.
- `first-review` → First Review / Primera reseña → reseña con texto.
- `voice-of-the-island` → Voice of the Island / Voz de la isla → 50 votos útiles.
- `helping-hand` → Helping Hand / Mano amiga → 5 comentarios marcados como solución o fijados.
- `cartographer` → Cartographer / Cartógrafo → Kit público con ≥ 10 seguidores.
- `survived-day-one` → Survived Day One / Sobreviviste al día 1 → onboarding completo.
- `mod-of-the-week` (repetible) y `staff-pick` (repetible).
- `verified-creator` y `ranger` (moderador), por rol.
- `translator` (manual).
- `night-owl` (secreta) → 5 contribuciones entre las 00:00 y las 04:00 en la zona horaria del navegador.

**Hitos por mod**: 1 k, 5 k, 10 k, 25 k, 50 k, 100 k, 250 k, 500 k y 1 M descargas.

- `ModMilestone.reachedAt` se calcula de forma retroactiva a partir de las series diarias y aparece como línea de tiempo en la página del mod.
- Los hitos nuevos generan una notificación con celebración (confeti de Motion, respetando *reduced motion*) y una tarjeta compartible (OG).
- Los hitos ≥ 10 k se anuncian en Discord.

**Mod of the Week** (lunes 00:05 UTC):

- `trendingScore = uniqueDownloads7d × clamp((d7 + 10) / (prev7 + 10), 0.5, 3)`.
- Filtros:
  - `published` y no NSFW;
  - `compatStatus ≠ broken`;
  - si tiene ≥ 3 reseñas, `ratingBayes ≥ 3.5`;
  - sin repetir autor en las 2 semanas anteriores.
- El admin puede sustituirlo. Se muestra en la landing, la página del mod y el perfil, y se anuncia en Discord.
- «Staff pick» es manual.

**Anti-abuso**:

- Las descargas no dan XP.
- No se cuentan votos ni reportes entre cuentas con el mismo ipHash en 24 h.
- Las cuentas con `trustLevel` 0 pesan 0,5 en los agregados.
- Revisión de picos (una alerta en admin si un mod multiplica por 10 sus descargas diarias).

**Lanzamiento**: B16 otorga todo **sin notificaciones individuales**. Cada usuario con premios recibe una sola señal «Bienvenido a v2: has ganado N insignias», y los creadores un email de resumen (opt-out).

**Día N**: días desde `User.createdAt`. Pura identidad, sin puntos.

### 7.3 Notificaciones (Signals)

| Tipo | Disparador | In-app | Email por defecto |
|---|---|---|---|
| `mod.version_published` | nueva versión de un mod que sigues (`ModFavorite.notify`) | ✔ | resumen diario |
| `creator.mod_published` | mod nuevo de un creador que sigues | ✔ | resumen semanal |
| `comment.on_my_mod` | comentario en tu mod | ✔ | instantáneo (lotes de 10 min) |
| `comment.reply` · `comment.mention` | respuesta · @mención | ✔ | instantáneo |
| `review.on_my_mod` · `review.reply` | reseña nueva · respuesta del autor a tu reseña | ✔ | diario · instantáneo |
| `compat.broken_on_my_mod` | el agregado de la build actual pasa a `broken` o `mixed` | ✔ | instantáneo |
| `compat.acknowledged` | el autor marca «arreglado en vX» en tu reporte | ✔ | desactivado |
| `patch.breaking_build` | el admin registra una build `isBreaking` (a creadores con mods publicados) | ✔ | instantáneo |
| `mod.status_changed` | aprobado, rechazado, cambios pedidos, archivado o retirado | ✔ | instantáneo (transaccional; se puede desactivar salvo `removed`) |
| `milestone.reached` · `badge.awarded` · `award.won` | gamificación | ✔ | desactivado (entra en el resumen semanal) |
| `report.resolved` | tu reporte se resolvió | ✔ | desactivado |
| `system.announcement` | anuncio | ✔ | desactivado |
| `creator.weekly_report` | lunes: «tus mods: +X descargas…» | — | semanal (opt-out) |

- **Agrupación** por `groupKey` (p. ej. «5 comentarios nuevos en AmmoUi»).
- Campana con contador por SSE; página `/signals` con filtros y «Marcar todo como leído».
- **Preferencias**: matriz tipo × canal (`inApp` on/off; `email` instantáneo, diario, semanal o apagado).
- **Emails**: plantillas React Email en el idioma del usuario, `List-Unsubscribe` + `List-Unsubscribe-Post` (RFC 8058, un clic por tipo), `dedupeKey` y envío por `EmailOutbox` + Resend con reintentos.
- En dev y staging, el transporte es Mailpit (API HTTP) o la allowlist.
- Seguir sugiere de forma automática: tras una descarga con sesión, un toast «¿Seguir este mod para enterarte de las actualizaciones?».

### 7.4 Moderación (Ranger Station)

**Roles y permisos** (`core/permissions`, función `can(user, action, resource)` centralizada):

- `user`: publica en `pending` si es su primer mod.
- `verifiedCreator` (flag): publica directamente con checks OK y tiene límites mayores.
- `moderator`: colas, decisiones, reportes y sanciones.
- `admin`: además roles, ajustes, taxonomía, builds del juego y premios.
- Las acciones de moderador y admin exigen una sesión creada hace < 12 h (reautenticación). El 2FA TOTP llega en T1 y será obligatorio para moderadores.

**Transiciones de estado**:

| De → a | Quién | Notas |
|---|---|---|
| borrador → `pending` | autor (`submit`) | Si es verificado y los checks salen OK → `published` directamente |
| `pending` → `published` · `rejected` (motivo de plantilla) · «cambios pedidos» (sigue en `pending` con `statusReason`) | moderador | Notificación al autor + `AuditLog` |
| `published` → `unlisted` · `archived` (+ sucesor) | autor o moderador | |
| `published` / `unlisted` / `archived` → `removed` | moderador | 410 público + `Tombstone` de rutas |
| `rejected` → `pending` (reenvío) | autor | |
| `removed` → `published` (restaurar) | admin | |

**Checks automáticos** (`inspection.run`, en streaming sin cargar el zip en memoria):

- zip válido, ratio de compresión ≤ 100 y ≤ 5.000 entradas (zip bomb);
- rutas sin `..` ni absolutas (zip slip);
- `manifest.json` presente y válido contra el esquema de RedLoader;
- `id` igual al `manifestId` del mod en las versiones nuevas;
- semver mayor que la anterior;
- allowlist de extensiones: `dll json png jpg jpeg bundle assets txt md cfg ini ogg wav mp3 xml`;
- **se marcan** `exe bat cmd ps1 vbs scr msi lnk`;
- tamaño ≤ 200 MB (500 MB para verificados).

`security.scan` consulta VirusTotal por SHA-256 y sube el fichero si no se conoce (API gratuita: 4 peticiones/min y 500/día; con cola y *throttle*). Sin clave de VirusTotal, el paso queda en «no escaneado» y los no verificados pasan a revisión humana.

**Política de publicación**:

| Caso | Resultado |
|---|---|
| Primer mod de un creador no verificado | Revisión humana |
| Versiones siguientes, checks limpios y 0 detecciones | Se publican y entran en el carril `post_review` (72 h) |
| 1–2 detecciones (falsos positivos típicos de DLL) | Verificados: publican + `post_review`. No verificados: retenidas |
| ≥ 3 detecciones o check fallido | Retenidas (o rechazo automático si el zip es inválido) |
| Builds (JSON) | Autopublicadas tras validar esquema y tamaño + `post_review` |

**Informe de seguridad público** por versión: «Analizado con N motores: 0 detecciones», enlace a VirusTotal y fecha, más una nota sobre los falsos positivos. El moderador puede marcar «falso positivo verificado».

**Colas** (`/ranger`):

- Carriles: `new_mods`, `versions`, `post_review`, `builds`, `reports` y `comments`, ordenados por antigüedad y riesgo, con el tiempo de espera y el SLA a la vista.
- Vista de ítem:
  - checks automáticos;
  - diff de ficheros frente a la versión anterior (añadidos, borrados y cambiados con tamaño y hash);
  - diff del manifest;
  - descripción renderizada;
  - medios;
  - changelog;
  - historial del autor.
- Acciones con atajos `j`/`k`, `a` (aprobar), `c` (pedir cambios con plantilla), `r` (rechazar con plantilla) y `e` (escalar), más asignarse el ítem.
- Plantillas de motivo editables e i18n (`SiteSetting.moderationTemplates`).

**Reportes**:

- Sobre mod, versión, comentario, reseña, usuario, Kit o reporte de campo, con los motivos: malware, roto, resubida sin permiso, NSFW sin marcar, spam, acoso, ilegal y otro.
- Se oculta automáticamente con ≥ 3 reportes de usuarios distintos con `trustLevel` ≥ 1, hasta que alguien lo revise.
- Se avisa al reportante cuando se resuelve.

**Usuarios**: buscar, ver el historial, cambiar el flag `verifiedCreator`, rol (admin), suspender (temporal), banear, silenciar comentarios (global o por mod) y cerrar sesiones.

**Auditoría**: `AuditLog` inmutable de toda acción de moderador o admin (actor, acción, objetivo, antes y después, motivo y hora), filtrable. Métricas visibles: tiempo medio de revisión y SLA (< 72 h).

**Admin**:

- builds del juego y estado del ecosistema;
- categorías y tags + **recategorización masiva** (las sugerencias salen de reglas por palabras clave y, opcionalmente, de un LLM en un script puntual de WP-84, siempre con confirmación humana);
- premios, anuncios y ajustes (webhooks de Discord, límites, feature flags);
- uso de KelvinSeek y panel RUM (p75 por plantilla y país).

Se corrige el bug legacy («unapprove» decía «approved»): los mensajes salen de un único enum.

### 7.5 Basecamp (creador)

**Asistente «Nuevo mod»** (`/basecamp/new/mod`). Stepper tipo «pestañas de manual», con autoguardado en `ModDraft` cada 3 s y al cambiar de paso:

1. **Archivo**: *drag & drop*. **fflate** abre el zip en el navegador, valida el manifest y muestra id, versión, tipo, plataforma, dependencias (resueltas), `logColor` y lista de ficheros con errores y avisos **antes de subir**. Después sube de forma directa a R2 con progreso real y reintento.
2. **Ficha**: nombre (prellenado), slug con vista previa de la URL, descripción corta (200 con contador), categoría, hasta 5 tags, editor Markdown (CodeMirror 6 bajo demanda con vista previa en vivo que usa el mismo pipeline; 20.000 caracteres), licencia, enlace al código fuente, enlaces de apoyo y NSFW.
3. **Compatibilidad**: build del juego probada (multiselección), RedLoader mínimo, plataforma (RadioCards), rol multijugador, servidor dedicado, «¿se puede quitar sin romper la partida?» y dependencias (selector con `required`, `optional` y `conflicts`).
4. **Medios**: portada (recorte 16:9 en el cliente), galería de hasta 10 imágenes (arrastrar para ordenar, texto alternativo y borrar una a una) y vídeo de YouTube.
5. **Versión**: semver validado frente a la anterior, canal y changelog en Markdown.
6. **Revisión**: *preflight* (✔ o ⚠ con enlaces a cada campo) + «calidad de ficha» en % (galería ≥ 3, descripción ≥ 300, fuente, plataforma, tags y licencia) + «Enviar al puesto de guardabosques».

**Otros flujos de publicación**:

- **Nueva versión** = pasos ①, ⑤ y ⑥ + «Notificar a seguidores» (activado por defecto).
- **Nueva build** = archivo JSON (miniatura y estadísticas automáticas) → ficha → medios → revisión.
- En móvil se puede publicar paso a paso a pantalla completa.

**Resumen** (`/basecamp`):

- saludo + «Día N»;
- KPIs: descargas 7 y 30 días, seguidores, valoración, reportes de campo (% funciona) y vistas, con sparkline y delta con icono;
- gráfico de descargas (Recharts, serie única en Flare) con marcadores de versión (hairline + mono) y de parche del juego (Solafite), con rangos de 7 días, 30 días, 90 días y todo, más «Ver como tabla»;
- «Necesita atención» (reportes de rotura en la build actual, preguntas sin responder, falta de galería o de fuente, y reseñas sin responder);
- «En vivo» por SSE (descargas, reseñas y kits que añadieron tu mod);
- tabla «Mis mods» (estado, versión, descargas en 7 días, valoración, reportes y acciones);
- próximo hito o tier con barra de progreso.

**Analíticas por mod**:

- descargas diarias (con ceros) totales y únicas desde v2, por versión (barras apiladas, ≤ 8 versiones + «Otras») y por canal (web, RedManager o cliente);
- vistas y conversión vista → descarga;
- referrers (Google, Discord, YouTube, GitHub, IA: chatgpt.com, perplexity.ai, copilot, gemini, claude.ai; interno o directo);
- idioma del visitante;
- seguidores ganados;
- valoraciones en el tiempo;
- compatibilidad por build;
- exportación CSV;
- **histórico legacy completo desde 2023** (B1).
- Los países llegan en T1.

**Bandeja**: comentarios, bugs (con estado resuelto o pendiente), reseñas y reportes de campo de mis mods, con respuesta en línea.

**Gestión de mods**:

- editar la ficha sin volver a subir imágenes;
- retirar versiones (*yank*);
- archivar con sucesor;
- ver el informe de seguridad y el motivo de rechazo (y reenviar);
- borrar borradores;
- pedir la retirada.

**Insignias** (`/basecamp/badges`): progreso hacia las siguientes.

### 7.6 Comentarios v2

- Unicode completo (NFC) y **markdown-lite**: negrita, cursiva, código, enlaces `rel="ugc nofollow noopener"`, listas, citas y spoilers `||x||`. Sin títulos. Se sanea en el servidor y se renderiza sin concatenar HTML. 2.000 caracteres.
- **Hilos**: comentario → respuestas (la UI muestra 2 niveles: «respondiendo a @x»). Permalink `#c-{id}`. Orden Top (Wilson sobre reacciones positivas) o Nuevos. Paginación con «ver más».
- **Editar** (marca «editado»; el historial solo lo ve moderación) y **borrar** (suave: «Comentario eliminado» si tiene respuestas).
- **Reacciones**: 👍 ❤️ 😂 🎉 🙏 🔥, una por tipo y usuario.
- **Autor del mod**: fija hasta 3, marca la solución, marca un bug como «resuelto en vX» y ve la insignia «Autor». También se muestran «Ranger» y «Verificado».
- **@menciones** con autocompletado (primero los participantes del hilo y después la búsqueda de handles) y notificación.
- **«Es un reporte de bug»**: casilla + versión. Tiene estilo propio y entra en la bandeja del creador.
- **Imágenes**: hasta 2 por comentario (subida restringida, WebP, sin EXIF, lightbox).
- **Invitados**: ven los comentarios y un CTA «Entra para comentar» (nunca un formulario roto).
- **Moderación**: ocultar con motivo, bloquear el hilo y silenciar a un usuario (global o por mod).
- **Migración**: los 278 comentarios conservan `replyId` como padre y las entidades se decodifican en `bodyMd` (B9).
- **SEO**: los 10 primeros van en el HTML.

### 7.7 Reseñas

- Una por usuario y mod (editable, con historial). Estrellas 1–5 obligatorias (radio group accesible), título opcional (80) y cuerpo en markdown-lite (2.000). La versión reseñada se autocompleta con la última que descargaste.
- **Requisitos**: email verificado y cuenta con ≥ 24 h. Si descargaste el mod con sesión, lleva la marca **«Descarga verificada»**; si no, se permite sin la marca.
- **Votos** «¿Útil?» sí o no (nunca en la propia). **Una respuesta pública del autor** por reseña. Reportar.
- **Orden**: útiles (límite inferior de Wilson), recientes y críticas. Histograma 5 → 1.
- **Media bayesiana** para ordenar listados: `(5·m + Σ)/(5 + n)`, con `m` = media del sitio (4,0 por defecto).
- **Estrellas públicas solo con ≥ 3 reseñas** (antes, «Pocas reseñas todavía»). El JSON-LD `aggregateRating` sigue el mismo umbral.
- Si sale una versión mayor, se invita a actualizar la reseña.
- Notificaciones al autor del mod y al reseñador (§7.3). `Mod.averageRating` y `reviewsCount` se actualizan en la misma transacción.

### 7.8 Kits (colecciones)

- **Crear y editar** en `/me/kits/$id`: nombre, slug, descripción Markdown, portada (collage automático «knolling» o imagen), visibilidad (pública, oculta por enlace o privada) y elementos (mods y builds) ordenables por arrastre, con nota y versión fijada opcional («siempre la última» por defecto). Estética Blueprint.
- **Dependencias automáticas**: se añaden solas marcadas como «auto» y hay aviso de conflictos en tiempo real.
- **Código compartible** `KIT-XXXX-XX` (Crockford base32) + URL corta `/k/XXXXXX` + QR. Clonar (*fork*) con atribución. Revisiones (`KitRevision`: «rev 7: +Cook Alert»).
- **Página pública**:
  - resumen multijugador («Todos los jugadores necesitan 4 · Solo el host 2»);
  - compatibilidad agregada con la build actual («✔ 11/12 · ⚠ 1 sin verificar · ✖ 0 conflictos»);
  - tamaño total;
  - «Descargar todo» (hoja con una lista secuencial y *checklist*; cada enlace cuenta);
  - seguir (T1);
  - compartir con una OG en collage.
- La instalación con RedManager y los *bundles* zip son T1.
- **Staff picks** en la landing («Esenciales para empezar», «Para servidores dedicados») y en `/install` (Kit de inicio).
- **SEO**: se indexan los kits públicos con ≥ 3 elementos.

### 7.9 Búsqueda y Cmd+K

- **Servidor** (`GET /api/v2/search`, `/search`):
  1. `manifestId` exacto o nombre exacto (sin distinguir mayúsculas) primero.
  2. Después, `websearch_to_tsquery('simple', unaccent(q))` sobre `searchVector` con `ts_rank_cd` (pesos A, B y C).
  3. Se combina con `similarity(lower(sotf_unaccent(name)), q)` (trigram, umbral 0,3) para tolerar erratas.
  4. También busca en `User.name`, `User.displayName` y `Kit.name`.
  - p95 < 50 ms en origen.
- **Cliente (Cmd+K)**:
  - índice `GET /api/v2/search/index?locale=` con mods y builds (id, nombre, handle, categoría, tags, `manifestId`, descargas, compatibilidad y miniatura de 64 px), kits públicos, creadores, categorías, páginas y acciones;
  - ≈ 15 KB br y cacheado en el borde con el tag `search-index`;
  - MiniSearch con `prefix: true`, `fuzzy: 0.2` y *boost* de nombre y `manifestId`;
  - consulta vacía → Recientes (localStorage) + Tendencias;
  - resaltado de coincidencias;
  - el scope se escribe con prefijos (`mods:`, `builds:`, `kits:`, `@creador`, `>` para acciones).
- **Registro**: consultas normalizadas agregadas por día (`SearchQueryDaily`), para curar sinónimos y detectar peticiones de mods.

### 7.10 Compatibilidad y Patch Radar

- **Registro** (admin): `GameBuild` (etiqueta como «1.0.4» o «Parche 13», fecha, `steamBuildId` opcional, `isBreaking`, notas y exactamente una `isCurrent`), `LoaderRelease` (RedLoader 0.8.6 en el seed) y `EcosystemStatus` (RedLoader × build: funciona, parcial, roto o desconocido).
- **Reportes** (con email verificado):
  - por versión × build × modo (`singleplayer`, `host`, `client` o `dedicated`);
  - resultado ✔ funciona, ⚠ parcial o ✖ roto;
  - nota (500) y otros mods instalados, ambos opcionales;
  - uno por usuario, versión, build y modo, editable;
  - **tras una descarga con sesión** se ofrece «¿Funcionó?» en la siguiente visita a la página del mod y como señal a las 24 h (desactivable).
- **Agregado** (`compat.aggregate`), por pesos:
  - pesos: autor que declara «probado» = 2; creador verificado = 1,5; `trustLevel` 0 = 0,5; resto = 1;
  - con < 3 reportes ponderados → `untested` y se muestran los recuentos;
  - ≥ 70 % funciona → `works`;
  - ≥ 50 % roto → `broken`;
  - resto → `mixed`.
- **«Posiblemente desactualizado»**: la última versión es anterior a la última build `isBreaking` y no tiene reportes positivos posteriores.
- **Autor**: marca «probado en la build X» al publicar, responde a los reportes y marca «arreglado en vX» (se avisa a quienes reportaron).
- **Visualización**: CompatBadge en tarjetas y página («✔ Funciona en 1.0.4 (32)», «⚠ Mixto», «✖ Roto en 1.0.4», «? Sin datos») y FieldReportMeter con el detalle por build.
- **Build `isBreaking` nueva**:
  - banner global → `/patch-radar`;
  - señal `patch.breaking_build` a los creadores;
  - bloque «Necesita atención» en Basecamp;
  - la insignia Patch Day Hero queda disponible.
- **`/patch-radar`**: build actual y estado de RedLoader y RedManager; «el N % del top 50 confirmado en X»; rotos, pendientes y funcionan (top 50 por descargas en 30 días); historial de builds; CTA «¿Probaste alguno? Reporta» (+XP).
- **Filtro** «Funciona en la build actual» en Explore y Cmd+K.
- **Arranque** (para no parecer vacío el día 1):
  - la build actual se registra en A6;
  - los creadores reciben «Verifica tus mods» con +30 XP;
  - campaña de reportes en Discord;
  - la etiqueta «posiblemente desactualizado» empieza a funcionar sola.

### 7.11 i18n

- **Locales**: 13 (§4.1). Catálogo 100 % completo en cada locale (sin *fallback* visible en inglés; `pnpm i18n:check` falla si falta una clave).
- **Paraglide JS 2**:
  - los mensajes se guardan en `packages/i18n/messages/<namespace>/<locale>.json` y un paso de build los fusiona en `.generated/{locale}.json`;
  - claves `snake_case` con el prefijo del namespace;
  - plurales ICU;
  - en SSR se usa `AsyncLocalStorage`.
- **Formato**: `Intl.NumberFormat` compacto («1,98 M», «198万», «1.98M»), `Intl.DateTimeFormat` y `Intl.RelativeTimeFormat` («hace 2 h»). Se acaba el `es-ES` fijo.
- **Traducción**: los agentes escriben EN (fuente) y traducen a los 12 locales restantes en el mismo WP, usando `packages/i18n/legacy/*` (los 12 ficheros legacy importados) como **glosario**. Un modo `pnpm i18n:pseudo` genera pseudo-locale para detectar textos fijos y problemas de expansión.
- **Diseño**: soporta +35 % de expansión (DE, RU). No hay RTL, pero se usan propiedades lógicas.
- **Emails**: en el idioma del usuario. **Contenido de usuario**: idioma original con `lang`.

### 7.12 Accesibilidad (WCAG 2.2 AA)

- Contrastes del §3.3 y `focus-visible` siempre visible (anillo Signal de 2 px con offset). *Skip link*. Landmarks. Un único h1. Orden de tabulación lógico.
- **Formularios**: `label`, errores asociados con `aria-describedby`, resumen de errores con enlaces y validación al perder el foco.
- **Diálogos**: `inert` en el fondo, sin trampas de foco y Esc para cerrar. Toasts y contadores con `aria-live`.
- Objetivos ≥ 24 px (44 px en los primarios en móvil).
- Todos los iconos que llevan significado tienen `aria-label` y tooltip; los decorativos, `aria-hidden`.
- **Gráficos**: siempre «Ver como tabla». Heatmap con tabla alternativa. Galería y Cmd+K 100 % por teclado.
- `prefers-reduced-motion` respetado en todas partes. Sin parpadeos (el `blink` del 404 es un solo evento cada 7 s y se desactiva con *reduced motion*).
- **Atajos**: `⌘K`, `Ctrl+K` o `/` abren la búsqueda; `?` muestra la ayuda; `g e`, `g b`, `g k` y `g d` navegan; `j`, `k`, `a`, `c`, `r` y `e` funcionan en moderación. Se pueden desactivar en ajustes.
- **Verificación**: axe (0 violaciones serias o críticas) en CI sobre todas las plantillas, más una pasada manual con lector de pantalla (NVDA y VoiceOver) en WP-91.

### 7.13 T1 (0–3 meses tras el lanzamiento)

| ID | Feature |
|---|---|
| T1-01 | Login con **Discord** OAuth (vinculación por email verificado con confirmación) |
| T1-02 | **2FA TOTP** + códigos de recuperación (obligatorio para moderadores) |
| T1-03 | **Deep-link a RedManager** `redmanager://install/<mod_id>` (PR a ToniMacaroni con `tauri-plugin-deep-link`) + instalar Kits |
| T1-04 | **Bundles** zip con dependencias y estructura de carpetas (en R2, regenerados al publicar) |
| T1-05 | Grafo visual de dependencias |
| T1-06 | **Visor 3D de builds** (three.js con instancing por `ProfileID`) |
| T1-07 | **Scout**: asistente IA en Cmd+K (búsqueda + LLM con citas, tope de gasto y caché) |
| T1-08 | PAT (`sotfm_pat_…`), webhooks por creador y publicación vía API o GitHub Action |
| T1-09 | Badges SVG (descargas, versión, «compatible con parche X») y tarjeta embebible mejorada |
| T1-10 | Clasificaciones mensuales opt-in (Creators of the Month, New Talent, Most Helpful) + Mod of the Month por votación + Build of the Month |
| T1-11 | Temporadas de la isla (skins estacionales + evento de invierno con insignia) + easter egg «visión nocturna» |
| T1-12 | Co-autores, equipos y transferencia de mods |
| T1-13 | Reclamar autoría de resubidas y adoptar mods abandonados |
| T1-14 | Problemas conocidos y FAQ del autor por mod |
| T1-15 | Recomendaciones («quien descargó X también…») y home personalizada por tags |
| T1-16 | Comentarios en vivo por SSE |
| T1-17 | Diff público de versiones |
| T1-18 | ClamAV como segundo motor |
| T1-19 | Cambio de handle con redirecciones permanentes |
| T1-20 | Uptime público en `/patch-radar` |
| T1-21 | Analíticas por país y comparativas entre mods propios |
| T1-22 | Bandeja unificada del creador con estados |
| T1-23 | Búsquedas guardadas con alertas |
| T1-24 | Seguir Kits (+ comentarios en Kits) |
| T1-25 | Traducción automática de `shortDescription` y de los hechos (tabla `ModTranslation`, reemplazable por el creador) |
| T1-26 | Passkeys (WebAuthn) |

### 7.14 T2 (más adelante)

Jams de modding con votación y premios · tablón de peticiones de mods (con votos y «adoptar») · traducción automática de descripciones y changelogs · Steam OpenID («propietario verificado») y GitHub · publicaciones programadas · resumen IA de cambios entre versiones y asistente IA de moderación · mapa de la isla con las builds (arte propio) · directorio de servidores dedicados con su Kit requerido · PWA offline para las guías · perfil *supporter* (sin anuncios y con cosméticos) · rachas de mantenimiento y Premios de la isla anuales · comparador de mods.

---

## 8. Presupuesto de rendimiento, SEO y GEO

### 8.1 Objetivos Core Web Vitals

**Punto de partida** (Lighthouse móvil, 2026-09-29): `/mods` rendimiento 31, LCP 23,1 s, 14,3 MB · página de mod rendimiento 30, LCP 9,1 s, CLS 0,172.

| Métrica | Laboratorio (Lighthouse móvil, sin anuncios cargados) | Campo (CrUX / RUM p75) |
|---|---|---|
| Rendimiento Lighthouse | **100** en landing, explore, mod, build, perfil, kit, install y patch radar | — |
| TTFB | < 200 ms (HIT de borde 30–80 ms) | < 400 ms |
| FCP | ≤ 0,9 s | ≤ 1,2 s |
| LCP | ≤ 1,2 s | ≤ 1,5 s |
| TBT / INP | TBT ≤ 50 ms | INP ≤ 100 ms |
| CLS | ≤ 0,02 | ≤ 0,05 |

### 8.2 Presupuestos por tipo de página (se comprueban en LHCI y los tamaños bloquean)

| Recurso (br) | Páginas públicas | Auth | Consola |
|---|---|---|---|
| HTML | ≤ 45 KB en la landing; ≤ 50 KB en mod o build; ≤ 35 KB en el resto | ≤ 15 KB | shell ≤ 10 KB |
| JS inicial | **≤ 15 KB** (vanilla). Islas bajo demanda: comentarios ≤ 35 KB + React 57 KB (se comparte al cargarse); Cmd+K ≤ 25 KB + índice 15 KB | ≤ 90 KB (React + formulario + Turnstile diferido) | ≤ 120 KB de shell (react-dom, router, query, UI base) + ≤ 60 KB por chunk de ruta; Recharts y CodeMirror lazy |
| CSS | ≤ 20 KB (un fichero inmutable; crítico en línea si ≤ 4 KB) | ≤ 20 KB | ≤ 30 KB |
| Fuentes | 2 precargas, ≤ 70 KB; ≤ 100 KB en total (latín) | igual | igual |
| Imagen LCP | ≤ 60 KB (AVIF 640w) | — | — |
| Total primera vista | ≤ 350 KB sin anuncios | ≤ 250 KB | ≤ 450 KB |
| Tareas largas | 0 > 50 ms (throttling móvil) | ≤ 1 | — |

### 8.3 Imágenes

- **Pipeline** (`media.process`):
  - valida los *magic bytes*;
  - ≤ 8.000 px de lado y ≤ 8 MB al subir;
  - rechaza SVG;
  - `rotate()` + elimina EXIF y GPS;
  - anchos [320, 640, 960, 1440, 1920] sin ampliar;
  - AVIF (q≈50, effort 4) + WebP (q≈75);
  - thumbhash (≈ 25 B) + color dominante;
  - claves inmutables `media/{id}/{w}.{fmt}`.
- **Render**: `<picture>` con `srcset` y `sizes`, `width` y `height` explícitos, `loading="lazy"` + `decoding="async"` salvo el LCP (`fetchpriority="high"` + `<link rel=preload imagesrcset>`). El *placeholder* es el color dominante como fondo, más el thumbhash decodificado en la imagen hero.
- **Legacy**: B15 genera las variantes de las ≈ 1–2 k imágenes existentes (hoy la mediana es 1,1 MB; se esperan 30–80 KB a 640w). **Los originales no se tocan**. Las imágenes insertadas en descripciones Markdown se replican a R2 para conocer sus dimensiones (sin CLS). La descarga se hace con límite de 10 MB, solo https y sin IPs privadas (anti-SSRF).
- **Sin imagen**: portada generativa (`coverSvg`) inline en SVG.

### 8.4 Fuentes

- Autoalojadas con la API de fuentes de Astro o `@fontsource-variable`. Se precargan solo Onest-latin y Big-Shoulders-latin.
- `font-display: swap` + fallbacks métricos (fontaine) → CLS 0.
- `unicode-range` por subset, así que el cirílico, latin-ext y math se descargan solo si la página los necesita.
- Martian Mono nunca en el LCP. CJK con la pila del sistema.
- Para satori (OG) se usan los ficheros `.woff` o `.ttf` estáticos, porque satori no admite woff2.

### 8.5 Anuncios (AdSense sin romper CWV)

- **Solo para invitados** (se decide en el cliente con la cookie `sotf_li`; el HTML no varía).
- **Nunca** en: primer viewport, junto al botón de descarga, hoja o modal de instalación, formularios, auth, legales, consola, páginas NSFW ni pasos de `/install`. Máximo 2 huecos por página.
- **Posiciones**: *in-feed* en Explore (tras la tarjeta 6 y la 18, del tamaño de una tarjeta); en el mod, en la barra lateral bajo el pliegue (escritorio) o tras la descripción (móvil); en la landing, junto al *spotlight* de creadores.
- **Formato**: bloques manuales responsivos con `min-height` reservado por breakpoint, `data-full-width-responsive="false"` y **sin Auto Ads**.
- **Carga**:
  1. un **único** loader `adsbygoogle.js?client=ca-pub-2799839819522052`;
  2. se inyecta tras `load` + `requestIdleCallback`;
  3. solo si hay consentimiento (CMP de Google «Privacy & messaging», TCF v2.2 + Consent Mode v2, también diferido; fuera de EEE, Reino Unido y Suiza no aparece);
  4. y cuando el hueco está a < 600 px del viewport (`IntersectionObserver`).
- **Respeta** `document.prerendering`.
- **Verificación**: `<meta name="google-adsense-account" content="ca-pub-2799839819522052">` + `/ads.txt` idéntico.
- **Microcopy**: «Los anuncios mantienen gratis las descargas. Inicia sesión para ocultarlos.»

### 8.6 SEO técnico

- URLs, redirecciones, estados reales, canonical, hreflang y JSON-LD: §4.
- **Sitemaps**: índice + un fichero por tipo, con todos los locales, `lastmod` **real** (`lastReleasedAt` o `editedAt`; nunca `now()`) e `image:image` en mods y builds. Se cachean 1 h (tag `sitemap`), se declaran en `robots.txt` y se envían a Google Search Console y Bing Webmaster Tools (acción del usuario).
- **`robots.txt`** (lo sirve el origen; el *Managed robots.txt* de Cloudflare se **desactiva**):

```
User-agent: *
Allow: /
Disallow: /basecamp
Disallow: /ranger
Disallow: /settings
Disallow: /signals
Disallow: /me
Disallow: /api/
Disallow: /search
Disallow: /*/download/
Disallow: /_internal/
Sitemap: https://sotf-mods.com/sitemap.xml
Content-Signal: search=yes, ai-input=yes, ai-train=no
```

  En staging: `Disallow: /` + `X-Robots-Tag: noindex`.
- **Enlazado interno**: «Del mismo autor», «Requerido por», «En Kits», «Relacionados», categorías y tags en cada mod. Breadcrumbs en todo.
- **Hubs `/best/*`** con intro editorial breve por locale (MDX), fecha visible «Actualizado el …» y ≥ 5 elementos reales (si no, `noindex`).
- **Feeds RSS 2.0**: global, builds, por mod (versiones con changelog), por creador y por categoría. Se anuncian con `<link rel="alternate">`.
- **IndexNow**: clave en `/{INDEXNOW_KEY}.txt` y POST con *debounce* de las URLs de todos los locales afectados al publicar, editar o retirar. Bing alimenta a Copilot y ChatGPT Search. Crawler Hints de Cloudflare **desactivado** para no duplicar.
- **OG por entidad**: `og.render` genera un SVG con satori y lo pasa a PNG con sharp (1200×630), con fondo Night, topografía sembrada, isotipo, título display, autor, «↓ 48,2 K · ★ 4,8 · Funciona en 1.0.x» y el filo `logColor`. Se guarda en `og/{type}/{id}-{hash}.png` y se regenera al editar. `theme-color` por página.
- **Backlinks**: embebido `/embed/mods/:u/:s` y oEmbed en T0; badges SVG en T1.
- **NSFW**: fuera de los hubs y sitemaps salvo opt-in; `rating=adult`.

### 8.7 GEO (optimización para motores generativos)

- **Contenido citable**:
  - la caja «At a glance» (`<dl>` visible) en cada mod: versión, fecha, build del juego, RedLoader, plataforma, multijugador, dependencias, tamaño, descargas, valoración, licencia y fuente;
  - secciones con anclas estables (`#install`, `#requirements`, `#compatibility`, `#changelog`, `#faq`);
  - **FAQ por mod generada a partir de los hechos** (plantillas i18n: «¿Funciona en multijugador?», «¿Cómo se instala?», «¿Qué necesita?»), que además da contenido localizado real a los 13 locales;
  - cifras con fecha («a 29-sep-2026»).
- **`/llms.txt`**: H1 «SOTF Mods», un resumen en blockquote y enlaces a `/install`, `/patch-radar`, `/best/*`, las categorías, el top 50 de mods, `/developers` + `/api/v2/openapi.json` y el Discord.
- **`/llms-full.txt`**: todos los mods publicados en Markdown compacto (nombre, autor, categoría, versión, compatibilidad, multijugador, descargas, descripción corta y URL), regenerado por tag.
- **Alternativas `.md`** en `/mods/:u/:s.md`, `/builds/:u/:s.md`, `/profile/:h.md` y las guías, con `<link rel="alternate" type="text/markdown">`. No se negocia por `Accept`.
- **E-E-A-T**: `/about` con la historia desde 2023 y las cifras, perfiles completos, identidad de entidad coherente (`Organization.sameAs`) y enlaces a RedLoader, RedManager y el Discord.
- **Rastreadores IA** (Cloudflare → AI Crawl Control): **permitir** `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-SearchBot`, `Claude-User` y `Bingbot`; **bloquear el entrenamiento** (`GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`) de acuerdo con `ai-train=no`. Se cambia con una línea si el usuario decide otra cosa.
- **Medición**: referrers de IA en las analíticas (panel «Tráfico desde IA»), Bing Webmaster (Copilot) y una consulta de control mensual («best sons of the forest mods», «how to install sotf mods», «sotf multiplayer mods»).

### 8.8 Técnicas y umbrales de CI

- **Técnicas**:
  - HTML desde el borde (SWR asíncrono + Tiered Cache) y Early Hints (103) para el CSS y la fuente.
  - **Speculation Rules**: `prerender` con `eagerness: moderate` sobre `/mods/*`, `/builds/*`, `/profile/*`, `/kits/*` y `/categories/*`, **excluyendo** `*/download/*`, la consola y `/api`.
  - View Transitions entre documentos.
  - `content-visibility: auto` en listas largas.
  - bfcache: nunca `no-store` en el HTML público y ningún `unload`.
  - Terceros: solo AdSense (diferido, invitados) y Turnstile (solo en formularios de auth). Nada de GTM ni widgets sociales. YouTube y Discord como *facade*.
- **LHCI**:
  - **En cada PR** (3 ejecuciones, mediana, móvil, build de producción local contra el seed): `performance ≥ 0.95` (error), `accessibility = 1` (error), `best-practices ≥ 0.95` (error), `seo = 1` (error) y los presupuestos del §8.2 (error).
  - **Nocturno contra staging** (5 ejecuciones): `performance = 1.0` en las 8 plantillas clave (aviso con 0,98–0,99; error por debajo de 0,98).
  - Unlighthouse semanal sobre todo staging.
- **RUM**: `web-vitals` con atribución (≈ 2–3 KB, cargado en idle) → `/api/v2/e/vitals`. Se muestra el p75 por plantilla y país en `/ranger/admin/performance`.

---

## 9. Seguridad y privacidad

### 9.1 Modelo de amenazas y mitigaciones (cada vulnerabilidad legacy tiene una respuesta)

| Riesgo / vulnerabilidad legacy | Mitigación v2 | Dónde / verificación |
|---|---|---|
| **XSS almacenado** (markdown → `innerHTML` sin DOMPurify, changelog con `\|safe`, comentarios montados con strings) | Se guarda el Markdown fuente y el HTML se genera en el servidor con `rehype-sanitize` (allowlist estricta; sin `style`, `on*`, `iframe` ni `script`; `javascript:` y `data:` fuera). Nunca `set:html` ni `dangerouslySetInnerHTML` con datos sin sanear (regla de Biome). CSP estricta | `@sotf/markdown` + corpus XSS (OWASP, mXSS) en los tests (WP-21, WP-93) |
| **Token en una cookie legible, en localStorage y en el DOM** | Cookie `__Host-sotf_sid` HttpOnly, Secure, SameSite=Lax y hasheada en la BD. Se borran los restos legacy | WP-30; e2e comprueba que `document.cookie` no contiene la sesión |
| **Tokens caducados aceptados**; JWT nunca verificado | Sesión opaca con `expiresAt`, `absoluteExpiresAt`, revocación y `pwdFingerprint`. Sin JWT | WP-30, tests |
| **Mods no aprobados públicos y descargables** | Modelo de estados (§7.4) + checks automáticos + VirusTotal | WP-51 |
| **Presigned URLs sin restricciones** | Presigned de 15 min y un solo uso hacia el bucket **privado** `incoming/`, con `Content-Type` y `Content-Length` firmados, cuota por usuario, inspección y cuarentena antes de publicar | WP-31, WP-40 |
| **Sin rate limiting** | Límites por IP y usuario (§5.1) + WAF de Cloudflare + Turnstile | WP-20, WP-30 |
| **El login filtra si existe el email** | Error genérico, tiempo constante y hash señuelo. «Olvidé la contraseña» siempre responde 202 | WP-30 |
| **Descargas con buffer en memoria (DoS)** | 302 a R2 (0 bytes por el servidor) | WP-31 |
| `ip` y `userAgent` guardados como `"undefined"` | `ipHash` (HMAC con sal diaria) + canal clasificado. La IP en claro nunca se guarda | WP-31 |
| **GET que mutan** (favorito, approve) → CSRF y prefetch | Mutaciones solo con POST, PUT, PATCH o DELETE + Fetch Metadata y Origin + JSON | WP-20 |
| **CORS que refleja el Origin con credenciales** | GET públicos con `*` sin credenciales; los endpoints con cookie, solo del mismo origen | WP-20, WP-32 |
| **KelvinSeek como proxy abierto a OpenAI** | Límites + presupuesto diario + *kill switch* + `chat_id` hasheado | WP-32 |
| Zip bomb, zip slip, ejecutables y malware | Inspección en streaming, allowlist de extensiones y VirusTotal | WP-40, WP-51 |
| SSRF (imágenes remotas en Markdown, OG) | Fetch solo https, bloqueo de rangos privados y link-local (resolución DNS previa), límite de 10 MB, timeout de 5 s y sin redirecciones hacia IPs privadas | WP-40 |
| Suplantación del tipo en las subidas | Validación por *magic bytes* (`file-type`) + re-encodificación de imágenes con sharp | WP-40 |
| Fuga de EXIF y GPS | `sharp.rotate()` + eliminación de metadatos | WP-40 |
| *Clickjacking* | `frame-ancestors 'none'` salvo `/embed/*` | WP-93 |
| Redirecciones abiertas (`?next=`) | Solo rutas relativas internas de una allowlist | WP-44 |
| Fuerza bruta y *credential stuffing* | Límites por IP y cuenta, Turnstile, lista de contraseñas filtradas (HIBP) y alerta de login nuevo (T1) | WP-30 |
| Fijación de sesión | Token nuevo al hacer login y revocación al cambiar la contraseña | WP-30 |
| Cadena de suministro npm | pnpm con `minimumReleaseAge: 1440` (24 h) y scripts de build en allowlist (sharp, @node-rs/*, esbuild; pnpm 12 llama `allowBuilds` a lo que antes era `onlyBuiltDependencies`, ADR-0002), `overrides` para los transitivos vulnerables hasta que sus padres publiquen el arreglo, lockfile congelado en CI, `pnpm audit --prod --audit-level high` semanal y `secrets-scan --history` semanal y en cada PR | WP-00, WP-93 |
| **BD pública en el puerto 5433 sin SSL y sin backups** | Cerrar la exposición pública; backups diarios a un R2 privado; restauración probada cada semana en staging | Usuario (A1, A2), WP-90 |
| **Secretos de producción compartidos en un chat** | Rotación completa (§9.4) | Usuario |
| `prisma db push` accidental (borraría las tablas v2) | Rol `sotf_legacy_app` sin DDL y rotación de la contraseña de *owner* | Usuario (B2), §6.7 |
| Abuso de moderador | `AuditLog` inmutable, reautenticación < 12 h (TOTP en T1) y permisos mínimos | WP-51 |
| Enumeración de datos privados | Vistas públicas con privacidad aplicada en el servidor; exportaciones en un bucket privado con presigned GET | WP-30 |

**Cabeceras** (web y API):

- **CSP** de Astro (`security.csp`) con hashes. Una semana en *report-only* en staging y después se aplica (`CSP_MODE=enforce`).
  - **Sin `'strict-dynamic'`**: los scripts de módulo externos de Astro no llevan `integrity` (SRI), así que los navegadores CSP3 los bloquearían (verificado con Chromium). La política es `'self'` + hashes de los scripts inline + orígenes exactos de terceros (WP-93).
  - Los informes van a `POST /api/v2/security/csp-report` (la API los agrega y los registra como `csp violation`).
  - `img-src` admite además `https://*.gstatic.com`, `*.google.com`, `*.doubleclick.net`, `*.adtrafficquality.google` y `*.googleadservices.com` (píxeles de AdSense y del CMP).
  - `default-src 'self'`
  - `img-src 'self' data: https://r2.sotf-mods.com https://*.googlesyndication.com https://i.ytimg.com`
  - `connect-src 'self' https://*.r2.cloudflarestorage.com https://challenges.cloudflare.com https://*.google.com https://*.googlesyndication.com`
  - `frame-src https://challenges.cloudflare.com https://www.youtube-nocookie.com https://*.googlesyndication.com https://*.doubleclick.net`
  - `frame-ancestors 'none'`
  - `upgrade-insecure-requests`
- `Referrer-Policy: strict-origin-when-cross-origin`.
- `Permissions-Policy` restrictiva.
- `X-Content-Type-Options: nosniff`.
- HSTS: 6 meses, sin *preload* al principio.
- `Cross-Origin-Opener-Policy: same-origin-allow-popups`.

### 9.2 Autorización

- Una función central `can(actor, action, resource)` con tests por tabla (acciones × roles).
- La propiedad se comprueba siempre en el servidor (el autor de un mod para `studio/*`, el dueño para Kits).
- Nunca hay datos privados en el HTML cacheado.
- Los moderadores no ven emails salvo en la ficha de usuario (y queda auditado).

### 9.3 Privacidad y GDPR

- **Inventario y retención**:

| Dato | Retención |
|---|---|
| Email y hash de la cuenta | Mientras exista la cuenta |
| `ipHash` en eventos | 90 días en `AnalyticsEvent` y permanente en `ModDownload` (hash) |
| `AuthEvent` | 90 días |
| Sesiones | Hasta que caducan + 30 días |
| KelvinSeek (hash) | 30 días |
| Exportaciones | 24 h |
| Cuentas borradas | Se anonimizan a los 14 días |
| IPs en claro legacy | Se seudonimizan en la fase contract, con aprobación |

- **Analítica propia sin cookies**: `visitorHash = HMAC(ip + UA, sal diaria rotativa)`, sin PII ni cruce de datos. Se respetan `Sec-GPC: 1` y DNT (sin beacon). Se documenta en `/privacy` como medición de audiencia (**revisión legal recomendada**).
- **Cookies**: `__Host-sotf_sid` y `sotf_li` (estrictamente necesarias) y `sotf_theme` (preferencia). No hay cookie `sotf_consent` propia: el consentimiento lo gestiona el CMP de Google (TCF, solo EEE/Reino Unido/Suiza, §8.5), que guarda el suyo. Anuncios y CMP solo para invitados que consienten.
- **Derechos**: exportación y borrado de autoservicio (T0-14), rectificación desde ajustes y contacto en `/privacy`.
- **Encargados de tratamiento**: Cloudflare (CDN, R2 y Turnstile), Resend (email), OpenAI (KelvinSeek: solo el texto del chat, sin PII tras el hash), Google (AdSense y CMP), VirusTotal (ficheros de mods públicos) y Sentry (errores; si se activa, con PII desactivado). Se listan en `/privacy`.
- **Menores y NSFW**: *opt-in* con confirmación de mayoría de edad. Nunca hay anuncios en NSFW.

### 9.4 Rotación de secretos (el usuario compartió secretos de producción en el chat)

| Secreto | Cuándo | Cómo |
|---|---|---|
| Token de la API de Coolify | **Ya** (A2) | Revocar y crear uno nuevo con solo lectura para diagnósticos |
| Contraseña de *owner* de la BD | T+1 (con la legacy parada) | Cambiarla en Coolify. La legacy de reserva usa `sotf_legacy_app` |
| Claves R2 | T+1 | Token nuevo acotado a los buckets; revocar el antiguo |
| `RESEND_API_KEY`, `GPT_API_KEY` (→ `OPENAI_API_KEY`) | T+1 | Regenerarlas en el proveedor |
| `JWT_SECRET` | T+30 | Se elimina (la v2 no lo usa) |
| `APP_SECRET`, `INTERNAL_SECRET` (nuevos) | Al crear los entornos | `openssl rand -base64 48`, uno por entorno |

Ningún secreto va en el repositorio, los logs o los documentos. `pnpm check:forbidden` busca además patrones de claves (`sk-`, `re_`, `AKIA`, etc.).

---

## 10. Calidad: tests, CI y observabilidad

### 10.1 Pirámide de tests

| Nivel | Herramienta | Alcance | Dónde |
|---|---|---|---|
| Unitarios | Vitest 5 | Reglas de negocio de core (permisos, semver, conteo, agregados de compatibilidad, bayes y Wilson, XP y rangos, resolver de slugs, encoding de claves), markdown (corpus XSS), serializadores legacy, utilidades i18n y componentes de UI (render) | `**/*.test.ts` junto al código |
| Integración | Vitest + Testcontainers (`postgres:16-alpine`) + SeaweedFS (S3) | API real (Fastify `inject`) contra Postgres migrado: auth y sesiones, descargas (302 + filas), subidas (presign → PUT → complete → inspección), comentarios, reseñas, Kits, moderación, jobs de pg-boss, triggers y migraciones (guarda de superconjunto) | `**/*.int.test.ts` (`pnpm test:int`) |
| Contrato legacy | Vitest + fixtures + contenedor .NET | 38 fixtures con igualdad profunda y orden de claves; DTO de UpdatesChecker deserializado con Newtonsoft (`mcr.microsoft.com/dotnet/sdk:10.0`); flujo de RedManager con sus tipos TS; KelvinSeek en texto plano; casos de descarga (codificación, HEAD, Range, `undefined`) | `tooling/legacy-contract` (`pnpm contract:legacy`) |
| E2E | Playwright 1.63 (Chromium, WebKit y Firefox en los flujos críticos; móvil emulado) | Flujos: login con un hash legacy de Bun (argon2 y bcrypt) → rehash; registro + verificación (Mailpit); explorar → filtrar → mod → descargar (302); publicar un mod completo (asistente con un zip de fixture) → cola → aprobar → visible; nueva versión → notificación a los seguidores; comentar, reaccionar, fijar y marcar como resuelto; reseñar y votar; reporte de campo → agregado; Kit crear, compartir y clonar; Cmd+K; cambio de idioma y tema; redirecciones legacy; 404 y 410; GDPR exportar y borrar; moderación (rechazo con plantilla) | `e2e/` (`pnpm e2e`) |
| Accesibilidad | `@axe-core/playwright` | Todas las plantillas en ambos temas: 0 violaciones serias o críticas | `e2e/a11y` |
| Regresión visual | Playwright `toHaveScreenshot` dentro de `mcr.microsoft.com/playwright:v1.63.0-noble` (fuentes deterministas) | ≈ 25 vistas (tarjetas, cabecera de mod, hero, 404, Basecamp, cola) × 2 temas × 3 viewports (360, 768, 1440). Umbral de 0,1 % | `e2e/visual` |
| Rendimiento | LHCI (§8.8) · `autocannon` | Presupuestos; carga: `/api/mods?page=N` 300 rps con p95 < 50 ms desde el LRU, descargas 200 rps con p95 < 60 ms y 0 errores | `tooling/lhci`, `tooling/load` |
| Migración | Scripts SQL + Vitest | Baseline, guarda, backfills idempotentes (se ejecutan dos veces y el resultado es el mismo), invariantes del §6.11 e instantánea antes y después sobre el seed (y sobre el dump real en el ensayo) | `tooling/migration` |
| Seguridad | Vitest + e2e | Corpus XSS, CSRF (cross-site → 403), límites (429), permisos por tabla, cookies HttpOnly, cabeceras y CSP | WP-93 |
| Sombra | `tooling/shadow` | GET reales comparados entre `api.sotf-mods.com` y la v2 (preflight) con normalización | WP-A1 |

### 10.2 CI (GitHub Actions; en local, `pnpm ci:local` reproduce lo mismo)

```
ci.yml (PR y push):
  setup: node 24, corepack pnpm 12.6, pnpm install --frozen-lockfile (caché), turbo cache
  1 biome ci · 2 pnpm check:forbidden · 3 pnpm i18n:check · 4 turbo typecheck
  5 turbo test (unit) · 6 turbo test:int (Testcontainers; servicios docker del runner)
  7 pnpm db:guard (migraciones sobre baseline + comparación de catálogo)
  8 pnpm contract:legacy (seed del snapshot + api build) · 9 turbo build
  10 e2e (docker compose -f ops/compose/e2e.yml: pg + seaweedfs + mailpit; apps construidas) + axe + visual
  11 LHCI (presupuestos) · 12 docker build de las imágenes (sin push en PR)
release.yml (main): imágenes multi-stage → GHCR (tags sha + staging) → job de migraciones en staging
  → webhook de despliegue de Coolify (staging) → smoke → purga del tag html
deploy.yml (tag v*): retag de la misma imagen → prod: job de migraciones (aditivas) → webhook de Coolify → smoke → purga html
nightly: LHCI contra staging, Unlighthouse semanal, pnpm audit, restauración del backup en staging (semanal)
```

### 10.3 Observabilidad

- **Logs**: pino en JSON (visor de Coolify) con `reqId` (cf-ray), ruta, estado, duración y `userId` hasheado. Rutas legacy: UA y Origin agregados por día en `AnalyticsEvent(kind='legacy_call')`.
- **Errores**: Sentry (si hay `SENTRY_DSN`) en API, worker, SSR web y consola, con `sendDefaultPii: false`. En las páginas públicas no hay SDK: un *beacon* `window.onerror` → `/api/v2/e`.
- **Salud**: `/healthz` y `/readyz` (Coolify los usa como *health check* con `wget`); `@fastify/under-pressure` → 503.
- **Métricas de negocio y operación** en `/ranger/admin`:
  - profundidad y fallos de las colas de pg-boss;
  - tasa de 404, 410 y 5xx;
  - descargas por hora;
  - coste de KelvinSeek;
  - estado de las purgas;
  - RUM p75.
- **Alertas** (email al admin vía worker):
  - job `dead-letter` > 0;
  - 5xx > 1 % en 5 min;
  - `db:invariants` en rojo;
  - presupuesto de KelvinSeek al 80 %;
  - sin backup en 26 h (comprobado con la API de Coolify, solo GET, desde un cron del usuario, o manualmente).
- **Monitor de disponibilidad externo** (UptimeRobot o Better Stack, gratuito; lo configura el usuario) sobre `/healthz`, una página de mod, `/api/mods?page=1` y un HEAD de descarga.
- **SLO**: disponibilidad mensual ≥ 99,9 % en descargas y API legacy; p95 de origen < 150 ms en SSR (fallo de caché) y < 60 ms en descargas; tasa de error < 0,5 %.

---

## 11. Infraestructura y despliegue

### 11.1 Imágenes Docker

- **`ops/docker/node.Dockerfile`** (api + worker), multi-stage:
  1. `node:24-alpine` + corepack pnpm → `turbo prune @sotf/api @sotf/worker --docker`;
  2. `pnpm fetch` + `pnpm install --offline --frozen-lockfile`;
  3. `turbo build --filter=@sotf/api... --filter=@sotf/worker...` (tsdown → `dist/`);
  4. `pnpm deploy --prod`;
  5. etapa final `node:24-alpine` con `tini`, `USER node`, `TZ=UTC`, `NODE_ENV=production`, `dist/` + `node_modules` de producción (sharp musl y @node-rs musl).
  - `CMD`: `node dist/server.js` (api) · `node dist/worker.js` (worker) · `node dist/migrate.js` · `node dist/backfill.js`.
- **`ops/docker/web.Dockerfile`**: el mismo patrón para `@sotf/web` (Astro build → `dist/server/entry.mjs` + `dist/client`).
- **Sin `HEALTHCHECK` en el Dockerfile** (lo gestiona Coolify con `wget`, incluido en busybox). `--max-old-space-size` según el límite de memoria. `close-with-grace` vuelca el buffer de descargas y cierra SSE y el pool al recibir SIGTERM (*grace* de 30 s).
- **Tamaño objetivo**: web ≤ 180 MB y node ≤ 230 MB.

### 11.2 Entornos locales y de CI

- `ops/compose/dev.yml`, proyecto **`sotfv2`** con **puertos libres verificados en el host**:
  - `postgres:16-alpine` → `127.0.0.1:47432`;
  - `chrislusf/seaweedfs` (S3) → `127.0.0.1:47333`;
  - `axllent/mailpit` → SMTP `47025` y UI `47080`.
- Apps en desarrollo: web `47321`, api `47301` y worker health `47302`.
- **Prohibido** usar los puertos 80, 443, 3000, 3199, 3310, 4007, 5455, 6001, 6002, 6767, 8000, 8080, 13000–13004 y 55432 (ocupados por otros proyectos del usuario). Nunca se paran contenedores ajenos.
- `ops/compose/e2e.yml` (proyecto `sotfv2-e2e`, puertos 475xx) para los e2e con las imágenes construidas.
- Testcontainers usa puertos aleatorios.

### 11.3 Topología en Coolify (proyecto nuevo `sotf-mods-v2`; nada se toca de otros proyectos)

| App | Imagen / CMD | Dominios (producción) | Puerto | Health | Memoria |
|---|---|---|---|---|---|
| `sotf-v2-web` | `ghcr.io/<owner>/sotf-web` · `node dist/server/entry.mjs` | `https://sotf-mods.com` | 4321 | `GET /healthz` | 384 MB |
| `sotf-v2-api` | `ghcr.io/<owner>/sotf-node` · `node dist/server.js` | `https://api.sotf-mods.com`, `https://sotf-mods.com/api` (*Strip prefix* **desactivado**) | 3001 | `GET /healthz` | 512 MB |
| `sotf-v2-worker` | `sotf-node` · `node dist/worker.js` | — | 3002 (interno) | `wget :3002/healthz` | 768 MB |
| `sotf-v2-migrate` (tarea puntual) | `sotf-node` · `node dist/migrate.js` / `backfill.js` | — | — | — | 512 MB |
| `sotf-mods-db` (existente `ukg0ks4`) | postgres:16-alpine | — | — | nativo | — |

- **Staging** (mismo proyecto, entorno `staging`): las mismas tres apps con `https://beta.sotf-mods.com` (web) y `https://beta.sotf-mods.com/api` (api), más la BD `sotf-v2-staging-db` (postgres:16-alpine, **sin puerto público**), restaurada semanalmente del backup.
- **Preflight**: las apps de producción con dominio `next.sotf-mods.com` durante T−2 → T0 (§6.13 C1).
- **Tres apps en lugar de Compose**: Coolify solo hace *rolling updates* con apps de imagen o Dockerfile (sin puertos mapeados al host y con los nombres de contenedor por defecto).
- **`/api` en el mismo origen**: se valida en staging (WP-90). Si Coolify falla con dominios con path, se usa una etiqueta Traefik personalizada (`PathPrefix(`/api`)` con prioridad mayor) y, como último recurso, el proxy de Astro en `src/fetch.ts` (`/api/*` → `INTERNAL_API_URL`, en streaming).

### 11.4 Variables de entorno por app (validadas con Zod al arrancar)

| Variable | web | api | worker | Notas |
|---|---|---|---|---|
| `NODE_ENV`, `TZ=UTC`, `LOG_LEVEL`, `SITE_ENV` (`production`/`staging`/`preflight`/`development`) | ✔ | ✔ | ✔ | `SITE_ENV≠production` → `noindex` + banner |
| `PUBLIC_SITE_URL` (`https://sotf-mods.com`) | ✔ | ✔ | ✔ | |
| `PORT` / `HOST` | 4321 / 0.0.0.0 | 3001 / 0.0.0.0 | 3002 (health) | en desarrollo los scripts `dev` usan 47321 / 47301 / 47302 en 127.0.0.1 (§11.2) |
| `INTERNAL_API_URL` (`http://<contenedor-api>:3001`) | ✔ | | | |
| `WEB_INTERNAL_URL` | | | ✔ | invalidación del LRU |
| `INTERNAL_SECRET` | ✔ | ✔ | ✔ | cabecera `X-Internal-Auth` |
| `DATABASE_URL` (rol `sotf_v2_app`), `DB_POOL_MAX` | | ✔ (10) | ✔ (5) | |
| `MIGRATIONS_DATABASE_URL` (*owner*) | | tarea `migrate` | | solo en la tarea |
| `APP_SECRET` | | ✔ | ✔ | HMAC de sesiones, ipHash (+ sal diaria derivada) y chatHash |
| `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET=sotf-mods`, `R2_PRIVATE_BUCKET=sotf-mods-private`, `R2_PUBLIC_BASE_URL=https://r2.sotf-mods.com` | `R2_PUBLIC_BASE_URL` | ✔ | ✔ | staging: `R2_BUCKET=sotf-mods-staging` (y lectura de `r2.sotf-mods.com` para lo legacy) |
| `PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | ✔ / | / ✔ | | |
| `PUBLIC_ADSENSE_CLIENT=ca-pub-2799839819522052` | ✔ | | | |
| `OPENAI_API_KEY`, `KELVINSEEK_MODEL`, `KELVINSEEK_DAILY_BUDGET_USD` | | ✔ | ✔ (sugerencias puntuales de recategorización) | |
| `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TRANSPORT` (`resend`/`mailpit`/`allowlist`), `EMAIL_ALLOWLIST` | | | ✔ | |
| `CF_ZONE_ID`, `CF_API_TOKEN` (solo Cache Purge) | | | ✔ | |
| `INDEXNOW_KEY` | ✔ (fichero de clave) | | ✔ | |
| `VIRUSTOTAL_API_KEY` | | | ✔ | opcional |
| `SENTRY_DSN`, `PUBLIC_SENTRY_DSN_CONSOLE` | ✔ | ✔ | ✔ | opcionales |
| `LEGACY_COEXIST`, `LEGACY_SNAKE_ALIASES` | | ✔ | ✔ | §2.9, §5.5 |
| `ARGON2_CONCURRENCY=2` | | ✔ | | |
| `GIT_SHA` | | ✔ | ✔ | commit desplegado (`/healthz`, logs, `info.version` de OpenAPI); lo fija la imagen (*build arg*) |
| `RELEASE_SHA` / `SOURCE_COMMIT` | ✔ | | | commit servido (`/healthz`, motivo de la purga post-despliegue); CI fija el primero, Coolify inyecta el segundo |
| `CSRF_TRUSTED_ORIGINS` | | ✔ | | orígenes extra (coma) para escrituras con cookie: hosts de staging/preflight; vacío en producción |
| `WORKER_CONCURRENCY` (2) | | | ✔ | opcional |
| `PGBOSS_SCHEMA` (`pgboss`) | | ✔ | ✔ | opcional |
| `R2_ENDPOINT` | | ✔ | ✔ | solo emuladores S3 locales/tests; vacío en producción (se deriva de `R2_ACCOUNT_ID`) |
| `SMTP_URL` | | | ✔ | transporte `mailpit` (desarrollo/CI) |

**Se eliminan (legacy)**: `FILE_UPLOAD_ENDPOINT`, `FILE_UPLOAD_TOKEN`, `FILE_PREVIEW_ENDPOINT`, `KELVINGPT_API`, `KELVINGPT_API_AUTHORITY`, `FILE_DOWNLOAD_ENDPOINT`, `JWT_SECRET`, `BASE_URL`, `GPT_API_KEY`, `R2_CUSTOM_DOMAIN`, `R2_BUCKET_NAME`, `API_URL`, `PUBLIC_API_URL` y `PUBLIC_BASE_URL` (§2.8).

### 11.5 Cloudflare (runbook `ops/cloudflare/`; lo aplica el usuario)

- **DNS**: `sotf-mods.com`, `www`, `api`, `beta` y `next` con proxy; `r2` como dominio propio de R2. `files` se borra en T+7.
- **SSL/TLS**: Full (strict), TLS mínimo 1.2, TLS 1.3, HTTP/3, «Always Use HTTPS» y 0-RTT desactivado. HSTS (6 meses, sin *preload*) lo envía el origen; no se activa también en el borde (WP-93).
- **Speed**: Early Hints activado; Rocket Loader, Email Obfuscation, Zaraz y Auto Minify **desactivados**; Tiered Cache Smart Topology activado; Crawler Hints desactivado.
- **Cache Rules** (en orden; la última que coincide gana cada ajuste):
  1. `sotf-cache-origin`: `http.host in {"sotf-mods.com" "api.sotf-mods.com" "beta.sotf-mods.com"}` → Eligible for cache. Edge TTL: «Use cache-control header if present, bypass cache if not». Browser TTL: respetar el origen. Cache key por defecto (con query string). Serve stale mientras revalida.
  2. `r2-immutable`: `http.host eq "r2.sotf-mods.com"` → Eligible. Edge TTL 1 año (*override*) y Browser TTL 1 año. **Se activa en D5** (tras B17).
  3. `sotf-bypass`: `(http.request.uri.path wildcard "/mods/*/*/download/*") or starts_with(http.request.uri.path, "/api/v2/auth") or starts_with(http.request.uri.path, "/api/v2/me") or starts_with(http.request.uri.path, "/api/v2/stream") or starts_with(http.request.uri.path, "/api/v2/e") or starts_with(http.request.uri.path, "/api/v2/uploads") or starts_with(http.request.uri.path, "/api/kelvinseek") or starts_with(http.request.uri.path, "/_internal")` → Bypass cache. El operador `wildcard` está disponible en todos los planes; `matches` (regex) no se usa porque exige plan Business.
- **Configuration Rule**: `http.host eq "api.sotf-mods.com" or (http.request.uri.path wildcard "/mods/*/*/download/*") or starts_with(http.request.uri.path, "/api/")` → Browser Integrity Check **off**. Bot Fight Mode **off** en toda la zona (RedManager y los mods no ejecutan JS ni mandan User-Agent).
- **Redirect Rule**: `www.sotf-mods.com/*` → `https://sotf-mods.com/${1}` (301, conserva la query).
- **WAF rate limiting** (1 regla): `starts_with(http.request.uri.path, "/api/v2/auth/")` con más de 20 peticiones en 10 s por IP → bloqueo de 10 s.
- **AI Crawl Control y bots**: *Managed robots.txt* **off**; permitir los bots de búsqueda y recuperación; bloquear los de entrenamiento (§8.7).
- **Turnstile**: widget «Managed» para `sotf-mods.com` y `beta.sotf-mods.com`.
- **Token de API** para purgas: «Zone → Cache Purge» solo en la zona `sotf-mods.com`.
- **Límite de purga**: `cdn.purge` agrupa con *debounce* de 20 s. Si el plan Free devuelve 429, se reintenta con backoff y el TTL del borde (≤ 15 min) actúa como red de seguridad.

### 11.6 R2

- **Buckets**: `sotf-mods` (público, custom domain `r2.`), `sotf-mods-private`, `sotf-mods-backups` y `sotf-mods-staging`.
- **CORS** de `sotf-mods-private` y `sotf-mods-staging`: PUT desde los tres orígenes (prod, beta y next), con las cabeceras `content-type` y `content-length` y `ETag` expuesto.
- **Lifecycle**: `incoming/` a 1 día, *multipart* incompleto a 1 día y `exports/` a 2 días.
- **Tokens**: uno de lectura y escritura acotado a `sotf-mods`, `sotf-mods-private` y `sotf-mods-staging` para las apps, y otro de solo escritura para `sotf-mods-backups` en Coolify.

### 11.7 Secuencia de despliegue y corte

La secuencia de despliegue es la de CI del §10.2. El corte está detallado en el §6.13 y la marcha atrás en el §6.14.

---

## 12. Plan de ejecución

### 12.1 Protocolo para agentes (obligatorio)

- **Aislamiento**: cada WP trabaja en su **git worktree** y rama propias:

  ```bash
  git -C /root/sotf-mods/sotf-mods-v2 worktree add /root/sotf-mods/sotf-v2-wt/<WP-ID> -b wp/<WP-ID> main
  ```

  Al terminar: rebase sobre `main`, `pnpm install`, `pnpm gen` y aceptación. El integrador (orquestador) fusiona en orden de id. Nadie empuja a GitHub.
- **Propiedad de rutas**:
  - Un WP solo modifica sus «rutas propias». Dentro de una ola, las rutas son disjuntas.
  - Los *stubs* que crea un WP de plataforma para otro posterior (p. ej. `components/account/HeaderAccount.astro`) pasan a ser del WP que los implementa.
  - WP-00 genera `tooling/scripts/ownership.json` a partir de este §12, y `pnpm check:ownership <WP-ID>` falla si el diff toca rutas ajenas.
  - Si hace falta un cambio fuera de las rutas propias, se anota en `docs/backlog/<WP-ID>.md` (una línea por ítem: qué, dónde, por qué) y el integrador lo asigna a la siguiente ola.
- **Ficheros compartidos**:
  - `pnpm-workspace.yaml`: su catálogo ya contiene **todas** las dependencias del §2.2 con la versión exacta. Si un WP necesita una dependencia nueva, la fija con versión exacta en su `package.json` y la anota en su backlog.
  - `turbo.json`, `biome.json` y los tsconfig base son de WP-00 (y de WP-90/93 en endurecimiento).
  - Contratos: cada dominio vive en su fichero `packages/contracts/src/<domain>.ts`. Los cambios posteriores son **solo aditivos** y los hace el WP dueño del dominio en esa ola.
  - Esquema de BD: el esquema T0 completo lo entrega WP-10. Un cambio posterior = fichero nuevo `packages/db/migrations/<NNNN>_<wp-id>_<slug>.sql` (numeración reservada por ola: W3 = 1300–1399, W4 = 1400–1499… W10 = 2000–2099) + `packages/db/src/schema/ext/<wp-id>.ts`. Siempre aditivo y con la guarda en verde.
  - i18n: cada WP escribe **solo** en sus namespaces `packages/i18n/messages/<ns>/<locale>.json` (los 13 locales; EN como fuente).
  - `pnpm-lock.yaml`: si hay conflicto, se toma `main` y se ejecuta `pnpm install --lockfile-only`.
  - Los ficheros generados (`*.gen.ts`, `.generated/`, `routeTree.gen.ts`) nunca se editan a mano: se regeneran con `pnpm gen`.
- **Definición de hecho** (todo WP):
  1. Aceptación verde.
  2. `pnpm verify` verde (lint, `check:forbidden`, `check:ownership`, `i18n:check`, typecheck, unit y build de lo afectado).
  3. `pnpm test:int` de los paquetes tocados.
  4. Namespaces i18n completos en los 13 locales.
  5. Listón del §1.2 aplicado a la UI.
  6. Sin TODO sin entrada en el backlog.
  7. README corto del paquete o área actualizado.
  8. Commits convencionales con la línea de atribución indicada por el entorno.
- **Integración de ola** (I-n, la hace el orquestador):
  1. Fusionar.
  2. `pnpm gen && pnpm install && pnpm ci:local` completo.
  3. Etiquetar `wave-n`.
  4. Si algo queda en rojo, un WP de arreglo al inicio de la ola siguiente (cuenta dentro del máximo de 5).
- **Datos**: los tests usan Testcontainers o el seed local. **Nunca** producción. Solo se permiten GET y HEAD de solo lectura a `sotf-mods.com`, `api.sotf-mods.com` y `r2.sotf-mods.com`, y **nunca** a rutas de descarga, favorito, approve ni KelvinSeek.
- **Scripts raíz** (los crea WP-00):
  - calidad: `pnpm lint`, `typecheck`, `test`, `test:int`, `build`, `verify`, `ci:local`, `check:forbidden`, `check:ownership`, `i18n:check`;
  - desarrollo: `gen`, `dev`, `infra:up`, `infra:down`, `infra:reset`;
  - BD: `db:migrate`, `db:guard`, `db:baseline`, `db:seed:dev`, `db:reset:dev`, `db:backfill`, `db:invariants`, `db:verify-snapshot`, `db:revert-fix`, `admin:grant`;
  - verificación extendida: `e2e`, `contract:legacy`, `lhci`, `load`.

### 12.2 Vista de olas e hitos

| Ola | Hito | WPs en paralelo (≤ 5) |
|---|---|---|
| W0 | **M0 Fundaciones** | WP-00 Scaffold · WP-01 Marca · WP-02 Hotfix legacy |
| W1 | M0 (contratos primero) | WP-10 BD · WP-11 Contratos · WP-12 UI base · WP-13 i18n · WP-15 Markdown |
| W2 | **M1 Plataformas** | WP-20 API/worker/kernel · WP-22 Web · WP-25 UI dominio · WP-14 Datos dev + backfills · WP-24 Arnés de contrato legacy |
| W3 | **M2 Núcleo backend + compat** | WP-30 Auth · WP-31 Almacenamiento/descargas/resolver · WP-32 API legacy + KelvinSeek · WP-33 Catálogo + búsqueda · WP-34 Consola base |
| W4 | **M3 Comunidad y publicación** | WP-40 Publicación · WP-41 Comentarios + reseñas · WP-42 Follows + Kits · WP-43 Notificaciones + SSE + email · WP-44 Páginas de auth |
| W5 | **M4 Confianza y descubrimiento** | WP-50 Compatibilidad · WP-51 Moderación + admin (backend) · WP-52 Estadísticas · WP-53 Landing · WP-54 Explore y hubs |
| W6 | **M5 Páginas núcleo** | WP-60 Gamificación · WP-61 SEO/GEO + OG + CDN · WP-62 Página de mod · WP-63 Builds · WP-72 Cmd+K |
| W7 | **M6 Interactividad y contenido** | WP-70 Islas sociales · WP-71 Kits (UI) · WP-64 Perfiles y logros · WP-73 Contenido y Patch Radar · WP-74 Asistente de subida |
| W8 | **M7 Consola completa + datos** | WP-80 Basecamp · WP-81 Me, ajustes y Signals · WP-82 Ranger Station · WP-83 Admin (UI) · WP-84 Pasada R2 + metadatos |
| W9 | **M8 Endurecimiento** | WP-90 Infra/CI/runbooks · WP-91 E2E + a11y + visual · WP-92 Rendimiento · WP-93 Seguridad · WP-94 i18n y copy |
| W10 | **M9 Release candidate** | WP-A0 Ensayo de migración · WP-A1 QA de clientes legacy + sombra + carga · WP-A2 Pulido público · WP-A3 Pulido de consola · WP-A4 Documentación |
| — | **M10 Beta → Corte → Hypercare** | Operativo (§6.13), con el usuario |
| — | **M11 T1** | §12.4 |

**Camino crítico**: WP-00 → WP-10 → WP-20 → WP-31/32 → WP-A1 → corte. En paralelo corren **dos acciones del usuario**, que conviene pedir en W0: el backup y dump de la BD (A1) y la creación del repositorio y de Coolify staging (A4).

### 12.3 Paquetes de trabajo

> Formato: **Objetivo** · **Rutas propias** · **Depende de** · **Entradas** · **Entregables** · **Aceptación**. Tamaño: S ≤ 1 día-agente · M 1–3 · L 3–6.

#### W0

**WP-00 · Scaffold del monorepo, tooling y CI** (M)

- **Objetivo**: repositorio listo para trabajar en paralelo, sin fricción.
- **Rutas**: `/package.json`, `/pnpm-workspace.yaml`, `/turbo.json`, `/biome.json`, `/tsconfig.base.json`, `/.gitignore`, `/.editorconfig`, `/.nvmrc`, `/.npmrc`, `/README.md`, `/.env.example`, `packages/config/**`, esqueletos (`package.json`, `tsconfig.json` y `src/index.ts`) de `apps/{web,api,worker}` y `packages/{contracts,db,core,ui,i18n,markdown,emails}`, `tooling/scripts/**`, `ops/compose/**`, `.github/workflows/**`, `docs/adr/**` y `docs/backlog/.gitkeep`.
- **Depende de**: nada.
- **Entradas**: §2.2, §2.4, §2.6, §10.2, §11.2 y §12.1.
- **Entregables**:
  - Workspace pnpm 12 con el catálogo completo de versiones, `minimumReleaseAge: 1440` y `allowBuilds` (el `onlyBuiltDependencies` de pnpm ≤ 10).
  - Turbo con las tareas `build`, `dev`, `typecheck`, `test`, `test:int` y `e2e`.
  - Biome (con `noDangerouslySetInnerHtml` como error) y tsconfig base (§2.6).
  - `ops/compose/dev.yml` (proyecto `sotfv2`: pg 47432, seaweedfs 47333 y mailpit 47025/47080, con healthchecks).
  - Scripts `check-forbidden.ts`, `gen-registries.ts` (genérico: módulos de api, jobs de worker y barrel del esquema), `check-ownership.ts` + `ownership.json` (a partir del §12.3) y `ci-local.sh`.
  - `ci.yml` con todas las etapas del §10.2 (las que aún no existen, con `--if-present`).
  - ADR-0001 (formato) y ADR-0002 (resumen del stack → PLAN).
  - Commit inicial.
- **Aceptación**:
  - `pnpm install --frozen-lockfile && pnpm verify` en verde.
  - `pnpm infra:up` deja los 3 servicios *healthy* en esos puertos (`docker compose -p sotfv2 ps`) y `pnpm infra:down` los limpia.
  - `pnpm check:forbidden` falla con un fichero sembrado que contiene `files.sotf-mods.com` (test).
  - `pnpm check:ownership WP-00` pasa.

**WP-01 · Paquete de marca `@sotf/brand`** (M)

- **Objetivo**: los assets definitivos del §3.2 y §3.6.
- **Rutas**: `packages/brand/**`.
- **Depende de**: nada (crea su propio `package.json` según las convenciones del §2.4).
- **Entradas**: research/03 §3.A, §4.5 y §4.6, y `research/assets/03-brand/*`.
- **Entregables**:
  - Isotipo completo y simplificado; lockups horizontal y apilado (Night y Day) con el wordmark **convertido a trazados** mediante script (opentype.js + Big Shoulders Stencil 800, OFL).
  - `favicon.svg` (con `prefers-color-scheme`), los PNG 16, 32, 180, 192 y 512 y el maskable (`scripts/build-icons.ts` con sharp), `og-default.png`, `topo.svg` (generador + salida) y el sprite `field-kit.svg` (≈ 20 iconos).
  - Funciones puras `topoSvg`, `coverSvg`, `bannerSvg`, `avatarSvg` y `moonPhase`.
- **Aceptación**:
  - `pnpm --filter @sotf/brand test`: determinismo (snapshot por semilla); `topo.svg` ≤ 4,5 KB gz; sprite ≤ 6 KB gz; contraste del pin ≥ 3:1 en ambos temas.
  - `pnpm --filter @sotf/brand build:assets` reproduce los binarios de forma idéntica (hash).

**WP-02 · Hotfix legacy (parches, sin tocar los repos originales)** (M)

- **Objetivo**: arreglar ya lo peor del legacy con un riesgo mínimo.
- **Rutas**: `ops/legacy-hotfix/**`; trabajo temporal en `/tmp/sotf-legacy-hotfix/` (clones con `git clone /root/sotf-mods/sotf-mods-{api,frontend}`).
- **Depende de**: nada.
- **Entradas**: research/01 §6, §2.8 y el código legacy.
- **Entregables**: serie de parches con `git format-patch` sobre `sotf-mods-api@e0606b6` y `sotf-mods-frontend@e8ba2dc`:
  - **API**:
    - `download.ts` y `download_by_slug.ts`: sin `fetch` ni `blob`; `ModDownload` con `ip` e `agent` reales (query → `cf-connecting-ip` → primer `x-forwarded-for`; nunca `"undefined"`) + `downloads++`; **302** a `R2_PUBLIC_BASE_URL \|\| FILE_DOWNLOAD_ENDPOINT` + la clave codificada por segmento; `no-store`; versión inexistente → 404 real; host `files.sotf-mods.com` → 410.
    - Eliminar las lecturas de variables sobrantes.
    - `unapprove` → mensaje correcto.
  - **Frontend**:
    - El proxy de descarga reenvía el 302 (`redirect:'manual'`, vía `API_URL` interno si existe).
    - `og:image` y `twitter:image` por defecto → `/static/images/hd_thumbnail.png`.
    - `upload-build.js` sin `files.*`.
    - `lazyLoadImages` sin `/preview`.
    - **XSS**: `DOMPurify.sanitize` antes de cada `innerHTML` de markdown, `|safe` → `|escape` en el changelog y comentarios renderizados con `textContent`.
  - `README.md`: qué cambia, cómo aplicarlo (`git am`), despliegue en Coolify (lo hace el usuario), variables a borrar, verificación con `curl -I` y marcha atrás con `git revert`.
  - `verify.sh`.
- **Aceptación**:
  - `git am` aplica limpio en clones nuevos.
  - `bun build src/index.ts --target=bun` pasa en ambos (bun con `npx bun@1.4`).
  - `ops/legacy-hotfix/verify.sh` (compose `sotfv2-hotfix` con pg en 47440 y `bunx prisma@6.19.0 db push` sobre una BD desechable, 1 mod + versión con clave real con espacios y apóstrofo; API en 47441 y frontend en 47442) comprueba: 302 con el `Location` codificado exacto, fila `ModDownload` con una IP real, 302 a través del frontend, 404 en versión inexistente y 0 apariciones de `files.sotf-mods.com` en los árboles parcheados.
  - `git -C /root/sotf-mods/sotf-mods-api status --porcelain` vacío y HEAD sin cambios (lo mismo en frontend).

#### W1

**WP-10 · BD: esquema T0 completo, migraciones, runner y guardas** (L)

- **Objetivo**: el contrato de datos del que depende todo.
- **Rutas**: `packages/db/**` y `ops/sql/**`.
- **Depende de**: WP-00.
- **Entradas**: §6.1–§6.8, research/02 §2 y §10, y `sotf-mods-api/prisma/schema.prisma`.
- **Entregables**:
  - `migrations/0000_legacy_baseline.sql` (vía prisma@6.19.0 migrate diff) y `0001`–`00xx`: extensiones, defaults de `updatedAt`, columnas del §6.3 (incluido `ogImageKey text NULL` en `Mod`, `User` y `Kit`), todas las tablas del §6.4, funciones y triggers del §6.6, índices del §6.5 (los que dependen de backfills, con su guarda previa) y *seed* idempotente de la taxonomía (12 categorías con i18n e icono, `legacySlugs`), ≈ 40 tags curados y `LoaderRelease` RedLoader 0.8.6.
  - Esquema Drizzle `legacy/*` (con los 4 fixes) y `v2/*`; `createDb`, `withTx`, `migrate.ts`, `guard.ts` + `legacy-catalog.json` + linter de SQL, y `testing.ts` (`startTestDb`, factories).
  - `ops/sql/{roles.sql, kill-switch.sql, audit-files-host.sql}`.
- **Aceptación**:
  - `pnpm --filter @sotf/db test && pnpm --filter @sotf/db test:int`: migra desde vacío en PG16; guarda en verde; el linter rechaza un `DROP` sembrado; Drizzle coincide con el catálogo real.
  - Tests de triggers:
    - un INSERT estilo legacy en `Mod` sin `status` acaba en `pending` (y en `published` si `isApproved`);
    - `isApproved` y `status` se sincronizan en ambos sentidos;
    - semver y `emailNormalized` se rellenan.
  - `roles.sql` aplicado en el contenedor: `sotf_v2_app` no puede hacer `UPDATE "AuditLog"` y `sotf_legacy_app` no puede ejecutar DDL.
  - `pnpm db:migrate` dos veces es idempotente.

**WP-11 · Contratos `@sotf/contracts`** (M)

- **Objetivo**: los tipos compartidos de todo el sistema.
- **Rutas**: `packages/contracts/**`.
- **Depende de**: WP-00.
- **Entradas**: §5 completo, `research/fixtures/01-compat/*` y research/01 §1.2.
- **Entregables**:
  - Un fichero por dominio (`auth`, `me`, `catalog`, `versions`, `downloads`, `uploads`, `studio`, `comments`, `reviews`, `follows`, `kits`, `compat`, `notifications`, `moderation`, `admin`, `search`, `stats`, `events`, `gamification`, `seo`, `legacy`, `manifest` con el esquema del manifest de RedLoader y del blueprint de BuildShare) con DTOs Zod, contratos de endpoint y ejemplos.
  - `errors.ts` (códigos + `ProblemDTO`), `pagination.ts`, `DomainEvent` (unión tipada de todos los eventos del §2.7 y §7.3) y payloads de jobs.
  - Cliente tipado `createApiClient`.
  - Esquemas **legacy** generados desde los fixtures + `assertKeyOrder`.
- **Aceptación**: `pnpm --filter @sotf/contracts test`:
  - los 38 fixtures validan con su esquema legacy (orden de claves incluido);
  - cada DTO v2 valida su ejemplo;
  - pruebas de tipos del cliente (`expectTypeOf`);
  - el OpenAPI generado desde los contratos es válido (validador OpenAPI 3.1).

**WP-12 · UI base `@sotf/ui`** (L)

- **Objetivo**: tokens, fuentes y primitivas accesibles.
- **Rutas**: `packages/ui/**`, salvo `src/domain/**` y `playground/domain/**`.
- **Depende de**: WP-00 y WP-01.
- **Entradas**: §3 de este plan y research/03 §4.4 (tokens **literales**), §5.1, §5.4, §5.6 y §5.7.
- **Entregables**:
  - `src/tokens.css`, `src/fonts.css` (Fontsource + fallbacks con fontaine) y el script de tema inline + ThemeToggle.
  - Primitivas del §3.9 (WP-12) sobre Base UI, `cn()` y los iconos (Lucide + Field kit).
  - *Playground* Vite (`pnpm --filter @sotf/ui playground`, puerto 47350) con cada componente en ambos temas.
- **Aceptación**:
  - `pnpm --filter @sotf/ui test`: render SSR (`renderToString`) de todas las primitivas; test de contraste que recalcula los pares de research/03 §4.1 (≥ umbral); interacción por teclado (Testing Library) en Dialog, Menu, Tabs y Combobox.
  - `pnpm --filter @sotf/ui build:css` sin avisos.
  - Importar solo `Button` pesa ≤ 3 KB br (test de *tree-shaking*).

**WP-13 · i18n `@sotf/i18n`** (M)

- **Objetivo**: 13 locales con namespaces sin conflictos.
- **Rutas**: `packages/i18n/**`.
- **Depende de**: WP-00.
- **Entradas**: §4.1, §7.11, research/03 §4.8 y `sotf-mods-frontend/src/translations/*` (glosario).
- **Entregables**:
  - Proyecto inlang/Paraglide 2 con merge de `messages/<ns>/<locale>.json` → `.generated`.
  - Utilidades: `locales`, `toHreflang`, `fromLegacyLangCookie` (`ch`→`zh`, `se`→`sv`, `pt`→`pt`), `localizePath` y `stripLocale`.
  - Formateadores `Intl`.
  - `i18n:check` e `i18n:pseudo`.
  - `legacy/*.json` (importados como glosario).
  - Namespaces base `common`, `errors` y `meta` en los 13 locales.
- **Aceptación**:
  - `pnpm --filter @sotf/i18n test`: locale por petición con AsyncLocalStorage; un mensaje importado no arrastra el resto (tamaño).
  - `pnpm i18n:check` en verde.

**WP-15 · Markdown seguro `@sotf/markdown`** (M)

- **Objetivo**: un pipeline único, sin XSS.
- **Rutas**: `packages/markdown/**`.
- **Depende de**: WP-00.
- **Entradas**: §9.1, §7.6 y research/04 §4.13.
- **Entregables**:
  - `renderMarkdown(md, {profile:'full'|'lite'|'legacyHtml', resolveMention?})` → `{html, text, headings, links, images, mentions}`.
  - Alertas GFM `[!NOTE]`, `[!TIP]`, `[!WARNING]` y `[!CAUTION]`; YouTube como *facade*; `rel` en enlaces externos; anclas en los títulos; spoilers `||x||`.
  - `decodeEntities`, `escapeForLegacy` y `RENDER_VERSION`.
- **Aceptación**: `pnpm --filter @sotf/markdown test`:
  - corpus de ≥ 150 vectores XSS y mXSS (0 escapes);
  - las 24 descripciones legacy con HTML crudo (sacadas del snapshot) se renderizan sin perder estructura;
  - Unicode y emoji se conservan;
  - benchmark: 20 KB en < 15 ms.

#### W2

**WP-20 · Plataforma API + worker + kernel de core** (L)

- **Objetivo**: el esqueleto de servidor sobre el que se enchufan los dominios.
- **Rutas**:
  - `apps/api/**` salvo `src/modules/*/` de dominio y `src/legacy/**`;
  - `apps/worker/**` salvo `src/jobs/*/` de dominio;
  - `packages/core/{package.json, src/index.ts, src/kernel/**}`;
  - `packages/emails/{package.json, src/layout/**}`.
- **Depende de**: WP-10 y WP-11.
- **Entradas**: §2.6, §2.7, §2.9, §5.1, §5.3 y §5.4.
- **Entregables**:
  - `buildApp()`, `env.ts` y los plugins: cookie, helmet, CORS por grupo de rutas, rate-limit con *buckets* con nombre, etag, under-pressure, errores RFC 9457 + variante de sobre legacy para `/api/*`, contexto de petición, CSRF con Fetch Metadata, hook interno, `sessionResolver` enchufable (null por defecto), Zod type provider, swagger + Scalar en `/api/docs`.
  - `defineModule` + registro generado, `/healthz` y `/readyz`, *hub* SSE (una conexión LISTEN + reparto por canal + la ruta `/api/v2/stream` con autenticación) y apagado ordenado.
  - Entradas finas `src/migrate.ts` y `src/backfill.ts`.
  - Worker: pg-boss (`migrate:false`), `defineJob` + registro, programaciones, servidor de salud y helper `LEGACY_COEXIST`.
  - Kernel: `DomainError`, `Ctx`, `emit(tx, event)` (pg-boss en la transacción), `enqueue`, uuidv7, `ipHash` con sal diaria, reloj, logger, helpers de `cacheTags`, `purge()` y LRU con invalidación por NOTIFY.
  - Layout base de React Email.
  - `buildTestApp()`.
- **Aceptación**:
  - `pnpm --filter @sotf/api test:int`: 404 y 422 en `problem+json`; POST cross-site → 403; 429 al exceder un *bucket*; handshake SSE + ping; `openapi.json` servido.
  - `pnpm --filter @sotf/worker test:int`: un job se registra y se ejecuta; un `emit` dentro de una transacción revertida no encola nada.
  - `pnpm --filter @sotf/api build && node apps/api/dist/server.js` responde 200 en `/healthz`.

**WP-22 · Plataforma web (Astro)** (L)

- **Objetivo**: layout, i18n, caché de borde, SEO base, errores y scripts transversales.
- **Rutas**:
  - `apps/web/{astro.config.mjs, package.json, tsconfig.json}`;
  - `apps/web/src/{layouts,components/layout,lib,middleware}/**`;
  - `apps/web/src/pages/{404.astro, 500.astro, healthz.ts, ads.txt.ts, _internal/**}`;
  - `apps/web/src/scripts/{theme,lang-suggest,consent,ads,beacon,account-hint,seasonal,moon,legacy-cleanup,view-transitions}.ts`;
  - `apps/web/public/**`;
  - *stubs*: `src/components/account/HeaderAccount.astro` (→ WP-44), `src/islands/signals/Bell.tsx` (→ WP-81), `src/islands/cmdk/Trigger.ts` (→ WP-72) y `src/console/routes/__root.tsx` + `index.tsx` (→ WP-34).
- **Depende de**: WP-11, WP-12 y WP-13.
- **Entradas**: §2.5, §2.7, §4.1, §4.5, §4.6 (reglas genéricas), §8 y research/03 §5.4.
- **Entregables**:
  - Configuración de Astro 7: node standalone, React, Tailwind vite, TanStack router plugin (`src/console/routes`), `i18n.routing:'manual'`, CSP con el módulo de WP-93 (placeholder) y `trailingSlash:'never'`.
  - **Spike de i18n** (plan B documentado en un ADR si falla).
  - *Provider* de caché `cloudflareTags()` (cabeceras + LRU + `invalidate`).
  - `SeoHead` (title, description, canonical, hreflang, OG, `theme-color`, JSON-LD con `schema-dts`) y `Picture`.
  - Header (con un hueco reservado para la cuenta), Footer (aviso, fase lunar, idiomas y redes) y MobileTabBar.
  - Middleware de redirecciones genéricas: barra final, rutas estáticas legacy, era 2023, `/loader`, `/upload*`, `/logout`, `/404` y `/@handle` → `/profile/:handle`. El `.json` → oEmbed es de WP-61 y el mapeo de parámetros de `/mods?…`, de WP-54.
  - Scripts: tema, sugerencia de idioma, consentimiento, anuncios y *beacon* (§8.5).
  - Limpieza de los tokens legacy + banner, nieve de diciembre y *boot hook* de purga tras el despliegue.
- **Aceptación**:
  - `pnpm --filter @sotf/web build`.
  - `pnpm --filter @sotf/web test`: tabla de redirecciones del middleware, *rewrite* de locale, cabeceras de caché y ausencia de `Set-Cookie` en lo público.
  - `pnpm e2e --grep @platform`: `/nope` → 404 con `lang` correcto; `/es/nope` → `lang="es"`; sin FOUC de tema; `/ads.txt` idéntico; hreflang con 13 + `x-default`.
  - LHCI sobre la 404: perf ≥ 0,98, a11y, SEO y best-practices = 1 y JS ≤ 15 KB br.

**WP-25 · Componentes de dominio `@sotf/ui/domain`** (L)

- **Objetivo**: tarjetas y piezas de marca reutilizables en Astro (SSR) y en la consola.
- **Rutas**: `packages/ui/src/domain/**` y `packages/ui/playground/domain/**`.
- **Depende de**: WP-11 y WP-12.
- **Entradas**: §3.9 (WP-25) y research/03 §5.2, §5.3, §5.8 y §5.9.
- **Entregables**: los componentes de la lista, tipados con los DTOs y los ejemplos de contracts, seguros en SSR, con todos sus estados y variantes, y sus páginas de *playground*.
- **Aceptación**: `pnpm --filter @sotf/ui test` (render SSR sin `window`; snapshots de marcado; el umbral de container query de ModCard; `CompatBadge` siempre con icono + texto; `AdSlot` con `min-height`); el *playground* se construye.

**WP-14 · Datos de desarrollo, seed y backfills B1–B14** (L)

- **Objetivo**: datos realistas en local y migración de datos reproducible.
- **Rutas**: `tooling/migration/**` (salvo `backfills-r2/**` y `rehearsal/**`).
- **Depende de**: WP-10.
- **Entradas**: §6.9, §6.11, §6.12 y research/02 §8 y §14.
- **Entregables**:
  - Paquete `@sotf/migration-tools`: `legacy/schema.prisma` (copia), `snapshot/public-api-2026-09-29/` (copia), cargador del seed, generador sintético con `COPY`, inyección de casos raros.
  - SQL `profile`, `verify-snapshot`, `anonymize` e `invariants`.
  - Backfills B1–B14 con marcas de agua, lotes, `MigrationRun`, `DataFixAudit` y `--dry-run`.
  - CLI de los scripts `db:*` y `admin:grant` (§12.1) y `replay-delta.ts`.
- **Aceptación**:
  - `pnpm db:reset:dev && pnpm db:seed:dev` en < 10 min con los recuentos exactos: 3.883 usuarios, 257 mods, 612 versiones, 278 comentarios, favoritos (234 + los duplicados inyectados) y 1.977.059 descargas.
  - `pnpm db:backfill --all` dos veces da el mismo `verify-snapshot`.
  - `pnpm db:invariants` en verde.
  - El diff solo muestra los fixes esperados.
  - `pnpm db:seed:dev --small` en < 60 s.

**WP-24 · Arnés de contrato legacy** (M)

- **Objetivo**: poder demostrar que no rompemos RedManager, UpdatesChecker ni KelvinSeek.
- **Rutas**: `tooling/legacy-contract/**`.
- **Depende de**: WP-00 y WP-11.
- **Entradas**: research/01 §1.2, §1.3, §2, §6 y §7 y los fixtures.
- **Entregables**:
  - Fixtures + `INDEX.tsv`, normalizador (campos volátiles + desviaciones del §5.5) y comparador con orden de claves.
  - CLI `pnpm contract:legacy --base-url <url>`.
  - Checker .NET (Dockerfile con `mcr.microsoft.com/dotnet/sdk:10.0`, el DTO en C# y Newtonsoft).
  - Test del flujo de RedManager (tipos de `mods.ts` y un cliente sin UA que no mira el status y sigue los 302).
  - Tests de KelvinSeek y de los casos de descarga.
  - Modo sombra (`--compare-with https://api.sotf-mods.com`, solo GET de T1 y T2 de lectura, ≤ 2 rps).
- **Aceptación**:
  - Contra un servidor simulado que reproduce los fixtures: 100 % en verde.
  - El checker .NET acepta los fixtures y **falla** con un fixture mutado (`downloads: null`).
  - `pnpm --filter @sotf/legacy-contract test`.

#### W3

**WP-30 · Autenticación, cuentas, permisos y email** (L)

- **Rutas**:
  - `packages/core/src/{auth,accounts,email,permissions}/**`;
  - `apps/api/src/modules/{auth,me,account}/**`;
  - `apps/worker/src/jobs/{email,accounts}/**`;
  - `packages/emails/src/{auth,account}/**`;
  - `packages/i18n/messages/emails-auth/**`.
- **Depende de**: WP-20 y WP-14 (seed).
- **Entradas**: §5.2 (cuenta), §6.10, §7.1 (T0-13, T0-14 y T0-22) y §9.
- **Entregables**:
  - Verificación y rehash de contraseñas con semáforo; sesiones y `sessionResolver`.
  - Registro, login, logout, verificación, olvidé y restablecer (incluida la ventana legacy de 24 h), cambio de email y de contraseña, sesiones, exportar y borrar, `/me`, `/me/summary` y `/me/home` (su parte base).
  - Turnstile e HIBP (k-anonimato, *fail-open* con timeout de 2 s).
  - `can()`, `EmailOutbox` + transportes (Resend, Mailpit y allowlist) y los jobs `email.send`, `account.export`, `account.delete`, `cleanup.sessions` y `trustLevel` nocturno.
  - Plantillas de email de autenticación en 13 locales.
- **Aceptación**: `pnpm --filter @sotf/api test:int -- auth`:
  - login con hashes **generados con Bun** (fixtures en el repo, creados con `npx bun@1.4`) argon2id y `$2b$10$` → rehash a argon2id;
  - error genérico con un tiempo dentro de ±20 %;
  - revocaciones; `pwdFingerprint`;
  - Mailpit recibe la verificación;
  - la exportación contiene el JSON esperado;
  - el borrado tras la gracia anonimiza;
  - tabla de `can()` en verde.

**WP-31 · Almacenamiento R2, subidas, descargas y resolver** (L)

- **Rutas**:
  - `packages/core/src/{storage,uploads,downloads,resolve}/**`;
  - `apps/api/src/modules/{uploads,downloads,resolve}/**`;
  - `apps/api/src/legacy/downloads/**`;
  - `apps/web/src/pages/mods/[user]/[slug]/download/**`;
  - `apps/worker/src/jobs/{uploads,downloads}/**`;
  - `tooling/load/downloads.*`.
- **Depende de**: WP-20 y WP-14.
- **Entradas**: §2.8, §4.6, §5.2, §6.8 y research/01 §4.3 y §6.
- **Entregables**:
  - Cliente S3 (R2 y SeaweedFS), presign PUT con cabeceras firmadas, `complete`, finalizar (`CopyObject` entre buckets o en streaming) y *encoder* de claves.
  - Resolver canónico + `GET /api/v2/resolve`.
  - Descarga con buffer y *flush* (ModDownload + agregados + contadores + unicidad), filtro de bots, HEAD, Range, límite sin bloqueo, 410 y 404.
  - Endpoint web de descarga (proxy del 302), alias legacy de descarga y `GET /api/v2/me/downloads` y `DELETE`.
  - Limpieza de subidas caducadas.
- **Aceptación**: `pnpm --filter @sotf/api test:int -- downloads uploads resolve`:
  - `Location` exacto con espacio, apóstrofo, `+`, `()` y `/`;
  - HEAD, `Range: bytes=100-` y bots no cuentan; el UA vacío sí;
  - la petición 61 por minuto redirige pero no cuenta;
  - filas y agregados correctos; *flush* al recibir SIGTERM;
  - resolver: todas las reglas + los 5 enlaces de research/01 §4.4 sobre el seed;
  - subida contra SeaweedFS con el tipo equivocado → 403 y tamaño que no coincide → rechazo.
  - `pnpm e2e --grep @download`.
  - `pnpm load downloads`: p95 < 60 ms.

**WP-32 · API legacy (T1, T2 y T3) + KelvinSeek** (L)

- **Rutas**:
  - `apps/api/src/legacy/**` (salvo `downloads/`);
  - `packages/core/src/{legacy,kelvinseek}/**`;
  - `apps/worker/src/jobs/kelvinseek/**`;
  - `apps/api/test/legacy/**`.
- **Depende de**: WP-20, WP-14 y WP-24.
- **Entradas**: §5.5, research/01 §2 y §3 y `sotf-mods-api/src/api/{mods,kelvinseek,general,users,categories}/*` (solo lectura).
- **Entregables**:
  - Rutas T1 y T2 con serializadores de orden exacto; T3 → 410.
  - CORS legacy, cabeceras de caché y de deprecación, registro de UA y Origin, alias snake_case detrás de *flag* y el host `sotf-mods.com/api/*`.
  - KelvinSeek: comandos, *prompt* y *fallback* copiados literalmente, OpenAI con timeout, presupuesto, hash de `chat_id`, recorte que conserva los 32 más recientes, `KelvinUsageDaily` y limpieza a 30 días (solo de las filas hasheadas).
- **Aceptación**:
  - `pnpm contract:legacy --base-url http://127.0.0.1:47301` sobre el seed: 38/38 en verde (desviaciones solo documentadas).
  - El checker .NET y el flujo de RedManager en verde contra la API local.
  - Tests de KelvinSeek con OpenAI simulado: formato, *fallback* por timeout y por presupuesto, recorte.
  - Cada ruta T3 → 410 con el sobre exacto; preflight 204.

**WP-33 · Catálogo, búsqueda y lecturas públicas** (L)

- **Rutas**: `packages/core/src/{catalog,search}/**` y `apps/api/src/modules/{catalog,search,site}/**`.
- **Depende de**: WP-20, WP-14 y WP-15.
- **Entradas**: §5.2 (catálogo), §6.8, §7.1 (T0-03, T0-06, T0-09 y T0-30) y §7.9.
- **Entregables**:
  - `GET /mods` con facetas, filtros de inclusión y exclusión, ordenaciones y conteos.
  - Detalle (reglas de estado y NSFW), versiones semver, dependencias y dependientes, relacionados, serie pública de descargas, categorías, tags, creadores, usuarios (con privacidad), `site/stats`, `live/pulse`, `search` (FTS + trgm) y `search/index`.
  - LRU, ETag y cache tags.
- **Aceptación**: `pnpm --filter @sotf/api test:int -- catalog search`:
  - por defecto sin los `pending`; SonsAxLib en `type=library` y `all`;
  - BuildShare 1.0.10 > 1.0.2;
  - facetas correctas;
  - «stak mod» encuentra StackMod en el top 3 y «kelvn» encuentra mods de Kelvin;
  - `pnpm load catalog`: p95 < 50 ms;
  - el índice de Cmd+K ocupa ≤ 15 KB br en cada locale.

**WP-34 · Plataforma de la consola SPA** (M)

- **Rutas**:
  - `apps/web/src/console/**` (raíz, router, `lib`, layout, guard y hooks);
  - `apps/web/src/pages/{basecamp,me,ranger,settings}/[...path].astro`;
  - `apps/web/src/pages/signals.astro`;
  - `packages/i18n/messages/console/**`.
- **Depende de**: WP-22.
- **Entradas**: §2.5, §4.3, §5.3 y research/03 §6.9–§6.12.
- **Entregables**:
  - `ConsoleApp` (QueryClient, Router con `defaultPreload:'intent'` y `autoCodeSplitting`) y *shell* con barra lateral por área (colapsable en tablet, menú en móvil).
  - Guard de autenticación (`/login?next=`), `useMe`, `useStream` (SSE → `invalidateQueries`), límites de error, toasts, atajos, recarga ante errores de chunk y rutas vacías con EmptyState.
- **Aceptación**:
  - `pnpm e2e --grep @console-shell`: sin sesión → redirección; con sesión → *shell*; tamaños (*shell* ≤ 120 KB br y ruta ≤ 60 KB br); reconexión SSE simulada.

#### W4

**WP-40 · Publicación: borradores, versiones, inspección y media** (L)

- **Rutas**:
  - `packages/core/src/{publishing,media,inspection,builds}/**`;
  - `apps/api/src/modules/{drafts,studio-mods}/**`;
  - `apps/worker/src/jobs/{media,inspection,builds}/**`;
  - `packages/contracts/src/{studio,manifest}.ts` (solo aditivo).
- **Depende de**: WP-31, WP-33 y WP-15.
- **Entradas**: §2.8, §5.2 (publicación), §7.1 (T0-04, T0-09, T0-19 y T0-24), §7.4 (checks) y §7.5.
- **Entregables**:
  - Borradores (autoguardado y `submit`), endpoints `studio/mods*` (ficha, media, versiones, *yank* y transiciones del autor).
  - `inspection.run` (yauzl sobre un *reader* aleatorio con Range de R2, sin cargar el zip): zip bomb, zip slip, extensiones, manifest, semver y `VersionInspection`.
  - `media.process` (variantes, thumbhash, EXIF), `build.extract` (miniatura, `buildMeta`) y finalización con metadatos.
  - Escrituras compatibles con legacy (`downloadUrl`, `filename`, `extension`, cambio de `isLatest` en la transacción, `latestVersion`, `lastReleasedAt`, CSV de `dependencies`, `type` y texto escapado).
  - `ModDependency`, eventos y purgas.
  - Fetch anti-SSRF para las imágenes remotas.
- **Aceptación**: `pnpm --filter @sotf/api test:int -- publishing` con zips de fixture (válido, bomb, slip, con `.exe`, manifest roto, semver menor) y resultados esperados:
  - la build JSON extrae miniatura y `buildMeta`;
  - las variantes tienen los anchos y formatos correctos y sin EXIF;
  - **el mod recién publicado se sirve por `/api/mods/:mod_id` con la forma legacy** (comparador de forma de WP-24);
  - un único `isLatest`.

**WP-41 · Comentarios y reseñas (backend)** (L)

- **Rutas**: `packages/core/src/{comments,reviews,mentions}/**` y `apps/api/src/modules/{comments,reviews}/**`.
- **Depende de**: WP-30, WP-31 y WP-15.
- **Entradas**: §5.2 (comunidad), §7.6, §7.7 y §6.8.
- **Entregables**: CRUD, hilos, reacciones, menciones (evento), fijar, solución, bug resuelto, historial de ediciones, borrado suave, imágenes (subidas de comentario → Media), límites y retención de enlaces por confianza; reseñas con votos, respuesta del autor, descarga verificada, Wilson y bayes, contadores en la transacción y columnas legacy escapadas con `isHidden` explícito.
- **Aceptación**: `pnpm --filter @sotf/api test:int -- comments reviews`:
  - las reglas y permisos del §7.6 y §7.7;
  - los vectores XSS quedan inertes;
  - emoji, cirílico y umlauts se conservan de ida y vuelta;
  - el `GET /api/comments?mod_id=` legacy muestra el comentario nuevo escapado;
  - media y contadores del mod correctos.

**WP-42 · Follows y Kits (backend)** (M)

- **Rutas**: `packages/core/src/{follows,kits}/**` y `apps/api/src/modules/{follows,kits}/**`.
- **Depende de**: WP-30 y WP-33.
- **Entradas**: §5.2, §7.8 y §6.8.
- **Entregables**: follow de mods (`ModFavorite` + `notify`), follow de usuarios, mochila con `hasUpdate` y compatibilidad; Kits (CRUD, orden, dependencias automáticas, conflictos, código, *fork*, revisiones y resumen multijugador y de compatibilidad).
- **Aceptación**: `pnpm --filter @sotf/api test:int -- follows kits`: dos follows concurrentes → 1 fila; `favoritesCount` coherente; códigos únicos; visibilidad privada, oculta y pública respetada.

**WP-43 · Notificaciones, SSE, emails y Discord** (L)

- **Rutas**:
  - `packages/core/src/{notifications,realtime,discord}/**`;
  - `apps/api/src/modules/{notifications,unsubscribe}/**`;
  - `apps/worker/src/jobs/{notifications,digests,discord,legacy-mentions}/**`;
  - `packages/emails/src/{notifications,digests,creator}/**`;
  - `packages/i18n/messages/emails-notify/**`.
- **Depende de**: WP-30 y WP-20.
- **Entradas**: §7.3, §5.3 y §6.9 (B18).
- **Entregables**:
  - Consumidores de todos los eventos del §7.3 (contra los tipos de `DomainEvent`; los productores que aún no existen se simulan en los tests).
  - Agrupación, preferencias con sus valores por defecto, publicación por SSE, resúmenes (10 min, diario y semanal) y desuscripción en un clic (RFC 8058, token firmado).
  - Vaciado de `PendingMention` (solo con `LEGACY_COEXIST=false`), anunciante de Discord e informe semanal del creador.
- **Aceptación**: `pnpm --filter @sotf/worker test:int -- notifications` con Mailpit:
  - una mención genera el email dentro de la ventana;
  - una preferencia apagada no envía nada;
  - el resumen diario agrega;
  - el POST de desuscripción funciona;
  - SSE entrega en < 1 s;
  - *snapshot* del payload de Discord;
  - el vaciado de `PendingMention` respeta el *flag*.

**WP-44 · Páginas de autenticación y cuenta en la cabecera** (M)

- **Rutas**:
  - `apps/web/src/pages/{login,register,forgot-password,reset-password,verify-email,logout}.*`;
  - `apps/web/src/islands/auth/**`;
  - `apps/web/src/components/account/**`;
  - `packages/i18n/messages/auth/**`.
- **Depende de**: WP-22 y WP-30.
- **Entradas**: research/03 §6.13, §7.1 (T0-13) y §9.1.
- **Entregables**: formularios (medidor de contraseña, Turnstile, errores accesibles), allowlist de `?next=`, toasts de los *flags* legacy, isla de cuenta en la cabecera (usa la pista `sotf_li` → `/me/summary`) y cierre de sesión.
- **Aceptación**:
  - `pnpm e2e --grep @auth`: registro → verificación por Mailpit → login → avatar en la cabecera; login con un usuario del seed con hash de Bun; error genérico; mensaje del límite de intentos; restablecimiento; axe sin incidencias.
  - `pnpm lhci --preset auth`.

#### W5

**WP-50 · Compatibilidad y Patch Radar (backend)** (M)

- **Rutas**: `packages/core/src/compat/**`, `apps/api/src/modules/{compat,ecosystem}/**` y `apps/worker/src/jobs/compat/**`.
- **Depende de**: WP-31, WP-33 y WP-43.
- **Entradas**: §7.10 y §5.2.
- **Entregables**: CRUD de builds del juego, versiones del loader y ecosistema (rutas admin dentro del módulo); reportes; pesos; `compat.aggregate`; `possiblyOutdated`; `Mod.compatStatus`; `/patch-radar`; reconocimiento de reportes; `GET /me/compat-prompts`; eventos.
- **Aceptación**: `pnpm --filter @sotf/api test:int -- compat`: umbrales, ponderación y desactualizado; una build `isBreaking` emite los eventos; orden del top 50.

**WP-51 · Moderación, reportes, sanciones, auditoría y admin (backend)** (L)

- **Rutas**:
  - `packages/core/src/{moderation,reports,sanctions,audit,security-scan,admin,announcements,settings}/**`;
  - `apps/api/src/modules/{ranger,admin,reports,announcements}/**`;
  - `apps/worker/src/jobs/{security-scan,moderation}/**`.
- **Depende de**: WP-40, WP-41 y WP-43.
- **Entradas**: §7.4 y §5.2 (moderación).
- **Entregables**:
  - Carriles de la cola, ítem con diff de ficheros, decisiones y transiciones, carril de post-revisión y autoocultación por reportes.
  - Sanciones, cambios de rol y del *flag* de creador verificado, reautenticación < 12 h y `AuditLog` (utilidad de core usada por todos).
  - VirusTotal con *throttle*.
  - Taxonomía y recategorización masiva (sugerencias por reglas), anuncios y ajustes.
- **Aceptación**: `pnpm --filter @sotf/api test:int -- ranger admin`: matriz de permisos; VirusTotal simulado; decisiones → notificaciones, purgas y `AuditLog`; `UPDATE` sobre `AuditLog` con el rol de la app → error.

**WP-52 · Estadísticas, analítica, tendencias y contadores legacy** (L)

- **Rutas**: `packages/core/src/{stats,analytics,trending}/**`, `apps/api/src/modules/{events,studio-analytics,live}/**` y `apps/worker/src/jobs/{stats,legacy-counters,cleanup}/**`.
- **Depende de**: WP-31 y WP-33.
- **Entradas**: §7.5 (analíticas), §9.3 y §6.8.
- **Entregables**:
  - *Beacon* `/e` y `/e/vitals` (hash del visitante, bots, GPC y DNT).
  - `stats.rollup`, `ModStats`, `UserStats`, `SiteStat`, `stats.trending`, endpoints de analíticas del creador + CSV, `legacy.counters` (sin tocar `updatedAt`), visitantes de `live/pulse`, agregación RUM y limpiezas.
- **Aceptación**: `pnpm --filter @sotf/worker test:int -- stats`: los rollups coinciden con el cálculo en crudo e idempotentes; `legacy.counters` da los mismos valores que la fórmula del cron legacy sobre el seed; CSV válido.

**WP-53 · Landing** (M)

- **Rutas**:
  - `apps/web/src/pages/index.astro`;
  - `apps/web/src/components/landing/**`;
  - `apps/web/src/islands/landing/**`;
  - `apps/web/src/content/faq/**`;
  - `packages/i18n/messages/landing/**`.
- **Depende de**: WP-22, WP-25 y WP-33.
- **Entradas**: §7.1 (T0-05) y research/03 §5.10 y §6.1.
- **Entregables**: todas las secciones, *ticker* y pins en vivo (sondeo de `live/pulse`), bloque personal (isla), FAQ en 13 locales y JSON-LD.
- **Aceptación**:
  - `pnpm e2e --grep @landing`.
  - `pnpm lhci --preset landing`: perf ≥ 0,95 en PR; el LCP es el h1; CLS 0; JS ≤ 15 KB.
  - JSON-LD válido; axe sin incidencias.

**WP-54 · Explore, listados, hubs y búsqueda (páginas)** (L)

- **Rutas**:
  - `apps/web/src/pages/{mods/index.astro, builds/index.astro, categories/**, tags/**, best/**, search.astro}`;
  - `apps/web/src/components/explore/**`;
  - `apps/web/src/scripts/explore/**`;
  - `apps/web/src/content/best/**`;
  - `packages/i18n/messages/explore/**`.
- **Depende de**: WP-22, WP-25 y WP-33.
- **Entradas**: §4.2, §4.6 (parámetros de consulta legacy), §7.1 (T0-06) y research/03 §6.2.
- **Entregables**: facetas con inclusión y exclusión, ordenación, vistas, paginación + «Cargar más», reglas de `noindex` y canonical, redirecciones 301 de los parámetros legacy (en la página, porque el mapeo de `category` necesita datos) e intros de los hubs.
- **Aceptación**:
  - `pnpm e2e --grep @explore`: cada fila del mapa de parámetros legacy y las exclusiones.
  - `pnpm lhci --preset explore`; axe sin incidencias.

#### W6

**WP-60 · Gamificación** (M)

- **Rutas**: `packages/core/src/gamification/**`, `apps/api/src/modules/{badges,awards,onboarding}/**` y `apps/worker/src/jobs/gamification/**`.
- **Depende de**: WP-41, WP-42, WP-50 y WP-52.
- **Entradas**: §7.2.
- **Entregables**: sincronización del catálogo de insignias, motor de XP (consumidores y topes), rangos y tiers, hitos (retroactivos), Mod of the Week, premios (admin), checklist de onboarding y B16.
- **Aceptación**: `pnpm --filter @sotf/worker test:int -- gamification`: cada regla y cada tope; B16 sobre el seed es idempotente (el autor de Axel's Mod Menu queda en Treehouse); filtros de Mod of the Week.

**WP-61 · SEO/GEO, OG, feeds, IndexNow y purga de CDN** (L)

- **Rutas**:
  - `apps/web/src/pages/{sitemap.xml.ts, sitemaps/**, robots.txt.ts, llms.txt.ts, llms-full.txt.ts, feed.xml.ts, oembed.ts, embed/**, [indexnow].txt.ts, .well-known/**}`;
  - `apps/web/src/pages/mods/[user]/[slug].{md,json}.ts`, `apps/web/src/pages/mods/[user]/[slug]/feed.xml.ts` y `apps/web/src/pages/builds/[user]/[slug].md.ts`;
  - `apps/web/src/pages/builds/feed.xml.ts`, `apps/web/src/pages/categories/[slug]/feed.xml.ts`, `apps/web/src/pages/profile/[handle]/feed.xml.ts` y `apps/web/src/pages/profile/[handle].md.ts`;
  - `packages/core/src/{seo,og,cdn}/**`;
  - `apps/api/src/modules/internal-cdn/**`;
  - `apps/worker/src/jobs/{og,cdn,indexnow}/**`.
- **Depende de**: WP-33, WP-22 y WP-40.
- **Entradas**: §2.7 (purga), §4.4, §4.5, §8.6 y §8.7.
- **Entregables**: todos los endpoints de máquina, `og.render` (satori → sharp, fuentes woff/ttf), `cdn.purge` (debounce, API de Cloudflare, invalidación del LRU web y NOTIFY), `indexnow.ping`, `/internal/cdn/purge` y FAQ por mod generada a partir de los hechos (plantillas i18n).
- **Aceptación**: `pnpm --filter @sotf/web test -- seo` y `pnpm --filter @sotf/worker test:int -- og cdn`:
  - el XML del sitemap valida con el XSD, incluye todos los locales y un `lastmod` real;
  - `robots.txt` exacto;
  - RSS válido;
  - oEmbed conforme a la especificación;
  - OG de 1200×630 y < 100 KB;
  - las purgas se agrupan (API de Cloudflare simulada).

**WP-62 · Página de mod (pública)** (L)

- **Rutas**:
  - `apps/web/src/pages/mods/[user]/[slug]/{index.astro, versions/**, reviews.astro}`;
  - `apps/web/src/components/mod/**`;
  - `apps/web/src/scripts/mod/**`;
  - `packages/i18n/messages/mod/**`.
- **Depende de**: WP-22, WP-25, WP-31, WP-33, WP-41 y WP-50.
- **Entradas**: §7.1 (T0-08, T0-09 y T0-30), §4.5 y research/03 §6.3.
- **Entregables**:
  - Cabecera, galería, descarga dividida, modal de instalación, hoja de dependencias, compartir, follow ♥ (vanilla), cápsula de compatibilidad, prosa, notas de campo, *Required by* e *In Kits*, relacionados.
  - Primera página de reseñas y comentarios en SSR + puntos de montaje para WP-70.
  - Banners de estado, *interstitial* NSFW, subpáginas de versiones y reseñas, JSON-LD y 301/404/410 con `/resolve`.
- **Aceptación**:
  - `pnpm e2e --grep @mod-page`: estructura, 301 del resolver, 404 y 410, ruta de descarga, modal accesible, barra fija en móvil.
  - `pnpm lhci --preset mod`: HTML ≤ 50 KB br y JS ≤ 15 KB.
  - JSON-LD válido (`aggregateRating` solo con ≥ 3); axe sin incidencias.

**WP-63 · Builds (páginas)** (M)

- **Rutas**:
  - `apps/web/src/pages/builds/[user]/[slug]/**` (salvo `.md`);
  - `apps/web/src/components/builds/**`;
  - `packages/i18n/messages/builds/**`.
- **Depende de**: WP-22, WP-25, WP-33 y WP-40.
- **Entradas**: §7.1 (T0-24) y research/03 §6.6.
- **Entregables**: detalle con estética Blueprint, ficha técnica, «Cómo importar (3 pasos)», tamaño S/M/L/XL, autor original y JSON-LD `CreativeWork`.
- **Aceptación**: `pnpm e2e --grep @builds`; `pnpm lhci --preset build`; axe sin incidencias.

**WP-72 · Cmd+K** (M)

- **Rutas**: `apps/web/src/islands/cmdk/**` y `packages/i18n/messages/cmdk/**`.
- **Depende de**: WP-22 y WP-33.
- **Entradas**: §7.1 (T0-07), §7.9 y research/03 §5.5.
- **Entregables**: paleta cmdk + MiniSearch (carga diferida del índice), scopes, vista previa con descarga, acciones y pantalla completa en móvil.
- **Aceptación**: `pnpm e2e --grep @cmdk` (teclado, erratas, mod exacto primero); isla ≤ 25 KB br + índice ≤ 15 KB br; en la primera carga no se descarga nada de Cmd+K (test de red).

#### W7

**WP-70 · Islas sociales: comentarios, reseñas y reporte de campo** (L)

- **Rutas**:
  - `apps/web/src/islands/{comments,reviews,compat}/**`;
  - `apps/api/src/modules/markdown-preview/**`;
  - `packages/i18n/messages/social/**`.
- **Depende de**: WP-62, WP-41 y WP-50.
- **Entradas**: §7.6, §7.7, §7.10 y research/03 §5.8.
- **Entregables**:
  - Comentarios: lista, orden, paginación, editor con barra y vista previa (`POST /api/v2/markdown/preview`), reacciones, autocompletado de menciones, editar y borrar, controles del autor, reportar, optimismo con deshacer.
  - Reseñas: estrellas como radio group, votos y respuesta.
  - Modal de reporte de campo en 2 pasos + aviso «¿Funcionó?».
- **Aceptación**: `pnpm e2e --grep @social`; tamaño (comentarios ≤ 35 KB br sin contar React); axe; recorrido completo por teclado.

**WP-71 · Kits: páginas públicas y editor** (M)

- **Rutas**:
  - `apps/web/src/pages/{kits/**, k/**}`;
  - `apps/web/src/components/kits/**`;
  - `apps/web/src/console/routes/me/kits/**`;
  - `apps/web/src/console/features/kits/**`;
  - `packages/i18n/messages/kits/**`.
- **Depende de**: WP-42, WP-34 y WP-25.
- **Entradas**: §7.8 y research/03 §6.5.
- **Entregables**: listado y detalle («knolling», resúmenes, «Descargar todo»), editor (arrastrar, notas, fijar versión, dependencias automáticas, conflictos), compartir con código y QR, *fork*.
- **Aceptación**: `pnpm e2e --grep @kits`; `pnpm lhci --preset kit`; axe sin incidencias.

**WP-64 · Perfiles, creadores y logros** (M)

- **Rutas**:
  - `apps/web/src/pages/{profile/[handle]/index.astro, creators/**, achievements.astro}` (la redirección `/@handle` la hace el middleware de WP-22);
  - `apps/web/src/components/profile/**`;
  - `packages/i18n/messages/profile/**`.
- **Depende de**: WP-22, WP-25, WP-33 y WP-60.
- **Entradas**: §7.1 (T0-15), §7.2 y research/03 §6.4.
- **Entregables**: banner generativo, Día N, sellos, pestañas (`?tab`), heatmap con tabla, seguir (vanilla), directorio de creadores, `/achievements` y JSON-LD.
- **Aceptación**: `pnpm e2e --grep @profile`; `pnpm lhci --preset profile`; axe sin incidencias; privacidad respetada.

**WP-73 · Contenido: instalación, Patch Radar, legales, about, noticias, developers y KelvinSeek** (L)

- **Rutas**:
  - `apps/web/src/pages/{install.astro, patch-radar/**, privacy.astro, terms.astro, content-policy.astro, dmca.astro, cookies.astro, about.astro, brand.astro, developers.astro, kelvinseek.astro, news/**}`;
  - `apps/web/src/content/{install,legal,news,about,developers}/**`;
  - `apps/web/src/components/content/**`;
  - `packages/i18n/messages/content/**`.
- **Depende de**: WP-22, WP-50 y WP-01.
- **Entradas**: §7.1 (T0-10, T0-14, T0-25, T0-28, T0-32 y T0-33) y research/03 §6.7 y §6.15.
- **Entregables**:
  - Guía de instalación completa en 13 locales (EN autoritativo; con fecha «verificado con») + `#oneclick`.
  - Páginas de Patch Radar.
  - Textos legales en borrador, marcados «revisión legal pendiente» para el usuario.
  - `/brand` con descargas de assets, `/developers` (guía de la API, deprecaciones, «Integrar un mod manager»), `/kelvinseek` y `/news/welcome-to-v2`.
- **Aceptación**: `pnpm e2e --grep @content`; `pnpm lhci --preset install`; JSON-LD `TechArticle` + `FAQPage`; axe sin incidencias.

**WP-74 · Asistente de publicación (consola)** (L)

- **Rutas**:
  - `apps/web/src/console/routes/basecamp/{new,drafts}/**`;
  - `apps/web/src/console/routes/basecamp/mods/$modId/new-version.tsx`;
  - `apps/web/src/console/features/upload/**`;
  - `packages/i18n/messages/upload/**`.
- **Depende de**: WP-34 y WP-40.
- **Entradas**: §7.5 y research/03 §6.8.
- **Entregables**: los 6 pasos (fflate en el navegador, subida con XHR y progreso, CodeMirror perezoso, recorte, galería ordenable, calidad de ficha), nueva versión, nueva build y autoguardado.
- **Aceptación**: `pnpm e2e --grep @publish`: publicar un mod completo con un zip de fixture → queda en cola; una nueva versión con semver menor → error antes de subir; la build JSON muestra la miniatura; reanudar un borrador.

#### W8

**WP-80 · Basecamp: resumen, analíticas, mis mods y bandeja** (L)

- **Rutas**:
  - `apps/web/src/console/routes/basecamp/**` (salvo `new`, `drafts` y `new-version`);
  - `apps/web/src/console/features/basecamp/**`;
  - `packages/i18n/messages/basecamp/**`.
- **Depende de**: WP-74, WP-52, WP-41 y WP-60.
- **Entradas**: §7.5 de este plan y research/03 §5.9 y §6.9.
- **Entregables**: KPIs, gráficos de Recharts (tema de tokens, marcadores de versión y parche, «Ver como tabla»), «Necesita atención», «En vivo» por SSE, tabla de mis mods, editor del mod (ficha, media, versiones, compatibilidad, ajustes), bandeja, progreso de insignias y CSV.
- **Aceptación**: `pnpm e2e --grep @basecamp`; axe (incluidas las tablas de los gráficos); ruta ≤ 60 KB br, con Recharts como chunk aparte.

**WP-81 · Me, ajustes, Signals, mochila y descargas** (L)

- **Rutas**:
  - `apps/web/src/console/routes/{settings,signals,me}/**` (salvo `me/kits`);
  - `apps/web/src/console/features/{settings,signals,me}/**`;
  - `apps/web/src/islands/signals/**`;
  - `packages/i18n/messages/{settings,signals,me}/**`.
- **Depende de**: WP-34, WP-30, WP-43 y WP-42.
- **Entradas**: §7.1 (T0-13, T0-14, T0-15, T0-16, T0-17 y T0-30), §7.3 y research/03 §6.11 y §6.12.
- **Entregables**: todas las secciones de ajustes (perfil con recorte y «Reroll terrain», cuenta, seguridad y sesiones, matriz de notificaciones, preferencias, privacidad, creador, datos: exportar y borrar), `/signals`, campana en la cabecera (isla con SSE), `/me/backpack` y `/me/downloads`, *checklist* de onboarding y opt-in de NSFW.
- **Aceptación**: `pnpm e2e --grep @me`; axe sin incidencias; flujo de exportación y borrado contra Mailpit.

**WP-82 · Ranger Station (UI de moderación)** (L)

- **Rutas**:
  - `apps/web/src/console/routes/ranger/**` (salvo `admin`);
  - `apps/web/src/console/features/ranger/**`;
  - `packages/i18n/messages/ranger/**`.
- **Depende de**: WP-34 y WP-51.
- **Entradas**: §7.4 y research/03 §6.10.
- **Entregables**: carriles, vista de ítem (diff de ficheros y manifest, escaneo, descripción renderizada, historial), decisiones con plantillas y atajos, reportes, comentarios, usuarios y sanciones, auditoría, triaje en móvil y SSE de la cola.
- **Aceptación**: `pnpm e2e --grep @ranger` (aprobar, rechazar con plantilla, reporte → ocultar, sancionar); axe sin incidencias; atajos.

**WP-83 · Admin (UI)** (M)

- **Rutas**:
  - `apps/web/src/console/routes/ranger/admin/**`;
  - `apps/web/src/console/features/admin/**`;
  - `packages/i18n/messages/admin/**`.
- **Depende de**: WP-51, WP-50, WP-60 y WP-52.
- **Entradas**: §7.4 (admin), §7.10 y §7.2.
- **Entregables**: builds del juego y ecosistema, taxonomía + **recategorización masiva** (tabla con la sugerencia, aceptar o editar en lote, importar el CSV de WP-84), premios y staff picks, anuncios, ajustes (webhooks de Discord, límites, *flags*), uso de KelvinSeek y RUM.
- **Aceptación**: `pnpm e2e --grep @admin`; axe sin incidencias.

**WP-84 · Pasada R2, reescritura de metadatos y sugerencias de categoría** (L)

- **Rutas**: `tooling/migration/backfills-r2/**`, `apps/worker/src/jobs/backfill/**` y `ops/runbooks/migration/**`.
- **Depende de**: WP-40, WP-61 y WP-14.
- **Entradas**: §6.9 (B8, B15 y B17) y research/02 §4.1.
- **Entregables**:
  - B15 (HEAD, SHA-256 en streaming, manifest por Range, inspección, metadatos declarados, `buildMeta`, variantes de Media y OG), B8 y B4-manifest (`Library` si el manifest lo indica).
  - **B17** con `--dry-run` y `--apply` y manifiestos antes y después.
  - `suggest-categories.ts` (reglas + LLM opcional → CSV).
  - Runbook del usuario.
- **Aceptación**:
  - Sobre SeaweedFS con ≈ 20 objetos reales copiados con GET de solo lectura de `r2.sotf-mods.com` (claves con espacio, apóstrofo y paréntesis): B15 y B17 idempotentes; `Content-Disposition` correcto; ETags intactos (misma MD5); el `--dry-run` no escribe nada.
  - `pnpm --filter @sotf/migration-tools test:int`.

#### W9 (endurecimiento)

**WP-90 · Infra: Dockerfiles, CI/CD y runbooks de Coolify y Cloudflare** (L)

- **Rutas**: `ops/docker/**`, `.github/workflows/**`, `ops/coolify/**`, `ops/cloudflare/**`, `ops/runbooks/deploy/**`, `ops/compose/e2e.yml`, `turbo.json` y `biome.json` (solo ajustes).
- **Depende de**: todas las olas anteriores.
- **Entradas**: §10.2 y §11.
- **Entregables**:
  - Imágenes multi-stage (web y node) con los tamaños objetivo.
  - `release.yml` y `deploy.yml` (GHCR + webhooks de Coolify; secretos documentados).
  - Runbooks paso a paso: crear el proyecto Coolify, apps, dominios con path (validación de `/api` en el mismo origen), variables, tareas de migración y backfill, restauración semanal en staging; configuración de Cloudflare (§11.5) como checklist con capturas de texto y expresiones exactas.
  - `smoke-*.sh` (solo GET y HEAD).
- **Aceptación**:
  - `docker build` de ambas imágenes; `docker run` → `/healthz` 200.
  - `docker compose -p sotfv2-e2e -f ops/compose/e2e.yml up` + `pnpm e2e --grep @smoke` en verde.
  - `actionlint` sobre los workflows.
  - Las imágenes no contienen `.env`, dumps ni fuentes TS innecesarias (`dive` o una inspección).

**WP-91 · E2E completo, accesibilidad y regresión visual** (L)

- **Rutas**: `e2e/**`.
- **Depende de**: W8.
- **Entradas**: §10.1 y §7.12.
- **Entregables**: todos los flujos e2e del §10.1, axe en todas las plantillas y ambos temas, capturas visuales en el contenedor de Playwright y un checklist manual de lectores de pantalla (NVDA y VoiceOver) ejecutado con sus hallazgos en el backlog.
- **Aceptación**: `pnpm e2e` en verde en Chromium (todo) y WebKit y Firefox (flujos críticos); 0 violaciones serias o críticas; *baseline* visual aprobada.

**WP-92 · Rendimiento y LHCI** (M)

- **Rutas**:
  - `tooling/lhci/**` y `tooling/load/**` (salvo `downloads.*`);
  - `apps/web/astro.config.mjs` (solo ajustes de build);
  - ediciones de rendimiento en `apps/web/src/{components,layouts,pages,islands,scripts}/**` (solo optimizaciones, sin cambios funcionales).
- **Depende de**: W8.
- **Entradas**: §8.
- **Entregables**: presets de LHCI por plantilla, presupuestos, Speculation Rules, Early Hints (`Link` en las cabeceras), `content-visibility`, auditoría de imágenes (sizes y srcset), recorte de JS y el script de carga completo.
- **Aceptación**: `pnpm lhci` (todas las plantillas: perf ≥ 0,95 en PR y 1,0 en el perfil nocturno local), presupuestos en verde y `pnpm load` con los objetivos del §10.1.

**WP-93 · Endurecimiento de seguridad** (M)

- **Rutas**: `apps/web/src/lib/security/**`, `apps/web/src/middleware/security.ts`, `apps/api/src/plugins/security/**`, `packages/core/src/**/policy.ts` (políticas nuevas), `e2e/security/**` y `tooling/scripts/secrets-scan.ts`.
- **Depende de**: W8.
- **Entradas**: §9.
- **Entregables**: CSP definitiva (con el periodo de *report-only* en staging), cabeceras, revisión de permisos por tabla, corpus XSS e2e, tests de CSRF y SSRF, `pnpm audit` + política de dependencias y escaneo de secretos.
- **Aceptación**: `pnpm e2e --grep @security`; `pnpm test -- security`; los headers de securityheaders.com equivalentes (test local) con nota A; 0 hallazgos altos en `pnpm audit --prod`.

**WP-94 · i18n completo y pulido del texto** (M)

- **Rutas**: `packages/i18n/messages/**` y `packages/emails/src/**/*.copy.ts`.
- **Depende de**: W8.
- **Entradas**: §3.8 y §7.11.
- **Entregables**: revisión de coherencia terminológica en los 13 locales (glosario), microcopy de marca, plurales, pseudo-locale sin textos fijos y expansión verificada (capturas en DE y RU).
- **Aceptación**: `pnpm i18n:check`; `pnpm i18n:pseudo && pnpm e2e --grep @i18n` (0 textos fijos, sin desbordes).

#### W10 (release candidate)

**WP-A0 · Ensayo de migración y runbooks finales de corte y marcha atrás** (L)

- **Rutas**: `tooling/migration/rehearsal/**` y `ops/runbooks/{cutover,rollback,hypercare}/**`.
- **Depende de**: W9 y el **dump real** (A1). Sin él, se ensaya con el seed y se marca como bloqueante del corte.
- **Entradas**: §6.11, §6.13 y §6.14.
- **Entregables**:
  - `rehearse.sh` (restaurar → perfilar → baseline → migrate → guard → backfills → invariants → snapshot diff → **arrancar la API legacy (Bun) contra la copia migrada** con un smoke de los endpoints legacy → arrancar la v2 → contrato + e2e *smoke*), con tiempos medidos.
  - Runbooks con cada comando, marcado como U o A.
  - `smoke-prod.sh` y `replay-delta` probado.
- **Aceptación**: dos ensayos seguidos en verde (el informe queda en `tooling/migration/rehearsal/out/`, en `.gitignore`); la legacy sobrevive a las migraciones; locks acumulados < 60 s.

**WP-A1 · QA de clientes legacy, tráfico sombra y carga** (M)

- **Rutas**: `tooling/legacy-contract/**`, `tooling/shadow/**` y `tooling/load/**`.
- **Depende de**: W9.
- **Entradas**: research/01 §7 y §5.5.
- **Entregables**: suite final (38 fixtures + .NET + RedManager + KelvinSeek + descargas), comparador sombra contra producción (GET ≤ 2 rps; solo T1 y T2 de lectura) con el informe de diferencias clasificado y el checklist manual de RedManager 1.1.10 para el usuario (beta y producción).
- **Aceptación**: `pnpm contract:legacy` en verde; sombra contra el entorno local con el seed: 0 diferencias no documentadas; `pnpm load all` dentro de los SLO.

**WP-A2 · Pulido de la web pública** (M)

- **Rutas**: `apps/web/src/{pages,components,islands,scripts,layouts}/**` (salvo `console`).
- **Depende de**: W9.
- **Entradas**: §1.2 y el backlog acumulado.
- **Entregables**: auditoría del listón de calidad en cada plantilla pública (estados, responsive en 360, 768, 1024 y 1440 px, microinteracciones, estados vacíos y 404) y resolución del backlog público.
- **Aceptación**: `pnpm verify && pnpm e2e && pnpm lhci` en verde; backlog público vacío o reclasificado a T1.

**WP-A3 · Pulido de la consola** (M)

- **Rutas**: `apps/web/src/console/**`.
- **Depende de**: W9.
- **Entradas**: igual que WP-A2, para Basecamp, Ranger, Settings, Signals y Me.
- **Entregables**: la misma auditoría aplicada a la consola y resolución de su backlog.
- **Aceptación**: `pnpm verify && pnpm e2e --grep @console` en verde.

**WP-A4 · Documentación** (S)

- **Rutas**: `README.md`, `docs/{adr,developers,operations}/**` y `apps/*/README.md`.
- **Depende de**: W9.
- **Entradas**: todo el plan.
- **Entregables**: README del repositorio (arranque en 5 comandos), ADRs de las decisiones del §0.2, manual de operaciones (despliegue, backups, marcha atrás, rotación) y guía de contribución.
- **Aceptación**: un agente nuevo levanta el entorno siguiendo solo el README (`pnpm i && pnpm infra:up && pnpm db:seed:dev --small && pnpm dev` → la landing en `http://127.0.0.1:47321`).

### 12.4 M11 · T1 (tras el lanzamiento; se planifica en detalle en T+14)

| WP | Contenido (§7.13) |
|---|---|
| WP-T1a | Discord OAuth (T1-01), 2FA TOTP (T1-02) y passkeys (T1-26) |
| WP-T1b | Deep-link a RedManager (T1-03: propuesta de PR preparada como parche, **sin empujar**) + bundles (T1-04) + instalar Kits |
| WP-T1c | Visor 3D de builds (T1-06) + grafo de dependencias (T1-05) |
| WP-T1d | Scout (T1-07) |
| WP-T1e | PAT, webhooks y publicación desde CI (T1-08) + badges SVG (T1-09) |
| WP-T1f | Clasificaciones, premios mensuales y Build of the Month (T1-10) + temporadas y «visión nocturna» (T1-11) |
| WP-T1g | Co-autores, transferencia, reclamar autoría y cambio de handle (T1-12, T1-13 y T1-19) |
| WP-T1h | Profundidad del creador y de la comunidad (T1-14 a T1-18 y T1-20 a T1-25) |

---

## 13. Riesgos y preguntas abiertas

### 13.1 Riesgos principales

| Riesgo | Mitigación |
|---|---|
| **No hay backups de producción** hoy | Paso A1 inmediato, antes de cualquier otra cosa |
| Romper RedManager, UpdatesChecker o KelvinSeek | Fixtures + checker .NET + flujo de RedManager + sombra + QA manual en beta y producción; 302 probado con un cliente sin UA |
| `prisma db push` accidental borra las tablas v2 | `sotf_legacy_app` sin DDL + rotación del *owner* (B2 y T+1) |
| Coolify con dominio con path (`/api`) | Validación en staging (WP-90); etiqueta Traefik o proxy de Astro como plan B |
| i18n manual de Astro | Spike en WP-22; plan B con `[...locale]` |
| Límites de purga del plan Free de Cloudflare | *Debounce* de 20 s + TTL de borde ≤ 15 min como red de seguridad |
| AdSense diferido reduce ingresos | Medir en campo; los huecos y posiciones se pueden ajustar sin tocar CWV (flag `SiteSetting.ads`) |
| Carga de moderación (1 persona) | Checks automáticos, verificados que autopublican, post-revisión, autoocultación y plantillas |
| VPS compartido (RAM y CPU) | Build en CI, límites por contenedor, `sharp.concurrency(1)`, semáforo de argon2 y sin Redis |
| Alcance T0 grande | Olas con camino crítico explícito + orden de recorte del §7.1 |
| El ecosistema RedLoader, sin release desde feb-2025, se rompe con un parche | Patch Radar + estado del ecosistema + comunicación clara; se pueden registrar forks como `LoaderRelease` |

### 13.2 Preguntas para el usuario (solo lo que bloquea; cada una tiene un valor por defecto)

1. **Backup y dump de la BD** (A1) y **cierre del puerto 5433**. *Bloquea el ensayo real y el corte.* Sin valor por defecto: hace falta hacerlo.
2. **Acceso de infraestructura**: repositorio GitHub privado + GHCR, proyecto Coolify `sotf-mods-v2`, token de Cloudflare (Cache Purge) + plan, buckets R2 nuevos + token, claves Turnstile y VirusTotal. *Bloquea staging (M10).* Sin token de Cloudflare, la web funciona con TTL de 60 s y sin purga.
3. **Datos** (A6): los 28 no aprobados, los moderadores y el email del admin. *Bloquea el corte.* Por defecto: los de prueba («Don't use», «Blank», «old», «OldVCEPage») → `archived`; el resto → `pending` al principio de la cola; moderador: solo el admin.
4. **¿Desplegar el hotfix legacy (WP-02)?** No bloquea. Por defecto: se recomienda desplegarlo en cuanto se entregue, porque cierra el XSS y el buffer de descargas.
5. **Aprobación de la marca «Locator»** y del vocabulario (Kits, Basecamp, Ranger Station). No bloquea, pero conviene confirmarla antes de W1. Por defecto: aprobada.
6. **Política de IA** en `robots.txt`: por defecto `ai-train=no` y búsqueda y recuperación permitidas. No bloquea.

## 14. Decisiones del usuario (2026-09-29) — PREVALECEN sobre cualquier sección anterior

1. **Mods sin aprobar**: se quedan como están, sin borrar, ocultar ni archivar. En v2 siguen en estado `pending` en la cola de moderación. Ningún script ni backfill los elimina ni los rechaza automáticamente.
2. **Moderadores = los de ahora**: todo usuario con `isTrusted = true` recibe el rol **`moderator`** en v2 (backfill B7: `role='moderator'` si `isTrusted`, además de `legacyTrusted := isTrusted` y `verifiedCreator := isTrusted`). No se crean moderadores nuevos.
3. **Cuenta admin**: `luis.choque.castro@outlook.com` (el dueño del sitio). Se concede con `pnpm admin:grant --email luis.choque.castro@outlook.com --role admin` durante el corte. Si ese email no existe en la BD, se crea la cuenta con el flujo normal de registro y verificación y luego se concede el rol. Remitente de emails: `SOTF Mods <noreply@sotf-mods.com>`.
4. **Repositorios de GitHub = los existentes**. No se crean repos nuevos.
   - El monorepo v2 se publicará como rama `v2` de `ChoqueCastroLD/sotf-mods-api`, que en el corte pasa a `main`.
   - Las apps de Coolify (api, web y worker) apuntan a ese repo con su propio `dockerfile_location` / base directory.
   - `ChoqueCastroLD/sotf-mods-frontend` queda como legacy congelado, para la marcha atrás.
   - El push lo hace el orquestador solo cuando el usuario lo apruebe.
5. **Sin backup ni dump de producción**: el usuario NO quiere backups. Consecuencias obligatorias:
   - No hay ensayo con datos reales. Los ensayos (WP-A0, A3) usan el seed del API público + datos sintéticos que reproducen las rarezas conocidas (research/02): claves con espacios y apóstrofos, favoritos duplicados, IP `"undefined"`, huérfanas, texto con umlauts perdidos, hashes argon2id de Bun.
   - Las migraciones sobre producción deben ser **estrictamente aditivas** (CREATE TABLE / ADD COLUMN NULL o con DEFAULT constante / CREATE INDEX CONCURRENTLY), cada una en su transacción y con un `down` probado.
   - Los backfills **nunca sobrescriben ni borran** columnas o filas legacy: escriben solo en columnas o tablas nuevas y son idempotentes.
   - Queda prohibido cualquier `UPDATE` o `DELETE` sobre tablas legacy fuera de los flujos normales de la aplicación.
   - Antes de migrar, la guarda comprueba el catálogo real (introspección de solo lectura) y aborta si hay drift inesperado.
   - Los pasos de §6 y §11 que dependen de «restaurar el backup» se sustituyen por: marcha atrás = volver a apuntar los dominios a las apps legacy, que siguen funcionando porque el esquema solo se amplió.
   - Staging (`beta.sotf-mods.com`) usa el seed, no una copia de producción.
   - Tampoco se programan backups automáticos. Si hace falta, se documenta como recomendación en el runbook, sin implementarlo.
