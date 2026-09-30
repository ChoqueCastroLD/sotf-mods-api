export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Onboarding_Theme_TextInputs = {};
/**
* | output |
* | --- |
* | "Night is easy on the eyes after dark; Day reads best in sunlight." |
*
* @param {Auth_Onboarding_Theme_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_onboarding_theme_text: ((inputs?: Auth_Onboarding_Theme_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Onboarding_Theme_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
