# 05 · Producto — Inventario de features, features incompletas, features nuevas y gamificación

> Track de investigación: **PRODUCTO**. Fecha: 2026-09-29.
> Fuentes: lectura completa de `sotf-mods-api/src` y `sotf-mods-frontend/src` (plantillas, scripts, traducciones), navegación read-only del sitio y de la API públicos, análisis de datos públicos (257 mods, 612 versiones, 277 comentarios obtenidos vía GET de la API pública), código de los clientes externos de la API (RedManager, instalador "OneClick", bot de Kelvin) y búsquedas web (Steam, GitHub, guías de terceros). No se tocó producción: solo GET a endpoints que no mutan estado (no se llamó a descargas, favoritos, approve ni KelvinSeek).

---

## 0. Resumen ejecutivo

1. **El problema nº 1 de los usuarios no es visual, es de confianza: "¿esto funciona?".** El 26 % de los comentarios del sitio (71/277) son reportes de "no funciona / crashea / error", un 14 % son dudas de instalación y un 7 % de multijugador/dedicado. El 48 % de los mods (107/221, sin contar builds) no se actualiza desde hace más de 2 años y RedLoader no saca release desde 2025-02. **La feature estrella de v2 debe ser un sistema de compatibilidad por versión del juego** ("¿Funciona?" + estado del ecosistema), no solo un rediseño.
2. **sotf-mods.com es el catálogo de RedLoader más grande que existe** (257 elementos frente a unos 81 paquetes de SOTF en Thunderstore, casi todos BepInEx y abandonados desde 2023, y unos 226 mixtos en Nexus). El posicionamiento natural es "el hogar del modding de Sons of the Forest".
3. **Hay clientes externos que dependen de la API y de las URLs legacy** y que v2 no puede romper: RedManager (lista, detalle y **descarga vía `https://sotf-mods.com/mods/:user/:slug/download/:version`**), los mods KelvinGPT/KelvinSeek (endpoint `/api/kelvinseek/prompt`), el campo `url` de los `manifest.json` de los mods (apunta a las páginas de mod) y READMEs/hilos de Steam. Se necesita una **capa de compatibilidad legacy** (T0).
4. **Varias features "existentes" están rotas o a medias**: reseñas (rutas rotas y sin montar, 0 reseñas en la BD), oEmbed anunciado pero inexistente (devuelve `/404` con 200), el botón "Install with Red Manager" deshabilitado, el instalador OneClick (Electron de 75 MB) roto por un cambio de forma de la API y sin enlazar, `isHidden` sin interfaz de moderación, `Tag`/`LoginAttempt` muertos, favoritos que se llaman "follow" pero nunca notifican, y `/preview` de imágenes que apunta al servidor de ficheros muerto.
5. **Bugs de producto con impacto real**: 20 mods aprobados (entre ellos **SonsAxLib, el segundo más descargado con 91.710 descargas**) son invisibles en el listado por defecto porque su `type` es `null` o `Library`; el saneado de texto **borra acentos, cirílico y emoji** de los comentarios en un sitio de 12 idiomas; las versiones se ordenan como texto (BuildShare muestra 1.0.10 después de 1.0.2); el filtro NSFW muestra *solo* NSFW; y una versión aún apunta a `files.sotf-mods.com` (descarga rota).
6. **"Unapproved" está sobrecargado de significados**: 28 mods sin aprobar acumulan 67.701 descargas (vía RedManager y enlaces directos); 24 son de un mismo autor de confianza e incluyen piezas llamadas "Don't use" o "Blank". Faltan estados explícitos (borrador, pendiente, publicado, oculto, archivado) y la posibilidad de borrar o archivar.
7. **La interacción es baja, pero sana**: 234 seguimientos, 277 comentarios (todos desde 2025) de 148 comentaristas distintos y 0 reseñas, frente a 1,98 M de descargas y unas 1.750 descargas/día. Hay mucho margen para convertir descargadores anónimos en comunidad, y la gamificación debe premiar **calidad y ayuda** (reseñas, reportes de compatibilidad, mantenimiento), no volumen.
8. **Los creadores no tienen herramientas**: ni panel, ni analíticas más allá de un gráfico, ni borradores, ni vista previa del manifest, ni galería gestionable (reemplazar imágenes las borra todas). El 77 % de los mods (198/257) no tiene ni una imagen de galería. Un wizard de publicación con "calidad de ficha" gamificada ataca esto directamente.
9. **Propuesta de alcance**: 33 features T0 (≈ 165 días-dev en bruto, paralelizables), divididas en *T0-núcleo* (paridad, compatibilidad legacy, seguridad y migración: bloquean el lanzamiento) y *T0-titular* (lo que hace que se sienta como v2: compatibilidad, reseñas, comentarios v2, notificaciones, colecciones, panel de creador, Cmd+K, landing, gamificación v1). T1 (vuelta rápida): login con Discord, deep-link a RedManager, visor 3D de builds, "Pregúntale a Kelvin", API keys y badges. T2: game jams, peticiones de mods y traducción automática.
10. **Identidad SOTF en el producto**: rangos de creador tipo "supervivencia" (Náufrago → Leyenda de la isla), contador "Día N en la isla" en perfiles, insignias temáticas ("Parche rápido", "Mil troncos", "Superviviente original 2023"), estados vacíos con Kelvin y su libreta, temporadas del año que se reflejan en el tema (el juego tiene estaciones; la nieve de diciembre pasa a ser "Invierno en la isla") y un 404 tipo "te perdiste en la cueva". Todo sin usar assets oficiales de Endnight.

---

## 1. Datos del producto en vivo (API pública, 2026-09-29)

| Métrica | Valor | Nota |
|---|---|---|
| Usuarios | 3.883 | `/api/stats` |
| Elementos publicados (mods + builds) | 257 | Mod 200 · Build 36 · Library 2 · `type=null` 19 |
| Aprobados / sin aprobar | 229 / 28 | 5 NSFW (3 aprobados) |
| Descargas totales | 1.977.059 | ~12.260/semana ≈ 1.750/día |
| "Developers" (con mod aprobado de tipo Mod) | 46 | 59 autores con al menos un elemento |
| Usuarios `isTrusted` | 14 | Todos son creadores |
| Versiones | 612 | 576 `.zip` + 36 `.json` (builds) |
| Mods (sin builds) con una sola versión | 107/221 (48 %) | |
| Última versión hace más de 2 años | 107/221 (48 %) | Solo 17 publicados en los últimos 90 días |
| Mods con dependencias declaradas | 11 | SimpleNetworkEvents (3), OptionalDependAPI (2)… |
| `modSide` sin rellenar | 150/221 | 37 marcados como multijugador |
| `sourceUrl` rellenado | 0 | El campo existe, pero no hay UI para rellenarlo |
| Reseñas / valoración media | 0 / 0 | Feature a medio construir |
| Comentarios | 277 (27 respuestas, 6 con imagen, 0 ocultos) | Todos de 2025–2026; 148 comentaristas distintos |
| Seguimientos (tabla `ModFavorite`) | 234 | |
| Mods sin imágenes de galería | 198/257 (77 %) | |
| Descripciones con HTML crudo | 24 | `li, b, br, h2, p, ul, details/summary, code, font…` |
| Descripciones con vídeo de YouTube | 17 | Sin incrustado: solo enlace |
| Slugs con caracteres no seguros para URL | 15 | `axel's-mod-menu`, `virginia-wardrobe-18+`, `coop-server-tools(beta)`… |
| Versiones aún en `files.sotf-mods.com` | 1 | "OldVCEPage(Don't use)" 0.0.3: descarga rota |
| Categorías de mods | 4 | Calidad de vida 113, Misc 85, Model Swap 16, Library 7 (demasiado gruesas) |
| Categorías de builds | 21 | Solo 8 en uso |

**Top de descargas**: Axel's Mod Menu (117.719), SonsAxLib (91.710, **0 seguidores**, oculto en el listado por defecto), AmmoUi (54.267), StackMod (53.384), ItemCarryAmount (44.331), KnightVCarry, SonsHotbar, Enable Building in Caves, ZipLineExtender, Less Useless Flashlights, BowTrajectory, Restless Kelvin, BuildShare…

**Actividad de publicación** (versiones por mes): picos en 2024-03 (74), 2024-07 (58) y 2025-02 (50, tras la actualización del juego y de RedLoader), valle en 2025-04…2025-10 y repunte en 2025-11…2026-01 y en 2026-09 (20). El ritmo lo marcan los parches del juego: otra razón para modelar las "builds del juego" como entidad.

**Panorama competitivo**
- **Thunderstore (SOTF)**: 81 paquetes; 67 dependen de BepInEx y ninguno de RedLoader. Los más descargados son de 2023. Tiene gestión de dependencias y un mod manager integrado (r2modman/Gale).
- **Nexus Mods (SOTF)**: unos 226 mods, mezcla de BepInEx y RedLoader.
- **sotf-mods.com**: el catálogo RedLoader más grande, con BuildShare (blueprints) como elemento único. RedManager depende de su API.
- Las guías de terceros (moddingcommunity, hosts como BisectHosting, Pingperfect o PingPlayers) confirman estas confusiones: el loader equivocado (un mod BepInEx en RedLoader "no hace nada y no da error"), falsos positivos de antivirus y la instalación en servidores dedicados.

---

## 2. Inventario de features legacy

Leyenda de estado: **OK** = funciona · **BUG** = funciona con errores · **INCOMPLETA** = a medio construir · **SIN UI** = el backend existe pero no hay interfaz · **MUERTA** = código o datos sin uso, o feature caída.

### 2.1 Público / descubrimiento

| Feature | Estado | Evidencia | Qué hacer en v2 |
|---|---|---|---|
| Home `/` | **INCOMPLETA** | `router.ts`: `/` hace un 302 a `/mods`. No hay landing. | Landing real (T0-05). |
| Listado `/mods` (búsqueda, categoría, orden, tipo, NSFW, "unapproved", paginación) | **BUG** | `list.ts` + `mods.njk`. `type` por defecto `"Mod"` oculta 20 mods aprobados (`null`/`Library`), entre ellos SonsAxLib. `nsfw=true` muestra *solo* NSFW. Los órdenes "highest/lowest rating" no sirven (0 reseñas). La paginación pinta todos los botones. `showunapproved` lista públicamente mods sin revisar. La búsqueda usa `contains` en la descripción (sin ranking, sin acentos, sin tolerancia a erratas). | Explorar facetado (T0-06), búsqueda real (T0-07). |
| "Mods of the week" (lateral) | **OK** | `featured.ts`: top 12 por `lastWeekDownloads`, solo `type:"Mod"`. `isFeatured` existe pero no se usa. | Tendencias + premio "Mod de la semana" + selección del staff (T0-23). |
| Carrusel (RedLoader + "Giveaways coming soon!") | **MUERTA** (slide 2) | `carousel.njk`: hardcodeado en inglés y promete sorteos inexistentes. | Eliminar. Eventos reales en T2. |
| Estadísticas globales (descargas, usuarios, mods, devs) | **OK** | `/api/stats` recorre `modDownload.count()` (casi 2 M de filas) en cada visita. | Contadores precalculados y cacheados. |
| Página de mod `/mods/:user/:slug` | **BUG** | `mod.njk` + `mod.js`: markdown → `innerHTML` sin DOMPurify (XSS); sin `<h1>` ni `canonical`; JSON-LD `aggregateRating` con 0/0 (inválido para Google); errata `lastestVersionSize`; mod inexistente → 200 con cuerpo `/404`. Galería sin lightbox (solo cambia la imagen principal). Las versiones antiguas no se pueden descargar desde la UI. El gráfico de descargas tiene el locale `es-ES` hardcodeado y no rellena los días a 0. | Página de mod v2 (T0-08). |
| Botón "Install with Red Manager" | **INCOMPLETA** | `mod.njk`: `btn-disabled` apunta a la descarga directa. | Modal de instalación guiada (T0-08/T0-33) y deep-link en T1. |
| oEmbed (`<link type="application/json+oembed" …/slug.json>`) | **MUERTA** | La URL `.json` responde 200 con el texto `/404`. | oEmbed real + tarjeta incrustable (T0-08). |
| Detalle de build `/builds/:user/:slug` | **BUG** | `build.njk`: changelog con `\|safe` (XSS); "release version" llama a un endpoint que exige `.zip` (roto para builds); imágenes con `data-lazy-src` que piden `url + '/preview'` (endpoint del servidor muerto). Sin comentarios. | Builds v2 (T0-24). |
| Listado `/builds` | **OK** | `builds.njk` + `/api/builds/featured`, `/api/stats/builds` | Se integra en Explorar con su pestaña (T0-06/T0-24). |
| Perfil `/profile/:slug` | **BUG** | `profile.njk` + `profile.js`: estadísticas (descargas 1/7/30 días, favoritos, reseñas = 0, rating "-"). Lista mods con `limit=100` y sin NSFW. Mezcla aprobados y no aprobados sin distinguirlos. No muestra los mods seguidos. Sin bio, enlaces ni banner. | Perfiles v2 (T0-15). |
| Página `/loader` (RedLoader) | **OK** (pobre) | `loader.njk`: texto largo + enlaces a GitHub + "featured mods". | Guía "Cómo instalar" + estado del ecosistema (T0-33, T0-10). |
| `/privacy` | **BUG** | No extiende el layout (HTML suelto). Texto de generador con `www.website.com` de relleno y sin contacto. No hay Términos, DMCA ni banner de cookies (AdSense en la UE exige un CMP). | Páginas legales reales + CMP (T0-14, T0-29). |
| 404 | **MUERTA** | `/404` devuelve `NOT_FOUND` (texto plano, 9 bytes) y las rutas redirigen allí con 302. Un mod inexistente da 200. | 404/410 reales y temáticos (T0-26). |
| SEO (sitemap, canonical, h1, meta description, hreflang) | **MUERTA** | `sitemap.xml` da 404. `robots.txt` solo trae el preámbulo de *content signals* de Cloudflare, sin reglas ni `Sitemap:`. Meta keywords spam (incluye "hacks", "keys", "nexus"…). `og:image` por defecto en `files.sotf-mods.com` (muerto). | T0-26 (junto con el track de SEO). |
| Traducciones (12 idiomas: ch, de, en, es, fr, nl, pt, ru, pl, se, it, tr) | **INCOMPLETA** | Inglés con 200 claves; el resto con 179–182 (faltan ~21 del flujo de subida). Hay muchos textos hardcodeados en inglés ("Comments", "Send", "Reply", "Trusted", "Dependencies", "Coming soon", carrusel, footer). Códigos ISO incorrectos (`ch` en vez de `zh`, `se` en vez de `sv`). Los contenidos de usuario no se traducen. | i18n de 13 idiomas completa (T0-27). |
| Nieve en diciembre | **OK** | `layout.njk` + `snow.js`: carga `magic-snowflakes` desde unpkg y tiene un toggle. | "Temporadas de la isla" (T1), respetando `prefers-reduced-motion`. |
| AdSense (solo invitados) | **BUG** | El script se carga dos veces (layout + bloque en cada página) y no hay consentimiento. "Login to disable ads" funciona como incentivo. | Publicidad responsable (T0-29). |
| Analítica | **OK** | Umami propio (`monitor.sotf-mods.com`). | Se mantiene o se sustituye (lo decide otro track); se añaden eventos de producto. |
| Tema claro/oscuro | **MUERTA** | Solo oscuro (`data-theme="dark"`). | T0-27. |
| Footer (redes) | **BUG** | Iconos de Twitter/YouTube/Facebook sin `href`. | Footer real. |

