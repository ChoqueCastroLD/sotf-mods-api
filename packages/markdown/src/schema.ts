/**
 * `rehype-sanitize` allowlists per profile (PLAN §9.1: no `style`, no `on*`, no `iframe`, no
 * `script`; `javascript:` and `data:` out).
 *
 * The schemas are written from scratch (not merged with the GitHub default) so every allowed tag
 * and attribute is listed here, on purpose. Ids, `rel`, `style`, `data-*` and ARIA attributes are
 * never accepted, and classes only with the exact values the parser emits (`language-*`, task
 * lists): the trusted enhancers add their own hooks after sanitising.
 */
import type { Options as Schema } from 'rehype-sanitize';
import type { MarkdownProfile } from './types.ts';
import { LINK_PROTOCOLS, MEDIA_PROTOCOLS } from './url.ts';

/** Elements whose whole content is dropped (not unwrapped) when they appear. */
export const STRIPPED_WITH_CONTENT = [
  'applet',
  'audio',
  'base',
  'basefont',
  'bgsound',
  'button',
  'canvas',
  'datalist',
  'dialog',
  'embed',
  'form',
  'frame',
  'frameset',
  'head',
  'iframe',
  'image',
  'isindex',
  'keygen',
  'link',
  'map',
  'marquee',
  'math',
  'menu',
  'meta',
  'meter',
  'noembed',
  'noframes',
  'noscript',
  'object',
  'optgroup',
  'option',
  'output',
  'param',
  'picture',
  'plaintext',
  'portal',
  'progress',
  'script',
  'select',
  'slot',
  'source',
  'style',
  'svg',
  'template',
  'textarea',
  'title',
  'track',
  'video',
  'xmp',
] as const;

const INLINE = ['a', 'b', 'br', 'code', 'del', 'em', 'i', 'kbd', 'strong', 's', 'samp', 'sub', 'sup', 'ins'] as const;
const LITE_BLOCKS = ['blockquote', 'hr', 'li', 'ol', 'p', 'pre', 'ul'] as const;
const FULL_BLOCKS = [
  ...LITE_BLOCKS,
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'img',
  'input',
  'table',
  'thead',
  'tbody',
  'tfoot',
  'tr',
  'th',
  'td',
] as const;
const LEGACY_EXTRA = ['details', 'summary', 'dl', 'dt', 'dd'] as const;

type PropertyDefinitions = NonNullable<Schema['attributes']>[string];

const POSITIVE_INTEGER = /^\d{1,6}$/;
const CODE_LANGUAGE = /^language-[a-z0-9][a-z0-9_+#.-]{0,31}$/i;

function schemaFor(tagNames: readonly string[], profile: MarkdownProfile): Schema {
  const attributes: Record<string, PropertyDefinitions> = {
    a: ['href', 'title'],
    code: [['className', CODE_LANGUAGE]],
    ol: [['start', POSITIVE_INTEGER]],
    li: [['className', 'task-list-item']],
    ul: [['className', 'contains-task-list']],
    '*': [],
  };
  if (profile !== 'lite') {
    Object.assign(attributes, {
      img: ['src', 'alt', 'title', ['width', POSITIVE_INTEGER], ['height', POSITIVE_INTEGER]],
      input: [
        ['type', 'checkbox'],
        ['checked', true],
        ['disabled', true],
      ],
      th: [['align', 'left', 'center', 'right']],
      td: [['align', 'left', 'center', 'right']],
      ol: [
        ['start', POSITIVE_INTEGER],
        ['className', 'contains-task-list'],
      ],
    });
  }
  if (profile === 'legacyHtml') {
    Object.assign(attributes, { details: [['open', true]] });
  }
  return {
    tagNames: [...tagNames],
    attributes,
    required: { input: { type: 'checkbox', disabled: true } },
    protocols: {
      href: [...LINK_PROTOCOLS],
      src: [...MEDIA_PROTOCOLS],
    },
    ancestors: {
      li: ['ol', 'ul'],
      input: ['li'],
      thead: ['table'],
      tbody: ['table'],
      tfoot: ['table'],
      tr: ['table'],
      th: ['table'],
      td: ['table'],
      summary: ['details'],
      dt: ['dl'],
      dd: ['dl'],
    },
    // No author-controlled id/name survives, so there is nothing to clobber.
    clobber: [],
    clobberPrefix: '',
    strip: [...STRIPPED_WITH_CONTENT],
    allowComments: false,
    allowDoctypes: false,
  };
}

export const SANITIZE_SCHEMAS: Readonly<Record<MarkdownProfile, Schema>> = {
  lite: schemaFor([...INLINE, ...LITE_BLOCKS], 'lite'),
  full: schemaFor([...INLINE, ...FULL_BLOCKS], 'full'),
  legacyHtml: schemaFor([...INLINE, ...FULL_BLOCKS, ...LEGACY_EXTRA], 'legacyHtml'),
};
