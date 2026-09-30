export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Uptime_Bars_LabelInputs = {
    component: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Daily uptime of {component}, oldest to newest" |
*
* @param {Content_Radar_Uptime_Bars_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_uptime_bars_label: ((inputs: Content_Radar_Uptime_Bars_LabelInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_Bars_LabelInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