### 2.2 Cuentas y autenticación

| Feature | Estado | Evidencia | v2 |
|---|---|---|---|
| Registro | **OK/BUG** | `register.ts`: usuario solo alfanumérico ASCII; contraseña con carácter especial obligatorio; sin verificación de email, captcha ni rate limit. | T0-13, T0-22. |
| Login | **BUG** | Revela si el email existe ("User with this email does not exist"). El token (JWT que nunca se verifica) se guarda en una cookie legible por JS, en localStorage **y** en el DOM. `expiresAt` no se comprueba. Sin rate limit. `LoginAttempt` nunca se escribe. | T0-13. |
| Logout | **OK** | Borra el token. | Sesiones reales. |
| Olvidé / reset de contraseña | **OK** | Resend, token de 1 h, invalida las sesiones al cambiar. El token se guarda en claro. | Se mantiene (con hash en reposo). |
| Cambiar email / contraseña / nombre, borrar cuenta, exportar datos | **MUERTA** (no existen) | — | T0-13, T0-14. |
| Avatar | **OK** | Sube por multipart al API y de ahí a R2. Sin recorte ni conversión. | Perfiles v2. |
| Roles | **INCOMPLETA** | Solo `isTrusted`, que a la vez da moderación total (aprobar cualquier mod) y un límite de 500 MB. | Roles reales (T0-21). |

### 2.3 Creación de contenido

| Feature | Estado | Evidencia | v2 |
|---|---|---|---|
| Subir mod (`/upload`) | **OK/BUG** | Presigned PUT a R2 **sin restricciones** (cualquier usuario logueado puede subir cualquier fichero de cualquier tamaño con cualquier nombre); el API descarga el zip entero a memoria para leer el manifest; solo valida `id/version/type`; la descripción no se sanea en el servidor (XSS almacenado). No existe el campo `sourceUrl` en la UI. Sin borradores. | Wizard de publicación (T0-19). |
| Subir build (`/upload-build`) | **BUG** | Error en el chequeo de tamaño (`byteLength/1024 > 100MB`). Pide una miniatura aparte aunque el JSON ya trae una PNG embebida. **Se autoaprueba.** | T0-24. |
| Editar detalles | **BUG** | Modal en la página de mod; si se "actualizan imágenes", se **borran todas** y se suben de nuevo (sin reordenar ni borrar una sola). Sube multipart a través del API. | T0-19. |
| Publicar versión | **OK/BUG** | Multipart de hasta 500 MB **a través del API** (no presigned). Valida semver > latest. Changelog en texto plano (el mod lo muestra con viñetas por línea). | T0-19. |
| Borrar / archivar mod o versión | **MUERTA** (no existe) | Por eso hay mods llamados "Don't use" o "Blank". | T0-03. |
| Transferir / co-autores | **MUERTA** | — | T1. |

### 2.4 Social

| Feature | Estado | Evidencia | v2 |
|---|---|---|---|
| Comentarios con respuestas (1 nivel), @menciones e imagen adjunta | **BUG** | `comment.ts`: `sanitizeInput` **elimina todo lo que no sea ASCII, Han o una lista de signos** (sin acentos, ñ, ü, cirílico ni emoji; solo 3/277 comentarios tienen algún carácter no ASCII). Doble escapado (`&amp;` en 5 comentarios). Renderizado construido con strings (`innerHTML`). Sin editar, borrar, reportar ni paginación. El formulario se muestra a invitados (falla con 401). Las menciones buscan por `name` insensible a mayúsculas. | Comentarios v2 (T0-12). |
| Moderación de comentarios (`isHidden`) | **SIN UI** | La columna existe, el GET devuelve los ocultos y el cliente no filtra. No hay endpoint para ocultar. | T0-21. |
| Notificaciones | **INCOMPLETA** | Solo emails en lote cada 10 min (`PendingMention`: comentario en tu mod, respuesta, mención). No hay centro de notificaciones ni preferencias, y no se avisa de versiones nuevas. | T0-16. |
| Favoritos / "Follow" | **BUG** | La UI lo llama *follow*, pero la tabla es `ModFavorite` y no notifica nada. Hay dos endpoints duplicados (`GET /api/mods/:id/favorite` muta con GET; `POST /api/favorites/toggle`). Sin página "mis seguidos" (el parámetro `userSlugFavorites` de la API no se usa en la UI). | Seguir + colecciones (T0-16, T0-18). |
| Reseñas y valoraciones | **INCOMPLETA** | Modelo `ModReview` (1 por usuario y mod, `isHidden` true por defecto). Rutas `reviews/create.ts` rotas (copiadas de favoritos: crear borra si existe, incrementa `favoritesCount`, variable `favorite` sin definir) y **sin montar** en `index.ts`. UI: "Coming soon". Columnas `averageRating`/`reviewsCount` a 0. | T0-11. |
| Seguir autores | **MUERTA** (no existe) | — | T0-16. |
| Compartir / incrustar | **MUERTA** | Solo `og:` básicos. | T0-08. |

### 2.5 Moderación y operación

| Feature | Estado | Evidencia | v2 |
|---|---|---|---|
| Aprobar / desaprobar | **BUG** | `GET /api/mods/:id/approve` (muta con GET, sin CSRF). Unapprove responde "Mod approved.". Botón en la propia página del mod. Sin cola, sin motivo y sin avisar al autor. | T0-21. |
| Cola de aprobación | **MUERTA** | Solo el filtro "Unapproved" del listado público. 28 mods pendientes, algunos desde hace 889 días. | T0-21. |
| Reportes | **MUERTA** | — | T0-21. |
| Audit log | **MUERTA** | — | T0-21. |
| Crons | **BUG** | Cada 30 min: 4 crons recalculan **todos** los contadores con N+1 updates (`count downloads` recorre ~2 M de filas); `lastWeekDownloads` ordena las versiones por texto. Menciones cada 10 min (OK). | Agregados incrementales (otro track). |
| Scripts | OK | `delete-unapproved-mods`, `delete-all-tokens`, migraciones de imágenes a R2, CORS de R2. | Referencia para la migración. |

### 2.6 Integraciones externas (clientes de la API)

| Integración | Estado | Evidencia | v2 |
|---|---|---|---|
| **RedManager** (Tauri, de ToniMacaroni) | **OK (dependencia crítica)** | `src/lib/mods.ts`: `GET /api/mods?&approved=&orderby=newest&page=&nsfw=&search=` (límite por defecto 10, pagina con `meta.pages`), `GET /api/mods/:mod_id`, abre `https://sotf-mods.com/mods/:user/:slug` y **descarga desde `https://sotf-mods.com/mods/:user/:slug/download/:latestVersion`**. Instala las dependencias recursivamente con `fetchMod(depId)`. Tiene pestañas "unapproved" y "NSFW". Campos usados: `name, slug, mod_id, shortDescription, isApproved, category{name,slug}, user{name,slug}, imageUrl, latestVersion, lastReleasedAt, type, dependencies[], downloads`. | Contrato congelado (T0-01). Proponer un PR a RedManager con deep-link en T1. |
| **SOTF Mods OneClick** (`/static/downloads/sotfmodsoneclick-setup1.0.0.exe`, Electron de 75 MB) | **MUERTA** | Registra el protocolo `sotf-mods-oneclick://?mod_id=`. Lee `mod.user_slug`, `mod.slug` y `mod.latest_version` en la raíz de la respuesta, pero la API actual devuelve `{status, data:{user:{slug},…}}`, así que descarga `/mods/undefined/undefined/download/undefined`. No está enlazado en ninguna plantilla. Solo Steam y sin dependencias. | Retirarlo con una redirección a `/instalar` (la URL sigue respondiendo). Sustituirlo por el deep-link de RedManager (T1). |
| **KelvinGPT / KelvinSeek** (mods in-game de ShokoCC y Nick) | **OK** | `GET /api/kelvinseek/prompt?text&context&chat_id` → `"comando\|respuesta"`; `GET /api/kelvinseek/clear?chat_id`. Sin auth, sin rate limit, sin tope de gasto (OpenAI gpt-4o-mini). | T0-25 (compatibilidad + límites). |
| Bot de Discord kelvin-bot | **MUERTA** | Llama a `/api/kelvin-gpt/prompt` → 404 hoy. | Documentar. Opcional: alias al endpoint nuevo. |
| `manifest.json` → `url` | **OK (enlaces externos)** | Ej.: FrankyModMenu `"url": "https://sotf-mods.com/mods/franky/frankymodmenu"`. READMEs de AxelModMenu, CameraFlow, ZombieMode, SOTFSpeedify, SOTFEdit (`/profile/codengine`) e hilos de Steam enlazan a páginas de mod. | Redirecciones y slugs históricos (T0-01). |
| `GET /api/mods/:mod_id/check?version=` | **OK** | Comprobador semver ("newVersionAvailable") pensado para que los mods busquen actualizaciones. | Mantener idéntico. |

### 2.7 Código y datos muertos

`Tag` (modelo sin uso) · `LoginAttempt` (nunca se escribe) · rutas `reviews/*` (rotas y sin montar) · `ioredis`, `jsonwebtoken`, `@elysiajs/swagger`, `sharp`, `image-size`, `unzip`, `zlib` (dependencias sin usar) · `isFeatured`, `averageRating`, `reviewsCount`, `latestVersionSize` (columnas sin poblar) · variables `FILE_UPLOAD_*`, `FILE_PREVIEW_ENDPOINT`, `KELVINGPT_*` · `lazyLoadImages` con `/preview` · carrusel de sorteos · `featured.js` (solo lo usa `/loader`) · el instalador OneClick · `favorites/get.ts` duplicado de `toggle-favorite`.

---

## 3. Contratos legacy que v2 NO puede romper

| # | Contrato | Consumidor | Comportamiento exigido en v2 |
|---|---|---|---|
| L1 | `GET https://sotf-mods.com/mods/:userSlug/:modSlug/download/:version` | RedManager, enlaces de usuarios, OneClick | Registrar la descarga (con dedupe) y responder **302 a la URL pública de R2** (`r2.sotf-mods.com/<key>`, clave inmutable y cacheable). Probar con el cliente de descarga de RedManager que sigue redirecciones (lo más probable es que sí, porque usa reqwest vía el plugin de Tauri, pero hay que verificarlo en QA). Aceptar slugs con `'`, `(`, `)`, `+`, `.` y `_`. |
| L2 | `GET api.sotf-mods.com/api/mods?approved&orderby&page&limit&nsfw&search&type&category&userSlug&userSlugFavorites&modIds` | RedManager | Misma forma `{status, data[], meta{total,page,limit,pages,next_page,prev_page}}` y mismos campos, con `dependencies` como array. Sin `type`, filtra `Mod` igual que hoy (RedManager cuenta con ello). `approved=false` → solo mods en estado "pendiente con checks automáticos superados" (ver T0-03). |
| L3 | `GET api.sotf-mods.com/api/mods/:mod_id` | RedManager, OneClick | Misma forma, con `dependencies` como **string** separado por comas (el cliente actual lo espera así en detalle). Versiones ordenadas por semver. |
| L4 | `GET /api/mods/:mod_id/check?version=` | Mods | Idéntico. |
| L5 | `GET /api/kelvinseek/prompt`, `GET /api/kelvinseek/clear` | Mods KelvinGPT/KelvinSeek | Formato de texto `comando\|respuesta` idéntico y sin auth, con rate limit y tope de gasto (T0-25). |
| L6 | URLs públicas: `/mods`, `/mods?category=&orderby=&search=&type=&page=`, `/mods/:user/:slug`, `/builds`, `/builds/:user/:slug`, `/profile/:user`, `/loader`, `/privacy`, `/login`, `/register`, `/forgot-password`, `/reset-password?token=`, `/upload`, `/upload-build`, `/ads.txt`, `/static/images/*` (logos) y `/static/downloads/sotfmodsoneclick-setup1.0.0.exe` | Buscadores, manifests, READMEs, Steam, emails ya enviados | 200 o 301 hacia la URL canónica nueva. Nada termina en 404 salvo que el recurso no exista. Los parámetros legacy se traducen a filtros nuevos. `/mods/:user/:slug.json` pasa a devolver oEmbed real. |
| L7 | `GET /api/stats`, `/api/stats/builds`, `/api/categories`, `/api/mods/featured`, `/api/builds/featured`, `/api/users/:slug`, `/api/users/:slug/stats`, `/api/comments?mod_id=`, `/api/mods/:mod_id/download-stats` | Posibles scripts de terceros | Mantener solo-lectura durante al menos 12 meses bajo el namespace legacy, marcados como *deprecated* en la documentación. |
| L8 | Endpoints de escritura legacy (login, publish, comment…) | Solo el frontend legacy | Se pueden retirar el día del corte (el frontend nuevo usa la API v2). Responder `410 Gone` con un mensaje. |

---

## 4. Pain points de usuarios (evidencia)

| Pain point | Evidencia | Respuesta de v2 |
|---|---|---|
| **"No funciona / crashea tras la actualización"** | 71/277 comentarios (26 %). Ej. en Axel's Mod Menu: "game still crashes", "doesn't work since the new update", "needs updated". Hilos de Steam "redloader broke for me" y "1.0 broke the mod loader". Issues de RedLoader: "no longer loads after latest windows update" (2026-07). Última release de RedLoader: 0.8.6 (2025-02-26). | Compatibilidad por build del juego + estado del ecosistema + etiqueta "posiblemente desactualizado" (T0-10). |
| **Instalación confusa** | 38 comentarios (14 %): "installed through RedManager… nothing activates", "where", "how to". Guías de terceros insisten en "mod BepInEx en RedLoader = no hace nada". | Guía `/instalar` + modal de instalación por mod + checklist "Día 1" + etiqueta "Requiere RedLoader (no BepInEx)" (T0-33, T0-08). |
| **Multijugador / dedicado** | 20 comentarios: "Can you use this in multiplayer?", "how to add mod to dedicated server?", "desync". `modSide` vacío en 150 mods. | Campos obligatorios de plataforma (del manifest `platform`), "¿lo necesitan todos los jugadores?", "soporta dedicado", filtros y reportes de compatibilidad por modo de juego (T0-04, T0-10). |
| **Dependencias** | SonsAxLib: 91.710 descargas, 0 seguidores y fuera del listado por defecto. "I saw the dependency on OptionalDependAPI" (el usuario lo descubrió por su cuenta). | Resolución de dependencias, "Usado por N mods", aviso al descargar (T0-09). Bundles en T1. |
| **Confianza / malware** | Issues de RedManager: "Malicious software detected", "22 founds of spyware", "antivirus detect malware". Guías: "if you got a warning from Windows… it's not a virus". | Informe de seguridad público por versión (hash SHA-256 + VirusTotal), explicación de falsos positivos y creador verificado (T0-21, T0-08). |
| **Mods sin revisar en limbo** | 28 mods sin aprobar con 67.701 descargas, algunos pendientes desde hace 889 días. | Estados explícitos + cola con SLA + checks automáticos (T0-03, T0-21). |
| **Texto mutilado** | Comentarios sin acentos ni emoji; en un sitio con ruso, chino, polaco y turco. | Unicode completo + markdown-lite saneado (T0-12). |
| **Autores sin feedback estructurado** | Los reportes de bug se pierden entre comentarios; no hay reseñas. | Comentario marcado como "reporte de bug" con versión + reseñas + bandeja en el panel (T0-12, T0-11, T0-19). |
| **Peticiones de features** | 20 comentarios "could you add…". Hilo de Steam: "lack of mods… I would like very long zip line mod". | Peticiones de mods (tablón de ideas con votos) en T2. |
| **Reuploads / autoría** | La cuenta "reuploader" tiene 28 builds. El JSON del blueprint trae `Author` (p. ej., "Natka") distinto del que sube. | Crédito "Autor original (según el blueprint)" en T0-24, reclamar autoría en T1 y licencia del mod en T0-08. |
| **RedManager falla al paginar** | Steam: "Failed to load mods page 2 (type error)"; issue "Stuck with Getting initial mod page". | API legacy estable, cacheada y rápida (T0-01). |

