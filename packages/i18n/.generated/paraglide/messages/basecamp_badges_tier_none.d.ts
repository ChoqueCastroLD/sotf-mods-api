export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Badges_Tier_NoneInputs = {
    downloads: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{downloads} lifetime downloads: the first tier starts at 1,000." |
*
* @param {Basecamp_Badges_Tier_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_badges_tier_none: ((inputs: Basecamp_Badges_Tier_NoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_Tier_NoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
