export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Uptime_LatencyInputs = {
    avg: NonNullable<unknown>;
    p95: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{avg__number} ms average · {p95__number} ms p95" |
*
* @param {Content_Radar_Uptime_LatencyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_uptime_latency: ((inputs: Content_Radar_Uptime_LatencyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_LatencyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
