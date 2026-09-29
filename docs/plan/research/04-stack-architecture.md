# 04 · Stack técnico, arquitectura, rendimiento (CWV 100), SEO/GEO e infraestructura

> **Track de investigación:** stack + arquitectura + rendimiento + SEO/GEO + infraestructura.
> **Fecha:** 2026-09-29. Todas las versiones se comprobaron hoy con `npm view <pkg> version` / `dist-tags` (ver §11).
> **Alcance:** recomendaciones para sotf-mods v2. No se ha tocado producción: las pruebas se hicieron en local (`/tmp`) y las únicas peticiones a producción fueron GET/HEAD de solo lectura (sin endpoints de descarga, favoritos ni aprobación).

---

## 0. Resumen ejecutivo (decisiones)

1. **Frontend = Astro 7 (SSR con adaptador Node) + islas React 19 + "Studio" SPA (TanStack Router + TanStack Query) montada dentro del mismo Astro en `/studio/*`.** Las páginas públicas salen con 0 KB de JS por defecto y React solo se carga cuando una isla lo necesita (comentarios, Cmd+K, formularios). El panel de creador, la moderación y la administración son una SPA React con rutas tipadas. Es **un solo build, un contenedor y un único sistema de diseño**. Validado con un spike (Astro 7.3.5 + TanStack Router 1.170 con code-splitting + Tailwind 4.3 → compila y funciona; ver §2.5).
2. **Frescura = "ISR en el borde":** el HTML es SSR y es **idéntico para todos los usuarios** (no hay personalización en el HTML). Cloudflare lo cachea con `stale-while-revalidate` (asíncrono en todos los planes desde feb-2026). Cada respuesta lleva `Cache-Tag` (`mod:123`, `author:45`…) y se **purga por tag** cuando cambia el contenido (la purga por tag está disponible en el plan Free desde abr-2025). Para esto usamos la **Route Caching API estable de Astro 7** con un *provider* propio.
3. **Backend = Node 24 LTS + Fastify 5.12 + Zod 4.** Los contratos compartidos con el frontend viven en `packages/contracts` y generan OpenAPI 3.1 + Scalar. **Drizzle ORM** se monta sobre la base de datos existente (Postgres 16), que se introspecciona con `drizzle-kit pull` (probado). Se descarta Prisma 7 porque Prisma 8, con otra API, sale en GA en octubre de 2026. Las migraciones siguen la estrategia *expand → contract* para que el legacy siga funcionando hasta el corte.
4. **Sin Redis.** Colas y cron con **pg-boss 12** (Postgres). Tiempo real con **SSE** (`@fastify/sse`) + `LISTEN/NOTIFY` de Postgres. Rate limiting en memoria (hay una sola instancia) más una regla WAF de Cloudflare.
5. **Autenticación propia y simple:** sesión opaca en una cookie `__Host-` HttpOnly SameSite=Lax (en la BD solo se guarda su SHA-256). CSRF con Fetch Metadata + Origin. Contraseñas con **argon2id (`@node-rs/argon2`)**, que **verifica los hashes Bun existentes (probado)**; si queda algún bcrypt, se rehashea al hacer login. Hay PATs (tokens personales) para herramientas/CLI y OAuth Discord/Steam en fase 2.
6. **Ficheros solo en R2:**
   - Subidas **presigned PUT directas** con `Content-Type` y `Content-Length` firmados (R2 no soporta POST policy).
   - Descargas: se cuentan de forma deduplicada y asíncrona y se responde **302 a `r2.sotf-mods.com`** (sin proxy ni buffer).
   - Imágenes: variantes AVIF/WebP inmutables generadas con `sharp` en un worker, más thumbhash.
   - Se eliminan **files.sotf-mods.com y 6 variables de entorno huérfanas**.
7. **Búsqueda:** Postgres FTS + `pg_trgm` + `unaccent` (con ~300 mods, Meilisearch/Typesense no se justifica). **Cmd+K** instantáneo con un índice JSON en el cliente (MiniSearch, ~15 KB br) que se carga bajo demanda.
8. **Monorepo** con pnpm 12 + Turborepo 2. TypeScript 7 (nativo); TS 6 solo para `astro check`. Biome 2, Vitest 5, Playwright 1.63, Testcontainers y Lighthouse CI.
9. **Coolify:**
   - 3 aplicaciones de imagen Docker (**web, api, worker**) con *rolling updates*. Docker Compose no los soporta en Coolify.
   - Imágenes `node:24-alpine`, construidas en **GitHub Actions → GHCR**, para no compilar en el VPS compartido.
   - Staging en `beta.sotf-mods.com`.
   - Corte con coexistencia y *rollback* inmediato.
10. **SEO/GEO:**
    - Se conservan las URLs actuales de mods y builds y se añaden 301 para el resto.
    - `hreflang` para 13 locales (se corrigen `ch`→`zh-Hans` y `se`→`sv`) y sitemaps por tipo con `lastmod` real.
    - JSON-LD `SoftwareApplication` + `VideoGame` "Sons of the Forest", `ProfilePage`, `ItemList` y `BreadcrumbList`.
    - OG images por mod (satori → sharp → R2), `robots.txt` propio, RSS (útil para bots de Discord) e IndexNow.
    - `llms.txt` + `llms-full.txt` + alternativas `.md` por página.
    - AdSense solo para invitados, cargado de forma diferida y con huecos reservados.
    - Objetivo: **Lighthouse móvil 100 en páginas sin anuncios cargados y CWV "Good" en campo (p75)**.

**Punto de partida medido hoy (Lighthouse móvil):**

| Página | Rendimiento | LCP | TBT | Peso |
|---|---|---|---|---|
| `/mods` | 31 | 23,1 s | 2,77 s | 14,3 MB |
| Página de mod | 30 | 9,1 s | 2,79 s | CLS 0,172 |

El margen de mejora es enorme.

---

## 1. Punto de partida medido (2026-09-29)

### 1.1 Lighthouse móvil (Lighthouse 13.5.0 local, Chromium headless, throttling móvil por defecto)

| URL | Perf | A11y | Best Pr. | SEO | FCP | LCP | TBT | CLS | Peso total | TTFB doc |
|---|---|---|---|---|---|---|---|---|---|---|
| `/mods` | **31** | 76 | 96 | 92 | 4,5 s | **23,1 s** | **2.770 ms** | 0 | **14,3 MB** | 600 ms |
| `/mods/akm/arctic-fox-virginia` | **30** | 87 | 73 | 92 | 2,8 s | **9,1 s** | **2.790 ms** | **0,172** | 3,5 MB | 210 ms |

Las causas coinciden con lo ya conocido:
- Tailwind se compila en el navegador.
- daisyUI se carga desde un CDN.
- Hay imágenes de 1-3 MB sin *lazy loading*.
- AdSense se carga dos veces.
- Umami apunta a `monitor.sotf-mods.com`, que está roto.
- El JS es síncrono.

### 1.2 Cabeceras, CDN y ficheros

- **HTML y API:** `cf-cache-status: DYNAMIC`, así que Cloudflare no cachea nada. La API responde con `access-control-allow-origin: *` **junto con** `access-control-allow-credentials: true` y `Vary: *`, una combinación incorrecta.
- **Imágenes en R2:** `cache-control: max-age=86400` y `cf-cache-status: HIT` (Cloudflare cachea por extensión).
- **Zips en R2:** `DYNAMIC`, sin `Cache-Control` y **sin `Content-Disposition`**. El usuario descarga `1790457781645_ArcticVirginia.zip` con el prefijo de timestamp.
- **`robots.txt`:** solo el preámbulo "Content Signals" que añade Cloudflare (*managed robots.txt*): 24 líneas, todas comentarios, sin reglas ni `Sitemap:`. `/sitemap.xml` devuelve **404**.
- Cloudflare **no inyecta scripts** (no hay Rocket Loader, email obfuscation ni challenge). Hay que mantenerlo así.
- En el `<head>` hay `meta keywords` spam, una `description` genérica y `og:image` apuntando a `files.sotf-mods.com`, que devuelve 503.
- Una clave antigua de files.* (`1722086199054_lowergraphicstool222_thumbnail.png`) **no existe con el mismo nombre en R2** (404). Por tanto no hay un mapeo 1:1 trivial para rescatar los backlinks viejos a files.*.

### 1.3 Restricciones heredadas del código (lo que v2 debe respetar)

- **Hashes de contraseña:** `Bun.password.hash` usa por defecto argon2id y genera un PHC `$argon2id$v=19$m=65536,t=2,p=1$…`. `Bun.password.verify` también acepta bcrypt (`$2b$…`).
  **Probado en local:** `@node-rs/argon2@2.2.1` verifica un hash argon2id generado por Bun (≈66 ms con m=64 MiB) y `@node-rs/bcrypt@1.10.9` verifica un bcrypt generado por Bun. **Todos los usuarios podrán seguir entrando con su contraseña.**
- **URLs públicas que deben seguir funcionando:**
  - Listados y detalles: `/mods`, `/builds`, `/mods/:user/:slug`, `/builds/:user/:slug`.
  - Descarga: `/mods/:user/:slug/download/:version`.
  - Perfil y subida: `/profile/:slug`, `/upload`, `/upload-build`.
  - Cuenta: `/login`, `/register`, `/forgot-password`, `/reset-password?token=…`.
  - Otras: `/privacy`, `/loader`, **`/ads.txt`**, `/static/downloads/sotfmodsoneclick-setup1.0.0.exe`, `/static/images/*`.
  - Filtros por query: `?category=&orderby=&search=&page=&nsfw=&type=&showunapproved=`.
- **API v1** (`api.sotf-mods.com/api/...`): unas 40 rutas. Puede haber consumidores externos (RedManager, el instalador one-click, mods in-game como KelvinSeek o BuildShare). Por eso v2 necesita una **capa de compatibilidad v1** (§4.17).
- **Contadores:** `Mod.downloads` es `COUNT(ModDownload)`, recalculado cada 30 min con un *full scan* de unas 2M filas; `lastWeekDownloads` funciona igual. **Mientras el legacy siga vivo**, v2 debe seguir insertando filas en `ModDownload` para no romper ese invariante (§6.6).
- **Menciones:** tabla `PendingMention` + un cron de 10 min que envía emails.
- **`updatedAt`** es `NOT NULL` **sin default** en la BD (Prisma lo rellena en el cliente). v2 debe rellenarlo o añadir un `DEFAULT now()`, que es un cambio aditivo e inocuo para el legacy.
- **Esquema gestionado con `prisma db push`**, sin carpeta de migraciones. **Riesgo crítico:** si alguien ejecuta `prisma db push` del legacy después de que v2 haya creado tablas o columnas, Prisma intentará **borrarlas**. Hay que congelarlo (§6.6).
- **Idiomas del legacy:** 12 ficheros (`ch, de, en, es, fr, it, nl, pl, pt, ru, se, tr`). Dos códigos ISO son erróneos: `ch` es chino (`zh-Hans`) y `se` es sueco (`sv`).

---

## 2. Arquitectura frontend

### 2.1 Criterios

1. **CWV 100 en móvil**: TTFB, LCP, TBT/INP y CLS.
2. **SEO/GEO**: HTML completo en la primera respuesta, datos estructurados, control del `<head>`.
3. **Frescura**: el contenido cambia constantemente (descargas, comentarios, versiones). Hace falta ISR, revalidación o purga.
4. **DX para una sola persona**: pocas piezas, un solo lenguaje, builds rápidos.
5. **Compartir componentes** entre las páginas públicas y el dashboard.
6. **i18n** con URLs localizadas y `hreflang`, para 13 idiomas.
7. **Simplicidad de build y despliegue** en Coolify (Docker) detrás de Cloudflare.
8. **Madurez y riesgo** en septiembre de 2026.

### 2.2 Opciones evaluadas

#### (a) Astro 7 SSR/híbrido + islas React 19 + Studio SPA (TanStack Router/Query) dentro de Astro — ✅ **RECOMENDADA**

**Pros**
- **Cero JS por defecto** en las páginas públicas. Los componentes React se pueden renderizar en el servidor **sin hidratar** (sin directiva `client:*`), así que el mismo `ModCard.tsx` sirve como HTML estático en la web pública y como componente interactivo en el Studio.
- **Astro 7** (agosto de 2026):
  - Compilador en Rust y Vite 8 con Rolldown: builds un 15–61 % más rápidos.
  - **Route Caching estable** (`Astro.cache.set({ maxAge, swr, tags })`, `routeRules`, `cache.invalidate({ tags | path })`) con una **API de providers** que permite escribir uno propio para Cloudflare autoalojado (§3).
  - `src/fetch.ts` o Hono para controlar el pipeline de peticiones (útil como plan B para hacer proxy de `/api`).
  - CSP estable (`security.csp`), API de fuentes (`<Font />` con métricas de fallback automáticas), *server islands* y colecciones de contenido para guías MDX.
- Por página se puede elegir **prerender** (estático en el build) o **SSR**. Las páginas legales y las guías son estáticas; mods, autores y listados son SSR cacheado en el borde.
- **Madurez**: es un framework estable con un ecosistema grande, y Vite por debajo encaja con la referencia del usuario (Vite, React, Tailwind).

**Contras / riesgos**
- Hay dos modelos mentales: `.astro` para el layout y las páginas, y React para lo interactivo. Se mitiga con una regla clara (§2.7).
- **i18n sin prefijo para el locale por defecto** obliga a usar carpetas por idioma o `routing: "manual"` + middleware con `rewrite`. Hay que validarlo en la fase 0 (§2.9).
- Las islas React en páginas públicas cargan el runtime de React. En el spike, `react-dom/client` pesa **57 KB brotli**. Por eso la política es hidratar solo en `visible`, en interacción o bajo demanda (§2.7).
- El HTML cacheado en el borde puede referenciar assets de un despliegue anterior (*deploy skew*, §6.4).

#### (b) TanStack Start (React SSR full-stack)

**Pros**
- Un solo modelo: React en todas partes, con rutas y *server functions* tipadas de extremo a extremo.
- Streaming SSR y prerender con *crawling*. Su "ISR" se basa en cabeceras `Cache-Control` + purga manual en el CDN, parecido a lo que proponemos.

**Contras**
- **Su propia documentación sigue en "Release Candidate"** (1.168.x) y RSC es experimental.
- **Hidratación completa de todas las páginas**: React + router + loaders en cada vista pública, unos 90–120 KB br de base. Conseguir TBT≈0 en un móvil lento es más difícil que con islas.
- No tiene un sistema integrado de *cache tags* ni i18n.
- **Veredicto:** es excelente para el Studio, pero para las páginas SEO paga un peaje de JS que no necesitamos.

#### (c) Referencia del usuario: Vite React SPA + HTML estático pre-generado aparte, servido por Caddy 2.11

**Pros**
- Las páginas estáticas son las más rápidas y robustas que existen: siguen online aunque la API caiga.
- Caddy es simple.
- Es el modelo que el usuario ya conoce.

