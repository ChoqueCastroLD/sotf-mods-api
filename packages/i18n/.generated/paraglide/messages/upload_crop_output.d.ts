export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Crop_OutputInputs = {
    width: NonNullable<unknown>;
    height: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Output {width} × {height}" |
*
* @param {Upload_Crop_OutputInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_crop_output: ((inputs: Upload_Crop_OutputInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Crop_OutputInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
