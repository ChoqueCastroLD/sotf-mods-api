export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Downloads_30dInputs = {
    count: NonNullable<unknown>;
    display: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} download in 30 days" |
* | * | "{display} downloads in 30 days" |
*
* @param {Content_Radar_Downloads_30dInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_downloads_30d: ((inputs: Content_Radar_Downloads_30dInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Downloads_30dInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
