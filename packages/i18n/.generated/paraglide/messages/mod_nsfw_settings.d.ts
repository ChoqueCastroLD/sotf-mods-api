export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Nsfw_SettingsInputs = {};
/**
* | output |
* | --- |
* | "Always show 18+ content (settings)" |
*
* @param {Mod_Nsfw_SettingsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_nsfw_settings: ((inputs?: Mod_Nsfw_SettingsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Nsfw_SettingsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