**Contras**
- **La frescura es el problema.** Hay ≈ (257 mods + 36 builds + 46 autores + categorías + tags + colecciones + guías) × 13 idiomas ≈ **6–8k páginas**. Regenerarlas en cada comentario, descarga o versión obliga a construir un "ISR casero": una cola de regeneración, escritura atómica en un volumen compartido e invalidación del CDN.
- Hay **dos pilas de render** (plantillas del generador y componentes de la SPA) salvo que el generador use `renderToString` de los mismos componentes, y entonces se está reinventando Astro.
- El despliegue necesita un volumen compartido o reconstruir la imagen cuando cambia el contenido.
- **Veredicto:** Astro con prerender + SSR cacheado en el borde es exactamente este modelo "bien hecho": un solo sistema de componentes y frescura instantánea por purga.

#### (d) Next.js 16

**Pros**
- Maduro, con ISR, `revalidateTag`, *Cache Components*/PPR, RSC y un buen `next-intl`.

**Contras**
- El runtime React/RSC está en todas las páginas: la base de JS es mayor que la de Astro.
- La semántica de caché ha cambiado entre versiones mayores, lo que añade carga cognitiva a una sola persona.
- Está optimizado para Vercel. En autoalojado funciona (`output: standalone`), pero el valor diferencial (el ISR distribuido) lo aporta Vercel.
- **Veredicto:** es viable, pero más pesado y complejo que Astro para un sitio sobre todo de contenido con un panel SPA.

#### (e) Otros

- **React Router v8 (framework mode, junio de 2026):** es estable y "aburrido" (en el buen sentido), pero hidrata la página entera igual que (b). No aporta nada frente a Astro para SEO y CWV.
- **SvelteKit 2 / Svelte 5:** tiene un rendimiento excelente y Paraglide lo soporta de forma oficial. Pero rompería el ecosistema React que pide el usuario (TanStack, Recharts, Motion, Lucide…) o forzaría dos frameworks. No es *claramente* superior. Descartado.

### 2.3 Matriz (1 = malo, 5 = excelente)

| Criterio | (a) Astro 7 + islas + Studio | (b) TanStack Start | (c) SPA + HTML estático + Caddy | (d) Next.js 16 | (e) RR v8 | (e) SvelteKit |
|---|---|---|---|---|---|---|
| CWV móvil | **5** | 3 | 5 | 4 | 3 | 5 |
| SEO/GEO | **5** | 4 | 5 | 5 | 4 | 5 |
| Frescura (ISR/purga) | **5** (route cache + tags) | 4 | 2 | 5 | 3 | 4 |
| DX 1 persona | **4** | 4 | 2 | 3 | 4 | 4 |
| Compartir componentes | **4** | 5 | 3 | 5 | 5 | 2 (React fuera) |
| i18n + hreflang | 4 | 3 | 3 | 4 | 3 | 5 |
| Build/deploy Coolify | **5** (1 contenedor Node) | 4 | 3 | 4 | 4 | 4 |
| Madurez/riesgo | **5** | 3 (RC) | 4 | 4 | 5 | 5 |
| **Total** | **37** | 30 | 27 | 34 | 31 | 34 |

### 2.4 Recomendación y relación con la referencia del usuario

Recomendamos la opción **(a)**. De la referencia del usuario se **conserva**:
- React 19 y Vite (Astro 7 corre sobre Vite 8).
- TanStack Router + Query en el Studio.
- Tailwind CSS 4, Motion, Lucide y Recharts.
- La idea de "HTML pre-generado detrás de un CDN". Aquí la implementan el prerender de Astro y el SSR + caché de Cloudflare con purga por tag.

Se **cambia**:
- **Caddy no entra en el camino de la petición.** Cloudflare ya hace HTTP/2-3, brotli/zstd y caché en el borde, y Traefik (Coolify) termina TLS en el origen. Un tercer proxy solo añadiría un salto y configuración.
- **Monaco se sustituye por CodeMirror 6** en el editor de descripción y changelog. Monaco pesa varios MB y **no soporta bien el móvil**, y el requisito es un diseño responsive.
- **No hay un generador estático aparte:** las páginas estáticas se prerenderizan con Astro.

### 2.5 Spike realizado (local, `/tmp/astro-spike`)

**Stack probado:** `astro@7.3.5`, `@astrojs/node@11.1.6` (standalone), `@astrojs/react@7.0.0`, `react@19.3.0`, `@tanstack/react-router@1.170.40` con `@tanstack/router-plugin@1.168.41` (rutas por fichero y `autoCodeSplitting`), `@tanstack/react-query@5.104.0`, `tailwindcss@4.3.3` con `@tailwindcss/vite@4.3.3`, y `cache.provider = memoryCache()`.

**Resultados:**
- **El build funciona sin fricción** (≈2 s). La SPA del Studio se monta con `<StudioApp client:only="react" />` en `src/pages/studio/[...path].astro`, con `basepath: '/studio'`. El plugin del router genera `routeTree.gen.ts` y separa en chunks cada ruta (por ejemplo `_modId.*.js`).
- **Route cache:** la primera petición a `/mods/akm/arctic-fox-virginia` devolvió `x-astro-cache: MISS` y la segunda `HIT`.
- **Assets `/_astro/*`:** los sirve el adaptador con `Cache-Control: public, max-age=31536000, immutable` y ETag, **sin comprimir**. Cloudflare comprime en el borde, así que no importa.
- **Tamaños** (brotli):

  | Fichero | Tamaño br |
  |---|---|
  | Runtime `react-dom/client` | 56,8 KB |
  | Shell del Studio (router + query + root) | 25,6 KB |
  | CSS Tailwind de ejemplo | 1,8 KB |
  | Isla trivial | < 0,5 KB (más el runtime) |

  **Conclusión:** React en páginas públicas **solo bajo demanda**.
- **i18n:** con `prefixDefaultLocale: false`, `/es/mods/...` devuelve 404 si no existen páginas en `src/pages/es/`. Hay que usar `routing: "manual"` + middleware con `rewrite` (§2.9).

### 2.6 Mapa de renderizado por tipo de ruta

| Ruta (EN sin prefijo; resto `/{locale}/…`) | Modo | Caché borde (Cloudflare) | JS inicial |
|---|---|---|---|
| `/` landing | SSR | 5 min + SWR 1 d, tag `home` | ~3–8 KB (vanilla) |
| `/mods`, `/builds` (listados, filtros por query) | SSR | 5 min + SWR, tag `list:mods`/`list:builds` | vanilla (filtros como enlaces GET) |
| `/mods/{author}/{slug}` | SSR | 15 min + SWR 1 d + purga `mod:{id}` | vanilla + islas `client:visible` (comentarios) |
| `/mods/{author}/{slug}/changelog`, `/alternatives` | SSR | igual | ~0 |
| `/builds/{author}/{slug}` | SSR | igual | idem |
| `/creators/{slug}` (antes `/profile/{slug}`, 301) | SSR | 15 min + tag `author:{id}` | ~0 |
| `/categories/{slug}`, `/tags/{slug}`, `/collections/{id}-{slug}` | SSR | 15 min + tags | ~0 |
| `/guides/*`, `/about`, `/privacy`, `/terms`, `/install` | **Prerender** (MDX) | 1 d + purga en deploy | 0 |
| `/search?q=` | SSR (`noindex`) | 60 s | isla de búsqueda |
| `/login`, `/register`, `/forgot-password`, `/reset-password` | Prerender + isla formulario | 1 d | isla pequeña |
| `/studio/*` (creador, moderación, admin) | Shell SSR sin datos de usuario (`noindex`) | 1 d + purga en deploy | SPA (lazy por ruta) |
| `/sitemap.xml`, `/sitemaps/*.xml`, `/feed.xml`, `/llms.txt`, `/llms-full.txt`, `*.md` | SSR (endpoints) | 1 h + purga | — |
| `/mods/{a}/{s}/download/{v}` | Fastify o endpoint | **no-store** (cada hit cuenta) | — |
| `/ads.txt`, `/robots.txt`, `/{indexnow-key}.txt` | Estático | 1 d | — |

**Regla de oro: ninguna respuesta pública lleva `Set-Cookie` ni varía por cookie.** La personalización (avatar en la cabecera, "ya es favorito", "hay una actualización de la versión que descargaste") se hace con *server islands* de Astro, que son fragmentos HTML pedidos aparte con `Cache-Control: private, no-store`, o con un pequeño `fetch('/api/v2/me')`. En ambos casos el hueco se reserva para no provocar CLS.

### 2.7 Política de islas y presupuesto de JS

- **Vanilla TS dentro de `<script>` de Astro** (se empaqueta y deduplica) para las interacciones pequeñas de las páginas públicas:
  - botón de favorito (con *optimistic UI*) y copiar al portapapeles;
  - selector de idioma y tema;
  - disparador de Cmd+K, pestañas y galería (CSS *scroll-snap* + `<dialog>`);
  - consentimiento y anuncios.
- **React solo en:**
  - comentarios (`client:visible`, debajo del pliegue);
  - paleta Cmd+K (`import()` dinámico al pulsar ⌘K/Ctrl+K o al hacer clic; en escritorio se precarga con `pointerenter`/`idle`);
  - formularios de auth (`client:load` solo en esas páginas);
  - el Studio (`client:only`).
- **Motion** solo en el Studio y en islas que ya cargan React. En lo público se usan transiciones CSS y **View Transitions entre documentos** (`@view-transition { navigation: auto; }`), que no cuestan JS (Chromium y Safari; en Firefox es mejora progresiva).
- **Presupuesto** para páginas públicas en la primera carga: **≤ 15 KB br de JS**, **≤ 20 KB br de CSS** y **0 long tasks > 50 ms** con throttling móvil.
- **Props de islas:** nunca se pasan objetos grandes, porque se serializan en el HTML. Se pasan IDs y la isla hace el fetch con TanStack Query.

### 2.8 Studio (SPA dentro de Astro)

**Rutas** (`/studio/*`, `noindex`, requieren sesión):
- dashboard;
- `mods` (lista, editor con pestañas: detalles / media / versiones / changelog / estadísticas / colaboradores);
- `new/mod` (asistente paso a paso), `new/build`;
- `analytics`, `notifications`;
- `settings` (perfil, seguridad, sesiones, PATs, passkeys);
- `moderation` (cola, informes, auditoría; solo para moderadores);
- `admin` (usuarios, destacados, categorías, tags).

**Librerías:**

| Uso | Librería (versión) | Notas |
|---|---|---|
| Rutas | TanStack Router 1.170 | Parámetros de búsqueda tipados con Zod para filtros y tablas; `defaultPreload: 'intent'` |
| Datos | TanStack Query 5.104 | Caché y SWR. **Las notificaciones SSE invalidan queries**: el servidor solo avisa de que algo cambió |
| Tablas | TanStack Table 9.2 + TanStack Virtual 3.14 | Moderación y admin |
| Formularios | TanStack Form 1.33 | *Standard Schema* con Zod 4 sin adaptadores. Alternativa: react-hook-form 7.89 |
| Gráficas | Recharts 3.10 | Descargas, vistas, favoritos, conversión, países, referrers de IA |
| Editor | CodeMirror 6 (`@uiw/react-codemirror` 4.25) | Markdown con vista previa en vivo. La vista previa usa **el mismo pipeline de sanitización** que el servidor (`packages/markdown`) |
| Primitivas de UI | Base UI 1.8 | Dialog, Menu, Popover, Tabs, Select, Combobox |
| Paleta | cmdk 1.1 | |
| Toasts | sonner 2 | |
| Iconos | Lucide 1.48 | |
| Animación | Motion 13 | |

**Errores de chunk tras un despliegue:** se escucha `vite:preloadError` y el fallo de carga de rutas perezosas, y se recarga la página.

### 2.9 i18n (13 locales, URLs localizadas, hreflang)

**Locales:**
- `en` es el locale por defecto y va **sin prefijo**, lo que conserva todas las URLs actuales.
- `es, de, fr, it, nl, pl, pt-BR (o pt), ru, sv, tr, zh-Hans` + **1 nuevo** para llegar a 13 (propuesta: `ja` o `uk`; es una decisión de producto).
- Correcciones de código: `ch`→`zh-Hans` y `se`→`sv`. La cookie `lang` antigua se mapea a los códigos nuevos.

**Implementación:**
- Astro `i18n: { routing: "manual" }` + un middleware que detecta `/{locale}/…`, fija `locals.locale` y hace `rewrite` a la ruta sin prefijo. Así hay **un solo árbol de páginas** y no se duplica código por idioma. Se valida con un spike en la fase 0; el plan B es `src/pages/[locale]/…` + `getStaticPaths`.
- Los segmentos de la URL se mantienen en inglés (`/es/mods/...`). Son más simples, comparten los tags de caché y los slugs de los mods ya están en inglés.
- **Mensajes de UI:** **Paraglide JS 2** (inlang). Compila los mensajes a funciones tipadas y *tree-shakeables*, así que cada isla solo incluye los mensajes que usa. Funciona en Astro (SSR con `AsyncLocalStorage`), en las islas React y en el Studio. Los 12 ficheros de traducción del legacy se importan a `messages/{locale}.json`.
- **Nunca se redirige por `Accept-Language`**, porque rompería la caché y confunde a Googlebot. Si el idioma del navegador no coincide con el de la página, se muestra un aviso discreto del tipo "¿Ver en Español?" (vanilla, con `navigator.languages`).

**Contenido:**
- La UI está traducida al 100 %.
- De cada mod se traducen `shortDescription`, los datos rápidos y los nombres de categorías y tags. Lo hace un **job LLM al publicar o editar**, que se guarda en `mod_translation` con el hash del texto origen y que el creador puede sobrescribir. Se marca como "traducido automáticamente".
- La descripción larga se muestra en su idioma original con `lang="en"` en el contenedor, más un botón "Traducir".
- **Guías** que aún no están traducidas: `fallbackType: "rewrite"` con `canonical` a la versión en inglés, y se **excluyen del clúster `hreflang`** hasta que estén traducidas.
- `hreflang`: todos los locales + `x-default` (EN), generados con `getAbsoluteLocaleUrlList`. Solo va en el HTML; los sitemaps no llevan alternates (§8.4).

### 2.10 Diseño compartido

- **`packages/ui`**:
  - `theme.css` con los tokens de Tailwind 4 (`@theme` con la paleta de la nueva identidad Sons of the Forest, tipografía, radios y sombras);
  - componentes React sin estado (Button, Badge, ModCard, Avatar, StatPill, Rating, Tag…);
  - iconos.
- **Astro** renderiza esos componentes en el servidor sin JS y el Studio los usa interactivos. Tailwind escanea el paquete con `@source "../../packages/ui"`.
- Las primitivas accesibles (Base UI) solo se usan en React. Las páginas públicas usan HTML semántico (`<details>`, `<dialog>`, `popover`) siempre que sea posible.

---

## 3. Frescura y caché: el "ISR" de sotf-mods

