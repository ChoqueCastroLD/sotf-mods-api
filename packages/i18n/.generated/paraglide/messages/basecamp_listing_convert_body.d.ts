export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Listing_Convert_BodyInputs = {};
/**
* | output |
* | --- |
* | "Raw HTML will show as plain text from now on. There is no way back." |
*
* @param {Basecamp_Listing_Convert_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_listing_convert_body: ((inputs?: Basecamp_Listing_Convert_BodyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Convert_BodyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
