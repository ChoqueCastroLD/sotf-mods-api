export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Activity_Heatmap_LabelInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Contributions of {name} in the last 12 months" |
*
* @param {Profile_Activity_Heatmap_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_activity_heatmap_label: ((inputs: Profile_Activity_Heatmap_LabelInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Heatmap_LabelInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
