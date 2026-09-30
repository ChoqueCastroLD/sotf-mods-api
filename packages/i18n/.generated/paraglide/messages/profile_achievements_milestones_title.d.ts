export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Milestones_TitleInputs = {};
/**
* | output |
* | --- |
* | "Mod milestones" |
*
* @param {Profile_Achievements_Milestones_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_milestones_title: ((inputs?: Profile_Achievements_Milestones_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Milestones_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
