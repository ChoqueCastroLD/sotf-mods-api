export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Preflight_Tags_UnknownInputs = {};
/**
* | output |
* | --- |
* | "Some tags don’t exist any more." |
*
* @param {Upload_Preflight_Tags_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_preflight_tags_unknown: ((inputs?: Upload_Preflight_Tags_UnknownInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Tags_UnknownInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
