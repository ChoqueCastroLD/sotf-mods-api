export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Image_No_PreviewInputs = {};
/**
* | output |
* | --- |
* | "Uploaded (preview on the page once processed)" |
*
* @param {Upload_Image_No_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_image_no_preview: ((inputs?: Upload_Image_No_PreviewInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Image_No_PreviewInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
