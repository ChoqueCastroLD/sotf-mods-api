export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Verify_Sign_In_To_ResendInputs = {};
/**
* | output |
* | --- |
* | "Log in to get a new link" |
*
* @param {Auth_Verify_Sign_In_To_ResendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_verify_sign_in_to_resend: ((inputs?: Auth_Verify_Sign_In_To_ResendInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Verify_Sign_In_To_ResendInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
