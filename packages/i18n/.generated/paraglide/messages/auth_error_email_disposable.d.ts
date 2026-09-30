export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Error_Email_DisposableInputs = {};
/**
* | output |
* | --- |
* | "Disposable email addresses can’t be used. Use an address you’ll keep." |
*
* @param {Auth_Error_Email_DisposableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_error_email_disposable: ((inputs?: Auth_Error_Email_DisposableInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Email_DisposableInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
