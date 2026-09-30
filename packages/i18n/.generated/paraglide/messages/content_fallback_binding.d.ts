export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Fallback_BindingInputs = {};
/**
* | output |
* | --- |
* | "For legal texts, the English version is the one that applies." |
*
* @param {Content_Fallback_BindingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_fallback_binding: ((inputs?: Content_Fallback_BindingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Fallback_BindingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
