export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Error_Turnstile_FailedInputs = {};
/**
* | output |
* | --- |
* | "The security check didn’t finish. Check your connection or allow challenges.cloudflare.com in your blocker, then try again." |
*
* @param {Auth_Error_Turnstile_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_error_turnstile_failed: ((inputs?: Auth_Error_Turnstile_FailedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Turnstile_FailedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
