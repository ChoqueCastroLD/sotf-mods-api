export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Works_EmptyInputs = {
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "No top mod is confirmed on {build} yet. Tried one? Report back." |
*
* @param {Content_Radar_Works_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_works_empty: ((inputs: Content_Radar_Works_EmptyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Works_EmptyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
