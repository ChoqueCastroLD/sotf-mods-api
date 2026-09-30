export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Draft_TextInputs = {};
/**
* | output |
* | --- |
* | "This text describes how SOTF Mods works today, but it has not been reviewed by a lawyer yet. It may change before it is final; we will date every change." |
*
* @param {Content_Draft_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_draft_text: ((inputs?: Content_Draft_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Draft_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
