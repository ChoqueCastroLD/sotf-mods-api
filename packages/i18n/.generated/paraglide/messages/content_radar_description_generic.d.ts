export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Description_GenericInputs = {};
/**
* | output |
* | --- |
* | "Which Sons of the Forest mods work on the current game patch: RedLoader status and field reports from players for the 50 most downloaded mods." |
*
* @param {Content_Radar_Description_GenericInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_description_generic: ((inputs?: Content_Radar_Description_GenericInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Description_GenericInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
