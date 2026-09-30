export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Bar_LabelInputs = {
    works: NonNullable<unknown>;
    broken: NonNullable<unknown>;
    pending: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{works__number} working, {broken__number} broken, {pending__number} waiting for reports" |
*
* @param {Content_Radar_Bar_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_bar_label: ((inputs: Content_Radar_Bar_LabelInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Bar_LabelInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
