export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Brand_Dont_EndorseInputs = {};
/**
* | output |
* | --- |
* | "Suggest that SOTF Mods endorses, sponsors or reviewed your project." |
*
* @param {Content_Brand_Dont_EndorseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_brand_dont_endorse: ((inputs?: Content_Brand_Dont_EndorseInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Dont_EndorseInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
