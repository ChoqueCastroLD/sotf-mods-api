export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Media_Gallery_HintInputs = {};
/**
* | output |
* | --- |
* | "Drag to reorder, or use the arrows. Describe each image for players who cannot see it." |
*
* @param {Basecamp_Media_Gallery_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_media_gallery_hint: ((inputs?: Basecamp_Media_Gallery_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Gallery_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
