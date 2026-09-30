export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Gallery_Move_AfterInputs = {
    n: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Move image {n} later" |
*
* @param {Upload_Gallery_Move_AfterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_gallery_move_after: ((inputs: Upload_Gallery_Move_AfterInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_Move_AfterInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
