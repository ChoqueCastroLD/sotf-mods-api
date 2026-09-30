export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Badges_Tier_TopInputs = {};
/**
* | output |
* | --- |
* | "You reached the highest tier." |
*
* @param {Basecamp_Badges_Tier_TopInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_badges_tier_top: ((inputs?: Basecamp_Badges_Tier_TopInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_Tier_TopInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
