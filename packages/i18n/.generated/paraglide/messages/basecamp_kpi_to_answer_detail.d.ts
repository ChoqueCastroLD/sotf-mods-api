export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Kpi_To_Answer_DetailInputs = {
    comments: NonNullable<unknown>;
    reviews: NonNullable<unknown>;
};
/**
* | comments__plural | reviews__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{comments__number} comment, {reviews__number} review" |
* | "one" | * | "{comments__number} comment, {reviews__number} reviews" |
* | * | "one" | "{comments__number} comments, {reviews__number} review" |
* | * | * | "{comments__number} comments, {reviews__number} reviews" |
*
* @param {Basecamp_Kpi_To_Answer_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_kpi_to_answer_detail: ((inputs: Basecamp_Kpi_To_Answer_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_To_Answer_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
