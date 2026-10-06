export type LocalizedString = import('../runtime.js').LocalizedString;
export type Oauth_Link_Invalid_TextInputs = {};
/**
* | output |
* | --- |
* | "It has expired or was already used. Log in with Discord again to get a new one." |
*
* @param {Oauth_Link_Invalid_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const oauth_link_invalid_text: ((inputs?: Oauth_Link_Invalid_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Link_Invalid_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
