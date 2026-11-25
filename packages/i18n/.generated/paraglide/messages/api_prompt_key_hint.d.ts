export type LocalizedString = import('../runtime.js').LocalizedString;
export type Api_Prompt_Key_HintInputs = {};
/**
* | output |
* | --- |
* | "This prompt reads the key from the SOTF_API_KEY variable. To get a prompt with the key inside, create a key: the option appears when it is shown." |
*
* @param {Api_Prompt_Key_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const api_prompt_key_hint: ((inputs?: Api_Prompt_Key_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Prompt_Key_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
