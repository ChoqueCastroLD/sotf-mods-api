export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_StatusInputs = {
    status: NonNullable<unknown>;
};
/**
* | status | output |
* | --- | --- |
* | "works" | "Works" |
* | "mixed" | "Mixed" |
* | "broken" | "Broken" |
* | * | "No data" |
*
* @param {Content_Radar_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_status: ((inputs: Content_Radar_StatusInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_StatusInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
