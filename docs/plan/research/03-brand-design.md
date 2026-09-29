# 03 · Identidad de marca, sistema de diseño y estado del arte

> Research track: **marca + design system + estado del arte de sitios de mods**.
> Fecha: 2026-09-29. Autor: agente de investigación (v2 planning).
> Alcance: moodboard de Sons of the Forest, benchmark de plataformas de mods, 3 direcciones de marca (con recomendación), tokens listos para Tailwind v4, inventario de componentes y wireframes de todas las páginas.
> Todo lo verificable se verificó: contrastes WCAG calculados por script, paleta de gráficos validada con el validador de CVD, fuentes y licencias consultadas en la API de Fontsource, versiones consultadas con `npm view`, logo y hero renderizados para comprobar que funcionan.

Assets de apoyo (borradores, no finales) en `docs/plan/research/assets/03-brand/`:

| Archivo | Qué es |
|---|---|
| `mark-draft.svg` | Borrador del isotipo "Contour Pin" (64×64, SVG puro, 1 KB) |
| `lockup-dark-draft.svg`, `lockup-light-draft.svg` | Isotipo + logotipo "SOTF MODS" (glifos de Big Shoulders Stencil convertidos a trazados, sin dependencia de fuente) |
| `topo-hero-draft.svg` | Fondo topográfico generado por script (8,3 KB sin comprimir, **3,9 KB gzip**) |
| `mock-home-dark.png`, `mock-home-light.png` | Captura del hero y las tarjetas de mods con los tokens reales (render con Chromium headless) |
| `font-specimens.png` | Comparativa de fuentes display y de texto |

---

## 0. TL;DR (decisiones)

1. **Dirección recomendada: "LOCATOR" (Night) + "FIELD GUIDE" (Day).** Tema oscuro por defecto que evoca la noche en el bosque y la pantalla del GPS del juego; tema claro de papel de "guía de campo". Motivos: **curvas de nivel (topografía)**, **pings de localizador**, **planos/blueprints** (solo para Builds) y **sellos de tinta** (logros). Todo en SVG/CSS, sin imágenes pesadas.
2. **Nombre:** se mantiene **SOTF Mods** (sotf-mods.com). Nuevo logotipo "SOTF MODS" en stencil limpio + isotipo **Contour Pin** (un pin de mapa con curvas de nivel que también se lee como un ojo que te observa desde el bosque). Se abandona el logo actual en rojo desgastado, que imita el logo oficial del juego (riesgo de marca).
3. **Color:** primario **Flare `#FF7335`** (bengala / alta visibilidad; se distingue del rojo oficial de SOTF), neutros **Night** con tinte verde bosque, acentos **Signal** (cian de GPS, "en vivo"), **Lichen** (éxito / "funciona"), **Solafite** (dorado: destacados y logros), **Blood** (peligro) y **Blueprint** (Builds). Todos los pares texto/fondo cumplen AA (tabla en §4.1).
4. **Tipografía (auto-hospedada, OFL-1.1, variable):** **Big Shoulders** (display, condensada y estilo "Chicago signage") con *fallback* por glifo a **Sofia Sans Extra Condensed** para cirílico, **Onest** (UI/texto, con cirílico y `tnum`) y **Martian Mono** (lecturas tipo instrumento: versiones, coordenadas, cadenas de dependencias). Coste total de fuentes en la primera carga para usuarios de alfabeto latino: **≈ 95 KB** (3 archivos woff2).
5. **Diferenciación frente a Nexus, Thunderstore, CurseForge y Modrinth:** compatibilidad específica de SOTF como datos de primera clase (build del juego, versión de RedLoader, rol en multijugador, "seguro para quitar de la partida"), **reportes de campo "¿Funciona en el parche actual?"** (estilo ProtonDB), **descargas directas desde R2 sin esperas ni login**, **Kits** (colecciones instalables en un clic), **Builds** con estética de plano, i18n en 12-13 idiomas, CWV 100 y gamificación temática (rangos de superviviente, "Día N en la isla", sellos).
6. **Tokens:** bloque `@theme` completo para Tailwind CSS **4.3.3** en §4.4 (colores semánticos con `light-dark()`, escala tipográfica fluida, radios, sombras, breakpoints, z-index y *motion*).

---

## 1. Moodboard: Sons of the Forest en palabras

### 1.1 Fuentes consultadas y hechos clave

- **Steam:** *"Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends…"*. Pilares: survival horror sin misiones obligatorias, combate contra mutantes "desde casi humanos hasta totalmente alienígenas", construcción y crafteo táctiles (romper palos, cortar troncos con el hacha), **estaciones que cambian el entorno** (salmón en verano, escasez en invierno). Reseñas: *Very Positive* (88 % de unas 118 000). Early access el 2023-02-23 y 1.0 el 2024-02-22. Etiquetas: Survival, Open World, Co-op, Base Building, Horror, Crafting, Atmospheric, Sandbox.
- **Endnight Games** (endnightgames.com): web mínima y oscura con logos grandes, sin eslóganes. *Forest 3* aparece "in development". Tono sobrio.
- **HUD del juego:** limpio y concentrado en la esquina inferior derecha, alrededor de un **minimapa circular**. Barra de salud roja, estamina azul, anillos verdes de sed, hambre y descanso con iconos (gota, muslo de pollo, luna), un copo de nieve para el frío y avisos de interacción en blanco. **Inventario "knolling":** el personaje extiende la mochila y los objetos aparecen ordenados sobre ella. Hay un tapete de crafteo con un engranaje que "se rellena".
- **GPS Tracker / GPS Locator:** dispositivo de mano con mapa de la isla, flecha amarilla del jugador, indicador del norte, **iconos distintos por tipo de lugar** (cuevas, búnkeres), **objetivos de historia en rojo** y localizadores desplegables que se ven en el GPS. La pantalla tiene brillo propio.
- **Guide Book:** manual físico con **pestañas por categoría**, páginas numeradas, construcciones prefabricadas y personalizadas con **diagramas ilustrados**, además de páginas de notas. Es la referencia para "blueprints".
- **Lore (para guiños, no para copiar):** la isla es "Site 2", propiedad de **Puffton Corporation** (Edward Puffton), con búnkeres de lujo, campos de golf (y carritos), una **Golden Cube** de **Solafite** (un mineral dorado que solo existe en la isla) que se activa **cada 8 ciclos lunares** y muta a los humanos, **Hell Caves**, cuevas y la otra empresa, Sahara Therapeutics. Compañeros: **Kelvin** (sordo, recibe órdenes escritas en un bloc) y **Virginia** (mutante de tres brazos). Objetos icónicos: impresora 3D de resina, bengalas, cuerda con tirolina, ala delta, monociclo.

### 1.2 Moodboard (palabras → decisiones)

| Eje | Lo que transmite el juego | Cómo lo traducimos (original, sin assets del juego) |
|---|---|---|
| **Color** | Bosque húmedo de noche, verdes casi negros, niebla; brasas de hoguera; rojo de peligro o sangre; dorado de Solafite; blanco de nieve en invierno; azul frío de cueva. Brillo de pantalla del GPS | Neutros "Night" con tinte verde (nunca negro puro), primario **Flare** naranja de bengala, oro **Solafite** para lo excepcional, cian **Signal** para lo que está "en vivo", rojo **Blood** solo para errores |
| **Texturas** | Corteza, papel del manual, trazos de plano, curvas de nivel del terreno, nieve, humedad | **Curvas de nivel** generadas en SVG (≈4 KB), **retícula de plano** en CSS (`linear-gradient`), **sellos de tinta** en SVG para logros. **Sin** fotos de fondo ni texturas raster |
| **Tipografía** | Rotulación de cajas de suministros y señalética de búnker; manual técnico; lecturas de instrumento | Display **condensada en mayúsculas** (Big Shoulders), texto humanista y claro (Onest), mono de instrumento (Martian Mono) |
| **Iconografía** | Iconos de HUD sencillos y reconocibles; marcadores de GPS; engranaje de crafteo | Lucide (trazo 1,75-2 px, extremos redondeados) + unas 20 piezas propias con la misma retícula: pin topográfico, mochila, plano, tronco, hoguera, cueva, impresora 3D, bengala, fase lunar… |
| **Motivos** | Minimapa circular, pings del localizador, pestañas del manual, estaciones, contador de días, bloc de órdenes | Pin y *ping* (estado en vivo), **pestañas de manual** (navegación de pasos), **estaciones** (skins decorativas por temporada), **"Día N en la isla"** (antigüedad de la cuenta), **paleta de comandos** Cmd+K como "bloc de órdenes" |
| **Tono** | Aislamiento, supervivencia, humor seco, terror sin gore gratuito | Voz de **guardabosques competente**: calmada, práctica, con humor seco en estados vacíos y errores. El miedo se sugiere (dos ojos en la oscuridad en el 404), nunca se muestra con gore |

### 1.3 Guardarraíles de marca registrada y propiedad intelectual (obligatorios)

1. **No** usar logos, key art, capturas ni iconos del juego como elementos de marca del sitio. Las capturas sí pueden aparecer como contenido subido por los creadores de mods.
2. **No** imitar el logotipo oficial (tipografía condensada desgastada en rojo). El **logo actual de sotf-mods.com lo imita**, así que v2 debe retirarlo.
3. **No** reproducir el mapa real de la isla. La isla del hero es una **silueta topográfica inventada**, generada por script.
4. **No** usar nombres de personajes como nombres de producto **del sitio**. El asistente web de IA que se propone en `05-product-features.md` ("Pregúntale a Kelvin") se recomienda llamarlo **"Scout"**. **KelvinSeek** es un mod de terceros (ShokoCC) que consume la API: conserva su nombre y su endpoint (compatibilidad, ver `01-compat-contract.md`); no es marca nuestra. En microcopy se permiten guiños genéricos: "bloc de órdenes", "bengala", "cueva".
5. Aviso en el pie de página y en /about: *"SOTF Mods is an unofficial fan community. Not affiliated with or endorsed by Endnight Games Ltd. 'Sons of the Forest' is a trademark of its owner."* (ES: *"Comunidad de fans no oficial. Sin afiliación ni respaldo de Endnight Games Ltd."*).
6. "SOTF" como abreviatura descriptiva ya forma parte del dominio histórico. Se mantiene, siempre junto a "Mods" y con el aviso anterior.

---

## 2. Estado del arte: plataformas de mods (2025-2026)

### 2.1 Contexto competitivo específico de SOTF

- **Nexus Mods** tiene ≈ 254 mods de SOTF (mezcla de RedLoader y BepInEx). **Thunderstore** tiene 65 paquetes en su comunidad de SOTF (ecosistema BepInEx IL2CPP + r2modman). **sotf-mods.com** tiene 257 mods + 36 builds, con 1,98 M de descargas. Por volumen es comparable a Nexus y es **el único dedicado en exclusiva a SOTF y a RedLoader**.
- Guías de 2026 recomiendan RedLoader (≥ 0.8.6) y advierten de **no mezclar ecosistemas de loader**. Problemas que citan los jugadores: **incertidumbre tras cada parche** ("una página puede estar al día hoy y romperse mañana"), **confusión sobre multijugador** (¿lo necesita solo el host o todos?), **fallos en cascada** al instalar varios mods a la vez y **mods que no se pueden quitar sin afectar la partida guardada**. → Esto define nuestras funcionalidades diferenciales (§2.4).
- El `manifest.json` de RedLoader (`SonsSdk/ManifestData.cs`) define `Id`, `Name`, `Author`, `Version`, `Description`, `GameVersion`, `LoaderVersion`, `Platform` (`Client` | `Server` | `Universal`), `Dependencies[]`, `LogColor` (color hex del mod en la consola), `Url`, `Priority` y `Type` (`Mod` | `Library`). → **El asistente de subida puede leer el zip en el navegador y rellenar el formulario solo**. Además, `LogColor` puede servir como **color de acento de la página del mod** (ajustado a contraste). Es un detalle de marca único.

### 2.2 Benchmark por plataforma

| Plataforma | Mejores patrones UX | Lo que la gente valora | Lo que hacen mal | Lección para SOTF Mods |
|---|---|---|---|---|
| **Modrinth** | Búsqueda rápida con **filtros de exclusión**. **Widget de compatibilidad** (versión del juego, loader y entorno de un vistazo). **Modal de descarga que elige la versión correcta**. Página de versiones rediseñada (jun-2026). **Analíticas renovadas** (may-2026). **Content disclosures** (ago-2026). Passkeys (jun-2026). Multicuenta, bloqueo de usuarios. Organizaciones y colecciones | Limpio, rápido, sin saturación de anuncios, API abierta, código abierto, Modrinth+ (sin anuncios, 50 % para creadores) | La complejidad de Minecraft (matriz loader × versión) abruma. Colas de moderación lentas. Poca editorial y descubrimiento | Copiar el **widget de compatibilidad**, el **modal de descarga inteligente**, los **filtros de exclusión** y la sobriedad visual. Nuestra matriz es mucho más simple (1 juego, 1 loader), así que podemos hacerla **perfecta** |
| **Thunderstore** | Registro tipo npm: **cadena de dependencia** `team-package-version`. Gestor con **instalación en un clic** (protocolo del gestor). **Perfiles y modpacks exportables como código**. Comunidades por juego. Filtro NSFW y "deprecated" | Instalar sin pensar, dependencias automáticas, compartir un perfil con un código | La descripción es solo el README. Descubrimiento pobre. La conversación vive en Discord, fuera del sitio. Ordenar por "última actualización" premia los updates vacíos | **Kits con código compartible**, dependencias resueltas y un "instalar todo". Pero con páginas ricas, reseñas y comentarios **en el sitio** |
| **CurseForge** | App con perfiles y auto-updates. Pestaña *Files* con iconos de loader (jul-2026). Filtros de categoría jerárquicos. **Programa de recompensas** y **"Legends"** (hitos automáticos por descargas de por vida: insignias, certificados, trofeos). ModJams y concursos (el de Hytale, de 100 000 USD, en 2026) | Biblioteca enorme, recompensas para autores, integración con la app | Web lenta y cargada de anuncios, app pesada (Overwolf), API restringida a terceros, páginas saturadas | **Hitos automáticos para creadores** (sin inscribirse) y **concursos/jams** estacionales. Evitar a toda costa los anuncios que degradan la experiencia |
| **Nexus Mods** | Endorsements (solo tras descargar), **colecciones con revisiones**, pestañas Files/Posts/Bugs/Logs, "requirements" y "mods que requieren esto", *tracking* (seguir), Mod of the Month, búsqueda unificada (mods, colecciones, imágenes, vídeos, usuarios) tras el rediseño de 2025 | Catálogo gigante, colecciones instalables, sistema de puntos para donaciones | **Descargas lentas para usuarios gratuitos**, login obligatorio para descargar, cuenta atrás, publicidad agresiva. **Rediseño de 2025 muy criticado:** hilo de feedback con 280 000 vistas y 2 000 comentarios, mayoría negativos: menos densidad, espacio vacío, lentitud, botones frecuentes mal ubicados y sin opción de volver atrás | **Nunca** limitar la descarga, ni exigir login, ni poner cuentas atrás. Un rediseño **no puede sacrificar densidad ni velocidad**: vista compacta opcional, rendimiento medido y conservar los atajos que los usuarios ya conocen |
| **mod.io** | UGC multiplataforma con **navegación dentro del juego** (SDK). **Escaneo automático** y después revisión manual o marcado. Reportes. Dashboard de métricas para creadores (se rediseña en 2026) | Integración nativa en el juego y en consolas | UI web genérica de marca blanca y poca vida comunitaria en la web | Pipeline de moderación en **dos fases (automática + humana)** y dashboard de creador unificado |
| **Steam Workshop** | **Suscribirse = instalar y actualizar automáticamente**. Colecciones con "subscribe to all". Valoraciones con pulgares. "Required items". Notas de cambios | Fricción cero | Búsqueda y filtros pobres. Sin fijar versiones ni volver a una anterior. Las dependencias en cascada son torpes y las colecciones no se actualizan solas. **SOTF no tiene Workshop** | **Deep-link a RedManager + Kits** (T1 en `05-product-features.md`) ocupa el hueco de "suscribirse". Añadir **"seguir mod → aviso de actualización"** |
| **Factorio Mod Portal** | **Integración en el juego** con descarga automática de dependencias. **Formato de changelog estandarizado** (se ve en el juego y en la web). **Tipos de dependencia**: requerida, opcional `?`, opcional oculta `(?)`, incompatible `!`, sin efecto en el orden de carga `~`. Página *Explore* (2024), orden por relevancia | Todo es predecible, rápido y consistente | Aspecto anticuado y pocos medios | Adoptar **tipos de dependencia** (requiere, opcional, **incompatible con**) y **changelog estructurado** por versión |
| **Hytale × CurseForge (2026)** | Alianza oficial desde el primer día. Concurso de 100 000 USD. Revisión de todo lo que se envía | Legitimidad y energía de lanzamiento | Depender de un tercero grande | Un sitio de nicho gana con **eventos propios** (Winter Jam, Build of the Month) |
| *Referencias externas* | **ProtonDB** (reportes de compatibilidad de la comunidad por versión). **Raycast/Linear** (paleta de comandos). **GitHub** (alertas `[!NOTE]` en Markdown, grafo de actividad) | | | **Reportes de campo** "¿funciona en el build X?" y Cmd+K de primer nivel |

