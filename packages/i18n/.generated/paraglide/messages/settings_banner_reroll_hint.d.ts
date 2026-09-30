export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Banner_Reroll_HintInputs = {};
/**
* | output |
* | --- |
* | "New terrain previewed — choose «Use this terrain» to keep it." |
*
* @param {Settings_Banner_Reroll_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_banner_reroll_hint: ((inputs?: Settings_Banner_Reroll_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Banner_Reroll_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
