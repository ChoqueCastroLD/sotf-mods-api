export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Preflight_Gallery_Below_3Inputs = {};
/**
* | output |
* | --- |
* | "Fewer than 3 gallery images." |
*
* @param {Upload_Preflight_Gallery_Below_3Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_preflight_gallery_below_3: ((inputs?: Upload_Preflight_Gallery_Below_3Inputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Gallery_Below_3Inputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