### 2.3 Patrones que adoptamos (síntesis)

1. **Cápsula de compatibilidad** en cada tarjeta y en cada página: build del juego, RedLoader mínimo, plataforma, rol multijugador y estado de los reportes.
2. **Descarga inteligente:** el botón principal ofrece la última versión estable compatible, con desplegable de versiones. Enlace directo a `r2.sotf-mods.com` y contador asíncrono (sin proxy).
3. **Filtros facetados con exclusión** (p. ej. "sin Model Swap") y URLs canónicas indexables por categoría.
4. **Kits** (colecciones) con código compartible, revisiones, resumen de compatibilidad y "descargar o instalar todo".
5. **Dependencias tipadas** (requiere, opcional, incompatible) y la lista inversa "requerido por".
6. **Changelog estructurado** por versión, con un "Qué ha cambiado desde tu última descarga".
7. **Hitos automáticos de creador** y **logros de usuario** (sin inscripción).
8. **Moderación en dos fases** con diff entre versiones y plantillas de motivo.
9. **Cmd+K universal** (mods, builds, kits, creadores, páginas, acciones y "Ask Scout").
10. **Vista densa opcional** (lista o compacta) desde el primer día, para no repetir el error de Nexus.

### 2.4 Dónde un sitio pequeño y de un solo juego vence a los grandes

| # | Ventaja | Por qué los grandes no pueden (o no quieren) |
|---|---|---|
| 1 | **Datos de compatibilidad específicos de SOTF** como campos estructurados, no como texto libre | Sus modelos son genéricos para miles de juegos |
| 2 | **Reportes de campo tras cada parche** + **Patch Radar** (hub del día de parche: "el 87 % de los mods top ya están confirmados en 1.0.x") | Requiere conocer el calendario de parches de un solo juego |
| 3 | **Descargas instantáneas**: sin login, sin cuenta atrás, sin límites; CDN R2 directo | Nexus monetiza la velocidad |
| 4 | **Rendimiento extremo** (HTML estático, CWV 100) | Sus webs son apps pesadas con muchos anuncios |
| 5 | **Curación humana total** (≈ 300 elementos): cada mod revisado, sello "Ranger checked" y editorial propia | La escala se lo impide |
| 6 | **Builds (BuildShare)** como tipo de contenido de primera clase, con estética de plano | Nadie más las soporta |
| 7 | **i18n real en 12-13 idiomas** (RU, PT, ES, DE, ZH, TR, PL…) | Nexus y Thunderstore son casi solo en inglés |
| 8 | **GEO:** respuestas estructuradas y citables ("cómo instalar mods en SOTF", "mejores mods de QoL 1.0") | Sus páginas no responden preguntas de un juego concreto |
| 9 | **Comunidad íntima**: perfiles con historia, Discord integrado, jams temáticas | Anonimato a escala |
| 10 | **Instalación en un clic vía deep-link a RedManager + guía de RedLoader** integrada en el recorrido del usuario | Genérico o inexistente |

---

## 3. Direcciones de marca

Las tres mantienen **SOTF Mods** / sotf-mods.com como nombre. Cambian el concepto, el sub-brand (el nombre del lenguaje visual y del lanzamiento) y la ejecución.

### 3.A · "LOCATOR": GPS nocturno y topografía ⭐ recomendada

**Idea:** el sitio es tu **localizador en la isla**. Explorar mods se siente como mirar el GPS de noche: curvas de nivel tenues, pings que marcan lo que está vivo (actualizaciones, descargas, builds nuevas) y una bengala naranja que señala la acción principal. De día (tema claro) el mismo sistema se lee como **guía de campo impresa**: papel hueso, tinta de grafito y curvas azul plano.

- **Sub-brand:** *SOTF Mods 2.0 · Locator*. Tagline EN: **"Mods for the island. Field-tested."**. ES: **"Mods para la isla. Probados en el terreno."**. Alternativas: "Find it. Install it. Survive." / "Encuéntralo. Instálalo. Sobrevive.".
- **Logo (isotipo "Contour Pin")**, construible en SVG (borrador en `assets/03-brand/mark-draft.svg`):
  - `viewBox="0 0 64 64"`. **Pin:** `M32 61 C26.5 53.5 9 41 9 26.5 A23 23 0 1 1 55 26.5 C55 41 37.5 53.5 32 61 Z`, relleno Flare.
  - **Curva exterior:** un contorno orgánico de 8 radios (15-16,5 u) centrado en (32,27), trazo de 3 u en color de fondo (*knock-out*), con un **hueco de etiqueta** de 6 u abajo a la izquierda (`stroke-dasharray="80 6"`), como las curvas índice de los mapas topográficos.
  - **Curva interior:** contorno de radio 8-10 u centrado en (34,25), trazo de 3 u. **Cumbre:** círculo r = 3,2 en (35,24).
  - **Doble lectura intencionada:** cumbre en un mapa y **ojo que te observa desde el bosque**. Es el guiño al terror del juego sin usar nada suyo.
  - **Versión simplificada** para 16-24 px: pin + curva interior + cumbre (sin la curva exterior).
  - **Área de respeto:** 25 % de la altura del isotipo. **Tamaño mínimo:** 16 px (simplificado) y 24 px (completo).
  - **Favicon SVG** con `@media (prefers-color-scheme)` interno. **App icon:** isotipo sobre `#090F0C` con radio del 22 %.
- **Logotipo:** "SOTF MODS" en **Big Shoulders Stencil 800** con los glifos **convertidos a trazados** (no depende de la fuente en runtime). "SOTF" en `fg` y "MODS" en Flare. *Tracking* +1 u. Existe lockup horizontal (isotipo + palabra) y apilado (SOTF / MODS) para espacios cuadrados y OG images. Stencil **limpio** (puentes de plantilla de caja de suministros), **no desgastado** y **naranja, no rojo**: se aleja del logo oficial.
- **Paleta:** ver §4.1 (hex completos y ratios). Núcleo: Night `#090F0C` / `#F5F4EC`, Flare `#FF7335` (oscuro) / `#BD4600` (claro), Signal `#6BCFE0` / `#026572`, Lichen `#87D48A` / `#136C21`, Solafite `#F5D49A` / `#745301`, Blood `#FF6E68` / `#C92F33`, Blueprint `#96C0FE` / `#2257A4`.
- **Tipografía:** Big Shoulders (display) + Onest (UI) + Martian Mono (lecturas). Detalle en §4.2.
- **Iconografía:** Lucide + set propio "Field kit" (§4.5). Estados en vivo con **punto + anillo de ping**.
- **Ilustración y texturas:** curvas de nivel generativas (con semilla por usuario, mod o categoría), retícula de plano en Builds y sellos de tinta en logros. Todo SVG/CSS y < 5 KB por pieza.
- **Motion:** "señales, no espectáculo": pings, barridos de radar al buscar, curvas que se dibujan en los progresos (§4.7).
- **Voz:** guardabosques competente. Microcopy en §4.8.

### 3.B · "FIELD GUIDE": manual de supervivencia y planos

**Idea:** el sitio es **la guía del superviviente**: papel, lápiz rojo, planos azules, pestañas de manual, notas escritas a mano en los márgenes. Claro por defecto. El modo oscuro es **cianotipia** (azul de plano).

- **Sub-brand:** *SOTF Mods · Field Guide*. Tagline: "Every mod, documented." / "Cada mod, documentado.".
- **Logo:** un **libro abierto visto de canto con pestañas** cuya silueta forma una "S", dentro de un sello rectangular de doble filete (como un exlibris). Logotipo en serif editorial con versalitas.
- **Paleta y contraste (calculados):**
  - Claro (papel): fondo `#F3EEE1`, tinta `#1E1B16` (**14,82:1**), secundaria `#5A5247` (**6,63**), blueprint `#1F4FA3` (**6,70**), lápiz rojo `#B3261E` (**5,64**), musgo `#3F6B3A` (**5,37**), filete `#8C8272` (**3,27**, no texto). Botón blueprint con texto blanco **7,76**.
  - Oscuro (cianotipia): fondo `#0E1A2B`, texto `#E8EEF7` (**14,99**), secundaria `#A9B8CC` (**8,67**), líneas `#7FA8E0` (**7,14**), lápiz rojo `#FF8A7A` (**7,63**), musgo `#9BD39A` (**10,14**), filete `#5D7697` (**3,75**).
- **Tipografía:** Literata (display serif con `opsz`, cirílico), Source Sans 3 (UI, cirílico y griego), Caveat (anotaciones a mano, solo decorativo, con cirílico) y JetBrains Mono.
- **Iconografía:** trazo de pluma irregular, cotas y flechas de dibujo técnico.
- **Texturas:** retícula de papel milimetrado en CSS, subrayados "a mano" en SVG.
- **Motion:** paso de página (transición horizontal), trazos que se dibujan.
- **Voz:** instructiva y paciente ("Paso 2: coloca el archivo en `_RedLoader/Mods`.").
- **Pros:** muy legible, excelente para guías y SEO/GEO editorial, y encaja con Builds. **Contras:** menos "juego", menos atmósfera de terror, la estética de papel envejece rápido en dashboards densos y la mayoría de jugadores prefiere modo oscuro.

### 3.C · "SOLAFITE": cueva, cubo dorado y lujo decadente de Puffton

**Idea:** oscuridad de cueva y resplandor dorado del mineral. Materiales de búnker de lujo (hormigón, latón) invadidos por el bosque. Premium y misterioso.

- **Sub-brand:** *SOTF Mods · Solafite*. Tagline: "Rare finds from the island." / "Hallazgos raros de la isla.".
- **Logo:** un **cubo isométrico** con una arista abierta que forma una "S" y un brillo dorado interior (degradado lineal de 2 paradas).
- **Paleta y contraste (calculados):**
  - Oscuro (obsidiana): fondo `#0A0908`, texto `#F2EBDD` (**16,77**), secundaria `#B3A993` (**8,54**), oro `#E9B949` (**10,90**, botón con texto obsidiana también 10,90), cian de cueva `#45D6C1` (**11,03**), peligro `#FF6B6B` (**7,17**), filete `#6E6553` (**3,46**).
  - Claro ("resort"): fondo `#F7F4EE`, texto `#15120D` (**17,02**), secundaria `#5E574B` (**6,50**), oro `#8A6A12` (**4,61**, justo), cueva `#0C6B61` (**5,81**), peligro `#B42318` (**5,99**).
- **Tipografía:** Tektur (display técnica con `wdth`, cirílico), Geist (UI) y Geist Mono.
- **Texturas:** degradados de brillo y facetas geométricas. **Riesgo:** los brillos invitan a efectos pesados (blur, filtros) que penalizan el INP y el pintado.
- **Pros:** distintivo, "premium", muy atractivo en el landing. **Contras:** el oro como primario choca con los estados de aviso. El lore del cubo es spoiler para jugadores nuevos. Se lee más "casino/lujo" que "supervivencia" y el modo claro queda forzado.

### 3.D · Comparativa y recomendación

| Criterio (peso) | A · Locator | B · Field Guide | C · Solafite |
|---|---|---|---|
| Evoca SOTF sin copiar (20 %) | **5**: GPS, bosque de noche, bengala, terror sugerido | 4: manual y planos | 4: lore del cubo (spoiler) |
| Legibilidad en UI densa y dashboards (20 %) | **5** | 4 | 3 |
| Coste en CWV (15 %) | **5**: SVG de 4 KB y 3 fuentes | 4: una fuente más (a mano) | 3: brillos y blur |
| Oscuro + claro dignos (10 %) | **5**: Night / Day nativos | 4: cianotipia correcta | 3: el claro es forzado |
| Distinción frente a la competencia (15 %) | **5**: nadie usa topografía + pings | 4 | 4 |
| Escalabilidad a features (gamificación, Builds, Patch Radar) (10 %) | **5**: pings = en vivo, sellos = logros, planos = Builds | 4 | 3 |
| Riesgo de marca registrada (10 %) | **5** | 5 | 4 |
| **Total ponderado** | **5,0** | 4,1 | 3,4 |

**Recomendación: A · LOCATOR**, absorbiendo lo mejor de B:
- El **tema claro "Day"** es literalmente la guía de campo (papel `#F5F4EC`/`#FCFAF4`, curvas azul plano).
- La **sub-estética Blueprint** (cianotipia + retícula) se usa **solo en Builds** y en el editor de Kits. Así Builds tiene identidad propia dentro del mismo sistema.
- De C nos quedamos con **Solafite** como color **exclusivo de lo excepcional** (Featured, logros, hitos de creador). Así el oro conserva su valor.

Validación visual: `assets/03-brand/mock-home-dark.png` y `mock-home-light.png` (hero + tarjetas renderizados con los tokens y fuentes reales).

---

## 4. Sistema de diseño "Locator" (dirección recomendada)

### 4.1 Color

**Método:** escalas generadas en **OKLCH** (lightness fija por paso y chroma en campana) y convertidas a hex con recorte de gamut. Los contrastes están **calculados con la fórmula WCAG 2.x**, no estimados. La paleta de gráficos está **validada** con el validador de CVD de la skill *dataviz*: separación en protan y deutan, suelo de visión normal y contraste.

#### Escalas base

| Escala | Uso | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **night** (neutro verde-bosque → papel; además 25 = `#FCFAF4` y 975 = `#090F0C`) | fondos, texto, bordes | `#F5F4EC` | `#E7E7DE` | `#D2D4CA` | `#B4B7AE` | `#90968D` | `#656D65` | `#4D554E` | `#38413B` | `#252C27` | `#171E1A` | `#0F1612` |
| **flare** (bengala, primario) | CTA, marca, foco de atención | `#FEF4F1` | `#FEE7DF` | `#FECDBA` | `#FFA37F` | `#FF7335` | `#E75803` | `#BD4600` | `#963601` | `#712701` | `#4D1700` | `#2F0B00` |
| **signal** (cian GPS) | en vivo, info, foco | `#E7FBFF` | `#D0F4FB` | `#A6E6F1` | `#6BCFE0` | `#2DB6CA` | `#059EB1` | `#068090` | `#026572` | `#044B55` | `#003239` | `#001D21` |
| **lichen** (liquen) | éxito, "funciona" | `#EBFCEB` | `#D8F7D8` | `#B5E9B6` | `#87D48A` | `#5EBB64` | `#40A449` | `#258732` | `#136C21` | `#0B5116` | `#03360A` | `#001F03` |
| **solafite** (oro) | featured, logros, aviso | `#FFF6E6` | `#FDEAC9` | `#F5D49A` | `#E4B65C` | `#CF9917` | `#B38309` | `#926A03` | `#745301` | `#573D02` | `#3A2801` | `#221600` |
| **blood** | error, destructivo | `#FFF4F3` | `#FEE7E4` | `#FFCBC5` | `#FFA098` | `#FF6E68` | `#ED4A49` | `#C92F33` | `#A31C22` | `#7C1117` | `#56060B` | `#360003` |
| **blueprint** | Builds, planos | `#F2F7FE` | `#E3EEFE` | `#C3DBFF` | `#96C0FE` | `#66A3FE` | `#498BEB` | `#3270C8` | `#2257A4` | `#16417D` | `#0B2A56` | `#031736` |
| **teal**, **violet**, **pink** | solo gráficos | teal-500 `#05A388` | violet-500 `#9575E2` | violet-600 `#7A5BC0` | pink-500 `#D15D9A` | | | | | | | |

#### Tokens semánticos y contraste verificado

Superficies. **Night (oscuro, por defecto):** `bg #090F0C` · `surface #0F1612` · `raised #171E1A` · `overlay #171E1A` (+ sombra) · `sunken #090F0C` · `border #252C27` (decorativo) · `border-strong #656D65`.
**Day (claro):** `bg #F5F4EC` · `surface #FCFAF4` · `raised #FFFFFF` · `overlay #FFFFFF` · `sunken #F0EFE7` · `border #D2D4CA` (decorativo) · `border-strong #656D65`.