### 3.1 Capas

1. **Navegador:**
   - HTML con `Cache-Control: public, max-age=0, must-revalidate` + ETag → revalidación rápida (304 desde el borde) y compatible con bfcache.
   - Assets `/_astro/*` inmutables durante un año.
   - Media en R2 inmutable durante un año.
2. **Cloudflare (edge + Tiered Cache):**
   - `Cloudflare-CDN-Cache-Control: public, max-age=900, stale-while-revalidate=86400, stale-if-error=604800` + `Cache-Tag: html,mod:123,author:45,category:qol,locale:es`.
   - Cloudflare **no reenvía** estas cabeceras al cliente.
   - SWR **asíncrono** en Free/Pro/Business desde febrero de 2026: el primer visitante tras la expiración ya recibe la versión stale sin esperar al origen.
3. **Origen web (opcional):** LRU en memoria de Astro, el mismo provider (`onRequest`). Absorbe los *misses* de los distintos PoP y de los 13 locales.
4. **API:** `lru-cache` (TTL 30–60 s, unas 500 entradas) para lecturas calientes (mod por slug, listados, índice de búsqueda), más ETag (`@fastify/etag`). Las GET públicas de la API también se cachean en el borde con tags.
5. **Postgres:** la verdad. Con ~300 mods todo cabe en `shared_buffers`.

### 3.2 Provider de caché propio para Astro (`cloudflareSelfHosted()`)

La API de providers de Astro 7 expone:
- `setHeaders(options, request) → Headers`, cuyas cabeceras "se eliminan de la respuesta final" hacia el cliente;
- `onRequest?(ctx, next)`;
- `invalidate({ tags | path })`.

Nuestro provider hace lo siguiente:
- `setHeaders`: emite `Cloudflare-CDN-Cache-Control` (vía `buildCacheControlDirectives`) y `Cache-Tag` (tags de la ruta + `pathTag(url)` + `html`), más `Cache-Control` para el navegador.
- `onRequest`: LRU en memoria (reutiliza la lógica de `memoryCache`).
- `invalidate`: vacía el LRU local y llama a `POST /zones/{zone}/purge_cache` con `{ tags }`.

`routeRules` en `astro.config`:

```js
routeRules: {
  '/': { maxAge: 300, swr: 86400, tags: ['home'] },
  '/mods/[author]/[slug]': { maxAge: 900, swr: 86400 },
  '/[...locale]/mods/[author]/[slug]': { maxAge: 900, swr: 86400 },
  '/sitemaps/[...path]': { maxAge: 3600, swr: 86400, tags: ['sitemap'] },
}
```

La página añade sus tags: `Astro.cache.set({ tags: [\`mod:${mod.id}\`, \`author:${mod.userId}\`] })`.

### 3.3 Flujo de invalidación

```
API (escritura: publicar versión, editar mod, aprobar, comentar…)
  └─ tx Postgres → outbox/pg-boss: send('cdn.purge', { tags: ['mod:123','list:mods','author:45'] }, { singletonKey: 'purge', debounce 20s })
worker (pg-boss)
  ├─ agrupa tags de la ventana de debounce (≤ 1 llamada cada 20–30 s → por debajo del límite Free)
  ├─ POST http://web:4321/_internal/cache/invalidate  (secreto compartido; red interna Coolify)
  │     └─ Astro cache.invalidate({ tags }) → vacía LRU local + purga Cloudflare por tag
  ├─ vacía LRU de la API (NOTIFY 'cache' → LISTEN en api)
  ├─ IndexNow (debounced) con las URLs canónicas de todos los locales afectados
  └─ regenera índice Cmd+K / llms-full.txt si procede (son rutas cacheadas: basta purgar su tag)
```

- **Tras cada despliegue:** se purga el tag `html` cuando el contenedor nuevo ya está *healthy* (evita el *deploy skew*, §6.4).
- **Contadores:** dentro del HTML pueden ir con hasta 15 min de retraso, lo cual es aceptable. Si se quieren "en vivo" (landing, página de mod), una isla vanilla consulta `/api/v2/mods/{id}/live` (borde 30–60 s) o se suscribe a SSE.
- **Límites de purga de Cloudflare:** el plan Free tiene un límite bajo (según la documentación y la comunidad, del orden de 5 peticiones/min con *bucket* de 25). El debounce de pg-boss nos mantiene muy por debajo, pero hay que **confirmar el límite exacto del plan contratado**.

### 3.4 Configuración de Cloudflare (checklist)

**Cache Rules** (hay 10 disponibles en el plan Free):
1. `sotf-mods.com` excepto `/api/v2/(auth|me|stream|uploads|e)*`, `/studio/api*` y `*/download/*`: "Eligible for cache", Edge TTL = "respetar origen", Browser TTL = "respetar origen". **Sin esta regla Cloudflare no cachea HTML.**
2. `r2.sotf-mods.com`: "Eligible for cache", **Edge TTL 1 año** y Browser TTL 1 año. Las claves son inmutables (llevan timestamp o hash). Esto también cubre los zips existentes (hoy salen `DYNAMIC`) y reduce las lecturas Clase B de R2.
3. Bypass explícito para descargas, SSE y auth.

**Resto de ajustes:**
- **Tiered Cache (Smart Topology)** activado: es gratis y reduce los *misses* al origen.
- **Crawler Hints**: opcional, envía IndexNow automáticamente (ver §8.8).
- Activar **Early Hints** (103), HTTP/3 y brotli/zstd. Dejar **desactivados** Rocket Loader, Email Obfuscation y Zaraz (inyectan JS). Mantener Bot Fight Mode desactivado o vigilado, porque inyecta JS y puede bloquear clientes legítimos (RedManager, instalador).
- **WAF:** 1 regla de rate limiting (Free) sobre `/api/v2/auth/*`. **Turnstile** en registro, recuperación de contraseña y logins tras N fallos.
- **Redirect Rules:** `www` → apex.
- SSL Full (strict) con certificado de origen, HSTS y "Always Use HTTPS".
- **Revisar "AI Crawl Control / Block AI bots" y el "Managed robots.txt"** (§9.4).
- **Token de API** para purgas: el usuario debe crear un token con permiso "Zone → Cache Purge" solo para la zona `sotf-mods.com` (**pregunta abierta**).

---

## 4. Backend

### 4.1 Fastify 5 (5.12.5; Fastify 6 sigue en alpha)

**Estructura por módulos de dominio:** `auth`, `users`, `mods`, `versions`, `media`, `downloads`, `comments`, `reviews`, `favorites`, `collections`, `follows`, `notifications`, `moderation`, `search`, `stats`, `analytics`, `legacy-v1`, `kelvinseek`, `health`.

Cada módulo es un plugin con sus rutas, declaradas a partir de los contratos de `packages/contracts`, y sus servicios en `packages/core`.

**Plugins:**

| Plugin | Versión | Para qué |
|---|---|---|
| `@fastify/cookie` | 11.1 | Cookies de sesión |
| `@fastify/rate-limit` | 11.2 | Store en memoria, clave `cf-connecting-ip` |
| `@fastify/helmet` | 13.1 | Cabeceras de seguridad |
| `@fastify/cors` | 11.3 | Solo si `api.sotf-mods.com` recibe peticiones con credenciales |
| `@fastify/etag` | 6.2 | ETags |
| `@fastify/under-pressure` | 9.2 | 503 si el event loop se atasca |
| `@fastify/swagger` 9.9 + `@scalar/fastify-api-reference` 1.72 | | Documentación en `api.sotf-mods.com/docs` |
| `@fastify/sse` | 0.6 | SSE (oficial) |
| `close-with-grace` | 2.5 | Apagado ordenado |

- **Errores** en formato RFC 9457 (`application/problem+json`).
- **Logs** con pino 10 (el logger nativo de Fastify) en JSON, con `reqId` = `cf-ray`.
- `trustProxy` limitado a la cadena Traefik ← Cloudflare. La IP real sale de `CF-Connecting-IP`.
- **TypeScript:** en desarrollo, **Node 24 ejecuta `.ts` de forma nativa** (probado: `node t.ts` funciona sin flags en v24.17), así que `node --watch src/server.ts`. En producción se empaqueta con **tsdown 0.23** (Rolldown) a `dist/`, que da imágenes pequeñas y un arranque rápido. `tsconfig` usa `erasableSyntaxOnly` (sin `enum`/`namespace`).

### 4.2 Contratos, validación y tipos compartidos

- **Zod 4.6** es la única fuente de verdad. `packages/contracts` define cada endpoint como `{ method, path, params, query, body, response, auth }`.
- **Fastify** registra las rutas desde esos contratos con `fastify-type-provider-zod@7`, que tiene inferencia completa de tipos y `jsonSchemaTransform` para OpenAPI 3.1.
- **Cliente tipado** (~100 líneas) que deriva del mismo contrato: `api.mods.get({ params })` → `Promise<ModDTO>`. Lo usan Astro SSR (URL interna), las islas y el Studio. No hace falta generar código.
- **OpenAPI** se genera para terceros (RedManager, bots de Discord, integraciones de modders) y para GEO (se enlaza desde `llms.txt`).
- Los formularios reutilizan los mismos esquemas (Standard Schema). En islas públicas, donde importa el tamaño, se usa `zod/mini`.
- Las variables de entorno se validan con Zod al arrancar: si falta alguna, el proceso aborta con un mensaje claro.

### 4.3 ORM: Drizzle ORM (sobre la BD existente)

| | Prisma 7.10 (estable) | Prisma 8 (RC, GA prevista en octubre de 2026) | **Drizzle 0.45.3 (estable) → 1.0 (RC)** |
|---|---|---|---|
| Continuidad con el esquema actual | Alta (mismo PSL) | Nueva API y paquetes (`@prisma/orm-postgres`) | Alta: `drizzle-kit pull` genera el esquema TS de las tablas actuales (**probado**) |
| Futuro | Soporte de 18 meses tras la GA de Prisma 8, pero sería una "API vieja" desde el día 1 | En la RC faltan `increment` atómico, la mayoría de *nested writes*, niveles de aislamiento, `$extends`… | Madura; la 1.0 está en RC (rc.4, junio) y el paso v0→v1 está documentado |
| FTS, `tsvector` generado, índices GIN trgm, índices parciales | Parcial: GIN/ops sí, columnas generadas y parciales no → *drift* en `migrate dev` | Sí (nuevo) | **Sí, nativo** (`.using('gin')`, `.where()`, `generatedAlwaysAs`) |
| Runtime | Cliente TS + driver adapter (`@prisma/adapter-pg`) + paso de codegen | TS | Sin codegen ni motor: una capa fina sobre `pg` |
| SQL crudo y consultas analíticas (rollups, co-descargas) | TypedSQL | ? | Primera clase (`sql```) |

**Decisión:** Drizzle `0.45.3` desde ya, usando sobre todo el *query builder* tipo SQL, que apenas cambia en la 1.0. Se migra a 1.0 cuando salga la GA, idealmente antes del lanzamiento. El driver es `pg@8.23` (el mismo que usa pg-boss), con un `Pool` por proceso (api 10, worker 5).

**Spike realizado** (Postgres 16 local efímero; esquema legacy aplicado con `prisma@6.19.0 db push` y después `drizzle-kit@0.31.11 pull`):
- Se generan `schema.ts` + `relations.ts` con los nombres reales: tablas `"Mod"`, `"User"`, `"ModVersion"`…, `mod_id` → `modId: text("mod_id")` y la tabla de unión implícita `_ModToTag(A,B)`.
- Además, `pg_trgm 1.6`, `unaccent 1.1`, `citext`, `btree_gin` y `pg_stat_statements` están disponibles en `postgres:16-alpine`.
- **Defectos del pull que hay que corregir a mano** (y cubrir con un test):
  1. `isNSFW` se generó como `isNsfw: boolean()` **sin nombre de columna explícito**, lo que apuntaría a la columna inexistente `"isNsfw"`. Debe ser `boolean("isNSFW")`.
  2. Los defaults de cadena vacía se generaron mal escapados (`default(')`).
  3. Operador `int4_ops` en el índice único `(slug, userId)` sobre una columna de texto.
  4. Timestamps `timestamp(3)` sin zona horaria (el `DateTime` de Prisma). Se tratan como UTC con `mode: 'date'`.
- **Test de guardia en CI:** `drizzle-kit` compara el esquema TS con un dump del esquema de producción y **no debe haber diferencias** antes de cualquier migración.

**Estrategia de migraciones (sin downtime y sin pérdida de datos):**
1. **Baseline:** la migración `0000` es el esquema actual, marcado como aplicado y sin ejecutar.
2. **Solo cambios aditivos mientras el legacy siga vivo (*expand*):**
   - tablas nuevas;
   - columnas `NULL` o con `DEFAULT`;
   - índices creados con `CREATE INDEX CONCURRENTLY`;
   - `DEFAULT now()` en `updatedAt`;
   - extensiones (`pg_trgm`, `unaccent`);
   - tablas nuevas para sesiones, notificaciones, etc.

   El cliente Prisma del legacy selecciona columnas de forma explícita e ignora lo que no conoce.
3. **Nada de renombrar ni borrar** hasta la fase *contract*, semanas después del corte y con backup verificado.
4. Las migraciones se ejecutan en un **job de pre-despliegue** (`node dist/migrate.js`), no al arrancar la API. Así se evita que dos réplicas del *rolling update* migren a la vez.

### 4.4 Base de datos: extensiones, índices y búsqueda

**Extensiones:** `pg_trgm`, `unaccent`, `citext` (opcional para email) y `pg_stat_statements` (requiere `shared_preload_libraries`, que se configura en la BD de Coolify).

**Índices para consultas calientes:**
- `Mod`: índice parcial `(isApproved, isNSFW, type, lastReleasedAt DESC) WHERE isApproved`; `(categoryId)`; GIN `search_tsv`; GIN trgm sobre `lower(immutable_unaccent(name))`.
- `ModVersion`: `(modId, createdAt DESC)` y **UNIQUE `(modId, version)`**, previa comprobación de duplicados.
- `ModDownload` (~2M filas, *append-only*): **BRIN** en `createdAt` + `(modVersionId, createdAt)`.
- `Comment`: `(modId, createdAt DESC) WHERE NOT isHidden` y `(replyId)`.
- `ModFavorite`: **UNIQUE `(userId, modId)`** (antes hay que deduplicar; el legacy no lo impide).
- `User`: **UNIQUE `lower(email)`**. Antes hay que auditar duplicados que solo difieran en mayúsculas, porque el login legacy es *case-insensitive*.

**FTS:** columna generada `search_tsv`:

```
setweight(to_tsvector('simple', immutable_unaccent(name)),'A')
|| setweight(to_tsvector('english', immutable_unaccent(shortDescription)),'B')
|| setweight(to_tsvector('english', immutable_unaccent(description)),'C')
```

