export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Uptime_OverallInputs = {
    share: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{share} of the checks had everything up." |
*
* @param {Content_Radar_Uptime_OverallInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_uptime_overall: ((inputs: Content_Radar_Uptime_OverallInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_OverallInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
