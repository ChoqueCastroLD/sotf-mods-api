export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Gallery_HintInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Several at once · PNG, JPEG, WebP, AVIF or GIF · up to 10 MB each · {max} max" |
*
* @param {Upload_Gallery_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_gallery_hint: ((inputs: Upload_Gallery_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