`unaccent` no es `IMMUTABLE`, así que se envuelve en una función `immutable_unaccent`. La consulta combina `websearch_to_tsquery` + `ts_rank_cd` con `similarity()` de trigram para tolerar erratas ("kelvn" → "Kelvin").

**Tablas nuevas previstas** (el detalle del modelo corresponde a otro track):
- `Session`, `PersonalAccessToken`, `OAuthAccount`, `Passkey`;
- `Notification`, `Follow`, `Collection` (+ `CollectionItem`), `Report`, `AuditLog`;
- `ModTranslation`, `Media` (variantes + thumbhash + color dominante);
- `ModStatsDaily` (vistas, únicas, descargas, favoritos por día), `AnalyticsEvent` (retención de 90 días);
- `Achievement`/`UserAchievement` (gamificación).

Se completa `ModReview`: reseñas visibles, moderación y recálculo de `averageRating`/`reviewsCount` en una transacción.

- **Roles:** `role` (`user | trusted | moderator | admin`), con `isTrusted` sincronizado mientras coexista con el legacy.
- **Versiones:** columna `versionSortKey` calculada con `semver.coerce` (soporta "1.0", "v2", pre-releases). `isLatest` se mantiene en la misma transacción que la publicación. Así se corrige el orden como texto del legacy.

### 4.5 Autenticación y seguridad

**Sesiones:**
- Token aleatorio de 32 bytes (base64url) en la cookie **`__Host-sotf_sid`** (`HttpOnly; Secure; SameSite=Lax; Path=/`, sin `Domain`). Solo funciona si la API se sirve en el **mismo origen** `sotf-mods.com/api/*` (§6.3).
- En la BD se guarda `sha256(token)`, `userId`, `expiresAt` (30 días deslizantes, renovados cuando quedan menos de 15; máximo absoluto 90), `lastSeenAt`, un hash de IP y un resumen del UA.
- El usuario puede ver y cerrar sus sesiones desde el Studio.
- Si no fuera posible usar el mismo origen, el plan B es la cookie `__Secure-sotf_sid; Domain=sotf-mods.com` + CORS con credenciales hacia `api.sotf-mods.com`, que es *same-site* y por tanto compatible con SameSite=Lax.
- Adiós al token en `localStorage`, en cookies legibles por JS y en el DOM.

**CSRF:** para métodos no seguros se exige:
- `Sec-Fetch-Site: same-origin`;
- fallback: `Origin` ∈ allowlist;
- `Content-Type: application/json` (se rechazan `form-urlencoded`, `multipart` y `text/plain`, salvo el *beacon* de analítica, que no tiene efectos de cuenta).

Junto con SameSite=Lax no hacen falta tokens CSRF. Los GET que modifican estado (`favorite toggle`, `approve`) **pasan a POST, PUT o DELETE**.

**Contraseñas:**
- `@node-rs/argon2` verifica los PHC existentes (**probado**) y `@node-rs/bcrypt` verifica los `$2b$` existentes (**probado**); en ese caso se rehashea a argon2id tras un login correcto.
- Los hashes nuevos usan argon2id `m=19456 KiB, t=2, p=1` (mínimo de OWASP) con un **semáforo de concurrencia** (2–4) para no agotar la RAM del VPS.
- Los hashes legacy (m=64 MiB) se aceptan tal cual.
- **Caso límite:** el bcrypt de Bun pre-hashea las contraseñas de más de 72 bytes. El máximo legacy es de 64 caracteres, pero con caracteres multibyte podría superarse. Hay que comprobar en la BD cuántos `$2` existen:

  ```sql
  SELECT left(password,4), count(*) FROM "User" GROUP BY 1;
  ```

**Login:**
- Mensaje de error genérico ("email o contraseña incorrectos") y tiempo constante: si el usuario no existe se verifica igualmente un hash señuelo.
- Rate limit por IP y por email, Turnstile tras 3 fallos y auditoría en `LoginAttempt`, la tabla hoy sin uso, guardando hash de IP y UA real (no `"undefined"`).

**Registro:**
- Turnstile y verificación de email (nueva).
- Los usuarios existentes quedan como verificados, o se les pide verificar de forma suave.
- Slugs reservados.
- Normalización Unicode NFC (arregla las **diéresis**).

**Reset de contraseña:**
- Token de un solo uso, con validez de 1 h y guardado como hash (el legacy lo guarda en claro).
- Se mantiene la ruta `/reset-password?token=` para que funcionen los emails enviados durante la hora del corte.

**Tokens:**
- **PATs** (`sotfm_pat_…`, hasheados y con scopes `read`/`publish`) para CLI, GitHub Actions de modders ("publicar release desde CI") y herramientas.
- Los tokens JWT legacy (tabla `Token`) solo se aceptan en la **capa v1**, comprobando `expiresAt`, y se retiran tras el corte.

**OAuth (fase 2):**
- Discord y GitHub con **arctic 3.7**; Steam con OpenID 2.0 implementado a mano (unas 50 líneas de verificación).
- Una cuenta solo se enlaza por email verificado y con confirmación explícita.
- **Passkeys** con `@simplewebauthn/server` 14 y **TOTP** (`@oslojs/otp`) obligatorio para moderadores y admins.

**Otras medidas:**
- **Autorización** centralizada (`can(user, 'mod.approve', mod)`). Todas las acciones de moderación quedan en `AuditLog`.
- **Rate limits:** API anónima ~300 req/min/IP; auth 5/min/IP; subidas 20/h/usuario; comentarios 10/min/usuario; **KelvinSeek** 10/min/IP con presupuesto diario de tokens (hoy no tiene autenticación).
- **Cabeceras:**
  - CSP de Astro (`security.csp`) con hashes + `strict-dynamic`, empezando en *report-only*;
  - `Referrer-Policy: strict-origin-when-cross-origin`;
  - `Permissions-Policy` restrictiva;
  - `frame-ancestors 'none'`, salvo en las rutas `/embed/*`.

**¿Por qué no better-auth 1.7?** Es muy completo (OAuth, passkeys, 2FA), pero guarda el hash en una tabla `account` separada con su propio esquema e IDs. Adoptarlo obligaría a copiar los hashes de ~3,9k usuarios y a amoldarse a su modelo y a sus rutas. Con arctic + `@simplewebauthn` + ~300 líneas propias encajamos en el esquema existente y seguimos teniendo el control. Hay que revaluarlo si el alcance de la autenticación crece mucho.

### 4.6 Jobs y cron: pg-boss 12 (sin Redis)

pg-boss aporta, sobre Postgres:
- reintentos con backoff, `singletonKey` y throttle/debounce;
- `schedule()` con sintaxis cron;
- colas con prioridad;
- *dead-letter*.

No se necesita otro servicio. BullMQ exigiría Redis. node-cron no persiste nada, no reintenta y no coordina varios procesos.

**Colas previstas:**

| Área | Colas |
|---|---|
| Media | `media.process` (sharp), `og.render` |
| Versiones | `version.inspect`: zip → lista de entradas, DLLs, manifiesto RedLoader, SHA-256, tamaño real, detección de *zip bombs* por ratio; corrige también el bug del tamaño en las builds |
| Caché e indexación | `cdn.purge` (debounced), `indexnow.ping` (debounced), `search.index` |
| Contenido | `translate.mod` (LLM) |
| Email y difusión | `email.send`, `digest.mentions` (cada 10 min; sustituye al cron legacy), `digest.weekly-creator`, `discord.announce` (webhook del Discord oficial al publicar o destacar) |
| Estadísticas | `stats.rollup` (horario/diario → `ModStatsDaily`; **sustituye al full scan cada 30 min**), `achievements.evaluate` |
| Limpieza | `cleanup.sessions`, `cleanup.incoming`, `analytics.retention` |

El worker es un **proceso aparte** (misma base de código, `CMD` distinto) con `sharp.concurrency(1)`. Así el trabajo pesado no bloquea el event loop de la API y se respeta el VPS compartido.

### 4.7 Tiempo real: SSE + Postgres LISTEN/NOTIFY

- `GET /api/v2/stream` (SSE con `@fastify/sse`):
  - canal `user:{id}`: notificaciones (respuestas, menciones, "tu mod fue aprobado", "nueva versión de un mod que sigues");
  - `mod:{id}` (opcional): contador en vivo y comentarios nuevos;
  - `moderation`: cambios en la cola.
- **Patrón:** el evento solo **avisa** y el cliente llama a `queryClient.invalidateQueries(...)`. La verdad sigue estando en la BD: las notificaciones se persisten y se soporta `Last-Event-ID`.
- **Puente entre procesos:** el worker y la API hacen `pg_notify('events', json)` y la API escucha con **una** conexión dedicada que reparte a los clientes conectados. No hace falta Redis mientras haya una sola instancia.
- **Detrás de Cloudflare:** *heartbeat* `: ping` cada 25 s (el timeout de inactividad del proxy es de ~100 s), cabeceras `Cache-Control: no-cache` y `X-Accel-Buffering: no`, y regla de bypass de caché.
- WebSockets no aportan nada aquí: todo es servidor → cliente.

### 4.8 Email

- **Resend 6.30**, que ya se usa, con plantillas de **React Email** (`react-email` 6.11 / `@react-email/components` 1.0) en `packages/emails`. Se renderizan en el worker.
- **Correos:** verificación, reset, digest de menciones, mod aprobado o rechazado (con motivo), informe semanal del creador ("tus mods: +X descargas") y nueva versión de un favorito (opt-in).
- Todos los correos no transaccionales llevan `List-Unsubscribe` + `List-Unsubscribe-Post` (one-click, RFC 8058) y preferencias por tipo.

### 4.9 Búsqueda

- **Con ~300 mods, ~40 builds y ~50 autores no se justifica Meilisearch ni Typesense:** serían otro servicio, más RAM en el VPS compartido y un pipeline de sincronización. Postgres FTS + trigram responde en menos de 5 ms con estos volúmenes.
- **Cmd+K:**
  - Índice JSON por locale en `/_data/search-index.{locale}.json`, cacheado en el borde con el tag `list:mods`.
  - Incluye mods, builds, creadores, categorías, tags, guías y **comandos** ("Subir mod", "Ir al Studio", "Cambiar idioma", "Guía de instalación").
  - Tamaño: ~300 × 200 B ≈ 60 KB en crudo, **~15 KB br**.
  - Búsqueda *fuzzy* y por prefijo en el navegador con **MiniSearch 7.2** (~7 KB). Los resultados son instantáneos, sin latencia de red y funcionan aunque la API esté lenta.
  - La opción "Ver todos los resultados" lleva a `/search?q=`, que es SSR con FTS y `noindex`.
- **Futuro (opcional):** búsqueda semántica "Pregúntale a Kelvin" con `pgvector` y embeddings, reutilizando la idea de KelvinSeek. Requiere la imagen `pgvector/pgvector:pg16`; queda fuera del alcance inicial.

### 4.10 Pipeline de imágenes

1. **Subida directa a R2** (§4.11) → `incoming/{uuid}`.
2. **Job `media.process`:**
   - lee por stream y valida los *magic bytes* con `file-type` 22;
   - limita la resolución (≤ 8k px) y rechaza SVG;
   - `sharp` 0.35: `rotate()` (auto-orientación), elimina EXIF/GPS, y redimensiona a anchos **[320, 640, 960, 1440, 1920]** sin ampliar;
   - codifica **AVIF** (q≈50, effort 4) + **WebP** (q≈75);
   - calcula **thumbhash** (≈25 B) y el color dominante;
   - sube las variantes a `media/{mediaId}/{w}.{avif|webp}` con `Cache-Control: public, max-age=31536000, immutable`;
   - guarda `Media { width, height, thumbhash, dominantColor, variants }`.
3. **Render:**
   - `<picture>` con `srcset`/`sizes`, `width`/`height` explícitos (CLS 0) y `loading="lazy"` + `decoding="async"` salvo en el LCP;
   - la imagen hero lleva `fetchpriority="high"` y `<link rel="preload" as="image" imagesrcset=…>`;
   - el *placeholder* es el color dominante como fondo, y en la hero se añade el thumbhash decodificado a un data-URL mínimo.
4. **Backfill de lo existente** (script de migración, ejecutado en la fase de corte): genera variantes de las ~1–2k imágenes actuales **sin borrar los originales**. Hoy pesan entre 1 y 3 MB; con AVIF a 640w se espera que queden en ~30–80 KB (estimación).
5. **Avatares** a 64, 128 y 256. Imágenes dentro de descripciones Markdown: el worker **las replica en R2**, lo que da dimensiones conocidas (sin CLS), sin *hotlinking* roto ni fugas de privacidad.
6. **Descartado:** las transformaciones de imagen de Cloudflare (`/cdn-cgi/image`). La cuota gratuita es de 5.000 transformaciones únicas al mes y (mods × imágenes × anchos × formatos) la supera; generar las variantes una vez con sharp es gratis y determinista.

### 4.11 Subidas directas a R2 (sin pasar por servidores)

- **Hechos de R2:**
  - Las URLs presigned soportan GET, HEAD, PUT y DELETE; **POST (policy de formulario) no**.
  - Caducan entre 1 s y 7 días.
  - **Solo funcionan en `<account>.r2.cloudflarestorage.com`, no en dominios propios.**
  - Si se firma `Content-Type`, R2 lo aplica (devuelve 403 si el cliente envía otro).
- **Flujo:**
  1. `POST /api/v2/uploads` con `{ kind, filename, size, contentType, sha256? }`.
  2. El servidor valida el tipo, el tamaño máximo por `kind` y la cuota del usuario.
  3. El servidor responde con una URL PUT presigned (**5 min**) para `incoming/{uploadId}` con **`Content-Type` y `Content-Length` firmados** (`signableHeaders` / `unhoistableHeaders` en `@aws-sdk/s3-request-presigner` 3.1142).
  4. El cliente sube con `XMLHttpRequest` (progreso real) directamente a R2.
  5. `POST /api/v2/uploads/{id}/complete` → la API hace HEAD, comprueba el tamaño y encola el job.
- **Tras la inspección:** `CopyObject` a la clave final inmutable `mods/{modId}/{versionId}/{Nombre}-{version}.zip` con `MetadataDirective: REPLACE`, `Content-Type` correcto, **`Content-Disposition: attachment; filename="…"; filename*=UTF-8''…`** y `Cache-Control` inmutable. Después se borra `incoming/`.
- **Ficheros grandes** (> 100 MB, raros en mods): *multipart* presigned (`UploadPart`) desde el mismo asistente. Uppy (`@uppy/aws-s3` 6) lo haría pero añade ~60–100 KB, así que un uploader propio de unas 150 líneas es suficiente.
- **Bucket:**
  - CORS limitado a `https://sotf-mods.com` y `https://beta.sotf-mods.com` (PUT, cabeceras `content-type`, `content-length`, expone `ETag`);
  - **lifecycle**: borra `incoming/` tras 1 día y aborta los *multipart* incompletos tras 1 día;
  - token R2 con permiso de lectura/escritura **solo en ese bucket**.
