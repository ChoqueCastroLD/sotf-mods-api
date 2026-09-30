export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Rank_ProgressInputs = {
    rank: NonNullable<unknown>;
    xp: NonNullable<unknown>;
    needed: NonNullable<unknown>;
    next: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{rank} · {xp} XP. {needed} XP to {next}." |
*
* @param {Profile_Rank_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_rank_progress: ((inputs: Profile_Rank_ProgressInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Rank_ProgressInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
