export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Milestone_TierInputs = {
    tier: NonNullable<unknown>;
    threshold: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{tier} tier at {threshold} downloads" |
*
* @param {Basecamp_Milestone_TierInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_milestone_tier: ((inputs: Basecamp_Milestone_TierInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Milestone_TierInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
