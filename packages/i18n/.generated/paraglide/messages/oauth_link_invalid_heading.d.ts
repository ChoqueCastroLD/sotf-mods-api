export type LocalizedString = import('../runtime.js').LocalizedString;
export type Oauth_Link_Invalid_HeadingInputs = {};
/**
* | output |
* | --- |
* | "This link can’t be used" |
*
* @param {Oauth_Link_Invalid_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const oauth_link_invalid_heading: ((inputs?: Oauth_Link_Invalid_HeadingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Link_Invalid_HeadingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
