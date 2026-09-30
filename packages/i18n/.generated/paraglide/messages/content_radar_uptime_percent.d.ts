export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Uptime_PercentInputs = {
    share: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{share} uptime" |
*
* @param {Content_Radar_Uptime_PercentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_uptime_percent: ((inputs: Content_Radar_Uptime_PercentInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_PercentInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
