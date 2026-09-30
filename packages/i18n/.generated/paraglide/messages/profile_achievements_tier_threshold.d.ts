export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Tier_ThresholdInputs = {
    count: NonNullable<unknown>;
    downloads: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{downloads} download" |
* | * | "{downloads} downloads" |
*
* @param {Profile_Achievements_Tier_ThresholdInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_tier_threshold: ((inputs: Profile_Achievements_Tier_ThresholdInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Tier_ThresholdInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
