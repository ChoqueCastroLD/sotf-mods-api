export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Gallery_UploadingInputs = {
    n: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Upload of image {n}" |
*
* @param {Upload_Gallery_UploadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_gallery_uploading: ((inputs: Upload_Gallery_UploadingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_UploadingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
