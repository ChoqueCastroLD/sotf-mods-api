/**
 * Reproduction of the legacy client-side sanitiser (research/02 §4.1), used by B8 to prove that a
 * stored `shortDescription` is exactly what the legacy upload form made of `manifest.description`:
 *
 *   input.value = manifest.description            // <input type="text">: CR/LF are stripped
 *   shortDescription = sanitizeText(input.value.trim())
 *
 *   window.sanitizeText = (text) => {
 *     if (!text) return "";
 *     const allowed = /[^\p{Script=Han}a-zA-Z0-9,.¡!¿?$%&()#+;/'"\n @_-]/gu;
 *     let s = DOMPurify.sanitize(text).replace(allowed, "");
 *     return s.trim().replace(/<[^>]*>?/gm, '');
 *   };
 *
 * DOMPurify parses the text as HTML and serialises it back, which for plain text escapes `&`, `<`,
 * `>` and U+00A0 (`&amp;`, `&lt;`, `&gt;`, `&nbsp;` — the letters and `;` then survive the
 * filter: that is where the stray entities come from). Texts whose HTML parse is not a plain text
 * node (tags, comments, existing character references) cannot be reproduced exactly without a
 * browser, so they return `null` and B8 leaves them alone — a false negative, never a false fix.
 */

const DISALLOWED = /[^\p{Script=Han}a-zA-Z0-9,.¡!¿?$%&()#+;/'"\n @_-]/gu;

/** What `<input type="text">` keeps of a programmatic value (line breaks removed). */
export function inputValue(text: string): string {
  return text.replace(/[\r\n]/g, '');
}

/** Value the legacy form submitted for a manifest description (before sanitising). */
export function legacyFormValue(description: string): string {
  return inputValue(description).trim();
}

/** `DOMPurify.sanitize(text)` for plain text, or null when the HTML parse would not be plain text. */
function serialisePlainText(text: string): string | null {
  if (/<[A-Za-z!/?]/.test(text)) return null; // start of a tag, comment or doctype
  if (/&(?:#\d+|#x[0-9a-f]+|[a-z][a-z0-9]*);?/i.test(text)) return null; // a character reference
  if (text.includes('\0')) return null;
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/ /g, '&nbsp;');
}

/** `window.sanitizeText` of the legacy frontend, or null when it cannot be reproduced exactly. */
export function legacySanitize(text: string): string | null {
  if (!text) return '';
  const serialised = serialisePlainText(text);
  if (serialised === null) return null;
  return serialised
    .replace(DISALLOWED, '')
    .trim()
    .replace(/<[^>]*>?/gm, '');
}

/**
 * The manifest description that produced `stored`, if the legacy pipeline maps it exactly onto
 * it and it actually lost something (otherwise null).
 */
export function recoverableDescription(description: string, stored: string): string | null {
  const value = legacyFormValue(description);
  if (value === '' || value === stored) return null;
  const sanitised = legacySanitize(value);
  return sanitised !== null && sanitised === stored ? value : null;
}
