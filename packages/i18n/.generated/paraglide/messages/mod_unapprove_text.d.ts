export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Unapprove_TextInputs = {};
/**
* | output |
* | --- |
* | "It goes back to Pending approval: it leaves the main list and returns to the New mods queue." |
*
* @param {Mod_Unapprove_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_unapprove_text: ((inputs?: Mod_Unapprove_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Unapprove_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