| Token | Night | Ratio bg / surface / raised / sunken | Day | Ratio bg / surface / raised / sunken | Umbral |
|---|---|---|---|---|---|
| `fg` | `#F5F4EC` | 17.54 / 16.64 / 15.39 / 17.54 | `#0F1612` | 16.64 / 17.59 / 18.36 / 15.92 | 4.5 |
| `fg-muted` | `#B4B7AE` | 9.51 / 9.03 / 8.35 / 9.51 | `#4D554E` | 6.99 / 7.38 / 7.71 / 6.68 | 4.5 |
| `fg-subtle` | `#90968D` | 6.39 / 6.06 / 5.60 / 6.39 | `#656D65` | 4.84 / 5.12 / 5.35 / 4.63 | 4.5 |
| `border-strong` (inputs) | `#656D65` | 3.62 / 3.43 / 3.18 / 3.62 | `#656D65` | 4.84 / 5.12 / 5.35 / 4.63 | 3.0 |
| `primary` | `#FF7335` | 7.15 / 6.78 / 6.27 / 7.15 | `#BD4600` | 4.71 / 4.98 / 5.20 / 4.51 | 4.5 |
| `primary-hover` | `#FFA37F` | 9.95 / 9.44 / 8.73 | `#963601` | 6.74 / 7.12 / 7.43 | 4.5 |
| `link` | `#FFA37F` | 9.95 / 9.44 / 8.73 / 9.95 | `#963601` | 6.74 / 7.12 / 7.43 / 6.44 | 4.5 |
| `signal` (info / en vivo) | `#6BCFE0` | 10.71 / 10.16 / 9.40 / 10.71 | `#026572` | 6.13 / 6.48 / 6.76 / 5.86 | 4.5 |
| `success` | `#87D48A` | 10.89 / 10.33 / 9.55 / 10.89 | `#136C21` | 5.96 / 6.30 / 6.57 / 5.70 | 4.5 |
| `warning` | `#E4B65C` | 10.27 / 9.74 / 9.01 / 10.27 | `#745301` | 6.39 / 6.75 / 7.05 / 6.11 | 4.5 |
| `danger` | `#FF6E68` | 7.08 / 6.72 / 6.21 / 7.08 | `#C92F33` | 4.83 / 5.11 / 5.33 / 4.62 | 4.5 |
| `featured` | `#F5D49A` | 13.61 / 12.91 / 11.94 / 13.61 | `#745301` | 6.39 / 6.75 / 7.05 / 6.11 | 4.5 |
| `blueprint` | `#96C0FE` | 10.38 / 9.85 / 9.11 / 10.38 | `#2257A4` | 6.41 / 6.78 / 7.08 / 6.14 | 4.5 |
| `focus` (anillo) | `#6BCFE0` | 10.71 / 10.16 / 9.40 | `#068090` | 4.23 / 4.47 / 4.67 / 4.05 | 3.0 |

**Pares de botón:**
- Primario Night: `#FF7335` con texto `#090F0C` = **7.15** (hover `#FFA37F` = 9.95).
- Primario Day: `#BD4600` con texto `#FFFFFF` = **5.20** (hover `#963601` = 7.43).
- Peligro Night: `#FF6E68` con texto `#090F0C` = **7.08**. Peligro Day: `#C92F33` con texto `#FFFFFF` = **5.33**.
- Signal Night con texto night-975: **10.71**. Solafite-200 con texto night-975: **13.61**.

**Badges suaves** (fondo tintado + texto + borde):
- Night: `{hue}-950` de fondo, `{hue}-200` de texto (≈ **12.5:1** en todas las escalas) y borde `{hue}-800`.
- Day: `{hue}-100` de fondo, `{hue}-800` de texto (**8.3-9.1:1**) y borde `{hue}-200`.

**Reglas:**
- `border` (≈1,35:1) es **solo decorativo** (separadores y bordes de tarjeta). Todo control interactivo usa `border-strong` (≥ 3:1, WCAG 1.4.11).
- En Day, `primary` como texto sobre `sunken` queda en 4,51: se permite, pero no bajar de ahí.
- Logo en Day: el pin usa `flare-500 #E75803` (3,28:1 sobre papel; los logotipos están exentos, pero se mantiene ≥ 3).
- Nunca comunicar estado solo con color: siempre **icono + texto** (✔ Funciona, ⚠ Sin verificar, ✖ Roto).

#### Paleta de gráficos (validada)

Orden fijo, nunca rotado. La serie única usa el slot 1 (Flare).

| Slot | Night (superficie `#0F1612`) | Day (superficie `#FCFAF4`/`#FFFFFF`) |
|---|---|---|
| 1 | flare-500 `#E75803` | flare-500 `#E75803` |
| 2 | blueprint-500 `#498BEB` | blueprint-600 `#3270C8` |
| 3 | teal-500 `#05A388` | teal-500 `#05A388` |
| 4 | solafite-500 `#B38309` | solafite-500 `#B38309` |
| 5 | pink-500 `#D15D9A` | pink-500 `#D15D9A` |
| 6 | lichen-500 `#40A449` | lichen-700 `#136C21` |
| 7 | violet-500 `#9575E2` | violet-600 `#7A5BC0` |
| 8 | blood-500 `#ED4A49` | blood-600 `#C92F33` |

Resultado del validador:
- **Day:** lightness, chroma, CVD (peor par adyacente ΔE 12,2 protan), visión normal (ΔE 18,1) y contraste ≥ 3:1: **todo PASS**, tanto sobre `#FCFAF4` como sobre `#FFFFFF`.
- **Night:** todo PASS sobre `#0F1612` y `#171E1A` (peor CVD ΔE 9,8 deutan; visión normal ΔE 18,1).

Secuencial: flare 100→700 en Day y flare 800→300 en Night. Divergente: blueprint ↔ neutro `night-400` ↔ flare. Estados (reservados, nunca como series): lichen (bien), solafite (aviso), blood (crítico), siempre con icono + etiqueta.

### 4.2 Tipografía

| Rol | Familia (Fontsource) | Ejes | Subsets | Peso woff2 (latin / cirílico) | Licencia |
|---|---|---|---|---|---|
| Display (títulos, cifras grandes, logotipo) | `@fontsource-variable/big-shoulders` 5.3.0 | `wght` 100-900, `opsz` 10-72 | latin, latin-ext, vietnamese | **36,5 KB** / sin cirílico | OFL-1.1 |
| Display, fallback cirílico/griego | `@fontsource-variable/sofia-sans-extra-condensed` 5.3.0 | `wght` 1-1000 | +cyrillic, greek | (no se carga en latín) / **25,3 KB** | OFL-1.1 |
| UI y texto | `@fontsource-variable/onest` 5.3.1 | `wght` 100-900 | latin, latin-ext, cyrillic, math, symbols | **33,8 KB** / 15,9 KB | OFL-1.1 |
| Mono (versiones, dependencias, código, "lecturas") | `@fontsource-variable/martian-mono` 5.3.0 | `wght` 100-800, `wdth` 75-112,5 | latin, cyrillic | **23,6 KB** / 10,6 KB | OFL-1.1 |
| Logotipo | Big Shoulders **Stencil** (`@fontsource-variable/big-shoulders-stencil`) | | | 0 KB: se usa **como trazado SVG**, no como fuente | OFL-1.1 (la OFL permite usar glifos en logos) |
| CJK (zh) | Pila del sistema: `"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Noto Sans SC"` | | | 0 KB | |

Por qué estas y no otras (se comparó un espécimen renderizado, ver `font-specimens.png`):
- **Big Shoulders** (Chicago signage) evoca rotulación de cajas y señalética sin parecerse a la fuente del logo oficial. Es muy compacta, así que los titulares de 100 px caben en móvil.
- **Onest** rinde mejor que Inter, Geist o Geologica en texto pequeño sobre oscuro, trae `tnum` para estadísticas, soporta cirílico y pesa menos que Inter (48 KB).
- **Martian Mono** tiene aire de instrumento y sirve para las "lecturas" del GPS. Es más distintiva que JetBrains Mono.
- **Hallazgo:** los subsets `latin` **no incluyen `≥`** en ninguna de las fuentes probadas. En microcopy se escribe "RedLoader 0.8.6+" o se añade el subset `math` de Onest.

**Estrategia de carga (CWV):**
- `preload` solo de Onest-latin y Big-Shoulders-latin. Martian Mono se carga bajo demanda (`font-display: swap`; aparece en elementos no-LCP).
- Todo con `font-display: swap` + **fallbacks métricamente ajustados** (`size-adjust`, `ascent-override`) generados en el build con **fontaine 1.0.0** o **@capsizecss/metrics 4.3.0**, para CLS = 0.
- `unicode-range` por subset: el cirílico solo se descarga si la página lo contiene.
- `:lang(zh)`: la display pasa a la pila CJK, sin mayúsculas forzadas y con `letter-spacing: 0`.

**Escala tipográfica** (fluida entre 360 y 1440 px de viewport):

| Token | Tamaño | Interlineado | Tracking | Uso |
|---|---|---|---|---|
| `text-2xs` | 0.6875rem (11) | 1rem | +0.04em (mono, mayúsculas) | etiquetas mono, "lecturas" |
| `text-xs` | 0.75rem (12) | 1rem | | metadatos |
| `text-sm` | 0.875rem (14) | 1.375rem | | UI densa, tablas |
| `text-base` | 1rem (16) | 1.625rem | | cuerpo |
| `text-lg` | 1.125rem (18) | 1.75rem | | intro, lead |
| `text-xl` | 1.25rem (20) | 1.75rem | −0.005em | títulos de tarjeta grande |
| `text-2xl` | 1.5rem (24) | 2rem | −0.01em | h3 en prosa |
| `text-display-xs` | clamp(1.5rem → 2rem) | 1 | 0 | títulos de sección pequeños (display, mayúsculas) |
| `text-display-sm` | clamp(2rem → 2.75rem) | 0.95 | 0 | h2 de sección |
| `text-display-md` | clamp(2.5rem → 4rem) | 0.92 | −0.005em | h1 de página interna |
| `text-display-lg` | clamp(3.25rem → 6.5rem) | 0.9 | −0.005em | hero |
| `text-display-xl` | clamp(5rem → 11rem) | 0.85 | −0.01em | 404, cifras monumentales |

Reglas:
- Display **siempre en mayúsculas** y peso 700-800.
- Prosa de usuario (Markdown): h2-h4 en Onest 650, **no** en display, por legibilidad.
- Cifras de estadísticas: `font-variant-numeric: tabular-nums`.
- `text-wrap: balance` en títulos y `pretty` en párrafos.

### 4.3 Espaciado, radios, elevación, layout, z-index

- **Espaciado:** base Tailwind `--spacing: 0.25rem` (4 px). Ritmo de layout: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96. Padding de tarjeta 16 (móvil) / 20 (≥ md). Gap de rejilla 16 / 20 / 24.
- **Radios:** `xs` 4 · `sm` 6 · `md` 10 (controles) · `lg` 14 (tarjetas) · `xl` 20 (diálogos, sheets) · `2xl` 28 (hero cards) · `full` (pills y avatares). **Tag con muesca** (clip-path chaflán de 6 px) solo para "FEATURED" y rangos. Es la etiqueta de caja de suministros.
- **Elevación:** en Night manda el **borde + highlight interior** (`inset 0 1px 0 rgb(255 255 255 / .05)`) sobre la sombra. En Day, sombras suaves tintadas de verde (`rgb(15 22 18 / .08-.16)`). Glows de color solo en el CTA principal y en los pings.
- **Breakpoints:** `xs` 30rem (480), `sm` 40rem (640), `md` 48rem (768), `lg` 64rem (1024), `xl` 80rem (1280), `2xl` 96rem (1536), `3xl` 112rem (1792). Las tarjetas usan **container queries** (`@container`) en lugar de breakpoints de viewport.
- **Contenedores:** `prose` 42rem (≈ 70ch), `content` 80rem, `wide` 96rem.
- **z-index** (tokens CSS, en Tailwind con `z-(--z-modal)`): `base 0` · `raised 10` · `sticky 20` (header, barra de descarga móvil) · `dropdown 30` · `overlay 40` (backdrop) · `drawer 50` · `modal 60` (incluye Cmd+K) · `popover 70` (tooltips) · `toast 80` · `skip-link 100`.
- **Targets táctiles:** mínimo 24×24 px (WCAG 2.5.8) y 44×44 en controles primarios en móvil.

### 4.4 Tokens: bloque para pegar (Tailwind CSS 4.3.3)

> Colores semánticos con `light-dark()` (Baseline 2024). El valor efectivo depende de `color-scheme`: Night por defecto, Day con `data-theme="light"` y sistema con `data-theme="system"`. Las escalas crudas quedan disponibles como utilidades (`bg-flare-400`) para excepciones. Los tokens que Tailwind no tiene como namespace (z-index, duraciones, color de sombra) van en `:root` y se usan con la sintaxis `z-(--z-modal)` / `duration-(--dur-fast)`.
> El mismo archivo lo consumen el **sitio estático** (landing y páginas SEO) y la **consola SPA** (React). Es una sola fuente de verdad, en `packages/ui/tokens.css`.