---

## 5. Principios de producto para v2

**North Star**: *descargas exitosas por semana* (descargas únicas de versiones cuyo estado de compatibilidad en la build actual no es "roto"). Obliga a optimizar confianza y descubrimiento, no solo tráfico.

**Pilares**
1. **Funciona** (confianza): compatibilidad, seguridad, versiones correctas y estado del ecosistema.
2. **Encuentra**: landing, explorar, Cmd+K, colecciones y SEO/GEO.
3. **Instala**: guía, dependencias y RedManager.
4. **Crea**: panel de creador, publicación sin fricción y analíticas.
5. **Pertenece**: perfiles, reseñas, comentarios, notificaciones y gamificación con buen gusto.

**Estándar de "terminado"** (lo que separa "10 años cocinándose" de "funciona"), aplicable a cada feature T0:
- Estados de carga (skeletons), vacío (con microcopy temático), error (con reintento) y offline.
- Actualizaciones optimistas con *undo* en acciones reversibles (seguir, reacción, colección).
- Accesible por teclado, foco visible, `aria-live` en toasts y contraste AA.
- Responsive probado en 360 px, 768 px, 1024 px y 1440 px, con gestos táctiles donde aplique (galería, hojas inferiores).
- Strings en el catálogo i18n (cero textos hardcodeados), plurales ICU y fechas/números con el locale del usuario.
- Evento de analítica de producto definido.
- Metadatos SEO (si es pública) y JSON-LD cuando aplique.
- `prefers-reduced-motion` respetado por todas las animaciones (Motion).
- Tests: unitario de reglas de negocio + e2e del flujo feliz.

**Tono e identidad SOTF (a nivel de feature)**
- Estados vacíos con Kelvin y su libreta: *"Kelvin buscó por toda la isla y no encontró mods con esos filtros."*
- 404: *"Te perdiste en la cueva. El GPS no encuentra esta página."*
- Días desde el registro: *"Día 842 en la isla"*.
- Rangos, insignias y temporadas temáticas (sección 9).
- **Sin assets oficiales** (logos, capturas o modelos de Endnight) en la marca: ilustración propia y aviso "Sitio de fans, no afiliado a Endnight Games".

---

## 6. Mapa de pantallas v2 (arquitectura de información)

**Público**: `/` landing · `/mods` explorar (pestañas Mods / Librerías / Builds) · `/mods/categoria/:cat` · `/mods/etiqueta/:tag` · `/mods/:user/:slug` (secciones: descripción, versiones, compatibilidad, reseñas, comentarios, dependencias, estadísticas) · `/mods/:user/:slug/versiones/:version` · `/builds/:user/:slug` · `/creadores` · `/u/:user` (con `/profile/:user` → 301) · `/colecciones` y `/colecciones/:id-:slug` · `/instalar` · `/redloader` (con `/loader` → 301) · `/estado` (ecosistema: build del juego y RedLoader) · `/novedades` · `/developers` (docs de la API) · `/legal/{privacidad,terminos,contenido,dmca,cookies}` · `/kelvinseek` · 404 y 410.

**Cuenta**: `/entrar` · `/registro` · `/recuperar` · `/restablecer` · `/verificar-email` · `/ajustes/{perfil,cuenta,seguridad,sesiones,notificaciones,privacidad,contenido}` · `/notificaciones` · `/mis-descargas` · `/mis-colecciones`.

**Panel de creador** (SPA): `/panel` resumen · `/panel/mods` · `/panel/mods/nuevo` (wizard) · `/panel/mods/:id/{ficha,galeria,versiones,nueva-version,compatibilidad,analiticas,comentarios,ajustes}` · `/panel/builds/...` · `/panel/logros`.

**Moderación y admin** (SPA, según rol): `/mod/cola` · `/mod/reportes` · `/mod/usuarios` · `/mod/contenido` · `/mod/auditoria` · `/admin/{ecosistema,anuncios,destacados,categorias,etiquetas,premios,ajustes,discord}`.

---

## 7. Catálogo de features v2 por área (visión completa)

> Resumen de *qué* es cada área. El detalle T0 (historia, criterios, datos y esfuerzo) está en la sección 8 y los tiers en la sección 10.

### 7.1 Landing
Hero atmosférico (ilustración propia de la isla, noche o niebla, sin assets oficiales) con el titular *"El hogar del modding de Sons of the Forest"*, un buscador Cmd+K muy visible y estadísticas en vivo ("257 mods · 1,98 M descargas · 3.883 supervivientes"). Debajo, una **franja de estado del ecosistema** ("Juego: parche X del <fecha> · RedLoader 0.8.6: ✓ funciona"). Secciones:
- Mod de la semana (hero secundario).
- Tendencias.
- Actualizados recientemente y compatibles.
- Esenciales para empezar (colección del staff).
- Categorías con iconografía propia.
- Para multijugador y servidores.
- Escaparate de builds.
- Creador destacado.
- "Cómo funciona" en 3 pasos (instala RedLoader → descarga → juega).
- Para creadores (publica, analíticas, insignias).
- Comunidad (Discord).
- Novedades.
- FAQ (SEO/GEO).

Si el usuario está logueado, la home se personaliza (actualizaciones de lo que sigues y de lo que descargaste primero).

### 7.2 Explorar
Facetas:
- Tipo (mod, librería, build).
- Categoría nueva.
- Etiquetas (multi).
- Compatibilidad con la build actual (funciona / sin datos / incluir rotos).
- Multijugador (compatible / todos lo necesitan / solo host / dedicado).
- Plataforma del manifest (Client/Server/Universal).
- Creador verificado.
- Actualizado en (30 días / 90 días / 1 año).
- Valoración mínima.
- NSFW (solo con opt-in).

Órdenes: relevancia, tendencia, más descargados (total o 7 días), mejor valorados (bayesiano), recién actualizados, nuevos, más seguidos y más comentados.

Estado en la URL (compartible), conteos por faceta, vista de rejilla o lista, scroll infinito con paginación real enlazable (SEO) y traducción de los parámetros legacy.

### 7.3 Búsqueda global Cmd+K
Paleta global (`Ctrl/Cmd+K` y `/`) con grupos: Mods y librerías, Builds, Creadores, Colecciones, Guías y páginas, y Acciones (subir mod, ir al panel, cambiar tema o idioma, abrir notificaciones). Recientes y tendencias con la consulta vacía. Tolera erratas (trigramas) e ignora acentos (`unaccent`). La coincidencia exacta de `mod_id` va primero. Resaltado de coincidencias. En móvil se abre como hoja a pantalla completa. Objetivo: p95 < 100 ms en servidor.

### 7.4 Página de mod
- **Cabecera**: H1, descripción corta, autor con insignia de verificado, chips de hechos (versión, actualizado, descargas, valoración, compatibilidad, multijugador).
- **Acciones**: CTA primaria "Descargar vX · 2,3 MB" y secundaria "Instalar con RedManager". Botones de seguir, añadir a colección, compartir y reportar.
- **Galería** con lightbox: teclado, swipe, zoom y vídeo de YouTube como diapositiva.
- **Descripción** en markdown saneado (con una allowlist para el HTML legacy: `b, strong, i, br, p, ul, ol, li, h1–h3, details, summary, code, a, hr, dl`; `font`/`big` se descartan).
- **Versiones** ordenadas por semver, con changelog en markdown, descargas por versión, compatibilidad, informe de seguridad y descarga de versiones antiguas con aviso.
- **Resto de secciones**: compatibilidad, reseñas, comentarios, dependencias ("requiere" y "usado por"), estadísticas públicas y mods similares.
- **Lateral**: `mod_id` copiable, tipo, plataforma, `gameVersion`/`loaderVersion` declarados, tamaño, SHA-256, licencia, código fuente, enlaces de apoyo (Ko-fi, Patreon…), fechas, categoría y etiquetas.
- **Banners de estado**: pendiente, archivado (con sucesor), NSFW y roto en la build actual.
- **Integraciones**: oEmbed real, tarjeta incrustable `/embed/...`, OG image generada (tarjeta con estilo SOTF) y JSON-LD correcto.

### 7.5 Versiones, semver y compatibilidad declarada
Orden semver real y canales (release/beta). Se guardan los campos del manifest que hoy se ignoran (`name, author, gameVersion, loaderVersion, platform, url, priority, logColor`). El autor marca las builds del juego probadas. Retirar (*yank*) una versión mantiene su URL con un aviso. Tamaño y SHA-256 por fichero.

### 7.6 Dependencias
Se resuelven los ids del manifest a mods del sitio y se avisa de dependencias desconocidas. Se calculan las dependencias inversas ("usado por"). Al descargar, se muestra un aviso "este mod requiere…" con descarga en cadena. En T1 llegan el grafo visual y los bundles prehechos.

### 7.7 Instalación
Guía `/instalar` (RedLoader vía RedManager, carpetas, verificación con F1, errores típicos, BepInEx frente a RedLoader, servidores dedicados con enlaces a los hosts) y modal de instalación por mod. En T1, un **deep-link a RedManager** (`redmanager://install/<mod_id>`, a proponer como PR con `tauri-plugin-deep-link`) y la instalación de colecciones completas. Se retira el OneClick roto.

### 7.8 Reseñas y valoraciones
De 1 a 5 estrellas, con título y cuerpo en markdown-lite, versión reseñada, etiqueta de **descarga verificada**, votos de útil / no útil, una respuesta del autor por reseña, histograma, orden (útiles / recientes / críticas), edición con historial y reportes.

### 7.9 Comentarios v2
Hilos (2 niveles visibles), markdown-lite, Unicode completo, imágenes (WebP y sin EXIF), reacciones, editar (con marca "editado") y borrar (con marcador si tiene respuestas). El autor puede fijar hasta 3 comentarios. Insignias de autor y moderador. Autocompletado de @menciones. Permalinks. Orden por top o nuevos. Casilla **"Es un reporte de bug"** con la versión. Anti-spam y moderación.

### 7.10 Compatibilidad "¿Funciona?" (feature insignia)
Registro de builds del juego y del estado de RedLoader. Reportes de usuarios por versión, build y modo (un jugador, host, cliente o dedicado) con el resultado funciona / parcial / roto. Tras una descarga logueada, se pregunta "¿Funcionó?". El autor puede responder o marcar "arreglado en vX". Insignias en tarjetas y en la página. Etiqueta automática "posiblemente desactualizado". Banner global cuando sale un parche que rompe cosas y aviso a los creadores afectados.

### 7.11 Cuentas
- **Acceso**: login por email o usuario con los hashes existentes, sesiones HttpOnly y gestión de sesiones.
- **Verificación**: email verificado para publicar, comentar y reseñar (las cuentas antiguas pueden seguir entrando).
- **Gestión**: cambio de email y contraseña, contraseñas modernas (longitud + lista de contraseñas filtradas) y borrado y exportación de datos (GDPR).
- **Más adelante**: Discord OAuth y 2FA TOTP en T1; Steam, GitHub y passkeys en T2.

### 7.12 Perfiles
- **Identidad**: banner (propio o de un set temático), avatar con recorte, nombre visible con Unicode, handle, bio y enlaces (web, GitHub, YouTube, Twitch, Discord, Ko-fi/Patreon).
- **Señas temáticas y estadísticas**: "Día N en la isla", insignias, 3 mods fijados, estadísticas y **heatmap de actividad** de 12 meses.
- **Pestañas**: Mods, Builds, Colecciones, Reseñas y Actividad, más seguidores y seguidos.
- **Privacidad**: el usuario puede ocultar su actividad y sus colecciones.

### 7.13 Seguir y notificaciones
Seguir mods (versiones nuevas), autores (mods nuevos) y, en T1, colecciones. Centro de notificaciones in-app con **SSE en tiempo real**, emails instantáneos o en *digest* (diario/semanal) configurables por tipo, y desuscripción en 1 clic. Se migra `PendingMention`.

### 7.14 Colecciones / modpacks
Listas curadas (públicas, ocultas o privadas) con notas por elemento y versión fijada opcional. Resumen para grupos multijugador ("todos los jugadores necesitan estos 4"). Se pueden compartir y clonar, y "descargar todo" en T0 muestra la lista con checklist. Colecciones del staff. En T1, seguir colecciones e instalarlas vía RedManager.

### 7.15 Panel de creador
- **Resumen**: KPIs, tareas sugeridas ("tu mod tiene 3 reportes de fallo en el parche 13", "añade galería") y progreso de hitos.
- **Publicación**: wizard con validación del manifest **en el navegador** antes de subir, borradores con autoguardado, editor markdown con vista previa y galería con arrastrar para reordenar, texto alternativo y recorte.
- **Versiones**: nueva versión con changelog y builds probadas.
- **Seguimiento**: analíticas y comentarios, más archivar con sucesor.
- **Más adelante**: co-autores y transferencia (T1) y publicaciones programadas (T2).

### 7.16 Analíticas del creador
Descargas diarias (rellenando días a cero) en rangos de 7/30/90/365 días o todo, por versión, únicas frente a totales (desde v2), por origen (web, RedManager o legacy según User-Agent), por referrer (Google, Discord, YouTube, GitHub, interno o directo), vistas → conversión, seguidores, valoración y compatibilidad por build. Exportable a CSV. En T1, país (cabecera `CF-IPCountry`).

### 7.17 Moderación y admin
- **Roles**: usuario, creador, creador verificado, moderador y admin.
- **Cola**: checks automáticos (zip, zip bomb, zip slip, schema del manifest, allowlist de tipos de fichero, ejecutables, VirusTotal).
- **Reportes y acciones**: reportes de cualquier entidad y acciones (ocultar, retirar, avisar, suspender, banear).
- **Auditoría**: audit log completo.
- **Operación del sitio**: registro de builds del juego y estado del ecosistema, anuncios, destacados, taxonomía, premios y el webhook de Discord.

