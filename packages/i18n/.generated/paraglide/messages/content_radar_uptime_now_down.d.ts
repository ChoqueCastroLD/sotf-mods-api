export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Uptime_Now_DownInputs = {};
/**
* | output |
* | --- |
* | "Down now" |
*
* @param {Content_Radar_Uptime_Now_DownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_uptime_now_down: ((inputs?: Content_Radar_Uptime_Now_DownInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_Now_DownInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
