export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Attention_ReviewsInputs = {
    name: NonNullable<unknown>;
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{name}: {count__number} review without a reply" |
* | * | "{name}: {count__number} reviews without a reply" |
*
* @param {Basecamp_Attention_ReviewsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_attention_reviews: ((inputs: Basecamp_Attention_ReviewsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_ReviewsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
