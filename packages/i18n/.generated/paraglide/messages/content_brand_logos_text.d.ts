export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Brand_Logos_TextInputs = {};
/**
* | output |
* | --- |
* | "Each asset comes in a Night version for dark backgrounds and a Day version for light ones. Prefer SVG; use PNG where SVG is not accepted." |
*
* @param {Content_Brand_Logos_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_brand_logos_text: ((inputs?: Content_Brand_Logos_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Logos_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
