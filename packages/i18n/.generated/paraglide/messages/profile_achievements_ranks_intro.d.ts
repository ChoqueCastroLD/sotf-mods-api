export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Ranks_IntroInputs = {};
/**
* | output |
* | --- |
* | "Every member has a Survivor rank that grows with the XP earned by helping the community. It can’t be bought and it’s never lost for inactivity." |
*
* @param {Profile_Achievements_Ranks_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_ranks_intro: ((inputs?: Profile_Achievements_Ranks_IntroInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Ranks_IntroInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
