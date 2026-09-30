export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Broken_EmptyInputs = {
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "None of the top mods is reported broken on {build}." |
*
* @param {Content_Radar_Broken_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_broken_empty: ((inputs: Content_Radar_Broken_EmptyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Broken_EmptyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
