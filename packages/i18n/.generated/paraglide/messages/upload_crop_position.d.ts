export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Crop_PositionInputs = {
    x: NonNullable<unknown>;
    y: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Left {x} px, top {y} px" |
*
* @param {Upload_Crop_PositionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_crop_position: ((inputs: Upload_Crop_PositionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Crop_PositionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