```css
/* =====================================================================
   SOTF Mods v2 · "Locator" design tokens · Tailwind CSS 4.3.x
   Night (dark) = default · Day (light) = [data-theme="light"]
   ===================================================================== */
@import "tailwindcss";
@plugin "@tailwindcss/typography";

/* Fontsource variable fonts (OFL-1.1). unicode-range => each subset downloads only if used */
@import "@fontsource-variable/onest";                        /* "Onest Variable" */
@import "@fontsource-variable/big-shoulders";                /* "Big Shoulders Variable" */
@import "@fontsource-variable/sofia-sans-extra-condensed";   /* "Sofia Sans Extra Condensed Variable" – Cyrillic/Greek fallback for display */
@import "@fontsource-variable/martian-mono";                 /* "Martian Mono Variable" */

/* ---------- Variants ---------- */
@custom-variant dark {
  &:where([data-theme="dark"], [data-theme="dark"] *) { @slot; }
  @media (prefers-color-scheme: dark) {
    &:where([data-theme="system"], [data-theme="system"] *) { @slot; }
  }
}
@custom-variant light {
  &:where([data-theme="light"], [data-theme="light"] *) { @slot; }
  @media (prefers-color-scheme: light) {
    &:where([data-theme="system"], [data-theme="system"] *) { @slot; }
  }
}
@custom-variant blueprint (&:where([data-surface="blueprint"], [data-surface="blueprint"] *));
@custom-variant winter (&:where([data-season="winter"] *));

@theme {
  /* ---------- Reset default palette: only brand colors exist ---------- */
  --color-*: initial;
  --color-white: #FFFFFF;
  --color-black: #000000;

  /* ---------- Raw scales (OKLCH-generated) ---------- */
  --color-night-25:  #FCFAF4;
  --color-night-50:  #F5F4EC;
  --color-night-100: #E7E7DE;
  --color-night-200: #D2D4CA;
  --color-night-300: #B4B7AE;
  --color-night-400: #90968D;
  --color-night-500: #656D65;
  --color-night-600: #4D554E;
  --color-night-700: #38413B;
  --color-night-800: #252C27;
  --color-night-900: #171E1A;
  --color-night-950: #0F1612;
  --color-night-975: #090F0C;

  --color-flare-50:  #FEF4F1;
  --color-flare-100: #FEE7DF;
  --color-flare-200: #FECDBA;
  --color-flare-300: #FFA37F;
  --color-flare-400: #FF7335;
  --color-flare-500: #E75803;
  --color-flare-600: #BD4600;
  --color-flare-700: #963601;
  --color-flare-800: #712701;
  --color-flare-900: #4D1700;
  --color-flare-950: #2F0B00;

  --color-signal-50:  #E7FBFF;
  --color-signal-100: #D0F4FB;
  --color-signal-200: #A6E6F1;
  --color-signal-300: #6BCFE0;
  --color-signal-400: #2DB6CA;
  --color-signal-500: #059EB1;
  --color-signal-600: #068090;
  --color-signal-700: #026572;
  --color-signal-800: #044B55;
  --color-signal-900: #003239;
  --color-signal-950: #001D21;

  --color-lichen-50:  #EBFCEB;
  --color-lichen-100: #D8F7D8;
  --color-lichen-200: #B5E9B6;
  --color-lichen-300: #87D48A;
  --color-lichen-400: #5EBB64;
  --color-lichen-500: #40A449;
  --color-lichen-600: #258732;
  --color-lichen-700: #136C21;
  --color-lichen-800: #0B5116;
  --color-lichen-900: #03360A;
  --color-lichen-950: #001F03;

  --color-solafite-50:  #FFF6E6;
  --color-solafite-100: #FDEAC9;
  --color-solafite-200: #F5D49A;
  --color-solafite-300: #E4B65C;
  --color-solafite-400: #CF9917;
  --color-solafite-500: #B38309;
  --color-solafite-600: #926A03;
  --color-solafite-700: #745301;
  --color-solafite-800: #573D02;
  --color-solafite-900: #3A2801;
  --color-solafite-950: #221600;

  --color-blood-50:  #FFF4F3;
  --color-blood-100: #FEE7E4;
  --color-blood-200: #FFCBC5;
  --color-blood-300: #FFA098;
  --color-blood-400: #FF6E68;
  --color-blood-500: #ED4A49;
  --color-blood-600: #C92F33;
  --color-blood-700: #A31C22;
  --color-blood-800: #7C1117;
  --color-blood-900: #56060B;
  --color-blood-950: #360003;

  --color-blueprint-50:  #F2F7FE;
  --color-blueprint-100: #E3EEFE;
  --color-blueprint-200: #C3DBFF;
  --color-blueprint-300: #96C0FE;
  --color-blueprint-400: #66A3FE;
  --color-blueprint-500: #498BEB;
  --color-blueprint-600: #3270C8;
  --color-blueprint-700: #2257A4;
  --color-blueprint-800: #16417D;
  --color-blueprint-900: #0B2A56;
  --color-blueprint-950: #031736;

  /* ---------- Semantic tokens: light-dark(DAY, NIGHT) ---------- */
  --color-bg:             light-dark(#F5F4EC, #090F0C);
  --color-surface:        light-dark(#FCFAF4, #0F1612);
  --color-raised:         light-dark(#FFFFFF, #171E1A);
  --color-overlay:        light-dark(#FFFFFF, #171E1A);
  --color-sunken:         light-dark(#F0EFE7, #090F0C);
  --color-border:         light-dark(#D2D4CA, #252C27);   /* decorative only (<3:1) */
  --color-border-strong:  #656D65;                        /* controls: >=3:1 in both themes */

  --color-fg:             light-dark(#0F1612, #F5F4EC);
  --color-fg-muted:       light-dark(#4D554E, #B4B7AE);
  --color-fg-subtle:      light-dark(#656D65, #90968D);
  --color-fg-inverse:     light-dark(#F5F4EC, #0F1612);

  --color-primary:        light-dark(#BD4600, #FF7335);
  --color-primary-hover:  light-dark(#963601, #FFA37F);
  --color-primary-fg:     light-dark(#FFFFFF, #090F0C);
  --color-primary-soft:   light-dark(#FEE7DF, #2F0B00);
  --color-link:           light-dark(#963601, #FFA37F);

  --color-signal:         light-dark(#026572, #6BCFE0);   /* live / info */
  --color-signal-soft:    light-dark(#D0F4FB, #001D21);
  --color-success:        light-dark(#136C21, #87D48A);
  --color-success-soft:   light-dark(#D8F7D8, #001F03);
  --color-warning:        light-dark(#745301, #E4B65C);
  --color-warning-soft:   light-dark(#FDEAC9, #221600);
  --color-danger:         light-dark(#C92F33, #FF6E68);
  --color-danger-fg:      light-dark(#FFFFFF, #090F0C);
  --color-danger-soft:    light-dark(#FEE7E4, #360003);
  --color-featured:       light-dark(#745301, #F5D49A);   /* Solafite: featured, achievements */
  --color-featured-soft:  light-dark(#FDEAC9, #221600);

  --color-blueprint:          light-dark(#2257A4, #96C0FE);
  --color-blueprint-surface:  light-dark(#F2F7FE, #031736);
  --color-blueprint-grid:     light-dark(rgb(50 112 200 / 0.14), rgb(150 192 254 / 0.12));

  --color-focus:          light-dark(#068090, #6BCFE0);
  --color-selection:      light-dark(#FECDBA, #712701);
  --color-topo:           light-dark(rgb(50 112 200 / 0.16), rgb(245 244 236 / 0.07));

  /* ---------- Chart slots (validated order; never cycle) ---------- */
  --color-chart-1: #E75803;
  --color-chart-2: light-dark(#3270C8, #498BEB);
  --color-chart-3: #05A388;
  --color-chart-4: #B38309;
  --color-chart-5: #D15D9A;
  --color-chart-6: light-dark(#136C21, #40A449);
  --color-chart-7: light-dark(#7A5BC0, #9575E2);
  --color-chart-8: light-dark(#C92F33, #ED4A49);
  --color-chart-grid: light-dark(#E7E7DE, #252C27);

  /* ---------- Typography ---------- */
  --font-sans: "Onest Variable", "Onest Fallback", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
               "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif;
  --font-display: "Big Shoulders Variable", "Sofia Sans Extra Condensed Variable", "Big Shoulders Fallback",
                  "Arial Narrow", "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-mono: "Martian Mono Variable", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  --text-2xs: 0.6875rem;  --text-2xs--line-height: 1rem;
  --text-xs: 0.75rem;     --text-xs--line-height: 1rem;
  --text-sm: 0.875rem;    --text-sm--line-height: 1.375rem;
  --text-base: 1rem;      --text-base--line-height: 1.625rem;
  --text-lg: 1.125rem;    --text-lg--line-height: 1.75rem;
  --text-xl: 1.25rem;     --text-xl--line-height: 1.75rem;  --text-xl--letter-spacing: -0.005em;
  --text-2xl: 1.5rem;     --text-2xl--line-height: 2rem;    --text-2xl--letter-spacing: -0.01em;
  /* fluid display (360px -> 1440px) */
  --text-display-xs: clamp(1.5rem, 1.333rem + 0.741vw, 2rem);      --text-display-xs--line-height: 1;
  --text-display-sm: clamp(2rem, 1.75rem + 1.111vw, 2.75rem);      --text-display-sm--line-height: 0.95;
  --text-display-md: clamp(2.5rem, 2rem + 2.222vw, 4rem);          --text-display-md--line-height: 0.92; --text-display-md--letter-spacing: -0.005em;
  --text-display-lg: clamp(3.25rem, 2.167rem + 4.815vw, 6.5rem);   --text-display-lg--line-height: 0.9;  --text-display-lg--letter-spacing: -0.005em;
  --text-display-xl: clamp(5rem, 3rem + 8.889vw, 11rem);           --text-display-xl--line-height: 0.85; --text-display-xl--letter-spacing: -0.01em;

  --font-weight-strong: 650;
  --tracking-label: 0.04em;

  /* ---------- Layout ---------- */
  --breakpoint-xs: 30rem;
  --breakpoint-3xl: 112rem;
  --container-prose: 42rem;
  --container-content: 80rem;
  --container-wide: 96rem;

  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 10px;   /* controls */
  --radius-lg: 14px;   /* cards */
  --radius-xl: 20px;   /* dialogs, sheets */
  --radius-2xl: 28px;  /* hero cards */

  --aspect-cover: 16 / 9;
  --aspect-banner: 4 / 1;
  --aspect-og: 1200 / 630;

  /* ---------- Elevation (color via --elev-color, set per theme below) ---------- */
  --shadow-xs: 0 1px 0 0 var(--elev-color-soft);
  --shadow-sm: 0 1px 2px 0 var(--elev-color-soft);
  --shadow-md: 0 8px 24px -12px var(--elev-color);
  --shadow-lg: 0 24px 48px -16px var(--elev-color);
  --shadow-glow: 0 8px 28px -10px var(--glow-color);
  --inset-shadow-highlight: inset 0 1px 0 0 var(--highlight-color);

  /* ---------- Motion ---------- */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in: cubic-bezier(0.55, 0, 1, 0.45);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-snap: cubic-bezier(0.2, 0.9, 0.1, 1);
  --ease-spring: linear(0, 0.006, 0.025 2.8%, 0.101 6.1%, 0.539 18.9%, 0.721 25.3%, 0.849 31.5%,
                        0.937 38.1%, 0.968 41.8%, 0.991 45.7%, 1.006 50.1%, 1.015 55%, 1.017 63.9%, 1.001 85.9%, 1);

  --animate-ping-locator: ping-locator 2.4s var(--ease-out) infinite;
  --animate-sweep: sweep 1.2s linear infinite;
  --animate-draw: draw 1.2s var(--ease-in-out) both;
  --animate-shimmer: shimmer 1.6s linear infinite;
  --animate-stamp: stamp 480ms var(--ease-spring) both;
  --animate-rise: rise 320ms var(--ease-out) both;
  --animate-blink: blink 7s steps(1, end) infinite;

  @keyframes ping-locator { 0% { transform: scale(1); opacity: .55 } 80%, 100% { transform: scale(2.6); opacity: 0 } }
  @keyframes sweep { to { transform: rotate(1turn) } }
  @keyframes draw { from { stroke-dashoffset: var(--path-length, 1000) } to { stroke-dashoffset: 0 } }
  @keyframes shimmer { from { background-position: 200% 0 } to { background-position: -200% 0 } }
  @keyframes stamp { 0% { transform: scale(1.35) rotate(-10deg); opacity: 0 } 60% { opacity: 1 } 100% { transform: scale(1) rotate(-4deg); opacity: 1 } }
  @keyframes rise { from { transform: translateY(6px); opacity: 0 } to { transform: none; opacity: 1 } }
  @keyframes blink { 0%, 95%, 100% { transform: scaleY(1) } 96%, 98% { transform: scaleY(.1) } }
}

/* ---------- Non-namespace tokens + theme plumbing ---------- */
@layer base {
  :root {
    color-scheme: dark;
    --z-base: 0; --z-raised: 10; --z-sticky: 20; --z-dropdown: 30; --z-overlay: 40;
    --z-drawer: 50; --z-modal: 60; --z-popover: 70; --z-toast: 80; --z-skip: 100;
    --dur-instant: 80ms; --dur-fast: 140ms; --dur-base: 200ms; --dur-slow: 320ms; --dur-slower: 480ms; --dur-hero: 700ms;
    --elev-color:      light-dark(rgb(15 22 18 / 0.16), rgb(0 0 0 / 0.60));
    --elev-color-soft: light-dark(rgb(15 22 18 / 0.08), rgb(0 0 0 / 0.35));
    --glow-color:      light-dark(rgb(189 70 0 / 0.45), rgb(255 115 53 / 0.55));
    --highlight-color: light-dark(rgb(255 255 255 / 0.70), rgb(255 255 255 / 0.05));
    accent-color: var(--color-primary);
  }
  :root[data-theme="light"]  { color-scheme: light; }
  :root[data-theme="system"] { color-scheme: light dark; }

  html { background: var(--color-bg); color: var(--color-fg); font-family: var(--font-sans);
         -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
  ::selection { background: var(--color-selection); color: var(--color-fg); }
  :focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
  h1, h2, h3 { text-wrap: balance; }
  p, li { text-wrap: pretty; }
  :lang(zh) :is(h1, h2, h3, .font-display) { font-family: var(--font-sans); text-transform: none; letter-spacing: 0; }

  @media (prefers-reduced-motion: no-preference) {
    @view-transition { navigation: auto; }   /* static site: cross-document transitions (Chromium/Safari; Firefox degrades gracefully) */
  }
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after { animation-duration: 1ms !important; animation-iteration-count: 1 !important;
                           transition-duration: 1ms !important; scroll-behavior: auto !important; }
  }
}

/* ---------- Brand utilities ---------- */
@utility font-display-caps { font-family: var(--font-display); text-transform: uppercase; font-weight: 800; }
@utility readout { font-family: var(--font-mono); font-size: var(--text-2xs); line-height: 1rem;
                   letter-spacing: var(--tracking-label); text-transform: uppercase; color: var(--color-fg-subtle); }
@utility tag-notch { clip-path: polygon(6px 0, 100% 0, 100% 100%, 0 100%, 0 6px); }
@utility texture-topo {   /* contour texture: 1 shared SVG (~4 KB gz) used as a mask, tinted by token */
  position: relative; isolation: isolate;
  &::before { content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none;
              background: var(--color-topo); mask: url("/brand/topo.svg") center / cover no-repeat; }
}
@utility texture-blueprint {
  background-color: var(--color-blueprint-surface);
  background-image: linear-gradient(var(--color-blueprint-grid) 1px, transparent 1px),
                    linear-gradient(90deg, var(--color-blueprint-grid) 1px, transparent 1px);
  background-size: 24px 24px;
}
@utility skeleton {
  background: linear-gradient(90deg, var(--color-raised) 0%,
              color-mix(in oklab, var(--color-raised), var(--color-fg) 6%) 50%, var(--color-raised) 100%);
  background-size: 200% 100%; animation: var(--animate-shimmer); border-radius: var(--radius-sm);
}
@utility prose-locator {
  --tw-prose-body: var(--color-fg-muted);        --tw-prose-headings: var(--color-fg);
  --tw-prose-lead: var(--color-fg-muted);        --tw-prose-links: var(--color-link);
  --tw-prose-bold: var(--color-fg);              --tw-prose-counters: var(--color-fg-subtle);
  --tw-prose-bullets: var(--color-primary);      --tw-prose-hr: var(--color-border);
  --tw-prose-quotes: var(--color-fg);            --tw-prose-quote-borders: var(--color-primary);
  --tw-prose-captions: var(--color-fg-subtle);   --tw-prose-code: var(--color-fg);
  --tw-prose-pre-code: var(--color-fg);          --tw-prose-pre-bg: var(--color-sunken);
  --tw-prose-th-borders: var(--color-border-strong); --tw-prose-td-borders: var(--color-border);
  --tw-prose-kbd: var(--color-fg);
}
```

Notas de implementación:
- **Verificado:** el bloque compila sin errores con `@tailwindcss/cli` 4.3.3 + `@tailwindcss/typography` 0.5.20 + los 4 paquetes de Fontsource. Se comprobó la salida de `bg-primary/20` (`color-mix` sobre `light-dark()`), `z-(--z-modal)`, las variantes `dark:`/`light:` (incluido el modo `system` vía `@media`), `shadow-md` con `--elev-color`, `@view-transition` y las utilidades de marca. La prueba detectó una colisión (una utilidad `bg-topo` junto al color `--color-topo` genera dos reglas `.bg-topo`), así que las texturas se llaman `texture-*`. **Regla:** no crear utilidades `bg-<x>` si existe `--color-<x>`.
- Se prefirió `light-dark()` a duplicar variables por tema: un único token por color, sin FOUC y con compatibilidad con los modificadores de opacidad de Tailwind (`bg-primary/20` genera `color-mix(...)`). Para evitar el flash de tema, un script inline de 200 bytes en `<head>` fija `data-theme` desde `localStorage` antes del primer pintado.
- Las sombras no llevan `light-dark()` dentro del valor del theme (el parser de sombras de Tailwind reescribe colores). Toman el color de `--elev-color`, que sí usa `light-dark()`.
- Fallbacks métricos `"Onest Fallback"` y `"Big Shoulders Fallback"`: `@font-face { font-family: "Onest Fallback"; src: local("Arial"); size-adjust: …; ascent-override: …; }` generado en el build con **fontaine**. Los números exactos los calcula la herramienta; no deben escribirse a mano.
- **Skins estacionales** (decorativas): `data-season="winter|spring|summer|autumn"` en `<html>` solo cambia `--color-topo` y activa detalles (nieve en diciembre, heredada del sitio legacy, en canvas diferido con `requestIdleCallback`, pausado si la pestaña está oculta y desactivado con *reduced-motion*). **El primario nunca cambia.**
- **Acento por mod** (`LogColor` del manifest): se aplica solo a detalles (borde superior de la cabecera, glow del pin) y se ajusta con `oklch(from <LogColor> clamp(.55, l, .8) c h)` (relative color syntax). Nunca se usa para texto, así que no puede romper el contraste.

### 4.5 Iconografía

- **Base:** `lucide-react` / `lucide` **1.48.0** (ISC). Retícula de 24 px, trazo de **1,75 px** en UI (2 px en ≤ 16 px), extremos y uniones redondeados, `currentColor`. Se importa icono a icono (tree-shaking). En las páginas estáticas los SVG van inline en el build (0 JS).
- **Mapeo de categorías** (nombres verificados en lucide-static 1.48.0): Library → `library-big`, Quality of Life → `wand-sparkles`, Model Swap → `shirt`, Misc → `shapes`, Builds → `drafting-compass` (o el icono propio `blueprint`), Kits → `backpack`, Creadores → `tent-tree`, Install guide → `route`, Moderación → `binoculars`, Notificaciones → `bell-ring`, Buscar → `scan-search`, En vivo → `radar`, Compatibilidad → `badge-check` / `shield-check`, Localizar → `locate-fixed`, Temporada invierno → `snowflake`, Temporada → `leaf`, Noche → `moon-star`.
- **Set propio "Field kit"** (unas 20 piezas con la misma retícula y trazo; SVG sprite de menos de 6 KB):
  - `contour-pin` (marca), `topo-rings`, `blueprint-sheet`, `log`, `campfire`, `lean-to`, `cabin`, `treehouse`, `fortress`, `landmark` (los tiers de creador, §7).
  - `cave-mouth`, `printer-3d-resin`, `flare-gun`, `gps-handheld`, `zipline`.
  - `moon-phase-0…7` (8 fases), `stamp-frame` (marco de sello).
  - `eyes-dark` (dos puntos para 404 y estados vacíos), `works-check` / `works-broken` (reportes de campo).
- **Reglas:** un icono **nunca** va solo como único portador de significado en controles (`aria-label` + tooltip). Los iconos decorativos llevan `aria-hidden="true"`. **Sin iconos de gore**; los mutantes solo se sugieren (ojos).

### 4.6 Ilustración y texturas (ligeras para CWV)

| Pieza | Técnica | Peso | Dónde |
|---|---|---|---|
| **Topografía hero** | 1 SVG de curvas generado por script (ver `topo-hero-draft.svg`), aplicado como `mask` y tintado con `--color-topo` | 3,9 KB gzip, cacheable e inmutable | Hero, cabeceras de sección, 404, auth |
| **Portadas generativas** (mods sin imagen) | SVG determinista a partir de `hash(slug)`: 2-3 "islas" de curvas + color de categoría + iniciales en display | 1-2 KB inline (o prerenderizado a AVIF en el build) | Tarjetas y OG images |
| **Banner de perfil generativo** | Curvas de nivel con semilla = `userId` (**cada superviviente tiene su propio terreno**) + botón "Reroll terrain" en ajustes | ≈ 2 KB | Perfil y tarjeta de creador |
| **Avatares por defecto** | Glifo waypoint con 2 letras sobre un anillo de color derivado del hash | < 1 KB | Toda la app |
| **Retícula de plano** | `linear-gradient` CSS (utilidad `texture-blueprint`) + marcas de esquina y cotas en SVG | 0 KB extra | Builds, editor de Kits |
| **Sellos de tinta** | SVG con borde irregular prediseñado (no `feTurbulence` en runtime, que es caro de pintar) | ≈ 1,5 KB c/u (sprite) | Logros, rangos, "Ranger checked" |
| **Mapa de "knolling"** | Grid CSS con rotaciones de ±1-2° a los iconos del Kit, sobre un "tapete" `surface` con borde punteado | 0 KB extra | Tarjeta y cabecera de Kit |
| **OG images** | Plantilla SVG → PNG en el build (satori/resvg o similar), 1200×630, marca + título + stats | ≈ 40-70 KB por página, fuera de la ruta crítica | SEO y social |

