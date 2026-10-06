/**
 * The one-line SOTF-MODS logo as a data URI, for renderers that cannot load files (OG images are
 * drawn by satori in the worker bundle). 419 x 110, red on a transparent background.
 */

import { LOGO_WORDMARK_PNG_BASE64 } from './generated/brand-data.gen.ts';

export const LOGO_WORDMARK_DATA_URI = `data:image/png;base64,${LOGO_WORDMARK_PNG_BASE64}`;
export const LOGO_WORDMARK_SIZE = { width: 419, height: 110 } as const;