### 7.18 Gamificación
Ver la sección 9.

### 7.19 Builds v2
Miniatura extraída automáticamente del PNG embebido en el blueprint, estadísticas del JSON (número de elementos y estructuras, versión de BuildShare, autor original del blueprint), BuildShare como dependencia automática con instrucciones, y comentarios, reseñas y colecciones igual que en los mods. Arreglar la publicación de versiones de builds. En T1, un **visor 3D** (los elementos traen posición, rotación, `ProfileID` y `LengthScale`; es factible con three.js e instancing). En T2, el mapa de la isla con dónde se construyó cada build (`Position`).

### 7.20 KelvinSeek y "Pregúntale a Kelvin"
Endpoint in-game compatible con límites (T0). En T1, un asistente en el sitio para encontrar mods ("quiero que Kelvin me ayude a construir más rápido") con búsqueda + LLM, con coste acotado y cacheado.

### 7.21 Novedades, estado y documentación
Blog y changelog del sitio (markdown, SSG), banner de anuncios, página `/estado` del ecosistema y `/developers` con OpenAPI.

### 7.22 API pública, embeds y badges
API v2 de solo lectura documentada (T0). API keys, webhooks por creador, badges SVG estilo shields ("descargas", "versión", "compatible con parche X") para READMEs de GitHub y publicación vía API o GitHub Action (T1).

### 7.23 Tema, i18n y accesibilidad
Oscuro por defecto ("noche en la isla"), claro ("día") y sistema. 13 idiomas, WCAG 2.2 AA.

### 7.24 Monetización responsable
AdSense solo para invitados, con CMP, sin anuncios en NSFW ni en el flujo de descarga e instalación. En T2, un perfil "supporter" opcional.

---

## 8. Features T0 en detalle

**Esfuerzo** (1 dev full-stack asistido por IA, incluye tests básicos, i18n de strings y estados de UI): **S** ≤ 2 días · **M** 3–6 días · **L** 7–15 días.
**Clase**: **[N]** = núcleo (bloquea el lanzamiento: paridad, compatibilidad, seguridad, migración) · **[T]** = titular (lo que hace que v2 se sienta v2).

> Los nombres de tablas y columnas son **requisitos de datos de producto**; el diseño definitivo del esquema lo cierra el track de backend/BD. Convención: `snake_case`, `id` bigint o uuid y `created_at`/`updated_at` implícitos.

---

### T0-01 · Capa de compatibilidad legacy (URLs y API) — **M** [N]
**Historia**: Como usuario de RedManager o de un mod con KelvinSeek, o como alguien que abre un enlace antiguo, quiero que todo siga funcionando tras v2, para no notar el cambio más que para bien.
**Criterios de aceptación**
- Los contratos L1–L8 (sección 3) pasan una suite de *contract tests* grabada contra producción actual (respuestas GET reales como fixtures).
- RedManager 1.1.10 lista, busca, pagina, abre la página y **descarga e instala** un mod y sus dependencias contra el entorno v2 (QA manual documentado).
- Todas las URLs legacy públicas devuelven 200 o 301 (nunca 302) a la canónica. Los slugs con `'()+._` resuelven. Los slugs antiguos redirigen para siempre.
- `/mods/:user/:slug.json` devuelve oEmbed JSON válido (`type: rich`).
- `/static/downloads/sotfmodsoneclick-setup1.0.0.exe` → 301 a `/instalar#oneclick` con una explicación.
- La API legacy responde con `Cache-Control` y ETag, y sirve de caché en el edge (s-maxage corto) para absorber el paginado de RedManager.
- Los endpoints legacy de escritura devuelven 410 con un mensaje.

**Datos**: `mod_slug_history(mod_id, user_slug, mod_slug, is_current, created_at)` y `user_slug_history(user_id, slug, created_at)`. Vista o serializador `legacy_mod_v1` con la forma exacta de hoy.
**Notas**: Congelar la forma incluyendo sus rarezas (`dependencies` como array en lista y string en detalle). Proponer a ToniMacaroni un PR a RedManager para migrar a la API v2 con el tiempo.

---

### T0-02 · Descargas directas a R2 con conteo honesto — **M** [N]
**Historia**: Como jugador, quiero que la descarga empiece al instante y con el nombre correcto, y como creador, quiero que el contador sea fiable.
**Criterios de aceptación**
- Botón → `/mods/:user/:slug/download/:version` → registro del evento → **302** a `https://r2.sotf-mods.com/<key>` (sin proxy de bytes). El nombre del fichero lo fija `Content-Disposition` en el objeto R2 (metadato al subir o reescritura para objetos legacy).
- Dedupe: una descarga cuenta como única por (versión, hash de IP con sal diaria, día). El total legacy (1.977.059) se conserva y se suma.
- Si el usuario está logueado, el evento guarda `user_id` (para "Mis descargas" y la "descarga verificada" de las reseñas).
- Se clasifica el origen por User-Agent (navegador, RedManager, OneClick o bot); **los bots no cuentan**.
- Tamaño y SHA-256 visibles en el botón y en la versión (backfill para las 612 versiones existentes).
- La versión con fichero en `files.sotf-mods.com` se marca como "fichero no disponible" (sin 404 silencioso).

**Datos**: `download_events(id, mod_version_id, user_id?, ip_hash, ua_class, referrer_domain, country?, created_at)` particionada por mes. `mod_versions.file_size_bytes`, `sha256`, `r2_key`, `file_available`. `mod_daily_stats(mod_id, day, downloads, unique_downloads, views)` y `version_daily_stats`. Backfill de agregados diarios desde los ~2 M de filas de `ModDownload` (fecha + versión).

---

### T0-03 · Estados del mod y migración de "unapproved" — **M** [N]
**Historia**: Como creador, quiero guardar borradores, ocultar o archivar mis mods y saber en qué punto está la revisión; como jugador, quiero no toparme con mods rotos o de prueba.
**Criterios de aceptación**
- Estados: `draft`, `pending_review`, `published`, `unlisted` (accesible por enlace, fuera de listados y búsqueda), `rejected` (con motivo), `archived` (visible con banner, opcionalmente con **mod sucesor**) y `removed` (410 público, visible para moderación).
- Solo `published` aparece en explorar, búsqueda, sitemap, feeds y API v2 de listados. `pending_review` es accesible por URL directa **solo si los checks automáticos pasaron**, con el banner "Sin revisar por el equipo" y `noindex`.
- La API legacy con `approved=false` devuelve solo `pending_review` con los checks OK (para no romper la pestaña de RedManager).
- El autor puede borrar borradores, archivar sus publicados y pedir su retirada. El borrado duro de publicados lo hace moderación, para preservar enlaces.
- Cada cambio de estado notifica al autor (con motivo) y queda en el audit log.
- **Migración de los 28 mods sin aprobar**: tabla de mapeo revisada con el admin (anexo A). Por defecto, los llamados "Don't use" o "Blank" pasan a `archived` y el resto a `pending_review` al principio de la cola.

**Datos**: `mods.status` (enum), `status_reason`, `status_changed_at`, `published_at`, `archived_at`, `successor_mod_id?`. `mods.is_approved` legacy se deriva en la vista legacy.

---

### T0-04 · Versionado semver y metadatos del manifest — **M** [N]
**Historia**: Como jugador, quiero ver las versiones en orden correcto y saber para qué juego, qué loader y qué modo sirven.
**Criterios de aceptación**
- Orden semver en todas partes (versiones, "latest" y cálculo de `lastWeekDownloads`). Se corrige BuildShare (1.0.10 > 1.0.2).
- Se extraen y guardan todos los campos del manifest (schema de RedLoader: `id, name, author, version, description, gameVersion, loaderVersion, platform, dependencies, type, url, priority, logColor`) en cada versión. **Backfill** re-leyendo los 576 zips de R2 (job único y en streaming).
- `platform` (Client/Server/Universal) alimenta la plataforma del mod. El autor completa "¿lo necesitan todos los jugadores?" y "¿funciona en dedicado?" si no se deduce.
- Canal por versión (`release`/`beta`) y retirada (`yanked` con motivo): la URL sigue funcionando con un aviso.
- Los tipos `null` (19 mods) se normalizan a `Mod` o `Library` según su manifest (backfill), así que nada queda invisible.

**Datos**: `mod_versions.manifest jsonb`, `semver_major/minor/patch/prerelease` (u ordenación en la app), `channel`, `status`, `yank_reason`, `game_version_declared`, `loader_version_declared`, `platform`. `mods.platform`, `requires_all_players`, `dedicated_server` (enum `unknown|yes|no|partial`).

---

### T0-05 · Landing page — **M** [T]
**Historia**: Como visitante nuevo que llega desde Google o Discord, quiero entender en 5 segundos qué es el sitio, que está vivo y cómo empezar.
**Criterios de aceptación**
- Estructura de la sección 7.1 en HTML estático prerenderizado (LCP < 1,5 s en 4G simulado, CLS 0), con datos que se regeneran como mucho cada hora.
- H1 único, meta description, JSON-LD `WebSite` + `SearchAction` + `Organization`, y FAQ con `FAQPage`.
- El buscador del hero abre Cmd+K.
- Variante logueada con "Tus actualizaciones" (T0-16/T0-17).
- Versión en los 13 idiomas (UI), con hreflang.

**Datos**: Consume agregados existentes (`site_stats`, tendencias, premios, colecciones destacadas, `ecosystem_status`).

---

### T0-06 · Explorar facetado + taxonomía nueva — **L** [T]
**Historia**: Como jugador, quiero filtrar por lo que me importa (multijugador, que funcione hoy, categoría concreta) y ordenar con sentido.
**Criterios de aceptación**
- Facetas y órdenes de la sección 7.2, con estado en la URL y conteos por faceta. Sin recarga completa (cliente) y con paginación enlazable SSR/SSG para SEO.
- **Taxonomía nueva** de mods (propuesta a validar: Calidad de vida · Jugabilidad y dificultad · Construcción · Compañeros (Kelvin/Virginia) · Armas y equipo · Vehículos y movilidad · Cosmético / Model swap · Interfaz y HUD · Menús y sandbox · Multijugador y servidores · Librerías) + **etiquetas curadas** (hasta 5 por mod, vocabulario controlado por admin).
- Recategorización de los 257 elementos con una sugerencia automática (LLM o reglas sobre nombre y descripción) y confirmación de moderación (herramienta de revisión masiva).
- Los parámetros legacy (`?category=qol|misc|model-swap|library`, `?orderby=most_downloaded…`, `?type=Build|Both`) se mapean.
- Los mods `Library` tienen su propia pestaña y también aparecen en "Todos". **Ningún mod publicado queda fuera de los listados por defecto.**
- NSFW oculto salvo opt-in (T0-30).
- Vacíos con microcopy temático.

**Datos**: `categories` (nueva, con `legacy_slugs[]`), `tags(id, slug, name_key, group)`, `mod_tags(mod_id, tag_id)`, índices de filtrado, `mods.trending_score` y `rating_bayes`.

---

### T0-07 · Búsqueda global Cmd+K — **M** [T]
**Historia**: Como usuario, quiero encontrar cualquier mod, creador o página desde cualquier sitio con el teclado.
**Criterios de aceptación**
- Grupos y comportamiento de la sección 7.3. Coincidencia exacta de `mod_id` o nombre primero y tolerancia a 1–2 erratas ("stak mod" → StackMod).
- p95 < 100 ms en servidor. Se precarga el índice de páginas estáticas y las acciones.
- 100 % navegable por teclado, con `role="dialog"` y `aria-activedescendant`.
- Búsquedas sin resultados registradas (para curar sinónimos y detectar peticiones de mods).

**Datos**: `search_documents(entity_type, entity_id, lang, title, body, weight, tsv, trigram)` o columnas `tsvector` + índices `pg_trgm` y `unaccent`. `search_queries_log(q_hash, results, created_at)` agregado.

---

### T0-08 · Página de mod v2 — **L** [T]
**Historia**: Como jugador, quiero decidir en 30 segundos si un mod me sirve, descargarlo con confianza y saber cómo instalarlo.
**Criterios de aceptación**
- Estructura de la sección 7.4. Markdown saneado en el servidor (allowlist de HTML legacy) y YouTube incrustado con *facade* (sin cargar el iframe hasta el clic).
- Galería con lightbox accesible, imágenes en AVIF/WebP responsive con `loading="lazy"` salvo la primera y placeholders (thumbhash).
- Modal "Cómo instalar este mod": pasos según tipo y plataforma, dependencias, "requiere RedLoader (no BepInEx)" y enlace a `/instalar`. Botón de RedManager que abre la guía (deep-link en T1).
- Compartir: copiar enlace, Discord, X y Reddit. oEmbed `rich` y `/embed/mods/:user/:slug` (tarjeta iframe ligera). OG image generada por mod.
- Licencia elegible por el autor (Todos los derechos reservados · Permite reupload con crédito · MIT · GPL-3.0 · Otra) mostrada en el lateral.
- Reportar (T0-21). "Mods similares" (misma categoría o etiquetas + similitud de texto; los co-descargados llegan en T1).
- JSON-LD: `SoftwareApplication` (`applicationCategory: "GameApplication"`, `operatingSystem: "Windows"`, `softwareVersion`, `fileSize`, `downloadUrl`, `author`), `aggregateRating` **solo si hay ≥ 1 reseña**, y `BreadcrumbList`. `canonical` al slug limpio.
- Mod inexistente → 404 real. `removed` → 410.

**Datos**: `mods.license`, `source_url`, `support_links jsonb`, `video_url`. `mod_images.position`, `alt`, `width`, `height`, `thumbhash`, `variants`. `mod_views` (en los agregados diarios).

---

### T0-09 · Dependencias resueltas — **M** [T]
**Historia**: Como jugador, quiero saber qué más necesito y conseguirlo sin buscarlo; como autor de librerías, quiero visibilidad.
**Criterios de aceptación**
- Cada id de `manifest.dependencies` se resuelve contra `mods.mod_id` y se muestra con enlace, estado y versión actual. Los ids desconocidos aparecen como "No disponible en el sitio" y el creador ve un aviso al publicar.
- Las páginas de librería muestran "Usado por N mods" con la lista, y la tarjeta la etiqueta "Librería · necesaria para N mods".
- Al pulsar Descargar en un mod con dependencias aparece una hoja "También necesitas: X, Y" con "Descargar todo" (descargas encadenadas, cada una contada) o "Ya lo tengo".
- Se detectan ciclos y dependencias archivadas o retiradas (aviso).
- La API v2 expone el grafo (base del grafo visual en T1).

**Datos**: `mod_version_dependencies(mod_version_id, dep_mod_key text, dep_mod_id?, kind 'required')` y `mods.dependents_count` (desnormalizado).

---

