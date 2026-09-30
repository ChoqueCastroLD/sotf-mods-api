export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Art_Benefit_BackpackInputs = {};
/**
* | output |
* | --- |
* | "Stash mods in your backpack" |
*
* @param {Auth_Art_Benefit_BackpackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_art_benefit_backpack: ((inputs?: Auth_Art_Benefit_BackpackInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Art_Benefit_BackpackInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
