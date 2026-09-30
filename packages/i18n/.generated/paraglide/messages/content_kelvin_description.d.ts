export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Kelvin_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "KelvinSeek lets you chat with Kelvin in Sons of the Forest and give him orders in plain words. How it works, its limits and what happens to your messages." |
*
* @param {Content_Kelvin_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_kelvin_description: ((inputs?: Content_Kelvin_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
