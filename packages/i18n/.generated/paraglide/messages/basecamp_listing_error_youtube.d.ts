export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Listing_Error_YoutubeInputs = {};
/**
* | output |
* | --- |
* | "Enter the link of a YouTube video." |
*
* @param {Basecamp_Listing_Error_YoutubeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_listing_error_youtube: ((inputs?: Basecamp_Listing_Error_YoutubeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Error_YoutubeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
