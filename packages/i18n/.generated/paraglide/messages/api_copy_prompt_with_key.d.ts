export type LocalizedString = import('../runtime.js').LocalizedString;
export type Api_Copy_Prompt_With_KeyInputs = {};
/**
* | output |
* | --- |
* | "Copy AI prompt with this key" |
*
* @param {Api_Copy_Prompt_With_KeyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const api_copy_prompt_with_key: ((inputs?: Api_Copy_Prompt_With_KeyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Copy_Prompt_With_KeyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
