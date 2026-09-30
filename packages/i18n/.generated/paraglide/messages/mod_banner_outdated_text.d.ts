export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Banner_Outdated_TextInputs = {};
/**
* | output |
* | --- |
* | "It hasn’t been updated or confirmed since the last game patch that broke mods." |
*
* @param {Mod_Banner_Outdated_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_banner_outdated_text: ((inputs?: Mod_Banner_Outdated_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Outdated_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
