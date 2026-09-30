export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Onboarding_Kit_HintInputs = {};
/**
* | output |
* | --- |
* | "Group your mods into a loadout you can share with one code." |
*
* @param {Me_Onboarding_Kit_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_onboarding_kit_hint: ((inputs?: Me_Onboarding_Kit_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Kit_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
