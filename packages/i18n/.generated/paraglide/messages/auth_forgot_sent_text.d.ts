export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Forgot_Sent_TextInputs = {
    email: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "If an account exists for {email}, a reset link is on its way. It works for 60 minutes." |
*
* @param {Auth_Forgot_Sent_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_forgot_sent_text: ((inputs: Auth_Forgot_Sent_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Forgot_Sent_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
