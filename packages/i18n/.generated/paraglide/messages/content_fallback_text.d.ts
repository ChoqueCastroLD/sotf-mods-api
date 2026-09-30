export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Fallback_TextInputs = {
    language: NonNullable<unknown>;
    original: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "This page is not available in {language} yet, so you are reading the {original} original." |
*
* @param {Content_Fallback_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_fallback_text: ((inputs: Content_Fallback_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Fallback_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
