export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Code_Invalid_Credentials_DetailInputs = {};
/**
* | output |
* | --- |
* | "That email, handle or password doesn’t match an account. Check them and try again." |
*
* @param {Errors_Code_Invalid_Credentials_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_code_invalid_credentials_detail: ((inputs?: Errors_Code_Invalid_Credentials_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Invalid_Credentials_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
