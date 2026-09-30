export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Badges_IntroInputs = {};
/**
* | output |
* | --- |
* | "Badges fill each survivor’s field notebook. Locked ones show as dashed outlines with a hint, so you always know what’s next." |
*
* @param {Profile_Achievements_Badges_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_badges_intro: ((inputs?: Profile_Achievements_Badges_IntroInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Badges_IntroInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
