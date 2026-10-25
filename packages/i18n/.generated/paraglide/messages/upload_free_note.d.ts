export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Free_NoteInputs = {};
/**
* | output |
* | --- |
* | "Any file type. The file gets the security checks only (no RedLoader manifest needed). You type the version number in the Release step." |
*
* @param {Upload_Free_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_free_note: ((inputs?: Upload_Free_NoteInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Free_NoteInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
