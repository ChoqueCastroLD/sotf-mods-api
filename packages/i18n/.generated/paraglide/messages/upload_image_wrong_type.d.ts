export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Image_Wrong_TypeInputs = {};
/**
* | output |
* | --- |
* | "Use a PNG, JPEG, WebP, AVIF or GIF image." |
*
* @param {Upload_Image_Wrong_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_image_wrong_type: ((inputs?: Upload_Image_Wrong_TypeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Image_Wrong_TypeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