- **Zips existentes sin `Content-Disposition`:**
  - opción 1: script de corte que hace `CopyObject` in-place con `MetadataDirective: REPLACE` para añadir `Content-Disposition` y `Cache-Control`, conservando `Content-Type`. Es un cambio de metadatos, no de datos;
  - opción 2: aceptar el nombre con el prefijo de timestamp.

### 4.12 Descargas: contar y redirigir (302) directamente a R2

- **Rutas:**
  - `GET /mods/{author}/{slug}/download/{version}` (legacy, se mantiene);
  - `GET /api/v2/versions/{id}/download`;
  - v1: `GET api.sotf-mods.com/api/mods/{mod_id}/download/{version}` y `/api/mods/slug/{u}/{s}/download/{v}`.
- **Proceso:**
  1. Resolver la versión (LRU).
  2. Encolar el evento en un **buffer en memoria**, que se vuelca cada 2–5 s en un solo `INSERT … VALUES (…),(…)` y también al apagar.
  3. **Responder de inmediato** con `302`, `Location: https://r2.sotf-mods.com/{clave codificada segmento a segmento con encodeURIComponent}`, `Cache-Control: no-store` y `X-Robots-Tag: noindex`.
- La codificación del `Location` es necesaria porque las claves tienen espacios, apóstrofes y caracteres no ASCII.
- **Deduplicación:**
  - una descarga por `(versionId, ipHash, día UTC)`, con un Set en memoria por día más `ON CONFLICT DO NOTHING` sobre un índice único parcial;
  - **no cuentan** los bots (`isbot` 5), los HEAD ni los prefetch/prerender (cabeceras `Sec-Purpose`/`Purpose`).
- **`ipHash`** = HMAC-SHA256(ip, sal diaria) truncado. No se guardan IPs en claro (RGPD) y el hash no es reversible cuando la sal rota.
- **Compatibilidad:** mientras exista el legacy, cada descarga contada **inserta también una fila en `ModDownload`**. Así el recálculo del legacy sigue cuadrando y el *rollback* es seguro. A la tabla se le añaden columnas nullable (`ipHash`, `country` desde `CF-IPCountry`, `source`: web, api, manager o in-game).
- **Clientes externos:** la mayoría (HttpClient de .NET, curl -L, navegadores) siguen redirecciones HTTPS→HTTPS. Aun así, hay que revisar en los logs los User-Agent que llaman a v1 y comprobar si alguno espera el cuerpo directamente (§4.17).
- **Términos de Cloudflare:** servir ficheros grandes desde **R2 con dominio propio** está permitido; hacer proxy de zips a través del origen detrás del CDN sería cuestionable.
- Enlaces de descarga con `rel="nofollow"`, excluidos de las Speculation Rules y con `Disallow` en `robots.txt`.

### 4.13 Contenido generado por usuarios (adiós XSS)

- Se guarda el **Markdown fuente**. El HTML sanitizado se genera **al escribir** en `packages/markdown`:
  - pipeline: `unified` 11 + `remark-parse` 11 + `remark-gfm` 4 + `remark-rehype` 11 (sin `allowDangerousHtml`) + `rehype-sanitize` 6 con allowlist + `rehype-stringify` 10;
  - resultado en la columna `descriptionHtml` + `markdownVersion`; si cambia el pipeline, un job re-renderiza.
- **Enlaces** con `rel="nofollow ugc noopener"`. Embeds de YouTube como **facade** (lite-youtube): la miniatura se muestra y el iframe solo carga al hacer clic.
- **Comentarios:** Markdown reducido (sin imágenes ni encabezados). Las `@menciones` se enlazan en el servidor. Nunca `innerHTML` con datos sin sanitizar, nunca `|safe` sobre texto de usuario.
- Todo UTF-8 con normalización NFC (corrige las diéresis perdidas).

### 4.14 Caché en la API

- **GET públicas:**
  - `Cache-Control: public, max-age=0` + `Cloudflare-CDN-Cache-Control: max-age=60, stale-while-revalidate=600` + `Cache-Tag`;
  - `ETag` débil → 304;
  - LRU en proceso invalidado por `NOTIFY cache`.
- **Respuestas de usuario** (`/me`, notificaciones): `private, no-store`.
- **Sin `@fastify/compress`:** Cloudflare comprime, y comprimir en el origen gasta CPU del VPS.

### 4.15 Observabilidad

- **Salud:** `GET /healthz` (vivo) y `GET /readyz` (BD + pg-boss + LISTEN activo). Lo usan Coolify, el apagado ordenado y `@fastify/under-pressure`.
- **Logs:** JSON con pino (visor de logs de Coolify). `pg_stat_statements` para detectar consultas lentas.
- **Errores:** **Sentry SaaS** (plan gratuito) en la API, el worker, el servidor web y el Studio (`@sentry/node`, `@sentry/astro`, `@sentry/react` 11.1).
  - **No** se carga el SDK de navegador de Sentry en las páginas públicas (~25–30 KB); allí basta un *beacon* propio de `window.onerror` hacia `/api/v2/e`.
  - Alternativa autoalojada: GlitchTip (compatible con Sentry), con un coste de RAM a tener en cuenta.
- **Uptime:** un monitor externo gratuito (UptimeRobot/Better Stack) sobre `/healthz` y sobre un mod concreto, o Uptime Kuma si ya existe.

### 4.16 Analítica first-party (sustituye al Umami roto de `monitor.sotf-mods.com`)

- **Beacon** con `navigator.sendBeacon('/api/v2/e', JSON)` (body `text/plain` para evitar el *preflight*) con `{path, ref, locale, entity, vitals?}`. **Sin cookies ni PII.**
- **Servidor:**
  - país desde `CF-IPCountry` y clase de dispositivo desde el UA;
  - `visitorHash = HMAC(ip+ua, sal diaria)` para contar únicos, como hace Plausible;
  - filtra bots;
  - ignora `document.prerendering` hasta que ocurra `prerenderingchange`.
- **Almacenamiento:** `AnalyticsEvent` (90 días) + rollups `ModStatsDaily`. **Esto alimenta el dashboard del creador** (vistas, descargas, conversión vista→descarga, referrers incluidos chatgpt.com, perplexity.ai y copilot, países) y el panel de administración.
- **RUM de Core Web Vitals** con `web-vitals` 6.2 (build de atribución, ~2–3 KB, cargado en `idle`). Se guarda el p75 por plantilla en el admin.
- **Legal:** la analítica sin cookies con hash rotatorio suele poder usarse sin consentimiento en la UE si se cumplen ciertas condiciones (medición de audiencia, sin cruce de datos). **Debe revisarse legalmente.**

### 4.17 Capa de compatibilidad v1 (`api.sotf-mods.com/api/*`)

- Se reimplementan en Fastify las **rutas de lectura** v1 con la **misma forma JSON** (`{status, data, meta}`), como adaptador sobre los servicios v2:
  - `GET /api/mods`, `/api/mods/:mod_id`, `/api/mods/slug/:u/:s`, `/api/mods/featured`, `/api/builds/featured`;
  - `/api/categories`, `/api/stats`, `/api/stats/builds`, `/api/users/:slug`, `/api/users/:slug/stats`, `/api/comments`, `/api/mods/find`;
  - las rutas de descarga (→ 302).
- Se corrigen los problemas del legacy: los **no aprobados dejan de listarse y descargarse** públicamente, y `approved=false` solo funciona para moderadores.
- **Rutas v1 que mutan estado** (su único cliente era el frontend legacy): `410 Gone` con un mensaje que apunta a la v2, **después** de revisar en logs y en las analíticas de Cloudflare los User-Agent que las usan durante 2–4 semanas antes del corte. Si el mod BuildShare in-game u otra herramienta usa `/api/builds/*` o `/api/kelvinseek/*`, se mantienen.
- **`/api/kelvinseek/prompt` y `/clear`:** se mantienen (chatbot in-game) con rate limit, presupuesto diario, `GPT_API_KEY` renombrada a `OPENAI_API_KEY` y el modelo configurable.
- **CORS v1:** `*` **sin** credenciales, que era la combinación correcta.
- **Nuevo:** `GET /v2/*` como API pública documentada (OpenAPI + Scalar) para RedManager, bots y modders.

---

## 5. Monorepo y tooling

### 5.1 Estructura

```
sotf-mods-v2/
├─ apps/
│  ├─ web/          # Astro 7 SSR (Node): web pública + /studio SPA (React, TanStack) + endpoints SEO (sitemaps, feeds, llms)
│  ├─ api/          # Fastify 5: /api/v2, capa /api v1, SSE, descargas, KelvinSeek
│  └─ worker/       # pg-boss: media, OG, inspección de zips, emails, rollups, purgas CDN, IndexNow, traducciones
├─ packages/
│  ├─ contracts/    # Zod 4: DTOs + contratos de endpoints + cliente tipado + generación OpenAPI
│  ├─ db/           # Drizzle: esquema (mapeado a tablas legacy), migraciones, consultas, seeds
│  ├─ core/         # servicios de dominio (permisos, publicación, contadores, notificaciones) — usados por api y worker
│  ├─ ui/           # React + theme.css (Tailwind 4 @theme) + iconos — usado por web (SSR sin JS) y studio
│  ├─ i18n/         # Paraglide (messages/*.json), utilidades de locale/hreflang
│  ├─ markdown/     # pipeline unified/remark/rehype sanitizado (servidor + preview del studio)
│  ├─ emails/       # plantillas React Email
│  └─ config/       # tsconfig base, biome.json, vitest preset
├─ tooling/         # scripts de migración legacy (backfill imágenes, dedupe favoritos, auditoría emails, mapa de redirecciones)
├─ docker/          # Dockerfile.web, Dockerfile.api (api y worker comparten imagen)
├─ .github/workflows/
└─ docs/plan/…
```

### 5.2 Herramientas

- **pnpm 12** (dist-tag `latest` = 12.6.0):
  - workspaces y **catalogs** (`catalog:` en `pnpm-workspace.yaml`) para fijar una sola versión de React, Zod, etc.;
  - `pnpm deploy --prod` para crear imágenes podadas;
  - la configuración va en `pnpm-workspace.yaml` (pnpm 12 ya no lee `package.json#pnpm`).
  - Se prefiere a npm workspaces por el aislamiento estricto (sin dependencias fantasma), la velocidad y los catalogs.
- **Turborepo 2.11:** pipeline `build`/`test`/`lint` con caché local y en CI, `--filter=...[origin/main]` (solo lo afectado) y **`turbo prune --docker`**, que crea capas Docker mínimas por app. La configuración es poca (un `turbo.json`).
- **TypeScript 7.0** (compilador nativo en Go, 8–12× más rápido) para `apps/api`, `apps/worker` y `packages/*`. **`apps/web` fija `typescript@6.0.3`** para `astro check`/Volar, porque TS 7 aún no expone la API de JS que usan Astro y Volar. `strict` + `noUncheckedIndexedAccess` + `erasableSyntaxOnly`.
- **Biome 2.5:** lint + formato en un único binario rápido. Cubre TS, TSX, JSON y CSS, y los `.astro` con `html.experimentalFullSupportEnabled`. Incluye reglas de hooks, a11y y `noDangerouslySetInnerHtml`.
  - Descartados: ESLint 10 + Prettier (más configuración y más lentos) y Vite+/Oxlint+Oxfmt (Vite+ sigue en beta).
- **Pruebas:**

  | Herramienta | Uso |
  |---|---|
  | Vitest 5 (con *projects*) | Unitarias e integración |
  | Testcontainers (`@testcontainers/postgresql` 12.2) con `postgres:16-alpine` | Tests de API contra una BD idéntica a la de producción |
  | MinIO/SeaweedFS en contenedor, o un bucket R2 de desarrollo | Emular S3 en los tests |
  | Playwright 1.63 + `@axe-core/playwright` 4.13 | E2E: login con un hash legacy de Bun, asistente de subida, descarga con 302, comentarios, moderación; a11y en cada página clave |
  | **Lighthouse CI** (`@lhci/cli` 0.15, con Lighthouse 12.6) | Presupuestos en PR contra el build de preview |
  | Lighthouse 13 / Unlighthouse 0.18 | Barrido completo de staging en un cron semanal |

### 5.3 CI/CD (GitHub Actions)

```
PR:    pnpm install (cache) → biome ci → turbo typecheck → vitest (unit) → vitest (integration, testcontainers)
       → turbo build → docker compose (web+api+worker+pg+s3 emulado) → playwright e2e + axe → LHCI (budgets)
main:  build imágenes (turbo prune --docker, multi-stage) → push GHCR (tags: sha + staging)
       → pre-deploy job: migraciones (staging) → webhook Coolify deploy staging → smoke tests
tag v*: promover la misma imagen (retag) → migraciones prod (expand) → webhook Coolify prod → purga tag `html` → smoke
```

**Construir en CI y no en Coolify** evita cargar el VPS compartido con builds de Vite/Astro que consumen mucha CPU y RAM, y permite desplegar exactamente la imagen probada. Coolify despliega "Docker Image" con *rolling update*.

---

## 6. Docker, Coolify, entornos y corte

### 6.1 Imágenes

- **Base `node:24-alpine`:**
  - `sharp` tiene binarios precompilados para `linuxmusl-x64`;
  - incluye `wget` de busybox, **imprescindible** porque Coolify ejecuta los health checks dentro del contenedor con `curl` o `wget`;
  - se descarta distroless por no tener ninguno de los dos.
- **Multi-stage:**
  1. `turbo prune --docker`;
  2. `pnpm fetch` + `install --offline`;
  3. build;
  4. `pnpm deploy --prod`;
  5. etapa final con solo `dist/` + `node_modules` de producción.

  Se ejecuta con `USER node`, `NODE_ENV=production` y `NODE_OPTIONS=--max-old-space-size=…` según el límite de memoria.
- **Sin `HEALTHCHECK` en el Dockerfile** (si existe, tiene prioridad sobre el de Coolify), para gestionar el health check desde Coolify.
- **Apagado ordenado:**
  - `close-with-grace`: al recibir SIGTERM, deja de aceptar peticiones, termina las que están en curso, vuelca el buffer de descargas, cierra SSE (el cliente reconecta) y cierra el pool;
  - *Stop Grace Period* de 30 s;
  - como proceso PID 1 hay que instalar los handlers o usar `tini`.
- **Tamaño estimado:** web ~150 MB y api/worker ~200 MB (la mayor parte, libvips).

### 6.2 Topología en Coolify (proyecto nuevo "sotf-mods-v2"; sin tocar otros proyectos)

