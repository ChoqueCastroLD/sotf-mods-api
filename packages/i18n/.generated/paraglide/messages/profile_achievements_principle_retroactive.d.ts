export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Principle_RetroactiveInputs = {};
/**
* | output |
* | --- |
* | "Everything is retroactive: accounts from 2023 onwards keep what they already earned." |
*
* @param {Profile_Achievements_Principle_RetroactiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_principle_retroactive: ((inputs?: Profile_Achievements_Principle_RetroactiveInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Principle_RetroactiveInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
