export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_CountsInputs = {
    works: NonNullable<unknown>;
    partial: NonNullable<unknown>;
    broken: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{works__number} works · {partial__number} partial · {broken__number} broken" |
*
* @param {Content_Radar_CountsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_counts: ((inputs: Content_Radar_CountsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_CountsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
