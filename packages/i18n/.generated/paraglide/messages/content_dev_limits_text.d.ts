export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Dev_Limits_TextInputs = {};
/**
* | output |
* | --- |
* | "Above a limit the API answers 429 with a Retry-After header. Cache responses and honour ETags; you will rarely come close." |
*
* @param {Content_Dev_Limits_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_dev_limits_text: ((inputs?: Content_Dev_Limits_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Limits_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
