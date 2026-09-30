export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Badges_Tier_CurrentInputs = {
    tier: NonNullable<unknown>;
    downloads: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{tier} · {downloads} lifetime downloads" |
*
* @param {Basecamp_Badges_Tier_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_badges_tier_current: ((inputs: Basecamp_Badges_Tier_CurrentInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_Tier_CurrentInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
