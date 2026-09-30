export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Gallery_Image_AltInputs = {
    index: NonNullable<unknown>;
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Screenshot {index__number} of {name}" |
*
* @param {Mod_Gallery_Image_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_gallery_image_alt: ((inputs: Mod_Gallery_Image_AltInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Gallery_Image_AltInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
