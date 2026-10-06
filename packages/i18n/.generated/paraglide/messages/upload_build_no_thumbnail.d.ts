export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Build_No_ThumbnailInputs = {};
/**
* | output |
* | --- |
* | "This build has no thumbnail. Add a cover in the media step." |
*
* @param {Upload_Build_No_ThumbnailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_build_no_thumbnail: ((inputs?: Upload_Build_No_ThumbnailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Build_No_ThumbnailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
