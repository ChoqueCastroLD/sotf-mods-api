# ADR-0001: Registrar las decisiones de arquitectura con ADRs

- **Estado**: Aceptada
- **Fecha**: 2026-09-29
- **Autor**: WP-00
- **Plan**: §12.1 (protocolo para agentes), §12.3 (WP-00)

## Contexto

v2 se construye por paquetes de trabajo (WP) ejecutados en paralelo por agentes distintos, en
olas de hasta cinco WPs (PLAN §12.2). El plan maestro decide el «qué», pero durante la
implementación aparecen decisiones que el plan no fija al detalle (una API de librería que cambió,
un plan B tras un *spike*, una desviación justificada). Si esas decisiones solo viven en los
commits o en la cabeza de un agente, el siguiente WP las repite o las contradice.

## Opciones consideradas

1. **Nada formal**: comentarios en el código y mensajes de commit. Barato, pero no se encuentra
   nada y no hay estado (vigente u obsoleta).
2. **Editar el plan directamente**: el plan es de solo lectura para los WPs (propiedad de rutas,
   §12.1) y mezclaría decisión original y cambios sin historial legible.
3. **ADRs ligeros en `docs/adr/`** (estilo Michael Nygard / MADR): un fichero corto por decisión,
   numerado, inmutable salvo el campo de estado.

## Decisión

Se usan ADRs ligeros en `docs/adr/`:

- **Nombre**: `NNNN-titulo-en-kebab-case.md`, numeración correlativa de cuatro dígitos. El número
  no se reutiliza nunca.
- **Plantilla**: [`template.md`](template.md), con Estado, Fecha, Autor, sección del Plan,
  Contexto, Opciones consideradas, Decisión y Consecuencias.
- **Estados**: Propuesta → Aceptada | Rechazada; más tarde, Obsoleta o «Sustituida por ADR-NNNN».
  Un ADR aceptado no se reescribe: se sustituye con uno nuevo que lo enlaza.
- **Idioma**: español, como el plan; identificadores, rutas y código en inglés.
- **Cuándo escribir uno**: al desviarse del plan, al elegir un plan B tras un *spike* (p. ej. el
  de i18n de WP-22), al fijar una convención transversal nueva o al descartar una alternativa
  que alguien podría volver a proponer.
- **Índice**: cada ADR nuevo se añade a la tabla de [`README.md`](README.md).
- **Propiedad**: `docs/adr/**` es de WP-00 y, en la ola final, de WP-A4. Un WP que necesite un
  ADR lo redacta en su propio árbol o lo anota en `docs/backlog/<WP-ID>.md`, y el integrador lo
  incorpora con el siguiente número libre.

## Consecuencias

- Cada decisión relevante tiene contexto y alternativas por escrito, y un agente nuevo puede
  ponerse al día leyendo el plan y los ADRs.
- Coste pequeño: un fichero de una página por decisión.
- El plan sigue siendo la fuente única de verdad; los ADRs lo complementan y cualquier
  contradicción queda explícita.
