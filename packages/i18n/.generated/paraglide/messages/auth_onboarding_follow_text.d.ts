export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Onboarding_Follow_TextInputs = {};
/**
* | output |
* | --- |
* | "Following a mod pings you as soon as it updates." |
*
* @param {Auth_Onboarding_Follow_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_onboarding_follow_text: ((inputs?: Auth_Onboarding_Follow_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Onboarding_Follow_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
