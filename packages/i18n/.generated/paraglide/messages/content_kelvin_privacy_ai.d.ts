export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Kelvin_Privacy_AiInputs = {};
/**
* | output |
* | --- |
* | "The text of your messages is sent to the AI provider to generate the answer. Don’t write personal information." |
*
* @param {Content_Kelvin_Privacy_AiInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_kelvin_privacy_ai: ((inputs?: Content_Kelvin_Privacy_AiInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Privacy_AiInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
