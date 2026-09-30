export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Badges_Progress_LabelInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Progress towards {name}" |
*
* @param {Basecamp_Badges_Progress_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_badges_progress_label: ((inputs: Basecamp_Badges_Progress_LabelInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_Progress_LabelInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