**Prohibido:** vídeo de fondo, fotos de key art, texturas raster de ruido, `filter: blur()` sobre áreas grandes, `backdrop-filter` fuera del header (y en el header solo si no degrada el INP en móviles de gama baja; si lo degrada, fondo opaco al 92 %).

### 4.7 Principios de motion

1. **Señales, no espectáculo.** El movimiento comunica estado: *ping* = en vivo o nuevo, *sweep* (barrido de radar) = buscando, *draw* (curva que se dibuja) = progreso o completado, *stamp* = logro. Nada se mueve "porque sí".
2. **Rápido y físico.** Feedback de UI en ≤ 140 ms (`--dur-fast`). Entradas de paneles en 200-320 ms con `--ease-out`. Salidas un 30 % más rápidas que las entradas. El muelle (`--ease-spring`) se reserva para sellos y toggles.
3. **Solo `transform` y `opacity`** (y `stroke-dashoffset` en SVG pequeños). Nunca animar `width`, `height`, `top` o `box-shadow` grandes, para cuidar el INP y el CLS.
4. **Continuidad espacial.** En las páginas estáticas, **View Transitions entre documentos** (Chromium desde la 126 y Safari desde la 18.2; Firefox no la tiene y degrada sin transición): la portada de la tarjeta se "expande" a la cabecera del mod (`view-transition-name: mod-cover-{id}`). En la SPA, `motion` **13.4.4** con `layoutId` para tabs e indicadores, y gestos (arrastrar el sheet en móvil).
5. **Respeto total a `prefers-reduced-motion`.** Se sustituye por fundidos de ≤ 80 ms o nada. La nieve, los pings infinitos y los shimmer se desactivan.
6. **Nada en bucle infinito en el viewport** salvo 1 ping de "en vivo", y se pausa cuando no es visible (`IntersectionObserver` o `animation-play-state`).
7. **Catálogo:**

| Nombre | Duración / curva | Uso |
|---|---|---|
| `press` | 80 ms, `translateY(1px)` | botones |
| `hover-lift` | 140 ms `--ease-out`, `translateY(-2px)` + cambio de borde | tarjetas |
| `rise` | 320 ms `--ease-out` (escalonado 30 ms, máx. 8 elementos) | entrada de listas **solo en la primera carga** |
| `sheet` | 320 ms `--ease-out` al entrar / 200 ms `--ease-in` al salir | drawers y bottom-sheets |
| `dialog` | 200 ms, `scale(.98) → 1` + fundido | modales y Cmd+K |
| `ping-locator` | 2,4 s en bucle | indicador en vivo y "nuevo" |
| `sweep` | 1,2 s en bucle | carga de búsqueda (anillo de radar de 16 px) |
| `draw` | 1,2 s `--ease-in-out` | subida completada, pasos del wizard, estados vacíos |
| `stamp` | 480 ms `--ease-spring` | logro desbloqueado y "Ranger checked" |
| `count-up` | 600 ms (rAF, `tabular-nums`) | cifras del hero y del dashboard, **solo si están en el viewport** |
| `blink` | 7 s en bucle | ojos del 404 |

### 4.8 Voz, tono y microcopy

**Personalidad:** un **guardabosques veterano**. Sabe lo que hace, habla claro, te ayuda sin sermones y tiene un humor seco que aparece en los márgenes (estados vacíos, 404, carga), nunca en los errores críticos. El terror se sugiere, no se muestra.

**Reglas:**
- Frases cortas con verbo delante ("Descarga", "Instala", "Reporta").
- Se tutea en ES. En EN, *second person*.
- Números concretos ("3 minutos", "12 mods").
- Nada de mayúsculas gritonas en el texto (las mayúsculas son de la tipografía display).
- Sin jerga interna del juego que pueda ser spoiler (cubo, finales).
- Cada error dice **qué pasó y qué hacer**.
- Humor como máximo 1 guiño por pantalla.

| Contexto | EN | ES |
|---|---|---|
| Tagline | Mods for the island. Field-tested. | Mods para la isla. Probados en el terreno. |
| CTA principal hero | Explore mods | Explorar mods |
| CTA secundario | How to install (3 min) | Cómo instalar (3 min) |
| Botón descarga | Download v2.4.1 · 1.2 MB | Descargar v2.4.1 · 1,2 MB |
| Tras descargar | Downloaded. Drop it in `_RedLoader/Mods` and launch the game. | Descargado. Suéltalo en `_RedLoader/Mods` y abre el juego. |
| Compatibilidad OK | Works on 1.0.x — confirmed by 42 survivors | Funciona en 1.0.x — confirmado por 42 supervivientes |
| Sin verificar | Not verified on the latest patch yet. Tried it? Report back. | Aún sin verificar en el último parche. ¿Lo probaste? Cuéntanos. |
| Roto | Reported broken on 1.0.3. The creator has been pinged. | Reportado roto en 1.0.3. Hemos avisado al creador. |
| Multijugador | Host only · Everyone needs it · Solo only | Solo el host · Todos lo necesitan · Solo un jugador |
| Seguro al quitar | Safe to remove mid-save | Se puede quitar sin romper la partida |
| Búsqueda placeholder | Search mods, builds, creators… or ask Scout | Busca mods, builds, creadores… o pregúntale a Scout |
| Búsqueda sin resultados | Nothing on the map for "{q}". Try fewer words or ask Scout. | Nada en el mapa para "{q}". Prueba con menos palabras o pregúntale a Scout. |
| Favoritos vacío | Your backpack is empty. Tap ♥ on a mod to stash it here. | Tu mochila está vacía. Pulsa ♥ en un mod para guardarlo aquí. |
| Notificaciones vacío | All quiet in the woods. | Todo tranquilo en el bosque. |
| Kit vacío | Lay out your first item — add a mod to this kit. | Coloca tu primer objeto: añade un mod a este kit. |
| Subida en revisión | Sent to the Ranger Station. Most reviews take under 48 h. | Enviado al puesto de guardabosques. La mayoría de revisiones tardan menos de 48 h. |
| Aprobado | Approved. Your mod is live on the island. | Aprobado. Tu mod ya está en la isla. |
| Cambios pedidos | A ranger asked for changes: {reason} | Un guardabosques pidió cambios: {reason} |
| Login error | That email and password don't match. Try again or reset your password. | El email y la contraseña no coinciden. Inténtalo de nuevo o restablece tu contraseña. |
| Reset enviado | If an account exists for that email, a reset link is on its way. | Si existe una cuenta con ese email, el enlace va en camino. |
| Registro OK | Day 1 on the island. Welcome, survivor. | Día 1 en la isla. Bienvenido, superviviente. |
| Carga | Checking the map… | Revisando el mapa… |
| Error de red | Lost signal. Retrying… | Sin señal. Reintentando… |
| 404 título | You wandered off the trail. | Te saliste del sendero. |
| 404 texto | This page isn't on our map. Something in the trees is watching — let's get you back. | Esta página no está en nuestro mapa. Algo te observa entre los árboles; volvamos al camino. |
| 500 | Something broke at base camp. We're on it. (Ref: {id}) | Algo se rompió en el campamento. Ya estamos en ello. (Ref: {id}) |
| Logro | Badge unlocked: First Blueprint | Insignia desbloqueada: Primer plano |
| Racha | Day 12 in a row. The fire's still burning. | 12 días seguidos. La hoguera sigue encendida. |
| Aviso de anuncios (invitados) | Ads keep downloads free. Sign in to hide them. | Los anuncios mantienen gratis las descargas. Inicia sesión para ocultarlos. |
| Borrar mod | Type the mod name to delete it forever. Downloads history is kept for stats. | Escribe el nombre del mod para borrarlo para siempre. El historial de descargas se conserva para estadísticas. |

**Vocabulario de producto** (i18n-ready: la clave es fija y la traducción varía):

| Concepto | EN | ES | Nota |
|---|---|---|---|
| Colecciones instalables | **Kits** | **Kits** | Kit de supervivencia. Funciona en todos los idiomas. En SEO: "mod collections (Kits)" |
| Construcciones BuildShare | **Builds** · *Blueprints* | **Builds** · *Planos* | "Builds" ya es un término conocido por la comunidad |
| Dashboard de creador | **Basecamp** | **Campamento** | |
| Moderación | **Ranger Station** | **Puesto de guardabosques** | |
| Notificaciones | **Signals** | **Señales** | En la UI el icono es la campana y la etiqueta es "Notificaciones" para mayor claridad. "Signals" es el nombre de la sección |
| Changelogs | **Field notes** | **Notas de campo** | |
| Reportes de compatibilidad | **Field reports** | **Reportes de campo** | |
| Hub del día de parche | **Patch Radar** | **Radar de parches** | |
| Asistente IA del sitio ("Pregúntale a Kelvin" en 05) | **Scout** | **Scout** | Nombre propio. El mod KelvinSeek de ShokoCC mantiene su nombre |
| Antigüedad | **Day N** | **Día N** | "Day 1,204 on the island" |
| Guía de instalación | **Setup** | **Preparación** | URL según 05 (`/instalar`; `/loader` → `/redloader`) |

### 4.9 Accesibilidad e internacionalización

- **Objetivo WCAG 2.2 AA:** contrastes de §4.1, `focus-visible` siempre visible (anillo Signal de 2 px + offset), targets ≥ 24 px, *skip link*, landmarks, `aria-live` para toasts y contadores, formularios con errores asociados (`aria-describedby`), sin trampas de foco y diálogos con `inert` en el fondo.
- **Teclado de primera clase:** `Ctrl/⌘K` y `/` abren la búsqueda, `?` muestra los atajos, `g e` (Explore), `g b` (Builds), `g k` (Kits), `g d` (Basecamp). En moderación: `j/k`, `a`, `c`, `r`.
- **Idiomas:** los 12 del legacy (en, es, de, fr, it, nl, pl, pt, ru, se→**sv**, tr, ch→**zh-Hans**; se corrigen los códigos ISO) y se deja preparado el 13.º. Hay que diseñar para un **+35 % de expansión** (DE, RU): botones sin ancho fijo, tabs con scroll y truncado con `title`. Números y fechas con `Intl` ("1,98 M", "198万", "1.98M").
- **Sin RTL** por ahora (ningún idioma lo requiere), pero se usan propiedades lógicas (`ms-*`, `pe-*`) para no cerrar la puerta.
- **NSFW:** oculto por defecto para invitados. Portada con `blur` + "Contenido sensible · Mostrar", y preferencia persistente en ajustes.

### 4.10 Presupuesto de rendimiento derivado del diseño (objetivo CWV 100)

| Recurso | Presupuesto (páginas estáticas) |
|---|---|
| HTML inicial | ≤ 35 KB gzip (home ≤ 45 KB) |
| CSS crítico | inline ≤ 14 KB. Resto ≤ 25 KB gzip en un solo archivo inmutable |
| Fuentes | 2 preloads (≈ 70 KB). Total ≤ 100 KB por página en latín |
| JS en páginas estáticas | ≤ 25 KB gzip (islas: Cmd+K lazy, favoritos, contador en vivo). **0 KB** necesarios para leer y descargar |
| Imágenes | Portadas AVIF/WebP en 480 / 960 w (≤ 60 KB por tarjeta), `loading="lazy"` salvo el LCP (`fetchpriority="high"`), `width`/`height` o `aspect-ratio` siempre |
| Texturas | 1 SVG topográfico compartido (≈ 4 KB) |
| Anuncios (solo invitados) | Slots con **altura reservada** (CLS 0), cargados tras el consentimiento + `requestIdleCallback`, **nunca en el primer viewport** ni junto al botón de descarga. Un único loader de AdSense (el legacy lo carga dos veces) |
| LCP objetivo | < 1,2 s en 4G (el LCP será el titular de texto del hero o la portada del mod) |
| INP | < 100 ms: nada de listeners pesados; el filtrado de Explore usa `startTransition` en SPA o formularios GET en estático |
| CLS | 0: fuentes con fallback métrico, slots reservados, skeletons con el mismo tamaño que el contenido |

---

## 5. Inventario de componentes

> Implementación prevista: primitivas accesibles *headless* (en la SPA, **Base UI `@base-ui/react` 1.8.0** o **Radix `radix-ui` 1.6.7**, a decidir en el track de frontend) con estilos propios de Tailwind. En las páginas estáticas, HTML nativo (`<dialog>`, Popover API, `<details>`) y **CSS anchor positioning** (Baseline desde Firefox 147, enero de 2026) para tooltips y menús sin JS. Paleta de comandos: `cmdk` 1.1.1. Toasts: `sonner` 2.0.8. Sheets móviles: `vaul` 1.1.2. Gráficos: `recharts` 3.10.1 (SPA) y SVG generado en el build (estático).

### 5.1 Acciones

| Componente | Variantes | Estados y detalles |
|---|---|---|
| **Button** | `primary` (Flare sólido + `shadow-glow` solo en el CTA principal), `secondary` (raised + `border-strong`), `ghost`, `outline`, `danger`, `link`, `icon` (cuadrado, con `aria-label` y tooltip) | Tamaños `sm` 32 / `md` 40 / `lg` 48 px (en móvil ≥ 44). Hover: color + 140 ms. Active: `translateY(1px)`. `focus-visible`: anillo Signal. `disabled`. `loading`: anillo de radar (`sweep`) que sustituye al icono y mantiene el ancho |
| **DownloadButton** (split) | Principal: "Descargar v2.4.1 · 1,2 MB". Menú: otras versiones (estable, beta, anteriores) con fecha y compatibilidad | Enlace **directo** a `r2.sotf-mods.com` (atributo `download`). Ping de conteo con `navigator.sendBeacon`. Tras el clic, estado "Descargado ✓" + instrucciones de instalación + sugerencia "¿Funcionó? Reporta" a las 24 h |
| **InstallButton** | "Instalar con RedManager" (deep-link `redmanager://install/<mod_id>`, T1) | Si RedManager no responde, lleva a la guía de instalación con contexto. El instalador "OneClick" legacy está roto y se retira (ver 05) |
| **FavoriteToggle** | corazón (mochila) | Optimista, con `aria-pressed` y contador con `tabular-nums`. **Debe ser POST** (el legacy lo hacía con GET) |
| **FollowButton** | seguir mod o creador | "Siguiendo" + menú (avisos de versión o de todo) |
| **ShareMenu** | copiar enlace, Markdown para Discord, código de Kit, QR (móvil) | |

### 5.2 Tarjetas

| Variante | Anatomía | Uso |
|---|---|---|
| **ModCard / grid** (default) | Portada 16:9 (AVIF, lazy) · hasta 2 badges arriba a la izquierda (Featured / New / Updated) · favorito arriba a la derecha · título (1 línea) · autor + categoría · descripción (2 líneas) · pie: descargas (compactas), valoración, versión, **punto de compatibilidad** (● funciona / ◐ sin verificar / ✖ roto) | Explore, home, perfiles |
| **ModCard / row** | Icono 48 · título + descripción de 1 línea + tags · columnas de stats · botón de descarga directa | Vista lista (densa), para no repetir el error de Nexus |
| **ModCard / compact** | Miniatura 40 · título · descargas | Sidebars, "relacionados", "requerido por" |
| **ModCard / feature** | 2 columnas: portada grande + tag "FEATURED" con muesca Solafite + cita del creador + CTA | Hero secundario, Mod of the Month |
| **ModChip** (dependencia) | Pill: icono + nombre + restricción de versión (`≥0.9` en mono) + punto de estado. Variantes `requires`, `optional`, `conflicts` (borde Blood) | Cápsula de compatibilidad y wizard |
| **BuildCard** | Marco de plano: fondo `texture-blueprint`, marcas de esquina, **cota** con el número de elementos ("1 248 piezas"), versión de BuildShare | Builds |
| **KitCard** | "Knolling": 6 iconos de mods ordenados sobre un tapete + nombre + curador + "12 mods · 48 MB" + resumen de compatibilidad | Kits |
| **CreatorCard** | Banner generativo · avatar · nombre + tier (sello) · stats (mods, descargas) · seguir | Home, Explore creadores |
| **StatTile** | Readout mono (etiqueta) + cifra display + delta (▲ 12 % en 7 d, con icono y texto, no solo color) + sparkline opcional | Hero, Basecamp, perfil |
| **Skeletons** | Una por variante, con idéntica geometría. Aparecen solo si la carga pasa de 300 ms | |

Las tarjetas son **container-query aware**: por debajo de 260 px, grid pasa a compact. Hover: elevación de 2 px, borde `border-strong` y *zoom* de portada 1.03 (solo `transform`). El título es el enlace principal y **toda la tarjeta es clicable** mediante un pseudo-elemento, sin anidar enlaces.

### 5.3 Etiquetas y estado

