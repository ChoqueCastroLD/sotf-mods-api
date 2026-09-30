export type LocalizedString = import('../runtime.js').LocalizedString;
export type Oauth_Unlinked_ToastInputs = {};
/**
* | output |
* | --- |
* | "Discord unlinked" |
*
* @param {Oauth_Unlinked_ToastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const oauth_unlinked_toast: ((inputs?: Oauth_Unlinked_ToastInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Unlinked_ToastInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
