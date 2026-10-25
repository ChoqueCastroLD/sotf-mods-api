export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Hint_Not_RedloaderInputs = {};
/**
* | output |
* | --- |
* | "This file has no RedLoader manifest. If the mod is for another loader or for The Forest, pick it above and the same file is checked again." |
*
* @param {Upload_Hint_Not_RedloaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_hint_not_redloader: ((inputs?: Upload_Hint_Not_RedloaderInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Hint_Not_RedloaderInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