| Componente | Variantes |
|---|---|
| **Badge** | `neutral` (categoría + icono), `signal` (New, en vivo), `success` (Funciona en 1.0.x), `warning` (Sin verificar / Beta), `danger` (Roto / Incompatible), `featured` (Solafite, **tag con muesca**), `blueprint` (Build), `outline-mono` (Client / Server / Universal, `RL 0.9+`) |
| **CompatCapsule** | Fila o `<dl>` con: build del juego · RedLoader mín. · plataforma · rol multijugador · "seguro al quitar" · dependencias · conflictos. Cada ítem lleva icono + texto |
| **FieldReportMeter** | Barra dividida ✔/✖ para el build actual + "42 ✔ · 3 ✖ · Reportar". Tooltip con reportes por build |
| **LiveDot** | Punto Signal + `ping-locator` (se pausa fuera del viewport) |
| **RankStamp** | Sello de tinta con nombre del rango o tier (rotación −4°) |
| **TrustedMark** | `badge-check` Signal + tooltip "Creador de confianza" |
| **Kbd** | Mono `2xs` con borde |

### 5.4 Navegación

- **Header** (sticky, `z-sticky`): logo · Explore · Builds · Kits · Install · Creators · buscador Cmd+K (campo visible en ≥ lg; icono en móvil) · Upload (si hay sesión) · campana de Signals · avatar. Se compacta al hacer scroll (de 64 a 52 px, solo `transform`).
- **MobileTabBar** (< md): Explore · Builds · **Buscar** (centro) · Kits · Tú. Oculta mientras se hace scroll hacia abajo.
- **Tabs**: subrayado con indicador animado (anchor positioning en estático, `layoutId` en SPA). Cada tab tiene **URL propia** (`/mods/{slug}/changelog`). Scroll horizontal con degradado de borde en móvil.
- **Breadcrumbs** (con JSON-LD), **Pagination** (URLs reales `?page=2` + "Cargar más" progresivo), **Stepper** estilo "pestañas de manual" (wizard e install guide), **FilterRail** + **FilterChips** (con exclusión: clic = incluir, ⌥/mantener pulsado = excluir, más botón explícito "Excluir" por accesibilidad), **SortMenu**, **ViewToggle** (grid / lista / compacta), **LanguageSwitcher** (nombres nativos), **ThemeToggle** (Night / Day / Sistema).

### 5.5 Paleta de comandos (Cmd+K), "el bloc de órdenes"

- **Apertura:** `Ctrl/⌘K`, `/` o el campo del header. En móvil, a pantalla completa desde la tab "Buscar".
- **Estructura:** input con *scope chips* (`mods:`, `builds:`, `kits:`, `@creador`, `>` acciones) · grupos: Recientes, Mods, Builds, Kits, Creadores, Páginas (install, FAQ), Acciones (cambiar tema o idioma, subir mod, ir a Basecamp, "modo visión nocturna"), y al final **"Preguntar a Scout: «{q}»"**.
- **Preview** a la derecha en ≥ lg: mini-tarjeta con cápsula de compatibilidad y botón de descarga directa (descargar sin salir de la paleta).
- **Teclas:** ↑↓, Enter abre, `⌘Enter` en pestaña nueva, `Tab` cambia de scope, `⌘D` descarga, Esc cierra.
- **Datos:** en estático, un índice precompilado (≈ 300 mods + builds + kits + creadores, **≈ 40-70 KB gzip**, cargado de forma diferida en el primer foco o *hover* del buscador) con búsqueda difusa local (0 ms de red). En la SPA se usa el endpoint de búsqueda de la API.
- **Visual:** modal de 640 px a un 12 vh del borde superior, `overlay` + `shadow-lg`, `radius-xl`, y un anillo de radar en el input mientras busca. Respuestas de Scout en streaming con **citas enlazadas** a mods o páginas.

### 5.6 Feedback

| Componente | Especificación |
|---|---|
| **Toast** (sonner) | Abajo a la derecha en escritorio y abajo al centro en móvil (por encima de las barras fijas). Tipos: success, info, warning, error, progress (subidas). Acción opcional ("Deshacer"). 5 s (los errores persisten). Pausa en hover. Máx. 3. `aria-live` polite (assertive en error) |
| **Dialog** | `<dialog>` nativo o primitiva *headless*. Tamaños sm 400 / md 560 / lg 720 / full. En < md se convierte en **bottom sheet** (vaul) con asa de arrastre. Los destructivos piden confirmación escribiendo el nombre |
| **Popover / Tooltip / Menu** | Anchor positioning + Popover API en estático. Tooltip de 300 ms de retardo, nunca con información exclusiva |
| **Banner** | Anuncio global (Patch Radar: "Parche 1.0.4 publicado: comprueba tus mods"), mantenimiento e invierno. Descartable y persistente por ID |
| **EmptyState** | Ilustración de línea (≤ 2 KB, curva que se dibuja) + título en display-xs + 1 línea + CTA. Copys en §4.8 |
| **ErrorState** | Icono, qué pasó, qué hacer, "Reintentar" y ID de referencia |
| **ConsentBanner** | CMP compatible con Google (necesario para AdSense en EEE y Reino Unido): barra inferior de marca con "Aceptar", "Rechazar" (mismo peso visual) y "Preferencias". Solo afecta a anuncios y analítica no esencial |
| **AdSlot** | Contenedor con **altura mínima reservada** por formato, etiqueta "Publicidad", borde `border`. Solo para invitados. Nunca en Basecamp, Ranger Station, auth ni en el paso crítico de instalación |

### 5.7 Formularios

Input, Textarea (autosize con `field-sizing: content` y fallback), Select / Combobox (buscable), **TagInput**, Switch, Checkbox, **RadioCard** (plataforma o rol multijugador con icono y descripción), Slider (filtros de valoración), **Dropzone** (zip e imágenes, con progreso real y reintento), **ImageCropper** (portada 16:9, recorte en cliente y AVIF/WebP), **MarkdownEditor** (textarea con barra de formato, atajos y vista previa lado a lado ≥ lg; en móvil, tabs Escribir/Vista previa; **CodeMirror 6 cargado bajo demanda**, no Monaco: Monaco pesa más de 2 MB y no aporta nada para Markdown), **VersionInput** (semver con validación y comparación con la anterior), **DependencyPicker** (busca mods + restricción de versión + tipo requires/optional/conflicts), **PasswordField** (mostrar/ocultar + medidor de fortaleza), **OTP / passkey** (futuro).

Validación en línea al perder el foco. Mensajes debajo con icono. El resumen de errores arriba en formularios largos enlaza a cada campo.

### 5.8 Contenido

- **Prosa Markdown** (`prose-locator`): máximo 72ch. h2 y h3 en Onest 650 con ancla `#` al hacer hover. Enlaces subrayados (grosor 1 px, offset 3 px). Blockquote con barra Flare. Listas con viñeta Flare.
  - **Alertas estilo GitHub** `[!NOTE]` (Signal), `[!TIP]` (Lichen), `[!WARNING]` (Solafite) y `[!CAUTION]` (Blood).
  - Bloques de código en Martian Mono 13 px sobre `sunken` con botón "Copiar" y nombre del lenguaje. Rutas como `_RedLoader/Mods` en código inline.
  - Tablas con cabecera fija en móvil (scroll horizontal). Imágenes con `radius-md`, lazy y zoom al clic. YouTube como **facade** (miniatura + play, el iframe solo se carga al clic).
  - **Todo pasa por sanitización** (DOMPurify o rehype-sanitize): cierra el XSS del legacy.
- **Changelog / Field notes:** timeline vertical por versión, con fecha relativa y absoluta, badge de canal (estable o beta), secciones Added / Changed / Fixed / Removed (si el creador las usa) y "Nuevo desde tu última descarga" resaltado.
- **VersionTable:** versión (mono) · fecha · tamaño · build del juego · RedLoader · descargas · reportes ✔/✖ · botón. Orden **semver** (no alfabético como en el legacy).
- **ReviewCard** (reseñas, funcionalidad incompleta en el legacy que se termina aquí): 1-5 estrellas (con input accesible por teclado, radio group), título, texto, versión usada, "¿Útil?" (votos), respuesta del creador anidada y marca "Descargó este mod". **Histograma de valoraciones** 5→1 con barras finas.
- **CommentThread:** Markdown ligero, **@menciones** con autocompletado, 2 niveles de anidación, ordenar por Top / Nuevos, **fijado por el creador**, badge "Creador" o "Ranger", reacciones limitadas (👍 ❤️ 🔥 😂), "Marcar como solución" en preguntas, colapsar hilos, editar con marca "editado", reportar. Renderizado seguro (sin concatenar HTML como el legacy).
- **Gallery:** tira de miniaturas + lightbox con teclado y swipe. Admite vídeo (facade).

### 5.9 Datos y gráficos (estilo)

- Marcas finas: líneas de 2 px, áreas con relleno al 10 %, barras ≤ 24 px con extremo redondeado de 4 px anclado a la base, 2 px de separación del color de superficie entre segmentos y marcadores ≥ 8 px con anillo de 2 px.
- Rejilla *hairline* sólida `--color-chart-grid`. Ejes en `fg-subtle` 12 px con `tabular-nums`. Ticks redondos (0 / 1 000 / 2 000).
- **Texto siempre con tokens de texto**, nunca con el color de la serie. Leyenda siempre visible con ≥ 2 series (y etiquetas directas si son ≤ 4). Una serie no lleva caja de leyenda: la nombra el título.
- Tooltip en `overlay` con borde, crosshair en líneas y hover por marca en barras. Cada gráfico tiene **"Ver como tabla"**.
- **Nunca dos ejes Y.** Descargas y valoración van en gráficos separados.
- Marcadores de **lanzamiento de versión** como líneas verticales *hairline* con etiqueta mono (`v2.4.1`) y **marcadores de parche del juego** en Solafite (clave para que el creador vea el impacto de un parche).
- Estáticos: sparklines SVG generados en el build (0 JS). SPA: Recharts 3.10.1 con estos tokens.

### 5.10 Conceptos especiales

**Hero del landing ("La isla viva"):**
- Fondo `texture-topo` a sangre completa (la isla inventada).
- A la izquierda: readout mono en vivo ("● 38 supervivientes explorando · Build del juego 1.0.x · RedLoader 0.9"), titular display-lg "MODS PARA LA ISLA. **PROBADOS EN EL TERRENO.**" (la segunda frase en Flare), párrafo lead, CTA primario "Explorar mods →", CTA secundario "Cómo instalar (3 min)" y 4 StatTiles (1,98 M descargas · 257 mods · 46 creadores · 3,9 K supervivientes) con *count-up*.
- A la derecha, sobre las curvas: **3-5 pins vivos** (mod actualizado hace 2 h, build nueva, Kit popular) con etiqueta; se actualizan por SSE y el ping solo se anima si está en el viewport.
- En móvil los pins pasan a un **ticker** horizontal bajo los CTA.
- El LCP es el titular (texto): renderiza en el primer pintado con fuente precargada y sin imagen. Ver `mock-home-dark.png`.

**404 ("Te saliste del sendero"):**
- Curvas topográficas con un **pin con "?"** y una línea discontinua de sendero que se corta.
- A la derecha, entre siluetas de pinos en SVG (≈ 1 KB), **dos puntos luminosos que parpadean** (`blink`, desactivado con reduced-motion).
- Titular display-xl "404", readout "SIN SEÑAL · FUERA DEL MAPA", copy (§4.8), buscador inline y enlaces a los 6 mods más populares y a /install.
- **Devuelve HTTP 404 real** (el legacy devolvía 200).

**500 ("Algo se rompió en el campamento"):** hoguera apagada (línea), copy, "Reintentar", enlace a Discord/estado e ID de referencia. Hay además una página de **mantenimiento** estática servida por Caddy.

**OG image por mod:** fondo Night + topografía con semilla del mod, isotipo, título display, autor, "↓ 48,2 K · ★ 4,8 · Funciona en 1.0.x", y el color `LogColor` del mod como filo superior.

---

## 6. Wireframes por página (texto)

**Convenciones:**
- `[E]` = página **estática** prerenderizada (SEO/GEO, servida por Caddy tras Cloudflare) con islas de JS mínimas.
- `[S]` = **SPA** (consola React: Basecamp, Ranger Station, ajustes, wizard).
- Todas las URLs legacy se mantienen: `/mods/:user/:mod`, `/builds/:user/:build`, `/profile/:user`, `/loader` → `/install` (301), `/upload`, `/upload-build`. `/mods/:user/:mod/download/:version` responde **302 a R2**.
- Breakpoints: móvil < 640, tablet 640-1023, escritorio ≥ 1024. Las tarjetas se adaptan por container queries.
- **Las rutas de estos wireframes son ilustrativas (en inglés).** El esquema definitivo lo fijan `05-product-features.md` y `01-compat-contract.md` (p. ej. `/instalar`, `/colecciones`, `/u/:user`, `/estado`, `/redloader`). Equivalencias: Kits = colecciones, Patch Radar ≈ `/estado`, Setup = `/instalar`. El diseño no depende del idioma de la URL.

