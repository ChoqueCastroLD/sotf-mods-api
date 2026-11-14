export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_Feature_Modpacks_TextInputs = {};
/**
* | output |
* | --- |
* | "Open a modpack from the site and it becomes a new profile with all its mods, ready to play." |
*
* @param {Manager_Feature_Modpacks_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_feature_modpacks_text: ((inputs?: Manager_Feature_Modpacks_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Feature_Modpacks_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
