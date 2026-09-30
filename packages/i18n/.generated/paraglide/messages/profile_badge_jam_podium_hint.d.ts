export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_Jam_Podium_HintInputs = {};
/**
* | output |
* | --- |
* | "Finish in the top 3 of a category in a Mod Jam. Can be earned again." |
*
* @param {Profile_Badge_Jam_Podium_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_jam_podium_hint: ((inputs?: Profile_Badge_Jam_Podium_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Jam_Podium_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
