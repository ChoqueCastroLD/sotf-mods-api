export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Media_Add_HintInputs = {
    left: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "PNG, JPEG, WebP, AVIF or GIF up to 10 MB. {left} left." |
*
* @param {Basecamp_Media_Add_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_media_add_hint: ((inputs: Basecamp_Media_Add_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Add_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
