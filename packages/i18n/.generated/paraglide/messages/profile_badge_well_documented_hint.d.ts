export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_Well_Documented_HintInputs = {};
/**
* | output |
* | --- |
* | "Reach a listing quality of 100 on one of your mods." |
*
* @param {Profile_Badge_Well_Documented_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_well_documented_hint: ((inputs?: Profile_Badge_Well_Documented_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Well_Documented_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
