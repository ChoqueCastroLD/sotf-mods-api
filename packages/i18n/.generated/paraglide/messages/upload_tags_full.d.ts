export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Tags_FullInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "That’s {max} tags: remove one to pick another." |
*
* @param {Upload_Tags_FullInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_tags_full: ((inputs: Upload_Tags_FullInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Tags_FullInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
