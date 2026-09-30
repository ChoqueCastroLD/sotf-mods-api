export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_Survived_Day_One_HintInputs = {};
/**
* | output |
* | --- |
* | "Complete the Day 1 checklist." |
*
* @param {Profile_Badge_Survived_Day_One_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_survived_day_one_hint: ((inputs?: Profile_Badge_Survived_Day_One_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Survived_Day_One_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
