export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Onboarding_Follow_CtaInputs = {};
/**
* | output |
* | --- |
* | "Browse popular mods" |
*
* @param {Auth_Onboarding_Follow_CtaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_onboarding_follow_cta: ((inputs?: Auth_Onboarding_Follow_CtaInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Onboarding_Follow_CtaInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