| App Coolify | Imagen/CMD | Dominios | Puerto | Health | Memoria orientativa |
|---|---|---|---|---|---|
| `sotf-v2-web` | `ghcr.io/…/sotf-web` · `node dist/server/entry.mjs` | `sotf-mods.com` (+ `www` → 301 en Cloudflare) | 4321 | `GET /healthz` | 384 MB |
| `sotf-v2-api` | `ghcr.io/…/sotf-api` · `node dist/server.js` | `api.sotf-mods.com` **y** `sotf-mods.com/api` (§6.3) | 3001 | `GET /healthz` | 384 MB |
| `sotf-v2-worker` | misma imagen api · `node dist/worker.js` | — | — | comando (`wget` a `:3002/healthz` interno) | 512 MB |
| `sotf-mods-db` (existente `ukg0ks4`) | postgres:16-alpine | — | — | nativo | — |

- **Tres aplicaciones separadas en lugar de un Docker Compose:** Coolify **no hace *rolling updates* con Compose**, cuyos despliegues tienen un corte de 10–30 s. Las apps de Dockerfile o imagen sí los hacen: esperan al health check del contenedor nuevo antes de retirar el viejo, siempre que no haya puertos mapeados al host y se usen los nombres de contenedor por defecto.
- **BD:** se reutiliza la instancia actual.
  - **Recomendación de seguridad:** Coolify la marca como `is_public=true` en el puerto 5433. **Debería desactivarse** la exposición pública; se puede acceder por túnel SSH para mantenimiento.
  - Backups programados de Coolify a un bucket R2 privado `sotf-mods-backups` (diarios, retención de 30 días), además de uno manual antes de cada migración.
  - **Restaurar el backup en staging** cada semana sirve a la vez como prueba de restauración y como datos frescos para staging.
  - Postgres 18 queda para después del lanzamiento. No se mezcla un salto de versión mayor con el corte.

### 6.3 `/api` en el mismo origen (cookie `__Host-`, sin CORS ni preflight)

1. **Preferida:** en la app `sotf-v2-api`, dominios `https://api.sotf-mods.com,https://sotf-mods.com/api` con **"Strip Prefixes" desactivado** (la API escucha en `/api/...`). Traefik da prioridad a la regla más larga (`Host && PathPrefix`) sobre la de la web.
   - Hay *issues* conocidas de Coolify con dominios con path, así que **se valida en staging**.
   - Si fallan, se añade una etiqueta Traefik personalizada al contenedor de la API.
2. **Plan B:** proxy en Astro 7 mediante `src/fetch.ts`: `/api/*` → `http://sotf-v2-api:3001` por la red interna de Coolify, en streaming. Las subidas grandes no pasan por aquí porque van directas a R2. Añade un salto y acopla la web a la API.
3. **Plan C:** separar orígenes, con cookie `Domain=sotf-mods.com` + CORS con credenciales hacia `api.sotf-mods.com`. Implica *preflights* y enviar la cookie a los subdominios `r2.`/`api.`.

**En desarrollo:** `server.proxy` de Vite/Astro redirige `/api` a `localhost:3001`.

### 6.4 *Deploy skew* (HTML cacheado que apunta a assets antiguos)

- Los assets `/_astro/*` llevan hash. Un HTML en caché puede referenciar hashes que el contenedor nuevo ya no tiene.
- **Mitigación:**
  1. purgar el tag `html` cuando el contenedor nuevo está *healthy*;
  2. los assets antiguos populares siguen en el borde de Cloudflare (caché inmutable de 1 año);
  3. recargar la página ante `vite:preloadError` o un fallo de chunk;
  4. **opcional:** que CI suba `/_astro/*` a R2 (`assets/`) y que la web, ante un 404 de `/_astro/x`, lo sirva desde ese archivo con retención de 30 días.

### 6.5 Staging

- `beta.sotf-mods.com`, con la API en `beta.sotf-mods.com/api`:
  - BD Postgres **aparte**, restaurada desde el backup de producción;
  - bucket R2 `sotf-mods-staging` para escrituras (los medios existentes se leen de `r2.sotf-mods.com`);
  - `X-Robots-Tag: noindex` + `robots.txt` con `Disallow: /`;
  - Turnstile en modo test;
  - emails a sandbox o solo a una allowlist.
- **Preview por PR:** opcional, con las *preview deployments* de Coolify. Consume recursos del VPS, así que solo se usa bajo demanda.

### 6.6 Corte y *rollback* (resumen; el detalle corresponde al track de migración)

1. **Antes:**
   - migraciones *expand* aplicadas en producción (el legacy sigue funcionando);
   - **congelar `prisma db push`**: documentarlo y, a ser posible, retirar ese permiso al usuario de BD del legacy;
   - generar el mapa de redirecciones;
   - backfill de imágenes y OG;
   - bajar el TTL de DNS;
   - la v2 ya pasó una beta pública en `beta.sotf-mods.com` contra una copia de los datos.
2. **Corte:**
   - en Coolify, mover los dominios `sotf-mods.com` y `api.sotf-mods.com` a las apps v2;
   - **parar el API legacy** para que sus crons no dupliquen los emails de menciones ni recalculen contadores en paralelo (se conserva la imagen);
   - purgar todo en Cloudflare;
   - lanzar las pruebas de humo.
3. **Rollback:** devolver los dominios al legacy. La BD solo recibió cambios aditivos y v2 siguió escribiendo en `ModDownload`, `PendingMention` e `isTrusted`, así que es compatible.
4. **Contract:** 2–4 semanas después, con un backup verificado, se retiran las columnas y tablas obsoletas (`Token`, `KelvinGPTMessages` si ya no se usa, etc.). Tag y Reviews se incorporan al modelo nuevo.

### 6.7 Variables de entorno

**Se eliminan:**

| Variable | Motivo |
|---|---|
| `FILE_UPLOAD_ENDPOINT`, `FILE_UPLOAD_TOKEN`, `FILE_PREVIEW_ENDPOINT` | Servidor files.* muerto |
| `KELVINGPT_API`, `KELVINGPT_API_AUTHORITY` | Sin uso |
| `FILE_DOWNLOAD_ENDPOINT` | Se sustituye por `R2_PUBLIC_BASE_URL` |
| `JWT_SECRET` | Ya no hay JWT; lo reemplaza `APP_SECRET` |
| `BASE_URL`, `PUBLIC_API_URL`, `R2_CUSTOM_DOMAIN` | Se renombran o fusionan |

**Nuevo conjunto (validado con Zod al arrancar):**

| Grupo | Variables |
|---|---|
| Base | `NODE_ENV`, `PUBLIC_SITE_URL=https://sotf-mods.com`, `INTERNAL_API_URL=http://sotf-v2-api:3001`, `DATABASE_URL`, `APP_SECRET` (HMAC de sesiones, hash de IP, secreto interno de purga) |
| R2 | `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET=sotf-mods`, `R2_PUBLIC_BASE_URL=https://r2.sotf-mods.com` |
| Servicios | `RESEND_API_KEY`, `EMAIL_FROM`, `OPENAI_API_KEY` |
| Cloudflare | `CF_ZONE_ID`, `CF_API_TOKEN` (solo Cache Purge), `TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` |
| SEO y anuncios | `INDEXNOW_KEY`, `ADSENSE_CLIENT=ca-pub-2799839819522052` |
| Opcionales | `SENTRY_DSN`, `DISCORD_WEBHOOK_URL`, OAuth (`DISCORD_CLIENT_ID/SECRET`, `GITHUB_…`, `STEAM_API_KEY`) |

### 6.8 files.sotf-mods.com: limpieza total

1. Ni el código nuevo ni la configuración hacen referencia a `files.sotf-mods.com`. Un test en CI hace `grep` y falla si aparece.
2. El `og:image` por defecto pasa a ser una imagen de marca generada y guardada en R2.
3. Auditoría SQL previa al corte: ninguna fila (`imageUrl`, `ModImage.url`, `downloadUrl`, `User.imageUrl`, descripciones o comentarios en Markdown) debe contener `files.sotf-mods.com`. Si aparece alguna, se reescribe o se elimina.
4. **Registro DNS:** se elimina en Cloudflare cuando el usuario lo confirme. No se crea una redirección, porque las claves antiguas no coinciden 1:1 con las de R2 (§1.2); solo se valoraría si se encontrara un mapeo en la BD.
5. Las 6 variables de entorno del apartado anterior desaparecen en Coolify cuando se retire el legacy.

---

## 7. Rendimiento: plan para Core Web Vitals 100

### 7.1 Objetivos

| Métrica | Lab (Lighthouse móvil, objetivo = 100) | Campo (CrUX p75) |
|---|---|---|
| TTFB | < 200 ms (HIT de borde 30–80 ms) | < 400 ms |
| FCP | ≤ 0,9 s | ≤ 1,2 s |
| LCP | ≤ 1,2 s | ≤ 1,5 s |
| TBT / INP | TBT ≤ 50 ms | INP ≤ 100 ms |
| CLS | ≤ 0,02 | ≤ 0,05 |

**Pesos máximos por página:**

| Recurso | Máximo |
|---|---|
| JS inicial | ≤ 15 KB br |
| CSS | ≤ 20 KB br |
| Fuentes | ≤ 2 ficheros precargados, ≤ 60 KB |
| Imagen LCP | ≤ 60 KB (AVIF 640w) |
| HTML de un mod | ≤ 50 KB br |
| Peso total en la primera vista | ≤ 350 KB (hoy: 3,5–14 MB) |

**Honestidad técnica:** un 100 en Lighthouse es una medida de laboratorio. Lo que cuenta para el ranking son los datos de campo (CrUX). Con AdSense cargado el 100 en laboratorio no se puede garantizar. La estrategia de §7.3 mantiene los anuncios fuera de la carga inicial.

### 7.2 Técnicas

- **TTFB:** el HTML sale del borde, con SWR asíncrono y Tiered Cache. En un *miss*, el origen renderiza en menos de 50 ms gracias al LRU de la API y a consultas indexadas. Nunca hay trabajo síncrono pesado en la petición.
- **LCP:**
  - imagen hero AVIF con `fetchpriority="high"` + preload `imagesrcset`;
  - nada de LCP generado por JS; carrusel CSS (*scroll-snap*) en lugar de JS;
  - en la landing, imagen con póster en vez de vídeo automático en móvil;
  - **Early Hints** (103) de Cloudflare para el CSS y la fuente principal.
- **CLS:**
  - `width`/`height` o `aspect-ratio` en todo, incluidas las imágenes replicadas de las descripciones;
  - huecos de anuncio con `min-height` por *breakpoint*;
  - fuentes con métricas de fallback ajustadas (la API de fuentes de Astro genera `size-adjust`);
  - banners superpuestos (`position: fixed`) que no desplazan contenido;
  - *server islands* con esqueleto del mismo tamaño.
- **TBT/INP:**
  - islas `client:visible`/bajo demanda;
  - React solo cuando hace falta;
  - listeners pasivos;
  - `content-visibility: auto` en listas largas;
  - la nieve de diciembre en CSS/canvas, cargada en `idle`, con pausa si la pestaña no está visible y sin animación con `prefers-reduced-motion`.
- **Fuentes:**
  - **una** fuente display con la identidad del juego (un solo peso, subconjuntos latin, latin-ext y cyrillic por `unicode-range`) + una variable para el cuerpo. La alternativa para el cuerpo es `system-ui`;
  - WOFF2 autoalojado vía la API de fuentes de Astro 7; solo se precarga el subconjunto latin;
  - `font-display: swap` con fallback métrico.
- **CSS:**
  - Tailwind 4 compilado en el build (fin del compilador en el navegador y de daisyUI por CDN);
  - `build.inlineStylesheets: 'auto'` (inline si ocupa menos de 4 KB).
- **Navegación instantánea:**
  - **Speculation Rules** (`<script type="speculationrules">`): `prerender` con `eagerness: moderate` sobre `/mods/*`, `/builds/*`, `/creators/*` y `/categories/*`;
  - **excluir `*/download/*`**, `/studio/*` y `/api/*`;
  - los anuncios y la analítica respetan `document.prerendering`.
- **bfcache:** nunca `no-store` en HTML público, ningún listener `unload` y las conexiones SSE se cierran en `pagehide`.
- **Terceros:** solo AdSense (para invitados y diferido) y Turnstile (solo en formularios de auth). Nada de GTM, Hotjar ni widgets sociales. Los embeds de YouTube y Discord van como facade.

### 7.3 AdSense sin destruir las CWV

- **Solo para invitados.** Los usuarios con sesión no ven anuncios, lo que además sirve de incentivo para registrarse. Tampoco hay anuncios en `/studio`, auth ni páginas legales.
- **Bloques manuales, no Auto Ads:** las Auto Ads generan CLS y los formatos *anchor* o *vignette* empeoran la INP.
- **Posiciones:**
  - *in-feed* cada N tarjetas del listado;
  - bajo la caja de descarga (debajo del pliegue en móvil);
  - barra lateral en escritorio.

  Todas con `min-height` reservado y `data-full-width-responsive="false"` para evitar redimensionados.
- **Carga diferida:** `adsbygoogle.js` se inyecta tras el `load` + `requestIdleCallback` **y** cuando el hueco está a menos de ~600 px del viewport (`IntersectionObserver`). La carga dinámica del script es una práctica extendida, pero **hay que verificarla con las políticas vigentes de AdSense** y con los ingresos, que pueden bajar algo a cambio de CWV.
- **Verificación del sitio:** `<meta name="google-adsense-account">` + `/ads.txt`, sin cargar el script en la primera vista.
- **Consentimiento (EEE, Reino Unido y Suiza):** Google exige un **CMP certificado** para servir anuncios. Se propone el CMP "Privacidad y mensajes" de AdSense (gratuito, TCF v2.2 + Consent Mode v2), **también cargado de forma diferida**. El banner debe ser compacto para no convertirse en el LCP ni empujar contenido.
- **Resultado esperado:** en la ejecución de Lighthouse no hay interacción, así que no se cargan ni anuncios ni CMP. En campo, el coste de los anuncios llega después del LCP y fuera de las interacciones críticas.

### 7.4 Medición continua

- LHCI con presupuestos en cada PR.
- RUM propio (`web-vitals` → `/api/v2/e`).
- CrUX y Search Console (informe CWV).
- Unlighthouse semanal sobre staging.
- Un panel "Rendimiento" en el admin con el p75 por plantilla y por país.

---

## 8. SEO técnico

### 8.1 URLs y redirecciones (enlaces existentes intactos)

**Se conservan como canónicas:**
- `/mods`, `/mods/{author}/{slug}`, `/builds`, `/builds/{author}/{slug}` y `/mods/{a}/{s}/download/{v}`;
- `/login`, `/register`, `/forgot-password`, `/reset-password`, `/privacy`, `/loader`, `/ads.txt`.

**Redirecciones 301:**

| Origen | Destino |
|---|---|
| `/` (legacy: 302 a `/mods`) | Pasa a ser la **landing** |
| `/profile/{slug}` | `/creators/{slug}` |
| `/upload` | `/studio/new/mod` |
| `/upload-build` | `/studio/new/build` |
| `/mods?category={c}` | `/categories/{c}` |
| `/mods?search=q` | `/search?q=` |
| `/static/downloads/sotfmodsoneclick-setup1.0.0.exe` | Se sigue sirviendo, o 301 a una copia en R2 (`/downloads/…`) |
| `/static/images/*` | 301 a los nuevos assets de marca |
| `?orderby`, `page`, `nsfw` | Se mantienen como parámetros |

