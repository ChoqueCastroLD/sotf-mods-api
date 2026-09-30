export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Listing_Error_UrlInputs = {};
/**
* | output |
* | --- |
* | "Enter a full address that starts with https://" |
*
* @param {Basecamp_Listing_Error_UrlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_listing_error_url: ((inputs?: Basecamp_Listing_Error_UrlInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Error_UrlInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
