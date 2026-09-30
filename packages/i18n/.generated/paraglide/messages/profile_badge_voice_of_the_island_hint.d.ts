export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_Voice_Of_The_Island_HintInputs = {};
/**
* | output |
* | --- |
* | "Receive 50 helpful votes on your reviews." |
*
* @param {Profile_Badge_Voice_Of_The_Island_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_voice_of_the_island_hint: ((inputs?: Profile_Badge_Voice_Of_The_Island_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Voice_Of_The_Island_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
