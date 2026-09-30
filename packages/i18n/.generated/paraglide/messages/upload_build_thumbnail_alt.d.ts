export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Build_Thumbnail_AltInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Thumbnail of the blueprint {name}" |
*
* @param {Upload_Build_Thumbnail_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_build_thumbnail_alt: ((inputs: Upload_Build_Thumbnail_AltInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Build_Thumbnail_AltInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