### T0-10 · Compatibilidad "¿Funciona?" + estado del ecosistema — **L** [T] ⭐
**Historia**: Como jugador, quiero saber si un mod funciona con la versión actual del juego (y en multijugador) antes de descargarlo; como creador, quiero enterarme de que un parche rompió mi mod antes de recibir 20 comentarios.
**Criterios de aceptación**
- **Registro de builds del juego** (admin): etiqueta ("Parche 13"), fecha, id de build de Steam opcional, `is_breaking` y notas. **Estado de RedLoader** por build (funciona / parcial / roto / desconocido) con versión del loader.
- **Reportes**: usuarios con email verificado reportan por versión del mod × build × modo (un jugador · host · cliente · dedicado) con resultado ✓ / ⚠ / ✕, nota opcional (500 caracteres) y, opcionalmente, "otros mods instalados". Un reporte por usuario, versión, build y modo (editable). Tras una descarga logueada, se ofrece "¿Funcionó?" en la siguiente visita y como notificación a las 24 h (desactivable).
- **Agregado** por versión y build, con insignia en tarjetas y página: "✓ Funciona en Parche 13 (32)", "⚠ Mixto", "✕ Roto en Parche 13" o "? Sin datos". Umbrales: ≥ 3 reportes y ≥ 70 % para "funciona"; los reportes del autor y de verificados pesan más.
- **"Posiblemente desactualizado"**: la última versión es anterior a la última build `is_breaking` y no hay reportes positivos posteriores.
- El autor puede marcar "Probado en build X" al publicar, responder a reportes y marcar "arreglado en vX" (notifica a quienes reportaron fallo).
- **Banner global** cuando el admin registra una build `is_breaking`, con enlace a `/estado`. Notificación a los creadores con mods publicados: "Verifica tus mods en el Parche 14" (oportunidad para la insignia "Parche rápido").
- Página `/estado`: historial de builds, estado de RedLoader y RedManager, y los mods más usados con su estado.
- Filtro "Funciona en la build actual" en Explorar y en Cmd+K.

**Datos**: `game_builds(id, label, steam_build_id?, released_at, is_breaking, notes)`, `loader_releases(id, name, version, released_at)`, `ecosystem_status(game_build_id, loader_release_id, status, note, updated_by)`, `compat_reports(id, user_id, mod_version_id, game_build_id, loader_version?, mode, result, note, other_mods?, created_at, updated_at)`, `mod_version_compat(mod_version_id, game_build_id, works, partial, broken, score, computed_status)` y `mods.compat_status_current`.

---

### T0-11 · Reseñas y valoraciones — **M** [T]
**Historia**: Como jugador, quiero opiniones útiles de gente que lo probó; como creador, quiero feedback estructurado y poder responder.
**Criterios de aceptación**
- Una reseña por usuario y mod (editable, con historial). De 1 a 5 estrellas obligatorias, título opcional (80) y cuerpo en markdown-lite (2.000 caracteres). La versión reseñada se autocompleta con la última descargada por el usuario.
- Requisitos: email verificado y cuenta con ≥ 24 h. **"Descarga verificada"** si el usuario descargó estando logueado. Si no, se permite pero sin la etiqueta.
- Votos útil / no útil (no a uno mismo), una respuesta pública del autor y reportes.
- Orden: más útiles (Wilson) / recientes / críticas. Histograma. Media bayesiana para ordenar listados (prior: media del sitio, m = 5).
- Estrellas públicas solo con ≥ 3 reseñas (antes, "Pocas reseñas todavía").
- Si sale una versión nueva, se invita a actualizar la reseña (se muestra la versión en cada reseña).
- Se notifica al autor (nueva reseña) y al reseñador (respuesta del autor).
- JSON-LD `Review` y `AggregateRating` válidos.

**Datos**: `reviews` (sucesora de `ModReview`): `user_id, mod_id, mod_version_id?, rating, title, body_md, is_verified_download, helpful_count, unhelpful_count, status, author_reply_md, author_replied_at, edited_at`. `review_votes(review_id, user_id, value)` y `review_edits`. `mods.rating_avg`, `rating_count` y `rating_bayes` (sustituyen `averageRating`/`reviewsCount`).

---

### T0-12 · Comentarios v2 — **L** [T]
**Historia**: Como jugador, quiero conversar, pedir ayuda y reportar bugs en mi idioma; como autor, quiero ordenar el ruido y destacar las respuestas importantes.
**Criterios de aceptación**
- **Unicode completo** (se acaba el borrado de caracteres). Markdown-lite (negrita, cursiva, código, enlaces `rel="ugc nofollow"`, listas, citas, spoilers) saneado en el servidor y renderizado sin `innerHTML` crudo.
- Hilos: comentario → respuestas (UI de 2 niveles, "respondiendo a @x"). Permalink `#c-<id>`. Paginación ("ver más") y orden top o nuevos.
- Editar (marca "editado" + historial visible para moderación) y borrar (soft: "Comentario eliminado" si tiene respuestas).
- Reacciones con un set curado (👍 ❤️ 😂 🎉 🙏 🔥), un voto por tipo y usuario.
- El autor del mod fija hasta 3 comentarios. Insignias "Autor", "Moderador" y "Verificado".
- @menciones con autocompletado (primero los participantes del hilo, luego búsqueda de handle) y notificación.
- **"Es un reporte de bug"**: casilla + versión. Se muestra con estilo propio y alimenta la bandeja del creador. El autor puede marcarlo "resuelto en vX".
- Imágenes: hasta 2 por comentario, subidas con presigned restringido, convertidas a WebP, sin EXIF y con lightbox.
- Invitados: ven los comentarios y un CTA "Entra para comentar" (sin formulario roto).
- Anti-spam: T0-22. Moderación: ocultar con motivo, bloquear hilo y vetar a un usuario de comentar en un mod o en todo el sitio.
- Migración: 277 comentarios con `replyId` → `parent_id`, entidades `&amp;` desescapadas y `isHidden` → `status`.
- En T1, comentarios nuevos en vivo por SSE.

**Datos**: `comments(id, mod_id, user_id, parent_id?, body_md, body_html_cache?, status 'visible|hidden|pending|deleted', hidden_reason?, is_pinned, is_bug_report, mod_version_id?, bug_resolved_in_version_id?, edited_at, deleted_at, ip_hash)`, `comment_images(comment_id, r2_key, w, h)`, `comment_reactions(comment_id, user_id, kind)`, `comment_edits(comment_id, body_md, edited_at)` y `mods.comments_count` (vía trigger o evento, sin cron).

---

### T0-13 · Cuentas seguras y compatibles — **M** [N]
**Historia**: Como usuario existente, quiero entrar con mi email y contraseña de siempre; como usuario, quiero controlar mi cuenta y mis sesiones.
**Criterios de aceptación**
- Login con email **o** handle. Los hashes existentes (`Bun.password`, argon2id por defecto; verificar si hay bcrypt) se verifican en Node y se re-hashean con los parámetros actuales al entrar.
- Mensaje de error genérico (no revela si el email existe). Rate limit y backoff por IP y cuenta, con Turnstile tras 3 fallos.
- Sesión en cookie `HttpOnly; Secure; SameSite=Lax` (nada de tokens en JS, localStorage ni DOM). "Recordarme" 30 días. Expiración real.
- **Página de sesiones**: dispositivo, navegador, ciudad aproximada y última actividad, con revocar una o todas.
- **Verificación de email**: obligatoria para cuentas nuevas antes de publicar, comentar, reseñar o reportar compatibilidad (pueden navegar y descargar). Las 3.883 cuentas existentes siguen funcionando y ven un banner suave para verificar; se exige al hacer por primera vez una acción de escritura.
- Cambio de email (confirmación al nuevo y aviso al antiguo) y de contraseña (con opción de cerrar las demás sesiones).
- Política de contraseñas nueva: mínimo 10 caracteres y lista de contraseñas filtradas (HIBP con k-anonimato). Sin reglas de símbolos obligatorios. Las contraseñas antiguas siguen valiendo.
- Nombre visible con Unicode (2–32) separado del handle (ASCII, inmutable en T0; el cambio con redirección llega en T1).
- Reset de contraseña igual que hoy, pero con el token hasheado en reposo.

**Datos**: `users` (+ `display_name`, `handle`=slug, `email_verified_at`, `role`, `password_algo`, `settings jsonb`, `deleted_at`, `suspended_until`, `last_seen_at`), `sessions(id, user_id, token_hash, ua, ip_hash, geo, created_at, last_used_at, expires_at, revoked_at)`, `email_verification_tokens`, `auth_events(user_id?, kind, ip_hash, ua, success, created_at)` (sustituye `LoginAttempt`) y `password_reset_tokens.token_hash`.

---

### T0-14 · Privacidad: exportar y borrar cuenta, páginas legales y consentimiento — **M** [N]
**Historia**: Como usuario de la UE, quiero descargar mis datos o borrar mi cuenta sin escribir a nadie, y entender qué se hace con ellos.
**Criterios de aceptación**
- "Exportar mis datos": ZIP con JSON (perfil, sesiones, mods y versiones metadata, comentarios, reseñas, reportes, colecciones, seguimientos y notificaciones), generado de forma asíncrona y enviado por email con un enlace temporal.
- "Borrar cuenta": confirmación con contraseña y 14 días de gracia. Después se anonimizan comentarios y reseñas ("Superviviente eliminado") y se borran los datos personales. Los mods publicados: el usuario elige entre archivarlos o dejarlos publicados sin atribución (política a validar).
- Páginas: Privacidad (real, con responsable y contacto), Términos, Política de contenido (NSFW, reuploads, malware, IA), DMCA / retirada y Cookies.
- Banner de consentimiento con un CMP certificado por Google para EEE, Reino Unido y Suiza (requisito de AdSense), con el estado respetado antes de cargar anuncios o analítica no esencial.

**Datos**: `data_exports(user_id, status, r2_key, expires_at)`, `account_deletions(user_id, requested_at, execute_after, mode)` y `consents` (si el CMP no lo gestiona del lado del cliente).

---

### T0-15 · Perfiles v2 — **M** [T]
**Historia**: Como creador, quiero un perfil que me represente y enseñe mi trabajo; como jugador, quiero conocer a quien hace los mods que uso.
**Criterios de aceptación**
- Elementos de la sección 7.12. Edición en línea por el propietario (avatar y banner con recorte, WebP).
- "Día N en la isla" y la insignia "Superviviente original" para cuentas anteriores a v2.
- Heatmap de 12 meses (lanzamientos, comentarios, reseñas y reportes) accesible (tabla alternativa).
- Pestañas con paginación. Los mods fijados (hasta 3) se eligen por arrastre.
- Estadísticas públicas: descargas totales, número de mods, seguidores, valoración media y reseñas útiles.
- Privacidad configurable (ocultar la actividad).
- `/profile/:slug` → 301 a `/u/:handle`. JSON-LD `ProfilePage` + `Person`. `noindex` para perfiles sin contenido público.

**Datos**: `users.bio_md`, `banner_url`, `banner_preset`, `links jsonb`, `pinned_mod_ids int[]`, `profile_privacy jsonb`. `user_stats(user_id, downloads_total, mods_count, followers_count, following_count, rating_avg, helpful_votes, xp, level, updated_at)` y `user_activity_daily(user_id, day, releases, comments, reviews, reports)`.

---

### T0-16 · Seguir + centro de notificaciones (tiempo real) + emails — **L** [T]
**Historia**: Como jugador, quiero enterarme cuando se actualiza un mod que uso o cuando alguien me responde, sin tener que revisar la web ni recibir spam.
**Criterios de aceptación**
- Seguir mods, que activa la notificación de versiones nuevas (**por defecto al descargar estando logueado se sugiere seguir**), y seguir autores (mods nuevos). Los 234 `ModFavorite` migran a seguimientos de mod.
- Tipos: versión nueva, mod nuevo de un autor seguido, comentario en mi mod, respuesta, mención, reseña en mi mod, respuesta a mi reseña, fallo de compatibilidad agregado en mi mod, cambio de estado (aprobado/rechazado), hito alcanzado, insignia, premio, reporte resuelto y anuncio del sistema.
- Campana con contador de no leídas actualizada por **SSE** (reconexión con `Last-Event-ID` y fallback a polling). Página `/notificaciones` con filtros, "marcar todo como leído" y agrupación ("5 comentarios nuevos en AmmoUi").
- Preferencias por tipo × canal (in-app / email instantáneo en lotes de 10 min / digest diario / digest semanal / desactivado). Valores por defecto sensatos (menciones y respuestas instantáneas; versiones nuevas en digest diario).
- Emails con plantillas renovadas (13 idiomas según el usuario), cabecera `List-Unsubscribe` + desuscripción en 1 clic por tipo.
- Migración de `PendingMention` pendientes.

**Datos**: `follows(user_id, target_type 'mod|user|collection', target_id, notify boolean, created_at)`, `notifications(id, user_id, type, actor_id?, target_type, target_id, data jsonb, group_key, read_at, created_at)`, `notification_preferences(user_id, type, channel_mode)` y `email_outbox(id, user_id, template, payload, status, send_after, sent_at)`. `mods.followers_count` (sustituye `favoritesCount`) y `users.followers_count`.

---

### T0-17 · Mis descargas y actualizaciones disponibles — **S** [T]
**Historia**: Como jugador, quiero ver qué mods descargué y cuáles tienen actualización, porque el sitio no sabe qué tengo instalado.
**Criterios de aceptación**
- `/mis-descargas`: una fila por mod con la última versión descargada, la versión actual y el estado de compatibilidad, y las insignias "Actualización disponible" o "Roto en la build actual".
- Acciones: descargar la actualización, "¿Funcionó?" en línea, seguir y quitar del historial.
- El usuario puede borrar el historial y desactivar el registro (ajustes de privacidad).
- En la home logueada aparece un bloque "N actualizaciones para tus mods".

**Datos**: `download_events.user_id` (T0-02) y la vista `user_latest_downloads(user_id, mod_id, mod_version_id, downloaded_at)`.

---

### T0-18 · Colecciones (modpacks) — **M** [T]
**Historia**: Como jugador que juega con amigos, quiero armar una lista de mods y pasársela a mi grupo; como curador, quiero compartir mis "esenciales".
**Criterios de aceptación**
- Crear, editar y borrar colecciones con nombre, descripción markdown, portada (collage automático o imagen), visibilidad (pública / oculta / privada) y elementos (mods y builds) ordenables, con nota y versión fijada opcional.
- Colección privada por defecto "Guardados" (botón "Guardar" en tarjetas y páginas).
- Página pública: resumen multijugador ("Todos los jugadores necesitan: 4 · Solo host: 2"), dependencias que faltan añadidas automáticamente (con aviso), compatibilidad agregada con la build actual y "Descargar todo" (lista secuencial con checklist).
- Clonar la colección de otro (con atribución) y compartir (OG image con collage).
- Colecciones del staff destacadas en la landing ("Esenciales para empezar", "Para servidores dedicados").
- SEO: se indexan las colecciones públicas con ≥ 3 elementos.

**Datos**: `collections(id, owner_id, slug, name, description_md, visibility, cover_r2_key?, is_staff_pick, forked_from_id?, items_count, followers_count)` y `collection_items(collection_id, target_type, target_id, position, note, pinned_version_id?)`.

