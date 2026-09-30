export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Onboarding_Follow_HintInputs = {};
/**
* | output |
* | --- |
* | "Tap ♥ to stash it in your backpack and hear about updates." |
*
* @param {Me_Onboarding_Follow_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_onboarding_follow_hint: ((inputs?: Me_Onboarding_Follow_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Follow_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
