export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Attention_GalleryInputs = {
    name: NonNullable<unknown>;
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{name}: the gallery has {count__number} image, aim for 3 or more" |
* | * | "{name}: the gallery has {count__number} images, aim for 3 or more" |
*
* @param {Basecamp_Attention_GalleryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_attention_gallery: ((inputs: Basecamp_Attention_GalleryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_GalleryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
