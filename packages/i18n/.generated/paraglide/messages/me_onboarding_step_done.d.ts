export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Onboarding_Step_DoneInputs = {};
/**
* | output |
* | --- |
* | "Done:" |
*
* @param {Me_Onboarding_Step_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_onboarding_step_done: ((inputs?: Me_Onboarding_Step_DoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Step_DoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
