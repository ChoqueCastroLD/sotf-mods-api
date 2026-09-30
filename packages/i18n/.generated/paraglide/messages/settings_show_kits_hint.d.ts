export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Show_Kits_HintInputs = {};
/**
* | output |
* | --- |
* | "The Kits tab of your profile (private kits are never shown)." |
*
* @param {Settings_Show_Kits_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_show_kits_hint: ((inputs?: Settings_Show_Kits_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Show_Kits_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
