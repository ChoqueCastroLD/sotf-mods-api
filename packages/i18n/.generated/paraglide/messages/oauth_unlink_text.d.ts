export type LocalizedString = import('../runtime.js').LocalizedString;
export type Oauth_Unlink_TextInputs = {};
/**
* | output |
* | --- |
* | "You will sign in with your email and password instead. Enter your password to confirm. If you created your account with Discord, set a password first with “F..." |
*
* @param {Oauth_Unlink_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const oauth_unlink_text: ((inputs?: Oauth_Unlink_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Unlink_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
