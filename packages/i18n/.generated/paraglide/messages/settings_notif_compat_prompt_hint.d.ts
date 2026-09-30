export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Notif_Compat_Prompt_HintInputs = {};
/**
* | output |
* | --- |
* | "A new game build is out and you have downloads to report on." |
*
* @param {Settings_Notif_Compat_Prompt_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_notif_compat_prompt_hint: ((inputs?: Settings_Notif_Compat_Prompt_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Compat_Prompt_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
