export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Preflight_Media_InvalidInputs = {};
/**
* | output |
* | --- |
* | "An image failed: remove it or upload it again." |
*
* @param {Upload_Preflight_Media_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_preflight_media_invalid: ((inputs?: Upload_Preflight_Media_InvalidInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Media_InvalidInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
