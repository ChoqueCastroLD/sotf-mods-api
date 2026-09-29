export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Link_FallbackInputs = {};
/**
* | output |
* | --- |
* | "If the button doesn’t work, copy this link into your browser:" |
*
* @param {Emails_Auth_Link_FallbackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_link_fallback: ((inputs?: Emails_Auth_Link_FallbackInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Link_FallbackInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
