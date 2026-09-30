export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Downloads_Clear_TextInputs = {};
/**
* | output |
* | --- |
* | "Every row disappears and «Did it work?» questions about past downloads go away. Download counts of the mods are not affected. This can’t be undone." |
*
* @param {Me_Downloads_Clear_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_downloads_clear_text: ((inputs?: Me_Downloads_Clear_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_Clear_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
