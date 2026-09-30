export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Rating_SummaryInputs = {
    rating: NonNullable<unknown>;
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Rated {rating} out of 5 from {count__number} review" |
* | * | "Rated {rating} out of 5 from {count__number} reviews" |
*
* @param {Ui_Domain_Rating_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_rating_summary: ((inputs: Ui_Domain_Rating_SummaryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Rating_SummaryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
