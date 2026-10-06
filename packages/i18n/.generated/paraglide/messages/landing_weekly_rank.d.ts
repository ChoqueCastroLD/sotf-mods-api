export type LocalizedString = import('../runtime.js').LocalizedString;
export type Landing_Weekly_RankInputs = {
    rank: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Rank {rank__number}" |
*
* @param {Landing_Weekly_RankInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const landing_weekly_rank: ((inputs: Landing_Weekly_RankInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Weekly_RankInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
