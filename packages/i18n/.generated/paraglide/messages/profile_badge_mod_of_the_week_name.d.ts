export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_Mod_Of_The_Week_NameInputs = {};
/**
* | output |
* | --- |
* | "Mod of the Week" |
*
* @param {Profile_Badge_Mod_Of_The_Week_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_mod_of_the_week_name: ((inputs?: Profile_Badge_Mod_Of_The_Week_NameInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Mod_Of_The_Week_NameInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