**Subrecursos nuevos** (tres segmentos, sin colisión con `/mods/{author}/{slug}`): `/mods/{a}/{s}/changelog`, `/alternatives`, `/feed.xml` y `.md`.

**Estados HTTP:**
- `404` real (el legacy devuelve 200 para mods desconocidos);
- **`410`** para mods eliminados;
- `301` si cambia el slug (tabla `SlugHistory`);
- mods no aprobados: `404` para el público y visibles solo para su autor y los moderadores.

**Otras reglas:**
- Barra final: nunca (`trailingSlash: 'never'`, 301 automático).
- Minúsculas.
- `www` → apex.

### 8.2 Canonical, paginación y facetas

- `canonical` autorreferente por locale.
- Los listados paginados apuntan a sí mismos (`?page=2` → canonical `?page=2`), no a la página 1.
- Los parámetros de orden y filtro combinados llevan `noindex,follow` y canonical a la versión limpia. Solo se indexan los "hubs" (categoría, tag, colección).
- `/search` → `noindex`.

### 8.3 hreflang

- Todas las páginas públicas localizadas + `x-default` (EN).
- Solo entre URLs cuyo contenido principal esté localizado. Para las guías no traducidas: canonical a EN y fuera del clúster.
- Hay que vigilar en Search Console el aviso "Duplicada: Google eligió otra canónica".

### 8.4 Sitemaps

- `/sitemap.xml` es un índice que apunta a `/sitemaps/{type}.xml` (`static`, `mods`, `builds`, `creators`, `categories`, `tags`, `collections`, `guides`). Cada fichero incluye las URLs de todos los locales (~3–4k por fichero, muy por debajo del límite de 50k).
- `lastmod` **real**, a partir de `updatedAt`/`lastReleasedAt` (nunca `now()`).
- Los mods y builds incluyen la extensión **`image:image`** con las capturas, para Google Imágenes (búsquedas del tipo "sons of the forest mod X").
- Se generan desde la API, se cachean 1 h y se purgan con el tag `sitemap`.
- Se declaran en `robots.txt` y se envían a Google Search Console y a **Bing Webmaster Tools**.

### 8.5 Datos estructurados (JSON-LD, validados en CI con `schema-dts` + test de Rich Results en staging)

| Página | Tipos |
|---|---|
| Todas | `WebSite` (name "SOTF Mods" o la nueva marca, `alternateName`, `inLanguage`) + `Organization` (logo, `sameAs`: Discord, GitHub, redes) en la home. `BreadcrumbList` en todas las páginas con jerarquía |
| Mod | `SoftwareApplication` (ver ejemplo) + `about: VideoGame "Sons of the Forest"`. `aggregateRating`/`review` **solo** con reseñas reales (≥ 1). `interactionStatistic` (DownloadAction, LikeAction, CommentAction). `comment` con los últimos comentarios. `VideoObject` si hay tráiler |
| Build (BuildShare) | `CreativeWork` + `about: VideoGame`, `author`, `interactionStatistic` |
| Creador | `ProfilePage` → `mainEntity: Person` (`name`, `alternateName`, `image`, `sameAs`, `interactionStatistic`, `agentInteractionStatistic`) |
| Categoría, tag, colección, "Mejores mods de X" | `CollectionPage` + `ItemList` (`ListItem` con `position` y `url`) |
| Guías | `Article`/`TechArticle` con `dateModified`. `FAQPage` solo si hay FAQs reales (sin *rich result* garantizado desde 2023, pero útil para GEO). Los pasos de "HowTo" van como HTML semántico, porque el *rich result* HowTo se retiró |

Nota: Google retiró el *sitelinks search box* en noviembre de 2024. `SearchAction` no aporta nada en la SERP, pero es inofensivo. **`WebSite.name` sí influye en el "site name"** que se muestra en los resultados.

