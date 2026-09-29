# ADR-0003: Parsear Markdown con markdown-it y serializar con un serializador de conjunto cerrado

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-15 (registrado por el integrador de la ola 1)
- **Plan**: §2.2 (Markdown), §9.1 (XSS)

## Contexto

PLAN §2.2 fija `unified` + `remark-parse` + `remark-gfm` + `remark-rehype` + `rehype-sanitize` +
`rehype-stringify` para `@sotf/markdown`. El render se ejecuta de forma síncrona en el event loop
del API al escribir descripciones, changelogs, comentarios y reseñas, con un presupuesto de
15 ms para el documento de referencia de 20 KB. Medido por WP-15 (`packages/markdown/README.md`,
«Why markdown-it»):

- remark solo tardaba 48–69 ms con ese documento.
- micromark es superlineal con entradas hostiles: 20 KB de `*_*_…` ≈ 18 s y `> > > …` desborda la
  pila. Es una denegación de servicio del API.
- Tras cambiar el parser, `hast-util-to-html` (rehype-stringify) suponía un tercio del tiempo
  restante.

## Opciones consideradas

1. **Mantener remark y limitar la entrada**: límites de longitud y anidamiento. No corrige el
   coste base (48–69 ms > 15 ms) y los límites de anidamiento no cubren todas las formas
   superlineales.
2. **markdown-it 14 como parser + unified/rehype para el resto**: lineal, ≈ 2 ms con el mismo
   documento, CommonMark + tablas y tachado GFM; autolinks, listas de tareas, alertas, spoilers,
   menciones y fachadas se implementan sobre el árbol hast.
3. **Además, serializador propio**: solo conoce el conjunto cerrado de elementos y propiedades que
   permite `verifyTree` y lanza con cualquier otra cosa.

## Decisión

Opciones 2 y 3. `@sotf/markdown` parsea con `markdown-it@14.3.2`, convierte a hast
(`src/parse.ts`), mantiene `unified`, `rehype-raw` y `rehype-sanitize` como en el plan y serializa
los árboles verificados con `src/serialize.ts`. Se desvía de PLAN §2.2 en el parser y el
serializador; `rehype-stringify` queda solo como oráculo de tests y `showdown` (renderer legacy)
como oráculo del perfil `legacyHtml`, nunca en runtime.

## Consecuencias

- El render es lineal y cabe en el presupuesto; los tests de rendimiento y fuzzing de
  `packages/markdown/test/` lo vigilan.
- `test/serialize.test.ts` comprueba que un navegador parsea la salida del serializador propio y
  la de rehype-stringify en el mismo DOM para cada fixture y vector XSS de cada perfil.
- El catálogo de `pnpm-workspace.yaml` incorpora `markdown-it`, `@types/markdown-it`,
  `@types/hast`, `rehype-raw`, `showdown` y `@types/showdown`. `remark-parse`, `remark-gfm` y
  `remark-rehype` siguen en el catálogo sin uso; pueden salir si ningún paquete los adopta
  (backlog de la ola 1).
- Las extensiones GFM que no trae markdown-it (autolinks, tareas, alertas) son código propio y
  necesitan sus propios tests al cambiar.
