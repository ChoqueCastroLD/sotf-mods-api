export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Milestone_Tier_LabelInputs = {
    tier: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Progress to the {tier} tier" |
*
* @param {Basecamp_Milestone_Tier_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_milestone_tier_label: ((inputs: Basecamp_Milestone_Tier_LabelInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Milestone_Tier_LabelInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
