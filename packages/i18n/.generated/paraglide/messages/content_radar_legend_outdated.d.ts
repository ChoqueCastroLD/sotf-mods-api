export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Legend_OutdatedInputs = {};
/**
* | output |
* | --- |
* | "“Possibly outdated” means the latest release predates the last breaking update and nobody has confirmed it works since." |
*
* @param {Content_Radar_Legend_OutdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_legend_outdated: ((inputs?: Content_Radar_Legend_OutdatedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Legend_OutdatedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