**Ejemplo (página de mod):**

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://sotf-mods.com/mods/akm/arctic-fox-virginia#software",
  "name": "Arctic Fox Virginia",
  "description": "Turns Virginia into a pagan arctic fox lady.",
  "applicationCategory": "GameApplication",
  "applicationSubCategory": "Game mod (Model Swap)",
  "operatingSystem": "Windows",
  "softwareVersion": "1.0.0",
  "fileSize": "3.1 MB",
  "datePublished": "2026-09-26",
  "dateModified": "2026-09-26",
  "softwareRequirements": "Sons of the Forest (Steam), RedLoader",
  "downloadUrl": "https://sotf-mods.com/mods/akm/arctic-fox-virginia/download/1.0.0",
  "image": ["https://r2.sotf-mods.com/media/…/1440.webp"],
  "author": { "@type": "Person", "name": "akm", "url": "https://sotf-mods.com/creators/akm" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "about": {
    "@type": "VideoGame",
    "name": "Sons of the Forest",
    "sameAs": ["https://store.steampowered.com/app/1326470/Sons_Of_The_Forest/"]
  },
  "interactionStatistic": [
    { "@type": "InteractionCounter", "interactionType": "https://schema.org/DownloadAction", "userInteractionCount": 70 },
    { "@type": "InteractionCounter", "interactionType": "https://schema.org/LikeAction", "userInteractionCount": 0 }
  ]
}
```

(`aggregateRating` solo se añade cuando `reviewsCount ≥ 1`. Google exige `offers`, y `aggregateRating` o `review`, para el *rich result* de SoftwareApplication.)

### 8.6 OG images y compartir (Discord es clave en esta comunidad)

- **satori 0.33** genera un SVG (1200×630, con el texto convertido en *paths*) y **`sharp` lo convierte en PNG**. No hace falta `@resvg/resvg-js`.
- El job `og.render` se lanza al publicar o editar y guarda `og/{type}/{id}-{contentHash}.png` en R2 (inmutable). Tipos: mod, build, creador, colección, categoría, guía y la imagen por defecto de la marca.
- En el HTML: `og:image`, `og:image:alt`, `twitter:card=summary_large_image` y **`<meta name="theme-color">`**, que Discord usa para el color del embed.
- Imágenes OG temáticas del juego: portada del mod, nombre, autor, descargas, versión y "Sons of the Forest mod".

### 8.7 robots.txt (lo controla el origen)

```
User-agent: *
Allow: /
Disallow: /studio
Disallow: /api/
Disallow: /search
Disallow: /*/download/
Disallow: /*?*sort=
Sitemap: https://sotf-mods.com/sitemap.xml

# Señales de uso de contenido (decisión del usuario)
Content-Signal: search=yes, ai-input=yes, ai-train=no
```

- Hay que decidir si se mantiene el *Managed robots.txt* de Cloudflare, que antepone su preámbulo, o si se desactiva para servir solo el nuestro.
- Los bots de búsqueda y recuperación de IA (`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-SearchBot`, `Claude-User`, `Bingbot`…) quedan **permitidos**.
- El entrenamiento (`GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`) es una **decisión del usuario**.

### 8.8 Feeds, IndexNow y señales de frescura

- **RSS 2.0** (el formato más compatible, incluido MonitoRSS y otros bots que publican RSS en canales de Discord):
  - `/feed.xml` (mods nuevos y actualizados), `/builds/feed.xml`;
  - `/mods/{a}/{s}/feed.xml` (releases con changelog);
  - `/creators/{slug}/feed.xml`, `/categories/{c}/feed.xml`.
  - Se generan con `feed` 6.0 o `@astrojs/rss` 4.0 y se cachean 15 min + purga.
  - Se anuncian con `<link rel="alternate" type="application/rss+xml">`.
- **IndexNow** (Bing, Yandex, Seznam, Naver…; **Bing alimenta a ChatGPT Search y Copilot**):
  - clave en `/{INDEXNOW_KEY}.txt`;
  - el job debounced envía por POST las URLs de todos los locales afectados al publicar, editar o borrar.
  - **Crawler Hints** de Cloudflare es la alternativa sin código. Se elige una de las dos para no duplicar.
- `dateModified` visible en la página ("Actualizado el …") y coherente con el JSON-LD y el sitemap.

### 8.9 HTML semántico y otros

- Un único `h1` por página, *landmarks* (`header`, `nav`, `main`, `footer`), migas de pan con `<nav aria-label>`, `<article>`, `<time datetime>` y `lang` correcto.
- **Enlazado interno:** "Del mismo autor", "Alternativas" (co-descargas agregadas + tags), "Colecciones que lo incluyen", categorías y tags.
- **NSFW:** `<meta name="rating" content="adult">`, imágenes difuminadas por defecto y fuera de los hubs indexables salvo que el usuario elija lo contrario.
- **`meta description`** única y generada a partir de `shortDescription` y los datos del mod. Se eliminan las `meta keywords` spam.
- **Páginas "alternativas" y "comparar":** solo se generan con ≥ 3 alternativas reales; si no, `noindex`. Nunca contenido fino.

### 8.10 Motor de backlinks (creativo y útil para SEO)

- **Badges SVG** tipo shields (`/badge/mods/{id}/downloads.svg`, "Available on SOTF Mods") para los README de GitHub y NexusMods.
- **Tarjetas embebibles** (`/embed/mods/{id}`, con `frame-ancestors` permisivo solo en esa ruta).
- Ambas cosas generan enlaces entrantes de forma natural y dan "prueba social" a los modders.

---

## 9. GEO (optimización para motores generativos)

### 9.1 Principio

Google afirma (guía de optimización para IA, mayo de 2026) que **no hacen falta ficheros especiales** para aparecer en AI Overviews ni en AI Mode: lo que cuenta es contenido útil, rastreable, bien estructurado y con datos estructurados. Otros agentes (Claude, ChatGPT, Perplexity) sí aprovechan `llms.txt` y Markdown. Se hacen **las dos cosas**; el Markdown es barato porque ya guardamos las descripciones en ese formato.

### 9.2 Contenido "citable"

- **Caja de datos del mod** (`<dl>`, en texto visible y no solo en JSON-LD):
  - versión, fecha de actualización, compatibilidad con la versión del juego y de RedLoader;
  - multijugador (solo host o todos los jugadores), cliente o servidor;
  - dependencias, tamaño, descargas, valoración, licencia y código fuente.
- **Secciones con anclas estables** (`#installation`, `#requirements`, `#changelog`, `#faq`) y párrafos cortos.
- **Hubs basados en datos reales, con fecha visible:**
  - "Mejores mods de Sons of the Forest (actualizado semanalmente)";
  - "Mods multijugador";
  - "Mods compatibles con la última versión del juego";
  - "Cómo instalar mods con RedLoader (2026)";
  - "Mejores mods de calidad de vida", "Mejores cambios de modelo", etc.
- **E-E-A-T:**
  - perfiles de creador completos;
  - página "Acerca de" con la historia desde 2023 y las cifras (≈1,98M descargas, 257 mods, 46 desarrolladores);
  - enlaces a RedLoader, RedManager y el Discord;
  - identidad de entidad coherente (mismo nombre, logo y `sameAs` en todas partes).

### 9.3 Formatos para agentes

- **`/llms.txt`:** H1 con el nombre, un resumen en blockquote y secciones con enlaces (qué es, cómo instalar mods, categorías, top mods, guías, API pública con OpenAPI, Discord).
- **`/llms-full.txt`:** todos los mods aprobados en Markdown compacto (nombre, autor, categoría, versión, compatibilidad, descargas, descripción corta, URL). Se regenera cada hora vía caché y tag.
- **Alternativa `.md` por entidad:** `/mods/{a}/{s}.md`, `/creators/{slug}.md`, `/guides/{slug}.md`, con `<link rel="alternate" type="text/markdown" href="…">`.
  - No se hace negociación por `Accept`, porque complica la caché. *Markdown for Agents* de Cloudflare es de pago o beta, y nuestro `.md` lo hace innecesario.
- **OpenAPI pública** (`api.sotf-mods.com/openapi.json`, enlazada desde `llms.txt`) para agentes que quieran consultar mods, versiones y compatibilidad en tiempo real.

### 9.4 Rastreadores de IA y Cloudflare

- **Revisar ya en Cloudflare** "AI Crawl Control" y "Block AI bots". Desde 2025 los dominios nuevos pueden venir con bloqueo por defecto, y el *managed robots.txt* ya está activo en esta zona. Si los bots de recuperación están bloqueados, la GEO queda anulada.
- Política recomendada: permitir búsqueda y recuperación (`search=yes, ai-input=yes`); el entrenamiento lo decide el usuario (§8.7).

### 9.5 Medición de GEO

- En la analítica propia: referrers `chatgpt.com` (añade `utm_source=chatgpt.com`), `perplexity.ai`, `copilot.microsoft.com`, `gemini.google.com` y `claude.ai`, con un panel "Tráfico desde IA".
- Consultas de control mensuales ("best sons of the forest mods", "how to install sotf mods", "sotf multiplayer mods") en ChatGPT, Perplexity, Gemini y AI Overviews, anotando si se cita a sotf-mods.com. Es manual o semiautomático.
- Bing Webmaster Tools (incluye un informe de rendimiento en Copilot) y Search Console.

---

## 10. Riesgos y preguntas abiertas

**Riesgos:**

| # | Riesgo | Mitigación |
|---|---|---|
| R1 | `prisma db push` del legacy tras las migraciones de v2 borraría tablas nuevas | Congelarlo, retirar permisos DDL al usuario de BD legacy, avisarlo en el README |
| R2 | Límite de purga del plan Free de Cloudflare | Debounce 20–30 s, tags agregados, TTL de borde moderado (15 min) como red de seguridad |
| R3 | Coolify con dominio y path (`sotf-mods.com/api`) | Validar en staging; plan B con el proxy de Astro `src/fetch.ts` |
| R4 | i18n sin prefijo con `routing: manual` + rewrite | Spike en la fase 0; plan B con `[locale]` + `getStaticPaths` |
| R5 | Contenido traducido parecido → canónicas elegidas por Google | Traducir resumen y datos del mod; monitorizar Search Console; `noindex` selectivo si hace falta |
| R6 | AdSense diferido → política o ingresos | Verificar la política vigente; test A/B de ingresos frente a CWV |
| R7 | Drizzle 1.0 aún en RC | Usar 0.45.x estable; el query builder SQL apenas cambia; migrar cuando salga la GA |
| R8 | Consumidores desconocidos de la API v1 (instalador, mods in-game) | Registrar UAs 2–4 semanas antes; mantener lecturas y descargas v1; 410 solo en mutaciones sin uso |
| R9 | VPS compartido (RAM/CPU) | Build en CI, límites de memoria por contenedor, `sharp.concurrency(1)`, semáforo en argon2 |
| R10 | Deploy skew (HTML cacheado con hashes viejos) | Purga `html` tras el deploy + recarga ante error de chunk + archivo opcional de assets en R2 |

**Preguntas abiertas para el usuario:**
1. **Token de API de Cloudflare** con permiso "Cache Purge" (zona sotf-mods.com) e ID de zona. **¿Qué plan de Cloudflare** tiene la zona (Free o Pro)?
2. **Idioma número 13** (¿ja, uk, ko…?) y si Portugués va como `pt-BR` o `pt`.
3. **Política de IA:** ¿`ai-train=no` o `yes`? ¿Mantener el *managed robots.txt* de Cloudflare?
4. **Anuncios:** ¿se acepta AdSense solo para invitados y diferido, con posible impacto en ingresos? ¿Se usa el CMP de Google?
5. **OAuth:** ¿Discord, Steam y GitHub en la fase 2?
6. **GitHub Actions + GHCR** para construir imágenes (¿repositorio privado u organización?) y el webhook de despliegue de Coolify.
7. **Staging:** ¿`beta.sotf-mods.com` como beta pública u oculta? ¿Bucket `sotf-mods-staging`?
8. **Sentry SaaS** (plan gratuito) o GlitchTip autoalojado.
9. ¿Se puede **desactivar la exposición pública de la BD** (puerto 5433) en Coolify? ¿Se pueden activar los backups a R2?
10. **Zips existentes:** ¿añadir `Content-Disposition` con nombre bonito mediante `CopyObject` in-place en el corte?

---

## 11. Stack recomendado (versiones verificadas el 2026-09-29 con `npm view`)

| Capa | Elección | Versión | Por qué |
|---|---|---|---|
| Runtime | **Node.js 24 LTS** | 24.x (local 24.17) | LTS hasta 2028. Ejecuta TS nativo en desarrollo (probado). Es la referencia del usuario |
| Gestor de paquetes | **pnpm** (workspaces + catalogs + `deploy`) | 12.6.0 | Aislamiento estricto, catalogs para versiones únicas, imágenes podadas |
| Orquestación monorepo | **Turborepo** | 2.11.5 | Caché de tareas, CI solo de lo afectado, `turbo prune --docker` |
| Lenguaje | **TypeScript** | 7.0.2 (nativo) + 6.0.3 solo para `astro check` | Typecheck 8–12× más rápido; Astro/Volar aún necesita la API JS de TS 6 |
| Lint + formato | **Biome** | 2.5.14 | Un binario rápido; TS, TSX, JSON, CSS y soporte de `.astro` |
| Framework web | **Astro** (SSR, `@astrojs/node` standalone) | 7.3.5 / node 11.1.6 | 0 KB de JS por defecto, Route Caching estable con providers propios, prerender/SSR por ruta, CSP, API de fuentes, Vite 8 |
| Integración React | **@astrojs/react** | 7.0.0 | Islas y SSR de componentes React sin hidratar (componentes compartidos) |
| UI | **React** | 19.3.0 | Referencia del usuario; islas y Studio |
| Bundler | **Vite** (vía Astro) | 8.3.1 | Rolldown; builds rápidos |
| Router del Studio | **@tanstack/react-router** (+ router-plugin) | 1.170.40 / 1.168.41 | Rutas y search params tipados, precarga por intención, code-splitting (probado dentro de Astro) |
| Datos en cliente | **@tanstack/react-query** | 5.104.0 | Caché, SWR, invalidación desde SSE |
| Tablas / listas | **@tanstack/react-table** + **react-virtual** | 9.2.4 / 3.14.13 | Moderación y admin con miles de filas |
| Formularios | **@tanstack/react-form** | 1.33.5 | Standard Schema (Zod 4) sin adaptadores; asistente de subida |
| CSS | **Tailwind CSS** (+ `@tailwindcss/vite`) | 4.3.3 | Compilado en el build (fin del runtime en el navegador), tokens `@theme` compartidos |
| Primitivas accesibles | **@base-ui/react** | 1.8.0 | Headless, accesible y activo; encaja con Tailwind |
| Animación | **Motion** | 13.4.4 | Studio e islas; en lo público, CSS + View Transitions |
| Iconos | **lucide-react** | 1.48.0 | Tree-shakeable; se renderiza SSR sin JS |
| Gráficas | **Recharts** | 3.10.1 | Dashboard del creador y admin (solo Studio) |
| Editor | **CodeMirror 6** (`@uiw/react-codemirror`) — *en lugar de Monaco* | 6.x (view 6.43.13) / 4.25.12 | Ligero y **usable en móvil**; Markdown con vista previa |
| Cmd+K | **cmdk** + **MiniSearch** (índice JSON en cliente) | 1.1.1 / 7.2.0 | Resultados instantáneos y sin red; cargado bajo demanda |
| i18n | **Paraglide JS 2** (inlang) | 2.25.4 | Mensajes tipados y tree-shakeables en Astro, islas y Studio |
| Toasts | **sonner** | 2.0.8 | Ligero |
| RUM | **web-vitals** | 6.2.2 | CWV de campo propias, con atribución |
| API | **Fastify** | 5.12.5 | Rápido, maduro y con ecosistema oficial; referencia del usuario (Fastify 6 aún en alpha) |
| Validación / contratos | **Zod** + **fastify-type-provider-zod** | 4.6.5 / 7.0.0 | Una sola fuente de verdad → tipos, validación, formularios y OpenAPI 3.1 |
| Documentación API | **@fastify/swagger** + **@scalar/fastify-api-reference** | 9.9.0 / 1.72.1 | Docs públicas para terceros y agentes |
| Plugins Fastify | cookie / rate-limit / helmet / cors / etag / under-pressure / sse | 11.1.2 / 11.2.0 / 13.1.1 / 11.3.0 / 6.2.0 / 9.2.0 / 0.6.0 | Seguridad, límites, ETags, protección ante sobrecarga, SSE oficial |
| Logs / apagado | **pino** + **close-with-grace** | 10.3.1 / 2.5.0 | JSON estructurado; *rolling updates* limpios |
| ORM | **Drizzle ORM** + **drizzle-kit** (driver `pg`) | 0.45.3 / 0.31.11 / pg 8.23.0 | Introspección del esquema existente (probado), FTS, GIN y parciales nativos, sin codegen; evita la transición Prisma 7→8 |
| Base de datos | **PostgreSQL** (instancia actual) + `pg_trgm`, `unaccent`, `pg_stat_statements` | 16 | Cero riesgo en el corte; extensiones disponibles en la imagen (probado) |
| Jobs / cron | **pg-boss** | 12.35.0 | Colas, cron, debounce y reintentos sobre Postgres; **sin Redis** |
| Tiempo real | **SSE** (`@fastify/sse`) + Postgres LISTEN/NOTIFY | 0.6.0 | Notificaciones y contadores en vivo; simple y compatible con Cloudflare |
| Hash de contraseñas | **@node-rs/argon2** (+ **@node-rs/bcrypt** solo para verificar legacy) | 2.2.1 / 1.10.9 | **Verifica los hashes Bun existentes (probado)**; argon2id OWASP para los nuevos |
| OAuth / passkeys (fase 2) | **arctic** / **@simplewebauthn/server** / **@oslojs/otp** | 3.7.0 / 14.0.3 / 1.1.0 | Discord y GitHub, passkeys y TOTP sin adoptar un esquema ajeno |
| Anti-bots | **Cloudflare Turnstile** (+ `@marsidev/react-turnstile`) | 1.6.1 | Gratis y sin fricción |
| Almacenamiento | **Cloudflare R2** vía `@aws-sdk/client-s3` + `s3-request-presigner` | 3.1142.0 | Presigned PUT directo, CopyObject de metadatos, egress gratis |
| Imágenes | **sharp** + **thumbhash** | 0.35.5 / 0.1.1 | Variantes AVIF/WebP inmutables y placeholders |
| OG images | **satori** (→ PNG con sharp) | 0.33.5 | OG por entidad, precalculadas en R2 |
| Inspección de ficheros | **file-type** + **yauzl** + **semver** + **isbot** | 22.1.1 / 3.4.0 / 7.8.5 / 5.2.2 | Validación por *magic bytes*, análisis de zips, orden semver real, descargas sin bots |
| Markdown seguro | **unified** + remark-parse/gfm + remark-rehype + **rehype-sanitize** + rehype-stringify | 11.0.5 / 11.0.0 / 4.0.1 / 11.1.2 / 6.0.0 / 10.0.1 | Fin del XSS almacenado; mismo pipeline en servidor y en la vista previa |
| Email | **Resend** + **React Email** | 6.30.0 / 6.11.0 (components 1.0.12) | Ya en uso; plantillas en React |
| Feeds / tipos SEO | **feed** / **schema-dts** | 6.0.0 / 2.0.0 | RSS por entidad; JSON-LD tipado |
| Errores | **Sentry** (`@sentry/node`, `@sentry/astro`, `@sentry/react`) | 11.1.0 | Servidor y Studio; no en páginas públicas (CWV) |
| Tests | **Vitest** / **Playwright** / **@axe-core/playwright** / **@testcontainers/postgresql** | 5.0.2 / 1.63.0 / 4.13.0 / 12.2.0 | Unitarias, E2E, a11y, integración con Postgres real |
| Presupuestos CWV | **@lhci/cli** (+ Lighthouse 13 / Unlighthouse para barridos) | 0.15.1 / 13.5.0 / 0.18.2 | Rendimiento bloqueado en PR |
| Bundle API/worker | **tsdown** | 0.23.0 | Rolldown; `dist/` pequeño para la imagen |
| Contenedores | **Docker multi-stage**, `node:24-alpine`, usuario no root | — | Incluye `wget` para los health checks de Coolify; sharp musl |
| Despliegue | **Coolify 4.1.2**: 3 apps de imagen (web, api, worker) con *rolling updates*; imágenes desde **GHCR** | — | Sin Compose (Compose no hace *rolling*); build fuera del VPS compartido |
| CDN / borde | **Cloudflare**: Cache Rules + Tiered Cache + SWR asíncrono + purga por Cache-Tag + Early Hints + WAF + Turnstile | Plan actual (Free/Pro) | "ISR" gratis con frescura instantánea; R2 cacheado un año |
| Analítica | **First-party** (beacon → Postgres, rollups diarios) | — | Alimenta el dashboard del creador; sin cookies; sustituye al Umami roto |
| Descartados | Caddy en el camino de la petición, Monaco, Prisma 7/8, Redis/BullMQ, Meilisearch/Typesense, TanStack Start (RC), Next.js, SvelteKit, better-auth, Cloudflare Image Transformations, Auto Ads | — | Ver secciones 2, 4 y 7 |

---

## Fuentes

- Astro 7.0 — https://astro.build/blog/astro-7/ · InfoQ: https://www.infoq.com/news/2026/08/astro-7-release-speed/
- Astro Route caching — https://docs.astro.build/en/guides/caching/ · Cache Provider API: https://docs.astro.build/en/reference/cache-provider-reference/
- Astro 6.0 (fuentes, CSP, live collections) — https://astro.build/blog/astro-6/
- Astro i18n — https://docs.astro.build/en/guides/internationalization/
- TanStack Start (estado RC, ISR) — https://tanstack.com/start/latest/docs/framework/react/overview · https://tanstack.com/start/latest/docs/framework/react/guide/isr
- React Router v8 — https://remix.run/blog/react-router-v8 · https://www.infoq.com/news/2026/08/react-route-v8/
- Prisma: estado de versiones (Prisma 8 RC, soporte de Prisma 7) — https://www.prisma.io/docs/orm/release-status · Prisma 7: https://www.prisma.io/changelog/2025-11-19
- Drizzle ORM releases — https://orm.drizzle.team/docs/latest-releases · v0→v1: https://orm.drizzle.team/docs/v0-v1-changes
- TypeScript 7.0 — https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/ · https://www.infoq.com/news/2026/08/typescript-7-released/
- pnpm 12 — https://pnpm.io/blog/releases/12.0 · https://pnpm.io/blog/whats-different-in-pnpm-12
- Vite+ (beta) — https://voidzero.dev/posts/announcing-vite-plus-beta
- Biome 2.3/2.4 (Astro/Vue/Svelte) — https://biomejs.dev/blog/biome-v2-3/ · https://biomejs.dev/blog/biome-v2-4/
- Paraglide JS — https://paraglidejs.com/
- Cloudflare: purga por tags en todos los planes — https://developers.cloudflare.com/changelog/post/2025-04-01-purge-for-all/ · https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-tags/
- Cloudflare: SWR asíncrono — https://developers.cloudflare.com/changelog/post/2026-02-26-async-stale-while-revalidate · https://developers.cloudflare.com/cache/changelog/
- Cloudflare Markdown for Agents / Content Signals — https://developers.cloudflare.com/changelog/post/2026-02-12-markdown-for-agents/ · https://www.infoq.com/news/2026/03/cloudflare-crawler/
- R2 presigned URLs — https://developers.cloudflare.com/r2/api/s3/presigned-urls/ · compatibilidad S3: https://developers.cloudflare.com/r2/api/s3/api/
- Coolify rolling updates — https://coolify.io/docs/knowledge-base/rolling-updates · health checks: https://next.coolify.io/docs/applications/configuration/health-checks · dominios: https://coolify.io/docs/knowledge-base/domains · issue de path prefix: https://github.com/coollabsio/coolify/issues/2603
- Bun password hashing — https://bun.sh/docs/api/hashing
- llms.txt y postura de Google (2026) — https://www.getpassionfruit.com/blog/should-i-create-an-llms.txt-file-google-s-2026-guidance-explained · https://llmpulse.ai/blog/llms-txt-guide/
- Steam: Sons Of The Forest (app 1326470) — https://store.steampowered.com/app/1326470/Sons_Of_The_Forest/

## Anexo A — Evidencia de pruebas locales (reproducibles)

| Prueba | Resultado |
|---|---|
| Lighthouse 13.5.0 móvil sobre producción (solo GET) | `/mods` perf 0,31 · LCP 23,1 s · TBT 2.770 ms · 14,3 MB. Mod: perf 0,30 · LCP 9,1 s · TBT 2.790 ms · CLS 0,172 |
| Bun `Bun.password.hash` → `@node-rs/argon2.verify` | `true` (y `false` con una contraseña errónea); 66 ms por verificación con m=64 MiB; hash nuevo con m=19 MiB en 27 ms |
| Bun bcrypt → `@node-rs/bcrypt.verify` | `true` |
| Astro 7.3.5 + React 19.3 + TanStack Router 1.170 (`client:only`) + Tailwind 4.3 + `memoryCache` | Build OK (~2 s); route cache MISS→HIT; `/_astro` inmutable; react-dom 56,8 KB br; shell del Studio 25,6 KB br |
| Esquema Prisma legacy → Postgres 16 local → `drizzle-kit pull` | Esquema y relaciones generados; 4 defectos a corregir a mano (§4.3); extensiones `pg_trgm`/`unaccent`/`citext`/`btree_gin`/`pg_stat_statements` disponibles |
| Node 24.17 ejecutando `.ts` directamente | OK, sin flags |
