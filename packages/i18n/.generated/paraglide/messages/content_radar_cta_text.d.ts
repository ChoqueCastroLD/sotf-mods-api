export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Cta_TextInputs = {};
/**
* | output |
* | --- |
* | "Open the mod, pick how you played (solo, host, client or dedicated) and say whether it works. Every field report earns XP and saves other survivors a broken ..." |
*
* @param {Content_Radar_Cta_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_cta_text: ((inputs?: Content_Radar_Cta_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Cta_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
