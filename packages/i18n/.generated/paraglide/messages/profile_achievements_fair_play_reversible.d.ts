export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Fair_Play_ReversibleInputs = {};
/**
* | output |
* | --- |
* | "Every XP point is recorded and can be reversed if it came from abuse." |
*
* @param {Profile_Achievements_Fair_Play_ReversibleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_fair_play_reversible: ((inputs?: Profile_Achievements_Fair_Play_ReversibleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Fair_Play_ReversibleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