---

### T0-19 · Panel de creador: publicación y gestión — **L** [T]
**Historia**: Como creador, quiero publicar y mantener mis mods sin fricción y sin sorpresas de validación al final.
**Criterios de aceptación**
- **Wizard "Nuevo mod"** (autoguardado como borrador):
  1. **Archivo**: drag & drop. El navegador abre el zip (zip.js), valida el manifest contra el schema de RedLoader y muestra id, versión, tipo, plataforma, dependencias (resueltas) y lista de ficheros, con errores y avisos antes de subir. Subida directa a R2 con presigned **restringido** (prefijo por usuario, `Content-Type` y tamaño máximo firmados, 15 min, un solo uso) y barra de progreso.
  2. **Ficha**: nombre (prellenado desde el manifest), descripción corta (200) y editor markdown con barra, vista previa en vivo y límite ampliado a 20.000 caracteres. Categoría, etiquetas, multijugador y dedicado, NSFW, licencia, código fuente y enlaces de apoyo.
  3. **Medios**: miniatura (recorte 16:9) + hasta 10 imágenes (reordenar, texto alternativo, borrar individualmente) + vídeo de YouTube.
  4. **Revisión**: "calidad de ficha" en % (galería, descripción ≥ 300 caracteres, enlaces, plataforma, etiquetas) con consejos y envío.
- **Nueva versión**: subir zip → validación en el cliente y en el servidor (mismo id, semver mayor, dependencias) + changelog markdown con vista previa + canal release/beta + "Probado en la build X" + "Notificar a seguidores" (activado por defecto).
- **Gestión**: listado de mis mods con estado y KPIs, editar la ficha sin re-subir imágenes, retirar versiones, archivar con sucesor, ver el informe de seguridad de cada versión y el motivo si se rechazó (con reenvío).
- **Bandeja**: comentarios, reportes de bug y reseñas de mis mods con respuesta en línea (versión simple; la bandeja avanzada llega en T1).
- Límites: 200 MB por fichero (500 MB para verificados), 10 imágenes de hasta 8 MB, tipos permitidos.
- Los mismos flujos valen para builds (T0-24).

**Datos**: `uploads(id, user_id, purpose, r2_key, content_type, max_bytes, status, expires_at)` para presigned de un solo uso, `mods.draft_data jsonb` y `mod_versions.status` (pending/published/rejected/yanked).

---

### T0-20 · Analíticas del creador — **M** [T]
**Historia**: Como creador, quiero entender quién descarga, de dónde viene y cómo evolucionan mis mods, para decidir en qué invertir mi tiempo.
**Criterios de aceptación**
- Gráficos (Recharts) de la sección 7.16 con rangos y comparación con el periodo anterior. Los días a cero se rellenan. Historia legacy completa (backfill desde 2023).
- Tabla por versión (descargas, únicos, reportes de compatibilidad y rating medio de esa versión).
- Embudo vistas → descargas y seguidores ganados en el periodo.
- Exportación CSV. En la página pública del mod, un gráfico simplificado (rangos 30 días / 1 año / todo).

**Datos**: Agregados diarios de T0-02, más `mod_daily_stats.views`, `followers_delta`, `by_source jsonb` y `by_referrer jsonb`.

---

### T0-21 · Moderación: cola con checks automáticos, reportes, roles y auditoría — **L** [N]
**Historia**: Como moderador (hoy, en la práctica, una sola persona), quiero revisar rápido lo que importa y confiar en las comprobaciones automáticas para lo repetitivo.
**Criterios de aceptación**
- **Roles y permisos**: `user`, `creator` (derivado), `verified_creator` (auto-publica y límite mayor; **migrado desde `isTrusted`**), `moderator` y `admin`. El admin decide qué ex-trusted pasan a moderador.
- **Checks automáticos** (worker, en streaming sin cargar el zip en memoria): integridad del zip, ratio de compresión y número de entradas (zip bomb), rutas (zip slip), manifest presente y válido, id y semver, allowlist de extensiones (`dll, json, png, jpg, bundle, assets, txt, md, cfg, ini, ogg, wav, mp3`), **señalar** `exe, bat, cmd, ps1, vbs, scr, msi, lnk`, tamaño y **VirusTotal** (búsqueda por SHA-256; si no se conoce, se sube el fichero; la API gratuita permite 4 peticiones/min y 500/día, suficiente para el volumen actual).
- **Informe de seguridad** público por versión: "Analizado con N motores: 0 detecciones", con enlace a VirusTotal, fecha y nota sobre falsos positivos frecuentes en DLLs de mods. El moderador puede marcar "falso positivo verificado".
- **Política de publicación**: el primer mod de un creador no verificado pasa por revisión humana. Las versiones siguientes se publican si los checks salen limpios y quedan en post-revisión 72 h. Cualquier detección → retención. Los verificados publican directamente.
- **Cola**: mods y versiones pendientes ordenados por antigüedad y riesgo, con vista previa del manifest, lista de ficheros, diff de ficheros frente a la versión anterior, informe de VirusTotal y acciones (aprobar, rechazar con motivo de plantilla, pedir cambios).
- **Reportes**: desde mod, versión, comentario, reseña, usuario o colección, con motivos (malware, roto, reupload sin permiso, NSFW sin marcar, spam, acoso, ilegal, otro). Cola con SLA, acciones y aviso al reportante cuando se resuelve. Se oculta automáticamente el contenido con ≥ 3 reportes de usuarios distintos hasta que alguien lo revise.
- **Usuarios**: buscar, ver su historial, cambiar rol, suspender temporalmente, banear (con motivo), limitar comentarios y cerrar sesiones.
- **Audit log** inmutable de toda acción de moderación o admin (actor, acción, objetivo, antes/después, motivo y hora), filtrable.
- **Admin**: builds del juego y estado del ecosistema (T0-10), anuncios, destacados y staff picks, categorías y etiquetas, premios (override) y ajustes (webhook de Discord, límites).
- Todas las acciones que mutan usan POST/PATCH/DELETE con CSRF (nunca GET).

**Datos**: `users.role`, `reports(id, reporter_id, target_type, target_id, reason, details, status, assigned_to?, resolution, resolved_at)`, `moderation_actions`/`audit_log(id, actor_id, action, target_type, target_id, before jsonb, after jsonb, reason, created_at)`, `security_scans(id, mod_version_id, sha256, engine 'virustotal', positives, total, permalink, raw jsonb, scanned_at, verdict, override_by?)`, `file_checks(mod_version_id, check, result, details)`, `announcements` y `site_settings(key, value jsonb)`.

---

### T0-22 · Anti-spam y rate limiting de producto — **S** [N]
**Historia**: Como comunidad, quiero que el sitio no se llene de spam ni de bots, sin molestar a la gente normal.
**Criterios de aceptación**
- Cloudflare Turnstile en el registro, en "olvidé mi contraseña", tras fallos de login y en comentarios y reseñas de cuentas con < 24 h.
- Límites por usuario e IP: comentarios 5/min y 50/día, reseñas 10/día, reportes 20/día, subidas 20/día y registro 3/día por IP.
- Cuentas nuevas: los enlaces de su primer comentario quedan en revisión. Lista de emails desechables. Campos honeypot.
- Respuesta 429 con un mensaje amable ("Kelvin necesita un descanso: vuelve a intentarlo en 30 s").

**Datos**: contadores en memoria o Postgres (lo decide el backend) y `users.trust_level` (0–3, derivado de la antigüedad, el email verificado y el historial limpio).

---

### T0-23 · Gamificación v1 — **M** [T]
**Historia**: Como creador, quiero que el esfuerzo de mantener mis mods se vea y se celebre; como jugador, quiero que mis reseñas y reportes cuenten.
**Criterios de aceptación**
- Rangos de creador y XP de comunidad (sección 9.2), calculados cada noche con reglas publicadas en `/logros`.
- Catálogo inicial de insignias T0 (sección 9.3, unas 20), otorgadas automáticamente con notificación y visibles en perfil y tarjetas de autor. Retroactivas para los datos legacy: "Superviviente original 2023/2024/2025" y los hitos de descargas ya alcanzados.
- **Hitos de descargas** por mod (1k, 5k, 10k, 25k, 50k, 100k, 250k y 1M): notificación con celebración (confeti con Motion, respetando reduced motion), tarjeta compartible generada (OG image) y línea de tiempo en la página del mod.
- **"Mod de la semana"** automático, cada lunes: puntuación de tendencia con filtros de calidad (publicado, no roto en la build actual, rating ≥ 3,5 si hay reseñas y sin repetir autor dos semanas seguidas) + override del admin. Se muestra en la landing, en el mod y en el perfil, y lo anuncia el webhook de Discord. **"Selección del staff"** manual.
- Página `/logros`: catálogo de insignias con criterios y porcentaje de usuarios que la tienen.
- Sin tablas de clasificación globales en T0 (llegan con buen gusto en T1).

**Datos**: `badges(id, key, tier, icon, criteria jsonb, is_secret, sort)`, `user_badges(user_id, badge_id, awarded_at, context_type?, context_id?, is_featured)`, `mod_milestones(mod_id, threshold, reached_at)`, `awards(id, kind 'mod_of_week|staff_pick|…', mod_id, period_start, period_end, reason, created_by?)`, `user_stats.xp` y `level` (T0-15) y `xp_events(user_id, kind, points, ref_type, ref_id, created_at)` (auditable y reversible).

---

### T0-24 · Builds v2 — **M** [T]
**Historia**: Como jugador que usa BuildShare, quiero encontrar y valorar builds fácilmente; como constructor, quiero publicarlas sin pasos inútiles.
**Criterios de aceptación**
- Publicar una build solo con el `.json`: el servidor valida la estructura (`Guid, Name, Description, Data.Version, NumberOfElements`), **extrae la miniatura PNG embebida** (`Thumbnail`, base64) como portada (reemplazable) y calcula estadísticas (elementos, estructuras y versión de BuildShare).
- Se corrige el chequeo de tamaño (límite real de 20 MB; los blueprints observados pesan unos 4 MB). Nueva versión de una build (JSON) funciona.
- Crédito "Autor en el blueprint: X" si no coincide con quien la sube, más un campo de "Autor original / enlace" (en T1, reclamar autoría).
- BuildShare aparece automáticamente como dependencia requerida, con instrucciones de importación.
- Comentarios, reseñas, colecciones, seguir y compatibilidad (por versión de BuildShare) como en los mods.
- Categorías de builds consolidadas (21 → unas 10; mapeo legacy).
- Autopublicación mantenida (el JSON no es ejecutable), pero con checks y reportes.

**Datos**: `mods.kind` ('mod'|'library'|'build'), `build_meta(mod_version_id, guid, buildshare_version, elements_count, structures_count, blueprint_author, bbox jsonb?)` y `mods.original_author_name/url`.

---

### T0-25 · KelvinSeek: compatibilidad + límites — **S** [N]
**Historia**: Como jugador con el mod KelvinSeek/KelvinGPT, quiero que Kelvin siga respondiendo; como operador, quiero que no me arruine la factura de la API.
**Criterios de aceptación**
- `/api/kelvinseek/prompt` y `/clear` idénticos en formato (`comando|respuesta`) y en el comportamiento de fallback (el comando más cercano).
- Rate limit por `chat_id` e IP (p. ej. 20/min y 300/día) y **tope global de gasto diario** configurable: al superarlo, se responde en modo fallback sin LLM, con un mensaje en personaje.
- Proveedor y modelo configurables (hoy gpt-4o-mini), con timeout de 8 s. Limpieza de mensajes con más de 30 días. Métricas de uso en admin.
- Alias opcional de `/api/kelvin-gpt/prompt` hacia el mismo handler (revive el bot de Discord).
- Página `/kelvinseek` que presenta el mod (autor: ShokoCC).

**Datos**: `kelvin_messages` (existente, con TTL) y `kelvin_usage_daily(day, requests, tokens_in, tokens_out, cost_usd)`.

---

### T0-26 · SEO/GEO de producto — **M** [N] *(co-propiedad con el track de SEO)*
**Historia**: Como jugador que pregunta a Google o a un asistente de IA "mejores mods de Sons of the Forest para multijugador", quiero que la respuesta salga de sotf-mods.com.
**Criterios de aceptación**
- **Páginas hub** generadas a partir de los datos, con intro editorial breve: por categoría, por etiqueta, "Mejores mods de QoL (2026)", "Mods para multijugador", "Mods para servidores dedicados", "Librerías", builds por categoría, creadores y colecciones.
- Cada página pública lleva `<title>` y meta description únicos, H1, canonical, hreflang para 13 idiomas, JSON-LD adecuado y OG image.
- `sitemap.xml` indexado por tipo, `robots.txt` con `Sitemap:` y decisión explícita sobre crawlers de IA (recomendado permitir `search` y `ai-input`; `ai-train` a decidir por el usuario).
- **GEO**: `llms.txt` y `llms-full.txt`, alternativa Markdown de cada mod (`/mods/:user/:slug.md`) con un bloque de hechos (versión, compatibilidad, multijugador, dependencias e instalación) y FAQ por mod generada de los hechos ("¿Funciona en multijugador?", "¿Cómo se instala?").
- Feeds RSS/Atom: global (nuevos y actualizados), por mod (versiones), por creador y por categoría.
- 404 real y temático, 410 para `removed` y 301 para cambios de slug. Se eliminan las meta keywords spam.

**Datos**: sin tablas nuevas (se genera desde el modelo), más `pages` o markdown editorial en el repositorio.

---

### T0-27 · Tema, i18n (13 idiomas) y accesibilidad — **M** [N]
**Historia**: Como jugador de Polonia, Brasil o China, quiero la interfaz en mi idioma; como usuario con discapacidad visual, quiero poder usar todo el sitio.
**Criterios de aceptación**
- **Idiomas**: en, es, de, fr, it, pt-BR, ru, pl, tr, nl, sv (antes `se`), zh-CN (antes `ch`) + **un 13.º a decidir** (recomendado: ja; alternativas: ko, uk o cs). Catálogo 100 % completo, sin textos hardcodeados. Se respeta la cookie legacy `lang` y se mapean los códigos antiguos.
- Plurales ICU, fechas y números con el locale (se acaba el `es-ES` fijo) y "hace X" relativo.
- El contenido de los usuarios va en su idioma original, con el atributo `lang` declarado por el autor (la traducción automática llega en T2).
- **Tema**: oscuro por defecto, claro y sistema, persistido (cookie + ajuste de cuenta), sin parpadeo (se aplica antes del primer pintado).
- **WCAG 2.2 AA**: contraste, foco visible, orden de tabulación, skip link, formularios etiquetados con errores asociados, `aria-live` en notificaciones y toasts, galería y paleta accesibles, objetivos táctiles de ≥ 24 px y reduced motion. Auditoría con axe en CI sobre las páginas clave.

**Datos**: `users.settings.lang` y `theme`, y `mods.content_lang`.

---

