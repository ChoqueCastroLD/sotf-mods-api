export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_Profiles_TextInputs = {};
/**
* | output |
* | --- |
* | "Keep one set of mods for solo and another for multiplayer, and switch between them without downloading anything again. Modpacks from this site open as a new ..." |
*
* @param {Manager_Profiles_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_profiles_text: ((inputs?: Manager_Profiles_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Profiles_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
