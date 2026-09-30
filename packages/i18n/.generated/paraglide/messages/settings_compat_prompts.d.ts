export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Compat_PromptsInputs = {};
/**
* | output |
* | --- |
* | "Ask «Did it work?» after downloads" |
*
* @param {Settings_Compat_PromptsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_compat_prompts: ((inputs?: Settings_Compat_PromptsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Compat_PromptsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
