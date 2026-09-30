export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Gallery_Move_BeforeInputs = {
    n: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Move image {n} earlier" |
*
* @param {Upload_Gallery_Move_BeforeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_gallery_move_before: ((inputs: Upload_Gallery_Move_BeforeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_Move_BeforeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
