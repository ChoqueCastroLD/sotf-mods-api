export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Past_NoticeInputs = {
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "This is an older build. The game is on {build} now." |
*
* @param {Content_Radar_Past_NoticeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_past_notice: ((inputs: Content_Radar_Past_NoticeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Past_NoticeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
