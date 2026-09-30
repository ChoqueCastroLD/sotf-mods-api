export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Rank_TopInputs = {
    rank: NonNullable<unknown>;
    xp: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{rank} · {xp} XP. The top of the island." |
*
* @param {Profile_Rank_TopInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_rank_top: ((inputs: Profile_Rank_TopInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Rank_TopInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
