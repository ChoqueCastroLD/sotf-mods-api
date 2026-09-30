export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Onboarding_DismissInputs = {};
/**
* | output |
* | --- |
* | "Hide" |
*
* @param {Me_Onboarding_DismissInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_onboarding_dismiss: ((inputs?: Me_Onboarding_DismissInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_DismissInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
