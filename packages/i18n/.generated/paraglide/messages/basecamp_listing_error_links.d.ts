export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Listing_Error_LinksInputs = {};
/**
* | output |
* | --- |
* | "One of the support links is not a valid address." |
*
* @param {Basecamp_Listing_Error_LinksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_listing_error_links: ((inputs?: Basecamp_Listing_Error_LinksInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Error_LinksInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
