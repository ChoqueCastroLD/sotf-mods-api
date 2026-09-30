export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Listing_Description_HintInputs = {};
/**
* | output |
* | --- |
* | "Markdown. What it does, how to use it, known issues. 300 characters or more help players decide." |
*
* @param {Basecamp_Listing_Description_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_listing_description_hint: ((inputs?: Basecamp_Listing_Description_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Description_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
