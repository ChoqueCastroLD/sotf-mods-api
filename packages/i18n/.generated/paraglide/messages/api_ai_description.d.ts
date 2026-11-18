export type LocalizedString = import('../runtime.js').LocalizedString;
export type Api_Ai_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Paste this into Claude, Codex or another coding assistant before asking it to work on your mod. It tells the assistant where to start and how to use your key..." |
*
* @param {Api_Ai_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const api_ai_description: ((inputs?: Api_Ai_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Ai_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
