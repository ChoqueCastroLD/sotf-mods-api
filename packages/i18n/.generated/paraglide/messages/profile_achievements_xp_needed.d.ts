export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Xp_NeededInputs = {};
/**
* | output |
* | --- |
* | "XP needed" |
*
* @param {Profile_Achievements_Xp_NeededInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_xp_needed: ((inputs?: Profile_Achievements_Xp_NeededInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Xp_NeededInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
