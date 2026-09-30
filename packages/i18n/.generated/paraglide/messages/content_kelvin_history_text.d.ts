export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Kelvin_History_TextInputs = {};
/**
* | output |
* | --- |
* | "It was previously known as Kelvin-GPT. The old version that asked for your own OpenAI key is retired: that route exposed the key in the address and now answe..." |
*
* @param {Content_Kelvin_History_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_kelvin_history_text: ((inputs?: Content_Kelvin_History_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_History_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
