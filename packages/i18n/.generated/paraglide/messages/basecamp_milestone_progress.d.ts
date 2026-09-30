export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Milestone_ProgressInputs = {
    current: NonNullable<unknown>;
    threshold: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{current} of {threshold}" |
*
* @param {Basecamp_Milestone_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_milestone_progress: ((inputs: Basecamp_Milestone_ProgressInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Milestone_ProgressInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
