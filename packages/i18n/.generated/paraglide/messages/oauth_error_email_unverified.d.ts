export type LocalizedString = import('../runtime.js').LocalizedString;
export type Oauth_Error_Email_UnverifiedInputs = {};
/**
* | output |
* | --- |
* | "Your Discord email isn’t verified. Verify it in Discord and try again." |
*
* @param {Oauth_Error_Email_UnverifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const oauth_error_email_unverified: ((inputs?: Oauth_Error_Email_UnverifiedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Error_Email_UnverifiedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
