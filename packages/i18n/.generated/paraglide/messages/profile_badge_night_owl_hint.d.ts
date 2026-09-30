export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_Night_Owl_HintInputs = {};
/**
* | output |
* | --- |
* | "Make 5 contributions between midnight and 4 a.m. your time." |
*
* @param {Profile_Badge_Night_Owl_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_night_owl_hint: ((inputs?: Profile_Badge_Night_Owl_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Night_Owl_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
