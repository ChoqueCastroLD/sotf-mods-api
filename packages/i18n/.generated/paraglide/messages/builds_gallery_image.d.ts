export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Gallery_ImageInputs = {
    index: NonNullable<unknown>;
    total: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Picture {index__number} of {total__number}" |
*
* @param {Builds_Gallery_ImageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_gallery_image: ((inputs: Builds_Gallery_ImageInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Gallery_ImageInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
