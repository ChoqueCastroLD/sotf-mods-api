export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badges_Summary_OfInputs = {
    count: NonNullable<unknown>;
    total: NonNullable<unknown>;
};
/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "No badges yet of {total}." |
* | * | "one" | "{count__number} badge of {total}." |
* | * | * | "{count__number} badges of {total}." |
*
* @param {Profile_Badges_Summary_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badges_summary_of: ((inputs: Profile_Badges_Summary_OfInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badges_Summary_OfInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
