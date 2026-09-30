export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Fair_Play_DownloadsInputs = {};
/**
* | output |
* | --- |
* | "Downloads never give XP, so there’s nothing to gain from inflating them." |
*
* @param {Profile_Achievements_Fair_Play_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_fair_play_downloads: ((inputs?: Profile_Achievements_Fair_Play_DownloadsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Fair_Play_DownloadsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
