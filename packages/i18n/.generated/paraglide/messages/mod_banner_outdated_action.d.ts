export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Banner_Outdated_ActionInputs = {};
/**
* | output |
* | --- |
* | "Tried it? Report back" |
*
* @param {Mod_Banner_Outdated_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_banner_outdated_action: ((inputs?: Mod_Banner_Outdated_ActionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Outdated_ActionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
