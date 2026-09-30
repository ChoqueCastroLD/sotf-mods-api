export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Brand_Legal_TextInputs = {};
/**
* | output |
* | --- |
* | "The SOTF Mods name and logo identify this community site. You may use them to refer to or link to the site; any other use needs our permission." |
*
* @param {Content_Brand_Legal_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_brand_legal_text: ((inputs?: Content_Brand_Legal_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Legal_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
