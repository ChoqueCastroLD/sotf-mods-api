export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Gallery_Reorder_HintInputs = {};
/**
* | output |
* | --- |
* | "Drag the images, or use the arrows, to change the order." |
*
* @param {Upload_Gallery_Reorder_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_gallery_reorder_hint: ((inputs?: Upload_Gallery_Reorder_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_Reorder_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