### 6.1 Landing / Home `/` [E] (el legacy redirigía a /mods; ahora es la página principal)

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ ◉ SOTF MODS   Explore  Builds  Kits  Install  Creators   [⌕ Search… or ask Scout  ⌘K]  ♡ 🔔 ◯ │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ ≋≋ topografía ≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ │
│ ● LIVE · 38 SURVIVORS · GAME 1.0.x · REDLOADER 0.9       (●) Auto Pickup · updated 2h     │
│ MODS FOR THE ISLAND.                                              (●) New build: Cliff Fort │
│ FIELD-TESTED.                                           (●) Kit: Hardcore QoL · 12 mods   │
│ 257 mods, 36 builds and Kits for Sons of the Forest — compatibility reports, one-click    │
│ installs, direct downloads.                                                               │
│ [ Explore mods → ]  [ How to install (3 min) ]                                            │
│ 1.98M DOWNLOADS   257 MODS   46 CREATORS   3.9K SURVIVORS                                 │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ START HERE — 3 STEPS   ①Install RedLoader ──── ②Pick mods or a Kit ──── ③Launch & play    │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ PATCH RADAR  Game 1.0.4 · 87% of top-50 mods confirmed working  [See what's broken →]     │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ TRENDING THIS WEEK                                             [All mods →]  7-day ↓      │
│ [card][card][card][card]                                                                   │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ REGIONS (categories)  [Quality of Life 142] [Library 31] [Model Swap 48] [Misc 36]        │
├───────────────────────────────────────────┬──────────────────────────────────────────────┤
│ FIELD NOTES (latest updates, timeline)    │ FEATURED KIT (knolling) + [Download all]    │
│ • Stack Mod v3.1 — fixed log stacking     │                                              │
│ • Cook Alert v1.4 — new sound option      │ MOD OF THE MONTH (feature card)              │
├───────────────────────────────────────────┴──────────────────────────────────────────────┤
│ BLUEPRINTS (builds strip, cyanotype band)  [build][build][build][build]  [All builds →]  │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ CREATOR SPOTLIGHT [creator][creator][creator]       [Ad slot · guests only · reserved]   │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ FAQ (answer-first, GEO): How do I install mods in SOTF? · Do mods work in multiplayer?… │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ Footer: links · 13 languages · ☾ moon phase · stats · Discord · GitHub · disclaimer     │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Tablet:** hero a 1 columna con los pins como ticker debajo. Trending en 2 columnas. Field notes y Kit apilados.
- **Móvil:** readout en 2 líneas. Titular display-lg (≈ 52 px). CTAs a ancho completo. Stats en 2×2. Carrusel horizontal con *scroll-snap* para Trending y Builds. Tab bar inferior.
- **SEO/GEO:** único `h1`, JSON-LD `WebSite` + `SearchAction` + `Organization`, FAQ con respuestas de 40-60 palabras al principio y cifras con fecha ("a 29-sep-2026").
- Sin anuncios en el primer viewport.

### 6.2 Explore `/mods`, `/mods/category/:slug` [E + isla de filtros]

```
┌ Header ──────────────────────────────────────────────────────────────────────────────────┐
│ EXPLORE MODS                                                   257 mods · updated 2h ago │
│ [⌕ Filter by name, tag, author…            ]  Sort: [Trending ▾]   View: [▦][☰][≡]       │
│ Active: (Quality of Life ×) (Works on 1.0.x ×) (NOT Model Swap ×)   Clear all            │
├───────────────────┬──────────────────────────────────────────────────────────────────────┤
│ CATEGORY          │ [card][card][card]                                                   │
│ ☐ Quality of Life │ [card][card][card]                                                   │
│ ☐ Library …       │ [card][card][card]                                                   │
│ COMPATIBILITY     │ [card][AD SLOT (card-sized, guests)][card]                           │
│ ◉ Works on 1.0.x  │ [card][card][card]                                                   │
│ ○ Any             │                                                                      │
│ MULTIPLAYER       │ ← 1 2 3 … 12 →   [Load more]                                         │
│ ☐ Client-only     │                                                                      │
│ ☐ Host only       │                                                                      │
│ ☐ Everyone needs  │                                                                      │
│ PLATFORM Client/  │                                                                      │
│  Server/Universal │                                                                      │
│ UPDATED ≤ 30 days │                                                                      │
│ RATING ★ 4+       │                                                                      │
│ ☐ Has source code │                                                                      │
│ ☐ Show NSFW       │                                                                      │
└───────────────────┴──────────────────────────────────────────────────────────────────────┘
```

- **Orden:** Trending (descargas en 7 días), Más descargados, Actualizados recientemente, Nuevos, Mejor valorados (con mínimo de reseñas), Más favoritos.
- Los filtros **incluyen y excluyen**.
- **URLs:** las canónicas indexables son solo `/mods`, `/mods/category/:slug` y `/mods/tag/:slug`. Las combinaciones de filtros llevan `noindex, follow` y `canonical` a la base.
- **Tablet:** rail de filtros colapsable en un drawer lateral. Grid de 2 columnas.
- **Móvil:** barra fija "Filtros (3) · Ordenar" que abre un bottom sheet con "Ver 42 resultados". Lista por defecto en vista `row` (más densa). Paginación con "Cargar más" y URL actualizada con `history.replaceState`.
- **Estados:** sin resultados (EmptyState + sugerencias de quitar filtros), cargando (skeletons) y error de red (Sin señal).
- Con JS, el filtrado es instantáneo sobre el índice precompilado. Sin JS, el formulario GET funciona igual.

### 6.3 Detalle de mod `/mods/:user/:mod` (+ `/changelog`, `/versions`, `/reviews`, `/comments`, `/gallery`) [E + islas]

```
┌ Header ──────────────────────────────────────────────────────────────────────────────────┐
│ Explore › Quality of Life › Auto Pickup                                                   │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ ┌─────── cover 16:9 / gallery ───────┐  AUTO PICKUP                               ♡ 1.2K │
│ │                                     │  Picks up sticks, stones and loot as you walk.     │
│ │                                     │  ◯ Toni M. ✓trusted · Quality of Life · MIT        │
│ └─────────────────────────────────────┘  ↓ 48.2K total · 1.9K this week · ★ 4.8 (212)    │
│  [thumb][thumb][thumb][▶]               [ Download v2.4.1 · 1.2 MB ▾ ] [Install] [+ Kit] │
│                                          ✔ Works on 1.0.x — 42 survivors · Report        │
├──────────────────────────────────────────────────────┬───────────────────────────────────┤
│ Overview | Field notes | Versions (14) | Reviews     │ AT A GLANCE (<dl>)                │
│ (212) | Comments (87) | Gallery                      │ Game build   1.0.x ✔              │
│──────────────────────────────────────────────────────│ RedLoader    0.9.0+               │
│ [!NOTE] Requires RedLoader 0.9+                       │ Platform     Client               │
│ Markdown description (prose-locator)…                │ Multiplayer  Host only            │
│ ## Features  ## Config  ## FAQ                        │ Safe to remove  Yes               │
│                                                      │ Requires     (ModAPI ≥1.2)        │
│ "What's new since your last download (v2.2)"         │ Conflicts    (AutoLoot ✖)         │
│  • v2.4.1 … • v2.3.0 …                               │ Updated      12 Sep 2026          │
│                                                      │ Source       github.com/…         │
│                                                      │───────────────────────────────────│
│                                                      │ CREATOR CARD (follow, support)    │
│                                                      │ REQUIRED BY (3) · IN KITS (7)     │
│                                                      │ RELATED MODS (compact ×4)         │
│                                                      │ [Ad slot · guests · below fold]   │
└──────────────────────────────────────────────────────┴───────────────────────────────────┘
```

- **Acento del mod:** filo superior de 2 px en el color `LogColor` (ajustado).
- **Móvil:**
  - Orden: portada → título y autor → stats → **cápsula de compatibilidad colapsada a 1 línea** ("✔ 1.0.x · Client · Host only · RL 0.9+" y "Ver todo") → tabs con scroll.
  - **Barra de descarga fija abajo** ("Descargar v2.4.1" + menú de versiones) que respeta `safe-area-inset-bottom`. El sidebar pasa al final.
- **Tablet:** cápsula "At a glance" en 2 columnas bajo la cabecera y sidebar abajo.
- **Reseñas:** histograma + "Escribir reseña" (solo si descargaste o tienes sesión; 1 por usuario y versión mayor) + orden (útiles / recientes / críticas) + respuesta del creador.
- **Field report:** modal de 2 pasos: "¿Funcionó en tu partida?" ✔/✖ → build del juego (autodetectada: la actual) + solo o multijugador + nota opcional. Anónimo no; basta con sesión.
- **SEO/GEO:** JSON-LD `SoftwareApplication` (`applicationCategory: GameApplication`, `operatingSystem: Windows`, `softwareVersion`, `aggregateRating`, `interactionStatistic` de descargas, `author`), `BreadcrumbList`. El `<dl>` "At a glance" es la **respuesta citable** para LLMs. `h1` = nombre del mod. `meta description` = descripción corta.
- **Mod no aprobado:** 404 para el público (el legacy lo listaba y dejaba descargarlo); vista previa solo para el autor y los rangers, con banner "En revisión".

### 6.4 Perfil de autor `/profile/:user` [E + islas]

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ ≋≋≋ generative terrain banner (seed = userId) ≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋ │
│ (avatar)  TONI M.  @toni ✓trusted          [Follow] [♥ Support ▾ Ko-fi/Patreon] [Share] │
│           DAY 1,204 ON THE ISLAND · [RANGER stamp] · [FORTRESS tier stamp: 100K+ dl]    │
│           "I make QoL mods so you can spend more time building." · 🔗 GitHub · Discord  │
│ 12 MODS   412K DOWNLOADS   2.1K FOLLOWERS   ★ 4.7 AVG                                    │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ Mods (12) | Builds (3) | Kits (2) | Activity | Badges (18) | Reviews written              │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ Pinned: [feature card]                                                                   │
│ [card][card][card] …                                                                     │
│ Badges tab = "field guide pages": grid of stamps, locked ones as dashed outlines + hint │
│ Activity = contribution contour (heatmap in flare sequential) + timeline                │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Móvil:** banner a 3:1, avatar superpuesto, stats en 2×2, "Seguir" a ancho completo y tabs con scroll.
- **Privacidad:** el usuario puede ocultar su actividad o su rango.
- JSON-LD `ProfilePage` + `Person`.

### 6.5 Kits (colecciones) `/kits`, `/kits/:user/:kit` [E + islas]

```
LISTA /kits
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ KITS — curated mod loadouts        [+ Create kit]      Sort: Popular ▾   Filter: 1.0.x ✔ │
│ [kitcard: knolling of 6 icons | "Hardcore QoL" · by Ana · 12 mods · 48 MB · ✔ 1.0.x]   │
│ [kitcard] [kitcard] [kitcard]                                                            │
└──────────────────────────────────────────────────────────────────────────────────────────┘
DETALLE
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ ▦ knolling header (mod icons laid out on the mat)                                        │
│ HARDCORE QOL  · by Ana · rev 7 (2 days ago) · 1.1K followers                             │
│ [ Install all with RedManager ] [ Download all (.zip manifest) ] [Copy kit code] [Follow]│
│ Compatibility: ✔ 11/12 work on 1.0.4 · ⚠ 1 unverified · ✖ 0 conflicts detected          │
├───────────────────────────────────────────────────────┬──────────────────────────────────┤
│ 1 ⠿ [row] Auto Pickup v2.4.1   ✔  "Set radius to 6"    │ About this kit (markdown)        │
│ 2 ⠿ [row] Stack Mod v3.1       ✔                       │ Revisions: rev7 +Cook Alert …    │
│ 3 ⠿ [row] ModAPI (dependency, auto-added) ✔            │ Comments                         │
└───────────────────────────────────────────────────────┴──────────────────────────────────┘
```

- **Edición** (dueño): arrastrar para ordenar, nota por mod, fijar versión o "siempre la última". Las dependencias se añaden solas (marcadas como "auto"). Aviso de conflictos en tiempo real. Estética Blueprint (`data-surface="blueprint"`).
- **Móvil:** lista con acciones en un sheet y "Instalar todo" fijo abajo.

### 6.6 Builds `/builds`, `/builds/:user/:build` [E + islas], sub-estética Blueprint

```
┌──────────────────────── data-surface="blueprint" (cyanotype grid) ──────────────────────┐
│ BLUEPRINTS — player builds for BuildShare            Sort ▾   Size: S · M · L · XL       │
│ ┌┄┄┄┄┄┄┄┄┄┄┄┄┄┐ ┌┄┄┄┄┄┄┄┄┄┄┄┄┄┐ ┌┄┄┄┄┄┄┄┄┄┄┄┄┄┐ ┌┄┄┄┄┄┄┄┄┄┄┄┄┄┐                       │
│ ┆ image        ┆ ┆             ┆ ┆             ┆ ┆             ┆   corner ticks + cotas   │
│ ┆├─ 1 248 pcs ─┤┆ ┆             ┆ ┆             ┆ ┆             ┆                         │
│ └┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └┄┄┄┄┄┄┄┄┄┄┄┄┄┘ └┄┄┄┄┄┄┄┄┄┄┄┄┄┘                       │
└──────────────────────────────────────────────────────────────────────────────────────────┘
DETALLE: gallery | SPEC SHEET (mono): elements 1 248 · BuildShare v2 · GUID ···· · size L ·
         author · updated | [Download build] [How to import (3 steps)] | reviews · comments
```

- **Móvil:** 1 columna y spec sheet como `<dl>` compacto.
- **Tamaño S/M/L/XL** derivado de `numberOfElements`.
- **Build of the Month** con sello Solafite.

### 6.7 Guía de instalación `/install` (legacy `/loader` → 301) [E], alto valor SEO/GEO

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ HOW TO INSTALL SONS OF THE FOREST MODS (2026)          Verified with game 1.0.4 · 20 Sep │
│ TL;DR (answer-first, 50 words): Install RedLoader with RedManager, drop mods in           │
│ _RedLoader/Mods, launch the game. Or install any mod in one click from RedManager.      │
├──────────────┬───────────────────────────────────────────────────────────────────────────┤
│ ① Check game │ ① CHECK YOUR GAME VERSION  (manual tab style, page numbers "01/04")      │
│ ② RedLoader  │   …                                                                       │
│ ③ Add mods   │ ② INSTALL REDLOADER   [Option A: RedManager (recommended)] [Option B: manual]│
│ ④ Verify     │   code: SonsOfTheForest/_RedLoader/…                                      │
│ Troubleshoot │ ③ ADD MODS  [Install with RedManager] or manual (download .zip)          │
│ Steam Deck   │    or manual: drop .zip contents into _RedLoader/Mods                     │
│ FAQ          │ ④ VERIFY IN-GAME   (what you should see)                                  │
│ (sticky rail │ TROUBLESHOOTING (accordion, each with #anchor)                            │
│  w/progress) │ STEAM DECK / PROTON notes                                                  │
│              │ FAQ · Featured starter Kit [Install all]                                   │
└──────────────┴───────────────────────────────────────────────────────────────────────────┘
```

- **Móvil:** el rail se convierte en *stepper* horizontal fijo arriba (①②③④) con progreso por scroll.
- Vídeo como facade.
- **GEO:** respuestas autocontenidas por paso, "última verificación" con fecha, JSON-LD `Article` + `FAQPage`, enlace desde `llms.txt`.
- Sin anuncios en los pasos. Como mucho, uno al final para invitados.

### 6.8 Asistente de subida `/upload` (mods) y `/upload-build` [S]

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ NEW MOD      ① File ─── ② Details ─── ③ Compatibility ─── ④ Media ─── ⑤ Release ─── ⑥ Review│
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ ① ┌┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐                                                   │
│   ┆  Drop your .zip here (≤ 100 MB)   ┆   ← parsed in-browser: manifest.json found ✔     │
│   └┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘     Name: Auto Pickup · v2.4.1 · Client · Mod      │
│   progress ▓▓▓▓▓▓▓░░ 72% (direct to R2, resumable)   Deps: ModAPI  · LogColor #FF9900     │
│ ② name · slug (live URL preview) · short description (160 chars, counter) · category ·  │
│   tags · description [Markdown editor | Preview]                                         │
│ ③ Game build [1.0.x ▾] · RedLoader min [0.9.0] · Platform (radio cards) ·               │
│   Multiplayer: Client-only / Host only / Everyone needs it · Safe to remove? ·          │
│   Dependencies (picker: requires / optional / conflicts)                                 │
│ ④ Cover (crop 16:9) · gallery (drag to order) · video URL                               │
│ ⑤ Version (semver, validated vs previous) · channel stable/beta · changelog (md)        │
│ ⑥ PREFLIGHT ✔ manifest valid ✔ cover ✔ description ≥ 300 chars ⚠ no source link         │
│   Quality score 86/100  [Submit to Ranger Station]                                       │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ Autosaved 3s ago · [Save draft]                                    [← Back]  [Next →]    │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

- Todo el formulario se **rellena desde `manifest.json`** (fflate 0.8.3 en el navegador). Borradores con autoguardado. Nueva versión de un mod existente = pasos ①, ⑤ y ⑥ (salta el resto).
- **Upload de Build:** ① archivo de BuildShare → autodetección de `buildGuid`, `numberOfElements` y versión → ② detalles → ④ imágenes → ⑥ revisión.
- **Móvil:** se permite (paso a paso a pantalla completa), aunque el caso principal es escritorio.
- **Estados:** zip inválido (explica qué falta), versión duplicada, tamaño excedido y subida interrumpida (reanudar).

### 6.9 Basecamp: dashboard del creador `/basecamp` [S]

```
┌───────────┬──────────────────────────────────────────────────────────────────────────────┐
│ BASECAMP  │ Good evening, Toni · Day 1,204                     [+ New mod] [+ New version]│
│ Overview  │ ┌DL 7d┐ ┌DL 30d┐ ┌Favorites┐ ┌Rating┐ ┌Followers┐ ┌Field reports ✔92%┐          │
│ My mods   │ │12.4K│ │48.1K │ │ +214    │ │ 4.7  │ │ +38     │ │ 1 broken on 1.0.4 │          │
│ Builds    │ └▁▂▄▆█┘ └──────┘ └─────────┘ └──────┘ └─────────┘ └───────────────────┘          │
│ Kits      │ DOWNLOADS (line, flare) ── version markers v2.4.1 ┆ patch 1.0.4 ┆ (solafite)   │
│ Analytics │ [7d][30d][90d][All]                                              [View table]│
│ Reviews   ├────────────────────────────────────┬─────────────────────────────────────────┤
│ Comments  │ NEEDS ATTENTION                    │ LIVE (SSE)                              │
│ Badges    │ ⚠ Cook Alert: 3 broken reports     │ ● 2 downloads Auto Pickup · just now    │
│ Settings  │   on 1.0.4 → [Post update]         │ ● New review ★5 on Stack Mod            │
│           │ ⚠ 4 unanswered questions           │ ● Kit "Hardcore QoL" added your mod     │
│           │ ⓘ Stack Mod: no source link        │                                         │
│           ├────────────────────────────────────┴─────────────────────────────────────────┤
│           │ MY MODS table: name · status (live/in review/changes requested) · version ·  │
│           │ 7d dl · rating · reports · [Edit] [New version] [⋯]                          │
│           │ NEXT MILESTONE: "Fortress" tier at 500K downloads ▓▓▓▓▓▓▓░ 82%               │
└───────────┴──────────────────────────────────────────────────────────────────────────────┘
```

- **Analytics por mod:** descargas por día y por versión (barras apiladas con separación de 2 px, ≤ 8 versiones y el resto como "Otras"), idioma del sitio del visitante, fuente (búsqueda, Kit, perfil, externo), conversión vista → descarga y valoraciones en el tiempo. Todo con "Ver como tabla" y exportación CSV.
- **Tablet:** la sidebar se colapsa a iconos.
- **Móvil:** la sidebar pasa a menú en el header, los KPIs a un carrusel de 2 columnas, "Needs attention" queda primero y las tablas se convierten en listas de tarjetas. Responder reseñas y comentarios desde el móvil debe ser fácil.

### 6.10 Ranger Station: cola de moderación `/ranger` [S]

```
┌───────────────────────────────┬──────────────────────────────────────────────────────────┐
│ QUEUE  [New mods 4][Versions 9]│ AUTO PICKUP v2.4.1 · by Toni ✓trusted · waiting 14h ⏱  │
│ [Reports 2][Comments 5][Builds]│ ┌ Automated checks ────────────────────────────────────┐ │
│ Filter: oldest first ▾         │ │ ✔ manifest valid ✔ zip safe paths ✔ size 1.2 MB      │ │
│ ▸ Auto Pickup v2.4.1   14h  ✓T │ │ ✔ hash not on blocklist  ⚠ new .dll added (diff)     │ │
│   Cook Alert v1.4       9h     │ └──────────────────────────────────────────────────────┘ │
│   NewMod "X"            2h  ⚑  │ Tabs: Files diff | Manifest diff | Description | Media | │
│   …                            │       Changelog | Author history                         │
│                                │ Files diff (tree):  + Plugins/AutoPickup.Extra.dll 34KB │
│                                │                     ~ AutoPickup.dll (hash changed)     │
│                                │ Rendered description (sanitized preview)                │
│                                ├──────────────────────────────────────────────────────────┤
│                                │ [A Approve] [C Request changes ▾templates] [R Reject ▾] │
│                                │ [Assign to me] [Escalate]   Note to author (markdown)   │
└───────────────────────────────┴──────────────────────────────────────────────────────────┘
```

- Atajos `j`/`k`, `a`, `c`, `r`, `e`. Cada acción queda en el **registro de auditoría** (quién, cuándo, motivo) y envía una notificación al autor. Los mensajes al autor se cargan desde plantillas editables.
- Los usuarios **trusted** tienen una vía rápida: sus versiones de mods ya aprobados se publican al instante y se revisan después.
- **Reportes:** contenido, motivo, evidencia y acciones (ocultar, avisar, suspender).
- **Métricas:** tiempo medio de revisión y SLA.
- **Móvil:** solo triaje (lista + aprobar o rechazar lo simple). El diff completo requiere tablet o escritorio.
- Se corrige el bug del legacy en el que "desaprobar" mostraba "aprobado": los estados y mensajes salen de un único enum.

### 6.11 Ajustes `/settings/*` [S]

```
┌───────────────┬──────────────────────────────────────────────────────────────────────────┐
│ Profile       │ PROFILE: avatar (crop) · banner terrain [Reroll] · name · @slug (history │
│ Account       │ keeps old URL redirect) · bio (md, 280) · links (Ko-fi, Patreon, GitHub, │
│ Security      │ Discord, YouTube)                                                        │
│ Notifications │ ACCOUNT: email (verify) · password · export my data · delete account     │
│ Preferences   │ SECURITY: active sessions/devices [Revoke] · passkeys (future) · 2FA     │
│ Privacy       │ NOTIFICATIONS: matrix type × channel (in-app / email / weekly digest)   │
│ Creator       │ PREFERENCES: language · theme Night/Day/System · density comfy/compact · │
│ Connections   │ reduced motion override · NSFW visibility · number format                │
│               │ PRIVACY: public activity · show rank · show on leaderboards              │
│               │ CREATOR: support links · default license · auto-reply templates          │
│               │ CONNECTIONS: Discord · GitHub (verified creator)                         │
└───────────────┴──────────────────────────────────────────────────────────────────────────┘
```

- **Móvil:** lista de secciones → pantalla de detalle (patrón iOS).
- Guardado por sección con toast.
- Los cambios de slug crean una redirección 301 permanente, para que los enlaces nunca se rompan.

### 6.12 Notificaciones (Signals) `/signals` + panel en el header [S / isla]

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ SIGNALS   [All] [Mentions 2] [Updates 5] [My mods 7] [Ranger]       [Mark all read] [⚙] │
│ TODAY                                                                                    │
│ ● ↑ Stack Mod v3.1 is out — you follow it · "Fixed log stacking"     2h   [Download]    │
│ ● @ Ana mentioned you in Auto Pickup comments                        3h   [Reply]       │
│   ★ New 5-star review on Cook Alert                                  5h                  │
│ YESTERDAY                                                                                │
│   ✔ Your mod "Cook Alert v1.4" was approved                                             │
│   🏅 Badge unlocked: First Blueprint (stamp animation)                                  │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

- Panel desplegable desde la campana (≥ md) con las 8 más recientes y "Ver todas". En móvil es una página completa.
- **Tiempo real por SSE** (badge con número). Agrupación inteligente (p. ej. "3 reseñas nuevas en Cook Alert" en lugar de 3 avisos separados). Estado vacío: "Todo tranquilo en el bosque".
- **Email:** menciones al instante (con lotes, como el cron actual) + resumen semanal opcional.

### 6.13 Auth: `/login`, `/register`, `/forgot-password`, `/reset-password`, `/verify-email` [E + isla]

```
┌───────────────────────────────────────────┬──────────────────────────────────────────────┐
│ ≋ topo art + contour pin (≈4 KB) ≋        │ SIGN IN                                      │
│ "Day 1 on the island starts here."        │ Email [                    ]                 │
│ • Save mods to your backpack              │ Password [              👁]   Forgot?        │
│ • Get pinged when mods update             │ [ Sign in ]                                  │
│ • Rate, review, build Kits                │ ─ or ─  [Continue with Discord] (optional)   │
│                                           │ New here? Create an account                  │
└───────────────────────────────────────────┴──────────────────────────────────────────────┘
```

- **Registro:** nombre, email, contraseña (medidor), Turnstile invisible, aceptar términos. Tras registrarse: "Día 1 en la isla" + onboarding de 3 tarjetas (idioma, tema, seguir 3 mods populares).
- **Mensajes neutrales** (no revelan si el email existe). Rate limiting visible ("Demasiados intentos, espera 60 s").
- **Las contraseñas legacy siguen funcionando** (migración transparente del hash, decisión del track de backend).
- **Móvil:** el panel de arte se reduce a una franja superior de 120 px.
- `noindex` en todas estas páginas.

### 6.14 404 / 500 / mantenimiento [E]

- **404:** ver §5.10. Layout centrado, `display-xl` "404", readout "SIN SEÑAL · FUERA DEL MAPA", buscador, 6 mods populares y enlace a /install. Estado HTTP 404 real. En móvil, los ojos y los pinos quedan encima del texto.
- **500:** hoguera apagada, "Reintentar", Discord, ID de referencia. La sirve Caddy si la API cae (`handle_errors`), así que no depende de JS.
- **Mantenimiento:** página estática con cuenta atrás y enlace a Discord.

### 6.15 Páginas extra recomendadas (breve)

- **`/patch-radar`** [E, regenerada por evento]: estado de compatibilidad de los 50 mods top para el build actual del juego, los rotos, los pendientes y un histórico de parches.
- **`/creators`** [E]: directorio, spotlight y leaderboards opt-in ("Trailblazers" del mes).
- **`/about`, `/privacy`, `/terms`, `/content-policy`, `/brand`** (brand kit con logo, colores y reglas de uso para creadores que quieran enlazar el sitio).
- **`/changelog`** del propio sitio ("Field notes de SOTF Mods v2").

---

## 7. Gamificación y funcionalidades creativas ligadas a la marca

> Principio: **motivar sin manipular**. No hay castigos por perder rachas, ni *loot boxes*, ni leaderboards obligatorios. Todo es opt-out y accesible. Los números salen de datos que ya existen (descargas, favoritos, comentarios, reseñas y versiones), así que **los usuarios legacy arrancan con su progreso ya ganado** desde el día 1 de v2.

### 7.1 Rangos de superviviente (usuarios)
XP por acciones útiles (con límites diarios anti-farm): reseña con texto +20, field report +10 (+5 extra si luego coincide con el consenso), comentario útil (votado) +5, Kit creado y seguido por otros +15 por cada 10 seguidores, primer favorito +2, perfil completo +10.

| Rango | XP | Sello |
|---|---|---|
| Castaway / Náufrago | 0 | contorno punteado |
| Scavenger / Carroñero | 50 | |
| Forager / Recolector | 150 | |
| Builder / Constructor | 400 | |
| Scout / Explorador | 1 000 | |
| Ranger / Guardabosques | 2 500 | |
| Pathfinder / Pionero | 6 000 | |
| Legend of the Island / Leyenda de la isla | 15 000 | Solafite |

### 7.2 Tiers de creador (automáticos por descargas de por vida, inspirados en CurseForge Legends)
Progresión inspirada en el sistema de construcción: **Campfire** (1 K) → **Lean-to** (10 K) → **Cabin** (50 K) → **Treehouse** (100 K) → **Fortress** (500 K) → **Landmark** (1 M). Cada tier aporta un sello en el perfil, un marco de avatar y, en Fortress y Landmark, spotlight en la home y una entrevista en Field notes. **Se recalculan con los datos históricos**, así que los creadores veteranos desbloquean al instante los tiers que ya merecen: "momento wow" del lanzamiento.

### 7.3 Insignias ("páginas del manual")
En el perfil, la pestaña Badges es un **cuaderno de campo**: las páginas desbloqueadas llevan sello y las bloqueadas se ven punteadas con una pista. Ejemplos:
- **First Blueprint** (primera build)
- **Patch Day Hero** (actualizaste tu mod en las 48 h siguientes a un parche)
- **Field Medic** (10 field reports que coinciden con el consenso)
- **Cartographer** (Kit con 100 seguidores)
- **Night Owl** (actividad nocturna; divertida, sin valor)
- **Winter Survivor** (activo durante el evento de invierno)
- **Old Growth** (cuenta de antes de 2024: **premia a los usuarios legacy**)
- **Polyglot Helper** (contribuyó traducciones)
- **Bug Hunter** (reporte que llevó a un fix)
- **1M Club** (creador con 1 M de descargas)

### 7.4 "Día N en la isla" y rachas amables
La antigüedad de la cuenta se muestra como **Día N**, igual que el contador de días del juego. La racha de días activos se ve solo en el propio perfil, **se congela sola** cuando no estás (sin culpa) y celebra hitos (7, 30, 100) con copy de hoguera ("La hoguera sigue encendida").

### 7.5 Funcionalidades creativas (propuestas al resto de tracks, con su tratamiento visual)
1. **Field reports + Patch Radar:** compatibilidad por build votada por la comunidad. El día de parche, el banner global lleva a /patch-radar y los creadores reciben "Needs attention" en Basecamp.
2. **Kits con código compartible** (`KIT-7F3Q-2M`) que se pega en RedManager (T1) o en Cmd+K → "Instalar Kit". Knolling visual y revisiones.
3. **Scout**, el asistente web de IA ("Pregúntale a Kelvin" en 05, con otro nombre para evitar personajes), dentro de Cmd+K, con citas a mods y guías, rate limit y tope de gasto. El endpoint de KelvinSeek (mod de terceros) sigue compatible y aparte.
4. **Acento por mod** a partir de `LogColor` del manifest, ajustado para contraste.
5. **Terreno generativo** por usuario (banner y avatar por defecto) y por mod (portadas sin imagen, OG images). Da identidad única sin coste de assets.
6. **Fase lunar en el pie** (calculada en cliente, ≈ 0,3 KB): un guiño atmosférico a los "ciclos lunares" del lore, sin spoilers.
7. **Skins estacionales** (§4.4): la nieve de diciembre se mantiene como **tradición heredada**, ahora ligera y accesible.
8. **Eventos:** *Winter Jam* (concurso de mods en invierno), *Build of the Month* y *Mod of the Month*, con sello Solafite en las tarjetas ganadoras.
9. **"Qué cambió desde tu última descarga"** en la página del mod y "Actualizaciones de tu mochila" en la home para usuarios con sesión.
10. **Modo "visión nocturna"** (easter egg desde Cmd+K): tema monocromo verde fósforo solo decorativo, con contraste AA. Un guiño a las gafas de visión nocturna del juego.
11. **Tarjeta compartible** del perfil y del Kit (imagen generada) para Discord y Reddit, con marca: crecimiento orgánico.

---

## 8. Decisiones abiertas para el usuario

1. **¿Aprobar la dirección A "Locator"** (con Day = Field Guide y Blueprint para Builds)? ¿O preferir B o C?
2. **Sub-brand:** ¿usar "Locator" como nombre público del lanzamiento ("SOTF Mods 2.0 · Locator") o solo como nombre interno del design system?
3. **Vocabulario:** ¿"Kits" para colecciones y "Basecamp" / "Ranger Station" para los paneles? (Alternativa conservadora: "Collections", "Dashboard", "Moderation".)
4. **Llamar "Scout" al asistente web** en lugar de "Pregúntale a Kelvin" (recomendado por propiedad intelectual). KelvinSeek, el mod de ShokoCC, no cambia.
5. **Tema por defecto:** Night (recomendado) con respeto a la preferencia del sistema tras la primera visita. ¿O seguir al sistema desde el principio?
6. **Anuncios:** confirmar que siguen solo para invitados y aceptar las reglas de colocación (§4.10) y el CMP de consentimiento.
7. **Discord OAuth** como login opcional (la comunidad vive en discord.gg/sotf).

---

## 9. Implicaciones para otros tracks (resumen)

- **Backend / datos:**
  - Campos nuevos por mod o versión: `gameBuild`, `loaderMin`, `platform`, `multiplayerRole` (ya existen `modSide`, `isMultiplayerCompatible` y `requiresAllPlayers`, que se migran), `safeToRemove`, dependencias tipadas (`requires` / `optional` / `conflicts`), `logColor`, `channel`.
  - Tablas nuevas: `FieldReport`, `Kit` + `KitItem` + `KitRevision`, `Follow`, `Notification`, `Badge` / `UserBadge`, `XpEvent`, `AuditLog`, `SlugRedirect`.
  - Completar `ModReview` (ya existe).
  - Tiers y rangos calculados desde el histórico.
- **Frontend:** un único `tokens.css` (§4.4) compartido entre el sitio estático y la SPA. Componentes *headless*. Índice de búsqueda precompilado para Cmd+K en estático. Generación de OG, portadas y banners en el build.
- **SEO/GEO:** un `h1` por página, JSON-LD por tipo (§6), FAQ con respuestas primero, `llms.txt` que apunte a /install, /patch-radar y las categorías, y URLs legacy con 301 o 302.
- **Infra:** `/brand/topo.svg`, fuentes y assets con `Cache-Control: public, max-age=31536000, immutable`. HTML con `s-maxage` corto + purga por evento. Las descargas nunca pasan por los servidores.

---

## 10. Fuentes

- Sons of the Forest en Steam: https://store.steampowered.com/app/1326470/Sons_Of_The_Forest/
- Endnight Games: https://endnightgames.com/
- Wikipedia, Sons of the Forest: https://en.wikipedia.org/wiki/Sons_of_the_Forest
- Wiki SOTF, GPS Tracker: https://sonsoftheforest.wiki.gg/wiki/GPS_Tracker · GPS Locator: https://sonsoftheforest.wiki.gg/wiki/GPS_Locator · Guide Book: https://sonsoftheforest.wiki.gg/wiki/Guide_Book
- HUD e inventario: https://www.corrosionhour.com/sons-of-the-forest-ui-hud-overview-guide/ · https://www.g-portal.com/wiki/en/basics-of-the-sons-of-the-forest-inventory/
- Lore: https://sonsoftheforest.fandom.com/wiki/Golden_Cube · https://sonsoftheforest.fandom.com/wiki/Puffton_Corporation
- RedLoader: https://github.com/ToniMacaroni/RedLoader (`SonsSdk/ManifestData.cs`) · https://tonimacaroni.github.io/RedLoader/
- Mods de SOTF en 2026: https://www.gamebrief.net/blog/sons-of-the-forest-mods-guide-2026 · Thunderstore SOTF: https://thunderstore.io/c/sons-of-the-forest/ · Nexus SOTF: https://www.nexusmods.com/games/sonsoftheforest
- Nexus Mods, rediseño y feedback: https://www.nexusmods.com/news/15239 · https://forums.nexusmods.com/topic/13512099-new-ui-usability-feedback/ · https://forums.nexusmods.com/topic/13511530-would-love-a-way-to-go-back-to-the-old-ui-even-if-it-never-gets-updated-with-new-features/
- Modrinth: https://modrinth.com/news/article/design-refresh/ · https://modrinth.com/news/changelog
- Thunderstore, perfiles y modpacks: https://wiki.thunderstore.io/sharing-your-mods/modpacks-and-profiles
- CurseForge: https://blog.curseforge.com/platform-release-notes-july-2026/ · https://blog.curseforge.com/curseforge-july-newsletter-your-downloads-just-became-achievements/
- Hytale × CurseForge: https://hytale.com/news/2026/3/hytale-new-worlds-modding-contest · https://www.curseforge.com/hytale
- mod.io: https://docs.mod.io/features · https://docs.mod.io/moderation
- Steam Workshop, colecciones: https://steamcommunity.com/games/SteamWorkshop/announcements/detail/3889485345756435017
- Factorio Mod Portal: https://forums.factorio.com/viewtopic.php?t=114703 · https://wiki.factorio.com/Modding
- Comparativas 2026: https://tech-insider.org/ie/nexus-mods-vs-curseforge-vs-modrinth-2026/ · https://gdlauncher.com/guides/curseforge-vs-modrinth/
- Plataforma web 2026: https://trade-assistance.com/blog/cross-document-view-transitions-mpa-2026/ · https://www.refontelearning.com/blog/css-anchor-positioning-reaches-baseline
- Tailwind CSS theme variables: https://tailwindcss.com/docs/theme
- Fontsource API (ejes, subsets, licencias): https://api.fontsource.org/v1/fonts · https://api.fontsource.org/v1/variable
- Versiones consultadas con `npm view` el 2026-09-29: tailwindcss 4.3.3, @tailwindcss/typography 0.5.20, motion 13.4.4, lucide 1.48.0 (ISC), cmdk 1.1.1, sonner 2.0.8, vaul 1.1.2, recharts 3.10.1, radix-ui 1.6.7, @base-ui/react 1.8.0, react 19.3.0, @tanstack/react-router 1.170.40, @tanstack/react-query 5.104.0, fflate 0.8.3, fontaine 1.0.0, @capsizecss/metrics 4.3.0, @fontsource-variable/* 5.3.x (OFL-1.1).
