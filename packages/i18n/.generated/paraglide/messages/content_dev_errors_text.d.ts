export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Dev_Errors_TextInputs = {};
/**
* | output |
* | --- |
* | "The code field of an error is one of these. Each problem’s type URI points to its row here." |
*
* @param {Content_Dev_Errors_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_dev_errors_text: ((inputs?: Content_Dev_Errors_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Errors_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
