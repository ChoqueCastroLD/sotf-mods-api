export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Milestone_ModInputs = {
    name: NonNullable<unknown>;
    threshold: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} at {threshold} downloads" |
*
* @param {Basecamp_Milestone_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_milestone_mod: ((inputs: Basecamp_Milestone_ModInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Milestone_ModInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
