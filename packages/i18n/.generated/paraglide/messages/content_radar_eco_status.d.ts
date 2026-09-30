export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Eco_StatusInputs = {
    status: NonNullable<unknown>;
};
/**
* | status | output |
* | --- | --- |
* | "works" | "Works" |
* | "partial" | "Partly works" |
* | "broken" | "Broken" |
* | * | "Unknown" |
*
* @param {Content_Radar_Eco_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_eco_status: ((inputs: Content_Radar_Eco_StatusInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Eco_StatusInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
