export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Media_Cover_HintInputs = {};
/**
* | output |
* | --- |
* | "16:9, shown on cards and at the top of the page. A new cover is cropped here before it uploads." |
*
* @param {Basecamp_Media_Cover_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_media_cover_hint: ((inputs?: Basecamp_Media_Cover_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Cover_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