### T0-28 · Novedades del sitio y anuncios — **S** [T]
**Historia**: Como miembro de la comunidad, quiero saber qué cambia en el sitio y en el ecosistema.
**Criterios de aceptación**
- `/novedades` con posts en markdown (SSG), el primero "Bienvenidos a v2" con el changelog. Feed RSS.
- Banner de anuncios (admin): texto i18n, nivel (info/aviso) y fechas, descartable por usuario.

**Datos**: posts en el repositorio y `announcements(id, level, message_i18n jsonb, starts_at, ends_at, dismissible)`.

---

### T0-29 · Publicidad responsable — **S** [N]
**Historia**: Como operador, quiero mantener los ingresos de AdSense sin destrozar la experiencia ni los Core Web Vitals.
**Criterios de aceptación**
- Anuncios solo para invitados (se mantiene la promesa "entra y sin anuncios" como incentivo de registro). Un único loader, cargado tras el consentimiento y en idle, con slots de tamaño reservado (CLS 0).
- **Nunca** en páginas NSFW, en el modal o la hoja de descarga e instalación, en formularios, en el panel ni en moderación. Como mucho 2 slots por página. `ads.txt` se conserva.

**Datos**: `site_settings.ads`.

---

### T0-30 · NSFW con opt-in — **S** [N]
**Historia**: Como usuario adulto, quiero ver contenido NSFW si lo elijo; como sitio, no quiero mostrarlo a quien no lo pidió.
**Criterios de aceptación**
- Oculto por defecto en listados, búsqueda, landing, feeds y sitemaps. Opt-in en ajustes (logueado y con confirmación de mayoría de edad).
- Los enlaces directos muestran un interstitial. Las miniaturas se difuminan fuera de la página del propio mod. Sin OG image explícita. Sin anuncios.
- La moderación puede marcar como NSFW (y el autor recibe un aviso).

**Datos**: `mods.is_nsfw` (existente) y `users.settings.nsfw_opt_in` + `nsfw_confirmed_at`.

---

### T0-31 · Notificador de Discord — **S** [T]
**Historia**: Como miembro del Discord de SOTF, quiero ver en un canal los mods nuevos y las actualizaciones.
**Criterios de aceptación**
- Webhook global configurable (admin) con embeds de mod nuevo, versión nueva (extracto del changelog, imagen y enlace) y "Mod de la semana". Filtro opcional (excluir betas y NSFW siempre excluido).
- Reintentos y registro de fallos.

**Datos**: `site_settings.discord_webhooks` y `outbound_events(id, kind, payload, status, attempts)`.

---

### T0-32 · API pública v2 documentada (solo lectura) — **S** [N]
**Historia**: Como autor de herramientas (RedManager, bots, webs de fans), quiero una API estable y documentada.
**Criterios de aceptación**
- OpenAPI 3.1 para los endpoints de lectura v2 (mods, versiones, dependencias, compatibilidad, búsqueda, creadores, colecciones, builds, estado del ecosistema y feeds), publicada en `/developers` con ejemplos (incluida una guía de "integrar un mod manager").
- CORS abierto para GET y límites de uso documentados. Los endpoints legacy aparecen como *deprecated*, con fecha orientativa de retirada ≥ 12 meses.

**Datos**: —

---

### T0-33 · Guía de instalación + onboarding "Día 1" — **S** [T]
**Historia**: Como jugador nuevo en el modding, quiero que me lleven de la mano desde cero hasta mi primer mod funcionando.
**Criterios de aceptación**
- `/instalar`: pasos ilustrados (RedManager → instalar RedLoader → carpetas `_RedLoader/Mods` y `Libs` → verificar con F1), aviso sobre falsos positivos de antivirus con checksum y VirusTotal, **"¿BepInEx o RedLoader?"**, cómo actualizar y desinstalar, servidores dedicados (enlaces a las guías de los hosts) y problemas frecuentes enlazados a `/estado`. FAQ con JSON-LD `HowTo`/`FAQPage`.
- **Checklist "Día 1 en la isla"** para cuentas nuevas (instalar RedLoader, primera descarga, seguir un mod, reportar si funcionó, crear una colección) con barra de progreso y la insignia "Sobreviviste al día 1" al completarla. Descartable.
- `/loader` → 301 a `/redloader` (página informativa del loader con enlaces oficiales).

**Datos**: `users.onboarding jsonb` (pasos completados).

---

### Resumen T0 (esfuerzo)

| ID | Feature | Esf. | Clase |
|---|---|---|---|
| T0-01 | Compatibilidad legacy (URLs y API) | M | N |
| T0-02 | Descargas directas a R2 + conteo | M | N |
| T0-03 | Estados del mod + migración unapproved | M | N |
| T0-04 | Semver + metadatos del manifest | M | N |
| T0-05 | Landing | M | T |
| T0-06 | Explorar facetado + taxonomía | L | T |
| T0-07 | Cmd+K | M | T |
| T0-08 | Página de mod v2 | L | T |
| T0-09 | Dependencias | M | T |
| T0-10 | Compatibilidad + ecosistema ⭐ | L | T |
| T0-11 | Reseñas | M | T |
| T0-12 | Comentarios v2 | L | T |
| T0-13 | Cuentas seguras | M | N |
| T0-14 | Privacidad, GDPR y legal | M | N |
| T0-15 | Perfiles v2 | M | T |
| T0-16 | Seguir + notificaciones SSE + emails | L | T |
| T0-17 | Mis descargas | S | T |
| T0-18 | Colecciones | M | T |
| T0-19 | Panel de creador (publicación) | L | T |
| T0-20 | Analíticas del creador | M | T |
| T0-21 | Moderación + seguridad | L | N |
| T0-22 | Anti-spam | S | N |
| T0-23 | Gamificación v1 | M | T |
| T0-24 | Builds v2 | M | T |
| T0-25 | KelvinSeek con límites | S | N |
| T0-26 | SEO/GEO de producto | M | N |
| T0-27 | Tema, i18n y a11y | M | N |
| T0-28 | Novedades y anuncios | S | T |
| T0-29 | Publicidad responsable | S | N |
| T0-30 | NSFW opt-in | S | N |
| T0-31 | Notificador de Discord | S | T |
| T0-32 | API v2 documentada | S | N |
| T0-33 | Instalación + onboarding | S | T |

Total: 7 L + 17 M + 9 S ≈ **150–180 días-dev en bruto**. La mayoría son paralelizables por área (público SSG, SPA del panel, backend y moderación). **Si hay que recortar**, este es el orden recomendado para pasar cosas a T1 sin perder la sensación de v2: T0-31 → T0-17 → la parte de colecciones del staff de T0-18 → la profundidad de T0-20 (referrers) → las estadísticas de blueprint de T0-24 → la parte de hitos de T0-23. **Nunca se recortan** T0-01/02/03/04/10/13/21 (sin ellos no hay lanzamiento seguro ni v2 con sentido).

---

## 9. Gamificación (diseño)

### 9.1 Principios
1. **Premiar calidad y ayuda, no volumen**: nada de puntos por subir versiones o por comentar; sí por mantener compatibilidad, recibir reseñas útiles o aportar reportes que se confirman.
2. **Transparencia**: reglas públicas en `/logros`. XP auditable (`xp_events`) y reversible si hay abuso.
3. **Buen gusto**: insignias discretas; celebraciones que se pueden compartir pero no son obligatorias; sin notificaciones manipuladoras; sin rankings que humillen; opt-out de clasificaciones.
4. **Temática SOTF sin IP ajena**: nombres y arte propios inspirados en la supervivencia en la isla.
5. **Anti-abuso**: descargas deduplicadas, no contar las propias, cuentas nuevas con peso bajo, sin votos cruzados de un mismo hash de IP y revisión de picos anómalos.

### 9.2 Progresión
**Rangos de creador** (según una *reputación de creador* calculada cada noche):
- **Fórmula**: `log10(descargas únicas acumuladas) + valoración bayesiana + % de compatibilidad positiva en la build actual + mantenimiento (versiones publicadas dentro de los 14 días posteriores a una build is_breaking) + seguidores`.

| Nivel | Rango | Referencia orientativa |
|---|---|---|
| 1 | Náufrago | primer mod publicado |
| 2 | Explorador | |
| 3 | Recolector | |
| 4 | Artesano | |
| 5 | Constructor | |
| 6 | Superviviente | |
| 7 | Veterano de la isla | |
| 8 | Leyenda de la isla | top ~1 %, p. ej. los autores de Axel's Mod Menu o BuildShare |

**Comunidad (jugadores)**: *XP de ayuda* por reseñas marcadas útiles, reportes de compatibilidad (con bonus si coinciden con el consenso o los confirma el autor), bugs marcados como resueltos por el autor, colecciones seguidas y respuestas fijadas. Niveles discretos, con un contador visible en el perfil ("Ayuda: 340").

**"Día N en la isla"**: días desde el registro. Pura identidad, sin puntos.

### 9.3 Catálogo de insignias (T0 salvo indicación)

| Insignia | Criterio | Grupo |
|---|---|---|
| **Superviviente original 2023 / 2024 / 2025 / 2026** | Cuenta creada ese año, antes de v2 | Legado (retroactiva) |
| **Caída del helicóptero** | Primer mod publicado | Creación |
| **Primer refugio** | Primera build publicada | Creación |
| **Cien / Mil / Diez mil / Cien mil troncos** | 100 / 1k / 10k / 100k descargas acumuladas como creador | Hitos |
| **Pilar de la isla** | Una librería requerida por ≥ 3 mods de otros autores | Creación |
| **Parche rápido** | Versión compatible publicada ≤ 7 días después de una build `is_breaking` | Mantenimiento |
| **Siempre operativo** | Mod con estado "funciona" en las 3 últimas builds | Mantenimiento (T1) |
| **Confianza de Virginia** | Mod con ≥ 4,5 de media y ≥ 20 reseñas | Calidad |
| **Amigo de Kelvin** | 25 reportes de compatibilidad | Comunidad |
| **Cazador de bugs** | 5 reportes de bug marcados como resueltos por los autores | Comunidad |
| **Voz de la isla** | 50 votos de "útil" en tus reseñas | Comunidad |
| **Cartógrafo** | Colección pública con ≥ 10 seguidores | Comunidad |
| **Sobreviviste al día 1** | Completar el onboarding | Exploración |
| **Mod de la semana / Mod del mes** | Premio | Premios (mes en T1) |
| **Selección del staff** | Premio editorial | Premios |
| **Creador verificado / Moderador / Traductor** | Rol o contribución | Roles |
| **Invierno en la isla 2026** | Participar en el evento estacional | Eventos (T1) |
| **Jam de la isla (participante / ganador)** | Game jam | Eventos (T2) |

### 9.4 Premios y celebraciones
- **Mod de la semana** (T0), **Mod del mes** por voto comunitario entre los 4 semanales (T1) y **Premios de la isla** anuales por categorías (T2).
- **Hitos**: notificación con celebración, tarjeta compartible, marca en la línea de tiempo del mod y post automático en Discord para hitos ≥ 10k.
- **Temporadas** (T1): el sitio adopta sutilmente la estación real (el juego tiene primavera, verano, otoño e invierno). En diciembre, "Invierno en la isla" (nieve opcional + evento con insignia).

### 9.5 Clasificaciones con buen gusto (T1)
"Creadores del mes" (top 10 por reputación ganada en el mes, no acumulada), "Nuevos talentos" (primer mod en los últimos 90 días) y "Los más útiles" (reseñadores y reportadores). Siempre mensuales y con opt-out. Sin ranking global "all-time" de usuarios.

### 9.6 Rachas (T2, con cautela)
Solo para conductas sanas: "racha de mantenimiento" (el mod se mantiene compatible en builds consecutivas). **No** habrá rachas de actividad diaria (incentivan spam y agotamiento).

---

## 10. Priorización completa

### T0 — imprescindible para el lanzamiento de v2
Ver la sección 8 (T0-01…T0-33).

### T1 — vuelta rápida (0–3 meses tras el lanzamiento)

| ID | Feature | Esf. | Valor |
|---|---|---|---|
| T1-01 | Login con **Discord** OAuth (vincular a cuenta existente por email verificado) | M | La comunidad vive en discord.gg/sotf |
| T1-02 | **2FA TOTP** + códigos de recuperación (obligatorio para moderadores) | M | Seguridad |
| T1-03 | **Deep-link RedManager** (`redmanager://install/<mod_id>`, PR a RedManager con `tauri-plugin-deep-link`) + instalar colecciones | M | "One-click" real, sustituye al OneClick roto |
| T1-04 | **Bundles** pre-generados (zip con dependencias y la estructura de carpetas correcta, regenerados al publicar una dependencia) y almacenados en R2 | M | Instalación manual en un solo paso |
| T1-05 | **Grafo visual de dependencias** | S | Librerías y comprensión |
| T1-06 | **Visor 3D de builds** (three.js con instancing de troncos y piedras según `ProfileID`, órbita y capturas) | L | Diferencial único |
| T1-07 | **"Pregúntale a Kelvin"** en el sitio (búsqueda semántica + LLM con coste acotado y caché) | M | Descubrimiento conversacional y GEO |
| T1-08 | **API keys**, límites por clave, **webhooks por creador** y **publicación vía API / GitHub Action** | M | Creadores avanzados y CI |
| T1-09 | **Badges SVG** (descargas, versión, compatible con parche X) para READMEs | S | Backlinks y viralidad |
| T1-10 | **Clasificaciones mensuales** + Mod del mes con votación | S | Gamificación |
| T1-11 | **Temporadas de la isla** (tema estacional + evento de invierno) | S | Identidad y deleite |
| T1-12 | **Co-autores / equipos** y **transferencia** de mods | M | Mods abandonados que se adoptan |
| T1-13 | **Reclamar autoría** de reuploads y adopción de mods abandonados (con aprobación) | M | Caso "reuploader" y mods de hace más de 2 años |
| T1-14 | **Problemas conocidos** y FAQ del autor por mod | S | Menos comentarios repetidos |
| T1-15 | **Recomendaciones** ("quien descargó X también…") y home personalizada por etiquetas | M | Descubrimiento |
| T1-16 | Comentarios en vivo por SSE y contador de descargas "en vivo" discreto | S | Realtime |
| T1-17 | **Diff de versiones** (ficheros añadidos, borrados y cambiados; el tamaño lo muestra al usuario) | S | Transparencia y seguridad |
| T1-18 | ClamAV propio como segundo motor | S | Seguridad |
| T1-19 | Cambio de handle con redirecciones permanentes | S | Cuentas |
| T1-20 | Página `/estado` con uptime del sitio y la API | S | Operación |
| T1-21 | Analíticas por país y comparativas entre mods propios | S | Creadores |
| T1-22 | Bandeja unificada del creador (comentarios, bugs, reseñas y compatibilidad con estados) | M | Creadores |
| T1-23 | Búsquedas guardadas con alertas ("avísame cuando haya un mod de vehículos compatible") | S | Retención |
| T1-24 | Seguir colecciones (notificación de cambios) | S | Colecciones |

### T2 — más adelante

