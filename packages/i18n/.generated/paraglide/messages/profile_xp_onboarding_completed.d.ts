export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Xp_Onboarding_CompletedInputs = {};
/**
* | output |
* | --- |
* | "Complete the Day 1 checklist" |
*
* @param {Profile_Xp_Onboarding_CompletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_xp_onboarding_completed: ((inputs?: Profile_Xp_Onboarding_CompletedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Onboarding_CompletedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
