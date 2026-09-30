export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Flagged_DetailInputs = {};
/**
* | output |
* | --- |
* | "Something in it needs a human check (see the warnings below). You can still submit; it goes live once approved." |
*
* @param {Upload_Flagged_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_flagged_detail: ((inputs?: Upload_Flagged_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flagged_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
