export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Code_Email_Not_Verified_DetailInputs = {};
/**
* | output |
* | --- |
* | "Open the link we emailed you to verify your address, then try again. You can request a new link in Settings." |
*
* @param {Errors_Code_Email_Not_Verified_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_code_email_not_verified_detail: ((inputs?: Errors_Code_Email_Not_Verified_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Email_Not_Verified_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
