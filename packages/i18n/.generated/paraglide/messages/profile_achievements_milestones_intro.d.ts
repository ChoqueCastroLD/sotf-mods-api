export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Milestones_IntroInputs = {};
/**
* | output |
* | --- |
* | "Every mod celebrates its download milestones, counted back to its first day. They appear as a timeline on the mod page and the biggest ones are announced on ..." |
*
* @param {Profile_Achievements_Milestones_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_milestones_intro: ((inputs?: Profile_Achievements_Milestones_IntroInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Milestones_IntroInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
