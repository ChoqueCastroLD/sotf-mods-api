export type LocalizedString = import('../runtime.js').LocalizedString;
export type Api_Prompt_With_Key_HintInputs = {};
/**
* | output |
* | --- |
* | "The prompt includes this key: paste it only into an assistant you trust, and revoke the key if it leaks." |
*
* @param {Api_Prompt_With_Key_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const api_prompt_with_key_hint: ((inputs?: Api_Prompt_With_Key_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Prompt_With_Key_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
