// Bundle-size fixture: the message-free main entry (locales, paths, formatters).
import { formatCompactNumber, localizePath } from '../../src/index.ts';

export const path = localizePath('/mods', 'es');
export const count = formatCompactNumber('es', 1_980_000);
