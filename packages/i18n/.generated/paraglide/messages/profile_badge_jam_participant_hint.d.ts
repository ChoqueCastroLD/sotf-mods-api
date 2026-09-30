export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_Jam_Participant_HintInputs = {};
/**
* | output |
* | --- |
* | "Enter a mod in a Mod Jam once its results are published. Can be earned again." |
*
* @param {Profile_Badge_Jam_Participant_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_jam_participant_hint: ((inputs?: Profile_Badge_Jam_Participant_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Jam_Participant_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
