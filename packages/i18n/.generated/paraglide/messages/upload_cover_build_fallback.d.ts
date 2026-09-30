export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Cover_Build_FallbackInputs = {};
/**
* | output |
* | --- |
* | "Without a cover, the blueprint’s thumbnail is used." |
*
* @param {Upload_Cover_Build_FallbackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_cover_build_fallback: ((inputs?: Upload_Cover_Build_FallbackInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Cover_Build_FallbackInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
