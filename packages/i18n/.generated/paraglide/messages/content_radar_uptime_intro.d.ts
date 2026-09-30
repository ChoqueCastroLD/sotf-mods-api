export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Uptime_IntroInputs = {
    days: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The site, API, downloads and database are probed every 5 minutes. Last {days__number} days, UTC." |
*
* @param {Content_Radar_Uptime_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_uptime_intro: ((inputs: Content_Radar_Uptime_IntroInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_IntroInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
