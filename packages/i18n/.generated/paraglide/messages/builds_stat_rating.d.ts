export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Stat_RatingInputs = {
    rating: NonNullable<unknown>;
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{rating} out of 5 · {count__number} review" |
* | * | "{rating} out of 5 · {count__number} reviews" |
*
* @param {Builds_Stat_RatingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_stat_rating: ((inputs: Builds_Stat_RatingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Stat_RatingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
