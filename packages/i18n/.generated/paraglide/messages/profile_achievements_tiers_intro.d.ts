export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Tiers_IntroInputs = {};
/**
* | output |
* | --- |
* | "Creators climb tiers automatically with the lifetime downloads of all their mods, history before v2 included. Each tier adds a stamp to the profile and a fra..." |
*
* @param {Profile_Achievements_Tiers_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_tiers_intro: ((inputs?: Profile_Achievements_Tiers_IntroInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Tiers_IntroInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
