export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_Mod_Of_The_Week_HintInputs = {};
/**
* | output |
* | --- |
* | "Have one of your mods chosen as Mod of the Week. Can be earned again." |
*
* @param {Profile_Badge_Mod_Of_The_Week_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_mod_of_the_week_hint: ((inputs?: Profile_Badge_Mod_Of_The_Week_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Mod_Of_The_Week_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