| ID | Feature | Esf. |
|---|---|---|
| T2-01 | **Jams de modding** y eventos con temática, entregas, votación y premios (y sorteos reales si hay patrocinadores) | L |
| T2-02 | **Tablón de peticiones** de mods (ideas con votos; un creador "adopta" la petición y la cierra al publicar) | M |
| T2-03 | **Traducción automática** de descripciones y changelogs (a demanda y cacheada) | M |
| T2-04 | Steam OpenID ("propietario verificado del juego") y vinculación con GitHub | M |
| T2-05 | Passkeys (WebAuthn) | M |
| T2-06 | Publicaciones programadas | S |
| T2-07 | Resumen con IA de cambios entre versiones y asistente de moderación con IA | M |
| T2-08 | **Mapa de la isla** con la ubicación de las builds (usa `Position` del blueprint; arte propio) | M |
| T2-09 | Directorio de servidores dedicados con su colección requerida | L |
| T2-10 | PWA / modo offline para guías | S |
| T2-11 | Perfil "supporter" (sin anuncios y con cosméticos de perfil) vía Ko-fi o Stripe | M |
| T2-12 | Rachas de mantenimiento (sección 9.6) y Premios de la isla anuales | S |
| T2-13 | Comparador de mods | S |

---

## 11. Requisitos de datos consolidados

**Tablas existentes → cambios**
- `User` → `users`:
  - Se añade: `display_name, handle, email_verified_at, role, bio_md, banner_url, links, settings, pinned_mod_ids, onboarding, trust_level, suspended_until, deleted_at, last_seen_at, password_algo`.
  - Se conservan `password` (hash) y `slug` (= handle).
  - `isTrusted` → `role=verified_creator` (+ `legacy_trusted` para auditar).
- `Token` → **`sessions`** (no se migran los tokens: todos vuelven a iniciar sesión una vez con su contraseña de siempre).
- `PasswordResetToken` → + `token_hash`.
- `LoginAttempt` (vacía) → se sustituye por **`auth_events`**.
- `Mod` → `mods`:
  - Se añade: `status…, kind, platform, dedicated_server, license, support_links, video_url, content_lang, successor_mod_id, original_author_*, followers_count, rating_*, compat_status_current, trending_score, dependents_count`.
  - Sin uso tras la migración: `isApproved`, `isFeatured`, `averageRating`, `reviewsCount` y `latestVersionSize` (se derivan en la vista legacy).
- `ModVersion` → `mod_versions`: + `manifest, semver_*, channel, status, yank_reason, file_size_bytes, sha256, r2_key, file_available, game_version_declared, loader_version_declared, platform, published_at`.
- `ModImage` → `mod_images`: + `position, alt, width, height, thumbhash, variants`.
- `ModDownload` → **`download_events`** (particionada) + agregados diarios. Las 1,98 M de filas se conservan para el backfill y se archivan.
- `ModFavorite` → **`follows`** (target `mod`).
- `ModReview` → **`reviews`** (+ votos y ediciones).
- `Comment` → `comments` (+ reacciones, imágenes y ediciones).
- `PendingMention` → **`notifications`** + `email_outbox`.
- `Tag` → **`tags`** + `mod_tags` (resucitada).
- `Category` → `categories` (nueva taxonomía, con `legacy_slugs`).
- `KelvinGPTMessages` → `kelvin_messages` (TTL) + `kelvin_usage_daily`.

**Tablas nuevas**: `mod_slug_history`, `user_slug_history`, `mod_version_dependencies`, `game_builds`, `loader_releases`, `ecosystem_status`, `compat_reports`, `mod_version_compat`, `review_votes`, `review_edits`, `comment_images`, `comment_reactions`, `comment_edits`, `notification_preferences`, `email_outbox`, `collections`, `collection_items`, `mod_daily_stats`, `version_daily_stats`, `user_activity_daily`, `user_stats`, `uploads`, `reports`, `audit_log`, `security_scans`, `file_checks`, `announcements`, `site_settings`, `badges`, `user_badges`, `xp_events`, `mod_milestones`, `awards`, `build_meta`, `data_exports`, `account_deletions`, `email_verification_tokens`, `search_documents` (o columnas tsvector), `search_queries_log` y `outbound_events`. T1: `oauth_accounts`, `totp_secrets`, `api_keys`, `webhooks`, `mod_members`.

**Extensiones de Postgres**: `pg_trgm` y `unaccent` (búsqueda); particionado nativo para `download_events`.

**Jobs de migración con impacto de producto**
1. Backfill del manifest completo leyendo los 576 zips en streaming, lo que corrige los 19 `type=null`.
2. Tamaño y SHA-256 de todas las versiones y VirusTotal por hash de las versiones `latest`.
3. Agregados diarios desde `ModDownload`.
4. Desescapado de entidades y conversión del HTML legacy de las descripciones a markdown o HTML saneado con allowlist.
5. Mapeo de los 28 mods sin aprobar (anexo A).
6. Recategorización y etiquetado asistidos.
7. Insignias retroactivas e hitos ya alcanzados.
8. Historial de slugs (los actuales, incluidos los raros, quedan como alias permanentes).
9. `ModFavorite` → `follows`.
10. Extracción de miniaturas y estadísticas de las 36 builds.
11. La versión en `files.sotf-mods.com` se marca como no disponible (o se recupera si el usuario conserva el fichero).

---

## 12. Métricas de éxito

| Métrica | Base legacy | Objetivo a 6 meses de v2 |
|---|---|---|
| Descargas exitosas/semana (North Star) | n/d (sin datos de compatibilidad) | Medición establecida y en crecimiento |
| % de mods publicados con estado de compatibilidad en la build actual | 0 % | ≥ 60 % de los top 100 |
| Reseñas por semana | 0 | ≥ 30 |
| Comentarios con Unicode preservado | ~1 % | 100 % |
| Tiempo mediano de revisión de mods | días a años (máx. 889 días) | < 72 h |
| Creadores que publican en 90 días | 17 mods actualizados | +50 % |
| % de mods con ≥ 3 imágenes | 23 % con ≥ 1 | ≥ 50 % |
| Tasa de búsquedas sin resultados | n/d | < 8 % |
| Seguidores / descargadores únicos logueados | 234 seguimientos | ×10 |
| Core Web Vitals (p75 móvil) | Tailwind en runtime + imágenes de 1–3 MB | LCP < 2,0 s, INP < 150 ms, CLS < 0,05 |
| Descargas desde RedManager tras el corte | ≈ igual | Sin caída (verifica T0-01) |

Eventos de producto mínimos: `search`, `filter_apply`, `mod_view`, `download_click`, `download_redirect`, `compat_prompt_shown/answered`, `review_submit`, `comment_submit`, `follow`, `collection_create`, `notification_open`, `signup`, `email_verified`, `mod_publish_step_n`, `version_publish`, `cmdk_open/select`.

---

## 13. Riesgos y mitigaciones (producto)

| Riesgo | Mitigación |
|---|---|
| **RedLoader sin mantenimiento** (última release en 2025-02; issues abiertos de 2026) que deja el ecosistema roto tras un parche | `/estado` + banner + etiquetas de compatibilidad para gestionar expectativas. Considerar apoyar forks comunitarios (hay forks en GitHub) y reflejarlos como `loader_releases`. Mensaje claro "Funciona con RedLoader X". |
| Falsos positivos de VirusTotal en DLLs de mods, que asustan | Presentación matizada del informe, override del moderador ("falso positivo verificado") y explicación en `/instalar`. |
| Carga de moderación (1 persona) | Checks automáticos, autopublicación de verificados, post-revisión de versiones, ocultación automática por reportes y plantillas de motivo. |
| Abuso de la gamificación o de las valoraciones | Dedupe, peso por nivel de confianza, sin XP por volumen, auditoría de `xp_events` y detección de anomalías. |
| Romper RedManager | Contract tests con fixtures reales + QA manual con la última release + caché en el edge. |
| Propiedad intelectual (Endnight) | Identidad propia sin assets del juego, aviso de sitio de fans y política DMCA. |
| AdSense + NSFW o consentimiento | Sin anuncios en NSFW, CMP certificado y un único loader. |
| Alcance T0 grande | Separación N/T, orden de recorte (sección 8) y paralelización por áreas. |

---

## 14. Preguntas abiertas para el usuario

1. **Los 28 mods sin aprobar** (anexo A): ¿los de RegiToXic están ocultos a propósito (quiere tenerlos "unlisted") o es backlog de revisión? ¿Pasamos los "Don't use" o "Blank" a archivados?
2. **Los 14 `isTrusted`**: ¿todos pasan a *creador verificado* (auto-publican) y solo algunos a *moderador*? ¿Cuáles?
3. **Visibilidad de lo no revisado**: ¿de acuerdo con "accesible por enlace y en la pestaña de RedManager solo si pasa los checks automáticos, sin aparecer en explorar"?
4. **13.º idioma**: ¿japonés (recomendado), coreano, ucraniano o checo?
5. **Marca**: ¿se mantiene el nombre "SOTF Mods" con el dominio actual y solo cambia la identidad, o hay nombre nuevo? (Afecta al microcopy y a las insignias).
6. **Reportes de compatibilidad anónimos**: ¿solo logueados (recomendado en T0) o también anónimos con Turnstile y peso bajo?
7. **Discord OAuth**: ¿T1 (propuesto) o lo subimos a T0?
8. **Instalador OneClick**: ¿confirmas retirarlo (está roto y no se enlaza) a favor del deep-link en RedManager? ¿Hay relación con ToniMacaroni para proponerle el PR?
9. **Presupuesto de IA** (KelvinSeek + "Pregúntale a Kelvin"): ¿tope mensual? ¿Mismo proveedor o se abre a otros?
10. **Señales de contenido para IA** en `robots.txt`: ¿permitir `ai-train` o solo `search` + `ai-input`?
11. **Cuentas borradas**: ¿sus mods publicados se archivan o siguen publicados sin atribución?
12. **Monetización futura**: ¿interés en un perfil "supporter" sin anuncios (T2)?

---

## Anexo A · Mods sin aprobar (28) y mapeo propuesto

| Mod | Autor | Descargas | Antigüedad | Propuesta |
|---|---|---|---|---|
| Printable ammo BETA | dreamline | 12.188 | 235 d | `pending_review`, prioridad alta |
| Terrain Master ATV | regitoxic (trusted) | 7.980 | 204 d | Preguntar → `published` o `unlisted` |
| Kelvin Can Attack + Spotlights | regitoxic | 7.524 | 289 d | Preguntar → `published` o `unlisted` |
| Alternate Kelvin and Virginia Outfits | regitoxic | 5.838 | 888 d | Preguntar |
| OldVCEPage(Don't use) | regitoxic | 4.459 | 793 d | `archived` (fichero en el host muerto) |
| Mutant Baby Remover | regitoxic | 4.214 | 699 d | Preguntar |
| Virginia Hug Emote | regitoxic | 3.237 | 274 d | Preguntar |
| Virginia Alternate Hair | regitoxic | 3.143 | 889 d | Preguntar |
| Virginia Golf Cart Passenger | regitoxic | 3.040 | 280 d | Preguntar |
| Decorative Pumpkins | regitoxic | 2.483 | 698 d | Preguntar (se enlaza desde Steam) |
| LITF Improved Kelvin - BETA | cmadeira | 1.630 | 267 d | `pending_review` |
| Stamina Adjuster, Pitch Black Bunkers and Caves, Vampire Survival Challenge, Immersive Companion Injuries (Beta), Toxic Water, Virginia Gift Manager, GPS Remover, Vanilla Armsys, Glider Configurator, Golf Cart Lights Remain On Always, Fly Amanita Super Mushrooms, Coop Server Tools(Beta) | regitoxic | 515–1.451 c/u | 204–625 d | Preguntar |
| Don't use | jakethewolf | 66 | 282 d | `archived` |
| Blank · Don't use(old · Don't usee22 | regitoxic | 1–56 | 263–279 d | `archived` |
| MojaOsada | przemo | 13 | 187 d | `pending_review` (¿build mal clasificada?) |

## Anexo B · Evidencia de clientes externos

- **RedManager** (`src/lib/mods.ts`): `ENDPOINT = "https://api.sotf-mods.com/api/"`, `mods?&approved=${approved}&orderby=${sorting}&page=${page}&nsfw=${nsfw}[&search=]`, `fetch("https://api.sotf-mods.com/api/mods/" + id)`, descarga `https://sotf-mods.com/mods/${mod.user.slug}/${mod.slug}/download/${mod.latestVersion}` e instalación recursiva de `mod.dependencies`. Releases: RedManager 1.1.10 (2025-02-11), RedLoader 0.8.6 (2025-02-26).
- **OneClick** (`app.asar/main.js`): `app.setAsDefaultProtocolClient('sotf-mods-oneclick')`, `getMod()` → `fetch("https://api.sotf-mods.com/api/mods/" + mod_id)` y `downloadUrl = .../mods/${mod.user_slug}/${mod.slug}/download/${mod.latest_version}` (campos inexistentes en la respuesta actual → roto).
- **kelvin-bot** (`src/commands/ask.ts`): `https://api.sotf-mods.com/api/kelvin-gpt/prompt?chat_id=…&context=health:100/100&text=…` (hoy 404).
- **Manifest de RedLoader** (`SonsSdk/ManifestData.cs`): `id, name, author, version, description, gameVersion, loaderVersion, platform (Client|Server|Universal), dependencies[], logColor, url, priority, type (Mod|Library)`. Ejemplo en FrankyModMenu: `"url": "https://sotf-mods.com/mods/franky/frankymodmenu"`.
- **Blueprint de BuildShare** (muestra "MountianHouse", 3,8 MB): claves `Name, Guid, Author, Description, Position, Size, NumberOfElements, Data{Version, Structures[]}, Thumbnail` (PNG base64 de unos 488 KB). 4.125 estructuras y 8.946 elementos con `ProfileID`, `Position`, `Rotation` y `LengthScale` → la previsualización 3D es viable.

## Anexo C · Fuentes web consultadas
- Hilos de Steam (SOTF General Discussions): "redloader broke for me" (…/599642168640936800), "Sons of the Forest 1.0 mods, what are you using?" (…/4347732779398247802), "lack of mods for this game?" (…/598516531140305827), "Mods for Everything" (…/4357871368303555332) y "Mods" (…/4364620643960079374).
- GitHub: ToniMacaroni/RedLoader (releases e issues), ToniMacaroni/RedManager (código, CHANGELOG e issues "Online List Mod Status", "Malicious software detected", "does not show installed NSFW/Unverified mods"), ChoqueCastroLD/kelvin-bot-api y Frankyfunkz/FrankyModMenu.
- Guía "how-to-install-mods-in-sotf" (github.com/modcommunity), que describe BepInEx frente a RedLoader, Thunderstore, Nexus (~226 mods) y la falta de releases de RedLoader desde principios de 2025.
- API pública de Thunderstore (comunidad sons-of-the-forest: 81 paquetes).
- Guías de hosting (BisectHosting, Pingperfect, PingPlayers, Citadel) sobre RedLoader en servidores dedicados.
- PC Gamer / Supercraft / wiki sobre parches de 2026 (juego en mantenimiento con parches ocasionales).
