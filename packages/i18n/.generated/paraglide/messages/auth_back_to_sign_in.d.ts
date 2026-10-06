export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Back_To_Sign_InInputs = {};
/**
* | output |
* | --- |
* | "Back to log in" |
*
* @param {Auth_Back_To_Sign_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_back_to_sign_in: ((inputs?: Auth_Back_To_Sign_InInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Back_To_Sign_InInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
