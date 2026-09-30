export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Version_Yanked_TextInputs = {};
/**
* | output |
* | --- |
* | "The creator withdrew this version. Use a newer one." |
*
* @param {Mod_Version_Yanked_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_version_yanked_text: ((inputs?: Mod_Version_Yanked_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Version_Yanked_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
