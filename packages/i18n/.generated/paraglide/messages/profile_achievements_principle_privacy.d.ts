export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Principle_PrivacyInputs = {};
/**
* | output |
* | --- |
* | "You can hide your rank and activity in your privacy settings." |
*
* @param {Profile_Achievements_Principle_PrivacyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_principle_privacy: ((inputs?: Profile_Achievements_Principle_PrivacyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Principle_PrivacyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
