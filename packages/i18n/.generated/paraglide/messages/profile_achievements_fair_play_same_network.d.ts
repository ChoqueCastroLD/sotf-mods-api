export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Fair_Play_Same_NetworkInputs = {};
/**
* | output |
* | --- |
* | "Votes and reports between accounts on the same network within 24 hours don’t count." |
*
* @param {Profile_Achievements_Fair_Play_Same_NetworkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_fair_play_same_network: ((inputs?: Profile_Achievements_Fair_Play_Same_NetworkInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Fair_Play_Same_NetworkInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
