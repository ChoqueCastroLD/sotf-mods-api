export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Listing_Legacy_BodyInputs = {};
/**
* | output |
* | --- |
* | "It was written on the old site, so its HTML still renders as formatting. Convert it to Markdown to edit it like any new description." |
*
* @param {Basecamp_Listing_Legacy_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_listing_legacy_body: ((inputs?: Basecamp_Listing_Legacy_BodyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Legacy_BodyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
