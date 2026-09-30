export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Milestone_Mod_LabelInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Progress of {name} to its next milestone" |
*
* @param {Basecamp_Milestone_Mod_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_milestone_mod_label: ((inputs: Basecamp_Milestone_Mod_LabelInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Milestone_Mod_LabelInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
