export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Compat_Prompts_HintInputs = {};
/**
* | output |
* | --- |
* | "Your answers tell other survivors which mods run on the current build." |
*
* @param {Settings_Compat_Prompts_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_compat_prompts_hint: ((inputs?: Settings_Compat_Prompts_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Compat_Prompts_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
